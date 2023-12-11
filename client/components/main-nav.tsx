"use client";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname()
    const routes = data?.map((router) => ({
        href: `/category/${router.id}`,
        label: router.name,
        active: pathname === `/category/${router.id}`
    }))


    return (
        <ul className="row navbar__center-list h-full">
            {routes?.map((item) => (
                <li className="l-2 navbar__center-item" key={item.href}>
                    <Link className="navbar__center-link " href={item.href}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MainNav;