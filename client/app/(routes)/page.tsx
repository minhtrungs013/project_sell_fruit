import getbillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Carousel from "@/components/carousel";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const categories = await getCategories()
    let Billboards = await Promise.all(categories.map(async category => {
        const { billboard } = await getCategory(category.id);
        return billboard;
    }));

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Carousel loop>
                    {Billboards.map((billboard, i) => (
                        <Link href={"/"} className="relative flex-[0_0_100%]" key={i}>
                            <Billboard data={billboard} />
                        </Link>
                    ))}
                </Carousel>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    )
}
export default HomePage;