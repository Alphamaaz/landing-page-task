import React from 'react'
import "../styles/Services.css"
import ServicesCards from './ServicesCards'
import img1 from "../images/Illustration.svg";
import img2 from "../images/Illustration (1).svg";
import img4 from "../images/illustartion2.png";
import img3 from "../images/illustration3.png";
import img5 from "../images/illustration6.png";
import img6 from "../images/illustration5.png";
import CommonHead from './CommonHead';
const Services = () => {
  return (
    <>
      <CommonHead
        title={"Services"}
        description={
          <>
            At our digital marketing agency, we offer a range of services to
            <br /> help businesses grow and succeed online. These services
            include:
          </>
        }
      />

      <div className="services_cards">
        <ServicesCards
          title_color={"var(--primary-color)"}
          bg_color={"var(--gray)"}
          action_bg_color={"var(--dark)"}
          txt_color={"var(--primary-color)"}
          text="Search engine "
          text2={"optimization"}
          img={img1}
          action_txt_color={"var(--dark)"}
        />
        <ServicesCards
          title_color={"var(--gray)"}
          bg_color={"var(--primary-color)"}
          action_bg_color={"var(--dark)"}
          txt_color={"var(--primary-color)"}
          text="Pay-per-click "
          text2={"advertising"}
          img={img2}
          action_txt_color={"var(--dark)"}
        />
      </div>
      <div className="services_cards2">
        <ServicesCards
          title_color={"var(--gray)"}
          bg_color={"var(--dark)"}
          action_bg_color={"var(--gray)"}
          txt_color={"var(--dark)"}
          text="Social Media "
          text2={"Marketing"}
          img={img3}
          action_txt_color={"var(--gray)"}
        />
        <ServicesCards
          title_color={"var(--primary-color)"}
          bg_color={"var(--gray)"}
          action_bg_color={"var(--dark)"}
          txt_color={"var(--primary-color)"}
          text={"Email "}
          text2={"Marketing"}
          img={img4}
          action_txt_color={"var(--dark)"}
        />
      </div>
      <div className="services_cards2">
        <ServicesCards
          title_color={"var(--gray)"}
          bg_color={"var(--primary-color)"}
          action_bg_color={"var(--dark)"}
          txt_color={"var(--primary-color)"}
          text={" Content "}
          text2={"Creation"}
          img={img5}
          action_txt_color={"var(--dark)"}
        />
        <ServicesCards
          title_color={"var(--gray)"}
          bg_color={"var(--dark)"}
          action_bg_color={"var(--gray)"}
          txt_color={"var(--dark)"}
          text="Analytics and "
          text2={"Tracking"}
          img={img6}
          action_txt_color={"var(--gray)"}
        />
      </div>
    </>
  );
}

export default Services