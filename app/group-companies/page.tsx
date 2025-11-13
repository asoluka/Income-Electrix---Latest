import ContactSection from "@/components/Contact";
import DownloadPortfolio from "@/components/DownloadPortfolio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

export const subsidiaries = [
    { 
      slug: 'iel',
      name: 'Income Electrix Limited', 
      blurb: 'Flagship EPC & Power company - Generation, T&D, IPP operations',
      focus: 'EPC, Power Generation, T&D',
      logo: '/images/logos/IEL.jpg'
    },
    // { 
    //   slug: 'cms',
    //   name: 'CMS Enerji (Turkey)', 
    //   blurb: 'International EPC & O&M partner - GE authorized service provider',
    //   focus: 'International Projects, O&M',
    //   logo: ''
    // },
    { 
      slug: 'armese',
      name: 'Armese Consulting', 
      blurb: 'Revenue assurance, energy audits, AMI integration specialists',
      focus: 'Consultancy, Revenue Protection',
      logo: ''
    },
    { 
      slug: 'kilowatt',
      name: 'Kilowatt Engineering', 
      blurb: 'Transformer services, equipment repairs, utility network support',
      focus: 'Equipment Maintenance, Repairs',
      logo: '/images/logos/Kilowatt.jpg'
    },
    { 
      slug: 'kevtrics',
      name: 'Kevtrics Nigeria', 
      blurb: 'International procurement, precast concrete manufacturing',
      focus: 'Procurement, Manufacturing',
      logo: ''
    },
    { 
      slug: 'skyview',
      name: 'Skyview Power Technologies', 
      blurb: 'Solar PV, small hydro, renewable energy solutions',
      focus: 'Renewable Energy, Solar',
      logo: ''
    }
  ];

export default function GroupCompaniesPage () {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero
        title="Group Companies & Strategic Partners"
        description="Specialized subsidiaries and international partnerships delivering comprehensive solutions across the power sector."
        tag="Our Group"
        bgImage="/images/others/power_technologies.jpg"
      />

        {/* Group Companies Section */}
      <section id="subsidiaries" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Group Companies & Strategic Partners</h2>
            <p className="text-lg text-gray-600">
              Specialized subsidiaries and international partnerships delivering comprehensive solutions across the power sector.
            </p>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((company, index) => (
              <a key={index} href={`/subsidiary/${company.slug}`} >
              <div className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  {!company.logo ? <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {company.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </div> :
                  <img src={company.logo} alt={company.name} width={'45px'} height={'45px'} />}
                  {company.name.includes('Turkey') && (
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      International
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">{company.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{company.blurb}</p>
                
                <div className="text-xs font-medium mb-4">{company.focus}</div>
                
                <span className="inline-flex items-center gap-2 text-red-600 font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
              </a>
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