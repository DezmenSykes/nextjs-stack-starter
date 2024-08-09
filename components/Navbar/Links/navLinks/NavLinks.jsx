"use client"
import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"

const NavLink = ({item}) => {
    const pathName = usePathname();
    return (
        <Link className={`${pathName === item.path ? styles.active : styles.link}`} href={item.path}>
            {item.title}
        </Link>
    )
}

export default NavLink