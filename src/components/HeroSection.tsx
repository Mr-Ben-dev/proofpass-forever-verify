import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={heroImage} 
          alt="Futuristic Earth with glowing networks"
          className="w-full h-full object-cover animate-spin-slow"
        />
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/30 rounded-full px-6 py-2 mb-8 animate-float">
          <Zap className="w-4 h-4 text-verification-green animate-verification-pulse" />
          <span className="text-sm text-off-white">Built on Filecoin Onchain Cloud</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-off-white mb-6 animate-slide-up">
          Prove You Live
          <br />
          <span className="bg-gradient-electric bg-clip-text text-transparent animate-glow-pulse">
            Where You Live
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-off-white/80 mb-8 max-w-4xl mx-auto animate-fade-in">
          The world's first decentralized proof-of-residency identity network. 
          Verify where you live <span className="text-electric-blue font-semibold">forever</span> using 
          tamper-proof, on-chain data stored immutably on Filecoin.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            { icon: Globe, label: "2.3B people", subtitle: "lack trusted IDs" },
            { icon: Shield, label: "AI deepfakes", subtitle: "up 900% since 2023" },
            { icon: Zap, label: "Instant verification", subtitle: "in <1 second globally" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/20 rounded-2xl p-6 animate-slide-up hover:shadow-glow-blue transition-all duration-300"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <stat.icon className="w-8 h-8 text-electric-blue mb-3 mx-auto" />
              <div className="text-2xl font-bold text-off-white">{stat.label}</div>
              <div className="text-sm text-off-white/60">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="xl" className="group">
            How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass-hero" size="xl">
            <Globe className="w-5 h-5" />
            View Live Demo
          </Button>
        </div>

        {/* Tagline */}
        <p className="text-sm text-electric-blue font-medium mt-8 animate-fade-in">
          Decentralized identity. Verified residency. On Filecoin.
        </p>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
};

export default HeroSection;