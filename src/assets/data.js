import { FiHome, FiCheckSquare, FiUsers, FiUserCheck } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";

export const sidebarData = [
    {
        link: '/dashboard',
        header: "Dashboard",
        pages: [
            {
                id_active: 1,
                link: '/main',
                icon: <FiHome size={20} />,
                name: "Home",
            }
        ]
    },
    {
        link: '/parameters',
        header: "Parameter",
        pages: [
            {
                id_active: 2,
                link: '/main/parameters/cabang',
                icon: <BsGrid size={20} />,
                name: "Cabang",
            },
            {
                id_active: 2,
                link: '/main/parameters/produk',
                icon: <BsGrid size={20} />,
                name: "Produk",
            },
        ]
    },
    {
        link: '/status',
        header: "Status",
        pages: [
            {
                id_active: 7,
                link: '/main/status/statusapprovement',
                icon: <FiCheckSquare size={20}/>,
                name: "Status Approvement",
            },
        ]
    }
]

export const sidebarAdmin = [
    {
        link: '/administrator',
        header: "Administrator",
        pages: [
            {
                id_active: 8,
                link: '/main/administrator/userlist',
                icon: <FiUsers size={20} />,
                name: "User List",
            }, 
            {
                id_active: 9,
                link: '/main/administrator/userlog',
                icon: <FiUserCheck size={20} />,
                name: "User Log",
            },
        ]
    },
]