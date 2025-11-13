'use client'
import React from "react"
import Header from "@/components/Header"
import { ArrowRight, Award, BarChart2, CheckCircle, Factory, Globe, Star, Sun, ToolCase, Users, Zap } from "lucide-react"
import Footer from "@/components/Footer"
import ContactSection from "@/components/Contact"
import Hero from "@/components/Hero"
import DownloadPortfolio from "@/components/DownloadPortfolio"

const services = [
  {
    title: 'Engineering, Procurement & Construction (EPC)',
    description: 'End-to-end EPC solutions for power generation, transmission, and distribution systems with integrated mechanical, electrical, and instrumentation works.',
    features: [
      'Electricity Generation, Transmission & Distribution',
      'Mechanical Systems (HVAC, Valves, Fabrication, Pumps)',
      'Electrical (Industrial & Internal)',
      'Instrumentation & Control (SCADA, Automation)',
      'Firefighting & Deluge Systems'
    ],
    icon: <Zap size={28} className="text-red-600" />
  },
  {
    title: 'Independent Power Production (IPP)',
    description: 'Development and operation of distributed generation and merchant plants for reliable and sustainable power supply.',
    features: [
      'Gas Fired Plants',
      'Heavy Fuel/Diesel Systems',
      'Renewable Energy (Solar PV & SHPs)',
    ],
    icon: <Sun size={28} className="text-yellow-600" />
  },
  {
    title: 'Utility Operations & Management Services',
    description: 'Comprehensive utility management and franchising operations to enhance efficiency, reliability, and revenue performance.',
    features: [
      'PHED Operations',
      'Utility Franchising',
    ],
    icon: <Users size={28} className="text-blue-600" />
  },
  {
    title: 'Electrical Equipment Repairs & Retrofitting',
    description: 'Specialized repairs and modernization of electrical infrastructure to extend lifespan and improve performance.',
    features: [
      'Transformers',
      'Switchgear',
      'Motor',
      'Circuit Breakers & Drives',
      'High & Low Voltage Panels',
      'Motor Control Centres (MCC)',
      'Distributed Control Systems (DCS)'
    ],
    icon: <ToolCase size={28} className="text-purple-600" />
  },
  {
    title: 'Revenue Assurance',
    description: 'Deployment of hardware, software, and field teams to ensure efficient energy metering, monitoring, and loss reduction.',
    features: [
      'Hardware Solutions',
      'Software Integration',
      'Field (Boots-on-Ground) Operations',
    ],
    icon: <BarChart2 size={28} className="text-orange-600" />
  },
  {
    title: 'Manufacturing',
    description: 'In-house manufacturing and assembly of key electrical components and concrete products to support energy infrastructure.',
    features: [
      'Manufacturing of Prepaid Electricity Meters (MSMSL)',
      'Assembly of Electrical Components',
      'Pre-stressed & Precast Concrete Products (Kevtrics)',
    ],
    icon: <Factory size={28} className="text-green-600" />
  }
]


export default function ServicesPage () {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="Our Services"
        description="End-to-end electrical engineering services across the entire power value chain"
        tag="Comprehensive Power Solutions"
        bgImage="/images/others/power_technologies.jpg"
      />

      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Power Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end electrical engineering services across the entire power value chain, 
              backed by 30+ years of experience and proven delivery in challenging environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* <a href="#request-portfolio" className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <DownloadPortfolio />

      <Footer />
    </div>
  )
}