import { Button } from "@/components/ui/button";
import { Calendar, Rocket, Users, Globe, ExternalLink, CheckCircle, Clock, Target } from "lucide-react";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 px-6 bg-navy-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-2 mb-6">
            <Rocket className="w-4 h-4 text-electric-blue animate-pulse" />
            <span className="text-sm text-electric-blue font-medium">Launch Timeline</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            Roadmap &
            <br />
            <span className="text-electric-blue">Go-to-Market</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            From design to global deployment - our strategic rollout plan for ProofPass
          </p>
        </div>

        {/* Timeline Animation */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-electric-blue/20">
            <div className="w-full bg-gradient-to-b from-electric-blue to-verification-green animate-pulse" style={{ height: '60%' }} />
          </div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {[
              {
                wave: "Wave 1",
                title: "Design & Architecture",
                status: "current",
                icon: Target,
                timeline: "Now - Q1 2024",
                description: "Complete design system, technical architecture, and submission for WaveHack",
                deliverables: [
                  "Notion design documentation",
                  "GitHub repository with architecture",
                  "Figma prototype and user flows",
                  "Filecoin integration planning"
                ],
                color: "verification-green"
              },
              {
                wave: "Wave 2", 
                title: "MVP on Testnet",
                status: "next",
                icon: Rocket,
                timeline: "Q2 2024",
                description: "Launch working prototype on Filecoin testnet with core functionality",
                deliverables: [
                  "Document upload and AI parsing",
                  "FilecoinWarmStorageService integration", 
                  "PDP monitoring dashboard",
                  "ProofStamp NFT minting"
                ],
                color: "electric-blue"
              },
              {
                wave: "Wave 3",
                title: "NGO Partnerships",
                status: "planned",
                icon: Users,
                timeline: "Q3 2024", 
                description: "Partner with 3 refugee NGOs for real-world testing and validation",
                deliverables: [
                  "UNHCR pilot program",
                  "Refugee identity verification",
                  "Field testing in 3 countries",
                  "Impact measurement framework"
                ],
                color: "electric-blue"
              },
              {
                wave: "Wave 4",
                title: "DeFi & Global Launch",
                status: "future",
                icon: Globe,
                timeline: "Q4 2024",
                description: "Filecoin-powered Visa API for DeFi and global platform rollout",
                deliverables: [
                  "DeFi credit protocol integration",
                  "Visa/immigration API launch",
                  "Global FilCDN deployment",
                  "Enterprise partnerships"
                ],
                color: "electric-blue"
              }
            ].map((wave, i) => (
              <div 
                key={i}
                className={`relative animate-slide-up ${i % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {/* Timeline Node */}
                <div className={`absolute ${i % 2 === 0 ? 'right-0 lg:-right-6' : 'left-0 lg:-left-6'} top-8 w-12 h-12 bg-gradient-to-br from-${wave.color} to-${wave.color}-glow rounded-full flex items-center justify-center border-4 border-navy-deep z-10 ${wave.status === 'current' ? 'animate-glow-pulse' : ''}`}>
                  <wave.icon className="w-6 h-6 text-navy-deep" />
                </div>

                {/* Wave Card */}
                <div className={`bg-navy-medium/30 backdrop-blur-glass border border-${wave.color}/20 rounded-3xl p-8 ml-8 lg:ml-0 ${i % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'} hover:border-${wave.color}/40 hover:shadow-glow-blue transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-off-white mb-1">{wave.wave}</div>
                      <div className="text-xl font-semibold text-off-white">{wave.title}</div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      wave.status === 'current' ? `bg-${wave.color}/10 text-${wave.color} border border-${wave.color}/30 animate-verification-pulse` :
                      wave.status === 'next' ? 'bg-electric-blue/10 text-electric-blue border border-electric-blue/30' :
                      wave.status === 'planned' ? 'bg-navy-light/10 text-off-white/60 border border-navy-light/30' :
                      'bg-navy-light/5 text-off-white/40 border border-navy-light/20'
                    }`}>
                      {wave.status === 'current' && <Clock className="w-4 h-4 inline mr-2" />}
                      {wave.timeline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-off-white/70 mb-6 leading-relaxed">{wave.description}</p>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-off-white/80 uppercase tracking-wide">Key Deliverables</h4>
                    <div className="grid gap-3">
                      {wave.deliverables.map((deliverable, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle className={`w-4 h-4 text-${wave.color} flex-shrink-0`} />
                          <span className="text-off-white/70 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GTM Strategy */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-off-white mb-8">Go-to-Market Strategy</h3>
            <div className="space-y-6">
              {[
                {
                  target: "Refugee Organizations",
                  description: "Partner with UNHCR and NGOs for identity verification in displacement scenarios",
                  impact: "2M+ refugees gain verifiable identity"
                },
                {
                  target: "Digital Nomad Platforms", 
                  description: "Integration with remote work and visa platforms for location verification",
                  impact: "50M+ remote workers"
                },
                {
                  target: "DeFi Credit Protocols",
                  description: "Enable undercollateralized lending based on verified residency history", 
                  impact: "$10B+ credit market"
                }
              ].map((strategy, i) => (
                <div key={i} className="bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/20 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-off-white mb-2">{strategy.target}</h4>
                  <p className="text-off-white/70 mb-3">{strategy.description}</p>
                  <div className="text-sm text-verification-green font-medium bg-verification-green/10 rounded-lg px-3 py-1 inline-block">
                    {strategy.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/20 rounded-3xl p-8 hover:shadow-glow-blue transition-all duration-300">
              <Calendar className="w-12 h-12 text-electric-blue mb-6 animate-float" />
              <h3 className="text-2xl font-bold text-off-white mb-4">Next Milestones</h3>
              <div className="space-y-4 mb-8">
                {[
                  { date: "Jan 15", milestone: "WaveHack submission" },
                  { date: "Feb 1", milestone: "Testnet deployment" },
                  { date: "Mar 15", milestone: "NGO partnerships" },
                  { date: "Apr 1", milestone: "Public beta launch" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-navy-deep/50 rounded-lg">
                    <span className="text-off-white font-medium">{item.milestone}</span>
                    <span className="text-electric-blue text-sm">{item.date}</span>
                  </div>
                ))}
              </div>
              <Button variant="verification" size="lg" className="w-full">
                Get Updates
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default RoadmapSection;