import { websiteContent } from '../constants/content';
import heroBg from '../assets/images/hero_bg.png';

export default function Hero() {
    const { hero, form } = websiteContent;

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Financial Planning Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 hero-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6 animate-fade-in-up">
                        <div className="inline-block bg-[#4caf50]/20 backdrop-blur-sm border border-[#4caf50]/30 rounded-full px-4 py-1 text-[#4caf50] font-semibold text-sm mb-2">
                            #1 Trusted Financial Advisor
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 opacity-90 font-light max-w-lg">
                            {hero.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#contact" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {hero.cta}
                            </a>
                            <a href="#about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="w-full max-w-md ml-auto">
                        <div className="glass-card rounded-2xl p-8 transform hover:scale-[1.01] transition-duration-300">
                            <h3 className="text-2xl font-bold text-[#0f4c81] mb-2">{form.title}</h3>
                            <p className="text-gray-500 mb-6 text-sm">Fill in the details to get a personalized plan.</p>

                            <form className="space-y-4">
                                {form.fields.map((field, idx) => (
                                    <div key={idx}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                                        {field.type === 'select' ? (
                                            <div className="relative">
                                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none appearance-none bg-white">
                                                    <option value="" disabled selected>Select an option</option>
                                                    {field.options?.map((opt, i) => (
                                                        <option key={i} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        ) : (
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-shadow"
                                            />
                                        )}
                                    </div>
                                ))}

                                <button type="button" className="w-full bg-[#0f4c81] text-white font-bold py-3.5 rounded-lg hover:bg-[#0a355c] transition-colors shadow-lg mt-2">
                                    {form.button}
                                </button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    * Your information is 100% secure with us.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
