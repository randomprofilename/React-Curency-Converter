(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,n){e.exports=n(348)},195:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),u=n.n(c),s=(n(195),n(196),n(43)),l=n(360),o=n(55),i=function(){var e=1;return r.a.createElement(l.a,null,r.a.createElement(l.a.Item,null,r.a.createElement(o.a,{size:"big",name:"bullseye",onClick:function(){return alert("W".concat("o".repeat(++e),"W"))}})),r.a.createElement(l.a.Item,null,r.a.createElement(s.b,{to:"/"},"Home")),r.a.createElement(l.a.Item,null,r.a.createElement(s.b,{to:"/converter"},"Converter")),r.a.createElement(l.a.Item,null,r.a.createElement(s.b,{to:"/currencies"},"Currencies")))},m=n(361),p=function(){return r.a.createElement(m.a,null,r.a.createElement("h1",null," GreetingPage "))},f=n(15),h=n.n(f),y=n(22),d=n(84),v=n(85),b=n(88),C=n(86),g=n(90),E=n(356),k=n(359),w=n(354),x=n(151).create({baseURL:"https://api.ratesapi.io/api"}),j=function(){var e=Object(y.a)(h.a.mark(function e(t,n){var a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/latest",{params:{base:t,symbols:n}});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,currencies:[],baseCurrency:null,baseAmount:1,targetCurrency:null,targetAmount:0,rates:{}},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n=t.rates,this.setState({isLoading:!1,currencies:Object.keys(n),baseCurrency:Object.keys(n)[0],targetCurrency:Object.keys(n)[1],rates:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.baseAmount,r=n.baseCurrency,c=n.targetCurrency;t.baseAmount===a&&t.baseCurrency===r&&t.targetCurrency===c||this.calculateTargetAmount()}},{key:"calculateTargetAmount",value:function(){var e=this.state,t=e.baseAmount,n=e.targetCurrency,a=t*e.rates[n];this.setState({targetAmount:a})}},{key:"onBaseAmountChange",value:function(e){this.setState({baseAmount:e})}},{key:"onBaseCurrencyChange",value:function(){var e=Object(y.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:n=e.sent,a=n.rates,this.setState({rates:a,baseCurrency:t});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onTargetCurrencyChange",value:function(e){this.setState({targetCurrency:e})}},{key:"renderBaseData",value:function(e,t,n){var a=this;return r.a.createElement("div",null,r.a.createElement(E.a,{compact:!0,defaultValue:t,options:n.map(function(e){return{key:e,text:e,value:e}}),onChange:function(e,t){return a.onBaseCurrencyChange(t.value)}}),r.a.createElement(k.a,{type:"number",defaultValue:e,onChange:function(e){return a.onBaseAmountChange(e.target.value)}}))}},{key:"renderTargetData",value:function(e,t,n){var a=this;return r.a.createElement("div",null,r.a.createElement(k.a,{type:"number",value:e}),r.a.createElement(E.a,{compact:!0,defaultValue:t,options:n.map(function(e){return{key:e,text:e,value:e}}),onChange:function(e,t){return a.onTargetCurrencyChange(t.value)}}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.baseAmount,a=e.baseCurrency,c=e.targetAmount,u=e.targetCurrency,s=e.currencies;return t?r.a.createElement(w.a,{active:!0}):r.a.createElement(m.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},this.renderBaseData(n,a,s),r.a.createElement(o.a,{disabled:!0,size:"large",name:"angle double right"}),this.renderTargetData(c,u,s))}}]),t}(a.Component),A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("h1",null," ConverterPage ")),r.a.createElement(m.a,null,r.a.createElement(O,null)))},D=n(87),L=n(179),S=n(357),B=n(180),T=function(e){var t=e.rates,n=void 0===t?{}:t,a=e.countries,c=void 0===a?{}:a;return r.a.createElement(S.a,{celled:!0},r.a.createElement(S.a.Header,null,r.a.createElement(S.a.Row,{style:{textAlign:"center"}},r.a.createElement(S.a.HeaderCell,null,"Currency"),r.a.createElement(S.a.HeaderCell,null,"Country Name"),r.a.createElement(S.a.HeaderCell,null,"Flag"),r.a.createElement(S.a.HeaderCell,null,"Rate"))),r.a.createElement(S.a.Body,null,Object.keys(n).map(function(e,t){return r.a.createElement(S.a.Row,{key:t},r.a.createElement(S.a.Cell,null,e),r.a.createElement(S.a.Cell,null,c[e].name),r.a.createElement(S.a.Cell,null," ",r.a.createElement(B.a,{centered:!0,size:"mini",src:c[e].flag})),r.a.createElement(S.a.Cell,null,n[e]))})))},V=n(358),H=function(e){var t=e.baseCurrency,n=e.name,a=e.rate,c=e.country,u=void 0===c?{}:c;return r.a.createElement(V.a,null,r.a.createElement(V.a.Content,null,r.a.createElement(B.a,{floated:"right",size:"mini",src:u.flag}),r.a.createElement(V.a.Header,null,"".concat(a," ").concat(n)),r.a.createElement(V.a.Meta,null,"1 ".concat(t))),r.a.createElement(V.a.Content,{extra:!0,description:u.name}))},R=function(e){var t=e.rates,n=void 0===t?{}:t,a=e.baseCurrency,c=e.countries,u=void 0===c?{}:c;return r.a.createElement(V.a.Group,{centered:!0},Object.keys(n).filter(function(e){return e!==a}).map(function(e,t){return r.a.createElement(H,{key:t,baseCurrency:a,name:e,rate:n[e],country:u[e]})}))},U=function(e){var t=e.currencies,n=e.onChange,a=e.initialValue;return r.a.createElement(E.a,{defaultValue:a,options:t.map(function(e){return{key:e,text:e,value:e}}),onChange:function(e,t){return n(t.value)}})},I=function(e){var t=e.components,n=e.onChange,a=e.initialValue;return r.a.createElement(E.a,{defaultValue:a,options:t.map(function(e){return{key:e,text:e,value:e}}),onChange:function(e,t){return n(t.value)}})},F=n(151).create({baseURL:"https://restcountries.eu/rest/v2"}),z=function(){var e=Object(y.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/all");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),W=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(n=Object(b.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).state={isLoading:!0,baseCurrency:"USD",currencies:[],rates:{},components:["Cards","Table"],baseComponent:"Cards",countries:{}},n.onCurrencyChanged=function(e){return n.setState({baseCurrency:e,isLoading:!0})},n.onComponentChanged=function(e){return n.setState({baseComponent:e})},n.renderCurrenciesList=function(){var e=n.state,t=e.baseComponent,a=e.baseCurrency,c=e.rates,u=e.countries;switch(t){case"Table":return r.a.createElement(T,{rates:c,countries:u});case"Cards":return r.a.createElement(R,{baseCurrency:a,rates:c,countries:u});default:console.log("Something bad")}},n}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getExternalData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(y.a)(h.a.mark(function e(t,n){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.baseCurrency!==this.state.baseCurrency){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.getExternalData();case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getExternalData",value:function(){var e=Object(y.a)(h.a.mark(function e(){var t,n,a,r,c,u,s,l;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,n=t.baseCurrency,a=t.countries,e.next=3,this.loadRates(n);case 3:if(r=e.sent,c=r.rates,0===Object.keys(a).length){e.next=7;break}return e.abrupt("return",this.setState({rates:c,currencies:Object.keys(c),isLoading:!1}));case 7:return e.next=9,this.getcountries();case 9:u=e.sent,s=Object.keys(c),l=s.reduce(function(e,t){var n=u.find(function(e){return"ATA"!==e.alpha3Code&&e.currencies.some(function(e){return e.code&&e.code.toUpperCase()===t.toUpperCase()})});return Object(L.a)({},e,Object(D.a)({},t,n||void 0))},{}),this.setState({rates:c,currencies:Object.keys(c),isLoading:!1,countries:l});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getcountries",value:function(){var e=Object(y.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"loadRates",value:function(){var e=Object(y.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("h1",null," CurrenciesPage ")),r.a.createElement(m.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(U,{currencies:this.state.currencies,onChange:this.onCurrencyChanged,initialValue:this.state.baseCurrency}),r.a.createElement(I,{components:this.state.components,onChange:this.onComponentChanged,initialValue:this.state.baseComponent})),r.a.createElement(m.a,null,this.state.isLoading?r.a.createElement(w.a,{active:!0}):this.renderCurrenciesList()))}}]),t}(a.Component),M=n(38),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{path:"/",exact:!0,component:p}),r.a.createElement(M.a,{path:"/converter",component:A}),r.a.createElement(M.a,{path:"/currencies",component:W}))},G=n(355),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null,r.a.createElement(i,null),r.a.createElement(P,null)))};var N=function(){return r.a.createElement(s.a,null,r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[190,1,2]]]);
//# sourceMappingURL=main.34eebb14.chunk.js.map