export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <h1 className="text-xl font-bold">LecturaCL</h1>
        </div>
        <a href="/auth" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
          Ingresar
        </a>
      </header>

      {/* Hero */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Libros escolares + exámenes de comprensión
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          La plataforma de lectura para estudiantes chilenos. Descarga libros en PDF y practica con exámenes generados por IA.
        </p>
        <a href="/libros" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition inline-block">
          Explorar libros gratis
        </a>
      </section>

      {/* Niveles */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
          ¿Para qué nivel buscas?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/libros" className="border-2 border-blue-200 rounded-xl p-6 text-center hover:border-blue-500 cursor-pointer transition block">
            <div className="text-4xl mb-3">🌱</div>
            <h4 className="font-bold text-gray-800">Educación Parvularia</h4>
            <p className="text-gray-500 text-sm mt-1">Pre-kínder y Kínder</p>
          </a>
          <a href="/libros" className="border-2 border-green-200 rounded-xl p-6 text-center hover:border-green-500 cursor-pointer transition block">
            <div className="text-4xl mb-3">📖</div>
            <h4 className="font-bold text-gray-800">Educación Básica</h4>
            <p className="text-gray-500 text-sm mt-1">1° a 8° básico</p>
          </a>
          <a href="/libros" className="border-2 border-purple-200 rounded-xl p-6 text-center hover:border-purple-500 cursor-pointer transition block">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="font-bold text-gray-800">Educación Media</h4>
            <p className="text-gray-500 text-sm mt-1">1° a 4° medio</p>
          </a>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-semibold text-gray-800">1. Busca el libro</h4>
              <p className="text-gray-500 text-sm mt-1">Busca por nombre, autor o nivel escolar</p>
            </div>
            <div>
              <div className="text-3xl mb-3">⬇️</div>
              <h4 className="font-semibold text-gray-800">2. Descarga el PDF</h4>
              <p className="text-gray-500 text-sm mt-1">Gratis y disponible al instante</p>
            </div>
            <div>
              <div className="text-3xl mb-3">✅</div>
              <h4 className="font-semibold text-gray-800">3. Practica con IA</h4>
              <p className="text-gray-500 text-sm mt-1">Responde el examen generado automáticamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        © 2026 LecturaCL · Hecho en Chile 🇨🇱
      </footer>
    </main>
  )
}