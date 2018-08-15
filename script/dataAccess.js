axios.defaults.baseURL = location.origin;
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

var DataAccess = {};
//获取测试数据
DataAccess.GetTableData = function (p) {
    return axios.get("/testData/data_001.txt", {
        params: p
    });
};

//添加用户信息
DataAccess.addUser = function (p) {
    return axios.post("/testData/data_001.txt", p);
}

//添加用户信息
DataAccess.editUser = function (p) {
    return axios.post("/testData/data_001.txt", p);
}