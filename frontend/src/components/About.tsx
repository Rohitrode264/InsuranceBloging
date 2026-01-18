import { websiteContent } from '../constants/content';
import aboutBg from '../assets/images/about_bg.png';

export default function About() {
    const { aboutUs } = websiteContent;

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4caf50]/10 rounded-full z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0f4c81]/10 rounded-full z-0"></div>
                        <img
                            src={aboutBg}
                            alt="Family Protection"
                            className="relative z-10 w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs animate-bounce-slow hidden md:block">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">100% Trusted</p>
                                    <p className="text-sm text-gray-500">Ethical Advice</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81] font-serif">
                            {aboutUs.title}
                        </h2>
                        <div className="h-1 w-20 bg-[#f59e0b] rounded-full"></div>

                        <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                            {aboutUs.content}
                        </p>

                        <div className="pt-4">
                            <a href="#contact" className="text-[#0f4c81] font-semibold flex items-center hover:translate-x-2 transition-transform">
                                Meet Founder <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
