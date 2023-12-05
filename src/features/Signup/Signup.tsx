import "./Signup.scss";

import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function Signup() {

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 character long")
  })

  const initialValues = {
    email: "",
    password: ""
  }

  const submitForm = (values: any) => {
    console.log(values);
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {
          (formik) => {
            const { handleChange, handleSubmit, handleBlur, dirty, isValid } = formik;
            return (
              <article className="signup">
                <h1 className="title">Signup</h1>

                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>

                  <div>
                    <label htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="password" component="span" className="error" />
                  </div>

                  <button 
                    type="submit"
                    disabled={!(dirty && isValid)}
                  >
                    Signup
                  </button>

                </form>

                <p className="link">Already a user? <Link to="/login">Login</Link></p>

              </article>)
          }
        }
      </Formik>
    </div>
  )
}