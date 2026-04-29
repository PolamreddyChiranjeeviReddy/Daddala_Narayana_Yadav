import { Navigate, Route, Routes } from 'react-router-dom'

import { getPreferredLanguage } from './components/i18n/language'
import { LanguageShell } from './pages/LanguageShell'
import { HomePage } from './pages/HomePage'
import { AchievementsPage } from './pages/AchievementsPage'
import { SimplePage } from './pages/SimplePage'

export default function App() {
  const preferred = getPreferredLanguage('en')

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${preferred}/home`} replace />} />

      <Route path="/:lang" element={<LanguageShell />}>
        <Route path="home" element={<HomePage />} />
        <Route path="achievements" element={<AchievementsPage />} />
        <Route
          path="impact"
          element={<SimplePage page="impact" heading={{ en: 'Impact', te: 'ప్రభావం' }} />}
        />
        <Route
          path="media"
          element={<SimplePage page="media" heading={{ en: 'Media', te: 'మీడియా' }} />}
        />
        <Route
          path="contact"
          element={
            <SimplePage page="contact" heading={{ en: 'Contact', te: 'సంప్రదించండి' }} />
          }
        />
      </Route>

      <Route path="*" element={<Navigate to={`/${preferred}/home`} replace />} />
    </Routes>
  )
}
