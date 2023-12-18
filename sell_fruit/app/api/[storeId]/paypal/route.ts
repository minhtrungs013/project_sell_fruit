import paypal from "@paypal/checkout-server-sdk"
import client from "@/lib/paypal";
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
    const { order_price } = body;

    const PaypalClient = client()
    const request = new paypal.orders.OrdersCreateRequest()
    request.headers['Prefer'] = 'return=representation'
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: order_price + "",
          },
        },
      ],
    })
    const response = await PaypalClient.execute(request)
    if (response.statusCode !== 201) {
      return new NextResponse("Some Error Occured at backend", { status: 500 })
    }

    return NextResponse.json({ data: response }, { headers: corsHeaders })

  } catch (error) {
    return new NextResponse("interal error", { status: 500 })
  }
}