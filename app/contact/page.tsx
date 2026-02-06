'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import PremiumHeroVisual from '@/components/PremiumHeroVisual';

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Phone,
            title: 'Primary Hotline',
            details: '+91 91705 51000',
            description: 'Mon-Fri from 9am to 6pm.',
            color: 'bg-blue-50 text-blue-600'
        },
        {
            icon: Mail,
            title: 'Email Communications',
            details: 'care@jivansecure.com',
            description: 'We respond within 24 hours.',
            color: 'bg-emerald-50 text-emerald-600'
        },
        {
            icon: MapPin,
            title: 'Strategic Headquarters',
            details: 'Pune, Maharashtra, India',
            description: 'Corporate Office - Advisory Zone',
            color: 'bg-purple-50 text-purple-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative pt-32 pb-20 overflow-hidden">
                <PremiumHeroVisual />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Direct Advisory Access
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="text-5xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[0.95] mb-10"
                        >
                            Let's secure <br />
                            <span className="text-blue-600">your next chapter.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-xl lg:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Connect with India's most transparent financial architects for personalized protection strategies.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="grid gap-8">
                                {contactInfo.map((info, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="group flex gap-6 p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-500"
                                    >
                                        <div className={`w-14 h-14 shrink-0 rounded-2xl ${info.color} flex items-center justify-center`}>
                                            <info.icon size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-slate-900 tracking-tight">{info.title}</h3>
                                            <p className="text-xl font-medium text-slate-950">{info.details}</p>
                                            <p className="text-sm text-slate-400 font-light">{info.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full" />
                                <h4 className="text-xl font-bold mb-4 relative z-10">Follow Our Insights</h4>
                                <div className="flex gap-4 relative z-10">
                                    <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all">
                                        <MessageSquare size={20} />
                                    </a>
                                </div>
                                <p className="mt-8 text-sm text-slate-400 font-light leading-relaxed">
                                    Stay updated with the latest in risk management and wealth preservation.
                                </p>
                            </motion.div>
                        </div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="lg:col-span-7"
                        >
                            <ContactForm className="shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)] border-0" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map / Global Presence Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="grid-map" width="5" height="5" patternUnits="userSpaceOnUse">
                            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid-map)" />
                    </svg>
                </div>

               
            </section>
        </div>
    );
}
