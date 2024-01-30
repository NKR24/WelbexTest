const f={context:void 0,registry:void 0};function q(e){f.context=e}function Z(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const z=(e,n)=>e===n,C={equals:z};let A=null,ee=Q;const y=1,m=2,F={owned:null,cleanups:null,context:null,owner:null};var u=null;let O=null,te=null,a=null,p=null,g=null,N=0;function ne(e,n){const t=a,s=u,i=e.length===0,l=n===void 0?s:n,r=i?F:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>b(()=>B(r)));u=r,a=null;try{return E(o,!0)}finally{a=t,u=s}}function se(e,n){n=n?Object.assign({},C,n):C;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),W(t,i));return[G.bind(t),s]}function v(e,n,t){const s=U(e,n,!1,y);H(s)}function D(e,n,t){t=t?Object.assign({},C,t):C;const s=U(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,H(s),G.bind(s)}function b(e){if(a===null)return e();const n=a;a=null;try{return e()}finally{a=n}}function ie(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function le(e,n){A||(A=Symbol("error")),u=U(void 0,void 0,!0),u.context={...u.context,[A]:[n]};try{return e()}catch(t){P(t)}finally{u=u.owner}}function be(e,n){const t=Symbol("context");return{id:t,Provider:ce(t),defaultValue:e}}function we(e){return u&&u.context&&u.context[e.id]!==void 0?u.context[e.id]:e.defaultValue}function oe(e){const n=D(e),t=D(()=>L(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}function G(){if(this.sources&&this.state)if(this.state===y)H(this);else{const e=p;p=null,E(()=>T(this),!1),p=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function W(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&E(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=O&&O.running;r&&O.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?p.push(l):g.push(l),l.observers&&X(l)),r||(l.state=y)}if(p.length>1e6)throw p=[],new Error},!1)),n}function H(e){if(!e.fn)return;B(e);const n=N;re(e,e.value,n)}function re(e,n,t){let s;const i=u,l=a;a=u=e;try{s=e.fn(n)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=t+1,P(r)}finally{a=l,u=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?W(e,s):e.value=s,e.updatedAt=t)}function U(e,n,t,s=y,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:u,context:u?u.context:null,pure:t};return u===null||u!==F&&(u.owned?u.owned.push(l):u.owned=[l]),l}function K(e){if(e.state===0)return;if(e.state===m)return T(e);if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===y)H(e);else if(e.state===m){const s=p;p=null,E(()=>T(e,n[0]),!1),p=s}}function E(e,n){if(p)return e();let t=!1;n||(p=[]),g?t=!0:g=[],N++;try{const s=e();return fe(t),s}catch(s){t||(g=null),p=null,P(s)}}function fe(e){if(p&&(Q(p),p=null),e)return;const n=g;g=null,n.length&&E(()=>ee(n),!1)}function Q(e){for(let n=0;n<e.length;n++)K(e[n])}function T(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===y?s!==n&&(!s.updatedAt||s.updatedAt<N)&&K(s):i===m&&T(s,n)}}}function X(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=m,t.pure?p.push(t):g.push(t),t.observers&&X(t))}}function B(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)B(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function ue(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function M(e,n,t){try{for(const s of n)s(e)}catch(s){P(s,t&&t.owner||null)}}function P(e,n=u){const t=A&&n&&n.context&&n.context[A],s=ue(e);if(!t)throw s;g?g.push({fn(){M(s,t,n)},state:y}):M(s,t,n)}function L(e){if(typeof e=="function"&&!e.length)return L(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=L(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function ce(e,n){return function(s){let i;return v(()=>i=b(()=>(u.context={...u.context,[e]:s.value},oe(()=>s.children))),void 0),i}}let k=!1;function ae(){k=!0}function Ae(e,n){if(k&&f.context){const t=f.context;q(Z());const s=b(()=>e(n||{}));return q(t),s}return b(()=>e(n||{}))}let S;function Ee(e){let n;f.context&&f.load&&(n=f.load(f.context.id+f.context.count));const[t,s]=se(n,void 0);return S||(S=new Set),S.add(s),ie(()=>S.delete(s)),D(()=>{let i;if(i=t()){const l=e.fallback;return typeof l=="function"&&l.length?b(()=>l(i,()=>s())):l}return le(()=>e.children,s)},void 0,void 0)}function de(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,d=n[i-1].nextSibling,c=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const h=l<s?o?t[o-1].nextSibling:t[l-o]:d;for(;o<l;)e.insertBefore(t[o++],h)}else if(l===o)for(;r<i;)(!c||!c.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const h=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],h),n[i]=t[l]}else{if(!c){c=new Map;let x=o;for(;x<l;)c.set(t[x],x++)}const h=c.get(n[r]);if(h!=null)if(o<h&&h<l){let x=r,_=1,j;for(;++x<i&&x<l&&!((j=c.get(n[x]))==null||j!==h+_);)_++;if(_>h-o){const J=n[r];for(;o<h;)e.insertBefore(t[o++],J)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const Y="_$DX_DELEGATE";function he(e,n,t,s={}){let i;return ne(l=>{i=l,n===document?e():pe(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function Se(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=n?()=>b(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function Ce(e,n=window.document){const t=n[Y]||(n[Y]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ye))}}function me(e,n,t){f.context||(t==null?e.removeAttribute(n):e.setAttribute(n,t))}function ve(e,n){f.context||(n==null?e.removeAttribute("class"):e.className=n)}function pe(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return $(e,n,s,t);v(i=>$(e,n(),i,t),s)}function ge(e,n,t={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=i=>globalThis._$HY.r[i],f.has=i=>i in globalThis._$HY.r,f.gather=i=>V(n,i),f.registry=new Map,f.context={id:t.renderId||"",count:0},V(n,t.renderId);const s=he(e,n,[...n.childNodes],t);return f.context=null,s}function Te(e){let n,t;return!f.context||!(n=f.registry.get(t=xe()))?e():(f.completed&&f.completed.add(n),f.registry.delete(t),n)}function $e(e){let n=e,t=0,s=[];if(f.context)for(;n;){if(n.nodeType===8){const i=n.nodeValue;if(i==="$")t++;else if(i==="/"){if(t===0)return[n,s];t--}}s.push(n),n=n.nextSibling}return[n,s]}function ye(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),f.registry&&!f.done&&(f.done=_$HY.done=!0);t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function $(e,n,t,s,i){if(f.context){!t&&(t=[...e.childNodes]);let o=[];for(let d=0;d<t.length;d++){const c=t[d];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():o.push(c)}t=o}for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(f.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data!==n&&(o.data=n):o=document.createTextNode(n),t=w(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(f.context)return t;t=w(e,t,s)}else{if(l==="function")return v(()=>{let o=n();for(;typeof o=="function";)o=o();t=$(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],d=t&&Array.isArray(t);if(R(o,n,t,i))return v(()=>t=$(e,o,t,s,!0)),()=>t;if(f.context){if(!o.length)return t;if(s===void 0)return[...e.childNodes];let c=o[0],h=[c];for(;(c=c.nextSibling)!==s;)h.push(c);return t=h}if(o.length===0){if(t=w(e,t,s),r)return t}else d?t.length===0?I(e,o,s):de(e,t,o):(t&&w(e),I(e,o));t=o}else if(n.nodeType){if(f.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=w(e,t,s,n);w(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function R(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],d=t&&t[l],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=R(e,o,d)||i;else if(c==="function")if(s){for(;typeof o=="function";)o=o();i=R(e,Array.isArray(o)?o:[o],Array.isArray(d)?d:[d])||i}else e.push(o),i=!0;else{const h=String(o);d&&d.nodeType===3&&d.data===h?e.push(d):e.push(document.createTextNode(h))}}return i}function I(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function w(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const d=o.parentNode===e;!l&&!r?d?e.replaceChild(i,o):e.insertBefore(i,t):d&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}function V(e,n){const t=e.querySelectorAll("*[data-hk]");for(let s=0;s<t.length;s++){const i=t[s],l=i.getAttribute("data-hk");(!n||l.startsWith(n))&&!f.registry.has(l)&&f.registry.set(l,i)}}function xe(){const e=f.context;return`${e.id}${e.count++}`}const Ne=(...e)=>(ae(),ge(...e));export{Ee as E,v as a,ve as b,Ae as c,be as d,Ce as e,$e as f,Te as g,Ne as h,pe as i,me as s,Se as t,we as u};
