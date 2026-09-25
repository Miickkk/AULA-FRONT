import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header';

function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <BrowserRouter>
      {usuario && <Header usuario={usuario} onSair={() => setUsuario(null)} />}

      <Routes>
        <Route path="/login" element={<Login onLogin={setUsuario} />} />

        <Route
          path="/"
          element={usuario ? <Home /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
