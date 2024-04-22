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
                link: '/main/applications/corebanking',
                icon: <FiTable size={20} />,
                name: "Core Banking",
            },
            {
                id_active: 3,
                link: '/main/applications/memphis',
                icon: <FiTable size={20} />,
                name: "Memphis",
            },
            {
                id_active: 4,
                link: '/main/applications/abiya',
                icon: <FiTable size={20} />,
                name: "Abiya",
            },
            {
                id_active: 5,
                link: '/main/applications/mobilebanking',
                icon: <FiTable size={20} />,
                name: "Mobile Banking",
            },
            {
                id_active: 6,
                link: '/main/applications/klikbisnis',
                icon: <FiTable size={20} />,
                name: "Klik Bisnis",
            },
            
        ]
    },
    {
        link: '/status',
        // icon: <FiBookmark />,
        header: "Status",
        pages: [
            {
                id_active: 7,
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