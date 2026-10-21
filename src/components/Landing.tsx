export default function Landing() {
  return (
    <section className="landing-section section-container" id="home" aria-labelledby="intro-title">
      <span id="landingDiv" />
      <div className="landing-intro">
        <p className="eyebrow">Hello! I'm</p>
        <h1 id="intro-title">YUVRAJ<br /><span>SINGH</span></h1>
        <p className="landing-role">AI &amp; ML Student</p>
        <a href="https://www.linkedin.com/in/imyuvraj-singh" target="_blank" rel="noopener noreferrer" className="hire-me-btn">Hire Me &rarr;</a>
      </div>
      <div className="hero-mark">
        <img src="/images/profile.jpg" alt="Yuvraj Singh" className="hero-img" width={440} height={440} />
      </div>
    </section>
  );
}
