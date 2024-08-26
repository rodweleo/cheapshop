import { ProductProps } from "@/utils/interfaces";
import { Highlight } from "react-instantsearch";
export default function Hit({ hit }: {
    hit: ProductProps
}) {
    return (
        <article className="flex max-w-md">
            <img src={hit.thumbnail} alt={hit.title} />
            <div className="flex flex-col justify-between">
                <div>
                    <div className="hit-title font-bold">
                        <Highlight attribute="title" hit={hit} />
                    </div>
                    <div className="hit-description">
                        <Highlight attribute="description" hit={hit} />
                    </div>
                </div>
                <div className="hit-price">
                    <Highlight attribute="price" hit={hit} />
                </div>
            </div>
        </article>
    );
};