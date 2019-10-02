import React, { useState, useEffect } from 'react';
import { updateFriend } from '../utilities/services';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FriendCard = ({ touched, errors, initialValues, ...props }) => {
  const [ isEditing, setIsEditing ] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  }

  useEffect( () => {
    initialValues.name = props.friendInfo.name;
    initialValues.age = props.friendInfo.age;
    initialValues.email = props.friendInfo.email;
    initialValues.id = props.friendInfo.id;
  }, [])

  return(
    <div className="friend-card" id={props.friendInfo.id} >
      <div className={isEditing ? 'cancel' : 'edit'} onClick={toggleEdit }>{isEditing ? 'cancel' : 'edit'}</div>
      {isEditing ?
        (
          <Form>
            <dl>
              <dt>name:</dt>
              <dd>
                <Field name="name" type="text" />
                <div className="error">
                  { touched.name && errors.name && <p>{errors.name}</p> }
                </div>
              </dd>
              <dt>age:</dt>
              <dd>
                <Field name="age" type="number" />
                <div className="error">
                  { touched.age && errors.age && <p>{errors.age}</p> }
                </div>
              </dd>
              <dt>email:</dt>
              <dd>
                <Field name="email" type="text" />
                <div className="error">
                  { touched.email && errors.email && <p>{errors.email}</p> }
                </div>
              </dd>
            </dl>
            <button className="save" type="submit">save changes</button>
          </Form>
        ) : (
          <dl>
            <dt>name:</dt>
            <dd>{props.friendInfo.name}</dd>
            <dt>age:</dt>
            <dd>{props.friendInfo.age}</dd>
            <dt>email:</dt>
            <dd>{props.friendInfo.email}</dd>
          </dl>
        )
      }
    </div>
  )
}

export default withFormik({
  mapPropsToValues({ name, age, email, id }) {
    return {
      name:  name || "",
      age:   age || "",
      email: email || "",
      id:    id || ""
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
    updateFriend( friendInfo, formikBag );
  }
})(FriendCard);

// export default FriendCard;