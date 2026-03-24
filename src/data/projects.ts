export type Project = {
  title: string;
  summary?: string;
  tags: string[];
  period?: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Personnel",
    summary: "Portfolio fullstack développé avec React, TypeScript et Vite. Design dark élégant avec animations Framer Motion, routing React Router, et données structurées en TypeScript.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    period: "2026",
    repo: "https://github.com/zfatime046-debug",
  },
  {
    title: "Système intelligent de surveillance de serre agricole par IoT",
    summary: "Conception et implémentation du backend Django, modélisation des données (MCD, MLD, MPD), développement des modèles ORM, logique métier, règles d'automatisation avec persistance MySQL.",
    tags: ["Django", "Python", "MySQL", "IoT", "ORM"],
    period: "2026",
  },
  {
    title: "Déploiement d'un réseau d'entreprise multi-sites sécurisé",
    summary: "Conception avec VLSM, VLAN, routage, services réseau (DHCP, sécurité, VoIP) sous Cisco Packet Tracer.",
    tags: ["VLSM", "VLAN", "Cisco", "VoIP", "Réseaux"],
    period: "2026",
  },
  {
    title: "Blog sécurisé avec Laravel",
    summary: "Application web Laravel 10 avec authentification Breeze, CRUD, architecture MVC et base de données MySQL.",
    tags: ["Laravel", "PHP", "MySQL", "MVC", "Breeze"],
    period: "2026",
  },
  {
    title: "Boutique Ventes",
    summary: "Application de bureau développée en Java avec interface graphique Java Swing, base de données MySQL via JDBC.",
    tags: ["Java", "Java Swing", "MySQL", "JDBC"],
    period: "2026",
  },
];