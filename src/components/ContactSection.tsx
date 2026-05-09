import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration
      const result = await emailjs.send(
        'service_133k8cs', // Your EmailJS service ID
        'template_g89zq3s', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Narmatha",
          Subject: `New Contact Form Message from ${formData.name}`,
        },
        'g0BPMzaTXfyamL7G_' // Your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "narmathajanar@gmail.com",
      href: "mailto:narmathajanar@gmail.com",
      color: "bg-primary"
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "8610822283",
    //   href: "tel:8610822283",
    //   color: "bg-secondary"
    // },
    {
      icon: MapPin,
      label: "Location",
      value: "Salem, Tamil Nadu, India",
      href: "#",
      color: "bg-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/narmathaj-b2181a300",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/NarmathaHub",
      color: "bg-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">
            Ready to start your next project? Let's work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MessageCircle className="w-7 h-7 text-primary" />
                Get In Touch
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about web development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-soft p-6 hover:scale-105 transition-transform">
                  <a 
                    href={info.href}
                    className="flex items-center gap-4 text-decoration-none"
                    {...(info.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="card-soft p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h4 className="font-semibold text-foreground mb-3">Quick Response</h4>
              <p className="text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to call or connect with me on LinkedIn.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <Card className="card-soft p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;