import client from '@/lib/paypal'
import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server';


const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type , Authorization",
}

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();
        const { orderID } = body

        if (!orderID)
            return new NextResponse("Please Provide Order ID", { status: 400 })

        const PaypalClient = client()
        const request = new paypal.orders.OrdersCaptureRequest(orderID)

        const response = await PaypalClient.execute(request)

        if (!response) {
            return new NextResponse("Some Error Occured at backend", { status: 500 })
        }

        return NextResponse.json({ data: response }, { headers: corsHeaders })

    } catch (error) {
        return new NextResponse("interal error", { status: 500 })
    }
}