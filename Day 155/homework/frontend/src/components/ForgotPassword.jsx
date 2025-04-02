import { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
    const [username, setUsername] = useState('');

    const handleForgotPassword = async () => {
        try {
            await axios.post('http://localhost:5000/auth/forgot-password', { username });
            alert('Reset link sent');
        } catch (err) {
            alert('Error sending reset link');
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <input className="border p-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <button className="bg-yellow-500 text-white px-4 py-2" onClick={handleForgotPassword}>Forgot Password</button>
        </div>
    );
}
