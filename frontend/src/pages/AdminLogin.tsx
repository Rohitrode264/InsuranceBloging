import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [secret, setSecret] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/admin/login', { secret });
            if (data.success) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError('Invalid Secret Key');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#0f4c81]">Admin Login</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="password"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="Enter Admin Secret"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                    />
                    <button type="submit" className="w-full bg-[#0f4c81] text-white py-3 rounded-lg font-bold hover:bg-[#0a355c] transition-colors">
                        Access Dashboard
                    </button>
                </form>
            </div>
        </div>
    );
}
