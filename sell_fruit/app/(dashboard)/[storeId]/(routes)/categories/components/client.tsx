"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoriesColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";


interface CategoriesClientProps {
    categories: CategoriesColumn[]
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ categories }) => {
    const params = useParams()
    const router = useRouter()

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Categories ${categories.length}`} description="manage Categories for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={categories} />
            <Heading title="API" description="API calls for categories" />
            <Separator />
            <ApiList entityIdName="categoryId" entityName="categories" />
        </>
    )
}