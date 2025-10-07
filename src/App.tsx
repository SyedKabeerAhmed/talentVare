import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import TopCompanies from './pages/TopCompanies';
import JobTracker from './pages/JobTracker';
import Calendar from './pages/Calendar';
import Documents from './pages/Documents';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/top-companies" element={<Layout><TopCompanies /></Layout>} />
        <Route path="/job-tracker" element={<Layout><JobTracker /></Layout>} />
        <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
        <Route path="/documents" element={<Layout><Documents /></Layout>} />
        <Route path="/messages" element={<Layout><Messages /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
