import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function ProductCard({product}){
    const { toast } = useToast()

    const addToCart = (product) => {
        const cart = localStorage.getItem("cart") ?? ""

        if(cart){
            const parsedCart = JSON.parse(cart)
            localStorage.setItem("cart", JSON.stringify([...parsedCart, product]))
            toast({
                description: 'Added to cart'
            })
        }else{
            localStorage.setItem("cart", JSON.stringify([product]))
            toast({
                description: 'Added to cart'
            })
        }
    }

    return <div className="bg-white p-5 max-w-xs h-[500px] rounded-xl space-y-2.5 flex flex-col justify-between">
        <div className="space-y-1">
            <img src={product.thumbnail} className="rounded-lg" alt={product.title}/>
            <h1 className="font-bold text-xl line-clamp-1">{product.title}</h1>
            <p className="text-slate-400 line-clamp-2">{product.description}</p>
        </div>
        <div>
            <span className="font-bold text-xl text-green-600">{(product.price * 125).toLocaleString("en", {
                style: "currency",
                currency: "KES"
            })}
            </span>
        </div>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
}