axios.defaults.baseURL = location.origin;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var DataAccess = {};
DataAccess.GetTableData = function (params) {
    return axios.get('/testData/data_001.txt', { params: params });
};