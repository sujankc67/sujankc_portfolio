import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="card">
      <h2>{t("about.heading")}</h2>
      <p>{t("about.text")}</p>
    </section>
  );
};

export default About;
