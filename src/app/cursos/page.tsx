import { getCursos } from '@/api/cursos';
import Link from 'next/link';
import React from 'react'



export default async function CursosPage() {
  const cursos = await getCursos()

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {cursos && cursos.map((curso) => (
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
