import axios from "axios";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";


function Login() {


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { auth, setAuth } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const body = { username, password };
            console.log(body);

            const { data } = await axios.post("http://localhost:5000/login", {
                username,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(data);
            setAuth({ ...data });
            navigate(from, { replace: true });
        } catch (err) {

        }



    }

    useEffect(() => {
        console.log(auth.isAdmin);
    }, [auth])

    return (
        <>
            <div className="loginContainer" >
                <form onSubmit={handleLogin}>
                    <label for="username">Username:</label>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <button className="mb-4">Log In</button>

                    <p>No account? <Link to="/login">Click here to register</Link></p>

                </form>
            </div>
        </>
    );
}

export default Login;