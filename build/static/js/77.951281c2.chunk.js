(this.webpackJsonpbetalab=this.webpackJsonpbetalab||[]).push([[77],{465:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),o=(a(466),function(e){return e.map((function(e){return{title:(null===e||void 0===e?void 0:e.title)?e.title.translate():(null===e||void 0===e?void 0:e.key)?e.key.translate():e.translate(),dataIndex:(null===e||void 0===e?void 0:e.key)?e.key:e,key:(null===e||void 0===e?void 0:e.key)?e.key:e,align:e.align?e.align:"left",render:(null===e||void 0===e?void 0:e.content)?function(t,a){return c.a.createElement("div",{className:"text-overflow"},e.content(t,a))}:function(e){return c.a.createElement("div",{className:"text-overflow"},e)}}}))})},466:function(e,t,a){},474:function(e,t,a){},475:function(e,t,a){"use strict";var n,c=a(48),o=(a(467),a(468)),l=(a(488),a(485)),r=(a(489),a(490)),i=a(460),d=a(19),u=a(1),s=(a(498),a(499)),p=(a(482),a(481)),m=a(90),v=(a(470),a(469)),b=(a(493),a(494)),f=a(0),h=a.n(f),O=a(150),g=a(18),j=(a(503),a(502)),E=(a(474),a(464)),y=["styles","columns","dataSource","loading","pagination","footerContent"],x=function(e){e.styles;var t=e.columns,a=e.dataSource,n=e.loading,c=e.pagination,o=e.footerContent,l=Object(m.a)(e,y);Object(g.g)();return h.a.createElement(j.a,Object.assign({style:{width:"100%"},footer:function(){return h.a.createElement("div",{style:{display:"flex"}},"".concat((null===o||void 0===o?void 0:o[0])?o[0]:0," "),o[1])},dataSource:a,columns:t,pagination:c,loading:{indicator:h.a.createElement(E.a,null),spinning:n}},l))},w=a(921),k=a(910),S=a(589),C=a(638),F=a(702),R=a(152),L=a(476),N=a.n(L),q=a(42),A=a(89),T=a(62).c.div(n||(n=Object(A.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]))),U=function(e){return h.a.createElement(T,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)},Y=a(495),z=["fetcher","indexRequest","Breadcrumb","addRowURL","editRowURL","showRowURL","deleteRow","generalCols","options","filters","action","attachOtherContent","attachExport"],D=b.a.RangePicker,P=v.a.Option,B={};t.a=function(e){var t=e.fetcher,a=e.indexRequest,n=e.Breadcrumb,b=e.addRowURL,j=e.editRowURL,E=e.showRowURL,y=e.deleteRow,L=e.generalCols,A=e.options,T=e.filters,V=e.action,I=e.attachOtherContent,M=e.attachExport,_=Object(m.a)(e,z),W={title:"numbers".translate(),dataIndex:"id",key:"id",width:"60px",render:function(e,t,a){return h.a.createElement("a",{href:""}," ",a+1+xe," ")}},J=Object(Y.a)(),K=J.width,$=(J.height,[{title:"Actions",dataIndex:"id",key:"id",render:function(e,t,a){return h.a.createElement("div",{style:{color:"#646D82",cursor:"pointer"},className:"d-flex"},j&&h.a.createElement(R.b,{to:"".concat(j).concat(t.id)},h.a.createElement(p.a,{shape:"circle",style:{margin:" 2px"}},h.a.createElement(w.a,null))),E&&h.a.createElement(R.b,{to:"".concat(E).concat(e)},h.a.createElement(p.a,{shape:"circle",style:{margin:" 2px"}},h.a.createElement(k.a,null))),(null===y||void 0===y?void 0:y.status)?h.a.createElement(s.a,{placement:"top",title:"You Want to Delete this ?",okText:"Delete",onConfirm:function(){return y.deleteRecord(t)},cancelText:"cancel"},h.a.createElement(p.a,{shape:"circle",style:{margin:" 2px"}},h.a.createElement(S.a,{style:{color:"mediumvioletred"}}))):"")}}]);function Z(e){var t=e.uniq;X((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},t,!Q[t]))}))}var G=Object(f.useState)({}),H=Object(i.a)(G,2),Q=H[0],X=H[1],ee=Object(f.useState)(T),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],ce=function(e){var t=e.placeholder,a=e.key;return h.a.createElement(o.a,{style:{width:200},placeholder:"ar"==Ue?t[0]:t[1],onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.value)?Ae((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(d.a)({},a,e.target.value))})):delete qe[a]&&Ae((function(e){return Object(u.a)({},e)})),we(0),Fe.current=1}})},oe=function(e){var t=e.placeholder,a=e.key;return h.a.createElement(D,{style:{width:230},placeholder:"ar"==Ue?null===t||void 0===t?void 0:t.ar:null===t||void 0===t?void 0:t.en,onChange:function(e){if(e){var t=N()(e[0]).format("YYYY-MM-DD"),n=N()(e[1]).format("YYYY-MM-DD");Ae((function(e){var c;return Object(u.a)(Object(u.a)({},e),{},(c={},Object(d.a)(c,null===a||void 0===a?void 0:a[0],t),Object(d.a)(c,null===a||void 0===a?void 0:a[1],n),c))})),we(0),Fe.current=1}else delete qe[a[0]],delete qe[a[1]],Ae((function(e){return Object(u.a)({},e)})),we(0),Fe.current=1}})},le=function(e,t){var a,n,c=e.placeholder,o=e.key,l=e.data,r=e.multiple;return h.a.createElement(v.a,{mode:r,style:{width:200},showSearch:!0,value:r?void 0:qe[o],onChange:function(e){e?Ae((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(d.a)({},o,e))})):(delete qe[o],Ae((function(e){return Object(u.a)({},e)}))),we(0),Fe.current=1},placeholder:"ar"==Ue?c[0]:c[1],optionFilterProp:"children"},null===(a=ae[t].data)||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){return h.a.createElement(P,{value:e.id},e[null===l||void 0===l?void 0:l.optionName])})))},re=function(){return ue&&T.map((function(e,t){return h.a.createElement(h.a.Fragment,null,h.a.createElement(h.a.Fragment,null,"search"==e.type&&function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(l.a,{title:"ar"==Ue?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},h.a.createElement(r.a,{content:ce(e),trigger:"click",visible:Q[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},h.a.createElement(p.a,{className:"closed-input",shape:"circle"},e.icon))))}(e)),h.a.createElement(h.a.Fragment,null,"dateFromTo"==e.type&&function(e){return h.a.createElement(h.a.Fragment,null,h.a.createElement(l.a,{title:"ar"==Ue?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},h.a.createElement(r.a,{content:oe(e),trigger:"click",visible:Q[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},h.a.createElement(p.a,{className:"closed-input",shape:"circle"},h.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e)),h.a.createElement(h.a.Fragment,null,"select"==e.type&&function(e,t){return h.a.createElement(h.a.Fragment,null,h.a.createElement(l.a,{title:"ar"==Ue?null===e||void 0===e?void 0:e.placeholder[0]:null===e||void 0===e?void 0:e.placeholder[1],color:"#6be3de",placement:"bottom"},h.a.createElement(r.a,{content:le(e,t),trigger:"click",visible:Q[e.uniq],onVisibleChange:function(){return Z(e)},placement:"topLeft"},h.a.createElement(p.a,{className:"closed-input",shape:"circle"},h.a.createElement("span",{role:"img","aria-label":"plus",class:"anticon anticon-plus"},e.icon)))))}(e,t)))}))},ie=Object(f.useState)(!1),de=Object(i.a)(ie,2),ue=de[0],se=de[1];Object(f.useEffect)((function(){T&&T.forEach((function(e,t){var a,n;(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.isOnline)&&function(e,t,a){var n=e.url,o=e.params;O.b.get(n,{headers:{Authorization:"Bearer ".concat(Te)},params:o}).then((function(e){T[t].data.options=[].concat(Object(c.a)(T[t].data.options),Object(c.a)(e.data.data)),ne(T),a&&se(a)})).catch((function(e){}))}(e.data,t,t+1==T.length),!(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.isOnline)&&t+1==T.length&&se(!0)}))}),[K]);var pe=Object(f.useState)([]),me=Object(i.a)(pe,2),ve=me[0],be=me[1],fe=Object(f.useState)(!1),he=Object(i.a)(fe,2),Oe=he[0],ge=he[1],je=Object(g.g)(),Ee=Object(f.useState)(0),ye=Object(i.a)(Ee,2),xe=ye[0],we=ye[1],ke=Object(q.b)(),Se=Object(f.useState)({}),Ce=Object(i.a)(Se,2),Fe=Ce[0],Re=Ce[1],Le=Object(f.useState)(B),Ne=Object(i.a)(Le,2),qe=Ne[0],Ae=Ne[1];Object(f.useEffect)((function(){T.forEach((function(e){var t,a,n;B[e.key]=(null===(t=e.data)||void 0===t?void 0:t.defaultSelectValue)||0==(null===(a=e.data)||void 0===a?void 0:a.defaultSelectValue)?null===(n=e.data)||void 0===n?void 0:n.defaultSelectValue:null}))}),[]);var Te=Object(q.c)((function(e){return e.Auth.idToken})),Ue=localStorage.getItem("lang");Object(f.useEffect)((function(){ke(n),function(e,t){var a=t.method,n=t.params,c=Object(u.a)(Object(u.a)({skip:xe},n),qe);ge(!0),O.b[a](e,{headers:{Authorization:"Bearer ".concat(Te)},params:c}).then((function(t){"withdraws"===e&&(t.data.data=t.data.data.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{key:e.id})}))),be(t.data),Fe.pageSize=10,Re({total:t.data.count,pageSize:10}),ge(!1)})).catch((function(e){ge(!1)}))}(null===a||void 0===a?void 0:a[1],null===a||void 0===a?void 0:a[0])}),[qe,xe,t]);var Ye=function(e){var t=Object(u.a)({},e);t.current=e.current,Re(t),we(10*(t.current-1))},ze=Object(f.useState)([L[0]]),De=Object(i.a)(ze,2),Pe=(De[0],De[1]),Be=([].concat(Object(c.a)(L),Object(c.a)(A)),Object(f.useState)(0)),Ve=Object(i.a)(Be,2),Ie=Ve[0];Ve[1];return Object(f.useEffect)((function(){Pe([L[Ie]])}),[Ie]),ve&&Fe&&h.a.createElement(U,null,M&&h.a.createElement(p.a,{style:{margin:10},type:"primary",icon:h.a.createElement(F.a,null),onClick:function(){var e=Object(u.a)(Object(u.a)(Object(u.a)({},null===a||void 0===a?void 0:a[0].params),qe),{},{token:"".concat(Te)});Object.entries(e).map((function(t){var a=Object(i.a)(t,2),n=a[0];a[1]||delete e[n]}));var t=new URLSearchParams(e);window.open("".concat(O.a,"/").concat(null===a||void 0===a?void 0:a[1],"/export").concat(t.toString()&&"?").concat(t.toString()),"_blank").focus()}},"Export"),I,0==V?h.a.createElement(h.a.Fragment,null,h.a.createElement(x,Object.assign({title:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},h.a.createElement("div",null,b&&h.a.createElement(l.a,{title:"ar"==Ue?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},h.a.createElement(p.a,{onClick:function(){return je.push(b)},shape:"circle",type:"primary",style:{margin:" 2px"}},h.a.createElement(C.a,null))),re())))},footerContent:[ve.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(u.a)(Object(u.a)({},Fe),{},{position:["bottomCenter"]}),loading:Oe,showSizeChanger:!1,columns:[W].concat(Object(c.a)(L),Object(c.a)(A)),onChange:Ye,dataSource:ve.data,scroll:{x:900}},_))):h.a.createElement(h.a.Fragment,null,h.a.createElement(x,{add:b,title:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{style:{margin:"10px",display:"flex",justifyContent:"space-between"}},h.a.createElement("div",null,b&&h.a.createElement(l.a,{title:"ar"==Ue?"\u0627\u0636\u0627\u0641\u0629":"Add",color:"#6be3de",placement:"bottom"},h.a.createElement(p.a,{onClick:function(){return je.push(b)},shape:"circle",type:"primary",style:{margin:" 2px"}},h.a.createElement(C.a,null))),re())))},footerContent:[ve.count,null===a||void 0===a?void 0:a[1].translate()],pagination:Object(u.a)(Object(u.a)({},Fe),{},{position:["bottomCenter"]}),loading:Oe,showSizeChanger:!1,columns:[W].concat(Object(c.a)(L),Object(c.a)(A),$),onChange:Ye,dataSource:ve.data,scroll:{x:900}})))}},558:function(e,t,a){"use strict";var n,c,o,l,r,i=a(463),d=a(151),u={index:"PurposeFinances",add:"PurposeFinancesNew",edit:"PurposeFinancesEdit",show:"PurposeFinancesShow"},s={api:{index:[{method:"get",params:{}},"purposeFinances"],add:[{method:"post",params:{}},"purposeFinances"],edit:[{method:"put",params:{}},"purposeFinances/"],show:[{method:"get",params:{}},"purposeFinances/"],delete:[{method:"delete",params:{}},"purposeFinances/"]},routes:{index:"".concat(d.b,"/").concat(null===(n=i.b[u.index])||void 0===n?void 0:n.path),indexTitle:u.index.replace(/([a-z])([A-Z])/g,"$1 $2"),indexKey:"home",add:"".concat(d.b,"/").concat(null===(c=i.b[u.add])||void 0===c?void 0:c.path),edit:"".concat(d.b,"/").concat(null===(o=i.b[u.edit])||void 0===o?void 0:o.path.slice(0,i.b[u.edit].path.length-3)),show:"".concat(d.b,"/").concat(null===(l=i.b[u.show])||void 0===l?void 0:l.path.slice(0,(null===(r=i.b[u.show])||void 0===r?void 0:r.path.length)-3))},titles:{add:"provenance.create",edit:"global.edit",show:"Details"}};t.a=s},890:function(e,t,a){"use strict";a.r(t);var n=a(460),c=a(0),o=a.n(c),l=a(150),r=a(475),i=a(42),d=a(465),u=a(587),s=a(558),p=a(118),m=a(491);t.default=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],v=t[1],b=Object(i.c)((function(e){return e.Auth.idToken})),f=[{uniq:"q",type:"search",icon:o.a.createElement(u.a,null),placeholder:["\u0628\u062d\u062b","Search ..."],key:"q",online:{status:!0,url:"url",params:""},hide:{onValue:"new",hiddenFilters:["city_id","fromTO"]}}];return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{fetcher:a,indexRequest:s.a.api.index,Breadcrumb:{type:"SET",payload:[{key:s.a.routes.indexKey,to:s.a.routes.index,title:s.a.routes.indexTitle}]},addRowURL:!!Object(m.a)("purposeFinances","create")&&s.a.routes.add,filters:f,editRowURL:!!Object(m.a)("purposeFinances","update")&&s.a.routes.edit,deleteRow:{status:Object(m.a)("purposeFinances","delete"),deleteRecord:function(e){var t,a,n,c=e.id;p.b.promise(l.b[null===(t=s.a.api.delete)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.method]("".concat(null===(n=s.a.api.delete)||void 0===n?void 0:n[1]).concat(c),{headers:{Authorization:"Bearer ".concat(b)}}),{pending:"Pending",success:{render:function(e){return v((function(e){return!e})),console.log(e.data),"\ud83d\udc4c ".concat(e.data.data.message)},icon:"\ud83d\udfe2"},error:{render:function(e){var t,a,n;return"\ud83e\udd2f ".concat((null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Backend Error Occured")}}})}},action:Object(m.a)("purposeFinances","delete")||Object(m.a)("purposeFinances","update")||!1,generalCols:Object(d.a)(["name_en","name_ar"]),options:[]}))}}}]);
//# sourceMappingURL=77.951281c2.chunk.js.map