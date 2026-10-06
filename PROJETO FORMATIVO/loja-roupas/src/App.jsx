// ==================== IMPORTES ====================

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Carrinho from './pages/Carrinho'
import Header from './components/Header'
import Checkout from './pages/Checkout'
import Produtos from './pages/Produtos'




// ==================== USUÁRIO ====================

function App() {

  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuario')
    return usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : null

  })




  // ==================== CARRINHO ====================

  const [carrinho, setCarrinho] = useState(() => {
    const usuarioSalvo = localStorage.getItem('usuario')
    if (!usuarioSalvo) {
      return []
    }

    const usuarioAtual = JSON.parse(usuarioSalvo)
    const carrinhoSalvo = localStorage.getItem(
      `carrinho_${usuarioAtual.email}`
    )

    return carrinhoSalvo
      ? JSON.parse(carrinhoSalvo)
      : []

  })

  useEffect(() => {

    if (!usuario?.email) {
      return
    }

    localStorage.setItem(
      `carrinho_${usuario.email}`,
      JSON.stringify(carrinho)
    )

  }, [carrinho, usuario])

  const finalizarCompra = () => {
    setCarrinho([])
  }

  const limparCarrinho = () => {
    setCarrinho([]);
  };




  // ==================== LOGIN ====================

  const fazerLogin = (usuarioLogado) => {
    setUsuario(usuarioLogado)

    localStorage.setItem(
      'usuario',
      JSON.stringify(usuarioLogado)
    )

    const carrinhoSalvo = localStorage.getItem(
      `carrinho_${usuarioLogado.email}`
    )

    setCarrinho(
      carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : []
    )

  }




  // ==================== LOGOUT ====================

  const fazerLogout = () => {
    setUsuario(null)
    setCarrinho([])
    localStorage.removeItem('usuario')

  }




  // ==================== ADICIONAR AO CARRINHO ====================

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((carrinhoAtual) => {
      const produtoExistente = carrinhoAtual.find(
        (item) => item.nome === produto.nome
      )

      if (produtoExistente) {

        return carrinhoAtual.map((item) =>
          item.nome === produto.nome
            ? {
              ...item,
              quantidade: item.quantidade + 1
            }
            : item
        )

      }

      return [
        ...carrinhoAtual,
        {
          ...produto,
          quantidade: 1
        }
      ]

    })

  }




  // ==================== + QUANTIDADE ====================

  const aumentarQuantidade = (nome) => {
    setCarrinho((carrinhoAtual) =>

      carrinhoAtual.map((item) =>
        item.nome === nome
          ? {
            ...item,
            quantidade: item.quantidade + 1
          }
          : item

      )

    )

  }




  // ==================== - QUANTIDADE ====================

  const diminuirQuantidade = (nome) => {
    setCarrinho((carrinhoAtual) =>

      carrinhoAtual
        .map((item) =>
          item.nome === nome
            ? {
              ...item,
              quantidade: item.quantidade - 1
            }
            : item

        )

        .filter(
          (item) => item.quantidade > 0
        )

    )

  }




  // ==================== ROTAS ====================

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

              <Home
                usuario={usuario}
                adicionarAoCarrinho={adicionarAoCarrinho}
              />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <Login
              onLogin={fazerLogin}
            />
          }
        />

        <Route
          path="/carrinho"
          element={
            <>
              <Header
                usuario={usuario}
                onLogout={fazerLogout}
              />

              <Carrinho
                usuario={usuario}
                carrinho={carrinho}
                aumentarQuantidade={aumentarQuantidade}
                diminuirQuantidade={diminuirQuantidade}
                finalizarCompra={finalizarCompra}
              />
            </>
          }
        />

        <Route
          path="/Checkout"
          element={
            <>

              <Header
                usuario={usuario}
                onLogout={fazerLogout}
              />

              <Checkout
                usuario={usuario}
                carrinho={carrinho}
                limparCarrinho={limparCarrinho}
              />
            </>
          }
        />

        <Route
          path="/produtos"
          element={
            <>
              <Header
                usuario={usuario}
                onLogout={fazerLogout}
              />

              <Produtos
                usuario={usuario}
                adicionarAoCarrinho={adicionarAoCarrinho}
              />
            </>
          }
        />

      </Routes>
    </BrowserRouter>

  )

}


export default App