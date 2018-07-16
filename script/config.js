var Config = {};

//菜单配置文件 只支持2级菜单
//name 菜单名称
//icon 图标样式，可以为空，参考element图标样式
//url 链接地址，如有有子菜单可以只定义一个key
//children 子节点
Config.menuInfo = [{
        name: "表格数据",
        icon: "el-icon-document",
        url: "tables",
        children: [{
                name: "简单的数据展示",
                url: "template_page/table/common.html",
            },
            {
                name: "类型2",
                url: "template_page/table/type2.html",
            },
            {
                name: "类型3",
                url: "template_page/table/type3.html",
            }
        ]
    },
    {
        name: "设置",
        icon: "el-icon-setting",
        url: "page/settings.html",
        children: null
    }
];
