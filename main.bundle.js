webpackJsonp([3],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),e=u("aR8+"),o=u("wQAS"),a=u("qUEl"),i=u("q4dy"),r=u("qbdv"),c=u("fc+i"),s=u("CPp0"),d=u("Kfbv"),p=u("Rfiw"),f=u("axsj"),m=u("6cxu"),g=u("R/0y"),h=u("BkNc"),b=u("F1eB"),L=u("B+7T");u.d(n,"a",function(){return v});var v=t.b(e.a,[o.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[a.a,i.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,r.a,r.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,c.b,c.c,[r.c]),t.d(6144,t.p,null,[c.b]),t.d(4608,c.d,c.e,[]),t.d(5120,c.f,function(l,n,u,t){return[new c.g(l),new c.h(n),new c.i(u,t)]},[r.c,r.c,r.c,c.d]),t.d(4608,c.j,c.j,[c.f,t.q]),t.d(135680,c.k,c.k,[r.c]),t.d(4608,c.l,c.l,[c.j,c.k]),t.d(6144,t.r,null,[c.l]),t.d(6144,c.m,null,[c.k]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,c.n,c.n,[r.c]),t.d(4608,c.o,c.o,[r.c]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.c,[]),t.d(5120,s.d,s.e,[]),t.d(4608,s.f,s.f,[s.a,s.b,s.d]),t.d(4608,s.g,s.h,[]),t.d(5120,s.i,s.j,[s.f,s.g]),t.d(5120,d.a,p.a,[d.b,f.a]),t.d(5120,m.a,g.a,[d.a]),t.d(5120,h.a,h.b,[h.c]),t.d(4608,h.d,h.d,[]),t.d(6144,h.e,null,[h.d]),t.d(135680,h.f,h.f,[h.c,t.t,t.u,t.v,h.e]),t.d(4608,h.g,h.g,[]),t.d(5120,h.h,h.i,[h.j]),t.d(5120,t.w,function(l){return[l]},[h.h]),t.d(4608,b.a,b.a,[s.i,m.a]),t.d(512,r.d,r.d,[]),t.d(1024,t.x,c.p,[]),t.d(1024,t.y,function(){return[h.k()]},[]),t.d(512,h.j,h.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[c.q(l,n),h.l(u)]},[[2,c.r],[2,t.y],h.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,c.s,c.s,[[3,c.s]]),t.d(512,s.k,s.k,[]),t.d(1024,h.m,h.n,[[3,h.c]]),t.d(512,h.o,h.p,[]),t.d(512,h.q,h.q,[]),t.d(256,h.r,{},[]),t.d(1024,r.e,h.s,[r.f,[2,r.g],h.r]),t.d(512,r.h,r.h,[r.e]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,h.t,function(){return[[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:L.a},{path:"table",loadChildren:"app/table/table.module#TableModule"},{path:"team",loadChildren:"app/team/team.module#TeamModule"}]]},[]),t.d(1024,h.c,h.u,[t.D,h.o,h.q,r.h,t.v,t.t,t.u,h.t,h.r,[2,h.v],[2,h.w]]),t.d(512,h.x,h.x,[[2,h.m],[2,h.c]]),t.d(512,f.b,f.b,[]),t.d(512,g.b,g.b,[]),t.d(512,e.a,e.a,[]),t.d(256,d.b,{apiKey:"AIzaSyDUFGFACCBf85cvIDlNYC9ajm_2HIVHLx8",authDomain:"angularapp-f8d55.firebaseapp.com",databaseURL:"https://angularapp-f8d55.firebaseio.com",projectId:"angularapp-f8d55",storageBucket:"angularapp-f8d55.appspot.com",messagingSenderId:"538402879016"},[]),t.d(256,f.a,void 0,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"0ugX":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.prototype.transform=function(l,n){return n?l.filter(function(l){return l.caption.toLowerCase().includes(n.toLowerCase())}):l},l}()},"B+7T":function(l,n,u){"use strict";var t=u("F1eB"),e=u("BkNc");u.d(n,"a",function(){return o});var o=function(){function l(l,n){this.competitionService=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.competitionService.getCompetitions().subscribe(function(n){var u=n;l.competitions=u.map(function(l){return"Primeira Liga 2017/18"===l.caption?(l.caption="Portuguese Liga 2017-18",l):"Eredivisie 2017/18"===l.caption?(l.caption="Dutch League 2017-18",l):"Ligue 1 2017/18"===l.caption?(l.caption="France Ligue 1 2017/18",l):"Primera Division 2017"===l.caption?(l.caption="Spanish La Liga 2017/18",l):l})}),this.subscription=this.competitionService.count$.subscribe(function(n){return l.pageCount=n})},l.prototype.onSubmit=function(l){this.competitionService.storeMatchDay(l.currentMatchday,l.numberOfMatchdays),this.router.navigate(["table",{id:l.id}])},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},l.ctorParameters=function(){return[{type:t.a},{type:e.c}]},l}()},F1eB:function(l,n,u){"use strict";var t=u("CPp0"),e=u("5v8a"),o=(u.n(e),u("Dqrr")),a=(u.n(o),u("6cxu"));u.d(n,"a",function(){return i});var i=function(){function l(l,n){this.http=l,this.af=n,this._pageCount=new o.BehaviorSubject(0),this.count$=this._pageCount.asObservable()}return l.prototype.changeCount=function(l){this._pageCount.next(l)},l.prototype.getCompetitions=function(){var l=new t.l;return l.append("X-Auth-Token","7c94f28bddf34648bd9a6f5c2e2da0f0"),this.http.get("https://api.football-data.org/v1/competitions",{headers:l}).map(function(l){return l.json()})},l.prototype.getTeams=function(l){var n=new t.l;return n.append("X-Auth-Token","7c94f28bddf34648bd9a6f5c2e2da0f0"),this.http.get("https://api.football-data.org/v1/competitions/"+l+"/leagueTable",{headers:n}).map(function(l){return l.json()})},l.prototype.getPlayers=function(l){var n=new t.l;return n.append("X-Auth-Token","7c94f28bddf34648bd9a6f5c2e2da0f0"),this.http.get("https://api.football-data.org/v1/teams/"+l+"/players",{headers:n}).map(function(l){return l.json()})},l.prototype.getFixtures=function(l){var n=new t.l;return n.append("X-Auth-Token","7c94f28bddf34648bd9a6f5c2e2da0f0"),this.http.get("https://api.football-data.org/v1/teams/"+l+"/fixtures",{headers:n}).map(function(l){return l.json()})},l.prototype.storeMatchDay=function(l,n){this.currentMatchDay=l,this.totalMatchDay=n},l.prototype.storeTeamCrest=function(l){this.teamCrest=l},l.prototype.incrementPageCount=function(){return this.af.object("/pageCountFA/").$ref.ref.transaction(function(l){return l+1}).then(function(l){return l.snapshot.node_.value_})},l.ctorParameters=function(){return[{type:t.i},{type:a.a}]},l}()},GSN6:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".box[_ngcontent-%COMP%]{width:auto;height:270px;cursor:pointer;background:rgba(60,60,60,.4);padding-left:20px;padding-right:20px}.bigger[_ngcontent-%COMP%]{font-size:24px;color:#fff;padding-top:20px}@media screen and (max-width:600px){.box[_ngcontent-%COMP%]{width:auto;height:190px;cursor:pointer;background:rgba(60,60,60,.4);padding-left:15px;padding-right:15px}.bigger[_ngcontent-%COMP%]{font-size:14px;color:#fff;padding-top:5px}}"]},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".myColor[_ngcontent-%COMP%]{background-color:transparent}.spinner[_ngcontent-%COMP%]{margin:100px auto;width:50px;height:40px;text-align:center;font-size:10px}.main[_ngcontent-%COMP%]{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.1);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:20}.spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#000;height:100%;width:6px;display:inline-block;-webkit-animation:sk-stretchdelay 1.2s infinite ease-in-out;animation:sk-stretchdelay 1.2s infinite ease-in-out}.spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%]{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,40%,to{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-stretchdelay{0%,40%,to{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.score[_ngcontent-%COMP%]{position:absolute}.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}"]},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),o=u("+h1B"),a=u("fc+i");e.a.production&&u.i(t.a)(),u.i(a.a)().bootstrapModuleFactory(o.a)},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return i.J(0,[(l()(),i.K(0,null,null,14,"div",[["class","main"]],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,11,"div",[["class","spinner"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,0,"div",[["class","rect1"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,0,"div",[["class","rect2"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,0,"div",[["class","rect3"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,0,"div",[["class","rect4"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,0,"div",[["class","rect5"]],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.L(null,["\n    "]))],null,null)}function e(l){return i.J(0,[i._34(402653184,1,{el:0}),i._34(402653184,2,{modal:0}),i._34(402653184,3,{modal2:0}),(l()(),i.L(null,[" "])),(l()(),i.K(0,null,null,37,"nav",[["class","myColor"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,34,"div",[["class","nav-wrapper"]],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,5,"a",[["class","brand-logo"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==i.Q(l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),i.N(671744,null,0,r.y,[r.c,r.a,c.e],{routerLink:[0,"routerLink"]},null),i._35(1),(l()(),i.K(0,null,null,0,"img",[["class","logo"],["src","../assets/source.gif"]],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"span",[["class","score"]],null,null,null,null,null)),(l()(),i.L(null,[" Scores"])),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,[[1,0],["button",1]],null,2,"a",[["class","button-collapse"],["data-activates","mobile-demo"]],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),i.L(null,["menu"])),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,9,"ul",[["class","right hide-on-med-and-down"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"a",[["class","modal-trigger"],["href","#modal1"]],null,null,null,null,null)),(l()(),i.L(null,["About"])),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"a",[["class","modal-trigger"],["href","#modal2"]],null,null,null,null,null)),(l()(),i.L(null,["Comment"])),(l()(),i.L(null,["\n      "])),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,9,"ul",[["class","side-nav"],["id","mobile-demo"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"a",[["class","modal-trigger"],["href","#modal1"]],null,null,null,null,null)),(l()(),i.L(null,["About"])),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"a",[["class","modal-trigger"],["href","#modal2"]],null,null,null,null,null)),(l()(),i.L(null,["Comment"])),(l()(),i.L(null,["\n      "])),(l()(),i.L(null,["\n    "])),(l()(),i.L(null,["\n  "])),(l()(),i.L(null,["\n  \n  "])),(l()(),i.K(0,null,null,32,"div",[["class","container"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.R(16777216,null,null,1,null,t)),i.N(16384,null,0,c.i,[i.S,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i.L(null,["\n    "])),(l()(),i.K(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i.N(212992,null,0,r.z,[r.q,i.S,i.e,[8,null],i._14],null,null),(l()(),i.L(null,["\n\n  "])),(l()(),i.K(0,[[2,0],["modal",1]],null,12,"div",[["class","modal bottom-sheet"],["id","modal1"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,9,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),i.L(null,["Are you a Football Fan and Love watching Football? "])),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),i.L(null,["Tired of Searching when Next Match is of Teams from Different Leagues are Then this is for You"])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\t\n      You can see the Teams Standings From Different Leagues, All the Stars who play for your team and the next 5 league matches they are going to star in :)"])),(l()(),i.L(null,["\n    "])),(l()(),i.L(null,["\n  "])),(l()(),i.L(null,["\n\n  "])),(l()(),i.K(0,[[3,0],["modal2",1]],null,9,"div",[["class","modal bottom-sheet"],["id","modal2"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,6,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,3,"p",[],null,null,null,null,null)),(l()(),i.L(null,["For Any Suggestions and Comments Please Feel free to "])),(l()(),i.K(0,null,null,1,"a",[["href","https://rahulrsingh09.github.io/AngularConcepts/comment"]],null,null,null,null,null)),(l()(),i.L(null,["Comment"])),(l()(),i.L(null,["\n  "])),(l()(),i.L(null,["\n\n  "])),(l()(),i.L(null,["\n\n"]))],function(l,n){var u=n.component;l(n,9,0,l(n,10,0,"/home")),l(n,46,0,u.loading),l(n,49,0)},function(l,n){l(n,8,0,i.Q(n,9).target,i.Q(n,9).href)})}function o(l){return i.J(0,[(l()(),i.K(0,null,null,1,"app-root",[],null,null,null,e,f)),i.N(4243456,null,0,s.a,[r.c,d.a],null,null)],null,null)}var a=u("NhKt"),i=u("/oeL"),r=u("BkNc"),c=u("qbdv"),s=u("wQAS"),d=u("F1eB");u.d(n,"a",function(){return m});var p=[a.a],f=i.I({encapsulation:0,styles:p,data:{}}),m=i.V("app-root",s.a,o,{},{},[])},qUEl:function(l,n,u){"use strict";function t(l){return i.J(0,[(l()(),i.K(0,null,null,35,"div",[["class","col l4 m6 s12"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.onSubmit(l.context.$implicit)&&t}return t},null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.K(0,null,null,32,"div",[["class","box"]],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,2,"p",[["class","bigger"]],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,24,"p",[],null,null,null,null,null)),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,["League :"])),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,["Year :"])),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,["No of Teams :"])),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,["No of Games :"])),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\n          "])),(l()(),i.K(0,null,null,1,"b",[],null,null,null,null,null)),(l()(),i.L(null,["Current Match Day :"])),(l()(),i.L(null,[" ",""])),(l()(),i.K(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.L(null,["\n      "])),(l()(),i.L(null,["\n    "]))],null,function(l,n){l(n,6,0,n.context.$implicit.caption),l(n,12,0,n.context.$implicit.league),l(n,17,0,n.context.$implicit.year),l(n,22,0,n.context.$implicit.numberOfTeams),l(n,27,0,n.context.$implicit.numberOfGames),l(n,32,0,n.context.$implicit.currentMatchday)})}function e(l){return i.J(0,[i.U(0,r.a,[]),(l()(),i.K(0,null,null,6,"div",[["class","row gap"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,3,"div",[["class","col l3 offset-l9 m4 offset-m8 s4 offset-s8"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,[["input",1]],null,0,"input",[["class","browser-default"],["placeholder","Search"],["type","search"]],null,null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.L(null,["\n"])),(l()(),i.L(null,["\n\n"])),(l()(),i.K(0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),i.L(null,["\n  "])),(l()(),i.R(16777216,null,null,2,null,t)),i.N(802816,null,0,c.k,[i.S,i.T,i.l],{ngForOf:[0,"ngForOf"]},null),i.O(2),(l()(),i.L(null,["\n"])),(l()(),i.L(null,["\n\n"])),(l()(),i.K(0,null,null,7,"div",[["class","row"]],[[8,"hidden",0]],null,null,null,null)),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,4,"div",[["class","col l2 offset-l10 m3 offset-m9 s4 offset-s8"]],null,null,null,null,null)),(l()(),i.L(null,["\n        "])),(l()(),i.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i.L(null,["Page Count : ",""])),(l()(),i.L(null,["\n    "])),(l()(),i.L(null,["\n"])),(l()(),i.L(null,["\n\n"]))],function(l,n){var u=n.component;l(n,12,0,i.P(n,12,0,l(n,13,0,i.Q(n,0),u.competitions,i.Q(n,5).value)))},function(l,n){var u=n.component;l(n,16,0,!u.pageCount),l(n,21,0,u.pageCount)})}function o(l){return i.J(0,[(l()(),i.K(0,null,null,1,"app-competition",[],null,null,null,e,m)),i.N(245760,null,0,s.a,[d.a,p.c],null,null)],function(l,n){l(n,1,0)},null)}var a=u("GSN6"),i=u("/oeL"),r=u("0ugX"),c=u("qbdv"),s=u("B+7T"),d=u("F1eB"),p=u("BkNc");u.d(n,"a",function(){return g});var f=[a.a],m=i.I({encapsulation:0,styles:f,data:{}}),g=i.V("app-competition",s.a,o,{},{},[])},qtrl:function(l,n,u){function t(l){var n=e[l];return n?u.e(n[1]).then(function(){return u(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var e={"app/table/table.module.ngfactory":["DZgF",1],"app/team/team.module.ngfactory":["o37+",0]};t.keys=function(){return Object.keys(e)},l.exports=t,t.id="qtrl"},wQAS:function(l,n,u){"use strict";var t=u("F1eB"),e=u("BkNc");u.d(n,"a",function(){return o});var o=function(){function l(l,n){var u=this;this.router=l,this.service=n,this.loading=!0,l.events.subscribe(function(l){u.navigationInterceptor(l)}),this.service.incrementPageCount().then(function(l){return u.service.changeCount(l)})}return l.prototype.navigationInterceptor=function(l){var n=this;l instanceof e.A&&(this.loading=!0),l instanceof e.B&&setTimeout(function(){return n.loading=!1},1e3),l instanceof e.C&&(this.loading=!1),l instanceof e.D&&(this.loading=!1)},l.prototype.ngAfterViewInit=function(){$(this.el.nativeElement).sideNav(),$(this.modal.nativeElement).modal(),$(this.modal2.nativeElement).modal()},l.ctorParameters=function(){return[{type:e.c},{type:t.a}]},l}()}},[0]);