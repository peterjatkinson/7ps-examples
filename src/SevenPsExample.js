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
  },
  {
    name: "SolarHaven, a solar-powered home system",
    product: "A renewable energy home system providing solar panels, battery storage, and energy monitoring.",
    price: "Tiered pricing with government subsidies, financing options, and pay-per-use energy credits.",
    place: "Available online and through authorized energy retailers.",
    promotion: "Environmental campaigns, community workshops, and social media ads.",
    people: "Solar energy specialists and customer service support for installation and troubleshooting.",
    process: "Online consultations, quick installation, and remote energy usage monitoring.",
    "physical evidence": "Sleek panel designs, branded installation tools, and energy usage reports."
},
{
    name: "GreenGrocery, a sustainable grocery delivery service",
    product: "A grocery delivery service that offers organic and sustainably sourced products, with carbon-neutral deliveries.",
    price: "Subscription-based pricing with free delivery on orders above a certain threshold and discounts on bulk purchases.",
    place: "Accessible via a dedicated website and mobile app, delivering across urban areas.",
    promotion: "Referral discounts, social media ads, and partnerships with eco-friendly brands.",
    people: "Drivers trained in environmental practices and customer service agents knowledgeable about sustainable products.",
    process: "Seamless ordering system, with delivery tracking and easy returns for unsatisfactory items.",
    "physical evidence": "Reusable packaging, eco-friendly delivery vehicles, and digital receipts."
},
{
    name: "EcoWear, sustainable fashion brand",
    product: "Clothing made from recycled and ethically sourced materials, focusing on eco-friendly production.",
    price: "Premium pricing with frequent discounts for returning customers and eco-conscious buyers.",
    place: "Available online and in select eco-friendly clothing stores.",
    promotion: "Influencer collaborations, fashion shows, and sustainability-driven marketing campaigns.",
    people: "Sustainability consultants and fashion designers, along with ethical supply chain partners.",
    process: "Online ordering with fast shipping, flexible returns, and size customization options.",
    "physical evidence": "Recyclable packaging, clothing care instructions, and ethical fashion labels."
},
{
    name: "HydroFlow, smart irrigation systems",
    product: "Automated, water-saving irrigation systems for gardens and farms using smart sensors and weather data.",
    price: "Competitive pricing with various system packages based on the size of the land, and financing options.",
    place: "Available on the company website and through garden equipment retailers.",
    promotion: "Targeted online ads, partnerships with gardening influencers, and exhibitions at agriculture fairs.",
    people: "Trained installation experts and customer service technicians for ongoing support.",
    process: "Quick setup process, mobile app control, and real-time irrigation data monitoring.",
    "physical evidence": "Branded sprinkler heads, installation kits, and a mobile app interface."
},
{
    name: "HealthyBites, meal delivery service",
    product: "Nutritionist-curated, healthy meal plans delivered to your door, focusing on organic ingredients.",
    price: "Subscription-based pricing, with options for weekly and monthly meal plans, offering discounts for long-term commitments.",
    place: "Available through a website and mobile app, delivering nationwide.",
    promotion: "Referral programs, social media marketing, and influencer collaborations focusing on fitness.",
    people: "Certified chefs and nutritionists, along with trained customer service for meal customizations.",
    process: "Simple online ordering, meal tracking, and customizable plans.",
    "physical evidence": "Branded meal containers, eco-friendly packaging, and meal preparation guides."
},
{
    name: "CleanAir, smart air purifier",
    product: "An advanced air purifier with smart controls, real-time air quality monitoring, and HEPA filters.",
    price: "Mid-range pricing with bundled offers for larger spaces or multiple units.",
    place: "Available online through e-commerce platforms and electronics stores.",
    promotion: "Email marketing, influencer partnerships, and environmental health campaigns.",
    people: "Expert customer service reps trained in product features and maintenance support.",
    process: "Easy online ordering, fast delivery, and setup guides with an integrated mobile app.",
    "physical evidence": "Stylish, modern purifier units, branded filters, and user-friendly app interface."
},
{
    name: "BioFuel, renewable energy car",
    product: "An electric car that runs on renewable biofuels and has a range comparable to conventional cars.",
    price: "Premium pricing with government incentives and financing plans for eco-conscious customers.",
    place: "Available through exclusive dealerships and online order reservations.",
    promotion: "Sustainability campaigns, influencer partnerships, and eco-conscious community events.",
    people: "Automotive engineers and customer service agents knowledgeable in renewable energy.",
    process: "Smooth test drive booking system and fast delivery times for online orders.",
    "physical evidence": "Sleek design, branded accessories, and dealership displays focused on sustainability."
},
{
    name: "PureSkin, eco-friendly skincare",
    product: "A skincare line made from all-natural, organic ingredients, with a focus on sustainability.",
    price: "Mid-range pricing with bundled sets and discounts for loyalty program members.",
    place: "Available online and in select organic beauty stores.",
    promotion: "Influencer campaigns, beauty blog partnerships, and targeted social media ads.",
    people: "Skincare specialists and customer service agents offering skin consultations.",
    process: "Simple online purchasing, loyalty programs, and fast, eco-friendly shipping.",
    "physical evidence": "Eco-friendly packaging, branded containers, and ingredient transparency on the website."
},
{
    name: "BambooSleep, sustainable bedding",
    product: "Bedding made from bamboo fibers, offering breathable, hypoallergenic, and sustainable sleep solutions.",
    price: "Competitive pricing with bundled offers for bedroom sets and discounts for first-time buyers.",
    place: "Available online and in home goods stores focused on sustainable living.",
    promotion: "Partnerships with eco-conscious influencers, referral programs, and email marketing.",
    people: "Customer service reps knowledgeable about sustainable living and product care.",
    process: "Fast shipping, easy returns, and a hassle-free ordering process.",
    "physical evidence": "Eco-friendly packaging, branded bedding sets, and care instructions focused on sustainability."
},
{
    name: "CycleSmart, electric bicycle",
    product: "A foldable electric bicycle with a lightweight frame and long battery life, designed for urban commuting.",
    price: "Mid-to-premium pricing with payment plans, tax incentives, and trade-in options for older bikes.",
    place: "Available online, in select bike shops, and through pop-up events in major cities.",
    promotion: "Targeted social media ads, influencer partnerships, and participation in urban mobility events.",
    people: "Sales staff and mechanics trained in electric bike technology.",
    process: "Streamlined online ordering, test ride bookings, and after-sales service support.",
    "physical evidence": "Branded bicycles, charging stations, and user manuals focused on maintenance."
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
        aria-label={`Generate next 7Ps marketing mix example (${currentExample + 1}/15)`}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-8 transition duration-300 w-full md:w-auto"
      >
        Generate another example ({currentExample + 1}/15)
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