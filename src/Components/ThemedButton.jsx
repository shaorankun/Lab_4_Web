import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import Context vừa tạo

const ThemedButton = () => {
    // 3. Sử dụng useContext để đọc giá trị theme hiện tại
    const theme = useContext(ThemeContext); // [cite: 140, 141]

    // Định nghĩa style dựa trên theme
    const styles = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: '1px solid #ccc',
        padding: '10px 20px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    return (
        // Render button với className hoặc style động
        <button style={styles}>
            I am a {theme} button!
        </button> // [cite: 142]
    );
};

export default ThemedButton;