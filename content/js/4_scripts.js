/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/* предыдущая статья */
document.getElementById('article-3').onclick=function(){window.open('file:///home/mag/dev/lang/web/test/content/3_Linux%20-%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%D0%B0%D0%BC%D0%B8%20%D0%B8%20%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC%D0%B8.%20%D0%A7%D0%B0%D1%81%D1%82%D1%8C%20%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F.html', '_self');};
/* Руководство */
document.getElementById('Man').onclick=function(){window.open('https://www.gnu.org/software/coreutils/manual/coreutils.pdf', '_self');};
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
