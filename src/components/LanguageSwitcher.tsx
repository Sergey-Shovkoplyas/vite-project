import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          disabled={i18n.language === code}
          style={{ fontWeight: i18n.language === code ? 'bold' : 'normal' }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
