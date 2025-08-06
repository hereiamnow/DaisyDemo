'use client';

import React from 'react';
// Import the custom useTheme hook from the ThemeProvider component
import { useTheme } from '@/components/ThemeProvider';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Define the ComponentsPage functional component
export default function ComponentsPage() {
  // Use the useTheme hook to access the current theme and the function to set the theme
  const { theme } = useTheme();
  console.log("Current theme read from context:", theme); // Log the theme read from context

  return (
    <div className="bg-base-100 min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card showcasing different button styles */}
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Buttons</h2>
              {/* Button examples with different styles */}
              <div className="flex flex-wrap gap-2 items-center">
                <button className="btn">Default</button>
                <button className="btn btn-primary btn-sm">Primary</button>
                <button className="btn btn-secondary btn-sm">Secondary</button>
                <button className="btn btn-accent btn-sm">Accent</button>
                <button className="btn btn-ghost btn-sm">Ghost</button>
                <button className="btn btn-link btn-sm">Link</button>
              </div>
              {/* Button examples with different sizes */}
              <div className="divider">Sizes</div>
              <div className="flex flex-wrap gap-2 items-center">
                <button className="btn btn-primary btn-xs">Extra Small</button>
                <button className="btn btn-primary btn-sm">Small</button>
                <button className="btn btn-primary btn-md">Medium</button>
                <button className="btn btn-primary btn-lg">Large</button>
              </div>
            </div>
          </div>

          {/* Card showcasing different form elements */}
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Form Elements</h2>
              {/* Input, toggle, radio buttons, and checkbox examples */}
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
          
          {/* Card showcasing different alert styles */}
          <div className="card bg-base-200 shadow-xl md:col-span-2 lg:col-span-1 transition-all duration-300 hover:scale-105">
            <div className="card-body space-y-2">
              <h2 className="card-title">Alerts</h2>
              {/* Info and success alert examples */}
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

          {/* Card showcasing different badge styles */}
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body">
              <h2 className="card-title">Badges</h2>
              {/* Badge examples with different styles and size */}
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
          
          {/* Card showcasing different progress bar styles */}
          <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:scale-105">
            <div className="card-body space-y-4">
              <h2 className="card-title">Progress</h2>
              {/* Progress bar examples with different styles and values */}
              <progress className="progress w-full"></progress>
              <progress className="progress progress-primary w-full" value="25" max="100"></progress>
              <progress className="progress progress-secondary w-full" value="50" max="100"></progress>
              <progress className="progress progress-accent w-full" value="75" max="100"></progress>
            </div>
          </div>

          {/* Card with an image and content */}
          <div className="card lg:col-span-1 bg-base-200 shadow-xl image-full transition-all duration-300 hover:scale-105">
            {/* Image for the card */}
            <figure><img src="https://placehold.co/400x225.png" alt="Shoes" data-ai-hint="shoes fashion" /></figure>
            <div className="card-body">
              <h2 className="card-title">Card Example</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              {/* Button within the card */}
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
