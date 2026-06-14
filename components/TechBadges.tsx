const badgeClasses =
  "bg-foreground/5 border border-foreground/10 text-foreground/80 font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm backdrop-blur-sm transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground";

type TechBadgesProps = {
  items: string[];
  className?: string;
};

export default function TechBadges({ items, className = "" }: TechBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className={badgeClasses}>
          {item}
        </span>
      ))}
    </div>
  );
}
