export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Développement",
    icon: "💻",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel", "Django", "Hibernate", "Spring Boot", "React"],
  },
  {
    category: "Réseaux",
    icon: "🌐",
    skills: ["ARP", "ICMP", "TCP/UDP", "VLSM", "Routage", "VLAN", "Sécurité entreprise"],
  },
  {
    category: "Systèmes",
    icon: "🖥️",
    skills: ["Administration Windows/Linux", "Gestion utilisateurs", "Processus"],
  },
  {
    category: "Langages",
    icon: "⌨️",
    skills: ["Java (OOP, AWT, Swing)", "C", "Python"],
  },
  {
    category: "Bases de données",
    icon: "🗄️",
    skills: ["MySQL", "Oracle", "PL/SQL", "Modélisation"],
  },
  {
    category: "Langues",
    icon: "🌍",
    skills: ["Français (courant)", "Anglais (courant)"],
  },
  {
    category: "Soft Skills",
    icon: "🤝",
    skills: ["Travail en équipe", "Communication", "Adaptabilité", "Résolution de problèmes", "Organisation"],
  },
];