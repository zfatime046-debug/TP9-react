import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section style={{ display: "grid", gap: "32px", padding: "16px 0 8px" }}>
      <Helmet>
        <title>Projets — Fatima Ezzohra Ait Bella</title>
        <meta
          name="description"
          content="Mes projets Full Stack Frontend & Backend."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
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
          🚀 Mes réalisations
        </span>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Projets
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "22px",
        }}
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="card"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            style={{
              padding: "22px",
              minHeight: "290px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              borderRadius: "20px",
              transition:
                "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-4px)";
              el.style.borderColor = "var(--border-strong)";
              el.style.boxShadow = "0 18px 40px rgba(90, 56, 255, 0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "var(--border)";
              el.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.7rem",
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {p.title}
              </h3>

              {p.period && (
                <span
                  style={{
                    whiteSpace: "nowrap",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.28)",
                    background: "rgba(245,158,11,0.08)",
                  }}
                >
                  {p.period}
                </span>
              )}
            </div>

            <p
              style={{
                color: "var(--text-dim)",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              {p.summary}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div style={{ flexGrow: 1 }} />

            <div
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
                paddingTop: "16px",
                borderTop: "1px solid rgba(167,139,250,0.08)",
              }}
            >
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--primary-2)",
                    fontSize: "0.98rem",
                    fontWeight: 600,
                    transition: "0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f59e0b";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary-2)";
                  }}
                >
                  Demo →
                </a>
              )}

              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--primary-2)",
                    fontSize: "0.98rem",
                    fontWeight: 600,
                    transition: "0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f59e0b";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary-2)";
                  }}
                >
                  Code →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}