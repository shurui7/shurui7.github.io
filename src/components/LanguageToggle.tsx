import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 relative",
        "hover:text-primary-foreground text-muted-foreground rounded-md",
        "hover:bg-primary/10"
      )}
      title={i18n.language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe size={16} />
      <span className="uppercase font-mono text-xs">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;