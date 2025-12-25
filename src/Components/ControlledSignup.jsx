import { useState } from 'react';

const ControlledSignup = () => {
    // 1. Sử dụng useState để tạo một object state duy nhất chứa cả email và password
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    }); // [cite: 73, 74]

    // 3. Hàm xử lý thay đổi chung cho cả 2 input
    const handleChange = (event) => {
        // Lấy name và value từ event.target
        const { name, value } = event.target;

        // Cập nhật state động dựa trên name của input
        setFormData((prevData) => ({
            ...prevData, // Giữ lại các giá trị cũ (quan trọng!)
            [name]: value // Cập nhật key tương ứng với name
        }));
    }; // [cite: 81]

    // 4. Hàm xử lý submit
    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn load lại trang
        console.log('Form Data Submitted:', formData); // Log state ra console
    }; // [cite: 83, 84]

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h3>Controlled Signup Form</h3>

            {/* 2. Render form với 2 input */}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email: </label>
                    <input
                        type="email"
                    name="email" // Bắt buộc phải khớp với key trong state [cite: 80]
                    value={formData.email} // Ràng buộc value vào state [cite: 78]
                    onChange={handleChange}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password" // Bắt buộc phải khớp với key trong state
                        value={formData.password} // Ràng buộc value vào state
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default ControlledSignup;