import { websiteContent } from '../constants/content';

export default function WhyChooseUs() {
    const { whyChooseUs } = websiteContent;

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81] font-serif mb-4">{whyChooseUs.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{whyChooseUs.description}</p>
                    <div className="inline-block bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
                        <p className="text-[#4caf50] font-medium italic">"{whyChooseUs.quote}"</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyChooseUs.features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0f4c81] transition-colors">
                                <span className="text-xl font-bold text-[#0f4c81] group-hover:text-white">{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0f4c81] transition-colors">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {feature.description}
                            </p>
                            {feature.quote && (
                                <p className="text-xs text-[#f59e0b] font-medium border-t pt-3 mt-auto">
                                    "{feature.quote}"
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
