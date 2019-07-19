import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { setLocalStorage } from '../utilities';
import { baseUrl } from '../utilities/services';

const Login = ({ touched, errors }) => {
  return(
    <main>
      <Form>
        <h2>Friends 90's(ish) style</h2>
        <Field name="username" type="text" />
        <div className="error">
        {touched.username && errors.username && <p>{errors.username}</p> }
        </div>
        <Field name="password" type="password" />
        <div className="error">
        {touched.password && errors.password && <p>{errors.password}</p> }
        </div>
        <button type="submit">Log in</button>
      </Form>
    </main>
  )
}

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Your password is required")
  }),
  handleSubmit( credentials, formikBag ) {
    axios.post(`${baseUrl}/api/login`, credentials)
      .then( res => {
        setLocalStorage("token", res.data.payload);
        formikBag.props.history.push("/friends-list");
      })
      .catch( err => console.log(err) );
  }
})(Login);