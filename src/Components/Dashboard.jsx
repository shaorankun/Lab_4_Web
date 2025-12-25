import { Link, Outlet } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useAuth } from '../Contexts/AuthContext.jsx';

const Dashboard = () => {
    const { logout } = useAuth();
    // Fetch danh sách posts
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts'); // [cite: 192]

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Blog Dashboard</h2>
                <button onClick={logout}>Logout</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '30% 70%', gap: '20px' }}>
                {/* Cột trái: Danh sách bài viết */}
                <div style={{ borderRight: '1px solid #ccc', paddingRight: '10px' }}>
                    <h3>Posts List</h3>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <ul>
                        {posts && posts.slice(0, 10).map(post => ( // Lấy 10 bài đầu cho gọn
                            <li key={post.id} style={{ marginBottom: '10px' }}>
                                <Link to={`/dashboard/post/${post.id}`}>
                                    {post.title.substring(0, 20)}...
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cột phải: Nội dung chi tiết (PostDetail sẽ hiện ở đây) */}
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;