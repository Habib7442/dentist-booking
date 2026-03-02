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
  Clock as ClockIcon,
  ArrowRight,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  ArrowUpRight,
  Info,
  Activity,
  Check
} from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import VapiReceptionist from "@/components/vapi-receptionist"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">

      {/* ─── NAVBAR ─── */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/95 backdrop-blur-sm shadow-sm border-b-0" 
          : "py-5 bg-white border-b border-slate-50"
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Stethoscope className="text-primary w-6 h-6" />
            <span className="text-lg font-bold text-slate-900 tracking-tight">DentCare</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Doctors", href: "#doctors" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[13px] font-semibold text-slate-500 hover:text-primary transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button 
              className="hidden sm:flex h-10 px-5 text-[13px] font-bold rounded-lg bg-primary hover:bg-primary/90 transition-all hover:scale-[1.02]"
              onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
            >
              Book Appointment
            </Button>
            
            {/* Mobile Menu with Sheet */}
            <div className="md:hidden">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-slate-900 border border-slate-200 shadow-sm transition-all hover:bg-slate-50">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] border-l border-slate-100 p-0">
                  <div className="flex flex-col h-full bg-white">
                    <SheetHeader className="p-8 border-b border-slate-50 text-left">
                      <SheetTitle className="flex items-center gap-2.5">
                        <Stethoscope className="text-primary w-6 h-6" />
                        <span className="text-lg font-bold">DentCare</span>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-1 p-6 flex-1 overflow-y-auto">
                      {[
                        { name: "Home", href: "#home" },
                        { name: "About", href: "#about" },
                        { name: "Services", href: "#services" },
                        { name: "Doctors", href: "#doctors" },
                        { name: "Contact", href: "#contact" }
                      ].map((item) => (
                        <a 
                          key={item.name} 
                          href={item.href} 
                          onClick={() => setSheetOpen(false)}
                          className="px-4 py-4 text-[15px] font-bold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="p-6 border-t border-slate-50 bg-slate-50/30">
                      <Button 
                        className="w-full h-12 text-[14px] font-bold rounded-xl bg-primary shadow-lg shadow-primary/20"
                        onClick={() => {
                          setSheetOpen(false);
                          window.dispatchEvent(new CustomEvent('start-vapi-call'));
                        }}
                      >
                        Book Appointment Now
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="pt-4 pb-12 sm:pt-8 sm:pb-16 overflow-hidden bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">
            
            {/* Left Card: Value Proposition */}
            <div className="flex-1 bg-secondary/60 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden group">
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors duration-700" />
              
              <div className="space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/10 shadow-sm transition-transform hover:scale-105 cursor-default">
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  <span className="text-[12px] font-bold text-slate-700">5.0 (2,400+ Reviews)</span>
                </div>
                
                <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-slate-900">
                  Exceptional <br />
                  <span className="text-primary">Dental Care</span>,<br className="hidden sm:block" />
                  Step By Step.
                </h1>
                
                <p className="text-[15px] lg:text-[16px] text-slate-600 leading-relaxed max-w-md font-medium">
                  Your smile deserves the best. Experience advanced dental solutions with a gentle touch, tailored for your premium comfort.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Button 
                    className="w-full sm:w-auto h-14 px-10 rounded-2xl text-[14px] font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                    onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
                  >
                    Book Appointment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-14 px-10 rounded-2xl text-[14px] font-bold border-primary/20 text-primary hover:bg-primary/5 transition-all hover:scale-105 active:scale-95"
                  >
                    Explore Services
                  </Button>
                </div>
              </div>

              {/* Quick Action Sub-Cards */}
              <div className="grid grid-cols-2 gap-4 mt-12 lg:mt-16">
                 <div className="bg-emerald-100/50 backdrop-blur-sm p-5 rounded-[2rem] border border-white flex flex-col gap-3 group/card hover:bg-emerald-100 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary group-hover/card:scale-110 transition-transform">
                       <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold">24/7 Service</p>
                      <p className="text-[11px] text-slate-500">Always Available</p>
                    </div>
                 </div>
                 <div className="bg-white/50 backdrop-blur-sm p-5 rounded-[2rem] border border-white flex flex-col gap-3 group/card hover:bg-white transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shadow-sm text-primary group-hover/card:scale-110 transition-transform">
                       <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold">Find Doctors</p>
                      <p className="text-[11px] text-slate-500">Expert Specialists</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Right Card: Image Showcase */}
            <div className="flex-1 relative rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden group min-h-[400px] lg:min-h-full">
               <Image
                 src="/hero-dentist.png"
                 alt="Elite Dental Care"
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
                 priority
                 quality={100}
               />
               
               {/* Floating Stat Badges */}
               <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
                  {[
                    { val: "200+", label: "Specialists" },
                    { val: "4,000+", label: "Recovered" },
                    { val: "99%", label: "Satisfaction" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-xl text-center group/stat hover:-translate-y-1 transition-transform">
                       <p className="text-lg lg:text-xl font-black text-primary group-hover/stat:scale-110 transition-transform">{stat.val}</p>
                       <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION (ABOUT) ─── */}
      <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center">
            
            {/* Left: Content */}
            <div className="flex-1 space-y-10 order-2 lg:order-1">
              <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-bold uppercase tracking-wider px-4 py-1.5 h-auto text-[10px]">Our Philosophy</Badge>
                <h2 className="text-[40px] lg:text-[52px] font-bold leading-[1.1] text-slate-900 tracking-tight">
                  Committed To Your <br />
                  <span className="text-primary">Oral Health</span>
                </h2>
                <p className="text-[16px] text-slate-600 leading-relaxed max-w-xl font-medium">
                  We strive to provide exceptional dental care through advanced technology, personalized treatments, and a compassionate approach, ensuring your oral health is always our top priority.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  "Advanced Dental Care For Every Smile",
                  "Personalized Treatments Tailored To You",
                  "Modern Technology For Better Results",
                  "Comfort, Safety, And Quality Guaranteed",
                  "Your Smile, Our Responsibility"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-3 h-3 text-primary stroke-[3px]" />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button className="h-14 px-10 rounded-2xl text-[14px] font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                  See Our Full Mission
                </Button>
              </div>
            </div>

            {/* Right: Masonry Style Grid */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="grid grid-cols-12 gap-4 h-[600px]">
                 <div className="col-span-7 h-full relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10">
                    <Image src="/service-cleaning.png" alt="" fill className="object-cover" quality={100} />
                 </div>
                 <div className="col-span-5 grid grid-rows-2 gap-4 h-full">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                       <Image src="/service-fillings.png" alt="" fill className="object-cover" quality={100} />
                    </div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl bg-primary flex flex-col items-center justify-center text-white p-6 text-center transition-transform hover:scale-[1.02]">
                       <ClockIcon className="w-10 h-10 mb-4 opacity-40" />
                       <p className="text-xl font-bold">24/7</p>
                       <p className="text-[11px] opacity-70 font-medium uppercase tracking-widest">Medical Care</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left: Sidebar Content */}
            <div className="lg:w-1/3 space-y-10">
              <div className="space-y-6">
                <h2 className="text-[40px] font-bold leading-tight text-slate-900">
                  Features <br /> & Services
                </h2>
                <div className="flex flex-col gap-3">
                   {[
                     "Expert Dental Care",
                     "Advanced Technology",
                     "Affordable Family Plans",
                     "Cosmetic Procedures"
                   ].map((item, i) => (
                     <div key={i} className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all cursor-pointer">
                        <span className="text-[15px] font-bold text-slate-700 group-hover:text-primary transition-colors">{item}</span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Right: Large Feature Card */}
            <div className="lg:w-2/3 w-full bg-white rounded-[3rem] p-10 lg:p-14 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
               {/* Decorative ring */}
               <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-primary/5 rounded-full -mr-32 -mt-32" />
               
               <div className="flex-1 relative aspect-square w-full max-w-[320px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-inner">
                  <Image src="/hero-clinic.png" alt="Consultation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse tracking-widest uppercase">
                    Live Call
                  </div>
               </div>
               
               <div className="flex-1 space-y-6 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-slate-900 leading-tight">Instant AI <br /> Consultation</h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                      Your gateway to smarter, patient-friendly dental help. Speak with Sarah, our AI Receptionist, right now.
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-slate-50">
                     {[
                       { label: "Safe & Protected", icon: Info },
                       { label: "24/7 Digital Service", icon: Activity }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between group/line cursor-pointer">
                          <span className="text-[14px] font-bold text-slate-600 group-hover/line:text-primary transition-colors">{item.label}</span>
                          <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover/line:border-primary transition-colors">
                             <ArrowRight className="w-3 h-3 text-slate-400 group-hover/line:text-primary" />
                          </div>
                       </div>
                     ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full h-14 rounded-2xl border-2 border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all text-[15px] gap-3"
                    onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
                  >
                    <Phone className="w-4 h-4 fill-primary" />
                    Start Live Call Now
                  </Button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section id="doctors" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 space-y-12 sm:y-20 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-bold uppercase tracking-wider px-4 py-1.5 h-auto text-[10px]">Why DentCare</Badge>
            <h2 className="text-4xl font-bold text-slate-900">Elite Care Features</h2>
          </div>
          
          <div className="space-y-24">
            {[
              { 
                title: "Complete Dental Care", 
                desc: "We provide comprehensive treatment plans, from preventive care to complex procedures, all under one roof with the latest clinical technology.",
                img: "/hero-clinic.png",
                tag: "All-in-One Solution"
              },
              { 
                title: "Expertise You Can Trust", 
                desc: "Our doctors are board-certified specialists following the latest international standards in dental healthcare with years of proven experience.",
                img: "/mission-doctor.png",
                tag: "Certified Excellence"
              },
              { 
                title: "Affordable Dental Services", 
                desc: "Quality dental care should be accessible to everyone. We offer transparent pricing, flexible payment plans, and accept all major insurance providers.",
                img: "/service-cleaning.png",
                tag: "Flexible Financing"
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                     <span className="w-10 h-[2px] bg-primary/30" />
                     <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">{item.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-[16px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold text-[14px] flex items-center gap-2 group/link">
                    Explore Services <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-[16/10] relative border-8 border-slate-50">
                    <Image src={item.img} alt={item.title} fill className="object-cover" quality={100} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA ─── */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto bg-primary rounded-[3rem] overflow-hidden relative group">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-2xl -mr-20 -mb-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center relative z-10">
            <div className="p-10 lg:p-20 space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold leading-[1.1] text-white">
                Book Your Free <br />Consultation Today!
              </h2>
              <p className="text-[16px] text-emerald-50/70 leading-relaxed max-w-sm font-medium">
                Take the first step toward a healthier and brighter smile by scheduling a free session with our dental experts.
              </p>
              <Button 
                className="h-14 px-10 rounded-2xl font-bold bg-white text-primary hover:bg-emerald-50 shadow-xl transition-all hover:scale-105 active:scale-95 text-[15px]"
                onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
              >
                Join A Session Now
              </Button>
            </div>
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="/hero-doctor.png" 
                alt="Consultation" 
                fill 
                className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105" 
                quality={100}
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
      <section id="contact" className="py-20 bg-slate-50/70">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="rounded-3xl overflow-hidden shadow-md aspect-square relative border order-2 lg:order-1">
              <Image src="/service-fillings.png" alt="FAQ" fill className="object-cover" quality={100} />
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
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" quality={100} />
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
      <section className="pb-24 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center space-y-8 border-[12px] border-slate-50 relative overflow-hidden group shadow-2xl shadow-primary/10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-300/10 rounded-full blur-2xl -ml-24 -mb-24" />
            
            <div className="relative z-10 space-y-6">
               <h2 className="text-3xl lg:text-5xl font-bold text-white leading-[1.1]">Set Up A Remote or Face-to-Face <br /> Meeting For Today</h2>
               <p className="text-[16px] text-emerald-50/70 max-w-lg mx-auto font-medium leading-relaxed">
                 Connect with our dental professionals for a personalized consultation — online or in-person.
               </p>
            </div>

            <div className="relative z-10 pt-4">
               <Button 
                 className="h-16 px-12 rounded-2xl font-bold bg-white text-primary hover:bg-emerald-50 shadow-2xl transition-all hover:scale-105 active:scale-95 text-[16px]"
                 onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
               >
                 Book A Free Session Now
               </Button>
            </div>
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
                  quality={100}
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
                  quality={100}
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
      <footer className="bg-slate-900 text-white pt-24 pb-8">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                   <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">DentCare</span>
              </div>
              <p className="text-[14px] text-slate-400 leading-relaxed font-medium">
                Delivering modern dental solutions with clinical excellence and patient-focused care.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary transition-all cursor-pointer group hover:-translate-y-1">
                    <Icon className="w-4 h-4 group-hover:fill-white" />
                  </div>
                ))}
              </div>
            </div>

            {[
              { heading: "Quick Links", links: ["Home", "About", "Services", "Pricing", "Contact"] },
              { heading: "Services", links: ["Cleaning", "Implants", "Crown", "Root Canal", "Whitening"] },
              { heading: "Contact Info", links: ["info@dentcare.ai", "+1 (888) 555-0123", "Dubai, UAE"] }
            ].map((col, i) => (
              <div key={i} className="space-y-8">
                <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white/50">{col.heading}</h4>
                <div className="space-y-4">
                  {col.links.map(link => (
                    <a key={link} href="#" className="block text-[14px] text-slate-400 hover:text-primary transition-colors font-medium">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12">
            <p className="text-[13px] text-slate-500">© 2026 DentCare. Crafted for your perfect smile.</p>
            <div className="flex gap-10">
              <a href="#" className="text-[13px] text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[13px] text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      <VapiReceptionist />
    </div>
  )
}
