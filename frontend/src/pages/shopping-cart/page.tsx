import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartListItem from "@/components/cart-list-item";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { CartItemProps } from "@/utils/types";
export default function ShoppingCart() {
    const navigate = useNavigate()
    const cartItems: CartItemProps[] = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return <main className="space-y-5">
        <section className="flex flex-wrap gap-5">
            <Card className="bg-white p-5 space-y-5 rounded-lg shadow-lg w-full">
                <CardHeader>
                    <p className="flex justify-between">
                        <span className="font-bold text-3xl">My Cart</span>
                        <span className="font-semibold text-2xl text-slate-500">{totalQuantity} Item{totalQuantity > 1 && "s"}</span>
                    </p>
                </CardHeader>
                <Separator />
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                cartItems.map((cartItem) => (
                                    <CartListItem cartItem={cartItem} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>

                <CardFooter>
                    <Button variant="link" className="p-0 flex items-center gap-2" onClick={() => navigate(-1)}> <FaArrowLeftLong /> Continue Shopping</Button>
                </CardFooter>
            </Card>
            <Card className="shadow-md bg-white p-5 h-fit w-full max-w-[400px]">
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <p className="flex justify-between text-xl">
                            <span className="text-slate-500 font-normal">Total</span>
                            <span className="font-bold">{(totalAmount * 125).toLocaleString("en", {
                                style: "currency",
                                currency: "KES"
                            })}</span>
                        </p>
                        <p className="flex justify-between text-xl">
                            <span className="text-slate-500 font-normal">Delivery</span>
                            <span className="font-bold">0</span>
                        </p>
                        <p className="flex justify-between text-xl">
                            <span className="text-slate-500 font-normal">Free Delivery</span>
                            <span className="font-bold">0</span>
                        </p>
                    </div>

                    <Separator/>
                    <p className="flex justify-between text-xl">
                        <span className="text-slate-500 font-normal">Total</span>
                        <span className="font-bold">{(totalAmount * 125).toLocaleString("en", {
                            style: "currency",
                            currency: "KES"
                        })}</span>
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="bg-orange-500 hover:bg-orange-600 w-full text-md active:border-orange-700 active:border"><a href="/checkout/">CHECKOUT ({(totalAmount * 125).toLocaleString("en", {
                            style: "currency",
                            currency: "KES"
                        })})</a></Button>
                </CardFooter>
            </Card>
        </section>


    </main>
}