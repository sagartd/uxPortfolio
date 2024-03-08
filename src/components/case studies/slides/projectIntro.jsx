import "./styles/projectIntro.css";

const ProjectIntro = ({ projectIntro }) => {
  const { introInfo, introImg } = projectIntro;
  return (
    <>
      <div className="intro-info-main">
        {introInfo?.map((elm) => {
          return (
            <div className="theproductInfo" key={elm.id}>
              <div>
                <img src={elm.icon} alt="theproduct" />
                <h5>{elm.title}</h5>
              </div>
              <p>{elm.paragrp}</p>
            </div>
          );
        })}
      </div>
      <div className="intro-img">
        <img src={introImg} alt="intro screen" height={"100%"} />
      </div>
    </>
  );
};

export default ProjectIntro;
