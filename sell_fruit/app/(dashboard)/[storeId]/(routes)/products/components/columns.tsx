"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumn = {
    id: string,
    name: string,
    price: string,
    size: string,
    category: string,
    color: string,
    isFeatured: boolean,
    isArchived: boolean,
    createdAt: string

}

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "color",
        header: "Color",
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
                {row.original.color}
                <div className="h-6 w-6 border rounded-full" style={{ backgroundColor: row.original.color }}></div>
            </div>
        )
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "isArchived",
        header: "Archived",
    },
    {
        accessorKey: "isFeatured",
        header: "Featured",
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        accessorKey: "Action",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
]
