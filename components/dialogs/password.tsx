'use client';

import React, { useState } from 'react';

const PasswordPromptDialog = () => {
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const request = await fetch('/api/auth', {
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    });

    if (request.status !== 200) {
      alert('Incorrect password.');
      setPassword('');
    } else window.location.reload();
  };

  return (
    <div className="password-prompt-dialog flex items-center justify-center flex-col h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        <button
          type="submit"
          className="bg-neutral-300 px-4 py-1.5 transition duration-100 hover:opacity-90 border border-neutral-100 text-black"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordPromptDialog;
