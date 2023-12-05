import "./Login.scss";

import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

export default function Login() {

  const LoginSchema = Yup.object().shape({
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
        validationSchema={LoginSchema}
        onSubmit={submitForm}
      >
        {
          (formik) => {
            const { handleChange, handleSubmit, handleBlur, dirty, isValid } = formik;
            return (
              <article className="login">
                <h1 className="title">Login</h1>

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
                    Login
                  </button>

                </form>

                <p className="link">Don't have an account? <Link to="/signup">Sign up</Link></p>

              </article>)
          }
        }
      </Formik>
    </div>
  )
}