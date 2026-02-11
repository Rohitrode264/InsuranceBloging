'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '@/lib/assets';
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PostRenderer from '@/components/PostRenderer';
import { notFound } from 'next/navigation';

const blogData: Record<string, any> = {
    "1": {
        title: "The Future of Family Healthcare in Post-Pandemic India",
        image: IMAGES.INSIGHTS.HEALTHCARE_FUTURE,
        categorySlug: "health-insurance",
        categoryName: "Health Insurance",
        author: "Satish Mishra",
        date: "Feb 10, 2026",
        readTime: "8 min read",
        blocks: [
            { id: "b1", type: "paragraph", props: { text: "The healthcare landscape in India has undergone a seismic shift over the last few years. What was once considered a luxury—comprehensive health insurance—has now become a non-negotiable cornerstone of family financial planning." } },
            { id: "b2", type: "heading", props: { text: "Rising Medical Inflation" } },
            { id: "b3", type: "paragraph", props: { text: "Medical inflation in India is currently hovering around 14-15%, significantly higher than general inflation. A single hospitalization for a major ailment can now wipe out years of savings if you aren't adequately protected." } },
            { id: "b4", type: "quote", props: { text: "Insurance is not about avoiding risk; it's about making sure risk doesn't derail your life's goals." } },
            { id: "b5", type: "heading", props: { text: "The Shift to Preventive Care" } },
            { id: "b6", type: "paragraph", props: { text: "Modern health plans are moving beyond just 'hospitalization'. We are seeing a massive surge in plans that cover OPD expenses, mental health, and preventive wellness checkups. This holistic approach ensures that you stay healthy, rather than just getting treated when you fall ill." } },
            { id: "b7", type: "image", props: { url: IMAGES.HEALTH.FAMILY } },
            { id: "b8", type: "paragraph", props: { text: "Choosing the right floater policy for your family requires analyzing co-payment clauses, waiting periods for pre-existing diseases, and sub-limits on room rents. At JivanSecure, we help you demystify these technicalities." } }
        ]
    },
    "2": {
        title: "Wealth Transfer: Navigating Inheritance Complexity",
        image: IMAGES.INSIGHTS.WEALTH_TRANSFER,
        categorySlug: "life-insurance",
        categoryName: "Life Insurance",
        author: "Satish Mishra",
        date: "Feb 05, 2026",
        readTime: "12 min read",
        blocks: [
            { id: "b1", type: "paragraph", props: { text: "Transferring wealth to the next generation is often more complex than accumulating it. Without a strategic framework, a significant portion of your legacy can be lost to taxes, legal disputes, and mismanagement." } },
            { id: "b2", type: "heading", props: { text: "Term Insurance as a Liquidity Tool" } },
            { id: "b3", type: "paragraph", props: { text: "Most people view Term Insurance as 'death benefit'. However, for HNW individuals, it serves as a vital liquidity tool. It provides immediate cash to heirs to pay off estate taxes or debts, ensuring that core family assets like real estate or business equity don't have to be sold in a hurry." } },
            { id: "b4", type: "quote", props: { text: "A successful legacy is defined not by what you leave behind, but by how well those you love are prepared to manage it." } },
            { id: "b5", type: "image", props: { url: IMAGES.LIFE.TERM } },
            { id: "b6", type: "heading", props: { text: "Structuring Nominations" } },
            { id: "b7", type: "paragraph", props: { text: "A common mistake is assuming that a 'nominee' is the same as a 'legal heir'. We guide our clients on correctly structuring nominations and MWP Act (Married Women's Property Act) endorsements to ensure that the insurance proceeds reach the intended beneficiaries without legal hurdles." } }
        ]
    }
};

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const blog = blogData[id];

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Header / Hero */}
            <header className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={blog.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={blog.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute inset-0 flex items-end pb-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <Link
                                href={`/category/${blog.categorySlug}`}
                                className="inline-flex items-center gap-2 text-white/60 hover:text-secondary mb-12 transition-colors uppercase text-[10px] font-bold tracking-[0.3em]"
                            >
                                <ArrowLeft size={14} /> Back to {blog.categoryName}
                            </Link>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 bg-secondary text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl shadow-secondary/20">
                                    {blog.categoryName}
                                </span>
                                <div className="h-px w-8 bg-white/20" />
                                <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{blog.readTime}</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-12">
                                {blog.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                                        <User size={18} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-widest text-white/40">Advisor</p>
                                        <p className="text-sm font-bold text-white">{blog.author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                                        <Calendar size={18} />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-widest text-white/40">Date</p>
                                        <p className="text-sm font-bold text-white">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Social Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-40 flex lg:flex-col gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 lg:mb-4 lg:-rotate-90 lg:whitespace-nowrap origin-left">Share Article</span>
                                <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Facebook size={16} />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Twitter size={16} />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Linkedin size={16} />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </aside>

                        {/* Main Body */}
                        <div className="lg:col-span-8 max-w-3xl">
                            <PostRenderer blocks={blog.blocks} />

                            {/* Author Bio */}
                            <div className="mt-24 p-12 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl">
                                    <img src={IMAGES.PLACEHOLDERS.PROFESSIONAL_PORTRAIT} alt="Satish Mishra" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">About Satish Mishra</h4>
                                    <p className="text-slate-500 font-light leading-relaxed mb-6">
                                        With over 15 years in the financial services industry, Satish specialize in legacy planning and high-impact insurance strategies. He has helped over 2,500 families secure their multi-generational wealth.
                                    </p>
                                    <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors inline-flex items-center gap-2">
                                        Book a Consultation <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Related Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="sticky top-40 space-y-12">
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Related Analysis</h4>
                                    <div className="space-y-8">
                                        {Object.entries(blogData).filter(([bid]) => bid !== id).map(([bid, b]: [string, any]) => (
                                            <Link key={bid} href={`/post/${bid}`} className="group block">
                                                <h5 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                                    {b.title}
                                                </h5>
                                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{b.date}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 bg-primary rounded-3xl text-white">
                                    <h4 className="text-lg font-bold mb-4">Strategic Newsletter</h4>
                                    <p className="text-white/60 text-xs font-light mb-6 leading-relaxed">Get the latest risk analysis and wealth transfer strategies directly in your inbox.</p>
                                    <div className="space-y-3">
                                        <input type="email" placeholder="email@company.com" className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-xs outline-none focus:border-secondary transition-colors" />
                                        <button className="w-full bg-white text-primary font-bold py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </main>
    );
}
