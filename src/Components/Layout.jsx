import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* Thanh điều hướng hiển thị ở mọi trang */}
            <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '10px' }}>Home</Link> |
                <Link to="/about" style={{ margin: '0 10px' }}>About</Link> |
                {/* Link thử nghiệm cho Dynamic Route */}
                <Link to="/users/123" style={{ marginLeft: '10px' }}>User 123 Profile</Link>
            </nav>

            {/* Outlet là nơi nội dung các trang con (Home, About...) sẽ hiển thị */}
            <div style={{ padding: '0 20px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;