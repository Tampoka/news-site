(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2341:function(e,t,n){"use strict";n.d(t,{y:function(){return v},C:function(){return x}});var i=n(2125),r=i.ZP.a.withConfig({displayName:"PostCardStyle__Card",componentId:"sc-1n9qmvk-0"})(["border-radius:6px;overflow:hidden;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);color:black;text-decoration:none;transition:all 0.2s;min-height:300px;&:hover{color:black;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);transform:translateY(-2px);}"]),o=i.ZP.figure.withConfig({displayName:"PostCardStyle__Figure",componentId:"sc-1n9qmvk-1"})(["margin:0;max-width:100%;position:relative;overflow:hidden;border-radius:6px 6px 0 0;"]),s=i.ZP.h3.withConfig({displayName:"PostCardStyle__Title",componentId:"sc-1n9qmvk-2"})(["margin:10px 20px;font-size:1.4rem;"]),a=i.ZP.div.withConfig({displayName:"PostCardStyle__Lead",componentId:"sc-1n9qmvk-3"})(["margin:0 20px 20px;& > *{margin:0 0 10px;}"]),c=n(1664),d=n.n(c),l=n(5675),p=n.n(l),h=n(5893),x=function(e){var t=e.post;return(0,h.jsx)(d(),{href:"/post/".concat(t._id),passHref:!0,children:(0,h.jsxs)(r,{children:[(0,h.jsx)(o,{children:(0,h.jsx)(p(),{alt:t.title,src:t.image,loading:"lazy",layout:"responsive",objectFit:"cover",objectPosition:"center",width:320,height:180,sizes:"(min-width: 1000px) 320px, 100vw"})}),(0,h.jsx)(s,{children:t.title}),(0,h.jsx)(a,{children:t.lead})]})})},m=i.ZP.h2.withConfig({displayName:"PostBodyStyle__Title",componentId:"sc-153py1s-0"})(["font-size:2.8rem;line-height:1.2;margin:10px 0 20px;@media (max-width:800px){font-size:1.8rem;margin:15px 0;}"]),f=i.ZP.figure.withConfig({displayName:"PostBodyStyle__Figure",componentId:"sc-153py1s-1"})(["margin:0 0 30px;max-width:100%;position:relative;overflow:hidden;border-radius:6px;@media (max-width:800px){margin-bottom:20px;}"]),g=i.ZP.div.withConfig({displayName:"PostBodyStyle__Content",componentId:"sc-153py1s-2"})(["overflow:hidden;.minText{max-height:100px;}font-size:1.25rem;line-height:1.4;max-width:800px;blockquote{background:hsl(171,50%,87%);padding:10px;}cite{display:flex;justify-content:right;}p:last-child{margin-bottom:0;}"]),u=i.ZP.footer.withConfig({displayName:"PostBodyStyle__Meta",componentId:"sc-153py1s-3"})(["color:",";& > *{margin-right:0.3em;}"],(function(e){return e.theme.colors.gray})),y=i.ZP.div.withConfig({displayName:"PostBodyStyle__ShowMore",componentId:"sc-153py1s-4"})(["{cursor:pointer;margin-bottom:10px;color:",";}"],(function(e){return e.theme.colors.blue})),j=i.ZP.nav.withConfig({displayName:"styles__Container",componentId:"sc-1k4es00-0"})(["& > *{margin-right:0.3em;}"]),_=function(e){var t=e.post;return(0,h.jsxs)(j,{children:[(0,h.jsx)(d(),{href:"/",children:(0,h.jsx)("a",{children:"\u30db\u30fc\u30e0"})}),(0,h.jsx)("span",{}),(0,h.jsx)(d(),{href:"/category/".concat(t.category),children:(0,h.jsx)("a",{children:t.category})})]})},w=n(7294),v=function(e){var t=e.post,n=(0,w.useState)(!1),i=n[0],r=n[1],o=i?"":"minText";return(0,h.jsxs)("div",{children:[(0,h.jsx)(_,{post:t}),(0,h.jsx)(m,{children:t.title}),(0,h.jsx)(f,{children:(0,h.jsx)(p(),{src:t.image,alt:t.title,loading:"lazy",layout:"responsive",objectFit:"cover",objectPosition:"center",width:960,height:340})}),(0,h.jsx)(g,{children:(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content},className:o})}),(0,h.jsx)(y,{onClick:function(){return r(!0)},children:i?"":"\u7d9a\u304d\u3092\u8aad\u3080"}),(0,h.jsxs)(u,{children:[(0,h.jsx)("span",{children:t.date}),(0,h.jsx)("span",{children:"\xb7"}),(0,h.jsx)(d(),{href:"/category/".concat(t.category),children:(0,h.jsx)("a",{children:t.category})}),(0,h.jsx)("span",{children:"\xb7"}),(0,h.jsx)("a",{href:t.source,target:"_blank",rel:"noopener noreferrer",children:"\u30bd\u30fc\u30b9"})]})]})}},1423:function(e,t,n){"use strict";n.d(t,{$:function(){return p}});var i=n(2125),r=i.ZP.div.withConfig({displayName:"styles__Grid",componentId:"sc-1o9pd99-0"})(['display:flex;flex-wrap:wrap;justify-content:space-between;&:after{content:"";flex:auto;}&:after,& > *{width:calc(33% - 10px);margin-bottom:20px;}@media (max-width:800px){&:after,& > *{width:100%;}']),o=i.ZP.h2.withConfig({displayName:"styles__Title",componentId:"sc-1o9pd99-1"})(["font-size:2.8rem;line-height:1.1;margin:10px 0 15px;@media (max-width:800px){font-size:2rem;}"]),s=i.ZP.a.withConfig({displayName:"styles__MoreLink",componentId:"sc-1o9pd99-2"})(["margin:-20px 0 30px;display:inline-block;vertical-align:top;"]),a=n(2341),c=n(1664),d=n.n(c),l=n(5893),p=function(e){var t=e.title,n=e.posts,i=e.isCompact,c=void 0!==i&&i;return(0,l.jsxs)("section",{children:[(0,l.jsx)(o,{children:t}),(0,l.jsx)(r,{children:n.map((function(e){return(0,l.jsx)(a.C,{post:e},e._id)}))}),c&&(0,l.jsx)(d(),{href:"/category/".concat(t),passHref:!0,children:(0,l.jsxs)(s,{children:["More in ",t]})})]})}},2210:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return d}});var i=n(9008),r=n.n(i),o=n(1423),s=n(5893),a=function(e){var t=e.posts,n=e.categories;return(0,s.jsx)(s.Fragment,{children:n.map((function(e){var n=t.filter((function(t){return t.category===e}));return(0,s.jsx)(o.$,{title:e,posts:n,isCompact:!0},e)}))})},c=!0;function d(e){var t=e.posts,n=e.categories;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:"Front page of the Internet"})}),(0,s.jsx)("main",{children:(0,s.jsx)(a,{posts:t,categories:n})})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2210)}])}},function(e){e.O(0,[675,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);