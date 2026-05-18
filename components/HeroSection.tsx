import Link from "next/link";
import { ArrowRight, Star, Check } from 'lucide-react';

const badges = ["Trusted by 500+ companies", "99.9% uptime SLA", "24/7 support"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
          <Star className="w-4 h-4 fill-current text-amber-400" />
          <span>Rated #1 Digital Agency 2024</span>
          <ArrowRight className="w-3 h-3" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          <span className="text-white">Build the Future</span>
          <br />
          <span className="gradient-text">One Pixel at a Time</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          We design and develop stunning digital products — from blazing-fast websites to intelligent SaaS platforms — that help ambitious businesses scale and succeed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-300">
          <Link href="/services" className="btn-primary text-base px-8 py-4">
            Explore Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="btn-secondary text-base px-8 py-4">
            Talk to Us
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up delay-400">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-slate-400 text-sm">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-emerald-400" />
              </div>
              {badge}
            </div>
          ))}
        </div>

        {/* Hero image / mockup */}
        <div className="mt-20 relative animate-fade-in-up delay-500">
          <div className="relative mx-auto max-w-4xl">
            {/* Browser chrome */}
            <div className="glass-card overflow-hidden animate-pulse-glow">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
                  <span className="text-slate-500 text-xs">nexus.io/dashboard</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://www.cisco.com/c/dam/en/us/td/i/500001-600000/500001-510000/adoc/lan-topology-horizontal.jpg"
                  alt="Nexus platform dashboard preview"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a]/60 to-transparent" />
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-4 sm:-left-12 top-1/3 glass-card px-4 py-3 animate-float shadow-xl">
              <p className="text-xs text-slate-400 mb-1">Monthly Revenue</p>
              <p className="text-xl font-bold text-white">$2.4M</p>
              <p className="text-xs text-emerald-400">+24% this month</p>
            </div>
            <div className="absolute -right-4 sm:-right-12 top-1/2 glass-card px-4 py-3 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
              <p className="text-xs text-slate-400 mb-1">Active Users</p>
              <p className="text-xl font-bold text-white">48.2K</p>
              <p className="text-xs text-indigo-400">+12% this week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
