(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"09TT":function(e,t,a){},"93Eu":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var l=a("IRj2"),n=a("FdF9"),r=a("LbRr"),i=a("W/9C");a("09TT"),a("93Eu");t.a=function(e){var t=e.children,a=l.data;return n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{id:"site-container",className:"site-container antialiased"},n.default.createElement(r.a,{siteTitle:a.site.siteMetadata.title}),n.default.createElement("div",{className:"container-box",style:{margin:"0 auto",maxWidth:960}},n.default.createElement("main",null,t)),n.default.createElement(i.a,null)))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Inferno\'s Blog"}}}}')},JMMV:function(e,t,a){"use strict";var l=a("FdF9"),n=a("Wbzz"),r=a("9eSz"),i=a.n(r),d=a("18Ly");t.a=function(e){return l.default.createElement("div",{className:"card-class border mt-1 mb-1 rounded-lg overflow-hidden shadow"},l.default.createElement(n.Link,{to:e.to,style:{display:"flex",flexDirection:"row",height:"100%"}},l.default.createElement(i.a,{className:"blog-thumbnail",fluid:e.image}),l.default.createElement("div",{className:"card-text",style:{display:"flex",flexDirection:"column",alignSelf:"center"}},l.default.createElement("h4",{className:"card-title font-semibold"},e.title),l.default.createElement("h6",{className:"card-date"},Object(d.a)(e.date)))))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var l=a("FdF9"),n=a("Bl7J"),r=a("vrFN"),i=a("Wbzz"),d=a("JMMV"),c="1485917590";t.default=function(e){var t=e.data;return l.default.createElement(n.a,null,l.default.createElement(r.a,{title:"Home"}),l.default.createElement("div",{className:"latestBlogPosts"},t.allMdx.edges.map((function(e){return l.default.createElement(d.a,{key:e.node.id,to:e.node.frontmatter.path,title:e.node.frontmatter.title,image:e.node.frontmatter.thumbnail.childImageSharp.fluid,date:e.node.frontmatter.date})}))),l.default.createElement("div",{className:"info-nav text-primary"},l.default.createElement(i.Link,{to:"/tags",className:"link"},"All tags")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-37de4e14c53daaddd473.js.map