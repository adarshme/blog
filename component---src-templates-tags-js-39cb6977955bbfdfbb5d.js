(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"93Eu":function(e,t,a){},JMMV:function(e,t,a){"use strict";var l=a("FdF9"),n=a("Wbzz"),r=a("9eSz"),d=a.n(r),i=a("18Ly");t.a=function(e){return l.default.createElement("div",{className:"card-class border mt-1 mb-1 rounded-lg overflow-hidden shadow"},l.default.createElement(n.Link,{to:e.to,style:{display:"flex",flexDirection:"row",height:"100%"}},l.default.createElement(d.a,{className:"blog-thumbnail",fluid:e.image}),l.default.createElement("div",{className:"card-text",style:{display:"flex",flexDirection:"column",alignSelf:"center"}},l.default.createElement("h4",{className:"card-title font-semibold"},e.title),l.default.createElement("h6",{className:"card-date"},Object(i.a)(e.date)))))}},MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var l=a("FdF9"),n=a("vrFN"),r=a("Wbzz"),d=a("JMMV"),i=a("LbRr"),c=a("W/9C");a("93Eu");t.default=function(e){var t=e.pageContext,a=e.data,s=t.tag,m=a.allMdx,u=m.edges,o=m.totalCount,f=o+" post"+(1===o?"":"s")+' tagged with "'+s+'"';return l.default.createElement(l.default.Fragment,null,l.default.createElement(n.a,{title:"Tag - "+s}),l.default.createElement("div",{className:"tag-blogs-container"},l.default.createElement(i.a,{siteTitle:a.site.siteMetadata.title}),l.default.createElement("div",{className:"container-box",style:{margin:"0 auto",maxWidth:960}},l.default.createElement("div",{className:"latestBlogPosts"},u.map((function(e){var t=e.node;return l.default.createElement(d.a,{key:t.id,to:t.frontmatter.path,title:t.frontmatter.title,image:t.frontmatter.thumbnail.childImageSharp.fluid,date:t.frontmatter.date})})))),l.default.createElement("div",{className:"info-nav text-primary"},l.default.createElement("h1",null,f),l.default.createElement(r.Link,{to:"/",className:"link"},"Home"),l.default.createElement(r.Link,{to:"/tags/",className:"link"},"All tags")),l.default.createElement(c.a,null)))};var s="181834466"}}]);
//# sourceMappingURL=component---src-templates-tags-js-39cb6977955bbfdfbb5d.js.map