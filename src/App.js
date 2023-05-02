import React, { useState } from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import Alert from "./components/alert/Alert";


function App() {

  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const validLogin = (user) =>{
    
    const validEmail ="pedrogutes@gmail.com"
    const validPassword ="123456"
    if (user.email ===validEmail && user.password === validPassword){
      setAlertMessage('Login success')
      setAlertType('success')
    } else{
      setAlertMessage('Login failed')
      setAlertType('danger')
    }
  }

  return (
    <>
    <div className="container">
      <Login onSubmit={validLogin} />
      <Alert message={alertMessage} type={alertType}/>
    </div>
    </>
  );
};

export default App;