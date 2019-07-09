(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1481:function(t,a,e){"use strict";e.r(a);var s=e(19),r=e(20),i=e(23),n=e(21),l=e(22),c=e(0),o=e.n(c),m=e(92),h=e(95),d=e(315),u=e(250),p=e(316),E=e(446),g=e(252),b=e(253),S=e(254),D=e(255),C=e(447),f=e(448),T=e(256),k=function(t){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(c.Fragment,null,o.a.createElement(m.kb,{className:"row-eq-height"},o.a.createElement(m.A,{sm:"12",md:"6",xl:"3"},o.a.createElement(p.a,{chartData:d.a.ChartistData,cardBgColor:"gradient-blackberry",statistics:"$2156",text:"Total Tax",iconSide:"right"},o.a.createElement(h.PieChart,{size:36,strokeWidth:"1.3",color:"#fff"}))),o.a.createElement(m.A,{sm:"12",md:"6",xl:"3"},o.a.createElement(p.a,{chartData:d.a.ChartistData,cardBgColor:"gradient-ibiza-sunset",statistics:"$1567",text:"Total Earning",iconSide:"right"},o.a.createElement(h.Box,{size:36,strokeWidth:"1.3",color:"#fff"}))),o.a.createElement(m.A,{sm:"12",md:"6",xl:"3"},o.a.createElement(p.a,{chartData:d.a.ChartistData,cardBgColor:"gradient-green-teal",statistics:"$4566",text:"Total Sales",iconSide:"right"},o.a.createElement(h.Filter,{size:36,strokeWidth:"1.3",color:"#fff"}))),o.a.createElement(m.A,{sm:"12",md:"6",xl:"3"},o.a.createElement(p.a,{chartData:d.a.ChartistData,cardBgColor:"gradient-pomegranate",statistics:"$4566",text:"Total Sales",iconSide:"right"},o.a.createElement(h.DollarSign,{size:36,strokeWidth:"1.3",color:"#fff"})))),o.a.createElement(m.kb,null,o.a.createElement(m.A,{sm:"12"},o.a.createElement(E.a,{productsSalesData:u.a.ProductsSalesData,cardTitle:"Products Sales",salesText:"Sales",visitText:"Visits"}))),o.a.createElement(m.kb,{className:"row-eq-height"},o.a.createElement(m.A,{sm:"12",md:"4"},o.a.createElement(g.a,{monthlySalesStatisticsBarChartData:u.a.MonthlySalesStatisticsBarChartData,cardTitle:"Statistics",cardSubTitle:"Last 6 Months Sales"})),o.a.createElement(m.A,{sm:"12",md:"8"},o.a.createElement(b.a,{shoppingCart:u.a.ShoppingCart,cardTitle:"Shopping Cart"}))),o.a.createElement(m.kb,{className:"row-eq-height"},o.a.createElement(m.A,{sm:"12",md:"8"},o.a.createElement(S.a,{visitSalesData:u.a.VisitSalesData,cardTitle:"Visit & Sales Statistics",salesText:"Sales",visitText:"Visits"})),o.a.createElement(m.A,{sm:"12",md:"4"},o.a.createElement(D.a,{weeklySalesStatisticsBarChartData:u.a.WeeklySalesStatisticsBarChartData,cardBgColor:"gradient-blackberry",cardTitle:"Statistics",statisticsAmount:"$ 78.89",statisticsRangeAmount:"Week2 +15.44"}))),o.a.createElement(m.kb,{className:"row-eq-height"},o.a.createElement(m.A,{sm:"12",md:"4"},o.a.createElement(T.a,{projectStatsDonutChartData:u.a.ProjectStatsDonutChartData,cardTitle:"Projects Stats",cardSubTitle:"Project Tasks"})),o.a.createElement(m.A,{sm:"12",md:"4"},o.a.createElement(f.a,{userListData:u.a.UserListData,cardTitle:"Users List"})),o.a.createElement(m.A,{sm:"12",md:"4"},o.a.createElement(C.a,{hobbiesStatisticsBarChartData:u.a.HobbiesStatisticsBarChartData,cardTitle:"Statistics",cardSubTitle:"Hobbies"}))))}}]),a}(c.Component);a.default=k},251:function(t,a,e){},315:function(t,a,e){"use strict";e.d(a,"a",function(){return s});var s={ChartistData:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13"],series:[[50,45,60,55,70,55,60,55,65,57,60,53,53]]},ChartistData2:{labels:["Jan","Feb","Mar","Apr","May","June","July","Aug"],series:[[55,60,50,55,50,60,55,57]]},DonutChartData1:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData2:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]},DonutChartData3:{series:[{name:"done",className:"ct-done",value:10},{name:"outstanding",className:"ct-outstanding",value:3}]}}},316:function(t,a,e){"use strict";var s=e(19),r=e(20),i=e(23),n=e(21),l=e(22),c=e(0),o=e.n(c),m=e(92),h=e(12),d=e.n(h),u=e(106),p=e.n(u),E=e(130),g=e.n(E),b=(e(107),e(251),function(t){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(l.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){var t,a,e;return"right"===this.props.iconSide?a=this.props.children:(t=this.props.children,e="text-right"),o.a.createElement(m.i,{className:d()(this.props.cardBgColor)},o.a.createElement(m.j,{className:"pt-2 pb-0"},o.a.createElement(m.U,null,t,o.a.createElement(m.U,{body:!0,className:d()("white",e)},o.a.createElement("h3",{className:d()("font-large-1 mb-1",this.props.statisticsColor)},this.props.statistics),o.a.createElement("span",null,this.props.text)),a)),o.a.createElement(p.a,{className:"WidgetlineChart WidgetlineChartshadow mb-2",data:this.props.chartData,type:"Line",options:{height:"75px",axisX:{showGrid:!0,showLabel:!1,offset:0},axisY:{showGrid:!1,low:40,showLabel:!1,offset:0},lineSmooth:g.a.Interpolation.cardinal({tension:0}),fullWidth:!0}}))}}]),a}(c.PureComponent));a.a=b}}]);
//# sourceMappingURL=14.5b522595.chunk.js.map