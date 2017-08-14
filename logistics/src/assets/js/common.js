var common = 'http://172.16.3.212:98/';
var commenUrl = "http://172.16.9.122:90/App/"; //耐材通用接口
var compUrl = "http://172.16.9.122:90/CompanyApp/"; //耐材名录接口
/**
 * *********************************************************************
 */
//tab切换，加入首页和列表页产品弹出层用到了
function setTab(name, cursel, n) {

	for(i = 1; i <= n; i++) {

		// 声明
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con_" + name + "_" + i);
		var id = $(".hover").attr("id");

		// 操作
		// ar con1 = document.getElementById("con1_" + name + "_" + i);
		menu.className = i == cursel ? "hover" : "";
		con.style.display = i == cursel ? "block" : "none";
		// con1.style.display = i == cursel ? "block" : "none";

		// 判读
		if($(".hover").attr("id") == "join3") {

			$("#join").hide()

		} else {

			$("#join").show();

		}

	}

}
/**
 * *********************************************************************
 */
//密码可见性
$(function() {

	var textType = $("#password").attr("type");

	if(textType == "text") {

		$("#eye").attr("src", "images/ggyj_image@3x.png")

	} else {

		$("#eye").attr("src", "images/kanjian_image@3x.png")
	}

	$("#eye").click(function() {

		var textType = $("#password").attr("type");

		if(textType == "text") {

			$("#password").attr("type", "password");
			$("#eye").attr("src", "images/kanjian_image@3x.png")

		} else {

			$("#password").attr("type", "text")
			$("#eye").attr("src", "images/ggyj_image@3x.png")

		}

	});

})
/**
 * *********************************************************************
 */
//触发弹出层
function poup() {

	var height = $(window).height();
	var width = $(window).width();

	$(".popups-bak").css({
		"width": width,
		"height": height
	});
	$(".popups-bak").show();
	$(".popups").show();

}

function colse() {
	$(".popups-bak").hide();
	$(".popups").hide();
}

$("#colse").click(colse);
$(".popups-bak").click(colse);
/**
 * *********************************************************************
 */
//发送验证码
function sendCode() {
	var mobilvalue = $("#mobile").val();
	var vcode = mobilvalue + "(*^__^*)成联电商(*^__^*)";
	var vcode2 = md5(vcode).toUpperCase();

	if(mobilvalue == "") {

		$(".j-msg").html("请输入手机号").show().delay(2000).fadeOut("normal");

	} else {

		$.ajax({

			url: commenUrl + "GetVerifyCode2",
			type: 'POST',
			dataType: "json",
			data: {
				"mobile": mobilvalue,
				"vcode": vcode2
			},
			success: function(data) {

				if(data.ErrorCode == "1") {

					poup();

				} else if(data.status == "success") {

					settime();

				} else {

					$(".j-msg").html(data.Msg).show().delay(2000).fadeOut("normal");

				}

			},
			beforeSend: function() {
				$('send-code').attr('disabled', 'true')
			}

		});

	}

}
/**
 * *********************************************************************
 */
// 设置所有时间
function settimeAll() {

	var countdown = 60;
	var code3 = $("#send-code");

	function settime() {

		if(countdown == 0) {

			code3.attr("disabled", false);
			code3.val("获取验证码");
			code3.css("color", "#3da1f7");
			countdown = 60;
			return false;

		} else {

			$("#send-code").attr("disabled", true);
			code3.val(countdown + "s后重新发送");
			code3.css("color", "#ccc")
			countdown--;

		}
		setTimeout(function() {
			settime()
		}, 1000);

	}

}
/**
 * *********************************************************************
 */
//加入提交
function formSubmit() {

	// var dataUser = JSON.parse(sessionStorage.getItem("loginData")),
	// 	dataUser = dataUser.data[0],
	// 	compid = dataUser.id,
	// 	rcode = dataUser.rcode,
	var name = $("#name").val(),
		phone = $("#phone").val(),
		company = $("#company").val(),
		type = $(".hover").attr("data-num"),
		content = $("#content").val(),
		pattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;

	if(company == "") {

		$(".j-msg").html("请输入公司名称").show().delay(2000).fadeOut("normal");

	} else if(name == "") {

		$(".j-msg").html("请输入姓名").show().delay(2000).fadeOut("normal");

	} else if(phone == "") {

		$(".j-msg").html("请输入手机号码").show().delay(2000).fadeOut("normal");

	} else if(!(/^1[34578]\d{9}$/.test(phone))) {

		$(".j-msg").html("请填写正确的手机号").show().delay(2000).fadeOut("normal");

	} else {

		$.ajax({

			type: "post",
			url: compUrl + "Join",
			dataType: "json",
			data: {
				"name": name,
				"phone": phone,
				"company": company,
				"type": type,
				"content": content,
				"srcVal": "IOS"
			},
			success: function(data) {

				if(data.status == "success") {


					if(type==="1"|| type==="2"){
						formReset();
					}
					else{
						formReset();
						window.setTimeout("window.location='join-index.html'",500);

					}
					$(".j-msg").html(data.Msg).show().delay(2000).fadeOut("normal");
				}

			}

		});

	}

}
/**
 * *********************************************************************
 */
//表单重置
function formReset() {

	document.getElementById("join").reset();

}
