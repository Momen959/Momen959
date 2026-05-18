import {
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  smsm,
  sortingvisualiser,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Leadership",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FastAPI & Node.js",
    icon: web,
  },
  {
    title: "Database Engineer",
    icon: mysql,
  },
  {
    title: "Deployment Engineer",
    icon: linux,
  },
];

const education = [
  {
    title: "Bachelor of Technology - Computer Science Technology",
    company_name: "El Sewedy Polytechnic University, 10th of Ramadan City",
    icon: oist,
    iconBg: "#fff",
    date: "Oct 2024 - Now",
    points: [
      "Major focused on computer science technology, backend systems, databases, and applied software engineering.",
      "Building a foundation in problem solving, object oriented programming, data handling, and full-stack deployment.",
    ],
  },
  {
    title: "Technical Diploma",
    company_name: "HST School For Applied Technology, Nasr City",
    icon: samaritans,
    iconBg: "#fff",
    date: "Oct 2021 - Jun 2024",
    points: [
      "Graduated with an excellent grade of 98%.",
      "Completed a technical path that strengthened practical software, database, and systems fundamentals.",
    ],
  },
];

const technologies = [
  {
    name: "Python / FastAPI",
    icon: backend,
  },
  {
    name: "Node.js",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: web,
  },
  {
    name: "Qdrant / Vector DB",
    icon: fullstack,
  },
  {
    name: "SQL Server / MySQL",
    icon: mysql,
  },
  {
    name: "Docker Compose",
    icon: aws,
  },
  {
    name: "Nginx",
    icon: linux,
  },
  {
    name: "Linux VPS",
    icon: ubuntu,
  },
  {
    name: "GitHub",
    icon: git,
  },
  {
    name: "Web Scraping",
    icon: html,
  },
  {
    name: "NLP / Lemmatization",
    icon: css,
  },
  {
    name: "Streamlit",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "ThinkStudio",
    icon: nextinnovation,
    iconBg: "#fff",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Developed a basic Retrieval-Augmented Generation system with FastAPI, Pydantic, MongoDB, and Qdrant.",
      "Implemented file ingestion and LLM-based retrieval so users could ask questions over uploaded documents.",
      "Integrated JWT authentication and built APIs for database and LLM interactions."
    ],
  },
  {
    title: "Database Engineer",
    company_name: "ZKTeco",
    icon: cognizant,
    iconBg: "#fff",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Designed a relational database schema for parking slots, vehicles, users, and access logs.",
      "Developed SQL scripts, tables, and basic stored procedures for parking status updates and user data.",
      "Helped troubleshoot database connectivity and data integrity issues during testing."
    ],
  },
];

const extracurricular = [
  {
    title: "Research Team Leader and Team Administration",
    type: "One Team",
    icon: linkedin,
    iconBg: "#007BB5",
    date: "Feb 2025 - Now",
    points: [
      "Manage, develop, and teach a team of young researchers the basics of research.",
      "Share research opportunities and help the team move toward stronger academic and professional outcomes."
    ],
    credential: "https://www.linkedin.com/in/momen-saif-909333331/",
  },
  {
    title: "56th Cairo International Bookfair Organizer",
    type: "Volunteering",
    icon: internshala,
    iconBg: "#1294C8",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Helped manage halls and gates, reduce crowding and conflict, and guide guests to the right sections.",
      "Monitored specific aisles and sections to keep visitor movement organized."
    ],
  },
  {
    title: "Registration and Workshop Organizer",
    type: "ACTS' Sustainable Summit",
    icon: internshala,
    iconBg: "#1294C8",
    date: "Nov 2024",
    points: [
      "Supported registration and workshop operations, tracked agendas, and kept sessions on time.",
      "Maintained room order and checked that lecture devices were functional."
    ],
  },
  {
    title: "DECI Scholarship",
    type: "Ministry of Telecommunication / Udacity",
    icon: hackerrank,
    iconBg: "#050C18",
    date: "Credential",
    points: [
      "Studied Python fundamentals, data analysis fundamentals, and cyber security fundamentals.",
      "Completed a graduation project as part of the scholarship track."
    ],
    credential: "http://www.udacity.com/certificate/e/fa4df102-53ae-11ed-93ad-ff42a7502f00",
  },
  {
    title: "Project Management Fundamentals",
    type: "IBM SkillsBuild",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "Credential",
    points: [
      "Learned Agile and Waterfall project management techniques.",
      "Practiced project charters, Gantt charts, communication management, and work breakdown structures."
    ],
    credential: "https://skills.yourlearning.ibm.com/credential/CREDLY-4196f1eb-4ce2-4032-a0cb-3f728fb9da0d",
  },
];

const projects = [
  {
    name: "SmSm Academy Registration System",
    description:
      "A production registration system where I handled backend and deployment engineering. I containerized the API, client, and database layers, automated deployment with Bash scripts, and configured Nginx on a Linux VPS for secure HTTPS traffic.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "nginx",
        color: "blue-text-gradient",
      },
    ],
    image: smsm,
    source_code_link: "https://github.com/Momen959",
    live_project_link: "https://smsmacademy.com",
  },
  {
    name: "RAG Backend System",
    description:
      "A document retrieval backend built with FastAPI, MongoDB, and Qdrant. It stores uploaded files, retrieves relevant chunks through semantic search, and exposes JWT-protected endpoints for LLM-powered question answering.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "qdrant",
        color: "pink-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Momen959",
  },
  {
    name: "Vocab Validator & Curriculum Scraper",
    description:
      "A Streamlit automation tool that validates vocabulary against CEFR levels by scraping Cambridge Dictionary data, detects duplicates in curriculum files, and exports styled tables to Word or Google Docs with formatting preserved.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "beautifulsoup4",
        color: "pink-text-gradient",
      },
      {
        name: "google-docs-api",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link: "https://github.com/Momen959",
  },
  {
    name: "Spam Email Classifier",
    description:
      "A machine learning project using tokenization, stop-word removal, TF-IDF vectorization, and model comparison between Logistic Regression and SVM to classify emails and analyze key spam indicators.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "tf-idf",
        color: "pink-text-gradient",
      },
      {
        name: "svm",
        color: "blue-text-gradient",
      },
    ],
    image: samaritans,
    source_code_link: "https://github.com/Momen959",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
