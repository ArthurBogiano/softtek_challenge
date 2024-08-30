
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardLayout from '../components/DashboardLayout';

function Clients() {
  const clients = [
    { id: 1, name: 'Cliente 1', problem: 'Problema na Rede', status: 'Aberto' },
    { id: 2, name: 'Cliente 2', problem: 'Sistema Lento', status: 'Em Progresso' },
    { id: 3, name: 'Cliente 3', problem: 'Falha ao Iniciar', status: 'Resolvido' },
  ];

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom>Lista de Clientes</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Problema</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map(client => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.problem}</TableCell>
                <TableCell>{client.status}</TableCell>
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

export default Clients;
