import { getProductById } from "@/functions/getProductById";
import { Star } from "lucide-react";
import { IoAdd } from "react-icons/io5";
import { useParams } from "react-router-dom"
import { FaMinus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ProductReviewCard from "@/components/product-review-card";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/product-card";

export default function ProductPage() {
    const { id } = useParams()


    function getProductId(URI: string) {
        const decodedString = decodeURIComponent(URI).trim();
        const indexOfSeparator = decodeURIComponent(URI).indexOf("_")

        return decodedString.slice(indexOfSeparator + 1, decodedString.length)
    }

    const { loading, product } = getProductById(getProductId(id))
    return (
        <main>
            {loading && <p>Loading...</p>}
            {product && <article>

                <section>
                    <div className="flex justify-center gap-20 bg-white p-10">
                        <div className="h-full flex flex-col justify-between">
                            <img src={product.images[0]} width="500px" />
                            <ul className="flex gap-2">
                                {product.images.map((image) => (
                                    <li><img src={image} width="150px" className="border rounded-xl" /></li>
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
                            </table>
                            
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <h2 className="font-semibold text-slate-400">Quantity</h2>
                                        <div className="flex justify-between items-center border-2 w-[150px] rounded-md">
                                            <button><FaMinus /></button>
                                            <span>1</span>
                                            <button><IoAdd /></button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-5">
                                        <Button>Buy Now</Button>
                                        <Button variant="outline">Add to Cart</Button>
                                    </div>
                                </div>
                                <div className="justify-start space-y-1">
                                    <h2 className="font-semibold">Scan for more details</h2>
                                    <img src={product.meta.qrCode} width="150px" className="border border-orange-500 rounded-lg"/>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="space-y-7 py-10">
                        <h1 className="font-bold sm:text-3xl">Product Reviews</h1>
                        <ul role="list" className="space-y-7">
                            {
                                product.reviews.map((review) => (
                                    <li role="listitem" key={review.comment}>
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

                <section className="py-10 space-y-5">
                    <h1 className="font-bold sm:text-3xl">You may also like</h1>
                    <div className="flex gap-5">
                        <ProductCard product={product}/>
                        <ProductCard product={product}/>
                        <ProductCard product={product}/>
                    </div>
                </section>
            </article>

            }
        </main>
    )
}