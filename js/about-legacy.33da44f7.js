(self["webpackChunkxigua_ui"]=self["webpackChunkxigua_ui"]||[]).push([[443],{986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(6252),o={class:"about"},i=(0,r._)("h1",null,"This is an about page",-1),l=[i];function u(e,t,n,i,u,c){return(0,r.wg)(),(0,r.iD)("div",o,l)}n(2222);var c={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a=(0,r._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),d=(0,r._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),s=[a,d];function f(e,t){return(0,r.wg)(),(0,r.iD)("svg",c,s)}var g=n(3744);const m={},p=(0,g.Z)(m,[["render",f]]);var y=p,b={gray:"bg-gray-500",red:"bg-red-500",yellow:"bg-yellow-500",green:"bg-green-500",blue:"bg-blue-500",indigo:"bg-indigo-500",violet:"bg-violet-500",pink:"bg-pink-500"},v={gray:"hover:bg-gray-500",red:"hover:bg-red-500",yellow:"hover:bg-yellow-500",green:"hover:bg-green-500",blue:"hover:bg-blue-500",indigo:"hover:bg-indigo-500",violet:"hover:bg-violet-500",pink:"hover:bg-pink-500"},k={gray:"hover:bg-gray-700",red:"hover:bg-red-700",yellow:"hover:bg-yellow-700",green:"hover:bg-green-700",blue:"hover:bg-blue-700",indigo:"hover:bg-indigo-700",violet:"hover:bg-violet-700",pink:"hover:bg-pink-700"},W={gray:"text-gray-500",red:"text-red-500",yellow:"text-yellow-500",green:"text-green-500",blue:"text-blue-500",indigo:"text-indigo-500",violet:"text-violet-500",pink:"text-pink-500"},x={gray:"border-gray-500",red:"border-red-500",yellow:"border-yellow-500",green:"border-green-500",blue:"border-blue-500",indigo:"border-indigo-500",violet:"border-violet-500",pink:"border-pink-500"},U={gray:"focus:ring-gray-500",red:"focus:ring-red-500",yellow:"focus:ring-yellow-500",green:"focus:ring-green-500",blue:"focus:ring-blue-500",indigo:"focus:ring-indigo-500",violet:"focus:ring-violet-500",pink:"focus:ring-pink-500"},w={gray:"focus:bg-gray-500",red:"focus:bg-red-500",yellow:"focus:bg-yellow-500",green:"focus:bg-green-500",blue:"focus:bg-blue-500",indigo:"focus:bg-indigo-500",violet:"focus:bg-violet-500",pink:"focus:bg-pink-500"},h=(0,r.aZ)({props:{size:{type:String,default:function(){return"medium"}},color:{type:String,default:"violet"},outlined:{},type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,o=" ".concat(b[e.color]," text-white shadow-sm  border-transparent");"outlined"===e.type&&(o=" ".concat(W[e.color]," ").concat(x[e.color])),"text"===e.type&&(o=" ".concat(W[e.color]," border-transparent")),e.disabled||e.loading||("text"===e.type||"outlined"===e.type?o+=" ".concat(v[e.color]," ").concat(w[e.color]," hover:bg-opacity-5  hover:border-opacity-100  focus:bg-opacity-5  focus:border-opacity-100"):o+=" ".concat(k[e.color]," ").concat(U[e.color],"  focus:ring-2 focus:ring-offset-2"));var i=e.disabled?"xg-button-disabled":"",l="primary"===e.type?"text-white":"".concat(W[e.color]),u=e.loading?"cursor-not-allowed":"",c=(0,r.Fl)((function(){switch(e.size){case"large":return"-ml-1 h-6 w-6 mr-2.5";case"small":return"-ml-1 h-4 w-4 mr-1.5";case"mini":return"h-3 w-3 mr-1 -mt-0.5";case"medium":default:return"-ml-1 h-5 w-5 mr-2"}}));return function(){return(0,r.Wm)("button",{class:"xg-button xg-button-".concat(e.type," ").concat(o,"  ").concat(i," ").concat(u," xg-button-").concat(e.size)},[e.loading?(0,r.Wm)(y,{class:"animate-spin ".concat(c.value," ").concat(l)},null):null,n.default&&n.default()])}}}),E=(0,r.aZ)({compnents:{XgButton:h},setup:function(){return function(){return(0,r.Wm)("div",{style:"margin:0 auto"},[(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("大小")]),(0,r.Wm)("div",{class:"flex space-x-4 items-end"},[(0,r.Wm)(h,{size:"mini"},{default:function(){return[(0,r.Uk)("MINI")]}}),(0,r.Wm)(h,{size:"small"},{default:function(){return[(0,r.Uk)("SMALL")]}}),(0,r.Wm)(h,{size:"medium"},{default:function(){return[(0,r.Uk)("MEDIUM")]}}),(0,r.Wm)(h,{size:"large"},{default:function(){return[(0,r.Uk)("LARGE")]}})]),(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("边框")]),(0,r.Wm)("div",{class:"flex space-x-4  items-end"},[(0,r.Wm)(h,{type:"outlined",size:"mini"},{default:function(){return[(0,r.Uk)("MINI")]}}),(0,r.Wm)(h,{type:"outlined",size:"small"},{default:function(){return[(0,r.Uk)("SMALL")]}}),(0,r.Wm)(h,{type:"outlined",size:"medium"},{default:function(){return[(0,r.Uk)("MEDIUM")]}}),(0,r.Wm)(h,{type:"outlined",size:"large"},{default:function(){return[(0,r.Uk)("LARGE")]}})]),(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("纯文本")]),(0,r.Wm)("div",{class:"flex space-x-4  items-end"},[(0,r.Wm)(h,{type:"text",size:"mini"},{default:function(){return[(0,r.Uk)("MINI")]}}),(0,r.Wm)(h,{type:"text",size:"small"},{default:function(){return[(0,r.Uk)("SMALL")]}}),(0,r.Wm)(h,{type:"text",size:"medium"},{default:function(){return[(0,r.Uk)("MEDIUM")]}}),(0,r.Wm)(h,{type:"text",size:"large"},{default:function(){return[(0,r.Uk)("LARGE")]}})]),(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("颜色")]),(0,r.Wm)("div",{class:"flex space-x-4 items-end"},[(0,r.Wm)(h,{color:"red"},{default:function(){return[(0,r.Uk)("RED")]}}),(0,r.Wm)(h,{color:"gray"},{default:function(){return[(0,r.Uk)("GRAY")]}}),(0,r.Wm)(h,{color:"yellow"},{default:function(){return[(0,r.Uk)("YELLOW")]}}),(0,r.Wm)(h,{color:"green"},{default:function(){return[(0,r.Uk)("GREEN")]}}),(0,r.Wm)(h,{color:"indigo"},{default:function(){return[(0,r.Uk)("INDIGO")]}}),(0,r.Wm)(h,{color:"pink"},{default:function(){return[(0,r.Uk)("PINK")]}})]),(0,r.Wm)("div",{class:"flex space-x-4 items-end space-y-2"},[(0,r.Wm)(h,{type:"outlined",color:"red"},{default:function(){return[(0,r.Uk)("RED")]}}),(0,r.Wm)(h,{type:"outlined",color:"gray"},{default:function(){return[(0,r.Uk)("GRAY")]}}),(0,r.Wm)(h,{type:"outlined",color:"yellow"},{default:function(){return[(0,r.Uk)("YELLOW")]}}),(0,r.Wm)(h,{type:"outlined",color:"green"},{default:function(){return[(0,r.Uk)("GREEN")]}}),(0,r.Wm)(h,{type:"outlined",color:"indigo"},{default:function(){return[(0,r.Uk)("INDIGO")]}}),(0,r.Wm)(h,{type:"outlined",color:"pink"},{default:function(){return[(0,r.Uk)("PINK")]}})]),(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("禁用")]),(0,r.Wm)("div",{class:"flex space-x-4 items-end"},[(0,r.Wm)(h,{disabled:!0,color:"red"},{default:function(){return[(0,r.Uk)("RED")]}}),(0,r.Wm)(h,{type:"outlined",disabled:!0,color:"gray"},{default:function(){return[(0,r.Uk)("GRAY")]}}),(0,r.Wm)(h,{type:"text",disabled:!0,color:"yellow"},{default:function(){return[(0,r.Uk)("YELLOW")]}}),(0,r.Wm)(h,{disabled:!0,color:"green"},{default:function(){return[(0,r.Uk)("GREEN")]}}),(0,r.Wm)(h,{disabled:!0,color:"indigo"},{default:function(){return[(0,r.Uk)("INDIGO")]}}),(0,r.Wm)(h,{disabled:!0,color:"pink"},{default:function(){return[(0,r.Uk)("PINK")]}})]),(0,r.Wm)("p",{class:"my-4"},[(0,r.Uk)("Loading")]),(0,r.Wm)("div",{class:"flex space-x-4 items-end"},[(0,r.Wm)(h,{size:"mini",loading:!0,color:"red"},{default:function(){return[(0,r.Uk)("RED")]}}),(0,r.Wm)(h,{loading:!0,type:"outlined",color:"gray"},{default:function(){return[(0,r.Uk)("GRAY")]}}),(0,r.Wm)(h,{size:"small",loading:!0,type:"text",color:"yellow"},{default:function(){return[(0,r.Uk)("YELLOW")]}}),(0,r.Wm)(h,{loading:!0,color:"green"},{default:function(){return[(0,r.Uk)("GREEN")]}}),(0,r.Wm)(h,{size:"large",loading:!0,color:"indigo"},{default:function(){return[(0,r.Uk)("INDIGO")]}}),(0,r.Wm)(h,{loading:!0,color:"pink"},{default:function(){return[(0,r.Uk)("PINK")]}})])])}}});const I=(0,g.Z)(E,[["render",u]]);var z=I},1194:function(e,t,n){var r=n(7293),o=n(5112),i=n(7392),l=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},7475:function(e,t,n){var r=n(7854),o=n(3157),i=n(4411),l=n(111),u=n(5112),c=u("species"),a=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,i(t)&&(t===a||o(t.prototype))?t=void 0:l(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?a:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},6135:function(e,t,n){"use strict";var r=n(4948),o=n(3070),i=n(9114);e.exports=function(e,t,n){var l=r(t);l in e?o.f(e,l,i(0,n)):e[l]=n}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},2222:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(7293),l=n(3157),u=n(111),c=n(7908),a=n(6244),d=n(6135),s=n(5417),f=n(1194),g=n(5112),m=n(7392),p=g("isConcatSpreadable"),y=9007199254740991,b="Maximum allowed index exceeded",v=o.TypeError,k=m>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),W=f("concat"),x=function(e){if(!u(e))return!1;var t=e[p];return void 0!==t?!!t:l(e)},U=!k||!W;r({target:"Array",proto:!0,forced:U},{concat:function(e){var t,n,r,o,i,l=c(this),u=s(l,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?l:arguments[t],x(i)){if(o=a(i),f+o>y)throw v(b);for(n=0;n<o;n++,f++)n in i&&d(u,f,i[n])}else{if(f>=y)throw v(b);d(u,f++,i)}return u.length=f,u}})}}]);