import { Search } from "lucide-react";

export default function SearchBox(){
    return (
        <form method="POST" action="#" className='h-11 flex items-center  '>
          <input type="search" className='px-6 h-full outline-none border border-orange-500 focus:border-2 focus:border-orange-600 rounded-l-full max-sm:w-[300px] w-[300px]' placeholder='Search'/>
          <button type="submit" className='bg-orange-500 w-fit px-6 h-full rounded-r-full text-white' title="Search SecureMart"><Search/></button>
        </form>
    )
}