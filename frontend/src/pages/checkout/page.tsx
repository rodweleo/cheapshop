import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CustomerAddressForm from "@/components/customer-address-form";


export default function Checkout() {
    const [{ isPending }] = usePayPalScriptReducer();
    const navigate = useNavigate()
    const { toast } = useToast()
    const totalAmount = useSelector((state) => state.cart.totalAmount)


    const createPaypalOrder = () => {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: totalAmount
                    }
                }
            ],
            payment_source: {
                paypal: {}
            }
        }

        return axios.post("http://localhost:8088/api/payments/paypal/create-order", order, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response) => {
            toast({
                title: "Order Creation",
                description: response.data.status
            })
            return response.data.order_id
        }).catch((error) => {
            console.log(error)
        })
    }

    const onApprove = (data: unknown) => {

        return axios.post("http://localhost:8088/api/payments/paypal/checkout/complete-order", {
            order_id: data.orderID,
            intent: "capture"
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => toast({
            description: `Hi ${res.data.payer.name.given_name}, your payment has been processed successfully.`
        })).catch(e => console.log(e))
         
    }

    return <main className="space-y-5">
        <Card>
            <CardHeader>
                <CardTitle>1. Customer Address</CardTitle>
            </CardHeader>
            <CardContent>
                <CustomerAddressForm/>
            </CardContent>
            <CardFooter className="space-x-5 justify-end">
                <Button variant="ghost" className="text-orange-500">CANCEL</Button>
                <Button className="bg-orange-500">SELECT ADDRESS</Button>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>2. Delivery Details</CardTitle>
            </CardHeader>
            <CardFooter className="justify-end">
                <Button className="bg-orange-500">CONFIRM DELIVERY DETAILS</Button>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>3. Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
                {isPending && <div>Loading...</div>}
                <PayPalButtons
                    style={{
                        layout: "vertical",
                        shape: "rect",
                        color: "gold",
                        label: "paypal",
                     }}
                    createOrder={createPaypalOrder}
                    onApprove={onApprove}
                />
            </CardContent>
            <CardFooter className="justify-end">
                <Button className="bg-orange-500">CONFIRM PAYMENT METHOD</Button>
            </CardFooter>
        </Card>

        <Button variant="link" onClick={() => navigate(-1)} className="p-0 flex items-center gap-2.5 transition-all duration-300 hover:gap-3 text-orange-500 hover:text-orange-600"><FaArrowLeft/> Go Back & Continue Shopping</Button>
    </main>
}