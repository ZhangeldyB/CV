import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        className={`language-button ${language === 'en' ? 'active' : ''}`}
        onClick={toggleLanguage}
        title="Switch language"
      >
        <span className="language-label">
          {language === 'en' ? 'EN' : 'RU'}
        </span>
        <span className="language-separator">|</span>
        <span className="language-label-alt">
          {language === 'en' ? 'RU' : 'EN'}
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
