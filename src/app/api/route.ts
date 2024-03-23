import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET() {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),
  });

  if (!response.ok) {
    return Response.json({ erro: 'Erro na Autenticação' });
  }

  const data = await response.json();

  cookies().set('_token', data.token, {
    httpOnly: true,
    secure: true
  })

  return Response.json(data);
}

export async function POST(request: NextRequest){
  const param = request.nextUrl.searchParams.get('busca')
  const body = request.json();

  return Response.json(param)
}