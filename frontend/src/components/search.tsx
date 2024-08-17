
import { algoliasearch } from "algoliasearch";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import Hit from "./hit";


const searchClient = algoliasearch("CJLNZHO5WT", "da3b3fd0da8c9317002a9a8b6d7669ba");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="products"
      insights={true}
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};