import React from "react";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();
  const educationList = t("education.list", { returnObjects: true }) as string[];

  return (
    <section className="card">
      <h2>{t("education.heading")}</h2>
      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
