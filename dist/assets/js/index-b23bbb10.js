import{i as o}from"./index-c7db9ac4.js";import{u as r}from"./useEcharts-6f392a3c.js";import{d as t,r as s,X as c,o as d,c as m}from"./index-702e1de5.js";import{_ as l}from"./_plugin-vue_export-helper-361d09b5.js";const i=t({name:"radarChart"}),_=t({...i,setup(p){const e=s();return c(()=>{let a=o(e.value);r(a,{title:{text:"Basic Radar Chart",textStyle:{color:"#a1a1a1"}},legend:{data:["Allocated Budget","Actual Spending"],textStyle:{color:"#a1a1a1"}},radar:{indicator:[{name:"Sales",max:6500},{name:"Administration",max:16e3},{name:"Information Technology",max:3e4},{name:"Customer Support",max:38e3},{name:"Development",max:52e3},{name:"Marketing",max:25e3}]},series:[{name:"Budget vs spending",type:"radar",data:[{value:[4200,3e3,2e4,35e3,5e4,18e3],name:"Allocated Budget"},{value:[5e3,14e3,28e3,26e3,42e3,21e3],name:"Actual Spending"}]}]})}),(a,n)=>(d(),m("div",{ref_key:"echartsRef",ref:e,class:"card content-box"},null,512))}});const v=l(_,[["__scopeId","data-v-5d511aac"]]);export{v as default};