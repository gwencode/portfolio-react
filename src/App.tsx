import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { css } from '@emotion/react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const containerCss = {
    maxWidth: '1280px',
    margin: '64px auto 0',
    padding: '2rem',
    textAlign: 'center'
  };

  return (
    <>
      <Navbar />
      <div css={containerCss}>
        <Home />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
