import React from 'react';

import { AuthRoutes, PublicRoutes } from './routes';
import { useUserDispatch, useUserSelector } from './hooks/redux';

import Header from './components/Header';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const { isAuth } = useUserSelector(state => state.userReducer);

  console.log(isAuth);
  return (
    <div className="App">
      <Header />
      <div className="main container">
        {isAuth ? <AuthRoutes /> : <PublicRoutes />}
      </div>
    </div>
  );
}

export default App;
