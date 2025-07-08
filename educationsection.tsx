import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Medal } from "lucide-react";

export default function EducationSection() {
  return (
    <section 
      id="education" 
      className="py-20 bg-gray-50 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-gray-50/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic excellence and continuous learning journey
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {/* Current Education */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Master of Technology (M.Tech)</h3>
                <p className="text-purple-600 font-semibold text-lg mb-2">Indian Institute of Technology (IIT) Delhi</p>
                <p className="text-gray-600 mb-4">Specialization: Cybersecurity | 2025 (Expected)</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-100 text-purple-700">Current Student</Badge>
                  <Badge className="bg-green-100 text-green-700">Research Focus</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-lg text-white">
                  <GraduationCap size={32} />
                </div>
              </div>
            </div>
          </Card>

          {/* Undergraduate Education */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology (B.Tech)</h3>
                <p className="text-purple-600 font-semibold text-lg mb-2">University of Allahabad, Prayagraj</p>
                <p className="text-gray-600 mb-4">Computer Science Engineering | Oct 2021 – May 2025</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700">CGPA: 8.85</Badge>
                  <Badge className="bg-blue-100 text-blue-700">First Class</Badge>
                </div>
              </div>
              <div className="text-right">
                <Card className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 text-white text-center">
                  <div className="text-2xl font-bold">8.85</div>
                  <div className="text-sm text-green-200">CGPA</div>
                </Card>
              </div>
            </div>
          </Card>

          {/* GATE Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">GATE 2025</h3>
                  <p className="text-yellow-100 mb-4">Graduate Aptitude Test in Engineering</p>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Score:</span> 718</p>
                    <p><span className="font-semibold">Marks:</span> 65.31</p>
                  </div>
                </div>
                <div className="text-right">
                  <Trophy size={48} className="text-yellow-200" />
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">GATE 2024</h3>
                  <p className="text-green-100 mb-4">Graduate Aptitude Test in Engineering</p>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Status:</span> Qualified</p>
                    <p><span className="font-semibold">Achievement:</span> First Attempt</p>
                  </div>
                </div>
                <div className="text-right">
                  <Medal size={48} className="text-green-200" />
                </div>
              </div>
            </Card>
          </div>

          {/* Leadership Experience */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">House Captain</h4>
                <p className="text-purple-600 font-medium mb-2">Jawahar Navodaya Vidyalaya, Banda</p>
                <p className="text-gray-600 text-sm">March 2018 – April 2019</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Mess Captain</h4>
                <p className="text-blue-600 font-medium mb-2">Jawahar Navodaya Vidyalaya, Banda</p>
                <p className="text-gray-600 text-sm">July 2019 – April 2020</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
