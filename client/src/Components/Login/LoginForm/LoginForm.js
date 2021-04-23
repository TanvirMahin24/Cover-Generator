import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const onSubmitHandeler = (values) => {
    //LOGIN POST ACTION CALL
    console.log(values);
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Please Provide Password"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <span className="d-block lead__1">Email</span>
          <Field
            name="email"
            type="email"
            className={`form-control ${
              errors.email && touched.email ? "error" : " "
            }`}
          />
          {errors.email && touched.email ? (
            <div className="text-danger">{errors.email}</div>
          ) : null}
          <span className="d-block lead__1 pt-4">Password</span>
          <Field
            name="password"
            type="password"
            className={`form-control ${
              errors.password && touched.password ? "error" : " "
            }`}
          />
          {errors.password && touched.password ? (
            <div className="text-danger">{errors.password}</div>
          ) : null}

          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
