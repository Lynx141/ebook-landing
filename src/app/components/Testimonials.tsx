import React from 'react';
import { motion as Motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Founder, Fintech Lab",
    content: "This eBook changed my perspective on scaling. In 3 months, we've increased our MRR by 40% using the delegation framework in Chapter 4.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Sarah Miller",
    role: "CEO, Creative Hub",
    content: "I've read dozens of business books, but none are this practical. The AI integration section alone saved my team 15 hours a week.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "David Chen",
    role: "E-commerce Entrepreneur",
    content: "The value proposition chapter helped us refine our offer and double our conversion rates overnight. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="text-yellow-400 fill-yellow-400" size={20} />
            ))}
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Success Stories from Readers
          </h2>
          <p className="max-w-xl text-stone-400">
            Join thousands of satisfied business owners who have transformed their companies using these methods.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-stone-700" size={40} />
              <p className="mb-8 text-stone-300 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 overflow-hidden rounded-full ring-2 ring-blue-500/20">
                  <ImageWithFallback src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
