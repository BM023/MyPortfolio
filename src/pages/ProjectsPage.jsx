import React from 'react';
import { Github } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'MuseMind',
      desc: 'AI-powered poem generator that transforms your thoughts and emotions into expressive poetry.',
      tech: 'HTML · JavaScript · CSS · Gemini API · NodeJS · ExpressJS',
      github: 'https://github.com/BM023/AIPoemGenerator',
      demo: 'https://transcendent-croissant-e3163c.netlify.app',
    },
    {
      title: 'BudgetApp',
      desc: 'A Budget App that tracks and lists expenses with an intuitive interface.',
      tech: 'HTML · JavaScript · CSS',
      github: 'https://github.com/BM023/BudgetApp',
      demo: null,
    },
    {
      title: 'MuseMotion',
      desc: 'Data engineering platform transforming raw EV data into actionable insights through automated ETL pipelines.',
      tech: 'SQL · Python · Pandas · Azure · Streamlit',
      github: 'https://github.com/BM023/MuseMotion',
      demo: 'https://week4-musemotion-7rxfcytyna5vt9batbjv3q.streamlit.app',
    },
    {
      title: 'MuseCareer',
      desc: 'AI-powered platform for CV evaluation and career recommendation.',
      tech: 'HTML · JavaScript · CSS · Docker · Kubernetes · Azure · Gemini API',
      github: 'https://github.com/BM023/MuseCareer',
      demo: null,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200 hover:border-blue-300 transition transform hover:scale-105"
            >
              <div className="w-full h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-6 flex items-center justify-center border border-blue-300">
                <p className="text-blue-500 font-semibold text-center">{project.title}</p>
              </div>
              
              <h3 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-blue-600 mb-4">{project.desc}</p>
              <p className="text-sm text-blue-500 mb-6 font-semibold">{project.tech}</p>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-300 hover:bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-center transition flex items-center justify-center gap-2"
                >
                  <Github size={18} /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-200 hover:bg-blue-300 text-blue-700 px-4 py-2 rounded-lg font-semibold text-center transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}