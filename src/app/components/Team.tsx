import { Code, BarChart3, Palette, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ulugbekImg from "../assets/team/ulug.jpg";
import salamatImg from "../assets/team/sala.jpg";
import bawirjanImg from "../assets/team/bawka.jpg";
import ramazanImg from "../assets/team/roma.jpg";


export function Team() {
  const teamMembers = [
  {
    name: "Ulugbek Madaminov",
    role: "Software Engineer & Project Manager",
    description: "Bir nechta startaplarning asoschisi...",
    icon: Code,
    color: "bg-blue-100 text-blue-600",
    image: ulugbekImg
  },
  {
    name: "Salamat Baxbergenov",
    role: "Business Analyst",
    description: "Strategik biznes bo'yicha maslahatchi...",
    icon: BarChart3,
    color: "bg-purple-100 text-purple-600",
    image: salamatImg
  },
  {
    name: "Bawirjan Mustapaev",
    role: "UI/UX Designer",
    description: "Ijodiy va professional UI/UX dizayner...",
    icon: Palette,
    color: "bg-pink-100 text-pink-600",
    image: bawirjanImg
  },
  {
    name: "Ramazan Xojanazarov",
    role: "Mobile Developer",
    description: "Mobil ilovalarni ishlab chiqishda katta tajribaga ega...",
    icon: Smartphone,
    color: "bg-green-100 text-green-600",
    image: ramazanImg
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Bizning Jamoa</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Evaluation Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tajribali mutaxassislar jamoasi Ferdo platformasini hayotga tatbiq etmoqda
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <member.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-green-600 font-semibold mb-2">{member.role}</div>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Bizga Qo'shiling!</h3>
          <p className="text-lg opacity-90 mb-6">O'zbekiston qishloq xo'jaligida inqilobning bir qismi bo'ling</p>
          <motion.a
            href="https://t.me/maadaminov"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Bog'lanish
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}