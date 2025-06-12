import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react"; // Or wherever your icon is from

const ResponsiveCardGrid = ({data}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:mt-[100px] max-w-7xl mx-auto mt-10 p-4 rounded-[30px] bg-white md:border md:border-black md:shadow-[0px_5px_0px_0px_#191A23]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-0">
        {data.map((item, idx) => {
          const isFirstCol = idx % 3 === 0;
          const isLastCol = idx % 3 === 2;
          const isSecondRow = idx >= 3 && idx < 6;

          return (
            <div
              key={idx}
              className={`relative bg-white p-6 md:p-8 ${
                isDesktop
                  ? "rounded-none shadow-none"
                  : "rounded-2xl border border-black shadow-[0px_5px_0px_0px_#191A23]"
              }`}
            >
              {/* DESKTOP GRADIENT BORDERS */}
              {isDesktop && (
                <>
                  {/* Top border for second row only */}
                  {isSecondRow && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #FFFFFF 0%, #000000 49.52%, #FFFFFF 100%)",
                      }}
                    />
                  )}
                  {/* Right border (except last column) */}
                  {!isLastCol && (
                    <div
                      className="absolute top-0 bottom-0 right-0 w-[1px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #FFFFFF 0%, #000000 50%, #FFFFFF 100%)",
                      }}
                    />
                  )}
                </>
              )}

              {/* CARD CONTENT */}
              <h3 className="text-xl md:text-[28px] font-semibold leading-tight mb-2 md:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 text-[16px] md:text-[18px] mb-4">
                {item.description}
              </p>

              <div className="actions flex items-center gap-2 cursor-pointer">
                <span className="text-black font-medium text-base md:text-lg">
                  Learn More
                </span>
                <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[var(--primary-color)]">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveCardGrid;
