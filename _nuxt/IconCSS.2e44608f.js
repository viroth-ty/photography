import{d,ax as m,x,I as o,b as S,c as f,a2 as I,M as a,l as z}from"./entry.f5ae0e21.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;const s=l;m(n=>({"85f54cb8":a(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const _=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:I({width:a(c),height:a(c)})},null,4))}});const v=z(y,[["__scopeId","data-v-a58be67d"]]);export{v as default};
