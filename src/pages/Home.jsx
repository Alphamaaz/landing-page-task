import React from 'react'
import Hero from './../components/Hero';
import Partners from './../components/Partners';
import Services from './../components/Services';
import GetProposal from './../components/GetProposal';
import CaseStudies from './../components/CaseStudies';
import Accordians from './../components/Accordians';
import Team from './../components/Team';
import Testimonials from './../components/Testimonials';
import Contact from './../components/Contact';
import hero from "../images/hero.png";
import BreakHead from '../components/BreakHead';

const Home = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we'll discuss your business goals, target audience, and current marketing efforts. This discovery phase helps us understand your unique needs and craft a customized strategy that delivers measurable results.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content:
        "We conduct comprehensive market research, competitor analysis, and audience profiling to develop a data-driven strategy. Our team then creates a customized roadmap with clear KPIs, ensuring every tactic aligns with your business objectives and market opportunities.",
    },
    {
      number: "03",
      title: "Implementation",
      content:
        "Our experts execute the strategy with precision, deploying campaigns across selected channels while maintaining brand consistency. We handle everything from content creation and platform setup to technical implementation, ensuring seamless launch and operation.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "Through real-time performance tracking and A/B testing, we continuously refine campaigns for maximum impact. Our team makes data-backed adjustments to targeting, messaging, and budgets to improve ROI and capitalize on emerging opportunities.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content:
        "You'll receive transparent, monthly reports with clear metrics and actionable insights. Our regular strategy sessions ensure you understand performance drivers and maintain full visibility into your marketing investment's effectiveness.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content:
        "We don't stop at good results. By analyzing long-term trends and testing innovative approaches, we evolve your strategy to maintain competitive advantage. Our proactive optimizations ensure sustained growth in changing market conditions.",
    },
  ];
  return (
    <>
      <div className="App">
        <Hero
          img={hero}
          text={"Navigating the digital landscape for success"}
          desciption={
            "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social mediamarketing, and content creation."
          }
        />
        <Partners />
        <Services />
        <GetProposal />
        <CaseStudies />
        <BreakHead
          span1={"Our Working"}
          span2={"Process "}
          text={
            <>
              Step-by-Step Guide to Achieving <br className="desktop-break" />
              Your Business Goals
            </>
          }
        />
        <Accordians steps={[...steps]} mt={"35px"}/>
        <Team />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}

export default Home