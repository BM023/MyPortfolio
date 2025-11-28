import React from 'react';
import { Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">About Me</h2>
        
        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center border-2 border-blue-300">
              <div className="text-center">
                <p className="text-blue-500 font-semibold">Photo.png</p>
                <p className="text-blue-400 text-sm">(Your profile image)</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200">
              <p className="text-blue-700 leading-relaxed mb-6">
                A motivated Wits University Health Science alum turned engineering trainee at Project Y x Capaciti. With an apt ability to adapt, learn and contribute meaningfully to purpose-driven teams and projects, I am eager to grow within the tech and innovation space. I have a strong foundation in problem-solving, collaboration, research, and data analytics.
              </p>
              <a
                href="https://drive.google.com/file/d/1VeRN7FbIQaaZKEKFqbnv3ypwAMKLvR-l/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-300 hover:bg-blue-400 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-500 mb-8">My Journey</h3>
          <div className="space-y-6">
            {[
              { year: '2023-2024', title: 'Health Science Research', desc: 'Research background and analytical foundation' },
              { year: '2024-Present', title: 'Tech Engineering Trainee', desc: 'Enrolled in Cloud, AI, Low Code, and Data programs at Project Y x Capaciti' },
              { year: '2025', title: 'Aspiring Data Scientist', desc: 'Building expertise in data engineering and analytics' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-24 font-semibold text-blue-400">{item.year}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-blue-600">{item.title}</h4>
                  <p className="text-blue-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}