import React from 'react';

import AppRoutes from './routes';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main container'>    
        <AppRoutes />    
      </div>
    </div>
  );
}

export default App;
