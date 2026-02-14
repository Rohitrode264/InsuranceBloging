'use client';

import React, { useRef, useEffect } from 'react';

interface TextSpan {
    text: string;
    bold?: boolean;
    color?: string;
}

interface ParagraphBlockProps {
    data: { text: TextSpan[] };
    style?: { fontSize?: string; lineHeight?: string };
    onChange: (data: any, style: any) => void;
    onEnter: () => void;
    onDeleteIfEmpty: () => void;
    onTriggerSlash: (position: { top: number; left: number }) => void;
}

export function ParagraphBlock({ data, style, onChange, onEnter, onDeleteIfEmpty, onTriggerSlash }: ParagraphBlockProps) {
    const editableRef = useRef<HTMLDivElement>(null);

    // Sync state to DOM if it gets out of sync (e.g., external change)
    useEffect(() => {
        if (editableRef.current) {
            const currentText = data.text.map(s => s.text).join('');
            if (editableRef.current.innerText !== currentText) {
                // Simple sync for now, in a real app this would be more complex
                // to maintain cursor position and formatting
                editableRef.current.innerText = currentText;
            }
        }
    }, [data.text]);

    const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
        const text = e.currentTarget.innerText;

        // Check for slash command
        if (text.endsWith('/')) {
            const range = window.getSelection()?.getRangeAt(0);
            if (range) {
                const rect = range.getBoundingClientRect();
                onTriggerSlash({ top: rect.bottom, left: rect.left });
            }
        }

        // Convert flat text back to spans (simplistic version for the demo)
        // In a production app, we'd use a real rich text library or handle 
        // HTML-to-JSON mapping properly.
        onChange({
            text: [{ text }]
        }, style);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onEnter();
        } else if (e.key === 'Backspace' && (data.text.length === 0 || (data.text.length === 1 && data.text[0].text === ''))) {
            onDeleteIfEmpty();
        }
    };

    return (
        <div className="w-full relative group">
            <div
                ref={editableRef}
                contentEditable
                suppressContentEditableWarning
                className="w-full min-h-[1.5em] bg-transparent border-none focus:ring-0 outline-none text-slate-700 leading-relaxed placeholder:text-slate-300 empty:after:content-['Type_/_for_menu...'] empty:after:text-slate-300"
                style={{
                    fontSize: style?.fontSize || '16px',
                    lineHeight: style?.lineHeight || '1.7'
                }}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
