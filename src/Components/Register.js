import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import RegisterForm from '../img/bg.jpg';
import axios from 'axios';

function Register() {
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const headerStyle = {
    padding: '20px',
  };

  const validatePassword = (value) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*()_+,.?":{}|<>]/.test(value);

    if (!value) {
      setError('password', {
        type: 'manual',
        message: 'Password is required',
      });
      return false;
    } else if (value.length < minLength) {
      setError('password', {
        type: 'manual',
        message: `Password should have at least ${minLength} characters`,
      });
      return false;
    } else if (!(hasUpperCase && hasLowerCase && hasNumber && hasSymbol)) {
      setError('password', {
        type: 'manual',
        message: 'Password should include at least one uppercase letter, one lowercase letter, one digit, and one special symbol',
      });
      return false;
    }

    clearErrors('password');
    return true;
  };

  const validatePasswordConfirm = (value, { password }) => {
    if (!value) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Password confirmation is required',
      });
      return false;
    } else if (value !== password) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return false;
    }

    clearErrors('confirmPassword');
    return true;
  };

  const HandleRegister = async (data) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      if (!apiUrl) {
        console.error('REACT_APP_API_URL is not defined');
        return;
      }

      if (Object.keys(errors).length > 0) {
        setFormErrorMessage('Please fix the errors in the form');
        return;
      }

      const passwordValidationResult = validatePassword(data.password);
      if (passwordValidationResult !== true) {
        setFormErrorMessage(passwordValidationResult);
        return;
      }

      await axios.post(`${apiUrl}/register`, data);
      alert('You are now registered!');
      setFormErrorMessage('');

      const password = watch('password');
      console.log(password);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400 && data.error === 'DuplicateUsername') {
          setError('username', {
            type: 'manual',
            message: 'Username is already taken!',
          });
        } else if (status === 400 && data.error === 'DuplicateEmail') {
          setError('email', {
            type: 'manual',
            message: 'Email is already taken!',
          });
        } else {
          console.error('Server responded with:', status, data);
          console.log(JSON.stringify(data));
          setFormErrorMessage('An error occurred during registration');
        }
      } else if (error.request) {
        console.error('No response received from the server');
        setFormErrorMessage('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
        setFormErrorMessage('Error setting up the request');
      }
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Register</h1>

      <img src={RegisterForm} alt="Landing Page" style={imageStyle} />

      {formErrorMessage && <div style={{ color: 'red' }}>{formErrorMessage}</div>}

      <Form onSubmit={handleSubmit(HandleRegister)}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register('username', {
              required: 'Username is required',
              // other validation rules
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.username?.message}
            {errors.username?.message === 'Username is already taken!' && (
              <span style={{ marginLeft: '5px' }}>{errors.username?.message}</span>
            )}
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register('email', {
              required: 'Email required',
              // other validation rules
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.email?.message}
            {errors.email?.message === 'Email is already taken!' && (
              <span style={{ marginLeft: '5px' }}>{errors.email?.message}</span>
            )}
          </div>
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            {...register('password', {
              validate: validatePassword,
            })}
          />
          <div style={{ color: 'red' }}>{errors.password?.message}</div>
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm password:</Form.Label>
          <Form.Control
            type="password"
            {...register('confirmPassword', {
              validate: {
                matchesPassword: validatePasswordConfirm,
              },
            })}
          />
          <div style={{ color: 'red' }}>{errors.confirmPassword?.message}</div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
