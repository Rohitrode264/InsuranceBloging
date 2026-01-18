import { useState } from 'react';
import { websiteContent } from '../constants/content';

export default function FAQ() {
    const { faq } = websiteContent;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81] font-serif mb-4">{faq.title}</h2>
                    <p className="text-gray-600 text-lg">{faq.subtitle}</p>
                </div>

                <div className="space-y-4">
                    {faq.items.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 ${openIndex === index
                                    ? 'border-[#4caf50] shadow-lg ring-1 ring-[#4caf50]/20'
                                    : 'border-gray-200 hover:border-blue-200'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold pr-8 ${openIndex === index ? 'text-[#0f4c81]' : 'text-gray-800'
                                    }`}>
                                    {item.question}
                                </span>
                                <span className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                    }`}>
                                    <svg className={`w-6 h-6 ${openIndex === index ? 'text-[#4caf50]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                                    {item.answer}
                                    {item.quote && (
                                        <div className="mt-4 pl-4 border-l-4 border-[#f59e0b] italic text-gray-500 bg-yellow-50/50 py-2 rounded-r">
                                            "{item.quote}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
