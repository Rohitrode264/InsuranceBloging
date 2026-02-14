'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bold, Palette, Type } from 'lucide-react';

interface ToolbarProps {
    onFormat: (type: 'bold' | 'color' | 'clear') => void;
    position: { top: number; left: number };
    isVisible: boolean;
}

export function Toolbar({ onFormat, position, isVisible }: ToolbarProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    style={{ top: position.top - 50, left: position.left }}
                    className="fixed z-50 flex items-center gap-1 p-1.5 bg-slate-900 rounded-lg shadow-xl border border-slate-700"
                >
                    <button
                        onClick={() => onFormat('bold')}
                        className="p-1.5 hover:bg-slate-800 rounded text-white transition-colors"
                        title="Bold"
                    >
                        <Bold size={16} />
                    </button>

                    <div className="w-[1px] h-4 bg-slate-700 mx-1" />

                    {['#1f2937', '#16a34a', '#2563eb', '#dc2626'].map(color => (
                        <button
                            key={color}
                            onClick={() => onFormat('color')} // Simplified, would normally pass color
                            style={{ backgroundColor: color }}
                            className="w-4 h-4 rounded-full border border-slate-700 hover:scale-110 transition-transform"
                        />
                    ))}

                    <div className="w-[1px] h-4 bg-slate-700 mx-1" />

                    <button
                        onClick={() => onFormat('clear')}
                        className="p-1.5 hover:bg-slate-800 rounded text-slate-400 transition-colors"
                        title="Clear formatting"
                    >
                        <Type size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
