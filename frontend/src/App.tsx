import './index.css'
import MainHeader from './components/ui/main-header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/page'
import CategoryPage from './pages/categories/[id]/page'
import ProductPage from './pages/products/[id]/page'
import NotFound from './pages/not-found'
import ShoppingCart from './pages/shopping-cart/page'
import Checkout from './pages/checkout/page'

function App() {
  
  return (
    <main className='bg-slate-100 space-y-5 min-h-screen flex flex-col items-center w-full'>
      <MainHeader/>
      <section className='w-full px-10'>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage/>}/>
            <Route path="categories">
              <Route path=":id" element={<CategoryPage/>}/>
            </Route>
            <Route path="products">
              <Route path=":id" element={<ProductPage/>}/>
            </Route>
            <Route path="cart" element={<ShoppingCart/>}/>
            <Route path="checkout" element={<Checkout/>}/>
          </Route>  
          <Route path="*" element={<NotFound/>}/>    
        </Routes>
      </section>
    </main>
  )
}

export default App
