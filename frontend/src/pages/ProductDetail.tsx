import { useParams, Link } from 'react-router-dom';
import { insuranceProducts } from '../constants/products';

export default function ProductDetail() {
    const { categoryId, productId } = useParams();

    const category = insuranceProducts.categories.find(c => c.id === categoryId);
    const product = category?.items.find(i => i.id === productId);

    if (!category || (productId !== 'details' && !product)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <Link to="/" className="text-[#0f4c81] hover:underline">Go Back Home</Link>
                </div>
            </div>
        )
    }

    const isCategoryDetails = productId === 'details';
    const title = isCategoryDetails ? `${category.label} Insurance` : product?.title;
    const description = isCategoryDetails ? category.description : product?.description;
    const icon = isCategoryDetails ? '🛡️' : product?.icon;

    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">

            {/* Header */}
            <div className="bg-[#0f4c81] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-6">{icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">{title}</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">{description}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="lead">
                            <strong>{title}</strong> is an essential financial tool designed to provide security and peace of mind.
                            At JivanSecure, we ensure you get the best market rates with comprehensive benefits tailored to your specific needs.
                        </p>

                        <h3 className="text-[#0f4c81]">Why Choose This Plan?</h3>
                        <ul className="space-y-4 my-6">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✔</span>
                                <span><strong>Financial Protection:</strong> Safeguard yourself and your loved ones against unforeseen financial liabilities.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✔</span>
                                <span><strong>Tax Benefits:</strong> Save on taxes under applicable sections (e.g., 80C, 80D) of the Income Tax Act.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✔</span>
                                <span><strong>Flexible Options:</strong> Customizable tenures, premium payment terms, and add-on riders.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 mt-1">✔</span>
                                <span><strong>Claim Support:</strong> 24/7 dedicated claim assistance team to help you in your time of need.</span>
                            </li>
                        </ul>

                        <h3 className="text-[#0f4c81]">Key Features</h3>
                        <p>
                            Our {title} plans come with a variety of features designed for modern needs. Whether you are looking for
                            affordability, extensive coverage, or investment growth, we have the right solution for you.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0f4c81] my-8">
                            <h4 className="text-[#0f4c81] m-0 mb-2 font-bold">Expert Advice</h4>
                            <p className="m-0 text-sm">
                                Not sure if this is the right plan? Talk to Satish Mishra directly for a personalized consultation based on your income and goals.
                            </p>
                        </div>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Secure Your Future?</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#contact" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
                                Get a Quote
                            </a>
                            <a href="tel:+919876543210" className="bg-white border border-[#0f4c81] text-[#0f4c81] hover:bg-[#0f4c81] hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
                                Call Now
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
