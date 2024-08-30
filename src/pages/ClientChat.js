
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import DashboardLayout from '../components/DashboardLayout';

function ClientChat() {
  const { clientId } = useParams();

  const messages = [
    { from: 'Cliente', text: 'Preciso de ajuda com minha conexão.' },
    { from: 'IA', text: 'Tente reiniciar seu roteador.' },
  ];

  const suggestions = [
    'Verifique o cabo de rede.',
    'Reinicie o computador.',
    'Teste outra conexão.',
  ];

  return (
    <DashboardLayout>
      <Container>
        <Typography variant="h4" gutterBottom>Chat de Atendimento - Cliente {clientId}</Typography>
        <Box display="flex">
          <Box flex={2} marginRight={2}>
            {messages.map((msg, index) => (
              <Box key={index} bgcolor="#2a2a2a" color="#fff" p={2} mb={1} borderRadius={1}>
                <Typography><strong>{msg.from}:</strong> {msg.text}</Typography>
              </Box>
            ))}
            <TextField variant="outlined" placeholder="Digite sua mensagem..." fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>Enviar</Button>
          </Box>
          <Box flex={1}>
            <Typography variant="h5" gutterBottom>Sugestões de Resposta</Typography>
            <List>
              {suggestions.map((suggestion, index) => (
                <ListItem key={index}>
                  <ListItemText primary={suggestion} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </DashboardLayout>
  );
}

export default ClientChat;
