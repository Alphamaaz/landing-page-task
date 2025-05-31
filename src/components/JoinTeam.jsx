import React from 'react'
import proposal from "../images/j_team.png";
const JoinTeam = () => {
   return (
     <div className=" bg-[var(--primary-color)] mt-10 md:mt-[70px] flex flex-col md:flex-row justify-between items-center  rounded-[20px] md:rounded-[45px] shadow-[0px_3px_0px_0px_#191A23] border border-black md:shadow-[0px_5px_0px_0px_#191A23]">
       <div
         className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl px-6 py-10 md:px-12 md:py-16 border-black border-border-[#191A23] ;
"
       >
         <h3 className="text-3xl md:text-[40px] font-medium md:font-[500] leading-tight ">
           Join Our Team
         </h3>
         <p className="text-base md:text-[20px] font-normal md:font-[400] mt-4 md:mt-6">
           At Laynova, we thrive on innovation and collaboration. We're always
           looking for passionate individuals to join our team and help
           businesses grow. Ready to make an impact?
         </p>
         <button className="bg-black text-white text-lg md:text-[20px] py-3 px-6 md:py-5 md:px-7 rounded-[14px] mt-6 md:mt-8 hover:bg-gray-500 transition-colors">
           Explore Careers
         </button>
       </div>
       {/* Image - centered and responsive */}
       <div className="w-full md:w-auto flex justify-center">
         <img
           src={proposal}
           alt="Laynova team working together"
           className="max-w-full h-auto object-contain max-h-[300px] md:max-h-[400px]  rounded-[20px] md:rounded-[45px]"
         />
       </div>
     </div>
   );
}

export default JoinTeam