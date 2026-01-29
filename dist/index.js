"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=n(function(k,q){
var y=require('@stdlib/blas-ext-base-sindex-of/dist').ndarray;function O(r,e,t,a,v){var i;return r<=0?-1:(v+=(r-1)*a,a*=-1,i=y(r,e,t,a,v),i<0||(i=r-1-i),i)}q.exports=O
});var f=n(function(w,d){
var p=require('@stdlib/strided-base-stride2offset/dist'),I=s();function j(r,e,t,a){return I(r,e,t,a,p(r,a))}d.exports=j
});var c=n(function(z,o){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=f(),R=s();m(x,"ndarray",R);o.exports=x
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,l=E(_(__dirname,"./native.js"));b(l)?u=g:u=l;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
