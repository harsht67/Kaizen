import "./Login.scss";

import * as Yup from "yup";
import { Formik, ErrorMessage, Field, Form } from "formik";
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
            const { errors, touched, dirty, isValid } = formik;
            return (
              <article className="login">
                <h1 className="title">Login</h1>

                <Form>

                  <div>
                    <label htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={errors.email && touched.email && "input--error"}
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </div>

                  <div>
                    <label htmlFor="password">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={errors.password && touched.password && "input--error"}
                    />
                    <ErrorMessage name="password" component="span" className="error" />
                  </div>

                  <button 
                    type="submit"
                    disabled={!(dirty && isValid)}
                    className={!(dirty && isValid) ? "button--disabled" : ""}
                  >
                    Login
                  </button>

                </Form>

                <p className="link">Don't have an account? <Link to="/signup">Signup</Link></p>

              </article>)
          }
        }
      </Formik>
    </div>
  )
}