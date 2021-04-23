import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegForm = () => {
  const onSubmitHandeler = (values) => {
    //LOGIN POST ACTION CALL
    console.log(values);
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords do not match!"
    ),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    name: Yup.string().required("Name is required!"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <span className="d-block lead__1">Name</span>
          <Field
            name="name"
            type="text"
            className={`form-control ${
              errors.name && touched.name ? "error" : " "
            }`}
          />
          {errors.name && touched.name ? (
            <div className="text-danger">{errors.name}</div>
          ) : null}
          <span className="d-block lead__1 pt-4">Email</span>
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

          <span className="d-block lead__1 pt-4">Retype Password</span>
          <Field
            name="confirmPassword"
            type="password"
            className={`form-control ${
              errors.confirmPassword && touched.confirmPassword ? "error" : " "
            }`}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className="text-danger">{errors.confirmPassword}</div>
          ) : null}

          <button className="btn btn-primary mt-3" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegForm;
