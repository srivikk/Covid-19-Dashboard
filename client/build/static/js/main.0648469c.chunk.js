(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{175:function(e,a,t){e.exports=t(310)},177:function(e,a,t){},288:function(e,a,t){},289:function(e,a,t){},298:function(e,a,t){},299:function(e,a,t){},310:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=(t(177),t(10)),l=t(79),c=t.n(l),i=t(141),s=t(19),u=t(89),d=t.n(u),m=t(80),p=(t(288),function(e){var a=e.data;return console.log(a),r.a.createElement("div",{className:"chart"},r.a.createElement(m.a,{data:{labels:["TotalCases","TotalRecovered","TotalDeaths"],datasets:[{label:["Population"],data:[a[0].TotalCases,a[0].TotalRecovered,a[0].TotalDeaths],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},options:{legend:{display:!1},title:{display:!0,text:"Frequency of different cases"},responsiv:!1}}))}),g=(t(289),function(e){var a=e.data;return console.log("callingfrom bar "+JSON.stringify(a)),r.a.createElement("div",{className:"chart"},r.a.createElement(m.b,{data:{labels:["TotalCases","TotalRecovered","TotalDeaths"],datasets:[{label:["Population"],data:[a[0].TotalCases,a[0].TotalRecovered,a[0].TotalDeaths],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]},options:{}}))}),b=t(103),f=t(5),h=t(356),v=t(32),E=t(359),C=t(361),w=t(354),O=t(358),j=t(360),T=t(362),y=t(370),k=t(355),P=t(311),S=t(357),A=t(105),N=t.n(A),W=t(107),R=t.n(W),x=t(106),D=t.n(x),M=t(104),B=t.n(M),F=Object(f.a)((function(e){return{head:{backgroundColor:"blue",color:e.palette.common.white},body:{fontSize:14}}}))(w.a),H=Object(f.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(k.a),G=Object(h.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function I(e){var a=G(),t=Object(v.a)(),n=e.count,o=e.page,l=e.rowsPerPage,c=e.onChangePage;return r.a.createElement("div",{className:a.root},r.a.createElement(S.a,{onClick:function(e){c(e,0)},disabled:0===o,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(B.a,null):r.a.createElement(N.a,null)),r.a.createElement(S.a,{onClick:function(e){c(e,o-1)},disabled:0===o,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(D.a,null):r.a.createElement(R.a,null)),r.a.createElement(S.a,{onClick:function(e){c(e,o+1)},disabled:o>=Math.ceil(n/l)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(R.a,null):r.a.createElement(D.a,null)),r.a.createElement(S.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(n/l)-1))},disabled:o>=Math.ceil(n/l)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(N.a,null):r.a.createElement(B.a,null)))}var z=Object(h.a)({table:{minWidth:650}});function L(e){var a=e.data,t=z(),o=r.a.useState(0),l=Object(s.a)(o,2),c=l[0],i=l[1],u=r.a.useState(5),d=Object(s.a)(u,2),m=d[0],p=d[1],g=Object(n.useState)(""),f=Object(s.a)(g,2),h=f[0],v=f[1],w=Object(n.useMemo)((function(){return[{Header:"Countries",accessor:"Country,Other"},{Header:"Total Cases",accessor:"TotalCases"},{Header:"Total Recovered",accessor:"TotalRecovered"},{Header:"Total Deaths",accessor:"TotalDeaths"}]}),[]),S=Object(b.useTable)({columns:w,data:a},b.useFilters),A=S.getTableProps,N=S.getTableBodyProps,W=S.headerGroups,R=S.rows,x=S.prepareRow,D=S.setFilter,M=m-Math.min(m,R.length-c*m);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{component:P.a},r.a.createElement("input",{value:h,onChange:function(e){var a=e.target.value||void 0;D("Country,Other",a),v(a)},placeholder:"Search Country"}),r.a.createElement(E.a,Object.assign({className:t.table,"aria-label":"simple table"},A()),r.a.createElement(j.a,null,W.map((function(e){return r.a.createElement(k.a,e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement(F,e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement(C.a,N(),(m>0?R.slice(c*m,c*m+m):R).map((function(e,a){return x(e),r.a.createElement(H,e.getRowProps(),e.cells.map((function(e){return r.a.createElement(F,e.getCellProps(),e.render("Cell"))})))})),M>0&&r.a.createElement(H,{style:{height:53*M}},r.a.createElement(F,{colSpan:6}))),r.a.createElement(T.a,null,r.a.createElement(k.a,null,r.a.createElement(y.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:R.length,rowsPerPage:m,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){p(parseInt(e.target.value,10)),i(0)},ActionsComponent:I}))))))}var J=t(159),U=t(66),q=(t(298),function(e){var a=e.data,t=Object(n.useState)(""),o=Object(s.a)(t,2),l=o[0],c=o[1],i=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{value:"NA"};return function(){c("".concat(e.properties.NAME,": 'TotalCases':").concat(a.TotalCases,",'TotalRecovered':").concat(a.TotalRecovered,",'TotalDeaths':").concat(a.TotalDeaths," "))}},u=function(){c("")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null,l),r.a.createElement(U.ComposableMap,{width:800,height:400,style:{width:"100%",height:"auto"},"data-tip":"",projectionConfig:{scale:155,rotation:[-11,0,0]}},r.a.createElement(U.ZoomableGroup,{disablePanning:!0,zoom:1},r.a.createElement(U.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",disableOptimization:!0},(function(e){return e.geographies.map((function(e){var t=a[0].find((function(a){return a.ISO3===e.properties.ISO_A3}));return r.a.createElement(U.Geography,{key:e.rsmKey,geography:e,onMouseEnter:i(e,t),onMouseLeave:u,style:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})))))}),K=t(366),V=t(372),Z=t(371),$=t(367),_=t(369),Q=(t(299),t(365)),X=t(363),Y=t(364),ee=t(54),ae=t(368),te=t(110),ne=ee.a.create({container:{flex:1,backgroundColor:"gray",alignItems:"center",justifyContent:"center"},responsiveBox:{width:Object(te.b)("84.5%"),height:Object(te.a)("17%"),flexDirection:"column",justifyContent:"space-around"},text:{color:"white"}}),re=Object(h.a)((function(e){return{root:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function oe(){var e=re(),a=Object(n.useState)(),t=Object(s.a)(a,2),o=t[0],l=t[1],u=Object(n.useState)(),m=Object(s.a)(u,2),b=m[0],f=m[1],h=Object(n.useState)(),v=Object(s.a)(h,2),E=v[0],C=v[1],w=Object(n.useState)(!1),O=Object(s.a)(w,2),j=O[0],T=O[1];function y(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(c.a.mark((function e(a){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return e.next=3,d.a.get("/api/aggregateDatadisposable?continent=".concat(a.target.value));case 3:t=e.sent,C([t.data]),T(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=[d.a.get("/api/data"),d.a.get("/api/aggregateData")];Promise.all(e).then((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];l([t.data]),f([t.data]),C([n.data]),T(!0)}))}),[]),Object(n.useEffect)((function(){y()}),[]),console.log(E),r.a.createElement("div",null,r.a.createElement(ae.a,{style:ne.responsiveBox},r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{style:{background:"#2E3B55"},position:"static"},r.a.createElement(X.a,null,r.a.createElement(Y.a,{variant:"h6",className:e.title},"Covid-19 Dashboard")))),r.a.createElement("div",{id:"MapComponent"},r.a.createElement("p",{className:"MapTitle"},"Cases across World(World Map)"),r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null),j?r.a.createElement(q,{data:o}):null)),r.a.createElement("div",{id:"ChartComponent"},r.a.createElement("p",{className:"ChartsTitle"},"Cases across World(Visual Representation)"),r.a.createElement($.a,{className:e.formControl},r.a.createElement(V.a,{id:"Select Continent"},"Select Continent"),r.a.createElement(_.a,{name:"continent",id:"continent",onChange:y},r.a.createElement(Z.a,{selected:!0,value:"All"},"World"),r.a.createElement(Z.a,{value:"Europe"},"Europe"),r.a.createElement(Z.a,{value:"NorthAmerica"},"North America"),r.a.createElement(Z.a,{value:"Asia"},"Asia"),r.a.createElement(Z.a,{value:"SouthAmerica"},"South America"),r.a.createElement(Z.a,{value:"Africa"},"Africa"),r.a.createElement(Z.a,{value:"AustraliaOceania"},"Australia/Oceania"))),r.a.createElement("div",{id:"Chart"},r.a.createElement("div",{id:"BarChart"},j?r.a.createElement(p,{data:E}):null),r.a.createElement("div",{id:"PieChart"},j?r.a.createElement(g,{data:E}):null))),r.a.createElement("div",{id:"Table Component"},r.a.createElement("p",{className:"TableTitle"},"Cases across World(Tabular Representation)"),r.a.createElement("div",{id:"Table"},j?r.a.createElement(L,{data:b[0]}):null))))}var le=function(){return r.a.createElement(o.c,null,r.a.createElement(oe,null))},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=t(7),ue=t(102);Object(se.render)(r.a.createElement(ue.a,null,r.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ce?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(a,e)}))}}()}},[[175,1,2]]]);
//# sourceMappingURL=main.0648469c.chunk.js.map