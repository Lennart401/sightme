(this.webpackJsonpsightme=this.webpackJsonpsightme||[]).push([[0],{119:function(e,t,n){e.exports=n(150)},124:function(e,t,n){},125:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),l=n.n(r),o=(n(124),n(125),n(11)),c=n(151),u=function(e){var t=e.standard,n=e.colored,a=e.variant,r=e.component;return i.a.createElement(c.a,{component:r||"div",variant:a||"body1"},i.a.createElement(c.a,{component:"span",variant:a||"body1"},t),i.a.createElement(c.a,{component:"span",color:"secondary",variant:a||"body1"},n))},s=n(206),d=n(189),m=Object(d.a)((function(){return{hugeVerticalPadding:{paddingTop:"25vh",paddingBottom:"15vh",paddingLeft:"1em",paddingRight:"1em",textAlign:"center"},hugeVerticalPaddingNoHorizontal:{paddingTop:"25vh",paddingBottom:"15vh",textAlign:"center"}}})),g=function(e){var t=e.children,n=e.noHorizontalPadding,a=m();return i.a.createElement(s.a,{className:n?a.hugeVerticalPaddingNoHorizontal:a.hugeVerticalPadding},t)},f=function(e){var t=e.children,n=e.margin,a=void 0===n?"0em":n;return i.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{marginLeft:a,marginRight:a}},t)},h=function(e){var t=e.factor,n=2*(void 0===t?1:t);return i.a.createElement("p",{style:{marginTop:n+"em"}})},p=n(190),v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout((function(){return o.navigate.apply(void 0,t)}),250)},E=function(e){return i.a.createElement(p.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),v(e.href)}}),e.children)},b=function(e){return i.a.createElement(s.a,Object.assign({},e,{style:{textAlign:"center"}}),e.children)},j=n(14),y=n(15),O=n(31),S=n(96),k=n.n(S),w=n(70),N={},x=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.c)(),D={key:"active-game",storage:k.a,whitelist:["active-game"]},T=Object(O.d)(Object(w.a)(D,(function(e){return e})),x),C=Object(w.b)(T);T.injectReducer=function(e,t){N[e]=t,T.replaceReducer(Object(w.a)(D,Object(O.b)(N)))};var A,z=function(e){return T.getState()[e]},B=function(e,t){var n=z(e);return T.subscribe((function(){n!==z(e)&&(n=z(e),t(n))}))},I=function(e,t){return"".concat(e,"/").concat(t)},M=n(19),L=n(27),P=n.n(L),R=I("active-game","set-active-game"),F=I("active-game","leave-active-game"),W=I("active-game","set-initial-distance"),H=(A={},Object(y.a)(A,R,(function(e,t){return Object(M.a)(e,(function(e){return t}))})),Object(y.a)(A,F,(function(e){return Object(M.a)(e,(function(e){delete e.name,delete e.expiresAt,delete e.lat,delete e.lng,delete e.initialDistance,delete e.assist}))})),Object(y.a)(A,W,(function(e,t){return Object(M.a)(e,(function(e){e.initialDistance=t}))})),A),_=function(){T.dispatch({type:F,payload:{}})};T.injectReducer("active-game",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return H[n]?H[n](e,a):e}));var V,Y,K=function(){var e=Object(a.useState)(z("active-game")),t=Object(j.a)(e,2),n=t[0],i=t[1];if(Object(a.useLayoutEffect)((function(){return B("active-game",i)}),[i]),!n||!P()().isAfter(n.expiresAt))return(null===n||void 0===n?void 0:n.name)?n:void 0;_()},q=n(37),J=n.n(q),U=Object(d.a)((function(){return{content:{marginLeft:"24px",marginRight:"24px"}}})),Z=function(e){var t=U();return i.a.createElement(s.a,Object.assign({},e,{className:J()(e.className,t.content)}),e.children)},G=Object(d.a)((function(){return{fullHeightWrapper:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100%"}}})),X=function(e){var t=G();return i.a.createElement(s.a,Object.assign({},e,{className:J()(t.fullHeightWrapper,e.className)}),e.children)},$=Object(d.a)((function(){return{fullHeightContent:{flexGrow:1,flexShrink:1,flexBasis:"auto",width:"100%"}}})),Q=function(e){var t=$();return i.a.createElement(s.a,{className:t.fullHeightContent},i.a.createElement(Z,e,e.children,i.a.createElement(h,null)))},ee=Object(d.a)((function(){return{about:{marginBottom:"8px"}}})),te=function(){Object(o.useTitle)("SightMe");var e=K(),t=ee();return i.a.createElement(X,null,i.a.createElement(Q,null,i.a.createElement(g,{noHorizontalPadding:!0},i.a.createElement(u,{variant:"h2",component:"h1",standard:"Sight",colored:"Me"})),i.a.createElement(b,null,i.a.createElement(E,{href:"/host"},"Spiel erstellen"),i.a.createElement(h,null),e&&i.a.createElement(E,{href:"/play"},e.name,"'s Spiel"),!e&&i.a.createElement(f,{margin:"1em"},"Du nimmst aktuell an keinem aktiven Spiel teil. Du erh\xe4ltst vom Spielleiter einen Link zum Beitreten."))),i.a.createElement(Z,{className:t.about},i.a.createElement(b,null,i.a.createElement(E,{variant:"text",href:"/about"},"\xdcber die App"))))},ne=n(192),ae=n(193),ie=n(191),re=function(e){return i.a.createElement(ie.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),v(e.href)}}),e.children)},le=n(194),oe=Object(d.a)((function(e){return{offsetFromTop:{paddingTop:"3vh"},offset:e.mixins.toolbar,morePadding:{paddingLeft:"21px",paddingRight:"21px"}}})),ce=function(e){var t=e.href,n=e.onClick,r=oe();return t&&(n=void 0),t||n||(n=function(){return window.history.back()}),i.a.createElement(a.Fragment,null,i.a.createElement(ne.a,{position:"fixed",className:r.offsetFromTop,color:"transparent",elevation:0},i.a.createElement(ae.a,{className:r.morePadding},t&&i.a.createElement(re,{href:t,edge:"start","aria-label":"back"},i.a.createElement(le.a,null)),n&&i.a.createElement(ie.a,{onClick:n,edge:"start","aria-label":"back"},i.a.createElement(le.a,null)))),i.a.createElement("div",{className:J()(r.offset,r.offsetFromTop)}))},ue=Object(d.a)((function(){return{titlePadding:{paddingTop:"0.5em",paddingBottom:"3em"}}})),se=function(e){var t=e.standard,n=e.colored,a=ue();return n?i.a.createElement(s.a,{className:a.titlePadding},i.a.createElement(u,{variant:"h6",component:"h1",standard:t,colored:n})):i.a.createElement(s.a,{className:a.titlePadding},i.a.createElement(c.a,{variant:"h6",component:"h1"},t))},de=n(212),me=n(213),ge=n(195),fe=n(214),he=function(e){var t,n,r=e.location,l=[null===r||void 0===r||null===(t=r.coords)||void 0===t?void 0:t.latitude,null===r||void 0===r||null===(n=r.coords)||void 0===n?void 0:n.longitude],o=Object(a.useState)(14),u=Object(j.a)(o,2),s=u[0],d=u[1];return i.a.createElement(a.Fragment,null,r&&i.a.createElement(de.a,{center:l,zoom:s,style:{height:"30vmax"},onViewportChanged:function(e){d(e.zoom)}},i.a.createElement(me.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.a.createElement(ge.a,{position:l},i.a.createElement(fe.a,null,"Deine Position"))),!r&&i.a.createElement("div",{style:{width:"100%",height:"30vmax"}},i.a.createElement(b,null,i.a.createElement(c.a,{variant:"body2"},"GPS-Position ist unbekannt. Bitte erlaube den Standort f\xfcr diese App"))))},pe=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=void 0;return navigator.geolocation&&(e=navigator.geolocation.watchPosition((function(e){i(e)}),(function(){}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})),function(){e&&navigator.geolocation.clearWatch(e)}}),[]),n},ve=n(66),Ee=I("hosting","generate-link"),be=I("hosting","set-username"),je=I("hosting","set-create-date"),ye=I("hosting","set-lat-lng"),Oe=I("hosting","set-option"),Se=(V={},Object(y.a)(V,Ee,(function(e){return Object(M.a)(e,(function(t){var n={name:e.name,expiresAt:e.expiresAt,lat:e.latitude,lng:e.longitude,assist:{tendency:e[ke.TENDENCY],dyndist:e[ke.DYNAMIC_DISTANCE],nodist:e[ke.NO_DISTANCE]}},a=ve.Base64.encodeURI(JSON.stringify(n));t.link=window.origin+"/sightme/join/"+a}))})),Object(y.a)(V,be,(function(e,t){return Object(M.a)(e,(function(e){e.name=t}))})),Object(y.a)(V,je,(function(e,t){return Object(M.a)(e,(function(e){e.expiresAt=t}))})),Object(y.a)(V,ye,(function(e,t){var n=t.lat,a=t.lng;return Object(M.a)(e,(function(e){e.latitude=n,e.longitude=a}))})),Object(y.a)(V,Oe,(function(e,t){var n=t.option,a=t.enable;return Object(M.a)(e,(function(e){e[n]=a}))})),V),ke={TENDENCY:"assist-tendency",DYNAMIC_DISTANCE:"assist-dyndist",NO_DISTANCE:"assist-nodist"},we=function(e,t){return T.dispatch({type:Oe,payload:{option:e,enable:t}})},Ne=(Y={},Object(y.a)(Y,ke.TENDENCY,!0),Object(y.a)(Y,ke.DYNAMIC_DISTANCE,!1),Object(y.a)(Y,ke.NO_DISTANCE,!1),Y);T.injectReducer("hosting",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return Se[n]?Se[n](e,a):e}));var xe,De=function(e){return Ce()[e]},Te=function(){return Ce()},Ce=function(){var e=Object(a.useState)(z("hosting")),t=Object(j.a)(e,2),n=t[0],i=t[1];return Object(a.useLayoutEffect)((function(){return B("hosting",i)}),[i]),n},Ae=Object(d.a)((function(){return{titlePadding:{paddingTop:"0.5em",paddingBottom:"0.5em"}}})),ze=function(e){var t=e.standard,n=e.colored,a=Ae();return n?i.a.createElement(s.a,{className:a.titlePadding},i.a.createElement(u,{variant:"subtitle2",component:"h1",standard:t,colored:n})):i.a.createElement(s.a,{className:a.titlePadding},i.a.createElement(c.a,{variant:"subtitle2",component:"h1"},t))},Be=function(){Object(o.useTitle)("Spiel hosten | SightMe");var e=pe();return i.a.createElement(a.Fragment,null,i.a.createElement(ce,{href:"/"}),i.a.createElement(Z,null,i.a.createElement(se,{standard:"Ein Spiel hosten"}),i.a.createElement(ze,{standard:"Dein Standort"}),i.a.createElement(he,{location:e}),i.a.createElement(h,null),i.a.createElement(b,null,i.a.createElement(p.a,{disabled:!e,onClick:function(){var t,n,a;t=e.coords.latitude,n=e.coords.longitude,T.dispatch({type:ye,payload:{lat:t,lng:n}}),a=P()().add(1,"days").utc().format(),T.dispatch({type:je,payload:a}),v("/host/enter-name")}},"Spiel hier erstellen"),!e&&i.a.createElement(a.Fragment,null,i.a.createElement(h,null),i.a.createElement(f,null,"Bitte erlaube den Standort f\xfcr diese App")))))},Ie=Object(d.a)((function(){return{buttonBox:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginBottom:"8px","& > :not(:first-child)":{marginTop:"6px"}}}})),Me=function(e){var t=Ie();return i.a.createElement(Z,{style:e.style,className:J()(e.className,t.buttonBox)},e.children)},Le=function(e){var t,n,r,l,u,s,d,m,g,j,y=e.gameBase64,O=void 0;try{O=JSON.parse(ve.Base64.decode(y))}catch(D){}Object(o.useTitle)("".concat(null===(t=O)||void 0===t?void 0:t.name," beitreten | SightMe"));var S,k,w=P()(null===(n=O)||void 0===n?void 0:n.expiresAt).diff(P()(),"hours"),N=P()().isBefore(P()(null===(r=O)||void 0===r?void 0:r.expiresAt)),x=[];((null===(l=O)||void 0===l||null===(u=l.assist)||void 0===u?void 0:u.tendency)||x.push("Keine Richtungs-Tendenz verf\xfcgbar f\xfcr dieses Spiel"),null===(s=O)||void 0===s||null===(d=s.assist)||void 0===d?void 0:d.dyndist)&&((null===(S=O)||void 0===S||null===(k=S.assist)||void 0===k?void 0:k.nodist)?x.push("Spiel mit dynamischer Distanz"):x.push("Spiel mit dynamischer Distanz \u2014 du siehst trotzdem die Distanz zum Host"));return(null===(m=O)||void 0===m||null===(g=m.assist)||void 0===g?void 0:g.nodist)&&x.push("Keine Distanz-Anzeige \u2014 du siehst nur den blinkenden Kreis"),i.a.createElement(X,null,i.a.createElement(ce,{href:"/"}),i.a.createElement(Q,null,i.a.createElement(se,{standard:"Einem Spiel beitreten"}),i.a.createElement(h,{factor:2}),i.a.createElement(b,null,O&&i.a.createElement(a.Fragment,null,i.a.createElement(c.a,{variant:"h4"},"Host: ",null===(j=O)||void 0===j?void 0:j.name),i.a.createElement("br",null),N&&i.a.createElement(c.a,{variant:"body1"},"g\xfcltig f\xfcr die n\xe4chsten ",w," Stunde(n)"),!N&&i.a.createElement(c.a,{variant:"body1"},"Das Spiel ist bereit abgelaufen, du kannst ihm nicht mehr beitreten."),x.length&&i.a.createElement(h,{factor:2}),x.map((function(e){return i.a.createElement(a.Fragment,null,i.a.createElement(f,null,e),i.a.createElement(h,{factor:.5}))}))),!O&&i.a.createElement(c.a,{variant:"h5"},"Im Link befindet sich kein g\xfcltiges Spiel. Bitte deinen Spielleiter, dir den Link noch einmal zu schicken."))),i.a.createElement(Me,null,i.a.createElement(p.a,{onClick:function(){var e;!function(e){T.dispatch({type:R,payload:e})}(O),(null===(e=O.assist)||void 0===e?void 0:e.dyndist)?v("/join/".concat(y,"/confirm-position")):v("/play")},disabled:!O||!N},"Spiel beitreten"),i.a.createElement(E,{href:"/",variant:"text",color:"inherit"},"Abbrechen")))},Pe=n(209),Re=n(196),Fe=n(197),We=function(e){var t=e.open,n=e.text,a=e.onYes,r=e.onNo;return i.a.createElement(Pe.a,{open:t,onClose:r},i.a.createElement(Re.a,null,i.a.createElement(b,null,i.a.createElement(c.a,{variant:"body1"},n))),i.a.createElement(Fe.a,{style:{flexDirection:"row",justifyContent:"center",alignItems:"baseline",paddingBottom:"16px"}},i.a.createElement(p.a,{variant:"text",color:"inherit",onClick:r},"Nein"),i.a.createElement(p.a,{onClick:a},"Ja")))},He=n(45),_e=I("dialogs","show"),Ve=I("dialogs","hide"),Ye=I("dialogs","setInfo"),Ke=(xe={},Object(y.a)(xe,_e,(function(e,t){return Object(M.a)(e,(function(n){n[t]=Object(He.a)(Object(He.a)({},e[t]),{},{show:!0})}))})),Object(y.a)(xe,Ve,(function(e,t){return Object(M.a)(e,(function(n){n[t]=Object(He.a)(Object(He.a)({},e[t]),{},{show:!1})}))})),Object(y.a)(xe,Ye,(function(e,t){var n=t.dialogName,a=t.info;return Object(M.a)(e,(function(t){var i;t[n]=Object(He.a)(Object(He.a)({},a),{},{show:null===(i=e[n])||void 0===i?void 0:i.show})}))})),xe),qe=function(e){var t;(null===(t=z("dialogs")[e])||void 0===t?void 0:t.show)&&T.dispatch({type:Ve,payload:e})};T.injectReducer("dialogs",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return Ke[n]?Ke[n](e,a):e}));var Je,Ue=n(98),Ze=n.n(Ue),Ge=.15,Xe=5,$e=4e3,Qe=Math.log(Ge/Xe)/$e,et=function(){var e=pe(),t=K();if(e&&t){var n,a=Ze()({latitude:e.coords.latitude,longitude:e.coords.longitude},{latitude:t.lat,longitude:t.lng},1),i=(null===(n=t.assist)||void 0===n?void 0:n.dyndist)&&t.initialDistance?Math.log(Ge/Xe)/(1.3*t.initialDistance):Qe,r=Xe*Math.pow(Math.E,i*a);return{distance:a,frequency:r>.05?r:.05}}return{distance:-1,frequency:-1}},tt=n(198),nt=n(199),at=Object(d.a)((function(){return{alignInLine:{verticalAlign:"middle"}}})),it=function(e){var t,n=e.game,a=e.tendency,r=at();if(null===n||void 0===n||null===(t=n.assist)||void 0===t?void 0:t.tendency){if("up"===a)return i.a.createElement(tt.a,{className:r.alignInLine});if("down"===a)return i.a.createElement(nt.a,{className:r.alignInLine})}return""},rt=function(e){var t,n=e.game,a=e.distance;return(null===(t=n.assist)||void 0===t?void 0:t.nodist)?"":"Distanz "+(a<50?"< 50 m":a<500?"< 500 m":"~ "+.5*Math.round(.002*a)+" km")+" "},lt=function(e){var t=e.enable,n=e.frequency,a=e.handleIteration;return i.a.createElement(s.a,{style:{width:"100%",paddingTop:"100%",position:"relative"}},i.a.createElement(s.a,{style:{position:"absolute",top:0,left:0,bottom:0,right:0,animation:t?"ripple ".concat(1/n,"s ease-out infinite"):"none"},className:"ripple",onAnimationIteration:a}))},ot=function(e){return K()?e.children:i.a.createElement(Z,null,i.a.createElement(h,{factor:2.5}),i.a.createElement(b,null,i.a.createElement(c.a,{variant:"h5"},"Es wurde kein aktives Spiel gefunden. Bitte trete erst einem Spiel bei.")))},ct=function(){var e=K(),t=et(),n=t.distance,r=t.frequency,l=function(e){var t=Object(a.useState)(z("dialogs")),n=Object(j.a)(t,2),i=n[0],r=n[1];return Object(a.useLayoutEffect)((function(){return B("dialogs",r)}),[r]),i[e]}("confirm-leave-dialog");Object(o.useTitle)("Finde ".concat(null===e||void 0===e?void 0:e.name," | SightMe"));var u=Object(a.useState)(!0),s=Object(j.a)(u,2),d=s[0],m=s[1],g=Object(a.useState)(.8),f=Object(j.a)(g,2),v=f[0],E=f[1],y=Object(a.useState)(2500),O=Object(j.a)(y,2),S=O[0],k=O[1],w=Object(a.useState)(null),N=Object(j.a)(w,2),x=N[0],D=N[1];S!==n&&(D(n<S?"up":"down"),k(n));return Object(a.useLayoutEffect)((function(){return function(){qe("confirm-leave-dialog")}}),[]),i.a.createElement(X,null,i.a.createElement(ce,{href:"/"}),i.a.createElement(ot,null,i.a.createElement(Q,null,i.a.createElement(se,{standard:"Finde ",colored:null===e||void 0===e?void 0:e.name}),i.a.createElement(h,null),i.a.createElement(b,null,i.a.createElement(lt,{enable:d,frequency:v,handleIteration:function(){v!==r&&(E(r),m(!1),setTimeout((function(){m(!0)}),10))}}),i.a.createElement(h,null),i.a.createElement(c.a,{variant:"body1"},i.a.createElement(rt,{game:e,distance:S}),i.a.createElement(it,{game:e,tendency:x})))),i.a.createElement(Me,{style:{marginBottom:"24px"}},i.a.createElement(p.a,{onClick:function(){setTimeout((function(){return e="confirm-leave-dialog",T.dispatch({type:_e,payload:e});var e}),250)}},"Spiel verlassen")),i.a.createElement(We,{open:(null===l||void 0===l?void 0:l.show)||!1,title:"Spiel verlassen",text:"M\xf6chtest du das Spiel wirklich verlassen?",onNo:function(){return qe("confirm-leave-dialog")},onYes:function(){_(),Object(o.navigate)("/")}})))},ut=function(){return Object(o.useTitle)("Nicht gefunden | SightMe"),i.a.createElement(Z,null,i.a.createElement(b,null,i.a.createElement(c.a,{variant:"body1"},"Seite nicht gefunden :/")))},st=n(105),dt=n(101),mt=n.n(dt),gt=n(204),ft=n(102),ht=n.n(ft),pt=n(210),vt=n(100),Et=n.n(vt),bt=n(208);function jt(e){return i.a.createElement(bt.a,Object.assign({elevation:6,variant:"filled"},e))}var yt=I("message","set"),Ot=I("message","clear"),St=(Je={},Object(y.a)(Je,yt,(function(e,t){var n=t.message,a=t.scope;return Object(M.a)(e,(function(e){e[a]=n}))})),Object(y.a)(Je,Ot,(function(e,t){return Object(M.a)(e,(function(e){e[t]=null}))})),Je),kt={global:null};T.injectReducer("message",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return St[n]?St[n](e,a):e}));var wt=function(e){var t=e.stateName,n=e.useAlert,r=void 0===n||n,l=e.severity,o=void 0===l?"error":l,c=e.actionName,u=void 0===c?"R\xfcckg\xe4ngig":c,s=e.action,d=void 0===s?null:s,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",t=Object(a.useState)(z("message")),n=Object(j.a)(t,2),i=n[0],r=n[1];return Object(a.useLayoutEffect)((function(){return B("message",r)}),[r]),i[e]}(t),g=m,f=!!m,h=Object(a.useState)(""),v=Object(j.a)(h,2),E=v[0],b=v[1],y=function(e,n){"clickaway"!==n&&f&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";T.dispatch({type:Ot,payload:e})}(t)},O=null;return r&&(O=i.a.createElement(jt,{severity:o,onClose:y},E)),Object(a.useLayoutEffect)((function(){g&&b(g)}),[g]),i.a.createElement(pt.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:f,autoHideDuration:6e3,message:!r&&E,onClose:y,action:!r&&i.a.createElement(i.a.Fragment,null,d&&i.a.createElement(p.a,{color:"secondary",size:"small",onClick:d},u),i.a.createElement(ie.a,{size:"small","aria-label":"close",color:"inherit",onClick:y},i.a.createElement(Et.a,{fontSize:"small"})))},O)},Nt=Object(d.a)((function(){return{hugeVerticalPadding:{paddingTop:"10vh",paddingBottom:"5vh",paddingLeft:"1em",paddingRight:"1em",textAlign:"center"},hugeVerticalPaddingNoHorizontal:{paddingTop:"10vh",paddingBottom:"5vh",textAlign:"center"}}})),xt=function(e){var t=e.children,n=e.noHorizontalPadding,a=Nt();return i.a.createElement(s.a,{className:n?a.hugeVerticalPaddingNoHorizontal:a.hugeVerticalPadding},t)},Dt=n(201),Tt=function(e){return i.a.createElement(Dt.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),v(e.href)}}))},Ct=n(202),At=Object(d.a)((function(){return{container:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"flex-start"},link:{overflowWrap:"anywhere",wordBreak:"break-all",flexGrow:1},shareIconBox:{margin:"0px 16px"}}})),zt=function(){Object(o.useTitle)("Link zum Spiel teilen | SightMe");var e=At(),t=Ce().link;return i.a.createElement(a.Fragment,null,i.a.createElement(ce,{href:"/"}),i.a.createElement(Z,null,t&&i.a.createElement(a.Fragment,null,i.a.createElement(xt,null,i.a.createElement(c.a,{variant:"h4",component:"h1"},"Spiel erstellt!")),i.a.createElement(b,null,i.a.createElement(f,null,"Das Spiel ist jetzt f\xfcr 24 Stunden g\xfcltig. Teile den Link, damit deine Freunde deinem Spiel beitreten k\xf6nnen.")),i.a.createElement(h,{factor:2}),i.a.createElement(ze,{standard:"Link zum Teilen"}),i.a.createElement(Tt,{href:t,color:"inherit",className:e.link},t),i.a.createElement(h,null),i.a.createElement(b,null,i.a.createElement(p.a,{onClick:function(){navigator.share?navigator.share({url:t}):function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";T.dispatch({type:yt,payload:{message:e,scope:t}})}("Dein Browser unterst\xfctzt das Teilen von Links nicht. Bitte kopiere den Link und verschicke ihn manuell.")}},i.a.createElement(Ct.a,{style:{marginLeft:"-6px",marginRight:"16px"}}),"Teilen"))),!t&&i.a.createElement(xt,null,i.a.createElement(c.a,{variant:"h4",component:"h1"},"Bitte erstelle zuerst ein Spiel."))))},Bt=n(203),It=Object(d.a)((function(){return{bottom:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},link:{verticalAlign:"top"}}})),Mt=function(){Object(o.useTitle)("\xdcber | SightMe");var e=It();return i.a.createElement(X,null,i.a.createElement(ce,{href:"/"}),i.a.createElement(Q,null,i.a.createElement(se,{standard:"\xdcber ",colored:"SightMe"}),i.a.createElement(c.a,{variant:"body1"},'SightMe ist durch die Idee eines Freundes entstanden. Sein Vater und ein paar Freunde von ihm haben fr\xfcher ein Spiel gespielt, bei dem sich einer in der Stadt mit seinem Auto "versteckt". Derjenige hat dann sein CB-Funkger\xe4t angeschaltet und die anderen mussten ihn dann Anhand der Signalst\xe4rke von ihm finden. Aus dem Spiel wurde die Idee f\xfcr eine App, und sp\xe4ter dann diese App.'),i.a.createElement(h,null),i.a.createElement(ze,{standard:"Funktionsweise"}),i.a.createElement(c.a,{variant:"body1"},"Wenn der Spielleiter ein Spiel erstellt, werden alle ben\xf6tigten Spieldaten in einem Link mittels Base64 zusammengefasst. Wenn die anderen Teilnehmer diesen Link \xf6ffnen, wird anhand der Distanz zum Ziel das blinken des Kreises berechnet."),i.a.createElement(h,null),i.a.createElement(ze,{standard:"Links"}),i.a.createElement(c.a,{variant:"body1"},i.a.createElement(Bt.a,null)," ",i.a.createElement(Dt.a,{href:"https://github.com/Lennart401/sightme",target:"_blank",className:e.link},"github.com/Lennart401/sightme"))),i.a.createElement(Z,null,i.a.createElement(b,{className:e.bottom},i.a.createElement(c.a,{variant:"body2"},"Version ","1.1.0"),i.a.createElement(c.a,{variant:"body2"},"\xa9 2020 Lennart Popkes"))))},Lt=n(205),Pt=function(e,t){var n=Object(a.useState)(""),r=Object(j.a)(n,2),l=r[0],o=r[1],c=Object(a.useState)(""),u=Object(j.a)(c,2),s=u[0],d=u[1];return{validate:function(){return 0===l.length&&d("Eingabe darf nicht leer sein!"),l.length>0&&l.length<=t},text:l,component:i.a.createElement(Lt.a,Object.assign({},e,{value:l,error:s.length>0,helperText:s,onChange:function(e){var n=e.target.value;n.length>t?d("Eingabe ist zu lang!"):d(""),o(n)}}))}},Rt=function(){Object(o.useTitle)("Spiel hosten | SightMe");var e=Pt({placeholder:"Dein Name"},20),t=e.validate,n=e.text,r=e.component,l=Te();Object(a.useEffect)((function(){l.latitude&&l.longitude||Object(o.navigate)("/host")}),[l]);return i.a.createElement(X,null,i.a.createElement(ce,{href:"/host"}),i.a.createElement(Q,null,i.a.createElement(xt,{noHorizontalPadding:!0},i.a.createElement(c.a,{variant:"h4",component:"h1"},"Bitte gib deinen Namen ein.")),i.a.createElement(b,null,i.a.createElement(f,null,"Damit wissen die Teilnehmer, dass sie wirklich deinem Spiel beitreten."),i.a.createElement(h,null),r)),i.a.createElement(Me,null,i.a.createElement(p.a,{onClick:function(){var e;t()&&(e=n,T.dispatch({type:be,payload:e}),v("game-options"))}},"Weiter"),i.a.createElement(E,{variant:"text",color:"inherit",href:"/host"},"Zur\xfcck")))},Ft=n(211),Wt=Object(d.a)((function(){return{wrapper:{display:"flex",justifyContent:"space-between",alignItems:"center"}}})),Ht=function(e){var t=e.label,n=e.control,a=Wt();return i.a.createElement(s.a,{className:a.wrapper},i.a.createElement(c.a,{variant:"body1"},t),n)},_t=function(){Object(o.useTitle)("Spiel hosten | SightMe");var e=De(ke.TENDENCY),t=De(ke.DYNAMIC_DISTANCE),n=De(ke.NO_DISTANCE),r=Te();Object(a.useEffect)((function(){r.latitude&&r.longitude||Object(o.navigate)("/host"),r.name||Object(o.navigate)("/host/enter-name")}),[r]);return i.a.createElement(X,null,i.a.createElement(ce,{href:"enter-name"}),i.a.createElement(Q,null,i.a.createElement(xt,{noHorizontalPadding:!0},i.a.createElement(c.a,{variant:"h4",component:"h1"},"Spieloptionen")),i.a.createElement(Ht,{label:"Richtungs-Tendenz anzeigen",control:i.a.createElement(Ft.a,{checked:e,onChange:function(e){return we(ke.TENDENCY,e.target.checked)}})}),i.a.createElement(f,null,"Zeige den Teilnehmern an, ob sie auf dich zu oder von dir weg laufen."),i.a.createElement(h,null),i.a.createElement(Ht,{label:"Dynamisch Distanz verwenden",control:i.a.createElement(Ft.a,{checked:t,onChange:function(e){return we(ke.DYNAMIC_DISTANCE,e.target.checked)}})}),i.a.createElement(f,null,'Wenn eingeschaltet, wird der blinkende Kreis beim Beitreten des Spiels dynamisch berechnet. Sinnvoll zusammen mit "Distanz ausblenden", wenn man nicht weit von den Teilnehmern entfernt ist.'),i.a.createElement(h,null),i.a.createElement(Ht,{label:"Distanz ausblenden",control:i.a.createElement(Ft.a,{checked:n,onChange:function(e){return we(ke.NO_DISTANCE,e.target.checked)}})}),i.a.createElement(f,null,"Den Teilnehmern nicht die Distanz zu dir anzeigen.")),i.a.createElement(Me,null,i.a.createElement(p.a,{onClick:function(){T.dispatch({type:Ee,payload:{}}),v("/share",!0)}},"Weiter"),i.a.createElement(E,{variant:"text",color:"inherit",href:"enter-name"},"Zur\xfcck")))},Vt=function(e){var t=e.gameBase64,n=pe(),a=et().distance;return i.a.createElement(X,null,i.a.createElement(ce,{href:"/join/".concat(t)}),i.a.createElement(ot,null,i.a.createElement(Q,null,i.a.createElement(xt,null,i.a.createElement(c.a,{variant:"h4",component:"h1"},"Bitte best\xe4tige deine Position.")),i.a.createElement(b,null,i.a.createElement(f,null,"Der Host hat festgelegt, dass dieses Spiel mit dynamischer Distanz gespielt wird. Bitte best\xe4tige, dass du wirklich dort bist, wo du auf der Karte angezeigt wirst, damit wir den blinkenden Kreis richtig berechnen k\xf6nnen.")),i.a.createElement(h,null),i.a.createElement(he,{location:n})),i.a.createElement(Me,null,i.a.createElement(p.a,{onClick:function(){var e;e=a,T.dispatch({type:W,payload:e}),v("/play")}},"Position best\xe4tigen"),i.a.createElement(E,{href:"/join/".concat(t),variant:"text",color:"inherit"},"Zur\xfcck"))))},Yt=Object(st.a)({palette:{primary:mt.a,secondary:ht.a},overrides:{MuiButton:{root:{borderRadius:"5em"},label:{paddingLeft:"1em",paddingRight:"1em",paddingTop:"0.3em",paddingBottom:"0.3em"}},MuiIconButton:{root:{color:"#000"}},MuiOutlinedInput:{root:{borderRadius:"5em"},input:{padding:"16px 24px"}},MuiDialogActions:{root:{flexDirection:"column","& > :not(:first-child)":{marginTop:"6px"}}},MuiSnackbarContent:{root:{flexWrap:"nowrap"}},MuiSwitch:{root:{width:"48px"},switchBase:{"&$checked":{transform:"translateX(10px)"}}}},props:{MuiButton:{color:"secondary",variant:"contained"},MuiTextField:{variant:"outlined",fullWidth:!0},MuiDialogActions:{disableSpacing:!0}}}),Kt={"/":function(){return i.a.createElement(te,null)},"/host":function(){return i.a.createElement(Be,null)},"/host/enter-name":function(){return i.a.createElement(Rt,null)},"/host/game-options":function(){return i.a.createElement(_t,null)},"/share":function(){return i.a.createElement(zt,null)},"/join/:game":function(e){var t=e.game;return i.a.createElement(Le,{gameBase64:t})},"/join/:game/confirm-position":function(e){var t=e.game;return i.a.createElement(Vt,{gameBase64:t})},"/play":function(){return i.a.createElement(ct,null)},"/about":function(){return i.a.createElement(Mt,null)}},qt=function(){var e=Object(o.useRoutes)(Kt);return i.a.createElement(gt.a,{theme:Yt},i.a.createElement(wt,{stateName:"global",useAlert:!1}),e||i.a.createElement(ut,null))},Jt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ut(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Zt=n(104),Gt=n(103);Object(o.setBasepath)("/sightme"),P()().locale("de"),l.a.render(i.a.createElement(Zt.a,{store:T},i.a.createElement(Gt.a,{loading:null,persistor:C},i.a.createElement(qt,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sightme",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sightme","/service-worker.js");Jt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ut(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ut(t,e)}))}}()}},[[119,1,2]]]);
//# sourceMappingURL=main.7af9801e.chunk.js.map