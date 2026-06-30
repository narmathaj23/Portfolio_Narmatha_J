import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Plus, MessageSquare, Shield, Smile } from "lucide-react";
import { FaGithub, FaBehance } from "react-icons/fa";

const ProjectsSection = () => {
  const placeholderProjects = [


    {
  title: "SaveHER – Women's Safety App",
  description:
    "An end-to-end UI/UX case study for a women's safety mobile application focused on enabling users to trigger emergency help quickly without unlocking their phone. The project includes user research, wireframes, user flows, high-fidelity UI design, and an interactive prototype.",
  technologies: [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Flow",
    "UI Design"
  ],
  status: "Completed",
  icon: Shield,
  color: "bg-accent-pink",

  type: "behance",
  url: "https://www.behance.net/gallery/251952333/SaveHER-Womens-Safety-App-UIUX-Case-Study",
},
    {
      title: "Copyright Risk Analyzer Pro",
      description: "AI-powered web app analyzing multi-format content (text, images, video, audio) to detect copyright risks before publishing, with drag-and-drop uploads, real-time feedback, and animated dashboards.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "AI APIs"],
      status: "Completed",
      icon: Shield,
      color: "bg-accent-purple",
      githubUrl: "https://github.com/narmathaj23/Risk-Analyzer-pro"
    },
    
    {
      title: "Modern SaaS Landing Page UI Design",
      description: "A modern SaaS landing Page designed in Figma featuring a dark theme, analytics widgets, and clean typography. This Project explores layout, visua hierarchy, and user interface design principles.",
      technologies: ["HTML", "css","JavaScript", "UI/UX"],
      status: "Completed",
      icon: Shield,
      color: "bg-accent-purple",
      githubUrl: "https://www.behance.net/gallery/251433027/Modern-SaaS-Landing-Page-UI-Design"
    },
    {
      title: "Sweet Delights - Animated Donut Website UI",
      description: "This project showcases a donut-themed landing page designed in figma with interactive animations and transitions. The prototype demonstrates user flow, visual design, and motion effects to create an engaging web experience.",
      technologies: ["Figma", "Adobe","Photoshop"],
      status: "Completed",
      icon: Shield,
      color: "bg-accent-purple",
      githubUrl: "https://www.behance.net/gallery/251432355/Sweet-Delights-Animated-Donut-Website-UI"
    },
    {
      title: "MoodMate - AI-Powered Mood Tracker",
      description: "MoodMate is a mobile-inspired mood tracking UI/UX project designed in Figma and developed using HTML, CSS, and JavaScript. It helps users track moods, view insights, and explore emotional history through an interactive and modern interface.",
      technologies: ["Figma"],
      status: "Completed",
      icon: Smile,
      color: "bg-secondary",
      githubUrl: "https://www.behance.net/gallery/251433565/Mood-Tracking-App-UIUX-Design"
    },
    {
      title: "ChatGPT Clone",
      description: "A simple ChatGPT clone built using HTML and CSS, focusing on frontend development and UI styling techniques.",
      technologies: ["HTML", "CSS"],
      status: "Completed",
      icon: MessageSquare,
      color: "bg-accent-orange",
      githubUrl: "https://github.com/NarmathaHub/ChatGPT-Clone"
    },
    {
      title: "LinkedIn Clone",
      description: "Professional networking platform built with Tailwind CSS allowing users to create profiles, connect with professionals, and share updates.",
      technologies: ["HTML", "CSS", "Tailwind CSS"],
      status: "Completed",
      icon: Database,
      color: "bg-primary",
      githubUrl: "https://github.com/NarmathaHub/Linkedin-clone"
    },
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio showcasing projects and skills with modern design principles.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      status: "Completed",
      icon: Palette,
      color: "bg-secondary",
      githubUrl: "https://github.com/NarmathaHub/narmatha-creative-hub"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Showcasing my development journey through projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {placeholderProjects.map((project, index) => (
            <Card key={index} className="card-soft p-6 h-full slide-up">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className={
                        project.status === "Completed" ? "bg-secondary/20 text-secondary-foreground" :
                        project.status === "In Development" ? "bg-accent-yellow/20 text-foreground" :
                        "bg-accent-purple/20 text-foreground"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
  variant={
    [
      "SaveHER – Women's Safety App",
      "Modern SaaS Landing Page UI Design",
      "Sweet Delights - Animated Donut Website UI",
      "MoodMate - AI-Powered Mood Tracker",
    ].includes(project.title)
      ? "default"
      : "outline"
  }
  size="sm"
  className={
    [
      "SaveHER – Women's Safety App",
      "Modern SaaS Landing Page UI Design",
      "Sweet Delights - Animated Donut Website UI",
      "MoodMate - AI-Powered Mood Tracker",
    ].includes(project.title)
      ? "flex-1 bg-[#1769FF] hover:bg-[#0057e7] text-white"
      : "flex-1"
  }
  onClick={() => window.open(project.githubUrl, "_blank")}
>
  {[
    "SaveHER – Women's Safety App",
    "Modern SaaS Landing Page UI Design",
    "Sweet Delights - Animated Donut Website UI",
    "MoodMate - AI-Powered Mood Tracker",
  ].includes(project.title) ? (
    <>
      <FaBehance className="mr-2 h-4 w-4" />
      View Case Study
    </>
  ) : (
    <>
      <FaGithub className="mr-2 h-4 w-4" />
      View Code
    </>
  )}
</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center slide-up">
          <Card className="card-soft p-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Plus className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">More Projects Coming Soon!</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm actively working on new projects that showcase my growing skills in full-stack development. 
                  Check back soon to see my latest work!
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="bg-accent-yellow/20 text-foreground">🚀 In Development</Badge>
                <Badge className="bg-accent-orange/20 text-foreground">💡 New Ideas</Badge>
                <Badge className="bg-accent-pink/20 text-foreground">🎯 Learning Projects</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;