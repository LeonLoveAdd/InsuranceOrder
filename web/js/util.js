/**
 * 获取日期yyyy-MM-dd
 * @param obj
 * @returns {*}
 */
function getDateStr(obj) {
    if (obj == null) return "";
    var year = (parseInt(obj.year) + 1900).toString();
    var mouth = parseInt((obj.month) + 1).toString();
    if (mouth.length != 2) {
        mouth = 0 + mouth;
    }
    //  dataLeftCompleting(2, "0", mouth.toString()).toString();
    var day = parseInt((obj.date)).toString();
    //ataLeftCompleting(2, "0", day.toString()).toString();
    if (day.length != 2) {
        day = 0 + day;
    }
    var time1 = year + "-" + mouth + "-" + day;
    return time1;
}

/*时间格式转换*/
function Todate(num) { //Fri Oct 31 18:00:00 UTC+0800 2008
    num = num + "";
    var date = "";
    var month = new Array();
    month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jan"] = 6;
    month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
    var week = new Array();
    week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
    str = num.split(" ");
    date = str[5] + "-";
    date = date + month[str[1]] + "-" + str[2];
    return date;
}

/**/
 function toQueryString(obj) {

    var qstring = "?"
    for (var k in obj) {
        qstring += k + "=" + obj[k] + "&"
    }

    return qstring

}
var toHttpParams = (function(){
    function serialize(key, value, param) {
        if(Array.isArray(value)) {
            for(var i = 0; i < value.length; i++) {
                serialize(key + '[' + i + ']', value[i], param)
            }
        } else if(value != undefined && value.constructor === Object) {
            for(var k in value) {
                serialize(key + '.' + k, value[k], param);
            }
        } else {
            param[key] = value;
        }
    }
    function serializeObj(obj) {
        var param = {};
        for(var k in obj) {
            serialize(k, obj[k], param);
        }
        return param;
    }
    return serializeObj;
})();


function printobj(obj){
    //判断说明是数据类型

    // if(typeof obj != "object"){//判断说明不是对象
    //     return obj
    // }
    var qstring = "?"

    for(var k in obj){//遍历对象和数组


        if(typeof obj[k] != "object"){//不是对象
            qstring += k + "=" + obj[k] + "&"
        }
        if(typeof obj[k] == "object"){//判断说明如果是对象则递归
            printobj(obj[k])
            // qstring += k + "=" + obj[k] + "&"

        }




        console.log(k + "\t" + obj[k]);//在控制台输出

    }
    return qstring;
}

/*取数据字典的数据*/
function getDataFromDate(obj) {
    if(obj!=null){
        return obj.name;
    }
    else {
        return ""
    }
}

/*重置*/
function reset() {
    window.location.reload();
}

/**
 * 检验密码格式是否合格(英文大小写，数字，符号任意四选三，长度在8-30之间)
 */
function checkPassWord(password){
    var regex = new RegExp('^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$');
    if(!regex.test(password)){
        return false;
    }else{
        return true;
    }
}

/**
 * 返回历史页的上一页
 */
function historyBack() {
    history.back();
}

/**
 * 设置公司下拉框数据
 */
function setCompanySelectData() {
    passwordModifyMark();
    $(".department").hide();  // 隐藏部门下拉框数据
    $(".team").hide();  // 隐藏项目组下拉框数据
    $.ajax({
        type: "POST",                       // 方法类型
        url: "getCompanyAndDepartmentAndTeamList",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        dataType: "json",
        success: function (result) {
            if (result != undefined && result.status === "success") {
                var company = $("select[name='company']");
                company.children().remove();
                $.each(result.companyList, function (index, item) {
                    var option = $('<option/>');
                    option.val(item.id);
                    option.text(item.name + "(" + item.code + ")");
                    company.append(option);
                });
                $("select[name='company']").val(-1);  // 设置初始选中
            } else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
}

/**
 * 选择公司后设置部门下拉框数据
 * @param e
 */
function setDepartmentSelectData(e) {
    $(".department").show();  // 显示部门下拉框数据
    $(".team").hide();  // 隐藏项目组下拉框数据
    var parentId = $(e).find("option:selected").val();  // 获取选中公司下拉框选中数据ID
    $.ajax({
        type: "POST",                       // 方法类型
        url: "getDataDictionaryByParentId",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        data:{
            parentId : parentId
        },
        dataType: "json",
        success: function (result) {
            if (result != undefined && result.status === "success") {
                var department = $("select[name='department']");  // 设置部门下拉框数据
                department.children().remove();
                $.each(result.dataList, function (index, item) {
                    var option = $('<option/>');
                    option.val(item.id);
                    option.text(item.name + "(" + item.code + ")");
                    department.append(option);
                });
                $("select[name='department']").val(-1);
            } else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
}

/**
 * 选择部门后设置项目组下拉框数据
 * @param e
 */
function setTeamSelectData(e) {
    $(".team").show();  // 显示部门下拉框数据
    var parentId = $(e).find("option:selected").val();  // 获取选中公司下拉框选中数据ID
    $.ajax({
        type: "POST",                       // 方法类型
        url: "getDataDictionaryByParentId",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        data:{
            parentId : parentId
        },
        dataType: "json",
        success: function (result) {
            if (result != undefined && result.status === "success") {
                var team = $("select[name='team']");  // 设置项目组下拉框数据
                team.children().remove();
                $.each(result.dataList, function (index, item) {
                    var option = $('<option/>');
                    option.val(item.id);
                    option.text(item.name + "(" + item.code + ")");
                    team.append(option);
                });
                $("select[name='team']").val(-1);
            } else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
}

/*设置返回数字及保留的小数*/
function getNumber(num,n) {
    if(isNaN(num)){
        return "";
    }
    else {
        return parseFloat(num).toFixed(n);
    }
}

/**
 * 密码修改提示
 */
function passwordModifyMark() {
    if(getCurrentUser() == null || getCurrentUser() === {}) {  // 如果未登陆则进行登陆
        window.location.href="signin";
    }else {
        if(localStorage.modifyPasswordMark === "1") {  // 如果超过60天不到90天就进行提醒
            $(".navbar-right").addClass("wrap");
            var div = "<div class=\"notice\">1</div>";
            $(".navbar-right").after(div);
            $(".navbar-right").find(".dropdown-menu").children().eq(0).prepend(div);
            $(".navbar-right").find(".dropdown-menu").children().eq(0).find("a").addClass("wrap1");
        }else if(localStorage.modifyPasswordMark === "0" || localStorage.modifyPasswordMark === ""){ // 如果没有则删除之前提醒
            $(".wrap").removeClass("wrap");
            $(".wrap1").removeClass("wrap1");
            $(".notice").remove();
        }else if(localStorage.modifyPasswordMark === "2"){  // 超过90天强制更改
            $(".navbar-right").addClass("wrap");
            var div = "<div class=\"notice\">1</div>";
            $(".navbar-right").after(div);
            $(".navbar-right").find(".dropdown-menu").children().eq(0).prepend(div);
            $(".navbar-right").find(".dropdown-menu").children().eq(0).find("a").addClass("wrap1");
            var url = window.location.href;
            if(url.substring(url.length - 7) !== "account"){  // 如果不是修改页面则跳转至修改页面
                window.location.href = "account";
            }
        }
    }
}

/**
 * 根据ID获取字典明细数据
 */
function getDataDictionaryItemById(id) {
    var data = {};
    $.ajax({
        type: "POST",                       // 方法类型
        url: "getDataDictionaryItemById",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        data:{
            id : id
        },
        dataType: "json",
        success: function (result) {
            if (result != undefined && result.status === "success") {
                data = result.data;
            } else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
    return data;
}

/**
 * 获取当前登陆人信息
 */
function getCurrentUser() {
    var data = {};
    $.ajax({
        type: "POST",                       // 方法类型
        url: "getCurrentUser",                  // url
        async: false,                      // 同步：意思是当有返回值以后才会进行后面的js程序
        dataType: "json",
        success: function (result) {
            if (result != undefined && result.status === "success") {
                data = result.data;
            } else {
                console.log(result.message);
            }
        },
        error: function (result) {
            console.log(result.message);
        }
    });
    return data;
}

/*订单反馈接口
* id 仅是订单号
* */
function PushOperationTracking(id) {
    var user=getCurrentUser();
    console.log(user)
    var userName;
    var code;
    if(user!=null){
        userName=user.name;
        code=user.teamDataItem.code;
    }
    else {
        userName=""
        code=""
    }
    console.log(userName)
    $.ajax({
        type:"POST",
        url:"PushOperationTracking",
        async: false,
        data:{"userName":userName,"code":code,"id":id},
        dataType:"json",
        // contentType: "application/json; charset=utf-8",
        success:function (result) {
            console.log(JSON.stringify(result));

        },
        error:function (result) {

        }
    })
}

/*保单上传接口*/
function PushInsuranceDetail(id,state) {
    $.ajax({
        type:"POST",
        url:"PushInsuranceDetail",
        async: false,
        data:{"id":id,"state":state},
        dataType:"json",
        // contentType: "application/json; charset=utf-8",
        success:function (result) {
            console.log(JSON.stringify(result));

        },
        error:function (result) {

        }
    })
}

/*订单结算接口
* id 仅是订单号
* */
function PushDocStatus(id) {
    $.ajax({
        type:"POST",
        url:"PushDocStatus",
        async: false,
        data:{"id":id},
        dataType:"json",
        // contentType: "application/json; charset=utf-8",
        success:function (result) {
            console.log(JSON.stringify(result));

        },
        error:function (result) {

        }
    })
}

/**
 * 检验是否有权限进入账号管理页面
 */
function jumpToAccountManage(){
    var user = getCurrentUser();
    if(user != null) {
        if(user.userName === "root") {
            window.location.href = "accountManage";
        }else {
            alert("该账号没有权限进入！");
        }
    }else {
        window.location.href = "signin";
    }
}

/*文件下载*/
function downLoad(url) {
    if(url.length>0){
        window.open("downloadFile?fileName="+url);
    }
    else {
        alert("未上传文件!")
    }
}


