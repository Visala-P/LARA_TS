import { Card, CardContent } from "@/components/ui/card";
import { Puzzle, Brain, BookOpen, Sparkles } from "lucide-react";

const conditions = [
  {
    icon: Puzzle,
    title: "Down Syndrome",
    description: "Specialized cognitive and motor skill development activities tailored to support children with Down Syndrome in reaching their full potential.",
    color: "bg-gradient-to-br from-lara-teal to-lara-blue",
  },
  {
    icon: Sparkles,
    title: "Autism Spectrum",
    description: "Structured, predictable interactions that help children with autism develop social skills, communication, and emotional regulation.",
    color: "bg-gradient-to-br from-lara-purple to-lara-pink",
  },
  {
    icon: BookOpen,
    title: "Learning Disabilities",
    description: "Adaptive educational games and exercises designed to strengthen reading, writing, and mathematical abilities at each child's pace.",
    color: "bg-gradient-to-br from-lara-yellow to-lara-green",
  },
  {
    icon: Brain,
    title: "Intellectual Disorders",
    description: "Patient, repetitive, and engaging activities that support cognitive development and help build essential life skills.",
    color: "bg-gradient-to-br from-lara-pink to-lara-purple",
  },
];

const ConditionsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Help</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mt-3 mb-6">
            Supporting Children with Diverse Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            LARA is designed to provide specialized support for children across a range of developmental and learning conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {conditions.map((condition) => (
            <Card key={condition.title} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className={`${condition.color} p-6 md:p-8 flex items-center justify-center md:w-1/3 group-hover:scale-105 transition-transform`}>
                    <condition.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <div className="p-6 md:p-8 flex-1 bg-card">
                    <h3 className="text-xl md:text-2xl font-bold font-display mb-3">{condition.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{condition.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
