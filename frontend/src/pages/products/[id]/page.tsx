import { Star } from "lucide-react";
import { IoAdd } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom"
import { FaMinus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ProductReviewCard from "@/components/product-review-card";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductProps } from "@/utils/interfaces";
import { useProductQuery } from "@/hooks/useProductQuery";
import { LookingSimilar } from "react-instantsearch";
//import axios from "axios";
//import { useEffect } from "react";


//const ALGOLIA_BASE_URLS = ["-1.algolianet.com", "-2.algolianet.com", "-3.algolianet.com"];


export default function ProductPage() {
    const { id } = useParams()
    const location = useLocation();
    const { objectID } = location.state;

    function getProductId(URI: string | undefined) {
        const decodedString = decodeURIComponent(URI!).trim();
        const indexOfSeparator = decodeURIComponent(URI!).indexOf("_")

        return decodedString.slice(indexOfSeparator + 1, decodedString.length)
    }

    const { loading, product }: {
        loading: boolean,
        product: ProductProps
    } = useProductQuery(getProductId(id))


    /*
    const selectRandomAlgoliaBaseUrl = (baseUrlList: string[]): number => {
        return Math.floor(Math.random() * baseUrlList.length);
    }



    useEffect(() => {
        if (product) {
            const fetchMatchingProducts = async () => {
                try {
                    const res = axios.post(`https://${import.meta.env.VITE_ALGOLIA_APP_ID}${ALGOLIA_BASE_URLS[selectRandomAlgoliaBaseUrl(ALGOLIA_BASE_URLS)]}/1/indexes/recommendations`, {
                        indexName: "products",
                        objectID: product.title,
                        model: "related-products",
                        threshold: 42.1
                    }, {
                        headers: {
                            "x-algolia-application-id": import.meta.env.VITE_ALGOLIA_APP_ID!,
                            "x-algolia-api-key": import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY!
                        }
                    })

                    console.log(res)
                } catch (e) {
                    console.log(e)
                }
            }
            fetchMatchingProducts()
        }
    }, [product])

    */


    return (
        <main>
            {loading && <p>Loading...</p>}
            {product && <article>

                <section>
                    <div className="flex justify-center gap-20 bg-white p-10">
                        <div className="h-full flex flex-col justify-between">
                            <img src={product.images[0]} width="500px" loading="lazy" alt={product.title} />
                            <ul className="flex gap-2">
                                {product.images.map((image: string) => (
                                    <li key={image}><img src={image} width="150px" className="border rounded-xl" alt={product.title} loading="lazy" /></li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col justify-between max-w-3xl">
                            <div className="space-y-2.5">
                                <h1 className="font-bold sm:text-4xl">{product.title}</h1>
                                <ul role="list" className="flex items-center gap-5">
                                    <li>
                                        <ul className="flex gap-1 text-slate-300">
                                            <li><Star size={20} /></li>
                                            <li><Star size={20} /></li>
                                            <li><Star size={20} /></li>
                                            <li><Star size={20} /></li>
                                            <li><Star size={20} /></li>
                                        </ul>
                                    </li>
                                    <li><p className="text-lg text-slate-500 font-medium">{product.reviews.length} reviews</p></li>
                                </ul>
                                <h2 className="font-bold text-2xl">{(product.price * 125).toLocaleString("en", {
                                    style: "currency",
                                    currency: "KES"
                                })}</h2>
                                <p className="text-slate-500 text-lg font-semibold">{product.description}</p>
                                <table>
                                    <tbody>
                                        <tr className="bg-slate-100">
                                            <th>Brand</th>
                                            <td>{product.brand}</td>
                                        </tr>
                                        <tr>
                                            <th>Warranty</th>
                                            <td>{product.warrantyInformation}</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>{product.shippingInformation}</td>
                                        </tr>
                                        <tr>
                                            <th>Return Policy</th>
                                            <td>{product.returnPolicy}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="flex items-end justify-between">
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <h2 className="font-semibold text-slate-400">Quantity</h2>
                                        <div className="flex justify-between items-center border-2 w-[150px] rounded-md">
                                            <button type="button" title="Reduce Quantity"><FaMinus /></button>
                                            <span>1</span>
                                            <button type="button" title="Reduce Quantity"><IoAdd /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-5">
                                        <Button>Buy Now</Button>
                                        <Button variant="outline">Add to Cart</Button>
                                    </div>
                                </div>
                                <div className="justify-start space-y-1">
                                    <h2 className="font-semibold">Scan for more details</h2>
                                    <img src={product.meta.qrCode} width="150px" className="border border-orange-500 rounded-lg" loading="lazy" alt={product.title} />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="space-y-7 py-10">
                        <h1 className="font-bold sm:text-3xl">Product Reviews</h1>
                        <ul role="list" className="space-y-7">
                            {
                                product.reviews.map((review) => (
                                    <li role="listitem" key={review.reviewerName}>
                                        <ProductReviewCard review={review} />
                                    </li>
                                ))
                            }
                        </ul>
                        <Separator />
                        <Card >
                            <CardHeader>
                                <CardTitle>Add a review</CardTitle>
                                <CardContent>

                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                <section className="py-10 space-y-5 flex w-full">
                    {
                        objectID ? <LookingSimilar
                            headerComponent={({ classNames, items }) => (
                                <h2 className={`font-bold sm:text-3xl mb-5 ${classNames.title}`}>
                                    You may also like ({items.length})
                                </h2>
                            )}
                            layoutComponent={(props) => (
                                <ul className="flex flex-wrap gap-5">
                                    {props.items.map((item) => (
                                        <li key={item.objectID}><Item item={item} /></li>
                                    ))}
                                </ul>
                            )}
                            objectIDs={[objectID]}
                            threshold={60}
                            itemComponent={Item}
                            emptyComponent={() => <p>No recommendations.</p>}
                            className="flex"
                        /> : null
                    }
                </section>
            </article>

            }
        </main>
    )
}

function Item({ item }) {
    return (
        <Link to={`/products/${encodeURIComponent(item.title.concat("_", item.id.toString()))}`} state={{
            objectID: item.objectID
        }}>
            <div className="hover:shadow-md  hover:scale-[1.015] transition-all duration-300 ease-in-out bg-white p-3 w-[300px]  rounded-xl space-y-2.5 flex flex-col justify-between">
                <div className="space-y-1">
                    <img src={item.thumbnail} className="rounded-2xl" alt={item.title} />
                    <h1 className="font-bold text-xl line-clamp-1">{item.title}</h1>
                    <p className="text-slate-400 line-clamp-2">{item.description}</p>
                </div>
                <div>
                    <span className="font-bold text-2xl text-green-600">{(item.price * 125).toLocaleString("en", {
                        style: "currency",
                        currency: "KES"
                    })}
                    </span>
                </div>
            </div>
        </Link>
    );
}