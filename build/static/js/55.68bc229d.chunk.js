(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[55],{1467:function(e,t,a){"use strict";a.r(t);a(704);var n=a(710),c=a(206),l=a(0),o=a.n(l),r=(a(207),a(668)),i=a(42),u=a(654),d=a(699),s=a(706),m=a(713),p=(a(161),a(687)),v=a(705),b=a.n(v);t.default=function(){var e=Object(l.useState)(0),t=Object(c.a)(e,2),a=t[0],v=(t[1],Object(i.c)((function(e){return e.Auth.idToken})),[{uniq:"q",type:"search",icon:o.a.createElement(s.a,null),placeholder:["\u0628\u062d\u062b","Search ..."],key:"q",online:{status:!0,url:"url",params:""},hide:{onValue:"new",hiddenFilters:["city_id","fromTO"]}},{uniq:"fromTO",type:"dateFromTo",icon:o.a.createElement(d.b,null),placeholder:{ar:["\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0621"," \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621"],en:["start date","end date"]},key:["from","to"],data:{isOnline:!1}}]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{fetcher:a,indexRequest:m.a.api.index,Breadcrumb:{type:"SET",payload:[{key:m.a.routes.indexKey,to:m.a.routes.index,title:m.a.routes.indexTitle}]},filters:v,showRowURL:m.a.routes.show,action:Object(p.a)("users","delete")||Object(p.a)("users","update")||!0,generalCols:Object(u.a)([{key:"name_en",content:function(e,t){var a=t.first_name_en,n=t.second_name_en;return o.a.createElement("div",null,"".concat(a," ").concat(n))}},{key:"name_ar",content:function(e,t){var a=t.first_name_ar,n=t.second_name_ar;return o.a.createElement("div",null,"".concat(a," ").concat(n))}},{key:"contacts",content:function(e,t){var a=t.email,c=t.phone;return o.a.createElement("div",null,o.a.createElement("div",null,a),o.a.createElement(n.a,null,c))}},"national_id",{key:"created_at",content:function(e,t){return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:5}},o.a.createElement(n.a,{color:"cyan"},b()(e).format("iYYYY-iM-iD")," H"),o.a.createElement(n.a,{color:"blue"},b()(e).format("YYYY-M-D")," G "))}},{key:"is_active",content:function(e,t){return e?o.a.createElement(n.a,{color:"#248624"},m.b[e]):o.a.createElement(n.a,{color:"#a82b31"},m.b[e])}}]),options:[]}))}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),c=a.n(n),l=(a(655),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return c.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return c.a.createElement("div",{className:"text-overflow"},e)}}}))})},655:function(e,t,a){},666:function(e,t,a){},667:function(e,t,a){},668:function(e,t,a){"use strict";var n=a(59),c=(a(678),a(677)),l=(a(680),a(685)),o=a(206),r=a(20),i=a(1),u=(a(691),a(694)),d=(a(674),a(673)),s=a(118),m=(a(657),a(656)),p=(a(692),a(695)),v=a(0),b=a.n(v),f=a(207),h=a(19),g=(a(665),a(697),a(698)),O=(a(666),a(653)),E=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,c=e.pagination,l=e.footerContent,o=Object(s.a)(e,["styles","columns","dataSource","loading","pagination","footerContent"]);Object(h.g)();return b.a.createElement(g.a,Object.assign({style:{width:"100%"},footer:function(){return b.a.createElement("div",{style:{display:"flex"}},"".concat((null===l||void 0===l?void 0:l[0])?l[0]:0," "),l[1])},dataSource:a,columns:t,pagination:c,loading:{indicator:b.a.createElement(O.a,null),spinning:n}},o))},j=a(1449),y=a(1414),x=a(1450),w=a(1452),k=a(1451),C=(a(667),function(e){var t=e.children,a=e.onChange,n=e.styles,c=e.value,l=e.name,o=e.type,r=e.placeholder,u=(e.divStyels,Object(s.a)(e,["children","onChange","styles","value","name","type","placeholder","divStyels"]));return b.a.createElement(b.a.Fragment,null,t,b.a.createElement("input",Object.assign({className:"custom-input",style:Object(i.a)({},n),name:l},u,{type:o,value:c,placeholder:r,onChange:a})))}),S=a(209),R=a(693),F=a.n(R),Y=a(42),_=(a(210),a(205));function L(){var e=Object(_.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return L=function(){return e},e}var N=a(117).c.div(L()),q=function(e){return b.a.createElement(N,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},D=function(e){var t=e.placeholder,a=e.onChange,n=Object(s.a)(e,["placeholder","onChange"]);return b.a.createElement(b.a.Fragment,null,b.a.createElement(C,Object.assign({name:"numberSearch",placeholder:t,onChange:a},n)))},T=a(689),A=p.a.RangePicker,U=m.a.Option,z={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,p=e.Breadcrumb,g=e.addRowURL,O=e.editRowURL,C=e.showRowURL,R=e.deleteRow,_=e.generalCols,L=e.options,N=e.filters,V=e.action,M=e.attachOtherContent,B=e.attachExport,I=Object(s.a)(e,["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"]),P={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return b.a.createElement("a",{href:""}," ",a+1+ye," ")}},W=Object(T.a)(),J=W.width,K=(W.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return b.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},O&&b.a.createElement(S.b,{to:"".concat(O).concat(t.id)},b.a.createElement(d.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(j.a,null))),C&&b.a.createElement(S.b,{to:"".concat(C).concat(e)},b.a.createElement(d.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(y.a,null))),(null===R||void 0===R?void 0:R.status)?b.a.createElement(u.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return R.deleteRecord(t)},cancelText:"cancel"},b.a.createElement(d.a,{shape:"circle",style:{margin:" 2px"}},b.a.createElement(x.a,{style:{color:"mediumvioletred"}}))):"")}}]);function $(e){var t=e.uniq;Q((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},t,!Z[t]))}))}var G=Object(v.useState)({}),H=Object(o.a)(G,2),Z=H[0],Q=H[1],X=Object(v.useState)(N),ee=Object(o.a)(X,2),te=ee[0],ae=ee[1],ne=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(D,{style:{width:200},placeholder:"ar"==qe?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?Le((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},a,e.target.value))})):delete _e[a]&&Le((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},ce=function(e){var t=e.placeholder,a=e.key;return b.a.createElement(A,{style:{width:230},placeholder:"ar"==qe?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=F()(e[0]).format("YYYY-MM-DD"),n=F()(e[1]).format("YYYY-MM-DD");Le((function(e){var c;return Object(i.a)(Object(i.a)({},e),{},(c={},Object(r.a)(c,null===a||void 0===a?void 0:a[0],t),Object(r.a)(c,null===a||void 0===a?void 0:a[1],n),c))})),xe(0),Se.current=1}else delete _e[a[0]],delete _e[a[1]],Le((function(e){return Object(i.a)({},e)})),xe(0),Se.current=1}})},le=function(e,t){var a,n,c=e.placeholder,l=e.key,o=e.data,u=e.multiple;return b.a.createElement(m.a,{mode:u,style:{width:200},showSearch:!0,value:u?void 0:_e[l],onChange:function(e){e?Le((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(r.a)({},l,e))})):(delete _e[l],Le((function(e){return Object(i.a)({},e)}))),xe(0),Se.current=1},placeholder:"ar"==qe?c[0]:c[1],optionFilterProp:"children"},null===(a=te[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return b.a.createElement(U,{value:e.id},e[null===o||void 0===o?void 0:o.optionName])})))},oe=function(){return ue&&N.map((function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(b.a.Fragment,null,"search"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:ne(e),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(d.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),b.a.createElement(b.a.Fragment,null,"dateFromTo"==e.type&&function(e){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:ce(e),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(d.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),b.a.createElement(b.a.Fragment,null,"select"==e.type&&function(e,t){return b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{title:"ar"==qe?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},b.a.createElement(l.a,{content:le(e,t),trigger:"click",visible:Z[e.uniq],onVisibleChange:function(){return $(e)},placement:"topLeft"},b.a.createElement(d.a,{className:"closed-input",shape:"circle"},b.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},re=Object(v.useState)(!1),ie=Object(o.a)(re,2),ue=ie[0],de=ie[1];Object(v.useEffect)((function(){N&&N.forEach((function(e,t){var a,c;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var c=e.url,l=e.params;f.b.get(c,{headers:{Authorization:"Bearer ".concat(Ne)},params:l}).then((function(e){N[t].data.options=[].concat(Object(n.a)(N[t].data.options),Object(n.a)(e.data.data)),ae(N),a&&de(a)})).catch((function(e){}))}(e.data,t,t+1==N.length),!(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.isOnline)&&t+1==N.length&&de(!0)}))}),[J]);var se=Object(v.useState)([]),me=Object(o.a)(se,2),pe=me[0],ve=me[1],be=Object(v.useState)(!1),fe=Object(o.a)(be,2),he=fe[0],ge=fe[1],Oe=Object(h.g)(),Ee=Object(v.useState)(0),je=Object(o.a)(Ee,2),ye=je[0],xe=je[1],we=Object(Y.b)(),ke=Object(v.useState)({}),Ce=Object(o.a)(ke,2),Se=Ce[0],Re=Ce[1],Fe=Object(v.useState)(z),Ye=Object(o.a)(Fe,2),_e=Ye[0],Le=Ye[1];Object(v.useEffect)((function(){N.forEach((function(e){var t,a,n;z[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var Ne=Object(Y.c)((function(e){return e.Auth.idToken})),qe=localStorage.getItem("lang");Object(v.useEffect)((function(){!function(e,t){var a=t.method,n=t.params,c=Object(i.a)(Object(i.a)({skip:ye},n),_e);ge(!0),f.b[a](e,{headers:{Authorization:"Bearer ".concat(Ne)},params:c}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{key:e.id})}))),ve(t.data),Se.pageSize=10,Re({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[_e,ye,t]);var De=function(e){var t=Object(i.a)({},e);t.current=e.current,Re(t),xe(10*(t.current-1))};we(p);var Te=Object(v.useState)([_[0]]),Ae=Object(o.a)(Te,2),Ue=(Ae[0],Ae[1]),ze=([].concat(Object(n.a)(_),Object(n.a)(L)),Object(v.useState)(0)),Ve=Object(o.a)(ze,2),Me=Ve[0];Ve[1];return Object(v.useEffect)((function(){Ue([_[Me]])}),[Me]),pe&&Se&&b.a.createElement(q,null,B&&b.a.createElement(d.a,{style:{margin:10},type:"primary",icon:b.a.createElement(k.a,null),onClick:function(){var e=Object(i.a)(Object(i.a)(Object(i.a)({},null===a||void 0===a?void 0:a[0].params),_e),{},{token:"".concat(Ne)});Object.entries(e).map((function(t){var a=Object(o.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(f.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),M,0==V?b.a.createElement(b.a.Fragment,null,b.a.createElement(E,Object.assign({title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==qe?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(d.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),oe())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:he,showSizeChanger:!1,columns:[P].concat(Object(n.a)(_),Object(n.a)(L)),onChange:De,dataSource:pe.data,scroll:{x:900}},I))):b.a.createElement(b.a.Fragment,null,b.a.createElement(E,{add:g,title:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},b.a.createElement("div",null,g&&b.a.createElement(c.a,{title:"ar"==qe?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},b.a.createElement(d.a,{onClick:function(){return Oe.push(g)},shape:"circle",type:"primary",style:{margin:" 2px"}},b.a.createElement(w.a,null))),oe())))},footerContent:[pe.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(i.a)(Object(i.a)({},Se),{},{position:["bottomCenter"]}),loading:he,showSizeChanger:!1,columns:[P].concat(Object(n.a)(_),Object(n.a)(L),K),onChange:De,dataSource:pe.data,scroll:{x:900}})))}},706:function(e,t,a){"use strict";var n=a(0),c=a(701),l=a(676),o=function(e,t){return n.createElement(l.a,Object.assign({},e,{ref:t,icon:c.a}))};o.displayName="SearchOutlined",t.a=n.forwardRef(o)},713:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n,c,l,o,r,i=a(652),u=a(208),d={index:"clients",add:"clientsNew",edit:"clientsEdit",show:"clientsShow"},s={api:{index:[{method:"get",params:{}},"users"],add:[{method:"post",params:{}},"users"],edit:[{method:"put",params:{}},"users/"],show:[{method:"get",params:{}},"users/"],delete:[{method:"delete",params:{}},"users/"]},routes:{index:"".concat(u.b,"/").concat(null===(n=i.b[d.index])||void 0===n?void 0:n.path),indexTitle:d.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(u.b,"/").concat(null===(c=i.b[d.add])||void 0===c?void 0:c.path),edit:"".concat(u.b,"/").concat(null===(l=i.b[d.edit])||void 0===l?void 0:l.path.slice(0,i.b[d.edit].path.length-3)),show:"".concat(u.b,"/").concat(null===(o=i.b[d.show])||void 0===o?void 0:o.path.slice(0,(null===(r=i.b[d.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"Create",edit:"global.edit",show:"Details"}},m={1:"active",0:"not active"};t.a=s}}]);
//# sourceMappingURL=55.68bc229d.chunk.js.map