(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[12],{1440:function(e,t,r){"use strict";r.r(t);var o=r(312),s=r(321),i=r(308),n=r(975),a=r(323),h=r(339),u=function(e){if(s.Z.bindAll(this),s.Z.extend(this,e),!RM.common.magCreationInProgress)if(this.analytics=this.router&&this.router.analytics,this.router?this.router==RM.viewerRouter?this.routerName="viewer":this.router==RM.collectorRouter?this.routerName="collector":this.router==RM.homepageRouter?this.routerName="homepage":this.router==RM.constructorRouter?this.routerName="constructor":this.routerName="unknown":this.routerName="error",this.analytics&&!this.noCreateRequestTracking&&this.analytics.sendEvent("Create Mag Request"),a.Z.isDesktop)if(Modernizr.msie||Modernizr.msie11)this.showIEPopupWarning();else if(this.me){var t="function"==typeof this.me.get?this.me.get("permissions"):this.me.permissions;this.skipPermissionsCheck||t&&t.can_create_mag?this.innerCreateMag():this.showCreatePopupWarning()}else this.showJoinForm();else this.showMobilePopupWarning()};u.prototype.innerCreateMag=function(){var e={};this.analytics&&this.analytics.sendEvent("Create Mag"),this.currentFolderId&&(e.folder=this.currentFolderId),this.sharedUser&&(e.user=this.sharedUser),RM.common.magCreationInProgress=!0,o.ZP.ajax({url:i.Z.readymag_auth_host+(this.templateID?"/api/magFromTemplate/"+this.templateID:"/api/mag/"),type:"POST",data:e,success:s.Z.bind((function(e){"function"==typeof this.success&&this.success(),RM.common.magCreationInProgress=!1,window.location.href=i.Z.readymag_auth_host+"/edit/"+e.num_id+"/contents/"}),this),error:s.Z.bind((function(){if("function"==typeof this.error&&this.error(),RM.common.magCreationInProgress=!1,console.log(arguments),alert("Creating project problem. Contact tech support, please: "+i.Z.SUPPORT_MAIL),this.me){var e="function"==typeof this.me.get?this.me.get("uri"):this.me.uri;e&&(window.location.href=i.Z.readymag_auth_host+"/"+e)}}),this)})},u.prototype.showCreatePopupWarning=function(){n.default&&new n.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-create"},alert_source:"create mag"}).render()},u.prototype.showMobilePopupWarning=function(){n.default&&new n.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-switch-desktop-create"},alert_source:"create mag mobile"}).render()},u.prototype.showIEPopupWarning=function(){n.default&&new n.default({$parent:(0,o.ZP)("body > .popups"),router:this.router,opts:{type:"type-browsers"}}).render()},u.prototype.showJoinForm=function(){h.default.saveJoinData(),window.location.href="".concat(i.Z.readymag_host,"/auth/join").concat(this.templateID?"?template="+this.templateID:"")},t.default=u}}]);