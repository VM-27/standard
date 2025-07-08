import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Server, 
  Shield, 
  Database, 
  Brain, 
  Bot, 
  Network, 
  Cpu, 
  Settings 
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      gradient: "from-purple-600 to-purple-700",
      skills: ["C/C++", "Python", "DSA"]
    },
    {
      title: "Web Development",
      icon: Globe,
      gradient: "from-green-500 to-emerald-600",
      skills: ["HTML/CSS", "JavaScript", "React"]
    },
    {
      title: "Systems",
      icon: Server,
      gradient: "from-purple-500 to-pink-500",
      skills: ["Linux", "Git/GitHub", "SQL"]
    },
    {
      title: "Specialized",
      icon: Shield,
      gradient: "from-orange-500 to-red-500",
      skills: ["Cybersecurity", "UX/UI Design", "Figma"]
    }
  ];

  const additionalSkills = [
    { name: "Database Management", icon: Database },
    { name: "Machine Learning", icon: Brain },
    { name: "AI", icon: Bot },
    { name: "Networking", icon: Network },
    { name: "Operating Systems", icon: Settings },
    { name: "Software Development", icon: Cpu }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-white/97"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertise across multiple domains of computer science and technology
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className={`bg-gradient-to-br ${category.gradient} p-6 text-white hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent size={32} className="mr-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="bg-white/20 text-white mr-2 mb-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {additionalSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="p-4 text-center transition-all duration-300 cursor-pointer hover:bg-purple-600 hover:text-white group"
              >
                <IconComponent 
                  size={32} 
                  className="mx-auto mb-2 text-purple-600 group-hover:text-white transition-colors" 
                />
                <div className="text-sm font-medium">{skill.name}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
