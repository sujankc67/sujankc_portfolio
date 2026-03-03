import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero">
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.tagline")}</p>
      <div className="links">
        <a href="https://github.com/sujankc67">{t("hero.github")}</a>
        <a href="https://linkedin.com/in/sujankc67">{t("hero.linkedin")}</a>
        <a href="mailto:sujankc2004@gmail.com">{t("hero.email")}</a>
      </div>
      <div className="language-switch">
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ja")}>日本語</button>
      </div>
    </section>
  );
};

export default Hero;
