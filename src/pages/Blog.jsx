import React from 'react'
import Hero from '../components/Hero';
import hero from '../images/business.png'
import BlogSec from '../components/BlogSec';
import PPC from '../components/PPC';
import BlogSec2 from '../components/BlogSec2';
import ResponsiveCardGrid from '../components/UseServices';
const Blog = () => {
  const articles = [
    {
      title: "10 SEO Myths You Need to Stop Believing",
      description: "Separate fact from fiction and stop wasting time on outdated SEO practices."
    },
    {
      title: "Maximizing ROI with Social Media Advertising",
      description: "Use smart ad spend and platform targeting to get the most out of your marketing dollars."
    },
    {
      title: "How Content Marketing Fuels Long-Term Growth",
      description: "Content marketing is more than a buzzword—here's how to make it work for your business."
    },
    {
      title: "The Art of A/B Testing: Perfecting Your Campaigns",
      description: "Small tweaks can lead to big wins. Here's how to test and optimize like a pro."
    },
    {
      title: "Understanding Google's Latest Algorithm Update",
      description: "What changed, what stayed the same, and what it means for your rankings."
    },
    {
      title: "5 Ways AI is Changing Digital Marketing",
      description: "From personalization to automation, explore the latest AI-driven marketing trends."
    }
  ];
  return (
    <div className='px-[30px] md:px-[100px] '>
      <Hero
        img={hero}
        text={
          "PPC vs. Organic Marketing: Which One Is Right for Your Business?"
        }
        desciption={
          "PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance."
        }
      />
      <BlogSec/>
      <PPC/>
      <BlogSec2/>
      <ResponsiveCardGrid data={articles}/>
    </div>
  );
}

export default Blog