import { Heart } from "lucide-react";
import laraLogo from "@/assets/lara-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <div className="inline-flex items-center bg-white/10 dark:bg-white/5 rounded-lg p-2 shadow-md">
                <img src={laraLogo} alt="LARA logo" className="h-16 md:h-20 w-auto block" />
              </div>
            </a>
            <p className="text-background/70 max-w-md leading-relaxed">
              Empowering Every Ability with Care & Innovation. Low-Cost Adaptive Robotic-AI 
              Therapy System for children with special needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "How It Works", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold font-display text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {["FAQ", "Documentation", "Resources", "Community"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © 2025 LARA. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-lara-pink fill-lara-pink" /> for children everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
