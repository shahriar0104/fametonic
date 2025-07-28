"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full bg-gradient-to-r from-fametonic-red to-fametonic-cyan py-3 md:py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-white font-semibold text-sm md:text-base">
          <span className="text-xl">🚀</span>
          <span className="font-figtree font-extrabold"><span className="text-cyan-300">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!</span>
        </div>
      </div>

      <nav className="bg-black px-4 py-4 flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0">
            <Image
              src="/logo.webp"
              alt="Fame Tonic Logo"
              width={200}
              height={80}
              className="h-8 lg:h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer">About us</button>
            <button className="text-white hover:text-gray-300 transition-colors cursor-pointer">Contact</button>
          </div>

          <button
            className="md:hidden text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-2 space-y-2">
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2">About us</button>
            <button className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2">Contact</button>
          </div>
        </div>
      )}

      <main className="px-4 py-8 lg:-mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 z-10">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-urbanist">
                  Want to Turn Social Media
                </h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-urbanist">
                  Into a Profitable Career?
                </h1>
              </div>

              <div className="space-y-1">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-[2px_2px_4px_rgba(239,68,68,1)] drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] font-urbanist">
                  Discover your way to success
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-[2px_2px_4px_rgba(239,68,68,1)] drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] font-urbanist">
                  with Fametonic:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Image
                    src="/star.png"
                    alt="Star icon"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0 w-5 h-5"
                  />
                  <p className="text-white font-figtree font-semibold">Start growing your influence right away—no waiting required!</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/star.png"
                    alt="Star icon"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0 w-5 h-5"
                  />
                  <p className="text-white font-figtree font-semibold">Create viral TikToks and Reels step by step with easy-to-follow lessons</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/star.png"
                    alt="Star icon"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0 w-5 h-5"
                  />
                  <p className="text-white font-figtree font-semibold">Use a Personal AI Worker to boost your content</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/star.png"
                    alt="Star icon"
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0 w-5 h-5"
                  />
                  <p className="text-white font-figtree font-semibold">Learn from expert-led courses designed for aspiring influencers</p>
                </div>
              </div>

              {/* Desktop Get Started Button */}
              <div className="pt-4 hidden md:block">
                <button className="w-full md:w-auto bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 shadow-[4px_4px_20px_rgba(34,197,94,0.8)] font-figtree cursor-pointer">
                  <span>GET STARTED</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-center md:text-left text-white text-sm mt-2 font-figtree">1-minute quiz for personalized Insights</p>
              </div>

              <div className="text-xs text-gray-400 text-center md:text-left space-y-1 font-figtree">
                <p>By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
                <p>Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end order-1 lg:order-2 ml-0 lg:-ml-48">
              <div className="relative">
                <Image
                  src="/banner.webp"
                  alt="Fametonic App Dashboard"
                  width={800}
                  height={1600}
                  className="w-[650px] h-auto lg:w-[800px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Get Started Button - At bottom of content */}
      <div className="md:hidden px-4 pb-8">
        <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-[4px_4px_20px_rgba(34,197,94,0.8)] font-figtree cursor-pointer">
          <span>GET STARTED</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <p className="text-center text-white text-sm mt-2 font-figtree">1-minute quiz for personalized Insights</p>
      </div>
    </div>
  );
}
