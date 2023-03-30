(function(){"use strict";var t={1259:function(t,e,i){var a=i(9242),n=i(3396);const s={id:"#app"};function l(t,e){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(i)])}var c=i(89);const r={},o=(0,c.Z)(r,[["render",l]]);var p=o,u=i(2483),m=i(7139);const h={class:"calc"},d={class:"calc__container"},_={class:"calc__body"},y={class:"calc__top top-calc"},w=(0,n._)("h6",{class:"top-calc__title"},"ЛИСТЫ ПОКРЫТИЯ:",-1),f=(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1),g=["value"],v=(0,n._)("h6",{class:"top-calc__title"},"ТРУБЫ:",-1),L=(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1),b=["value"],M=(0,n._)("h6",{class:"top-calc__title"},"ШИРИНА:",-1),S=["min","max"],x=(0,n._)("h6",{class:"top-calc__title"},"ДЛИННА:",-1),k=["min","max"],P=(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1),D=["value"],q={class:"calc__bottom bottom-calc"},C=(0,n._)("span",{class:"bottom-calc__title"},"Общая площадь:",-1),W={class:"bottom-calc__totalsquere"},z=(0,n._)("span",{class:"bottom-calc__title"},"Площадь секции:",-1),O={class:"bottom-calc__totalsquere"},$=(0,n._)("span",{class:"bottom-calc__title"},"Количество листов:",-1),Q={class:"bottom-calc__totalsquere"},J=(0,n._)("span",{class:"bottom-calc__title"},"Стоимость листов:",-1),T={class:"bottom-calc__totalsquere"},V=(0,n._)("span",{class:"bottom-calc__title"},"Саморезов:",-1),I={class:"bottom-calc__totalsquere"};function U(t,e,i,s,l,c){return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",d,[(0,n._)("div",_,[(0,n._)("div",y,[w,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.section=t),onChange:e[1]||(e[1]=(...t)=>c.changeOption&&c.changeOption(...t)),class:"top-calc__material"},[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.materialList,(t=>((0,n.wg)(),(0,n.iD)("option",{class:"top-calc__material-option",value:t,key:t.id},(0,m.zw)(t.name)+" "+(0,m.zw)(t.material),9,g)))),128))],544),[[a.bM,l.section]]),v,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.sectionPipe=t),class:"top-calc__material"},[L,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.pipeList,(t=>((0,n.wg)(),(0,n.iD)("option",{class:"top-calc__material-option",value:t,key:t.material},(0,m.zw)(t.name),9,b)))),128))],512),[[a.bM,l.sectionPipe]]),M,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.inputWidth=t),onInput:e[4]||(e[4]=(...t)=>c.calcTotalSqure&&c.calcTotalSqure(...t)),step:"1",min:`${l.minMaxWidth.min}`,max:`${l.minMaxWidth.max}`,class:"top-calc__range",type:"range"},null,40,S),[[a.nr,l.inputWidth,void 0,{number:!0}]]),(0,n._)("span",null,(0,m.zw)(this.inputWidth),1),x,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>l.inputLength=t),onInput:e[6]||(e[6]=(...t)=>c.calcTotalSqure&&c.calcTotalSqure(...t)),step:"1",min:`${l.minMaxLength.min}`,max:`${l.minMaxLength.max}`,class:"top-calc__range",type:"range"},null,40,k),[[a.nr,l.inputLength,void 0,{number:!0}]]),(0,n._)("span",null,(0,m.zw)(this.inputLength),1),(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[7]||(e[7]=t=>l.durabulity=t),class:"top-calc__material"},[P,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.durabilityList,(t=>((0,n.wg)(),(0,n.iD)("option",{class:"top-calc__material-option",value:t,key:t.material},(0,m.zw)(t.name),9,D)))),128))],512),[[a.bM,l.durabulity]])]),(0,n._)("div",q,[(0,n._)("div",null,[C,(0,n._)("span",W,(0,m.zw)(this.totalSqure)+" м2 ",1)]),(0,n._)("div",null,[z,(0,n._)("span",O,(0,m.zw)(this.sectionSqure)+" м2 ",1)]),(0,n._)("div",null,[$,(0,n._)("span",Q,(0,m.zw)(this.sectionQuantity)+" шт. ",1)]),(0,n._)("div",null,[J,(0,n._)("span",T,(0,m.zw)(this.listPrice)+" руб ",1)]),(0,n._)("div",null,[V,(0,n._)("span",I,(0,m.zw)(this.totalScrew)+" шт. ",1)])])])])])}var j=JSON.parse('[{"type":"list","name":"Лист-1 0.5 ширина 1.8м","material":"plastic","unit":"м2","width":1.8,"price":12},{"type":"list","name":"Лист-2 0.5 ширина 1.5м","material":"plastic","unit":"м2","width":1.5,"price":15},{"type":"list","name":"Лист-3 0.5 ширина 1.2м","material":"plastic","unit":"м2","width":1.2,"price":15},{"type":"list","name":"Лист-4 0.7 ширина 1.8м","material":"plastic","unit":"м2","width":1.8,"price":17},{"type":"list","name":"Лист-5 0.7 ширина 1.5м","material":"plastic","unit":"м2","width":1.5,"price":20},{"type":"list","name":"Лист-6 0.7 ширина 1.2м","material":"plastic","unit":"м2","width":1.2,"price":22},{"type":"list","name":"Лист-7 0.3 ширина 1м","material":"metal","unit":"м2","width":1,"price":25},{"type":"list","name":"Лист-8 0.3 ширина 0.75м","material":"metal","unit":"м2","width":0.75,"price":20},{"type":"list","name":"Лист-9 0.3 ширина 0.5м","material":"metal","unit":"м2","width":0.5,"price":15},{"type":"list","name":"Лист-10 0.5 ширина 1м","material":"metal","unit":"м2","width":1,"price":30},{"type":"list","name":"Лист-11 0.5 ширина 0.75м","material":"metal","unit":"м2","width":0.75,"price":26},{"type":"list","name":"Лист-12 0.5 ширина 0.5м","material":"metal","unit":"м2","width":0.5,"price":22},{"type":"pipe","name":"Труба 20х20","unit":"мп","width":20,"price":18},{"type":"pipe","name":"Труба 30х30","unit":"мп","width":30,"price":18},{"type":"fix","name":"Саморез","unit":"шт","price":1.1}]'),H=JSON.parse('[{"type":"size","key":"length","name":"Длина","min":5,"max":50,"step":0.2},{"type":"size","key":"width","name":"Ширина","min":5,"max":25,"step":0.2},{"type":"frame","key":"light","name":"Легкая","step":1.2},{"type":"frame","key":"standard","name":"Стандартная","step":1},{"type":"frame","key":"strong","name":"Усиленная","step":0.8},{"type":"material","key":"metal","name":"Метал"},{"type":"material","key":"plastic","name":"Пластик"},{"type":"fix","key":"plastic","name":"Пластик","value":10},{"type":"fix","key":"metal","name":"Пластик","value":5}]'),K={data(){return{dataJson:j,dataConfig:H,materialList:[],pipeList:[],durabilityList:[],inputLength:5,inputWidth:5,totalSqure:100,section:"",sectionSqure:1,sectionQuantity:100,allSize:[],minMaxWidth:"",minMaxLength:"",listPrice:625,sectionPipe:"",durabulity:"",screwMetal:"",screwPlastic:"",totalScrew:10}},methods:{getMaterialList(){this.materialList=this.dataJson.filter((t=>"list"===t.type)),this.materialList=this.materialList.map((t=>({id:Date.now(),material:t.material,name:t.name,price:t.price,width:t.width})))},calcScrewPlastic(){this.totalScrew=Math.ceil(this.totalSqure/this.screwPlastic.value)},calcScrewMetal(){this.totalScrew=Math.ceil(this.totalSqure/this.screwMetal.value)},getPipe(){this.pipeList=this.dataJson.filter((t=>"pipe"===t.type))},getScrews(){this.screwMetal=this.dataConfig.filter((t=>"fix"===t.type&&"metal"===t.key))[0],this.screwPlastic=this.dataConfig.filter((t=>"fix"===t.type&&"plastic"===t.key))[0]},getDurability(){this.durabilityList=this.dataConfig.filter((t=>"frame"===t.type))},calcTotalSqure(){this.totalSqure=this.inputWidth*this.inputLength,"plastic"===this.section.material&&this.calcScrewPlastic(),"metal"===this.section.material&&this.calcScrewMetal(),this.calcSectionQuantity()},changeOption(t){this.sectionSqure=1*this.section.width,this.$emit("update:modelValue",t.target.value),"plastic"===this.section.material&&this.calcScrewPlastic(),"metal"===this.section.material&&this.calcScrewMetal(),this.calcSectionQuantity()},calcSectionQuantity(){this.sectionQuantity=Math.ceil(this.totalSqure/this.sectionSqure),this.section.price?this.listPrice=this.section.price*this.sectionQuantity:this.listPrice=25*this.sectionQuantity},getMinMax(){this.minMaxWidth=this.dataConfig.filter((t=>"width"===t.key))[0],this.minMaxLength=this.dataConfig.filter((t=>"length"===t.key))[0]}},mounted(){this.getMaterialList(),this.getPipe(),this.getDurability(),this.getMinMax(),this.getScrews()}};const Y=(0,c.Z)(K,[["render",U]]);var Z=Y;const E=[{path:"/",name:"CalculatePage",component:Z}],N=(0,u.p7)({history:(0,u.PO)("/tets/"),routes:E});var F=N,A=i(65),B=(0,A.MT)({state:()=>({dataJson:j,dataConfig:H,materialList:[],pipeList:[],checkedPipe:"",durabilityList:[],inputLength:5,inputWidth:5,totalSqure:100,sectionList:"",sectionSqure:1,sectionQuantity:100,allSize:[],minMaxWidth:"",minMaxLength:"",listPrice:625}),getters:{},mutations:{setMaterialList(t,e){t.materialList=e},setPipeList(t,e){t.pipeList=e},setDurabilityList(t,e){t.durabilityList=e},setMinMaxWidth(t,e){t.minMaxWidth=e},setMinMaxLength(t,e){t.minMaxLength=e},setSectionList(t,e){t.sectionList=e},setCheckedPipe(t,e){t.checkedPipe=e},setInputWidth(t,e){t.inputWidth=e},setInputLength(t,e){t.inputLength=e}},actions:{setMaterialList({state:t,commit:e}){e("setMaterialList",t.dataJson.filter((t=>"list"===t.type))),e("setMaterialList",t.materialList.map((t=>({id:Date.now(),material:t.material,name:t.name,price:t.price,width:t.width}))))},setPipeList({state:t,commit:e}){e("setPipeList",t.dataJson.filter((t=>"pipe"===t.type)))},setDurabilityList({state:t,commit:e}){e("setDurabilityList",t.dataConfig.filter((t=>"frame"===t.type)))},setMinMaxWidth({state:t,commit:e}){e("setMinMaxWidth",t.dataConfig.filter((t=>"width"===t.key))[0])},setMinMaxLength({state:t,commit:e}){e("setMinMaxLength",t.dataConfig.filter((t=>"length"===t.key))[0])}},modules:{}});const G=t=>((0,n.dD)("data-v-fc4d706e"),t=t(),(0,n.Cn)(),t),R=G((()=>(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1))),X=["value"];function tt(t,e,i,s,l,c){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>c.sectionList=t),class:"select"},[R,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.materialList,(t=>((0,n.wg)(),(0,n.iD)("option",{class:"select__oprion",value:t,key:t.id},(0,m.zw)(t.name),9,X)))),128))],512)),[[a.bM,c.sectionList]])}var et={name:"material-select",data(){return{}},computed:{...(0,A.rn)({materialList:t=>t.materialList,sectionList:t=>t.sectionList}),sectionList:{get(){return this.$store.state.sectionList},set(t){console.log(this.$store.state.sectionList),this.$store.commit("setSectionList",t)}}},methods:{}};const it=(0,c.Z)(et,[["render",tt],["__scopeId","data-v-fc4d706e"]]);var at=it;const nt=t=>((0,n.dD)("data-v-2c428f16"),t=t(),(0,n.Cn)(),t),st=nt((()=>(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1))),lt=["value"];function ct(t,e,i,s,l,c){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>c.checkedPipe=t),class:"select"},[st,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.pipeList,(t=>((0,n.wg)(),(0,n.iD)("option",{class:"select__oprion",value:t,key:t.id},(0,m.zw)(t.name),9,lt)))),128))],512)),[[a.bM,c.checkedPipe]])}var rt={name:"pipe-select",data(){return{}},computed:{...(0,A.rn)({pipeList:t=>t.pipeList,checkedPipe:t=>t.checkedPipe}),checkedPipe:{get(){return this.$store.state.checkedPipe},set(t){this.$store.commit("setCheckedPipe",t)}}},methods:{}};const ot=(0,c.Z)(rt,[["render",ct],["__scopeId","data-v-2c428f16"]]);var pt=ot;const ut={class:"top-calc__range",type:"range"};function mt(t,e,i,a,s,l){return(0,n.wg)(),(0,n.iD)("input",ut)}var ht={name:"range-input",data(){return{}},computed:{},methods:{}};const dt=(0,c.Z)(ht,[["render",mt],["__scopeId","data-v-39ea67e0"]]);var _t=dt,yt=[at,pt,_t];const wt=(0,a.ri)(p);yt.forEach((t=>{wt.component(t.name,t)})),wt.use(B).use(F).mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var l=1/0;for(p=0;p<t.length;p++){a=t[p][0],n=t[p][1],s=t[p][2];for(var c=!0,r=0;r<a.length;r++)(!1&s||l>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[r])}))?a.splice(r--,1):(c=!1,s<l&&(l=s));if(c){t.splice(p--,1);var o=n();void 0!==o&&(e=o)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,l=a[0],c=a[1],r=a[2],o=0;if(l.some((function(e){return 0!==t[e]}))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(r)var p=r(i)}for(e&&e(a);o<l.length;o++)s=l[o],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(p)},a=self["webpackChunkcalc"]=self["webpackChunkcalc"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(1259)}));a=i.O(a)})();
//# sourceMappingURL=app.db90bda0.js.map