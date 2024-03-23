import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';

type ContaType = {
  autorizado: boolean;
  usuario: string;
};

export default async function Menu() {
  const token = cookies().get('__token');

  let conta: ContaType = {
    autorizado: false,
    usuario: '',
  };

  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token?.value,
    },
  });

  if (response.ok) {
    conta = (await response.json()) as ContaType;
  }

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      {conta.autorizado ? (
        <li>{conta.usuario}</li>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
