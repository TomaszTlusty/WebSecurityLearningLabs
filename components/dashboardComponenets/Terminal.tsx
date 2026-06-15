'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface Command {
    name: string;
    description: string;
    action: (args: string[]) => string;
}

export default function CustomTerminal() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([
        'Welcome to WebSec Terminal v1.0',
        'Type "help" to see available commands.',
        '',
    ]);

    useEffect(() => {
        inputRef.current?.focus({ preventScroll: true });
    }, []);

    const inputRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    const commands: Command[] = [
        {
            name: 'help',
            description: 'Show available commands',
            action: () =>
                commands.map(cmd => `${cmd.name} - ${cmd.description}`).join('\n'),
        },
        {
            name: 'clear',
            description: 'Clear terminal',
            action: () => {
                setOutput(['']);
                return '';
            },
        },
        {
            name: 'whoami',
            description: 'Display current user',
            action: () => 'cyberninja42 (Security Level: Beginner)',
        },
        {
            name: 'scan',
            description: 'Scan target for vulnerabilities',
            action: (args) => {
                const target = args[0] || 'localhost';
                return `Scanning ${target}...\n\nFound 3 vulnerabilities:
- XSS vulnerability on login page
- Outdated Apache server (2.4.29)
- Default admin credentials (/admin)`;
            },
        },
    ];

    const executeCommand = (cmd: string) => {
        const [commandName, ...args] = cmd.trim().split(' ');
        const command = commands.find(c => c.name === commandName);

        if (command) return command.action(args);
        if (commandName)
            return `Command not found: ${commandName}. Type 'help' for available commands.`;

        return '';
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input;
            const result = executeCommand(cmd);

            setOutput(prev => [
                ...prev,
                `> ${cmd}`,
                ...(result ? result.split('\n') : []),
                '',
            ]);

            setInput('');
        }
    };

    useEffect(() => {
        if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
    }, [output]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="relative w-full max-w-3xl mx-4 sm:mx-auto p-4 sm:p-8 border bg-white/2 border-white/10 backdrop-blur-md rounded-3xl text-white font-mono text-sm mb-8 max-h-[600px] flex flex-col">

            {/* Output container with custom scrollbar */}
            <div
                ref={outputRef}
                className="flex-1 w-full overflow-y-auto mb-2 whitespace-pre-wrap
               scrollbar-thin scrollbar-thumb-primary scrollbar-track-white/10"
            >
                {output.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>

            {/* Input row */}
            <div className="flex w-full mt-auto">
                <span>$&nbsp;</span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 w-full bg-transparent border-none outline-none text-white font-mono text-sm"
                />
            </div>
        </div>
    );
}