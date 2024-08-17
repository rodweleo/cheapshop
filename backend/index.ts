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
    const token = await generatePaypalAuthToken()
    res.send(token)
  }catch(e){
    res.send(e)
  }
})



app.post("/api/payments/paypal/create-order", async (req, res) => {
  const access_token = await generatePaypalAuthToken()

  try{
    const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", req.body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'PayPal-Request-Id': generateRandomId(),
        'Authorization': `Bearer ${access_token}`
      },
    })

    res.json(response)
  }catch(e){
    console.log(e)
    res.json(e)
  }
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});