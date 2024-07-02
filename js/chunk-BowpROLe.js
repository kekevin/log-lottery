import{u as e,d as l,_ as s}from"./chunk-CK6zyU60.js";import{b as a,l as t,s as n,r as o,h as u,w as i,o as c,e as r,f as d,F as p,y as b,A as m,j as f,k as v,B as x,C,E as h,n as w,z as g,D as k}from"./chunk-CuXAu-_P.js";const y=d("h2",null,"奖项配置",-1),U=d("div",{role:"alert",class:"w-full my-4 alert alert-info"},[d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 stroke-current shrink-0"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),d("span",null,"进行操作可能会重置数据，请谨慎操作")],-1),z={class:"p-0 m-0"},L={class:"max-w-xs mb-10 form-control"},j={class:"flex flex-col items-center gap-2 pt-5"},P={class:"w-1/2 max-w-xs mb-10 form-control"},A=d("div",{class:"label"},[d("span",{class:"label-text"},"名称")],-1),V=["onUpdate:modelValue"],D={class:"w-1/2 max-w-xs mb-10 form-control"},S=d("div",{class:"label"},[d("span",{class:"label-text"},"全员参加")],-1),O=["checked","onChange"],_={class:"w-1/2 max-w-xs mb-10 form-control"},B=d("div",{class:"label"},[d("span",{class:"label-text"},"抽奖人数")],-1),I=["onUpdate:modelValue","onChange"],M=["data-tip"],N=["value","max"],q={class:"w-1/2 max-w-xs mb-10 form-control"},E=d("div",{class:"label"},[d("span",{class:"label-text"},"已抽取")],-1),F=["checked","onChange"],T={class:"w-full max-w-xs mb-10 form-control"},$=d("div",{class:"label"},[d("span",{class:"label-text"},"图片")],-1),G=["onUpdate:modelValue"],H={key:0,value:{id:"",name:"",url:""}},J=[d("span",null,"❌",-1)],K=d("option",{disabled:"",selected:""},"选择一张图片",-1),Q=["value"],R={key:0,class:"w-full max-w-xs mb-10 form-control"},W=d("div",{class:"label"},[d("span",{class:"label-text"},"单次抽取个数")],-1),X=["onClick"],Y={key:0,class:"flex flex-wrap w-full h-full gap-1 p-0 pt-1 m-0 cursor-pointer"},Z=["data-tip"],ee={key:1,class:"btn btn-secondary btn-xs"},le={class:"w-full max-w-xs mb-10 form-control"},se=d("div",{class:"label"},[d("span",{class:"label-text"},"操作")],-1),ae={class:"flex gap-2"},te=["onClick"],ne=a({__name:"PrizeConfig",setup(a){const ne=t.createInstance({name:"imgStore"}),oe=e().prizeConfig,ue=e().globalConfig,{getPrizeConfig:ie,getCurrentPrize:ce}=n(oe),{getImageList:re}=n(ue),de=o(ie),pe=o([]),be=o(),me=()=>{const e={id:(new Date).getTime().toString(),name:"奖项",sort:0,isAll:!1,count:1,isUsedCount:0,picture:{id:"",name:"",url:""},separateCount:{enable:!1,countList:[]},desc:"",isUsed:!1,isShow:!0,frequency:1};oe.addPrizeConfig(e)},fe=e=>{be.value.separateCount.countList=e,be.value=null},ve=()=>{oe.resetDefault()},xe=(e,l)=>{const s=de.value.indexOf(e);1==l?(de.value.splice(s,1),de.value.splice(s-1,0,e)):(de.value.splice(s,1),de.value.splice(s+1,0,e))},Ce=async()=>{await oe.deleteAllPrizeConfig()};return u((()=>{(async()=>{(await ne.keys()).length>0&&ne.iterate(((e,l)=>{pe.value.push({key:l,value:e})}))})()})),i((()=>de.value),(e=>{oe.setPrizeConfig(e)}),{deep:!0}),(e,a)=>{var t,n;const o=s;return c(),r("div",null,[y,d("div",{class:"flex w-full gap-3"},[d("button",{class:"btn btn-info btn-sm",onClick:me},"添加"),d("button",{class:"btn btn-info btn-sm",onClick:ve},"默认列表"),d("button",{class:"btn btn-error btn-sm",onClick:Ce},"全部删除")]),U,d("ul",z,[(c(!0),r(p,null,b(de.value,(e=>(c(),r("li",{key:e.id,class:m(["flex gap-10",f(ce).id==e.id?"border-1 border-dotted rounded-xl":null])},[d("label",L,[d("div",j,[v(o,{class:m(["cursor-pointer hover:text-blue-400",0==de.value.indexOf(e)?"opacity-0 cursor-default":""]),name:"up",onClick:l=>xe(e,1)},null,8,["class","onClick"]),v(o,{class:m(["cursor-pointer hover:text-blue-400",de.value.indexOf(e)==de.value.length-1?"opacity-0 cursor-default":""]),name:"down",onClick:l=>xe(e,0)},null,8,["onClick","class"])])]),d("label",P,[A,x(d("input",{type:"text","onUpdate:modelValue":l=>e.name=l,placeholder:"名称",class:"w-full max-w-xs input-sm input input-bordered"},null,8,V),[[C,e.name]])]),d("label",D,[S,d("input",{type:"checkbox",checked:e.isAll,onChange:l=>e.isAll=!e.isAll,class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,O)]),d("label",_,[B,x(d("input",{type:"number","onUpdate:modelValue":l=>e.count=l,placeholder:"获奖人数",onChange:l=>(e=>{let l=-1;for(let s=0;s<de.value.length;s++)if(de.value[s].id==e.id){l=s;break}l>-1&&(de.value[l].separateCount.countList=[],de.value[l].isUsed?de.value[l].isUsedCount=de.value[l].count:de.value[l].isUsedCount=0)})(e),class:"w-full max-w-xs p-0 m-0 input-sm input input-bordered"},null,40,I),[[C,e.count]]),d("div",{class:"tooltip tooltip-bottom","data-tip":"已抽取:"+e.isUsedCount+"/"+e.count},[d("progress",{class:"w-full progress",value:e.isUsedCount,max:e.count},null,8,N)],8,M)]),d("label",q,[E,d("input",{type:"checkbox",checked:e.isUsed,onChange:l=>(e=>{e.isUsed?e.isUsedCount=0:e.isUsedCount=e.count,e.separateCount.countList=[],e.isUsed=!e.isUsed})(e),class:"mt-2 border-solid checkbox checkbox-secondary border-1"},null,40,F)]),d("label",T,[$,x(d("select",{class:"w-full max-w-xs select select-warning select-sm","onUpdate:modelValue":l=>e.picture=l},[e.picture.id?(c(),r("option",H,J)):w("",!0),K,(c(!0),r(p,null,b(f(re),(e=>(c(),r("option",{key:e.id,value:e},g(e.name),9,Q)))),128))],8,G),[[h,e.picture]])]),e.separateCount?(c(),r("label",R,[W,d("div",{class:"flex justify-start w-full h-full",onClick:l=>(e=>{be.value=e,be.value.isUsedCount=0,be.value.isUsed=!1,be.value.separateCount.countList.length>1||(be.value.separateCount={enable:!0,countList:[{id:"0",count:e.count,isUsedCount:0}]})})(e)},[e.separateCount.countList.length?(c(),r("ul",Y,[(c(!0),r(p,null,b(e.separateCount.countList,(e=>(c(),r("li",{class:"relative flex items-center justify-center w-8 h-8 bg-slate-600/60 separated",key:e.id},[d("div",{class:"flex items-center justify-center w-full h-full tooltip","data-tip":"已抽取:"+e.isUsedCount+"/"+e.count},[d("div",{class:"absolute left-0 z-50 h-full bg-blue-300/80",style:k(`width:${100*e.isUsedCount/e.count}%`)},null,4),d("span",null,g(e.count),1)],8,Z)])))),128))])):(c(),r("button",ee,"设置"))],8,X)])):w("",!0),d("label",le,[se,d("div",ae,[d("button",{class:"btn btn-error btn-sm",onClick:l=>(e=>{oe.deletePrizeConfig(e.id)})(e)},"删除",8,te)])])],2)))),128))]),v(l,{totalNumber:null==(t=be.value)?void 0:t.count,"separated-number":null==(n=be.value)?void 0:n.separateCount.countList,onSubmitData:fe},null,8,["totalNumber","separated-number"])])}}});export{ne as default};
