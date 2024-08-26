import { ProductProps } from "@/utils/interfaces";
import { Link } from "react-router-dom";

export default function HitProductCard({ hit }: {
    hit: ProductProps
}) {

    //console.log(hit)
    return (
        <Link to={`/products/${encodeURIComponent(hit.title.concat("_", hit.id.toString()))}`} state={{
            objectID: hit.objectID
        }}>
            <div className="hover:shadow-md  hover:scale-[1.015] transition-all duration-300 ease-in-out bg-white p-3 w-[300px]  rounded-xl space-y-2.5 flex flex-col justify-between">
                <div className="space-y-1">
                    <img src={hit.thumbnail} className="rounded-2xl" alt={hit.title} />
                    <h1 className="font-bold text-xl line-clamp-1">{hit.title}</h1>
                    <p className="text-slate-400 line-clamp-2">{hit.description}</p>
                </div>
                <div>
                    <span className="font-bold text-2xl text-green-600">{(hit.price * 125).toLocaleString("en", {
                        style: "currency",
                        currency: "KES"
                    })}
                    </span>
                </div>
            </div>
        </Link>
    )
}