
import React from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardLayout from '../components/DashboardLayout';

function Attendants() {
  const attendants = [
    { id: 1, name: 'Atendente 1', email: 'atendente1@suportia.com', role: 'Nível 1' },
    { id: 2, name: 'Atendente 2', email: 'atendente2@suportia.com', role: 'Nível 2' },
    { id: 3, name: 'Atendente 3', email: 'atendente3@suportia.com', role: 'Nível 1' },
  ];

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom>Lista de Atendentes</Typography>
        <Button variant="contained" color="primary" component={Link} to="/add-attendant">Adicionar Atendente</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Função</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendants.map(attendant => (
              <TableRow key={attendant.id}>
                <TableCell>{attendant.name}</TableCell>
                <TableCell>{attendant.email}</TableCell>
                <TableCell>{attendant.role}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </DashboardLayout>
  );
}

export default Attendants;
