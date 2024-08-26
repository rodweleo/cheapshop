import axios from "axios"

export async function generatePaypalAuthToken(){
    const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET} = process.env;
    const data = "grant_type=client_credentials";

    try{
        const response = await axios.post(`${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`, data , {
            auth: {
                username: PAYPAL_CLIENT_ID!,
                password: PAYPAL_CLIENT_SECRET!
            },
            headers: {
                "Content-Type": "application/x-www-urlencoded",
            },
            
        })

        return response.data.access_token
    }catch(e){
        return e
    }
}
