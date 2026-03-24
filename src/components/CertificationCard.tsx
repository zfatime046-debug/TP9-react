import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { motion } from "framer-motion";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c, index }: { c: Certification; index: number }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <motion.article
      className={clsx(
        "border border-pink-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-pink-100 transition flex flex-col gap-3 bg-white",
        isExpired && "opacity-70"
      )}
      aria-label={`Certification ${c.title}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {c.image ? (
        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          width={256}
          height={256}
          loading="lazy"
          className="w-20 h-20 object-contain rounded mb-1"
        />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-3xl mb-1">
          🏆
        </div>
      )}

      <div>
        <h3 className="font-semibold text-lg leading-snug">{c.title}</h3>
        <p className="text-sm text-pink-500 font-medium mt-1">🏢 {c.issuer}</p>
        <p className="text-xs text-gray-400 mt-1">
          Délivré le {mmYYYY(c.issueDate)}
          {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        </p>
        {c.credentialId && (
          <p className="text-xs text-gray-400 mt-1 break-all">ID : {c.credentialId}</p>
        )}
      </div>

      {c.skills?.length ? (
        <div className="flex flex-wrap gap-2">
          {c.skills.map(s => (
            <span key={s} className="px-2 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-xs font-medium">
              {s}
            </span>
          ))}
        </div>
      ) : null}

      <div className="flex items-center gap-3 text-sm mt-auto pt-3 border-t border-pink-50">
        {c.credentialUrl && (
          
            <a className="text-pink-500 hover:text-pink-700 underline underline-offset-4 transition"
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
          >
            Voir le certificat →
          </a>
        )}
        {isExpired && <span className="text-xs text-gray-400">Expirée</span>}
        {c.status === "revoked" && <span className="text-xs text-red-400">Révoquée</span>}
      </div>
    </motion.article>
  );
}