import { CheckCircle2, Circle, Target, Users, TrendingUp, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export function Roadmap() {
  const roadmapSteps = [
    {
      phase: "1-Bosqich",
      title: "Dizayn va Prototip",
      description: "Foydalanuvchi ehtiyojlariga tayangan dizayn va tajriba ishlab chiqildi",
      status: "completed",
      icon: Target,
      details: ["Foydalanuvchi tadqiqoti", "UI/UX dizayni", "Prototip yaratish"]
    },
    {
      phase: "2-Bosqich",
      title: "Sinov va Test",
      description: "20-30 nafar dastlabki foydalanuvchi bilan sinovdan o'tkazildi",
      status: "completed",
      icon: Users,
      details: ["Beta test guruhi", "Fikr-mulohazalar yig'ish", "Muammolarni hal qilish"]
    },
    {
      phase: "3-Bosqich",
      title: "MVP Ishga Tushirish",
      description: "Minimal ishlaydigan versiya (MVP) ishga tushirildi",
      status: "completed",
      icon: Rocket,
      details: [
        "Fermerlar mahsulotlarini joylaydi",
        "Do'kon egalari qidiradi va buyurtma beradi",
        "To'g'ridan-to'g'ri bog'lanish",
        "Har bitimdan 3-7% komissiya"
      ]
    },
    {
      phase: "4-Bosqich",
      title: "Ommaviy Foydalanish",
      description: "Platforma ommaviy foydalanish uchun ishga tushirilmoqda",
      status: "in-progress",
      icon: TrendingUp,
      details: [
        "500+ fermerlar jalb qilish",
        "1,000+ mahsulot bazasi",
        "Barqaror savdo hajmi",
        "Viloyatlar bo'ylab kengayish"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Rivojlanish Rejasi</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            FERDO Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platformamiz rivojlanish yo'lida qanday bosqichlardan o'tdi va qayerga ketyapmiz
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>
          
          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                    <div className={`inline-flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {step.phase}
                      </span>
                      {step.status === 'completed' && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                      {step.status === 'in-progress' && (
                        <div className="flex items-center gap-1">
                          <Circle className="w-5 h-5 text-orange-600 animate-pulse" />
                          <span className="text-xs text-orange-600 font-semibold">Davom etmoqda</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:items-end md:flex md:flex-col' : ''}`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          {index % 2 === 0 ? (
                            <>
                              <span className="hidden md:inline">{detail}</span>
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 hidden md:block" />
                              <span className="md:hidden flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {detail}
                              </span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${
                    step.status === 'completed' ? 'bg-green-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'
                  }`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Future Goals */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Kelajak Maqsadlarimiz</h3>
            <p className="text-lg opacity-90">2026 yilda erishmoqchi bo'lgan ko'rsatkichlar</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Faol Fermerlar</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-sm opacity-90">Mahsulot Turlari</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-sm opacity-90">Do'kon Egalari</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Viloyatlar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}