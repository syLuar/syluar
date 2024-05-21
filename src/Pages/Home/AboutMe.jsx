export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">A little about myself...</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a Computer Science undergraduate at Nanyang Technological University, with
            expertise in fullstack development and artificial intelligence.
          </p>
          <p className="hero--section-description">
            Currently, I am interning as a Software Engineer at Assurity Govtech where I
            work on novel tools aimed at scam prevention.
          </p>
        </div>
      </div>
    </section>
  );
}
