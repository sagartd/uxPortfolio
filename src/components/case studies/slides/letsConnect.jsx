import "./styles/researchSummery.css";

const LetsConnect = ({ projectConnect }) => {
  const { title, icon1, icon2, paragrp, contactMail } = projectConnect;
  return (
    <div className="researchSummery-container">
      <div className="researchSummery-title">
        <img src={icon1} alt="connect" />
        <h2>{title}</h2>
      </div>
      <div className="researchSummery-info">
        <p>{paragrp}</p>
        <div className="researchSummery-contact">
          <img src={icon2} alt="mail" />
          <a href="mailto:saagartakore@gmail.com" target="_blank">
            {contactMail}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
