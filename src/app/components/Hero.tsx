import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Evaluation Team tomonidan
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="text-green-600">Ferdo</span> — Fermerdan
            <br />
            To'g'ridan-To'g'ri Do'koningizga
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
          >
            Fermerlar va do'kon egalari o'rtasidagi vositachilarni yo'qotamiz. 
            20-30% ortiqcha to'lovlarni kamaytirish, shaffof va adolatli narxlar.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="https://ferddo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Platformaga Qo'shilish
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://t.me/maadaminov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600"
            >
              Batafsil Ma'lumot
            </motion.a>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Fermerlar", delay: 0.8 },
              { number: "1000+", label: "Mahsulotlar", delay: 0.9 },
              { number: "3-7%", label: "Komissiya", delay: 1.0 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl"
      ></motion.div>
    </section>
  );
}