import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            alert('Login successful');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <input className="border p-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input className="border p-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Login</button>
        </div>
    );
}
