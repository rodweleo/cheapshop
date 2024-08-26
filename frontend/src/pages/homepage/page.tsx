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
    <main className='flex flex-col w-full items-center space-y-10'>
      <section id="intro" className='w-full flex items-center justify-center gap-5'>
        <div className='h-[500px] overflow-y-auto'>
          <ProductsCategories />
        </div>
        <div>
          <img src="https://ke.jumia.is/cms/2024/W32/CP/Sliders/KE_KE24_Express_0824_S.jpg" className="h-[500px]" loading="lazy" alt="Banner Offer" />
        </div>
      </section>

      <section className='w-full max-w-5xl bg-gradient-to-b from-blue-600 via-blue-500 to-blue-300  text-white rounded-full relative text-center py-4'>
        <h1 className='sm:text-4xl text-balance font-bold text-orange-200 py-1'>30% off for new customers</h1>
        <p className='font-semibold'>Free Shipping & Free Return at no order min. Restrictions apply</p>
        <Button variant="link" className='font-semibold text-xl underline text-white hover:font-bold transition-all duration-300 ease-in-out'><a href="">Start your order now</a></Button>
      </section>

      <section className='w-full space-y-2.5'>
        <h1 className='sm:text-4xl text-2xl text-balance font-bold text-black py-1'>Trending Products</h1>
        {error && <p>Something went wrong: {error.message}</p>}
        {isPending && <div className='text-black'>Loading...</div>}
        <div className="flex overflow-x-auto">
          {data && <ProductsList products={data} />}
        </div>
      </section>
    </main>
  )
}