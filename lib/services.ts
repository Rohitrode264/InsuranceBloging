import { IMAGES } from './assets';

export interface ServiceDetail {
    title: string;
    category: string;
    image: string;
    description: string;
    fullContent: {
        intro: string;
        benefits: { title: string; desc: string }[];
        analysis: string;
        conclusion: string;
    };
    price: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
    'family-floater-plans': {
        title: 'Family Floater Plans',
        category: 'Health Insurance',
        image: IMAGES.HEALTH.FAMILY,
        price: 'Starts ₹8,000/yr',
        description: 'Comprehensive coverage for 2 adults and up to 3 children.',
        fullContent: {
            intro: 'In an era where personal health is the ultimate wealth, Family Floater Plans offer a strategic shield for your entire household. Unlike individual policies, a floater plan centralizes your coverage, ensuring that every family member—from the breadwinners to the youngest children—is protected under a single, robust umbrella.',
            benefits: [
                { title: 'Unified Sum Insured', desc: 'A common pool of insurance that can be utilized by any member of the family as needed.' },
                { title: 'Tax Efficiency', desc: 'Secure tax deductions under Section 80D for premiums paid for self, spouse, and children.' },
                { title: 'Seamless Inclusion', desc: 'Easily add new family members or newborn babies into the existing policy infrastructure.' }
            ],
            analysis: 'Statistical data shows that family health emergencies are rarely simultaneous. By pooling the sum insured, you maximize the utility of every rupee spent on premiums, providing higher coverage for any single individual when they need it most.',
            conclusion: 'Investing in a Family Floater is not just about medical bills; it is about the peace of mind that comes from knowing your loved ones are never more than a phone call away from the best medical care available.'
        }
    },
    'senior-citizen-care': {
        title: 'Senior Citizen Care',
        category: 'Health Insurance',
        image: IMAGES.HEALTH.SENIOR,
        price: 'Starts ₹15,000/yr',
        description: 'Specialized plans covering age-related ailments with minimal waiting.',
        fullContent: {
            intro: 'Retirement should be a period of serenity, not medical anxiety. Our Senior Citizen Care plans are architected specifically to handle the unique health challenges that come with age, focusing on ease of access and comprehensive support.',
            benefits: [
                { title: 'Short Waiting Periods', desc: 'Reduced waiting times for pre-existing diseases, often as low as 12-24 months.' },
                { title: 'AYUSH Coverage', desc: 'Reimbursement for alternative treatments like Ayurveda and Homeopathy.' },
                { title: 'Free Annual Checkups', desc: 'Proactive health monitoring to detect issues before they become critical.' }
            ],
            analysis: 'As we age, the frequency of outpatient visits and chronic management increases. Our selected plans prioritize high OPD limits and low co-payment clauses to ensure financial freedom for the elderly.',
            conclusion: 'Graceful aging is a right. We help you secure it with advice that respects the nuances of silver-age healthcare.'
        }
    },
    'critical-illness': {
        title: 'Critical Illness',
        category: 'Health Insurance',
        image: IMAGES.HEALTH.CRITICAL,
        price: 'Starts ₹5,000/yr',
        description: 'Lump sum benefit for cancer, heart, and kidney related issues.',
        fullContent: {
            intro: 'While standard health insurance covers hospital bills, a Critical Illness cover protects your lifestyle. It provides a massive lump-sum payout upon diagnosis of life-altering conditions, allowing you to focus on recovery without financial pressure.',
            benefits: [
                { title: 'Lump Sum Payout', desc: 'Get the entire sum insured on the first diagnosis of any listed critical illness.' },
                { title: 'Income Replacement', desc: 'Use the funds to pay off debts or replace lost income during treatment.' },
                { title: 'Global Treatment', desc: 'Freedom to seek medical excellence anywhere in the world with the received payout.' }
            ],
            analysis: 'Critical illness treatment often involves long-term rehabilitation and lifestyle changes that regular insurance doesn\'t cover. This plan bridges that vital financial gap.',
            conclusion: 'Don\'t let a diagnosis dictate your future. Take control with a strategic critical illness buffer.'
        }
    },
    'term-life-insurance': {
        title: 'Term Life Insurance',
        category: 'Life Insurance',
        image: IMAGES.LIFE.TERM,
        price: 'Starts ₹10,000/yr',
        description: 'Pure protection plans with high sum assured at low premiums.',
        fullContent: {
            intro: 'Term Life Insurance is the purest form of financial love. It ensures that in your absence, your family\'s dreams—their home, education, and lifestyle—continue exactly as you envisioned.',
            benefits: [
                { title: 'High Sum Assured', desc: 'Secure multi-crore coverage at premiums that cost less than a daily cup of coffee.' },
                { title: 'Debt Protection', desc: 'Ensure that your home loans and liabilities are not inherited by your family.' },
                { title: 'Rider Flexibility', desc: 'Add-ons for disability, accidental death, and waiver of premium.' }
            ],
            analysis: 'A good rule of thumb is to have cover 15-20 times your annual income. We help you calculate the precise human life value to ensure neither over nor under-insurance.',
            conclusion: 'Legacy is built over a lifetime but secured in a single moment of planning. Secure your term cover today.'
        }
    },
    'endowment-plans': {
        title: 'Endowment Plans',
        category: 'Life Insurance',
        image: IMAGES.LIFE.ENDOWMENT,
        price: 'Customized',
        description: 'Guaranteed returns with insurance cover for disciplined savings.',
        fullContent: {
            intro: 'Combine the security of insurance with the discipline of savings. Endowment plans provide a guaranteed maturity benefit, making them the perfect instrument for long-term goal realization.',
            benefits: [
                { title: 'Guaranteed Maturity', desc: 'Know exactly how much you will receive at the end of the policy term.' },
                { title: 'Bonus Additions', desc: 'Participate in the profits of the insurance company through annual bonuses.' },
                { title: 'Liquidity Options', desc: 'Facility to take loans against the policy after a few years of premium payment.' }
            ],
            analysis: 'For risk-averse investors, endowment plans offer a "set and forget" strategy that builds significant wealth over decades while protecting the family.',
            conclusion: 'Balance your portfolio with the certainty of an endowment strategy.'
        }
    },
    'child-education': {
        title: 'Child Education',
        category: 'Life Insurance',
        image: IMAGES.LIFE.CHILD,
        price: 'Customized',
        description: 'Secure your child’s future milestones even in your absence.',
        fullContent: {
            intro: 'Education is the greatest gift a parent can provide. Our specific child plans ensure that your daughter or son\'s educational milestones are funded, no matter what of life\'s uncertainties come your way.',
            benefits: [
                { title: 'Waiver of Premium', desc: 'If something happens to the parent, all future premiums are waived, and the maturity benefit stays intact.' },
                { title: 'Milestone Payouts', desc: 'Periodic payments timed precisely with higher education requirements.' },
                { title: 'Goal Protection', desc: 'Ensures the education corpus is never diverted for other emergencies.' }
            ],
            analysis: 'Education inflation in India is significantly higher than general inflation. Professional planning is essential to ensure your child isn\'t limited by financial constraints.',
            conclusion: 'Invest in their potential today. Secure their university dreams tomorrow.'
        }
    },
    'comprehensive-car': {
        title: 'Comprehensive Car',
        category: 'Motor Insurance',
        image: IMAGES.MOTOR.CAR,
        price: 'Based on IDV',
        description: 'Own damage + Third party liability cover with cashless claims.',
        fullContent: {
            intro: 'Your vehicle is more than just transport; it\'s an investment in mobility. Comprehensive car insurance protects against everything from natural disasters to third-party liabilities.',
            benefits: [
                { title: 'Zero-Depreciation', desc: 'Get the full brand-new value of spare parts during claims.' },
                { title: 'No Claim Bonus', desc: 'Huge discounts on renewal premiums for careful drivers.' },
                { title: 'Cashless Network', desc: 'Direct settlement with over 5,000 premium workshops nationwide.' }
            ],
            analysis: 'Modern cars have complex sensors and expensive tech. Standard policies often leave you with huge out-of-pocket costs unless properly rider-optimized.',
            conclusion: 'Drive with confidence, knowing your asset is protected by a world-class motor policy.'
        }
    },
    'two-wheeler': {
        title: 'Two Wheeler',
        category: 'Motor Insurance',
        image: IMAGES.MOTOR.TWO_WHEELER,
        price: 'Starts ₹1,000/yr',
        description: 'Multi-year policies to save you from annual renewal hassles.',
        fullContent: {
            intro: 'Navigating Indian roads requires agility and protection. Our two-wheeler insurance plans provide robust coverage for your bike or scooter at highly competitive rates.',
            benefits: [
                { title: 'Multi-Year Policies', desc: 'Lock in premiums for up to 3 years and avoid annual price hikes.' },
                { title: 'Quick Renewals', desc: 'Instant policy issuance with zero inspection for renewals.' },
                { title: 'Theft Protection', desc: 'High IDV payouts to ensure you can replace your ride if it\'s stolen.' }
            ],
            analysis: 'Two-wheelers are vulnerable to theft and minor accidents. A strategic policy ensures minor repairs don\'t drain your monthly budget.',
            conclusion: 'Affordable, efficient, and essential protection for your two-wheeled companion.'
        }
    },
    'valid-commercial': {
        title: 'Valid Commercial',
        category: 'Motor Insurance',
        image: IMAGES.MOTOR.COMMERCIAL,
        price: 'Customized',
        description: 'Coverage for taxis and commercial vehicles.',
        fullContent: {
            intro: 'For businesses that move, insurance is a critical operational component. Our commercial vehicle insurance is designed to minimize downtime and protect your business assets.',
            benefits: [
                { title: 'High Liability Cover', desc: 'Extensive protection against third-party property damage and injury.' },
                { title: 'Fleet Discounts', desc: 'Optimized pricing for companies managing multiple vehicles.' },
                { title: 'Towing Assistance', desc: 'Heavy-duty recovery services to get your vehicle to the nearest workshop fast.' }
            ],
            analysis: 'Commercial vehicles are on the road longer and face higher risks. A specialized plan is necessary to handle the legal and financial complexities of commercial transport.',
            conclusion: 'Keep your business moving with JivanSecure\'s commercial motor expertise.'
        }
    }
};
