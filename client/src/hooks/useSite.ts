import { useEffect, useState } from 'react'
import axios from 'axios'

import { defaultSite, type SiteConfig } from '../content/site'

export function useSite() {
  const [site, setSite] = useState<SiteConfig>(defaultSite)

  useEffect(() => {
    let cancelled = false

    axios
      .get<SiteConfig>('/api/site')
      .then((res) => {
        if (cancelled) return
        setSite({ ...defaultSite, ...res.data })
      })
      .catch(() => {
        // keep defaults when API is unavailable
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { site }
}
