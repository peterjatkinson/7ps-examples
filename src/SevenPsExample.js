import React, { useState } from 'react';

const examples = [
  {
    name: "EcoSmart, a sustainable smartphone",
    product: "An eco-friendly smartphone made from recycled materials, with solar charging and modular components for easy repairs and upgrades.",
    price: "Competitively priced with premium smartphones, offering flexible payment plans and trade-in discounts for old devices.",
    place: "Available online, in major electronics stores, and through pop-up shops in eco-conscious markets.",
    promotion: "Social media campaigns, influencer partnerships, targeted ads, and a virtual launch event focused on sustainability.",
    people: "Customer service and sales teams trained in both technical support and the product's environmental benefits.",
    process: "Streamlined online purchasing, easy returns, and eco-friendly, transparent supply chain operations.",
    "physical evidence": "Minimalist, recyclable packaging, biodegradable accessories, and retail stores using sustainable materials."
  },
  {
    name: "FitPro, a virtual fitness studio",
    product: "A subscription-based online platform offering live and on-demand fitness classes, personalized workout plans, and nutrition guidance.",
    price: "Tiered subscription model with a free trial, monthly and annual plans, and group discounts for families or businesses.",
    place: "Accessible via web browsers and mobile apps on iOS and Android devices.",
    promotion: "Partnerships with fitness influencers, referral programs, and targeted social media advertising.",
    people: "Certified fitness instructors, nutritionists, and responsive customer support team.",
    process: "User-friendly class booking system, seamless video streaming, and progress tracking features.",
    "physical evidence": "High-quality video production, branded workout gear available for purchase, and virtual community forums."
  },
  {
    name: "GreenGrow, an urban farming solution",
    product: "Compact, modular hydroponic systems for growing vegetables and herbs in small urban spaces.",
    price: "Mid-range pricing with options to finance larger systems, and a subscription model for nutrient refills and plant pods.",
    place: "Direct-to-consumer online sales, partnerships with home improvement stores, and urban gardening expos.",
    promotion: "Educational content marketing, collaboration with cooking shows, and local community garden initiatives.",
    people: "Horticulturists for product development, customer service reps with gardening expertise, and installation technicians.",
    process: "Guided setup process, mobile app for monitoring plant growth, and scheduled maintenance reminders.",
    "physical evidence": "Sleek, modern design of growing units, informative packaging with seed-to-harvest timelines, and vibrant plant imagery in marketing materials."
  },
  {
    name: "SwiftServe, a food delivery platform",
    product: "A mobile app connecting local restaurants with customers for food delivery and takeout orders.",
    price: "Commission-based model for restaurants, with variable delivery fees for customers based on distance and demand.",
    place: "Available on iOS and Android devices, with a web interface for restaurants to manage orders.",
    promotion: "Geo-targeted push notifications, loyalty programs, and partnerships with local food festivals.",
    people: "Network of vetted delivery drivers, 24/7 customer support team, and account managers for restaurant partners.",
    process: "Real-time order tracking, integrated payment systems, and automated dispatch for efficient delivery routing.",
    "physical evidence": "Branded delivery bags, uniforms for drivers, and in-app restaurant ratings and reviews."
  },
  {
    name: "EduQuest, an interactive learning platform",
    product: "A gamified e-learning platform offering courses in various subjects for K-12 students.",
    price: "Monthly subscription model with family plans and school district bulk licensing options.",
    place: "Cloud-based platform accessible via web browsers and dedicated mobile apps.",
    promotion: "Teacher referral programs, educational conference sponsorships, and targeted ads during school breaks.",
    people: "Curriculum developers, game designers, and education specialists for content creation and customer support.",
    process: "Adaptive learning algorithms, progress tracking for parents and teachers, and seamless integration with school management systems.",
    "physical evidence": "Engaging user interface with avatars and achievements, printable certificates for completed courses, and detailed analytics dashboards."
  }
];

const SevenPsExample = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const generateNewExample = () => {
    const nextExample = (currentExample + 1) % examples.length;
    setCurrentExample(nextExample);
    setAnnouncement(`New example loaded: ${examples[nextExample].name}`);
  };

  const example = examples[currentExample];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex flex-col items-center justify-start p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8 text-center">7Ps marketing mix examples</h1>
      <button 
        onClick={generateNewExample}
        aria-label={`Generate next 7Ps marketing mix example (${currentExample + 1}/5)`}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-8 transition duration-300 w-full md:w-auto"
      >
        Next example ({currentExample + 1}/5)
      </button>
      <div className="bg-white shadow-xl w-full md:max-w-4xl md:rounded-lg overflow-hidden">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">{example.name}</h2>
          <dl>
            {Object.entries(example).slice(1).map(([key, value]) => (
              <div key={key} className="mb-4">
                <dt className="font-semibold text-gray-700 text-lg">
                  {key === 'physical evidence' 
                    ? 'Physical evidence' 
                    : key.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
                </dt>
                <dd className="text-gray-600 mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div aria-live="assertive" className="sr-only">
        {announcement}
      </div>
    </div>
  );
};

export default SevenPsExample;