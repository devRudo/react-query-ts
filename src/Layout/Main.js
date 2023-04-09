import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f1f1f1',
        display: 'flex',
      }}
    >
      <aside
        style={{
          width: 200,
          background: '#343a40',
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // gap: 10,
          }}
        >
          <Link to="/full-functioning-example">
            <p style={{ color: '#fff' }}>Full Example</p>
          </Link>
          <Link to="/queries">
            <p style={{ color: '#fff' }}>Queries</p>
          </Link>
        </div>
      </aside>
      <main
        style={{
          width: 'calc(100vw - 200px)',
          padding: 20,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Main;
