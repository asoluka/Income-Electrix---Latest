<section id="contact" className="py-32 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to discuss your power infrastructure project? Contact our team for expert consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 justify-center gap-12">
            <div>
              {/* <h3 className="text-2xl font-bold mb-6">Contact Information</h3> Note: Restore this heading if contact form returns */}
              
              {/* flex instead of space-y-6 to achieve row-behaviour (if contact form returns, replace flex with space-y-6) */}
              <div className="flex gap-12 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Head Office</div>
                    <div className="text-gray-600">POWER HOUSE, Km 16, Port Harcourt-Aba Expressway<br />Port Harcourt, Rivers State, Nigeria</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">+234 705 599 0728<br />+234 705 599 0729</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@incomeelectrix.com</div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Lagos Office</div>
                  <div className="text-sm text-gray-600 mt-1">2nd Floor, The ESHROW Building, Block V, Plot 2, Landbridge Avenue, off Abila Abiodun Oniru Rd, Victoria Island</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Abuja Office</div>
                  <div className="text-sm text-gray-600 mt-1">26, Mediterranean Street, Imani Estate, Maitama</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Warri Office</div>
                  <div className="text-sm text-gray-600 mt-1">0, Omo Agege Road, Opposite High Court 4 Effurun Warri</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                  <div className="font-semibold">Ughelli Operations Base</div>
                  <div className="text-sm text-gray-600 mt-1">Ogheneweta Junction, Km 2, Ughelli/Patani Road, Ughelli, Delta State.</div>
                </div>
              </div>
            </div>

            <div>
              <form className="p-8 bg-white rounded-2xl shadow-xl space-y-6">
                <div className="text-xl font-bold mb-6">Send us a Message</div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      id="firstName" 
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      id="lastName" 
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    id="email" 
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    placeholder="john@company.com" 
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    id="company" 
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    placeholder="Your Company Name" 
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select 
                    id="service" 
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  >
                    <option value="">Select a service</option>
                    <option value="generation">Power Generation EPC</option>
                    <option value="transmission">Transmission Infrastructure</option>
                    <option value="distribution">Distribution Networks</option>
                    <option value="utility">Utility Management</option>
                    <option value="manufacturing">Manufacturing Solutions</option>
                    <option value="consulting">Consulting & Advisory</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm h-32 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    placeholder="Tell us about your project requirements..." 
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button 
                    type="button" 
                    className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                  <div className="text-sm text-gray-500">We respond within 48 hours</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>