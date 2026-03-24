import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section style={{ padding: "24px 0 10px" }}>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio de Fatima Zahra Ait Bella, étudiante en systèmes informatiques répartis."
        />
      </Helmet>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "22px" }}
        >
          <span
            style={{
              display: "inline-flex",
              width: "fit-content",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(139, 92, 246, 0.12)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              color: "var(--primary-2)",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            Disponible pour un stage PFE
          </span>

          <div>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: "-0.05em",
                color: "var(--text)",
              }}
            >
              <span style={{ fontSize: "2.2rem" }}>👋</span> Hi, I’m
              <br />
              <span style={{ color: "var(--primary-2)" }}>
                Fatima Zahra Ait Bella
              </span>
            </h1>

            <p
              style={{
                marginTop: "18px",
                fontSize: "1.2rem",
                color: "var(--text-dim)",
                fontWeight: 500,
              }}
            >
              Étudiante en Systèmes Informatiques Répartis
            </p>
          </div>

          <p
            style={{
              maxWidth: "720px",
              color: "var(--text-dim)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
            }}
          >
            Étudiante en Licence SIR, à la recherche d’un stage de fin d’études
            (PFE) de 2 mois à partir du 07/04/2026. Intéressée par les systèmes
            informatiques, les réseaux et le développement web.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              color: "var(--text-soft)",
              fontSize: "1rem",
            }}
          >
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link to="/projects" className="btn btn-primary">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Me contacter
            </Link>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {profile.skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="card"
            style={{
              minHeight: "430px",
              padding: "28px",
              borderRadius: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 20px 60px rgba(90, 56, 255, 0.12)",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--primary-2)",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.18)",
                }}
              >
                Profil
              </span>

              <h2
                style={{
                  marginTop: "18px",
                  fontSize: "1.9rem",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                À la recherche d’un stage PFE
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  color: "var(--text-dim)",
                  lineHeight: 1.8,
                }}
              >
                Je recherche un stage de fin d’études de 2 mois afin de mettre
                en pratique mes compétences en développement web, backend Java
                et bases de données.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                marginTop: "26px",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>
                  Disponibilité
                </p>
                <p
                  style={{
                    marginTop: "6px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  2026
                </p>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>
                  Durée
                </p>
                <p
                  style={{
                    marginTop: "6px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  2 mois
                </p>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>
                  Spécialité
                </p>
                <p
                  style={{
                    marginTop: "6px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  Développement web
                </p>
              </div>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(167,139,250,0.1)",
                }}
              >
                <p style={{ color: "var(--text-soft)", fontSize: "0.85rem" }}>
                  Stack
                </p>
                <p
                  style={{
                    marginTop: "6px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text)",
                  }}
                >
                  React / Java
                </p>
              </div>
            </div>

            <p
              style={{
                marginTop: "26px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(167,139,250,0.08)",
                fontSize: "0.9rem",
                color: "var(--text-soft)",
              }}
            >
              Technologies principales utilisées dans mes projets récents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}