(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[45],{1385:function(t,e,r){"use strict";var o,a=r(353),i=r(697),l=r(308),n=r(683),s=r(1011),c=r.n(s),u=r(661),m=r(651);function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,a=!1,i=void 0;try{for(var l,n=t[Symbol.iterator]();!(o=(l=n.next()).done)&&(r.push(l.value),!e||r.length!==e);o=!0);}catch(t){a=!0,i=t}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var h=function(t){var e=t.url,r=t.label,o=p((0,a.useState)(!1),2),i=o[0],l=o[1];return(0,m.jsx)(c(),{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},as:"a",href:e,color:i?"orange":"white",fontFamily:"Graphik",fontWeight:400,fontSize:16,letterSpacing:-.04,lineHeight:"24px",display:"inline-block",textDecoration:"none",fontStyle:"normal"},r)},b=function(t){var e=t.items,r=t.width,o=t.title,a=t.isMobile;return(0,m.jsx)(n.Box,{width:r},(0,m.jsx)(n.Box,{borderBottom:"1px solid rgba(128, 128, 128, 0.24)",paddingBottom:"6px",marginBottom:"16px"},(0,m.jsx)(c(),{fontFamily:"Graphik",fontWeight:400,fontSize:16,letterSpacing:-.04,lineHeight:"24px",color:"darkGray",fontStyle:"normal"},o)),(0,m.jsx)(n.Box,e.length>1&&!a?{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}:{},e.map((function(t,r){return(0,m.jsx)(n.Box,{key:"ul-".concat(r),marginBottom:a&&t.mobileSeparator?36:void 0},t.items.map((function(t,o){return(0,m.jsx)(n.Box,{marginRight:e.length-1!==r||a?void 0:30,key:"ul-".concat(r,"-li-").concat(o)},(0,m.jsx)(h,{url:t.url,label:t.label}))})))}))))};e.Z=function(t){var e,r,s=t.isFullSize,p=void 0!==s&&s,d=l.Z.readymag_host,h=(0,a.useContext)(i.BackboneContext).model,g=!(null!=h&&h.isFullSize||p);return(0,m.jsx)(n.Box,{backgroundColor:"rgb(40, 40, 40)",height:"100%",width:"100%",css:(0,u.css)(o||(e=["\n        ","\n      "],r||(r=e.slice(0)),o=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))),null==h?void 0:h.style)},(0,m.jsx)(n.Box,{margin:"0 auto",width:"100%",maxWidth:g?"none":1024,height:"100%",padding:g?"36px 20px 36px":"58px 20px 36px"},(0,m.jsx)(n.Box,{alignItems:"flex-start",justifyContent:"space-between",display:g?"block":"flex"},(0,m.jsx)(b,{title:"company",isMobile:g,width:g?"100%":185,items:[{mobileSeparator:!0,items:[{label:"about",url:"".concat(d,"/about/")},{label:"terms of service",url:"".concat(d,"/readymag/terms-and-privacy/")},{label:"privacy policy",url:"".concat(d,"/readymag/terms-and-privacy/2/")},{label:"cookie policy",url:"".concat(d,"/readymag/terms-and-privacy/cookie_policy/")},{label:"we are hiring",url:"".concat(d,"/readymag/we-are-hiring/")}]}]}),(0,m.jsx)(b,{title:"product",isMobile:g,width:g?"100%":185,items:[{mobileSeparator:!0,items:[{label:"product updates",url:"https://medium.com/readymag/product-updates/home"},{label:"r/masters",url:"".concat(d,"/examples/r-masters/")},{label:"community",url:"".concat(d,"/readymag/community/")},{label:"help",url:"https://help.readymag.com/"}]}]}),(0,m.jsx)(b,{title:"case studies",isMobile:g,width:g?"100%":185,items:[{mobileSeparator:!0,items:[{label:"design studio",url:"".concat(d,"/for-designers")},{label:"customer stories",url:"".concat(d,"/customers/main")},{label:"portfolio",url:"".concat(d,"/portfolio")},{label:"editorial",url:"".concat(d,"/editorial")}]}]}),(0,m.jsx)(b,{title:"readymag editorials",isMobile:g,width:g?"100%":185,items:[{mobileSeparator:!0,items:[{label:"design almanac",url:"".concat(d,"/almanac")},{label:"design stories",url:"".concat(d,"/designstories")},{label:"enso",url:"https://enso.readymag.com/"},{label:"designing women",url:"https://designingwomen.readymag.com/"},{label:"projects of the year",url:"".concat(d,"/projects-of-the-year/")},{label:"special projects",url:"".concat(d,"/special-projects/")}]}]}),(0,m.jsx)(b,{title:"subscribe to",isMobile:g,width:g?"100%":185,items:[{mobileSeparator:!0,items:[{label:"newsletter",url:"http://subscribe.readymag.com/"},{label:"youtube",url:"https://www.youtube.com/channel/UCz3Ylsb-JuM76cS1nsfyCLw"},{label:"medium",url:"https://medium.com/readymag"},{label:"facebook",url:"https://www.facebook.com/readymag"},{label:"instagram",url:"https://www.instagram.com/readymag/"},{label:"twitter",url:"https://twitter.com/readymag"},{label:"pinterest",url:"https://www.pinterest.ru/readymagpins/boards/"},{label:"are.na",url:"https://www.are.na/readymag"},{label:"dribbble",url:"https://dribbble.com/readymag"}]}]})),(0,m.jsx)(n.Box,{alignItems:"flex-start",display:g?"block":"flex"},(0,m.jsx)(n.Box,{width:g?"100%":252},(0,m.jsx)(c(),{fontFamily:"Graphik",color:"darkGray",fontWeight:400,fontSize:12,letterSpacing:-.04,lineHeight:g?"1":"24px"},"© ",(new Date).getFullYear()," Readymag Inc.")))))}},1384:function(t,e,r){"use strict";r.r(e);var o=r(312),a=r(601),i=r(1340),l=r(344),n=r(697),s=r(1385),c=r(342),u=i.Z.extend({render:function(){var t=this.mag.viewport,e=this.page.pageViewport===c.sJ.Default&&t===c.sJ.PhonePortrait,r=[c.sJ.Default,c.sJ.TabletPortrait].includes(t)||e;return this.h=r?400:1199,this.w=this.mag.getViewportWidth(t),this.makeBox("widget-rm-footer"),this.propsModel=new Backbone.Model({isMobileViewport:!1,isFullSize:r,style:this.getStyles()}),this.$footer=(0,o.ZP)('<div style="height: 100%">').appendTo(this.$el).get(0),(0,n.renderReact)({component:s.Z,domElement:this.$footer,model:this.propsModel}),this.rendered=!0,this.widgetIsLoaded(),this},destroy:function(){return a.unmountComponentAtNode(this.$footer),i.Z.prototype.destroy.apply(this,arguments)},getStyles:function(){var t=this.page.pageViewport,e=this.mag.viewport,r=this.mag.getViewportWidth(t);if(!(t===c.sJ.Default&&e===c.sJ.Default)||l.Z.isOn(t,r,this.mag.viewOpts)){var o=this.mag.getScale(t),a=1/o,i=l.Z.isCSSZoom()&&e===c.sJ.Default&&t===c.sJ.Default,n=l.Z.isCSSTransform()&&e===c.sJ.Default&&t===c.sJ.Default,s=t===c.sJ.Default&&e===c.sJ.PhonePortrait,u=t===c.sJ.Default&&e===c.sJ.TabletPortrait;return s?{height:"".concat(this.h,"px"),"transform-origin":"left bottom"}:i?{zoom:a,width:"100%",height:"".concat(this.h,"px"),position:"absolute",bottom:0}:n||u?{width:"".concat(r*o,"px"),height:"".concat(this.h,"px"),transform:"scale(".concat(a,")"),"transform-origin":"left bottom"}:{}}},onPageResize:function(){var t;i.Z.prototype.onPageResize.apply(this,arguments),null===(t=this.propsModel)||void 0===t||t.set({style:this.getStyles()})}});e.default=u}}]);