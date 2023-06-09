import { useState } from "react";
const Login = () =>{

    const [user, setUser] = useState([]);

  

    const loginSubmit = (e)=>{
     
    }
    const loginInput = ()=>{

    }

    return(<>
   <div className="register-main">
    <div className="register-card">
    <h1 className="register-heading">Login Now</h1>

    <form onSubmit={loginSubmit} action="">
        <div className="register-form">
         

            <label className="label-box" htmlFor="">email : </label>
            <input name="email" onChange={loginInput} className="input-box" type="email" placeholder="Enter your email" />

            <label className="label-box" htmlFor="">Password : </label>
            <input name="password" onChange={loginInput} className="input-box" type="password" placeholder="Create password" />
        </div>
        <button className="submit-btn" type="submit">Login</button>
    </form>

    </div>
   </div>
    </>)
};

export default Login;