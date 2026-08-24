import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mohd Zaid Khan",
    titles: [
      "AI and Machine Learning Explorer",
      "Aspiring ML Engineer & Researcher",
      "Python & Predictive Modeling Explorer",
      "2nd-Year AIML Student @ GLA University"
    ],
    headline: "I’m currently a 2nd - Year Btech CS (specialisation in AIML) student at GLA University curious about technology and always eager to learn, explore new ideas, and improve my skills.I enjoy solving problems and finding efficient ways to use AI and technology to make things simpler and more effective. Currently, I’m exploring web development, Python, AI/ML, and other areas of computer science while continuously learning",
    bioParagraphs: [
      "I am a second-year B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at GLA University.",
      "I enjoy learning the fundamentals and conceptual mechanics behind technology rather than simply relying on copy-pasted abstractions or blindly accepting generated output.",
      "Whether it's writing clean algorithmic logic in C/Python, building responsive client interfaces in modern JavaScript, or understanding how relational data queries execute in SQL, I like understanding how systems work and then building them myself."
    ],
    statusBadge: "CSE(AIML) enthusiast",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#contact",
    email: "zaid69538@gmail.com",
    location: "India (Open to Remote / Relocation)",
    availability: "Undergraduate (2025 — 2029)",
    socials: [
      { name: "GitHub", url: "https://github.com/zaid69538-cloud", icon: "Github" }
    ],
    stats: [
      { value: "2nd", label: "Year at GLA University", sublabel: "Machine Learning Specialization" },
      { value: "100%", label: "Curiosity & Drive", sublabel: "Continuous Learning" }
    ]
  },
  skillGroups: [
    {
      category: "Programming",
      icon: "Code2",
      color: "#06b6d4",
      skills: [
        {
          name: "Python",
          description: "My primary programming language for artificial intelligence, machine learning pipelines, algorithmic problem solving, and data manipulation. Experienced with Object-Oriented Programming (OOP), functional concepts, and the standard Python ecosystem.",
          topics: ["Object-Oriented Programming", "Data Structures", "Algorithmic Problem Solving", "NumPy & Pandas Ecosystem", "Scripting & Automation"],
          level: "Primary Language • Daily Use"
        },
        {
          name: "C",
          description: "Provided a fundamental understanding of low-level computer architecture, manual memory management (pointers, allocation), system-level execution, and foundational data structures.",
          topics: ["Pointers & Memory Allocation", "Data Structures & Algorithms", "Low-Level Optimization", "Procedural Programming"],
          level: "Foundational Computer Science"
        },
      ]
    },
    {
      category: "Frontend",
      icon: "Layout",
      color: "#8b5cf6",
      skills: [
        {
          name: "HTML5",
          description: "Structuring modern, accessible, and semantic web interfaces. Experienced with standard semantic tags, forms validation, SEO metadata, and multimedia embedding.",
          topics: ["Semantic Markup", "Accessibility (a11y)", "Forms & Validations", "SEO & Meta Tags"],
          level: "Semantic Web Standards"
        },
        {
          name: "CSS3",
          description: "Styling visually stunning, responsive user interfaces with CSS Grid, Flexbox, transitions, keyframe animations, glassmorphism effects, and neon dark theme styling.",
          topics: ["CSS Grid & Flexbox", "Keyframe Animations", "Glassmorphism & Shadows", "Custom CSS Properties", "Modern Dark Themes"],
          level: "Styling & Visual Design"
        },
        {
          name: "JavaScript",
          description: "Powering interactive frontend behavior, state handling, micro-interactions, modal dialogs, and asynchronous data fetching for modern web applications.",
          topics: ["UI Event Listeners", "Async API Fetching", "Dynamic Component Rendering", "Client-Side Validation"],
          level: "Interactive Web Layer"
        },
        {
          name: "Responsive Design",
          description: "Ensuring web applications look and perform flawlessly across all device formats, including smartphones, tablets, laptops, and ultra-wide desktop monitors using mobile-first CSS architecture.",
          topics: ["Mobile-First Design", "Media Queries & Breakpoints", "Fluid Typography & Viewport Units", "Cross-Browser Compatibility"],
          level: "Universal Device Optimization"
        }
      ]
    },
    {
      category: "AI & Data",
      icon: "BrainCircuit",
      color: "#ec4899",
      skills: [
        {
          name: "Machine Learning",
          description: "developing my understanding of concepts such as data preprocessing, feature selection, model training, and evaluation while working with Python and popular ML libraries.",
          topics: ["Supervised Learning", "Classification & Regression", "Model Training", "Scikit-Learn"],
          level: "Core Specialization"
        },
        {
          name: "Python",
          description: "Leveraging Python as the backbone for machine learning experiments, statistical modeling, data cleaning workflows, and neural network prototyping.",
          topics: ["Data Analysis Pipelines", "Model Training & Inference", "Scientific Computing", "Kaggle & Colab Workflows"],
          level: "Primary AI Language"
        },
        {
          name: "Pandas",
          description: "Manipulating and cleaning structured tabular datasets, handling missing values, filtering, groupby aggregations, pivoting, and preparing feature matrices for machine learning models.",
          topics: ["DataFrames & Series", "Handling Missing Data", "Groupby & Aggregations", "Feature Engineering", "Data Cleaning"],
          level: "Tabular Data Processing"
        },
        {
          name: "NumPy",
          description: "High-performance scientific computing using multi-dimensional arrays, vectorization, matrix multiplications, linear algebra routines, and broadcasting operations for numerical algorithms.",
          topics: ["N-Dimensional Arrays", "Vectorized Operations", "Matrix Computations", "Linear Algebra & Broadcasting"],
          level: "Numerical Computing"
        },
        {
          name: "Matplotlib",
          description: "Creating insightful data visualizations, scatter plots, histograms, correlation heatmaps, loss curves, and decision boundaries for exploratory data analysis (EDA).",
          topics: ["Statistical Plotting", "Correlation Heatmaps", "Loss & Accuracy Curves", "Subplots & Custom Styling"],
          level: "Data Visualization"
        },
        {
          name: "Data Analysis",
          description: "Conducting Exploratory Data Analysis (EDA) on raw datasets, discovering trends, detecting outliers, hypothesis formulation, and transforming raw numbers into clear, actionable insights.",
          topics: ["Exploratory Data Analysis (EDA)", "Feature Distribution Analysis", "Outlier Detection", "Correlation & Insights Extraction"],
          level: "Exploratory Insight Generation"
        }
      ]
    },
    {
      category: "Database",
      icon: "Database",
      color: "#10b981",
      skills: [
        {
          name: "MySQL",
          description: "Relational database management system used for structured data storage, designing normalized schemas (1NF, 2NF, 3NF), writing optimized queries, and maintaining data integrity with foreign keys.",
          topics: ["Relational Schema Design", "Table Normalization", "Foreign Keys & Constraints", "Query Optimization"],
          level: "Relational DBMS"
        },
        {
          name: "SQL",
          description: "Writing robust Structured Query Language commands (DDL, DML, DQL), creating views, writing nested queries, and managing relational databases for data science and web applications.",
          topics: ["DDL, DML, DQL Queries", "Multi-table JOIN Operations", "Aggregations (GROUP BY / HAVING)", "Indexing & Views"],
          level: "Database Querying"
        },
      ]
    },
    {
      category: "Tools",
      icon: "Wrench",
      color: "#f59e0b",
      skills: [
        {
          name: "Git",
          description: "Distributed version control system for tracking source code changes, branch management (feature branching, merging), committing history, and resolving conflicts.",
          topics: ["Branching & Merging", "Commit History & Staging", "Conflict Resolution", "Version Control Best Practices"],
          level: "Version Control"
        },
        {
          name: "GitHub",
          description: "Managing open-source repositories, collaborating via pull requests, issue tracking, markdown documentation, and showcasing coding projects to the developer community.",
          topics: ["Repository Management", "Pull Requests & Code Reviews", "Issues & Project Tracking", "GitHub READMEs & Pages"],
          level: "Code Collaboration & Showcase"
        },
        {
          name: "VS Code",
          description: "Primary development environment configured with Python interpreters, Jupyter extensions, ESLint, Tailwind IntelliSense, and integrated terminal debugging tools.",
          topics: ["Integrated Debugger", "Extension Ecosystem", "Python & JS IntelliSense", "Terminal & Git Integration"],
          level: "Primary Code Editor"
        },
        {
          name: "Jupyter Notebook",
          description: "Interactive computing environment used for step-by-step model training, inline visualization with Matplotlib, Kaggle competitions, and reproducible research notebooks.",
          topics: ["Interactive Code Execution", "Inline Data Visualizations", "Markdown Documentation", "Google Colab Compatibility"],
          level: "Data Science Prototyping"
        },
      ]
    }
  ],
  projects: [
    {
      id: "project-3d-portfolio",
      title: "Personal Portfolio",
      subtitle: "Responsive, Theme-Aware Personal Website",
      description: "A responsive React portfolio presenting Zaid's AIML journey, skills, certifications, projects, and contact details.",
      longDescription: "A clean, responsive portfolio for Mohd Zaid Khan. It presents his CSE (AIML) profile, skills, certifications, GitHub presence, projects, and contact details with a plain theme-aware background, seven selectable themes, and compact project details.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      demoUrl: "http://localhost:5173",
      githubUrl: "https://github.com/zaid69538-cloud",
      featured: true,
      highlights: [
        "Responsive layout with a plain, theme-aware background",
        "Seven selectable visual themes with persistent user preference",
        "Organized sections for skills, projects, certifications, and contact"
      ],
      metrics: [
        { label: "Themes", value: "7" },
        { label: "Focus", value: "AIML" },
        { label: "Layout", value: "Responsive" }
      ]
    },
    {
      id: "project-zaid-ai",
      title: "SalesPulse — Real-Time Sales Analytics Dashboard",
      subtitle: "Interactive Sales Intelligence & Transaction Management",
      description: "A real-time dashboard for KPIs, revenue trends, regional performance, and transactions.",
      longDescription: "A modern enterprise-style analytics dashboard built to combine interactive reporting with full transaction management. It includes demo mode exploration, Recharts visualizations, Supabase PostgreSQL synchronization, real-time WebSocket events, and an in-app schema inspector for database setup.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
      demoUrl: "https://sales-analytics-dashboard-one-rho.vercel.app",
      githubUrl: "https://github.com/zaid69538-cloud/Zaid-AI",
      featured: true,
      highlights: [
        "Executive KPIs with revenue velocity, category share, and recent transactions",
        "Live PostgreSQL syncing with Supabase Realtime INSERT, UPDATE, and DELETE events",
        "Interactive demo mode, transaction management, and built-in schema inspection"
      ],
      metrics: [
        { label: "Data Sync", value: "Realtime" },
        { label: "Dashboard Views", value: "6+" },
        { label: "Database", value: "PostgreSQL" }
      ]
    },
    {
      id: "project-calculator",
      title: "Simple Calculator",
      subtitle: "Clean, Responsive Frontend Utility",
      description: "A simple calculator built from scratch with HTML, CSS, and vanilla JavaScript.",
      longDescription: "A focused frontend exercise that turns core web fundamentals into a useful calculator interface. The project uses semantic HTML for structure, custom CSS for a responsive layout, and vanilla JavaScript for button events, arithmetic operations, decimal input, clear, and delete behavior.",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1000&q=80",
      tags: ["HTML5", "CSS3", "JavaScript"],
      featured: true,
      highlights: [
        "Built from scratch with no UI framework",
        "Responsive layout for desktop and mobile screens",
        "Vanilla JavaScript event handling for arithmetic operations"
      ],
      metrics: [
        { label: "Frontend", value: "Vanilla" },
        { label: "Layout", value: "Responsive" },
        { label: "Logic", value: "JavaScript" }
      ]
    }
  ],
  experience: [
    {
      id: "edu-1",
      role: "B.Tech in AIML (Specialization in Machine Learning - 2nd Year)",
      company: "GLA University",
      period: "2025 — 2029 (Expected)",
      location: "Mathura, India",
      type: "Education",
      description: "Pursuing B.Tech at GLA University with a core specialization in Machine Learning. Specializing in statistical learning theory, supervised & unsupervised algorithms, exploratory data analysis, and predictive modeling.",
      achievements: [
        "Consistent academic performance in core engineering and math subjects",
        "Active member of the University AI & Coding Student Community",
        "Participating in competitive coding challenges and student hackathons"
      ],
      technologies: ["Python", "Machine Learning", "Data Structures", "Algorithms", "C++", "SQL"]
    },
    {
      id: "exp-self",
      role: "Independent AI / ML Project Developer & Researcher",
      company: "Self-Directed Learning & Open Source",
      period: "2025 — Present",
      location: "Remote",
      type: "Full-time",
      description: "Building hands-on machine learning prototypes, analyzing Kaggle datasets, and integrating AI models into modern interactive web applications.",
      achievements: [
        "Implemented supervised and unsupervised ML algorithms from mathematical principles",
        "Built interactive data visualization dashboards with Streamlit and Python",
        "Completed certifications in Python Data Science & Deep Learning Foundations"
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Git", "GitHub"]
    },
    {
      id: "edu-2",
      role: "Senior Secondary Education (Physics, Chemistry, Mathematics)",
      company: "Higher Secondary School",
      period: "Completed 2025",
      location: "India",
      type: "Education",
      description: "Completed higher secondary education with a strong foundation in Mathematics, Analytical Problem Solving, and Physics.",
      achievements: [
        "Graduated with Distinction in Mathematics and Science",
        "Developed strong algorithmic thinking and mathematical modeling skills"
      ],
      technologies: ["Mathematics", "Physics", "Computer Science"]
    }
  ],
  certificates: [
    {
      id: "cert-az900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      issueDate: "May 21, 2026",
      credentialId: "4sX6-XMSn",
      credentialUrl: "https://verify.certiport.com",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      skills: ["Cloud Computing", "Microsoft Azure", "Cloud Architecture", "Security & Governance", "AZ-900"],
      description: "Official industry certification issued by Microsoft validating core foundational knowledge of cloud computing principles, Azure services, security, privacy, compliance, and cloud pricing models.",
      badgeColor: "#008AD7"
    },
    {
      id: "cert-be10x",
      title: "Be10X Certificate of Completion: AI Tools & ChatGPT Workshop",
      issuer: "be10x",
      issueDate: "June 7th, 2026",
      credentialId: "BE10X-AI-VERIFIED",
      credentialUrl: "https://be10x.in",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      skills: ["ChatGPT & AI Tools", "Data Analysis with AI", "AI Code & Debugging", "Prompt Engineering", "Rapid AI Workflows"],
      description: "Official certificate awarded to Mohd Zaid Khan on successful completion of the AI Tools and ChatGPT Workshop. Certified in analyzing data using AI in under 30 min, coding & debugging using AI in under 10 min, and building presentations in under 5 min.",
      badgeColor: "#EC4899"
    }
  ]
};
