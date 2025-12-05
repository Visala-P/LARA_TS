import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import laraLogo from "@/assets/lara-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-hero pt-20 md:pt-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-lara-teal/20 rounded-full blur-2xl animate-pulse-soft" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-lara-purple/20 rounded-full blur-2xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-lara-yellow/30 rounded-full blur-2xl animate-pulse-soft" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              AI-Powered Therapy for Every Child
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              <span className="text-gradient">Empowering Every Ability</span>
              <br />
              <span className="text-foreground">with Care & Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Low-Cost Adaptive Robotic-AI Therapy System for children with Down Syndrome, 
              Learning Disabilities, and Intellectual Disorders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 shadow-glow"
              >
                <Heart className="w-5 h-5 mr-2" />
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-lara-purple">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-lara-green">Low</div>
                <div className="text-sm text-muted-foreground">Cost</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-lara-teal/40 via-lara-purple/30 to-lara-pink/40 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl p-4 shadow-soft">
                <img
                  src={laraLogo}
                  alt="LARA - Robotic AI Therapy System"
                  className="w-full max-w-xl md:max-w-2xl h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
