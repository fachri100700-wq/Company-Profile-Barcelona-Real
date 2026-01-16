import * as Yup from 'yup'

export const loginSchemas = Yup.object().shape({
    username: Yup.string().required("Username is required").email('email format is invalid'),
    password: Yup.string().required("Password is required")
})

