export interface Education {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  modules: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Licence en Systèmes Informatiques et Réseaux",
    school: "Faculté des Sciences et Techniques",
    location: "Guéliz, Marrakech",
    period: "En cours",
    modules: [
      "Protocoles réseau",
      "Système d'exploitation",
      "SGBD/SGBDR",
      "Java",
      "WEB",
      "UML",
      "Méthodes Agiles",
      "Architectures réparties (Hibernate, Spring-boot)",
      "IHM (Java Swing, React)",
    ],
  },
  {
    id: 2,
    degree: "Diplôme d'Études Universitaires Scientifiques et Techniques – DEUST",
    school: "Faculté des Sciences et Techniques",
    location: "Guéliz, Marrakech",
    period: "Obtenu",
    modules: [
      "Mathématiques",
      "Physique",
      "Algorithmique / Programmation",
      "Électronique",
      "Statistique",
  ],
    
  },
];