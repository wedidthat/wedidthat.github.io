(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[17],{1490:function(e,t,r){"use strict";r.d(t,{Z:function(){return Ce}});var n,o,a=r(353),l=r(601),i=r(661),c=r(1183),u=r(1021),s=r(1025),f=r.n(s),d=r(1011),p=r.n(d),b=r(322),g=r(1063),y=r.n(g),m=r(1085),h=r(1270),x=r(1324),v=r(684),j=r(1058),S=r(1006),k=r(1071),w=r.n(k),C=r(1018),O=r(1082),A=r(689),B=r(1080),I=r(1070),P=r(651);function M(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D,Z=function(e){var t=e.listContainer,r=e.option,l=e.isSelected,c=e.onSelect,u=e.onDeselect,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px 0px 0px 0px",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=T((0,a.useState)(!1),2),o=n[0],l=n[1],i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var n=new IntersectionObserver((function(e){e[0].isIntersecting?(l(!0),!1===r&&n.disconnect()):r&&l(!1)}),{root:e,rootMargin:t});return(null==i?void 0:i.current)&&n.observe(i.current),function(){n&&n.disconnect()}}),[e,i.current]),[o,i]}(t,"150px 0px 150px 0px"),f=T(s,2),d=f[0],b=f[1],g=(0,a.useCallback)((function(e){e.stopPropagation(),l?u(r):c(r)}),[r.value,l]);return(0,P.jsx)(v.Box,{ref:b,width:"100%",height:"24px"},d&&(0,P.jsx)(v.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"4px",paddingBottom:"4px",paddingLeft:"6px",paddingRight:"10px",cursor:"default","data-value":r.value,css:(0,i.css)(n||(n=M(["\n            &:hover {\n              & > span {\n                color: ",";\n              }\n            }\n          "])),A.colors.black)},(0,P.jsx)(p(),{textStyle:"small",color:l?"black":"darkGray",title:r.caption,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},r.caption),(0,P.jsx)(v.Box,{display:"flex",position:"relative",left:l?-2:0,cursor:"pointer",onClick:g,css:(0,i.css)(o||(o=M(["\n              &:hover {\n                & > svg {\n                  color: ",";\n                }\n              }\n            "])),l?A.colors.tomato:A.colors.black)},l?(0,P.jsx)(I.default,{color:"gray"}):(0,P.jsx)(B.default,{color:"gray"}))))};var _,R,E=function(e){var t,r,n=e.selectedOption,o=e.onDeselect;return(0,P.jsx)(v.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"default",marginTop:24,css:(0,i.css)(D||(t=["\n        &:first-child {\n          margin-top: 0;\n        }\n      "],r||(r=t.slice(0)),D=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))))},(0,P.jsx)(p(),{textStyle:"small",color:"black",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},n.caption),(0,P.jsx)(f(),{display:"flex",variant:"clean",onClick:function(e){e.stopPropagation(),o(n)}},(0,P.jsx)(I.default,{color:"gray"})))},z=function(e){var t=e.selectedOptions,r=e.onDeselect;return(0,P.jsx)(v.Box,{paddingTop:"12px",paddingBottom:"12px",paddingLeft:"8px",paddingRight:"14px",backgroundColor:"white",borderRadius:"8px"},t.map((function(e){return(0,P.jsx)(E,{key:e.value,selectedOption:e,onDeselect:r})})))};function L(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||W(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Y,Q=function(e){var t=e.initialValue,r=void 0===t?[]:t,n=e.options,o=e.onChange,c=e.labelText,u=e.labelStyle,s=e.container,d=e.containerForSelected,b=e.width,g=e.height,y=e.onToggleDropDown,m=V((0,a.useState)(!1),2),h=m[0],x=m[1],j=V((0,a.useState)(null),2),k=j[0],B=j[1],I=V((0,a.useState)(null),2),M=I[0],T=I[1],F=(0,S.D)(k,M,{placement:"bottom"}),D=F.styles,E=F.attributes,$=F.update;(0,a.useEffect)((function(){h&&$&&$(),y&&y(h)}),[h]);var H=(0,C.default)({watchingClick:h,callback:function(){return h&&x(!1)}}),W=V((0,a.useState)(r),2),K=W[0],Y=W[1],Q=function(e){Y((function(t){if(!Boolean(K.find((function(t){return t.value===e.value})))){var r=N(t);return r.push(e),r}return t}))},X=function(e){Y((function(t){var r=K.findIndex((function(t){return t.value===e.value}));if(r>-1){var n=N(t);return n.splice(r,1),n}return t}))};(0,a.useEffect)((function(){o&&o(K)}),[K]);var q=(0,P.jsx)(v.Box,U({ref:T,width:b||"calc(100% + 8px + 8px)",height:g||304,backgroundColor:"white",opacity:.98,borderRadius:"8px",border:"1px solid",borderColor:"lightGray",zIndex:102,style:G(G({},D.popper),{},{display:h?"block":"none"})},E.popper),(0,P.jsx)(w(),null,(function(e){var t=e.ref;return(0,P.jsx)(v.Box,{ref:t,width:"100%",paddingLeft:"18px",paddingRight:"18px",marginTop:"-1px"},(0,P.jsx)(v.Box,{ref:H},h&&n.map((function(e){return(0,P.jsx)(Z,{key:e.value,listContainer:M||void 0,option:e,onSelect:Q,onDeselect:X,isSelected:Boolean(K.find((function(t){return t.value===e.value})))})}))))})));return(0,P.jsx)(a.Fragment,null,K.length?d?l.createPortal((0,P.jsx)(z,{selectedOptions:K,onDeselect:X}),d):(0,P.jsx)(z,{selectedOptions:K,onDeselect:X}):null,(0,P.jsx)(v.Box,{ref:B,height:40,paddingLeft:"16px",paddingRight:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative",cursor:"pointer",onClick:function(e){e.stopPropagation(),x(!h)},css:(0,i.css)(_||(_=L(["\n          &:hover {\n            & svg {\n              color: ",";\n            }\n          }\n        "])),A.colors.black)},(0,P.jsx)(f(),{display:"block",variant:"clean",lineHeight:1},(0,P.jsx)(p(),{textStyle:"small",display:"block",css:(0,i.css)(R||(R=L(["\n              ","\n            "])),u||"")},c)),(0,P.jsx)(v.Box,{position:"relative",left:"-1px",top:"-2px"},(0,P.jsx)(f(),{variant:"clean",onClick:function(e){e.stopPropagation(),x(!h)},verticalAlign:"middle"},(0,P.jsx)(O.default,{color:"gray"})))),s?l.createPortal(q,s):q)},X=r(1031),q=r(1019);function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var te=function(e){var t,r,n=e.value,o=void 0===n?"":n,l=e.placeholder,c=e.validate,u=e.onSubmit,s=e.width,d=e.height,p=e.m,b=J((0,a.useState)(o),2),g=b[0],y=b[1],m=J((0,a.useState)((function(){return!c||c(o)})),2),h=m[0],x=m[1],j=J((0,a.useState)(!1),2),S=j[0],k=j[1],w=function(){h&&g!==o&&u(g)};return(0,P.jsx)(v.Box,{position:"relative",marginLeft:"2rm",marginRight:"2rm",borderTop:"1px solid",borderBottom:"1px solid",borderColor:"transparent"},(0,P.jsx)(X.default,{width:s||"100%",height:d||38,padding:"0 36px 0 8px",margin:p||0,border:"none !important",textStyle:"small",boxSizing:"border-box",backgroundColor:S||o&&h?A.colors.white:"transparent",borderRadius:"8px",textOverflow:"ellipsis",transition:"background 0.2s ease-in",css:(0,i.css)(Y||(t=["\n          &::placeholder {\n            color: ",";\n          }\n        "],r||(r=t.slice(0)),Y=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))),A.colors.black),placeholder:l,onFocus:function(){k(!0)},onBlur:function(){k(!1)},value:g,onKeyUp:function(e){var t;"Enter"===e.key&&(null===(t=e.target)||void 0===t||t.blur(),w())},onChange:function(e){y(e.target.value.trim()),c&&x(c(e.target.value.trim()))}}),(0,P.jsx)(v.Box,{position:"absolute",top:"50%",right:0,marginRight:"2rm",transform:"translateY(-50%)"},o&&h&&o===g?(0,P.jsx)(v.Box,{marginRight:"6px"},(0,P.jsx)(f(),{type:"button",onClick:function(){y(""),c&&x(c("")),u("")},variant:"clean"},(0,P.jsx)(I.default,{color:"gray"}))):h?(0,P.jsx)(v.Box,null,(0,P.jsx)(q.default,{height:24,width:24,onClick:w,color:"gray",hoverColor:"blue",display:"block",transform:"rotate(-90deg)",marginRight:0},(0,P.jsx)(O.default,{color:"white",display:"inline"}))):null))},re=r(1254),ne=r(1404);function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var le=function(e){var t=e.dropdownContainer,r=(0,a.useContext)(re.bZ),n=r.model,o=r.modelSet,l=(0,a.useRef)(null),i=oe((0,a.useState)(Boolean(n.block.model.get("stripe-allow_promotion_codes"))),2),c=i[0],u=i[1],s=oe((0,a.useState)((function(){return(e=n.block.model.get("stripe-shipping_rates"))&&Array.isArray(e)&&e[0]?e[0]:"";var e})),2),f=s[0],p=s[1];return(0,P.jsx)(a.Fragment,null,(0,P.jsx)(v.Box,{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:29,marginBottom:11,paddingLeft:"16px",paddingRight:"16px"},(0,P.jsx)(d.Text,{textStyle:"regular",color:"black"},"Stripe"),(0,P.jsx)(j.Z,{position:"relative",top:"2px",href:"https://help.readymag.com/hc/en-us/articles/360053970512#h_01F8T772CD3Q3ZVYY6ANA2WPV0"})),(0,P.jsx)(h.Z,{leftSlot:"Promo code",rightSlot:(0,P.jsx)(y(),{backgroundChecked:"blue",checked:c,onChange:function(){var e=!Boolean(n.block.model.get("stripe-allow_promotion_codes"));u(e),n.block.saveModelChanges({"stripe-allow_promotion_codes":e})}})}),(0,P.jsx)(Q,{initialValue:n.block.model.get("stripe-allowed_countries"),labelText:"Available countries",container:t,containerForSelected:l.current,options:ne.h,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.block.saveModelChanges({"stripe-allowed_countries":e})},onToggleDropDown:function(e){o({preventClose:e})}}),(0,P.jsx)(v.Box,{width:"100%",paddingLeft:"2rm",paddingRight:"2rm",marginTop:"-1px",ref:l,borderTop:"1px solid",borderBottom:"1px solid",borderColor:"transparent"}),(0,P.jsx)(v.Box,{marginBottom:"7px"},(0,P.jsx)(te,{placeholder:"Shipping ID",value:f,validate:function(e){return Boolean(e)&&/shr_[\w\d]+/g.test(e)},onSubmit:function(e){p(e),n.block.saveModelChanges({"stripe-shipping_rates":[e]})}})))},ie=r(1291),ce=r(1251),ue=r(1298),se=r(1327),fe=r(1286),de=r(624);function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return be(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ge,ye,me=a.forwardRef((function(e,t){var r=e.style,n=e.panelPortalElement,o=e.currentFontFamily,l=(0,a.useContext)(re.bZ),i=l.model,c=l.modelSet,u=(0,a.useMemo)((function(){return i.project.get("_id")}),[i]),s=(0,a.useMemo)((function(){return i.user.get("_id")}),[i]),f=(0,a.useMemo)((function(){return i.block.eCommerceManager.connectedProvider}),[i.block]),d=(0,a.useContext)(fe.p5).navigate,p=function(e){var t={};e.weight&&(t["bar-font-weight"]=e.weight),e.style&&(t["bar-font-style"]=e.style),Object.keys(t).length&&i.block.saveModelChanges(t)},g=pe((0,a.useState)(i.block.model.get("bar-background-color")?(0,de.vK)(i.block.model.get("bar-background-color"),(0,de._X)(i.block.model.get("bar-background-color-opacity"))):null),2),v=g[0],j=g[1],S=function(e){var t=100*e.a,r=(0,b.omit)(e,"a"),n=(0,de.Ge)(r);i.block.saveModelChangesDebounced({"bar-background-color":n,"bar-background-color-opacity":t})},k=pe((0,a.useState)(Boolean(i.block.model.get("bar-shadow"))),2),w=k[0],C=k[1],O=function(e){C(e),i.block.saveModelChanges({"bar-shadow":e})},A=pe((0,a.useState)(i.block.model.get("bar-color")?(0,de.vK)(i.block.model.get("bar-color"),(0,de._X)(i.block.model.get("bar-color-opacity"))):null),2),B=A[0],I=A[1],M=function(e){var t=100*e.a,r=(0,b.omit)(e,"a"),n=(0,de.Ge)(r);i.block.saveModelChangesDebounced({"bar-color":n,"bar-color-opacity":t})},T=pe((0,a.useState)(i.block.model.get("bar-font-size-factor")||1),2),F=T[0],D=T[1],Z=function(e){D(e),i.block.saveModelChangesDebounced({"bar-font-size-factor":e})},_=pe((0,a.useState)(i.block.model.get("bar-button-baseline")||0),2),R=_[0],E=_[1],z=function(e){E(e),i.block.saveModelChangesDebounced({"bar-button-baseline":e})},L=pe((0,a.useState)(i.block.model.get("bar-auto-open")),2),U=L[0],$=L[1],G=function(e){$(e),i.block.eCommerceManager.openSidebarOnAddItem=e,i.block.saveModelChanges({"bar-auto-open":e})},H=function(e){return c({preventClose:e})};return(0,P.jsx)(ie.ZP,{ref:t,style:r,isShowed:!0,portalElement:n,maxHeight:"100vh - 66px",scrollable:!0},(0,P.jsx)(ie.QP.Consumer,null,(function(e){var t=e.tooltipContainer,r=e.dropdownContainer;return(0,P.jsx)(a.Fragment,null,(0,P.jsx)(x.Z,{title:"Cart bar"}),(0,P.jsx)(ce.Z,{"aria-labelledby":"cart-bar-background-color",title:"Background",container:t,projectId:u,userId:s,color:v,setColor:j,onColorChange:S}),(0,P.jsx)(h.Z,{leftSlot:"Shadow",rightSlot:(0,P.jsx)(y(),{backgroundChecked:"blue",checked:w,onChange:O})}),(0,P.jsx)(ue.jo,{fontFamily:o,onClick:function(){return d(ke.FontsList)}}),(0,P.jsx)(se.Z,{fontFamily:o,fontWeight:i.block.model.get("bar-font-weight"),fontStyle:i.block.model.get("bar-font-style"),onChangeStyle:p,dropdownContainer:r,onToggleSelectPanel:H}),(0,P.jsx)(ce.Z,{"aria-labelledby":"cart-bar-text-color",title:"Text color",container:t,projectId:u,userId:s,color:B,setColor:I,onColorChange:M}),(0,P.jsx)(h.Z,{leftSlot:"Text scale",rightSlot:(0,P.jsx)(m.default,{min:1,max:1.3,step:.05,textAlign:"right",autoWidth:!0,value:F,onChange:Z})}),(0,P.jsx)(h.Z,{leftSlot:"Button baseline",rightSlot:(0,P.jsx)(m.default,{textAlign:"right",min:-25,max:25,autoWidth:!0,value:R,onChange:z})}),(0,P.jsx)(h.Z,{leftSlot:"Auto-open",rightSlot:(0,P.jsx)(y(),{backgroundChecked:"blue",checked:U,onChange:G}),showBorder:"stripe"===f}),"stripe"===f&&(0,P.jsx)(le,{dropdownContainer:r}))})))})),he=r(1284),xe=r(1302);function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return je(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Se(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ke,we=(0,i.styled)("div")(ge||(ge=Se(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n  opacity: 0;\n  z-index: 4004;\n"])));!function(e){e.Main="Main",e.FontsList="FontsList"}(ke||(ke={}));var Ce=function(e){var t=e.panelPortalElement,r=(0,a.useContext)(re.bZ).model,n=(0,a.useRef)(null),o=(0,P.jsx)(xe.Z,{leftSlot:(0,P.jsx)(f(),{"aria-labelledby":"text-typography-back",variant:"clean",onClick:function(){return n.current&&n.current.goBack()},css:function(e){return(0,i.css)(ye||(ye=Se(["\n            &:hover svg {\n              color: ",";\n              opacity: 1;\n            }\n          "])),e.colors.black)}},(0,P.jsx)(u.default,{color:"darkGray"}))}),s=ve((0,a.useState)(r.block.model.get("bar-font-family")),2),p=s[0],b=s[1],g=function(e){b(e.css_name),r.block.saveModelChanges({"bar-font-family":e.css_name})},y=ve((0,a.useState)(r.block.model.get("bar-color")),1)[0];return(0,P.jsx)(a.Fragment,null,(0,P.jsx)(he.t,{placement:"bottom",control:function(e){var t=e.ref;return(0,P.jsx)(he.Z,{ref:t,label:(0,P.jsx)(d.Text,{textStyle:"small",fontFamily:"-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Fira Sans', Roboto, 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif"},"Settings"),size:31,withButton:!1,onClick:function(e){e.preventDefault(),r.disabled||(r.selected?r.deselect():r.select())}},(0,P.jsx)(c.default,{className:"settings-toggle",width:31,height:28,color:y,cursor:"pointer"}))},panel:function(e){var a=e.ref,l=e.style;return r.selected?(0,P.jsx)(fe.ZP,{ref:n,childRef:a,initialScreen:ke.Main},(0,P.jsx)(me,{key:ke.Main,ref:a,style:l,panelPortalElement:t,currentFontFamily:p}),(0,P.jsx)(ue.ZP,{key:ke.FontsList,style:l,headerSlot:o,currentFontFamily:p,panelPortalElement:t,onFontSelect:g,hideUpload:!0})):null}}),r.selected&&l.createPortal((0,P.jsx)(we,{onClick:function(){r.preventClose||r.deselect()}}),document.body))}}}]);