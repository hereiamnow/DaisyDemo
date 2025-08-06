'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const themes = [
  "daisystarter", "light", "dark", "cupcake", "bumblebee", "emerald",
  "corporate", "synthwave", "retro", "cyberpunk", "valentine",
  "halloween", "garden", "forest", "aqua", "lofi", "pastel",
  "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
];

export default function ThemesPage() {
  const { setTheme } = useTheme();

  return (
    <div className="bg-base-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <Link href="/" className="btn btn-ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
            </Link>
             <h1 className="text-3xl font-bold text-center">Theme Showcase</h1>
             <div className="w-48"></div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div
              key={theme}
              data-theme={theme}
              className="card bg-base-100 shadow-xl border border-base-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="card-body">
                <h2 className="card-title capitalize text-base-content flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  {theme}
                </h2>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                    <span className="text-base-content">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary"></div>
                    <span className="text-base-content">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent"></div>
                    <span className="text-base-content">Accent</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-neutral"></div>
                    <span className="text-base-content">Neutral</span>
                  </div>
                </div>
                 <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm" onClick={() => setTheme(theme)}>
                    Set Theme
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
