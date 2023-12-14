import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// Admin pages
import Login from './pages/Login';
import NewProject from './pages/NewProject';
import ProjectDetails from './pages/ProjectDetails';

import AuthContext from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

function App() {
  const containerCss = {
    margin: '0 auto',
    padding: '5rem 2rem 2rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      width: '75%'
    }
  };

  const { user } = useAuth();
  const setUser = () => {};

  let admin: string | null = localStorage.getItem('user');
  // console.log('Admin in localStorage: ', admin);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Navbar />
          <div css={containerCss}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin/projects"
                element={
                  <ProtectedRoute admin={admin}>
                    <NewProject />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
