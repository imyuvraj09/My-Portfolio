import { FaGraduationCap, FaFlask, FaUsers } from "react-icons/fa6";

interface AchievementCard {
  id: string;
  title: string;
  label: string;
  icon: typeof FaGraduationCap;
  description?: string;
  roles?: string[];
}

const achievementsData: AchievementCard[] = [
  {
    id: "gate-2026",
    title: "GATE CS-IT 2026 Qualified",
    label: "Academic Achievement",
    icon: FaGraduationCap,
    description:
      "Qualified the Graduate Aptitude Test in Engineering (GATE) 2026 in Computer Science and Information Technology, demonstrating a strong foundation in core computer science concepts and problem-solving.",
  },
  {
    id: "srfp-2026",
    title: "Summer Research Fellowship — SRFP 2026",
    label: "Research Fellowship",
    icon: FaFlask,
    description:
      "Selected for the Summer Research Fellowship Programme jointly conducted by the Indian Academy of Sciences (IASc), Indian National Science Academy (INSA), and National Academy of Sciences, India (NASI). Conducted research at IISc Bengaluru and participated in scientific workshops at the Raman Research Institute (RRI), Bengaluru.",
  },
  {
    id: "leadership-communities",
    title: "Leadership & Communities",
    label: "Community Involvement",
    icon: FaUsers,
    roles: [
      "Community Member — Google Developer Group (GDG), MCKVIE Campus",
      "Member — IETE",
      "Campus Ambassador — E-Cell, IIT Bombay",
      "Community Member — Google Cloud",
      "Community Member — NVIDIA",
    ],
  },
];

export default function Achievements() {
  return (
    <section
      className="achievements-section section-container"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <h2 id="achievements-title">
        My <span>Achievements</span>
      </h2>
      <div className="achievements-grid">
        {achievementsData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon" aria-hidden="true">
                  <Icon />
                </div>
                <span className="achievement-label">{item.label}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              {item.description && (
                <p className="achievement-desc">{item.description}</p>
              )}
              {item.roles && (
                <ul className="achievement-list">
                  {item.roles.map((role) => (
                    <li key={role}>
                      <span className="achievement-bullet" aria-hidden="true" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
