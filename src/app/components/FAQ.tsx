import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is this eBook really free?",
    answer: "Yes, absolutely. My goal is to build trust with ambitious entrepreneurs by providing real value first. I'm confident that once you see the results of these strategies, you'll be interested in my future work."
  },
  {
    question: "How long is the guide?",
    answer: "It's 45 pages long, packed with actionable strategies, templates, and frameworks. I've designed it to be read in about 60-90 minutes, with the goal of you being able to implement one thing immediately after reading."
  },
  {
    question: "What format is the eBook in?",
    answer: "The eBook is provided as a PDF, so you can read it on any device—including your phone, tablet, or desktop. It's also optimized for printing if you prefer physical notes."
  },
  {
    question: "Is this only for tech companies?",
    answer: "While many of the examples come from my experience in tech, the principles of delegation, scaling, and value propositions apply to any service-based or product-based business that is looking to grow."
  },
  {
    question: "Will I get regular emails after downloading?",
    answer: "I'll send you a short series of follow-up emails with additional resources related to the book. After that, you'll join my weekly 'Scaling Secrets' newsletter, which you can unsubscribe from at any time with one click."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-stone-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-stone-600">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`overflow-hidden transition-all border rounded-2xl ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-stone-100 bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-stone-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-stone-100 text-stone-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
