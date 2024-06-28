import { FiHome, FiCheckSquare, FiUsers, FiUserCheck } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";

export const sidebarData = [
    {
        link: '/dashboard',
        header: "Dashboard",
        pages: [
            {
                id_active: 11,
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
                id_active: 21,
                link: '/main/parameters/cabang',
                icon: <BsGrid size={20} />,
                name: "Cabang",
            },
            {
                id_active: 22,
                link: '/main/parameters/produk',
                icon: <BsGrid size={20} />,
                name: "Produk",
            },
            {
                id_active: 23,
                link: '/main/parameters/kodepos',
                icon: <BsGrid size={20} />,
                name: "Kode Pos",
            },
        ]
    },
    {
        link: '/status',
        header: "Status",
        pages: [
            {
                id_active: 31,
                link: '/main/status/approvecabang',
                icon: <FiCheckSquare size={20}/>,
                name: "Otorisasi Cabang",
            },
            {
                id_active: 32,
                link: '/main/status/approveproduk',
                icon: <FiCheckSquare size={20}/>,
                name: "Otorisasi Produk",
            },
            {
                id_active: 32,
                link: '/main/status/approvekodepos',
                icon: <FiCheckSquare size={20}/>,
                name: "Otorisasi Kode Pos",
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
                id_active: 41,
                link: '/main/administrator/userlist',
                icon: <FiUsers size={20} />,
                name: "User List",
            }, 
            {
                id_active: 42,
                link: '/main/administrator/userlog',
                icon: <FiUserCheck size={20} />,
                name: "User Log",
            },
        ]
    },
]