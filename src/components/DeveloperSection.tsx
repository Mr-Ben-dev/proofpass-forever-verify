import { Button } from "@/components/ui/button";
import { Code2, Globe, Zap, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const DeveloperSection = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeExample = `// Verify residency with a single API call
const proof = await Synapse.verifyPDP(wallet, region, expiry);
if (proof.valid) {
  grantAccess();
  console.log('Residency verified!');
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="api" className="py-20 px-6 bg-navy-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-2 mb-6">
            <Code2 className="w-4 h-4 text-electric-blue animate-pulse" />
            <span className="text-sm text-electric-blue font-medium">For Developers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-off-white mb-6">
            API for Governments
            <br />
            <span className="text-electric-blue">& Platforms</span>
          </h2>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            One simple SDK to integrate decentralized identity verification into any application
          </p>
        </div>

        {/* Split Screen Demo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Government Dashboard */}
          <div className="animate-slide-up">
            <div className="bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/20 rounded-3xl p-8 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-electric-blue" />
                <h3 className="text-2xl font-bold text-off-white">Government Dashboard</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Visa Applications", count: "1,247", status: "verified", color: "verification-green" },
                  { label: "Tax Residency Claims", count: "892", status: "pending", color: "electric-blue" },
                  { label: "Housing Permits", count: "2,156", status: "verified", color: "verification-green" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-navy-deep/50 rounded-xl">
                    <div>
                      <div className="text-off-white font-medium">{item.label}</div>
                      <div className="text-sm text-off-white/60">{item.count} applications</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${item.color}/10 text-${item.color} border border-${item.color}/30`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Web3 App Integration */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-navy-medium/30 backdrop-blur-glass border border-electric-blue/20 rounded-3xl p-8 hover:shadow-glow-blue transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-electric-blue animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-off-white">Synapse SDK</h3>
              </div>

              {/* Code Block */}
              <div className="relative">
                <div className="bg-navy-deep/80 rounded-2xl p-6 font-mono text-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-electric-blue">integration.js</span>
                    <Button 
                      variant="ghost-glow" 
                      size="sm"
                      onClick={handleCopyCode}
                      className="text-xs"
                    >
                      {copiedCode ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="text-off-white/80 leading-relaxed overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Single API call for verification",
                  "Real-time PDP proof checking", 
                  "Global <1s response time"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-verification-green" />
                    <span className="text-off-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Zap,
              title: "Instant Integration",
              description: "Add residency verification to your app in minutes with our SDK",
              highlight: "< 5 lines of code"
            },
            {
              icon: Globe,
              title: "Global Coverage",
              description: "Verify residency claims from any country with FilCDN network",
              highlight: "200+ countries"
            },
            {
              icon: Code2,
              title: "Developer Friendly",
              description: "RESTful APIs, webhooks, and comprehensive documentation",
              highlight: "Full TypeScript support"
            }
          ].map((benefit, i) => (
            <div 
              key={i}
              className="bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 hover:shadow-glow-blue transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <benefit.icon className="w-12 h-12 text-electric-blue mb-4 animate-float" />
              <h3 className="text-xl font-bold text-off-white mb-3">{benefit.title}</h3>
              <p className="text-off-white/70 mb-4">{benefit.description}</p>
              <div className="text-sm text-electric-blue font-medium bg-electric-blue/10 rounded-lg px-3 py-1 inline-block">
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-off-white mb-4">
              Ready to integrate ProofPass?
            </h3>
            <p className="text-xl text-off-white/80 mb-8">
              Join the waitlist for early API access and developer documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get API Access
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="glass-hero" size="xl">
                <Code2 className="w-5 h-5" />
                View Docs
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default DeveloperSection;