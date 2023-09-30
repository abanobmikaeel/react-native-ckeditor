(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))p(f);new MutationObserver(f=>{for(const A of f)if(A.type==="childList")for(const v of A.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&p(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const A={};return f.integrity&&(A.integrity=f.integrity),f.referrerPolicy&&(A.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?A.credentials="include":f.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function p(f){if(f.ep)return;f.ep=!0;const A=u(f);fetch(f.href,A)}})();var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xy={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=Symbol.for("react.element"),VN=Symbol.for("react.portal"),HN=Symbol.for("react.fragment"),UN=Symbol.for("react.strict_mode"),GN=Symbol.for("react.profiler"),WN=Symbol.for("react.provider"),qN=Symbol.for("react.context"),$N=Symbol.for("react.forward_ref"),KN=Symbol.for("react.suspense"),QN=Symbol.for("react.memo"),ZN=Symbol.for("react.lazy"),p1=Symbol.iterator;function YN(s){return s===null||typeof s!="object"?null:(s=p1&&s[p1]||s["@@iterator"],typeof s=="function"?s:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,Sy={};function na(s,l,u){this.props=s,this.context=l,this.refs=Sy,this.updater=u||Ey}na.prototype.isReactComponent={};na.prototype.setState=function(s,l){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,l,"setState")};na.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Ty(){}Ty.prototype=na.prototype;function rf(s,l,u){this.props=s,this.context=l,this.refs=Sy,this.updater=u||Ey}var sf=rf.prototype=new Ty;sf.constructor=rf;Dy(sf,na.prototype);sf.isPureReactComponent=!0;var f1=Array.isArray,Iy=Object.prototype.hasOwnProperty,af={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function By(s,l,u){var p,f={},A=null,v=null;if(l!=null)for(p in l.ref!==void 0&&(v=l.ref),l.key!==void 0&&(A=""+l.key),l)Iy.call(l,p)&&!My.hasOwnProperty(p)&&(f[p]=l[p]);var y=arguments.length-2;if(y===1)f.children=u;else if(1<y){for(var b=Array(y),S=0;S<y;S++)b[S]=arguments[S+2];f.children=b}if(s&&s.defaultProps)for(p in y=s.defaultProps,y)f[p]===void 0&&(f[p]=y[p]);return{$$typeof:Vl,type:s,key:A,ref:v,props:f,_owner:af.current}}function JN(s,l){return{$$typeof:Vl,type:s.type,key:l,ref:s.ref,props:s.props,_owner:s._owner}}function lf(s){return typeof s=="object"&&s!==null&&s.$$typeof===Vl}function XN(s){var l={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(u){return l[u]})}var k1=/\/+/g;function jg(s,l){return typeof s=="object"&&s!==null&&s.key!=null?XN(""+s.key):l.toString(36)}function qd(s,l,u,p,f){var A=typeof s;(A==="undefined"||A==="boolean")&&(s=null);var v=!1;if(s===null)v=!0;else switch(A){case"string":case"number":v=!0;break;case"object":switch(s.$$typeof){case Vl:case VN:v=!0}}if(v)return v=s,f=f(v),s=p===""?"."+jg(v,0):p,f1(f)?(u="",s!=null&&(u=s.replace(k1,"$&/")+"/"),qd(f,l,u,"",function(S){return S})):f!=null&&(lf(f)&&(f=JN(f,u+(!f.key||v&&v.key===f.key?"":(""+f.key).replace(k1,"$&/")+"/")+s)),l.push(f)),1;if(v=0,p=p===""?".":p+":",f1(s))for(var y=0;y<s.length;y++){A=s[y];var b=p+jg(A,y);v+=qd(A,l,u,b,f)}else if(b=YN(s),typeof b=="function")for(s=b.call(s),y=0;!(A=s.next()).done;)A=A.value,b=p+jg(A,y++),v+=qd(A,l,u,b,f);else if(A==="object")throw l=String(s),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return v}function Td(s,l,u){if(s==null)return s;var p=[],f=0;return qd(s,p,"","",function(A){return l.call(u,A,f++)}),p}function eL(s){if(s._status===-1){var l=s._result;l=l(),l.then(function(u){(s._status===0||s._status===-1)&&(s._status=1,s._result=u)},function(u){(s._status===0||s._status===-1)&&(s._status=2,s._result=u)}),s._status===-1&&(s._status=0,s._result=l)}if(s._status===1)return s._result.default;throw s._result}var Wt={current:null},$d={transition:null},tL={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:$d,ReactCurrentOwner:af};ve.Children={map:Td,forEach:function(s,l,u){Td(s,function(){l.apply(this,arguments)},u)},count:function(s){var l=0;return Td(s,function(){l++}),l},toArray:function(s){return Td(s,function(l){return l})||[]},only:function(s){if(!lf(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};ve.Component=na;ve.Fragment=HN;ve.Profiler=GN;ve.PureComponent=rf;ve.StrictMode=UN;ve.Suspense=KN;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tL;ve.cloneElement=function(s,l,u){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var p=Dy({},s.props),f=s.key,A=s.ref,v=s._owner;if(l!=null){if(l.ref!==void 0&&(A=l.ref,v=af.current),l.key!==void 0&&(f=""+l.key),s.type&&s.type.defaultProps)var y=s.type.defaultProps;for(b in l)Iy.call(l,b)&&!My.hasOwnProperty(b)&&(p[b]=l[b]===void 0&&y!==void 0?y[b]:l[b])}var b=arguments.length-2;if(b===1)p.children=u;else if(1<b){y=Array(b);for(var S=0;S<b;S++)y[S]=arguments[S+2];p.children=y}return{$$typeof:Vl,type:s.type,key:f,ref:A,props:p,_owner:v}};ve.createContext=function(s){return s={$$typeof:qN,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:WN,_context:s},s.Consumer=s};ve.createElement=By;ve.createFactory=function(s){var l=By.bind(null,s);return l.type=s,l};ve.createRef=function(){return{current:null}};ve.forwardRef=function(s){return{$$typeof:$N,render:s}};ve.isValidElement=lf;ve.lazy=function(s){return{$$typeof:ZN,_payload:{_status:-1,_result:s},_init:eL}};ve.memo=function(s,l){return{$$typeof:QN,type:s,compare:l===void 0?null:l}};ve.startTransition=function(s){var l=$d.transition;$d.transition={};try{s()}finally{$d.transition=l}};ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ve.useCallback=function(s,l){return Wt.current.useCallback(s,l)};ve.useContext=function(s){return Wt.current.useContext(s)};ve.useDebugValue=function(){};ve.useDeferredValue=function(s){return Wt.current.useDeferredValue(s)};ve.useEffect=function(s,l){return Wt.current.useEffect(s,l)};ve.useId=function(){return Wt.current.useId()};ve.useImperativeHandle=function(s,l,u){return Wt.current.useImperativeHandle(s,l,u)};ve.useInsertionEffect=function(s,l){return Wt.current.useInsertionEffect(s,l)};ve.useLayoutEffect=function(s,l){return Wt.current.useLayoutEffect(s,l)};ve.useMemo=function(s,l){return Wt.current.useMemo(s,l)};ve.useReducer=function(s,l,u){return Wt.current.useReducer(s,l,u)};ve.useRef=function(s){return Wt.current.useRef(s)};ve.useState=function(s){return Wt.current.useState(s)};ve.useSyncExternalStore=function(s,l,u){return Wt.current.useSyncExternalStore(s,l,u)};ve.useTransition=function(){return Wt.current.useTransition()};ve.version="18.2.0";xy.exports=ve;var Iu=xy.exports;const up=yy(Iu);var Ny={exports:{}},yn={},Ly={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(s){function l(ie,de){var re=ie.length;ie.push(de);e:for(;0<re;){var He=re-1>>>1,Qe=ie[He];if(0<f(Qe,de))ie[He]=de,ie[re]=Qe,re=He;else break e}}function u(ie){return ie.length===0?null:ie[0]}function p(ie){if(ie.length===0)return null;var de=ie[0],re=ie.pop();if(re!==de){ie[0]=re;e:for(var He=0,Qe=ie.length,xo=Qe>>>1;He<xo;){var ln=2*(He+1)-1,Eo=ie[ln],En=ln+1,eo=ie[En];if(0>f(Eo,re))En<Qe&&0>f(eo,Eo)?(ie[He]=eo,ie[En]=re,He=En):(ie[He]=Eo,ie[ln]=re,He=ln);else if(En<Qe&&0>f(eo,re))ie[He]=eo,ie[En]=re,He=En;else break e}}return de}function f(ie,de){var re=ie.sortIndex-de.sortIndex;return re!==0?re:ie.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var v=Date,y=v.now();s.unstable_now=function(){return v.now()-y}}var b=[],S=[],B=1,D=null,C=3,E=!1,O=!1,j=!1,H=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ie){for(var de=u(S);de!==null;){if(de.callback===null)p(S);else if(de.startTime<=ie)p(S),de.sortIndex=de.expirationTime,l(b,de);else break;de=u(S)}}function U(ie){if(j=!1,R(ie),!O)if(u(b)!==null)O=!0,Pt(Q);else{var de=u(S);de!==null&&an(U,de.startTime-ie)}}function Q(ie,de){O=!1,j&&(j=!1,z(J),J=-1),E=!0;var re=C;try{for(R(de),D=u(b);D!==null&&(!(D.expirationTime>de)||ie&&!we());){var He=D.callback;if(typeof He=="function"){D.callback=null,C=D.priorityLevel;var Qe=He(D.expirationTime<=de);de=s.unstable_now(),typeof Qe=="function"?D.callback=Qe:D===u(b)&&p(b),R(de)}else p(b);D=u(b)}if(D!==null)var xo=!0;else{var ln=u(S);ln!==null&&an(U,ln.startTime-de),xo=!1}return xo}finally{D=null,C=re,E=!1}}var X=!1,K=null,J=-1,N=5,te=-1;function we(){return!(s.unstable_now()-te<N)}function Te(){if(K!==null){var ie=s.unstable_now();te=ie;var de=!0;try{de=K(!0,ie)}finally{de?_e():(X=!1,K=null)}}else X=!1}var _e;if(typeof P=="function")_e=function(){P(Te)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,sn=rn.port2;rn.port1.onmessage=Te,_e=function(){sn.postMessage(null)}}else _e=function(){H(Te,0)};function Pt(ie){K=ie,X||(X=!0,_e())}function an(ie,de){J=H(function(){ie(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ie){ie.callback=null},s.unstable_continueExecution=function(){O||E||(O=!0,Pt(Q))},s.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<ie?Math.floor(1e3/ie):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_getFirstCallbackNode=function(){return u(b)},s.unstable_next=function(ie){switch(C){case 1:case 2:case 3:var de=3;break;default:de=C}var re=C;C=de;try{return ie()}finally{C=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ie,de){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var re=C;C=ie;try{return de()}finally{C=re}},s.unstable_scheduleCallback=function(ie,de,re){var He=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?He+re:He):re=He,ie){case 1:var Qe=-1;break;case 2:Qe=250;break;case 5:Qe=1073741823;break;case 4:Qe=1e4;break;default:Qe=5e3}return Qe=re+Qe,ie={id:B++,callback:de,priorityLevel:ie,startTime:re,expirationTime:Qe,sortIndex:-1},re>He?(ie.sortIndex=re,l(S,ie),u(b)===null&&ie===u(S)&&(j?(z(J),J=-1):j=!0,an(U,re-He))):(ie.sortIndex=Qe,l(b,ie),O||E||(O=!0,Pt(Q))),ie},s.unstable_shouldYield=we,s.unstable_wrapCallback=function(ie){var de=C;return function(){var re=C;C=de;try{return ie.apply(this,arguments)}finally{C=re}}}})(Py);Ly.exports=Py;var nL=Ly.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=Iu,_n=nL;function ee(s){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)l+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oy=new Set,yl={};function zr(s,l){Qs(s,l),Qs(s+"Capture",l)}function Qs(s,l){for(yl[s]=l,s=0;s<l.length;s++)Oy.add(l[s])}var $o=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,oL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b1={},w1={};function iL(s){return hp.call(w1,s)?!0:hp.call(b1,s)?!1:oL.test(s)?w1[s]=!0:(b1[s]=!0,!1)}function rL(s,l,u,p){if(u!==null&&u.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return p?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function sL(s,l,u,p){if(l===null||typeof l>"u"||rL(s,l,u,p))return!0;if(p)return!1;if(u!==null)switch(u.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function qt(s,l,u,p,f,A,v){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=p,this.attributeNamespace=f,this.mustUseProperty=u,this.propertyName=s,this.type=l,this.sanitizeURL=A,this.removeEmptyString=v}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){Lt[s]=new qt(s,0,!1,s,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var l=s[0];Lt[l]=new qt(l,1,!1,s[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(s){Lt[s]=new qt(s,2,!1,s.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){Lt[s]=new qt(s,2,!1,s,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){Lt[s]=new qt(s,3,!1,s.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(s){Lt[s]=new qt(s,3,!0,s,null,!1,!1)});["capture","download"].forEach(function(s){Lt[s]=new qt(s,4,!1,s,null,!1,!1)});["cols","rows","size","span"].forEach(function(s){Lt[s]=new qt(s,6,!1,s,null,!1,!1)});["rowSpan","start"].forEach(function(s){Lt[s]=new qt(s,5,!1,s.toLowerCase(),null,!1,!1)});var cf=/[\-:]([a-z])/g;function df(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var l=s.replace(cf,df);Lt[l]=new qt(l,1,!1,s,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var l=s.replace(cf,df);Lt[l]=new qt(l,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(s){var l=s.replace(cf,df);Lt[l]=new qt(l,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(s){Lt[s]=new qt(s,1,!1,s.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(s){Lt[s]=new qt(s,1,!1,s.toLowerCase(),null,!0,!0)});function uf(s,l,u,p){var f=Lt.hasOwnProperty(l)?Lt[l]:null;(f!==null?f.type!==0:p||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(sL(l,u,f,p)&&(u=null),p||f===null?iL(l)&&(u===null?s.removeAttribute(l):s.setAttribute(l,""+u)):f.mustUseProperty?s[f.propertyName]=u===null?f.type===3?!1:"":u:(l=f.attributeName,p=f.attributeNamespace,u===null?s.removeAttribute(l):(f=f.type,u=f===3||f===4&&u===!0?"":""+u,p?s.setAttributeNS(p,l,u):s.setAttribute(l,u))))}var Yo=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Id=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),Ry=Symbol.for("react.provider"),jy=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),Fy=Symbol.for("react.offscreen"),A1=Symbol.iterator;function ol(s){return s===null||typeof s!="object"?null:(s=A1&&s[A1]||s["@@iterator"],typeof s=="function"?s:null)}var it=Object.assign,Fg;function ul(s){if(Fg===void 0)try{throw Error()}catch(u){var l=u.stack.trim().match(/\n( *(at )?)/);Fg=l&&l[1]||""}return`
`+Fg+s}var Vg=!1;function Hg(s,l){if(!s||Vg)return"";Vg=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(S){var p=S}Reflect.construct(s,[],l)}else{try{l.call()}catch(S){p=S}s.call(l.prototype)}else{try{throw Error()}catch(S){p=S}s()}}catch(S){if(S&&p&&typeof S.stack=="string"){for(var f=S.stack.split(`
`),A=p.stack.split(`
`),v=f.length-1,y=A.length-1;1<=v&&0<=y&&f[v]!==A[y];)y--;for(;1<=v&&0<=y;v--,y--)if(f[v]!==A[y]){if(v!==1||y!==1)do if(v--,y--,0>y||f[v]!==A[y]){var b=`
`+f[v].replace(" at new "," at ");return s.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",s.displayName)),b}while(1<=v&&0<=y);break}}}finally{Vg=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?ul(s):""}function aL(s){switch(s.tag){case 5:return ul(s.type);case 16:return ul("Lazy");case 13:return ul("Suspense");case 19:return ul("SuspenseList");case 0:case 2:case 15:return s=Hg(s.type,!1),s;case 11:return s=Hg(s.type.render,!1),s;case 1:return s=Hg(s.type,!0),s;default:return""}}function fp(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case Bs:return"Fragment";case Ms:return"Portal";case mp:return"Profiler";case hf:return"StrictMode";case gp:return"Suspense";case pp:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case jy:return(s.displayName||"Context")+".Consumer";case Ry:return(s._context.displayName||"Context")+".Provider";case mf:var l=s.render;return s=s.displayName,s||(s=l.displayName||l.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case gf:return l=s.displayName||null,l!==null?l:fp(s.type)||"Memo";case yi:l=s._payload,s=s._init;try{return fp(s(l))}catch{}}return null}function lL(s){var l=s.type;switch(s.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=l.render,s=s.displayName||s.name||"",l.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fp(l);case 8:return l===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function ji(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Vy(s){var l=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function cL(s){var l=Vy(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,l),p=""+s[l];if(!s.hasOwnProperty(l)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var f=u.get,A=u.set;return Object.defineProperty(s,l,{configurable:!0,get:function(){return f.call(this)},set:function(v){p=""+v,A.call(this,v)}}),Object.defineProperty(s,l,{enumerable:u.enumerable}),{getValue:function(){return p},setValue:function(v){p=""+v},stopTracking:function(){s._valueTracker=null,delete s[l]}}}}function Md(s){s._valueTracker||(s._valueTracker=cL(s))}function Hy(s){if(!s)return!1;var l=s._valueTracker;if(!l)return!0;var u=l.getValue(),p="";return s&&(p=Vy(s)?s.checked?"true":"false":s.value),s=p,s!==u?(l.setValue(s),!0):!1}function iu(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function kp(s,l){var u=l.checked;return it({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function C1(s,l){var u=l.defaultValue==null?"":l.defaultValue,p=l.checked!=null?l.checked:l.defaultChecked;u=ji(l.value!=null?l.value:u),s._wrapperState={initialChecked:p,initialValue:u,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Uy(s,l){l=l.checked,l!=null&&uf(s,"checked",l,!1)}function bp(s,l){Uy(s,l);var u=ji(l.value),p=l.type;if(u!=null)p==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(p==="submit"||p==="reset"){s.removeAttribute("value");return}l.hasOwnProperty("value")?wp(s,l.type,u):l.hasOwnProperty("defaultValue")&&wp(s,l.type,ji(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(s.defaultChecked=!!l.defaultChecked)}function v1(s,l,u){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var p=l.type;if(!(p!=="submit"&&p!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+s._wrapperState.initialValue,u||l===s.value||(s.value=l),s.defaultValue=l}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function wp(s,l,u){(l!=="number"||iu(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var hl=Array.isArray;function Us(s,l,u,p){if(s=s.options,l){l={};for(var f=0;f<u.length;f++)l["$"+u[f]]=!0;for(u=0;u<s.length;u++)f=l.hasOwnProperty("$"+s[u].value),s[u].selected!==f&&(s[u].selected=f),f&&p&&(s[u].defaultSelected=!0)}else{for(u=""+ji(u),l=null,f=0;f<s.length;f++){if(s[f].value===u){s[f].selected=!0,p&&(s[f].defaultSelected=!0);return}l!==null||s[f].disabled||(l=s[f])}l!==null&&(l.selected=!0)}}function Ap(s,l){if(l.dangerouslySetInnerHTML!=null)throw Error(ee(91));return it({},l,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function _1(s,l){var u=l.value;if(u==null){if(u=l.children,l=l.defaultValue,u!=null){if(l!=null)throw Error(ee(92));if(hl(u)){if(1<u.length)throw Error(ee(93));u=u[0]}l=u}l==null&&(l=""),u=l}s._wrapperState={initialValue:ji(u)}}function Gy(s,l){var u=ji(l.value),p=ji(l.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),l.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),p!=null&&(s.defaultValue=""+p)}function y1(s){var l=s.textContent;l===s._wrapperState.initialValue&&l!==""&&l!==null&&(s.value=l)}function Wy(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cp(s,l){return s==null||s==="http://www.w3.org/1999/xhtml"?Wy(l):s==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Bd,qy=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,u,p,f){MSApp.execUnsafeLocalFunction(function(){return s(l,u,p,f)})}:s}(function(s,l){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=l;else{for(Bd=Bd||document.createElement("div"),Bd.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Bd.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;l.firstChild;)s.appendChild(l.firstChild)}});function xl(s,l){if(l){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=l;return}}s.textContent=l}var pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dL=["Webkit","ms","Moz","O"];Object.keys(pl).forEach(function(s){dL.forEach(function(l){l=l+s.charAt(0).toUpperCase()+s.substring(1),pl[l]=pl[s]})});function $y(s,l,u){return l==null||typeof l=="boolean"||l===""?"":u||typeof l!="number"||l===0||pl.hasOwnProperty(s)&&pl[s]?(""+l).trim():l+"px"}function Ky(s,l){s=s.style;for(var u in l)if(l.hasOwnProperty(u)){var p=u.indexOf("--")===0,f=$y(u,l[u],p);u==="float"&&(u="cssFloat"),p?s.setProperty(u,f):s[u]=f}}var uL=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vp(s,l){if(l){if(uL[s]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(ee(137,s));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(ee(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(ee(61))}if(l.style!=null&&typeof l.style!="object")throw Error(ee(62))}}function _p(s,l){if(s.indexOf("-")===-1)return typeof l.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function pf(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var xp=null,Gs=null,Ws=null;function x1(s){if(s=Gl(s)){if(typeof xp!="function")throw Error(ee(280));var l=s.stateNode;l&&(l=Pu(l),xp(s.stateNode,s.type,l))}}function Qy(s){Gs?Ws?Ws.push(s):Ws=[s]:Gs=s}function Zy(){if(Gs){var s=Gs,l=Ws;if(Ws=Gs=null,x1(s),l)for(s=0;s<l.length;s++)x1(l[s])}}function Yy(s,l){return s(l)}function Jy(){}var Ug=!1;function Xy(s,l,u){if(Ug)return s(l,u);Ug=!0;try{return Yy(s,l,u)}finally{Ug=!1,(Gs!==null||Ws!==null)&&(Jy(),Zy())}}function El(s,l){var u=s.stateNode;if(u===null)return null;var p=Pu(u);if(p===null)return null;u=p[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(p=!p.disabled)||(s=s.type,p=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!p;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(ee(231,l,typeof u));return u}var Ep=!1;if($o)try{var il={};Object.defineProperty(il,"passive",{get:function(){Ep=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{Ep=!1}function hL(s,l,u,p,f,A,v,y,b){var S=Array.prototype.slice.call(arguments,3);try{l.apply(u,S)}catch(B){this.onError(B)}}var fl=!1,ru=null,su=!1,Dp=null,mL={onError:function(s){fl=!0,ru=s}};function gL(s,l,u,p,f,A,v,y,b){fl=!1,ru=null,hL.apply(mL,arguments)}function pL(s,l,u,p,f,A,v,y,b){if(gL.apply(this,arguments),fl){if(fl){var S=ru;fl=!1,ru=null}else throw Error(ee(198));su||(su=!0,Dp=S)}}function Or(s){var l=s,u=s;if(s.alternate)for(;l.return;)l=l.return;else{s=l;do l=s,l.flags&4098&&(u=l.return),s=l.return;while(s)}return l.tag===3?u:null}function e2(s){if(s.tag===13){var l=s.memoizedState;if(l===null&&(s=s.alternate,s!==null&&(l=s.memoizedState)),l!==null)return l.dehydrated}return null}function E1(s){if(Or(s)!==s)throw Error(ee(188))}function fL(s){var l=s.alternate;if(!l){if(l=Or(s),l===null)throw Error(ee(188));return l!==s?null:s}for(var u=s,p=l;;){var f=u.return;if(f===null)break;var A=f.alternate;if(A===null){if(p=f.return,p!==null){u=p;continue}break}if(f.child===A.child){for(A=f.child;A;){if(A===u)return E1(f),s;if(A===p)return E1(f),l;A=A.sibling}throw Error(ee(188))}if(u.return!==p.return)u=f,p=A;else{for(var v=!1,y=f.child;y;){if(y===u){v=!0,u=f,p=A;break}if(y===p){v=!0,p=f,u=A;break}y=y.sibling}if(!v){for(y=A.child;y;){if(y===u){v=!0,u=A,p=f;break}if(y===p){v=!0,p=A,u=f;break}y=y.sibling}if(!v)throw Error(ee(189))}}if(u.alternate!==p)throw Error(ee(190))}if(u.tag!==3)throw Error(ee(188));return u.stateNode.current===u?s:l}function t2(s){return s=fL(s),s!==null?n2(s):null}function n2(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var l=n2(s);if(l!==null)return l;s=s.sibling}return null}var o2=_n.unstable_scheduleCallback,D1=_n.unstable_cancelCallback,kL=_n.unstable_shouldYield,bL=_n.unstable_requestPaint,ht=_n.unstable_now,wL=_n.unstable_getCurrentPriorityLevel,ff=_n.unstable_ImmediatePriority,i2=_n.unstable_UserBlockingPriority,au=_n.unstable_NormalPriority,AL=_n.unstable_LowPriority,r2=_n.unstable_IdlePriority,Mu=null,_o=null;function CL(s){if(_o&&typeof _o.onCommitFiberRoot=="function")try{_o.onCommitFiberRoot(Mu,s,void 0,(s.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:yL,vL=Math.log,_L=Math.LN2;function yL(s){return s>>>=0,s===0?32:31-(vL(s)/_L|0)|0}var Nd=64,Ld=4194304;function ml(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function lu(s,l){var u=s.pendingLanes;if(u===0)return 0;var p=0,f=s.suspendedLanes,A=s.pingedLanes,v=u&268435455;if(v!==0){var y=v&~f;y!==0?p=ml(y):(A&=v,A!==0&&(p=ml(A)))}else v=u&~f,v!==0?p=ml(v):A!==0&&(p=ml(A));if(p===0)return 0;if(l!==0&&l!==p&&!(l&f)&&(f=p&-p,A=l&-l,f>=A||f===16&&(A&4194240)!==0))return l;if(p&4&&(p|=u&16),l=s.entangledLanes,l!==0)for(s=s.entanglements,l&=p;0<l;)u=31-Yn(l),f=1<<u,p|=s[u],l&=~f;return p}function xL(s,l){switch(s){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EL(s,l){for(var u=s.suspendedLanes,p=s.pingedLanes,f=s.expirationTimes,A=s.pendingLanes;0<A;){var v=31-Yn(A),y=1<<v,b=f[v];b===-1?(!(y&u)||y&p)&&(f[v]=xL(y,l)):b<=l&&(s.expiredLanes|=y),A&=~y}}function Sp(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function s2(){var s=Nd;return Nd<<=1,!(Nd&4194240)&&(Nd=64),s}function Gg(s){for(var l=[],u=0;31>u;u++)l.push(s);return l}function Hl(s,l,u){s.pendingLanes|=l,l!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,l=31-Yn(l),s[l]=u}function DL(s,l){var u=s.pendingLanes&~l;s.pendingLanes=l,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=l,s.mutableReadLanes&=l,s.entangledLanes&=l,l=s.entanglements;var p=s.eventTimes;for(s=s.expirationTimes;0<u;){var f=31-Yn(u),A=1<<f;l[f]=0,p[f]=-1,s[f]=-1,u&=~A}}function kf(s,l){var u=s.entangledLanes|=l;for(s=s.entanglements;u;){var p=31-Yn(u),f=1<<p;f&l|s[p]&l&&(s[p]|=l),u&=~f}}var Le=0;function a2(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var l2,bf,c2,d2,u2,Tp=!1,Pd=[],Mi=null,Bi=null,Ni=null,Dl=new Map,Sl=new Map,Ei=[],SL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function S1(s,l){switch(s){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Dl.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(l.pointerId)}}function rl(s,l,u,p,f,A){return s===null||s.nativeEvent!==A?(s={blockedOn:l,domEventName:u,eventSystemFlags:p,nativeEvent:A,targetContainers:[f]},l!==null&&(l=Gl(l),l!==null&&bf(l)),s):(s.eventSystemFlags|=p,l=s.targetContainers,f!==null&&l.indexOf(f)===-1&&l.push(f),s)}function TL(s,l,u,p,f){switch(l){case"focusin":return Mi=rl(Mi,s,l,u,p,f),!0;case"dragenter":return Bi=rl(Bi,s,l,u,p,f),!0;case"mouseover":return Ni=rl(Ni,s,l,u,p,f),!0;case"pointerover":var A=f.pointerId;return Dl.set(A,rl(Dl.get(A)||null,s,l,u,p,f)),!0;case"gotpointercapture":return A=f.pointerId,Sl.set(A,rl(Sl.get(A)||null,s,l,u,p,f)),!0}return!1}function h2(s){var l=Er(s.target);if(l!==null){var u=Or(l);if(u!==null){if(l=u.tag,l===13){if(l=e2(u),l!==null){s.blockedOn=l,u2(s.priority,function(){c2(u)});return}}else if(l===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Kd(s){if(s.blockedOn!==null)return!1;for(var l=s.targetContainers;0<l.length;){var u=Ip(s.domEventName,s.eventSystemFlags,l[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var p=new u.constructor(u.type,u);yp=p,u.target.dispatchEvent(p),yp=null}else return l=Gl(u),l!==null&&bf(l),s.blockedOn=u,!1;l.shift()}return!0}function T1(s,l,u){Kd(s)&&u.delete(l)}function IL(){Tp=!1,Mi!==null&&Kd(Mi)&&(Mi=null),Bi!==null&&Kd(Bi)&&(Bi=null),Ni!==null&&Kd(Ni)&&(Ni=null),Dl.forEach(T1),Sl.forEach(T1)}function sl(s,l){s.blockedOn===l&&(s.blockedOn=null,Tp||(Tp=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,IL)))}function Tl(s){function l(f){return sl(f,s)}if(0<Pd.length){sl(Pd[0],s);for(var u=1;u<Pd.length;u++){var p=Pd[u];p.blockedOn===s&&(p.blockedOn=null)}}for(Mi!==null&&sl(Mi,s),Bi!==null&&sl(Bi,s),Ni!==null&&sl(Ni,s),Dl.forEach(l),Sl.forEach(l),u=0;u<Ei.length;u++)p=Ei[u],p.blockedOn===s&&(p.blockedOn=null);for(;0<Ei.length&&(u=Ei[0],u.blockedOn===null);)h2(u),u.blockedOn===null&&Ei.shift()}var qs=Yo.ReactCurrentBatchConfig,cu=!0;function ML(s,l,u,p){var f=Le,A=qs.transition;qs.transition=null;try{Le=1,wf(s,l,u,p)}finally{Le=f,qs.transition=A}}function BL(s,l,u,p){var f=Le,A=qs.transition;qs.transition=null;try{Le=4,wf(s,l,u,p)}finally{Le=f,qs.transition=A}}function wf(s,l,u,p){if(cu){var f=Ip(s,l,u,p);if(f===null)ep(s,l,p,du,u),S1(s,p);else if(TL(f,s,l,u,p))p.stopPropagation();else if(S1(s,p),l&4&&-1<SL.indexOf(s)){for(;f!==null;){var A=Gl(f);if(A!==null&&l2(A),A=Ip(s,l,u,p),A===null&&ep(s,l,p,du,u),A===f)break;f=A}f!==null&&p.stopPropagation()}else ep(s,l,p,null,u)}}var du=null;function Ip(s,l,u,p){if(du=null,s=pf(p),s=Er(s),s!==null)if(l=Or(s),l===null)s=null;else if(u=l.tag,u===13){if(s=e2(l),s!==null)return s;s=null}else if(u===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;s=null}else l!==s&&(s=null);return du=s,null}function m2(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wL()){case ff:return 1;case i2:return 4;case au:case AL:return 16;case r2:return 536870912;default:return 16}default:return 16}}var Ti=null,Af=null,Qd=null;function g2(){if(Qd)return Qd;var s,l=Af,u=l.length,p,f="value"in Ti?Ti.value:Ti.textContent,A=f.length;for(s=0;s<u&&l[s]===f[s];s++);var v=u-s;for(p=1;p<=v&&l[u-p]===f[A-p];p++);return Qd=f.slice(s,1<p?1-p:void 0)}function Zd(s){var l=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&l===13&&(s=13)):s=l,s===10&&(s=13),32<=s||s===13?s:0}function zd(){return!0}function I1(){return!1}function xn(s){function l(u,p,f,A,v){this._reactName=u,this._targetInst=f,this.type=p,this.nativeEvent=A,this.target=v,this.currentTarget=null;for(var y in s)s.hasOwnProperty(y)&&(u=s[y],this[y]=u?u(A):A[y]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?zd:I1,this.isPropagationStopped=I1,this}return it(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=zd)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=zd)},persist:function(){},isPersistent:zd}),l}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=xn(oa),Ul=it({},oa,{view:0,detail:0}),NL=xn(Ul),Wg,qg,al,Bu=it({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==al&&(al&&s.type==="mousemove"?(Wg=s.screenX-al.screenX,qg=s.screenY-al.screenY):qg=Wg=0,al=s),Wg)},movementY:function(s){return"movementY"in s?s.movementY:qg}}),M1=xn(Bu),LL=it({},Bu,{dataTransfer:0}),PL=xn(LL),zL=it({},Ul,{relatedTarget:0}),$g=xn(zL),OL=it({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),RL=xn(OL),jL=it({},oa,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),FL=xn(jL),VL=it({},oa,{data:0}),B1=xn(VL),HL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WL(s){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(s):(s=GL[s])?!!l[s]:!1}function vf(){return WL}var qL=it({},Ul,{key:function(s){if(s.key){var l=HL[s.key]||s.key;if(l!=="Unidentified")return l}return s.type==="keypress"?(s=Zd(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?UL[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(s){return s.type==="keypress"?Zd(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Zd(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),$L=xn(qL),KL=it({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N1=xn(KL),QL=it({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),ZL=xn(QL),YL=it({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),JL=xn(YL),XL=it({},Bu,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),e6=xn(XL),t6=[9,13,27,32],_f=$o&&"CompositionEvent"in window,kl=null;$o&&"documentMode"in document&&(kl=document.documentMode);var n6=$o&&"TextEvent"in window&&!kl,p2=$o&&(!_f||kl&&8<kl&&11>=kl),L1=String.fromCharCode(32),P1=!1;function f2(s,l){switch(s){case"keyup":return t6.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k2(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Ns=!1;function o6(s,l){switch(s){case"compositionend":return k2(l);case"keypress":return l.which!==32?null:(P1=!0,L1);case"textInput":return s=l.data,s===L1&&P1?null:s;default:return null}}function i6(s,l){if(Ns)return s==="compositionend"||!_f&&f2(s,l)?(s=g2(),Qd=Af=Ti=null,Ns=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return p2&&l.locale!=="ko"?null:l.data;default:return null}}var r6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z1(s){var l=s&&s.nodeName&&s.nodeName.toLowerCase();return l==="input"?!!r6[s.type]:l==="textarea"}function b2(s,l,u,p){Qy(p),l=uu(l,"onChange"),0<l.length&&(u=new Cf("onChange","change",null,u,p),s.push({event:u,listeners:l}))}var bl=null,Il=null;function s6(s){T2(s,0)}function Nu(s){var l=zs(s);if(Hy(l))return s}function a6(s,l){if(s==="change")return l}var w2=!1;if($o){var Kg;if($o){var Qg="oninput"in document;if(!Qg){var O1=document.createElement("div");O1.setAttribute("oninput","return;"),Qg=typeof O1.oninput=="function"}Kg=Qg}else Kg=!1;w2=Kg&&(!document.documentMode||9<document.documentMode)}function R1(){bl&&(bl.detachEvent("onpropertychange",A2),Il=bl=null)}function A2(s){if(s.propertyName==="value"&&Nu(Il)){var l=[];b2(l,Il,s,pf(s)),Xy(s6,l)}}function l6(s,l,u){s==="focusin"?(R1(),bl=l,Il=u,bl.attachEvent("onpropertychange",A2)):s==="focusout"&&R1()}function c6(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Nu(Il)}function d6(s,l){if(s==="click")return Nu(l)}function u6(s,l){if(s==="input"||s==="change")return Nu(l)}function h6(s,l){return s===l&&(s!==0||1/s===1/l)||s!==s&&l!==l}var Xn=typeof Object.is=="function"?Object.is:h6;function Ml(s,l){if(Xn(s,l))return!0;if(typeof s!="object"||s===null||typeof l!="object"||l===null)return!1;var u=Object.keys(s),p=Object.keys(l);if(u.length!==p.length)return!1;for(p=0;p<u.length;p++){var f=u[p];if(!hp.call(l,f)||!Xn(s[f],l[f]))return!1}return!0}function j1(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function F1(s,l){var u=j1(s);s=0;for(var p;u;){if(u.nodeType===3){if(p=s+u.textContent.length,s<=l&&p>=l)return{node:u,offset:l-s};s=p}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=j1(u)}}function C2(s,l){return s&&l?s===l?!0:s&&s.nodeType===3?!1:l&&l.nodeType===3?C2(s,l.parentNode):"contains"in s?s.contains(l):s.compareDocumentPosition?!!(s.compareDocumentPosition(l)&16):!1:!1}function v2(){for(var s=window,l=iu();l instanceof s.HTMLIFrameElement;){try{var u=typeof l.contentWindow.location.href=="string"}catch{u=!1}if(u)s=l.contentWindow;else break;l=iu(s.document)}return l}function yf(s){var l=s&&s.nodeName&&s.nodeName.toLowerCase();return l&&(l==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||l==="textarea"||s.contentEditable==="true")}function m6(s){var l=v2(),u=s.focusedElem,p=s.selectionRange;if(l!==u&&u&&u.ownerDocument&&C2(u.ownerDocument.documentElement,u)){if(p!==null&&yf(u)){if(l=p.start,s=p.end,s===void 0&&(s=l),"selectionStart"in u)u.selectionStart=l,u.selectionEnd=Math.min(s,u.value.length);else if(s=(l=u.ownerDocument||document)&&l.defaultView||window,s.getSelection){s=s.getSelection();var f=u.textContent.length,A=Math.min(p.start,f);p=p.end===void 0?A:Math.min(p.end,f),!s.extend&&A>p&&(f=p,p=A,A=f),f=F1(u,A);var v=F1(u,p);f&&v&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==v.node||s.focusOffset!==v.offset)&&(l=l.createRange(),l.setStart(f.node,f.offset),s.removeAllRanges(),A>p?(s.addRange(l),s.extend(v.node,v.offset)):(l.setEnd(v.node,v.offset),s.addRange(l)))}}for(l=[],s=u;s=s.parentNode;)s.nodeType===1&&l.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<l.length;u++)s=l[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var g6=$o&&"documentMode"in document&&11>=document.documentMode,Ls=null,Mp=null,wl=null,Bp=!1;function V1(s,l,u){var p=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Bp||Ls==null||Ls!==iu(p)||(p=Ls,"selectionStart"in p&&yf(p)?p={start:p.selectionStart,end:p.selectionEnd}:(p=(p.ownerDocument&&p.ownerDocument.defaultView||window).getSelection(),p={anchorNode:p.anchorNode,anchorOffset:p.anchorOffset,focusNode:p.focusNode,focusOffset:p.focusOffset}),wl&&Ml(wl,p)||(wl=p,p=uu(Mp,"onSelect"),0<p.length&&(l=new Cf("onSelect","select",null,l,u),s.push({event:l,listeners:p}),l.target=Ls)))}function Od(s,l){var u={};return u[s.toLowerCase()]=l.toLowerCase(),u["Webkit"+s]="webkit"+l,u["Moz"+s]="moz"+l,u}var Ps={animationend:Od("Animation","AnimationEnd"),animationiteration:Od("Animation","AnimationIteration"),animationstart:Od("Animation","AnimationStart"),transitionend:Od("Transition","TransitionEnd")},Zg={},_2={};$o&&(_2=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Lu(s){if(Zg[s])return Zg[s];if(!Ps[s])return s;var l=Ps[s],u;for(u in l)if(l.hasOwnProperty(u)&&u in _2)return Zg[s]=l[u];return s}var y2=Lu("animationend"),x2=Lu("animationiteration"),E2=Lu("animationstart"),D2=Lu("transitionend"),S2=new Map,H1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(s,l){S2.set(s,l),zr(l,[s])}for(var Yg=0;Yg<H1.length;Yg++){var Jg=H1[Yg],p6=Jg.toLowerCase(),f6=Jg[0].toUpperCase()+Jg.slice(1);Vi(p6,"on"+f6)}Vi(y2,"onAnimationEnd");Vi(x2,"onAnimationIteration");Vi(E2,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(D2,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k6=new Set("cancel close invalid load scroll toggle".split(" ").concat(gl));function U1(s,l,u){var p=s.type||"unknown-event";s.currentTarget=u,pL(p,l,void 0,s),s.currentTarget=null}function T2(s,l){l=(l&4)!==0;for(var u=0;u<s.length;u++){var p=s[u],f=p.event;p=p.listeners;e:{var A=void 0;if(l)for(var v=p.length-1;0<=v;v--){var y=p[v],b=y.instance,S=y.currentTarget;if(y=y.listener,b!==A&&f.isPropagationStopped())break e;U1(f,y,S),A=b}else for(v=0;v<p.length;v++){if(y=p[v],b=y.instance,S=y.currentTarget,y=y.listener,b!==A&&f.isPropagationStopped())break e;U1(f,y,S),A=b}}}if(su)throw s=Dp,su=!1,Dp=null,s}function $e(s,l){var u=l[Op];u===void 0&&(u=l[Op]=new Set);var p=s+"__bubble";u.has(p)||(I2(l,s,2,!1),u.add(p))}function Xg(s,l,u){var p=0;l&&(p|=4),I2(u,s,p,l)}var Rd="_reactListening"+Math.random().toString(36).slice(2);function Bl(s){if(!s[Rd]){s[Rd]=!0,Oy.forEach(function(u){u!=="selectionchange"&&(k6.has(u)||Xg(u,!1,s),Xg(u,!0,s))});var l=s.nodeType===9?s:s.ownerDocument;l===null||l[Rd]||(l[Rd]=!0,Xg("selectionchange",!1,l))}}function I2(s,l,u,p){switch(m2(l)){case 1:var f=ML;break;case 4:f=BL;break;default:f=wf}u=f.bind(null,l,u,s),f=void 0,!Ep||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(f=!0),p?f!==void 0?s.addEventListener(l,u,{capture:!0,passive:f}):s.addEventListener(l,u,!0):f!==void 0?s.addEventListener(l,u,{passive:f}):s.addEventListener(l,u,!1)}function ep(s,l,u,p,f){var A=p;if(!(l&1)&&!(l&2)&&p!==null)e:for(;;){if(p===null)return;var v=p.tag;if(v===3||v===4){var y=p.stateNode.containerInfo;if(y===f||y.nodeType===8&&y.parentNode===f)break;if(v===4)for(v=p.return;v!==null;){var b=v.tag;if((b===3||b===4)&&(b=v.stateNode.containerInfo,b===f||b.nodeType===8&&b.parentNode===f))return;v=v.return}for(;y!==null;){if(v=Er(y),v===null)return;if(b=v.tag,b===5||b===6){p=A=v;continue e}y=y.parentNode}}p=p.return}Xy(function(){var S=A,B=pf(u),D=[];e:{var C=S2.get(s);if(C!==void 0){var E=Cf,O=s;switch(s){case"keypress":if(Zd(u)===0)break e;case"keydown":case"keyup":E=$L;break;case"focusin":O="focus",E=$g;break;case"focusout":O="blur",E=$g;break;case"beforeblur":case"afterblur":E=$g;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=M1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=PL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=ZL;break;case y2:case x2:case E2:E=RL;break;case D2:E=JL;break;case"scroll":E=NL;break;case"wheel":E=e6;break;case"copy":case"cut":case"paste":E=FL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=N1}var j=(l&4)!==0,H=!j&&s==="scroll",z=j?C!==null?C+"Capture":null:C;j=[];for(var P=S,R;P!==null;){R=P;var U=R.stateNode;if(R.tag===5&&U!==null&&(R=U,z!==null&&(U=El(P,z),U!=null&&j.push(Nl(P,U,R)))),H)break;P=P.return}0<j.length&&(C=new E(C,O,null,u,B),D.push({event:C,listeners:j}))}}if(!(l&7)){e:{if(C=s==="mouseover"||s==="pointerover",E=s==="mouseout"||s==="pointerout",C&&u!==yp&&(O=u.relatedTarget||u.fromElement)&&(Er(O)||O[Ko]))break e;if((E||C)&&(C=B.window===B?B:(C=B.ownerDocument)?C.defaultView||C.parentWindow:window,E?(O=u.relatedTarget||u.toElement,E=S,O=O?Er(O):null,O!==null&&(H=Or(O),O!==H||O.tag!==5&&O.tag!==6)&&(O=null)):(E=null,O=S),E!==O)){if(j=M1,U="onMouseLeave",z="onMouseEnter",P="mouse",(s==="pointerout"||s==="pointerover")&&(j=N1,U="onPointerLeave",z="onPointerEnter",P="pointer"),H=E==null?C:zs(E),R=O==null?C:zs(O),C=new j(U,P+"leave",E,u,B),C.target=H,C.relatedTarget=R,U=null,Er(B)===S&&(j=new j(z,P+"enter",O,u,B),j.target=R,j.relatedTarget=H,U=j),H=U,E&&O)t:{for(j=E,z=O,P=0,R=j;R;R=Is(R))P++;for(R=0,U=z;U;U=Is(U))R++;for(;0<P-R;)j=Is(j),P--;for(;0<R-P;)z=Is(z),R--;for(;P--;){if(j===z||z!==null&&j===z.alternate)break t;j=Is(j),z=Is(z)}j=null}else j=null;E!==null&&G1(D,C,E,j,!1),O!==null&&H!==null&&G1(D,H,O,j,!0)}}e:{if(C=S?zs(S):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var Q=a6;else if(z1(C))if(w2)Q=u6;else{Q=c6;var X=l6}else(E=C.nodeName)&&E.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(Q=d6);if(Q&&(Q=Q(s,S))){b2(D,Q,u,B);break e}X&&X(s,C,S),s==="focusout"&&(X=C._wrapperState)&&X.controlled&&C.type==="number"&&wp(C,"number",C.value)}switch(X=S?zs(S):window,s){case"focusin":(z1(X)||X.contentEditable==="true")&&(Ls=X,Mp=S,wl=null);break;case"focusout":wl=Mp=Ls=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,V1(D,u,B);break;case"selectionchange":if(g6)break;case"keydown":case"keyup":V1(D,u,B)}var K;if(_f)e:{switch(s){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Ns?f2(s,u)&&(J="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(J="onCompositionStart");J&&(p2&&u.locale!=="ko"&&(Ns||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ns&&(K=g2()):(Ti=B,Af="value"in Ti?Ti.value:Ti.textContent,Ns=!0)),X=uu(S,J),0<X.length&&(J=new B1(J,s,null,u,B),D.push({event:J,listeners:X}),K?J.data=K:(K=k2(u),K!==null&&(J.data=K)))),(K=n6?o6(s,u):i6(s,u))&&(S=uu(S,"onBeforeInput"),0<S.length&&(B=new B1("onBeforeInput","beforeinput",null,u,B),D.push({event:B,listeners:S}),B.data=K))}T2(D,l)})}function Nl(s,l,u){return{instance:s,listener:l,currentTarget:u}}function uu(s,l){for(var u=l+"Capture",p=[];s!==null;){var f=s,A=f.stateNode;f.tag===5&&A!==null&&(f=A,A=El(s,u),A!=null&&p.unshift(Nl(s,A,f)),A=El(s,l),A!=null&&p.push(Nl(s,A,f))),s=s.return}return p}function Is(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function G1(s,l,u,p,f){for(var A=l._reactName,v=[];u!==null&&u!==p;){var y=u,b=y.alternate,S=y.stateNode;if(b!==null&&b===p)break;y.tag===5&&S!==null&&(y=S,f?(b=El(u,A),b!=null&&v.unshift(Nl(u,b,y))):f||(b=El(u,A),b!=null&&v.push(Nl(u,b,y)))),u=u.return}v.length!==0&&s.push({event:l,listeners:v})}var b6=/\r\n?/g,w6=/\u0000|\uFFFD/g;function W1(s){return(typeof s=="string"?s:""+s).replace(b6,`
`).replace(w6,"")}function jd(s,l,u){if(l=W1(l),W1(s)!==l&&u)throw Error(ee(425))}function hu(){}var Np=null,Lp=null;function Pp(s,l){return s==="textarea"||s==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var zp=typeof setTimeout=="function"?setTimeout:void 0,A6=typeof clearTimeout=="function"?clearTimeout:void 0,q1=typeof Promise=="function"?Promise:void 0,C6=typeof queueMicrotask=="function"?queueMicrotask:typeof q1<"u"?function(s){return q1.resolve(null).then(s).catch(v6)}:zp;function v6(s){setTimeout(function(){throw s})}function tp(s,l){var u=l,p=0;do{var f=u.nextSibling;if(s.removeChild(u),f&&f.nodeType===8)if(u=f.data,u==="/$"){if(p===0){s.removeChild(f),Tl(l);return}p--}else u!=="$"&&u!=="$?"&&u!=="$!"||p++;u=f}while(u);Tl(l)}function Li(s){for(;s!=null;s=s.nextSibling){var l=s.nodeType;if(l===1||l===3)break;if(l===8){if(l=s.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return s}function $1(s){s=s.previousSibling;for(var l=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(l===0)return s;l--}else u==="/$"&&l++}s=s.previousSibling}return null}var ia=Math.random().toString(36).slice(2),vo="__reactFiber$"+ia,Ll="__reactProps$"+ia,Ko="__reactContainer$"+ia,Op="__reactEvents$"+ia,_6="__reactListeners$"+ia,y6="__reactHandles$"+ia;function Er(s){var l=s[vo];if(l)return l;for(var u=s.parentNode;u;){if(l=u[Ko]||u[vo]){if(u=l.alternate,l.child!==null||u!==null&&u.child!==null)for(s=$1(s);s!==null;){if(u=s[vo])return u;s=$1(s)}return l}s=u,u=s.parentNode}return null}function Gl(s){return s=s[vo]||s[Ko],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function zs(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(ee(33))}function Pu(s){return s[Ll]||null}var Rp=[],Os=-1;function Hi(s){return{current:s}}function Ke(s){0>Os||(s.current=Rp[Os],Rp[Os]=null,Os--)}function Ge(s,l){Os++,Rp[Os]=s.current,s.current=l}var Fi={},Ht=Hi(Fi),tn=Hi(!1),Mr=Fi;function Zs(s,l){var u=s.type.contextTypes;if(!u)return Fi;var p=s.stateNode;if(p&&p.__reactInternalMemoizedUnmaskedChildContext===l)return p.__reactInternalMemoizedMaskedChildContext;var f={},A;for(A in u)f[A]=l[A];return p&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=l,s.__reactInternalMemoizedMaskedChildContext=f),f}function nn(s){return s=s.childContextTypes,s!=null}function mu(){Ke(tn),Ke(Ht)}function K1(s,l,u){if(Ht.current!==Fi)throw Error(ee(168));Ge(Ht,l),Ge(tn,u)}function M2(s,l,u){var p=s.stateNode;if(l=l.childContextTypes,typeof p.getChildContext!="function")return u;p=p.getChildContext();for(var f in p)if(!(f in l))throw Error(ee(108,lL(s)||"Unknown",f));return it({},u,p)}function gu(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Fi,Mr=Ht.current,Ge(Ht,s),Ge(tn,tn.current),!0}function Q1(s,l,u){var p=s.stateNode;if(!p)throw Error(ee(169));u?(s=M2(s,l,Mr),p.__reactInternalMemoizedMergedChildContext=s,Ke(tn),Ke(Ht),Ge(Ht,s)):Ke(tn),Ge(tn,u)}var Uo=null,zu=!1,np=!1;function B2(s){Uo===null?Uo=[s]:Uo.push(s)}function x6(s){zu=!0,B2(s)}function Ui(){if(!np&&Uo!==null){np=!0;var s=0,l=Le;try{var u=Uo;for(Le=1;s<u.length;s++){var p=u[s];do p=p(!0);while(p!==null)}Uo=null,zu=!1}catch(f){throw Uo!==null&&(Uo=Uo.slice(s+1)),o2(ff,Ui),f}finally{Le=l,np=!1}}return null}var Rs=[],js=0,pu=null,fu=0,Nn=[],Ln=0,Br=null,Go=1,Wo="";function yr(s,l){Rs[js++]=fu,Rs[js++]=pu,pu=s,fu=l}function N2(s,l,u){Nn[Ln++]=Go,Nn[Ln++]=Wo,Nn[Ln++]=Br,Br=s;var p=Go;s=Wo;var f=32-Yn(p)-1;p&=~(1<<f),u+=1;var A=32-Yn(l)+f;if(30<A){var v=f-f%5;A=(p&(1<<v)-1).toString(32),p>>=v,f-=v,Go=1<<32-Yn(l)+f|u<<f|p,Wo=A+s}else Go=1<<A|u<<f|p,Wo=s}function xf(s){s.return!==null&&(yr(s,1),N2(s,1,0))}function Ef(s){for(;s===pu;)pu=Rs[--js],Rs[js]=null,fu=Rs[--js],Rs[js]=null;for(;s===Br;)Br=Nn[--Ln],Nn[Ln]=null,Wo=Nn[--Ln],Nn[Ln]=null,Go=Nn[--Ln],Nn[Ln]=null}var vn=null,Cn=null,Ye=!1,Zn=null;function L2(s,l){var u=Pn(5,null,null,0);u.elementType="DELETED",u.stateNode=l,u.return=s,l=s.deletions,l===null?(s.deletions=[u],s.flags|=16):l.push(u)}function Z1(s,l){switch(s.tag){case 5:var u=s.type;return l=l.nodeType!==1||u.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(s.stateNode=l,vn=s,Cn=Li(l.firstChild),!0):!1;case 6:return l=s.pendingProps===""||l.nodeType!==3?null:l,l!==null?(s.stateNode=l,vn=s,Cn=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(u=Br!==null?{id:Go,overflow:Wo}:null,s.memoizedState={dehydrated:l,treeContext:u,retryLane:1073741824},u=Pn(18,null,null,0),u.stateNode=l,u.return=s,s.child=u,vn=s,Cn=null,!0):!1;default:return!1}}function jp(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Fp(s){if(Ye){var l=Cn;if(l){var u=l;if(!Z1(s,l)){if(jp(s))throw Error(ee(418));l=Li(u.nextSibling);var p=vn;l&&Z1(s,l)?L2(p,u):(s.flags=s.flags&-4097|2,Ye=!1,vn=s)}}else{if(jp(s))throw Error(ee(418));s.flags=s.flags&-4097|2,Ye=!1,vn=s}}}function Y1(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;vn=s}function Fd(s){if(s!==vn)return!1;if(!Ye)return Y1(s),Ye=!0,!1;var l;if((l=s.tag!==3)&&!(l=s.tag!==5)&&(l=s.type,l=l!=="head"&&l!=="body"&&!Pp(s.type,s.memoizedProps)),l&&(l=Cn)){if(jp(s))throw P2(),Error(ee(418));for(;l;)L2(s,l),l=Li(l.nextSibling)}if(Y1(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));e:{for(s=s.nextSibling,l=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(l===0){Cn=Li(s.nextSibling);break e}l--}else u!=="$"&&u!=="$!"&&u!=="$?"||l++}s=s.nextSibling}Cn=null}}else Cn=vn?Li(s.stateNode.nextSibling):null;return!0}function P2(){for(var s=Cn;s;)s=Li(s.nextSibling)}function Ys(){Cn=vn=null,Ye=!1}function Df(s){Zn===null?Zn=[s]:Zn.push(s)}var E6=Yo.ReactCurrentBatchConfig;function Kn(s,l){if(s&&s.defaultProps){l=it({},l),s=s.defaultProps;for(var u in s)l[u]===void 0&&(l[u]=s[u]);return l}return l}var ku=Hi(null),bu=null,Fs=null,Sf=null;function Tf(){Sf=Fs=bu=null}function If(s){var l=ku.current;Ke(ku),s._currentValue=l}function Vp(s,l,u){for(;s!==null;){var p=s.alternate;if((s.childLanes&l)!==l?(s.childLanes|=l,p!==null&&(p.childLanes|=l)):p!==null&&(p.childLanes&l)!==l&&(p.childLanes|=l),s===u)break;s=s.return}}function $s(s,l){bu=s,Sf=Fs=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&l&&(en=!0),s.firstContext=null)}function On(s){var l=s._currentValue;if(Sf!==s)if(s={context:s,memoizedValue:l,next:null},Fs===null){if(bu===null)throw Error(ee(308));Fs=s,bu.dependencies={lanes:0,firstContext:s}}else Fs=Fs.next=s;return l}var Dr=null;function Mf(s){Dr===null?Dr=[s]:Dr.push(s)}function z2(s,l,u,p){var f=l.interleaved;return f===null?(u.next=u,Mf(l)):(u.next=f.next,f.next=u),l.interleaved=u,Qo(s,p)}function Qo(s,l){s.lanes|=l;var u=s.alternate;for(u!==null&&(u.lanes|=l),u=s,s=s.return;s!==null;)s.childLanes|=l,u=s.alternate,u!==null&&(u.childLanes|=l),u=s,s=s.return;return u.tag===3?u.stateNode:null}var xi=!1;function Bf(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O2(s,l){s=s.updateQueue,l.updateQueue===s&&(l.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function qo(s,l){return{eventTime:s,lane:l,tag:0,payload:null,callback:null,next:null}}function Pi(s,l,u){var p=s.updateQueue;if(p===null)return null;if(p=p.shared,Ee&2){var f=p.pending;return f===null?l.next=l:(l.next=f.next,f.next=l),p.pending=l,Qo(s,u)}return f=p.interleaved,f===null?(l.next=l,Mf(p)):(l.next=f.next,f.next=l),p.interleaved=l,Qo(s,u)}function Yd(s,l,u){if(l=l.updateQueue,l!==null&&(l=l.shared,(u&4194240)!==0)){var p=l.lanes;p&=s.pendingLanes,u|=p,l.lanes=u,kf(s,u)}}function J1(s,l){var u=s.updateQueue,p=s.alternate;if(p!==null&&(p=p.updateQueue,u===p)){var f=null,A=null;if(u=u.firstBaseUpdate,u!==null){do{var v={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};A===null?f=A=v:A=A.next=v,u=u.next}while(u!==null);A===null?f=A=l:A=A.next=l}else f=A=l;u={baseState:p.baseState,firstBaseUpdate:f,lastBaseUpdate:A,shared:p.shared,effects:p.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=l}function wu(s,l,u,p){var f=s.updateQueue;xi=!1;var A=f.firstBaseUpdate,v=f.lastBaseUpdate,y=f.shared.pending;if(y!==null){f.shared.pending=null;var b=y,S=b.next;b.next=null,v===null?A=S:v.next=S,v=b;var B=s.alternate;B!==null&&(B=B.updateQueue,y=B.lastBaseUpdate,y!==v&&(y===null?B.firstBaseUpdate=S:y.next=S,B.lastBaseUpdate=b))}if(A!==null){var D=f.baseState;v=0,B=S=b=null,y=A;do{var C=y.lane,E=y.eventTime;if((p&C)===C){B!==null&&(B=B.next={eventTime:E,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var O=s,j=y;switch(C=l,E=u,j.tag){case 1:if(O=j.payload,typeof O=="function"){D=O.call(E,D,C);break e}D=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=j.payload,C=typeof O=="function"?O.call(E,D,C):O,C==null)break e;D=it({},D,C);break e;case 2:xi=!0}}y.callback!==null&&y.lane!==0&&(s.flags|=64,C=f.effects,C===null?f.effects=[y]:C.push(y))}else E={eventTime:E,lane:C,tag:y.tag,payload:y.payload,callback:y.callback,next:null},B===null?(S=B=E,b=D):B=B.next=E,v|=C;if(y=y.next,y===null){if(y=f.shared.pending,y===null)break;C=y,y=C.next,C.next=null,f.lastBaseUpdate=C,f.shared.pending=null}}while(1);if(B===null&&(b=D),f.baseState=b,f.firstBaseUpdate=S,f.lastBaseUpdate=B,l=f.shared.interleaved,l!==null){f=l;do v|=f.lane,f=f.next;while(f!==l)}else A===null&&(f.shared.lanes=0);Lr|=v,s.lanes=v,s.memoizedState=D}}function X1(s,l,u){if(s=l.effects,l.effects=null,s!==null)for(l=0;l<s.length;l++){var p=s[l],f=p.callback;if(f!==null){if(p.callback=null,p=u,typeof f!="function")throw Error(ee(191,f));f.call(p)}}}var R2=new zy.Component().refs;function Hp(s,l,u,p){l=s.memoizedState,u=u(p,l),u=u==null?l:it({},l,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Ou={isMounted:function(s){return(s=s._reactInternals)?Or(s)===s:!1},enqueueSetState:function(s,l,u){s=s._reactInternals;var p=Gt(),f=Oi(s),A=qo(p,f);A.payload=l,u!=null&&(A.callback=u),l=Pi(s,A,f),l!==null&&(Jn(l,s,f,p),Yd(l,s,f))},enqueueReplaceState:function(s,l,u){s=s._reactInternals;var p=Gt(),f=Oi(s),A=qo(p,f);A.tag=1,A.payload=l,u!=null&&(A.callback=u),l=Pi(s,A,f),l!==null&&(Jn(l,s,f,p),Yd(l,s,f))},enqueueForceUpdate:function(s,l){s=s._reactInternals;var u=Gt(),p=Oi(s),f=qo(u,p);f.tag=2,l!=null&&(f.callback=l),l=Pi(s,f,p),l!==null&&(Jn(l,s,p,u),Yd(l,s,p))}};function ey(s,l,u,p,f,A,v){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(p,A,v):l.prototype&&l.prototype.isPureReactComponent?!Ml(u,p)||!Ml(f,A):!0}function j2(s,l,u){var p=!1,f=Fi,A=l.contextType;return typeof A=="object"&&A!==null?A=On(A):(f=nn(l)?Mr:Ht.current,p=l.contextTypes,A=(p=p!=null)?Zs(s,f):Fi),l=new l(u,A),s.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ou,s.stateNode=l,l._reactInternals=s,p&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=f,s.__reactInternalMemoizedMaskedChildContext=A),l}function ty(s,l,u,p){s=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(u,p),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(u,p),l.state!==s&&Ou.enqueueReplaceState(l,l.state,null)}function Up(s,l,u,p){var f=s.stateNode;f.props=u,f.state=s.memoizedState,f.refs=R2,Bf(s);var A=l.contextType;typeof A=="object"&&A!==null?f.context=On(A):(A=nn(l)?Mr:Ht.current,f.context=Zs(s,A)),f.state=s.memoizedState,A=l.getDerivedStateFromProps,typeof A=="function"&&(Hp(s,l,A,u),f.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(l=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),l!==f.state&&Ou.enqueueReplaceState(f,f.state,null),wu(s,u,f,p),f.state=s.memoizedState),typeof f.componentDidMount=="function"&&(s.flags|=4194308)}function ll(s,l,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(ee(309));var p=u.stateNode}if(!p)throw Error(ee(147,s));var f=p,A=""+s;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===A?l.ref:(l=function(v){var y=f.refs;y===R2&&(y=f.refs={}),v===null?delete y[A]:y[A]=v},l._stringRef=A,l)}if(typeof s!="string")throw Error(ee(284));if(!u._owner)throw Error(ee(290,s))}return s}function Vd(s,l){throw s=Object.prototype.toString.call(l),Error(ee(31,s==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":s))}function ny(s){var l=s._init;return l(s._payload)}function F2(s){function l(z,P){if(s){var R=z.deletions;R===null?(z.deletions=[P],z.flags|=16):R.push(P)}}function u(z,P){if(!s)return null;for(;P!==null;)l(z,P),P=P.sibling;return null}function p(z,P){for(z=new Map;P!==null;)P.key!==null?z.set(P.key,P):z.set(P.index,P),P=P.sibling;return z}function f(z,P){return z=Ri(z,P),z.index=0,z.sibling=null,z}function A(z,P,R){return z.index=R,s?(R=z.alternate,R!==null?(R=R.index,R<P?(z.flags|=2,P):R):(z.flags|=2,P)):(z.flags|=1048576,P)}function v(z){return s&&z.alternate===null&&(z.flags|=2),z}function y(z,P,R,U){return P===null||P.tag!==6?(P=cp(R,z.mode,U),P.return=z,P):(P=f(P,R),P.return=z,P)}function b(z,P,R,U){var Q=R.type;return Q===Bs?B(z,P,R.props.children,U,R.key):P!==null&&(P.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===yi&&ny(Q)===P.type)?(U=f(P,R.props),U.ref=ll(z,P,R),U.return=z,U):(U=ou(R.type,R.key,R.props,null,z.mode,U),U.ref=ll(z,P,R),U.return=z,U)}function S(z,P,R,U){return P===null||P.tag!==4||P.stateNode.containerInfo!==R.containerInfo||P.stateNode.implementation!==R.implementation?(P=dp(R,z.mode,U),P.return=z,P):(P=f(P,R.children||[]),P.return=z,P)}function B(z,P,R,U,Q){return P===null||P.tag!==7?(P=Ir(R,z.mode,U,Q),P.return=z,P):(P=f(P,R),P.return=z,P)}function D(z,P,R){if(typeof P=="string"&&P!==""||typeof P=="number")return P=cp(""+P,z.mode,R),P.return=z,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Id:return R=ou(P.type,P.key,P.props,null,z.mode,R),R.ref=ll(z,null,P),R.return=z,R;case Ms:return P=dp(P,z.mode,R),P.return=z,P;case yi:var U=P._init;return D(z,U(P._payload),R)}if(hl(P)||ol(P))return P=Ir(P,z.mode,R,null),P.return=z,P;Vd(z,P)}return null}function C(z,P,R,U){var Q=P!==null?P.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return Q!==null?null:y(z,P,""+R,U);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Id:return R.key===Q?b(z,P,R,U):null;case Ms:return R.key===Q?S(z,P,R,U):null;case yi:return Q=R._init,C(z,P,Q(R._payload),U)}if(hl(R)||ol(R))return Q!==null?null:B(z,P,R,U,null);Vd(z,R)}return null}function E(z,P,R,U,Q){if(typeof U=="string"&&U!==""||typeof U=="number")return z=z.get(R)||null,y(P,z,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Id:return z=z.get(U.key===null?R:U.key)||null,b(P,z,U,Q);case Ms:return z=z.get(U.key===null?R:U.key)||null,S(P,z,U,Q);case yi:var X=U._init;return E(z,P,R,X(U._payload),Q)}if(hl(U)||ol(U))return z=z.get(R)||null,B(P,z,U,Q,null);Vd(P,U)}return null}function O(z,P,R,U){for(var Q=null,X=null,K=P,J=P=0,N=null;K!==null&&J<R.length;J++){K.index>J?(N=K,K=null):N=K.sibling;var te=C(z,K,R[J],U);if(te===null){K===null&&(K=N);break}s&&K&&te.alternate===null&&l(z,K),P=A(te,P,J),X===null?Q=te:X.sibling=te,X=te,K=N}if(J===R.length)return u(z,K),Ye&&yr(z,J),Q;if(K===null){for(;J<R.length;J++)K=D(z,R[J],U),K!==null&&(P=A(K,P,J),X===null?Q=K:X.sibling=K,X=K);return Ye&&yr(z,J),Q}for(K=p(z,K);J<R.length;J++)N=E(K,z,J,R[J],U),N!==null&&(s&&N.alternate!==null&&K.delete(N.key===null?J:N.key),P=A(N,P,J),X===null?Q=N:X.sibling=N,X=N);return s&&K.forEach(function(we){return l(z,we)}),Ye&&yr(z,J),Q}function j(z,P,R,U){var Q=ol(R);if(typeof Q!="function")throw Error(ee(150));if(R=Q.call(R),R==null)throw Error(ee(151));for(var X=Q=null,K=P,J=P=0,N=null,te=R.next();K!==null&&!te.done;J++,te=R.next()){K.index>J?(N=K,K=null):N=K.sibling;var we=C(z,K,te.value,U);if(we===null){K===null&&(K=N);break}s&&K&&we.alternate===null&&l(z,K),P=A(we,P,J),X===null?Q=we:X.sibling=we,X=we,K=N}if(te.done)return u(z,K),Ye&&yr(z,J),Q;if(K===null){for(;!te.done;J++,te=R.next())te=D(z,te.value,U),te!==null&&(P=A(te,P,J),X===null?Q=te:X.sibling=te,X=te);return Ye&&yr(z,J),Q}for(K=p(z,K);!te.done;J++,te=R.next())te=E(K,z,J,te.value,U),te!==null&&(s&&te.alternate!==null&&K.delete(te.key===null?J:te.key),P=A(te,P,J),X===null?Q=te:X.sibling=te,X=te);return s&&K.forEach(function(Te){return l(z,Te)}),Ye&&yr(z,J),Q}function H(z,P,R,U){if(typeof R=="object"&&R!==null&&R.type===Bs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Id:e:{for(var Q=R.key,X=P;X!==null;){if(X.key===Q){if(Q=R.type,Q===Bs){if(X.tag===7){u(z,X.sibling),P=f(X,R.props.children),P.return=z,z=P;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===yi&&ny(Q)===X.type){u(z,X.sibling),P=f(X,R.props),P.ref=ll(z,X,R),P.return=z,z=P;break e}u(z,X);break}else l(z,X);X=X.sibling}R.type===Bs?(P=Ir(R.props.children,z.mode,U,R.key),P.return=z,z=P):(U=ou(R.type,R.key,R.props,null,z.mode,U),U.ref=ll(z,P,R),U.return=z,z=U)}return v(z);case Ms:e:{for(X=R.key;P!==null;){if(P.key===X)if(P.tag===4&&P.stateNode.containerInfo===R.containerInfo&&P.stateNode.implementation===R.implementation){u(z,P.sibling),P=f(P,R.children||[]),P.return=z,z=P;break e}else{u(z,P);break}else l(z,P);P=P.sibling}P=dp(R,z.mode,U),P.return=z,z=P}return v(z);case yi:return X=R._init,H(z,P,X(R._payload),U)}if(hl(R))return O(z,P,R,U);if(ol(R))return j(z,P,R,U);Vd(z,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,P!==null&&P.tag===6?(u(z,P.sibling),P=f(P,R),P.return=z,z=P):(u(z,P),P=cp(R,z.mode,U),P.return=z,z=P),v(z)):u(z,P)}return H}var Js=F2(!0),V2=F2(!1),Wl={},yo=Hi(Wl),Pl=Hi(Wl),zl=Hi(Wl);function Sr(s){if(s===Wl)throw Error(ee(174));return s}function Nf(s,l){switch(Ge(zl,l),Ge(Pl,s),Ge(yo,Wl),s=l.nodeType,s){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Cp(null,"");break;default:s=s===8?l.parentNode:l,l=s.namespaceURI||null,s=s.tagName,l=Cp(l,s)}Ke(yo),Ge(yo,l)}function Xs(){Ke(yo),Ke(Pl),Ke(zl)}function H2(s){Sr(zl.current);var l=Sr(yo.current),u=Cp(l,s.type);l!==u&&(Ge(Pl,s),Ge(yo,u))}function Lf(s){Pl.current===s&&(Ke(yo),Ke(Pl))}var nt=Hi(0);function Au(s){for(var l=s;l!==null;){if(l.tag===13){var u=l.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var op=[];function Pf(){for(var s=0;s<op.length;s++)op[s]._workInProgressVersionPrimary=null;op.length=0}var Jd=Yo.ReactCurrentDispatcher,ip=Yo.ReactCurrentBatchConfig,Nr=0,ot=null,wt=null,yt=null,Cu=!1,Al=!1,Ol=0,D6=0;function jt(){throw Error(ee(321))}function zf(s,l){if(l===null)return!1;for(var u=0;u<l.length&&u<s.length;u++)if(!Xn(s[u],l[u]))return!1;return!0}function Of(s,l,u,p,f,A){if(Nr=A,ot=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Jd.current=s===null||s.memoizedState===null?M6:B6,s=u(p,f),Al){A=0;do{if(Al=!1,Ol=0,25<=A)throw Error(ee(301));A+=1,yt=wt=null,l.updateQueue=null,Jd.current=N6,s=u(p,f)}while(Al)}if(Jd.current=vu,l=wt!==null&&wt.next!==null,Nr=0,yt=wt=ot=null,Cu=!1,l)throw Error(ee(300));return s}function Rf(){var s=Ol!==0;return Ol=0,s}function Co(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?ot.memoizedState=yt=s:yt=yt.next=s,yt}function Rn(){if(wt===null){var s=ot.alternate;s=s!==null?s.memoizedState:null}else s=wt.next;var l=yt===null?ot.memoizedState:yt.next;if(l!==null)yt=l,wt=s;else{if(s===null)throw Error(ee(310));wt=s,s={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},yt===null?ot.memoizedState=yt=s:yt=yt.next=s}return yt}function Rl(s,l){return typeof l=="function"?l(s):l}function rp(s){var l=Rn(),u=l.queue;if(u===null)throw Error(ee(311));u.lastRenderedReducer=s;var p=wt,f=p.baseQueue,A=u.pending;if(A!==null){if(f!==null){var v=f.next;f.next=A.next,A.next=v}p.baseQueue=f=A,u.pending=null}if(f!==null){A=f.next,p=p.baseState;var y=v=null,b=null,S=A;do{var B=S.lane;if((Nr&B)===B)b!==null&&(b=b.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),p=S.hasEagerState?S.eagerState:s(p,S.action);else{var D={lane:B,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};b===null?(y=b=D,v=p):b=b.next=D,ot.lanes|=B,Lr|=B}S=S.next}while(S!==null&&S!==A);b===null?v=p:b.next=y,Xn(p,l.memoizedState)||(en=!0),l.memoizedState=p,l.baseState=v,l.baseQueue=b,u.lastRenderedState=p}if(s=u.interleaved,s!==null){f=s;do A=f.lane,ot.lanes|=A,Lr|=A,f=f.next;while(f!==s)}else f===null&&(u.lanes=0);return[l.memoizedState,u.dispatch]}function sp(s){var l=Rn(),u=l.queue;if(u===null)throw Error(ee(311));u.lastRenderedReducer=s;var p=u.dispatch,f=u.pending,A=l.memoizedState;if(f!==null){u.pending=null;var v=f=f.next;do A=s(A,v.action),v=v.next;while(v!==f);Xn(A,l.memoizedState)||(en=!0),l.memoizedState=A,l.baseQueue===null&&(l.baseState=A),u.lastRenderedState=A}return[A,p]}function U2(){}function G2(s,l){var u=ot,p=Rn(),f=l(),A=!Xn(p.memoizedState,f);if(A&&(p.memoizedState=f,en=!0),p=p.queue,jf($2.bind(null,u,p,s),[s]),p.getSnapshot!==l||A||yt!==null&&yt.memoizedState.tag&1){if(u.flags|=2048,jl(9,q2.bind(null,u,p,f,l),void 0,null),xt===null)throw Error(ee(349));Nr&30||W2(u,l,f)}return f}function W2(s,l,u){s.flags|=16384,s={getSnapshot:l,value:u},l=ot.updateQueue,l===null?(l={lastEffect:null,stores:null},ot.updateQueue=l,l.stores=[s]):(u=l.stores,u===null?l.stores=[s]:u.push(s))}function q2(s,l,u,p){l.value=u,l.getSnapshot=p,K2(l)&&Q2(s)}function $2(s,l,u){return u(function(){K2(l)&&Q2(s)})}function K2(s){var l=s.getSnapshot;s=s.value;try{var u=l();return!Xn(s,u)}catch{return!0}}function Q2(s){var l=Qo(s,1);l!==null&&Jn(l,s,1,-1)}function oy(s){var l=Co();return typeof s=="function"&&(s=s()),l.memoizedState=l.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rl,lastRenderedState:s},l.queue=s,s=s.dispatch=I6.bind(null,ot,s),[l.memoizedState,s]}function jl(s,l,u,p){return s={tag:s,create:l,destroy:u,deps:p,next:null},l=ot.updateQueue,l===null?(l={lastEffect:null,stores:null},ot.updateQueue=l,l.lastEffect=s.next=s):(u=l.lastEffect,u===null?l.lastEffect=s.next=s:(p=u.next,u.next=s,s.next=p,l.lastEffect=s)),s}function Z2(){return Rn().memoizedState}function Xd(s,l,u,p){var f=Co();ot.flags|=s,f.memoizedState=jl(1|l,u,void 0,p===void 0?null:p)}function Ru(s,l,u,p){var f=Rn();p=p===void 0?null:p;var A=void 0;if(wt!==null){var v=wt.memoizedState;if(A=v.destroy,p!==null&&zf(p,v.deps)){f.memoizedState=jl(l,u,A,p);return}}ot.flags|=s,f.memoizedState=jl(1|l,u,A,p)}function iy(s,l){return Xd(8390656,8,s,l)}function jf(s,l){return Ru(2048,8,s,l)}function Y2(s,l){return Ru(4,2,s,l)}function J2(s,l){return Ru(4,4,s,l)}function X2(s,l){if(typeof l=="function")return s=s(),l(s),function(){l(null)};if(l!=null)return s=s(),l.current=s,function(){l.current=null}}function ex(s,l,u){return u=u!=null?u.concat([s]):null,Ru(4,4,X2.bind(null,l,s),u)}function Ff(){}function tx(s,l){var u=Rn();l=l===void 0?null:l;var p=u.memoizedState;return p!==null&&l!==null&&zf(l,p[1])?p[0]:(u.memoizedState=[s,l],s)}function nx(s,l){var u=Rn();l=l===void 0?null:l;var p=u.memoizedState;return p!==null&&l!==null&&zf(l,p[1])?p[0]:(s=s(),u.memoizedState=[s,l],s)}function ox(s,l,u){return Nr&21?(Xn(u,l)||(u=s2(),ot.lanes|=u,Lr|=u,s.baseState=!0),l):(s.baseState&&(s.baseState=!1,en=!0),s.memoizedState=u)}function S6(s,l){var u=Le;Le=u!==0&&4>u?u:4,s(!0);var p=ip.transition;ip.transition={};try{s(!1),l()}finally{Le=u,ip.transition=p}}function ix(){return Rn().memoizedState}function T6(s,l,u){var p=Oi(s);if(u={lane:p,action:u,hasEagerState:!1,eagerState:null,next:null},rx(s))sx(l,u);else if(u=z2(s,l,u,p),u!==null){var f=Gt();Jn(u,s,p,f),ax(u,l,p)}}function I6(s,l,u){var p=Oi(s),f={lane:p,action:u,hasEagerState:!1,eagerState:null,next:null};if(rx(s))sx(l,f);else{var A=s.alternate;if(s.lanes===0&&(A===null||A.lanes===0)&&(A=l.lastRenderedReducer,A!==null))try{var v=l.lastRenderedState,y=A(v,u);if(f.hasEagerState=!0,f.eagerState=y,Xn(y,v)){var b=l.interleaved;b===null?(f.next=f,Mf(l)):(f.next=b.next,b.next=f),l.interleaved=f;return}}catch{}finally{}u=z2(s,l,f,p),u!==null&&(f=Gt(),Jn(u,s,p,f),ax(u,l,p))}}function rx(s){var l=s.alternate;return s===ot||l!==null&&l===ot}function sx(s,l){Al=Cu=!0;var u=s.pending;u===null?l.next=l:(l.next=u.next,u.next=l),s.pending=l}function ax(s,l,u){if(u&4194240){var p=l.lanes;p&=s.pendingLanes,u|=p,l.lanes=u,kf(s,u)}}var vu={readContext:On,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},M6={readContext:On,useCallback:function(s,l){return Co().memoizedState=[s,l===void 0?null:l],s},useContext:On,useEffect:iy,useImperativeHandle:function(s,l,u){return u=u!=null?u.concat([s]):null,Xd(4194308,4,X2.bind(null,l,s),u)},useLayoutEffect:function(s,l){return Xd(4194308,4,s,l)},useInsertionEffect:function(s,l){return Xd(4,2,s,l)},useMemo:function(s,l){var u=Co();return l=l===void 0?null:l,s=s(),u.memoizedState=[s,l],s},useReducer:function(s,l,u){var p=Co();return l=u!==void 0?u(l):l,p.memoizedState=p.baseState=l,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:l},p.queue=s,s=s.dispatch=T6.bind(null,ot,s),[p.memoizedState,s]},useRef:function(s){var l=Co();return s={current:s},l.memoizedState=s},useState:oy,useDebugValue:Ff,useDeferredValue:function(s){return Co().memoizedState=s},useTransition:function(){var s=oy(!1),l=s[0];return s=S6.bind(null,s[1]),Co().memoizedState=s,[l,s]},useMutableSource:function(){},useSyncExternalStore:function(s,l,u){var p=ot,f=Co();if(Ye){if(u===void 0)throw Error(ee(407));u=u()}else{if(u=l(),xt===null)throw Error(ee(349));Nr&30||W2(p,l,u)}f.memoizedState=u;var A={value:u,getSnapshot:l};return f.queue=A,iy($2.bind(null,p,A,s),[s]),p.flags|=2048,jl(9,q2.bind(null,p,A,u,l),void 0,null),u},useId:function(){var s=Co(),l=xt.identifierPrefix;if(Ye){var u=Wo,p=Go;u=(p&~(1<<32-Yn(p)-1)).toString(32)+u,l=":"+l+"R"+u,u=Ol++,0<u&&(l+="H"+u.toString(32)),l+=":"}else u=D6++,l=":"+l+"r"+u.toString(32)+":";return s.memoizedState=l},unstable_isNewReconciler:!1},B6={readContext:On,useCallback:tx,useContext:On,useEffect:jf,useImperativeHandle:ex,useInsertionEffect:Y2,useLayoutEffect:J2,useMemo:nx,useReducer:rp,useRef:Z2,useState:function(){return rp(Rl)},useDebugValue:Ff,useDeferredValue:function(s){var l=Rn();return ox(l,wt.memoizedState,s)},useTransition:function(){var s=rp(Rl)[0],l=Rn().memoizedState;return[s,l]},useMutableSource:U2,useSyncExternalStore:G2,useId:ix,unstable_isNewReconciler:!1},N6={readContext:On,useCallback:tx,useContext:On,useEffect:jf,useImperativeHandle:ex,useInsertionEffect:Y2,useLayoutEffect:J2,useMemo:nx,useReducer:sp,useRef:Z2,useState:function(){return sp(Rl)},useDebugValue:Ff,useDeferredValue:function(s){var l=Rn();return wt===null?l.memoizedState=s:ox(l,wt.memoizedState,s)},useTransition:function(){var s=sp(Rl)[0],l=Rn().memoizedState;return[s,l]},useMutableSource:U2,useSyncExternalStore:G2,useId:ix,unstable_isNewReconciler:!1};function ea(s,l){try{var u="",p=l;do u+=aL(p),p=p.return;while(p);var f=u}catch(A){f=`
Error generating stack: `+A.message+`
`+A.stack}return{value:s,source:l,stack:f,digest:null}}function ap(s,l,u){return{value:s,source:null,stack:u??null,digest:l??null}}function Gp(s,l){try{console.error(l.value)}catch(u){setTimeout(function(){throw u})}}var L6=typeof WeakMap=="function"?WeakMap:Map;function lx(s,l,u){u=qo(-1,u),u.tag=3,u.payload={element:null};var p=l.value;return u.callback=function(){yu||(yu=!0,ef=p),Gp(s,l)},u}function cx(s,l,u){u=qo(-1,u),u.tag=3;var p=s.type.getDerivedStateFromError;if(typeof p=="function"){var f=l.value;u.payload=function(){return p(f)},u.callback=function(){Gp(s,l)}}var A=s.stateNode;return A!==null&&typeof A.componentDidCatch=="function"&&(u.callback=function(){Gp(s,l),typeof p!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})}),u}function ry(s,l,u){var p=s.pingCache;if(p===null){p=s.pingCache=new L6;var f=new Set;p.set(l,f)}else f=p.get(l),f===void 0&&(f=new Set,p.set(l,f));f.has(u)||(f.add(u),s=K6.bind(null,s,l,u),l.then(s,s))}function sy(s){do{var l;if((l=s.tag===13)&&(l=s.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return s;s=s.return}while(s!==null);return null}function ay(s,l,u,p,f){return s.mode&1?(s.flags|=65536,s.lanes=f,s):(s===l?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(l=qo(-1,1),l.tag=2,Pi(u,l,1))),u.lanes|=1),s)}var P6=Yo.ReactCurrentOwner,en=!1;function Ut(s,l,u,p){l.child=s===null?V2(l,null,u,p):Js(l,s.child,u,p)}function ly(s,l,u,p,f){u=u.render;var A=l.ref;return $s(l,f),p=Of(s,l,u,p,A,f),u=Rf(),s!==null&&!en?(l.updateQueue=s.updateQueue,l.flags&=-2053,s.lanes&=~f,Zo(s,l,f)):(Ye&&u&&xf(l),l.flags|=1,Ut(s,l,p,f),l.child)}function cy(s,l,u,p,f){if(s===null){var A=u.type;return typeof A=="function"&&!Kf(A)&&A.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(l.tag=15,l.type=A,dx(s,l,A,p,f)):(s=ou(u.type,null,p,l,l.mode,f),s.ref=l.ref,s.return=l,l.child=s)}if(A=s.child,!(s.lanes&f)){var v=A.memoizedProps;if(u=u.compare,u=u!==null?u:Ml,u(v,p)&&s.ref===l.ref)return Zo(s,l,f)}return l.flags|=1,s=Ri(A,p),s.ref=l.ref,s.return=l,l.child=s}function dx(s,l,u,p,f){if(s!==null){var A=s.memoizedProps;if(Ml(A,p)&&s.ref===l.ref)if(en=!1,l.pendingProps=p=A,(s.lanes&f)!==0)s.flags&131072&&(en=!0);else return l.lanes=s.lanes,Zo(s,l,f)}return Wp(s,l,u,p,f)}function ux(s,l,u){var p=l.pendingProps,f=p.children,A=s!==null?s.memoizedState:null;if(p.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Hs,An),An|=u;else{if(!(u&1073741824))return s=A!==null?A.baseLanes|u:u,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:s,cachePool:null,transitions:null},l.updateQueue=null,Ge(Hs,An),An|=s,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},p=A!==null?A.baseLanes:u,Ge(Hs,An),An|=p}else A!==null?(p=A.baseLanes|u,l.memoizedState=null):p=u,Ge(Hs,An),An|=p;return Ut(s,l,f,u),l.child}function hx(s,l){var u=l.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(l.flags|=512,l.flags|=2097152)}function Wp(s,l,u,p,f){var A=nn(u)?Mr:Ht.current;return A=Zs(l,A),$s(l,f),u=Of(s,l,u,p,A,f),p=Rf(),s!==null&&!en?(l.updateQueue=s.updateQueue,l.flags&=-2053,s.lanes&=~f,Zo(s,l,f)):(Ye&&p&&xf(l),l.flags|=1,Ut(s,l,u,f),l.child)}function dy(s,l,u,p,f){if(nn(u)){var A=!0;gu(l)}else A=!1;if($s(l,f),l.stateNode===null)eu(s,l),j2(l,u,p),Up(l,u,p,f),p=!0;else if(s===null){var v=l.stateNode,y=l.memoizedProps;v.props=y;var b=v.context,S=u.contextType;typeof S=="object"&&S!==null?S=On(S):(S=nn(u)?Mr:Ht.current,S=Zs(l,S));var B=u.getDerivedStateFromProps,D=typeof B=="function"||typeof v.getSnapshotBeforeUpdate=="function";D||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(y!==p||b!==S)&&ty(l,v,p,S),xi=!1;var C=l.memoizedState;v.state=C,wu(l,p,v,f),b=l.memoizedState,y!==p||C!==b||tn.current||xi?(typeof B=="function"&&(Hp(l,u,B,p),b=l.memoizedState),(y=xi||ey(l,u,y,p,C,b,S))?(D||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(l.flags|=4194308)):(typeof v.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=p,l.memoizedState=b),v.props=p,v.state=b,v.context=S,p=y):(typeof v.componentDidMount=="function"&&(l.flags|=4194308),p=!1)}else{v=l.stateNode,O2(s,l),y=l.memoizedProps,S=l.type===l.elementType?y:Kn(l.type,y),v.props=S,D=l.pendingProps,C=v.context,b=u.contextType,typeof b=="object"&&b!==null?b=On(b):(b=nn(u)?Mr:Ht.current,b=Zs(l,b));var E=u.getDerivedStateFromProps;(B=typeof E=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(y!==D||C!==b)&&ty(l,v,p,b),xi=!1,C=l.memoizedState,v.state=C,wu(l,p,v,f);var O=l.memoizedState;y!==D||C!==O||tn.current||xi?(typeof E=="function"&&(Hp(l,u,E,p),O=l.memoizedState),(S=xi||ey(l,u,S,p,C,O,b)||!1)?(B||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(p,O,b),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(p,O,b)),typeof v.componentDidUpdate=="function"&&(l.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof v.componentDidUpdate!="function"||y===s.memoizedProps&&C===s.memoizedState||(l.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||y===s.memoizedProps&&C===s.memoizedState||(l.flags|=1024),l.memoizedProps=p,l.memoizedState=O),v.props=p,v.state=O,v.context=b,p=S):(typeof v.componentDidUpdate!="function"||y===s.memoizedProps&&C===s.memoizedState||(l.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||y===s.memoizedProps&&C===s.memoizedState||(l.flags|=1024),p=!1)}return qp(s,l,u,p,A,f)}function qp(s,l,u,p,f,A){hx(s,l);var v=(l.flags&128)!==0;if(!p&&!v)return f&&Q1(l,u,!1),Zo(s,l,A);p=l.stateNode,P6.current=l;var y=v&&typeof u.getDerivedStateFromError!="function"?null:p.render();return l.flags|=1,s!==null&&v?(l.child=Js(l,s.child,null,A),l.child=Js(l,null,y,A)):Ut(s,l,y,A),l.memoizedState=p.state,f&&Q1(l,u,!0),l.child}function mx(s){var l=s.stateNode;l.pendingContext?K1(s,l.pendingContext,l.pendingContext!==l.context):l.context&&K1(s,l.context,!1),Nf(s,l.containerInfo)}function uy(s,l,u,p,f){return Ys(),Df(f),l.flags|=256,Ut(s,l,u,p),l.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function Kp(s){return{baseLanes:s,cachePool:null,transitions:null}}function gx(s,l,u){var p=l.pendingProps,f=nt.current,A=!1,v=(l.flags&128)!==0,y;if((y=v)||(y=s!==null&&s.memoizedState===null?!1:(f&2)!==0),y?(A=!0,l.flags&=-129):(s===null||s.memoizedState!==null)&&(f|=1),Ge(nt,f&1),s===null)return Fp(l),s=l.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(l.mode&1?s.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(v=p.children,s=p.fallback,A?(p=l.mode,A=l.child,v={mode:"hidden",children:v},!(p&1)&&A!==null?(A.childLanes=0,A.pendingProps=v):A=Vu(v,p,0,null),s=Ir(s,p,u,null),A.return=l,s.return=l,A.sibling=s,l.child=A,l.child.memoizedState=Kp(u),l.memoizedState=$p,s):Vf(l,v));if(f=s.memoizedState,f!==null&&(y=f.dehydrated,y!==null))return z6(s,l,v,p,y,f,u);if(A){A=p.fallback,v=l.mode,f=s.child,y=f.sibling;var b={mode:"hidden",children:p.children};return!(v&1)&&l.child!==f?(p=l.child,p.childLanes=0,p.pendingProps=b,l.deletions=null):(p=Ri(f,b),p.subtreeFlags=f.subtreeFlags&14680064),y!==null?A=Ri(y,A):(A=Ir(A,v,u,null),A.flags|=2),A.return=l,p.return=l,p.sibling=A,l.child=p,p=A,A=l.child,v=s.child.memoizedState,v=v===null?Kp(u):{baseLanes:v.baseLanes|u,cachePool:null,transitions:v.transitions},A.memoizedState=v,A.childLanes=s.childLanes&~u,l.memoizedState=$p,p}return A=s.child,s=A.sibling,p=Ri(A,{mode:"visible",children:p.children}),!(l.mode&1)&&(p.lanes=u),p.return=l,p.sibling=null,s!==null&&(u=l.deletions,u===null?(l.deletions=[s],l.flags|=16):u.push(s)),l.child=p,l.memoizedState=null,p}function Vf(s,l){return l=Vu({mode:"visible",children:l},s.mode,0,null),l.return=s,s.child=l}function Hd(s,l,u,p){return p!==null&&Df(p),Js(l,s.child,null,u),s=Vf(l,l.pendingProps.children),s.flags|=2,l.memoizedState=null,s}function z6(s,l,u,p,f,A,v){if(u)return l.flags&256?(l.flags&=-257,p=ap(Error(ee(422))),Hd(s,l,v,p)):l.memoizedState!==null?(l.child=s.child,l.flags|=128,null):(A=p.fallback,f=l.mode,p=Vu({mode:"visible",children:p.children},f,0,null),A=Ir(A,f,v,null),A.flags|=2,p.return=l,A.return=l,p.sibling=A,l.child=p,l.mode&1&&Js(l,s.child,null,v),l.child.memoizedState=Kp(v),l.memoizedState=$p,A);if(!(l.mode&1))return Hd(s,l,v,null);if(f.data==="$!"){if(p=f.nextSibling&&f.nextSibling.dataset,p)var y=p.dgst;return p=y,A=Error(ee(419)),p=ap(A,p,void 0),Hd(s,l,v,p)}if(y=(v&s.childLanes)!==0,en||y){if(p=xt,p!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(p.suspendedLanes|v)?0:f,f!==0&&f!==A.retryLane&&(A.retryLane=f,Qo(s,f),Jn(p,s,f,-1))}return $f(),p=ap(Error(ee(421))),Hd(s,l,v,p)}return f.data==="$?"?(l.flags|=128,l.child=s.child,l=Q6.bind(null,s),f._reactRetry=l,null):(s=A.treeContext,Cn=Li(f.nextSibling),vn=l,Ye=!0,Zn=null,s!==null&&(Nn[Ln++]=Go,Nn[Ln++]=Wo,Nn[Ln++]=Br,Go=s.id,Wo=s.overflow,Br=l),l=Vf(l,p.children),l.flags|=4096,l)}function hy(s,l,u){s.lanes|=l;var p=s.alternate;p!==null&&(p.lanes|=l),Vp(s.return,l,u)}function lp(s,l,u,p,f){var A=s.memoizedState;A===null?s.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:p,tail:u,tailMode:f}:(A.isBackwards=l,A.rendering=null,A.renderingStartTime=0,A.last=p,A.tail=u,A.tailMode=f)}function px(s,l,u){var p=l.pendingProps,f=p.revealOrder,A=p.tail;if(Ut(s,l,p.children,u),p=nt.current,p&2)p=p&1|2,l.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=l.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&hy(s,u,l);else if(s.tag===19)hy(s,u,l);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break e;for(;s.sibling===null;){if(s.return===null||s.return===l)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}p&=1}if(Ge(nt,p),!(l.mode&1))l.memoizedState=null;else switch(f){case"forwards":for(u=l.child,f=null;u!==null;)s=u.alternate,s!==null&&Au(s)===null&&(f=u),u=u.sibling;u=f,u===null?(f=l.child,l.child=null):(f=u.sibling,u.sibling=null),lp(l,!1,f,u,A);break;case"backwards":for(u=null,f=l.child,l.child=null;f!==null;){if(s=f.alternate,s!==null&&Au(s)===null){l.child=f;break}s=f.sibling,f.sibling=u,u=f,f=s}lp(l,!0,u,null,A);break;case"together":lp(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function eu(s,l){!(l.mode&1)&&s!==null&&(s.alternate=null,l.alternate=null,l.flags|=2)}function Zo(s,l,u){if(s!==null&&(l.dependencies=s.dependencies),Lr|=l.lanes,!(u&l.childLanes))return null;if(s!==null&&l.child!==s.child)throw Error(ee(153));if(l.child!==null){for(s=l.child,u=Ri(s,s.pendingProps),l.child=u,u.return=l;s.sibling!==null;)s=s.sibling,u=u.sibling=Ri(s,s.pendingProps),u.return=l;u.sibling=null}return l.child}function O6(s,l,u){switch(l.tag){case 3:mx(l),Ys();break;case 5:H2(l);break;case 1:nn(l.type)&&gu(l);break;case 4:Nf(l,l.stateNode.containerInfo);break;case 10:var p=l.type._context,f=l.memoizedProps.value;Ge(ku,p._currentValue),p._currentValue=f;break;case 13:if(p=l.memoizedState,p!==null)return p.dehydrated!==null?(Ge(nt,nt.current&1),l.flags|=128,null):u&l.child.childLanes?gx(s,l,u):(Ge(nt,nt.current&1),s=Zo(s,l,u),s!==null?s.sibling:null);Ge(nt,nt.current&1);break;case 19:if(p=(u&l.childLanes)!==0,s.flags&128){if(p)return px(s,l,u);l.flags|=128}if(f=l.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(nt,nt.current),p)break;return null;case 22:case 23:return l.lanes=0,ux(s,l,u)}return Zo(s,l,u)}var fx,Qp,kx,bx;fx=function(s,l){for(var u=l.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break;for(;u.sibling===null;){if(u.return===null||u.return===l)return;u=u.return}u.sibling.return=u.return,u=u.sibling}};Qp=function(){};kx=function(s,l,u,p){var f=s.memoizedProps;if(f!==p){s=l.stateNode,Sr(yo.current);var A=null;switch(u){case"input":f=kp(s,f),p=kp(s,p),A=[];break;case"select":f=it({},f,{value:void 0}),p=it({},p,{value:void 0}),A=[];break;case"textarea":f=Ap(s,f),p=Ap(s,p),A=[];break;default:typeof f.onClick!="function"&&typeof p.onClick=="function"&&(s.onclick=hu)}vp(u,p);var v;u=null;for(S in f)if(!p.hasOwnProperty(S)&&f.hasOwnProperty(S)&&f[S]!=null)if(S==="style"){var y=f[S];for(v in y)y.hasOwnProperty(v)&&(u||(u={}),u[v]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(yl.hasOwnProperty(S)?A||(A=[]):(A=A||[]).push(S,null));for(S in p){var b=p[S];if(y=f!=null?f[S]:void 0,p.hasOwnProperty(S)&&b!==y&&(b!=null||y!=null))if(S==="style")if(y){for(v in y)!y.hasOwnProperty(v)||b&&b.hasOwnProperty(v)||(u||(u={}),u[v]="");for(v in b)b.hasOwnProperty(v)&&y[v]!==b[v]&&(u||(u={}),u[v]=b[v])}else u||(A||(A=[]),A.push(S,u)),u=b;else S==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(A=A||[]).push(S,b)):S==="children"?typeof b!="string"&&typeof b!="number"||(A=A||[]).push(S,""+b):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(yl.hasOwnProperty(S)?(b!=null&&S==="onScroll"&&$e("scroll",s),A||y===b||(A=[])):(A=A||[]).push(S,b))}u&&(A=A||[]).push("style",u);var S=A;(l.updateQueue=S)&&(l.flags|=4)}};bx=function(s,l,u,p){u!==p&&(l.flags|=4)};function cl(s,l){if(!Ye)switch(s.tailMode){case"hidden":l=s.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var p=null;u!==null;)u.alternate!==null&&(p=u),u=u.sibling;p===null?l||s.tail===null?s.tail=null:s.tail.sibling=null:p.sibling=null}}function Ft(s){var l=s.alternate!==null&&s.alternate.child===s.child,u=0,p=0;if(l)for(var f=s.child;f!==null;)u|=f.lanes|f.childLanes,p|=f.subtreeFlags&14680064,p|=f.flags&14680064,f.return=s,f=f.sibling;else for(f=s.child;f!==null;)u|=f.lanes|f.childLanes,p|=f.subtreeFlags,p|=f.flags,f.return=s,f=f.sibling;return s.subtreeFlags|=p,s.childLanes=u,l}function R6(s,l,u){var p=l.pendingProps;switch(Ef(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(l),null;case 1:return nn(l.type)&&mu(),Ft(l),null;case 3:return p=l.stateNode,Xs(),Ke(tn),Ke(Ht),Pf(),p.pendingContext&&(p.context=p.pendingContext,p.pendingContext=null),(s===null||s.child===null)&&(Fd(l)?l.flags|=4:s===null||s.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Zn!==null&&(of(Zn),Zn=null))),Qp(s,l),Ft(l),null;case 5:Lf(l);var f=Sr(zl.current);if(u=l.type,s!==null&&l.stateNode!=null)kx(s,l,u,p,f),s.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!p){if(l.stateNode===null)throw Error(ee(166));return Ft(l),null}if(s=Sr(yo.current),Fd(l)){p=l.stateNode,u=l.type;var A=l.memoizedProps;switch(p[vo]=l,p[Ll]=A,s=(l.mode&1)!==0,u){case"dialog":$e("cancel",p),$e("close",p);break;case"iframe":case"object":case"embed":$e("load",p);break;case"video":case"audio":for(f=0;f<gl.length;f++)$e(gl[f],p);break;case"source":$e("error",p);break;case"img":case"image":case"link":$e("error",p),$e("load",p);break;case"details":$e("toggle",p);break;case"input":C1(p,A),$e("invalid",p);break;case"select":p._wrapperState={wasMultiple:!!A.multiple},$e("invalid",p);break;case"textarea":_1(p,A),$e("invalid",p)}vp(u,A),f=null;for(var v in A)if(A.hasOwnProperty(v)){var y=A[v];v==="children"?typeof y=="string"?p.textContent!==y&&(A.suppressHydrationWarning!==!0&&jd(p.textContent,y,s),f=["children",y]):typeof y=="number"&&p.textContent!==""+y&&(A.suppressHydrationWarning!==!0&&jd(p.textContent,y,s),f=["children",""+y]):yl.hasOwnProperty(v)&&y!=null&&v==="onScroll"&&$e("scroll",p)}switch(u){case"input":Md(p),v1(p,A,!0);break;case"textarea":Md(p),y1(p);break;case"select":case"option":break;default:typeof A.onClick=="function"&&(p.onclick=hu)}p=f,l.updateQueue=p,p!==null&&(l.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Wy(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=v.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof p.is=="string"?s=v.createElement(u,{is:p.is}):(s=v.createElement(u),u==="select"&&(v=s,p.multiple?v.multiple=!0:p.size&&(v.size=p.size))):s=v.createElementNS(s,u),s[vo]=l,s[Ll]=p,fx(s,l,!1,!1),l.stateNode=s;e:{switch(v=_p(u,p),u){case"dialog":$e("cancel",s),$e("close",s),f=p;break;case"iframe":case"object":case"embed":$e("load",s),f=p;break;case"video":case"audio":for(f=0;f<gl.length;f++)$e(gl[f],s);f=p;break;case"source":$e("error",s),f=p;break;case"img":case"image":case"link":$e("error",s),$e("load",s),f=p;break;case"details":$e("toggle",s),f=p;break;case"input":C1(s,p),f=kp(s,p),$e("invalid",s);break;case"option":f=p;break;case"select":s._wrapperState={wasMultiple:!!p.multiple},f=it({},p,{value:void 0}),$e("invalid",s);break;case"textarea":_1(s,p),f=Ap(s,p),$e("invalid",s);break;default:f=p}vp(u,f),y=f;for(A in y)if(y.hasOwnProperty(A)){var b=y[A];A==="style"?Ky(s,b):A==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&qy(s,b)):A==="children"?typeof b=="string"?(u!=="textarea"||b!=="")&&xl(s,b):typeof b=="number"&&xl(s,""+b):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(yl.hasOwnProperty(A)?b!=null&&A==="onScroll"&&$e("scroll",s):b!=null&&uf(s,A,b,v))}switch(u){case"input":Md(s),v1(s,p,!1);break;case"textarea":Md(s),y1(s);break;case"option":p.value!=null&&s.setAttribute("value",""+ji(p.value));break;case"select":s.multiple=!!p.multiple,A=p.value,A!=null?Us(s,!!p.multiple,A,!1):p.defaultValue!=null&&Us(s,!!p.multiple,p.defaultValue,!0);break;default:typeof f.onClick=="function"&&(s.onclick=hu)}switch(u){case"button":case"input":case"select":case"textarea":p=!!p.autoFocus;break e;case"img":p=!0;break e;default:p=!1}}p&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Ft(l),null;case 6:if(s&&l.stateNode!=null)bx(s,l,s.memoizedProps,p);else{if(typeof p!="string"&&l.stateNode===null)throw Error(ee(166));if(u=Sr(zl.current),Sr(yo.current),Fd(l)){if(p=l.stateNode,u=l.memoizedProps,p[vo]=l,(A=p.nodeValue!==u)&&(s=vn,s!==null))switch(s.tag){case 3:jd(p.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&jd(p.nodeValue,u,(s.mode&1)!==0)}A&&(l.flags|=4)}else p=(u.nodeType===9?u:u.ownerDocument).createTextNode(p),p[vo]=l,l.stateNode=p}return Ft(l),null;case 13:if(Ke(nt),p=l.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(Ye&&Cn!==null&&l.mode&1&&!(l.flags&128))P2(),Ys(),l.flags|=98560,A=!1;else if(A=Fd(l),p!==null&&p.dehydrated!==null){if(s===null){if(!A)throw Error(ee(318));if(A=l.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(ee(317));A[vo]=l}else Ys(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;Ft(l),A=!1}else Zn!==null&&(of(Zn),Zn=null),A=!0;if(!A)return l.flags&65536?l:null}return l.flags&128?(l.lanes=u,l):(p=p!==null,p!==(s!==null&&s.memoizedState!==null)&&p&&(l.child.flags|=8192,l.mode&1&&(s===null||nt.current&1?At===0&&(At=3):$f())),l.updateQueue!==null&&(l.flags|=4),Ft(l),null);case 4:return Xs(),Qp(s,l),s===null&&Bl(l.stateNode.containerInfo),Ft(l),null;case 10:return If(l.type._context),Ft(l),null;case 17:return nn(l.type)&&mu(),Ft(l),null;case 19:if(Ke(nt),A=l.memoizedState,A===null)return Ft(l),null;if(p=(l.flags&128)!==0,v=A.rendering,v===null)if(p)cl(A,!1);else{if(At!==0||s!==null&&s.flags&128)for(s=l.child;s!==null;){if(v=Au(s),v!==null){for(l.flags|=128,cl(A,!1),p=v.updateQueue,p!==null&&(l.updateQueue=p,l.flags|=4),l.subtreeFlags=0,p=u,u=l.child;u!==null;)A=u,s=p,A.flags&=14680066,v=A.alternate,v===null?(A.childLanes=0,A.lanes=s,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=v.childLanes,A.lanes=v.lanes,A.child=v.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=v.memoizedProps,A.memoizedState=v.memoizedState,A.updateQueue=v.updateQueue,A.type=v.type,s=v.dependencies,A.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return Ge(nt,nt.current&1|2),l.child}s=s.sibling}A.tail!==null&&ht()>ta&&(l.flags|=128,p=!0,cl(A,!1),l.lanes=4194304)}else{if(!p)if(s=Au(v),s!==null){if(l.flags|=128,p=!0,u=s.updateQueue,u!==null&&(l.updateQueue=u,l.flags|=4),cl(A,!0),A.tail===null&&A.tailMode==="hidden"&&!v.alternate&&!Ye)return Ft(l),null}else 2*ht()-A.renderingStartTime>ta&&u!==1073741824&&(l.flags|=128,p=!0,cl(A,!1),l.lanes=4194304);A.isBackwards?(v.sibling=l.child,l.child=v):(u=A.last,u!==null?u.sibling=v:l.child=v,A.last=v)}return A.tail!==null?(l=A.tail,A.rendering=l,A.tail=l.sibling,A.renderingStartTime=ht(),l.sibling=null,u=nt.current,Ge(nt,p?u&1|2:u&1),l):(Ft(l),null);case 22:case 23:return qf(),p=l.memoizedState!==null,s!==null&&s.memoizedState!==null!==p&&(l.flags|=8192),p&&l.mode&1?An&1073741824&&(Ft(l),l.subtreeFlags&6&&(l.flags|=8192)):Ft(l),null;case 24:return null;case 25:return null}throw Error(ee(156,l.tag))}function j6(s,l){switch(Ef(l),l.tag){case 1:return nn(l.type)&&mu(),s=l.flags,s&65536?(l.flags=s&-65537|128,l):null;case 3:return Xs(),Ke(tn),Ke(Ht),Pf(),s=l.flags,s&65536&&!(s&128)?(l.flags=s&-65537|128,l):null;case 5:return Lf(l),null;case 13:if(Ke(nt),s=l.memoizedState,s!==null&&s.dehydrated!==null){if(l.alternate===null)throw Error(ee(340));Ys()}return s=l.flags,s&65536?(l.flags=s&-65537|128,l):null;case 19:return Ke(nt),null;case 4:return Xs(),null;case 10:return If(l.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var Ud=!1,Vt=!1,F6=typeof WeakSet=="function"?WeakSet:Set,se=null;function Vs(s,l){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(p){lt(s,l,p)}else u.current=null}function Zp(s,l,u){try{u()}catch(p){lt(s,l,p)}}var my=!1;function V6(s,l){if(Np=cu,s=v2(),yf(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var p=u.getSelection&&u.getSelection();if(p&&p.rangeCount!==0){u=p.anchorNode;var f=p.anchorOffset,A=p.focusNode;p=p.focusOffset;try{u.nodeType,A.nodeType}catch{u=null;break e}var v=0,y=-1,b=-1,S=0,B=0,D=s,C=null;t:for(;;){for(var E;D!==u||f!==0&&D.nodeType!==3||(y=v+f),D!==A||p!==0&&D.nodeType!==3||(b=v+p),D.nodeType===3&&(v+=D.nodeValue.length),(E=D.firstChild)!==null;)C=D,D=E;for(;;){if(D===s)break t;if(C===u&&++S===f&&(y=v),C===A&&++B===p&&(b=v),(E=D.nextSibling)!==null)break;D=C,C=D.parentNode}D=E}u=y===-1||b===-1?null:{start:y,end:b}}else u=null}u=u||{start:0,end:0}}else u=null;for(Lp={focusedElem:s,selectionRange:u},cu=!1,se=l;se!==null;)if(l=se,s=l.child,(l.subtreeFlags&1028)!==0&&s!==null)s.return=l,se=s;else for(;se!==null;){l=se;try{var O=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var j=O.memoizedProps,H=O.memoizedState,z=l.stateNode,P=z.getSnapshotBeforeUpdate(l.elementType===l.type?j:Kn(l.type,j),H);z.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var R=l.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(U){lt(l,l.return,U)}if(s=l.sibling,s!==null){s.return=l.return,se=s;break}se=l.return}return O=my,my=!1,O}function Cl(s,l,u){var p=l.updateQueue;if(p=p!==null?p.lastEffect:null,p!==null){var f=p=p.next;do{if((f.tag&s)===s){var A=f.destroy;f.destroy=void 0,A!==void 0&&Zp(l,u,A)}f=f.next}while(f!==p)}}function ju(s,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&s)===s){var p=u.create;u.destroy=p()}u=u.next}while(u!==l)}}function Yp(s){var l=s.ref;if(l!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof l=="function"?l(s):l.current=s}}function wx(s){var l=s.alternate;l!==null&&(s.alternate=null,wx(l)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(l=s.stateNode,l!==null&&(delete l[vo],delete l[Ll],delete l[Op],delete l[_6],delete l[y6])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function Ax(s){return s.tag===5||s.tag===3||s.tag===4}function gy(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Ax(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Jp(s,l,u){var p=s.tag;if(p===5||p===6)s=s.stateNode,l?u.nodeType===8?u.parentNode.insertBefore(s,l):u.insertBefore(s,l):(u.nodeType===8?(l=u.parentNode,l.insertBefore(s,u)):(l=u,l.appendChild(s)),u=u._reactRootContainer,u!=null||l.onclick!==null||(l.onclick=hu));else if(p!==4&&(s=s.child,s!==null))for(Jp(s,l,u),s=s.sibling;s!==null;)Jp(s,l,u),s=s.sibling}function Xp(s,l,u){var p=s.tag;if(p===5||p===6)s=s.stateNode,l?u.insertBefore(s,l):u.appendChild(s);else if(p!==4&&(s=s.child,s!==null))for(Xp(s,l,u),s=s.sibling;s!==null;)Xp(s,l,u),s=s.sibling}var Bt=null,Qn=!1;function _i(s,l,u){for(u=u.child;u!==null;)Cx(s,l,u),u=u.sibling}function Cx(s,l,u){if(_o&&typeof _o.onCommitFiberUnmount=="function")try{_o.onCommitFiberUnmount(Mu,u)}catch{}switch(u.tag){case 5:Vt||Vs(u,l);case 6:var p=Bt,f=Qn;Bt=null,_i(s,l,u),Bt=p,Qn=f,Bt!==null&&(Qn?(s=Bt,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Bt.removeChild(u.stateNode));break;case 18:Bt!==null&&(Qn?(s=Bt,u=u.stateNode,s.nodeType===8?tp(s.parentNode,u):s.nodeType===1&&tp(s,u),Tl(s)):tp(Bt,u.stateNode));break;case 4:p=Bt,f=Qn,Bt=u.stateNode.containerInfo,Qn=!0,_i(s,l,u),Bt=p,Qn=f;break;case 0:case 11:case 14:case 15:if(!Vt&&(p=u.updateQueue,p!==null&&(p=p.lastEffect,p!==null))){f=p=p.next;do{var A=f,v=A.destroy;A=A.tag,v!==void 0&&(A&2||A&4)&&Zp(u,l,v),f=f.next}while(f!==p)}_i(s,l,u);break;case 1:if(!Vt&&(Vs(u,l),p=u.stateNode,typeof p.componentWillUnmount=="function"))try{p.props=u.memoizedProps,p.state=u.memoizedState,p.componentWillUnmount()}catch(y){lt(u,l,y)}_i(s,l,u);break;case 21:_i(s,l,u);break;case 22:u.mode&1?(Vt=(p=Vt)||u.memoizedState!==null,_i(s,l,u),Vt=p):_i(s,l,u);break;default:_i(s,l,u)}}function py(s){var l=s.updateQueue;if(l!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new F6),l.forEach(function(p){var f=Z6.bind(null,s,p);u.has(p)||(u.add(p),p.then(f,f))})}}function $n(s,l){var u=l.deletions;if(u!==null)for(var p=0;p<u.length;p++){var f=u[p];try{var A=s,v=l,y=v;e:for(;y!==null;){switch(y.tag){case 5:Bt=y.stateNode,Qn=!1;break e;case 3:Bt=y.stateNode.containerInfo,Qn=!0;break e;case 4:Bt=y.stateNode.containerInfo,Qn=!0;break e}y=y.return}if(Bt===null)throw Error(ee(160));Cx(A,v,f),Bt=null,Qn=!1;var b=f.alternate;b!==null&&(b.return=null),f.return=null}catch(S){lt(f,l,S)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)vx(l,s),l=l.sibling}function vx(s,l){var u=s.alternate,p=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if($n(l,s),Ao(s),p&4){try{Cl(3,s,s.return),ju(3,s)}catch(j){lt(s,s.return,j)}try{Cl(5,s,s.return)}catch(j){lt(s,s.return,j)}}break;case 1:$n(l,s),Ao(s),p&512&&u!==null&&Vs(u,u.return);break;case 5:if($n(l,s),Ao(s),p&512&&u!==null&&Vs(u,u.return),s.flags&32){var f=s.stateNode;try{xl(f,"")}catch(j){lt(s,s.return,j)}}if(p&4&&(f=s.stateNode,f!=null)){var A=s.memoizedProps,v=u!==null?u.memoizedProps:A,y=s.type,b=s.updateQueue;if(s.updateQueue=null,b!==null)try{y==="input"&&A.type==="radio"&&A.name!=null&&Uy(f,A),_p(y,v);var S=_p(y,A);for(v=0;v<b.length;v+=2){var B=b[v],D=b[v+1];B==="style"?Ky(f,D):B==="dangerouslySetInnerHTML"?qy(f,D):B==="children"?xl(f,D):uf(f,B,D,S)}switch(y){case"input":bp(f,A);break;case"textarea":Gy(f,A);break;case"select":var C=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!A.multiple;var E=A.value;E!=null?Us(f,!!A.multiple,E,!1):C!==!!A.multiple&&(A.defaultValue!=null?Us(f,!!A.multiple,A.defaultValue,!0):Us(f,!!A.multiple,A.multiple?[]:"",!1))}f[Ll]=A}catch(j){lt(s,s.return,j)}}break;case 6:if($n(l,s),Ao(s),p&4){if(s.stateNode===null)throw Error(ee(162));f=s.stateNode,A=s.memoizedProps;try{f.nodeValue=A}catch(j){lt(s,s.return,j)}}break;case 3:if($n(l,s),Ao(s),p&4&&u!==null&&u.memoizedState.isDehydrated)try{Tl(l.containerInfo)}catch(j){lt(s,s.return,j)}break;case 4:$n(l,s),Ao(s);break;case 13:$n(l,s),Ao(s),f=s.child,f.flags&8192&&(A=f.memoizedState!==null,f.stateNode.isHidden=A,!A||f.alternate!==null&&f.alternate.memoizedState!==null||(Gf=ht())),p&4&&py(s);break;case 22:if(B=u!==null&&u.memoizedState!==null,s.mode&1?(Vt=(S=Vt)||B,$n(l,s),Vt=S):$n(l,s),Ao(s),p&8192){if(S=s.memoizedState!==null,(s.stateNode.isHidden=S)&&!B&&s.mode&1)for(se=s,B=s.child;B!==null;){for(D=se=B;se!==null;){switch(C=se,E=C.child,C.tag){case 0:case 11:case 14:case 15:Cl(4,C,C.return);break;case 1:Vs(C,C.return);var O=C.stateNode;if(typeof O.componentWillUnmount=="function"){p=C,u=C.return;try{l=p,O.props=l.memoizedProps,O.state=l.memoizedState,O.componentWillUnmount()}catch(j){lt(p,u,j)}}break;case 5:Vs(C,C.return);break;case 22:if(C.memoizedState!==null){ky(D);continue}}E!==null?(E.return=C,se=E):ky(D)}B=B.sibling}e:for(B=null,D=s;;){if(D.tag===5){if(B===null){B=D;try{f=D.stateNode,S?(A=f.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none"):(y=D.stateNode,b=D.memoizedProps.style,v=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=$y("display",v))}catch(j){lt(s,s.return,j)}}}else if(D.tag===6){if(B===null)try{D.stateNode.nodeValue=S?"":D.memoizedProps}catch(j){lt(s,s.return,j)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===s)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===s)break e;for(;D.sibling===null;){if(D.return===null||D.return===s)break e;B===D&&(B=null),D=D.return}B===D&&(B=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:$n(l,s),Ao(s),p&4&&py(s);break;case 21:break;default:$n(l,s),Ao(s)}}function Ao(s){var l=s.flags;if(l&2){try{e:{for(var u=s.return;u!==null;){if(Ax(u)){var p=u;break e}u=u.return}throw Error(ee(160))}switch(p.tag){case 5:var f=p.stateNode;p.flags&32&&(xl(f,""),p.flags&=-33);var A=gy(s);Xp(s,A,f);break;case 3:case 4:var v=p.stateNode.containerInfo,y=gy(s);Jp(s,y,v);break;default:throw Error(ee(161))}}catch(b){lt(s,s.return,b)}s.flags&=-3}l&4096&&(s.flags&=-4097)}function H6(s,l,u){se=s,_x(s)}function _x(s,l,u){for(var p=(s.mode&1)!==0;se!==null;){var f=se,A=f.child;if(f.tag===22&&p){var v=f.memoizedState!==null||Ud;if(!v){var y=f.alternate,b=y!==null&&y.memoizedState!==null||Vt;y=Ud;var S=Vt;if(Ud=v,(Vt=b)&&!S)for(se=f;se!==null;)v=se,b=v.child,v.tag===22&&v.memoizedState!==null?by(f):b!==null?(b.return=v,se=b):by(f);for(;A!==null;)se=A,_x(A),A=A.sibling;se=f,Ud=y,Vt=S}fy(s)}else f.subtreeFlags&8772&&A!==null?(A.return=f,se=A):fy(s)}}function fy(s){for(;se!==null;){var l=se;if(l.flags&8772){var u=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:Vt||ju(5,l);break;case 1:var p=l.stateNode;if(l.flags&4&&!Vt)if(u===null)p.componentDidMount();else{var f=l.elementType===l.type?u.memoizedProps:Kn(l.type,u.memoizedProps);p.componentDidUpdate(f,u.memoizedState,p.__reactInternalSnapshotBeforeUpdate)}var A=l.updateQueue;A!==null&&X1(l,A,p);break;case 3:var v=l.updateQueue;if(v!==null){if(u=null,l.child!==null)switch(l.child.tag){case 5:u=l.child.stateNode;break;case 1:u=l.child.stateNode}X1(l,v,u)}break;case 5:var y=l.stateNode;if(u===null&&l.flags&4){u=y;var b=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&u.focus();break;case"img":b.src&&(u.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var S=l.alternate;if(S!==null){var B=S.memoizedState;if(B!==null){var D=B.dehydrated;D!==null&&Tl(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Vt||l.flags&512&&Yp(l)}catch(C){lt(l,l.return,C)}}if(l===s){se=null;break}if(u=l.sibling,u!==null){u.return=l.return,se=u;break}se=l.return}}function ky(s){for(;se!==null;){var l=se;if(l===s){se=null;break}var u=l.sibling;if(u!==null){u.return=l.return,se=u;break}se=l.return}}function by(s){for(;se!==null;){var l=se;try{switch(l.tag){case 0:case 11:case 15:var u=l.return;try{ju(4,l)}catch(b){lt(l,u,b)}break;case 1:var p=l.stateNode;if(typeof p.componentDidMount=="function"){var f=l.return;try{p.componentDidMount()}catch(b){lt(l,f,b)}}var A=l.return;try{Yp(l)}catch(b){lt(l,A,b)}break;case 5:var v=l.return;try{Yp(l)}catch(b){lt(l,v,b)}}}catch(b){lt(l,l.return,b)}if(l===s){se=null;break}var y=l.sibling;if(y!==null){y.return=l.return,se=y;break}se=l.return}}var U6=Math.ceil,_u=Yo.ReactCurrentDispatcher,Hf=Yo.ReactCurrentOwner,zn=Yo.ReactCurrentBatchConfig,Ee=0,xt=null,pt=null,Nt=0,An=0,Hs=Hi(0),At=0,Fl=null,Lr=0,Fu=0,Uf=0,vl=null,Xt=null,Gf=0,ta=1/0,Ho=null,yu=!1,ef=null,zi=null,Gd=!1,Ii=null,xu=0,_l=0,tf=null,tu=-1,nu=0;function Gt(){return Ee&6?ht():tu!==-1?tu:tu=ht()}function Oi(s){return s.mode&1?Ee&2&&Nt!==0?Nt&-Nt:E6.transition!==null?(nu===0&&(nu=s2()),nu):(s=Le,s!==0||(s=window.event,s=s===void 0?16:m2(s.type)),s):1}function Jn(s,l,u,p){if(50<_l)throw _l=0,tf=null,Error(ee(185));Hl(s,u,p),(!(Ee&2)||s!==xt)&&(s===xt&&(!(Ee&2)&&(Fu|=u),At===4&&Di(s,Nt)),on(s,p),u===1&&Ee===0&&!(l.mode&1)&&(ta=ht()+500,zu&&Ui()))}function on(s,l){var u=s.callbackNode;EL(s,l);var p=lu(s,s===xt?Nt:0);if(p===0)u!==null&&D1(u),s.callbackNode=null,s.callbackPriority=0;else if(l=p&-p,s.callbackPriority!==l){if(u!=null&&D1(u),l===1)s.tag===0?x6(wy.bind(null,s)):B2(wy.bind(null,s)),C6(function(){!(Ee&6)&&Ui()}),u=null;else{switch(a2(p)){case 1:u=ff;break;case 4:u=i2;break;case 16:u=au;break;case 536870912:u=r2;break;default:u=au}u=Mx(u,yx.bind(null,s))}s.callbackPriority=l,s.callbackNode=u}}function yx(s,l){if(tu=-1,nu=0,Ee&6)throw Error(ee(327));var u=s.callbackNode;if(Ks()&&s.callbackNode!==u)return null;var p=lu(s,s===xt?Nt:0);if(p===0)return null;if(p&30||p&s.expiredLanes||l)l=Eu(s,p);else{l=p;var f=Ee;Ee|=2;var A=Ex();(xt!==s||Nt!==l)&&(Ho=null,ta=ht()+500,Tr(s,l));do try{q6();break}catch(y){xx(s,y)}while(1);Tf(),_u.current=A,Ee=f,pt!==null?l=0:(xt=null,Nt=0,l=At)}if(l!==0){if(l===2&&(f=Sp(s),f!==0&&(p=f,l=nf(s,f))),l===1)throw u=Fl,Tr(s,0),Di(s,p),on(s,ht()),u;if(l===6)Di(s,p);else{if(f=s.current.alternate,!(p&30)&&!G6(f)&&(l=Eu(s,p),l===2&&(A=Sp(s),A!==0&&(p=A,l=nf(s,A))),l===1))throw u=Fl,Tr(s,0),Di(s,p),on(s,ht()),u;switch(s.finishedWork=f,s.finishedLanes=p,l){case 0:case 1:throw Error(ee(345));case 2:xr(s,Xt,Ho);break;case 3:if(Di(s,p),(p&130023424)===p&&(l=Gf+500-ht(),10<l)){if(lu(s,0)!==0)break;if(f=s.suspendedLanes,(f&p)!==p){Gt(),s.pingedLanes|=s.suspendedLanes&f;break}s.timeoutHandle=zp(xr.bind(null,s,Xt,Ho),l);break}xr(s,Xt,Ho);break;case 4:if(Di(s,p),(p&4194240)===p)break;for(l=s.eventTimes,f=-1;0<p;){var v=31-Yn(p);A=1<<v,v=l[v],v>f&&(f=v),p&=~A}if(p=f,p=ht()-p,p=(120>p?120:480>p?480:1080>p?1080:1920>p?1920:3e3>p?3e3:4320>p?4320:1960*U6(p/1960))-p,10<p){s.timeoutHandle=zp(xr.bind(null,s,Xt,Ho),p);break}xr(s,Xt,Ho);break;case 5:xr(s,Xt,Ho);break;default:throw Error(ee(329))}}}return on(s,ht()),s.callbackNode===u?yx.bind(null,s):null}function nf(s,l){var u=vl;return s.current.memoizedState.isDehydrated&&(Tr(s,l).flags|=256),s=Eu(s,l),s!==2&&(l=Xt,Xt=u,l!==null&&of(l)),s}function of(s){Xt===null?Xt=s:Xt.push.apply(Xt,s)}function G6(s){for(var l=s;;){if(l.flags&16384){var u=l.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var p=0;p<u.length;p++){var f=u[p],A=f.getSnapshot;f=f.value;try{if(!Xn(A(),f))return!1}catch{return!1}}}if(u=l.child,l.subtreeFlags&16384&&u!==null)u.return=l,l=u;else{if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Di(s,l){for(l&=~Uf,l&=~Fu,s.suspendedLanes|=l,s.pingedLanes&=~l,s=s.expirationTimes;0<l;){var u=31-Yn(l),p=1<<u;s[u]=-1,l&=~p}}function wy(s){if(Ee&6)throw Error(ee(327));Ks();var l=lu(s,0);if(!(l&1))return on(s,ht()),null;var u=Eu(s,l);if(s.tag!==0&&u===2){var p=Sp(s);p!==0&&(l=p,u=nf(s,p))}if(u===1)throw u=Fl,Tr(s,0),Di(s,l),on(s,ht()),u;if(u===6)throw Error(ee(345));return s.finishedWork=s.current.alternate,s.finishedLanes=l,xr(s,Xt,Ho),on(s,ht()),null}function Wf(s,l){var u=Ee;Ee|=1;try{return s(l)}finally{Ee=u,Ee===0&&(ta=ht()+500,zu&&Ui())}}function Pr(s){Ii!==null&&Ii.tag===0&&!(Ee&6)&&Ks();var l=Ee;Ee|=1;var u=zn.transition,p=Le;try{if(zn.transition=null,Le=1,s)return s()}finally{Le=p,zn.transition=u,Ee=l,!(Ee&6)&&Ui()}}function qf(){An=Hs.current,Ke(Hs)}function Tr(s,l){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,A6(u)),pt!==null)for(u=pt.return;u!==null;){var p=u;switch(Ef(p),p.tag){case 1:p=p.type.childContextTypes,p!=null&&mu();break;case 3:Xs(),Ke(tn),Ke(Ht),Pf();break;case 5:Lf(p);break;case 4:Xs();break;case 13:Ke(nt);break;case 19:Ke(nt);break;case 10:If(p.type._context);break;case 22:case 23:qf()}u=u.return}if(xt=s,pt=s=Ri(s.current,null),Nt=An=l,At=0,Fl=null,Uf=Fu=Lr=0,Xt=vl=null,Dr!==null){for(l=0;l<Dr.length;l++)if(u=Dr[l],p=u.interleaved,p!==null){u.interleaved=null;var f=p.next,A=u.pending;if(A!==null){var v=A.next;A.next=f,p.next=v}u.pending=p}Dr=null}return s}function xx(s,l){do{var u=pt;try{if(Tf(),Jd.current=vu,Cu){for(var p=ot.memoizedState;p!==null;){var f=p.queue;f!==null&&(f.pending=null),p=p.next}Cu=!1}if(Nr=0,yt=wt=ot=null,Al=!1,Ol=0,Hf.current=null,u===null||u.return===null){At=1,Fl=l,pt=null;break}e:{var A=s,v=u.return,y=u,b=l;if(l=Nt,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var S=b,B=y,D=B.tag;if(!(B.mode&1)&&(D===0||D===11||D===15)){var C=B.alternate;C?(B.updateQueue=C.updateQueue,B.memoizedState=C.memoizedState,B.lanes=C.lanes):(B.updateQueue=null,B.memoizedState=null)}var E=sy(v);if(E!==null){E.flags&=-257,ay(E,v,y,A,l),E.mode&1&&ry(A,S,l),l=E,b=S;var O=l.updateQueue;if(O===null){var j=new Set;j.add(b),l.updateQueue=j}else O.add(b);break e}else{if(!(l&1)){ry(A,S,l),$f();break e}b=Error(ee(426))}}else if(Ye&&y.mode&1){var H=sy(v);if(H!==null){!(H.flags&65536)&&(H.flags|=256),ay(H,v,y,A,l),Df(ea(b,y));break e}}A=b=ea(b,y),At!==4&&(At=2),vl===null?vl=[A]:vl.push(A),A=v;do{switch(A.tag){case 3:A.flags|=65536,l&=-l,A.lanes|=l;var z=lx(A,b,l);J1(A,z);break e;case 1:y=b;var P=A.type,R=A.stateNode;if(!(A.flags&128)&&(typeof P.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(zi===null||!zi.has(R)))){A.flags|=65536,l&=-l,A.lanes|=l;var U=cx(A,y,l);J1(A,U);break e}}A=A.return}while(A!==null)}Sx(u)}catch(Q){l=Q,pt===u&&u!==null&&(pt=u=u.return);continue}break}while(1)}function Ex(){var s=_u.current;return _u.current=vu,s===null?vu:s}function $f(){(At===0||At===3||At===2)&&(At=4),xt===null||!(Lr&268435455)&&!(Fu&268435455)||Di(xt,Nt)}function Eu(s,l){var u=Ee;Ee|=2;var p=Ex();(xt!==s||Nt!==l)&&(Ho=null,Tr(s,l));do try{W6();break}catch(f){xx(s,f)}while(1);if(Tf(),Ee=u,_u.current=p,pt!==null)throw Error(ee(261));return xt=null,Nt=0,At}function W6(){for(;pt!==null;)Dx(pt)}function q6(){for(;pt!==null&&!kL();)Dx(pt)}function Dx(s){var l=Ix(s.alternate,s,An);s.memoizedProps=s.pendingProps,l===null?Sx(s):pt=l,Hf.current=null}function Sx(s){var l=s;do{var u=l.alternate;if(s=l.return,l.flags&32768){if(u=j6(u,l),u!==null){u.flags&=32767,pt=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{At=6,pt=null;return}}else if(u=R6(u,l,An),u!==null){pt=u;return}if(l=l.sibling,l!==null){pt=l;return}pt=l=s}while(l!==null);At===0&&(At=5)}function xr(s,l,u){var p=Le,f=zn.transition;try{zn.transition=null,Le=1,$6(s,l,u,p)}finally{zn.transition=f,Le=p}return null}function $6(s,l,u,p){do Ks();while(Ii!==null);if(Ee&6)throw Error(ee(327));u=s.finishedWork;var f=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(ee(177));s.callbackNode=null,s.callbackPriority=0;var A=u.lanes|u.childLanes;if(DL(s,A),s===xt&&(pt=xt=null,Nt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Gd||(Gd=!0,Mx(au,function(){return Ks(),null})),A=(u.flags&15990)!==0,u.subtreeFlags&15990||A){A=zn.transition,zn.transition=null;var v=Le;Le=1;var y=Ee;Ee|=4,Hf.current=null,V6(s,u),vx(u,s),m6(Lp),cu=!!Np,Lp=Np=null,s.current=u,H6(u),bL(),Ee=y,Le=v,zn.transition=A}else s.current=u;if(Gd&&(Gd=!1,Ii=s,xu=f),A=s.pendingLanes,A===0&&(zi=null),CL(u.stateNode),on(s,ht()),l!==null)for(p=s.onRecoverableError,u=0;u<l.length;u++)f=l[u],p(f.value,{componentStack:f.stack,digest:f.digest});if(yu)throw yu=!1,s=ef,ef=null,s;return xu&1&&s.tag!==0&&Ks(),A=s.pendingLanes,A&1?s===tf?_l++:(_l=0,tf=s):_l=0,Ui(),null}function Ks(){if(Ii!==null){var s=a2(xu),l=zn.transition,u=Le;try{if(zn.transition=null,Le=16>s?16:s,Ii===null)var p=!1;else{if(s=Ii,Ii=null,xu=0,Ee&6)throw Error(ee(331));var f=Ee;for(Ee|=4,se=s.current;se!==null;){var A=se,v=A.child;if(se.flags&16){var y=A.deletions;if(y!==null){for(var b=0;b<y.length;b++){var S=y[b];for(se=S;se!==null;){var B=se;switch(B.tag){case 0:case 11:case 15:Cl(8,B,A)}var D=B.child;if(D!==null)D.return=B,se=D;else for(;se!==null;){B=se;var C=B.sibling,E=B.return;if(wx(B),B===S){se=null;break}if(C!==null){C.return=E,se=C;break}se=E}}}var O=A.alternate;if(O!==null){var j=O.child;if(j!==null){O.child=null;do{var H=j.sibling;j.sibling=null,j=H}while(j!==null)}}se=A}}if(A.subtreeFlags&2064&&v!==null)v.return=A,se=v;else e:for(;se!==null;){if(A=se,A.flags&2048)switch(A.tag){case 0:case 11:case 15:Cl(9,A,A.return)}var z=A.sibling;if(z!==null){z.return=A.return,se=z;break e}se=A.return}}var P=s.current;for(se=P;se!==null;){v=se;var R=v.child;if(v.subtreeFlags&2064&&R!==null)R.return=v,se=R;else e:for(v=P;se!==null;){if(y=se,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:ju(9,y)}}catch(Q){lt(y,y.return,Q)}if(y===v){se=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,se=U;break e}se=y.return}}if(Ee=f,Ui(),_o&&typeof _o.onPostCommitFiberRoot=="function")try{_o.onPostCommitFiberRoot(Mu,s)}catch{}p=!0}return p}finally{Le=u,zn.transition=l}}return!1}function Ay(s,l,u){l=ea(u,l),l=lx(s,l,1),s=Pi(s,l,1),l=Gt(),s!==null&&(Hl(s,1,l),on(s,l))}function lt(s,l,u){if(s.tag===3)Ay(s,s,u);else for(;l!==null;){if(l.tag===3){Ay(l,s,u);break}else if(l.tag===1){var p=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof p.componentDidCatch=="function"&&(zi===null||!zi.has(p))){s=ea(u,s),s=cx(l,s,1),l=Pi(l,s,1),s=Gt(),l!==null&&(Hl(l,1,s),on(l,s));break}}l=l.return}}function K6(s,l,u){var p=s.pingCache;p!==null&&p.delete(l),l=Gt(),s.pingedLanes|=s.suspendedLanes&u,xt===s&&(Nt&u)===u&&(At===4||At===3&&(Nt&130023424)===Nt&&500>ht()-Gf?Tr(s,0):Uf|=u),on(s,l)}function Tx(s,l){l===0&&(s.mode&1?(l=Ld,Ld<<=1,!(Ld&130023424)&&(Ld=4194304)):l=1);var u=Gt();s=Qo(s,l),s!==null&&(Hl(s,l,u),on(s,u))}function Q6(s){var l=s.memoizedState,u=0;l!==null&&(u=l.retryLane),Tx(s,u)}function Z6(s,l){var u=0;switch(s.tag){case 13:var p=s.stateNode,f=s.memoizedState;f!==null&&(u=f.retryLane);break;case 19:p=s.stateNode;break;default:throw Error(ee(314))}p!==null&&p.delete(l),Tx(s,u)}var Ix;Ix=function(s,l,u){if(s!==null)if(s.memoizedProps!==l.pendingProps||tn.current)en=!0;else{if(!(s.lanes&u)&&!(l.flags&128))return en=!1,O6(s,l,u);en=!!(s.flags&131072)}else en=!1,Ye&&l.flags&1048576&&N2(l,fu,l.index);switch(l.lanes=0,l.tag){case 2:var p=l.type;eu(s,l),s=l.pendingProps;var f=Zs(l,Ht.current);$s(l,u),f=Of(null,l,p,s,f,u);var A=Rf();return l.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,nn(p)?(A=!0,gu(l)):A=!1,l.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Bf(l),f.updater=Ou,l.stateNode=f,f._reactInternals=l,Up(l,p,s,u),l=qp(null,l,p,!0,A,u)):(l.tag=0,Ye&&A&&xf(l),Ut(null,l,f,u),l=l.child),l;case 16:p=l.elementType;e:{switch(eu(s,l),s=l.pendingProps,f=p._init,p=f(p._payload),l.type=p,f=l.tag=J6(p),s=Kn(p,s),f){case 0:l=Wp(null,l,p,s,u);break e;case 1:l=dy(null,l,p,s,u);break e;case 11:l=ly(null,l,p,s,u);break e;case 14:l=cy(null,l,p,Kn(p.type,s),u);break e}throw Error(ee(306,p,""))}return l;case 0:return p=l.type,f=l.pendingProps,f=l.elementType===p?f:Kn(p,f),Wp(s,l,p,f,u);case 1:return p=l.type,f=l.pendingProps,f=l.elementType===p?f:Kn(p,f),dy(s,l,p,f,u);case 3:e:{if(mx(l),s===null)throw Error(ee(387));p=l.pendingProps,A=l.memoizedState,f=A.element,O2(s,l),wu(l,p,null,u);var v=l.memoizedState;if(p=v.element,A.isDehydrated)if(A={element:p,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},l.updateQueue.baseState=A,l.memoizedState=A,l.flags&256){f=ea(Error(ee(423)),l),l=uy(s,l,p,u,f);break e}else if(p!==f){f=ea(Error(ee(424)),l),l=uy(s,l,p,u,f);break e}else for(Cn=Li(l.stateNode.containerInfo.firstChild),vn=l,Ye=!0,Zn=null,u=V2(l,null,p,u),l.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Ys(),p===f){l=Zo(s,l,u);break e}Ut(s,l,p,u)}l=l.child}return l;case 5:return H2(l),s===null&&Fp(l),p=l.type,f=l.pendingProps,A=s!==null?s.memoizedProps:null,v=f.children,Pp(p,f)?v=null:A!==null&&Pp(p,A)&&(l.flags|=32),hx(s,l),Ut(s,l,v,u),l.child;case 6:return s===null&&Fp(l),null;case 13:return gx(s,l,u);case 4:return Nf(l,l.stateNode.containerInfo),p=l.pendingProps,s===null?l.child=Js(l,null,p,u):Ut(s,l,p,u),l.child;case 11:return p=l.type,f=l.pendingProps,f=l.elementType===p?f:Kn(p,f),ly(s,l,p,f,u);case 7:return Ut(s,l,l.pendingProps,u),l.child;case 8:return Ut(s,l,l.pendingProps.children,u),l.child;case 12:return Ut(s,l,l.pendingProps.children,u),l.child;case 10:e:{if(p=l.type._context,f=l.pendingProps,A=l.memoizedProps,v=f.value,Ge(ku,p._currentValue),p._currentValue=v,A!==null)if(Xn(A.value,v)){if(A.children===f.children&&!tn.current){l=Zo(s,l,u);break e}}else for(A=l.child,A!==null&&(A.return=l);A!==null;){var y=A.dependencies;if(y!==null){v=A.child;for(var b=y.firstContext;b!==null;){if(b.context===p){if(A.tag===1){b=qo(-1,u&-u),b.tag=2;var S=A.updateQueue;if(S!==null){S=S.shared;var B=S.pending;B===null?b.next=b:(b.next=B.next,B.next=b),S.pending=b}}A.lanes|=u,b=A.alternate,b!==null&&(b.lanes|=u),Vp(A.return,u,l),y.lanes|=u;break}b=b.next}}else if(A.tag===10)v=A.type===l.type?null:A.child;else if(A.tag===18){if(v=A.return,v===null)throw Error(ee(341));v.lanes|=u,y=v.alternate,y!==null&&(y.lanes|=u),Vp(v,u,l),v=A.sibling}else v=A.child;if(v!==null)v.return=A;else for(v=A;v!==null;){if(v===l){v=null;break}if(A=v.sibling,A!==null){A.return=v.return,v=A;break}v=v.return}A=v}Ut(s,l,f.children,u),l=l.child}return l;case 9:return f=l.type,p=l.pendingProps.children,$s(l,u),f=On(f),p=p(f),l.flags|=1,Ut(s,l,p,u),l.child;case 14:return p=l.type,f=Kn(p,l.pendingProps),f=Kn(p.type,f),cy(s,l,p,f,u);case 15:return dx(s,l,l.type,l.pendingProps,u);case 17:return p=l.type,f=l.pendingProps,f=l.elementType===p?f:Kn(p,f),eu(s,l),l.tag=1,nn(p)?(s=!0,gu(l)):s=!1,$s(l,u),j2(l,p,f),Up(l,p,f,u),qp(null,l,p,!0,s,u);case 19:return px(s,l,u);case 22:return ux(s,l,u)}throw Error(ee(156,l.tag))};function Mx(s,l){return o2(s,l)}function Y6(s,l,u,p){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=p,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(s,l,u,p){return new Y6(s,l,u,p)}function Kf(s){return s=s.prototype,!(!s||!s.isReactComponent)}function J6(s){if(typeof s=="function")return Kf(s)?1:0;if(s!=null){if(s=s.$$typeof,s===mf)return 11;if(s===gf)return 14}return 2}function Ri(s,l){var u=s.alternate;return u===null?(u=Pn(s.tag,l,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=l,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,l=s.dependencies,u.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function ou(s,l,u,p,f,A){var v=2;if(p=s,typeof s=="function")Kf(s)&&(v=1);else if(typeof s=="string")v=5;else e:switch(s){case Bs:return Ir(u.children,f,A,l);case hf:v=8,f|=8;break;case mp:return s=Pn(12,u,l,f|2),s.elementType=mp,s.lanes=A,s;case gp:return s=Pn(13,u,l,f),s.elementType=gp,s.lanes=A,s;case pp:return s=Pn(19,u,l,f),s.elementType=pp,s.lanes=A,s;case Fy:return Vu(u,f,A,l);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Ry:v=10;break e;case jy:v=9;break e;case mf:v=11;break e;case gf:v=14;break e;case yi:v=16,p=null;break e}throw Error(ee(130,s==null?s:typeof s,""))}return l=Pn(v,u,l,f),l.elementType=s,l.type=p,l.lanes=A,l}function Ir(s,l,u,p){return s=Pn(7,s,p,l),s.lanes=u,s}function Vu(s,l,u,p){return s=Pn(22,s,p,l),s.elementType=Fy,s.lanes=u,s.stateNode={isHidden:!1},s}function cp(s,l,u){return s=Pn(6,s,null,l),s.lanes=u,s}function dp(s,l,u){return l=Pn(4,s.children!==null?s.children:[],s.key,l),l.lanes=u,l.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},l}function X6(s,l,u,p,f){this.tag=l,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gg(0),this.expirationTimes=Gg(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gg(0),this.identifierPrefix=p,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Qf(s,l,u,p,f,A,v,y,b){return s=new X6(s,l,u,y,b),l===1?(l=1,A===!0&&(l|=8)):l=0,A=Pn(3,null,null,l),s.current=A,A.stateNode=s,A.memoizedState={element:p,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bf(A),s}function eP(s,l,u){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:p==null?null:""+p,children:s,containerInfo:l,implementation:u}}function Bx(s){if(!s)return Fi;s=s._reactInternals;e:{if(Or(s)!==s||s.tag!==1)throw Error(ee(170));var l=s;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(nn(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(ee(171))}if(s.tag===1){var u=s.type;if(nn(u))return M2(s,u,l)}return l}function Nx(s,l,u,p,f,A,v,y,b){return s=Qf(u,p,!0,s,f,A,v,y,b),s.context=Bx(null),u=s.current,p=Gt(),f=Oi(u),A=qo(p,f),A.callback=l??null,Pi(u,A,f),s.current.lanes=f,Hl(s,f,p),on(s,p),s}function Hu(s,l,u,p){var f=l.current,A=Gt(),v=Oi(f);return u=Bx(u),l.context===null?l.context=u:l.pendingContext=u,l=qo(A,v),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Pi(f,l,v),s!==null&&(Jn(s,f,v,A),Yd(s,f,v)),v}function Du(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Cy(s,l){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<l?u:l}}function Zf(s,l){Cy(s,l),(s=s.alternate)&&Cy(s,l)}function tP(){return null}var Lx=typeof reportError=="function"?reportError:function(s){console.error(s)};function Yf(s){this._internalRoot=s}Uu.prototype.render=Yf.prototype.render=function(s){var l=this._internalRoot;if(l===null)throw Error(ee(409));Hu(s,l,null,null)};Uu.prototype.unmount=Yf.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var l=s.containerInfo;Pr(function(){Hu(null,s,null,null)}),l[Ko]=null}};function Uu(s){this._internalRoot=s}Uu.prototype.unstable_scheduleHydration=function(s){if(s){var l=d2();s={blockedOn:null,target:s,priority:l};for(var u=0;u<Ei.length&&l!==0&&l<Ei[u].priority;u++);Ei.splice(u,0,s),u===0&&h2(s)}};function Jf(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Gu(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function vy(){}function nP(s,l,u,p,f){if(f){if(typeof p=="function"){var A=p;p=function(){var S=Du(v);A.call(S)}}var v=Nx(l,p,s,0,null,!1,!1,"",vy);return s._reactRootContainer=v,s[Ko]=v.current,Bl(s.nodeType===8?s.parentNode:s),Pr(),v}for(;f=s.lastChild;)s.removeChild(f);if(typeof p=="function"){var y=p;p=function(){var S=Du(b);y.call(S)}}var b=Qf(s,0,!1,null,null,!1,!1,"",vy);return s._reactRootContainer=b,s[Ko]=b.current,Bl(s.nodeType===8?s.parentNode:s),Pr(function(){Hu(l,b,u,p)}),b}function Wu(s,l,u,p,f){var A=u._reactRootContainer;if(A){var v=A;if(typeof f=="function"){var y=f;f=function(){var b=Du(v);y.call(b)}}Hu(l,v,s,f)}else v=nP(u,l,s,f,p);return Du(v)}l2=function(s){switch(s.tag){case 3:var l=s.stateNode;if(l.current.memoizedState.isDehydrated){var u=ml(l.pendingLanes);u!==0&&(kf(l,u|1),on(l,ht()),!(Ee&6)&&(ta=ht()+500,Ui()))}break;case 13:Pr(function(){var p=Qo(s,1);if(p!==null){var f=Gt();Jn(p,s,1,f)}}),Zf(s,1)}};bf=function(s){if(s.tag===13){var l=Qo(s,134217728);if(l!==null){var u=Gt();Jn(l,s,134217728,u)}Zf(s,134217728)}};c2=function(s){if(s.tag===13){var l=Oi(s),u=Qo(s,l);if(u!==null){var p=Gt();Jn(u,s,l,p)}Zf(s,l)}};d2=function(){return Le};u2=function(s,l){var u=Le;try{return Le=s,l()}finally{Le=u}};xp=function(s,l,u){switch(l){case"input":if(bp(s,u),l=u.name,u.type==="radio"&&l!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<u.length;l++){var p=u[l];if(p!==s&&p.form===s.form){var f=Pu(p);if(!f)throw Error(ee(90));Hy(p),bp(p,f)}}}break;case"textarea":Gy(s,u);break;case"select":l=u.value,l!=null&&Us(s,!!u.multiple,l,!1)}};Yy=Wf;Jy=Pr;var oP={usingClientEntryPoint:!1,Events:[Gl,zs,Pu,Qy,Zy,Wf]},dl={findFiberByHostInstance:Er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iP={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yo.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=t2(s),s===null?null:s.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||tP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wd.isDisabled&&Wd.supportsFiber)try{Mu=Wd.inject(iP),_o=Wd}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oP;yn.createPortal=function(s,l){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(l))throw Error(ee(200));return eP(s,l,null,u)};yn.createRoot=function(s,l){if(!Jf(s))throw Error(ee(299));var u=!1,p="",f=Lx;return l!=null&&(l.unstable_strictMode===!0&&(u=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onRecoverableError!==void 0&&(f=l.onRecoverableError)),l=Qf(s,1,!1,null,null,u,!1,p,f),s[Ko]=l.current,Bl(s.nodeType===8?s.parentNode:s),new Yf(l)};yn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var l=s._reactInternals;if(l===void 0)throw typeof s.render=="function"?Error(ee(188)):(s=Object.keys(s).join(","),Error(ee(268,s)));return s=t2(l),s=s===null?null:s.stateNode,s};yn.flushSync=function(s){return Pr(s)};yn.hydrate=function(s,l,u){if(!Gu(l))throw Error(ee(200));return Wu(null,s,l,!0,u)};yn.hydrateRoot=function(s,l,u){if(!Jf(s))throw Error(ee(405));var p=u!=null&&u.hydratedSources||null,f=!1,A="",v=Lx;if(u!=null&&(u.unstable_strictMode===!0&&(f=!0),u.identifierPrefix!==void 0&&(A=u.identifierPrefix),u.onRecoverableError!==void 0&&(v=u.onRecoverableError)),l=Nx(l,null,s,1,u??null,f,!1,A,v),s[Ko]=l.current,Bl(s),p)for(s=0;s<p.length;s++)u=p[s],f=u._getVersion,f=f(u._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[u,f]:l.mutableSourceEagerHydrationData.push(u,f);return new Uu(l)};yn.render=function(s,l,u){if(!Gu(l))throw Error(ee(200));return Wu(null,s,l,!1,u)};yn.unmountComponentAtNode=function(s){if(!Gu(s))throw Error(ee(40));return s._reactRootContainer?(Pr(function(){Wu(null,null,s,!1,function(){s._reactRootContainer=null,s[Ko]=null})}),!0):!1};yn.unstable_batchedUpdates=Wf;yn.unstable_renderSubtreeIntoContainer=function(s,l,u,p){if(!Gu(u))throw Error(ee(200));if(s==null||s._reactInternals===void 0)throw Error(ee(38));return Wu(s,l,u,!1,p)};yn.version="18.2.0-next-9e3b772b8-20220608";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(s){console.error(s)}}Px(),Ny.exports=yn;var rP=Ny.exports,zx,_y=rP;zx=_y.createRoot,_y.hydrateRoot;var Su={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Su.exports;(function(s,l){(function(u,p){s.exports=p(Iu)})(self,u=>(()=>{var p={703:(y,b,S)=>{var B=S(414);function D(){}function C(){}C.resetWarningCache=D,y.exports=function(){function E(H,z,P,R,U,Q){if(Q!==B){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}function O(){return E}E.isRequired=E;var j={array:E,bigint:E,bool:E,func:E,number:E,object:E,string:E,symbol:E,any:E,arrayOf:O,element:E,elementType:E,instanceOf:O,node:E,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:C,resetWarningCache:D};return j.PropTypes=j,j}},697:(y,b,S)=>{y.exports=S(703)()},414:y=>{y.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:y=>{y.exports=u}},f={};function A(y){var b=f[y];if(b!==void 0)return b.exports;var S=f[y]={exports:{}};return p[y](S,S.exports,A),S.exports}A.n=y=>{var b=y&&y.__esModule?()=>y.default:()=>y;return A.d(b,{a:b}),b},A.d=(y,b)=>{for(var S in b)A.o(b,S)&&!A.o(y,S)&&Object.defineProperty(y,S,{enumerable:!0,get:b[S]})},A.o=(y,b)=>Object.prototype.hasOwnProperty.call(y,b),A.r=y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var v={};return(()=>{A.r(v),A.d(v,{CKEditor:()=>ci,CKEditorContext:()=>nr});var y=A(787),b=A.n(y),S=A(697),B=A.n(S);const D=new Array(256).fill("").map((T,M)=>("0"+M.toString(16)).slice(-2));class C{constructor(M){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof M.crashNumberLimit=="number"?M.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof M.minimumNonErrorTimePeriod=="number"?M.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=F=>{const G="error"in F?F.error:F.reason;G instanceof Error&&this._handleError(G,F)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(M,F){this._listeners[M]||(this._listeners[M]=[]),this._listeners[M].push(F)}off(M,F){this._listeners[M]=this._listeners[M].filter(G=>G!==F)}_fire(M,...F){const G=this._listeners[M]||[];for(const le of G)le.apply(this,[null,...F])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(M,F){if(this._shouldReactToError(M)){this.crashes.push({message:M.message,stack:M.stack,filename:F instanceof ErrorEvent?F.filename:void 0,lineno:F instanceof ErrorEvent?F.lineno:void 0,colno:F instanceof ErrorEvent?F.colno:void 0,date:this._now()});const G=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:M,causesRestart:G}),G?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(M){return M.is&&M.is("CKEditorError")&&M.context!==void 0&&M.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(M)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function E(T,M=new Set){const F=[T],G=new Set;let le=0;for(;F.length>le;){const me=F[le++];if(!G.has(me)&&O(me)&&!M.has(me))if(G.add(me),Symbol.iterator in me)try{for(const ke of me)F.push(ke)}catch{}else for(const ke in me)ke!=="defaultValue"&&F.push(me[ke])}return G}function O(T){const M=Object.prototype.toString.call(T),F=typeof T;return!(F==="number"||F==="boolean"||F==="string"||F==="symbol"||F==="function"||M==="[object Date]"||M==="[object RegExp]"||M==="[object Module]"||T==null||T._watchdogExcluded||T instanceof EventTarget||T instanceof Event)}function j(T,M,F=new Set){if(T===M&&typeof(G=T)=="object"&&G!==null)return!0;var G;const le=E(T,F),me=E(M,F);for(const ke of le)if(me.has(ke))return!0;return!1}const H=function(T){var M=typeof T;return T!=null&&(M=="object"||M=="function")},z=typeof Si=="object"&&Si&&Si.Object===Object&&Si;var P=typeof self=="object"&&self&&self.Object===Object&&self;const R=z||P||Function("return this")(),U=function(){return R.Date.now()};var Q=/\s/;const X=function(T){for(var M=T.length;M--&&Q.test(T.charAt(M)););return M};var K=/^\s+/;const J=function(T){return T&&T.slice(0,X(T)+1).replace(K,"")},N=R.Symbol;var te=Object.prototype,we=te.hasOwnProperty,Te=te.toString,_e=N?N.toStringTag:void 0;const rn=function(T){var M=we.call(T,_e),F=T[_e];try{T[_e]=void 0;var G=!0}catch{}var le=Te.call(T);return G&&(M?T[_e]=F:delete T[_e]),le};var sn=Object.prototype.toString;const Pt=function(T){return sn.call(T)};var an=N?N.toStringTag:void 0;const ie=function(T){return T==null?T===void 0?"[object Undefined]":"[object Null]":an&&an in Object(T)?rn(T):Pt(T)},de=function(T){return T!=null&&typeof T=="object"},re=function(T){return typeof T=="symbol"||de(T)&&ie(T)=="[object Symbol]"};var He=/^[-+]0x[0-9a-f]+$/i,Qe=/^0b[01]+$/i,xo=/^0o[0-7]+$/i,ln=parseInt;const Eo=function(T){if(typeof T=="number")return T;if(re(T))return NaN;if(H(T)){var M=typeof T.valueOf=="function"?T.valueOf():T;T=H(M)?M+"":M}if(typeof T!="string")return T===0?T:+T;T=J(T);var F=Qe.test(T);return F||xo.test(T)?ln(T.slice(2),F?2:8):He.test(T)?NaN:+T};var En=Math.max,eo=Math.min;const je=function(T,M,F){var G,le,me,ke,fe,Xe,Ue=0,os=!1,No=!1,un=!0;if(typeof T!="function")throw new TypeError("Expected a function");function di(St){var hn=G,Ot=le;return G=le=void 0,Ue=St,ke=T.apply(Ot,hn)}function ui(St){var hn=St-Xe;return Xe===void 0||hn>=M||hn<0||No&&St-Ue>=me}function lo(){var St=U();if(ui(St))return $t(St);fe=setTimeout(lo,function(hn){var Ot=M-(hn-Xe);return No?eo(Ot,me-(hn-Ue)):Ot}(St))}function $t(St){return fe=void 0,un&&G?di(St):(G=le=void 0,ke)}function Ae(){var St=U(),hn=ui(St);if(G=arguments,le=this,Xe=St,hn){if(fe===void 0)return function(Ot){return Ue=Ot,fe=setTimeout(lo,M),os?di(Ot):ke}(Xe);if(No)return clearTimeout(fe),fe=setTimeout(lo,M),di(Xe)}return fe===void 0&&(fe=setTimeout(lo,M)),ke}return M=Eo(M)||0,H(F)&&(os=!!F.leading,me=(No="maxWait"in F)?En(Eo(F.maxWait)||0,M):me,un="trailing"in F?!!F.trailing:un),Ae.cancel=function(){fe!==void 0&&clearTimeout(fe),Ue=0,G=Xe=le=fe=void 0},Ae.flush=function(){return fe===void 0?ke:$t(U())},Ae},Rr=function(T,M,F){var G=!0,le=!0;if(typeof T!="function")throw new TypeError("Expected a function");return H(F)&&(G="leading"in F?!!F.leading:G,le="trailing"in F?!!F.trailing:le),je(T,M,{leading:G,maxWait:M,trailing:le})},jr=function(){this.__data__=[],this.size=0},Gi=function(T,M){return T===M||T!=T&&M!=M},jn=function(T,M){for(var F=T.length;F--;)if(Gi(T[F][0],M))return F;return-1};var ql=Array.prototype.splice;const $l=function(T){var M=this.__data__,F=jn(M,T);return!(F<0)&&(F==M.length-1?M.pop():ql.call(M,F,1),--this.size,!0)},De=function(T){var M=this.__data__,F=jn(M,T);return F<0?void 0:M[F][1]},ra=function(T){return jn(this.__data__,T)>-1},qu=function(T,M){var F=this.__data__,G=jn(F,T);return G<0?(++this.size,F.push([T,M])):F[G][1]=M,this};function Jo(T){var M=-1,F=T==null?0:T.length;for(this.clear();++M<F;){var G=T[M];this.set(G[0],G[1])}}Jo.prototype.clear=jr,Jo.prototype.delete=$l,Jo.prototype.get=De,Jo.prototype.has=ra,Jo.prototype.set=qu;const Wi=Jo,Kl=function(){this.__data__=new Wi,this.size=0},$u=function(T){var M=this.__data__,F=M.delete(T);return this.size=M.size,F},sa=function(T){return this.__data__.get(T)},Et=function(T){return this.__data__.has(T)},zt=function(T){if(!H(T))return!1;var M=ie(T);return M=="[object Function]"||M=="[object GeneratorFunction]"||M=="[object AsyncFunction]"||M=="[object Proxy]"},Fr=R["__core-js_shared__"];var Ql=function(){var T=/[^.]+$/.exec(Fr&&Fr.keys&&Fr.keys.IE_PROTO||"");return T?"Symbol(src)_1."+T:""}();const cn=function(T){return!!Ql&&Ql in T};var Dn=Function.prototype.toString;const to=function(T){if(T!=null){try{return Dn.call(T)}catch{}try{return T+""}catch{}}return""};var Ku=/^\[object .+?Constructor\]$/,Qu=Function.prototype,qi=Object.prototype,Zu=Qu.toString,Yu=qi.hasOwnProperty,Ju=RegExp("^"+Zu.call(Yu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Zl=function(T){return!(!H(T)||cn(T))&&(zt(T)?Ju:Ku).test(to(T))},no=function(T,M){return T==null?void 0:T[M]},Je=function(T,M){var F=no(T,M);return Zl(F)?F:void 0},Ct=Je(R,"Map"),Xo=Je(Object,"create"),Yl=function(){this.__data__=Xo?Xo(null):{},this.size=0},Jl=function(T){var M=this.has(T)&&delete this.__data__[T];return this.size-=M?1:0,M};var aa=Object.prototype.hasOwnProperty;const Xu=function(T){var M=this.__data__;if(Xo){var F=M[T];return F==="__lodash_hash_undefined__"?void 0:F}return aa.call(M,T)?M[T]:void 0};var eh=Object.prototype.hasOwnProperty;const Xl=function(T){var M=this.__data__;return Xo?M[T]!==void 0:eh.call(M,T)},th=function(T,M){var F=this.__data__;return this.size+=this.has(T)?0:1,F[T]=Xo&&M===void 0?"__lodash_hash_undefined__":M,this};function ei(T){var M=-1,F=T==null?0:T.length;for(this.clear();++M<F;){var G=T[M];this.set(G[0],G[1])}}ei.prototype.clear=Yl,ei.prototype.delete=Jl,ei.prototype.get=Xu,ei.prototype.has=Xl,ei.prototype.set=th;const Dt=ei,nh=function(){this.size=0,this.__data__={hash:new Dt,map:new(Ct||Wi),string:new Dt}},$i=function(T){var M=typeof T;return M=="string"||M=="number"||M=="symbol"||M=="boolean"?T!=="__proto__":T===null},Do=function(T,M){var F=T.__data__;return $i(M)?F[typeof M=="string"?"string":"hash"]:F.map},oh=function(T){var M=Do(this,T).delete(T);return this.size-=M?1:0,M},ih=function(T){return Do(this,T).get(T)},rh=function(T){return Do(this,T).has(T)},sh=function(T,M){var F=Do(this,T),G=F.size;return F.set(T,M),this.size+=F.size==G?0:1,this};function ti(T){var M=-1,F=T==null?0:T.length;for(this.clear();++M<F;){var G=T[M];this.set(G[0],G[1])}}ti.prototype.clear=nh,ti.prototype.delete=oh,ti.prototype.get=ih,ti.prototype.has=rh,ti.prototype.set=sh;const ni=ti,Vr=function(T,M){var F=this.__data__;if(F instanceof Wi){var G=F.__data__;if(!Ct||G.length<199)return G.push([T,M]),this.size=++F.size,this;F=this.__data__=new ni(G)}return F.set(T,M),this.size=F.size,this};function oi(T){var M=this.__data__=new Wi(T);this.size=M.size}oi.prototype.clear=Kl,oi.prototype.delete=$u,oi.prototype.get=sa,oi.prototype.has=Et,oi.prototype.set=Vr;const ah=oi,lh=function(T,M){for(var F=-1,G=T==null?0:T.length;++F<G&&M(T[F],F,T)!==!1;);return T},ec=function(){try{var T=Je(Object,"defineProperty");return T({},"",{}),T}catch{}}(),oo=function(T,M,F){M=="__proto__"&&ec?ec(T,M,{configurable:!0,enumerable:!0,value:F,writable:!0}):T[M]=F};var la=Object.prototype.hasOwnProperty;const ca=function(T,M,F){var G=T[M];la.call(T,M)&&Gi(G,F)&&(F!==void 0||M in T)||oo(T,M,F)},Hr=function(T,M,F,G){var le=!F;F||(F={});for(var me=-1,ke=M.length;++me<ke;){var fe=M[me],Xe=G?G(F[fe],T[fe],fe,F,T):void 0;Xe===void 0&&(Xe=T[fe]),le?oo(F,fe,Xe):ca(F,fe,Xe)}return F},ch=function(T,M){for(var F=-1,G=Array(T);++F<T;)G[F]=M(F);return G},io=function(T){return de(T)&&ie(T)=="[object Arguments]"};var tc=Object.prototype,dh=tc.hasOwnProperty,uh=tc.propertyIsEnumerable;const hh=io(function(){return arguments}())?io:function(T){return de(T)&&dh.call(T,"callee")&&!uh.call(T,"callee")},da=Array.isArray,mh=function(){return!1};var nc=l&&!l.nodeType&&l,oc=nc&&!0&&s&&!s.nodeType&&s,ro=oc&&oc.exports===nc?R.Buffer:void 0;const ii=(ro?ro.isBuffer:void 0)||mh;var Ki=/^(?:0|[1-9]\d*)$/;const gh=function(T,M){var F=typeof T;return!!(M=M??9007199254740991)&&(F=="number"||F!="symbol"&&Ki.test(T))&&T>-1&&T%1==0&&T<M},ic=function(T){return typeof T=="number"&&T>-1&&T%1==0&&T<=9007199254740991};var Fe={};Fe["[object Float32Array]"]=Fe["[object Float64Array]"]=Fe["[object Int8Array]"]=Fe["[object Int16Array]"]=Fe["[object Int32Array]"]=Fe["[object Uint8Array]"]=Fe["[object Uint8ClampedArray]"]=Fe["[object Uint16Array]"]=Fe["[object Uint32Array]"]=!0,Fe["[object Arguments]"]=Fe["[object Array]"]=Fe["[object ArrayBuffer]"]=Fe["[object Boolean]"]=Fe["[object DataView]"]=Fe["[object Date]"]=Fe["[object Error]"]=Fe["[object Function]"]=Fe["[object Map]"]=Fe["[object Number]"]=Fe["[object Object]"]=Fe["[object RegExp]"]=Fe["[object Set]"]=Fe["[object String]"]=Fe["[object WeakMap]"]=!1;const ph=function(T){return de(T)&&ic(T.length)&&!!Fe[ie(T)]},ua=function(T){return function(M){return T(M)}};var rc=l&&!l.nodeType&&l,Qi=rc&&!0&&s&&!s.nodeType&&s,so=Qi&&Qi.exports===rc&&z.process;const So=function(){try{var T=Qi&&Qi.require&&Qi.require("util").types;return T||so&&so.binding&&so.binding("util")}catch{}}();var sc=So&&So.isTypedArray;const fh=sc?ua(sc):ph;var Ur=Object.prototype.hasOwnProperty;const ac=function(T,M){var F=da(T),G=!F&&hh(T),le=!F&&!G&&ii(T),me=!F&&!G&&!le&&fh(T),ke=F||G||le||me,fe=ke?ch(T.length,String):[],Xe=fe.length;for(var Ue in T)!M&&!Ur.call(T,Ue)||ke&&(Ue=="length"||le&&(Ue=="offset"||Ue=="parent")||me&&(Ue=="buffer"||Ue=="byteLength"||Ue=="byteOffset")||gh(Ue,Xe))||fe.push(Ue);return fe};var kh=Object.prototype;const ha=function(T){var M=T&&T.constructor;return T===(typeof M=="function"&&M.prototype||kh)},lc=function(T,M){return function(F){return T(M(F))}},ri=lc(Object.keys,Object);var Gr=Object.prototype.hasOwnProperty;const bh=function(T){if(!ha(T))return ri(T);var M=[];for(var F in Object(T))Gr.call(T,F)&&F!="constructor"&&M.push(F);return M},To=function(T){return T!=null&&ic(T.length)&&!zt(T)},Io=function(T){return To(T)?ac(T):bh(T)},wh=function(T,M){return T&&Hr(M,Io(M),T)},Wr=function(T){var M=[];if(T!=null)for(var F in Object(T))M.push(F);return M};var ma=Object.prototype.hasOwnProperty;const Ah=function(T){if(!H(T))return Wr(T);var M=ha(T),F=[];for(var G in T)(G!="constructor"||!M&&ma.call(T,G))&&F.push(G);return F},Zi=function(T){return To(T)?ac(T,!0):Ah(T)},si=function(T,M){return T&&Hr(M,Zi(M),T)};var cc=l&&!l.nodeType&&l,ga=cc&&!0&&s&&!s.nodeType&&s,pa=ga&&ga.exports===cc?R.Buffer:void 0,dc=pa?pa.allocUnsafe:void 0;const Ch=function(T,M){if(M)return T.slice();var F=T.length,G=dc?dc(F):new T.constructor(F);return T.copy(G),G},fa=function(T,M){var F=-1,G=T.length;for(M||(M=Array(G));++F<G;)M[F]=T[F];return M},vh=function(T,M){for(var F=-1,G=T==null?0:T.length,le=0,me=[];++F<G;){var ke=T[F];M(ke,F,T)&&(me[le++]=ke)}return me},ka=function(){return[]};var uc=Object.prototype.propertyIsEnumerable,ba=Object.getOwnPropertySymbols;const Mo=ba?function(T){return T==null?[]:(T=Object(T),vh(ba(T),function(M){return uc.call(T,M)}))}:ka,_h=function(T,M){return Hr(T,Mo(T),M)},qr=function(T,M){for(var F=-1,G=M.length,le=T.length;++F<G;)T[le+F]=M[F];return T},$r=lc(Object.getPrototypeOf,Object),Pe=Object.getOwnPropertySymbols?function(T){for(var M=[];T;)qr(M,Mo(T)),T=$r(T);return M}:ka,yh=function(T,M){return Hr(T,Pe(T),M)},Yi=function(T,M,F){var G=M(T);return da(T)?G:qr(G,F(T))},hc=function(T){return Yi(T,Io,Mo)},Ji=function(T){return Yi(T,Zi,Pe)},Xi=Je(R,"DataView"),ao=Je(R,"Promise"),Kr=Je(R,"Set"),er=Je(R,"WeakMap");var mc="[object Map]",wa="[object Promise]",gc="[object Set]",Qr="[object WeakMap]",pc="[object DataView]",xh=to(Xi),Eh=to(Ct),Zr=to(ao),Aa=to(Kr),Dh=to(er),Bo=ie;(Xi&&Bo(new Xi(new ArrayBuffer(1)))!=pc||Ct&&Bo(new Ct)!=mc||ao&&Bo(ao.resolve())!=wa||Kr&&Bo(new Kr)!=gc||er&&Bo(new er)!=Qr)&&(Bo=function(T){var M=ie(T),F=M=="[object Object]"?T.constructor:void 0,G=F?to(F):"";if(G)switch(G){case xh:return pc;case Eh:return mc;case Zr:return wa;case Aa:return gc;case Dh:return Qr}return M});const Ca=Bo;var Sh=Object.prototype.hasOwnProperty;const ai=function(T){var M=T.length,F=new T.constructor(M);return M&&typeof T[0]=="string"&&Sh.call(T,"index")&&(F.index=T.index,F.input=T.input),F},fc=R.Uint8Array,Yr=function(T){var M=new T.constructor(T.byteLength);return new fc(M).set(new fc(T)),M},kc=function(T,M){var F=M?Yr(T.buffer):T.buffer;return new T.constructor(F,T.byteOffset,T.byteLength)};var bc=/\w*$/;const wc=function(T){var M=new T.constructor(T.source,bc.exec(T));return M.lastIndex=T.lastIndex,M};var va=N?N.prototype:void 0,Jr=va?va.valueOf:void 0;const Th=function(T){return Jr?Object(Jr.call(T)):{}},Ac=function(T,M){var F=M?Yr(T.buffer):T.buffer;return new T.constructor(F,T.byteOffset,T.length)},Ih=function(T,M,F){var G=T.constructor;switch(M){case"[object ArrayBuffer]":return Yr(T);case"[object Boolean]":case"[object Date]":return new G(+T);case"[object DataView]":return kc(T,F);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ac(T,F);case"[object Map]":case"[object Set]":return new G;case"[object Number]":case"[object String]":return new G(T);case"[object RegExp]":return wc(T);case"[object Symbol]":return Th(T)}};var _a=Object.create;const ya=function(){function T(){}return function(M){if(!H(M))return{};if(_a)return _a(M);T.prototype=M;var F=new T;return T.prototype=void 0,F}}(),Mh=function(T){return typeof T.constructor!="function"||ha(T)?{}:ya($r(T))},Cc=function(T){return de(T)&&Ca(T)=="[object Map]"};var xa=So&&So.isMap;const Bh=xa?ua(xa):Cc,vc=function(T){return de(T)&&Ca(T)=="[object Set]"};var Xr=So&&So.isSet;const Nh=Xr?ua(Xr):vc;var es="[object Arguments]",ts="[object Function]",ns="[object Object]",Ie={};Ie[es]=Ie["[object Array]"]=Ie["[object ArrayBuffer]"]=Ie["[object DataView]"]=Ie["[object Boolean]"]=Ie["[object Date]"]=Ie["[object Float32Array]"]=Ie["[object Float64Array]"]=Ie["[object Int8Array]"]=Ie["[object Int16Array]"]=Ie["[object Int32Array]"]=Ie["[object Map]"]=Ie["[object Number]"]=Ie[ns]=Ie["[object RegExp]"]=Ie["[object Set]"]=Ie["[object String]"]=Ie["[object Symbol]"]=Ie["[object Uint8Array]"]=Ie["[object Uint8ClampedArray]"]=Ie["[object Uint16Array]"]=Ie["[object Uint32Array]"]=!0,Ie["[object Error]"]=Ie[ts]=Ie["[object WeakMap]"]=!1;const _c=function T(M,F,G,le,me,ke){var fe,Xe=1&F,Ue=2&F,os=4&F;if(G&&(fe=me?G(M,le,me,ke):G(M)),fe!==void 0)return fe;if(!H(M))return M;var No=da(M);if(No){if(fe=ai(M),!Xe)return fa(M,fe)}else{var un=Ca(M),di=un==ts||un=="[object GeneratorFunction]";if(ii(M))return Ch(M,Xe);if(un==ns||un==es||di&&!me){if(fe=Ue||di?{}:Mh(M),!Xe)return Ue?yh(M,si(fe,M)):_h(M,wh(fe,M))}else{if(!Ie[un])return me?M:{};fe=Ih(M,un,Xe)}}ke||(ke=new ah);var ui=ke.get(M);if(ui)return ui;ke.set(M,fe),Nh(M)?M.forEach(function($t){fe.add(T($t,F,G,$t,M,ke))}):Bh(M)&&M.forEach(function($t,Ae){fe.set(Ae,T($t,F,G,Ae,M,ke))});var lo=No?void 0:(os?Ue?Ji:hc:Ue?Zi:Io)(M);return lh(lo||M,function($t,Ae){lo&&($t=M[Ae=$t]),ca(fe,Ae,T($t,F,G,Ae,M,ke))}),fe},yc=function(T,M){return _c(T,5,M=typeof M=="function"?M:void 0)};var xc=Function.prototype,Ec=Object.prototype,Ea=xc.toString,Lh=Ec.hasOwnProperty,Ph=Ea.call(Object);const zh=function(T){if(!de(T)||ie(T)!="[object Object]")return!1;var M=$r(T);if(M===null)return!0;var F=Lh.call(M,"constructor")&&M.constructor;return typeof F=="function"&&F instanceof F&&Ea.call(F)==Ph},Oh=function(T){return de(T)&&T.nodeType===1&&!zh(T)};class Dc extends C{constructor(M,F={}){super(F),this._editor=null,this._throttledSave=Rr(this._save.bind(this),typeof F.saveInterval=="number"?F.saveInterval:5e3),M&&(this._creator=(G,le)=>M.create(G,le)),this._destructor=G=>G.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(M){this._creator=M}setDestructor(M){this._destructor=M}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(M=>{console.error("An error happened during the editor destroying.",M)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const M=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,M,M.context)}}).then(()=>{this._fire("restart")})}create(M=this._elementOrData,F=this._config,G){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=M,this._config=this._cloneEditorConfiguration(F)||{},this._config.context=G,this._creator(M,this._config))).then(le=>{this._editor=le,le.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=le.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const M=this._editor;return this._editor=null,M.model.document.off("change:data",this._throttledSave),this._destructor(M)})}_save(){const M=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=M}catch(F){console.error(F,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(M){this._excludedProps=M}_getData(){const M={};for(const F of this._editor.model.document.getRootNames())M[F]=this._editor.data.get({rootName:F});return M}_isErrorComingFromThisItem(M){return j(this._editor,M.context,this._excludedProps)}_cloneEditorConfiguration(M){return yc(M,(F,G)=>Oh(F)||G==="context"?F:void 0)}}const dn=Symbol("MainQueueId");class li extends C{constructor(M,F={}){super(F),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Rh,this._watchdogConfig=F,this._creator=G=>M.create(G),this._destructor=G=>G.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(M){this._creator=M}setDestructor(M){this._destructor=M}get context(){return this._context}create(M={}){return this._actionQueues.enqueue(dn,()=>(this._contextConfig=M,this._create()))}getItem(M){return this._getWatchdog(M)._item}getItemState(M){return this._getWatchdog(M).state}add(M){const F=Sc(M);return Promise.all(F.map(G=>this._actionQueues.enqueue(G.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let le;if(this._watchdogs.has(G.id))throw new Error(`Item with the given id is already added: '${G.id}'.`);if(G.type==="editor")return le=new Dc(null,this._watchdogConfig),le.setCreator(G.creator),le._setExcludedProperties(this._contextProps),G.destructor&&le.setDestructor(G.destructor),this._watchdogs.set(G.id,le),le.on("error",(me,{error:ke,causesRestart:fe})=>{this._fire("itemError",{itemId:G.id,error:ke}),fe&&this._actionQueues.enqueue(G.id,()=>new Promise(Xe=>{const Ue=()=>{le.off("restart",Ue),this._fire("itemRestart",{itemId:G.id}),Xe()};le.on("restart",Ue)}))}),le.create(G.sourceElementOrData,G.config,this._context);throw new Error(`Not supported item type: '${G.type}'.`)})))}remove(M){const F=Sc(M);return Promise.all(F.map(G=>this._actionQueues.enqueue(G,()=>{const le=this._getWatchdog(G);return this._watchdogs.delete(G),le.destroy()})))}destroy(){return this._actionQueues.enqueue(dn,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(dn,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(M=>{console.error("An error happened during destroying the context or items.",M)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(M=>(this._context=M,this._contextProps=E(this._context),Promise.all(Array.from(this._watchdogs.values()).map(F=>(F._setExcludedProperties(this._contextProps),F.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const M=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(F=>F.destroy())).then(()=>this._destructor(M))})}_getWatchdog(M){const F=this._watchdogs.get(M);if(!F)throw new Error(`Item with the given id was not registered: ${M}.`);return F}_isErrorComingFromThisItem(M){for(const F of this._watchdogs.values())if(F._isErrorComingFromThisItem(M))return!1;return j(this._context,M.context)}}class Rh{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(M){this._onEmptyCallbacks.push(M)}enqueue(M,F){const G=M===dn;this._activeActions++,this._queues.get(M)||this._queues.set(M,Promise.resolve());const le=(G?Promise.all(this._queues.values()):Promise.all([this._queues.get(dn),this._queues.get(M)])).then(F),me=le.catch(()=>{});return this._queues.set(M,me),le.finally(()=>{this._activeActions--,this._queues.get(M)===me&&this._activeActions===0&&this._onEmptyCallbacks.forEach(ke=>ke())})}}function Sc(T){return Array.isArray(T)?T:[T]}const tr=b().createContext("contextWatchdog");class nr extends b().Component{constructor(M,F){super(M,F),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(M){return this._shouldComponentUpdate(M)}async _shouldComponentUpdate(M){return M.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(M.config)),M.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(M.config),!0):this.props.children!==M.children}render(){return b().createElement(tr.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(M){this.contextWatchdog=new li(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(F,G)=>{this.props.onError(G.error,{phase:"runtime",willContextRestart:G.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(M).catch(F=>{this.props.onError(F,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}nr.defaultProps={isLayoutReady:!0,onError:(T,M)=>console.error(T,M)},nr.propTypes={id:B().string,isLayoutReady:B().bool,context:B().func,watchdogConfig:B().object,config:B().object,onReady:B().func,onError:B().func};const Da="Lock from React integration (@ckeditor/ckeditor5-react)";class ci extends b().Component{constructor(M){super(M),this.editorDestructionInProgress=null,this.domContainer=b().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:F}=window;if(F){const[G]=F.split(".").map(Number);G<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(M){return!!this.editor&&(M.id!==this.props.id||M.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(M)&&this.editor.data.set(M.data),"disabled"in M&&(M.disabled?this.editor.enableReadOnlyMode(Da):this.editor.disableReadOnlyMode(Da)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return b().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof li?this.watchdog=new jh(this.context):this.watchdog=new ci._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((M,F)=>this._createEditor(M,F)),this.watchdog.on("error",(M,{error:F,causesRestart:G})=>{(this.props.onError||console.error)(F,{phase:"runtime",willEditorRestart:G})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(M=>{(this.props.onError||console.error)(M,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(M,F){return this.props.editor.create(M,F).then(G=>{"disabled"in this.props&&this.props.disabled&&G.enableReadOnlyMode(Da);const le=G.model.document,me=G.editing.view.document;return le.on("change:data",ke=>{this.props.onChange&&this.props.onChange(ke,G)}),me.on("focus",ke=>{this.props.onFocus&&this.props.onFocus(ke,G)}),me.on("blur",ke=>{this.props.onBlur&&this.props.onBlur(ke,G)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(G)}),G})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(M=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,M()):this.instance?(await this.instance.destroy(),this.instance=null,M()):void M())})}_shouldUpdateEditor(M){return this.props.data!==M.data&&this.editor.data.get()!==M.data}_getConfig(){const M=this.props.config||{};return this.props.data&&M.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...M,initialData:M.initialData||this.props.data||""}}}ci.contextType=tr,ci.propTypes={editor:B().func.isRequired,data:B().string,config:B().object,disableWatchdog:B().bool,watchdogConfig:B().object,onChange:B().func,onReady:B().func,onFocus:B().func,onBlur:B().func,onError:B().func,disabled:B().bool,id:B().any},ci._EditorWatchdog=Dc;class jh{constructor(M){this._contextWatchdog=M,this._id=function(){const F=4294967296*Math.random()>>>0,G=4294967296*Math.random()>>>0,le=4294967296*Math.random()>>>0,me=4294967296*Math.random()>>>0;return"e"+D[F>>0&255]+D[F>>8&255]+D[F>>16&255]+D[F>>24&255]+D[G>>0&255]+D[G>>8&255]+D[G>>16&255]+D[G>>24&255]+D[le>>0&255]+D[le>>8&255]+D[le>>16&255]+D[le>>24&255]+D[me>>0&255]+D[me>>8&255]+D[me>>16&255]+D[me>>24&255]}()}setCreator(M){this._creator=M}create(M,F){return this._contextWatchdog.add({sourceElementOrData:M,config:F,creator:this._creator,id:this._id,type:"editor"})}on(M,F){this._contextWatchdog.on("itemError",(G,{itemId:le,error:me})=>{le===this._id&&F(null,{error:me,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),v})())})(Su,Su.exports);var sP=Su.exports,Tu={exports:{}};Tu.exports;(function(s,l){(function(u){const p=u.en=u.en||{};p.dictionary=Object.assign(p.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align center":"Align center","Align left":"Align left","Align right":"Align right","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",All:"All","Almost equal to":"Almost equal to",Angle:"Angle","Approximately equal to":"Approximately equal to",Aquamarine:"Aquamarine",Arrows:"Arrows","Asterisk operator":"Asterisk operator","Austral sign":"Austral sign","back with leftwards arrow above":"back with leftwards arrow above",Background:"Background",Big:"Big","Bitcoin sign":"Bitcoin sign",Black:"Black","Block quote":"Block quote","Block styles":"Block styles",Blue:"Blue","Blue marker":"Blue marker",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cedi sign":"Cedi sign","Cell properties":"Cell properties","Cent sign":"Cent sign","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Character categories":"Character categories","Characters: %0":"Characters: %0","Choose heading":"Choose heading",Circle:"Circle",Code:"Code","Colon sign":"Colon sign",Color:"Color","Color picker":"Color picker",Column:"Column","Contains as member":"Contains as member","Copyright sign":"Copyright sign","Cruzeiro sign":"Cruzeiro sign",Currency:"Currency","Currency sign":"Currency sign",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Degree sign":"Degree sign","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc","Division sign":"Division sign","Document colors":"Document colors","Dollar sign":"Dollar sign","Dong sign":"Dong sign",Dotted:"Dotted",Double:"Double","Double dagger":"Double dagger","Double exclamation mark":"Double exclamation mark","Double low-9 quotation mark":"Double low-9 quotation mark","Double question mark":"Double question mark",Downloadable:"Downloadable","downwards arrow to bar":"downwards arrow to bar","downwards dashed arrow":"downwards dashed arrow","downwards double arrow":"downwards double arrow","downwards simple arrow":"downwards simple arrow","Drachma sign":"Drachma sign","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Element of":"Element of","Em dash":"Em dash","Empty set":"Empty set","En dash":"En dash","end with leftwards arrow above":"end with leftwards arrow above","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Euro sign":"Euro sign","Euro-currency sign":"Euro-currency sign","Exclamation question mark":"Exclamation question mark",Find:"Find","Find and replace":"Find and replace","Find in text…":"Find in text…","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","For all":"For all","Fraction slash":"Fraction slash","French franc sign":"French franc sign","Full size image":"Full size image","German penny sign":"German penny sign","Greater-than or equal to":"Greater-than or equal to","Greater-than sign":"Greater-than sign",Green:"Green","Green marker":"Green marker","Green pen":"Green pen",Grey:"Grey",Groove:"Groove","Guarani sign":"Guarani sign","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX",Highlight:"Highlight","Horizontal ellipsis":"Horizontal ellipsis","Horizontal line":"Horizontal line","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Hryvnia sign":"Hryvnia sign","HTML object":"HTML object",Huge:"Huge","Identical to":"Identical to","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Indian rupee sign":"Indian rupee sign",Infinity:"Infinity",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table",Inset:"Inset",Integral:"Integral",Intersection:"Intersection","Inverted exclamation mark":"Inverted exclamation mark","Inverted question mark":"Inverted question mark",Italic:"Italic",Justify:"Justify","Justify cell text":"Justify cell text","Kip sign":"Kip sign",Latin:"Latin","Latin capital letter a with breve":"Latin capital letter a with breve","Latin capital letter a with macron":"Latin capital letter a with macron","Latin capital letter a with ogonek":"Latin capital letter a with ogonek","Latin capital letter c with acute":"Latin capital letter c with acute","Latin capital letter c with caron":"Latin capital letter c with caron","Latin capital letter c with circumflex":"Latin capital letter c with circumflex","Latin capital letter c with dot above":"Latin capital letter c with dot above","Latin capital letter d with caron":"Latin capital letter d with caron","Latin capital letter d with stroke":"Latin capital letter d with stroke","Latin capital letter e with breve":"Latin capital letter e with breve","Latin capital letter e with caron":"Latin capital letter e with caron","Latin capital letter e with dot above":"Latin capital letter e with dot above","Latin capital letter e with macron":"Latin capital letter e with macron","Latin capital letter e with ogonek":"Latin capital letter e with ogonek","Latin capital letter eng":"Latin capital letter eng","Latin capital letter g with breve":"Latin capital letter g with breve","Latin capital letter g with cedilla":"Latin capital letter g with cedilla","Latin capital letter g with circumflex":"Latin capital letter g with circumflex","Latin capital letter g with dot above":"Latin capital letter g with dot above","Latin capital letter h with circumflex":"Latin capital letter h with circumflex","Latin capital letter h with stroke":"Latin capital letter h with stroke","Latin capital letter i with breve":"Latin capital letter i with breve","Latin capital letter i with dot above":"Latin capital letter i with dot above","Latin capital letter i with macron":"Latin capital letter i with macron","Latin capital letter i with ogonek":"Latin capital letter i with ogonek","Latin capital letter i with tilde":"Latin capital letter i with tilde","Latin capital letter j with circumflex":"Latin capital letter j with circumflex","Latin capital letter k with cedilla":"Latin capital letter k with cedilla","Latin capital letter l with acute":"Latin capital letter l with acute","Latin capital letter l with caron":"Latin capital letter l with caron","Latin capital letter l with cedilla":"Latin capital letter l with cedilla","Latin capital letter l with middle dot":"Latin capital letter l with middle dot","Latin capital letter l with stroke":"Latin capital letter l with stroke","Latin capital letter n with acute":"Latin capital letter n with acute","Latin capital letter n with caron":"Latin capital letter n with caron","Latin capital letter n with cedilla":"Latin capital letter n with cedilla","Latin capital letter o with breve":"Latin capital letter o with breve","Latin capital letter o with double acute":"Latin capital letter o with double acute","Latin capital letter o with macron":"Latin capital letter o with macron","Latin capital letter r with acute":"Latin capital letter r with acute","Latin capital letter r with caron":"Latin capital letter r with caron","Latin capital letter r with cedilla":"Latin capital letter r with cedilla","Latin capital letter s with acute":"Latin capital letter s with acute","Latin capital letter s with caron":"Latin capital letter s with caron","Latin capital letter s with cedilla":"Latin capital letter s with cedilla","Latin capital letter s with circumflex":"Latin capital letter s with circumflex","Latin capital letter t with caron":"Latin capital letter t with caron","Latin capital letter t with cedilla":"Latin capital letter t with cedilla","Latin capital letter t with stroke":"Latin capital letter t with stroke","Latin capital letter u with breve":"Latin capital letter u with breve","Latin capital letter u with double acute":"Latin capital letter u with double acute","Latin capital letter u with macron":"Latin capital letter u with macron","Latin capital letter u with ogonek":"Latin capital letter u with ogonek","Latin capital letter u with ring above":"Latin capital letter u with ring above","Latin capital letter u with tilde":"Latin capital letter u with tilde","Latin capital letter w with circumflex":"Latin capital letter w with circumflex","Latin capital letter y with circumflex":"Latin capital letter y with circumflex","Latin capital letter y with diaeresis":"Latin capital letter y with diaeresis","Latin capital letter z with acute":"Latin capital letter z with acute","Latin capital letter z with caron":"Latin capital letter z with caron","Latin capital letter z with dot above":"Latin capital letter z with dot above","Latin capital ligature ij":"Latin capital ligature ij","Latin capital ligature oe":"Latin capital ligature oe","Latin small letter a with breve":"Latin small letter a with breve","Latin small letter a with macron":"Latin small letter a with macron","Latin small letter a with ogonek":"Latin small letter a with ogonek","Latin small letter c with acute":"Latin small letter c with acute","Latin small letter c with caron":"Latin small letter c with caron","Latin small letter c with circumflex":"Latin small letter c with circumflex","Latin small letter c with dot above":"Latin small letter c with dot above","Latin small letter d with caron":"Latin small letter d with caron","Latin small letter d with stroke":"Latin small letter d with stroke","Latin small letter dotless i":"Latin small letter dotless i","Latin small letter e with breve":"Latin small letter e with breve","Latin small letter e with caron":"Latin small letter e with caron","Latin small letter e with dot above":"Latin small letter e with dot above","Latin small letter e with macron":"Latin small letter e with macron","Latin small letter e with ogonek":"Latin small letter e with ogonek","Latin small letter eng":"Latin small letter eng","Latin small letter f with hook":"Latin small letter f with hook","Latin small letter g with breve":"Latin small letter g with breve","Latin small letter g with cedilla":"Latin small letter g with cedilla","Latin small letter g with circumflex":"Latin small letter g with circumflex","Latin small letter g with dot above":"Latin small letter g with dot above","Latin small letter h with circumflex":"Latin small letter h with circumflex","Latin small letter h with stroke":"Latin small letter h with stroke","Latin small letter i with breve":"Latin small letter i with breve","Latin small letter i with macron":"Latin small letter i with macron","Latin small letter i with ogonek":"Latin small letter i with ogonek","Latin small letter i with tilde":"Latin small letter i with tilde","Latin small letter j with circumflex":"Latin small letter j with circumflex","Latin small letter k with cedilla":"Latin small letter k with cedilla","Latin small letter kra":"Latin small letter kra","Latin small letter l with acute":"Latin small letter l with acute","Latin small letter l with caron":"Latin small letter l with caron","Latin small letter l with cedilla":"Latin small letter l with cedilla","Latin small letter l with middle dot":"Latin small letter l with middle dot","Latin small letter l with stroke":"Latin small letter l with stroke","Latin small letter long s":"Latin small letter long s","Latin small letter n preceded by apostrophe":"Latin small letter n preceded by apostrophe","Latin small letter n with acute":"Latin small letter n with acute","Latin small letter n with caron":"Latin small letter n with caron","Latin small letter n with cedilla":"Latin small letter n with cedilla","Latin small letter o with breve":"Latin small letter o with breve","Latin small letter o with double acute":"Latin small letter o with double acute","Latin small letter o with macron":"Latin small letter o with macron","Latin small letter r with acute":"Latin small letter r with acute","Latin small letter r with caron":"Latin small letter r with caron","Latin small letter r with cedilla":"Latin small letter r with cedilla","Latin small letter s with acute":"Latin small letter s with acute","Latin small letter s with caron":"Latin small letter s with caron","Latin small letter s with cedilla":"Latin small letter s with cedilla","Latin small letter s with circumflex":"Latin small letter s with circumflex","Latin small letter t with caron":"Latin small letter t with caron","Latin small letter t with cedilla":"Latin small letter t with cedilla","Latin small letter t with stroke":"Latin small letter t with stroke","Latin small letter u with breve":"Latin small letter u with breve","Latin small letter u with double acute":"Latin small letter u with double acute","Latin small letter u with macron":"Latin small letter u with macron","Latin small letter u with ogonek":"Latin small letter u with ogonek","Latin small letter u with ring above":"Latin small letter u with ring above","Latin small letter u with tilde":"Latin small letter u with tilde","Latin small letter w with circumflex":"Latin small letter w with circumflex","Latin small letter y with circumflex":"Latin small letter y with circumflex","Latin small letter z with acute":"Latin small letter z with acute","Latin small letter z with caron":"Latin small letter z with caron","Latin small letter z with dot above":"Latin small letter z with dot above","Latin small ligature ij":"Latin small ligature ij","Latin small ligature oe":"Latin small ligature oe","Left aligned image":"Left aligned image","Left double quotation mark":"Left double quotation mark","Left single quotation mark":"Left single quotation mark","Left-pointing double angle quotation mark":"Left-pointing double angle quotation mark","leftwards arrow to bar":"leftwards arrow to bar","leftwards dashed arrow":"leftwards dashed arrow","leftwards double arrow":"leftwards double arrow","leftwards simple arrow":"leftwards simple arrow","Less-than or equal to":"Less-than or equal to","Less-than sign":"Less-than sign","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Lira sign":"Lira sign","List properties":"List properties","Livre tournois sign":"Livre tournois sign","Logical and":"Logical and","Logical or":"Logical or","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman",Macron:"Macron","Manat sign":"Manat sign","Match case":"Match case",Mathematical:"Mathematical","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Mill sign":"Mill sign","Minus sign":"Minus sign","Multiple styles":"Multiple styles","Multiplication sign":"Multiplication sign","N-ary product":"N-ary product","N-ary summation":"N-ary summation",Nabla:"Nabla","Naira sign":"Naira sign","New sheqel sign":"New sheqel sign",Next:"Next","Next result":"Next result",None:"None","Nordic mark sign":"Nordic mark sign","Not an element of":"Not an element of","Not equal to":"Not equal to","Not sign":"Not sign","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","on with exclamation mark with left right arrow above":"on with exclamation mark with left right arrow above","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Overline:"Overline",Padding:"Padding",Paragraph:"Paragraph","Paragraph sign":"Paragraph sign","Partial differential":"Partial differential","Paste the media URL in the input.":"Paste the media URL in the input.","Per mille sign":"Per mille sign","Per ten thousand sign":"Per ten thousand sign","Peseta sign":"Peseta sign","Peso sign":"Peso sign","Pink marker":"Pink marker","Plus-minus sign":"Plus-minus sign","Pound sign":"Pound sign","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Previous result":"Previous result","Proportional to":"Proportional to",Purple:"Purple","Question exclamation mark":"Question exclamation mark",Red:"Red","Red pen":"Red pen",Redo:"Redo","Registered sign":"Registered sign","Remove color":"Remove color","Remove Format":"Remove Format","Remove highlight":"Remove highlight",Replace:"Replace","Replace all":"Replace all","Replace with…":"Replace with…","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Reversed paragraph sign":"Reversed paragraph sign","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image","Right double quotation mark":"Right double quotation mark","Right single quotation mark":"Right single quotation mark","Right-pointing double angle quotation mark":"Right-pointing double angle quotation mark","rightwards arrow to bar":"rightwards arrow to bar","rightwards dashed arrow":"rightwards dashed arrow","rightwards double arrow":"rightwards double arrow","rightwards simple arrow":"rightwards simple arrow",Row:"Row","Ruble sign":"Ruble sign","Rupee sign":"Rupee sign",Save:"Save","Section sign":"Section sign","Select all":"Select all","Select column":"Select column","Select row":"Select row","Show more items":"Show more items","Show options":"Show options","Side image":"Side image","Single left-pointing angle quotation mark":"Single left-pointing angle quotation mark","Single low-9 quotation mark":"Single low-9 quotation mark","Single right-pointing angle quotation mark":"Single right-pointing angle quotation mark",Small:"Small",Solid:"Solid","soon with rightwards arrow above":"soon with rightwards arrow above","Special characters":"Special characters","Spesmilo sign":"Spesmilo sign","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Square root":"Square root","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Styles:"Styles",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Tenge sign":"Tenge sign",Text:"Text","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","Text highlight toolbar":"Text highlight toolbar","Text styles":"Text styles","Text to find must not be empty.":"Text to find must not be empty.",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"There exists":"There exists","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tilde operator":"Tilde operator",Tiny:"Tiny","Tip: Find some text first in order to replace it.":"Tip: Find some text first in order to replace it.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style","top with upwards arrow above":"top with upwards arrow above","Trade mark sign":"Trade mark sign","Tugrik sign":"Tugrik sign","Turkish lira sign":"Turkish lira sign",Turquoise:"Turquoise","Two dot leader":"Two dot leader","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Union:"Union",Unlink:"Unlink","up down arrow with base":"up down arrow with base",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","upwards arrow to bar":"upwards arrow to bar","upwards dashed arrow":"upwards dashed arrow","upwards double arrow":"upwards double arrow","upwards simple arrow":"upwards simple arrow","Vertical text alignment toolbar":"Vertical text alignment toolbar","Vulgar fraction one half":"Vulgar fraction one half","Vulgar fraction one quarter":"Vulgar fraction one quarter","Vulgar fraction three quarters":"Vulgar fraction three quarters",White:"White","Whole words only":"Whole words only","Widget toolbar":"Widget toolbar",Width:"Width","Won sign":"Won sign","Words: %0":"Words: %0","Wrap text":"Wrap text",Yellow:"Yellow","Yellow marker":"Yellow marker","Yen sign":"Yen sign"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(u,p){s.exports=p()}(self,()=>(()=>{var u={8168:(v,y,b)=>{const S=b(8874),B={};for(const C of Object.keys(S))B[S[C]]=C;const D={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};v.exports=D;for(const C of Object.keys(D)){if(!("channels"in D[C]))throw new Error("missing channels property: "+C);if(!("labels"in D[C]))throw new Error("missing channel labels property: "+C);if(D[C].labels.length!==D[C].channels)throw new Error("channel and label counts mismatch: "+C);const{channels:E,labels:O}=D[C];delete D[C].channels,delete D[C].labels,Object.defineProperty(D[C],"channels",{value:E}),Object.defineProperty(D[C],"labels",{value:O})}D.rgb.hsl=function(C){const E=C[0]/255,O=C[1]/255,j=C[2]/255,H=Math.min(E,O,j),z=Math.max(E,O,j),P=z-H;let R,U;z===H?R=0:E===z?R=(O-j)/P:O===z?R=2+(j-E)/P:j===z&&(R=4+(E-O)/P),R=Math.min(60*R,360),R<0&&(R+=360);const Q=(H+z)/2;return U=z===H?0:Q<=.5?P/(z+H):P/(2-z-H),[R,100*U,100*Q]},D.rgb.hsv=function(C){let E,O,j,H,z;const P=C[0]/255,R=C[1]/255,U=C[2]/255,Q=Math.max(P,R,U),X=Q-Math.min(P,R,U),K=function(J){return(Q-J)/6/X+.5};return X===0?(H=0,z=0):(z=X/Q,E=K(P),O=K(R),j=K(U),P===Q?H=j-O:R===Q?H=.3333333333333333+E-j:U===Q&&(H=.6666666666666666+O-E),H<0?H+=1:H>1&&(H-=1)),[360*H,100*z,100*Q]},D.rgb.hwb=function(C){const E=C[0],O=C[1];let j=C[2];const H=D.rgb.hsl(C)[0],z=1/255*Math.min(E,Math.min(O,j));return j=1-.00392156862745098*Math.max(E,Math.max(O,j)),[H,100*z,100*j]},D.rgb.cmyk=function(C){const E=C[0]/255,O=C[1]/255,j=C[2]/255,H=Math.min(1-E,1-O,1-j);return[100*((1-E-H)/(1-H)||0),100*((1-O-H)/(1-H)||0),100*((1-j-H)/(1-H)||0),100*H]},D.rgb.keyword=function(C){const E=B[C];if(E)return E;let O,j=1/0;for(const P of Object.keys(S)){const R=S[P],U=(z=R,((H=C)[0]-z[0])**2+(H[1]-z[1])**2+(H[2]-z[2])**2);U<j&&(j=U,O=P)}var H,z;return O},D.keyword.rgb=function(C){return S[C]},D.rgb.xyz=function(C){let E=C[0]/255,O=C[1]/255,j=C[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,O=O>.04045?((O+.055)/1.055)**2.4:O/12.92,j=j>.04045?((j+.055)/1.055)**2.4:j/12.92,[100*(.4124*E+.3576*O+.1805*j),100*(.2126*E+.7152*O+.0722*j),100*(.0193*E+.1192*O+.9505*j)]},D.rgb.lab=function(C){const E=D.rgb.xyz(C);let O=E[0],j=E[1],H=E[2];return O/=95.047,j/=100,H/=108.883,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,H=H>.008856?H**.3333333333333333:7.787*H+.13793103448275862,[116*j-16,500*(O-j),200*(j-H)]},D.hsl.rgb=function(C){const E=C[0]/360,O=C[1]/100,j=C[2]/100;let H,z,P;if(O===0)return P=255*j,[P,P,P];H=j<.5?j*(1+O):j+O-j*O;const R=2*j-H,U=[0,0,0];for(let Q=0;Q<3;Q++)z=E+.3333333333333333*-(Q-1),z<0&&z++,z>1&&z--,P=6*z<1?R+6*(H-R)*z:2*z<1?H:3*z<2?R+(H-R)*(.6666666666666666-z)*6:R,U[Q]=255*P;return U},D.hsl.hsv=function(C){const E=C[0];let O=C[1]/100,j=C[2]/100,H=O;const z=Math.max(j,.01);return j*=2,O*=j<=1?j:2-j,H*=z<=1?z:2-z,[E,100*(j===0?2*H/(z+H):2*O/(j+O)),100*((j+O)/2)]},D.hsv.rgb=function(C){const E=C[0]/60,O=C[1]/100;let j=C[2]/100;const H=Math.floor(E)%6,z=E-Math.floor(E),P=255*j*(1-O),R=255*j*(1-O*z),U=255*j*(1-O*(1-z));switch(j*=255,H){case 0:return[j,U,P];case 1:return[R,j,P];case 2:return[P,j,U];case 3:return[P,R,j];case 4:return[U,P,j];case 5:return[j,P,R]}},D.hsv.hsl=function(C){const E=C[0],O=C[1]/100,j=C[2]/100,H=Math.max(j,.01);let z,P;P=(2-O)*j;const R=(2-O)*H;return z=O*H,z/=R<=1?R:2-R,z=z||0,P/=2,[E,100*z,100*P]},D.hwb.rgb=function(C){const E=C[0]/360;let O=C[1]/100,j=C[2]/100;const H=O+j;let z;H>1&&(O/=H,j/=H);const P=Math.floor(6*E),R=1-j;z=6*E-P,1&P&&(z=1-z);const U=O+z*(R-O);let Q,X,K;switch(P){default:case 6:case 0:Q=R,X=U,K=O;break;case 1:Q=U,X=R,K=O;break;case 2:Q=O,X=R,K=U;break;case 3:Q=O,X=U,K=R;break;case 4:Q=U,X=O,K=R;break;case 5:Q=R,X=O,K=U}return[255*Q,255*X,255*K]},D.cmyk.rgb=function(C){const E=C[0]/100,O=C[1]/100,j=C[2]/100,H=C[3]/100;return[255*(1-Math.min(1,E*(1-H)+H)),255*(1-Math.min(1,O*(1-H)+H)),255*(1-Math.min(1,j*(1-H)+H))]},D.xyz.rgb=function(C){const E=C[0]/100,O=C[1]/100,j=C[2]/100;let H,z,P;return H=3.2406*E+-1.5372*O+-.4986*j,z=-.9689*E+1.8758*O+.0415*j,P=.0557*E+-.204*O+1.057*j,H=H>.0031308?1.055*H**.4166666666666667-.055:12.92*H,z=z>.0031308?1.055*z**.4166666666666667-.055:12.92*z,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,H=Math.min(Math.max(0,H),1),z=Math.min(Math.max(0,z),1),P=Math.min(Math.max(0,P),1),[255*H,255*z,255*P]},D.xyz.lab=function(C){let E=C[0],O=C[1],j=C[2];return E/=95.047,O/=100,j/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,j=j>.008856?j**.3333333333333333:7.787*j+.13793103448275862,[116*O-16,500*(E-O),200*(O-j)]},D.lab.xyz=function(C){let E,O,j;O=(C[0]+16)/116,E=C[1]/500+O,j=O-C[2]/200;const H=O**3,z=E**3,P=j**3;return O=H>.008856?H:(O-.13793103448275862)/7.787,E=z>.008856?z:(E-.13793103448275862)/7.787,j=P>.008856?P:(j-.13793103448275862)/7.787,E*=95.047,O*=100,j*=108.883,[E,O,j]},D.lab.lch=function(C){const E=C[0],O=C[1],j=C[2];let H;return H=360*Math.atan2(j,O)/2/Math.PI,H<0&&(H+=360),[E,Math.sqrt(O*O+j*j),H]},D.lch.lab=function(C){const E=C[0],O=C[1],j=C[2]/360*2*Math.PI;return[E,O*Math.cos(j),O*Math.sin(j)]},D.rgb.ansi16=function(C,E=null){const[O,j,H]=C;let z=E===null?D.rgb.hsv(C)[2]:E;if(z=Math.round(z/50),z===0)return 30;let P=30+(Math.round(H/255)<<2|Math.round(j/255)<<1|Math.round(O/255));return z===2&&(P+=60),P},D.hsv.ansi16=function(C){return D.rgb.ansi16(D.hsv.rgb(C),C[2])},D.rgb.ansi256=function(C){const E=C[0],O=C[1],j=C[2];return E===O&&O===j?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(O/255*5)+Math.round(j/255*5)},D.ansi16.rgb=function(C){let E=C%10;if(E===0||E===7)return C>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const O=.5*(1+~~(C>50));return[(1&E)*O*255,(E>>1&1)*O*255,(E>>2&1)*O*255]},D.ansi256.rgb=function(C){if(C>=232){const O=10*(C-232)+8;return[O,O,O]}let E;return C-=16,[Math.floor(C/36)/5*255,Math.floor((E=C%36)/6)/5*255,E%6/5*255]},D.rgb.hex=function(C){const E=(((255&Math.round(C[0]))<<16)+((255&Math.round(C[1]))<<8)+(255&Math.round(C[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},D.hex.rgb=function(C){const E=C.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let O=E[0];E[0].length===3&&(O=O.split("").map(H=>H+H).join(""));const j=parseInt(O,16);return[j>>16&255,j>>8&255,255&j]},D.rgb.hcg=function(C){const E=C[0]/255,O=C[1]/255,j=C[2]/255,H=Math.max(Math.max(E,O),j),z=Math.min(Math.min(E,O),j),P=H-z;let R,U;return R=P<1?z/(1-P):0,U=P<=0?0:H===E?(O-j)/P%6:H===O?2+(j-E)/P:4+(E-O)/P,U/=6,U%=1,[360*U,100*P,100*R]},D.hsl.hcg=function(C){const E=C[1]/100,O=C[2]/100,j=O<.5?2*E*O:2*E*(1-O);let H=0;return j<1&&(H=(O-.5*j)/(1-j)),[C[0],100*j,100*H]},D.hsv.hcg=function(C){const E=C[1]/100,O=C[2]/100,j=E*O;let H=0;return j<1&&(H=(O-j)/(1-j)),[C[0],100*j,100*H]},D.hcg.rgb=function(C){const E=C[0]/360,O=C[1]/100,j=C[2]/100;if(O===0)return[255*j,255*j,255*j];const H=[0,0,0],z=E%1*6,P=z%1,R=1-P;let U=0;switch(Math.floor(z)){case 0:H[0]=1,H[1]=P,H[2]=0;break;case 1:H[0]=R,H[1]=1,H[2]=0;break;case 2:H[0]=0,H[1]=1,H[2]=P;break;case 3:H[0]=0,H[1]=R,H[2]=1;break;case 4:H[0]=P,H[1]=0,H[2]=1;break;default:H[0]=1,H[1]=0,H[2]=R}return U=(1-O)*j,[255*(O*H[0]+U),255*(O*H[1]+U),255*(O*H[2]+U)]},D.hcg.hsv=function(C){const E=C[1]/100,O=E+C[2]/100*(1-E);let j=0;return O>0&&(j=E/O),[C[0],100*j,100*O]},D.hcg.hsl=function(C){const E=C[1]/100,O=C[2]/100*(1-E)+.5*E;let j=0;return O>0&&O<.5?j=E/(2*O):O>=.5&&O<1&&(j=E/(2*(1-O))),[C[0],100*j,100*O]},D.hcg.hwb=function(C){const E=C[1]/100,O=E+C[2]/100*(1-E);return[C[0],100*(O-E),100*(1-O)]},D.hwb.hcg=function(C){const E=C[1]/100,O=1-C[2]/100,j=O-E;let H=0;return j<1&&(H=(O-j)/(1-j)),[C[0],100*j,100*H]},D.apple.rgb=function(C){return[C[0]/65535*255,C[1]/65535*255,C[2]/65535*255]},D.rgb.apple=function(C){return[C[0]/255*65535,C[1]/255*65535,C[2]/255*65535]},D.gray.rgb=function(C){return[C[0]/100*255,C[0]/100*255,C[0]/100*255]},D.gray.hsl=function(C){return[0,0,C[0]]},D.gray.hsv=D.gray.hsl,D.gray.hwb=function(C){return[0,100,C[0]]},D.gray.cmyk=function(C){return[0,0,0,C[0]]},D.gray.lab=function(C){return[C[0],0,0]},D.gray.hex=function(C){const E=255&Math.round(C[0]/100*255),O=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(O.length)+O},D.rgb.gray=function(C){return[(C[0]+C[1]+C[2])/3/255*100]}},2085:(v,y,b)=>{const S=b(8168),B=b(4111),D={};Object.keys(S).forEach(C=>{D[C]={},Object.defineProperty(D[C],"channels",{value:S[C].channels}),Object.defineProperty(D[C],"labels",{value:S[C].labels});const E=B(C);Object.keys(E).forEach(O=>{const j=E[O];D[C][O]=function(H){const z=function(...P){const R=P[0];if(R==null)return R;R.length>1&&(P=R);const U=H(P);if(typeof U=="object")for(let Q=U.length,X=0;X<Q;X++)U[X]=Math.round(U[X]);return U};return"conversion"in H&&(z.conversion=H.conversion),z}(j),D[C][O].raw=function(H){const z=function(...P){const R=P[0];return R==null?R:(R.length>1&&(P=R),H(P))};return"conversion"in H&&(z.conversion=H.conversion),z}(j)})}),v.exports=D},4111:(v,y,b)=>{const S=b(8168);function B(E){const O=function(){const H={},z=Object.keys(S);for(let P=z.length,R=0;R<P;R++)H[z[R]]={distance:-1,parent:null};return H}(),j=[E];for(O[E].distance=0;j.length;){const H=j.pop(),z=Object.keys(S[H]);for(let P=z.length,R=0;R<P;R++){const U=z[R],Q=O[U];Q.distance===-1&&(Q.distance=O[H].distance+1,Q.parent=H,j.unshift(U))}}return O}function D(E,O){return function(j){return O(E(j))}}function C(E,O){const j=[O[E].parent,E];let H=S[O[E].parent][E],z=O[E].parent;for(;O[z].parent;)j.unshift(O[z].parent),H=D(S[O[z].parent][z],H),z=O[z].parent;return H.conversion=j,H}v.exports=function(E){const O=B(E),j={},H=Object.keys(O);for(let z=H.length,P=0;P<z;P++){const R=H[P];O[R].parent!==null&&(j[R]=C(R,O))}return j}},8874:v=>{v.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},5363:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const E=C},3789:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=C},799:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-clipboard/theme/clipboard.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const E=C},3624:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-editor-classic/theme/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},7372:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/placeholder.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=C},5037:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=C},2218:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-find-result{background:var(--ck-color-highlight-background);color:var(--ck-color-text)}.ck-find-result_selected{background:#ff9633}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-find-and-replace/theme/findandreplace.css"],names:[],mappings:"AAKA,gBACC,+CAAgD,CAChD,0BACD,CAEA,yBACC,kBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-find-result {
	background: var(--ck-color-highlight-background);
	color: var(--ck-color-text);
}

.ck-find-result_selected {
	background: hsl(29, 100%, 60%);
}
`],sourceRoot:""}]);const E=C},3403:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-find-and-replace-form{max-width:100%}.ck.ck-find-and-replace-form fieldset{display:flex}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{position:absolute}.ck.ck-find-and-replace-form{width:400px}.ck.ck-find-and-replace-form:focus{outline:none}.ck.ck-find-and-replace-form fieldset{align-content:stretch;align-items:center;border:0;flex-direction:row;flex-wrap:nowrap;margin:0;padding:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset>.ck-button{flex:0 0 auto}[dir=ltr] .ck.ck-find-and-replace-form fieldset>*+*{margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-find-and-replace-form fieldset>*+*{margin-right:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form fieldset .ck-labeled-field-view{flex:1 1 auto}.ck.ck-find-and-replace-form fieldset .ck-labeled-field-view .ck-input{min-width:50px;width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find{align-items:flex-start}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-find{font-weight:700}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-find .ck-button__label{padding-left:var(--ck-spacing-large);padding-right:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-prev>.ck-icon{transform:rotate(90deg)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button-next>.ck-icon{transform:rotate(-90deg)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{left:var(--ck-spacing-standard)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-results-counter{color:var(--ck-color-base-border)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace{flex-wrap:wrap;justify-content:flex-end;margin-top:calc(var(--ck-spacing-large)*-1)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view{margin-bottom:var(--ck-spacing-large)}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-options-dropdown{margin-left:0;margin-right:auto}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view,.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-labeled-field-view .ck-input{width:100%}@media screen and (max-width:600px){.ck.ck-find-and-replace-form{width:300px}.ck.ck-find-and-replace-form fieldset{flex-wrap:wrap}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find .ck-labeled-field-view{flex:1 0 auto;margin-bottom:var(--ck-spacing-standard);width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button{text-align:center}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{flex:1 1 auto}[dir=ltr] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{margin-left:0}[dir=rtl] .ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type{margin-right:0}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__find>.ck-button:first-of-type .ck-button__label{text-align:center;width:100%}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>:not(.ck-labeled-field-view){flex:1 1 auto}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-dropdown:not(.ck-labeled-field-view){flex-grow:0}.ck.ck-find-and-replace-form fieldset.ck-find-and-replace-form__replace>.ck-button:not(.ck-labeled-field-view)>.ck-button__label{text-align:center;width:100%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-find-and-replace/theme/findandreplaceform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-find-and-replace/findandreplaceform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,6BACC,cAUD,CARC,sCACC,YAMD,CAHC,yFACC,iBACD,CCNF,6BACC,WAyGD,CAnGC,mCACC,YACD,CAEA,sCAIC,qBAAsB,CADtB,kBAAmB,CAInB,QAAS,CANT,kBAAmB,CACnB,gBAAiB,CAMjB,QAAS,CAFT,+BAwFD,CApFC,iDACC,aACD,CAGC,oDACC,sCACD,CAIA,oDACC,uCACD,CAGD,6DACC,aAMD,CAJC,uEAEC,cAAe,CADf,UAED,CAID,qEAEC,sBAkCD,CAhCC,qFACC,eAOD,CAJC,uGACC,oCAAqC,CACrC,qCACD,CAGD,8FACC,uBACD,CAEA,8FACC,wBACD,CAEA,yFACC,OAAQ,CACR,0BAWD,CAbA,mGAKE,gCAQF,CAbA,mGASE,+BAIF,CAbA,yFAYC,iCACD,CAID,wEACC,cAAe,CACf,wBAAyB,CACzB,2CAeD,CAbC,+FACC,qCACD,CAEA,6FAEC,aAAc,CADd,iBAED,CAEA,wMAEC,UACD,CCzGF,oCD+GA,6BACC,WAiDD,CA/CC,sCACC,cA6CD,CAzCE,4FACC,aAAc,CAEd,wCAAyC,CADzC,UAED,CAEA,gFACC,iBAkBD,CAhBC,8FACC,aAcD,CAfA,wGAIE,aAWF,CAfA,wGAQE,cAOF,CAJC,gHAEC,iBAAkB,CADlB,UAED,CAMH,qGACC,aAUD,CARC,iHACC,WACD,CAEA,iIAEC,iBAAkB,CADlB,UAED,CC5JH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-find-and-replace-form {
	max-width: 100%;

	& fieldset {
		display: flex;

		/* The find fieldset */
		&.ck-find-and-replace-form__find .ck-results-counter {
			position: absolute;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-find-and-replace-form {
	width: 400px;

	/*
	 * The <form> needs tabindex="-1" for proper Esc handling after being clicked
	 * but the side effect is that this creates a nasty focus outline in some browsers.
	 */
	&:focus {
		outline: none;
	}

	& fieldset {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		align-content: stretch;

		padding: var(--ck-spacing-large);
		border: 0;
		margin: 0;

		& > .ck-button {
			flex: 0 0 auto;
		}

		@mixin ck-dir ltr {
			& > * + * {
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > * + * {
				margin-right: var(--ck-spacing-standard);
			}
		}

		& .ck-labeled-field-view {
			flex: 1 1 auto;

			& .ck-input {
				width: 100%;
				min-width: 50px;
			}
		}

		/* The find fieldset */
		&.ck-find-and-replace-form__find {
			/* To display all controls in line when there's an error under the input */
			align-items: flex-start;

			& > .ck-button-find {
				font-weight: bold;

				/* Beef the find button up a little. It's the main action button in the form */
				& .ck-button__label {
					padding-left: var(--ck-spacing-large);
					padding-right: var(--ck-spacing-large);
				}
			}

			& > .ck-button-prev > .ck-icon {
				transform: rotate(90deg);
			}

			& > .ck-button-next > .ck-icon {
				transform: rotate(-90deg);
			}

			& .ck-results-counter {
				top: 50%;
				transform: translateY(-50%);

				@mixin ck-dir ltr {
					right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-standard);
				}

				color: var(--ck-color-base-border);
			}
		}

		/* The replace fieldset */
		&.ck-find-and-replace-form__replace {
			flex-wrap: wrap;
			justify-content: flex-end;
			margin-top: calc( -1 * var(--ck-spacing-large) );

			& > .ck-labeled-field-view {
				margin-bottom: var(--ck-spacing-large);
			}

			& > .ck-options-dropdown {
				margin-right: auto;
				margin-left: 0;
			}

			& > .ck-labeled-field-view,
			& > .ck-labeled-field-view .ck-input {
				width: 100%;
			}
		}
	}
}

@mixin ck-media-phone {
	.ck.ck-find-and-replace-form {
		width: 300px;

		& fieldset {
			flex-wrap: wrap;

			/* The find fieldset */
			&.ck-find-and-replace-form__find {
				& .ck-labeled-field-view {
					flex: 1 0 auto;
					width: 100%;
					margin-bottom: var(--ck-spacing-standard);
				}

				& > .ck-button {
					text-align: center;

					&:first-of-type {
						flex: 1 1 auto;

						@mixin ck-dir ltr {
							margin-left: 0;
						}

						@mixin ck-dir rtl {
							margin-right: 0;
						}

						& .ck-button__label {
							width: 100%;
							text-align: center;
						}
					}
				}
			}

			/* The replace fieldset */
			&.ck-find-and-replace-form__replace > :not(.ck-labeled-field-view) {
				flex: 1 1 auto;

				&.ck-dropdown {
					flex-grow: 0;
				}

				&.ck-button > .ck-button__label {
					width: 100%;
					text-align: center;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},5991:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const E=C},4249:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-heading/theme/heading.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=C},7263:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-pen-red:#e71313;--ck-highlight-pen-green:#128a00}.ck-content .marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green{background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink{background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue{background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red{background-color:transparent;color:var(--ck-highlight-pen-red)}.ck-content .pen-green{background-color:transparent;color:var(--ck-highlight-pen-green)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-highlight/theme/highlight.css"],names:[],mappings:"AAKA,MACC,oCAA+C,CAC/C,mCAA+C,CAC/C,kCAA8C,CAC9C,kCAA8C,CAC9C,8BAAwC,CACxC,gCACD,CAGC,2BACC,kDACD,CAFA,0BACC,iDACD,CAFA,yBACC,gDACD,CAFA,yBACC,gDACD,CAIA,qBAIC,4BAA6B,CAH7B,iCAID,CALA,uBAIC,4BAA6B,CAH7B,mCAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-highlight-marker-yellow: hsl(60, 97%, 73%);
	--ck-highlight-marker-green: hsl(120, 93%, 68%);
	--ck-highlight-marker-pink: hsl(345, 96%, 73%);
	--ck-highlight-marker-blue: hsl(201, 97%, 72%);
	--ck-highlight-pen-red: hsl(0, 85%, 49%);
	--ck-highlight-pen-green: hsl(112, 100%, 27%);
}

@define-mixin highlight-marker-color $color {
	.ck-content .marker-$color {
		background-color: var(--ck-highlight-marker-$color);
	}
}

@define-mixin highlight-pen-color $color {
	.ck-content .pen-$color {
		color: var(--ck-highlight-pen-$color);

		/* Override default yellow background of \`<mark>\` from user agent stylesheet */
		background-color: transparent;
	}
}

@mixin highlight-marker-color yellow;
@mixin highlight-marker-color green;
@mixin highlight-marker-color pink;
@mixin highlight-marker-color blue;

@mixin highlight-pen-color red;
@mixin highlight-pen-color green;
`],sourceRoot:""}]);const E=C},9893:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-editor__editable .ck-horizontal-line{display:flow-root}.ck-content hr{background:#dedede;border:0;height:4px;margin:15px 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-horizontal-line/theme/horizontalline.css"],names:[],mappings:"AAMA,yCAEC,iBACD,CAEA,eAGC,kBAA2B,CAC3B,QAAS,CAFT,UAAW,CADX,aAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


.ck-editor__editable .ck-horizontal-line {
	/* Necessary to render properly next to floated objects, e.g. side image case. */
	display: flow-root;
}

.ck-content hr {
	margin: 15px 0;
	height: 4px;
	background: hsl(0, 0%, 87%);
	border: 0;
}
`],sourceRoot:""}]);const E=C},1710:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-html-object-embed-unfocused-outline-width:1px}.ck-widget.html-object-embed{background-color:var(--ck-color-base-foreground);font-size:var(--ck-font-size-base);min-width:calc(76px + var(--ck-spacing-standard));padding:var(--ck-spacing-small);padding-top:calc(var(--ck-font-size-tiny) + var(--ck-spacing-large))}.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.html-object-embed:before{background:#999;border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);content:attr(data-html-object-embed-label);font-family:var(--ck-font-face);font-size:var(--ck-font-size-tiny);font-style:normal;font-weight:400;left:var(--ck-spacing-standard);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);position:absolute;top:0;transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck-widget.html-object-embed .html-object-embed__content{pointer-events:none}div.ck-widget.html-object-embed{margin:1em auto}span.ck-widget.html-object-embed{display:inline-block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-html-support/theme/datafilter.css"],names:[],mappings:"AAKA,MACC,kDACD,CAEA,6BAEC,gDAAiD,CADjD,kCAAmC,CAKnC,iDAAkD,CAHlD,+BAAgC,CAEhC,oEAgCD,CA7BC,kEACC,wGACD,CAEA,oCAOC,eAA4B,CAG5B,iEAAkE,CAClE,qCAAsC,CAPtC,0CAA2C,CAS3C,+BAAgC,CADhC,kCAAmC,CAVnC,iBAAkB,CADlB,eAAmB,CAKnB,+BAAgC,CAGhC,yIAA0I,CAN1I,iBAAkB,CAElB,KAAM,CAGN,0GAMD,CAGA,2HACC,gBACD,CAEA,yDAEC,mBACD,CAGD,gCACC,eACD,CAEA,iCACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-html-object-embed-unfocused-outline-width: 1px;
}

.ck-widget.html-object-embed {
	font-size: var(--ck-font-size-base);
	background-color: var(--ck-color-base-foreground);
	padding: var(--ck-spacing-small);
	/* Leave space for label */
	padding-top: calc(var(--ck-font-size-tiny) + var(--ck-spacing-large));
	min-width: calc(76px + var(--ck-spacing-standard));

	&:not(.ck-widget_selected):not(:hover) {
		outline: var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border);
	}

	&::before {
		font-weight: normal;
		font-style: normal;
		position: absolute;
		content: attr(data-html-object-embed-label);
		top: 0;
		left: var(--ck-spacing-standard);
		background: hsl(0deg 0% 60%);
		transition: background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
		padding: calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);
		border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
		color: var(--ck-color-base-background);
		font-size: var(--ck-font-size-tiny);
		font-family: var(--ck-font-face);
	}

	/* Make space for label. */
	& .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before {
		margin-left: 50px;
	}

	& .html-object-embed__content {
		/* Disable user interaction with embed content */
		pointer-events: none;
	}
}

div.ck-widget.html-object-embed {
	margin: 1em auto;
}

span.ck-widget.html-object-embed {
	display: inline-block;
}

`],sourceRoot:""}]);const E=C},2430:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=C},2423:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=C},8879:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const E=C},8340:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=C},2400:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=C},3534:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},1547:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadicon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=C},6618:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadloader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=C},2926:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/imageuploadprogress.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=C},5269:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-image/theme/textalternativeform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},3925:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=C},7536:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkactions.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},4874:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},4330:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-link/theme/linkimage.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const E=C},5782:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/collapsible.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=C},3190:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=C},4784:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},9938:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=C},2591:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/liststyles.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=C},9292:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const E=C},8705:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=C},1922:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},7138:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-media-embed/theme/mediaform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},1550:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-character-grid{max-width:100%}.ck.ck-character-grid .ck-character-grid__tiles{display:grid}:root{--ck-character-grid-tile-size:24px}.ck.ck-character-grid{max-height:200px;overflow-x:hidden;overflow-y:auto;width:350px}@media screen and (max-width:600px){.ck.ck-character-grid{width:190px}}.ck.ck-character-grid .ck-character-grid__tiles{grid-gap:var(--ck-spacing-standard);grid-template-columns:repeat(10,1fr);margin:var(--ck-spacing-standard) var(--ck-spacing-large)}@media screen and (max-width:600px){.ck.ck-character-grid .ck-character-grid__tiles{grid-template-columns:repeat(5,1fr)}}.ck.ck-character-grid .ck-character-grid__tile{border:0;font-size:1.2em;height:var(--ck-character-grid-tile-size);min-height:var(--ck-character-grid-tile-size);min-width:var(--ck-character-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-character-grid-tile-size)}.ck.ck-character-grid .ck-character-grid__tile:focus:not(.ck-disabled),.ck.ck-character-grid .ck-character-grid__tile:hover:not(.ck-disabled){border:0;box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-character-grid .ck-character-grid__tile .ck-button__label{line-height:var(--ck-character-grid-tile-size);text-align:center;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-special-characters/theme/charactergrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/charactergrid.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,sBACC,cAKD,CAHC,gDACC,YACD,CCFD,MACC,kCACD,CAEA,sBAIC,gBAAiB,CAFjB,iBAAkB,CADlB,eAAgB,CAEhB,WAyCD,CClDC,oCDMD,sBAOE,WAqCF,CChDC,CDcA,gDAGC,mCAAoC,CAFpC,oCAAsC,CACtC,yDAMD,CCxBA,oCDgBA,gDAME,mCAEF,CCtBA,CDwBA,+CAQC,QAAS,CAHT,eAAgB,CAHhB,yCAA0C,CAE1C,6CAA8C,CAD9C,4CAA6C,CAG7C,SAAU,CACV,8BAA+B,CAN/B,wCAsBD,CAbC,8IAGC,QAAS,CACT,iGACD,CAGA,iEACC,8CAA+C,CAE/C,iBAAkB,CADlB,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-grid {
	max-width: 100%;
	
	& .ck-character-grid__tiles {
		display: grid;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "../mixins/_rounded.css";

:root {
	--ck-character-grid-tile-size: 24px;
}

.ck.ck-character-grid {
	overflow-y: auto;
	overflow-x: hidden;
	width: 350px;
	max-height: 200px;

	@mixin ck-media-phone {
		width: 190px;
	}

	& .ck-character-grid__tiles {
		grid-template-columns: repeat(10, 1fr);
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);
		grid-gap: var(--ck-spacing-standard);

		@mixin ck-media-phone {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	& .ck-character-grid__tile {
		width: var(--ck-character-grid-tile-size);
		height: var(--ck-character-grid-tile-size);
		min-width: var(--ck-character-grid-tile-size);
		min-height: var(--ck-character-grid-tile-size);
		font-size: 1.2em;
		padding: 0;
		transition: .2s ease box-shadow;
		border: 0;

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}

		/* Make sure the glyph is rendered in the center of the button */
		& .ck-button__label {
			line-height: var(--ck-character-grid-tile-size);
			width: 100%;
			text-align: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},2234:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-character-info{border-top:1px solid var(--ck-color-base-border);display:flex;justify-content:space-between;padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-character-info>*{font-size:var(--ck-font-size-small);text-transform:uppercase}.ck.ck-character-info .ck-character-info__name{max-width:280px;overflow:hidden;text-overflow:ellipsis}.ck.ck-character-info .ck-character-info__code{opacity:.6}@media screen and (max-width:600px){.ck.ck-character-info{max-width:190px}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-special-characters/theme/characterinfo.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/characterinfo.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAKA,sBCIC,gDAAiD,CDHjD,YAAa,CACb,6BAA8B,CCC9B,uDDAD,CCGC,wBAEC,mCAAoC,CADpC,wBAED,CAEA,+CACC,eAAgB,CAEhB,eAAgB,CADhB,sBAED,CAEA,+CACC,UACD,CClBA,oCDCD,sBAoBE,eAEF,CCrBC",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-character-info {
	display: flex;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-character-info {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	border-top: 1px solid var(--ck-color-base-border);

	& > * {
		text-transform: uppercase;
		font-size: var(--ck-font-size-small);
	}

	& .ck-character-info__name {
		max-width: 280px;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& .ck-character-info__code {
		opacity: .6;
	}

	@mixin ck-media-phone {
		max-width: 190px;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},2538:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-special-characters-navigation>.ck-label{max-width:160px;overflow:hidden;text-overflow:ellipsis}.ck.ck-special-characters-navigation>.ck-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}@media screen and (max-width:600px){.ck.ck-special-characters-navigation{max-width:190px}.ck.ck-special-characters-navigation>.ck-form__header__label{overflow:hidden;text-overflow:ellipsis}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-special-characters/specialcharacters.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAUC,+CACC,eAAgB,CAEhB,eAAgB,CADhB,sBAED,CAEA,sEAEC,gBAAiB,CAEjB,iBAAkB,CADlB,eAED,CCfA,oCDED,qCAgBE,eAOF,CALE,6DAEC,eAAgB,CADhB,sBAED,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-special-characters-navigation {

	& > .ck-label {
		max-width: 160px;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& > .ck-dropdown .ck-dropdown__panel {
		/* There could be dozens of categories available. Use scroll to prevent a 10e6px dropdown. */
		max-height: 250px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	@mixin ck-media-phone {
		max-width: 190px;

		& > .ck-form__header__label {
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},8624:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active>.ck-button>.ck-button__label{font-style:italic}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/style.css"],names:[],mappings:"AAKA,iGACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown.ck-style-dropdown.ck-style-dropdown_multiple-active > .ck-button > .ck-button__label {
	font-style: italic;
}
`],sourceRoot:""}]);const E=C},7775:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-style-panel-columns:3}.ck.ck-style-panel .ck-style-grid{display:grid;grid-template-columns:repeat(var(--ck-style-panel-columns),auto);justify-content:start}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{display:flex;flex-direction:column;justify-content:space-between}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{align-content:center;align-items:center;display:flex;flex-basis:100%;flex-grow:1;justify-content:flex-start}:root{--ck-style-panel-button-width:120px;--ck-style-panel-button-height:80px;--ck-style-panel-button-label-background:#f0f0f0;--ck-style-panel-button-hover-label-background:#ebebeb;--ck-style-panel-button-hover-border-color:#b3b3b3}.ck.ck-style-panel .ck-style-grid{column-gap:var(--ck-spacing-large);row-gap:var(--ck-spacing-large)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button{--ck-color-button-default-hover-background:var(--ck-color-base-background);--ck-color-button-default-active-background:var(--ck-color-base-background);height:var(--ck-style-panel-button-height);padding:0;width:var(--ck-style-panel-button-width)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-button__label{flex-shrink:0;height:22px;line-height:22px;overflow:hidden;padding:0 var(--ck-spacing-medium);text-overflow:ellipsis;width:100%}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button .ck-style-grid__button__preview{background:var(--ck-color-base-background);border:2px solid var(--ck-color-base-background);opacity:.9;overflow:hidden;padding:var(--ck-spacing-medium);width:100%}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled{--ck-color-button-default-disabled-background:var(--ck-color-base-foreground)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled:not(:focus){border-color:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-disabled .ck-style-grid__button__preview{border-color:var(--ck-color-base-foreground);filter:saturate(.3);opacity:.4}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on{border-color:var(--ck-color-base-active)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on .ck-button__label{box-shadow:0 -1px 0 var(--ck-color-base-active);z-index:1}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button.ck-on:hover{border-color:var(--ck-color-base-active-focus)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on) .ck-button__label{background:var(--ck-style-panel-button-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:not(.ck-on):hover .ck-button__label{background:var(--ck-style-panel-button-hover-label-background)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on){border-color:var(--ck-style-panel-button-hover-border-color)}.ck.ck-style-panel .ck-style-grid .ck-style-grid__button:hover:not(.ck-disabled):not(.ck-on) .ck-style-grid__button__preview{opacity:1}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-style/theme/stylegrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylegrid.css"],names:[],mappings:"AAKA,MACC,0BACD,CAEA,kCACC,YAAa,CACb,gEAAiE,CACjE,qBAgBD,CAdC,yDACC,YAAa,CAEb,qBAAsB,CADtB,6BAWD,CARC,yFAEC,oBAAqB,CAErB,kBAAmB,CAHnB,YAAa,CAKb,eAAgB,CADhB,WAAY,CAFZ,0BAID,CCrBF,MACC,mCAAoC,CACpC,mCAAoC,CACpC,gDAA2D,CAC3D,sDAAiE,CACjE,kDACD,CAEA,kCAEC,kCAAmC,CADnC,+BAmFD,CAhFC,yDACC,0EAA2E,CAC3E,2EAA4E,CAI5E,0CAA2C,CAF3C,SAAU,CACV,wCA0ED,CAtEC,qEACC,4CACD,CAEA,2EAOC,aAAc,CANd,WAAY,CACZ,gBAAiB,CAGjB,eAAgB,CADhB,kCAAmC,CAEnC,sBAAuB,CAHvB,UAKD,CAEA,yFAMC,0CAA2C,CAC3C,gDAAiD,CAJjD,UAAW,CADX,eAAgB,CAGhB,gCAAiC,CAJjC,UAOD,CAEA,qEACC,6EAaD,CAVC,iFACC,0DACD,CAEA,qGAGC,4CAA6C,CAC7C,mBAAoB,CAHpB,UAID,CAGD,+DACC,wCAUD,CARC,iFACC,+CAAgD,CAChD,SACD,CAEA,qEACC,8CACD,CAIA,uFACC,wDACD,CAEA,6FACC,8DACD,CAGD,6FACC,4DAKD,CAHC,6HACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-columns: 3;
}

.ck.ck-style-panel .ck-style-grid {
	display: grid;
	grid-template-columns: repeat(var(--ck-style-panel-columns),auto);
	justify-content: start;

	& .ck-style-grid__button {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		& .ck-style-grid__button__preview {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			align-items: center;
			flex-grow: 1;
			flex-basis: 100%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-button-width: 120px;
	--ck-style-panel-button-height: 80px;
	--ck-style-panel-button-label-background: hsl(0, 0%, 94.1%);
	--ck-style-panel-button-hover-label-background: hsl(0, 0%, 92.1%);
	--ck-style-panel-button-hover-border-color: hsl(0, 0%, 70%);
}

.ck.ck-style-panel .ck-style-grid {
	row-gap: var(--ck-spacing-large);
	column-gap: var(--ck-spacing-large);

	& .ck-style-grid__button {
		--ck-color-button-default-hover-background: var(--ck-color-base-background);
		--ck-color-button-default-active-background: var(--ck-color-base-background);

		padding: 0;
		width: var(--ck-style-panel-button-width);
		height: var(--ck-style-panel-button-height);

		/* Let default .ck-button :focus styles apply */
		&:not(:focus) {
			border: 1px solid var(--ck-color-base-border);
		}

		& .ck-button__label {
			height: 22px;
			line-height: 22px;
			width: 100%;
			padding: 0 var(--ck-spacing-medium);
			overflow: hidden;
			text-overflow: ellipsis;
			flex-shrink: 0;
		}

		& .ck-style-grid__button__preview {
			width: 100%;
			overflow: hidden;
			opacity: .9;

			padding: var(--ck-spacing-medium);
			background: var(--ck-color-base-background);
			border: 2px solid var(--ck-color-base-background);
		}

		&.ck-disabled {
			--ck-color-button-default-disabled-background: var(--ck-color-base-foreground);

			/* Let default .ck-button :focus styles apply */
			&:not(:focus) {
				border-color: var(--ck-style-panel-button-label-background);
			}

			& .ck-style-grid__button__preview {
				opacity: .4;

				border-color: var(--ck-color-base-foreground);
				filter: saturate(.3);
			}
		}

		&.ck-on {
			border-color: var(--ck-color-base-active);

			& .ck-button__label {
				box-shadow: 0 -1px 0 var(--ck-color-base-active);
				z-index: 1; /* Stay on top of the preview with the shadow. */
			}

			&:hover {
				border-color: var(--ck-color-base-active-focus);
			}
		}

		&:not(.ck-on) {
			& .ck-button__label {
				background: var(--ck-style-panel-button-label-background);
			}

			&:hover .ck-button__label {
				background: var(--ck-style-panel-button-hover-label-background);
			}
		}

		&:hover:not(.ck-disabled):not(.ck-on) {
			border-color: var(--ck-style-panel-button-hover-border-color);

			& .ck-style-grid__button__preview {
				opacity: 1;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},5634:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-style-panel .ck-style-panel__style-group>.ck-label{margin:var(--ck-spacing-large) 0}.ck.ck-style-panel .ck-style-panel__style-group:first-child>.ck-label{margin-top:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylegroup.css"],names:[],mappings:"AAMC,0DACC,gCACD,CAGC,sEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-style-panel .ck-style-panel__style-group {
	& > .ck-label {
		margin: var(--ck-spacing-large) 0;
	}

	&:first-child {
		& > .ck-label {
			margin-top: 0;
		}
	}
}
`],sourceRoot:""}]);const E=C},4637:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-style-panel-max-height:470px}.ck.ck-style-panel{max-height:var(--ck-style-panel-max-height);overflow-y:auto;padding:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-style/stylepanel.css"],names:[],mappings:"AAKA,MACC,iCACD,CAEA,mBAGC,2CAA4C,CAD5C,eAAgB,CADhB,+BAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-style-panel-max-height: 470px;
}

.ck.ck-style-panel {
	padding: var(--ck-spacing-large);
	overflow-y: auto;
	max-height: var(--ck-style-panel-max-height);
}
`],sourceRoot:""}]);const E=C},9953:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},7502:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},6908:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/formrow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=C},468:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/inserttable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=C},2510:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=C},1111:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const E=C},3964:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecellproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},7176:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const E=C},8361:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=C},9429:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},6596:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-table/theme/tableproperties.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},1546:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},4971:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=C},7258:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=C},4923:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=C},4257:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const E=C},6306:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const E=C},5062:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},1883:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},4791:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},2704:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=C},9847:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},1874:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=C},1977:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/icon/icon.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},2470:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},3525:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/label/label.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=C},2933:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},179:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},4460:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},7592:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=C},6356:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},3707:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},6603:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=C},4176:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=C},4768:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=C},3888:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=C},5167:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_hidden.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_zindex.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_transition.css","webpack://./node_modules/@ckeditor/ckeditor5-ui/theme/globals/_poweredby.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=C},7153:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=C},4875:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgetresize.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=C},2347:(v,y,b)=>{b.d(y,{Z:()=>E});var S=b(4015),B=b.n(S),D=b(3645),C=b.n(D)()(B());C.push([v.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./node_modules/@ckeditor/ckeditor5-widget/theme/widgettypearound.css","webpack://./node_modules/@ckeditor/ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=C},3645:v=>{v.exports=function(y){var b=[];return b.toString=function(){return this.map(function(S){var B=y(S);return S[2]?"@media ".concat(S[2]," {").concat(B,"}"):B}).join("")},b.i=function(S,B,D){typeof S=="string"&&(S=[[null,S,""]]);var C={};if(D)for(var E=0;E<this.length;E++){var O=this[E][0];O!=null&&(C[O]=!0)}for(var j=0;j<S.length;j++){var H=[].concat(S[j]);D&&C[H[0]]||(B&&(H[2]?H[2]="".concat(B," and ").concat(H[2]):H[2]=B),b.push(H))}},b}},4015:v=>{function y(S,B){return function(D){if(Array.isArray(D))return D}(S)||function(D,C){var E=D&&(typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"]);if(E!=null){var O,j,H=[],z=!0,P=!1;try{for(E=E.call(D);!(z=(O=E.next()).done)&&(H.push(O.value),!C||H.length!==C);z=!0);}catch(R){P=!0,j=R}finally{try{z||E.return==null||E.return()}finally{if(P)throw j}}return H}}(S,B)||function(D,C){if(D){if(typeof D=="string")return b(D,C);var E=Object.prototype.toString.call(D).slice(8,-1);if(E==="Object"&&D.constructor&&(E=D.constructor.name),E==="Map"||E==="Set")return Array.from(D);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return b(D,C)}}(S,B)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(S,B){(B==null||B>S.length)&&(B=S.length);for(var D=0,C=new Array(B);D<B;D++)C[D]=S[D];return C}v.exports=function(S){var B=y(S,4),D=B[1],C=B[3];if(!C)return D;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(C)))),O="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),j="/*# ".concat(O," */"),H=C.sources.map(function(z){return"/*# sourceURL=".concat(C.sourceRoot||"").concat(z," */")});return[D].concat(H).concat([j]).join(`
`)}return[D].join(`
`)}},3379:(v,y,b)=>{var S,B=function(){return S===void 0&&(S=!!(window&&document&&document.all&&!window.atob)),S},D=function(){var K={};return function(J){if(K[J]===void 0){var N=document.querySelector(J);if(window.HTMLIFrameElement&&N instanceof window.HTMLIFrameElement)try{N=N.contentDocument.head}catch{N=null}K[J]=N}return K[J]}}(),C=[];function E(K){for(var J=-1,N=0;N<C.length;N++)if(C[N].identifier===K){J=N;break}return J}function O(K,J){for(var N={},te=[],we=0;we<K.length;we++){var Te=K[we],_e=J.base?Te[0]+J.base:Te[0],rn=N[_e]||0,sn="".concat(_e," ").concat(rn);N[_e]=rn+1;var Pt=E(sn),an={css:Te[1],media:Te[2],sourceMap:Te[3]};Pt!==-1?(C[Pt].references++,C[Pt].updater(an)):C.push({identifier:sn,updater:X(an,J),references:1}),te.push(sn)}return te}function j(K){var J=document.createElement("style"),N=K.attributes||{};if(N.nonce===void 0){var te=b.nc;te&&(N.nonce=te)}if(Object.keys(N).forEach(function(Te){J.setAttribute(Te,N[Te])}),typeof K.insert=="function")K.insert(J);else{var we=D(K.insert||"head");if(!we)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");we.appendChild(J)}return J}var H,z=(H=[],function(K,J){return H[K]=J,H.filter(Boolean).join(`
`)});function P(K,J,N,te){var we=N?"":te.media?"@media ".concat(te.media," {").concat(te.css,"}"):te.css;if(K.styleSheet)K.styleSheet.cssText=z(J,we);else{var Te=document.createTextNode(we),_e=K.childNodes;_e[J]&&K.removeChild(_e[J]),_e.length?K.insertBefore(Te,_e[J]):K.appendChild(Te)}}function R(K,J,N){var te=N.css,we=N.media,Te=N.sourceMap;if(we?K.setAttribute("media",we):K.removeAttribute("media"),Te&&typeof btoa<"u"&&(te+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Te))))," */")),K.styleSheet)K.styleSheet.cssText=te;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(te))}}var U=null,Q=0;function X(K,J){var N,te,we;if(J.singleton){var Te=Q++;N=U||(U=j(J)),te=P.bind(null,N,Te,!1),we=P.bind(null,N,Te,!0)}else N=j(J),te=R.bind(null,N,J),we=function(){(function(_e){if(_e.parentNode===null)return!1;_e.parentNode.removeChild(_e)})(N)};return te(K),function(_e){if(_e){if(_e.css===K.css&&_e.media===K.media&&_e.sourceMap===K.sourceMap)return;te(K=_e)}else we()}}v.exports=function(K,J){(J=J||{}).singleton||typeof J.singleton=="boolean"||(J.singleton=B());var N=O(K=K||[],J);return function(te){if(te=te||[],Object.prototype.toString.call(te)==="[object Array]"){for(var we=0;we<N.length;we++){var Te=E(N[we]);C[Te].references--}for(var _e=O(te,J),rn=0;rn<N.length;rn++){var sn=E(N[rn]);C[sn].references===0&&(C[sn].updater(),C.splice(sn,1))}N=_e}}}}},p={};function f(v){var y=p[v];if(y!==void 0)return y.exports;var b=p[v]={id:v,exports:{}};return u[v](b,b.exports,f),b.exports}f.n=v=>{var y=v&&v.__esModule?()=>v.default:()=>v;return f.d(y,{a:y}),y},f.d=(v,y)=>{for(var b in y)f.o(y,b)&&!f.o(v,b)&&Object.defineProperty(v,b,{enumerable:!0,get:y[b]})},f.o=(v,y)=>Object.prototype.hasOwnProperty.call(v,y),f.nc=void 0;var A={};return(()=>{function v({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!e())return;const a=typeof r.composedPath=="function"?r.composedPath():[],c=typeof n=="function"?n():n;for(const d of c)if(d.contains(r.target)||a.includes(d))return;t()})}function y(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}function S({keystrokeHandler:i,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:o}){const r=typeof n=="number"?()=>n:n;function a(h){return m=>{const g=t.find(_=>_.element===e.focusedElement),k=t.getIndex(g),w=h(k,t);t.get(w).focus(),m.stopPropagation(),m.preventDefault()}}function c(h,m){return h===m-1?0:h+1}function d(h,m){return h===0?m-1:h-1}i.set("arrowright",a((h,m)=>o==="rtl"?d(h,m.length):c(h,m.length))),i.set("arrowleft",a((h,m)=>o==="rtl"?c(h,m.length):d(h,m.length))),i.set("arrowup",a((h,m)=>{let g=h-r();return g<0&&(g=h+r()*Math.floor(m.length/r()),g>m.length-1&&(g-=r())),g})),i.set("arrowdown",a((h,m)=>{let g=h+r();return g>m.length-1&&(g=h%r()),g}))}f.d(A,{default:()=>FN});const B=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),D={isMac:E(B),isWindows:function(i){return i.indexOf("windows")>-1}(B),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(B),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(B),isiOS:function(i){return!!i.match(/iphone|ipad/i)||E(i)&&navigator.maxTouchPoints>0}(B),isAndroid:function(i){return i.indexOf("android")>-1}(B),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(B),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},C=D;function E(i){return i.indexOf("macintosh")>-1}function O(i,e,t,n){t=t||function(d,h){return d===h};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(d,h,m){const g=j(d,h,m);if(g===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const k=H(d,g),w=H(h,g),_=j(k,w,m),x=d.length-_,I=h.length-_;return{firstIndex:g,lastIndexOld:x,lastIndexNew:I}}(o,r,t);return n?function(d,h){const{firstIndex:m,lastIndexOld:g,lastIndexNew:k}=d;if(m===-1)return Array(h).fill("equal");let w=[];return m>0&&(w=w.concat(Array(m).fill("equal"))),k-m>0&&(w=w.concat(Array(k-m).fill("insert"))),g-m>0&&(w=w.concat(Array(g-m).fill("delete"))),k<h&&(w=w.concat(Array(h-k).fill("equal"))),w}(a,r.length):function(d,h){const m=[],{firstIndex:g,lastIndexOld:k,lastIndexNew:w}=h;return w-g>0&&m.push({index:g,type:"insert",values:d.slice(g,w)}),k-g>0&&m.push({index:g+(w-g),type:"delete",howMany:k-g}),m}(r,a)}function j(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function H(i,e){return i.slice(e).reverse()}function z(i,e,t){t=t||function(x,I){return x===I};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return z.fastDiff(i,e,t,!0);let r,a;if(o<n){const x=i;i=e,e=x,r="delete",a="insert"}else r="insert",a="delete";const c=i.length,d=e.length,h=d-c,m={},g={};function k(x){const I=(g[x-1]!==void 0?g[x-1]:-1)+1,L=g[x+1]!==void 0?g[x+1]:-1,V=I>L?-1:1;m[x+V]&&(m[x]=m[x+V].slice(0)),m[x]||(m[x]=[]),m[x].push(I>L?r:a);let $=Math.max(I,L),Y=$-x;for(;Y<c&&$<d&&t(i[Y],e[$]);)Y++,$++,m[x].push("equal");return $}let w,_=0;do{for(w=-_;w<h;w++)g[w]=k(w);for(w=h+_;w>h;w--)g[w]=k(w);g[h]=k(h),_++}while(g[h]!==d);return m[h].slice(1)}z.fastDiff=O;const P=function(){return function i(){i.called=!0}};class R{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=P(),this.off=P()}}const U=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function Q(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+U[i>>0&255]+U[i>>8&255]+U[i>>16&255]+U[i>>24&255]+U[e>>0&255]+U[e>>8&255]+U[e>>16&255]+U[e>>24&255]+U[t>>0&255]+U[t>>8&255]+U[t>>16&255]+U[t>>24&255]+U[n>>0&255]+U[n>>8&255]+U[n>>16&255]+U[n>>24&255]}const X={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function K(i,e){const t=X.get(e.priority);for(let n=0;n<i.length;n++)if(X.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const J="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class N extends Error{constructor(e,t,n){super(function(o,r){const a=new WeakSet,c=(m,g)=>{if(typeof g=="object"&&g!==null){if(a.has(g))return`[object ${g.constructor.name}]`;a.add(g)}return g},d=r?` ${JSON.stringify(r,c)}`:"",h=Te(o);return o+d+h}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new N(e.message,t);throw n.stack=e.stack,n}}function te(i,e){console.warn(..._e(i,e))}function we(i,e){console.error(..._e(i,e))}function Te(i){return`
Read more: ${J}#error-${i}`}function _e(i,e){const t=Te(i);return e?[i,e,t]:[i,t]}const rn="39.0.2",sn=new Date(2023,8,6);if(globalThis.CKEDITOR_VERSION)throw new N("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=rn;const Pt=Symbol("listeningTo"),an=Symbol("emitterId"),ie=Symbol("delegations"),de=re(Object);function re(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(r,...a)=>{o||(o=!0,r.off(),t.call(this,r,...a))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let r,a;this[Pt]||(this[Pt]={});const c=this[Pt];Qe(e)||He(e);const d=Qe(e);(r=c[d])||(r=c[d]={emitter:e,callbacks:{}}),(a=r.callbacks[t])||(a=r.callbacks[t]=[]),a.push(n),function(h,m,g,k,w){m._addEventListener?m._addEventListener(g,k,w):h._addEventListener.call(m,g,k,w)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[Pt];let r=e&&Qe(e);const a=o&&r?o[r]:void 0,c=a&&t?a.callbacks[t]:void 0;if(!(!o||e&&!a||t&&!c))if(n)eo(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete a.callbacks[t]:eo(this,e,t,n));else if(c){for(;n=c.pop();)eo(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[Pt]}}fire(e,...t){try{const n=e instanceof R?e:new R(this,e),o=n.name;let r=Eo(this,o);if(n.path.push(this),r){const c=[n,...t];r=Array.from(r);for(let d=0;d<r.length&&(r[d].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[d].callback)),!n.stop.called);d++);}const a=this[ie];if(a){const c=a.get(o),d=a.get("*");c&&En(c,n,t),d&&En(d,n,t)}return n.return}catch(n){N.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ie]||(this[ie]=new Map),e.forEach(o=>{const r=this[ie].get(o);r?r.set(t,n):this[ie].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ie])if(e)if(t){const n=this[ie].get(e);n&&n.delete(t)}else this[ie].delete(e);else this[ie].clear()}_addEventListener(e,t,n){(function(a,c){const d=xo(a);if(d[c])return;let h=c,m=null;const g=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},g.push(d[h]),m&&d[h].childEvents.push(m),m=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const k of g)k.callbacks=d[h].callbacks.slice();d[h].childEvents.push(m)}})(this,e);const o=ln(this,e),r={callback:t,priority:X.get(n.priority)};for(const a of o)K(a,r)}_removeEventListener(e,t){const n=ln(this,e);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==t&&(o.splice(r,1),r--)}}:de}function He(i,e){i[an]||(i[an]=e||Q())}function Qe(i){return i[an]}function xo(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function ln(i,e){const t=xo(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=ln(i,t.childEvents[o]);n=n.concat(r)}return n}function Eo(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Eo(i,e.substr(0,e.lastIndexOf(":"))):null}function En(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new R(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function eo(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{re[i]=de.prototype[i]});const je=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Rr=Symbol("observableProperties"),jr=Symbol("boundObservables"),Gi=Symbol("boundProperties"),jn=Symbol("decoratedMethods"),ql=Symbol("decoratedOriginal"),$l=De(re());function De(i){return i?class extends i{set(e,t){if(je(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);ra(this);const n=this[Rr];if(e in this&&!n.has(e))throw new N("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const r=n.get(e);let a=this.fire(`set:${e}`,e,o,r);a===void 0&&(a=o),r===a&&n.has(e)||(n.set(e,a),this.fire(`change:${e}`,e,a,r))}}),this[e]=t}bind(...e){if(!e.length||!Wi(e))throw new N("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new N("observable-bind-duplicate-properties",this);ra(this);const t=this[Gi];e.forEach(o=>{if(t.has(o))throw new N("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const r={property:o,to:[]};t.set(o,r),n.set(o,r)}),{to:qu,toMany:Jo,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Rr])return;const t=this[Gi],n=this[jr];if(e.length){if(!Wi(e))throw new N("observable-unbind-wrong-properties",this);e.forEach(o=>{const r=t.get(o);r&&(r.to.forEach(([a,c])=>{const d=n.get(a),h=d[c];h.delete(r),h.size||delete d[c],Object.keys(d).length||(n.delete(a),this.stopListening(a,"change"))}),t.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){ra(this);const t=this[e];if(!t)throw new N("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][ql]=t,this[jn]||(this[jn]=[]),this[jn].push(e)}stopListening(e,t,n){if(!e&&this[jn]){for(const o of this[jn])this[o]=this[o][ql];delete this[jn]}super.stopListening(e,t,n)}}:$l}function ra(i){i[Rr]||(Object.defineProperty(i,Rr,{value:new Map}),Object.defineProperty(i,jr,{value:new Map}),Object.defineProperty(i,Gi,{value:new Map}))}function qu(...i){const e=function(...r){if(!r.length)throw new N("observable-bind-to-parse-error",null);const a={to:[]};let c;return typeof r[r.length-1]=="function"&&(a.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")c.properties.push(d);else{if(typeof d!="object")throw new N("observable-bind-to-parse-error",null);c={observable:d,properties:[]},a.to.push(c)}}),a}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new N("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new N("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new N("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const a=o[jr];let c;a.get(r.observable)||o.listenTo(r.observable,"change",(d,h)=>{c=a.get(r.observable)[h],c&&c.forEach(m=>{Kl(o,m.property)})})}),function(r){let a;r._bindings.forEach((c,d)=>{r._to.forEach(h=>{a=h.properties[c.callback?0:r._bindProperties.indexOf(d)],c.to.push([h.observable,a]),function(m,g,k,w){const _=m[jr],x=_.get(k),I=x||{};I[w]||(I[w]=new Set),I[w].add(g),x||_.set(k,I)}(r._observable,c,h.observable,a)})})}(this),this._bindProperties.forEach(r=>{Kl(this._observable,r)})}function Jo(i,e,t){if(this._bindings.size>1)throw new N("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(a=>[a,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function Wi(i){return i.every(e=>typeof e=="string")}function Kl(i,e){const t=i[Gi].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{De[i]=$l.prototype[i]});class $u{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function sa(i){let e=0;for(const t of i)e++;return e}function Et(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function zt(i){return!(!i||!i[Symbol.iterator])}const Fr=typeof Si=="object"&&Si&&Si.Object===Object&&Si;var Ql=typeof self=="object"&&self&&self.Object===Object&&self;const cn=Fr||Ql||Function("return this")(),Dn=cn.Symbol;var to=Object.prototype,Ku=to.hasOwnProperty,Qu=to.toString,qi=Dn?Dn.toStringTag:void 0;const Zu=function(i){var e=Ku.call(i,qi),t=i[qi];try{i[qi]=void 0;var n=!0}catch{}var o=Qu.call(i);return n&&(e?i[qi]=t:delete i[qi]),o};var Yu=Object.prototype.toString;const Ju=function(i){return Yu.call(i)};var Zl=Dn?Dn.toStringTag:void 0;const no=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Zl&&Zl in Object(i)?Zu(i):Ju(i)},Je=Array.isArray,Ct=function(i){return i!=null&&typeof i=="object"},Xo=function(i){return typeof i=="string"||!Je(i)&&Ct(i)&&no(i)=="[object String]"};function Yl(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const a in t)r.setAttribute(a,t[a]);!Xo(n)&&zt(n)||(n=[n]);for(let a of n)Xo(a)&&(a=i.createTextNode(a)),r.appendChild(a);return r}const Jl=function(i,e){return function(t){return i(e(t))}},aa=Jl(Object.getPrototypeOf,Object);var Xu=Function.prototype,eh=Object.prototype,Xl=Xu.toString,th=eh.hasOwnProperty,ei=Xl.call(Object);const Dt=function(i){if(!Ct(i)||no(i)!="[object Object]")return!1;var e=aa(i);if(e===null)return!0;var t=th.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Xl.call(t)==ei},nh=function(){this.__data__=[],this.size=0},$i=function(i,e){return i===e||i!=i&&e!=e},Do=function(i,e){for(var t=i.length;t--;)if($i(i[t][0],e))return t;return-1};var oh=Array.prototype.splice;const ih=function(i){var e=this.__data__,t=Do(e,i);return!(t<0)&&(t==e.length-1?e.pop():oh.call(e,t,1),--this.size,!0)},rh=function(i){var e=this.__data__,t=Do(e,i);return t<0?void 0:e[t][1]},sh=function(i){return Do(this.__data__,i)>-1},ti=function(i,e){var t=this.__data__,n=Do(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function ni(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ni.prototype.clear=nh,ni.prototype.delete=ih,ni.prototype.get=rh,ni.prototype.has=sh,ni.prototype.set=ti;const Vr=ni,oi=function(){this.__data__=new Vr,this.size=0},ah=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},lh=function(i){return this.__data__.get(i)},ec=function(i){return this.__data__.has(i)},oo=function(i){if(!je(i))return!1;var e=no(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},la=cn["__core-js_shared__"];var ca=function(){var i=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Hr=function(i){return!!ca&&ca in i};var ch=Function.prototype.toString;const io=function(i){if(i!=null){try{return ch.call(i)}catch{}try{return i+""}catch{}}return""};var tc=/^\[object .+?Constructor\]$/,dh=Function.prototype,uh=Object.prototype,hh=dh.toString,da=uh.hasOwnProperty,mh=RegExp("^"+hh.call(da).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const nc=function(i){return!(!je(i)||Hr(i))&&(oo(i)?mh:tc).test(io(i))},oc=function(i,e){return i==null?void 0:i[e]},ro=function(i,e){var t=oc(i,e);return nc(t)?t:void 0},ii=ro(cn,"Map"),Ki=ro(Object,"create"),gh=function(){this.__data__=Ki?Ki(null):{},this.size=0},ic=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var Fe=Object.prototype.hasOwnProperty;const ph=function(i){var e=this.__data__;if(Ki){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return Fe.call(e,i)?e[i]:void 0};var ua=Object.prototype.hasOwnProperty;const rc=function(i){var e=this.__data__;return Ki?e[i]!==void 0:ua.call(e,i)},Qi=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Ki&&e===void 0?"__lodash_hash_undefined__":e,this};function so(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}so.prototype.clear=gh,so.prototype.delete=ic,so.prototype.get=ph,so.prototype.has=rc,so.prototype.set=Qi;const So=so,sc=function(){this.size=0,this.__data__={hash:new So,map:new(ii||Vr),string:new So}},fh=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Ur=function(i,e){var t=i.__data__;return fh(e)?t[typeof e=="string"?"string":"hash"]:t.map},ac=function(i){var e=Ur(this,i).delete(i);return this.size-=e?1:0,e},kh=function(i){return Ur(this,i).get(i)},ha=function(i){return Ur(this,i).has(i)},lc=function(i,e){var t=Ur(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function ri(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ri.prototype.clear=sc,ri.prototype.delete=ac,ri.prototype.get=kh,ri.prototype.has=ha,ri.prototype.set=lc;const Gr=ri,bh=function(i,e){var t=this.__data__;if(t instanceof Vr){var n=t.__data__;if(!ii||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Gr(n)}return t.set(i,e),this.size=t.size,this};function To(i){var e=this.__data__=new Vr(i);this.size=e.size}To.prototype.clear=oi,To.prototype.delete=ah,To.prototype.get=lh,To.prototype.has=ec,To.prototype.set=bh;const Io=To,wh=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Wr=function(){try{var i=ro(Object,"defineProperty");return i({},"",{}),i}catch{}}(),ma=function(i,e,t){e=="__proto__"&&Wr?Wr(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var Ah=Object.prototype.hasOwnProperty;const Zi=function(i,e,t){var n=i[e];Ah.call(i,e)&&$i(n,t)&&(t!==void 0||e in i)||ma(i,e,t)},si=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,a=e.length;++r<a;){var c=e[r],d=n?n(t[c],i[c],c,t,i):void 0;d===void 0&&(d=i[c]),o?ma(t,c,d):Zi(t,c,d)}return t},cc=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},ga=function(i){return Ct(i)&&no(i)=="[object Arguments]"};var pa=Object.prototype,dc=pa.hasOwnProperty,Ch=pa.propertyIsEnumerable;const fa=ga(function(){return arguments}())?ga:function(i){return Ct(i)&&dc.call(i,"callee")&&!Ch.call(i,"callee")},vh=function(){return!1};var ka=l&&!l.nodeType&&l,uc=ka&&!0&&s&&!s.nodeType&&s,ba=uc&&uc.exports===ka?cn.Buffer:void 0;const Mo=(ba?ba.isBuffer:void 0)||vh;var _h=/^(?:0|[1-9]\d*)$/;const qr=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&_h.test(i))&&i>-1&&i%1==0&&i<e},$r=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Pe={};Pe["[object Float32Array]"]=Pe["[object Float64Array]"]=Pe["[object Int8Array]"]=Pe["[object Int16Array]"]=Pe["[object Int32Array]"]=Pe["[object Uint8Array]"]=Pe["[object Uint8ClampedArray]"]=Pe["[object Uint16Array]"]=Pe["[object Uint32Array]"]=!0,Pe["[object Arguments]"]=Pe["[object Array]"]=Pe["[object ArrayBuffer]"]=Pe["[object Boolean]"]=Pe["[object DataView]"]=Pe["[object Date]"]=Pe["[object Error]"]=Pe["[object Function]"]=Pe["[object Map]"]=Pe["[object Number]"]=Pe["[object Object]"]=Pe["[object RegExp]"]=Pe["[object Set]"]=Pe["[object String]"]=Pe["[object WeakMap]"]=!1;const yh=function(i){return Ct(i)&&$r(i.length)&&!!Pe[no(i)]},Yi=function(i){return function(e){return i(e)}};var hc=l&&!l.nodeType&&l,Ji=hc&&!0&&s&&!s.nodeType&&s,Xi=Ji&&Ji.exports===hc&&Fr.process;const ao=function(){try{var i=Ji&&Ji.require&&Ji.require("util").types;return i||Xi&&Xi.binding&&Xi.binding("util")}catch{}}();var Kr=ao&&ao.isTypedArray;const er=Kr?Yi(Kr):yh;var mc=Object.prototype.hasOwnProperty;const wa=function(i,e){var t=Je(i),n=!t&&fa(i),o=!t&&!n&&Mo(i),r=!t&&!n&&!o&&er(i),a=t||n||o||r,c=a?cc(i.length,String):[],d=c.length;for(var h in i)!e&&!mc.call(i,h)||a&&(h=="length"||o&&(h=="offset"||h=="parent")||r&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||qr(h,d))||c.push(h);return c};var gc=Object.prototype;const Qr=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||gc)},pc=Jl(Object.keys,Object);var xh=Object.prototype.hasOwnProperty;const Eh=function(i){if(!Qr(i))return pc(i);var e=[];for(var t in Object(i))xh.call(i,t)&&t!="constructor"&&e.push(t);return e},Zr=function(i){return i!=null&&$r(i.length)&&!oo(i)},Aa=function(i){return Zr(i)?wa(i):Eh(i)},Dh=function(i,e){return i&&si(e,Aa(e),i)},Bo=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Ca=Object.prototype.hasOwnProperty;const Sh=function(i){if(!je(i))return Bo(i);var e=Qr(i),t=[];for(var n in i)(n!="constructor"||!e&&Ca.call(i,n))&&t.push(n);return t},ai=function(i){return Zr(i)?wa(i,!0):Sh(i)},fc=function(i,e){return i&&si(e,ai(e),i)};var Yr=l&&!l.nodeType&&l,kc=Yr&&!0&&s&&!s.nodeType&&s,bc=kc&&kc.exports===Yr?cn.Buffer:void 0,wc=bc?bc.allocUnsafe:void 0;const va=function(i,e){if(e)return i.slice();var t=i.length,n=wc?wc(t):new i.constructor(t);return i.copy(n),n},Jr=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},Th=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var a=i[t];e(a,t,i)&&(r[o++]=a)}return r},Ac=function(){return[]};var Ih=Object.prototype.propertyIsEnumerable,_a=Object.getOwnPropertySymbols;const ya=_a?function(i){return i==null?[]:(i=Object(i),Th(_a(i),function(e){return Ih.call(i,e)}))}:Ac,Mh=function(i,e){return si(i,ya(i),e)},Cc=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},xa=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Cc(e,ya(i)),i=aa(i);return e}:Ac,Bh=function(i,e){return si(i,xa(i),e)},vc=function(i,e,t){var n=e(i);return Je(i)?n:Cc(n,t(i))},Xr=function(i){return vc(i,Aa,ya)},Nh=function(i){return vc(i,ai,xa)},es=ro(cn,"DataView"),ts=ro(cn,"Promise"),ns=ro(cn,"Set"),Ie=ro(cn,"WeakMap");var _c="[object Map]",yc="[object Promise]",xc="[object Set]",Ec="[object WeakMap]",Ea="[object DataView]",Lh=io(es),Ph=io(ii),zh=io(ts),Oh=io(ns),Dc=io(Ie),dn=no;(es&&dn(new es(new ArrayBuffer(1)))!=Ea||ii&&dn(new ii)!=_c||ts&&dn(ts.resolve())!=yc||ns&&dn(new ns)!=xc||Ie&&dn(new Ie)!=Ec)&&(dn=function(i){var e=no(i),t=e=="[object Object]"?i.constructor:void 0,n=t?io(t):"";if(n)switch(n){case Lh:return Ea;case Ph:return _c;case zh:return yc;case Oh:return xc;case Dc:return Ec}return e});const li=dn;var Rh=Object.prototype.hasOwnProperty;const Sc=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Rh.call(i,"index")&&(t.index=i.index,t.input=i.input),t},tr=cn.Uint8Array,nr=function(i){var e=new i.constructor(i.byteLength);return new tr(e).set(new tr(i)),e},Da=function(i,e){var t=e?nr(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var ci=/\w*$/;const jh=function(i){var e=new i.constructor(i.source,ci.exec(i));return e.lastIndex=i.lastIndex,e};var T=Dn?Dn.prototype:void 0,M=T?T.valueOf:void 0;const F=function(i){return M?Object(M.call(i)):{}},G=function(i,e){var t=e?nr(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},le=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return nr(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Da(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return G(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return jh(i);case"[object Symbol]":return F(i)}};var me=Object.create;const ke=function(){function i(){}return function(e){if(!je(e))return{};if(me)return me(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),fe=function(i){return typeof i.constructor!="function"||Qr(i)?{}:ke(aa(i))},Xe=function(i){return Ct(i)&&li(i)=="[object Map]"};var Ue=ao&&ao.isMap;const os=Ue?Yi(Ue):Xe,No=function(i){return Ct(i)&&li(i)=="[object Set]"};var un=ao&&ao.isSet;const di=un?Yi(un):No;var ui="[object Arguments]",lo="[object Function]",$t="[object Object]",Ae={};Ae[ui]=Ae["[object Array]"]=Ae["[object ArrayBuffer]"]=Ae["[object DataView]"]=Ae["[object Boolean]"]=Ae["[object Date]"]=Ae["[object Float32Array]"]=Ae["[object Float64Array]"]=Ae["[object Int8Array]"]=Ae["[object Int16Array]"]=Ae["[object Int32Array]"]=Ae["[object Map]"]=Ae["[object Number]"]=Ae[$t]=Ae["[object RegExp]"]=Ae["[object Set]"]=Ae["[object String]"]=Ae["[object Symbol]"]=Ae["[object Uint8Array]"]=Ae["[object Uint8ClampedArray]"]=Ae["[object Uint16Array]"]=Ae["[object Uint32Array]"]=!0,Ae["[object Error]"]=Ae[lo]=Ae["[object WeakMap]"]=!1;const St=function i(e,t,n,o,r,a){var c,d=1&t,h=2&t,m=4&t;if(n&&(c=r?n(e,o,r,a):n(e)),c!==void 0)return c;if(!je(e))return e;var g=Je(e);if(g){if(c=Sc(e),!d)return Jr(e,c)}else{var k=li(e),w=k==lo||k=="[object GeneratorFunction]";if(Mo(e))return va(e,d);if(k==$t||k==ui||w&&!r){if(c=h||w?{}:fe(e),!d)return h?Bh(e,fc(c,e)):Mh(e,Dh(c,e))}else{if(!Ae[k])return r?e:{};c=le(e,k,d)}}a||(a=new Io);var _=a.get(e);if(_)return _;a.set(e,c),di(e)?e.forEach(function(I){c.add(i(I,t,n,I,e,a))}):os(e)&&e.forEach(function(I,L){c.set(L,i(I,t,n,L,e,a))});var x=g?void 0:(m?h?Nh:Xr:h?ai:Aa)(e);return wh(x||e,function(I,L){x&&(I=e[L=I]),Zi(c,L,i(I,t,n,L,e,a))}),c},hn=function(i,e){return St(i,5,e=typeof e=="function"?e:void 0)},Ot=function(i){return Ct(i)&&i.nodeType===1&&!Dt(i)};class Xf{constructor(e,t){this._config={},t&&this.define(ek(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Dt(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const a of r)Dt(e[a])||(e[a]={}),e=e[a];if(Dt(n))return Dt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Dt(e[o])){e=null;break}e=e[o]}return e?ek(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function ek(i){return hn(i,Ox)}function Ox(i){return Ot(i)?i:void 0}function hi(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Tc(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const tk=mi(re());function mi(i){return i?class extends i{listenTo(e,t,n,o={}){if(hi(e)||Tc(e)){const r={capture:!!o.useCapture,passive:!!o.usePassive},a=this._getProxyEmitter(e,r)||new Rx(e,r);this.listenTo(a,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(hi(e)||Tc(e)){const o=this._getAllProxyEmitters(e);for(const r of o)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const r=n[Pt];return r&&r[o]?r[o].emitter:null}(this,nk(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:tk}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{mi[i]=tk.prototype[i]});class Rx extends re(){constructor(e,t){super(),He(this,nk(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),re().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){re().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function nk(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Q())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let Fh;try{Fh={window,document}}catch{Fh={window:{},document:{}}}const ge=Fh;function Vh(i){let e=i.parentElement;if(!e)return null;for(;e.tagName!="BODY";){const t=e.style.overflowY||ge.window.getComputedStyle(e).overflowY;if(t==="auto"||t==="scroll")break;if(e=e.parentElement,!e)return null}return e}function Ic(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ok(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function mt(i){return Object.prototype.toString.call(i)=="[object Text]"}const ik=["top","right","bottom","left","width","height"];class Me{constructor(e){const t=Ic(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),sk(e)||t)if(t){const n=Me.getDomRangeRects(e);Mc(this,Me.getBoundingRect(n))}else Mc(this,e.getBoundingClientRect());else if(Tc(e)){const{innerWidth:n,innerHeight:o}=e;Mc(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Mc(this,e)}clone(){return new Me(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Me(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(rk(e))return t;let n,o=e,r=e.parentNode||e.commonAncestorContainer;for(;r&&!rk(r);){if(o instanceof HTMLElement&&ak(o)==="absolute"&&(n=o),n&&(ak(r)!=="relative"||(a=r).ownerDocument.defaultView.getComputedStyle(a).overflow==="visible")){o=r,r=r.parentNode;continue}const c=new Me(r),d=t.getIntersection(c);if(!d)return null;d.getArea()<t.getArea()&&(t=d),o=r,r=r.parentNode}var a;return t}isEqual(e){for(const t of ik)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Tc(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=ok(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new Me(o));else{let o=e.startContainer;mt(o)&&(o=o.parentNode);const r=new Me(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Me(t))}}function Mc(i,e){for(const t of ik)i[t]=e[t]}function rk(i){return!!sk(i)&&i===i.ownerDocument.body}function sk(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function ak(i){return i.ownerDocument.defaultView.getComputedStyle(i).position}class We{constructor(e,t){We._observerInstance||We._createObserver(),this._element=e,this._callback=t,We._addElementCallback(e,t),We._observerInstance.observe(e)}get element(){return this._element}destroy(){We._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){We._elementCallbacks||(We._elementCallbacks=new Map);let n=We._elementCallbacks.get(e);n||(n=new Set,We._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=We._getElementCallbacks(e);n&&(n.delete(t),n.size||(We._elementCallbacks.delete(e),We._observerInstance.unobserve(e))),We._elementCallbacks&&!We._elementCallbacks.size&&(We._observerInstance=null,We._elementCallbacks=null)}static _getElementCallbacks(e){return We._elementCallbacks?We._elementCallbacks.get(e):null}static _createObserver(){We._observerInstance=new ge.window.ResizeObserver(e=>{for(const t of e){const n=We._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function jx(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function Hh(i){return e=>e+i}function Bc(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function lk(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function Sa(i){return i&&i.nodeType===Node.COMMENT_NODE}function ck(i){try{ge.document.createAttribute(i)}catch{return!1}return!0}function gi(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function dk({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){oo(e)&&(e=e()),oo(n)&&(n=n());const a=function(k){return k&&k.parentNode?k.offsetParent===ge.document.body?null:k.offsetParent:null}(i),c=new Me(i),d=new Me(e);let h;const m=o&&function(k){k=Object.assign({top:0,bottom:0,left:0,right:0},k);const w=new Me(ge.window);return w.top+=k.top,w.height-=k.top,w.bottom-=k.bottom,w.height-=k.bottom,w}(r)||null,g={targetRect:d,elementRect:c,positionedElementAncestor:a,viewportRect:m};if(n||o){const k=n&&new Me(n).getVisible();Object.assign(g,{limiterRect:k,viewportRect:m}),h=function(w,_){const{elementRect:x}=_,I=x.getArea(),L=w.map(Y=>new Uh(Y,_)).filter(Y=>!!Y.name);let V=0,$=null;for(const Y of L){const{limiterIntersectionArea:ce,viewportIntersectionArea:Ce}=Y;if(ce===I)return Y;const pe=Ce**2+ce**2;pe>V&&(V=pe,$=Y)}return $}(t,g)||new Uh(t[0],g)}else h=new Uh(t[0],g);return h}function uk(i){const{scrollX:e,scrollY:t}=ge.window;return i.clone().moveBy(e,t)}We._observerInstance=null,We._elementCallbacks=null;class Uh{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:a,config:c}=n;this.name=a,this.config=c,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=uk(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=uk(new Me(t)),o=ok(t);let r=0,a=0;r-=n.left,a-=n.top,r+=t.scrollLeft,a+=t.scrollTop,r-=o.left,a-=o.top,e.moveBy(r,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function hk(i){const e=i.parentNode;e&&e.removeChild(i)}function mk({target:i,viewportOffset:e=0,ancestorOffset:t=0,alignToTop:n,forceScroll:o}){const r=Gh(i);let a=r,c=null;for(e=function(d){return typeof d=="number"?{top:d,bottom:d,left:d,right:d}:d}(e);a;){let d;d=Hx(a==r?i:c),Vx({parent:d,getRect:()=>bk(i,a),alignToTop:n,ancestorOffset:t,forceScroll:o});const h=bk(i,a);if(Fx({window:a,rect:h,viewportOffset:e,alignToTop:n,forceScroll:o}),a.parent!=a){if(c=a.frameElement,a=a.parent,!c)return}else a=null}}function Fx({window:i,rect:e,alignToTop:t,forceScroll:n,viewportOffset:o}){const r=e.clone().moveBy(0,o.bottom),a=e.clone().moveBy(0,-o.top),c=new Me(i).excludeScrollbarsAndBorders(),d=t&&n,h=[a,r].every(_=>c.contains(_));let{scrollX:m,scrollY:g}=i;const k=m,w=g;d?g-=c.top-e.top+o.top:h||(pk(a,c)?g-=c.top-e.top+o.top:gk(r,c)&&(g+=t?e.top-c.top-o.top:e.bottom-c.bottom+o.bottom)),h||(fk(e,c)?m-=c.left-e.left+o.left:kk(e,c)&&(m+=e.right-c.right+o.right)),m==k&&g===w||i.scrollTo(m,g)}function Vx({parent:i,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:o=0,limiterElement:r}){const a=Gh(i),c=t&&n;let d,h,m;const g=r||a.document.body;for(;i!=g;)h=e(),d=new Me(i).excludeScrollbarsAndBorders(),m=d.contains(h),c?i.scrollTop-=d.top-h.top+o:m||(pk(h,d)?i.scrollTop-=d.top-h.top+o:gk(h,d)&&(i.scrollTop+=t?h.top-d.top-o:h.bottom-d.bottom+o)),m||(fk(h,d)?i.scrollLeft-=d.left-h.left+o:kk(h,d)&&(i.scrollLeft+=h.right-d.right+o)),i=i.parentNode}function gk(i,e){return i.bottom>e.bottom}function pk(i,e){return i.top<e.top}function fk(i,e){return i.left<e.left}function kk(i,e){return i.right>e.right}function Gh(i){return Ic(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function Hx(i){if(Ic(i)){let e=i.commonAncestorContainer;return mt(e)&&(e=e.parentNode),e}return i.parentNode}function bk(i,e){const t=Gh(i),n=new Me(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,a=new Me(r).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}const Ux={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Gx={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ye=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Wx=Object.fromEntries(Object.entries(ye).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function is(i){let e;if(typeof i=="string"){if(e=ye[i.toLowerCase()],!e)throw new N("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?ye.alt:0)+(i.ctrlKey?ye.ctrl:0)+(i.shiftKey?ye.shift:0)+(i.metaKey?ye.cmd:0);return e}function Nc(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return is(t.slice(0,-1));const n=is(t);return C.isMac&&n==ye.ctrl?ye.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function wk(i){let e=Nc(i);return Object.entries(C.isMac?Ux:Gx).reduce((t,[n,o])=>(e&ye[n]&&(e&=~ye[n],t+=o),t),"")+(e?Wx[e]:"")}function Wh(i,e){const t=e==="ltr";switch(i){case ye.arrowleft:return t?"left":"right";case ye.arrowright:return t?"right":"left";case ye.arrowup:return"up";case ye.arrowdown:return"down"}}function et(i){return Array.isArray(i)?i:[i]}function qx(i,e,t=1){if(typeof t!="number")throw new N("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(ge.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(ge.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(d,h){return!!ge.window.CKEDITOR_TRANSLATIONS[d]&&!!ge.window.CKEDITOR_TRANSLATIONS[d].dictionary[h]}(i,o))return t!==1?e.plural:e.string;const r=ge.window.CKEDITOR_TRANSLATIONS[i].dictionary,a=ge.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(d=>d===1?0:1),c=r[o];return typeof c=="string"?c:c[Number(a(t))]}ge.window.CKEDITOR_TRANSLATIONS||(ge.window.CKEDITOR_TRANSLATIONS={});const $x=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Ak(i){return $x.includes(i)?"rtl":"ltr"}class Kx{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Ak(this.uiLanguage),this.contentLanguageDirection=Ak(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=et(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(a,c)=>c<r.length?r[c]:a)}(qx(this.uiLanguage,e,n),t)}}class ft extends re(){constructor(e={},t={}){super();const n=zt(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new N("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(r,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new N("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new N("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,a)=>{const c=t._bindToCollection==this,d=t._bindToInternalToExternalMap.get(r);if(c&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const h=e(r);if(!h)return void this._skippedIndexesFromExternal.push(a);let m=a;for(const g of this._skippedIndexesFromExternal)a>g&&m--;for(const g of t._skippedIndexesFromExternal)m>=g&&m++;this._bindToExternalToInternalMap.set(r,h),this._bindToInternalToExternalMap.set(h,r),this.add(h,m);for(let g=0;g<t._skippedIndexesFromExternal.length;g++)m<=t._skippedIndexesFromExternal[g]&&t._skippedIndexesFromExternal[g]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,a)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,h)=>(a<h&&d.push(h-1),a>h&&d.push(h),d),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new N("collection-add-invalid-id",this);if(this.get(n))throw new N("collection-add-item-already-exists",this)}else e[t]=n=Q();return n}_remove(e){let t,n,o,r=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new N("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(c),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function qe(i){const e=i.next();return e.done?null:e.value}class ct extends mi(De()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new N("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class kt{constructor(){this._listener=new(mi())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+is(n),n)})}set(e,t,n={}){const o=Nc(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),a.stop()}),a.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+is(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function co(i){return zt(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}function qh(i,e){let t;function n(...o){n.cancel(),t=setTimeout(()=>i(...o),e)}return n.cancel=()=>{clearTimeout(t)},n}function $h(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function Kh(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Qx=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:‍${e})*`,"ug")}();function Ck(i,e){const t=String(i).matchAll(Qx);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Sn extends ft{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new N("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const r of e)o.delegate(r).to(t)}),this.on("remove",(n,o)=>{for(const r of e)o.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}remove(e){return super.remove(e)}}var Zx=f(3379),oe=f.n(Zx),vk=f(5167),Yx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(vk.Z,Yx),vk.Z.locals;class ae extends mi(De()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new ft,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Kt.bind(this,this)}createCollection(e){const t=new Sn(e);return this._viewCollections.add(t),t}registerChild(e){zt(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){zt(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Kt(e)}extendTemplate(e){Kt.extend(this.template,e)}render(){if(this.isRendered)throw new N("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Kt extends re(){constructor(e){super(),Object.assign(this,Ek(xk(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new N("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Pc(n)?yield n:Qh(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new Jx({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,r)=>new _k({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:r})}}static extend(e,t){if(e._isRendered)throw new N("template-extend-render",[this,e]);Ik(e,Ek(xk(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new N("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Lc(this.text)?this._bindToObservable({schema:this.text,updater:Xx(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const o in this.attributes){const r=t.getAttribute(o),a=this.attributes[o];n&&(n.attributes[o]=r);const c=Mk(a)?a[0].ns:null;if(Lc(a)){const d=Mk(a)?a[0].value:a;n&&Bk(o)&&d.unshift(r),this._bindToObservable({schema:d,updater:eE(t,o,c),data:e})}else if(o=="style"&&typeof a[0]!="string")this._renderStyleAttribute(a[0],e);else{n&&r&&Bk(o)&&a.unshift(r);const d=a.map(h=>h&&h.value||h).reduce((h,m)=>h.concat(m),[]).reduce(Sk,"");rs(d)||t.setAttributeNS(c,o,d)}}}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const r=e[o];Lc(r)?this._bindToObservable({schema:[r],updater:tE(n,o),data:t}):n.style[o]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let r=0;for(const a of this.children)if(Zh(a)){if(!o){a.setParent(t);for(const c of a)n.appendChild(c.element)}}else if(Pc(a))o||(a.isRendered||a.render(),n.appendChild(a.element));else if(hi(a))n.appendChild(a);else if(o){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),a._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:c})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[r,a]=t.split("@");return o.activateDomEventListener(r,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;yk(e,t,n);const r=e.filter(a=>!rs(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));o&&o.bindings.push(r)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const r of o)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const o in t.attributes){const r=t.attributes[o];r===null?n.removeAttribute(o):n.setAttribute(o,r)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],t.children[o])}}class Ta{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>yk(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class Jx extends Ta{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const o=(r,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class _k extends Ta{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!rs(super.getValue(e))&&(this.valueIfTrue||!0)}}function Lc(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Lc):i instanceof Ta)}function yk(i,e,{node:t}){const n=function(r,a){return r.map(c=>c instanceof Ta?c.getValue(a):c)}(i,t);let o;o=i.length==1&&i[0]instanceof _k?n[0]:n.reduce(Sk,""),rs(o)?e.remove():e.set(o)}function Xx(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function eE(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function tE(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function xk(i){return hn(i,e=>{if(e&&(e instanceof Ta||Qh(e)||Pc(e)||Zh(e)))return e})}function Ek(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=et(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)Dk(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=et(t[n].value)),Dk(t,n)}(i.attributes);const e=[];if(i.children)if(Zh(i.children))e.push(i.children);else for(const t of i.children)Qh(t)||Pc(t)||hi(t)?e.push(t):e.push(new Kt(t));i.children=e}return i}function Dk(i,e){i[e]=et(i[e])}function Sk(i,e){return rs(e)?i:rs(i)?e:`${i} ${e}`}function Tk(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function Ik(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Tk(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Tk(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new N("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)Ik(i.children[t++],n)}}function rs(i){return!i&&i!==0}function Pc(i){return i instanceof ae}function Qh(i){return i instanceof Kt}function Zh(i){return i instanceof Sn}function Mk(i){return je(i[0])&&i[0].ns}function Bk(i){return i=="class"||i=="style"}class nE extends Sn{constructor(e,t=[]){super(t),this.locale=e}get bodyCollectionContainer(){return this._bodyCollectionContainer}attachToDom(){this._bodyCollectionContainer=new Kt({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Yl(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Nk=f(1977),oE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Nk.Z,oE),Nk.Z.locals;class pi extends ae{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:o}of Array.from(e.attributes))pi.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}pi.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Lk=f(4971),iE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Lk.Z,iE),Lk.Z.locals;class be extends ae{constructor(e){super(e),this._focusDelayed=null;const t=this.bindTemplate,n=Q();this.set("ariaChecked",void 0),this.set("ariaLabel",void 0),this.set("ariaLabelledBy",`ck-editor__aria-label_${n}`),this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("role",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(),this.iconView=new pi,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],role:t.to("role"),type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-label":t.to("ariaLabel"),"aria-labelledby":t.to("ariaLabelledBy"),"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-checked":t.to("isOn"),"aria-pressed":t.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};C.isSafari&&(this._focusDelayed||(this._focusDelayed=qh(()=>this.focus(),0)),o.on.mousedown=t.to(()=>{this._focusDelayed()}),o.on.mouseup=t.to(()=>{this._focusDelayed.cancel()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}destroy(){this._focusDelayed&&this._focusDelayed.cancel(),super.destroy()}_createLabelView(){const e=new ae,t=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:t.to("labelStyle"),id:this.ariaLabelledBy},children:[{text:t.to("label")}]}),e}_createKeystrokeView(){const e=new ae;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>wk(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=wk(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Pk=f(7258),rE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Pk.Z,rE),Pk.Z.locals;class Ia extends be{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new ae;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}function sE(i){return typeof i=="string"?{model:i,label:i,hasBorder:!1,view:{name:"span",styles:{color:i}}}:{model:i.color,label:i.label||i.color,hasBorder:i.hasBorder!==void 0&&i.hasBorder,view:{name:"span",styles:{color:`${i.color}`}}}}class zk extends be{constructor(e){super(e);const t=this.bindTemplate;this.set("color",void 0),this.set("hasBorder",!1),this.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',this.extendTemplate({attributes:{style:{backgroundColor:t.to("color")},class:["ck","ck-color-grid__tile",t.if("hasBorder","ck-color-selector__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}var Ok=f(4923),aE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Ok.Z,aE),Ok.Z.locals;class Rk extends ae{constructor(e,t){super(e);const n=t&&t.colorDefinitions?t.colorDefinitions:[];this.columns=t&&t.columns?t.columns:5;const o={gridTemplateColumns:`repeat( ${this.columns}, 1fr)`};this.set("selectedColor",void 0),this.items=this.createCollection(),this.focusTracker=new ct,this.keystrokes=new kt,this.items.on("add",(r,a)=>{a.isOn=a.color===this.selectedColor}),n.forEach(r=>{const a=new zk;a.set({color:r.color,label:r.label,tooltip:!0,hasBorder:r.options.hasBorder}),a.on("execute",()=>{this.fire("execute",{value:r.color,hasBorder:r.options.hasBorder,label:r.label})}),this.items.add(a)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:o}}),this.on("change:selectedColor",(r,a,c)=>{for(const d of this.items)d.isOn=d.color===c})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),S({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:this.columns,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}}var jk=f(8874);const Fk=function(i){var e,t,n=[],o=1;if(typeof i=="string")if(jk[i])n=jk[i].slice(),t="rgb";else if(i==="transparent")o=0,t="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(i)){var r=i.slice(1);o=1,(d=r.length)<=4?(n=[parseInt(r[0]+r[0],16),parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16)],d===4&&(o=parseInt(r[3]+r[3],16)/255)):(n=[parseInt(r[0]+r[1],16),parseInt(r[2]+r[3],16),parseInt(r[4]+r[5],16)],d===8&&(o=parseInt(r[6]+r[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),t="rgb"}else if(e=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(i)){var a=e[1],c=a==="rgb";t=r=a.replace(/a$/,"");var d=r==="cmyk"?4:r==="gray"?1:3;n=e[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(h,m){if(/%$/.test(h))return m===d?parseFloat(h)/100:r==="rgb"?255*parseFloat(h)/100:parseFloat(h);if(r[m]==="h"){if(/deg$/.test(h))return parseFloat(h);if(Vk[h]!==void 0)return Vk[h]}return parseFloat(h)}),a===r&&n.push(1),o=c||n[d]===void 0?1:n[d],n=n.slice(0,d)}else i.length>10&&/[0-9](?:\s|\/)/.test(i)&&(n=i.match(/([0-9]+)/g).map(function(h){return parseFloat(h)}),t=i.match(/([a-z])/gi).join("").toLowerCase());else isNaN(i)?Array.isArray(i)||i.length?(n=[i[0],i[1],i[2]],t="rgb",o=i.length===4?i[3]:1):i instanceof Object&&(i.r!=null||i.red!=null||i.R!=null?(t="rgb",n=[i.r||i.red||i.R||0,i.g||i.green||i.G||0,i.b||i.blue||i.B||0]):(t="hsl",n=[i.h||i.hue||i.H||0,i.s||i.saturation||i.S||0,i.l||i.lightness||i.L||i.b||i.brightness]),o=i.a||i.alpha||i.opacity||1,i.opacity!=null&&(o/=100)):(t="rgb",n=[i>>>16,(65280&i)>>>8,255&i]);return{space:t,values:n,alpha:o}};var Vk={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},Hk=f(2085);function Uk(i,e){if(!i)return"";const t=Gk(i);if(!t)return"";if(t.space===e)return i;if(n=t,!Object.keys(Hk).includes(n.space))return"";var n;const o=Hk[t.space][e];return o?function(r,a){switch(a){case"hex":return`#${r}`;case"rgb":return`rgb( ${r[0]}, ${r[1]}, ${r[2]} )`;case"hsl":return`hsl( ${r[0]}, ${r[1]}%, ${r[2]}% )`;case"hwb":return`hwb( ${r[0]}, ${r[1]}, ${r[2]} )`;case"lab":return`lab( ${r[0]}% ${r[1]} ${r[2]} )`;case"lch":return`lch( ${r[0]}% ${r[1]} ${r[2]} )`;default:return""}}(o(t.space==="hex"?t.hexValue:t.values),e):""}function Gk(i){if(i.startsWith("#")){const t=Fk(i);return{space:"hex",values:t.values,hexValue:i,alpha:t.alpha}}const e=Fk(i);return e.space?e:null}const Yh=function(){return cn.Date.now()};var lE=/\s/;const cE=function(i){for(var e=i.length;e--&&lE.test(i.charAt(e)););return e};var dE=/^\s+/;const uE=function(i){return i&&i.slice(0,cE(i)+1).replace(dE,"")},zc=function(i){return typeof i=="symbol"||Ct(i)&&no(i)=="[object Symbol]"};var hE=/^[-+]0x[0-9a-f]+$/i,mE=/^0b[01]+$/i,gE=/^0o[0-7]+$/i,pE=parseInt;const Wk=function(i){if(typeof i=="number")return i;if(zc(i))return NaN;if(je(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=je(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=uE(i);var t=mE.test(i);return t||gE.test(i)?pE(i.slice(2),t?2:8):hE.test(i)?NaN:+i};var fE=Math.max,kE=Math.min;const or=function(i,e,t){var n,o,r,a,c,d,h=0,m=!1,g=!1,k=!0;if(typeof i!="function")throw new TypeError("Expected a function");function w(V){var $=n,Y=o;return n=o=void 0,h=V,a=i.apply(Y,$)}function _(V){var $=V-d;return d===void 0||$>=e||$<0||g&&V-h>=r}function x(){var V=Yh();if(_(V))return I(V);c=setTimeout(x,function($){var Y=e-($-d);return g?kE(Y,r-($-h)):Y}(V))}function I(V){return c=void 0,k&&n?w(V):(n=o=void 0,a)}function L(){var V=Yh(),$=_(V);if(n=arguments,o=this,d=V,$){if(c===void 0)return function(Y){return h=Y,c=setTimeout(x,e),m?w(Y):a}(d);if(g)return clearTimeout(c),c=setTimeout(x,e),w(d)}return c===void 0&&(c=setTimeout(x,e)),a}return e=Wk(e)||0,je(t)&&(m=!!t.leading,r=(g="maxWait"in t)?fE(Wk(t.maxWait)||0,e):r,k="trailing"in t?!!t.trailing:k),L.cancel=function(){c!==void 0&&clearTimeout(c),h=0,n=d=o=c=void 0},L.flush=function(){return c===void 0?a:I(Yh())},L};var qk=f(3525),bE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(qk.Z,bE),qk.Z.locals;class Oc extends ae{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${Q()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}var $k=f(2933),wE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()($k.Z,wE),$k.Z.locals;class ss extends ae{constructor(e,t){super(e);const n=`ck-labeled-field-view-${Q()}`,o=`ck-labeled-field-view-status-${Q()}`;this.fieldView=t(this,n,o),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,c)=>a||c);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",a=>!a),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new Oc(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new ae(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}var Kk=f(2470),AE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Kk.Z,AE),Kk.Z.locals;class Qk extends ae{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new ct,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class CE extends Qk{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}class vE extends Qk{constructor(e,{min:t,max:n,step:o}={}){super(e);const r=this.bindTemplate;this.set("min",t),this.set("max",n),this.set("step",o),this.extendTemplate({attributes:{type:"number",class:["ck-input-number"],min:r.to("min"),max:r.to("max"),step:r.to("step")}})}}class _E extends ae{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():te("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var Zk=f(5062),yE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Zk.Z,yE),Zk.Z.locals;class as extends ae{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new kt,this.focusTracker=new ct,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=as._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:r,northWest:a,southMiddleEast:c,southMiddleWest:d,northMiddleEast:h,northMiddleWest:m}=as.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,c,d,e,r,a,h,m,t]:[o,n,d,c,e,a,r,m,h,t]}}as.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},as._getOptimalPosition=dk;const Jh='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class xE extends be{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new pi;return e.content=Jh,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}class Fn{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(r,a)=>{this[t](),a()})}}get first(){return this.focusables.find(Xh)||null}get last(){return this.focusables.filter(Xh).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const r=this.focusables.get(o);if(Xh(r))return r;o=(o+n+e)%n}while(o!==t);return null}}function Xh(i){return!(!i.focus||!gi(i.element))}class em extends ae{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class EE extends ae{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Yk(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}class W extends De(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Jk,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Jk),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Jk(i){i.return=!1,i.stop()}class ue extends De(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,o=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!o)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Xk,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Xk),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Xk(i){i.return=!1,i.stop()}class eb extends ue{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){K(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class tb extends re(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new N("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function _(x,I=new Set){x.forEach(L=>{d(L)&&(I.has(L)||(I.add(L),L.pluginName&&!o._availablePlugins.has(L.pluginName)&&o._availablePlugins.set(L.pluginName,L),L.requires&&_(L.requires,I)))})})(e),k(e);const a=[...function _(x,I=new Set){return x.map(L=>d(L)?L:o._availablePlugins.get(L)).reduce((L,V)=>I.has(V)?L:(I.add(V),V.requires&&(k(V.requires,V),_(V.requires,I).forEach($=>L.add($))),L.add(V)),new Set)}(e.filter(_=>!m(_,t)))];(function(_,x){for(const I of x){if(typeof I!="function")throw new N("plugincollection-replace-plugin-invalid-type",null,{pluginItem:I});const L=I.pluginName;if(!L)throw new N("plugincollection-replace-plugin-missing-name",null,{pluginItem:I});if(I.requires&&I.requires.length)throw new N("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:L});const V=o._availablePlugins.get(L);if(!V)throw new N("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:L});const $=_.indexOf(V);if($===-1){if(o._contextPlugins.has(V))return;throw new N("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:L})}if(V.requires&&V.requires.length)throw new N("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:L});_.splice($,1,I),o._availablePlugins.set(L,I)}})(a,n);const c=function(_){return _.map(x=>{let I=o._contextPlugins.get(x);return I=I||new x(r),o._add(x,I),I})}(a);return w(c,"init").then(()=>w(c,"afterInit")).then(()=>c);function d(_){return typeof _=="function"}function h(_){return d(_)&&!!_.isContextPlugin}function m(_,x){return x.some(I=>I===_||g(_)===I||g(I)===_)}function g(_){return d(_)?_.pluginName||_.name:_}function k(_,x=null){_.map(I=>d(I)?I:o._availablePlugins.get(I)||I).forEach(I=>{(function(L,V){if(!d(L))throw V?new N("plugincollection-soft-required",r,{missingPlugin:L,requiredBy:g(V)}):new N("plugincollection-plugin-not-found",r,{plugin:L})})(I,x),function(L,V){if(h(V)&&!h(L))throw new N("plugincollection-context-required",r,{plugin:g(L),requiredBy:g(V)})}(I,x),function(L,V){if(V&&m(L,t))throw new N("plugincollection-required",r,{plugin:g(L),requiredBy:g(V)})}(I,x)})}function w(_,x){return _.reduce((I,L)=>L[x]?o._contextPlugins.has(L)?I:I.then(L[x].bind(L)):I,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new N("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class nb{constructor(e){this._contextOwner=null,this.config=new Xf(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new tb(this,t);const n=this.config.get("language")||{};this.locale=new Kx({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new ft}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new N("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new N("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new N("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Rc extends De(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var ob=f(7372),DE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(ob.Z,DE),ob.Z.locals;const jc=new WeakMap;let ib=!1;function rb({view:i,element:e,text:t,isDirectHost:n=!0,keepOnFocus:o=!1}){const r=i.document;function a(c){jc.get(r).set(e,{text:c,isDirectHost:n,keepOnFocus:o,hostElement:n?e:null}),i.change(d=>tm(r,d))}jc.has(r)||(jc.set(r,new Map),r.registerPostFixer(c=>tm(r,c)),r.on("change:isComposing",()=>{i.change(c=>tm(r,c))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(c,d,h)=>{a(h)}),e.placeholder?a(e.placeholder):t&&a(t),t&&function(){ib||te("enableplaceholder-deprecated-text-option"),ib=!0}()}function SE(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function tm(i,e){const t=jc.get(i),n=[];let o=!1;for(const[r,a]of t)a.isDirectHost&&(n.push(r),sb(e,r,a)&&(o=!0));for(const[r,a]of t){if(a.isDirectHost)continue;const c=TE(r);c&&(n.includes(c)||(a.hostElement=c,sb(e,r,a)&&(o=!0)))}return o}function sb(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let a=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),a=!0),(o||e.childCount==1)&&function(c,d){if(!c.isAttached()||Array.from(c.getChildren()).some(k=>!k.is("uiElement")))return!1;const m=c.document,g=m.selection.anchor;return!(m.isComposing&&g&&g.parent===c||!d&&m.isFocused&&(!g||g.parent===c))}(r,t.keepOnFocus)?function(c,d){return!d.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",d),!0)}(i,r)&&(a=!0):SE(i,r)&&(a=!0),a}function TE(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class ir{is(){throw new Error("is() method is abstract")}}const ab=function(i){return St(i,4)};class rr extends re(ir){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new N("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Et(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=ab(this);return delete e.parent,e}}rr.prototype.is=function(i){return i==="node"||i==="view:node"};class ze extends rr{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof ze&&(this===e||this.data===e.data)}_clone(){return new ze(this.document,this.data)}}ze.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class uo extends ir{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new N("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new N("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}uo.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class mn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=lb(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=lb(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function lb(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Dt(n)?(n.style!==void 0&&te("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&te("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),nm(n,r,a=>o.getAttribute(a))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return nm(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return nm(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles)?null:t}function nm(i,e,t){const n=function(a){return Array.isArray(a)?a.map(c=>Dt(c)?(c.key!==void 0&&c.value!==void 0||te("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Dt(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(e),r=[];if(n.forEach(([a,c])=>{o.forEach(d=>{(function(h,m){return h===!0||h===m||h instanceof RegExp&&m.match(h)})(a,d)&&function(h,m,g){if(h===!0)return!0;const k=g(m);return h===k||h instanceof RegExp&&!!String(k).match(h)}(c,d,t)&&r.push(d)})}),n.length&&!(r.length<n.length))return r}var IE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ME=/^\w*$/;const BE=function(i,e){if(Je(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!zc(i))||ME.test(i)||!IE.test(i)||e!=null&&i in Object(e)};function om(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var a=i.apply(this,n);return t.cache=r.set(o,a)||r,a};return t.cache=new(om.Cache||Gr),t}om.Cache=Gr;const NE=om,LE=function(i){var e=NE(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var PE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zE=/\\(\\)?/g,OE=LE(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(PE,function(t,n,o,r){e.push(o?r.replace(zE,"$1"):n||t)}),e});const RE=OE,cb=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var db=Dn?Dn.prototype:void 0,ub=db?db.toString:void 0;const jE=function i(e){if(typeof e=="string")return e;if(Je(e))return cb(e,i)+"";if(zc(e))return ub?ub.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Ma=function(i){return i==null?"":jE(i)},im=function(i,e){return Je(i)?i:BE(i,e)?[i]:RE(Ma(i))},FE=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},rm=function(i){if(typeof i=="string"||zc(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},hb=function(i,e){for(var t=0,n=(e=im(e,i)).length;i!=null&&t<n;)i=i[rm(e[t++])];return t&&t==n?i:void 0},mb=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},VE=function(i,e){return e.length<2?i:hb(i,mb(e,0,-1))},HE=function(i,e){return e=im(e,i),(i=VE(i,e))==null||delete i[rm(FE(e))]},UE=function(i,e){return i==null||HE(i,e)},Fc=function(i,e,t){var n=i==null?void 0:hb(i,e);return n===void 0?t:n},sm=function(i,e,t){(t!==void 0&&!$i(i[e],t)||t===void 0&&!(e in i))&&ma(i,e,t)},GE=function(i){return function(e,t,n){for(var o=-1,r=Object(e),a=n(e),c=a.length;c--;){var d=a[i?c:++o];if(t(r[d],d,r)===!1)break}return e}}(),WE=function(i){return Ct(i)&&Zr(i)},am=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},qE=function(i){return si(i,ai(i))},$E=function(i,e,t,n,o,r,a){var c=am(i,t),d=am(e,t),h=a.get(d);if(h)sm(i,t,h);else{var m=r?r(c,d,t+"",i,e,a):void 0,g=m===void 0;if(g){var k=Je(d),w=!k&&Mo(d),_=!k&&!w&&er(d);m=d,k||w||_?Je(c)?m=c:WE(c)?m=Jr(c):w?(g=!1,m=va(d,!0)):_?(g=!1,m=G(d,!0)):m=[]:Dt(d)||fa(d)?(m=c,fa(c)?m=qE(c):je(c)&&!oo(c)||(m=fe(d))):g=!1}g&&(a.set(d,m),o(m,d,n,r,a),a.delete(d)),sm(i,t,m)}},gb=function i(e,t,n,o,r){e!==t&&GE(t,function(a,c){if(r||(r=new Io),je(a))$E(e,t,c,n,i,o,r);else{var d=o?o(am(e,c),a,c+"",e,t,r):void 0;d===void 0&&(d=a),sm(e,c,d)}},ai)},sr=function(i){return i},KE=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var pb=Math.max;const QE=function(i,e,t){return e=pb(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=pb(n.length-e,0),a=Array(r);++o<r;)a[o]=n[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=n[o];return c[e]=t(a),KE(i,this,c)}},ZE=function(i){return function(){return i}},YE=Wr?function(i,e){return Wr(i,"toString",{configurable:!0,enumerable:!1,value:ZE(e),writable:!0})}:sr;var JE=Date.now;const XE=function(i){var e=0,t=0;return function(){var n=JE(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(YE),fb=function(i,e){return XE(QE(i,e,sr),i+"")},e5=function(i,e,t){if(!je(t))return!1;var n=typeof e;return!!(n=="number"?Zr(t)&&qr(e,t.length):n=="string"&&e in t)&&$i(t[e],i)},lm=function(i){return fb(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,a&&e5(t[0],t[1],a)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var c=t[n];c&&i(e,c,n,r)}return e})},kb=lm(function(i,e,t){gb(i,e,t)}),t5=function(i,e,t,n){if(!je(i))return i;for(var o=-1,r=(e=im(e,i)).length,a=r-1,c=i;c!=null&&++o<r;){var d=rm(e[o]),h=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return i;if(o!=a){var m=c[d];(h=n?n(m,d,c):void 0)===void 0&&(h=je(m)?m:qr(e[o+1])?[]:{})}Zi(c,d,h),c=c[d]}return i},n5=function(i,e,t){return i==null?i:t5(i,e,t)};class o5{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,a=0,c=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let h=0;h<n.length;h++){const m=n.charAt(h);if(o===null)switch(m){case":":c||(c=n.substr(r,h-r),a=h+1);break;case'"':case"'":o=m;break;case";":{const g=n.substr(a,h-a);c&&d.set(c.trim(),g.trim()),c=null,r=h+1;break}}else m===o&&(o=null)}return d}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(je(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=cm(e);UE(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!je(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=Fc(this._styles,n);o&&!Array.from(Object.keys(o)).length&&this.remove(n)}}class i5{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(je(t))dm(n,cm(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:a}=o(t);dm(n,r,a)}else dm(n,e,t)}getNormalized(e,t){if(!e)return kb({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Fc(t,n);const o=n(e,t);if(o)return o}return Fc(t,cm(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function cm(i){return i.replace("-",".")}function dm(i,e,t){let n=t;je(t)&&(n=kb({},Fc(i,e),t)),n5(i,e,n)}class gn extends rr{constructor(e,t,n,o){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(r){const a=co(r);for(const[c,d]of a)d===null?a.delete(c):typeof d!="string"&&a.set(c,String(d));return a}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");bb(this._classes,r),this._attrs.delete("class")}this._styles=new o5(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof gn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new mn(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new ze(r,a)]:(zt(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new ze(r,c):c instanceof uo?new ze(r,c.data):c))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?bb(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of et(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of et(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of et(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function bb(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}gn.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Ba extends gn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=wb}}function wb(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}Ba.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Vc extends De(Ba){constructor(e,t,n,o){super(e,t,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Vc.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Ab=Symbol("rootName");class Cb extends Vc{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Ab)}set rootName(e){this._setCustomProperty(Ab,e)}set _name(e){this.name=e}}Cb.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class ar{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new N("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new N("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=ne._createAt(e.startPosition):this._position=ne._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof ze){if(e.isAtEnd)return this._position=ne._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof gn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new ne(o,0);return this._position=e,this._formatReturnValue("elementStart",o,t,e,1)}if(o instanceof ze){if(this.singleCharacters)return e=new ne(o,0),this._position=e,this._next();let r,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,r=new uo(o,0,a),e=ne._createAfter(r)):(r=new uo(o,0,o.data.length),e.offset++),this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new uo(n,e.offset,r);return e.offset+=r,this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=ne._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof ze){if(e.isAtStart)return this._position=ne._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof gn)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new ne(o,o.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof ze){if(this.singleCharacters)return e=new ne(o,o.data.length),this._position=e,this._previous();let r,a=o.data.length;if(o==this._boundaryStartParent){const c=this.boundaries.start.offset;r=new uo(o,c,o.data.length-c),a=r.data.length,e=ne._createBefore(r)}else r=new uo(o,0,o.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",r,t,e,a)}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-c}e.offset-=r;const a=new uo(n,e.offset,r);return this._position=e,this._formatReturnValue("text",a,t,e,r)}return e=ne._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof uo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ne._createAfter(t.textNode):(o=ne._createAfter(t.textNode),this._position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ne._createBefore(t.textNode):(o=ne._createBefore(t.textNode),this._position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class ne extends ir{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Vc);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ne._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ar(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=Et(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ar(e)}clone(){return new ne(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ne)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new N("view-createpositionat-offset-required",n)}return new ne(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new N("view-position-after-root",e,{root:e});return new ne(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText);if(!e.parent)throw new N("view-position-before-root",e,{root:e});return new ne(e.parent,e.index)}}ne.prototype.is=function(i){return i==="position"||i==="view:position"};class he extends ir{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ar({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Hc,{direction:"backward"}),t=this.end.getLastMatchingPosition(Hc);return e.parent.is("$text")&&e.isAtStart&&(e=ne._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ne._createAfter(t.parent)),new he(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Hc);if(e.isAfter(this.end)||e.isEqual(this.end))return new he(e,e);let t=this.end.getLastMatchingPosition(Hc,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new ne(n,0)),o&&o.is("$text")&&(t=new ne(o,o.data.length)),new he(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new he(this.start,e.start)),this.containsPosition(e.end)&&t.push(new he(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new he(t,n)}return null}getWalker(e={}){return e.boundaries=this,new ar(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new he(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ar(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ar(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new ne(e,t),new ne(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ne._createBefore(e),t)}}function Hc(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}he.prototype.is=function(i){return i==="range"||i==="view:range"};class ho extends re(ir){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=sa(this.getRanges());if(t!=sa(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof ho||t instanceof um)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof he)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof ne)this._setRanges([new he(t)]),this._setFakeOptions(o);else if(t instanceof rr){const r=!!o&&!!o.backward;let a;if(n===void 0)throw new N("view-selection-setto-required-second-parameter",this);a=n=="in"?he._createIn(t):n=="on"?he._createOn(t):new he(ne._createAt(t,n)),this._setRanges([a],r),this._setFakeOptions(o)}else{if(!zt(t))throw new N("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new N("view-selection-setfocus-no-ranges",this);const n=ne._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new he(n,o),!0):this._addRange(new he(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof he))throw new N("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new N("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new he(e.start,e.end))}}ho.prototype.is=function(i){return i==="selection"||i==="view:selection"};class um extends re(ir){constructor(...e){super(),this._selection=new ho,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}um.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class ls extends R{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const hm=Symbol("bubbling contexts");function mm(i){return class extends i{fire(e,...t){try{const n=e instanceof R?e:new R(this,e),o=gm(this);if(!o.size)return;if(Na(n,"capturing",this),cs(o,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),a=r?r.getContainedElement():null,c=!!a&&!!vb(o,a);let d=a||function(h){if(!h)return null;const m=h.start.parent,g=h.end.parent,k=m.getPath(),w=g.getPath();return k.length>w.length?m:g}(r);if(Na(n,"atTarget",d),!c){if(cs(o,"$text",n,...t))return n.return;Na(n,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(cs(o,"$root",n,...t))return n.return}else if(d.is("element")&&cs(o,d.name,n,...t))return n.return;if(cs(o,d,n,...t))return n.return;d=d.parent,Na(n,"bubbling",d)}return Na(n,"bubbling",this),cs(o,"$document",n,...t),n.return}catch(n){N.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=et(n.context||"$document"),r=gm(this);for(const a of o){let c=r.get(a);c||(c=new(re()),r.set(a,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=gm(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=mm(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{mm[e]=i.prototype[e]})}function Na(i,e,t){i instanceof ls&&(i._eventPhase=e,i._currentTarget=t)}function cs(i,e,t,...n){const o=typeof e=="string"?i.get(e):vb(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function vb(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function gm(i){return i[hm]||(i[hm]=new Map),i[hm]}class Uc extends mm(De()){constructor(e){super(),this._postFixers=new Set,this.selection=new um,this.roots=new ft({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class lr extends gn{constructor(e,t,n,o){super(e,t,n,o),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=r5}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new N("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function r5(){if(pm(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(pm(i)>1)return null;i=i.parent}return!i||pm(i)>1?null:this.childCount}function pm(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}lr.DEFAULT_PRIORITY=10,lr.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class fm extends gn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=s5}_insertChild(e,t){if(t&&(t instanceof rr||Array.from(t).length>0))throw new N("view-emptyelement-cannot-add",[this,t]);return 0}}function s5(){return null}fm.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Gc extends gn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=l5}_insertChild(e,t){if(t&&(t instanceof rr||Array.from(t).length>0))throw new N("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function a5(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==ye.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),c=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(c||o.shiftKey){const d=a.focusNode,h=a.focusOffset,m=r.domPositionToView(d,h);if(m===null)return;let g=!1;const k=m.getLastMatchingPosition(w=>(w.item.is("uiElement")&&(g=!0),!(!w.item.is("uiElement")&&!w.item.is("attributeElement"))));if(g){const w=r.viewPositionToDom(k);c?a.collapse(w.parent,w.offset):a.extend(w.parent,w.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function l5(){return null}Gc.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class km extends gn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=c5}_insertChild(e,t){if(t&&(t instanceof rr||Array.from(t).length>0))throw new N("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function c5(){return null}km.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class cr extends re(ir){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,a){return typeof a=="string"?[new ze(r,a)]:(zt(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new ze(r,c):c instanceof uo?new ze(r,c.data):c))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}cr.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class _b{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new cr(this.document,e)}createText(e){return new ze(this.document,e)}createAttributeElement(e,t,n={}){const o=new lr(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;Dt(n)?o=n:r=n;const a=new Ba(this.document,e,t,r);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new Vc(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new fm(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Gc(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new km(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Dt(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ne?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new N("view-writer-break-non-container-element",this.document);if(!t.parent)throw new N("view-writer-break-root",this.document);if(e.isAtStart)return ne._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ne._createAfter(t),n);const o=new he(e,ne._createAt(t,"end")),r=new ne(n,0);this.move(o,r)}return ne._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ne(a,c))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return xb(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const a=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new ne(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new N("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof ze?ne._createAt(o,"end"):ne._createAt(t,"end");return this.move(he._createIn(n),ne._createAt(t,"end")),this.remove(he._createOn(n)),r}insert(e,t){Eb(t=zt(t)?[...t]:[t],this.document);const n=t.reduce((a,c)=>{const d=a[a.length-1],h=!c.is("uiElement");return d&&d.breakAttributes==h?d.nodes.push(c):a.push({breakAttributes:h,nodes:[c]}),a},[]);let o=null,r=e;for(const{nodes:a,breakAttributes:c}of n){const d=this._insertNodes(r,a,c);o||(o=d.start),r=d.end}return o?new he(o,r):new he(e)}remove(e){const t=e instanceof he?e:he._createOn(e);if(La(t,this.document),t.isCollapsed)return new cr(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,a=o.offset-n.offset,c=r._removeChildren(n.offset,a);for(const h of c)this._removeFromClonedElementsGroup(h);const d=this.mergeAttributes(n);return t.start=d,t.end=d.clone(),new cr(this.document,c)}clear(e,t){La(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let a;if(r.is("element")&&t.isSimilar(r))a=he._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const c=r.getAncestors().find(d=>d.is("element")&&t.isSimilar(d));c&&(a=he._createIn(c))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof lr))throw new N("view-writer-wrap-invalid-attribute",this.document);if(La(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new he(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof lr))throw new N("view-writer-unwrap-invalid-attribute",this.document);if(La(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._unwrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new he(c,d)}rename(e,t){const n=new Ba(this.document,e,t.getAttributes());return this.insert(ne._createAfter(t),n),this.move(he._createIn(t),ne._createAt(n,0)),this.remove(he._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ne._createAt(e,t)}createPositionAfter(e){return ne._createAfter(e)}createPositionBefore(e){return ne._createBefore(e)}createRange(e,t){return new he(e,t)}createRangeOn(e){return he._createOn(e)}createRangeIn(e){return he._createIn(e)}createSelection(...e){return new ho(...e)}createSlot(e="children"){if(!this._slotFactory)throw new N("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?bm(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new N("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?wm(e):e;const a=o._insertChild(r.offset,t);for(const m of t)this._addToClonedElementsGroup(m);const c=r.getShiftedBy(a),d=this.mergeAttributes(r);d.isEqual(r)||c.offset--;const h=this.mergeAttributes(c);return new he(d,h)}_wrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const d=e.getChild(r),h=d.is("$text"),m=d.is("attributeElement");if(m&&this._wrapAttributeElement(o,d))a.push(new ne(e,r));else if(h||!m||d5(o,d)){const g=o._clone();d._remove(),g._appendChild(d),e._insertChild(r,g),this._addToClonedElementsGroup(g),a.push(new ne(e,r))}else this._wrapChildren(d,0,d.childCount,o);r++}let c=0;for(const d of a)d.offset-=c,d.offset!=t&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return he._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const a=[];for(;r<n;){const d=e.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(o)){const h=d.getChildren(),m=d.childCount;d._remove(),e._insertChild(r,h),this._removeFromClonedElementsGroup(d),a.push(new ne(e,r),new ne(e,r+m)),r+=m,n+=m-1}else this._unwrapAttributeElement(o,d)?(a.push(new ne(e,r),new ne(e,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,o),r++);else r++}let c=0;for(const d of a)d.offset-=c,!(d.offset==t||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return he._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,a=this._wrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const d=this.mergeAttributes(a.end);return new he(c,d)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return yb(e.clone());e.parent.is("$text")&&(e=wm(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new he(e,e.getShiftedBy(1));this.wrap(o,t);const r=new ne(n.parent,n.index);n._remove();const a=r.nodeBefore,c=r.nodeAfter;return a instanceof ze&&c instanceof ze?xb(a,c):yb(r)}_wrapAttributeElement(e,t){if(!Db(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Db(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(La(e,this.document),e.isCollapsed){const d=this._breakAttributes(e.start,t);return new he(d,d)}const r=this._breakAttributes(o,t),a=r.parent.childCount,c=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-a,new he(c,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new N("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new N("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new N("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Am(o.parent)||Am(o))return e.clone();if(o.is("$text"))return this._breakAttributes(wm(e),t);if(n==o.childCount){const r=new ne(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new ne(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,a=o._clone();o.parent._insertChild(r,a),this._addToClonedElementsGroup(a);const c=o.childCount-n,d=o._removeChildren(n,c);a._appendChild(d);const h=new ne(o.parent,r);return this._breakAttributes(h,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function bm(i){let e=i.parent;for(;!Am(e);){if(!e)return;e=e.parent}return e}function d5(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function yb(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ne(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ne(t,0):i}function wm(i){if(i.offset==i.parent.data.length)return new ne(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ne(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new ze(i.root.document,e)),new ne(i.parent.parent,i.parent.index+1)}function xb(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ne(i,t)}const u5=[ze,lr,Ba,fm,km,Gc];function Eb(i,e){for(const t of i){if(!u5.some(n=>t instanceof n))throw new N("view-writer-insert-invalid-node-type",e);t.is("$text")||Eb(t.getChildren(),e)}}function Am(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function La(i,e){const t=bm(i.start),n=bm(i.end);if(!t||!n||t!==n)throw new N("view-writer-invalid-range-container",e)}function Db(i,e){return i.id===null&&e.id===null}const Sb=i=>i.createTextNode(" "),Tb=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Ib=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Vn=7,Pa="⁠".repeat(Vn);function pn(i){return typeof i=="string"?i.substr(0,Vn)===Pa:mt(i)&&i.data.substr(0,Vn)===Pa}function za(i){return i.data.length==Vn&&pn(i)}function Mb(i){const e=typeof i=="string"?i:i.data;return pn(i)?e.slice(Vn):e}function h5(i,e){if(e.keyCode==ye.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;pn(n)&&o<=Vn&&t.collapse(n,0)}}}var Bb=f(5037),m5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(Bb.Z,m5),Bb.Z.locals;class g5 extends De(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),C.isBlink&&!C.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new N("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!C.isAndroid)return;let e=null;const t=!(C.isBlink&&!C.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ne._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;pn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Nb(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),r=this._findUpdateActions(o,t,n,p5);if(r.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of r)if(c==="update"){const d=a.equal+a.insert,h=a.equal+a.delete,m=e.getChild(d);!m||m.is("uiElement")||m.is("rawElement")||this._updateElementMappings(m,t[h]),hk(n[d]),a.equal++}else a[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ne._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&mt(t.parent)&&pn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!pn(e))throw new N("view-renderer-filler-was-lost",this);za(e)?e.remove():e.data=e.data.substr(Vn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const c=a.findAncestor(d=>d.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof ze||r instanceof ze)&&(!C.isAndroid||!o&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(o=Pa+o),Lb(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(C.isAndroid){let g=null;for(const k of Array.from(n.childNodes)){if(g&&mt(g)&&mt(k)){n.normalize();break}g=k}}const o=t.inlineFillerPosition,r=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Nb(n.ownerDocument,a,o.offset);const c=this._diffNodeLists(r,a),d=this._findUpdateActions(c,r,a,f5);let h=0;const m=new Set;for(const g of d)g==="delete"?(m.add(r[h]),hk(r[h])):g!=="equal"&&g!=="update"||h++;h=0;for(const g of d)g==="insert"?(lk(n,h,a[h]),h++):g==="update"?(Lb(r[h],a[h].data),h++):g==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[h])),h++);for(const g of m)g.parentNode||this.domConverter.unbindDomElement(g)}_diffNodeLists(e,t){return e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),z(e,t,k5.bind(null,this.domConverter))}_findUpdateActions(e,t,n,o){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],a=[],c=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?c.push(n[d.equal+d.insert]):h==="delete"?a.push(t[d.equal+d.delete]):(r=r.concat(z(a,c,o).map(m=>m==="equal"?"update":m)),r.push("equal"),a=[],c=[]),d[h]++;return r.concat(z(a,c,o).map(h=>h==="equal"?"update":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(C.isBlink&&!C.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&C.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const c=a.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,o.parent,o.offset),C.isGecko&&function(r,a){const c=r.parent;if(c.nodeType!=Node.ELEMENT_NODE||r.offset!=c.childNodes.length-1)return;const d=c.childNodes[r.offset];d&&d.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Nb(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(mt(o))return o.data=Pa+o.data,o;{const r=i.createTextNode(Pa);return Array.isArray(e)?n.splice(t,0,r):lk(e,t,r),r}}function p5(i,e){return hi(i)&&hi(e)&&!mt(i)&&!mt(e)&&!Sa(i)&&!Sa(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function f5(i,e){return hi(i)&&hi(e)&&mt(i)&&mt(e)}function k5(i,e,t){return e===t||(mt(e)&&mt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Lb(i,e){const t=i.data;if(t==e)return;const n=O(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const b5=Ib(ge.document),w5=Sb(ge.document),A5=Tb(ge.document),Wc="data-ck-unsafe-attribute-",Pb="data-ck-unsafe-element";class qc{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new mn,this._inlineObjectElementMatcher=new mn,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ge.document:ge.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new ho(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),c=[];let d;for(;d=a.nextNode();)c.push(d);for(const h of c){for(const g of h.getAttributeNames())this.setDomElementAttribute(h,g,h.getAttribute(g));const m=h.tagName.toLowerCase();this._shouldRenameElement(m)&&(Rb(m),h.replaceWith(this._createReplacementDomElement(m,h)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Rb(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||te("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),ck(t)?(e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Wc+t)&&r&&e.removeAttribute(Wc+t),e.setAttribute(r?t:Wc+t,n)):te("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=Pb&&(e.removeAttribute(t),e.removeAttribute(Wc+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!qe(r.getAttributes());a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(a&&te("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return pn(n)&&(o+=Vn),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(a),!o)return null;n=o.parentNode,r=o.nextSibling}return mt(r)&&pn(r)?{parent:r,offset:Vn}:{parent:n,offset:o?Bc(o)+1:0}}}domToView(e,t={}){const n=[],o=this._domToView(e,t,n),r=o.next().value;return r?(o.next(),this._processDomInlineNodes(null,n,t),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(e,t={},n=[]){for(let o=0;o<e.childNodes.length;o++){const r=e.childNodes[o],a=this._domToView(r,t,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(e,n,t),yield c,a.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;mt(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),a=this.domRangeToView(r);a&&n.push(a)}return new ho(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new he(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Bc(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ne._createBefore(n);if(mt(e)){if(za(e))return this.domPositionToView(e.parentNode,Bc(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(pn(e)&&(r-=Vn,r=r<0?0:r),new ne(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new ne(o,0)}else{const o=e.childNodes[t-1];if(mt(o)&&za(o)||o&&this.isBlockFiller(o))return this.domPositionToView(o.parentNode,Bc(o));const r=mt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new ne(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(za(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof ze?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof ze?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=ge.window,r=[];zb(t,a=>{const{scrollLeft:c,scrollTop:d}=a;r.push([c,d])}),t.focus(),zb(t,a=>{const[c,d]=r.shift();a.scrollLeft=c,a.scrollTop=d}),ge.window.scrollTo(n,o)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(b5):!(e.tagName!=="BR"||!Ob(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(A5)||function(t,n){return t.isEqualNode(w5)&&Ob(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const o=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)o.unshift(r),r=r.parentNode;return o}(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Sb(this._domDocument);case"markedNbsp":return Tb(this._domDocument);case"br":return Ib(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(mt(e)&&pn(e)&&t<Vn||this.isElement(e)&&pn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const o=this.getHostViewElement(e);if(o)return o;if(Sa(e)&&t.skipComments)return null;if(mt(e)){if(za(e))return null;{const r=e.data;if(r==="")return null;const a=new ze(this.document,r);return n.push(a),a}}{let r=this.mapDomToView(e);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(e))r=new cr(this.document),t.bind&&this.bindDocumentFragments(e,r);else{r=this._createViewElement(e,t),t.bind&&this.bindElements(e,r);const c=e.attributes;if(c)for(let d=c.length,h=0;h<d;h++)r._setAttribute(c[h].name,c[h].value);if(this._isViewElementWithRawContent(r,t))return r._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(Sa(e))return r._setCustomProperty("$rawContent",e.data),r}yield r;const a=[];if(t.withChildren!==!1)for(const c of this.domChildrenToView(e,t,a))r._appendChild(c);if(this._isInlineObjectElement(r))n.push(r);else for(const c of a)n.push(c)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let o=!1;for(let r=0;r<t.length;r++){const a=t[r];if(!a.is("$text")){o=!1;continue}let c,d=!1;if(C5(a,this.preElements))c=Mb(a.data);else{c=a.data.replace(/[ \n\t\r]{1,}/g," "),d=/[^\S\u00A0]/.test(c.charAt(c.length-1));const h=r>0?t[r-1]:null,m=r+1<t.length?t[r+1]:null,g=!h||h.is("element")&&h.name=="br"||o,k=!m&&!pn(a.data);n.withChildren!==!1&&(g&&(c=c.replace(/^ /,"")),k&&(c=c.replace(/ $/,""))),c=Mb(c),c=c.replace(/ \u00A0/g,"  ");const w=m&&m.is("element")&&m.name!="br",_=m&&m.is("$text")&&m.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(c)||!m||w||_)&&(c=c.replace(/\u00A0$/," ")),(g||h&&h.is("element")&&h.name!="br")&&(c=c.replace(/^\u00A0/," "))}c.length==0&&a.parent?(a._remove(),t.splice(r,1),r--):(a._data=c,o=d)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new ar({startPosition:t?ne._createAfter(e):ne._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element","br"))return null;if(this._isInlineObjectElement(o.item))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("$textProxy"))return o.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Sa(e))return new Gc(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new gn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Pb,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function C5(i,e){return i.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function zb(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Ob(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Rb(i){i==="script"&&te("domconverter-unsafe-script-element-detected"),i==="style"&&te("domconverter-unsafe-style-element-detected")}class mo extends mi(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const jb=lm(function(i,e){si(e,ai(e),i)});class ds{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,jb(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class fi extends mo{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new ds(this.view,t,n))}}class v5 extends fi{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return is(this)}};this.fire(e.type,e,t)}}class _5 extends mo{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=or(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new ho(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ye.arrowleft&&e!=ye.arrowup||n.setTo(n.getFirstPosition()),e!=ye.arrowright&&e!=ye.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const y5=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},x5=function(i){return this.__data__.has(i)};function $c(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Gr;++e<t;)this.add(i[e])}$c.prototype.add=$c.prototype.push=y5,$c.prototype.has=x5;const E5=$c,D5=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},S5=function(i,e){return i.has(e)},Fb=function(i,e,t,n,o,r){var a=1&t,c=i.length,d=e.length;if(c!=d&&!(a&&d>c))return!1;var h=r.get(i),m=r.get(e);if(h&&m)return h==e&&m==i;var g=-1,k=!0,w=2&t?new E5:void 0;for(r.set(i,e),r.set(e,i);++g<c;){var _=i[g],x=e[g];if(n)var I=a?n(x,_,g,e,i,r):n(_,x,g,i,e,r);if(I!==void 0){if(I)continue;k=!1;break}if(w){if(!D5(e,function(L,V){if(!S5(w,V)&&(_===L||o(_,L,t,n,r)))return w.push(V)})){k=!1;break}}else if(_!==x&&!o(_,x,t,n,r)){k=!1;break}}return r.delete(i),r.delete(e),k},T5=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},I5=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var Vb=Dn?Dn.prototype:void 0,Cm=Vb?Vb.valueOf:void 0;const M5=function(i,e,t,n,o,r,a){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!r(new tr(i),new tr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return $i(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var c=T5;case"[object Set]":var d=1&n;if(c||(c=I5),i.size!=e.size&&!d)return!1;var h=a.get(i);if(h)return h==e;n|=2,a.set(i,e);var m=Fb(c(i),c(e),n,o,r,a);return a.delete(i),m;case"[object Symbol]":if(Cm)return Cm.call(i)==Cm.call(e)}return!1};var B5=Object.prototype.hasOwnProperty;const N5=function(i,e,t,n,o,r){var a=1&t,c=Xr(i),d=c.length;if(d!=Xr(e).length&&!a)return!1;for(var h=d;h--;){var m=c[h];if(!(a?m in e:B5.call(e,m)))return!1}var g=r.get(i),k=r.get(e);if(g&&k)return g==e&&k==i;var w=!0;r.set(i,e),r.set(e,i);for(var _=a;++h<d;){var x=i[m=c[h]],I=e[m];if(n)var L=a?n(I,x,m,e,i,r):n(x,I,m,i,e,r);if(!(L===void 0?x===I||o(x,I,t,n,r):L)){w=!1;break}_||(_=m=="constructor")}if(w&&!_){var V=i.constructor,$=e.constructor;V==$||!("constructor"in i)||!("constructor"in e)||typeof V=="function"&&V instanceof V&&typeof $=="function"&&$ instanceof $||(w=!1)}return r.delete(i),r.delete(e),w};var Hb="[object Arguments]",Ub="[object Array]",Kc="[object Object]",Gb=Object.prototype.hasOwnProperty;const L5=function(i,e,t,n,o,r){var a=Je(i),c=Je(e),d=a?Ub:li(i),h=c?Ub:li(e),m=(d=d==Hb?Kc:d)==Kc,g=(h=h==Hb?Kc:h)==Kc,k=d==h;if(k&&Mo(i)){if(!Mo(e))return!1;a=!0,m=!1}if(k&&!m)return r||(r=new Io),a||er(i)?Fb(i,e,t,n,o,r):M5(i,e,d,t,n,o,r);if(!(1&t)){var w=m&&Gb.call(i,"__wrapped__"),_=g&&Gb.call(e,"__wrapped__");if(w||_){var x=w?i.value():i,I=_?e.value():e;return r||(r=new Io),o(x,I,t,n,r)}}return!!k&&(r||(r=new Io),N5(i,e,t,n,o,r))},Wb=function i(e,t,n,o,r){return e===t||(e==null||t==null||!Ct(e)&&!Ct(t)?e!=e&&t!=t:L5(e,t,n,o,i,r))},P5=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?Wb(i,e,void 0,t):!!n};class qb extends mo{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const a of e){const c=t.mapDomToView(a.target);c&&(c.is("uiElement")||c.is("rawElement")||a.type!=="childList"||this._isBogusBrMutation(a)||o.add(c))}for(const a of e){const c=t.mapDomToView(a.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&a.type==="characterData"){const d=t.findCorrespondingViewText(a.target);d&&!o.has(d.parent)?n.add(d):!d&&pn(a.target)&&o.add(t.mapDomToView(a.target.parentNode))}}let r=!1;for(const a of n)r=!0,this.renderer.markToSync("text",a);for(const a of o){const c=t.mapViewToDom(a),d=Array.from(a.getChildren()),h=Array.from(t.domChildrenToView(c,{withChildren:!1}));P5(d,h,z5)||(r=!0,this.renderer.markToSync("children",a))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function z5(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class Qc extends fi{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class O5 extends mo{constructor(e){super(e),this.mutationObserver=e.getObserver(qb),this.focusObserver=e.getObserver(Qc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=or(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=or(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,r)=>{this.document.isComposing&&!C.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(o)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class R5 extends fi{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class $b{constructor(e,t={}){this._files=t.cacheFiles?Kb(e):null,this._native=e}get files(){return this._files||(this._files=Kb(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Kb(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class j5 extends fi{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let r=null,a=null,c=[];if(e.dataTransfer&&(r=new $b(e.dataTransfer)),e.data!==null?a=e.data:r&&(a=r.getData("text/plain")),o.selection.isFake)c=Array.from(o.selection.getRanges());else if(t.length)c=t.map(d=>{const h=n.domConverter.domPositionToView(d.startContainer,d.startOffset),m=n.domConverter.domPositionToView(d.endContainer,d.endOffset);return h?n.createRange(h,m):m?n.createRange(m):void 0}).filter(d=>!!d);else if(C.isAndroid){const d=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(d).getRanges())}if(C.isAndroid&&e.inputType=="insertCompositionText"&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&a&&a.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:o.to(r=>r.preventDefault())}}]})}}function C0(i,e,t){return(n,o)=>{const r=n.getVisible();if(!r||n.width<XS||n.height<JS)return sd;let a;a=e.position==="inside"?n.bottom-o.height:n.bottom-o.height/2,a-=e.verticalOffset;const c=t(n,o);if(e.position==="inside"){const d=o.clone().moveTo(c,a);if(d.getIntersectionArea(r)<d.getArea())return sd}else{const d=Vh(i);if(d){const h=new Me(d),m=r.bottom+o.height/2>h.bottom,g=e.side==="left"?n.left<h.left:n.right>h.right;if(m||g)return sd}}return{top:a,left:c,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function v0(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return{position:t,label:e4,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left",...e}}class o4 extends De(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new QS(e),this.focusTracker=new ct,this.tooltipManager=new _t(e),this.poweredBy=new t4(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(r,a)=>{const c=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(c)&&!Array.from(t.domRoots.values()).includes(c)&&(n=c);const d=this._getCurrentFocusedToolbarDefinition();d&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let h=0;h<o.length;h++){const m=o.shift();if(o.push(m),m!==d&&this._focusFocusableCandidateToolbar(m)){d&&d.options.afterBlur&&d.options.afterBlur();break}}a()}),e.keystrokes.set("Esc",(r,a)=>{const c=this._getCurrentFocusedToolbarDefinition();c&&(n?(n.focus(),n=null):e.editing.view.focus(),c.options.afterBlur&&c.options.afterBlur(),a())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(gi(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>_0(t)-_0(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!gi(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n={top:0,bottom:0,left:0,right:0,...this.viewportOffset};t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function _0(i){const{toolbarView:e,options:t}=i;let n=10;return gi(e.element)&&n--,t.isContextual&&n--,n}var y0=f(9847),i4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(y0.Z,i4),y0.Z.locals;class r4 extends ae{constructor(e){super(e),this.body=new nE(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class s4 extends r4{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Oc;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class a4 extends ae{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const r=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(r,a,c)=>{c?n(o):t(o)})}(this):t(this)}}class l4 extends a4{constructor(e,t,n,o={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var x0=f(1874),c4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(x0.Z,c4),x0.Z.locals;class E0 extends ae{constructor(e,t={}){super(e);const n=this.bindTemplate;this.set("label",t.label||""),this.set("class",t.class||null),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-form__header",n.to("class")]},children:this.children});const o=new ae(e);o.setTemplate({tag:"h2",attributes:{class:["ck","ck-form__header__label"]},children:[{text:n.to("label")}]}),this.children.add(o)}}class D0 extends Rc{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class gr extends De(){constructor(e,t){super(),t&&jb(this,t),e&&this.set(e)}}const Wm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>';var S0=f(7592),d4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(S0.Z,d4),S0.Z.locals;var T0=f(6356),u4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(T0.Z,u4),T0.Z.locals;const ad=Hh("px");class ld extends W{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new N("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new N("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new N("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Mt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new h4(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new m4(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class h4 extends ae{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new ct,this.buttonPrevView=this._createButtonView(t("Previous"),Wm),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new be(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class m4 extends ae{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",ad),left:n.to("left",ad),width:n.to("width",ad),height:n.to("height",ad)}},children:this.content}),this.on("change:numberOfPanels",(o,r,a,c)=>{a>c?this._addPanels(a-c):this._removePanels(c-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ae;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new Me(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var I0=f(3707),g4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(I0.Z,g4),I0.Z.locals;const fs=Hh("px");class p4 extends ae{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Kt({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?fs(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new Kt({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?fs(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&fs(n)),bottom:t.to("_stickyBottomOffset",n=>n&&fs(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(ge.document,"scroll",(e,t)=>{this.checkIfShouldBeSticky(t.target)},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(e){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=function(r){const a=[];let c=Vh(r);for(;c&&c!==ge.document.body;)a.push(c),c=Vh(c);return a.push(ge.document),a}(this.limiterElement);if(e&&!t.includes(e))return;const n=function(r,a=0){const c=r.map(h=>{if(h instanceof Document){const m=new Me(ge.window);return m.top+=a,m.height-=a,m}return new Me(h)});let d=c[0];for(const h of c.slice(1))d&&(d=d.getIntersection(h));return d}(t,this.viewportTopOffset),o=new Me(this.limiterElement);if(n&&o.top<n.top){const r=o.getIntersection(n);if(r){const a=n.top;if(a+this._contentPanelRect.height+this.limiterBottomOffset>r.bottom){const c=Math.max(o.bottom-n.bottom,0)+this.limiterBottomOffset;o.bottom-c>o.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(c):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<o.height?this._stickToTopOfAncestors(a):this._unstick()}else this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=fs(-ge.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=fs(-ge.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Me(this._contentPanel)}}var M0=f(4176),f4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(M0.Z,f4),M0.Z.locals;class k4 extends o4{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Yk(e.config.get("toolbar")),this._elementReplacer=new $u,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,r=n.editable,a=o.document.getRoot();r.name=a.rootName,n.render();const c=r.element;this.setEditableElement(r.name,c),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement;let r;const a=e.config.get("placeholder");a&&(r=typeof a=="string"?a:a[this.view.editable.name]),!r&&o&&o.tagName.toLowerCase()==="textarea"&&(r=o.getAttribute("placeholder")),r&&(n.placeholder=r),rb({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const o=this.view.stickyPanel;if(o.isSticky){const r=new Me(o.element).height;t.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(o,"change:isSticky",r),setTimeout(()=>{this.stopListening(o,"change:isSticky",r)},20)}}}var B0=f(3624),b4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(B0.Z,b4),B0.Z.locals;class w4 extends s4{constructor(e,t,n={}){super(e),this.stickyPanel=new p4(e),this.toolbar=new Lm(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new l4(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class N0{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const o of n)o.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function qm(i,e=new Set){const t=[i],n=new Set;let o=0;for(;t.length>o;){const r=t[o++];if(!n.has(r)&&A4(r)&&!e.has(r))if(n.add(r),Symbol.iterator in r)try{for(const a of r)t.push(a)}catch{}else for(const a in r)a!=="defaultValue"&&t.push(r[a])}return n}function A4(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function L0(i,e,t=new Set){if(i===e&&typeof(n=i)=="object"&&n!==null)return!0;var n;const o=qm(i,t),r=qm(e,t);for(const a of o)if(r.has(a))return!0;return!1}class P0 extends N0{constructor(e,t={}){super(t),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=rd(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,o)=>e.create(n,o)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},o={};for(const[a,c]of Object.entries(this._data.roots))c.isLoaded?(e[a]="",o[a]=n[a]||{}):t.push(a);const r={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:o,_watchdogInitialData:this._data};return delete r.initialData,r.extraPlugins.push(C4),this._initUsingData?this.create(e,r,r.context):Ot(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(o=>{this._editor=o,o.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=o.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(c=>c.isAttached()&&c.rootName!="$graveyard"),{plugins:n}=e,o=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),a={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(c=>{a.roots[c.rootName]={content:JSON.stringify(Array.from(c.getChildren())),attributes:JSON.stringify(Array.from(c.getAttributes())),isLoaded:c._isLoaded}});for(const c of e.model.markers)c._affectsData&&(a.markers[c.name]={rangeJSON:c.getRange().toJSON(),usingOperation:c._managedUsingOperations,affectsData:c._affectsData});return o&&(a.commentThreads=JSON.stringify(o.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(a.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),a}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return L0(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return hn(e,(t,n)=>Ot(t)||n==="context"?t:void 0)}}class C4{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const o of t.children)n._appendChild(this._createNode(e,o));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:o,attributes:r}])=>{const a=JSON.parse(o),c=JSON.parse(r),d=t.model.document.getRoot(n);for(const[h,m]of c)e.setAttribute(h,m,d);for(const h of a){const m=this._createNode(e,h);e.insert(m,d,"end")}}),Object.entries(this._data.markers).forEach(([n,o])=>{const{document:r}=t.model,{rangeJSON:{start:a,end:c},...d}=o,h=r.getRoot(a.root),m=e.createPositionFromPath(h,a.path,a.stickiness),g=e.createPositionFromPath(h,c.path,c.stickiness),k=e.createRange(m,g);e.addMarker(n,{range:k,...d})})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const o=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread({channelId:o,...n})}),t.forEach(n=>{const o=this.editor.plugins.get("TrackChangesEditing");o.hasSuggestion(n.id)?o.getSuggestion(n.id).attributes=n.attributes:o.addSuggestionData(n)})}}const Za=Symbol("MainQueueId");class v4{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===Za;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const o=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Za),this._queues.get(e)])).then(t),r=o.catch(()=>{});return this._queues.set(e,r),o.finally(()=>{this._activeActions--,this._queues.get(e)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(a=>a())})}}function z0(i){return Array.isArray(i)?i:[i]}class cd extends td(Nm(fS)){constructor(e,t={}){if(!dd(e)&&t.initialData!==void 0)throw new N("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return dd(r)?(a=r,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):r;var a}(e)),dd(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new w4(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new k4(this,o),function(r){if(!oo(r.updateSourceElement))throw new N("attachtoform-missing-elementapi-interface",r);const a=r.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const d=a.form,h=()=>r.updateSourceElement();oo(d.submit)&&(c=d.submit,d.submit=()=>{h(),c.apply(d)}),d.addEventListener("submit",h),r.on("destroy",()=>{d.removeEventListener("submit",h),c&&(d.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(dd(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}function dd(i){return Ot(i)}cd.Context=nb,cd.EditorWatchdog=P0,cd.ContextWatchdog=class extends N0{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new v4,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(Za,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=z0(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new P0(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(o,{error:r,causesRestart:a})=>{this._fire("itemError",{itemId:t.id,error:r}),a&&this._actionQueues.enqueue(t.id,()=>new Promise(c=>{const d=()=>{n.off("restart",d),this._fire("itemRestart",{itemId:t.id}),c()};n.on("restart",d)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=z0(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Za,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Za,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=qm(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return L0(this._context,i.context)}};const $m=["left","right","center","justify"];function O0(i){return $m.includes(i)}function R0(i,e){return e.contentLanguageDirection=="rtl"?i==="right":i==="left"}function j0(i){const e=i.map(n=>{let o;return o=typeof n=="string"?{name:n}:n,o}).filter(n=>{const o=$m.includes(n.name);return o||te("alignment-config-name-not-recognized",{option:n}),o}),t=e.filter(n=>!!n.className).length;if(t&&t<e.length)throw new N("alignment-config-classnames-are-missing",{configuredOptions:i});return e.forEach((n,o,r)=>{const a=r.slice(o+1);if(a.some(c=>c.name==n.name))throw new N("alignment-config-name-already-defined",{option:n,configuredOptions:i});if(n.className&&a.some(c=>c.className==n.className))throw new N("alignment-config-classname-already-defined",{option:n,configuredOptions:i})}),e}const Km="alignment";class _4 extends ue{refresh(){const e=this.editor.locale,t=qe(this.editor.model.document.selection.getSelectedBlocks());this.isEnabled=!!t&&this._canBeAligned(t),this.isEnabled&&t.hasAttribute("alignment")?this.value=t.getAttribute("alignment"):this.value=e.contentLanguageDirection==="rtl"?"right":"left"}execute(e={}){const t=this.editor,n=t.locale,o=t.model,r=o.document,a=e.value;o.change(c=>{const d=Array.from(r.selection.getSelectedBlocks()).filter(m=>this._canBeAligned(m)),h=d[0].getAttribute("alignment");R0(a,n)||h===a||!a?function(m,g){for(const k of m)g.removeAttribute(Km,k)}(d,c):function(m,g,k){for(const w of m)g.setAttribute(Km,k,w)}(d,c,a)})}_canBeAligned(e){return this.editor.model.schema.checkAttribute(e,Km)}}class y4 extends W{static get pluginName(){return"AlignmentEditing"}constructor(e){super(e),e.config.define("alignment",{options:$m.map(t=>({name:t}))})}init(){const e=this.editor,t=e.locale,n=e.model.schema,o=j0(e.config.get("alignment.options")).filter(d=>O0(d.name)&&!R0(d.name,t)),r=o.some(d=>!!d.className);n.extend("$block",{allowAttributes:"alignment"}),e.model.schema.setAttributeProperties("alignment",{isFormatting:!0}),r?e.conversion.attributeToAttribute(function(d){const h={};for(const g of d)h[g.name]={key:"class",value:g.className};return{model:{key:"alignment",values:d.map(g=>g.name)},view:h}}(o)):e.conversion.for("downcast").attributeToAttribute(function(d){const h={};for(const{name:g}of d)h[g]={key:"style",value:{"text-align":g}};return{model:{key:"alignment",values:d.map(g=>g.name)},view:h}}(o));const a=function(d){const h=[];for(const{name:m}of d)h.push({view:{key:"style",value:{"text-align":m}},model:{key:"alignment",value:m}});return h}(o);for(const d of a)e.conversion.for("upcast").attributeToAttribute(d);const c=function(d){const h=[];for(const{name:m}of d)h.push({view:{key:"align",value:m},model:{key:"alignment",value:m}});return h}(o);for(const d of c)e.conversion.for("upcast").attributeToAttribute(d);e.commands.add("alignment",new _4(e))}}const ud=new Map([["left",Ve.alignLeft],["right",Ve.alignRight],["center",Ve.alignCenter],["justify",Ve.alignJustify]]);class x4 extends W{get localizedOptionTitles(){const e=this.editor.t;return{left:e("Align left"),right:e("Align right"),center:e("Align center"),justify:e("Justify")}}static get pluginName(){return"AlignmentUI"}init(){const e=this.editor,t=e.ui.componentFactory,n=e.t,o=j0(e.config.get("alignment.options"));o.map(r=>r.name).filter(O0).forEach(r=>this._addButton(r)),t.add("alignment",r=>{const a=bt(r);$a(a,()=>o.map(h=>t.create(`alignment:${h.name}`)),{enableActiveItemFocusOnDropdownOpen:!0,isVertical:!0,ariaLabel:n("Text alignment toolbar")}),a.buttonView.set({label:n("Text alignment"),tooltip:!0}),a.extendTemplate({attributes:{class:"ck-alignment-dropdown"}});const c=r.contentLanguageDirection==="rtl"?ud.get("right"):ud.get("left"),d=e.commands.get("alignment");return a.buttonView.bind("icon").to(d,"value",h=>ud.get(h)||c),a.bind("isEnabled").to(d,"isEnabled"),this.listenTo(a,"execute",()=>{e.editing.view.focus()}),a})}_addButton(e){const t=this.editor;t.ui.componentFactory.add(`alignment:${e}`,n=>{const o=t.commands.get("alignment"),r=new be(n);return r.set({label:this.localizedOptionTitles[e],icon:ud.get(e),tooltip:!0,isToggleable:!0}),r.bind("isEnabled").to(o),r.bind("isOn").to(o,"value",a=>a===e),this.listenTo(r,"execute",()=>{t.execute("alignment",{value:e}),t.editing.view.focus()}),r})}}class F0{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(n,o)=>{o.isLocal&&o.isUndoable&&o!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch({isTyping:!0})),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e=!1){this.isLocked&&!e||(this._batch=null,this._size=0)}}class E4 extends ue{constructor(e,t){super(e),this._buffer=new F0(e.model,t),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,n=t.document,o=e.text||"",r=o.length;let a=n.selection;if(e.selection?a=e.selection:e.range&&(a=t.createSelection(e.range)),!t.canEditAt(a))return;const c=e.resultRange;t.enqueueChange(this._buffer.batch,d=>{this._buffer.lock(),t.deleteContent(a),o&&t.insertContent(d.createText(o,n.selection.getAttributes()),a),c?d.setSelection(c):a.is("documentSelection")||d.setSelection(a),this._buffer.unlock(),this._buffer.input(r)})}}const V0=["insertText","insertReplacementText"];class D4 extends mo{constructor(e){super(e),this.focusObserver=e.getObserver(Qc),C.isAndroid&&V0.push("insertCompositionText");const t=e.document;t.on("beforeinput",(n,o)=>{if(!this.isEnabled)return;const{data:r,targetRanges:a,inputType:c,domEvent:d}=o;if(!V0.includes(c))return;this.focusObserver.flush();const h=new R(t,"insertText");t.fire(h,new ds(e,d,{text:r,selection:e.createSelection(a)})),h.stop.called&&n.stop()}),t.on("compositionend",(n,{data:o,domEvent:r})=>{this.isEnabled&&!C.isAndroid&&o&&t.fire("insertText",new ds(e,r,{text:o,selection:t.selection}))},{priority:"lowest"})}observe(){}stopObserving(){}}class H0 extends W{static get pluginName(){return"Input"}init(){const e=this.editor,t=e.model,n=e.editing.view,o=t.document.selection;n.addObserver(D4);const r=new E4(e,e.config.get("typing.undoStep")||20);e.commands.add("insertText",r),e.commands.add("input",r),this.listenTo(n.document,"insertText",(a,c)=>{n.document.isComposing||c.preventDefault();const{text:d,selection:h,resultRange:m}=c,g=Array.from(h.getRanges()).map(_=>e.editing.mapper.toModelRange(_));let k=d;if(C.isAndroid){const _=Array.from(g[0].getItems()).reduce((x,I)=>x+(I.is("$textProxy")?I.data:""),"");_&&(_.length<=k.length?k.startsWith(_)&&(k=k.substring(_.length),g[0].start=g[0].start.getShiftedBy(_.length)):_.startsWith(k)&&(g[0].start=g[0].start.getShiftedBy(k.length),k=""))}const w={text:k,selection:t.createSelection(g)};m&&(w.resultRange=e.editing.mapper.toModelRange(m)),e.execute("insertText",w),n.scrollToTheSelection()}),C.isAndroid?this.listenTo(n.document,"keydown",(a,c)=>{!o.isCollapsed&&c.keyCode==229&&n.document.isComposing&&U0(t,r)}):this.listenTo(n.document,"compositionstart",()=>{o.isCollapsed||U0(t,r)})}}function U0(i,e){if(!e.isEnabled)return;const t=e.buffer;t.lock(),i.enqueueChange(t.batch,()=>{i.deleteContent(i.document.selection)}),t.unlock()}class G0 extends ue{constructor(e,t){super(e),this.direction=t,this._buffer=new F0(e.model,e.config.get("typing.undoStep")),this._isEnabledBasedOnSelection=!1}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();const r=o.createSelection(e.selection||n.selection);if(!t.canEditAt(r))return;const a=e.sequence||1,c=r.isCollapsed;if(r.isCollapsed&&t.modifySelection(r,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(a))return void this._replaceEntireContentWithParagraph(o);if(this._shouldReplaceFirstBlockWithParagraph(r,a))return void this.editor.execute("paragraph",{selection:r});if(r.isCollapsed)return;let d=0;r.getFirstRange().getMinimalFlatRanges().forEach(h=>{d+=sa(h.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(r,{doNotResetEntireContent:c,direction:this.direction}),this._buffer.input(d),o.setSelection(r),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,n=t.document.selection,o=t.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o))||!t.schema.checkChild(o,"paragraph"))return!1;const r=o.getChild(0);return!r||!r.is("element","paragraph")}_replaceEntireContentWithParagraph(e){const t=this.editor.model,n=t.document.selection,o=t.schema.getLimitElement(n),r=e.createElement("paragraph");e.remove(e.createRangeIn(o)),e.insert(r,o),e.setSelection(r,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const n=this.editor.model;if(t>1||this.direction!="backward"||!e.isCollapsed)return!1;const o=e.getFirstPosition(),r=n.schema.getLimitElement(o),a=r.getChild(0);return o.parent==a&&!!e.containsEntireContent(a)&&!!n.schema.checkChild(r,"paragraph")&&a.name!="paragraph"}}const W0="word",wi="selection",ks="backward",Ya="forward",q0={deleteContent:{unit:wi,direction:ks},deleteContentBackward:{unit:"codePoint",direction:ks},deleteWordBackward:{unit:W0,direction:ks},deleteHardLineBackward:{unit:wi,direction:ks},deleteSoftLineBackward:{unit:wi,direction:ks},deleteContentForward:{unit:"character",direction:Ya},deleteWordForward:{unit:W0,direction:Ya},deleteHardLineForward:{unit:wi,direction:Ya},deleteSoftLineForward:{unit:wi,direction:Ya}};class S4 extends mo{constructor(e){super(e);const t=e.document;let n=0;t.on("keydown",()=>{n++}),t.on("keyup",()=>{n=0}),t.on("beforeinput",(o,r)=>{if(!this.isEnabled)return;const{targetRanges:a,domEvent:c,inputType:d}=r,h=q0[d];if(!h)return;const m={direction:h.direction,unit:h.unit,sequence:n};m.unit==wi&&(m.selectionToRemove=e.createSelection(a[0])),d==="deleteContentBackward"&&(C.isAndroid&&(m.sequence=1),function(k){if(k.length!=1||k[0].isCollapsed)return!1;const w=k[0].getWalker({direction:"backward",singleCharacters:!0,ignoreElementEnd:!0});let _=0;for(const{nextPosition:x}of w){if(x.parent.is("$text")){const I=x.parent.data,L=x.offset;if($h(I,L)||Kh(I,L)||Ck(I,L))continue;_++}else _++;if(_>1)return!0}return!1}(a)&&(m.unit=wi,m.selectionToRemove=e.createSelection(a)));const g=new ls(t,"delete",a[0]);t.fire(g,new ds(e,c,m)),g.stop.called&&o.stop()}),C.isBlink&&function(o){const r=o.view,a=r.document;let c=null,d=!1;function h(g){return g==ye.backspace||g==ye.delete}function m(g){return g==ye.backspace?ks:Ya}a.on("keydown",(g,{keyCode:k})=>{c=k,d=!1}),a.on("keyup",(g,{keyCode:k,domEvent:w})=>{const _=a.selection,x=o.isEnabled&&k==c&&h(k)&&!_.isCollapsed&&!d;if(c=null,x){const I=_.getFirstRange(),L=new ls(a,"delete",I),V={unit:wi,direction:m(k),selectionToRemove:_};a.fire(L,new ds(r,w,V))}}),a.on("beforeinput",(g,{inputType:k})=>{const w=q0[k];h(c)&&w&&w.direction==m(c)&&(d=!0)},{priority:"high"}),a.on("beforeinput",(g,{inputType:k,data:w})=>{c==ye.delete&&k=="insertText"&&w==""&&g.stop()},{priority:"high"})}(this)}observe(){}stopObserving(){}}class Oo extends W{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,n=t.document,o=e.model.document;t.addObserver(S4),this._undoOnBackspace=!1;const r=new G0(e,"forward");e.commands.add("deleteForward",r),e.commands.add("forwardDelete",r),e.commands.add("delete",new G0(e,"backward")),this.listenTo(n,"delete",(a,c)=>{n.isComposing||c.preventDefault();const{direction:d,sequence:h,selectionToRemove:m,unit:g}=c,k=d==="forward"?"deleteForward":"delete",w={sequence:h};if(g=="selection"){const _=Array.from(m.getRanges()).map(x=>e.editing.mapper.toModelRange(x));w.selection=e.model.createSelection(_)}else w.unit=g;e.execute(k,w),t.scrollToTheSelection()},{priority:"low"}),this.editor.plugins.has("UndoEditing")&&(this.listenTo(n,"delete",(a,c)=>{this._undoOnBackspace&&c.direction=="backward"&&c.sequence==1&&c.unit=="codePoint"&&(this._undoOnBackspace=!1,e.execute("undo"),c.preventDefault(),a.stop())},{context:"$capture"}),this.listenTo(o,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class $0 extends W{static get requires(){return[H0,Oo]}static get pluginName(){return"Typing"}}function K0(i,e){let t=i.start;return{text:Array.from(i.getWalker({ignoreElementEnd:!1})).reduce((n,{item:o})=>o.is("$text")||o.is("$textProxy")?n+o.data:(t=e.createPositionAfter(o),""),""),range:e.createRange(t,i.end)}}class Q0 extends De(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:n})=>{n&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this._hasMatch=!1))}),this.listenTo(e,"change:data",(t,n)=>{!n.isUndo&&n.isLocal&&this._evaluateTextBeforeSelection("data",{batch:n})})}_evaluateTextBeforeSelection(e,t={}){const n=this.model,o=n.document.selection,r=n.createRange(n.createPositionAt(o.focus.parent,0),o.focus),{text:a,range:c}=K0(r,n),d=this.testCallback(a);if(!d&&this.hasMatch&&this.fire("unmatched"),this._hasMatch=!!d,d){const h=Object.assign(t,{text:a,range:c});typeof d=="object"&&Object.assign(h,d),this.fire(`matched:${e}`,h)}}}class Z0 extends W{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,n=e.editing.view,o=e.locale,r=t.document.selection;this.listenTo(n.document,"arrowKey",(a,c)=>{if(!r.isCollapsed||c.shiftKey||c.altKey||c.ctrlKey)return;const d=c.keyCode==ye.arrowright,h=c.keyCode==ye.arrowleft;if(!d&&!h)return;const m=o.contentLanguageDirection;let g=!1;g=m==="ltr"&&d||m==="rtl"&&h?this._handleForwardMovement(c):this._handleBackwardMovement(c),g===!0&&a.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(r,"change:range",(a,c)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!c.directChange&&md(r.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,n=this.editor.model.document.selection,o=n.getFirstPosition();return!this._isGravityOverridden&&(!o.isAtStart||!Qm(n,t))&&!!md(o,t)&&(hd(e),this._overrideGravity(),!0)}_handleBackwardMovement(e){const t=this.attributes,n=this.editor.model,o=n.document.selection,r=o.getFirstPosition();return this._isGravityOverridden?(hd(e),this._restoreGravity(),Zm(n,t,r),!0):r.isAtStart?!!Qm(o,t)&&(hd(e),Zm(n,t,r),!0):!!function(a,c){const d=a.getShiftedBy(-1);return md(d,c)}(r,t)&&(r.isAtEnd&&!Qm(o,t)&&md(r,t)?(hd(e),Zm(n,t,r),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Qm(i,e){for(const t of e)if(i.hasAttribute(t))return!0;return!1}function Zm(i,e,t){const n=t.nodeBefore;i.change(o=>{if(n){const r=[],a=i.schema.isObject(n)&&i.schema.isInline(n);for(const[c,d]of n.getAttributes())!i.schema.checkAttribute("$text",c)||a&&i.schema.getAttributeProperties(c).copyFromObject===!1||r.push([c,d]);o.setSelectionAttribute(r)}else o.removeSelectionAttribute(e)})}function hd(i){i.preventDefault()}function md(i,e){const{nodeBefore:t,nodeAfter:n}=i;for(const o of e){const r=t?t.getAttribute(o):void 0;if((n?n.getAttribute(o):void 0)!==r)return!0}return!1}var Y0=/[\\^$.*+?()[\]{}|]/g,T4=RegExp(Y0.source);const J0=function(i){return(i=Ma(i))&&T4.test(i)?i.replace(Y0,"\\$&"):i},X0={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:bs('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:bs("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:bs("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:bs('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:bs('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:bs("'"),to:[null,"‚",null,"’"]}},eA={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},I4=["symbols","mathematical","typography","quotes"];function M4(i){return typeof i=="string"?new RegExp(`(${J0(i)})$`):i}function B4(i){return typeof i=="string"?()=>[i]:i instanceof Array?()=>i:i}function N4(i){return(i.textNode?i.textNode:i.nodeAfter).getAttributes()}function bs(i){return new RegExp(`(^|\\s)(${i})([^${i}]*)(${i})$`)}function pr(i,e,t,n){return n.createRange(Ym(i,e,t,!0,n),Ym(i,e,t,!1,n))}function Ym(i,e,t,n,o){let r=i.textNode||(n?i.nodeBefore:i.nodeAfter),a=null;for(;r&&r.getAttribute(e)==t;)a=r,r=n?r.previousSibling:r.nextSibling;return a?o.createPositionAt(a,n?"before":"after"):i}function Ai(i,e,t,n){let o,r=null;typeof n=="function"?o=n:(r=i.commands.get(n),o=()=>{i.execute(n)}),i.model.document.on("change:data",(a,c)=>{if(r&&!r.isEnabled||!e.isEnabled)return;const d=qe(i.model.document.selection.getRanges());if(!d.isCollapsed||c.isUndo||!c.isLocal)return;const h=Array.from(i.model.document.differ.getChanges()),m=h[0];if(h.length!=1||m.type!=="insert"||m.name!="$text"||m.length!=1)return;const g=m.position.parent;if(g.is("element","codeBlock")||g.is("element","listItem")&&typeof n!="function"&&!["numberedList","bulletedList","todoList"].includes(n)||r&&r.value===!0)return;const k=g.getChild(0),w=i.model.createRangeOn(k);if(!w.containsRange(d)&&!d.end.isEqual(w.end))return;const _=t.exec(k.data.substr(0,d.end.offset));_&&i.model.enqueueChange(x=>{const I=x.createPositionAt(g,0),L=x.createPositionAt(g,_[0].length),V=new Un(I,L);if(o({match:_})!==!1){x.remove(V);const $=i.model.document.selection.getFirstRange(),Y=x.createRangeIn(g);!g.isEmpty||Y.isEqual($)||Y.containsRange($,!0)||x.remove(g)}V.detach(),i.model.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})})})}function ws(i,e,t,n){let o,r;t instanceof RegExp?o=t:r=t,r=r||(a=>{let c;const d=[],h=[];for(;(c=o.exec(a))!==null&&!(c&&c.length<4);){let{index:m,1:g,2:k,3:w}=c;const _=g+k+w;m+=c[0].length-_.length;const x=[m,m+g.length],I=[m+g.length+k.length,m+g.length+k.length+w.length];d.push(x),d.push(I),h.push([m+g.length,m+g.length+k.length])}return{remove:d,format:h}}),i.model.document.on("change:data",(a,c)=>{if(c.isUndo||!c.isLocal||!e.isEnabled)return;const d=i.model,h=d.document.selection;if(!h.isCollapsed)return;const m=Array.from(d.document.differ.getChanges()),g=m[0];if(m.length!=1||g.type!=="insert"||g.name!="$text"||g.length!=1)return;const k=h.focus,w=k.parent,{text:_,range:x}=function($,Y){let ce=$.start;return{text:Array.from($.getItems()).reduce((pe,Ze)=>!Ze.is("$text")&&!Ze.is("$textProxy")||Ze.getAttribute("code")?(ce=Y.createPositionAfter(Ze),""):pe+Ze.data,""),range:Y.createRange(ce,$.end)}}(d.createRange(d.createPositionAt(w,0),k),d),I=r(_),L=tA(x.start,I.format,d),V=tA(x.start,I.remove,d);L.length&&V.length&&d.enqueueChange($=>{if(n($,L)!==!1){for(const Y of V.reverse())$.remove(Y);d.enqueueChange(()=>{i.plugins.get("Delete").requestUndoOnBackspace()})}})})}function tA(i,e,t){return e.filter(n=>n[0]!==void 0&&n[1]!==void 0).map(n=>t.createRange(i.getShiftedBy(n[0]),i.getShiftedBy(n[1])))}function gd(i,e){return(t,n)=>{if(!i.commands.get(e).isEnabled)return!1;const o=i.model.schema.getValidRanges(n,e);for(const r of o)t.setAttribute(e,!0,r);t.removeSelectionAttribute(e)}}class Jm extends ue{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,n=t.document.selection,o=e.forceValue===void 0?!this.value:e.forceValue;t.change(r=>{if(n.isCollapsed)o?r.setSelectionAttribute(this.attributeKey,!0):r.removeSelectionAttribute(this.attributeKey);else{const a=t.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const c of a)o?r.setAttribute(this.attributeKey,o,c):r.removeAttribute(this.attributeKey,c)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const o of n.getRanges())for(const r of o.getItems())if(t.checkAttribute(r,this.attributeKey))return r.hasAttribute(this.attributeKey);return!1}}const As="bold";class L4 extends W{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:As}),e.model.schema.setAttributeProperties(As,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:As,view:"strong",upcastAlso:["b",t=>{const n=t.getStyle("font-weight");return n&&(n=="bold"||Number(n)>=600)?{name:!0,styles:["font-weight"]}:null}]}),e.commands.add(As,new Jm(e,As)),e.keystrokes.set("CTRL+B",As)}}const Xm="bold";class P4 extends W{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(Xm,n=>{const o=e.commands.get(Xm),r=new be(n);return r.set({label:t("Bold"),icon:Ve.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(Xm),e.editing.view.focus()}),r})}}var nA=f(5363),z4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(nA.Z,z4),nA.Z.locals;const Cs="italic";class O4 extends W{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:Cs}),e.model.schema.setAttributeProperties(Cs,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Cs,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add(Cs,new Jm(e,Cs)),e.keystrokes.set("CTRL+I",Cs)}}const eg="italic";class R4 extends W{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(eg,n=>{const o=e.commands.get(eg),r=new be(n);return r.set({label:t("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(eg),e.editing.view.focus()}),r})}}const Ja="underline";class j4 extends W{static get pluginName(){return"UnderlineEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:Ja}),e.model.schema.setAttributeProperties(Ja,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Ja,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),e.commands.add(Ja,new Jm(e,Ja)),e.keystrokes.set("CTRL+U","underline")}}const tg="underline";class F4 extends W{static get pluginName(){return"UnderlineUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add(tg,n=>{const o=e.commands.get(tg),r=new be(n);return r.set({label:t("Underline"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',keystroke:"CTRL+U",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute(tg),e.editing.view.focus()}),r})}}function*oA(i,e){for(const t of e)t&&i.getAttributeProperties(t[0]).copyOnEnter&&(yield t)}class V4 extends ue{execute(){this.editor.model.change(e=>{this.enterBlock(e),this.fire("afterExecute",{writer:e})})}enterBlock(e){const t=this.editor.model,n=t.document.selection,o=t.schema,r=n.isCollapsed,a=n.getFirstRange(),c=a.start.parent,d=a.end.parent;if(o.isLimit(c)||o.isLimit(d))return r||c!=d||t.deleteContent(n),!1;if(r){const h=oA(e.model.schema,n.getAttributes());return iA(e,a.start),e.setSelectionAttribute(h),!0}{const h=!(a.start.isAtStart&&a.end.isAtEnd),m=c==d;if(t.deleteContent(n,{leaveUnmerged:h}),h){if(m)return iA(e,n.focus),!0;e.setSelection(d,0)}}return!1}}function iA(i,e){i.split(e),i.setSelection(e.parent.nextSibling,0)}const H4={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class rA extends mo{constructor(e){super(e);const t=this.document;let n=!1;t.on("keydown",(o,r)=>{n=r.shiftKey}),t.on("beforeinput",(o,r)=>{if(!this.isEnabled)return;let a=r.inputType;C.isSafari&&n&&a=="insertParagraph"&&(a="insertLineBreak");const c=r.domEvent,d=H4[a];if(!d)return;const h=new ls(t,"enter",r.targetRanges[0]);t.fire(h,new ds(e,c,{isSoft:d.isSoft})),h.stop.called&&o.stop()})}observe(){}stopObserving(){}}class Xa extends W{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,n=t.document;t.addObserver(rA),e.commands.add("enter",new V4(e)),this.listenTo(n,"enter",(o,r)=>{n.isComposing||r.preventDefault(),r.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class U4 extends ue{execute(){const e=this.editor.model,t=e.document;e.change(n=>{(function(o,r,a){const c=a.isCollapsed,d=a.getFirstRange(),h=d.start.parent,m=d.end.parent,g=h==m;if(c){const k=oA(o.schema,a.getAttributes());sA(o,r,d.end),r.removeSelectionAttribute(a.getAttributeKeys()),r.setSelectionAttribute(k)}else{const k=!(d.start.isAtStart&&d.end.isAtEnd);o.deleteContent(a,{leaveUnmerged:k}),g?sA(o,r,a.focus):k&&r.setSelection(m,0)}})(e,n,t.selection),this.fire("afterExecute",{writer:n})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(n,o){if(o.rangeCount>1)return!1;const r=o.anchor;if(!r||!n.checkChild(r,"softBreak"))return!1;const a=o.getFirstRange(),c=a.start.parent,d=a.end.parent;return!((ng(c,n)||ng(d,n))&&c!==d)}(e.schema,t.selection)}}function sA(i,e,t){const n=e.createElement("softBreak");i.insertContent(n,t),e.setSelection(n,"after")}function ng(i,e){return!i.is("rootElement")&&(e.isLimit(i)||ng(i.parent,e))}class G4 extends W{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,n=e.conversion,o=e.editing.view,r=o.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(a,{writer:c})=>c.createEmptyElement("br")}),o.addObserver(rA),e.commands.add("shiftEnter",new U4(e)),this.listenTo(r,"enter",(a,c)=>{r.isComposing||c.preventDefault(),c.isSoft&&(e.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"})}}class W4 extends ue{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,n=t.schema,o=t.document.selection,r=Array.from(o.getSelectedBlocks()),a=e.forceValue===void 0?!this.value:e.forceValue;t.change(c=>{if(a){const d=r.filter(h=>pd(h)||lA(n,h));this._applyQuote(c,d)}else this._removeQuote(c,r.filter(pd))})}_getValue(){const e=qe(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!pd(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=qe(e.getSelectedBlocks());return!!n&&lA(t,n)}_removeQuote(e,t){aA(e,t).reverse().forEach(n=>{if(n.start.isAtStart&&n.end.isAtEnd)return void e.unwrap(n.start.parent);if(n.start.isAtStart){const r=e.createPositionBefore(n.start.parent);return void e.move(n,r)}n.end.isAtEnd||e.split(n.end);const o=e.createPositionAfter(n.end.parent);e.move(n,o)})}_applyQuote(e,t){const n=[];aA(e,t).reverse().forEach(o=>{let r=pd(o.start);r||(r=e.createElement("blockQuote"),e.wrap(o,r)),n.push(r)}),n.reverse().reduce((o,r)=>o.nextSibling==r?(e.merge(e.createPositionAfter(o)),o):r)}}function pd(i){return i.parent.name=="blockQuote"?i.parent:null}function aA(i,e){let t,n=0;const o=[];for(;n<e.length;){const r=e[n],a=e[n+1];t||(t=i.createPositionBefore(r)),a&&r.nextSibling==a||(o.push(i.createRange(t,i.createPositionAfter(r))),t=null),n++}return o}function lA(i,e){const t=i.checkChild(e.parent,"blockQuote"),n=i.checkChild(["$root","blockQuote"],e);return t&&n}class q4 extends W{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Xa,Oo]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new W4(e)),t.register("blockQuote",{inheritAllFrom:"$container"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(a=>{const c=e.model.document.differ.getChanges();for(const d of c)if(d.type=="insert"){const h=d.position.nodeAfter;if(!h)continue;if(h.is("element","blockQuote")&&h.isEmpty)return a.remove(h),!0;if(h.is("element","blockQuote")&&!t.checkChild(d.position,h))return a.unwrap(h),!0;if(h.is("element")){const m=a.createRangeIn(h);for(const g of m.getItems())if(g.is("element","blockQuote")&&!t.checkChild(a.createPositionBefore(g),g))return a.unwrap(g),!0}}else if(d.type=="remove"){const h=d.position.parent;if(h.is("element","blockQuote")&&h.isEmpty)return a.remove(h),!0}return!1});const n=this.editor.editing.view.document,o=e.model.document.selection,r=e.commands.get("blockQuote");this.listenTo(n,"enter",(a,c)=>{!o.isCollapsed||!r.value||o.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),c.preventDefault(),a.stop())},{context:"blockquote"}),this.listenTo(n,"delete",(a,c)=>{if(c.direction!="backward"||!o.isCollapsed||!r.value)return;const d=o.getLastPosition().parent;d.isEmpty&&!d.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),c.preventDefault(),a.stop())},{context:"blockquote"})}}var cA=f(3789),$4={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(cA.Z,$4),cA.Z.locals;class K4 extends W{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",n=>{const o=e.commands.get("blockQuote"),r=new be(n);return r.set({label:t("Block quote"),icon:Ve.quote,tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(r,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),r})}}class Q4 extends W{static get pluginName(){return"CKBoxUI"}afterInit(){const e=this.editor,t=e.commands.get("ckbox");if(!t)return;const n=e.t;e.ui.componentFactory.add("ckbox",o=>{const r=new be(o);return r.set({label:n("Open file manager"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),r.bind("isOn","isEnabled").to(t,"value","isEnabled"),r.on("execute",()=>{e.execute("ckbox")}),r})}}function dA(i){const e=[];let t=0;for(const o in i){const r=parseInt(o,10);isNaN(r)||(r>t&&(t=r),e.push(`${i[o]} ${o}w`))}const n=[{srcset:e.join(","),sizes:`(max-width: ${t}px) 100vw, ${t}px`,type:"image/webp"}];return{imageFallbackUrl:i.default,imageSources:n}}class Z4 extends ue{constructor(e){super(e),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire("ckbox:open")}_getValue(){return this._wrapper!==null}_checkEnabled(){const e=this.editor.commands.get("insertImage"),t=this.editor.commands.get("link");return!(!e.isEnabled&&!t.isEnabled)}_prepareOptions(){const e=this.editor.config.get("ckbox");return{theme:e.theme,language:e.language,tokenUrl:e.tokenUrl,serviceOrigin:e.serviceOrigin,dialog:{onClose:()=>this.fire("ckbox:close")},assets:{onChoose:t=>this.fire("ckbox:choose",t)}}}_initListeners(){const e=this.editor,t=e.model,n=!e.config.get("ckbox.ignoreDataId");this.on("ckbox",()=>{this.refresh()},{priority:"low"}),this.on("ckbox:open",()=>{!this.isEnabled||this.value||(this._wrapper=Yl(document,"div",{class:"ck ckbox-wrapper"}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()),uA(50))}),this.on("ckbox:close",()=>{this.value&&(this._wrapper.remove(),this._wrapper=null)}),this.on("ckbox:choose",(o,r)=>{if(!this.isEnabled)return;const a=e.commands.get("insertImage"),c=e.commands.get("link"),d=function({assets:h,isImageAllowed:m,isLinkAllowed:g}){return h.map(k=>function(w){const _=w.data.metadata;return _?_.width&&_.height:!1}(k)?{id:k.data.id,type:"image",attributes:Y4(k)}:{id:k.data.id,type:"link",attributes:J4(k)}).filter(k=>k.type==="image"?m:g)}({assets:r,isImageAllowed:a.isEnabled,isLinkAllowed:c.isEnabled});d.length!==0&&t.change(h=>{for(const m of d){const g=m===d[d.length-1];this._insertAsset(m,g,h),n&&(setTimeout(()=>this._chosenAssets.delete(m),1e3),this._chosenAssets.add(m))}})}),this.listenTo(e,"destroy",()=>{this.fire("ckbox:close"),this._chosenAssets.clear()})}_insertAsset(e,t,n){const o=this.editor.model.document.selection;n.removeSelectionAttribute("linkHref"),e.type==="image"?this._insertImage(e):this._insertLink(e,n),t||n.setSelection(o.getLastPosition())}_insertImage(e){const t=this.editor,{imageFallbackUrl:n,imageSources:o,imageTextAlternative:r}=e.attributes;t.execute("insertImage",{source:{src:n,sources:o,alt:r}})}_insertLink(e,t){const n=this.editor,o=n.model,r=o.document.selection,{linkName:a,linkHref:c}=e.attributes;if(r.isCollapsed){const d=co(r.getAttributes()),h=t.createText(a,d),m=o.insertContent(h);t.setSelection(m)}n.execute("link",c)}}function Y4(i){const{imageFallbackUrl:e,imageSources:t}=dA(i.data.imageUrls);return{imageFallbackUrl:e,imageSources:t,imageTextAlternative:i.data.metadata.description||""}}function J4(i){return{linkName:i.data.name,linkHref:X4(i)}}function X4(i){const e=new URL(i.data.url);return e.searchParams.set("download","true"),e.toString()}function uA(i){setTimeout(()=>{if(i===0)return;const e=document.querySelector(".ckbox-gallery .ckbox-gallery-item"),t=document.querySelector(".ckbox-empty-view .ckbox-btn");t&&t instanceof HTMLElement?t.focus():e&&e instanceof HTMLElement?e.focus():uA(i-1)},100)}class e3 extends De(){constructor(){super();const e=new window.FileReader;this._reader=e,this._data=void 0,this.set("loaded",0),e.onprogress=t=>{this.loaded=t.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){const t=this._reader;return this.total=e.size,new Promise((n,o)=>{t.onload=()=>{const r=t.result;this._data=r,n(r)},t.onerror=()=>{o("error")},t.onabort=()=>{o("aborted")},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}class fr extends W{constructor(){super(...arguments),this.loaders=new ft,this._loadersMap=new Map,this._pendingAction=null}static get pluginName(){return"FileRepository"}static get requires(){return[Ww]}init(){this.loaders.on("change",()=>this._updatePendingAction()),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0)}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return te("filerepository-no-upload-adapter"),null;const t=new hA(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then(n=>{this._loadersMap.set(n,t)}).catch(()=>{}),t.on("change:uploaded",()=>{let n=0;for(const o of this.loaders)n+=o.uploaded;this.uploaded=n}),t.on("change:uploadTotal",()=>{let n=0;for(const o of this.loaders)o.uploadTotal&&(n+=o.uploadTotal);this.uploadTotal=n}),t}destroyLoader(e){const t=e instanceof hA?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach((n,o)=>{n===t&&this._loadersMap.delete(o)})}_updatePendingAction(){const e=this.editor.plugins.get(Ww);if(this.loaders.length){if(!this._pendingAction){const t=this.editor.t,n=o=>`${t("Upload in progress")} ${parseInt(o)}%.`;this._pendingAction=e.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else e.remove(this._pendingAction),this._pendingAction=null}}class hA extends De(){constructor(e,t){super(),this.id=Q(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new e3,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(n,o)=>o?n/o*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(e=>this._filePromiseWrapper?e:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!="idle")throw new N("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(e=>this._reader.read(e)).then(e=>{if(this.status!=="reading")throw this.status;return this.status="idle",e}).catch(e=>{throw e==="aborted"?(this.status="aborted","aborted"):(this.status="error",this._reader.error?this._reader.error:e)})}upload(){if(this.status!="idle")throw new N("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(e=>(this.uploadResponse=e,this.status="idle",e)).catch(e=>{throw this.status==="aborted"?"aborted":(this.status="error",e)})}abort(){const e=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?e=="reading"?this._reader.abort():e=="uploading"&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){const t={};return t.promise=new Promise((n,o)=>{t.rejecter=o,t.isFulfilled=!1,e.then(r=>{t.isFulfilled=!0,n(r)}).catch(r=>{t.isFulfilled=!0,o(r)})}),t}}class t3 extends ae{constructor(e){super(e),this.buttonView=new be(e),this._fileInputView=new n3(e),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class n3 extends ae{constructor(e){super(e),this.set("acceptedType",void 0),this.set("allowMultipleFiles",!1);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:t.to("acceptedType"),multiple:t.to("allowMultipleFiles")},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}class o3 extends W{static get requires(){return["ImageUploadEditing","ImageUploadProgress",fr,og]}static get pluginName(){return"CKBoxUploadAdapter"}async afterInit(){const e=this.editor,t=!!e.config.get("ckbox"),n=!!window.CKBox;if(!t&&!n)return;const o=e.plugins.get(fr),r=e.plugins.get(og);o.createUploadAdapter=d=>new i3(d,r.getToken(),e);const a=!e.config.get("ckbox.ignoreDataId"),c=e.plugins.get("ImageUploadEditing");a&&c.on("uploadComplete",(d,{imageElement:h,data:m})=>{e.model.change(g=>{g.setAttribute("ckboxImageId",m.ckboxImageId,h)})})}}class i3{constructor(e,t,n){this.loader=e,this.token=t,this.editor=n,this.controller=new AbortController,this.serviceOrigin=n.config.get("ckbox.serviceOrigin")}getWorkspaceId(){const e=(0,this.editor.t)("Cannot access default workspace."),t=this.editor.config.get("ckbox.defaultUploadWorkspaceId"),n=function(o,r){const[,a]=o.value.split("."),c=JSON.parse(atob(a)),d=c.auth&&c.auth.ckbox&&c.auth.ckbox.workspaces||[c.aud];return r?(c.auth&&c.auth.ckbox&&c.auth.ckbox.role)=="superadmin"||d.includes(r)?r:null:d[0]}(this.token,t);if(n==null)throw we("ckbox-access-default-workspace-error"),e;return n}async getAvailableCategories(e=0){const t=new URL("categories",this.serviceOrigin);return t.searchParams.set("limit",50 .toString()),t.searchParams.set("offset",e.toString()),t.searchParams.set("workspaceId",this.getWorkspaceId()),this._sendHttpRequest({url:t}).then(async n=>{if(n.totalCount-(e+50)>0){const o=await this.getAvailableCategories(e+50);return[...n.items,...o]}return n.items}).catch(()=>{this.controller.signal.throwIfAborted(),we("ckbox-fetch-category-http-error")})}async getCategoryIdForFile(e){const t=function(a){const c=/\.(?<ext>[^.]+)$/;return a.match(c).groups.ext.toLowerCase()}(e.name),n=await this.getAvailableCategories();if(!n)return null;const o=this.editor.config.get("ckbox.defaultUploadCategories");if(o){const a=Object.keys(o).find(c=>o[c].find(d=>d.toLowerCase()==t));if(a){const c=n.find(d=>d.id===a||d.name===a);return c?c.id:null}}const r=n.find(a=>a.extensions.find(c=>c.toLowerCase()==t));return r?r.id:null}async upload(){const e=this.editor.t,t=e("Cannot determine a category for the uploaded file."),n=await this.loader.file,o=await this.getCategoryIdForFile(n);if(!o)return Promise.reject(t);const r=new URL("assets",this.serviceOrigin),a=new FormData;r.searchParams.set("workspaceId",this.getWorkspaceId()),a.append("categoryId",o),a.append("file",n);const c={method:"POST",url:r,data:a,onUploadProgress:d=>{d.lengthComputable&&(this.loader.uploadTotal=d.total,this.loader.uploaded=d.loaded)}};return this._sendHttpRequest(c).then(async d=>{const h=dA(d.imageUrls);return{ckboxImageId:d.id,default:h.imageFallbackUrl,sources:h.imageSources}}).catch(()=>{const d=e("Cannot upload file:")+` ${n.name}.`;return Promise.reject(d)})}abort(){this.controller.abort()}_sendHttpRequest({url:e,method:t="GET",data:n,onUploadProgress:o}){const r=this.controller.signal,a=new XMLHttpRequest;a.open(t,e.toString(),!0),a.setRequestHeader("Authorization",this.token.value),a.setRequestHeader("CKBox-Version","CKEditor 5"),a.responseType="json";const c=()=>{a.abort()};return new Promise((d,h)=>{r.addEventListener("abort",c),a.addEventListener("loadstart",()=>{r.addEventListener("abort",c)}),a.addEventListener("loadend",()=>{r.removeEventListener("abort",c)}),a.addEventListener("error",()=>{h()}),a.addEventListener("abort",()=>{h()}),a.addEventListener("load",async()=>{const m=a.response;return!m||m.statusCode>=400?h(m&&m.message):d(m)}),o&&a.upload.addEventListener("progress",m=>{o(m)}),a.send(n)})}}class og extends W{static get pluginName(){return"CKBoxEditing"}static get requires(){return["CloudServices","LinkEditing","PictureEditing",o3]}async init(){const e=this.editor,t=!!e.config.get("ckbox"),n=!!window.CKBox;if(!t&&!n)return;this._initConfig();const o=e.plugins.get("CloudServicesCore"),r=e.config.get("ckbox.tokenUrl");if(r===e.config.get("cloudServices.tokenUrl")){const a=e.plugins.get("CloudServices");this._token=a.token}else this._token=await o.createToken(r).init();e.config.get("ckbox.ignoreDataId")||(this._initSchema(),this._initConversion(),this._initFixers()),n&&e.commands.add("ckbox",new Z4(e))}getToken(){return this._token}_initConfig(){const e=this.editor;if(e.config.define("ckbox",{serviceOrigin:"https://api.ckbox.io",defaultUploadCategories:null,ignoreDataId:!1,language:e.locale.uiLanguage,theme:"default",tokenUrl:e.config.get("cloudServices.tokenUrl")}),!e.config.get("ckbox.tokenUrl"))throw new N("ckbox-plugin-missing-token-url",this);e.plugins.has("ImageBlockEditing")||e.plugins.has("ImageInlineEditing")||we("ckbox-plugin-image-feature-missing",e)}_initSchema(){const e=this.editor.model.schema;e.extend("$text",{allowAttributes:"ckboxLinkId"}),e.isRegistered("imageBlock")&&e.extend("imageBlock",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),e.isRegistered("imageInline")&&e.extend("imageInline",{allowAttributes:["ckboxImageId","ckboxLinkId"]}),e.addAttributeCheck((t,n)=>{if(!t.last.getAttribute("linkHref")&&n==="ckboxLinkId")return!1})}_initConversion(){const e=this.editor;e.conversion.for("downcast").add(t=>{t.on("attribute:ckboxLinkId:imageBlock",(n,o,r)=>{const{writer:a,mapper:c,consumable:d}=r;if(!d.consume(o.item,n.name))return;const h=[...c.toViewElement(o.item).getChildren()].find(m=>m.name==="a");h&&(o.item.hasAttribute("ckboxLinkId")?a.setAttribute("data-ckbox-resource-id",o.item.getAttribute("ckboxLinkId"),h):a.removeAttribute("data-ckbox-resource-id",h))},{priority:"low"}),t.on("attribute:ckboxLinkId",(n,o,r)=>{const{writer:a,mapper:c,consumable:d}=r;if(d.consume(o.item,n.name)){if(o.attributeOldValue){const h=mA(a,o.attributeOldValue);a.unwrap(c.toViewRange(o.range),h)}if(o.attributeNewValue){const h=mA(a,o.attributeNewValue);if(o.item.is("selection")){const m=a.document.selection;a.wrap(m.getFirstRange(),h)}else a.wrap(c.toViewRange(o.range),h)}}},{priority:"low"})}),e.conversion.for("upcast").add(t=>{t.on("element:a",(n,o,r)=>{const{writer:a,consumable:c}=r;if(!o.viewItem.getAttribute("href")||!c.consume(o.viewItem,{attributes:["data-ckbox-resource-id"]}))return;const d=o.viewItem.getAttribute("data-ckbox-resource-id");if(d)if(o.modelRange)for(let h of o.modelRange.getItems())h.is("$textProxy")&&(h=h.textNode),s3(h)&&a.setAttribute("ckboxLinkId",d,h);else{const h=o.modelCursor.nodeBefore||o.modelCursor.parent;a.setAttribute("ckboxLinkId",d,h)}},{priority:"low"})}),e.conversion.for("downcast").attributeToAttribute({model:"ckboxImageId",view:"data-ckbox-resource-id"}),e.conversion.for("upcast").elementToAttribute({model:{key:"ckboxImageId",value:t=>t.getAttribute("data-ckbox-resource-id")},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}})}_initFixers(){const e=this.editor,t=e.model,n=t.document.selection;t.document.registerPostFixer(function(o){return r=>{let a=!1;const c=o.model,d=o.commands.get("ckbox");if(!d)return a;for(const h of c.document.differ.getChanges()){if(h.type!=="insert"&&h.type!=="attribute")continue;const m=h.type==="insert"?new q(h.position,h.position.getShiftedBy(h.length)):h.range,g=h.type==="attribute"&&h.attributeKey==="linkHref"&&h.attributeNewValue===null;for(const k of m.getItems()){if(g&&k.hasAttribute("ckboxLinkId")){r.removeAttribute("ckboxLinkId",k),a=!0;continue}const w=r3(k,d._chosenAssets);for(const _ of w){const x=_.type==="image"?"ckboxImageId":"ckboxLinkId";_.id!==k.getAttribute(x)&&(r.setAttribute(x,_.id,k),a=!0)}}}return a}}(e)),t.document.registerPostFixer(function(o){return r=>!(o.hasAttribute("linkHref")||!o.hasAttribute("ckboxLinkId"))&&(r.removeSelectionAttribute("ckboxLinkId"),!0)}(n))}}function r3(i,e){const t=i.is("element","imageInline")||i.is("element","imageBlock"),n=i.hasAttribute("linkHref");return[...e].filter(o=>o.type==="image"&&t?o.attributes.imageFallbackUrl===i.getAttribute("src"):o.type==="link"&&n?o.attributes.linkHref===i.getAttribute("linkHref"):void 0)}function mA(i,e){const t=i.createAttributeElement("a",{"data-ckbox-resource-id":e},{priority:5});return i.setCustomProperty("link",!0,t),t}function s3(i){return!!i.is("$text")||!(!i.is("element","imageInline")&&!i.is("element","imageBlock"))}const a3={autoRefresh:!0},gA=36e5;class ig extends De(){constructor(e,t={}){if(super(),!e)throw new N("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),this._refresh=typeof e=="function"?e:()=>{return n=e,new Promise((o,r)=>{const a=new XMLHttpRequest;a.open("GET",n),a.addEventListener("load",()=>{const c=a.status,d=a.response;return c<200||c>299?r(new N("token-cannot-download-new-token",null)):o(d)}),a.addEventListener("error",()=>r(new Error("Network Error"))),a.addEventListener("abort",()=>r(new Error("Abort"))),a.send()});var n},this._options={...a3,...t}}init(){return new Promise((e,t)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)):this.refreshToken().then(e).catch(t)})}refreshToken(){return this._refresh().then(e=>(this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout(),this))}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t=typeof e=="string",n=!/^".*"$/.test(e),o=t&&e.split(".").length===3;if(!n||!o)throw new N("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));return t?Math.floor((1e3*t-Date.now())/2):gA}catch{return gA}}static create(e,t={}){return new ig(e,t).init()}}const rg=/^data:(\S*?);base64,/;class l3 extends re(){constructor(e,t,n){if(super(),!e)throw new N("fileuploader-missing-file",null);if(!t)throw new N("fileuploader-missing-token",null);if(!n)throw new N("fileuploader-missing-api-address",null);this.file=function(o){if(typeof o!="string")return!1;const r=o.match(rg);return!(!r||!r.length)}(e)?function(o,r=512){try{const a=o.match(rg)[1],c=atob(o.replace(rg,"")),d=[];for(let h=0;h<c.length;h+=r){const m=c.slice(h,h+r),g=new Array(m.length);for(let k=0;k<m.length;k++)g[k]=m.charCodeAt(k);d.push(new Uint8Array(g))}return new Blob(d,{type:a})}catch{throw new N("fileuploader-decoding-image-data-error",null)}}(e):e,this._token=t,this._apiAddress=n}onProgress(e){return this.on("progress",(t,n)=>e(n)),this}onError(e){return this.once("error",(t,n)=>e(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this.xhr,t=n=>()=>this.fire("error",n);e.addEventListener("error",t("Network Error")),e.addEventListener("abort",t("Abort")),e.upload&&e.upload.addEventListener("progress",n=>{n.lengthComputable&&this.fire("progress",{total:n.total,uploaded:n.loaded})}),e.addEventListener("load",()=>{const n=e.status,o=e.response;if(n<200||n>299)return this.fire("error",o.message||o.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((n,o)=>{t.addEventListener("load",()=>{const r=t.status,a=t.response;return r<200||r>299?a.message?o(new N("fileuploader-uploading-data-failed",this,{message:a.message})):o(a.error):n(a)}),t.addEventListener("error",()=>o(new Error("Network Error"))),t.addEventListener("abort",()=>o(new Error("Abort"))),t.send(e)})}}class c3{constructor(e,t){if(!e)throw new N("uploadgateway-missing-token",null);if(!t)throw new N("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new l3(e,this._token,this._apiAddress)}}class d3 extends Rc{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new ig(e,t)}createUploadGateway(e,t){return new c3(e,t)}}class sg extends fi{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(o){return(r,a)=>{a.preventDefault();const c=a.dropRange?[a.dropRange]:null,d=new R(t,o);t.fire(d,{dataTransfer:a.dataTransfer,method:r.name,targetRanges:c,target:a.target,domEvent:a.domEvent}),d.stop.called&&a.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",o={dataTransfer:new $b(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(o.dropRange=function(r,a){const c=a.target.ownerDocument,d=a.clientX,h=a.clientY;let m;return c.caretRangeFromPoint&&c.caretRangeFromPoint(d,h)?m=c.caretRangeFromPoint(d,h):a.rangeParent&&(m=c.createRange(),m.setStart(a.rangeParent,a.rangeOffset),m.collapse(!0)),m?r.domConverter.domRangeToView(m):null}(this.view,e)),this.fire(e.type,e,o)}}const pA=["figcaption","li"];function fA(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=fA(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(pA.includes(t.name)||pA.includes(n.name)?e+=`
`:e+=`

`),e+=o,t=n}}return e}class fo extends W{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(sg),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){const e=this.editor,t=e.model,n=e.editing.view,o=n.document;this.listenTo(o,"clipboardInput",(r,a)=>{a.method!="paste"||e.model.canEditAt(e.model.document.selection)||r.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(r,a)=>{const c=a.dataTransfer;let d;if(a.content)d=a.content;else{let g="";c.getData("text/html")?g=function(k){return k.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(w,_)=>_.length==1?" ":_).replace(/<!--[\s\S]*?-->/g,"")}(c.getData("text/html")):c.getData("text/plain")&&(((h=(h=c.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||h.includes("<br>"))&&(h=`<p>${h}</p>`),g=h),d=this.editor.data.htmlProcessor.toView(g)}var h;const m=new R(this,"inputTransformation");this.fire(m,{content:d,dataTransfer:c,targetRanges:a.targetRanges,method:a.method}),m.stop.called&&r.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(r,a)=>{if(a.content.isEmpty)return;const c=this.editor.data.toModel(a.content,"$clipboardHolder");c.childCount!=0&&(r.stop(),t.change(()=>{this.fire("contentInsertion",{content:c,method:a.method,dataTransfer:a.dataTransfer,targetRanges:a.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(r,a)=>{a.resultRange=t.insertContent(a.content)},{priority:"low"})}_setupCopyCut(){const e=this.editor,t=e.model.document,n=e.editing.view.document,o=(r,a)=>{const c=a.dataTransfer;a.preventDefault();const d=e.data.toView(e.model.getSelectedContent(t.selection));n.fire("clipboardOutput",{dataTransfer:c,content:d,method:r.name})};this.listenTo(n,"copy",o,{priority:"low"}),this.listenTo(n,"cut",(r,a)=>{e.model.canEditAt(e.model.document.selection)?o(r,a):a.preventDefault()},{priority:"low"}),this.listenTo(n,"clipboardOutput",(r,a)=>{a.content.isEmpty||(a.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(a.content)),a.dataTransfer.setData("text/plain",fA(a.content))),a.method=="cut"&&e.model.deleteContent(t.selection)},{priority:"low"})}}class u3 extends re(){constructor(){super(...arguments),this._stack=[]}add(e,t){const n=this._stack,o=n[0];this._insertDescriptor(e);const r=n[0];o===r||ag(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:t})}remove(e,t){const n=this._stack,o=n[0];this._removeDescriptor(e);const r=n[0];o===r||ag(o,r)||this.fire("change:top",{oldDescriptor:o,newDescriptor:r,writer:t})}_insertDescriptor(e){const t=this._stack,n=t.findIndex(r=>r.id===e.id);if(ag(e,t[n]))return;n>-1&&t.splice(n,1);let o=0;for(;t[o]&&h3(t[o],e);)o++;t.splice(o,0,e)}_removeDescriptor(e){const t=this._stack,n=t.findIndex(o=>o.id===e);n>-1&&t.splice(n,1)}}function ag(i,e){return i&&e&&i.priority==e.priority&&fd(i.classes)==fd(e.classes)}function h3(i,e){return i.priority>e.priority||!(i.priority<e.priority)&&fd(i.classes)>fd(e.classes)}function fd(i){return Array.isArray(i)?i.sort().join(","):i}const m3='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>',g3="ck-widget",kA="ck-widget_selected";function tt(i){return!!i.is("element")&&!!i.getCustomProperty("widget")}function vs(i,e,t={}){if(!i.is("containerElement"))throw new N("widget-to-widget-wrong-element-type",null,{element:i});return e.setAttribute("contenteditable","false",i),e.addClass(g3,i),e.setCustomProperty("widget",!0,i),i.getFillerOffset=k3,e.setCustomProperty("widgetLabel",[],i),t.label&&function(n,o){n.getCustomProperty("widgetLabel").push(o)}(i,t.label),t.hasSelectionHandle&&function(n,o){const r=o.createUIElement("div",{class:"ck ck-widget__selection-handle"},function(a){const c=this.toDomElement(a),d=new pi;return d.set("content",m3),d.render(),c.appendChild(d.element),c});o.insert(o.createPositionAt(n,0),r),o.addClass(["ck-widget_with-selection-handle"],n)}(i,e),bA(i,e),i}function p3(i,e,t){if(e.classes&&t.addClass(et(e.classes),i),e.attributes)for(const n in e.attributes)t.setAttribute(n,e.attributes[n],i)}function f3(i,e,t){if(e.classes&&t.removeClass(et(e.classes),i),e.attributes)for(const n in e.attributes)t.removeAttribute(n,i)}function bA(i,e,t=p3,n=f3){const o=new u3;o.on("change:top",(r,a)=>{a.oldDescriptor&&n(i,a.oldDescriptor,a.writer),a.newDescriptor&&t(i,a.newDescriptor,a.writer)}),e.setCustomProperty("addHighlight",(r,a,c)=>o.add(a,c),i),e.setCustomProperty("removeHighlight",(r,a,c)=>o.remove(a,c),i)}function wA(i,e,t={}){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],i),e.setAttribute("role","textbox",i),t.label&&e.setAttribute("aria-label",t.label,i),e.setAttribute("contenteditable",i.isReadOnly?"false":"true",i),i.on("change:isReadOnly",(n,o,r)=>{e.setAttribute("contenteditable",r?"false":"true",i)}),i.on("change:isFocused",(n,o,r)=>{r?e.addClass("ck-editor__nested-editable_focused",i):e.removeClass("ck-editor__nested-editable_focused",i)}),bA(i,e),i}function lg(i,e){const t=i.getSelectedElement();if(t){const n=Ci(i);if(n)return e.createRange(e.createPositionAt(t,n))}return Uw(i,e)}function k3(){return null}const Ro="widget-type-around";function kr(i,e,t){return!!i&&tt(i)&&!t.isInline(e)}function Ci(i){return i.getAttribute(Ro)}var AA=f(2347),b3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(AA.Z,b3),AA.Z.locals;const CA=["before","after"],w3=new DOMParser().parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild,vA="ck-widget__type-around_disabled";class A3 extends W{constructor(){super(...arguments),this._currentFakeCaretModelElement=null}static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Xa,Oo]}init(){const e=this.editor,t=e.editing.view;this.on("change:isEnabled",(n,o,r)=>{t.change(a=>{for(const c of t.document.roots)r?a.removeClass(vA,c):a.addClass(vA,c)}),r||e.model.change(a=>{a.removeSelectionAttribute(Ro)})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableInsertObjectIntegration(),this._enableDeleteContentIntegration()}destroy(){super.destroy(),this._currentFakeCaretModelElement=null}_insertParagraph(e,t){const n=this.editor,o=n.editing.view,r=n.model.schema.getAttributesWithProperty(e,"copyOnReplace",!0);n.execute("insertParagraph",{position:n.model.createPositionAt(e,t),attributes:r}),o.focus(),o.scrollToTheSelection()}_listenToIfEnabled(e,t,n,o){this.listenTo(e,t,(...r)=>{this.isEnabled&&n(...r)},o)}_insertParagraphAccordingToFakeCaretPosition(){const e=this.editor.model.document.selection,t=Ci(e);if(!t)return!1;const n=e.getSelectedElement();return this._insertParagraph(n,t),!0}_enableTypeAroundUIInjection(){const e=this.editor,t=e.model.schema,n=e.locale.t,o={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};e.editing.downcastDispatcher.on("insert",(r,a,c)=>{const d=c.mapper.toViewElement(a.item);d&&kr(d,a.item,t)&&(function(h,m,g){const k=h.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},function(w){const _=this.toDomElement(w);return function(x,I){for(const L of CA){const V=new Kt({tag:"div",attributes:{class:["ck","ck-widget__type-around__button",`ck-widget__type-around__button_${L}`],title:I[L],"aria-hidden":"true"},children:[x.ownerDocument.importNode(w3,!0)]});x.appendChild(V.render())}}(_,m),function(x){const I=new Kt({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});x.appendChild(I.render())}(_),_});h.insert(h.createPositionAt(g,"end"),k)}(c.writer,o,d),d.getCustomProperty("widgetLabel").push(()=>this.isEnabled?n("Press Enter to type after or press Shift + Enter to type before the widget"):""))},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const e=this.editor,t=e.model,n=t.document.selection,o=t.schema,r=e.editing.view;function a(c){return`ck-widget_type-around_show-fake-caret_${c}`}this._listenToIfEnabled(r.document,"arrowKey",(c,d)=>{this._handleArrowKeyPress(c,d)},{context:[tt,"$text"],priority:"high"}),this._listenToIfEnabled(n,"change:range",(c,d)=>{d.directChange&&e.model.change(h=>{h.removeSelectionAttribute(Ro)})}),this._listenToIfEnabled(t.document,"change:data",()=>{const c=n.getSelectedElement();c&&kr(e.editing.mapper.toViewElement(c),c,o)||e.model.change(d=>{d.removeSelectionAttribute(Ro)})}),this._listenToIfEnabled(e.editing.downcastDispatcher,"selection",(c,d,h)=>{const m=h.writer;if(this._currentFakeCaretModelElement){const _=h.mapper.toViewElement(this._currentFakeCaretModelElement);_&&(m.removeClass(CA.map(a),_),this._currentFakeCaretModelElement=null)}const g=d.selection.getSelectedElement();if(!g)return;const k=h.mapper.toViewElement(g);if(!kr(k,g,o))return;const w=Ci(d.selection);w&&(m.addClass(a(w),k),this._currentFakeCaretModelElement=g)}),this._listenToIfEnabled(e.ui.focusTracker,"change:isFocused",(c,d,h)=>{h||e.model.change(m=>{m.removeSelectionAttribute(Ro)})})}_handleArrowKeyPress(e,t){const n=this.editor,o=n.model,r=o.document.selection,a=o.schema,c=n.editing.view,d=function(g,k){const w=Wh(g,k);return w==="down"||w==="right"}(t.keyCode,n.locale.contentLanguageDirection),h=c.document.selection.getSelectedElement();let m;kr(h,n.editing.mapper.toModelElement(h),a)?m=this._handleArrowKeyPressOnSelectedWidget(d):r.isCollapsed?m=this._handleArrowKeyPressWhenSelectionNextToAWidget(d):t.shiftKey||(m=this._handleArrowKeyPressWhenNonCollapsedSelection(d)),m&&(t.preventDefault(),e.stop())}_handleArrowKeyPressOnSelectedWidget(e){const t=this.editor.model,n=Ci(t.document.selection);return t.change(o=>n?n!==(e?"after":"before")?(o.removeSelectionAttribute(Ro),!0):!1:(o.setSelectionAttribute(Ro,e?"after":"before"),!0))}_handleArrowKeyPressWhenSelectionNextToAWidget(e){const t=this.editor,n=t.model,o=n.schema,r=t.plugins.get("Widget"),a=r._getObjectElementNextToSelection(e);return!!kr(t.editing.mapper.toViewElement(a),a,o)&&(n.change(c=>{r._setSelectionOverElement(a),c.setSelectionAttribute(Ro,e?"before":"after")}),!0)}_handleArrowKeyPressWhenNonCollapsedSelection(e){const t=this.editor,n=t.model,o=n.schema,r=t.editing.mapper,a=n.document.selection,c=e?a.getLastPosition().nodeBefore:a.getFirstPosition().nodeAfter;return!!kr(r.toViewElement(c),c,o)&&(n.change(d=>{d.setSelection(c,"on"),d.setSelectionAttribute(Ro,e?"after":"before")}),!0)}_enableInsertingParagraphsOnButtonClick(){const e=this.editor,t=e.editing.view;this._listenToIfEnabled(t.document,"mousedown",(n,o)=>{const r=o.domTarget.closest(".ck-widget__type-around__button");if(!r)return;const a=function(h){return h.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(r),c=function(h,m){const g=h.closest(".ck-widget");return m.mapDomToView(g)}(r,t.domConverter),d=e.editing.mapper.toModelElement(c);this._insertParagraph(d,a),o.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const e=this.editor,t=e.model.document.selection,n=e.editing.view;this._listenToIfEnabled(n.document,"enter",(o,r)=>{if(o.eventPhase!="atTarget")return;const a=t.getSelectedElement(),c=e.editing.mapper.toViewElement(a),d=e.model.schema;let h;this._insertParagraphAccordingToFakeCaretPosition()?h=!0:kr(c,a,d)&&(this._insertParagraph(a,r.isSoft?"before":"after"),h=!0),h&&(r.preventDefault(),o.stop())},{context:tt})}_enableInsertingParagraphsOnTypingKeystroke(){const e=this.editor.editing.view.document;this._listenToIfEnabled(e,"insertText",(t,n)=>{this._insertParagraphAccordingToFakeCaretPosition()&&(n.selection=e.selection)},{priority:"high"}),C.isAndroid?this._listenToIfEnabled(e,"keydown",(t,n)=>{n.keyCode==229&&this._insertParagraphAccordingToFakeCaretPosition()}):this._listenToIfEnabled(e,"compositionstart",()=>{this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){const e=this.editor,t=e.editing.view,n=e.model,o=n.schema;this._listenToIfEnabled(t.document,"delete",(r,a)=>{if(r.eventPhase!="atTarget")return;const c=Ci(n.document.selection);if(!c)return;const d=a.direction,h=n.document.selection.getSelectedElement(),m=d=="forward";if(c==="before"===m)e.execute("delete",{selection:n.createSelection(h,"on")});else{const g=o.getNearestSelectionRange(n.createPositionAt(h,c),d);if(g)if(g.isCollapsed){const k=n.createSelection(g.start);if(n.modifySelection(k,{direction:d}),k.focus.isEqual(g.start)){const w=function(_,x){let I=x;for(const L of x.getAncestors({parentFirst:!0})){if(L.childCount>1||_.isLimit(L))break;I=L}return I}(o,g.start.parent);n.deleteContent(n.createSelection(w,"on"),{doNotAutoparagraph:!0})}else n.change(w=>{w.setSelection(g),e.execute(m?"deleteForward":"delete")})}else n.change(k=>{k.setSelection(g),e.execute(m?"deleteForward":"delete")})}a.preventDefault(),r.stop()},{context:tt})}_enableInsertContentIntegration(){const e=this.editor,t=this.editor.model,n=t.document.selection;this._listenToIfEnabled(e.model,"insertContent",(o,[r,a])=>{if(a&&!a.is("documentSelection"))return;const c=Ci(n);return c?(o.stop(),t.change(d=>{const h=n.getSelectedElement(),m=t.createPositionAt(h,c),g=d.createSelection(m),k=t.insertContent(r,g);return d.setSelection(g),k})):void 0},{priority:"high"})}_enableInsertObjectIntegration(){const e=this.editor,t=this.editor.model.document.selection;this._listenToIfEnabled(e.model,"insertObject",(n,o)=>{const[,r,a={}]=o;if(r&&!r.is("documentSelection"))return;const c=Ci(t);c&&(a.findOptimalPosition=c,o[3]=a)},{priority:"high"})}_enableDeleteContentIntegration(){const e=this.editor,t=this.editor.model.document.selection;this._listenToIfEnabled(e.model,"deleteContent",(n,[o])=>{o&&!o.is("documentSelection")||Ci(t)&&n.stop()},{priority:"high"})}}function C3(i){const e=i.model;return(t,n)=>{const o=n.keyCode==ye.arrowup,r=n.keyCode==ye.arrowdown,a=n.shiftKey,c=e.document.selection;if(!o&&!r)return;const d=r;if(a&&function(m,g){return!m.isCollapsed&&m.isBackward==g}(c,d))return;const h=function(m,g,k){const w=m.model;if(k){const _=g.isCollapsed?g.focus:g.getLastPosition(),x=_A(w,_,"forward");if(!x)return null;const I=w.createRange(_,x),L=yA(w.schema,I,"backward");return L?w.createRange(_,L):null}{const _=g.isCollapsed?g.focus:g.getFirstPosition(),x=_A(w,_,"backward");if(!x)return null;const I=w.createRange(x,_),L=yA(w.schema,I,"forward");return L?w.createRange(L,_):null}}(i,c,d);if(h){if(h.isCollapsed&&(c.isCollapsed||a))return;(h.isCollapsed||function(m,g,k){const w=m.model,_=m.view.domConverter;if(k){const $=w.createSelection(g.start);w.modifySelection($),$.focus.isAtEnd||g.start.isEqual($.focus)||(g=w.createRange($.focus,g.end))}const x=m.mapper.toViewRange(g),I=_.viewRangeToDom(x),L=Me.getDomRangeRects(I);let V;for(const $ of L)if(V!==void 0){if(Math.round($.top)>=V)return!1;V=Math.max(V,Math.round($.bottom))}else V=Math.round($.bottom);return!0}(i,h,d))&&(e.change(m=>{const g=d?h.end:h.start;if(a){const k=e.createSelection(c.anchor);k.setFocus(g),m.setSelection(k)}else m.setSelection(g)}),t.stop(),n.preventDefault(),n.stopPropagation())}}}function _A(i,e,t){const n=i.schema,o=i.createRangeIn(e.root),r=t=="forward"?"elementStart":"elementEnd";for(const{previousPosition:a,item:c,type:d}of o.getWalker({startPosition:e,direction:t})){if(n.isLimit(c)&&!n.isInline(c))return a;if(d==r&&n.isBlock(c))return null}return null}function yA(i,e,t){const n=t=="backward"?e.end:e.start;if(i.checkChild(n,"$text"))return n;for(const{nextPosition:o}of e.getWalker({direction:t}))if(i.checkChild(o,"$text"))return o;return null}var xA=f(7153),v3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(xA.Z,v3),xA.Z.locals;class br extends W{constructor(){super(...arguments),this._previouslySelected=new Set}static get pluginName(){return"Widget"}static get requires(){return[A3,Oo]}init(){const e=this.editor,t=e.editing.view,n=t.document;this.editor.editing.downcastDispatcher.on("selection",(o,r,a)=>{const c=a.writer,d=r.selection;if(d.isCollapsed)return;const h=d.getSelectedElement();if(!h)return;const m=e.editing.mapper.toViewElement(h);var g;tt(m)&&a.consumable.consume(d,"selection")&&c.setSelection(c.createRangeOn(m),{fake:!0,label:(g=m,g.getCustomProperty("widgetLabel").reduce((k,w)=>typeof w=="function"?k?k+". "+w():w():k?k+". "+w:w,""))})}),this.editor.editing.downcastDispatcher.on("selection",(o,r,a)=>{this._clearPreviouslySelectedWidgets(a.writer);const c=a.writer,d=c.document.selection;let h=null;for(const m of d.getRanges())for(const g of m){const k=g.item;tt(k)&&!_3(k,h)&&(c.addClass(kA,k),this._previouslySelected.add(k),h=k)}},{priority:"low"}),t.addObserver(Bm),this.listenTo(n,"mousedown",(...o)=>this._onMousedown(...o)),this.listenTo(n,"arrowKey",(...o)=>{this._handleSelectionChangeOnArrowKeyPress(...o)},{context:[tt,"$text"]}),this.listenTo(n,"arrowKey",(...o)=>{this._preventDefaultOnArrowKeyPress(...o)},{context:"$root"}),this.listenTo(n,"arrowKey",C3(this.editor.editing),{context:"$text"}),this.listenTo(n,"delete",(o,r)=>{this._handleDelete(r.direction=="forward")&&(r.preventDefault(),o.stop())},{context:"$root"})}_onMousedown(e,t){const n=this.editor,o=n.editing.view,r=o.document;let a=t.target;if(function(d){let h=d;for(;h;){if(h.is("editableElement")&&!h.is("rootElement"))return!0;if(tt(h))return!1;h=h.parent}return!1}(a)){if((C.isSafari||C.isGecko)&&t.domEvent.detail>=3){const d=n.editing.mapper,h=a.is("attributeElement")?a.findAncestor(g=>!g.is("attributeElement")):a,m=d.toModelElement(h);t.preventDefault(),this.editor.model.change(g=>{g.setSelection(m,"in")})}return}if(!tt(a)&&(a=a.findAncestor(tt),!a))return;C.isAndroid&&t.preventDefault(),r.isFocused||o.focus();const c=n.editing.mapper.toModelElement(a);this._setSelectionOverElement(c)}_handleSelectionChangeOnArrowKeyPress(e,t){const n=t.keyCode,o=this.editor.model,r=o.schema,a=o.document.selection,c=a.getSelectedElement(),d=Wh(n,this.editor.locale.contentLanguageDirection),h=d=="down"||d=="right",m=d=="up"||d=="down";if(c&&r.isObject(c)){const k=h?a.getLastPosition():a.getFirstPosition(),w=r.getNearestSelectionRange(k,h?"forward":"backward");return void(w&&(o.change(_=>{_.setSelection(w)}),t.preventDefault(),e.stop()))}if(!a.isCollapsed&&!t.shiftKey){const k=a.getFirstPosition(),w=a.getLastPosition(),_=k.nodeAfter,x=w.nodeBefore;return void((_&&r.isObject(_)||x&&r.isObject(x))&&(o.change(I=>{I.setSelection(h?w:k)}),t.preventDefault(),e.stop()))}if(!a.isCollapsed)return;const g=this._getObjectElementNextToSelection(h);if(g&&r.isObject(g)){if(r.isInline(g)&&m)return;this._setSelectionOverElement(g),t.preventDefault(),e.stop()}}_preventDefaultOnArrowKeyPress(e,t){const n=this.editor.model,o=n.schema,r=n.document.selection.getSelectedElement();r&&o.isObject(r)&&(t.preventDefault(),e.stop())}_handleDelete(e){const t=this.editor.model.document.selection;if(!this.editor.model.canEditAt(t)||!t.isCollapsed)return;const n=this._getObjectElementNextToSelection(e);return n?(this.editor.model.change(o=>{let r=t.anchor.parent;for(;r.isEmpty;){const a=r;r=a.parent,o.remove(a)}this._setSelectionOverElement(n)}),!0):void 0}_setSelectionOverElement(e){this.editor.model.change(t=>{t.setSelection(t.createRangeOn(e))})}_getObjectElementNextToSelection(e){const t=this.editor.model,n=t.schema,o=t.document.selection,r=t.createSelection(o);if(t.modifySelection(r,{direction:e?"forward":"backward"}),r.isEqual(o))return null;const a=e?r.focus.nodeBefore:r.focus.nodeAfter;return a&&n.isObject(a)?a:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass(kA,t);this._previouslySelected.clear()}}function _3(i,e){return!!e&&Array.from(i.getAncestors()).includes(e)}class kd extends W{constructor(){super(...arguments),this._toolbarDefinitions=new Map}static get requires(){return[ld]}static get pluginName(){return"WidgetToolbarRepository"}init(){const e=this.editor;if(e.plugins.has("BalloonToolbar")){const t=e.plugins.get("BalloonToolbar");this.listenTo(t,"show",n=>{(function(o){const r=o.getSelectedElement();return!(!r||!tt(r))})(e.editing.view.document.selection)&&n.stop()},{priority:"high"})}this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const e of this._toolbarDefinitions.values())e.view.destroy()}register(e,{ariaLabel:t,items:n,getRelatedElement:o,balloonClassName:r="ck-toolbar-container"}){if(!n.length)return void te("widget-toolbar-no-items",{toolbarId:e});const a=this.editor,c=a.t,d=new Lm(a.locale);if(d.ariaLabel=t||c("Widget toolbar"),this._toolbarDefinitions.has(e))throw new N("widget-toolbar-duplicated",this,{toolbarId:e});const h={view:d,getRelatedElement:o,balloonClassName:r,itemsConfig:n,initialized:!1};a.ui.addToolbar(d,{isContextual:!0,beforeFocus:()=>{const m=o(a.editing.view.document.selection);m&&this._showToolbar(h,m)},afterBlur:()=>{this._hideToolbar(h)}}),this._toolbarDefinitions.set(e,h)}_updateToolbarsVisibility(){let e=0,t=null,n=null;for(const o of this._toolbarDefinitions.values()){const r=o.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&r)if(this.editor.ui.focusTracker.isFocused){const a=r.getAncestors().length;a>e&&(e=a,t=r,n=o)}else this._isToolbarVisible(o)&&this._hideToolbar(o);else this._isToolbarInBalloon(o)&&this._hideToolbar(o)}n&&this._showToolbar(n,t)}_hideToolbar(e){this._balloon.remove(e.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(e,t){this._isToolbarVisible(e)?EA(this.editor,t):this._isToolbarInBalloon(e)||(e.initialized||(e.initialized=!0,e.view.fillFromConfig(e.itemsConfig,this.editor.ui.componentFactory)),this._balloon.add({view:e.view,position:DA(this.editor,t),balloonClassName:e.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const n of this._toolbarDefinitions.values())if(this._isToolbarVisible(n)){const o=n.getRelatedElement(this.editor.editing.view.document.selection);EA(this.editor,o)}}))}_isToolbarVisible(e){return this._balloon.visibleView===e.view}_isToolbarInBalloon(e){return this._balloon.hasView(e.view)}}function EA(i,e){const t=i.plugins.get("ContextualBalloon"),n=DA(i,e);t.updatePosition(n)}function DA(i,e){const t=i.editing.view,n=Mt.defaultPositions;return{target:t.domConverter.mapViewToDom(e),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}var SA=f(4875),y3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(SA.Z,y3),SA.Z.locals;var TA=f(799),x3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(TA.Z,x3),TA.Z.locals;class E3 extends W{static get pluginName(){return"DragDrop"}static get requires(){return[fo,br]}init(){const e=this.editor,t=e.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=rd(n=>this._updateDropMarker(n),40),this._removeDropMarkerDelayed=qh(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=qh(()=>this._clearDraggableAttributes(),40),e.plugins.has("DragDropExperimental")?this.forceDisabled("DragDropExperimental"):(t.addObserver(sg),t.addObserver(Bm),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(e,"change:isReadOnly",(n,o,r)=>{r?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(n,o,r)=>{r||this._finalizeDragging(!1)}),C.isAndroid&&this.forceDisabled("noAndroidSupport"))}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){const e=this.editor,t=e.model,n=t.document,o=e.editing.view,r=o.document;this.listenTo(r,"dragstart",(a,c)=>{const d=n.selection;if(c.target&&c.target.is("editableElement"))return void c.preventDefault();const h=c.target?BA(c.target):null;if(h){const w=e.editing.mapper.toModelElement(h);this._draggedRange=Un.fromRange(t.createRangeOn(w)),e.plugins.has("WidgetToolbarRepository")&&e.plugins.get("WidgetToolbarRepository").forceDisabled("dragDrop")}else if(!r.selection.isCollapsed){const w=r.selection.getSelectedElement();w&&tt(w)||(this._draggedRange=Un.fromRange(d.getFirstRange()))}if(!this._draggedRange)return void c.preventDefault();this._draggingUid=Q();const m=this.isEnabled&&e.model.canEditAt(this._draggedRange);c.dataTransfer.effectAllowed=m?"copyMove":"copy",c.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);const g=t.createSelection(this._draggedRange.toRange()),k=e.data.toView(t.getSelectedContent(g));r.fire("clipboardOutput",{dataTransfer:c.dataTransfer,content:k,method:"dragstart"}),m||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(r,"dragend",(a,c)=>{this._finalizeDragging(!c.dataTransfer.isCanceled&&c.dataTransfer.dropEffect=="move")},{priority:"low"}),this.listenTo(r,"dragenter",()=>{this.isEnabled&&o.focus()}),this.listenTo(r,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(r,"dragging",(a,c)=>{if(!this.isEnabled)return void(c.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();const d=IA(e,c.targetRanges,c.target);e.model.canEditAt(d)?(this._draggedRange||(c.dataTransfer.dropEffect="copy"),C.isGecko||(c.dataTransfer.effectAllowed=="copy"?c.dataTransfer.dropEffect="copy":["all","copyMove"].includes(c.dataTransfer.effectAllowed)&&(c.dataTransfer.dropEffect="move")),d&&this._updateDropMarkerThrottled(d)):c.dataTransfer.dropEffect="none"},{priority:"low"})}_setupClipboardInputIntegration(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"clipboardInput",(n,o)=>{if(o.method!="drop")return;const r=IA(e,o.targetRanges,o.target);if(this._removeDropMarker(),!r||!e.model.canEditAt(r))return this._finalizeDragging(!1),void n.stop();if(this._draggedRange&&this._draggingUid!=o.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=""),MA(o.dataTransfer)=="move"&&this._draggedRange&&this._draggedRange.containsRange(r,!0))return this._finalizeDragging(!1),void n.stop();o.targetRanges=[e.editing.mapper.toViewRange(r)]},{priority:"high"})}_setupContentInsertionIntegration(){const e=this.editor.plugins.get(fo);e.on("contentInsertion",(t,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=n.targetRanges.map(r=>this.editor.editing.mapper.toModelRange(r));this.editor.model.change(r=>r.setSelection(o))},{priority:"high"}),e.on("contentInsertion",(t,n)=>{if(!this.isEnabled||n.method!=="drop")return;const o=MA(n.dataTransfer)=="move",r=!n.resultRange||!n.resultRange.isCollapsed;this._finalizeDragging(r&&o)},{priority:"lowest"})}_setupDraggableAttributeHandling(){const e=this.editor,t=e.editing.view,n=t.document;this.listenTo(n,"mousedown",(o,r)=>{if(C.isAndroid||!r)return;this._clearDraggableAttributesDelayed.cancel();let a=BA(r.target);if(C.isBlink&&!a&&!n.selection.isCollapsed){const c=n.selection.getSelectedElement();if(!c||!tt(c)){const d=n.selection.editableElement;d&&!d.isReadOnly&&(a=d)}}a&&(t.change(c=>{c.setAttribute("draggable","true",a)}),this._draggableElement=e.editing.mapper.toModelElement(a))}),this.listenTo(n,"mouseup",()=>{C.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){const e=this.editor.editing;e.view.change(t=>{this._draggableElement&&this._draggableElement.root.rootName!="$graveyard"&&t.removeAttribute("draggable",e.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){const e=this.editor;e.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),e.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(t,{writer:n})=>{if(e.model.schema.checkChild(t.markerRange.start,"$text"))return n.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},function(o){const r=this.toDomElement(o);return r.append("⁠",o.createElement("span"),"⁠"),r})}})}_updateDropMarker(e){const t=this.editor,n=t.model.markers;t.model.change(o=>{n.has("drop-target")?n.get("drop-target").getRange().isEqual(e)||o.updateMarker("drop-target",{range:e}):o.addMarker("drop-target",{range:e,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){const e=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),e.markers.has("drop-target")&&e.change(t=>{t.removeMarker("drop-target")})}_finalizeDragging(e){const t=this.editor,n=t.model;this._removeDropMarker(),this._clearDraggableAttributes(),t.plugins.has("WidgetToolbarRepository")&&t.plugins.get("WidgetToolbarRepository").clearForceDisabled("dragDrop"),this._draggingUid="",this._draggedRange&&(e&&this.isEnabled&&n.deleteContent(n.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function IA(i,e,t){const n=i.model,o=i.editing.mapper;let r=null;const a=e?e[0].start:null;if(t.is("uiElement")&&(t=t.parent),r=function(h,m){const g=h.model,k=h.editing.mapper;if(tt(m))return g.createRangeOn(k.toModelElement(m));if(!m.is("editableElement")){const w=m.findAncestor(_=>tt(_)||_.is("editableElement"));if(tt(w))return g.createRangeOn(k.toModelElement(w))}return null}(i,t),r)return r;const c=function(h,m){const g=h.editing.mapper,k=h.editing.view,w=g.toModelElement(m);if(w)return w;const _=k.createPositionBefore(m),x=g.findMappedViewAncestor(_);return g.toModelElement(x)}(i,t),d=a?o.toModelPosition(a):null;return d?(r=function(h,m,g){const k=h.model;if(!k.schema.checkChild(g,"$block"))return null;const w=k.createPositionAt(g,0),_=m.path.slice(0,w.path.length),x=k.createPositionFromPath(m.root,_),I=x.nodeAfter;return I&&k.schema.isObject(I)?k.createRangeOn(I):null}(i,d,c),r||(r=n.schema.getNearestSelectionRange(d,C.isGecko?"forward":"backward"),r||function(h,m){const g=h.model;let k=m;for(;k;){if(g.schema.isObject(k))return g.createRangeOn(k);k=k.parent}return null}(i,d.parent))):function(h,m){const g=h.model,k=g.schema,w=g.createPositionAt(m,0);return k.getNearestSelectionRange(w,"forward")}(i,c)}function MA(i){return C.isGecko?i.dropEffect:["all","copyMove"].includes(i.effectAllowed)?"move":"copy"}function BA(i){if(i.is("editableElement"))return null;if(i.hasClass("ck-widget__selection-handle"))return i.findAncestor(tt);if(tt(i))return i;const e=i.findAncestor(t=>tt(t)||t.is("editableElement"));return tt(e)?e:null}class D3 extends W{static get pluginName(){return"PastePlainText"}static get requires(){return[fo]}init(){const e=this.editor,t=e.model,n=e.editing.view,o=n.document,r=t.document.selection;let a=!1;n.addObserver(sg),this.listenTo(o,"keydown",(c,d)=>{a=d.shiftKey}),e.plugins.get(fo).on("contentInsertion",(c,d)=>{(a||function(h,m){if(h.childCount>1)return!1;const g=h.getChild(0);return m.isObject(g)?!1:Array.from(g.getAttributeKeys()).length==0}(d.content,t.schema))&&t.change(h=>{const m=Array.from(r.getAttributes()).filter(([k])=>t.schema.getAttributeProperties(k).isFormatting);r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0}),m.push(...r.getAttributes());const g=h.createRangeIn(d.content);for(const k of g.getItems())k.is("$textProxy")&&h.setAttributes(m,k)})})}}class NA extends W{static get pluginName(){return"Clipboard"}static get requires(){return[fo,E3,D3]}}class S3 extends ue{constructor(e){super(e),this.affectsData=!1}execute(){const e=this.editor.model,t=e.document.selection;let n=e.schema.getLimitElement(t);if(t.containsEntireContent(n)||!LA(e.schema,n))do if(n=n.parent,!n)return;while(!LA(e.schema,n));e.change(o=>{o.setSelection(n,"in")})}}function LA(i,e){return i.isLimit(e)&&(i.checkChild(e,"$text")||i.checkChild(e,"paragraph"))}const T3=Nc("Ctrl+A");class I3 extends W{static get pluginName(){return"SelectAllEditing"}init(){const e=this.editor,t=e.editing.view.document;e.commands.add("selectAll",new S3(e)),this.listenTo(t,"keydown",(n,o)=>{is(o)===T3&&(e.execute("selectAll"),o.preventDefault())})}}class M3 extends W{static get pluginName(){return"SelectAllUI"}init(){const e=this.editor;e.ui.componentFactory.add("selectAll",t=>{const n=e.commands.get("selectAll"),o=new be(t),r=t.t;return o.set({label:r("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),o.bind("isEnabled").to(n,"isEnabled"),this.listenTo(o,"execute",()=>{e.execute("selectAll"),e.editing.view.focus()}),o})}}class B3 extends W{static get requires(){return[I3,M3]}static get pluginName(){return"SelectAll"}}class PA extends ue{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this._isEnabledBasedOnSelection=!1,this.listenTo(e.data,"set",(t,n)=>{n[1]={...n[1]};const o=n[1];o.batchType||(o.batchType={isUndoable:!1})},{priority:"high"}),this.listenTo(e.data,"set",(t,n)=>{n[1].batchType.isUndoable||this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}get createdBatches(){return this._createdBatches}addBatch(e){const t=this.editor.model.document.selection,n={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,n){const o=this.editor.model,r=o.document,a=[],c=e.map(h=>h.getTransformedByOperations(n)),d=c.flat();for(const h of c){const m=h.filter(g=>g.root!=r.graveyard).filter(g=>!L3(g,d));m.length&&(N3(m),a.push(m[0]))}a.length&&o.change(h=>{h.setSelection(a,{backward:t})})}_undo(e,t){const n=this.editor.model,o=n.document;this._createdBatches.add(t);const r=e.operations.slice().filter(a=>a.isDocumentOperation);r.reverse();for(const a of r){const c=a.baseVersion+1,d=Array.from(o.history.getOperations(c)),h=_D([a.getReversed()],d,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(let m of h){const g=m.affectedSelectable;g&&!n.canEditAt(g)&&(m=new gt(m.baseVersion)),t.addOperation(m),n.applyOperation(m),o.history.setOperationAsUndone(a,m)}}}}function N3(i){i.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let e=1;e<i.length;e++){const t=i[e-1].getJoined(i[e],!0);t&&(e--,i.splice(e,2,t))}}function L3(i,e){return e.some(t=>t!==i&&t.containsRange(i,!0))}class P3 extends PA{execute(e=null){const t=e?this._stack.findIndex(r=>r.batch==e):this._stack.length-1,n=this._stack.splice(t,1)[0],o=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);const r=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,r)}),this.fire("revert",n.batch,o),this.refresh()}}class z3 extends PA{execute(){const e=this._stack.pop(),t=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(t,()=>{const n=e.batch.operations[e.batch.operations.length-1].baseVersion+1,o=this.editor.model.document.history.getOperations(n);this._restoreSelection(e.selection.ranges,e.selection.isBackward,o),this._undo(e.batch,t)}),this.refresh()}}class O3 extends W{constructor(){super(...arguments),this._batchRegistry=new WeakSet}static get pluginName(){return"UndoEditing"}init(){const e=this.editor;this._undoCommand=new P3(e),this._redoCommand=new z3(e),e.commands.add("undo",this._undoCommand),e.commands.add("redo",this._redoCommand),this.listenTo(e.model,"applyOperation",(t,n)=>{const o=n[0];if(!o.isDocumentOperation)return;const r=o.batch,a=this._redoCommand.createdBatches.has(r),c=this._undoCommand.createdBatches.has(r);this._batchRegistry.has(r)||(this._batchRegistry.add(r),r.isUndoable&&(a?this._undoCommand.addBatch(r):c||(this._undoCommand.addBatch(r),this._redoCommand.clearStack())))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,n,o)=>{this._redoCommand.addBatch(o)}),e.keystrokes.set("CTRL+Z","undo"),e.keystrokes.set("CTRL+Y","redo"),e.keystrokes.set("CTRL+SHIFT+Z","redo")}}const zA='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',OA='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class R3 extends W{static get pluginName(){return"UndoUI"}init(){const e=this.editor,t=e.locale,n=e.t,o=t.uiLanguageDirection=="ltr"?zA:OA,r=t.uiLanguageDirection=="ltr"?OA:zA;this._addButton("undo",n("Undo"),"CTRL+Z",o),this._addButton("redo",n("Redo"),"CTRL+Y",r)}_addButton(e,t,n,o){const r=this.editor;r.ui.componentFactory.add(e,a=>{const c=r.commands.get(e),d=new be(a);return d.set({label:t,icon:o,keystroke:n,tooltip:!0}),d.bind("isEnabled").to(c,"isEnabled"),this.listenTo(d,"execute",()=>{r.execute(e),r.editing.view.focus()}),d})}}class RA extends W{static get requires(){return[O3,R3]}static get pluginName(){return"Undo"}}var jA=f(6603),j3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(jA.Z,j3),jA.Z.locals;var FA=f(3403),F3={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};oe()(FA.Z,F3),FA.Z.locals;class V3 extends ae{constructor(e){super(e);const t=e.t;this.set("matchCount",0),this.set("highlightOffset",0),this.set("isDirty",!1),this.set("_areCommandsEnabled",{}),this.set("_resultsCounterText",""),this.set("_matchCase",!1),this.set("_wholeWordsOnly",!1),this.bind("_searchResultsFound").to(this,"matchCount",this,"isDirty",(n,o)=>n>0&&!o),this._findInputView=this._createInputField(t("Find in text…")),this._replaceInputView=this._createInputField(t("Replace with…")),this._findButtonView=this._createButton({label:t("Find"),class:"ck-button-find ck-button-action",withText:!0}),this._findPrevButtonView=this._createButton({label:t("Previous result"),class:"ck-button-prev",icon:Wm,keystroke:"Shift+F3",tooltip:!0}),this._findNextButtonView=this._createButton({label:t("Next result"),class:"ck-button-next",icon:Wm,keystroke:"F3",tooltip:!0}),this._optionsDropdown=this._createOptionsDropdown(),this._replaceButtonView=this._createButton({label:t("Replace"),class:"ck-button-replace",withText:!0}),this._replaceAllButtonView=this._createButton({label:t("Replace all"),class:"ck-button-replaceall",withText:!0}),this._findFieldsetView=this._createFindFieldset(),this._replaceFieldsetView=this._createReplaceFieldset(),this._focusTracker=new ct,this._keystrokes=new kt,this._focusables=new Sn,this._focusCycler=new Fn({focusables:this._focusables,focusTracker:this._focusTracker,keystrokeHandler:this._keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-find-and-replace-form"],tabindex:"-1"},children:[new E0(e,{label:t("Find and replace")}),this._findFieldsetView,this._replaceFieldsetView]})}render(){super.render(),b({view:this}),this._initFocusCycling(),this._initKeystrokeHandling()}destroy(){super.destroy(),this._focusTracker.destroy(),this._keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}reset(){this._findInputView.errorText=null,this.isDirty=!0}get _textToFind(){return this._findInputView.fieldView.element.value}get _textToReplace(){return this._replaceInputView.fieldView.element.value}_createFindFieldset(){const e=this.locale,t=new ae(e);return this._findInputView.fieldView.on("input",()=>{this.isDirty=!0}),this._findButtonView.on("execute",this._onFindButtonExecute.bind(this)),this._findPrevButtonView.delegate("execute").to(this,"findPrevious"),this._findNextButtonView.delegate("execute").to(this,"findNext"),this._findPrevButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",({findPrevious:n})=>n),this._findNextButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",({findNext:n})=>n),this._injectFindResultsCounter(),t.setTemplate({tag:"fieldset",attributes:{class:["ck","ck-find-and-replace-form__find"]},children:[this._findInputView,this._findButtonView,this._findPrevButtonView,this._findNextButtonView]}),t}_onFindButtonExecute(){if(this._textToFind)this.isDirty=!1,this.fire("findNext",{searchText:this._textToFind,matchCase:this._matchCase,wholeWords:this._wholeWordsOnly});else{const e=this.t;this._findInputView.errorText=e("Text to find must not be empty.")}}_injectFindResultsCounter(){const e=this.locale,t=e.t,n=this.bindTemplate,o=new ae(this.locale);this.bind("_resultsCounterText").to(this,"highlightOffset",this,"matchCount",(a,c)=>t("%0 of %1",[a,c])),o.setTemplate({tag:"span",attributes:{class:["ck","ck-results-counter",n.if("isDirty","ck-hidden")]},children:[{text:n.to("_resultsCounterText")}]});const r=()=>{const a=this._findInputView.fieldView.element;if(!a||!gi(a))return;const c=new Me(o.element).width,d=e.uiLanguageDirection==="ltr"?"paddingRight":"paddingLeft";a.style[d]=c?`calc( 2 * var(--ck-spacing-standard) + ${c}px )`:""};this.on("change:_resultsCounterText",r,{priority:"low"}),this.on("change:isDirty",r,{priority:"low"}),this._findInputView.template.children[0].children.push(o)}_createReplaceFieldset(){const e=this.locale.t,t=new ae(this.locale);return this._replaceButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replace:n},o)=>n&&o),this._replaceAllButtonView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replaceAll:n},o)=>n&&o),this._replaceInputView.bind("isEnabled").to(this,"_areCommandsEnabled",this,"_searchResultsFound",({replace:n},o)=>n&&o),this._replaceInputView.bind("infoText").to(this._replaceInputView,"isEnabled",this._replaceInputView,"isFocused",(n,o)=>n||!o?"":e("Tip: Find some text first in order to replace it.")),this._replaceButtonView.on("execute",()=>{this.fire("replace",{searchText:this._textToFind,replaceText:this._textToReplace})}),this._replaceAllButtonView.on("execute",()=>{this.fire("replaceAll",{searchText:this._textToFind,replaceText:this._textToReplace}),this.focus()}),t.setTemplate({tag:"fieldset",attributes:{class:["ck","ck-find-and-replace-form__replace"]},children:[this._replaceInputView,this._optionsDropdown,this._replaceButtonView,this._replaceAllButtonView]}),t}_createOptionsDropdown(){const e=this.locale.t,t=bt(this.locale);t.class="ck-options-dropdown",t.buttonView.set({withText:!1,label:e("Show options"),icon:Ve.cog,tooltip:!0});const n=new gr({withText:!0,label:e("Match case"),_isMatchCaseSwitch:!0}),o=new gr({withText:!0,label:e("Whole words only")});return n.bind("isOn").to(this,"_matchCase"),o.bind("isOn").to(this,"_wholeWordsOnly"),t.on("execute",r=>{r.source._isMatchCaseSwitch?this._matchCase=!this._matchCase:this._wholeWordsOnly=!this._wholeWordsOnly,this.isDirty=!0}),gs(t,new ft([{type:"switchbutton",model:n},{type:"switchbutton",model:o}])),t}_initFocusCycling(){[this._findInputView,this._findButtonView,this._findPrevButtonView,this._findNextButtonView,this._replaceInputView,this._optionsDropdown,this._replaceButtonView,this._replaceAllButtonView].forEach(e=>{this._focusables.add(e),this._focusTracker.add(e.element)})}_initKeystrokeHandling(){const e=n=>n.stopPropagation(),t=n=>{n.stopPropagation(),n.preventDefault()};this._keystrokes.listenTo(this.element),this._keystrokes.set("f3",n=>{t(n),this._findNextButtonView.fire("execute")}),this._keystrokes.set("shift+f3",n=>{t(n),this._findPrevButtonView.fire("execute")}),this._keystrokes.set("enter",n=>{const o=n.target;o===this._findInputView.fieldView.element?(this._areCommandsEnabled.findNext?this._findNextButtonView.fire("execute"):this._findButtonView.fire("execute"),t(n)):o!==this._replaceInputView.fieldView.element||this.isDirty||(this._replaceButtonView.fire("execute"),t(n))}),this._keystrokes.set("shift+enter",n=>{n.target===this._findInputView.fieldView.element&&(this._areCommandsEnabled.findPrevious?this._findPrevButtonView.fire("execute"):this._findButtonView.fire("execute"),t(n))}),this._keystrokes.set("arrowright",e),this._keystrokes.set("arrowleft",e),this._keystrokes.set("arrowup",e),this._keystrokes.set("arrowdown",e)}_createButton(e){const t=new be(this.locale);return t.set(e),t}_createInputField(e){const t=new ss(this.locale,Ka);return t.label=e,t}}class H3 extends W{static get pluginName(){return"FindAndReplaceUI"}constructor(e){super(e),this.formView=null}init(){const e=this.editor;e.ui.componentFactory.add("findAndReplace",t=>{const n=bt(t),o=e.commands.get("find");return n.bind("isEnabled").to(o),n.once("change:isOpen",()=>{this.formView=new(y(V3))(e.locale),n.panelView.children.add(this.formView),this._setupFormView(this.formView)}),n.on("change:isOpen",(r,a,c)=>{c?(this.formView.disableCssTransitions(),this.formView.reset(),this.formView._findInputView.fieldView.select(),this.formView.enableCssTransitions()):this.fire("searchReseted")},{priority:"low"}),this._setupDropdownButton(n),n})}_setupDropdownButton(e){const t=this.editor,n=t.locale.t;e.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.87 13.786 1.532-1.286 3.857 4.596a1 1 0 1 1-1.532 1.286l-3.857-4.596z"/><path d="M16.004 8.5a6.5 6.5 0 0 1-9.216 5.905c-1.154-.53-.863-1.415-.663-1.615.194-.194.564-.592 1.635-.141a4.5 4.5 0 0 0 5.89-5.904l-.104-.227 1.332-1.331c.045-.046.196-.041.224.007a6.47 6.47 0 0 1 .902 3.306zm-3.4-5.715c.562.305.742 1.106.354 1.494-.388.388-.995.414-1.476.178a4.5 4.5 0 0 0-6.086 5.882l.114.236-1.348 1.349c-.038.037-.17.022-.198-.023a6.5 6.5 0 0 1 5.54-9.9 6.469 6.469 0 0 1 3.1.784z"/><path d="M4.001 11.93.948 8.877a.2.2 0 0 1 .141-.341h6.106a.2.2 0 0 1 .141.341L4.283 11.93a.2.2 0 0 1-.282 0zm11.083-6.789 3.053 3.053a.2.2 0 0 1-.14.342H11.89a.2.2 0 0 1-.14-.342l3.052-3.053a.2.2 0 0 1 .282 0z"/></svg>',label:n("Find and replace"),keystroke:"CTRL+F",tooltip:!0}),t.keystrokes.set("Ctrl+F",(o,r)=>{e.isEnabled&&(e.isOpen=!0,r())})}_setupFormView(e){const t=this.editor.commands,n=this.editor.plugins.get("FindAndReplaceEditing").state,o={before:-1,same:0,after:1,different:1};e.bind("highlightOffset").to(n,"highlightedResult",h=>h?Array.from(n.results).sort((m,g)=>o[m.marker.getStart().compareWith(g.marker.getStart())]).indexOf(h)+1:0),e.listenTo(n.results,"change",()=>{e.matchCount=n.results.length});const r=t.get("findNext"),a=t.get("findPrevious"),c=t.get("replace"),d=t.get("replaceAll");e.bind("_areCommandsEnabled").to(r,"isEnabled",a,"isEnabled",c,"isEnabled",d,"isEnabled",(h,m,g,k)=>({findNext:h,findPrevious:m,replace:g,replaceAll:k})),e.delegate("findNext","findPrevious","replace","replaceAll").to(this),e.on("change:isDirty",(h,m,g)=>{g&&this.fire("searchReseted")})}}class U3 extends ue{constructor(e,t){super(e),this.isEnabled=!0,this.affectsData=!1,this._state=t}execute(e,{matchCase:t,wholeWords:n}={}){const{editor:o}=this,{model:r}=o,a=o.plugins.get("FindAndReplaceUtils");let c;typeof e=="string"?(c=a.findByTextCallback(e,{matchCase:t,wholeWords:n}),this._state.searchText=e):c=e;const d=r.document.getRootNames().reduce((h,m)=>a.updateFindResultFromRange(r.createRangeIn(r.document.getRoot(m)),r,c,h),null);return this._state.clear(r),this._state.results.addMany(d),this._state.highlightedResult=d.get(0),typeof e=="string"&&(this._state.searchText=e),this._state.matchCase=!!t,this._state.matchWholeWords=!!n,{results:d,findCallback:c}}}class VA extends ue{constructor(e,t){super(e),this.isEnabled=!0,this._state=t,this._isEnabledBasedOnSelection=!1}_replace(e,t){const{model:n}=this.editor,o=t.marker.getRange();n.canEditAt(o)&&n.change(r=>{if(o.root.rootName==="$graveyard")return void this._state.results.remove(t);let a={};for(const c of o.getItems())if(c.is("$text")||c.is("$textProxy")){a=c.getAttributes();break}n.insertContent(r.createText(e,a),o),this._state.results.has(t)&&this._state.results.remove(t)})}}class G3 extends VA{execute(e,t){this._replace(e,t)}}class W3 extends VA{execute(e,t){const{editor:n}=this,{model:o}=n,r=n.plugins.get("FindAndReplaceUtils"),a=t instanceof ft?t:o.document.getRootNames().reduce((c,d)=>r.updateFindResultFromRange(o.createRangeIn(o.document.getRoot(d)),o,r.findByTextCallback(t,this._state),c),null);a.length&&o.change(()=>{[...a].forEach(c=>{this._replace(e,c)})})}}class HA extends ue{constructor(e,t){super(e),this.affectsData=!1,this._state=t,this.isEnabled=!1,this.listenTo(this._state.results,"change",()=>{this.isEnabled=this._state.results.length>1})}refresh(){this.isEnabled=this._state.results.length>1}execute(){const e=this._state.results,t=e.getIndex(this._state.highlightedResult),n=t+1>=e.length?0:t+1;this._state.highlightedResult=this._state.results.get(n)}}class q3 extends HA{execute(){const e=this._state.results.getIndex(this._state.highlightedResult),t=e-1<0?this._state.results.length-1:e-1;this._state.highlightedResult=this._state.results.get(t)}}class $3 extends De(){constructor(e){super(),this.set("results",new ft),this.set("highlightedResult",null),this.set("searchText",""),this.set("replaceText",""),this.set("matchCase",!1),this.set("matchWholeWords",!1),this.results.on("change",(t,{removed:n,index:o})=>{if(Array.from(n).length){let r=!1;if(e.change(a=>{for(const c of n)this.highlightedResult===c&&(r=!0),e.markers.has(c.marker.name)&&a.removeMarker(c.marker)}),r){const a=o>=this.results.length?0:o;this.highlightedResult=this.results.get(a)}}})}clear(e){this.searchText="",e.change(t=>{if(this.highlightedResult){const n=this.highlightedResult.marker.name.split(":")[1],o=e.markers.get(`findResultHighlighted:${n}`);o&&t.removeMarker(o)}[...this.results].forEach(({marker:n})=>{t.removeMarker(n)})}),this.results.clear()}}class K3 extends W{static get pluginName(){return"FindAndReplaceUtils"}updateFindResultFromRange(e,t,n,o){const r=o||new ft;return t.change(a=>{[...e].forEach(({type:c,item:d})=>{if(c==="elementStart"&&t.schema.checkChild(d,"$text")){const h=n({item:d,text:this.rangeToText(t.createRangeIn(d))});if(!h)return;h.forEach(m=>{const g=`findResult:${Q()}`,k=a.addMarker(g,{usingOperation:!1,affectsData:!1,range:a.createRange(a.createPositionAt(d,m.start),a.createPositionAt(d,m.end))}),w=function(_,x){const I=_.find(({marker:L})=>x.getStart().isBefore(L.getStart()));return I?_.getIndex(I):_.length}(r,k);r.add({id:g,label:m.label,marker:k},w)})}})}),r}rangeToText(e){return Array.from(e.getItems()).reduce((t,n)=>n.is("$text")||n.is("$textProxy")?t+n.data:`${t}
`),t+=r,n=o}return t}class Rg extends cd{}Rg.builtinPlugins=[class extends W{static get requires(){return[y4,x4]}static get pluginName(){return"Alignment"}},Lv,class extends W{static get requires(){return[Oo]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const i=this.editor.commands;i.get("bulletedList")&&Ai(this.editor,this,/^[*-]\s$/,"bulletedList"),i.get("numberedList")&&Ai(this.editor,this,/^1[.|)]\s$/,"numberedList"),i.get("todoList")&&Ai(this.editor,this,/^\[\s?\]\s$/,"todoList"),i.get("checkTodoList")&&Ai(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const i=this.editor.commands;if(i.get("bold")){const e=gd(this.editor,"bold");ws(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,e),ws(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,e)}if(i.get("italic")){const e=gd(this.editor,"italic");ws(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,e),ws(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,e)}if(i.get("code")){const e=gd(this.editor,"code");ws(this.editor,this,/(`)([^`]+)(`)$/g,e)}if(i.get("strikethrough")){const e=gd(this.editor,"strikethrough");ws(this.editor,this,/(~~)([^~]+)(~~)$/g,e)}}_addHeadingAutoformats(){const i=this.editor.commands.get("heading");i&&i.modelElements.filter(e=>e.match(/^heading[1-6]$/)).forEach(e=>{const t=e[7],n=new RegExp(`^(#{${t}})\\s$`);Ai(this.editor,this,n,()=>{if(!i.isEnabled||i.value===e)return!1;this.editor.execute("heading",{value:e})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&Ai(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){const i=this.editor,e=i.model.document.selection;i.commands.get("codeBlock")&&Ai(i,this,/^```$/,()=>{if(e.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&Ai(this.editor,this,/^---$/,"horizontalLine")}},class extends W{static get requires(){return[q4,K4]}static get pluginName(){return"BlockQuote"}},class extends W{static get requires(){return[L4,P4]}static get pluginName(){return"Bold"}},class extends W{static get pluginName(){return"CKBox"}static get requires(){return[og,Q4]}},class extends Rc{constructor(){super(...arguments),this.token=null,this._tokens=new Map}static get pluginName(){return"CloudServices"}static get requires(){return[d3]}async init(){const i=this.context.config.get("cloudServices")||{};for(const[t,n]of Object.entries(i))this[t]=n;if(!this.tokenUrl)return void(this.token=null);const e=this.context.plugins.get("CloudServicesCore");this.token=await e.createToken(this.tokenUrl).init(),this._tokens.set(this.tokenUrl,this.token)}async registerTokenUrl(i){if(this._tokens.has(i))return this.getTokenFor(i);const e=this.context.plugins.get("CloudServicesCore"),t=await e.createToken(i).init();return this._tokens.set(i,t),t}getTokenFor(i){const e=this._tokens.get(i);if(!e)throw new N("cloudservices-token-not-registered",this);return e}destroy(){super.destroy();for(const i of this._tokens.values())i.destroy()}},class extends W{static get requires(){return[NA,Xa,B3,G4,$0,RA]}static get pluginName(){return"Essentials"}},class extends W{static get requires(){return[Y3,H3]}static get pluginName(){return"FindAndReplace"}init(){const i=this.editor.plugins.get("FindAndReplaceUI"),e=this.editor.plugins.get("FindAndReplaceEditing"),t=e.state;i.on("findNext",(n,o)=>{o?(t.searchText=o.searchText,this.editor.execute("find",o.searchText,o)):this.editor.execute("findNext")}),i.on("findPrevious",(n,o)=>{o&&t.searchText!==o.searchText?this.editor.execute("find",o.searchText):this.editor.execute("findPrevious")}),i.on("replace",(n,o)=>{t.searchText!==o.searchText&&this.editor.execute("find",o.searchText);const r=t.highlightedResult;r&&this.editor.execute("replace",o.replaceText,r)}),i.on("replaceAll",(n,o)=>{t.searchText!==o.searchText&&this.editor.execute("find",o.searchText),this.editor.execute("replaceAll",o.replaceText,t.results)}),i.on("searchReseted",()=>{t.clear(this.editor.model),e.stop()})}},class extends W{static get requires(){return[uT,hT]}static get pluginName(){return"FontBackgroundColor"}},class extends W{static get requires(){return[lT,cT]}static get pluginName(){return"FontColor"}},class extends W{static get requires(){return[tT,nT]}static get pluginName(){return"FontFamily"}},class extends W{static get requires(){return[iT,sT]}static get pluginName(){return"FontSize"}normalizeSizeOptions(i){return cg(i)}},class extends W{static get pluginName(){return"GeneralHtmlSupport"}static get requires(){return[ut,fI,kI,bI,wI,AI,CI,vI,_I,yI,xI]}init(){const i=this.editor,e=i.plugins.get(ut);e.loadAllowedEmptyElementsConfig(i.config.get("htmlSupport.allowEmpty")||[]),e.loadAllowedConfig(i.config.get("htmlSupport.allow")||[]),e.loadDisallowedConfig(i.config.get("htmlSupport.disallow")||[])}getGhsAttributeNameForElement(i){const e=this.editor.plugins.get("DataSchema"),t=Array.from(e.getDefinitionsForView(i,!1)),n=t.find(o=>o.isInline&&!t[0].isObject);return n?n.model:In(i)}addModelHtmlClass(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"classes",c=>{for(const d of et(e))c.add(d)})})}removeModelHtmlClass(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"classes",c=>{for(const d of et(e))c.delete(d)})})}setModelHtmlAttributes(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"attributes",c=>{for(const[d,h]of Object.entries(e))c.set(d,h)})})}removeModelHtmlAttributes(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"attributes",c=>{for(const d of et(e))c.delete(d)})})}setModelHtmlStyles(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"styles",c=>{for(const[d,h]of Object.entries(e))c.set(d,h)})})}removeModelHtmlStyles(i,e,t){const n=this.editor.model,o=this.getGhsAttributeNameForElement(i);n.change(r=>{for(const a of Es(n,t,o))ys(r,a,o,"styles",c=>{for(const d of et(e))c.delete(d)})})}},class extends W{static get requires(){return[fT,bT]}static get pluginName(){return"Heading"}},class extends W{static get requires(){return[AT,vT]}static get pluginName(){return"Highlight"}},class extends W{static get requires(){return[xT,ET,br]}static get pluginName(){return"HorizontalLine"}},class extends W{static get requires(){return[PI,OI]}static get pluginName(){return"Image"}},class extends W{static get requires(){return[jI,FI]}static get pluginName(){return"ImageCaption"}},class extends W{static get requires(){return[pv,oM]}static get pluginName(){return"ImageStyle"}},class extends W{static get requires(){return[kd,Wn]}static get pluginName(){return"ImageToolbar"}afterInit(){const i=this.editor,e=i.t,t=i.plugins.get(kd),n=i.plugins.get("ImageUtils");var o;t.register("image",{ariaLabel:e("Image toolbar"),items:(o=i.config.get("image.toolbar")||[],o.map(r=>je(r)?r.name:r)),getRelatedElement:r=>n.getClosestSelectedImageWidget(r)})}},class extends W{static get pluginName(){return"ImageUpload"}static get requires(){return[QI,UI,$I]}},class extends W{static get pluginName(){return"Indent"}static get requires(){return[iM,rM]}},class extends W{constructor(i){super(i),i.config.define("indentBlock",{offset:40,unit:"px"})}static get pluginName(){return"IndentBlock"}init(){const i=this.editor,e=i.config.get("indentBlock");e.classes&&e.classes.length?(this._setupConversionUsingClasses(e.classes),i.commands.add("indentBlock",new _d(i,new _v({direction:"forward",classes:e.classes}))),i.commands.add("outdentBlock",new _d(i,new _v({direction:"backward",classes:e.classes})))):(i.data.addStyleProcessorRules(mS),this._setupConversionUsingOffset(),i.commands.add("indentBlock",new _d(i,new vv({direction:"forward",offset:e.offset,unit:e.unit}))),i.commands.add("outdentBlock",new _d(i,new vv({direction:"backward",offset:e.offset,unit:e.unit}))))}afterInit(){const i=this.editor,e=i.model.schema,t=i.commands.get("indent"),n=i.commands.get("outdent"),o=i.config.get("heading.options");(o&&o.map(r=>r.model)||sM).forEach(r=>{e.isRegistered(r)&&e.extend(r,{allowAttributes:"blockIndent"})}),e.setAttributeProperties("blockIndent",{isFormatting:!0}),t.registerChildCommand(i.commands.get("indentBlock")),n.registerChildCommand(i.commands.get("outdentBlock"))}_setupConversionUsingOffset(){const i=this.editor.conversion,e=this.editor.locale.contentLanguageDirection==="rtl"?"margin-right":"margin-left";i.for("upcast").attributeToAttribute({view:{styles:{[e]:/[\s\S]+/}},model:{key:"blockIndent",value:t=>{if(!t.is("element","li"))return t.getStyle(e)}}}),i.for("downcast").attributeToAttribute({model:"blockIndent",view:t=>({key:"style",value:{[e]:t}})})}_setupConversionUsingClasses(i){const e={model:{key:"blockIndent",values:[]},view:{}};for(const t of i)e.model.values.push(t),e.view[t]={key:"class",value:[t]};this.editor.conversion.attributeToAttribute(e)}},class extends W{static get requires(){return[O4,R4]}static get pluginName(){return"Italic"}},class extends W{static get requires(){return[kM,vM,Lv]}static get pluginName(){return"Link"}},class extends W{static get requires(){return[i_,MM]}static get pluginName(){return"List"}},class extends W{static get requires(){return[ZM,RM]}static get pluginName(){return"ListProperties"}},class extends W{static get requires(){return[Dd,lB,rB,br]}static get pluginName(){return"MediaEmbed"}},el,class extends W{static get pluginName(){return"PasteFromOffice"}static get requires(){return[fo]}init(){const i=this.editor,e=i.plugins.get("ClipboardPipeline"),t=i.editing.view.document,n=[];n.push(new kB(t)),n.push(new wB(t)),n.push(new CB(t)),e.on("inputTransformation",(o,r)=>{if(r._isTransformedWithPasteFromOffice||i.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const a=r.dataTransfer.getData("text/html"),c=n.find(d=>d.isActive(a));c&&(r._parsedData||(r._parsedData=vB(a,t.stylesProcessor)),c.execute(r),r._isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends W{static get requires(){return[kg,Wn]}static get pluginName(){return"PictureEditing"}afterInit(){const i=this.editor;i.plugins.has("ImageBlockEditing")&&i.model.schema.extend("imageBlock",{allowAttributes:["sources"]}),i.plugins.has("ImageInlineEditing")&&i.model.schema.extend("imageInline",{allowAttributes:["sources"]}),this._setupConversion(),this._setupImageUploadEditingIntegration()}_setupConversion(){const i=this.editor,e=i.conversion,t=i.plugins.get("ImageUtils");e.for("upcast").add(function(n){const o=["srcset","media","type","sizes"],r=(a,c,d)=>{const h=c.viewItem;if(!d.consumable.test(h,{name:!0}))return;const m=new Map;for(const w of h.getChildren())if(w.is("element","source")){const _={};for(const x of o)w.hasAttribute(x)&&d.consumable.test(w,{attributes:x})&&(_[x]=w.getAttribute(x));Object.keys(_).length&&m.set(w,_)}const g=n.findViewImgElement(h);if(!g)return;let k=c.modelCursor.parent;if(!k.is("element","imageBlock")){const w=d.convertItem(g,c.modelCursor);c.modelRange=w.modelRange,c.modelCursor=w.modelCursor,k=qe(w.modelRange.getItems())}d.consumable.consume(h,{name:!0});for(const[w,_]of m)d.consumable.consume(w,{attributes:Object.keys(_)});m.size&&d.writer.setAttribute("sources",Array.from(m.values()),k),d.convertChildren(h,k)};return a=>{a.on("element:picture",r)}}(t)),e.for("downcast").add(function(n){const o=(r,a,c)=>{if(!c.consumable.consume(a.item,r.name))return;const d=c.writer,h=c.mapper.toViewElement(a.item),m=n.findViewImgElement(h),g=a.attributeNewValue;if(g&&g.length){const k=d.createContainerElement("picture",null,g.map(x=>d.createEmptyElement("source",x))),w=[];let _=m.parent;for(;_&&_.is("attributeElement");){const x=_.parent;d.unwrap(d.createRangeOn(m),_),w.unshift(_),_=x}d.insert(d.createPositionBefore(m),k),d.move(d.createRangeOn(m),d.createPositionAt(k,"end"));for(const x of w)d.wrap(d.createRangeOn(k),x)}else if(m.parent.is("element","picture")){const k=m.parent;d.move(d.createRangeOn(m),d.createPositionBefore(k)),d.remove(k)}};return r=>{r.on("attribute:sources:imageBlock",o),r.on("attribute:sources:imageInline",o)}}(t))}_setupImageUploadEditingIntegration(){const i=this.editor;if(!i.plugins.has("ImageUploadEditing"))return;const e=i.plugins.get("ImageUploadEditing");this.listenTo(e,"uploadComplete",(t,{imageElement:n,data:o})=>{const r=o.sources;r&&i.model.change(a=>{a.setAttributes({sources:r},n)})})}},class extends W{static get requires(){return[xB,_B]}static get pluginName(){return"RemoveFormat"}},class extends W{static get requires(){return[$0]}static get pluginName(){return"SpecialCharacters"}constructor(i){super(i);const e=i.t;this._characters=new Map,this._groups=new Map,this._allSpecialCharactersGroupLabel=e("All")}init(){const i=this.editor,e=i.t,t=i.commands.get("insertText");i.ui.componentFactory.add("specialCharacters",n=>{const o=bt(n);let r;return o.buttonView.set({label:e("Special characters"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.47 7.47 0 0 1 4.231 1.31 7.268 7.268 0 0 1 2.703 3.454 7.128 7.128 0 0 1 .199 4.353c-.39 1.436-1.475 2.72-2.633 3.677h2.013c0-.226.092-.443.254-.603a.876.876 0 0 1 1.229 0c.163.16.254.377.254.603v.853c0 .209-.078.41-.22.567a.873.873 0 0 1-.547.28l-.101.006h-4.695a.517.517 0 0 1-.516-.518v-1.265c0-.21.128-.398.317-.489a5.601 5.601 0 0 0 2.492-2.371 5.459 5.459 0 0 0 .552-3.693 5.53 5.53 0 0 0-1.955-3.2A5.71 5.71 0 0 0 10 4.206 5.708 5.708 0 0 0 6.419 5.46 5.527 5.527 0 0 0 4.46 8.663a5.457 5.457 0 0 0 .554 3.695 5.6 5.6 0 0 0 2.497 2.37.55.55 0 0 1 .317.49v1.264c0 .286-.23.518-.516.518H2.618a.877.877 0 0 1-.614-.25.845.845 0 0 1-.254-.603v-.853c0-.226.091-.443.254-.603a.876.876 0 0 1 1.228 0c.163.16.255.377.255.603h1.925c-1.158-.958-2.155-2.241-2.545-3.678a7.128 7.128 0 0 1 .199-4.352 7.268 7.268 0 0 1 2.703-3.455A7.475 7.475 0 0 1 10 2.5z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(t),o.on("execute",(a,c)=>{i.execute("insertText",{text:c.character}),i.editing.view.focus()}),o.on("change:isOpen",()=>{if(!r){r=this._createDropdownPanelContent(n,o);const a=new BB(n,r.navigationView,r.gridView,r.infoView);o.panelView.children.add(a)}r.infoView.set({character:null,name:null})}),o})}addItems(i,e,t={label:i}){if(i===Tg)throw new N("special-character-invalid-group-name",null);const n=this._getGroup(i,t.label);for(const o of e)n.items.add(o.title),this._characters.set(o.title,o.character)}getGroups(){const i=Array.from(this._groups.keys()),e=this.editor.config.get("specialCharacters.order")||[],t=e.find(n=>!i.includes(n));if(t)throw new N("special-character-invalid-order-group-name",null,{invalidGroup:t});return new Set([...e,...i])}getCharactersForGroup(i){if(i===Tg)return new Set(this._characters.keys());const e=this._groups.get(i);return e?e.items:void 0}getCharacter(i){return this._characters.get(i)}_getGroup(i,e){return this._groups.has(i)||this._groups.set(i,{items:new Set,label:e}),this._groups.get(i)}_updateGrid(i,e){e.tiles.clear();const t=this.getCharactersForGroup(i);for(const n of t){const o=this.getCharacter(n);e.tiles.add(e.createTile(o,n))}}_createDropdownPanelContent(i,e){const t=Array.from(this.getGroups()).map(c=>[c,this._groups.get(c).label]),n=new Map([[Tg,this._allSpecialCharactersGroupLabel],...t]),o=new EB(i,n),r=new SB(i),a=new IB(i);return r.delegate("execute").to(e),r.on("tileHover",(c,d)=>{a.set(d)}),r.on("tileFocus",(c,d)=>{a.set(d)}),o.on("execute",()=>{this._updateGrid(o.currentGroupName,r)}),this._updateGrid(o.currentGroupName,r),{navigationView:o,gridView:r,infoView:a}}},class extends W{static get pluginName(){return"SpecialCharactersArrows"}init(){const i=this.editor,e=i.t;i.plugins.get("SpecialCharacters").addItems("Arrows",[{title:e("leftwards simple arrow"),character:"←"},{title:e("rightwards simple arrow"),character:"→"},{title:e("upwards simple arrow"),character:"↑"},{title:e("downwards simple arrow"),character:"↓"},{title:e("leftwards double arrow"),character:"⇐"},{title:e("rightwards double arrow"),character:"⇒"},{title:e("upwards double arrow"),character:"⇑"},{title:e("downwards double arrow"),character:"⇓"},{title:e("leftwards dashed arrow"),character:"⇠"},{title:e("rightwards dashed arrow"),character:"⇢"},{title:e("upwards dashed arrow"),character:"⇡"},{title:e("downwards dashed arrow"),character:"⇣"},{title:e("leftwards arrow to bar"),character:"⇤"},{title:e("rightwards arrow to bar"),character:"⇥"},{title:e("upwards arrow to bar"),character:"⤒"},{title:e("downwards arrow to bar"),character:"⤓"},{title:e("up down arrow with base"),character:"↨"},{title:e("back with leftwards arrow above"),character:"🔙"},{title:e("end with leftwards arrow above"),character:"🔚"},{title:e("on with exclamation mark with left right arrow above"),character:"🔛"},{title:e("soon with rightwards arrow above"),character:"🔜"},{title:e("top with upwards arrow above"),character:"🔝"}],{label:e("Arrows")})}},class extends W{static get pluginName(){return"SpecialCharactersText"}init(){const i=this.editor,e=i.t;i.plugins.get("SpecialCharacters").addItems("Text",[{character:"‹",title:e("Single left-pointing angle quotation mark")},{character:"›",title:e("Single right-pointing angle quotation mark")},{character:"«",title:e("Left-pointing double angle quotation mark")},{character:"»",title:e("Right-pointing double angle quotation mark")},{character:"‘",title:e("Left single quotation mark")},{character:"’",title:e("Right single quotation mark")},{character:"“",title:e("Left double quotation mark")},{character:"”",title:e("Right double quotation mark")},{character:"‚",title:e("Single low-9 quotation mark")},{character:"„",title:e("Double low-9 quotation mark")},{character:"¡",title:e("Inverted exclamation mark")},{character:"¿",title:e("Inverted question mark")},{character:"‥",title:e("Two dot leader")},{character:"…",title:e("Horizontal ellipsis")},{character:"‡",title:e("Double dagger")},{character:"‰",title:e("Per mille sign")},{character:"‱",title:e("Per ten thousand sign")},{character:"‼",title:e("Double exclamation mark")},{character:"⁈",title:e("Question exclamation mark")},{character:"⁉",title:e("Exclamation question mark")},{character:"⁇",title:e("Double question mark")},{character:"©",title:e("Copyright sign")},{character:"®",title:e("Registered sign")},{character:"™",title:e("Trade mark sign")},{character:"§",title:e("Section sign")},{character:"¶",title:e("Paragraph sign")},{character:"⁋",title:e("Reversed paragraph sign")}],{label:e("Text")})}},class extends W{static get pluginName(){return"Style"}static get requires(){return[KB,HB]}},class extends W{static get requires(){return[wN,vN,Cr,SN,EN,xN,br]}static get pluginName(){return"Table"}},class extends W{static get requires(){return[kd]}static get pluginName(){return"TableToolbar"}afterInit(){const i=this.editor,e=i.t,t=i.plugins.get(kd),n=i.config.get("table.contentToolbar"),o=i.config.get("table.tableToolbar");n&&t.register("tableContent",{ariaLabel:e("Table toolbar"),items:n,getRelatedElement:MN}),o&&t.register("table",{ariaLabel:e("Table toolbar"),items:o,getRelatedElement:IN})}},class extends W{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(i){super(i),i.config.define("typing",{transformations:{include:I4}})}init(){const i=this.editor.model.document.selection;i.on("change:range",()=>{this.isEnabled=!i.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const i=this.editor,e=i.model,t=i.plugins.get("Delete"),n=function(r){const a=r.extra||[],c=r.remove||[],d=h=>!c.includes(h);return function(h){const m=new Set;for(const g of h)if(typeof g=="string"&&eA[g])for(const k of eA[g])m.add(k);else m.add(g);return Array.from(m)}(r.include.concat(a).filter(d)).filter(d).map(h=>typeof h=="string"&&X0[h]?X0[h]:h).filter(h=>typeof h=="object").map(h=>({from:M4(h.from),to:B4(h.to)}))}(i.config.get("typing.transformations")),o=new Q0(i.model,r=>{for(const a of n)if(a.from.test(r))return{normalizedTransformation:a}});o.on("matched:data",(r,a)=>{if(!a.batch.isTyping)return;const{from:c,to:d}=a.normalizedTransformation,h=c.exec(a.text),m=d(h.slice(1)),g=a.range;let k=h.index;e.enqueueChange(w=>{for(let _=1;_<h.length;_++){const x=h[_],I=m[_-1];if(I==null){k+=x.length;continue}const L=g.start.getShiftedBy(k),V=e.createRange(L,L.getShiftedBy(x.length)),$=N4(L);e.insertContent(w.createText(I,$),V),k+=I.length}e.enqueueChange(()=>{t.requestUndoOnBackspace()})})}),o.bind("isEnabled").to(this)}},class extends W{static get requires(){return[j4,F4]}static get pluginName(){return"Underline"}},class extends W{constructor(i){super(i),this.set("characters",0),this.set("words",0),Object.defineProperties(this,{characters:{get(){return this.characters=this._getCharacters(this._getText())}},words:{get(){return this.words=this._getWords(this._getText())}}}),this.set("_wordsLabel",void 0),this.set("_charactersLabel",void 0),this._config=i.config.get("wordCount")||{},this._outputView=void 0,this._wordsMatchRegExp=C.features.isRegExpUnicodePropertySupported?new RegExp("([\\p{L}\\p{N}]+\\S?)+","gu"):/([a-zA-Z0-9À-ž]+\S?)+/gu}static get pluginName(){return"WordCount"}init(){this.editor.model.document.on("change:data",rd(this._refreshStats.bind(this),250)),typeof this._config.onUpdate=="function"&&this.on("update",(i,e)=>{this._config.onUpdate(e)}),Ot(this._config.container)&&this._config.container.appendChild(this.wordCountContainer)}destroy(){this._outputView&&(this._outputView.element.remove(),this._outputView.destroy()),super.destroy()}get wordCountContainer(){const i=this.editor,e=i.t,t=i.config.get("wordCount.displayWords"),n=i.config.get("wordCount.displayCharacters"),o=Kt.bind(this,this),r=[];return this._outputView||(this._outputView=new ae,(t||t===void 0)&&(this.bind("_wordsLabel").to(this,"words",a=>e("Words: %0",a)),r.push({tag:"div",children:[{text:[o.to("_wordsLabel")]}],attributes:{class:"ck-word-count__words"}})),(n||n===void 0)&&(this.bind("_charactersLabel").to(this,"characters",a=>e("Characters: %0",a)),r.push({tag:"div",children:[{text:[o.to("_charactersLabel")]}],attributes:{class:"ck-word-count__characters"}})),this._outputView.setTemplate({tag:"div",attributes:{class:["ck","ck-word-count"]},children:r}),this._outputView.render()),this._outputView.element}_getText(){let i="";for(const e of this.editor.model.document.getRoots())i!==""&&(i+=`
`),i+=m1(e);return i}_getCharacters(i){return i.replace(/\n/g,"").length}_getWords(i){return(i.match(this._wordsMatchRegExp)||[]).length}_refreshStats(){const i=this._getText(),e=this.words=this._getWords(i),t=this.characters=this._getCharacters(i);this.fire("update",{words:e,characters:t})}}],Rg.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","outdent","indent","|","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo","ckbox","fontBackgroundColor","fontColor","fontFamily","fontSize","findAndReplace","horizontalLine","highlight","removeFormat","specialCharacters","underline","alignment","style"]},language:"en",image:{toolbar:["imageTextAlternative","toggleImageCaption","imageStyle:inline","imageStyle:block","imageStyle:side"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}};const FN=Rg})(),A=A.default})())})(Tu,Tu.exports);var aP=Tu.exports;const lP=yy(aP);class cP extends Iu.Component{render(){const l={toolbar:["undo","redo","|","heading","|","fontfamily","fontsize","fontColor","fontBackgroundColor","|","bold","italic","strikethrough","subscript","superscript","code","|","link","uploadImage","blockQuote","codeBlock","|","bulletedList","numberedList","todoList","outdent","indent"]};return up.createElement("div",{className:"App"},up.createElement(sP.CKEditor,{editor:lP,config:l,data:"data",onReady:u=>{console.log("Editor is ready to use!",u)},onChange:(u,p)=>{const f=p.getData();console.log({event:u,editor:p,data:f})},onBlur:(u,p)=>{console.log("Blur.",p)},onFocus:(u,p)=>{console.log("Focus.",p)}}))}}zx(document.getElementById("root")).render(up.createElement(cP,null));