"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface Props {
  beforeImage: string
  afterImage: string
  label: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, label }: Props) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-slate-100 shadow-2xl"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* After Image (Background) */}
        <Image 
          src={afterImage} 
          alt="After" 
          fill 
          className="object-cover"
          priority
        />

        {/* Before Image (Overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0 w-[1000px] h-full" style={{ width: containerRef.current?.clientWidth }}>
            <Image 
              src={beforeImage} 
              alt="Before" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Separator Line */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary group transform transition-transform active:scale-90">
            <div className="flex gap-0.5">
               <div className="w-0.5 h-3 bg-primary rounded-full" />
               <div className="w-0.5 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
          Before
        </div>
        <div className="absolute bottom-4 right-4 z-20 bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">
          After
        </div>
      </div>
      
      <div className="text-center">
        <h4 className="text-[15px] font-bold text-slate-800">{label}</h4>
        <p className="text-[12px] text-slate-500 font-medium">Drag the slider to see results</p>
      </div>
    </div>
  )
}
