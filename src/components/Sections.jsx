import { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, ExternalLink, Mail, Code, Smartphone, Server, Database } from 'lucide-react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('opacity-0', 'translate-y-6');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('!opacity-100', '!translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="transition-all duration-700 ease-out py-20">
      <SectionTitle title="About Me" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white/80 leading-relaxed">
        <p>
          I build scalable mobile and web applications using <span className="text-cyan-300">React Native</span>, <span className="text-cyan-300">Expo</span>, <span className="text-cyan-300">React</span>, <span className="text-cyan-300">Next.js</span>, <span className="text-cyan-300">Node.js</span>, <span className="text-cyan-300">Express</span> and <span className="text-cyan-300">MongoDB</span>. I enjoy solving problems, sharing knowledge, writing technical blogs and building impactful software that blends delightful UX with reliable engineering.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useReveal();
  const items = [
    { name: 'React', icon: Code },
    { name: 'React Native', icon: Smartphone },
    { name: 'Next.js', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Express', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'TypeScript', icon: Code },
    { name: 'JavaScript', icon: Code },
  ];
  return (
    <section id="skills" ref={ref} className="transition-all duration-700 ease-out py-20">
      <SectionTitle title="Skills" subtitle="Tools and technologies I use to craft robust, scalable apps" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(({ name, icon: Icon }) => (
          <div key={name} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
              <Icon size={20} />
            </div>
            <span className="text-white/90 font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const ref = useReveal();
  const projects = [
    {
      title: 'Project A',
      desc: 'Mobile App built with React Native & Expo',
      tech: 'React Native, Expo',
      img: 'https://via.placeholder.com/600x400?text=Project+A',
      link: '#',
    },
    {
      title: 'Project B',
      desc: 'Web App built with Next.js/Node.js',
      tech: 'Next.js, Node.js',
      img: 'https://via.placeholder.com/600x400?text=Project+B',
      link: '#',
    },
    {
      title: 'Project C',
      desc: 'API with Express & MongoDB',
      tech: 'Express, MongoDB',
      img: 'https://via.placeholder.com/600x400?text=Project+C',
      link: '#',
    },
  ];
  return (
    <section id="projects" ref={ref} className="transition-all duration-700 ease-out py-20">
      <SectionTitle title="Projects" subtitle="A selection of work and experiments" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
            <div className="aspect-video bg-black/40 overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-white/70">{p.desc}</p>
              <p className="mt-2 text-sm text-cyan-300">{p.tech}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-white/90 hover:text-cyan-300">
                View project <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  const ref = useReveal();
  const posts = [
    {
      title: 'React Native’s New Architecture – What Developers Need to Know',
      excerpt: 'A practical look at the new architecture, TurboModules, and the migration path.',
      link: '#',
    },
    {
      title: 'Building Performant Lists in React Native',
      excerpt: 'Virtualization, windowing, and practical patterns for smooth scrolling.',
      link: '#',
    },
  ];
  return (
    <section id="blog" ref={ref} className="transition-all duration-700 ease-out py-20">
      <SectionTitle title="Articles" subtitle="I share insights, lessons, and practical guides" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-6">
            <h3 className="text-white font-semibold text-xl">{post.title}</h3>
            <p className="mt-2 text-white/70">{post.excerpt}</p>
            <a href={post.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-white/90 hover:text-cyan-300">
              Read article <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks, ${data.name}. Your message has been captured. (No backend yet)`);
    form.reset();
  };

  return (
    <section id="contact" ref={ref} className="transition-all duration-700 ease-out py-20">
      <SectionTitle title="Contact" subtitle="Have an opportunity or idea? Let’s talk." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea name="message" rows={5} required className="w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="How can I help?" />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors">
            Send Message
          </button>
        </form>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-white font-semibold text-lg">Connect</h3>
          <p className="mt-2 text-white/70">I’m active on these platforms. Feel free to reach out.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white/90">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white/90">
              <Github size={18} /> GitHub
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white/90">
              <Instagram size={18} /> Instagram
            </a>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-white/80">
            <Mail size={18} /> prasad@anytechie.dev
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
