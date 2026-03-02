import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('title')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('counter', { count })}
        </button>
        <p>
          <Trans i18nKey="hint">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">{t('docs')}</p>
      <LanguageSwitcher />
    </>
  )
}

export default App
