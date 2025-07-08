import { Card } from "@/components/ui/card";
import { 
  Code, 
  Globe, 
  Shield, 
  Palette, 
  Terminal, 
  Database 
} from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "C/C++",
      description: "Programming proficiency certification",
      icon: Code,
      color: "text-purple-600"
    },
    {
      title: "Web Development",
      description: "Full-stack web development certification",
      icon: Globe,
      color: "text-green-600"
    },
    {
      title: "Cyber Security",
      description: "Information security and ethical hacking",
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "UX/UI Design",
      description: "User experience and interface design",
      icon: Palette,
      color: "text-purple-500"
    },
    {
      title: "Linux",
      description: "Linux system administration",
      icon: Terminal,
      color: "text-orange-500"
    },
    {
      title: "SQL",
      description: "Database management and queries",
      icon: Database,
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={cert.title}
                className="p-6 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <IconComponent 
                    size={32} 
                    className={`${cert.color} mr-3 group-hover:scale-110 transition-transform`} 
                  />
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
