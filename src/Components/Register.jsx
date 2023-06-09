import { useState } from "react";
import "../Components/Register.css"
const Register = () =>{

    const [data , setData] = useState({
        fullname: "",
        email: "",
        password: "",
        id: ""
    });

    const [user, setUser] = useState([]);

    const registerInput = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
        setData({...data, [name]:value})
    }

    const registerSubmit = (e)=>{
        e.preventDefault();
        setUser([...data])

    }


    return(<>
   <div className="register-main">
    <div className="register-card">
    <h1 className="register-heading">Create New Account</h1>

    <form onSubmit={registerSubmit} action="">
        <div className="register-form">
            <label className="label-box" htmlFor="">Full Name : </label>
            <input name="fullname" onChange={registerInput} className="input-box" type="text" placeholder="Enter your full name" />

            <label className="label-box" htmlFor="">email : </label>
            <input name="email" onChange={registerInput} className="input-box" type="email" placeholder="Enter your email" />

            <label className="label-box" htmlFor="">Password : </label>
            <input name="password" onChange={registerInput} className="input-box" type="password" placeholder="Create password" />
        </div>
        <button className="submit-btn" type="submit">Register</button>
    </form>

    </div>
   </div>
    </>)
};

export default Register;