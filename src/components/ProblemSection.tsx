import { AlertTriangle, X, UserX, Building, CreditCard } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 px-6 bg-navy-deep relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-6 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive animate-pulse" />
            <span className="text-sm text-destructive font-medium">Identity Crisis</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            Why Residency
            <br />
            <span className="text-destructive">is Broken</span>
          </h2>
        </div>

        {/* Problem Scenarios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Building,
              title: "Apartment Denied",
              description: "Sarah can't rent because her foreign documents aren't accepted",
              impact: "Housing discrimination"
            },
            {
              icon: CreditCard,
              title: "Remote Worker Blocked",
              description: "Alex loses banking access when relocating between countries",
              impact: "Financial exclusion"
            },
            {
              icon: UserX,
              title: "Refugee Rejected",
              description: "Maria has no way to prove her identity after fleeing conflict",
              impact: "Identity erasure"
            }
          ].map((problem, i) => (
            <div 
              key={i}
              className="group bg-navy-medium/30 backdrop-blur-glass border border-destructive/20 rounded-2xl p-8 hover:border-destructive/40 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Glitch Effect on Hover */}
              <div className="relative mb-6">
                <problem.icon className="w-12 h-12 text-destructive/80 group-hover:text-destructive transition-colors" />
                <X className="absolute top-0 left-0 w-12 h-12 text-destructive opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
              </div>
              
              <h3 className="text-xl font-bold text-off-white mb-3 group-hover:text-destructive transition-colors">
                {problem.title}
              </h3>
              <p className="text-off-white/70 mb-4">{problem.description}</p>
              <div className="text-sm text-destructive font-medium bg-destructive/10 rounded-lg px-3 py-1 inline-block">
                {problem.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="text-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-medium/20 backdrop-blur-glass border border-destructive/30 rounded-2xl p-8 animate-slide-up">
              <div className="text-5xl font-black text-destructive mb-2">2.3B</div>
              <div className="text-off-white font-medium">people lack trusted identity documents</div>
              <div className="text-sm text-off-white/60 mt-2">— World Bank Report 2024</div>
            </div>
            <div className="bg-navy-medium/20 backdrop-blur-glass border border-destructive/30 rounded-2xl p-8 animate-slide-up">
              <div className="text-5xl font-black text-destructive mb-2">900%</div>
              <div className="text-off-white font-medium">increase in AI deepfakes since 2023</div>
              <div className="text-sm text-off-white/60 mt-2">Trust in digital identity is collapsing</div>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="max-w-3xl mx-auto animate-fade-in">
            <p className="text-2xl md:text-3xl text-off-white font-light leading-relaxed">
              Centralized systems can't be trusted.
              <br />
              <span className="text-electric-blue font-semibold">
                It's time for a new approach.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-destructive/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default ProblemSection;