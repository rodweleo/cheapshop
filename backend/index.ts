import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors, { CorsOptions } from "cors"

dotenv.config();

const app: Express = express();
app.use(express.json())

const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173", "https://cheapshop.vercel.app"],
  optionsSuccessStatus: 200,
  credentials: true,
}

app.use(cors(corsOptions))

const port = process.env.PORT || 3000;


app.get("", (req, res) => {
  res.send("Cheapshop server is live.")
})

app.post("/api/payments/paypal/create-order", async (req, res) => {
  try{
    const response = await axios.post("https://api-m.sandbox.paypal.com/v2/checkout/orders", req.body, {
      headers: {
        'Content-Type': 'application/json',
        'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
        'Authorization': 'Bearer 6V7rbVwmlM1gFZKW_8QtzWXqpcwQ6T5vhEGYNJDAAdn3paCgRpdeMdVYmWzgbKSsECednupJ3Zx5Xd-g'
    }
    })

    console.log(response)
  }catch(e){
    console.log(e)
  }
})
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});