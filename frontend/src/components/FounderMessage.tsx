import { websiteContent } from '../constants/content';
import founderImg from '../assets/images/satish_mishra.png';

export default function FounderMessage() {
    const { founderMessage } = websiteContent;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#0f4c81] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-white font-serif mb-1">{founderMessage.title}</h2>
                                <p className="text-[#f59e0b] font-medium tracking-wide uppercase text-sm">{founderMessage.role}</p>
                            </div>

                            <blockquote className="text-xl md:text-2xl font-light text-white/90 italic mb-8 border-l-4 border-[#4caf50] pl-6">
                                "{founderMessage.quote}"
                            </blockquote>

                            <div className="prose prose-lg text-gray-300 leading-relaxed whitespace-pre-line mb-8">
                                {founderMessage.content}
                            </div>

                            <div className="mt-auto">
                                <div className="text-2xl font-handwriting text-white font-bold">{founderMessage.signature}</div>
                            </div>
                        </div>

                        <div className="relative h-96 md:h-full">
                            <img
                                src={founderImg}
                                alt="Satish Mishra Founder"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c81] to-transparent md:bg-gradient-to-r md:from-[#0f4c81] md:to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
