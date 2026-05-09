import { Card } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Paintbrush } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", level: 95, color: "bg-accent-orange", icon: Code },
    { name: "CSS", level: 85, color: "bg-primary", icon: Palette },
    { name: "JavaScript", level: 90, color: "bg-accent-yellow", icon: Code },
    { name: "React", level: 75, color: "bg-secondary", icon: Globe },
    { name: "SQL", level: 75, color: "bg-accent-purple", icon: Database },
    { name: "UI/UX Design", level: 70, color: "bg-accent-pink", icon: Palette },
  ];

  const categories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      color: "bg-primary"
    },
    {
      title: "Design",
      icon: Paintbrush,
      skills: ["UI/UX Design", "Responsive Design", "Figma", "Canva"],
      color: "bg-accent-pink"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "SQL", "Database Integration", "API Development"],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="card-soft p-6 text-center slide-up">
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Proficiency Levels</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="slide-up">
            <Card className="card-soft p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Currently Learning</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Advanced React Patterns</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Node.js & Express</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-accent-pink/10 rounded-lg">
                  <div className="w-3 h-3 bg-accent-pink rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Database Management</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-accent-purple/10 rounded-lg">
                  <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">DevOps Fundamentals</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;