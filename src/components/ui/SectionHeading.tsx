type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
