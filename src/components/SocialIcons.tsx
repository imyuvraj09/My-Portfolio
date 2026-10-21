import {
  FaGithub,
  FaLinkedinIn,
  FaOrcid,
} from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <span>
          <a aria-label="GitHub" href="https://github.com/imyuvraj09" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/imyuvraj-singh" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a aria-label="LeetCode" href="https://leetcode.com/u/imyuvraj09" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a aria-label="HackerRank" href="https://www.hackerrank.com/profile/imyuvraj09" target="_blank" rel="noopener noreferrer">
            <SiHackerrank />
          </a>
        </span>
        <span>
          <a
            aria-label="ORCID profile"
            title="ORCID"
            href="https://orcid.org/0009-0000-4934-6799"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOrcid />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;

