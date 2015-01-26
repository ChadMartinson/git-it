!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.templates=e()}}(function(){var define,module,exports;
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.jade=e()}}(function(){return function e(n,t,r){function o(a,f){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!f&&s)return s(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=t[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){"use strict";function r(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(r).join(" ")}t.merge=function i(e,n){if(1===arguments.length){for(var t=e[0],o=1;o<e.length;o++)t=i(t,e[o]);return t}var a=e["class"],f=n["class"];(a||f)&&(a=a||[],f=f||[],Array.isArray(a)||(a=[a]),Array.isArray(f)||(f=[f]),e["class"]=a.concat(f).filter(r));for(var s in n)"class"!=s&&(e[s]=n[s]);return e},t.joinClasses=o,t.cls=function(e,n){for(var r=[],i=0;i<e.length;i++)r.push(n&&n[i]?t.escape(o([e[i]])):o(e[i]));var a=o(r);return a.length?' class="'+a+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,o){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var r=[],i=Object.keys(e);if(i.length)for(var a=0;a<i.length;++a){var f=i[a],s=e[f];"class"==f?(s=o(s))&&r.push(" "+f+'="'+s+'"'):r.push(t.attr(f,s,!1,n))}return r.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(n,t,r,o){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||o))throw n.message+=" on line "+r,n;try{o=o||e("fs").readFileSync(t,"utf8")}catch(i){a(n,null,r)}var f=3,s=o.split("\n"),u=Math.max(r-f,0),l=Math.min(s.length,r+f),f=s.slice(u,l).map(function(e,n){var t=n+u+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+r+"\n"+f+"\n\n"+n.message,n}},{fs:2}],2:[function(){},{}]},{},[1])(1)});return {"about": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"nav\"><h1>Git It</h1><ul><li> <a href=\"/\">HOME</a></li><li> <a href=\"#/about\">ABOUT</a></li></ul></div><h1>About SPA Routing</h1><p>There is really nothing on this page.  It only demonstrates navigation without page reload.</p>");;return buf.join("");
},"index": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"nav\"><h1>Git It</h1><ul><li> <a href=\"/\">HOME</a></li><li> <a href=\"#/about\">ABOUT</a></li></ul></div><h1>3rd Party API Web App</h1><p>Enter a single GitHub username below and click to display their profile info via JSON.</p><input type=\"text\" name=\"ghusername\" id=\"ghusername\" placeholder=\"GitHub username...\"/><br/><br/><button href=\"#\" id=\"ghsubmitbtn\">Pull User Data</button><div id=\"ghapidata\" class=\"clearfix\"></div>");;return buf.join("");
},"loader": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"loader\"><img src=\"img/loader.gif\" alt=\"loading...\"/></div>");;return buf.join("");
},"nav": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"nav\"><h1>Git It</h1><ul><li> <a href=\"/\">HOME</a></li><li> <a href=\"#/about\">ABOUT</a></li></ul></div>");;return buf.join("");
},"profile": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (avatar_url, followers, login, name, profile_url, public_repos) {
buf.push("<h2>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "<span class=\"smallname\"> ( @<a href='" + (jade.escape((jade_interp = profile_url) == null ? '' : jade_interp)) + "' target='_blank'>" + (jade.escape((jade_interp = login) == null ? '' : jade_interp)) + "</a> )</span></span></h2><div class=\"ghcontent\"><div class=\"avi\"><a href=\"html_url\" target=\"_blank\"><img" + (jade.attr("src", '' + (avatar_url) + '', true, false)) + " width=\"80\" height=\"80\"" + (jade.attr("alt", '' + (login) + '', true, false)) + "/></a></div><p>Followers: " + (jade.escape((jade_interp = followers) == null ? '' : jade_interp)) + " - Following: " + (jade.escape((jade_interp = followers) == null ? '' : jade_interp)) + "</p><br/><p>Repos: " + (jade.escape((jade_interp = public_repos) == null ? '' : jade_interp)) + "</p></div><div class=\"repolist clearfix\"><p><strong>Repos List:</strong></p></div>");}.call(this,"avatar_url" in locals_for_with?locals_for_with.avatar_url:typeof avatar_url!=="undefined"?avatar_url:undefined,"followers" in locals_for_with?locals_for_with.followers:typeof followers!=="undefined"?followers:undefined,"login" in locals_for_with?locals_for_with.login:typeof login!=="undefined"?login:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"profile_url" in locals_for_with?locals_for_with.profile_url:typeof profile_url!=="undefined"?profile_url:undefined,"public_repos" in locals_for_with?locals_for_with.public_repos:typeof public_repos!=="undefined"?public_repos:undefined));;return buf.join("");
},"repos": function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (html_url, name) {
buf.push("<li class=\"li-button\"><p class=\"selector\"><a" + (jade.attr("href", '' + (html_url) + '', true, false)) + " target=\"_blank\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</a></p></li>");}.call(this,"html_url" in locals_for_with?locals_for_with.html_url:typeof html_url!=="undefined"?html_url:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined));;return buf.join("");
}};
});