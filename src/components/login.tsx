'use client';

import React, { FormEvent } from 'react';

export default function Login() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    const response = await fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if(response.ok) window.location.href = '/'
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username
        <input type="text" name="username" id="username" />
      </label>

      <label htmlFor="password">
        Password
        <input type="password" name="password" id="password" />
      </label>

      <button type="submit">Logar</button>
    </form>
  );
}
