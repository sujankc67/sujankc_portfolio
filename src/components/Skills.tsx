import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = t("skills.list", { returnObjects: true }) as string[];

  return (
    <section className="card">
      <h2>{t("skills.heading")}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
