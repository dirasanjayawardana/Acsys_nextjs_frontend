import { FiHome, FiTable, FiCheckSquare, FiLogOut, FiUsers, FiUserCheck } from "react-icons/fi";

export const sidebarData = [
    {
        link: '/dashboard',
        // icon: <MdOutlineSpaceDashboard />,
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
        link: '/aplications',
        // icon: <FiBookmark />,
        header: "Applications",
        pages: [
            {
                id_active: 2,
                link: '/main/applications/tablebank',
                icon: <FiTable size={20} />,
                name: "Table Bank",
            },
            {
                id_active: 3,
                link: '/main/applications/tablechannel',
                icon: <FiTable size={20} />,
                name: "Table Channel",
            },
            {
                id_active: 4,
                link: '/main/applications/tabledati2',
                icon: <FiTable size={20} />,
                name: "Table Dati-2",
            },
            {
                id_active: 5,
                link: '/main/applications/tablecabang',
                icon: <FiTable size={20} />,
                name: "Table Cabang",
            },
            
        ]
    },
    {
        link: '/status',
        // icon: <FiBookmark />,
        header: "Status",
        pages: [
            {
                id_active: 6,
                link: '/status/satusapprovement',
                icon: <FiCheckSquare size={20}/>,
                name: "Status Approvement",
            },
        ]
    }
]

export const sidebarAdmin = [
    {
        link: '/administrator',
        // icon: <MdOutlineSpaceDashboard />,
        header: "Administrator",
        pages: [
            {
                id_active: 1,
                link: '/main/administrator/userlist',
                icon: <FiUsers size={20} />,
                name: "User List",
            }, 
            {
                id_active: 1,
                link: '/main/administrator/userlog',
                icon: <FiUserCheck size={20} />,
                name: "User Log",
            },
        ]
    },
]