
import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <CssBaseline />
      <Header onMenuClick={handleSidebarToggle} />
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
      <main style={{ marginTop: '64px', padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
