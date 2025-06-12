import React from 'react'
import PricingCard from '../components/PricingCard';
import Accordians from './../components/Accordians';
import BreakHead from '../components/BreakHead';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$500",
      per: "/month",
      bgColor: "bg-white",
      textColor: "text-black",
      buttonColor: "bg-black text-white",
      features: [
        "Social media setup and management (1 platform)",
        "Website optimization",
        "Email support",
        "Monthly progress report",
        "Initial SEO audit",
        "Basic competitor analysis",
      ],
    },
    {
      title: "Pro Plan",
      price: "$1000",
      per: "/month",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonColor: "bg-lime-400 text-black",
      isPopular: true,
      features: [
        "Includes all from the Basic Plan",
        "PPC and campaign management",
        "Email and phone support",
        "Social media setup and management (up to 3 platforms)",
        "On-page SEO improvements",
        "Monthly content recommendations",
      ],
    },
    {
      title: "Elite Plan",
      price: "$2000",
      per: "/month",
      bgColor: "bg-white",
      textColor: "text-black",
      buttonColor: "bg-black text-white",
      features: [
        "Includes all from the Pro Plan",
        "Website design SEO strategy",
        "Social media setup and management (up to 5 platforms)",
        "Content marketing strategy and implementation",
        "Comprehensive SEO strategy",
        "In-depth analytics and reporting",
      ],
    },
  ];
  const faqData = [
    {
      number: "01",
      title: "Are there any additional fees or charges that may apply?",
      content:
        "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
    },
    {
      number: "02",
      title: "Can I change or cancel my plan at any time?",
      content:
        "Yes, you can modify or cancel your plan at any time with no penalties. We provide flexible options to upgrade, downgrade, or cancel your subscription as your business needs evolve.",
    },
    {
      number: "03",
      title: "Do you offer a free trial consultation?",
      content:
        "Absolutely! We offer a free 30-minute consultation to discuss your marketing goals and how we can help. This allows you to understand our approach before committing to any services.",
    },
    {
      number: "04",
      title: "How do you bill and invoice your clients?",
      content:
        "We bill monthly in advance for retainer services, and provide detailed invoices with a breakdown of all services. We accept various payment methods including credit cards, bank transfers, and online payment platforms.",
    },
    {
      number: "05",
      title: "Are your services guaranteed to deliver results?",
      content:
        "While we can't guarantee specific rankings or traffic numbers (as search algorithms constantly change), we guarantee our work quality and commitment. We provide regular performance reports and adjust strategies as needed to maximize your ROI.",
    },
    {
      number: "06",
      title: "Do you offer contract-based or monthly retainer-based pricing?",
      content:
        "We offer both options! You can choose between flexible month-to-month retainers or discounted contract-based pricing (typically 6-12 month agreements) depending on your business needs and budget.",
    },
  ];
  
  return (
    <div className="mt-[40px] md:mt-[110px] px-[30px] md:px-[100px] ">
      <div className="flex flex-col w-full md:max-w-[500px] ">
        <h1 className="text-center md:text-start text-[40px] md:text-[60px] font[500] ">
          Pricing
        </h1>
        <p className="text-center md:text-start text-[15px] text-[20px] font[400] mt-2 md:mt-5"> 
          Elevaate your online presence: Competitive Pricing for Exceptional
          results.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 md:mt-12 ">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

        <BreakHead span1={"Frequently Asked"} span2={"Questions"} />
      <Accordians steps={[...faqData]} mt={"25px"}/>
    </div>
  );
}

export default Pricing