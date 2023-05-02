import React, { useState } from "react";

const Login = ({onSubmit}) => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

 const handleSubmit = (e) =>{
    e.preventDefault()
    onSubmit ({email, password})
 }
 
 return (
    <>
    <div className="card mt-2">
      <div className="card-body">
        <h5 className="card-title text-center display-4">Login</h5>
        <form onSubmit ={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="email"className="form-label" > Email</label>
            <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password"className="form-label" > Password</label>
            <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={!email.trim() || !password.trim()} >Login</button>
        </form>
      </div>
    </div>
    </>

  );
};

export default Login;