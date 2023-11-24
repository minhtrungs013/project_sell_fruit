"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"
import { ImageTempl } from "@/components/ui/image-templ"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
    id: string
    label: string
    imageUrl: string
    createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
    {
        accessorKey: "label",
        header: "Label",
    },
    {
        accessorKey: "imageUrl",
        cell: ({row}) => <ImageTempl data={row.original}/>
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
