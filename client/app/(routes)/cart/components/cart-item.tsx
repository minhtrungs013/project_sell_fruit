"use client"
import Currency from "@/components/ui/currency"
import IconButton from "@/components/ui/icon-button"
import useCart from "@/hooks/use-cart"
import { Cart } from "@/types"
import { X } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
    data: Cart
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {

    const cart = useCart()
    const remove = () => {
        cart.removeItem(data.product.id)
    }

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.product?.images[0].url} alt="" className="object-cover object-center" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={remove} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.product?.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.product?.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-500 pl-4">{data.product?.size.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-500 pl-4">{data.quantity}</p>
                    </div>
                    <Currency value={data.product?.price} />
                </div>
            </div>
        </li>
    )
}

export default CartItem