import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

const PostDetail = () => {
    const { postId } = useParams(); //
    // Fetch chi tiết bài viết dựa theo postId
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`); // [cite: 200]

    if (loading) return <p>Loading post detail...</p>;
    if (error) return <p>Error loading post!</p>;

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', background: '#f9f9f9' }}>
            {post && (
                <>
                    <h3>{post.title} (ID: {post.id})</h3>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
};

export default PostDetail;