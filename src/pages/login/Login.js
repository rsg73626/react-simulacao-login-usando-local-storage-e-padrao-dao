import { useState } from "react";
import { useNavigate } from "react-router";
import dao from "../../utils/UsersDAO";
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (email, password) => {
        if (dao.login(email, password) !== undefined) {
            navigate("/");
        } else {
            alert("E-mail ou senha indocrreto.");
        }
    }

    return (
        <main id="login">
            <h1>Login</h1>
            <form
                onSubmit={
                    (element) => {
                        element.preventDefault();
                        login(email, password);
                    }
                }
            >
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email" id="email" 
                    placeholder="entre com o e-mail" 
                    value={email} 
                    required 
                    onChange={ element => setEmail(element.target.value) }
                    autoComplete="off"
                />
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="entre com a senha" 
                    required 
                    value={password} 
                    onChange={ element => setPassword(element.target.value) }
                    autoComplete="off"
                />
                <input type="submit" value="Entrar" />
            </form>
        </main>
    );
}

export default Login;