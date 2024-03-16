type CursoType = {
  id: string;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
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

export async function getCursos(){
  const response = await fetch('https://api.origamid.online/cursos')
  return await response.json() as CursoType[];
}

export async function getCurso(paramCurso: string){
  const response = await fetch(`https://api.origamid.online/cursos/${paramCurso}`)
  return await response.json() as CursoType & { aulas: AulaType[] };
}

export async function getAula(paramCurso: string, paramAula: string){
  const response = await fetch(
    `https://api.origamid.online/cursos/${paramCurso}/${paramAula}`
  );
  return (await response.json()) as AulaType;
}

