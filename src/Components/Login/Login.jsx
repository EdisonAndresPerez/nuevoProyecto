import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../../index.css'; 

/**
 * Componente Login - Pantalla principal de login
 * 
 * Este componente maneja el inicio de sesión de un usuario, validando
 * el gmail de usuario y la contraseña ingresados. Si los datos son
 * correctos, el usuario es redirigido a la página "/home".
 */
function Login() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [rememberMe, setRememberMe] = useState("");
    const [error, setError] = useState(false); 
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            setError(true); 
            return;
        }
        setError(false);

        console.log("Email:", email);
        console.log("Contraseña:", password);

        navigate("/home");
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <p className="mb-4 text-center">Ingrese sus credenciales para continuar</p>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">
                            <FontAwesomeIcon icon={faUser} /> Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            <FontAwesomeIcon icon={faLock} /> Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        <FontAwesomeIcon icon={faKey} /> Login
                    </button>
                </form>

                {error && <p className="mt-4 text-red-500 text-center">Please fill out all fields to enter.</p>} 
            </div>
        </div>
    );
}

export default Login;