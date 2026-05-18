import { Layout, Activity, Lock, Sparkles, ArrowRight, GitBranch, Terminal, Star } from 'lucide-react';
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClass: string;
  glow: string;
}

const features: Feature[] = [
  {
    icon: Layout,
    title: "Pixel-Perfect Design",
    description: "Every interface we craft is meticulously designed for beauty and usability — responsive across all devices and screen sizes.",
    iconClass: "bg-gradient-to-br from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: Activity,
    title: "Blazing Performance",
    description: "We obsess over Core Web Vitals. Our sites consistently score 95+ on Lighthouse, ensuring fast load times and happy users.",
    iconClass: "bg-gradient-to-br from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Security is baked in from day one — SSL, OWASP compliance, penetration testing, and regular audits keep your data safe.",
    iconClass: "bg-gradient-to-br from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Features",
    description: "Integrate cutting-edge AI capabilities — from intelligent search to personalized recommendations — into your product.",
    iconClass: "bg-gradient-to-br from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: GitBranch,
    title: "Scalable Architecture",
    description: "Built on modern cloud-native infrastructure that scales effortlessly from 10 to 10 million users without breaking a sweat.",
    iconClass: "bg-gradient-to-br from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.3)",
  },
  {
    icon: Terminal,
    title: "Developer-First APIs",
    description: "Clean, well-documented REST and GraphQL APIs with SDKs in every major language so your team can ship faster.",
    iconClass: "bg-gradient-to-br from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="features-heading">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            Why Choose Nexus
          </div>
          <h2 id="features-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">succeed online</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From concept to launch and beyond, we provide the tools, expertise, and support to make your digital vision a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card p-6 group hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 " + feature.iconClass}
                  style={{ boxShadow: "0 8px 24px " + feature.glow }}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
