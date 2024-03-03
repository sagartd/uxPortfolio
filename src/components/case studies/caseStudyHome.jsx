import "./caseStudyHome.css";

const CaseStudyHome = ({ projectState }) => {
  const { name } = projectState.project;
  return <div className="caseStudyHome-container">{name}</div>;
};

export default CaseStudyHome;
