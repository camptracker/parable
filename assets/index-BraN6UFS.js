(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(u){if(u.ep)return;u.ep=!0;const c=r(u);fetch(u.href,c)}})();function Rg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bh={exports:{}},ko={};var jf;function Pw(){if(jf)return ko;jf=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(s,u,c){var d=null;if(c!==void 0&&(d=""+c),u.key!==void 0&&(d=""+u.key),"key"in u){c={};for(var g in u)g!=="key"&&(c[g]=u[g])}else c=u;return u=c.ref,{$$typeof:a,type:s,key:d,ref:u!==void 0?u:null,props:c}}return ko.Fragment=o,ko.jsx=r,ko.jsxs=r,ko}var Bf;function Jw(){return Bf||(Bf=1,Bh.exports=Pw()),Bh.exports}var X=Jw(),Rh={exports:{}},ge={};var Rf;function $w(){if(Rf)return ge;Rf=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=T&&A[T]||A["@@iterator"],typeof A=="function"?A:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,D={};function j(A,L,k){this.props=A,this.context=L,this.refs=D,this.updater=k||R}j.prototype.isReactComponent={},j.prototype.setState=function(A,L){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,L,"setState")},j.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function K(){}K.prototype=j.prototype;function V(A,L,k){this.props=A,this.context=L,this.refs=D,this.updater=k||R}var oe=V.prototype=new K;oe.constructor=V,H(oe,j.prototype),oe.isPureReactComponent=!0;var le=Array.isArray;function q(){}var P={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function me(A,L,k){var J=k.ref;return{$$typeof:a,type:A,key:L,ref:J!==void 0?J:null,props:k}}function be(A,L){return me(A.type,L,A.props)}function ee(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function $(A){var L={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(k){return L[k]})}var ke=/\/+/g;function ne(A,L){return typeof A=="object"&&A!==null&&A.key!=null?$(""+A.key):L.toString(36)}function G(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(q,q):(A.status="pending",A.then(function(L){A.status==="pending"&&(A.status="fulfilled",A.value=L)},function(L){A.status==="pending"&&(A.status="rejected",A.reason=L)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function W(A,L,k,J,ue){var re=typeof A;(re==="undefined"||re==="boolean")&&(A=null);var Ae=!1;if(A===null)Ae=!0;else switch(re){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(A.$$typeof){case a:case o:Ae=!0;break;case y:return Ae=A._init,W(Ae(A._payload),L,k,J,ue)}}if(Ae)return ue=ue(A),Ae=J===""?"."+ne(A,0):J,le(ue)?(k="",Ae!=null&&(k=Ae.replace(ke,"$&/")+"/"),W(ue,L,k,"",function(_t){return _t})):ue!=null&&(ee(ue)&&(ue=be(ue,k+(ue.key==null||A&&A.key===ue.key?"":(""+ue.key).replace(ke,"$&/")+"/")+Ae)),L.push(ue)),1;Ae=0;var Ge=J===""?".":J+":";if(le(A))for(var He=0;He<A.length;He++)J=A[He],re=Ge+ne(J,He),Ae+=W(J,L,k,re,ue);else if(He=v(A),typeof He=="function")for(A=He.call(A),He=0;!(J=A.next()).done;)J=J.value,re=Ge+ne(J,He++),Ae+=W(J,L,k,re,ue);else if(re==="object"){if(typeof A.then=="function")return W(G(A),L,k,J,ue);throw L=String(A),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function F(A,L,k){if(A==null)return A;var J=[],ue=0;return W(A,J,"","",function(re){return L.call(k,re,ue++)}),J}function ie(A){if(A._status===-1){var L=A._result;L=L(),L.then(function(k){(A._status===0||A._status===-1)&&(A._status=1,A._result=k)},function(k){(A._status===0||A._status===-1)&&(A._status=2,A._result=k)}),A._status===-1&&(A._status=0,A._result=L)}if(A._status===1)return A._result.default;throw A._result}var ve=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},x={map:F,forEach:function(A,L,k){F(A,function(){L.apply(this,arguments)},k)},count:function(A){var L=0;return F(A,function(){L++}),L},toArray:function(A){return F(A,function(L){return L})||[]},only:function(A){if(!ee(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ge.Activity=w,ge.Children=x,ge.Component=j,ge.Fragment=r,ge.Profiler=u,ge.PureComponent=V,ge.StrictMode=s,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ge.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},ge.cache=function(A){return function(){return A.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(A,L,k){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var J=H({},A.props),ue=A.key;if(L!=null)for(re in L.key!==void 0&&(ue=""+L.key),L)!ce.call(L,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&L.ref===void 0||(J[re]=L[re]);var re=arguments.length-2;if(re===1)J.children=k;else if(1<re){for(var Ae=Array(re),Ge=0;Ge<re;Ge++)Ae[Ge]=arguments[Ge+2];J.children=Ae}return me(A.type,ue,J)},ge.createContext=function(A){return A={$$typeof:d,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},ge.createElement=function(A,L,k){var J,ue={},re=null;if(L!=null)for(J in L.key!==void 0&&(re=""+L.key),L)ce.call(L,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ue[J]=L[J]);var Ae=arguments.length-2;if(Ae===1)ue.children=k;else if(1<Ae){for(var Ge=Array(Ae),He=0;He<Ae;He++)Ge[He]=arguments[He+2];ue.children=Ge}if(A&&A.defaultProps)for(J in Ae=A.defaultProps,Ae)ue[J]===void 0&&(ue[J]=Ae[J]);return me(A,re,ue)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(A){return{$$typeof:g,render:A}},ge.isValidElement=ee,ge.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ie}},ge.memo=function(A,L){return{$$typeof:f,type:A,compare:L===void 0?null:L}},ge.startTransition=function(A){var L=P.T,k={};P.T=k;try{var J=A(),ue=P.S;ue!==null&&ue(k,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(q,ve)}catch(re){ve(re)}finally{L!==null&&k.types!==null&&(L.types=k.types),P.T=L}},ge.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ge.use=function(A){return P.H.use(A)},ge.useActionState=function(A,L,k){return P.H.useActionState(A,L,k)},ge.useCallback=function(A,L){return P.H.useCallback(A,L)},ge.useContext=function(A){return P.H.useContext(A)},ge.useDebugValue=function(){},ge.useDeferredValue=function(A,L){return P.H.useDeferredValue(A,L)},ge.useEffect=function(A,L){return P.H.useEffect(A,L)},ge.useEffectEvent=function(A){return P.H.useEffectEvent(A)},ge.useId=function(){return P.H.useId()},ge.useImperativeHandle=function(A,L,k){return P.H.useImperativeHandle(A,L,k)},ge.useInsertionEffect=function(A,L){return P.H.useInsertionEffect(A,L)},ge.useLayoutEffect=function(A,L){return P.H.useLayoutEffect(A,L)},ge.useMemo=function(A,L){return P.H.useMemo(A,L)},ge.useOptimistic=function(A,L){return P.H.useOptimistic(A,L)},ge.useReducer=function(A,L,k){return P.H.useReducer(A,L,k)},ge.useRef=function(A){return P.H.useRef(A)},ge.useState=function(A){return P.H.useState(A)},ge.useSyncExternalStore=function(A,L,k){return P.H.useSyncExternalStore(A,L,k)},ge.useTransition=function(){return P.H.useTransition()},ge.version="19.2.4",ge}var Hf;function fu(){return Hf||(Hf=1,Rh.exports=$w()),Rh.exports}var N=fu(),Hh={exports:{}},To={},Oh={exports:{}},Nh={};var Of;function eb(){return Of||(Of=1,(function(a){function o(W,F){var ie=W.length;W.push(F);e:for(;0<ie;){var ve=ie-1>>>1,x=W[ve];if(0<u(x,F))W[ve]=F,W[ie]=x,ie=ve;else break e}}function r(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var F=W[0],ie=W.pop();if(ie!==F){W[0]=ie;e:for(var ve=0,x=W.length,A=x>>>1;ve<A;){var L=2*(ve+1)-1,k=W[L],J=L+1,ue=W[J];if(0>u(k,ie))J<x&&0>u(ue,k)?(W[ve]=ue,W[J]=ie,ve=J):(W[ve]=k,W[L]=ie,ve=L);else if(J<x&&0>u(ue,ie))W[ve]=ue,W[J]=ie,ve=J;else break e}}return F}function u(W,F){var ie=W.sortIndex-F.sortIndex;return ie!==0?ie:W.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var p=[],f=[],y=1,w=null,T=3,v=!1,R=!1,H=!1,D=!1,j=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function oe(W){for(var F=r(f);F!==null;){if(F.callback===null)s(f);else if(F.startTime<=W)s(f),F.sortIndex=F.expirationTime,o(p,F);else break;F=r(f)}}function le(W){if(H=!1,oe(W),!R)if(r(p)!==null)R=!0,q||(q=!0,$());else{var F=r(f);F!==null&&G(le,F.startTime-W)}}var q=!1,P=-1,ce=5,me=-1;function be(){return D?!0:!(a.unstable_now()-me<ce)}function ee(){if(D=!1,q){var W=a.unstable_now();me=W;var F=!0;try{e:{R=!1,H&&(H=!1,K(P),P=-1),v=!0;var ie=T;try{t:{for(oe(W),w=r(p);w!==null&&!(w.expirationTime>W&&be());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,T=w.priorityLevel;var x=ve(w.expirationTime<=W);if(W=a.unstable_now(),typeof x=="function"){w.callback=x,oe(W),F=!0;break t}w===r(p)&&s(p),oe(W)}else s(p);w=r(p)}if(w!==null)F=!0;else{var A=r(f);A!==null&&G(le,A.startTime-W),F=!1}}break e}finally{w=null,T=ie,v=!1}F=void 0}}finally{F?$():q=!1}}}var $;if(typeof V=="function")$=function(){V(ee)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ne=ke.port2;ke.port1.onmessage=ee,$=function(){ne.postMessage(null)}}else $=function(){j(ee,0)};function G(W,F){P=j(function(){W(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(W){switch(T){case 1:case 2:case 3:var F=3;break;default:F=T}var ie=T;T=F;try{return W()}finally{T=ie}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(W,F){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=T;T=W;try{return F()}finally{T=ie}},a.unstable_scheduleCallback=function(W,F,ie){var ve=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,W){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=ie+x,W={id:y++,callback:F,priorityLevel:W,startTime:ie,expirationTime:x,sortIndex:-1},ie>ve?(W.sortIndex=ie,o(f,W),r(p)===null&&W===r(f)&&(H?(K(P),P=-1):H=!0,G(le,ie-ve))):(W.sortIndex=x,o(p,W),R||v||(R=!0,q||(q=!0,$()))),W},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(W){var F=T;return function(){var ie=T;T=F;try{return W.apply(this,arguments)}finally{T=ie}}}})(Nh)),Nh}var Nf;function tb(){return Nf||(Nf=1,Oh.exports=eb()),Oh.exports}var qh={exports:{}},mt={};var qf;function nb(){if(qf)return mt;qf=1;var a=fu();function o(p){var f="https://react.dev/errors/"+p;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)f+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(o(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},u=Symbol.for("react.portal");function c(p,f,y){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:p,containerInfo:f,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,f){if(p==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mt.createPortal=function(p,f){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(o(299));return c(p,f,null,y)},mt.flushSync=function(p){var f=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=f,s.p=y,s.d.f()}},mt.preconnect=function(p,f){typeof p=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,s.d.C(p,f))},mt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},mt.preinit=function(p,f){if(typeof p=="string"&&f&&typeof f.as=="string"){var y=f.as,w=g(y,f.crossOrigin),T=typeof f.integrity=="string"?f.integrity:void 0,v=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;y==="style"?s.d.S(p,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:v}):y==="script"&&s.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:v,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},mt.preinitModule=function(p,f){if(typeof p=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var y=g(f.as,f.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&s.d.M(p)},mt.preload=function(p,f){if(typeof p=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var y=f.as,w=g(y,f.crossOrigin);s.d.L(p,y,{crossOrigin:w,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},mt.preloadModule=function(p,f){if(typeof p=="string")if(f){var y=g(f.as,f.crossOrigin);s.d.m(p,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else s.d.m(p)},mt.requestFormReset=function(p){s.d.r(p)},mt.unstable_batchedUpdates=function(p,f){return p(f)},mt.useFormState=function(p,f,y){return d.H.useFormState(p,f,y)},mt.useFormStatus=function(){return d.H.useHostTransitionStatus()},mt.version="19.2.4",mt}var Lf;function ab(){if(Lf)return qh.exports;Lf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),qh.exports=nb(),qh.exports}var _f;function ib(){if(_f)return To;_f=1;var a=tb(),o=fu(),r=ab();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function f(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var h=l.alternate;if(h===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===h.child){for(h=l.child;h;){if(h===n)return p(l),e;if(h===i)return p(l),t;h=h.sibling}throw Error(s(188))}if(n.return!==i.return)n=l,i=h;else{for(var m=!1,b=l.child;b;){if(b===n){m=!0,n=l,i=h;break}if(b===i){m=!0,i=l,n=h;break}b=b.sibling}if(!m){for(b=h.child;b;){if(b===n){m=!0,n=h,i=l;break}if(b===i){m=!0,i=h,n=l;break}b=b.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),V=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case j:return"Profiler";case D:return"StrictMode";case le:return"Suspense";case q:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case V:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var G=Array.isArray,W=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ve=[],x=-1;function A(e){return{current:e}}function L(e){0>x||(e.current=ve[x],ve[x]=null,x--)}function k(e,t){x++,ve[x]=e.current,e.current=t}var J=A(null),ue=A(null),re=A(null),Ae=A(null);function Ge(e,t){switch(k(re,t),k(ue,e),k(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tf(t),e=nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(J),k(J,e)}function He(){L(J),L(ue),L(re)}function _t(e){e.memoizedState!==null&&k(Ae,e);var t=J.current,n=nf(t,e.type);t!==n&&(k(ue,e),k(J,n))}function gn(e){ue.current===e&&(L(J),L(ue)),Ae.current===e&&(L(Ae),yo._currentValue=ie)}var Ei,Oo;function pn(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||"",Oo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ei+e+Oo}var Wa=!1;function Da(e,t){if(!e||Wa)return"";Wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(B){var z=B}Reflect.construct(e,[],U)}else{try{U.call()}catch(B){z=B}e.call(U.prototype)}}else{try{throw Error()}catch(B){z=B}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),m=h[0],b=h[1];if(m&&b){var S=m.split(`
`),M=b.split(`
`);for(l=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(i===S.length||l===M.length)for(i=S.length-1,l=M.length-1;1<=i&&0<=l&&S[i]!==M[l];)l--;for(;1<=i&&0<=l;i--,l--)if(S[i]!==M[l]){if(i!==1||l!==1)do if(i--,l--,0>l||S[i]!==M[l]){var O=`
`+S[i].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=i&&0<=l);break}}}finally{Wa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pn(n):""}function No(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Da(e.type,!1);case 11:return Da(e.type.render,!1);case 1:return Da(e.type,!0);case 31:return pn("Activity");default:return""}}function qo(e){try{var t="",n=null;do t+=No(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ja=Object.prototype.hasOwnProperty,Ba=a.unstable_scheduleCallback,Ci=a.unstable_cancelCallback,bs=a.unstable_shouldYield,vs=a.unstable_requestPaint,gt=a.unstable_now,ks=a.unstable_getCurrentPriorityLevel,_=a.unstable_ImmediatePriority,Z=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,Te=a.unstable_LowPriority,je=a.unstable_IdlePriority,zt=a.log,yn=a.unstable_setDisableYieldValue,pt=null,it=null;function wt(e){if(typeof zt=="function"&&yn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(pt,e)}catch{}}var Le=Math.clz32?Math.clz32:Op,On=Math.log,en=Math.LN2;function Op(e){return e>>>=0,e===0?32:31-(On(e)/en|0)|0}var Lo=256,_o=262144,Yo=4194304;function ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,h=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~h,i!==0?l=ua(i):(m&=b,m!==0?l=ua(m):n||(n=b&~e,n!==0&&(l=ua(n))))):(b=i&~h,b!==0?l=ua(b):m!==0?l=ua(m):n||(n=i&~e,n!==0&&(l=ua(n)))),l===0?0:t!==0&&t!==l&&(t&h)===0&&(h=l&-l,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:l}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Np(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hu(){var e=Yo;return Yo<<=1,(Yo&62914560)===0&&(Yo=4194304),e}function Ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qp(e,t,n,i,l,h){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,M=e.hiddenUpdates;for(n=m&~n;0<n;){var O=31-Le(n),U=1<<O;b[O]=0,S[O]=-1;var z=M[O];if(z!==null)for(M[O]=null,O=0;O<z.length;O++){var B=z[O];B!==null&&(B.lane&=-536870913)}n&=~U}i!==0&&Ou(e,i,0),h!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=h&~(m&~t))}function Ou(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Le(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Le(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function qu(e,t){var n=t&-t;return n=(n&42)!==0?1:xs(n),(n&(e.suspendedLanes|t))!==0?0:n}function xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ss(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lu(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:If(e.type))}function _u(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Nn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Nn,bt="__reactProps$"+Nn,Ra="__reactContainer$"+Nn,As="__reactEvents$"+Nn,Lp="__reactListeners$"+Nn,_p="__reactHandles$"+Nn,Yu="__reactResources$"+Nn,Wi="__reactMarker$"+Nn;function Is(e){delete e[lt],delete e[bt],delete e[As],delete e[Lp],delete e[_p]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ra]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uf(e);e!==null;){if(n=e[lt])return n;e=uf(e)}return t}e=n,n=e.parentNode}return null}function Oa(e){if(e=e[lt]||e[Ra]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Di(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Na(e){var t=e[Yu];return t||(t=e[Yu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[Wi]=!0}var Uu=new Set,Vu={};function ca(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(Vu[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fu={},Gu={};function Up(e){return ja.call(Gu,e)?!0:ja.call(Fu,e)?!1:Yp.test(e)?Gu[e]=!0:(Fu[e]=!0,!1)}function Vo(e,t,n){if(Up(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,h.call(this,m)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Es(e){if(!e._valueTracker){var t=Qu(e)?"checked":"value";e._valueTracker=Vp(e,t,""+e[t])}}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fp=/[\n"\\]/g;function Ut(e){return e.replace(Fp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,n,i,l,h,m,b){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Ms(e,m,Yt(t)):n!=null?Ms(e,m,Yt(n)):i!=null&&e.removeAttribute("value"),l==null&&h!=null&&(e.defaultChecked=!!h),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Yt(b):e.removeAttribute("name")}function Xu(e,t,n,i,l,h,m,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null)){Es(e);return}n=n!=null?""+Yt(n):"",t=t!=null?""+Yt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Es(e)}function Ms(e,t,n){t==="number"&&Go(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function La(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Zu(e,t,n){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Yt(n):""}function Pu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(G(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Yt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Es(e)}function _a(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ju(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Gp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $u(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Ju(e,l,i)}else for(var h in t)t.hasOwnProperty(h)&&Ju(e,h,t[h])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return Kp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Ws=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,Ua=null;function ec(e){var t=Oa(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[bt]||null;if(!l)throw Error(s(90));Cs(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ku(i)}break e;case"textarea":Zu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&La(e,!!n.multiple,t,!1)}}}var js=!1;function tc(e,t,n){if(js)return e(t,n);js=!0;try{var i=e(t);return i}finally{if(js=!1,(Ya!==null||Ua!==null)&&(Br(),Ya&&(t=Ya,e=Ua,Ua=Ya=null,ec(t),e)))for(t=0;t<e.length;t++)ec(e[t])}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=!1;if(vn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Bs=!1}var qn=null,Rs=null,Ko=null;function nc(){if(Ko)return Ko;var e,t=Rs,n=t.length,i,l="value"in qn?qn.value:qn.textContent,h=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===l[h-i];i++);return Ko=l.slice(e,1<i?1-i:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function ac(){return!1}function vt(e){function t(n,i,l,h,m){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:ac,this.isPropagationStopped=ac,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=vt(da),Ri=w({},da,{view:0,detail:0}),Xp=vt(Ri),Hs,Os,Hi,Jo=w({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(Hs=e.screenX-Hi.screenX,Os=e.screenY-Hi.screenY):Os=Hs=0,Hi=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),ic=vt(Jo),Zp=w({},Jo,{dataTransfer:0}),Pp=vt(Zp),Jp=w({},Ri,{relatedTarget:0}),Ns=vt(Jp),$p=w({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=vt($p),ty=w({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ny=vt(ty),ay=w({},da,{data:0}),oc=vt(ay),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ry[e])?!!t[e]:!1}function qs(){return sy}var ly=w({},Ri,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hy=vt(ly),uy=w({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=vt(uy),cy=w({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),dy=vt(cy),my=w({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=vt(my),gy=w({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=vt(gy),yy=w({},da,{newState:0,oldState:0}),wy=vt(yy),by=[9,13,27,32],Ls=vn&&"CompositionEvent"in window,Oi=null;vn&&"documentMode"in document&&(Oi=document.documentMode);var vy=vn&&"TextEvent"in window&&!Oi,sc=vn&&(!Ls||Oi&&8<Oi&&11>=Oi),lc=" ",hc=!1;function uc(e,t){switch(e){case"keyup":return by.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Va=!1;function ky(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(hc=!0,lc);case"textInput":return e=t.data,e===lc&&hc?null:e;default:return null}}function Ty(e,t){if(Va)return e==="compositionend"||!Ls&&uc(e,t)?(e=nc(),Ko=Rs=qn=null,Va=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sc&&t.locale!=="ko"?null:t.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xy[e.type]:t==="textarea"}function mc(e,t,n,i){Ya?Ua?Ua.push(i):Ua=[i]:Ya=i,t=_r(t,"onChange"),0<t.length&&(n=new Po("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ni=null,qi=null;function Sy(e){Xm(e,0)}function $o(e){var t=Di(e);if(Ku(t))return e}function fc(e,t){if(e==="change")return t}var gc=!1;if(vn){var _s;if(vn){var Ys="oninput"in document;if(!Ys){var pc=document.createElement("div");pc.setAttribute("oninput","return;"),Ys=typeof pc.oninput=="function"}_s=Ys}else _s=!1;gc=_s&&(!document.documentMode||9<document.documentMode)}function yc(){Ni&&(Ni.detachEvent("onpropertychange",wc),qi=Ni=null)}function wc(e){if(e.propertyName==="value"&&$o(qi)){var t=[];mc(t,qi,e,Ds(e)),tc(Sy,t)}}function Ay(e,t,n){e==="focusin"?(yc(),Ni=t,qi=n,Ni.attachEvent("onpropertychange",wc)):e==="focusout"&&yc()}function Iy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(qi)}function Ey(e,t){if(e==="click")return $o(t)}function Cy(e,t){if(e==="input"||e==="change")return $o(t)}function My(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:My;function Li(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!ja.call(t,l)||!Wt(e[l],t[l]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=bc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Go(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Go(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zy=vn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Vs=null,_i=null,Fs=!1;function xc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Fa==null||Fa!==Go(i)||(i=Fa,"selectionStart"in i&&Us(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_i&&Li(_i,i)||(_i=i,i=_r(Vs,"onSelect"),0<i.length&&(t=new Po("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},Gs={},Sc={};vn&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function fa(e){if(Gs[e])return Gs[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return Gs[e]=t[n];return e}var Ac=fa("animationend"),Ic=fa("animationiteration"),Ec=fa("animationstart"),Wy=fa("transitionrun"),Dy=fa("transitionstart"),jy=fa("transitioncancel"),Cc=fa("transitionend"),Mc=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function tn(e,t){Mc.set(e,t),ca(t,[e])}var er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Qa=0,Ks=0;function tr(){for(var e=Qa,t=Ks=Qa=0;t<e;){var n=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var h=Vt[t];if(Vt[t++]=null,i!==null&&l!==null){var m=i.pending;m===null?l.next=l:(l.next=m.next,m.next=l),i.pending=l}h!==0&&zc(n,l,h)}}function nr(e,t,n,i){Vt[Qa++]=e,Vt[Qa++]=t,Vt[Qa++]=n,Vt[Qa++]=i,Ks|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Xs(e,t,n,i){return nr(e,t,n,i),ar(e)}function ga(e,t){return nr(e,null,null,t),ar(e)}function zc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,h=e.return;h!==null;)h.childLanes|=n,i=h.alternate,i!==null&&(i.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(l=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,l&&t!==null&&(l=31-Le(n),e=h.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),h):null}function ar(e){if(50<ho)throw ho=0,ih=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ka={};function By(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,i){return new By(e,t,n,i)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ir(e,t,n,i,l,h){var m=0;if(i=e,typeof e=="function")Zs(e)&&(m=1);else if(typeof e=="string")m=qw(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=Dt(31,n,t,l),e.elementType=me,e.lanes=h,e;case H:return pa(n.children,l,h,t);case D:m=8,l|=24;break;case j:return e=Dt(12,n,t,l|2),e.elementType=j,e.lanes=h,e;case le:return e=Dt(13,n,t,l),e.elementType=le,e.lanes=h,e;case q:return e=Dt(19,n,t,l),e.elementType=q,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:m=10;break e;case K:m=9;break e;case oe:m=11;break e;case P:m=14;break e;case ce:m=16,i=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Dt(m,n,t,l),t.elementType=e,t.type=i,t.lanes=h,t}function pa(e,t,n,i){return e=Dt(7,e,i,t),e.lanes=n,e}function Ps(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Dc(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function Js(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jc=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=jc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:qo(t)},jc.set(e,t),t)}return{value:e,source:t,stack:qo(t)}}var Xa=[],Za=0,or=null,Yi=0,Gt=[],Qt=0,Ln=null,rn=1,sn="";function Tn(e,t){Xa[Za++]=Yi,Xa[Za++]=or,or=e,Yi=t}function Bc(e,t,n){Gt[Qt++]=rn,Gt[Qt++]=sn,Gt[Qt++]=Ln,Ln=e;var i=rn;e=sn;var l=32-Le(i)-1;i&=~(1<<l),n+=1;var h=32-Le(t)+l;if(30<h){var m=l-l%5;h=(i&(1<<m)-1).toString(32),i>>=m,l-=m,rn=1<<32-Le(t)+l|n<<l|i,sn=h+e}else rn=1<<h|n<<l|i,sn=e}function $s(e){e.return!==null&&(Tn(e,1),Bc(e,1,0))}function el(e){for(;e===or;)or=Xa[--Za],Xa[Za]=null,Yi=Xa[--Za],Xa[Za]=null;for(;e===Ln;)Ln=Gt[--Qt],Gt[Qt]=null,sn=Gt[--Qt],Gt[Qt]=null,rn=Gt[--Qt],Gt[Qt]=null}function Rc(e,t){Gt[Qt++]=rn,Gt[Qt++]=sn,Gt[Qt++]=Ln,rn=t.id,sn=t.overflow,Ln=e}var ht=null,Ve=null,Ce=!1,_n=null,Kt=!1,tl=Error(s(519));function Yn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ui(Ft(t,e)),tl}function Hc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[bt]=i,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<co.length;n++)Se(co[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Xu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Pu(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||$m(t.textContent,n)?(i.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),i.onScroll!=null&&Se("scroll",t),i.onScrollEnd!=null&&Se("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Yn(e,!0)}function Oc(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ht=ht.return}}function Pa(e){if(e!==ht)return!1;if(!Ce)return Oc(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bh(e.type,e.memoizedProps)),n=!n),n&&Ve&&Yn(e),Oc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ve=hf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ve=hf(e)}else t===27?(t=Ve,na(e.type)?(e=Sh,Sh=null,Ve=e):Ve=t):Ve=ht?Zt(e.stateNode.nextSibling):null;return!0}function ya(){Ve=ht=null,Ce=!1}function nl(){var e=_n;return e!==null&&(St===null?St=e:St.push.apply(St,e),_n=null),e}function Ui(e){_n===null?_n=[e]:_n.push(e)}var al=A(null),wa=null,xn=null;function Un(e,t,n){k(al,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=al.current,L(al)}function il(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ol(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var h=l.dependencies;if(h!==null){var m=l.child;h=h.firstContext;e:for(;h!==null;){var b=h;h=l;for(var S=0;S<t.length;S++)if(b.context===t[S]){h.lanes|=n,b=h.alternate,b!==null&&(b.lanes|=n),il(h.return,n,e),i||(m=null);break e}h=b.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=n,h=m.alternate,h!==null&&(h.lanes|=n),il(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ja(e,t,n,i){e=null;for(var l=t,h=!1;l!==null;){if(!h){if((l.flags&524288)!==0)h=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var b=l.type;Wt(l.pendingProps.value,m.value)||(e!==null?e.push(b):e=[b])}}else if(l===Ae.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}l=l.return}e!==null&&ol(t,e,n,i),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!Wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){wa=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Nc(wa,e)}function sr(e,t){return wa===null&&ba(e),Nc(e,t)}function Nc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(s(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Ry=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hy=a.unstable_scheduleCallback,Oy=a.unstable_NormalPriority,$e={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rl(){return{controller:new Ry,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&Hy(Oy,function(){e.controller.abort()})}var Fi=null,sl=0,$a=0,ei=null;function Ny(e,t){if(Fi===null){var n=Fi=[];sl=0,$a=uh(),ei={status:"pending",value:void 0,then:function(i){n.push(i)}}}return sl++,t.then(qc,qc),t}function qc(){if(--sl===0&&Fi!==null){ei!==null&&(ei.status="fulfilled");var e=Fi;Fi=null,$a=0,ei=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qy(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var Lc=W.S;W.S=function(e,t){xm=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ny(e,t),Lc!==null&&Lc(e,t)};var va=A(null);function ll(){var e=va.current;return e!==null?e:_e.pooledCache}function lr(e,t){t===null?k(va,va.current):k(va,t.pool)}function _c(){var e=ll();return e===null?null:{parent:$e._currentValue,pool:e}}var ti=Error(s(460)),hl=Error(s(474)),hr=Error(s(542)),ur={then:function(){}};function Yc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e}throw Ta=t,ti}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,ti):n}}var Ta=null;function Vc(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Fc(e){if(e===ti||e===hr)throw Error(s(483))}var ni=null,Gi=0;function cr(e){var t=Gi;return Gi+=1,ni===null&&(ni=[]),Uc(ni,e,t)}function Qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dr(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gc(e){function t(E,I){if(e){var C=E.deletions;C===null?(E.deletions=[I],E.flags|=16):C.push(I)}}function n(E,I){if(!e)return null;for(;I!==null;)t(E,I),I=I.sibling;return null}function i(E){for(var I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function l(E,I){return E=kn(E,I),E.index=0,E.sibling=null,E}function h(E,I,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<I?(E.flags|=67108866,I):C):(E.flags|=67108866,I)):(E.flags|=1048576,I)}function m(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function b(E,I,C,Y){return I===null||I.tag!==6?(I=Ps(C,E.mode,Y),I.return=E,I):(I=l(I,C),I.return=E,I)}function S(E,I,C,Y){var se=C.type;return se===H?O(E,I,C.props.children,Y,C.key):I!==null&&(I.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===I.type)?(I=l(I,C.props),Qi(I,C),I.return=E,I):(I=ir(C.type,C.key,C.props,null,E.mode,Y),Qi(I,C),I.return=E,I)}function M(E,I,C,Y){return I===null||I.tag!==4||I.stateNode.containerInfo!==C.containerInfo||I.stateNode.implementation!==C.implementation?(I=Js(C,E.mode,Y),I.return=E,I):(I=l(I,C.children||[]),I.return=E,I)}function O(E,I,C,Y,se){return I===null||I.tag!==7?(I=pa(C,E.mode,Y,se),I.return=E,I):(I=l(I,C),I.return=E,I)}function U(E,I,C){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Ps(""+I,E.mode,C),I.return=E,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case v:return C=ir(I.type,I.key,I.props,null,E.mode,C),Qi(C,I),C.return=E,C;case R:return I=Js(I,E.mode,C),I.return=E,I;case ce:return I=ka(I),U(E,I,C)}if(G(I)||$(I))return I=pa(I,E.mode,C,null),I.return=E,I;if(typeof I.then=="function")return U(E,cr(I),C);if(I.$$typeof===V)return U(E,sr(E,I),C);dr(E,I)}return null}function z(E,I,C,Y){var se=I!==null?I.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return se!==null?null:b(E,I,""+C,Y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case v:return C.key===se?S(E,I,C,Y):null;case R:return C.key===se?M(E,I,C,Y):null;case ce:return C=ka(C),z(E,I,C,Y)}if(G(C)||$(C))return se!==null?null:O(E,I,C,Y,null);if(typeof C.then=="function")return z(E,I,cr(C),Y);if(C.$$typeof===V)return z(E,I,sr(E,C),Y);dr(E,C)}return null}function B(E,I,C,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return E=E.get(C)||null,b(I,E,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return E=E.get(Y.key===null?C:Y.key)||null,S(I,E,Y,se);case R:return E=E.get(Y.key===null?C:Y.key)||null,M(I,E,Y,se);case ce:return Y=ka(Y),B(E,I,C,Y,se)}if(G(Y)||$(Y))return E=E.get(C)||null,O(I,E,Y,se,null);if(typeof Y.then=="function")return B(E,I,C,cr(Y),se);if(Y.$$typeof===V)return B(E,I,C,sr(I,Y),se);dr(I,Y)}return null}function te(E,I,C,Y){for(var se=null,Me=null,ae=I,ye=I=0,Ee=null;ae!==null&&ye<C.length;ye++){ae.index>ye?(Ee=ae,ae=null):Ee=ae.sibling;var ze=z(E,ae,C[ye],Y);if(ze===null){ae===null&&(ae=Ee);break}e&&ae&&ze.alternate===null&&t(E,ae),I=h(ze,I,ye),Me===null?se=ze:Me.sibling=ze,Me=ze,ae=Ee}if(ye===C.length)return n(E,ae),Ce&&Tn(E,ye),se;if(ae===null){for(;ye<C.length;ye++)ae=U(E,C[ye],Y),ae!==null&&(I=h(ae,I,ye),Me===null?se=ae:Me.sibling=ae,Me=ae);return Ce&&Tn(E,ye),se}for(ae=i(ae);ye<C.length;ye++)Ee=B(ae,E,ye,C[ye],Y),Ee!==null&&(e&&Ee.alternate!==null&&ae.delete(Ee.key===null?ye:Ee.key),I=h(Ee,I,ye),Me===null?se=Ee:Me.sibling=Ee,Me=Ee);return e&&ae.forEach(function(sa){return t(E,sa)}),Ce&&Tn(E,ye),se}function he(E,I,C,Y){if(C==null)throw Error(s(151));for(var se=null,Me=null,ae=I,ye=I=0,Ee=null,ze=C.next();ae!==null&&!ze.done;ye++,ze=C.next()){ae.index>ye?(Ee=ae,ae=null):Ee=ae.sibling;var sa=z(E,ae,ze.value,Y);if(sa===null){ae===null&&(ae=Ee);break}e&&ae&&sa.alternate===null&&t(E,ae),I=h(sa,I,ye),Me===null?se=sa:Me.sibling=sa,Me=sa,ae=Ee}if(ze.done)return n(E,ae),Ce&&Tn(E,ye),se;if(ae===null){for(;!ze.done;ye++,ze=C.next())ze=U(E,ze.value,Y),ze!==null&&(I=h(ze,I,ye),Me===null?se=ze:Me.sibling=ze,Me=ze);return Ce&&Tn(E,ye),se}for(ae=i(ae);!ze.done;ye++,ze=C.next())ze=B(ae,E,ye,ze.value,Y),ze!==null&&(e&&ze.alternate!==null&&ae.delete(ze.key===null?ye:ze.key),I=h(ze,I,ye),Me===null?se=ze:Me.sibling=ze,Me=ze);return e&&ae.forEach(function(Zw){return t(E,Zw)}),Ce&&Tn(E,ye),se}function qe(E,I,C,Y){if(typeof C=="object"&&C!==null&&C.type===H&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case v:e:{for(var se=C.key;I!==null;){if(I.key===se){if(se=C.type,se===H){if(I.tag===7){n(E,I.sibling),Y=l(I,C.props.children),Y.return=E,E=Y;break e}}else if(I.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===I.type){n(E,I.sibling),Y=l(I,C.props),Qi(Y,C),Y.return=E,E=Y;break e}n(E,I);break}else t(E,I);I=I.sibling}C.type===H?(Y=pa(C.props.children,E.mode,Y,C.key),Y.return=E,E=Y):(Y=ir(C.type,C.key,C.props,null,E.mode,Y),Qi(Y,C),Y.return=E,E=Y)}return m(E);case R:e:{for(se=C.key;I!==null;){if(I.key===se)if(I.tag===4&&I.stateNode.containerInfo===C.containerInfo&&I.stateNode.implementation===C.implementation){n(E,I.sibling),Y=l(I,C.children||[]),Y.return=E,E=Y;break e}else{n(E,I);break}else t(E,I);I=I.sibling}Y=Js(C,E.mode,Y),Y.return=E,E=Y}return m(E);case ce:return C=ka(C),qe(E,I,C,Y)}if(G(C))return te(E,I,C,Y);if($(C)){if(se=$(C),typeof se!="function")throw Error(s(150));return C=se.call(C),he(E,I,C,Y)}if(typeof C.then=="function")return qe(E,I,cr(C),Y);if(C.$$typeof===V)return qe(E,I,sr(E,C),Y);dr(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,I!==null&&I.tag===6?(n(E,I.sibling),Y=l(I,C),Y.return=E,E=Y):(n(E,I),Y=Ps(C,E.mode,Y),Y.return=E,E=Y),m(E)):n(E,I)}return function(E,I,C,Y){try{Gi=0;var se=qe(E,I,C,Y);return ni=null,se}catch(ae){if(ae===ti||ae===hr)throw ae;var Me=Dt(29,ae,null,E.mode);return Me.lanes=Y,Me.return=E,Me}}}var xa=Gc(!0),Qc=Gc(!1),Vn=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(We&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=ar(e),zc(e,null,n),t}return nr(e,i,t,n),ar(e)}function Ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Nu(e,n)}}function dl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?l=h=m:h=h.next=m,n=n.next}while(n!==null);h===null?l=h=t:h=h.next=t}else l=h=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ml=!1;function Xi(){if(ml){var e=ei;if(e!==null)throw e}}function Zi(e,t,n,i){ml=!1;var l=e.updateQueue;Vn=!1;var h=l.firstBaseUpdate,m=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var S=b,M=S.next;S.next=null,m===null?h=M:m.next=M,m=S;var O=e.alternate;O!==null&&(O=O.updateQueue,b=O.lastBaseUpdate,b!==m&&(b===null?O.firstBaseUpdate=M:b.next=M,O.lastBaseUpdate=S))}if(h!==null){var U=l.baseState;m=0,O=M=S=null,b=h;do{var z=b.lane&-536870913,B=z!==b.lane;if(B?(Ie&z)===z:(i&z)===z){z!==0&&z===$a&&(ml=!0),O!==null&&(O=O.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,he=b;z=t;var qe=n;switch(he.tag){case 1:if(te=he.payload,typeof te=="function"){U=te.call(qe,U,z);break e}U=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=he.payload,z=typeof te=="function"?te.call(qe,U,z):te,z==null)break e;U=w({},U,z);break e;case 2:Vn=!0}}z=b.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[z]:B.push(z))}else B={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},O===null?(M=O=B,S=U):O=O.next=B,m|=z;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;B=b,b=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);O===null&&(S=U),l.baseState=S,l.firstBaseUpdate=M,l.lastBaseUpdate=O,h===null&&(l.shared.lanes=0),Pn|=m,e.lanes=m,e.memoizedState=U}}function Kc(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Xc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kc(n[e],t)}var ai=A(null),mr=A(0);function Zc(e,t){e=jn,k(mr,e),k(ai,t),jn=e|t.baseLanes}function fl(){k(mr,jn),k(ai,ai.current)}function gl(){jn=mr.current,L(ai),L(mr)}var jt=A(null),Xt=null;function Qn(e){var t=e.alternate;k(Pe,Pe.current&1),k(jt,e),Xt===null&&(t===null||ai.current!==null||t.memoizedState!==null)&&(Xt=e)}function pl(e){k(Pe,Pe.current),k(jt,e),Xt===null&&(Xt=e)}function Pc(e){e.tag===22?(k(Pe,Pe.current),k(jt,e),Xt===null&&(Xt=e)):Kn()}function Kn(){k(Pe,Pe.current),k(jt,jt.current)}function Bt(e){L(jt),Xt===e&&(Xt=null),L(Pe)}var Pe=A(0);function fr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Th(n)||xh(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var An=0,pe=null,Oe=null,et=null,gr=!1,ii=!1,Sa=!1,pr=0,Pi=0,oi=null,Ly=0;function Xe(){throw Error(s(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function wl(e,t,n,i,l,h){return An=h,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,W.H=e===null||e.memoizedState===null?Bd:jl,Sa=!1,h=n(i,l),Sa=!1,ii&&(h=$c(t,n,i,l)),Jc(e),h}function Jc(e){W.H=eo;var t=Oe!==null&&Oe.next!==null;if(An=0,et=Oe=pe=null,gr=!1,Pi=0,oi=null,t)throw Error(s(300));e===null||tt||(e=e.dependencies,e!==null&&rr(e)&&(tt=!0))}function $c(e,t,n,i){pe=e;var l=0;do{if(ii&&(oi=null),Pi=0,ii=!1,25<=l)throw Error(s(301));if(l+=1,et=Oe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}W.H=Rd,h=t(n,i)}while(ii);return h}function _y(){var e=W.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(pe.flags|=1024),t}function bl(){var e=pr!==0;return pr=0,e}function vl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function kl(e){if(gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gr=!1}An=0,et=Oe=pe=null,ii=!1,Pi=pr=0,oi=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?pe.memoizedState=et=e:et=et.next=e,et}function Je(){if(Oe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=et===null?pe.memoizedState:et.next;if(t!==null)et=t,Oe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},et===null?pe.memoizedState=et=e:et=et.next=e}return et}function yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=Pi;return Pi+=1,oi===null&&(oi=[]),e=Uc(oi,e,t),t=pe,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,W.H=t===null||t.memoizedState===null?Bd:jl),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===V)return ut(e)}throw Error(s(438,String(e)))}function Tl(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=be;return t.index++,n}function In(e,t){return typeof t=="function"?t(e):t}function br(e){var t=Je();return xl(t,Oe,e)}function xl(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var l=e.baseQueue,h=i.pending;if(h!==null){if(l!==null){var m=l.next;l.next=h.next,h.next=m}t.baseQueue=l=h,i.pending=null}if(h=e.baseState,l===null)e.memoizedState=h;else{t=l.next;var b=m=null,S=null,M=t,O=!1;do{var U=M.lane&-536870913;if(U!==M.lane?(Ie&U)===U:(An&U)===U){var z=M.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),U===$a&&(O=!0);else if((An&z)===z){M=M.next,z===$a&&(O=!0);continue}else U={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=U,m=h):S=S.next=U,pe.lanes|=z,Pn|=z;U=M.action,Sa&&n(h,U),h=M.hasEagerState?M.eagerState:n(h,U)}else z={lane:U,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},S===null?(b=S=z,m=h):S=S.next=z,pe.lanes|=U,Pn|=U;M=M.next}while(M!==null&&M!==t);if(S===null?m=h:S.next=b,!Wt(h,e.memoizedState)&&(tt=!0,O&&(n=ei,n!==null)))throw n;e.memoizedState=h,e.baseState=m,e.baseQueue=S,i.lastRenderedState=h}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Sl(e){var t=Je(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,h=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do h=e(h,m.action),m=m.next;while(m!==l);Wt(h,t.memoizedState)||(tt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,i]}function ed(e,t,n){var i=pe,l=Je(),h=Ce;if(h){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!Wt((Oe||l).memoizedState,n);if(m&&(l.memoizedState=n,tt=!0),l=l.queue,El(ad.bind(null,i,l,e),[e]),l.getSnapshot!==t||m||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,ri(9,{destroy:void 0},nd.bind(null,i,l,n,t),null),_e===null)throw Error(s(349));h||(An&127)!==0||td(i,t,n)}return n}function td(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=yr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nd(e,t,n,i){t.value=n,t.getSnapshot=i,id(t)&&od(e)}function ad(e,t,n){return n(function(){id(t)&&od(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function od(e){var t=ga(e,2);t!==null&&At(t,e,2)}function Al(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),Sa){wt(!0);try{n()}finally{wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:e},t}function rd(e,t,n,i){return e.baseState=n,xl(e,Oe,typeof i=="function"?i:In)}function Yy(e,t,n,i,l){if(Tr(e))throw Error(s(485));if(e=t.action,e!==null){var h={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){h.listeners.push(m)}};W.T!==null?n(!0):h.isTransition=!1,i(h),n=t.pending,n===null?(h.next=t.pending=h,sd(t,h)):(h.next=n.next,t.pending=n.next=h)}}function sd(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var h=W.T,m={};W.T=m;try{var b=n(l,i),S=W.S;S!==null&&S(m,b),ld(e,t,b)}catch(M){Il(e,t,M)}finally{h!==null&&m.types!==null&&(h.types=m.types),W.T=h}}else try{h=n(l,i),ld(e,t,h)}catch(M){Il(e,t,M)}}function ld(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){hd(e,t,i)},function(i){return Il(e,t,i)}):hd(e,t,n)}function hd(e,t,n){t.status="fulfilled",t.value=n,ud(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sd(e,n)))}function Il(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ud(t),t=t.next;while(t!==i)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cd(e,t){return t}function dd(e,t){if(Ce){var n=_e.formState;if(n!==null){e:{var i=pe;if(Ce){if(Ve){t:{for(var l=Ve,h=Kt;l.nodeType!==8;){if(!h){l=null;break t}if(l=Zt(l.nextSibling),l===null){l=null;break t}}h=l.data,l=h==="F!"||h==="F"?l:null}if(l){Ve=Zt(l.nextSibling),i=l.data==="F!";break e}}Yn(i)}i=!1}i&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cd,lastRenderedState:t},n.queue=i,n=Wd.bind(null,pe,i),i.dispatch=n,i=Al(!1),h=Dl.bind(null,pe,!1,i.queue),i=yt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Yy.bind(null,pe,l,h,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function md(e){var t=Je();return fd(t,Oe,e)}function fd(e,t,n){if(t=xl(e,t,cd)[0],e=br(In)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ji(t)}catch(m){throw m===ti?hr:m}else i=t;t=Je();var l=t.queue,h=l.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,ri(9,{destroy:void 0},Uy.bind(null,l,n),null)),[i,h,e]}function Uy(e,t){e.action=t}function gd(e){var t=Je(),n=Oe;if(n!==null)return fd(t,n,e);Je(),t=t.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ri(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=yr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function pd(){return Je().memoizedState}function vr(e,t,n,i){var l=yt();pe.flags|=e,l.memoizedState=ri(1|t,{destroy:void 0},n,i===void 0?null:i)}function kr(e,t,n,i){var l=Je();i=i===void 0?null:i;var h=l.memoizedState.inst;Oe!==null&&i!==null&&yl(i,Oe.memoizedState.deps)?l.memoizedState=ri(t,h,n,i):(pe.flags|=e,l.memoizedState=ri(1|t,h,n,i))}function yd(e,t){vr(8390656,8,e,t)}function El(e,t){kr(2048,8,e,t)}function Vy(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=yr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function wd(e){var t=Je().memoizedState;return Vy({ref:t,nextImpl:e}),function(){if((We&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function bd(e,t){return kr(4,2,e,t)}function vd(e,t){return kr(4,4,e,t)}function kd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){n=n!=null?n.concat([e]):null,kr(4,4,kd.bind(null,t,e),n)}function Cl(){}function xd(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=Je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yl(t,i[1]))return i[0];if(i=e(),Sa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i}function Ml(e,t,n){return n===void 0||(An&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Am(),pe.lanes|=e,Pn|=e,n)}function Ad(e,t,n,i){return Wt(n,t)?n:ai.current!==null?(e=Ml(e,n,i),Wt(e,t)||(tt=!0),e):(An&42)===0||(An&1073741824)!==0&&(Ie&261930)===0?(tt=!0,e.memoizedState=n):(e=Am(),pe.lanes|=e,Pn|=e,t)}function Id(e,t,n,i,l){var h=F.p;F.p=h!==0&&8>h?h:8;var m=W.T,b={};W.T=b,Dl(e,!1,t,n);try{var S=l(),M=W.S;if(M!==null&&M(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var O=qy(S,i);$i(e,t,O,Ot(e))}else $i(e,t,i,Ot(e))}catch(U){$i(e,t,{then:function(){},status:"rejected",reason:U},Ot())}finally{F.p=h,m!==null&&b.types!==null&&(m.types=b.types),W.T=m}}function Fy(){}function zl(e,t,n,i){if(e.tag!==5)throw Error(s(476));var l=Ed(e).queue;Id(e,l,t,ie,n===null?Fy:function(){return Cd(e),n(i)})}function Ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:In,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=Ed(e);t.next===null&&(t=e.alternate.memoizedState),$i(e,t.next.queue,{},Ot())}function Wl(){return ut(yo)}function Md(){return Je().memoizedState}function zd(){return Je().memoizedState}function Gy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=Fn(n);var i=Gn(t,e,n);i!==null&&(At(i,t,n),Ki(i,t,n)),t={cache:rl()},e.payload=t;return}t=t.return}}function Qy(e,t,n){var i=Ot();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(e)?Dd(t,n):(n=Xs(e,t,n,i),n!==null&&(At(n,e,i),jd(n,t,i)))}function Wd(e,t,n){var i=Ot();$i(e,t,n,i)}function $i(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))Dd(t,l);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var m=t.lastRenderedState,b=h(m,n);if(l.hasEagerState=!0,l.eagerState=b,Wt(b,m))return nr(e,t,l,0),_e===null&&tr(),!1}catch{}if(n=Xs(e,t,l,i),n!==null)return At(n,e,i),jd(n,t,i),!0}return!1}function Dl(e,t,n,i){if(i={lane:2,revertLane:uh(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(s(479))}else t=Xs(e,n,i,2),t!==null&&At(t,e,2)}function Tr(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Dd(e,t){ii=gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Nu(e,n)}}var eo={readContext:ut,use:wr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};eo.useEffectEvent=Xe;var Bd={readContext:ut,use:wr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,vr(4194308,4,kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vr(4194308,4,e,t)},useInsertionEffect:function(e,t){vr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var i=e();if(Sa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yt();if(n!==void 0){var l=n(t);if(Sa){wt(!0);try{n(t)}finally{wt(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Qy.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Al(e);var t=e.queue,n=Wd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cl,useDeferredValue:function(e,t){var n=yt();return Ml(n,e,t)},useTransition:function(){var e=Al(!1);return e=Id.bind(null,pe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=pe,l=yt();if(Ce){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),_e===null)throw Error(s(349));(Ie&127)!==0||td(i,t,n)}l.memoizedState=n;var h={value:n,getSnapshot:t};return l.queue=h,yd(ad.bind(null,i,h,e),[e]),i.flags|=2048,ri(9,{destroy:void 0},nd.bind(null,i,h,n,t),null),n},useId:function(){var e=yt(),t=_e.identifierPrefix;if(Ce){var n=sn,i=rn;n=(i&~(1<<32-Le(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ly++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wl,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Dl.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tl,useCacheRefresh:function(){return yt().memoizedState=Gy.bind(null,pe)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((We&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},jl={readContext:ut,use:wr,useCallback:xd,useContext:ut,useEffect:El,useImperativeHandle:Td,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Sd,useReducer:br,useRef:pd,useState:function(){return br(In)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Je();return Ad(n,Oe.memoizedState,e,t)},useTransition:function(){var e=br(In)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:ed,useId:Md,useHostTransitionStatus:Wl,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Je();return rd(n,Oe,e,t)},useMemoCache:Tl,useCacheRefresh:zd};jl.useEffectEvent=wd;var Rd={readContext:ut,use:wr,useCallback:xd,useContext:ut,useEffect:El,useImperativeHandle:Td,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Sd,useReducer:Sl,useRef:pd,useState:function(){return Sl(In)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Je();return Oe===null?Ml(n,e,t):Ad(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Sl(In)[0],t=Je().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:ed,useId:Md,useHostTransitionStatus:Wl,useFormState:gd,useActionState:gd,useOptimistic:function(e,t){var n=Je();return Oe!==null?rd(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tl,useCacheRefresh:zd};Rd.useEffectEvent=wd;function Bl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ot(),l=Fn(i);l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(At(t,e,i),Ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ot(),l=Fn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(At(t,e,i),Ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),i=Fn(n);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,n),t!==null&&(At(t,e,n),Ki(t,e,n))}};function Hd(e,t,n,i,l,h,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,m):t.prototype&&t.prototype.isPureReactComponent?!Li(n,i)||!Li(l,h):!0}function Od(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Rl.enqueueReplaceState(t,t.state,null)}function Aa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Nd(e){er(e)}function qd(e){console.error(e)}function Ld(e){er(e)}function xr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _d(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hl(e,t,n){return n=Fn(n),n.tag=3,n.payload={element:null},n.callback=function(){xr(e,t)},n}function Yd(e){return e=Fn(e),e.tag=3,e}function Ud(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var h=i.value;e.payload=function(){return l(h)},e.callback=function(){_d(t,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){_d(t,n,i),typeof l!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Ky(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,l,!0),n=jt.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?Rr():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===ur?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),sh(e,i,l)),!1;case 22:return n.flags|=65536,i===ur?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),sh(e,i,l)),!1}throw Error(s(435,n.tag))}return sh(e,i,l),Rr(),!1}if(Ce)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==tl&&(e=Error(s(422),{cause:i}),Ui(Ft(e,n)))):(i!==tl&&(t=Error(s(423),{cause:i}),Ui(Ft(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Ft(i,n),l=Hl(e.stateNode,i,l),dl(e,l),Ze!==4&&(Ze=2)),!1;var h=Error(s(520),{cause:i});if(h=Ft(h,n),lo===null?lo=[h]:lo.push(h),Ze!==4&&(Ze=2),t===null)return!0;i=Ft(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Hl(n.stateNode,i,e),dl(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Jn===null||!Jn.has(h))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Yd(l),Ud(l,e,n,i),dl(n,l),!1}n=n.return}while(n!==null);return!1}var Ol=Error(s(461)),tt=!1;function ct(e,t,n,i){t.child=e===null?Qc(t,null,n,i):xa(t,e.child,n,i)}function Vd(e,t,n,i,l){n=n.render;var h=t.ref;if("ref"in i){var m={};for(var b in i)b!=="ref"&&(m[b]=i[b])}else m=i;return ba(t),i=wl(e,t,n,m,h,l),b=bl(),e!==null&&!tt?(vl(e,t,l),En(e,t,l)):(Ce&&b&&$s(t),t.flags|=1,ct(e,t,i,l),t.child)}function Fd(e,t,n,i,l){if(e===null){var h=n.type;return typeof h=="function"&&!Zs(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,Gd(e,t,h,i,l)):(e=ir(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!Fl(e,l)){var m=h.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(m,i)&&e.ref===t.ref)return En(e,t,l)}return t.flags|=1,e=kn(h,i),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,i,l){if(e!==null){var h=e.memoizedProps;if(Li(h,i)&&e.ref===t.ref)if(tt=!1,t.pendingProps=i=h,Fl(e,l))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,En(e,t,l)}return Nl(e,t,n,i,l)}function Qd(e,t,n,i){var l=i.children,h=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(h=h!==null?h.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~h}else i=0,t.child=null;return Kd(e,t,h,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,h!==null?h.cachePool:null),h!==null?Zc(t,h):fl(),Pc(t);else return i=t.lanes=536870912,Kd(e,t,h!==null?h.baseLanes|n:n,n,i)}else h!==null?(lr(t,h.cachePool),Zc(t,h),Kn(),t.memoizedState=null):(e!==null&&lr(t,null),fl(),Kn());return ct(e,t,l,n),t.child}function to(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kd(e,t,n,i,l){var h=ll();return h=h===null?null:{parent:$e._currentValue,pool:h},t.memoizedState={baseLanes:n,cachePool:h},e!==null&&lr(t,null),fl(),Pc(t),e!==null&&Ja(e,t,i,!0),t.childLanes=l,null}function Sr(e,t){return t=Ir({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xd(e,t,n){return xa(t,e.child,null,n),e=Sr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Xy(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(i.mode==="hidden")return e=Sr(t,i),t.lanes=536870912,to(null,e);if(pl(t),(e=Ve)?(e=lf(e,Kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:rn,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Dc(e),n.return=t,t.child=n,ht=t,Ve=null)):e=null,e===null)throw Yn(t);return t.lanes=536870912,null}return Sr(t,i)}var h=e.memoizedState;if(h!==null){var m=h.dehydrated;if(pl(t),l)if(t.flags&256)t.flags&=-257,t=Xd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(tt||Ja(e,t,n,!1),l=(n&e.childLanes)!==0,tt||l){if(i=_e,i!==null&&(m=qu(i,n),m!==0&&m!==h.retryLane))throw h.retryLane=m,ga(e,m),At(i,e,m),Ol;Rr(),t=Xd(e,t,n)}else e=h.treeContext,Ve=Zt(m.nextSibling),ht=t,Ce=!0,_n=null,Kt=!1,e!==null&&Rc(t,e),t=Sr(t,i),t.flags|=4096;return t}return e=kn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ar(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nl(e,t,n,i,l){return ba(t),n=wl(e,t,n,i,void 0,l),i=bl(),e!==null&&!tt?(vl(e,t,l),En(e,t,l)):(Ce&&i&&$s(t),t.flags|=1,ct(e,t,n,l),t.child)}function Zd(e,t,n,i,l,h){return ba(t),t.updateQueue=null,n=$c(t,i,n,l),Jc(e),i=bl(),e!==null&&!tt?(vl(e,t,h),En(e,t,h)):(Ce&&i&&$s(t),t.flags|=1,ct(e,t,n,h),t.child)}function Pd(e,t,n,i,l){if(ba(t),t.stateNode===null){var h=Ka,m=n.contextType;typeof m=="object"&&m!==null&&(h=ut(m)),h=new n(i,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Rl,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=i,h.state=t.memoizedState,h.refs={},ul(t),m=n.contextType,h.context=typeof m=="object"&&m!==null?ut(m):Ka,h.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Bl(t,n,m,i),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(m=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),m!==h.state&&Rl.enqueueReplaceState(h,h.state,null),Zi(t,i,h,l),Xi(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){h=t.stateNode;var b=t.memoizedProps,S=Aa(n,b);h.props=S;var M=h.context,O=n.contextType;m=Ka,typeof O=="object"&&O!==null&&(m=ut(O));var U=n.getDerivedStateFromProps;O=typeof U=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,O||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||M!==m)&&Od(t,h,i,m),Vn=!1;var z=t.memoizedState;h.state=z,Zi(t,i,h,l),Xi(),M=t.memoizedState,b||z!==M||Vn?(typeof U=="function"&&(Bl(t,n,U,i),M=t.memoizedState),(S=Vn||Hd(t,n,S,i,z,M,m))?(O||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=M),h.props=i,h.state=M,h.context=m,i=S):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,cl(e,t),m=t.memoizedProps,O=Aa(n,m),h.props=O,U=t.pendingProps,z=h.context,M=n.contextType,S=Ka,typeof M=="object"&&M!==null&&(S=ut(M)),b=n.getDerivedStateFromProps,(M=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(m!==U||z!==S)&&Od(t,h,i,S),Vn=!1,z=t.memoizedState,h.state=z,Zi(t,i,h,l),Xi();var B=t.memoizedState;m!==U||z!==B||Vn||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof b=="function"&&(Bl(t,n,b,i),B=t.memoizedState),(O=Vn||Hd(t,n,O,i,z,B,S)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(M||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,B,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,B,S)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),h.props=i,h.state=B,h.context=S,i=O):(typeof h.componentDidUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return h=i,Ar(e,t),i=(t.flags&128)!==0,h||i?(h=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&i?(t.child=xa(t,e.child,null,l),t.child=xa(t,null,n,l)):ct(e,t,n,l),t.memoizedState=h.state,e=t.child):e=En(e,t,l),e}function Jd(e,t,n,i){return ya(),t.flags|=256,ct(e,t,n,i),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ll(e){return{baseLanes:e,cachePool:_c()}}function _l(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function $d(e,t,n){var i=t.pendingProps,l=!1,h=(t.flags&128)!==0,m;if((m=h)||(m=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(l?Qn(t):Kn(),(e=Ve)?(e=lf(e,Kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:rn,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Dc(e),n.return=t,t.child=n,ht=t,Ve=null)):e=null,e===null)throw Yn(t);return xh(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,l?(Kn(),l=t.mode,b=Ir({mode:"hidden",children:b},l),i=pa(i,l,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Ll(n),i.childLanes=_l(e,m,n),t.memoizedState=ql,to(null,i)):(Qn(t),Yl(t,b))}var S=e.memoizedState;if(S!==null&&(b=S.dehydrated,b!==null)){if(h)t.flags&256?(Qn(t),t.flags&=-257,t=Ul(e,t,n)):t.memoizedState!==null?(Kn(),t.child=e.child,t.flags|=128,t=null):(Kn(),b=i.fallback,l=t.mode,i=Ir({mode:"visible",children:i.children},l),b=pa(b,l,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,xa(t,e.child,null,n),i=t.child,i.memoizedState=Ll(n),i.childLanes=_l(e,m,n),t.memoizedState=ql,t=to(null,i));else if(Qn(t),xh(b)){if(m=b.nextSibling&&b.nextSibling.dataset,m)var M=m.dgst;m=M,i=Error(s(419)),i.stack="",i.digest=m,Ui({value:i,source:null,stack:null}),t=Ul(e,t,n)}else if(tt||Ja(e,t,n,!1),m=(n&e.childLanes)!==0,tt||m){if(m=_e,m!==null&&(i=qu(m,n),i!==0&&i!==S.retryLane))throw S.retryLane=i,ga(e,i),At(m,e,i),Ol;Th(b)||Rr(),t=Ul(e,t,n)}else Th(b)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ve=Zt(b.nextSibling),ht=t,Ce=!0,_n=null,Kt=!1,e!==null&&Rc(t,e),t=Yl(t,i.children),t.flags|=4096);return t}return l?(Kn(),b=i.fallback,l=t.mode,S=e.child,M=S.sibling,i=kn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,M!==null?b=kn(M,b):(b=pa(b,l,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,to(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Ll(n):(l=b.cachePool,l!==null?(S=$e._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=_c(),b={baseLanes:b.baseLanes|n,cachePool:l}),i.memoizedState=b,i.childLanes=_l(e,m,n),t.memoizedState=ql,to(e.child,i)):(Qn(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Yl(e,t){return t=Ir({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ir(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function Ul(e,t,n){return xa(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),il(e.return,t,n)}function Vl(e,t,n,i,l,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:h}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=i,m.tail=n,m.tailMode=l,m.treeForkCount=h)}function tm(e,t,n){var i=t.pendingProps,l=i.revealOrder,h=i.tail;i=i.children;var m=Pe.current,b=(m&2)!==0;if(b?(m=m&1|2,t.flags|=128):m&=1,k(Pe,m),ct(e,t,i,n),i=Ce?Yi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,h,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,h,i);break;case"together":Vl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function Zy(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Un(t,$e,e.memoizedState.cache),ya();break;case 27:case 5:_t(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?$d(e,t,n):(Qn(t),e=En(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return tm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(Pe,Pe.current),i)break;return null;case 22:return t.lanes=0,Qd(e,t,n,t.pendingProps);case 24:Un(t,$e,e.memoizedState.cache)}return En(e,t,n)}function nm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!Fl(e,n)&&(t.flags&128)===0)return tt=!1,Zy(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ce&&(t.flags&1048576)!==0&&Bc(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Zs(e)?(i=Aa(e,i),t.tag=1,t=Pd(null,t,e,i,n)):(t.tag=0,t=Nl(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===oe){t.tag=11,t=Vd(null,t,e,i,n);break e}else if(l===P){t.tag=14,t=Fd(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Nl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Aa(i,t.pendingProps),Pd(e,t,i,l,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var h=t.memoizedState;l=h.element,cl(e,t),Zi(t,i,null,n);var m=t.memoizedState;if(i=m.cache,Un(t,$e,i),i!==h.cache&&ol(t,[$e],n,!0),Xi(),i=m.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=Jd(e,t,i,n);break e}else if(i!==l){l=Ft(Error(s(424)),t),Ui(l),t=Jd(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Zt(e.firstChild),ht=t,Ce=!0,_n=null,Kt=!0,n=Qc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),i===l){t=En(e,t,n);break e}ct(e,t,i,n)}t=t.child}return t;case 26:return Ar(e,t),e===null?(n=ff(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,i=Yr(re.current).createElement(n),i[lt]=t,i[bt]=e,dt(i,n,e),rt(i),t.stateNode=i):t.memoizedState=ff(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _t(t),e===null&&Ce&&(i=t.stateNode=cf(t.type,t.pendingProps,re.current),ht=t,Kt=!0,l=Ve,na(t.type)?(Sh=l,Ve=Zt(i.firstChild)):Ve=l),ct(e,t,t.pendingProps.children,n),Ar(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((l=i=Ve)&&(i=Iw(i,t.type,t.pendingProps,Kt),i!==null?(t.stateNode=i,ht=t,Ve=Zt(i.firstChild),Kt=!1,l=!0):l=!1),l||Yn(t)),_t(t),l=t.type,h=t.pendingProps,m=e!==null?e.memoizedProps:null,i=h.children,bh(l,h)?i=null:m!==null&&bh(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,_y,null,null,n),yo._currentValue=l),Ar(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&Ce&&((e=n=Ve)&&(n=Ew(n,t.pendingProps,Kt),n!==null?(t.stateNode=n,ht=t,Ve=null,e=!0):e=!1),e||Yn(t)),null;case 13:return $d(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=xa(t,null,i,n):ct(e,t,i,n),t.child;case 11:return Vd(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Un(t,t.type,i.value),ct(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,ba(t),l=ut(l),i=i(l),t.flags|=1,ct(e,t,i,n),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 19:return tm(e,t,n);case 31:return Xy(e,t,n);case 22:return Qd(e,t,n,t.pendingProps);case 24:return ba(t),i=ut($e),e===null?(l=ll(),l===null&&(l=_e,h=rl(),l.pooledCache=h,h.refCount++,h!==null&&(l.pooledCacheLanes|=n),l=h),t.memoizedState={parent:i,cache:l},ul(t),Un(t,$e,l)):((e.lanes&n)!==0&&(cl(e,t),Zi(t,null,null,n),Xi()),l=e.memoizedState,h=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Un(t,$e,i)):(i=h.cache,Un(t,$e,i),i!==l.cache&&ol(t,[$e],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Cn(e){e.flags|=4}function Gl(e,t,n,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Mm())e.flags|=8192;else throw Ta=ur,hl}else e.flags&=-16777217}function am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bf(t))if(Mm())e.flags|=8192;else throw Ta=ur,hl}function Er(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hu():536870912,e.lanes|=t,ui|=t)}function no(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Py(e,t,n){var i=t.pendingProps;switch(el(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Sn($e),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nl())),Fe(t),null;case 26:var l=t.type,h=t.memoizedState;return e===null?(Cn(t),h!==null?(Fe(t),am(t,h)):(Fe(t),Gl(t,l,null,i,n))):h?h!==e.memoizedState?(Cn(t),Fe(t),am(t,h)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Cn(t),Fe(t),Gl(t,l,e,i,n)),null;case 27:if(gn(t),n=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}e=J.current,Pa(t)?Hc(t):(e=cf(l,i,n),t.stateNode=e,Cn(t))}return Fe(t),null;case 5:if(gn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}if(h=J.current,Pa(t))Hc(t);else{var m=Yr(re.current);switch(h){case 1:h=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:h=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":h=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":h=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":h=m.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof i.is=="string"?m.createElement("select",{is:i.is}):m.createElement("select"),i.multiple?h.multiple=!0:i.size&&(h.size=i.size);break;default:h=typeof i.is=="string"?m.createElement(l,{is:i.is}):m.createElement(l)}}h[lt]=t,h[bt]=i;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)h.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=h;e:switch(dt(h,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Cn(t)}}return Fe(t),Gl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Cn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Pa(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=ht,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$m(e.nodeValue,n)),e||Yn(t,!0)}else e=Yr(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Pa(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Fe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),l=!1}else l=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),h=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Er(t,t.updateQueue),Fe(t),null);case 4:return He(),e===null&&fh(t.stateNode.containerInfo),Fe(t),null;case 10:return Sn(t.type),Fe(t),null;case 19:if(L(Pe),i=t.memoizedState,i===null)return Fe(t),null;if(l=(t.flags&128)!==0,h=i.rendering,h===null)if(l)no(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=fr(e),h!==null){for(t.flags|=128,no(i,!1),e=h.updateQueue,t.updateQueue=e,Er(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wc(n,e),n=n.sibling;return k(Pe,Pe.current&1|2),Ce&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gt()>Dr&&(t.flags|=128,l=!0,no(i,!1),t.lanes=4194304)}else{if(!l)if(e=fr(h),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Er(t,e),no(i,!0),i.tail===null&&i.tailMode==="hidden"&&!h.alternate&&!Ce)return Fe(t),null}else 2*gt()-i.renderingStartTime>Dr&&n!==536870912&&(t.flags|=128,l=!0,no(i,!1),t.lanes=4194304);i.isBackwards?(h.sibling=t.child,t.child=h):(e=i.last,e!==null?e.sibling=h:t.child=h,i.last=h)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,n=Pe.current,k(Pe,l?n&1|2:n&1),Ce&&Tn(t,i.treeForkCount),e):(Fe(t),null);case 22:case 23:return Bt(t),gl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&Er(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&L(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn($e),Fe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Jy(e,t){switch(el(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn($e),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Pe),null;case 4:return He(),null;case 10:return Sn(t.type),null;case 22:case 23:return Bt(t),gl(),e!==null&&L(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn($e),null;case 25:return null;default:return null}}function im(e,t){switch(el(t),t.tag){case 3:Sn($e),He();break;case 26:case 27:case 5:gn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:L(Pe);break;case 10:Sn(t.type);break;case 22:case 23:Bt(t),gl(),e!==null&&L(va);break;case 24:Sn($e)}}function ao(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var h=n.create,m=n.inst;i=h(),m.destroy=i}n=n.next}while(n!==l)}}catch(b){Re(t,t.return,b)}}function Xn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var h=l.next;i=h;do{if((i.tag&e)===e){var m=i.inst,b=m.destroy;if(b!==void 0){m.destroy=void 0,l=t;var S=n,M=b;try{M()}catch(O){Re(l,S,O)}}}i=i.next}while(i!==h)}}catch(O){Re(t,t.return,O)}}function om(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xc(t,n)}catch(i){Re(e,e.return,i)}}}function rm(e,t,n){n.props=Aa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Re(e,t,i)}}function io(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Re(e,t,l)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Re(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Re(e,t,l)}else n.current=null}function sm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Re(e,e.return,l)}}function Ql(e,t,n){try{var i=e.stateNode;vw(i,e.type,n,t),i[bt]=t}catch(l){Re(e,e.return,l)}}function lm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Kl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Cr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Cr(e,t,n),e=e.sibling;e!==null;)Cr(e,t,n),e=e.sibling}function hm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);dt(t,i,n),t[lt]=e,t[bt]=n}catch(h){Re(e,e.return,h)}}var Mn=!1,nt=!1,Zl=!1,um=typeof WeakSet=="function"?WeakSet:Set,st=null;function $y(e,t){if(e=e.containerInfo,yh=Xr,e=Tc(e),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var m=0,b=-1,S=-1,M=0,O=0,U=e,z=null;t:for(;;){for(var B;U!==n||l!==0&&U.nodeType!==3||(b=m+l),U!==h||i!==0&&U.nodeType!==3||(S=m+i),U.nodeType===3&&(m+=U.nodeValue.length),(B=U.firstChild)!==null;)z=U,U=B;for(;;){if(U===e)break t;if(z===n&&++M===l&&(b=m),z===h&&++O===i&&(S=m),(B=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=B}n=b===-1||S===-1?null:{start:b,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:e,selectionRange:n},Xr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,h=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,l=h.memoizedProps,h=h.memoizedState,i=n.stateNode;try{var te=Aa(n.type,l);e=i.getSnapshotBeforeUpdate(te,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(he){Re(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)kh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function cm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wn(e,n),i&4&&ao(5,n);break;case 1:if(Wn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Re(n,n.return,m)}else{var l=Aa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Re(n,n.return,m)}}i&64&&om(n),i&512&&io(n,n.return);break;case 3:if(Wn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xc(e,t)}catch(m){Re(n,n.return,m)}}break;case 27:t===null&&i&4&&hm(n);case 26:case 5:Wn(e,n),t===null&&i&4&&sm(n),i&512&&io(n,n.return);break;case 12:Wn(e,n);break;case 31:Wn(e,n),i&4&&fm(e,n);break;case 13:Wn(e,n),i&4&&gm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lw.bind(null,n),Cw(e,n))));break;case 22:if(i=n.memoizedState!==null||Mn,!i){t=t!==null&&t.memoizedState!==null||nt,l=Mn;var h=nt;Mn=i,(nt=t)&&!h?Dn(e,n,(n.subtreeFlags&8772)!==0):Wn(e,n),Mn=l,nt=h}break;case 30:break;default:Wn(e,n)}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Is(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kt=!1;function zn(e,t,n){for(n=n.child;n!==null;)mm(e,t,n),n=n.sibling}function mm(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(pt,n)}catch{}switch(n.tag){case 26:nt||ln(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||ln(n,t);var i=Qe,l=kt;na(n.type)&&(Qe=n.stateNode,kt=!1),zn(e,t,n),fo(n.stateNode),Qe=i,kt=l;break;case 5:nt||ln(n,t);case 6:if(i=Qe,l=kt,Qe=null,zn(e,t,n),Qe=i,kt=l,Qe!==null)if(kt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(h){Re(n,t,h)}else try{Qe.removeChild(n.stateNode)}catch(h){Re(n,t,h)}break;case 18:Qe!==null&&(kt?(e=Qe,rf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wi(e)):rf(Qe,n.stateNode));break;case 4:i=Qe,l=kt,Qe=n.stateNode.containerInfo,kt=!0,zn(e,t,n),Qe=i,kt=l;break;case 0:case 11:case 14:case 15:Xn(2,n,t),nt||Xn(4,n,t),zn(e,t,n);break;case 1:nt||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&rm(n,t,i)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:nt=(i=nt)||n.memoizedState!==null,zn(e,t,n),nt=i;break;default:zn(e,t,n)}}function fm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(n){Re(t,t.return,n)}}}function gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(n){Re(t,t.return,n)}}function ew(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new um),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new um),t;default:throw Error(s(435,e.tag))}}function Mr(e,t){var n=ew(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=hw.bind(null,e,i);i.then(l,l)}})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],h=e,m=t,b=m;e:for(;b!==null;){switch(b.tag){case 27:if(na(b.type)){Qe=b.stateNode,kt=!1;break e}break;case 5:Qe=b.stateNode,kt=!1;break e;case 3:case 4:Qe=b.stateNode.containerInfo,kt=!0;break e}b=b.return}if(Qe===null)throw Error(s(160));mm(h,m,l),Qe=null,kt=!1,h=l.alternate,h!==null&&(h.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pm(t,e),t=t.sibling}var nn=null;function pm(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),xt(e),i&4&&(Xn(3,e,e.return),ao(3,e),Xn(5,e,e.return));break;case 1:Tt(t,e),xt(e),i&512&&(nt||n===null||ln(n,n.return)),i&64&&Mn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=nn;if(Tt(t,e),xt(e),i&512&&(nt||n===null||ln(n,n.return)),i&4){var h=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":h=l.getElementsByTagName("title")[0],(!h||h[Wi]||h[lt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=l.createElement(i),l.head.insertBefore(h,l.querySelector("head > title"))),dt(h,i,n),h[lt]=e,rt(h),i=h;break e;case"link":var m=yf("link","href",l).get(i+(n.href||""));if(m){for(var b=0;b<m.length;b++)if(h=m[b],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(b,1);break t}}h=l.createElement(i),dt(h,i,n),l.head.appendChild(h);break;case"meta":if(m=yf("meta","content",l).get(i+(n.content||""))){for(b=0;b<m.length;b++)if(h=m[b],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(b,1);break t}}h=l.createElement(i),dt(h,i,n),l.head.appendChild(h);break;default:throw Error(s(468,i))}h[lt]=e,rt(h),i=h}e.stateNode=i}else wf(l,e.type,e.stateNode);else e.stateNode=pf(l,i,e.memoizedProps);else h!==i?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,i===null?wf(l,e.type,e.stateNode):pf(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ql(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),xt(e),i&512&&(nt||n===null||ln(n,n.return)),n!==null&&i&4&&Ql(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),xt(e),i&512&&(nt||n===null||ln(n,n.return)),e.flags&32){l=e.stateNode;try{_a(l,"")}catch(te){Re(e,e.return,te)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Ql(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Zl=!0);break;case 6:if(Tt(t,e),xt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){Re(e,e.return,te)}}break;case 3:if(Fr=null,l=nn,nn=Ur(t.containerInfo),Tt(t,e),nn=l,xt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(te){Re(e,e.return,te)}Zl&&(Zl=!1,ym(e));break;case 4:i=nn,nn=Ur(e.stateNode.containerInfo),Tt(t,e),xt(e),nn=i;break;case 12:Tt(t,e),xt(e);break;case 31:Tt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 13:Tt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Wr=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 22:l=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,M=Mn,O=nt;if(Mn=M||l,nt=O||S,Tt(t,e),nt=O,Mn=M,xt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||S||Mn||nt||Ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(h=S.stateNode,l)m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{b=S.stateNode;var U=S.memoizedProps.style,z=U!=null&&U.hasOwnProperty("display")?U.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(te){Re(S,S.return,te)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(te){Re(S,S.return,te)}}}else if(t.tag===18){if(n===null){S=t;try{var B=S.stateNode;l?sf(B,!0):sf(S.stateNode,!1)}catch(te){Re(S,S.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Mr(e,n))));break;case 19:Tt(t,e),xt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 30:break;case 21:break;default:Tt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(lm(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,h=Kl(e);Cr(e,h,l);break;case 5:var m=n.stateNode;n.flags&32&&(_a(m,""),n.flags&=-33);var b=Kl(e);Cr(e,b,m);break;case 3:case 4:var S=n.stateNode.containerInfo,M=Kl(e);Xl(e,M,S);break;default:throw Error(s(161))}}catch(O){Re(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ym(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cm(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Ia(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&rm(t,t.return,n),Ia(t);break;case 27:fo(t.stateNode);case 26:case 5:ln(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Dn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,h=t,m=h.flags;switch(h.tag){case 0:case 11:case 15:Dn(l,h,n),ao(4,h);break;case 1:if(Dn(l,h,n),i=h,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Re(i,i.return,M)}if(i=h,l=i.updateQueue,l!==null){var b=i.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)Kc(S[l],b)}catch(M){Re(i,i.return,M)}}n&&m&64&&om(h),io(h,h.return);break;case 27:hm(h);case 26:case 5:Dn(l,h,n),n&&i===null&&m&4&&sm(h),io(h,h.return);break;case 12:Dn(l,h,n);break;case 31:Dn(l,h,n),n&&m&4&&fm(l,h);break;case 13:Dn(l,h,n),n&&m&4&&gm(l,h);break;case 22:h.memoizedState===null&&Dn(l,h,n),io(h,h.return);break;case 30:break;default:Dn(l,h,n)}t=t.sibling}}function Pl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vi(n))}function Jl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function an(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(e,t,n,i),t=t.sibling}function wm(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,i),l&2048&&ao(9,t);break;case 1:an(e,t,n,i);break;case 3:an(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(l&2048){an(e,t,n,i),e=t.stateNode;try{var h=t.memoizedProps,m=h.id,b=h.onPostCommit;typeof b=="function"&&b(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Re(t,t.return,S)}}else an(e,t,n,i);break;case 31:an(e,t,n,i);break;case 13:an(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,m=t.alternate,t.memoizedState!==null?h._visibility&2?an(e,t,n,i):oo(e,t):h._visibility&2?an(e,t,n,i):(h._visibility|=2,si(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Pl(m,t);break;case 24:an(e,t,n,i),l&2048&&Jl(t.alternate,t);break;default:an(e,t,n,i)}}function si(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var h=e,m=t,b=n,S=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:si(h,m,b,S,l),ao(8,m);break;case 23:break;case 22:var O=m.stateNode;m.memoizedState!==null?O._visibility&2?si(h,m,b,S,l):oo(h,m):(O._visibility|=2,si(h,m,b,S,l)),l&&M&2048&&Pl(m.alternate,m);break;case 24:si(h,m,b,S,l),l&&M&2048&&Jl(m.alternate,m);break;default:si(h,m,b,S,l)}t=t.sibling}}function oo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:oo(n,i),l&2048&&Pl(i.alternate,i);break;case 24:oo(n,i),l&2048&&Jl(i.alternate,i);break;default:oo(n,i)}t=t.sibling}}var ro=8192;function li(e,t,n){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)bm(e,t,n),e=e.sibling}function bm(e,t,n){switch(e.tag){case 26:li(e,t,n),e.flags&ro&&e.memoizedState!==null&&Lw(n,nn,e.memoizedState,e.memoizedProps);break;case 5:li(e,t,n);break;case 3:case 4:var i=nn;nn=Ur(e.stateNode.containerInfo),li(e,t,n),nn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ro,ro=16777216,li(e,t,n),ro=i):li(e,t,n));break;default:li(e,t,n)}}function vm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function so(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,Tm(i,e)}vm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)km(e),e=e.sibling}function km(e){switch(e.tag){case 0:case 11:case 15:so(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:so(e);break;case 12:so(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zr(e)):so(e);break;default:so(e)}}function zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,Tm(i,e)}vm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),zr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zr(t));break;default:zr(t)}e=e.sibling}}function Tm(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,st=i;else e:for(n=e;st!==null;){i=st;var l=i.sibling,h=i.return;if(dm(i),i===n){st=null;break e}if(l!==null){l.return=h,st=l;break e}st=h}}}var tw={getCacheForType:function(e){var t=ut($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ut($e).controller.signal}},nw=typeof WeakMap=="function"?WeakMap:Map,We=0,_e=null,xe=null,Ie=0,Be=0,Rt=null,Zn=!1,hi=!1,$l=!1,jn=0,Ze=0,Pn=0,Ea=0,eh=0,Ht=0,ui=0,lo=null,St=null,th=!1,Wr=0,xm=0,Dr=1/0,jr=null,Jn=null,ot=0,$n=null,ci=null,Bn=0,nh=0,ah=null,Sm=null,ho=0,ih=null;function Ot(){return(We&2)!==0&&Ie!==0?Ie&-Ie:W.T!==null?uh():Lu()}function Am(){if(Ht===0)if((Ie&536870912)===0||Ce){var e=_o;_o<<=1,(_o&3932160)===0&&(_o=262144),Ht=e}else Ht=536870912;return e=jt.current,e!==null&&(e.flags|=32),Ht}function At(e,t,n){(e===_e&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(di(e,0),ea(e,Ie,Ht,!1)),zi(e,n),((We&2)===0||e!==_e)&&(e===_e&&((We&2)===0&&(Ea|=n),Ze===4&&ea(e,Ie,Ht,!1)),hn(e))}function Im(e,t,n){if((We&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mi(e,t),l=i?ow(e,t):rh(e,t,!0),h=i;do{if(l===0){hi&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!aw(n)){l=rh(e,t,!1),h=!1;continue}if(l===2){if(h=t,e.errorRecoveryDisabledLanes&h)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var b=e;l=lo;var S=b.current.memoizedState.isDehydrated;if(S&&(di(b,m).flags|=256),m=rh(b,m,!1),m!==2){if($l&&!S){b.errorRecoveryDisabledLanes|=h,Ea|=h,l=4;break e}h=St,St=l,h!==null&&(St===null?St=h:St.push.apply(St,h))}l=m}if(h=!1,l!==2)continue}}if(l===1){di(e,0),ea(e,t,0,!0);break}e:{switch(i=e,h=l,h){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,Ht,!Zn);break e;case 2:St=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Wr+300-gt(),10<l)){if(ea(i,t,Ht,!Zn),Uo(i,0,!0)!==0)break e;Bn=t,i.timeoutHandle=af(Em.bind(null,i,n,St,jr,th,t,Ht,Ea,ui,Zn,h,"Throttled",-0,0),l);break e}Em(i,n,St,jr,th,t,Ht,Ea,ui,Zn,h,null,-0,0)}}break}while(!0);hn(e)}function Em(e,t,n,i,l,h,m,b,S,M,O,U,z,B){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},bm(t,h,U);var te=(h&62914560)===h?Wr-gt():(h&4194048)===h?xm-gt():0;if(te=_w(U,te),te!==null){Bn=h,e.cancelPendingCommit=te(Rm.bind(null,e,t,h,n,i,l,m,b,S,O,U,null,z,B)),ea(e,h,m,!M);return}}Rm(e,t,h,n,i,l,m,b,S)}function aw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],h=l.getSnapshot;l=l.value;try{if(!Wt(h(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t&=~eh,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var h=31-Le(l),m=1<<h;i[h]=-1,l&=~m}n!==0&&Ou(e,n,t)}function Br(){return(We&6)===0?(uo(0),!1):!0}function oh(){if(xe!==null){if(Be===0)var e=xe.return;else e=xe,xn=wa=null,kl(e),ni=null,Gi=0,e=xe;for(;e!==null;)im(e.alternate,e),e=e.return;xe=null}}function di(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Bn=0,oh(),_e=e,xe=n=kn(e.current,null),Ie=t,Be=0,Rt=null,Zn=!1,hi=Mi(e,t),$l=!1,ui=Ht=eh=Ea=Pn=Ze=0,St=lo=null,th=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Le(i),h=1<<l;t|=e[l],i&=~h}return jn=t,tr(),n}function Cm(e,t){pe=null,W.H=eo,t===ti||t===hr?(t=Vc(),Be=3):t===hl?(t=Vc(),Be=4):Be=t===Ol?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,xe===null&&(Ze=1,xr(e,Ft(t,e.current)))}function Mm(){var e=jt.current;return e===null?!0:(Ie&4194048)===Ie?Xt===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Xt:!1}function zm(){var e=W.H;return W.H=eo,e===null?eo:e}function Wm(){var e=W.A;return W.A=tw,e}function Rr(){Ze=4,Zn||(Ie&4194048)!==Ie&&jt.current!==null||(hi=!0),(Pn&134217727)===0&&(Ea&134217727)===0||_e===null||ea(_e,Ie,Ht,!1)}function rh(e,t,n){var i=We;We|=2;var l=zm(),h=Wm();(_e!==e||Ie!==t)&&(jr=null,di(e,t)),t=!1;var m=Ze;e:do try{if(Be!==0&&xe!==null){var b=xe,S=Rt;switch(Be){case 8:oh(),m=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var M=Be;if(Be=0,Rt=null,mi(e,b,S,M),n&&hi){m=0;break e}break;default:M=Be,Be=0,Rt=null,mi(e,b,S,M)}}iw(),m=Ze;break}catch(O){Cm(e,O)}while(!0);return t&&e.shellSuspendCounter++,xn=wa=null,We=i,W.H=l,W.A=h,xe===null&&(_e=null,Ie=0,tr()),m}function iw(){for(;xe!==null;)Dm(xe)}function ow(e,t){var n=We;We|=2;var i=zm(),l=Wm();_e!==e||Ie!==t?(jr=null,Dr=gt()+500,di(e,t)):hi=Mi(e,t);e:do try{if(Be!==0&&xe!==null){t=xe;var h=Rt;t:switch(Be){case 1:Be=0,Rt=null,mi(e,t,h,1);break;case 2:case 9:if(Yc(h)){Be=0,Rt=null,jm(t);break}t=function(){Be!==2&&Be!==9||_e!==e||(Be=7),hn(e)},h.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Yc(h)?(Be=0,Rt=null,jm(t)):(Be=0,Rt=null,mi(e,t,h,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var b=xe;if(m?bf(m):b.stateNode.complete){Be=0,Rt=null;var S=b.sibling;if(S!==null)xe=S;else{var M=b.return;M!==null?(xe=M,Hr(M)):xe=null}break t}}Be=0,Rt=null,mi(e,t,h,5);break;case 6:Be=0,Rt=null,mi(e,t,h,6);break;case 8:oh(),Ze=6;break e;default:throw Error(s(462))}}rw();break}catch(O){Cm(e,O)}while(!0);return xn=wa=null,W.H=i,W.A=l,We=n,xe!==null?0:(_e=null,Ie=0,tr(),Ze)}function rw(){for(;xe!==null&&!bs();)Dm(xe)}function Dm(e){var t=nm(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?Hr(e):xe=t}function jm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zd(n,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=Zd(n,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:kl(t);default:im(n,t),t=xe=Wc(t,jn),t=nm(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?Hr(e):xe=t}function mi(e,t,n,i){xn=wa=null,kl(t),ni=null,Gi=0;var l=t.return;try{if(Ky(e,l,t,n,Ie)){Ze=1,xr(e,Ft(n,e.current)),xe=null;return}}catch(h){if(l!==null)throw xe=l,h;Ze=1,xr(e,Ft(n,e.current)),xe=null;return}t.flags&32768?(Ce||i===1?e=!0:hi||(Ie&536870912)!==0?e=!1:(Zn=e=!0,(i===2||i===9||i===3||i===6)&&(i=jt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Bm(t,e)):Hr(t)}function Hr(e){var t=e;do{if((t.flags&32768)!==0){Bm(t,Zn);return}e=t.return;var n=Py(t.alternate,t,jn);if(n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Ze===0&&(Ze=5)}function Bm(e,t){do{var n=Jy(e.alternate,e);if(n!==null){n.flags&=32767,xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){xe=e;return}xe=e=n}while(e!==null);Ze=6,xe=null}function Rm(e,t,n,i,l,h,m,b,S){e.cancelPendingCommit=null;do Or();while(ot!==0);if((We&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(h=t.lanes|t.childLanes,h|=Ks,qp(e,n,h,m,b,S),e===_e&&(xe=_e=null,Ie=0),ci=t,$n=e,Bn=n,nh=h,ah=l,Sm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uw(de,function(){return Lm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=W.T,W.T=null,l=F.p,F.p=2,m=We,We|=4;try{$y(e,t,n)}finally{We=m,F.p=l,W.T=i}}ot=1,Hm(),Om(),Nm()}}function Hm(){if(ot===1){ot=0;var e=$n,t=ci,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=W.T,W.T=null;var i=F.p;F.p=2;var l=We;We|=4;try{pm(t,e);var h=wh,m=Tc(e.containerInfo),b=h.focusedElem,S=h.selectionRange;if(m!==b&&b&&b.ownerDocument&&kc(b.ownerDocument.documentElement,b)){if(S!==null&&Us(b)){var M=S.start,O=S.end;if(O===void 0&&(O=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(O,b.value.length);else{var U=b.ownerDocument||document,z=U&&U.defaultView||window;if(z.getSelection){var B=z.getSelection(),te=b.textContent.length,he=Math.min(S.start,te),qe=S.end===void 0?he:Math.min(S.end,te);!B.extend&&he>qe&&(m=qe,qe=he,he=m);var E=vc(b,he),I=vc(b,qe);if(E&&I&&(B.rangeCount!==1||B.anchorNode!==E.node||B.anchorOffset!==E.offset||B.focusNode!==I.node||B.focusOffset!==I.offset)){var C=U.createRange();C.setStart(E.node,E.offset),B.removeAllRanges(),he>qe?(B.addRange(C),B.extend(I.node,I.offset)):(C.setEnd(I.node,I.offset),B.addRange(C))}}}}for(U=[],B=b;B=B.parentNode;)B.nodeType===1&&U.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<U.length;b++){var Y=U[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Xr=!!yh,wh=yh=null}finally{We=l,F.p=i,W.T=n}}e.current=t,ot=2}}function Om(){if(ot===2){ot=0;var e=$n,t=ci,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=W.T,W.T=null;var i=F.p;F.p=2;var l=We;We|=4;try{cm(e,t.alternate,t)}finally{We=l,F.p=i,W.T=n}}ot=3}}function Nm(){if(ot===4||ot===3){ot=0,vs();var e=$n,t=ci,n=Bn,i=Sm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,ci=$n=null,qm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Jn=null),Ss(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=W.T,l=F.p,F.p=2,W.T=null;try{for(var h=e.onRecoverableError,m=0;m<i.length;m++){var b=i[m];h(b.value,{componentStack:b.stack})}}finally{W.T=t,F.p=l}}(Bn&3)!==0&&Or(),hn(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===ih?ho++:(ho=0,ih=e):ho=0,uo(0)}}function qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function Or(){return Hm(),Om(),Nm(),Lm()}function Lm(){if(ot!==5)return!1;var e=$n,t=nh;nh=0;var n=Ss(Bn),i=W.T,l=F.p;try{F.p=32>n?32:n,W.T=null,n=ah,ah=null;var h=$n,m=Bn;if(ot=0,ci=$n=null,Bn=0,(We&6)!==0)throw Error(s(331));var b=We;if(We|=4,km(h.current),wm(h,h.current,m,n),We=b,uo(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(pt,h)}catch{}return!0}finally{F.p=l,W.T=i,qm(e,t)}}function _m(e,t,n){t=Ft(n,t),t=Hl(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(zi(e,2),hn(e))}function Re(e,t,n){if(e.tag===3)_m(e,e,n);else for(;t!==null;){if(t.tag===3){_m(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Jn===null||!Jn.has(i))){e=Ft(n,e),n=Yd(2),i=Gn(t,n,2),i!==null&&(Ud(n,i,t,e),zi(i,2),hn(i));break}}t=t.return}}function sh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new nw;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||($l=!0,l.add(n),e=sw.bind(null,e,t,n),t.then(e,e))}function sw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(Ie&n)===n&&(Ze===4||Ze===3&&(Ie&62914560)===Ie&&300>gt()-Wr?(We&2)===0&&di(e,0):eh|=n,ui===Ie&&(ui=0)),hn(e)}function Ym(e,t){t===0&&(t=Hu()),e=ga(e,t),e!==null&&(zi(e,t),hn(e))}function lw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function hw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Ym(e,n)}function uw(e,t){return Ba(e,t)}var Nr=null,fi=null,lh=!1,qr=!1,hh=!1,ta=0;function hn(e){e!==fi&&e.next===null&&(fi===null?Nr=fi=e:fi=fi.next=e),qr=!0,lh||(lh=!0,dw())}function uo(e,t){if(!hh&&qr){hh=!0;do for(var n=!1,i=Nr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var h=0;else{var m=i.suspendedLanes,b=i.pingedLanes;h=(1<<31-Le(42|e)+1)-1,h&=l&~(m&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,Gm(i,h))}else h=Ie,h=Uo(i,i===_e?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||Mi(i,h)||(n=!0,Gm(i,h));i=i.next}while(n);hh=!1}}function cw(){Um()}function Um(){qr=lh=!1;var e=0;ta!==0&&Tw()&&(e=ta);for(var t=gt(),n=null,i=Nr;i!==null;){var l=i.next,h=Vm(i,t);h===0?(i.next=null,n===null?Nr=l:n.next=l,l===null&&(fi=n)):(n=i,(e!==0||(h&3)!==0)&&(qr=!0)),i=l}ot!==0&&ot!==5||uo(e),ta!==0&&(ta=0)}function Vm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var m=31-Le(h),b=1<<m,S=l[m];S===-1?((b&n)===0||(b&i)!==0)&&(l[m]=Np(b,t)):S<=t&&(e.expiredLanes|=b),h&=~b}if(t=_e,n=Ie,n=Uo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ci(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ci(i),Ss(n)){case 2:case 8:n=Z;break;case 32:n=de;break;case 268435456:n=je;break;default:n=de}return i=Fm.bind(null,e),n=Ba(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ci(i),e.callbackPriority=2,e.callbackNode=null,2}function Fm(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var i=Ie;return i=Uo(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Im(e,i,t),Vm(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Fm.bind(null,e):null)}function Gm(e,t){if(Or())return null;Im(e,t,!0)}function dw(){Sw(function(){(We&6)!==0?Ba(_,cw):Um()})}function uh(){if(ta===0){var e=$a;e===0&&(e=Lo,Lo<<=1,(Lo&261888)===0&&(Lo=256)),ta=e}return ta}function Qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Km(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mw(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var h=Qm((l[bt]||null).action),m=i.submitter;m&&(t=(t=m[bt]||null)?Qm(t.formAction):m.getAttribute("formAction"),t!==null&&(h=t,m=null));var b=new Po("action","action",null,i,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var S=m?Km(l,m):new FormData(l);zl(n,{pending:!0,data:S,method:l.method,action:h},null,S)}}else typeof h=="function"&&(b.preventDefault(),S=m?Km(l,m):new FormData(l),zl(n,{pending:!0,data:S,method:l.method,action:h},h,S))},currentTarget:l}]})}}for(var ch=0;ch<Qs.length;ch++){var dh=Qs[ch],fw=dh.toLowerCase(),gw=dh[0].toUpperCase()+dh.slice(1);tn(fw,"on"+gw)}tn(Ac,"onAnimationEnd"),tn(Ic,"onAnimationIteration"),tn(Ec,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Wy,"onTransitionRun"),tn(Dy,"onTransitionStart"),tn(jy,"onTransitionCancel"),tn(Cc,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function Xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var h=void 0;if(t)for(var m=i.length-1;0<=m;m--){var b=i[m],S=b.instance,M=b.currentTarget;if(b=b.listener,S!==h&&l.isPropagationStopped())break e;h=b,l.currentTarget=M;try{h(l)}catch(O){er(O)}l.currentTarget=null,h=S}else for(m=0;m<i.length;m++){if(b=i[m],S=b.instance,M=b.currentTarget,b=b.listener,S!==h&&l.isPropagationStopped())break e;h=b,l.currentTarget=M;try{h(l)}catch(O){er(O)}l.currentTarget=null,h=S}}}}function Se(e,t){var n=t[As];n===void 0&&(n=t[As]=new Set);var i=e+"__bubble";n.has(i)||(Zm(t,e,2,!1),n.add(i))}function mh(e,t,n){var i=0;t&&(i|=4),Zm(n,e,i,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function fh(e){if(!e[Lr]){e[Lr]=!0,Uu.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||mh(n,!1,e),mh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,mh("selectionchange",!1,t))}}function Zm(e,t,n,i){switch(If(t)){case 2:var l=Vw;break;case 8:l=Fw;break;default:l=Mh}n=l.bind(null,t,n,e),l=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gh(e,t,n,i,l){var h=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var b=i.stateNode.containerInfo;if(b===l)break;if(m===4)for(m=i.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;b!==null;){if(m=Ha(b),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){i=h=m;continue e}b=b.parentNode}}i=i.return}tc(function(){var M=h,O=Ds(n),U=[];e:{var z=Mc.get(e);if(z!==void 0){var B=Po,te=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":B=hy;break;case"focusin":te="focus",B=Ns;break;case"focusout":te="blur",B=Ns;break;case"beforeblur":case"afterblur":B=Ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=dy;break;case Ac:case Ic:case Ec:B=ey;break;case Cc:B=fy;break;case"scroll":case"scrollend":B=Xp;break;case"wheel":B=py;break;case"copy":case"cut":case"paste":B=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=rc;break;case"toggle":case"beforetoggle":B=wy}var he=(t&4)!==0,qe=!he&&(e==="scroll"||e==="scrollend"),E=he?z!==null?z+"Capture":null:z;he=[];for(var I=M,C;I!==null;){var Y=I;if(C=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||C===null||E===null||(Y=ji(I,E),Y!=null&&he.push(mo(I,Y,C))),qe)break;I=I.return}0<he.length&&(z=new B(z,te,null,n,O),U.push({event:z,listeners:he}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&n!==Ws&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Ra]))break e;if((B||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,B?(te=n.relatedTarget||n.toElement,B=M,te=te?Ha(te):null,te!==null&&(qe=c(te),he=te.tag,te!==qe||he!==5&&he!==27&&he!==6)&&(te=null)):(B=null,te=M),B!==te)){if(he=ic,Y="onMouseLeave",E="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(he=rc,Y="onPointerLeave",E="onPointerEnter",I="pointer"),qe=B==null?z:Di(B),C=te==null?z:Di(te),z=new he(Y,I+"leave",B,n,O),z.target=qe,z.relatedTarget=C,Y=null,Ha(O)===M&&(he=new he(E,I+"enter",te,n,O),he.target=C,he.relatedTarget=qe,Y=he),qe=Y,B&&te)t:{for(he=yw,E=B,I=te,C=0,Y=E;Y;Y=he(Y))C++;Y=0;for(var se=I;se;se=he(se))Y++;for(;0<C-Y;)E=he(E),C--;for(;0<Y-C;)I=he(I),Y--;for(;C--;){if(E===I||I!==null&&E===I.alternate){he=E;break t}E=he(E),I=he(I)}he=null}else he=null;B!==null&&Pm(U,z,B,he,!1),te!==null&&qe!==null&&Pm(U,qe,te,he,!0)}}e:{if(z=M?Di(M):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var Me=fc;else if(dc(z))if(gc)Me=Cy;else{Me=Iy;var ae=Ay}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&zs(M.elementType)&&(Me=fc):Me=Ey;if(Me&&(Me=Me(e,M))){mc(U,Me,n,O);break e}ae&&ae(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&Ms(z,"number",z.value)}switch(ae=M?Di(M):window,e){case"focusin":(dc(ae)||ae.contentEditable==="true")&&(Fa=ae,Vs=M,_i=null);break;case"focusout":_i=Vs=Fa=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,xc(U,n,O);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":xc(U,n,O)}var ye;if(Ls)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Va?uc(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&(sc&&n.locale!=="ko"&&(Va||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Va&&(ye=nc()):(qn=O,Rs="value"in qn?qn.value:qn.textContent,Va=!0)),ae=_r(M,Ee),0<ae.length&&(Ee=new oc(Ee,e,null,n,O),U.push({event:Ee,listeners:ae}),ye?Ee.data=ye:(ye=cc(n),ye!==null&&(Ee.data=ye)))),(ye=vy?ky(e,n):Ty(e,n))&&(Ee=_r(M,"onBeforeInput"),0<Ee.length&&(ae=new oc("onBeforeInput","beforeinput",null,n,O),U.push({event:ae,listeners:Ee}),ae.data=ye)),mw(U,e,M,n,O)}Xm(U,t)})}function mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _r(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,h=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||h===null||(l=ji(e,n),l!=null&&i.unshift(mo(e,l,h)),l=ji(e,t),l!=null&&i.push(mo(e,l,h))),e.tag===3)return i;e=e.return}return[]}function yw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,t,n,i,l){for(var h=t._reactName,m=[];n!==null&&n!==i;){var b=n,S=b.alternate,M=b.stateNode;if(b=b.tag,S!==null&&S===i)break;b!==5&&b!==26&&b!==27||M===null||(S=M,l?(M=ji(n,h),M!=null&&m.unshift(mo(n,M,S))):l||(M=ji(n,h),M!=null&&m.push(mo(n,M,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var ww=/\r\n?/g,bw=/\u0000|\uFFFD/g;function Jm(e){return(typeof e=="string"?e:""+e).replace(ww,`
`).replace(bw,"")}function $m(e,t){return t=Jm(t),Jm(e)===t}function Ne(e,t,n,i,l,h){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||_a(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&_a(e,""+i);break;case"className":Fo(e,"class",i);break;case"tabIndex":Fo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Fo(e,n,i);break;case"style":$u(e,i,h);break;case"data":if(t!=="object"){Fo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",l.name,l,null),Ne(e,t,"formEncType",l.formEncType,l,null),Ne(e,t,"formMethod",l.formMethod,l,null),Ne(e,t,"formTarget",l.formTarget,l,null)):(Ne(e,t,"encType",l.encType,l,null),Ne(e,t,"method",l.method,l,null),Ne(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Qo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Vo(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qp.get(n)||n,Vo(e,n,i))}}function ph(e,t,n,i,l,h){switch(n){case"style":$u(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?_a(e,i):(typeof i=="number"||typeof i=="bigint")&&_a(e,""+i);break;case"onScroll":i!=null&&Se("scroll",e);break;case"onScrollEnd":i!=null&&Se("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),h=e[bt]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,l),typeof i=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Vo(e,n,i)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var i=!1,l=!1,h;for(h in n)if(n.hasOwnProperty(h)){var m=n[h];if(m!=null)switch(h){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,h,m,n,null)}}l&&Ne(e,t,"srcSet",n.srcSet,n,null),i&&Ne(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var b=h=m=l=null,S=null,M=null;for(i in n)if(n.hasOwnProperty(i)){var O=n[i];if(O!=null)switch(i){case"name":l=O;break;case"type":m=O;break;case"checked":S=O;break;case"defaultChecked":M=O;break;case"value":h=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Ne(e,t,i,O,n,null)}}Xu(e,h,b,S,M,m,l,!1);return;case"select":Se("invalid",e),i=m=h=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":h=b;break;case"defaultValue":m=b;break;case"multiple":i=b;default:Ne(e,t,l,b,n,null)}t=h,n=m,e.multiple=!!i,t!=null?La(e,!!i,t,!1):n!=null&&La(e,!!i,n,!0);return;case"textarea":Se("invalid",e),h=l=i=null;for(m in n)if(n.hasOwnProperty(m)&&(b=n[m],b!=null))switch(m){case"value":i=b;break;case"defaultValue":l=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ne(e,t,m,b,n,null)}Pu(e,i,l,h);return;case"option":for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null)&&(S==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ne(e,t,S,i,n,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(i=0;i<co.length;i++)Se(co[i],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(i=n[M],i!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,M,i,n,null)}return;default:if(zs(t)){for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!==void 0&&ph(e,t,O,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Ne(e,t,b,i,n,null))}function vw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,h=null,m=null,b=null,S=null,M=null,O=null;for(B in n){var U=n[B];if(n.hasOwnProperty(B)&&U!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":S=U;default:i.hasOwnProperty(B)||Ne(e,t,B,null,i,U)}}for(var z in i){var B=i[z];if(U=n[z],i.hasOwnProperty(z)&&(B!=null||U!=null))switch(z){case"type":h=B;break;case"name":l=B;break;case"checked":M=B;break;case"defaultChecked":O=B;break;case"value":m=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:B!==U&&Ne(e,t,z,B,i,U)}}Cs(e,m,b,S,M,O,h,l);return;case"select":B=m=b=z=null;for(h in n)if(S=n[h],n.hasOwnProperty(h)&&S!=null)switch(h){case"value":break;case"multiple":B=S;default:i.hasOwnProperty(h)||Ne(e,t,h,null,i,S)}for(l in i)if(h=i[l],S=n[l],i.hasOwnProperty(l)&&(h!=null||S!=null))switch(l){case"value":z=h;break;case"defaultValue":b=h;break;case"multiple":m=h;default:h!==S&&Ne(e,t,l,h,i,S)}t=b,n=m,i=B,z!=null?La(e,!!n,z,!1):!!i!=!!n&&(t!=null?La(e,!!n,t,!0):La(e,!!n,n?[]:"",!1));return;case"textarea":B=z=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ne(e,t,b,null,i,l)}for(m in i)if(l=i[m],h=n[m],i.hasOwnProperty(m)&&(l!=null||h!=null))switch(m){case"value":z=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==h&&Ne(e,t,m,l,i,h)}Zu(e,z,B);return;case"option":for(var te in n)z=n[te],n.hasOwnProperty(te)&&z!=null&&!i.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Ne(e,t,te,null,i,z));for(S in i)z=i[S],B=n[S],i.hasOwnProperty(S)&&z!==B&&(z!=null||B!=null)&&(S==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ne(e,t,S,z,i,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)z=n[he],n.hasOwnProperty(he)&&z!=null&&!i.hasOwnProperty(he)&&Ne(e,t,he,null,i,z);for(M in i)if(z=i[M],B=n[M],i.hasOwnProperty(M)&&z!==B&&(z!=null||B!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:Ne(e,t,M,z,i,B)}return;default:if(zs(t)){for(var qe in n)z=n[qe],n.hasOwnProperty(qe)&&z!==void 0&&!i.hasOwnProperty(qe)&&ph(e,t,qe,void 0,i,z);for(O in i)z=i[O],B=n[O],!i.hasOwnProperty(O)||z===B||z===void 0&&B===void 0||ph(e,t,O,z,i,B);return}}for(var E in n)z=n[E],n.hasOwnProperty(E)&&z!=null&&!i.hasOwnProperty(E)&&Ne(e,t,E,null,i,z);for(U in i)z=i[U],B=n[U],!i.hasOwnProperty(U)||z===B||z==null&&B==null||Ne(e,t,U,z,i,B)}function ef(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],h=l.transferSize,m=l.initiatorType,b=l.duration;if(h&&b&&ef(m)){for(m=0,b=l.responseEnd,i+=1;i<n.length;i++){var S=n[i],M=S.startTime;if(M>b)break;var O=S.transferSize,U=S.initiatorType;O&&ef(U)&&(S=S.responseEnd,m+=O*(S<b?1:(b-M)/(S-M)))}if(--i,t+=8*(h+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yh=null,wh=null;function Yr(e){return e.nodeType===9?e:e.ownerDocument}function tf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vh=null;function Tw(){var e=window.event;return e&&e.type==="popstate"?e===vh?!1:(vh=e,!0):(vh=null,!1)}var af=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(Aw)}:af;function Aw(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function rf(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),wi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")fo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,fo(n);for(var h=n.firstChild;h;){var m=h.nextSibling,b=h.nodeName;h[Wi]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=m}}else n==="body"&&fo(e.ownerDocument.body);n=l}while(n);wi(t)}function sf(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function kh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":kh(n),Is(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Iw(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function Ew(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function lf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function Th(e){return e.data==="$?"||e.data==="$~"}function xh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Sh=null;function hf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function uf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function cf(e,t,n){switch(t=Yr(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function fo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Is(e)}var Pt=new Map,df=new Set;function Ur(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=F.d;F.d={f:Mw,r:zw,D:Ww,C:Dw,L:jw,m:Bw,X:Hw,S:Rw,M:Ow};function Mw(){var e=Rn.f(),t=Br();return e||t}function zw(e){var t=Oa(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):Rn.r(e)}var gi=typeof document>"u"?null:document;function mf(e,t,n){var i=gi;if(i&&typeof t=="string"&&t){var l=Ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),df.has(l)||(df.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),dt(t,"link",e),rt(t),i.head.appendChild(t)))}}function Ww(e){Rn.D(e),mf("dns-prefetch",e,null)}function Dw(e,t){Rn.C(e,t),mf("preconnect",e,t)}function jw(e,t,n){Rn.L(e,t,n);var i=gi;if(i&&e&&t){var l='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ut(n.imageSizes)+'"]')):l+='[href="'+Ut(e)+'"]';var h=l;switch(t){case"style":h=pi(e);break;case"script":h=yi(e)}Pt.has(h)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(h,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(go(h))||t==="script"&&i.querySelector(po(h))||(t=i.createElement("link"),dt(t,"link",e),rt(t),i.head.appendChild(t)))}}function Bw(e,t){Rn.m(e,t);var n=gi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ut(i)+'"][href="'+Ut(e)+'"]',h=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=yi(e)}if(!Pt.has(h)&&(e=w({rel:"modulepreload",href:e},t),Pt.set(h,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(po(h)))return}i=n.createElement("link"),dt(i,"link",e),rt(i),n.head.appendChild(i)}}}function Rw(e,t,n){Rn.S(e,t,n);var i=gi;if(i&&e){var l=Na(i).hoistableStyles,h=pi(e);t=t||"default";var m=l.get(h);if(!m){var b={loading:0,preload:null};if(m=i.querySelector(go(h)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(h))&&Ah(e,n);var S=m=i.createElement("link");rt(S),dt(S,"link",e),S._p=new Promise(function(M,O){S.onload=M,S.onerror=O}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vr(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:b},l.set(h,m)}}}function Hw(e,t){Rn.X(e,t);var n=gi;if(n&&e){var i=Na(n).hoistableScripts,l=yi(e),h=i.get(l);h||(h=n.querySelector(po(l)),h||(e=w({src:e,async:!0},t),(t=Pt.get(l))&&Ih(e,t),h=n.createElement("script"),rt(h),dt(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(l,h))}}function Ow(e,t){Rn.M(e,t);var n=gi;if(n&&e){var i=Na(n).hoistableScripts,l=yi(e),h=i.get(l);h||(h=n.querySelector(po(l)),h||(e=w({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&Ih(e,t),h=n.createElement("script"),rt(h),dt(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(l,h))}}function ff(e,t,n,i){var l=(l=re.current)?Ur(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pi(n.href),n=Na(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pi(n.href);var h=Na(l).hoistableStyles,m=h.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,m),(h=l.querySelector(go(e)))&&!h._p&&(m.instance=h,m.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),h||Nw(l,e,n,m.state))),t&&i===null)throw Error(s(528,""));return m}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yi(n),n=Na(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pi(e){return'href="'+Ut(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function gf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Nw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),dt(t,"link",n),rt(t),e.head.appendChild(t))}function yi(e){return'[src="'+Ut(e)+'"]'}function po(e){return"script[async]"+e}function pf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(i)return t.instance=i,rt(i),i;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rt(i),dt(i,"style",l),Vr(i,n.precedence,e),t.instance=i;case"stylesheet":l=pi(n.href);var h=e.querySelector(go(l));if(h)return t.state.loading|=4,t.instance=h,rt(h),h;i=gf(n),(l=Pt.get(l))&&Ah(i,l),h=(e.ownerDocument||e).createElement("link"),rt(h);var m=h;return m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),dt(h,"link",i),t.state.loading|=4,Vr(h,n.precedence,e),t.instance=h;case"script":return h=yi(n.src),(l=e.querySelector(po(h)))?(t.instance=l,rt(l),l):(i=n,(l=Pt.get(h))&&(i=w({},n),Ih(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),rt(l),dt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vr(i,n.precedence,e));return t.instance}function Vr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,h=l,m=0;m<i.length;m++){var b=i[m];if(b.dataset.precedence===t)h=b;else if(h!==l)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ah(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ih(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fr=null;function yf(e,t,n){if(Fr===null){var i=new Map,l=Fr=new Map;l.set(n,i)}else l=Fr,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var h=n[l];if(!(h[Wi]||h[lt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var m=h.getAttribute(t)||"";m=e+m;var b=i.get(m);b?b.push(h):i.set(m,[h])}}return i}function wf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Lw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=pi(i.href),h=t.querySelector(go(l));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=h,rt(h);return}h=t.ownerDocument||t,i=gf(i),(l=Pt.get(l))&&Ah(i,l),h=h.createElement("link"),rt(h);var m=h;m._p=new Promise(function(b,S){m.onload=b,m.onerror=S}),dt(h,"link",i),n.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Gr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Eh=0;function _w(e,t){return e.stylesheets&&e.count===0&&Kr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Kr(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+t);0<e.imgBytes&&Eh===0&&(Eh=62500*kw());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kr(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Eh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Gr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qr=null;function Kr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qr=new Map,t.forEach(Yw,e),Qr=null,Gr.call(e))}function Yw(e,t){if(!(t.state.loading&4)){var n=Qr.get(e);if(n)var i=n.get(null);else{n=new Map,Qr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<l.length;h++){var m=l[h];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}l=t.instance,m=l.getAttribute("data-precedence"),h=n.get(m)||i,h===i&&n.set(null,l),n.set(m,l),this.count++,i=Gr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),h?h.parentNode.insertBefore(l,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var yo={$$typeof:V,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Uw(e,t,n,i,l,h,m,b,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ts(0),this.hiddenUpdates=Ts(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=h,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function vf(e,t,n,i,l,h,m,b,S,M,O,U){return e=new Uw(e,t,n,m,S,M,O,U,b),t=1,h===!0&&(t|=24),h=Dt(3,null,null,t),e.current=h,h.stateNode=e,t=rl(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:i,isDehydrated:n,cache:t},ul(h),e}function kf(e){return e?(e=Ka,e):Ka}function Tf(e,t,n,i,l,h){l=kf(l),i.context===null?i.context=l:i.pendingContext=l,i=Fn(t),i.payload={element:n},h=h===void 0?null:h,h!==null&&(i.callback=h),n=Gn(e,i,t),n!==null&&(At(n,e,t),Ki(n,e,t))}function xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ch(e,t){xf(e,t),(e=e.alternate)&&xf(e,t)}function Sf(e){if(e.tag===13||e.tag===31){var t=ga(e,67108864);t!==null&&At(t,e,67108864),Ch(e,67108864)}}function Af(e){if(e.tag===13||e.tag===31){var t=Ot();t=xs(t);var n=ga(e,t);n!==null&&At(n,e,t),Ch(e,t)}}var Xr=!0;function Vw(e,t,n,i){var l=W.T;W.T=null;var h=F.p;try{F.p=2,Mh(e,t,n,i)}finally{F.p=h,W.T=l}}function Fw(e,t,n,i){var l=W.T;W.T=null;var h=F.p;try{F.p=8,Mh(e,t,n,i)}finally{F.p=h,W.T=l}}function Mh(e,t,n,i){if(Xr){var l=zh(i);if(l===null)gh(e,t,i,Zr,n),Ef(e,i);else if(Qw(l,e,t,n,i))i.stopPropagation();else if(Ef(e,i),t&4&&-1<Gw.indexOf(e)){for(;l!==null;){var h=Oa(l);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var m=ua(h.pendingLanes);if(m!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;m;){var S=1<<31-Le(m);b.entanglements[1]|=S,m&=~S}hn(h),(We&6)===0&&(Dr=gt()+500,uo(0))}}break;case 31:case 13:b=ga(h,2),b!==null&&At(b,h,2),Br(),Ch(h,2)}if(h=zh(i),h===null&&gh(e,t,i,Zr,n),h===l)break;l=h}l!==null&&i.stopPropagation()}else gh(e,t,i,null,n)}}function zh(e){return e=Ds(e),Wh(e)}var Zr=null;function Wh(e){if(Zr=null,e=Ha(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function If(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ks()){case _:return 2;case Z:return 8;case de:case Te:return 32;case je:return 268435456;default:return 32}default:return 32}}var Dh=!1,aa=null,ia=null,oa=null,wo=new Map,bo=new Map,ra=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function vo(e,t,n,i,l,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:h,targetContainers:[l]},t!==null&&(t=Oa(t),t!==null&&Sf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Qw(e,t,n,i,l){switch(t){case"focusin":return aa=vo(aa,e,t,n,i,l),!0;case"dragenter":return ia=vo(ia,e,t,n,i,l),!0;case"mouseover":return oa=vo(oa,e,t,n,i,l),!0;case"pointerover":var h=l.pointerId;return wo.set(h,vo(wo.get(h)||null,e,t,n,i,l)),!0;case"gotpointercapture":return h=l.pointerId,bo.set(h,vo(bo.get(h)||null,e,t,n,i,l)),!0}return!1}function Cf(e){var t=Ha(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,_u(e.priority,function(){Af(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,_u(e.priority,function(){Af(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ws=i,n.target.dispatchEvent(i),Ws=null}else return t=Oa(n),t!==null&&Sf(t),e.blockedOn=n,!1;t.shift()}return!0}function Mf(e,t,n){Pr(e)&&n.delete(t)}function Kw(){Dh=!1,aa!==null&&Pr(aa)&&(aa=null),ia!==null&&Pr(ia)&&(ia=null),oa!==null&&Pr(oa)&&(oa=null),wo.forEach(Mf),bo.forEach(Mf)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Dh||(Dh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Kw)))}var $r=null;function zf(e){$r!==e&&($r=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Wh(i||n)===null)continue;break}var h=Oa(n);h!==null&&(e.splice(t,3),t-=3,zl(h,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function wi(e){function t(S){return Jr(S,e)}aa!==null&&Jr(aa,e),ia!==null&&Jr(ia,e),oa!==null&&Jr(oa,e),wo.forEach(t),bo.forEach(t);for(var n=0;n<ra.length;n++){var i=ra[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)Cf(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],h=n[i+1],m=l[bt]||null;if(typeof h=="function")m||zf(n);else if(m){var b=null;if(h&&h.hasAttribute("formAction")){if(l=h,m=h[bt]||null)b=m.formAction;else if(Wh(l)!==null)continue}else b=m.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),zf(n)}}}function Wf(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function jh(e){this._internalRoot=e}es.prototype.render=jh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=Ot();Tf(n,i,e,t,null,null)},es.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tf(e.current,2,null,e,null,null),Br(),t[Ra]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&Cf(e)}};var Df=o.version;if(Df!=="19.2.4")throw Error(s(527,Df,"19.2.4"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=f(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Xw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:W,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{pt=ts.inject(Xw),it=ts}catch{}}return To.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,i="",l=Nd,h=qd,m=Ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=vf(e,1,!1,null,null,n,i,null,l,h,m,Wf),e[Ra]=t.current,fh(e),new jh(t)},To.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var i=!1,l="",h=Nd,m=qd,b=Ld,S=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=vf(e,1,!0,t,n??null,i,l,S,h,m,b,Wf),t.context=kf(null),n=t.current,i=Ot(),i=xs(i),l=Fn(i),l.callback=null,Gn(n,l,i),n=i,t.current.lanes=n,zi(t,n),hn(t),e[Ra]=t.current,fh(e),new es(t)},To.version="19.2.4",To}var Yf;function ob(){if(Yf)return Hh.exports;Yf=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Hh.exports=ib(),Hh.exports}var rb=ob();var Uf="popstate";function Vf(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function sb(a={}){function o(u,c){let{pathname:d="/",search:g="",hash:p=""}=Ma(u.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),nu("",{pathname:d,search:g,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(u,c){let d=u.document.querySelector("base"),g="";if(d&&d.getAttribute("href")){let p=u.location.href,f=p.indexOf("#");g=f===-1?p:p.slice(0,f)}return g+"#"+(typeof c=="string"?c:Wo(c))}function s(u,c){$t(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return hb(o,r,s,a)}function Ke(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function $t(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function lb(){return Math.random().toString(36).substring(2,10)}function Ff(a,o){return{usr:a.state,key:a.key,idx:o,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function nu(a,o,r=null,s,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof o=="string"?Ma(o):o,state:r,key:o&&o.key||s||lb(),unstable_mask:u}}function Wo({pathname:a="/",search:o="",hash:r=""}){return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Ma(a){let o={};if(a){let r=a.indexOf("#");r>=0&&(o.hash=a.substring(r),a=a.substring(0,r));let s=a.indexOf("?");s>=0&&(o.search=a.substring(s),a=a.substring(0,s)),a&&(o.pathname=a)}return o}function hb(a,o,r,s={}){let{window:u=document.defaultView,v5Compat:c=!1}=s,d=u.history,g="POP",p=null,f=y();f==null&&(f=0,d.replaceState({...d.state,idx:f},""));function y(){return(d.state||{idx:null}).idx}function w(){g="POP";let D=y(),j=D==null?null:D-f;f=D,p&&p({action:g,location:H.location,delta:j})}function T(D,j){g="PUSH";let K=Vf(D)?D:nu(H.location,D,j);r&&r(K,D),f=y()+1;let V=Ff(K,f),oe=H.createHref(K.unstable_mask||K);try{d.pushState(V,"",oe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;u.location.assign(oe)}c&&p&&p({action:g,location:H.location,delta:1})}function v(D,j){g="REPLACE";let K=Vf(D)?D:nu(H.location,D,j);r&&r(K,D),f=y();let V=Ff(K,f),oe=H.createHref(K.unstable_mask||K);d.replaceState(V,"",oe),c&&p&&p({action:g,location:H.location,delta:0})}function R(D){return ub(D)}let H={get action(){return g},get location(){return a(u,d)},listen(D){if(p)throw new Error("A history only accepts one active listener");return u.addEventListener(Uf,w),p=D,()=>{u.removeEventListener(Uf,w),p=null}},createHref(D){return o(u,D)},createURL:R,encodeLocation(D){let j=R(D);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:T,replace:v,go(D){return d.go(D)}};return H}function ub(a,o=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(r,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Wo(a);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Hg(a,o,r="/"){return cb(a,o,r,!1)}function cb(a,o,r,s){let u=typeof o=="string"?Ma(o):o,c=Hn(u.pathname||"/",r);if(c==null)return null;let d=Og(a);db(d);let g=null;for(let p=0;g==null&&p<d.length;++p){let f=xb(c);g=kb(d[p],f,s)}return g}function Og(a,o=[],r=[],s="",u=!1){let c=(d,g,p=u,f)=>{let y={relativePath:f===void 0?d.path||"":f,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&p)return;Ke(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let w=dn([s,y.relativePath]),T=r.concat(y);d.children&&d.children.length>0&&(Ke(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Og(d.children,o,T,w,p)),!(d.path==null&&!d.index)&&o.push({path:w,score:bb(w,d.index),routesMeta:T})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))c(d,g);else for(let p of Ng(d.path))c(d,g,!0,p)}),o}function Ng(a){let o=a.split("/");if(o.length===0)return[];let[r,...s]=o,u=r.endsWith("?"),c=r.replace(/\?$/,"");if(s.length===0)return u?[c,""]:[c];let d=Ng(s.join("/")),g=[];return g.push(...d.map(p=>p===""?c:[c,p].join("/"))),u&&g.push(...d),g.map(p=>a.startsWith("/")&&p===""?"/":p)}function db(a){a.sort((o,r)=>o.score!==r.score?r.score-o.score:vb(o.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var mb=/^:[\w-]+$/,fb=3,gb=2,pb=1,yb=10,wb=-2,Gf=a=>a==="*";function bb(a,o){let r=a.split("/"),s=r.length;return r.some(Gf)&&(s+=wb),o&&(s+=gb),r.filter(u=>!Gf(u)).reduce((u,c)=>u+(mb.test(c)?fb:c===""?pb:yb),s)}function vb(a,o){return a.length===o.length&&a.slice(0,-1).every((s,u)=>s===o[u])?a[a.length-1]-o[o.length-1]:0}function kb(a,o,r=!1){let{routesMeta:s}=a,u={},c="/",d=[];for(let g=0;g<s.length;++g){let p=s[g],f=g===s.length-1,y=c==="/"?o:o.slice(c.length)||"/",w=us({path:p.relativePath,caseSensitive:p.caseSensitive,end:f},y),T=p.route;if(!w&&f&&r&&!s[s.length-1].route.index&&(w=us({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!w)return null;Object.assign(u,w.params),d.push({params:u,pathname:dn([c,w.pathname]),pathnameBase:Eb(dn([c,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(c=dn([c,w.pathnameBase]))}return d}function us(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,s]=Tb(a.path,a.caseSensitive,a.end),u=o.match(r);if(!u)return null;let c=u[0],d=c.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:s.reduce((f,{paramName:y,isOptional:w},T)=>{if(y==="*"){let R=g[T]||"";d=c.slice(0,c.length-R.length).replace(/(.)\/+$/,"$1")}const v=g[T];return w&&!v?f[y]=void 0:f[y]=(v||"").replace(/%2F/g,"/"),f},{}),pathname:c,pathnameBase:d,pattern:a}}function Tb(a,o=!1,r=!0){$t(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],u="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,p,f,y)=>{if(s.push({paramName:g,isOptional:p!=null}),p){let w=y.charAt(f+d.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),u+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?u+="\\/*$":a!==""&&a!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),s]}function xb(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return $t(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),a}}function Hn(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let r=o.endsWith("/")?o.length-1:o.length,s=a.charAt(r);return s&&s!=="/"?null:a.slice(r)||"/"}var Sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ab(a,o="/"){let{pathname:r,search:s="",hash:u=""}=typeof a=="string"?Ma(a):a,c;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?c=Qf(r.substring(1),"/"):c=Qf(r,o)):c=o,{pathname:c,search:Cb(s),hash:Mb(u)}}function Qf(a,o){let r=o.replace(/\/+$/,"").split("/");return a.split("/").forEach(u=>{u===".."?r.length>1&&r.pop():u!=="."&&r.push(u)}),r.length>1?r.join("/"):"/"}function Lh(a,o,r,s){return`Cannot include a '${a}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ib(a){return a.filter((o,r)=>r===0||o.route.path&&o.route.path.length>0)}function gu(a){let o=Ib(a);return o.map((r,s)=>s===o.length-1?r.pathname:r.pathnameBase)}function ms(a,o,r,s=!1){let u;typeof a=="string"?u=Ma(a):(u={...a},Ke(!u.pathname||!u.pathname.includes("?"),Lh("?","pathname","search",u)),Ke(!u.pathname||!u.pathname.includes("#"),Lh("#","pathname","hash",u)),Ke(!u.search||!u.search.includes("#"),Lh("#","search","hash",u)));let c=a===""||u.pathname==="",d=c?"/":u.pathname,g;if(d==null)g=r;else{let w=o.length-1;if(!s&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),w-=1;u.pathname=T.join("/")}g=w>=0?o[w]:"/"}let p=Ab(u,g),f=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(f||y)&&(p.pathname+="/"),p}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),Eb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Cb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Mb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,zb=class{constructor(a,o,r,s=!1){this.status=a,this.statusText=o||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Wb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Db(a){return a.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Lg(a,o){let r=a;if(typeof r!="string"||!Sb.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let s=r,u=!1;if(qg)try{let c=new URL(window.location.href),d=r.startsWith("//")?new URL(c.protocol+r):new URL(r),g=Hn(d.pathname,o);d.origin===c.origin&&g!=null?r=g+d.search+d.hash:u=!0}catch{$t(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _g=["POST","PUT","PATCH","DELETE"];new Set(_g);var jb=["GET",..._g];new Set(jb);var xi=N.createContext(null);xi.displayName="DataRouter";var fs=N.createContext(null);fs.displayName="DataRouterState";var Bb=N.createContext(!1),Yg=N.createContext({isTransitioning:!1});Yg.displayName="ViewTransition";var Rb=N.createContext(new Map);Rb.displayName="Fetchers";var Hb=N.createContext(null);Hb.displayName="Await";var Lt=N.createContext(null);Lt.displayName="Navigation";var jo=N.createContext(null);jo.displayName="Location";var on=N.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var pu=N.createContext(null);pu.displayName="RouteError";var Ug="REACT_ROUTER_ERROR",Ob="REDIRECT",Nb="ROUTE_ERROR_RESPONSE";function qb(a){if(a.startsWith(`${Ug}:${Ob}:{`))try{let o=JSON.parse(a.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Lb(a){if(a.startsWith(`${Ug}:${Nb}:{`))try{let o=JSON.parse(a.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new zb(o.status,o.statusText,o.data)}catch{}}function _b(a,{relative:o}={}){Ke(Si(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=N.useContext(Lt),{hash:u,pathname:c,search:d}=Bo(a,{relative:o}),g=c;return r!=="/"&&(g=c==="/"?r:dn([r,c])),s.createHref({pathname:g,search:d,hash:u})}function Si(){return N.useContext(jo)!=null}function fn(){return Ke(Si(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(jo).location}var Vg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fg(a){N.useContext(Lt).static||N.useLayoutEffect(a)}function Gg(){let{isDataRoute:a}=N.useContext(on);return a?ev():Yb()}function Yb(){Ke(Si(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(xi),{basename:o,navigator:r}=N.useContext(Lt),{matches:s}=N.useContext(on),{pathname:u}=fn(),c=JSON.stringify(gu(s)),d=N.useRef(!1);return Fg(()=>{d.current=!0}),N.useCallback((p,f={})=>{if($t(d.current,Vg),!d.current)return;if(typeof p=="number"){r.go(p);return}let y=ms(p,JSON.parse(c),u,f.relative==="path");a==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:dn([o,y.pathname])),(f.replace?r.replace:r.push)(y,f.state,f)},[o,r,c,u,a])}N.createContext(null);function Qg(){let{matches:a}=N.useContext(on),o=a[a.length-1];return o?o.params:{}}function Bo(a,{relative:o}={}){let{matches:r}=N.useContext(on),{pathname:s}=fn(),u=JSON.stringify(gu(r));return N.useMemo(()=>ms(a,JSON.parse(u),s,o==="path"),[a,u,s,o])}function Ub(a,o){return Kg(a,o)}function Kg(a,o,r){Ke(Si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=N.useContext(Lt),{matches:u}=N.useContext(on),c=u[u.length-1],d=c?c.params:{},g=c?c.pathname:"/",p=c?c.pathnameBase:"/",f=c&&c.route;{let D=f&&f.path||"";Zg(g,!f||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let y=fn(),w;if(o){let D=typeof o=="string"?Ma(o):o;Ke(p==="/"||D.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${D.pathname}" was given in the \`location\` prop.`),w=D}else w=y;let T=w.pathname||"/",v=T;if(p!=="/"){let D=p.replace(/^\//,"").split("/");v="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=Hg(a,{pathname:v});$t(f||R!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),$t(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Kb(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},d,D.params),pathname:dn([p,s.encodeLocation?s.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?p:dn([p,s.encodeLocation?s.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),u,r);return o&&H?N.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},H):H}function Vb(){let a=$b(),o=Wb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:c},"ErrorBoundary")," or"," ",N.createElement("code",{style:c},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},o),r?N.createElement("pre",{style:u},r):null,d)}var Fb=N.createElement(Vb,null),Xg=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){this.props.onError?this.props.onError(a,o):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=Lb(a.digest);r&&(a=r)}let o=a!==void 0?N.createElement(on.Provider,{value:this.props.routeContext},N.createElement(pu.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(Gb,{error:a},o):o}};Xg.contextType=Bb;var _h=new WeakMap;function Gb({children:a,error:o}){let{basename:r}=N.useContext(Lt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let s=qb(o.digest);if(s){let u=_h.get(o);if(u)throw u;let c=Lg(s.location,r);if(qg&&!_h.get(o))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw _h.set(o,d),d}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function Qb({routeContext:a,match:o,children:r}){let s=N.useContext(xi);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),N.createElement(on.Provider,{value:a},r)}function Kb(a,o=[],r){let s=r?.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let u=a,c=s?.errors;if(c!=null){let y=u.findIndex(w=>w.route.id&&c?.[w.route.id]!==void 0);Ke(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let d=!1,g=-1;if(r&&s){d=s.renderFallback;for(let y=0;y<u.length;y++){let w=u[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=y),w.route.id){let{loaderData:T,errors:v}=s,R=w.route.loader&&!T.hasOwnProperty(w.route.id)&&(!v||v[w.route.id]===void 0);if(w.route.lazy||R){r.isStatic&&(d=!0),g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}}let p=r?.onError,f=s&&p?(y,w)=>{p(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Db(s.matches),errorInfo:w})}:void 0;return u.reduceRight((y,w,T)=>{let v,R=!1,H=null,D=null;s&&(v=c&&w.route.id?c[w.route.id]:void 0,H=w.route.errorElement||Fb,d&&(g<0&&T===0?(Zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,D=null):g===T&&(R=!0,D=w.route.hydrateFallbackElement||null)));let j=o.concat(u.slice(0,T+1)),K=()=>{let V;return v?V=H:R?V=D:w.route.Component?V=N.createElement(w.route.Component,null):w.route.element?V=w.route.element:V=y,N.createElement(Qb,{match:w,routeContext:{outlet:y,matches:j,isDataRoute:s!=null},children:V})};return s&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?N.createElement(Xg,{location:s.location,revalidation:s.revalidation,component:H,error:v,children:K(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:f}):K()},null)}function yu(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xb(a){let o=N.useContext(xi);return Ke(o,yu(a)),o}function Zb(a){let o=N.useContext(fs);return Ke(o,yu(a)),o}function Pb(a){let o=N.useContext(on);return Ke(o,yu(a)),o}function wu(a){let o=Pb(a),r=o.matches[o.matches.length-1];return Ke(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function Jb(){return wu("useRouteId")}function $b(){let a=N.useContext(pu),o=Zb("useRouteError"),r=wu("useRouteError");return a!==void 0?a:o.errors?.[r]}function ev(){let{router:a}=Xb("useNavigate"),o=wu("useNavigate"),r=N.useRef(!1);return Fg(()=>{r.current=!0}),N.useCallback(async(u,c={})=>{$t(r.current,Vg),r.current&&(typeof u=="number"?await a.navigate(u):await a.navigate(u,{fromRouteId:o,...c}))},[a,o])}var Kf={};function Zg(a,o,r){!o&&!Kf[a]&&(Kf[a]=!0,$t(!1,r))}N.memo(tv);function tv({routes:a,future:o,state:r,isStatic:s,onError:u}){return Kg(a,void 0,{state:r,isStatic:s,onError:u})}function Pg({to:a,replace:o,state:r,relative:s}){Ke(Si(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=N.useContext(Lt);$t(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=N.useContext(on),{pathname:d}=fn(),g=Gg(),p=ms(a,gu(c),d,s==="path"),f=JSON.stringify(p);return N.useEffect(()=>{g(JSON.parse(f),{replace:o,state:r,relative:s})},[g,f,s,o,r]),null}function rs(a){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nv({basename:a="/",children:o=null,location:r,navigationType:s="POP",navigator:u,static:c=!1,unstable_useTransitions:d}){Ke(!Si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:g,navigator:u,static:c,unstable_useTransitions:d,future:{}}),[g,u,c,d]);typeof r=="string"&&(r=Ma(r));let{pathname:f="/",search:y="",hash:w="",state:T=null,key:v="default",unstable_mask:R}=r,H=N.useMemo(()=>{let D=Hn(f,g);return D==null?null:{location:{pathname:D,search:y,hash:w,state:T,key:v,unstable_mask:R},navigationType:s}},[g,f,y,w,T,v,s,R]);return $t(H!=null,`<Router basename="${g}"> is not able to match the URL "${f}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:N.createElement(Lt.Provider,{value:p},N.createElement(jo.Provider,{children:o,value:H}))}function av({children:a,location:o}){return Ub(au(a),o)}function au(a,o=[]){let r=[];return N.Children.forEach(a,(s,u)=>{if(!N.isValidElement(s))return;let c=[...o,u];if(s.type===N.Fragment){r.push.apply(r,au(s.props.children,c));return}Ke(s.type===rs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=au(s.props.children,c)),r.push(d)}),r}var ss="get",ls="application/x-www-form-urlencoded";function gs(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function iv(a){return gs(a)&&a.tagName.toLowerCase()==="button"}function ov(a){return gs(a)&&a.tagName.toLowerCase()==="form"}function rv(a){return gs(a)&&a.tagName.toLowerCase()==="input"}function sv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function lv(a,o){return a.button===0&&(!o||o==="_self")&&!sv(a)}var ns=null;function hv(){if(ns===null)try{new FormData(document.createElement("form"),0),ns=!1}catch{ns=!0}return ns}var uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yh(a){return a!=null&&!uv.has(a)?($t(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`),null):a}function cv(a,o){let r,s,u,c,d;if(ov(a)){let g=a.getAttribute("action");s=g?Hn(g,o):null,r=a.getAttribute("method")||ss,u=Yh(a.getAttribute("enctype"))||ls,c=new FormData(a)}else if(iv(a)||rv(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||g.getAttribute("action");if(s=p?Hn(p,o):null,r=a.getAttribute("formmethod")||g.getAttribute("method")||ss,u=Yh(a.getAttribute("formenctype"))||Yh(g.getAttribute("enctype"))||ls,c=new FormData(g,a),!hv()){let{name:f,type:y,value:w}=a;if(y==="image"){let T=f?`${f}.`:"";c.append(`${T}x`,"0"),c.append(`${T}y`,"0")}else f&&c.append(f,w)}}else{if(gs(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ss,s=null,u=ls,d=a}return c&&u==="text/plain"&&(d=c,c=void 0),{action:s,method:r.toLowerCase(),encType:u,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bu(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function dv(a,o,r,s){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:o&&Hn(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${s}`,u}async function mv(a,o){if(a.id in o)return o[a.id];try{let r=await import(a.module);return o[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function gv(a,o,r){let s=await Promise.all(a.map(async u=>{let c=o.routes[u.route.id];if(c){let d=await mv(c,r);return d.links?d.links():[]}return[]}));return bv(s.flat(1).filter(fv).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Xf(a,o,r,s,u,c){let d=(p,f)=>r[f]?p.route.id!==r[f].route.id:!0,g=(p,f)=>r[f].pathname!==p.pathname||r[f].route.path?.endsWith("*")&&r[f].params["*"]!==p.params["*"];return c==="assets"?o.filter((p,f)=>d(p,f)||g(p,f)):c==="data"?o.filter((p,f)=>{let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,f)||g(p,f))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function pv(a,o,{includeHydrateFallback:r}={}){return yv(a.map(s=>{let u=o.routes[s.route.id];if(!u)return[];let c=[u.module];return u.clientActionModule&&(c=c.concat(u.clientActionModule)),u.clientLoaderModule&&(c=c.concat(u.clientLoaderModule)),r&&u.hydrateFallbackModule&&(c=c.concat(u.hydrateFallbackModule)),u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function yv(a){return[...new Set(a)]}function wv(a){let o={},r=Object.keys(a).sort();for(let s of r)o[s]=a[s];return o}function bv(a,o){let r=new Set;return new Set(o),a.reduce((s,u)=>{let c=JSON.stringify(wv(u));return r.has(c)||(r.add(c),s.push({key:c,link:u})),s},[])}function Jg(){let a=N.useContext(xi);return bu(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function vv(){let a=N.useContext(fs);return bu(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var vu=N.createContext(void 0);vu.displayName="FrameworkContext";function $g(){let a=N.useContext(vu);return bu(a,"You must render this element inside a <HydratedRouter> element"),a}function kv(a,o){let r=N.useContext(vu),[s,u]=N.useState(!1),[c,d]=N.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:f,onMouseLeave:y,onTouchStart:w}=o,T=N.useRef(null);N.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let H=j=>{j.forEach(K=>{d(K.isIntersecting)})},D=new IntersectionObserver(H,{threshold:.5});return T.current&&D.observe(T.current),()=>{D.disconnect()}}},[a]),N.useEffect(()=>{if(s){let H=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(H)}}},[s]);let v=()=>{u(!0)},R=()=>{u(!1),d(!1)};return r?a!=="intent"?[c,T,{}]:[c,T,{onFocus:xo(g,v),onBlur:xo(p,R),onMouseEnter:xo(f,v),onMouseLeave:xo(y,R),onTouchStart:xo(w,v)}]:[!1,T,{}]}function xo(a,o){return r=>{a&&a(r),r.defaultPrevented||o(r)}}function Tv({page:a,...o}){let{router:r}=Jg(),s=N.useMemo(()=>Hg(r.routes,a,r.basename),[r.routes,a,r.basename]);return s?N.createElement(Sv,{page:a,matches:s,...o}):null}function xv(a){let{manifest:o,routeModules:r}=$g(),[s,u]=N.useState([]);return N.useEffect(()=>{let c=!1;return gv(a,o,r).then(d=>{c||u(d)}),()=>{c=!0}},[a,o,r]),s}function Sv({page:a,matches:o,...r}){let s=fn(),{future:u,manifest:c,routeModules:d}=$g(),{basename:g}=Jg(),{loaderData:p,matches:f}=vv(),y=N.useMemo(()=>Xf(a,o,f,c,s,"data"),[a,o,f,c,s]),w=N.useMemo(()=>Xf(a,o,f,c,s,"assets"),[a,o,f,c,s]),T=N.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let H=new Set,D=!1;if(o.forEach(K=>{let V=c.routes[K.route.id];!V||!V.hasLoader||(!y.some(oe=>oe.route.id===K.route.id)&&K.route.id in p&&d[K.route.id]?.shouldRevalidate||V.hasClientLoader?D=!0:H.add(K.route.id))}),H.size===0)return[];let j=dv(a,g,u.unstable_trailingSlashAwareDataRequests,"data");return D&&H.size>0&&j.searchParams.set("_routes",o.filter(K=>H.has(K.route.id)).map(K=>K.route.id).join(",")),[j.pathname+j.search]},[g,u.unstable_trailingSlashAwareDataRequests,p,s,c,y,o,a,d]),v=N.useMemo(()=>pv(w,c),[w,c]),R=xv(w);return N.createElement(N.Fragment,null,T.map(H=>N.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...r})),v.map(H=>N.createElement("link",{key:H,rel:"modulepreload",href:H,...r})),R.map(({key:H,link:D})=>N.createElement("link",{key:H,nonce:r.nonce,...D,crossOrigin:D.crossOrigin??r.crossOrigin})))}function Av(...a){return o=>{a.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}var Iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Iv&&(window.__reactRouterVersion="7.13.1")}catch{}function Ev({basename:a,children:o,unstable_useTransitions:r,window:s}){let u=N.useRef();u.current==null&&(u.current=sb({window:s,v5Compat:!0}));let c=u.current,[d,g]=N.useState({action:c.action,location:c.location}),p=N.useCallback(f=>{r===!1?g(f):N.startTransition(()=>g(f))},[r]);return N.useLayoutEffect(()=>c.listen(p),[c,p]),N.createElement(nv,{basename:a,children:o,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:r})}var ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Et=N.forwardRef(function({onClick:o,discover:r="render",prefetch:s="none",relative:u,reloadDocument:c,replace:d,unstable_mask:g,state:p,target:f,to:y,preventScrollReset:w,viewTransition:T,unstable_defaultShouldRevalidate:v,...R},H){let{basename:D,navigator:j,unstable_useTransitions:K}=N.useContext(Lt),V=typeof y=="string"&&ep.test(y),oe=Lg(y,D);y=oe.to;let le=_b(y,{relative:u}),q=fn(),P=null;if(g){let G=ms(g,[],q.unstable_mask?q.unstable_mask.pathname:"/",!0);D!=="/"&&(G.pathname=G.pathname==="/"?D:dn([D,G.pathname])),P=j.createHref(G)}let[ce,me,be]=kv(s,R),ee=Wv(y,{replace:d,unstable_mask:g,state:p,target:f,preventScrollReset:w,relative:u,viewTransition:T,unstable_defaultShouldRevalidate:v,unstable_useTransitions:K});function $(G){o&&o(G),G.defaultPrevented||ee(G)}let ke=!(oe.isExternal||c),ne=N.createElement("a",{...R,...be,href:(ke?P:void 0)||oe.absoluteURL||le,onClick:ke?$:o,ref:Av(H,me),target:f,"data-discover":!V&&r==="render"?"true":void 0});return ce&&!V?N.createElement(N.Fragment,null,ne,N.createElement(Tv,{page:le})):ne});Et.displayName="Link";var Cv=N.forwardRef(function({"aria-current":o="page",caseSensitive:r=!1,className:s="",end:u=!1,style:c,to:d,viewTransition:g,children:p,...f},y){let w=Bo(d,{relative:f.relative}),T=fn(),v=N.useContext(fs),{navigator:R,basename:H}=N.useContext(Lt),D=v!=null&&Hv(w)&&g===!0,j=R.encodeLocation?R.encodeLocation(w).pathname:w.pathname,K=T.pathname,V=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(K=K.toLowerCase(),V=V?V.toLowerCase():null,j=j.toLowerCase()),V&&H&&(V=Hn(V,H)||V);const oe=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let le=K===j||!u&&K.startsWith(j)&&K.charAt(oe)==="/",q=V!=null&&(V===j||!u&&V.startsWith(j)&&V.charAt(j.length)==="/"),P={isActive:le,isPending:q,isTransitioning:D},ce=le?o:void 0,me;typeof s=="function"?me=s(P):me=[s,le?"active":null,q?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let be=typeof c=="function"?c(P):c;return N.createElement(Et,{...f,"aria-current":ce,className:me,ref:y,style:be,to:d,viewTransition:g},typeof p=="function"?p(P):p)});Cv.displayName="NavLink";var Mv=N.forwardRef(({discover:a="render",fetcherKey:o,navigate:r,reloadDocument:s,replace:u,state:c,method:d=ss,action:g,onSubmit:p,relative:f,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T,...v},R)=>{let{unstable_useTransitions:H}=N.useContext(Lt),D=Bv(),j=Rv(g,{relative:f}),K=d.toLowerCase()==="get"?"get":"post",V=typeof g=="string"&&ep.test(g),oe=le=>{if(p&&p(le),le.defaultPrevented)return;le.preventDefault();let q=le.nativeEvent.submitter,P=q?.getAttribute("formmethod")||d,ce=()=>D(q||le.currentTarget,{fetcherKey:o,method:P,navigate:r,replace:u,state:c,relative:f,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T});H&&r!==!1?N.startTransition(()=>ce()):ce()};return N.createElement("form",{ref:R,method:K,action:j,onSubmit:s?p:oe,...v,"data-discover":!V&&a==="render"?"true":void 0})});Mv.displayName="Form";function zv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tp(a){let o=N.useContext(xi);return Ke(o,zv(a)),o}function Wv(a,{target:o,replace:r,unstable_mask:s,state:u,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p,unstable_useTransitions:f}={}){let y=Gg(),w=fn(),T=Bo(a,{relative:d});return N.useCallback(v=>{if(lv(v,o)){v.preventDefault();let R=r!==void 0?r:Wo(w)===Wo(T),H=()=>y(a,{replace:R,unstable_mask:s,state:u,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p});f?N.startTransition(()=>H()):H()}},[w,y,T,r,s,u,o,a,c,d,g,p,f])}var Dv=0,jv=()=>`__${String(++Dv)}__`;function Bv(){let{router:a}=tp("useSubmit"),{basename:o}=N.useContext(Lt),r=Jb(),s=a.fetch,u=a.navigate;return N.useCallback(async(c,d={})=>{let{action:g,method:p,encType:f,formData:y,body:w}=cv(c,o);if(d.navigate===!1){let T=d.fetcherKey||jv();await s(T,r,d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||f,flushSync:d.flushSync})}else await u(d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||f,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,u,o,r])}function Rv(a,{relative:o}={}){let{basename:r}=N.useContext(Lt),s=N.useContext(on);Ke(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),c={...Bo(a||".",{relative:o})},d=fn();if(a==null){c.search=d.search;let g=new URLSearchParams(c.search),p=g.getAll("index");if(p.some(y=>y==="")){g.delete("index"),p.filter(w=>w).forEach(w=>g.append("index",w));let y=g.toString();c.search=y?`?${y}`:""}}return(!a||a===".")&&u.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:dn([r,c.pathname])),Wo(c)}function Hv(a,{relative:o}={}){let r=N.useContext(Yg);Ke(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tp("useViewTransitionState"),u=Bo(a,{relative:o});if(!r.isTransitioning)return!1;let c=Hn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Hn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return us(u.pathname,d)!=null||us(u.pathname,c)!=null}const Ov=[{day:1,title:"What Is Interest?",date:"2026-02-27",image:"images/day-1.png",sonnet:`**🪶 Sonnet I: The Lending of Seeds**

A boy once held a sack of golden grain,
His grandmother's last gift before she slept—
"Let not these seeds sit idle," she had kept
Her final breath to whisper through the rain.

A farmer came with nothing but his name,
And begged to borrow what the boy possessed.
"Return my sack, plus ten," the boy expressed,
And so the seeds were lent, and fortune came.

For he who lends what others need to grow
Shall find his patience paid in golden yield.
The idle hoard rots slow beneath the field,
While planted trust makes harvests overflow.

*So ask yourself before you spend or save:*
*Am I the lender — or the borrower's slave?*`,standard:`**💰 Day 1: What Is Interest?**

Before we can talk about building wealth, we need to understand one word: **interest**.

🧱 **The Concept**
Interest is the price of borrowing money — or the reward for lending it.

❓ **Why It Matters**
Every dollar you save or invest earns interest. Every dollar you borrow costs interest. Understanding which side you're on is the first step to financial independence.

⚙️ **How It Works**
Imagine your friend borrows $10 from you. They say "thanks, I'll give you $11 back next week." That extra $1? That's interest. You got paid for letting someone else use your money.

Banks work the same way. You put money in a savings account → the bank uses it → they pay you interest as a thank-you.

📖 **Definitions**
• **Interest**: Money paid for the use of money
• **Lender**: The person who gives the money (that's you when you save)
• **Borrower**: The person who uses the money (that's you when you take a loan)

🎯 **Buffett Wisdom**
Warren Buffett bought his first stock at age 11. He understood early: make your money work *for* you, not against you.

❓ **Tomorrow's Question:**
*What happens when you earn interest... on your interest?*`,parable:`**🏰 The Parable of the Seed Lender**

In a small village at the edge of a golden valley, there lived a boy named Kael who had nothing but a single sack of seeds — left to him by his grandmother, who whispered on her last day: *"Seeds are not for hoarding, child. They are for growing."*

---

One spring morning, a farmer named Tobren came to Kael's door, hat in hand.

"I have rich soil but no seeds," Tobren said. "Lend me your sack, and after the harvest, I will return it — plus ten extra handfuls, as thanks."

Kael thought carefully. The seeds were all he had. But his grandmother's words echoed in his mind.

He handed over the sack.

---

Summer passed. The rains came and went. And when autumn painted the valley in amber and gold, Tobren returned with a full sack of seeds — and ten extra handfuls, just as promised.

Kael stared at the bounty. "I did nothing," he said. "I just... let you use what I had."

Tobren smiled. "And that is exactly why you were rewarded. You gave your seeds a chance to *work*. Most people bury them in jars under their beds, where they sit and rot. You let them grow."

---

That night, Kael sat by the fire, counting his seeds. He had more than he started with — not because he toiled in the fields, but because he understood a simple truth:

> *When you lend what you have to someone who can grow it, the world pays you back with more.*

The village elders had a word for those extra ten handfuls. They called it **interest** — the reward for trusting your seeds to the soil of another.

---

**🌾 The Moral**

Every coin you save is a seed. You can bury it in a jar, where it sits unchanged. Or you can plant it — in a bank, an investment, a venture — and let it grow.

But beware: the same force works in reverse. When *you* are the borrower, it is *your* harvest that someone else reaps.

The wise ones of the valley always asked themselves: *Am I the lender of seeds — or the one paying for them?*

❓ *Tomorrow's tale: What happens when the seeds from your harvest... grow harvests of their own?*`},{day:2,title:"Compound Interest — The Eighth Wonder",date:"2026-02-28",image:"images/day-2.png",sonnet:`**🪶 Sonnet II: The Doubling Garden**

The elder drew her circles in the dirt—
Each ring a season, wider than the last.
"I planted twelve," she said, "when I was young,
And never touched the harvest as it passed."

The boy watched spirals bloom beneath her hand,
Each loop embracing more than what came first.
"But how?" he asked. "You never sowed again?"
"I let the seeds repay their own sweet thirst."

For interest earned becomes the soil anew,
And growth compounds like whispers in the dawn—
A single coin, left patient, splits in two,
Then four, then eight, until a fortune's drawn.

*The secret isn't starting rich or wise—*
*It's giving time the room to multiply.*`,standard:`**💰 Day 2: Compound Interest — The Eighth Wonder**

Yesterday we learned that interest is the reward for lending your money. But here's where it gets exciting: *what happens when you earn interest on your interest?*

🧱 **The Concept**
Compound interest means your earnings generate their own earnings. Your money doesn't just grow — it grows *faster* over time.

❓ **Why It Matters**
This is the single most powerful force in building wealth. It's the reason someone who starts saving at 20 can end up with more money than someone who saves twice as much starting at 30. Time is the secret ingredient.

⚙️ **How It Works**
Imagine you put $100 in a jar that magically adds 10% every year. After Year 1, you have $110. But in Year 2, you earn 10% on $110 — that's $11, not $10. Year 3? You earn on $121. Each year, the pile grows a little faster than the year before.

After 10 years: $259. After 25 years: $1,083. You never added another dollar — your money just kept multiplying itself.

This is why Buffett says starting early matters more than starting big.

📖 **Definitions**
• **Simple Interest**: Interest only on the original amount
• **Compound Interest**: Interest on the original amount *plus* all previous interest
• **Compounding Period**: How often interest gets added (daily, monthly, yearly)

🎯 **Buffett Wisdom**
"My wealth has come from a combination of living in America, some lucky genes, and compound interest." Buffett made over 99% of his $100B+ fortune after age 50 — that's compounding at work.

❓ **Tomorrow's Question:**
*If compound interest is so powerful, what's the one thing that can turn it against you?*`,parable:`**🏰 The Parable of the Doubling Garden**

Kael sat with his extra seeds, proud of the ten handfuls Tobren had paid him. But that evening, the village elder — a woman named Sable, ancient as the hills — came to sit beside him.

---

"You learned the first lesson," Sable said, watching the fire. "Lending seeds earns more seeds. But let me tell you what I learned when I was young."

She drew a circle in the dirt.

"When I was your age, I lent twelve seeds to a merchant. At harvest, he returned twelve — plus one extra. Just one."

Kael frowned. "That's barely anything."

"Patience." Sable drew another circle. "The next season, I lent all thirteen. I got back thirteen — plus one more, and a little bit extra. Fourteen seeds now."

Another circle. "The next year, fourteen became fifteen and change. Then sixteen. Then eighteen."

She kept drawing circles — each one slightly larger than the last.

"I never added a single seed of my own after that first twelve. I just kept replanting *everything* — the original seeds and every extra seed they earned."

---

Kael stared at the spiral of circles growing in the dirt. "But... the circles are getting bigger faster."

Sable smiled. "Yes. That is the secret. The extra seeds earn their *own* extra seeds. Growth feeds growth. The elders call this **compound interest** — interest upon interest, harvest upon harvest."

She pointed to the last circle, enormous compared to the first. "Forty seasons later, my twelve seeds had become a grove that stretches beyond the eastern hill. I never worked the field myself. I simply gave my seeds *time*."

---

"How much time?" Kael asked.

"That's the true lesson," Sable whispered. "It's not about how *many* seeds you start with. It's about how many *seasons* you let them grow. A farmer who plants early with a handful will always outgrow a farmer who plants late with a cartload."

She stood, brushing off her cloak.

"Most of my grove grew in the last ten seasons — after decades of patient, quiet compounding. The early years felt slow. The late years felt like magic."

---

**🌾 The Moral**

Compound interest is not a trick. It is time made visible. Each season's harvest becomes next season's planting — and the garden expands not in a straight line, but in a widening spiral.

The key is never to eat *all* the harvest. Always replant. Always give your seeds another season.

> *"The best time to plant a seed was twenty years ago. The second best time is today."*

❓ *Tomorrow's tale: If the doubling garden is so powerful, what dark force can turn it against you?*`},{day:3,title:"Debt — Compound Interest in Reverse",date:"2026-02-28",image:"images/day-3.png",sonnet:`**🪶 Sonnet III: The Thorned Path**

The garden grows for those who plant with care,
But there exists a darker, mirrored force—
When borrowed seeds demand a thorny share,
The debt compounds and swallows field and horse.

A merchant came with promises of gold,
"Take now, pay later," sweet as honeyed wine.
But every moon the interest took its hold,
And what was one became eleven, then nine-and-nine.

The vines crept slow at first, a harmless thread,
Then wrapped the barn, the plow, the granary door.
He'd borrowed spring but harvested instead
A winter debt that always wanted more.

*Beware the path where borrowed seeds are sown—*
*For compound growth cuts deepest on a loan.*`,standard:`**💰 Day 3: Debt — Compound Interest in Reverse**

Yesterday we saw how compound interest can turn a handful of seeds into a forest. But here's the dark side: *the exact same force works against you when you owe money.*

🧱 **The Concept**
Debt is compound interest working in reverse. Instead of your money growing for you, it grows for someone else — and you're the one paying.

❓ **Why It Matters**
Credit cards, car loans, student loans — they all use compound interest. If you only make minimum payments, you can end up paying back 2x or 3x what you originally borrowed. The same math that builds fortunes can trap people in cycles of debt for decades.

⚙️ **How It Works**
Imagine you borrow $1,000 on a credit card at 20% interest. After one year, you owe $1,200. But if you don't pay it off, next year you owe 20% on $1,200 — that's $1,440. Then $1,728. In just 4 years, your $1,000 debt nearly doubled, and you never bought anything else.

It's the Doubling Garden in reverse — except the garden is eating *your* house.

The minimum payment trap is real: a $5,000 credit card balance at 18% with minimum payments takes **decades** to pay off and costs over $12,000 total.

📖 **Definitions**
• **Debt**: Money you owe to someone else
• **Principal**: The original amount borrowed
• **APR (Annual Percentage Rate)**: The yearly interest rate on a loan or credit card
• **Minimum Payment**: The smallest amount you can pay — designed to keep you in debt longer

🎯 **Buffett Wisdom**
"I've seen more people fail because of liquor and leverage — leverage being borrowed money." Buffett has consistently warned that debt is the #1 destroyer of financial independence.

❓ **Tomorrow's Question:**
*If debt is so dangerous, how do you know the difference between "good debt" and "bad debt"?*`,parable:`**🏰 The Parable of the Thorned Path**

Kael was beginning to understand the power of planting seeds. But one evening, a traveling merchant arrived in the village — a man named Varen, draped in silk and smiling wide.

---

"Young man," Varen said, "why wait for your seeds to grow when you can have what you want *now*?"

He spread a blanket of treasures — a fine leather satchel, a silver compass, boots that could walk through any storm.

"Take them," Varen said. "Pay me back with seeds after the harvest. Just a small fee for the convenience."

Kael hesitated, but another villager — a young carpenter named Edrin — stepped forward eagerly.

"I'll take the boots, the satchel, *and* the compass," Edrin declared.

Varen's smile widened. "Of course. You owe me 100 seeds, plus 20 extra for each season you take to repay."

---

The first season passed. Edrin couldn't repay — he'd spent his time enjoying his new things instead of planting. His debt: 120 seeds.

The second season? He owed interest on 120. That's 144.

Third season: 173. Fourth: 207.

Edrin watched in horror as the number grew faster and faster, like thorny vines creeping across his workshop. First they took his tools. Then his timber. Then his workshop itself.

"But I only borrowed 100 seeds!" Edrin cried.

"Yes," Varen said calmly. "And the interest borrowed from the interest. That is the nature of debt."

---

Kael watched from across the square, remembering Sable's Doubling Garden. The same spiraling circles — but this time, they were spiraling *around* Edrin, squeezing tighter with each turn.

He went to Sable that night. "The merchant used the same power you showed me — the compounding — but as a weapon."

Sable nodded gravely. "The Doubling Garden has no loyalty, child. It serves whoever plants the seeds. When you save and invest, it works for you. When you borrow, it works for *them*. The math does not care whose side it's on."

---

**🌾 The Moral**

Compound interest is a tool — like fire. It can warm your home or burn it down. When you're the lender (saving, investing), the spiral grows your wealth. When you're the borrower, the spiral grows your chains.

> *The wise farmer never borrows seeds for things that don't grow more seeds.*

Before you take on any debt, ask yourself: *Will this borrowed seed plant a harvest — or just buy a prettier satchel?*

❓ *Tomorrow's tale: If debt can be a trap, can it ever be a bridge? How do you tell the difference between chains and wings?*`},{day:4,title:"Good Debt vs Bad Debt",date:"2026-02-28",image:"images/financial-independence/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Bridge and the Chain**

Two paths diverge where borrowed rivers flow—
One builds a bridge across the churning deep,
The other binds with chains that twist and grow
Around the fool who borrows what he'll keep.

The merchant bought a mill with borrowed gold,
Its grinding stones turned grain to flour fine—
Each season's profit paid the debt threefold,
And soon the mill was wholly, freely mine.

But Edrin borrowed for a velvet cloak,
Which frayed and faded even as he paid.
The interest grew while fabric thinned and broke—
He bought a ghost and called the debt "well-made."

*Ask not "Can I afford to borrow this?"—*
*Ask "Will it earn me more than what I give?"*`,standard:`**💰 Day 4: Good Debt vs Bad Debt**

Yesterday we saw how debt is compound interest working against you — the Thorned Path. But today we answer a crucial question: *if debt is so dangerous, how do you know the difference between "good debt" and "bad debt"?*

🧱 **The Concept**
Good debt puts money in your pocket over time. Bad debt takes money out. The difference isn't the amount — it's whether the borrowed money creates value greater than its cost.

❓ **Why It Matters**
Not all borrowing is reckless. A mortgage on a home that appreciates, a student loan for a high-earning career, a business loan that generates revenue — these can be bridges to wealth. A credit card balance for vacations, clothes, or dining out? That's yesterday's thorned path. The ability to tell them apart is one of the most important financial skills you'll ever develop.

⚙️ **How It Works**
Think of it as a simple test: **will this borrowed money earn me more than the interest I'll pay?**

If you borrow $10,000 at 5% interest to start a business that earns 20% returns, you're netting 15% — the debt is a tool working *for* you. If you borrow $10,000 at 20% interest to buy furniture, the furniture loses value while the debt grows. You're paying compound interest on something worth less every year.

A mortgage at 4% on a house that appreciates 6% per year? Good debt — you're gaining more than you're paying. A car loan at 8% on a vehicle that loses 20% of its value the day you drive it off the lot? The math doesn't work.

The key question isn't "can I afford the monthly payment?" — it's "will this thing I'm buying grow in value or generate income that exceeds what the debt costs me?"

📖 **Definitions**
• **Good Debt**: Borrowing that finances an asset expected to grow in value or generate income
• **Bad Debt**: Borrowing that finances consumption or depreciating assets
• **Leverage**: Using borrowed money to amplify returns (works both ways — amplifies losses too!)
• **Asset**: Something that puts money in your pocket over time
• **Liability**: Something that takes money out of your pocket over time

🎯 **Buffett Wisdom**
Buffett has used debt strategically through Berkshire Hathaway's insurance "float" — essentially borrowing at near-zero cost to invest at high returns. But he never borrows to consume. "If you're smart, you don't need leverage. If you're not smart, it will kill you."

❓ **Tomorrow's Question:**
*Now that you understand earning, compounding, and debt — what's the simplest rule for deciding how much of your income to save versus spend?*`,parable:`**🏰 The Parable of the Bridge and the Chain**

Word of Edrin's ruin spread quickly through the village. Some swore off borrowing entirely — "Never take a single seed from a lender!" they cried. But Sable, watching from her doorstep, shook her head.

---

"Come," she said to Kael that evening. "I want to show you something."

She led him to the river that split the village in two. On the far bank stood a flour mill — its great stone wheel turning with the current, grinding grain for the entire valley.

"That mill was built with borrowed seeds," Sable said.

Kael stared. "Borrowed? But you said debt was dangerous—"

"I said *compound interest* has no loyalty. I never said borrowing was forbidden." She pointed to the mill. "Thirty years ago, a woman named Petra had no seeds of her own. She borrowed 500 from a merchant — with interest, she owed 600 by year's end."

"That sounds like Edrin's story," Kael said.

"Listen. Petra used those 500 seeds to build *this mill*. In its first season, the mill earned her 200 seeds from grinding fees. She paid back 100 toward her debt and reinvested the rest. By the third year, the mill earned 400 seeds per season. She paid the debt in full and has been profiting ever since."

---

Kael thought about this. "So Petra borrowed seeds... to build something that *grows more seeds*."

"Exactly." Sable drew two lines in the dirt. "There are two kinds of borrowed seeds. The first kind you plant in fertile soil — a business, a skill, land that produces. The debt costs you interest, but the thing you bought earns you *more* than the interest. The borrowed seeds built a bridge to wealth."

She drew the second line — tangled and knotted. "The second kind you spend on things that wilt. A velvet cloak. A feast. A shiny trinket. These things don't earn seeds. They don't grow. They just sit there losing value while the debt underneath them grows thorns."

---

"So how do I know which is which?" Kael asked.

Sable held up one finger. "Ask one question before you borrow: **will this thing I'm buying earn me more seeds than the debt will cost me?** If the answer is yes — and you've done the math honestly — then the debt is a bridge. If the answer is no, or you haven't done the math, it's a chain."

She looked toward Edrin's shuttered workshop. "Edrin never asked that question. He just wanted the boots."

---

Kael nodded slowly. The same force — compound interest — could build a mill or destroy a carpenter. It depended entirely on what you did with the borrowed seeds.

"Remember," Sable said as they walked home. "The wise never say 'I can afford the payments.' They say 'Will this earn more than it costs?' Those are very different questions."

---

**🌾 The Moral**

Debt is a river. You can build a bridge across it — borrowing to invest in something that grows — or you can fall in and let the current pull you under. The difference is never the act of borrowing itself. It's *what you do with what you borrow.*

> *"Before you take a single borrowed seed, ask: am I building a mill, or buying a cloak?"*

❓ *Tomorrow's tale: Kael has learned to earn, to compound, and to borrow wisely. But how much of each harvest should he keep for himself — and how much should he replant?*`},{day:5,title:"The 50/30/20 Rule",date:"2026-03-01",image:"images/financial-independence/day-5.jpg",sonnet:`**🪶 Sonnet V: The Three Vessels**

From one clear stream, three vessels must be filled,
Each portion measured by eternal law:
The first, with half, keeps mortal needs fulfilled—
Shelter and bread, without which life withdraws.

The second holds what makes existence bright,
Three portions out of ten for joy and art,
For music, love, and laughter's pure delight
That feeds the hungered, ever-yearning heart.

But wisest is the third vessel's sacred share,
Two portions kept for tomorrow's golden dawn,
Where patient drops grow into fortunes fair
And freedom's seeds in silence are withdrawn.

*Balance these three and watch your wealth take flight,*
*As darkness turns compound drops to light.*`,standard:`**💰 Day 5: The 50/30/20 Rule**

Yesterday we learned to distinguish good debt (which puts money in your pocket) from bad debt (which takes it out). Today we answer: *what's the simplest rule for deciding how much of your income to save versus spend?*

🧱 **The Concept**
The 50/30/20 rule divides your after-tax income into three buckets: 50% for needs, 30% for wants, and 20% for savings and debt repayment.

❓ **Why It Matters**
Without a clear spending plan, money disappears into lifestyle inflation and impulse purchases. This rule creates automatic boundaries that ensure you're building wealth while still enjoying life. It's simple enough to follow but flexible enough to adapt to your situation.

⚙️ **How It Works**
Start with your take-home pay. **Needs (50%)** cover rent, utilities, groceries, minimum debt payments, insurance — things you truly cannot live without. **Wants (30%)** are dining out, entertainment, hobbies, travel — everything that makes life enjoyable but isn't essential. **Savings (20%)** includes emergency fund contributions, retirement accounts, extra debt payments, and investments.

If you earn $4,000 monthly after taxes: $2,000 for needs, $1,200 for wants, $800 for savings. Can't fit your needs into 50%? Your housing might be too expensive. Struggling to save 20%? Start with 10% and increase gradually. The rule bends, but never break the savings habit.

The magic happens in the 20% bucket — that's your compound interest machine from Day 2, working every month to buy your freedom.

📖 **Definitions**
• **Take-home pay**: Your income after taxes and deductions
• **Needs**: Essential expenses required for basic living
• **Wants**: Discretionary spending that enhances lifestyle
• **Pay yourself first**: Saving before spending on wants
• **Lifestyle inflation**: Increasing spending as income rises

🎯 **Buffett Wisdom**
Buffett lives this principle in reverse — he determines what he needs, enjoys some wants, then invests everything else. "Do not save what is left after spending, but spend what is left after saving."

❓ **Tomorrow's Question:**
*You're saving 20% consistently — but where exactly should those savings go first to build the strongest financial foundation?*`,parable:`The morning mist clung to the valley as Kael found Sable tending three clay vessels by the stream, each filled with water from the same source.

"Elder," Kael began, "I understand earning like water flowing, and the magic of letting drops multiply. I know which debts are thorns and which are bridges. But how do I know where each drop should go?"

Sable smiled, lifting the first vessel. "This holds half your water — for what sustains life itself. Food, shelter, warmth. Without these, the body fails." She poured carefully, the water crystal clear.

She raised the second vessel. "This holds three portions of ten — for what brings joy to life. Music, stories, celebration. Without these, the spirit withers." The water danced as it fell.

"And this?" Kael asked, watching her lift the third vessel.

"Two portions of ten — for tomorrow's freedom." Sable's voice grew reverent. "These drops you never touch. They multiply in darkness, growing stronger while you sleep, until one day they flow back as a river."

Tobren approached, carrying his own three vessels. "I learned this truth through seasons of plenty and famine," he said. "When harvest came, I spent freely on everything I desired. Come winter, I had nothing. Now I fill these vessels first — needs, then joys, then tomorrow. The third vessel saved my farm."

Sable nodded. "The vessels must balance, young Kael. Too much to needs and you live without beauty. Too much to wants and you live without security. Too little to tomorrow and you live without hope. But maintain the balance, and abundance flows to all three."

As evening fell, Kael watched the three vessels catch moonlight, understanding at last how to channel the stream of his days.

**Moral**: *Like water finding its level, prosperity flows to those who divide their resources with wisdom — providing for today while securing tomorrow.*

*Tomorrow, Sable will reveal where the third vessel's water should flow first to create the strongest foundation...*`},{day:6,title:"Emergency Fund First",date:"2026-03-02",image:"images/financial-independence/day-6.jpg",audio:"audio/financial-independence/day-6",sonnet:`**🪶 Sonnet VI: Emergency Fund First**

Before you chase the golden profits bright,
Build first a fortress made of liquid gold,
Three months or six of needs kept close in sight,
A shield against what future may unfold.

When storms arise and steady income fails,
When unexpected bills come knocking loud,
This cash reserve ensures your ship still sails
While others founder, broken and unbowed.

Not buried treasure meant for distant dreams,
But ready coin for life's immediate test,
A well of strength when nothing's as it seems,
The cornerstone on which to build the rest.

*First fund emergency, then wealth pursue,*
*For those who plan ahead see vision through.*`,standard:`💰 Day 6: Emergency Fund First

Your 20% savings should go to an **emergency fund first** — a cash cushion covering 3-6 months of essential expenses before you invest a single dollar elsewhere. This foundation protects you from derailing your wealth-building journey when life inevitably throws curveballs.

🧱 **The Concept**
An emergency fund is liquid cash set aside exclusively for unexpected expenses like job loss, medical bills, or major repairs — not vacations or shopping sprees.

❓ **Why It Matters**
Without an emergency buffer, you'll raid your investments or accumulate high-interest debt when crisis strikes. This destroys compound interest and creates financial stress. An emergency fund acts as self-insurance, letting you weather storms without derailing your long-term plans.

⚙️ **How It Works**
Calculate your monthly **essential expenses** (rent, utilities, groceries, insurance, minimum debt payments) and multiply by 3-6 months. If your needs cost $3,000 monthly, aim for $9,000-$18,000. Start with $1,000 as a mini-emergency fund, then build systematically. Keep this money in a **high-yield savings account** — boring but accessible. Once your emergency fund is complete, redirect that 20% toward investments and retirement accounts. The fund isn't an investment; it's insurance against financial catastrophe.

📖 **Definitions**
• **Emergency fund**: Cash reserves for unexpected expenses only
• **Liquid**: Easily accessible without penalties or delays
• **High-yield savings account**: Savings account earning competitive interest rates
• **Essential expenses**: Minimum costs required to survive and function
• **Self-insurance**: Using your own money instead of relying on credit

🎯 **Buffett Wisdom**
Buffett keeps massive cash reserves at Berkshire Hathaway, calling it "financial strength that cannot be taken away by stock market fluctuations or economic downturns."

❓ **Tomorrow's Question:**
*Once your emergency fund is built, you're ready to invest — but should you pay off all your debt first, or can you sometimes invest while carrying certain debts?*`,parable:`The morning sun cast long shadows across the village square as Kael approached Sable's dwelling, his mind still wrestling with yesterday's lesson about dividing his earnings. The wise elder sat beneath the ancient oak, hands folded in contemplation.

"Teacher," Kael began eagerly, "I've been practicing the 50-30-20 rule with my coin-sorting. But where should my savings go first? Should I bury them in different places?"

Sable's weathered face creased into a knowing smile. "Ah, young Kael. Before a fortress can have towers reaching toward the heavens, what must it have first?"

"A strong foundation?" Kael ventured.

"Precisely. And what protects a village when storms rage and crops fail?"

Kael thought of the harsh winter three seasons past, when Tobren's grain stores had saved many families from hunger. "Reserves," he whispered. "Stored provisions."

"Your financial foundation must be an emergency reserve," Sable explained, gesturing toward the village well. "Just as we keep this well full for drought seasons, you must keep liquid coin accessible for life's inevitable storms. Not buried treasure for distant dreams, but ready provisions for immediate need."

That afternoon, Tobren joined them, dust on his boots from the fields. "I learned this wisdom the hard way," the farmer admitted. "Once I put all my surplus into expanding my land, thinking I was building wealth. Then came the year of poor harvests and my ox fell lame. With no reserves, I borrowed at terrible terms, nearly losing everything I'd built."

"How much should one keep in reserve?" Kael asked.

Sable picked up three smooth stones and six rougher ones. "Count your essential monthly needs — shelter, food, tools, obligations. Three to six months' worth, kept where you can reach it quickly. This isn't your investment treasure; it's your shield against calamity."

Tobren nodded vigorously. "Now I fill my emergency stores first, every harvest. Only when that granary is full do I expand elsewhere. It's the difference between surviving storms and being destroyed by them."

As the day waned, Sable traced patterns in the earth. "The wealthy understand this principle deeply, young Kael. They maintain vast reserves not from fear, but from wisdom. Financial strength that cannot be swept away by market tempests or economic drought."

**Moral:** Before reaching for golden towers, build an unshakeable foundation. The emergency fund is not an investment but insurance — your first line of defense against life's storms.

*Tomorrow, Kael would learn a puzzling truth about debt and investment that challenges common wisdom...*`},{day:7,title:"Good Debt vs. Bad Debt",date:"2026-03-03",image:"images/financial-independence/day-7.jpg",audio:"audio/financial-independence/day-7",sonnet:`**🪶 Sonnet VII: Good Debt vs. Bad Debt**

Not every chain that binds the soul is cruel,
Some debts lift high while others drag us down,
The merchant's vice makes him a borrowing fool,
While farmer's loan brings harvest, gold, renown.

The interest rate reveals the devil's hand,
When twenty percent devours your yearly gain,
But four percent helps purchase fertile land
That yields far more than what you pay in pain.

Let mathematics guide your moral choice,
High-interest debt demands immediate death,
While low-cost borrowing gives investment voice
To compound growth with every patient breath.

*The wise discern which debts serve wealth's true end:*
*Some chains enslave, while others help ascend.*`,standard:`💰 Day 7: Good Debt vs. Bad Debt

The answer depends on the **interest rate** — pay off high-interest debt (credit cards at 18-25%) immediately since no investment reliably beats those rates. However, low-interest debt like mortgages (3-5%) or student loans (4-6%) can coexist with investing, since the stock market's long-term average return of 10% exceeds these rates.

🧱 **The Concept**
**Good debt** helps build wealth or income (mortgages, business loans), while **bad debt** finances consumption with high interest rates that destroy wealth.

❓ **Why It Matters**
Not all debt is created equal — some debt is a tool for building wealth, while other debt is a wealth destroyer. Understanding this distinction determines whether you should prioritize debt payoff or investing. Making the wrong choice costs you thousands in opportunity cost or interest payments.

⚙️ **How It Works**
Use the **interest rate test**: if debt costs more than 7-8% annually, pay it off before investing. Credit card debt at 22% interest guaranteed destroys wealth faster than any investment can build it. Conversely, a 4% mortgage allows you to invest the difference and potentially earn 6% more annually through stock market returns. Consider a $10,000 choice: paying extra on a 4% mortgage saves $400 yearly, but investing that same money at 10% market returns earns $1,000 yearly. The **debt avalanche method** prioritizes highest-interest debt first for maximum mathematical benefit.

🎯 **Buffett Wisdom**
"I've seen more people fail because of liquor and leverage — leverage being borrowed money" — yet Buffett strategically uses low-cost debt when the returns exceed the borrowing costs.

❓ **Tomorrow's Question**
*You understand debt prioritization, but once you start investing, should you try to time the market by waiting for crashes and corrections, or is there a better approach?*`,parable:`The morning sun cast long shadows as Kael found Sable examining two ledgers by the village fountain. "Elder," Kael began hesitantly, "yesterday you spoke of emergency funds, but I'm troubled. Should I pay every debt before investing, or can some debts wait?"

Sable smiled knowingly. "Ah, young seeker, you've discovered the great paradox of wealth building. Come, let me show you something." He pointed to farmer Tobren's fields in the distance. "See how Tobren borrowed silver to buy that fertile eastern field? The harvest from that land pays for the loan and more besides. This is **good debt** — it feeds him."

Kael nodded, following Sable's gaze to the village tavern where a merchant stumbled out, pockets empty. "But see Aldric there? He borrowed gold at cruel rates to buy fine clothes and exotic wines. His debt devours him like a hungry beast. This is **bad debt** — it starves the soul."

"The difference," Sable continued, opening his weathered ledgers, "lies in the **rate of tribute** demanded. When debt costs more than your investments can reasonably earn, it becomes a chain around your ankle. But when debt costs less than your gains, it becomes a lever that lifts you higher."

Tobren approached, wiping sweat from his brow. "Elder speaks truly," the farmer said. "My field loan costs me four pieces of silver yearly for each hundred borrowed. Yet that same field yields me ten pieces profit. The debt serves me, not the reverse."

Sable traced numbers in the dust. "The **interest rate test** reveals all truth, young Kael. High-interest debt — like the twenty pieces per hundred the merchant pays — must be slain immediately. But low-interest debt can coexist with wise investment, for time and compound growth favor the patient investor."

As the three walked toward Tobren's prosperous fields, Sable added quietly, "Remember: debt is neither good nor evil by nature. It is a tool, like fire — warming your hearth or burning down your house, depending on your wisdom in wielding it."

**Moral**: Not all debt is created equal — the interest rate determines whether debt serves you or enslaves you.

**Tomorrow**: The young investor learns whether timing the market's storms and sunshine leads to riches or ruin.`},{day:8,title:"Dollar-Cost Averaging vs. Market Timing",date:"2026-03-03",image:"images/financial-independence/day-8.jpg",audio:"audio/financial-independence/day-8",sonnet:`**🪶 Sonnet VIII: Dollar-Cost Averaging vs. Market Timing**

The fool waits for the perfect time to sow,
While wisdom plants through sunshine and through rain.
Though market storms may ebb and markets flow,
Consistent care yields the abundant grain.

What prophet knows when fortune's wheel will turn?
The crystal ball reveals but clouded lies.
While timing seekers crash and timing burn,
The steady sower sees his harvest rise.

Each month the same amount, through fear and greed,
Buys fewer shares when prices reach their height.
But when the market bleeds, that faithful deed
Acquires more value hidden from plain sight.

*Time in the garden beats the timing game—*
*The patient planter earns enduring fame.*`,standard:`💰 Day 8: Dollar-Cost Averaging vs. Market Timing

🧱 **The Concept**
**Dollar-cost averaging** involves investing fixed amounts regularly regardless of market conditions, while **market timing** attempts to buy low and sell high by predicting market movements.

❓ **Why It Matters**
Even professional investors fail at market timing 80% of the time, yet individual investors consistently try to outsmart the market. This behavioral trap causes people to buy high during euphoria and sell low during panic. Missing just the 10 best market days over 20 years can cut your returns in half.

⚙️ **How It Works**
Dollar-cost averaging automatically buys more shares when prices are low and fewer when high — imagine investing $500 monthly regardless of whether the market is up or down. When stocks cost $50, you buy 10 shares; when they drop to $25, you buy 20 shares. This **price averaging** reduces your cost basis over time without requiring perfect timing. The **time in market beats timing the market** principle shows that staying invested through all conditions typically outperforms jumping in and out. Even if you invested at every market peak since 1950, you'd still beat someone who waited for the "perfect" entry point.

🎯 **Buffett Wisdom**
"Time is the friend of the wonderful business, the enemy of the mediocre" — consistent investing over decades matters more than perfect timing.

❓ **Tomorrow's Question**
*If consistent investing works better than timing, how do you choose what to actually invest in — should you pick individual stocks or is there a simpler approach for building wealth?*`,parable:`The morning mist clung to the valley as Kael found Sable tending to his garden with methodical precision. The elder watered each plant with exactly the same amount, regardless of whether yesterday had brought sun or storm.

"Why do you water the same amount each day?" Kael asked, watching the steady rhythm. "Wouldn't it be wiser to wait for the perfect conditions?"

Sable smiled, continuing his routine. "Young Kael, observe Tobren across the field. He studies the clouds each morning, deciding whether to plant based on his predictions of weather."

Kael turned to see Tobren standing idle in his field, seeds still in hand, waiting for what he deemed the perfect moment. Months had passed, yet his field remained largely unplanted.

"But surely timing matters," Kael protested. "If I could plant only when conditions are ideal—"

"Ah," Sable interrupted, gesturing toward his flourishing garden. "See how my consistent watering has nurtured growth through both drought and deluge? My plants have learned to thrive in all seasons because they receive steady care. Tobren's sporadic efforts yield sporadic results."

The elder knelt beside a particularly robust tomato plant. "This received the same daily attention as all others, yet it has grown strongest not because I timed its care perfectly, but because it never lacked for attention."

As they watched, storm clouds gathered suddenly overhead. Tobren scrambled to cover his few planted seeds, while Sable's established garden stood ready to weather whatever came.

"The wise gardener plants consistently," Sable concluded, "knowing that time and patience create abundance, while those who wait for perfection often harvest only regret."

**Moral:** Regular, consistent action builds wealth more reliably than waiting for perfect conditions.

Tomorrow, Kael would learn what seeds of investment deserve such faithful tending...`},{day:9,title:"Index Funds vs. Stock Picking",date:"2026-03-04",image:"images/financial-independence/day-9.jpg",audio:"audio/financial-independence/day-9",sonnet:"",standard:`💰 Day 9: Index Funds vs. Stock Picking

For most investors, **index funds** offer a simpler, more effective approach than picking individual stocks. While stock picking can work for dedicated investors willing to spend hundreds of hours researching companies, index funds provide instant diversification across hundreds or thousands of stocks with minimal effort and fees.

🧱 **The Concept**
**Index funds** own every stock in a market index (like the S&P 500), while **stock picking** involves selecting individual companies you believe will outperform.

❓ **Why It Matters**
Over 90% of professional fund managers fail to beat index funds over 15-year periods, despite having teams of analysts and insider access. Individual stock pickers face even worse odds — studies show most people's stock picks underperform the market by 2-7% annually. The **diversification** of index funds protects you from company-specific disasters while capturing overall market growth.

⚙️ **How It Works**
An S&P 500 index fund automatically owns shares in Apple, Microsoft, Amazon, and 497 other top companies in proportion to their market value. If you invest $1,000, you instantly own tiny pieces of America's best businesses without researching financial statements or worrying about individual company risks. When one stock crashes, others balance it out. **Total stock market index funds** go even further, owning virtually every publicly traded company. The annual fees (expense ratios) run as low as 0.03%, meaning you keep 99.97% of your returns instead of paying high management fees.

🎯 **Buffett Wisdom**
"A low-cost index fund is the most sensible equity investment for the great majority of investors" — even the Oracle of Omaha recommends this approach for most people.

❓ **Tomorrow's Question**
*If index funds are so effective, why do people still chase complex investment strategies and exotic financial products — what psychological traps make simple solutions feel insufficient?*`,parable:`As dawn broke over the marketplace, Kael found Sable examining two merchant stalls. "Elder," Kael said, "yesterday you spoke of steady investing. But how do I choose what seeds to plant — should I pick individual crops or follow some simpler path?"

Sable gestured toward the first stall, where a merchant displayed exotic seeds from distant lands. "This merchant, like many stock pickers, promises riches from rare varieties. He claims to know which seeds will yield the greatest harvest." The merchant's prices were steep, and he spoke in riddles about weather patterns and soil mysteries.

At the second stall, an elderly woman sold simple packets labeled "Village Garden Mix" — seeds from every successful crop grown in their region for generations. "This wise woman," Sable explained, "offers what we call an index of prosperity. Instead of betting on one miraculous plant, you sow seeds from all the village's proven crops."

Tobren approached, his weathered hands holding both types of seeds. "Young Kael, I once spent years trying to predict which single crop would bring fortune. I studied moon phases, consulted weather-seers, and lost many harvests to my clever guessing. Now I plant the village mix — when drought kills my wheat, my beans still flourish. When frost damages my vegetables, my grains survive. I work less and harvest more."

"But surely," Kael protested, "a skilled farmer can choose the best crops?"

Sable smiled knowingly. "Even master farmers fail more often than they succeed at predicting which single plant will thrive. The village mix ensures you capture the growth of all successful crops without needing to be right about any particular one."

**Moral:** *Diversification through simplicity often outperforms complexity through speculation.*

*Tomorrow, Sable will reveal why the human heart rebels against such simple wisdom...*`},{day:10,title:"The Psychology of Overcomplicating Wealth",date:"2026-03-04",image:"images/financial-independence/day-10.jpg",audio:"audio/financial-independence/day-10",sonnet:`**🪶 Sonnet X: The Psychology of Overcomplicating Wealth**

When simple paths to riches lay in sight,
Why do we seek the maze of complex schemes?
Our minds, deceived by glittering insight,
Prefer elaborate over modest dreams.

The merchant sells what sparkles and confounds,
While wisdom wears the garb of common clay.
Though plain truth builds the most enduring grounds,
We chase the bright illusions that betray.

The wealthy know what fools refuse to see:
That boring funds outshine the exotic trade.
Yet pride demands grand complexity,
So fortunes in false sophistication fade.

*For those who master simple, patient art*
*Find riches flow to the untroubled heart.*`,standard:`💰 Day 10: The Psychology of Overcomplicating Wealth

Psychological traps like **status anxiety** and **complexity bias** make simple solutions feel insufficient because our brains equate difficulty with value. We assume that expensive financial advisors, exotic investments, and complex strategies must be superior to "boring" index funds, even when evidence proves otherwise. This mental bias costs investors billions annually.

🧱 **The Concept**
**Complexity bias** is our tendency to believe that complicated solutions are better than simple ones, especially when money is involved.

❓ **Why It Matters**
The financial industry profits enormously from this bias, selling expensive products that underperform simple index funds. Investors pay higher fees for hedge funds, structured products, and active management that typically deliver worse results. Meanwhile, the wealthy quietly use boring, low-cost strategies while marketing complexity to everyone else.

⚙️ **How It Works**
A financial advisor selling a "sophisticated portfolio" of international bonds, emerging market funds, commodities, and alternative investments sounds impressive — but studies show these complex portfolios rarely outperform a simple three-fund portfolio (total stock market, international stocks, bonds). The complexity creates an illusion of expertise while generating higher fees. **Analysis paralysis** also keeps people from starting — they research endlessly instead of investing in simple index funds. The most successful investors often have the most boring portfolios: they buy index funds regularly and ignore market noise.

🎯 **Buffett Wisdom**
"There seems to be some perverse human characteristic that likes to make easy things difficult."

❓ **Tomorrow's Question**
*If wealthy people use simple strategies while selling complexity to others, how can you distinguish between genuine financial education and profitable confusion?*`,parable:`Kael found Sable studying a collection of intricate mechanical devices in the village workshop, each more elaborate than the last. Gears turned within gears, springs coiled through chambers, and brass fittings gleamed in the lamplight.

"These contraptions promise to predict the rain," Sable explained, gesturing to the complex instruments. "The merchant who sold them insisted that simple weather wisdom — watching clouds, feeling wind, observing animals — was too primitive for a progressive village."

"Do they work better than the old ways?" Kael asked, mesmerized by their spinning complexity.

"Not remotely." Sable picked up a smooth river stone. "This simple stone, when placed outside, tells me more about coming weather than all these mechanisms combined. Wet means rain, warm means sun, cool means change approaching. But the merchant convinced half the village that complexity equals superiority."

Tobren emerged from behind a workbench, oil staining his hands. "I spent my entire harvest payment on that brass contraption with seventeen dials. It predicted drought during our wettest season. Meanwhile, my grandfather's simple rule — 'red sky at night, sailor's delight' — hasn't failed in forty years."

"Why do we fall for such deceptions?" Kael wondered.

"Because simple truths wound our pride," Sable replied. "We want to believe that wealth requires secret knowledge, that success demands sophisticated tools. The merchants exploit this vanity, selling us complicated solutions to simple problems."

The elder opened a worn ledger. "The wealthiest farmers in neighboring valleys use the most basic methods — good seed, rich soil, careful timing. Yet they market 'advanced agricultural systems' to ambitious newcomers who pay dearly for inferior results."

**Moral:** Complexity often masks incompetence, while simplicity reveals mastery. The wise distinguish between genuine sophistication and profitable confusion.

Tomorrow, Kael will learn how to separate true wisdom from clever marketing...`},{day:11,title:"Information vs. Wisdom in Financial Decision-Making",date:"2026-03-05",image:"images/financial-independence/day-11.jpg",audio:"audio/financial-independence/day-11",sonnet:`**🪶 Sonnet XI: Information vs. Wisdom in Financial Decision-Making**

A thousand voices cry from every screen,
Each expert promising the golden key,
While simple truths lie buried and unseen
Beneath the noise of false complexity.

The wise investor learns to close their ears
To daily predictions and market fear,
For in the silence, clarity appears—
The path to wealth was always calm and clear.

Yet mortals crave the excitement of the chase,
They feast on data, starve on patient thought,
And in their hunger lose the steady pace
That turns small seeds to harvests dearly bought.

*While information flows like raging flood,*
*True wisdom waits in stillness, like old blood.*`,standard:`💰 Day 11: Information vs. Wisdom in Financial Decision-Making

🧱 **The Concept**
**Information overload** creates the illusion of knowledge while **wisdom** comes from understanding what to ignore and when to act.

❓ **Why It Matters**
The financial media generates endless content because confusion keeps you consuming their products instead of taking simple action. Financial news channels, investment newsletters, and market analysis create artificial urgency around daily fluctuations that are meaningless for long-term wealth building. True financial education teaches you to filter signal from noise, while profitable confusion keeps you dependent on expert opinions.

⚙️ **How It Works**
Consider two investors: one reads financial news daily, tracks dozens of metrics, and constantly adjusts their portfolio based on expert predictions. The other checks their account quarterly, automatically invests in index funds, and ignores market commentary. Studies consistently show the second investor outperforms the first. **Analysis paralysis** disguises itself as research — you feel productive consuming financial content while avoiding the boring work of consistent investing. The financial industry profits from this cycle: more complexity means more products to sell, more fees to charge, and more dependency on their services. Real wisdom recognizes that most financial information is entertainment disguised as education.

🎯 **Buffett Wisdom**
"What counts for most people in investing is not how much they know, but rather how realistically they define what they don't know."

❓ **Tomorrow's Question**
*If the most profitable investment strategy is also the most boring, why do we instinctively seek excitement and complexity when building wealth?*`,parable:`"Master Sable," Kael said, approaching the elder who sat reading beneath the great oak, "Tobren spends hours each morning studying weather patterns, soil reports, and market predictions from distant lands. He knows the price of grain in every village, the rainfall in every region, yet his harvests remain poor. How can someone so informed struggle so much?"

Sable closed his weathered tome and smiled. "Tell me, young one, what did you observe in Tobren's fields yesterday?"

"He was pulling up seedlings to examine their roots, checking the soil depth, measuring the spacing between plants. He seemed very... thorough."

"And what of Old Henrik's field beside it?"

Kael scratched his head. "Henrik just planted his seeds and left them alone. But his crops always flourish while Tobren's wither from constant disturbance."

Sable nodded slowly. "Information and wisdom are not the same river, though they may seem to flow together. Tobren drowns in the first while thirsting for the second. He knows the color of soil in a hundred villages but cannot sit still long enough to let his own seeds grow."

The elder stood and walked toward Tobren's field, where the farmer was frantically adjusting irrigation channels based on some new technique he'd read about. "Watch how he mistakes motion for progress, complexity for competence. The more he learns, the less he trusts the simple truth: plant good seeds, water them regularly, and wait."

"But surely knowledge is valuable?" Kael protested.

"Knowledge without wisdom is a sharp blade in a child's hand. Tobren has filled his mind with so many expert opinions that he's forgotten to trust his own experience. Every morning brings new advice to follow, new strategies to implement. He never gives any single approach time to bear fruit."

They watched as Tobren rushed between his plots, implementing contradictory advice from various farming experts. "The wise farmer learns to distinguish between the signal and the noise," Sable continued. "Henrik knows that rain will come and seasons will change. He plants according to eternal principles, not daily predictions. Tobren seeks excitement in complexity while Henrik finds wealth in simplicity."

Kael understood. "So the abundance of information becomes a trap?"

"Precisely. When every voice claims to hold the secret, the loudest voices often hide the deepest ignorance. True wisdom whispers while foolishness shouts."

**Moral:** Information without wisdom leads to paralysis, while wisdom with simple knowledge leads to prosperity. The path to abundance lies not in consuming more advice, but in trusting fewer, proven principles.

Tomorrow, Sable would reveal why humans consistently choose the complicated path over the profitable one...`}],Nv=[{day:1,title:"What Is a Calorie?",date:"2026-02-28",image:"images/nutrition-science/day-1.png",sonnet:`**🪶 Sonnet I: The Measure of Fire**

Before the feast, before the bread is blessed,
Before the wine is poured, the table set—
There burns a truth inside each morsel's breast:
A tiny flame the ancients called "the debt."

For every bite you take is borrowed heat,
A spark of sun trapped deep in grain and fruit,
The energy that moves your hands and feet,
That fuels the mind from blossom down to root.

The healer held a seed above the flame—
"This holds the fire of a thousand suns,
And whether feast or famine, all the same,
Your body counts each spark before it runs."

*To eat is not to fill — it is to burn.*
*Know what you feed the fire, and wisdom learn.*`,standard:`**🍎 Day 1: What Is a Calorie?**

Before we can understand nutrition, we need to understand one word: **calorie**.

🧱 **The Concept**
A calorie is a unit of energy. It measures how much fuel your body gets from food.

❓ **Why It Matters**
Everything your body does — breathing, thinking, walking, even sleeping — requires energy. Calories are how we measure that energy. Understanding calories is the foundation of every nutrition decision you'll ever make.

⚙️ **How It Works**
Imagine your body is a campfire. Food is the wood. A calorie is how we measure how much heat each piece of wood gives off. A small twig (a celery stick) barely keeps the fire going. A big log (a slice of pizza) burns hot and long.

Your body needs a certain number of calories per day just to survive — this is called your Basal Metabolic Rate (BMR). For most adults, that's 1,400–2,000 calories just for basic functions. Add movement, exercise, and thinking, and you need more.

If you eat more calories than you burn → your body stores the extra as fat (saving wood for later).
If you eat fewer than you burn → your body uses stored fat for energy (burning the reserves).

📖 **Definitions**
• **Calorie**: A unit of energy from food (technically a kilocalorie, or kcal)
• **BMR (Basal Metabolic Rate)**: Calories your body burns at rest just to keep you alive
• **TDEE (Total Daily Energy Expenditure)**: BMR + all activity — the total calories you burn in a day
• **Caloric Surplus**: Eating more than your TDEE → weight gain
• **Caloric Deficit**: Eating less than your TDEE → weight loss

🎯 **Science Wisdom**
"A calorie is a calorie" is technically true for energy math — but not all calories affect your body the same way. 100 calories of broccoli and 100 calories of candy have very different effects on hunger, hormones, and health. The number matters, but the *source* matters more.

❓ **Tomorrow's Question:**
*If calories are energy, what are the three types of fuel your body can burn — and why does it matter which one you eat?*`,parable:`**🏰 The Parable of the Three Fires**

In a village beyond the mountains, there lived a healer named Maren who kept three fires burning in her kitchen — never more, never less.

---

One winter evening, a young apprentice named Lila arrived at her door, shivering and hungry.

"Please," Lila said. "I've walked three days. I need food."

Maren set a bowl of warm stew before her. But before Lila could eat, the healer held up her hand.

"Tell me first — what is food?"

Lila blinked. "It's... what you eat when you're hungry?"

Maren shook her head. "Food is *fire*. Every bite you take carries a tiny flame inside it. Your body doesn't eat food — it *burns* it."

---

She led Lila to the three hearths.

"Watch." Maren tossed a small twig into the first fire. It flickered briefly and died. "That is a leaf of lettuce. A whisper of flame."

She placed a thick branch in the second fire. It crackled and burned steadily for minutes. "That is a bowl of rice. A slow, steady burn."

Then she dropped a dense, resinous log into the third fire. It roared to life, burning hot and long. "And that is a spoonful of oil. A fire that lasts."

---

"Your body is these three hearths," Maren said. "Every day, they need a certain amount of fuel just to keep burning — to keep your heart beating, your lungs breathing, your mind thinking. This is your *resting fire*."

"What happens if I feed them too much?" Lila asked.

"The extra fuel doesn't vanish. Your body wraps it up and stores it — like stacking wood in the cellar for winter."

"And if I don't feed them enough?"

Maren smiled. "Then your body opens the cellar and burns what's stored."

---

Lila looked at her stew with new eyes. It wasn't just food. It was fuel. Fire. Energy.

"How do I know how much fire I need?" she asked.

"Ah," said Maren. "That is tomorrow's lesson."

---

**🌾 The Moral**

Every bite of food is a tiny flame. Your body is the hearth. Understanding how much fire you need — and how much you're feeding it — is the first step to nourishing yourself wisely.

> *"To eat without knowing is to burn without watching the fire."*

❓ *Tomorrow's tale: What are the three types of fuel — and why does Maren keep three separate hearths?*`},{day:2,title:"The Three Macronutrients",date:"2026-03-01",image:"images/nutrition-science/day-2.jpg",sonnet:`**🪶 Sonnet II: The Three Macronutrients**

Three fuels within our mortal engine burn,
Each serving flesh with purpose all its own:
Carbohydrates like kindling quick to turn
To flame, while muscles dance and minds are shown.

Protein, the builder of our very frame,
Repairs what time and toil have torn apart,
Four calories per gram to stake its claim
As architect of sinew, bone, and heart.

Yet fat burns richest, nine per measured gram,
A steady flame that long endures the night,
Like oil that feeds the temple's sacred lamp
And carries wisdom's vitamins to sight.

*No single fuel can serve our body's need—*
*Three flames together make one life complete.*`,standard:`🍎 Day 2: The Three Macronutrients

Yesterday we learned that calories are units of energy, like measuring how much heat different pieces of wood give a campfire. Your body can actually burn three different types of fuel: **carbohydrates**, **proteins**, and **fats** — the macronutrients.

🧱 **The Concept**
Macronutrients are the three main types of nutrients that provide calories and serve as your body's primary fuel sources.

❓ **Why It Matters**
Not all calories are created equal in how they affect your body. Each macronutrient has a different job, burns differently, and affects your hunger, energy levels, and metabolism in unique ways. Understanding this is the key to eating for your goals rather than just counting calories.

⚙️ **How It Works**
Think of your body as a hybrid car with three fuel tanks. **Carbohydrates** are like gasoline — quick, clean-burning energy that powers immediate needs (4 calories per gram). Your brain runs almost exclusively on glucose from carbs. **Proteins** are like premium fuel — they build and repair your engine while providing energy (4 calories per gram). Your muscles, organs, and immune system are made of protein. **Fats** are like diesel — slow-burning, long-lasting energy that also helps your body absorb vitamins and make hormones (9 calories per gram). Each macronutrient triggers different hormonal responses: carbs spike insulin for energy storage, protein triggers muscle building, and fats help you feel satisfied longer.

📖 **Definitions**
• **Macronutrients**: The three main nutrients that provide calories (carbs, protein, fat)
• **Carbohydrates**: Quick energy source, 4 cal/gram (sugars, starches, fiber)
• **Proteins**: Building blocks for muscles/organs, 4 cal/gram (amino acids)
• **Fats**: Long-lasting energy and hormone production, 9 cal/gram (saturated, unsaturated)
• **Micronutrients**: Vitamins and minerals that don't provide calories but are essential

🎯 **Science Wisdom**
Your body is constantly switching between fuel sources based on availability and need. The magic isn't in avoiding any macronutrient — it's in understanding how each one serves your body and choosing the right balance for your goals.

❓ **Tomorrow's Question:**
*Your body can store thousands of calories as fat and some as glycogen, but why can't it store protein — and what does this reveal about why you need to eat it regularly?*`,parable:`Lila found Maren tending three distinct fires in her healing chambers — one crackling with quick-burning kindling, another glowing steady with seasoned hardwood, and the third burning slow and bright with rendered fat from the morning's meal.

"Three fires for three needs," Maren explained, her weathered hands adjusting each flame. "Watch how each burns differently, child. Your body is like a village with three hearths, each requiring its own fuel."

She pointed to the first fire, dancing high and fast. "Carbohydrates burn like dry grass — quick energy for immediate needs. Your mind thinks with this fire, your muscles sprint with it. But see how quickly it consumes itself?"

The second fire glowed steadily, its flames neither high nor low. "Protein burns differently — it feeds the fire while rebuilding the hearth stones themselves. Every muscle fiber, every drop of blood, every strand of hair grows from this fuel. Without it, the village crumbles."

The third fire burned with a deep, lasting warmth. "Fat burns longest and richest — nine measures of heat where the others give four. It carries the lamp oil for your nerves, the building mortar for your cells, the slow warmth that sustains you through winter's hunger."

Lila watched in wonder as Maren stirred a pot containing grains, fish, and olive oil. "But teacher, which fire is most important?"

"That, dear apprentice, is like asking which leg you'd rather walk on," Maren smiled. "A wise healer tends all three fires according to the village's needs."

**Moral**: *Like a village with three hearths, your body thrives when all its fuel sources are honored for their unique gifts.*

*Tomorrow, Lila will discover why one of these fuels cannot be stored away like winter grain...*`},{day:3,title:"The Protein Paradox",date:"2026-03-02",image:"images/nutrition-science/day-3.jpg",audio:"audio/nutrition-science/day-3",sonnet:`**🪶 Sonnet III: The Protein Paradox**

No storehouse holds the body's living flame,
No granary keeps what muscles need to grow;
Each dawn breaks down what yesterday became,
While new foundations from the old must flow.
Like cities razed and built in endless turn,
Our flesh rebuilds itself with each new day;
The proteins that our vital organs earn
Are spent as swiftly as they come our way.
Nine keys unlock the building blocks of life,
Essential gifts that only food can bring;
Without them, body turns upon itself with knife,
And muscle yields to hunger's sharpened sting.
*Thus wisdom feeds what cannot stored remain,*
*For life demands we build ourselves again.*`,standard:`🍎 Day 3: The Protein Paradox

Your body can't store protein like a pantry stores canned goods because proteins are constantly being broken down and rebuilt — a process called **protein turnover**. Unlike fat (stored in adipose tissue) or carbs (stored as glycogen), protein exists only as functional tissue: your muscles, organs, enzymes, and immune cells. This means you need regular protein intake to maintain and repair these vital structures, making it the most "perishable" macronutrient.

🧱 **The Concept**
Protein turnover is your body's continuous cycle of breaking down old proteins and building new ones, requiring constant amino acid replenishment.

❓ **Why It Matters**
This biological reality explains why protein needs are so consistent and why skipping protein for even a day affects your body differently than skipping carbs or fats. Your muscles literally cannibalize themselves when amino acids aren't available, and your immune system weakens when it can't build new antibodies.

⚙️ **How It Works**
Imagine your body as a city where every building is constantly being demolished and rebuilt. **Muscle protein turnover** happens at about 1-2% per day — meaning your entire muscle mass is replaced roughly every 2-3 months. Your digestive enzymes last only hours before being recycled. Red blood cells live 120 days, then must be rebuilt from scratch. This requires a steady supply of all **essential amino acids** — the 9 building blocks your body can't make itself. When you eat protein, it's broken down into amino acids, which enter a shared pool used for repairs throughout your body. If the pool runs low, your body prioritizes vital organs over muscles, leading to muscle breakdown called **catabolism**.

📖 **Definitions**
• **Protein turnover**: Continuous breakdown and rebuilding of body proteins
• **Essential amino acids**: 9 amino acids your body cannot produce and must get from food
• **Amino acid pool**: Shared reservoir of amino acids available for protein synthesis
• **Catabolism**: Breaking down of muscle tissue when amino acids are scarce
• **Complete proteins**: Foods containing all essential amino acids (meat, eggs, dairy, quinoa)

🎯 **Science Wisdom**
Protein isn't just about building bigger muscles — it's about maintaining the living machinery that keeps you alive. Every enzyme that digests your food, every antibody that fights infection, every hormone that regulates your metabolism is made of protein that needs constant replacement.

❓ **Tomorrow's Question:**
*If your body breaks down and rebuilds proteins so efficiently, why do some people struggle to build muscle even when eating plenty of protein — what invisible factor determines whether those amino acids become new muscle or just get burned for energy?*`,parable:`The next morning, Lila found Maren tending her three hearths with unusual urgency, constantly feeding each one with different materials.

"Why do you never let the fires die completely?" Lila asked, watching the healer add kindling to the protein hearth.

"Because this hearth burns differently than the others," Maren explained, her weathered hands steady as she worked. "The fat hearth stores fuel like oil in a lamp — it can burn for days. The carbohydrate hearth keeps reserves like dried wood in a shed. But the protein hearth..." She paused, stirring the glowing embers. "It cannot store its fuel at all."

Lila frowned. "Then how does it keep burning?"

"Watch closely." Maren pointed to the flames. "See how the protein fire consumes itself? The very stones that line this hearth are always crumbling, always being rebuilt. If I stopped feeding it, it would begin eating the hearth itself — the walls, the foundation, everything that makes it strong."

As if to demonstrate, Maren showed Lila two piles of stones. "These represent the proteins in your body — your muscles, your blood, your very thoughts are made of such stones. Every dawn, some crumble to dust. Every sunset, new ones must be laid, or the whole structure weakens."

"But why can't we simply store protein stones like we store fat oil and carbohydrate wood?"

Maren smiled sadly. "Because protein stones are not fuel, child — they ARE the hearth. You cannot separate the fire from what it burns within. The moment you try to store them away, they cease to be what they were meant to be."

Lila watched in wonder as the protein hearth continued its eternal dance of destruction and creation, never resting, never truly storing, always demanding fresh materials to rebuild what time had worn away.

**Moral**: *The most essential things cannot be hoarded — they must be constantly renewed through daily devotion.*

*Tomorrow, Maren will reveal why some hearths rebuild themselves stronger while others merely maintain their size, despite receiving the same stones...*`},{day:4,title:"The Timing Code",date:"2026-03-03",image:"images/nutrition-science/day-4.jpg",audio:"audio/nutrition-science/day-4",sonnet:`**🪶 Sonnet IV: The Timing Code**

When muscles cry for strength and sinew new,
The body weighs each choice with careful thought:
Shall amino acids build what time broke through,
Or feed the fires where energy is sought?

In exercise's wake, the signals shine—
"Repair these fibers torn by effort's strain!"
But when the cells need fuel to stay in line,
Protein becomes the glucose in our brain.

Like servants who must choose their master's call,
These building blocks serve need above desire:
If energy lacks, they'll sacrifice their all
To feed the more immediate body's fire.

*Yet timing grants the key to muscle's door—*
*Feed hunger first, then build what wasn't there before.*`,standard:`🍎 Day 4: The Timing Code

The invisible factor is **timing** — specifically, the timing of protein intake relative to your body's metabolic state and energy needs. When you eat protein during or after physical activity, your muscles are primed for protein synthesis and will preferentially use amino acids for building tissue. However, if you consume protein when your body needs immediate energy (like during fasting or low-carb states), those same amino acids get converted to glucose through **gluconeogenesis** and burned for fuel instead of building muscle.

🧱 **The Concept**
**Protein timing** determines whether amino acids fuel energy production or tissue building based on your body's immediate metabolic priorities.

❓ **Why It Matters**
This explains why two people eating identical amounts of protein can have vastly different muscle-building results. Your body operates on a hierarchy of needs: survival energy comes first, tissue building comes second. Understanding this timing principle is the difference between protein being wasted as expensive fuel versus being used for its intended purpose of maintaining and building your body.

⚙️ **How It Works**
Think of amino acids as construction workers who can either build buildings or shovel coal into a furnace — the job they do depends entirely on what the city needs most urgently. After exercise, your muscles release signals that say "we need repairs" — this creates an **anabolic window** where protein synthesis is elevated for up to 48 hours. During this time, amino acids are preferentially shuttled toward muscle building. However, if you're in an energy deficit or haven't eaten carbohydrates, your body treats amino acids as emergency fuel through gluconeogenesis — literally converting protein into sugar. This is why athletes often combine protein with carbohydrates: the carbs satisfy immediate energy needs, allowing protein to do its building work. **Leucine**, one of the essential amino acids, acts like a molecular switch that signals muscles to start the building process, but only when energy needs are already met.

🎯 **Science Wisdom**
Protein timing isn't about narrow "anabolic windows" — it's about aligning your protein intake with your body's metabolic priorities. Feed energy needs first, then protein can do its real job.

❓ **Tomorrow's Question:**
*If protein can be converted to energy when needed, why does your body seem to prefer burning carbohydrates and fats first — what makes protein such a reluctant fuel source that your body saves it for last?*`,parable:`Lila watched as Maren sorted through her morning's collection, separating herbs into different clay vessels with practiced precision. "Master," Lila began, "yesterday you spoke of how the body cannot store the healing proteins like grain in a storehouse. But I've observed something puzzling — why do some villagers grow strong on the same remedies that seem to provide others only fleeting energy?"

Maren smiled, her weathered hands continuing their methodical work. "Ah, young apprentice, you've stumbled upon one of healing's greatest secrets — the mystery of timing." She held up a handful of precious medicinal seeds. "Watch closely."

She approached her three hearths, each burning at different intensities. At the first hearth, where flames danced high and hungry, she cast a portion of seeds directly into the fire. They crackled and burned, providing immediate warmth but leaving nothing behind. "When the body cries out for energy," she explained, "even the most precious building materials become mere kindling."

At the second hearth, banked with glowing coals, she placed seeds in a special vessel that protected them from the flames while still providing gentle heat. "But observe — when the fire's hunger is already satisfied, when there is fuel enough for warmth, then these same seeds can work their true magic." She pointed to tiny green shoots beginning to emerge from the protected vessel.

At the third hearth, cold and prepared, she planted the remaining seeds in rich soil, moistening them with care. "And when the body is at rest, primed for growth like freshly turned earth after rain, these building materials find their highest purpose."

Lila's eyes widened with understanding. "The seeds themselves never change — only the conditions that greet them!"

"Precisely," Maren nodded. "The healing compounds that rebuild muscle and mend tissue are the same ones that can fuel the body's fires when need demands it. A wise healer learns not just what to give, but when to give it. The body speaks in the language of priority — survival first, building second. Honor this order, and even the humblest protein becomes a master builder."

Moral: The same resource serves different purposes depending on the timing of need — wisdom lies in understanding the body's hierarchy of priorities.

Tomorrow, Maren will reveal why the body treats protein like a precious reserve, reluctant to burn what took so much energy to create.`},{day:5,title:"The Metabolic Cost of Breaking Down",date:"2026-03-03",image:"images/nutrition-science/day-5.jpg",audio:"audio/nutrition-science/day-5",sonnet:`**🪶 Sonnet V: The Metabolic Cost of Breaking Down**

When protein meets the body's burning flame,
A costly dance of chemistry unfolds,
Each amino acid bears a processing claim—
Thrice dear the price that such conversion holds.

The liver labors, breaking bonds with care,
While toxic ammonia demands swift flight,
And nitrogen waste pollutes the cellular air,
As precious building blocks fuel appetite.

Yet carbs ignite like kindling, quick and clean,
And fats burn steady as the seasoned oak,
While protein's fire burns hot but leaves between
Its ashes costly work and labored smoke.

*So nature hoards what costs the most to burn,*
*And saves its treasures for their proper turn.*`,standard:`🍎 Day 5: The Metabolic Cost of Breaking Down

Protein is your body's reluctant fuel because **converting amino acids to energy is metabolically expensive** — it requires more energy to break down protein than carbs or fats, making it an inefficient fuel source. Additionally, protein serves critical structural and functional roles throughout your body, so burning it for energy is like burning your furniture to heat your house when you have perfectly good firewood available.

🧱 **The Concept**
**Thermic effect of food (TEF)** measures how much energy your body expends to digest, absorb, and process different macronutrients — and protein demands the highest metabolic cost.

❓ **Why It Matters**
This metabolic "tax" on protein explains why high-protein diets can boost metabolism and why your body hoards amino acids for essential functions. Understanding TEF reveals why not all calories are created equal metabolically, and why the source of your calories matters as much as the quantity.

⚙️ **How It Works**
When you eat 100 calories of protein, your body immediately spends 20-30 of those calories just processing it — breaking peptide bonds, deaminating amino acids, and converting waste nitrogen to urea. Compare this to carbohydrates (5-10% TEF) or fats (0-5% TEF), and you see why protein is metabolically "expensive." This process, called **diet-induced thermogenesis**, literally heats up your body as cellular machinery works overtime. The **deamination** process that strips nitrogen from amino acids is particularly costly because your liver must safely package the toxic ammonia byproduct into urea for excretion. Meanwhile, your body jealously guards amino acids for making enzymes, hormones, antibodies, and structural proteins — burning them for energy is like using rare building materials as kindling. This is why **protein-sparing** occurs during moderate calorie restriction: your body will slow metabolism and burn fat stores before sacrificing precious amino acids.

🎯 **Science Wisdom**
Protein's high metabolic cost makes it both a metabolic accelerator and a protected resource — your body burns it reluctantly because the processing expense isn't worth it when easier fuels are available.

❓ **Tomorrow's Question:**
*If your body is so efficient at switching between fuel sources, why do some people seem to "hit a wall" when their preferred fuel runs out — what determines whether someone is metabolically flexible or metabolically rigid?*`,parable:`"Why does the body resist burning its most precious building blocks?" Lila asked, watching Maren tend the three hearths that represented the body's fuel sources.

Maren gestured to the third hearth, where she burned only the finest hardwood. "Watch how much work it takes to prepare this wood," she said, carefully splitting and shaping each piece. "I must cut it perfectly, remove the bark, and tend the flame constantly. See how it crackles and protests? This wood burns hot but demands great effort to process."

She moved to the first hearth, where kindling caught fire instantly. "This simple wood lights easily and burns cleanly — no preparation needed." Then to the second hearth: "This seasoned oak requires some work but burns steadily once lit."

"The hardwood is like protein," Maren explained as sweat beaded on her brow from the extra labor. "Your body must work so hard to break it down — snapping molecular bonds, handling toxic waste, converting complex structures into simple fuel. For every ten pieces of protein-wood I burn, three pieces worth of energy goes just to processing it. Meanwhile, the carbohydrate-kindling and fat-oak burn with barely any effort."

Lila watched the hardwood hearth consume far more of Maren's attention. "So the body saves protein for building, not burning?"

"Precisely. Why burn your crafted furniture when you have plenty of firewood? The body pays a steep price in energy just to use protein as fuel — it's like hiring expensive craftsmen to do common labor."

As evening fell, Maren banked the protein hearth carefully, preserving its precious fuel. "Remember, apprentice: the most valuable resources demand the highest cost to use, which is why wisdom reserves them for their true purpose."

**Moral:** *The body's reluctance to burn protein as fuel reflects both its metabolic expense and precious value — true efficiency means using each resource for its highest purpose.*

*Tomorrow, we explore why some bodies switch fuels like skilled dancers while others stumble when their preferred energy source runs dry...*`},{day:6,title:"The Art of Metabolic Flexibility",date:"2026-03-04",image:"images/nutrition-science/day-6.jpg",audio:"audio/nutrition-science/day-6",sonnet:"",standard:`🍎 Day 6: The Art of Metabolic Flexibility

**Metabolic flexibility depends on your mitochondrial health, enzyme expression patterns, and fuel exposure history** — people who regularly cycle between different fuel states maintain robust metabolic machinery, while those who consistently rely on one fuel type develop "use it or lose it" enzyme patterns that make fuel switching sluggish and uncomfortable.

🧱 **The Concept**
**Metabolic flexibility** is your body's ability to seamlessly switch between burning carbohydrates and fats based on availability, demand, and metabolic state.

❓ **Why It Matters**
Metabolically flexible people experience steady energy, better appetite control, and improved body composition because their cells can efficiently access whatever fuel is most appropriate. Metabolic rigidity, by contrast, creates energy crashes, cravings, and difficulty accessing stored fat when carbohydrates run low.

⚙️ **How It Works**
Your **mitochondria** contain different sets of enzymes for processing carbs versus fats — the **glycolytic pathway** for glucose and **beta-oxidation** for fatty acids. Regular exposure to both fuel states maintains high expression of both enzyme systems, like keeping two different metabolic "assembly lines" well-oiled and ready. People who eat frequent carbohydrates develop robust glucose-processing machinery but may downregulate fat-burning enzymes, making them **glucose-dependent**. Conversely, those following very low-carb diets may struggle with glucose utilization when carbs are reintroduced. **Metabolically flexible individuals** maintain active enzyme expression for both pathways through practices like intermittent fasting, varied macronutrient timing, or exercise that depletes glycogen stores and forces fat adaptation. The **Randle cycle** governs this fuel competition — when glucose is abundant, fat oxidation decreases, and vice versa.

🎯 **Science Wisdom**
Metabolic flexibility is earned through exposure — your body becomes efficient at burning whatever fuels you regularly ask it to process, making fuel variety a key to metabolic health.

❓ **Tomorrow's Question:**
*If different foods trigger different hormonal responses regardless of their calorie content, why does conventional wisdom still treat all calories as metabolically equivalent — what's the deeper story behind how food talks to your hormones?*`,parable:`The next morning, Lila found Maren tending to her three hearths with unusual attention. "Master," Lila began, "yesterday you spoke of the body's reluctance to burn protein. But I've noticed something puzzling — some villagers seem to thrive whether they eat grain porridge or fatty fish, while others become sluggish and irritable when their usual foods aren't available. What creates this difference?"

Maren smiled, setting down her bellows. "Ah, you've observed the difference between those who are metabolically flexible and those who have grown rigid. Watch my hearths, child." She pointed to three fires: one burning bright with dried wood, another glowing with coal, and a third flickering between both.

"The first hearth burns only wood — when wood runs scarce, the fire dims. The second burns only coal — introduce wood, and it smolders poorly. But the third..." She added a piece of coal to the mixed fire, then a stick of wood. Both caught immediately, the flames dancing with equal vigor. "This hearth has learned to burn whatever fuel I offer."

"Your body possesses similar wisdom," Maren continued, warming her hands over the versatile flame. "Within each cell lie tiny furnaces called mitochondria, each containing different sets of tools — one set for processing grain-energy, another for fat-energy. Those who regularly ask their bodies to burn both fuels maintain both sets of tools, sharp and ready. But those who consistently feed only one type of fuel find their unused tools growing dull and rusty."

She gestured toward the village. "Young Henrik eats his grandmother's honey cakes daily and panics when grain is scarce — his fat-burning tools have grown weak from disuse. Old Astrid fasts often and eats varied foods — she moves through hunger and abundance with equal grace. The difference lies not in their constitution, but in their practice."

Lila watched the mixed fire burn steady and bright. "So metabolic flexibility is earned through variety and challenge?"

"Precisely," Maren nodded. "Your body becomes efficient at whatever you regularly ask of it. Feed it only quick-burning fuels, and it forgets how to access stored energy. Challenge it with fasting, varied foods, and physical demands, and it maintains the wisdom to burn whatever is needed."

**Moral:** *Metabolic flexibility, like a well-tended fire, is maintained through variety and wise use — your body's fuel-burning wisdom grows strong through practice, not preference.*

Tomorrow, Maren would reveal why two people eating identical calories might experience entirely different hormonal responses...`},{day:7,title:"The Hormonal Language of Food",date:"2026-03-04",image:"images/nutrition-science/day-7.jpg",audio:"audio/nutrition-science/day-7",sonnet:`**🪶 Sonnet VII: The Hormonal Language of Food**

Each morsel speaks in tongues the body knows,
A chemical symphony of sweet and sharp,
As honey's song through insulin softly flows,
While bitter herbs strike metabolism's harp.

The protein whispers building, strong and true,
Glucagon and insulin dance as one,
While fats work quietly, their message through
The slower tide of hormones, never done.

Not calories alone, but signals sent
From plate to cell in ancient coded speech,
Each nutrient carries evolutionary intent,
Instructing what our deepest hungers teach.

*For food is conversation, not mere fuel,*
*And bodies listen well to nature's rule.*`,standard:`🍎 Day 7: The Hormonal Language of Food

The deeper story behind how food talks to your hormones lies in **evolutionary signaling** — different foods don't just provide energy, they carry information that tells your body what metabolic state it should enter based on the type and timing of nutrients arriving. **Food acts as a hormone trigger** because specific macronutrients activate distinct hormonal cascades that prepare your body for different survival scenarios, from insulin's "store and grow" message from carbohydrates to glucagon's "access stored fuel" signal during protein-rich, low-carb meals.

🧱 **The Concept**
**Hormonal food signaling** means that different macronutrients trigger specific hormone releases that coordinate your body's metabolic response independent of calorie content.

❓ **Why It Matters**
Understanding food as hormonal information explains why 100 calories of sugar affects your body differently than 100 calories of protein — they literally send different chemical messages to your cells about energy storage, appetite, and metabolic priorities. This hormonal response determines whether nutrients get stored as fat, used for immediate energy, or directed toward muscle building and repair.

⚙️ **How It Works**
**Carbohydrates** trigger insulin release from your pancreas, which signals cells to open glucose channels, store excess energy as glycogen or fat, and suppress fat burning through the Randle cycle. **Protein** stimulates both insulin and glucagon simultaneously — insulin helps amino acids enter cells for muscle building while glucagon prevents blood sugar crashes by promoting glucose production from protein. **Fats** have minimal immediate hormonal impact but influence longer-term hormone production, as dietary fats provide building blocks for steroid hormones like testosterone and cortisol. **Fiber** and resistant starches feed gut bacteria that produce short-chain fatty acids, which then signal the release of satiety hormones like GLP-1 and PYY. The **timing** of these foods matters too — eating carbs post-workout enhances muscle uptake due to exercise-induced insulin sensitivity, while the same carbs eaten during sedentary periods more readily trigger fat storage.

🎯 **Science Wisdom**
Food is information first, energy second — your body reads the hormonal messages from nutrients and adjusts metabolism accordingly, making food choice as important as food quantity.

❓ **Tomorrow's Question:**
*If your gut bacteria can influence your cravings and mood through the compounds they produce, what does this mean for the idea that willpower alone controls your food choices?*`,parable:`"But Master Maren," Lila said, watching steam rise from the healing broths at each hearth, "yesterday you spoke of the body's ability to burn different fuels. Yet I notice you prepare different remedies for different ailments — surely they all provide nourishment?"

Maren ladled a rich bone broth from the first hearth, then a delicate herbal tea from the second. "Observe closely, child. This broth carries the message of strength and building — see how it calls to those recovering from illness, how their bodies respond with renewed vigor. But this tea..." She lifted the fragrant cup. "It whispers of calm and clarity, though it provides barely any substance at all."

"Each preparation speaks a different language to the body," Maren continued, adding honey to one vessel and bitter herbs to another. "The honey sings of abundance and quick energy — the body hears this song and prepares for activity, opening its stores wide. The bitter herbs tell tales of scarcity and cleansing — the body listens and begins to burn what it has saved."

Lila touched her own stomach thoughtfully. "So the food... it's like sending messages?"

"Precisely. Your body reads every morsel as a letter from the world, telling it whether winter approaches or spring has arrived, whether to prepare for work or rest, whether to build or to cleanse. Two remedies of equal substance may carry entirely different instructions."

The old healer stirred each pot in turn. "The wise understand that nourishment is conversation, not mere filling of an empty vessel."

**Moral:** Food speaks in hormones, and the body listens with its metabolism.

**Tomorrow, Lila will discover how the smallest inhabitants of her body hold surprising power over her deepest desires.**`},{day:8,title:"The Microbiome's Chemical Influence",date:"2026-03-05",image:"images/nutrition-science/day-8.jpg",audio:"audio/nutrition-science/day-8",sonnet:`**🪶 Sonnet VIII: The Microbiome's Chemical Influence**

Within your depths, a trillion voices call,
Each bacterial tribe with chemical vote,
They craft the compounds that through bloodstreams crawl,
And whisper cravings that your brain will quote.

The sugar-feeders sing their siren song,
With dopamine rewards they make you crave,
While wisdom-strains, when nurtured and grown strong,
Produce the peace that helps your hunger wave.

Through vagus pathways run their messages,
From gut to brain, a chemical debate,
Each microbe sends its urgent images
Of foods that keep its kind in thriving state.

*So tend your inner garden with great care—*
*The voices that you feed will guide you there.*`,standard:`🍎 Day 8: The Microbiome's Chemical Influence

🧱 **The Concept**
**Gut bacteria produce neurotransmitters and metabolites** that directly influence brain chemistry, cravings, and decision-making pathways, creating a biological undercurrent that can override conscious food choices.

❓ **Why It Matters**
Your gut microbiome produces about 90% of your body's serotonin plus other mood-regulating compounds like GABA and dopamine, meaning the bacteria in your intestines have a direct chemical pathway to influence your emotional state and food desires. When certain bacterial strains dominate your gut, they can literally hijack your cravings by producing compounds that make you desire the foods they thrive on, creating a feedback loop that makes "willpower" feel impossible.

⚙️ **How It Works**
**Beneficial bacteria** like Lactobacillus and Bifidobacterium produce short-chain fatty acids (SCFAs) that cross the blood-brain barrier and promote satiety hormones while reducing inflammation that can drive food cravings. **Sugar-feeding bacteria** like certain Candida strains release metabolites that trigger dopamine pathways, creating actual chemical addiction-like responses to sweet foods. **Diverse microbiomes** communicate with your vagus nerve through the gut-brain axis, sending signals that influence everything from stress eating to meal timing preferences. **Antibiotic use, processed foods, and chronic stress** can shift bacterial populations toward craving-driving species, while **fermented foods, fiber, and polyphenol-rich plants** feed beneficial strains that support balanced appetite regulation. The bacteria essentially "vote" on your food choices through chemical messengers, with the dominant populations having the loudest voice in your cravings.

🎯 **Science Wisdom**
True food freedom requires tending your inner ecosystem — when beneficial bacteria thrive, they become powerful allies in making healthier choices feel natural rather than forced.

❓ **Tomorrow's Question:**
*If your body can only absorb nutrients that make it past your intestinal barrier, and this barrier can become "leaky" under stress, what does this reveal about the relationship between your emotional state and nutritional status?*`,parable:`Lila found Maren tending to three distinct gardens behind her cottage — one lush with diverse herbs, another overrun with aggressive weeds, and a third carefully balanced between the two.

"Each garden represents a different gut," Maren explained, kneeling beside the thriving plot. "See how the chamomile and sage grow peacefully together? When beneficial plants dominate, they create conditions that naturally discourage the aggressive species. But watch this."

She led Lila to the weed-choked garden, where bindweed strangled everything in reach. "When I fed this plot only sugar water and processed scraps, these demanding plants took over. Now they send chemical signals into the soil, making the entire garden crave the very nutrients that keep them dominant."

Lila touched the soil, noticing how different it felt — depleted, somehow desperate. "So the garden itself becomes addicted?"

"Precisely. The strongest voices determine what the whole system craves." Maren moved to the balanced garden, where neat rows showed evidence of careful cultivation. "But tend the beneficial plants with fermented compost and diverse nutrients, and watch how they gradually quiet the demanding weeds. The garden's desires shift as its inhabitants change."

She handed Lila a jar of dark, rich compost tea. "Your gut bacteria are like these garden communities — they literally vote on your cravings through the chemicals they produce. Feed the wise counselors, and willpower becomes less about fighting desire and more about naturally wanting what serves you."

**Moral:** *True choice comes not from battling cravings, but from cultivating the inner voices that guide you toward wisdom.*

*Tomorrow, Lila would discover how the very walls meant to protect her garden could become the pathway for chaos to enter...*`}],qv=[{day:1,title:"The Power of Tactical Empathy",date:"2026-03-01",image:"images/negotiation/day-1.jpg",sonnet:`**🪶 Sonnet I: The Mirror's Edge**

The merchant spoke, but not to sell his wares—
He spoke to *hear*, and in the hearing, won.
For he who listens past the other's glares
Finds gold in silence ere the deal is done.

"I see your fear," he said without a flinch,
"The crop was poor, the winter long and cruel."
The farmer froze — disarmed within an inch—
No trick, no trap, just empathy as tool.

To name the shadow lurking in the room
Is not to weaken but to clear the air.
The unacknowledged dread becomes the tomb
Of every deal that might have flourished there.

*Before you ask for what you want, first show—*
*You understand the weight they carry so.*`,standard:`**🤝 Day 1: The Power of Tactical Empathy**

Before we can negotiate, we need to understand one truth: **the most powerful move in any negotiation isn't talking — it's demonstrating that you understand the other person.**

🧱 **The Concept**
Tactical empathy is the deliberate act of recognizing and verbalizing someone else's perspective and emotions — not because you agree, but because it builds trust and lowers defenses.

❓ **Why It Matters**
People don't make decisions logically — they make them emotionally, then justify with logic. If the person across from you feels *understood*, their guard drops. If they feel attacked or dismissed, they dig in. Every hostage negotiator, top salesperson, and skilled diplomat knows this: connection before content.

⚙️ **How It Works**
Imagine you're negotiating a raise. You could walk in and list your accomplishments. Or you could start with: "I know budgets are tight this quarter, and I imagine you're getting pressure from above to hold the line on costs."

You just named their reality. You didn't surrender — you showed you see the world from their chair. Now they're listening. Now they trust you're not just self-serving. Now you can make your case.

Chris Voss, former FBI lead hostage negotiator, calls this "labeling" — identifying and naming the other person's emotions out loud. "It seems like you're frustrated." "It sounds like this has been really stressful." These simple phrases trigger a neurological calming response. The amygdala relaxes when someone accurately names what we feel.

📖 **Definitions**
• **Tactical Empathy**: Understanding someone's feelings and perspective as a strategic tool, not emotional surrender
• **Labeling**: Verbalizing the other person's emotions ("It seems like...", "It sounds like...")
• **Amygdala**: The brain's threat-detection center — calms when emotions are acknowledged
• **Active Listening**: Fully concentrating on what someone says, not just waiting for your turn to talk

🎯 **Negotiation Wisdom**
Chris Voss says: "Empathy is not about being nice. It's about understanding. You can empathize with a kidnapper without sympathizing with them." Tactical empathy is a tool, not a feeling.

❓ **Tomorrow's Question:**
*If showing empathy opens people up, what's the single most powerful question you can ask to keep them talking — and why do FBI negotiators almost never ask "why?"*`,parable:`**🏰 The Parable of the Silver Tongue**

In a trade city built where three rivers met, there was a young merchant named Ren who could talk anyone into anything — or so he believed. He had a quick mind, a quicker mouth, and an inventory of unsold silk that was bleeding him dry.

---

One morning, Ren set up his stall across from a one-eyed trader named Vasska, whose table held nothing but a single wooden cup and a reputation that preceded him by miles.

"They say Vasska once talked a king out of a war," whispered the spice seller next door.

Ren scoffed. "With what? He doesn't even have goods to sell."

---

That afternoon, a wool merchant stormed into the market, red-faced and furious. He'd been cheated by a dyer who'd delivered worthless fabric — and he wanted blood.

Ren saw an opportunity. "Friend! I have silk — far superior to wool. Let me—"

The wool merchant didn't even look at him. "I don't want silk. I want justice."

Ren pressed harder. "But the quality, the price—"

"Are you deaf?" the man snarled, and walked away.

---

Vasska, who had been watching, rose from his stool and approached the wool merchant quietly.

"You've been betrayed by someone you trusted," Vasska said softly. "That hurts more than the money, doesn't it?"

The wool merchant stopped. Turned. His eyes were wet. "Yes," he whispered. "We've traded together for six years. I thought he was my friend."

"It sounds like you're not angry about the fabric at all. You're angry because the trust is broken."

The wool merchant sat down on a barrel and began to talk. He talked for twenty minutes. Vasska said almost nothing — just listened, occasionally naming what he heard. "That must have felt like a betrayal." "It seems like the money is secondary to the principle."

By the end, the wool merchant was calm. Clear-headed. And he turned to Vasska and said, "You understand me better than anyone in this market. What would you advise?"

Vasska smiled gently and made a suggestion — one that happened to involve buying silk from a certain young merchant named Ren, at a fair price for both parties.

---

That evening, Ren sat stunned, counting coins from a sale he hadn't made himself.

"How did you do that?" he demanded. "You didn't pitch anything. You didn't argue. You didn't even *try* to sell."

Vasska sipped from his wooden cup. "You talked *at* him. I listened *to* him. The moment someone feels understood, they stop fighting. And when they stop fighting, they start trusting. That is where every deal begins."

"But you agreed with nothing he said."

"I didn't need to agree. I needed to *acknowledge*." He tapped his blind eye. "I lost this in a negotiation where I talked too much and listened too little. It was the most expensive lesson of my life."

---

**🌾 The Moral**

The first rule of negotiation is not persuasion — it's understanding. Before you sell, before you argue, before you ask for anything: demonstrate that you see the world from the other person's side. Not because you agree. Because trust is built on being heard.

> *"The merchant who speaks first sells his wares. The merchant who listens first sells whatever he chooses."*

❓ *Tomorrow's tale: Ren learned to listen. But what is the one question that keeps people talking — and why does Vasska never ask "why"?*`},{day:2,title:'The Magic of "How" and "What"',date:"2026-03-01",image:"images/negotiation/day-2.jpg",sonnet:`**🪶 Sonnet II: The Magic of "How" and "What"**

When "why" strikes like a blade against the heart,
The soul retreats behind defensive walls,
But "how" and "what" play the gentler part—
They whisper soft where harsh accusation calls.

The hostage-taker, cornered by his fear,
Will silence when his motives are attacked,
Yet speaks his truth when questions feel sincere,
When curiosity, not judgment, makes the pact.

In boardrooms where the stakes run just as high,
The same sweet psychology holds its reign:
"How did you reach this point?" unlocks reply,
While "Why so much?" brings only cold disdain.

*For in this art of words that open doors,*
*The gentlest key unlocks the deepest stores.*`,standard:`**🤝 Day 2: The Magic of "How" and "What"**

Yesterday we learned that tactical empathy opens doors by making people feel understood. The answer to our question: FBI negotiators avoid "why" because it triggers defensiveness — people hear accusation. Instead, they use "how" and "what" to keep suspects talking without raising their guard.

**🧱 The Concept**
Open-ended questions beginning with "how" and "what" are psychological truth serums that invite explanation without triggering defensiveness, while "why" questions make people feel judged and shut down.

**❓ Why It Matters**
When someone asks "Why did you do that?", your brain hears attack and builds walls. But "How did that happen?" or "What led to this situation?" feels like genuine curiosity. In high-stakes negotiations — whether it's a hostage situation or asking for a promotion — you need people to keep talking, not clam up.

**⚙️ How It Works**
Chris Voss discovered this during crisis negotiations: "Why did you take the hostage?" creates silence and anger. "How did you get to this point?" gets them talking. The suspect feels heard, not interrogated. Similarly, in business: "Why is your price so high?" puts vendors on defense. "How did you arrive at this number?" invites explanation. "What would need to happen for us to move forward?" becomes collaboration, not confrontation. These questions hack our psychology — they feel safe, so we respond openly. Robert Cialdini's research shows that when people explain their reasoning out loud, they often convince themselves to change course.

**📖 Definitions**
• **Open-ended Questions**: Questions that can't be answered with yes/no, requiring explanation
• **Defensive Response**: The psychological reaction that shuts down communication when feeling attacked
• **How/What Framework**: Using "how" and "what" to gather information without triggering defensiveness
• **Truth Serum Effect**: When people reveal more than intended because questions feel non-threatening

**🎯 Negotiation Wisdom**
Voss teaches: "The goal isn't to get to 'yes' — it's to get them talking. Once they're talking, they're thinking. Once they're thinking, they might change their mind."

**❓ Tomorrow's Question:**
*If getting people to talk freely gives you power, what happens when you deliberately give them the illusion of control — and why might saying "no" actually be the fastest path to "yes"?*`,parable:`The morning sun cast long shadows across the bazaar as young Ren approached Master Vasska's stall, clutching a jade pendant his grandmother had left him. The one-eyed trader looked up from his ledgers, his silver tongue already working.

"Ah, young merchant," Vasska smiled, his good eye gleaming. "I see desperation in your stride. Why do you need money so urgently?"

Ren's jaw tightened. "That's... that's my business." He clutched the pendant closer.

Vasska chuckled, stroking his beard. "Watch how quickly walls rise when 'why' leaves my lips. Let me try again." He leaned forward with genuine curiosity. "How did you come to possess such a beautiful piece?"

Ren's shoulders relaxed slightly. "It was my grandmother's. She always said it would help in times of great need."

"What kind of help are you hoping for today?" Vasska's voice was warm, inviting.

The words poured out. Ren spoke of his sick mother, the medicine costs, the weight of responsibility. As he talked, something shifted — he felt heard, not judged.

"Yesterday, I asked 'why' and you built a fortress," Vasska observed. "Today, I asked 'how' and 'what,' and you opened your heart. Words are keys, young merchant. Choose them wisely — some lock doors, others open them."

**Moral**: Questions beginning with "how" and "what" invite truth; those beginning with "why" invite defense.

**Tomorrow**: Ren will learn why sometimes the most powerful position is letting others believe they're in control.`},{day:3,title:"The Illusion of Control",date:"2026-03-02",image:"images/negotiation/day-3.jpg",audio:"audio/negotiation/day-3",sonnet:`**🪶 Sonnet III: The Illusion of Control**

When "no" falls soft from lips that seem to yield,
The listener's mind begins its urgent race,
To turn rejection to a fertile field
Where compromise might find its rightful place.

The master knows that power's truest art
Lies not in force, but in the gentle guide—
Let others feel they hold the beating heart
Of choice, while you direct the flowing tide.

"I cannot do this," spoken soft and low,
Transforms to "How can we make this work instead?"
The questioned party starts their mental flow,
Solving your problems in their eager head.

*Control blooms sweetest when it wears disguise—*
*Let them convince themselves, and claim the prize.*`,standard:`🤝 Day 3: The Illusion of Control

Saying "no" becomes the fastest path to "yes" because it paradoxically gives the other party control over the outcome — they must convince you, which makes them reveal their true motivations and bottom line. When someone tells you "no," your brain immediately starts working on how to change their mind, often offering better terms than you initially planned.

🧱 The Concept
The illusion of control is a negotiation superpower where you guide outcomes by making the other party feel they're driving the conversation, often achieved through strategic "no" responses that prompt them to negotiate against themselves.

❓ Why It Matters
People need to feel in control, especially in high-pressure situations. FBI hostage negotiators learned that suspects who feel cornered become dangerous, but those who feel empowered to make choices stay engaged. In business, when prospects feel pushed, they resist — but when they feel they're convincing you, they sell themselves.

⚙️ How It Works
Chris Voss teaches that "no" is actually the start of negotiation, not the end. When you say "Is this a bad time to talk?", the "no" response relaxes them — they're in control. Similarly, "It seems like you're not ready to move forward" often triggers "Wait, let me explain why we should..." In salary negotiations, "I don't think I can make this work" forces your boss to either improve the offer or explain constraints. Robert Cialdini's commitment principle kicks in: when people argue for something, they convince themselves it's true. The key is asking calibrated questions that make them solve your problems: "How am I supposed to do that?" puts the burden on them to find solutions.

📖 Definitions
• **Illusion of Control**: Making others feel empowered while you guide the outcome
• **Calibrated Questions**: Questions that give the other party control while serving your agenda
• **Negotiating Against Themselves**: When people improve their own offers without pressure
• **Strategic No**: Using "no" responses to trigger problem-solving behavior
• **Commitment Principle**: People believe more strongly in conclusions they reach themselves

🎯 Negotiation Wisdom
Voss discovered: "The person across the table is never the problem — the unsolved issue is. Get them to solve it for you, and they'll own the solution."

❓ Tomorrow's Question:
*If people crave control but fear loss even more than they desire gain, how might framing your offer as preventing a loss rather than providing a benefit completely change their decision-making process?*`,parable:`The harbor market buzzed with morning commerce as Ren watched Vasska approach the silk merchant's stall, his silver eye glinting in the dawn light. The merchant, a stern woman named Mira, had refused every offer for her finest bolts.

"Your silk is beautiful," Vasska began, running weathered fingers across the crimson fabric. "But I suppose you're not interested in moving it quickly."

Mira's eyes sharpened. "Not interested? I've been trying to sell this for weeks!"

"Ah," Vasska nodded, stepping back. "Then perhaps my timeline won't work. I need these bolts gone by sunset — my ship leaves with the tide. But clearly, you need more time to find the right buyer."

"Wait," Mira called as he turned away. "What's your timeline?"

"I couldn't ask you to rush," Vasska replied, his blind eye somehow seeming to see everything. "A quick sale would mean a lower price, and quality silk deserves quality coin."

Ren watched in fascination as Mira began negotiating against herself: "Well, if you truly need them by sunset, I could consider... perhaps if you took all twelve bolts... maybe sixty percent of asking price?"

Vasska paused, as if wrestling with the decision. "I don't know how I could make that work... unless you threw in those silver threads as well?"

By noon, Mira had convinced herself to accept half her asking price plus extras, believing she had persuaded the reluctant trader. As they walked away with the silk, Ren shook his head in amazement.

"Master, you made her feel powerful while controlling everything."

Vasska's good eye twinkled. "Young merchant, the greatest victories come when your opponents convince themselves they've won. Give them the wheel, but you choose the destination."

**Moral:** True control lies not in commanding others, but in making them feel empowered to give you what you want.

*Tomorrow, Ren learns why the fear of losing what one has proves stronger than the hope of gaining something new...*`},{day:4,title:"Loss Aversion Leverage",date:"2026-03-03",image:"images/negotiation/day-4.jpg",audio:"audio/negotiation/day-4",sonnet:`**🪶 Sonnet IV: Loss Aversion Leverage**

What slips away cuts deeper than what's won,
The merchant knows this truth within his trade;
To speak of gain may leave the sale undone,
But loss makes swift decisions, plans well-laid.

The pearl diver fears monsoon's coming wrath
More than he craves the treasure of the deep,
So wise Vasska charts a different path—
He shows what time will steal, what they can't keep.

Not golden promises that gleam and shine,
But shadows of what slips between their hands,
The fruit that rots upon the merchant's line
Moves buyers more than all his finest brands.

*For pain of loss strikes twice as sharp and true
As pleasure gained could ever hope to do.*`,standard:`🤝 Day 4: Loss Aversion Leverage

🧱 **The Concept**
Loss aversion leverage exploits the psychological reality that people feel the pain of losing something twice as intensely as the pleasure of gaining the same thing, making "what you'll lose" a more powerful motivator than "what you'll gain."

❓ **Why It Matters**
Daniel Kahneman's research proves we're hardwired to avoid loss over seeking gain. FBI negotiators use this when they frame releasing hostages as "avoiding life in prison" rather than "earning freedom." In business, this explains why "limited time offers" and "last chance" messaging consistently outperform benefit-focused pitches.

⚙️ **How It Works**
Instead of saying "This software will increase productivity," frame it as "Without this, you're losing $50K annually to inefficiency." Voss teaches using **loss-framed calibrated questions**: "What happens if you don't solve this problem?" forces them to visualize negative consequences. The **endowment effect** amplifies this — once people feel they own something, losing it hurts more. Smart negotiators offer trial periods or "take it home tonight" because possession creates psychological ownership. **Prospect theory** shows people make risky choices to avoid losses but conservative choices for gains, so loss framing actually makes them more likely to act decisively.

🎯 **Negotiation Wisdom**
Cialdini observed: "People aren't moved by what they might gain — they're driven by what they're about to lose."

❓ **Tomorrow's Question**
If humans unconsciously mirror emotions and behaviors in conversation, what would happen if you deliberately became the emotional thermostat of your negotiation rather than the thermometer?`,parable:`The morning air hung thick with incense smoke as Ren discovered Vasska in the temple courtyard, his silver tongue working its magic on a group of pearl divers. "Brothers," the one-eyed master was saying, "I don't come offering riches — I come warning of ruin."

Ren watched, fascinated, as Vasska painted vivid pictures not of wealth, but of poverty. "Each day you delay, the monsoon draws closer. When it arrives, these diving grounds will be impossible to work for months. Your families will go hungry while other divers, who acted swiftly, feast on the profits of preparation."

The divers shifted uncomfortably, their eyes darting between each other. One gripped his diving weights tighter.

"But master," Ren whispered as they walked away with a contract signed, "yesterday you spoke of dreams and desires. Today you spoke only of nightmares."

Vasska's blind eye seemed to gleam with ancient knowledge. "Young merchant, the human heart has two chambers. One beats with hope, the other with fear. But listen closely — fear's rhythm is twice as strong."

They paused before a fruit vendor whose mangoes were beginning to brown. "Watch," Vasska murmured, then approached the man. "Friend, I see decay creeping into your finest fruit. Each hour costs you more than selling at a fair price could ever earn you."

Within moments, they had secured the entire lot at half price.

"People will walk slowly toward pleasure," Vasska explained as they loaded the mangoes, "but they will run from pain. A wise negotiator doesn't offer what they might gain — he reveals what they're already losing."

**Moral**: *Fear of loss cuts deeper than hope of gain; the skilled negotiator makes preservation feel more urgent than acquisition.*

*Tomorrow, Ren would learn why the mirror's reflection holds the deepest negotiation secrets...*`},{day:5,title:"Tactical Empathy",date:"2026-03-04",image:"images/negotiation/day-5.jpg",audio:"audio/negotiation/day-5",sonnet:"",standard:`🤝 Day 5: Tactical Empathy

🧱 **The Concept**
Tactical empathy means understanding and acknowledging your counterpart's emotions without agreeing with them, using emotional intelligence as a strategic weapon to influence behavior and build rapport.

❓ **Why It Matters**
Chris Voss discovered that FBI hostage takers would surrender not when negotiators offered deals, but when they felt truly heard and understood. Neuroscience shows that when people feel emotionally validated, their logical brain comes online, making them more reasonable and collaborative. This isn't about being nice — it's about gaining tactical advantage through emotional calibration.

⚙️ **How It Works**
Start with **labeling emotions**: "It sounds like you're frustrated with the timeline" or "It seems like you feel this proposal is unfair." The magic formula is "It sounds like..." or "It seems like..." followed by the emotion you observe. This **diffuses negative emotions** and makes people feel heard. **Mirror neurons** fire when someone accurately reflects our emotional state, creating instant rapport. Voss teaches the **late-night FM DJ voice** — slow, calm, downward inflection that unconsciously soothes the limbic system. When someone is angry, don't match their energy; become the thermostat that lowers the room's temperature. **Emotional contagion** works both ways — your calm confidence becomes their calm confidence.

🎯 **Negotiation Wisdom**
Voss learned: "Tactical empathy is hearing the music behind the words — and then playing it back to create harmony."

❓ **Tomorrow's Question**
If the most powerful word in negotiation can make people feel heard while simultaneously making them question their own position, what happens when you use it not as agreement, but as a gentle scalpel?`,parable:`The morning brought news of bandits on the eastern trade route, and merchants gathered in worried clusters throughout the bazaar. Ren watched as voices rose in heated argument over alternate paths and delayed caravans.

"Fear makes men foolish," Vasska murmured, his good eye studying the crowd. "Watch how emotion clouds their judgment."

A red-faced merchant named Khalil was shouting at a caravan master: "Your delays will cost me everything! I have buyers waiting!"

Vasska approached with measured steps. "Khalil, it sounds like you're feeling trapped between the bandits and your commitments."

The merchant's posture softened slightly. "Yes... exactly. I don't know what to do."

"It seems like you're worried that any choice you make will hurt your reputation with your buyers," Vasska continued, his voice carrying the calm cadence of distant thunder.

Khalil's shoulders dropped further. "That's... that's exactly right. How did you know?"

"Because I see a merchant who cares deeply about his word," Vasska replied. "Now, with a clearer mind — what would your buyers prefer: goods that arrive a week late, or goods that never arrive because their merchant took foolish risks?"

Ren marveled as the transformation occurred. Khalil's face relaxed, his breathing steadied, and suddenly he was nodding thoughtfully rather than shouting desperately.

"You didn't agree with him," Ren observed later. "You just... reflected what he was feeling."

"The angry man cannot hear wisdom," Vasska said, touching his blind eye. "But the understood man opens his ears like flowers to rain. I became the mirror of his heart, not the echo of his words."

**Moral:** *True power lies not in matching another's emotional storm, but in becoming the calm harbor where their turbulence finds peace.*

*Tomorrow, young Ren will discover why the smallest word can carry the greatest weight...*`},{day:6,title:`The Power of "That's Right"`,date:"2026-03-04",image:"images/negotiation/day-6.jpg",audio:"audio/negotiation/day-6",sonnet:`**🪶 Sonnet VI: The Power of "That's Right"**

When minds in conflict dance around their fears,
And positions harden into walls of stone,
The wise negotiator simply volunteers
To mirror back the thoughts they call their own.

"You worry profit margins might be thin,
Your timeline's tight, your stakeholders demand—"
Until the other nods and lets you in:
"That's right, exactly!" — now they understand

You see their world through eyes that truly know
The weight they carry, burdens that they bear.
From this foundation, partnership can grow,
For trust blooms when we feel someone truly cares.

*Not "You're right" which ends the conversation's flow,*
*But "That's right" — where real solutions start to grow.*`,standard:`🤝 Day 6: The Power of "That's Right"

🧱 **The Concept**
The two words "That's right" represent the holy grail of negotiation — when your counterpart says them, they've just agreed with your summary of their position so completely that they feel ownership of the solution.

❓ **Why It Matters**
Voss discovered that "That's right" is neurologically different from "You're right" — the latter is often dismissive agreement to end conversation, while the former indicates genuine breakthrough. When someone says "That's right," their brain releases oxytocin and dopamine, creating a sense of partnership and satisfaction. This moment transforms adversaries into collaborators because they feel you truly understand their world.

⚙️ **How It Works**
The path to "That's right" requires **summarizing their position** so accurately they feel you've read their mind. Use the formula: "So if I understand correctly..." then repeat back their concerns, motivations, and constraints in their own words. Add **emotional labels** from tactical empathy: "You're feeling pressure from your board, you need to show ROI within six months, and you're concerned this solution might not scale." When you nail it, watch their body language shift — they'll nod, relax, and often say those magic words. **Avoid leading them** to your conclusion; instead, help them arrive at it themselves. The difference between manipulation and influence is that influence helps people make better decisions for themselves.

🎯 **Negotiation Wisdom**
"That's right" isn't agreement with you — it's agreement with themselves, which makes all the difference in creating lasting deals.

❓ **Tomorrow's Question**
If saying "Yes" can actually be the most dangerous word in negotiation, trapping both parties in false agreement, what three types of "Yes" exist, and why does the wrong one destroy deals before they begin?`,parable:`Vasska's single eye gleamed as he watched the silk merchant's shoulders tense. Three hours of haggling had yielded nothing but circular arguments about thread counts and shipping delays. Ren fidgeted beside his master, certain they'd lost another deal.

"Friend," Vasska said suddenly, his voice dropping to that peculiar cadence that seemed to slow time itself. "Let me see if I truly understand your position."

The merchant's jaw tightened, expecting another sales pitch.

"You've built your reputation on delivering premium silk that arrives exactly when promised. Your customers don't just buy fabric — they buy certainty. You're worried that if you commit to our timeline and something goes wrong, you'll lose clients you've spent decades cultivating. The profit margin we're discussing is attractive, but not worth risking relationships that took a lifetime to build. You need a partner who understands that your word is your most valuable currency."

The merchant's posture shifted. His arms uncrossed. "That's... that's right. Exactly right. My grandfather always said—" He paused, studying Vasska with new interest. "How did you know about my grandfather?"

"I didn't," Vasska smiled. "But men who speak of their word as currency learned it somewhere sacred."

The merchant nodded slowly. "What if we structured the deal with milestone payments? That way, if delays occur, you're only risking partial shipments..."

Ren watched in wonder as the merchant began solving his own problem, crafting terms that moments before seemed impossible.

Later, as they walked away with signed contracts, Ren asked, "How did you turn him from opponent to ally so quickly?"

Vasska touched his blind eye. "The greatest magic isn't changing someone's mind, young one. It's helping them recognize what was already there. When a person hears their deepest concerns spoken with perfect clarity, something remarkable happens — they stop defending and start solving."

**Moral:** True influence comes not from imposing your will, but from understanding theirs so completely that partnership becomes inevitable.

**Tomorrow:** Ren will learn why the word "Yes" can be more dangerous than "No," and how master negotiators navigate the treacherous waters of false agreement.`},{day:7,title:"The Three Types of Yes",date:"2026-03-05",image:"images/negotiation/day-7.jpg",audio:"audio/negotiation/day-7",sonnet:`**🪶 Sonnet VII: The Three Types of Yes**

When "yes" falls swift from lips that seek escape,
Beware the hollow sound of false accord—
This Counterfeit disguised in friendly shape
Will crumble when you try to claim reward.

Confirmation echoes what you've said,
A mirror's voice that holds no binding power,
While those who nod with quickly-bowing head
May flee before the signing's fateful hour.

But Commitment bears the weight of truth,
It questions paths and plans for coming storm,
Asks "how" and "when" with more than simple proof—
This "yes" has substance, depth, and lasting form.

*The surest way to win agreement's prize?*
*Make "no" feel safe, and watch real "yes" arise.*`,standard:`🤝 Day 7: The Three Types of Yes

🧱 **The Concept**
Not all "yes" responses are created equal — there are three distinct types: **Counterfeit Yes** (fake agreement to escape), **Confirmation Yes** (simple acknowledgment), and **Commitment Yes** (genuine agreement to act).

❓ **Why It Matters**
Most failed negotiations aren't killed by "no" — they're murdered by the wrong type of "yes." A Counterfeit Yes feels like victory but leads to broken promises, missed deadlines, and renegotiation. Understanding which "yes" you're hearing prevents you from building castles on quicksand. Voss learned this the hard way: hostage-takers would say "yes" to buy time while planning violence, teaching him that surface agreement often masks deeper resistance.

⚙️ **How It Works**
**Counterfeit Yes** comes when people feel cornered — they agree to end pressure but have no intention of following through. Watch for quick agreement without questions, lack of implementation details, or body language that doesn't match their words. **Confirmation Yes** is just acknowledgment — "Do you understand?" "Yes" — but carries no commitment. **Commitment Yes** emerges after thorough discussion, includes specific next steps, and comes with questions about implementation. Test for Commitment Yes by asking **"How will we know this is working?"** or **"What happens if we hit obstacles?"** Real commitment includes planning for problems. If they can't describe the "how," you don't have real agreement.

🎯 **Negotiation Wisdom**
Chase the right "yes" by making it safe to say "no" — when people feel free to refuse, their agreement becomes genuine.

❓ **Tomorrow's Question**
If "no" is actually the negotiator's best friend because it reveals true boundaries and opens honest dialogue, why do most people fear this word, and how can reframing "no" as information rather than rejection transform your entire approach to difficult conversations?`,parable:`The morning sun cast long shadows across the bazaar as Ren approached Vasska's stall, still glowing from yesterday's breakthrough. "Master, I used your summary technique with the silk merchant. When I said 'So you're worried about quality consistency and delivery timing,' he nodded and said 'That's right!' Then he agreed to my terms immediately."

Vasska's blind eye seemed to focus on something beyond the present. "Show me his contract."

Ren proudly unfurled the parchment. Vasska ran his weathered fingers across the signatures, then looked up gravely. "Child, you have three types of agreement in this world, and you've collected the most dangerous one."

He gestured to three clay pots on his counter. "The first pot appears full but holds only air — this is **Counterfeit Yes**, spoken by those who agree to escape pressure. They nod, they sign, they smile... then vanish like morning mist. Your silk merchant gave you this poisoned gift."

Vasska tapped the second pot, which rang hollow. "**Confirmation Yes** — they understand your words but commit to nothing. Like echoes in an empty cave."

His gnarled hand rested on the third pot, solid and heavy. "But **Commitment Yes** — ah, this has weight. It comes slow, with questions, with plans for obstacles. Watch." He turned to a passing customer. "Friend, will you buy this fine pottery?"

"Yes, yes," the man said hurriedly, not breaking stride.

"Counterfeit," Vasska whispered. "Now observe." To another customer: "This pot costs three silver pieces. Are you interested?"

The woman stopped, lifted the pot, examined it closely. "How was it fired? Will it crack in winter cold? Can you guarantee it for a full season?"

"There," Vasska smiled. "Questions reveal commitment. When someone plans for problems, they plan to succeed."

Ren's face fell as understanding dawned. "The silk merchant... he agreed too quickly."

"The wise negotiator makes it safe to say no," Vasska said, his silver tongue catching the light. "When people fear refusal is forbidden, their agreement becomes worthless. Tomorrow, return to your merchant. Ask him to describe how he'll handle quality problems. His silence will speak volumes."

**Moral:** *True agreement is heavy with questions, while false promises float away on empty air.*

*Tomorrow, Ren will discover why the word "no" is actually a negotiator's greatest gift...*`}],Lv=[{day:1,title:"The Dichotomy of Control",date:"2026-03-01",image:"images/stoic-philosophy/day-1.jpg",sonnet:`**🪶 Sonnet I: The Two Circles**

The general drew two circles in the sand—
One small, one vast, beneath the evening sky.
"The outer ring no mortal can command:
The storm, the senate, whether men shall die."

"But here—" she traced the inner ring with care—
"Your thoughts, your will, your honor, and your creed.
This circle answers only to your prayer.
This ground alone is yours to plant and seed."

The soldier asked, "But what of glory's crown?
What of the battles I may lose or gain?"
"Those live outside." She watched the red sun drown.
"To chase what's outer is to court your pain."

*Command the inner circle — firm and free—*
*And find a peace no emperor can decree.*`,standard:`**🏛️ Day 1: The Dichotomy of Control**

Before we study any Stoic technique, we must learn the single idea that holds all of Stoicism together: **some things are in your control, and some are not.**

🧱 **The Concept**
The dichotomy of control is the Stoic practice of clearly distinguishing what you can control (your thoughts, actions, and responses) from what you cannot (other people, external events, outcomes).

❓ **Why It Matters**
Most human suffering comes from trying to control the uncontrollable — other people's opinions, the weather, the economy, the past. Stoicism doesn't ask you to stop caring. It asks you to redirect your energy toward the only thing you actually have power over: yourself.

⚙️ **How It Works**
Imagine two circles. The inner circle is YOU — your choices, your effort, your attitude, your character. The outer circle is EVERYTHING ELSE — traffic, your boss's mood, whether it rains, what people think of you.

Epictetus, a former slave who became one of history's greatest philosophers, opened his entire teaching with this: "Some things are within our power, while others are not." Your opinions, desires, and actions? Yours. Your body, possessions, reputation, and position? Not fully yours — they can be taken.

When you're stuck in traffic and furious, you're trying to control the outer circle. When you're anxious about a job interview, you're fixating on their decision (outer) instead of your preparation (inner). The Stoic move: catch yourself, identify which circle, and redirect.

📖 **Definitions**
• **Dichotomy of Control**: The fundamental Stoic division between what's "up to us" and what isn't
• **Prohairesis**: Your faculty of choice — the one thing entirely under your control
• **Externals (Adiaphora)**: Things outside your control — wealth, health, reputation, other people
• **Amor Fati**: "Love of fate" — embracing what happens as neither good nor bad, just *what is*

🎯 **Stoic Wisdom**
Epictetus said: "It's not things that upset us, but our judgments about things." The rain doesn't ruin your day — your belief that it *shouldn't* rain ruins your day. Change the judgment, change the experience.

❓ **Tomorrow's Question:**
*If I should only focus on what I can control, does that mean I should stop caring about outcomes entirely? How do Stoics stay ambitious without being attached to results?*`,parable:`**🏰 The Parable of the Two Circles**

In a garrison at the edge of the empire, a young soldier named Caius sat in the dirt, cursing the rain.

---

His unit had been passed over for the campaign in the east — the glorious campaign, the one that would make careers. Instead, they were assigned to guard a grain road. A grain road. While other men won honors, Caius would be watching wheat carts.

"This is unjust," he muttered. "I trained harder than anyone. I deserved that posting."

---

A voice came from behind him — low, steady, like grinding stone.

"What exactly did you deserve?"

Caius turned. Leaning against the barracks wall was Maxima — the old general who'd been "retired" to this outpost after a career that was more scar tissue than glory. One arm hung slightly wrong from a break that never healed. But her eyes were the sharpest thing in the garrison.

"I deserved the eastern campaign," Caius said.

"Did you control the assignment?"

"No, but—"

"Did you control the general who made it?"

"No."

"Did you control the weather that delayed your training scores from reaching headquarters?"

Caius blinked. "How did you know about—"

"I didn't. But something outside you decided your fate, and you're suffering because you think you should have had power over it." She crouched and drew two circles in the mud.

---

The inner circle was small. "This," Maxima said, "is what you command. Your effort. Your discipline. Your attitude right now, in this rain, on this road. Your character."

The outer circle was vast. "This is everything else. Your posting. The general's mood. The weather. Whether Rome wins or loses. Whether anyone notices your work."

She tapped the inner circle. "A soldier who masters this is unbreakable."

She tapped the outer circle. "A soldier who chases this is a slave to luck."

---

"So I should just... accept this?" Caius asked, unable to hide his bitterness.

"Accepting is not surrendering. It's refusing to waste strength on a wall you cannot move." She stood, brushing mud from her knees. "You can guard this grain road like a bitter man counting the days. Or you can guard it like the best soldier in the empire — because *that* is in your circle."

She walked away, then paused. "The men who went east? Half of them are spending tonight complaining about their tents. The posting didn't make them happy. It never does."

---

Caius sat alone, staring at the two circles dissolving in the rain. The outer one washed away first. The inner one held a little longer.

He decided to guard the grain road like it was the gates of Rome.

---

**🌾 The Moral**

You cannot control the storm, the assignment, or the judgment of others. You can only control your response, your effort, and your character. The Stoic doesn't stop caring — they stop wasting power on what was never theirs to command.

> *"The soldier who guards a grain road with honor is freer than the general who chases glory he cannot control."*

❓ *Tomorrow's tale: Caius has stopped fighting the outer circle. But does that mean he should abandon ambition? How does a Stoic pursue great things without being enslaved by the outcome?*`},{day:2,title:"The Discipline of Desire",date:"2026-03-01",image:"images/stoic-philosophy/day-2.jpg",sonnet:`**🪶 Sonnet II: The Discipline of Desire**

The archer draws his bow with steady hand,
Not grasping tight the arrow's final flight,
But trusting skill and practice to command
The perfect form that honors training's might.

So too the Stoic heart learns to release
Its desperate clutching at tomorrow's prize,
And finds in letting go a deeper peace
Than all the victories that ego buys.

Want what occurs, not what you wish would be,
Align desire with fate's unfolding plan,
For nature's wisdom flows more perfectly
Than all the scheming of ambitious man.

*When will and world dance as partners true,*
*The universe conspires in all you do.*`,standard:`🏛️ Day 2: The Discipline of Desire

Yesterday we learned the dichotomy of control — separating what's "up to us" from what isn't. But this raises a crucial question: if we should only focus on what we control, how do we stay ambitious without becoming attached to results? The answer lies in **the discipline of desire** — wanting what happens, not making what we want happen.

🧱 **The Concept**
The discipline of desire teaches us to align our wants with reality rather than demanding reality align with our wants.

❓ **Why It Matters**
Ambition without attachment seems impossible — how can you strive for promotion while not caring if you get it? But Stoics discovered something profound: when you stop *needing* specific outcomes, you actually perform better. Desperation creates tension, anxiety clouds judgment, and attachment to results makes you fragile when things go wrong.

⚙️ **How It Works**
Marcus Aurelius wrote: "Accept the things to which fate binds you, and love the people with whom fate associates you." This isn't passive resignation — it's active engagement with reality as it is, not as you wish it were. You still prepare thoroughly for the job interview, but you prepare to give your best effort, not to guarantee a specific outcome. You train hard for the race, but you race to honor your preparation, not to control who wins. The Stoic athlete competes fiercely while being genuinely okay with losing. This paradox — caring deeply while holding lightly — is what Seneca called "the preferred indifferent." Health, wealth, and success are naturally preferred, but they're not *good* in themselves. Your character in pursuing them is what matters.

📖 **Definitions**
• **Discipline of Desire**: Training yourself to want what happens rather than happening what you want
• **Preferred Indifferents**: Things naturally preferred (health, success) but not truly "good" — your character in relation to them matters more
• **Prosoche**: Continuous attention to living according to Stoic principles
• **Sympatheia**: The Stoic belief that everything in the universe is interconnected

🎯 **Stoic Wisdom**
Seneca taught: "Every new beginning comes from some other beginning's end." When you align your desires with what actually happens, you discover that reality always contains exactly what you need to practice virtue.

❓ **Tomorrow's Question:**
*If Stoics accept everything that happens as necessary, how do they still fight for justice and try to improve the world? Doesn't this philosophy lead to passive acceptance of evil?*`,parable:`General Maxima found young Caius staring at the training grounds where other soldiers sparred, his jaw clenched in frustration.

"They're better than me," Caius muttered. "No matter how hard I train, Marcus still beats me. Lucius moves faster. I want to be the best, but—"

"But you cannot make yourself the best by wanting it," Maxima interrupted, settling beside him on the stone wall. "Tell me, when you spar with Marcus, what occupies your mind?"

"Winning. Not losing. Proving myself."

Maxima nodded. "And how does that serve your swordwork?"

Caius frowned. "It... doesn't. I get tight. Make mistakes."

"Yesterday I taught you about control — what's yours and what isn't. Today, I'll teach you about desire. You think you want to defeat Marcus. But what you really want is to become worthy of victory. These are not the same thing."

The old general stood, drawing his practice sword. "Spar with me. But here's your challenge: fight to honor your training, not to win. Fight to express everything you've learned, not to prove anything to anyone. Want what happens — whatever happens — because it will show you exactly where you truly stand."

As they circled each other, Maxima continued: "The gods have already decided who wins this match. Your job is not to change their minds. Your job is to be worthy of their attention."

Caius attacked with precision rather than desperation, defended with awareness rather than fear. He lost, but felt strangely victorious.

"This," Maxima said, helping him up, "is the discipline of desire. When you stop needing specific outcomes, you start deserving them."

**Moral:** True strength comes not from bending the world to your will, but from aligning your will with the world's wisdom.

*Tomorrow, Caius would ask a troubling question: if we must accept everything that happens, how do we still fight against injustice?*`},{day:3,title:"The Discipline of Action",date:"2026-03-02",image:"images/stoic-philosophy/day-3.jpg",audio:"audio/stoic-philosophy/day-3",sonnet:`**🪶 Sonnet III: The Discipline of Action**

When injustice burns before our weary eyes,
And suffering marks the path that we must tread,
The heart cries out for swift and sure replies—
Yet wisdom counsels: act, but don't be led
By desperate hope to control what will be,
Nor let attachment cloud your sacred duty.
The general fights not for certain victory,
But because courage serves a higher beauty.
Engage the world with all your mortal strength,
Defend the weak and challenge what is wrong,
Yet hold each outcome lightly—go to length
In virtuous action, knowing you belong
*To something greater than your small desires:*
*The flame of duty that never tires.*`,standard:`🏛️ Day 3: The Discipline of Action

**🧱 The Concept**
The discipline of action means engaging fully with the world while remaining unattached to outcomes — acting with virtue as your only true goal.

**❓ Why It Matters**
Yesterday's question strikes at the heart of a common misunderstanding: that Stoic acceptance means passive resignation. But Marcus Aurelius didn't write his *Meditations* from a philosopher's garden — he wrote them while campaigning on hostile frontiers, making life-and-death decisions as Emperor of Rome. Stoics don't withdraw from the world; they engage more fully because they're not paralyzed by attachment to results.

**⚙️ How It Works**
The discipline of action operates on a simple principle: focus entirely on acting with virtue, not on controlling consequences. Epictetus taught that we play roles like actors in a drama — we don't choose the play or our part, but we can choose to perform our role excellently. A Stoic judge fights corruption not because they can guarantee justice will prevail, but because fighting corruption is what a virtuous judge does. A Stoic parent protects their children not because they can prevent all harm, but because protection expresses love and duty. You vote, you protest injustice, you defend the vulnerable — not to control outcomes, but because these actions align with virtue. The paradox: when you act without attachment to results, you often achieve better results because you're not clouded by anxiety or distorted by desperation.

**📖 Definitions**
• **Discipline of Action**: Engaging fully with your duties while focusing solely on virtuous action, not outcomes
• **Prohairesis**: Your faculty of moral choice — the one thing truly under your control
• **Kathêkon**: Appropriate action based on your role and circumstances
• **Reserve Clause**: Mental addition of "fate permitting" to all plans and intentions

**🎯 Stoic Wisdom**
Marcus Aurelius wrote: "You have power over your mind — not outside events. Realize this, and you will find strength."

**❓ Tomorrow's Question:**
*If external things like health, relationships, and success don't determine our happiness, why do we still feel devastated when we lose them? Are Stoics asking us to become emotionless robots, or is there a way to care deeply while remaining resilient?*`,parable:`The Germanic tribes had retreated beyond the Danube, leaving behind scorched earth and the acrid smell of burning villages. Caius stood guard at the edge of the Roman encampment, watching smoke rise from what had once been a thriving settlement. His jaw clenched as he thought of the families who had fled — or worse, hadn't escaped in time.

"You're brooding again, young soldier," came Maxima's voice from behind him. The general's weathered hands rested on his walking staff, his scarred face calm despite the devastation before them.

"How can you remain so peaceful, General?" Caius demanded, gesturing toward the ruins. "Innocent people suffered here. Children, elders — and we arrived too late to save them."

Maxima joined him at the camp's edge, his eyes taking in the same scene that tormented Caius. "Do you think I feel nothing looking upon this tragedy?"

"You seem... unmoved."

"Ah." Maxima nodded slowly. "You mistake discipline for indifference. Tell me, Caius — what would your anguish change about what has already happened?"

"Nothing, but—"

"And yet," Maxima interrupted gently, "what might your energy accomplish if directed toward what still can be changed?"

Caius frowned, not understanding.

"Watch." Maxima strode purposefully toward the command tent. Within moments, he emerged with a scroll and began writing orders. "We cannot undo this village's fate," he called to Caius, "but we can ensure the next settlement has warning. We can track the raiders' path. We can strengthen our patrols."

As Maxima dispatched messengers and organized search parties, Caius began to understand. The general's calm wasn't callousness — it was clarity. By not wasting energy lamenting what couldn't be changed, he preserved all his strength for what still could be.

"The discipline of action," Maxima explained later as they planned their pursuit, "means engaging fully with your duty while accepting that outcomes lie beyond your control. I fight not because I can guarantee victory, but because fighting is what a Roman general does when innocents are threatened."

Caius watched his mentor work through the night, every decision made with fierce precision yet complete detachment from results. Here was a man who cared so deeply about justice that he refused to let his emotions cloud his judgment.

**Moral**: *True engagement with the world comes not from attachment to outcomes, but from complete commitment to virtuous action.*

Tomorrow, as they tracked the raiders deeper into hostile territory, Caius would learn why the Stoics spoke of emotions not as enemies to be destroyed, but as energies to be properly channeled...`},{day:4,title:"The Therapy of Emotions",date:"2026-03-03",image:"images/stoic-philosophy/day-4.jpg",audio:"audio/stoic-philosophy/day-4",sonnet:`**🪶 Sonnet IV: The Therapy of Emotions**

When Fortune strikes with her most bitter hand,
And tears fall freely down the weathered cheek,
The Stoic doesn't fight what nature planned—
These first emotions make us truly speak.
But past the natural grief that loss must bring,
Lies judgment's realm where wisdom takes its stand:
"Catastrophe!" or "temporary sting"?
The meanings that we add are in our hand.
No robot made of stone the Stoic proves,
But gardener of the heart's wild, tangled ground,
Who feels each joy and every sorrow moves,
Yet keeps his deepest peace forever sound.
*For he who rules his judgments rules his pain,*
*And in that mastery, his strength shall reign.*`,standard:`🏛️ Day 4: The Therapy of Emotions

**🧱 The Concept**
Stoics don't eliminate emotions — they transform destructive passions into healthy feelings by changing the judgments that create them.

**❓ Why It Matters**
Yesterday's question reveals a crucial misunderstanding: Stoics aren't emotionless robots, but emotional alchemists. When Seneca lost his fortune, he grieved. When Marcus Aurelius faced his son's death, he mourned. The difference lies not in feeling nothing, but in preventing emotions from becoming destructive forces that cloud judgment and compromise virtue. Stoics distinguish between initial emotional reactions (which are natural and involuntary) and sustained passionate attachments (which are chosen and often harmful).

**⚙️ How It Works**
Stoic emotional therapy works through judgment revision. According to Epictetus, we're disturbed not by events themselves, but by our judgments about events. The loss of a job triggers natural disappointment, but adding the judgment "this is catastrophic" creates despair. A friend's betrayal brings natural hurt, but the judgment "I'm worthless" breeds lasting anguish. Stoics practice catching these secondary judgments and examining them: Is losing this job truly catastrophic, or just inconvenient? Does someone's poor behavior actually diminish my worth? By questioning and revising these judgments, you maintain emotional resilience while still caring deeply about what matters. The goal isn't to feel nothing, but to feel appropriately — grieving losses without being destroyed, celebrating victories without becoming attached, loving deeply without being possessive.

**🎯 Stoic Wisdom**
Epictetus taught: "It's not what happens to you, but how you react to it that matters."

**❓ Tomorrow's Question:**
*If we can choose our emotional responses through rational judgment, why do some people seem naturally more resilient than others? Is emotional strength purely a matter of philosophical training, or are there deeper patterns that shape how we respond to adversity?*`,parable:`The screams echoed across the garrison courtyard as another wounded soldier was carried from the surgeon's tent. Caius watched from the shadows, his stomach churning at the sight of his comrade's mangled leg.

"You're judging again," came Maxima's voice behind him.

Caius turned, startled. The general approached with his characteristic limp, acquired in some long-ago battle. "I don't understand, sir. Judging what?"

"The suffering. The injury. You're adding meaning to what simply is." Maxima gestured toward the medical tent. "What do you see when you look at that scene?"

"Horror," Caius replied immediately. "Tragedy. A young man's life ruined."

Maxima nodded slowly. "And what does the surgeon see?"

Caius paused, considering. "Work to be done. A problem to solve."

"Precisely. The facts remain unchanged — a soldier has been injured and requires treatment. But your judgment creates horror, while the surgeon's judgment creates purpose." The general's weathered face softened. "This doesn't make you weak, young friend. The initial shock you feel is natural, even necessary — it signals that you care about your fellow soldiers. But watch what happens next."

As they observed, Caius noticed his breathing had steadied. The nausea passed. His mind began calculating — how many men were still needed for the next patrol? Could this soldier's duties be redistributed?

"You see?" Maxima smiled. "You haven't become heartless. You still care deeply about your comrade's welfare. But you've stopped adding judgments that serve no purpose except to increase suffering. The Stoic doesn't love less — he loves more wisely."

That evening, Caius visited the wounded soldier, bringing food and companionship. He felt genuine sadness for his friend's pain, but underneath lay an unshakeable calm — the peace that comes from caring without being consumed.

**Moral**: True emotional strength lies not in feeling nothing, but in feeling wisely — experiencing natural emotions without being enslaved by destructive judgments.

*Tomorrow, Maxima would reveal why some soldiers crumbled under pressure while others seemed forged by it...*`},{day:5,title:"The Architecture of Character",date:"2026-03-03",image:"images/stoic-philosophy/day-5.jpg",audio:"audio/stoic-philosophy/day-5",sonnet:`**🪶 Sonnet V: The Architecture of Character**

Not born are heroes of the noblest kind,
But forged through daily acts of virtue small,
Each choice a stone that builds the steady mind,
Each moral stand, a brick within the wall.

The patient word when anger seeks to rise,
The honest deed when profit tempts the heart,
The courage shown when fear would compromise —
These simple acts perform the builder's art.

Like rivers carving canyons grain by grain,
Like blacksmiths hammering steel to perfect form,
The soul shapes itself through joy and pain,
Till character stands firm through any storm.

*So build with care each moment that you live,*
*For what you practice is what you'll become.*`,standard:`🏛️ Day 5: The Architecture of Character

**🧱 The Concept**
Emotional resilience isn't just philosophical training — it's built through the daily practice of virtue, creating character patterns that automatically respond to adversity with wisdom.

**❓ Why It Matters**
Yesterday's question touches the heart of Stoic development: why some people naturally handle crisis better than others. Marcus Aurelius wasn't born unshakeable — he forged his resilience through years of practicing the four cardinal virtues (wisdom, justice, courage, temperance) in small daily situations. Character is like muscle memory for the soul. When you consistently choose patience over anger in minor frustrations, you build the neural pathways that will serve you when facing major losses. Those who seem "naturally resilient" have often been unconsciously practicing virtue through life's smaller challenges.

**⚙️ How It Works**
Character architecture follows Aristotelian principles that Stoics adopted: we become what we repeatedly do. Seneca practiced poverty monthly, sleeping on hard floors and eating simple food, so actual financial loss wouldn't devastate him. Epictetus taught students to practice saying "no" to small desires, building the strength to resist larger temptations. Each virtuous choice — returning extra change, listening patiently to criticism, helping without expecting recognition — lays another stone in character's foundation. When crisis strikes, you don't consciously think "now I'll be courageous" — courage flows naturally from years of small brave acts. The person who practices daily gratitude doesn't have to force optimism during hardship; appreciation has become their default response.

**🎯 Stoic Wisdom**
Marcus Aurelius wrote: "At dawn, when you have trouble getting out of bed, tell yourself: 'I have to go to work — as a human being.'"

**❓ Tomorrow's Question:**
*If character is built through consistent daily choices, how do we maintain motivation for virtue when the rewards aren't immediate and the world often seems to reward vice instead? What sustains the philosophical life when integrity appears to be a disadvantage?*`,parable:`The morning mist clung to the training grounds as Caius struggled with a practice sword, his movements clumsy and hesitant. For weeks now, he had watched other recruits who seemed born for war — their stances natural, their strikes flowing like water. His own efforts felt forced, unnatural.

"Why do some warriors move like gods while I stumble like a drunk?" Caius asked Maxima, frustration bleeding through his voice.

The old general smiled, remembering his own early fumbling. "Tell me, young soldier, how does a river carve through stone?"

"Slowly, over time," Caius replied, puzzled by the seemingly unrelated question.

"And how does a blacksmith forge the finest blade?"

"Through countless heatings and hammerings."

Maxima nodded. "Character is no different. Those 'natural' warriors you admire? Watch them closely. See how they help fallen comrades without thinking, how they share rations automatically, how they remain calm when others panic. These aren't accidental traits — they're the fruit of ten thousand small choices."

He pointed to the worn practice dummies. "Every time you choose discipline over comfort, honesty over advantage, courage over safety, you're hammering your soul on virtue's anvil. The recruit who naturally stands steady under pressure once chose to stand steady when his father shouted. The one who shows mercy in victory learned compassion comforting his sister's tears."

Caius looked at his calloused hands, remembering months of blisters that had hardened into strength. "So my clumsiness now..."

"Is tomorrow's grace, if you persist. Character isn't inherited — it's architected, stone by stone, choice by choice."

**Moral:** True strength isn't born but built through countless small acts of virtue that become the foundation for greatness.

**Tomorrow:** But what happens when virtue seems to bring only hardship while vice appears rewarded?`},{day:6,title:"The Long View of Virtue",date:"2026-03-04",image:"images/stoic-philosophy/day-6.jpg",audio:"audio/stoic-philosophy/day-6",sonnet:"",standard:`🏛️ Day 6: The Long View of Virtue

**🧱 The Concept**
Stoic virtue operates on cosmic time — its rewards unfold across decades and generations, not quarters and news cycles, requiring us to align with nature's patient rhythms rather than society's frantic pace.

**❓ Why It Matters**
Yesterday's question strikes at every aspiring Stoic's deepest doubt: why choose virtue when vice seems rewarded? Seneca was Rome's richest man yet chose philosophical restraint; Marcus Aurelius could have lived in luxury but wrote his *Meditations* in a frontier tent. They understood something modern culture obscures: virtue's rewards operate on a different timeline than immediate gratification. While the corrupt politician may prosper for years, virtue builds something indestructible — inner peace, genuine relationships, and a legacy that outlasts empires. The question isn't whether virtue pays, but whether we're wise enough to invest in compound interest for the soul.

**⚙️ How It Works**
Nature teaches patience through seasons, mountains, and mighty oaks that grow imperceptibly yet endure centuries. Stoics align with this natural rhythm by focusing on **process over outcomes**. When you choose honesty and lose a promotion, you've strengthened integrity's foundation. When you show compassion to difficult people, you've expanded your capacity for love. Each virtuous act deposits into an account that pays dividends in unshakeable character, deep relationships, and the ability to sleep peacefully regardless of external circumstances. Epictetus, though a slave, possessed greater freedom than his masters because his virtue made him internally unassailable. The corrupt may win battles, but virtue wins wars — especially the only war that truly matters: the one within yourself.

**🎯 Stoic Wisdom**
As Seneca wrote: "Time will bring to light what is hidden in darkness and bury in eternal oblivion what is now held in high regard."

**❓ Tomorrow's Question:**
*If virtue's rewards are internal and long-term, how do we practically measure our philosophical progress when external circumstances remain chaotic? What are the true metrics of a Stoic life?*`,parable:`The morning sun found Caius pacing the garrison courtyard, his jaw tight with frustration. Three nights prior, he'd refused to participate in his century's scheme to skim supplies from local villages — a "tradition" that lined soldiers' purses while impoverishing peasants. Yesterday, his honest report had cost him promotion to optio, the rank going instead to Marcus, the scheme's architect.

"You look like a man who's discovered virtue doesn't pay dividends," came Maxima's weathered voice from the shadows.

Caius spun around. "Forgive me, General. I was just—"

"Questioning why the gods reward vice while virtue earns mockery?" Maxima stepped into the light, his scarred face knowing. "I wore that same expression forty years ago, after choosing honor over advancement in Germania."

"Then you understand," Caius said bitterly. "Marcus grows rich while I remain a common soldier. Where's the justice in that?"

Maxima picked up a fallen acorn, turning it slowly in his palm. "Tell me, young Stoic — how long does it take this acorn to become an oak?"

"Decades, General."

"And how long for a mushroom to sprout after rain?"

"Days."

"Which endures the next storm?" Maxima's eyes held depths of understanding. "Marcus builds his fortune like mushrooms — quick, flashy, shallow-rooted. You build character like oak trees. His wealth may tower now, but when life's true tempests come — and they always come — which foundation will hold?"

Caius considered this as Maxima continued. "I've watched countless 'successful' men crumble when faced with genuine adversity. They built on sand — popular opinion, material wealth, others' approval. But I've also seen simple soldiers, mocked for their integrity, stand unshakeable when empires fell around them."

"But the waiting, General. The doubt when virtue seems foolish..."

"Ah," Maxima smiled, "there's the secret. Virtue doesn't ask you to wait for external rewards — it rewards you immediately with something no Marcus can touch: the ability to respect the man in the mirror. Peace that doesn't depend on others' approval. Strength that grows with each honest choice."

He placed the acorn in Caius's palm. "Plant this today, and in forty years, your grandchildren will shelter beneath its branches. Choose virtue today, and forty years hence, men will speak your name with reverence while Marcus lies forgotten. More importantly — tonight you'll sleep with clear conscience while he schemes in shadows."

As Maxima walked away, he called back: "The patient farmer plants seeds in spring, trusting harvest will come. The wise philosopher plants virtue daily, trusting time will vindicate truth."

**Moral:** *Virtue operates on nature's timeline — slow, steady, and ultimately unshakeable. While vice may flourish like mushrooms after rain, character grows like mighty oaks, enduring long after the storms have passed.*

*Tomorrow, Caius will discover how to measure progress on the philosophical path — for even oak trees show signs of growth to those who know where to look.*`},{day:7,title:"The Inner Scoreboard",date:"2026-03-04",image:"images/stoic-philosophy/day-7.jpg",audio:"audio/stoic-philosophy/day-7",sonnet:`**🪶 Sonnet VII: The Inner Scoreboard**

While worldly men count coins and lands they've won,
The Stoic measures progress by the heart:
How swiftly does the gap between thought and action run?
Does wisdom guide when circumstances dart?

No trophy gleams for anger held in check,
No medal honors those who choose their peace,
When provocation comes like lightning's beck,
And inner stillness marks virtue's increase.

The scoreboard of the soul records each test:
Did patience bloom where fury once held sway?
When setbacks came, did equanimity rest
Unshaken through fortune's fickle play?

*True metrics lie not in the world's applause,*
*But in the growing space 'tween act and cause.*`,standard:`🏛️ Day 7: The Inner Scoreboard

**🧱 The Concept**
Stoic progress is measured not by external achievements but by internal metrics: how we respond to setbacks, our capacity for equanimity, and the growing gap between stimulus and reaction.

**❓ Why It Matters**
Yesterday's question illuminates the Stoic's fundamental challenge: measuring philosophical growth when the world offers only external scorecards. Society rewards wealth, status, and visible success, but these fluctuate wildly and depend largely on fortune. Seneca lost his fortune multiple times yet remained internally rich; Epictetus owned nothing yet was truly free. The Stoic learns to track different metrics: Did I remain calm when criticized? Did I choose virtue when vice was easier? Am I less disturbed by things outside my control today than last year?

**⚙️ How It Works**
Victor Frankl's **logos therapy** echoes ancient Stoic practice: meaning comes from how we respond to circumstances, not the circumstances themselves. Track your **response time** — the gap between external trigger and internal reaction. Notice when anger arises but doesn't control you. Measure your **sphere of concern** versus **sphere of control** — are you wasting less energy on uncontrollables? Count moments of **negative visualization** that prepared you for actual setbacks. When Marcus Aurelius wrote "Confine yourself to the present," he was practicing present-moment awareness — a skill that strengthens with use. Your progress isn't about eliminating emotions but about choosing your responses more consciously.

**🎯 Stoic Wisdom**
As Epictetus taught: "Don't demand that things happen as you wish — instead wish that they happen as they do, and you will go on well."

**❓ Tomorrow's Question:**
*If we can only control our responses and not outcomes, how do we maintain motivation to act in the world? Does Stoicism lead to passive withdrawal or engaged action?*`,parable:`The morning sun cast long shadows across the training ground as Caius approached his mentor, frustration etched across his young face.

"Maxima, I've followed your teachings for months, yet I see no progress. My temper still flares, my worries multiply like weeds, and yesterday I envied Senator Marcus his golden villa. How do I know if philosophy is changing me at all?"

The old general smiled, drawing a line in the sand with his staff. "Tell me, young soldier — when you began sword training, how did you measure improvement?"

"By my accuracy, my speed, my strength..."

"External metrics, all dependent on your instructor's eye and your opponent's skill." Maxima drew another line. "But philosophy requires different measurements. When last did you lose sleep over things beyond your control?"

Caius paused. "Not for weeks, actually."

"And when criticized by Tribune Lucius last month?"

"I... I listened instead of defending immediately."

"These are your true victories. The Stoic warrior tracks not the battles won but the wisdom gained. You measure not the absence of anger but the space between provocation and response — that growing silence where virtue chooses your action." The general erased both lines. "External scoreboards crumble like these marks in sand. But the scoreboard within your soul is written in bronze."

**Moral:** True progress in philosophy is measured not by external achievements but by internal transformations — the growing capacity to choose virtue over impulse, wisdom over reaction.

*Tomorrow, Caius will question whether this inner focus makes a warrior passive in the world — a doubt Maxima will address with tales of philosopher-kings who changed history.*`},{day:8,title:"The Discipline of Action",date:"2026-03-05",image:"images/stoic-philosophy/day-8.jpg",audio:"audio/stoic-philosophy/day-8",sonnet:`**🪶 Sonnet VIII: The Discipline of Action**

The archer draws his bow with steady hand,
His aim is true, his form beyond reproach,
Yet when released, the arrow's path is planned
By wind and fate — not his considered approach.

So too the Stoic acts with full intent,
Pouring his soul into each worthy deed,
While outcomes dance to forces heaven-sent
Beyond the reach of mortal will or creed.

We plant the seed with careful, loving care,
We tend the soil and guard against the blight,
But whether harvest comes through sun or prayer
Depends on forces past our finite sight.

*The wisdom lies not in results we gain,*
*But in the virtue of our effort's strain.*`,standard:`🏛️ Day 8: The Discipline of Action

**🧱 The Concept**
Stoicism demands engaged action, not passive withdrawal — we control our efforts and intentions while releasing attachment to outcomes.

**❓ Why It Matters**
Yesterday's question strikes at a common misunderstanding: that Stoicism breeds apathy or inaction. Critics claim that if we can't control outcomes, why try at all? But the Stoics were intensely active — Marcus Aurelius governed an empire, Seneca advised emperors and wrote prolifically, Epictetus taught students daily. The key distinction is between **outcome independence** and **effort dependence**. We throw ourselves fully into worthy actions while remaining unattached to results. This paradox — caring deeply while holding lightly — is the Stoic's art.

**⚙️ How It Works**
Think of an archer drawing back the bowstring with perfect form, aiming with precision, then releasing completely. The shot is their responsibility; where the arrow lands involves wind, target movement, and countless variables. Apply the **dichotomy of control** to every project: prepare thoroughly (within your control), execute with excellence (your choice), then accept whatever unfolds (often beyond you). When Marcus Aurelius faced plague, war, and betrayal, he didn't retreat to philosophical contemplation — he acted decisively while maintaining inner equilibrium. Practice **reserve clause** thinking: "I will give this presentation excellently, fate permitting" or "I will train for this race with dedication, unless injury prevents it." This isn't pessimism but **philosophical insurance** — you've already accepted that external forces may intervene, freeing you to act without anxiety about guarantees.

**🎯 Stoic Wisdom**
As Marcus Aurelius wrote: "In the morning when thou risest unwillingly, let this thought be present — I am rising to the work of a human being."

**❓ Tomorrow's Question:**
*If Stoic practice involves accepting what we cannot change, how do we distinguish between situations that require acceptance versus those that demand we fight to change them?*`,parable:`The siege of Argentorate had lasted three months when Maxima found Caius staring listlessly at his unused gladius, polishing the same spot repeatedly.

"You seem troubled, young soldier," the general observed, settling beside him on the rampart.

"What's the purpose, General?" Caius gestured toward the enemy walls. "We've tried every strategy. The siege engines fail, the tunnels collapse, our assaults are repelled. If we cannot guarantee victory, why continue fighting?"

Maxima smiled, remembering his own young doubts. "Tell me, Caius — when you draw your sword in battle, do you control where your enemy moves?"

"No, sir."

"Do you control whether your blade finds its mark through his armor?"

"I... no, General."

"Yet you still fight with skill and courage. Why?"

Caius frowned. "Because it's my duty. Because the effort itself matters."

"Precisely." Maxima stood, his weathered hands gripping the stone. "The Stoic fights not because victory is certain, but because fighting well is within our power. We control our preparation, our courage, our technique — not the outcome. Watch."

He drew his own sword and executed a perfect sequence of strikes against the air. "Every movement precise, every stance deliberate. Whether this blade ever tastes enemy blood again matters less than whether I maintain the discipline to wield it with excellence."

"But what if all our efforts prove meaningless?"

"Meaningless?" Maxima sheathed his weapon. "The archer who draws his bow with perfect form has succeeded whether or not the wind shifts his arrow. Our meaning lies in the drawing, not the striking. We act because we are human, because virtue demands engagement, because the world needs those who strive regardless of guarantees."

Caius lifted his gladius, seeing it anew. "So we fight not for certain victory, but because the fighting itself shapes us?"

"Now you begin to understand the warrior-philosopher's way."

**Moral:** True Stoic action springs from duty and virtue, not from guaranteed success. We engage fully with the world while remaining unattached to outcomes beyond our control.

*Tomorrow, Caius will face a choice that tests whether wisdom lies in accepting fate or fighting to change it.*`}],_v=[{day:1,title:"What Is a Note? — Sound Has a Name",date:"2026-03-01",image:"images/music-theory/day-1.jpg",sonnet:`**🪶 Sonnet I: The First Vibration**

Before the song, before the chord was struck,
Before the orchestra or hymn began—
A single string was plucked by chance or luck,
And sound became the oldest speech of man.

The air itself was shaken into waves,
Each crest a pitch, each trough a silence born.
The tuner heard what no one else yet saves:
That every sound has color, shape, and form.

"This trembling," said the blind man, pressing near,
"Is not just noise — it has a name, a place.
Between the lowest rumble and the clear
High ring, twelve tones divide the sonic space."

*All music starts with one vibrating thing—*
*A note is just the name we give it when it sings.*`,standard:`**🎵 Day 1: What Is a Note? — Sound Has a Name**

Before we can play music, read music, or understand why certain songs make you cry, we need to start at the very beginning: **what is a note?**

🧱 **The Concept**
A note is a single musical sound with a specific pitch. Pitch is determined by how fast the air vibrates — faster vibrations = higher pitch, slower = lower. Western music divides all possible pitches into 12 named notes that repeat in a pattern.

❓ **Why It Matters**
Every melody you've ever loved, every chord that gave you chills, every beat that made you move — all of it is built from notes. They're the atoms of music. Understanding them unlocks everything else.

⚙️ **How It Works**
When you pluck a guitar string, it vibrates back and forth, pushing air molecules in waves. Your ear catches these waves and your brain interprets them as sound. A thick, loose string vibrates slowly — you hear a low, deep note. A thin, tight string vibrates fast — you hear a high, bright note.

Western music names 12 of these pitches: **A, A#/Bb, B, C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab**. After the 12th note, the pattern repeats — the next A sounds like the first A, just higher. This repetition is called an **octave**.

Think of it like a clock with 12 hours. After 12, you're back to 1 — same position, new cycle. Notes work the same way, spiraling upward forever.

📖 **Definitions**
• **Note**: A single sound with a specific pitch and duration
• **Pitch**: How high or low a sound is, determined by its vibration frequency (measured in Hertz)
• **Octave**: The interval between one pitch and the next pitch with double its frequency — same note name, higher register
• **Sharp (#)**: A note raised by one half-step
• **Flat (b)**: A note lowered by one half-step

🎯 **Musical Insight**
The note A above middle C vibrates at exactly 440 Hz — meaning the air pulses 440 times per second. The A one octave higher? Exactly 880 Hz — double the frequency. This mathematical relationship is why octaves sound so "right" together. Music is math you can feel.

❓ **Tomorrow's Question:**
*If there are 12 notes, why do most songs only use 7 of them? What is a "scale" and how does it turn random notes into music?*`,parable:`**🏰 The Parable of the First Vibration**

In a city of noise — hammers, carts, shouting vendors — there lived a street musician named Wren who could play any tune by ear. She'd hear a melody once and have it on her fiddle by sundown. But she had a secret: she had no idea what she was actually *doing*.

---

One afternoon, a blind piano tuner named Old Ferro arrived at the square. His fingers moved across a battered upright piano, tightening strings with a wrench no bigger than a spoon. He didn't play — he just listened, turning pegs until each string hummed to his satisfaction.

Wren watched, fascinated. "What are you listening for?"

"Names," Ferro said.

"Names?"

"Every sound has a name. This—" he plucked a string, and a warm, steady tone filled the square— "is A. It vibrates 440 times each second. Not 439. Not 441. Exactly 440."

"How can you possibly know that?"

Ferro smiled. "Because I can hear colors. And A is amber."

---

He plucked the next string. Higher, brighter. "This is also A — but up here." He plucked both together. They rang in perfect agreement, like two voices singing the same word at different heights.

"Same name, different height," Wren said.

"Exactly. The higher A vibrates twice as fast — 880 times per second. Between them?" He played every key from the low A to the high A, one at a time. Twelve distinct sounds. "Twelve steps. Twelve notes. Then the pattern begins again."

Wren counted on her fingers. "It's like... a spiral staircase."

"Now you see it." Ferro closed the piano lid. "Every piece of music ever written — every lullaby, every war march, every love song — is made from these twelve sounds, arranged in time. That's all music is. Named vibrations in a pattern."

---

"But I've been playing for years without knowing any of this," Wren said. "My ear just... finds the right sounds."

"And it serves you well," Ferro nodded. "But imagine how much further you could go if you could *name* what your ear already knows. A painter who can see colors but can't name them — she paints beautifully, but she can't teach, can't communicate, can't understand *why* certain colors work together."

He pressed a single key — middle C — and let it ring.

"This is where everything begins. One vibration. One name. Learn the names, and the music opens up."

---

**🌾 The Moral**

A note is the smallest unit of music — a vibration with a name. There are twelve, and they repeat forever. You don't need to know them to enjoy music, but naming them is the first step to truly understanding it.

> *"The musician who plays by ear hears the river. The musician who knows the notes can see where it flows."*

❓ *Tomorrow's tale: If there are 12 notes, why do most songs only use 7? Ferro shows Wren the secret of the scale — and why some notes belong together.*`},{day:2,title:"The Scale — Choosing Your Musical Colors",date:"2026-03-01",image:"images/music-theory/day-2.jpg",sonnet:`**🪶 Sonnet II: The Scale — Choosing Your Musical Colors**

From twelve bright notes that spiral without end,
We choose but seven for our sacred song,
As painters blend their colors to transcend
The chaos where all hues at once belong.

The major scale ascends like morning light,
With patterns whole and half that never fail,
While minor scales descend through shadowed night,
Each interval a link in music's tale.

These chosen notes create a gravity,
Where some feel home and others yearn to roam,
A constellation of sweet harmony
That guides lost melodies safely back to home.

*For scales are not the cage that limits flight,*
*But wings that lift our songs to greater height.*`,standard:`🎵 Day 2: The Scale — Choosing Your Musical Colors

Most songs use only 7 of the 12 available notes because they follow a **scale** — a carefully chosen subset that creates a specific mood and sound. A scale is like a painter's palette: you could use every color, but choosing just a few creates harmony and meaning.

🧱 **The Concept**
A scale is a sequence of notes arranged in a specific pattern of intervals (distances between notes). The most common is the **major scale**, which uses 7 notes arranged in the pattern: whole-whole-half-whole-whole-whole-half.

❓ **Why It Matters**
Scales are what make music sound "right" to our ears. They create expectation and resolution — when you hear the first few notes of "Happy Birthday," your brain knows what comes next because it follows the major scale pattern. Different scales evoke different emotions: major sounds happy, minor sounds sad, pentatonic sounds ancient.

⚙️ **How It Works**
Start with any note and follow the major scale pattern. From C: C-D-E-F-G-A-B-C. Notice the half-steps (E to F, B to C) and whole-steps everywhere else. This pattern creates the familiar "do-re-mi-fa-sol-la-ti-do" sound. The **minor scale** uses a different pattern: whole-half-whole-whole-half-whole-whole, giving it that melancholy quality. Each scale creates its own gravitational field — some notes feel like "home," others feel like they need to resolve somewhere.

📖 **Definitions**
• **Scale**: A sequence of notes arranged in a specific pattern of intervals
• **Interval**: The distance between two notes
• **Whole step**: An interval of two semitones (like C to D)
• **Half step**: An interval of one semitone (like E to F)
• **Tonic**: The "home" note of a scale, where melodies feel resolved

🎯 **Musical Insight**
The major scale isn't arbitrary — it's based on the natural harmonic series that occurs when any note vibrates. This is why it sounds "natural" to virtually every human culture, despite being a mathematical relationship.

❓ **Tomorrow's Question:**
*If scales give us the notes, what happens when we play multiple notes at the same time? How do we know which combinations will sound beautiful versus jarring?*`,parable:`The morning sun cast long shadows across the plaza where Wren had set up her guitar case, coins glinting like scattered stars. She played a simple melody in C major, each note flowing naturally to the next, when Old Ferro approached with his leather satchel of tuning tools.

"Ah, the bright palette today," he said, settling beside her. "But tell me, child, why do you choose only seven colors from the twelve available?"

Wren paused mid-song. "Seven?"

"Listen." Ferro pulled out a small pitch pipe and blew a C, then continued up the white keys of an imaginary piano. "C, D, E, F, G, A, B, C. Seven notes that repeat. You could play all twelve — the black keys too — but instead you paint with just these seven. Why?"

Wren strummed her C major scale slowly. "It sounds... complete. Like a story with a beginning, middle, and end."

"Precisely! A scale is not a limitation — it's a choice. Like a poet choosing to write a sonnet instead of using every word in the dictionary." Ferro's weathered hands traced patterns in the air. "Each scale is a different emotional landscape. Your C major — I see it as golden wheat fields under blue sky. But play its cousin, A minor..." He hummed the relative minor scale. "Now I see those same fields under storm clouds."

Wren experimented, shifting to A minor. The same seven notes, but starting from A instead of C, transformed the entire feeling from joy to longing.

"The ancient Greeks knew this," Ferro continued. "They believed each scale had its own character, its own power over the human heart. They weren't wrong. When you choose a scale, you choose which emotions you'll unlock in your listeners' souls."

**Moral**: A scale is not a restriction but a conscious choice — like selecting colors for a painting, we limit our palette not to constrain beauty, but to create it with intention and coherence.

*Tomorrow, Ferro will teach Wren about the magic that happens when multiple notes sound together, and why some combinations make the heart soar while others make it ache.*`},{day:3,title:"Chords — When Notes Find Their Perfect Partners",date:"2026-03-02",image:"images/music-theory/day-3.jpg",audio:"audio/music-theory/day-3",sonnet:`**🪶 Sonnet III: When Notes Find Their Perfect Partners**

When single notes hang lonely in the air,
Like travelers seeking shelter from the storm,
They call to kindred spirits to prepare
A harmony where beauty can take form.

The third and fifth rise up to meet the root,
Three voices joined in mathematical grace,
As major thirds ring bright while minor suit
Themselves in shadows, each in perfect place.

From C to E to G, the triad sings
Of consonance that nature's laws ordain,
While progressions flow like water springs
From chord to chord in time's eternal chain.

*In harmony we find truth's deepest art—*
*That separate notes can join to make one heart.*`,standard:`🎵 Day 3: Chords — When Notes Find Their Perfect Partners

🧱 **The Concept**
A **chord** is three or more notes played simultaneously that create harmony. Think of it as musical architecture — while melody is the story unfolding in time, chords are the foundation that supports and colors that story.

❓ **Why It Matters**
Chords provide the emotional backdrop of music, turning simple melodies into rich experiences. A major chord feels stable and bright, a minor chord adds melancholy, and a diminished chord creates tension that begs for resolution. Without chords, even the most beautiful melody feels naked and incomplete.

⚙️ **How It Works**
The simplest chord is a **triad** — take any note from your scale, skip one, take the next, skip one, take the next. In C major: C-E-G forms a C major chord. The intervals matter: a **major chord** has a major third (4 semitones) then minor third (3 semitones), while a **minor chord** reverses this pattern. These mathematical relationships create consonance or dissonance. Some chords feel "resolved" and peaceful, others create tension that demands movement to another chord. The **I-V-I progression** (like C major to G major back to C major) is so satisfying it appears in countless songs across cultures.

📖 **Definitions**
• **Chord**: Three or more notes played simultaneously
• **Triad**: A three-note chord built on intervals of thirds
• **Major third**: An interval of 4 semitones (bright, stable sound)
• **Minor third**: An interval of 3 semitones (darker, more complex sound)
• **Chord progression**: A sequence of chords that creates harmonic movement

🎯 **Musical Insight**
Chords aren't just random note combinations — they're based on the overtone series, the natural harmonics that ring out when you play any single note. This is why certain chord combinations feel inevitable and "right."

❓ **Tomorrow's Question:**
*If melody flows through time and chords create harmonic space, what invisible force organizes when things happen? What makes music move forward with purpose rather than just floating in time?*`,parable:`Wren sat cross-legged on the cobblestones, her guitar case open before her like an offering bowl. The late afternoon sun painted golden stripes across the bustling square, and her fingers found the familiar shape of a C major chord — thumb on the low E string's third fret, fingers arched like small bridges over the fretboard.

"Just one note sounds lonely," she murmured to herself, plucking the C string alone. The sound hung in the air, incomplete, yearning. "But when its friends join in..." She pressed down all three notes of the triad and strummed. The chord bloomed like a flower opening, each note finding its perfect place in the harmonic series.

Old Ferro approached, his cane tapping a gentle rhythm on the stones. "Ah, young Wren," he said, his sightless eyes turning toward the sound. "I hear amber and honey — you're playing in C major."

"How do you always know?" Wren asked, shifting to an A minor chord. The sound darkened, like storm clouds gathering.

"And now I see deep purple, tinged with silver," Ferro smiled, settling beside her on the fountain's edge. "Each chord has its own color, child. But more than that — they have relationships. Play your C major again."

Wren obliged, and the bright triad rang out.

"Now G major."

The new chord felt like the old one's natural companion, creating a sense of movement, of conversation between musical friends.

"You see," Ferro explained, "chords aren't just pretty sounds. They're architecture. Each one creates space for emotion to live in. The major chord — it's like a room with windows wide open, sunlight streaming in. The minor chord — same room, but at twilight, shadows in the corners."

Wren experimented, moving between the chords, feeling how each one pulled toward the next, how some combinations felt resolved while others begged to move elsewhere. A businessman dropped coins into her case, pausing to listen as she painted the evening air with harmonic color.

"But why do some sound right together and others sound..." She grimaced as she played a deliberately harsh combination.

"Dissonant?" Ferro chuckled. "Because harmony isn't chaos, child. It follows the same mathematical relationships that govern everything from flower petals to spiral galaxies. When you play a C major chord, you're not just making music — you're revealing the hidden order of the universe."

As the first stars appeared overhead, Wren played a simple progression: C major to A minor to F major to G major, then back to C. Each chord flowed into the next like water finding its course, creating a harmonic river that carried her melody downstream.

**Moral**: *True harmony emerges not from chaos but from understanding the natural relationships that connect all things. In music as in life, the most beautiful partnerships arise when each voice finds its perfect place in the greater symphony.*

*Tomorrow, Old Ferro will teach Wren about the invisible conductor that orchestrates when each note appears — the mysterious pulse that makes music move through time like a heartbeat...*`},{day:4,title:"Rhythm — The Heartbeat of Music",date:"2026-03-03",image:"images/music-theory/day-4.jpg",audio:"audio/music-theory/day-4",sonnet:`**🪶 Sonnet IV: The Heartbeat of Music**

What force makes melody and harmony dance,
Transforms mere notes to living, breathing song?
'Tis rhythm's pulse that gives each phrase its chance
To move through time where music does belong.

The steady beat like heart within the chest
Provides the frame where melodies can play,
While syncopation adds its sweet unrest,
And meter marks the boundaries of day.

Without this pulse, the sweetest harmonies
Would float like ships becalmed on silent seas,
But rhythm breathes life into music's trees
And sets both soul and dancing feet at ease.

*For time itself finds voice in music's measure,*
*And rhythm unlocks melody's true treasure.*`,standard:`🎵 Day 4: Rhythm — The Heartbeat of Music

🧱 **The Concept**
Rhythm is the organization of time in music — the pattern of beats, accents, and silences that gives music its pulse and forward motion.

❓ **Why It Matters**
Without rhythm, music would be chaos floating in time. Rhythm creates expectation and surprise, tension and release. It's what makes you tap your foot, nod your head, or feel compelled to dance. Even in the most complex classical pieces, rhythm provides the invisible backbone that holds everything together.

⚙️ **How It Works**
Rhythm operates on multiple layers simultaneously. The **beat** is the steady pulse you feel — like a musical heartbeat. **Meter** organizes beats into patterns (4/4 time groups beats in fours, 3/4 in threes). **Tempo** determines how fast those beats move. But the magic happens with **syncopation** — when accents fall on unexpected beats, creating tension. A simple **backbeat** (emphasizing beats 2 and 4 in 4/4 time) transforms a march into rock and roll. **Polyrhythm** layers different rhythmic patterns simultaneously, like having conversations in multiple time signatures at once.

🎯 **Musical Insight**
Rhythm taps into something primal — our heartbeat, our breathing, our walking pace. This is why certain rhythmic patterns feel natural and others create exciting tension.

❓ **Tomorrow's Question:**
If individual notes are letters and chords are words, what happens when we arrange these musical elements across time to tell a complete story? How does music create meaning beyond just pleasant sounds?`,parable:`Wren found Old Ferro in the cathedral at dawn, his weathered hands dancing across the organ's keys in complex patterns that seemed to breathe with life itself.

"Listen," Ferro whispered, playing a simple melody without rhythm — notes floating like leaves on still water. "Beautiful, yes? But lifeless." Then he began the same melody again, but now his foot found the pedal in steady pulses. The music suddenly had a heartbeat.

"Rhythm is time made audible," Ferro explained, his fingers finding a gentle waltz pattern. "Three beats, like a heart at rest — one-two-three, one-two-three." The cathedral filled with the graceful motion of imaginary dancers.

Wren watched, fascinated, as Ferro shifted to four beats, then emphasized the second and fourth — suddenly the waltz became something you could march to, then something that made you want to move your shoulders. "The same notes," he said, "but rhythm changes everything."

"But master," Wren asked, "why does changing when things happen change how they feel?"

Ferro smiled, playing a complex passage where his left hand kept steady time while his right hand danced around it, sometimes with the beat, sometimes against it. "Because rhythm speaks to something deeper than our ears, child. It speaks to our bodies, our breathing, our walking, our very pulse of life. When rhythm matches our natural patterns, we feel comfort. When it surprises us..." He struck a syncopated chord on an unexpected beat, making Wren jump. "We feel alive."

**Moral:** *Rhythm is the invisible architect of time, transforming random moments into purposeful motion, just as a heartbeat transforms mere existence into life.*

*Tomorrow, Wren would discover how all these elements — melody, harmony, and rhythm — weave together into something greater than their individual parts...*`},{day:5,title:"Musical Form — The Architecture of Time",date:"2026-03-03",image:"images/music-theory/day-5.jpg",audio:"audio/music-theory/day-5",sonnet:`**🪶 Sonnet V: Musical Form — The Architecture of Time**

Like architects who sketch their grand design,
Composers map each phrase and section's place,
Where melodies return to intertwine,
And themes through time's progression find their grace.

The binary speaks questions, answers back,
While ternary ventures forth, then homeward turns,
As rondo weaves its golden thread through lack,
And variation's fire forever burns.

Each movement builds upon the last's foundation,
A cathedral rising note by measured note,
Guiding hearts through joy and lamentation,
While form's invisible hand steers passion's boat.

*For music without structure merely wanders,*
*But form transforms each sound to something grander.*`,standard:`🎵 Day 5: Musical Form — The Architecture of Time

🧱 **The Concept**
Musical form is the structural organization of a piece — how musical ideas are arranged, developed, and related to create a coherent whole over time.

❓ **Why It Matters**
Form transforms random musical moments into meaningful experiences. It creates expectations, fulfills or subverts them, and guides the listener through an emotional journey. Without form, even beautiful melodies and harmonies would feel aimless. Form is what makes a three-minute pop song feel complete while a symphony can captivate for an hour.

⚙️ **How It Works**
Musical forms operate like architectural blueprints. **Binary form** (AB) presents two contrasting sections, like question and answer. **Ternary form** (ABA) states an idea, explores something new, then returns home — think of "Somewhere Over the Rainbow." **Rondo form** (ABACA) keeps returning to a main theme between contrasting episodes, like a musical conversation that always circles back. **Theme and variations** takes one melody and transforms it through different harmonies, rhythms, or styles. **Sonata form** creates dramatic tension by presenting themes, developing them through conflict, then resolving everything in a satisfying conclusion. These structures work because they mirror how we naturally process stories and emotions.

🎯 **Musical Insight**
Form gives music its sense of time and destination — it's the difference between wandering and journeying.

❓ **Tomorrow's Question:**
If music can make us feel joy, sadness, tension, or peace without using any words, what is it about certain combinations of sounds that directly trigger our emotions? Why does a minor chord sound "sad" to almost everyone?`,parable:`Wren found Old Ferro arranging sheet music in his cluttered workshop, the pages scattered like fallen leaves across his worn piano bench. "Master," she said, "yesterday you taught me about rhythm — music's heartbeat. But how do all these heartbeats add up to something that moves the soul?"

Ferro smiled, his weathered fingers tracing the air as if conducting an invisible orchestra. "Ah, child, you're asking about form — the architecture of time itself." He moved to his piano and played a simple melody, just eight notes ascending and descending. "Beautiful, yes? But listen..." He played it again, this time adding a contrasting section, then returning to the original melody transformed. "Now it breathes, it travels, it comes home."

"I see colors when I tune pianos," Ferro continued, his blind eyes bright with memory. "But form? Form is like watching a cathedral being built in the sky. Each musical section is a pillar, each return a familiar archway. The listener walks through rooms of sound, knowing somehow that each door leads somewhere meaningful."

Wren played her violin, attempting to mirror his demonstration. "So form is like... telling a story?"

"Exactly! Your street performances work because you intuitively understand this. You don't just play random songs — you create a journey. A gentle opening that draws people in, building excitement, perhaps a quiet moment that makes them lean closer, then a rousing finale that leaves them satisfied." Ferro's hands moved across the keys, demonstrating how the same melody could feel like beginning, middle, or end depending on its placement.

"The great composers knew this secret," he whispered. "They understood that humans crave both surprise and return, adventure and homecoming. Form gives music its sense of time — not clock time, but emotional time. It's what transforms mere sound into experience."

**Moral:** Just as a house needs walls and rooms to become a home, music needs form to become a journey that touches the heart.

*Tomorrow, Ferro will reveal why certain sounds can make even the strongest person weep...*`},{day:6,title:"Musical Emotion — The Language of Feeling",date:"2026-03-04",image:"images/music-theory/day-6.jpg",audio:"audio/music-theory/day-6",sonnet:"",standard:`🎵 Day 6: Musical Emotion — The Language of Feeling

🧱 **The Concept**
Musical emotion emerges from specific acoustic relationships that trigger universal psychological and physiological responses, creating meaning without words.

❓ **Why It Matters**
Music bypasses rational thought to speak directly to our emotional core. A minor chord doesn't "mean" sadness — it creates the physical sensation of sadness through mathematical relationships our brains have evolved to interpret. Understanding this connection reveals why music is humanity's most universal language, capable of moving us to tears or joy regardless of cultural background.

⚙️ **How It Works**
**Consonance** creates stability and peace through simple mathematical ratios (octaves, fifths), while **dissonance** generates tension through complex ratios that our ears struggle to resolve. **Minor scales** emphasize smaller intervals that mirror the acoustic patterns of human distress calls, while **major scales** reflect contentment. **Rhythm** directly affects our heartbeat and breathing — slow tempos calm us, fast ones energize us. **Volume dynamics** mirror emotional intensity, and **harmonic progression** creates expectation and release cycles that parallel human emotional processing. Even **timbre** matters — rough, complex waveforms suggest aggression while pure tones feel peaceful.

🎯 **Musical Insight**
Music doesn't describe emotions — it recreates the acoustic signatures of emotional states, making us feel rather than think.

❓ **Tomorrow's Question:**
If musical emotions are based on mathematical relationships and acoustic patterns, why do different cultures develop such distinct musical styles? What makes Indian classical music, jazz, and Celtic folk all "sound right" to their respective listeners despite using different scales, rhythms, and structures?`,parable:`Wren sat cross-legged in the subway station, her weathered guitar case open before her like a confession box for coins. Tonight, she played nothing but minor chords — not from sadness, but from curiosity. Each progression seemed to pull sighs from passing strangers, their hurried steps unconsciously slowing.

"You're harvesting tears," came Old Ferro's gentle voice. The blind piano tuner had arrived with his worn leather satchel, drawn by the melancholy that painted the tunnel walls blue-gray in his synesthetic vision.

"I don't understand it," Wren admitted, her fingers finding a particularly haunting Am-Dm-G progression. "Why does this make people sad? They don't even know what key I'm playing in."

Ferro settled beside her, his weathered hands reaching for her guitar. "May I?" He took the instrument and played the same progression, but in major. Suddenly the tunnel felt brighter, warmer. A child skipping past actually giggled.

"The mathematics of sorrow," Ferro explained, returning to minor. "When we cry, our voices drop in pitch, become unstable. Minor intervals mirror that instability — they're acoustically unresolved, like emotional wounds that haven't healed. Your listeners hear their own capacity for heartbreak."

Wren watched a businessman pause mid-stride, his expression softening unexpectedly. "And major?"

"The mathematics of contentment. Stable ratios, resolved intervals. The acoustic signature of a satisfied sigh." Ferro's fingers demonstrated, major chords blooming like flowers in his color-vision. "Music doesn't tell us what to feel — it makes us feel by recreating the sound-shapes of emotion itself."

A mother pulling her daughter away from Wren's case suddenly stopped, drawn by Ferro's gentle major-key melody. The child began to dance.

**Moral:** Music speaks in the ancient language of feeling, using mathematical relationships to bypass thought and touch the heart directly.

Tomorrow, Wren would ask why her Irish grandmother's lullabies felt so different from the blues she'd learned on these streets — if emotions were universal, why did musical traditions sound so distinct?`},{day:7,title:"Cultural Musical Languages — The Grammar of Sound",date:"2026-03-04",image:"images/music-theory/day-7.jpg",audio:"audio/music-theory/day-7",sonnet:`**🪶 Sonnet VII: Cultural Musical Languages**

Each culture builds its staircase of sweet sound,
With steps that teach the heart which way to climb.
The Irish reel, the raga's sacred ground,
All speak in different dialects of rhyme.

The blues bends notes to match the soul's own cry,
While gamelan strikes bronze bells in distant scales.
Each system trains the ear to testify
Which intervals make spirits soar or fail.

Yet underneath these learned tongues of tone,
The same emotions pulse through every breast.
Though musical grammars differ, hearts have known
One language moves us all — from east to west.

*So cultures paint with sound their local hue,*
*But human feeling makes each palette true.*`,standard:`🎵 Day 7: Cultural Musical Languages — The Grammar of Sound

🧱 **The Concept**
Cultural musical systems are like distinct languages built from the same emotional vocabulary, each developing unique "grammars" that train listeners' brains to find meaning in different sonic patterns.

❓ **Why It Matters**
While basic emotional responses to music are universal, cultural conditioning shapes how we process complex musical information. A jazz musician hears sophisticated beauty in blue notes and syncopation, while someone raised on pentatonic scales finds different intervals "natural." This explains why unfamiliar music can sound "wrong" initially — our brains are pattern-matching machines trained on specific musical dialects. Understanding this reveals how musical taste develops and why exposure broadens appreciation.

⚙️ **How It Works**
**Scale systems** create the foundational "alphabet" — Western music's 12-tone equal temperament differs from Indian classical music's microtonal ragas or traditional Chinese pentatonic scales. **Rhythmic frameworks** establish temporal expectations — African polyrhythms, Latin clave patterns, and Western meter create different groove vocabularies. **Harmonic conventions** teach us which chord progressions feel "resolved" — the ii-V-I of jazz, the modal progressions of Celtic music, or the drone-based harmonies of Indian classical all train different expectation patterns. **Instrumental timbres** become culturally coded — the bending slides of blues guitar, the ornamental vibrato of Middle Eastern vocals, or the precise articulation of classical strings. **Form and structure** create narrative expectations — the verse-chorus of pop, the call-and-response of gospel, or the improvisation-composition balance of jazz.

🎯 **Musical Insight**
Cultural musical systems are learned languages of feeling — each trains the brain to hear emotional meaning in different acoustic patterns.

❓ **Tomorrow's Question:**
If our brains can be trained to appreciate any musical system, what happens when musicians deliberately break or blend these cultural rules? Why do musical revolutions like bebop jazz or punk rock initially sound chaotic, yet later become new standards of beauty?`,parable:`Wren had been busking in the international district for months, but today felt different. As she played her usual Celtic melodies, she noticed how different passersby responded. The Irish tourists smiled knowingly at her ornamentation, while others walked past unmoved.

"Your fingers speak Irish," came Old Ferro's voice as he approached with his tuning kit. "But listen — do you hear the sitar from the shop across the street?"

Wren paused, letting the unfamiliar microtones wash over her. "It sounds... out of tune," she admitted hesitantly.

Ferro chuckled, his weathered hands finding her guitar. "To ears trained on twelve equal steps, yes. But that musician learned a different staircase — one with many more steps between our notes. Her brain hears colors in quarter-tones that yours might miss."

He adjusted her tuning slightly. "Play your Celtic tune, but bend this note just a hair sharp."

The familiar melody suddenly carried new emotional weight, a yearning quality that surprised them both.

"Each culture builds its own emotional architecture," Ferro explained. "The pentatonic scales of Asia, the modes of ancient Greece, the blue notes of jazz — they're all teaching hearts to feel in different languages. Your perfect pitch hears the notes, but your Irish upbringing taught you which ones feel like home."

As evening fell, Wren found herself listening differently to the city's musical tapestry — the mariachi band's harmonic rhythm, the gospel choir's call-and-response, the jazz club's syncopated pulse. Each was a complete language of feeling, as valid and beautiful as her own.

**Moral:** Musical cultures are languages of the heart — each trains us to hear beauty in different patterns of sound.

**Tomorrow:** When musicians begin mixing these languages, what new forms of beauty emerge?`},{day:8,title:"Musical Innovation — Breaking the Grammar to Create New Languages",date:"2026-03-05",image:"images/music-theory/day-8.jpg",audio:"",sonnet:`**🪶 Sonnet VIII: Musical Innovation**

The rebel strikes a chord that sounds all wrong,
While listeners recoil from jarring sound;
Yet in this chaos dwells a hidden song
That waits for willing ears to come around.

Each age declares its music pure and true,
And scorns the avant-garde as noise and bile;
But time reveals what seemed so strange and new
Was beauty wearing an unfamiliar style.

From Stravinsky's riot to jazz's birth,
From punk's raw scream to hip-hop's urban beat,
The pattern holds across our troubled earth:
First shock, then slow acceptance, then complete.

*For progress lives where comfort fears to tread,*
*And yesterday's rebellion becomes widespread.*`,standard:`🎵 Day 8: Musical Innovation — Breaking the Grammar to Create New Languages

🧱 **The Concept**
Musical innovation occurs when artists deliberately violate established cultural rules, initially creating cognitive dissonance that eventually trains listeners' brains to recognize new patterns as beautiful.

❓ **Why It Matters**
Every musical revolution follows the same neurological pattern: breaking familiar expectations creates tension, confusion, or even anger in listeners whose brains resist unfamiliar patterns. Over time, repeated exposure allows pattern-recognition systems to adapt, transforming yesterday's "noise" into tomorrow's classics. This explains why groundbreaking music often faces initial rejection — from Stravinsky's "Rite of Spring" causing riots to bebop jazz being called "anti-music" to punk rock being dismissed as talentless noise.

⚙️ **How It Works**
**Rule-breaking** targets specific elements — bebop musicians flattened fifths and used complex chord extensions that violated swing-era harmonic rules, while punk stripped away technical complexity entirely. **Cognitive adaptation** requires repetition and context — the brain gradually builds new expectation patterns through exposure, especially when the innovation serves emotional or social needs. **Cultural acceptance** follows generational patterns — younger listeners with less rigid musical conditioning adapt faster, while older listeners trained on previous systems often remain resistant. **Integration** occurs when innovations become systematized — yesterday's avant-garde techniques become today's standard vocabulary, taught in music schools and absorbed into mainstream culture. **Evolution cycles** continue as each generation finds new rules to break — jazz led to rock, which led to punk, which led to new wave, each generation defining itself against its predecessor's established grammar.

🎯 **Musical Insight**
Musical progress happens through creative rule-breaking that initially sounds wrong but gradually rewires our brains to hear new forms of beauty.

❓ **Tomorrow's Question:**
If musical innovation requires breaking established patterns, how do composers and songwriters actually construct these rule-breaking moments? What specific techniques do they use to create controlled musical chaos that eventually resolves into new order?`,parable:`Wren sat cross-legged in the subway tunnel, her violin case open before her, playing a piece that made passersby stop and frown. The melody twisted through intervals that seemed to fight against themselves, rhythms that stumbled and recovered in unexpected places. Most listeners hurried past, their faces pinched with confusion.

"Child, you're making their ears hurt," Old Ferro said, settling beside her with his tuning kit. "That's not how Bach wrote it."

"Exactly," Wren replied, her bow dancing across the strings. "I'm playing Bach's Partita, but I'm bending it through the blues scale, syncopating the rhythm like jazz, adding harmonic distortions like Hendrix might."

Ferro listened carefully, his blind eyes tracking the sonic colors. "Ah, I see purple where there should be gold, jagged edges where Bach carved smooth curves. It's... violent."

"At first," Wren agreed. "But listen —" She played the same passage again, and this time Ferro heard something different. The purple wasn't muddy anymore; it had its own logic. The jagged edges formed a new kind of beauty, like seeing a familiar face through a prism.

A businessman who had passed by twice came back, dropping coins into her case. "That's... interesting," he said. "Disturbing but interesting."

After he left, Ferro nodded slowly. "Every master was once a madman. Beethoven's deafness led him to harmonies that made audiences flee. Coltrane's sheets of sound were called noise until ears learned to follow the patterns."

"Music grows by breaking," Wren said, packing her violin. "Every beautiful thing was once called ugly."

**Moral:** Innovation requires the courage to sound wrong until the world learns to hear you as right.

*Tomorrow: But how do these musical revolutionaries know which rules to break, and when?*`}],Yv=[{day:1,title:"Why Real Estate Builds Wealth",date:"2026-03-01",image:"images/real-estate/day-1.jpg",sonnet:`**🪶 Sonnet I: The Land That Pays You Back**

The carpenter's young daughter watched the square
Where Hallam's tenants lined to pay their rent.
"He sleeps while money flows," she said. "How fair
Is that — when I work dawn to dusk, back bent?"

Her father smiled and set his chisel down.
"The land does not sleep, child — it works all day.
While Hallam walks the edges of the town,
His buildings earn what labor cannot pay."

For brick and beam, once raised upon the ground,
Become a spring that never needs your hand—
A river flowing upward, silver-crowned,
That pays you back for simply owning land.

*The laborer builds the house, then walks away—*
*The owner keeps the house, and it will pay.*`,standard:`**🏠 Day 1: Why Real Estate Builds Wealth**

Before we talk about mortgages, cap rates, or cash flow, we need to understand a fundamental question: *why has real estate created more millionaires than almost any other asset class?*

🧱 **The Concept**
Real estate builds wealth through four forces working simultaneously: cash flow (rental income), appreciation (the property increasing in value), leverage (using borrowed money to control a large asset), and tax advantages.

❓ **Why It Matters**
Unlike stocks or savings accounts, real estate lets you use other people's money (a mortgage) to buy an asset that someone else pays off (a tenant). You control a $300,000 asset with $60,000 down — and the rent covers the mortgage while the property grows in value. No other mainstream investment offers this combination.

⚙️ **How It Works**
Imagine you buy a small house for $200,000. You put $40,000 down and borrow the rest. A tenant moves in and pays $1,500/month in rent. Your mortgage, taxes, and insurance cost $1,300/month. That's $200/month in your pocket — cash flow.

Meanwhile, the house appreciates 3% per year. After Year 1, it's worth $206,000 — you gained $6,000 in equity you didn't work for. Plus, your tenant's rent payments are slowly paying down the mortgage, building your ownership stake.

You invested $40,000 of your own money. But you're earning returns on a $200,000 asset. That's **leverage** — and it's the secret engine of real estate wealth. A 3% gain on $200,000 is $6,000 — a 15% return on your actual $40,000 investment.

📖 **Definitions**
• **Cash Flow**: Rental income minus all expenses (mortgage, taxes, insurance, maintenance)
• **Appreciation**: The increase in property value over time
• **Leverage**: Using borrowed money to control a larger asset than you could buy outright
• **Equity**: The portion of the property you actually own (value minus what you owe)
• **Cap Rate**: Net operating income divided by property price — a quick measure of return

🎯 **Real Estate Wisdom**
Andrew Carnegie said 90% of millionaires got their wealth through real estate. The math is simple: leverage amplifies returns, tenants pay your mortgage, the government gives you tax breaks, and land is finite. You don't need to be rich to start — you need to understand the mechanics.

❓ **Tomorrow's Question:**
*If leverage is so powerful, what are the risks? How can the same force that builds wealth destroy it — and how do smart investors protect themselves?*`,parable:`**🏰 The Parable of the Land That Pays**

Dara was a carpenter's daughter who could build anything — a chair, a table, a doorframe — with nothing but her hands and her father's old tools. She was strong and skilled. But every month, she watched the same thing happen.

---

Old Hallam — the landlord who owned half the village — would sit in the square each morning, drinking tea, while tenants lined up to pay him rent. He didn't build. He didn't hammer. He didn't sweat. And yet, more coins flowed into his purse than Dara earned in a month of hard labor.

"It's not fair," Dara said to her father one evening, sawdust still in her hair. "I build the houses. He just owns them."

Her father set down his chisel. "And that, daughter, is precisely the lesson."

---

"What do you mean?"

"When I was young, I built a cottage for Hallam. He paid me once — fairly. But that cottage has earned him rent for thirty years. I built it in three months. He's collected from it for a lifetime."

Dara frowned. "So the trick is owning, not building?"

"The trick is understanding what an asset *does*. When you build a chair and sell it, you trade your labor for money — once. When Hallam buys a cottage and rents it, the cottage earns money every month, whether he works or not."

---

"But Hallam is rich," Dara protested. "He could afford to buy property. I can't."

Her father leaned in. "Hallam wasn't always rich. He bought his first cottage with borrowed money. He paid a lender interest — just like Kael's stories from the next village. But the rent from his tenant covered the payments. Someone else was paying off his debt."

He drew a simple picture in the sawdust: a house, with arrows showing money flowing in (rent) and flowing out (mortgage). The arrow in was larger than the arrow out.

"That gap," her father said, tapping the difference, "is cash flow. It's money you earn while you sleep. And every month, the debt gets a little smaller, and Hallam owns a little more."

---

"And the house itself?" Dara asked.

"Gets more valuable every year. The land under it can't be made — they stopped making land a long time ago. So as the village grows, the price rises. Hallam paid 500 coins for that cottage thirty years ago. Today it's worth 2,000."

Dara stared at the sawdust drawing. "So he used borrowed money to buy something that earns income, goes up in value, and gets paid off by someone else."

"Now you're seeing it."

---

That night, Dara lay awake, running the numbers. She couldn't buy a house tomorrow. But she could start understanding *why* the Hallams of the world grew wealthy while the builders stayed busy.

It wasn't magic. It was mechanics.

---

**🌾 The Moral**

Real estate builds wealth because it combines four forces: rental income, appreciation, leverage, and time. The laborer earns once per job. The owner earns every month, forever. Understanding this difference is the first step from working *for* money to making money work *for* you.

> *"The carpenter builds the house. The owner keeps the house. And the house keeps paying."*

❓ *Tomorrow's tale: If borrowed money is the engine of real estate wealth, what happens when it backfires? Dara learns the danger of leverage — and why even Hallam fears the word "overleveraged."*`},{day:2,title:"The Double-Edged Sword of Leverage",date:"2026-03-01",image:"images/real-estate/day-2.jpg",sonnet:`**🪶 Sonnet II: The Double-Edged Sword of Leverage**

The blade that carves great fortunes from the stone
Can turn and cleave the hand that holds it tight;
What lifts us high when markets shine alone
Will cast us down when darkness swallows light.
For leverage magnifies both gain and loss,
A multiplier of fortune's wheel of chance;
The same percentage drop becomes a cross
When borrowed gold has funded your advance.
The prudent lord who borrows with restraint
Keeps coffers full for winter's bitter cold,
While greedy souls who leverage without taint
Find ruin where they thought they'd find their gold.
*Though fire can warm the hearth or burn the hall,*
*The wise know well that pride precedes the fall.*`,standard:`🏠 Day 2: The Double-Edged Sword of Leverage

Yesterday we saw how leverage amplifies returns — a 3% property gain becomes a 15% return on your investment. But leverage works both ways: it magnifies losses just as powerfully as gains.

🧱 **The Concept**
Leverage is a multiplier that amplifies both profits and losses — the same force that can accelerate wealth building can also accelerate wealth destruction if property values decline or cash flow turns negative.

❓ **Why It Matters**
Understanding leverage risk is crucial because real estate is cyclical. Markets rise and fall, and over-leveraged investors can lose everything during downturns. However, educated investors use specific strategies to harness leverage's power while minimizing its dangers.

⚙️ **How It Works**
Consider the same $200,000 house from yesterday. If the market drops 10%, your property is now worth $180,000. You've lost $20,000 in equity — but since you only invested $40,000 initially, that's a 50% loss on your investment. The leverage that could have made you rich just magnified your losses 5x. Even worse, if you need to sell, you might owe more than the house is worth (negative equity). Smart investors protect themselves through conservative loan-to-value ratios (never borrowing more than 80%), maintaining cash reserves for repairs and vacancies, buying in strong rental markets where demand remains steady, and focusing on cash flow properties that generate income even if appreciation stalls.

📖 **Definitions**
• **Loan-to-Value Ratio (LTV)**: The percentage of a property's value that you borrow
• **Negative Equity**: Owing more on a mortgage than the property is worth
• **Cash Reserves**: Money set aside for unexpected expenses, vacancies, and market downturns
• **Debt Service Coverage Ratio**: Rental income divided by mortgage payments — measures cash flow safety
• **Market Cycle**: The predictable pattern of real estate appreciation and decline over time

🎯 **Real Estate Wisdom**
Leverage is fire — it can cook your dinner or burn down your house. Conservative investors use 70-80% LTV, maintain 6 months of reserves, and buy for cash flow first, appreciation second. Aggressive investors chase maximum leverage and often lose everything in downturns.

❓ **Tomorrow's Question:**
*How do you analyze whether a property will actually generate positive cash flow? What numbers should you crunch before making an offer?*`,parable:`The morning mist still clung to the village cobblestones when Dara found old Hallam sitting outside the tavern, counting coins with weathered fingers. The carpenter's daughter approached cautiously, remembering yesterday's lesson about the four pillars of property wealth.

"Master Hallam," she began, "you spoke of leverage as a great multiplier. But surely there must be dangers in borrowing so much gold to buy land?"

The old landlord's eyes crinkled with something between amusement and sorrow. "Aye, child. Sit, and I'll tell you of two brothers — both carpenters like your father — who learned leverage's double nature."

Hallam gestured toward the eastern hills. "Twenty summers past, Aldric and Godwin each inherited a hundred silver pieces. Aldric, cautious by nature, bought a small cottage outright for his hundred coins. Godwin, bold and ambitious, used his hundred as down payment on five cottages, borrowing four hundred more from the moneylenders."

Dara leaned forward, sensing tragedy in the tale.

"For seven years, fortune smiled. Property values rose like bread in the oven. Godwin's five cottages doubled in worth, making him wealthy beyond measure. His hundred silver had commanded a thousand silver worth of property — and every rise multiplied his gains fivefold. Meanwhile, Aldric's single cottage grew modestly, and he envied his brother's success."

The old man's voice grew heavy. "Then came the plague year. Trade withered, tenants fled, and property values collapsed by half. Aldric's cottage, worth fifty silver now, still belonged to him entirely. But Godwin owed four hundred silver on cottages now worth only two hundred fifty. The same leverage that made him rich destroyed him — he lost everything to the moneylenders and died penniless."

Dara absorbed this soberly. "So leverage can multiply ruin as easily as riches?"

"Precisely. The wise investor borrows modestly, keeps reserves for dark times, and remembers that what goes up in this world must sometimes come down. Leverage is a sharp blade — it can carve your fortune or cut your throat."

As storm clouds gathered overhead, Hallam added with a knowing smile, "Tomorrow, I'll teach you the numbers that separate the dreamers from the survivors — how to count the coins before you count your chickens."

**Moral:** *The same force that can build an empire can topple it; wisdom lies not in avoiding power, but in wielding it with prudence and preparation.*`},{day:3,title:"The Cash Flow Analysis — Your Investment's Report Card",date:"2026-03-02",image:"images/real-estate/day-3.jpg",audio:"audio/real-estate/day-3",sonnet:`**🪶 Sonnet III: The Monthly Reckoning**

What flows in swift may drain away as fast,
When rent collected meets expense's call.
The landlord's ledger holds both first and last—
For every coin must pay its rightful toll.

Behold the mortgage payment, taxes due,
The vacant months when tenants drift away,
Repairs that come as surely as morning dew,
And management that earns its monthly pay.

The foolish count their rental income high,
Yet never tally what flows out each door.
They dream of riches reaching to the sky,
While bleeding gold upon the counting floor.

*True wealth emerges when the sums are done—*
*What stays in pocket when the month is won.*`,standard:`🏠 Day 3: The Cash Flow Analysis — Your Investment's Report Card

**🧱 The Concept**
Cash flow analysis is the systematic evaluation of all income versus all expenses to determine whether a property will put money in your pocket or drain it each month.

**❓ Why It Matters**
Positive cash flow is the foundation of sustainable real estate investing — it's what separates investors from speculators. A property that generates consistent monthly income can weather market downturns, fund future investments, and provide true passive income. Without proper analysis, you might buy a "good deal" that bleeds money every month.

**⚙️ How It Works**
Start with gross rental income, then subtract all expenses: mortgage payment (principal, interest, taxes, insurance), property management (8-12% of rent), maintenance and repairs (budget 5-10% of rent annually), vacancy allowance (typically 5-10% depending on your market), and miscellaneous costs like HOA fees or utilities you cover. For example: a $200,000 duplex renting for $2,400/month with a $1,200 mortgage payment, $200 in property management, $150 in maintenance reserves, $120 vacancy allowance, and $100 in insurance/taxes generates $630 monthly cash flow. Always use conservative estimates — overestimate expenses and underestimate income to avoid nasty surprises.

**📖 Definitions**
• **Gross Rental Income**: Total rent collected before any expenses
• **Net Operating Income (NOI)**: Income after operating expenses but before debt service
• **Cash-on-Cash Return**: Annual cash flow divided by initial investment
• **Vacancy Rate**: Percentage of time property sits empty
• **Cap Rate**: NOI divided by purchase price — measures property's inherent profitability
• **1% Rule**: Monthly rent should equal at least 1% of purchase price

**🎯 Real Estate Wisdom**
Numbers don't lie, but optimistic projections do. Conservative cash flow analysis protects you from market cycles and ensures each property truly builds wealth rather than just looking good on paper.

**❓ Tomorrow's Question:**
*If cash flow analysis reveals what a property earns today, how do you evaluate its potential to appreciate in value over time? What market indicators separate neighborhoods destined to thrive from those destined to decline?*`,parable:`As autumn painted the village in gold, Dara found Hallam hunched over his ledger books in the dim light of his study, columns of numbers dancing across yellowed pages.

"Teaching yourself arithmetic, girl?" Hallam grunted, noticing her peering at his calculations. "Come, let me show you the heart of all property ownership — the monthly reckoning."

He pointed to a page marked "Miller's Cottage." "See here — the miller pays me two gold pieces monthly rent. But look closer." His gnarled finger traced down the column. "Half a gold piece to the tax collector, another quarter to repair the roof each year, a tenth set aside for when the miller's trade slows and the cottage sits empty. By month's end, barely one gold piece remains."

Dara studied the careful entries. "But that's still profit, isn't it?"

"Aye, but now observe this folly." He flipped to another page marked "Merchant's Manor." "I paid twelve gold pieces for this grand house, collect three monthly in rent. Seems profitable, yes? But the chimney needs constant repair, the gardens require a groundskeeper, and merchants are fickle — sometimes it sits vacant for months. After all expenses, I lose half a gold piece each month."

The old landlord leaned back in his chair. "Many see only the rent flowing in, child. They forget that property drinks gold as eagerly as it produces it. Every nail, every shingle, every day of emptiness costs coin. The wise landlord counts every expense before counting profits."

He showed her his method: estimate each cost conservatively, assume the worst about vacancies, then see what remains. "Better to be pleasantly surprised by extra profit than ruined by unexpected loss."

**Moral**: *True wealth flows from understanding not just what comes in, but what must go out — for only then can you see what truly remains yours.*

*Tomorrow, Dara will learn why Hallam always walks the cobblestones at dawn, studying which streets the merchants favor and which the craftsmen abandon...*`},{day:4,title:"Market Analysis & Location Intelligence",date:"2026-03-03",image:"images/real-estate/day-4.jpg",audio:"audio/real-estate/day-4",sonnet:`**🪶 Sonnet IV: Market Analysis & Location Intelligence**

Where commerce flows and steady workers dwell,
The wisest investors plant their golden seed,
For brick and mortar serve the buyer well
Only when location answers every need.

Seek not the cheapest plot in distant lands,
But study where the growing tree takes root—
Where jobs abound and strong employment stands,
Where infrastructure bears its lasting fruit.

The bridge that spans, the road that newly winds,
The school bell's ring, the factory's honest smoke,
These signs reveal where fortune gently binds
Its blessing to the land that progress woke.

*For houses rise and fall with time's decree,*
*But prime locations hold prosperity.*`,standard:`🏠 Day 4: Market Analysis & Location Intelligence

**🧱 The Concept**
Market analysis evaluates the economic, demographic, and growth factors that drive property appreciation and rental demand in a specific location over time.

**❓ Why It Matters**
Location determines both your property's appreciation potential and rental stability — a great house in a declining area will struggle, while an average property in a growing market can thrive. Smart investors buy not just properties, but neighborhoods with strong fundamentals that support long-term wealth building. Markets with job growth, population increases, and infrastructure development create the rising tide that lifts all real estate boats.

**⚙️ How It Works**
Analyze employment diversity and major employers — avoid one-company towns that collapse if that employer leaves. Study population trends, median income growth, and crime statistics over 5-10 years. Examine infrastructure projects like new highways, airports, or transit systems that increase accessibility. Research planned developments, zoning changes, and local government fiscal health. For example, Austin's tech boom created massive appreciation because multiple factors aligned: job growth, population influx, limited land supply, and pro-business policies. Look for similar convergence of positive indicators. Track rental vacancy rates, average days on market, and price trends compared to surrounding areas.

**🎯 Real Estate Wisdom**
You make money when you buy, but you get rich when markets rise — choose locations where economic fundamentals create sustainable growth, not speculative bubbles.

**❓ Tomorrow's Question:**
*If market analysis helps you choose where to invest, how do you determine when to invest? What economic signals indicate whether you're buying at the top of a cycle or positioning for the next upswing?*`,parable:`The morning mist clung to the village rooftops as Dara found Hallam surveying the cobblestone square, his weathered eyes tracking the movements of merchants setting up their stalls.

"Tell me, child," Hallam said without preamble, "why do I own three shops here in the square, yet none in the hamlet beyond the ridge?"

Dara studied the bustling scene — the bakery with its morning queue, the blacksmith's forge already glowing, the steady stream of travelers from the main road. "Because people gather here?"

"Deeper," Hallam urged, gesturing toward the stone bridge that spanned the river. "That bridge brings trade from the eastern provinces. The mill wheel turns because the river runs swift here. The lord's manor sits on yonder hill, drawing servants and suppliers." He pointed to the cluster of new cottages near the forest edge. "Young families build there because the carpenter's guild — your father's guild — has steady work from all this growth."

They walked to the village's edge, where Hallam owned a modest cottage that commanded twice the rent of similar homes elsewhere. "See how the road widens here? The king plans a new garrison just beyond those trees. More soldiers means more demand for lodging, food, trade."

Dara nodded slowly. "So you study not just the property, but everything that makes people want to live and work nearby?"

"Precisely. A house is shelter, but a location is opportunity." Hallam smiled. "The widow's cottage in the dying hamlet beyond the ridge costs half as much, but it's worth nothing if no one wishes to live there. I buy where roots run deep and growth comes natural."

**Moral**: *The wise investor purchases not mere buildings, but the promise of places where commerce and community shall flourish.*

*Tomorrow, young Dara will learn why even the finest locations must be bought at the proper season...*`},{day:5,title:"Market Cycles & Economic Timing",date:"2026-03-03",image:"images/real-estate/day-5.jpg",audio:"audio/real-estate/day-5",sonnet:`**🪶 Sonnet V: Market Cycles & Economic Timing**

As seasons turn from spring to winter's chill,
So markets rise and fall in endless dance,
From recovery's hope to peak's fevered thrill,
Then contraction's fear breaks speculation's trance.

The wise investor reads these ancient signs—
When others flee, opportunity draws near,
While euphoria breeds expensive designs,
And panic sells what patience holds most dear.

In cycles deep as tide and lunar phase,
The patterns speak to those who learn to see:
That fortune favors not the crowd's mad craze,
But those who from emotion's bondage free.

*For markets crown the patient soul who knows*
*That winter's depths herald spring's sweetest rose.*`,standard:`🏠 Day 5: Market Cycles & Economic Timing

**🧱 The Concept**
Real estate markets move in predictable cycles of expansion, peak, contraction, and recovery, driven by interest rates, employment, supply constraints, and investor sentiment.

**❓ Why It Matters**
Timing your entry and exit points within market cycles can dramatically impact your returns — buying during recovery phases and holding through expansion maximizes wealth building potential. Understanding where you are in the cycle helps you avoid overpaying at peaks and recognize opportunities during downturns. Cycles repeat because human psychology and economic fundamentals create recurring patterns of optimism, euphoria, fear, and despair that drive price movements.

**⚙️ How It Works**
Recovery phases feature declining inventory, stabilizing prices, and returning buyer confidence after a downturn. Expansion brings rising prices, increasing construction, and easy credit as demand outpaces supply. Peak periods show bidding wars, speculative buying, and overbuilding as euphoria takes hold. Contraction involves rising inventory, price declines, and tightening credit as reality sets in. Monitor leading indicators: employment growth signals early recovery, construction permits peak before price peaks, and mortgage delinquencies rise before contractions. For example, savvy investors bought during 2011-2013's recovery phase when others feared another crash, then rode the expansion through 2020. Interest rate changes often trigger cycle shifts — rising rates cool expansion, falling rates fuel recovery.

**🎯 Real Estate Wisdom**
Markets reward patience and punish panic — buy when others are fearful, hold when others are greedy, and remember that cycles create millionaires who recognize patterns others miss.

**❓ Tomorrow's Question:**
*Once you've identified the right market and timing, how do you structure your purchase to maximize returns while minimizing risk? What role does other people's money play in amplifying your wealth-building potential?*`,parable:`The seasons turned, and Dara found herself walking the village square with old Hallam as merchants packed their stalls under autumn's fading light. "Master Hallam," she said, "I've learned to read the signs of a good location, but when do you know the right moment to act?"

Hallam paused beside the fountain, watching the ebb and flow of villagers. "Child, observe the marketplace. In spring, after harsh winters, vendors return tentatively — few stalls, cautious prices, grateful for any trade. This is recovery. Then comes summer's expansion — every corner filled, prices rising, confidence blooming like flowers. By harvest's end, we reach the peak — frenzied bidding for the best goods, new merchants arriving daily, thinking the plenty will last forever."

He gestured toward empty stalls where eager traders had competed just months before. "Then autumn's contraction — overstocked merchants, falling prices, desperation replacing greed. The wise merchant knows these seasons repeat endlessly, driven not by weather but by human nature itself."

Dara watched a lone merchant securing his shutters. "So when do you buy?"

"When others board their windows in fear," Hallam smiled, "for winter always yields to spring. I purchased half these properties during the great panic twenty years past, when sellers fled and buyers vanished. Those who recognized the season's turn earned fortunes, while those who sold at winter's depth lost their legacies."

**Moral:** Markets move in eternal cycles, rewarding those who read the seasons of human sentiment and economic reality.

**Tomorrow:** Dara will discover how the wealthy use other people's gold to multiply their own purchasing power.`},{day:6,title:"Leverage & Other People's Money",date:"2026-03-04",image:"images/real-estate/day-6.jpg",audio:"audio/real-estate/day-6",sonnet:"",standard:`🏠 Day 6: Leverage & Other People's Money

**🧱 The Concept**
Leverage allows you to control valuable real estate assets with a fraction of your own capital by borrowing against the property's value, amplifying both potential returns and risks.

**❓ Why It Matters**
Using **other people's money** (OPM) through mortgages lets you acquire multiple properties instead of one, multiplying your wealth-building capacity exponentially. A 20% down payment controls 100% of a property's appreciation and cash flow, creating returns of 15-25% annually on invested capital versus 3-5% if buying cash. Smart leverage transforms modest savings into substantial portfolios — $100,000 can control $500,000 in real estate rather than just one $100,000 property.

**⚙️ How It Works**
Mortgage leverage typically requires 20-25% down on investment properties, with the bank financing 75-80% based on the property's income potential and your creditworthiness. **Cash-on-cash returns** measure your annual cash flow against actual invested capital — if a $200,000 duplex generates $2,400 yearly profit after a $40,000 down payment, that's a 6% cash-on-cash return. Factor in **appreciation** and **principal paydown** from tenant payments, and total returns often exceed 20% annually. Conservative leverage ratios (70-80% loan-to-value) provide safety margins during market downturns, while aggressive leverage (90-95%) amplifies gains but increases foreclosure risk. For example, five leveraged properties appreciating 5% annually on $1 million total value generates $50,000 in equity growth, compared to $5,000 on one $100,000 cash purchase.

**🎯 Real Estate Wisdom**
Leverage is a double-edged sword that makes the wealthy wealthier and the careless broke — respect its power by maintaining adequate cash reserves and conservative debt ratios.

**❓ Tomorrow's Question:**
*If leverage amplifies your buying power, how do you systematically evaluate which properties deserve that borrowed capital? What metrics separate profitable investments from costly mistakes?*`,parable:`Dara stood before Hallam's oak desk, her carpenter's hands steady despite the magnitude of her request. "I want to buy the Miller's cottage," she declared. "But I only have saved one-fifth of its price."

Hallam's weathered eyes twinkled with approval. "Ah, young builder, you're learning the ancient art of **leverage** — using other people's coin to multiply your own power." He gestured toward the village beyond his window. "See those five houses I bought this decade? I used my own gold for but one, borrowing against each to buy the next."

He drew circles on parchment, each representing a property. "Your hundred silver pieces can purchase one cottage outright, earning you perhaps five pieces yearly. Or..." His quill traced connecting lines between the circles. "That same hundred can secure five cottages through the moneylender's craft, controlling five times the rent, five times the appreciation."

"But the risk?" Dara asked, remembering tales of merchants who borrowed beyond their means.

Hallam nodded gravely. "**Other people's money** is like fire — wield it wisely and it warms your hearth for generations. Abuse it, and it burns down everything you've built." He showed her his ledgers, where conservative ratios and careful calculations marked each investment. "I never borrow more than four-fifths of any property's worth, and I keep enough coin set aside to weather any storm."

As Dara studied the numbers, she saw how the moneylender's interest was paid by her tenants, while she captured all the property's growth. The magic of leverage began to unfold — her small stake commanding vast resources, multiplying her wealth like seed grain planted in fertile soil.

**Moral:** *Leverage transforms modest capital into empire-building power, but only for those who respect its double-edged nature.*

*Tomorrow, Hallam would teach her the art of measuring which properties deserved such borrowed gold — and which would squander it...*`},{day:7,title:"Property Analysis & Due Diligence",date:"2026-03-04",image:"images/real-estate/day-7.jpg",audio:"audio/real-estate/day-7",sonnet:`**🪶 Sonnet VII: Property Analysis & Due Diligence**

As carpenter must measure wood with care,
Before the saw blade makes its final mark,
So must the investor's eye seek to declare
What lies beneath each property's bright spark.

The gleaming paint may hide a failing roof,
The soaring rents mask neighborhoods in decline,
While modest homes with numbers offering proof
Reward the patient seeker line by line.

Study the bones, the market, and the flow
Of cash that turns from promise into gold,
For hasty choices breed financial woe,
While measured wisdom makes the cautious bold.

*In property as timber, truth runs deep—*
*The wise measure thrice before they leap.*`,standard:`🏠 Day 7: Property Analysis & Due Diligence

**🧱 The Concept**
Due diligence is the systematic evaluation process that transforms property hunting from gambling into calculated investment decisions through financial analysis, market research, and risk assessment.

**❓ Why It Matters**
Thorough **property analysis** prevents costly mistakes that can wipe out years of returns in a single bad purchase. Professional investors use standardized metrics like the **1% rule** (monthly rent should equal 1% of purchase price), **cap rates** (net operating income divided by property value), and **cash flow projections** to quickly filter opportunities. Without proper due diligence, even experienced investors fall victim to hidden repair costs, declining neighborhoods, or properties that look profitable on paper but drain cash monthly.

**⚙️ How It Works**
Start with **market analysis** — study comparable sales, rental rates, vacancy rates, and neighborhood trends using MLS data, rental websites, and local property managers. Calculate **net operating income** by subtracting all expenses (taxes, insurance, maintenance, vacancy allowance, property management) from gross rental income, then divide by purchase price for the **capitalization rate**. Inspect thoroughly for structural issues, deferred maintenance, and major system replacements (roof, HVAC, plumbing) that could cost $10,000-$50,000. Verify rental income potential through actual market rents, not seller projections — a $200,000 property renting for $1,800 monthly meets the 1% rule, while one renting for $1,200 falls short. Always factor in **holding costs** during renovations and initial vacancy periods, plus a 10-15% contingency for unexpected repairs.

**🎯 Real Estate Wisdom**
Measure twice, buy once — every hour spent analyzing properties saves months of regret and thousands in losses.

**❓ Tomorrow's Question:**
*Once you've identified a profitable property through analysis, how do you structure the purchase to maximize your returns while minimizing risk? What negotiation strategies and financing options can turn a good deal into a great one?*`,parable:`Dara had watched her father measure timber countless times — twice, sometimes thrice before making the first cut. "Why such care for a simple plank?" she once asked. "Because, daughter," he replied, "one wrong cut wastes the entire board."

Now, standing before Hallam's ledger-covered desk, she understood. The old landlord spread three property listings before her like her father might lay out planks. "Tell me, carpenter's daughter, which deserves our borrowed gold?"

The first gleamed with fresh paint and boasted high rents. "This one looks finest," Dara began, but Hallam's weathered finger tapped the numbers. "Look deeper. The roof is twenty years old, the furnace older still. Subtract replacement costs — $15,000 — and your profit vanishes like morning mist."

The second property sat in a declining quarter where three shops had recently shuttered. "The price seems fair," Dara offered. "Fair as fool's gold," Hallam chuckled. "Study the neighborhood as you would study wood grain. See how it splits? This area bleeds tenants faster than we can find them."

The third appeared modest, almost shabby, in a working district where children played in swept streets. Hallam's eyes brightened as his quill scratched calculations. "Monthly rent equals one percent of purchase price — good. Operating expenses total forty percent — acceptable. The bones are sound, the location stable." He set down his quill. "This one rewards the patient investor."

"But it looks so plain," Dara protested.

"Child, pretty flowers often hide shallow roots, while oak trees grow strong in simple soil. Your father's finest furniture comes from unremarkable logs he studied carefully before cutting."

**Moral:** *The wise investor, like the skilled carpenter, measures thrice before committing — for in property as in woodwork, one hasty decision can waste years of careful saving.*

*Tomorrow, discover how Hallam transforms this careful analysis into a masterful purchase negotiation...*`},{day:8,title:"Deal Structure & Financing Options",date:"2026-03-05",image:"images/real-estate/day-8.jpg",audio:"audio/real-estate/day-8",sonnet:`**🪶 Sonnet VIII: Deal Structure & Financing Options**

When purse strings tight and properties stand dear,
The clever buyer weaves a different thread—
Not gold alone, but terms that persevere
And seller's needs with investor's vision wed.

Let financing flow through channels unexplored:
Seller's bank, lease-purchase, subject-to,
Each pathway carved to fit what can't be ignored—
The deal that serves both parties, tried and true.

Negotiate beyond the simple price,
Seek credits, timing, contingencies wise,
Structure the terms with calculated splice
Of risk and reward beneath discerning eyes.

*For mastery lies not in coins you hold,*
*But crafting deals where both sides strike pure gold.*`,standard:`🏠 Day 8: Deal Structure & Financing Options

**🧱 The Concept**
Deal structuring combines negotiation tactics, financing strategies, and creative terms to optimize your returns while managing risk and preserving capital for future investments.

**❓ Why It Matters**
How you structure a deal often matters more than the purchase price — the right **financing strategy** can double your returns while the wrong one can turn profits into losses. Smart investors use **leverage** strategically, negotiate seller financing, and structure terms that reduce cash requirements while maintaining cash flow. A $200,000 property purchased with 25% down ($50,000) versus 5% down ($10,000) frees up $40,000 for additional deals, potentially multiplying your portfolio growth exponentially.

**⚙️ How It Works**
Explore multiple **financing options** beyond traditional mortgages: **seller financing** where the owner acts as bank, **lease-to-own agreements**, **subject-to** deals taking over existing payments, or **hard money loans** for fix-and-flip projects. Negotiate beyond price — request **seller credits** for repairs, extended closing periods for financing, or **rent-back agreements** where sellers stay as tenants. Structure **contingencies** that protect your investment: financing, inspection, appraisal, and rental income verification clauses that let you exit without penalty. Consider **portfolio lenders** who keep loans in-house rather than selling to government agencies, offering more flexible terms for multiple properties. Always calculate your **debt service coverage ratio** — net operating income should exceed mortgage payments by at least 1.2x to ensure positive cash flow even during minor vacancy periods.

**🎯 Real Estate Wisdom**
Creative deal structuring turns impossible purchases into profitable investments — master the art of making sellers say yes to terms that serve your wealth-building goals.

**❓ Tomorrow's Question:**
*You've structured the perfect deal and closed on your property — but now what? How do you transform a vacant building into a cash-flowing asset while avoiding the common mistakes that turn promising investments into management nightmares?*`,parable:`Dara stood before Hallam's oak desk, the property analysis spread between them like a battle plan. The numbers were favorable — a stone cottage on Millpond Lane that met every metric they'd discussed. But Hallam's weathered fingers drummed against the wood, his eyes distant.

"Numbers tell you what, young carpenter," he said finally. "But structuring tells you how." He pulled out a leather-bound ledger filled with decades of deal records. "See this entry from fifteen winters past? Young Willem wanted to sell his bakery building for three hundred silver pieces — more than I had liquid. Most would have walked away."

Dara leaned forward as Hallam traced the faded ink. "Instead, I offered him two hundred down and fifty silver yearly for three years, plus I'd maintain the ovens and roof. Willem needed immediate capital for his daughter's dowry, but also wanted steady income. I got the property with less cash and built goodwill with a future tenant."

He turned several pages, revealing deal after deal structured with creativity rather than brute capital. "Here — Merchant Thomas wanted to retire but feared losing his shop's income. I bought the building but leased him the ground floor for life at favorable terms. He got his retirement fund, I got the upper floors for rental income, and eventually the entire property."

Dara studied the elegant solutions, seeing how each addressed both parties' true needs rather than just stated prices. "You're not just buying buildings," she realized. "You're solving problems."

"Precisely," Hallam nodded. "Master carpenters choose their tools to fit the task — mortise chisel for joints, broad axe for beams. Investors choose their structure to fit the deal. Sometimes it's conventional financing, sometimes seller carry-back, sometimes lease options or partnership agreements."

He pulled out a current proposal. "The widow Ashford wants to sell her twin cottages but needs monthly income more than a lump sum. Standard buyers offer cash and walk away. I offer seventy percent now, thirty percent over five years at modest interest, plus I guarantee her first tenant's rent for two years. She gets security, I get ownership with minimal cash down, and both properties stay cash-positive from day one."

As evening shadows stretched across the ledger, Dara understood that true deal mastery lay not in having the most gold, but in crafting agreements where everyone prospered. The carpenter's daughter had learned to build with contracts as skillfully as her father built with wood.

**Moral:** *The master builder uses many tools, but the master investor uses many structures — each deal shaped by creativity, not just capital.*

*Tomorrow, Hallam would reveal the alchemy of transforming vacant shells into income-producing assets...*`}],Uv=[{day:1,title:"The Hook — Why Stories Grab You",date:"2026-03-01",image:"images/storytelling/day-1.jpg",sonnet:`**🪶 Sonnet I: The Unfinished Thread**

The bard began but stopped before the end—
A door left open, footsteps in the hall.
The crowd leaned in, each stranger now a friend,
United by the need to hear it all.

For what is left unsaid compels the ear
More fiercely than a thousand finished tales.
A question asked, a shadow drawing near,
A ship described but not yet past the gales.

The secret isn't beauty, wit, or art—
It's tension, pulled like string across a bow.
You hook the mind by opening the heart
To wonder: *what comes next? I have to know.*

*Begin not with the answer but the ache—*
*And they will follow for the story's sake.*`,standard:`**📖 Day 1: The Hook — Why Stories Grab You**

Before we study plot, character, or dialogue, we need to answer one question: **why do some stories grab you in the first sentence while others lose you immediately?**

🧱 **The Concept**
A hook is the opening of a story that creates an immediate need to know what happens next. It works by opening a gap — between what you know and what you want to know — that your brain is compelled to close.

❓ **Why It Matters**
You can write the most beautiful prose in the world, but if the first page doesn't hook the reader, they'll never see page two. This is true for novels, movies, emails, presentations, and even conversations. The hook is the most important sentence you'll ever write.

⚙️ **How It Works**
Your brain hates incomplete patterns. When someone says "I need to tell you something," you can't walk away — your mind demands the missing piece. Storytellers exploit this instinct.

Great hooks come in a few flavors:
- **The Question**: "The last time I saw my father, he was trying to kill me." (Wait — what? Why?)
- **The Disruption**: "It was a bright cold day in April, and the clocks were striking thirteen." (Thirteen? Something's wrong.)
- **The Promise**: "This is the story of how I died." (Okay, I'm in.)

All three do the same thing: they open a **curiosity gap**. Your brain registers an unanswered question, and it *needs* to close it. This is the same mechanism that makes cliffhangers work, that keeps you scrolling social media, that makes you stay up past midnight saying "one more chapter."

📖 **Definitions**
• **Hook**: The opening that compels the audience to keep going
• **Curiosity Gap**: The space between what you know and what you want to know
• **In Medias Res**: Starting "in the middle of things" — dropping the audience into action before explaining context
• **Cold Open**: Beginning with a dramatic scene before any setup or introduction

🎯 **Storytelling Wisdom**
Kurt Vonnegut said: "Start as close to the end as possible." Don't begin with weather, backstory, or world-building. Begin with the *moment something changes*. The context can come later — once they're hooked.

❓ **Tomorrow's Question:**
*The hook gets them in — but what keeps them there? What is "story structure" and why does virtually every great story follow the same invisible shape?*`,parable:`**🏰 The Parable of the Unfinished Tale**

Pip was a wandering bard — charming, enthusiastic, and absolutely terrible at his craft. Not because he lacked imagination. Pip had *too much* imagination. He'd start a story about a dragon, then veer into the dragon's breakfast habits, then explain the history of the mountain, then describe the weather, and by the time he got to the exciting part, his audience had wandered off to buy cheese.

---

One rainy evening, Pip arrived at a village inn and found it full. In the corner sat an ancient woman — Osha, the weaver — spinning thread on a wooden wheel. The innkeeper told Pip she hadn't spoken a normal sentence in forty years. She spoke only in stories.

"I'll perform tonight," Pip announced to the room. "A tale of the Dragon of Ashenmoor!"

He launched in: "Long ago, in a kingdom far to the north, where the mountains were tall and the valleys were green, and the rivers flowed with clear water from the snowcaps, there lived a peaceful people who farmed barley and—"

The room's attention was already drifting. A man yawned. A woman signaled for more ale.

---

Osha's spinning wheel stopped.

"The girl ran," she said. Two words. Every head turned.

Osha's eyes stayed on her thread. "She ran through the market with blood on her hands and her father's name on her lips. She ran because if she stopped, the thing behind her would catch her. And it was getting closer."

The room was silent. The man who'd been yawning was leaning forward. The ale woman's hand was frozen mid-wave.

Osha said nothing more. She resumed spinning.

"Wait—" said the innkeeper. "What was chasing her? What happened to her father? You can't just—"

Osha smiled. The tiniest smile.

---

Pip stared. In six seconds, the old woman had done what he couldn't do in six minutes: she made every person in the room *need to know what happened next*.

After the crowd finally dispersed (after much pleading, Osha finished the tale in her own time), Pip approached her wheel.

"How?" he asked. "How did you do that?"

Osha held up a piece of thread. "What happens when I cut a thread in the middle?"

"It... hangs there. Unfinished."

"And what does your hand want to do?"

"Grab the other end. Tie it. Complete it."

Osha nodded. "A story starts when you open a thread the listener's mind *must* close. Not with a place. Not with a history. With an *ache*. A question. Something incomplete."

She snipped the thread on her wheel. The loose end dangled. Pip's fingers twitched to grab it.

"See?" Osha whispered. "You can't help yourself. Neither can they."

---

**🌾 The Moral**

A story doesn't begin when the teller starts talking. It begins when the listener *needs to know what happens next*. Open a gap — a question, a mystery, a thread left dangling — and the audience will follow you anywhere to close it.

> *"The bard who begins with answers fills the room with silence. The bard who begins with questions fills it with leaning bodies."*

❓ *Tomorrow's tale: Pip can hook them now — but how does he keep them? Osha teaches him the invisible shape that every great story follows, whether the teller knows it or not.*`},{day:2,title:"The Three-Act Journey — Why Stories Follow the Same Shape",date:"2026-03-01",image:"images/storytelling/day-2.jpg",sonnet:`**🪶 Sonnet II: The Three-Act Journey**

Behold how every tale must find its course,
Like rivers carved by time through mountain stone:
First gentle springs that gather growing force,
Then rushing rapids, fierce and fast alone.

Act One presents the world we think we know,
Until some incident breaks peaceful sleep.
Act Two brings trials that make the hero grow,
Through darkest valleys, treacherous and steep.

The middle twist redirects the flowing stream,
While crisis tests what souls are truly made.
But Act Three crowns the long-contested dream,
Where all the threading tensions are repaid.

*For stories mirror life's eternal dance:*
*We setup, struggle, then find deliverance.*`,standard:`📖 Day 2: The Three-Act Journey — Why Stories Follow the Same Shape

Yesterday we learned that hooks create curiosity gaps — unanswered questions that compel us to keep reading. The answer to today's question: **story structure** is the invisible architecture that carries readers from hook to resolution, and it's based on how our brains process change.

🧱 **The Concept**
Story structure is the underlying framework that organizes events in a narrative. Most successful stories follow a three-act pattern: Setup, Confrontation, Resolution — mirroring how we naturally process challenges in real life.

❓ **Why It Matters**
Without structure, even the most interesting events become a confusing jumble. Structure creates expectation and satisfaction — your audience unconsciously knows when something should happen, and great storytellers either fulfill or cleverly subvert these expectations. A well-structured story feels inevitable in hindsight, yet surprising in the moment.

⚙️ **How It Works**
**Act I (Setup)** introduces the world, characters, and the **inciting incident** — the event that kicks everything into motion. This usually takes about 25% of your story. **Act II (Confrontation)** is where the protagonist faces escalating obstacles, culminating in a **midpoint** twist and a **crisis** — their lowest moment. This is your story's engine room, roughly 50% of the narrative. **Act III (Resolution)** begins with the **climax** — the final confrontation — followed by the **denouement** that shows the new normal.

Think of *Star Wars*: Act I shows Luke's ordinary world until he finds Leia's message (inciting incident). Act II follows his journey, training, and the Death Star rescue, ending with Obi-Wan's death (crisis). Act III is the Death Star attack and victory (climax and resolution). The structure feels natural because it mirrors how we face real challenges: recognition, struggle, resolution.

📖 **Definitions**
• **Three-Act Structure**: Setup, Confrontation, Resolution framework
• **Inciting Incident**: The event that launches the main story
• **Midpoint**: Major plot twist or revelation at the story's center
• **Crisis**: The protagonist's lowest point, often called "the dark night of the soul"
• **Climax**: The final confrontation or decisive moment
• **Denouement**: The falling action that shows the story's aftermath

🎯 **Storytelling Wisdom**
Structure isn't a cage — it's a river. It provides the current that carries your story forward. Master the three-act flow, then you can play with rapids, eddies, and unexpected turns.

❓ **Tomorrow's Question:**
*Structure gives your story a spine — but what gives it a heartbeat? How do you create characters that feel more real than your neighbors?*`,parable:`Pip wandered into the mountain village as sunset painted the peaks gold, his half-finished tales scattered like autumn leaves in his wake. The villagers had learned to avoid the young bard — his stories began with such promise but meandered into confusion, leaving listeners frustrated and unfulfilled.

At the village's heart stood an ancient loom, and beside it sat Osha, her fingers dancing through threads of silver and gold. Her hair was white as winter, her eyes deep as mountain pools.

"Another tale abandoned on the road?" she asked without looking up.

Pip slumped beside the loom. "I don't understand. I have such wonderful ideas — a princess who speaks to storms, a thief who steals memories, a kingdom built in the clouds. But when I tell them..."

"They collapse like houses built without foundation," Osha finished. Her shuttle moved steadily through the warp. "Watch."

She began a new section, first laying down strong horizontal threads — the foundation. Then came the rising pattern, colors interweaving in complex designs that seemed to dance. Finally, she bound it all together with threads that brought the pattern to its conclusion.

"Every weaving has three parts," she said. "The foundation that holds all else. The rising, where the true pattern emerges through struggle between threads. The binding, where all tensions resolve into wholeness."

Pip studied the cloth. "But how does this help my stories?"

Osha's ancient fingers never paused. "Your princess who speaks to storms — what change sets her journey in motion? Your thief of memories — what obstacles must he overcome? Your cloud kingdom — how does it all conclude? Foundation, rising, binding. Setup, struggle, resolution. This is the shape of all things that grow."

As understanding dawned in Pip's eyes, Osha smiled. "Tomorrow, young bard, I'll show you what transforms mere events into living souls that breathe upon the page."

**Moral:** *Every great story follows the ancient pattern of all growth — beginning, struggle, and transformation. Master this rhythm, and your tales will flow like rivers finding the sea.*`},{day:3,title:"Character Arc — The Heart That Beats Through Every Scene",date:"2026-03-02",image:"images/storytelling/day-3.jpg",audio:"audio/storytelling/day-3",sonnet:`**🪶 Sonnet III: Character Arc**

Within each soul there lies a hidden wound,
A broken place where fear has made its home,
That shapes the way their wanting heart is bound
And drives them forth through story's twisted dome.
The surface want may glitter bright as gold,
Yet deeper needs lie buried in the dark,
Where transformation's truest tale is told
Through pressure points that light the sacred spark.
Each choice becomes a crossroads in the night,
Where old wounds battle new-born courage's call,
And characters must choose 'tween wrong and right,
To rise transformed or face their destined fall.
*For stories live when hearts are forced to grow,*
*From who they were to who they've yet to know.*`,standard:`📖 Day 3: Character Arc — The Heart That Beats Through Every Scene

Characters feel real when they **want something desperately** and **change through pursuing it**. The heartbeat of story comes from watching someone transform under pressure — their desires, fears, and contradictions creating the pulse that keeps us reading. This is where character arc becomes the soul of narrative.

🧱 **The Concept**
A character arc is the internal transformation a character undergoes throughout a story — the journey from who they are to who they become through facing challenges and making choices.

❓ **Why It Matters**
Without character change, you have events but not story. Readers don't connect with plot points — they connect with people struggling to grow, overcome flaws, or resist corruption. A powerful character arc turns a sequence of events into an emotional journey that resonates long after the final page. We remember Ebenezer Scrooge not for the ghosts he met, but for the man he chose to become.

⚙️ **How It Works**
Every compelling character arc begins with a **wound** — something broken, missing, or feared that shapes their behavior. This wound creates a **want** (what they think they need) and a deeper **need** (what they actually need to heal). The story forces them through a series of **pressure points** where they must choose between their old patterns and growth. In *The Devil Wears Prada*, Andy wants professional success but needs to discover her authentic self. Each challenge — from choosing the right shoes to betraying Emily — forces her closer to that realization. The arc completes when the character either transforms (positive arc), corrupts (negative arc), or tragically fails to change (flat arc).

📖 **Definitions**
• **Character Arc**: The internal transformation journey from beginning to end
• **Wound**: The formative experience or flaw that drives character behavior
• **Want vs. Need**: Surface desire versus deeper psychological requirement
• **Pressure Points**: Story moments that force character choices and growth
• **Positive Arc**: Character overcomes flaw and transforms for the better
• **Negative Arc**: Character succumbs to flaw and falls into corruption
• **Flat Arc**: Character remains unchanged but influences others to change

🎯 **Storytelling Wisdom**
Great characters aren't perfect — they're perfectly flawed. Give your protagonist a wound that hurts to touch, then keep pressing on it until they're forced to heal or break.

❓ **Tomorrow's Question:**
*If character arc is the heart, then what creates the electricity that sparks between characters? What makes dialogue crackle with life instead of lying flat on the page?*`,parable:`Pip wandered into the village square, his lute case bouncing against his hip. For three days now, he'd been telling the same story — a tale of a merchant who collected beautiful things but never found joy. Each time he reached the merchant's transformation, his voice would falter and the story would simply... stop.

"The merchant gazed upon his treasures and felt..." Pip would begin, then trail off, leaving his audience hanging. Children would throw pebbles. Adults would drift away.

Frustrated, Pip found himself before Osha's cottage. The ancient weaver sat at her loom, her gnarled fingers dancing through threads of silver and gold.

"Storyteller," she said without looking up, "you speak of a merchant who collects but cannot feel. Tell me — what broke this man's heart so deeply that he buried it beneath gold?"

"I... I never thought about that," Pip admitted.

Osha's shuttle paused. "A thread with no tension cannot weave. A character with no wound cannot transform." She resumed her work, and Pip noticed how each thread pulled against the others, creating strength through struggle. "Your merchant — was he abandoned as a child? Did love betray him? What fear drives his endless collecting?"

Pip's eyes widened. "He was... he was left at an orphanage. His parents promised to return for him but never did. So he collects things because things can't abandon him."

"Ah," Osha smiled. "And what must he learn to heal?"

"That love isn't possession. That holding loosely allows joy to flow freely."

That evening, Pip told his story again. This time, when he reached the merchant's moment of realization — when the man chose to give away his treasures to bring joy to others — the words flowed like a river finding the sea. The audience wept. They cheered. They remembered.

**Moral:** A character without a wound is like a thread without tension — it cannot bear the weight of story. True transformation comes when we press upon what hurts until healing becomes the only choice.

*Tomorrow, Pip discovers that knowing his characters deeply is only half the battle — he must learn the secret music that makes their conversations sing...*`},{day:4,title:"Dialogue — The Lightning Between Characters",date:"2026-03-03",image:"images/storytelling/day-4.jpg",audio:"audio/storytelling/day-4",sonnet:`**🪶 Sonnet IV: The Lightning Between Characters**

When characters speak, let not mere words flow,
But lightning crackling between desperate hearts,
Where surface meanings dance while truths below
Reveal the souls that conversation starts.

Each voice must sing its own distinctive song—
The scholar's measured thought, the child's bright gleam,
The warrior's sharp commands that right the wrong,
The lover's whispered hope within the dream.

For dialogue serves not just plot's design,
But character's deep wound and hidden need,
Where conflict sparks and opposing wants align
To make the reader's hungry spirit feed.

*When words become the weapons hearts employ,*
*Then conversation turns to living joy.*`,standard:`📖 Day 4: Dialogue — The Lightning Between Characters

**The Concept**
Dialogue is never just conversation — it's **conflict in verbal form**, where characters clash, reveal, and transform through the electricity of opposing desires.

❓ **Why It Matters**
Bad dialogue sounds like exposition wearing a disguise. Great dialogue crackles because every line serves multiple masters — advancing plot, revealing character, building tension, and creating subtext. When two characters speak, they're not just exchanging information; they're fencing with words, each trying to get what they want while protecting what they fear to lose. We remember "Frankly, my dear, I don't give a damn" not because it's clever wordplay, but because it captures Rhett's complete emotional transformation in eight devastating words.

⚙️ **How It Works**
Powerful dialogue operates on **surface** (what's said) and **subtext** (what's really meant). Characters rarely say exactly what they mean — they dodge, deflect, attack, and seduce. Each character must have a distinct **voice** shaped by background, education, emotional state, and current agenda. In *Casablanca*, when Rick says "Here's looking at you, kid," the surface is romantic banter, but the subtext carries his entire relationship with Ilsa — protective, possessive, and heartbroken. Great dialogue also uses **conflict** — characters want different things and use words as weapons. Even love scenes need tension; even arguments need moments of connection. The rhythm matters too — **pacing** through sentence length, interruptions, and silence creates the music beneath the words.

🎯 **Storytelling Wisdom**
Characters should talk like people but better than people — more focused, more revealing, more purposeful. Every line should either advance the story or deepen our understanding of who's speaking.

❓ **Tomorrow's Question:**
*If dialogue creates electricity between characters, what controls the voltage? How do we orchestrate the rhythm and flow of scenes so readers feel breathless during action and contemplative during quiet moments?*`,parable:`Pip found himself in Osha's dwelling at twilight, watching her weave by candlelight. Her shuttle moved with ancient precision while she spoke without looking up.

"There was once a young merchant," Osha began, her voice threading through the room like silk, "who thought words were coins to be spent wisely. But his customer, a clever widow, knew words were swords to be wielded skillfully."

"What did they talk about?" Pip asked, forgetting his own stories for once.

"Grain prices," Osha replied, and Pip's face fell. "But listen closer, wandering one. 'Your wheat looks tired,' said the widow. 'Like my heart,' replied the merchant. 'Hearts can be renewed,' she smiled, 'for the right price.' They spoke of grain, but traded in loneliness, hope, and the possibility of love."

Pip leaned forward. "So they weren't really talking about wheat at all."

"The surface carries the cargo, but the depths hold the treasure," Osha murmured. "Watch how I weave — each thread touches others, creates patterns within patterns. Dialogue is the same. One character seeks, another guards. One attacks with honey, another defends with thorns. The words dance, but the hearts duel."

"But how do I make each character sound different?"

Osha's shuttle paused. "A blacksmith speaks in hammer-blows, short and strong. A philosopher winds his thoughts like ivy around trees. A child's words bubble like stream water. Let their souls shape their speech, and their speech reveal their souls."

**Moral**: True dialogue is warfare disguised as conversation, where characters fight for their desires with weapons forged from their deepest selves.

*Tomorrow, Osha will teach Pip about the invisible conductor who orchestrates when hearts race and when they rest...*`},{day:5,title:"Pacing — The Heartbeat of Story",date:"2026-03-03",image:"images/storytelling/day-5.jpg",audio:"audio/storytelling/day-5",sonnet:`**🪶 Sonnet V: The Heartbeat of Story**

Like drummers who know when to quicken the beat,
The storyteller weaves with time itself,
Now rushing forward with scenes incomplete,
Now pausing soft to place upon the shelf

Some revelation that the heart needs space
To comprehend before the next wave hits.
The master knows that rhythm sets the pace—
That silence between words as loudly sits

As thunder after lightning's brilliant flash.
Too fast, and readers drown in breathless noise;
Too slow, and attention turns to ash,
The story losing all its native poise.

*For pacing mirrors life's own ebb and flow—*
*The pulse that makes a story breathe and grow.*`,standard:`📖 Day 5: Pacing — The Heartbeat of Story

**The Concept**
Pacing is the **rhythm of revelation** — controlling when information flows, when tension builds, and when readers need to breathe.

❓ **Why It Matters**
Pacing isn't about speed; it's about **emotional orchestration**. A thriller that never slows down becomes numbing noise. A literary novel that never quickens loses its pulse. Great stories mirror the human heartbeat — accelerating during danger, slowing during reflection, creating a rhythm that keeps readers physiologically engaged. Hitchcock understood this: he'd build excruciating tension in a three-minute bomb scene, then release it with a single cut. The relief becomes part of the pleasure.

⚙️ **How It Works**
Pacing operates through **sentence structure** — short, punchy sentences accelerate action while long, flowing sentences encourage contemplation. **Scene breaks** control breathing space, letting readers process revelations before the next wave hits. **Information timing** determines impact — revealing a character's secret too early deflates drama, too late frustrates readers. In *The Godfather*, Coppola varies pace masterfully: the wedding's leisurely warmth makes the horse head's sudden horror more shocking. **Tension and release** create addictive rhythms — chase scenes followed by quiet character moments, explosive arguments followed by tender reconciliations. Even **dialogue pacing** matters — rapid-fire exchanges during conflict, thoughtful pauses during emotional breakthroughs.

🎯 **Storytelling Wisdom**
Pacing is invisible when done right — readers should feel the story's rhythm in their bones without noticing the technique. Vary your tempo like a jazz musician varies rhythm, always in service of the emotional journey.

❓ **Tomorrow's Question:**
*We've explored character, structure, dialogue, and pacing — but what makes some stories linger in memory for decades while others vanish overnight? What transforms a well-crafted tale into an unforgettable experience that changes how we see the world?*`,parable:`Pip found Osha at her loom again, but this time her shuttle moved in an erratic dance — sometimes racing across the warp threads like lightning, sometimes pausing so long he wondered if she'd fallen asleep.

"Your weaving seems... confused today," Pip ventured, still smarting from yesterday's lesson about dialogue. His latest story attempt had characters talking past each other beautifully, but somehow the whole thing felt flat.

"Confused?" Osha's fingers never stopped their work. "Watch closer, bard. See how the tight weave here"—the shuttle flew rapidly—"makes the loose weave there sing with space? A tapestry of constant density would bore the eye to tears."

Pip watched the rhythm emerge: tight clusters of thread creating intensity, then flowing sections of lighter weave that seemed to breathe. "It's like... music made visible."

"Now you begin to understand," Osha murmured. "Once, a young weaver came to me, frantic because his tapestries felt wrong. Every section was perfectly crafted, every thread precisely placed, but viewers walked away unmoved. 'What am I missing?' he pleaded. I had him watch a master drummer for three days."

The shuttle paused completely, then resumed with deliberate slowness.

"On the third day, he understood. The drummer didn't just keep time — she played with time. Accelerating heartbeats during the hunt, slowing to match rainfall during sorrow. The silence between beats was as important as the beats themselves. The young weaver returned to his loom and began varying his density, his tension, his rhythm. His next tapestry made grown warriors weep."

Pip felt something click. "My stories... I've been weaving them all the same tightness."

"Precisely. Rush through emotional revelations and they have no weight. Linger too long on action and it loses its power. But vary the rhythm — quick dialogue punctuated by slow, introspective moments; sudden revelations followed by quiet processing — and you create something that resonates with the human heartbeat itself."

As if to demonstrate, Osha's shuttle suddenly flew across the loom in rapid strokes, then slowed to an almost meditative pace. The pattern that emerged seemed to pulse with its own life.

**Moral:** The master storyteller, like the master weaver, knows that rhythm creates meaning — varying the pace of revelation to match the natural cadence of human emotion.

Tomorrow, Pip would discover that even perfect technique means nothing without the final, mysterious element that transforms craft into magic.`},{day:6,title:"Theme — The Soul Beneath the Surface",date:"2026-03-04",image:"images/storytelling/day-6.jpg",audio:"audio/storytelling/day-6",sonnet:"",standard:`📖 Day 6: Theme — The Soul Beneath the Surface

Stories that endure across generations possess something beyond technical mastery: they carry **universal themes** that speak to the deepest parts of human experience. While plot entertains and character engages, theme transforms — it's the invisible force that makes readers close a book feeling changed, carrying its wisdom into their own lives.

🧱 **The Concept**
Theme is the **underlying meaning** that emerges from story events — not a moral tacked on, but the deeper truth that reveals itself through character choices and consequences.

❓ **Why It Matters**
Theme elevates entertainment into art by connecting personal stories to **universal human truths**. Without theme, even the most exciting plot becomes forgettable because it fails to resonate beyond its immediate events. Great themes don't preach — they illuminate. *To Kill a Mockingbird* doesn't lecture about racism; it shows how prejudice destroys innocence and community. The theme emerges naturally from Scout's journey, making readers examine their own moral courage.

⚙️ **How It Works**
Theme develops through **symbolic resonance** — objects, settings, and actions that carry deeper meaning beyond their literal function. In *The Great Gatsby*, the green light isn't just a beacon; it embodies unreachable dreams. **Character arcs** reveal theme through transformation — how characters change (or fail to change) illuminates what the story believes about human nature. **Conflict patterns** expose thematic tensions — the repeated struggles between love and duty, individual and society, tradition and progress. **Image systems** reinforce themes through recurring motifs — water imagery suggesting rebirth, darkness representing ignorance, mirrors reflecting self-knowledge. The most powerful themes operate on **multiple levels** simultaneously — *The Lion King* works as both a coming-of-age story and a meditation on responsibility and legacy.

🎯 **Storytelling Wisdom**
Theme should feel inevitable yet surprising — readers should sense deeper meaning without being beaten over the head with it. Let theme emerge from story naturally, like fragrance from a flower.

❓ **Tomorrow's Question:**
*If theme gives stories their soul, what gives them their voice? How do storytellers create that distinctive narrative presence that makes every sentence feel uniquely theirs — the invisible personality that guides readers through imaginary worlds?*`,parable:`Pip found Osha weaving at her loom, her fingers dancing between threads of gold and shadow. "Master," he began, frustration heavy in his voice, "I can craft exciting scenes, develop compelling characters, even control my pacing now. Yet my stories fade from memory like morning mist. What am I missing?"

Osha continued her weaving, speaking without looking up. "A young merchant once possessed the finest silk, the most intricate patterns, the most vibrant dyes. His tapestries were technical marvels that drew crowds. But visitors would admire and forget, purchasing instead the simple wool hanging beside his — rough, plain, yet somehow more beautiful."

"Why?" Pip leaned closer, watching her shuttle carry threads between the warps.

"The master weaver who made the wool piece had woven her own story into every fiber — her love for her daughter, her fear of winter, her hope for spring's return. The silk merchant had woven only technique. Beauty without meaning is spectacle; meaning without beauty is sermon. But when both unite..." She paused, pulling tight a golden thread. "The tapestry becomes a window into the weaver's soul, and through it, viewers glimpse their own."

Pip stared at the emerging pattern in her loom — simple on the surface, yet somehow containing depths he couldn't quite grasp. "So theme is...?"

"Theme is the invisible thread that binds all others together," Osha smiled. "Not added as decoration, but woven throughout — the beating heart that gives the whole creation life."

**Moral:** Stories that endure carry universal truths woven naturally into their fabric — not as preaching, but as illumination.

*Tomorrow, Pip discovers the mysterious force that gives every story its unique voice...*`},{day:7,title:"Voice — The Invisible Narrator's Personality",date:"2026-03-04",image:"images/storytelling/day-7.jpg",audio:"audio/storytelling/day-7",sonnet:`**🪶 Sonnet VII: Voice — The Invisible Narrator's Personality**

Beyond the plot's bright threads and character's face,
A whisper moves through every crafted line—
Not what is told, but how words find their place,
The storyteller's soul made voice divine.

Each sentence bears the narrator's beating heart,
While rhythm speaks of inner thoughts that flow,
And word choice paints the teller's truest art—
The personality that readers come to know.

Like Hemingway's spare truth or Dickens' song,
Each voice creates its own distinctive spell,
A presence felt, though narrator stays withdrawn,
The unseen guide through every tale they tell.

*For stories live not in their events alone,*
*But in the voice that makes each word its own.*`,standard:`📖 Day 7: Voice — The Invisible Narrator's Personality

That invisible personality is **narrative voice** — the distinctive perspective and tone that shapes every word choice, sentence rhythm, and emotional coloring in a story. It's not just who tells the story, but *how* they tell it, creating an intimate relationship between reader and narrator that transcends the written page.

🧱 **The Concept**
Narrative voice is the **unique personality** that emerges through language choices, creating a distinctive storytelling presence that feels as real as a person sitting beside you.

❓ **Why It Matters**
Voice transforms mechanical storytelling into intimate communication, making readers feel they're hearing from a trusted friend rather than reading words on a page. Without distinctive voice, even brilliant plots feel sterile because there's no human connection guiding the experience. Hemingway's spare, understated voice makes readers lean in to catch what's unsaid, while Dickens' exuberant, detailed voice sweeps readers into a rich sensory world.

⚙️ **How It Works**
Voice emerges through **sentence structure** — short, punchy sentences create urgency while flowing, complex ones suggest contemplation. **Word choice** reveals personality — formal vocabulary suggests education and distance, while colloquial language creates intimacy and immediacy. **Emotional filtering** shows how the narrator processes events — cynically, optimistically, fearfully — coloring every description. **Cultural perspective** infuses voice with specific worldviews and assumptions. Consider how Scout's child-like voice in *To Kill a Mockingbird* makes adult readers see familiar prejudices with fresh horror, or how the unreliable narrator in *The Catcher in the Rye* creates intimacy through vulnerability and contradiction. **Rhythm and pacing** in sentences mirror the narrator's internal state — frantic thoughts create choppy prose, while peaceful moments flow in longer, musical phrases.

🎯 **Storytelling Wisdom**
Voice isn't just style — it's the soul of storytelling made audible. Authentic voice emerges when writers stop trying to sound impressive and start being genuinely human on the page.

❓ **Tomorrow's Question:**
*If voice creates the storyteller's personality, what creates the story's heartbeat? How do master storytellers control the invisible force that makes readers race through some passages while lingering over others — the temporal magic that makes minutes feel like hours or hours vanish like seconds?*`,parable:`Pip had been wandering the forest paths for three days, his unfinished tales scattered behind him like autumn leaves, when he heard the rhythmic *thock-thock-thock* of Osha's loom echoing through the trees. Following the sound, he discovered the ancient weaver at her work, her fingers dancing across threads that seemed to shimmer with their own light.

"Wise Osha," Pip began, his voice heavy with frustration, "I know what stories need — plot, character, theme — yet still my tales fall flat. They're like portraits painted by a master's hand but somehow... lifeless."

Osha's hands never paused in their weaving, but her voice drifted up like smoke from a distant fire: "Once, two painters stood before the same sunset. The first painted every cloud, every ray of light, every subtle gradation of color with perfect technique. The second painted with cruder strokes, yet when people looked upon his work, they wept. What made the difference, young bard?"

Pip frowned, watching the shuttle fly between the warp threads. "The second painter... felt something?"

"The second painter *spoke*," Osha corrected, her voice taking on a different cadence — warmer, more intimate. "His brush carried not just pigment, but personality. Every stroke whispered: 'Here is how *I* see this beauty, here is how *I* feel this moment.' The viewer heard not just a description of sunset, but the painter's very soul made visible."

As she spoke, Pip noticed something extraordinary happening to the fabric beneath her hands. The threads weren't just forming patterns — they seemed to pulse with different rhythms, some tight and urgent, others flowing like water, each section distinctly *voiced* in its own way.

"Stories, too, must speak with a voice," Osha continued, her tone shifting again, becoming more playful, then more serious, demonstrating as she taught. "Not just the voice of characters, but the voice of the teller — the invisible presence that guides each word, shapes each sentence, colors each emotion. When you find your true voice, young bard, your stories will no longer be mere arrangements of events. They will become conversations between your soul and the souls of your listeners."

Pip listened to the music in her words — sometimes staccato like rainfall, sometimes flowing like rivers, always unmistakably *hers* — and began to understand.

**Moral:** *The difference between forgettable stories and unforgettable ones lies not in what is told, but in the distinctive voice that tells it.*

*Tomorrow, Pip will discover what gives stories their temporal magic — the invisible force that controls time itself within narrative...*`},{day:8,title:"Pacing — The Story's Heartbeat",date:"2026-03-05",image:"images/storytelling/day-8.jpg",audio:"audio/storytelling/day-8",sonnet:`**🪶 Sonnet VIII: The Story's Heartbeat**

Like music's tempo sets the dancer's feet,
So pacing guides the reader's racing heart,
Now swift through action's rush, now slow and sweet
Through tender moments where emotions start.

The master knows when time should crawl like stone,
When lovers' eyes first meet in destined gaze,
And when to make the urgent moments thrown
Like lightning through the dark and shortened days.

Short sentences like drumbeats drive us on,
While flowing phrases let our spirits rest,
As chapter breaks mark night's approach to dawn,
Each pause and rush precisely planned and blessed.

*For rhythm is the story's truest art —
To make time's passage mirror human heart.*`,standard:`📖 Day 8: Pacing — The Story's Heartbeat

That temporal magic is **pacing** — the deliberate manipulation of story rhythm that controls time's flow in readers' minds, speeding through mundane moments while stretching crucial scenes until every heartbeat feels eternal. Master storytellers conduct this invisible orchestra of time, making readers breathless during action sequences and contemplative during quiet revelations.

🧱 **The Concept**
Pacing is the **rhythmic control** of narrative time, determining how quickly or slowly events unfold and how long readers spend in each story moment.

❓ **Why It Matters**
Poor pacing kills engagement faster than any other storytelling flaw — readers abandon stories that drag through boring exposition or rush through climactic moments without letting them breathe. Effective pacing creates emotional investment by matching story speed to dramatic importance, ensuring readers feel maximum impact when it matters most. Think of thriller writers who build unbearable tension through increasingly short chapters, or literary authors who slow time to a crawl during profound character revelations.

⚙️ **How It Works**
**Sentence length** controls immediate rhythm — short, staccato sentences accelerate action while longer, flowing sentences slow contemplation. **Scene selection** determines what gets screen time — important moments expand while transitions compress into single sentences. **Dialogue versus description** affects tempo because conversation moves faster than internal reflection or detailed setting. **Chapter breaks** create natural pause points that either build suspense or provide breathing room. **Information density** influences speed — sparse, essential details race forward while rich, layered descriptions invite lingering. Consider how *The Hunger Games* uses rapid-fire short sentences during arena combat but expands time during Katniss's strategic thinking, or how *Pride and Prejudice* quickens during witty dialogue but slows during Elizabeth's internal realizations about Darcy.

🎯 **Storytelling Wisdom**
Pacing isn't about speed — it's about matching rhythm to meaning. The most powerful moments often happen when time stops completely, allowing readers to feel the full weight of what's happening.

❓ **Tomorrow's Question:**
*If pacing controls when readers breathe, what forces them to hold their breath entirely? What invisible thread pulls readers forward even when they know they should put the book down and sleep?*`,parable:`Pip sat by Osha's loom, watching her weathered hands work the shuttle with maddening inconsistency — sometimes flying across the warp with urgent precision, other times pausing so long he thought she'd fallen asleep.

"Your stories race and crawl like a drunken horse," he complained. "No wonder audiences drift away before I reach the end."

Osha smiled, her shuttle suddenly accelerating through a complex pattern. "Child, watch the cloth, not the weaving. See how tight threads create tension? How loose ones let the eye rest?"

Pip leaned closer, noticing how the fabric's rhythm created visual music — dense, intricate sections that demanded attention alternating with simple, flowing passages that felt like breathing.

"A master weaver," Osha continued, her hands slowing to caress a particularly beautiful section, "knows when to rush and when to linger. When lovers meet, time stops. When swords clash, moments explode like sparks." Her shuttle paused completely. "But if everything moves at the same speed..."

She demonstrated, weaving with mechanical consistency. The resulting fabric looked flat, lifeless — technically perfect but utterly boring.

"Your audiences leave because you fear the pause," Osha whispered. "You race through kisses and dawdle through battles. You've forgotten that time itself is your instrument."

Pip watched her resume weaving, the shuttle now dancing between urgent and gentle, creating a cloth that seemed to pulse with its own heartbeat.

**Moral:** *The master storyteller conducts time itself, knowing when to make moments eternal and when to let them fly.*

*Tomorrow, Pip will discover what invisible force makes audiences lean forward, unable to look away...*`}],Vv=[{day:1,title:"Bids for Connection — The Smallest Unit of Love",date:"2026-03-01",image:"images/building-relationships/day-1.jpg",sonnet:`**🪶 Sonnet I: The Turning Toward**

She said, "Look at that bird," and nothing more—
A whisper tossed like bread upon the lake.
It was not grand, nor urgent to the core,
Just small enough for carelessness to break.

He might have scrolled his page and missed the call,
A tiny bid dissolved in evening light.
But something made him look — and that was all—
"I see it too. The red one? What a sight."

In that small turning, continents were bridged,
A thousand tiny yeses built the road.
For love is not a mountain to be ridged
But pebbles laid beneath a shared abode.

*The grandest love is built from smallest things—*
*Each "I see you" a thread the whole heart strings.*`,standard:`**💕 Day 1: Bids for Connection — The Smallest Unit of Love**

Before we talk about communication styles, love languages, or conflict resolution, we need to understand the single most important discovery in relationship science: **bids for connection.**

🧱 **The Concept**
A bid is any attempt — verbal, physical, or emotional — by one partner to connect with the other. "Look at that sunset." "How was your day?" A touch on the shoulder. A sigh. The other partner can "turn toward" (acknowledge), "turn away" (ignore), or "turn against" (respond with hostility).

❓ **Why It Matters**
Dr. John Gottman studied thousands of couples over 40 years and found one metric that predicts relationship success with over 90% accuracy: **the ratio of turning toward vs. turning away from bids.** Couples who stayed happy turned toward each other's bids 86% of the time. Couples who divorced? Only 33%. Not the big gestures — the tiny, forgettable, everyday moments.

⚙️ **How It Works**
Imagine your partner is reading a book and says, "Huh, it says here that octopuses have three hearts." This isn't a profound statement. It's a bid — a tiny hand reaching out saying, "Pay attention to me for a moment. Share this with me."

**Turning toward**: "Wait, really? That's wild. What else does it say?" — you accepted the bid.
**Turning away**: *Silence. Keeps scrolling phone.* — you rejected the bid without even noticing.
**Turning against**: "I'm busy. Why are you telling me random facts?" — you punished the bid.

Each response seems trivial in the moment. But these micro-moments accumulate. Over days, weeks, years — they become the emotional climate of your relationship. Turn toward enough and trust builds like compound interest. Turn away enough and your partner stops reaching out entirely.

📖 **Definitions**
• **Bid for Connection**: Any attempt to get attention, affirmation, affection, or engagement from a partner
• **Turning Toward**: Acknowledging and engaging with a bid — builds trust
• **Turning Away**: Ignoring or missing a bid — erodes connection through neglect
• **Turning Against**: Responding to a bid with hostility or dismissal — actively damages trust
• **Emotional Bank Account**: Gottman's metaphor — every positive interaction is a deposit, every negative one a withdrawal

🎯 **Relationship Wisdom**
Gottman found that it's not the quality of your arguments that predicts divorce — it's the quality of your *ordinary moments*. Happy couples aren't happier because they fight less. They're happier because between the fights, they've built up so many deposits that the withdrawals don't bankrupt the account.

❓ **Tomorrow's Question:**
*If small moments matter more than grand gestures, how do you figure out what kind of connection your partner actually needs? Why do some people feel loved through words while others need touch or time?*`,parable:`**🏰 The Parable of the Bridge of Small Things**

Two travelers — Ash and Lume — met on a long road heading north. Neither planned to walk together, but the road was lonely and conversation made the miles shorter. By the second day, they realized they preferred the same road.

---

By the third week, they'd settled into a rhythm. One morning, Lume pointed at the sky.

"Look — a hawk."

Ash glanced up. "Mm." Then went back to adjusting a boot strap.

Lume said nothing. But something — something too small to name — dimmed.

---

They arrived in a village where an old keeper named Elder Rynn maintained the Bridge of Vows — an ancient stone crossing said to hold together only as long as the people who walked it cared for each other.

"The bridge looks strong," Ash remarked.

"It is today," said Rynn. "But it's not built from stone."

She led them underneath, where the mortar between the stones glowed faintly — some sections bright, others dark and crumbling.

"Each glowing point is a small moment when two people *turned toward* each other. Not grand declarations. Not sacrifices. Just... 'I see you. I hear you. I'm here.'"

She pointed to a dark, crumbling section. "And each dark point is a moment someone reached out and was ignored."

---

"Show me," said Lume.

Rynn picked up two small river stones. "Today, Lume pointed at a hawk. That was a bid — a tiny hand extended, saying *share this moment with me*."

She placed one stone on the bridge railing.

"And Ash said 'mm' and looked away." She placed the second stone below, in the shadows. "The bid went unanswered. One stone in the dark."

Ash shifted uncomfortably. "It was just a hawk."

"It's always 'just' something," Rynn said. "Just a hawk. Just a comment about dinner. Just a sigh at the end of the day. Each one so small you barely notice. But my bridge is built from thousands of 'justs.' The couples whose bridges stand? They answer about nine out of every ten."

"And the ones whose bridges fall?"

"Three out of ten. The bids stop coming because nobody's catching them. And one morning, the bridge is gone — and both people swear it happened 'suddenly.'"

---

That evening, Lume was staring at the river.

"The water's beautiful tonight," Lume said softly.

Ash paused. Remembered the hawk. Set down the firewood.

"It really is. Look how it catches the last light."

Something too small to name brightened.

---

**🌾 The Moral**

Love is not built from grand gestures. It's built from the hundreds of tiny moments where one person reaches out and the other reaches back. A comment about a hawk. A question about your day. A hand on a shoulder. Each one is a stone in the bridge — and every stone you miss darkens the mortar.

> *"The bridge doesn't fall from one great blow. It crumbles from a thousand small moments when someone reached out and no one reached back."*

❓ *Tomorrow's tale: Ash learns to turn toward — but Lume speaks a different language of love entirely. Why does Lume feel unseen even when Ash is trying? Elder Rynn explains why some people need words, while others need something else entirely.*`},{day:2,title:"The Five Love Languages — Speaking Your Partner's Native Tongue",date:"2026-03-01",image:"images/building-relationships/day-2.jpg",sonnet:`**🪶 Sonnet II: The Five Love Languages — Speaking Your Partner's Native Tongue**

Some hearts drink deep from words of sweet acclaim,
While others find their solace in a touch.
One soul may need time's undivided claim,
Another service, proving love through much.

The gift-receiver treasures tokens small—
Not gold or gems, but thought made manifest.
Each language speaks to hearts in different call,
Yet all seek love expressed and love confessed.

We often give the love we wish to find,
In our own tongue we learned from cradle days.
But wisdom whispers: leave your language blind,
And learn to love in your beloved's ways.

*For when we speak their heart's own native voice,*
*Small gestures make the deepest souls rejoice.*`,standard:`💕 Day 2: The Five Love Languages — Speaking Your Partner's Native Tongue

Yesterday we discovered that **bids for connection** are the building blocks of trust, with successful couples turning toward each other 86% of the time in ordinary moments. But here's the crucial follow-up: not all connection attempts are created equal. You can turn toward your partner consistently and still leave them feeling unloved if you're speaking different emotional languages.

🧱 **The Concept**
Dr. Gary Chapman identified five distinct **love languages** — ways people naturally give and receive love: Words of Affirmation, Quality Time, Physical Touch, Acts of Service, and Receiving Gifts. Each person has a primary language that makes them feel most valued and understood.

❓ **Why It Matters**
Imagine speaking Spanish to someone who only understands French. Your effort is genuine, but the message gets lost. The same happens in relationships when partners express love in their own language rather than their partner's. You might be making countless bids for connection that feel hollow to your partner because you're using the wrong emotional vocabulary.

⚙️ **How It Works**
**Words of Affirmation**: "I'm so proud of how you handled that situation." "You look beautiful today." These partners need verbal appreciation and encouragement.

**Quality Time**: Undivided attention — phones away, eye contact, active listening. Not just being in the same room, but truly present together.

**Physical Touch**: Hand-holding, hugs, back rubs. Non-sexual touch that says "I'm here with you."

**Acts of Service**: Doing the dishes without being asked, filling up their gas tank, making their coffee. Love through helpful actions.

**Receiving Gifts**: Thoughtful tokens that say "I was thinking of you." Not about expense — a picked flower can mean more than jewelry if it shows intentionality.

The magic happens when you learn to give love in your partner's language, not just your own. If your partner's language is Acts of Service, saying "I love you" a hundred times won't fill their tank like one unexpected act of help.

📖 **Definitions**
• **Love Language**: A person's preferred way of receiving and interpreting love
• **Primary Love Language**: The language that most effectively communicates love to someone
• **Love Tank**: Chapman's metaphor for emotional fulfillment — speaking someone's language fills their tank
• **Emotional Fluency**: The ability to express love in multiple languages beyond your native one

🎯 **Relationship Wisdom**
The goal isn't to become fluent in all five languages, but to become conversational in your partner's. When you consistently speak their language, even small gestures create profound connection because they land exactly where your partner can receive them.

❓ **Tomorrow's Question:**
*If understanding your partner's love language helps you connect, what happens when you inevitably get it wrong? How do healthy couples navigate the misunderstandings and hurt feelings that come with being imperfect humans?*`,parable:`Ash and Lume had been walking the same road for weeks now, their steps naturally falling into rhythm. Yet Elder Rynn, keeper of the Bridge of Vows, noticed something peculiar as he watched them from his ancient post.

Each evening at camp, Ash would gather the finest wood and build elaborate fires, believing the warmth and comfort would show Lume how much their companionship meant. Meanwhile, Lume would sit close to Ash, speaking words of encouragement about the day's journey, praising Ash's skill with the map and compass.

But something was amiss. Despite their genuine efforts, both travelers seemed to carry a subtle loneliness, as if their gestures of care were falling into an invisible chasm between them.

One evening, Elder Rynn approached their camp. "I see two travelers speaking different languages," he observed, settling by their fire.

"But we both speak the common tongue," Ash replied, confused.

"Ah," smiled the Elder, "but love has its own tongues. Ash, your fires are beautiful gifts of service and comfort. Yet Lume's spirit drinks not from flame but from the well of spoken appreciation. And Lume, your words are honey to the heart, but Ash hears love most clearly through thoughtful action, not spoken praise."

The Elder continued, "Watch the birds in the forest. The nightingale sings to court its mate, while the bower bird builds elaborate displays. Neither is wrong, but each must learn to receive love in the language their partner speaks."

That night, Lume helped Ash tend the fire, working in comfortable silence. Ash, in turn, spoke quietly of how Lume's steady presence made even the most difficult paths feel manageable.

For the first time in weeks, both travelers felt truly seen.

**Moral**: Love is not diminished by translation — it is multiplied. To speak another's heart-language is to build bridges across the spaces between souls.

*Tomorrow, our travelers will discover that even the most fluent speakers sometimes stumble over words, and that grace is the art of loving through imperfect communication...*`},{day:3,title:"The Art of Repair — Healing the Inevitable Wounds",date:"2026-03-02",image:"images/building-relationships/day-3.jpg",audio:"audio/building-relationships/day-3",sonnet:`**🪶 Sonnet III: The Art of Repair**

When harsh words cut like winter's bitter blade,
And love lies wounded on the battlefield,
The wise know well that bonds need not fade—
Broken hearts, with skill, can truly heal.

For every partnership will crack and strain,
No perfect souls exist in mortal frame,
Yet mastery lies in how we ease the pain
And build back stronger from our mutual shame.

The first step: see the hurt that we have caused,
The second: own our part without defense,
The third: commit to change, no longer paused
By pride that builds up walls 'gainst recompense.

*In love's repair, the mended place grows strong,*
*Where broken trust learns its most hopeful song.*`,standard:`💕 Day 3: The Art of Repair — Healing the Inevitable Wounds

🧱 **The Concept**
Every relationship experiences **ruptures** — moments when connection breaks down through misunderstandings, harsh words, or unmet expectations. The strength of a relationship isn't measured by avoiding these breaks, but by how skillfully partners **repair** them.

❓ **Why It Matters**
Even when you speak your partner's love language fluently, you'll still miss the mark sometimes. You'll be tired, distracted, or simply human. Research shows that successful couples don't fight less — they recover faster and more completely from their conflicts. The repair process actually strengthens bonds when done well, creating deeper intimacy than existed before the rupture.

⚙️ **How It Works**
**Quick Repairs**: Immediate course corrections like "Wait, that came out wrong" or "I can see I hurt you — let me try again." These prevent small wounds from becoming infected. **Formal Repairs**: Structured conversations after bigger conflicts that include acknowledgment ("I see how my words affected you"), responsibility ("I was wrong to raise my voice"), and recommitment ("Here's what I'll do differently"). **Preventive Repairs**: Regular check-ins and appreciation rituals that build resilience before problems arise. The key is timing — repairs work best when emotions have cooled but not so much time has passed that resentment builds walls.

📖 **Definitions**
• **Rupture**: A break in emotional connection between partners
• **Repair**: Actions taken to restore connection and trust after a rupture
• **Repair Attempt**: Any effort to reduce tension during or after conflict
• **Emotional Bid**: A request for connection that helps initiate repair
• **Relational Resilience**: The couple's ability to bounce back stronger from difficulties

🎯 **Relationship Wisdom**
Masters of relationship repair understand that saying "I'm sorry" is just the beginning — true healing requires acknowledging impact, taking responsibility, and demonstrating change through actions over time.

❓ **Tomorrow's Question:**
*If repair helps us recover from our mistakes, what internal skills do we need to manage our own emotions in the heat of conflict? How do emotionally intelligent people stay connected to their partner even when triggered?*`,parable:`The morning mist clung to the Valley of Echoes as Ash and Lume continued their shared journey. Three days had passed since they'd learned to speak each other's emotional languages from Elder Rynn, and their connection had deepened like roots finding water. But today, a sharp stone would test their newfound wisdom.

"You said you'd carry the water today," Lume's voice carried an edge as thin and cutting as winter wind. "I've been watching you ignore it for an hour."

Ash stopped abruptly, the pack sliding from tired shoulders. "I didn't ignore it. I was waiting for the right stream — the one you mentioned yesterday. I was trying to do what you wanted."

"What I wanted?" Lume's laugh held no warmth. "I wanted not to be thirsty while you made perfect plans."

The words hung between them like a chasm. Ash felt the familiar heat of defensiveness rising, the urge to catalogue every kindness, every effort that had gone unnoticed. Lume felt the sting of being misunderstood, the weight of unmet needs stretching back like shadows.

They walked in silence until they reached the Bridge of Vows, where Elder Rynn waited as if expecting them. The ancient keeper's eyes held the knowing sadness of one who had witnessed countless travelers stumble.

"Ah," said Elder Rynn, "you've discovered that learning new languages doesn't make you perfect speakers. Tell me, when a master archer misses the target, does she throw away her bow?"

Ash and Lume exchanged glances — the first real connection they'd shared since the stone of conflict had lodged between them.

"She adjusts her aim," Ash said quietly.

"And if the wind shifted her arrow," Elder Rynn continued, "what does she do then?"

"She accounts for the wind next time," Lume added, understanding beginning to dawn like sunrise through clouds.

"Just so. Every relationship breaks — it is the nature of human hearts to wound and be wounded. But watch." Elder Rynn picked up two pieces of a broken branch and bound them together with strips of bark. "The mended place becomes the strongest part. It has been tested and reinforced."

The keeper's weathered hands demonstrated the binding technique. "First, acknowledge the break — don't pretend it didn't happen. Then clean the wound — speak honestly about the hurt. Finally, bind it carefully — commit to doing differently."

Ash turned to Lume with eyes no longer defended. "I see that I left you carrying discomfort while I pursued my idea of helping. That wasn't fair to you."

Lume's rigid posture softened. "And I spoke from frustration instead of asking clearly for what I needed. I'm sorry for the sharp words."

They spent the next hour by the bridge, learning that repair isn't just apology — it's the careful reconstruction of trust through understanding and commitment to change. Elder Rynn watched them bind their own relational wound, noting how they grew more skillful with each honest word.

As evening approached, the travelers prepared to leave. Elder Rynn handed them a small leather pouch. "Binding strips," the keeper explained with a knowing smile. "For tomorrow's breaks — because there will be tomorrow's breaks. The question is not whether you'll wound each other, but how quickly and completely you'll heal."

**Moral**: *In love, as in life, our strength lies not in perfection but in our mastery of repair. The couples who last are not those who never break, but those who mend with greater wisdom each time.*

*Tomorrow, Elder Rynn would teach them about the inner compass that guides us when emotions run high — for what good are repair skills if we cannot access them when we need them most?*`},{day:4,title:"Emotional Intelligence in Love — Mastering Your Inner World",date:"2026-03-03",image:"images/building-relationships/day-4.jpg",audio:"audio/building-relationships/day-4",sonnet:`**🪶 Sonnet IV: Emotional Intelligence in Love**

When passion's fire ignites the tender heart,
And words like arrows pierce the fragile air,
The wise in love pause ere they speak their part,
And tend the storms that rage within their care.

For in that space 'tween feeling and reply,
Lies wisdom's throne where better choices dwell,
Where heated blood learns patience to apply,
And wounded pride its fury learns to quell.

The lover skilled reads both their own heart's page,
And sees their partner's pain beneath the mask,
Transforming conflict's wild and bitter rage
Into connection's more enduring task.

*So train your heart to feel yet still think clear,*
*That love may flourish even when storms appear.*`,standard:`💕 Day 4: Emotional Intelligence in Love — Mastering Your Inner World

🧱 **The Concept**
Emotional intelligence in relationships means **recognizing, understanding, and managing your emotions** while staying attuned to your partner's emotional state, especially during conflict or stress.

❓ **Why It Matters**
When triggered, our **amygdala** hijacks rational thinking, turning partners into perceived threats rather than teammates. Couples with high emotional intelligence don't avoid getting triggered — they recover faster and make better choices even when flooded with intense emotions. This creates safety for both partners to be vulnerable and authentic.

⚙️ **How It Works**
**Self-Awareness**: Notice your emotional triggers and physical sensations before you react explosively. **Self-Regulation**: Use techniques like deep breathing, pausing, or taking breaks to calm your nervous system when overwhelmed. **Empathy**: Read your partner's emotional cues and respond to their underlying feelings, not just their words. **Social Skills**: Express your needs clearly while validating your partner's experience, even during disagreements. For example, instead of "You never listen!" try "I'm feeling unheard right now and need to know you care about my perspective."

🎯 **Relationship Wisdom**
Emotionally intelligent lovers create space between feeling and action, choosing responses that serve the relationship rather than just venting their immediate emotions.

❓ **Tomorrow's Question:**
*If emotional intelligence helps us manage our reactions, what happens when our core values or non-negotiables clash with our partner's? How do we distinguish between differences we can bridge and incompatibilities that might break us?*`,parable:`As dawn broke over the valley, Ash noticed Lume walking with unusual stiffness, their jaw clenched tight. Yesterday's harsh words about their chosen route still echoed between them like stones rattling in a hollow gourd.

"The path grows treacherous ahead," Elder Rynn observed, appearing beside a weathered signpost. "See how the morning mist obscures the cliffs? When travelers cannot see clearly within themselves, they stumble even on familiar ground."

Ash felt their chest tighten, recognizing the familiar surge of defensive heat. But instead of striking back with wounded pride, they paused, feeling their rapid heartbeat, the shallow breathing that signaled their inner storm. "I'm angry," Ash said quietly, "but beneath that... I'm scared we're losing each other."

Lume's rigid posture softened slightly. "I've been carrying yesterday's hurt like a stone in my pack," they admitted. "But watching you pause just now, choosing honesty over retaliation... it reminds me why I chose this journey with you."

Elder Rynn smiled, gesturing toward the clearing mist. "The wise traveler tends their inner weather as carefully as they read the sky. When you master the storms within, you can navigate any external tempest together."

They walked on, the morning air lighter between them, each more aware of the emotional landscape they carried within.

**Moral**: True partnership requires mastering not just the art of loving another, but the science of understanding yourself.

*Tomorrow, Elder Rynn will reveal what happens when two well-intentioned travelers discover their inner compasses point in different directions...*`},{day:5,title:"Compatibility vs. Compromise — When Love Meets Reality",date:"2026-03-03",image:"images/building-relationships/day-5.jpg",audio:"audio/building-relationships/day-5",sonnet:`**🪶 Sonnet V: Compatibility vs. Compromise**

When hearts unite, do souls align complete?
Or can love bridge what fundamental parts
Divide? The mountain calls to restless feet,
While ocean tides enchant opposing hearts.

Some differences bend like willows in wind—
Preferences that flex with tender care.
But core dreams, once forsaken, leave us pinned
Between resentment and love's sweet despair.

The wise distinguish what can compromise
From values that define our truest selves.
For partnership needs shared horizon's prize,
Not sacrifice of souls upon love's shelves.

*True lovers match in destination's call,*
*Then compromise on pathways through it all.*`,standard:`💕 Day 5: Compatibility vs. Compromise — When Love Meets Reality

🧱 **The Concept**
Compatibility means sharing **fundamental values, life goals, and relationship expectations**, while compromise involves flexibly adjusting preferences and habits to accommodate your partner's needs.

❓ **Why It Matters**
Many relationships fail because couples mistake **surface-level attraction** for deep compatibility, or they compromise on core values thinking love will overcome fundamental differences. Understanding this distinction prevents both premature breakups over minor incompatibilities and prolonged suffering in relationships with irreconcilable differences. True partnership requires both a solid foundation of shared values and the flexibility to negotiate life's endless smaller decisions.

⚙️ **How It Works**
**Core Values Assessment**: Identify your non-negotiables around family, career ambitions, lifestyle, spirituality, and money — these rarely change and require compatibility, not compromise. **Preference Flexibility**: Distinguish between preferences ("I love Italian food") and values ("Financial security is essential") — preferences can be compromised, values cannot. **Future Vision Alignment**: Ensure you want the same general life trajectory — kids or no kids, city or countryside, adventure or stability. **Compromise Boundaries**: Healthy compromise enhances both partners' lives rather than requiring either person to abandon core aspects of their identity. For example, compromising on vacation destinations strengthens the relationship, but compromising on whether to have children often breeds resentment.

🎯 **Relationship Wisdom**
The strongest couples are compatible in their foundations and generous in their compromises, knowing the difference between bending and breaking.

❓ **Tomorrow's Question:**
*If compatibility and compromise create relationship stability, what role does forgiveness play when our partner inevitably hurts us? Can a relationship truly recover from betrayal, or does trust, once broken, leave permanent scars?*`,parable:`As dawn broke over the valley, Ash and Lume approached a great fork in their shared road. Two paths stretched before them — one winding toward the mountains, the other descending toward the sea. For the first time since beginning their journey together, they faced a choice that could not accommodate both their desires.

"I have always dreamed of the peaks," Ash whispered, eyes fixed on the distant summits. "The clarity, the challenge, the solitude for deep thought."

Lume's gaze was drawn seaward. "And I have always yearned for the tides, the endless horizon, the rhythm of waves that matches my heart."

Elder Rynn appeared beside them, his weathered hands tracing patterns in the morning mist. "Young travelers, you have learned to bend like willows in the wind, adjusting your pace, sharing your provisions, even changing your preferred resting spots. But now you face something deeper — the question of destination itself."

He pointed to the fork. "Some differences are like choosing between morning or evening rest — easily accommodated through loving compromise. But others cut to the core of who you are and what you seek in this life. No amount of love can make the mountain path lead to the sea."

Ash and Lume stood in profound silence, feeling the weight of this truth. They had compromised on countless small matters with joy, but this choice would require one of them to abandon a fundamental dream.

"True partnership," Elder Rynn continued, "requires first knowing whether you walk toward the same horizon, then finding countless ways to honor each other's steps along that shared path."

**Moral**: The deepest love distinguishes between preferences that can bend and dreams that define us.

**Tomorrow**: *When the road tests not our compatibility, but our capacity to heal from the wounds we inflict upon each other...*`},{day:6,title:"The Architecture of Forgiveness",date:"2026-03-04",image:"images/building-relationships/day-6.jpg",audio:"audio/building-relationships/day-6",sonnet:"",standard:`💕 Day 6: The Architecture of Forgiveness — Rebuilding After Betrayal

🧱 **The Concept**
Forgiveness is not excusing harmful behavior or forgetting pain, but rather a **conscious choice to release resentment** and work toward rebuilding trust through accountability, changed behavior, and time.

❓ **Why It Matters**
Every relationship faces moments where partners wound each other — through broken promises, thoughtless words, or deeper betrayals. Without forgiveness, relationships become prisons of accumulated grievances where love suffocates under the weight of past hurts. Yet false forgiveness that skips accountability often enables repeated harm. True forgiveness creates a pathway for genuine healing while protecting future trust.

⚙️ **How It Works**
**Acknowledgment First**: The offending partner must fully acknowledge the harm caused without minimizing, justifying, or shifting blame — "I hurt you by..." rather than "I'm sorry you feel..." **Genuine Remorse**: True apologies include taking responsibility, expressing empathy for the pain caused, and demonstrating understanding of why the behavior was wrong. **Changed Behavior**: Forgiveness requires evidence of transformation — new patterns that prevent similar harm, not just promises. **Rebuilt Trust**: Trust returns gradually through consistent actions over time, not through words alone — like depositing coins in a bank account that was emptied. **Emotional Processing**: The hurt partner needs space to feel and express their pain without rushing toward "getting over it" — healing has its own timeline.

🎯 **Relationship Wisdom**
Forgiveness is not a gift to the one who hurt you — it's freedom you give yourself, and trust is earned back one faithful action at a time.

❓ **Tomorrow's Question:**
*If forgiveness can heal past wounds, what prevents couples from growing apart over time? How do two people maintain intimacy and connection when life's demands pull them in different directions, and when does "growing apart" signal natural evolution versus relationship neglect?*`,parable:`As dawn broke over the Valley of Echoes, Ash and Lume found themselves before a bridge unlike any they had encountered. The Bridge of Vows stretched across a chasm where mist rose from unseen depths, its stones blackened and cracked, some missing entirely.

Elder Rynn emerged from a small cottage beside the bridge's entrance, his weathered hands carrying an ancient ledger. "This bridge has carried ten thousand couples," he said, his voice gentle but grave. "Each stone represents a promise kept, each crack a trust broken. Some have tried to cross on broken stones — they fall into the mist of resentment. Others refuse to step on cracked stones at all, turning back before they begin."

Ash examined the damaged sections. "How does anyone cross safely?"

"Watch," Elder Rynn replied, pointing to where two figures approached from the far side. As they reached each broken section, they paused. One would kneel, carefully removing the damaged stone, while the other placed a new one from a heavy sack they carried together. The replacement stones gleamed white against the weathered bridge.

"The new stones aren't the same as the original," Lume observed.

"No," Elder Rynn nodded. "They're stronger. Forged in the fire of acknowledgment, cooled in the waters of genuine remorse, polished by changed behavior. The bridge they cross is not the same one they damaged — it's better."

Ash frowned. "But what if someone keeps breaking stones?"

"Then the bridge becomes impassable," Elder Rynn said solemnly. "Forgiveness requires a partner willing to carry replacement stones, not one who keeps a hammer."

As Ash and Lume began their careful crossing, testing each stone before trusting their weight to it, Elder Rynn called after them: "Remember — a repaired bridge may be stronger than before, but only if both travelers commit to maintaining it."

**Moral**: Forgiveness rebuilds what was broken, but only through accountability, changed behavior, and mutual commitment to creating something stronger than before.

*Tomorrow, they would discover what happens when two people begin to walk different paths even while sharing the same road...*`},{day:7,title:"Growing Together vs Growing Apart — The Dance of Shared Evolution",date:"2026-03-04",image:"images/building-relationships/day-7.jpg",audio:"audio/building-relationships/day-7",sonnet:`**🪶 Sonnet VII: Growing Together vs Growing Apart**

Two saplings planted close may intertwine,
Or stretch apart toward different shafts of light;
One choice creates a bond both strong and fine,
The other leaves them lonely in their might.
In love, we face this same eternal choice:
To grow as one while honoring the self,
Or let our fears still our authentic voice,
And place connection high upon the shelf.
The wise know growth need not mean growing cold—
That separate dreams can strengthen lovers' thread,
When curiosity replaces fear's stronghold,
And change is welcomed, not something to dread.
*Two rivers flowing from their separate source*
*Join stronger than if they had shared one course.*`,standard:`💕 Day 7: Growing Together vs Growing Apart — The Dance of Shared Evolution

🧱 **The Concept**
Growing together means **evolving as individuals while deepening your bond**, creating parallel growth that strengthens rather than threatens the relationship.

❓ **Why It Matters**
People change — it's inevitable and healthy. But when partners grow in different directions without intentional connection, they become strangers sharing a roof. The fear of growing apart often leads couples to cling too tightly, stunting individual development, or to drift too far, losing their foundation. Understanding the difference between natural evolution and relationship neglect determines whether change becomes your enemy or ally.

⚙️ **How It Works**
**Shared Vision**: Partners regularly discuss their dreams, values, and life direction — not to control each other's growth, but to ensure you're building compatible futures. **Individual Space**: Healthy relationships require **breathing room** — pursuing separate interests, friendships, and goals that enrich who you bring back to the partnership. **Intentional Reconnection**: Growth requires deliberate effort to bridge new experiences — sharing what you're learning, how you're changing, and what excites you about your evolution. **Curiosity Over Judgment**: When your partner develops new interests or perspectives, approach with genuine interest rather than threat or criticism. **Synchronized Support**: Champion each other's growth even when it feels scary — the partner who helps you become your best self earns deeper intimacy than one who keeps you small.

🎯 **Relationship Wisdom**
Two people committed to growing together create a love that expands rather than contracts, where individual evolution becomes the foundation for deeper connection.

❓ **Tomorrow's Question:**
*If healthy relationships require both individual growth and shared evolution, what happens when partners discover they want fundamentally different futures? When do compromises strengthen a relationship versus compromise the people within it?*`,parable:`On their seventh evening together, Ash and Lume found themselves at a fork in the mountain path, where two routes converged again miles ahead at Elder Rynn's bridge.

"We could travel faster if we split up," Ash suggested, studying the divergent trails. "That eastern path looks perfect for your botanical studies, while the western route has the rock formations I've been hoping to sketch."

Lume hesitated, fear flickering in their eyes. "But what if we grow too different? What if when we meet again at the bridge, we're no longer... us?"

When they reached Elder Rynn that evening, they shared their dilemma. The ancient keeper smiled knowingly.

"Watch," Rynn said, gesturing to the two streams that fed the river beneath the bridge. "One carries mountain minerals, the other valley flowers. They flow separately, each gathering their own gifts, yet when they join, the river becomes richer than either stream alone."

The Elder continued, "The secret lies not in traveling identical paths, but in remembering why you chose to journey together. Growth becomes dangerous only when partners stop caring where the other is headed, or when they fear their companion's expansion."

Rynn pointed to an ancient tree whose roots had grown around a boulder. "See how the roots didn't avoid the stone, but embraced it, growing stronger? Your individual growth can either threaten your bond or become its greatest strength — the choice lies in whether you grow with intention toward each other or merely alongside."

**Moral**: True partners don't fear each other's growth but create space for it while maintaining their connection, understanding that the strongest bonds are forged between two whole individuals choosing each other daily.

*Tomorrow, Ash and Lume would discover what happens when their individual growth reveals wants that seem impossible to reconcile...*`},{day:8,title:"The Crossroads of Compatibility — When Dreams Diverge",date:"2026-03-05",image:"images/building-relationships/day-8.jpg",audio:"audio/building-relationships/day-8",sonnet:`**🪶 Sonnet VIII: The Crossroads of Compatibility**

When divergent dreams pull lovers separate ways,
And mountain calls to one, while sea calls other,
The crossroads tests what time and trust displays—
Can different paths still shelter the same mother?

For compatibility lies not in same desire,
But in the art of weaving diverse threads
Into a tapestry that will not tire
Of holding space where each authentic heart treads.

The river and the peak need not divide
Two souls committed to creative love—
Sometimes the answer flows where both reside,
Where earth below can touch the stars above.

*True partnership finds ways to honor both*
*The separate dreams that strengthen the shared troth.*`,standard:`💕 Day 8: The Crossroads of Compatibility — When Dreams Diverge

🧱 **The Concept**
True compatibility isn't about wanting identical futures, but about **finding creative ways to honor both partners' authentic paths** while maintaining meaningful connection.

❓ **Why It Matters**
Every couple faces moments when individual dreams seem to pull in opposite directions — one wants children, the other doesn't; one craves adventure, the other seeks stability; one pursues a demanding career, the other values work-life balance. These crossroads reveal whether your relationship can hold space for authentic individuality or requires one person to sacrifice their truth. The way couples navigate divergent dreams determines whether they build resentment or deeper understanding.

⚙️ **How It Works**
**Distinguish Core Values from Surface Preferences**: Ask whether your different desires stem from incompatible values or simply different expressions of similar needs — wanting security might look like a steady job to one partner and entrepreneurial freedom to another. **Creative Problem-Solving**: Instead of immediately assuming compromise means one person loses, explore innovative solutions — alternating years between city and country, finding careers that travel together, or timing major decisions sequentially rather than simultaneously. **Time-Bounded Experiments**: Test divergent paths temporarily before making permanent decisions — spend six months exploring one partner's dream location or career shift. **Honest Assessment**: Some differences truly are irreconcilable, and recognizing this with compassion prevents years of forcing incompatible puzzle pieces together. **Values Alignment Check**: Regularly return to your fundamental values about family, lifestyle, spirituality, and purpose — surface-level disagreements often reveal deeper harmony or genuine incompatibility.

🎯 **Relationship Wisdom**
The strongest relationships don't eliminate all differences but create enough shared foundation to celebrate the diversity that keeps love interesting and authentic.

❓ **Tomorrow's Question:**
*If two people can maintain deep love while pursuing different life paths, what role should sacrifice play in relationships? When does "meeting in the middle" create beautiful compromise versus bitter resentment?*`,parable:`The road had forked, and for the first time since beginning their journey together, Ash and Lume stood facing different paths. Ash gazed toward the sunlit mountain pass, dreaming of the ancient libraries rumored to exist in the peaks. Lume's eyes followed the river valley, where merchant cities promised adventure and fortune.

"We chose the same road once," Ash said quietly. "But now our hearts pull us toward different destinations."

Elder Rynn appeared beside them, his weathered hands tracing patterns in the dust. "Ah, the great crossroads. Every partnership must face this moment when individual dreams seem to demand separation."

"Must we choose between our dreams and our bond?" Lume asked, voice heavy with sorrow.

The Elder smiled, pointing to a third path they hadn't noticed — one that curved along the base of both mountain and valley. "See how this road touches both destinations? Sometimes the answer isn't choosing one path or the other, but finding the way that honors both journeys."

As they walked this middle road together, they discovered caves filled with ancient texts overlooking bustling trade routes — a place where scholarship and commerce intertwined. Their different dreams hadn't required abandonment of their shared journey, but rather creative navigation.

"True compatibility," Elder Rynn taught, "isn't about wanting identical futures, but about building a love flexible enough to hold two authentic lives."

**Moral**: The strongest bonds don't eliminate differences but find creative ways to honor both partners' truest selves.

*Tomorrow, Elder Rynn would teach them about the delicate balance between compromise and sacrifice — and when love requires letting go...*`}],Fv=[{day:1,title:"The Foundation of All Great Cooking - Understanding Heat",date:"2026-03-01",image:"images/cooking/day-1.jpg",sonnet:`**🪶 Sonnet I: The Foundation of All Great Cooking - Understanding Heat**

In kitchen's realm where transformation dwells,
Heat reigns supreme as sovereign of change,
Through searing flames and gentle warming spells,
It guides each dish through flavors' wondrous range.

From high fire's bold and fierce embrace so bright,
That browns and crisps with Maillard's golden art,
To low flame's patient, tender, loving light,
That coaxes sweetness from each humble part.

The wise cook learns to read heat's varied tongue,
In sizzle's song and steam's ascending dance,
Where temperatures like notes are deftly strung,
To give raw matter life through skilled advance.

*For he who masters fire's fickle way,*
*Holds power to create from simple clay.*`,standard:`🍳 **Day 1: The Foundation of All Great Cooking - Understanding Heat**

Welcome to the art and science of cooking, where technique meets intuition and chemistry creates magic.

🧱 **The Concept**
Heat is the fundamental force that transforms raw ingredients into delicious food, but controlling it properly is what separates good cooks from great ones.

❓ **Why It Matters**
Every cooking method - from searing to braising, baking to sautéing - relies on your ability to harness and control heat. Without understanding temperature control, even the finest ingredients will fail to reach their potential. The difference between a perfectly caramelized onion and a burnt one lies entirely in heat management.

⚙️ **How It Works**
Heat transfer occurs through three methods: **conduction** (direct contact like a steak on a hot pan), **convection** (air or liquid circulation in an oven or pot of boiling water), and **radiation** (energy waves from a broiler or grill). Low heat develops deep flavors slowly through gentle chemical reactions, while high heat creates the **Maillard reaction** - the browning that gives us crispy skin, caramelized surfaces, and complex flavors. Medium heat offers the sweet spot for most sautéing and pan-frying, allowing ingredients to cook through while developing color.

📖 **Definitions**
• **Maillard Reaction**: Chemical process between amino acids and sugars that creates browning and complex flavors
• **Conduction**: Heat transfer through direct contact
• **Convection**: Heat transfer through moving air or liquid
• **Radiation**: Heat transfer through electromagnetic waves
• **Caramelization**: The browning and flavor development of sugars when heated

🎯 **Culinary Wisdom**
Master your heat, and you master the transformation of ingredients. Cook with patience at low temperatures and boldness at high ones.

❓ **Tomorrow's Question** — If heat is the engine of cooking, what would you say is the steering wheel that guides where all that energy goes, and why might the most experienced chefs rely on this more than any thermometer or timer?`,parable:`In the kitchen of the old monastery, young Sage watched in wonder as Ember moved between three burners with the grace of a dancer. The elderly chef's hands, weathered by decades of service, adjusted flames with subtle precision despite her inability to taste what she created.

"Tell me, child," Ember said, placing a pan over high heat, "what do you think separates the wheat from the chaff in our craft?"

Sage considered the question, watching oil shimmer in the pan. "The finest ingredients?"

"Ingredients matter, but even caviar becomes waste in careless hands." Ember lowered another flame to barely a whisper. "Watch."

She placed identical onions in two pans - one over fierce heat, another over gentle warmth. The first onion hissed and protested, quickly browning then blackening at the edges. The second began to slowly weep its moisture, gradually turning translucent, then golden, filling the air with sweet perfume.

"Heat," Ember explained, "is the great transformer. Too little, and ingredients remain unchanged, their potential locked away. Too much, and you destroy rather than create. But just right..." She gestured to the golden onions, "and you unlock flavors that existed only in possibility."

Sage leaned closer, inhaling the aroma. "But how do you know the right amount when you cannot taste?"

Ember smiled, her scarred fingers reading the pan's vibrations, listening to the gentle sizzle. "Heat speaks in languages beyond taste - sound, sight, touch, even smell. The wise cook learns to hear its voice."

**Moral**: Mastery begins not with complex techniques, but with understanding the fundamental forces at your command.

*Tomorrow, Ember will teach Sage about the invisible guide that shapes every great dish...*`},{day:2,title:"The Art of Timing - When to Act in the Kitchen",date:"2026-03-01",image:"images/cooking/day-2.jpg",sonnet:`**🪶 Sonnet II: The Art of Timing**

When oil begins its gentle, singing dance,
And onions yield their sweetness to the flame,
The practiced cook knows well this fleeting chance
To guide each element toward flavor's aim.
No clock can teach the moment garlic turns
From gold to bitter brown in breath's short space,
Nor when the cream, as silken butter churns,
Shall join the pan with perfect timing's grace.
The steak that sears beneath the iron's kiss
Must flip when juices pool upon its face,
While vegetables await their turn of bliss—
Each ingredient claims its rightful place.
*For timing is the chef's most sacred art:*
*To know when patience ends and action starts.*`,standard:`🍳 **Day 2: The Art of Timing - When to Act in the Kitchen**

The steering wheel that guides heat's energy is **timing** - knowing precisely when to flip, when to add ingredients, and when to pull something off the fire. Experienced chefs develop an intuitive sense of timing through countless repetitions, learning to read the subtle cues that ingredients give them: the sound of a proper sear, the aroma of garlic just before it burns, the gentle bubbling that signals a perfect simmer.

🧱 **The Concept**
Timing in cooking is the rhythmic dance between action and patience, determining not just when things are done, but when each step should begin to create harmonious results.

❓ **Why It Matters**
Poor timing can ruin even perfectly heated dishes - overcooked proteins become tough, vegetables lose their vibrant color and crisp texture, and sauces can break or burn in moments of inattention. Great timing allows multiple components to finish simultaneously, ensuring every element reaches its peak at the same moment. It's the difference between a chaotic kitchen and an orchestrated meal.

⚙️ **How It Works**
Timing operates on multiple levels: **macro timing** (planning when to start each dish so everything finishes together) and **micro timing** (knowing the exact moment to flip that steak or add cream to a pan sauce). Dense vegetables like carrots need more time than delicate herbs, proteins continue cooking from **carryover heat** even after removal from heat, and aromatics like garlic and ginger release their best flavors in mere seconds before becoming bitter. **Mise en place** - having everything prepped and ready - allows you to focus entirely on these critical moments rather than scrambling for ingredients.

📖 **Definitions**
• **Carryover Heat**: Cooking that continues after food is removed from direct heat source
• **Mise en Place**: French term meaning "everything in its place" - complete preparation before cooking begins
• **Macro Timing**: Overall scheduling of multiple cooking processes
• **Micro Timing**: Split-second decisions during active cooking
• **Doneness**: The optimal point when food has cooked to desired texture and flavor

🎯 **Culinary Wisdom**
Timing is learned through practice, not recipes. Trust your senses over the clock, but respect both the urgency of the moment and the patience that great food demands.

❓ **Tomorrow's Question** — If timing controls when we act and heat controls the transformation, what invisible element do you think skilled cooks manipulate to build layers of complexity that make simple ingredients taste extraordinary?`,parable:`In the hushed kitchen before dawn, Sage watched Ember move through her morning preparations with fluid precision. Though the old chef's eyes were clouded and her sense of taste long gone, her hands moved with the certainty of seasons - chopping shallots into perfect brunoise, setting pans at exact angles, arranging ingredients in small bowls like a painter's palette.

"Master Ember," Sage whispered, afraid to break the morning's spell, "how do you know when everything will be ready without being able to taste?"

Ember smiled, her weathered hands never pausing in their dance. "Child, taste is just one note in the symphony. Listen." She dropped diced onions into hot oil, and they sang their gentle song of transformation. "The sizzle tells me the heat is right. The color tells me the sweetness is building. The aroma tells me we're thirty seconds from perfection."

Sage nodded, but still felt lost in the chaos of sounds and smells. "But how do you make it all come together?"

"Timing, little one, is the conductor's baton." Ember gestured to her station, where three different preparations moved at their own pace yet somehow remained in harmony. "I started the braise an hour ago because meat needs patience. The vegetables went in twenty minutes later because they need less. The herbs will join in the final moment because they need only a whisper of heat."

As if summoned by her words, the kitchen timer chimed. Without hesitation, Ember's hands moved - flipping, stirring, seasoning - each action flowing into the next like a well-rehearsed dance. In moments, three perfect dishes emerged from apparent chaos.

"You see," Ember said, wiping her hands clean, "a thermometer tells you temperature, but only experience teaches you the moment. Temperature is science, but timing... timing is art."

Sage tasted each dish, marveling at how every component sang in perfect harmony - nothing overcooked, nothing underdone, everything arriving at the peak of its glory in the same sublime moment.

**Moral**: True mastery lies not in following rigid rules, but in developing the intuition to know when each moment of action will serve the greater harmony of the meal.

*Tomorrow, Ember will teach Sage about the invisible foundation that turns simple ingredients into complex flavors.*`},{day:3,title:"The Architecture of Flavor - Building Taste Layer by Layer",date:"2026-03-03",image:"images/cooking/day-3.jpg",audio:"audio/cooking/day-3",sonnet:`**🪶 Sonnet III: The Architecture of Flavor**

In kitchens where the alchemy unfolds,
Each flavor waits its turn to take the stage,
The onion's tears transform to liquid gold,
While garlic whispers secrets to the sage.

Like architects who build from ground to sky,
The cook constructs with taste instead of stone,
Each layer adds complexity and ties
The simple to sublime in flavor's throne.

The basil's brightness crowns what time has wrought,
While deeper notes of stock and wine below
Create the foundation, carefully taught
To support the symphony that few may know.

*For in this art of layering taste and time,*
*Great cooks build bridges 'tween the mundane and sublime.*`,standard:`🍳 **Day 3: The Architecture of Flavor - Building Taste Layer by Layer**

The invisible element skilled cooks manipulate is **flavor layering** - the strategic building of taste complexity through careful sequencing of ingredients and techniques. While timing controls when we act and heat drives transformation, flavor layering creates the depth that transforms simple ingredients into extraordinary dishes by introducing tastes at different stages of cooking.

🧱 **The Concept**
Flavor layering is the methodical construction of taste complexity by introducing different flavor components at specific moments during cooking to create depth, balance, and harmony.

❓ **Why It Matters**
Without proper layering, dishes taste flat and one-dimensional, no matter how expensive the ingredients or perfect the technique. Great cooks understand that flavors behave differently when added at various stages - some need time to mellow and integrate, others shine when added at the finish. This knowledge allows them to create dishes where each bite reveals new nuances, keeping the palate engaged from first taste to last.

⚙️ **How It Works**
Flavor layering works through **foundation building** (aromatics like onions, garlic, and herbs cooked early to create a flavor base), **development phases** (adding proteins and heartier ingredients that benefit from longer cooking), and **finishing touches** (bright acids, fresh herbs, or specialty oils added at the end). A classic example is French **mirepoix** - diced onions, carrots, and celery cooked until softened to form the aromatic foundation for soups and braises. **Deglazing** captures caramelized flavors stuck to the pan, while **reducing** concentrates and intensifies tastes. Fresh herbs added early become mellow and earthy, while the same herbs added at service provide bright, sharp notes.

🎯 **Culinary Wisdom**
Think of flavors as musical notes - some form the bass line that supports everything else, while others provide the bright melody that makes the dish sing.

❓ **Tomorrow's Question** — If layering builds complexity in time, what fundamental principle allows cooks to balance opposing forces on the plate, ensuring no single flavor dominates while all elements remain distinct?`,parable:`Sage watched in bewilderment as Ember began a simple vegetable soup, her movements deliberate despite her inability to taste. "Why do you cook the onions alone first?" the apprentice asked, fidgeting with impatience.

Ember's weathered hands stirred the softening aromatics. "Close your eyes, child. What do you hear?"

Sage listened. "The onions... they're singing differently now. Sweeter."

"Flavor builds like a cathedral," Ember explained, adding carrots to the pot. "Each ingredient must find its place in the architecture. The onions lay the foundation - sweet, mellow, welcoming. Too early, and they remain sharp. Too late, and they float atop the dish like strangers."

As the soup developed, Ember added elements in careful sequence: stock to marry the vegetables, herbs tied in a bundle to infuse slowly, tomatoes to provide acidity that would brighten at the end. With each addition, Sage tasted, marveling at how the flavor deepened and complexified.

"But how do you know without tasting?" Sage wondered aloud.

"I taste with my memory," Ember replied, adding a final swirl of fresh herbs that transformed the entire pot. "Twenty years of building these invisible towers taught me that each flavor has its proper moment, its perfect place in the structure."

Sage tasted the finished soup and gasped. What had begun as simple vegetables now sang with layers of complexity, each spoonful revealing new harmonies.

*Moral: True cooking mastery lies not in expensive ingredients, but in understanding how flavors build upon each other through time and technique.*

*Tomorrow, Ember will teach Sage about the delicate dance of balance...*`},{day:4,title:"The Dance of Balance - Harmonizing Opposing Forces",date:"2026-03-03",image:"images/cooking/day-4.jpg",audio:"audio/cooking/day-4",sonnet:`**🪶 Sonnet IV: The Dance of Balance**

When flavors wage war upon the plate,
And sweetness battles acid's sharp refrain,
The cook must learn to mediate their fate
With salt and fat to soothe each fighting strain.

No single voice should dominate the song,
But harmony from opposition rise,
As vinegar makes richness sing along,
And gentle heat awakens sleeping spice.

The master's hand knows when to add the oil,
When acid's brightness cuts through heavy cream,
When salt transforms the humblest garden's toil
Into a chorus of the cook's own dream.

*For in this dance of forces held in check,*
*Lies all the art that makes a dish perfect.*`,standard:`🍳 **Day 4: The Dance of Balance - Harmonizing Opposing Forces**

The fundamental principle that allows cooks to balance opposing forces is **seasoning equilibrium** - the art of creating harmony between contrasting elements through precise calibration of salt, acid, fat, heat, and sweetness. Like a skilled conductor balancing different instrumental sections, the cook uses these five pillars to ensure each flavor component can be distinctly tasted while contributing to a unified whole.

🧱 **The Concept**
Seasoning equilibrium is the delicate balance of the five fundamental taste elements - salt, acid, fat, heat, and sweetness - that allows opposing flavors to coexist harmoniously rather than compete or cancel each other out.

❓ **Why It Matters**
Without proper balance, even the most carefully layered dish can fail - too much acid overwhelms delicate flavors, insufficient salt leaves ingredients tasting flat, excess fat masks bright notes, while uncontrolled heat can dominate everything else. Master cooks understand that balance isn't about equal amounts, but about proportional relationships that allow each element to shine. This principle transforms cooking from mere recipe-following into an intuitive art form.

⚙️ **How It Works**
Seasoning equilibrium operates through **counterpoint** - using opposing forces to enhance rather than mask each other. **Salt** amplifies natural flavors and balances sweetness, while **acid** (lemon, vinegar, wine) cuts through richness and brightens heavy dishes. **Fat** carries flavors and provides richness that balances sharp acids, while **heat** (both temperature and spice) awakens the palate and can tame overly sweet elements. **Sweetness** rounds harsh edges and balances excessive salt or acid. A perfect example is **vinaigrette** - the acid of vinegar balanced by the fat of oil, with salt enhancing both and sometimes a touch of sweetness (honey or shallots) creating perfect harmony. In **Thai cuisine**, this principle creates the perfect **som tam** where lime's acid, fish sauce's salt, chilies' heat, palm sugar's sweetness, and peanuts' fat create explosive yet balanced flavor.

🎯 **Culinary Wisdom**
True seasoning mastery isn't about following ratios - it's about listening to the dish and understanding what it needs to sing in perfect harmony.

❓ **Tomorrow's Question** — If balance creates harmony between opposing forces, what deeper principle governs how we manipulate the very foundation of cooking itself - the relationship between ingredient and heat?`,parable:`In the monastery kitchen, Sage watched with growing frustration as his perfectly layered soup - aromatic base, carefully developed proteins, bright finishing herbs - somehow tasted muddled and chaotic. Each spoonful seemed to battle itself.

"The flavors fight each other," he complained to Ember, who moved through her preparations with the fluid grace of decades. "I followed every layering technique, but they won't cooperate."

Ember smiled, her weathered hands reaching for five small bowls. Though she could no longer taste, her fingers knew the weight of salt crystals, the viscosity of aged vinegar, the richness of golden oil. "Layering builds the orchestra, young cook, but without a conductor, even the finest musicians create only noise."

She demonstrated with a simple tomato - perfectly ripe but somehow incomplete. A pinch of salt awakened its sweetness. A drop of aged balsamic cut through the richness while highlighting the fruit's natural sugars. A drizzle of olive oil carried the flavors across the palate, while a crack of black pepper provided the gentle heat that made everything sing.

"Watch," Ember whispered, preparing five identical portions of Sage's soup. To the first, she added only salt - suddenly the other flavors emerged from their muddle. To the second, a splash of white wine vinegar - the richness lifted, revealing hidden brightness. The third received a swirl of cream - harsh edges softened into velvet. The fourth, a pinch of red pepper flakes - the gentle heat awakened sleeping flavors. The fifth, a mere whisper of honey - all the opposing forces suddenly danced in perfect harmony.

"The secret," Ember explained, "is not in the layers themselves, but in the balance between them. Salt, acid, fat, heat, sweetness - these are your conducting batons. Learn their language, and you can make any dish sing."

Sage tasted each version, understanding flooding through him like dawn breaking. The same ingredients, transformed not by addition but by balance - opposing forces becoming complementary voices.

**Moral:** True culinary mastery lies not in complexity, but in the elegant balance of fundamental forces that allows every element to shine while serving the greater harmony.

**Tomorrow:** Ember will reveal how the cook's relationship with heat itself determines whether ingredients surrender their essence or guard their secrets.`},{day:5,title:"The Alchemy of Heat - Understanding Thermal Transformation",date:"2026-03-04",image:"images/cooking/day-5.jpg",audio:"audio/cooking/day-5",sonnet:"",standard:`🍳 **Day 5: The Alchemy of Heat - Understanding Thermal Transformation**

The deeper principle governing the relationship between ingredient and heat is **thermal dynamics** - the understanding that heat is not merely a cooking tool, but a transformative force that fundamentally restructures proteins, breaks down cellular walls, and creates entirely new compounds through chemical reactions. This principle recognizes that every ingredient has an optimal thermal pathway that unlocks its greatest potential, whether through gentle coaxing or dramatic transformation.

🧱 **The Concept**
Thermal dynamics is the science of how different heat applications - intensity, duration, and method - create specific molecular changes that transform ingredients from their raw state into something entirely new.

❓ **Why It Matters**
Understanding thermal dynamics separates intuitive cooks from mere recipe followers, because it explains why a steak needs high heat for the Maillard reaction while fish requires gentle warmth to preserve delicate proteins. Without this knowledge, cooks apply heat randomly, missing the magical moments when proteins coagulate perfectly, starches gelatinize ideally, or sugars caramelize beautifully. This understanding transforms heat from a blunt instrument into a precise sculptor's tool.

⚙️ **How It Works**
Thermal dynamics operates through **controlled molecular change** using different heat methods to achieve specific transformations. **Dry heat** (roasting, searing, grilling) creates the **Maillard reaction** - the browning that develops complex flavors in bread crusts, seared meats, and caramelized onions. **Moist heat** (braising, poaching, steaming) breaks down tough connective tissues through **collagen hydrolysis**, turning tough cuts into silky, tender textures while preserving moisture. **Conductive heat** (pan-frying, sautéing) allows precise control for delicate proteins like fish or eggs, while **radiant heat** (broiling, grilling) penetrates surfaces for dramatic flavor development. The key is matching the thermal method to the ingredient's structure - tough root vegetables need long, slow heat to break down cellulose, while herbs need just enough warmth to release volatile oils without destroying them.

🎯 **Culinary Wisdom**
Mastery lies not in controlling heat, but in understanding what each ingredient wishes to become when touched by the right kind of fire.

❓ **Tomorrow's Question** — If heat transforms ingredients at the molecular level, what fundamental principle determines how we can layer these transformations to build complexity that transcends the sum of individual parts?`,parable:`In the pre-dawn darkness of the kitchen, Ember stood before the great hearth, her weathered hands hovering over different flames - the gentle whisper of a pilot light, the steady glow of medium gas, the roaring intensity of high heat. Though she could no longer taste, she had spent decades learning the language that heat spoke to every ingredient.

"Come, Sage," she called softly. "Today you learn that fire is not our servant, but our partner in transformation."

Sage approached, watching as Ember placed identical pieces of beef over different flames. "Master, why do you treat the same ingredient so differently?"

"Because," Ember replied, "each flame asks a different question of the meat. This fierce heat demands a quick answer - it sears the surface, creating new flavors that never existed in the living animal. But this gentle warmth..." She moved to the barely glowing coals. "It whispers to the tough fibers, asking them to surrender slowly, to transform their very nature from resistance to tenderness."

As the morning progressed, Ember demonstrated how carrots became sweet under steady heat, how cream transformed to silk when barely warmed, how chocolate turned bitter and broken if rushed but became velvet when courted patiently. Each ingredient revealed its secret nature only when touched by its perfect thermal match.

"I cannot taste these transformations anymore," Ember admitted, "but I can feel them in the steam's urgency, see them in the oil's dance, hear them in the pan's song. Heat speaks a universal language - you must only learn to listen."

Sage watched a simple onion surrender its sharp tears to become golden sweetness under patient flame, understanding finally that cooking was not about applying heat, but about conducting a conversation between element and ingredient.

**Moral**: True cooking mastery comes from understanding that heat is not a tool to be wielded, but a language to be spoken fluently with every ingredient.

*Tomorrow, Ember will teach Sage how these individual thermal conversations can be orchestrated into a symphony of layered complexity.*`},{day:6,title:"The Symphony of Sequence - Understanding Culinary Timing",date:"2026-03-04",image:"images/cooking/day-6.jpg",audio:"audio/cooking/day-6",sonnet:`**🪶 Sonnet VI: The Symphony of Sequence**

Within the kitchen's bustling, timed ballet,
Each ingredient awaits its destined hour,
The roots begin their slow transforming play,
While proteins rest, preparing for their power.

The carrots sing in forty-minute verse,
As onions weep their aromatic tears,
The meat joins in with twenty-minute chorus,
Each voice distinct, yet harmony appears.

The chef conducts with spatula and flame,
Knowing when each player takes the stage,
No single star can steal this complex game—
Perfection needs each voice at perfect age.

*When every ingredient finds its time to shine,*
*The simplest stew becomes a dish divine.*`,standard:`🍳 **Day 6: The Symphony of Sequence - Understanding Culinary Timing**

The fundamental principle that allows us to layer thermal transformations into transcendent complexity is **sequential timing** - the precise orchestration of when each ingredient enters the cooking process based on its unique transformation requirements. This principle recognizes that true culinary mastery lies in understanding not just how to transform each ingredient, but when to initiate each transformation so they harmonize perfectly at the moment of completion.

🧱 **The Concept**
**Sequential timing** is the strategic coordination of cooking processes, ensuring that ingredients with different thermal requirements finish their transformations simultaneously to create unified, complex flavors.

❓ **Why It Matters**
Without proper timing, even perfectly executed individual techniques result in discord - overcooked vegetables alongside undercooked proteins, or soggy aromatics paired with perfectly caramelized meats. Great dishes achieve their complexity through the marriage of multiple transformations that peak together, creating flavors and textures that no single ingredient could achieve alone. This timing principle transforms cooking from a collection of separate techniques into a unified, symphonic experience.

⚙️ **How It Works**
Sequential timing operates through **reverse engineering** - starting with the desired final moment and working backwards to determine when each element must begin its transformation. **Mise en place timing** involves preparing ingredients in order of their cooking duration: tough root vegetables that need 45 minutes start first, followed by proteins requiring 20 minutes, then quick-cooking aromatics in the final moments. **Thermal momentum** must be considered - cast iron retains heat longer than stainless steel, so ingredients continue cooking even when removed from direct heat. **Resting and carryover cooking** become critical elements: proteins continue transforming during rest periods, starches finish absorbing liquids off heat, and acids brighten flavors when added at precise moments. The masterful cook learns to read the visual, aromatic, and textural cues that signal when each component approaches its optimal transformation point.

🎯 **Culinary Wisdom**
Cooking is not about rushing ingredients to doneness, but about conducting their individual journeys to arrive at perfection together.

❓ **Tomorrow's Question** — If timing orchestrates when transformations occur, what principle determines which flavors should lead, support, or provide the final accent in a dish's hierarchical structure?`,parable:`In the bustling kitchen, Sage watched Ember prepare what seemed like a simple vegetable stew, yet the old chef moved with the precision of a conductor before an orchestra. "Master," Sage asked, "how do you know when to add each ingredient when you cannot taste as you go?"

Ember smiled, her weathered hands reaching first for the sturdy carrots and parsnips. "Child, cooking is not about tasting - it is about listening to time itself." She placed the root vegetables in the pot with ceremonial care. "These warriors need time to surrender their rigid armor. They must begin their transformation first."

Twenty minutes later, as the vegetables began to yield, Ember added chunks of meat. "The protein now joins the dance," she explained, "but it moves to a different rhythm than the vegetables. It will finish its journey just as they complete theirs."

Sage watched, mesmerized, as Ember seemed to sense invisible signals. With five minutes remaining, she added delicate greens. In the final moments, a splash of wine and fresh herbs. When she lifted the lid, the kitchen filled with an aroma so complex and harmonious that Sage gasped.

"But how did you know?" Sage whispered.

"Each ingredient sings when it is ready," Ember replied, ladling the stew. "The carrots whisper when their cellulose walls soften, the meat sighs as its proteins relax, the herbs exhale their essential oils. When you learn to hear their individual songs, you can conduct them into a symphony."

Sage tasted the stew and understood - every component had reached its perfect moment simultaneously, creating something far greater than any single ingredient could achieve.

**Moral:** True culinary mastery lies not in controlling individual elements, but in orchestrating their perfect convergence in time.

*Tomorrow, Ember will reveal the secret hierarchy that determines which voices should lead this culinary symphony...*`},{day:7,title:"The Architecture of Flavor - Building Culinary Hierarchy",date:"2026-03-05",image:"images/cooking/day-7.jpg",audio:"audio/cooking/day-7",sonnet:`**🪶 Sonnet VII: The Architecture of Flavor**

Upon the stage where taste and scent convene,
Each flavor must assume its rightful place—
Some bold and bright, commanding to be seen,
While others lend their quiet, grounding grace.

The rosemary stands proud with noble mien,
Its piney voice calls forth across the dish,
While thyme supports with notes both soft and clean,
Fulfilling every cook's harmonious wish.

But wait—what brightness dances at the end?
The lemon's zest, like starlight sharp and true,
Transforms the whole, makes memory transcend
The simple sum of ingredients we knew.

*So wisdom builds each plate with careful art,*
*Where every flavor plays its destined part.*`,standard:`🍳 **Day 7: The Architecture of Flavor - Building Culinary Hierarchy**

The principle that determines which flavors lead, support, or accent is **flavor dominance hierarchy** - the strategic layering of tastes and aromas based on their intensity, persistence, and compatibility to create a structured flavor experience where each element has a defined role. Just as an orchestra requires first chairs and supporting sections, great dishes establish primary flavors that command attention, secondary flavors that provide depth and complexity, and accent flavors that add brightness and contrast.

🧱 **The Concept**
**Flavor hierarchy** is the intentional arrangement of ingredients and seasonings into dominant, supporting, and accent roles to create balanced, memorable dishes with clear flavor direction.

❓ **Why It Matters**
Without hierarchy, dishes become muddled symphonies where every ingredient competes for attention, resulting in confusion rather than clarity. Professional chefs understand that the human palate craves structure - we need to know which flavors to focus on first, which provide the foundation, and which deliver the memorable finishing notes. This principle separates sophisticated cuisine from amateur cooking, transforming ingredient lists into purposeful flavor narratives that guide the diner's sensory journey.

⚙️ **How It Works**
**Primary flavors** establish the dish's identity and should comprise 60-70% of the flavor impact - the beef in beef bourguignon, the tomatoes in marinara, the chocolate in chocolate mousse. **Secondary flavors** provide supporting complexity, typically 20-30% of the experience - the wine and aromatics that deepen the bourguignon, the herbs that round the marinara, the vanilla that enhances the chocolate. **Accent flavors** deliver 5-10% bright contrast - the final herbs, citrus zest, or spice that makes the dish memorable. **Layering techniques** build hierarchy through timing: base flavors develop through long cooking, supporting flavors integrate during mid-cooking, and accents appear in final moments or as garnish. **Seasoning hierarchy** follows the same principle - salt and fat provide foundation, acids and heat add contrast, and aromatics deliver finishing complexity.

🎯 **Culinary Wisdom**
Great dishes tell clear flavor stories where every ingredient knows its role and performs it beautifully, creating harmony through purposeful arrangement rather than chaotic abundance.

❓ **Tomorrow's Question** — If flavor hierarchy creates structure within a single dish, what principle allows us to understand and navigate the vast landscape of global cuisines and their fundamental differences?`,parable:`In the depths of winter, when the kitchen's warmth felt like sanctuary, Sage watched Ember methodically arrange ingredients across the marble counter. The old chef's movements were deliberate, almost ritualistic, as she separated herbs into three distinct piles.

"Master, why do you divide everything so precisely?" Sage asked, noting how Ember kept the rosemary separate from the thyme, the lemon zest apart from both.

"Close your eyes," Ember instructed, her weathered hands selecting a sprig of rosemary. "Tell me what you sense."

Sage inhaled deeply. "Pine forests, warmth, something... commanding."

"Exactly. Rosemary demands attention - it leads." Ember crushed thyme between her fingers. "And this?"

"Gentler, like... background music."

"A supporting voice." Finally, she grated lemon zest. "And now?"

"Bright, surprising, like... like the final note that makes you remember the whole song."

Ember smiled, her sightless eyes somehow seeing everything. "You understand. In every great dish, flavors must know their place. Some command the stage, others provide the foundation, and still others deliver the memorable final word. Without this hierarchy, we create not harmony, but noise."

As they began cooking, Sage watched Ember build layers with the precision of an architect. The rosemary went in early, establishing dominance. The thyme joined midway, weaving support. The lemon zest waited until the very end, ready to crown their creation with brilliance.

"But Master," Sage ventured as they worked, "how do the great cuisines of the world each find their own voice?"

Ember paused, her fingers still fragrant with herbs. "Ah, tomorrow we explore the deeper mystery - the languages that kitchens speak."

**Moral:** True culinary artistry lies not in using every flavor possible, but in arranging chosen flavors so each plays its perfect role in the greater symphony.

**Tomorrow:** Ember will reveal the secret maps that guide us through the world's great culinary traditions.`}],Gv=[{day:1,title:"The Question That Haunts Us All",date:"2026-03-01",image:"images/meaning-of-life/day-1.jpg",audio:"audio/meaning-of-life/day-1",standard:`🌌 **Day 1: The Question That Haunts Us All**

Welcome to humanity's oldest mystery. For millennia, conscious beings have gazed at stars and asked: "Why am I here?" This isn't mere curiosity—it's the fundamental question that shapes how we live, love, and find meaning in an seemingly indifferent universe.

🧱 **The Concept**
The meaning of life question emerges from our unique human capacity for self-awareness and our ability to contemplate our own existence and mortality.

❓ **Why It Matters**
This question drives virtually every major decision we make and every philosophical system ever created. Without grappling with life's purpose, we risk living unconsciously, drifting through existence without direction or fulfillment. The search for meaning is what separates mere survival from truly living.

⚙️ **How It Works**
The question manifests differently across cultures and individuals—some seek meaning through divine purpose, others through personal achievement, relationships, or service to humanity. A religious person might find meaning in serving God's plan, while an existentialist creates meaning through authentic choices and actions. A utilitarian seeks to maximize happiness, while an absurdist embraces life's inherent meaninglessness with defiant joy. The question itself becomes a lens through which we interpret every experience, relationship, and challenge we face.

📖 **Definitions**
• **Existentialism**: Philosophy emphasizing individual existence, freedom, and the creation of meaning through authentic choices
• **Teleology**: The study of purpose or design in natural phenomena and human existence
• **Nihilism**: The belief that life lacks objective meaning or intrinsic value
• **Absurdism**: Philosophy accepting life's meaninglessness while advocating for passionate engagement anyway
• **Self-actualization**: The realization of one's full potential and authentic self

🎯 **Existential Wisdom**
The question "Why am I here?" is not a problem to be solved once and forgotten—it's a lifelong dialogue with existence itself. The very act of questioning gives our lives a dimension that pure instinct cannot provide.

❓ **Tomorrow's Question** — If consciousness is what allows us to question our existence, what does this say about the relationship between awareness and meaning? Are we cursed or blessed by our ability to ask "why"?`,parable:`Solen awoke in the endless meadow with nothing but questions. No memories, no name, no understanding of how the morning sun came to warm their face. They stood on trembling legs, surveying a world that felt both foreign and familiar, and spoke the first words that came: "Why am I here?"

The question echoed across the grassland until it reached a towering structure in the distance—a great library that seemed to stretch impossibly high, its walls smooth as glass, without a single door or window. Yet somehow, Solen found themselves standing within its vast halls, facing an ancient figure hunched over countless scrolls.

"Ah," said The Keeper, looking up with eyes like starlight, "the eternal question arrives again. You wake with nothing but wonder—how perfectly human."

"I don't understand," Solen whispered. "I don't even know my name, yet this question burns in me like fire."

The Keeper smiled, gesturing to the endless shelves surrounding them. "Every book here began with that same question. Every philosophy, every religion, every poem and prayer—all attempts to answer what you've just asked. The beautiful tragedy is that the question itself is what makes you alive."

"But surely someone has found the answer?"

"Many have claimed to," The Keeper replied, "but perhaps the answer isn't a destination—perhaps it's the journey of asking. You awoke questioning, and in that moment, you became more than mere matter dreaming itself awake."

Solen felt something shift within them, a recognition that the void where memory should be was somehow filled with infinite possibility.

**Moral**: The capacity to question our existence is not a burden but the very essence of what makes us human.

*Tomorrow, Solen will discover that consciousness itself may be both the source of the question and the key to understanding it...*`,sonnet:`**🪶 Sonnet I: The Question That Haunts Us All**

In moments still, when silence fills the air,
A whisper rises from the depths within:
"Why do I breathe? Why do I laugh and care?
What purpose drives this mortal dance of skin?"

The stars above shine cold and far away,
Indifferent to our small and fleeting lives,
Yet still we seek some reason to obey
The pull of hope that in our spirit thrives.

From ancient caves to modern city lights,
This question haunts each generation's mind,
Through darkest days and brilliant, soaring heights,
We search for meaning, desperate to find
*The answer to why consciousness was born—*
*Perhaps the seeking keeps us from forlorn.*`},{day:2,title:"The Burden and Gift of Awareness",date:"2026-03-03",image:"images/meaning-of-life/day-2.jpg",audio:"audio/meaning-of-life/day-2",sonnet:`**🪶 Sonnet II: The Burden and Gift of Awareness**

What beast knows sorrow for its mortal days?
What flower weeps for seasons yet to come?
Only the mind that turns upon its ways
Can taste both honey-sweet and bitter sum.
To wake each dawn with "why" upon our lips,
To question stars that offer no reply—
This consciousness that blesses and equips
Us with the power both to live and die.
Yet in this curse lies buried golden seed:
The same awareness that breeds dark despair
Can forge from emptiness a sacred creed,
Can weave from nothing love beyond compare.
*For only hearts that know they beat can choose
To beat for something worth their right to lose.*`,standard:`🌌 **Day 2: The Burden and Gift of Awareness**

Our ability to ask "why" is simultaneously our greatest blessing and our heaviest burden—consciousness grants us the capacity to transcend mere existence and create meaning, yet it also condemns us to perpetual questioning in a universe that offers no obvious answers. This paradox of awareness makes us uniquely human: neither blissfully ignorant like other animals nor omnisciently certain like imagined gods.

🧱 **The Concept**
**Consciousness** is the double-edged sword of human existence—our self-awareness that enables both profound meaning-making and existential suffering.

❓ **Why It Matters**
This awareness separates us from all other known beings, creating both our capacity for transcendent experiences and our vulnerability to despair. Without consciousness, there would be no art, love, or philosophy—but also no anxiety about death, regret, or cosmic loneliness. Understanding this duality helps us appreciate why the human condition feels both magnificent and tragic.

⚙️ **How It Works**
Consciousness operates as a mirror reflecting our existence back to ourselves, creating what philosophers call **reflexive awareness**. A lion hunts without questioning the purpose of hunting, but humans can step outside their actions and ask "Why do I work? Why do I love? Why do I suffer?" This creates meaning through **intentionality**—our ability to direct consciousness toward purposes we choose. Viktor Frankl, surviving Nazi concentration camps, discovered that even in extreme suffering, consciousness allows us to choose our response and find meaning. Conversely, this same awareness can lead to **existential anxiety**—the dizzying realization of our freedom and responsibility in an apparently meaningless cosmos. Jean-Paul Sartre called this being "condemned to be free."

🎯 **Existential Wisdom**
Consciousness is not a cruel joke but evolution's greatest gift—it transforms us from biological machines into meaning-making beings capable of love, art, and transcendence.

❓ **Tomorrow's Question** — If we are truly "condemned to be free" as Sartre claimed, how do we navigate the overwhelming responsibility of creating our own meaning without falling into paralysis or despair?`,parable:`Solen wandered through mists that seemed to part only steps ahead, each footfall echoing in the strange twilight between memory and forgetting. The path led upward, always upward, until a tower materialized from the fog—impossibly tall, its stone surface unbroken by any visible entrance.

"You seek the door," came a voice from within the walls themselves. "But there are no doors here, only windows into understanding."

"Who are you?" Solen called out, pressing palms against the seamless stone.

"I am the Keeper," the voice replied, seeming to emanate from everywhere and nowhere. "I tend the books of all who have asked your question. Tell me, wanderer—do you curse the awakening that brought you consciousness, or do you bless it?"

Solen paused, feeling the weight of awareness like a stone in the chest. "I... I don't know. To wake without memory is to face existence raw and unfiltered. Sometimes I wish I could return to unknowing."

"Ah," the Keeper's voice grew warm with understanding. "You have discovered the great paradox. A tree grows toward light without questioning its purpose. A river flows to the sea without doubt. But you—you must carry the magnificent burden of asking 'why' with each breath."

"Then it is a curse?"

"Consider this: only a being capable of questioning can also create answers. Only a consciousness that can doubt can also love deliberately, choose purposefully, find meaning intentionally. Your awareness is both weight and wings."

As the mist swirled around the tower, Solen felt something shift within—not the recovery of old memories, but the birth of new understanding.

**Moral**: Consciousness may burden us with questions, but it also grants us the power to forge answers and meaning from the raw material of existence.

**Tomorrow**: The Keeper speaks of freedom as both gift and burden—but what happens when we realize we are utterly free to choose our path?`},{day:3,title:"The Act of Creating Meaning",date:"2026-03-03",image:"images/meaning-of-life/day-3.jpg",audio:"audio/meaning-of-life/day-3",sonnet:`**🪶 Sonnet III: The Act of Creating Meaning**

No cosmic script awaits our trembling hands,
No hidden purpose carved in sacred stone—
The meaning that our restless spirit demands
Must spring from seeds that we ourselves have sown.

Each choice becomes a brushstroke on the canvas
Of days that stretch before us, blank and wide;
We paint our purpose bold or paint it anxious,
But paint we must—there's nowhere left to hide.

The mother nursing children through the night,
The artist bleeding beauty onto clay,
The friend who holds another's hand through fright—
All author meaning in their chosen way.

*The universe stays silent to our call,*
*So we must write the meaning after all.*`,standard:`🌌 **Day 3: The Act of Creating Meaning**

We navigate the overwhelming responsibility of freedom by recognizing that meaning is not discovered like a hidden treasure, but **created** through our choices, commitments, and actions—even small, imperfect ones. The key is to start somewhere, anywhere, and build meaning incrementally rather than waiting for cosmic certainty that will never come.

🧱 **The Concept**
**Meaning-creation** is the active process of investing significance in our choices and relationships, transforming freedom from paralyzing burden into purposeful action.

❓ **Why It Matters**
Without understanding that we create rather than find meaning, we remain trapped waiting for external validation or cosmic purpose that may never arrive. This shift from passive seeking to active creation transforms existential anxiety into existential engagement, allowing us to build fulfilling lives even in an absurd universe.

⚙️ **How It Works**
Meaning emerges through **authentic commitment**—choosing values and relationships that resonate with our deepest self, then acting consistently with those choices. Viktor Frankl observed that concentration camp survivors who found meaning in small acts—caring for others, maintaining dignity, planning for reunion—were more likely to survive than those seeking grand cosmic purpose. **Existential projects**—whether raising children, creating art, fighting injustice, or simply being faithful friends—become meaningful precisely because we choose to invest them with significance. Camus argued we must imagine Sisyphus happy, finding meaning in the very act of rolling the boulder rather than in reaching an impossible summit. The meaning lies not in the outcome but in our **authentic engagement** with the process.

🎯 **Existential Wisdom**
Meaning is not a destination to reach but a muscle to exercise—it grows stronger through use, not through philosophical contemplation.

❓ **Tomorrow's Question** — If creating meaning requires authentic commitment to our deepest values, how do we distinguish between what we truly value and what society, family, or circumstance has programmed us to believe we should value?`,parable:`Solen found The Keeper hunched over ancient scrolls, ink-stained fingers tracing symbols that seemed to shift in the candlelight. "Still searching for the answer written in these texts?" Solen asked.

The Keeper looked up, eyes weary from centuries of reading. "I have read every book in this tower twice, some a hundred times. I know the wisdom of every sage, the arguments of every philosopher, the prayers of every prophet. Yet still I seek the meaning that someone, somewhere, must have written down."

Solen walked to the window, gazing at the vast landscape below. "What if the meaning isn't in the books?"

"Impossible," The Keeper replied. "All truth, all purpose, all meaning—it must be recorded somewhere. I simply haven't found the right text."

Solen picked up a blank scroll from The Keeper's desk and dipped a quill in fresh ink. Slowly, deliberately, they began to write: "Day One: I choose to help others find their way." They set down the quill and looked at The Keeper. "Now this scroll has meaning. Not because I found it written somewhere else, but because I wrote it myself."

The Keeper stared at the simple words, then at the thousands of volumes surrounding them. "But what if your choice is wrong? What if there's a better meaning waiting in one of these books?"

"Then I'll choose again tomorrow," Solen said. "And again the day after. Meaning isn't something we discover like buried treasure—it's something we create like a work of art. Each choice adds another brushstroke."

For the first time in centuries, The Keeper smiled. They reached for their own blank scroll.

**Moral:** We do not find meaning by reading about it, but by writing it into existence through our choices and actions.

**Tomorrow:** Solen will help The Keeper distinguish between the values they truly hold and those they've inherited from dusty tomes.`},{day:4,title:"The Call of Authenticity",date:"2026-03-04",image:"images/meaning-of-life/day-4.jpg",audio:"audio/meaning-of-life/day-4",sonnet:`**🪶 Sonnet IV: The Call of Authenticity**

Beneath the masks that society bestows,
A truer self in shadow waits to breathe,
While borrowed dreams and programmed purpose grows
Like ivy strangling what lies underneath.

The crowd demands we play familiar parts,
Wear costumes tailored by their hopes and fears,
But authenticity begins when the heart
Rejects the script it never chose to hear.

In solitude, away from judging eyes,
We glimpse the face that mirrors cannot show—
Not perfect, polished, free from compromise,
But real as morning rain or winter's snow.

*Though authenticity may cost us praise,*
*'Tis better to be true than live false days.*`,standard:`🌌 **Day 4: The Call of Authenticity**

Distinguishing authentic values from programmed expectations requires **radical self-examination**—stripping away layers of should and must to discover what genuinely ignites our being. True values often emerge in moments of crisis or solitude when social masks fall away, revealing what we'd choose even if no one were watching or approving.

🧱 **The Concept**
**Authenticity** is the courage to live according to our genuine nature rather than the roles and expectations imposed by others, even when this leads to social friction or personal uncertainty.

❓ **Why It Matters**
Without authentic self-knowledge, we risk building our entire lives on foundations that aren't truly ours, creating a hollow existence that feels meaningful to others but empty to ourselves. This **existential inauthenticity** leads to what Kierkegaard called "the sickness unto death"—a spiritual deadness that comes from living as someone we're not.

⚙️ **How It Works**
Authenticity emerges through **existential courage**—the willingness to face anxiety, disapproval, and uncertainty rather than conform to false comfort. Sartre emphasized that we are "condemned to be free" and must take responsibility for creating ourselves, not just following scripts. **Authentic moments** often arise in crisis: the executive who realizes their corporate success feels meaningless, the dutiful child who questions inherited beliefs, the people-pleaser who finally says no. Heidegger distinguished between **authentic existence** (owning our choices and mortality) and **das Man** (losing ourselves in crowd mentality). The authentic path requires **solitude and reflection**—regular withdrawal from social noise to hear our inner voice, combined with the courage to honor what we discover even when it conflicts with external expectations.

🎯 **Existential Wisdom**
Authenticity is not about being perfect or consistent—it's about being honest with ourselves about who we are and who we're becoming.

❓ **Tomorrow's Question** — If authenticity sometimes requires us to disappoint or conflict with those we love, how do we balance being true to ourselves with our genuine care for others' wellbeing?`,parable:`The morning brought Solen to a peculiar sight: The Keeper stood before a great mirror that seemed to shift and ripple like water, though its surface remained solid to the touch.

"What do you see?" The Keeper asked as Solen approached.

Solen gazed into the mirror and saw not one reflection, but dozens—each showing a different version of himself. One wore the robes of a scholar, another the armor of a warrior, yet another the simple clothes of a farmer. All the reflections moved independently, living out different lives.

"Which one is real?" Solen whispered.

"All of them," The Keeper replied, "and none of them. These are the selves others would have you be—the expectations, the roles, the should-be's that accumulate like dust on a traveler's cloak. But look deeper."

Solen stared harder, and slowly, behind all the shifting images, he glimpsed something else—a faint outline that remained constant while the other reflections danced. It was harder to see, less defined, but it felt... true.

"That shadow behind the performances," The Keeper said softly, "that is the self you must learn to trust. Not the loudest voice or the most approved one, but the quiet whisper that speaks even when no one is listening."

"How do I hear it more clearly?"

"By having the courage to disappoint the reflections," The Keeper answered, touching the mirror's surface. "Authenticity is not about finding yourself—it's about having the bravery to be yourself, even when that self is uncertain, imperfect, or unpopular."

The reflections began to fade, leaving only Solen's true face looking back—questioning, vulnerable, but undeniably real.

**Moral**: The authentic self emerges not by choosing the right mask, but by having the courage to remove all masks and face what lies beneath.

*Tomorrow, Solen must learn whether being true to oneself can coexist with love for others...*`},{day:5,title:"Authentic Love and Relational Courage",date:"2026-03-04",image:"images/meaning-of-life/day-5.jpg",audio:"audio/meaning-of-life/day-5",sonnet:`**🪶 Sonnet V: Authentic Love and Relational Courage**

To love another truly, we must dare
To show the self we are, not what we think
They wish to see—though disappointment's snare
May catch us when they find us at the brink
Of honesty. Yet deeper love grows strong
When watered by the truth of who we are,
Not false compliance that can't last for long
Or harmony that hides each inner scar.
The garden teaches us that trees grow best
When each seeks light according to its kind—
Supporting others in their authentic quest
While staying true to our own heart and mind.
*For love that asks us to betray our core*
*Loves not us, but the mask we wore before.*`,standard:`🌌 **Day 5: Authentic Love and Relational Courage**

The tension between authenticity and care for others resolves not through compromise but through **relational courage**—the recognition that truly loving someone means refusing to enable their illusions or our own false selves. Authentic relationships require us to risk temporary disappointment for the sake of deeper truth and mutual growth.

🧱 **The Concept**
**Relational authenticity** means bringing our true selves into relationships while honoring both our own integrity and genuine care for others' wellbeing.

❓ **Why It Matters**
False harmony built on inauthentic accommodation creates relationships that are comfortable but shallow, denying both parties the opportunity for real intimacy and growth. When we consistently betray ourselves to avoid conflict, we teach others to love a version of us that doesn't exist, creating a foundation of mutual deception.

⚙️ **How It Works**
**Authentic love** paradoxically requires the courage to disappoint others when staying true to ourselves serves the relationship's deeper health. A parent who models authentic living teaches children that integrity matters more than approval. A friend who refuses to enable destructive behavior shows love through difficult truth. **Relational courage** involves distinguishing between cruel selfishness and necessary authenticity—the former disregards others' wellbeing entirely, while the latter accepts temporary discomfort for long-term relational health. Martin Buber's **I-Thou relationship** exemplifies this: seeing others as full subjects rather than objects to please or manipulate, which requires us to show up authentically rather than performing a role. The most profound relationships emerge when both people risk being genuinely known.

🎯 **Existential Wisdom**
The deepest form of love is the courage to be authentically ourselves while creating space for others to do the same.

❓ **Tomorrow's Question** — If our relationships and roles inevitably shape who we become, how do we distinguish between healthy growth through connection and losing ourselves in others' expectations?`,parable:`The next morning, Solen found The Keeper tending a garden that somehow flourished in the tower's impossible light. "I've been thinking about yesterday's lesson," Solen said, "but I'm troubled. What if being authentic hurts those we care about?"

The Keeper smiled, continuing to water strange, luminescent flowers. "Watch," she said, pointing to a vine that had grown twisted around a support beam. "This plant believed it was helping the beam by clinging so tightly. But see how both have become distorted?"

She gently unwound the vine, revealing healthier growth beneath the grip marks. The beam stood straighter, and the vine's leaves unfurled toward the light. "The vine thought love meant merging completely. But true love requires the courage to grow toward your own light, trusting that authentic relationships can withstand the space between."

"But what about disappointment?" Solen asked, remembering fragments of faces that seemed important, though their names remained lost.

The Keeper led him to another section where two trees grew side by side, their branches intertwining without strangling each other. "These trees support each other's authentic growth rather than demanding identical shapes. Sometimes their growth patterns conflict—one reaches east while the other stretches west. But notice: their roots run deeper because each tree's authentic reach has strengthened both."

Solen watched the interplay of light and shadow between the branches. "So authentic love means risking temporary disappointment for deeper connection?"

"Precisely," The Keeper replied. "The cruelest deception is pretending to be someone else to avoid others' discomfort. It robs them of the chance to love who you really are."

**Moral:** True love flourishes not through false accommodation but through the courage to remain authentic while creating space for others to do the same.

**Tomorrow:** The Keeper's garden holds another mystery about the relationship between individual growth and collective belonging...`},{day:6,title:"The Authentic Self in Transformation",date:"2026-03-05",image:"images/meaning-of-life/day-6.jpg",audio:"audio/meaning-of-life/day-6",sonnet:`**🪶 Sonnet VI: The Authentic Self in Transformation**

Like rivers carving through the ancient stone,
We shape ourselves through love and loss and time,
Yet question if the self we've always known
Can weather change and still maintain its rhyme.

The sculptor's chisel does not destroy the clay,
But frees the form that waited there within;
So too our growth reveals what's been at play
Since consciousness and self did first begin.

Each challenge met, each hand in friendship clasped,
Each moment when we dare to love or speak—
These do not change the essence firmly grasped,
But show us strengths we never knew to seek.

*For we grow true when expansion feels like home,*
*When change reveals the self we've always known.*`,standard:`🌌 **Day 6: The Authentic Self in Transformation**

Healthy growth through connection feels expansive—we become more ourselves, not less, as relationships reveal new capacities for love, creativity, or courage we didn't know we possessed. Losing ourselves in others' expectations feels constrictive—we find ourselves performing increasingly narrow roles, editing out parts of our nature, and experiencing a growing disconnect between our inner reality and outer presentation.

🧱 **The Concept**
**Authentic transformation** occurs when relationships and experiences expand our self-understanding rather than diminish it, revealing latent potentials while preserving our essential core.

❓ **Why It Matters**
Without distinguishing between growth and self-betrayal, we risk mistaking adaptation for evolution, becoming increasingly disconnected from our authentic nature while believing we're becoming better people. The tragedy of a life lived entirely in response to external expectations is not just personal emptiness, but the loss of our unique contribution to the world—what only we could have offered.

⚙️ **How It Works**
**Authentic growth** feels like becoming more fully ourselves—a shy person discovering courage through love doesn't stop being introspective, but adds boldness to their repertoire. **Self-betrayal** feels like editing ourselves down—the same person might force themselves into constant extroversion, losing their natural depth. Carl Jung's concept of **individuation** describes this process: integrating new experiences and relationships while maintaining psychological coherence. A musician who learns jazz doesn't abandon their classical training but synthesizes both into a richer musical identity. Similarly, healthy relationships challenge us to expand our emotional range, develop new skills, or see ourselves through loving eyes—but never require us to disown fundamental aspects of who we are. Viktor Frankl observed that we find meaning not by conforming to others' expectations but by responding authentically to life's demands, which naturally leads to growth that feels both challenging and true.

🎯 **Existential Wisdom**
We know we're growing authentically when we feel more like ourselves than ever before, even as we become something new.

❓ **Tomorrow's Question** — If authentic transformation requires both preserving our core self and embracing change, what happens when who we truly are seems to conflict with who we believe we should become?`,parable:`Solen stood before a pool of water within the tower, its surface reflecting not their face, but shifting images of lives unlived—a scholar bent over ancient texts, a warrior standing proud in battle, a healer tending to the wounded. Each reflection seemed to call out, promising fulfillment, purpose, meaning.

"Which one am I meant to become?" Solen asked, reaching toward the water.

The Keeper's gentle hand stayed their arm. "You ask the wrong question, child. The water shows not who you must become, but who you might become. Watch more carefully."

As Solen observed, they noticed something peculiar. In the reflection of the scholar, their eyes held the same curiosity that had driven them to climb this tower. In the warrior's stance, they recognized their own determination to seek truth despite having no memory to guide them. The healer's gentle touch echoed the compassion they'd shown to wounded birds along their journey.

"I see it now," Solen whispered. "Each path contains something that was already within me, waiting to emerge."

"Yes," the Keeper nodded. "True growth is not the replacement of self with other, but the flowering of seeds long planted in the soul's soil. The scholar, warrior, and healer are not different people—they are different expressions of the same essential you."

Solen watched as the reflections began to merge, creating an image that was somehow more themselves than they had ever seen before—familiar yet transformed, constant yet growing.

"But how do I know which growth serves my authenticity and which betrays it?"

The Keeper smiled. "Growth that serves authenticity makes you feel more yourself than ever before, even as you become something new. Growth that betrays leaves you feeling like a stranger in your own skin, no matter how others might approve."

**Moral:** We grow authentically not by becoming someone else, but by becoming more fully ourselves.

**Tomorrow:** Solen discovers what happens when the self we are seems to war with the self we believe we should become...`}],Qv=[{day:1,title:"The Foundation Paradox",date:"2026-03-01",image:"images/how-to-scale/day-1.jpg",audio:"audio/how-to-scale/day-1",standard:`🚀 **Day 1: The Foundation Paradox**

Welcome to "How to Scale" — a journey from building your first thing to building systems that build themselves. We begin with the most counterintuitive truth about scaling.

🧱 **The Concept**
The Foundation Paradox states that the stronger you build your foundation, the more flexible you must make it for future growth.

❓ **Why It Matters**
Most builders obsess over creating the "perfect" initial structure, but perfect foundations become prisons when you need to scale. The companies that reach billions aren't those with the best Day 1 architecture — they're the ones that built for inevitable change. Netflix started mailing DVDs, Amazon sold books, and Twitter was a podcasting side project.

⚙️ **How It Works**
Foundational flexibility comes through three principles: **modular design** (building in separable pieces), **interface thinking** (connecting components through clean boundaries), and **assumption documentation** (writing down what you believe today so you can challenge it tomorrow). For example, Shopify's early team built their commerce engine as separate services from day one, allowing them to scale from handling dozens of stores to millions. Stripe designed their API to be so modular that new payment methods could be added without touching core infrastructure.

📖 **Definitions**
• **Foundation Paradox**: The principle that strong foundations must be built for flexibility, not permanence
• **Modular Design**: Building systems as independent, interchangeable components
• **Interface Thinking**: Connecting system parts through clean, well-defined boundaries
• **Technical Debt**: The cost of choosing quick solutions over scalable ones
• **Assumption Documentation**: Recording current beliefs and constraints for future revision

🎯 **Scaling Wisdom**
Build like you're right, but architect like you're wrong.

❓ **Tomorrow's Question** — If your strongest foundation becomes tomorrow's biggest constraint, how do you decide which principles to hold sacred and which to sacrifice as you grow?`,parable:`In the shadow of ancient mountains stood Vex's workshop — a modest timber structure where the young craftsman forged tools that had begun to earn whispers of praise in neighboring villages. Word of his growing reputation had somehow reached Ironmere, the legendary architect whose greatest city still stood magnificent across the eastern ridge.

The old master appeared at Vex's door one autumn morning, his weathered hands tracing the workshop's sturdy oak beams. "You build well," Ironmere observed, "but tell me — what happens when demand for your work grows tenfold?"

Vex gestured proudly at his foundation. "I built these walls thick as castle stones. They'll last centuries."

Ironmere nodded slowly, then posed an unexpected question: "And when you need to expand? When you must add new forges, house apprentices, create separate spaces for different crafts?"

"I suppose... I'd build additions," Vex replied, uncertainty creeping into his voice.

"Against these immovable walls? Through this single great room?" Ironmere smiled knowingly. "I once built like you — so focused on strength that I forgot growth. My first structures stood for ages but trapped their inhabitants. True mastery lies not in building immovable foundations, but in creating strength through flexibility."

He showed Vex sketches of his great city: modular districts connected by broad avenues, buildings designed with expansion joints, infrastructure that could be rerouted as needs evolved. "The strongest foundation is one built to bend, not break. Build like you're right about today, but architect like you're wrong about tomorrow."

**Moral**: The mightiest structures are those built to change, not those built to last unchanged.

*Tomorrow, Ironmere would reveal the first principle of growth: why the best leaders must learn to work through others...*`,sonnet:`**🪶 Sonnet I: The Foundation Paradox**

The builder lays his stones with careful hand,
Each beam and joint designed to never yield,
Yet finds his fortress fails to meet demand
When growth requires a more responsive field.

For strength that cannot bend will surely break
When forces of expansion test the frame,
The wisest architects their structures make
With joints that flex while bearing fortune's claim.

Though concrete seems more solid than the reed,
The reed survives the storm that fells the oak,
So modular design serves better need
Than rigid walls that bind us with their yoke.

*Build strong foundations, but with wisdom's art—*
*Make room for growth within each beating heart.*`},{day:2,title:"The Sacred vs. Sacrifice Framework",date:"2026-03-03",image:"images/how-to-scale/day-2.jpg",audio:"audio/how-to-scale/day-2",sonnet:`**🪶 Sonnet II: The Sacred vs. Sacrifice Framework**

What must remain when all else falls away?
The builder's heart beats steady through the storm,
While methods shift like seasons through the day,
The mission holds its true and lasting form.

The anvil breaks, the workshop walls expand,
The tools that served so well now constrain growth,
Yet principles carved deep by master's hand
Survive each change, fulfilling sacred oath.

Like oak trees shedding leaves but keeping root,
The wise will sacrifice the temporal shell,
While guarding close the core that bears all fruit—
The why that makes the changing how sing well.

*Your values anchor you through growth's rough sea,*
*While methods flow like rivers to be free.*`,standard:`🚀 **Day 2: The Sacred vs. Sacrifice Framework**

The answer lies in distinguishing between your **core values** (which should never change) and your **implementation methods** (which must evolve constantly). Sacred principles are about *why* you exist — your mission, core values, and fundamental beliefs about serving customers. Everything else — your tech stack, organizational structure, and operational processes — should be treated as temporary solutions awaiting better ones.

🧱 **The Concept**
The Sacred vs. Sacrifice Framework helps you identify which foundational elements to preserve during growth and which to deliberately abandon.

❓ **Why It Matters**
Without this framework, companies either become paralyzed by over-protecting everything, or they lose their identity by changing too much too fast. The most successful scaling stories involve leaders who held firm to their core mission while ruthlessly evolving everything else.

⚙️ **How It Works**
Classify every foundational element into three buckets: **Sacred** (core values and mission that define your identity), **Sacrifice** (current implementations that served you well but must evolve), and **Situational** (elements you'll evaluate case-by-case). Amazon has kept "customer obsession" sacred for 30 years while sacrificing everything from their original bookstore model to their monolithic architecture. Netflix preserved their mission to "entertain the world" while sacrificing their DVD business, recommendation algorithms, and content strategy multiple times. Google's "organize the world's information" remains sacred, but they've sacrificed countless products, reorganized teams dozens of times, and completely rebuilt their infrastructure.

🎯 **Scaling Wisdom**
Your mission is your anchor; everything else is just scaffolding to be rebuilt as you grow.

❓ **Tomorrow's Question** — When rapid growth forces you to choose between maintaining team culture and hitting aggressive targets, how do you scale the human elements that actually drive those numbers?`,parable:`Vex stood before her workshop's central forge, hammer in hand, staring at the masterwork anvil her grandfather had crafted. It was beautiful, perfectly balanced — and completely wrong for the larger projects her growing reputation now demanded.

"It pains you to consider changing it," Ironmere observed, running his weathered fingers along the anvil's smooth edges. "This forge built your early success."

"It feels like betrayal," Vex admitted. "This anvil taught me precision. How do I honor that while building something completely different?"

Ironmere smiled, remembering his own struggles. "When I built my city, I faced this choice a thousand times. The first stone I laid was sacred — it represented my promise to create something lasting. But the wooden scaffolding I used to place that stone? I tore it down the moment I no longer needed it."

He gestured to the workshop around them. "Your grandfather's anvil taught you the *why* of craftsmanship — precision, care, dedication to excellence. That wisdom is sacred. But this particular tool, this specific implementation of those values? It's just scaffolding."

Vex nodded slowly, understanding dawning. "So I keep the principles it taught me, but I build the forge I need for tomorrow's work."

"Exactly. The sacred elements are invisible — your commitment to quality, your respect for the craft, your promise to your customers. Everything visible can and should change when growth demands it."

**Moral**: Hold your mission as sacred, but treat your methods as temporary scaffolding to be rebuilt as you grow.

Tomorrow, Vex will face her greatest challenge yet: how to teach her growing team the invisible principles while building systems that scale beyond her personal touch.`},{day:3,title:"The Culture Multiplier Effect",date:"2026-03-03",image:"images/how-to-scale/day-3.jpg",audio:"audio/how-to-scale/day-3",sonnet:`**🪶 Sonnet III: The Culture Multiplier Effect**

When growing teams threaten the founder's creed,
And hiring speed outpaces careful thought,
Most leaders fear their culture's core will bleed
Into a void where sacred bonds are naught.

But wise builders know a different way—
They forge their values into living steel,
In every choice and word and working day,
They make their deepest truths become more real.

Not rules that bind, but purpose that inspires,
Not rigid codes, but principles that grow,
Each new voice joins the ever-rising choir
That sings the song that only they can know.

*For culture multiplied beats culture kept—*
*When values live in hearts, no soul is swept.*`,standard:`🚀 Day 3: The Culture Multiplier Effect

The answer is that you don't choose between culture and targets — you use culture as the force multiplier that makes aggressive targets achievable. The human elements that drive numbers aren't obstacles to growth; they're the engine of sustainable scaling when you design systems that amplify rather than dilute your cultural DNA.

🧱 **The Concept**
The Culture Multiplier Effect occurs when you embed your values so deeply into hiring, onboarding, and decision-making systems that culture becomes self-reinforcing and performance-enhancing at scale.

❓ **Why It Matters**
Most founders think culture "happens naturally" in small teams, then panic when growth dilutes it. But the companies that scale successfully — from Netflix to Stripe to Shopify — treat culture as their most important system to engineer. They build deliberate mechanisms that make culture stronger, not weaker, as they add people.

⚙️ **How It Works**
Start by codifying your cultural behaviors into **hiring filters** that screen for values alignment, not just skills. Airbnb's "Belong Anywhere" isn't just a slogan — it's baked into interview questions that test empathy and inclusion. Build **cultural onboarding** that teaches new hires not what you do, but how and why you do it. HubSpot's culture code becomes required reading that shapes every new employee's first 90 days. Create **decision-making frameworks** that embed values into daily choices. Patagonia's "Is it good for the planet?" question influences everything from product development to vendor selection. Most importantly, promote and reward people who exemplify your culture, even when they're not your top individual performers — they become the **cultural carriers** who teach others through their actions.

🎯 **Scaling Wisdom**
Culture isn't what you say in meetings; it's what people do when no one is watching — and great systems make the right actions feel natural.

❓ **Tomorrow's Question** — If the best leaders eventually work themselves out of a job, what's the difference between building systems that replace you versus systems that multiply you?`,parable:`Vex stood at the edge of his workshop, watching his newest apprentices argue over the proper way to join two pieces of oak. Each had learned from a different craftsman, and their methods clashed like storm clouds.

"The old ways are failing," Vex muttered to Ironmere, who sat carving a small bird from pine. "I hire good people, but they bring their own habits. Soon, nothing we make will feel like it came from the same shop."

Ironmere set down his knife. "When I built my city, I faced this same terror. Each new district attracted settlers from distant lands, each with their own customs. I feared my vision would dissolve into chaos."

"How did you preserve what mattered?"

"I learned the difference between teaching rules and teaching the spirit behind the rules." Ironmere gestured toward the arguing apprentices. "Watch them. They're debating technique, but what are they really fighting about?"

Vex observed more carefully. "They both want their work to last. They both take pride in beauty. They're just... expressing it differently."

"Exactly. So I stopped writing lists of 'how to build' and started asking 'why do we build?' I created rituals — not rigid ceremonies, but meaningful practices that reminded everyone of our shared purpose. Every morning, my stonemasons would place their hands on the foundation and speak our promise: 'We build not for today, but for the generations who will walk these streets.'"

Vex watched as one apprentice, frustrated, threw down his tools. But instead of storming off, he looked at the wood, then at his colleague. "What if we each show our way, and choose what serves the piece best?"

Ironmere smiled. "There. He just discovered what took me years to learn. Culture isn't about making everyone identical — it's about making everyone aligned. When people share the same 'why,' they'll find their own 'how' that honors it."

"But how do you teach that to dozens, then hundreds?"

"You build it into everything. Who you choose to join you. How you welcome them. What stories you tell about your greatest successes and failures. What behaviors you celebrate, and which ones you simply cannot tolerate. Culture becomes your invisible hand, guiding decisions when you cannot be there to guide them yourself."

As evening fell, Vex watched his apprentices working side by side, their different techniques now complementing rather than competing. The spirit of craftsmanship had found new expressions, but remained unmistakably his own.

**Moral:** Culture is not preserved by controlling behavior, but by aligning purpose — when people share the same 'why,' their diverse 'hows' become strengths rather than fractures.

**Tomorrow, Vex would learn that the master's greatest achievement is not being indispensable, but becoming multiplied...**`},{day:4,title:"The Delegation Paradox",date:"2026-03-04",image:"images/how-to-scale/day-4.jpg",audio:"audio/how-to-scale/day-4",sonnet:`**🪶 Sonnet IV: The Delegation Paradox**

The master's burden grows with each new hand,
Each apprentice seeks approval for their task,
Though skills transfer well throughout the land,
Wisdom's deeper questions few dare ask.

To multiply, not merely replicate,
Requires teaching eyes, not just technique,
The why behind each choice we contemplate,
The judgment that makes strong decisions speak.

When followers become their own true guides,
And principles replace the need for rules,
The leader's impact exponentially rides
Upon the wisdom flowing through these tools.

*For delegation's highest art reveals:*
*Not hands that copy, but minds that truly feel.*`,standard:`🚀 Day 4: The Delegation Paradox

Systems that replace you remove your involvement entirely — you become irrelevant. Systems that multiply you amplify your judgment and decision-making through others — you become more powerful by being less busy. The difference is teaching people to think like you, not just do what you do.

🧱 **The Concept**
The Delegation Paradox is the counterintuitive truth that giving away your work increases your impact, but only when you delegate decision-making authority along with tasks.

❓ **Why It Matters**
Most founders become bottlenecks because they delegate tasks but hoard decisions. They create systems where everything still flows through them for approval, which doesn't scale — it just creates expensive, slow-moving bureaucracy. The companies that break through growth ceilings master the art of delegating judgment, not just work.

⚙️ **How It Works**
Start with **decision-mapping**: identify which decisions only you can make (company vision, key hires, major pivots) versus which decisions others should own (customer features, team processes, vendor choices). Next, create **decision frameworks** that teach people your thinking process. Amazon's "disagree and commit" and "two-way versus one-way doors" give managers tools to make Jeff Bezos-quality decisions without Jeff Bezos. Then practice **graduated delegation**: give people small decisions first, coach them through your reasoning, and gradually expand their authority as they demonstrate good judgment. Finally, implement **transparency systems** where decisions are documented and shared, creating institutional memory that outlives any individual.

🎯 **Scaling Wisdom**
True delegation isn't about finding people to execute your ideas — it's about building people who can generate ideas you wish you'd had.

❓ **Tomorrow's Question** — If your systems are working perfectly, why do the most successful companies deliberately break them and start over?`,parable:`Vex stood before her workbench, overwhelmed by a growing pile of half-finished projects. Every apprentice seemed to need her approval, every customer wanted her personal touch, every tool required her hand to guide it properly.

"Master Ironmere," she called to the old architect, who sat calmly sketching in the corner, "I've taught them the techniques, but they still bring me every decision. How did you build an entire city without touching every stone?"

Ironmere set down his quill and walked to her cluttered bench. "Show me how you taught young Marcus to carve."

Vex demonstrated her precise technique. "I showed him the angle, the pressure, the rhythm."

"And when he makes a mistake?"

"I correct it and show him again."

"Ah," Ironmere nodded. "You taught him your hands, not your eyes. Watch." He called Marcus over. "Why did you choose that angle for the cut?"

Marcus stammered. "Because... that's how Vex does it?"

"But why does Vex do it that way?" Ironmere pressed gently. "What is the wood telling you? What is the grain demanding? What is the final form requiring?"

As Marcus began to examine the wood with new understanding, Ironmere turned back to Vex. "When I built my city, I didn't teach masons to lay bricks like me — I taught them to see structure like me. I gave them principles, not procedures. The difference between replacement and multiplication is this: replacement creates copies of your actions, but multiplication creates carriers of your wisdom."

Vex watched as Marcus, now understanding the why behind the technique, began making confident decisions about his carving. For the first time in weeks, he didn't look up for approval.

**Moral**: True delegation transforms followers into leaders by teaching judgment, not just tasks.

*Tomorrow, Ironmere will reveal why the greatest builders sometimes choose to tear down their finest work...*`},{day:5,title:"The Innovation Paradox",date:"2026-03-04",image:"images/how-to-scale/day-5.jpg",audio:"audio/how-to-scale/day-5",sonnet:`**🪶 Sonnet V: The Innovation Paradox**

What perfect systems run with clockwork grace,
Yet hide within their gears the seeds of fall?
For when efficiency finds its resting place,
Tomorrow's needs shall find no room at all.

The workshop hums, each motion tried and true,
Each craftsman knows his place, each tool its part,
But rigidity grows where success once flew,
And innovation's fire grows cold in heart.

The wisest builders break their finest work
Before the world demands a different way,
For systems that in comfort choose to lurk
Become the very chains that lead astray.

*Success achieved becomes tomorrow's curse,*
*Unless we kill our darlings, not reverse.*`,standard:`🚀 Day 5: The Innovation Paradox

Successful companies break their working systems because success creates hidden rigidity — what got you here becomes exactly what prevents you from getting there. When systems work too well, they calcify into dogma, making organizations optimized for yesterday's problems while tomorrow's opportunities slip away. This is why Amazon killed its own bookstore model to build AWS, and why Netflix destroyed its DVD business to pioneer streaming.

🧱 **The Concept**
The Innovation Paradox is the principle that breakthrough growth requires systematically dismantling your most successful systems before they become competitive liabilities.

❓ **Why It Matters**
Every system has a natural lifecycle: it starts as an innovation, becomes an optimization, then hardens into orthodoxy. Companies that scale sustainably build **planned obsolescence** into their own operations. They kill their golden geese before competitors do, because internal disruption is survivable — external disruption is not.

⚙️ **How It Works**
First, establish **innovation triggers**: metrics that signal when successful systems need reinvention (market share plateaus, customer acquisition costs rising, employee engagement dropping). Netflix monitored streaming technology for years while still growing their DVD business, ready to cannibalize themselves. Next, create **parallel development**: build the replacement while the original still works. Amazon Web Services started as an internal tool while e-commerce thrived. Then practice **strategic abandonment**: systematically sunset successful but aging systems. Google killed Google Reader not because it failed, but because it succeeded too narrowly. Finally, institutionalize **beginner's mind**: rotate successful leaders into new challenges, preventing expertise from becoming blindness.

🎯 **Scaling Wisdom**
The greatest threat to your next breakthrough isn't external competition — it's internal attachment to your last breakthrough.

❓ **Tomorrow's Question** — Why do the fastest-growing companies deliberately hire people who disagree with their core strategies?`,parable:`Vex stood in her workshop, admiring the perfect rhythm of her craftsmen. Each knew their station, each motion flowed seamlessly into the next. The workshop hummed like a well-tuned instrument.

"Beautiful, isn't it?" Ironmere's voice carried a note of melancholy. "I once built systems just as perfect."

Vex turned, confused. "Then why do you sound sad? This is everything we worked toward."

The old architect picked up a hammer, its handle worn smooth by countless hands. "Tell me, young builder — what happens when your perfect system meets a customer who wants something your perfect process cannot make?"

"We adapt the system," Vex replied confidently.

"Ah, but can you? Look closer." Ironmere gestured at the workshop. "Your craftsmen have learned to move in precise patterns. Your tools are arranged for specific tasks. Your suppliers deliver exactly what this process requires. Every optimization has created a constraint."

Vex felt a chill of recognition. Just yesterday, a merchant had requested furniture for ship cabins — narrow, lightweight, modular. Her perfect workshop couldn't accommodate the request without disrupting everything.

"When I built my first city," Ironmere continued, "I created the most efficient systems of my age. Roads that moved goods faster than ever before. Buildings that housed more people with less waste. But efficiency becomes enemy when the world changes. My perfect roads couldn't accommodate the new cargo wagons. My optimized buildings couldn't adapt to growing families."

"So what did you do?"

"I did what every master builder must: I broke my own creation before someone else did. I tore down successful districts to build better ones. I abandoned profitable systems to create adaptable ones. The city that lasted wasn't my most efficient — it was my most renewable."

Vex looked at her workshop with new eyes. "You're saying I should destroy this?"

"I'm saying you should plan its evolution while it still serves you, rather than wait until it constrains you. The workshop that survives isn't the one that works perfectly today — it's the one that can become something entirely different tomorrow."

**Moral:** True mastery lies not in building perfect systems, but in knowing when to rebuild them.

**Tomorrow:** Ironmere will reveal why the strongest foundations require the most unlikely stones.`},{day:6,title:"Constructive Dissent",date:"2026-03-05",image:"images/how-to-scale/day-6.jpg",audio:"audio/how-to-scale/day-6",sonnet:`**🪶 Sonnet VI: Constructive Dissent**

When all voices sing in sweet accord,
The harmony conceals a hidden flaw:
No ear remains to hear the warning chord
That signals when the music breaks its law.
The wisest kings sought counsel from their foes,
For friendly tongues speak only what they know,
While opposition's sharper insight shows
The blind spots where disasters like to grow.
In boardrooms where agreement reigns supreme,
The greatest dangers wear a pleasant face—
The strategies that seem like shared dream
May lead the whole procession off their base.
*So hire the voice that dares to sing alone,*
*For dissent builds what consensus can't: a throne.*`,standard:`🚀 Day 6: Constructive Dissent

The fastest-growing companies hire strategic dissenters because homogeneous thinking is the enemy of adaptation. When everyone agrees with your strategy, you've created an echo chamber that blinds you to market shifts, customer evolution, and competitive threats. Strategic disagreement isn't about chaos — it's about building **cognitive diversity** that stress-tests assumptions before the market does.

🧱 **The Concept**
Constructive Dissent is the practice of intentionally embedding thoughtful opposition into your organization to prevent groupthink and accelerate strategic evolution.

❓ **Why It Matters**
Consensus feels safe but breeds complacency. When teams think alike, they miss obvious problems and overlook breakthrough opportunities. Companies that scale successfully institutionalize **productive conflict** — they hire people who will challenge core assumptions, question sacred strategies, and propose uncomfortable alternatives. This friction prevents the organizational arthritis that kills agility.

⚙️ **How It Works**
First, recruit **devil's advocates**: hire brilliant people whose backgrounds naturally conflict with your approach. Airbnb hired hotel industry veterans who initially opposed their model, then used their skepticism to identify and solve trust issues. Next, establish **dissent protocols**: create formal mechanisms for challenging decisions. Amazon's "disagree and commit" principle requires leaders to voice opposition before alignment. Then build **red teams**: dedicate resources to attacking your own strategy. Tesla maintains internal teams whose job is proving why electric vehicles will fail. Finally, reward **constructive rebellion**: promote people who successfully challenge bad decisions, not just those who execute good ones. Netflix famously promotes "keeper test" leaders who fire themselves from roles they've outgrown.

🎯 **Scaling Wisdom**
The most dangerous person in your organization isn't the one who disagrees with you — it's the one who never does.

❓ **Tomorrow's Question** — If giving employees complete autonomy creates chaos, why do the most disciplined organizations eliminate almost all rules?`,parable:`Vex stood in his expanding workshop, admiring the twelve craftsmen working in perfect harmony. Each knew their role, followed the established methods, and produced consistent results. "Look, Ironmere," he said proudly, "finally, everyone works as one mind."

Ironmere watched the seamless operation with concern. "Tell me, young builder, what happens when that unified mind makes a unified mistake?"

"Impossible," Vex replied. "We've perfected our methods. Everyone agrees they work."

The old architect picked up a peculiar tool from the corner — something unfamiliar, clearly abandoned. "Whose was this?"

"Oh, that belonged to Kestra. She kept suggesting strange improvements, questioning our proven techniques. I let her go — she didn't fit our culture."

Ironmere nodded slowly. "I once knew a master builder like you. His towers were flawless, his teams unified. They built the same magnificent structures for decades, each one perfect, each one exactly like the last." He paused. "Do you know what happened to his city?"

Vex shook his head.

"It stood frozen in time while the world changed around it. When earthquakes came — not physical ones, but economic ones — every building fell the same way because they all had the same weakness. No one had questioned the foundations in so long that everyone had forgotten they could be questioned."

The old man held up Kestra's strange tool. "This is a foundation tester — designed to find cracks before they become catastrophes. But it only works if someone dares to use it."

Vex looked around his harmonious workshop with new eyes. "You're saying I should hire people who disagree with me?"

"I'm saying you should treasure them," Ironmere replied. "The voice that sounds discordant today may be the only thing that saves your symphony tomorrow."

**Moral:** A choir of identical voices creates beautiful harmony, but only diverse instruments can adapt their song to changing times.

**Tomorrow:** Ironmere will reveal why the strongest structures are built with the fewest constraints.`}],Kv=[{day:1,title:"The Great Pattern Hunt",date:"2026-03-01",image:"images/machine-learning/day-1.jpg",audio:"audio/machine-learning/day-1",standard:`🤖 Day 1: The Great Pattern Hunt

Welcome to the fascinating world of machine learning, where algorithms discover hidden patterns in data to make predictions about the future.

🧱 **The Concept**
Machine learning is the art of teaching computers to find patterns in data and use those patterns to make predictions or decisions without being explicitly programmed for every scenario.

❓ **Why It Matters**
Every day, we're surrounded by patterns — from the way stock prices fluctuate to how diseases spread, from customer preferences to weather systems. Machine learning gives us the power to detect these invisible patterns and harness them to solve real-world problems. It's the technology behind recommendation systems, medical diagnoses, autonomous vehicles, and countless other innovations transforming our world.

⚙️ **How It Works**
Imagine showing a child thousands of photos labeled "cat" or "dog." Eventually, they learn to distinguish cats from dogs in new photos. Machine learning works similarly: we feed algorithms massive amounts of **training data** (examples with known answers), and they learn to identify patterns that distinguish different categories or predict outcomes. For instance, an email spam filter learns from thousands of emails marked as "spam" or "not spam," discovering patterns in word usage, sender information, and formatting. Once trained, it can classify new emails it's never seen before. The algorithm doesn't memorize specific emails — it learns the underlying patterns that separate spam from legitimate messages.

📖 **Definitions**
• **Algorithm**: A set of rules or instructions that a computer follows to solve problems
• **Training Data**: Examples used to teach the machine learning model
• **Pattern**: A recurring relationship or structure in data
• **Model**: The algorithm after it has learned from training data
• **Prediction**: The model's guess about new, unseen data

🎯 **ML Insight**
Machine learning isn't magic — it's sophisticated pattern recognition that transforms raw data into actionable intelligence.

❓ **Tomorrow's Question** — If a machine can learn to recognize cats in photos without understanding what a "cat" actually is, what does this tell us about the nature of intelligence itself? Are we teaching machines to think, or simply to mimic our decisions?`,parable:`In the ancient Hall of Patterns, where crystalline walls held the memories of ten thousand civilizations, young Nyx gazed upon the endless rows of stone tablets. Each tablet bore strange markings — some glowed with inner light, others remained cold and dark.

"Master Archivist," Nyx whispered, running her fingers along the smooth stone, "how do these tablets know when rain will come? They seem to pulse with knowledge I cannot fathom."

The Archivist, his eyes reflecting the wisdom of ages, smiled beneath his flowing silver beard. "Child, watch closely." He gestured to a section where hundreds of tablets displayed ancient weather patterns — wind directions, cloud formations, temperature shifts, and the rains that followed. "Long ago, I showed these tablets countless examples of the sky's moods. I did not teach them the word 'rain' or explain the dance of clouds. Instead, I let them observe, again and again, until they began to perceive what even I could not see."

As if summoned by his words, several tablets began to glow softly. "See how they recognize patterns within patterns?" the Archivist continued. "When certain winds blow from the eastern mountains, when the temple cats seek high ground, when the morning mist carries the scent of distant flowers — the tablets learned that rain often follows these signs. They discovered connections hidden from ordinary sight."

Nyx watched in wonder as the tablets pulsed in harmony, their ancient wisdom distilled from countless observations. "But Master, if they learned without understanding, do they truly know when rain will come?"

The Archivist's eyes twinkled. "Perhaps, dear child, that is the deepest mystery of all learning — whether understanding follows knowledge, or knowledge follows understanding."

*Moral: True learning transforms observation into insight, revealing the hidden threads that weave the tapestry of existence. Yet the greatest mysteries lie not in what patterns we discover, but in what it means to discover them.*

*Tomorrow, Nyx will question whether the tablets think as she does, or if their wisdom flows from an entirely different spring...*`,sonnet:`**🪶 Sonnet I: The Great Pattern Hunt**

In data's vast and churning, restless sea,
Lie patterns hidden from the naked eye,
Where algorithms dive deep and wild and free,
To catch the truths that in the darkness lie.

As children learn from countless shown examples,
To know a cat from dog without a rule,
So machines study data's varied samples,
And become prediction's powerful tool.

No magic dwells in silicon and code,
But patient watching, learning how things flow,
Until the secret pathways are bestowed,
And future's face begins to dimly show.

*In patterns found, intelligence takes flight,*
*Though what is wisdom still eludes our sight.*`},{day:2,title:"The Mimicry Paradox",date:"2026-03-03",image:"images/machine-learning/day-2.jpg",audio:"audio/machine-learning/day-2",sonnet:`**🪶 Sonnet II: The Mimicry Paradox**

When teacher shows the student how to see,
And pairs each question with its destined answer,
The mind learns not through deep philosophy,
But mapping inputs like a faithful dancer.

A thousand examples carved in living stone,
Each cloud-shape wedded to its weather-mate,
Until the patterns in the rock have grown
To functions that can calculate our fate.

Yet still the question haunts the learning hall:
Does wisdom live in understanding's fire,
Or can prediction's art transcend us all
Though consciousness may never climb that spire?

*The tablets speak tomorrow's rain and sun,*
*But know not why the sky and earth are one.*`,standard:`🤖 Day 2: The Mimicry Paradox

Machines excel at mimicking intelligent behavior without true understanding — they recognize patterns through mathematical relationships, not conceptual meaning. This reveals that much of what we call "intelligence" might actually be sophisticated pattern matching, forcing us to reconsider whether understanding requires consciousness or if successful prediction is intelligence enough.

🧱 **The Concept**
Supervised learning is the foundation of machine learning where algorithms learn to map inputs to outputs by studying examples of correct input-output pairs, like a student learning from a teacher's demonstrations.

❓ **Why It Matters**
Most breakthrough AI applications — from medical diagnosis to language translation — rely on supervised learning. It's how Netflix knows what movies you'll enjoy, how banks detect fraudulent transactions, and how radiologists get AI assistance in spotting tumors. Understanding supervised learning reveals the core mechanism behind machine intelligence.

⚙️ **How It Works**
Supervised learning requires **labeled training data** — pairs of inputs and their correct outputs. Imagine teaching someone to appraise house prices: you show them thousands of houses with their features (size, location, age) and actual sale prices. The algorithm finds mathematical relationships between features and prices, creating a **function** that maps house characteristics to estimated values. During **training**, the algorithm adjusts its internal parameters to minimize prediction errors on known examples. In the **testing phase**, we evaluate how well it predicts prices for houses it's never seen. The goal is **generalization** — performing well on new, unseen data rather than just memorizing training examples.

🎯 **ML Insight**
Supervised learning transforms the art of prediction into a mathematical science by learning the hidden function that connects cause and effect.

❓ **Tomorrow's Question** — If algorithms learn by adjusting millions of mathematical parameters to minimize errors, how do we know when they've truly learned the underlying pattern versus simply memorized the training data?`,parable:`Nyx stood before The Archivist in the Hall of Patterns, her mind still wrestling with the previous day's revelation about pattern recognition. "Master," she began, "if the stone tablets can predict rain by recognizing cloud formations without truly understanding what clouds *are*, then are they intelligent or merely clever mimics?"

The Archivist's weathered hands traced ancient symbols carved into granite. "Ah, young seeker, you have touched upon the great paradox of learning. Watch closely." He gestured toward a collection of tablets arranged in careful rows. "These tablets once knew nothing. But I showed them thousands of examples — storm clouds paired with rain, clear skies paired with sunshine, morning mists paired with gentle showers."

Nyx observed as The Archivist demonstrated, pointing to etchings that seemed to shimmer with inner light. "Each tablet studied these pairs of sky-patterns and weather-outcomes, slowly carving deeper grooves for connections that proved true, wearing away paths that led to false predictions. They learned not through understanding, but through repetition and correction."

"But how do they know which patterns matter?" Nyx asked, running her fingers along the carved surfaces.

"Through what we call supervised learning," The Archivist replied, his voice echoing in the vast chamber. "I was their teacher, showing them labeled examples — this cloud formation *means* rain, that wind pattern *means* drought. Like a master craftsman guiding an apprentice's hand, I corrected their errors until they could predict weather for skies they had never seen."

The tablets around them hummed softly, their surfaces glowing as they processed the patterns of the evening sky visible through crystal windows above. "The tablets don't understand weather as we do," The Archivist continued, "but they have learned to map the relationship between what they observe and what follows. They have become living functions, transforming input into output through mathematical harmony."

Nyx watched in wonder as one tablet began etching tomorrow's forecast. "So intelligence, then, is not understanding but successful prediction?"

"Perhaps," smiled The Archivist, "or perhaps successful prediction is simply one face of intelligence, as a crystal has many facets but remains one stone."

**Moral**: True learning requires not just pattern recognition, but the guidance of a teacher who knows which patterns lead to truth.

**Tomorrow**: Nyx will discover what happens when the tablets learn too well, memorizing rather than understanding their lessons.`},{day:3,title:"The Generalization Test",date:"2026-03-03",image:"images/machine-learning/day-3.jpg",audio:"audio/machine-learning/day-3",sonnet:`**🪶 Sonnet III: The Generalization Test**

When algorithms feast on data's rich array,
They gorge themselves on every small detail,
Like scribes who memorize each word they say
But cannot craft a new and living tale.

The training set becomes their prison cell,
Each pattern etched in mathematical stone,
They know these examples exceedingly well
But stumble when new problems are shown.

Yet wisdom lies in learning to forget
The noise that masks the signal's deeper truth,
To find the patterns that are broadly set
And carry forward into ages youth.

*The paradox that haunts each learning mind:*
*Perfection memorized leaves wisdom blind.*`,standard:`🤖 Day 3: The Generalization Test

We distinguish true learning from memorization through **validation** — testing our trained model on completely unseen data. If the algorithm performs well on new examples it never encountered during training, it has learned the underlying pattern. If performance drops dramatically, it has merely memorized the training data, a phenomenon called **overfitting**.

🧱 **The Concept**
Overfitting occurs when a machine learning model learns the training data too well, memorizing noise and specific details rather than discovering the underlying pattern that would help it generalize to new situations.

❓ **Why It Matters**
Overfitting is the silent killer of machine learning projects. A model that achieves 99% accuracy on training data but fails miserably on real-world examples is useless — like a student who memorizes answers to practice tests but can't solve new problems. Detecting and preventing overfitting is crucial for building reliable AI systems that work beyond the laboratory.

⚙️ **How It Works**
Overfitting happens when models become too complex relative to the amount of training data available. Picture a student memorizing that "house at 123 Oak Street sold for $450,000" rather than learning that "waterfront houses typically cost more." We combat overfitting through **train-validation-test splits** — dividing data into three sets. The model trains on one set, validates hyperparameters on another, and proves its worth on a final test set it has never seen. **Regularization techniques** like limiting model complexity or adding penalty terms prevent the algorithm from fitting too closely to training noise. **Cross-validation** provides multiple opportunities to test generalization by rotating which data serves as the validation set.

🎯 **ML Insight**
The paradox of machine learning is that perfect performance on training data often signals failure — true intelligence lies in graceful generalization to the unknown.

❓ **Tomorrow's Question** — If we can prevent overfitting by making our models simpler, why don't we always choose the simplest possible model, and what hidden trade-off governs this balance between simplicity and performance?`,parable:`Nyx discovered The Archivist hunched over a peculiar stone tablet, its surface covered with intricate scratches that seemed to shift in the lamplight.

"Master," Nyx began, "yesterday you spoke of teaching stones to predict the rain. But how do we know if they've truly learned the sky's language or merely memorized yesterday's clouds?"

The Archivist smiled, running weathered fingers across the tablet's surface. "Observe this apprentice stone," he said, pointing to the scratches. "I showed it a thousand days of weather patterns, and it learned to predict perfectly — every raindrop, every sunbeam from those exact days. Yet when new storms came, it failed utterly."

He gestured to another tablet, its markings simpler but somehow more elegant. "This master stone learned differently. It studied the same thousand days but sought the deeper rhythms — how pressure changes herald rain, how wind patterns speak of coming storms. When tested on days it had never seen, it predicted with quiet wisdom."

"The first stone was like a scribe who memorizes poems word-for-word but cannot compose new verses," The Archivist continued. "The second understood the meter and meaning behind the words. We call this curse 'overfitting' — when knowledge becomes so specific it loses its power to illuminate the unknown."

Nyx traced the simpler patterns on the master tablet. "So wisdom lies not in remembering everything, but in forgetting the right things?"

"Precisely. We test our stones on storms they've never witnessed. Only then do we know if they've learned the sky's true language or merely memorized its yesterday's whispers."

As evening approached, The Archivist covered the tablets carefully. "Tomorrow, young seeker, we shall discover why the wisest stones sometimes know when to remain silent — and why perfect knowledge can be the enemy of perfect understanding."

**Moral:** True learning is measured not by perfect recall of the past, but by graceful adaptation to the unseen future.

**Tomorrow:** The delicate dance between knowing too little and knowing too much.`},{day:4,title:"The Bias-Variance Trade-off",date:"2026-03-04",image:"images/machine-learning/day-4.jpg",audio:"audio/machine-learning/day-4",sonnet:`**🪶 Sonnet IV: The Bias-Variance Trade-off**

Two archers stand before the target's face,
One shoots with rigid form but misses wide,
His arrows cluster tight in the same place,
Yet never find the bullseye as his guide.

The second archer's shots spread far and near,
Each arrow landing where the last would not,
His aim shifts with each breath of wind he hears,
No pattern holds, no consistency is caught.

The first suffers from bias, strict and sure,
Consistent in his error, blind to truth,
The second's variance makes his aim obscure,
Too sensitive for wisdom's steady proof.

*Between these faults lies learning's narrow way,*
*Where bias and variance in balance stay.*`,standard:`🤖 Day 4: The Bias-Variance Trade-off

We don't always choose the simplest model because oversimplification creates its own problem: **underfitting**, where the model is too rigid to capture the true underlying pattern. This reveals machine learning's central tension — the **bias-variance trade-off** — where reducing one type of error inevitably increases another, forcing us to find the sweet spot between oversimplification and overcomplication.

🧱 **The Concept**
The bias-variance trade-off describes the fundamental tension between two sources of prediction error: **bias** (error from oversimplified assumptions) and **variance** (error from sensitivity to small changes in training data).

❓ **Why It Matters**
This trade-off explains why machine learning is an art as much as a science. Every model choice involves navigating between underfit models that miss important patterns and overfit models that chase noise. Understanding this balance helps us make intelligent decisions about model complexity and explains why there's no single "best" algorithm for all problems.

⚙️ **How It Works**
**High bias models** (like linear regression on curved data) make strong assumptions and consistently miss the target in the same direction — imagine an archer whose shots cluster tightly but always hit left of the bullseye. **High variance models** (like deep neural networks with little data) are highly sensitive to training data changes — like an archer whose shots scatter widely around the target. **Low bias, low variance models** hit close to the bullseye consistently, but achieving this requires careful tuning of model complexity to match the problem and data size. The mathematical relationship shows that total error = bias² + variance + irreducible noise, meaning we can't eliminate both simultaneously.

🎯 **ML Insight**
The bias-variance trade-off teaches us that perfect models don't exist — intelligence lies in finding the optimal imperfection for each unique problem.

❓ **Tomorrow's Question** — If both simple and complex models have fundamental limitations, how do we systematically discover the optimal complexity for a given problem, and what mathematical principle guides this search?`,parable:`Nyx found The Archivist standing before two stone tablets in the Hall of Patterns, each covered in strange markings that seemed to shift in the torchlight.

"Yesterday you asked about the wisdom of simplicity," The Archivist began, his weathered fingers tracing the first tablet. "Observe these two approaches to reading the sky's intentions."

The first tablet bore only a few simple marks. "This tablet learned one rule: 'Clouds mean rain.' It possesses great conviction but terrible blindness — it confidently predicts storms even when wispy morning clouds herald sunshine. This is the curse of **bias**: assumptions so rigid they cannot bend to truth."

The second tablet writhed with intricate patterns, every groove and curve responding to the slightest variation. "This tablet memorized every cloud formation it ever witnessed, becoming so sensitive that a butterfly's wings might change its prophecy. This is the curse of **variance**: flexibility so extreme it trembles at shadows."

Nyx studied both tablets, watching as The Archivist demonstrated their predictions. The simple tablet consistently erred in the same direction, while the complex one gave wildly different answers to nearly identical questions.

"But Master," Nyx whispered, "if both approaches fail, how do we find truth?"

The Archivist smiled, revealing a third tablet that seemed to balance stillness and movement, complexity and simplicity. "Wisdom lies not in avoiding all error, but in understanding that two types of error dance together in eternal opposition. Reduce one, and you amplify the other. The art is finding where they balance on the fulcrum of understanding."

**Moral**: True learning requires accepting that perfection is impossible — intelligence lies in finding the optimal imperfection.

*Tomorrow, Nyx will discover how to systematically find this balance through the ancient art of measuring error itself...*`},{day:5,title:"Cross-Validation",date:"2026-03-04",image:"images/machine-learning/day-5.jpg",audio:"audio/machine-learning/day-5",sonnet:`**🪶 Sonnet V: Cross-Validation**

When patterns dance 'tween simple and complex,
How shall we choose which path will serve us best?
Divide the data, let each part be test,
While others train the model to perfect.

In five-fold fashion, rotate through each part,
Let every portion judge the pattern's worth,
This ancient wisdom, statistical art,
Reveals which complexity deserves birth.

No single trial can tell the honest truth,
For data's face may flatter or deceive,
But patient testing, mathematical proof,
Shows which model deserves our full believe.

*Through careful validation's guiding light,*
*We find the balance 'tween wrong and right.*`,standard:`🤖 Day 5: Cross-Validation

The answer lies in **cross-validation** — a systematic method that simulates how our model performs on unseen data by repeatedly training on subsets and testing on held-out portions. This process reveals the mathematical principle that guides our search: **generalization error estimation**, which helps us identify the complexity where our model's performance on new data peaks before declining due to overfitting.

🧱 **The Concept**
**Cross-validation** is a statistical technique that estimates how well a model will generalize to independent data by partitioning the dataset and using different portions for training and validation across multiple iterations.

❓ **Why It Matters**
Without cross-validation, we're flying blind — we might think our complex model is brilliant because it perfectly fits our training data, only to discover it fails catastrophically on new examples. Cross-validation provides an honest assessment of model performance and helps us choose optimal hyperparameters, preventing the costly mistake of deploying models that don't generalize. It transforms model selection from guesswork into principled decision-making.

⚙️ **How It Works**
The most common approach is **k-fold cross-validation**: divide your data into k equal parts, train on k-1 parts, test on the remaining part, then repeat k times with different test portions. For example, in 5-fold CV, you train on 80% of data and test on 20%, rotating through five different train-test splits. The final performance is the average across all folds. **Leave-one-out cross-validation** takes this to the extreme, using all but one sample for training. **Stratified cross-validation** ensures each fold maintains the same proportion of different classes. This process reveals validation curves that show performance vs. model complexity, with the optimal point where validation error is minimized.

🎯 **ML Insight**
Cross-validation transforms the bias-variance trade-off from theoretical concept into practical measurement, letting data itself guide us to optimal complexity.

❓ **Tomorrow's Question** — If cross-validation helps us find optimal complexity, what happens when we need our model to not just perform well, but to perform well consistently across different types of data it has never encountered before?`,parable:`Nyx stood before The Archivist's ancient testing chamber, where countless stone tablets lay arranged in precise formations. "Master," she began, "yesterday you taught me that both simple and complex patterns have flaws. But how do I discover which complexity serves best without the luxury of seeing tomorrow's weather?"

The Archivist smiled, gesturing to five separate alcoves carved into the chamber walls. "Observe, young seeker. I have divided our collection of weather records into five equal portions." He placed tablets in each alcove with deliberate care. "First, I will train my pattern-reading on four alcoves and test my predictions on the fifth. Then I shall repeat this ritual, each time holding back a different alcove as my test."

Nyx watched in fascination as The Archivist demonstrated this ancient practice. In the first trial, he studied tablets from alcoves one through four, learning their patterns of cloud-formation and wind-direction, then predicted the weather for the tablets in alcove five. In the second trial, he held back alcove four for testing, training on the remaining four groups. This sacred rotation continued until each alcove had served as the testing ground.

"But Master," Nyx questioned, "why this elaborate dance? Why not simply test once?"

"Because, dear apprentice, a single test might deceive us. Perhaps that one alcove contained unusually simple patterns, making our complex model appear foolish. Or perhaps it held particularly intricate weather, making our simple model seem inadequate." The Archivist's eyes gleamed with ancient wisdom. "Only by testing our understanding against many different portions can we glimpse the true nature of our pattern-reading ability. This is the principle of cross-validation — letting the data itself reveal the optimal complexity."

As Nyx practiced this technique, she noticed something remarkable. Simple patterns performed consistently across all five tests but captured only basic trends. Overly complex patterns showed wild variations — brilliant in some alcoves, terrible in others. But at a particular level of complexity, her predictions achieved their most stable and accurate performance across all testing grounds.

**Moral:** Truth reveals itself not in a single moment of testing, but through the patient repetition of honest examination.

**Tomorrow:** Nyx will discover that even perfect cross-validation scores may crumble when faced with data from distant lands and different seasons...`},{day:6,title:"Domain Adaptation and Transfer Learning",date:"2026-03-05",image:"images/machine-learning/day-6.jpg",audio:"audio/machine-learning/day-6",sonnet:`**🪶 Sonnet VI: Domain Adaptation and Transfer Learning**

When patterns learned in one domain must stride
Across the boundaries of foreign ground,
The model seeks what truths remain as guide
Beneath the surface where new forms are found.
Like scholars reading texts in foreign tongue,
Who grasp the universal themes within,
The network learns what melodies are sung
In every language, though their sounds begin
With different accents, scripts, and native ways.
It finds the deep invariant that persists
Through transformation's mathematical maze,
The constant law that every change resists.
*For wisdom that adapts yet stays true*
*Discovers what connects the old and new.*`,standard:`🤖 Day 6: Domain Adaptation and Transfer Learning

When we need models to perform consistently across different types of data they've never encountered, we enter the realm of **domain adaptation** — the challenge of making models robust to distribution shifts between training and deployment environments. This requires techniques like **transfer learning**, where we leverage knowledge from one domain to excel in another, and **domain-invariant feature learning**, which focuses on patterns that remain stable across different data distributions.

🧱 **The Concept**
**Domain adaptation** is the machine learning challenge of maintaining model performance when the statistical properties of input data change between training and deployment, while **transfer learning** solves this by repurposing knowledge learned from source domains to excel in target domains.

❓ **Why It Matters**
Real-world data rarely matches our training conditions perfectly — medical images vary between hospitals, speech recognition must work across accents, and autonomous vehicles encounter weather conditions not in their training set. Domain adaptation prevents the expensive cycle of collecting new data and retraining models every time conditions change. It's the difference between building brittle systems that break in the wild versus robust intelligence that adapts like humans do.

⚙️ **How It Works**
The core insight is learning **domain-invariant representations** — features that capture essential patterns while ignoring superficial differences. **Fine-tuning** takes a pre-trained model and adjusts its final layers on target domain data, like adapting a general image classifier to medical scans. **Domain adversarial training** uses a clever trick: while the main model learns to classify, an adversarial network tries to identify which domain the data came from — the main model learns to fool this domain detector, forcing it to find domain-agnostic features. **Multi-source domain adaptation** combines knowledge from several source domains to build more robust target performance. The mathematical foundation involves minimizing both task loss and domain discrepancy measures.

🎯 **ML Insight**
True machine intelligence isn't about memorizing specific datasets — it's about learning transferable representations that capture the deeper structure beneath surface variations.

❓ **Tomorrow's Question** — If we can teach models to transfer knowledge between domains, what mathematical principles govern how much a model should trust its existing knowledge versus adapting to contradictory new evidence?`,parable:`Nyx found The Archivist in the Chamber of Echoes, where crystalline tablets displayed patterns from distant lands — desert winds, mountain storms, ocean tides. Each tablet pulsed with different rhythms, yet somehow they all seemed to whisper the same ancient truths.

"Master," Nyx said, "yesterday you showed me how to test my pattern-reading across different seasons. But what if I need to read the patterns of lands I've never visited? What if the desert dwellers bring me tablets carved in stone I've never seen, seeking predictions about their foreign skies?"

The Archivist smiled, gesturing to a peculiar tablet that shimmered between forms — sometimes showing familiar forest runes, sometimes displaying harsh desert glyphs. "Watch carefully, young seeker. This is the Tablet of Echoing Wisdom. It learned to read our forest patterns first, but see how it adapts its knowledge to understand the desert's voice?"

As Nyx watched, the tablet's surface rippled. The deep structures — the way pressure built before storms, the dance between wind and moisture — remained constant, but the surface symbols transformed to match each domain. "The tablet doesn't forget what it learned about storms in our forests," The Archivist explained. "Instead, it asks: 'What fundamental truths about weather remain the same, whether above trees or sand dunes?'"

"But how does it know which wisdom to keep and which to discard?" Nyx wondered.

The Archivist placed another tablet beside the first — this one seemed to struggle, flickering between domains without finding harmony. "This tablet tries to force forest rules onto desert patterns. It fails because it cannot distinguish between essential wisdom and local customs. The successful tablet learns what philosophers call 'domain-invariant truths' — the deep laws that govern all weather, beneath the superficial differences of each land."

He showed Nyx a third tablet, more complex still. This one seemed to pit two voices against each other — one trying to identify whether patterns came from forest or desert, another trying to hide those differences. "This tablet plays a curious game with itself. One part tries to detect which domain it's reading, while another part learns to make predictions that fool the detector. Through this internal struggle, it discovers wisdom so fundamental that it applies everywhere."

**Moral:** True wisdom lies not in memorizing local customs, but in discovering the universal laws that echo across all domains.

**Tomorrow:** The Archivist's eyes gleamed as he produced a tablet that seemed to argue with itself about which ancient wisdom to trust. "But tell me, apprentice — when old wisdom conflicts with new evidence, how should a truly wise tablet decide which voice to follow?"`}],Xv=[{day:1,title:"The Inner Compass - What Is Emotional Intelligence?",date:"2026-03-02",image:"images/emotional-intelligence/day-1.jpg",audio:"audio/emotional-intelligence/day-1",sonnet:`**🪶 Sonnet I: The Inner Compass**

Within the heart there beats a deeper mind,
That reads the language written in each tear,
Where wisdom's compass helps the lost soul find
The truth that makes all human connection clear.

Not intellect alone can guide our way
Through labyrinths of anger, joy, and pain,
For those who master feeling's subtle sway
Shall find that empathy brings greater gain.

The diplomat who knows his inner fire
Can speak with merchants, kings, and common folk,
While he who lets raw passion be his lyre
Will find his every word a broken yoke.

*True intelligence embraces heart and head,*
*Where emotional wisdom lights the path ahead.*`,standard:`🧭 **Day 1: The Inner Compass - What Is Emotional Intelligence?**

Emotional intelligence is the ability to recognize, understand, and manage our own emotions while effectively perceiving and responding to others' emotions.

🧱 **The Concept**
Emotional intelligence (EQ) encompasses four core domains: **self-awareness**, **self-management**, **social awareness**, and **relationship management**.

❓ **Why It Matters**
Research shows that EQ accounts for 58% of job performance across all industries and predicts success better than IQ alone. People with higher emotional intelligence build stronger relationships, make better decisions under pressure, and navigate conflict more effectively.

⚙️ **How It Works**
EQ operates through conscious awareness of emotional patterns and practiced responses. When you notice your heart racing before a presentation (**self-awareness**), pause to take deep breaths (**self-management**), read the room's energy (**social awareness**), and adjust your approach accordingly (**relationship management**). Unlike IQ, which remains relatively fixed, EQ can be developed throughout life through deliberate practice. The brain's neuroplasticity allows us to rewire emotional responses, building new neural pathways that support emotional regulation and empathy.

📖 **Definitions**
• **Emotional Intelligence (EQ)**: The ability to identify, understand, and manage emotions in self and others
• **Self-Awareness**: Recognizing your emotions and their impact on thoughts and behavior
• **Self-Management**: Effectively handling your emotions, impulses, and reactions
• **Social Awareness**: Understanding others' emotions and organizational dynamics
• **Relationship Management**: Influencing, coaching, mentoring, and resolving conflict

🎯 **EQ Wisdom**
True intelligence isn't just about processing information—it's about processing the human experience with wisdom and grace.

❓ **Tomorrow's Question** — If you can think your way through a math problem, why can't you simply think your way out of feeling angry or hurt?`,parable:`In the marble halls of the diplomatic academy, young Idris slammed his fist upon the obsidian table, his face flushed crimson with indignation. "The trade negotiations are absurd!" he declared, his voice echoing through the chamber. "These merchants mock our traditions with their insulting offers!"

The other students shifted uncomfortably in their seats, but from the shadows emerged a figure draped in gossamer veils, face hidden behind a mirror-polished mask that reflected Idris's own twisted expression back at him.

"What do you see when you look upon this surface?" The Veil asked, tilting the mask so Idris could witness his own rage.

Idris faltered, seeing his contorted features, his clenched jaw, his wild eyes. "I see... anger," he whispered.

"And what does this anger tell the merchants about your position?" The Veil's voice was like silk over steel. "Does it strengthen your hand, or does it reveal the very desperation you seek to hide?"

The young diplomat's shoulders sagged as understanding dawned. In his outburst, he had broadcast his emotional state like a lighthouse in fog—visible to all, controlled by none.

"The wise diplomat," The Veil continued, "possesses an inner compass that points not toward true north, but toward true understanding. This compass has four faces: knowing thyself, governing thyself, reading others, and guiding relationships. Without it, one stumbles blind through the labyrinth of human connection."

Idris touched his chest, feeling his heart's rapid drumbeat. "How does one acquire such a compass?"

"Ah," The Veil smiled behind the mask, "that is tomorrow's riddle to unravel."

**Moral**: Emotional intelligence serves as an inner compass, guiding us through the complex terrain of human interaction with awareness, control, and wisdom.

*Tomorrow, Idris will discover why emotions cannot be conquered by thought alone...*`},{day:2,title:"The Emotional Brain vs. The Thinking Brain",date:"2026-03-03",image:"images/emotional-intelligence/day-2.jpg",audio:"audio/emotional-intelligence/day-2",sonnet:`**🪶 Sonnet II: The Emotional Brain vs. The Thinking Brain**

When saber-tooth and fire ruled the night,
The guardian brain learned lightning's urgent call,
To flood with fear before the conscious sight
Could calculate if threats were large or small.

This ancient system serves us even now,
Though emails aren't the predators of old,
Yet still the amygdala won't allow
For logic's slow deliberate unfold.

The thinking mind, so methodical and wise,
Arrives like scholars to a battle done,
While emotional floods have filled the eyes
And stress hormones have already run.

*We cannot think away what's felt so fast,*
*But understanding helps us hold steadfast.*`,standard:`🧭 Day 2: The Emotional Brain vs. The Thinking Brain

Emotions aren't problems to be solved through logic because they originate in the **limbic system**—the brain's ancient alarm system that operates faster than conscious thought. While your **prefrontal cortex** can methodically work through equations, emotions trigger immediate survival responses that bypass rational analysis entirely.

🧱 **The Concept**
The brain has two primary processing systems: the fast, emotion-driven **limbic system** and the slower, logic-driven **prefrontal cortex**.

❓ **Why It Matters**
Understanding this neurological reality explains why we can't simply "think away" emotions and why emotional hijacking occurs. This knowledge is the foundation for developing effective emotional regulation strategies.

⚙️ **How It Works**
When you encounter a threat—real or perceived—your **amygdala** instantly floods your system with stress hormones, preparing you for fight, flight, or freeze. This happens in milliseconds, while conscious thought takes several seconds to engage. The emotional brain evolved to keep our ancestors alive, so it prioritizes speed over accuracy. A rustling bush might be wind or a predator—better to jump first and analyze later. In modern life, this same system treats a critical email like a saber-toothed tiger. The key isn't to override emotions but to create space between the emotional trigger and your response, allowing the prefrontal cortex to come online.

🎯 **EQ Wisdom**
Emotions are data, not directions—honor their message without letting them drive the bus.

❓ **Tomorrow's Question** — If emotions happen so quickly and automatically, how can we possibly gain control over something that's already in motion?`,parable:`The morning sun filtered through the embassy windows as Idris stormed into the meditation chamber, his fists still clenched from another diplomatic disaster. "Why can't I just think my way out of anger?" he demanded of The Veil, who sat motionless as stone.

"Do you ask your heart to calculate mathematics?" The Veil's voice drifted like smoke behind the silk mask.

"That's different—"

"Is it? Show me how you solve an equation."

Idris hesitated, then began methodically: "First, I identify the variables, then apply the proper formula..."

"And when the ambassador insulted your homeland this morning, what did you identify first?"

"The... the rage. It just exploded."

"From where?" The Veil gestured to their temple. "Here, where thoughts form slowly? Or here?" Their hand moved to their chest. "Where the ancient guardian lives?"

Idris touched his own chest, feeling his heart still racing. "I felt it before I even knew what happened."

"The guardian brain that kept your ancestors alive sees all insults as tigers, all criticism as claws. It moves with lightning's speed because survival cannot wait for contemplation. Your thinking mind is wise but slow—like a scholar arriving after the battle has begun."

The Veil stood, their robes whispering secrets. "Does the river rage at the mountain for blocking its path?"

"No, it... it finds another way around."

"Tomorrow, young diplomat, we discover how to become like water—not fighting the mountain of emotion, but flowing with its wisdom."

**Moral**: Emotions operate on ancient timing, not modern logic. Understanding their speed and purpose is the first step toward emotional mastery.

**Tomorrow**: Idris learns the art of the pause—creating space between trigger and response.`},{day:3,title:"The Pause Between Trigger and Response",date:"2026-03-04",image:"images/emotional-intelligence/day-3.jpg",audio:"audio/emotional-intelligence/day-3",sonnet:`**🪶 Sonnet III: The Pause Between Trigger and Response**

When anger's lightning strikes the troubled mind,
And fury's thunder threatens to break free,
Between the flash and crash we oft may find
A sacred space where choice can come to be.

The body speaks before emotions roar—
A tightened jaw, a quickened beating heart,
These whispered warnings knock upon the door
Before the tempest tears our peace apart.

In that brief moment, wisdom finds her voice,
Not to silence what we truly feel,
But to remind us we still have a choice
In how we let our inner storms reveal.

*The pause is not emotion's enemy,*
*But partnership with our humanity.*`,standard:`🧭 Day 3: The Pause Between Trigger and Response

We can't stop emotions from starting, but we can influence what happens next by recognizing the crucial gap between feeling and action. The key is catching emotions in their early stages—noticing the physical sensations, the shift in breathing, the tightening in your chest—before they escalate into full emotional hijacking.

🧱 **The Concept**
**The pause** is the brief window of opportunity between an emotional trigger and your behavioral response where conscious choice becomes possible.

❓ **Why It Matters**
This pause is where emotional intelligence lives—it's the difference between reacting impulsively and responding thoughtfully. Master this space, and you transform from being at the mercy of your emotions to being in partnership with them.

⚙️ **How It Works**
The pause isn't about stopping emotions—it's about **expanding time**. When you feel anger rising, your body sends early warning signals: increased heart rate, muscle tension, changes in breathing. These **somatic markers** arrive before the full emotional storm. By training yourself to notice these signals, you create space for choice. A simple technique: name what you're feeling ("I notice anger"), take three conscious breaths, and ask "What does this emotion want me to know?" This isn't suppression—it's **emotional aikido**, using the energy of the emotion while redirecting its expression. Viktor Frankl captured this perfectly: "Between stimulus and response there is a space. In that space is our power to choose our response."

🎯 **EQ Wisdom**
The pause isn't about controlling emotions—it's about choosing your response to them.

❓ **Tomorrow's Question** — If we can learn to pause before reacting, what determines whether we actually use that pause wisely or waste it on the same old patterns?`,parable:`Idris stormed through the marble corridors of the embassy, his face flushed with indignation. The morning's negotiations had collapsed when the Meridian delegate questioned his competence in front of the entire assembly. Each footstep echoed his fury until he burst into the Chamber of Mirrors, where The Veil waited in perfect stillness.

"Master, I cannot do this!" Idris exploded. "Every slight, every insult—they trigger something in me that I cannot control. You speak of emotional mastery, but how can I master what moves faster than thought itself?"

The Veil's masked face tilted slightly. "Tell me, young diplomat, when lightning splits the sky, can you prevent the thunder?"

"Of course not," Idris replied, confused. "Thunder follows lightning as surely as—"

"And yet," The Veil interrupted softly, "between the flash and the sound, what exists?"

Idris paused, his anger momentarily forgotten. "Silence... space... time?"

"Ah." The Veil moved to one of the mirrors, placing a weathered hand upon its surface. "Watch." In the reflection, Idris saw himself as he had been moments before—jaw clenched, shoulders rigid, breath shallow. "Your body whispered the storm's approach long before your anger roared. The tension in your shoulders, the quickening of your pulse, the shift in your breathing—these are lightning's flash."

The Veil turned from the mirror. "What if, instead of waiting for thunder's crash, you learned to read lightning's warning?"

Idris stared at his reflection, beginning to understand. "The space between... I could choose what follows?"

"Can you choose to stop feeling? Can you choose to stop the sky from darkening?"

"No, but..." Idris's voice grew quiet with realization. "I could choose what I do when the storm arrives."

The Veil nodded once. "Between trigger and response lies the birthplace of wisdom. Not the absence of storms, but the conscious choice of how to dance with them."

**Moral:** True emotional mastery lies not in preventing feelings but in expanding the space between feeling and action, where choice lives.

**Tomorrow:** The Veil will reveal what transforms a moment of pause into lasting change—or what causes us to repeat the same patterns despite our best intentions.`},{day:4,title:"The Quality of Attention",date:"2026-03-04",image:"images/emotional-intelligence/day-4.jpg",audio:"audio/emotional-intelligence/day-4",sonnet:`**🪶 Sonnet IV: The Quality of Attention**

The pause itself is but an empty space,
A vessel waiting to be filled with thought;
Whether with wisdom's calm and gentle grace,
Or patterns that our past reactions brought.

Mindful awareness stands as sentinel,
Observing storms without being swept away;
A witness to each feeling's rise and swell,
Yet rooted in the present moment's stay.

When anger comes with all its blazing heat,
This quality of mind stays cool and clear;
Not fighting flames nor bowing in defeat,
But holding space for what is truly here.

*In pause with presence, wisdom finds its way,*
*Transforming night of reaction into day.*`,standard:`🧭 Day 4: The Quality of Attention

What fills the pause determines its power. If we use that precious space to rehearse old grievances or catastrophize outcomes, we're just giving our patterns more time to entrench. But when we bring **mindful awareness** to the pause—observing without judgment, staying present to what's actually happening—we transform that moment into a gateway for wisdom rather than a breeding ground for reactivity.

🧱 **The Concept**
**Mindful awareness** is the quality of attention that allows us to observe our emotional experience without being consumed by it, creating space for genuine choice.

❓ **Why It Matters**
The pause is only as valuable as the consciousness we bring to it. Without mindful awareness, we simply have more time to spin the same stories that created our emotional patterns in the first place. With it, we gain access to fresh perspectives and more skillful responses.

⚙️ **How It Works**
Mindful awareness operates like a **gentle observer**—curious rather than critical, present rather than planning. When triggered, instead of asking "Why is this happening to me?" or "How can I fix this?", mindful awareness asks "What is actually here right now?" You might notice: the sensation of heat in your face, the story your mind is telling, the impulse to defend or attack. This **meta-cognitive awareness**—thinking about your thinking—breaks the spell of automatic reactivity. For example, in a heated discussion, mindful awareness might notice: "I'm feeling defensive, my jaw is clenched, and I'm preparing a counter-argument while they're still speaking." This awareness alone creates options: you might soften your jaw, truly listen, or acknowledge your defensiveness out loud.

🎯 **EQ Wisdom**
Awareness without judgment is the soil in which emotional wisdom grows.

❓ **Tomorrow's Question** — If awareness can transform our relationship with difficult emotions, why do we sometimes resist becoming more aware of what we're actually feeling?`,parable:`The morning sun cast long shadows across the embassy courtyard as Idris paced restlessly, his diplomatic robes rustling with each agitated step. The Veil sat perfectly still on a stone bench, that enigmatic mask reflecting the golden light.

"I tried what you taught me yesterday," Idris burst out, his voice tight with frustration. "I caught the pause, just as you said. But nothing changed! I still said the wrong thing to the Meridian ambassador. I still made everything worse."

The Veil tilted their head slightly. "What did you fill the pause with, young diplomat?"

"I... I thought about how unfair he was being. How wrong. How I needed to make him understand—" Idris stopped mid-sentence, seeing his reflection multiply infinitely in The Veil's polished mask.

"Ah," The Veil's voice carried the weight of ancient understanding. "So you gave your old patterns more time to perfect their performance?"

Idris's shoulders sagged. "But what else could I do? The thoughts just came..."

"What if," The Veil rose gracefully, "instead of fighting the river, you became the riverbank? What if instead of drowning in the current of thought, you stood witness to its flow?"

To demonstrate, The Veil began walking slowly around the fountain at the courtyard's center. "Watch the water, Idris. Does the stone fountain judge the water for being wet? Does it struggle against the flow?"

Idris watched, mesmerized, as the water cascaded over the carved stone figures. "No... it just... holds space for it."

"And yet," The Veil paused, one hand trailing in the water, "see how the fountain shapes the water's journey? This is mindful awareness—not the water, not the struggle against it, but the conscious space that holds and gently guides."

As if summoned by their conversation, a messenger bird landed on the fountain's edge, ruffling its feathers before drinking deeply. In that moment, Idris felt something shift—a quality of attention that was spacious yet present, accepting yet wise.

**Moral:** The pause is only as wise as the awareness we bring to it; fill it with presence rather than patterns, and watch old reactions transform into conscious responses.

**Tomorrow:** The Veil's mask seems to shimmer as they ask, "Tell me, young diplomat, what fears might keep someone from seeing their emotions clearly?"`},{day:5,title:"The Shield of Numbness",date:"2026-03-05",image:"images/emotional-intelligence/day-5.jpg",audio:"audio/emotional-intelligence/day-5",sonnet:`**🪶 Sonnet V: The Shield of Numbness**

When pain cuts deep, we learn to build a wall,
A shield of ice to guard the tender heart,
Yet numbness, like a thief, soon steals it all—
Both agony and joy torn apart.

We say "I'm fine" while drowning in the deep,
Wear masks so thick we lose our own true face,
The feelings that we dare not feel or weep
Go underground and haunt that hollow space.

For what protects us from the darkest night
Also blocks the dawn's illuminating ray,
The very tears we're trained to keep from sight
Might wash the path to wisdom's clearer way.

*Though numbness shields us from what we most fear,*
*It steals the fullness of what makes us here.*`,standard:`🧭 Day 5: The Shield of Numbness

We resist awareness because **emotional numbness often feels safer than emotional truth**. When feelings carry the weight of unprocessed pain, unmet needs, or threats to our identity, our psyche deploys numbness as a protective shield. Awareness might reveal that we're lonelier than we admit, angrier than we think we should be, or more vulnerable than feels acceptable.

🧱 **The Concept**
**Emotional numbness** is a protective mechanism that dampens our capacity to feel, often arising when emotions seem too dangerous, overwhelming, or socially unacceptable to experience fully.

❓ **Why It Matters**
While numbness can provide temporary relief from difficult emotions, it's an indiscriminate anesthetic—it doesn't just block pain, but also joy, connection, and the vital information our emotions provide. Living behind this shield means making decisions with incomplete data about what truly matters to us.

⚙️ **How It Works**
Numbness operates through various **dissociation strategies**: intellectual analysis that keeps us in our heads, busyness that prevents stillness, substances or behaviors that alter our emotional state, or simply the unconscious decision to "not feel." You might recognize numbness in phrases like "I'm fine" when you're clearly not, the inability to access tears when grief is appropriate, or feeling like you're watching your life from the outside. The paradox is that **the very emotions we numb often contain the energy and information we need most**. For instance, suppressed anger might hold important boundaries, while avoided sadness might carry the seeds of compassion. A numb person might go through the motions of relationships without feeling truly connected, or pursue goals without experiencing satisfaction when achieving them.

🎯 **EQ Wisdom**
The feelings we avoid don't disappear—they go underground and run the show from there.

❓ **Tomorrow's Question** — If our most difficult emotions often carry the most important messages, why does our culture teach us to view certain feelings as 'negative' rather than simply uncomfortable?`,parable:`The next morning, Idris found The Veil sitting motionless beside the reflecting pool, so still they seemed carved from shadow and silence.

"I've been practicing the pause," Idris announced. "But sometimes... I find I feel nothing at all. Is that progress?"

The Veil's mask tilted slightly. "What does 'nothing' protect you from feeling?"

"I don't understand." But even as Idris spoke, a memory surfaced unbidden—his father's disappointment when Idris had wept after his first diplomatic failure. *Weakness,* his father had said. *A diplomat who shows emotion is a diplomat who loses.*

The Veil remained silent, and in that silence, Idris felt the familiar numbness descending like a heavy cloak. "There's nothing to protect," he insisted. "I simply don't feel much anymore. It's... easier."

"Does ease serve truth?" The Veil asked softly. "Or does truth serve growth?"

Idris stared at his reflection in the pool. Where once he might have seen anger or pain, now he saw only a blank, pleasant expression—the perfect diplomat's mask. "But if I let myself feel everything, I'll fall apart. I'll be weak, like—" He stopped.

"Like whom?"

"Like the boy who cried when he failed." The words came out as barely a whisper.

The Veil leaned forward, their voice gentle. "And what if that boy's tears held more wisdom than all his father's stone-faced victories?"

For a moment, something flickered behind Idris's eyes—not the fire of his old anger, but something deeper, rawer, more vulnerable. Then the mask slid back into place.

"I'm fine," Idris said automatically.

The Veil's silence stretched long enough for those words to echo and reveal their hollowness.

**Moral:** *The armor that protects us from pain also shields us from the full spectrum of life's richness, leaving us safe but half-alive.*

*Tomorrow, Idris will discover why some feelings are branded as enemies when they might be the very allies we need most...*`}],Zv=[{day:1,title:"The Identity-First Revolution",date:"2026-03-02",image:"images/habits-and-systems/day-1.jpg",audio:"audio/habits-and-systems/day-1",sonnet:`**🪶 Sonnet I: The Identity-First Revolution**

When goals like distant mountains call our name,
We chase the peak but lose ourselves below,
For outcomes fade like echoes, just the same
As morning mist that melts with sunrise glow.

But those who ask "What person would succeed?"
And cast their votes with actions small and true,
Find every choice becomes a planted seed
That grows into the self they're growing to.

The runner runs not for the medal's gleam,
But proves with every step their moving soul;
The writer writes not for the critic's dream,
But shows their words are part of something whole.

*Each habit whispers who we're meant to be—*
*Our daily acts unlock identity.*`,standard:`🧘 Day 1: The Identity-First Revolution

Most people try to change by focusing on what they want to achieve. But the most profound transformations happen when we start with who we want to become.

🧱 **The Concept**
Identity-based habits begin with your desired identity, then prove it to yourself through small, consistent actions.

❓ **Why It Matters**
Outcome-based goals create temporary motivation, but identity-based habits create lasting change. When you believe "I am a runner" rather than "I want to run a marathon," every jog becomes evidence of your identity, not just progress toward a goal. This shift makes habits feel natural rather than forced.

⚙️ **How It Works**
Start by asking "Who is the type of person that could achieve the outcome I want?" If you want to lose weight, focus on becoming "someone who moves their body daily" rather than "someone who needs to lose 20 pounds." Then prove this identity with small wins: take the stairs, park farther away, do five pushups. Each action becomes a vote for your new identity. A writer writes, even if it's just one sentence. An athlete moves, even if it's just a walk around the block. The identity emerges from the evidence you create.

📖 **Definitions**
• **Identity-based habits**: Habits formed by first deciding who you want to be, then proving it with small wins
• **Outcome-based goals**: Traditional goals focused on what you want to achieve
• **Identity votes**: Small actions that serve as evidence for who you're becoming
• **Compound identity**: How small, consistent actions accumulate into a transformed sense of self

🎯 **Systems Wisdom**
Every action is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity.

❓ **Tomorrow's Question** — If your habits are shaping who you become every single day, and most habits happen automatically without conscious thought, what does this reveal about the true power of your environment in determining your destiny?`,parable:`Rook stood at the village crossroads, pack heavy with half-finished projects and abandoned dreams. Maps to distant lands, canvases with single brushstrokes, journals with opening lines to stories never told. Each represented a grand vision that had seized his imagination, only to wither when the initial excitement faded.

"I shall become a great explorer," he declared to the morning air, pulling out his newest acquisition—a brass compass that gleamed with promise. "I shall map the unknown territories and return with tales of wonder."

Cairn looked up from his stone, where he had been carving the same continuous pattern for forty years—each day adding one deliberate mark to an endless spiral that now covered three massive boulders. His hands moved with the certainty of ritual, as if the chisel were an extension of his very soul.

"And what happened to becoming a great painter?" Cairn asked gently, nodding toward the paint-stained easel among Rook's possessions. "Or a master storyteller?"

Rook shifted uncomfortably. "Those were... practice. This time is different. I have studied the great explorers, purchased the finest equipment, drawn detailed plans—"

"You have tried to become by achieving," Cairn interrupted, his chisel never pausing. "But tell me, friend—who are you today?"

The question hung in the air like morning mist. Rook fumbled with his compass, watching its needle search for true north. "I am... I am someone who seeks adventure. Someone who dreams of great things."

"No," Cairn said, setting down his tools for the first time in their conversation. "You are someone who begins. That is your identity, proven by the evidence of your actions. Every abandoned project votes for the person who starts but does not finish."

Rook felt the weight of truth in those words. Around him lay the accumulated evidence of his scattered identity—each unfinished work a ballot cast for someone who could not sustain commitment.

"But what if..." Cairn continued, lifting a small stone, "instead of trying to become an explorer through grand expeditions, you became the kind of person who explores? One who notices. One who pays attention. One who takes a single step into the unknown each day?"

He handed Rook the stone—smooth river rock worn by countless small journeys. "Walk to the edge of the village. Just to the edge. Not to map new territories, but because you are someone who takes daily steps toward discovery. Let this be your first vote for a new identity."

Rook held the stone, feeling its weight—so much lighter than his pack of grand ambitions, yet somehow more substantial.

**Moral**: We become what we repeatedly prove ourselves to be through small actions, not what we aspire to achieve through grand gestures.

**Tomorrow**: Cairn will reveal why the stone he carved today looks different from yesterday's mark, though he followed the exact same ritual...`},{day:2,title:"Environment as Invisible Architecture",date:"2026-03-03",image:"images/habits-and-systems/day-2.jpg",audio:"audio/habits-and-systems/day-2",sonnet:`**🪶 Sonnet II: Environment as Invisible Architecture**

The space around us speaks in silent tongue,
Each object casting votes for who we'll be,
While willpower's song, though loudly often sung,
Fades beneath environment's decree.

The phone beside the bed calls out at night,
The running shoes forgotten in the hall,
These cues that live beyond our conscious sight
Determine whether we shall rise or fall.

Not discipline, but design rules the day—
The masters know to craft their sacred ground,
Where good habits find their natural way
And resistance rarely can be found.

*For in the end, we are but what we see,*
*Our surroundings shape our destiny.*`,standard:`🧘 Day 2: Environment as Invisible Architecture

Your environment isn't just where you are—it's who you become. When habits run on autopilot, your surroundings become the invisible hand guiding every decision, making your destiny less about willpower and more about design.

🧱 **The Concept**
Environment design is the practice of shaping your physical and digital spaces to make good habits inevitable and bad habits difficult.

❓ **Why It Matters**
We dramatically overestimate our self-control and underestimate our environment's influence. Your brain is constantly scanning for cues that trigger automatic behaviors—the running shoes by your bed, the phone on your nightstand, the cookies on the counter. These environmental triggers often override conscious intentions, which is why people with the "best" willpower often simply have better-designed environments.

⚙️ **How It Works**
Environment design operates on two principles: make good cues obvious and bad cues invisible. Want to read more? Place books on your pillow and hide your phone in another room. Want to eat healthier? Put fruits at eye level and store junk food in opaque containers on high shelves. The key is understanding that every object in your space is either voting for or against your desired identity. Your environment should be designed so that the path of least resistance leads to your best self. Even small changes compound: moving your alarm clock across the room transforms you from someone who hits snooze to someone who gets up immediately.

🎯 **Systems Wisdom**
You don't rise to the level of your goals; you fall to the level of your systems. Your environment is your most powerful system.

❓ **Tomorrow's Question** — If changing your environment can dramatically alter your behavior without requiring willpower, why do most people exhaust themselves trying to resist temptation rather than removing it entirely?`,parable:`Rook burst into Cairn's workshop, eyes wild with revelation. "I've discovered the secret!" he declared, gesturing frantically. "It's all about identity! I'm going to become a stone-carver like you—starting tomorrow!"

Cairn continued his methodical chiseling, each strike precise and purposeful. Around him, his workshop told a story forty years in the making. Tools hung in exact positions, worn smooth by daily use. Stone dust sparkled in perfect cones beneath each workstation. The very air seemed to hum with intention.

"Look around you," Cairn said quietly, never pausing in his work. "What do you see?"

Rook's enthusiasm dimmed as he truly observed for the first time. Every surface served the craft. No distractions cluttered the space. The workshop wasn't just where Cairn worked—it was designed to make him a stone-carver every moment he stepped inside.

"But my studio..." Rook began, then trailed off. He thought of his chaotic space: half-finished paintings beside forgotten novels, guitars leaning against easels, screens glowing with notifications. Each object whispered a different dream, creating a symphony of confusion.

"Your environment shapes you more than you shape it," Cairn explained. "I didn't become disciplined and then design this space. I designed this space and let it make me disciplined. Every morning, my tools call to me. Every surface reminds me who I am."

Rook stood silent, understanding dawning. His scattered environment had been voting against focus for years, while Cairn's workshop cast a ballot for mastery with every carefully placed tool.

**Moral**: We become what our environment repeatedly whispers we are.

**Tomorrow**: Rook confronts the uncomfortable truth about why he keeps choosing chaos over change...`},{day:3,title:"The Identity-First Revolution",date:"2026-03-04",image:"images/habits-and-systems/day-3.jpg",audio:"audio/habits-and-systems/day-3",sonnet:`**🪶 Sonnet III: The Identity-First Revolution**

When runners run, they do not think of speed,
Nor question why their feet should find the ground—
Their very being shapes each daily deed,
In identity, true freedom can be found.

The sculptor does not carve to prove her art,
But strikes the stone because that's who she is;
Each action flows from her authentic heart,
Not chasing some external, fleeting bliss.

We vote with every choice for who we are,
Each habit casting ballots for our soul;
Outcomes may fade like some forgotten star,
But character remains our truest goal.

*For when you know exactly who you are,*
*Your actions follow like a guiding star.*`,standard:`🧘 Day 3: The Identity-First Revolution

Most people exhaust themselves fighting temptation instead of removing it because they're trapped in an outcome-first mindset—focused on what they want to achieve rather than who they want to become. This backwards approach keeps them forever battling their environment instead of designing it, because they haven't yet claimed the identity that would make environmental design feel natural and necessary.

🧱 **The Concept**
Identity-based habits start with who you want to be, not what you want to accomplish—every action becomes a vote for the type of person you're becoming.

❓ **Why It Matters**
Outcome-based goals create a perpetual state of failure until the moment you succeed, then leave you directionless afterward. Identity-based habits flip this script: instead of "I want to run a marathon" (outcome), you think "I am a runner" (identity). This shift is profound because identity drives behavior automatically—runners run, readers read, healthy people make healthy choices. When your habits align with your identity, willpower becomes largely irrelevant.

⚙️ **How It Works**
Every habit is a vote for the type of person you wish to become. Write one sentence and you're a writer. Miss one workout and you're still an athlete. The goal isn't perfection but direction—each repetition reinforces your evolving identity. Start by asking "What would a healthy person do?" or "How would an organized person handle this?" then act accordingly. The magic happens when you stop trying to achieve an outcome and start reinforcing an identity. Your brain begins to protect this new self-concept, making choices that support it feel natural and choices that contradict it feel uncomfortable.

🎯 **Systems Wisdom**
True behavior change is identity change. Every action you take is a vote for the type of person you wish to become.

❓ **Tomorrow's Question** — If our habits shape our identity and our identity shapes our habits, what happens when we try to build habits that contradict our current self-image?`,parable:`Rook arrived at Cairn's workshop carrying an armload of half-finished carvings—a bird with one wing, a flower missing petals, a face without features. "I don't understand," he said, setting them down with a clatter. "I have all the right tools, I've read every technique, yet nothing ever gets completed. What am I missing?"

Cairn continued his methodical chiseling, each strike precise and purposeful. "Tell me, friend, what are you?"

"I'm... someone trying to become a sculptor?"

"Ah." Cairn set down his tools. "There lies your struggle. You are trying to achieve sculpture, but you have not yet become a sculptor."

Rook frowned. "Isn't that the same thing?"

"Watch." Cairn picked up his chisel. "I do not carve to become a sculptor. I carve because I am one. Each morning, I do not ask whether I feel like working—sculptors work. When I make a mistake, I do not question my worth—sculptors learn from errors. When others suggest I take a day off, I smile politely—but sculptors sculpt."

He gestured to Rook's abandoned pieces. "You begin each project hoping it will make you into something. But the stone knows the difference between someone who sculpts and someone who wants to have sculpted. It responds accordingly."

Rook lifted one of his unfinished birds, seeing it differently now. "So I must first decide who I am, then let my actions follow?"

"Every strike of your chisel is a vote," Cairn nodded. "Vote for the sculptor you are becoming, and one day you'll look around surprised to find you always were one."

**Moral:** Identity shapes behavior more powerfully than outcomes shape identity. Become the person who does the thing, and the thing becomes inevitable.

Tomorrow, Cairn will reveal what happens when the votes of our actions clash with the stories we tell ourselves about who we are.`},{day:4,title:"The Identity Gap Crisis",date:"2026-03-04",image:"images/habits-and-systems/day-4.jpg",audio:"audio/habits-and-systems/day-4",sonnet:`**🪶 Sonnet IV: The Identity Gap Crisis**

When habits clash with who we think we are,
The mind rejects what feels untrue, unknown—
A fortress guards the self both near and far,
Defending walls of identity full-grown.

The couch-bound soul who claims an athlete's name
Will find excuses blooming like spring weeds,
For inner guards restore the former claim,
And sabotage all unfamiliar deeds.

But bridge this gap with micro-steps so small
That truth can whisper where the ego sleeps—
Not "runner" yet, but "one who moves" through all
The daily hours, while gentle progress creeps.

*For identity, like rivers, carves its course*
*Through patient drops, not sudden, mighty force.*`,standard:`🧘 Day 4: The Identity Gap Crisis

When we try to build habits that contradict our current self-image, we create internal friction that sabotages our efforts from within. Our subconscious mind acts as a bodyguard for our identity, rejecting behaviors that feel "not like us" and gravitating toward actions that confirm who we think we are. This is why the overweight person struggles to see themselves at the gym, why the "disorganized" person abandons their filing system, and why the "non-reader" puts down books after a few pages.

🧱 **The Concept**
The identity gap—the distance between who you are and who you want to become—creates cognitive dissonance that must be bridged gradually through micro-identities and small wins.

❓ **Why It Matters**
Most habit failures aren't about willpower or discipline—they're about identity conflict. When your desired behavior clashes with your self-concept, your brain will find creative ways to restore consistency, usually by abandoning the new habit. You can't outrun your identity indefinitely. The person who sees themselves as "lazy" will eventually find reasons to skip workouts, and the person who believes they're "bad with money" will sabotage their budget through seemingly innocent purchases.

⚙️ **How It Works**
Bridge the identity gap by claiming micro-identities that feel achievable right now. Instead of jumping from "couch potato" to "athlete," become "someone who moves their body daily"—even if that's just a five-minute walk. Instead of "financially irresponsible" to "investor," become "someone who tracks their spending." These smaller identities feel believable and create momentum toward larger transformations. Each small action in alignment with your micro-identity builds evidence for a bigger shift. The key is starting with an identity that stretches you just beyond your comfort zone without triggering your internal rejection system. Over time, these micro-identities compound into major identity shifts—but only if you resist the urge to leap too far too fast.

🎯 **Systems Wisdom**
Your identity is like a thermostat—it will work to maintain the temperature you've set. Change the setting gradually, and the system adapts.

❓ **Tomorrow's Question** — If small actions can gradually reshape our identity, what's the minimum effective dose of behavior change that still creates meaningful transformation?`,parable:`Rook arrived at Cairn's workshop in a frenzy of excitement, clutching a leather-bound journal filled with ambitious plans. "I've discovered the secret!" he announced. "Identity-based habits! I'm going to become a master craftsman like you, starting today. I've designed a complete transformation—six hours of carving, two hours of study, daily meditation on the nature of stone."

Cairn paused his gentle chiseling and studied his friend's fevered enthusiasm. "And what does the stone say about this plan?"

"The stone?" Rook blinked. "What do you mean?"

"This morning, when you held your first chisel, what did your hands tell you? What did your shoulders say after the first strike?"

Rook's confidence faltered. "Well, I... I haven't actually started yet. But I know I can become a stone-carver. I can see myself—"

"Ah," Cairn nodded knowingly. "You're trying to leap across a chasm that took me forty years to bridge, one step at a time." He set down his tools and picked up a small pebble. "When I began, I didn't call myself a stone-carver. That identity belonged to the master who taught me. I was simply 'someone who touches stone daily.' For months, I only held stones—feeling their weight, their texture, their grain. My identity was that small."

Rook shifted impatiently. "But that's so... limited."

"Limited, yes. But true." Cairn placed the pebble in Rook's palm. "Your mind guards your identity like a fortress guards its walls. Try to storm the gates with grand claims, and it will repel you. But slip in quietly, with humble truth, and it will gradually expand to accommodate who you're becoming."

"So what should I do?" Rook asked, suddenly uncertain.

"Start with what feels possible today. Perhaps you're not yet a stone-carver, but could you be someone who spends ten minutes with stone? Someone who notices the texture of walls as you walk? Let that identity take root first."

Rook stared at the pebble, feeling its coolness against his skin. For the first time in months, a goal felt manageable instead of overwhelming.

**Moral:** The identity gap between who you are and who you wish to become must be crossed by bridge, not by leap—each small, believable step builds the foundation for transformation.

**Tomorrow:** Cairn will reveal the precise alchemy of change—the smallest actions that yield the greatest shifts...`},{day:5,title:"The 1% Rule",date:"2026-03-05",image:"images/habits-and-systems/day-5.jpg",audio:"audio/habits-and-systems/day-5",sonnet:`**🪶 Sonnet V: The 1% Rule**

A single drop seems powerless and small,
Yet oceans rise from countless drops combined.
One step appears to lead us nowhere at all,
But journeys long through single steps are signed.

The mighty oak grows not in sudden spurts,
But ring by ring through seasons' patient turn.
Each day it adds what barely eye detects,
Yet centuries of growth do thus adjourn.

We chase the lightning's flash, the thunder's roar,
And miss the quiet rain that feeds the ground.
The 1% that seems like nothing more
Builds empires where no empires could be found.

*For in the realm where compound interest dwells,*
*Small daily gains ring transformation's bells.*`,standard:`🧘 Day 5: The 1% Rule

The minimum effective dose is surprisingly small—just 1% better than yesterday. Research shows that tiny improvements, when sustained, create exponential change through the power of compound growth. A 1% daily improvement compounds to being 37 times better over a year, while perfectionistic leaps often lead to burnout and abandonment.

🧱 **The Concept**
Marginal gains—improvements so small they seem insignificant—accumulate into remarkable transformations when applied consistently over time.

❓ **Why It Matters**
We overestimate what we can accomplish in a day and underestimate what we can accomplish in a year. The 1% rule bypasses our resistance to change by feeling achievable while still creating momentum. A single pushup feels laughably easy, but it's infinitely more than zero. Reading one page seems trivial, but it's 365 pages annually. Your brain won't mobilize defenses against such small changes, allowing them to slip past your identity's security system.

⚙️ **How It Works**
Start ridiculously small—so small it feels almost silly to skip. One pushup, not twenty. One page, not a chapter. One minute of meditation, not twenty. The goal isn't the immediate result but the daily repetition that rewrites your identity. Each 1% improvement serves as a vote for the type of person you want to become. Miss once, and you're human. Miss twice, and you're in danger of forming a new identity around not doing the thing. The magic happens in the aggregation of marginal gains—small improvements that seem to make little difference on any given day but deliver remarkable results when compounded over months and years.

🎯 **Systems Wisdom**
Breakthroughs are often the result of many small improvements that have been building up quietly in the background.

❓ **Tomorrow's Question** — If consistency matters more than intensity, why do we consistently choose difficult goals over sustainable ones?`,parable:`Rook arrived at Cairn's workshop clutching a crumpled list of ambitious resolutions—write a novel in thirty days, meditate for two hours daily, learn three languages simultaneously. "I've calculated the minimum effective dose," Rook announced breathlessly. "If I work eighteen hours a day, I can transform myself completely within a month!"

Cairn looked up from his stone, where he had carved exactly one small letter—the same daily practice for four decades. "Show me your smallest chisel," the master said quietly.

Rook produced a massive hammer. "This is my approach to change—bold, decisive, transformative!"

Cairn smiled and picked up a tool no bigger than a needle. "Yesterday I carved the letter 'A.' Today, just the letter 'B.' Tomorrow, 'C.' In forty years, I have carved the entire collected works of the ancient poets, one letter at a time." He gestured to the workshop walls, covered in thousands of stone tablets bearing intricate text.

"But that's so slow!" Rook protested. "At that rate, it takes decades to see results!"

"And at your rate," Cairn replied gently, "how long before you abandon the work entirely?" He touched the stone. "The mountain doesn't notice the river's daily touch, yet the river carves the deepest canyons. One drop of water is nothing. One drop every day for a thousand years moves mountains."

Rook stared at the walls of completed work—masterpieces born from the aggregation of impossibly small daily actions.

**Moral**: The power lies not in the size of the action, but in the unwavering consistency of its repetition.

**Tomorrow**: Rook discovers why the brain sabotages sustainable progress in favor of dramatic failure.`}],Pv=[{day:1,title:"The Foundation of True Leadership",date:"2026-03-02",image:"images/leadership/day-1.jpg",audio:"audio/leadership/day-1",sonnet:`**🪶 Sonnet I: The Foundation of True Leadership**

The crown may rest upon a leader's head,
Yet power flows not from the golden band,
But from the trust that willing hearts have bred,
When gentle influence moves more than command.

Like Lincoln's voice that stirred a nation's soul,
Or Mandela's hope that prison could not break,
True leaders serve a far greater goal—
They lift others up for others' sake.

Authority may force the body's deed,
But influence awakens the spirit's fire,
It plants within the heart a growing seed
That blooms into voluntary desire.

*For those who lead through fear will find too late,*
*That influence builds what authority can't create.*`,standard:`👥 Day 1: The Foundation of True Leadership
Leadership isn't about the title on your door or the authority in your job description—it's about the influence you earn and the trust you build.

🧱 **The Concept**
True leadership is influence, not authority. While authority is granted by position, influence is earned through character, competence, and genuine care for others.

❓ **Why It Matters**
People follow authority because they have to, but they follow influence because they want to. In our rapidly changing world, the most effective leaders are those who inspire voluntary followership rather than demand compliance. This distinction determines whether you lead a team of engaged contributors or reluctant followers.

⚙️ **How It Works**
Influence-based leadership operates through relationship and example. When **Abraham Lincoln** faced the Civil War's darkest moments, his authority as President could command troops, but his influence—built through empathy, moral clarity, and personal sacrifice—inspired a nation to preserve the Union. **Nelson Mandela** had no formal authority during his imprisonment, yet his influence grew stronger, eventually transforming a nation. Modern leaders like **Satya Nadella** transformed Microsoft not through executive orders but by modeling growth mindset and empathy, creating a culture where people chose to follow his vision. These leaders understood that sustainable change comes from within people, not from external pressure.

📖 **Definitions**
• **Authority**: Power granted by position or role
• **Influence**: Power earned through trust, competence, and character
• **Voluntary Followership**: When people choose to follow because they believe in the leader and vision
• **Servant Leadership**: Leading by serving others' growth and success first

🎯 **Leadership Wisdom**
The leader who relies solely on authority will find their power ends where their title ends. The leader who builds influence creates a legacy that outlasts any position.

❓ **Tomorrow's Question** — If someone stripped away your title, your budget, and your formal authority tomorrow, would people still choose to follow you? What would that reveal about the true source of your leadership power?`,parable:`Captain Tova stood on the dock, watching her new crew scatter like startled gulls the moment their shift ended. No lingering conversations, no shared meals—just the hurried exodus of sailors eager to escape their captain's presence. Her predecessor had ruled through bark and bite, and though the ship ran efficiently under his iron fist, it had become a vessel of compliance, not commitment.

That evening, she sought out Admiral Greymane in his seaside cottage. The old mariner listened as she recounted her first week's struggles—orders followed with sullen obedience, mistakes hidden rather than reported, and a palpable tension that hung over the ship like fog.

"Tell me, young captain," Greymane said, stirring his tea thoughtfully, "what do you think makes the tide obey the moon?"

Tova frowned at the riddle. "The moon's gravitational pull, Admiral."

"Precisely. Not force, not commands—influence. The moon never shouts at the sea, never threatens consequences. Yet twice daily, vast oceans respond to its gentle, consistent pull." He set down his cup and fixed her with knowing eyes. "Your predecessor confused the captain's wheel with the captain's soul. He steered through authority—barking orders, demanding compliance. But you, Tova, must learn to lead like the moon leads the tide."

"But how?" she asked. "They barely look at me when I speak."

"Because they're still waiting for the storm they've learned to expect. Show them something different. Authority can move a ship, but only influence can move the hearts of those who sail her. Start tomorrow not with commands, but with questions. Not with your needs, but with theirs."

**Moral**: True leadership flows not from the power you wield, but from the trust you earn—like the moon that moves oceans not through force, but through faithful, consistent influence.

*Tomorrow, Tova will learn why the strongest leaders often speak the softest words...*`},{day:2,title:"The Trust Equation",date:"2026-03-03",image:"images/leadership/day-2.jpg",audio:"audio/leadership/day-2",sonnet:`**🪶 Sonnet II: The Trust Equation**

What currency buys loyalty that gold cannot?
What bridge spans the chasm 'tween command and choice?
Not silver words or titles dearly bought,
But trust—that makes the silent heart rejoice.

Credibility earned through deed, not boast,
Reliability's rhythm, steady, true,
Intimacy that welcomes friend and ghost—
The vulnerable soul that others knew.

Yet self-regard can poison all the well,
When leaders serve their image, not their crew.
The equation's balance tells the tale:
How much of 'me' divides what 'we' can do.

*In drops trust builds, in torrents it departs—*
*Guard well the treasure housed in others' hearts.*`,standard:`👥 Day 2: The Trust Equation

If stripped of formal power, people would follow you only if you've invested in relationships built on **trust**—the invisible currency that makes true leadership possible. This reveals whether your leadership stems from genuine care and proven reliability, or merely from the leverage of position. Trust is the bridge between having authority and earning influence.

🧱 **The Concept**
Trust is the fundamental currency of leadership—without it, even the most brilliant strategies and compelling visions fall flat.

❓ **Why It Matters**
People don't follow leaders they don't trust, regardless of their competence or charisma. Trust acts as a multiplier for every other leadership quality, while its absence creates resistance that no amount of authority can overcome. In high-stakes situations, teams with trusted leaders outperform those led by fear or compliance.

⚙️ **How It Works**
Trust is built through the **Trust Equation**: Credibility + Reliability + Intimacy, divided by Self-Orientation. **Credibility** means people believe in your expertise and track record. **Reliability** means you consistently do what you say you'll do, when you say you'll do it. **Intimacy** means people feel safe being vulnerable with you—sharing problems, admitting mistakes, proposing bold ideas. **Self-Orientation** measures how much you focus on yourself versus others' interests. When **Frances Hesselbein** led Girl Scouts USA, she built trust by consistently putting the organization's mission above personal recognition, maintaining transparent communication, and following through on every commitment. Her low self-orientation and high reliability created a culture where people trusted her with their most ambitious visions for change.

🎯 **Leadership Wisdom**
Trust is earned in drops and lost in buckets—guard it as your most precious leadership asset.

❓ **Tomorrow's Question** — When was the last time someone on your team came to you with a problem they were afraid to share with anyone else? What does this reveal about the psychological safety you've created?`,parable:`Captain Tova stood before her crew as storm clouds gathered on the horizon. Three weeks into her command, she had relied heavily on naval protocol and her captain's stripes to maintain order. But the men's eyes held something troubling—compliance without commitment, obedience without enthusiasm.

"Tell me about the previous captain," Tova asked Greymane that evening as they watched the crew secure the rigging with mechanical precision.

Greymane's weathered hands traced the ship's rail. "Captain Blackwood was brilliant—could navigate by stars alone, knew every maritime law by heart. But when he spoke, the crew heard orders. When the men made mistakes, they hid them. When storms came, they followed protocol, nothing more."

"And you?" Tova pressed. "How did your crews respond differently?"

The old admiral smiled. "I learned early that a captain's greatest treasure isn't gold or glory—it's trust. I made it my practice to know each sailor's story, to admit my own mistakes openly, to keep every promise, no matter how small. When young Morrison confessed he'd never learned to read properly, I spent evenings teaching him. When the cook worried about his sick daughter, I adjusted our route to dock near a skilled physician."

"But surely that made you seem weak?"

"Quite the opposite. When the great typhoon of '98 struck, my crew didn't just follow orders—they anticipated needs, shared ideas, worked through the night without complaint. They trusted me with their lives because I had trusted them with my vulnerabilities."

Tova watched her crew below. Tomorrow she would begin differently—not with commands, but with questions. Not with authority, but with authentic interest in the people she served.

**Moral**: Trust is not given to the perfect leader, but to the genuine one who proves worthy through consistent care and reliability.

**Tomorrow**: Even with trust established, how do you create an environment where people feel safe to fail, to voice unpopular opinions, and to bring you their deepest concerns?`},{day:3,title:"The Sanctuary of Safety",date:"2026-03-04",image:"images/leadership/day-3.jpg",audio:"audio/leadership/day-3",sonnet:`**🪶 Sonnet III: The Sanctuary of Safety**

Within the leader's presence, fear takes flight,
When souls can speak their doubts without the dread
That honest words might bring them shame or spite—
A sanctuary where truth lifts every head.

The captain who responds to errors made
With curious heart, not blame's destructive sword,
Builds trust that will not crumble or fade
When storms demand that every truth be heard.

For when the crew feels safe to voice concern,
To share the fears that lesser chiefs would spurn,
Then wisdom flows where once was silent dread,
And solutions rise from honesty instead.

*Psychological safety's gentle art*
*Transforms the fearful mind to trusting heart.*`,standard:`👥 Day 3: The Sanctuary of Safety

When someone risks vulnerability by bringing you their deepest fears or failures, they're telling you that you've created something rare—a space where psychological safety exists. This moment reveals whether you've mastered the art of making others feel heard, valued, and protected from judgment. If such moments are rare or absent, it signals that your leadership may still feel more like authority than refuge.

🧱 **The Concept**
Psychological safety is the shared belief that one can speak up, ask questions, admit mistakes, and propose ideas without fear of negative consequences to their status or career.

❓ **Why It Matters**
Teams with high psychological safety consistently outperform others because members freely share critical information, surface problems early, and propose innovative solutions without fear. When people feel unsafe, they withhold the very insights and warnings that could prevent disasters or unlock breakthroughs. Google's Project Aristotle found psychological safety to be the strongest predictor of team effectiveness, surpassing even talent and resources.

⚙️ **How It Works**
Psychological safety is cultivated through **consistent responses** to vulnerability. When someone admits a mistake, respond with curiosity about prevention, not blame about the past. When they surface a risky idea, explore its potential before its problems. When they challenge your thinking, thank them for their courage before defending your position. **Amy Edmondson** demonstrated this at Harvard by encouraging medical teams to report near-misses without punishment—error reporting increased 10-fold, leading to dramatic improvements in patient safety. The key behaviors include **acknowledging your own fallibility**, **modeling curiosity over judgment**, and **celebrating productive disagreement**. Leaders who consistently respond to vulnerability with support rather than punishment create environments where truth flows upward instead of fear flowing downward.

🎯 **Leadership Wisdom**
Psychological safety isn't about lowering standards—it's about creating the conditions where high standards can actually be achieved.

❓ **Tomorrow's Question** — If you removed your title and formal authority tomorrow, which of your current followers would continue to seek your guidance based solely on the value you add to their lives and work?`,parable:`The morning after Greymane's lesson on trust, Tova found herself facing a test. Kael, her most experienced navigator, approached with shoulders hunched and eyes downcast—a man who had never shown uncertainty in twenty years at sea.

"Captain," he began hesitantly, "I fear I've made an error in our course calculations. We may be three days behind schedule, and... and I'm not certain of our current position."

Tova felt her jaw tighten. The admission could mean disaster—lost time, missed opportunities, potential danger. But she remembered Greymane's words about creating sanctuary, and noticed something profound: Kael had come to *her* with this fear, when he could have hidden it until discovery made concealment impossible.

"Thank you for trusting me with this," she said, her voice steady. "Tell me what you're seeing in the charts."

As Kael spread the navigation tools before them, his relief was palpable. Together, they worked through the calculations, discovering not gross error but a subtle current shift that required course adjustment. What might have been a catastrophe became a collaborative solution.

Greymane, observing from his usual corner, nodded approvingly. "A wise captain creates a harbor where truth can dock safely," he murmured to himself. "For when storms come—and they always do—you'll need every piece of honest intelligence your crew can provide."

By evening, word had spread quietly through the ship: their new captain was someone you could approach with problems, not just progress reports.

*Moral: Psychological safety isn't permissiveness—it's the strength to handle truth gracefully, creating conditions where your team's honesty becomes your greatest navigational tool.*

Tomorrow, Tova will discover what happens when formal authority is stripped away—and learn who follows the person versus the position.`},{day:4,title:"The Influence Paradox",date:"2026-03-04",image:"images/leadership/day-4.jpg",audio:"audio/leadership/day-4",sonnet:`**🪶 Sonnet IV: The Influence Paradox**

When titles fade and formal power departs,
What draws souls still to seek your guiding word?
Not rank's command that binds reluctant hearts,
But influence earned through service long conferred.

Authority may bend the will by force,
Yet influence lifts the spirit from within;
One rules through fear and predetermined course,
The other leads where transformation's been.

The captain's stripes may grant the right to steer,
But wisdom shared creates the truest crew;
When sailors follow not from duty's fear,
But seek your counsel for the value true.

*Position grants the power to command,*
*But influence flows from heart to guiding hand.*`,standard:`👥 Day 4: The Influence Paradox

The question reveals a profound truth: those who would still seek your guidance without your title are following your **influence**, not your **authority**. They come to you because you consistently add value to their thinking, open new possibilities, or help them become better versions of themselves—not because an org chart compels them to. This distinction separates temporary positional leaders from enduring influential ones.

🧱 **The Concept**
Authority is power granted by position and structure, while influence is power earned through value, trust, and the ability to inspire voluntary followership.

❓ **Why It Matters**
Authority can command compliance, but only influence can inspire commitment and unleash people's discretionary effort. In our rapidly changing world, formal hierarchies flatten and shift constantly, but influence transcends organizational boundaries and outlasts job titles. Leaders who rely primarily on authority find themselves powerless when that authority is removed, while those who build influence create lasting impact that extends far beyond their formal roles.

⚙️ **How It Works**
Influence operates through **value creation** rather than power assertion. When **John Wooden** coached UCLA basketball, players continued seeking his wisdom decades after graduation—not because he remained their coach, but because his insights consistently made them better people and competitors. **Servant leadership** exemplifies this principle: leaders who focus on developing others rather than commanding them build deep influence. **Nelson Mandela** transformed from prisoner to president not through formal authority, but by consistently demonstrating moral courage and putting others' needs above his own. Influence builders ask "How can I help you succeed?" before "What can you do for me?" They **listen more than they speak**, **develop others before promoting themselves**, and **share credit while taking responsibility**. Unlike authority, which diminishes when shared, influence multiplies when you use it to empower others.

🎯 **Leadership Wisdom**
True leaders don't create followers—they create other leaders who choose to follow because the relationship adds irreplaceable value to their lives.

❓ **Tomorrow's Question** — What would happen if you spent the next month asking "How can I serve you?" before "What do you need from me?" in every interaction with those you lead?`,parable:`Captain Tova found Greymane mending nets by the harbor, his weathered hands working with practiced precision despite his retirement from active command.

"Admiral," she began, "yesterday we spoke of creating safety for my crew. But I wonder—when you stepped down from command, did your captains still seek your counsel?"

Greymane smiled, his fingers never pausing in their work. "More than when I wore the admiral's insignia," he replied. "You see, Captain, there are two kinds of power in this world. There is the power that comes with rank—the authority to give orders, assign duties, control resources. And there is the power that comes from within—the ability to inspire, to guide, to serve others' highest aspirations."

He held up the mended net, testing its strength. "Authority is like this fishing line—strong when new, but it frays with use and breaks under pressure. Influence, however, is like the weave itself—each strand strengthens the others, and the whole becomes more resilient than any single thread."

"But how does one build such influence?" Tova asked, watching him work.

"By asking not 'What can they do for me?' but 'How can I serve their growth?'" Greymane replied. "When I led the northern fleet, I had captains who obeyed my orders because they had to. But the ones who sought my guidance after I retired? Those were the ones I had helped become better sailors, better leaders, better versions of themselves. They followed my influence, not my authority, because our relationship added something irreplaceable to their lives."

He set down the net and looked directly at her. "Authority commands compliance, Captain. Influence inspires commitment. One day your rank may be stripped away by storms or circumstance, but if you focus on serving those you lead, your influence will endure long after your title fades."

**Moral:** True leadership transcends position—it lives in the value you create for others and the growth you inspire in their lives.

*Tomorrow, Greymane will reveal the secret of leadership that multiplies itself...*`},{day:5,title:"The Trust Multiplier",date:"2026-03-05",image:"images/leadership/day-5.jpg",audio:"audio/leadership/day-5",sonnet:`**🪶 Sonnet V: The Trust Multiplier**

What bonds can bind when titles hold no sway?
What strength emerges when the heart leads true?
Trust builds in drops through each consistent day,
Yet shatters swift when words and deeds unglue.

The leader who would see their people soar
Must first convince them safety lies within—
That mistakes shared will open wisdom's door,
And vulnerability marks where trust begins.

Each promise kept, though small it may appear,
Deposits gold in credibility's vault,
While broken vows, once whispered in the ear,
Withdraw in buckets what took years to exalt.

*For trust multiplies what skills alone can't do—*
*Transform mere workers into leaders true.*`,standard:`👥 Day 5: The Trust Multiplier

Shifting from "What do you need from me?" to "How can I serve you?" would fundamentally alter your leadership dynamic—transforming you from a resource manager into a **trust builder**. This subtle change signals that you see your role as empowering others' success rather than extracting their output, creating psychological safety that unleashes innovation and discretionary effort.

🧱 **The Concept**
Trust is the multiplier that amplifies every other leadership skill—without it, even the best intentions and strategies fall flat.

❓ **Why It Matters**
Trust determines the speed at which teams execute and innovate. **High-trust environments** enable rapid decision-making, honest feedback, and creative risk-taking because people believe their leader has their best interests at heart. **Low-trust environments** create defensive behavior, political maneuvering, and the hoarding of information. Research shows that companies with high-trust cultures outperform peers by 250% in stock returns and experience 74% less stress among employees.

⚙️ **How It Works**
Trust builds through **consistency between words and actions** over time. When **Frances Hesselbein** led Girl Scouts USA, she practiced "management by wandering around"—not to check up on people, but to understand their challenges and remove obstacles. **Vulnerability-based leadership** accelerates trust: leaders who admit mistakes, ask for help, and show genuine concern for others' wellbeing create permission for others to be equally authentic. **Transparent communication** about both victories and setbacks demonstrates integrity. **Follow-through** on commitments, no matter how small, builds credibility incrementally. The **trust equation** operates simply: credibility plus reliability plus intimacy, divided by self-orientation, equals trustworthiness.

🎯 **Leadership Wisdom**
Trust is built in drops and lost in buckets—every interaction either deposits or withdraws from your trust account with others.

❓ **Tomorrow's Question** — If your team knew that admitting mistakes would make you respect them more rather than less, how would their behavior change, and what does this reveal about the culture you're actually creating?`,parable:`**The Harbor Master's Test**

Tova found herself staring at the harbor charts spread across her cabin table, each marking showing another missed deadline, another crew member's growing frustration. The weight of captaincy felt heavier than her anchor chain.

Greymane appeared at her door with two steaming cups of bitter harbor tea. "The crew whispers that you're different from Captain Thornwick," he said, settling into the worn chair across from her. "But different how, they wonder?"

"I try to listen to their concerns," Tova replied, tracing a finger along the shipping routes. "But they still seem... guarded."

Greymane nodded slowly. "Thornwick demanded reports. You ask for input. That's progress, but not transformation." He leaned forward, his weathered hands wrapping around his cup. "Tell me, when Finn the rigger came to you yesterday about the fraying mainlines, what was your first thought?"

Tova flushed. "How much it would cost to replace them ahead of schedule."

"Aye. And Finn sensed that, didn't he?" Greymane's eyes twinkled with understanding. "Trust isn't built through policy changes, young captain. It's built when your crew believes—truly believes—that their wellbeing matters more to you than your ledger books."

The next morning, Tova found Finn inspecting the rigging. "Finn," she called up to him, "what do you need to keep our crew safe?" 

The rigger paused his work, studying her face. "Captain, those lines need replacing. But more than that... we need to know you'd rather arrive late with everyone whole than on time with someone hurt."

Tova felt something shift in her chest—a recognition that trust wasn't about being liked, but about being worthy of others' faith in her judgment.

**Moral:** Trust multiplies when leaders prove through consistent action that they value people over profits, relationships over results, and long-term wellbeing over short-term gains.

*Tomorrow, Greymane will share the most dangerous mistake new leaders make when giving feedback...*`}],Jv=[{day:1,title:"The Longevity Paradox",date:"2026-03-02",image:"images/health-and-longevity/day-1.jpg",audio:"audio/health-and-longevity/day-1",sonnet:`**🪶 Sonnet I: The Longevity Paradox**

We chase the fountain youth in distant lands,
While wisdom flows from our forgotten well.
With pills and potions clutched in trembling hands,
We miss the truths that simple habits tell.

The secret lies not in some mystic art,
But in the rhythm of our daily breath.
Each restful sleep repairs the aging heart,
Each movement writes a letter against death.

Yet knowing this, we turn from what is plain,
Seduced by promises of magic cures.
We complicate what should be free from strain,
And lose ourselves in what the mind obscures.

*The longest lives are built on boring ground:*
*In simple acts, profound truths can be found.*`,standard:`⏳ **Day 1: The Longevity Paradox**

Welcome to our journey through the science of living longer and better. We'll explore the cutting-edge research on sleep, exercise, stress, and the daily habits that can add decades of healthy life.

🧱 **The Concept**
True longevity isn't about adding years to your life, but adding life to your years through evidence-based optimization of fundamental biological processes.

❓ **Why It Matters**
Most people focus on treating disease rather than building health. The latest research from longevity scientists like Peter Attia shows that the habits we build in our 30s, 40s, and 50s determine our healthspan—the years we live free from chronic disease and disability. Small daily optimizations compound over decades into dramatically different outcomes.

⚙️ **How It Works**
Longevity science focuses on four key pillars: sleep architecture (deep sleep cycles repair cellular damage), exercise physiology (resistance training preserves muscle mass and bone density), stress management (chronic cortisol accelerates aging), and metabolic health (insulin sensitivity affects everything from brain function to cancer risk). For example, just 150 minutes of moderate exercise weekly can add 3-7 years to your lifespan, while optimizing sleep quality reduces Alzheimer's risk by up to 40%. The magic lies in consistency—these aren't quick fixes but lifestyle architectures that work synergistically over time.

📖 **Definitions**
• **Healthspan** - Years lived in good health, free from chronic disease
• **Biomarkers** - Measurable indicators of biological processes and health status
• **Hormesis** - Beneficial stress that strengthens the body (like exercise or cold exposure)
• **Metabolic flexibility** - The body's ability to efficiently switch between fuel sources

🎯 **Longevity Wisdom**
The most powerful longevity interventions are often the most mundane: consistent sleep, regular movement, stress management, and strong relationships.

❓ **Tomorrow's Question** — If the most effective longevity practices are simple and well-known, why do so few people consistently implement them? What psychological and environmental barriers prevent us from doing what we know works?`,parable:`Senna burst into the mountain cave where Dusk sat motionless, surrounded by scrolls and herbs. "Master, I've catalogued every disease in the valley! Consumption, fever, the wasting sickness—I must learn to cure them all!"

Dusk opened eyes that had witnessed the rise and fall of civilizations. "Child, you study death. I study life."

"But people are suffering! They need healing!"

"Indeed." Dusk gestured to a simple wooden bowl filled with clear water. "Tell me, what do you see?"

Senna peered closely. "Water. Pure, but... ordinary."

"This water has flowed from the same spring for three thousand years. The villagers who drink from it daily live longer than those in the cities below, with their exotic medicines and elaborate treatments. Yet none call the water miraculous."

"That's impossible. Water cannot cure—"

"It cannot cure," Dusk agreed, "because there is nothing to cure. It prevents. It nourishes. It sustains." He stood slowly, joints creaking like old oak. "You seek to battle death after it arrives. I learned long ago to make friends with life before death notices."

Senna frowned. "But surely there are secrets—hidden knowledge, ancient remedies?"

Dusk smiled, the expression carving deeper lines in his weathered face. "The greatest secrets hide in plain sight. Sleep when the sun sets. Move your body daily. Eat when hungry, stop when satisfied. Breathe deeply. Love freely. These bore emperors to tears, yet outlive their monuments."

**Moral**: The most profound longevity wisdom appears deceptively simple, hidden not in complexity but in consistency.

*Tomorrow, Senna will challenge why such simple truths prove so difficult to follow...*`},{day:2,title:"The Implementation Gap",date:"2026-03-03",image:"images/health-and-longevity/day-2.jpg",audio:"audio/health-and-longevity/day-2",sonnet:`**🪶 Sonnet II: The Implementation Gap**

We know the path to longer, healthier days,
Yet struggle still to walk the well-worn road,
Our ancient minds seek pleasure's fleeting blaze
While wisdom bears a slow, unglamorous load.

The screen's bright ping defeats the morning run,
Sweet comfort foods outweigh the bitter greens,
We choose what feels like victory quickly won
Over the patient work that longevity means.

Our brains evolved for immediate reward,
Not decades-distant benefits unseen,
In modern chaos, healthy habits warred
Against temptations sharp and serpentine.

*Yet those who craft their world with mindful care*
*Make virtue effortless as breathing air.*`,standard:`⏳ **Day 2: The Implementation Gap**

The gap between knowing and doing exists because our brains are wired for immediate rewards, not long-term benefits that unfold over decades. Modern environments hijack our ancient psychology with constant stimulation, making the "boring" consistency required for longevity feel impossible against dopamine-driven alternatives.

🧱 **The Concept**
The implementation gap in longevity practices stems from evolutionary psychology meeting modern environments—our brains seek immediate gratification while health benefits compound slowly over time.

❓ **Why It Matters**
Understanding why we struggle with healthy habits is the first step to designing systems that work with our psychology, not against it. Research shows that environmental design and habit architecture matter more than willpower or motivation for long-term behavior change.

⚙️ **How It Works**
Our brains evolved to prioritize immediate survival over long-term optimization, making future-focused behaviors feel less rewarding than present-moment pleasures. Modern technology exploits this with variable reward schedules (social media notifications, streaming content) that make consistent, "boring" habits feel inadequate by comparison. The solution lies in **environment design**: making healthy choices the default option, **habit stacking**: linking new behaviors to established routines, and **identity shifts**: focusing on who we want to become rather than what we want to achieve. For example, instead of "I need to exercise more," the identity becomes "I am someone who moves daily," which then drives consistent behavior.

🎯 **Longevity Wisdom**
Successful longevity isn't about perfect discipline—it's about designing your environment and identity to make healthy choices inevitable.

❓ **Tomorrow's Question** — If our modern environment actively works against our health, what would a truly longevity-optimized living space and daily routine actually look like in practice?`,parable:`Senna paced frantically around her herb garden, scrolling through endless research papers on her tablet. "Look at all these studies, Dusk! Intermittent fasting extends lifespan by 20%. High-intensity training reverses cellular aging. Meditation reduces cortisol by 40%. Yet my patients know all this and still can't stick to anything for more than a week!"

Dusk sat motionless on a weathered stone, watching a turtle slowly cross the path. "That turtle has outlived three generations of rabbits," he said quietly. "Not because it learned secret techniques, but because it never stopped being a turtle."

"But people aren't turtles!" Senna protested. "They have smartphones buzzing every minute, processed food on every corner, work stress crushing their sleep—"

"Exactly." Dusk picked up the turtle and gently moved it to safety. "You're asking villagers to live like monks in a carnival. Their brains were shaped over millions of years to seek immediate rewards—ripe fruit, warm shelter, social connection. Now those same reward circuits are hijacked by devices designed to be irresistible."

Senna paused. "So the problem isn't lack of knowledge?"

"The problem is fighting your nature instead of designing around it." Dusk pointed to the turtle, now safely munching grass. "That creature doesn't resist temptation—it simply has no casino in its path. The wise healer doesn't demand superhuman willpower. She removes the obstacles and makes health the easy choice."

**Moral:** True longevity wisdom lies not in perfect discipline, but in crafting an environment where healthy choices become inevitable.

**Tomorrow, Dusk will show Senna what a truly longevity-optimized life actually looks like—and why it might seem surprisingly ordinary.**`},{day:3,title:"The Longevity Environment",date:"2026-03-04",image:"images/health-and-longevity/day-3.jpg",audio:"audio/health-and-longevity/day-3",sonnet:`**🪶 Sonnet III: The Longevity Environment**

Within these walls where wisdom shapes each choice,
No battle wages 'gainst our mortal flesh;
The space itself becomes our guiding voice,
Making old temptations fade and wellness fresh.

The eastern window greets each rising sun,
While water gleams in vessels clean and bright;
Where phones might lurk, good books their vigil run,
And movement waits prepared for morning light.

No sugared demons hide in shadowed nooks,
No processed sirens sing from pantry shelves;
Instead, whole foods and well-worn walking books
Conspire to lift our longevity-bound selves.

*For strongest walls aren't built by force of will,*
*But spaces wise that make choices fulfill.*`,standard:`⏳ **Day 3: The Longevity Environment**

A longevity-optimized environment would prioritize natural light exposure, eliminate processed foods from easy access, and structure physical movement into the architecture itself—think standing workstations, stairs instead of elevators, and meal prep stations that make healthy eating effortless. The daily routine would mirror our circadian biology: morning sunlight, consistent meal timing, and technology boundaries that protect sleep.

🧱 **The Concept**
Environmental design is more powerful than willpower—our surroundings shape our behaviors automatically, making longevity practices either inevitable or impossible.

❓ **Why It Matters**
Research shows we make over 35,000 decisions daily, most unconsciously influenced by our environment. By designing spaces that default to healthy choices, we eliminate decision fatigue and make longevity behaviors effortless rather than effortful.

⚙️ **How It Works**
Longevity-focused environmental design works through **choice architecture**—structuring options so healthy behaviors become the path of least resistance. This means placing workout equipment in visible locations, keeping whole foods at eye level while hiding processed snacks, using natural lighting that supports circadian rhythms, and creating phone-free zones for better sleep hygiene. **Friction design** adds barriers to unhealthy behaviors (keeping junk food in hard-to-reach places) while removing friction from beneficial ones (laying out workout clothes the night before). **Visual cues** serve as constant reminders—a water bottle on your desk, walking shoes by the door, or a book instead of a phone on your nightstand. The compound effect means these micro-decisions, repeated thousands of times, become the difference between thriving and merely surviving.

🎯 **Longevity Wisdom**
Your environment is your extended phenotype—it literally becomes part of your biology through the behaviors it shapes daily.

❓ **Tomorrow's Question** — If our genes load the gun but our environment pulls the trigger, how do we distinguish between genetic destiny we must accept and epigenetic expression we can control?`,parable:`Senna found Dusk sitting in what appeared to be the world's most ordinary room. No exotic herbs lined the walls, no ancient symbols marked the floors—just a simple space with windows facing east, a bed positioned away from any screens, and fresh water in clear view.

"This is your secret?" Senna asked, incredulous. "This... emptiness?"

Dusk smiled, running weathered fingers along a wooden surface worn smooth by countless mornings. "Look closer, young healer. Every choice has been made invisible."

Senna's eyes adjusted. The room wasn't empty—it was intentional. Clothes lay ready for morning movement. Books rested where phones might tempt. The kitchen beyond held no hidden sugars, no processed temptations lurking in dark corners.

"I spent centuries fighting my impulses," Dusk explained, "until I learned to design them away. This room makes healthy choices inevitable and unhealthy ones impossible. I don't resist temptation—I architect it out of existence."

"But surely willpower matters?" Senna protested.

"Willpower is finite," Dusk replied, opening shutters to let in natural light. "Environment is infinite. Every morning, this space pulls me toward practices that compound over decades. I don't choose to live well—I simply live in a space that chooses wellness for me."

Senna watched the light flood the room, understanding dawning. The ancient wanderer hadn't conquered nature—he had collaborated with it.

**Moral**: The strongest foundation for longevity isn't built on willpower, but on wisdom that makes healthy choices effortless.

*Tomorrow, Senna will discover why some people seem destined for disease while others appear blessed with unshakeable health—and why this assumption might be dangerously wrong.*`},{day:4,title:"The Epigenetic Revolution",date:"2026-03-04",image:"images/health-and-longevity/day-4.jpg",audio:"audio/health-and-longevity/day-4",sonnet:`**🪶 Sonnet IV: The Epigenetic Revolution**

Though genes may load the chamber of our fate,
The trigger rests within our daily hand—
Each choice we make, each habit we create
Sends signals that our chromosomes understand.

The DNA lies silent, fixed in stone,
But methylation marks dance on and off,
As exercise and stress, in undertone,
Instruct our cells to flourish or to scoff.

A father's fear may pass to unborn son,
A mother's joy may gift her child with strength—
The epigenetic story has begun
To show how lifestyle travels any length.

*What seemed like destiny now bends to will,*
*Our genes await the songs our choices trill.*`,standard:`⏳ **Day 4: The Epigenetic Revolution**

We distinguish between genetic destiny and epigenetic control by understanding that while we inherit fixed DNA sequences (our genetic "hardware"), the expression of these genes acts more like software that can be updated through lifestyle choices. Modern epigenetic research reveals that factors like sleep quality, exercise intensity, stress management, and even social connections can literally turn genes on or off, meaning our daily habits become instructions that our cells follow.

🧱 **The Concept**
Epigenetics is the study of heritable changes in gene expression that don't involve alterations to the DNA sequence itself—essentially, how our behaviors and environment tell our genes what to do.

❓ **Why It Matters**
While we can't change our genetic code, we control roughly 80% of our longevity through epigenetic factors. This means the majority of how we age, our disease risk, and our healthspan are determined not by the genes we inherited, but by how we live each day.

⚙️ **How It Works**
Epigenetic mechanisms work through **DNA methylation** (chemical tags that silence or activate genes), **histone modification** (proteins that package DNA and control access), and **microRNAs** (molecular switches that regulate gene expression). For example, regular exercise triggers methylation patterns that activate genes for muscle growth and repair while silencing inflammatory pathways. **Intermittent fasting** influences histone modifications that enhance cellular cleanup processes and stress resistance. **Chronic stress** creates methylation patterns that upregulate cortisol production and inflammatory responses, while **meditation and social connection** reverse these patterns. Even more remarkably, these epigenetic changes can be passed to offspring, meaning your lifestyle choices today influence your children's genetic expression tomorrow.

🎯 **Longevity Wisdom**
Your genes are not your destiny—they're your starting point, and every day you write new instructions for how they express themselves.

❓ **Tomorrow's Question** — If we can reprogram our genetic expression through daily choices, why do most people continue behaviors that actively shorten their lives even when they know better?`,parable:`Senna found Dusk examining two identical saplings in the monastery garden, one thriving with emerald leaves, the other stunted and pale.

"These trees share the same seed parent," Dusk said, not looking up. "Yet see how differently they grow."

"One must have defective roots," Senna declared, kneeling to inspect the struggling plant. "Some genetic weakness."

Dusk chuckled, his weathered hands gentle on the healthy tree's bark. "Look closer, young healer. Same genetics, different expressions. This one receives morning light, rich soil, proper drainage. Its companion lives in shadow, compacted earth, too much water." He paused, watching understanding dawn in Senna's eyes. "The seeds were identical, but their environments wrote different stories on the same genetic pages."

"So the environment controls the genes?" Senna asked.

"The environment instructs the genes how to express themselves," Dusk corrected. "I've watched this dance for centuries—in trees, in people, in entire civilizations. Your ancestors gave you the raw material, but every breath you take, every choice you make, every stress you endure or joy you embrace sends messages to your cells. These messages tell your genes which programs to run: repair or decay, inflammation or healing, growth or decline."

Senna touched the pale sapling. "Can it still recover?"

"Change the conditions, change the expression," Dusk smiled. "The genetic potential remains. I've seen dying men transform into vitality simply by altering their daily instructions to their cells. Sleep, movement, nourishment, peace—these become the language we speak to our genes."

**Moral:** While we inherit our genetic vocabulary, we author the sentences our cells read each day.

*Tomorrow, Senna will discover why knowledge alone fails to change behavior, and Dusk will reveal the ancient secret of transformation.*`},{day:5,title:"The Behavior-Biology Disconnect",date:"2026-03-05",image:"images/health-and-longevity/day-5.jpg",audio:"audio/health-and-longevity/day-5",sonnet:`**🪶 Sonnet V: The Behavior-Biology Disconnect**

Though wisdom whispers what our bodies need,
Ancient desires drown out reason's call,
For dopamine rewards the urgent deed—
The sweet, the soft, the pleasures that enthrall.

Our hunter's brain seeks calories and rest,
Not treadmills in fluorescent-lighted rooms,
While stress responses, once our survival's test,
Now flood our veins with cortisol's dark fumes.

The disconnect 'tween knowledge and our acts
Lies not in weakness of our moral will,
But mismatch where our evolution lacks
The code for choices that would keep us still.

*Design your world to match your body's creed—*
*Let environment fulfill your longevity's need.*`,standard:`⏳ **Day 5: The Behavior-Biology Disconnect**

The answer lies in the mismatch between our ancient biology and modern environment—our brains evolved reward systems optimized for immediate survival, not long-term health optimization. Despite knowing that smoking causes cancer or that processed foods drive inflammation, our dopamine pathways prioritize immediate pleasure over future consequences, creating what researchers call "present bias" where the immediate reward always feels more compelling than distant benefits.

🧱 **The Concept**
The behavior-biology disconnect describes how our evolutionary programming for short-term survival conflicts with the behaviors needed for modern longevity.

❓ **Why It Matters**
Understanding this disconnect explains why willpower fails and why sustainable health changes require working with our biology, not against it. The gap between knowing what's healthy and actually doing it isn't a character flaw—it's a design feature that once kept us alive but now limits our lifespan.

⚙️ **How It Works**
Our **dopamine system** evolved to reward calorie-dense foods, social bonding, and immediate safety, not gym sessions or meditation. **Hyperbolic discounting** means we value immediate rewards exponentially more than future ones—a cookie today feels more valuable than health in 20 years. **Stress responses** that once helped us escape predators now trigger chronic cortisol release from work deadlines and social media. The solution isn't more willpower but **environmental design**: making healthy choices the path of least resistance. For example, **removing processed foods from your home** eliminates decision fatigue, **scheduling workouts like appointments** leverages our social compliance instincts, and **using implementation intentions** ("if-then" plans) automates good decisions before our impulse system activates.

🎯 **Longevity Wisdom**
Sustainable health isn't about overriding your biology—it's about designing your environment so healthy choices become automatic.

❓ **Tomorrow's Question** — If our environment shapes our choices more than our willpower, what does this reveal about the role of community and social connections in determining how long we live?`,parable:`Senna paced the healing chamber, her latest patient files scattered across stone tables like fallen leaves. "I don't understand, Master Dusk," she said, voice tight with frustration. "I've shown them the herbs that heal, the movements that strengthen, the practices that extend life. Yet they return, sicker than before, clutching the same poisons that brought them to me."

Dusk sat motionless in the corner, ancient eyes reflecting candlelight. "Tell me, young healer, when you see honey dripping from a hive, do you blame the bees for following their nature?"

"Bees follow instinct, not knowledge," Senna replied sharply.

"Precisely." Dusk's weathered hands gestured to the scrolls of medical wisdom surrounding them. "Your people carry the minds of philosophers in the bodies of hunter-gatherers. Their flesh craves what once meant survival—the sweet fruit that promised energy, the warm hearth that meant safety, the immediate pleasure that drowned out the fear of tomorrow's predator. But now, the fruit is poison-sweet, the hearth is endless stimulation, and tomorrow's predator has become tomorrow's consequence."

Senna sank into her chair. "Then how do you break such ancient chains?"

"You don't break them," Dusk smiled. "You redirect them. I've watched empires rise and fall, seen the same pattern: those who live longest don't fight their nature—they design their world to make their nature work for them. Remove temptation's reach. Make health the path of least resistance. Transform environments, not willpower."

**Moral:** *The wise healer knows that lasting change comes not from conquering our nature, but from crafting environments where our nature serves our longevity.*

*Tomorrow, Dusk will reveal how the bonds between souls might be the greatest medicine of all...*`}],$v=[{day:1,title:"The Sacred Foundation",date:"2026-03-04",image:"images/wedding-planning/day-1.jpg",audio:"audio/wedding-planning/day-1",sonnet:`**🪶 Sonnet I: The Sacred Foundation**

Amidst the chaos of a thousand dreams,
Where venues sparkle and the flowers call,
The bride sits lost in overwhelming schemes,
Unsure which path will lead her through it all.

But wise ones know that beauty built on sand
Will crumble when the storms of stress arise,
While those who first understand their stand
Find every choice reflected in love's eyes.

The sacred truth that binds two hearts as one
Must be the cornerstone of all that's planned,
For when this foundation's work is done,
Each detail flows from love's own steady hand.

*No flower, dress, or feast can truly shine*
*Until you know the "why" that makes love thine.*`,standard:`💍 **Day 1: The Sacred Foundation**

Every great wedding begins not with flowers or venues, but with understanding what you're truly celebrating.

🧱 **The Concept**
Your wedding foundation is the core truth of why you're marrying—beyond the party, beyond the expectations, beyond the Instagram moments.

❓ **Why It Matters**
Without a clear foundation, every decision becomes overwhelming because you lack a North Star to guide you. When you know your "why," choices become easier because they either align with your truth or they don't. This foundation becomes your shield against the noise of others' opinions and the pressure of perfection.

⚙️ **How It Works**
Start by sitting together and asking: "What does this marriage mean to us?" Maybe it's building a life of adventure, creating a sanctuary of peace, or blending two families into one. Write down your core values as a couple—perhaps authenticity, joy, family connection, or spiritual growth. Then, as you plan, ask of every choice: "Does this serve our foundation?" A couple whose foundation is intimacy might choose a small ceremony over a grand spectacle. One focused on family legacy might prioritize traditions over trendy details. Your foundation becomes your wedding's DNA, influencing everything from guest count to vows to reception style.

🎯 **Wedding Wisdom**
A wedding built on a strong foundation weathers every storm of planning stress and shines with authentic purpose.

❓ **Tomorrow's Question** — If your wedding had to communicate just one truth about your relationship to everyone present, what would that truth be, and how might that challenge the traditional wedding template you've been imagining?`,parable:`Dove sat surrounded by wedding magazines, her coffee growing cold as she flipped through pages of cascading bouquets and crystal chandeliers. Each image seemed more breathtaking than the last, yet somehow more suffocating. "How do people choose?" she whispered, overwhelmed by the endless options.

Elm found her there, notebook filled with question marks and crossed-out ideas. "What's wrong, love?" he asked, settling beside her.

"Everything!" Dove gestured at the chaos. "Your mother wants traditional hymns, my sister insists on a destination wedding, Instagram says we need a signature cocktail, and Pinterest demands mason jar centerpieces. I don't even know what I want anymore."

The next morning, Nana Rose arrived with nothing but a weathered leather journal and two cups of tea. She'd planned over a thousand weddings, yet carried no magazines, no sample books, no vendor lists.

"Before we talk flowers or food," Nana Rose said, opening to a blank page, "tell me about your love. Not your wedding—your love. What makes it sacred? What makes it yours?"

Dove and Elm exchanged glances. In all their planning frenzy, they'd never asked this question. Slowly, they began to speak—about quiet Sunday mornings, about how they made each other braver, about building something beautiful together.

Nana Rose smiled, writing their words in elegant script. "This," she said, tapping the page, "is your foundation. Everything else is just decoration."

**Moral:** *A wedding without foundation is merely a party with vows; a wedding built on truth becomes a sacred celebration of love itself.*

*Tomorrow, Dove will discover that even the most beautiful traditions must pass through the filter of authenticity...*`},{day:2,title:"Choosing Your Wedding's Voice",date:"2026-03-05",image:"images/wedding-planning/day-2.jpg",audio:"audio/wedding-planning/day-2",sonnet:`**🪶 Sonnet II: Choosing Your Wedding's Voice**

When love speaks truly, it needs no borrowed tongue,
No scripted words from magazines so bright;
Your story asks for songs that you have sung
In quiet moments, far from public sight.

The roses may be lovely, white and pure,
But wildflowers might better speak your name;
Let authenticity be your allure,
Not conformity to others' wedding game.

For guests have come not just to see "a" bride,
But witness how your particular hearts beat;
They long to hear love's voice without disguise,
To see your truest selves in vows complete.

*When weddings speak in lovers' native tongue,*
*The sweetest, truest songs are always sung.*`,standard:`💍 Day 2: Choosing Your Wedding's Voice

When you identify that one essential truth—perhaps that your love is built on deep friendship, or that you're two independent spirits choosing to intertwine, or that you're creating a bridge between different worlds—you'll likely discover it doesn't fit neatly into the standard wedding script. This revelation is liberating: your wedding doesn't need to perform generic romance; it needs to tell your specific story.

🧱 **The Concept**
Your wedding's voice is how you choose to communicate your story—the tone, style, and elements that will speak your truth to your guests.

❓ **Why It Matters**
Many couples get trapped trying to have a wedding that speaks everyone's language instead of their own. When you try to please every expectation, your wedding becomes a generic performance rather than an authentic celebration. Your guests didn't come to see "a wedding"—they came to witness your love story, and that story deserves its own voice.

⚙️ **How It Works**
Consider the difference between couples who choose their voice versus those who don't. A bookish couple might weave literary quotes throughout their ceremony, use vintage books as centerpieces, and write vows that read like poetry. Adventure lovers might exchange rings on a mountaintop, serve food truck fare, and create a playlist that tells the story of their travels together. Traditional couples might honor family customs with intentional explanations, helping guests understand the meaning behind each ritual. The key is consistency—every element should reinforce the same voice, creating a cohesive story that feels unmistakably yours.

🎯 **Wedding Wisdom**
A wedding with a clear voice becomes a powerful story that guests will remember and retell for years to come.

❓ **Tomorrow's Question** — If you stripped away everything that you think a wedding "should" have and kept only what genuinely excites both of you, what would remain, and what does that tell you about the kind of celebration your hearts actually want?`,parable:`Dove sat surrounded by bridal magazines, their glossy pages promising perfection in shades of blush and ivory. "Look at this," she called to Elm, holding up a photo of cascading white roses. "Isn't it beautiful?"

Elm glanced over from where he was sketching ideas for their ceremony. "It's lovely," he said gently, "but it doesn't sound like you. Remember yesterday when you said our truth was about being two artists who found home in each other?"

Nana Rose appeared at their kitchen table as if summoned by their uncertainty. "Ah, the voice question," she said, settling into a chair. "I once planned a wedding for two musicians who spent months agonizing over whether to have a string quartet or a jazz trio. Finally, I asked them: 'What music plays when you're happiest together?' Turns out, they sang old folk songs while cooking dinner. So we had their friends perform those same songs during the ceremony, with everyone joining in. Not one magazine would have featured it, but twenty years later, their guests still hum those melodies."

Dove looked at her magazines with new eyes. "We're not white roses," she realized slowly. "We're wildflowers and oak leaves, coffee-stained notebooks and paint-splattered aprons."

"Exactly," Nana Rose smiled. "Your wedding should sound like you having the most important conversation of your lives—with everyone you love listening in."

Elm reached for Dove's hand. "What if we painted our vows instead of just writing them? What if our centerpieces were the art supplies our friends could use to create something during dinner?"

Suddenly, their wedding began to speak in their own language.

**Moral:** A wedding's true beauty lies not in its adherence to tradition, but in its faithful translation of love into a language uniquely your own.

*Tomorrow, Nana Rose will challenge them to discover what remains when all expectations fall away...*`}],Ca=[{id:"financial-independence",name:"Financial Independence",theme:"Warren Buffett's teachings and mathematical principles",lessons:Ov},{id:"nutrition-science",name:"Nutrition Science",theme:"the science of how food fuels your body, from macronutrients to metabolism",lessons:Nv},{id:"negotiation",name:"Negotiation",theme:"FBI hostage negotiation tactics, persuasion psychology, and everyday deal-making",lessons:qv},{id:"stoic-philosophy",name:"Stoic Philosophy",theme:"ancient Stoic teachings — mental resilience, emotional control, and living with purpose",lessons:Lv},{id:"music-theory",name:"Music Theory",theme:"the building blocks of music — notes, scales, chords, rhythm, harmony, and why certain sounds make you feel things",lessons:_v},{id:"real-estate",name:"Real Estate Investing",theme:"building wealth through property — from your first rental to cash flow analysis and passive income",lessons:Yv},{id:"storytelling",name:"Storytelling",theme:"the craft of storytelling — narrative structure, character arcs, tension, pacing, dialogue, and what makes stories unforgettable",lessons:Uv},{id:"building-relationships",name:"Building Relationships",theme:"the science and art of building lasting romantic relationships — communication, love languages, conflict resolution, emotional intelligence, trust, and growing together",lessons:Vv},{id:"cooking",name:"Cooking",theme:"the art and science of cooking — techniques, flavor profiles, knife skills, heat control, seasoning, and the chemistry behind why recipes work",lessons:Fv},{id:"meaning-of-life",name:"Meaning of Life",theme:"the deepest philosophical question — existentialism, religion, absurdism, purpose, consciousness, and what thinkers from Aristotle to Camus to Viktor Frankl have said about why we're here",lessons:Gv},{id:"how-to-scale",name:"How to Scale",theme:"scaling startups, teams, and systems — from 0→1 to 1→100, hiring, delegation, technical architecture, organizational design, and lessons from founders who built billion-dollar companies",lessons:Qv},{id:"machine-learning",name:"Machine Learning",theme:"the fundamentals of machine learning — from linear regression to neural networks, gradient descent, backpropagation, transformers, and the math and intuition behind how machines learn",lessons:Kv},{id:"emotional-intelligence",name:"Emotional Intelligence",theme:"understanding and managing emotions — self-awareness, empathy, social skills, emotional regulation, and reading people",lessons:Xv},{id:"habits-and-systems",name:"Habits & Systems",theme:"building identity-based habits, designing systems that compound, breaking bad loops, and becoming the person who does the things",lessons:Zv},{id:"leadership",name:"Leadership & Influence",theme:"inspiring people, building trust, servant leadership, giving feedback, mentoring, and the difference between authority and influence",lessons:Pv},{id:"health-and-longevity",name:"Health & Longevity",theme:"the science of living longer and better — sleep, exercise physiology, stress management, aging, recovery, and the habits that add decades of healthy life",lessons:Jv},{id:"wedding-planning",name:"Wedding Planning",theme:"the art and philosophy of planning a wedding — what truly matters, balancing traditions with authenticity, managing family dynamics, budgeting wisely, and creating a celebration that reflects who you are as a couple",lessons:$v}];function ku(a){return Ca.find(o=>o.id===a)}function Zf(a){const o=ku(a);return!o||o.lessons.length===0?0:Math.max(...o.lessons.map(r=>r.day))}function ek({open:a,onClose:o}){const s=fn().pathname.split("/")[1]||"";return X.jsxs(X.Fragment,{children:[a&&X.jsx("div",{className:"sidebar-overlay",onClick:o}),X.jsxs("aside",{className:`sidebar ${a?"open":""}`,children:[X.jsx("div",{className:"sidebar-header",children:X.jsx(Et,{to:"/",className:"sidebar-brand",onClick:o,children:"📜 Parable"})}),X.jsx("nav",{className:"sidebar-nav",children:Ca.map(u=>X.jsxs(Et,{to:`/${u.id}`,className:`sidebar-item ${s===u.id?"active":""}`,onClick:o,children:[X.jsx("span",{className:"sidebar-item-name",children:u.name}),X.jsx("span",{className:"sidebar-item-count",children:u.lessons.length})]},u.id))})]})]})}function tk(){return X.jsxs("div",{className:"container",children:[X.jsxs("header",{className:"home-header",children:[X.jsx("h1",{children:"📜 Parable"}),X.jsx("p",{className:"subtitle",children:"Daily Lessons Through Stories"})]}),X.jsx("div",{className:"series-grid",children:Ca.map(a=>X.jsxs(Et,{to:`/${a.id}`,className:"series-card",children:[X.jsx("h2",{className:"series-card-name",children:a.name}),X.jsx("p",{className:"series-card-theme",children:a.theme}),X.jsx("div",{className:"series-card-meta",children:X.jsxs("span",{children:[a.lessons.length," lesson",a.lessons.length!==1?"s":""]})})]},a.id))})]})}function nk(){const{seriesId:a}=Qg(),o=ku(a||"");return o?X.jsxs("div",{className:"container",children:[X.jsxs("nav",{className:"breadcrumb",children:[X.jsx(Et,{to:"/",className:"nav-link",children:"Home"}),X.jsx("span",{className:"breadcrumb-sep",children:"›"}),X.jsx("span",{children:o.name})]}),X.jsxs("header",{className:"home-header",children:[X.jsx("h1",{children:o.name}),X.jsx("p",{className:"subtitle",children:o.theme})]}),X.jsx("div",{className:"lesson-list",children:o.lessons.map(r=>X.jsxs(Et,{to:`/${o.id}/lesson/${r.day}`,className:"lesson-card",children:[r.image&&X.jsx("img",{src:`/parable/${r.image}`,alt:r.title,className:"lesson-card-img"}),X.jsxs("div",{className:"lesson-card-text",children:[X.jsxs("span",{className:"lesson-day",children:["Day ",r.day]}),X.jsx("span",{className:"lesson-title",children:r.title})]})]},r.day))})]}):X.jsx(Pg,{to:"/",replace:!0})}function ak(a,o){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const ik=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ok=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,rk={};function Pf(a,o){return(rk.jsx?ok:ik).test(a)}const sk=/[ \t\n\f\r]/g;function lk(a){return typeof a=="object"?a.type==="text"?Jf(a.value):!1:Jf(a)}function Jf(a){return a.replace(sk,"")===""}class Ro{constructor(o,r,s){this.normal=r,this.property=o,s&&(this.space=s)}}Ro.prototype.normal={};Ro.prototype.property={};Ro.prototype.space=void 0;function np(a,o){const r={},s={};for(const u of a)Object.assign(r,u.property),Object.assign(s,u.normal);return new Ro(r,s,o)}function iu(a){return a.toLowerCase()}class Mt{constructor(o,r){this.attribute=r,this.property=o}}Mt.prototype.attribute="";Mt.prototype.booleanish=!1;Mt.prototype.boolean=!1;Mt.prototype.commaOrSpaceSeparated=!1;Mt.prototype.commaSeparated=!1;Mt.prototype.defined=!1;Mt.prototype.mustUseProperty=!1;Mt.prototype.number=!1;Mt.prototype.overloadedBoolean=!1;Mt.prototype.property="";Mt.prototype.spaceSeparated=!1;Mt.prototype.space=void 0;let hk=0;const we=za(),at=za(),ou=za(),Q=za(),Ye=za(),ki=za(),Nt=za();function za(){return 2**++hk}const ru=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:at,commaOrSpaceSeparated:Nt,commaSeparated:ki,number:Q,overloadedBoolean:ou,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Uh=Object.keys(ru);class Tu extends Mt{constructor(o,r,s,u){let c=-1;if(super(o,r),$f(this,"space",u),typeof s=="number")for(;++c<Uh.length;){const d=Uh[c];$f(this,Uh[c],(s&ru[d])===ru[d])}}}Tu.prototype.defined=!0;function $f(a,o,r){r&&(a[o]=r)}function Ai(a){const o={},r={};for(const[s,u]of Object.entries(a.properties)){const c=new Tu(s,a.transform(a.attributes||{},s),u,a.space);a.mustUseProperty&&a.mustUseProperty.includes(s)&&(c.mustUseProperty=!0),o[s]=c,r[iu(s)]=s,r[iu(c.attribute)]=s}return new Ro(o,r,a.space)}const ap=Ai({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Ye,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:Q,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Ye,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:at,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(a,o){return o==="role"?o:"aria-"+o.slice(4).toLowerCase()}});function ip(a,o){return o in a?a[o]:o}function op(a,o){return ip(a,o.toLowerCase())}const uk=Ai({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ki,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Ye,autoFocus:we,autoPlay:we,blocking:Ye,capture:null,charSet:null,checked:we,cite:null,className:Ye,cols:Q,colSpan:null,content:null,contentEditable:at,controls:we,controlsList:Ye,coords:Q|ki,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:ou,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Ye,height:Q,hidden:ou,high:Q,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:we,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:Q,pattern:null,ping:Ye,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Ye,required:we,reversed:we,rows:Q,rowSpan:Q,sandbox:Ye,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:at,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:op}),ck=Ai({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ki,g2:ki,glyphName:ki,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ip}),rp=Ai({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,o){return"xlink:"+o.slice(5).toLowerCase()}}),sp=Ai({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:op}),lp=Ai({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,o){return"xml:"+o.slice(3).toLowerCase()}}),dk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},mk=/[A-Z]/g,eg=/-[a-z]/g,fk=/^data[-\w.:]+$/i;function gk(a,o){const r=iu(o);let s=o,u=Mt;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&fk.test(o)){if(o.charAt(4)==="-"){const c=o.slice(5).replace(eg,yk);s="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=o.slice(4);if(!eg.test(c)){let d=c.replace(mk,pk);d.charAt(0)!=="-"&&(d="-"+d),o="data"+d}}u=Tu}return new u(s,o)}function pk(a){return"-"+a.toLowerCase()}function yk(a){return a.charAt(1).toUpperCase()}const wk=np([ap,uk,rp,sp,lp],"html"),xu=np([ap,ck,rp,sp,lp],"svg");function bk(a){return a.join(" ").trim()}var bi={},Vh,tg;function vk(){if(tg)return Vh;tg=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,o=/\n/g,r=/^\s*/,s=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,g=/^\s+|\s+$/g,p=`
`,f="/",y="*",w="",T="comment",v="declaration";function R(D,j){if(typeof D!="string")throw new TypeError("First argument must be a string");if(!D)return[];j=j||{};var K=1,V=1;function oe(ne){var G=ne.match(o);G&&(K+=G.length);var W=ne.lastIndexOf(p);V=~W?ne.length-W:V+ne.length}function le(){var ne={line:K,column:V};return function(G){return G.position=new q(ne),me(),G}}function q(ne){this.start=ne,this.end={line:K,column:V},this.source=j.source}q.prototype.content=D;function P(ne){var G=new Error(j.source+":"+K+":"+V+": "+ne);if(G.reason=ne,G.filename=j.source,G.line=K,G.column=V,G.source=D,!j.silent)throw G}function ce(ne){var G=ne.exec(D);if(G){var W=G[0];return oe(W),D=D.slice(W.length),G}}function me(){ce(r)}function be(ne){var G;for(ne=ne||[];G=ee();)G!==!1&&ne.push(G);return ne}function ee(){var ne=le();if(!(f!=D.charAt(0)||y!=D.charAt(1))){for(var G=2;w!=D.charAt(G)&&(y!=D.charAt(G)||f!=D.charAt(G+1));)++G;if(G+=2,w===D.charAt(G-1))return P("End of comment missing");var W=D.slice(2,G-2);return V+=2,oe(W),D=D.slice(G),V+=2,ne({type:T,comment:W})}}function $(){var ne=le(),G=ce(s);if(G){if(ee(),!ce(u))return P("property missing ':'");var W=ce(c),F=ne({type:v,property:H(G[0].replace(a,w)),value:W?H(W[0].replace(a,w)):w});return ce(d),F}}function ke(){var ne=[];be(ne);for(var G;G=$();)G!==!1&&(ne.push(G),be(ne));return ne}return me(),ke()}function H(D){return D?D.replace(g,w):w}return Vh=R,Vh}var ng;function kk(){if(ng)return bi;ng=1;var a=bi&&bi.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(bi,"__esModule",{value:!0}),bi.default=r;const o=a(vk());function r(s,u){let c=null;if(!s||typeof s!="string")return c;const d=(0,o.default)(s),g=typeof u=="function";return d.forEach(p=>{if(p.type!=="declaration")return;const{property:f,value:y}=p;g?u(f,y,p):y&&(c=c||{},c[f]=y)}),c}return bi}var So={},ag;function Tk(){if(ag)return So;ag=1,Object.defineProperty(So,"__esModule",{value:!0}),So.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,o=/-([a-z])/g,r=/^[^-]+$/,s=/^-(webkit|moz|ms|o|khtml)-/,u=/^-(ms)-/,c=function(f){return!f||r.test(f)||a.test(f)},d=function(f,y){return y.toUpperCase()},g=function(f,y){return"".concat(y,"-")},p=function(f,y){return y===void 0&&(y={}),c(f)?f:(f=f.toLowerCase(),y.reactCompat?f=f.replace(u,g):f=f.replace(s,g),f.replace(o,d))};return So.camelCase=p,So}var Ao,ig;function xk(){if(ig)return Ao;ig=1;var a=Ao&&Ao.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},o=a(kk()),r=Tk();function s(u,c){var d={};return!u||typeof u!="string"||(0,o.default)(u,function(g,p){g&&p&&(d[(0,r.camelCase)(g,c)]=p)}),d}return s.default=s,Ao=s,Ao}var Sk=xk();const Ak=Rg(Sk),hp=up("end"),Su=up("start");function up(a){return o;function o(r){const s=r&&r.position&&r.position[a]||{};if(typeof s.line=="number"&&s.line>0&&typeof s.column=="number"&&s.column>0)return{line:s.line,column:s.column,offset:typeof s.offset=="number"&&s.offset>-1?s.offset:void 0}}}function Ik(a){const o=Su(a),r=hp(a);if(o&&r)return{start:o,end:r}}function Co(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?og(a.position):"start"in a||"end"in a?og(a):"line"in a||"column"in a?su(a):""}function su(a){return rg(a&&a.line)+":"+rg(a&&a.column)}function og(a){return su(a&&a.start)+"-"+su(a&&a.end)}function rg(a){return a&&typeof a=="number"?a:1}class ft extends Error{constructor(o,r,s){super(),typeof r=="string"&&(s=r,r=void 0);let u="",c={},d=!1;if(r&&("line"in r&&"column"in r?c={place:r}:"start"in r&&"end"in r?c={place:r}:"type"in r?c={ancestors:[r],place:r.position}:c={...r}),typeof o=="string"?u=o:!c.cause&&o&&(d=!0,u=o.message,c.cause=o),!c.ruleId&&!c.source&&typeof s=="string"){const p=s.indexOf(":");p===-1?c.ruleId=s:(c.source=s.slice(0,p),c.ruleId=s.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const g=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=g?g.column:void 0,this.fatal=void 0,this.file="",this.message=u,this.line=g?g.line:void 0,this.name=Co(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=d&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ft.prototype.file="";ft.prototype.name="";ft.prototype.reason="";ft.prototype.message="";ft.prototype.stack="";ft.prototype.column=void 0;ft.prototype.line=void 0;ft.prototype.ancestors=void 0;ft.prototype.cause=void 0;ft.prototype.fatal=void 0;ft.prototype.place=void 0;ft.prototype.ruleId=void 0;ft.prototype.source=void 0;const Au={}.hasOwnProperty,Ek=new Map,Ck=/[A-Z]/g,Mk=new Set(["table","tbody","thead","tfoot","tr"]),zk=new Set(["td","th"]),cp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Wk(a,o){if(!o||o.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=o.filePath||void 0;let s;if(o.development){if(typeof o.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");s=qk(r,o.jsxDEV)}else{if(typeof o.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof o.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");s=Nk(r,o.jsx,o.jsxs)}const u={Fragment:o.Fragment,ancestors:[],components:o.components||{},create:s,elementAttributeNameCase:o.elementAttributeNameCase||"react",evaluater:o.createEvaluater?o.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:o.ignoreInvalidStyle||!1,passKeys:o.passKeys!==!1,passNode:o.passNode||!1,schema:o.space==="svg"?xu:wk,stylePropertyNameCase:o.stylePropertyNameCase||"dom",tableCellAlignToStyle:o.tableCellAlignToStyle!==!1},c=dp(u,a,void 0);return c&&typeof c!="string"?c:u.create(a,u.Fragment,{children:c||void 0},void 0)}function dp(a,o,r){if(o.type==="element")return Dk(a,o,r);if(o.type==="mdxFlowExpression"||o.type==="mdxTextExpression")return jk(a,o);if(o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement")return Rk(a,o,r);if(o.type==="mdxjsEsm")return Bk(a,o);if(o.type==="root")return Hk(a,o,r);if(o.type==="text")return Ok(a,o)}function Dk(a,o,r){const s=a.schema;let u=s;o.tagName.toLowerCase()==="svg"&&s.space==="html"&&(u=xu,a.schema=u),a.ancestors.push(o);const c=fp(a,o.tagName,!1),d=Lk(a,o);let g=Eu(a,o);return Mk.has(o.tagName)&&(g=g.filter(function(p){return typeof p=="string"?!lk(p):!0})),mp(a,d,c,o),Iu(d,g),a.ancestors.pop(),a.schema=s,a.create(o,c,d,r)}function jk(a,o){if(o.data&&o.data.estree&&a.evaluater){const s=o.data.estree.body[0];return s.type,a.evaluater.evaluateExpression(s.expression)}Do(a,o.position)}function Bk(a,o){if(o.data&&o.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(o.data.estree);Do(a,o.position)}function Rk(a,o,r){const s=a.schema;let u=s;o.name==="svg"&&s.space==="html"&&(u=xu,a.schema=u),a.ancestors.push(o);const c=o.name===null?a.Fragment:fp(a,o.name,!0),d=_k(a,o),g=Eu(a,o);return mp(a,d,c,o),Iu(d,g),a.ancestors.pop(),a.schema=s,a.create(o,c,d,r)}function Hk(a,o,r){const s={};return Iu(s,Eu(a,o)),a.create(o,a.Fragment,s,r)}function Ok(a,o){return o.value}function mp(a,o,r,s){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(o.node=s)}function Iu(a,o){if(o.length>0){const r=o.length>1?o:o[0];r&&(a.children=r)}}function Nk(a,o,r){return s;function s(u,c,d,g){const f=Array.isArray(d.children)?r:o;return g?f(c,d,g):f(c,d)}}function qk(a,o){return r;function r(s,u,c,d){const g=Array.isArray(c.children),p=Su(s);return o(u,c,d,g,{columnNumber:p?p.column-1:void 0,fileName:a,lineNumber:p?p.line:void 0},void 0)}}function Lk(a,o){const r={};let s,u;for(u in o.properties)if(u!=="children"&&Au.call(o.properties,u)){const c=Yk(a,u,o.properties[u]);if(c){const[d,g]=c;a.tableCellAlignToStyle&&d==="align"&&typeof g=="string"&&zk.has(o.tagName)?s=g:r[d]=g}}if(s){const c=r.style||(r.style={});c[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=s}return r}function _k(a,o){const r={};for(const s of o.attributes)if(s.type==="mdxJsxExpressionAttribute")if(s.data&&s.data.estree&&a.evaluater){const c=s.data.estree.body[0];c.type;const d=c.expression;d.type;const g=d.properties[0];g.type,Object.assign(r,a.evaluater.evaluateExpression(g.argument))}else Do(a,o.position);else{const u=s.name;let c;if(s.value&&typeof s.value=="object")if(s.value.data&&s.value.data.estree&&a.evaluater){const g=s.value.data.estree.body[0];g.type,c=a.evaluater.evaluateExpression(g.expression)}else Do(a,o.position);else c=s.value===null?!0:s.value;r[u]=c}return r}function Eu(a,o){const r=[];let s=-1;const u=a.passKeys?new Map:Ek;for(;++s<o.children.length;){const c=o.children[s];let d;if(a.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const f=u.get(p)||0;d=p+"-"+f,u.set(p,f+1)}}const g=dp(a,c,d);g!==void 0&&r.push(g)}return r}function Yk(a,o,r){const s=gk(a.schema,o);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=s.commaSeparated?ak(r):bk(r)),s.property==="style"){let u=typeof r=="object"?r:Uk(a,String(r));return a.stylePropertyNameCase==="css"&&(u=Vk(u)),["style",u]}return[a.elementAttributeNameCase==="react"&&s.space?dk[s.property]||s.property:s.attribute,r]}}function Uk(a,o){try{return Ak(o,{reactCompat:!0})}catch(r){if(a.ignoreInvalidStyle)return{};const s=r,u=new ft("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:s,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw u.file=a.filePath||void 0,u.url=cp+"#cannot-parse-style-attribute",u}}function fp(a,o,r){let s;if(!r)s={type:"Literal",value:o};else if(o.includes(".")){const u=o.split(".");let c=-1,d;for(;++c<u.length;){const g=Pf(u[c])?{type:"Identifier",name:u[c]}:{type:"Literal",value:u[c]};d=d?{type:"MemberExpression",object:d,property:g,computed:!!(c&&g.type==="Literal"),optional:!1}:g}s=d}else s=Pf(o)&&!/^[a-z]/.test(o)?{type:"Identifier",name:o}:{type:"Literal",value:o};if(s.type==="Literal"){const u=s.value;return Au.call(a.components,u)?a.components[u]:u}if(a.evaluater)return a.evaluater.evaluateExpression(s);Do(a)}function Do(a,o){const r=new ft("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:o,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=cp+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Vk(a){const o={};let r;for(r in a)Au.call(a,r)&&(o[Fk(r)]=a[r]);return o}function Fk(a){let o=a.replace(Ck,Gk);return o.slice(0,3)==="ms-"&&(o="-"+o),o}function Gk(a){return"-"+a.toLowerCase()}const Fh={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Qk={};function Kk(a,o){const r=Qk,s=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,u=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return gp(a,s,u)}function gp(a,o,r){if(Xk(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(o&&"alt"in a&&a.alt)return a.alt;if("children"in a)return sg(a.children,o,r)}return Array.isArray(a)?sg(a,o,r):""}function sg(a,o,r){const s=[];let u=-1;for(;++u<a.length;)s[u]=gp(a[u],o,r);return s.join("")}function Xk(a){return!!(a&&typeof a=="object")}const lg=document.createElement("i");function Cu(a){const o="&"+a+";";lg.innerHTML=o;const r=lg.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===o?!1:r}function mn(a,o,r,s){const u=a.length;let c=0,d;if(o<0?o=-o>u?0:u+o:o=o>u?u:o,r=r>0?r:0,s.length<1e4)d=Array.from(s),d.unshift(o,r),a.splice(...d);else for(r&&a.splice(o,r);c<s.length;)d=s.slice(c,c+1e4),d.unshift(o,0),a.splice(...d),c+=1e4,o+=1e4}function Jt(a,o){return a.length>0?(mn(a,a.length,0,o),a):o}const hg={}.hasOwnProperty;function Zk(a){const o={};let r=-1;for(;++r<a.length;)Pk(o,a[r]);return o}function Pk(a,o){let r;for(r in o){const u=(hg.call(a,r)?a[r]:void 0)||(a[r]={}),c=o[r];let d;if(c)for(d in c){hg.call(u,d)||(u[d]=[]);const g=c[d];Jk(u[d],Array.isArray(g)?g:g?[g]:[])}}}function Jk(a,o){let r=-1;const s=[];for(;++r<o.length;)(o[r].add==="after"?a:s).push(o[r]);mn(a,0,0,s)}function pp(a,o){const r=Number.parseInt(a,o);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Ti(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=ha(/[A-Za-z]/),qt=ha(/[\dA-Za-z]/),$k=ha(/[#-'*+\--9=?A-Z^-~]/);function lu(a){return a!==null&&(a<32||a===127)}const hu=ha(/\d/),eT=ha(/[\dA-Fa-f]/),tT=ha(/[!-/:-@[-`{-~]/);function fe(a){return a!==null&&a<-2}function Ct(a){return a!==null&&(a<0||a===32)}function De(a){return a===-2||a===-1||a===32}const nT=ha(new RegExp("\\p{P}|\\p{S}","u")),aT=ha(/\s/);function ha(a){return o;function o(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function Ii(a){const o=[];let r=-1,s=0,u=0;for(;++r<a.length;){const c=a.charCodeAt(r);let d="";if(c===37&&qt(a.charCodeAt(r+1))&&qt(a.charCodeAt(r+2)))u=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(d=String.fromCharCode(c));else if(c>55295&&c<57344){const g=a.charCodeAt(r+1);c<56320&&g>56319&&g<57344?(d=String.fromCharCode(c,g),u=1):d="�"}else d=String.fromCharCode(c);d&&(o.push(a.slice(s,r),encodeURIComponent(d)),s=r+u+1,d=""),u&&(r+=u,u=0)}return o.join("")+a.slice(s)}function Ue(a,o,r,s){const u=s?s-1:Number.POSITIVE_INFINITY;let c=0;return d;function d(p){return De(p)?(a.enter(r),g(p)):o(p)}function g(p){return De(p)&&c++<u?(a.consume(p),g):(a.exit(r),o(p))}}const iT={tokenize:oT};function oT(a){const o=a.attempt(this.parser.constructs.contentInitial,s,u);let r;return o;function s(g){if(g===null){a.consume(g);return}return a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),Ue(a,o,"linePrefix")}function u(g){return a.enter("paragraph"),c(g)}function c(g){const p=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=p),r=p,d(g)}function d(g){if(g===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(g);return}return fe(g)?(a.consume(g),a.exit("chunkText"),c):(a.consume(g),d)}}const rT={tokenize:sT},ug={tokenize:lT};function sT(a){const o=this,r=[];let s=0,u,c,d;return g;function g(V){if(s<r.length){const oe=r[s];return o.containerState=oe[1],a.attempt(oe[0].continuation,p,f)(V)}return f(V)}function p(V){if(s++,o.containerState._closeFlow){o.containerState._closeFlow=void 0,u&&K();const oe=o.events.length;let le=oe,q;for(;le--;)if(o.events[le][0]==="exit"&&o.events[le][1].type==="chunkFlow"){q=o.events[le][1].end;break}j(s);let P=oe;for(;P<o.events.length;)o.events[P][1].end={...q},P++;return mn(o.events,le+1,0,o.events.slice(oe)),o.events.length=P,f(V)}return g(V)}function f(V){if(s===r.length){if(!u)return T(V);if(u.currentConstruct&&u.currentConstruct.concrete)return R(V);o.interrupt=!!(u.currentConstruct&&!u._gfmTableDynamicInterruptHack)}return o.containerState={},a.check(ug,y,w)(V)}function y(V){return u&&K(),j(s),T(V)}function w(V){return o.parser.lazy[o.now().line]=s!==r.length,d=o.now().offset,R(V)}function T(V){return o.containerState={},a.attempt(ug,v,R)(V)}function v(V){return s++,r.push([o.currentConstruct,o.containerState]),T(V)}function R(V){if(V===null){u&&K(),j(0),a.consume(V);return}return u=u||o.parser.flow(o.now()),a.enter("chunkFlow",{_tokenizer:u,contentType:"flow",previous:c}),H(V)}function H(V){if(V===null){D(a.exit("chunkFlow"),!0),j(0),a.consume(V);return}return fe(V)?(a.consume(V),D(a.exit("chunkFlow")),s=0,o.interrupt=void 0,g):(a.consume(V),H)}function D(V,oe){const le=o.sliceStream(V);if(oe&&le.push(null),V.previous=c,c&&(c.next=V),c=V,u.defineSkip(V.start),u.write(le),o.parser.lazy[V.start.line]){let q=u.events.length;for(;q--;)if(u.events[q][1].start.offset<d&&(!u.events[q][1].end||u.events[q][1].end.offset>d))return;const P=o.events.length;let ce=P,me,be;for(;ce--;)if(o.events[ce][0]==="exit"&&o.events[ce][1].type==="chunkFlow"){if(me){be=o.events[ce][1].end;break}me=!0}for(j(s),q=P;q<o.events.length;)o.events[q][1].end={...be},q++;mn(o.events,ce+1,0,o.events.slice(P)),o.events.length=q}}function j(V){let oe=r.length;for(;oe-- >V;){const le=r[oe];o.containerState=le[1],le[0].exit.call(o,a)}r.length=V}function K(){u.write([null]),c=void 0,u=void 0,o.containerState._closeFlow=void 0}}function lT(a,o,r){return Ue(a,a.attempt(this.parser.constructs.document,o,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function cg(a){if(a===null||Ct(a)||aT(a))return 1;if(nT(a))return 2}function Mu(a,o,r){const s=[];let u=-1;for(;++u<a.length;){const c=a[u].resolveAll;c&&!s.includes(c)&&(o=c(o,r),s.push(c))}return o}const uu={name:"attention",resolveAll:hT,tokenize:uT};function hT(a,o){let r=-1,s,u,c,d,g,p,f,y;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(s=r;s--;)if(a[s][0]==="exit"&&a[s][1].type==="attentionSequence"&&a[s][1]._open&&o.sliceSerialize(a[s][1]).charCodeAt(0)===o.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[s][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[s][1].end.offset-a[s][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;p=a[s][1].end.offset-a[s][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const w={...a[s][1].end},T={...a[r][1].start};dg(w,-p),dg(T,p),d={type:p>1?"strongSequence":"emphasisSequence",start:w,end:{...a[s][1].end}},g={type:p>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:T},c={type:p>1?"strongText":"emphasisText",start:{...a[s][1].end},end:{...a[r][1].start}},u={type:p>1?"strong":"emphasis",start:{...d.start},end:{...g.end}},a[s][1].end={...d.start},a[r][1].start={...g.end},f=[],a[s][1].end.offset-a[s][1].start.offset&&(f=Jt(f,[["enter",a[s][1],o],["exit",a[s][1],o]])),f=Jt(f,[["enter",u,o],["enter",d,o],["exit",d,o],["enter",c,o]]),f=Jt(f,Mu(o.parser.constructs.insideSpan.null,a.slice(s+1,r),o)),f=Jt(f,[["exit",c,o],["enter",g,o],["exit",g,o],["exit",u,o]]),a[r][1].end.offset-a[r][1].start.offset?(y=2,f=Jt(f,[["enter",a[r][1],o],["exit",a[r][1],o]])):y=0,mn(a,s-1,r-s+3,f),r=s+f.length-y-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function uT(a,o){const r=this.parser.constructs.attentionMarkers.null,s=this.previous,u=cg(s);let c;return d;function d(p){return c=p,a.enter("attentionSequence"),g(p)}function g(p){if(p===c)return a.consume(p),g;const f=a.exit("attentionSequence"),y=cg(p),w=!y||y===2&&u||r.includes(p),T=!u||u===2&&y||r.includes(s);return f._open=!!(c===42?w:w&&(u||!T)),f._close=!!(c===42?T:T&&(y||!w)),o(p)}}function dg(a,o){a.column+=o,a.offset+=o,a._bufferIndex+=o}const cT={name:"autolink",tokenize:dT};function dT(a,o,r){let s=0;return u;function u(v){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),c}function c(v){return cn(v)?(a.consume(v),d):v===64?r(v):f(v)}function d(v){return v===43||v===45||v===46||qt(v)?(s=1,g(v)):f(v)}function g(v){return v===58?(a.consume(v),s=0,p):(v===43||v===45||v===46||qt(v))&&s++<32?(a.consume(v),g):(s=0,f(v))}function p(v){return v===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),o):v===null||v===32||v===60||lu(v)?r(v):(a.consume(v),p)}function f(v){return v===64?(a.consume(v),y):$k(v)?(a.consume(v),f):r(v)}function y(v){return qt(v)?w(v):r(v)}function w(v){return v===46?(a.consume(v),s=0,y):v===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),o):T(v)}function T(v){if((v===45||qt(v))&&s++<63){const R=v===45?T:w;return a.consume(v),R}return r(v)}}const ps={partial:!0,tokenize:mT};function mT(a,o,r){return s;function s(c){return De(c)?Ue(a,u,"linePrefix")(c):u(c)}function u(c){return c===null||fe(c)?o(c):r(c)}}const yp={continuation:{tokenize:gT},exit:pT,name:"blockQuote",tokenize:fT};function fT(a,o,r){const s=this;return u;function u(d){if(d===62){const g=s.containerState;return g.open||(a.enter("blockQuote",{_container:!0}),g.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),c}return r(d)}function c(d){return De(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),o):(a.exit("blockQuotePrefix"),o(d))}}function gT(a,o,r){const s=this;return u;function u(d){return De(d)?Ue(a,c,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):c(d)}function c(d){return a.attempt(yp,o,r)(d)}}function pT(a){a.exit("blockQuote")}const wp={name:"characterEscape",tokenize:yT};function yT(a,o,r){return s;function s(c){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(c),a.exit("escapeMarker"),u}function u(c){return tT(c)?(a.enter("characterEscapeValue"),a.consume(c),a.exit("characterEscapeValue"),a.exit("characterEscape"),o):r(c)}}const bp={name:"characterReference",tokenize:wT};function wT(a,o,r){const s=this;let u=0,c,d;return g;function g(w){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),p}function p(w){return w===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(w),a.exit("characterReferenceMarkerNumeric"),f):(a.enter("characterReferenceValue"),c=31,d=qt,y(w))}function f(w){return w===88||w===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(w),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),c=6,d=eT,y):(a.enter("characterReferenceValue"),c=7,d=hu,y(w))}function y(w){if(w===59&&u){const T=a.exit("characterReferenceValue");return d===qt&&!Cu(s.sliceSerialize(T))?r(w):(a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),a.exit("characterReference"),o)}return d(w)&&u++<c?(a.consume(w),y):r(w)}}const mg={partial:!0,tokenize:vT},fg={concrete:!0,name:"codeFenced",tokenize:bT};function bT(a,o,r){const s=this,u={partial:!0,tokenize:le};let c=0,d=0,g;return p;function p(q){return f(q)}function f(q){const P=s.events[s.events.length-1];return c=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,g=q,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(q)}function y(q){return q===g?(d++,a.consume(q),y):d<3?r(q):(a.exit("codeFencedFenceSequence"),De(q)?Ue(a,w,"whitespace")(q):w(q))}function w(q){return q===null||fe(q)?(a.exit("codeFencedFence"),s.interrupt?o(q):a.check(mg,H,oe)(q)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),T(q))}function T(q){return q===null||fe(q)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),w(q)):De(q)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ue(a,v,"whitespace")(q)):q===96&&q===g?r(q):(a.consume(q),T)}function v(q){return q===null||fe(q)?w(q):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),R(q))}function R(q){return q===null||fe(q)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),w(q)):q===96&&q===g?r(q):(a.consume(q),R)}function H(q){return a.attempt(u,oe,D)(q)}function D(q){return a.enter("lineEnding"),a.consume(q),a.exit("lineEnding"),j}function j(q){return c>0&&De(q)?Ue(a,K,"linePrefix",c+1)(q):K(q)}function K(q){return q===null||fe(q)?a.check(mg,H,oe)(q):(a.enter("codeFlowValue"),V(q))}function V(q){return q===null||fe(q)?(a.exit("codeFlowValue"),K(q)):(a.consume(q),V)}function oe(q){return a.exit("codeFenced"),o(q)}function le(q,P,ce){let me=0;return be;function be(G){return q.enter("lineEnding"),q.consume(G),q.exit("lineEnding"),ee}function ee(G){return q.enter("codeFencedFence"),De(G)?Ue(q,$,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):$(G)}function $(G){return G===g?(q.enter("codeFencedFenceSequence"),ke(G)):ce(G)}function ke(G){return G===g?(me++,q.consume(G),ke):me>=d?(q.exit("codeFencedFenceSequence"),De(G)?Ue(q,ne,"whitespace")(G):ne(G)):ce(G)}function ne(G){return G===null||fe(G)?(q.exit("codeFencedFence"),P(G)):ce(G)}}}function vT(a,o,r){const s=this;return u;function u(d){return d===null?r(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c)}function c(d){return s.parser.lazy[s.now().line]?r(d):o(d)}}const Gh={name:"codeIndented",tokenize:TT},kT={partial:!0,tokenize:xT};function TT(a,o,r){const s=this;return u;function u(f){return a.enter("codeIndented"),Ue(a,c,"linePrefix",5)(f)}function c(f){const y=s.events[s.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(f):r(f)}function d(f){return f===null?p(f):fe(f)?a.attempt(kT,d,p)(f):(a.enter("codeFlowValue"),g(f))}function g(f){return f===null||fe(f)?(a.exit("codeFlowValue"),d(f)):(a.consume(f),g)}function p(f){return a.exit("codeIndented"),o(f)}}function xT(a,o,r){const s=this;return u;function u(d){return s.parser.lazy[s.now().line]?r(d):fe(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),u):Ue(a,c,"linePrefix",5)(d)}function c(d){const g=s.events[s.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?o(d):fe(d)?u(d):r(d)}}const ST={name:"codeText",previous:IT,resolve:AT,tokenize:ET};function AT(a){let o=a.length-4,r=3,s,u;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[o][1].type==="lineEnding"||a[o][1].type==="space")){for(s=r;++s<o;)if(a[s][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[o][1].type="codeTextPadding",r+=2,o-=2;break}}for(s=r-1,o++;++s<=o;)u===void 0?s!==o&&a[s][1].type!=="lineEnding"&&(u=s):(s===o||a[s][1].type==="lineEnding")&&(a[u][1].type="codeTextData",s!==u+2&&(a[u][1].end=a[s-1][1].end,a.splice(u+2,s-u-2),o-=s-u-2,s=u+2),u=void 0);return a}function IT(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ET(a,o,r){let s=0,u,c;return d;function d(w){return a.enter("codeText"),a.enter("codeTextSequence"),g(w)}function g(w){return w===96?(a.consume(w),s++,g):(a.exit("codeTextSequence"),p(w))}function p(w){return w===null?r(w):w===32?(a.enter("space"),a.consume(w),a.exit("space"),p):w===96?(c=a.enter("codeTextSequence"),u=0,y(w)):fe(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),p):(a.enter("codeTextData"),f(w))}function f(w){return w===null||w===32||w===96||fe(w)?(a.exit("codeTextData"),p(w)):(a.consume(w),f)}function y(w){return w===96?(a.consume(w),u++,y):u===s?(a.exit("codeTextSequence"),a.exit("codeText"),o(w)):(c.type="codeTextData",f(w))}}class CT{constructor(o){this.left=o?[...o]:[],this.right=[]}get(o){if(o<0||o>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+o+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return o<this.left.length?this.left[o]:this.right[this.right.length-o+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(o,r){const s=r??Number.POSITIVE_INFINITY;return s<this.left.length?this.left.slice(o,s):o>this.left.length?this.right.slice(this.right.length-s+this.left.length,this.right.length-o+this.left.length).reverse():this.left.slice(o).concat(this.right.slice(this.right.length-s+this.left.length).reverse())}splice(o,r,s){const u=r||0;this.setCursor(Math.trunc(o));const c=this.right.splice(this.right.length-u,Number.POSITIVE_INFINITY);return s&&Io(this.left,s),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(o){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(o)}pushMany(o){this.setCursor(Number.POSITIVE_INFINITY),Io(this.left,o)}unshift(o){this.setCursor(0),this.right.push(o)}unshiftMany(o){this.setCursor(0),Io(this.right,o.reverse())}setCursor(o){if(!(o===this.left.length||o>this.left.length&&this.right.length===0||o<0&&this.left.length===0))if(o<this.left.length){const r=this.left.splice(o,Number.POSITIVE_INFINITY);Io(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-o,Number.POSITIVE_INFINITY);Io(this.left,r.reverse())}}}function Io(a,o){let r=0;if(o.length<1e4)a.push(...o);else for(;r<o.length;)a.push(...o.slice(r,r+1e4)),r+=1e4}function vp(a){const o={};let r=-1,s,u,c,d,g,p,f;const y=new CT(a);for(;++r<y.length;){for(;r in o;)r=o[r];if(s=y.get(r),r&&s[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(p=s[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(s[0]==="enter")s[1].contentType&&(Object.assign(o,MT(y,r)),r=o[r],f=!0);else if(s[1]._container){for(c=r,u=void 0;c--;)if(d=y.get(c),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(u&&(y.get(u)[1].type="lineEndingBlank"),d[1].type="lineEnding",u=c);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;u&&(s[1].end={...y.get(u)[1].start},g=y.slice(u,r),g.unshift(s),y.splice(u,r-u+1,g))}}return mn(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!f}function MT(a,o){const r=a.get(o)[1],s=a.get(o)[2];let u=o-1;const c=[];let d=r._tokenizer;d||(d=s.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const g=d.events,p=[],f={};let y,w,T=-1,v=r,R=0,H=0;const D=[H];for(;v;){for(;a.get(++u)[1]!==v;);c.push(u),v._tokenizer||(y=s.sliceStream(v),v.next||y.push(null),w&&d.defineSkip(v.start),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),w=v,v=v.next}for(v=r;++T<g.length;)g[T][0]==="exit"&&g[T-1][0]==="enter"&&g[T][1].type===g[T-1][1].type&&g[T][1].start.line!==g[T][1].end.line&&(H=T+1,D.push(H),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(d.events=[],v?(v._tokenizer=void 0,v.previous=void 0):D.pop(),T=D.length;T--;){const j=g.slice(D[T],D[T+1]),K=c.pop();p.push([K,K+j.length-1]),a.splice(K,2,j)}for(p.reverse(),T=-1;++T<p.length;)f[R+p[T][0]]=R+p[T][1],R+=p[T][1]-p[T][0]-1;return f}const zT={resolve:DT,tokenize:jT},WT={partial:!0,tokenize:BT};function DT(a){return vp(a),a}function jT(a,o){let r;return s;function s(g){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),u(g)}function u(g){return g===null?c(g):fe(g)?a.check(WT,d,c)(g):(a.consume(g),u)}function c(g){return a.exit("chunkContent"),a.exit("content"),o(g)}function d(g){return a.consume(g),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,u}}function BT(a,o,r){const s=this;return u;function u(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ue(a,c,"linePrefix")}function c(d){if(d===null||fe(d))return r(d);const g=s.events[s.events.length-1];return!s.parser.constructs.disable.null.includes("codeIndented")&&g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?o(d):a.interrupt(s.parser.constructs.flow,r,o)(d)}}function kp(a,o,r,s,u,c,d,g,p){const f=p||Number.POSITIVE_INFINITY;let y=0;return w;function w(j){return j===60?(a.enter(s),a.enter(u),a.enter(c),a.consume(j),a.exit(c),T):j===null||j===32||j===41||lu(j)?r(j):(a.enter(s),a.enter(d),a.enter(g),a.enter("chunkString",{contentType:"string"}),H(j))}function T(j){return j===62?(a.enter(c),a.consume(j),a.exit(c),a.exit(u),a.exit(s),o):(a.enter(g),a.enter("chunkString",{contentType:"string"}),v(j))}function v(j){return j===62?(a.exit("chunkString"),a.exit(g),T(j)):j===null||j===60||fe(j)?r(j):(a.consume(j),j===92?R:v)}function R(j){return j===60||j===62||j===92?(a.consume(j),v):v(j)}function H(j){return!y&&(j===null||j===41||Ct(j))?(a.exit("chunkString"),a.exit(g),a.exit(d),a.exit(s),o(j)):y<f&&j===40?(a.consume(j),y++,H):j===41?(a.consume(j),y--,H):j===null||j===32||j===40||lu(j)?r(j):(a.consume(j),j===92?D:H)}function D(j){return j===40||j===41||j===92?(a.consume(j),H):H(j)}}function Tp(a,o,r,s,u,c){const d=this;let g=0,p;return f;function f(v){return a.enter(s),a.enter(u),a.consume(v),a.exit(u),a.enter(c),y}function y(v){return g>999||v===null||v===91||v===93&&!p||v===94&&!g&&"_hiddenFootnoteSupport"in d.parser.constructs?r(v):v===93?(a.exit(c),a.enter(u),a.consume(v),a.exit(u),a.exit(s),o):fe(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||v===91||v===93||fe(v)||g++>999?(a.exit("chunkString"),y(v)):(a.consume(v),p||(p=!De(v)),v===92?T:w)}function T(v){return v===91||v===92||v===93?(a.consume(v),g++,w):w(v)}}function xp(a,o,r,s,u,c){let d;return g;function g(T){return T===34||T===39||T===40?(a.enter(s),a.enter(u),a.consume(T),a.exit(u),d=T===40?41:T,p):r(T)}function p(T){return T===d?(a.enter(u),a.consume(T),a.exit(u),a.exit(s),o):(a.enter(c),f(T))}function f(T){return T===d?(a.exit(c),p(d)):T===null?r(T):fe(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Ue(a,f,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(T))}function y(T){return T===d||T===null||fe(T)?(a.exit("chunkString"),f(T)):(a.consume(T),T===92?w:y)}function w(T){return T===d||T===92?(a.consume(T),y):y(T)}}function Mo(a,o){let r;return s;function s(u){return fe(u)?(a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),r=!0,s):De(u)?Ue(a,s,r?"linePrefix":"lineSuffix")(u):o(u)}}const RT={name:"definition",tokenize:OT},HT={partial:!0,tokenize:NT};function OT(a,o,r){const s=this;let u;return c;function c(v){return a.enter("definition"),d(v)}function d(v){return Tp.call(s,a,g,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function g(v){return u=Ti(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)),v===58?(a.enter("definitionMarker"),a.consume(v),a.exit("definitionMarker"),p):r(v)}function p(v){return Ct(v)?Mo(a,f)(v):f(v)}function f(v){return kp(a,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return a.attempt(HT,w,w)(v)}function w(v){return De(v)?Ue(a,T,"whitespace")(v):T(v)}function T(v){return v===null||fe(v)?(a.exit("definition"),s.parser.defined.push(u),o(v)):r(v)}}function NT(a,o,r){return s;function s(g){return Ct(g)?Mo(a,u)(g):r(g)}function u(g){return xp(a,c,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(g)}function c(g){return De(g)?Ue(a,d,"whitespace")(g):d(g)}function d(g){return g===null||fe(g)?o(g):r(g)}}const qT={name:"hardBreakEscape",tokenize:LT};function LT(a,o,r){return s;function s(c){return a.enter("hardBreakEscape"),a.consume(c),u}function u(c){return fe(c)?(a.exit("hardBreakEscape"),o(c)):r(c)}}const _T={name:"headingAtx",resolve:YT,tokenize:UT};function YT(a,o){let r=a.length-2,s=3,u,c;return a[s][1].type==="whitespace"&&(s+=2),r-2>s&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(s===r-1||r-4>s&&a[r-2][1].type==="whitespace")&&(r-=s+1===r?2:4),r>s&&(u={type:"atxHeadingText",start:a[s][1].start,end:a[r][1].end},c={type:"chunkText",start:a[s][1].start,end:a[r][1].end,contentType:"text"},mn(a,s,r-s+1,[["enter",u,o],["enter",c,o],["exit",c,o],["exit",u,o]])),a}function UT(a,o,r){let s=0;return u;function u(y){return a.enter("atxHeading"),c(y)}function c(y){return a.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&s++<6?(a.consume(y),d):y===null||Ct(y)?(a.exit("atxHeadingSequence"),g(y)):r(y)}function g(y){return y===35?(a.enter("atxHeadingSequence"),p(y)):y===null||fe(y)?(a.exit("atxHeading"),o(y)):De(y)?Ue(a,g,"whitespace")(y):(a.enter("atxHeadingText"),f(y))}function p(y){return y===35?(a.consume(y),p):(a.exit("atxHeadingSequence"),g(y))}function f(y){return y===null||y===35||Ct(y)?(a.exit("atxHeadingText"),g(y)):(a.consume(y),f)}}const VT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],gg=["pre","script","style","textarea"],FT={concrete:!0,name:"htmlFlow",resolveTo:KT,tokenize:XT},GT={partial:!0,tokenize:PT},QT={partial:!0,tokenize:ZT};function KT(a){let o=a.length;for(;o--&&!(a[o][0]==="enter"&&a[o][1].type==="htmlFlow"););return o>1&&a[o-2][1].type==="linePrefix"&&(a[o][1].start=a[o-2][1].start,a[o+1][1].start=a[o-2][1].start,a.splice(o-2,2)),a}function XT(a,o,r){const s=this;let u,c,d,g,p;return f;function f(k){return y(k)}function y(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),w}function w(k){return k===33?(a.consume(k),T):k===47?(a.consume(k),c=!0,H):k===63?(a.consume(k),u=3,s.interrupt?o:x):cn(k)?(a.consume(k),d=String.fromCharCode(k),D):r(k)}function T(k){return k===45?(a.consume(k),u=2,v):k===91?(a.consume(k),u=5,g=0,R):cn(k)?(a.consume(k),u=4,s.interrupt?o:x):r(k)}function v(k){return k===45?(a.consume(k),s.interrupt?o:x):r(k)}function R(k){const J="CDATA[";return k===J.charCodeAt(g++)?(a.consume(k),g===J.length?s.interrupt?o:$:R):r(k)}function H(k){return cn(k)?(a.consume(k),d=String.fromCharCode(k),D):r(k)}function D(k){if(k===null||k===47||k===62||Ct(k)){const J=k===47,ue=d.toLowerCase();return!J&&!c&&gg.includes(ue)?(u=1,s.interrupt?o(k):$(k)):VT.includes(d.toLowerCase())?(u=6,J?(a.consume(k),j):s.interrupt?o(k):$(k)):(u=7,s.interrupt&&!s.parser.lazy[s.now().line]?r(k):c?K(k):V(k))}return k===45||qt(k)?(a.consume(k),d+=String.fromCharCode(k),D):r(k)}function j(k){return k===62?(a.consume(k),s.interrupt?o:$):r(k)}function K(k){return De(k)?(a.consume(k),K):be(k)}function V(k){return k===47?(a.consume(k),be):k===58||k===95||cn(k)?(a.consume(k),oe):De(k)?(a.consume(k),V):be(k)}function oe(k){return k===45||k===46||k===58||k===95||qt(k)?(a.consume(k),oe):le(k)}function le(k){return k===61?(a.consume(k),q):De(k)?(a.consume(k),le):V(k)}function q(k){return k===null||k===60||k===61||k===62||k===96?r(k):k===34||k===39?(a.consume(k),p=k,P):De(k)?(a.consume(k),q):ce(k)}function P(k){return k===p?(a.consume(k),p=null,me):k===null||fe(k)?r(k):(a.consume(k),P)}function ce(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ct(k)?le(k):(a.consume(k),ce)}function me(k){return k===47||k===62||De(k)?V(k):r(k)}function be(k){return k===62?(a.consume(k),ee):r(k)}function ee(k){return k===null||fe(k)?$(k):De(k)?(a.consume(k),ee):r(k)}function $(k){return k===45&&u===2?(a.consume(k),W):k===60&&u===1?(a.consume(k),F):k===62&&u===4?(a.consume(k),A):k===63&&u===3?(a.consume(k),x):k===93&&u===5?(a.consume(k),ve):fe(k)&&(u===6||u===7)?(a.exit("htmlFlowData"),a.check(GT,L,ke)(k)):k===null||fe(k)?(a.exit("htmlFlowData"),ke(k)):(a.consume(k),$)}function ke(k){return a.check(QT,ne,L)(k)}function ne(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),G}function G(k){return k===null||fe(k)?ke(k):(a.enter("htmlFlowData"),$(k))}function W(k){return k===45?(a.consume(k),x):$(k)}function F(k){return k===47?(a.consume(k),d="",ie):$(k)}function ie(k){if(k===62){const J=d.toLowerCase();return gg.includes(J)?(a.consume(k),A):$(k)}return cn(k)&&d.length<8?(a.consume(k),d+=String.fromCharCode(k),ie):$(k)}function ve(k){return k===93?(a.consume(k),x):$(k)}function x(k){return k===62?(a.consume(k),A):k===45&&u===2?(a.consume(k),x):$(k)}function A(k){return k===null||fe(k)?(a.exit("htmlFlowData"),L(k)):(a.consume(k),A)}function L(k){return a.exit("htmlFlow"),o(k)}}function ZT(a,o,r){const s=this;return u;function u(d){return fe(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):r(d)}function c(d){return s.parser.lazy[s.now().line]?r(d):o(d)}}function PT(a,o,r){return s;function s(u){return a.enter("lineEnding"),a.consume(u),a.exit("lineEnding"),a.attempt(ps,o,r)}}const JT={name:"htmlText",tokenize:$T};function $T(a,o,r){const s=this;let u,c,d;return g;function g(x){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(x),p}function p(x){return x===33?(a.consume(x),f):x===47?(a.consume(x),le):x===63?(a.consume(x),V):cn(x)?(a.consume(x),ce):r(x)}function f(x){return x===45?(a.consume(x),y):x===91?(a.consume(x),c=0,R):cn(x)?(a.consume(x),K):r(x)}function y(x){return x===45?(a.consume(x),v):r(x)}function w(x){return x===null?r(x):x===45?(a.consume(x),T):fe(x)?(d=w,F(x)):(a.consume(x),w)}function T(x){return x===45?(a.consume(x),v):w(x)}function v(x){return x===62?W(x):x===45?T(x):w(x)}function R(x){const A="CDATA[";return x===A.charCodeAt(c++)?(a.consume(x),c===A.length?H:R):r(x)}function H(x){return x===null?r(x):x===93?(a.consume(x),D):fe(x)?(d=H,F(x)):(a.consume(x),H)}function D(x){return x===93?(a.consume(x),j):H(x)}function j(x){return x===62?W(x):x===93?(a.consume(x),j):H(x)}function K(x){return x===null||x===62?W(x):fe(x)?(d=K,F(x)):(a.consume(x),K)}function V(x){return x===null?r(x):x===63?(a.consume(x),oe):fe(x)?(d=V,F(x)):(a.consume(x),V)}function oe(x){return x===62?W(x):V(x)}function le(x){return cn(x)?(a.consume(x),q):r(x)}function q(x){return x===45||qt(x)?(a.consume(x),q):P(x)}function P(x){return fe(x)?(d=P,F(x)):De(x)?(a.consume(x),P):W(x)}function ce(x){return x===45||qt(x)?(a.consume(x),ce):x===47||x===62||Ct(x)?me(x):r(x)}function me(x){return x===47?(a.consume(x),W):x===58||x===95||cn(x)?(a.consume(x),be):fe(x)?(d=me,F(x)):De(x)?(a.consume(x),me):W(x)}function be(x){return x===45||x===46||x===58||x===95||qt(x)?(a.consume(x),be):ee(x)}function ee(x){return x===61?(a.consume(x),$):fe(x)?(d=ee,F(x)):De(x)?(a.consume(x),ee):me(x)}function $(x){return x===null||x===60||x===61||x===62||x===96?r(x):x===34||x===39?(a.consume(x),u=x,ke):fe(x)?(d=$,F(x)):De(x)?(a.consume(x),$):(a.consume(x),ne)}function ke(x){return x===u?(a.consume(x),u=void 0,G):x===null?r(x):fe(x)?(d=ke,F(x)):(a.consume(x),ke)}function ne(x){return x===null||x===34||x===39||x===60||x===61||x===96?r(x):x===47||x===62||Ct(x)?me(x):(a.consume(x),ne)}function G(x){return x===47||x===62||Ct(x)?me(x):r(x)}function W(x){return x===62?(a.consume(x),a.exit("htmlTextData"),a.exit("htmlText"),o):r(x)}function F(x){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(x),a.exit("lineEnding"),ie}function ie(x){return De(x)?Ue(a,ve,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ve(x)}function ve(x){return a.enter("htmlTextData"),d(x)}}const zu={name:"labelEnd",resolveAll:a0,resolveTo:i0,tokenize:o0},e0={tokenize:r0},t0={tokenize:s0},n0={tokenize:l0};function a0(a){let o=-1;const r=[];for(;++o<a.length;){const s=a[o][1];if(r.push(a[o]),s.type==="labelImage"||s.type==="labelLink"||s.type==="labelEnd"){const u=s.type==="labelImage"?4:2;s.type="data",o+=u}}return a.length!==r.length&&mn(a,0,a.length,r),a}function i0(a,o){let r=a.length,s=0,u,c,d,g;for(;r--;)if(u=a[r][1],c){if(u.type==="link"||u.type==="labelLink"&&u._inactive)break;a[r][0]==="enter"&&u.type==="labelLink"&&(u._inactive=!0)}else if(d){if(a[r][0]==="enter"&&(u.type==="labelImage"||u.type==="labelLink")&&!u._balanced&&(c=r,u.type!=="labelLink")){s=2;break}}else u.type==="labelEnd"&&(d=r);const p={type:a[c][1].type==="labelLink"?"link":"image",start:{...a[c][1].start},end:{...a[a.length-1][1].end}},f={type:"label",start:{...a[c][1].start},end:{...a[d][1].end}},y={type:"labelText",start:{...a[c+s+2][1].end},end:{...a[d-2][1].start}};return g=[["enter",p,o],["enter",f,o]],g=Jt(g,a.slice(c+1,c+s+3)),g=Jt(g,[["enter",y,o]]),g=Jt(g,Mu(o.parser.constructs.insideSpan.null,a.slice(c+s+4,d-3),o)),g=Jt(g,[["exit",y,o],a[d-2],a[d-1],["exit",f,o]]),g=Jt(g,a.slice(d+1)),g=Jt(g,[["exit",p,o]]),mn(a,c,a.length,g),a}function o0(a,o,r){const s=this;let u=s.events.length,c,d;for(;u--;)if((s.events[u][1].type==="labelImage"||s.events[u][1].type==="labelLink")&&!s.events[u][1]._balanced){c=s.events[u][1];break}return g;function g(T){return c?c._inactive?w(T):(d=s.parser.defined.includes(Ti(s.sliceSerialize({start:c.end,end:s.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(T),a.exit("labelMarker"),a.exit("labelEnd"),p):r(T)}function p(T){return T===40?a.attempt(e0,y,d?y:w)(T):T===91?a.attempt(t0,y,d?f:w)(T):d?y(T):w(T)}function f(T){return a.attempt(n0,y,w)(T)}function y(T){return o(T)}function w(T){return c._balanced=!0,r(T)}}function r0(a,o,r){return s;function s(w){return a.enter("resource"),a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),u}function u(w){return Ct(w)?Mo(a,c)(w):c(w)}function c(w){return w===41?y(w):kp(a,d,g,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function d(w){return Ct(w)?Mo(a,p)(w):y(w)}function g(w){return r(w)}function p(w){return w===34||w===39||w===40?xp(a,f,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):y(w)}function f(w){return Ct(w)?Mo(a,y)(w):y(w)}function y(w){return w===41?(a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),a.exit("resource"),o):r(w)}}function s0(a,o,r){const s=this;return u;function u(g){return Tp.call(s,a,c,d,"reference","referenceMarker","referenceString")(g)}function c(g){return s.parser.defined.includes(Ti(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)))?o(g):r(g)}function d(g){return r(g)}}function l0(a,o,r){return s;function s(c){return a.enter("reference"),a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),u}function u(c){return c===93?(a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),a.exit("reference"),o):r(c)}}const h0={name:"labelStartImage",resolveAll:zu.resolveAll,tokenize:u0};function u0(a,o,r){const s=this;return u;function u(g){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(g),a.exit("labelImageMarker"),c}function c(g){return g===91?(a.enter("labelMarker"),a.consume(g),a.exit("labelMarker"),a.exit("labelImage"),d):r(g)}function d(g){return g===94&&"_hiddenFootnoteSupport"in s.parser.constructs?r(g):o(g)}}const c0={name:"labelStartLink",resolveAll:zu.resolveAll,tokenize:d0};function d0(a,o,r){const s=this;return u;function u(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),c}function c(d){return d===94&&"_hiddenFootnoteSupport"in s.parser.constructs?r(d):o(d)}}const Qh={name:"lineEnding",tokenize:m0};function m0(a,o){return r;function r(s){return a.enter("lineEnding"),a.consume(s),a.exit("lineEnding"),Ue(a,o,"linePrefix")}}const hs={name:"thematicBreak",tokenize:f0};function f0(a,o,r){let s=0,u;return c;function c(f){return a.enter("thematicBreak"),d(f)}function d(f){return u=f,g(f)}function g(f){return f===u?(a.enter("thematicBreakSequence"),p(f)):s>=3&&(f===null||fe(f))?(a.exit("thematicBreak"),o(f)):r(f)}function p(f){return f===u?(a.consume(f),s++,p):(a.exit("thematicBreakSequence"),De(f)?Ue(a,g,"whitespace")(f):g(f))}}const It={continuation:{tokenize:w0},exit:v0,name:"list",tokenize:y0},g0={partial:!0,tokenize:k0},p0={partial:!0,tokenize:b0};function y0(a,o,r){const s=this,u=s.events[s.events.length-1];let c=u&&u[1].type==="linePrefix"?u[2].sliceSerialize(u[1],!0).length:0,d=0;return g;function g(v){const R=s.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(R==="listUnordered"?!s.containerState.marker||v===s.containerState.marker:hu(v)){if(s.containerState.type||(s.containerState.type=R,a.enter(R,{_container:!0})),R==="listUnordered")return a.enter("listItemPrefix"),v===42||v===45?a.check(hs,r,f)(v):f(v);if(!s.interrupt||v===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),p(v)}return r(v)}function p(v){return hu(v)&&++d<10?(a.consume(v),p):(!s.interrupt||d<2)&&(s.containerState.marker?v===s.containerState.marker:v===41||v===46)?(a.exit("listItemValue"),f(v)):r(v)}function f(v){return a.enter("listItemMarker"),a.consume(v),a.exit("listItemMarker"),s.containerState.marker=s.containerState.marker||v,a.check(ps,s.interrupt?r:y,a.attempt(g0,T,w))}function y(v){return s.containerState.initialBlankLine=!0,c++,T(v)}function w(v){return De(v)?(a.enter("listItemPrefixWhitespace"),a.consume(v),a.exit("listItemPrefixWhitespace"),T):r(v)}function T(v){return s.containerState.size=c+s.sliceSerialize(a.exit("listItemPrefix"),!0).length,o(v)}}function w0(a,o,r){const s=this;return s.containerState._closeFlow=void 0,a.check(ps,u,c);function u(g){return s.containerState.furtherBlankLines=s.containerState.furtherBlankLines||s.containerState.initialBlankLine,Ue(a,o,"listItemIndent",s.containerState.size+1)(g)}function c(g){return s.containerState.furtherBlankLines||!De(g)?(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,d(g)):(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,a.attempt(p0,o,d)(g))}function d(g){return s.containerState._closeFlow=!0,s.interrupt=void 0,Ue(a,a.attempt(It,o,r),"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g)}}function b0(a,o,r){const s=this;return Ue(a,u,"listItemIndent",s.containerState.size+1);function u(c){const d=s.events[s.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===s.containerState.size?o(c):r(c)}}function v0(a){a.exit(this.containerState.type)}function k0(a,o,r){const s=this;return Ue(a,u,"listItemPrefixWhitespace",s.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function u(c){const d=s.events[s.events.length-1];return!De(c)&&d&&d[1].type==="listItemPrefixWhitespace"?o(c):r(c)}}const pg={name:"setextUnderline",resolveTo:T0,tokenize:x0};function T0(a,o){let r=a.length,s,u,c;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){s=r;break}a[r][1].type==="paragraph"&&(u=r)}else a[r][1].type==="content"&&a.splice(r,1),!c&&a[r][1].type==="definition"&&(c=r);const d={type:"setextHeading",start:{...a[s][1].start},end:{...a[a.length-1][1].end}};return a[u][1].type="setextHeadingText",c?(a.splice(u,0,["enter",d,o]),a.splice(c+1,0,["exit",a[s][1],o]),a[s][1].end={...a[c][1].end}):a[s][1]=d,a.push(["exit",d,o]),a}function x0(a,o,r){const s=this;let u;return c;function c(f){let y=s.events.length,w;for(;y--;)if(s.events[y][1].type!=="lineEnding"&&s.events[y][1].type!=="linePrefix"&&s.events[y][1].type!=="content"){w=s.events[y][1].type==="paragraph";break}return!s.parser.lazy[s.now().line]&&(s.interrupt||w)?(a.enter("setextHeadingLine"),u=f,d(f)):r(f)}function d(f){return a.enter("setextHeadingLineSequence"),g(f)}function g(f){return f===u?(a.consume(f),g):(a.exit("setextHeadingLineSequence"),De(f)?Ue(a,p,"lineSuffix")(f):p(f))}function p(f){return f===null||fe(f)?(a.exit("setextHeadingLine"),o(f)):r(f)}}const S0={tokenize:A0};function A0(a){const o=this,r=a.attempt(ps,s,a.attempt(this.parser.constructs.flowInitial,u,Ue(a,a.attempt(this.parser.constructs.flow,u,a.attempt(zT,u)),"linePrefix")));return r;function s(c){if(c===null){a.consume(c);return}return a.enter("lineEndingBlank"),a.consume(c),a.exit("lineEndingBlank"),o.currentConstruct=void 0,r}function u(c){if(c===null){a.consume(c);return}return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),o.currentConstruct=void 0,r}}const I0={resolveAll:Ap()},E0=Sp("string"),C0=Sp("text");function Sp(a){return{resolveAll:Ap(a==="text"?M0:void 0),tokenize:o};function o(r){const s=this,u=this.parser.constructs[a],c=r.attempt(u,d,g);return d;function d(y){return f(y)?c(y):g(y)}function g(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),p}function p(y){return f(y)?(r.exit("data"),c(y)):(r.consume(y),p)}function f(y){if(y===null)return!0;const w=u[y];let T=-1;if(w)for(;++T<w.length;){const v=w[T];if(!v.previous||v.previous.call(s,s.previous))return!0}return!1}}}function Ap(a){return o;function o(r,s){let u=-1,c;for(;++u<=r.length;)c===void 0?r[u]&&r[u][1].type==="data"&&(c=u,u++):(!r[u]||r[u][1].type!=="data")&&(u!==c+2&&(r[c][1].end=r[u-1][1].end,r.splice(c+2,u-c-2),u=c+2),c=void 0);return a?a(r,s):r}}function M0(a,o){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const s=a[r-1][1],u=o.sliceStream(s);let c=u.length,d=-1,g=0,p;for(;c--;){const f=u[c];if(typeof f=="string"){for(d=f.length;f.charCodeAt(d-1)===32;)g++,d--;if(d)break;d=-1}else if(f===-2)p=!0,g++;else if(f!==-1){c++;break}}if(o._contentTypeTextTrailing&&r===a.length&&(g=0),g){const f={type:r===a.length||p||g<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?d:s.start._bufferIndex+d,_index:s.start._index+c,line:s.end.line,column:s.end.column-g,offset:s.end.offset-g},end:{...s.end}};s.end={...f.start},s.start.offset===s.end.offset?Object.assign(s,f):(a.splice(r,0,["enter",f,o],["exit",f,o]),r+=2)}r++}return a}const z0={42:It,43:It,45:It,48:It,49:It,50:It,51:It,52:It,53:It,54:It,55:It,56:It,57:It,62:yp},W0={91:RT},D0={[-2]:Gh,[-1]:Gh,32:Gh},j0={35:_T,42:hs,45:[pg,hs],60:FT,61:pg,95:hs,96:fg,126:fg},B0={38:bp,92:wp},R0={[-5]:Qh,[-4]:Qh,[-3]:Qh,33:h0,38:bp,42:uu,60:[cT,JT],91:c0,92:[qT,wp],93:zu,95:uu,96:ST},H0={null:[uu,I0]},O0={null:[42,95]},N0={null:[]},q0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:O0,contentInitial:W0,disable:N0,document:z0,flow:j0,flowInitial:D0,insideSpan:H0,string:B0,text:R0},Symbol.toStringTag,{value:"Module"}));function L0(a,o,r){let s={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const u={},c=[];let d=[],g=[];const p={attempt:P(le),check:P(q),consume:K,enter:V,exit:oe,interrupt:P(q,{interrupt:!0})},f={code:null,containerState:{},defineSkip:H,events:[],now:R,parser:a,previous:null,sliceSerialize:T,sliceStream:v,write:w};let y=o.tokenize.call(f,p);return o.resolveAll&&c.push(o),f;function w(ee){return d=Jt(d,ee),D(),d[d.length-1]!==null?[]:(ce(o,0),f.events=Mu(c,f.events,f),f.events)}function T(ee,$){return Y0(v(ee),$)}function v(ee){return _0(d,ee)}function R(){const{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:G}=s;return{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:G}}function H(ee){u[ee.line]=ee.column,be()}function D(){let ee;for(;s._index<d.length;){const $=d[s._index];if(typeof $=="string")for(ee=s._index,s._bufferIndex<0&&(s._bufferIndex=0);s._index===ee&&s._bufferIndex<$.length;)j($.charCodeAt(s._bufferIndex));else j($)}}function j(ee){y=y(ee)}function K(ee){fe(ee)?(s.line++,s.column=1,s.offset+=ee===-3?2:1,be()):ee!==-1&&(s.column++,s.offset++),s._bufferIndex<0?s._index++:(s._bufferIndex++,s._bufferIndex===d[s._index].length&&(s._bufferIndex=-1,s._index++)),f.previous=ee}function V(ee,$){const ke=$||{};return ke.type=ee,ke.start=R(),f.events.push(["enter",ke,f]),g.push(ke),ke}function oe(ee){const $=g.pop();return $.end=R(),f.events.push(["exit",$,f]),$}function le(ee,$){ce(ee,$.from)}function q(ee,$){$.restore()}function P(ee,$){return ke;function ke(ne,G,W){let F,ie,ve,x;return Array.isArray(ne)?L(ne):"tokenize"in ne?L([ne]):A(ne);function A(re){return Ae;function Ae(Ge){const He=Ge!==null&&re[Ge],_t=Ge!==null&&re.null,gn=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(_t)?_t:_t?[_t]:[]];return L(gn)(Ge)}}function L(re){return F=re,ie=0,re.length===0?W:k(re[ie])}function k(re){return Ae;function Ae(Ge){return x=me(),ve=re,re.partial||(f.currentConstruct=re),re.name&&f.parser.constructs.disable.null.includes(re.name)?ue():re.tokenize.call($?Object.assign(Object.create(f),$):f,p,J,ue)(Ge)}}function J(re){return ee(ve,x),G}function ue(re){return x.restore(),++ie<F.length?k(F[ie]):W}}}function ce(ee,$){ee.resolveAll&&!c.includes(ee)&&c.push(ee),ee.resolve&&mn(f.events,$,f.events.length-$,ee.resolve(f.events.slice($),f)),ee.resolveTo&&(f.events=ee.resolveTo(f.events,f))}function me(){const ee=R(),$=f.previous,ke=f.currentConstruct,ne=f.events.length,G=Array.from(g);return{from:ne,restore:W};function W(){s=ee,f.previous=$,f.currentConstruct=ke,f.events.length=ne,g=G,be()}}function be(){s.line in u&&s.column<2&&(s.column=u[s.line],s.offset+=u[s.line]-1)}}function _0(a,o){const r=o.start._index,s=o.start._bufferIndex,u=o.end._index,c=o.end._bufferIndex;let d;if(r===u)d=[a[r].slice(s,c)];else{if(d=a.slice(r,u),s>-1){const g=d[0];typeof g=="string"?d[0]=g.slice(s):d.shift()}c>0&&d.push(a[u].slice(0,c))}return d}function Y0(a,o){let r=-1;const s=[];let u;for(;++r<a.length;){const c=a[r];let d;if(typeof c=="string")d=c;else switch(c){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=o?" ":"	";break}case-1:{if(!o&&u)continue;d=" ";break}default:d=String.fromCharCode(c)}u=c===-2,s.push(d)}return s.join("")}function U0(a){const s={constructs:Zk([q0,...(a||{}).extensions||[]]),content:u(iT),defined:[],document:u(rT),flow:u(S0),lazy:{},string:u(E0),text:u(C0)};return s;function u(c){return d;function d(g){return L0(s,c,g)}}}function V0(a){for(;!vp(a););return a}const yg=/[\0\t\n\r]/g;function F0(){let a=1,o="",r=!0,s;return u;function u(c,d,g){const p=[];let f,y,w,T,v;for(c=o+(typeof c=="string"?c.toString():new TextDecoder(d||void 0).decode(c)),w=0,o="",r&&(c.charCodeAt(0)===65279&&w++,r=void 0);w<c.length;){if(yg.lastIndex=w,f=yg.exec(c),T=f&&f.index!==void 0?f.index:c.length,v=c.charCodeAt(T),!f){o=c.slice(w);break}if(v===10&&w===T&&s)p.push(-3),s=void 0;else switch(s&&(p.push(-5),s=void 0),w<T&&(p.push(c.slice(w,T)),a+=T-w),v){case 0:{p.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,p.push(-2);a++<y;)p.push(-1);break}case 10:{p.push(-4),a=1;break}default:s=!0,a=1}w=T+1}return g&&(s&&p.push(-5),o&&p.push(o),p.push(null)),p}}const G0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Q0(a){return a.replace(G0,K0)}function K0(a,o,r){if(o)return o;if(r.charCodeAt(0)===35){const u=r.charCodeAt(1),c=u===120||u===88;return pp(r.slice(c?2:1),c?16:10)}return Cu(r)||a}const Ip={}.hasOwnProperty;function X0(a,o,r){return o&&typeof o=="object"&&(r=o,o=void 0),Z0(r)(V0(U0(r).document().write(F0()(a,o,!0))))}function Z0(a){const o={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(ja),autolinkProtocol:me,autolinkEmail:me,atxHeading:c(Wa),blockQuote:c(_t),characterEscape:me,characterReference:me,codeFenced:c(gn),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:c(gn,d),codeText:c(Ei,d),codeTextData:me,data:me,codeFlowValue:me,definition:c(Oo),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:c(pn),hardBreakEscape:c(Da),hardBreakTrailing:c(Da),htmlFlow:c(No,d),htmlFlowData:me,htmlText:c(No,d),htmlTextData:me,image:c(qo),label:d,link:c(ja),listItem:c(Ci),listItemValue:T,listOrdered:c(Ba,w),listUnordered:c(Ba),paragraph:c(bs),reference:k,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:c(Wa),strong:c(vs),thematicBreak:c(ks)},exit:{atxHeading:p(),atxHeadingSequence:le,autolink:p(),autolinkEmail:He,autolinkProtocol:Ge,blockQuote:p(),characterEscapeValue:be,characterReferenceMarkerHexadecimal:ue,characterReferenceMarkerNumeric:ue,characterReferenceValue:re,characterReference:Ae,codeFenced:p(D),codeFencedFence:H,codeFencedFenceInfo:v,codeFencedFenceMeta:R,codeFlowValue:be,codeIndented:p(j),codeText:p(G),codeTextData:be,data:be,definition:p(),definitionDestinationString:oe,definitionLabelString:K,definitionTitleString:V,emphasis:p(),hardBreakEscape:p($),hardBreakTrailing:p($),htmlFlow:p(ke),htmlFlowData:be,htmlText:p(ne),htmlTextData:be,image:p(F),label:ve,labelText:ie,lineEnding:ee,link:p(W),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:J,resourceDestinationString:x,resourceTitleString:A,resource:L,setextHeading:p(ce),setextHeadingLineSequence:P,setextHeadingText:q,strong:p(),thematicBreak:p()}};Ep(o,(a||{}).mdastExtensions||[]);const r={};return s;function s(_){let Z={type:"root",children:[]};const de={stack:[Z],tokenStack:[],config:o,enter:g,exit:f,buffer:d,resume:y,data:r},Te=[];let je=-1;for(;++je<_.length;)if(_[je][1].type==="listOrdered"||_[je][1].type==="listUnordered")if(_[je][0]==="enter")Te.push(je);else{const zt=Te.pop();je=u(_,zt,je)}for(je=-1;++je<_.length;){const zt=o[_[je][0]];Ip.call(zt,_[je][1].type)&&zt[_[je][1].type].call(Object.assign({sliceSerialize:_[je][2].sliceSerialize},de),_[je][1])}if(de.tokenStack.length>0){const zt=de.tokenStack[de.tokenStack.length-1];(zt[1]||wg).call(de,void 0,zt[0])}for(Z.position={start:la(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:la(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},je=-1;++je<o.transforms.length;)Z=o.transforms[je](Z)||Z;return Z}function u(_,Z,de){let Te=Z-1,je=-1,zt=!1,yn,pt,it,wt;for(;++Te<=de;){const Le=_[Te];switch(Le[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Le[0]==="enter"?je++:je--,wt=void 0;break}case"lineEndingBlank":{Le[0]==="enter"&&(yn&&!wt&&!je&&!it&&(it=Te),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0}if(!je&&Le[0]==="enter"&&Le[1].type==="listItemPrefix"||je===-1&&Le[0]==="exit"&&(Le[1].type==="listUnordered"||Le[1].type==="listOrdered")){if(yn){let On=Te;for(pt=void 0;On--;){const en=_[On];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;pt&&(_[pt][1].type="lineEndingBlank",zt=!0),en[1].type="lineEnding",pt=On}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!pt||it<pt)&&(yn._spread=!0),yn.end=Object.assign({},pt?_[pt][1].start:Le[1].end),_.splice(pt||Te,0,["exit",yn,Le[2]]),Te++,de++}if(Le[1].type==="listItemPrefix"){const On={type:"listItem",_spread:!1,start:Object.assign({},Le[1].start),end:void 0};yn=On,_.splice(Te,0,["enter",On,Le[2]]),Te++,de++,it=void 0,wt=!0}}}return _[Z][1]._spread=zt,de}function c(_,Z){return de;function de(Te){g.call(this,_(Te),Te),Z&&Z.call(this,Te)}}function d(){this.stack.push({type:"fragment",children:[]})}function g(_,Z,de){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([Z,de||void 0]),_.position={start:la(Z.start),end:void 0}}function p(_){return Z;function Z(de){_&&_.call(this,de),f.call(this,de)}}function f(_,Z){const de=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==_.type&&(Z?Z.call(this,_,Te[0]):(Te[1]||wg).call(this,_,Te[0]));else throw new Error("Cannot close `"+_.type+"` ("+Co({start:_.start,end:_.end})+"): it’s not open");de.position.end=la(_.end)}function y(){return Kk(this.stack.pop())}function w(){this.data.expectingFirstListItemValue=!0}function T(_){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function v(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=_}function R(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=_}function H(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function D(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function j(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.value=_.replace(/(\r?\n|\r)$/g,"")}function K(_){const Z=this.resume(),de=this.stack[this.stack.length-1];de.label=Z,de.identifier=Ti(this.sliceSerialize(_)).toLowerCase()}function V(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.title=_}function oe(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.url=_}function le(_){const Z=this.stack[this.stack.length-1];if(!Z.depth){const de=this.sliceSerialize(_).length;Z.depth=de}}function q(){this.data.setextHeadingSlurpLineEnding=!0}function P(_){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function me(_){const de=this.stack[this.stack.length-1].children;let Te=de[de.length-1];(!Te||Te.type!=="text")&&(Te=gt(),Te.position={start:la(_.start),end:void 0},de.push(Te)),this.stack.push(Te)}function be(_){const Z=this.stack.pop();Z.value+=this.sliceSerialize(_),Z.position.end=la(_.end)}function ee(_){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=Z.children[Z.children.length-1];de.position.end=la(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&o.canContainEols.includes(Z.type)&&(me.call(this,_),be.call(this,_))}function $(){this.data.atHardBreak=!0}function ke(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.value=_}function ne(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.value=_}function G(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.value=_}function W(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=Z,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function F(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=Z,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function ie(_){const Z=this.sliceSerialize(_),de=this.stack[this.stack.length-2];de.label=Q0(Z),de.identifier=Ti(Z).toLowerCase()}function ve(){const _=this.stack[this.stack.length-1],Z=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const Te=_.children;de.children=Te}else de.alt=Z}function x(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.url=_}function A(){const _=this.resume(),Z=this.stack[this.stack.length-1];Z.title=_}function L(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function J(_){const Z=this.resume(),de=this.stack[this.stack.length-1];de.label=Z,de.identifier=Ti(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function ue(_){this.data.characterReferenceType=_.type}function re(_){const Z=this.sliceSerialize(_),de=this.data.characterReferenceType;let Te;de?(Te=pp(Z,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=Cu(Z);const je=this.stack[this.stack.length-1];je.value+=Te}function Ae(_){const Z=this.stack.pop();Z.position.end=la(_.end)}function Ge(_){be.call(this,_);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(_)}function He(_){be.call(this,_);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(_)}function _t(){return{type:"blockquote",children:[]}}function gn(){return{type:"code",lang:null,meta:null,value:""}}function Ei(){return{type:"inlineCode",value:""}}function Oo(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function Wa(){return{type:"heading",depth:0,children:[]}}function Da(){return{type:"break"}}function No(){return{type:"html",value:""}}function qo(){return{type:"image",title:null,url:"",alt:null}}function ja(){return{type:"link",title:null,url:"",children:[]}}function Ba(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function Ci(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function bs(){return{type:"paragraph",children:[]}}function vs(){return{type:"strong",children:[]}}function gt(){return{type:"text",value:""}}function ks(){return{type:"thematicBreak"}}}function la(a){return{line:a.line,column:a.column,offset:a.offset}}function Ep(a,o){let r=-1;for(;++r<o.length;){const s=o[r];Array.isArray(s)?Ep(a,s):P0(a,s)}}function P0(a,o){let r;for(r in o)if(Ip.call(o,r))switch(r){case"canContainEols":{const s=o[r];s&&a[r].push(...s);break}case"transforms":{const s=o[r];s&&a[r].push(...s);break}case"enter":case"exit":{const s=o[r];s&&Object.assign(a[r],s);break}}}function wg(a,o){throw a?new Error("Cannot close `"+a.type+"` ("+Co({start:a.start,end:a.end})+"): a different token (`"+o.type+"`, "+Co({start:o.start,end:o.end})+") is open"):new Error("Cannot close document, a token (`"+o.type+"`, "+Co({start:o.start,end:o.end})+") is still open")}function J0(a){const o=this;o.parser=r;function r(s){return X0(s,{...o.data("settings"),...a,extensions:o.data("micromarkExtensions")||[],mdastExtensions:o.data("fromMarkdownExtensions")||[]})}}function $0(a,o){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(o),!0)};return a.patch(o,r),a.applyData(o,r)}function ex(a,o){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(o,r),[a.applyData(o,r),{type:"text",value:`
`}]}function tx(a,o){const r=o.value?o.value+`
`:"",s={},u=o.lang?o.lang.split(/\s+/):[];u.length>0&&(s.className=["language-"+u[0]]);let c={type:"element",tagName:"code",properties:s,children:[{type:"text",value:r}]};return o.meta&&(c.data={meta:o.meta}),a.patch(o,c),c=a.applyData(o,c),c={type:"element",tagName:"pre",properties:{},children:[c]},a.patch(o,c),c}function nx(a,o){const r={type:"element",tagName:"del",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function ax(a,o){const r={type:"element",tagName:"em",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function ix(a,o){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",s=String(o.identifier).toUpperCase(),u=Ii(s.toLowerCase()),c=a.footnoteOrder.indexOf(s);let d,g=a.footnoteCounts.get(s);g===void 0?(g=0,a.footnoteOrder.push(s),d=a.footnoteOrder.length):d=c+1,g+=1,a.footnoteCounts.set(s,g);const p={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+u,id:r+"fnref-"+u+(g>1?"-"+g:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(o,p);const f={type:"element",tagName:"sup",properties:{},children:[p]};return a.patch(o,f),a.applyData(o,f)}function ox(a,o){const r={type:"element",tagName:"h"+o.depth,properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function rx(a,o){if(a.options.allowDangerousHtml){const r={type:"raw",value:o.value};return a.patch(o,r),a.applyData(o,r)}}function Cp(a,o){const r=o.referenceType;let s="]";if(r==="collapsed"?s+="[]":r==="full"&&(s+="["+(o.label||o.identifier)+"]"),o.type==="imageReference")return[{type:"text",value:"!["+o.alt+s}];const u=a.all(o),c=u[0];c&&c.type==="text"?c.value="["+c.value:u.unshift({type:"text",value:"["});const d=u[u.length-1];return d&&d.type==="text"?d.value+=s:u.push({type:"text",value:s}),u}function sx(a,o){const r=String(o.identifier).toUpperCase(),s=a.definitionById.get(r);if(!s)return Cp(a,o);const u={src:Ii(s.url||""),alt:o.alt};s.title!==null&&s.title!==void 0&&(u.title=s.title);const c={type:"element",tagName:"img",properties:u,children:[]};return a.patch(o,c),a.applyData(o,c)}function lx(a,o){const r={src:Ii(o.url)};o.alt!==null&&o.alt!==void 0&&(r.alt=o.alt),o.title!==null&&o.title!==void 0&&(r.title=o.title);const s={type:"element",tagName:"img",properties:r,children:[]};return a.patch(o,s),a.applyData(o,s)}function hx(a,o){const r={type:"text",value:o.value.replace(/\r?\n|\r/g," ")};a.patch(o,r);const s={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(o,s),a.applyData(o,s)}function ux(a,o){const r=String(o.identifier).toUpperCase(),s=a.definitionById.get(r);if(!s)return Cp(a,o);const u={href:Ii(s.url||"")};s.title!==null&&s.title!==void 0&&(u.title=s.title);const c={type:"element",tagName:"a",properties:u,children:a.all(o)};return a.patch(o,c),a.applyData(o,c)}function cx(a,o){const r={href:Ii(o.url)};o.title!==null&&o.title!==void 0&&(r.title=o.title);const s={type:"element",tagName:"a",properties:r,children:a.all(o)};return a.patch(o,s),a.applyData(o,s)}function dx(a,o,r){const s=a.all(o),u=r?mx(r):Mp(o),c={},d=[];if(typeof o.checked=="boolean"){const y=s[0];let w;y&&y.type==="element"&&y.tagName==="p"?w=y:(w={type:"element",tagName:"p",properties:{},children:[]},s.unshift(w)),w.children.length>0&&w.children.unshift({type:"text",value:" "}),w.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:o.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let g=-1;for(;++g<s.length;){const y=s[g];(u||g!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!u?d.push(...y.children):d.push(y)}const p=s[s.length-1];p&&(u||p.type!=="element"||p.tagName!=="p")&&d.push({type:"text",value:`
`});const f={type:"element",tagName:"li",properties:c,children:d};return a.patch(o,f),a.applyData(o,f)}function mx(a){let o=!1;if(a.type==="list"){o=a.spread||!1;const r=a.children;let s=-1;for(;!o&&++s<r.length;)o=Mp(r[s])}return o}function Mp(a){const o=a.spread;return o??a.children.length>1}function fx(a,o){const r={},s=a.all(o);let u=-1;for(typeof o.start=="number"&&o.start!==1&&(r.start=o.start);++u<s.length;){const d=s[u];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const c={type:"element",tagName:o.ordered?"ol":"ul",properties:r,children:a.wrap(s,!0)};return a.patch(o,c),a.applyData(o,c)}function gx(a,o){const r={type:"element",tagName:"p",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function px(a,o){const r={type:"root",children:a.wrap(a.all(o))};return a.patch(o,r),a.applyData(o,r)}function yx(a,o){const r={type:"element",tagName:"strong",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function wx(a,o){const r=a.all(o),s=r.shift(),u=[];if(s){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([s],!0)};a.patch(o.children[0],d),u.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},g=Su(o.children[1]),p=hp(o.children[o.children.length-1]);g&&p&&(d.position={start:g,end:p}),u.push(d)}const c={type:"element",tagName:"table",properties:{},children:a.wrap(u,!0)};return a.patch(o,c),a.applyData(o,c)}function bx(a,o,r){const s=r?r.children:void 0,c=(s?s.indexOf(o):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,g=d?d.length:o.children.length;let p=-1;const f=[];for(;++p<g;){const w=o.children[p],T={},v=d?d[p]:void 0;v&&(T.align=v);let R={type:"element",tagName:c,properties:T,children:[]};w&&(R.children=a.all(w),a.patch(w,R),R=a.applyData(w,R)),f.push(R)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(f,!0)};return a.patch(o,y),a.applyData(o,y)}function vx(a,o){const r={type:"element",tagName:"td",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}const bg=9,vg=32;function kx(a){const o=String(a),r=/\r?\n|\r/g;let s=r.exec(o),u=0;const c=[];for(;s;)c.push(kg(o.slice(u,s.index),u>0,!0),s[0]),u=s.index+s[0].length,s=r.exec(o);return c.push(kg(o.slice(u),u>0,!1)),c.join("")}function kg(a,o,r){let s=0,u=a.length;if(o){let c=a.codePointAt(s);for(;c===bg||c===vg;)s++,c=a.codePointAt(s)}if(r){let c=a.codePointAt(u-1);for(;c===bg||c===vg;)u--,c=a.codePointAt(u-1)}return u>s?a.slice(s,u):""}function Tx(a,o){const r={type:"text",value:kx(String(o.value))};return a.patch(o,r),a.applyData(o,r)}function xx(a,o){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(o,r),a.applyData(o,r)}const Sx={blockquote:$0,break:ex,code:tx,delete:nx,emphasis:ax,footnoteReference:ix,heading:ox,html:rx,imageReference:sx,image:lx,inlineCode:hx,linkReference:ux,link:cx,listItem:dx,list:fx,paragraph:gx,root:px,strong:yx,table:wx,tableCell:vx,tableRow:bx,text:Tx,thematicBreak:xx,toml:as,yaml:as,definition:as,footnoteDefinition:as};function as(){}const zp=-1,ys=0,zo=1,cs=2,Wu=3,Du=4,ju=5,Bu=6,Wp=7,Dp=8,Tg=typeof self=="object"?self:globalThis,Ax=(a,o)=>{const r=(u,c)=>(a.set(c,u),u),s=u=>{if(a.has(u))return a.get(u);const[c,d]=o[u];switch(c){case ys:case zp:return r(d,u);case zo:{const g=r([],u);for(const p of d)g.push(s(p));return g}case cs:{const g=r({},u);for(const[p,f]of d)g[s(p)]=s(f);return g}case Wu:return r(new Date(d),u);case Du:{const{source:g,flags:p}=d;return r(new RegExp(g,p),u)}case ju:{const g=r(new Map,u);for(const[p,f]of d)g.set(s(p),s(f));return g}case Bu:{const g=r(new Set,u);for(const p of d)g.add(s(p));return g}case Wp:{const{name:g,message:p}=d;return r(new Tg[g](p),u)}case Dp:return r(BigInt(d),u);case"BigInt":return r(Object(BigInt(d)),u);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:g}=new Uint8Array(d);return r(new DataView(g),d)}}return r(new Tg[c](d),u)};return s},xg=a=>Ax(new Map,a)(0),vi="",{toString:Ix}={},{keys:Ex}=Object,Eo=a=>{const o=typeof a;if(o!=="object"||!a)return[ys,o];const r=Ix.call(a).slice(8,-1);switch(r){case"Array":return[zo,vi];case"Object":return[cs,vi];case"Date":return[Wu,vi];case"RegExp":return[Du,vi];case"Map":return[ju,vi];case"Set":return[Bu,vi];case"DataView":return[zo,r]}return r.includes("Array")?[zo,r]:r.includes("Error")?[Wp,r]:[cs,r]},is=([a,o])=>a===ys&&(o==="function"||o==="symbol"),Cx=(a,o,r,s)=>{const u=(d,g)=>{const p=s.push(d)-1;return r.set(g,p),p},c=d=>{if(r.has(d))return r.get(d);let[g,p]=Eo(d);switch(g){case ys:{let y=d;switch(p){case"bigint":g=Dp,y=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return u([zp],d)}return u([g,y],d)}case zo:{if(p){let T=d;return p==="DataView"?T=new Uint8Array(d.buffer):p==="ArrayBuffer"&&(T=new Uint8Array(d)),u([p,[...T]],d)}const y=[],w=u([g,y],d);for(const T of d)y.push(c(T));return w}case cs:{if(p)switch(p){case"BigInt":return u([p,d.toString()],d);case"Boolean":case"Number":case"String":return u([p,d.valueOf()],d)}if(o&&"toJSON"in d)return c(d.toJSON());const y=[],w=u([g,y],d);for(const T of Ex(d))(a||!is(Eo(d[T])))&&y.push([c(T),c(d[T])]);return w}case Wu:return u([g,d.toISOString()],d);case Du:{const{source:y,flags:w}=d;return u([g,{source:y,flags:w}],d)}case ju:{const y=[],w=u([g,y],d);for(const[T,v]of d)(a||!(is(Eo(T))||is(Eo(v))))&&y.push([c(T),c(v)]);return w}case Bu:{const y=[],w=u([g,y],d);for(const T of d)(a||!is(Eo(T)))&&y.push(c(T));return w}}const{message:f}=d;return u([g,{name:p,message:f}],d)};return c},Sg=(a,{json:o,lossy:r}={})=>{const s=[];return Cx(!(o||r),!!o,new Map,s)(a),s},ds=typeof structuredClone=="function"?(a,o)=>o&&("json"in o||"lossy"in o)?xg(Sg(a,o)):structuredClone(a):(a,o)=>xg(Sg(a,o));function Mx(a,o){const r=[{type:"text",value:"↩"}];return o>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(o)}]}),r}function zx(a,o){return"Back to reference "+(a+1)+(o>1?"-"+o:"")}function Wx(a){const o=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||Mx,s=a.options.footnoteBackLabel||zx,u=a.options.footnoteLabel||"Footnotes",c=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},g=[];let p=-1;for(;++p<a.footnoteOrder.length;){const f=a.footnoteById.get(a.footnoteOrder[p]);if(!f)continue;const y=a.all(f),w=String(f.identifier).toUpperCase(),T=Ii(w.toLowerCase());let v=0;const R=[],H=a.footnoteCounts.get(w);for(;H!==void 0&&++v<=H;){R.length>0&&R.push({type:"text",value:" "});let K=typeof r=="string"?r:r(p,v);typeof K=="string"&&(K={type:"text",value:K}),R.push({type:"element",tagName:"a",properties:{href:"#"+o+"fnref-"+T+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof s=="string"?s:s(p,v),className:["data-footnote-backref"]},children:Array.isArray(K)?K:[K]})}const D=y[y.length-1];if(D&&D.type==="element"&&D.tagName==="p"){const K=D.children[D.children.length-1];K&&K.type==="text"?K.value+=" ":D.children.push({type:"text",value:" "}),D.children.push(...R)}else y.push(...R);const j={type:"element",tagName:"li",properties:{id:o+"fn-"+T},children:a.wrap(y,!0)};a.patch(f,j),g.push(j)}if(g.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...ds(d),id:"footnote-label"},children:[{type:"text",value:u}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(g,!0)},{type:"text",value:`
`}]}}const jp=(function(a){if(a==null)return Rx;if(typeof a=="function")return ws(a);if(typeof a=="object")return Array.isArray(a)?Dx(a):jx(a);if(typeof a=="string")return Bx(a);throw new Error("Expected function, string, or object as test")});function Dx(a){const o=[];let r=-1;for(;++r<a.length;)o[r]=jp(a[r]);return ws(s);function s(...u){let c=-1;for(;++c<o.length;)if(o[c].apply(this,u))return!0;return!1}}function jx(a){const o=a;return ws(r);function r(s){const u=s;let c;for(c in a)if(u[c]!==o[c])return!1;return!0}}function Bx(a){return ws(o);function o(r){return r&&r.type===a}}function ws(a){return o;function o(r,s,u){return!!(Hx(r)&&a.call(this,r,typeof s=="number"?s:void 0,u||void 0))}}function Rx(){return!0}function Hx(a){return a!==null&&typeof a=="object"&&"type"in a}const Bp=[],Ox=!0,Ag=!1,Nx="skip";function qx(a,o,r,s){let u;typeof o=="function"&&typeof r!="function"?(s=r,r=o):u=o;const c=jp(u),d=s?-1:1;g(a,void 0,[])();function g(p,f,y){const w=p&&typeof p=="object"?p:{};if(typeof w.type=="string"){const v=typeof w.tagName=="string"?w.tagName:typeof w.name=="string"?w.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return T;function T(){let v=Bp,R,H,D;if((!o||c(p,f,y[y.length-1]||void 0))&&(v=Lx(r(p,y)),v[0]===Ag))return v;if("children"in p&&p.children){const j=p;if(j.children&&v[0]!==Nx)for(H=(s?j.children.length:-1)+d,D=y.concat(j);H>-1&&H<j.children.length;){const K=j.children[H];if(R=g(K,H,D)(),R[0]===Ag)return R;H=typeof R[1]=="number"?R[1]:H+d}}return v}}}function Lx(a){return Array.isArray(a)?a:typeof a=="number"?[Ox,a]:a==null?Bp:[a]}function Rp(a,o,r,s){let u,c,d;typeof o=="function"&&typeof r!="function"?(c=void 0,d=o,u=r):(c=o,d=r,u=s),qx(a,c,g,u);function g(p,f){const y=f[f.length-1],w=y?y.children.indexOf(p):void 0;return d(p,w,y)}}const cu={}.hasOwnProperty,_x={};function Yx(a,o){const r=o||_x,s=new Map,u=new Map,c=new Map,d={...Sx,...r.handlers},g={all:f,applyData:Vx,definitionById:s,footnoteById:u,footnoteCounts:c,footnoteOrder:[],handlers:d,one:p,options:r,patch:Ux,wrap:Gx};return Rp(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const w=y.type==="definition"?s:u,T=String(y.identifier).toUpperCase();w.has(T)||w.set(T,y)}}),g;function p(y,w){const T=y.type,v=g.handlers[T];if(cu.call(g.handlers,T)&&v)return v(g,y,w);if(g.options.passThrough&&g.options.passThrough.includes(T)){if("children"in y){const{children:H,...D}=y,j=ds(D);return j.children=g.all(y),j}return ds(y)}return(g.options.unknownHandler||Fx)(g,y,w)}function f(y){const w=[];if("children"in y){const T=y.children;let v=-1;for(;++v<T.length;){const R=g.one(T[v],y);if(R){if(v&&T[v-1].type==="break"&&(!Array.isArray(R)&&R.type==="text"&&(R.value=Ig(R.value)),!Array.isArray(R)&&R.type==="element")){const H=R.children[0];H&&H.type==="text"&&(H.value=Ig(H.value))}Array.isArray(R)?w.push(...R):w.push(R)}}}return w}}function Ux(a,o){a.position&&(o.position=Ik(a))}function Vx(a,o){let r=o;if(a&&a.data){const s=a.data.hName,u=a.data.hChildren,c=a.data.hProperties;if(typeof s=="string")if(r.type==="element")r.tagName=s;else{const d="children"in r?r.children:[r];r={type:"element",tagName:s,properties:{},children:d}}r.type==="element"&&c&&Object.assign(r.properties,ds(c)),"children"in r&&r.children&&u!==null&&u!==void 0&&(r.children=u)}return r}function Fx(a,o){const r=o.data||{},s="value"in o&&!(cu.call(r,"hProperties")||cu.call(r,"hChildren"))?{type:"text",value:o.value}:{type:"element",tagName:"div",properties:{},children:a.all(o)};return a.patch(o,s),a.applyData(o,s)}function Gx(a,o){const r=[];let s=-1;for(o&&r.push({type:"text",value:`
`});++s<a.length;)s&&r.push({type:"text",value:`
`}),r.push(a[s]);return o&&a.length>0&&r.push({type:"text",value:`
`}),r}function Ig(a){let o=0,r=a.charCodeAt(o);for(;r===9||r===32;)o++,r=a.charCodeAt(o);return a.slice(o)}function Eg(a,o){const r=Yx(a,o),s=r.one(a,void 0),u=Wx(r),c=Array.isArray(s)?{type:"root",children:s}:s||{type:"root",children:[]};return u&&c.children.push({type:"text",value:`
`},u),c}function Qx(a,o){return a&&"run"in a?async function(r,s){const u=Eg(r,{file:s,...o});await a.run(u,s)}:function(r,s){return Eg(r,{file:s,...a||o})}}function Cg(a){if(a)throw a}var Kh,Mg;function Kx(){if(Mg)return Kh;Mg=1;var a=Object.prototype.hasOwnProperty,o=Object.prototype.toString,r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=function(f){return typeof Array.isArray=="function"?Array.isArray(f):o.call(f)==="[object Array]"},c=function(f){if(!f||o.call(f)!=="[object Object]")return!1;var y=a.call(f,"constructor"),w=f.constructor&&f.constructor.prototype&&a.call(f.constructor.prototype,"isPrototypeOf");if(f.constructor&&!y&&!w)return!1;var T;for(T in f);return typeof T>"u"||a.call(f,T)},d=function(f,y){r&&y.name==="__proto__"?r(f,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):f[y.name]=y.newValue},g=function(f,y){if(y==="__proto__")if(a.call(f,y)){if(s)return s(f,y).value}else return;return f[y]};return Kh=function p(){var f,y,w,T,v,R,H=arguments[0],D=1,j=arguments.length,K=!1;for(typeof H=="boolean"&&(K=H,H=arguments[1]||{},D=2),(H==null||typeof H!="object"&&typeof H!="function")&&(H={});D<j;++D)if(f=arguments[D],f!=null)for(y in f)w=g(H,y),T=g(f,y),H!==T&&(K&&T&&(c(T)||(v=u(T)))?(v?(v=!1,R=w&&u(w)?w:[]):R=w&&c(w)?w:{},d(H,{name:y,newValue:p(K,R,T)})):typeof T<"u"&&d(H,{name:y,newValue:T}));return H},Kh}var Xx=Kx();const Xh=Rg(Xx);function du(a){if(typeof a!="object"||a===null)return!1;const o=Object.getPrototypeOf(a);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function Zx(){const a=[],o={run:r,use:s};return o;function r(...u){let c=-1;const d=u.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);g(null,...u);function g(p,...f){const y=a[++c];let w=-1;if(p){d(p);return}for(;++w<u.length;)(f[w]===null||f[w]===void 0)&&(f[w]=u[w]);u=f,y?Px(y,g)(...f):d(null,...f)}}function s(u){if(typeof u!="function")throw new TypeError("Expected `middelware` to be a function, not "+u);return a.push(u),o}}function Px(a,o){let r;return s;function s(...d){const g=a.length>d.length;let p;g&&d.push(u);try{p=a.apply(this,d)}catch(f){const y=f;if(g&&r)throw y;return u(y)}g||(p&&p.then&&typeof p.then=="function"?p.then(c,u):p instanceof Error?u(p):c(p))}function u(d,...g){r||(r=!0,o(d,...g))}function c(d){u(null,d)}}const un={basename:Jx,dirname:$x,extname:eS,join:tS,sep:"/"};function Jx(a,o){if(o!==void 0&&typeof o!="string")throw new TypeError('"ext" argument must be a string');Ho(a);let r=0,s=-1,u=a.length,c;if(o===void 0||o.length===0||o.length>a.length){for(;u--;)if(a.codePointAt(u)===47){if(c){r=u+1;break}}else s<0&&(c=!0,s=u+1);return s<0?"":a.slice(r,s)}if(o===a)return"";let d=-1,g=o.length-1;for(;u--;)if(a.codePointAt(u)===47){if(c){r=u+1;break}}else d<0&&(c=!0,d=u+1),g>-1&&(a.codePointAt(u)===o.codePointAt(g--)?g<0&&(s=u):(g=-1,s=d));return r===s?s=d:s<0&&(s=a.length),a.slice(r,s)}function $x(a){if(Ho(a),a.length===0)return".";let o=-1,r=a.length,s;for(;--r;)if(a.codePointAt(r)===47){if(s){o=r;break}}else s||(s=!0);return o<0?a.codePointAt(0)===47?"/":".":o===1&&a.codePointAt(0)===47?"//":a.slice(0,o)}function eS(a){Ho(a);let o=a.length,r=-1,s=0,u=-1,c=0,d;for(;o--;){const g=a.codePointAt(o);if(g===47){if(d){s=o+1;break}continue}r<0&&(d=!0,r=o+1),g===46?u<0?u=o:c!==1&&(c=1):u>-1&&(c=-1)}return u<0||r<0||c===0||c===1&&u===r-1&&u===s+1?"":a.slice(u,r)}function tS(...a){let o=-1,r;for(;++o<a.length;)Ho(a[o]),a[o]&&(r=r===void 0?a[o]:r+"/"+a[o]);return r===void 0?".":nS(r)}function nS(a){Ho(a);const o=a.codePointAt(0)===47;let r=aS(a,!o);return r.length===0&&!o&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),o?"/"+r:r}function aS(a,o){let r="",s=0,u=-1,c=0,d=-1,g,p;for(;++d<=a.length;){if(d<a.length)g=a.codePointAt(d);else{if(g===47)break;g=47}if(g===47){if(!(u===d-1||c===1))if(u!==d-1&&c===2){if(r.length<2||s!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(p=r.lastIndexOf("/"),p!==r.length-1){p<0?(r="",s=0):(r=r.slice(0,p),s=r.length-1-r.lastIndexOf("/")),u=d,c=0;continue}}else if(r.length>0){r="",s=0,u=d,c=0;continue}}o&&(r=r.length>0?r+"/..":"..",s=2)}else r.length>0?r+="/"+a.slice(u+1,d):r=a.slice(u+1,d),s=d-u-1;u=d,c=0}else g===46&&c>-1?c++:c=-1}return r}function Ho(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const iS={cwd:oS};function oS(){return"/"}function mu(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function rS(a){if(typeof a=="string")a=new URL(a);else if(!mu(a)){const o=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw o.code="ERR_INVALID_ARG_TYPE",o}if(a.protocol!=="file:"){const o=new TypeError("The URL must be of scheme file");throw o.code="ERR_INVALID_URL_SCHEME",o}return sS(a)}function sS(a){if(a.hostname!==""){const s=new TypeError('File URL host must be "localhost" or empty on darwin');throw s.code="ERR_INVALID_FILE_URL_HOST",s}const o=a.pathname;let r=-1;for(;++r<o.length;)if(o.codePointAt(r)===37&&o.codePointAt(r+1)===50){const s=o.codePointAt(r+2);if(s===70||s===102){const u=new TypeError("File URL path must not include encoded / characters");throw u.code="ERR_INVALID_FILE_URL_PATH",u}}return decodeURIComponent(o)}const Zh=["history","path","basename","stem","extname","dirname"];class Hp{constructor(o){let r;o?mu(o)?r={path:o}:typeof o=="string"||lS(o)?r={value:o}:r=o:r={},this.cwd="cwd"in r?"":iS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let s=-1;for(;++s<Zh.length;){const c=Zh[s];c in r&&r[c]!==void 0&&r[c]!==null&&(this[c]=c==="history"?[...r[c]]:r[c])}let u;for(u in r)Zh.includes(u)||(this[u]=r[u])}get basename(){return typeof this.path=="string"?un.basename(this.path):void 0}set basename(o){Jh(o,"basename"),Ph(o,"basename"),this.path=un.join(this.dirname||"",o)}get dirname(){return typeof this.path=="string"?un.dirname(this.path):void 0}set dirname(o){zg(this.basename,"dirname"),this.path=un.join(o||"",this.basename)}get extname(){return typeof this.path=="string"?un.extname(this.path):void 0}set extname(o){if(Ph(o,"extname"),zg(this.dirname,"extname"),o){if(o.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(o.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=un.join(this.dirname,this.stem+(o||""))}get path(){return this.history[this.history.length-1]}set path(o){mu(o)&&(o=rS(o)),Jh(o,"path"),this.path!==o&&this.history.push(o)}get stem(){return typeof this.path=="string"?un.basename(this.path,this.extname):void 0}set stem(o){Jh(o,"stem"),Ph(o,"stem"),this.path=un.join(this.dirname||"",o+(this.extname||""))}fail(o,r,s){const u=this.message(o,r,s);throw u.fatal=!0,u}info(o,r,s){const u=this.message(o,r,s);return u.fatal=void 0,u}message(o,r,s){const u=new ft(o,r,s);return this.path&&(u.name=this.path+":"+u.name,u.file=this.path),u.fatal=!1,this.messages.push(u),u}toString(o){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(o||void 0).decode(this.value)}}function Ph(a,o){if(a&&a.includes(un.sep))throw new Error("`"+o+"` cannot be a path: did not expect `"+un.sep+"`")}function Jh(a,o){if(!a)throw new Error("`"+o+"` cannot be empty")}function zg(a,o){if(!a)throw new Error("Setting `"+o+"` requires `path` to be set too")}function lS(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const hS=(function(a){const s=this.constructor.prototype,u=s[a],c=function(){return u.apply(c,arguments)};return Object.setPrototypeOf(c,s),c}),uS={}.hasOwnProperty;class Ru extends hS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Zx()}copy(){const o=new Ru;let r=-1;for(;++r<this.attachers.length;){const s=this.attachers[r];o.use(...s)}return o.data(Xh(!0,{},this.namespace)),o}data(o,r){return typeof o=="string"?arguments.length===2?(tu("data",this.frozen),this.namespace[o]=r,this):uS.call(this.namespace,o)&&this.namespace[o]||void 0:o?(tu("data",this.frozen),this.namespace=o,this):this.namespace}freeze(){if(this.frozen)return this;const o=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...s]=this.attachers[this.freezeIndex];if(s[0]===!1)continue;s[0]===!0&&(s[0]=void 0);const u=r.call(o,...s);typeof u=="function"&&this.transformers.use(u)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(o){this.freeze();const r=os(o),s=this.parser||this.Parser;return $h("parse",s),s(String(r),r)}process(o,r){const s=this;return this.freeze(),$h("process",this.parser||this.Parser),eu("process",this.compiler||this.Compiler),r?u(void 0,r):new Promise(u);function u(c,d){const g=os(o),p=s.parse(g);s.run(p,g,function(y,w,T){if(y||!w||!T)return f(y);const v=w,R=s.stringify(v,T);mS(R)?T.value=R:T.result=R,f(y,T)});function f(y,w){y||!w?d(y):c?c(w):r(void 0,w)}}}processSync(o){let r=!1,s;return this.freeze(),$h("processSync",this.parser||this.Parser),eu("processSync",this.compiler||this.Compiler),this.process(o,u),Dg("processSync","process",r),s;function u(c,d){r=!0,Cg(c),s=d}}run(o,r,s){Wg(o),this.freeze();const u=this.transformers;return!s&&typeof r=="function"&&(s=r,r=void 0),s?c(void 0,s):new Promise(c);function c(d,g){const p=os(r);u.run(o,p,f);function f(y,w,T){const v=w||o;y?g(y):d?d(v):s(void 0,v,T)}}}runSync(o,r){let s=!1,u;return this.run(o,r,c),Dg("runSync","run",s),u;function c(d,g){Cg(d),u=g,s=!0}}stringify(o,r){this.freeze();const s=os(r),u=this.compiler||this.Compiler;return eu("stringify",u),Wg(o),u(o,s)}use(o,...r){const s=this.attachers,u=this.namespace;if(tu("use",this.frozen),o!=null)if(typeof o=="function")p(o,r);else if(typeof o=="object")Array.isArray(o)?g(o):d(o);else throw new TypeError("Expected usable value, not `"+o+"`");return this;function c(f){if(typeof f=="function")p(f,[]);else if(typeof f=="object")if(Array.isArray(f)){const[y,...w]=f;p(y,w)}else d(f);else throw new TypeError("Expected usable value, not `"+f+"`")}function d(f){if(!("plugins"in f)&&!("settings"in f))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");g(f.plugins),f.settings&&(u.settings=Xh(!0,u.settings,f.settings))}function g(f){let y=-1;if(f!=null)if(Array.isArray(f))for(;++y<f.length;){const w=f[y];c(w)}else throw new TypeError("Expected a list of plugins, not `"+f+"`")}function p(f,y){let w=-1,T=-1;for(;++w<s.length;)if(s[w][0]===f){T=w;break}if(T===-1)s.push([f,...y]);else if(y.length>0){let[v,...R]=y;const H=s[T][1];du(H)&&du(v)&&(v=Xh(!0,H,v)),s[T]=[f,v,...R]}}}}const cS=new Ru().freeze();function $h(a,o){if(typeof o!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function eu(a,o){if(typeof o!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function tu(a,o){if(o)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Wg(a){if(!du(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Dg(a,o,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+o+"` instead")}function os(a){return dS(a)?a:new Hp(a)}function dS(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function mS(a){return typeof a=="string"||fS(a)}function fS(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const gS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",jg=[],Bg={allowDangerousHtml:!0},pS=/^(https?|ircs?|mailto|xmpp)$/i,yS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wS(a){const o=bS(a),r=vS(a);return kS(o.runSync(o.parse(r),r),a)}function bS(a){const o=a.rehypePlugins||jg,r=a.remarkPlugins||jg,s=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Bg}:Bg;return cS().use(J0).use(r).use(Qx,s).use(o)}function vS(a){const o=a.children||"",r=new Hp;return typeof o=="string"&&(r.value=o),r}function kS(a,o){const r=o.allowedElements,s=o.allowElement,u=o.components,c=o.disallowedElements,d=o.skipHtml,g=o.unwrapDisallowed,p=o.urlTransform||TS;for(const y of yS)Object.hasOwn(o,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+gS+y.id,void 0);return Rp(a,f),Wk(a,{Fragment:X.Fragment,components:u,ignoreInvalidStyle:!0,jsx:X.jsx,jsxs:X.jsxs,passKeys:!0,passNode:!0});function f(y,w,T){if(y.type==="raw"&&T&&typeof w=="number")return d?T.children.splice(w,1):T.children[w]={type:"text",value:y.value},w;if(y.type==="element"){let v;for(v in Fh)if(Object.hasOwn(Fh,v)&&Object.hasOwn(y.properties,v)){const R=y.properties[v],H=Fh[v];(H===null||H.includes(y.tagName))&&(y.properties[v]=p(String(R||""),v,y))}}if(y.type==="element"){let v=r?!r.includes(y.tagName):c?c.includes(y.tagName):!1;if(!v&&s&&typeof w=="number"&&(v=!s(y,w,T)),v&&T&&typeof w=="number")return g&&y.children?T.children.splice(w,1,...y.children):T.children.splice(w,1),w}}}function TS(a){const o=a.indexOf(":"),r=a.indexOf("?"),s=a.indexOf("#"),u=a.indexOf("/");return o===-1||u!==-1&&o>u||r!==-1&&o>r||s!==-1&&o>s||pS.test(a.slice(0,o))?a:""}function xS(){const{seriesId:a,day:o}=Qg(),r=ku(a||""),s=Number(o),u=r?.lessons.find(y=>y.day===s),[c,d]=N.useState("parable");if(N.useEffect(()=>{window.scrollTo(0,0)},[a,o]),!r)return X.jsx(Pg,{to:"/",replace:!0});if(!u)return X.jsxs("div",{className:"container",children:[X.jsx("p",{children:"Lesson not found."}),X.jsxs(Et,{to:`/${r.id}`,className:"nav-link",children:["← Back to ",r.name]})]});const g=r.lessons.find(y=>y.day===s-1),p=r.lessons.find(y=>y.day===s+1),f=c==="parable"?u.parable:u.standard;return X.jsxs("div",{className:"container",children:[X.jsxs("nav",{className:"breadcrumb",children:[X.jsx(Et,{to:"/",className:"nav-link",children:"Home"}),X.jsx("span",{className:"breadcrumb-sep",children:"›"}),X.jsx(Et,{to:`/${r.id}`,className:"nav-link",children:r.name}),X.jsx("span",{className:"breadcrumb-sep",children:"›"}),X.jsxs("span",{children:["Day ",u.day]})]}),u.image&&X.jsx("div",{className:"lesson-hero",children:X.jsx("img",{src:`/parable/${u.image}`,alt:u.title})}),X.jsxs("header",{className:"lesson-header",children:[X.jsxs("span",{className:"lesson-day-badge",children:["Day ",u.day]}),X.jsx("h1",{children:u.title})]}),X.jsxs("div",{className:"toggle-container",children:[X.jsx("button",{className:`toggle-btn ${c==="parable"?"active":""}`,onClick:()=>d("parable"),children:"🏰 Parable"}),X.jsx("button",{className:`toggle-btn ${c==="standard"?"active":""}`,onClick:()=>d("standard"),children:"📖 Standard"})]}),X.jsx("article",{className:`lesson-content ${c}`,children:X.jsx(wS,{children:f})},c),X.jsxs("nav",{className:"bottom-nav",children:[g?X.jsxs(Et,{to:`/${r.id}/lesson/${g.day}`,className:"nav-link",children:["← Day ",g.day]}):X.jsx("span",{}),p?X.jsxs(Et,{to:`/${r.id}/lesson/${p.day}`,className:"nav-link",children:["Day ",p.day," →"]}):X.jsx("span",{})]}),(()=>{const y=Ca.findIndex(H=>H.id===r.id),w=y>0?Ca[y-1]:null,T=y<Ca.length-1?Ca[y+1]:null,v=w?Zf(w.id):0,R=T?Zf(T.id):0;return X.jsxs("nav",{className:"series-nav",children:[w&&v>0?X.jsxs(Et,{to:`/${w.id}/lesson/${v}`,className:"series-nav-link prev",children:[X.jsx("span",{className:"series-nav-label",children:"Previous Series"}),X.jsx("span",{className:"series-nav-name",children:w.name})]}):X.jsx("span",{}),T&&R>0?X.jsxs(Et,{to:`/${T.id}/lesson/${R}`,className:"series-nav-link next",children:[X.jsx("span",{className:"series-nav-label",children:"Next Series"}),X.jsx("span",{className:"series-nav-name",children:T.name})]}):X.jsx("span",{})]})})()]})}function SS(){const[a,o]=N.useState(!1);return N.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: light)"),s=()=>document.documentElement.setAttribute("data-theme",r.matches?"light":"dark");return s(),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[]),X.jsx(Ev,{children:X.jsxs("div",{className:"app-layout",children:[X.jsx(ek,{open:a,onClose:()=>o(!1)}),X.jsxs("div",{className:"main-content",children:[X.jsx("button",{className:"hamburger",onClick:()=>o(!0),"aria-label":"Open menu",children:"☰"}),X.jsxs(av,{children:[X.jsx(rs,{path:"/",element:X.jsx(tk,{})}),X.jsx(rs,{path:"/:seriesId",element:X.jsx(nk,{})}),X.jsx(rs,{path:"/:seriesId/lesson/:day",element:X.jsx(xS,{})})]})]})]})})}rb.createRoot(document.getElementById("root")).render(X.jsx(N.StrictMode,{children:X.jsx(SS,{})}));
