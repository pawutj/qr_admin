(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1426:function(e,t,a){"use strict";a.r(t);var n=a(20),s=a(21),o=a(23),r=a(22),c=a(24),l=a(0),i=a.n(l),u=(a(118),a(95)),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={isChecked:!0,pass:"",redirect:!1,uuid:"",user_id:"",c_data:"",email:""},a.passwordChange=function(e){a.setState({password:e.target.value})},a.postData=function(e){console.log(a.state.password);var t=localStorage.getItem("uuid");console.log(t),fetch("https://yourqr.today/api/v1/user.nonce",{method:"POST",headers:new Headers,body:JSON.stringify({c_passwd:a.state.password})}).then(function(e){return e.json()}).then(function(e){0==e.success?a.setState({c_data:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01 Forgot password \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a OTP"}):a.setState(function(){return{c_data:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"}}),console.log(e)})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(){return{email:localStorage.getItem("email")}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:{height:"600px",width:"400px",marginTop:"70px",marginLeft:"20px"}},i.a.createElement("h1",null,"Profile"),i.a.createElement("h2",null,this.state.c_data),i.a.createElement(u.K,{className:"form-control",value:this.state.email,disabled:!0,style:{margin:"5px"}}),i.a.createElement(u.K,{className:"form-control",value:this.state.password,onChange:this.passwordChange,placeholder:"New Password",style:{margin:"5px"},required:!0}),i.a.createElement(u.e,{style:{margin:"5px"},type:"button",color:"warning",block:!0,onClick:this.postData},"Submit")))}}]),t}(l.Component);t.default=d}}]);
//# sourceMappingURL=11.7ae61578.chunk.js.map