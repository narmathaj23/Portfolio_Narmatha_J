import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink, Github, Download } from "lucide-react";

const ResumeSection = () => {


  

  const certifications = [
    "Course in 'From Problem to Prototype: Mastering Design Thinking' by ProMind Learning Academy, Erode",
    "Course in C++ By Cybernaut",
    "Course in Java by Cybernaut",
    "Course in Git & Github Bootcamp by LetsUpgrade",
    "Course in SQL Bootcamp by LetsUpgrade"
  ];

  const projects = [
    "Copyright Risk Analyzer Pro",
    "NEXT-Website",
    "Spotify- Web Player",
    "Login Page Website by using HTML and CSS",
    "E-Commerce Website"
  ];

  const achievements = [
    "1st Prize For Paper Presentation in AVS Engineering College, Salem",
    "3rd prize For Paper Presentation in Knowledge Institute of Technology, Salem"
  ];

  const education = [
    {
      level: "S.S.L.C",
      school: "SPS MATRIC HR SEC SCHOOL",
      year: "2020",
      percentage: "88.8%"
    },
    {
      level: "H.S.C",
      school: "SPS MATRIC HR SEC SCHOOL", 
      year: "2022",
      percentage: "76%"
    },
    {
      level: "B.E Computer Science and Engineering",
      school: "GNANAMANI COLLEGE OF TECHNOLOGY",
      year: "2022-2026",
      cgpa: "8.2"
    }
  ];

  const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "MongoDB",
  "Java",
  "C++",

  // UI/UX
  "UI Design",
  "UX Design",
  "Wireframing",
  "Prototyping",
  "User Flow",
  "Visual Design",
  "Responsive Design",
  "Accessibility",
  "Information Architecture",

  // Design Tools
  "Figma",
  "Auto Layout",
  "Components",
  "Interactive Prototyping",
  "Canva",

  // Developer Tools
  "Git",
  "GitHub",
  "VS Code",
  "IntelliJ IDEA",

  // AI Tools
  "ChatGPT",
  "Claude",
  "Google AI Studio",
  "Google Stitch",
  "Perplexity AI",
];
  const languages = ["English", "Tamil", "Kannada"];

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive overview of my professional profile
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
          >
            <a href="/Narmatha-Janar-Resume.pdf" download="Narmatha-Janar-Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact */}
            <Card className="card-soft">
            
              
            </Card>

            {/* Skills */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Certifications */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {projects.map((project, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;