/*
    全局混入对象 by liun
*/

var Mixin_Global = {
    data: function () {
        return {};
    },
    created: function () {},
    methods: {
        m_alert: function (msg) {
            this.$alert(msg, "", {
                confirmButtonText: '确定',
                callback: function (action) {}
            })
        },
        m_confirm: function (msg) {
            return this.$confirm(msg, '提示', {
                center: true,
                type: "warning",
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            });
        }
    }
};