
import React from 'react';
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import Logo from '../assets/img/logo.jpeg';

function Register() {
  return (
    <Container maxWidth="sm" className='suia-container'>
      <div class='centraliza'>
        <img src={Logo} alt="SuportIA Project" className='suia-logo' width={300} />
        <Typography variant="h4" component="h1" gutterBottom>Cadastro - SuportIA Project</Typography>
      </div>
      <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Senha" type="password" variant="outlined" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>Cadastrar</Button>
      <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
        Já tem uma conta? <Link href="/">Faça login</Link>
      </Typography>
    </Container>
  );
}

export default Register;
