/* Ссылка malloc.ru */
document.getElementById('malloc.ru').onclick=function(){window.open('https://malloc.ru', '_self');};

/* Статьи */
document.getElementById('Blog').onclick=function(){window.open('blog.html', '_self');};
/* Cоцсети */
document.getElementById('Social-networks').onclick=function(){window.open('social-networks.html', '_self');};
/* Донат */
document.getElementById('Charity').onclick=function(){window.open('donat.html', '_self');};

/* Footer desktop*/
document.getElementById('Donat-footer-d').onclick=function(){window.open('https://www.donationalerts.com/c/malloc', '_blank');};
document.getElementById('Telegram-footer-d').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-d').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('GitHub-footer-d').onclick=function(){window.open('https://github.com/code-malloc', '_blank');};
document.getElementById('Topmail-footer-d').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-d').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};

/* Footer mobile*/
document.getElementById('Donat-footer-m').onclick=function(){window.open('https://www.donationalerts.com/c/malloc', '_blank');};
document.getElementById('Telegram-footer-m').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer-m').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
document.getElementById('GitHub-footer-m').onclick=function(){window.open('https://github.com/code-malloc', '_blank');};
document.getElementById('Topmail-footer-m').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
document.getElementById('Payeer-footer-m').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};
/* null */
/* 	document.getElementById('#null').onclick=function(){window.open('null', '_blank');};
*/

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

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Rating Mail.ru counter */
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3211268", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "topmailru-code");

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* Редирект - перенаправление на страницу malloc.ru/index.html */
//	location.replace("https://malloc.ru");
//	document.location.replace("https://malloc.ru");

/* sidebar */
var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");
function malloc_open() {if (mySidebar.style.display === 'block') {mySidebar.style.display = 'none';overlayBg.style.display = "none";} else {mySidebar.style.display = 'block';overlayBg.style.display = "block";}}
function malloc_close() {mySidebar.style.display = "none";overlayBg.style.display = "none";}
