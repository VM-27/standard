import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Drone, Car, Video, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AT-PNGS",
      date: "Jan 2024",
      icon: Rocket,
      description: "Anticipated Trajectory-Based Proportional Navigation Guidance Scheme that predicts a maneuvering target's future path and adjusts the interceptor's trajectory using proportional navigation. This enhances accuracy in intercepting fast, evasive targets.",
      tags: ["Navigation Systems", "Algorithm Design", "Trajectory Prediction"],
      color: "text-purple-600"
    },
    {
      title: "IoT Drones Authentication Analysis",
      date: "Aug 2023",
      icon: Drone,
      description: "Analyzed user authentication in Internet of Drones using lightweight cryptography to ensure secure access, data privacy, and protection against threats in drone communication networks.",
      tags: ["IoT Security", "Cryptography", "Authentication"],
      color: "text-green-600"
    },
    {
      title: "VANET: A Simulation Study",
      date: "Aug 2024",
      icon: Car,
      description: "Vehicular Ad-hoc Network simulation study that enables communication between vehicles and infrastructure to enhance road safety, traffic flow, and provide real-time information for a better driving experience.",
      tags: ["Vehicle Networks", "Simulation", "Traffic Safety"],
      color: "text-blue-600"
    },
    {
      title: "Multi-Path Live Video Streaming",
      date: "Jan 2025",
      icon: Video,
      description: "Designed a live video streaming system using Wi-Fi Direct multi-group communication. It enabled multiple parallel data paths to improve speed and reduce latency, ensuring smooth, real-time video transmission even in changing network conditions.",
      tags: ["Video Streaming", "Wi-Fi Direct", "Network Optimization"],
      color: "text-orange-600"
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-white relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-white/97"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cutting-edge research in navigation systems, IoT security, and network communications
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {project.date}
                  </Badge>
                  <IconComponent size={32} className={project.color} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="outline" 
                      className="text-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg"
          >
            <a 
              href="https://github.com/VM-27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github size={24} className="mr-3" />
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
