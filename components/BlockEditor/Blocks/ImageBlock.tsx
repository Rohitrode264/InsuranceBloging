'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, X, UploadCloud, Loader2 } from 'lucide-react';
import { createClient } from '@/lib/supabaseClient';

interface ImageBlockProps {
    data: { url: string; caption?: string };
    style?: { width?: string; borderRadius?: string };
    onChange: (data: any, style: any) => void;
    onDelete: () => void;
}

export function ImageBlock({ data, style, onChange, onDelete }: ImageBlockProps) {
    const [uploading, setUploading] = useState(false);
    const supabase = createClient();

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
            const filePath = `blog-images/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('public-media')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('public-media')
                .getPublicUrl(filePath);

            onChange({ ...data, url: publicUrl }, style);
        } catch (error: any) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...data, caption: e.target.value }, style);
    };

    return (
        <div className="group relative w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 transition-all hover:border-slate-300">
            <button
                onClick={onDelete}
                className="absolute top-2 right-2 p-1.5 bg-white shadow-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 text-slate-400 hover:text-red-500 hover:scale-110"
            >
                <X size={16} />
            </button>

            {data.url ? (
                <div className="p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={data.url}
                        alt={data.caption || 'Blog image'}
                        className="w-full h-auto object-cover rounded-lg shadow-sm"
                        style={{
                            width: style?.width || '100%',
                            borderRadius: style?.borderRadius || '12px'
                        }}
                    />
                    <input
                        className="w-full mt-3 bg-transparent text-center text-sm text-slate-500 italic border-none focus:ring-0 outline-none"
                        placeholder="Write a caption..."
                        value={data.caption || ''}
                        onChange={handleCaptionChange}
                    />
                </div>
            ) : (
                <label className="p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                        disabled={uploading}
                    />

                    <div className="p-5 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                        {uploading ? (
                            <Loader2 size={32} className="animate-spin" />
                        ) : (
                            <UploadCloud size={32} />
                        )}
                    </div>

                    <div className="text-center">
                        <p className="font-semibold text-slate-700">
                            {uploading ? 'Uploading your image...' : 'Click to upload image'}
                        </p>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-bold">
                            High quality images recommended
                        </p>
                    </div>
                </label>
            )}
        </div>
    );
}
