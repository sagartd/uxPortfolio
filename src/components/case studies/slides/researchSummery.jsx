import "./styles/researchSummery.css";

const ResearchSummery = ({ projectResearch }) => {
  return (
    <div className="researchSummery-container">
      <div className="researchSummery-title">
        <img src={projectResearch.icon} alt="summery" />
        <h2>{projectResearch.title}</h2>
      </div>

      <div className="researchSummery-info">
        {projectResearch.paragrp.map((e) => {
          return <p key={e.id}>{e.para}</p>;
        })}
      </div>
    </div>
  );
};

export default ResearchSummery;
