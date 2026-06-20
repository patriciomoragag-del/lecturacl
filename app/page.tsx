export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">LecturaCL</h1>
        </div>
        <a href="/auth" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
          Ingresar
        </a>
      </header>
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Libros escolares</h2>
        <a href="/libros" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg inline-block">
          Explorar libros gratis
        </a>
      </section>
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/libros" className="border-2 border-blue-200 rounded-xl p-6 text-center block">
            <h4 className="font-bold">Parvularia</h4>
          </a>
          <a href="/libros" className="border-2 border-green-200 rounded-xl p-6 text-center block">
            <h4 className="font-bold">Basica</h4>
          </a>
          <a href="/libros" className="border-2 border-purple-200 rounded-xl p-6 text-center block">
            <h4 className="font-bold">Media</h4>
          </a>
        </div>
      </section>
    </main>
  )
}
