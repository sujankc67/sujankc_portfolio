import React from "react";
import { useTranslation } from "react-i18next";

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const certs = t("certifications.list", { returnObjects: true }) as string[];

  return (
    <section className="card">
      <h2>{t("certifications.heading")}</h2>
      <ul>
        {certs.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
