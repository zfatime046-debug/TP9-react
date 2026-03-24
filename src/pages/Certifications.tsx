import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section style={{ display: "grid", gap: "32px", padding: "16px 0 8px" }}>
      <Helmet>
        <title>Certifications — Fatima Ezzohra Ait Bella</title>
        <meta
          name="description"
          content="Mes certifications et licences professionnelles."
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
          🏆 Mes certifications
        </span>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Certifications
        </h2>
      </motion.div>

      <div>
        <input
          placeholder="Rechercher une certification, technologie ou compétence..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Filtrer les certifications"
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "14px 16px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(167,139,250,0.14)",
            color: "var(--text)",
            outline: "none",
            fontSize: "0.95rem",
            transition: "0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--border-strong)";
            e.currentTarget.style.boxShadow =
              "0 0 0 4px rgba(139, 92, 246, 0.10)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(167,139,250,0.14)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "22px",
        }}
      >
        {list.map((c, i) => (
          <CertificationCard key={c.title + c.issueDate} c={c} index={i} />
        ))}
      </div>
    </section>
  );
}