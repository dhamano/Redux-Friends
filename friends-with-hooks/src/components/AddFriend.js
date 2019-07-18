import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { withFormik, Form, Field } from 'formik';
import { setLocalStorage } from '../utilities';
import { baseUrl } from '../utilities/services';

const AddFriend = () => {
  return(
    <main>
      <Form>
        <Field name="name" type="text" placeholder="friend name" />
        <Field name="age" type="number" placeholder="friend age" />
        <Field name="email" type="email" placeholder="friend email" />
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
  handleSubmit( friendInfo, formikBag ) {
    axiosWithAuth().post(`${baseUrl}/api/friends`, friendInfo)
      .then( res => {
        setLocalStorage("token", res.data.payload);
        formikBag.props.history.push("/friends-list");
      })
      .catch( err => console.log(err) );
  }
})(AddFriend);