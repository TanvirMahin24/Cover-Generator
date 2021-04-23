import React from "react";
import { Form, Field } from "formik";
import * as yup from "yup";

const Form = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ setSubmitting }) => {
        alert("Form is validated! Submitting the form...");
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="form-control" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Form;
