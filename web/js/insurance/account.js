

/**
 * 检测密码是否一致
 */
function checkPasswordIsSame() {
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    if(password != confirmPassword) {
        $("#notPass").show();   // 显示提示
        $("input[name='confirmPassword']").focus();  // 鼠标焦点定位到密码输入框
        return false;
    }else {
        $("#notPass").hide();   // 隐藏提示
        return true;
    }
}

/**
 * 检测密码是否和旧密码一样
 */
function checkPasswordIsModify() {
    if($("#oldPassword").val() === $("#confirmPassword").val()) {
        return true;
    }else {
        return false
    }
}

/**
 * 更新账号信息
 */
function updateUser() {
    if(checkPasswordIsModify()){ // 检测密码是否和旧密码一样
        alert("新密码不能和原密码一样！");
        return false;
    }
    if(!checkPasswordIsSame()){  // 检验两次输入的密码是否一致
        return false;
    }
    if(!checkPassWord($("#confirmPassword").val())){// 检验密码格式
        alert("密码格式为英文大小写、数字、符号至少三种组合，长度在8至30之间！");
        $("input[name='password']").focus();  // 鼠标焦点定位到密码输入框
        return false;
    }
    // 获取最新数据
    var data = {};
    data.id = 0;
    data.userName = $("#userName").val();
    data.password = $("#password").val();
    data.name = $("#name").val();
    if(data.name === ""){
        alert("姓名不能为空！");
        return false;
    }
    var companyId = $("#company").find("option:selected").val();
    if(companyId !== undefined) {
        var companyDataItem = {};
        companyDataItem.id = companyId;
        data.companyDataItem = companyDataItem;
    }
    var departmentId = $("#department").find("option:selected").val();
    if(departmentId !== undefined) {
        var departmentDataItem = {};
        departmentDataItem.id = departmentId;
        data.departmentDataItem = departmentDataItem;
    }
    var teamId = $("#team").find("option:selected").val();
    if(teamId !== undefined) {
        var teamDataItem = {};
        teamDataItem.id = teamId;
        data.teamDataItem = teamDataItem;
    }
    console.log(data);
    $.ajax({
        type: "POST",                       // 方法类型
        url: "updateUserById",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if (result !== undefined && result.status === "success") {
                alert("修改成功!");
                window.location.href="signin";  // 重新登录
            } else {
                alert(result.message);
            }
        },
        error: function (result) {
            alert(result.message);
        }
    });
}