import{g as v,c as a,t as $,i as w,a as P,b as R,E as S,h as T}from"./web-7e027c56.js";import{W as b}from"./Wrapper-07606b81.js";const I="modulepreload",x=function(e){return"/_build/"+e},E={},_=function(n,t,i){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=x(r),r in E)return;E[r]=!0;const s=r.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!i)for(let c=o.length-1;c>=0;c--){const f=o[c];if(f.href===r&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":I,s||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),s)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})},g="Invariant Violation",{setPrototypeOf:A=function(e,n){return e.__proto__=n,e}}=Object;class h extends Error{framesToPop=1;name=g;constructor(n=g){super(typeof n=="number"?`${g}: ${n} (see https://github.com/apollographql/invariant-packages)`:n),A(this,h.prototype)}}function m(e,n){if(!e)throw new h(n)}const L=/^[A-Za-z]:\//;function k(e=""){return e&&e.replace(/\\/g,"/").replace(L,n=>n.toUpperCase())}const C=/^[/\\]{2}/,B=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,O=/^[A-Za-z]:$/,z=function(e){if(e.length===0)return".";e=k(e);const n=e.match(C),t=p(e),i=e[e.length-1]==="/";return e=U(e,!t),e.length===0?t?"/":i?"./":".":(i&&(e+="/"),O.test(e)&&(e+="/"),n?t?`//${e}`:`//./${e}`:t&&!p(e)?`/${e}`:e)},N=function(...e){if(e.length===0)return".";let n;for(const t of e)t&&t.length>0&&(n===void 0?n=t:n+=`/${t}`);return n===void 0?".":z(n.replace(/\/\/+/g,"/"))};function U(e,n){let t="",i=0,o=-1,r=0,s=null;for(let l=0;l<=e.length;++l){if(l<e.length)s=e[l];else{if(s==="/")break;s="/"}if(s==="/"){if(!(o===l-1||r===1))if(r===2){if(t.length<2||i!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const d=t.lastIndexOf("/");d===-1?(t="",i=0):(t=t.slice(0,d),i=t.length-1-t.lastIndexOf("/")),o=l,r=0;continue}else if(t.length>0){t="",i=0,o=l,r=0;continue}}n&&(t+=t.length>0?"/..":"..",i=2)}else t.length>0?t+=`/${e.slice(o+1,l)}`:t=e.slice(o+1,l),i=l-o-1;o=l,r=0}else s==="."&&r!==-1?++r:r=-1}return t}const p=function(e){return B.test(e)};function W(e){return`virtual:${e}`}function D(e){return e.handler?.endsWith(".html")?e.handler:`#vinxi/handler/${e.name}`}const V=new Proxy({},{get(e,n){return m(typeof n=="string","Bundler name should be a string"),{handler:W(D({name:n})),chunks:new Proxy({},{get(t,i){m(typeof i=="string","Chunk expected");let o=N("/_build",i+".js");return{import(){return _(()=>import(o),[])},output:{path:o}}}}),inputs:new Proxy({},{get(t,i){m(typeof i=="string","Input must be string");let o=window.manifest[i].output;return{async import(){return _(()=>import(o),[])},async assets(){return window.manifest[i].assets},output:{path:o}}}})}}});globalThis.MANIFEST=V;var j=$("<title>WELBEX");function q(){return[v(j),a(b,{})]}const H={};var M=$("<div>");function Z(){return(()=>{var e=v(M);return w(e,a(q,{})),P(()=>R(e,H.main)),e})()}function X(e){return null}function F(e){return a(S,{get fallback(){return a(X,{code:500})},get children(){return e.children}})}function G(e,n){return T(e,n)}function y(e){return e.children}function J(){return a(y,{get children(){return a(y,{get children(){return a(F,{get children(){return a(Z,{})}})}})}})}const K=document.getElementById("app");G(()=>a(J,{}),K);const ee=void 0;export{ee as default};
