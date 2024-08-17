import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";

export default function Checkout(){
    const [{ isPending }] = usePayPalScriptReducer();
    const {toast} = useToast()

    const createPaypalOrder = async () => {
        
        return await axios.post("https://api-cheapshop.vercel.app/api/payments/paypal/create-order", 
            {
            "intent": "CAPTURE",
            "purchase_units": [
              {
                "amount": {
                  "currency_code": "USD",
                  "value": "100"
                }
              }
            ]
          }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then((response) => {
            toast({
                description: response.data.message
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    const onApprove = (data) => {
        // replace this url with your server
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                // Your code here after capture the order
            });
    }

    return <main className="space-y-5">
        <Card>
            <CardHeader>
                <CardTitle>1. Customer Address</CardTitle>
            </CardHeader>
            <CardFooter className="space-x-5 justify-end">
                <Button variant="ghost" className="text-orange-500">CANCEL</Button>
                <Button className="bg-orange-500">CONFIRM PAYMENT METHOD</Button>
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
                    style={{ layout: "horizontal" }} 
                    createOrder={createPaypalOrder}
                />
            </CardContent>
            <CardFooter className="justify-end">
                <Button className="bg-orange-500">CONFIRM PAYMENT METHOD</Button>
            </CardFooter>
        </Card>
    </main>
}