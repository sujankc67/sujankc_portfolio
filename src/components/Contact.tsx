import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="card">
      <h2>{t("contact.heading")}</h2>
      <p>
        {t("contact.email")}:{" "}
        <a href="mailto:sujankc2004@gmail.com">sujankc2004@gmail.com</a>
      </p>
      <p>
        {t("contact.phone")}: +91 9008413326
      </p>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        {t("contact.resume")}
      </a>
    </section>
  );
};

export default Contact;
