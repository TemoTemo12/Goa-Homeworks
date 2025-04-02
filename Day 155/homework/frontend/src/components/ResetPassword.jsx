import { useState } from 'react';
import axios from 'axios';

export default function ResetPassword() {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = async () => {
        try {
            await axios.post('http://localhost:5000/auth/reset-password', { token, newPassword });
            alert('Password reset successful');
        } catch (err) {
            alert('Password reset failed');
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <input className="border p-2" placeholder="Reset Token" onChange={(e) => setToken(e.target.value)} />
            <input className="border p-2" type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
            <button className="bg-red-500 text-white px-4 py-2" onClick={handleResetPassword}>Reset Password</button>
        </div>
    );
}
