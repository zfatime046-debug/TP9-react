export type Certification = {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
};

export const certifications = [
  {
    title: "Développement Front-End moderne avec React",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    image: "/cert/ReactCertificate.png",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
  title: "Complete Git & Version Control",
  issuer: "Coursera / LearnKartS",
  issueDate: "2026-03",
  image: "/cert/GitCertificate.png",
  skills: [
    "Git",
    "GitHub",
    "GitLab",
    "Version Control",
    "Branching",
    "Merging"
  ],
},
  {
    title: "DevOps Fundamentals",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    image: "/cert/DevOpsCertificate.png",
    skills: ["Docker", "CI/CD", "Git", "Linux", "DevOps"],
  },
  {
    title: "Hibernate & JPA",
    issuer: "MLIAEdu",
    issueDate: "2026-03",
    image: "/cert/HibernateCertificate.png",
    skills: ["Hibernate", "JPA", "Java", "Spring Boot"],
  },

];