// import "./styles/lofiProto.css";
import "./styles/prototype.css";

const Prototype = ({ projectPrototype }) => {
  const { title, info, pPhoto, linkCap, protoLink, icon } = projectPrototype;

  return (
    <div className="prototype-container">
      <div className="prototype-info">
        <div className="prototype-info-I">
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
        <div className="prototype-info-II">
          <h6 style={{ textAlign: "center" }}>{linkCap}</h6>
          <ul>
            {protoLink?.map((elm) => {
              return (
                <li key={elm.id}>
                  <a target="_blank" rel="noreferrer"  href={elm.link}>
                    <p>{elm.screen} </p>
                    <img className="chevronright1" src={icon} alt="right" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="prototype-photo-main">
        <img src={pPhoto} alt="prototype" />
      </div>
    </div>
  );
};

export default Prototype;
