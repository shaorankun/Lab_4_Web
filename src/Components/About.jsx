import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate(); // Hook để điều hướng bằng code

    return (
        <div>
            <h1>About Us</h1>
            <p>This is a demo for React Router v6.</p>

            {/* 5.1: Button dùng onClick để quay về Home */}
            <button onClick={() => navigate('/')}>
                Go Back Home
            </button>
        </div>
    );
};

export default About;