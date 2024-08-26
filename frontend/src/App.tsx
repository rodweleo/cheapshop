import './index.css'
import MainHeader from './components/ui/main-header'
import { Link, Route, Routes } from 'react-router-dom'
import CategoryPage from './pages/categories/[id]/page'
import ProductPage from './pages/products/[id]/page'
import NotFound from './pages/not-found'
import ShoppingCart from './pages/shopping-cart/page'
import Checkout from './pages/checkout/page'
import { Configure, Hits, InstantSearch, PoweredBy } from 'react-instantsearch'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import HitProductCard from './components/hit-product-card'
import AlgoliaSearchClient from './utils/clients/algolia-search-client'
import { Autocomplete } from './components/autocomplete-search'

function App() {

  const cartItems = useSelector((state) => state.cart.items);


  return (
    <main className='bg-slate-100 space-y-5 min-h-screen flex flex-col items-center w-full'>
      <div className="hidden"><MainHeader /></div>
      <InstantSearch
        searchClient={AlgoliaSearchClient}
        indexName='products'
      >
        <header className="top-0 sticky w-full bg-white space-y-5 shadow-md flex flex-col items-center justify-center">
          <section className="container flex items-center justify-between p-5">
            <Link to="/" className="text-orange-500 font-bold sm:text-3xl drop-shadow-md">
              cheapshop
            </Link>
            <Autocomplete
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
              className='w-[400px]'
            />
            <Link to="/cart" title="Shopping Cart" className="focus-within:border-green-600 text-orange-500 relative active:scale-75 hover:text-orange-600 font-bold flex items-center gap-2.5">
              <div className="relative">
                <IoCartOutline size={25} className="text-orange" />
                <span className="bg-orange-500 text-white font-bold flex flex-col justify-center items-center absolute -top-2.5 -right-2.5 size-6 rounded-full border-2 border-white">{cartItems.length}</span>
              </div>
              <span className="font-normal text-lg hover:font-semibold transition-all duration-300 ease-in-out">Cart</span>
            </Link>
          </section>
          <PoweredBy className='size-48 h-fit pb-5' />
        </header>

        <section className='w-full px-5'>
          <Routes>
            <Route path="/">
              <Route index element={<div className="w-full container mx-auto">
                <Configure
                  attributesToSnippet={['name:7', 'description:15']}
                  snippetEllipsisText="…"
                />
                <Hits hitComponent={HitProductCard} />
              </div>} />
              <Route path="categories">
                <Route path=":id" element={<CategoryPage />} />
              </Route>
              <Route path="products">
                <Route path=":id" element={<ProductPage />} />
              </Route>
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </InstantSearch>
    </main>
  )
}


function SubmitIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
        transform="translate(1 1)"
      >
        <circle cx="7.11" cy="7.11" r="7.11" />
        <path d="M16 16l-3.87-3.87" />
      </g>
    </svg>
  );
}

export default App
