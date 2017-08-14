webpackJsonp([14],{1012:function(e,t,r){var n=r(1013);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r(193)(n,o);n.locals&&(e.exports=n.locals)},1013:function(e,t,r){t=e.exports=r(192)(void 0),t.push([e.i,".example-github-scene {\n  padding: 20px;\n}\n",""])},890:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return v});var i,u,c=r(1012),f=(r.n(c),r(9)),l=r.n(f),p=r(15),m=r.n(p),h=r(191),b=(r.n(h),r(65)),g=r(195),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=(i=Object(h.kea)({actions:function(){return{setUsername:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,r,n,o=e.actions;return{username:["keajs",m.a.string,a({},o.setUsername,function(e,t){return t.username})],repositories:[[],m.a.array,(t={},a(t,o.setUsername,function(){return[]}),a(t,o.setRepositories,function(e,t){return t.repositories}),t)],isLoading:[!0,m.a.bool,(r={},a(r,o.setUsername,function(){return!0}),a(r,o.setRepositories,function(){return!1}),a(r,o.setFetchError,function(){return!1}),r)],error:[null,m.a.string,(n={},a(n,o.setUsername,function(){return null}),a(n,o.setFetchError,function(e,t){return t.message}),n)]}},selectors:function(e){var t=e.selectors;return{sortedRepositories:[function(){return[t.repositories]},function(e){return e.sort(function(e,t){return t.stargazers_count-e.stargazers_count})},m.a.array]}},start:regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.actions.setUsername,e.next=3,this.get("username");case 3:return r=e.sent,e.next=6,Object(b.put)(t(r));case 6:case"end":return e.stop()}},e,this)}),takeLatest:function(e){var t=e.actions,r=e.workers;return a({},t.setUsername,r.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(t){var r,n,o,s,a,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.actions,n=r.setRepositories,o=r.setFetchError,s=t.payload.username,e.next=4,Object(g.delay)(100);case 4:return e.next=6,window.fetch("https://api.github.com/users/"+s+"/repos?per_page=250");case 6:if(a=e.sent,200!==a.status){e.next=15;break}return e.next=10,a.json();case 10:return i=e.sent,e.next=13,Object(b.put)(n(i));case 13:e.next=20;break;case 15:return e.next=17,a.json();case 17:return u=e.sent,e.next=20,Object(b.put)(o(u.message));case 20:case"end":return e.stop()}},e,this)})}}))(u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.username,r=e.isLoading,n=e.repositories,o=e.sortedRepositories,s=e.error,a=this.actions.setUsername;return l.a.createElement("div",{className:"example-github-scene"},l.a.createElement("div",{style:{marginBottom:20}},l.a.createElement("h1",null,"Search for a github user"),l.a.createElement("input",{value:t,autoFocus:!0,type:"text",onChange:function(e){return a(e.target.value)}})),r?l.a.createElement("div",null,"Loading..."):n.length>0?l.a.createElement("div",null,"Found ",n.length," repositories for user ",t,"!",o.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):l.a.createElement("div",null,s?"Error: "+s:"No repositories found"))}}]),t}(f.Component))||u}});