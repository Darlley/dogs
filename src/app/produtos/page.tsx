import ClientFetch from "@/components/ClientFetch";
import ServerFetch from "@/components/ServerFetch";

export default async function Produtos() {
  return (
    <main>
      <h1>Produtos</h1>

      <div className="flex w-full justify-between">
        <ServerFetch />
        <ClientFetch />
      </div>
    </main>
  );
}
