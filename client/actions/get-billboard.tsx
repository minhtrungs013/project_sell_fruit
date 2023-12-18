import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_PAI_URL}/billboards`

const getbillboard = async (): Promise<Billboard[]> => {
    const res = await fetch(`${URL}`);
    return res.json()
}
export default getbillboard
