import React from 'react';
import { motion as Motion } from 'motion/react';
import { Mail, Twitter, Linkedin, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Author: React.FC = () => {
  return (
    <section id="author" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
            <Motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-[80px] opacity-30 -z-10"></div>
              <div className="relative p-6 bg-white shadow-2xl rounded-3xl overflow-hidden group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzIyOTg2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Author"
                  className="w-full h-auto transition-transform duration-700 rounded-2xl group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50">
                  <a href="#" className="p-2 text-stone-600 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="p-2 text-stone-600 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="p-2 text-stone-600 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                  <a href="#" className="p-2 text-stone-600 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
                </div>
              </div>
            </Motion.div>
          </div>
          
          <div className="w-full px-4 lg:w-1/2">
            <Motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-16"
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                About the Author
              </span>
              <h2 className="mb-6 text-3xl font-bold text-stone-900 md:text-4xl">
                I've built 3 multi-million dollar companies. Let me show you how.
              </h2>
              <p className="mb-6 text-lg text-stone-600">
                Hi, I'm Alexandra Reed. Over the last 15 years, I've had the privilege of building three successful companies from scratch and advising over 200 CEOs on their growth strategies.
              </p>
              <p className="mb-8 text-lg text-stone-600 font-medium">
                My mission is to help ambitious entrepreneurs break through the ceiling of their current operations and build companies that can thrive without their constant involvement.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    15+
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Years Experience</h4>
                    <p className="text-stone-500 text-sm">Building and scaling tech companies worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                    200+
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Companies Advised</h4>
                    <p className="text-stone-500 text-sm">Helping founders scale from 6 to 8 figures.</p>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
