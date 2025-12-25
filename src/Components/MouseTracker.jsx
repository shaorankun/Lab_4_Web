import { useEffect } from 'react';

const MouseTracker = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log('X:', e.clientX, 'Y:', e.clientY); //
        };

        console.log('MouseTracker Mounted - Start listening');
        window.addEventListener('mousemove', handleMouseMove); //

        return () => {
            console.log('MouseTracker Unmounted - Stop listening');
            window.removeEventListener('mousemove', handleMouseMove); //
        };
    }, []);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Mouse Tracker Component</h2>
            <p>Move mouse and check console for cordinate</p>
        </div>
    );
};

export default MouseTracker;