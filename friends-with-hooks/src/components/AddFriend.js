import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { setLocalStorage } from '../utilities';
import { baseUrl } from '../utilities/services';

const AddFriend = ({ touched, errors, props }) => {
  console.log('props',props);
  return(
    <main>
      <Form>
        <h2>Add a New Friend</h2>
        <Field name="name" type="text" placeholder="friend name" />
        <div className="error">
          { touched.name && errors.name && <p>{errors.name}</p> }
        </div>
        <Field name="age" type="number" placeholder="friend age" />
        <div className="error">
          { touched.age && errors.age && <p>{errors.age}</p> }
        </div>
        <Field name="email" type="email" placeholder="friend email" />
        <div className="error">
          { touched.email && errors.email && <p>{errors.email}</p> }
        </div>
        <button type="submit">Submit</button>
      </Form>
    </main>
  )
}

export default withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name:  name || "",
      age:   age || "",
      email: email || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be longer then 2 characters")
      .max(15, "Name cannot be longer then 15 characters")
      .required("The name is required"),
    age: Yup.number()
      .integer()
      .positive()
      .required("Age is required"),
    email: Yup.string()
      .email()
      .required("Email is required")
  }),
  handleSubmit( friendInfo, formikBag ) {
    console.log('formikBag',formikBag.props);
    axiosWithAuth().post(`${baseUrl}/api/friends`, friendInfo)
      .then( res => {
        formikBag.props.history.push("/friends-list");
      })
      .catch( err => console.log(err) );
  }
})(AddFriend);