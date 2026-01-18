import { websiteContent } from '../constants/content';

export default function MissionVision() {
    const { mission, vision, experience } = websiteContent;

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81] font-serif mb-4">Our Core Values</h2>
                    <p className="text-gray-600 text-lg">Guided by a commitment to ethics, transparency, and long-term relationships.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mission Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0f4c81] hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0f4c81] transition-colors">
                            <svg className="w-8 h-8 text-[#0f4c81] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{mission.title}</h3>
                        <p className="text-sm font-semibold text-[#f59e0b] mb-4 italic">"{mission.quote}"</p>
                        <p className="text-gray-600 leading-relaxed">
                            {mission.content}
                        </p>
                    </div>

                    {/* Vision Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#4caf50] hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4caf50] transition-colors">
                            <svg className="w-8 h-8 text-[#4caf50] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{vision.title}</h3>
                        <p className="text-sm font-semibold text-[#f59e0b] mb-4 italic">"{vision.quote}"</p>
                        <p className="text-gray-600 leading-relaxed">
                            {vision.content}
                        </p>
                    </div>

                    {/* Experience Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#f59e0b] hover:shadow-2xl transition-all duration-300 group">
                        <div className="w-14 h-14 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] transition-colors">
                            <svg className="w-8 h-8 text-[#f59e0b] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{experience.description}</p>
                        <ul className="space-y-2 mb-4">
                            {experience.points.map((point, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                    <span className="mr-2 text-[#4caf50]">✔</span> {point}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-500 italic mt-auto border-t pt-2">
                            "{experience.footer}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
