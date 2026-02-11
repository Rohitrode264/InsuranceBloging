'use client';

import { motion } from 'framer-motion';

export default function AdvertisingPolicyPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="prose prose-slate max-w-none"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-tight">Advertising Policy</h1>

                    <p className="text-slate-600 mb-8 italic">Last Updated: February 2026</p>

                    <blockquote className="border-l-4 border-secondary pl-6 py-2 bg-secondary/5 mb-8">
                        <p className="text-xl font-medium text-primary m-0 italic">“Ads help us keep valuable content accessible.”</p>
                    </blockquote>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        JivanSecure may display advertisements provided by Google AdSense and other advertising partners.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Third-Party Ads</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this or other websites.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Google AdSense</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Google’s use of advertising cookies enables it and its partners to serve ads to users based on their visit to JivanSecure and other sites on the internet.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-secondary hover:underline">Google Ads Settings</a>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">No Endorsement</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Advertisements displayed on JivanSecure do not constitute endorsement or recommendation of products or services by Satish Mishra or JivanSecure.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}
