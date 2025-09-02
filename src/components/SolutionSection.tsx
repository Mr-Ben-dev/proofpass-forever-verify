import { Button } from "@/components/ui/button";
import { Upload, Brain, Database, Award, ArrowRight, CheckCircle } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 px-6 bg-gradient-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-verification-green/10 border border-verification-green/30 rounded-full px-6 py-2 mb-6 animate-verification-pulse">
            <CheckCircle className="w-4 h-4 text-verification-green" />
            <span className="text-sm text-verification-green font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            How ProofPass
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            A 4-step particle flow that transforms your documents into permanent, verifiable proof of residency
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              step: "01",
              icon: Upload,
              title: "Upload & Encrypt",
              description: "User uploads utility bill, lease, or government document. AI extracts address data and encrypts it.",
              highlight: "AI-powered extraction"
            },
            {
              step: "02", 
              icon: Database,
              title: "Filecoin Storage",
              description: "File stored via FilecoinWarmStorageService with animated deal flow and PDP light-pulse verification.",
              highlight: "Immutable storage"
            },
            {
              step: "03",
              icon: Brain,
              title: "Continuous Verification", 
              description: "Storage verified every 24h with glowing PDP heartbeat. Data integrity maintained forever.",
              highlight: "24/7 PDP monitoring"
            },
            {
              step: "04",
              icon: Award,
              title: "ProofStamp NFT",
              description: "Verified 'ProofStamp' NFT is minted and burns onto the blockchain like a digital seal.",
              highlight: "Permanent credential"
            }
          ].map((step, i) => (
            <div 
              key={i}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {/* Connection Line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-electric-blue/30 z-10">
                  <div className="w-full h-full bg-gradient-to-r from-electric-blue to-transparent animate-pulse" />
                </div>
              )}

              {/* Step Card */}
              <div className="bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/20 rounded-3xl p-8 h-full hover:border-electric-blue/40 hover:shadow-glow-blue transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Step Number */}
                <div className="text-4xl font-black text-electric-blue/30 mb-4 group-hover:text-electric-blue transition-colors">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                  <step.icon className="w-8 h-8 text-navy-deep" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-off-white mb-4">{step.title}</h3>
                <p className="text-off-white/70 mb-6 leading-relaxed">{step.description}</p>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-verification-green/10 border border-verification-green/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-verification-green rounded-full animate-pulse" />
                  <span className="text-sm text-verification-green font-medium">{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Particle Animation Flow */}
        <div className="relative h-32 mb-16 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-electric-blue rounded-full animate-particle-float"
                style={{
                  left: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
          <div className="text-center pt-16">
            <p className="text-electric-blue font-medium">Your residency data flows securely through the Filecoin network</p>
          </div>
        </div>

        {/* Result Statement */}
        <div className="text-center">
          <div className="bg-navy-medium/20 backdrop-blur-glass border border-verification-green/30 rounded-3xl p-12 max-w-4xl mx-auto animate-fade-in">
            <Award className="w-16 h-16 text-verification-green mx-auto mb-6 animate-verification-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-off-white mb-4">
              Your residency, validated.
              <br />
              <span className="text-verification-green">Forever on Filecoin.</span>
            </h3>
            <p className="text-xl text-off-white/80 mb-8">
              Once verified, your ProofStamp NFT serves as permanent, tamper-proof evidence of your residency that can be trusted globally.
            </p>
            <Button variant="verification" size="xl">
              Try the Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-verification-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SolutionSection;