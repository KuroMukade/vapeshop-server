import React from 'react';

import { AuthRoutes, PublicRoutes } from './routes';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import Header from './components/Header';
import Footer from './components/Footer';
import { userSlice } from './store/reducers/UserSlice';
import { fetchProducts } from './store/reducers/ActionCreators';

function App() {
  const { isAuth } = useAppSelector(state => state.userReducer);

  return (
    <div className="App">
      <Header />
      <div className="main container">
        {isAuth ? <AuthRoutes /> : <PublicRoutes />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
