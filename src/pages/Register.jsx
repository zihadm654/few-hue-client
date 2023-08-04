import React from 'react'
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UseFirebase from '../hooks/UseFirebase';
import { useNavigate } from 'react-router';
import { Alert } from '@mui/material';

const Register = () => {
  const { user, registerUser, isLoading, error, signInWithGoogle } = UseFirebase();
  const [loginData, setLoginData] = useState({});
  const navigation = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newLogindata = { ...loginData };
    newLogindata[name] = value;
    setLoginData(newLogindata);
  };

  const handleOnSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return
    };
    registerUser(loginData.email, loginData.password, loginData.name, navigation)
    e.preventDefault()
  };

  const googleSignin = () => {
    signInWithGoogle(navigation)
  }



  return (
    <>
      <Header></Header>
      <div className='d-flex justify-content-center align-item-center'>
        <div style={{ marginTop: '150px', marginBottom: '100px' }}>
          <h4 style={{ textAlign: 'center', color: 'gray' }}>Create an account</h4>
          <br />

          <form
            onSubmit={handleOnSubmit}
            style={{ border: '1px solid gray', padding: '30px 20px', margin: '30px 20px' }}>
            <input
              onChange={handleOnChange}
              name="name"
              type="text" style={{ width: '35rem', height: '4.5rem' }} placeholder='Your Name' required />
            <br /><br />
            <input
              onChange={handleOnChange}
              name="email"
              type="email" style={{ width: '35rem', height: '4.5rem' }} placeholder='Your Email' required />
            <br /><br />
            <input
              onChange={handleOnChange}
              name="password"
              type="password" style={{ width: '35rem', height: '4.5rem' }} placeholder='Your Password' required />
            <br /><br />
            <input
              onChange={handleOnChange}
              name="password2"
              type="password" style={{ width: '35rem', height: '4.5rem' }} placeholder='Your Re-Enter Password' required />
            <br /><br />
            <button style={{ width: '35rem', height: '4rem',fontSize:'15px' }} >Sign up</button>

          </form>

          <button style={{ width: '35rem', height: '4rem', marginLeft: '45px',fontSize:'15px' }} onClick={googleSignin}>Signin with google</button>

          {
            error && <Alert severity="error">
              {error}
            </Alert>
          }
        </div>

      </div>
      <Footer></Footer>
    </>
  )
}

export default Register