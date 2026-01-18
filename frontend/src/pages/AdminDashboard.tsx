import { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

export default function AdminDashboard() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('motor');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category', category);
        if (image) formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/api/blogs', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage('Blog posted successfully!');
            setTitle('');
            setContent('');
            setImage(null);
        } catch (err) {
            setMessage('Failed to post blog.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-[#0f4c81] mb-8 border-b pb-4">Create New Blog Post</h1>

                {message && (
                    <div className={`p-4 mb-6 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0f4c81] outline-none"
                            placeholder="Enter an engaging title"
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0f4c81] outline-none bg-white"
                            >
                                <option value="motor">Motor Insurance</option>
                                <option value="health">Health Insurance</option>
                                <option value="life">Life Insurance</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-3 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0f4c81] hover:file:bg-blue-100"
                                accept="image/*"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0f4c81] outline-none h-64"
                            placeholder="Write your blog content here..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0f4c81] hover:bg-[#0a355c] transform hover:-translate-y-1'
                            }`}
                    >
                        {loading ? 'Publishing...' : 'Publish Blog Post'}
                    </button>
                </form>
            </div>
        </div>
    );
}
