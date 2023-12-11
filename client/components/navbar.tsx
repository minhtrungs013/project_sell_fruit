import "./main.css"
import "./grid.css"
import MainNav from "./main-nav"
import getCategories from "@/actions/get-categories"
import NavbarActions from "./navbar-action"
import Container from "./ui/container"
import Link from "next/link"

export const revalidate = 0

const Navbar = async () => {

    const categories = await getCategories()
    return (
        <Container>
            <div className="navbar ">
                <div className="row">
                    <div className="col l-3 navbar__lerf">
                        <Link href={"/"} className="navbar__lerf_logo">
                            <img src="https://res.cloudinary.com/dax8xvyhi/image/upload/v1701712203/r0vrxnbcb9ybqgwenjxi.webp" alt="" />
                        </Link>
                    </div>
                    <div className="col l-6 navbar__center ">
                        <MainNav data={categories} />
                    </div>
                    <div className="col l-3 navbar__rigth">
                        <NavbarActions />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar