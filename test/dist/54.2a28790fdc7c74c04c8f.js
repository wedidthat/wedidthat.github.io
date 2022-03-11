(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[54],{1475:function(t,e,s){"use strict";var n,i,a,r,o,d,c=s(351);e.Z=(i={},a="template-viewer-mag-page-password",r=(0,c.f)(n||(o=['\n\t<div class="magpassword-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="back invisible" <%=(imgSrc ? \'style="background-image:url(\' + imgSrc + \')"\' : "")%>></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content invisible">\n\t\t\t\t\t<div class="password-wrapper">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="password" class="password-input" placeholder="Enter password"<%=(isPagePassword ? \'\' : \' id="magpassword-input"\')%> required <%=(isPagePassword ? \'autocomplete="new-password"\' : \'autofocus\')%>>\n\t\t\t\t\t\t\t<div class="access disabled">Open</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<% if (!user.get(\'permissions\') || !user.get(\'permissions\').white_label) { %>\n\t\t\t<div class="author invisible">\n\t\t\t\t<div class="userpic">\n\t\t\t\t\t<a href="<%-user.getLink()%>"><img src="<%-user.getUserpic(128)%>" alt=""></a>\n\t\t\t\t\t<a href="<%-user.getLink()%>"><div class="username"><%-user.get(\'name\')%></div></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="caption">Published by</div>\n\t\t\t</div>\n\t\t\t<div class="powered invisible">\n\t\t\t\t<div class="caption-powered">Made with</div>\n\t\t\t\t<a href="<%=Constants.readymag_host%>"><div class="logo-powered"></div></a>\n\t\t\t</div>\n\t\t<% } %>\n\t</div>\n'],d||(d=o.slice(0)),n=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(d)}})))),a in i?Object.defineProperty(i,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[a]=r,i)},1474:function(t,e,s){"use strict";s.r(e);var n=s(312),i=s(336),a=s.n(i),r=s(321),o=s(338),d=s(1475),c=s(308),p=s(349);function u(t,e,s,n,i,a,r){try{var o=t[a](r),d=o.value}catch(t){return void s(t)}o.done?e(d):Promise.resolve(d).then(n,i)}var l,h,v=a().View.extend({className:"pagepassword",initialize:function(t){r.Z.bindAll(this),r.Z.extend(this,t),this.router=t.router,this.mag=t.mag,this.page=t.page,this.template=d.Z["template-viewer-mag-page-password"]},render:function(){var t=this,e=this.mag.pass_bg,s=new o.UserModel(this.mag.user);(0,n.ZP)(new Image).load((function(){t.$el.html(t.template({user:s,imgSrc:e,Constants:c.Z,isPagePassword:!0})),t.$parent&&(t.$parent.find(t.className).remove(),t.$parent.append(t.$el)),t.$pwdInput=t.$el.find(".password-input"),t.$openBtn=t.$el.find(".access"),t.bindDOMEvents(),r.Z.delay((function(){t.$(".back, .center-content").removeClass("invisible"),r.Z.delay((function(){t.$(".author, .powered").removeClass("invisible")}),700)}),200)})).prop("src",e||(0,p.findImagePath)("./viewer/mag-password/bg.jpg"))},destroy:function(){this.unbindDOMEvents()},onAccessClick:function(){var t=n.ZP.trim(this.$pwdInput.val());t?(this.xhr&&this.xhr.abort(),this.xhr=n.ZP.ajax({url:"/api/readymag/authorize",method:"POST",data:{pass:t,num_id:this.mag.num_id,page_num_id:this.page.num_id},success:function(){this.proceed()},error:function(){this.$pwdInput.focus().select(),this.shake()},context:this})):this.shake()},proceed:(l=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=this).$(".author, .powered, .center-content").addClass("invisible"),r.Z.delay((function(){e.$(".magpassword-container, .back").addClass("invisible"),r.Z.delay((function(){e.remove(),e.router.restartMag({currentPage:e.page.num,refetchOnlyPrivate:!0})}),300)}),300);case 3:case"end":return t.stop()}}),t,this)})),h=function(){var t=this,e=arguments;return new Promise((function(s,n){var i=l.apply(t,e);function a(t){u(i,s,n,a,r,"next",t)}function r(t){u(i,s,n,a,r,"throw",t)}a(void 0)}))},function(){return h.apply(this,arguments)}),onPasswordKeydown:function(t){13===t.keyCode&&this.onAccessClick()},onPasswordInput:function(){this.$(".access").toggleClass("disabled",!this.$(".password-input").val()),this.$(".password-input").toggleClass("active",this.$(".password-input").val().length>0)},shake:function(){var t=this;this.$(".password-wrapper").addClass("shake"),r.Z.delay((function(){t.$(".password-wrapper").removeClass("shake")}),500)},bindDOMEvents:function(){this.$openBtn.on("click",this.onAccessClick),this.$pwdInput.on("keydown",this.onPasswordKeydown),this.$pwdInput.on("input",this.onPasswordInput)},unbindDOMEvents:function(){this.$openBtn.off("click",this.onAccessClick),this.$pwdInput.off("keydown",this.onPasswordKeydown),this.$pwdInput.off("input",this.onPasswordInput)}});e.default=v}}]);