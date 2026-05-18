interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: "2012", label: "Founded", description: "Over a decade of digital excellence" },
  { value: "500+", label: "Projects", description: "Delivered across 30+ industries" },
  { value: "98%", label: "Satisfaction", description: "Client retention rate year over year" },
  { value: "$2B+", label: "Value Created", description: "In client revenue attributed to our work" },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-card p-6 text-center hover:border-indigo-500/30 transition-all duration-300"
        >
          <p className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
          <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
          <p className="text-slate-500 text-xs">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
