import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext.jsx';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Nếu chưa đăng nhập -> Đá về trang Login (/)
    // Nếu đã đăng nhập -> Cho phép render nội dung con (Outlet)
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />; // [cite: 184, 185]
};

export default ProtectedRoute;