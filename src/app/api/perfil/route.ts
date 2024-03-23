import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get('_token')
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  const data = await response.json();

  return Response.json(data);
}
