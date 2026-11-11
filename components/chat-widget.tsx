'use client';

import * as React from 'react';
import { agentReply } from '@/lib/agent';

interface Msg { from: 'user' | 'bot'; text: string }

const OPENERS = ['Hi! I’m Shade, your ShadowSpark Express assistant. Ask about tracking, quotes or drop-off points. 👋', 'Connect with me about track, quote or drop-off.'];

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<Msg[]>([{ from: 'bot', text: OPENERS[0] }]);
  const [input, setInput] = React.useState('');

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userText = input.trim();
    setMsgs((m) => [...m, { from: 'user', text: userText }]);
    setInput('');
    setTimeout(() => setMsgs((m) => [...m, { from: 'bot', text: agentReply(userText) }]), 250);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex h-[420px] w-[330px] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand px-4 py-3 text-white">
            <div className="text-sm font-semibold">Shade · ShadowSpark Express</div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          <div className="flex-1 space-y-2 overflow-auto bg-surface p-3">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.from === 'user' ? 'ml-auto bg-brand text-white' : 'bg-white text-ink'}`}>{m.text}</div>
            ))}
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-line bg-white p-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Track SSX-10001…" className="h-9 flex-1 rounded-md border border-line bg-surface px-2 text-sm text-ink outline-none focus:border-brand" />
            <button className="rounded-md bg-brand px-3 text-sm font-semibold text-white">Send</button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white shadow-lg hover:bg-brand-dark"
        aria-label="Open assistant"
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  );
}
