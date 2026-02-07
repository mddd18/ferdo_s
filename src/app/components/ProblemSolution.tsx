import { TrendingDown, TrendingUp, Users, Store, Wheat, ArrowRight, X } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">Muammo</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Vositachilar Narxni Ko'tarib Yuboradi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Olip-sotarlar fermerdan arzon olib, do'kon egalariga qimmat sotishadi
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-red-50 rounded-2xl p-8 md:p-12 border-2 border-red-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Farmer */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wheat className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fermer</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">100 so'm</div>
                <p className="text-sm text-gray-600">Arzon sotadi</p>
                <TrendingDown className="w-6 h-6 text-red-600 mx-auto mt-2" />
              </motion.div>
              
              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ArrowRight className="w-8 h-8 text-red-400 rotate-0 md:rotate-0 hidden md:block" />
              </motion.div>
              
              {/* Intermediary */}
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Users className="w-10 h-10 text-red-700" />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7, type: "spring" }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                  >
                    +30%
                  </motion.div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Vositachi</h3>
                <div className="text-2xl font-bold text-red-700 mb-2">20-30% Foyda</div>
                <p className="text-sm text-gray-600">Ortiqcha narx qo'shadi</p>
              </motion.div>
              
              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ArrowRight className="w-8 h-8 text-red-400 rotate-0 md:rotate-0 hidden md:block" />
              </motion.div>
              
              {/* Shop Owner */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex-1 text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Do'kon Egasi</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">130 so'm</div>
                <p className="text-sm text-gray-600">Qimmat sotib oladi</p>
                <TrendingUp className="w-6 h-6 text-red-600 mx-auto mt-2" />
              </motion.div>
            </div>
            
            <div className="mt-8 p-4 bg-red-100 rounded-lg border border-red-300">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900 mb-1">Natija:</p>
                  <p className="text-red-800">Fermerlar o'z hosilini arzon narxga sotadi, xalq mahsulotlarni qimmat narxga sotib oladi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Solution Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Yechim</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Ferdo — To'g'ridan-To'g'ri Aloqa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vositachilarsiz, bir platformada fermer va do'kon egasini bog'laymiz
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border-2 border-green-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
              {/* Farmer */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 text-center"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-300">
                  <Wheat className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Fermer</h3>
                <div className="bg-white rounded-lg p-4 mb-3 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">Sotish narxi:</div>
                  <div className="text-3xl font-bold text-green-600">100 so'm</div>
                </div>
                <p className="text-sm text-gray-600">1-2 tonna sotadi</p>
              </motion.div>
              
              {/* Platform in the middle */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="flex-1 text-center max-w-xs"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-600 text-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="text-2xl font-bold mb-2">FERDO</div>
                  <div className="text-sm opacity-90 mb-4">Bir Platforma</div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="flex-1 h-1 bg-white/30 rounded"></div>
                    <ArrowRight className="w-5 h-5" />
                    <div className="flex-1 h-1 bg-white/30 rounded"></div>
                  </div>
                  <div className="mt-4 text-xs bg-white/20 rounded-lg p-2">
                    Komissiya: 3-7%
                  </div>
                </motion.div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700 font-medium">To'g'ridan-to'g'ri aloqa</span>
                </div>
              </motion.div>
              
              {/* Shop Owner */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex-1 text-center"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-300">
                  <Store className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Do'kon Egasi</h3>
                <div className="bg-white rounded-lg p-4 mb-3 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">Xarid narxi:</div>
                  <div className="text-3xl font-bold text-green-600">105 so'm</div>
                </div>
                <p className="text-sm text-gray-600">50-100 kg sotib oladi</p>
              </motion.div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { value: "20-25%", label: "Narx Pasayishi", delay: 0.6 },
                { value: "100%", label: "Shaffoflik", delay: 0.7 },
                { value: "0", label: "Vositachilar", delay: 0.8 }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: stat.delay }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}