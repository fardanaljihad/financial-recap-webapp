import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/shared/Layout'
import Dashboard from './views/Dashboard'
import Incomes from './views/Incomes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="incomes" element={<Incomes />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
