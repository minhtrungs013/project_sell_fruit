"use client";

import { BillboardColumn } from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import Image from "next/image";


interface ImageTemplProps {
    data: BillboardColumn;
}


export const ImageTempl: React.FC<ImageTemplProps> = ({
    data,
}) => {
    return (
        <div className="relative w-[50px] h-[50px] rounded-md overflow-hidden">
            <Image fill className="object-cover" alt="image" src={data.imageUrl} />
        </div>

    )
}