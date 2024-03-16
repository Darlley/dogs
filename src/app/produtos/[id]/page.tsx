type PageParams = {
  params: {
    id: string
  }
}

type ProdutoType = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: number;
}

export default async function Produto({params}: PageParams) {
  const response = await fetch(`https://api.origamid.online/produtos/${params.id}`);
  const data = await response.json() as ProdutoType;
  
  return (
    <div>
      <h1>{data.nome}</h1>
      <p>R$ {data.preco} | QTD:  {data.estoque} | Importado {data.importado}</p>
      <p>{data.descricao}</p>
    </div>
  )
}
