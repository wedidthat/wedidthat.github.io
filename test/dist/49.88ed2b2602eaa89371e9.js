(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[49],{1461:function(t,o,n){"use strict";n.r(o);var i=n(344),a=function(t){return t*Math.PI/180};o.default=function(t){var o=t.widget,n=t.e;if(o.isDragging){n.state.isTouchEvent&&n.originalEvent.preventDefault(),"none"!==document.body.style.pointerEvents&&(document.body.style.pointerEvents="none");var e=(i.Z.isCSSZoom()||i.Z.isCSSTransform())&&o.currentScale||1,s=o.is_above?n.state.cursorPosition.x:n.state.cursorPagePosition.x,r=o.is_above?n.state.cursorPosition.y:n.state.cursorPagePosition.y,l=0,u=0,v=(o.angle||0)+(o.animationAngle||0);if(v){var c,d,m,S,f,y,h=s*Math.cos(a(v))+r*Math.sin(a(v)),x=-1*s*Math.sin(a(v))+r*Math.cos(a(v)),P=((null===(c=o.mouseStart)||void 0===c?void 0:c.x)||0)*Math.cos(a(v))+((null===(d=o.mouseStart)||void 0===d?void 0:d.y)||0)*Math.sin(a(v)),g=-1*((null===(m=o.mouseStart)||void 0===m?void 0:m.x)||0)*Math.sin(a(v))+((null===(S=o.mouseStart)||void 0===S?void 0:S.y)||0)*Math.cos(a(v));l=(h-P)/e/((null===(f=o.animationScale)||void 0===f?void 0:f.x)||1),u=(x-g)/e/((null===(y=o.animationScale)||void 0===y?void 0:y.y)||1)}else{var p,M,b,k;l=(s-((null===(p=o.mouseStart)||void 0===p?void 0:p.x)||0))/e/((null===(M=o.animationScale)||void 0===M?void 0:M.x)||1),u=(r-((null===(b=o.mouseStart)||void 0===b?void 0:b.y)||0))/e/((null===(k=o.animationScale)||void 0===k?void 0:k.y)||1)}o.$el[0]&&o.startPosition&&(o.$el[0].style.transform=o.$el[0].style.transform.replace(/translate\(.+?\)/,"translate(".concat((o.startPosition.x||0)+l,"px, ").concat((o.startPosition.y||0)+u,"px)")))}}}}]);