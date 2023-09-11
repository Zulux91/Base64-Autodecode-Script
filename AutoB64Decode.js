// ==UserScript==
// @name        AutoBase64Decode
// @include     http://fora.snahp.*
// @include     https://fora.snahp.*
// @version      0.1
// @description  Autodecodes any Base64 text on a "code box" and show it as a link.
// @author       Zulux91
// @updateURL   https://github.com/Zulux91/Base64-Autodecode-Script/raw/master/AutoB64Decode.js
// @match        none
// @grant        none
// ==/UserScript==

//Introducing your run of the mill Base64 decode function
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

//Introducing your run of the mill empty var
var dale = '';

//Make sure there's a codebox
if(document.getElementsByTagName("code")) {
    //Found it? Go fetch it, boy!
    dale = document.getElementsByTagName("code");
    //Maybe there's more than one, make sure you grab the right one
    for(var i=0;i<dale.length;i++) {
        //If it looks like a Base64 link, it probably is
        if (dale[i].textContent.indexOf('https:') != 0 & dale[i].textContent.indexOf('http:') != 0 & dale[i].textContent.indexOf(' ') != 0) {
            //Put the codebox's text already decoded into this nice variable
            var mylink = b64_to_utf8(dale[i].textContent);
            //Give it some style and show me the money!
            dale[i].innerHTML = '<center> <b> DECODED LINK: </b> <br/> <a href="'+mylink+'" target="_blank">'+mylink+'</a> </center>';
        }
    }
}
