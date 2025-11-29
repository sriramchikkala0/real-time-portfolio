import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Chikkala Sri Ram Krishna Sai Narasimha",
  email: "sriramchikkala004@gmail.com",
  phone: "9705415695",
  location: "Amalapuram, Andhra Pradesh",
  linkedin: "https://linkedin.com/in/sriram-chikkala19",
  github: "https://github.com/sriramchikkala0",
  role: "AI & Data Science Student | Full Stack Developer",
  summary: "AI & Data Science student skilled in Machine Learning, Full Stack Development, and Automation, with a track record of building scalable AI systems and data-driven solutions. Strong analytical thinking, collaboration, and leadership skills applied to real-world projects."
};

export const EXPERIENCE: Experience[] = [
  {
    company: "SmartBridge Educational Services Pvt. Ltd.",
    role: "AI & ML Intern",
    duration: "Aug 2025 – Oct 2025",
    points: [
      "Developed supervised learning models achieving 90%+ accuracy on real datasets.",
      "Built ML workflows including model evaluation and deployment pipelines.",
      "Collaborated with cross-functional teams to enhance data quality and feature engineering."
    ]
  },
  {
    company: "Talent Shine India Pvt. Ltd.",
    role: "Python Development Intern",
    duration: "June 2025 – July 2025",
    points: [
      "Automated ETL and data preprocessing pipelines using Python and Pandas.",
      "Improved code efficiency by 25% through clean coding practices and modular design.",
      "Applied data visualization for internal analytics using Matplotlib and Seaborn."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech, Computer Science and Engineering (AI & DS)",
    institution: "Bonam Venkata Chalamayya Engineering College (JNTUK), Odalarevu",
    duration: "2022–2026",
    score: "CGPA: 6.84"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College, Amalapuram",
    duration: "2020–2022",
    score: "CGPA: 6.15"
  },
  {
    degree: "SSC",
    institution: "Sri Nand Techno School, Amalapuram",
    duration: "2019–2020",
    score: "CGPA: 9.8"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "Java", "SQL", "JavaScript"]
  },
  {
    category: "AI/ML Frameworks",
    skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "NumPy", "Pandas"]
  },
  {
    category: "Web & Backend",
    skills: ["Flask", "FastAPI", "React (Basic)", "HTML/CSS"]
  },
  {
    category: "Tools & Databases",
    skills: ["Git/GitHub", "MySQL", "MongoDB", "PowerBI", "Matplotlib", "Seaborn"]
  },
  {
    category: "Concepts",
    skills: ["Data Analysis", "ETL", "Model Deployment", "Deep Learning", "Automation"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "T20 World Cup Data Analytics",
    category: "Machine Learning",
    description: "Built a full data analytics pipeline using Pandas and Scikit-learn for player performance prediction. Used Kaggle datasets and achieved 92% accuracy on predictive models.",
    tools: ["Python", "Pandas", "Scikit-learn", "Kaggle"],
    image: "https://picsum.photos/600/400?random=1",
    link: "https://github.com/sriramchikkala0"
  },
  {
    title: "Real-Time Object Detection",
    category: "Deep Learning",
    description: "Trained YOLOv8 model achieving 92% detection accuracy on COCO dataset. Deployed using OpenCV and Flask for live inference.",
    tools: ["YOLOv8", "OpenCV", "Flask", "Python"],
    image: "https://picsum.photos/600/400?random=2",
    link: "https://github.com/sriramchikkala0"
  },
  {
    title: "COVID-19 Data Analytics Dashboard",
    category: "Data Analysis & Visualization",
    description: "Built an interactive dashboard using Python, Power BI, and SQL to analyze and visualize global COVID-19 trends. Automated data processing and insights generation.",
    tools: ["Power BI", "SQL", "Python", "Pandas"],
    image: "https://picsum.photos/600/400?random=3",
    link: "https://github.com/sriramchikkala0"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Cloud Computing",
    issuer: "Bonam Venkata Chalamayya Engineering College",
    date: "Aug 2024"
  },
  {
    name: "TCS iON Career Edge – Young Professional",
    issuer: "Tata Consultancy Services",
    date: "May 2025"
  },
  {
    name: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "Aug 2025"
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    date: "Nov 2025"
  },
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Nov 2025"
  }
];

export const RESUME_CONTEXT = `
You are an AI assistant for the portfolio website of ${PERSONAL_INFO.name}. 
Here is his professional background:

SUMMARY: ${PERSONAL_INFO.summary}

SKILLS: ${SKILLS.map(c => c.skills.join(", ")).join("; ")}

EXPERIENCE:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}): ${e.points.join(" ")}`).join("\n")}

PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join("\n")}

EDUCATION:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution}`).join("\n")}

Your goal is to answer visitor questions professionally, highlighting his strengths in AI, Data Science, and Full Stack Development. Keep answers concise.
`;