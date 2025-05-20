export const adminMenu = [
    { //người dùng
        name: 'menu.admin.user', menus: [            
            { name: 'menu.admin.user-manage-v1', link: '/system/user-manage-v1'},
            { name: 'menu.admin.user-manage-v2', link: '/system/user-manage-v2'}, 
            { name: 'menu.admin.doctor-manage', link: '/system/doctor-manage'}   

        ],

    },
    {   //phòng khám
        name: 'menu.admin.clinic', menus: [
            { name: 'menu.admin.clinic-manage', link: '/system/clinic-manage'},
        ],
    },
    {   //chuyên khoa
        name: 'menu.admin.specialty', menus: [
            { name: 'menu.admin.specialty-manage', link: '/system/specialty-manage'},
        ],
    },
    {   //phòng khám
        name: 'menu.admin.handbook', menus: [
            { name: 'menu.admin.handbook-manage', link: '/system/handbook-manage'},
        ],
    },
];