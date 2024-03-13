import "./styles/mockup.css";
import "./styles/mockup2.css";

const Mockup2 = ({ projectMockup }) => {
  const { title, info, icon, photo1, photo2, photo3, pcap1, pcap2 } =
    projectMockup;
  return (
    <div className="mockup-container">
      <div className="mockup-info-main">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className="mockup-photo-main">
        {photo1 && (
          <div className="mockup-photo-beforeAfter">
            <p>{pcap1}</p>
            <img src={photo1} alt="cartBefore" />
          </div>
        )}
        {icon && <img src={icon} alt="arrowLeft" />}
        {photo3 && (
          <div className="mockup-photo-after">
            <p>{pcap2}</p>
            <div className="mockup-photo-afterImage">
              <img src={photo2} alt="cartAfter1" />
              <img src={photo3} alt="cartAfter2" />
            </div>
          </div>
        )}
        {photo2 && (
          <div className="mockup-photo-afterMain">
            <p>{pcap2}</p>
            <img src={photo2} alt="cartAfter3" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mockup2;
