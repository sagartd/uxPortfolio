import "./styles/pointsCard.css";

const PointsCard = ({ projectPoints }) => {
  return (
    <div className="pointsCard-container">
      <div className="points-title">
        <img src={projectPoints.icon} alt="painpoints" />
        <h2>{projectPoints.title}</h2>
      </div>
      <div className="pointsCard-main">
        {projectPoints.points.map((e) => {
          return (
            <div key={e.id}>
              <div className="pointsCard-num">
                <h5>{e.id}</h5>
              </div>
              {e.point && <h6>{e.point}</h6>}
              <p>{e.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PointsCard;
