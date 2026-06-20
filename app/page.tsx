'use client'

import { useState } from 'react'
import { supabase } from '../supabase'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const handleAuth = async () => {
    setCargando(true)
    setMensaje('')
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setMensaje('Error: ' + error.message)
      else window.location.href = '/libros'
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setMensaje('Error: ' + error.message)
      else setMensaje('Cuenta creada! Revisa tu email para confirmar.')
    }
    setCargando(false)
  }

  return (
    <main className="min-h-screen bg-blue-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">LecturaCL</h1>
          <p className="text-gray-500 text-sm mt-1">
            {isLogin ? 'Inicia sesion en tu cuenta' : 'Crea tu cuenta gratis'}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Contrasena</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimo 6 caracteres"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {mensaje && (
            <div className={`p-3 rounded-lg text-sm ${mensaje.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
              {mensaje}
            </div>
          )}
          <button
            onClick={handleAuth}
            disabled={cargando}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {cargando ? 'Cargando...' : isLogin ? 'Iniciar sesion' : 'Crear cuenta'}
          </button>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-center text-sm text-blue-600 hover:underline"
          >
            {isLogin ? 'No tienes cuenta? Registrate gratis' : 'Ya tienes cuenta? Inicia sesion'}
          </button>
        </div>
      </div>
    </main>
  )
}
