"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[939],{3939:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(4166),i=t(6030),c=t(6916),u=function(e){return e.simpleCalcReducer.effectsReducer.sideBare},l=function(e){return e.simpleCalcReducer.mathReducer.firstDate},s=function(e){return e.simpleCalcReducer.mathReducer.secondDate},a=(0,c.P1)((function(e){return e.simpleCalcReducer.mathReducer}),(function(e){return e})),o=t(184),f=function(){var e=(0,i.v9)(u);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.e,{}),(0,o.jsxs)("div",{className:"simpleCalc",style:{width:e?"675px":"445px"},children:[(0,o.jsxs)("div",{className:"simpleCalc__main",children:[(0,o.jsx)(m,{}),(0,o.jsx)(C,{})]}),(0,o.jsx)(g,{})]})]})},p=function(e){var n=e.result,t=e.styles;return(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)("h4",{children:"Rounded result: "}),(0,o.jsx)("p",{children:n})]})},d=function(e){var n=e.styles,t=e.message;return(0,o.jsx)("p",{className:n,children:t})},v=function(e){var n=e.btnName,t=e.callback,r=(0,i.I0)();return(0,o.jsx)("div",{onClick:function(){return r(t(n))},className:"simpleCalc__button",children:n})},m=function(){var e=(0,i.v9)(a),n=e.result,t=e.error;return(0,o.jsx)("div",{className:"simpleCalc__screen",style:!t||n?{visibility:"visible"}:{visibility:"hidden"},children:t?(0,o.jsx)(d,{message:t,styles:"simpleCalc__warning"}):(0,o.jsx)(p,{result:n,styles:"simpleCalc__results"})})},h=function(e){var n=e.buttons,t=e.callback;return(0,o.jsx)("div",{className:"simpleCalc__buttons",children:n.map((function(e,n){return(0,o.jsx)(v,{btnName:e,callback:t},n+e)}))})},x=t(7202),y=["7","8","9","4","5","6","1","2","3","0","+/-","."],j=["sin","asin","acos","cos","tg","atg","ctg","actg","PI","RND","ArCr","VolBall"],b=["=","C","DEL","+","-","*","/","^","sqrt"],C=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"simpleCalc__BlockButtons",children:[(0,o.jsx)(h,{buttons:y,callback:x.wf}),(0,o.jsx)(h,{buttons:b,callback:x.Yq})]})})},g=function(){var e=(0,i.v9)(u),n=((0,i.v9)(l),(0,i.v9)(s),(0,i.I0)());return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"simpleCalc__sidePanel",children:[(0,o.jsx)("div",{className:"simpleCalc__calendar",children:"TODO"}),(0,o.jsx)("div",{className:"simpleCalc__extraButtons",children:(0,o.jsx)(h,{buttons:j,callback:x.A3})})]}),(0,o.jsx)("div",{className:"simpleCalc__openCloseButton",onClick:function(){return n((0,x.Ov)())},children:e?"<":">"})]})}},4166:function(e,n,t){t.d(n,{e:function(){return u}});var r=t(3504),i=t(3360),c=t(184),u=function(){return(0,c.jsx)(r.rU,{to:"/portfolio",children:(0,c.jsx)(i.Z,{variant:"secondary",style:{boxShadow:"10px 10px 10px rgb(100, 100, 100)"},children:"Back"})})}},6916:function(e,n,t){t.d(n,{P1:function(){return s}});var r="NOT_FOUND";var i=function(e,n){return e===n};function c(e,n){var t="object"===typeof n?n:{equalityCheck:n},c=t.equalityCheck,u=void 0===c?i:c,l=t.maxSize,s=void 0===l?1:l,a=t.resultEqualityCheck,o=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(u),f=1===s?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:r},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(o):function(e,n){var t=[];function i(e){var i=t.findIndex((function(t){return n(e,t.key)}));if(i>-1){var c=t[i];return i>0&&(t.splice(i,1),t.unshift(c)),c.value}return r}return{get:i,put:function(n,c){i(n)===r&&(t.unshift({key:n,value:c}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(s,o);function p(){var n=f.get(arguments);if(n===r){if(n=e.apply(null,arguments),a){var t=f.getEntries(),i=t.find((function(e){return a(e.value,n)}));i&&(n=i.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function u(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var c,l=0,s={memoizeOptions:void 0},a=r.pop();if("object"===typeof a&&(s=a,a=r.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var o=s,f=o.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],v=u(r),m=e.apply(void 0,[function(){return l++,a.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=v.length,t=0;t<n;t++)e.push(v[t].apply(null,arguments));return c=m.apply(null,e)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:m,dependencies:v,lastResult:function(){return c},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),h};return i}var s=l(c)}}]);
//# sourceMappingURL=939.3f7c4f1d.chunk.js.map