<%--
  Created by IntelliJ IDEA.
  User: 950618
  Date: 2019/2/19
  Time: 16:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <meta charset="UTF-8">
  <title>订单列表</title>
  <script src="js/jquery/jquery2.0.3/jquery-2.0.3.min.js"></script>
  <script src="js/jquery/2.0.0/jquery.min.js"></script>
  <link href="css/3.3.6/bootstrap.min.css" rel="stylesheet">
  <script src="js/3.3.6/bootstrap.min.js"></script>
  <link href="css/navbar.css" rel="stylesheet">
  <script src="js/navbar.js"></script>
</head>
<style type="text/css">
  .pull-right{
    float: right !important;
  }
  .pull-left{
    float: left !important;
  }
</style>
<body>
<!--导航条-->
<nav class="navbar navbar-inverse navbar-fixed-top float" id="navbar1" style="height: 50px;">
  <div class="main-title">
    <ul class="nav navbar-nav navbar-left navbar-side">
      <li>
        <a href="#" onclick="$('body').toggleClass('sidebar-collapse');" style="width: 50px;height: 50px">
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </a>
      </li>
    </ul>
  </div>
  <div class="container navbar-left" style="width: 800px;">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src="image/logo2.png"></a>
    </div>
    <div id="navbar" class="collapse navbar-collapse" style="margin-left: 150px;">
      <ul class="nav navbar-nav">
        <li class="active"><a href="">订单保险</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
  <ul class="nav navbar-nav navbar-right">
    <li><a href="#" title="提醒"><span class="glyphicon glyphicon-bell"></span></a></li>
    <li><a href="#" title="事项"><span class="glyphicon glyphicon-envelope"></span></a></li>
    <li class="dropdown">
      <a href="#" title="我的" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span></a>
      <ul class="dropdown-menu">
        <li><a href="">个人信息</a></li>
        <li><a href="">待办事项</a></li>
        <li><a href="" onclick="showLog();">登录日志</a></li>
        <li><a href="">注销</a></li>
      </ul>
    </li>
  </ul>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="sidebar">
      <ul class="sidenav animated fadeInUp">
        <!--<li><a href="#"><span class="glyphicon glyphicon-backward" aria-hidden="true"></span></a></li>-->
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-list" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;系统概览 </span><span class="iright pull-right">&gt;</span><span class="sr-only">(current)</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;商务管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-list" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;配伍计划 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;接收管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-save" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;贮存管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-sort-by-attributes-alt" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;预备管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li class="active"><a class="withripple" href=""><span class="glyphicon glyphicon-retweet" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;处置管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-tags" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;次生管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-indent-right" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;采购管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-edit" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;报表管理 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-signal" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;基础数据 </span><span class="iright pull-right">&gt;</span></a></li>
        <li><a class="withripple" href=""><span class="glyphicon glyphicon-cog" aria-hidden="true"></span><span class="sidespan">&nbsp;&nbsp;系统设置 </span><span class="iright pull-right">&gt;</span></a></li>
      </ul>
    </div>
  </div>

  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <div class="row">
      <div>
        <ol class="breadcrumb">
          <li class="active">订单列表</li>
        </ol>
      </div>
      <h4 class="sub-header">||数据列表</h4>
    </div>
    <div class="row">
      <div>
        <!--操作按钮-->
        <div class="pull-left col-md-6">
          <a class="btn btn-primary btn-xs" href="" id="function_-298" onclick=""><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 新增</a>
          <a class="btn btn-primary btn-xs" href="" id="function_-299" onclick=""><span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span> 导入</a>
          <a class="btn btn-primary btn-xs" href="" id="function_-300" onclick=""><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span> 导出</a>
        </div>
        <!--查询框-->
        <div class="input-group col-md-4 pull-right">
          <input type="text" class="form-control" placeholder="搜索..." id="searchContent" onkeyup="searchData();">
          <span class="input-group-btn">
              <a class="btn btn-default" onclick="searchData();"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> 查询</a>
              <a class="btn btn-default" onclick="$('#senior').toggle();"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> 高级查询</a>
              <a class="btn btn-default" onclick="reset();"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> 重置</a>
          </span>
        </div>
      </div>
    </div>
    <br>
    <div class="panel panel-default" id="senior" style="display: none;">
      <div class="panel-body">
        <div class="row">
          <div class="form-horizontal col-md-3">
            <div class="form-group">
              <label for="search-documentNumber" class="col-sm-4 control-label">单据号</label>
              <div class="col-xs-7">
                <input type="text" onkeyup="searchData();" class="form-control" id="search-documentNumber" name="search-documentNumber" placeholder="">
              </div>
            </div>
          </div>
          <div class="form-horizontal col-md-3">
            <div class="form-group">
              <label for="search-creator" class="col-sm-4 control-label">创建人</label>
              <div class="col-xs-7">
                <input type="text" onkeyup="searchData();" class="form-control" id="search-creator" name="search-creator" placeholder="">
              </div>
            </div>
          </div>
          <div class="form-horizontal col-md-3">
            <div class="form-group">
              <label for="search-createDept" class="col-sm-4 control-label">创建部门</label>
              <div class="col-xs-7">
                <input type="text" onkeyup="searchData();" class="form-control" id="search-createDept" name="search-createDept" placeholder="">
              </div>
            </div>
          </div>
          <div class="form-horizontal col-md-3">
            <div class="form-group">
              <label for="search-editor" class="col-sm-4 control-label">修改人</label>
              <div class="col-xs-7">
                <input type="text" onkeyup="searchData();" class="form-control" id="search-editor" name="search-editor" placeholder="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped table-hover table-condensed">
          <tr>
              <th class="text-center">订单号</th>
              <th class="text-center">状态</th>
              <th class="text-center">申请人</th>
              <th class="text-center">申请部门</th>
              <th class="text-center">投保日期</th>
              <th class="text-center">审批日期</th>
              <th class="text-center">被投保人名称</th>
              <th class="text-center">货物价值</th>
              <th class="text-center">保险公司名称</th>
              <th class="text-center">保费</th>
              <th class="text-center">操作</th>
          </tr>
          <tr>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">
                <a href="#" onclick="" title="查看"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" onclick="" title="接单"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" onclick="" title="投保"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" onclick="" title="作废"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" id="upload" onclick="" title="上传附件"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" onclick="" title="查看附件"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
                <a href="#" onclick="" title="关闭"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>
              </td>
          </tr>
      </table>
    </div>
  </div>
</div>
<div id="embed"></div>
<div class="hidden">
  <input type="file" id="file">
</div>
</body>
<script>
  $("#upload").click(
      function file1Click() {
          $("#file").click();
      })
</script>
</html>
