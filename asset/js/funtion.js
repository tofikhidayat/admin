var myVar;

function onloadFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



function openright() {
	$("#right-side").addClass("normal");

}

function closeright() {
	
	$("#right-side").removeClass("normal");

}

function openleft() {
	$("#left-sider").removeClass("sedermini").addClass("sederfull");
	$(".left-title").removeClass("hide2").addClass("show2");
	$(".left-title1").removeClass("hide1").addClass("show1");
	$("#close_left").removeClass("hide").addClass("show");
	$("#show_left").removeClass("show").addClass("hide");
	$("#admin").removeClass("mini").addClass("full");
	$("#side-header").removeClass("sedermini1").addClass("sederfull1");
	$("#content-wrapper").removeClass("marginmini").addClass("marginfull");
	$("#footer").removeClass("footermini").addClass("footerfull");



}

function closeleft() {

	$("#left-sider").removeClass("sederfull").addClass("sedermini");
	$(".left-title").removeClass("show2").addClass("hide2");
	$(".left-title1").removeClass("show1").addClass("hide1");
	$("#show_left").removeClass("hide").addClass("show")
	$("#close_left").removeClass("show").addClass("hide");
	$("#admin").removeClass("full").addClass("mini");
	$("#side-header").removeClass("sederfull1").addClass("sedermini1");
	$("#content-wrapper").removeClass("marginfull").addClass("marginmini");
	$("#footer").addClass("footermini").removeClass("footerfull");


}
   


function devault() {
$(".bg_header").css("background-color", "#3C8DBC");
}
function red() {
$(".bg_header").css("background-color", "#E53935");
}
function green() {
$(".bg_header").css("background-color", "#43A047");
}
function blue() {
$(".bg_header").css("background-color", "#1E88E5");
}
function purple() {
$(".bg_header").css("background-color", "#9D12DE");
}
function orange() {
$(".bg_header").css("background-color", "#FB8C00");
}
function yellow() {
$(".bg_header").css("background-color", "#D4C900");
}
function lightred() {
$(".bg_header").css("background-color", "#FA1616");
}
function lightgreen() {
$(".bg_header").css("background-color", "#5DDE64");
}
function lightblue() {
$(".bg_header").css("background-color", "#5E99FF");
}
function lightpurple() {
$(".bg_header").css("background-color", "#CF4DFF");
}
function lightorange() {
$(".bg_header").css("background-color", "#FF8B4D");
}
function setting_hide() {
		$("#right-side").removeClass("normal").addClass("expand");
		$("#setting_hide").removeClass("setblock").addClass("setclose");
		$("#setting_show").addClass("setblock").removeClass("setclose");
	}
	function setting_show() {
		$("#right-side").removeClass("expand").addClass("normal");
		$("#setting_show").removeClass("setblock").addClass("setclose");
		$("#setting_hide").addClass("setblock").removeClass("setclose");
	}