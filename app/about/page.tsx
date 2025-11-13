import ContactSection from "@/components/Contact";
import DownloadPortfolio from "@/components/DownloadPortfolio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ArrowRight, Award, CheckCircle, Globe, Users, Zap } from "lucide-react";

export default function AboutPage () {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="About us"
        description="Africa's Preferred Electrical Engineering Solutions Provider"
        tag=""
        bgImage="/images/others/power_technologies.jpg"
      />

      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Africa's Preferred Electrical Engineering Solutions Provider</h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Income Electrix Group (IEG) is a full-value chain African provider of electrical engineering solutions — 
                from concept development to handing over the keys and beyond. With over three decades of verifiable experience 
                in the West African power sector, we operate across the entire power value chain.
              </p>

              <p className="text-gray-700 mb-8">
                Our experience spans the difficult terrains of the Niger Delta and Northern Nigeria, with international 
                projects in Liberia, and Sierra Leone. We provide comprehensive electromechanical solutions 
                through our group of specialized companies and strategic alliances.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-red-600" size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">Generation & EPC</h3>
                  <p className="text-sm text-gray-600">Thermal and renewable plant EPC, gas turbines, diesel generators, solar PV, and small hydro systems.</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">Transmission & Distribution</h3>
                  <p className="text-sm text-gray-600">66kV-500kV transmission lines, 66kV-330kV substations, 33kV-11kV distribution networks.</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">Utility Management</h3>
                  <p className="text-sm text-gray-600">Complete utility operations, franchise management, AMI integration, revenue assurance systems.</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="text-orange-600" size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">Manufacturing & Consulting</h3>
                  <p className="text-sm text-gray-600">Prepaid Meters, Transformers, Precast Concrete, Energy Audits, Energy Efficiency Audit / Spend Reduction Strategies.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <h4 className="font-semibold mb-4 text-lg">Company Overview</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">1992</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees:</span>
                    <span className="font-medium">3,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senior Mgmt Exp:</span>
                    <span className="font-medium">500+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coverage:</span>
                    <span className="font-medium">49,206 sq km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">People Served:</span>
                    <span className="font-medium">18.7M+</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-red-50 rounded-xl">
                <h4 className="font-semibold mb-4">Geographic Presence</h4>
                <div className="text-sm text-gray-700 space-y-2">
                  <div><strong>Nigeria:</strong> Port Harcourt (HQ), Lagos, Abuja, Warri, Ughelli</div>
                  <div><strong>International:</strong>Sierra Leone, Liberia, Ivory Coast</div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="/projects" className="flex-1 text-center py-2 px-4 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                  View Projects
                </a>
                <a href="/leadership" className="flex-1 text-center py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-red-300 transition-colors">
                  Leadership Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR & Impact Section */}
      <section className="py-32">
        <div id="csr" className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Corporate Social Responsibility</h3>
              <p className="text-lg text-gray-700 mb-6">
                IEG actively supports youth development and host communities through targeted programs since 2009, 
                creating sustainable impact across our operational areas.
              </p>
              
              <div className="space-y-4 mb-8">
                {/* <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Community Electrification</div>
                    <div className="text-gray-600">Pilot programs bringing power to underserved communities</div>
                  </div>
                </div> */}
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Skills Development</div>
                    <div className="text-gray-600">Youth engagement and technical skills training programs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Local Content</div>
                    <div className="text-gray-600">Creating jobs through manufacturing plants and local hiring</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-6 text-center">Impact Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600">18.7M+</div>
                  <div className="text-sm text-gray-600 mt-1">People Covered</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">63</div>
                  <div className="text-sm text-gray-600 mt-1">Injection Substations</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">NGN 13B</div>
                  <div className="text-sm text-gray-600 mt-1">2024 Collections</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">3,000+</div>
                  <div className="text-sm text-gray-600 mt-1">Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <DownloadPortfolio />

      {/* Footer */}
      <Footer />
    </div>
  )
} 