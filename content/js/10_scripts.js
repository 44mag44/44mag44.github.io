/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
document.getElementById('a-1').onclick=function(){window.open('7-otzhimaniya-v-otkaz-programma.html', '_blank');};
document.getElementById('a-2').onclick=function(){window.open('8-tri-zolotykh-uprazhneniya-programma.html', '_blank');};
document.getElementById('a-3').onclick=function(){window.open('9-raspredeleniye-maksimal\'nogo-kolichestva-povtoreniy-na-podkhody.html', '_blank');};

/* last code article - GitHub */
document.getElementById('c-1').onclick=function(){window.open('https://github.com/code-malloc/7-file-1', '_blank');};
document.getElementById('c-2').onclick=function(){window.open('https://github.com/code-malloc/8-c', '_blank');};
document.getElementById('c-3').onclick=function(){window.open('https://github.com/code-malloc/9-c', '_blank');};

/* GitHub /*/
document.getElementById('lang-C').onclick=function(){window.open('https://github.com/code-malloc/10-c', '_blank');};
document.getElementById('lang-CPP').onclick=function(){window.open('https://github.com/code-malloc/10-cpp', '_blank');};

/* Footer desktop*/
document.getElementById('Donat-footer-d').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer-d').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer-d').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
document.getElementById('Telegram-footer-d').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-d').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('Topmail-footer-d').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-d').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};
/* Footer mobile*/
document.getElementById('Donat-footer-m').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer-m').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer-m').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
document.getElementById('Telegram-footer-m').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-m').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('Topmail-footer-m').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-m').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};

/* Payeer AD */
document.getElementById('AD-payeer').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* sidebar */
var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");
function malloc_open() {if (mySidebar.style.display === 'block') {mySidebar.style.display = 'none';overlayBg.style.display = "none";} else {mySidebar.style.display = 'block';overlayBg.style.display = "block";}}
function malloc_close() {mySidebar.style.display = "none";overlayBg.style.display = "none";}

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* date */
function date()
{
	var d = new Date();
	var day=new Array("Воскресенье","Понедельник","Вторник", "Среда","Четверг","Пятница","Суббота");
	var month=new Array("января","февраля","марта","апреля","мая","июня", "июля","августа","сентября","октября","ноября","декабря");
	return " " +day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()] + " " + d.getFullYear() + " ";
}
setInterval(function () {document.getElementById('mydate').innerHTML = date();}, 0);

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* time */		
function zero_first_format(value)		
{
	if (value < 10)
	{
		value='0'+value;
	}
	return value;
}
function time()
{
	var current_time = new Date();
	var hours = zero_first_format(current_time.getHours());
	var minutes = zero_first_format(current_time.getMinutes());
	var seconds = zero_first_format(current_time.getSeconds());
	return " "+hours+":"+minutes+":"+seconds+" ";
};
setInterval(function () {document.getElementById('mytime').innerHTML = time();});
