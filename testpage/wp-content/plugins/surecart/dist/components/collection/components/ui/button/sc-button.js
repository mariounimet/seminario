import{Fragment,h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScButton{constructor(){this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="default",this.size="medium",this.caret=!1,this.full=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.busy=!1,this.pill=!1,this.circle=!1,this.submit=!1,this.name=void 0,this.value=void 0,this.href=void 0,this.target=void 0,this.download=void 0,this.autofocus=void 0}componentWillLoad(){this.handleSlotChange()}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=!!this.button.children,this.hasPrefix=!!this.button.querySelector('[slot="prefix"]'),this.hasSuffix=!!this.button.querySelector('[slot="suffix"]')}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleClick(e){(this.disabled||this.loading||this.busy)&&(e.preventDefault(),e.stopPropagation()),this.submit&&this.submitForm()}submitForm(){var e,t;const s=(null===(t=null===(e=this.button.closest("sc-form"))||void 0===e?void 0:e.shadowRoot)||void 0===t?void 0:t.querySelector("form"))||this.button.closest("form"),o=document.createElement("button");s&&(o.type="submit",o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clip="rect(0 0 0 0)",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",s.append(o),o.click(),o.remove())}render(){const e=this.href?"a":"button",t=h(Fragment,null,h("span",{part:"prefix",class:"button__prefix"},h("slot",{onSlotchange:()=>this.handleSlotChange(),name:"prefix"})),h("span",{part:"label",class:"button__label"},h("slot",{onSlotchange:()=>this.handleSlotChange()})),h("span",{part:"suffix",class:"button__suffix"},h("slot",{onSlotchange:()=>this.handleSlotChange(),name:"suffix"})),this.caret?h("span",{part:"caret",class:"button__caret"},h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"6 9 12 15 18 9"}))):"",this.loading||this.busy?h("sc-spinner",{exportparts:"base:spinner"}):"");return h(e,{part:"base",class:{button:!0,[`button--${this.type}`]:!!this.type,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--busy":this.busy,"button--pill":this.pill,"button--standard":!this.outline,"button--outline":this.outline,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix,"button--is-rtl":isRtl()},href:this.href,target:this.target,download:this.download,autoFocus:this.autofocus,rel:this.target?"noreferrer noopener":void 0,role:"button","aria-disabled":this.disabled?"true":"false","aria-busy":this.busy||this.loading?"true":"false",tabindex:this.disabled?"-1":"0",disabled:this.disabled||this.busy,type:this.submit?"submit":"button",name:this.name,value:this.value,onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus(),onClick:e=>this.handleClick(e)},t)}static get is(){return"sc-button"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-button.scss"]}}static get styleUrls(){return{$:["sc-button.css"]}}static get properties(){return{type:{type:"string",mutable:!1,complexType:{original:"'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text' | 'link'",resolved:'"danger" | "default" | "info" | "link" | "primary" | "success" | "text" | "warning"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The button's type."},attribute:"type",reflect:!0,defaultValue:"'default'"},size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The button's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},caret:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws the button with a caret for use with dropdowns, popovers, etc."},attribute:"caret",reflect:!0,defaultValue:"false"},full:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws the button full-width."},attribute:"full",reflect:!0,defaultValue:"false"},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Disables the button."},attribute:"disabled",reflect:!0,defaultValue:"false"},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws the button in a loading state."},attribute:"loading",reflect:!0,defaultValue:"false"},outline:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws an outlined button."},attribute:"outline",reflect:!0,defaultValue:"false"},busy:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws the button in a busy state."},attribute:"busy",reflect:!0,defaultValue:"false"},pill:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws a pill-style button with rounded edges."},attribute:"pill",reflect:!0,defaultValue:"false"},circle:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Draws a circle button."},attribute:"circle",reflect:!0,defaultValue:"false"},submit:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!0,docs:{tags:[],text:"Indicates if activating the button should submit the form. Ignored when `href` is set."},attribute:"submit",reflect:!0,defaultValue:"false"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"An optional name for the button. Ignored when `href` is set."},attribute:"name",reflect:!1},value:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"An optional value for the button. Ignored when `href` is set."},attribute:"value",reflect:!1},href:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`."},attribute:"href",reflect:!0},target:{type:"string",mutable:!1,complexType:{original:"'_blank' | '_parent' | '_self' | '_top'",resolved:'"_blank" | "_parent" | "_self" | "_top"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Tells the browser where to open the link. Only used when `href` is set."},attribute:"target",reflect:!1},download:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Tells the browser to download the linked file as this filename. Only used when `href` is set."},attribute:"download",reflect:!1},autofocus:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Tells the browser to autofocus."},attribute:"autofocus",reflect:!1}}}static get states(){return{hasFocus:{},hasLabel:{},hasPrefix:{},hasSuffix:{}}}static get events(){return[{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the button loses focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the button gains focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get elementRef(){return"button"}}