"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Map as MapIcon,
  MessageCircle,
  Music2,
  ChevronRight,
} from "lucide-react";

// --- Custom Icons ---
const InstagramIcon = ({
  size = 24,
  className = "",
}: {
  size?: number | string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import Image from "next/image";
import fotoAboutUs from "@/assets/about-us.webp";
import Logo from "@/public/logo.svg";

// Foto pengurus
import Doni from "@/assets/pengurus/doni.webp";
import Alan from "@/assets/pengurus/alan.webp";
import Anin from "@/assets/pengurus/anindita.webp";
import Via from "@/assets/pengurus/via.webp";
import Kiki from "@/assets/pengurus/kiki.webp";
import Riski from "@/assets/pengurus/riski.webp";
import Alin from "@/assets/pengurus/alin.webp";
import Ahmad from "@/assets/pengurus/ahmad.webp";
import Edwin from "@/assets/pengurus/edwin.webp";

// Foto Event Galery
import LombaMancing from "@/assets/event/lomba-mancing.webp";
import JalanSehat from "@/assets/event/jalan-sehat.webp";
import LombaAnak from "@/assets/event/lomba-anak.webp";
import LombaIbu from "@/assets/event/lomba-ibuibu.webp";
import BerbagiTakjil from "@/assets/event/berbagi-takjil.webp";
import Nyinom from "@/assets/event/nyinom.webp";

// --- Mock Data ---
const NAV_LINKS = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Structure", href: "structure" },
  { name: "Events", href: "events" },
  { name: "Contact", href: "contact" },
];

const COMMITTEE = [
  {
    id: 1,
    name: "Doni Kurniawan",
    position: "Ketua",
    ig: "doni_donee",
    photo: Doni,
  },
  {
    id: 2,
    name: "Rahlan Yudhi",
    position: "Wakil Ketua",
    ig: "rahlannyudhi_",
    photo: Alan,
  },
  {
    id: 3,
    name: "Anindita Wulan",
    position: "Sekertaris 1",
    ig: "aninn.dtaa",
    photo: Anin,
  },
  {
    id: 4,
    name: "Nandya Oktaviana Romadhoni",
    position: "Sekertaris 2",
    ig: "nandyaoktav",
    photo: Via,
  },
  {
    id: 5,
    name: "Rizqi Nurhidayah",
    position: "Bendahara 1",
    ig: "rizqinrh_",
    photo: Kiki,
  },
  {
    id: 6,
    name: "Rizki Fitria",
    position: "Bendahara 2",
    ig: "riskifitriaa",
    photo: Riski,
  },
  {
    id: 7,
    name: "Alinita Maulia Lova",
    position: "Hubungan Masyarakat",
    ig: "alntmlv_",
    photo: Alin,
  },
  {
    id: 8,
    name: "Ahmad Tohari",
    position: "Publikasi Dekorasi dan Dokumentasi",
    ig: "ahmdd_dto",
    photo: Ahmad,
  },
  {
    id: 9,
    name: "Muhammad Edwin Nurrohman",
    position: "Sarana dan Prasarana",
    ig: "edwin_nurrohman07",
    photo: Edwin,
  },
];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "LOMBA ANAK-ANAK",
    date: "2 Agustus 2026",
    time: "08.00 – selesai",
    location: "Masjid Bandelan",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    rundown: [
      "08:00 - Lomba Makan Kerupuk",
      "09:00 - Lomba Pecah Air",
      "10:00 - Lomba Memasukkan Pensil dalam Botol",
      "11:00 - Lomba Giring Ceting",
    ],
  },
  {
    id: 2,
    title: "Tirakatan",
    date: "16 Agustus 2026",
    time: "19.30 – 23.00",
    location: "Halaman rumah Ibu Sunarti",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    rundown: [
      "19:30 - Pembukaan",
      "19:40 - Indonesia Raya",
      "19:45 - Sambutan",
      "19:50 - Penampilan tari",
      "20:00 - Doa",
      "20:03 - Tumpengan",
      "20:15 - Penampilan tari",
      "20:25 - Makan-makan",
      "20:50 - Pengumuman lomba anak-anak",
      "21:15 - Games",
      "22:40 - Pengumuman lomba bapak-ibu",
      "22:50 - Penutup",
    ],
  },
];

const PAST_EVENTS = [
  {
    id: 1,
    title: "Lomba Mancing",
    desc: "Salah satu acara besar dalam perayaan 17 agustusan.",
    image: LombaMancing,
  },
  {
    id: 2,
    title: "Jalan Sehat",
    desc: "Acara 17 an yang diikuti satu dusun dari anak anak hingga orang tua",
    image: JalanSehat,
  },
  {
    id: 3,
    title: "Lomba Anak",
    desc: "Acara 17 an untuk anak anak yang terdiri dari berbagai jenis lomba.",
    image: LombaAnak,
  },
  {
    id: 4,
    title: "Lomba Ibu Ibu",
    desc: "Acara 17 an untuk ibu ibu yang terdiri dari berbagai jenis lomba.",
    image: LombaIbu,
  },
  {
    id: 5,
    title: "Berbagi Takjil",
    desc: "Kegiatan berbagi takjil di jalan pada Ramadhan 1446 Hijriah.",
    image: BerbagiTakjil,
  },
  {
    id: 6,
    title: "Nyinom",
    desc: "Kegiatan Nyinom sewaktu terdapat hajatan pernikahan dusun.",
    image: Nyinom,
  },
];

export default function LandingPage() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // --- Fix: Apply Dark Mode to the HTML Document ---
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Handle Scroll Spy for Navbar active state
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href);
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth">
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans transition-colors duration-300">
        {/* --- Navbar --- */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo & Brand */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <Image
                  alt="Logo Kertaaji"
                  src={Logo}
                  className="w-10 h-10 rounded-xl shadow-lg shadow-blue-600/20"
                />
                <span className="font-bold text-xl tracking-tight hidden sm:block">
                  Kertaaji
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {/* Toggle positioned on the left, no divider */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="flex gap-6">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                        activeSection === link.href
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex md:hidden items-center gap-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 text-slate-600 dark:text-slate-400"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-lg font-medium py-2 border-b border-slate-100 dark:border-slate-800 ${
                    activeSection === link.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </nav>

        <main>
          {/* --- Hero Section --- */}
          <section
            id="home"
            className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <Image
                alt="Logo Karang taruna"
                src={Logo}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-blue-600/30 mb-8 transform hover:scale-105 transition-transform"
              />
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Keluarga Taruna Muda <br className="hidden sm:block" /> Jitar
                Dukuh
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Organisasi pemuda aktif untuk kegiatan arisan, nyinom, buka
                bersama, serta perlombaan agustusan hingga jalan sehat yang
                meriah.
              </p>
              <button
                onClick={() => scrollToSection("about")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
              >
                Discover More <ChevronRight size={20} />
              </button>
            </div>
          </section>

          {/* --- About Us Section --- */}
          <section id="about" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4 rounded-3xl opacity-20 dark:opacity-40"></div>
                  <Image
                    alt="Foto bersama"
                    src={fotoAboutUs}
                    className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[400px]"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    About Us
                  </h2>
                  <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                    Kata KERTAAJI diambil dari bahasa Sansekerta yang berarti
                    DIHARGAI dan juga memiliki kepanjangan yakni Keluarga Taruna
                    Muda Jitar Dukuh.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Organisasi ini berkomitmen untuk mengembangkan potensi
                    generasi muda di dusun kami melalui berbagai kegiatan
                    sosial, budaya, dan ekonomi dengan semangat gotong royong
                    serta kebersamaan demi masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Structure Section --- */}
          <section id="structure" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our Committee
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-4"></div>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Kenali pengurus berdedikasi yang menggerakkan organisasi kami.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                {COMMITTEE.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow text-center group"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-50 dark:border-slate-800 group-hover:border-blue-100 dark:group-hover:border-blue-900 transition-colors object-cover"
                    />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
                      {member.position}
                    </p>
                    <a
                      href={`https://www.instagram.com/${member.ig}/`}
                      className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-slate-950 px-4 py-2 rounded-full text-sm"
                    >
                      <InstagramIcon size={16} /> @{member.ig}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Event Section --- */}
          <section id="events" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Events & Activities
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-4"></div>
              </div>

              <div className="flex flex-col gap-16">
                {/* Upcoming Events - Now Stacked Above */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Calendar className="text-blue-600" /> Upcoming Events
                  </h3>

                  {/* 1. Added a flex column with a gap to separate multiple events */}
                  <div className="flex flex-col gap-8">
                    {UPCOMING_EVENTS.map((event) => (
                      <div
                        key={event.id}
                        // 2. Added `items-start` so the image and text containers act independently of each other's height
                        className="flex flex-col md:flex-row items-start bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative group"
                      >
                        {/* 3. Set fixed heights (h-64, md:h-80, lg:h-96) and added `shrink-0` */}
                        <div className="w-full md:w-2/5 lg:w-1/3 h-64 md:h-80 lg:h-96 shrink-0 overflow-hidden relative bg-slate-200 dark:bg-slate-900">
                          <img
                            src={event.image}
                            alt={`${event.title} Poster`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Event Details */}
                        <div className="p-6 lg:p-8 w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center">
                          <h4 className="text-2xl font-bold mb-4">
                            {event.title}
                          </h4>

                          {/* Changed sm:flex-row to lg:flex-row for better wrapping with 3 items */}
                          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mb-8 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-6">
                            <span className="flex items-center gap-2">
                              <Calendar
                                size={20}
                                className="text-blue-600 shrink-0"
                              />{" "}
                              {event.date}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock
                                size={20}
                                className="text-blue-600 shrink-0"
                              />{" "}
                              {event.time}
                            </span>
                            {event.location && (
                              <span className="flex items-center gap-2">
                                <MapPin
                                  size={20}
                                  className="text-blue-600 shrink-0"
                                />{" "}
                                {event.location}
                              </span>
                            )}
                          </div>

                          <div>
                            <h5 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-500">
                              Event Rundown
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {event.rundown.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                                  <span className="text-slate-700 dark:text-slate-300">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Past Events Gallery - Now Stacked Below */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <MapIcon className="text-blue-600" /> Past Events Gallery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PAST_EVENTS.map((event) => (
                      <div
                        key={event.id}
                        className="group cursor-pointer rounded-2xl overflow-hidden relative border border-slate-100 dark:border-slate-800"
                      >
                        <div className="aspect-[4/3] w-full">
                          <Image
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                            <h4 className="font-bold text-lg mb-2">
                              {event.title}
                            </h4>
                            <p className="text-sm text-slate-200 line-clamp-2">
                              {event.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Address Section --- */}
          <section id="address" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d988.3111934439833!2d110.2318193695543!3d-7.763846170704383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDUnNDkuOSJTIDExMMKwMTMnNTYuOSJF!5e0!3m2!1sid!2sid!4v1781958288805!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Headquarters Location"
                    className="filter grayscale contrast-125 opacity-80 hover:filter-none transition-all duration-500"
                  ></iframe>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <MapPin className="text-blue-600" /> Find Us Here
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                    Jitar Dukuh
                    <br />
                    Sumberarum, Moyudan
                    <br />
                    Sleman 55563
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Alamat organisasi ini berlokasi di Dusun Jitar Dukuh yang
                    memiliki lima wilayah RT.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Contact Section --- */}
          <section
            id="contact"
            className="py-20 bg-blue-600 dark:bg-blue-900 text-white relative overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Hubungi Kami
              </h2>
              <p className="text-blue-100 mb-12 text-lg">
                Punya usulan ide, ingin berkolaborasi, atau tertarik bergabung
                bersama kami? Silakan hubungi kami melalui platform yang
                tersedia.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {[
                  {
                    icon: InstagramIcon,
                    label: "Instagram",
                    href: "https://www.instagram.com/kertaaji_v/",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    href: "https://api.whatsapp.com/send?phone=6283132974770",
                  },
                  {
                    icon: Music2,
                    label: "TikTok",
                    href: "https://www.tiktok.com/@karangtarunakertaaji",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    href: "mailto:karangtarunakertaaji5@gmail.com",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all transform hover:-translate-y-1"
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* --- Footer --- */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white font-bold">
              <Image
                alt="Logo karangtaruna kertaaji"
                src={Logo}
                className="w-6 h-6 rounded bg-white flex items-center justify-center text-xs"
              />
              <span>Kertaaji</span>
            </div>
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Karang Taruna Jitar Dukuh. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
