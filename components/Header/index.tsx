"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
              IEG
            </div> */}
            <img src="/images/logos/IEG.jpg" alt="logo" width={'65px'} height={'65px'} />
            <div>
              <div className="text-lg font-bold text-gray-900">Income Electrix Group</div>
              <div className="text-xs text-gray-600 font-medium"><i>...Good to Life</i></div>
              {/* Africa's Electrical Engineering Solutions Leader */}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="/about" className="hover:text-red-600 transition-colors">About</a>
          <a href="/services" className="hover:text-red-600 transition-colors">Services</a>
          <a href="/projects" className="hover:text-red-600 transition-colors">Projects</a>
          <a href="/group-companies" className="hover:text-red-600 transition-colors">Group Companies</a>
          <a href="/leadership" className="hover:text-red-600 transition-colors">Leadership</a>
          <a href="#contact" className="ml-4 inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all">
            Contact Us
          </a>
        </nav>

        <button 
          className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <a href="/about" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/projects" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="/group-companies" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Group Companies</a>
            <a href="/leadership" className="block py-2 text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Leadership</a>
            <a href="#contact" className="block py-2 px-4 bg-red-600 text-white rounded-lg" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </header>
  )
}