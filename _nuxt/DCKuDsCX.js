import{I as o,r as u,J as f,C as d,K as v,L as l,M as i,N as h,O as m}from"./B8uOfrRJ.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};
