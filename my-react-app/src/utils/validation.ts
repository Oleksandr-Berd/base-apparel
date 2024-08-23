import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    mail:Yup.string().email("Please provide a valid email!").required("Please provide a valid email!")
})