import React from 'react'

const PPC = () => {
  return (
    <div className="mt-[30px] md:mt-[70px]">
      <h2 className="text-2xl sm:text-3xl md:text-[40px] w-full md:max-w-[740px] font-[500] sm:leading-snug">
        By the Numbers: Facts About PPC and Organic Marketing
      </h2>
      <div className="max-w-7xl mx-auto px-4 py-7 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1 - Less width (e.g., 4/12) */}
        <div
          className="md:col-span-5 flex flex-col  justify-center items-center rounded-[40px] shadow-md border border-black p-6"
          style={{ boxShadow: "0px 5px 0px 0px #191A23" }}
        >
          <div className="flex flex-col justify-center items-start">
            <p className="text-[18px] font-[400] mb-3">
              Business earn an average of
            </p>
            <h2 className="text-2xl md:text-[30px] font-[500]">
              $2 for every $1 spent
            </h2>
            <p className="text-[18px] font-[400] mt-2">on PPC advertising.</p>
          </div>
        </div>

        {/* Card 2 - More width (e.g., 8/12) */}
        <div
          className="md:col-span-7 rounded-[40px] shadow-md border border-black p-[40px] bg-lime-300"
          style={{ boxShadow: "0px 5px 0px 0px #191A23" }}
        >
          <h2 className="text-2xl md:text-[30px] font-[500] text-black">
            41% of clicks
          </h2>
          <p className="text-black mt-3 text-[18px] font-[400]">
            on search engines go to the top three results, showing the
            importance of ranking highly
          </p>
        </div>

        {/* Card 3 - Wider card (e.g., 8/12) */}
        <div
          className=" flex justify-center items-center md:col-span-6 rounded-[40px] shadow-md border border-black p-6 bg-[#F3F3F3] "
          style={{ boxShadow: "0px 5px 0px 0px #191A23" }}
        >
          <div>
            <h2 className="text-2xl md:text-[30px] font-[500] text-black">
              41% of clicks
            </h2>
            <p className="text-[18px] font-[400] text-black mt-4 w-full md:max-w-[360px]">
              Content marketing costs{" "}
              <span className="text-[20px] font-[500]">
                62% less than paid ads
              </span>{" "}
              but generate{" "}
              <span className="text-[20px] font-[500]">3x as many leads</span>
            </p>
          </div>
        </div>

        {/* Card 4 - Narrower card (e.g., 4/12) */}
        <div
          className="md:col-span-6 rounded-[40px] shadow-md border border-black py-7 px-12 bg-[#0C0C15]"
          style={{ boxShadow: "0px 5px 0px 0px #191A23" }}
        >
          <h2 className="2text-xl md:text-[30px] font-[500] text-white">
            <span className="text-lime-300">53% </span>of all website traffic,
          </h2>
          <p className="text-white mt-[12px] text-[18px] font-[400]">
            organic search drives
          </p>
          <p className="text-white text-[18px] font-[400] mt-2 ml-2">
            making it the largest single source of traffic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PPC