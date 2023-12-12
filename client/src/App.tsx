import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { css } from '@emotion/react';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import NewProject from './Pages/NewProject';

function App() {
  const [count, setCount] = useState(0);

  const containerCss = {
    margin: '0 auto',
    padding: '5rem 2rem 2rem',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      width: '75%'
    }
  };

  return (
    <>
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React & Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn way more
      </p>
    </>
  );
}

export default App;
