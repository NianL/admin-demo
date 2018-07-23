var plugin_user = {};
plugin_user.install = function (Vue, options) {
    Vue.prototype.$user = function (obj, type) {
        var coms = Vue.extend({
            template: '\
                <el-dialog width="500px" :title="type==\'add\'?\'添加新用户\':\'编辑用户\'" :visible.sync="dialogVisible" :close-on-click-modal="false">\
                    <div v-loading="submitLoading">\
                        <el-form :model="userInfo" :rules="formRules" ref="ruleForm" label-width="100px" size="small">\
                            <el-form-item label="姓名：" prop="name"><el-input v-model="userInfo.name" :maxlength="20"></el-input></el-form-item>\
                            <el-form-item label="手机：" prop="mobile"><el-input v-model="userInfo.mobile" :maxlength="11" \></el-input></el-form-item>\
                        </el-form>\
                        <div style="text-align:center; margin-top:10px;">\
                            <el-button type="primary" @click="submitForm" size="small">确 定</el-button>\
                            <el-button @click="dialogVisible=false" size="small">取 消</el-button>\
                        </div>\
                    </div>\
                </el-dialog>\
                    ',
            data: function () {
                return {
                    dialogVisible: true,
                    submitLoading: false,
                    type: "add",
                    callback: null,
                    userInfo: {
                        name: "",
                        mobile: "",
                        createTime: "",
                    },
                    formRules: {}
                };
            },
            watch: {
                dialogVisible: function (n, o) {
                    document.body.removeChild(coms);
                }
            },
            created: function () {
                if (type) this.type = type; //操作类型
                if (obj.type) this.type = obj.type;
                if (obj.callback) this.callback = obj.callback; //回调方法

                //init formRulesForm
                this.initFormRules();

                //init edit info
                if (this.type != "add") {
                    this.userInfo = {
                        id: obj.item.id,
                        name: obj.item.name,
                        mobile: obj.item.mobile,
                        createTime: obj.item.createTime
                    };
                }
            },
            methods: {
                initFormRules: function () {
                    this.formRules.name = [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }, {
                        min: 2,
                        max: 20,
                        message: '长度在 2 到 20 个字符',
                        trigger: 'blur'
                    }];
                    var validatorMobile = function (rule, value, callback) {
                        if (value == '') {
                            callback(new Error('请输入手机'));
                        } else if (!Common.isMobile(value)) {
                            callback(new Error('请输入正确的手机号'));
                        } else {
                            callback();
                        }
                    };
                    this.formRules.mobile = [{
                        required: true,
                        validator: validatorMobile,
                        trigger: 'blur'
                    }];
                },
                submitForm: function () {
                    var _this = this;
                    this.$refs["ruleForm"].validate(function (valid) {
                        if (valid) {
                            _this.submitLoading = true;
                            if (_this.type == "add") {
                                _this.userInfo.createTime = new Date();
                                //DataAccess.addUser(_this.userInfo).then(request_then);
                                request_then({
                                    status: {
                                        code: 1,
                                        msg: "add success"
                                    },
                                    data: _this.userInfo
                                });
                            } else {
                                //DataAccess.editUser(_this.userInfo).then(request_then);
                                request_then({
                                    status: {
                                        code: 1,
                                        msg: "edit success"
                                    },
                                    data: _this.userInfo
                                });
                            }

                        }
                    });

                    function request_then(res) {
                        _this.callback && _this.callback(res.data);
                        _this.dialogVisible = false;
                    }
                },
            }
        });
        var coms = new coms().$mount().$el;
        document.body.appendChild(coms);
    };
    ['add', 'edit'].forEach(function (type) {
        Vue.prototype.$user[type] = function (obj) {
            return Vue.prototype.$user(obj, type);
        }
    });
}

Vue.use(plugin_user);