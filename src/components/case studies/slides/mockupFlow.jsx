import "./styles/mockupFlow.css";

const MockupFlow = ({ projectMockup }) => {
  const { title, photos } = projectMockup;
  return (
    <div className="mockup-flow-container">
      <h3>{title}</h3>
      <div className="mockup-flow-imgWrapper">
        {photos?.map((e) => (
          <img src={e.image} alt={`mockupflow ${e.id}`} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default MockupFlow;
