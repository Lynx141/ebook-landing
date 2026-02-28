import React from 'react';
import { BookOpen, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-12 lg:w-2/5 lg:mb-0">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <BookOpen size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-stone-900">
                SCALE<span className="text-blue-600">FREE</span>
              </span>
            </div>
            <p className="max-w-xs mb-8 text-stone-600 leading-relaxed">
              Helping entrepreneurs build systems that work for them, not the other way around. Download your free guide today.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 transition-colors border rounded-full border-stone-200 text-stone-600 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 transition-colors border rounded-full border-stone-200 text-stone-600 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 transition-colors border rounded-full border-stone-200 text-stone-600 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full px-4 mb-12 lg:w-1/5 lg:mb-0">
            <h4 className="mb-8 font-bold text-stone-900 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-stone-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-stone-600 hover:text-blue-600 transition-colors">Testimonials</a></li>
              <li><a href="#author" className="text-stone-600 hover:text-blue-600 transition-colors">About Author</a></li>
              <li><a href="#faq" className="text-stone-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="w-full px-4 mb-12 lg:w-1/5 lg:mb-0">
            <h4 className="mb-8 font-bold text-stone-900 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="flex items-center gap-2 text-stone-600 hover:text-blue-600 transition-colors">Blog <ExternalLink size={14}/></a></li>
              <li><a href="#" className="flex items-center gap-2 text-stone-600 hover:text-blue-600 transition-colors">Free Tools <ExternalLink size={14}/></a></li>
              <li><a href="#" className="flex items-center gap-2 text-stone-600 hover:text-blue-600 transition-colors">Webinars <ExternalLink size={14}/></a></li>
              <li><a href="#" className="flex items-center gap-2 text-stone-600 hover:text-blue-600 transition-colors">Templates <ExternalLink size={14}/></a></li>
            </ul>
          </div>
          
          <div className="w-full px-4 lg:w-1/5">
            <h4 className="mb-8 font-bold text-stone-900 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-stone-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-stone-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 mt-20 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} ScaleFree. All rights reserved. 
            Designed for ambitious business owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
