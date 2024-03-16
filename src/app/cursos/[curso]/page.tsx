import { getCurso } from '@/api/cursos';
import Link from 'next/link';
import React from 'react';

interface InterfaceSlug {
  params: {
    curso: string;
  }
}



export default async function CursoPage({params}: InterfaceSlug) {
  const paramCurso = params.curso;

  const curso = await getCurso(paramCurso)

  return (
    <div>
      <h2>{curso?.nome ?? ''}</h2>
      <p>{curso.descricao} - Aulas: {curso.total_aulas} | Horas totais: {curso.total_horas}</p>
      <ul className='bg-gray-950 text-white px-10 py-4 rounded-lg'>
        {curso && curso?.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${paramCurso}/${aula.slug}`}>
              <h3>{aula.nome}</h3>
            </Link>
            <p>{aula.descricao} - Aulas: {aula.tempo} | Ordem: {aula.ordem}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}