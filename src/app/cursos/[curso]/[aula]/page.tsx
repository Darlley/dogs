import { getAula } from '@/api/cursos';
import Link from 'next/link';
import React from 'react';

interface InterfaceSlug {
  params: {
    aula: string;
    curso: string;
  };
}


export default async function AulaPage({ params }: InterfaceSlug) {
  const paramsAula = params.aula;
  const paramsCurso = params.curso;

  const aula = await getAula(paramsCurso, paramsAula)

  return (
    <div>
      <h2>
        {aula?.nome ?? ''} #{aula.ordem}
      </h2>
      <p>
        {aula.descricao} | Horas totais: {aula.tempo}h
      </p>
    </div>
  );
}
