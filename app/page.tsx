export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">ðŸ“š</span>
          <h1 className="text-xl font-bold">LecturaCL</h1>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
          Ingresar
        </button>
      </header>

      {/* Hero */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Libros escolares + exÃ¡menes de comprensiÃ³n
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
          La plataforma de lectura para estudiantes chilenos. Descarga libros en PDF y practica con exÃ¡menes generados por IA.
        </p>
        <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
          Explorar libros gratis
        </button>
      </section>

      {/* Niveles */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
          Â¿Para quÃ© nivel buscas?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-blue-200 rounded-xl p-6 text-center hover:border-blue-500 cursor-pointer transition">
            <div className="text-4xl mb-3">ðŸŒ±</div>
            <h4 className="font-bold text-gray-800">EducaciÃ³n Parvularia</h4>
            <p className="text-gray-500 text-sm mt-1">Pre-kÃ­nder y KÃ­nder</p>
          </div>
          <div className="border-2 border-green-200 rounded-xl p-6 text-center hover:border-green-500 cursor-pointer transition">
            <div className="text-4xl mb-3">ðŸ“–</div>
            <h4 className="font-bold text-gray-800">EducaciÃ³n BÃ¡sica</h4>
            <p className="text-gray-500 text-sm mt-1">1Â° a 8Â° bÃ¡sico</p>
          </div>
          <div className="border-2 border-purple-200 rounded-xl p-6 text-center hover:border-purple-500 cursor-pointer transition">
            <div className="text-4xl mb-3">ðŸŽ“</div>
            <h4 className="font-bold text-gray-800">EducaciÃ³n Media</h4>
            <p className="text-gray-500 text-sm mt-1">1Â° a 4Â° medio</p>
          </div>
        </div>
      </section>

      {/* CÃ³mo funciona */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-8">
            Â¿CÃ³mo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">ðŸ”</div>
              <h4 className="font-semibold text-gray-800">1. Busca el libro</h4>
              <p className="text-gray-500 text-sm mt-1">Busca por nombre, autor o nivel escolar</p>
            </div>
            <div>
              <div className="text-3xl mb-3">â¬‡ï¸</div>
              <h4 className="font-semibold text-gray-800">2. Descarga el PDF</h4>
              <p className="text-gray-500 text-sm mt-1">Gratis y disponible al instante</p>
            </div>
            <div>
              <div className="text-3xl mb-3">âœ…</div>
              <h4 className="font-semibold text-gray-800">3. Practica con IA</h4>
              <p className="text-gray-500 text-sm mt-1">Responde el examen generado automÃ¡ticamente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        Â© 2026 LecturaCL Â· Hecho en Chile ðŸ‡¨ðŸ‡±
      </footer>
    </main>
  );
}
