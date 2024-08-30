
import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Container maxWidth="lg">
      <Typography variant="body2" color="textSecondary" align="center" style={{ padding: '1rem 0' }}>
        &copy; {new Date().getFullYear()} SuportIA. Todos os direitos reservados.
      </Typography>
    </Container>
  );
}

export default Footer;
