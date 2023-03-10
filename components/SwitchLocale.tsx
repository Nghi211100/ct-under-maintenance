import { useEffect, useState } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const SwitchLocale = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    (typeof window !== "undefined" && localStorage.getItem("language")) || "en"
  );

  i18n.changeLanguage(language);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const handleLanguageChange = (e: any) => {
    setLanguage(e.value);
    i18n.changeLanguage(e.value);
  };
  const options = [
    {
      value: "vi",
      label: (
        <span className="flex gap-2">
          🇻🇳
          <span className="short">VI</span>
          <span className="long">Tiếng Việt</span>
        </span>
      ),
    },
    {
      value: "en",
      label: (
        <span className="flex gap-2">
          🇬🇧<span className="short">EN</span>
          <span className="long">English</span>
        </span>
      ),
    },
  ];

  return (
    <div className="ml-auto mt-auto mr-3 mb-3">
      <Select
        className="block rounded-lg shadow-sm placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent pr-7"
        classNamePrefix="select"
        value={options.find(
          (item) => item.value === (i18n.language ? i18n.language : "en")
        )}
        menuPosition={"fixed"}
        isSearchable={false}
        onChange={handleLanguageChange}
        options={options}
        styles={{
          control: (styles) => ({ ...styles, ".long": { display: "none" } }),
          option: (styles) => ({ ...styles, ".short": { display: "none" } }),
          menu: (styles) => ({ ...styles, width: "120px" }),
        }}
      />
    </div>
  );
};

export default SwitchLocale;
