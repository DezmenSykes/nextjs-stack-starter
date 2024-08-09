"use client"
import NavLink from '@/components/Navbar/Links/navLinks/NavLinks'
import styles from './links.module.css'
import { useState } from 'react';
import Image from 'next/image';

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
];

const Links = () => {
    const [open, setOpen] = useState(false);
    const session = true;
    const isAdmin = true;

    return ( 
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}
                {
                    session ? (
                        <>
                            { isAdmin ? <NavLink item={{title: 'Admin', path: '/admin'}} key='Admin' /> : '' }    
                            <button className={styles.logout}>Logout</button>
                        </>
                        
                    ) : (
                        <NavLink item={{title: 'Login', path: '/login'}} key='Login' />
                    )
                }
            </div>
         
            <Image className={styles.menuBtn} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen(!open)}/>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            }
        </div>
        
    )
}

export default Links