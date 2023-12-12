import { Product } from "@/types"
import { create } from "zustand"

interface UsePreviewModalProps {
    isOpen: boolean,
    data?: Product
    onOpen: (data: Product) => void
    onclose: () => void
}

const usePreviewModal = create<UsePreviewModalProps>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data, isOpen: true }),
    onclose: () => set({ isOpen: false })

}))

export default usePreviewModal