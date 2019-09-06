(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(e,t,a){"use strict";var n=a(121),s=a.n(n),r=a(0),l=a.n(r);t.a=function(e){return e.queryResults.length>0&&l.a.createElement(s.a,null,e.queryResults.map(function(t){return"Telus"===t.source?l.a.createElement(s.a.Item,{key:t.id,action:!0,variant:"primary",onClick:function(){return e.handleClick(t)}},t.address):l.a.createElement(s.a.Item,{key:t.id,action:!0,variant:"secondary",onClick:function(){return e.handleClick(t)}},t.address)}))}},115:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(122),l=a.n(r);t.a=function(e){var t=e.addressContent;return 0===Object.keys(t).length&&t.constructor===Object?null:s.a.createElement("div",null,s.a.createElement("p",{className:"text-primary"},"Address content:"),s.a.createElement(l.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},s.a.createElement("tbody",null,Object.keys(t).map(function(e){return s.a.createElement(n.Fragment,{key:e},void 0!==t[e]&&null!==t[e]&&t[e].trim().length>0?"id"===e?s.a.createElement("tr",null,s.a.createElement("td",null,"LPDS ID"),s.a.createElement("td",null,s.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"/v1/query.html?lpds="+t[e]},t[e]))):s.a.createElement("tr",null,s.a.createElement("td",null,e),s.a.createElement("td",null,t[e])):null)}))))}},116:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(113),s=a.n(n),r=a(123),l=a.n(r),o=a(0),i=a.n(o);function c(e){var t=e.message;if(t.length>0){var a="info";return t.startsWith("ERROR")&&(a="warning"),i.a.createElement(s.a,{variant:a},t.startsWith("Loading...")&&i.a.createElement(l.a,{animation:"border",variant:"success",size:"sm"})," "+e.message)}return null}},117:function(e,t,a){"use strict";var n=a(37),s=a(38),r=a(40),l=a(39),o=a(41),i=a(0),c=a.n(i),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?c.a.createElement("div",{style:{margin:"2rem 0 0 0"}},c.a.createElement("h2",null,"Something went wrong."),c.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),c.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(i.Component);t.a=d},171:function(e,t,a){"use strict";a.r(t);var n=a(37),s=a(38),r=a(40),l=a(39),o=a(41),i=a(0),c=a.n(i),d=a(120),u=a.n(d),m=a(113),h=a.n(m),g=a(124),f=a.n(g),p=a(111),E=a.n(p),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault()},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{autoComplete:"off",onSubmit:this.handleSubmit},c.a.createElement(E.a.Group,null,c.a.createElement(E.a.Label,{className:"text-primary"},"Type in address:"),c.a.createElement(E.a.Control,{type:"text",onChange:this.props.handleChange,value:this.props.query,readOnly:this.props.loading,placeholder:"Enter a string to search"})))}}]),t}(i.Component),y=a(114),b=a(115),C=a(116),S=a(117),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){a.setState({query:e.target.value});var t=e.target.value.trim();t.length>parseInt("3")?a.searchAddress(t):a.setState({addressList:[],message:"",addressContent:{},loading:!1})},a.searchAddress=function(e){a.setState({addressList:[],message:"Loading...",addressContent:{},loading:!0});var t="/v1/resource/address?a=query&text="+encodeURI(e);u.a.get(t).then(function(e){if(console.log(e),200===e.status&&0!==e.data.responseData.numhits){var t="No. of results found: "+Math.abs(e.data.responseData.numhits)+", shown: "+e.data.responseData.hit.length+". Results from TELUS are in primary color.";a.setState({addressList:e.data.responseData.hit,message:t,addressContent:{}})}else a.setState({addressList:[],message:"Status-"+e.status+": No results found.",addressContent:{}});a.setState({loading:!1}),console.log(a.state.message)}).catch(function(e){console.log(e),a.setState({loading:!1,addressList:[],message:"ERROR occurred while searching.",addressContent:{}}),console.log(a.state.message)})},a.handleClick=function(e){a.setState({query:e.address}),a.setState({loading:!0,message:"Loading..."});var t="/v1/resource/address?a=getcontent&id="+encodeURI(e.id);u.a.get(t).then(function(e){if(console.log(e),200===e.status&&0!==e.data.responseData.numhits){var t=e.data.responseData.hit[0].payload;void 0!==t&&null!==t?a.setState({addressContent:t,message:"Address content found and shown below.",addressList:[]}):a.setState({addressContent:{},addressList:[],message:"ERROR - Address has no payload."})}else a.setState({addressContent:{},addressList:[],message:"Status-"+e.status+": No results found."});a.setState({loading:!1}),console.log(a.state.message)}).catch(function(e){console.log(e),a.setState({addressContent:{},addressList:[],message:"ERROR occurred while fectching address content."}),a.setState({loading:!1}),console.log(a.state.message)})},a.state={query:"",addressList:[],message:"",addressContent:{},loading:!1},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement(h.a,{variant:"primary"},c.a.createElement(h.a.Heading,null,"Project - ","Living Well Home Health"),"Here, a fixed setting of features is chosen.",c.a.createElement("hr",null),c.a.createElement("p",null,"Search will start after entering ","3"," non-blank characters.")),c.a.createElement(C.a,{message:this.state.message,loading:this.state.loading}),c.a.createElement(v,{handleChange:this.handleChange,query:this.state.query,loading:this.state.loading}),c.a.createElement(y.a,{queryResults:this.state.addressList,handleClick:this.handleClick}),c.a.createElement(b.a,{addressContent:this.state.addressContent}))}}]),t}(i.Component);t.default=function(){return c.a.createElement(S.a,null,c.a.createElement(O,null))}}}]);
//# sourceMappingURL=9.792e365a.chunk.js.map