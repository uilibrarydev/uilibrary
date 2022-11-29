import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const firstNameValidation = yup.object({
  firstName: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required()
    .max(3, { message: 'Too short' })
})
