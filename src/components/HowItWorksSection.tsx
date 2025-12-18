import { Camera, Cpu, Smile, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Sensing & Input",
    description: "LARA's robotic eyes capture facial expressions, movements, and engagement levels through advanced webcam technology.",
    color: "from-lara-teal to-lara-blue",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Data Processing",
    description: "Our emotion classifier and attention detection algorithms analyze data in real-time to understand the child's state.",
    color: "from-lara-purple to-lara-pink",
  },
  {
    number: "03",
    icon: Smile,
    title: "Adaptive Response",
    description: "The therapy engine adjusts activities, provides encouragement, and modifies difficulty based on emotional feedback.",
    color: "from-lara-yellow to-lara-green",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "All interactions are logged and analyzed to provide comprehensive progress reports for caregivers and therapists.",
    color: "from-lara-green to-lara-teal",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 mb-6">
            Smart Therapy, Step by Step
          </h2>
          <p className="text-lg text-muted-foreground">
            LARA uses a continuous feedback loop to provide personalized, adaptive therapy sessions.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-lara-teal via-lara-purple to-lara-green transform -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-all duration-300 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-muted/50 font-display mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Step connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
