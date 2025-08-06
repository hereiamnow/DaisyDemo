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

const colorMapping = [
  { name: 'Primary', class: 'bg-primary' },
  { name: 'Secondary', class: 'bg-secondary' },
  { name: 'Accent', class: 'bg-accent' },
  { name: 'Neutral', class: 'bg-neutral' },
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
                
                <div className="flex justify-around gap-2 mt-4">
                   {colorMapping.map((color) => (
                    <div key={color.name} className="tooltip" data-tip={color.name}>
                        <div className={`w-8 h-8 rounded-full ${color.class} border-2 border-base-300`}></div>
                    </div>
                  ))}
                </div>

                <div className="text-xs font-medium text-base-content/70 mt-4">Typography Preview</div>
                <p className="text-base-content/70 text-sm">
                  The quick brown fox jumps over the lazy dog.
                </p>
                
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
