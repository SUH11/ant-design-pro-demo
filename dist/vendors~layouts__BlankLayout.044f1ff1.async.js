(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L9jI:function(Y,de,w){"use strict";Y.exports="/__open-stack-frame-in-editor"},Y7cU:function(Y,de,w){"use strict";var fe=w("ODXe"),P=w("q1tI"),$=w.n(P);/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var B=typeof navigator!="undefined"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function A(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on".concat(e),function(){n(window.event)})}function X(t,e){for(var n=e.slice(0,e.length-1),r=0;r<n.length;r++)n[r]=t[n[r].toLowerCase()];return n}function J(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}function ce(t,e){for(var n=t.length>=e.length?t:e,r=t.length>=e.length?e:t,i=!0,a=0;a<n.length;a++)r.indexOf(n[a])===-1&&(i=!1);return i}for(var Q={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":B?173:189,"=":B?61:187,";":B?59:186,"'":222,"[":219,"]":221,"\\":220},x={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},Z={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},y={16:!1,18:!1,17:!1,91:!1},v={},K=1;K<20;K++)Q["f".concat(K)]=111+K;var c=[],q="all",ee=[],R=function(e){return Q[e.toLowerCase()]||x[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function te(t){q=t||"all"}function S(){return q||"all"}function pe(){return c.slice(0)}function ue(t){var e=t.target||t.srcElement,n=e.tagName,r=!0;return(e.isContentEditable||(n==="INPUT"||n==="TEXTAREA"||n==="SELECT")&&!e.readOnly)&&(r=!1),r}function ve(t){return typeof t=="string"&&(t=R(t)),c.indexOf(t)!==-1}function he(t,e){var n,r;t||(t=S());for(var i in v)if(Object.prototype.hasOwnProperty.call(v,i))for(n=v[i],r=0;r<n.length;)n[r].scope===t?n.splice(r,1):r++;S()===t&&te(e||"all")}function ge(t){var e=t.keyCode||t.which||t.charCode,n=c.indexOf(e);if(n>=0&&c.splice(n,1),t.key&&t.key.toLowerCase()==="meta"&&c.splice(0,c.length),(e===93||e===224)&&(e=91),e in y){y[e]=!1;for(var r in x)x[r]===e&&(C[r]=!1)}}function me(t){if(!t)Object.keys(v).forEach(function(l){return delete v[l]});else if(Array.isArray(t))t.forEach(function(l){l.key&&M(l)});else if(typeof t=="object")t.key&&M(t);else if(typeof t=="string"){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=n[0],a=n[1];typeof i=="function"&&(a=i,i=""),M({key:t,scope:i,method:a,splitKey:"+"})}}var M=function(e){var n=e.key,r=e.scope,i=e.method,a=e.splitKey,l=a===void 0?"+":a,s=J(n);s.forEach(function(p){var d=p.split(l),o=d.length,f=d[o-1],u=f==="*"?"*":R(f);if(!v[u])return;r||(r=S());var h=o>1?X(x,d):[];v[u]=v[u].map(function(b){var T=i?b.method===i:!0;return T&&b.scope===r&&ce(b.mods,h)?{}:b})})};function ne(t,e,n){var r;if(e.scope===n||e.scope==="all"){r=e.mods.length>0;for(var i in y)Object.prototype.hasOwnProperty.call(y,i)&&((!y[i]&&e.mods.indexOf(+i)>-1||y[i]&&e.mods.indexOf(+i)===-1)&&(r=!1));(e.mods.length===0&&!y[16]&&!y[18]&&!y[17]&&!y[91]||r||e.shortcut==="*")&&(e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}function re(t){var e=v["*"],n=t.keyCode||t.which||t.charCode;if(!C.filter.call(this,t))return;if((n===93||n===224)&&(n=91),c.indexOf(n)===-1&&n!==229&&c.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(h){var b=Z[h];t[h]&&c.indexOf(b)===-1?c.push(b):!t[h]&&c.indexOf(b)>-1?c.splice(c.indexOf(b),1):h==="metaKey"&&t[h]&&c.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(c=c.slice(c.indexOf(b))))}),n in y){y[n]=!0;for(var r in x)x[r]===n&&(C[r]=!0);if(!e)return}for(var i in y)Object.prototype.hasOwnProperty.call(y,i)&&(y[i]=t[Z[i]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(c.indexOf(17)===-1&&c.push(17),c.indexOf(18)===-1&&c.push(18),y[17]=!0,y[18]=!0);var a=S();if(e)for(var l=0;l<e.length;l++)e[l].scope===a&&(t.type==="keydown"&&e[l].keydown||t.type==="keyup"&&e[l].keyup)&&ne(t,e[l],a);if(!(n in v))return;for(var s=0;s<v[n].length;s++)if((t.type==="keydown"&&v[n][s].keydown||t.type==="keyup"&&v[n][s].keyup)&&v[n][s].key){for(var p=v[n][s],d=p.splitKey,o=p.key.split(d),f=[],u=0;u<o.length;u++)f.push(R(o[u]));f.sort().join("")===c.sort().join("")&&ne(t,p,a)}}function ye(t){return ee.indexOf(t)>-1}function C(t,e,n){c=[];var r=J(t),i=[],a="all",l=document,s=0,p=!1,d=!0,o="+";for(n===void 0&&typeof e=="function"&&(n=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(l=e.element),e.keyup&&(p=e.keyup),e.keydown!==void 0&&(d=e.keydown),typeof e.splitKey=="string"&&(o=e.splitKey)),typeof e=="string"&&(a=e);s<r.length;s++)t=r[s].split(o),i=[],t.length>1&&(i=X(x,t)),t=t[t.length-1],t=t==="*"?"*":R(t),t in v||(v[t]=[]),v[t].push({keyup:p,keydown:d,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:o});typeof l!="undefined"&&!ye(l)&&window&&(ee.push(l),A(l,"keydown",function(f){re(f)}),A(window,"focus",function(){c=[]}),A(l,"keyup",function(f){re(f),ge(f)}))}var _={setScope:te,getScope:S,deleteScope:he,getPressedKeyCodes:pe,isPressed:ve,filter:ue,unbind:me};for(var F in _)Object.prototype.hasOwnProperty.call(_,F)&&(C[F]=_[F]);if(typeof window!="undefined"){var be=window.hotkeys;C.noConflict=function(t){return t&&window.hotkeys===C&&(window.hotkeys=be),C},window.hotkeys=C}var ie=C,j=new Set;function Ee(t){function e(){n(window)}function n(o){o&&typeof o.addEventListener=="function"&&(o.addEventListener("click",a,!0),o.addEventListener("mousedown",l,!0),o.addEventListener("mouseover",l,!0),o.addEventListener("mouseup",l,!0),o.addEventListener("pointerdown",s,!0),o.addEventListener("pointerover",p,!0),o.addEventListener("pointerup",d,!0))}function r(){i(window),j.forEach(function(o){try{i(o.contentWindow)}catch(f){}}),j=new Set}function i(o){o&&typeof o.removeEventListener=="function"&&(o.removeEventListener("click",a,!0),o.removeEventListener("mousedown",l,!0),o.removeEventListener("mouseover",l,!0),o.removeEventListener("mouseup",l,!0),o.removeEventListener("pointerdown",s,!0),o.removeEventListener("pointerover",p,!0),o.removeEventListener("pointerup",d,!0))}function a(o){var f;o.preventDefault(),o.stopPropagation(),r(),(f=t.onClick)===null||f===void 0||f.call(t,o.target)}function l(o){o.preventDefault(),o.stopPropagation()}function s(o){o.preventDefault(),o.stopPropagation()}function p(o){var f;o.preventDefault(),o.stopPropagation();var u=o.target;if(u.tagName==="IFRAME"){var h=u;try{if(!j.has(h)){var b=h.contentWindow;n(b),j.add(h)}}catch(T){}}(f=t.onPointerOver)===null||f===void 0||f.call(t,o.target)}function d(o){o.preventDefault(),o.stopPropagation()}return e(),r}var Oe=w("33yf"),we=w.n(Oe),Ie=w("L9jI"),Ce=w.n(Ie),xe=w("cr+I"),Te=w.n(xe),ae=function t(e){if(!(e==null?void 0:e.dataset))return;var n=e.dataset,r=n.inspectorLine,i=n.inspectorColumn,a=n.inspectorRelativePath;return r&&i&&a?{lineNumber:r,columnNumber:i,relativePath:a}:e.parentElement?t(e.parentElement):void 0},Le=function(e){var n="/Users/su/demo/ant-design-pro-demo";if(!e||!n)return;var r=e.relativePath,i=e.lineNumber,a=e.columnNumber,l=we.a.join(n,r),s={fileName:l,lineNumber:i,colNumber:a};fetch("".concat(Ce.a,"?").concat(Te.a.stringify(s)))},Ne=function(e){var n=Object.keys(e).find(function(r){return r.startsWith("__reactInternalInstance$")||r.startsWith("__reactFiber$")});return n?e[n]:null},Se=/^(.*?\.Provider|.*?\.Consumer|Anonymous|Trigger|Tooltip|_.*|[a-z].*)$/,oe=function(e){for(var n,r,i,a=e;a;){var l=(r=(n=a.type)===null||n===void 0?void 0:n.displayName)!==null&&r!==void 0?r:(i=a.type)===null||i===void 0?void 0:i.name;if(l&&!Se.test(l))return a;a=a.return}return null},Pe=function(e){var n,r=(n=oe(e))===null||n===void 0?void 0:n.type,i;return typeof(r==null?void 0:r.displayName)=="string"?i=r.displayName:typeof(r==null?void 0:r.name)=="string"&&(i=r.name),i},le=function(e,n){var r=oe(Ne(e)),i=Pe(r),a=e.nodeName.toLowerCase(),l=i||a,s=n?"<".concat(l,">"):"".concat(a," in <").concat(i,">");return{fiber:r,name:i,title:s}},Ke=w("BsWD");function Re(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=Object(Ke.a)(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(d){throw d},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,l=!1,s;return{s:function(){n=t[Symbol.iterator]()},n:function(){var d=n.next();return a=d.done,d},e:function(d){l=!0,s=d},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(l)throw s}}}}var H=w("1OyB"),V=w("vuIU");function se(t,e){return t.getBoundingClientRect()}function je(t){var e=window.getComputedStyle(t);return{borderLeft:parseInt(e.borderLeftWidth,10),borderRight:parseInt(e.borderRightWidth,10),borderTop:parseInt(e.borderTopWidth,10),borderBottom:parseInt(e.borderBottomWidth,10),marginLeft:parseInt(e.marginLeft,10),marginRight:parseInt(e.marginRight,10),marginTop:parseInt(e.marginTop,10),marginBottom:parseInt(e.marginBottom,10),paddingLeft:parseInt(e.paddingLeft,10),paddingRight:parseInt(e.paddingRight,10),paddingTop:parseInt(e.paddingTop,10),paddingBottom:parseInt(e.paddingBottom,10)}}var De=function(){function t(e,n){Object(H.a)(this,t),this.node=e.createElement("div"),this.border=e.createElement("div"),this.padding=e.createElement("div"),this.content=e.createElement("div"),this.border.style.borderColor=D.border,this.padding.style.borderColor=D.padding,this.content.style.backgroundColor=D.background,Object.assign(this.node.style,{borderColor:D.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),n.appendChild(this.node)}return Object(V.a)(t,[{key:"remove",value:function(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}},{key:"update",value:function(n,r){G(r,"margin",this.node),G(r,"border",this.border),G(r,"padding",this.padding),Object.assign(this.content.style,{height:"".concat(n.height-r.borderTop-r.borderBottom-r.paddingTop-r.paddingBottom,"px"),width:"".concat(n.width-r.borderLeft-r.borderRight-r.paddingLeft-r.paddingRight,"px")}),Object.assign(this.node.style,{top:"".concat(n.top-r.marginTop,"px"),left:"".concat(n.left-r.marginLeft,"px")})}}]),t}(),We=function(){function t(e,n){Object(H.a)(this,t),this.tip=e.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=e.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=e.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=e.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=e.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",n.appendChild(this.tip)}return Object(V.a)(t,[{key:"remove",value:function(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}},{key:"updateText",value:function(n,r,i,a){this.titleDiv.textContent=n,this.infoDiv.textContent=r!=null?r:"",this.dimSpan.textContent="".concat(Math.round(i),"px \xD7 ").concat(Math.round(a),"px")}},{key:"updatePosition",value:function(n,r){var i=this.tip.getBoundingClientRect(),a=Be(n,r,{width:i.width,height:i.height});Object.assign(this.tip.style,a.style)}}]),t}(),ke=function(){function t(){Object(H.a)(this,t);var e=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=e;var n=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=n;var r=e.document;this.container=r.createElement("div"),this.container.style.zIndex="10000000",this.tip=new We(r,this.container),this.rects=[],this.removeCallback=function(){},r.body.appendChild(this.container)}return Object(V.a)(t,[{key:"remove",value:function(){this.tip.remove(),this.rects.forEach(function(n){n.remove()}),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}},{key:"setRemoveCallback",value:function(n){this.removeCallback=n.bind(this)}},{key:"inspect",value:function(n,r,i){for(var a=this,l,s=n.filter(function(O){return O.nodeType===Node.ELEMENT_NODE});this.rects.length>s.length;){var p=this.rects.pop();p==null||p.remove()}if(s.length===0)return;for(;this.rects.length<s.length;)this.rects.push(new De(this.window.document,this.container));var d={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(s.forEach(function(O,g){var m=se(O,a.window),E=je(O);d.top=Math.min(d.top,m.top-E.marginTop),d.right=Math.max(d.right,m.left+m.width+E.marginRight),d.bottom=Math.max(d.bottom,m.top+m.height+E.marginBottom),d.left=Math.min(d.left,m.left-E.marginLeft);var I=a.rects[g];I.update(m,E)}),!r){r=s[0].nodeName.toLowerCase();var o=s[0],f=(l=o.ownerDocument.defaultView)===null||l===void 0?void 0:l.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(f==null?void 0:f.rendererInterfaces){var u=null,h=Re(f.rendererInterfaces.values()),b;try{for(h.s();!(b=h.n()).done;){var T=b.value,W=T.getFiberIDForNative(o,!0);if(W!==null){u=T.getDisplayNameForFiberID(W,!0);break}}}catch(O){h.e(O)}finally{h.f()}u&&(r+=" (in ".concat(u,")"))}}this.tip.updateText(r,i,d.right-d.left,d.bottom-d.top);var L=se(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:d.top,left:d.left,height:d.bottom-d.top,width:d.right-d.left},{top:L.top+this.tipBoundsWindow.scrollY,left:L.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}]),t}();function Be(t,e,n){var r=Math.max(n.height,20),i=Math.max(n.width,60),a=5,l;t.top+t.height+r<=e.top+e.height?t.top+t.height<e.top+0?l=e.top+a:l=t.top+t.height+a:t.top-r<=e.top+e.height?t.top-r-a<e.top+a?l=e.top+a:l=t.top-r-a:l=e.top+e.height-r-a;var s=t.left+a;return t.left<e.left&&(s=e.left+a),t.left+i>e.left+e.width&&(s=e.left+e.width-i-a),l+="px",s+="px",{style:{top:l,left:s}}}function G(t,e,n){Object.assign(n.style,{borderTopWidth:"".concat(t["".concat(e,"Top")],"px"),borderLeftWidth:"".concat(t["".concat(e,"Left")],"px"),borderRightWidth:"".concat(t["".concat(e,"Right")],"px"),borderBottomWidth:"".concat(t["".concat(e,"Bottom")],"px"),borderStyle:"solid"})}var D={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},Ae=["control","shift","command","c"],_e=function(e){var n=e.keys,r=e.onHoverElement,i=e.onClickElement,a=e.disableLaunchEditor,l=e.children,s=(n!=null?n:Ae).join("+"),p=Object(P.useState)(!1),d=Object(fe.a)(p,2),o=d[0],f=d[1],u=Object(P.useRef)(),h=function(g){var m,E=u.current,I=ae(g),k=I==null?void 0:I.relativePath,N=le(g,k),U=N.fiber,z=N.name,Me=N.title;(m=E==null?void 0:E.inspect)===null||m===void 0||m.call(E,[g],Me,k),r==null||r({element:g,fiber:U,codeInfo:I,name:z})},b=function(g){var m,E=u.current;(m=E==null?void 0:E.remove)===null||m===void 0||m.call(E),u.current=void 0,f(!1);var I=ae(g),k=I==null?void 0:I.relativePath,N=le(g,k),U=N.fiber,z=N.name;a||Le(I),i==null||i({element:g,fiber:U,codeInfo:I,name:z})},T=function(){var g=new ke,m=Ee({onPointerOver:h,onClick:b});g.setRemoveCallback(m),u.current=g,f(!0)},W=function(){var g;(g=u.current)===null||g===void 0||g.remove(),f(!1)},L=function(){return o?W():T()};return Object(P.useEffect)(function(){var O=function(m,E){E.key===s&&L()};return ie(s,O),window.__REACT_DEV_INSPECTOR_TOGGLE__=L,function(){ie.unbind(s,O),delete window.__REACT_DEV_INSPECTOR_TOGGLE__}},[s,L]),$.a.createElement($.a.Fragment,null,l)}}}]);
