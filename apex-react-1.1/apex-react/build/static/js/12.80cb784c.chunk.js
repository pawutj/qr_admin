(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1556:function(t,e,r){"use strict";r.r(e);var a=r(19),o=r(20),n=r(23),i=r(21),c=r(22),s=r(0),l=r.n(s),u=r(92),p=r(866),d=function(t){function e(){return Object(a.a)(this,e),Object(n.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement("div",{style:m},l.a.createElement("div",{style:f},l.a.createElement("img",{src:"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code,width:"170",alt:"Card cap 01",className:"",style:h})),l.a.createElement("div",{style:y},l.a.createElement("p",null,"Name : ",this.props.data&&this.props.data.c_code," "),l.a.createElement("p",null,"URL : ",this.props.data&&this.props.data.c_data),l.a.createElement("p",null,"Created  : ",this.props.data&&this.props.data.d_create),l.a.createElement("p",null,"0 Scan")),l.a.createElement("div",{style:g}),l.a.createElement("div",{style:b},l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(p.a,{to:{pathname:"/qrstat",state:{qr_id:this.props.data.qr_id}}},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},"Statisics"))),l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement("a",{href:"https://yourqr.today/api/v1/qr.show/"+this.props.data.c_code,download:!0},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},l.a.createElement("div",{style:{color:"black"}},"Download")))),l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement(u.e,{outline:!0,color:"warning",block:!0},"Who Scans !"))))}}]),e}(s.Component),h={},m={width:"100%",background:"#F5F7FA",margin:5,display:"flex",flexDirection:"row"},f={},y={width:"50%",margin:15},g={width:"0%"},b={backgroundColor:"#F5F7FA",width:"15%",alignItems:"center",justifyContent:"center"},v=d,E=r(289),w=function(t){function e(t){var r;return Object(a.a)(this,e),(r=Object(n.a)(this,Object(i.a)(e).call(this,t))).state={qr_list:[]},r}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;if("null"!=localStorage.getItem("user_id")&&"undefined"!=localStorage.getItem("user_id")){console.log(localStorage.getItem("user_id"));var e="https://yourqr.today/api/v1/report.qr_list?user_id="+localStorage.getItem("user_id");fetch(e).then(function(t){return t.json()}).then(function(e){t.setState({qr_list:e.c_data}),console.log(t.state.qr_list)})}}},{key:"render",value:function(){return"null"==localStorage.getItem("user_id")||"undefined"==localStorage.getItem("user_id")||""==localStorage.getItem("user_id")||void 0==localStorage.getItem("user_id")?l.a.createElement(E.a,{to:{pathname:"../pages/login"}}):l.a.createElement(s.Fragment,null,l.a.createElement("div",{style:{margin:30}},l.a.createElement("h1",null,"QRCode Dashboard"),l.a.createElement(p.a,{to:"/qrcreate"},l.a.createElement(u.e,{color:"warning"},"Create QR Code"))),this.state.qr_list.map(function(t){return l.a.createElement("div",{style:_},l.a.createElement(v,{data:t}))}))}}]),e}(s.Component),_={backgroundColor:"#F5F7FA"};e.default=w},289:function(t,e,r){"use strict";var a=r(0),o=r.n(a),n=r(1),i=r.n(n),c=r(142),s=r.n(c),l=r(10),u=r.n(l),p=r(172),d=r(173),h=r.n(d),m={},f=0,y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,r=m[e]||(m[e]={});if(r[t])return r[t];var a=h.a.compile(t);return f<1e4&&(r[t]=a,f++),a}(t)(e,{pretty:!0})},g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t};var b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){u()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(p.b)(t.to),r=Object(p.b)(this.props.to);Object(p.c)(e,r)?s()(!1,"You tried to redirect to the same route you're currently on: \""+r.pathname+r.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,r=t.to;return e?"string"===typeof r?y(r,e.params):g({},r,{pathname:y(r.pathname,e.params)}):r},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,r=this.computeTo(this.props);e?t.push(r):t.replace(r)},e.prototype.render=function(){return null},e}(o.a.Component);b.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},b.defaultProps={push:!1},b.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var v=b;e.a=v}}]);
//# sourceMappingURL=12.80cb784c.chunk.js.map