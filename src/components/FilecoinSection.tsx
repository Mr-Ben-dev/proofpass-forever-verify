import { Button } from "@/components/ui/button";
import { Database, Zap, CreditCard, Layers, ExternalLink, CheckCircle } from "lucide-react";

const FilecoinSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-2 mb-6 animate-glow-pulse">
            <Layers className="w-4 h-4 text-electric-blue" />
            <span className="text-sm text-electric-blue font-medium">Powered by Filecoin</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            Filecoin Onchain Cloud
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Integration</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Built on the most advanced decentralized storage infrastructure with enterprise-grade reliability
          </p>
        </div>

        {/* Animated Stack Diagram */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "FilecoinWarmStorageService",
                description: "Real-time storage with PDP proofs ensuring data persistence and integrity",
                features: ["Instant deal creation", "PDP light-pulse verification", "99.9% uptime SLA"],
                color: "electric-blue"
              },
              {
                icon: Zap,
                title: "FilCDN",
                description: "Lightning-fast global retrieval network for instant access anywhere",
                features: ["<1s global access", "Edge optimization", "Bandwidth scaling"],
                color: "verification-green"
              },
              {
                icon: CreditCard,
                title: "FilecoinPay",
                description: "Seamless payments in USDFC for verification and storage services",
                features: ["$1-5 verification fees", "Streaming payments", "No grants needed"],
                color: "electric-blue"
              },
              {
                icon: Layers,
                title: "Synapse SDK",
                description: "Unified API that orchestrates all Filecoin services seamlessly",
                features: ["Single integration point", "TypeScript support", "Real-time monitoring"],
                color: "verification-green"
              }
            ].map((service, i) => (
              <div 
                key={i}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Connection Lines */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-electric-blue/30 z-10">
                    <div className="w-full h-full bg-gradient-to-r from-electric-blue to-transparent animate-pulse" />
                  </div>
                )}

                {/* Service Card */}
                <div className={`bg-navy-medium/30 backdrop-blur-glass border border-${service.color}/20 rounded-3xl p-8 h-full hover:border-${service.color}/40 hover:shadow-glow-blue transition-all duration-500 group-hover:transform group-hover:scale-105`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-${service.color}-glow rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow-pulse`}>
                    <service.icon className="w-8 h-8 text-navy-deep" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-off-white mb-4">{service.title}</h3>
                  <p className="text-off-white/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle className={`w-4 h-4 text-${service.color}`} />
                        <span className="text-sm text-off-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flow Visualization */}
          <div className="mt-16 relative">
            <div className="text-center mb-8">
              <p className="text-electric-blue font-medium">Data flows securely through the complete Filecoin stack</p>
            </div>
            <div className="flex justify-center">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-electric-blue rounded-full animate-particle-float mx-2"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-off-white mb-6">Why Filecoin?</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Immutable Storage",
                  description: "Your residency data is stored permanently with cryptographic proof of persistence"
                },
                {
                  title: "Global Network",
                  description: "Decentralized infrastructure ensures no single point of failure or censorship"
                },
                {
                  title: "Cost Effective",
                  description: "Pay-as-you-use model with competitive pricing for long-term storage"
                },
                {
                  title: "Enterprise Ready",
                  description: "SLA-backed performance with enterprise-grade reliability and support"
                }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-verification-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-off-white mb-2">{benefit.title}</h4>
                    <p className="text-off-white/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/20 rounded-3xl p-8 hover:shadow-glow-blue transition-all duration-300">
              <h3 className="text-2xl font-bold text-off-white mb-6">Integration Roadmap</h3>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1", title: "Storage Layer", status: "complete" },
                  { phase: "Phase 2", title: "PDP Monitoring", status: "complete" },
                  { phase: "Phase 3", title: "FilCDN Integration", status: "in-progress" },
                  { phase: "Phase 4", title: "FilecoinPay Gateway", status: "planned" }
                ].map((phase, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-navy-deep/50 rounded-xl">
                    <div>
                      <div className="text-off-white font-medium">{phase.phase}</div>
                      <div className="text-sm text-off-white/60">{phase.title}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      phase.status === 'complete' ? 'bg-verification-green/10 text-verification-green border border-verification-green/30' :
                      phase.status === 'in-progress' ? 'bg-electric-blue/10 text-electric-blue border border-electric-blue/30' :
                      'bg-navy-light/10 text-off-white/60 border border-navy-light/30'
                    }`}>
                      {phase.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/30 rounded-2xl px-8 py-4 animate-glow-pulse">
            <Layers className="w-8 h-8 text-electric-blue" />
            <span className="text-lg font-semibold text-off-white">Powered by Filecoin Onchain Cloud</span>
            <Button variant="ghost-glow" size="sm">
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-verification-green/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FilecoinSection;