"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductCategory {
  name: string;
  icon: string;
  description: string;
  animalTypes: string[];
}

interface Medicine {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  unit: string;
}

const productCategories: ProductCategory[] = [
  {
    name: "Thuốc thú nuôi trong nhà",
    icon: "🐕🐱",
    description: "Thuốc dành cho chó, mèo và các thú nuôi cảnh",
    animalTypes: ["Chó", "Mèo", "Thú cưng khác"]
  },
  {
    name: "Thuốc gia súc",
    icon: "🐄🐖",
    description: "Thuốc cho bò, heo, dê và các loại gia súc lớn",
    animalTypes: ["Bò", "Heo", "Dê", "Ngựa"]
  },
  {
    name: "Thuốc gia cầm",
    icon: "🐔🦆",
    description: "Thuốc dành cho gà, vịt và các loại gia cầm",
    animalTypes: ["Gà", "Vịt", "Ngỗng"]
  },
  {
    name: "Vật tư thú y",
    icon: "💉🩹",
    description: "Dụng cụ, thiết bị và vật tư y tế cho thú y",
    animalTypes: ["Tất cả"]
  }
];

const featuredMedicines: Medicine[] = [
  {
    id: "1",
    name: "Amoxicillin 500mg",
    category: "Kháng sinh",
    description: "Kháng sinh phổ rộng dùng trong điều trị nhiễm khuẩn",
    price: "150,000",
    unit: "Vỉ 10 viên"
  },
  {
    id: "2",
    name: "Vắc xin đậu gà",
    category: "Vắc xin",
    description: "Vắc xin phòng bệnh đậu cho gà và gia cầm",
    price: "85,000",
    unit: "Lọ 50 liều"
  },
  {
    id: "3",
    name: "Vitamin tổng hợp",
    category: "Bổ sung",
    description: "Vitamin và khoáng chất thiết yếu cho sức khỏe vật nuôi",
    price: "200,000",
    unit: "Can 1kg"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Temporary: set to true to see the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsSidebarOpen(false); // Close sidebar after navigation
    }
  };



  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'categories', 'consultation', 'blog'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Light Header */}
      <header className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-100 sticky top-0 z-50">
        {/* Top Info Bar */}
        <div className="bg-gradient-to-r from-vet-primary/5 to-vet-secondary/5 border-b border-vet-primary/10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center text-xs text-slate-600">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-vet-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-vet-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-vet-primary">Hotline 24/7</span>
                    <span className="text-slate-500">1900 XXX XXX</span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center space-x-2">
                  <div className="w-6 h-6 bg-vet-secondary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-vet-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Mon-Sat: 8:00 - 17:00</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                  <div className="w-5 h-5 bg-gradient-to-br from-vet-primary to-vet-secondary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs font-medium text-slate-700">GMP Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-slate-700">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-2 md:py-1">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo & Brand */}
            <div className="flex items-center space-x-2 md:space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-vet-primary via-vet-primary-light to-vet-secondary rounded-lg md:rounded-xl flex items-center justify-center shadow-md md:shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg md:rounded-xl"></div>
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L19 8l-8 8z"/>
                  </svg>
                </div>
                <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-5 md:h-5 bg-vet-accent rounded-full flex items-center justify-center shadow-sm border-2 border-white">
                  <span className="text-white text-xs md:text-sm font-bold">✓</span>
                </div>
              </div>
              <div className="group-hover:scale-102 transition-transform duration-300">
                <h1 className="text-lg md:text-2xl font-bold text-slate-800 leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                  VetMedPro
                </h1>
                <p className="text-xs md:text-sm text-slate-500 font-medium">Professional Veterinary Medicine</p>
                <div className="flex items-center space-x-1.5 md:space-x-2 mt-0.5 md:mt-1">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-vet-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-vet-secondary font-medium">Trusted Since 2020</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <nav className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-1.5 shadow-sm border border-slate-200/50">
                {[
                  { href: "#home", label: "Home", id: "home" },
                  { href: "#categories", label: "Products", id: "categories" },
                  { href: "#consultation", label: "Consultation", id: "consultation" },
                  { href: "#blog", label: "Blog", id: "blog" }
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-vet-primary to-vet-primary-light text-white shadow-md hover:shadow-lg"
                        : "text-slate-600 hover:text-vet-primary hover:bg-white/60 hover:shadow-sm"
                    }`}
                  >
                    {item.label}
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <button className="w-8 h-8 md:w-9 md:h-9 text-slate-500 hover:text-vet-primary transition-colors duration-200 flex items-center justify-center rounded-lg hover:bg-slate-50">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button className="bg-gradient-to-r from-vet-secondary to-vet-primary hover:from-vet-primary hover:to-vet-primary-light text-white px-3 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                <span className="hidden md:inline">Consult Now</span>
                <span className="md:hidden">Tư vấn</span>
              </button>

              {/* Modern Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleSidebar}
                  className="relative w-10 h-10 bg-gradient-to-br from-vet-primary to-vet-primary-light hover:from-vet-primary-dark hover:to-vet-primary rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-vet-primary/50"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${isSidebarOpen ? 'rotate-45' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isSidebarOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                        }
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Modern Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white transform transition-transform duration-300 ease-in-out shadow-2xl z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        {/* Sidebar Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-vet-primary/20 blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-vet-secondary/20 blur-xl"></div>
        </div>

        {/* Close Button */}
        <div className="relative z-10 flex justify-end p-6">
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Brand Section */}
        <div className="relative z-10 px-6 pb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-vet-primary to-vet-primary-light rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L19 8l-8 8z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                VetMedPro
              </h3>
              <p className="text-sm text-slate-400 font-medium">Veterinary Excellence</p>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="relative z-10 px-4 pb-8">
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">
              Navigation
            </div>

            {[
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'categories', label: 'Products', icon: '💊' },
              { id: 'consultation', label: 'Consultation', icon: '💬' },
              { id: 'blog', label: 'Blog', icon: '📰' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-vet-primary to-vet-primary-light text-white shadow-lg transform scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/20'
                    : 'bg-slate-700/50'
                }`}>
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Quick Actions */}
        <div className="relative z-10 px-6 py-6 border-t border-slate-700/50">
          <div className="flex space-x-4">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">Call Now</p>
            </div>

            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">Chat</p>
            </div>

            <div className="flex-1 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4m-4 0v4a4 4 0 004 4h8a4 4 0 004-4v-4m4-4h-4m-8 0H8m8 0h4M8 8h8" />
                </svg>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">Emergency</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span>GMP Certified</span>
            </div>
            <span>v2.0</span>
          </div>
        </div>
      </aside>

      {/* Sidebar Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vet-primary/10 via-vet-secondary/5 to-vet-accent/10"></div>
        <div className="relative bg-gradient-to-r from-vet-primary via-vet-primary-light to-vet-primary-dark text-white py-24 md:py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight drop-shadow-lg">
                Chăm Sóc Sức Khỏe<br />
                <span className="text-vet-accent drop-shadow-md">Vật Nuôi Của Bạn</span>
              </h1>
            </div>
            <div className="slide-up" style={{animationDelay: '0.3s'}}>
              <p className="text-lg md:text-2xl mb-12 text-blue-50 max-w-4xl mx-auto font-light leading-relaxed">
                Nơi uy tín cung cấp thuốc thú y chất lượng cao, dịch vụ tư vấn chuyên nghiệp
                từ đội ngũ bác sĩ thú y giàu kinh nghiệm.
              </p>
            </div>
            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-white text-vet-primary hover:bg-vet-accent px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:text-white">
                  <span className="group-hover:scale-110 inline-block transition-transform">Xem sản phẩm</span>
                </button>
                <button className="border-2 border-white/80 text-white hover:bg-white hover:text-vet-primary px-10 py-4 rounded-xl text-lg font-bold shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                  Tư vấn chuyên gia
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-20 px-4 bg-gradient-to-b from-vet-background-light to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-vet-primary/5 to-vet-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-vet-foreground mb-4">
              Danh mục sản phẩm
            </h2>
            <p className="text-lg text-vet-foreground-muted max-w-2xl mx-auto">
              Thuốc thú y chất lượng cao dành cho mọi loại vật nuôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="scale-in group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 border border-vet-background-muted hover:border-vet-primary/30 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1 + 0.2}s`,
                  background: `linear-gradient(135deg, white 0%, ${index === 0 ? '#f0f9ff' : index === 1 ? '#f0fdf4' : index === 2 ? '#fffbeb' : '#f8fafc'} 100%)`
                }}
              >
                <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-vet-foreground text-center leading-tight">
                  {category.name}
                </h3>
                <p className="text-vet-foreground-muted mb-6 text-center leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {category.animalTypes.slice(0, 3).map((animal, idx) => (
                    <span
                      key={idx}
                      className="bg-vet-secondary/10 hover:bg-vet-secondary hover:text-white text-vet-secondary px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      {animal}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-vet-primary to-vet-primary-light hover:from-vet-primary-dark hover:to-vet-primary text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Xem sản phẩm
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-vet-background-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-vet-secondary/20 to-vet-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-vet-primary/20 to-vet-secondary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-vet-foreground mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-vet-foreground-muted max-w-2xl mx-auto">
              Các sản phẩm được tin dùng nhất với chất lượng đảm bảo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMedicines.map((medicine, index) => (
              <div
                key={medicine.id}
                className="scale-in group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 hover:-translate-y-1 border border-vet-background-muted hover:border-vet-primary/30"
                style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-vet-primary via-vet-primary-light to-vet-secondary rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    <span className="text-white text-5xl group-hover:scale-110 transition-transform duration-300">💊</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-vet-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Nổi bật
                  </div>
                </div>

                <div className="mb-3">
                  <span className="bg-vet-primary/10 hover:bg-vet-primary hover:text-white text-vet-primary px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 inline-block">
                    {medicine.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-vet-foreground group-hover:text-vet-primary transition-colors leading-tight">
                  {medicine.name}
                </h3>

                <p className="text-vet-foreground-muted mb-6 leading-relaxed line-clamp-3">
                  {medicine.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-3xl font-bold text-vet-primary group-hover:text-vet-primary-dark transition-colors">
                      {medicine.price}đ
                    </span>
                    <br />
                    <span className="text-sm text-vet-foreground-muted">
                      {medicine.unit}
                    </span>
                  </div>
                  <button className="bg-gradient-to-r from-vet-secondary to-vet-secondary-light hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Tư vấn
                  </button>
                </div>

                <div className="text-center">
                  <span className="inline-flex items-center text-vet-primary font_medium text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Đảm bảo chất lượng
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 fade-in" style={{animationDelay: '1.2s'}}>
            <button className="bg-gradient-to-r from-vet-primary via-vet-primary-light to-vet-primary-dark hover:from-vet-primary-dark hover:via-vet-primary hover:to-blue-700 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Xem tất cả sản phẩm
            </button>
            <p className="mt-4 text-vet-foreground-muted text-sm">
              Hàng trăm sản phẩm chất lượng awaits bạn khám phá
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 px-4 bg-gradient-to-b from-vet-background-light to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-vet-secondary/5 to-vet-primary/5"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-vet-foreground mb-4">
              Tư vấn chuyên gia thú y
            </h2>
            <p className="text-xl text-vet-foreground-muted max-w-3xl mx-auto">
              Đội ngũ bác sĩ thú y giàu kinh nghiệm, sẵn sàng tư vấn và hỗ trợ
              bạn chăm sóc sức khỏe cho vật nuôi một cách tốt nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📞",
                title: "Hotline 24/7",
                description: "Hỗ trợ khẩn cấp và tư vấn nhanh",
                action: "1900 XXX XXX",
                gradient: "from-vet-primary to-vet-primary-light",
                hoverColor: "hover:from-blue-600 hover:to-blue-700"
              },
              {
                icon: "💬",
                title: "Tư vấn online",
                description: "Chat trực tiếp với chuyên gia",
                action: "Chat Now",
                gradient: "from-vet-secondary to-vet-secondary-light",
                hoverColor: "hover:from-green-600 hover:to-green-700"
              },
              {
                icon: "📅",
                title: "Đặt lịch khám",
                description: "Thăm khám tận nơi",
                action: "Đặt lịch",
                gradient: "from-vet-accent to-vet-accent-light",
                hoverColor: "hover:from-amber-600 hover:to-yellow-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="scale-in group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 hover:-translate-y-2 border border-vet-background-muted hover:border-vet-primary/30 text-center"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-vet-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-vet-foreground-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className={`bg-gradient-to-r ${service.gradient} ${service.hoverColor} text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  {service.action}
                </div>
              </div>
            ))}
          </div>

          <div className={`max-w-4xl mx-auto bg-gradient-to-br from-white to-vet-background-light rounded-3xl shadow-xl p-10 border border-vet-background-muted fade-in transition-all duration-500`} style={{animationDelay: '1.2s'}}>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4 text-vet-foreground">
                Đăng ký nhận tư vấn miễn phí
              </h3>
              <p className="text-vet-foreground-muted text-lg">
                Hãy để chúng tôi hỗ trợ bạn với những vấn đề về sức khỏe vật nuôi
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-4 border-2 border-vet-background-muted rounded-xl focus:ring-2 focus:ring-vet-primary focus:border-vet-primary/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-md"
                />
              </div>

              <div className="group">
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-4 border-2 border-vet-background-muted rounded-xl focus:ring-2 focus:ring-vet-primary focus:border-vet-primary/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-md"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-4 border-2 border-vet-background-muted rounded-xl focus:ring-2 focus:ring-vet-primary focus:border-vet-primary/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-md"
                />
              </div>

              <div className="group">
                <select className="w-full px-4 py-4 border-2 border-vet-background-muted rounded-xl focus:ring-2 focus:ring-vet-primary focus:border-vet-primary/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-md">
                  <option>Loại vật nuôi</option>
                  <option>🐕 Chó/Mèo</option>
                  <option>🐄 Gia súc</option>
                  <option>🐔 Gia cầm</option>
                  <option>❓ Khác</option>
                </select>
              </div>

              <div className="md:col-span-2 group">
                <textarea
                  rows={4}
                  placeholder="Mô tả vấn đề hoặc nhu cầu tư vấn của bạn..."
                  className="w-full px-4 py-4 border-2 border-vet-background-muted rounded-xl focus:ring-2 focus:ring-vet-primary focus:border-vet-primary/50 transition-all duration-300 bg-white shadow-sm hover:shadow-md focus:shadow-md resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-vet-primary via-vet-primary-light to-vet-primary-dark hover:from-vet-primary-dark hover:via-vet-primary hover:to-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Gửi yêu cầu tư vấn
                </button>
                <p className="mt-4 text-vet-foreground-muted text-sm">
                  Chúng tôi sẽ liên hệ lại trong vòng 24 giờ
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-vet-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-vet-secondary/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Blog Thú Y Nông Nghiệp
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Kiến thức chuyên sâu về bệnh thường gặp ở gia súc và gia cầm,
              hướng dẫn phòng ngừa và điều trị khoa học
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="bg-vet-primary text-white px-4 py-2 rounded-full text-sm font-medium">Tất cả bài viết</span>
              <span className="bg-slate-100 text-slate-600 hover:bg-vet-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">Gia súc</span>
              <span className="bg-slate-100 text-slate-600 hover:bg-vet-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">Gia cầm</span>
              <span className="bg-slate-100 text-slate-600 hover:bg-vet-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">Vaccine</span>
            </div>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-vet-primary/10 to-vet-secondary/10 p-8 flex items-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏥</div>
                    <div className="bg-vet-accent text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                      Bài viết nổi bật
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Gia súc</span>
                    <span className="text-slate-500 text-sm">• 8 phút đọc</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                    Bệnh Tiêu Chảy Bò: Nguyên nhân, Triệu chứng và Cách Điều trị
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Bệnh tiêu chảy ở bò là một vấn đề phổ biến trong chăn nuôi,
                    có thể gây thiệt hại lớn về kinh tế nếu không được phát hiện và điều trị kịp thời...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-vet-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        D
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Dr. Nguyễn Văn Minh</p>
                        <p className="text-xs text-slate-500">Thú y chuyên khoa</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm">15/10/2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bệnh Viêm Hoại Thử ở Heo - Phòng bệnh hiệu quả",
                excerpt: "Viêm hoại thử là bệnh phổ biến ở heo, gây thiệt hại lớn cho ngành chăn nuôi...",
                category: "Gia súc",
                categoryColor: "bg-blue-100 text-blue-700",
                readTime: "6 phút đọc",
                author: "Dr. Trần Thị Lan",
                date: "12/10/2024",
                icon: "🐷"
              },
              {
                title: "Vắc xin Newcastle cho Gia cầm - Lịch tiêm khoa học",
                excerpt: "Newcastle là bệnh nguy hiểm ở gia cầm, vaccine là biện pháp phòng ngừa hiệu quả nhất...",
                category: "Gia cầm",
                categoryColor: "bg-green-100 text-green-700",
                readTime: "5 phút đọc",
                author: "Dr. Phạm Văn Tùng",
                date: "10/10/2024",
                icon: "🐔"
              },
              {
                title: "Bệnh Lở Mox ở Bò - Nhận biết và xử lý",
                excerpt: "Bệnh lở mox có thể lây lan nhanh chóng, gây tử vong cao nếu không điều trị kịp thời...",
                category: "Gia súc",
                categoryColor: "bg-blue-100 text-blue-700",
                readTime: "7 phút đọc",
                author: "Dr. Lê Thị Mai",
                date: "08/10/2024",
                icon: "🐄"
              },
              {
                title: "Bệnh Đậu gà - Vaccine và kiểm soát hiệu quả",
                excerpt: "Bệnh đậu gà gây thiệt hại nghiêm trọng cho đàn gà, vaccine là giải pháp tối ưu...",
                category: "Gia cầm",
                categoryColor: "bg-green-100 text-green-700",
                readTime: "4 phút đọc",
                author: "Dr. Hoàng Văn Đức",
                date: "05/10/2024",
                icon: "🐔"
              },
              {
                title: "Bệnh Gumboro ở gà - Triệu chứng và điều trị",
                excerpt: "Gumboro (bệnh sưng thận truyền nhiễm) là bệnh thường gặp ở gà con...",
                category: "Gia cầm",
                categoryColor: "bg-green-100 text-green-700",
                readTime: "6 phút đọc",
                author: "Dr. Nguyễn Thị Huệ",
                date: "03/10/2024",
                icon: "🐔"
              },
              {
                title: "Bệnh Sốt Hoại Máu Gia súc - Xử trí khẩn cấp",
                excerpt: "Bệnh sốt hoại máu là bệnh truyền nhiễm cấp tính, có tỷ lệ tử vong cao...",
                category: "Gia súc",
                categoryColor: "bg-blue-100 text-blue-700",
                readTime: "8 phút đọc",
                author: "Dr. Vũ Minh Tâm",
                date: "01/10/2024",
                icon: "🐄"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 hover:-translate-y-1 border border-slate-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${article.categoryColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {article.category}
                  </span>
                  <span className="text-slate-500 text-sm">{article.readTime}</span>
                </div>

                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {article.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-vet-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-vet-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{article.author}</p>
                      <p className="text-xs text-slate-500">Thú y chuyên khoa</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-sm">{article.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-vet-primary to-vet-primary-light hover:from-vet-primary-dark hover:to-vet-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Xem tất cả bài viết
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-vet-primary/5 to-vet-secondary/5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-vet-accent/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-vet-primary/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto fade-in" style={{animationDelay: '1.5s'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vet-primary to-vet-primary-light rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">VetMedPro</h3>
                  <p className="text-vet-primary text-sm font-medium">Thuốc Thú Y Chuyên Nghiệp</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
                Nơi uy tín cung cấp thuốc thú y và dịch vụ tư vấn chuyên nghiệp
                cho mọi nhu cầu chăm sóc sức khỏe vật nuôi.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-vet-primary transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-xl">📞</span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-vet-secondary transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-xl">💬</span>
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-vet-accent transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-xl">🏥</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-vet-accent">Liên kết nhanh</h4>
              <ul className="space-y-3">
                {[
                  { href: "#categories", label: "Danh mục sản phẩm", icon: "📋" },
                  { href: "#consultation", label: "Tư vấn chuyên gia", icon: "👨‍⚕️" },
                  { href: "#", label: "Về chúng tôi", icon: "🏢" },
                  { href: "#", label: "Chính sách", icon: "📖" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-vet-accent transition-all duration-300 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-vet-accent">Liên hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-vet-primary">📞</span>
                  <span className="font-medium">1900 XXX XXX</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-vet-primary">📧</span>
                  <span>info@vetmedpro.vn</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-vet-primary mt-1">📍</span>
                  <span className="leading-relaxed">123 Đường ABC<br />Quận XYZ, TP.HCM</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-vet-primary">🕒</span>
                  <span>8:00 - 17:00 (Thứ 2-7)</span>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-vet-accent">Kết nối</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Cập nhật thông tin mới nhất về thuốc thú y và dịch vụ chăm sóc vật nuôi.
              </p>

              <div className="mb-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <span className="text-lg">📘</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <span className="text-lg">🐦</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <span className="text-lg">📷</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-vet-primary/20 to-vet-secondary/20 rounded-xl border border-white/10">
                <p className="text-sm text-center text-vet-accent font-medium">
                  💡 Tư vấn miễn phí 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2024 VetMedPro. Tất cả quyền được bảo lưu. | Thiết kế dành cho sức khỏe vật nuôi
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-xs text-gray-500">Bảo mật thông tin</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">Chứng nhận GMP</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-vet-primary text-sm font-medium">Phục vụ tận tâm 🌟</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
