import React from 'react'
import CommonHeadAbout from './CommonHeadAbout'
import succes from '../images/success.png'
import transparncy from '../images/transparency.png'
import annovation from "../images/annovation.png";
import collabortion from "../images/collaboration.png";

const CareValues = () => {

    const data = [
      {
        image: succes,
        title: "Client Sucess First",
        text: "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
      },
      {
        image: annovation,
        title: "Innovation",
        text: "We constantly strive to stay ahead of industry trends.",
      },
      {
        image: collabortion,
        title: "Collaboration",
        text: "We believe in the power of teamwork and partnership.",
      },
      {
        image: transparncy,
        title: "Transparency",
        text: "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.",
      },
    ];
  return (
    <div>
      <CommonHeadAbout
        title={"Care Values"}
        text={"At the heart of everything we do are our core values:"}
        max_width={"1100px"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-[40px] gap-4 md:gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row border border-black p-4 md:py-10 md:px-6 bg-white rounded-xl md:rounded-[45px] shadow-[0px_3px_0px_0px_#191A23] md:shadow-[0px_5px_0px_0px_#191A23] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_8px_0px_0px_#191A23]"
          >
            {/* Text Content */}
            <div className="w-full md:w-[60%] order-2 md:order-1">
              <h3 className="text-xl md:text-[30px] font-medium text-[#191A23]">
                {item.title}
              </h3>
              <div className="w-full h-[1px] bg-black my-2 md:my-7"></div>
              <p className="text-sm md:text-[18px] font-normal text-gray-700">
                {item.text}
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-[40%] order-1 md:order-2 mb-4 md:mb-0 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[200px] md:max-w-400px h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareValues