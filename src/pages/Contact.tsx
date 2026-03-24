import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mbdzejzg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      style={{
        display: "grid",
        gap: "32px",
        padding: "16px 0 8px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <Helmet>
        <title>Contact — Fatima Ezzohra Ait Bella</title>
        <meta
          name="description"
          content="Contactez Fatima Ezzohra Ait Bella."
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
          ✉️ Me contacter
        </span>

        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Contact
        </h2>

        <p
          style={{
            marginTop: "12px",
            color: "var(--text-dim)",
            fontSize: "1rem",
          }}
        >
          Tu as un projet, une opportunité de stage ou une question ? N’hésite
          pas à me contacter.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          gap: "24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="card"
            style={{
              padding: "18px",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>📧</span>
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-soft)",
                }}
              >
                Email
              </p>
              <p
                style={{
                  marginTop: "4px",
                  fontSize: "0.96rem",
                  fontWeight: 600,
                  color: "var(--primary-2)",
                  wordBreak: "break-word",
                }}
              >
                {profile.email}
              </p>
            </div>
          </a>

          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="card"
              style={{
                padding: "18px",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>
                {s.label === "GitHub" ? "🐙" : "💼"}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-soft)",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "0.96rem",
                    fontWeight: 600,
                    color: "var(--primary-2)",
                    wordBreak: "break-word",
                  }}
                >
                  {s.href}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="card"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            padding: "24px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            Envoyer un message
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "0.76rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-soft)",
              }}
            >
              Nom
            </label>
            <input
              name="name"
              type="text"
              placeholder="Ton nom"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "0.76rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-soft)",
              }}
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="ton@email.com"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "0.76rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-soft)",
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              placeholder="Ton message..."
              rows={5}
              required
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>

          {status === "success" && (
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#4ade80",
              }}
            >
              ✅ Message envoyé avec succès !
            </p>
          )}

          {status === "error" && (
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#f87171",
              }}
            >
              ❌ Erreur, réessaie plus tard.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-primary"
            style={{
              width: "fit-content",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(167,139,250,0.14)",
  color: "var(--text)",
  outline: "none",
  fontSize: "0.95rem",
};