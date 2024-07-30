const { default: Link } = require("next/link")

const Links = () => {
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
        },
        {
            title: 'Admin',
            path: '/admin'
        }
    ];

    return ( 
        <div>
            {links.map((link => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
        </div>
    )
}

export default Links