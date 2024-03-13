import "./styles/mockup.css";

const Mockup = ({ projectMockup }) => {
  const { title, info, icon, photoBefore, imgCap1, photoAfter, imgCap2 } =
    projectMockup;
  return (
    <div className="mockup-container">
      <div className="mockup-info-main">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className="mockup-photo-main">
        <div className="mockup-photo-beforeAfter">
          <p>{imgCap1}</p>
          <img src={photoBefore} alt="itemListBefore" />
        </div>
        <img src={icon} alt="arrowLeft" />
        <div className="mockup-photo-beforeAfter">
          <p>{imgCap2}</p>
          <img src={photoAfter} alt="itemListAfter" />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
