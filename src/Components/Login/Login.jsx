import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


/**
 * Componente Login - Pantalla principal de login
 * 
 * Este componente maneja el inicio de sesión de un usuario, validando
 * el gmail de usuario y la contraseña ingresados. Si los datos son
 * correctos, el usuario es redirigido a la página "/home".
 */
function Login() {
    // Declaración de variables de estado para manejar el nombre de usuario y la contraseña
    const [email, setEmail] = useState(""); // Valor del nombre de usuario
    const [password, setPassword] = useState(""); // Valor de la contraseña
    const [rememberMe, setRememberMe] = useState("");
    const [error, setError] = useState(false); // Estado para manejar errores
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            setError(true); // Muestra un error si hay campos vacíos
            return;
        }
        setError(false);

        // Aquí podrías implementar la lógica real de autenticación
        console.log("Email:", email);
        console.log("Contraseña:", password);

        // Redirige al usuario a la página /home
        navigate("/home");
    };

    // Funciones para manejar los cambios en los inputs
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f0]">
            <h1>Login</h1>
            <p>Ingrese sus credenciales para continuar</p>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="username">
                        <FontAwesomeIcon icon={faUser} /> Email
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        <FontAwesomeIcon icon={faLock} /> Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

                <button type="submit">
                    <FontAwesomeIcon icon={faKey} /> Login
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>Please fill out all fields to enter.</p>} 
        </div>
    );
}

export default Login;
