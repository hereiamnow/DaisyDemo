import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-base-100 text-base-content transition-colors duration-500">
      <div className="text-center max-w-2xl hero-content">
        <div className="max-w-md">
            <h1 className="text-5xl font-bold font-headline mb-4">Welcome to Daisy Starter</h1>
            <p className="py-6 text-lg">
            A clean, modern starting point for your next project, built with Next.js, Tailwind CSS, and the beautiful components of DaisyUI. Explore a showcase of components and switch between themes with ease.
            </p>
            <Link href="/components" className="btn btn-primary btn-lg">
            Explore Components
            </Link>
        </div>
      </div>
    </main>
  );
}
