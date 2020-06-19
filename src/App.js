import React from 'react';
import { Formik, Form, Field } from 'formik';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Formik 
      initialValues = {{
          person: {
            'name': '',
            'birthday': '',
            'address': '',
            'city': '',
            'state': '',
            'zip': '',
            'cell': '',
            'grade': '',
            'school':  '',
            'invited_by': '',
            'home_church': '',
            'hobbies': '',
            'prayer_requests': '',
            'parents_name': '',
            'parents_email': '',
            'instagram': '',
            'snapchat': '',
            'tiktok': ''
          },
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
    <Form>
      <label htmlFor = "name">Name</label> <Field  name = "person.name"  />
      <label htmlFor = "birtday">birthday</label> <Field name = "person.birthday" />
      <label htmlFor = "address">address</label> <Field  name="person.address" />
      <label htmlFor = "city">city</label> <Field  name="person.city" />
      <label htmlFor = "state">state</label> <Field name="person.state" />
      <label htmlFor = "zip">zip</label> <Field name="person.zip" />
      <label htmlFor = "cell">cell</label> <Field name="person.cell" />
      <label htmlFor = "grade">grade</label> <Field name="person.grade" />
      <label htmlFor = "school">school</label> <Field name="person.school" />
      <label htmlFor = "invited by">invited by</label> <Field name="person.invited_by" />
      <label htmlFor = "home church">home_church</label> <Field name="person.home_church" />
      <label htmlFor = "hobbies">hobbies</label> <Field name="person.hobbies" />
      <label htmlFor = "prayer requests">prayer requests</label> <Field name="person.prayer_requests" />
      <label htmlFor = "parents name">parents name</label> <Field name="person.parents_name" />
      <label htmlFor = "parents email">parents email</label> <Field name="person.parents_email" />
      <label htmlFor = "ig">ig</label> <Field name="person.instagram" />
      <label htmlFor = "snap">snap</label> <Field name="person.snapchat" />
      <label htmlFor = "name">tiktok</label> <Field  name="person.tictok" />
      <button type="submit">Submit</button>
    </Form>
    </Formik>
    </>    
  );
}

export default App;
