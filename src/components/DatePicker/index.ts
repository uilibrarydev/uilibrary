import { registerLocale } from 'react-datepicker'
import hy from 'date-fns/locale/hy'
import en from 'date-fns/locale/en-GB'
import ru from 'date-fns/locale/ru'

registerLocale('hy', hy)
registerLocale('en', en)
registerLocale('ru', ru)

export * from './TimePicker'
export * from './SimpleDatePicker'
export * from './RangeDatePicker'
