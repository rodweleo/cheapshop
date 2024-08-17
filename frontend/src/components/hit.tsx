import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';
import { Button } from "./ui/button";

export default function Hit({ hit, sendEvent }){
  return (
    <article className="flex max-w-md">
            <img src={hit.thumbnail} />
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
                <Button onClick={() => 
                    sendEvent("conversion",hit, "Item added to favorites")
                }>Add to Favorites</Button>
            </div>
    </article>
  );
};