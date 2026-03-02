"use client"

import React, { useState, useEffect, useRef } from "react"
import Vapi from "@vapi-ai/web"
import { Phone, PhoneOff, Loader2, Mic, MicOff, MessageSquare, X, User } from "lucide-react"
import { Button } from "./ui/button"

const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!
const vapi = new Vapi(VAPI_PUBLIC_KEY)

interface Message {
  role: "assistant" | "user"
  text: string
}

export default function VapiReceptionist() {
  const [connecting, setConnecting] = useState(false)
  const [connected, setConnected] = useState(false)
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false)
      setConnected(true)
      setMessages([]) // Reset transcript for new call
    })

    vapi.on("call-end", () => {
      setConnecting(false)
      setConnected(false)
      setAssistantIsSpeaking(false)
    })

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true)
    })

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false)
    })

    vapi.on("message", (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages(prev => [...prev, {
          role: message.role === "assistant" ? "assistant" : "user",
          text: message.transcript
        }])
      }
    })

    vapi.on("error", (error) => {
      console.error("Vapi Error:", error)
      setConnecting(false)
    })

    const handleStartCall = () => startCall()
    window.addEventListener('start-vapi-call', handleStartCall)
    return () => {
      window.removeEventListener('start-vapi-call', handleStartCall)
    }
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const startCall = () => {
    setConnecting(true)
    vapi.start("e64ab423-c36e-44ff-b61d-ddb530a5a763")
  }

  const stopCall = () => {
    vapi.stop()
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* ─── CHATBOX TRANSCRIPT ─── */}
      {connected && (
        <div className="w-[320px] sm:w-[380px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-blue-50 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-500 max-h-[450px]">
          {/* Header */}
          <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${assistantIsSpeaking ? "bg-primary scale-105" : "bg-slate-200"}`}>
                  <Mic className={`w-5 h-5 ${assistantIsSpeaking ? "text-white" : "text-slate-500"}`} />
                </div>
                {assistantIsSpeaking && <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse border-2 border-white" />}
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-900 leading-none">DentCare AI Assistant</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider mt-1">Live Transcript</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={stopCall} className="rounded-full h-8 w-8 hover:bg-red-50 hover:text-red-600">
               <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-white min-h-[250px] scroll-smooth">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <p className="text-[12px] text-slate-400 font-medium">Listening to your voice...</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === "assistant" ? "items-start" : "items-end"}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                  m.role === "assistant" 
                    ? "bg-slate-100 text-slate-800 rounded-tl-none" 
                    : "bg-primary text-white rounded-tr-none"
                }`}>
                  {m.text}
                </div>
                <div className="flex items-center gap-1 mt-1.5 px-1 opacity-40">
                   {m.role === "assistant" ? <Mic className="w-2.5 h-2.5" /> : <User className="w-2.5 h-2.5" />}
                   <span className="text-[9px] font-bold uppercase tracking-tighter">{m.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Controls */}
          <div className="p-4 bg-slate-50 border-t flex items-center justify-between">
            <p className="text-[10px] text-slate-400 font-medium italic">Transcription is automatic</p>
            <Button variant="outline" size="sm" onClick={stopCall} className="h-8 px-4 text-[11px] font-bold rounded-lg gap-2 text-red-600 border-red-100 hover:bg-red-50 hover:border-red-200">
              <PhoneOff className="w-3.5 h-3.5" /> End Call
            </Button>
          </div>
        </div>
      )}

      {/* ─── FLOATING ACTION BUTTON ─── */}
      <div className="relative group">
        {!connected && !connecting && (
          <div className="absolute -top-12 right-0 bg-slate-900 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
             Talk to Sarah (AI)
          </div>
        )}
        
        <Button
          onClick={connected ? stopCall : startCall}
          disabled={connecting}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-500 group active:scale-95 ${
            connected ? "bg-slate-900 scale-90" : "bg-primary hover:bg-primary/90"
          }`}
        >
          {connecting ? (
            <Loader2 className="w-7 h-7 animate-spin" />
          ) : connected ? (
            <X className="w-7 h-7" />
          ) : (
            <Phone className="w-7 h-7 group-hover:scale-110 transition-transform fill-white" />
          )}
        </Button>
      </div>
    </div>
  )
}
