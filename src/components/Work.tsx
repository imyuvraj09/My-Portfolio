import WorkImage from "./WorkImage";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tools: string;
  description: string;
  image: string;
  imageAlt: string;
  placeholderText?: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: "dislocation-trace",
    number: "01",
    title: "DislocationTrace: Automated TEM Dislocation Analysis",
    category: "Computer Vision & Scientific Computing",
    year: "2026",
    tools: "Python, Computer Vision, Image Processing, Scientific Computing, Web Development, Git",
    description:
      "Developed during my research internship at IISc Bengaluru, DislocationTrace helps researchers analyze transmission electron microscopy images. The web-based framework combines image processing, diffraction-vector indexing, and dislocation reconstruction to automate trace analysis and identify Burgers vectors using crystallographic validation.",
    image: "/images/dislocation_trace.png",
    imageAlt: "DislocationTrace: Automated TEM Dislocation Analysis",
    placeholderText: "DislocationTrace — Preview coming soon",
    liveUrl: "https://dislocationtrace.netlify.app/",
  },
  {
    id: "legal-assistant",
    number: "02",
    title: "RAG-Enhanced LLM Legal Assistant for India",
    category: "Generative AI & Information Retrieval",
    year: "2026–Present",
    tools: "LangChain, FAISS, Hugging Face, LLM APIs, Streamlit, Git",
    description:
      "Developing an AI assistant that makes Indian legal information easier to search and understand. It combines semantic retrieval with document chunking, query reformulation, and source-grounded prompting to retrieve relevant information from Indian legal documents and reduce unsupported responses.",
    image: "/images/legal_ai.webp",
    imageAlt: "RAG-Enhanced LLM Legal Assistant for India",
    liveUrl: "",
  },
  {
    id: "ai-education-tutor",
    number: "03",
    title: "AI Education Tutor for Remote India",
    category: "Generative AI & Education",
    year: "2026",
    tools: "Python, LangChain, Hugging Face, LLM APIs, Streamlit, Git",
    description:
      "Built an AI tutor for communities with limited bandwidth and intermittent connectivity. Reduced token overhead by approximately 40% and improved response latency by approximately 30% through context optimization and inference-pipeline improvements. Designed the system to handle connectivity interruptions gracefully.",
    image: "/images/ai_educator.webp",
    imageAlt: "AI Education Tutor for Remote India",
    liveUrl: "",
  },
];

const isValidLiveUrl = (url?: string): boolean => {
  if (!url) return false;
  const trimmed = url.trim();
  if (
    trimmed === "" ||
    trimmed === "#" ||
    trimmed.toLowerCase().includes("placeholder") ||
    trimmed.toLowerCase().includes("example.com")
  ) {
    return false;
  }
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
};

const Work = () => {
  return (
    <div className="work-section" id="projects">
      <span id="work" />
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => {
            const hasValidLiveUrl = isValidLiveUrl(project.liveUrl);
            return (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.number}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>
                        {project.category} · {project.year}
                      </p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p className="work-tools">{project.tools}</p>
                  <p className="work-desc">{project.description}</p>
                </div>
                <WorkImage
                  image={project.image}
                  alt={project.imageAlt}
                  placeholderText={project.placeholderText}
                />
                <div className="project-card-footer">
                  {hasValidLiveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                    >
                      View Live Project ↗
                    </a>
                  ) : (
                    <span className="project-live-badge">
                      Live link coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;

