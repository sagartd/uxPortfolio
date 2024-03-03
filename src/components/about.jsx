import  "./about.css";
const Aboutme = () => {
  return (
    <section className="aboutme-container">
      <div className="aboutme-main">
        <p>
          Driven and innovative UI/UX front-end developer with a passion for
          crafting exceptional user experiences. With a robust blend of design
          acumen and technical proficiency, I specialize in creating intuitive
          interfaces that seamlessly merge functionality with aesthetics.
        </p>
        <p>
          UI/UX: Proficient in user-centered design principles, conducting
          comprehensive user research, and translating insights into compelling
          design solutions that elevate user satisfaction.
        </p>
        <p>
          Front-End Development: Adept in HTML, CSS, and JavaScript along with
          React to build responsive and interactive web applications.
        </p>
        <p>
          Design Thinking: Strong ability to conceptualize ideas from wireframes
          to high-fidelity prototypes, focusing on user flows, information
          architecture, and visual design elements.
        </p>
        <p>
          Problem Solver: Adept at analyzing complex problems and implementing
          innovative solutions that improve usability and enhance the overall
          user experience.
        </p>
        <p>Project:</p>
        <ul className="project-list">
          <li>QuickMeals: A food delivery mobile app design and fully responsive web design.</li>
          <li>CRE: Currency rate calculator fully responsive design for social good.</li>
          <li>Teerex: E-commerce platform, a web app.</li>
        </ul>
        <p>Education:</p>
        <p>
          Master's Degree in Computer Application from Pune University, Google
          UX Design Professional Certificate. Continuously expanding skill set
          through workshops, online courses, and staying updated with emerging
          technologies and design trends.
        </p>
      </div>
      <div className="portimg">
        <img src="portfolio.png" alt="Portrait of the author" />
      </div>
    </section>
  );
};

export default Aboutme;

