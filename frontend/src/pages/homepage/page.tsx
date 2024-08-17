import Error from '@/components/error';
import ProductsCategories from '@/components/products-categories';
import ProductsList from '@/components/products-list';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

export default function Homepage() {
  const { isPending, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios.get('https://dummyjson.com/products').then((response) => {
        return response.data.products
      })
  })

  

  return (
    <main className='flex flex-col w-full items-center'>
      <section id="#" className='w-full py-5'>
        <ProductsCategories/>
      </section>

      <section className='w-full max-w-5xl bg-gradient-to-b from-blue-600 via-blue-500 to-blue-300  text-white rounded-full relative text-center py-4'>
        <h1 className='sm:text-4xl text-balance font-bold text-orange-200 py-1'>30% off for new customers</h1>
        <p className='font-semibold'>Free Shipping & Free Return at no order min. Restrictions apply</p>
        <Button variant="link" className='font-semibold text-xl underline text-white hover:font-bold transition-all duration-300 ease-in-out'><a href="">Start your order now</a></Button>
      </section>

      <section className='w-full py-20 space-y-2.5'>
        <h1 className='sm:text-4xl text-2xl text-balance font-bold text-black py-1'>Trending Products</h1>
        
        {error && <Error error={error}/>}
        {isPending && <div className='text-black'>Loading...</div>}
        {data && <ProductsList products={data} />}
      </section>

      <section className='w-full py-20 space-y-2.5'>
        <h1 className='sm:text-4xl text-2xl text-balance font-bold text-black py-1'>Hot Deals</h1>
        {error && <Error error={error}/>}
        {isPending && <div className='text-black'>Loading...</div>}
        {data && <ProductsList products={data} />}
      </section>
    </main>
  )
}