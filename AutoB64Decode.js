// ==UserScript==
// @name        AutoBase64Decode
// @include     http://forum.snahp.*
// @include     https://forum.snahp.*
// @version      0.1
// @description  Autodecodes any Base64 text on a "code" box.
// @author       Zulux91
// @match        none
// @grant        none
// ==/UserScript==

//Your ussual base64decode function.
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

//Create your run of the mill empty var
var dale = '';

//Make sure there's a codebox
if(document.getElementsByTagName("code")) {
    //Found it? Go fetch it, boy!
    dale = document.getElementsByTagName("code");
    //Maybe there's more than one, make sure you grab the right one.
    for(var i=0;i<dale.length;i++) {
        //If it looks like a link, it probably is
        if (dale[i].textContent.indexOf('aHR0') >= 0) {
            //Put the codebox's text already decoded into this nice variable.
            var mylink = b64_to_utf8(dale[i].textContent);
            //Give it some style and show me the money!
            dale[i].innerHTML = '<center> <a href="'+mylink+'">'+mylink+'</a> </center>';
        }
    }
}