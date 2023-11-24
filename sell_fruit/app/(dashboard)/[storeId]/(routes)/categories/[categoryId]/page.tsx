import prismadb from "@/lib/prismadb"
import CategoryForm from "./components/category-form"

const CategoryPage = async ({
    params
}: {
    params: { categoryId: string, storeId: string }
}) => {
    let category = null
    if (params.categoryId.length > 11) {
        category = await prismadb.category.findUnique({
            where: {
                id: params.categoryId
            }
        })
    }
    const billboard = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    })
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm billboards={billboard} initialData={category}></CategoryForm>
            </div>
        </div>
    )
}

export default CategoryPage