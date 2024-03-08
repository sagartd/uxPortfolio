import "./styles/duplexCard.css";

const DuplexCard = ({ projectCards }) => {
  return (
    <div className="duplex-card-container">
      {projectCards?.data.map((elm) => {
        return (
          <div className="duplex-card-main" key={elm.id}>
            <div className="card-title">
              <img src={elm.icon} alt="impact" />
              <h5>{elm.title}</h5>
            </div>
            {elm?.paragrp.map((e) => {
              return (
                <div className="card-info" key={e.id}>
                  <p>{e.p}</p>
                  {e.q && <q>{e.q}</q>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DuplexCard;
