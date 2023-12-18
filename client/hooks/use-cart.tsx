import { Cart, Product } from "@/types"
import toast from "react-hot-toast"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface UseCartStore {
    items: Cart[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

const useCart = create(
    persist<UseCartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.findIndex((item) => item.product.id === data.id)
            if (existingItem !== -1) {
                currentItems[existingItem].quantity += 1;
                return toast("Update items to cart.")
            } else {
                set({ items: [...get().items, { product: data, quantity: 1 }] })
                toast("Item add to cart.")
            }
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.product.id !== id)] })
            toast("Item remove from the cart.")
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)
export default useCart