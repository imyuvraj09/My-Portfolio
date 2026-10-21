
const Education = () => {
  return (
    <section className="education-section section-container" id="education" aria-labelledby="education-heading">
      <div className="education-container">
        <h2 id="education-heading">Education</h2>
        <div className="education-list">
          {/* 1. Bachelor of Technology */}
          <div className="education-card education-card-featured">
            <div className="education-main">
              <h3 className="education-qualification">Bachelor of Technology — Computer Science &amp; Engineering</h3>
              <p className="education-specialization">Specialization: Artificial Intelligence &amp; Machine Learning</p>
              <h4 className="education-institution">MCKV Institute of Engineering</h4>
              <p className="education-meta">
                <span>West Bengal, India</span>
                <span className="education-bullet" aria-hidden="true">•</span>
                <span>Expected graduation: 2027</span>
              </p>
            </div>
            <div className="education-aside">
              <span className="education-period">2023–2027</span>
              <span className="education-badge">CGPA: 9.62 / 10</span>
            </div>
          </div>

          {/* 2. Higher Secondary */}
          <div className="education-card">
            <div className="education-main">
              <h3 className="education-qualification">Higher Secondary — Class XII</h3>
              <p className="education-specialization">Stream: Physics, Chemistry &amp; Mathematics</p>
              <h4 className="education-institution">Delhi Public School</h4>
              <p className="education-meta">
                <span>Bokaro Steel City, Jharkhand</span>
                <span className="education-bullet" aria-hidden="true">•</span>
                <span>CBSE</span>
              </p>
            </div>
            <div className="education-aside">
              <span className="education-badge">70%</span>
            </div>
          </div>

          {/* 3. Secondary */}
          <div className="education-card">
            <div className="education-main">
              <h3 className="education-qualification">Secondary — Class X</h3>
              <h4 className="education-institution">Saraswati Shishu Vidya Mandir</h4>
              <p className="education-meta">
                <span>Bokaro Steel City, Jharkhand</span>
                <span className="education-bullet" aria-hidden="true">•</span>
                <span>Jharkhand Academic Council</span>
              </p>
            </div>
            <div className="education-aside">
              <span className="education-badge">92%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

