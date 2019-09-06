(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{125:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=r(a(3)),d=r(a(0)),n=r(a(9));t.default=function(e){return d.default.forwardRef(function(t,a){return d.default.createElement("div",(0,l.default)({},t,{ref:a,className:(0,n.default)(t.className,e)}))})},e.exports=t.default},135:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=(0,r(a(42)).default)("card-deck");t.default=l,e.exports=t.default},136:function(e,t,a){"use strict";var r=a(17),l=a(1);t.__esModule=!0,t.default=void 0;var d=l(a(3)),n=l(a(6)),o=l(a(9)),u=r(a(0)),s=a(11),i=l(a(42)),f=l(a(125)),c=l(a(60)),m=l(a(137)),v=(0,f.default)("h5"),b=(0,f.default)("h6"),p=(0,i.default)("card-body"),E=u.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,l=e.bg,i=e.text,f=e.border,m=e.body,v=e.children,b=e.as,E=void 0===b?"div":b,x=(0,n.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,s.useBootstrapPrefix)(a,"card"),y=(0,u.useMemo)(function(){return{cardHeaderBsPrefix:h+"-header"}},[h]);return u.default.createElement(c.default.Provider,{value:y},u.default.createElement(E,(0,d.default)({ref:t},x,{className:(0,o.default)(r,h,l&&"bg-"+l,i&&"text-"+i,f&&"border-"+f)}),m?u.default.createElement(p,null,v):v))});E.displayName="Card",E.defaultProps={body:!1},E.Img=m.default,E.Title=(0,i.default)("card-title",{Component:v}),E.Subtitle=(0,i.default)("card-subtitle",{Component:b}),E.Body=p,E.Link=(0,i.default)("card-link",{Component:"a"}),E.Text=(0,i.default)("card-text",{Component:"p"}),E.Header=(0,i.default)("card-header"),E.Footer=(0,i.default)("card-footer"),E.ImgOverlay=(0,i.default)("card-img-overlay");var x=E;t.default=x,e.exports=t.default},137:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=r(a(3)),d=r(a(6)),n=r(a(9)),o=r(a(0)),u=a(11),s=o.default.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,i=e.as,f=void 0===i?"img":i,c=(0,d.default)(e,["bsPrefix","className","variant","as"]),m=(0,u.useBootstrapPrefix)(a,"card-img");return o.default.createElement(f,(0,l.default)({ref:t,className:(0,n.default)(s?m+"-"+s:m,r)},c))});s.displayName="CardImg",s.defaultProps={variant:null};var i=s;t.default=i,e.exports=t.default},138:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=r(a(3)),d=r(a(6)),n=r(a(0)),o=r(a(15)),u=r(a(10)),s={id:o.default.any,href:o.default.string,onClick:o.default.func,title:o.default.node.isRequired,disabled:o.default.bool,menuRole:o.default.string,rootCloseEvent:o.default.string,bsPrefix:o.default.string,variant:o.default.string,size:o.default.string},i=n.default.forwardRef(function(e,t){var a=e.title,r=e.children,o=e.bsPrefix,s=e.rootCloseEvent,i=e.variant,f=e.size,c=e.menuRole,m=e.disabled,v=e.href,b=e.id,p=(0,d.default)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","disabled","href","id"]);return n.default.createElement(u.default,(0,l.default)({ref:t},p),n.default.createElement(u.default.Toggle,{id:b,href:v,size:f,variant:i,disabled:m,childBsPrefix:o},a),n.default.createElement(u.default.Menu,{role:c,rootCloseEvent:s},r))});i.displayName="DropdownButton",i.propTypes=s;var f=i;t.default=f,e.exports=t.default},166:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});var r=a(0),l=a.n(r),d=a(136),n=a.n(d),o=a(135),u=a.n(o),s=a(138),i=a.n(s),f=a(10),c=a.n(f),m=a(16);function v(){return l.a.createElement(u.a,{style:{margin:"2rem"}},l.a.createElement(n.a,{border:"primary",style:{width:"18rem"},className:"text-center"},l.a.createElement(n.a.Body,null,l.a.createElement(n.a.Title,null,"Feature Exploration"),l.a.createElement(n.a.Text,null,"Explore search features of Address Management Services (AMS) REST API through responsive React JS UI."),l.a.createElement(i.a,{id:"dropdown-basic-button",variant:"secondary",title:"Pick a feature"},l.a.createElement(c.a.Item,{to:"/v1/showroom/feature-searchType",as:m.b},"Types of Full Text Queries"),l.a.createElement(c.a.Item,{to:"/v1/showroom/feature-maxResults",as:m.b},"Maximum Number of Results"),l.a.createElement(c.a.Item,{to:"/v1/showroom/feature-country",as:m.b},"International Addresses"),l.a.createElement(c.a.Item,{to:"/v1/showroom/feature-src",as:m.b},"Different Address Sources")))),l.a.createElement(n.a,{border:"primary",style:{width:"18rem"},className:"text-center"},l.a.createElement(n.a.Body,null,l.a.createElement(n.a.Title,null,"Project Customization"),l.a.createElement(n.a.Text,null,"Test and verify usages of AMS REST API in different projects."),l.a.createElement(i.a,{id:"dropdown-basic-button",variant:"secondary",title:"Pick a project"},l.a.createElement(c.a.Item,{to:"/v1/showroom/project-livingwell",as:m.b},"Living Well Home Health"),l.a.createElement(c.a.Item,{href:"#/action-2",disabled:!0},"Address API (Partner/Retail/WFM)"),l.a.createElement(c.a.Item,{href:"#/action-3",disabled:!0},"Something Cool")))))}}}]);
//# sourceMappingURL=8.d9706bb0.chunk.js.map