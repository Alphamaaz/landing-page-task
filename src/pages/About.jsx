import React from 'react'
import hero from "../images/about.png";
import left from "../images/wavy2.png";
import right from "../images/wavy.png";
import Hero from '../components/Hero';
import CommonHeadAbout from '../components/CommonHeadAbout';
import TimelineSection from '../components/Timeline';
import CareValues from '../components/CareValues';
import Group from '../components/Group';
import Award from '../components/Award';
import JoinTeam from '../components/JoinTeam';
import BreakHead from './../components/BreakHead';
import proposal from "../images/j_team.png";

const About = () => {
  const data = [
    { number: "8+", label: "Years Of Experience" },
    { number: "50+", label: "Experts" },
    { number: "100+", label: "Successful Campaigns" },
    { number: "20+", label: "Industry Awards" },
    { number: "500%", label: "Role For Our Clients" },
  ];
  return (
    <>
      <div className=" mb-5">
        <div className="App ">
          <Hero
            text={"Together for Success"}
            img={hero}
            desciption={
              "At Laynova, we help business grow by combining creativity, innovation, and data- driven strategies. Together, we build a future of shared success."
            }
          />
        </div>
        <div className="App ">
          <BreakHead
            span1={"Our Impact"}
            span2={"In Numbers"}
            gap={"200px"}
            text={
              <>
                A snapshot of the milestones and achievements that drive our{" "}
                <br className="desktop-break" /> success
              </>
            }
          />

          {/* our impact section */}

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 mt-8 md:mt-[70px] ">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`mt-4 py-6 md:py-10 flex flex-col items-center justify-center border-t-2 border-black rounded-[25px] 
        ${idx === 0 ? "md:rounded-tl-none" : ""}
        ${idx === 4 ? "md:rounded-tr-none" : ""}
        ${idx === 4 ? "col-span-2 sm:col-span-2 md:col-span-1" : ""}
      `}
              >
                <div className="text-3xl md:text-[40px] font-medium md:font-[500]">
                  {item.number}
                </div>
                <div className="text-base md:text-[18px] font-normal md:font-[400] mt-1 md:mt-2 text-center">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* our journey section */}

        <div className="mt-[30px] md:mt-[40px]"></div>
        <div className="App ">
          <CommonHeadAbout
            title={"Our Journey"}
            text={
              <>
                From humble beginnings to industry leaders, discover how{" "}
                <br className="desktop-break" />
                positive has evolved to drive success for business worldwide.
              </>
            }
            max_width={"100%"}
          />
        </div>
        {/* first card */}
        <div>
          <TimelineSection
            title={"The Beginning"}
            date={2020}
            text={
              <>
                Laynova was founded to help businesses navigate the digital
                world and achieve online <br className="desktop-break" />{" "}
                success.
              </>
            }
          />
        </div>

        {/* second card */}
        <div className="flex md:justify-end relative items-center">
          <img
            src={left}
            alt="left"
            className="hidden md:flex md:absolute left-0  h-auto max-w-[250px]"
          />
          <TimelineSection
            title={"Industry Recognition"}
            date={2021}
            text={
              "Laynova was named among the top 50 global digital agencies, affirming our leadership."
            }
          />
        </div>
        {/* 3rd card */}
        <div className="relative items-center">
          <img
            src={right}
            alt="right"
            className="hidden md:flex md:absolute right-0  h-auto max-w-[250px]"
          />
          <TimelineSection
            title={"Innovation and Growth"}
            date={2022}
            text={
              <>
                With over 50 experts, we continue to deliver cutting-edge
                solutions to help businesses thrive.
              </>
            }
          />
        </div>
        {/* 4th card */}
        <div className="flex md:justify-end">
          <TimelineSection
            title={"Leading the Future"}
            date={2023}
            text={
              <>
                This year, Laynova is pioneering the use of AI and automation to
                deliver even more personalized, data-driven strategies and
                setting new standards in digital marketing.
              </>
            }
          />
        </div>

        {/* care values section */}

        <CareValues />

        {/* group section */}
        <div className="App ">
          <Group />
        </div>
        {/* Awards and recognitions */}
        <Award />

        {/* join our team section  */}
        <div className="App ">
          <JoinTeam
            title={"Join Our Team"}
            text={
              "At Laynova, we thrive on innovation and collaboration. We're alwayslooking for passionate individuals to join our team and helpbusinesses grow. Ready to make an impact?"
            }
            button_txt={"Explore Careers"}
            img={proposal}
          />
        </div>
      </div>
    </>
  );
}

export default About