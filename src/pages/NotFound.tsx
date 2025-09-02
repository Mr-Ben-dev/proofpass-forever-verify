import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Error Code */}
        <div className="text-8xl md:text-9xl font-black text-electric-blue/20 mb-4 animate-glow-pulse">
          404
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-off-white mb-6 animate-slide-up">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-xl text-off-white/70 mb-8 leading-relaxed animate-fade-in">
          Looks like this page doesn't exist in our decentralized network. 
          <br />
          Let's get you back to verifying identities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="xl" onClick={() => window.location.href = "/"}>
            <Home className="w-5 h-5" />
            Back to ProofPass
          </Button>
          <Button variant="glass-hero" size="xl" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Requested Path */}
        <div className="mt-8 bg-navy-medium/20 backdrop-blur-glass border border-electric-blue/20 rounded-2xl p-6 animate-slide-up">
          <p className="text-sm text-off-white/60 mb-2">Attempted to access:</p>
          <code className="text-electric-blue font-mono bg-navy-deep/50 px-4 py-2 rounded-lg">
            {location.pathname}
          </code>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-navy-deep to-transparent" />
    </div>
  );
};

export default NotFound;
