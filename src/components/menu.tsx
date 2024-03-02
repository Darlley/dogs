import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <ul className='menu'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/sobre">Sobre</Link></li>
      <li><Link href="/contato">Contato</Link></li>
      <li><Link href="/imc">Calcular IMC</Link></li>
    </ul>
  )
}
