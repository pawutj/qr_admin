(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1480:function(t,e,a){"use strict";a.r(e);var n=a(19),r=a(20),o=a(23),i=a(21),l=a(22),c=a(0),s=a.n(c),u=(a(128),a(92)),p=a(290),h=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(l)))).state={url:"",text:"",redirect:!1,path:"",texterror:""},a.urlChange=function(t){a.setState({url:t.target.value})},a.textChange=function(t){a.setState({text:t.target.value})},a.postData=function(){"".concat(a.state.text.length)<20?(console.log("AA"),fetch("https://yourqr.today/api/v1/qr.save",{method:"POST",headers:{uuid:localStorage.getItem("uuid")},body:JSON.stringify({c_data:a.state.url,c_text:a.state.text})}).then(function(t){return t.json()}).then(function(t){console.log(t),1==t.success&&a.setState({path:t.c_data})})):a.setState({texterror:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19\u0e01\u0e27\u0e48\u0e32 20 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23"})},a}return Object(l.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return"null"==localStorage.getItem("user_id")?s.a.createElement(p.a,{to:{pathname:"../pages/login"}}):this.state.redirect?s.a.createElement(p.a,{to:"../qr"}):s.a.createElement("div",null,s.a.createElement("div",{style:{marginTop:70,marginLeft:20}},s.a.createElement("h1",null,"Create QR Code"),s.a.createElement("p",null,"\u0e04\u0e38\u0e13\u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 QR Code \u0e17\u0e35\u0e48\u0e27\u0e31\u0e14\u0e1c\u0e25\u0e44\u0e14\u0e49 \u0e17\u0e35\u0e48\u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e44\u0e14\u0e49\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e17\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c, \u0e42\u0e1b\u0e23\u0e42\u0e21\u0e17\u0e40\u0e1e\u0e08, \u0e0a\u0e27\u0e19\u0e17\u0e33\u0e41\u0e1a\u0e1a\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21, \u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b \u0e41\u0e15\u0e48\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e40\u0e0a\u0e47\u0e04\u0e22\u0e2d\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e41\u0e01\u0e19\u0e44\u0e14\u0e49\u0e14\u0e49\u0e27\u0e22"),s.a.createElement("h5",null,s.a.createElement("b",null,s.a.createElement("font",{color:"#F29258"},"\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e23\u0e49\u0e32\u0e07 QR Code \u0e17\u0e35\u0e48\u0e27\u0e31\u0e14\u0e1c\u0e25\u0e44\u0e14\u0e49\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e44\u0e14\u0e49\u0e40\u0e25\u0e22!")))),s.a.createElement("div",{style:{display:"flex",marginTop:30},className:"phoneColumn"},s.a.createElement("div",{style:{backgroundColor:"white",marginLeft:"auto",marginRight:"auto",padding:20,marginTop:10},className:"createQRBox"},s.a.createElement("h5",null,s.a.createElement("b",null,"Input your destination link")),s.a.createElement("div",{style:{marginTop:40}},s.a.createElement("p",null,this.state.texterror),s.a.createElement("h5",null,s.a.createElement("b",null,"URL: ",s.a.createElement("font",{color:"#F29258"},"*")))),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},s.a.createElement(u.K,{type:"text",className:"form-control",value:this.state.url,onChange:this.urlChange,placeholder:"https://",required:!0})),s.a.createElement("div",{style:{marginTop:20}}),s.a.createElement("h5",null,s.a.createElement("b",null,"Text:")),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},s.a.createElement(u.K,{type:"text",className:"form-control",value:this.state.text,onChange:this.textChange,placeholder:"Text"})),s.a.createElement("div",{style:{marginTop:20}}),s.a.createElement(u.e,{type:"button",color:"warning",block:!0,onClick:this.postData},"Submit")),s.a.createElement("div",{style:{backgroundColor:"white",height:"50vh",marginLeft:"auto",marginRight:"auto",padding:20,marginTop:10},className:"createQRBox"},this.state.path&&s.a.createElement("img",{src:"https://yourqr.today/api/v1/qr.show/"+this.state.path,width:"250",style:{marginLeft:"auto",marginRight:"auto",display:"block"}}),this.state.path&&s.a.createElement("div",null,s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto"}},s.a.createElement("a",{href:"https://yourqr.today/api/v1/qr.show/"+this.state.path,download:"YourQR.png"},s.a.createElement(u.e,{type:"button",color:"warning",block:!0},"Download")))))),s.a.createElement("div",{style:{marginTop:50,marginLeft:20}},s.a.createElement("p",null,s.a.createElement("font",{color:"#F29258"},"\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 QR Code")),s.a.createElement("p",null,"1. URL \u0e40\u0e1b\u0e47\u0e19\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 QR Code \u0e40\u0e0a\u0e48\u0e19 \u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 http://www.9net.co.th, Line@ \u0e43\u0e0a\u0e49 https://line.me/ , \u0e41\u0e1a\u0e1a\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21 \u0e43\u0e0a\u0e49 https://docs.google.com/forms , \u0e42\u0e1b\u0e23\u0e42\u0e21\u0e17\u0e41\u0e2d\u0e1b\u0e1a\u0e19 Play Store \u0e43\u0e0a\u0e49 https://play.google.com/store/apps/details?id="),s.a.createElement("p",null,"2. Text \u0e43\u0e0a\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2a\u0e48 \u201c\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u201d \u0e25\u0e07\u0e44\u0e1b\u0e1a\u0e19 QR Code \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e27\u0e32\u0e21\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07 \u0e41\u0e25\u0e30\u0e08\u0e14\u0e08\u0e33\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22 \u0e0b\u0e36\u0e48\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e1b\u0e49\u0e2d\u0e19\u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e19 20 \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19")))}}]),e}(c.Component);e.default=h},290:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(143),c=a.n(l),s=a(10),u=a.n(s),p=a(173),h=a(174),m=a.n(h),d={},f=0,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,a=d[e]||(d[e]={});if(a[t])return a[t];var n=m.a.compile(t);return f<1e4&&(a[t]=n,f++),n}(t)(e,{pretty:!0})},y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};var b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){u()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(p.b)(t.to),a=Object(p.b)(this.props.to);Object(p.c)(e,a)?c()(!1,"You tried to redirect to the same route you're currently on: \""+a.pathname+a.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,a=t.to;return e?"string"===typeof a?g(a,e.params):y({},a,{pathname:g(a.pathname,e.params)}):a},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,a=this.computeTo(this.props);e?t.push(a):t.replace(a)},e.prototype.render=function(){return null},e}(r.a.Component);b.propTypes={computedMatch:i.a.object,push:i.a.bool,from:i.a.string,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired},b.defaultProps={push:!1},b.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired}).isRequired,staticContext:i.a.object}).isRequired};var v=b;e.a=v}}]);
//# sourceMappingURL=13.d33e65e7.chunk.js.map