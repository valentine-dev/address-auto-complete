(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{115:function(e,t,a){"use strict";var n=a(123),s=a.n(n),r=a(0),o=a.n(r);t.a=function(e){return e.queryResults.length>0&&o.a.createElement(s.a,null,e.queryResults.map(function(t){return"TELUS"===t.source?o.a.createElement(s.a.Item,{key:t.id,action:!0,variant:"primary",onClick:function(){return e.handleClick(t)}},t.address):o.a.createElement(s.a.Item,{key:t.id,action:!0,variant:"secondary",onClick:function(){return e.handleClick(t)}},t.address)}))}},116:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(124),o=a.n(r);t.a=function(e){var t=e.addressContent;return 0===Object.keys(t).length&&t.constructor===Object?null:s.a.createElement("div",null,s.a.createElement("p",{className:"text-primary"},"Address content:"),s.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},s.a.createElement("tbody",null,Object.keys(t).map(function(e){return s.a.createElement(n.Fragment,{key:e},void 0!==t[e]&&null!==t[e]&&t[e].trim().length>0?"id"===e?s.a.createElement("tr",null,s.a.createElement("td",null,"LPDS ID"),s.a.createElement("td",null,s.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/v1/query.html?lpds="+t[e]},t[e]))):s.a.createElement("tr",null,s.a.createElement("td",null,e),s.a.createElement("td",null,t[e])):null)}))))}},117:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(118),s=a.n(n),r=a(125),o=a.n(r),l=a(0),i=a.n(l);function c(e){var t=e.message;if(t.length>0){var a="info";return t.startsWith("ERROR")&&(a="warning"),i.a.createElement(s.a,{variant:a},t.startsWith("Loading...")&&i.a.createElement(o.a,{animation:"border",variant:"success",size:"sm"})," "+e.message)}return null}},119:function(e,t,a){"use strict";var n=a(36),s=a(37),r=a(39),o=a(38),l=a(40),i=a(0),c=a.n(i),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?c.a.createElement("div",{style:{margin:"2rem 0 0 0"}},c.a.createElement("h2",null,"Something went wrong."),c.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),c.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(i.Component);t.a=d},172:function(e,t,a){"use strict";a.r(t);var n=a(36),s=a(37),r=a(39),o=a(38),l=a(40),i=a(0),c=a.n(i),d=a(122),u=a.n(d),m=a(126),h=a.n(m),g=a(113),f=a.n(g),p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault()},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,{autoComplete:"off",onSubmit:this.handleSubmit},c.a.createElement(f.a.Group,null,c.a.createElement(f.a.Label,{className:"text-primary"},"Type in address:"),c.a.createElement(f.a.Control,{type:"text",onChange:this.props.handleChange,value:this.props.query,readOnly:this.props.loading,placeholder:"Enter a string to search"})))}}]),t}(i.Component),E=a(115),v=a(116),y=a(117),b=a(119),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({query:e.target.value});var t=e.target.value.trim();t.length>0?a.searchAddress(t):a.setState({query:"",addressList:[],message:"",addressContent:{},loading:!1})},a.searchAddress=function(e){a.setState({addressList:[],message:"Loading...",addressContent:{},loading:!0});var t="/v1/resource/address?a=query&text="+encodeURI(e);u.a.get(t).then(function(e){if(console.log(e),200===e.status&&0!==e.data.responseData.numhits){var t="No. of results found: "+Math.abs(e.data.responseData.numhits)+", shown: "+e.data.responseData.hit.length+". Results from TELUS are in primary color.";a.setState({addressList:e.data.responseData.hit,message:t,addressContent:{}})}else a.setState({addressList:[],message:"Status-"+e.status+": No results found.",addressContent:{}});a.setState({loading:!1}),console.log(a.state.message)}).catch(function(e){console.log(e),a.setState({loading:!1,addressList:[],message:"ERROR occurred while searching.",addressContent:{}}),console.log(a.state.message)})},a.handleClick=function(e){a.setState({query:e.address}),a.setState({loading:!0,message:"Loading..."});var t="/v1/resource/address?a=getcontent&id="+encodeURI(e.id);u.a.get(t).then(function(e){if(console.log(e),200===e.status&&0!==e.data.responseData.numhits){var t=e.data.responseData.hit[0].payload;void 0!==t&&null!==t?a.setState({addressContent:t,message:"Address content found and shown below.",addressList:[]}):a.setState({addressContent:{},addressList:[],message:"ERROR - Address has no payload."})}else a.setState({addressContent:{},addressList:[],message:"Status-"+e.status+": No results found."});a.setState({loading:!1}),console.log(a.state.message)}).catch(function(e){console.log(e),a.setState({addressContent:{},addressList:[],message:"ERROR occurred while fectching address content."}),a.setState({loading:!1}),console.log(a.state.message)})},a.state={query:"",addressList:[],message:"",addressContent:{},loading:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{style:{margin:"2rem 0 0 0"}},c.a.createElement(y.a,{message:this.state.message,loading:this.state.loading}),c.a.createElement(p,{handleChange:this.handleChange,query:this.state.query,loading:this.state.loading}),c.a.createElement(E.a,{queryResults:this.state.addressList,handleClick:this.handleClick}),c.a.createElement(v.a,{addressContent:this.state.addressContent}))}}]),t}(i.Component);t.default=function(){return c.a.createElement(b.a,null,c.a.createElement(C,null))}}}]);
//# sourceMappingURL=8.34b0e7e4.chunk.js.map