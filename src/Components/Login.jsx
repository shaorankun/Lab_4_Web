import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext.jsx';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const usernameRef = useRef(null); //

    // Bonus: Focus vào input khi trang vừa load
    useEffect(() => {
        usernameRef.current.focus(); // [cite: 205]
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        login(); // Set state global thành true
        navigate('/dashboard'); // Chuyển hướng sang dashboard [cite: 176]
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input
                    ref={usernameRef}
                    type="text"
                    placeholder="Enter username..."
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;