(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),l=a(0),i=a.n(l),r=a(174),s=a.n(r),m=a(159),o=a(170),u=a(185),M=a.n(u),L=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return i.a.createElement(m.a,null,i.a.createElement(s.a,{title:"Generic Page Title"}),i.a.createElement(o.a,null),i.a.createElement("div",{id:"main"},i.a.createElement("section",{id:"content",className:"main"},i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:M.a,alt:""})),i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"about"))))},t}(i.a.Component);t.default=L},154:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},155:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(4),i=a.n(l),r=a(32),s=a.n(r);a.d(t,"a",function(){return s.a});a(154),c.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},158:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),c=a.n(n),l=a(4),i=a.n(l),r=a(54),s=a(2),m=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},159:function(e,t,a){"use strict";var n=a(7),c=a.n(n),l=a(0),i=a.n(l),r=(a(146),function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("section",null,i.a.createElement("h2",null,"Supporter"),i.a.createElement("p",null,"本町オープンソスラボ")),i.a.createElement("section",null,i.a.createElement("h2",null,"Donation"),i.a.createElement("p",null,"運営費や備品購入にあてさせて頂きます。"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/orgs/coderdojo-hommachi",className:"icon fa-github alt"},i.a.createElement("span",{className:"label"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://coderdojo-hommachi.doorkeeper.jp/contact/new",className:"icon fa-icon fa-envelope alt"},i.a.createElement("span",{className:"label"},"Envelope"))))),i.a.createElement("p",{className:"copyright"},"© CoderDojo Osakasayama / Hommachi. Design:"," ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading},i.a.createElement("div",{id:"wrapper"},e,i.a.createElement(r,null)))},t}(i.a.Component);t.a=s},170:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(155),i=a(171),r=a.n(i);t.a=function(e){return c.a.createElement("header",{id:"header"},c.a.createElement(l.a,{to:"/"},c.a.createElement("h1",null,c.a.createElement("img",{src:r.a,alt:""})," CoderDojo")),c.a.createElement("p",null,"Osakasayama / Honmachi"))}},171:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEzLjA4bW0iIGhlaWdodD0iMTMuMDhtbSIgdmlld0JveD0iMCAwIDM3LjA4IDM3LjA4Ij4KICA8dGl0bGU+bG9nb19zaWRlPC90aXRsZT4KICA8Y2lyY2xlIGN4PSIxOC41NCIgY3k9IjE4LjU0IiByPSIxOC40MyIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZmZmO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMjI2NzQ0MTg2MDQ2NDk5OTNweCIvPgogIDxjaXJjbGUgY3g9IjE4LjU0IiBjeT0iMTguNTQiIHI9IjE1LjgyIiBzdHlsZT0iZmlsbDogbm9uZTtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC41NTgxMzk1MzQ4ODM2Mzk5cHgiLz4KICA8cGF0aCBkPSJNNzAuODYsODYuNDdhMTUuODIsMTUuODIsMCwxLDAsMC0zMS42NCw3LjkxLDcuOTEsMCwwLDEsMCwxNS44Miw3LjkxLDcuOTEsMCwwLDAsMCwxNS44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4zMiAtNTIuMTEpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC4zOTk5OTk5OTk5OTk5NDA0NnB4Ii8+CiAgPHBhdGggZD0iTTcwLjg2LDU0LjgzYTE1LjgyLDE1LjgyLDAsMCwwLDAsMzEuNjQsNy45MSw3LjkxLDAsMCwxLDAtMTUuODIsNy45MSw3LjkxLDAsMCwwLDAtMTUuODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuMzIgLTUyLjExKSIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZWQ4NmIzO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMjc5MDY5NzY3NDQxODE5OTRweCIvPgogIDxwYXRoIGQ9Ik03My41Nyw2Mi43M2MwLDIuMzMtLjg5LDMuNTctMi41MSwzLjU3cy0yLjUyLTEuMjMtMi41Mi0zLjU5Ljg5LTMuNTMsMi41My0zLjUzUzczLjU3LDYwLjM1LDczLjU3LDYyLjczWm0tNC4xOCwwYzAsMS44Ni41NSwyLjgyLDEuNjcsMi44MnMxLjY3LTEsMS42Ny0yLjgyLS41NC0yLjc4LTEuNjYtMi43OFM2OS4zOSw2MC44Nyw2OS4zOSw2Mi43MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4zMiAtNTIuMTEpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC4wNzg0ODgzNzIwOTMwMTA3NHB4Ii8+CiAgPHBhdGggZD0iTTcyLjI2LDgxLjczYS4zOS4zOSwwLDAsMS0uNDQuMzkuMzcuMzcsMCwwLDEtLjQyLS4zOFY3Ni4xMmMwLS4yLS4wNS0uMjgtLjI0LS4yOGgwbC0uODYsMGgwYS40LjQsMCwwLDEtLjQtLjQxLjQxLjQxLDAsMCwxLC40LS40M2wxLjE2LDBoLjA4Yy42LDAsLjc2LjIuNzYuODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuMzIgLTUyLjExKSIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZmZmO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMDc4NDg4MzcyMDkzMDE3MTVweCIvPgo8L3N2Zz4K"},185:function(e,t,a){e.exports=a.p+"static/pic04-3c15d7eb2b6919de3ccc00a1ecf3d7cc.png"}}]);
//# sourceMappingURL=component---src-pages-about-js-2368b4ff683ddf90fc12.js.map