import { TableRow, TableCell } from "./ui/table";
import { Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Button } from "./ui/button";

export default function CartListItem({ cartItem }) {
    return <TableRow key={cartItem.title}>
        <TableCell>
            <div className="flex items-center gap-5">
                <img src={cartItem.thumbnail} width="50px" className="rounded-full" />
                <div>
                    <h1 className="text-md">{cartItem.title}</h1>
                    <p className="text-sm font-normal text-slate-500">{cartItem.brand}</p>
                </div>
            </div>
        </TableCell>
        <TableCell>
            <ul className="flex items-center gap-5">
                <li><Button className="bg-orange-500 hover:bg-orange-600 active:scale-75 transition-all duration-300 ease-in-out"><Minus /></Button></li>
                <li><span className="px-5 py-[10px] rounded-md text-lg text-slate-500">0</span></li>
                <li><Button className="bg-orange-500 hover:bg-orange-600 active:scale-75 transition-all duration-300 ease-in-out"><Plus /></Button></li>
            </ul>
        </TableCell>
        <TableCell className="text-lg">{(cartItem.price * 125).toLocaleString("en", {
            style: "currency",
            currency: "KES"
        })}</TableCell>
        <TableCell></TableCell>
        <TableCell>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className="outline-none border-none active:scale-75">
                        <Trash2 className="text-red-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Remove Item</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </TableCell>
    </TableRow>
}