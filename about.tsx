import { Card } from "@/components/ui/card";
import { Code, Award } from "lucide-react";
import professionalPhotoUrl from "@assets/1000029740_1751693536595.jpg";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-white/95"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              From my foundational years at <strong>Jawahar Navodaya Vidyalaya, Banda</strong> where I served as House Captain and Mess Captain, to pursuing my <strong>B.Tech in Computer Science Engineering</strong> from University of Allahabad with an impressive <strong>8.85 CGPA</strong>, my journey has been one of continuous learning and leadership.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing <strong>M.Tech in Cybersecurity from IIT Delhi</strong>, I am passionate about cutting-edge research in areas like drone security, vehicular networks, and advanced navigation systems. My work spans from theoretical research to practical implementations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond academics, I am a <strong>content creator and motivational speaker</strong>, passionate about sharing knowledge and inspiring others to pursue excellence in technology and life.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white text-center">
                <div className="text-3xl font-bold">8.85</div>
                <div className="text-sm text-purple-200">B.Tech CGPA</div>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center">
                <div className="text-3xl font-bold">718</div>
                <div className="text-sm text-green-200">GATE Score 2025</div>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white professional-photo">
                <img 
                  src={professionalPhotoUrl} 
                  alt="Vikash Mishra in Professional Setting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-full shadow-lg">
                <Code className="text-purple-600" size={32} />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 p-4 rounded-full shadow-lg text-white">
                <Award size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
