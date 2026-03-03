import React from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t("experience.list", { returnObjects: true }) as string[];

  return (
    <section className="card">
      <h2>{t("experience.heading")}</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
