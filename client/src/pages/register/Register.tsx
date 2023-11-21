import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { redirect } from 'react-router-dom';


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required('Username is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        })}
        onSubmit={(values) => {
          axios.post('http://localhost:3001/auth/register',values);
          redirect('/login');
          console.log('Form submitted with values:', values);
        }}
      >
        <Form className="bg-white shadow-md rounded-md p-8 w-96">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="username" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Choose a password"
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="password" component="div" className="text-red-600" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
