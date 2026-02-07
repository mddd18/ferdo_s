import { Wheat, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Ferdo</span>
            </div>
            <p className="text-sm">
              Fermerlar va do'kon egalarini to'g'ridan-to'g'ri bog'lovchi platforma.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Bosh Sahifa</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Biz Haqimizda</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Fermerlar Uchun</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Do'konlar Uchun</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bog'lanish</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span>info@ferdo.uz</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+998 91 377 39 33</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Toshkent, O'zbekiston</span>
              </li>
            </ul>
          </div>
          
          {/* Team */}
          <div>
            <h3 className="text-white font-semibold mb-4">Evaluation Team</h3>
            <p className="text-sm mb-4">
              Tajribali mutaxassislar jamoasi O'zbekiston qishloq xo'jaligi savdosini yangilashmoqda.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Ferdo. Barcha huquqlar himoyalangan. | Evaluation Team tomonidan ishlab chiqilgan</p>
        </div>
      </div>
    </footer>
  );
}