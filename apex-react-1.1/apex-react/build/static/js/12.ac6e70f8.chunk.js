(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1556:function(e,t,a){"use strict";a.r(t);var r=a(19),o=a(20),n=a(23),i=a(21),c=a(22),s=a(0),l=a.n(s),u=a(92),p=a(866),d=a(95),h=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:f},l.a.createElement("div",{style:y},l.a.createElement("img",{src:"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code,width:"170",alt:"Card cap 01",className:"",style:m})),l.a.createElement("div",{style:g},l.a.createElement("p",null,"Name : ",this.props.data&&this.props.data.c_code," "),l.a.createElement("p",null,"URL : ",this.props.data&&this.props.data.c_data),l.a.createElement("p",null,"Created  : ",this.props.data&&this.props.data.d_create)),l.a.createElement("div",{style:v}),l.a.createElement("div",{style:b},l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(p.a,{to:{pathname:"/qrstat",state:{qr_id:this.props.data.qr_id}}},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(d.BarChart2,{size:20,strokeWidth:"1.3"}),l.a.createElement("div",{style:{marginLeft:20}},"Statisics"))))),l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement("a",{href:"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code,download:!0},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},l.a.createElement("div",{style:{color:"black",display:"flex"}},l.a.createElement(d.Download,{size:20,strokeWidth:"1.3",color:"#000"}),l.a.createElement("div",{style:{marginLeft:20}},"Download"))))),l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(p.a,{to:{pathname:"/qrstat",state:{qr_id:this.props.data.qr_id,t:!0}}},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(d.Users,{size:20,strokeWidth:"1.3"}),l.a.createElement("div",{style:{marginLeft:20}},"Who Scans !")))))))}}]),t}(s.Component),m={},f={width:"100%",background:"#F5F7FA",margin:5,display:"flex",flexDirection:"row"},y={},g={width:"50%",margin:15},v={width:"0%"},b={backgroundColor:"#F5F7FA",width:"15%",alignItems:"center",justifyContent:"center"},E=h,w=a(289),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(n.a)(this,Object(i.a)(t).call(this,e))).state={qr_list:[]},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;if("null"!=localStorage.getItem("user_id")&&"undefined"!=localStorage.getItem("user_id")){console.log(localStorage.getItem("user_id"));var t="https://yourqr.today/api/v1/report.qr_list?user_id="+localStorage.getItem("user_id");fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({qr_list:t.c_data}),console.log(e.state.qr_list)})}}},{key:"render",value:function(){return"null"==localStorage.getItem("user_id")||"undefined"==localStorage.getItem("user_id")||""==localStorage.getItem("user_id")||void 0==localStorage.getItem("user_id")?l.a.createElement(w.a,{to:{pathname:"../pages/login"}}):l.a.createElement(s.Fragment,null,l.a.createElement("div",{style:{margin:30}},l.a.createElement("h1",null,"QRCode Dashboard"),l.a.createElement("p",null,"\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e41\u0e2a\u0e14\u0e07\u0e1c\u0e25\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e41\u0e01\u0e19 QR Code \u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),l.a.createElement(p.a,{to:"/qrcreate"},l.a.createElement(u.e,{color:"warning"},"Create QR Code"))),this.state.qr_list.map(function(e){return l.a.createElement("div",{style:j},l.a.createElement(E,{data:e}))}))}}]),t}(s.Component),j={backgroundColor:"#F5F7FA"};t.default=_},289:function(e,t,a){"use strict";var r=a(0),o=a.n(r),n=a(1),i=a.n(n),c=a(142),s=a.n(c),l=a(10),u=a.n(l),p=a(172),d=a(173),h=a.n(d),m={},f=0,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,a=m[t]||(m[t]={});if(a[e])return a[e];var r=h.a.compile(e);return f<1e4&&(a[e]=r,f++),r}(e)(t,{pretty:!0})},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){u()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(p.b)(e.to),a=Object(p.b)(this.props.to);Object(p.c)(t,a)?s()(!1,"You tried to redirect to the same route you're currently on: \""+a.pathname+a.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,a=e.to;return t?"string"===typeof a?y(a,t.params):g({},a,{pathname:y(a.pathname,t.params)}):a},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,a=this.computeTo(this.props);t?e.push(a):e.replace(a)},t.prototype.render=function(){return null},t}(o.a.Component);v.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},v.defaultProps={push:!1},v.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var b=v;t.a=b}}]);
//# sourceMappingURL=12.ac6e70f8.chunk.js.map