import { useState, useEffect } from 'react';

const PostFetcher = () => {
    // 1. Tạo 3 biến state: data, loading, error [cite: 49]
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hàm async để fetch dữ liệu
        const fetchData = async () => {
            // 3. Set loading = true trước khi request (dù mặc định đã true) [cite: 56]
            setLoading(true);

            try {
                // 2. Fetch data từ API public khi component mount [cite: 52]
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

                // (Bổ sung logic từ 3.1) Kiểm tra response.ok để bắt lỗi 404/500
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();

                // 3. Success: Lưu data và xóa error [cite: 57]
                setData(result);
                setError(null);
            } catch (err) {
                // 3. Catch: Lưu lỗi và xóa data [cite: 60]
                setError(err);
                setData(null);
            } finally {
                // 3. Finally: Tắt trạng thái loading [cite: 62]
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Dependency array rỗng để chỉ chạy 1 lần khi mount

    // 4. Conditional Rendering (Hiển thị UI theo điều kiện) [cite: 63]

    // Nếu đang loading [cite: 66]
    if (loading) return <div>Loading...</div>;

    // Nếu có lỗi [cite: 67]
    if (error) return <div>Error: {error.message}</div>;

    // Nếu có dữ liệu (thành công) [cite: 69]
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h1>{data && data.title}</h1>
            <p>{data && data.body}</p>
        </div>
    );
};

export default PostFetcher;