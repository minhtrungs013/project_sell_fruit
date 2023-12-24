import prismadb from '@/lib/prismadb'

export const getSaleCount = async (storeId: string) => {
    const saleCount = await prismadb.order.count({
        where: {
            storeId,
            isPaid: true
        }
    })
    return saleCount
}