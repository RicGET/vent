(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(74),o=a.n(s),i=(a(85),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var c=a(241),u=a(243),d=a(242),p=a(10),h=a.n(p),f=a(18),m=a(19),v=a(20),g=a(23),b=a(21),w=a(24),y=a(244),E=a(42),k=a(235),x={animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0,maintainAspectRatio:!1,legend:{display:!1},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:null,zeroLineColor:"transparent",display:!1},ticks:{padding:20,fontColor:null}}],xAxes:[{gridLines:{drawBorder:!1,color:null,zeroLineColor:"transparent",display:!1},ticks:{display:!1}}]}};function C(e,t){var a=null,n=null;"green"===t?(a="rgba(0,242,195,0.1)",n="#9e9e9e"):"pink"===t?(a="rgba(225,78,202,0.1)",n="#9e9e9e"):(a="rgba(29,140,248,0.1)",n="#9a9a9a");var r=JSON.parse(JSON.stringify(x));return r.scales.xAxes[0].gridLines.color=a,r.scales.yAxes[0].ticks.fontColor=n,"line"===e?(r.scales.xAxes[0].barPercentage=1.6,r.scales.yAxes[0].barPercentage=1.6,r.scales.yAxes[0].gridLines.color="rgba(29,140,248,0.0)"):"bar"===e&&(r.scales.yAxes[0].gridLines.color=a),r}function j(e,t,a){var n=null,r=null;"green"===a?(n="rgba(0,242,195",r="#00d6b4"):"pink"===a?(n="rgba(225,78,202",r="#d048b6"):(n="rgba(29,140,248",r="#1f8ef1");return function(a){var s=a.getContext("2d").createLinearGradient(0,230,0,50);return s.addColorStop(1,n+",0.2)"),s.addColorStop(.4,n+",0.0)"),s.addColorStop(0,n+",0)"),{labels:e,datasets:[{borderColor:r,pointRadius:1,lineTension:0,data:t,fill:!1,minRotation:10,maxRotation:10}]}}}function S(e,t,a,n,r){var s=null,o=null;"green"===n?(s="rgba(0,242,195",o="#00d6b4"):"pink"===n?(s="rgba(225,78,202",o="#d048b6"):(s="rgba(29,140,248",o="#1f8ef1");return function(n){var i=n.getContext("2d"),l=i.createLinearGradient(0,230,0,50);l.addColorStop(1,s+",0.2)"),l.addColorStop(.4,s+",0.0)"),l.addColorStop(0,s+",0)");var c=i.createLinearGradient(0,230,0,50);return l.addColorStop(1,"rgba(255,255,0,0.2)"),l.addColorStop(.4,"rgba(255,255,0,0.0)"),l.addColorStop(0,"rgba(255,255,0,0)"),{labels:e,datasets:[{label:r,fill:!0,backgroundColor:c,borderColor:o,borderWidth:2,borderDash:[],borderDashOffset:0,data:t},{label:"California",fill:!0,backgroundColor:c,borderColor:"#FFFF00",borderWidth:2,borderDash:[],borderDashOffset:0,data:a}]}}}var A=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",{className:"chart-area"},r.a.createElement(E.b,{data:j(this.props.dataX,this.props.dataY,this.props.color),options:C("line",this.props.color)})))}}]),t}(r.a.Component);r.a.Component,r.a.Component;function O(e){return X.apply(this,arguments)}function X(){return(X=Object(f.a)(h.a.mark(function e(t){var a,n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{"Content-Type":"application/json"}},e.next=3,fetch("/sensors?count=1",a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Y=a(236),N=a(237),L=a(238),W=a(239),D=a(240),F=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={last:0,pressureX:[],pressureY:[],flowX:[],flowY:[],volumeX:[],volumeY:[]},setInterval(function(){a.getSensor()},100),a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"getSensor",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t,a,n,r,s,o,i,l;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(1);case 2:for(t=e.sent,a=this.state.flowX.slice(),n=this.state.flowY.slice(),r=this.state.volumeX.slice(),s=this.state.volumeY.slice(),o=this.state.pressureX.slice(),i=this.state.pressureY.slice(),l=0;l<t.samples;l++)t.times[l]>this.state.last&&(a.push(t.times[l]),n.push(t.humidity[l]),r.push(t.times[l]),s.push(t.temperature[l]),o.push(t.times[l]),i.push(t.pressure[l]),t.times[l]>this.state.last&&this.setState({last:t.times[l]}));this.adjustArray(a,500),this.adjustArray(n,500),this.adjustArray(r,500),this.adjustArray(s,500),this.adjustArray(o,500),this.adjustArray(i,500),this.updateFlow(a,n),this.updateVolume(r,s),this.updatePressure(o,i);case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"adjustArray",value:function(e,t){for(var a=e.length;a>t;a--)e.shift()}},{key:"updateFlow",value:function(){var e=Object(f.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({flowX:t}),this.setState({flowY:a});case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateVolume",value:function(){var e=Object(f.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({volumeX:t}),this.setState({volumeY:a});case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"updatePressure",value:function(){var e=Object(f.a)(h.a.mark(function e(t,a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({pressureX:t}),this.setState({pressureY:a});case 2:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"getdata",value:function(){for(var e=[],t=[],a=0;a<20;a++){var n=Object(y.a)(-50,50)();e.push(a),t.push(n)}this.setState({flowX:e,flowY:t,pressureX:e,pressureY:t,volumeX:e,volumeY:t})}},{key:"getd",value:function(){var e=Object(y.a)(-50,50)(),t=this.state.flowX.slice();t.splice(0,1),t.push(t[t.length-1]+1),this.setState({flowX:t});var a=this.state.flowY.slice();a.splice(0,1),a.push(e),this.setState({flowY:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(Y.a,null,r.a.createElement(N.a,{xs:"7"},r.a.createElement("h3",null,"BW 60kg"))),r.a.createElement(Y.a,null,r.a.createElement(N.a,{xs:"7"},r.a.createElement(L.a,{className:"card-chart"},r.a.createElement(W.a,null,r.a.createElement(Y.a,null,r.a.createElement(N.a,{className:"text-left",sm:"6"},r.a.createElement(D.a,{tag:"h3"},"Pressure  ")))),r.a.createElement(k.a,null,r.a.createElement("div",{className:"chart-area"},r.a.createElement(A,{dataX:this.state.pressureX,dataY:this.state.pressureY})))))),r.a.createElement(Y.a,null,r.a.createElement(N.a,{xs:"7"},r.a.createElement(L.a,{className:"card-chart"},r.a.createElement(W.a,null,r.a.createElement("h5",{className:"card-category"}),r.a.createElement(D.a,{tag:"h3"},"Flow")),r.a.createElement(A,{color:"green",dataX:this.state.flowX,dataY:this.state.flowY})))),r.a.createElement(Y.a,null,r.a.createElement(N.a,{xs:"7"},r.a.createElement(L.a,{className:"card-chart"},r.a.createElement(W.a,null,r.a.createElement("h5",{className:"card-category"}),r.a.createElement(D.a,{tag:"h3"},"Volume")),r.a.createElement(A,{color:"pink",dataX:this.state.volumeX,dataY:this.state.volumeY})))))}}]),t}(r.a.Component);a(230),a(231);o.a.render(r.a.createElement("div",null,r.a.createElement(function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{path:"*",component:F})))},null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(t,e)})}}()},80:function(e,t,a){e.exports=a(232)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.b1121a3c.chunk.js.map