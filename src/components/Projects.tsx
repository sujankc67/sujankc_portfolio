import React from "react";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true }) as string[];

  return (
    <section className="card">
      <h2>{t("projects.heading")}</h2>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
