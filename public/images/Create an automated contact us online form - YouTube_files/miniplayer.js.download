(function(g){var window=this;'use strict';var I6=function(a){g.W.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.me=!1;this.player=a;this.S(a,"minimized",this.cg);this.S(a,"onStateChange",this.GH)},J6=function(a){g.oM.call(this,a);
this.i=new I6(this.player);this.i.hide();g.aM(this.player,this.i.element,4);a.Re()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(I6,g.W);g.k=I6.prototype;
g.k.vF=function(){this.tooltip=new g.eQ(this.player,this);g.J(this,this.tooltip);g.aM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.hN(this.player);g.J(this,this.yc);this.Gg=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.Gg);this.Gg.Ca(this.element);this.S(this.Gg.element,"click",this.XA);var a=new g.W({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.cK()]});g.J(this,a);a.Ca(this.Gg.element);this.S(a.element,"click",this.Pi);
a=new g.W1(this.player,this);g.J(this,a);a.Ca(this.Gg.element);this.Wp=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Wp);this.Wp.Ca(this.Gg.element);this.S(this.Wp.element,"click",this.XA);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ca(this.Wp.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ca(this.Wp.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ca(this.Wp.element);this.rO=new g.GO(this.player,
this,!1);g.J(this,this.rO);this.rO.Ca(b.element);b=new g.EO(this.player,this);g.J(this,b);b.Ca(a.element);this.nextButton=new g.GO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ca(c.element);this.Jg=new g.RP(this.player,this);g.J(this,this.Jg);this.Jg.Ca(this.Gg.element);this.Hc=new g.PO(this.player,this);g.J(this,this.Hc);g.aM(this.player,this.Hc.element,4);this.NA=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.NA);g.aM(this.player,this.NA.element,4);a=new g.W({D:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.cK()]});g.J(this,a);a.Ca(this.NA.element);this.S(a.element,"click",this.Pi);a=new g.W({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Close"},U:[g.jK()]});g.J(this,a);a.Ca(this.NA.element);this.S(a.element,"click",this.UW);this.S(this.player,"presentingplayerstatechange",this.Qc);this.S(this.player,"appresize",this.xb);this.S(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Qd=new g.gq(this.Iq,null,this);this.Qd.start();this.me||(this.vF(),this.me=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Qd&&(this.Qd.dispose(),this.Qd=void 0);g.W.prototype.hide.call(this);this.player.Re()||(this.me&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.Qd&&(this.Qd.dispose(),this.Qd=void 0);g.W.prototype.va.call(this)};
g.k.Pi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.UW=function(){this.player.playVideo()};
g.k.XA=function(a){if(a.target===this.Gg.element||a.target===this.Wp.element)this.player.T().L("kevlar_miniplayer_play_pause_on_scrim")?g.PI(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.cg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Re())};
g.k.Ad=function(){this.Hc.Rb();this.Jg.Rb()};
g.k.Iq=function(){this.Ad();this.Qd&&this.Qd.start()};
g.k.Qc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.cP(this.Hc,0,this.player.bb().getPlayerSize().width,!1);g.QO(this.Hc)};
g.k.GH=function(a){this.player.Re()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Xe=function(){return!1};
g.k.Af=function(){return!1};
g.k.Gi=function(){return!1};
g.k.Sx=function(){};
g.k.Jn=function(){};
g.k.Ks=function(){};
g.k.Yn=function(){return null};
g.k.yw=function(){return null};
g.k.Ej=function(){return new g.Ym(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Pq=function(a,b,c,d,e){var f=0,h=d=0,l=g.on(a);if(b){c=g.oq(b,"ytp-prev-button")||g.oq(b,"ytp-next-button");var m=g.oq(b,"ytp-play-button"),n=g.oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.mn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.oq(b,"ytp-miniplayer-button-top-left"),f=g.mn(b,this.element),b=g.on(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.dh(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.El=function(){};
g.k.Uk=function(){return!1};g.w(J6,g.oM);J6.prototype.create=function(){};
J6.prototype.Th=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.i.show()};
J6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.nM("miniplayer",J6);})(_yt_player);
