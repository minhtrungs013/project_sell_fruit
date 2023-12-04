"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type OrderColumn = {
    id: string,
    phone: string,
    address: string,
    isPaid: boolean,
    products: string,
    totalPrice: string,
    createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "isPaid",
        header: "Paid",
    },
    {
        accessorKey: "totalPrice",
        header: "total Price",
    },
    // {
    //     accessorKey: "createdAt",
    //     header: "Date",
    // },
    // {
    //     accessorKey: "Action",
    //     cell: ({ row }) => <CellAction data={row.original} />,
    // },
]
