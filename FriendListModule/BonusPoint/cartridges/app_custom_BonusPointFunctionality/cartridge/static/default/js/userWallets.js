!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n){$(document).ready((function(){$("#minusPoint").click((function(e){$("#userWallet");e.preventDefault();var n=$("#bonusPoint").val(),o=$("#Bonusurl").val();return console.log(o),console.log(n),$.ajax({url:o,type:"POST",dataType:"json",data:{bonusPoint:n},success:function(e){console.log(e.success),e.success?(swal({title:"Bonus have been applied successfully",text:e.msg,icon:"success",button:"OK"}),window.location.href=""):swal({title:"Sorry",text:e.msg,icon:"warning",button:"OK"})},error:function(e){console.log(e)}}),!1}));var e=$("#storedPoints").text(),n=$("#bonusPoint").val(),o=e-n;if($("b").replaceWith(o),n>e&&(o<e&&alert("not allowed"),alert("Reedem points can not be greater than Wallet point")),console.log(o),console.log(n+"    "+e),$("#bonusPoint").val())console.log("heeeee");else{$("#bonusPoint").val();console.log("hello")}}))}]);