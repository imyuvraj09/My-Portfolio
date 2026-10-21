import HoverLinks from "./HoverLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <>
      <nav className="header" aria-label="Main navigation">
        <a href="#home" aria-label="Yuvraj Singh, Home" className="navbar-logo">
          <span>YS</span>
        </a>
        <div className="header-right">
          <ul>
            <li>
              <a data-href="#home" href="#home">
                <HoverLinks text="Home" />
              </a>
            </li>
            <li>
              <a data-href="#education" href="#education">
                <HoverLinks text="Education" />
              </a>
            </li>
            <li>
              <a data-href="#experience" href="#experience">
                <HoverLinks text="Experience" />
              </a>
            </li>
            <li>
              <a data-href="#projects" href="#projects">
                <HoverLinks text="Projects" />
              </a>
            </li>
            <li>
              <a data-href="#skills" href="#skills">
                <HoverLinks text="Skills" />
              </a>
            </li>
            <li>
              <a data-href="#achievements" href="#achievements">
                <HoverLinks text="Achievements" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="Contact" />
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

    </>
  );
};

export default Navbar;
