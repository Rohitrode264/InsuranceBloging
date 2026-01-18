import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { insuranceProducts } from '../constants/products';
import BlogList from './BlogList';

export default function InsuranceProducts() {
    const [activeTab, setActiveTab] = useState(insuranceProducts.categories[0].id);
    const navigate = useNavigate();
    const location = useLocation();

    // Effect to handle URL query params for switching tabs
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category && insuranceProducts.categories.some(c => c.id === category)) {
            setActiveTab(category);
            // Optionally scroll to section if needed, but Navbar handles scrolling primarily
            const element = document.getElementById('insurance-products');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.search]);

    const activeCategory = insuranceProducts.categories.find(c => c.id === activeTab);

    const handleCardClick = (category: string, itemId: string) => {
        navigate(`/insurance/${category}/${itemId}`);
        window.scrollTo(0, 0);
    };

    return (
        <section id="insurance-products" className="py-16 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] font-serif mb-6">
                        Types Of <span className="text-[#4caf50]">Insurance</span> Products
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-center space-x-8 mb-8 border-b border-gray-200">
                        {insuranceProducts.categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`pb-4 text-lg font-medium transition-all relative ${activeTab === category.id
                                    ? 'text-[#0f4c81]'
                                    : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                {category.label}
                                {activeTab === category.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-[#4caf50] rounded-t-full transition-all duration-300"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        {activeCategory?.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center animate-fade-in">
                    {activeCategory?.items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleCardClick(activeCategory.id, item.id)}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[#4caf50]/30 group flex flex-col items-center text-center transform hover:-translate-y-1 h-full"
                        >
                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#0f4c81] transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => navigate(`/insurance/${activeCategory?.id}/details`)}
                        className="text-[#0f4c81] font-semibold flex items-center justify-center mx-auto hover:text-[#4caf50] transition-colors"
                    >
                        Learn More About {activeCategory?.label} <span className="ml-2">→</span>
                    </button>
                </div>

                <div className="mt-16">
                    <BlogList category={activeTab} />
                </div>
            </div>
        </section>
    );
}
