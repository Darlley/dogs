import Link from 'next/link';
import React from 'react';

interface InterfaceSlug {
  params: {
    aula: string;
    curso: string;
  };
}

type AulaType = {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export default async function AulaPage({ params }: InterfaceSlug) {
  const paramsAula = params.aula;
  const paramsCurso = params.curso;

  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/cursos/${paramsCurso}/${paramsAula}`
  );
  const aula = (await response.json()) as AulaType;

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
