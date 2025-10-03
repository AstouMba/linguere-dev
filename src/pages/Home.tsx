import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypewriterText from "@/components/TypewriterText";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <h2 className="text-primary text-lg md:text-xl font-medium">
                Bienvenue sur mon portfolio
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Je suis{" "}
                <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <TypewriterText text="Astou Mbow" delay={150} />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Développeuse Web & Mobile | UI/UX Design
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Développeuse web & mobile rigoureuse et créative, capable de concevoir 
              des applications modernes, performantes et responsives. Passionnée par 
              les technologies actuelles et toujours à l'affût de nouveaux défis.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="group">
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Me Contacter
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">
                  Voir mes projets
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AstouMba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/astou-mbow-655b62251"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:astoumbow51@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fadeIn animation-delay-200">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-500 hover:scale-105 animate-float">
                <img
                  src={profilePhoto}
                  alt="Astou Mbow"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse -z-10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Home;
