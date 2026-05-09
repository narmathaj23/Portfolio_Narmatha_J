import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Building experience through internships and projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start gap-8 slide-up">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-12">
                <Card className="card-soft p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Web Development Intern
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-3">
                        <Building className="w-5 h-5" />
                        Optimus Private Limited
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge className="bg-secondary text-secondary-foreground w-fit">
                        <Calendar className="w-4 h-4 mr-2" />
                        1 Month
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Gained hands-on experience in web development technologies and modern development practices. 
                      Worked on real-world projects that enhanced my understanding of both frontend and backend development.
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Learnings:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">Modern web development workflows</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-muted-foreground">Responsive design principles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-pink rounded-full"></div>
                          <span className="text-muted-foreground">Team collaboration</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                          <span className="text-muted-foreground">Code review processes</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">HTML/CSS</Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground">JavaScript</Badge>
                      <Badge variant="secondary" className="bg-accent-pink/10 text-foreground">React</Badge>
                      <Badge variant="secondary" className="bg-accent-purple/10 text-foreground">Version Control</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Future Goals */}
            <div className="relative flex items-start gap-8 slide-up">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-muted border-4 border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <Card className="card-soft p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h3 className="text-xl font-bold text-foreground mb-4">What's Next?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Actively seeking entry-level positions where I can contribute to meaningful projects 
                    while continuing to grow as a full-stack developer. Looking forward to joining a 
                    collaborative team environment.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-accent-yellow/20 text-foreground border-accent-yellow/30">
                      🎯 Seeking Opportunities
                    </Badge>
                    <Badge className="bg-accent-orange/20 text-foreground border-accent-orange/30">
                      📚 Continuous Learning
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;