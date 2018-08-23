var Config = {};

//系统的名字
Config.systemName = "xx管理系统";

//菜单折叠按钮
Config.menuFolding = {
    buttonShow: false, //是否显示按钮
    defaultStatus: false, //默认是否折叠
};

//菜单配置文件 只支持2级菜单
//name 菜单名称
//icon 图标样式，可以为空，参考element图标样式
//url 链接地址，如有有子菜单可以只定义一个key
//children 子节点
Config.menuInfo = [{
    name: "表格数据",
    icon: "el-icon-document",
    url: "table",
    children: [{
        name: "简单展示",
        url: "template_page/table/demo01.html",
    }, {
        name: "增删改查",
        url: "template_page/table/demo02.html",
    }]
}, {
    name: "表单相关",
    icon: "el-icon-edit-outline",
    url: "from",
    children: [{
        name: "各种类型",
        url: "template_page/from/demo01.html",
    }, {
        name: "输入验证",
        url: "template_page/from/demo02.html",
    }]
}, {
    name: "一些经验",
    icon: "el-icon-more",
    url: "else",
    children: [{
        name: "使用心得",
        url: "template_page/else/experience.html",
    }, {
        name: "通用的",
        url: "template_page/else/common.html",
    }]
}];