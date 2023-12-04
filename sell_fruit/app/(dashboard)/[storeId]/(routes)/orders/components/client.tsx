"use client";

import { DataTable } from "@/components/ui/data-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";


interface OrderClientProps {
    orders: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({ orders }) => {

    return (
        <>
            <Heading title={`Orders (${orders.length})`}
                description="manage orders for your store" />
            <Separator />
            <DataTable searchKey="products" columns={columns} data={orders} />
            <Heading title="API" description="API calls for order" />
        </>
    )
}