import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaOrcid } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import ContactForm from "./ContactForm";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      className="contact-section section-container"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-container">
        <h2 id="contact-heading" className="contact-main-heading">
          Contact <span>Me</span>
        </h2>

        <div className="contact-two-col-grid">
          {/* LEFT COLUMN — Get in touch */}
          <div className="contact-left-col">
            <h3 className="contact-col-heading">Get in touch</h3>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <MdOutlineEmail />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email</span>
                  <a
                    href="mailto:yuvrajsinghias09122004@gmail.com"
                    className="contact-detail-value"
                  >
                    yuvrajsinghias09122004@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <MdOutlinePhone />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Phone</span>
                  <a href="tel:+919835235672" className="contact-detail-value">
                    +91 9835235672
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <MdOutlineLocationOn />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">West Bengal, India</span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon" aria-hidden="true">
                  <FaLinkedinIn />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/imyuvraj-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-value"
                  >
                    Yuvraj Singh
                  </a>
                </div>
              </div>
            </div>

            {/* Compact social-icon row */}
            <div className="contact-social-row" aria-label="Social profiles">
              <a
                href="https://github.com/imyuvraj09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="contact-social-btn"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/imyuvraj09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="contact-social-btn"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.hackerrank.com/profile/imyuvraj09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
                className="contact-social-btn"
              >
                <SiHackerrank />
              </a>
              <a
                href="https://orcid.org/0009-0000-4934-6799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID profile"
                title="ORCID"
                className="contact-social-btn"
              >
                <FaOrcid />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Send me a message */}
          <div className="contact-right-col">
            <ContactForm />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer-bar centered-footer">
          <p className="footer-copyright">
            © {currentYear} Yuvraj Singh. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
