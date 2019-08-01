(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1471:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(21),l=a(23),o=a(22),c=a(24),i=a(0),s=a.n(i),m=a(95),u=a(25),d=a(15),E=a(29),p=function(e){var t=e.active,a=e.children,r=e.onClick;return s.a.createElement("li",{className:"list-group-item list-group-item-action "+(t?"active":"")+" no-border-top-radius no-border-bottom-radius no-border px-2 py-1",onClick:r},a)},f=Object(d.connect)(function(e,t){return{active:t.filter===e.todoApp.todoVisibilityFilter}},function(e,t){return{onClick:function(){return e(Object(E.d)(t.filter))}}})(p),g=Object(d.connect)(function(e){return{id:e.todoApp.todo.length}})(function(e){var t,a,r,n,l,o,c,i,u=e.id,d=e.dispatch;return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.H,{onSubmit:function(e){e.preventDefault(),t.value.trim()&&a.value.trim()&&l.value.trim()&&(d(Object(E.a)(u,t.value,a.value,r.value,n.value,l.value,o.value,c.value,i.value)),t.value="",l.value="",a.value="",r.value="",n.value="",l.value="",o.value=!1,c.value="",i.value="")}},s.a.createElement(m.W,null,s.a.createElement(m.kb,null,s.a.createElement(m.A,{md:12},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"firstName"},"Title"),s.a.createElement("input",{className:"form-control",type:"text",name:"task",id:"task",ref:function(e){return a=e},required:!0}))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"fullName"},"Owner"),s.a.createElement("input",{className:"form-control",type:"text",name:"full_name",id:"fullName",ref:function(e){return t=e},required:!0}))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"lastName"},"Project"),s.a.createElement("select",{className:"form-control",type:"select",name:"project",id:"project",ref:function(e){return l=e},required:!0},s.a.createElement("option",{value:"Project A"},"Project A"),s.a.createElement("option",{value:"Project B"},"Project B")))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"start-date"},"Start Date"),s.a.createElement("input",{className:"form-control",type:"text",name:"start-date",id:"start-date",ref:function(e){return r=e}}))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"due-date"},"Due Date"),s.a.createElement("input",{className:"form-control",type:"text",name:"due-date",id:"due-date",ref:function(e){return n=e}}))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"priority"},"Priority"),s.a.createElement("input",{className:"form-control",type:"checkbox",name:"priority",id:"priority",ref:function(e){return o=e}}))),s.a.createElement(m.A,{md:6},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"tag"},"Tag"),s.a.createElement("select",{className:"form-control",type:"select",name:"tag",id:"tag",ref:function(e){return c=e},required:!0},s.a.createElement("option",{value:"uiux"},"UI/UX"),s.a.createElement("option",{value:"frontend"},"Frontend"),s.a.createElement("option",{value:"backend"},"Backend")))),s.a.createElement(m.A,{md:12},s.a.createElement(m.I,null,s.a.createElement(m.P,{for:"comments"},"Comments"),s.a.createElement("input",{className:"form-control",type:"comments",name:"comments",id:"comments",ref:function(e){return i=e}}))))),s.a.createElement(m.X,null,s.a.createElement(m.e,{color:"primary",type:"submit"},"Add Task"))))}),b=a(115),N=a.n(b),k=a(98),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={modal:!1},a.toggle=a.toggle.bind(Object(u.a)(Object(u.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return s.a.createElement("div",{className:"todo-app-sidebar float-left d-none d-xl-block"},s.a.createElement(N.a,null,s.a.createElement("div",{className:"todo-app-sidebar-content"},s.a.createElement("div",{className:"todo-app-menu"},s.a.createElement("div",{className:"form-group form-group-compose text-center"},s.a.createElement("button",{type:"button",className:"btn btn-raised btn-danger btn-block my-2 shadow-z-2",onClick:this.toggle},s.a.createElement(k.Plus,{size:18,className:"mr-1"})," Add Task")),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(f,{filter:E.g.SHOW_ALL},s.a.createElement(k.Users,{size:18,className:"mr-1"})," All")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Projects"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(f,{filter:E.g.PROJECT_A_TODO},s.a.createElement(k.Briefcase,{size:18,className:"mr-1"})," Project A"),s.a.createElement(f,{filter:E.g.PROJECT_B_TODO},s.a.createElement(k.Briefcase,{size:18,className:"mr-1"})," Project B")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Filters"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(f,{filter:E.g.STARRED_TODO},s.a.createElement(k.Star,{size:18,className:"mr-1"})," Starred"),s.a.createElement(f,{filter:E.g.PRIORITY_TODO},s.a.createElement(k.AlertCircle,{size:18,className:"mr-1"})," Priority"),s.a.createElement(f,{filter:E.g.COMPLETED_TODO},s.a.createElement(k.Check,{size:18,className:"mr-1"})," Done")),s.a.createElement("h6",{className:"text-muted font-small-3 text-bold-600 text-uppercase my-3"},"Tags"),s.a.createElement("ul",{className:"list-group list-group-messages"},s.a.createElement(f,{filter:E.g.UIUX_TODO,departmentValue:"UIUX"},s.a.createElement(k.Tag,{size:18,className:"mr-1 info"}),"UI/UX"),s.a.createElement(f,{filter:E.g.FRONTEND_TODO,departmentValue:"Frontend"},s.a.createElement(k.Tag,{size:18,className:"mr-1 warning"}),"Frontend"),s.a.createElement(f,{filter:E.g.BACKEND_TODO,departmentValue:"Backend"},s.a.createElement(k.Tag,{size:18,className:"mr-1 success"}),"Backend")))),s.a.createElement(m.V,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className,size:"md"},s.a.createElement(m.Y,{toggle:this.toggle},"Add Task"),s.a.createElement(g,null))))}}]),t}(s.a.Component),v=function(e){var t=e.value,a=e.onChange;return s.a.createElement("input",{type:"text",className:"form-control round",placeholder:"Search todo",onChange:function(e){return a(e.target.value)},defaultValue:t})},C=Object(d.connect)(function(e){return{value:e.todoApp.todoSearch}},function(e){return{onChange:function(t){return e(Object(E.f)(t))}}})(v),h=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"todo-search-box w-100 bg-white pt-4 px-2 pb-2"},s.a.createElement("div",{className:"media"},s.a.createElement("span",{className:"todo-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none"}),s.a.createElement("div",{className:"media-body"},s.a.createElement(C,null))))}}]),t}(s.a.Component),y=a(1),j=a.n(y),T=function(e){var t=e.onCheckboxChange,a=e.onTodoClick,r=e.onStarredClick,n=e.onPriorityClick,l=e.id,o=e.task,c=e.completed,i=e.image,u=e.project,d=e.starred,E=e.priority,p=e.tag,f=e.active;return s.a.createElement("li",{className:"list-group-item list-group-item-action no-border "+(f===l?"bg-grey bg-lighten-4":"")},s.a.createElement(m.kb,{className:"todo-list-group-item"},s.a.createElement(m.A,{xl:1,xs:1},s.a.createElement(m.P,{check:!0},s.a.createElement(m.C,{type:"checkbox",onChange:t,id:"exampleCustomCheckbox-"+l,defaultChecked:c}))),s.a.createElement(m.A,{xl:1,xs:1},s.a.createElement(k.Star,{size:20,onClick:r,style:{color:d?"#FFC107":"#495057"}}),s.a.createElement(k.AlertCircle,{size:20,onClick:n,style:{color:E?"#FF586B":"#495057"}})),s.a.createElement(m.A,{xl:10,xs:9,onClick:a},s.a.createElement("p",{className:"mb-0 text-truncate"},c?s.a.createElement("s",null,o):o,s.a.createElement("img",{src:i,className:"rounded-circle width-25 float-right d-none d-xl-block",alt:i})),s.a.createElement("p",{className:"mb-0 font-small-3"},u," ",s.a.createElement("span",{className:"float-right badge "+("uiux"===p?"badge-info":"")+("frontend"===p?"badge-warning":"")+("backend"===p?"badge-success":"")+" mr-1"},p)))))},A=function(e){var t=e.todo,a=e.active,r=e.toggleTodo,n=e.toggleStarredTodo,l=e.togglePriorityTodo,o=e.deleteTodo,c=e.todoDetails;return s.a.createElement("div",{className:"todo-app-list"},s.a.createElement(N.a,null,s.a.createElement("div",{id:"users-list"},s.a.createElement("ul",{className:"list-group"},t.map(function(e){return s.a.createElement(T,Object.assign({key:e.id,active:a},e,{onCheckboxChange:function(){return r(e.id)},onStarredClick:function(){return n(e.id)},onPriorityClick:function(){return l(e.id)},onDeleteClick:function(){return o(e.id)},onTodoClick:function(){return c(e.id)}}))})))))};A.prototype={todo:j.a.arrayOf(j.a.shape({id:j.a.number.isRequired,full_name:j.a.string.isRequired,image:j.a.string,task:j.a.string,start_date:j.a.number.isRequired,due_date:j.a.number.isRequired,project:j.a.string,priority:j.a.bool.isRequired,tag:j.a.bool.isRequired,comments:j.a.string,completed:j.a.bool.isRequired,starred:j.a.bool.isRequired,deleted:j.a.bool.isRequired}).isRequired).isRequired,toggleStarredTodo:j.a.func.isRequired,deleteTodo:j.a.func.isRequired,todoDetails:j.a.func.isRequired};var x=A,w=function(e,t,a){switch(t){case E.g.SHOW_ALL:return e.filter(function(e){return!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.PROJECT_A_TODO:return e.filter(function(e){return"Project A"===e.project&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.PROJECT_B_TODO:return e.filter(function(e){return"Project B"===e.project&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.STARRED_TODO:return e.filter(function(e){return e.starred&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.PRIORITY_TODO:return e.filter(function(e){return e.priority&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.COMPLETED_TODO:return e.filter(function(e){return e.completed&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.UIUX_TODO:return e.filter(function(e){return"uiux"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.FRONTEND_TODO:return e.filter(function(e){return"frontend"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});case E.g.BACKEND_TODO:return e.filter(function(e){return"backend"===e.tag&&!e.deleted&&e.task.toLocaleLowerCase().includes(a.toLocaleLowerCase())});default:throw new Error("Unknown filter: "+t)}},R=Object(d.connect)(function(e,t){return{todo:w(e.todoApp.todo,e.todoApp.todoVisibilityFilter,e.todoApp.todoSearch),active:e.todoApp.todoDetails}},function(e,t){return{toggleTodo:function(t){return e(Object(E.j)(t))},toggleStarredTodo:function(t){return e(Object(E.i)(t))},togglePriorityTodo:function(t){return e(Object(E.h)(t))},deleteTodo:function(t){return e(Object(E.b)(t))},todoDetails:function(t){return e(Object(E.e)(t))}}})(x),_=function(e){var t=e.selectedTodo,a=e.toggleStarredTodo,r=e.togglePriorityTodo,n=e.onEditClick,l=e.editTodoFlag,o=e.onChange;return s.a.createElement(i.Fragment,null,t?s.a.createElement("div",{className:"todo-app-content-detail"},s.a.createElement(m.kb,null,s.a.createElement(m.A,{className:""},s.a.createElement(k.Star,{size:20,className:"my-2 mx-1",onClick:function(){return a(t.id)},style:{color:t.starred?"#FFC107":"#495057"}}),s.a.createElement(k.AlertCircle,{size:20,className:"my-2 mx-1",onClick:function(){return r(t.id)},style:{color:t.priority?"#FF586B":"#495057"}})),s.a.createElement(m.A,{className:"text-right"},s.a.createElement(m.e,{className:"btn-outline-success mr-1 mt-1",size:"sm",onClick:n},l?s.a.createElement(k.Check,{size:16}):s.a.createElement(k.Edit2,{size:16})))),s.a.createElement(N.a,null,s.a.createElement(m.kb,null,s.a.createElement(m.A,null,l?s.a.createElement(m.K,{type:"text",name:"task",id:"task",defaultValue:t.task,onChange:function(e){return o(t.id,"task",e.target.value)}}):s.a.createElement("p",{className:"lead"},t.completed?s.a.createElement("s",null,t.task):t.task))),s.a.createElement(m.kb,{className:"mt-1"},s.a.createElement(m.A,null,s.a.createElement(m.kb,null,s.a.createElement(m.A,{sm:"3"},s.a.createElement(m.U,{object:!0,src:t.image,alt:"Generic placeholder image",className:"img-fluid rounded-circle width-25"})),s.a.createElement(m.A,{sm:"9",className:"text-truncate"},l?s.a.createElement(m.K,{type:"text",className:"w-80",name:"full_name",id:"full_name",defaultValue:t.full_name,onChange:function(e){return o(t.id,"full_name",e.target.value)}}):t.full_name))),s.a.createElement(m.A,null,s.a.createElement(m.kb,null,s.a.createElement(m.A,{sm:"3"},s.a.createElement(k.Calendar,{size:19})),s.a.createElement(m.A,{sm:"9",className:"text-truncate"},l?s.a.createElement(m.K,{type:"text",className:"w-80",name:"due_date",id:"due_date",defaultValue:t.due_date,onChange:function(e){return o(t.id,"due_date",e.target.value)}}):t.due_date)))),s.a.createElement("hr",{style:{border:"1px solid #e6ecf5"}}),s.a.createElement(m.kb,{className:"mb-2"},s.a.createElement(m.A,null,l?s.a.createElement(m.K,{type:"textarea",rows:"4",name:"comments",id:"comments",defaultValue:t.comments,onChange:function(e){return o(t.id,"comments",e.target.value)}}):t.comments)),s.a.createElement(m.kb,{className:"mt-1"},s.a.createElement(m.A,{sm:"1"},s.a.createElement(k.Briefcase,{size:20})),s.a.createElement(m.A,{sm:"5"},l?s.a.createElement(m.K,{type:"select",name:"project",id:"project",className:"w-80",defaultValue:t.project,onChange:function(e){return o(t.id,"project",e.target.value)}},s.a.createElement("option",{value:"Project A"},"Project A"),s.a.createElement("option",{value:"Project B"},"Project B")):t.project),s.a.createElement(m.A,{sm:"1"},s.a.createElement(k.Tag,{size:20})),s.a.createElement(m.A,{sm:"5"},l?s.a.createElement(m.K,{type:"select",name:"tag",id:"tag",className:"w-80",defaultValue:t.tag,onChange:function(e){return o(t.id,"tag",e.target.value)}},s.a.createElement("option",{value:"uiux"},"UI/UX"),s.a.createElement("option",{value:"frontend"},"Frontend"),s.a.createElement("option",{value:"backend"},"Backend")):t.tag)),s.a.createElement("hr",{style:{border:"1px solid #e6ecf5"}}),s.a.createElement(m.kb,null,s.a.createElement(m.A,null,s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," created task on"," ",t.start_date,"."),s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," added to ",t.project,"."),s.a.createElement("p",{className:"font-small-2 mb-0"},s.a.createElement("span",{className:"text-bold-400"},t.full_name)," added to ",t.tag,"."))))):s.a.createElement("div",{className:"row h-100"},s.a.createElement("div",{className:"col-sm-12 my-auto"},s.a.createElement("div",{className:"text-center"},s.a.createElement(k.CheckSquare,{size:84,color:"#ccc",className:"pb-3"}),s.a.createElement("h4",null,"Please select a todo to show details.")))))};_.prototype={selectedTodo:j.a.arrayOf(j.a.shape({id:j.a.number.isRequired,full_name:j.a.string.isRequired,image:j.a.string,task:j.a.string,start_date:j.a.number.isRequired,due_date:j.a.number.isRequired,project:j.a.string,priority:j.a.bool.isRequired,tag:j.a.bool.isRequired,comments:j.a.string,completed:j.a.bool.isRequired,starred:j.a.bool.isRequired,deleted:j.a.bool.isRequired}).isRequired).isRequired,starred:j.a.bool.isRequired,priority:j.a.bool.isRequired,toggleStarredTodo:j.a.func.isRequired,togglePriorityTodo:j.a.func.isRequired};var L=_,P=Object(d.connect)(function(e,t){return{selectedTodo:e.todoApp.todo[e.todoApp.todoDetails],editTodoFlag:e.todoApp.editTodo}},function(e){return{onEditClick:function(){return e(Object(E.c)())},onChange:function(t,a,r){return e(Object(E.k)(t,a,r))},toggleStarredTodo:function(t){return e(Object(E.i)(t))},togglePriorityTodo:function(t){return e(Object(E.h)(t))}}})(L),D=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:"todo-application"},s.a.createElement("div",{className:"content-overlay"}),s.a.createElement(O,null),s.a.createElement(m.kb,{className:"todo-app-content"},s.a.createElement("div",{className:"todo-app-content-area w-100"},s.a.createElement("div",{className:"todo-app-list-mails p-0"},s.a.createElement(h,null),s.a.createElement(R,null)),s.a.createElement("div",{className:"todo-app-mail-content d-none d-md-block"},s.a.createElement(P,null))))))}}]),t}(i.Component);t.default=D}}]);
//# sourceMappingURL=21.1f8bf9a0.chunk.js.map