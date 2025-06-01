import React from 'react'
import CommonHeadAbout from './CommonHeadAbout'
import seo from "../images/seo.png"
import seo2 from "../images/seo (2).png"
import seo3 from "../images/seo (3).png"
import seo4 from "../images/seo (4).png"
import seo5 from "../images/seo (5).png"
import seo6 from "../images/seo (6).png"
import ServicesCards from './ServicesCards'

const OtherServices = () => {
  return (
    <div className="md:mt-[50px]">
      <CommonHeadAbout
        title={"Our Other Services"}
        text={
          <>
            At our digital marketing agency, we offer a range of sercices to{" "}
            <br className="desktop-break" />
            businesses to grow and succeed online. this services include:
          </>
        }
        max_width={"80%"}
      />

      <div>
        <div className="services_cards md:mt-4">
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo}
            action_txt_color={"var(--dark)"}
          />
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo2}
            action_txt_color={"var(--dark)"}
          />
        </div>
        <div className="services_cards">
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo3}
            action_txt_color={"var(--dark)"}
          />
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo4}
            action_txt_color={"var(--dark)"}
          />
        </div>
        <div className="services_cards">
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo5}
            action_txt_color={"var(--dark)"}
          />
          <ServicesCards
            title_color={"#FFFFFF"}
            bg_color={"var(--gray)"}
            action_bg_color={"var(--dark)"}
            txt_color={"#FFFFFF"}
            text="Search engine "
            text2={"optimization"}
            img={seo6}
            action_txt_color={"var(--dark)"}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherServices