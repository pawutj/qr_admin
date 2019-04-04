(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1610:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t(20),l=t(23),i=t(21),m=t(22),c=t(0),o=t.n(c),u=t(92),d=t(1587),s=t(1378),h=t(93),E=t(94),f=s.object().shape({required:s.string().required("Required"),email:s.string().email("Invalid email").required("Required"),number:s.number().required("Required"),url:s.string().url().required("Required"),date:s.date().required("Required"),minlength:s.string().min(4,"Too Short!").required("Required"),maxlength:s.string().max(5,"Too Long!").required("Required")}),g=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement(h.a,null,"Form Validation"),o.a.createElement(E.a,null,o.a.createElement("p",null,"Form Validation example."),o.a.createElement("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"https://img.shields.io/github/stars/jaredpalmer/formik.svg?style=social",alt:"Stars"}),o.a.createElement("img",{src:"https://img.shields.io/npm/dm/formik.svg",alt:"Downloads"}))),o.a.createElement(u.kb,null,o.a.createElement(u.A,{sm:"12"},o.a.createElement(u.i,null,o.a.createElement(u.j,null,o.a.createElement(u.u,null,"Formik"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noopener noreferrer"},"Formik")," is designed to manage forms with complex validation with ease. Formik supports synchronous and asynchronous form-level and field-level validation. Furthermore, it comes with baked-in support for schema-based form-level validation through Yup."),o.a.createElement(d.c,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:f,onSubmit:function(e){console.log(e)}},function(e){var a=e.errors,t=e.touched;return o.a.createElement(d.b,null,o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"required"},"Required"),o.a.createElement(d.a,{name:"required",id:"required",className:"form-control ".concat(a.required&&t.required&&"is-invalid")}),a.required&&t.required?o.a.createElement("div",{className:"invalid-feedback"},a.required):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"email"},"Email"),o.a.createElement(d.a,{type:"email",name:"email",id:"email",className:"form-control ".concat(a.email&&t.email&&"is-invalid")}),a.email&&t.email?o.a.createElement("div",{className:"invalid-feedback"},a.email):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"url"},"Website URL"),o.a.createElement(d.a,{name:"url",id:"url",className:"form-control ".concat(a.url&&t.url&&"is-invalid")}),a.url&&t.url?o.a.createElement("div",{className:"invalid-feedback"},a.url):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"number"},"Number"),o.a.createElement(d.a,{name:"number",id:"number",className:"form-control ".concat(a.number&&t.number&&"is-invalid")}),a.number&&t.number?o.a.createElement("div",{className:"invalid-feedback"},a.number):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"date"},"Date"),o.a.createElement(d.a,{type:"date",name:"date",id:"date",className:"form-control ".concat(a.date&&t.date&&"is-invalid")}),a.date&&t.date?o.a.createElement("div",{className:"invalid-feedback"},a.date):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"minlength"},"Min Length (Minimum 4 Characters)"),o.a.createElement(d.a,{name:"minlength",id:"minlength",className:"form-control ".concat(a.minlength&&t.minlength&&"is-invalid")}),a.minlength&&t.minlength?o.a.createElement("div",{className:"invalid-feedback"},a.minlength):null),o.a.createElement(u.I,null,o.a.createElement(u.P,{for:"maxlength"},"Max Length (Maximum 5 Characters)"),o.a.createElement(d.a,{name:"maxlength",id:"maxlength",className:"form-control ".concat(a.maxlength&&t.maxlength&&"is-invalid")}),a.maxlength&&t.maxlength?o.a.createElement("div",{className:"invalid-feedback"},a.maxlength):null),o.a.createElement(u.e,{type:"submit"},"Submit"))}))))))}}]),a}(c.Component);a.default=g},93:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===a?"":" ".concat(a))},e.children)}},94:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){var a=e.className;return r.a.createElement("div",{className:"content-sub-header".concat(void 0===a?"":" ".concat(a))},e.children)}}}]);
//# sourceMappingURL=59.bd84d702.chunk.js.map