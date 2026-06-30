import { Button } from "@/components/ui/button";
import profilePhoto from "../assets/NJJJ.jpeg";
import { Mail, Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section flex items-center justify-center px-4 py-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 fade-in">
            <div className="space-y-4">
              <p className="text-lg font-medium text-primary-foreground/80">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground">
                NARMATHA J
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
                UI/UX & FRONTEND DEVELOPER
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
  I design intuitive digital experiences and transform them into responsive,
  interactive websites. Explore my complete UI/UX case studies on Behance and
  my frontend development projects below.
</p>

<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
  <Button
    asChild
    size="lg"
    className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
  >
    <a
      href="https://www.behance.net/narmathaj"
      target="_blank"
      rel="noopener noreferrer"
    >
      🎨 View Behance
    </a>
  </Button>

</div>
            </div>
            
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
              <img
                src={profilePhoto}
                alt="Narmatha J - Full Stack Web Developer"
                className="relative w-80 h-80 object-cover object-[center_20%] rounded-full border-4 border-white/30 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;