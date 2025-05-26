import React from 'react'
import proposal from "../images/proposal.svg"
import "../styles/Proposals.css"
const GetProposal = () => {
  return (
    <div className="propsal_wrapper">
      <div className="propsal_left">
        <h3>Let’s make things happen</h3>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button>Get your free proposal</button>
      </div>
      <div className="propsal_right">
        <img src={proposal} alt="" />
      </div>
    </div>
  );
}

export default GetProposal