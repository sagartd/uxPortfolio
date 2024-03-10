import "./styles/digiWireframe.css";

const DigiWireframe = ({ projectDigiWireframe }) => {
  const { title, info, dwfPhoto, finding1, finding2, icon1, icon2, id } =
    projectDigiWireframe;
  return (
    <div className="digiWireframe-container">
      <div className="digiWireframe-info">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className="digiWireframe-photoMain">
        {finding1 && (
          <div className="digiWireframe-finding1 center-left">
            {icon1 && <img src={icon1} alt="arrowRight" />}
            <p>{finding1}</p>
          </div>
        )}
        <div className="digiWireframe-photo">
          <img src={dwfPhoto} alt="wireHome" />
        </div>

        <div
          className={`digiWireframe-finding2 
            ${id === 12 ? "top-right finding-direction" : "  bottom-right "}`}
        >
          {icon2 && <img src={icon2} alt="arrowLeft" />}
          <p>{finding2}</p>
        </div>
      </div>
    </div>
  );
};

export default DigiWireframe;
