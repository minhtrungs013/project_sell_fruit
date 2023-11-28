"use client"

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ProductColumn } from "./columns";
import { AlertModal } from "@/components/modal/alert-modal";

interface CellActionProps {
    data: ProductColumn;
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const router = useRouter()
    const params = useParams()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const onCopy = (id: string) => {
        navigator.clipboard.writeText(id);
        toast.success("API Route copied to the clipboard")
    }
    const onUpdate = (id: string) => {
        router.push(`/${params?.storeId}/products/${id}`)
    }
    const onDelete = async () => {
        try {
            setLoading(true)
            await axios.delete(`/api/${params?.storeId}/products/${data.id}`)
            router.refresh()
            toast.success("delete successfully!")
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }



    return (
        <>
            <AlertModal isOpen={open} loading={loading} onClose={() => setOpen(false)} onConfirm={onDelete} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="h-8 w-8 p-0">
                        <span className="sr-only"> Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="end">
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onCopy(data?.id)}>
                        <Copy className="mr-2 h-4 w-4" color="blue" />
                        Copy Id
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onUpdate(data.id)}>
                        <Edit className="mr-2 h-4 w-4" color="orange" />
                        Update
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="mr-2 h-4 w-4 " color="red" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}