(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(3),l=n.n(c),o=n(26),i=n(9),u=n(10),s=n(13),h=n(11),m=n(12),p=r.a.createContext(),b=p.Provider,d=p.Consumer,f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).apply(this,arguments))).state={location:{pathname:window.location.hash.slice(1),hash:window.location.hash},history:{push:function(e){window.location.hash=e}}},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state;window.addEventListener("hashchange",function(n){e.setState({location:Object(o.a)({},t,{hash:window.location.hash,pathname:window.location.hash.slice(1)||""})})})}},{key:"render",value:function(){return r.a.createElement(b,{value:this.state},this.props.children)}}]),t}(a.Component),O=n(65),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).apply(this,arguments))).state={},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,n=e.component,a=e.exact,c=void 0!==a&&a;return r.a.createElement(d,null,function(e){var a=O(t,[],{end:c}),l=e.location.pathname;return a.test(l)?r.a.createElement(n,e):null})}}]),t}(a.Component),v=n(7),E=n.n(v),y=(n(97),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,function(t){var n=e.props,a=n.to,c=void 0===a?"":a,l=n.children,o=t.history,i=E()({activeLink:t.location.pathname===c});return r.a.createElement("a",{className:i,style:{display:"inline-block",margin:"10px"},onClick:function(e){e.preventDefault(),o.push(c)}},l)})}}]),t}(a.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,function(t){return t.history.push(e.props.to),null})}}]),t}(a.Component),k=n(65),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,function(t){for(var n=t.location.pathname,a=e.props.children,r=0;r<a.length;r++){var c=a[r],l=c.props.path||"";if(k(l,[],{end:!1}).test(n))return c}return null})}}]),t}(a.Component),x=n(34),g=(a.Component,function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"userAdd")}}]),t}(a.Component)),A=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"userList")}}]),t}(a.Component),L=(n(99),n(163).a.Option),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={data:[{value:1,label:"name"},{value:13,label:"name"},{value:14,label:"name"},{value:15,label:"name"},{value:16,label:"name"}]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){}},{key:"render",value:function(){this.state.data.map(function(e){return r.a.createElement(L,{key:e.value},e.label)});return r.a.createElement("div",{className:"App"},"home",r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("ul",{style:{flex:"1"}},r.a.createElement("li",null,r.a.createElement(y,{to:"/home/userList"},"\u7528\u6237\u5217\u8868")),r.a.createElement("li",null," ",r.a.createElement(y,{to:"/home/userAdd"},"\u7528\u6237\u6dfb\u52a0")," ")),r.a.createElement("div",{style:{flex:"5"}},r.a.createElement(j,{path:"/home/userList",component:A}),r.a.createElement(j,{path:"/home/userAdd",component:g}))))}}]),t}(a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"App"},"detail")}}]),t}(a.Component),J=function(){return r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(y,{to:"/home"},"\u9996\u9875"),r.a.createElement(y,{to:"/detail"},"\u8be6\u60c5")),r.a.createElement(C,null,r.a.createElement(j,{path:"/home",component:N}),r.a.createElement(j,{path:"/detail",component:D}),r.a.createElement(w,{to:"/home"})))))};l.a.render(r.a.createElement(J,null),document.getElementById("root"))},92:function(e,t,n){e.exports=n(161)},97:function(e,t,n){},99:function(e,t,n){}},[[92,2,1]]]);
//# sourceMappingURL=main.dfbd66d3.chunk.js.map