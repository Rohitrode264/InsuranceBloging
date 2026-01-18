import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import jivanLogo from '../assets/images/jivansecure_logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (hashOrPath: string, queryParam?: string) => {
        setIsOpen(false);

        // If it's the FAQ page or Home page link
        if (hashOrPath === '/faq') {
            navigate('/faq');
            window.scrollTo(0, 0);
            return;
        }

        // Logic for sections on the homepage (with optional query params for tabs)
        const targetHash = hashOrPath.startsWith('#') ? hashOrPath : '#home'; // Default to #home if just '/'

        if (location.pathname !== '/') {
            // If we are not on home, go to home with search params and hash
            navigate({
                pathname: '/',
                search: queryParam ? `?category=${queryParam}` : '',
                hash: targetHash
            });
            // The scroll is handled by the InsuranceProducts component effect or we re-trigger it
            setTimeout(() => {
                const element = document.getElementById(targetHash.replace('#', ''));
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 300);

        } else {
            // We are on home
            if (queryParam) {
                // Update URL to trigger the effect in InsuranceProducts
                navigate({
                    pathname: '/',
                    search: `?category=${queryParam}`,
                    hash: targetHash
                }, { replace: true });
            }

            const element = document.getElementById(targetHash.replace('#', ''));
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center group">
                        <img className="h-12 w-auto group-hover:scale-105 transition-transform" src={jivanLogo} alt="JivanSecure Logo" />
                        <span className="ml-3 text-xl font-bold text-[#0f4c81]">JivanSecure</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <button onClick={() => handleNavClick('#home')} className="text-gray-700 hover:text-[#0f4c81] font-medium transition-colors">Home</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'motor')} className="text-gray-700 hover:text-[#0f4c81] font-medium transition-colors">Motor</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'health')} className="text-gray-700 hover:text-[#0f4c81] font-medium transition-colors">Health</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'life')} className="text-gray-700 hover:text-[#0f4c81] font-medium transition-colors">Life</button>
                        <button onClick={() => handleNavClick('/faq')} className="text-gray-700 hover:text-[#0f4c81] font-medium transition-colors">FAQ</button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#0f4c81] focus:outline-none p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-xl absolute w-full border-t border-gray-100">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <button onClick={() => handleNavClick('#home')} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0f4c81] font-medium rounded-lg transition-colors">Home</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'motor')} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0f4c81] font-medium rounded-lg transition-colors">Motor</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'health')} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0f4c81] font-medium rounded-lg transition-colors">Health</button>
                        <button onClick={() => handleNavClick('#insurance-products', 'life')} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0f4c81] font-medium rounded-lg transition-colors">Life</button>
                        <button onClick={() => handleNavClick('/faq')} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#0f4c81] font-medium rounded-lg transition-colors">FAQ</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
