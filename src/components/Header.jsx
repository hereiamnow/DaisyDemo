'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { Menu, Sun, Moon } from 'lucide-react';

const themes = [
    "daisystarter", "light", "dark", "cupcake", "bumblebee", "emerald",
    "corporate", "synthwave", "retro", "cyberpunk", "valentine",
    "halloween", "garden", "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
    "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
];

export default function Header() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/components">Components</Link></li>
                        <li><Link href="/themes">Themes</Link></li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Daisy Starter</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/components">Components</Link></li>
                    <li><Link href="/themes">Themes</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        Theme
                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-96 overflow-y-auto">
                        {themes.map((t) => (
                            <li key={t}>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label={t.charAt(0).toUpperCase() + t.slice(1)}
                                    value={t}
                                    checked={theme === t}
                                    onChange={() => setTheme(t)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
