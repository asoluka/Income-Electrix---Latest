"use client"

import React, { useState } from "react";
import { Award, Users, Zap, Globe, CheckCircle, ArrowRight, Star } from "lucide-react";
import ResponsiveSlider from "@/components/ResponsiveSlider";
import ServicesPage from "./services/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import { subsidiaries } from "./group-companies/page";
import { managementTeam } from "./leadership/page";
import Image from "next/image";

export default function EnhancedIegLandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');

  const testimonials = [
    {
      quote: "IEG's technical expertise and reliability in power generation projects is unmatched in West Africa.",
      author: "NNPC Project Director",
      project: "20MW Escravos Gas Plant"
    },
    {
      quote: "The transformation of PHEDC under IEG's management demonstrates their exceptional utility operations capability.",
      author: "4Power Consortium",
      project: "PHEDC Management"
    },
    {
      quote: "Outstanding delivery on transmission infrastructure across challenging Niger Delta terrain.",
      author: "NDDC Program Manager",
      project: "Multi-State Transmission"
    }
  ];

  const projects = [
    { 
      title: '252MW Gas Power Plant — Omoku', 
      tag: 'In Progress', 
      value: '$27.8M',
      client: 'Niger Delta Power',
      category: 'generation',
      description: 'Simple cycle gas turbine generators with balance of plant',
      img: '/images/projects/252MW_Gas_Plant_Omoku.jpg'
    },
    { 
      title: '20MW Gas IPP — Escravos', 
      tag: 'Completed', 
      value: '$51M',
      client: 'NNPC',
      category: 'generation',
      description: 'Full EPC of gas-fired power plant with operations',
      img: '/images/projects/Escravos_GasPlant_1.jpg'
    },
    { 
      title: '132kV Ikot-Abasi to Eket Line', 
      tag: 'Commissioned', 
      value: '$39M',
      client: 'Ibom Power',
      category: 'transmission',
      description: 'Double-circuit transmission line across Akwa Ibom',
      img: '/images/projects/ikot-abasi.jpg'
    },
    { 
      title: '330/132/33kV Substation — Ikot Ekpene', 
      tag: '83% Complete', 
      value: '$46M',
      client: 'NDDC',
      category: 'transmission',
      description: 'Major transmission infrastructure with associated lines',
      img: '/images/projects/transmission_ikot.jpg'
    },
    { 
      title: 'NIPP Distribution Lot D-EPC-AB2/2', 
      tag: 'Commissioned', 
      value: '$11.14M',
      client: 'NIPP',
      category: 'distribution',
      description: '33/11kV substations and distribution networks',
      img: '/images/others/distribution_networks.jpg'
    },
    { 
      title: 'Solar Street Lighting — UBTH', 
      tag: 'Completed', 
      value: 'N/A',
      client: 'UBTH Benin',
      category: 'renewable',
      description: 'All-in-one solar street lighting installation',
      img: '/images/projects/ubth.png'
    },
    { 
      title: '36.5MW IPP — Sierra Leone', 
      tag: 'Completed', 
      value: '$63M',
      client: 'Govt. of Sierra Leone',
      category: 'generation',
      description: 'Emergency power project including O&M services',
      img: '/images/projects/sierra_leone.jpg'
    },
    { 
      title: 'Warri-Sapele Street Lighting', 
      tag: 'Completed', 
      value: '$8.25M',
      client: 'Delta State Govt',
      category: 'distribution',
      description: '14km high-efficiency sodium street lighting',
      img: '/images/projects/warri-sapele.png'
    }
  ];

  const filteredProjects = selectedProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedProjectFilter);

  // https://picsum.photos/800/400?random=1
  const slides = [
    {
    id: 1,
    image: "/images/others/distribution_networks.jpg",
    title: "First Slide",
    // description: <div className="flex items-center justify-center gap-3">
    //   <Zap size={20} />
    //   252MW Gas Power Plant (In Progress)
    // </div>,
    },
    {
    id: 2,
    image: "/images/others/power_technologies.jpg",
    title: "Second Slide",
    // description: <div className="flex items-center justify-center gap-3">
    //   <Zap size={20} />
    //   252MW Gas Plant (In Progress)
    // </div>,
    },
    {
    id: 3,
    image: "/images/others/united_workforce.jpg",
    title: "Third Slide",
    // description: <div className="flex items-center justify-center gap-3">
    //   <Globe size={20} />
    //   132kV Transmission Lines
    // </div>,
    },
    {
      id: 4,
      image: "/images/others/csr.jpg",
      title: "Fourth Slide",
      // description: <div className="flex items-center justify-center gap-3">
      //   <Users size={20} />
      //   International Projects
      // </div>
    }
  ];

  // Board of Directors Array
  const boardOfDirectors = [
    {
      name: 'General Alexander O. Ogomudia (Rtd.)',
      role: 'Chairman',
      background: 'Retired Nigerian Military officer, former Chief of Defence Staff and Chief of Army Staff, extensive military leadership experience with Signal Officers training and engineering background',
      img: '/images/board/ogomudia.jpg'
    },
    {
      name: 'Barr. Ovie Edward Ukiri',
      role: 'Board Member',
      background: 'Senior lawyer with over 35 years experience, Fellow of Chartered Institute of Taxation, specializes in corporate commercial law, oil and gas, taxation, and regulatory compliance',
      img: '/images/board/Ukirie.jpeg'
    },
    {
      name: 'Chief Clement Ofuani',
      role: 'Board Member',
      background: 'Chartered accountant with over 27 years experience in banking, financial consulting, auditing, and public policy. Former Commissioner for Economic Planning and Economic Adviser to Governor',
      img: '/images/board/Ofuani.jpg'
    },
    {
      name: 'HE Ambassador Uche Ajulu-Okeke',
      role: 'Board Member',
      background: 'Veteran diplomat with over thirty years in Nigerian Foreign Service, first Female Ambassador Consul-General to South Africa, CEO/Lead Advisor of DipConsult diplomatic advisory service',
      img: '/images/board/He.jpeg'
    },
    {
      name: 'Engr. (Dr.) Matthew O. Edevbie',
      role: 'Group Managing Director',
      background: 'Engineering leader with over 38 years experience, Chairman of multiple companies including Kevtrics Nigeria Limited, Harvard Business School alumnus, Fellow of multiple professional institutes',
      img: '/images/board/M_Edevbie.jpg'
    },
    {
      name: 'Alhaji Ibrahim Sani Bello',
      role: 'Strategic Partner',
      background: 'Chairman of Sanbellododena Engineering Nigeria Limited, over 25 years corporate experience, holds Bachelor\'s in Economics and Master\'s in Project Management from London',
      img: '/images/board/sani_bello.png'
    }
  ];

  const clientLogos = [
    { name: 'BEDC', src: '/images/clients/BEDC1.jpg' },
    { name: 'Cote d\'Ivoire', src: '/images/clients/Cote.jpg' },
    { name: 'NNPC', src: '/images/clients/Nigerian_National_Petroleum_Company_logo.svg.png' },
    { name: 'Nigerian Presidency', src: '/images/clients/SealNigerianPresident.jpg' },
    { name: 'Shell', src: '/images/clients/Shell_logo_4.png' },
    { name: 'Agip', src: '/images/clients/agip.jpg' },
    { name: 'Sierra Leone', src: '/images/clients/coat_of_arms_of_Sierra_Leone.jpg' },
    { name: 'Cross River State', src: '/images/clients/crs.jpg' },
    { name: 'Delta State', src: '/images/clients/delta_state_gov.png' },
    { name: 'Eco Bank', src: '/images/clients/eco_bank.png' },
    { name: 'Julius Berger', src: '/images/clients/julius_berger.jpg' },
    { name: 'NDDC', src: '/images/clients/nddc.png' },
    { name: 'Niger Delta Power', src: '/images/clients/niger-delta-power-holding-company-logo0.png' },
    { name: 'Nigerian President', src: '/images/clients/nigerian_president_seal.png' },
    { name: 'NPA', src: '/images/clients/npa_logo.png' },
    { name: 'PHED', src: '/images/clients/phd.jpg' },
    { name: 'PTDF', src: '/images/clients/ptdf.png' },
    { name: 'TCN', src: '/images/clients/tcnLogo.png' },
    { name: 'UNDP', src: '/images/clients/undp-logo.png' },
    { name: 'Total Energies', src: '/images/clients/TotalEnergies-Logo.jpg' },
    { name: 'Rivers State', src: '/images/clients/Seal_of_Rivers_State.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      {/* Enhanced Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-gray-50 via-red-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              30+ Years of Excellence Since 1992
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-red-800 to-black bg-clip-text text-transparent">
              Africa's Premier Electrical Engineering Solutions Provider
            </h1>
            
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Full-value chain electromechanical solutions across generation, transmission, distribution, and utility management. 
              From concept to commissioning and beyond — trusted by governments and industry leaders across West and Central Africa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:shadow-xl transition-all flex items-center gap-2">
                <Zap size={20} />
                What We Have Done in Pictures
              </a>
              {/* <a href="#contact" className="px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-800 font-semibold hover:border-red-300 hover:shadow-lg transition-all">
                Request Proposal
              </a> */}
            </div>

            {/* Enhanced Key Stats */}
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-red-600">30+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600">3,000+</div>
                <div className="text-sm text-gray-600 mt-1">Employees</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600">18.7M+</div>
                <div className="text-sm text-gray-600 mt-1">People Served</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Mgmt Years Exp.</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-600 via-red-700 to-purple-800 flex items-center justify-center relative">
              <ResponsiveSlider autoPlay slides={slides} />
              {/* Hero Visual Content */}
              {/* <div className="text-center text-white p-8">
                <div className="text-3xl font-bold mb-6">Major Project Portfolio</div>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center justify-center gap-3">
                    <Zap size={20} />
                    252MW Gas Plant (In Progress)
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle size={20} />
                    20MW Escravos IPP (Completed)
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Globe size={20} />
                    132kV Transmission Lines
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Users size={20} />
                    International Projects
                  </div>
                </div>
              </div> */}
              
              {/* Achievement Badge */}
              {/* <div className="absolute bottom-6 right-6 bg-white/95 px-6 py-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600">ATC&C Loss Reduction</div>
                  <div className="text-2xl font-bold text-green-600">62% → 28%</div>
                  <div className="text-xs text-gray-500">PHEDC Achievement</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* PHEDC Success Story */}
      <section className="py-32 bg-gradient-to-r from-green-50 to-emerald-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <CheckCircle size={16} />
                Flagship Success Story
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transforming Nigeria's Largest Distribution Network
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                As technical partner and operator of Port Harcourt Electricity Distribution Company (PHEDC), 
                we manage Nigeria's most challenging distribution network covering 49,206 sq km across 4 states, 
                serving over 18.7 million people.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Dramatic Loss Reduction</div>
                    <div className="text-gray-600">ATC&C losses reduced from 62% (2019) to 28% (2024)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Revenue Growth</div>
                    <div className="text-gray-600">Annual collections increased from NGN 24B (2019) to NGN160B (2024).</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Efficiency Improvement</div>
                    <div className="text-gray-600">Collection efficiency improved from 51% to 85%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-center">PHEDC Network Coverage</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">4</div>
                  <div className="text-sm text-gray-600 mt-1">States Covered</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">63</div>
                  <div className="text-sm text-gray-600 mt-1">Injection Substations</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">6,051</div>
                  <div className="text-sm text-gray-600 mt-1">km of 33kV Lines</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">1.2M+</div>
                  <div className="text-sm text-gray-600 mt-1">Customers Served</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-center">
                <div className="font-semibold">2024 Performance</div>
                <div className="text-2xl font-bold">NGN 160 Billion</div>
                <div className="text-sm opacity-90">Annual Collections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  <p className="text-sm text-gray-600">66kV-500kV transmission lines, 25KvA - 300MvA substations, 33kV-11kV distribution networks.</p>
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

      {/* Testimonials Section */}
      {/* <section className="py-32 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our clients say about our performance and reliability</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              <div className="text-gray-600">
                <div className="font-semibold">{testimonials[activeTestimonial].author}</div>
                <div className="text-sm">{testimonials[activeTestimonial].project}</div>
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600">Trusted by leading organizations across Africa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, idx) => (
              <div key={client.name} className="flex items-center justify-center bg-white rounded-xl shadow border border-gray-100 p-4 aspect-square">
                <div className="relative w-full h-full">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <section id="subsidiaries" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Group Companies & Strategic Partners</h2>
            <p className="text-lg text-gray-600">
              Specialized subsidiaries and international partnerships delivering comprehensive solutions across the power sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((company, index) => (
              <a key={index} href={`/subsidiary/${company.slug}`}>
                <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    {!company.logo ? <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {company.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div> :
                    <img src={company.logo} alt={company.name} width={'45px'} height={'45px'} />}
                    {company.name.includes('Sierra Leone, Liberia, Ivory Coast') && (
                      <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        International
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{company.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{company.blurb}</p>
                  
                  <div className="text-xs  font-medium mb-4">{company.focus}</div>
                  
                  <span className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="structure" className="py-72 relative">
        <Image
          src="/images/hexagon_back.jpg"
          alt="Company Structure Background"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600">
              Experienced leadership team with over 500 years of collective experience in the power sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardOfDirectors.map((leader, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="relative h-80 rounded-xl bg-gradient-to-br from-gray-100 to-red-100 overflow-hidden mb-6">
                  <Image
                    src={leader.img}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                <div className="text-red-600 font-medium mb-3">{leader.role}</div>
                <p className="text-sm text-gray-600">{leader.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="management" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Management Team</h2>
            <p className="text-lg text-gray-600">
              Our management team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((leader, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="relative h-80 rounded-xl bg-gradient-to-br from-gray-100 to-red-100 overflow-hidden mb-6">
                  <Image
                    src={leader.img}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                <div className="text-red-600 font-medium mb-3">{leader.role}</div>
                <p className="text-sm text-gray-600">{leader.background}</p>
              </div>
            ))}
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

      <div className="text-center mt-12 mb-12">
        <a href="docs/income_electrix_brochure.pdf" download className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-50 transition-all">
          Download Brochure <ArrowRight size={20} />
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}