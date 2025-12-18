import { Eye, Brain, Heart, Activity, Gamepad2, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Robotic Eyes Monitoring",
    description: "Continuous monitoring using advanced computer vision to track child behavior, attention levels, and engagement in real-time.",
    color: "bg-lara-teal",
  },
  {
    icon: Heart,
    title: "Emotion Detection",
    description: "Automated facial expression analysis to understand children's emotions and adapt therapy sessions accordingly.",
    color: "bg-lara-pink",
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Personalized teaching at each child's own pace, adjusting difficulty and content based on progress and mood.",
    color: "bg-lara-purple",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Tracks behavioral patterns, daily changes, and health indicators to provide insights to caregivers and therapists.",
    color: "bg-lara-green",
  },
  {
    icon: Gamepad2,
    title: "Gamified Therapy",
    description: "Interactive games for cognitive development, speech training, memory exercises, and motor skill improvement.",
    color: "bg-lara-yellow",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Comprehensive analytics and reports for parents and therapists to track development milestones over time.",
    color: "bg-lara-blue",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 mb-6">
            Comprehensive Care Through Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            LARA combines cutting-edge technology with compassionate care to provide holistic therapy support for children with special needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group gradient-card border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
