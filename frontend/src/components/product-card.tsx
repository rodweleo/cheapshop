import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { addProductToCart } from "@/slices/cartSlice";
import { toast } from "react-toastify";
import { ProductProps } from "@/utils/interfaces";


export default function ProductCard({ product }: {
    product: ProductProps
}) {
    const dispatch = useDispatch();

    const addToCart = () => {
        console.log(dispatch(addProductToCart(product)))
        toast.success("Product added to cart successully.", {
            theme: "colored"
        })
    }

    return <div className="bg-white p-2.5 w-[300px]  rounded-xl space-y-2.5 flex flex-col justify-between">
        <div className="space-y-1">
            <img src={product.thumbnail} className="rounded-lg" alt={product.title} />
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
        <Button onClick={addToCart}>Add to Cart</Button>
    </div>
}