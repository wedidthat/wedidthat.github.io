(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[55],{1475:function(t,s,e){"use strict";var a,i,n,r,o,d,c=e(351);s.Z=(i={},n="template-viewer-mag-page-password",r=(0,c.f)(a||(o=['\n\t<div class="magpassword-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="back invisible" <%=(imgSrc ? \'style="background-image:url(\' + imgSrc + \')"\' : "")%>></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content invisible">\n\t\t\t\t\t<div class="password-wrapper">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="password" class="password-input" placeholder="Enter password"<%=(isPagePassword ? \'\' : \' id="magpassword-input"\')%> required <%=(isPagePassword ? \'autocomplete="new-password"\' : \'autofocus\')%>>\n\t\t\t\t\t\t\t<div class="access disabled">Open</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<% if (!user.get(\'permissions\') || !user.get(\'permissions\').white_label) { %>\n\t\t\t<div class="author invisible">\n\t\t\t\t<div class="userpic">\n\t\t\t\t\t<a href="<%-user.getLink()%>"><img src="<%-user.getUserpic(128)%>" alt=""></a>\n\t\t\t\t\t<a href="<%-user.getLink()%>"><div class="username"><%-user.get(\'name\')%></div></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="caption">Published by</div>\n\t\t\t</div>\n\t\t\t<div class="powered invisible">\n\t\t\t\t<div class="caption-powered">Made with</div>\n\t\t\t\t<a href="<%=Constants.readymag_host%>"><div class="logo-powered"></div></a>\n\t\t\t</div>\n\t\t<% } %>\n\t</div>\n'],d||(d=o.slice(0)),a=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(d)}})))),n in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i)},1493:function(t,s,e){"use strict";e.r(s);var a=e(312),i=e(336),n=e.n(i),r=e(321),o=e(338),d=e(1475),c=e(308),l=e(349),p=n().View.extend({className:"magpassword",events:{"click .access":"onAccessClick","keydown #magpassword-input":"onPasswordKeydown","input #magpassword-input":"onPasswordInput"},initialize:function(t){r.Z.bindAll(this),r.Z.extend(this,t),this.router=t.router,this.template=d.Z["template-viewer-mag-page-password"]},render:function(t){var s,e=this,i=t.mag.pass_bg;r.Z.extend(this,t),s=new o.UserModel(this.mag.user),(0,a.ZP)(new Image).load((function(){e.$el.html(e.template({user:s,imgSrc:i,Constants:c.Z,isPagePassword:!1})),e.$parent&&(e.$parent.find(e.className).remove(),e.$parent.append(e.$el)),e.delegateEvents(),r.Z.delay((function(){e.$(".back, .center-content").removeClass("invisible"),r.Z.delay((function(){(0,a.ZP)("#magpassword-input").focus().select(),e.$(".author, .powered").removeClass("invisible")}),700)}),200)})).prop("src",i||(0,l.findImagePath)("./viewer/mag-password/bg.jpg"))},onAccessClick:function(){var t=a.ZP.trim((0,a.ZP)("#magpassword-input").val());t?(this.xhr&&this.xhr.abort(),this.xhr=a.ZP.ajax({url:"/api/readymag/authorize",method:"POST",data:{pass:t,num_id:this.mag.num_id},success:function(){this.proceed()},error:function(){(0,a.ZP)("#magpassword-input").focus().select(),this.shake()},context:this})):this.shake()},proceed:function(){(0,a.ZP)("body").removeClass("black"),this.remove(),this.mag.has_code_injection||this.mag.opts&&this.mag.opts.gtm_id?window.location.reload():this.router.restartFullMag(this.pageUri,this.isPageNum)},onPasswordKeydown:function(t){13===t.keyCode&&this.onAccessClick()},onPasswordInput:function(){this.$(".access").toggleClass("disabled",!this.$(".password-input").val()),this.$(".password-input").toggleClass("active",this.$(".password-input").val().length>0)},shake:function(){var t=this;this.$(".password-wrapper").addClass("shake"),r.Z.delay((function(){t.$(".password-wrapper").removeClass("shake")}),500)}});s.default=p}}]);