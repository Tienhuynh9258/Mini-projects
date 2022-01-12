import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import {HomePage
    // ,LoginPage,RegisterPage
} from './pages'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />

        {/* <Route exact path="/register" element={<RegisterPage/>} />
        <Route exact path="/login" element={<LoginPage/>} /> */}

      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
