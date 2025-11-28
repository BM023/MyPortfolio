import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const response = await fetch('https://formsubmit.co/el/gurupo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="https://github.com/BM023"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200 hover:border-blue-400 transition text-center"
          >
            <Github size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-blue-600 mb-2">GitHub</h3>
            <p className="text-blue-500">View my projects</p>
          </a>

          <a
            href="https://www.linkedin.com/in/boikanyo-maswi-4811a7266"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200 hover:border-blue-400 transition text-center"
          >
            <Linkedin size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-blue-600 mb-2">LinkedIn</h3>
            <p className="text-blue-500">Connect with me</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-60 backdrop-blur p-8 rounded-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Send me a message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none bg-blue-50"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none bg-blue-50"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-400 focus:outline-none bg-blue-50"
            />
            <button
              onClick={handleFormSubmit}
              className="w-full bg-blue-300 hover:bg-blue-400 text-white px-6 py-3 rounded-full font-semibold transition disabled:opacity-50"
              disabled={submitStatus === 'sending'}
            >
              {submitStatus === 'sending' ? 'Sending...' : submitStatus === 'success' ? '✓ Sent!' : 'Send Message'}
            </button>
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send. Please try again.</p>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-blue-200 text-center">
            <p className="text-blue-600 font-semibold mb-4">Or reach out directly:</p>
            <a href="mailto:boikanyo.m0040@icloud.com" className="text-blue-400 hover:text-blue-500 flex items-center justify-center gap-2">
              <Mail size={20} /> boikanyo.m0040@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}