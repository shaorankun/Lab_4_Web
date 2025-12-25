import { useRef } from 'react';

const UncontrolledLogin = () => {
    // 1. Tạo biến tham chiếu (ref)
    const usernameRef = useRef(null);

    // 4. Hàm xử lý khi submit form
    const handleSubmit = (e) => {
        // Ngăn chặn hành vi load lại trang của form
        e.preventDefault();

        // Truy cập trực tiếp giá trị input qua DOM node
        alert("Giá trị nhập vào là: " + usernameRef.current.value);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h3>Login Form (Uncontrolled)</h3>

            {/* 2. Form chứa input và button */}
            <form onSubmit={handleSubmit}>
                <label>Username: </label>

                {/* 3. Gắn ref vào input */}
                <input
                    type="text"
                    ref={usernameRef}
                    placeholder="Nhập tên đăng nhập..."
                />

                <button type="submit" style={{ marginLeft: '10px' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default UncontrolledLogin;