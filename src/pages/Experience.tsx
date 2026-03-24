import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <section style={{ display: "grid", gap: "32px", padding: "16px 0 8px" }}>
      <Helmet>
        <title>Parcours — Fatima Ezzohra Ait Bella</title>
        <meta
          name="description"
          content="Expérience professionnelle et recherche de stage PFE."
        />
      </Helmet>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span
          style={{
            display: "inline-flex",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "0.86rem",
            fontWeight: 600,
            marginBottom: "14px",
            background: "rgba(139, 92, 246, 0.12)",
            color: "var(--primary-2)",
            border: "1px solid rgba(167,139,250,0.18)",
          }}
        >
          💼 Mon parcours
        </span>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            color: "var(--text)",
          }}
        >
          Expérience
        </h2>
      </motion.div>

      {/* CARD PRINCIPALE */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: "28px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "16px",
          }}
        >
          🚀
        </div>

        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          À la recherche d’un stage PFE
        </h3>

        <p
          style={{
            marginTop: "14px",
            color: "var(--text-dim)",
            maxWidth: "600px",
            marginInline: "auto",
            lineHeight: 1.7,
          }}
        >
          Étudiante en Licence Systèmes Informatiques Répartis, je suis
          actuellement à la recherche d’un stage de fin d’études (PFE)
          d’une durée de 2 mois à partir de 2026.  
          Je suis particulièrement intéressée par le développement web,
          les systèmes informatiques et les technologies modernes.
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <span className="tag">React</span>
          <span className="tag">Spring Boot</span>
          <span className="tag">Java</span>
          <span className="tag">MySQL</span>
          <span className="tag">DevOps</span>
        </div>
      </motion.div>
    </section>
  );
}