import "./styles/studyFindings.css";
const StudyFindings = ({ projectFinding }) => {
  const { title, icon, data } = projectFinding;
  return (
    <div className="studyFindings-container">
      <div className="studyFindings-title">
        <img src={icon} alt="studyFindings" />
        <h2>{title}</h2>
      </div>
      <div className="studyFindings-card-main">
        {data?.map((elm) => {
          return (
            <div className="studyFindings-card" key={elm.id}>
              <h5>{elm.info}</h5>
              <div className="studyFindings-card-finding-main">
                {elm.data.map((e) => {
                  return (
                    <div className="studyFindings-card-finding" key={e.id}>
                      <div className="studyFindings-card-num">
                        <h5>{e.id}</h5>
                      </div>
                      <p>{e.info}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudyFindings;
