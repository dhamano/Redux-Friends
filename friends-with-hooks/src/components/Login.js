import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { setLocalStorage } from '../utilities';
import { baseUrl } from '../utilities/services';

const Login = () => {
  return(
    <main>
      <Form>
        <Field name="username" type="text" />
        <Field name="password" type="password" />
        <button type="submit">Submit</button>
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
  handleSubmit( credentials, formikBag ) {
    axios.post(`${baseUrl}/api/login`, credentials)
      .then( res => {
        setLocalStorage("token", res.data.payload);
        formikBag.props.history.push("/friends-list");
      })
      .catch( err => console.log(err) );
  }
})(Login);