import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mohamed Amine Slimani",
  title: "Hi all, I'm Amine",
  description:
    "I'm a passionate Full Stack web developer with extensive experience in building scalable applications using TypeScript, JavaScript, React.js, and various cloud technologies. Currently, I work as a Full Stack Developer at SoftylinesDev while pursuing my studies in Software Engineering at Horizon. I have a strong interest in learning new technologies and applying them innovatively to create impactful solutions. Known for my self-motivation, dedication to learning, and collaborative spirit.",
  resumeLink: "https://online.publuu.com/560606/1259682", // Replace with your resume link
};

export const openSource = {
  githubUserName: "slimani-amine",
};

export const contact = {}; // You can add your contact information here if needed

export const socialLinks: SocialLinksType = {
  email: "mailto:mohamed.amine.slimani@horizon-tech.tn", // Replace with your email
  linkedin: "https://www.linkedin.com/in/med-amine-slimani/",
  github: "https://github.com/slimani-amine",
  // You can uncomment and add links to other social media profiles if desired
};

export const skillsSection: SkillsSectionType = {
  title: "What I Do",
  subTitle: "Passionate Full Stack Developer eager to explore every tech stack",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File (if applicable)
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Developing scalable websites and applications using Next.js"),
        emoji("⚡ Designing and implementing RESTful APIs for backend services"),
        emoji("⚡ Self-learning and developing my soft skills"),
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          iconifyTag: "akar-icons:typescript-fill",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "React.js",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Next.js",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "NodeJs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Express",
          iconifyTag: "logos:express",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Gitlab",
          iconifyTag: "akar-icons:gitlab-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend",
    progressPercentage: "80", // Adjust your proficiency as needed
  },
  {
    Stack: "Backend",
    progressPercentage: "90", // Adjust your proficiency as needed
  },
  {
    Stack: "Programming",
    progressPercentage: "95", // Adjust your proficiency as needed
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Horizon",
    subHeader: "Software Engineering",
    duration: "September 2023 - Present",
    desc: "Currently pursuing a degree in Software Engineering, focusing on expanding my knowledge in computer science and software development.",
    grade: "",
    descBullets: [], // You can add relevant bullet points if needed
  },
  {
    schoolName: "RBK",
    subHeader: "Full Stack JavaScript Developer",
    duration: "January 2023 - November 2023",
    desc: "Graduated with highest honors from RBK, gaining practical experience in building robust web applications and mastering a wide range of technologies.",
    grade: "",
    descBullets: [], // You can add relevant bullet points if needed
  },
  {
    schoolName: "Coursera/Udemy",
    subHeader: "Software Engineering",
    duration: "September 2023 - Present",
    desc: "Some certifications about computer science and software development like Relational Database Design from University of Colorado Boulder,Meta Database Engeneer from Meta , Data Structures from University of California San Diego ...",
    grade: "",
    descBullets: [], // You can add relevant bullet points if needed
  },
  {
    schoolName: "EFE",
    subHeader: "Soft Skills IT",
    duration: "September 2023",
    desc: "Studied advanced soft skills essential for IT professionals under the guidance of industry experts, focusing on communication, teamwork, and leadership.",
    grade: "",
    descBullets: [], // You can add relevant bullet points if needed
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "SoftylinesDev",
    companyLogo:
      "https://media.licdn.com/dms/image/D4E0BAQGyUUCNba6_vw/company-logo_200_200/0/1695297853748/softylines_logo?e=2147483647&v=beta&t=r6uwoD9Yw8fCyWorZNAbFXRPYbLBH_VC2iB1IEoQg1Q", // Replace with your company logo path
    date: "January 2024 - Present", // Update with your employment dates
    desc: "Developing and maintaining full stack applications for diverse client projects. Implementing best practices in software development to deliver efficient, scalable solutions.",
  },
  {
    role: "Full Stack JavaScript Developer",
    company: "RBK",
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71TlOlekit3SUtMXmZ4Jv4ruka5n6_axT6Q&s", // Replace with RBK logo path
    date: "January 2023 - November 2023",
    desc: "Acquired in-depth knowledge and hands-on experience in developing web applications using JavaScript, React.js, Node.js, and related technologies.",
  },
  {
    role: "Full Stack JavaScript Developer",
    company: "Freelance",
    companyLogo: "https://www.dynamique-mag.com/wp-content/uploads/AdobeStock_205907590.jpeg", // Replace with Freelance logo path
    date: "January 2023 - November 2023",
    desc: "Developed web applications using JavaScript, React.js, Node.js, and related technologies. Gained experience in project management and client communication.",
  },
  {
    role: "Military Cadet",
    company: "Tunisian Army Academy",
    companyLogo:
      "https://media.licdn.com/dms/image/C560BAQFMMvx_EHnEVg/company-logo_200_200/0/1630586674554/tunisian_military_academy_logo?e=2147483647&v=beta&t=3TnCFG1QEjLbSWa2d2SBGrruvMuVLDd28cvCexRZr2I", // Replace with Tunisian Army logo path
    date: "September 2022 - January 2023",
    desc: "Gained valuable leadership and teamwork skills during training. Developed a disciplined approach to tasks, responsibilities and adaptation to military life.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Ixamee",
    desc: "E-learning platform built with Next.js, enhancing skills in full stack development and user interface design.",
    github: "", // Add GitHub link if applicable
    link: "", // Add project link
  },
  {
    name: "Travel-list",
    desc: "Travel management platform using React.js, focusing on responsive design and user experience.",
    github: "",
    link: "",
  },
  {
    name: "Hr",
    desc: "Job hiring application with admin dashboard, showcasing skills in backend development and database management.",
    github: "",
    link: "",
  },
  {
    name: "E-ditor",
    desc: "Notion clone project, focusing on collaborative editing features and user interface development.",
    github: "",
    link: "",
  },
  {
    name: "SoftyShop",
    desc: "Large-scale e-commerce website built with React.js and backend technologies, enhancing skills in managing complex web applications.",
    github: "",
    link: "",
  },
  {
    name: "Crafty",
    desc: "Craft e-commerce mobile application, utilizing React Native for cross-platform development and integrating with backend services.",
    github: "",
    link: "",
  },
  {
    name: "Kotteb",
    desc: "Quran app focusing on backend development, leveraging database management and API integration.",
    github: "",
    link: "",
  },
  {
    name: "Design-system",
    desc: "Private design system for SoftylinesDev, streamlining UI components and maintaining consistency across projects.",
    github: "",
    link: "",
  },
  // Add more projects as needed
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "Mohamed Amine Slimani is a highly skilled Full Stack Developer who brings a unique perspective to our team.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "I have had the pleasure of working with Mohamed Amine Slimani on several projects, and I am continually impressed by his technical expertise.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mohamed Amine Slimani",
  description: greetings.description,
  author: "Mohamed Amine Slimani",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Amine",
    "Mohamed Amine Slimani",
    "@slimani-amine",
    "slimani-amine",
    "Portfolio",
    "Amine Portfolio ",
    "Mohamed Amine Slimani Portfolio",
  ],
};
