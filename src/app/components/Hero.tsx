import React from 'react';
import { motion as Motion } from 'motion/react';
import { BookOpen, CircleCheck, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-stone-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                Free eBook Download
              </span>
              <h1 className="mb-6 text-5xl font-bold leading-tight text-stone-900 lg:text-6xl">
                Master the Art of <br />
                <span className="text-blue-600">Modern Business</span> Scaling
              </h1>
              <p className="mb-8 text-xl text-stone-600">
                Discover the 7 proven strategies that top entrepreneurs use to grow their revenue by 300% without burning out.
              </p>
              
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  onClick={onCtaClick}
                  className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg group"
                >
                  Download Free Copy
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </button>
                <div className="flex items-center px-6 text-stone-500">
                  <BookOpen className="mr-2" size={20} />
                  <span>45 Page PDF Guide</span>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 border-2 border-white rounded-full bg-stone-200 flex items-center justify-center text-[10px] overflow-hidden">
                       <ImageWithFallback 
                        src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-stone-500 font-medium">
                  Joined by <span className="text-stone-900 font-bold">12,400+</span> ambitious founders
                </p>
              </div>
            </Motion.div>
          </div>
          
          <div className="w-full px-4 lg:w-1/2">
            <Motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto lg:mr-0 max-w-lg"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-300 rounded-full blur-3xl opacity-20 -z-10"></div>
              
              <div className="relative p-4 bg-white rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646032538629-6b8647ab0761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJvb2slMjBtb2NrdXB8ZW58MXx8fHwxNzcyMjk4NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern Business eBook Cover"
                  className="rounded-xl w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-stone-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CircleCheck className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase font-bold tracking-tight">Best Seller</p>
                    <p className="text-sm font-bold text-stone-900">2026 Business Guide</p>
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
