/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* myDonat */
document.getElementById('myDonat-sidebar').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
/* myDream */
document.getElementById('myDream-sidebar').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
/* myQuestion  */
document.getElementById('myQuestion-sidebar').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
/* Book link */
document.getElementById('Book-Ричард').onclick=function(){window.open('https://eksmo.ru/series/ballady-o-richarde-dlinnye-ruki-ID487/', '_blank');};
document.getElementById('Book-C').onclick=function(){window.open('https://www.labirint.ru/books/512950/', '_blank');};
document.getElementById('Book-Тоненбаума').onclick=function(){window.open('https://www.labirint.ru/search/%D0%AD%D0%BD%D0%B4%D1%80%D1%8E%20%D0%A2%D0%B0%D0%BD%D0%B5%D0%BD%D0%B1%D0%B0%D1%83%D0%BC/?stype=0&available=1&wait=1&preorder=1&paperbooks=1', '_blank');};
/* null */
/* 	document.getElementById('#null').onclick=function(){window.open('null', '_blank');};
*/
/* Cоцсети */
document.getElementById('Telegram-footer').onclick=function(){window.open('https://msngr.link/tg/malloc_ru', '_blank');};
document.getElementById('Youtube-footer').onclick=function(){window.open('https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw', '_blank');};
/* Donat */
document.getElementById('Donat-footer').onclick=function(){window.open('https://sobe.ru/na/qa', '_blank');};
document.getElementById('Dream-footer').onclick=function(){window.open('https://sobe.ru/na/na_me4tu_noutbuk_vmsi', '_blank');};
document.getElementById('Question-footer').onclick=function(){window.open('https://sobe.ru/na/vopros_q12x', '_blank');};
/* Top mail */
document.getElementById('Topmail-footer').onclick=function(){window.open('https://top.mail.ru/jump?from=3211268', '_blank');};
/* Payeer */
document.getElementById('Payeer-footer').onclick=function(){window.open('https://payeer.com/04184305', '_blank');};
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
// Rating Mail.ru counter
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3211268", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "topmailru-code");