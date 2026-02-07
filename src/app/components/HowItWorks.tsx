import { Upload, Search, ShoppingCart, TrendingDown, MessageCircle, CheckCircle, Truck, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Qanday Ishlaydi</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Oddiy va Shaffof Jarayon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferdo platformasida mahsulot sotish va sotib olish oson va tez
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* For Farmers */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Upload className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fermerlar Uchun</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Ro'yxatdan O'tish", desc: "Platformaga kirish va profil yaratish" },
                { 
                  title: "Mahsulot Joylashtirish", 
                  desc: "Qancha mahsulot borligini va narxini ko'rsatish",
                  extra: <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-sm text-gray-700">Misol: <span className="font-semibold">Pomidor - 2 tonna - 3,500 so'm/kg</span></div>
                  </div>
                },
                { title: "Buyurtmalarni Qabul Qilish", desc: "Do'kon egalari sizga to'g'ridan-to'g'ri buyurtma beradi" },
                { title: "Yetkazib Berish", desc: "Mahsulotni yetkazib bering va to'lovni oling" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                    {step.extra}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* For Shop Owners */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Do'kon Egalari Uchun</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Ro'yxatdan O'tish", desc: "Platformaga kirish va do'kon ma'lumotlarini kiritish" },
                { 
                  title: "Mahsulot Qidirish", 
                  desc: "Kerakli mahsulotlarni toping va narxlarni solishtiring",
                  extra: <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <div className="text-sm text-gray-700">Misol qidiruv: <span className="font-semibold">"Pomidor, 100 kg, Toshkent viloyati"</span></div>
                  </div>
                },
                { title: "Buyurtma Berish", desc: "50-100 kg dan tortib o'zingizga kerakli miqdorda xarid qiling" },
                { title: "Mahsulot Qabul Qilish", desc: "Fermerdan to'g'ridan-to'g'ri arzon narxda mahsulot oling" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                    {step.extra}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Visual Flow Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Platform Ishlash Grafigi</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Upload, title: "1. Mahsulot Joylash", desc: 'Fermer: "2 tonna pomidor tayyor"', delay: 0.5 },
              { icon: Search, title: "2. Qidiruv va Topish", desc: "Do'kon egasi mahsulotni topadi", delay: 0.6 },
              { icon: ShoppingCart, title: "3. Buyurtma Berish", desc: '"100 kg pomidor buyurtma"', delay: 0.7 },
              { icon: TrendingDown, title: "4. Arzon Narx", desc: "20-30% tejamkorlik", delay: 0.8 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item.delay }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <div className="text-sm opacity-90">{item.desc}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-medium">Real vaqtda to'g'ridan-to'g'ri savdo</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Detailed Platform Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
            Platform Qanday Ishlaydi - Batafsil
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ferdo platformasi fermerlar va do'kon egalari o'rtasidagi to'g'ridan-to'g'ri aloqani ta'minlab, 
            vositachilar tufayli yuzaga keladigan ortiqcha xarajatlarni yo'q qiladi
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { 
                icon: Upload, 
                title: "Mahsulot E'lon Qilish", 
                desc: "Fermerlar o'z mahsulotlarini, miqdorini va narxlarini platformaga joylashtiradi. Masalan: Pomidor - 2 tonna - 3,500 so'm/kg",
                color: "green"
              },
              { 
                icon: Search, 
                title: "Qidiruv Tizimi", 
                desc: "Do'kon egalari kerakli mahsulotlarni qidirish, narxlarni solishtirish va o'zlariga mos fermerlarni topish imkoniyatiga ega",
                color: "blue"
              },
              { 
                icon: MessageCircle, 
                title: "To'g'ridan-To'g'ri Aloqa", 
                desc: "Xaridor va sotuvchi o'rtasida to'g'ridan-to'g'ri muloqot, narxlar va yetkazib berish shartlarini kelishish",
                color: "purple"
              },
              { 
                icon: CheckCircle, 
                title: "Buyurtma Tasdiqlash", 
                desc: "Ikki tomon kelishuvga erishgach, buyurtma tasdiqlanadi va yetkazib berish sanasi belgilanadi",
                color: "emerald"
              },
              { 
                icon: Truck, 
                title: "Yetkazib Berish", 
                desc: "Mahsulot kelishilgan vaqt va joyda yetkazib beriladi. Fermer o'zi yoki yuk tashish xizmatlaridan foydalanishi mumkin",
                color: "orange"
              },
              { 
                icon: DollarSign, 
                title: "To'lov va Komissiya", 
                desc: "Do'kon egasi to'lov qiladi. Ferdo platformasi muvaffaqiyatli bitimdan atigi 3-7% komissiya oladi",
                color: "green"
              },
              { 
                icon: TrendingDown, 
                title: "Arzon Narxlar", 
                desc: "Vositachilar yo'qligi tufayli narxlar 20-30% ga arzonroq, bu ikki tomon uchun ham foydali",
                color: "red"
              },
              { 
                icon: CheckCircle, 
                title: "Shaffoflik", 
                desc: "Barcha narxlar, shartlar va bitimlar ochiq va shaffof. Hech qanday yashirin to'lovlar yo'q",
                color: "indigo"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-6`}
              >
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <motion.a
              href="https://t.me/maadaminov"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Bog'lanish va Savollar
            </motion.a>
            <p className="mt-4 text-gray-600">
              Qo'shimcha ma'lumot yoki savollaringiz bo'lsa, biz bilan bog'laning
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}