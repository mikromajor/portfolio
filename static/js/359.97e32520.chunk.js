"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[359],{359:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var c=n(885),s=n(2791),r=n(184),a=function(e){var t=e.id,n=e.styles,c=e.label,a=e.callback,l=(0,s.useRef)({btn__1:0,btn__2:0,btn__3:0,btn__4:0,btn__5:0,btn__6:0});return console.log("Button_".concat(t,"  render: ").concat(++l.current["btn__".concat(t)]," ")),(0,r.jsx)("button",{id:"btn__".concat(t),type:"button",className:"button button__".concat(n," shadow"),onClick:a,children:c})},l=(0,s.memo)(a),i=function(e){var t=e.time;return(0,r.jsxs)("h1",{className:"timer shadow",children:[(0,r.jsxs)("span",{children:[("0"+Math.floor(t/36e4%24)).slice(-2),":"]}),(0,r.jsxs)("span",{children:[("0"+Math.floor(t/6e3%60)).slice(-2),":"]}),(0,r.jsxs)("span",{children:[("0"+Math.floor(t/100%60)).slice(-2),":"]}),(0,r.jsx)("span",{children:("0"+Math.floor(t)).slice(-2)})]})},o=function(e){var t=e.callback;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"check__header shadow_text",children:"Check your speed 2clicks"}),(0,r.jsx)(l,{id:5,styles:"check",label:"Check speed",callback:t})]})},u=function(){var e=(0,s.useState)(!1),t=(0,c.Z)(e,2),n=t[0],a=t[1],i=(0,s.useRef)(),o=(0,s.useRef)(),u=(0,s.useCallback)((function(){i.current?a("indicator_on"):(a("indicator_off"),i.current=setInterval((function(){}),1),o.current=setTimeout((function(){clearInterval(i.current),i.current=0,clearTimeout(o.current)}),300))}),[]);return(0,r.jsxs)("div",{className:"DoubleClick shadow",children:[(0,r.jsx)("div",{className:"indicator ".concat(n," shadow")}),(0,r.jsx)(l,{id:6,styles:"doubleClick",label:"Double click < 300ms",callback:u})]})},d=function(e){var t=e.wait,n=e.setWait,c=e.setTime,s=e.timerOn,a=e.setTimerOn;return(0,r.jsxs)("div",{className:"ControlPanel",children:[(0,r.jsx)(l,{id:1,styles:t?"wait_on":"wait_off",label:"Wait",callback:function(){return n((function(e){return!e}))}}),(0,r.jsx)(l,{id:2,styles:"reset",label:"Reset",callback:function(){n(!1),c(0)}}),s?(0,r.jsx)(l,{id:4,styles:"stop",label:"STOP",callback:function(){n(!1),a(!1)}}):(0,r.jsx)(l,{id:3,styles:"start",label:"START",callback:function(){n(!1),a(!0)}})]})},f=(0,s.memo)(d),b=n(3504);function h(){var e=(0,s.useState)(!1),t=(0,c.Z)(e,2),n=t[0],a=t[1],l=(0,s.useState)(!1),d=(0,c.Z)(l,2),h=d[0],m=d[1],x=(0,s.useState)(0),_=(0,c.Z)(x,2),j=_[0],k=_[1],p=(0,s.useRef)();(0,s.useEffect)((function(){return n?p.current=setTimeout((function e(){h||(k((function(e){return e+1})),p.current=setTimeout(e,10))}),10):(clearTimeout(p.current),k(0)),function(){return clearTimeout(p.current)}}),[n,h]);var v=(0,s.useCallback)((function(){n?m(!0):(m(!1),a(!0))}),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.rU,{to:"/portfolio",children:"BACK"}),(0,r.jsx)("div",{className:"screen",children:(0,r.jsxs)("header",{className:"allTimer shadow",children:[(0,r.jsx)(i,{time:j}),(0,r.jsx)(f,{wait:h,setWait:m,setTime:k,timerOn:n,setTimerOn:a}),(0,r.jsx)(o,{callback:v}),(0,r.jsx)(u,{})]})})]})}}}]);
//# sourceMappingURL=359.97e32520.chunk.js.map