/*
    网站相关配置 by liun
*/

var Config = {};

//系统的名字
Config.systemName = "XX后台管理系统";

//菜单配置文件 只支持2级菜单
//name 菜单名称
//icon 图标样式，可以为空，参考element图标样式
//url 链接地址，如有有子菜单可以只定义一个key
//children 子节点
Config.menuInfo = {
    buttonShow: false, //是否显示按钮
    defaultStatus: false, //默认是否折叠
    defaultName: "demoyemian", //默认加载页面
    defaultUrl: "demo.html", //默认加载页面
    data: [{
        name: "demoyemian",
        url: "demo.html"
    }]
};