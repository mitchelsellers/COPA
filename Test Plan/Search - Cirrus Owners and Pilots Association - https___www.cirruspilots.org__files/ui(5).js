(function(n){typeof n.telligent=="undefined"&&(n.telligent={});typeof n.telligent.evolution=="undefined"&&(n.telligent.evolution={});typeof n.telligent.evolution.widgets=="undefined"&&(n.telligent.evolution.widgets={});var u=!1,r=function(r,u){var s=u,e,f,o;if(r.currentElement!==u&&n(s).data("over")&&(r.currentElement&&r.currentElement!==u&&t(r,r.currentElement),(!r.currentElement||r.currentElement!==u||!r.popup.glowPopUpPanel("isShown"))&&!(n(u).closest(".user-info-popup-content").length>0))&&(r.currentElement=u,r.popup.glowPopUpPanel("html","").bind("glowPopUpPanelShown",function(){n(".menu__user-info-popup-content").parent().addClass("user-hover-popup-container").hover(function(){n(this).css("overflow","visible")})}),n(u).is(":visible"))&&(e=r.profileUrlPattern.exec(u.href),e!==null)){if(f=e[1],o=r.userCache[f],o){n(u).offset().left+300>n(window).width()?i(r,"downleft"):i(r,"downright");r.popup.glowPopUpPanel("html",o).bind("glowPopUpPanelShown",function(){n(".menu__user-info-popup-content").parent().addClass("user-hover-popup-container").hover(function(){n(this).css("overflow","visible")})}).glowPopUpPanel("show",u,!1,!0);return}n.telligent.evolution.get({url:r.getUserInformationUrl,data:{w_hoverUserName:f},success:function(t){n(s).data("over")&&(r.userCache[f]=t,r.current=u,n(u).offset().left+300>n(window).width()?i(r,"downleft"):i(r,"downright"),r.popup.glowPopUpPanel("html",t).bind("glowPopUpPanelShown",function(){n(".menu__user-info-popup-content").parent().addClass("user-hover-popup-container").hover(function(){n(this).css("overflow","visible")})}).glowPopUpPanel("show",u,!1,!0))}})}},f=null,i=function(t,i){f!==i&&(f=i,t.popup=n("<div><\/div>").glowPopUpPanel({cssClass:"menu user-info-popup-content menu__user-info-popup-content "+i,position:i,zIndex:200010,hideOnDocumentClick:!1}))},t=function(n){n.over||(n.popup.glowPopUpPanel("hide"),n.currentElement=null)};n.telligent.evolution.widgets.userHover={register:function(i){u||(u=!0,i.userCache={},i.popup=n("<div><\/div>").glowPopUpPanel({cssClass:"menu user-info-popup-content menu__user-info-popup-content",position:"downcenter",zIndex:200010,hideOnDocumentClick:!1}).glowPopUpPanel("html",""),n.extend(i,{profileUrlPattern:new RegExp("^(?:"+window.location.protocol+"//"+window.location.host+")?"+n.telligent.evolution.site.getBaseUrl()+"members/([^/]+)/(?:default\\.aspx)?","i"),avatarUrlPattern:new RegExp("^(?:"+window.location.protocol+"//"+window.location.host+")?"+n.telligent.evolution.site.getBaseUrl()+".*?_key/Telligent.Evolution.Components.Avatars/([0-9\\.]*)/","i")}),n(function(){n(".user-defined-markup a").live("mouseenter",function(){n(this).data("over",!0)}).live("mouseleave",function(){n(this).data("over",!1)}).live("glowDelayedMouseEnter",100,function(){var t=n(this);!t.attr("core_userhover")&&i.profileUrlPattern.test(t.attr("href"))&&r(i,t.get(0))}).live("glowDelayedMouseLeave",500,function(n){n.stopPropagation();i.current&&i.current!==n.target||t(i)});n(".internal-link.view-user-profile, .internal-link.view-profile, .avatar > a").live("mouseenter",function(){n(this).data("over",!0)}).live("mouseleave",function(){n(this).data("over",!1)}).live("glowDelayedMouseEnter",100,function(){r(i,this)}).live("glowDelayedMouseLeave",500,function(n){n.stopPropagation();i.current&&i.current!==n.target||t(i)});n('.internal-link.view-user-profile:not(.activity-summary-user), .internal-link.view-profile, .avatar > a[href^="'+n.telligent.evolution.site.getBaseUrl()+'members/"]').live("click",function(n){return n.stopPropagation(),r(i,this),!1});n("div.user-info-popup-content").live("mouseenter",function(){i.over=!0}).live("glowDelayedMouseLeave",500,function(n){n.stopPropagation();i.over=!1;t(i)});n("div.user-info-popup-content .close a").live("click",function(){return i.over=!1,t(i),!1});n("div.user-info-popup-content a.start-conversation").live("click",function(){var t=n(this).attr("href");return Telligent_Modal.Open(t,550,360,null),!1});n("div.user-info-popup-content a.add-friend-modal").live("click",function(){var t=n(this).attr("href");return Telligent_Modal.Open(t,550,360,null),!1});n("div.user-info-popup-content a.add-friend-rest").live("click",function(){return alert("ajax friend request"),!1});n("div.user-info-popup-content a.recent-activity").live("click",function(){var t=n(this),r=t.parent(),u=parseInt(t.attr("data-userid"),10);return n.telligent.evolution.get({url:i.getRecentActivityUrl,data:{w_userId:u},success:function(t){var u=n("<div><\/div>").addClass("recent-activity").html(t).hide().insertAfter(r);n(".content-item",u).has("a.bragger-badges-activity-link").addClass("bragger-badges-activity-item");r.glowTransition(u,{duration:150,complete:function(){i.popup.glowPopUpPanel("refresh")},resize:!1})}}),!1})}))}}})(jQuery);