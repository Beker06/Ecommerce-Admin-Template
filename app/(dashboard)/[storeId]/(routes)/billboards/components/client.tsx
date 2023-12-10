"use client";

import { Plus } from "lucide-react";

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

// interface BillboardClientProps {
//     data: BillboardColumn[];
// }

export const BillboardClient = () => {
// export const BillboardClient: React.FC<BillboardClientProps> = ({
//     data
// }) => {
    const params = useParams();
    const router = useRouter();

    return(
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboard`} description="Manage billboards for yo" />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
        </>
    )
}