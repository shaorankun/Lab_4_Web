import { useParams } from 'react-router-dom';

const UserProfile = () => {
    // 5.2: Lấy userId từ URL (ví dụ: /users/123 -> userId = "123")
    const { userId } = useParams();

    return (
        <div style={{ border: '1px dashed blue', padding: '20px' }}>
            <h1>User Profile</h1>
            <p>Đang xem hồ sơ của User ID: <strong>{userId}</strong></p>
        </div>
    );
};

export default UserProfile;