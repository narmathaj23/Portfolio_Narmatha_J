import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="slide-up">
            <Card className="card-soft p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Computer Science Engineering student with practical knowledge in UI/Frontend development, backend integration, and AI-based applications through academic and personal projects. Skilled in developing responsive user interfaces and interactive web applications. Passionate about frontend, full-stack development, and AI-driven solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Based in Salem, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="slide-up">
            <Card className="card-soft p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Bachelor of Engineering
                  </h4>
                  <p className="text-lg text-primary font-medium mb-1">
                    Computer Science and Engineering
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Gnanamani College of Technology
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      2022 - 2026
                    </div>
                    <div className="bg-accent-pink text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Current Student
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;