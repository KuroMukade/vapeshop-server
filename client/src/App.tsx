import React, { useState, useEffect } from 'react';

import { AuthRoutes, PublicRoutes } from './routes';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import Header from './components/Header';
import Footer from './components/Footer';
import { userSlice } from './store/reducers/UserSlice';
import { check } from './http/userAPI';

import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './components/Loader';

function App() {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const { setUser, setIsAuth } = userSlice.actions;
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    check()
      .then((data) => { 
        dispatch(setUser(false));
        dispatch(setIsAuth(false));
      })
      .finally(() => {
        setLoading(false)});
  }, []);

  return (
    loading ? <Loader/> :
    <div className="App">
      <Header />
      <div className="main container">{isAuth ? <AuthRoutes /> : <PublicRoutes /> }</div>
      <Footer />
    </div>
  );
}

export default App;
