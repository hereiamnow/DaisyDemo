import Link from 'next/link';

const NextJsLogo = () => (
  <svg width="100" height="60" viewBox="0 0 128 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 0L0 39V78H38V39L64 22L90 39V78H128V39L64 0ZM102 46V69H90V46L64 30L38 46V69H26V46L64 22L102 46Z" fill="black"/>
  </svg>
);

const TailwindCssLogo = () => (
  <svg width="140" height="60" viewBox="0 0 155 93" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77.5 0C34.7 0 0 34.7 0 77.5C0 93 12.5 93 12.5 77.5C12.5 41.6 41.6 12.5 77.5 12.5C113.4 12.5 142.5 41.6 142.5 77.5C142.5 93 155 93 155 77.5C155 34.7 120.3 0 77.5 0Z" fill="#38BDF8"/>
    <path d="M38.75 46.5C17.35 46.5 0 63.85 0 85.25C0 93 6.25 93 6.25 85.25C6.25 67.8 21.3 52.75 38.75 52.75C56.2 52.75 71.25 67.8 71.25 85.25C71.25 93 77.5 93 77.5 85.25C77.5 63.85 60.15 46.5 38.75 46.5Z" fill="#38BDF8"/>
  </svg>
);

const DaisyUiLogo = () => (
    <svg width="140" height="60" viewBox="0 0 250 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
        <path d="M36.72,0,8.56,23,22.24,41.44,36.4,22.88,50.8,41.44,64.24,23,36.72,0M1.2,56.08,12.64,48.8l13.2,16.56L39,48.56,52,65.36,38.8,79.84,26.08,63.28,12.88,79.6,1.2,56.08Z" fill="currentColor"></path>
        <path d="M129.59,23.36a19.28,19.28,0,0,0-19.28,19.28,19.2,19.2,0,0,0,19.2,19.2,19.28,19.28,0,0,0,19.28-19.28A19.2,19.2,0,0,0,129.51,23.36Zm0,32a12.72,12.72,0,1,1,12.72-12.72A12.72,12.72,0,0,1,129.59,55.36Z" fill="currentColor"></path>
        <path d="M228.8,24V50.24a10.4,10.4,0,0,1-10.4,10.4H209.6a10.4,10.4,0,0,1-10.4-10.4V24h-6.4V50.24A16.8,16.8,0,0,0,209.6,67h8.8a16.8,16.8,0,0,0,16.8-16.8V24Z" fill="currentColor"></path>
        <path d="M85.39,24V60.64h-6.4V24Z" fill="currentColor"></path>
        <path d="M102.35,39.36a10.72,10.72,0,0,1,10.64-10.72,11.2,11.2,0,0,1,8.48,3.6l4.48-4a17.6,17.6,0,0,0-13-5.2,17.12,17.12,0,0,0-17.12,17.12,16.88,16.88,0,0,0,16.72,16.8,17.2,17.2,0,0,0,13.2-5.2l-4.4-4.08A10.88,10.88,0,0,1,102.35,50,10.64,10.64,0,0,1,91.63,39.36Z" fill="currentColor"></path>
        <path d="M152.43,24h6.4V60.64h-6.4Z" fill="currentColor"></path>
        <path d="M184.83,24v6.24h-12V60.64h-6.4V30.24h-12V24Z" fill="currentColor"></path>
        <path d="M74.79,42.56V24h-6.4V60.64h17.2a15.2,15.2,0,0,0,15.2-15.2A15.44,15.44,0,0,0,85.39,30.24H74.79v12.32ZM85,54.24H74.79V49h10.16a8.8,8.8,0,0,1,0,5.2Z" fill="currentColor"></path>
    </svg>
);

const GenkitLogo = () => (
    <svg width="100" height="60" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.2458 118.995L0 91.7496L59.4975 32.2521L86.7433 59.4979L27.2458 118.995Z" fill="#4285F4"/>
        <path d="M91.7492 0L118.995 27.2458L32.2517 113.989L5.00586 86.7434L91.7492 0Z" fill="#FBBC04"/>
        <path d="M32.2517 5.00586L59.4975 32.2521L32.2517 59.4979L5.00586 32.2521L32.2517 5.00586Z" fill="#34A853"/>
    </svg>
);

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-base-100 text-base-content transition-colors duration-500">
        <div className="text-center max-w-2xl hero-content">
          <div className="max-w-md">
              <h1 className="text-5xl font-bold font-headline mb-4">Welcome to Daisy Starter</h1>
              <p className="py-6 text-lg">
              A clean, modern starting point for your next project, built with Next.js, Tailwind CSS, and the beautiful components of DaisyUI. Explore a showcase of components and switch between themes with ease.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/components" className="btn btn-primary btn-md">
                  Explore Components
                </Link>
                 <Link href="/themes" className="btn btn-secondary btn-md">
                  Explore Themes
                </Link>
              </div>
          </div>
        </div>
      </main>
      <section className="bg-base-200 text-base-content py-12">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Built With</h2>
            <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap px-4">
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                    <NextJsLogo />
                </a>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                    <TailwindCssLogo />
                </a>
                <a href="https://daisyui.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110 text-base-content">
                    <DaisyUiLogo />
                </a>
                <a href="https://firebase.google.com/docs/genkit" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                    <GenkitLogo />
                </a>
            </div>
        </div>
      </section>
    </>
  );
}