import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection () {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            {/* <p className="text-lg text-gray-600">
              Ready to discuss your power infrastructure project? Contact our team for expert consultation.
            </p> */}
          </div>

          <div className="grid lg:grid-cols-1 justify-center gap-12">
            <div>
              {/* Changed from flex to responsive grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div className="min-w-0"> {/* Allow text to wrap */}
                    <div className="font-semibold">Head Office</div>
                    <div className="text-gray-600 text-sm break-words">POWER HOUSE, Km 16, <br /> Port Harcourt-Aba Expressway<br />Port Harcourt, Rivers State, Nigeria</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600 text-sm break-words">+234 705 599 0728<br />+234 705 599 0729</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600 text-sm break-words">info@incomeelectrix.com</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Lagos Office</div>
                  <div className="text-sm text-gray-600 mt-1 break-words">2nd Floor, The ESHROW Building, Block V, Plot 2, <br />Landbridge Avenue, off Abila Abiodun Oniru Rd, Victoria Island</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Abuja Office</div>
                  <div className="text-sm text-gray-600 mt-1 break-words">26, Mediterranean Street, Imani Estate, Maitama</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Warri Office</div>
                  <div className="text-sm text-gray-600 mt-1 break-words">10, Omo Agege Road, Opposite High Court 4 Effurun Warri</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Ughelli Operations Base</div>
                  <div className="text-sm text-gray-600 mt-1 break-words">Ogheneweta Junction, Km 2, Ughelli/Patani Road, Ughelli, Delta State.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}