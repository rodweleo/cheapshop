import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CartListItem from "@/components/cart-list-item";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
export default function ShoppingCart() {
    const navigate = useNavigate()
    const cart = localStorage.getItem("cart");
    const parsedCart = cart ? JSON.parse(cart) : []

    return <main className="space-y-5">
        <section className="flex gap-5">
            <Card className="bg-white p-5 space-y-5 rounded-lg shadow-lg w-full">
                <CardHeader>
                    <CardTitle>My Cart</CardTitle>
                    <span className="hidden">{parsedCart ? parsedCart.length : 0} Item{parsedCart && "s"}</span>
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
                                parsedCart.map((cartItem) => (
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
            <Card className="shadow-md bg-white p-5 h-fit w-full max-w-[300px]">
                <CardHeader>
                    <CardTitle>Cart Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="flex justify-between text-xl">
                        <span className="text-slate-500 font-normal">Subtotal</span>
                        <span className="font-bold">Ksh 1,790</span>
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="bg-orange-500 hover:bg-orange-600 w-full text-md active:border-orange-700 active:border"><a href="/checkout/">CHECKOUT (Ksh 1,790)</a></Button>
                </CardFooter>
            </Card>
        </section>


    </main>
}