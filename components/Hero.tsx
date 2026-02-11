'use client';

import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PremiumHeroVisual from './PremiumHeroVisual';
import CountUp from './CountUp';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-32 bg-white">
            <PremiumHeroVisual />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8 lg:space-y-12"
                    >
                        <div className="space-y-4 lg:space-y-6">

                            <h1 className="text-4xl md:text-6xl lg:text-[100px] font-bold tracking-tighter text-primary leading-[1.1] lg:leading-[0.85]">
                                Trusted <br />
                                <motion.span
                                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-secondary inline-block mt-1 lg:mt-3"
                                >
                                    Insurance Solutions.
                                </motion.span>
                            </h1>
                        </div>

                        <p className="text-lg lg:text-2xl text-slate-500 leading-relaxed max-w-lg font-light">
                            Securing your Life, Health, and Vehicles with expert advice from Satish Mishra.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2 lg:pt-4">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#solutions"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all shadow-xl lg:shadow-2xl shadow-primary/30 rounded-2xl w-full sm:w-auto"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                                />
                                <span className="relative z-10 flex items-center gap-3 group-hover:px-2 transition-all duration-300">
                                    Get Quote
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200 hover:border-secondary hover:text-secondary transition-all rounded-2xl shadow-sm w-full sm:w-auto"
                            >
                                Our Philosophy
                            </motion.a>
                        </div>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="absolute -inset-20 bg-gradient-to-tr from-blue-100/30 via-slate-50/20 to-white rounded-full blur-[100px] opacity-60 -z-10 animate-pulse" />
                        <ContactForm className="shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
