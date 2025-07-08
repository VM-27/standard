import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Handshake, 
  Send 
} from "lucide-react";
import professionalPhotoUrl from "@assets/1000029740_1751693536595.jpg";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "vikashmishra27082002@gmail.com",
      href: "mailto:vikashmishra27082002@gmail.com"
    },
    {
      icon: Phone,
      label: "+91-8115952060",
      href: "tel:+918115952060"
    },
    {
      icon: MapPin,
      label: "Atarra, Uttar Pradesh, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/Vikash2708",
      href: "https://linkedin.com/in/Vikash2708"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/Vikash2708",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/VM-27",
      color: "hover:text-gray-900"
    },
    {
      icon: Mail,
      href: "mailto:vikashmishra27082002@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in technology and research
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-100 leading-relaxed">
                Whether you're interested in collaborating on research projects, discussing technology trends, or seeking mentorship, I'm always open to meaningful conversations. As a content creator and motivational speaker, I'm passionate about sharing knowledge and inspiring others.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex items-center">
                    <IconComponent size={24} className="mr-4" />
                    <span>{item.label}</span>
                  </div>
                );

                return item.href ? (
                  <a 
                    key={index}
                    href={item.href}
                    className="block hover:text-yellow-300 transition-colors"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/20 hover:bg-white p-3 rounded-full transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl professional-photo">
                <img 
                  src={professionalPhotoUrl} 
                  alt="Vikash Mishra - Contact" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg animate-float">
                <MessageSquare size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-purple-600 p-4 rounded-full shadow-lg">
                <Handshake size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Conversation?</h3>
          <p className="text-gray-100 mb-8">I'm currently open to new opportunities and collaborations</p>
          <Button 
            asChild
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <a 
              href="mailto:vikashmishra27082002@gmail.com"
              className="inline-flex items-center"
            >
              <Send size={20} className="mr-3" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
