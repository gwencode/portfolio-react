import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProject from './pages/NewProject';

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

  console.log('User in localStorage: ', localStorage.getItem('user'));

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
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/projects" element={<NewProject />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
