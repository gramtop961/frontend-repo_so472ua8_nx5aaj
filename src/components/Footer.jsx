import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm">© 2025 AnyTechie. Built by Prasad Ranjane.</p>
        <a href="#home" onClick={(e)=>{e.preventDefault();document.querySelector('#home')?.scrollIntoView({behavior:'smooth'});}} className="text-cyan-300 hover:text-cyan-200 text-sm">Back to top</a>
      </div>
      {showTop && (
        <button
          onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 h-11 w-11 rounded-full bg-cyan-500 text-black shadow-lg hover:bg-cyan-400 transition-colors flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
