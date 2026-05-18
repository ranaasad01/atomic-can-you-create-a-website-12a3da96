import type { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  lines: string[];
  iconClass: string;
  glow: string;
}

export default function ContactInfoCard({ icon: Icon, title, lines, iconClass, glow }: ContactInfoCardProps) {
  return (
    <div className="glass-card p-6 flex items-start gap-4 hover:border-indigo-500/30 transition-all duration-300">
      <div
        className={"w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 " + iconClass}
        style={{ boxShadow: "0 8px 24px " + glow }}
      >
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        {lines.map((line) => (
          <p key={line} className="text-slate-400 text-sm">{line}</p>
        ))}
      </div>
    </div>
  );
}
