import { createClient } from '@/lib/supabaseServer';
import PostRenderer from '@/components/PostRenderer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

// Helper to fetch data
async function getPost(slug: string) {
    const supabase = await createClient();
    const { data: post } = await supabase
        .from('posts')
        .select('*, categories(title, slug), profiles(full_name)')
        .eq('slug', slug)
        .single();
    return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};

    return {
        title: `${post.title} | JivanSecure`,
        description: post.title, // In real app, use a dedicated description field or extract from blocks
        openGraph: {
            title: post.title,
            images: post.cover_image_url ? [post.cover_image_url] : [],
        }
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-20 pt-32 lg:pt-40">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Heading Area */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tighter">
                        {post.title}
                    </h1>

                    {post.categories && (
                        <div className="text-lg md:text-xl font-medium text-slate-400 mb-6 uppercase tracking-widest italic">
                            {post.categories.title}
                        </div>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm font-medium mb-12">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-900">By {post.profiles?.full_name || 'Satish Mishra'}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <time dateTime={post.created_at}>
                            {new Date(post.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                        {post.status !== 'published' && (
                            <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] border border-orange-200 uppercase font-bold">
                                {post.status}
                            </span>
                        )}
                    </div>
                </div>

                {/* Cover Image */}
                {post.cover_image_url && (
                    <div className="mb-16 -mx-4 md:mx-0 group">
                        <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
                            <img
                                src={post.cover_image_url}
                                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                alt={post.title}
                            />
                        </div>
                    </div>
                )}

                {/* Blog Content Blocks */}
                <PostRenderer blocks={post.blocks} />
            </div>
        </article>
    );
}
