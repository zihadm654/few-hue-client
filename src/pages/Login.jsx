import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UseFirebase from '../hooks/UseFirebase';
import { useNavigate } from 'react-router';
import { Alert } from '@mui/material';


const Login = () => {
   const { user, loginUser, error } = UseFirebase();
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
      loginUser(loginData.email, loginData.password, navigation)
      e.preventDefault()
   };



   return (
      <>
         <Header></Header>
         <div className='d-flex justify-content-center align-item-center'>
            <div style={{ marginTop: '150px', marginBottom: '100px' }}>
               <h4 style={{ textAlign: 'center', color: 'gray' }}>Admin login</h4>
               <form
                  onSubmit={handleOnSubmit}
                  style={{ border: '1px solid gray', padding: '40px 20px', margin: '40px 20px' }}>
                  <input
                     onChange={handleOnChange}
                     name='email'
                     type="email" style={{ width: '40rem', height: '4.5rem' }} placeholder='Your Email' required />
                  <br /><br />
                  <input
                     onChange={handleOnChange}
                     name="password"
                     type="password" style={{ width: '40rem', height: '4.5rem' }} placeholder='Your Password' required />
                  <br /><br />
                  <button style={{ width: '40rem', height: '4rem',fontSize:'15px' }} >Sign in</button>
               </form>
               {user?.email && <Alert severity="success">
                  Successfully logged in.
               </Alert>
               }
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

export default Login