import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import professionalPhotoUrl from "@assets/1000029740_1751693536595.jpg";
import { GraduationCap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-gradient absolute inset-0 opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-yellow-300">Vikash Mishra</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Computer Science Engineer & Researcher<br />
              M.Tech Student at <span className="font-semibold text-yellow-300">IIT Delhi</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="secondary" className="glass-effect text-white border-white/20">
                GATE Qualified 2024 & 2025
              </Badge>
              <Badge variant="secondary" className="glass-effect text-white border-white/20">
                Content Creator
              </Badge>
              <Badge variant="secondary" className="glass-effect text-white border-white/20">
                Motivational Speaker
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl professional-photo">
                <img 
                  src={professionalPhotoUrl} 
                  alt="Vikash Mishra - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-float">
                <GraduationCap size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
