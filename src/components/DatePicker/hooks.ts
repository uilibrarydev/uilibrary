import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Locales } from './types'
import { registerLocale } from 'react-datepicker'

export function useImportFilesDynamically(dayjsLocale: string, locale: string | Locale) {
  const [isFilesLoaded, setIsFilesLoaded] = useState(false)

  useEffect(() => {
    if (dayjsLocale && !isFilesLoaded) {
      ;(async () => {
        await import(`dayjs/locale/${dayjsLocale}.js`)

        let localeData = locale
        let localeName = Locales.EN
        switch (locale) {
          // here can be all cases when datepicker locale is not same as date-fns/locale path
          case Locales.EN:
            localeData = 'en-GB'
            localeName = Locales.EN
            break
          case Locales.HY:
            localeName = Locales.HY
            break
          case Locales.RU:
            localeName = Locales.RU
            break
        }

        const dateLocale = await import(`date-fns/locale/${localeData}/index.js`)
        registerLocale(localeName, dateLocale)

        dayjs.locale(dayjsLocale)
        setIsFilesLoaded(true)
      })()
    }
  }, [dayjsLocale, isFilesLoaded])
}
