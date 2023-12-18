import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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
    { params }: { params: { storeId: string } }
) {
    try {
        
        const { productIds, phone, address } = await req.json();

        if (!params.storeId) return new NextResponse("store id is required", { status: 400 })

        const order = await prismadb.order.create({
            data: {
                storeId: params.storeId,
                isPaid: false,
                address: address,
                phone: phone,
                orderItems: {
                    create: productIds.map((productId: string) => ({
                        product: {
                            connect: {
                                id: productId
                            }
                        }
                    }))
                }
            }
        })
        return NextResponse.json({ data: order }, { headers: corsHeaders })

    } catch (error) {
        return new NextResponse("interal error", { status: 500 })

    }
}

