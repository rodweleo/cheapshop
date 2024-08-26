import SearchBox from "../search-box";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "./button";
import { useSelector } from 'react-redux';

export default function MainHeader() {

    const cartItems = useSelector((state) => state.cart.items);

    return <header className="top-0 sticky z-50 w-full bg-white space-y-5 shadow-md">
        <section className="flex items-center justify-around p-5">
            <a href="/" className="text-orange-500 font-bold sm:text-3xl drop-shadow-md">
                cheapshop
            </a>
            <div className="hidden md:block"><SearchBox /></div>
            <a href="/cart" title="Shopping Cart" className="text-orange-500 relative active:scale-75 hover:text-orange-600 font-bold flex items-center gap-2.5">
                <div className="relative">
                    <IoCartOutline size={25} className="text-orange" />
                    <span className="bg-orange-500 text-white font-bold flex flex-col justify-center items-center absolute -top-2.5 -right-2.5 size-6 rounded-full border-2 border-white">{cartItems.length}</span>
                </div>
                <span className="font-normal text-lg hover:font-semibold transition-all duration-300 ease-in-out">Cart</span>
            </a>
        </section>
        <div className="hidden max-md:flex items-center justify-center"><SearchBox /></div>
        <section className="bg-slate-100 p-5">
            <p className='font-semibold space-x-5 text-center text-xs flex items-center flex-wrap justify-center gap-2.5'><span>BUY NOW PAY LATER STARTING AT 0% APR</span> <Button variant="outline"><a href="buy-now-pay-later">LEARN MORE</a></Button></p>
        </section>
    </header>
}