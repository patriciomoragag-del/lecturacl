'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [busqueda, setBusqueda] = useState('')
  const router = useRouter()

  const buscar = () => {
    router.push('/libros?q=' + busqueda)
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">LecturaCL</h1>
        <a href="/auth" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
          Subir un libro
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
            onKeyDown={(e) => e.key === 'Enter' && buscar()}
            placeholder="Busca por titulo, autor o curso..."
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 text-lg focus:outline-none"
          />
          <button
            onClick={buscar}
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold text-lg"
          >
            Buscar
          </button>
        </div>
      </section>
      <section className="bg-white py-12 px-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Tienes un libro que no esta aqui?</h3>
        <p className="text-gray-500 mb-6">Subelo y ayuda a otros estudiantes de Chile</p>
        <a href="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg inline-block">
          Subir un libro gratis
        </a>
      </section>
      <footer className="text-center text-gray-400 text-sm py-8">2026 LecturaCL - Hecho en Chile</footer>
    </main>
  )
}
