(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[424],{2459:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={en:{emptyCartTitle:"Wah, keranjang belanjamu kosong",emptyCartDescription:"Yuk, isi dengan barang-barang impianmu!",emptyCartCta:"Mulai Belanja",cartCta:"See",cart:"Cart"},id:{emptyCartTitle:"Wah, keranjang belanjamu kosong",emptyCartDescription:"Yuk, isi dengan barang-barang impianmu!",emptyCartCta:"Mulai Belanja",cartCta:"Lihat",cart:"Keranjang"}};t.default=n},2460:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(2459)),i=a(2461);var l=e=>{const t=e.lang,a=e.position;return r.default.createElement(i.SeeRecommendation,{position:a||"fixed",height:"380px","data-testid":"nonLoggedInCart"},r.default.createElement("div",{className:i.emptyBasket},r.default.createElement("img",{src:"https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png",alt:"empty-basket"})),r.default.createElement("div",null,r.default.createElement("div",{className:i.emptyBasketText},o.default[t].emptyCartTitle),r.default.createElement("div",{className:i.unemployedText},o.default[t].emptyCartDescription)),r.default.createElement("button",{className:i.styEmptyCta,onClick:()=>{window.location.assign("/")}},o.default[t].emptyCartCta))};t.default=l},2461:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.unemployedText=t.styEmptyCta=t.overlayAnimate=t.emptyBasketText=t.emptyBasket=t.cartIconImg=t.cartIconCover=t.cartContainer=t.actionButton=t.SeeRecommendation=void 0;var r=a(1),o=n(a(23)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(2)),l=n(a(690));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}const c=(0,i.css)("width:3%;margin:0 0 0 40px;display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:2;height:58px;z-index:475;");t.cartContainer=c;const p=(0,i.css)("width:40px;height:40px;display:flex;align-items:center;justify-content:center;");t.cartIconCover=p;const d=e=>(0,i.keyframes)("from{height:0px;}to{height:",e,";}");t.overlayAnimate=d;const u=(0,i.default)("div",{target:"efi7olp0"})((e=>(0,i.css)("top:88px;background-color:",r.NN0,";border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:10px;border-bottom-left-radius:10px;box-shadow:",(0,o.default)(r.NN1000L,.12)," 0px 2px 8px 0px;transform:translate3d(0px,0px,0px);width:464px;position:",e.position,";z-index:495;overflow:hidden;padding:42px 16px;animation-name:",d(e.height),";animation-duration:0.4s;height:auto;display:flex;flex-direction:column;align-items:center;")));t.SeeRecommendation=u;const f=(0,i.css)("max-width:100%;max-height:132px;display:flex;justify-content:center;align-items:center;img{width:132px;height:auto;display:block;object-fit:cover;}");t.emptyBasket=f;const m=(0,i.css)("text-align:center;font-weight:800;font-size:20px;line-height:26px;letter-spacing:0.1px;color:",r.NN950,";margin:8px 0px 0px;");t.emptyBasketText=m;const g=(0,i.css)("color:",r.NN600,";line-height:22px;letter-spacing:0px;margin:8px 0px 0px;font-size:14px;font-weight:400;width:100%;text-align:center;z-index:4;");t.unemployedText=g;const y=(0,i.css)("display:flex;justify-content:center;height:48px;margin:0% 0% 4% 0%;button{font-weight:800;font-size:18px;width:75%;background:radial-gradient(circle,transparent 1%,",r.GN500," 1%) center center / 15000% ",r.GN500,";color:",r.NN0,";border-radius:8px;}");t.actionButton=y;const x=(0,i.css)("background-position:0 0;width:24px;height:24px;background-image:url(",l.default,");background-size:100% auto;background-repeat:no-repeat;");t.cartIconImg=x;const h=(0,i.css)("position:relative;width:200px;height:32px;padding:0 16px;margin-top:16px;cursor:pointer;display:inline-block;font-family:inherit;font-weight:800;font-size:12px;line-height:16px;background-color:",r.NN0,";border:1px solid ",r.GN500,";color:",r.GN500,";border-radius:8px;outline:none;text-indent:initial;-webkit-transition:background-color 300ms;transition:background-color 300ms;&:hover{border-color:",r.GN600,";}");t.styEmptyCta=h},729:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(72)),o=a(1),i=f(a(0)),l=n(a(5)),s=n(a(691)),c=a(257),p=a(135),d=a(2461);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}const m=(0,l.default)({resolved:{},chunkName:()=>"cartOverLay",isReady(e){const t=this.resolve(e);return!1!==this.resolved[t]&&!!a.m[t]},importAsync:()=>Promise.resolve().then((()=>f(a(2460)))),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return a(t)},resolve(){return 2460}},{fallback:"",ssr:!1}),g=e=>{const t=e.lang,a=e.popularKeyWordFlag,n=e.gtmPushObj,l=e.hideTopHeader,u=(0,i.useState)(!1),f=(0,r.default)(u,2),g=f[0],y=f[1],x=()=>{y(!g)};let h={};g&&(h={color:o.GN500,backgroundColor:o.NN50,borderRadius:"4px"});return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{onMouseLeave:x,className:d.cartContainer,onMouseEnter:x,"data-testid":"btnHeaderCart"},i.default.createElement("div",{className:d.cartIconCover,style:h,onClick:()=>{(0,c.trackClickCartIcon)(n),window.location.assign("/login")}},i.default.createElement("i",{className:d.cartIconImg})),g?i.default.createElement(m,{lang:t,position:l?"absolute":"fixed",gtmPushObj:n}):""),g?l?i.default.createElement(s.default,{popularKeyWordFlag:a}):i.default.createElement(p.Overlay,{popularKeyWordFlag:a}):"")};var y=g;t.default=y}}]);