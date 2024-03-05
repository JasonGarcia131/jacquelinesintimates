import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductDetails } from './pages/ProductDetails'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './pages/Products'


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/products/:category' element={<Products/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
