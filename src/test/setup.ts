import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
});

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly thresholds = [0];

  disconnect() {}

  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {}
}

class MockResizeObserver implements ResizeObserver {
  disconnect() {}

  observe() {}

  unobserve() {}
}

Object.defineProperty(globalThis, "IntersectionObserver", {
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(globalThis, "ResizeObserver", {
  configurable: true,
  value: MockResizeObserver,
});

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(navigator, "clipboard", {
  configurable: true,
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
});

window.requestAnimationFrame = (callback: FrameRequestCallback) =>
  window.setTimeout(() => callback(performance.now()), 0);
window.cancelAnimationFrame = (id: number) => window.clearTimeout(id);
