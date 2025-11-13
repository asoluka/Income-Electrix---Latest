export default function Footer () {
  return (<footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  IEG
                </div> */}
                <img src="/images/logos/IEG.jpg" alt="logo" width={'45px'} height={'45px'} />
                <div className="text-lg font-bold">Income Electrix Group</div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Africa's premier electrical engineering solutions provider since 1992.
              </p>
              <div className="text-sm text-gray-400">
                30+ years • 3,000+ employees • 18.7M+ people served
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Power Generation EPC</div>
                <div>Transmission & Distribution</div>
                <div>Utility Management</div>
                <div>Manufacturing Solutions</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#about" className="hover:text-white">About Us</a> <br /><br />
                <a href="#leadership" className="hover:text-white">Leadership</a> <br /><br />
                <a href="#subsidiaries" className="hover:text-white">Group Companies</a> <br /><br />
                <a href="#csr" className="hover:text-white">CSR Initiatives</a> <br /><br />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+234 705 599 0728</div>
                <div>info@incomeelectrix.com</div>
                <div>Port Harcourt, Nigeria</div>
                <div>Lagos • Abuja • Warri</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Income Electrix Group. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Engineering solutions across West and Central Africa since 1992
            </div>
          </div>
        </div>
      </footer>)
}