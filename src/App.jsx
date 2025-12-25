import { useState } from 'react';

import MouseTracker from "./Components/MouseTracker.jsx";
import UncontrolledLogin from "./Components/UncontrolledLogin.jsx";
import PostFetcher from "./Components/PostFetcher.jsx";
import ControlledSignup from "./Components/ControlledSignup.jsx";

function App() {
    const [showTracker, setShowTracker] = useState(true);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Lab 4</h1>

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
}

export default App;