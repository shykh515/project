!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(14);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(6),o=n(15);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t){e.exports=Core},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.LogoText=window.wsb.LogoText||n(12)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(13)),i=r(n(1)),l=r(n(2)),u=r(n(3)),a=r(n(4)),c=r(n(5)),f=r(n(7)),s=r(n(8)),E=r(n(9)),d=n(16),p=n(10),_=r(n(17)),R=r(n(19)),O=r(n(20));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){return function(){var t,n=(0,f.default)(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,c.default)(this,t)}}var N=function(e){(0,a.default)(n,e);var t=D(n);function n(){var e;return(0,l.default)(this,n),(e=t.apply(this,arguments)).handleFontChange=function(t){e.setState({fontSize:t})},e._containerId=(0,d.uniqueId)("logo-container-"),e.state={},e}return(0,u.default)(n,[{key:"render",value:function(){var e=this.props,t=e.renderMode,n=e.logoStyle,r=e.logo,l=e.dataRoute,u=e.fontPackLogoId,a=e.scaledFontSizes,c=e.maxLines,f=u?"logo":"inherit",E="logo"===f,D=r.logoText,N=this.state.fontSize,h=t===p.constants.renderModes.EDIT?{children:D}:{dangerouslySetInnerHTML:{__html:p.utils.convertLineBreaks((0,d.escape)(D))}},S=l?{"data-route":l}:{"data-field-id":"logo","data-field-route":R.default.LOGO};return s.default.createElement(p.UX2.Element.Heading,{id:this._containerId,tag:"h3",style:n,logoText:D,font:f},s.default.createElement(p.UX2.Element.Element,(0,o.default)({"data-aid":_.default.HEADER_LOGO_TEXT_RENDERED,tag:"span",font:f,style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,i.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({display:"inline-block",width:"100%"},E?{fontSize:N}:{font:"inherit",letterSpacing:"inherit",textTransform:"inherit",fontSize:"inherit",color:"inherit",fontWeight:"inherit",lineHeight:"inherit"})},h,S,{isLogo:!0})),E&&s.default.createElement(O.default,{font:f,text:D,onChange:this.handleFontChange,containerId:this._containerId,fontSizes:a,maxLines:c}))}}]),n}(s.default.PureComponent);N.propTypes={renderMode:E.default.string,logoStyle:E.default.object,logo:E.default.object.isRequired,dataRoute:E.default.string,fontPackLogoId:E.default.string,scaledFontSizes:E.default.arrayOf(E.default.oneOf(Object.values(p.constants.fontSizes))),maxLines:E.default.number};var h=N;t.default=h,e.exports=t.default},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=_},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(n(18)).default)({BACKGROUND_IMAGE_RENDERED:null,HAMBURGER_MENU_LINK:null,HEADER_WIDGET:null,HEADER_SECTION:null,HEADER_VIDEO:null,HEADER_SLIDESHOW:null,HEADER_SLIDE:null,HEADER_HERO_SLIDE:null,HEADER_PHONE_RENDERED:null,HEADER_PIPE_RENDERED:null,HEADER_ADDRESS_RENDERED:null,HEADER_LOGO_RENDERED:null,HEADER_LOGO_IMAGE_RENDERED:null,HEADER_LOGO_OVERHANG_CONTAINER:null,HEADER_LOGO_TEXT_RENDERED:null,HEADER_TAGLINE_RENDERED:null,HEADER_TAGLINE2_RENDERED:null,HEADER_NAV_RENDERED:null,HEADER_CTA_BTN:null,CART_ICON_RENDER:null,CART_ICON_COUNT:null,CART_ICON_PIPE:null,CART_TEXT:null,SEARCH_FORM_RENDERED:null,SEARCH_ICON_RENDERED:null,SEARCH_ICON_RENDERED_OPEN:null,SEARCH_CLOSE_RENDERED:null,SEARCH_FIELD_RENDERED:null,NAV_MORE:null,NAV_DROPDOWN:null,i18n_ICON_RENDERED:null,i18n_BAR_RENDERED:null,BANNER_RENDERED:null,BANNER_TEXT_RENDERED:null,GROUP_RENDERED:null,MEMBERSHIP_EMAIL_ADDRESS:null,MEMBERSHIP_SIGNOUT_LINK:null,MEMBERSHIP_SIGNIN_LINK:null,MEMBERSHIP_ICON_RENDERED:null,MEMBERSHIP_ICON_DESKTOP_RENDERED:null,MEMBERSHIP_CREATE_ACCOUNT_LINK:null,MEMBERSHIP_ACCOUNT_LINK:null,MEMBERSHIP_BOOKINGS_LINK:null,MEMBERSHIP_ORDERS_LINK:null,SEASONAL_SPRING_LEFT_ICON_RENDERED:null,SEASONAL_SPRING_RIGHT_ICON_RENDERED:null,SEASONAL_SUMMER_LEFT_ICON_RENDERED:null,SEASONAL_SUMMER_RIGHT_ICON_RENDERED:null,SEASONAL_FALL_LEFT_ICON_RENDERED:null,SEASONAL_FALL_RIGHT_ICON_RENDERED:null,SEASONAL_WINTER_LEFT_ICON_RENDERED:null,SEASONAL_WINTER_RIGHT_ICON_RENDERED:null});t.default=o,e.exports=t.default},function(e,t){e.exports=keyMirror},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={LOGO:"/logo",ADDRESS:"address",PHONE:"phone",WELCOME_LINE:"welcomeLine",TAGLINE:"tagline",SUB_TAG_LINE:"tagline2",CTA_BUTTON:"/ctaButton",PROMO_BANNER:"/promoBanner"};t.default=r,e.exports=t.default},function(e,t,n){"use strict";var r=n(21),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(1)),l=o(n(2)),u=o(n(3)),a=o(n(4)),c=o(n(5)),f=o(n(7)),s=r(n(8)),E=o(n(9)),d=n(10);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){return function(){var t,n=(0,f.default)(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,c.default)(this,t)}}var R=d.constants.fontSizes,O=R.XXLARGE,y=R.XLARGE,D=R.LARGE,N=function(e){(0,a.default)(n,e);var t=_(n);function n(){var e;(0,l.default)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).checkSize=function(){var t=e.props.onChange,n=e.getScalers();if(e._container&&e._container.clientWidth&&n.length){var r=e._container.style.width||"";e._container.style.width="100%",e.initScalers(n);var o=n.find(e.isBestFit)||n[n.length-1];e.hideScalers(n),e._container.style.width=r;var i=o.getAttribute("data-size");i&&i!==e._lastSize&&(e._lastSize=i,t(i))}},e.isBestFit=function(t){var n=e.props.maxLines;return t.scrollWidth<=e._container.clientWidth&&e.getNumLines(t)<=n},e}return(0,u.default)(n,[{key:"componentDidMount",value:function(){this._container=this.getContainer(),this.checkSize(),window.addEventListener("resize",this.checkSize)}},{key:"componentDidUpdate",value:function(){this.checkSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkSize)}},{key:"getContainer",value:function(){var e=this.props.containerId;return document.getElementById(e)}},{key:"getScalers",value:function(){var e=this.props,t=e.containerId,n=e.fontSizes;return Array.prototype.slice.call(document.querySelectorAll('[data-scaler-id="scaler-'.concat(t,'"]'))).sort(function(e,t){return n.indexOf(e.getAttribute("data-size"))-n.indexOf(t.getAttribute("data-size"))})}},{key:"getComputedPropertyValue",value:function(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}},{key:"getNumLines",value:function(e){var t=e.offsetHeight,n=parseInt(this.getComputedPropertyValue(e,"line-height"),10)||1;return Math.round(t/n)}},{key:"initScalers",value:function(e){var t=this;e.forEach(function(e){e.style.display="inline",e.style.maxWidth="".concat(t._container.clientWidth,"px")})}},{key:"hideScalers",value:function(e){e.forEach(function(e){e.style.display="none",e.style.maxWidth=""})}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.containerId,r=e.font,o=e.fontSizes,l=e.style,u=e.Tag,a=void 0===u?d.UX2.Element.Element:u,c={overflowWrap:"normal",display:"none",visibility:"hidden",position:"absolute",left:0};return s.default.createElement(s.Fragment,null,o.map(function(e){return s.default.createElement(a,{tag:"span",key:e,font:r,style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,i.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},c,{},l,{fontSize:e}),"data-size":e,"data-scaler-id":"scaler-".concat(n),"data-ux":"scaler"},t)}))}}]),n}(s.PureComponent);N.propTypes={containerId:E.default.string.isRequired,onChange:E.default.func.isRequired,text:E.default.string.isRequired,font:E.default.string,fontSizes:E.default.arrayOf(E.default.oneOf(Object.values(d.constants.fontSizes))),style:E.default.object,maxLines:E.default.number,Tag:E.default.node},N.defaultProps={fontSizes:[O,y,D],maxLines:3};var h=N;t.default=h,e.exports=t.default},function(e,t,n){var r=n(6);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,t&&t.set(e,n),n}}]);