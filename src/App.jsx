import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './paginas/Dashboard'
import Sumario from './componentes/Sumario'
import Produto from './componentes/Produto'


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/adm-dashboard" element={<Dashboard />}>
    <Route index element={<Sumario />} />
    <Route path="produtos" element={<Produto />} />
    <Route path="pedidos" element={<h1>Pedidos</h1>} />
    <Route path="categorias" element={<h1>Categorias</h1>} />
    <Route path="configuracoes" element={<h1>Configurações</h1>} />
</Route>
      </Routes>
    </Router>
  )
}

export default App
