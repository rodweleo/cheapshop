import { Search } from "lucide-react";

export default function SearchBox(){
    return (
        <form method="POST" action="#" className='h-11 flex items-center w-fit'>
          <input type="search" className='px-6 h-full outline-none focus:border-2 focus:border-slate-200 rounded-l-full w-[400px]' placeholder='Search'/>
          <button type="submit" className='bg-slate-200 w-fit px-6 h-full rounded-r-full text-white' title="Search SecureMart"><Search className="text-orange-500"/></button>
        </form>
    )
}