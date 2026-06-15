'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

export default function LibrosPage() {
  const [libros, setLibros] = useState<any[]>([])
  const [cargando, setCargando] = useState(true)
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [nivel, setNivel] = useState('Educación Básica')
  const [curso, setCurso] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [archivo, setArchivo] = useState<File | null>(null)
  const [subiendo, setSubiendo] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [usuario, setUsuario] = useState<any>(null)

  useEffect(() => {
    cargarLibros()
    obtenerUsuario()
  }, [])

  const obtenerUsuario = async () => {
    const { data } = await supabase.auth.getUser()
    setUsuario(data.user)
  }

  const cargarLibros = async () => {
    const { data } = await supabase.from('libros').select('*').order('created_at', { ascending: false })
    setLibros(data || [])
    setCargando(false)
  }

  const subirLibro = async () => {
    if (!titulo || !archivo || !usuario) {
      setMensaje('Debes completar el título y seleccionar un PDF')
      return
    }
    setSubiendo(true)
    setMensaje('')

    const nombreArchivo = `${Date.now()}-${archivo.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('libros-pdf')
      .upload(nombreArchivo, archivo)

    if (uploadError) {
      setMensaje('Error al subir el PDF: ' + uploadError.message)
      setSubiendo(false)
      return
    }

    const { data: urlData } = supabase.storage.from('libros-pdf').getPublicUrl(nombreArchivo)

    const { error } = await supabase.from('libros').insert({
      titulo,
      autor,
      nivel,
      curso,
      descripcion,
      pdf_url: urlData.publicUrl,
      subido_por: usuario.id
    })

    if (error) {
      setMensaje('Error al guardar: ' + error.message)
    } else {
      setMensaje('¡Libro subido exitosamente!')
      setTitulo('')
      setAutor('')
      setCurso('')
      setDescripcion('')
      setArchivo(null)
      cargarLibros()
    }
    setSubiendo(false)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <h1 className="text-xl font-bold">LecturaCL</h1>
        </div>
        <a href="/" className="text-blue-100 text-sm hover:text-white">← Inicio</a>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Formulario subir libro */}
        {usuario && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📤 Subir un libro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Título *</label>
                <input value={titulo} onChange={e => setTitulo(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: El Principito" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Autor</label>
                <input value={autor} onChange={e => setAutor(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: Antoine de Saint-Exupéry" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Nivel *</label>
                <select value={nivel} onChange={e => setNivel(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Educación Parvularia</option>
                  <option>Educación Básica</option>
                  <option>Educación Media</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Curso</label>
                <input value={curso} onChange={e => setCurso(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ej: 4° Básico" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Descripción</label>
                <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={2} placeholder="Breve descripción del libro..." />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Archivo PDF *</label>
                <input type="file" accept=".pdf"
                  onChange={e => setArchivo(e.target.files?.[0] || null)}
                  className="w-full mt-1 px-3 py-2 border rounded-lg" />
              </div>
            </div>
            {mensaje && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${mensaje.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {mensaje}
              </div>
            )}
            <button onClick={subirLibro} disabled={subiendo}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50">
              {subiendo ? 'Subiendo...' : 'Subir libro'}
            </button>
          </div>
        )}

        {/* Lista de libros */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">📖 Libros disponibles</h2>
        {cargando ? (
          <p className="text-gray-500">Cargando libros...</p>
        ) : libros.length === 0 ? (
          <p className="text-gray-500">No hay libros aún. ¡Sé el primero en subir uno!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {libros.map(libro => (
              <div key={libro.id} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">{libro.titulo}</h3>
                    {libro.autor && <p className="text-gray-500 text-sm">{libro.autor}</p>}
                    <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {libro.nivel} {libro.curso && `· ${libro.curso}`}
                    </span>
                    {libro.descripcion && <p className="text-gray-600 text-sm mt-2">{libro.descripcion}</p>}
                  </div>
                </div>
                <a href={libro.pdf_url} target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                  ⬇️ Descargar PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}