import { ArrowRight } from "lucide-react";

export default function DownloadPortfolio () {
  return (
     <div className="text-center mt-12 mb-12">
        <a href="../docs/income_electrix_brochure.pdf" download className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-red-200 text-red-700 font-semibold rounded-xl hover:bg-red-50 transition-all">
          Download Brochure <ArrowRight size={20} />
        </a>
      </div>
  )
} 