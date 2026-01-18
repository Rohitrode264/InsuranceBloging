import { websiteContent } from '../constants/content';
import jivanLogo from '../assets/images/jivansecure_logo.png';

export default function Footer() {
    const { seo } = websiteContent;

    return (
        <footer className="bg-[#1f2937] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white p-1 rounded-lg">
                                <img src={jivanLogo} alt="Logo" className="h-10 w-auto" />
                            </div>
                            <span className="text-xl font-bold">JivanSecure</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering Indian families and NRIs with ethical financial advice and personalized wealth planning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#f59e0b]">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/#insurance-products" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#f59e0b]">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="/insurance/life/term" className="text-gray-400 hover:text-white transition-colors">Life Insurance</a></li>
                            <li><a href="/insurance/health/mediclaim" className="text-gray-400 hover:text-white transition-colors">Health Insurance</a></li>
                            <li><a href="/insurance/life/ulip" className="text-gray-400 hover:text-white transition-colors">Mutual Funds / SIP</a></li>
                            <li><a href="/insurance/life/pension" className="text-gray-400 hover:text-white transition-colors">Retirement Planning</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 className="text-lg font-bold mb-6 text-[#f59e0b]">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-gray-400 text-sm">Mumbai, Maharashtra, India</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span className="text-gray-400 text-sm">support@jivansecure.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEO Keywords Block */}
                <div className="border-t border-gray-800 pt-8 pb-8">
                    <p className="text-xs text-center text-gray-500 leading-relaxed max-w-5xl mx-auto">
                        {seo.keywords.join(" • ")}
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} JivanSecure. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
