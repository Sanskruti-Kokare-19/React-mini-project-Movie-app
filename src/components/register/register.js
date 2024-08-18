import React , { useState }from "react";
import "./register.css"
import axios from "axios";


const Register = () =>{

    const [ user , setUser ] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    }) 

    const handleChange = e =>{
        const {name , value } = e.target;
        setUser({
            ...user,
            [name] : value
        })
        // console.log(e.target);

    }   

    const register = ()=>{
        const {name , email , password , reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            // alert("posted")
            axios.post("http://localhost:9002/register", user)
            .then(res => console.log(res))
        }else{
            alert("invalid input")
        }
        
    }

    return(
        <div className="register">
            {/* {console.log("User" , user)} */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name}  onChange={handleChange} placeholder="Your name"></input>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Your email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder=" Your Password"></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder=" Re-enter Password"></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" >Login</div>
        </div>
    );
}

export default Register;