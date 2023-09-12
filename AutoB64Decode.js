// ==UserScript==
// @name        AutoBase64Decode
// @include     http://fora.snahp.*
// @include     https://fora.snahp.*
// @version      0.2
// @description  Autodecodes any Base64 text on a "code box" and show it as a link.
// @author       Zulux91, Kupie
// @updateURL   https://github.com/Kupie/Base64-Autodecode-Script/raw/master/AutoB64Decode.js
// @match        none
// @grant        none
// ==/UserScript==

//Introducing your run of the mill Base64 decode function
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
    console.log("Base64 decrypt called with this string");
    console.log(str);
}

//Introducing your run of the mill empty var
var dale = '';

console.log("DOING STUUUUUFFFFS");
//Make sure there's a codebox
if(document.getElementsByTagName("code")) {
    //Found it? Go fetch it, boy!
    dale = document.getElementsByTagName("code");
    //Maybe there's more than one, make sure you grab the right one
    for(var i=0;i<dale.length;i++) {
        //If it looks like a Base64 link, it probably is
        if (dale[i].textContent.indexOf('https:') != 0 & dale[i].textContent.indexOf('http:') != 0 & dale[i].textContent.indexOf(' ') != 0 & dale[i].textContent.includes("aHR0c")) {
            //Put the codebox's text already decoded into this nice variable
            try {
                var mylink = b64_to_utf8(dale[i].textContent);
                //Give it some style and show me the money!
                dale[i].innerHTML = '<center> <b> DECODED LINK: </b> <br/> <a href="'+mylink+'" target="_blank">'+mylink+'</a> </center>';
            } catch( ex ) {
                continue;
            }
        }
    }
}



//Also check for "hidebox unhide" class
if(document.getElementsByClassName("hidebox unhide")) {
    //Found it? Go fetch it, boy!
    dale = document.getElementsByClassName("hidebox unhide");
    //Maybe there's more than one, make sure you grab the right one
    for(i=0;i<dale.length;i++) {
        console.log(dale[i].textContent);
        //If it looks like a Base64 link, it probably is
        if (dale[i].textContent.indexOf('https:') != 0 & dale[i].textContent.indexOf('http:') != 0 & dale[i].textContent.indexOf(' ') != 0 & dale[i].textContent.includes("aHR0c")) {

            //Put the hidebox's text already decoded into this nice variable
            try {
                mylink = b64_to_utf8(dale[i].textContent);

                //Give it some style and show me the money!
                dale[i].innerHTML = '<center> <b> DECODED LINK: </b> <br/> <a href="'+mylink+'" target="_blank">'+mylink+'</a> </center>';
            } catch( ex ) {
                continue;
            }
        }
    }
}
