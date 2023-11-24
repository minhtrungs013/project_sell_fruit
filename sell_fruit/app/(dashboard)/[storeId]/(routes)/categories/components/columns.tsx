"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import { ImageTempl } from "@/components/ui/image-templ"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CategoriesColumn = {
    id: string
    name: string 
    billboardLabel: string
    createdAt: string
}

export const columns: ColumnDef<CategoriesColumn>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "billboard",
        header: "Billboard",
        cell: ({row}) => row.original.billboardLabel
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
