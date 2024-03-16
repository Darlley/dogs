import Link from 'next/link';
import React from 'react';

interface InterfaceSlug {
  params: {
    curso: string;
  }
}

type CursoType = {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: [
    {
      id: number;
      slug: string;
      nome: string;
      descricao: string;
      curso_id: number;
      tempo: number;
      ordem: number;
    }
  ]
}

export default async function CursoPage({params}: InterfaceSlug) {
  const paramCurso = params.curso;

  const response = await fetch(`https://api.origamid.online/cursos/${paramCurso}`)
  const curso = await response.json() as CursoType;

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