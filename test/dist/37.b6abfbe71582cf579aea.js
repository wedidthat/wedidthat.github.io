(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[37],{1359:function(t,e,i){"use strict";i.r(e);var s=i(312),o=i(321),n=i(1340),a=i(340),r=i(344),h=n.Z.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,render:function(){this.makeBox("widget-gmaps"),this.$el.html((0,s.ZP)('<div class="map-container"></div>')),this.rendered=!0;var t=this.api_key;return this.mag&&this.mag.opts&&this.mag.opts.gmaps_key&&this.mag.opts.gmaps_key!==this.api_key&&(t=this.mag.opts.gmaps_key),a.Z.initGMapsAPI(t,function(){this.destroyed||o.Z.defer(function(){this.destroyed||(r.Z.isOn(this.page.pageViewport,this.mag.getViewportWidth(this.page.pageViewport),this.mag.viewOpts)&&this.scale(),this.map=new google.maps.Map(this.$(".map-container").get(0),{zoom:this.map_zoom,center:new google.maps.LatLng(this.center_lat,this.center_lng),mapTypeId:this.map_type_id||google.maps.MapTypeId.ROADMAP,disableDefaultUI:!this.show_controls,streetViewControl:!1,scrollwheel:void 0===this.scrollwheel||!!this.scrollwheel}),this.marker_lat&&this.marker_lng&&"directions"!==this.current_type&&(this.marker=new google.maps.Marker({map:this.map,position:new google.maps.LatLng(this.marker_lat,this.marker_lng)}),google.maps.event.addListener(this.marker,"click",function(){this.infowindow&&this.infowindow.open(this.map,this.marker)}.bind(this)),this.infowindow=new google.maps.InfoWindow({maxWidth:this.w-100}),this.formatted_address?this.infowindow.setContent(this.formatted_address):(new google.maps.Geocoder).geocode({latLng:new google.maps.LatLng(this.marker_lat,this.marker_lng)},function(t,e){e===google.maps.GeocoderStatus.OK&&t[0]&&this.infowindow.setContent(t[0].formatted_address)}.bind(this))),"directions"===this.current_type&&this.direction_start_lat&&this.direction_start_lng&&this.direction_end_lat&&this.direction_end_lng&&this.direction_route_type?(this.directionsService=new google.maps.DirectionsService,this.directionsDisplay=new google.maps.DirectionsRenderer({preserveViewport:!0}),this.directionsService.route({origin:new google.maps.LatLng(this.direction_start_lat,this.direction_start_lng),destination:new google.maps.LatLng(this.direction_end_lat,this.direction_end_lng),travelMode:google.maps.TravelMode[this.direction_route_type.toUpperCase()]},function(t,e){e===google.maps.DirectionsStatus.OK&&(this.directionsDisplay.setDirections(t),this.directionsDisplay.setMap(this.map),google.maps.event.addListener(this.map,"tilesloaded",function(){this.widgetIsLoaded()}.bind(this)))}.bind(this))):google.maps.event.addListener(this.map,"tilesloaded",function(){this.widgetIsLoaded()}.bind(this)),"custom"===this.current_type&&this.custom_json&&this.map.setOptions({styles:JSON.parse(this.custom_json)}))}.bind(this))}.bind(this)),this},scale:function(){var t=this.mag.getScale(this.page.pageViewport),e=this.$(".map-container");if(r.Z.isCSSZoom())e.css("zoom",1/t);else if(r.Z.isCSSTransform()){var i=100*t,s=(i-100)/2;e.css({transform:"scale("+1/t+") translate(-"+s+"%, -"+s+"%)",width:i+"%",height:i+"%"})}},start:function(){return this.started=!0,this.rendered&&!this.destroyed&&this.map?(google.maps.event.trigger(this.map,"resize"),this.map.setCenter(new google.maps.LatLng(this.center_lat,this.center_lng)),this):this},destroy:function(){return this.map&&google.maps.event.clearListeners(this.map,"tilesloaded"),this.marker&&google.maps.event.clearListeners(this.marker,"click"),n.Z.prototype.destroy.apply(this,arguments)}});e.default=h}}]);