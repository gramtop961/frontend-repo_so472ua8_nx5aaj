import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleCTA = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">Prasad Ranjane</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m Prasad Ranjane
            <span className="block text-cyan-300">Full-Stack & React Native Developer</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            I build scalable mobile and web applications with React Native, Expo, Next.js, Node.js and modern cloud tooling.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#projects"
              onClick={handleCTA}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e)=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
