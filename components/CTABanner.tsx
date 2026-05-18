import Link from "next/link";
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to build something amazing?",
  subtitle = "Let's turn your vision into a world-class digital product. Our team is ready to help you every step of the way.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/services",
}: CTABannerProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 50%, rgba(236,72,153,0.1) 100%)",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Let&apos;s Work Together
            </div>

            <h2 id="cta-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              {title}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={primaryHref} className="btn-primary text-base px-8 py-4">
                {primaryLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={secondaryHref} className="btn-secondary text-base px-8 py-4">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
