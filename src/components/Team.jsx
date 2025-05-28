import React from 'react'
import CommonHead from './CommonHead'
import member1 from "../images/Mask group.png";
import member2 from "../images/Picture.png";
import member3 from "../images/Mask group2.png";
import member4 from "../images/Picture (1).png";
import member5 from "../images/Picture (2).png";
import member6 from "../images/Picture (3).png";
import "../styles/Team.css"
const Team = () => {
    const teamMembers = [
      {
        name: "John Smith",
        title: "CEO and Founder",
        image: member1,
        experience:
          "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
      },
      {
        name: "Jane Doe",
        title: "Director of Operations",
        image: member2,

        experience:
          "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
      },
      {
        name: "Michael Brown",
        title: "Senior SEO Specialist",
        image: member3,
        experience:
          "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
      },
      {
        name: "Emily Johnson",
        title: "PPC Manager",
        image: member4,
        experience:
          "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
      },
      {
        name: " Brian Williams",
        title: "Social Media Specialist",
        image: member5,
        experience:
          "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
      },
      {
        


        name: "Sarah Kim",
        title: "Content Creator",
        image: member6,
        experience:
          "2+ years of experience in writing and editingSkilled in creating compelling, SEO-optimized content for various industries."
      },
    ];
    

  return (
    <>
      <CommonHead
        title={"Team"}
        description={
          <>
            Meet the skilled and experienced team behind our{" "}
            <br className="desktop-break" />
            successful digital marketing strategies
          </>
        }
      />

      <div className="Team_wrapper">
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <div className="team_header">
                <div className="img-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="profile-img"
                  />
                </div>
                <div className="team_header_content">
                  <h3 className="name">{member.name}</h3>
                  <p className="title">{member.title}</p>
                </div>
              </div>
              <hr className="divider" />
              <p className="experience">{member.experience}</p>
              <div className="linkedin-icon">in</div>
            </div>
          ))}
        </div>
      </div>
      <div className="team_button">
        <button>See all team</button>
      </div>
    </>
  );
}

export default Team