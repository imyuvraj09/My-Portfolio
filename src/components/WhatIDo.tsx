const services = [
  {
    "title": "AI & ML DEV",
    "description": "Building RAG-based AI pipelines, optimizing LLM inference systems, developing NLP & Computer Vision solutions, and engineering production-grade Generative AI applications.",
    "skills": [
      "Python",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "FAISS",
      "Keras",
      "CUDA"
    ]
  },
  {
    "title": "DATA & CLOUD",
    "description": "Analyzing data streams, building data pipelines, creating actionable visualizations, and deploying scalable solutions on cloud infrastructure.",
    "skills": [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "MongoDB",
      "AWS",
      "Docker"
    ]
  }
];

export default function WhatIDo() {
  return (
    <section className="services section-container" aria-labelledby="services-title">
      <h2 id="services-title">What I <span>Do</span></h2>
      <div className="service-grid">
        {services.map(({ title, description, skills }) => (
          <article className="service-card" key={title}>
            <h3>{title}</h3><p>{description}</p>
            <ul className="skill-tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
