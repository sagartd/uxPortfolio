import "./caseStudyHome.css";
import DuplexCard from "./slides/duplexCard";
import NavSlide from "./slides/navSlide";
import ProjectIntro from "./slides/projectIntro";
import ResearchSummery from "./slides/researchSummery";
import Welcome from "./slides/welcome";
import PointsCard from "./slides/pointsCard";
import Persona from "./slides/persona";
import JourneyMap from "./slides/journeyMap";
import PaperWireframe from "./slides/paperWireframe";
import DigiWireframe from "./slides/digiWireframe";
import Prototype from "./slides/prototype";

const CaseStudyHome = ({
  projectState,
  slideState,
  setSlidestate,
  slideNavState,
}) => {
  const { data, name, angleButton, logo } = projectState.project;
  const slide = data[slideState];

  const renderSlideComponent = () => {
    switch (slide.id) {
      case 0:
        return <Welcome projectWc={slide} />;
      case 1:
        return <ProjectIntro projectIntro={slide} />;
      case 2:
      case 3:
        return <DuplexCard projectCards={slide} />;
      case 4:
      case 9:
        return <NavSlide projectSlide={slide} slideNavState={slideNavState} />;
      case 5:
        return <ResearchSummery projectResearch={slide} />;
      case 6:
        return <PointsCard projectPoints={slide} />;
      case 7:
        return <Persona projectPersona={slide} />;
      case 8:
        return <JourneyMap projectJourneyMap={slide} />;
      case 10:
        return <PaperWireframe projectPaperWireframe={slide} />;
      case 11:
      case 12:
        return <DigiWireframe projectDigiWireframe={slide} />;
      case 13:
      case 19:
        return <Prototype projectPrototype={slide} />;
      default:
        return null;
    }
  };

  return (
    <div className="caseStudyHome-container">
      <div className="caseStudyHome-main">
        <div
          className={slideState === 0 ? "welcomeSlide-main" : "allSlide-main"}
        >
          {renderSlideComponent()}
        </div>
        <div className="caseStudyHome-nav-main">
          <img src={logo} width={"50px"} alt={name} />

          <div className="caseStudyHome-nav">
            <div style={{ cursor: "pointer" }}>
              <button
                onClick={() => setSlidestate((prev) => Math.max(prev - 1, 0))}
                style={{ height: "25px" }}
                disabled={slideState === 0}
                className={`${slideState === 0 ? "turnoff" : ""}`}
              >
                <img className="chevronleft" src={angleButton} alt="right" />
              </button>
            </div>
            <div>
              <input
                type="range"
                name=""
                id=""
                className="slider"
                min={0}
                max={data.length - 1}
                value={slideState}
                onChange={(e) => setSlidestate(e.target.value)}
              />
            </div>
            <div style={{ cursor: "pointer" }}>
              <button
                onClick={() =>
                  setSlidestate((prev) => Math.min(prev + 1, data.length - 1))
                }
                disabled={slideState === data.length - 1}
                style={{ height: "25px" }}
                className={`${slideState === data.length - 1 ? "off" : ""}`}
              >
                <img className="chevronright" src={angleButton} alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHome;
