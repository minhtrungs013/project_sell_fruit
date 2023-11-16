"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";


export default function StoreModal() {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="test"
            description="tesstss"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            aasasdasdas
        </Modal>
    )
}
