import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  iconClass: string;
  glow: string;
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  iconClass,
  glow,
  href = "/contact",
}: ServiceCardProps) {
  return (
    <article className="glass-card p-8 flex flex-col gap-5 group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2">
      <div
        className={"w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 " + iconClass}
        style={{ boxShadow: "0 8px 32px " + glow }}
      >
        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
      </div>

      <div>
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <ul className="space-y-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-xs">Starting from</p>
          <p className="text-white font-bold text-lg">{price}</p>
        </div>
        <Link
          href={href}
          className="flex items-center gap-1.5 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors group/link"
          aria-label={"Learn more about " + title}
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
