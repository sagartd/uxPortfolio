import "./styles/welcome.css";

const Welcome = ({ projectWc }) => {
  const { projectTitle, author } = projectWc;
  return (
    <>
      <h1>{projectTitle}</h1>
      <hr />
      <h5>{author}</h5>
    </>
  );
};

export default Welcome;
