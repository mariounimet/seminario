import{createLocalStore}from"../local";import{createStore}from"@stencil/store";import{getSerializedState}from"@store/utils";import{getQueryArg}from"@wordpress/url";const{checkout:checkout}=getSerializedState(),notPersistCart="browser"!==(null==checkout?void 0:checkout.persist)||!!getQueryArg(window.location.href,"no_cart"),store=notPersistCart?createStore({live:{},test:{}}):createLocalStore("surecart-local-storage",{live:{},test:{}},!0),{state:state,onChange:onChange,on:on,set:set,get:get,dispose:dispose}=store;window.scStore=store;export default store;export{state,onChange,on,set,get,dispose};