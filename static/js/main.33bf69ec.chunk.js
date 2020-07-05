(this.webpackJsonpsightme=this.webpackJsonpsightme||[]).push([[0],{122:function(e,t,n){e.exports=n(153)},127:function(e,t,n){},128:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(127),n(128),n(30)),c=n(105),u=function(e){var t=e.standard,n=e.colored,a=e.variant,i=e.component;return r.a.createElement(c.a,{component:i||"div",variant:a||"body1"},r.a.createElement(c.a,{component:"span",variant:a||"body1"},t),r.a.createElement(c.a,{component:"span",color:"secondary",variant:a||"body1"},n))},s=n(206),d=n(189),m=Object(d.a)((function(){return{hugeVerticalPadding:{paddingTop:"25vh",paddingBottom:"15vh",paddingLeft:"1em",paddingRight:"1em",textAlign:"center"},hugeVerticalPaddingNoHorizontal:{paddingTop:"25vh",paddingBottom:"15vh",textAlign:"center"}}})),f=function(e){var t=e.children,n=e.noHorizontalPadding,a=m();return r.a.createElement(s.a,{className:n?a.hugeVerticalPaddingNoHorizontal:a.hugeVerticalPadding},t)},g=function(e){var t=e.children;return r.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{marginLeft:"2em",marginRight:"2em"}},t)},p=function(e){var t=e.factor,n=2*(void 0===t?1:t);return r.a.createElement("p",{style:{marginTop:n+"em"}})},v=n(190),h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];setTimeout((function(){return l.navigate.apply(void 0,t)}),250)},b=function(e){setTimeout(e,250)},E=function(e){return r.a.createElement(v.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),h(e.href)}}),e.children)},y=function(e){return r.a.createElement(s.a,Object.assign({},e,{style:{textAlign:"center"}}),e.children)},j=n(13),O=n(16),k=n(28),w=n(95),S=n.n(w),x=n(69),N={},C=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c)(),B={key:"active-game",storage:S.a,whitelist:["active-game"]},A=Object(k.d)(Object(x.a)(B,(function(e){return e})),C),T=Object(x.b)(A);A.injectReducer=function(e,t){N[e]=t,A.replaceReducer(Object(x.a)(B,Object(k.b)(N)))};var L,P=function(e){return A.getState()[e]},z=function(e,t){var n=P(e);return A.subscribe((function(){n!==P(e)&&(n=P(e),t(n))}))},D=function(e,t){return"".concat(e,"/").concat(t)},R=n(18),I=n(25),F=n.n(I),M=D("active-game","set-active-game"),W=D("active-game","leave-active-game"),H=(L={},Object(O.a)(L,M,(function(e,t){return Object(R.a)(e,(function(e){return console.log("set-active-game "+t),t}))})),Object(O.a)(L,W,(function(e){return Object(R.a)(e,(function(e){delete e.name,delete e.expiresAt,delete e.lat,delete e.lng}))})),L),V=function(){A.dispatch({type:W,payload:{}})};A.injectReducer("active-game",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return H[n]?H[n](e,a):e}));var _,q=function(){var e=Object(a.useState)(P("active-game")),t=Object(j.a)(e,2),n=t[0],r=t[1];if(Object(a.useLayoutEffect)((function(){return z("active-game",r)}),[r]),!n||!F()().isAfter(n.expiresAt))return(null===n||void 0===n?void 0:n.name)?n:void 0;V()},J=function(){var e=q();return r.a.createElement(a.Fragment,null,r.a.createElement(f,null,r.a.createElement(u,{variant:"h2",component:"h1",standard:"Sight",colored:"Me"})),r.a.createElement(y,null,r.a.createElement(E,{href:"/host"},"Spiel erstellen"),r.a.createElement(p,null),e&&r.a.createElement(E,{href:"/play"},e.name,"'s Spiel"),!e&&r.a.createElement(g,null,"Du nimmst aktuell an keinem aktiven Spiel teil. Du erh\xe4ltst vom Spielleiter einen Link zum Beitreten.")))},U=n(192),G=n(193),X=n(191),Y=function(e){return r.a.createElement(X.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),h(e.href)}}),e.children)},K=n(194),$=Object(d.a)((function(e){return{offsetFromTop:{paddingTop:"3vh"},offset:e.mixins.toolbar}})),Q=function(e){var t=e.href,n=e.onClick,i=$();return t&&(n=void 0),r.a.createElement(a.Fragment,null,r.a.createElement(U.a,{position:"sticky",className:i.offsetFromTop,color:"transparent",elevation:0},r.a.createElement(G.a,null,t&&r.a.createElement(Y,{href:t,edge:"start","aria-label":"back"},r.a.createElement(K.a,null)),n&&r.a.createElement(X.a,{onClick:n,edge:"start","aria-label":"back"},r.a.createElement(K.a,null)))))},Z=function(e){var t=e.children;return r.a.createElement(s.a,{style:{marginLeft:"16px",marginRight:"16px"}},t)},ee=Object(d.a)((function(){return{titlePadding:{paddingTop:"0.5em",paddingBottom:"3em"}}})),te=function(e){var t=e.standard,n=e.colored,a=ee();return n?r.a.createElement(s.a,{className:a.titlePadding},r.a.createElement(u,{variant:"h6",component:"h1",standard:t,colored:n})):r.a.createElement(s.a,{className:a.titlePadding},r.a.createElement(c.a,{variant:"h6",component:"h1"},t))},ne=n(212),ae=n(213),re=n(195),ie=n(214),oe=function(e){var t,n,i=e.location,o=[null===i||void 0===i||null===(t=i.coords)||void 0===t?void 0:t.latitude,null===i||void 0===i||null===(n=i.coords)||void 0===n?void 0:n.longitude],l=Object(a.useState)(13),u=Object(j.a)(l,2),s=u[0];u[1];return r.a.createElement(a.Fragment,null,i&&r.a.createElement(ne.a,{center:o,zoom:s,style:{height:"30vmax"}},r.a.createElement(ae.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(re.a,{position:o},r.a.createElement(ie.a,null,"Deine Position"))),!i&&r.a.createElement("div",{style:{width:"100%",height:"30vmax"}},r.a.createElement(y,null,r.a.createElement(c.a,{variant:"body2"},"GPS-Position ist unbekannt. Bitte erlaube den Standort f\xfcr diese App"))))},le=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=void 0;return navigator.geolocation&&(e=navigator.geolocation.watchPosition((function(e){r(e)}))),function(){e&&navigator.geolocation.clearWatch(e)}}),[]),n},ce=n(43),ue=D("dialogs","show"),se=D("dialogs","hide"),de=D("dialogs","setInfo"),me=(_={},Object(O.a)(_,ue,(function(e,t){return Object(R.a)(e,(function(n){n[t]=Object(ce.a)(Object(ce.a)({},e[t]),{},{show:!0})}))})),Object(O.a)(_,se,(function(e,t){return Object(R.a)(e,(function(n){n[t]=Object(ce.a)(Object(ce.a)({},e[t]),{},{show:!1})}))})),Object(O.a)(_,de,(function(e,t){var n=t.dialogName,a=t.info;return Object(R.a)(e,(function(t){var r;t[n]=Object(ce.a)(Object(ce.a)({},a),{},{show:null===(r=e[n])||void 0===r?void 0:r.show})}))})),_),fe=function(e){return A.dispatch({type:ue,payload:e})},ge=function(e){var t;(null===(t=P("dialogs")[e])||void 0===t?void 0:t.show)&&A.dispatch({type:se,payload:e})};A.injectReducer("dialogs",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return me[n]?me[n](e,a):e}));var pe,ve=function(e){var t=Object(a.useState)(P("dialogs")),n=Object(j.a)(t,2),r=n[0],i=n[1];return Object(a.useLayoutEffect)((function(){return z("dialogs",i)}),[i]),r[e]},he=n(209),be=n(197),Ee=n(199),ye=Object(d.a)((function(){return{hugeVerticalPadding:{paddingTop:"10vh",paddingBottom:"5vh",paddingLeft:"1em",paddingRight:"1em",textAlign:"center"},hugeVerticalPaddingNoHorizontal:{paddingTop:"10vh",paddingBottom:"5vh",textAlign:"center"}}})),je=function(e){var t=e.children,n=e.noHorizontalPadding,a=ye();return r.a.createElement(s.a,{className:n?a.hugeVerticalPaddingNoHorizontal:a.hugeVerticalPadding},t)},Oe=n(205),ke=function(e,t){var n=Object(a.useState)(""),i=Object(j.a)(n,2),o=i[0],l=i[1],c=Object(a.useState)(""),u=Object(j.a)(c,2),s=u[0],d=u[1];return{validate:function(){return 0===o.length&&d("Eingabe darf nicht leer sein!"),o.length>0&&o.length<=t},text:o,component:r.a.createElement(Oe.a,Object.assign({},e,{value:o,error:s.length>0,helperText:s,onChange:function(e){var n=e.target.value;n.length>t?d("Eingabe ist zu lang!"):d(""),l(n)}}))}},we=n(68),Se=D("hosting","generate-link"),xe=D("hosting","set-username"),Ne=D("hosting","set-create-date"),Ce=D("hosting","set-lat-lng"),Be=D("hosting","set-enable-tendency"),Ae=(pe={},Object(O.a)(pe,Se,(function(e){return Object(R.a)(e,(function(t){var n={name:e.name,expiresAt:e.expiresAt,lat:e.latitude,lng:e.longitude,assist:{tendency:e["assist-tendency"]}},a=we.Base64.encodeURI(JSON.stringify(n));t.link=window.origin+"/sightme/join/"+a}))})),Object(O.a)(pe,xe,(function(e,t){return Object(R.a)(e,(function(e){e.name=t}))})),Object(O.a)(pe,Ne,(function(e,t){return Object(R.a)(e,(function(e){e.expiresAt=t}))})),Object(O.a)(pe,Ce,(function(e,t){var n=t.lat,a=t.lng;return Object(R.a)(e,(function(e){e.latitude=n,e.longitude=a}))})),Object(O.a)(pe,Be,(function(e,t){return Object(R.a)(e,(function(e){e["assist-tendency"]=t}))})),pe),Te={"assist-tendency":!0};A.injectReducer("hosting",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return Ae[n]?Ae[n](e,a):e}));var Le,Pe=n(211),ze=n(198),De=function(e){var t=e.onSubmit,n=e.onClose,i=ve("enter-name-dialog"),o=function(){var e=Object(a.useState)(P("hosting")),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.useLayoutEffect)((function(){return z("hosting",r)}),[r]),n["assist-tendency"]}(),l=ke({placeholder:"Dein Name"},20),u=l.validate,s=l.text,d=l.component;return r.a.createElement(he.a,{fullScreen:!0,open:(null===i||void 0===i?void 0:i.show)||!1,onClose:n},r.a.createElement(Q,{onClick:n}),r.a.createElement(be.a,null,r.a.createElement(je,{noHorizontalPadding:!0},r.a.createElement(c.a,{variant:"h4",component:"h1"},"Bitte gib deinen Namen ein.")),r.a.createElement(y,null,r.a.createElement(g,null,"Damit wissen die Teilnehmer, dass sie wirklich deinem Spiel beitreten."),r.a.createElement(p,null),d,r.a.createElement(p,null),r.a.createElement(ze.a,{control:r.a.createElement(Pe.a,{checked:o,onChange:function(e){return t=e.target.checked,A.dispatch({type:Be,payload:t});var t}}),label:"Tendenz aktivieren?",labelPlacement:"start"}))),r.a.createElement(Ee.a,null,r.a.createElement(v.a,{onClick:function(){var e;u()&&(e=s,A.dispatch({type:xe,payload:e}),t())}},"Spiel erstellen"),r.a.createElement(v.a,{variant:"text",color:"inherit",onClick:n},"Abbrechen")))},Re=n(200),Ie=function(e){return r.a.createElement(Re.a,Object.assign({},e,{onClick:function(t){t.preventDefault(),h(e.href)}}))},Fe=n(201),Me=Object(d.a)((function(){return{titlePadding:{paddingTop:"0.5em",paddingBottom:"0.5em"}}})),We=function(e){var t=e.standard,n=e.colored,a=Me();return n?r.a.createElement(s.a,{className:a.titlePadding},r.a.createElement(u,{variant:"subtitle2",component:"h1",standard:t,colored:n})):r.a.createElement(s.a,{className:a.titlePadding},r.a.createElement(c.a,{variant:"subtitle2",component:"h1"},t))},He=D("message","set"),Ve=D("message","clear"),_e=(Le={},Object(O.a)(Le,He,(function(e,t){var n=t.message,a=t.scope;return Object(R.a)(e,(function(e){e[a]=n}))})),Object(O.a)(Le,Ve,(function(e,t){return Object(R.a)(e,(function(e){e[t]=null}))})),Le),qe={global:null},Je=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return A.dispatch({type:He,payload:{message:e,scope:t}})};A.injectReducer("message",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return _e[n]?_e[n](e,a):e}));var Ue=Object(d.a)((function(){return{container:{display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"space-between",alignItems:"flex-start"},link:{overflowWrap:"anywhere",flexGrow:1},shareIconBox:{margin:"0px 16px"}}})),Ge=function(){var e=Ue(),t=le(),n=function(){var e=Object(a.useState)(P("hosting")),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.useLayoutEffect)((function(){return z("hosting",r)}),[r]),n.link}(),i=function(){return b((function(){return ge("enter-name-dialog")}))};return r.a.createElement(a.Fragment,null,r.a.createElement(Q,{href:"/"}),r.a.createElement(Z,null,r.a.createElement(te,{standard:"Ein Spiel hosten"}),r.a.createElement(We,{standard:"Karte"}),r.a.createElement(oe,{location:t}),r.a.createElement(p,null),n&&r.a.createElement(a.Fragment,null,r.a.createElement(We,{standard:"Link zum Teilen"}),r.a.createElement(s.a,{className:e.container},r.a.createElement(Ie,{href:n,color:"inherit",className:e.link},n),r.a.createElement(s.a,{className:e.shareIconBox},r.a.createElement(X.a,{onClick:function(){navigator.share?navigator.share({url:n}):Je("Dein Browser unterst\xfctzt das Teilen von Links nicht. Bitte kopiere den Link und verschicke ihn manuell.")}},r.a.createElement(Fe.a,null)))),r.a.createElement(p,null)),r.a.createElement(y,null,r.a.createElement(v.a,{disabled:!t,onClick:function(){var e,n,a;e=t.coords.latitude,n=t.coords.longitude,A.dispatch({type:Ce,payload:{lat:e,lng:n}}),a=F()().add(1,"days").utc().format(),A.dispatch({type:Ne,payload:a}),b((function(){return fe("enter-name-dialog")}))}},n?"Neues ":"","Spiel erstellen"),!t&&r.a.createElement(a.Fragment,null,r.a.createElement(p,null),r.a.createElement(g,null,"Bitte erlaube den Standort f\xfcr diese App")))),r.a.createElement(De,{onSubmit:function(){i(),A.dispatch({type:Se,payload:{}}),Je("Das Spiel wurde erstellen! Du kannst den Link zum Spiel jetzt teilen oder noch ein neues Spiel erstellen.")},onClose:i}))},Xe=Object(d.a)((function(){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",position:"absolute",bottom:0,width:"100%",marginBottom:"8px"}}})),Ye=function(e){var t,n,i,o=e.gameBase64,l=Xe(),u=void 0;try{u=JSON.parse(we.Base64.decode(o))}catch(f){}var d=F()(null===(t=u)||void 0===t?void 0:t.expiresAt).diff(F()(),"hours"),m=F()().isBefore(F()(null===(n=u)||void 0===n?void 0:n.expiresAt));return r.a.createElement(a.Fragment,null,r.a.createElement(Q,{href:"/"}),r.a.createElement(Z,null,r.a.createElement(te,{standard:"Einem Spiel beitreten"}),r.a.createElement(p,{factor:2}),r.a.createElement(y,null,u&&r.a.createElement(a.Fragment,null,r.a.createElement(c.a,{variant:"h4"},"Host: ",null===(i=u)||void 0===i?void 0:i.name),r.a.createElement("br",null),m&&r.a.createElement(c.a,{variant:"body1"},"g\xfcltig f\xfcr die n\xe4chsten ",d," Stunde(n)"),!m&&r.a.createElement(c.a,{variant:"body1"},"Das Spiel ist bereit abgelaufen, du kannst ihm nicht mehr beitreten.")),!u&&r.a.createElement(c.a,{variant:"h5"},"Im Link befindet sich kein g\xfcltiges Spiel. Bitte deinen Spielleiter, dir den Link noch einmal zu schicken."))),r.a.createElement(s.a,{className:l.container},r.a.createElement(v.a,{onClick:function(){!function(e){A.dispatch({type:M,payload:e})}(u),h("/play")},disabled:!u||!m},"Spiel beitreten"),r.a.createElement(E,{href:"/",variant:"text",color:"inherit",style:{marginTop:"6px"}},"Abbrechen")))},Ke=function(e){var t=e.open,n=e.text,a=e.onYes,i=e.onNo;return r.a.createElement(he.a,{open:t,onClose:i},r.a.createElement(be.a,null,r.a.createElement(y,null,r.a.createElement(c.a,{variant:"body1"},n))),r.a.createElement(Ee.a,{style:{flexDirection:"row",justifyContent:"center",alignItems:"baseline",paddingBottom:"16px"}},r.a.createElement(v.a,{variant:"text",color:"inherit",onClick:i},"Nein"),r.a.createElement(v.a,{onClick:a},"Ja")))},$e=n(98),Qe=n.n($e),Ze=function(){var e=le(),t=q();if(e&&t){var n=Qe()({latitude:e.coords.latitude,longitude:e.coords.longitude},{latitude:t.lat,longitude:t.lng},1);return{distance:n,frequency:5*Math.pow(Math.E,-.001168*n)}}return{distance:-1,frequency:-1}},et=n(202),tt=n(203),nt=Object(d.a)((function(){return{alignInLine:{verticalAlign:"middle"}}})),at=function(e){var t,n=e.game,a=e.tendency,i=nt();if(null===n||void 0===n||null===(t=n.assist)||void 0===t?void 0:t.tendency){if("up"===a)return r.a.createElement(et.a,{className:i.alignInLine});if("down"===a)return r.a.createElement(tt.a,{className:i.alignInLine})}return""},rt=function(e){var t=e.distance;return t<50?"< 50 m ":t<500?"< 500 m":"~ "+.5*Math.round(.002*t)+" km"},it=function(e){var t=e.enable,n=e.frequency,a=e.handleIteration;return r.a.createElement(s.a,{style:{width:"100%",paddingTop:"100%",position:"relative"}},r.a.createElement(s.a,{style:{position:"absolute",top:0,left:0,bottom:0,right:0,animation:t?"ripple ".concat(1/n,"s ease-out infinite"):"none"},className:"ripple",onAnimationIteration:a}))},ot=Object(d.a)((function(){return{buttonWrapper:{position:"fixed",bottom:0,width:"100%",marginBottom:"24px"}}})),lt=function(){var e=q(),t=Ze(),n=t.distance,i=t.frequency,o=ot(),u=ve("confirm-leave-dialog"),s=Object(a.useState)(!0),d=Object(j.a)(s,2),m=d[0],f=d[1],g=Object(a.useState)(.8),h=Object(j.a)(g,2),E=h[0],O=h[1],k=Object(a.useState)(2500),w=Object(j.a)(k,2),S=w[0],x=w[1],N=Object(a.useState)(null),C=Object(j.a)(N,2),B=C[0],A=C[1];return Object(a.useLayoutEffect)((function(){return function(){ge("confirm-leave-dialog")}}),[]),r.a.createElement(a.Fragment,null,r.a.createElement(Q,{href:"/"}),e&&r.a.createElement(a.Fragment,null,r.a.createElement(Z,null,r.a.createElement(te,{standard:"Finde ",colored:e.name}),r.a.createElement(p,null),r.a.createElement(y,null,r.a.createElement(it,{enable:m,frequency:E,handleIteration:function(){E!==i&&(O(i),f(!1),setTimeout((function(){f(!0)}),10),A(n<S?"up":"down"),x(n))}}),r.a.createElement(p,null),r.a.createElement(c.a,{variant:"body1"},"Distanz ",r.a.createElement(rt,{distance:S})," ",r.a.createElement(at,{game:e,tendency:B})))),r.a.createElement(p,{factor:3}),r.a.createElement(y,{className:o.buttonWrapper},r.a.createElement(v.a,{onClick:function(){return b((function(){return fe("confirm-leave-dialog")}))}},"Spiel verlassen")),r.a.createElement(Ke,{open:(null===u||void 0===u?void 0:u.show)||!1,title:"Spiel verlassen",text:"M\xf6chtest du das Spiel wirklich verlassen?",onNo:function(){return ge("confirm-leave-dialog")},onYes:function(){V(),Object(l.navigate)("/")}})),!e&&r.a.createElement(Z,null,r.a.createElement(te,{standard:"Finde ",colored:"???"}),r.a.createElement(p,{factor:2}),r.a.createElement(y,null,r.a.createElement(c.a,{variant:"h5"},"Es wurde kein aktives Spiel gefunden. Bitte trete erst einem Spiel bei."))))},ct=function(){return r.a.createElement(c.a,{variant:"body1"},"Seite nicht gefunden :/")},ut=n(104),st=n(100),dt=n.n(st),mt=n(204),ft=n(101),gt=n.n(ft),pt=n(210),vt=n(99),ht=n.n(vt),bt=n(208);function Et(e){return r.a.createElement(bt.a,Object.assign({elevation:6,variant:"filled"},e))}var yt=function(e){var t=e.stateName,n=e.useAlert,i=void 0===n||n,o=e.severity,l=void 0===o?"error":o,c=e.actionName,u=void 0===c?"R\xfcckg\xe4ngig":c,s=e.action,d=void 0===s?null:s,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",t=Object(a.useState)(P("message")),n=Object(j.a)(t,2),r=n[0],i=n[1];return Object(a.useLayoutEffect)((function(){return z("message",i)}),[i]),r[e]}(t),f=m,g=!!m,p=Object(a.useState)(""),h=Object(j.a)(p,2),b=h[0],E=h[1],y=function(e,n){"clickaway"!==n&&g&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";A.dispatch({type:Ve,payload:e})}(t)},O=null;return i&&(O=r.a.createElement(Et,{severity:l,onClose:y},b)),Object(a.useLayoutEffect)((function(){f&&E(f)}),[f]),r.a.createElement(pt.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:g,autoHideDuration:6e3,message:!i&&b,onClose:y,action:!i&&r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(v.a,{color:"secondary",size:"small",onClick:d},u),r.a.createElement(X.a,{size:"small","aria-label":"close",color:"inherit",onClick:y},r.a.createElement(ht.a,{fontSize:"small"})))},O)},jt=Object(ut.a)({palette:{primary:dt.a,secondary:gt.a},overrides:{MuiButton:{root:{borderRadius:"5em"},label:{paddingLeft:"1em",paddingRight:"1em",paddingTop:"0.3em",paddingBottom:"0.3em"}},MuiIconButton:{root:{color:"#000"}},MuiOutlinedInput:{root:{borderRadius:"5em"},input:{padding:"16px 24px"}},MuiDialogActions:{root:{flexDirection:"column","& > :not(:first-child)":{marginTop:"6px"}}},MuiSnackbarContent:{root:{flexWrap:"nowrap"}}},props:{MuiButton:{color:"secondary",variant:"contained"},MuiTextField:{variant:"outlined",fullWidth:!0},MuiDialogActions:{disableSpacing:!0}}}),Ot={"/":function(){return r.a.createElement(J,null)},"/host":function(){return r.a.createElement(Ge,null)},"/join/:game":function(e){var t=e.game;return r.a.createElement(Ye,{gameBase64:t})},"/play":function(){return r.a.createElement(lt,null)}},kt=function(){var e=Object(l.useRoutes)(Ot);return r.a.createElement(mt.a,{theme:jt},r.a.createElement(yt,{stateName:"global",useAlert:!1}),e||r.a.createElement(ct,null))},wt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function St(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var xt=n(103),Nt=n(102);Object(l.setBasepath)("/sightme"),F()().locale("de"),o.a.render(r.a.createElement(xt.a,{store:A},r.a.createElement(Nt.a,{loading:null,persistor:T},r.a.createElement(kt,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sightme",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sightme","/service-worker.js");wt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):St(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):St(t,e)}))}}()}},[[122,1,2]]]);
//# sourceMappingURL=main.33bf69ec.chunk.js.map