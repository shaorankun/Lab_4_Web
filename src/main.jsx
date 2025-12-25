import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --- Context Imports ---
import { ThemeContext } from './ThemeContext';
import { AuthProvider } from './Contexts/AuthContext.jsx'; // Import AuthProvider cho Section 8 [cite: 170]

// --- Existing Components (Bài tập cũ) ---
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import UserProfile from './Components/UserProfile';

// --- Capstone Components (Section 8) ---
import Login from './Components/Login.jsx';
import Dashboard from './Components/Dashboard.jsx';
import PostDetail from './Components/PostDetail.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

// --- Cấu hình Router ---
const router = createBrowserRouter([
    // 1. NHÓM ROUTE CŨ (Giữ nguyên không đổi)
    {
        path: "/",
        element: <Layout />, // Layout chung có Navbar cũ
        children: [
            {
                index: true, // Trang chủ hiển thị danh sách bài tập
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users/:userId",
                element: <UserProfile />,
            },
        ],
    },

    // 2. NHÓM ROUTE MỚI (Section 8 - Capstone Project)
    {
        // Đổi thành /login để không đè lên trang Home cũ
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        // Bọc Dashboard bằng ProtectedRoute [cite: 186]
        element: <ProtectedRoute />,
        children: [
            {
                path: "", // Đường dẫn: /dashboard
                element: <Dashboard />,
                children: [
                    {
                        // Dynamic route cho bài viết chi tiết [cite: 198]
                        path: "post/:postId",
                        element: <PostDetail />
                    },
                    {
                        // Hiển thị khi chưa chọn bài nào
                        path: "",
                        element: <p style={{padding: 20}}>Select a post to view details</p>
                    }
                ]
            },
        ],
    },
]);

// --- Component Wrapper ---
function AppEntry() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        // Wrap ThemeContext bên ngoài cùng
        <ThemeContext.Provider value={theme}>

            {/* Wrap thêm AuthProvider cho Section 8 [cite: 174] */}
            <AuthProvider>

                <div style={{
                    minHeight: '100vh',
                    backgroundColor: theme === 'light' ? '#ffffff' : '#222',
                    color: theme === 'light' ? '#000' : '#fff',
                    transition: 'all 0.3s'
                }}>

                    {/* Nút đổi Theme giữ nguyên */}
                    <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
                        <button onClick={toggleTheme}>
                            Toggle Theme: {theme.toUpperCase()}
                        </button>
                    </div>

                    {/* Router Provider */}
                    <RouterProvider router={router} />

                </div>
            </AuthProvider>
        </ThemeContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppEntry />
    </React.StrictMode>
);