import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    axios.post('http://localhost:3001/auth/login', values)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          navigate('/'); 
        } else {
          alert('Not authenticated'); 
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Login failed'); 
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values: FormValues) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form className="bg-white shadow-md rounded-md p-8 w-96">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Field
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              id="email"
              name="email"
              placeholder="member@example.com"
            />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Field
              className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
            />
            <ErrorMessage name="password" component="div" className="text-red-600" />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover-bg-blue-600 focus:outline-none focus-shadow-outline-blue"
            type="submit"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
