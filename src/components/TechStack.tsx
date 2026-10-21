import { 
  SiPython, SiJavascript, SiC, SiCplusplus, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiSpringboot, SiBootstrap, SiHibernate,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiPandas, SiNumpy,
  SiMysql, SiMongodb, SiOracle,
  SiDocker,
  SiGit, SiGithub, SiAmazon, SiVercel, SiNpm, SiPostman, SiNvidia,
  SiFigma,
  SiHuggingface, SiStreamlit, SiLangchain
} from "react-icons/si";
import { FaJava, FaBrain, FaNetworkWired, FaEye, FaRobot } from "react-icons/fa6";
import { 
  TbSql, TbVectorTriangle, TbApi, TbComponents, 
  TbChartDots, TbChartHistogram, TbInfinity, 
  TbDatabaseSearch, TbMessageChatbot, TbServerBolt, TbBinaryTree 
} from "react-icons/tb";
import { MdOutlineTranslate, MdAutoAwesome } from "react-icons/md";
import { VscTerminal } from "react-icons/vsc";

const skills = [
  // Languages: Python, Java, JavaScript, C, C++, HTML, CSS, SQL
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "SQL", icon: TbSql },

  // AI / ML: LangChain, Hugging Face, PyTorch, TensorFlow, Keras, scikit-learn, Streamlit, OpenCV, FAISS
  { name: "LangChain", icon: SiLangchain },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "PyTorch", icon: SiPytorch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Keras", icon: SiKeras },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "OpenCV", icon: SiOpencv },
  { name: "FAISS", icon: TbVectorTriangle },

  // Web & Backend: Node.js, Express.js, Spring Boot, Bootstrap, REST APIs , Microservice, Hibernate,
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "REST APIs", icon: TbApi },
  { name: "Microservice", icon: TbComponents },
  { name: "Hibernate", icon: SiHibernate },

  // Data & Visualization: Pandas, NumPy, Matplotlib, Seaborn
  { name: "Pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Matplotlib", icon: TbChartDots },
  { name: "Seaborn", icon: TbChartHistogram },

  // Databases: MySQL, MongoDB, Oracle AI Vector Search
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Oracle AI Vector Search", icon: SiOracle },

  // Cloud & Development Tools: AWS, Oracle Cloud, Docker, Vercel, Git, GitHub, NPM, Postman, CI/CD, CUDA
  { name: "AWS", icon: SiAmazon },
  { name: "Oracle Cloud", icon: SiOracle },
  { name: "Docker", icon: SiDocker },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "NPM", icon: SiNpm },
  { name: "Postman", icon: SiPostman },
  { name: "CI/CD", icon: TbInfinity },
  { name: "CUDA", icon: SiNvidia },

  // Design: Figma
  { name: "Figma", icon: SiFigma },

  // Technical Domains: Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, AI Agents, Prompt Engineering, RAG, LLMs, High-Performance Computing , Prolog
  { name: "Machine Learning", icon: FaBrain },
  { name: "Deep Learning", icon: FaNetworkWired },
  { name: "NLP", icon: MdOutlineTranslate },
  { name: "Computer Vision", icon: FaEye },
  { name: "Generative AI", icon: MdAutoAwesome },
  { name: "AI Agents", icon: FaRobot },
  { name: "Prompt Engineering", icon: VscTerminal },
  { name: "RAG", icon: TbDatabaseSearch },
  { name: "LLMs", icon: TbMessageChatbot },
  { name: "High-Performance Computing", icon: TbServerBolt },
  { name: "Prolog", icon: TbBinaryTree },
];

export default function TechStack() {
  return (
    <section className="techstack section-container" id="skills" aria-labelledby="tech-title">
      <h2 id="tech-title">My <span>Techstack</span></h2>
      <div className="tech-grid">
        {skills.map(({ name, icon: Icon }) => (
          <div key={name} className="tech-icon-box">
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


