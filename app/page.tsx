"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import {
  Stethoscope,
  Sparkles,
  ChevronRight,
  Star,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  Play,
  ArrowUpRight,
  Siren
} from "lucide-react"

import EmergencyBanner from "@/components/emergency-banner"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import VapiReceptionist from "@/components/vapi-receptionist"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <EmergencyBanner />

      {/* ─── NAVBAR ─── */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "top-0 py-3 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" 
          : "top-[48px] py-5 bg-transparent"
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Stethoscope className="text-primary w-6 h-6" />
            <span className="text-lg font-bold text-slate-900">DentCare</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "About", "Doctors", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] font-medium text-slate-500 hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden sm:flex h-10 px-5 text-[13px] font-semibold rounded-lg bg-primary hover:bg-primary/90">
              Book Appointment
            </Button>
            <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-28 pb-0 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[520px]">
            
            {/* Left: Text */}
            <div className="space-y-7">
              <h1 className="text-[42px] lg:text-[52px] font-bold leading-[1.1] tracking-tight">
                Make <span className="inline-block">✨</span> Your Smile{" "}
                <span className="text-primary">Clean And Bright</span>
              </h1>
              <p className="text-[15px] text-slate-400 leading-relaxed max-w-md">
                We provide the best dental services with modern technology and experienced specialists. Book your visit today.
              </p>
              
              {/* Quick Booking Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-slate-50 rounded-2xl p-2 max-w-sm border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium text-slate-700 bg-white rounded-xl shadow-sm border border-slate-100 flex-1 min-w-[140px]">
                  <Calendar className="w-4 h-4 text-primary shrink-0" /> 
                  <input 
                    type="date" 
                    className="bg-transparent border-none outline-none w-full text-slate-800 [color-scheme:light]"
                  />
                </div>
                <Button 
                  className="h-11 px-8 rounded-xl text-[13px] font-bold bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
                  onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
                >
                  Book Now
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-5 pt-2">
                <div className="flex -space-x-2.5">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image src={`https://i.pravatar.cc/80?u=patient${i}`} alt="" width={36} height={36} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">2,400+</p>
                  <p className="text-[11px] text-slate-400">Happy Patients</p>
                </div>
                <Separator orientation="vertical" className="h-10 mx-2" />
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-sm font-bold ml-1">4.9</span>
                </div>
              </div>
            </div>
            
            {/* Right: Doctor Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Blue circle decoration */}
              <div className="absolute top-1/2 right-1/2 lg:right-1/4 -translate-y-1/2 w-[380px] h-[380px] border-[2px] border-dashed border-primary/20 rounded-full" />
              <div className="absolute top-1/2 right-1/2 lg:right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-full -z-10" />
              
              <div className="relative w-[340px] h-[440px] lg:w-[400px] lg:h-[520px]">
                <Image
                  src="/hero-doctor.png"
                  alt="Professional Dentist"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute bottom-12 left-0 bg-white rounded-xl shadow-lg border p-3 flex items-center gap-3 z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[12px] font-bold">Book Online</p>
                  <p className="text-[10px] text-slate-400">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg w-full aspect-[4/3] relative">
                <Image src="/mission-doctor.png" alt="Our Mission" fill className="object-cover" />
              </div>
              {/* Quote card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl border p-5 max-w-[220px] hidden lg:block">
                <p className="text-[12px] font-semibold leading-relaxed text-slate-600">
                  "Committed to providing the highest standard of dental care."
                </p>
                <p className="text-[10px] text-slate-400 mt-3 font-semibold">— Clinical Director</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-[12px] font-semibold text-primary uppercase tracking-wider">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                It is Our Mission to{" "}
                <span className="text-primary">Make People Smile</span>
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                Professional dental care is essential for your overall health. Our team of certified specialists uses the latest technology to ensure fast, painless, and effective treatments with excellent results you can trust.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  "Advanced 3D scanning and digital treatment planning",
                  "Board-certified specialist with 12+ years experience",
                  "Transparent pricing with flexible payment options"
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-[13px] font-medium text-slate-600">{t}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Avatar className="w-11 h-11 border">
                  <AvatarImage src="https://i.pravatar.cc/100?u=dreliana" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-[13px] font-bold">Dr. Eliana White</p>
                  <p className="text-[11px] text-slate-400 font-medium">Chief Dental Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-slate-50/70" id="services">
        <div className="max-w-[1200px] mx-auto px-6 space-y-14">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">Explore Our Services</h2>
              <p className="text-[14px] text-slate-400 mt-2">Comprehensive dental care for every need.</p>
            </div>
            <div className="hidden sm:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-slate-200"><ArrowLeft className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-slate-200"><ArrowRight className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Dental Cleaning", icon: <Sparkles className="w-6 h-6" />, desc: "Professional cleaning to remove plaque and tartar buildup." },
              { title: "Dental Implants", icon: <Stethoscope className="w-6 h-6" />, desc: "Permanent tooth replacement with natural-looking implants." },
              { title: "Dental Crown", icon: <ShieldCheck className="w-6 h-6" />, desc: "Custom-fitted crowns to restore damaged or weak teeth." },
              { title: "Restoration", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Full mouth restoration for a complete smile makeover." }
            ].map((s, i) => (
              <Card key={i} className="bg-white border-none shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardContent className="p-7 space-y-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    {s.icon}
                  </div>
                  <h3 className="text-[15px] font-bold">{s.title}</h3>
                  <p className="text-[12px] text-slate-400 leading-relaxed">{s.desc}</p>
                  <a href="#" className="inline-flex items-center text-[12px] font-semibold text-primary hover:gap-2 transition-all gap-1">
                    Learn More <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-[1200px] mx-auto px-6 space-y-20">
          <h2 className="text-3xl font-bold text-center">Why Choose DentCare</h2>
          
          <div className="space-y-20">
            {[
              { 
                title: "Complete Dental Care", 
                desc: "We provide comprehensive treatment plans, from preventive care to complex procedures, all under one roof with the latest clinical technology.",
                img: "/hero-clinic.png"
              },
              { 
                title: "Expertise You Can Trust", 
                desc: "Our doctors are board-certified specialists following the latest international standards in dental healthcare with years of proven experience.",
                img: "/mission-doctor.png"
              },
              { 
                title: "Affordable Dental Services", 
                desc: "Quality dental care should be accessible to everyone. We offer transparent pricing, flexible payment plans, and accept all major insurance providers.",
                img: "/service-cleaning.png"
              }
            ].map((item, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "" : ""}`}>
                <div className={`space-y-5 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold text-[13px] flex items-center gap-1">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/10] relative border">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section className="py-10 px-6">
        <div className="max-w-[1200px] mx-auto bg-blue-50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="p-10 lg:p-16 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Book Your Free <br />Consultation Today!
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed max-w-sm">
                Take the first step toward a healthier and brighter smile by scheduling a free session with our dental experts.
              </p>
              <Button className="h-11 px-7 rounded-xl font-semibold bg-primary shadow-md text-[13px]">
                Join A Session
              </Button>
            </div>
            <div className="relative h-72 md:h-full min-h-[300px]">
              <Image 
                src="/hero-doctor.png" 
                alt="Consultation" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-14">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className="hidden sm:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-slate-200"><ArrowLeft className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-slate-200"><ArrowRight className="w-4 h-4" /></Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Tom White", quote: "I had an amazing experience. The staff was professional and the treatment was painless. Highly recommended!" },
              { name: "Sarah Johnson", quote: "Clean and modern facility. Dr. White explained everything clearly and made me feel comfortable throughout." },
              { name: "Michael Chen", quote: "Best dental clinic I've visited. Fast booking, great results, and the team is incredibly friendly and skilled." }
            ].map((t, i) => (
              <Card key={i} className="bg-slate-50 border-none shadow-sm rounded-2xl">
                <CardContent className="p-8 space-y-5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-medium">"{t.quote}"</p>
                  <Separator className="bg-slate-200" />
                  <div className="flex items-center gap-3">
                    <Avatar className="w-9 h-9">
                      <AvatarImage src={`https://i.pravatar.cc/80?u=review${i}`} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[12px] font-bold">{t.name}</p>
                      <p className="text-[10px] text-slate-400">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="rounded-3xl overflow-hidden shadow-md aspect-square relative border order-2 lg:order-1">
              <Image src="/service-fillings.png" alt="FAQ" fill className="object-cover" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-bold">Frequently Asked{" "}<span className="text-primary">Questions</span></h2>
                <p className="text-[14px] text-slate-400 mt-2">Everything you need to know about our services.</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "What services are you offering?", a: "We offer dental cleaning, implants, crowns, root canal, whitening, braces, and comprehensive oral surgery — all performed by certified specialists." },
                  { q: "How can I book an appointment quickly?", a: "You can book online through our website, call us directly, or use our AI-powered chat booking system available 24/7." },
                  { q: "What specialized treatments do you provide?", a: "We specialize in cosmetic dentistry, orthodontics, pediatric dentistry, and advanced surgical procedures with the latest 3D technology." },
                  { q: "Do you provide emergency services?", a: "Yes, we offer emergency dental services. Call our 24/7 hotline and our team will assist you immediately." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="py-1 border-b border-slate-200">
                    <AccordionTrigger className="text-[14px] font-semibold hover:no-underline text-left py-4">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-[13px] text-slate-500 leading-relaxed pb-4">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 space-y-14">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">Read Our Articles & Blog</h2>
            <Button variant="link" className="text-primary font-semibold text-[13px] flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { title: "Importance of Regular Dental Checkups", date: "Oct 12, 2024", img: "/hero-clinic.png" },
              { title: "Modern Methods in Dental Implants", date: "Sep 28, 2024", img: "/service-cleaning.png" },
              { title: "5 Easy Tips for Whiter Teeth At Home", date: "Aug 15, 2024", img: "/service-fillings.png" }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border relative">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span>Healthcare</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-[15px] font-bold leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-blue-50 rounded-3xl p-10 md:p-14 text-center space-y-6 border border-blue-100">
            <h2 className="text-2xl lg:text-3xl font-bold">Set Up A Remote or Face-to-Face <br /> Meeting For Today</h2>
            <p className="text-[13px] text-slate-500 max-w-lg mx-auto leading-relaxed">
              Connect with our dental professionals for a personalized consultation — online or in-person.
            </p>
            <Button className="h-12 px-8 rounded-xl font-semibold bg-primary shadow-md text-[13px]">
              Book A Session Now
            </Button>
          </div>
        </div>
      </section>

      {/* ─── SMILE TRANSFORMATIONS ─── */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-bold uppercase tracking-wider px-4 py-1.5 h-auto text-[10px]">Real Results</Badge>
            <h2 className="text-3xl font-bold">Smile Transformations</h2>
            <p className="text-[13px] text-slate-500 font-medium">
              Explore the surgical and cosmetic excellence of our specialists through these real patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image 
                  src="/transformation-1.png" 
                  alt="Professional Whitening Results" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-[15px] font-bold text-slate-800">Professional Whitening</h4>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image 
                  src="/transformation-2.png" 
                  alt="Dental Implants Results" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-[15px] font-bold text-slate-800">Dental Implants</h4>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-5 pt-6">
             <p className="text-[12px] text-slate-400 font-bold uppercase tracking-widest italic font-medium">Experience similar results</p>
             <Button 
               className="bg-primary hover:bg-primary/90 text-[13px] font-bold h-11 px-10 rounded-xl transition-all hover:scale-105 active:scale-95"
               onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
             >
               Start Your Consultation
             </Button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-primary" />
                <span className="text-base font-bold">DentCare</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-relaxed max-w-xs">
                Delivering modern dental solutions with clinical excellence and patient-focused care.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                ))}
              </div>
            </div>

            {[
              { heading: "Quick Links", links: ["Home", "About", "Services", "Pricing", "Contact"] },
              { heading: "Services", links: ["Cleaning", "Implants", "Crown", "Root Canal", "Whitening"] },
              { heading: "Contact Info", links: ["info@dentcare.ai", "+1 (888) 555-0123", "Dubai, UAE"] }
            ].map((col, i) => (
              <div key={i} className="space-y-5">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/70">{col.heading}</h4>
                <div className="space-y-3">
                  {col.links.map(link => (
                    <a key={link} href="#" className="block text-[12px] text-slate-400 hover:text-white transition-colors">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-[11px] text-slate-500">© 2026 DentCare. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-[11px] text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[11px] text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <VapiReceptionist />
    </div>
  )
}
