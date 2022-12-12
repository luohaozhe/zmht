import{r as a,d as P,X as Y,a4 as Z,_ as G,o as q,c as T,h as e,t as X,u as z,b as c,a5 as Q,a6 as K,p as W,g as $}from"./index-702e1de5.js";import j from"./chinaMapChart-1fff17f9.js";import L from"./AgeRatioChart-9240b794.js";import J from"./AnnualUseChart-36fd0fad.js";import ee from"./HotPlateChart-67a799dc.js";import ae from"./MaleFemaleRatioChart-2ff2aba0.js";import te from"./OverNext30Chart-214ab157.js";import ue from"./PlatformSourceChart-e590e047.js";import ne from"./RealTimeAccessChart-a6355eab.js";import{_ as se}from"./_plugin-vue_export-helper-361d09b5.js";import"./index-c7db9ac4.js";import"./api-d7aa99fa.js";import"./liquidFillView-cab4a9e0.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAHCAYAAACx3+twAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvNlb9LHFEQxz/fE4MXsJEUVhaCndcKqSxVUspZHeS0zIGChYIEXcXGxuLQgzSiohD8Ucr5BwRBWxvRzkJSCXqFsuqOuIrE7O5bDQfxtW/m+2bmzWdGVqWIUUFkSTrGKRny6uXgbxPboIFrZhHjgBwaBxh5feX0Txubp4VG1hB9ib6PF8v4fNMoV5EYZshhrAM5x/s+YoxJyhKWZBcmYDvkEOsoRTDDGD3xgrZGH0GYWIsjqHMyFFSg+qIohlhgAjENNDj8Dwno1wgnkaLMk+Uy/NhiSmGrGAV5nMfZPf+o7ZHlggqkCBrVMKneqKCt0IZYRXQ7gjKMOZqY0gD+i8JU6CbgJ9Dq8K8hhlViOc7GPIoozMPd8ZCXF+34SIv/d4QWaSVgqQ4IbQMdb0UolvknhLZRiuB7RmiOZq4ovxWhxCFov2imRrkOCG0iul6B0HcNcPePCA2pxFY9EEreCk/qtksXxkfnoAo40xeOYwPa4APXfEaODfTgeMuRBvkdGZY/+IRPZ8qghBv24zZQuDQ82oG2FA1fHnv3y0m/CFsHcS4AAAAASUVORK5CYII=",b=()=>{const o=a(0),s=a(0),t=a(""),i=a(0),d=a(0),m=a(0),h=a(0),v=a("");return(()=>{const u=new Date;o.value=u.getFullYear(),s.value=u.getMonth()+1,t.value="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D".charAt(u.getDay()),i.value=u.getDate(),d.value=(u.getHours()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(u.getHours()),m.value=(u.getMinutes()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(u.getMinutes()),h.value=(u.getSeconds()+"").padStart(2,"0")||new Intl.NumberFormat(void 0,{minimumIntegerDigits:2}).format(u.getSeconds()),v.value=`${o.value}\u5E74${s.value}\u6708${i.value} ${d.value}:${m.value}:${h.value}`})(),{year:o,month:s,day:i,hour:d,minute:m,second:h,week:t,nowTime:v}},r=o=>(W("data-v-9f427d31"),o=o(),$(),o),re={class:"dataScreen-container"},oe={class:"dataScreen-header"},ce=r(()=>e("div",{class:"header-ct"},[e("div",{class:"header-ct-title"},[e("span",null,"\u81F3\u7F8E\u4F18\u54C1\u53EF\u89C6\u5316\u5927\u6570\u636E\u5C55\u793A\u5E73\u53F0"),e("div",{class:"header-ct-warning"},"\u5E73\u53F0\u9884\u8B66\u4FE1\u606F\uFF082\u6761\uFF09")])],-1)),le={class:"header-rg"},ie=r(()=>e("span",{class:"header-download"},"\u7EDF\u8BA1\u62A5\u544A",-1)),de={class:"header-time"},me={class:"dataScreen-main"},he={class:"dataScreen-lf"},ve={class:"dataScreen-top"},_e=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u5B9E\u65F6\u8BA2\u5355\u7EDF\u8BA1"),e("img",{src:l,alt:""})],-1)),fe={class:"dataScreen-main-chart"},Ee={class:"dataScreen-center"},pe=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u7537\u5973\u6BD4\u4F8B"),e("img",{src:l,alt:""})],-1)),Fe={class:"dataScreen-main-chart"},Ae={class:"dataScreen-bottom"},ge=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u5E74\u9F84\u6BD4\u4F8B"),e("img",{src:l,alt:""})],-1)),Ce={class:"dataScreen-main-chart"},Se={class:"dataScreen-ct"},De={class:"dataScreen-map"},Be=r(()=>e("div",{class:"dataScreen-map-title"},"\u7269\u6D41\u5B9E\u65F6\u4EA4\u6613\u4FE1\u606F",-1)),Re={class:"dataScreen-cb"},we=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u672A\u676530\u5929\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE"),e("img",{src:l,alt:""})],-1)),xe={class:"dataScreen-main-chart"},Ne={class:"dataScreen-rg"},be={class:"dataScreen-top"},Ie=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u70ED\u95E8\u5546\u54C1\u6392\u884C"),e("img",{src:l,alt:""})],-1)),ke={class:"dataScreen-main-chart"},ye={class:"dataScreen-center"},Me=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u5E74\u5EA6\u8BBF\u95EE\u91CF\u5BF9\u6BD4"),e("img",{src:l,alt:""})],-1)),Ve={class:"dataScreen-main-chart"},He={class:"dataScreen-bottom"},Oe=r(()=>e("div",{class:"dataScreen-main-title"},[e("span",null,"\u4EA4\u6613\u6E20\u9053\u6570\u636E\u7EDF\u8BA1"),e("img",{src:l,alt:""})],-1)),Ue={class:"dataScreen-main-chart"},Pe=P({__name:"index",setup(o){const s=a(null);Y(()=>{s.value&&(s.value.style.transform=`scale(${C()}) translate(-50%, -50%)`,s.value.style.width="1920px",s.value.style.height="1080px"),V(),window.addEventListener("resize",S)});const t={chart1:null,chart2:null,chart3:null,chart4:null,chart5:null,chart6:null,chart7:null,mapChart:null},i=a(),d=a(),m=a(),h=a(),v=a(),F=a(),u=a(),A=a();let I=[{value:200,name:"10\u5C81\u4EE5\u4E0B",percentage:"16%"},{value:110,name:"10 - 18\u5C81",percentage:"8%"},{value:150,name:"18 - 30\u5C81",percentage:"12%"},{value:310,name:"30 - 40\u5C81",percentage:"24%"},{value:250,name:"40 - 60\u5C81",percentage:"20%"},{value:260,name:"60\u5C81\u4EE5\u4E0A",percentage:"20%"}],k=[{value:79999,name:"\u670D\u9970",percentage:"80%",maxValue:1e5},{value:59999,name:"\u7535\u5B50\u4EA7\u54C1",percentage:"60%",maxValue:1e5},{value:49999,name:"\u767E\u8D27",percentage:"50%",maxValue:1e5},{value:39999,name:"\u751F\u9C9C",percentage:"40%",maxValue:1e5},{value:29999,name:"\u6F6E\u724C",percentage:"30%",maxValue:1e5}],y=[{value:40,name:"\u7F51\u4E0A\u4EA4\u6613",percentage:"40%"},{value:10,name:"\u65D7\u8230\u5E97",percentage:"10%"},{value:20,name:"\u54C1\u724C\u4E13\u67DC",percentage:"20%"},{value:30,name:"\u5176\u4ED6\u6E20\u9053",percentage:"30%"}],g=[{label:new Date().getFullYear()-2+"\u5E74",value:["184","90","120","0","30","100","80","40","20","510","350","180"]},{label:new Date().getFullYear()-1+"\u5E74",value:["118","509","366","162","380","123","321","158","352","474","154","22"]},{label:new Date().getFullYear()+"\u5E74",value:["548","259","113","90","69","512","23","49","28","420","313","156"]}],M=[{fromName:"\u5317\u4EAC",toName:"\u4E0A\u6D77",coords:[[116.4551,40.2539],[121.4648,31.2891]]},{fromName:"\u4E0A\u6D77",toName:"\u5317\u4EAC",coords:[[121.4648,31.2891],[116.4551,40.2539]]},{fromName:"\u5317\u4EAC",toName:"\u5E7F\u5DDE",coords:[[116.4551,40.2539],[113.5107,23.2196]]},{fromName:"\u5E7F\u5DDE",toName:"\u5317\u4EAC",coords:[[113.5107,23.2196],[116.4551,40.2539]]},{fromName:"\u5317\u4EAC",toName:"\u6210\u90FD",coords:[[116.4551,40.2539],[103.9526,30.7617]]},{fromName:"\u6210\u90FD",toName:"\u5317\u4EAC",coords:[[103.9526,30.7617],[116.4551,40.2539]]},{fromName:"\u6210\u90FD",toName:"\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",coords:[[103.9526,30.7617],[85.294711,41.371801]]},{fromName:" \u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A",toName:"\u6210\u90FD",coords:[[85.294711,41.371801],[103.9526,30.7617]]}];const V=()=>{var n,_,f,E,R,w,x,N;t.chart1=(n=i.value)==null?void 0:n.initChart(.5),t.chart2=(_=d.value)==null?void 0:_.initChart(I),t.chart3=(f=m.value)==null?void 0:f.initChart({data:g,unit:g.map(p=>p.label),columns:["1","2","3","4","5","6","7","8","9","10","11","12"],colors:["#FFA600","#007AFE","#FF4B7A"]}),t.chart4=(E=h.value)==null?void 0:E.initChart({data:k,colors:["#1089E7","#F57474","#56D0E3","#F8B448","#8B78F6"]}),t.chart5=(R=v.value)==null?void 0:R.initChart({man:.6,woman:.4}),t.chart6=(w=F.value)==null?void 0:w.initChart({unit:["\u8BBF\u95EE\u91CF"],data:new Array(30).fill("").map(p=>(p=Q(1,2e4),p))}),t.chart7=(x=u.value)==null?void 0:x.initChart({data:y,colors:["#078dbc","#6ad40b","#6172fc","#1786ff","#ffbe2f","#4dc89d","#b797df","#ffd3aa"]}),t.mapChart=(N=A.value)==null?void 0:N.initChart(M)},C=(n=1920,_=1080)=>{let f=window.innerWidth/n,E=window.innerHeight/_;return f<E?f:E},S=()=>{s.value&&(s.value.style.transform=`scale(${C()}) translate(-50%, -50%)`),Object.values(t).forEach(n=>{n&&n.resize()})},{nowTime:H}=b();let D=null,B=a(H.value);D=setInterval(()=>{B.value=b().nowTime.value},1e3);const O=Z(),U=()=>{O.push(K)};return G(()=>{window.removeEventListener("resize",S),clearInterval(D),Object.values(t).forEach(n=>{n==null||n.dispose()})}),(n,_)=>(q(),T("div",re,[e("div",{class:"dataScreen",ref_key:"dataScreenRef",ref:s},[e("div",oe,[e("div",{class:"header-lf"},[e("span",{class:"header-screening",onClick:U},"\u9996\u9875")]),ce,e("div",le,[ie,e("span",de,"\u5F53\u524D\u65F6\u95F4\uFF1A"+X(z(B)),1)])]),e("div",me,[e("div",he,[e("div",ve,[_e,e("div",fe,[c(ne,{ref_key:"RealTimeAccessRef",ref:i},null,512)])]),e("div",Ee,[pe,e("div",Fe,[c(ae,{ref_key:"MaleFemaleRatioRef",ref:v},null,512)])]),e("div",Ae,[ge,e("div",Ce,[c(L,{ref_key:"AgeRatioRef",ref:d},null,512)])])]),e("div",Se,[e("div",De,[Be,c(j,{ref_key:"MapchartRef",ref:A},null,512)]),e("div",Re,[we,e("div",xe,[c(te,{ref_key:"OverNext30Ref",ref:F},null,512)])])]),e("div",Ne,[e("div",be,[Ie,e("div",ke,[c(ee,{ref_key:"HotPlateRef",ref:h},null,512)])]),e("div",ye,[Me,e("div",Ve,[c(J,{ref_key:"AnnualUseRef",ref:m},null,512)])]),e("div",He,[Oe,e("div",Ue,[c(ue,{ref_key:"PlatformSourceRef",ref:u},null,512)])])])])],512)]))}});const Je=se(Pe,[["__scopeId","data-v-9f427d31"]]);export{Je as default};
