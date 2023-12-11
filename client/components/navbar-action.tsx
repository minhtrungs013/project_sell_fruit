"use client"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"

const NavbarActions =  () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [!isMounted])

    if (!isMounted) return null


    return (
        <div className="navbar__rigth-body ">
            <ul className="navbar__rigth-list">
                <li className="navbar__rigth-item">
                    a
                </li>
                <li className=" navbar__rigth-item">
                    <ShoppingCart size={25} color="black" />
                </li>
            </ul>
            <div className="header__cart__price">
                item: <span>$150.00</span>
            </div>
        </div>
    )

}

export default NavbarActions