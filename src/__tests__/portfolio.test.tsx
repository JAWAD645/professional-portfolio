import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { PortfolioPage } from "@/components/PortfolioPage";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { navigation, portfolio } from "@/data/portfolio";

describe("portfolio page", () => {
  it("renders the main identity and every supported section", () => {
    render(<PortfolioPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: portfolio.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(portfolio.role)).toBeInTheDocument();

    for (const item of navigation) {
      expect(document.querySelector(item.href)).toBeInTheDocument();
    }
  });

  it("renders primary navigation and valid internal destinations", () => {
    render(<PortfolioPage />);
    const nav = screen.getByRole("navigation", {
      name: "Primary navigation",
    });

    for (const item of navigation) {
      const link = within(nav).getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.href);
      expect(document.querySelector(item.href)).toBeInTheDocument();
    }
  });

  it("offers browser-native CV downloads from navigation, hero, and contact", () => {
    render(<PortfolioPage />);
    const downloadButtons = screen.getAllByRole("button", {
      name: /download mohammad jawadul tashick's cv as a pdf/i,
    });

    expect(downloadButtons.length).toBeGreaterThanOrEqual(3);
    for (const button of downloadButtons) {
      expect(button).toBeEnabled();
    }
    expect(
      document.querySelector('a[href="/resume.pdf"][download]'),
    ).not.toBeInTheDocument();
  });

  it("fetches the CV before starting a Blob download", async () => {
    const user = userEvent.setup();
    const cvContent = new TextEncoder().encode("%PDF-test\n%%EOF").buffer;
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: vi.fn().mockResolvedValue(cvContent),
    });
    const createObjectUrlMock = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:http://localhost/cv-download");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    let downloadedFilename = "";
    let downloadedHref = "";
    const anchorClickMock = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(function (this: HTMLAnchorElement) {
        downloadedFilename = this.download;
        downloadedHref = this.href;
      });
    vi.stubGlobal("showSaveFilePicker", undefined);
    vi.stubGlobal("fetch", fetchMock);
    render(<DownloadCVButton />);

    const downloadButton = screen.getByRole("button", {
      name: /download mohammad jawadul tashick's cv as a pdf/i,
    });
    await user.click(downloadButton);

    await waitFor(() => expect(anchorClickMock).toHaveBeenCalledTimes(1));
    expect(fetchMock).toHaveBeenCalledWith("/resume-data.txt", {
      cache: "no-store",
    });
    expect(createObjectUrlMock).toHaveBeenCalledTimes(1);
    expect(downloadedHref).toBe("blob:http://localhost/cv-download");
    expect(downloadedFilename).toBe("Mohammad-Jawadul-Tashick-CV.pdf");
    expect(downloadButton).toHaveTextContent("CV downloaded");
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("uses the browser download manager even when a file picker is available", async () => {
    const user = userEvent.setup();
    const cvContent = new TextEncoder().encode("%PDF-test\n%%EOF").buffer;
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: vi.fn().mockResolvedValue(cvContent),
    });
    const createObjectUrlMock = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:http://localhost/cv-download");
    vi.spyOn(URL, "revokeObjectURL").mockImplementation(() => undefined);
    const showSaveFilePickerMock = vi.fn();
    const anchorClickMock = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);
    vi.stubGlobal("showSaveFilePicker", showSaveFilePickerMock);
    vi.stubGlobal("fetch", fetchMock);
    render(<DownloadCVButton />);

    const downloadButton = screen.getByRole("button", {
      name: /download mohammad jawadul tashick's cv as a pdf/i,
    });
    await user.click(downloadButton);

    await waitFor(() => expect(anchorClickMock).toHaveBeenCalledTimes(1));
    expect(showSaveFilePickerMock).not.toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledWith("/resume-data.txt", {
      cache: "no-store",
    });
    expect(createObjectUrlMock).toHaveBeenCalledWith(expect.any(Blob));
    expect(downloadButton).toHaveTextContent("CV downloaded");
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("rejects invalid CV data instead of saving a corrupt PDF", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      arrayBuffer: vi
        .fn()
        .mockResolvedValue(new TextEncoder().encode("not a PDF").buffer),
    });
    vi.stubGlobal("showSaveFilePicker", undefined);
    vi.stubGlobal("fetch", fetchMock);
    vi.spyOn(URL, "createObjectURL");
    render(<DownloadCVButton />);

    const downloadButton = screen.getByRole("button", {
      name: /download mohammad jawadul tashick's cv as a pdf/i,
    });
    await user.click(downloadButton);

    await waitFor(() =>
      expect(downloadButton).toHaveTextContent("Try download again"),
    );
    expect(URL.createObjectURL).not.toHaveBeenCalled();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("uses safe external links and routes message actions to the contact form", () => {
    render(<PortfolioPage />);

    expect(
      screen.getByRole("link", {
        name: `Send a message to ${portfolio.name}`,
      }),
    ).toHaveAttribute("href", "#contact");
    expect(
      screen.getByRole("link", { name: "Send message" }),
    ).toHaveAttribute("href", "#contact-form");

    const externalLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'),
    );
    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("submits a portfolio message and shows confirmation", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);
    render(<PortfolioPage />);

    await user.type(screen.getByLabelText("Name"), "Alex Visitor");
    await user.type(screen.getByLabelText("Email"), "alex@example.com");
    await user.type(
      screen.getByLabelText("Message"),
      "I would like to discuss a data analytics opportunity.",
    );
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      await screen.findByText(/message sent\. thank you/i),
    ).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `https://formsubmit.co/ajax/${portfolio.email}`,
      expect.objectContaining({ method: "POST" }),
    );
    vi.unstubAllGlobals();
  });

  it("opens, traps, and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<PortfolioPage />);

    await user.click(
      screen.getByRole("button", { name: "Open navigation menu" }),
    );
    const dialog = screen.getByRole("dialog", { name: "Mobile navigation" });
    expect(dialog).toBeInTheDocument();
    expect(document.getElementById("main-content")).toHaveAttribute("inert");

    await user.click(within(dialog).getByRole("link", { name: "About" }));
    await waitFor(() => {
      expect(
        screen.queryByRole("dialog", { name: "Mobile navigation" }),
      ).not.toBeInTheDocument();
    });
    expect(document.getElementById("main-content")).not.toHaveAttribute("inert");
  });

  it("omits the projects section when optional project data is absent", () => {
    const { container } = render(<ProjectsSection projects={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders reusable animation wrappers without hiding content", () => {
    render(
      <AnimatedSection>
        <p>Accessible animated content</p>
      </AnimatedSection>,
    );
    expect(screen.getByText("Accessible animated content")).toBeInTheDocument();
  });
});
