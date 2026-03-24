import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

type EducationItem = {
  school: string;
  degree: string;
  start?: string;
  end?: string;
  field?: string;
  location?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  const educationList = education as EducationItem[];

  return (
    <section style={{ display: "grid", gap: "32px", padding: "16px 0 8px" }}>
      <Helmet>
        <title>Formations — Fatima Ezzohra Ait Bella</title>
        <meta
          name="description"
          content="Mes diplômes et formations académiques."
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
          🎓 Mon parcours académique
        </span>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Formations
        </h2>
      </motion.div>

      <div
        style={{
          position: "relative",
          paddingLeft: "28px",
          borderLeft: "1px solid rgba(167,139,250,0.14)",
          display: "grid",
          gap: "22px",
        }}
      >
        {educationList.map((e, i) => (
          <motion.div
            key={e.school + (e.start ?? "")}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            style={{ position: "relative" }}
          >
            <article
              className="card"
              style={{
                padding: "22px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      lineHeight: 1.35,
                    }}
                  >
                    {e.degree}
                    {e.field ? ` — ${e.field}` : ""}
                  </h3>

                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "0.98rem",
                      fontWeight: 500,
                      color: "var(--primary-2)",
                    }}
                  >
                    🏫 {e.school} {e.location ? `• ${e.location}` : ""}
                  </p>
                </div>

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
                  {e.start && e.end ? `${fmt(e.start)} — ${fmt(e.end)}` : "En cours"}
                </span>
              </div>

              {e.gpa && (
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "0.95rem",
                    color: "var(--text-dim)",
                  }}
                >
                  GPA : {e.gpa}
                </p>
              )}

              {e.courses?.length ? (
                <div style={{ marginTop: "18px" }}>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-soft)",
                      marginBottom: "10px",
                    }}
                  >
                    Cours principaux
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {e.courses.slice(0, 5).map((c: string) => (
                      <span key={c} className="tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {e.highlights?.length ? (
                <ul
                  style={{
                    marginTop: "18px",
                    display: "grid",
                    gap: "8px",
                    paddingLeft: 0,
                    listStyle: "none",
                  }}
                >
                  {e.highlights.map((h: string) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.95rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      <span style={{ color: "var(--primary-2)" }}>✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}