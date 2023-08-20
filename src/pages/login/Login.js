import { React, useState } from "react";
import "./login.css";
 const Login = ({onClose, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log("Response data:", data);
            if(response.ok){
                onClose();
                onSuccess();
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }


    return (
        <div className="login-container-5">
            <div className="input-container-5">
                <label className="input-label-5">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" 
                placeholder="Youremail@email.com" className="input-field-5"></input>
            </div>
            <div className="input-container-5">
                <label className="input-label-5" >Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" 
                placeholder="**********" className="input-field-5"></input>  
            </div>
            <div  className="login-button-container-5" >
                <button className="login-button2" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};
export default Login;