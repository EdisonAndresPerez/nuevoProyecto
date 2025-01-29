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
        console.log("Recordarme:", rememberMe);

        navigate("/overview");
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: '#E8ECD7' }}
      >
  
        {/* Contenedor del formulario */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    {/* Barra superior */}
        <div className="w-full bg-[#1F4529] h-6"></div>
          <h1 className="text-2xl font-bold mb-6 text-center text-[#1F4529]">Login</h1>
  
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Correo electrónico
              </label>
              <input
                type="text"
                id="username"
                value={email}
                onChange={handleEmailChange}
                placeholder="Ingrese su correo electrónico"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4529]"
              />
            </div>
  
            {/* Contraseña */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="********"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F4529]"
              />
            </div>
  
            {/* Recordarme y olvidé mi contraseña */}
            <div className="mb-4 flex items-center justify-between">
              <label htmlFor="rememberMe" className="text-gray-700 text-sm flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="mr-2"
                />
                Recuérdame
              </label>
              <a href="/forgot-password" className="text-[#1F4529] hover:underline text-sm">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
  
            {/* Botón de Login */}
            <button
              type="submit"
              className="w-full bg-[#1F4529] text-white py-2 rounded-lg hover:bg-[#14421E] transition duration-300 mb-4"
            >
              Login
            </button>
  
            {/* Botón de Google */}
            <button
              type="button"
              className="w-full bg-[#1F4529] text-white py-2 rounded-lg hover:bg-[#14421E] transition duration-300"
            >
              Iniciar con Google
            </button>
          </form>
  
          {/* Registro */}
          <p className="mt-6 text-center text-sm">
            ¿No tienes cuenta?{' '}
            <a href="/register" className="text-[#1F4529] font-bold hover:underline">
              Regístrate
            </a>
          </p>
  
          {/* Mensaje de error */}
          {error && (
            <p className="mt-4 text-red-500 text-center text-sm">
              Por favor completa todos los campos para continuar.
            </p>
          )}
        </div>
      </div>
    );
}

export default Login;