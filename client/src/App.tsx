import React, { useEffect } from 'react';

import { AuthRoutes, PublicRoutes } from './routes';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import Header from './components/Header';
import { userSlice } from './store/reducers/UserSlice';
import { fetchProducts } from './store/reducers/ActionCreators';

function App() {
  const { isAuth } = useAppSelector(state => state.userReducer);
  const { devices } = useAppSelector(state => state.deviceReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

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
