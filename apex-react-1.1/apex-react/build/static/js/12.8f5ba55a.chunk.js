(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1481:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a(5),o=a(20),c=a(21),i=a(23),s=a(22),l=a(24),u=a(0),d=a.n(u),p=a(194),f=a(98),m=a(195),h=(a(118),{data:{labels:["2006","2007","2008","2009","2010","2011","2012"],datasets:[{label:"Series A",data:[65,59,80,81,56,55,40],backgroundColor:"rgba(255, 141, 96, 0.8)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{data:[28,48,40,19,86,27,90],label:"Series B",backgroundColor:"rgba(0, 157, 160, 0.8)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}]},options:{scaleShowVerticalLines:!0,responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{fixedStepSize:1,beginAtZero:!0}}]}}}),g={data:{labels:["Download Sales","In-Store Sales","Mail Sales"],datasets:[{data:[300,500,100],backgroundColor:["rgba(0, 157, 160, 0.8)","rgba(28, 188, 216, 0.8)","rgba(255, 141, 96, 0.8)"]}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1}},_=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,{height:400,data:this.props.data,options:h.options}))}}]),e}(u.Component),b=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.a,{height:400,data:this.props.data,options:h.options}))}}]),e}(u.Component),y=(u.Component,function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m.d,{height:400,data:this.props.data,options:g.options}))}}]),e}(u.Component)),v=a(95),E=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){console.log(this.props.data);var t=Array.from(this.props.data);return d.a.createElement("div",null,d.a.createElement("div",{style:{color:"#F29258",textAlign:"center",marginTop:"3%",marginBottom:"3%"}},d.a.createElement("h2",null,"Coming soon")),d.a.createElement(v.nb,null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Firstname"),d.a.createElement("th",null,"Lastname"),d.a.createElement("th",null,"Phone"),d.a.createElement("th",null,"Email"))),d.a.createElement("tbody",null,t.map(function(t){return d.a.createElement("tr",null,d.a.createElement("td",null,t.c_fname),d.a.createElement("td",null,t.c_lname),d.a.createElement("td",null,t.c_phone_no),d.a.createElement("td",null,t.c_email))}))))}}]),e}(u.Component),S=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){console.log(this.props.data);var t=Array.from(this.props.data);return t=t.length>10?t.slice(0,10):t,d.a.createElement("div",null,d.a.createElement("div",{style:{color:"#F29258",textAlign:"center",marginTop:"3%",marginBottom:"3%"}},d.a.createElement("h4",{style:{color:"#000000"}},"Lastest Scan")),d.a.createElement(v.nb,null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Time"))),d.a.createElement("tbody",null,t.map(function(t){return d.a.createElement("tr",null,d.a.createElement("td",null,t.d),d.a.createElement("td",null,t.t))}))))}}]),e}(u.Component),j=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){console.log(this.props.data);var t=Array.from(this.props.data);return d.a.createElement("div",null,d.a.createElement(v.nb,null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"Date"),d.a.createElement("th",null,"Time"),d.a.createElement("th",null,"State"),d.a.createElement("th",null,"SubState"))),d.a.createElement("tbody",null,t.map(function(t){return d.a.createElement("tr",null,d.a.createElement("td",null,t.date),d.a.createElement("td",null,t.time),d.a.createElement("td",null,t.state),d.a.createElement("td",null,t.suburb))}))))}}]),e}(u.Component),k=a(32),O=a(13),C=a.n(O),D=function(t){function e(t){var a;Object(o.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,t))).toggle=function(){a.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})},a.toggle_2=function(t){a.setState({activeTab:t},function(){return a.f_4()})},a.f_0=function(){var t='https://yourqr.today/api/v1/report.scan_table?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id;console.log(t),fetch(t).then(function(t){return t.json()}).then(function(t){console.log(t.c_data),a.setState(function(e){return{data_scan_table:t.c_data}})})},a.f_1=function(){var t='https://yourqr.today/api/v1/report.stat?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id;fetch(t).then(function(t){return t.json()}).then(function(t){for(var e=t.c_data.map(function(t){return t.c}),n=t.c_data.map(function(t){return t.d}),r=Array("7 Day"==a.state.bottomValue?7:30).fill().map(function(t,e){return e}).map(function(t){var e=new Date;return e.setTime(e.getTime()-86400*t*1e3),e}).map(function(t){return t.getFullYear()+"-"+a.pad(t.getMonth()+1)+"-"+a.pad(t.getDate())}),o={},c=0;c<e.length;c++)o[n[c]]=e[c];var i=r.map(function(t){return o[t]?o[t]:0}),s="7 Day"==a.state.bottomValue?Array(7).fill().map(function(t,e){return e}).map(function(t){return"rgba(255, 141, 96, ".concat(1-t/14,")")}):Array(30).fill().map(function(t,e){return e}).map(function(t){return"rgba(255, 141, 96, ".concat(1-t/42,")")}),l={labels:r.reverse(),datasets:[{label:"Total Scan",data:i.reverse(),backgroundColor:s.reverse(),borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}]};a.setState(function(t){return{data_1:l}})})},a.f_2=function(){var t='https://yourqr.today/api/v1/report.stat_2?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id;console.log(t),fetch(t).then(function(t){return t.json()}).then(function(t){for(var e=t.c_data.map(function(t){return t.c}),n=t.c_data.map(function(t){return t.d}),r=Array("7 Day"==a.state.bottomValue?7:30).fill().map(function(t,e){return e}).map(function(t){var e=new Date;return e.setTime(e.getTime()-86400*t*1e3),e}).map(function(t){return t.getFullYear()+"-"+a.pad(t.getMonth()+1)+"-"+a.pad(t.getDate())}),o={},c=0;c<e.length;c++)o[n[c]]=e[c];var i=r.map(function(t){return o[t]?o[t]:0}),s="7 Day"==a.state.bottomValue?Array(7).fill().map(function(t,e){return e}).map(function(t){return"rgba(255, 141, 96, ".concat(1-t/14,")")}):Array(30).fill().map(function(t,e){return e}).map(function(t){return"rgba(255, 141, 96, ".concat(1-t/42,")")}),l={labels:r.reverse(),datasets:[{label:"Unique Users",data:i.reverse(),backgroundColor:s.reverse(),borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}]};a.setState(function(t){return{data_2:l}}),console.log(a.state.data_2)})},a.f_5=function(){var t='https://yourqr.today/api/v1/report.stat_5?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id;console.log(t),fetch(t).then(function(t){return t.json()}).then(function(t){a.setState(function(e){return{data_5:t.c_data}})})},a.f_3=function(){var t='https://yourqr.today/api/v1/report.stat_3?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id;a.setState(function(t){return{location_table:[]}}),console.log(t),fetch(t).then(function(t){return t.json()}).then(function(t){return t.c_data}).then(function(t){return t.map(function(t){return Object(r.a)({},t,{c:JSON.parse(t.c).coords})})}).then(function(t){return t.map(function(t){var e="",r="";console.log(t.c.latitude,t.c.longitude);var o="https://eu1.locationiq.com/v1/reverse.php?key=1fda8199f89beb&lat=".concat(t.c.latitude,"&lon=").concat(t.c.longitude,"&format=json");fetch(o).then(function(t){return t.json()}).then(function(o){if(console.log(o),!o.error){e=o.address.state,r=o.address.suburb;var c={state:e,suburb:r,time:t.t,date:t.d};a.setState(function(t){return{location_table:[].concat(Object(n.a)(t.location_table),[c])}}),console.log(a.state.location_table)}})})})},a.f_4=function(){var t='https://yourqr.today/api/v1/report.stat_4?d_seen_start="'+a.state.d_start+'"&d_seen_end="'+a.state.d_end+'"&c_type=scan&qr_id='+a.props.location.state.qr_id+"&subtype="+a.state.activeTab;fetch(t).then(function(t){return t.json()}).then(function(t){var e=t.c_data.map(function(t){return t.c});return{labels:t.c_data.map(function(t){return t.d}),datasets:[{data:e,backgroundColor:["rgba(0, 157, 160, 0.8)","rgba(28, 188, 216, 0.8)","rgba(255, 141, 96, 0.8)"]}]}}).then(function(t){a.setState(function(e){return{data_4:t}})})},a.click_1=function(){a.setState(function(t){return{g1:!t.g1,g2:!1,g3:!1,g4:!1,g5:!1}},function(){a.f_1(),a.f_0()}),a.setState({status:"Total Scan"})},a.click_2=function(){a.setState(function(t){return{g2:!t.g2,g1:!1,g3:!1,g4:!1,g5:!1}},function(){return a.f_2()}),a.setState({status:"Unique Users"})},a.click_3=function(){a.setState(function(t){return{g3:!t.g3,g1:!1,g2:!1,g4:!1,g5:!1}},function(){1==a.state.g3&&a.f_3()}),a.setState({status:"Location"})},a.click_4=function(){a.setState(function(t){return{g4:!t.g4,g1:!1,g2:!1,g3:!1,g5:!1}},function(){return a.f_4()}),a.setState({status:"Browser & Platform & Devices "})},a.click_5=function(){a.setState(function(t){return{g5:!t.g5,g1:!1,g2:!1,g4:!1,g3:!1}},function(){return a.f_5()}),a.setState({status:"Identified Users"})},a.setValueBottom_1=function(t){a.setState(function(e){return{bottomValue:t}});var e=new Date,n=new Date;"7 Day"==t?n.setTime(n.getTime()-6048e5):"30 Day"==t&&n.setTime(n.getTime()-2592e6),e=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),n=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),a.setState(function(t){return{d_start:n,d_end:e}},function(){a.f_1(),a.f_2(),a.f_3(),a.f_4(),a.f_5()}),console.log(e,n)};var c=new Date,l=new Date;return l.setTime(l.getTime()-6048e5),c=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate(),l=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate(),a.state={g1:!1,g2:!1,g3:!1,g4:!1,g5:!1,location_table:[],data_1:{},data_3:{},data_4:{},data_5:{},data_scan_table:{},dropdownOpen:!1,bottomValue:"7 Day",d_start:l,d_end:c,activeTab:"1",c_1:0,c_2:0,c_5:0,c_4:"0 Devices",c_4_1:0,c_4_2:1,c_4_3:0,c_3:"0 Location",c_3_1:"0",status:"\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e41\u0e01\u0e19"},a}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.summary_1(),this.summary_2(),1==this.props.location.state.t&&this.click_5()}},{key:"summary_1",value:function(){var t=this,e="https://yourqr.today/api/v1/report.summary?qr_id="+this.props.location.state.qr_id;fetch(e).then(function(t){return t.json()}).then(function(e){if(0 in e.c_data){t.setState({c_1:e.c_data[0].c_1}),t.setState({c_2:e.c_data[0].c_2}),t.setState({c_4:e.c_data[0].c_4}),t.setState({c_4_1:e.c_data[0].c_4_1}),t.setState({c_4_2:e.c_data[0].c_4_2});var a=(e.c_data[0].c_4_1/e.c_data[0].c_4_2*100).toFixed(0);t.setState({c_4_3:a}),t.setState({c_5:e.c_data[0].c_5})}})}},{key:"trim",value:function(t){return t.length>12?"".concat(t.substring(0,12),"..."):t}},{key:"summary_2",value:function(){var t=this,e='https://yourqr.today/api/v1/report.stat_3?d_seen_start="'+this.state.d_start+'"&d_seen_end="'+this.state.d_end+'"&c_type=scan&qr_id='+this.props.location.state.qr_id;fetch(e).then(function(t){return t.json()}).then(function(e){t.setState(function(t){return{c_3_1:e.c_data.length}})})}},{key:"pad",value:function(t){return t<10?"0"+t.toString():t.toString()}},{key:"render",value:function(){var t=this;return"null"==localStorage.getItem("user_id")?d.a.createElement(k.a,{to:{pathname:"../pages/login"}}):d.a.createElement("div",null,d.a.createElement("div",{style:{marginTop:70,marginLeft:20}},d.a.createElement("h1",null,"Scan Statistics"),d.a.createElement("p",null,this.state.status)),d.a.createElement("div",{style:{marginLeft:20}},d.a.createElement(v.D,{isOpen:this.state.dropdownOpen,toggle:this.toggle},d.a.createElement(v.G,{caret:!0},this.state.bottomValue),d.a.createElement(v.F,null,d.a.createElement(v.E,{header:!0}),d.a.createElement(v.E,{onClick:function(){return t.setValueBottom_1("7 Day")}},"7 Day"),d.a.createElement(v.E,{onClick:function(){return t.setValueBottom_1("30 Day")}},"30 Day")))),d.a.createElement("div",{style:{marginLeft:20}},d.a.createElement("div",{style:q,className:"phoneColumn"},d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},onClick:this.click_1,className:"phoneWideStat"},d.a.createElement(p.a,{cardBgColor:this.state.g1?"gradient-orange-amber":"gradient-blackberry",statistics:this.state.c_1,text:"Total Scan",iconSide:"right"},d.a.createElement(f.BarChart,{size:56,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},onClick:this.click_2,className:"phoneWideStat"},d.a.createElement(p.a,{cardBgColor:this.state.g2?"gradient-orange-amber":"gradient-blackberry",statistics:this.state.c_2,text:"Unique Users",iconSide:"right"},d.a.createElement(f.UserX,{size:56,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},onClick:this.click_3,className:"phoneWideStat"},d.a.createElement(p.a,{cardBgColor:this.state.g3?"gradient-orange-amber":"gradient-blackberry",statistics:this.state.c_3_1,text:"Location",iconSide:"right"},d.a.createElement(f.MapPin,{size:56,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},onClick:this.click_4,className:"phoneWideStat"},d.a.createElement(p.a,{cardBgColor:this.state.g4?"gradient-orange-amber":"gradient-blackberry",statistics:this.state.c_4_3+" %",text:this.state.c_4,iconSide:"right"},d.a.createElement(f.Smartphone,{size:56,strokeWidth:"1.3",color:"#fff"}))),d.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto"},onClick:this.click_5,className:"phoneWideStat"},d.a.createElement(p.a,{cardBgColor:this.state.g5?"gradient-orange-amber":"gradient-blackberry",statistics:this.state.c_5,text:"Identified Users",iconSide:"right"},d.a.createElement(f.Users,{size:56,strokeWidth:"1.3",color:"#fff"}))))),d.a.createElement("div",null,this.state.g1&&d.a.createElement(_,{data:this.state.data_1}),this.state.g1&&d.a.createElement(S,{data:this.state.data_scan_table}),this.state.g2&&d.a.createElement(b,{data:this.state.data_2}),this.state.g3&&d.a.createElement(j,{data:this.state.location_table}),this.state.g4&&d.a.createElement("div",null,d.a.createElement(v.Z,{tabs:!0,className:"nav-border-bottom"},d.a.createElement(v.ab,null,d.a.createElement(v.bb,{className:C()({active:"1"===this.state.activeTab}),onClick:function(){t.toggle_2("1")}},d.a.createElement("b",null,"Browser"))),d.a.createElement(v.ab,null,d.a.createElement(v.bb,{className:C()({active:"2"===this.state.activeTab}),onClick:function(){t.toggle_2("2")}},d.a.createElement("b",null,"Platform"))),d.a.createElement(v.ab,null,d.a.createElement(v.bb,{className:C()({active:"3"===this.state.activeTab}),onClick:function(){t.toggle_2("3")}},d.a.createElement("b",null,"Device"))))),this.state.g4&&d.a.createElement(y,{data:this.state.data_4})),this.state.g5&&d.a.createElement(E,{data:this.state.data_5}))}}]),e}(u.Component),q={display:"flex"};e.default=D},194:function(t,e,a){"use strict";var n=a(20),r=a(21),o=a(23),c=a(22),i=a(24),s=a(0),l=a.n(s),u=a(95),d=a(13),p=a.n(d),f=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t,e,a;return"right"===this.props.iconSide?e=this.props.children:(t=this.props.children,a="text-right"),l.a.createElement(u.i,{className:p()(this.props.cardBgColor)},l.a.createElement(u.j,{className:"px-3 py-3"},l.a.createElement(u.U,null,t,l.a.createElement(u.U,{body:!0,className:p()("white",a)},l.a.createElement("h4",{className:p()("mb-1",this.props.statisticsColor)},this.props.statistics),l.a.createElement("div",{style:{lineHeight:.7}},l.a.createElement("span",null,this.props.text))),e)))}}]),e}(s.PureComponent);e.a=f},32:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o),i=a(140),s=a.n(i),l=a(11),u=a.n(l),d=a(31),p=a(170),f=a.n(p),m={},h=0,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===t?t:function(t){var e=t,a=m[e]||(m[e]={});if(a[t])return a[t];var n=f.a.compile(t);return h<1e4&&(a[t]=n,h++),n}(t)(e,{pretty:!0})},_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};var b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){u()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(d.b)(t.to),a=Object(d.b)(this.props.to);Object(d.c)(e,a)?s()(!1,"You tried to redirect to the same route you're currently on: \""+a.pathname+a.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,a=t.to;return e?"string"===typeof a?g(a,e.params):_({},a,{pathname:g(a.pathname,e.params)}):a},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,a=this.computeTo(this.props);e?t.push(a):t.replace(a)},e.prototype.render=function(){return null},e}(r.a.Component);b.propTypes={computedMatch:c.a.object,push:c.a.bool,from:c.a.string,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired},b.defaultProps={push:!1},b.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired}).isRequired,staticContext:c.a.object}).isRequired};var y=b;e.a=y}}]);
//# sourceMappingURL=12.8f5ba55a.chunk.js.map