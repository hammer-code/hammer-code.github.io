webpackJsonp([73427858225244],{77:function(t,e,i){var n,r;!function(){"use strict";function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n))t.push(i.apply(null,n));else if("object"===r)for(var u in n)o.call(n,u)&&n[u]&&t.push(u)}}return t.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=i:(n=[],r=function(){return i}.apply(e,n),!(void 0!==r&&(t.exports=r)))}()},48:function(t,e,i){var n=i(105),r=n.Symbol;t.exports=r},49:function(t,e,i){function n(t){return null==t?void 0===t?s:a:c&&c in Object(t)?o(t):u(t)}var r=i(48),o=i(101),u=i(104),a="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=n},99:function(t,e){function i(t,e,i){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),i=i>r?r:i,i<0&&(i+=r),r=e>i?0:i-e>>>0,e>>>=0;for(var o=Array(r);++n<r;)o[n]=t[n+e];return o}t.exports=i},100:function(t,e){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(e,function(){return this}())},101:function(t,e,i){function n(t){var e=u.call(t,s),i=t[s];try{t[s]=void 0;var n=!0}catch(t){}var r=a.call(t);return n&&(e?t[s]=i:delete t[s]),r}var r=i(48),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=n},102:function(t,e){function i(t,e){return e=null==e?n:e,!!e&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=i},103:function(t,e,i){function n(t,e,i){if(!a(i))return!1;var n=typeof e;return!!("number"==n?o(i)&&u(e,i.length):"string"==n&&e in i)&&r(i[e],t)}var r=i(107),o=i(108),u=i(102),a=i(27);t.exports=n},104:function(t,e){function i(t){return r.call(t)}var n=Object.prototype,r=n.toString;t.exports=i},105:function(t,e,i){var n=i(100),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();t.exports=o},106:function(t,e,i){function n(t,e,i){e=(i?o(t,e,i):void 0===e)?1:s(u(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var c=0,l=0,d=Array(a(n/e));c<n;)d[l++]=r(t,c,c+=e);return d}var r=i(99),o=i(103),u=i(114),a=Math.ceil,s=Math.max;t.exports=n},107:function(t,e){function i(t,e){return t===e||t!==t&&e!==e}t.exports=i},108:function(t,e,i){function n(t){return null!=t&&o(t.length)&&!r(t)}var r=i(109),o=i(110);t.exports=n},109:function(t,e,i){function n(t){if(!o(t))return!1;var e=r(t);return e==a||e==s||e==u||e==c}var r=i(49),o=i(27),u="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=n},110:function(t,e){function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}var n=9007199254740991;t.exports=i},27:function(t,e){function i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=i},111:function(t,e){function i(t){return null!=t&&"object"==typeof t}t.exports=i},112:function(t,e,i){function n(t){return"symbol"==typeof t||o(t)&&r(t)==u}var r=i(49),o=i(111),u="[object Symbol]";t.exports=n},113:function(t,e,i){function n(t){if(!t)return 0===t?t:0;if(t=r(t),t===o||t===-o){var e=t<0?-1:1;return e*u}return t===t?t:0}var r=i(115),o=1/0,u=1.7976931348623157e308;t.exports=n},114:function(t,e,i){function n(t){var e=r(t),i=e%1;return e===e?i?e-i:e:0}var r=i(113);t.exports=n},115:function(t,e,i){function n(t){if("number"==typeof t)return t;if(o(t))return u;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=c.test(t);return i||l.test(t)?d(t.slice(2),i?2:8):s.test(t)?u:+t}var r=i(27),o=i(112),u=NaN,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;t.exports=n},216:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Adhi Guna Robotic Club",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},217:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Himpunan Mahasiswa TI Untad",url:"https://www.facebook.com/hmti.untad/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},218:function(t,e){"use strict";e.__esModule=!0,e.default={name:"IBTI",url:"http://maleotechnocenter.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},219:function(t,e,i){"use strict";e.__esModule=!0,e.default=[i(216),i(217),i(218),i(220),i(221),i(222),i(223),i(224)],t.exports=e.default},220:function(t,e){"use strict";e.__esModule=!0,e.default={name:"KPLI Palu",url:"https://www.facebook.com/groups/kpli.palu/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},221:function(t,e){"use strict";e.__esModule=!0,e.default={name:"PENA",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},222:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Pro Action",url:"https://www.facebook.com/profile.php?id=100017840837834",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},223:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Robotech Tadulako",url:"https://www.facebook.com/ukm.robotechtadulako/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},224:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Timposu Labs",url:"http://timposu.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},225:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Artha Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},226:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Bacoding",url:"http://bacoding.net",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},227:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Banua Mentor",url:"http://banuamentor.com/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},228:function(t,e){"use strict";e.__esModule=!0,e.default={name:"baregistrasi.com",url:"http://baregistrasi.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},229:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Carry Indonesia",url:"https://play.google.com/store/apps/developer?id=Carry%20Indonesia&hl=en",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},230:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Fatech Indonesia",url:"https://play.google.com/store/apps/developer?id=Fatechindonesia&hl=en",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},231:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Hallomart",url:"https://www.facebook.com/HalloMart/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},232:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Ilmu Jaringan",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},233:function(t,e,i){"use strict";e.__esModule=!0,e.default=[i(225),i(226),i(227),i(228),i(229),i(230),i(231),i(232),i(234),i(235),i(236),i(237),i(238),i(239),i(240),i(241),i(242),i(243)],t.exports=e.default},234:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Info Sulteng",url:"https://infosulteng.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},235:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Kaili Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},236:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Ngana Palu",url:"https://www.facebook.com/nganapalustudio",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},237:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Oleh-oleh Sulteng",url:"http://www.oleholehsulteng.com/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},238:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Smart City",url:"http://www.pscadmin.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},239:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Techno Training",url:"https://palutechnotraining.net",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},240:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Rotasi Studio",url:"https://www.facebook.com/rotasistudio",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},241:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Sibang Studio",url:"http://sibangstudio.com/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},242:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Text Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},243:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Webtion Development",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},343:function(t,e){},250:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.name,i=t.url,n=t.description;return c.default.createElement("div",{className:"ecosystem-card"},c.default.createElement("h2",{className:"ecosystem-card__title"},c.default.createElement("a",{target:"_blank",rel:"noopener",href:i},e)),c.default.createElement("div",{className:"ecosystem-card__description"},n))}e.__esModule=!0;var s=i(1),c=n(s),l=i(18),d=(n(l),i(106)),m=n(d),p=i(77),f=n(p),b=i(23),v=i(24),_=n(v),h=i(233),g=n(h),x=i(219),y=n(x);i(343);var N=1,w=2,M=(0,m.default)(g.default,3),L=(0,m.default)(y.default,3),q=function(t){function e(i){r(this,e);var n=o(this,t.call(this,i));return n.state={activeTab:w},n}return u(e,t),e.prototype.setActiveTab=function(t){this.setState(function(){return{activeTab:t}})},e.prototype.render=function(){var t=this,e=c.default.createElement("div",{className:"content-tab__content"},L.map(function(t,e){return c.default.createElement("div",{key:e,className:"row"},t.map(function(t,e){return c.default.createElement("div",{key:e,className:"col-xs-4"},c.default.createElement(a,{name:t.name,url:t.url,description:t.description}))}))})),i=c.default.createElement("div",{className:"content-tab__content"},M.map(function(t,e){return c.default.createElement("div",{key:e,className:"row"},t.map(function(t,e){return c.default.createElement("div",{key:e,className:"col-xs-4"},c.default.createElement(a,{name:t.name,url:t.url,description:t.description}))}))})),n=this.state.activeTab,r=n===w,o=n===N,u=(0,f.default)("content-tab__tab",{"content-tab__tab--active":r}),s=(0,f.default)("content-tab__tab",{"content-tab__tab--active":o});return c.default.createElement("div",{className:"ecosystem__content-tab"},c.default.createElement("div",{className:"content-tab__tabs"},c.default.createElement("button",{className:u,onClick:function(){return t.setActiveTab(w)}},"Perusahaan"),c.default.createElement("button",{className:s,onClick:function(){return t.setActiveTab(N)}},"Komunitas")),function(){return n===w?i:e}())},e}(c.default.Component),E=function(t){var e=t.t;return c.default.createElement("div",{id:"ecosystem-page"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"crisp crisp--400"},e("ecosystem")),c.default.createElement("p",null,"Berikut adalah daftar komunitas dan perusahaan teknologi yang ada di Palu"),c.default.createElement(q,null)),c.default.createElement(_.default,null))};e.default=(0,b.translate)("translations")(E),t.exports=e.default}});
//# sourceMappingURL=component---src-pages-ecosystem-js-832061360bbd27d97862.js.map