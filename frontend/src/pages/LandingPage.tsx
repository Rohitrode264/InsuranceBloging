import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import FounderMessage from '../components/FounderMessage';
import WhyChooseUs from '../components/WhyChooseUs';
import InsuranceProducts from '../components/InsuranceProducts';

export default function LandingPage() {
    return (
        <>
            <Hero />
            <About />
            <InsuranceProducts />
            <MissionVision />
            <FounderMessage />
            <WhyChooseUs />
        </>
    );
}
