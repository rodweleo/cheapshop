export async function generatePaypalAuthToken(){
    const auth = `${process.env.PAYPAL_CLIENT_ID!}:process.env.PAYPAL_CLIENT_SECRET!`
    fetch(`${process.env.PAYPAL_BASE_URL}/v1/oauth2/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-urlencoded",
            "Authorization": `Basic ${Buffer.from(auth).toString("base64")}`
        },
        body: auth
    }).then(res => res.json()).then(json => json.access_token)
}
