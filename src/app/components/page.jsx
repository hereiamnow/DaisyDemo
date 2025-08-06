'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const themes = [
  "daisystarter", "light", "dark", "cupcake", "bumblebee", "emerald",
  "corporate", "synthwave", "retro", "cyberpunk", "valentine",
  "halloween", "garden", "forest", "aqua", "lofi", "pastel",
  "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
];

export default function ComponentsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-base-100 min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <Link href="/" className="btn btn-ghost">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <label htmlFor="theme-select" className="label font-medium">
              <span className="label-text text-base-content">Select Theme:</span>
            </label>
            <select
              id="theme-select"
              className="select select-bordered w-full max-w-xs"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Buttons</h2>
              <div className="flex flex-wrap gap-2 items-center">
                <button className="btn">Default</button>
                <button className="btn btn-primary btn-sm">Primary</button>
                <button className="btn btn-secondary btn-sm">Secondary</button>
                <button className="btn btn-accent btn-sm">Accent</button>
                <button className="btn btn-ghost btn-sm">Ghost</button>
                <button className="btn btn-link btn-sm">Link</button>
              </div>
              <div className="divider">Sizes</div>
              <div className="flex flex-wrap gap-2 items-center">
                <button className="btn btn-primary btn-xs">Extra Small</button>
                <button className="btn btn-primary btn-sm">Small</button>
                <button className="btn btn-primary btn-md">Medium</button>
                <button className="btn btn-primary btn-lg">Large</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Form Elements</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Input" className="input input-bordered w-full" />
                <div className="form-control w-52">
                  <label className="cursor-pointer label">
                    <span className="label-text">Toggle</span>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </label>
                </div>
                <div className="flex gap-4">
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Radio 1</span>
                      <input type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked />
                    </label>
                  </div>
                  <div className="form-control">
                     <label className="label cursor-pointer gap-2">
                        <span className="label-text">Radio 2</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                     </label>
                  </div>
                </div>
                 <div className="form-control">
                  <label className="label cursor-pointer gap-2">
                    <span className="label-text">Checkbox</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl md:col-span-2 lg:col-span-1 transition-all duration-300 hover:scale-105">
            <div className="card-body space-y-2">
              <h2 className="card-title">Alerts</h2>
                <div role="alert" className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>This is an info alert.</span>
                </div>
                <div role="alert" className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>This is a success alert.</span>
                </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Badges</h2>
              <div className="flex flex-wrap gap-2 items-center">
                <div className="badge">default</div>
                <div className="badge badge-primary">primary</div>
                <div className="badge badge-secondary">secondary</div>
                <div className="badge badge-accent">accent</div>
                <div className="badge badge-ghost">ghost</div>
                <div className="badge badge-lg">Large</div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body space-y-4">
              <h2 className="card-title">Progress</h2>
              <progress className="progress w-full"></progress>
              <progress className="progress progress-primary w-full" value="25" max="100"></progress>
              <progress className="progress progress-secondary w-full" value="50" max="100"></progress>
              <progress className="progress progress-accent w-full" value="75" max="100"></progress>
            </div>
          </div>

          <div className="card lg:col-span-1 bg-base-200 shadow-xl image-full transition-all duration-300 hover:scale-105">
            <figure><img src="https://placehold.co/400x225.png" alt="Shoes" data-ai-hint="shoes fashion" /></figure>
            <div className="card-body">
              <h2 className="card-title">Card Example</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
