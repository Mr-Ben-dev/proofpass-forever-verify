import { Button } from "@/components/ui/button";
import { Github, FileText, ExternalLink } from "lucide-react";
import proofpassLogo from "@/assets/proofpass-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-navy-deep/80 backdrop-blur-glass border-b border-electric-blue/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={proofpassLogo} 
                alt="ProofPass Logo" 
                className="w-full h-full object-contain animate-glow-pulse"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-off-white">ProofPass</h1>
              <p className="text-xs text-electric-blue">Decentralized Identity</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-off-white hover:text-electric-blue transition-colors">
              How It Works
            </a>
            <a href="#api" className="text-off-white hover:text-electric-blue transition-colors">
              For Developers
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost-glow" size="sm">
              <FileText className="w-4 h-4" />
              Docs
              <ExternalLink className="w-3 h-3" />
            </Button>
            <Button variant="ghost-glow" size="sm">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="hero" size="sm">
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;