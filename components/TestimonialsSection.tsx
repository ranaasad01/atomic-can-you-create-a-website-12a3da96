import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Luminary Health",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sarah_Chen_%E9%99%88%E6%B7%91%E6%A1%A6_1986_Malaysia_Concert_Live_Photo_Original_%28cropped%29.jpg",
    rating: 5,
    quote:
      "Nexus completely transformed our patient portal. The new platform handles 3x the traffic with zero downtime, and our user satisfaction scores jumped from 62% to 94%. Absolutely phenomenal work.",
  },
  {
    name: "Marcus Rivera",
    role: "Founder, Orbit Commerce",
    avatar: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063965952093",
    rating: 5,
    quote:
      "We went from a clunky legacy system to a sleek, modern e-commerce platform in just 8 weeks. Revenue increased 40% in the first quarter post-launch. The Nexus team is world-class.",
  },
  {
    name: "Priya Nair",
    role: "Head of Product, Stackwise",
    avatar: "https://www.unilever.com/content-images/92ui5egz/production/48a5ec9a38a659b516ff08dfb8e5654231d64ff7-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&fm=jpg",
    rating: 5,
    quote:
      "Their attention to detail is unmatched. Every micro-interaction, every animation, every edge case — handled perfectly. Our investors were blown away at the demo. Highly recommend.",
  },
  {
    name: "James Okafor",
    role: "CEO, Finbridge",
    avatar: "https://achiya.org/wp-content/uploads/writers/james-okafor-4d4bc7.webp",
    rating: 5,
    quote:
      "Nexus built our entire fintech dashboard from scratch. The security architecture is rock-solid, the UI is beautiful, and the team communicated proactively throughout. 10/10.",
  },
  {
    name: "Elena Vasquez",
    role: "VP Engineering, Cloudnine",
    avatar: "https://swearer.brown.edu/sites/default/files/styles/portrait_classic_xsml/public/2025-09/Elena%20Headshot_4%20copy.jpeg?h=5ec5ce13&itok=_YCwmIuL",
    rating: 5,
    quote:
      "We've worked with many agencies over the years. Nexus stands apart — they think like product owners, not just developers. They challenged our assumptions and made the product better.",
  },
  {
    name: "Tom Whitfield",
    role: "Director, Apex Analytics",
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQEBE0TXNQkMfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654295923553?e=2147483647&v=beta&t=OOFvOTukqygyKL8dPL9eWIbExk-bCaMBeh3phZ_QYkM",
    rating: 5,
    quote:
      "Our data visualization platform needed a complete overhaul. Nexus delivered a stunning, performant solution that our data scientists love. The charts load in milliseconds. Incredible.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={"Rating: " + count + " out of 5 stars"}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            Client Stories
          </div>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="gradient-text">industry leaders</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear from the companies we&apos;ve helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass-card p-6 flex flex-col gap-4 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <StarRating count={t.rating} />
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-2 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12+", label: "Years of Experience" },
            { value: "40+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
