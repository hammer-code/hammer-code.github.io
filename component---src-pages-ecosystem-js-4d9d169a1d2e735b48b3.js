webpackJsonp([73427858225244],{83:function(t,e,n){var r,i;!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===i)for(var a in r)o.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof t&&t.exports?t.exports=n:(r=[],i=function(){return n}.apply(e,r),!(void 0!==i&&(t.exports=i)))}()},50:function(t,e,n){var r=n(70),i=r.Symbol;t.exports=i},440:function(t,e,n){function r(t,e){var n=a(t),r=!n&&o(t),l=!n&&!r&&u(t),f=!n&&!r&&!l&&c(t),p=n||r||l||f,m=p?i(t.length,String):[],b=m.length;for(var v in t)!e&&!d.call(t,v)||p&&("length"==v||l&&("offset"==v||"parent"==v)||f&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,b))||m.push(v);return m}var i=n(448),o=n(456),a=n(168),u=n(457),s=n(69),c=n(458),l=Object.prototype,d=l.hasOwnProperty;t.exports=r},441:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}t.exports=n},442:function(t,e,n){function r(t){return o(i(t))}var i=n(451),o=n(167);t.exports=r},27:function(t,e,n){function r(t){return null==t?void 0===t?s:u:c&&c in Object(t)?o(t):a(t)}var i=n(50),o=n(106),a=n(108),u="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;t.exports=r},443:function(t,e,n){function r(t){return o(t)&&i(t)==a}var i=n(27),o=n(38),a="[object Arguments]";t.exports=r},444:function(t,e,n){function r(t){return a(t)&&o(t.length)&&!!q[i(t)]}var i=n(27),o=n(72),a=n(38),u="[object Arguments]",s="[object Array]",c="[object Boolean]",l="[object Date]",d="[object Error]",f="[object Function]",p="[object Map]",m="[object Number]",b="[object Object]",v="[object RegExp]",g="[object Set]",y="[object String]",h="[object WeakMap]",_="[object ArrayBuffer]",x="[object DataView]",j="[object Float32Array]",k="[object Float64Array]",w="[object Int8Array]",N="[object Int16Array]",M="[object Int32Array]",A="[object Uint8Array]",E="[object Uint8ClampedArray]",O="[object Uint16Array]",L="[object Uint32Array]",q={};q[j]=q[k]=q[w]=q[N]=q[M]=q[A]=q[E]=q[O]=q[L]=!0,q[u]=q[s]=q[_]=q[c]=q[x]=q[l]=q[d]=q[f]=q[p]=q[m]=q[b]=q[v]=q[g]=q[y]=q[h]=!1,t.exports=r},445:function(t,e,n){function r(t){if(!i(t))return o(t);var e=[];for(var n in Object(t))u.call(t,n)&&"constructor"!=n&&e.push(n);return e}var i=n(452),o=n(453),a=Object.prototype,u=a.hasOwnProperty;t.exports=r},446:function(t,e){function n(t,e){return t+r(i()*(e-t+1))}var r=Math.floor,i=Math.random;t.exports=n},447:function(t,e,n){function r(t){return i(o(t))}var i=n(167),o=n(462);t.exports=r},105:function(t,e){function n(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}t.exports=n},448:function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},449:function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},450:function(t,e,n){function r(t,e){return i(e,function(e){return t[e]})}var i=n(441);t.exports=r},451:function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},68:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},106:function(t,e,n){function r(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=u.call(t);return r&&(e?t[s]=n:delete t[s]),i}var i=n(50),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,s=i?i.toStringTag:void 0;t.exports=r},69:function(t,e){function n(t,e){return e=null==e?r:e,!!e&&("number"==typeof t||i.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,i=/^(?:0|[1-9]\d*)$/;t.exports=n},107:function(t,e,n){function r(t,e,n){if(!u(n))return!1;var r=typeof e;return!!("number"==r?o(n)&&a(e,n.length):"string"==r&&e in n)&&i(n[e],t)}var i=n(110),o=n(71),a=n(69),u=n(28);t.exports=r},452:function(t,e){function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}var r=Object.prototype;t.exports=n},453:function(t,e,n){var r=n(455),i=r(Object.keys,Object);t.exports=i},454:function(t,e,n){(function(t){var r=n(68),i="object"==typeof e&&e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=o&&o.exports===i,u=a&&r.process,s=function(){try{return u&&u.binding&&u.binding("util")}catch(t){}}();t.exports=s}).call(e,n(208)(t))},108:function(t,e){function n(t){return i.call(t)}var r=Object.prototype,i=r.toString;t.exports=n},455:function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},70:function(t,e,n){var r=n(68),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},167:function(t,e,n){function r(t,e){var n=-1,r=t.length,o=r-1;for(e=void 0===e?r:e;++n<e;){var a=i(n,o),u=t[a];t[a]=t[n],t[n]=u}return t.length=e,t}var i=n(446);t.exports=r},109:function(t,e,n){function r(t,e,n){e=(n?o(t,e,n):void 0===e)?1:s(a(e),0);var r=null==t?0:t.length;if(!r||e<1)return[];for(var c=0,l=0,d=Array(u(r/e));c<r;)d[l++]=i(t,c,c+=e);return d}var i=n(105),o=n(107),a=n(114),u=Math.ceil,s=Math.max;t.exports=r},110:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},456:function(t,e,n){var r=n(443),i=n(38),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};t.exports=s},168:function(t,e){var n=Array.isArray;t.exports=n},71:function(t,e,n){function r(t){return null!=t&&o(t.length)&&!i(t)}var i=n(111),o=n(72);t.exports=r},457:function(t,e,n){(function(t){var r=n(70),i=n(461),o="object"==typeof e&&e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=a&&a.exports===o,s=u?r.Buffer:void 0,c=s?s.isBuffer:void 0,l=c||i;t.exports=l}).call(e,n(208)(t))},111:function(t,e,n){function r(t){if(!o(t))return!1;var e=i(t);return e==u||e==s||e==a||e==c}var i=n(27),o=n(28),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=r},72:function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},28:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},38:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},112:function(t,e,n){function r(t){return"symbol"==typeof t||o(t)&&i(t)==a}var i=n(27),o=n(38),a="[object Symbol]";t.exports=r},458:function(t,e,n){var r=n(444),i=n(449),o=n(454),a=o&&o.isTypedArray,u=a?i(a):r;t.exports=u},459:function(t,e,n){function r(t){return a(t)?i(t):o(t)}var i=n(440),o=n(445),a=n(71);t.exports=r},460:function(t,e,n){function r(t){var e=a(t)?i:o;return e(t)}var i=n(442),o=n(447),a=n(168);t.exports=r},461:function(t,e){function n(){return!1}t.exports=n},113:function(t,e,n){function r(t){if(!t)return 0===t?t:0;if(t=i(t),t===o||t===-o){var e=t<0?-1:1;return e*a}return t===t?t:0}var i=n(115),o=1/0,a=1.7976931348623157e308;t.exports=r},114:function(t,e,n){function r(t){var e=i(t),n=e%1;return e===e?n?e-n:e:0}var i=n(113);t.exports=r},115:function(t,e,n){function r(t){if("number"==typeof t)return t;if(o(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=c.test(t);return n||l.test(t)?d(t.slice(2),n?2:8):s.test(t)?a:+t}var i=n(28),o=n(112),a=NaN,u=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;t.exports=r},462:function(t,e,n){function r(t){return null==t?[]:i(t,o(t))}var i=n(450),o=n(459);t.exports=r},208:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},219:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Adhi Guna Robotic Club",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},220:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Himpunan Mahasiswa TI Untad",url:"https://www.facebook.com/hmti.untad/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},221:function(t,e){"use strict";e.__esModule=!0,e.default={name:"IBTI",url:"http://maleotechnocenter.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},222:function(t,e,n){"use strict";e.__esModule=!0,e.default=[n(219),n(220),n(221),n(223),n(225),n(226),n(227),n(228),n(229),n(224)],t.exports=e.default},223:function(t,e){"use strict";e.__esModule=!0,e.default={name:"KPLI Palu",url:"https://www.facebook.com/groups/kpli.palu/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},224:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Maleo Robotic Education",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},225:function(t,e){"use strict";e.__esModule=!0,e.default={name:"PENA",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},226:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Pro Action",url:"https://www.facebook.com/profile.php?id=100017840837834",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},227:function(t,e){"use strict";e.__esModule=!0,e.default={name:"palu.smartcity",url:"https://www.instagram.com/palu.smartcity/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},228:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Robotech Tadulako",url:"https://www.facebook.com/ukm.robotechtadulako/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},229:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Timposu Labs",url:"http://timposu.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},230:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Artha Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},231:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Bacoding",url:"http://bacoding.net",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},232:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Banua Mentor",url:"http://banuamentor.com/",description:"BanuaMentor adalah perusahaan berbasis internet yang memungkinkan calon murid saling terhubung dengan para mentor untuk menambah pelajaran di luar pendidikan formal atau mengembangkan keahlian yang lainnya."},t.exports=e.default},233:function(t,e){"use strict";e.__esModule=!0,e.default={name:"baregistrasi.com",url:"http://baregistrasi.com",description:"BaRegistrasi adalah aplikasi event manager dan ticketing dengan berbagai fitur dan kemudahan untuk mengelola event bagi para penyelenggara event. Selain itu BaRegistrasi juga cocok untuk personal sebagai event recorder dan event finder."},t.exports=e.default},234:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Carry Indonesia",url:"https://play.google.com/store/apps/developer?id=Carry%20Indonesia&hl=en",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},235:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Click Ad",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},236:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Fatech Indonesia",url:"https://play.google.com/store/apps/developer?id=Fatechindonesia&hl=en",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},237:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Hallomart",url:"https://www.facebook.com/HalloMart/",description:"Platform daily deals berbasis di Palu yang berfokus untuk membantu pelaku usaha lokal dalam penerapan strategi O2O."},t.exports=e.default},238:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Ilmu Jaringan",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},239:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(460),o=r(i);e.default=(0,o.default)([n(230),n(231),n(232),n(233),n(234),n(236),n(237),n(238),n(240),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(235),n(243)]),t.exports=e.default},240:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Info Sulteng",url:"https://infosulteng.com",description:"Infosulteng.com adalah WADAH untuk berbagi informasi seputar Sulawesi Tengah."},t.exports=e.default},241:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Kaili Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},242:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Komunitaz",url:"http://www.komunitaz.com/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},243:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Nadea Shop",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},244:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Ngana Palu",url:"https://www.facebook.com/nganapalustudio",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},245:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Oleh-oleh Sulteng",url:"http://www.oleholehsulteng.com/",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},246:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Smart City",url:"http://www.pscadmin.com",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},247:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Techno Training",url:"https://palutechnotraining.net",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},248:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Rotasi Studio",url:"https://www.facebook.com/rotasistudio",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},249:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Sibang Studio",url:"http://sibangstudio.com/",description:"SibangStudio  merupakan unit usaha yang bergerak dibidang jasa Teknologi Informasi (TI) yang berupa pengembang software beserta aplikasi pendukung lainnya."},t.exports=e.default},250:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Text Net",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},251:function(t,e){"use strict";e.__esModule=!0,e.default={name:"Palu Webtion Development",url:"#",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam rerum provident blanditiis!"},t.exports=e.default},351:function(t,e){},258:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){var e=t.name,n=t.url,r=t.description;return c.default.createElement("div",{className:"ecosystem-card"},c.default.createElement("h2",{className:"ecosystem-card__title"},c.default.createElement("a",{target:"_blank",rel:"noopener",href:n},e)),c.default.createElement("div",{className:"ecosystem-card__description"},r))}e.__esModule=!0;var s=n(1),c=r(s),l=n(18),d=(r(l),n(109)),f=r(d),p=n(83),m=r(p),b=n(23),v=n(24),g=r(v),y=n(239),h=r(y),_=n(222),x=r(_);n(351);var j=1,k=2,w=(0,f.default)(h.default,3),N=(0,f.default)(x.default,3),M=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.state={activeTab:k},r}return a(e,t),e.prototype.setActiveTab=function(t){this.setState(function(){return{activeTab:t}})},e.prototype.render=function(){var t=this,e=c.default.createElement("div",{className:"content-tab__content"},N.map(function(t,e){return c.default.createElement("div",{key:e,className:"row"},t.map(function(t,e){return c.default.createElement("div",{key:e,className:"col-xs-4"},c.default.createElement(u,{name:t.name,url:t.url,description:t.description}))}))})),n=c.default.createElement("div",{className:"content-tab__content"},w.map(function(t,e){return c.default.createElement("div",{key:e,className:"row"},t.map(function(t,e){return c.default.createElement("div",{key:e,className:"col-xs-4"},c.default.createElement(u,{name:t.name,url:t.url,description:t.description}))}))})),r=this.state.activeTab,i=r===k,o=r===j,a=(0,m.default)("content-tab__tab",{"content-tab__tab--active":i}),s=(0,m.default)("content-tab__tab",{"content-tab__tab--active":o});return c.default.createElement("div",{className:"ecosystem__content-tab"},c.default.createElement("div",{className:"content-tab__tabs"},c.default.createElement("button",{className:a,onClick:function(){return t.setActiveTab(k)}},"Perusahaan"),c.default.createElement("button",{className:s,onClick:function(){return t.setActiveTab(j)}},"Komunitas")),function(){return r===k?n:e}())},e}(c.default.Component),A=function(t){var e=t.t;return c.default.createElement("div",{id:"ecosystem-page"},c.default.createElement("div",{className:"container"},c.default.createElement("h1",{className:"crisp crisp--400"},e("ecosystem")),c.default.createElement("p",null,"Berikut adalah daftar komunitas dan perusahaan teknologi yang ada di Palu. Jika perusahaan atau komunitasmu ingin masuk daftar ini, ",c.default.createElement("a",{href:"mailto:arkinthesky.69@gmail.com"},"silakan hubungi kami"),"."),c.default.createElement(M,null)),c.default.createElement(g.default,null))};e.default=(0,b.translate)("translations")(A),t.exports=e.default}});
//# sourceMappingURL=component---src-pages-ecosystem-js-4d9d169a1d2e735b48b3.js.map