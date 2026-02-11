'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-slate max-w-none"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">Terms and Conditions</h1>

                    <p className="text-slate-600 mb-8 italic">Last Updated: February 2026</p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        Welcome to JivanSecure (<a href="https://www.jivansecure.com" className="text-secondary hover:underline">https://www.jivansecure.com</a>). By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree, please do not use this website.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Use of Website</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The content provided on JivanSecure is for general information and educational purposes only. It does not constitute legal, tax, or financial advice.
                        </p>
                        <blockquote className="border-l-4 border-secondary pl-6 py-2 bg-secondary/5">
                            <p className="text-xl font-medium text-primary m-0 italic">“Informed decisions come from responsible usage.”</p>
                        </blockquote>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Financial Disclaimer</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            All insurance, mutual fund, and investment-related information is subject to market risks. Past performance is not indicative of future results. Users are advised to consult directly with Satish Mishra, a financial advisor, before making any financial decisions.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            All content, including text, logos, graphics, and design, is the intellectual property of JivanSecure unless otherwise stated. Unauthorized use or reproduction is prohibited.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            JivanSecure shall not be liable for any direct, indirect, or consequential loss arising from the use of this website or reliance on its content.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">External Links</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Our website may contain links to third-party websites. JivanSecure has no control over their content and is not responsible for their policies or practices.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Changes to Terms</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            JivanSecure reserves the right to update or modify these Terms and Conditions at any time without prior notice.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
