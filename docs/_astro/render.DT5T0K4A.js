import{T as p,C as V,U as D,x as I,z as g,o as c,n as R,k as L,q as f,V as O,y as Y,W as b,X as x,Y as C,Z as H,_ as M,i as $,v as j,j as m,A as k,$ as W,w as q,M as z}from"./template.BnzkykZH.js";import{a as P,r as A,h}from"./events.W3ztKWzt.js";const U=["touchstart","touchmove"];function X(t){return U.includes(t)}function G(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function Z(t,e){return N(t,e)}function J(t,e){p(),e.intro=e.intro??!1;const n=e.target,_=m,u=f;try{for(var r=V(n);r&&(r.nodeType!==8||r.data!==D);)r=I(r);if(!r)throw g;c(!0),R(r),L();const d=N(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==O)throw Y(),g;return c(!1),d}catch(d){if(d===g)return e.recover===!1&&b(),p(),x(n),c(!1),Z(t,e);throw d}finally{c(_),R(u)}}const i=new Map;function N(t,{target:e,anchor:n,props:_={},events:u,context:r,intro:d=!0}){p();var v=new Set,y=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!v.has(s)){v.add(s);var E=X(s);e.addEventListener(s,h,{passive:E});var T=i.get(s);T===void 0?(document.addEventListener(s,h,{passive:E}),i.set(s,1)):i.set(s,T+1)}}};y(C(P)),A.add(y);var l=void 0,S=H(()=>{var o=n??e.appendChild(M());return $(()=>{if(r){j({});var a=z;a.c=r}u&&(_.$$events=u),m&&k(o,null),l=t(o,_)||{},m&&(W.nodes_end=f),r&&q()}),()=>{for(var a of v){e.removeEventListener(a,h);var s=i.get(a);--s===0?(document.removeEventListener(a,h),i.delete(a)):i.set(a,s)}A.delete(y),w.delete(l),o!==n&&o.parentNode?.removeChild(o)}});return w.set(l,S),l}let w=new WeakMap;function K(t){const e=w.get(t);e&&e()}export{J as h,Z as m,G as s,K as u};