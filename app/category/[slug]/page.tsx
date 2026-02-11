import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import AbstractBackground from '@/components/AbstractBackground';
import CategoryVisual from '@/components/CategoryVisual';
import { Shield, TrendingUp, Users, Heart, Phone, ArrowUpRight, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { IMAGES } from '@/lib/assets';

// This would typically come from a database, but bridging for the layout demo
const categoryData: Record<string, any> = {
    'motor-insurance': {
        title: 'Motor Insurance',
        slug: 'motor-insurance',
        subtitle: 'Comprehensive protection for your vehicle against accidents, theft, and liabilities.',
        features: [
            { title: 'Zero Depreciation', desc: 'Get full claim amount without depreciation deduction on parts.' },
            { title: '24/7 Roadside Assistance', desc: 'Breakdown support anywhere, anytime across India.' },
            { title: 'Cashless Garages', desc: 'Network of 5000+ garages for cashless repairs.' }
        ]
    },
    'life-insurance': {
        title: 'Life Insurance',
        slug: 'life-insurance',
        subtitle: 'Secure your family’s financial future with our comprehensive life cover plans.',
        features: [
            { title: 'High Claim Settlement', desc: 'Partnering with insurers having 98%+ claim settlement ratio.' },
            { title: 'Tax Benefits', desc: 'Save tax under Section 80C and 10(10D) of Income Tax Act.' },
            { title: 'Critical Illness Cover', desc: 'Additional protection against major illnesses.' }
        ]
    },
    'health-insurance': {
        title: 'Health Insurance',
        slug: 'health-insurance',
        subtitle: 'Medical security for you and your family against rising healthcare costs.',
        features: [
            { title: 'Cashless Hospitals', desc: 'Access to top hospitals without paying upfront.' },
            { title: 'Pre/Post Hospitalization', desc: 'Coverage for expenses 60 days before and 180 days after admission.' },
            { title: 'No Claim Bonus', desc: 'Increase in sum insured for every claim-free year.' }
        ]
    },
    'mutual-funds-sip': {
        title: 'Mutual Funds & SIP',
        slug: 'mutual-funds-sip',
        subtitle: 'Wealth creation strategies tailored to your risk appetite and time horizon.',
        features: [
            { title: 'Expert Portfolio Management', desc: 'Curated mix of equity and debt funds.' },
            { title: 'Goal Based Planning', desc: 'Align investments to goals like home, education, or retirement.' },
            { title: 'Automated Investing', desc: 'Disciplined savings through monthly SIPs.' }
        ]
    },
    'nri-planning': {
        title: 'NRI Services',
        slug: 'nri-planning',
        subtitle: 'Specialized financial planning for Non-Resident Indians.',
        features: [
            { title: 'Tax Compliance', desc: 'Guidance on DTAA and Indian tax laws.' },
            { title: 'Investment Management', desc: 'Remote management of Indian assets and portfolio.' },
            { title: 'Repatriation Services', desc: 'Smooth transfer of funds back to your country of residence.' }
        ]
    },
    'retirement-planning': {
        title: 'Retirement Planning',
        slug: 'retirement-planning',
        subtitle: 'Ensure a stress-free retirement with a steady stream of income.',
        features: [
            { title: 'Pension Plans', desc: 'Guaranteed lifetime income options.' },
            { title: 'Inflation Beating Returns', desc: 'Strategies to grow your corpus faster than inflation.' },
            { title: 'Legacy Planning', desc: 'Structuring your estate for the next generation.' }
        ]
    }
};

const mockBlogs = [
    {
        id: "1",
        title: "The Future of Family Healthcare in Post-Pandemic India",
        excerpt: "A deep dive into how critical illness coverage is evolving to meet new medical challenges and rising costs.",
        image: IMAGES.INSIGHTS.HEALTHCARE_FUTURE,
        categorySlug: "health-insurance",
        categoryName: "Health Insurance",
        date: "Feb 10, 2026",
        readTime: "8 min read"
    },
    {
        id: "2",
        title: "Wealth Transfer: Navigating Inheritance Complexity",
        excerpt: "How Term Insurance serves as the cornerstone for a modern estate planning strategy for High Net Worth individuals.",
        image: IMAGES.INSIGHTS.WEALTH_TRANSFER,
        categorySlug: "life-insurance",
        categoryName: "Life Insurance",
        date: "Feb 05, 2026",
        readTime: "12 min read"
    },
    {
        id: "3",
        title: "Motor Insurance: Beyond the Mandate",
        excerpt: "Why zero-depreciation and roadside assistance are no longer optional for the modern Indian vehicle owner.",
        image: IMAGES.MOTOR.CAR,
        categorySlug: "motor-insurance",
        categoryName: "Motor Insurance",
        date: "Jan 28, 2026",
        readTime: "6 min read"
    }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = categoryData[slug];
    if (!category) return { title: 'Not Found' };
    return {
        title: `${category.title} | JivanSecure`,
        description: category.subtitle
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = categoryData[slug];

    if (!data) {
        notFound();
    }

    const filteredBlogs = mockBlogs.filter(blog => blog.categorySlug === slug);

    return (
        <main className="flex-1">
            {/* Hero Section for Category */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center">
                {/* Background Visual */}
                <div className="absolute inset-0 -z-10">
                    <CategoryVisual type={slug} className="w-full h-full rounded-none opacity-40" animate={true} />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-slate-800 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            <TrendingUp size={12} />
                            <span>Expert Solutions</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10 max-w-2xl">
                            {data.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Get a Quote <ArrowUpRight size={18} />
                            </Link>
                            <Link
                                href="#blogs"
                                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-50 transition-all flex items-center gap-2 border border-slate-200"
                            >
                                Latest Analysis
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Insights Grid */}
            <section id="features" className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Key Benefits</span>
                        <h2 className="text-3xl font-bold text-primary mt-2">Why Choose Our {data.title}?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {data.features.map((feature: any, idx: number) => (
                            <div key={idx} className="group p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-500">
                                <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                    <Shield className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Analysis Section (Blogs) */}
            {filteredBlogs.length > 0 && (
                <section id="blogs" className="py-24 bg-slate-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div>
                                <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">Market Analysis</span>
                                <h2 className="text-3xl lg:text-5xl font-bold text-primary tracking-tighter mt-2">Latest from Our Desk</h2>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredBlogs.map((blog, idx) => (
                                <Link
                                    key={blog.id}
                                    href={`/post/${blog.id}`}
                                    className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                                >
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-primary rounded-full">
                                                {blog.categoryName}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} className="text-secondary" />
                                                {blog.readTime}
                                            </div>
                                            <span>•</span>
                                            <span>{blog.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-slate-500 font-light text-sm leading-relaxed mb-8 line-clamp-3">
                                            {blog.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all pt-6 border-t border-slate-50">
                                            Full Analysis <ArrowRight size={14} className="text-secondary" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Ready to secure your {data.title.toLowerCase()}?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-light lg:text-lg">
                        Talk to our experts today and get a personalized plan that suits your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-slate-900 transition-all hover:scale-105 shadow-2xl shadow-slate-200"
                    >
                        <Phone size={18} />
                        Consult with Satish
                    </Link>
                </div>
            </section>
        </main>
    );
}
