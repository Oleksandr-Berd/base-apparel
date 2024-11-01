import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";

import * as SC from "./FormStyled";

import nextIcon from "../../assets/icons/next.svg";
import errorIcon from "../../assets/icons/error.svg"
import { validationSchema } from "../../utils/validation";

const FormComp: React.FC = () => {
const [isError, setIsError] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      mail: "",
    },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    formik.handleChange(evt);
  };

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { mail } = formik.values;

    if (formik.errors.mail || mail === "") {

        setIsError(true)
        toast.error("Please provide a valid mail", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
    } else {
        toast.success(`${mail}, Your successfully subscribed!vp`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }

   
    formik.resetForm();

  };




  return (
    <>
      <ToastContainer />
      <SC.FormStyled action="submit" onSubmit={handleSubmit}>
            
            <SC.LabelCon htmlFor="#mail" errorIcon={errorIcon} isError={isError}>
          <SC.InputStyled
            type="text"
            id="mail"
            name="mail"
            placeholder="Email Address"
            onChange={handleChange}
            isError={isError}
          />
        </SC.LabelCon>
        <SC.SubmitBtn type="submit">
          <img src={nextIcon} alt="next" />
        </SC.SubmitBtn>
        {isError ? <SC.ErrorMessage>{formik.errors.mail}</SC.ErrorMessage> : <></>}
      </SC.FormStyled>
    </>
  );
};

export default FormComp;
