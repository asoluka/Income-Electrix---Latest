'use client'
import React, { useState } from "react"
import Header from "@/components/Header"
import { ArrowRight, Award, CheckCircle, Globe, Star, Users, Zap } from "lucide-react"
import Footer from "@/components/Footer"
import ContactSection from "@/components/Contact"
import Hero from "@/components/Hero"
import DownloadPortfolio from "@/components/DownloadPortfolio"

export default function ProjectsPage () {
  const [selectedProjectFilter, setSelectedProjectFilter] = useState('all');

const projects = [
    { 
      slug: '252mw-omoku',
      title: '252MW Gas Power Plant — Omoku', 
      tag: 'In Progress', 
      value: '$27.8M',
      client: 'Niger Delta Power',
      category: 'generation',
      description: 'Simple cycle gas turbine generators with balance of plant',
      img: '../images/projects/252MW_Gas_Plant_Omoku.jpg'
    },
    { 
      slug: '20mw-escravos',
      title: '20MW Gas IPP — Escravos', 
      tag: 'Completed', 
      value: '$51M',
      client: 'NNPC',
      category: 'generation',
      description: 'Full EPC of gas-fired power plant with operations',
      img: '../images/projects/Escravos_GasPlant_1.jpg'
    },
    { 
      slug: '132kv-ikot-abasi-eket',
      title: '132kV Ikot-Abasi to Eket Line', 
      tag: 'Commissioned', 
      value: '$39M',
      client: 'Ibom Power',
      category: 'transmission',
      description: 'Double-circuit transmission line across Akwa Ibom',
      img: '../images/projects/ikot-abasi.jpg'
    },
    { 
      slug: '330-132-33kV-ikot-ekpene',
      title: '330/132/33kV Substation — Ikot Ekpene', 
      tag: '83% Complete', 
      value: '$46M',
      client: 'NDDC',
      category: 'transmission',
      description: 'Major transmission infrastructure with associated lines',
      img: '../images/projects/transmission_ikot.jpg'
    },
    { 
      slug: 'nipp-distribution-lot-d',
      title: 'NIPP Distribution Lot D-EPC-AB2/2', 
      tag: 'Commissioned', 
      value: '$11.14M',
      client: 'NIPP',
      category: 'distribution',
      description: '33/11kV substations and distribution networks',
      img: '../images/others/distribution_networks.jpg'
    },
    { 
      slug: 'ubth-solar-street-lighting',
      title: 'Solar Street Lighting — UBTH', 
      tag: 'Completed', 
      value: 'N/A',
      client: 'UBTH Benin',
      category: 'renewable',
      description: 'All-in-one solar street lighting installation',
      img: '../images/projects/ubth.png'
    },
    { 
      slug: '36-5mw-sierra-leone',
      title: '36.5MW IPP — Sierra Leone', 
      tag: 'Completed', 
      value: '$63M',
      client: 'Govt. of Sierra Leone',
      category: 'generation',
      description: 'Emergency power project including O&M services',
      img: '../images/projects/sierra_leone.jpg'
    },
    { 
      slug: 'warri-sapele-street-lighting',
      title: 'Warri-Sapele Street Lighting', 
      tag: 'Completed', 
      value: '$8.25M',
      client: 'Delta State Govt',
      category: 'distribution',
      description: '14km high-efficiency sodium street lighting',
      img: '../images/projects/warri-sapele.png'
    }
  ];

  const filteredProjects = selectedProjectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedProjectFilter);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="Our Projects"
        description="Showcasing our extensive experience across power generation, transmission, distribution, and renewable energy projects."
        tag="Project Portfolio"
        bgImage="/images/others/distribution_networks.jpg"
      />

      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'generation', 'transmission', 'distribution', 'renewable'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedProjectFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedProjectFilter === filter
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                {filter === 'all' ? ' Projects' : ''}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <a key={index} href={`/project/${project.slug}`}>
              <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-48 bg-gradient-to-br from-red-100 via-red-100 to-purple-100 flex items-center justify-center relative"
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  >
                  <div className="text-center text-gray-600">
                    <div className="text-lg font-semibold mb-2 from-red-100 via-red-100 to-purple-100">{project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project</div>
                    {/* <div className="text-sm opacity-75">Project visualization</div> */}
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.tag.includes('Progress') ? 'bg-orange-100 text-orange-700' :
                    project.tag.includes('Complete') ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.tag}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span><strong>Client:</strong> {project.client}</span>
                    {/* <span><strong>Value:</strong> {project.value}</span> */}
                  </div>
                  
                  <span className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
                    View Details <ArrowRight size={16} />
                  </span>
                </div>
              </div>
              </a>
            ))}
          </div>

          <div id="request-portfolio" className="mb-36"></div>

          <div className="text-center mt-12">
            <a href="docs/income_electrix_brochure.pdf" download className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-50 transition-all">
              Download Brochure <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      <DownloadPortfolio />

      <Footer />
    </div>
  )
}