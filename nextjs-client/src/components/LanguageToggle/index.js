import { useState } from 'react';
import { Container, LanguageToggleWrapper } from './style';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

const LanguageToggle = () => {
  const { preferredLanguage, setPreferredLanguage } = useLanguages();
  const [currentLanguage, setCurrentLanguage] = useState(preferredLanguage);

  const handleToggle = () => {
    if (currentLanguage === supportLanguages.Korean) {
      setCurrentLanguage(supportLanguages.English);
      setPreferredLanguage(supportLanguages.English);
    } else {
      setCurrentLanguage(supportLanguages.Korean);
      setPreferredLanguage(supportLanguages.Korean);
    }
  };
  return (
    <Container>
      <button className="language-toggle" onClick={handleToggle}>
        <LanguageToggleWrapper
          selected={currentLanguage === supportLanguages.Korean}
        >
          <span>KR</span>
        </LanguageToggleWrapper>
        <div className="toggle-divider" />
        <LanguageToggleWrapper
          selected={currentLanguage === supportLanguages.English}
        >
          <span>EN</span>
        </LanguageToggleWrapper>
      </button>
    </Container>
  );
};

export default LanguageToggle;
