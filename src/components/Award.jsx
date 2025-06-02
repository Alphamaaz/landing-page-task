import React from 'react'
import CommonHeadAbout from './CommonHeadAbout'
import value2 from '../images/value1.png'
import value1 from '../images/value2.png'
import value3 from '../images/value3.png'
import value4 from '../images/value4.png'

const Award = () => {
    const data = [
      {
        image: value1,
        title: "Best Small Business Digital MArkiting Agency Of The Year",
        text: "Celebrating our services in delivering innovative strategies and measur- able results for small business clients.",
      },
      {
        image: value2,
        title: "Innovative Website Design",
        text: "Honoring our experts in developing visually stunn- ing, user-friednly websites that capture and boost conversions.",
      },
      {
        image: value3,
        title: "Top Performing PPC Campaign of the year",
        text: "Acknowledging our ability to design and executive a high-impact pay-per-click campaign that drove exceptional client results.",
      },
      {
        image: value4,
        title: "Expertise In Social Media Marketing",
        text: "Recognizing our exceptional skills in crafting effective social media strategies, managing accounts, and creating engage content.",
      },
    ];
  return (
    <div className='App md:mt-[110px]'>
      <CommonHeadAbout
        title={"Award & Recognition"}
        text={
          <>
            AtLaynova, our commitment to excellence has been recognized by
            <br className="desktop-break" />
            industry leaders. Here are some of our proudest achievements:
          </>
        }
        max_width={"1250px"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 md:mt-[60px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border rounded-[14px] bg-[var(--gray)] p-4 md:py-5 md:px-8 md:pb-4 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:shadow-[0px_4px_8px_0px_rgba(25,26,35,0.2)]"
          >
            {/* Centered Image Container */}
            <div className="w-full flex justify-center mb-4">
              <div className="w-[120px] md:w-[170px] h-auto flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full text-center md:text-left">
              <h4 className="text-lg md:text-[20px] font-medium md:font-[500] mt-2 md:mt-8">
                {item.title}
              </h4>
              <p className="text-sm md:text-[16px] font-normal md:font-[400] mt-2 md:mt-4 leading-normal">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Award