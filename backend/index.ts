import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors, { CorsOptions } from "cors"
import AuthMiddleware from "./middlewares/auth";
import { generatePaypalAuthToken } from "./functions/generatePaypalAuthToken";
import { generateRandomId } from "./functions/generateRandomId";

dotenv.config();

const app: Express = express();
app.use(express.json())

const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173", "https://cheapshop.vercel.app"],
  optionsSuccessStatus: 200,
  credentials: true,
}

app.use(cors(corsOptions))
app.use(AuthMiddleware)
const port = process.env.PORT || 3000;


app.get("/", async (req, res) => {
  try{
    const access_token = await generatePaypalAuthToken()
    res.send(access_token)
  }catch(e){
    res.send(e)
  }
})



app.post("/api/payments/paypal/create-order", async (req, res) => {
  const access_token = await generatePaypalAuthToken()

  try{
    const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", req.body, {
      headers: {
        'Content-Type': 'application/json',
        'PayPal-Request-Id': generateRandomId(),
        'Authorization': `Bearer ${access_token}`
      },
    })

    console.log("Order created.")
    const { id, status } = response.data

    res.status(200).json({
      order_id: id,
      status: status
    })
  }catch(e){
    console.error(e)
    res.json(e)
  }
})


app.post("/api/payments/paypal/checkout/complete-order", async (req, res) => {

  const { order_id, intent} = req.body;

  const access_token = await generatePaypalAuthToken()

  try{
    const response = await axios.post(`${process.env.PAYPAL_BASE_URL}/v2/checkout/orders/${order_id}/${intent}`, {}, {
      headers: {
        "PayPal-Request-Id": generateRandomId(),
        'Authorization': `Bearer ${access_token}`
      },
    });

    console.log(response.data)
    res.status(200).json(response.data)
  }catch(e){
    console.error(e)
    res.json(e)
  }
})



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});