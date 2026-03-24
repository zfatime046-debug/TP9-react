import { Outlet, NavLink } from "react-router-dom";
import { profile } from "@/data/profile";

const links = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(9, 9, 15, 0.88)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(167, 139, 250, 0.08)",
        }}
      >
        <nav
          className="container"
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink
            to="/"
            style={{
              fontWeight: 800,
              fontSize: "1.15rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "var(--primary-2)" }}>Fatima Ezzohra</span>{" "}
            <span style={{ color: "#f59e0b" }}>Ait Bella</span>
          </NavLink>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  padding: "10px 16px",
                  borderRadius: "14px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: isActive ? "#ffffff" : "var(--text-dim)",
                  background: isActive
                    ? "linear-gradient(135deg, var(--primary), var(--primary-2))"
                    : "transparent",
                  boxShadow: isActive
                    ? "0 10px 24px rgba(139, 92, 246, 0.26)"
                    : "none",
                  transition: "0.25s ease",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="container" style={{ padding: "56px 0 72px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          borderTop: "1px solid rgba(167, 139, 250, 0.08)",
          color: "var(--text-soft)",
          textAlign: "center",
          padding: "28px 0",
        }}
      >
        © {new Date().getFullYear()} •{" "}
        <span style={{ color: "var(--primary-2)" }}>{profile.name}</span>
      </footer>
    </div>
  );
}