import { CheckCircle2, Users, Lightbulb, Target } from "lucide-react";

const benefits = [
  "Affordable therapy accessible to all families",
  "Works offline - no internet required",
  "Reduces dependency on full-time therapists",
  "Personalized learning at each child's pace",
  "Real-time emotional support and adaptation",
  "Comprehensive progress tracking and reports",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About LARA</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 mb-6">
                Making Therapy Accessible to Every Child
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LARA (Low-cost Adaptive Robotic-AI Therapy System) is designed to provide 
                affordable, AI-powered therapy assistance for children with Down Syndrome, 
                Autism, Learning Disabilities, and Intellectual Disorders.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our mission is to ensure that every child, regardless of their family's 
                financial situation or location, has access to quality therapeutic care 
                that helps them develop cognitive, speech, and motor skills while feeling 
                supported and understood.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-lara-green flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="w-12 h-12 bg-lara-teal rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary font-display">For All</div>
              <p className="text-muted-foreground mt-2">Children with Special Needs</p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="w-12 h-12 bg-lara-purple rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary font-display">AI</div>
              <p className="text-muted-foreground mt-2">Powered Intelligence</p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border">
              <div className="w-12 h-12 bg-lara-yellow rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-lara-yellow font-display">100%</div>
              <p className="text-muted-foreground mt-2">Personalized Care</p>
            </div>

            <div className="bg-gradient-to-br from-lara-teal to-lara-purple rounded-2xl p-6 md:p-8 shadow-glow text-white">
              <div className="text-3xl md:text-4xl font-bold font-display">24/7</div>
              <p className="text-white/80 mt-2">Continuous Support & Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
