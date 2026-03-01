import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { X, Mail, CircleCheck, Loader2 } from 'lucide-react';

interface EmailFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  setStatus('loading');

  try {
    const res = await fetch('/api/brevo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error('Failed to add email');

    setStatus('success');
  } catch (err) {
    console.error(err);
    setStatus('idle');
  }
};

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="p-10 md:p-12">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 animate-bounce">
                  <CircleCheck size={40} />
                </div>
                <h3 className="text-3xl font-bold text-stone-900 mb-4">You're All Set!</h3>
                <p className="text-lg text-stone-600 mb-8">
                  The download link has been sent to <span className="font-bold text-stone-900">{email}</span>. Please check your inbox (and spam folder) in a few minutes.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-stone-900 text-white font-bold rounded-xl hover:bg-stone-800 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center">
                  <h3 className="mb-4 text-3xl font-bold text-stone-900 md:text-4xl">Get Your Free Copy</h3>
                  <p className="text-lg text-stone-600">
                    Join 12,400+ entrepreneurs and start scaling your business today.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-stone-900 uppercase tracking-wider">
                      Work Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 pl-12 pr-4 text-stone-900 bg-stone-50 border-2 border-stone-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center w-full h-14 text-lg font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      'Send Me the eBook'
                    )}
                  </button>

                  <p className="text-center text-sm text-stone-500">
                    We value your privacy. Your data is safe with us.
                  </p>
                </form>
              </>
            )}
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
};
