"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[2071],{2071:function(e,r,n){n.r(r),n.d(r,{sc_price_range:function(){return u}});var i=n(5671),c=n(3144),t=n(8860),u=function(){function e(r){(0,i.Z)(this,e),(0,t.r)(this,r),this.prices=void 0,this.minPrice=void 0,this.maxPrice=void 0}return(0,c.Z)(e,[{key:"handlePricesChange",value:function(){var e,r;(this.prices||[]).filter((function(e){return!(null==e?void 0:e.archived)})).forEach((function(n){(!r||n.amount>r.amount)&&(r=n),(!e||n.amount<e.amount)&&(e=n)})),this.minPrice=e,this.maxPrice=r}},{key:"componentWillLoad",value:function(){this.handlePricesChange()}},{key:"render",value:function(){return this.maxPrice&&this.minPrice?(0,t.h)(t.H,null,this.maxPrice.amount==this.minPrice.amount?(0,t.h)("span",null,(0,t.h)("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount})):(0,t.h)("span",null,(0,t.h)("sc-visually-hidden",null,wp.i18n.__("Price range from","surecart")," "),(0,t.h)("sc-format-number",{type:"currency",currency:this.minPrice.currency,value:this.minPrice.amount}),(0,t.h)("span",{"aria-hidden":!0}," — "),(0,t.h)("sc-visually-hidden",null,wp.i18n.__("to","surecart")),(0,t.h)("sc-format-number",{type:"currency",currency:this.maxPrice.currency,value:this.maxPrice.amount}))):(0,t.h)(t.H,null)}}],[{key:"watchers",get:function(){return{prices:["handlePricesChange"]}}}]),e}();u.style=":host{display:block;line-height:1}"}}]);