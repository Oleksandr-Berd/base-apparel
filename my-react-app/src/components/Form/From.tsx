import { ChangeEvent } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFormik } from "formik";

import { validationSchema } from "../../utils/validation";

const FormComp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      mail: "",
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    formik.handleChange(evt)
}

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

const {mail} = formik.values;

    formik.resetForm()
    toast.success(`${mail}, Your successfully subscribed!vp`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  };

  return (
    <>
    <ToastContainer/>
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="#mail">
        <input type="text" id="mail" name="mail" placeholder="Email Address" onChange={handleChange}/>
      </label>
      <button type="submit"></button>
      {formik.errors.mail ? <>{formik.errors.mail}</> : <></>}
    </form>
    </>
  );
};

export default FormComp;
