import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { Author } from '../components/Author';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { EmailForm } from '../components/EmailForm';

export const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCtaClick={toggleModal} />
      
      <main>
        <Hero onCtaClick={toggleModal} />
        <Features />
        
        <section className="py-20 bg-blue-600">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
              Ready to stop working IN your business and start working ON it?
            </h2>
            <button
              onClick={toggleModal}
              className="px-10 py-5 text-lg font-bold text-blue-600 transition-all bg-white rounded-xl hover:bg-stone-50 hover:shadow-2xl"
            >
              Get Your Free Copy Now
            </button>
          </div>
        </section>
        
        <Testimonials />
        <Author />
        <FAQ />
        
        <section className="py-24 bg-stone-900 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container px-4 mx-auto text-center relative z-10">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Don't wait another year for growth.
            </h2>
            <p className="mb-10 text-xl text-stone-400 max-w-2xl mx-auto">
              This free guide has everything you need to start scaling immediately. Join 12,000+ others who have already taken the leap.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={toggleModal}
                className="px-10 py-5 text-xl font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 shadow-xl hover:shadow-blue-600/20"
              >
                Download the 45-Page Guide
              </button>
              <p className="text-stone-500 font-medium">No credit card required. Instant PDF download.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <EmailForm isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};
