'use client'

import { useState } from 'react'

export default function Home() {
  const [busqueda, setBusqueda] = useState('')

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">LecturaCL</h1>
        <a href="/auth" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
          Ingresar
        </a>
      </header>
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-2">Encuentra tu libro escolar</h2>
        <p className="text-blue-100 mb-8">Descarga gratis cualquier libro del colegio</p>
        <div className="max-w-xl mx-auto flex gap-2">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Busca por titulo, autor o curso..."
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-lg focus:outline-none"
          />
          
            href={`/libros?q=${busqueda}`}
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold text-lg"
          >
            Buscar
          </a>
        </div>
      </section>
      <footer className="text-center text-gray-400 text-sm py-8">2026 LecturaCL - Hecho en Chile</footer>
    </main>
  )
}
