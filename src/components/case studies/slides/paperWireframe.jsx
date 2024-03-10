import "./styles/paperWireframe.css";

const PaperWireframe = ({ projectPaperWireframe }) => {
  const { title, info, pwfPhoto, photoCap } = projectPaperWireframe;
  return (
    <div className="paperWireframe-container">
      <div className="paperWireframe-info">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className="paperWireframe-photo-main">
        <img src={pwfPhoto} alt="paper wire frame" />
        <p>{photoCap}</p>
      </div>
    </div>
  );
};

export default PaperWireframe;
