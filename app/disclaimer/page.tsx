'use client';

import { motion } from 'framer-motion';

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-slate max-w-none"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">Disclaimer</h1>

                    <p className="text-slate-600 mb-8 italic">Last Updated: February 2026</p>

                    <blockquote className="border-l-4 border-secondary pl-6 py-2 bg-secondary/5 mb-8">
                        <p className="text-xl font-medium text-primary m-0 italic">“Financial awareness empowers better decisions.”</p>
                    </blockquote>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        All information provided on JivanSecure is for educational and informational purposes only.
                    </p>

                    <section className="mb-12">
                        <ul className="list-disc pl-6 text-slate-600 space-y-4">
                            <li>Investment and insurance products are subject to market risks.</li>
                            <li>Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.</li>
                            <li>JivanSecure does not guarantee returns or outcomes.</li>
                        </ul>
                    </section>

                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        Users should seek personalized advice before taking any financial action.
                    </p>

                    <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
                        <h2 className="text-xl font-bold text-primary mb-4">Contact Us</h2>
                        <p className="text-slate-600 mb-2">If you have any questions about our services, policies, or content, feel free to reach out.</p>
                        <div className="space-y-2 text-slate-700">
                            <p><strong>Founder & Financial Advisor:</strong> Satish Mishra</p>
                            <p><strong>Email:</strong> jivansecure@gmail.com</p>
                            <p><strong>Phone:</strong> +91-9588472632</p>
                        </div>
                        <p className="mt-6 italic text-secondary font-medium">“Clear communication builds lasting trust.”</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
