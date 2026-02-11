'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-slate max-w-none"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">Privacy Policy</h1>

                    <p className="text-slate-600 mb-8 italic">Last Updated: February 2026</p>

                    <blockquote className="border-l-4 border-secondary pl-6 py-2 bg-secondary/5 mb-8">
                        <p className="text-xl font-medium text-primary m-0 italic">“Your trust is our responsibility.”</p>
                    </blockquote>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        At JivanSecure, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We may collect personal information such as name, email address, phone number, and basic financial details when you:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Fill out contact forms</li>
                            <li>Request consultations</li>
                            <li>Subscribe to updates</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Provide financial advisory services</li>
                            <li>Respond to inquiries</li>
                            <li>Improve website experience</li>
                            <li>Communicate relevant updates</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            We do not sell or rent your personal information to third parties.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Cookies & Tracking</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            JivanSecure uses cookies to enhance user experience and analyze website traffic. You can disable cookies through your browser settings.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Data Protection</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We implement reasonable security measures to protect your data against unauthorized access or disclosure.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Services</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We may use third-party tools such as Google Analytics or advertising partners, which may collect data as per their own privacy policies.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Consent</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            By using this website, you consent to this Privacy Policy.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
