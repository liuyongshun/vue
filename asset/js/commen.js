// JavaScript Document
var AjaxUrl = "http://172.16.3.241:8086/Interface/";//陶瓷快讯接口
var avatorUrl = WebUrl = "http://172.16.3.241:8086";

// var AjaxUrl = "http://www.cd086.com/interface/";//陶瓷快讯接口
// var exhiurl = "http://www.cd086.com/BackManager/";

// 获取url的参数值。
function getParam(sVar) {
  
  return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  
}
//密码可见性
function b_eye() {
  var psd = $("#password").attr('type')
  if(psd=="password"){
    $("#password").attr({"type":"text"})
    $("#eye").attr({"src":"images/yj@3x.png"})
    
  }else if(psd=="text"){
    $("#password").attr({"type":"password"})
    $("#eye").attr({"src":"images/yjj@3x.png"})
  }
}
//注册、重置密码，发送验证码 1注册 2重置密码
function Sendcode(type) {
  
  var mobile = $("#mobile").val();
  var $bmsg = $(".b-msg");
  // var code = $("#code").val();
  
  if (mobile === '') {
    $bmsg.empty()
    $bmsg.html("请输入手机号").show().delay(2000).fadeOut()
    
  } else {
    
    $.ajax({
      url:AjaxUrl+'GetPhoneVerificationCode',
      type:'POST',
      dataType:'json',
      data:{
        "mobile":mobile,
        "type":type
      },
      success: function (data) {
        if(data.status === 'success'){
          settime();
          $bmsg.empty()
          $bmsg.html(data.Msg).show().delay(2000).fadeOut()
        }else{
          $bmsg.empty()
          $bmsg.html(data.Msg).show().delay(2000).fadeOut()
        }
      }
    })
    
  }
}

/*
 ****************************************localstorage存储登录状态*********************************
 */
function set(key,value){
  var curTime = new Date().getTime();
  localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
  
}
function get(key){
  var exp = 1000*60*60*24;
  var data = localStorage.getItem(key);
  if(data){
    var dataObj = JSON.parse(data);
    if (new Date().getTime() - dataObj.time>exp) {
      localStorage.clear();//信息已过期清楚缓存
    }else{
      return dataObj;
    }
  }
}

//写cookies方法
function setCookie(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + "; " + expires;
}
//读cookies方法
function getCookie(name)
{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
function delCookie(name)
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//获取用户登录缓存
var dataUser = get("loginData");
console.log(dataUser);
//手机号正则
var mPattern = /^1[34578]\d{9}$/;


//去掉两侧空格
function Trim(str)
{
  return str.replace(/(^\s*)|(\s*$)/g, "");
  
}

// 字符串长度截取
function cutstr(str, len) {
  // console.log(str.length);
  if(str.length*2<=len){
    return str
  }else {
    var temp,
      icount = 0,
      patrn = /[^\x00-\xff]/,
      strre = "";
    for (var i = 0; i < str.length; i++) {
      if (icount < len - 1) {
        temp = str.substr(i, 1);
        if (patrn.exec(temp) == null) {
          icount = icount + 1
        } else {
          icount = icount + 2
        }
        strre += temp
      } else {
        break;
      }
    }
    return strre + "..."
  }
}
