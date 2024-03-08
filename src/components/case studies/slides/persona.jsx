import "./styles/persona.css";

const Persona = ({ projectPersona }) => {
  const {
    icon,
    name,
    problem,
    paragrp,
    profileInfo,
    photo,
    personaName,
    personaQuote,
    profileInsight,
    personaBio,
  } = projectPersona;
  return (
    <div className="persona-container">
      <div className="persona-title-problem">
        <div className="persona-title">
          <img src={icon} alt="persona" />
          <h3>{name}</h3>
        </div>
        <div className="vLine"></div>
        <div className="persona-problem">
          <h5>{problem}</h5>
          <p>{paragrp}</p>
        </div>
      </div>
      <div className="persona-insigths">
        <div className="persona-insigths-profile">
          <div className="persona-profile">
            {profileInfo.map((e) => {
              return (
                <div key={e.id}>
                  <h6>{e.infoTitle}</h6>
                  <p>{e.infoDetails}</p>
                </div>
              );
            })}
          </div>
          <div className="vLine"></div>
          <div className="persona-photo">
            <img src={photo} alt="studentPersona" width="100%" />
          </div>
        </div>
        <div className="hLine"></div>
        <div className="persona-insigths-info">
          <div className="persona-name-quote">
            <h6>{personaName}</h6>
            <q>{personaQuote}</q>
          </div>
          {profileInsight.map((elm) => {
            return (
              <div className="persona-insigths-info-main" key={elm.id}>
                <h6>{elm.title}</h6>
                <div>
                  {elm.paragrp.map((e) => {
                    return <p key={e.id}>{e.para}</p>;
                  })}
                </div>
              </div>
            );
          })}
          <div className="persona-bio">
            <p>{personaBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persona;
