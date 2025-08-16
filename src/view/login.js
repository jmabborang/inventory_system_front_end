import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Paper
} from '@mui/material';
import Logo from '../assets/images/logo/logo.jpg'
import '../assets/css/test.css'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace this with your own login logic
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard'); // navigate to login page

  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value !== "" && !validateEmail(value));
  };
  
  const validateEmail = (value) => {
    // simple email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };
  
  const style = {
    background: 'linear-gradient(45deg, #35a4a8ff, #062d75ff)',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  return (
    <div style={style}>
      <Container maxWidth="sm" >
        <Paper elevation={3} sx={{ padding: 5, marginTop: 0 }} >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}>
            <img src={Logo} alt="IMS Logo" style={{ height: 250, width: 250 }} />
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={handleChange}
              error={emailError}
              helperText={emailError ? "Please enter a valid email address" : ""}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>

  );
};

export default LoginForm;
