import Hero from "@/components/Hero";
import Link from "next/link";
import Footer from '../../../components/Footer/index';
import ContactSection from "@/components/Contact";
import Header from "@/components/Header";

const subsidiaries: any = {
  iel: {
    name: 'Income Electrix Limited (IEL)',
    tagline: 'Flagship EPC & Power company - Generation, T&D, IPP operations',
    overview: 'Income Electrix Limited is the flagship company of Income Electrix Group (IEG), specializing in Engineering, Procurement and Construction (EPC), Power and Energy Spend Reduction. As Africa\'s leading electrical engineering solutions provider, IEL has over three decades of verifiable experience in the West African power sector.',
    divisions: [
      {
        title: 'EPC Division',
        areas: [
          {
            name: 'Generation EPC',
            description: 'EPC of Thermal (Gas, HFO, LPFO, Diesel) and Renewable (Solar PV, Small Hydro) Power plants'
          },
          {
            name: 'Transmission Networks',
            description: 'EPC of Transmission lines ranging from 66KV to 500KV; and Transmission Substations ranging from 66/11KV to 330/132KV, involving transformers of various capacities from 30MVA up to 300MVA'
          },
          {
            name: 'Distribution Networks',
            description: 'EPC of Distribution Lines ranging from 0.415kV to 33KV; 33/11KV Injection Substations ranging from 2.5 MVA to 15MVA and distribution substations of 11/0.415KV and 33/0.415KV'
          },
          {
            name: 'Mechanical Systems',
            description: 'EPC of Generators, Turbines, HVAC Systems, Valves, Pumps, other mechanical equipment; and fabrication of vessels, pipes, and other mechanical construction works'
          },
          {
            name: 'Instrumentation Systems',
            description: 'EPC of SCADA Systems, Automation and Control systems, fire-fighting systems, electronic display systems and other systems requiring automation or remote monitoring'
          }
        ]
      },
      {
        title: 'Power Division',
        areas: [
          {
            name: 'Independent Power Production',
            description: 'Merchant Plants, Embedded Generation, and Captive Generation including operations, maintenance and management'
          },
          {
            name: 'Focus Areas',
            description: 'Thermal Generation (Gas, Heavy Fuel, Diesel) and Renewables (Solar, Small Hydro Power)'
          }
        ]
      },
      {
        title: 'Utility Management',
        areas: [
          {
            name: 'PHED Management',
            description: 'Technical Partner and operator of Port Harcourt Distribution Company (PHEDC), serving 4 states with 1.2M+ customers across 49,087 sq km'
          },
          {
            name: 'Key Achievements',
            description: 'Reduced ATC&C loss from 62% (2019) to 28% (2024); Improved Collection Efficiency from 51% to 85%'
          }
        ]
      }
    ],
    keyProjects: [
      'Engineering, Procurement and Construction of 20MW gas-fired Power Plant in Escravos (Completed)',
      'Completion of 252.2MW simple cycle Gas Turbine Generators at Omoku, Rivers State (Ongoing)',
      'EPC for 132kV double-circuit line from Ikot-Abasi to Eket (Commissioned)',
      'Construction of 330/132/33KV transmission substation at Ikot Ekpene (83% Completed)',
      'Multiple NIPP Distribution Projects across Abuja, Niger, Oyo, Osun, and Ogun States (Commissioned)'
    ],
    capabilities: [
      'Over 3,000 staff with 500+ years collective management experience',
      'Experience across Niger Delta and Northern Nigeria, Liberia and Sierra Leone',
      'Full EPC capabilities from 0.415kV to 500kV',
      'Transformer capacities from 25KVA to 300MVA',
      'Complete power plant solutions (Thermal and Renewable)',
      'Advanced SCADA and automation systems'
    ]
  },
  // cms: {
  //   name: 'CMS Enerji (Turkey)',
  //   tagline: 'International EPC & O&M partner - GE authorized service provider',
  //   overview: 'CMS Enerji is the Technical Partner to Income Electrix Limited with over 10 years of experience in both greenfield and brownfield EPC power plant and electromechanical works. They specialize in single-to-combined cycle conversion, fuel type conversion, and O&M contracts, equipped to undertake difficult tasks with firm deadlines.',
  //   specialization: [
  //     'Official GE service provider supporting projects in MENA region since 2016',
  //     'Proven expertise in 132kV and 330kV Transmission Lines/Substations in difficult terrain including Iraq and Kingdom of Saudi Arabia',
  //     'Single and combined cycle power plant installations',
  //     'Gas turbine commissioning and operations',
  //     'Complete O&M solutions for large-scale power facilities'
  //   ],
  //   keyProjects: [
  //     '2 x 9E GE (127 MW) Balkanabat-2 Power Plant, Turkmenistan - Gas turbine simple cycle installation and commissioning',
  //     '10 x GE 9E (125 MW) 1,250 MW Al-Khairat Power Plant, Iraq - Installation, commissioning, training & O&M',
  //     '2 x GE 9FA (262 MW) 524 MW Khoms Power Plant, Libya - Installation and commissioning',
  //     '4 x GE 9FA + 2 x GE ST + 4 x CMI HRSG 1,574 MW Mary-3 Power Plant, Turkmenistan - Engineering works',
  //     '8 x GE 9E + 2 x ST combined cycle 1,500 MW Suleymaniah, Iraq - Operation and maintenance',
  //     '4 x Siemens STG (400MW) 1,600 MW Mussaiab Thermal Power Plant - Operation & Maintenance'
  //   ],
  //   locations: [
  //     'Headquarters: Istanbul, Turkey',
  //     'Branch operations in Iraq',
  //     'Approximately 120 staff members',
  //     'Active projects across MENA region'
  //   ],
  //   capabilities: [
  //     'GE 9E and 9FA gas turbine expertise',
  //     'Combined cycle power plant conversions',
  //     'HFO treatment and water treatment plant operations',
  //     'Siemens steam turbine O&M',
  //     'Training and capacity building programs',
  //     'Long-term O&M contracts'
  //   ]
  // },
  armese: {
    name: 'Armese Consulting Limited',
    tagline: 'Revenue assurance, energy audits, AMI integration specialists',
    overview: 'Armese Consulting Limited specializes in Revenue Assurance comprising Hardware, Software and Boots-on-the-Ground services. The company brings more than half a century of combined senior experience across the value chain of power to the African market.',
    serviceAreas: [
      {
        title: 'Power Sector Engineering/Advisory Services',
        description: 'Comprehensive advisory services spanning the entire power value chain with extensive experience in African markets'
      },
      {
        title: 'Energy Efficiency & Energy Audit Services',
        description: 'Working with industrial and commercial users to maximize efficiencies and minimize costs. Includes Power Source Optimisation, Efficient utilisation of energy consuming for fuel and usage monitoring in partnership with Emmpeek Engineering and t2O Engineers.'
      },
      {
        title: 'Revenue Assurance Services',
        description: 'End-to-end solutions including Hardware (meter manufacturing), Software (AMI systems), and Boots-on-Ground services'
      }
    ],
    revenueAssurance: {
      hardware: 'First premium Metering Solutions Services provider offering end-to-end metering solutions including manufacture of premium quality meters and tamper-proof installation through subsidiary MSMSL',
      software: 'Automated Meter Infrastructure Systems and Algorithms developed in partnership with Stemaco of UK, providing continuous meter monitoring for revenue protection',
      bootsOnGround: 'Skilled team conducting regular physical checks to identify and correct meter bypass and other revenue leakage points within the Network'
    },
    partnerships: [
      't2O Engineers (UK, Dubai, India, Oman) - Specialist mechanical, electrical, public health consultancy founded 2015',
      'StemaCo UK - AMI software development and deployment',
      'Emmppek Engineering - Energy efficiency solutions',
      'MSMSL (Metering Solutions and Manufacturing Services Limited) - Hardware manufacturing subsidiary'
    ],
    keyProjects: [
      // 'Supply of 180,000 Single Phase Din Rail Meters to Abuja Electricity Distribution Company',
      'Supply and Installation of 100,000 Din Rail Meters to PHED',
      'Supply of meters to Kano Electricity Distribution Company',
      'Supply of meters to Eko Electricity Distribution Company',
      'Supply of 3,200 meters to Liberia Electricity Commission',
      '700 CT operated Maximum Demand meters to PHED',
      'Bulk prepaid meters for 200 Communities in Bayelsa and Akwa Ibom State',
      'Electricity to Guinea',
      'Supply of 300,000 Din Rail and BS Meters to Abuja Electricity Distribution Company',
      'Kano - 40,000 meters',
      'Eko - 15,000 meters',
      'Guinea - 20,000 meters and on-going'
    ],
    consultancyProjects: [
      'Inventory and GIS mapping of electrical infrastructure in Akwa-Ibom and Delta States',
      'Enterprise-Wide Technical Services for Proposed Bayelsa State Autonomous Utility',
      'IPP and Power System Strategy for Delta State Autonomous Utility',
      'Feasibility studies for 1,600 MW IPP for Delta State',
      'Power Systems Analysis for full electrification of Bayelsa state',
      'Niger Delta Regional power pool and Industrialisation project conceptualization'
    ]
  },
  kilowatt: {
    name: 'Kilowatt Engineering Limited',
    tagline: 'Transformer services, equipment repairs, utility support',
    overview: 'Kilowatt Engineering Limited specialises in Transformers Services, Electromechanical repairs and Maintenance, operating with strategic alliance partner Benkline Nigeria Limited (ISO 9001:2015 Certified). The company provides comprehensive support for utility and industrial plants',
    coreServices: [
      {
        title: 'Equipment Repairs & Refurbishment',
        items: [
          'Generators',
          'Transformers (all sizes up to 300MvA)',
          'Motors and Drives',
          'Valves and Pumps',
          'Switchgear and Panels',
          'Distribution and Motor Control Systems'
        ]
      },
      {
        title: 'Utility Network Support',
        items: [
          'Transformer refurbishment, maintenance, repairs and replacement',
          'Testing and commissioning of all transformer sizes up to 300 MvA, 330/132KvA',
          'Substation equipment maintenance (LT/HT panels, Circuit breakers, RMUs, Fuses)',
          'Feeder pillars and lightning arrestors',
          'Fault identification and rectification on electrical equipment'
        ]
      },
      {
        title: 'Industrial Plants Support',
        items: [
          'Troubleshooting and refurbishment of industrial equipment',
          'Motor Control Centres (MCC) maintenance',
          'Distributed Control Systems (DCS)',
          'Electronic Control Systems',
          'Equipment Control Panels and switchgear construction',
          'Industrial Pumps, Drives, and Valves'
        ]
      }
    ],
    partnership: {
      name: 'Benkline Nigeria Limited',
      certification: 'ISO 9001:2015 certified',
      services: [
        'Engineering/Re-Engineering of Obsolete Pumps and Spare Parts',
        'Duplication, Reverse-Engineering and Rapid Prototyping',
        'Maintenance/Certification of Lifting Equipment',
        'Flowline/Pipeline Maintenance and repairs',
        'Corrosion Inspection and NDT Services',
        'Pressure/Hydro testing works',
        'Fabrication Works',
        'HVAC System Services',
        'Crane and Deck Services for Swamp, On-Shore and Off-shore environments',
        'OEM Representation & Training'
      ],
      facilities: [
        'Metrology Room',
        'Mechanical Seals Machine',
        'Lathe Machine',
        'Milling Machine',
        'Vertical Drilling Machine',
        'Welding Machine',
        'Double-Girder Overhead ABUS Crane',
        'Forklifts',
        'Sand-Blasting bay'
      ]
    },
    strategicPartner: 'Partnership with Nigeria Electricity Management Services (NEMSA) Ijora Transformer Services Workshop',
    projectsCompleted: [
      'Repair/Refurbishment of over 1,500 transformers for PHED (ranging from 25kVA to 15,000kVA)',
      'Pre-commissioning tests on 2 x 150 MVA Transmission Transformers, Omoku (2024)',
      'Pre-commissioning tests on 2 x 15MVA Transformers in Escravos (2025)',
      'Repair of 7.5 MVA Transformer in Oron (2023)',
      'Repair of 3MVA Distribution Transformer for NNPC, Escravos (2025)',
      'Design and Installation of Power Factor Correction Capacitor Banks',
      '12 starter Motor Control Centre refurbishment for Rubber Estates Ltd'
    ],
    industries: 'Oil and Gas, Manufacturing, Electricity Distribution, Industrial Processing'
  },
  kevtrics: {
    name: 'Kevtrics Nigeria Limited',
    tagline: 'International procurement, precast concrete manufacturing',
    overview: 'Kevtrics Nigeria Limited specializes in international Procurement/Expediting and Civil Construction Services with key competencies in supply chain management and manufacturing of pre-stressed and pre-cast concrete products.',
    coreCompetencies: [
      {
        title: 'Procurement & Supply Chain Management',
        services: [
          'Bespoke Procurement Expediting',
          'Specification Query Analysis',
          'OEM Representation',
          'Technical Procurement Services',
          'International sourcing and logistics'
        ]
      },
      {
        title: 'Civil Engineering & Construction',
        services: [
          'Civil Construction (Roads, Bridges, Buildings)',
          'Infrastructure development projects',
          'Residential and commercial construction',
          'Government housing projects',
          'Educational facility construction'
        ]
      },
      {
        title: 'Manufacturing',
        products: [
          'Pre-stressed Concrete Products',
          'Pre-Cast Concrete Products',
          'Electric Poles',
          'Kerbs',
          'Bricks',
          'Sancrete Blocks',
          'Concrete Panels',
          'Drainage Slabs',
          'Culverts'
        ]
      }
    ],
    procurementExperience: {
      description: 'Extensive technical procurement services for major oil and gas companies and industrial clients',
      clients: [
        'Mobil Producing Nigeria Unlimited (now Seplat Energy)',
        'Shell Petroleum Development Company (Now Renaissance Africa Energy)',
        'Elf Petroleum Nigeria Limited (now Total Nigeria Limited)',
        'Port Harcourt Refining Company Limited'
      ],
      oemPartners: [
        'McMaster-Carr',
        'Grainger',
        'Lincoln Electric Co USA',
        'Basler Electric Co France',
        'ABB Motors',
        'Motorola International',
        'Schneider Electric',
        'General Electric',
        'And over 30 other international OEMs'
      ]
    },
    civilProjects: [
      'Construction of Government House Staff Quarters for Rivers State Government',
      'Construction of Practice Field at Delta State Polytechnics, Otefe-Oghara',
      'Completion of Housing Block at Gwarinpa II Estate, Abuja for Federal Housing Authority',
      'Construction of Nigerian Television Authority (NTA) station at Sapele',
      'Rehabilitation of four Dormitories at Government College, Ughelli',
      'Construction of Ultra Modern Duplex projects',
      'Renovation of staff quarters at University of Port-Harcourt',
      'Road construction with drainages at Rivers State Polytechnic, Bori',
      'Multiple road construction projects in Edo and Rivers States'
    ],
    manufacturingFacility: 'Construction of Pre-Stressed and Pre-Cast Concrete Products Factory (ongoing)',
    strategicValue: 'Provides critical supply chain support and concrete infrastructure products for IEG projects across West and Central Africa'
  },
  skyview: {
    name: 'Skyview Power Technologies Limited',
    tagline: 'Solar PV, Small Hydro, Renewable Energy Solutions',
    overview: 'Skyview Power Technologies Limited, an affiliate involved in Alternative Energy and Renewable Energy Solutions for public and private infrastructure. The company is at the forefront of Nigeria’s renewable energy transition, providing comprehensive solar and hydro solutions.',
    solutionOfferings: [
      {
        title: 'Solar PV Solutions',
        applications: [
          'Solar PV Street Lighting',
          'Solar PV Independent Power Production (IPP)',
          'Solar Home Systems',
          'Commercial and industrial solar installations',
          'All-in-one solar street lighting systems'
        ]
      },
      {
        title: 'Hydroelectric Solutions',
        applications: [
          'Small Hydroelectric Power Systems',
          'Micro-hydro installations',
          'Feasibility studies for hydro projects',
          'Design and engineering services'
        ]
      },
      {
        title: 'Emerging Technologies',
        focus: 'Research and deployment of other renewable/alternative energy technologies'
      }
    ],
    completedProjects: [
      {
        project: 'IPP of 7.2MW Renewable Energy Generation at Onne, Port Harcourt',
        status: 'Ongoing',
        type: 'Large-scale IPP'
      },
      {
        project: 'IPP of 1MW Solar PV Project, Akugbene, Bomadi LGA, Delta State',
        status: 'Ongoing',
        type: 'Community IPP'
      },
      {
        project: 'Solar street lighting in Ogriagbeme, Bomadi LGA',
        status: 'Completed',
        type: 'Street lighting'
      },
      {
        project: 'Solar street lighting in Ogbeinma, Bomadi LGA',
        status: 'Completed',
        type: 'Street lighting'
      },
      {
        project: 'All-in-one solar street lighting at UBTH, Benin City, Edo State',
        status: 'Completed',
        type: 'Healthcare facility'
      },
      {
        project: 'EPC of Solar Street Light, Agiere-Weppa Town, Agenebode, Edo State',
        status: 'Completed',
        type: 'Community electrification'
      },
      {
        project: 'EPC of Solar Street Light, Akugbene Town, Delta State',
        status: 'Completed',
        type: 'Community electrification'
      }
    ],
    projectTypes: [
      'Community electrification projects',
      'Healthcare facility renewable installations',
      'Municipal street lighting',
      'Off-grid power solutions',
      'Mini-grid developments',
      'Hybrid renewable systems'
    ],
    capabilities: [
      'Complete EPC services for solar installations',
      'Feasibility studies and site assessments',
      'System design and engineering',
      'Installation and commissioning',
      'Operations and maintenance services',
      'Community engagement and training',
      'Off-grid and mini-grid expertise'
    ],
    targetSectors: [
      'Municipal and government infrastructure',
      'Healthcare facilities',
      'Educational institutions',
      'Rural and riverine communities',
      'Commercial establishments',
      'Industrial facilities'
    ],
    strategicFocus: 'Expanding renewable energy access in underserved areas while supporting Nigeria\'s clean energy transition and rural electrification goals'
  }
};

export async function generateStaticParams() {
  return Object.keys(subsidiaries).map((id) => ({ id }));
}

export default function SubsidiaryPage({ params }: any) {
  const { id } = params;
  const subsidiary = subsidiaries[id];

  if (!subsidiary) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Subsidiary Not Found</h1>
            <p className="text-gray-600 mb-6">The requested subsidiary could not be found.</p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const renderList = (title: string, list: any[]) => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h3>
      <ul className="space-y-3">
        {list.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSection = (title: string, content: any) => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{content}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Enhanced Navigation */}
      <Header />

      <Hero 
        title={subsidiary.name}
        description={subsidiary.overview}
        tag={subsidiary.tagline}
        // bgImage="../../images/hexagon_back.jpg"
        overlayStyle="from-black/90 via-red-900/80 to-black/90"
        />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Navigation */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Header Section */}
          {/* <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{subsidiary.name}</h1>
            <p className="text-xl text-red-600 font-medium mb-6">{subsidiary.tagline}</p>
            <p className="text-gray-700 leading-relaxed text-lg">{subsidiary.overview}</p>
          </div> */}

          {/* Main Content Grid */}
          <div className="grid gap-6">
            {/* Divisions */}
            {subsidiary.divisions?.map((div: any, idx: any) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">{div.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {div.areas.map((area: any, i: any) => (
                    <div key={i} className="border border-gray-100 rounded-lg p-4 hover:border-red-200 transition-colors">
                      <h4 className="font-semibold text-gray-900 mb-2">{area.name}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Service Areas */}
            {subsidiary.serviceAreas?.map((s: any, idx: any) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-3">{s.title}</h2>
                <p className="text-gray-700 leading-relaxed">{s.description}</p>
              </div>
            ))}

            {/* Core Services */}
            {subsidiary.coreServices?.map((service: any, idx: any) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{service.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {service.items.map((item: any, i: any) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Solution Offerings */}
            {subsidiary.solutionOfferings?.map((solution: any, idx: any) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{solution.title}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {solution.applications?.map((app: any, i: any) => (
                    <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
                  {solution.focus && (
                    <div className="md:col-span-2 p-3 bg-red-50 rounded-lg">
                      <span className="text-gray-700 text-sm font-medium">{solution.focus}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Completed Projects */}
            {subsidiary.completedProjects && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Completed Projects</h3>
                <div className="space-y-4">
                  {subsidiary.completedProjects.map((project: any, idx: any) => (
                    <div key={idx} className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{project.project}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Revenue Assurance */}
            {subsidiary.revenueAssurance && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">Revenue Assurance Services</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Hardware</h4>
                    <p className="text-sm text-gray-700">{subsidiary.revenueAssurance.hardware}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Software</h4>
                    <p className="text-sm text-gray-700">{subsidiary.revenueAssurance.software}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Boots-on-Ground</h4>
                    <p className="text-sm text-gray-700">{subsidiary.revenueAssurance.bootsOnGround}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Core Competencies */}
            {subsidiary.coreCompetencies?.map((comp: any, idx: any) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">{comp.title}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {comp.services?.map((service: any, i: any) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                  {comp.products?.map((product: any, i: any) => (
                    <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Lists */}
            {subsidiary.keyProjects && renderList("Some Key Projects", subsidiary.keyProjects)}
            {subsidiary.capabilities && renderList("Capabilities", subsidiary.capabilities)}
            {subsidiary.partnerships && renderList("Partnerships", subsidiary.partnerships)}
            {subsidiary.locations && renderList("Locations", subsidiary.locations)}
            {subsidiary.projectTypes && renderList("Project Types", subsidiary.projectTypes)}
            {subsidiary.targetSectors && renderList("Target Sectors", subsidiary.targetSectors)}
            {subsidiary.specialization && renderList("Specialization", subsidiary.specialization)}
            {subsidiary.consultancyProjects && renderList("Consultancy Projects", subsidiary.consultancyProjects)}
            {subsidiary.civilProjects && renderList("Civil Projects", subsidiary.civilProjects)}
            {subsidiary.projectsCompleted && renderList("Some Projects Completed", subsidiary.projectsCompleted)}

            {/* Special Sections */}
            {subsidiary.strategicValue && renderSection("Strategic Value", subsidiary.strategicValue)}
            {subsidiary.strategicFocus && renderSection("Strategic Focus", subsidiary.strategicFocus)}
            {subsidiary.industries && renderSection("Industries Served", subsidiary.industries)}
            {subsidiary.manufacturingFacility && renderSection("Manufacturing Facility", subsidiary.manufacturingFacility)}
          </div>
        </div>
      </main>

      <ContactSection />

      <Footer />
    </div>
  );
}
