import{createComponent as s}from"solid-js/web";import{createContext as n,useContext as f}from"solid-js";function p(t,o){if(t==null)throw new Error(o);return t}const l=n();n();const r=()=>p(f(l),"Make sure your app is wrapped in a <Router />"),m=()=>r().navigatorFactory(),g=()=>r().location;function v(t){const o=m(),u=g(),{href:e,state:c}=t,i=typeof e=="function"?e({navigate:o,location:u}):e;return o(i,{replace:!0,state:c}),null}$ROUTE_LAYOUTS;var a=(t=>(t.Home="/",t))(a||{});function C(){return s(v,{get href(){return a.Home}})}export{C as default};