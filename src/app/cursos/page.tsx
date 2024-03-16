import Link from 'next/link';
import React from 'react'

type CursosType = {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}

export default async function CursosPage() {
  const response = await fetch('https://api.origamid.online/cursos')
  const cursos = await response.json() as CursosType[];
  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {cursos && cursos.map((curso: CursosType) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>
              <h2>{curso.nome}</h2>
            </Link>
            <p>{curso.descricao} - Aulas: {curso.total_aulas} | Horas totais: {curso.total_horas}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
