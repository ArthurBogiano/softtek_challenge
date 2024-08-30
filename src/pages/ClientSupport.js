
import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ClientSupport() {
  const supportRequests = [
    { id: 1, client: 'Cliente 1', issue: 'Problema na Rede', status: 'Aberto', priority: 'Alta' },
    { id: 2, client: 'Cliente 2', issue: 'Sistema Lento', status: 'Em Progresso', priority: 'Média' },
    { id: 3, client: 'Cliente 3', issue: 'Falha ao Iniciar', status: 'Resolvido', priority: 'Baixa' },
  ];

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom>Atendimento de Clientes</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Problema</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Prioridade</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supportRequests.map(request => (
              <TableRow key={request.id}>
                <TableCell>{request.client}</TableCell>
                <TableCell>{request.issue}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>{request.priority}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" aria-label="view" component={Link} to={`/client-chat/${request.id}`}>
                    <VisibilityIcon />
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

export default ClientSupport;
