import SearchBox from "../search-box";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export default function MainHeader(){
    const navigate = useNavigate()
    return <header className="top-0 sticky z-50 w-full bg-orange-500 space-y-5 shadow-md">
       <section className="flex items-center justify-around p-5">
        <a href="/" className="text-white font-bold sm:text-3xl">
                cheapshop
            </a>
            <SearchBox/>
            <ul className="flex items-center">
                <li><a href="/cart" title="Shopping Cart" className="relative"><IoCartOutline size={30} className="text-white"/></a></li>
            </ul>
       </section>
        <section className="bg-slate-100 p-5">
            <p className='font-semibold h-10 space-x-5 text-center'><span>BUY NOW PAY LATER STARTING AT 0% APR</span> <Button variant="outline"><a href="buy-now-pay-later">LEARN MORE</a></Button></p>
        </section>
    </header>
}