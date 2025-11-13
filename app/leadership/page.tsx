import ContactSection from "@/components/Contact";
import DownloadPortfolio from "@/components/DownloadPortfolio";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

// Board of Directors Array
const boardOfDirectors = [
	{
		name: "General Alexander O. Ogomudia (Rtd.)",
		role: "Chairman",
		background:
			"Retired Nigerian Military officer, former Chief of Defence Staff and Chief of Army Staff, extensive military leadership experience with Signal Officers training and engineering background",
		img: "/images/board/ogomudia.jpg",
	},
	{
		name: "Barr. Ovie Edward Ukiri",
		role: "Board Member",
		background:
			"Senior lawyer with over 35 years experience, Fellow of Chartered Institute of Taxation, specializes in corporate commercial law, oil and gas, taxation, and regulatory compliance",
		img: "/images/board/Ukirie.jpeg",
	},
	{
		name: "Chief Clement Ofuani",
		role: "Board Member",
		background:
			"Chartered accountant with over 27 years experience in banking, financial consulting, auditing, and public policy. Former Commissioner for Economic Planning and Economic Adviser to Governor",
		img: "/images/board/Ofuani.jpg",
	},
	{
		name: "HE Ambassador Uche Ajulu-Okeke",
		role: "Board Member",
		background:
			"Veteran diplomat with over thirty years in Nigerian Foreign Service, first Female Ambassador Consul-General to South Africa, CEO/Lead Advisor of DipConsult diplomatic advisory service",
		img: "/images/board/He.jpeg",
	},
	{
		name: "Engr. (Dr.) Matthew O. Edevbie",
		role: "Group Managing Director",
		background:
			"Engineering leader with over 38 years experience, Chairman of multiple companies including Kevtrics Nigeria Limited, Harvard Business School alumnus, Fellow of multiple professional institutes",
		img: "/images/board/M_Edevbie.jpg",
	},
	{
		name: "Alhaji Ibrahim Sani Bello",
		role: "Strategic Partner",
		background:
			"Chairman of Sanbellododena Engineering Nigeria Limited, over 25 years corporate experience, holds Bachelor's in Economics and Master's in Project Management from London",
		img: "/images/board/sani_bello.png",
	},
];

// Management Team Array
export const managementTeam = [
	{
		name: "Engr. (Dr.) Emmanuel Audu-Ohwavborua (FNSE, PMP)",
		role: "Executive Director, Technical & Operations",
		background:
			"Over 30 years experience in engineering design, power plant engineering, and project management. Former Acting Managing Director of NDDC, certified PMP and Fellow of NSE",
		img: "/images/board/ohwavbua.png",
	},
	{
		name: "Emmanuel E. Okotete",
		role: "Group Executive Director, Commercial and Business Development",
		background:
			"Over 40 years experience, former Independent Non-Executive Director at PHED, former Special Assistant for Strategy at NDDC, banking experience at UBA and Arthur Andersen",
		img: "/images/board/okotete.png",
	},
	{
		name: "Chukwudi Essell",
		role: "Group Chief Financial Officer",
		background:
			"Over 20 years in finance, former PricewaterhouseCoopers and Diamond Bank professional, Fellow of ICAN and CITN, Civil Engineering background with first overall merit award from ICAN",
		img: "/images/board/essell.png",
	},
	{
		name: "Jean-Pierre Breton",
		role: "Chief Compliance Officer",
		background:
			"Over 40 years experience in telecommunications and executive roles across France, Senegal, Argentina, Mexico, Indonesia, Vietnam. Former CFO at Plastic Omnium Mexico and Areva T&D Turkey",
		img: "/images/board/breton.png",
	},
	{
		name: "Adegbite Olugbenga",
		role: "Lead Technical Officer",
		background:
			"Senior Project Manager with mechanical engineering background, over 25 years experience in EPC contracting projects including thermal gas turbine power plants and HV/MV/LV substation projects",
		img: "/images/board/olugbenga.png",
	},
	{
		name: "Gloria Alero Eigbobo (Mrs.)",
		role: "General Manager Legal/Human Resources",
		background:
			"Over 28 years experience as lawyer and procurement/contract management specialist, 15 years at Shell Petroleum Development Company, 10 years at Rockson Engineering Limited",
		img: "/images/board/eigbogbo.png",
	},
	{
		name: "Engr. (Dr) Sarah E. Kenu",
		role: "General Manager Renewable Energy & Special Projects",
		background:
			"Over 19 years in power sector, Ph.D. in Renewable Energy from University of Port Harcourt, member of NSE and COREN, expertise in project management and renewable energy",
		img: "/images/board/kenu.png",
	},
	{
		name: "Engr. (Dr) Nwachukwu Iloanwusi",
		role: "General Manager Utility Support Services",
		background:
			"Fellow of Nigerian Society of Engineers, extensive experience in electrical engineering, switchgear construction, plant automation, and electricity network operations across multiple companies",
		img: "/images/board/iloanwusi.png",
	},
	{
		name: "Eric Peekate",
		role: "Head Engineering",
		background:
			"Over 17 years experience in basic design, detailed engineering, project management, and commissioning across power generation, transmission, distribution, and instrumentation systems",
		img: "/images/board/peekate.png",
	},
];

export default function LeadershipPage() {
	return (
		<div className="min-h-screen bg-white text-gray-900 antialiased">
			{/* Enhanced Navigation */}
			<Header />

			{/* Hero Section */}
			<Hero
				title="Board of Directors"
				description="Experienced leadership team with over 500 years of collective experience in the power sector"
				tag="Leadership"
				bgImage="/images/others/power_technologies.jpg"
			/>

			{/* Leadership Section */}
			<section
				id="leadership"
				className="py-32 bg-gradient-to-br from-slate-50 to-red-50"
			>
				<div className="max-w-7xl mx-auto px-6">
					{/* <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
            <p className="text-lg text-gray-600">
              Experienced leadership team with over 500 years of collective experience in the power sector
            </p>
          </div> */}

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{boardOfDirectors.map((leader, index) => (
							<div
								key={index}
								className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
							>
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
								<div className="text-red-600 font-medium mb-3">
									{leader.role}
								</div>
								<p className="text-sm text-gray-600">
									{leader.background}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				id="management"
				className="py-32 bg-gradient-to-br from-slate-50 to-red-50"
			>
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Management Team</h2>
						<p className="text-lg text-gray-600">Our management team.</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{managementTeam.map((leader, index) => (
							<div
								key={index}
								className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
							>
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
								<div className="text-red-600 font-medium mb-3">
									{leader.role}
								</div>
								<p className="text-sm text-gray-600">
									{leader.background}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<ContactSection />

			<DownloadPortfolio />

			<Footer />
		</div>
	);
}