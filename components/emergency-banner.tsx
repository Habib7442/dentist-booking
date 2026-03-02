"use client"

import React, { useState } from "react"
import { AlertCircle, Phone, X, Siren } from "lucide-react"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative w-full bg-[#fef2f2] border-b border-red-100 z-[60] py-2.5 px-6 group overflow-hidden">
      {/* Subtle Animated Pulse Background */}
      <div className="absolute inset-0 bg-red-500/5 transition-opacity duration-1000 animate-pulse" />
      
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            <Siren className="w-4 h-4 text-red-600 animate-bounce" />
          </div>
          <p className="text-[13px] font-semibold text-red-900 leading-tight">
            <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider mr-2 align-middle">Emergency</span>
            Severe toothache or dental trauma? Speak with our 24/7 AI Receptionist now.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('start-vapi-call'))}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-md shadow-red-200 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-3 h-3 fill-white" />
            START EMERGENCY CALL
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="text-red-400 hover:text-red-600 transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
