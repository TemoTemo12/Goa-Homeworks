import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:5000/auth/register', { username, password });
            alert('User registered');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <input className="border p-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input className="border p-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-green-500 text-white px-4 py-2" onClick={handleRegister}>Register</button>
        </div>
    );
}
