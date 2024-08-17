import axios from "axios";

export async function generatePaypalAuthToken(){
    try{
        const response = await axios.post(`${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`, {}, {
            auth: {
                username: process.env.PAYPAL_CLIENT_ID!,
                password: process.env.PAYPAL_CLIENT_SECRET!
            },
            headers: {
                "Content-Type": "application/x-www-urlencoded"
            }
        })

        return response.data.access_token
    }catch (e){
        return ""
    }
}
