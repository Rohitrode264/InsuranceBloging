import { websiteContent } from './content';

export const insuranceProducts = {
    categories: [
        {
            id: 'health',
            label: 'Health',
            description: "Comprehensive health coverage for you and your family.",
            items: [
                { id: 'mediclaim', title: "Mediclaim", icon: "🏥", description: "Basic hospitalization coverage." },
                { id: 'senior-citizen', title: "Senior Citizen", icon: "👴", description: "Specialized plans for seniors." },
                { id: 'family-plans', title: "Family Plans", icon: "👨‍👩‍👧‍👦", description: "Cover your entire family under one plan." },
                { id: 'maternity', title: "Maternity Plans", icon: "🤰", description: "Coverage for pregnancy and newborn expenses." },
                { id: 'critical-illness', title: "Critical Illness", icon: "🚑", description: "Lump sum payout for serious illnesses." },
                { id: 'personal-accident', title: "Personal Accident", icon: "🤕", description: "Financial protection against accidents." }
            ]
        },
        {
            id: 'life',
            label: 'Life',
            description: "Secure your family's financial future.",
            items: [
                { id: 'term', title: "Term Insurance", icon: "🛡️", description: "High coverage at low premiums." },
                { id: 'ulip', title: "ULIPs", icon: "📈", description: "Insurance + Investment benefits." },
                { id: 'savings', title: "Savings Plans", icon: "💰", description: "Guaranteed returns for your goals." },
                { id: 'pension', title: "Pension Plans", icon: "🏖️", description: "Secure your retirement income." },
                { id: 'child', title: "Child Insurance", icon: "🧸", description: "Secure your child's education and future." },
                { id: 'money-back', title: "Money Back", icon: "💵", description: "Periodic returns with life cover." }
            ]
        },
        {
            id: 'motor',
            label: 'Motor',
            description: "Protect your vehicle against damages and theft.",
            items: [
                { id: 'car-comprehensive', title: "Car Comprehensive", icon: "🚗", description: "Complete protection for your car." },
                { id: 'bike-comprehensive', title: "Bike Comprehensive", icon: "🏍️", description: "Complete protection for your bike." },
                { id: 'third-party', title: "Third Party", icon: "📋", description: "Mandatory liability coverage." },
                { id: 'own-damage', title: "Own Damage", icon: "💥", description: "Coverage for damages to your own vehicle." }
            ]
        }
    ],
    details: {
        // We can generate detailed content programmatically in the component if not strictly defined here, 
        // but having a structure helps. I'll add a helper to generating rich text for the detail page.
    }
};
