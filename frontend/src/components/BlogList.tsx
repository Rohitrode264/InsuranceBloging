import { useEffect, useState } from 'react';
import axios from 'axios';

interface Blog {
    _id: string;
    title: string;
    content: string;
    image: string;
    category: string;
    createdAt: string;
}

export default function BlogList({ category }: { category?: string }) {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const url = category
                    ? `http://localhost:5000/api/blogs?category=${category}`
                    : 'http://localhost:5000/api/blogs';
                const { data } = await axios.get(url);
                setBlogs(data);
            } catch (err) {
                console.error("Failed to fetch blogs");
            }
        };
        fetchBlogs();
    }, [category]);

    if (blogs.length === 0) return null;

    return (
        <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#0f4c81] mb-6 flex items-center">
                <span className="w-2 h-8 bg-[#f59e0b] mr-3 rounded-full"></span>
                Latest Insights
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div key={blog._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f4c81]">
                                {blog.category}
                            </div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                            <div className="text-xs text-gray-500 mb-2">
                                {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h4>
                            {/* Strip HTML tags for preview */}
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                {blog.content.replace(/<[^>]+>/g, '')}
                            </p>
                            <button className="text-[#0f4c81] font-semibold text-sm hover:underline mt-auto self-start">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
