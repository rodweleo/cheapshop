import { liteClient as algoliasearch } from "algoliasearch/lite";

const AlgoliaSearchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID!,
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!
);

export default AlgoliaSearchClient;
