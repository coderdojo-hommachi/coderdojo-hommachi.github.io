(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),i=a.n(n),c=a(0),o=a.n(c),l=a(159),s=a(183),r=a(172),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(r.a,{title:"404: Not Found"}),o.a.createElement(s.a,null),o.a.createElement("div",{id:"main"},o.a.createElement("section",{id:"content",className:"main"},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))},t}(o.a.Component);t.default=u;var m="1097489062"},154:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},155:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(4),o=a.n(c),l=a(32),s=a.n(l);a.d(t,"a",function(){return s.a});a(154),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},158:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),c=a(4),o=a.n(c),l=a(54),s=a(2),r=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};r.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=r},159:function(e,t,a){"use strict";var n=a(7),i=a.n(n),c=a(0),o=a.n(c),l=(a(146),function(e){return o.a.createElement("footer",{id:"footer"},o.a.createElement("section",null,o.a.createElement("h2",null,"Supporter"),o.a.createElement("p",null,"本町オープンソスラボ")),o.a.createElement("section",null,o.a.createElement("h2",null,"Donation"),o.a.createElement("p",null,"運営費や備品購入にあてさせて頂きます。"),o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},o.a.createElement("span",{className:"label"},"Twitter"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},o.a.createElement("span",{className:"label"},"Facebook"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},o.a.createElement("span",{className:"label"},"Instagram"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/orgs/coderdojo-hommachi",className:"icon fa-github alt"},o.a.createElement("span",{className:"label"},"GitHub"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://coderdojo-hommachi.doorkeeper.jp/contact/new",className:"icon fa-icon fa-envelope alt"},o.a.createElement("span",{className:"label"},"Envelope"))))),o.a.createElement("p",{className:"copyright"},"© CoderDojo Osakasayama / Hommachi. Design:"," ",o.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"body "+this.state.loading},o.a.createElement("div",{id:"wrapper"},e,o.a.createElement(l,null)))},t}(o.a.Component);t.a=s},172:function(e,t,a){"use strict";var n=a(173),i=a(0),c=a.n(i),o=a(4),l=a.n(o),s=a(174),r=a.n(s);function u(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return c.a.createElement(r.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},173:function(e){e.exports={data:{site:{siteMetadata:{title:"CoderDojo Osakasayama / Honmachi",description:"CoderDojo 大阪狭山 / 本町",author:"CoderDojo Osakasayama / Honmachi"}}}}},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(155),o=a(184),l=a.n(o);t.a=function(e){return i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("span",{className:"logo"},i.a.createElement(c.a,{to:"/"},i.a.createElement("img",{src:l.a,alt:""}))),i.a.createElement("h1",null,"CoderDojo"),i.a.createElement("p",null,"Osakasayama / Honmachi"))}},184:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwLjE4bW0iIGhlaWdodD0iMzAuMThtbSIgdmlld0JveD0iMCAwIDg1LjU2IDg1LjU2Ij4KICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgPGNpcmNsZSBjeD0iNDIuNzgiIGN5PSI0Mi43OCIgcj0iNDIuNTIiIHN0eWxlPSJmaWxsOiAjZmZmO3N0cm9rZTogI2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDogMTA7c3Ryb2tlLXdpZHRoOiAwLjUyMzI1NTgxMzk1MzQ5MDJweCIvPgogIDxjaXJjbGUgY3g9IjQyLjc4IiBjeT0iNDIuNzgiIHI9IjM5LjU1IiBzdHlsZT0iZmlsbDogbm9uZTtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMS4zOTUzNDg4MzcyMDkzMDcycHgiLz4KICA8cGF0aCBkPSJNNzAuODYsMTEwLjJhMzkuNTUsMzkuNTUsMCwwLDAsMC03OS4xLDE5Ljc4LDE5Ljc4LDAsMCwxLDAsMzkuNTUsMTkuNzgsMTkuNzgsMCwxLDAsMCwzOS41NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOC4wOCAtMjcuODcpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwIi8+CiAgPHBhdGggZD0iTTcwLjg2LDMxLjFhMzkuNTUsMzkuNTUsMCwxLDAsMCw3OS4xLDE5Ljc4LDE5Ljc4LDAsMSwxLDAtMzkuNTUsMTkuNzgsMTkuNzgsMCwwLDAsMC0zOS41NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOC4wOCAtMjcuODcpIiBzdHlsZT0iZmlsbDogI2ZmZjtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC42OTc2NzQ0MTg2MDQ2NTM2cHgiLz4KICA8cGF0aCBkPSJNNzcuNjUsNTAuODVjMCw1Ljg0LTIuMjMsOC45Mi02LjI4LDguOTJzLTYuMy0zLjA2LTYuMy05UzY3LjI5LDQyLDcxLjM5LDQyLDc3LjY1LDQ0LjksNzcuNjUsNTAuODVabS0xMC40NywwYzAsNC42NSwxLjM5LDcuMDUsNC4xOSw3LjA1czQuMTYtMi40LDQuMTYtNy4wNS0xLjM0LTctNC4xNC03UzY3LjE4LDQ2LjIsNjcuMTgsNTAuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguMDggLTI3Ljg3KSIgc3R5bGU9ImZpbGw6ICNlZDg2YjM7c3Ryb2tlOiAjZWQ4NmIzO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMTk2MjIwOTMwMjMyNTU2MDVweCIvPgogIDxwYXRoIGQ9Ik03NC4zNiw5OC4zNWExLDEsMCwwLDEtMS4wOSwxLC45My45MywwLDAsMS0xLjA2LTFWODQuMzFjMC0uNDktLjExLS42Ny0uNTktLjY3aC0uMDlsLTIuMTMuMDZoLS4wNWExLDEsMCwwLDEtMS0xLDEsMSwwLDAsMSwxLTEuMDlsMi45LS4wNmguMjFjMS40OSwwLDEuOS41LDEuOSwyLjE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4LjA4IC0yNy44NykiIHN0eWxlPSJmaWxsOiAjZmZmO3N0cm9rZTogI2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDogMTA7c3Ryb2tlLXdpZHRoOiAwLjE5NjIyMDkzMDIzMjU3MjFweCIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-404-js-99dfce818b5c30a45028.js.map