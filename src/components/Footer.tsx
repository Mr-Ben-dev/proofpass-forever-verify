import { Button } from "@/components/ui/button";
import { Github, FileText, ExternalLink, Zap, Globe, Mail } from "lucide-react";
import proofpassLogo from "@/assets/proofpass-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-electric-blue/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src={proofpassLogo} 
                alt="ProofPass Logo" 
                className="w-full h-full object-contain animate-glow-pulse"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-off-white">ProofPass</h3>
              <p className="text-sm text-electric-blue">Decentralized Identity</p>
            </div>
          </div>
            <p className="text-off-white/70 leading-relaxed">
              The world's first decentralized proof-of-residency identity network. 
              Verify where you live forever using tamper-proof, on-chain data.
            </p>
            <div className="flex items-center gap-2 text-verification-green">
              <Zap className="w-4 h-4 animate-verification-pulse" />
              <span className="text-sm font-medium">Built on Filecoin Onchain Cloud</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold text-off-white mb-6">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "#solution" },
                { label: "API Documentation", href: "#api" },
                { label: "Live Demo", href: "#", external: true },
                { label: "Pricing", href: "#" },
                { label: "Security", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-off-white/70 hover:text-electric-blue transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-off-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: "Design Documentation", href: "#", icon: FileText },
                { label: "GitHub Repository", href: "#", icon: Github },
                { label: "Figma Prototype", href: "#", icon: ExternalLink },
                { label: "Technical Whitepaper", href: "#", icon: FileText },
                { label: "Filecoin Integration", href: "#", icon: Globe }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-off-white/70 hover:text-electric-blue transition-colors flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Updates */}
          <div>
            <h4 className="text-lg font-semibold text-off-white mb-6">Stay Updated</h4>
            <p className="text-off-white/70 mb-6">
              Get notified about our progress and early access opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-navy-medium/30 border border-electric-blue/20 rounded-lg px-4 py-2 text-off-white placeholder-off-white/40 focus:border-electric-blue/50 focus:outline-none"
                />
                <Button variant="hero" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-3">
                <Button variant="ghost-glow" size="sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="ghost-glow" size="sm">
                  <FileText className="w-4 h-4" />
                  Docs
                </Button>
              </div>
            </div>
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-electric-blue/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-off-white/60 text-sm">
            © 2025 ProofPass. Built for WaveHack - Filecoin's First Creator Fund.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-off-white/60">Powered by</span>
            <div className="flex items-center gap-2 text-electric-blue font-medium">
              <Globe className="w-4 h-4" />
              Filecoin Onchain Cloud
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-electric-blue/3 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
