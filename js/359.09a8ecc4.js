"use strict";(self["webpackChunkjindon2"]=self["webpackChunkjindon2"]||[]).push([[359],{1860:function(t,o,n){n.r(o),n.d(o,{default:function(){return D}});var s=n(6252);const e={class:"goods-list-page"},i=["src"];function a(t,o,n,a,c,l){const p=(0,s.up)("navigation-bar"),u=(0,s.up)("goods-options"),d=(0,s.up)("goods");return(0,s.wg)(),(0,s.iD)("div",e,[(0,s.Wm)(p,{pageName:"商品列表",isDefault:!0,isShowBack:!0,onOnLeftClick:l.onBackClick},{"nav-right":(0,s.w5)((()=>[(0,s._)("img",{src:c.layoutType.icon,onClick:o[0]||(o[0]=t=>l.onChangeLayoutTypeClick())},null,8,i)])),_:1},8,["onOnLeftClick"]),(0,s.Wm)(u,{onOptionsChange:l.onOptionsChange},null,8,["onOptionsChange"]),(0,s.Wm)(d,{layoutType:c.layoutType.type,isScroll:!0,sort:c.sortType},null,8,["layoutType","sort"])])}var c=n(7279),l=n(3577),p=n(9963),u=n.p+"img/options-select.ca07a8da.svg";const d={class:"goods-options z-index-2"},h={class:"goods-options-list"},r=["onClick"],g={class:"options-sub-content z-index-2"},m={class:"options-sub-content-list"},y=["onClick"],C={class:"options-sub-content-list-item-content"},b={class:"options-sub-content-list-item-content-select",src:u,alt:"",srcset:""};function w(t,o,n,e,i,a){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("ul",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.optionsDate,((o,n)=>((0,s.wg)(),(0,s.iD)("li",{class:"goods-options-item",key:n},[(0,s._)("a",{class:"goods-options-item-content",onClick:t=>a.onOptionsItemClick(o,n)},[(0,s._)("span",{class:(0,l.C_)(["goods-options-item-content-name",{"goods-options-item-content-name-active":t.selectOption.id===o.id}])},(0,l.zw)(o.name),3),o.subs.length>0?((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,l.C_)(["goods-options-item-content-caret caret",[t.isShowSubContent&&t.selectOption.id===o.id?"goods-options-item-content-caret-open":"goods-options-item-content-caret-close"]])},null,2)):(0,s.kq)("",!0)],8,r)])))),128))]),(0,s.Wm)(p.uT,{name:"fold-height"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",g,[(0,s._)("ul",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.selectOption.subs,((o,n)=>((0,s.wg)(),(0,s.iD)("li",{class:"options-sub-content-list-item",key:n,onClick:t=>a.onSubOptionsItemClick(o,n)},[(0,s._)("a",C,[(0,s._)("span",{class:(0,l.C_)(["options-sub-content-list-item-content-name",{"options-sub-content-list-item-content-name-active":t.selectOption.id===o.id}])},(0,l.zw)(o.name),3),(0,s.wy)((0,s._)("img",b,null,512),[[p.F8,t.selectOption.id===o.id]])])],8,y)))),128))])],512),[[p.F8,t.isShowSubContent]])])),_:1}),(0,s.wy)((0,s._)("div",{class:"cover",onClick:o[0]||(o[0]=o=>t.isShowSubContent=!1)},null,512),[[p.F8,t.isShowSubContent]])])}var k={data:function(){return{optionsDate:[{id:"1",name:"默认",subs:[{id:"1",name:"默认"},{id:"1-2",name:"价格由高到低"},{id:"1-3",name:"销量由高到低"}]},{id:"2",name:"有货优先",subs:[]},{id:"3",name:"直营优先",subs:[]}],selectOption:{},isShowSubContent:!1}},created:function(){this.selectOption=this.optionsDate[0]},methods:{onOptionsItemClick(t,o){this.isShowSubContent&&this.selectOption===t?this.isShowSubContent=!1:t.subs.length>0?this.isShowSubContent=!0:this.isShowSubContent=!1,this.selectOption=t},onSubOptionsItemClick(t,o){this.selectOption=t,this.optionsDate.forEach((o=>{o.subs.forEach((n=>{n.id===t.id&&(o.id=n.id,o.name=n.name)}))})),this.isShowSubContent=!1}},watch:{selectOption:function(t,o){this.$emit("optionsChange",t)}}},S=n(3744);const f=(0,S.Z)(k,[["render",w],["__scopeId","data-v-cd65d45e"]]);var O=f,v=n(4657),T={name:"goodsList",components:{NavigationBar:c.Z,GoodsOptions:O,goods:v.Z},data(){return{sortType:"1",layoutTypeDate:[{type:"1",icon:n(4133)},{type:"2",icon:n(1305)}],layoutType:{}}},created(){this.layoutType=this.layoutTypeDate[0]},methods:{onBackClick(){this.$router.go(-1)},onOptionsChange(t){this.sortType=t.id},onChangeLayoutTypeClick(){"1"===this.layoutType.type?this.layoutType=this.layoutTypeDate[1]:this.layoutType=this.layoutTypeDate[0]}}};const _=(0,S.Z)(T,[["render",a],["__scopeId","data-v-7ca7eb0a"]]);var D=_},1305:function(t,o,n){t.exports=n.p+"img/grid-type.f4d76126.svg"},4133:function(t,o,n){t.exports=n.p+"img/list-type.df8d5faa.svg"}}]);
//# sourceMappingURL=359.09a8ecc4.js.map