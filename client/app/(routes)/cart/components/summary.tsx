
"use client"

import paypalCaptureOrder from "@/actions/paypalCaptureOrder"
import paypalCreateOrder from "@/actions/paypalCreateOrder"
import Button from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Summary = () => {
    const searchParams = useSearchParams()
    const [checkDelivery, setCheckDelivery] = useState(false)
    const [checkOnline, setCheckOnline] = useState(true)
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)
    const [isMounted, setIsMounted] = useState(false)
    const totalPrice = items.reduce((total, item) => {
        return total + Number(parseInt(item.product?.price) * item.quantity)
    }, 0)

    const [formData, setFormData] = useState({
        phone: null,
        address: null,
        productIds: items.map((item) => item.product?.id)
    })
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed")
            removeAll()
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong")
        }

    }, [searchParams, removeAll])


    const checkOut = async () => {
        if (!formData.phone) return toast.error("điền phone vào")

        if (!formData.address) return toast.error("điền địa chỉ vào")

        if (formData.productIds.length === 0) return toast.error("Thêm sản phẩm đi rồi thanh toán")

        await axios.post(`${process.env.NEXT_PUBLIC_PAI_URL}/checkout`, formData).then((res) => {
            toast.success("Payment completed")
            removeAll()
        }).catch((error) => {
            console.log(error);
        })
    }
    const checkPayment = (index: number) => {

        if (index === 0) {
            setCheckDelivery(!checkDelivery)
            setCheckOnline(false)

        } else {
            setCheckOnline(!checkOnline)
            setCheckDelivery(false)
        }
    }

    const changePhoneNumber = (e: any) => {
        setFormData({ ...formData, phone: e.target.value })
    }

    const changeAddress = (e: any) => {
        setFormData({ ...formData, address: e.target.value })
    }

    if (!isMounted) {
        return null
    }

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4 ">
                    <div className="text-base font-medium text-gray-900"> Order total</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <h2 className="text-lg font-medium text-gray-900  border-t border-gray-200 pt-4 mt-4">Payment methods</h2>
            <div className="mt-6 space-y-4">
                <div className="cursor-pointer flex items-center ">
                    <input type="checkbox" checked={checkDelivery} onClick={() => checkPayment(0)} className="h-4 w-4 " />
                    <span className="ml-2" onClick={() => checkPayment(0)}> Payment on delivery</span>
                </div>
                <div className="cursor-pointer flex items-center ">
                    <input type="checkbox" checked={checkOnline} onClick={() => checkPayment(1)} className="h-4 w-4 " />
                    <span className="ml-2" onClick={() => checkPayment(1)}> Online payment</span>
                </div>
            </div>
            {checkDelivery &&
                <div>
                    <div className="mt-6 space-y-4">
                        <div className="cursor-pointer">
                            <p className="ml-2">Phone number <span className="text-red-500 text-xl">*</span></p>
                            <input type="text" onChange={(e) => changePhoneNumber(e)} className="ml-2 py-2 px-2 w-full border rounded-md" />
                        </div>
                        <div className="cursor-pointer">
                            <p className="ml-2"> Address <span className="text-red-500 text-xl">*</span></p>
                            <input type="text" onChange={(e) => changeAddress(e)} className="ml-2 py-2 px-2 w-full border rounded-md " />
                        </div>
                    </div>
                    <Button onClick={checkOut} className="w-50 mt-6 " disabled={items.length === 0} >
                        Check Out
                    </Button>
                </div>
            }
            {checkOnline &&
                <div className="mt-6 space-y-4">

                    <PayPalScriptProvider
                        options={{
                            'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'AUAh1lv8zihqTc-685qs-fIMoz8ZW9Ucs7twLqWHXJbJdcdomTXiYegQlJ9Nah7PJZOQpttS0-Bwfns_',
                            currency: 'USD',
                            intent: 'capture'
                        }} >
                        <PayPalButtons
                            style={{
                                color: 'gold',
                                shape: 'rect',
                                label: 'pay',
                                height: 50
                            }}
                            createOrder={async (data, actions) => {
                                let order_id = await paypalCreateOrder(totalPrice)
                                return order_id + ''
                            }}
                            onApprove={async (data, actions) => {
                                let response = await paypalCaptureOrder(data.orderID);
                                if (response !== undefined && response !== null) {
                                }
                                return Promise.resolve();
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            }
        </div>
    )
}

export default Summary