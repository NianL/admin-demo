/*
    数据库访问接口 by liun
*/

axios.defaults.baseURL = location.origin;
if (location.host.indexOf('.zhizaoyun.com') != -1) { //二级目录配置
    axios.defaults.baseURL = window.parent.childDomain;
}

axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


var HttpRequest = {};
HttpRequest.get = function (url, params) {
    return axios.get(url, {
        params: params
    }).catch(function (e) {
        console.log(url + " error");
        console.log(JSON.stringify(e));
    });
};

HttpRequest.post = function (url, params, config) {
    return axios.post(url, params, config).catch(function (e) {
        console.log(url + " error");
        console.log(JSON.stringify(e));
    });
};

var DataAccess = {};

// GET
// demo
DataAccess.demo = function (p) {
    return HttpRequest.get("/demo", p);
}