const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-me">
        <h3 className="title" id="about-title">About Me</h3>
        <p className="para">
          I’m Yuvraj, a Computer Science undergraduate specializing in AI &amp; ML at MCKV Institute of Engineering, graduating in 2027. I qualified GATE CS-IT 2026 and hold a 9.62/10 CGPA. I enjoy turning ideas into working software, with a focus on practical AI applications.
        </p>
        <p className="para">
          During my research internship at <strong>IISc Bengaluru</strong>, I developed <strong>DislocationTrace</strong>, a web-based tool that applies computer vision to electron microscopy analysis. At Intel Unnati, I led a four-member team building an AI tutor for communities with limited connectivity. We reduced token consumption by <strong>40%</strong> and improved response latency by <strong>approximately 30%</strong> through context optimization and retrieval-pipeline improvements.
        </p>
        <p className="para">
          I’m currently developing a RAG-based legal AI assistant to make Indian legal information easier to find and understand. My focus is on building systems that provide grounded answers, respond efficiently, and work within real-world constraints. I’m seeking opportunities in <strong>AI/ML and software engineering</strong> where I can contribute, take ownership, and learn from experienced engineers.
        </p>
      </div>
    </section>
  );
};

export default About;

