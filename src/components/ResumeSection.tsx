import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink, Github, Download } from "lucide-react";

const ResumeSection = () => {
  const contact = {
    email: "narmathajanar@gmail.com",
    location: "Salem, TamilNadu, India",
    linkedin: "www.linkedin.com/in/narmatha-j-b2181a300",
    github: "github.com/NarmathaHub"
  };

  

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
    "Student Attendance System in Java",
    "Student Management System in Java",
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

  const skills = ["HTML", "CSS", "JavaScript", "SQL", "MongoDB", "Java", "C++", "Node.js", "UI/UX", "Figma", "Canva"];
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
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{contact.phone}</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{contact.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <a href={`https://${contact.linkedin}`} className="text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-primary" />
                  <a href={`https://${contact.github}`} className="text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-medium text-sm">{edu.level}</h4>
                    <p className="text-xs text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.year} • {edu.percentage || `CGPA: ${edu.cgpa}`}
                    </p>
                  </div>
                ))}
              </CardContent>
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