// src/Components/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link để điều hướng

import MouseTracker from "./MouseTracker.jsx";
import UncontrolledLogin from "./UncontrolledLogin.jsx";
import PostFetcher from "./PostFetcher.jsx";
import ControlledSignup from "./ControlledSignup.jsx";
import useLocalStorage from "../Hooks/useLocalStorage.js";

const Home = () => {
    const [count, setCount] = useLocalStorage('my-counter', 0);
    const [showTracker, setShowTracker] = useState(true);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lab 4: Home Page (Các bài tập cũ)</h1>

            <div style={{ padding: '20px', border: '2px dashed green', margin: '20px 0' }}>
                <h3>Section 7: useLocalStorage Demo</h3>
                <p>Giá trị Count: <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)}>
                    Increment (+1)
                </button>
                <p><em>(Hãy thử F5 lại trang, số này sẽ không bị reset về 0)</em></p>
            </div>

            {/* Link dẫn sang bài tập Section 5 */}
            <div style={{ marginBottom: '20px', padding: '10px', background: '#eee' }}>
                <p>Điều hướng Router (Section 5):</p>
                <Link to="/about">Go to About Page</Link>
            </div>

            <button
                onClick={() => setShowTracker(!showTracker)}
                style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}
            >
                {showTracker ? 'Unmount Tracker (Off)' : 'Mount Tracker (On)'}
            </button>

            <hr />

            {showTracker && <MouseTracker />}
            {!showTracker && <p>Component removed</p>}

            <UncontrolledLogin/>
            <PostFetcher/>
            <ControlledSignup/>
        </div>
    );
};

export default Home;