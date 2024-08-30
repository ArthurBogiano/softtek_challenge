
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import DashboardLayout from '../components/DashboardLayout';

function AddAttendant() {
  return (
    <DashboardLayout>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>Cadastro de Atendente</Typography>
        <TextField label="Nome do Atendente" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email do Atendente" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>Cadastrar</Button>
      </Container>
    </DashboardLayout>
  );
}

export default AddAttendant;
