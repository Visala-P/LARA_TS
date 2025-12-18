import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Users, BookOpen, Award } from "lucide-react";

const ResearchPreview = () => {
  const navigate = useNavigate();

  const researchHighlights = [
    {
      icon: FlaskConical,
      title: "Research Focus",
      description: "Advanced robotic systems for therapeutic intervention"
    },
    {
      icon: Users,
      title: "Team",
      description: "Interdisciplinary experts in robotics and psychology"
    },
    {
      icon: BookOpen,
      title: "Publications",
      description: "Published papers at IEEE and international conferences"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Awards and grants for innovative research"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LARA Research Group
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Innovation at KL University for Therapeutic Robotics
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Discover how our dedicated research team at KL University is developing cutting-edge 
            robotic solutions to help children with special needs through therapeutic intervention.
          </p>
        </div>

        {/* Research Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-orange-500" />
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/research")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Research Group
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Learn more about our team, publications, and ongoing projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;
