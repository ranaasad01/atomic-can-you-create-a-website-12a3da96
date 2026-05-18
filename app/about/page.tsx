export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import StatsRow from "@/components/StatsRow";
import CTABanner from "@/components/CTABanner";
import { Check, ArrowRight } from 'lucide-react';
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexus — our story, mission, values, and the talented team behind the world-class digital products we build.",
};

const team = [
  {
    name: "Alexandra Moore",
    role: "CEO & Co-Founder",
    bio: "Former Google engineer with 15 years building products used by billions. Passionate about the intersection of design and technology.",
    avatar: "https://www.billboard.com/wp-content/uploads/2023/06/Alexandra-Moore-press-credit-Mark-Gonzales-2023-billboard-pro-1260.jpg?w=942&h=628&crop=1",
    tags: ["Strategy", "Product", "Leadership"],
  },
  {
    name: "Daniel Park",
    role: "CTO & Co-Founder",
    bio: "Ex-Meta infrastructure lead. Architected systems handling 100M+ daily active users. Obsessed with performance and reliability.",
    avatar: "https://static.wikia.nocookie.net/questism/images/2/21/Daniel_park_lookism.png/revision/latest/scale-to-width/360?cb=20250423224202",
    tags: ["Engineering", "Architecture", "AI"],
  },
  {
    name: "Isabelle Laurent",
    role: "Head of Design",
    bio: "Award-winning designer who previously led design at Airbnb and Figma. Believes great design is invisible — it just works.",
    avatar: "https://cfany.org/wp-content/uploads/2018/09/Laurant.jpg",
    tags: ["UI/UX", "Brand", "Motion"],
  },
  {
    name: "Ravi Sharma",
    role: "Head of Engineering",
    bio: "Full-stack wizard with deep expertise in React, Node.js, and cloud infrastructure. Mentor, open-source contributor, and coffee enthusiast.",
    avatar: "https://cdn.clarku.edu/faculty/wp-content/uploads/sites/5/2024/12/Ravi-Sharma-720x720-.jpg",
    tags: ["React", "Node.js", "Cloud"],
  },
  {
    name: "Mia Thompson",
    role: "Head of Client Success",
    bio: "Dedicated to ensuring every client achieves their goals. Brings warmth, clarity, and relentless follow-through to every engagement.",
    avatar: "https://images-na.ssl-images-amazon.com/images/I/81bpToh7BlL.jpg",
    tags: ["Relationships", "Strategy", "Growth"],
  },
  {
    name: "Carlos Mendez",
    role: "Lead AI Engineer",
    bio: "PhD in Machine Learning from MIT. Pioneering the integration of LLMs and computer vision into real-world business applications.",
    avatar: "https://m.media-amazon.com/images/M/MV5BZDY0Zjk5M2ItOGM0NC00NjY0LWIzYWItMDU0YzBhYjc1NjlhXkEyXkFqcGc@._V1_.jpg",
    tags: ["ML", "LLMs", "Python"],
  },
];

const values = [
  { title: "Craft Over Speed", description: "We take pride in every pixel, every line of code. Quality is non-negotiable." },
  { title: "Radical Transparency", description: "No surprises. We communicate proactively, share progress openly, and own our mistakes." },
  { title: "Client Partnership", description: "We don't just execute briefs — we think like co-founders invested in your success." },
  { title: "Continuous Learning", description: "Technology evolves fast. We dedicate 20% of our time to R&D and staying ahead of the curve." },
];

const timeline = [
  { year: "2012", event: "Founded in San Francisco with a team of 3 engineers and a shared vision." },
  { year: "2015", event: "Reached 50 clients and opened our London office. Launched our first AI-powered product." },
  { year: "2018", event: "Grew to 100+ team members. Named one of Fast Company's Most Innovative Companies." },
  { year: "2021", event: "Expanded to Asia-Pacific. Delivered our 300th project and crossed $500M in client value created." },
  { year: "2024", event: "500+ projects delivered. 40+ team members across 4 continents. Still day one." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-pattern overflow-hidden" aria-labelledby="about-heading">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            Our Story
          </div>
          <h1 id="about-heading" className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
            We&apos;re on a mission to{" "}
            <span className="gradient-text">elevate the web</span>
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Founded in 2012, Nexus started with a simple belief: that great software should be beautiful, fast, and accessible to every business — not just the Fortune 500. Over a decade later, that belief drives everything we do.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsRow />
      </section>

      {/* Mission & Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="values-heading" className="text-4xl font-bold text-white mb-6">
              What we stand for
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our values aren&apos;t words on a wall — they&apos;re the principles that guide every decision, every hire, and every line of code we write. They&apos;re why clients come back to us again and again.
            </p>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{v.title}</p>
                    <p className="text-slate-400 text-sm">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3879328520467414468"
              alt="Nexus team collaborating in a modern office"
              className="rounded-2xl w-full h-80 object-cover"
              style={{ border: "1px solid rgba(99,102,241,0.2)" }}
            />
            <div
              className="absolute -bottom-4 -right-4 glass-card px-5 py-4"
            >
              <p className="text-white font-bold text-2xl">12+</p>
              <p className="text-slate-400 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-4xl font-bold text-white mb-12 text-center">
          Our <span className="gradient-text">journey</span>
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent hidden md:block" aria-hidden="true" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={"flex flex-col md:flex-row items-center gap-6 " + (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
              >
                <div className={"flex-1 " + (index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <div className="glass-card p-5 inline-block max-w-sm hover:border-indigo-500/30 transition-all duration-300">
                    <p className="text-slate-400 text-sm">{item.event}</p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg" style={{ boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}>
                  <span className="text-white text-xs font-bold">{item.year.slice(2)}</span>
                </div>
                <div className="flex-1">
                  <p className="text-indigo-400 font-bold text-xl">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="team-heading">
        <div className="text-center mb-12">
          <h2 id="team-heading" className="text-4xl font-bold text-white mb-4">
            Meet the <span className="gradient-text">team</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            World-class talent united by a passion for building exceptional digital products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <p className="text-white font-semibold">{member.name}</p>
                  <p className="text-indigo-400 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Join us on the journey"
        subtitle="Whether you're a client looking to build something great, or a talented individual wanting to join our team — we'd love to hear from you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Open Roles"
        secondaryHref="/contact"
      />
    </div>
  );
}
