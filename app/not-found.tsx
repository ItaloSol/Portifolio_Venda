import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          404
        </h1>
        <h2 className="text-2xl text-white">Página não encontrada</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}