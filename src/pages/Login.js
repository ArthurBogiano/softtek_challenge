
import React from 'react';
import '../assets/css/login.css'; 
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import Logo from '../assets/img/logo.jpeg';

function handlerLogin() {
  window.location.href = '/client-support';
}

function Login() {
  return (
    <Container maxWidth="sm" className='suia-container'>
      <div class='centraliza'>
        <img src={Logo} alt="SuportIA Project" className='suia-logo' width={300} />
        <Typography variant="h4" component="h1" gutterBottom>Login - SuportIA Project</Typography>
      </div>
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Senha" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth onClick={() => {handlerLogin()}}>Entrar</Button>
      <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
        Não tem uma conta? <Link href="/register">Cadastre-se</Link>
      </Typography>
    </Container>
  );
}

export default Login;
