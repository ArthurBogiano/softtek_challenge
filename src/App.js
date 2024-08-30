import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Attendants from './pages/Attendants';
import AddAttendant from './pages/AddAttendant';
import Clients from './pages/Clients';
import ClientSupport from './pages/ClientSupport';
import ClientChat from './pages/ClientChat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/attendants" element={<Attendants />} />
          <Route path="/add-attendant" element={<AddAttendant />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client-support" element={<ClientSupport />} />
          <Route path="/client-chat/:clientId" element={<ClientChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
