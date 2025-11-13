import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';

const projects = [
	{
		slug: '252mw-omoku',
		title: '252MW Gas Power Plant — Omoku',
		tag: 'In Progress',
		value: '$27.8M',
		client: 'Niger Delta Power Holding Company',
		category: 'generation',
		description: 'Simple cycle gas turbine generators with balance of plant',
		img: '/images/projects/252MW_Gas_Plant_Omoku.jpg',
		statusDetails:
			'Completion of Engineering, Procurement, Installation and Commissioning of 252.2MW simple cycle Gas Turbine Generators (Lot 7) at Omoku — Construction ongoing.',
		location: 'Omoku, Rivers State, Nigeria',
		projectType: 'Thermal Power Generation (Gas)',
		scope: [
			'Engineering design and planning',
			'Procurement of gas turbine generators',
			'Installation of 252.2MW simple cycle system',
			'Balance of Plant (BoP) works',
			'Commissioning services',
		],
		technicalDetails: {
			capacity: '252.2 MW',
			configuration: 'Simple Cycle Gas Turbine',
			lotNumber: 'Lot 7',
			fuelType: 'Natural Gas',
		},
	},

	{
		slug: '20mw-escravos',
		title: '20MW Gas IPP — Escravos',
		tag: 'Completed',
		value: '$51M',
		client: 'NNPC',
		category: 'generation',
		description: 'Full EPC of gas-fired power plant with operations',
		img: '/images/projects/Escravos_GasPlant_1.jpg',
		statusDetails:
			'Engineering, Procurement and Construction of 20MW gas-fired Power Plant in Escravos environs — listed as 100% completed for NNPC.',
		location: 'Escravos Environs, Delta State, Nigeria',
		projectType: 'Independent Power Production (IPP) - Gas',
		scope: [
			'Complete Engineering, Procurement and Construction (EPC)',
			'Gas-fired power plant installation',
			'Pre-commissioning tests on 2 x 15MVA transformers (2025)',
			'Pre-commissioning tests on all MV panels (2025)',
			'Plant commissioning and handover',
		],
		technicalDetails: {
			capacity: '20 MW',
			fuelType: 'Natural Gas',
			transformers: '2 x 15MVA, 11/33kV',
			status: '100% Completed',
		},
		additionalWork: [
			'Repair of 3MVA Distribution Transformer for NNPC, Escravos (2025)',
			'All medium voltage panel testing and commissioning',
		],
	},

	{
		slug: '132kv-ikot-abasi-eket',
		title: '132kV Ikot-Abasi to Eket Line',
		tag: 'Commissioned',
		value: '$39M',
		client: 'Ibom Power',
		category: 'transmission',
		description: 'Double-circuit transmission line across Akwa Ibom',
		img: '/images/projects/ikot-abasi.jpg',
		statusDetails:
			'EPC for 132kV double-circuit line from Ikot-Abasi to Eket — Commissioned (Ibom Power).',
		location: 'Ikot-Abasi to Eket, Akwa Ibom State, Nigeria',
		projectType: 'Transmission Network Infrastructure',
		scope: [
			'Engineering design for 132kV double-circuit transmission line',
			'Procurement of transmission line materials and equipment',
			'Construction and installation of transmission infrastructure',
			'Testing and commissioning',
			'Handover to client',
		],
		technicalDetails: {
			voltage: '132 kV',
			configuration: 'Double Circuit',
			client: 'Ibom Power Company',
			status: 'Commissioned',
		},
	},

	{
		slug: '330-132-33kV-ikot-ekpene',
		title: '330/132/33kV Substation — Ikot Ekpene',
		tag: '83% Complete',
		value: '$46M',
		client: 'NDDC',
		category: 'transmission',
		description: 'Major transmission infrastructure with associated lines',
		img: '/images/projects/transmission_ikot.jpg',
		statusDetails:
			'Construction of 330/132/33KV transmission substation at Ikot Ekpene & associated transmission lines.', //  — listed at $46M and ~83% completed
		location: 'Ikot Ekpene, Akwa Ibom State, Nigeria',
		projectType: 'Transmission Substation & Lines',
		scope: [
			'Construction of 330/132/33kV multi-voltage transmission substation',
			'Associated transmission line infrastructure',
			'Substation equipment installation',
			'Protection and control systems',
			'Testing and pre-commissioning activities',
		],
		technicalDetails: {
			voltages: '330kV / 132kV / 33kV',
			progress: '83% Complete',
			client: 'Niger Delta Development Commission (NDDC)',
		},
		relatedProjects: [
			'Extension of 40km 132kV Transmission line from Ikot Abasi to Ekparakwa',
			'Installation of 2x30MVA transmission substation at Ekparakwa',
		],
	},

	{
		slug: 'nipp-distribution-lot-d',
		title: 'NIPP Distribution Lot D-EPC-AB2/2',
		tag: 'Commissioned',
		value: '$11.14M',
		client: 'NIPP',
		category: 'distribution',
		description: '33/11kV substations and distribution networks',
		img: '/images/others/distribution_networks.jpg',
		statusDetails:
			'Engineering, Procurement and Construction of Distribution Projects under NIPP Distribution Project', //  Lot D - EPC-AB2/2 — listed at $11.14M (Commissioned).
		location: 'Abuja and Niger State, Nigeria',
		projectType: 'Distribution Network Infrastructure',
		scope: [
			'33/11kV Injection Substations',
			'11/0.415kV Distribution Substations',
			'33kV distribution lines',
			'11kV distribution lines',
			'0.415kV low voltage lines',
			'SCADA system integration',
		],
		technicalDetails: {
			substationTypes: '33/11kV Injection & 11/0.415kV Distribution',
			voltages: '33kV, 11kV, 0.415kV',
			includesScada: true,
			status: 'Commissioned',
		},
		relatedNIPPProjects: [
			'NIPP Distribution Lot D EPC-IB3-20 (Oyo and Osun State)', // - $7.54M (Commissioned)',
			'NIPP Distribution Lot D-EPC-IB 4/21 (Ogun State)', // - $10.62M (Commissioned)',
		],
	},

	{
		slug: 'ubth-solar-street-lighting',
		title: 'Solar Street Lighting — UBTH',
		tag: 'Completed',
		value: 'N/A',
		client: 'UBTH Benin',
		category: 'renewable',
		description: 'All-in-one solar street lighting installation',
		img: '/images/projects/ubth.png',
		statusDetails:
			'Design and installation of all-in-one solar street lighting at University of Benin Teaching Hospital (UBTH) — listed as completed under Skyview/Kevtrics projects.',
		location: 'University of Benin Teaching Hospital, Benin City, Edo State',
		projectType: 'Renewable Energy - Solar Street Lighting',
		scope: [
			'Site assessment and lighting design',
			'Procurement of all-in-one solar street lighting systems',
			'Installation of solar lighting infrastructure',
			'System testing and commissioning',
			'Training for maintenance personnel',
		],
		technicalDetails: {
			technology: 'All-in-One Solar Street Lighting',
			application: 'Healthcare Facility Infrastructure',
			subsidiary: 'Skyview Power Technologies Limited',
		},
		relatedSolarProjects: [
			'Solar street lighting in Ogriagbeme, Bomadi LGA (Completed)',
			'Solar street lighting in Ogbeinma, Bomadi LGA (Completed)',
			'EPC of Solar Street Light, Agiere-Weppa Town, Agenebode, Edo State (Completed)',
			'EPC of Solar Street Light, Akugbene Town, Delta State (Completed)',
		],
	},

	{
		slug: '36-5mw-sierra-leone',
		title: '36.5MW IPP — Sierra Leone',
		tag: 'Completed',
		value: '$63M',
		client: 'Government of Sierra Leone',
		category: 'generation',
		description: 'Emergency power project including O&M services',
		img: '/images/projects/sierra_leone.jpg',
		statusDetails:
			'Emergency Power Project Freetown — 36.5MW IPP (FEED, Procurement, Construction, Operations & Maintenance). Listed as Completed but Discontinued; location: Blackhall Road, Freetown', // value listed as $63M.
		location: 'Blackhall Road, Freetown, Sierra Leone',
		projectType: 'Independent Power Production (IPP) - Emergency Power',
		scope: [
			'Front-End Engineering Design (FEED)',
			'Procurement of power generation equipment',
			'Construction and installation',
			'Commissioning services',
			'Operations and Maintenance (O&M)',
			'Training of local personnel',
		],
		technicalDetails: {
			capacity: '36.5 MW',
			projectPhase: 'Phase 1',
			projectType: 'Emergency Power Project',
			status: 'Completed but Discontinued',
		},
		phases: [
			{
				phase: 'Phase 1',
				description: '36.5 MW Power Plant installation and commissioning',
				images: 'Control room and facility photographs available',
			},
		],
		internationalExperience:
			'Demonstrates IEG capability to execute large-scale international projects across West and Central Africa, with experience in difficult terrains including Sierra Leone and Liberia.',
	},

	{
		slug: 'warri-sapele-street-lighting',
		title: 'Warri-Sapele Street Lighting',
		tag: 'Completed',
		value: '$8.25M',
		client: 'Delta State Govt',
		category: 'distribution',
		description: '14km high-efficiency sodium street lighting',
		img: '/images/projects/warri-sapele.png',
		statusDetails:
			'Installation of 10m High Tubular Column Mounted sodium Street Lights on Warri / Sapele roads (about 14km), Completed (Delta State Ministry of Energy).', //— listed at $8.25M
		location: 'Warri to Sapele Road (Texaco filling station to NPA bypass), Delta State',
		projectType: 'Street Lighting Infrastructure',
		scope: [
			'Design and engineering of street lighting system',
			'Procurement of 10m high tubular galvanized columns',
			'Installation of sodium street lights',
			'Electrical infrastructure and connections',
			'Approximately 14km of coverage',
			'Testing and commissioning',
		],
		technicalDetails: {
			lightingType: 'Sodium Street Lights',
			columnHeight: '10 meters',
			columnType: 'Tubular Galvanized Column Mounted',
			coverage: 'Approximately 14 km',
			route: 'Texaco filling station to NPA bypass',
		},
		relatedStreetLightingProjects: [
			'NPA express Warri (12m High Tubular)', // - $4.44M (Completed)',
			'Sapele Phase I (10m High, 8.5km)', // - $3.98M (Completed)',
			'Ughelli (10m High, 7.5km)', // - $2.2M (Completed)',
			'Several other projects across Delta State', // - Over $100M total',
		],
		portfolioNote:
			'Part of extensive Delta State street lighting portfolio managed by IEG, totaling over $100M in completed infrastructure projects across various communities.',
	},
];

export async function generateStaticParams() {
	return projects.map((project) => ({ id: project.slug }));
}

export default function ProjectPage({ params }: any) {
	const { id } = params;
	const project = projects.find((p) => p.slug === id);

	if (!project) {
		return (
			<main className="min-h-screen bg-gray-50">
				<div className="max-w-4xl mx-auto px-6 py-12">
					<div className="bg-white rounded-lg shadow-sm p-8 text-center">
						<h1 className="text-3xl font-bold text-gray-900 mb-4">
							Project Not Found
						</h1>
						<p className="text-gray-600 mb-6">
							The requested project could not be found.
						</p>
						<Link
							href="/projects"
							className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
						>
							← Back to Projects
						</Link>
					</div>
				</div>
			</main>
		);
	}

	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case 'completed':
				return 'bg-green-100 text-green-800';
			case 'commissioned':
				return 'bg-red-100 text-red-800';
			case 'in progress':
				return 'bg-orange-100 text-orange-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	const getCategoryColor = (category: string) => {
		switch (category.toLowerCase()) {
			case 'generation':
				return 'bg-red-100 text-red-800';
			case 'transmission':
				return 'bg-purple-100 text-purple-800';
			case 'distribution':
				return 'bg-red-100 text-red-800';
			case 'renewable':
				return 'bg-green-100 text-green-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	return (
		<div className="min-h-screen bg-white text-gray-900 antialiased">
			{/* Enhanced Navigation */}
			<Header />

			<main className="min-h-screen bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 py-8">
					{/* Navigation */}
					<div className="mb-8">
						<Link
							href="/projects"
							className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors"
						>
							← Back to Projects
						</Link>
					</div>

					{/* Main Content */}
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						{/* Main Content Column */}
						<div className="lg:col-span-3 space-y-6">
							{/* Hero Image */}
							<div className="bg-white rounded-lg shadow-sm overflow-hidden">
								<img
									src={project.img}
									alt={project.title}
									className="w-full h-80 object-cover"
								/>
							</div>

							{/* Project Header */}
							<div className="bg-white rounded-lg shadow-sm p-8">
								<div className="flex flex-wrap items-center gap-3 mb-4">
									<span
										className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
											project.tag
										)}`}
									>
										{project.tag}
									</span>
									<span
										className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
											project.category
										)}`}
									>
										{project.category.charAt(0).toUpperCase() +
											project.category.slice(1)}
									</span>
									{/*<span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
										{project.value}
									</span>*/}
								</div>

								<h1 className="text-4xl font-bold text-gray-900 mb-3">
									{project.title}
								</h1>
								<p className="text-xl text-gray-600 mb-4">{project.client}</p>
								<p className="text-gray-700 text-lg leading-relaxed">
									{project.description}
								</p>
							</div>

							{/* Project Details */}
							<div className="bg-white rounded-lg shadow-sm p-8">
								<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
									Project Details
								</h2>
								<div className="prose max-w-none">
									<p className="text-gray-700 leading-relaxed mb-4">
										{project.statusDetails}
									</p>

									{project.location && (
										<div className="mb-6">
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												Location
											</h3>
											<p className="text-gray-700">{project.location}</p>
										</div>
									)}

									{project.projectType && (
										<div className="mb-6">
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												Project Type
											</h3>
											<p className="text-gray-700">{project.projectType}</p>
										</div>
									)}
								</div>
							</div>

							{/* Project Scope */}
							{project.scope && (
								<div className="bg-white rounded-lg shadow-sm p-8">
									<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
										Project Scope
									</h2>
									<ul className="space-y-3">
										{project.scope.map((item, index) => (
											<li key={index} className="flex items-start gap-3">
												<span className="text-red-600 mt-1">•</span>
												<span className="text-gray-700">{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Technical Details */}
							{project.technicalDetails && (
								<div className="bg-white rounded-lg shadow-sm p-8">
									<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
										Technical Specifications
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{Object.entries(project.technicalDetails).map(
											([key, value]) => (
												<div key={key} className="border-l-4 border-red-600 pl-4">
													<div className="text-sm font-medium text-gray-500 mb-1">
														{key
															.replace(/([A-Z])/g, ' $1')
															.replace(/^./, (str) => str.toUpperCase())}
													</div>
													<div className="text-gray-900 font-medium">
														{typeof value === 'boolean'
															? value
																? 'Yes'
																: 'No'
															: value}
													</div>
												</div>
											)
										)}
									</div>
								</div>
							)}

							{/* Additional Work */}
							{project.additionalWork && (
								<div className="bg-white rounded-lg shadow-sm p-8">
									<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
										Additional Work Completed
									</h2>
									<ul className="space-y-3">
										{project.additionalWork.map((item, index) => (
											<li key={index} className="flex items-start gap-3">
												<span className="text-green-600 mt-1">✓</span>
												<span className="text-gray-700">{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* Project Phases */}
							{project.phases && (
								<div className="bg-white rounded-lg shadow-sm p-8">
									<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
										Project Phases
									</h2>
									<div className="space-y-4">
										{project.phases.map((phase, index) => (
											<div
												key={index}
												className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-600"
											>
												<h3 className="font-semibold text-gray-900 mb-2">
													{phase.phase}
												</h3>
												<p className="text-gray-700">{phase.description}</p>
												{phase.images && (
													<p className="text-sm text-gray-500 mt-2">
														{phase.images}
													</p>
												)}
											</div>
										))}
									</div>
								</div>
							)}

							{/* Related Projects */}
							{(project.relatedProjects ||
								project.relatedNIPPProjects ||
								project.relatedSolarProjects ||
								project.relatedStreetLightingProjects) && (
								<div className="bg-white rounded-lg shadow-sm p-8">
									<h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-3">
										Related Projects
									</h2>
									<ul className="space-y-3">
										{(project.relatedProjects ||
											project.relatedNIPPProjects ||
											project.relatedSolarProjects ||
											project.relatedStreetLightingProjects
										)?.map((item, index) => (
											<li
												key={index}
												className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg"
											>
												<span className="text-red-600 mt-1">→</span>
												<span className="text-gray-700">{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{/* International Experience / Portfolio Note */}
							{(project.internationalExperience || project.portfolioNote) && (
								<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-sm p-8 border-l-4 border-red-600">
									<h2 className="text-2xl font-semibold text-gray-900 mb-4">
										{project.internationalExperience
											? 'International Experience'
											: 'Portfolio Highlight'}
									</h2>
									<p className="text-gray-700 leading-relaxed">
										{project.internationalExperience || project.portfolioNote}
									</p>
								</div>
							)}
						</div>

						{/* Sidebar */}
						<div className="lg:col-span-1">
							<div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
								<h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
									Project Overview
								</h3>
								<div className="space-y-4">
									<div>
										<div className="text-sm font-medium text-gray-500 mb-1">
											Client
										</div>
										<div className="text-gray-900">{project.client}</div>
									</div>
									<div>
										<div className="text-sm font-medium text-gray-500 mb-1">
											Category
										</div>
										<div className="flex">
											<span
												className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
													project.category
												)}`}
											>
												{project.category.charAt(0).toUpperCase() +
													project.category.slice(1)}
											</span>
										</div>
									</div>
									<div>
										<div className="text-sm font-medium text-gray-500 mb-1">
											Project Value
										</div>
										{/* <div className="text-gray-900 font-semibold">
											{project.value}
										</div> */}
									</div>
									<div>
										<div className="text-sm font-medium text-gray-500 mb-1">
											Status
										</div>
										<div className="flex">
											<span
												className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
													project.tag
												)}`}
											>
												{project.tag}
											</span>
										</div>
									</div>
									{project.location && (
										<div>
											<div className="text-sm font-medium text-gray-500 mb-1">
												Location
											</div>
											<div className="text-gray-900 text-sm">
												{project.location}
											</div>
										</div>
									)}
								</div>

								{/* Related Projects CTA */}
								<div className="mt-8 pt-6 border-t border-gray-200">
									<Link
										href="/projects"
										className="w-full bg-red-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors block"
									>
										View All Projects
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<ContactSection />

			<Footer />
		</div>
	);
}