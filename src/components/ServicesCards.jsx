import React from "react";
import { ArrowUpRight } from "lucide-react";
const ServicesCards = ({ bg_color, action_bg_color,text ,img ,txt_color,title_color,action_txt_color,text2}) => {
  return (
    <div className="service_card" style={{ backgroundColor: `${bg_color}` }}>
      <div className="card_content">
        <div className="card_inner">
          <div className="flex flex-col ">
            <span className="h3" style={{ backgroundColor: `${title_color}` }}>
              {text}
            </span>
            
            <span className="h3" style={{ backgroundColor: `${title_color}` }}>
              {text2}
            </span>
          </div>
          <div className="card_action">
            {" "}
            <span
              className="card_action_btn"
              style={{ backgroundColor: `${action_bg_color}` }}
            >
              <ArrowUpRight color={txt_color} />
            </span>{" "}
            <span
              className="action_txt"
              style={{ color: `${action_txt_color}` }}
            >
              Learn more
            </span>
          </div>
        </div>
        <div className="service_img_div">
          <img src={img} alt="illustration_image" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
