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
    title: "UI/UX Design",
    icon: Paintbrush,
    color: "bg-accent-pink",
    skills: [
      "Wireframing",
      "Prototyping",
      "UI Design",
      "User Flow Design",
      "Visual Design",
      "Information Architecture",
      "Accessibility",
      "Responsive Design",
    ],
  },
  {
    title: "Design Tools",
    icon: Palette,
    color: "bg-accent-purple",
    skills: [
      "Figma",
      "Auto Layout",
      "Components",
      "Interactive Prototyping",
      "Canva",
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "bg-primary",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "React",
    ],
  },
  {
    title: "Developer Tools",
    icon: Database,
    color: "bg-secondary",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "IntelliJ IDEA",
    ],
  },
  {
    title: "AI Tools",
    icon: Code,
    color: "bg-accent-orange",
    skills: [
      "ChatGPT",
      "Claude",
      "Google AI Studio",
      "Google Stitch",
      "Perplexity AI",
    ],
  },
  {
    title: "Soft Skills",
    icon: Palette,
    color: "bg-accent-yellow",
    skills: [
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Time Management",
      "Quick Learning",
    ],
  },
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

        {/* About Skills */}
<div className="text-center mt-16 mb-20">
  <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
    I combine user-centered design principles with modern frontend development
    to create intuitive, responsive, and visually engaging digital experiences.
    My focus is on designing meaningful interfaces and transforming them into
    functional products.
  </p>
</div>

{/* Education */}
<div className="fade-in">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-foreground mb-4">
      Education
    </h2>
    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
    <p className="text-muted-foreground mt-4 text-lg">
      My academic journey and educational background
    </p>
  </div>

  <div className="space-y-6">

    {/* College */}
    <Card className="card-soft p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Gnanamani College of Technology
          </h3>
          <p className="text-primary font-medium">
            B.E. Computer Science and Engineering
          </p>
          <p className="text-muted-foreground">
            CGPA: <strong>8.2</strong>
          </p>
        </div>

        <div className="text-right">
          <p className="font-medium text-foreground">
            2022 – 2026
          </p>
          <p className="text-muted-foreground">
            Namakkal, Tamil Nadu
          </p>
        </div>
      </div>
    </Card>

    {/* HSC */}
    <Card className="card-soft p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">
            SPS Matric Hr. Sec. School
          </h3>
          <p className="text-primary font-medium">
            Higher Secondary Certificate (H.S.C)
          </p>
          <p className="text-muted-foreground">
            Percentage: <strong>76%</strong>
          </p>
        </div>

        <div className="text-right">
          <p className="font-medium text-foreground">
            2020 – 2022
          </p>
          <p className="text-muted-foreground">
            Salem, Tamil Nadu
          </p>
        </div>
      </div>
    </Card>

    {/* SSLC */}
    <Card className="card-soft p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">
            SPS Matric Hr. Sec. School
          </h3>
          <p className="text-primary font-medium">
            Secondary School Leaving Certificate (S.S.L.C)
          </p>
          <p className="text-muted-foreground">
            Percentage: <strong>88.8%</strong>
          </p>
        </div>

        <div className="text-right">
          <p className="font-medium text-foreground">
            2019 – 2020
          </p>
          <p className="text-muted-foreground">
            Salem, Tamil Nadu
          </p>
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