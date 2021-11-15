import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './router/AppRouter';
import { UserProvider } from './functionalComponent/UserContext';


function App() {
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;