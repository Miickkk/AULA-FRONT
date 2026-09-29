import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'

function App() {

  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuario')
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null
  })

  const fazerLogin = (usuarioLogado) => {
    setUsuario(usuarioLogado)

    localStorage.setItem(
      'usuario',
      JSON.stringify(usuarioLogado)
    )
  }

  const fazerLogout = () => {
    setUsuario(null)
    localStorage.removeItem('usuario')
  }

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Header
                usuario={usuario}
                onLogout={fazerLogout}
              />

              <Home />
            </>
          }
        />

        <Route
          path="/login"
          element={<Login onLogin={fazerLogin} />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App