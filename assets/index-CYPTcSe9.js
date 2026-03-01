(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(h){if(h.ep)return;h.ep=!0;const c=l(h);fetch(h.href,c)}})();function Bg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bu={exports:{}},br={};var Om;function Zw(){if(Om)return br;Om=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(o,h,c){var d=null;if(c!==void 0&&(d=""+c),h.key!==void 0&&(d=""+h.key),"key"in h){c={};for(var g in h)g!=="key"&&(c[g]=h[g])}else c=h;return h=c.ref,{$$typeof:a,type:o,key:d,ref:h!==void 0?h:null,props:c}}return br.Fragment=r,br.jsx=l,br.jsxs=l,br}var Bm;function Jw(){return Bm||(Bm=1,Bu.exports=Zw()),Bu.exports}var Z=Jw(),Nu={exports:{}},ge={};var Nm;function $w(){if(Nm)return ge;Nm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),k=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=k&&E[k]||E["@@iterator"],typeof E=="function"?E:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,O={};function B(E,U,T){this.props=E,this.context=U,this.refs=O,this.updater=T||_}B.prototype.isReactComponent={},B.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function F(){}F.prototype=B.prototype;function V(E,U,T){this.props=E,this.context=U,this.refs=O,this.updater=T||_}var re=V.prototype=new F;re.constructor=V,H(re,B.prototype),re.isPureReactComponent=!0;var se=Array.isArray;function I(){}var J={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(E,U,T){var $=T.ref;return{$$typeof:a,type:E,key:U,ref:$!==void 0?$:null,props:T}}function be(E,U){return fe(E.type,U,E.props)}function ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function P(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(T){return U[T]})}var Te=/\/+/g;function ne(E,U){return typeof E=="object"&&E!==null&&E.key!=null?P(""+E.key):U.toString(36)}function Q(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(I,I):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function R(E,U,T,$,he){var le=typeof E;(le==="undefined"||le==="boolean")&&(E=null);var Ee=!1;if(E===null)Ee=!0;else switch(le){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(E.$$typeof){case a:case r:Ee=!0;break;case p:return Ee=E._init,R(Ee(E._payload),U,T,$,he)}}if(Ee)return he=he(E),Ee=$===""?"."+ne(E,0):$,se(he)?(T="",Ee!=null&&(T=Ee.replace(Te,"$&/")+"/"),R(he,U,T,"",function(Ut){return Ut})):he!=null&&(ee(he)&&(he=be(he,T+(he.key==null||E&&E.key===he.key?"":(""+he.key).replace(Te,"$&/")+"/")+Ee)),U.push(he)),1;Ee=0;var Qe=$===""?".":$+":";if(se(E))for(var He=0;He<E.length;He++)$=E[He],le=Qe+ne($,He),Ee+=R($,U,T,le,he);else if(He=v(E),typeof He=="function")for(E=He.call(E),He=0;!($=E.next()).done;)$=$.value,le=Qe+ne($,He++),Ee+=R($,U,T,le,he);else if(le==="object"){if(typeof E.then=="function")return R(Q(E),U,T,$,he);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function G(E,U,T){if(E==null)return E;var $=[],he=0;return R(E,$,"","",function(le){return U.call(T,le,he++)}),$}function ie(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(T){(E._status===0||E._status===-1)&&(E._status=1,E._result=T)},function(T){(E._status===0||E._status===-1)&&(E._status=2,E._result=T)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},S={map:G,forEach:function(E,U,T){G(E,function(){U.apply(this,arguments)},T)},count:function(E){var U=0;return G(E,function(){U++}),U},toArray:function(E){return G(E,function(U){return U})||[]},only:function(E){if(!ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ge.Activity=w,ge.Children=S,ge.Component=B,ge.Fragment=l,ge.Profiler=h,ge.PureComponent=V,ge.StrictMode=o,ge.Suspense=y,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ge.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},ge.cache=function(E){return function(){return E.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(E,U,T){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=H({},E.props),he=E.key;if(U!=null)for(le in U.key!==void 0&&(he=""+U.key),U)!ce.call(U,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&U.ref===void 0||($[le]=U[le]);var le=arguments.length-2;if(le===1)$.children=T;else if(1<le){for(var Ee=Array(le),Qe=0;Qe<le;Qe++)Ee[Qe]=arguments[Qe+2];$.children=Ee}return fe(E.type,he,$)},ge.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ge.createElement=function(E,U,T){var $,he={},le=null;if(U!=null)for($ in U.key!==void 0&&(le=""+U.key),U)ce.call(U,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(he[$]=U[$]);var Ee=arguments.length-2;if(Ee===1)he.children=T;else if(1<Ee){for(var Qe=Array(Ee),He=0;He<Ee;He++)Qe[He]=arguments[He+2];he.children=Qe}if(E&&E.defaultProps)for($ in Ee=E.defaultProps,Ee)he[$]===void 0&&(he[$]=Ee[$]);return fe(E,le,he)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(E){return{$$typeof:g,render:E}},ge.isValidElement=ee,ge.lazy=function(E){return{$$typeof:p,_payload:{_status:-1,_result:E},_init:ie}},ge.memo=function(E,U){return{$$typeof:m,type:E,compare:U===void 0?null:U}},ge.startTransition=function(E){var U=J.T,T={};J.T=T;try{var $=E(),he=J.S;he!==null&&he(T,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(I,ve)}catch(le){ve(le)}finally{U!==null&&T.types!==null&&(U.types=T.types),J.T=U}},ge.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ge.use=function(E){return J.H.use(E)},ge.useActionState=function(E,U,T){return J.H.useActionState(E,U,T)},ge.useCallback=function(E,U){return J.H.useCallback(E,U)},ge.useContext=function(E){return J.H.useContext(E)},ge.useDebugValue=function(){},ge.useDeferredValue=function(E,U){return J.H.useDeferredValue(E,U)},ge.useEffect=function(E,U){return J.H.useEffect(E,U)},ge.useEffectEvent=function(E){return J.H.useEffectEvent(E)},ge.useId=function(){return J.H.useId()},ge.useImperativeHandle=function(E,U,T){return J.H.useImperativeHandle(E,U,T)},ge.useInsertionEffect=function(E,U){return J.H.useInsertionEffect(E,U)},ge.useLayoutEffect=function(E,U){return J.H.useLayoutEffect(E,U)},ge.useMemo=function(E,U){return J.H.useMemo(E,U)},ge.useOptimistic=function(E,U){return J.H.useOptimistic(E,U)},ge.useReducer=function(E,U,T){return J.H.useReducer(E,U,T)},ge.useRef=function(E){return J.H.useRef(E)},ge.useState=function(E){return J.H.useState(E)},ge.useSyncExternalStore=function(E,U,T){return J.H.useSyncExternalStore(E,U,T)},ge.useTransition=function(){return J.H.useTransition()},ge.version="19.2.4",ge}var _m;function fh(){return _m||(_m=1,Nu.exports=$w()),Nu.exports}var j=fh(),_u={exports:{}},vr={},Hu={exports:{}},Lu={};var Hm;function Pw(){return Hm||(Hm=1,(function(a){function r(R,G){var ie=R.length;R.push(G);e:for(;0<ie;){var ve=ie-1>>>1,S=R[ve];if(0<h(S,G))R[ve]=G,R[ie]=S,ie=ve;else break e}}function l(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var G=R[0],ie=R.pop();if(ie!==G){R[0]=ie;e:for(var ve=0,S=R.length,E=S>>>1;ve<E;){var U=2*(ve+1)-1,T=R[U],$=U+1,he=R[$];if(0>h(T,ie))$<S&&0>h(he,T)?(R[ve]=he,R[$]=ie,ve=$):(R[ve]=T,R[U]=ie,ve=U);else if($<S&&0>h(he,ie))R[ve]=he,R[$]=ie,ve=$;else break e}}return G}function h(R,G){var ie=R.sortIndex-G.sortIndex;return ie!==0?ie:R.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var y=[],m=[],p=1,w=null,k=3,v=!1,_=!1,H=!1,O=!1,B=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function re(R){for(var G=l(m);G!==null;){if(G.callback===null)o(m);else if(G.startTime<=R)o(m),G.sortIndex=G.expirationTime,r(y,G);else break;G=l(m)}}function se(R){if(H=!1,re(R),!_)if(l(y)!==null)_=!0,I||(I=!0,P());else{var G=l(m);G!==null&&Q(se,G.startTime-R)}}var I=!1,J=-1,ce=5,fe=-1;function be(){return O?!0:!(a.unstable_now()-fe<ce)}function ee(){if(O=!1,I){var R=a.unstable_now();fe=R;var G=!0;try{e:{_=!1,H&&(H=!1,F(J),J=-1),v=!0;var ie=k;try{t:{for(re(R),w=l(y);w!==null&&!(w.expirationTime>R&&be());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,k=w.priorityLevel;var S=ve(w.expirationTime<=R);if(R=a.unstable_now(),typeof S=="function"){w.callback=S,re(R),G=!0;break t}w===l(y)&&o(y),re(R)}else o(y);w=l(y)}if(w!==null)G=!0;else{var E=l(m);E!==null&&Q(se,E.startTime-R),G=!1}}break e}finally{w=null,k=ie,v=!1}G=void 0}}finally{G?P():I=!1}}}var P;if(typeof V=="function")P=function(){V(ee)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,ne=Te.port2;Te.port1.onmessage=ee,P=function(){ne.postMessage(null)}}else P=function(){B(ee,0)};function Q(R,G){J=B(function(){R(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return k},a.unstable_next=function(R){switch(k){case 1:case 2:case 3:var G=3;break;default:G=k}var ie=k;k=G;try{return R()}finally{k=ie}},a.unstable_requestPaint=function(){O=!0},a.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ie=k;k=R;try{return G()}finally{k=ie}},a.unstable_scheduleCallback=function(R,G,ie){var ve=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ie+S,R={id:p++,callback:G,priorityLevel:R,startTime:ie,expirationTime:S,sortIndex:-1},ie>ve?(R.sortIndex=ie,r(m,R),l(y)===null&&R===l(m)&&(H?(F(J),J=-1):H=!0,Q(se,ie-ve))):(R.sortIndex=S,r(y,R),_||v||(_=!0,I||(I=!0,P()))),R},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(R){var G=k;return function(){var ie=k;k=G;try{return R.apply(this,arguments)}finally{k=ie}}}})(Lu)),Lu}var Lm;function eb(){return Lm||(Lm=1,Hu.exports=Pw()),Hu.exports}var ju={exports:{}},ft={};var jm;function tb(){if(jm)return ft;jm=1;var a=fh();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},h=Symbol.for("react.portal");function c(y,m,p){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:y,containerInfo:m,implementation:p}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ft.createPortal=function(y,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return c(y,m,null,p)},ft.flushSync=function(y){var m=d.T,p=o.p;try{if(d.T=null,o.p=2,y)return y()}finally{d.T=m,o.p=p,o.d.f()}},ft.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(y,m))},ft.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},ft.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var p=m.as,w=g(p,m.crossOrigin),k=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?o.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:k,fetchPriority:v}):p==="script"&&o.d.X(y,{crossOrigin:w,integrity:k,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=g(m.as,m.crossOrigin);o.d.M(y,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(y)},ft.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,w=g(p,m.crossOrigin);o.d.L(y,p,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(y,m){if(typeof y=="string")if(m){var p=g(m.as,m.crossOrigin);o.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(y)},ft.requestFormReset=function(y){o.d.r(y)},ft.unstable_batchedUpdates=function(y,m){return y(m)},ft.useFormState=function(y,m,p){return d.H.useFormState(y,m,p)},ft.useFormStatus=function(){return d.H.useHostTransitionStatus()},ft.version="19.2.4",ft}var Im;function nb(){if(Im)return ju.exports;Im=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ju.exports=tb(),ju.exports}var Um;function ab(){if(Um)return vr;Um=1;var a=eb(),r=fh(),l=nb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(c(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return y(s),e;if(u===i)return y(s),t;u=u.sibling}throw Error(o(188))}if(n.return!==i.return)n=s,i=u;else{for(var f=!1,b=s.child;b;){if(b===n){f=!0,n=s,i=u;break}if(b===i){f=!0,i=s,n=u;break}b=b.sibling}if(!f){for(b=u.child;b;){if(b===n){f=!0,n=u,i=s;break}if(b===i){f=!0,i=u,n=s;break}b=b.sibling}if(!f)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,k=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),V=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case B:return"Profiler";case O:return"StrictMode";case se:return"Suspense";case I:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case V:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var Q=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ve=[],S=-1;function E(e){return{current:e}}function U(e){0>S||(e.current=ve[S],ve[S]=null,S--)}function T(e,t){S++,ve[S]=e.current,e.current=t}var $=E(null),he=E(null),le=E(null),Ee=E(null);function Qe(e,t){switch(T(le,t),T(he,e),T($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tm(t),e=nm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U($),T($,e)}function He(){U($),U(he),U(le)}function Ut(e){e.memoizedState!==null&&T(Ee,e);var t=$.current,n=nm(t,e.type);t!==n&&(T(he,e),T($,n))}function gn(e){he.current===e&&(U($),U(he)),Ee.current===e&&(U(Ee),gr._currentValue=ie)}var Ai,_r;function yn(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||"",_r=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ai+e+_r}var Da=!1;function Ra(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(N){var D=N}Reflect.construct(e,[],W)}else{try{W.call()}catch(N){D=N}e.call(W.prototype)}}else{try{throw Error()}catch(N){D=N}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(N){if(N&&D&&typeof N.stack=="string")return[N.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],b=u[1];if(f&&b){var x=f.split(`
`),z=b.split(`
`);for(s=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;if(i===x.length||s===z.length)for(i=x.length-1,s=z.length-1;1<=i&&0<=s&&x[i]!==z[s];)s--;for(;1<=i&&0<=s;i--,s--)if(x[i]!==z[s]){if(i!==1||s!==1)do if(i--,s--,0>s||x[i]!==z[s]){var L=`
`+x[i].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=i&&0<=s);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?yn(n):""}function Hr(e,t){switch(e.tag){case 26:case 27:case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return e.child!==t&&t!==null?yn("Suspense Fallback"):yn("Suspense");case 19:return yn("SuspenseList");case 0:case 15:return Ra(e.type,!1);case 11:return Ra(e.type.render,!1);case 1:return Ra(e.type,!0);case 31:return yn("Activity");default:return""}}function Lr(e){try{var t="",n=null;do t+=Hr(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Oa=Object.prototype.hasOwnProperty,Ba=a.unstable_scheduleCallback,Ci=a.unstable_cancelCallback,wo=a.unstable_shouldYield,bo=a.unstable_requestPaint,gt=a.unstable_now,vo=a.unstable_getCurrentPriorityLevel,q=a.unstable_ImmediatePriority,K=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,ke=a.unstable_LowPriority,Be=a.unstable_IdlePriority,zt=a.log,pn=a.unstable_setDisableYieldValue,yt=null,it=null;function wt(e){if(typeof zt=="function"&&pn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(yt,e)}catch{}}var Ue=Math.clz32?Math.clz32:Hy,Ln=Math.log,en=Math.LN2;function Hy(e){return e>>>=0,e===0?32:31-(Ln(e)/en|0)|0}var jr=256,Ir=262144,Ur=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?s=ha(i):(f&=b,f!==0?s=ha(f):n||(n=b&~e,n!==0&&(s=ha(n))))):(b=i&~u,b!==0?s=ha(b):f!==0?s=ha(f):n||(n=i&~e,n!==0&&(s=ha(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ly(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(){var e=Ur;return Ur<<=1,(Ur&62914560)===0&&(Ur=4194304),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jy(e,t,n,i,s,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,x=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var L=31-Ue(n),W=1<<L;b[L]=0,x[L]=-1;var D=z[L];if(D!==null)for(z[L]=null,L=0;L<D.length;L++){var N=D[L];N!==null&&(N.lane&=-536870913)}n&=~W}i!==0&&Hh(e,i,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Hh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ue(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ue(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function jh(e,t){var n=t&-t;return n=(n&42)!==0?1:ko(n),(n&(e.suspendedLanes|t))!==0?0:n}function ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function So(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ih(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function Uh(e,t){var n=G.p;try{return G.p=e,t()}finally{G.p=n}}var jn=Math.random().toString(36).slice(2),st="__reactFiber$"+jn,bt="__reactProps$"+jn,Na="__reactContainer$"+jn,xo="__reactEvents$"+jn,Iy="__reactListeners$"+jn,Uy="__reactHandles$"+jn,qh="__reactResources$"+jn,Di="__reactMarker$"+jn;function Eo(e){delete e[st],delete e[bt],delete e[xo],delete e[Iy],delete e[Uy]}function _a(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Na]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[st])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function Ha(e){if(e=e[st]||e[Na]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function La(e){var t=e[qh];return t||(t=e[qh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[Di]=!0}var Yh=new Set,Wh={};function ca(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Wh[e]=t,e=0;e<t.length;e++)Yh.add(t[e])}var qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vh={},Gh={};function Yy(e){return Oa.call(Gh,e)?!0:Oa.call(Vh,e)?!1:qy.test(e)?Gh[e]=!0:(Vh[e]=!0,!1)}function Yr(e,t,n){if(Yy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Wr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){if(!e._valueTracker){var t=Qh(e)?"checked":"value";e._valueTracker=Wy(e,t,""+e[t])}}function Xh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Qh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vy=/[\n"\\]/g;function Yt(e){return e.replace(Vy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Co(e,t,n,i,s,u,f,b){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Mo(e,f,qt(t)):n!=null?Mo(e,f,qt(n)):i!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+qt(b):e.removeAttribute("name")}function Fh(e,t,n,i,s,u,f,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Ao(e);return}n=n!=null?""+qt(n):"",t=t!=null?""+qt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Ao(e)}function Mo(e,t,n){t==="number"&&Vr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ia(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Kh(e,t,n){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qt(n):""}function Zh(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Q(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ao(e)}function Ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jh(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Gy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function $h(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Jh(e,s,i)}else for(var u in t)t.hasOwnProperty(u)&&Jh(e,u,t[u])}function zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gr(e){return Xy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Do=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,Ya=null;function Ph(e){var t=Ha(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Co(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[bt]||null;if(!s)throw Error(o(90));Co(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Xh(i)}break e;case"textarea":Kh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ia(e,!!n.multiple,t,!1)}}}var Oo=!1;function ec(e,t,n){if(Oo)return e(t,n);Oo=!0;try{var i=e(t);return i}finally{if(Oo=!1,(qa!==null||Ya!==null)&&(Ol(),qa&&(t=qa,e=Ya,Ya=qa=null,Ph(t),e)))for(t=0;t<e.length;t++)Ph(e[t])}}function Oi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bo=!1;if(vn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Bo=!1}var In=null,No=null,Qr=null;function tc(){if(Qr)return Qr;var e,t=No,n=t.length,i,s="value"in In?In.value:In.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===s[u-i];i++);return Qr=s.slice(e,1<i?1-i:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function nc(){return!1}function vt(e){function t(n,i,s,u,f){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fr:nc,this.isPropagationStopped=nc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=vt(da),Ni=w({},da,{view:0,detail:0}),Fy=vt(Ni),_o,Ho,_i,Zr=w({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(_o=e.screenX-_i.screenX,Ho=e.screenY-_i.screenY):Ho=_o=0,_i=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ac=vt(Zr),Ky=w({},Zr,{dataTransfer:0}),Zy=vt(Ky),Jy=w({},Ni,{relatedTarget:0}),Lo=vt(Jy),$y=w({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=vt($y),ep=w({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=vt(ep),np=w({},da,{data:0}),ic=vt(np),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rp[e])?!!t[e]:!1}function jo(){return lp}var op=w({},Ni,{key:function(e){if(e.key){var t=ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ip[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jo,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=vt(op),up=w({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=vt(up),hp=w({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jo}),cp=vt(hp),dp=w({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=vt(dp),mp=w({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gp=vt(mp),yp=w({},da,{newState:0,oldState:0}),pp=vt(yp),wp=[9,13,27,32],Io=vn&&"CompositionEvent"in window,Hi=null;vn&&"documentMode"in document&&(Hi=document.documentMode);var bp=vn&&"TextEvent"in window&&!Hi,lc=vn&&(!Io||Hi&&8<Hi&&11>=Hi),oc=" ",sc=!1;function uc(e,t){switch(e){case"keyup":return wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wa=!1;function vp(e,t){switch(e){case"compositionend":return hc(t);case"keypress":return t.which!==32?null:(sc=!0,oc);case"textInput":return e=t.data,e===oc&&sc?null:e;default:return null}}function Tp(e,t){if(Wa)return e==="compositionend"||!Io&&uc(e,t)?(e=tc(),Qr=No=In=null,Wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kp[e.type]:t==="textarea"}function dc(e,t,n,i){qa?Ya?Ya.push(i):Ya=[i]:qa=i,t=Il(t,"onChange"),0<t.length&&(n=new Kr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Li=null,ji=null;function Sp(e){Kf(e,0)}function Jr(e){var t=Ri(e);if(Xh(t))return e}function fc(e,t){if(e==="change")return t}var mc=!1;if(vn){var Uo;if(vn){var qo="oninput"in document;if(!qo){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),qo=typeof gc.oninput=="function"}Uo=qo}else Uo=!1;mc=Uo&&(!document.documentMode||9<document.documentMode)}function yc(){Li&&(Li.detachEvent("onpropertychange",pc),ji=Li=null)}function pc(e){if(e.propertyName==="value"&&Jr(ji)){var t=[];dc(t,ji,e,Ro(e)),ec(Sp,t)}}function xp(e,t,n){e==="focusin"?(yc(),Li=t,ji=n,Li.attachEvent("onpropertychange",pc)):e==="focusout"&&yc()}function Ep(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jr(ji)}function Ap(e,t){if(e==="click")return Jr(t)}function Cp(e,t){if(e==="input"||e==="change")return Jr(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Mp;function Ii(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Oa.call(t,s)||!Dt(e[s],t[s]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=wc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zp=vn&&"documentMode"in document&&11>=document.documentMode,Va=null,Wo=null,Ui=null,Vo=!1;function kc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vo||Va==null||Va!==Vr(i)||(i=Va,"selectionStart"in i&&Yo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&Ii(Ui,i)||(Ui=i,i=Il(Wo,"onSelect"),0<i.length&&(t=new Kr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Va)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Go={},Sc={};vn&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ma(e){if(Go[e])return Go[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return Go[e]=t[n];return e}var xc=ma("animationend"),Ec=ma("animationiteration"),Ac=ma("animationstart"),Dp=ma("transitionrun"),Rp=ma("transitionstart"),Op=ma("transitioncancel"),Cc=ma("transitionend"),Mc=new Map,Qo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qo.push("scrollEnd");function tn(e,t){Mc.set(e,t),ca(t,[e])}var $r=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Wt=[],Qa=0,Xo=0;function Pr(){for(var e=Qa,t=Xo=Qa=0;t<e;){var n=Wt[t];Wt[t++]=null;var i=Wt[t];Wt[t++]=null;var s=Wt[t];Wt[t++]=null;var u=Wt[t];if(Wt[t++]=null,i!==null&&s!==null){var f=i.pending;f===null?s.next=s:(s.next=f.next,f.next=s),i.pending=s}u!==0&&zc(n,s,u)}}function el(e,t,n,i){Wt[Qa++]=e,Wt[Qa++]=t,Wt[Qa++]=n,Wt[Qa++]=i,Xo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Fo(e,t,n,i){return el(e,t,n,i),tl(e)}function ga(e,t){return el(e,null,null,t),tl(e)}function zc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-Ue(n),e=u.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),u):null}function tl(e){if(50<sr)throw sr=0,au=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function Bp(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,i){return new Bp(e,t,n,i)}function Ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Dc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function nl(e,t,n,i,s,u){var f=0;if(i=e,typeof e=="function")Ko(e)&&(f=1);else if(typeof e=="string")f=jw(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Rt(31,n,t,s),e.elementType=fe,e.lanes=u,e;case H:return ya(n.children,s,u,t);case O:f=8,s|=24;break;case B:return e=Rt(12,n,t,s|2),e.elementType=B,e.lanes=u,e;case se:return e=Rt(13,n,t,s),e.elementType=se,e.lanes=u,e;case I:return e=Rt(19,n,t,s),e.elementType=I,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:f=10;break e;case F:f=9;break e;case re:f=11;break e;case J:f=14;break e;case ce:f=16,i=null;break e}f=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Rt(f,n,t,s),t.elementType=e,t.type=i,t.lanes=u,t}function ya(e,t,n,i){return e=Rt(7,e,i,t),e.lanes=n,e}function Zo(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function Rc(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Jo(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oc=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var n=Oc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Lr(t)},Oc.set(e,t),t)}return{value:e,source:t,stack:Lr(t)}}var Fa=[],Ka=0,al=null,qi=0,Gt=[],Qt=0,Un=null,ln=1,on="";function kn(e,t){Fa[Ka++]=qi,Fa[Ka++]=al,al=e,qi=t}function Bc(e,t,n){Gt[Qt++]=ln,Gt[Qt++]=on,Gt[Qt++]=Un,Un=e;var i=ln;e=on;var s=32-Ue(i)-1;i&=~(1<<s),n+=1;var u=32-Ue(t)+s;if(30<u){var f=s-s%5;u=(i&(1<<f)-1).toString(32),i>>=f,s-=f,ln=1<<32-Ue(t)+s|n<<s|i,on=u+e}else ln=1<<u|n<<s|i,on=e}function $o(e){e.return!==null&&(kn(e,1),Bc(e,1,0))}function Po(e){for(;e===al;)al=Fa[--Ka],Fa[Ka]=null,qi=Fa[--Ka],Fa[Ka]=null;for(;e===Un;)Un=Gt[--Qt],Gt[Qt]=null,on=Gt[--Qt],Gt[Qt]=null,ln=Gt[--Qt],Gt[Qt]=null}function Nc(e,t){Gt[Qt++]=ln,Gt[Qt++]=on,Gt[Qt++]=Un,ln=t.id,on=t.overflow,Un=e}var ut=null,Ve=null,Me=!1,qn=null,Xt=!1,es=Error(o(519));function Yn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(Vt(t,e)),es}function _c(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[st]=e,t[bt]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<hr.length;n++)xe(hr[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),Fh(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Zh(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Pf(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Yn(e,!0)}function Hc(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ut=ut.return}}function Za(e){if(e!==ut)return!1;if(!Me)return Hc(e),Me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||wu(e.type,e.memoizedProps)),n=!n),n&&Ve&&Yn(e),Hc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ve=sm(e)}else t===27?(t=Ve,na(e.type)?(e=Su,Su=null,Ve=e):Ve=t):Ve=ut?Kt(e.stateNode.nextSibling):null;return!0}function pa(){Ve=ut=null,Me=!1}function ts(){var e=qn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),qn=null),e}function Yi(e){qn===null?qn=[e]:qn.push(e)}var ns=E(null),wa=null,Sn=null;function Wn(e,t,n){T(ns,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=ns.current,U(ns)}function as(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function is(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var f=s.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=s;for(var x=0;x<t.length;x++)if(b.context===t[x]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),as(u.return,n,e),i||(f=null);break e}u=b.next}}else if(s.tag===18){if(f=s.return,f===null)throw Error(o(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),as(f,n,e),f=null}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===e){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}}function Ja(e,t,n,i){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var f=s.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var b=s.type;Dt(s.pendingProps.value,f.value)||(e!==null?e.push(b):e=[b])}}else if(s===Ee.current){if(f=s.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(gr):e=[gr])}s=s.return}e!==null&&is(t,e,n,i),t.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){wa=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Lc(wa,e)}function rl(e,t){return wa===null&&ba(e),Lc(e,t)}function Lc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(o(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Np=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},_p=a.unstable_scheduleCallback,Hp=a.unstable_NormalPriority,Pe={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rs(){return{controller:new Np,data:new Map,refCount:0}}function Wi(e){e.refCount--,e.refCount===0&&_p(Hp,function(){e.controller.abort()})}var Vi=null,ls=0,$a=0,Pa=null;function Lp(e,t){if(Vi===null){var n=Vi=[];ls=0,$a=uu(),Pa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ls++,t.then(jc,jc),t}function jc(){if(--ls===0&&Vi!==null){Pa!==null&&(Pa.status="fulfilled");var e=Vi;Vi=null,$a=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jp(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Ic=R.S;R.S=function(e,t){Sf=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lp(e,t),Ic!==null&&Ic(e,t)};var va=E(null);function os(){var e=va.current;return e!==null?e:qe.pooledCache}function ll(e,t){t===null?T(va,va.current):T(va,t.pool)}function Uc(){var e=os();return e===null?null:{parent:Pe._currentValue,pool:e}}var ei=Error(o(460)),ss=Error(o(474)),ol=Error(o(542)),sl={then:function(){}};function qc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vc(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vc(e),e}throw ka=t,ei}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ka=n,ei):n}}var ka=null;function Wc(){if(ka===null)throw Error(o(459));var e=ka;return ka=null,e}function Vc(e){if(e===ei||e===ol)throw Error(o(483))}var ti=null,Gi=0;function ul(e){var t=Gi;return Gi+=1,ti===null&&(ti=[]),Yc(ti,e,t)}function Qi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hl(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gc(e){function t(C,A){if(e){var M=C.deletions;M===null?(C.deletions=[A],C.flags|=16):M.push(A)}}function n(C,A){if(!e)return null;for(;A!==null;)t(C,A),A=A.sibling;return null}function i(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function s(C,A){return C=Tn(C,A),C.index=0,C.sibling=null,C}function u(C,A,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<A?(C.flags|=67108866,A):M):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function b(C,A,M,Y){return A===null||A.tag!==6?(A=Zo(M,C.mode,Y),A.return=C,A):(A=s(A,M),A.return=C,A)}function x(C,A,M,Y){var oe=M.type;return oe===H?L(C,A,M.props.children,Y,M.key):A!==null&&(A.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ce&&Ta(oe)===A.type)?(A=s(A,M.props),Qi(A,M),A.return=C,A):(A=nl(M.type,M.key,M.props,null,C.mode,Y),Qi(A,M),A.return=C,A)}function z(C,A,M,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Jo(M,C.mode,Y),A.return=C,A):(A=s(A,M.children||[]),A.return=C,A)}function L(C,A,M,Y,oe){return A===null||A.tag!==7?(A=ya(M,C.mode,Y,oe),A.return=C,A):(A=s(A,M),A.return=C,A)}function W(C,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Zo(""+A,C.mode,M),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case v:return M=nl(A.type,A.key,A.props,null,C.mode,M),Qi(M,A),M.return=C,M;case _:return A=Jo(A,C.mode,M),A.return=C,A;case ce:return A=Ta(A),W(C,A,M)}if(Q(A)||P(A))return A=ya(A,C.mode,M,null),A.return=C,A;if(typeof A.then=="function")return W(C,ul(A),M);if(A.$$typeof===V)return W(C,rl(C,A),M);hl(C,A)}return null}function D(C,A,M,Y){var oe=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return oe!==null?null:b(C,A,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case v:return M.key===oe?x(C,A,M,Y):null;case _:return M.key===oe?z(C,A,M,Y):null;case ce:return M=Ta(M),D(C,A,M,Y)}if(Q(M)||P(M))return oe!==null?null:L(C,A,M,Y,null);if(typeof M.then=="function")return D(C,A,ul(M),Y);if(M.$$typeof===V)return D(C,A,rl(C,M),Y);hl(C,M)}return null}function N(C,A,M,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return C=C.get(M)||null,b(A,C,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return C=C.get(Y.key===null?M:Y.key)||null,x(A,C,Y,oe);case _:return C=C.get(Y.key===null?M:Y.key)||null,z(A,C,Y,oe);case ce:return Y=Ta(Y),N(C,A,M,Y,oe)}if(Q(Y)||P(Y))return C=C.get(M)||null,L(A,C,Y,oe,null);if(typeof Y.then=="function")return N(C,A,M,ul(Y),oe);if(Y.$$typeof===V)return N(C,A,M,rl(A,Y),oe);hl(A,Y)}return null}function te(C,A,M,Y){for(var oe=null,ze=null,ae=A,pe=A=0,Ce=null;ae!==null&&pe<M.length;pe++){ae.index>pe?(Ce=ae,ae=null):Ce=ae.sibling;var De=D(C,ae,M[pe],Y);if(De===null){ae===null&&(ae=Ce);break}e&&ae&&De.alternate===null&&t(C,ae),A=u(De,A,pe),ze===null?oe=De:ze.sibling=De,ze=De,ae=Ce}if(pe===M.length)return n(C,ae),Me&&kn(C,pe),oe;if(ae===null){for(;pe<M.length;pe++)ae=W(C,M[pe],Y),ae!==null&&(A=u(ae,A,pe),ze===null?oe=ae:ze.sibling=ae,ze=ae);return Me&&kn(C,pe),oe}for(ae=i(ae);pe<M.length;pe++)Ce=N(ae,C,pe,M[pe],Y),Ce!==null&&(e&&Ce.alternate!==null&&ae.delete(Ce.key===null?pe:Ce.key),A=u(Ce,A,pe),ze===null?oe=Ce:ze.sibling=Ce,ze=Ce);return e&&ae.forEach(function(oa){return t(C,oa)}),Me&&kn(C,pe),oe}function ue(C,A,M,Y){if(M==null)throw Error(o(151));for(var oe=null,ze=null,ae=A,pe=A=0,Ce=null,De=M.next();ae!==null&&!De.done;pe++,De=M.next()){ae.index>pe?(Ce=ae,ae=null):Ce=ae.sibling;var oa=D(C,ae,De.value,Y);if(oa===null){ae===null&&(ae=Ce);break}e&&ae&&oa.alternate===null&&t(C,ae),A=u(oa,A,pe),ze===null?oe=oa:ze.sibling=oa,ze=oa,ae=Ce}if(De.done)return n(C,ae),Me&&kn(C,pe),oe;if(ae===null){for(;!De.done;pe++,De=M.next())De=W(C,De.value,Y),De!==null&&(A=u(De,A,pe),ze===null?oe=De:ze.sibling=De,ze=De);return Me&&kn(C,pe),oe}for(ae=i(ae);!De.done;pe++,De=M.next())De=N(ae,C,pe,De.value,Y),De!==null&&(e&&De.alternate!==null&&ae.delete(De.key===null?pe:De.key),A=u(De,A,pe),ze===null?oe=De:ze.sibling=De,ze=De);return e&&ae.forEach(function(Kw){return t(C,Kw)}),Me&&kn(C,pe),oe}function Ie(C,A,M,Y){if(typeof M=="object"&&M!==null&&M.type===H&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case v:e:{for(var oe=M.key;A!==null;){if(A.key===oe){if(oe=M.type,oe===H){if(A.tag===7){n(C,A.sibling),Y=s(A,M.props.children),Y.return=C,C=Y;break e}}else if(A.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ce&&Ta(oe)===A.type){n(C,A.sibling),Y=s(A,M.props),Qi(Y,M),Y.return=C,C=Y;break e}n(C,A);break}else t(C,A);A=A.sibling}M.type===H?(Y=ya(M.props.children,C.mode,Y,M.key),Y.return=C,C=Y):(Y=nl(M.type,M.key,M.props,null,C.mode,Y),Qi(Y,M),Y.return=C,C=Y)}return f(C);case _:e:{for(oe=M.key;A!==null;){if(A.key===oe)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(C,A.sibling),Y=s(A,M.children||[]),Y.return=C,C=Y;break e}else{n(C,A);break}else t(C,A);A=A.sibling}Y=Jo(M,C.mode,Y),Y.return=C,C=Y}return f(C);case ce:return M=Ta(M),Ie(C,A,M,Y)}if(Q(M))return te(C,A,M,Y);if(P(M)){if(oe=P(M),typeof oe!="function")throw Error(o(150));return M=oe.call(M),ue(C,A,M,Y)}if(typeof M.then=="function")return Ie(C,A,ul(M),Y);if(M.$$typeof===V)return Ie(C,A,rl(C,M),Y);hl(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(C,A.sibling),Y=s(A,M),Y.return=C,C=Y):(n(C,A),Y=Zo(M,C.mode,Y),Y.return=C,C=Y),f(C)):n(C,A)}return function(C,A,M,Y){try{Gi=0;var oe=Ie(C,A,M,Y);return ti=null,oe}catch(ae){if(ae===ei||ae===ol)throw ae;var ze=Rt(29,ae,null,C.mode);return ze.lanes=Y,ze.return=C,ze}}}var Sa=Gc(!0),Qc=Gc(!1),Vn=!1;function us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=tl(e),zc(e,null,n),t}return el(e,i,t,n),tl(e)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lh(e,n)}}function cs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ds=!1;function Fi(){if(ds){var e=Pa;if(e!==null)throw e}}function Ki(e,t,n,i){ds=!1;var s=e.updateQueue;Vn=!1;var u=s.firstBaseUpdate,f=s.lastBaseUpdate,b=s.shared.pending;if(b!==null){s.shared.pending=null;var x=b,z=x.next;x.next=null,f===null?u=z:f.next=z,f=x;var L=e.alternate;L!==null&&(L=L.updateQueue,b=L.lastBaseUpdate,b!==f&&(b===null?L.firstBaseUpdate=z:b.next=z,L.lastBaseUpdate=x))}if(u!==null){var W=s.baseState;f=0,L=z=x=null,b=u;do{var D=b.lane&-536870913,N=D!==b.lane;if(N?(Ae&D)===D:(i&D)===D){D!==0&&D===$a&&(ds=!0),L!==null&&(L=L.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,ue=b;D=t;var Ie=n;switch(ue.tag){case 1:if(te=ue.payload,typeof te=="function"){W=te.call(Ie,W,D);break e}W=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ue.payload,D=typeof te=="function"?te.call(Ie,W,D):te,D==null)break e;W=w({},W,D);break e;case 2:Vn=!0}}D=b.callback,D!==null&&(e.flags|=64,N&&(e.flags|=8192),N=s.callbacks,N===null?s.callbacks=[D]:N.push(D))}else N={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},L===null?(z=L=N,x=W):L=L.next=N,f|=D;if(b=b.next,b===null){if(b=s.shared.pending,b===null)break;N=b,b=N.next,N.next=null,s.lastBaseUpdate=N,s.shared.pending=null}}while(!0);L===null&&(x=W),s.baseState=x,s.firstBaseUpdate=z,s.lastBaseUpdate=L,u===null&&(s.shared.lanes=0),Jn|=f,e.lanes=f,e.memoizedState=W}}function Xc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Fc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xc(n[e],t)}var ni=E(null),cl=E(0);function Kc(e,t){e=Bn,T(cl,e),T(ni,t),Bn=e|t.baseLanes}function fs(){T(cl,Bn),T(ni,ni.current)}function ms(){Bn=cl.current,U(ni),U(cl)}var Ot=E(null),Ft=null;function Xn(e){var t=e.alternate;T(Je,Je.current&1),T(Ot,e),Ft===null&&(t===null||ni.current!==null||t.memoizedState!==null)&&(Ft=e)}function gs(e){T(Je,Je.current),T(Ot,e),Ft===null&&(Ft=e)}function Zc(e){e.tag===22?(T(Je,Je.current),T(Ot,e),Ft===null&&(Ft=e)):Fn()}function Fn(){T(Je,Je.current),T(Ot,Ot.current)}function Bt(e){U(Ot),Ft===e&&(Ft=null),U(Je)}var Je=E(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Tu(n)||ku(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,ye=null,Le=null,et=null,fl=!1,ai=!1,xa=!1,ml=0,Zi=0,ii=null,Ip=0;function Ke(){throw Error(o(321))}function ys(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function ps(e,t,n,i,s,u){return En=u,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Bd:Os,xa=!1,u=n(i,s),xa=!1,ai&&(u=$c(t,n,i,s)),Jc(e),u}function Jc(e){R.H=Pi;var t=Le!==null&&Le.next!==null;if(En=0,et=Le=ye=null,fl=!1,Zi=0,ii=null,t)throw Error(o(300));e===null||tt||(e=e.dependencies,e!==null&&il(e)&&(tt=!0))}function $c(e,t,n,i){ye=e;var s=0;do{if(ai&&(ii=null),Zi=0,ai=!1,25<=s)throw Error(o(301));if(s+=1,et=Le=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Nd,u=t(n,i)}while(ai);return u}function Up(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ye.flags|=1024),t}function ws(){var e=ml!==0;return ml=0,e}function bs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vs(e){if(fl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fl=!1}En=0,et=Le=ye=null,ai=!1,Zi=ml=0,ii=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?ye.memoizedState=et=e:et=et.next=e,et}function $e(){if(Le===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=et===null?ye.memoizedState:et.next;if(t!==null)et=t,Le=e;else{if(e===null)throw ye.alternate===null?Error(o(467)):Error(o(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},et===null?ye.memoizedState=et=e:et=et.next=e}return et}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=Zi;return Zi+=1,ii===null&&(ii=[]),e=Yc(ii,e,t),t=ye,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Bd:Os),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===V)return ht(e)}throw Error(o(438,String(e)))}function Ts(e){var t=null,n=ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=gl(),ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=be;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=$e();return ks(t,Le,e)}function ks(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var s=e.baseQueue,u=i.pending;if(u!==null){if(s!==null){var f=s.next;s.next=u.next,u.next=f}t.baseQueue=s=u,i.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var b=f=null,x=null,z=t,L=!1;do{var W=z.lane&-536870913;if(W!==z.lane?(Ae&W)===W:(En&W)===W){var D=z.revertLane;if(D===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),W===$a&&(L=!0);else if((En&D)===D){z=z.next,D===$a&&(L=!0);continue}else W={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=W,f=u):x=x.next=W,ye.lanes|=D,Jn|=D;W=z.action,xa&&n(u,W),u=z.hasEagerState?z.eagerState:n(u,W)}else D={lane:W,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=D,f=u):x=x.next=D,ye.lanes|=W,Jn|=W;z=z.next}while(z!==null&&z!==t);if(x===null?f=u:x.next=b,!Dt(u,e.memoizedState)&&(tt=!0,L&&(n=Pa,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=x,i.lastRenderedState=u}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ss(e){var t=$e(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var f=s=s.next;do u=e(u,f.action),f=f.next;while(f!==s);Dt(u,t.memoizedState)||(tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Pc(e,t,n){var i=ye,s=$e(),u=Me;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var f=!Dt((Le||s).memoizedState,n);if(f&&(s.memoizedState=n,tt=!0),s=s.queue,As(nd.bind(null,i,s,e),[e]),s.getSnapshot!==t||f||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,ri(9,{destroy:void 0},td.bind(null,i,s,n,t),null),qe===null)throw Error(o(349));u||(En&127)!==0||ed(i,t,n)}return n}function ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t=gl(),ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function td(e,t,n,i){t.value=n,t.getSnapshot=i,ad(t)&&id(e)}function nd(e,t,n){return n(function(){ad(t)&&id(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function id(e){var t=ga(e,2);t!==null&&Et(t,e,2)}function xs(e){var t=pt();if(typeof e=="function"){var n=e;if(e=n(),xa){wt(!0);try{n()}finally{wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function rd(e,t,n,i){return e.baseState=n,ks(e,Le,typeof i=="function"?i:An)}function qp(e,t,n,i,s){if(vl(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,ld(t,u)):(u.next=n.next,t.pending=n.next=u)}}function ld(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var b=n(s,i),x=R.S;x!==null&&x(f,b),od(e,t,b)}catch(z){Es(e,t,z)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=n(s,i),od(e,t,u)}catch(z){Es(e,t,z)}}function od(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){sd(e,t,i)},function(i){return Es(e,t,i)}):sd(e,t,n)}function sd(e,t,n){t.status="fulfilled",t.value=n,ud(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ld(e,n)))}function Es(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ud(t),t=t.next;while(t!==i)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hd(e,t){return t}function cd(e,t){if(Me){var n=qe.formState;if(n!==null){e:{var i=ye;if(Me){if(Ve){t:{for(var s=Ve,u=Xt;s.nodeType!==8;){if(!u){s=null;break t}if(s=Kt(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Ve=Kt(s.nextSibling),i=s.data==="F!";break e}}Yn(i)}i=!1}i&&(t=n[0])}}return n=pt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hd,lastRenderedState:t},n.queue=i,n=Dd.bind(null,ye,i),i.dispatch=n,i=xs(!1),u=Rs.bind(null,ye,!1,i.queue),i=pt(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=qp.bind(null,ye,s,u,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function dd(e){var t=$e();return fd(t,Le,e)}function fd(e,t,n){if(t=ks(e,t,hd)[0],e=pl(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ji(t)}catch(f){throw f===ei?ol:f}else i=t;t=$e();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(ye.flags|=2048,ri(9,{destroy:void 0},Yp.bind(null,s,n),null)),[i,u,e]}function Yp(e,t){e.action=t}function md(e){var t=$e(),n=Le;if(n!==null)return fd(t,n,e);$e(),t=t.memoizedState,n=$e();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ri(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ye.updateQueue,t===null&&(t=gl(),ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gd(){return $e().memoizedState}function wl(e,t,n,i){var s=pt();ye.flags|=e,s.memoizedState=ri(1|t,{destroy:void 0},n,i===void 0?null:i)}function bl(e,t,n,i){var s=$e();i=i===void 0?null:i;var u=s.memoizedState.inst;Le!==null&&i!==null&&ys(i,Le.memoizedState.deps)?s.memoizedState=ri(t,u,n,i):(ye.flags|=e,s.memoizedState=ri(1|t,u,n,i))}function yd(e,t){wl(8390656,8,e,t)}function As(e,t){bl(2048,8,e,t)}function Wp(e){ye.flags|=4;var t=ye.updateQueue;if(t===null)t=gl(),ye.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function pd(e){var t=$e().memoizedState;return Wp({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function wd(e,t){return bl(4,2,e,t)}function bd(e,t){return bl(4,4,e,t)}function vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){n=n!=null?n.concat([e]):null,bl(4,4,vd.bind(null,t,e),n)}function Cs(){}function kd(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&ys(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&ys(t,i[1]))return i[0];if(i=e(),xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i}function Ms(e,t,n){return n===void 0||(En&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ef(),ye.lanes|=e,Jn|=e,n)}function xd(e,t,n,i){return Dt(n,t)?n:ni.current!==null?(e=Ms(e,n,i),Dt(e,t)||(tt=!0),e):(En&42)===0||(En&1073741824)!==0&&(Ae&261930)===0?(tt=!0,e.memoizedState=n):(e=Ef(),ye.lanes|=e,Jn|=e,t)}function Ed(e,t,n,i,s){var u=G.p;G.p=u!==0&&8>u?u:8;var f=R.T,b={};R.T=b,Rs(e,!1,t,n);try{var x=s(),z=R.S;if(z!==null&&z(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var L=jp(x,i);$i(e,t,L,Ht(e))}else $i(e,t,i,Ht(e))}catch(W){$i(e,t,{then:function(){},status:"rejected",reason:W},Ht())}finally{G.p=u,f!==null&&b.types!==null&&(f.types=b.types),R.T=f}}function Vp(){}function zs(e,t,n,i){if(e.tag!==5)throw Error(o(476));var s=Ad(e).queue;Ed(e,s,t,ie,n===null?Vp:function(){return Cd(e),n(i)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=Ad(e);t.next===null&&(t=e.alternate.memoizedState),$i(e,t.next.queue,{},Ht())}function Ds(){return ht(gr)}function Md(){return $e().memoizedState}function zd(){return $e().memoizedState}function Gp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Gn(n);var i=Qn(t,e,n);i!==null&&(Et(i,t,n),Xi(i,t,n)),t={cache:rs()},e.payload=t;return}t=t.return}}function Qp(e,t,n){var i=Ht();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vl(e)?Rd(t,n):(n=Fo(e,t,n,i),n!==null&&(Et(n,e,i),Od(n,t,i)))}function Dd(e,t,n){var i=Ht();$i(e,t,n,i)}function $i(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vl(e))Rd(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,b=u(f,n);if(s.hasEagerState=!0,s.eagerState=b,Dt(b,f))return el(e,t,s,0),qe===null&&Pr(),!1}catch{}if(n=Fo(e,t,s,i),n!==null)return Et(n,e,i),Od(n,t,i),!0}return!1}function Rs(e,t,n,i){if(i={lane:2,revertLane:uu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(t)throw Error(o(479))}else t=Fo(e,n,i,2),t!==null&&Et(t,e,2)}function vl(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Rd(e,t){ai=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lh(e,n)}}var Pi={readContext:ht,use:yl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};Pi.useEffectEvent=Ke;var Bd={readContext:ht,use:yl,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:yd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,wl(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){wl(4,2,e,t)},useMemo:function(e,t){var n=pt();t=t===void 0?null:t;var i=e();if(xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=pt();if(n!==void 0){var s=n(t);if(xa){wt(!0);try{n(t)}finally{wt(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Qp.bind(null,ye,e),[i.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=Dd.bind(null,ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cs,useDeferredValue:function(e,t){var n=pt();return Ms(n,e,t)},useTransition:function(){var e=xs(!1);return e=Ed.bind(null,ye,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ye,s=pt();if(Me){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),qe===null)throw Error(o(349));(Ae&127)!==0||ed(i,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,yd(nd.bind(null,i,u,e),[e]),i.flags|=2048,ri(9,{destroy:void 0},td.bind(null,i,u,n,t),null),n},useId:function(){var e=pt(),t=qe.identifierPrefix;if(Me){var n=on,i=ln;n=(i&~(1<<32-Ue(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ml++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ip++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:cd,useActionState:cd,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ts,useCacheRefresh:function(){return pt().memoizedState=Gp.bind(null,ye)},useEffectEvent:function(e){var t=pt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Os={readContext:ht,use:yl,useCallback:kd,useContext:ht,useEffect:As,useImperativeHandle:Td,useInsertionEffect:wd,useLayoutEffect:bd,useMemo:Sd,useReducer:pl,useRef:gd,useState:function(){return pl(An)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=$e();return xd(n,Le.memoizedState,e,t)},useTransition:function(){var e=pl(An)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:Pc,useId:Md,useHostTransitionStatus:Ds,useFormState:dd,useActionState:dd,useOptimistic:function(e,t){var n=$e();return rd(n,Le,e,t)},useMemoCache:Ts,useCacheRefresh:zd};Os.useEffectEvent=pd;var Nd={readContext:ht,use:yl,useCallback:kd,useContext:ht,useEffect:As,useImperativeHandle:Td,useInsertionEffect:wd,useLayoutEffect:bd,useMemo:Sd,useReducer:Ss,useRef:gd,useState:function(){return Ss(An)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=$e();return Le===null?Ms(n,e,t):xd(n,Le.memoizedState,e,t)},useTransition:function(){var e=Ss(An)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:Pc,useId:Md,useHostTransitionStatus:Ds,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=$e();return Le!==null?rd(n,Le,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ts,useCacheRefresh:zd};Nd.useEffectEvent=pd;function Bs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ht(),s=Gn(i);s.payload=t,n!=null&&(s.callback=n),t=Qn(e,s,i),t!==null&&(Et(t,e,i),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ht(),s=Gn(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Qn(e,s,i),t!==null&&(Et(t,e,i),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),i=Gn(n);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,n),t!==null&&(Et(t,e,n),Xi(t,e,n))}};function _d(e,t,n,i,s,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,i)||!Ii(s,u):!0}function Hd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Ld(e){$r(e)}function jd(e){console.error(e)}function Id(e){$r(e)}function Tl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ud(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function _s(e,t,n){return n=Gn(n),n.tag=3,n.payload={element:null},n.callback=function(){Tl(e,t)},n}function qd(e){return e=Gn(e),e.tag=3,e}function Yd(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=i.value;e.payload=function(){return s(u)},e.callback=function(){Ud(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Ud(t,n,i),typeof s!="function"&&($n===null?$n=new Set([this]):$n.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Xp(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,s,!0),n=Ot.current,n!==null){switch(n.tag){case 31:case 13:return Ft===null?Bl():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),lu(e,i,s)),!1;case 22:return n.flags|=65536,i===sl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),lu(e,i,s)),!1}throw Error(o(435,n.tag))}return lu(e,i,s),Bl(),!1}if(Me)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==es&&(e=Error(o(422),{cause:i}),Yi(Vt(e,n)))):(i!==es&&(t=Error(o(423),{cause:i}),Yi(Vt(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Vt(i,n),s=_s(e.stateNode,i,s),cs(e,s),Ze!==4&&(Ze=2)),!1;var u=Error(o(520),{cause:i});if(u=Vt(u,n),or===null?or=[u]:or.push(u),Ze!==4&&(Ze=2),t===null)return!0;i=Vt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=_s(n.stateNode,i,e),cs(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($n===null||!$n.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=qd(s),Yd(s,e,n,i),cs(n,s),!1}n=n.return}while(n!==null);return!1}var Hs=Error(o(461)),tt=!1;function ct(e,t,n,i){t.child=e===null?Qc(t,null,n,i):Sa(t,e.child,n,i)}function Wd(e,t,n,i,s){n=n.render;var u=t.ref;if("ref"in i){var f={};for(var b in i)b!=="ref"&&(f[b]=i[b])}else f=i;return ba(t),i=ps(e,t,n,f,u,s),b=ws(),e!==null&&!tt?(bs(e,t,s),Cn(e,t,s)):(Me&&b&&$o(t),t.flags|=1,ct(e,t,i,s),t.child)}function Vd(e,t,n,i,s){if(e===null){var u=n.type;return typeof u=="function"&&!Ko(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Gd(e,t,u,i,s)):(e=nl(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Vs(e,s)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(f,i)&&e.ref===t.ref)return Cn(e,t,s)}return t.flags|=1,e=Tn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,i,s){if(e!==null){var u=e.memoizedProps;if(Ii(u,i)&&e.ref===t.ref)if(tt=!1,t.pendingProps=i=u,Vs(e,s))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Cn(e,t,s)}return Ls(e,t,n,i,s)}function Qd(e,t,n,i){var s=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~u}else i=0,t.child=null;return Xd(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(t,u!==null?u.cachePool:null),u!==null?Kc(t,u):fs(),Zc(t);else return i=t.lanes=536870912,Xd(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(ll(t,u.cachePool),Kc(t,u),Fn(),t.memoizedState=null):(e!==null&&ll(t,null),fs(),Fn());return ct(e,t,s,n),t.child}function er(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xd(e,t,n,i,s){var u=os();return u=u===null?null:{parent:Pe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&ll(t,null),fs(),Zc(t),e!==null&&Ja(e,t,i,!0),t.childLanes=s,null}function kl(e,t){return t=xl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fd(e,t,n){return Sa(t,e.child,null,n),e=kl(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Fp(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Me){if(i.mode==="hidden")return e=kl(t,i),t.lanes=536870912,er(null,e);if(gs(t),(e=Ve)?(e=om(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:ln,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Rc(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Yn(t);return t.lanes=536870912,null}return kl(t,i)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(gs(t),s)if(t.flags&256)t.flags&=-257,t=Fd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(tt||Ja(e,t,n,!1),s=(n&e.childLanes)!==0,tt||s){if(i=qe,i!==null&&(f=jh(i,n),f!==0&&f!==u.retryLane))throw u.retryLane=f,ga(e,f),Et(i,e,f),Hs;Bl(),t=Fd(e,t,n)}else e=u.treeContext,Ve=Kt(f.nextSibling),ut=t,Me=!0,qn=null,Xt=!1,e!==null&&Nc(t,e),t=kl(t,i),t.flags|=4096;return t}return e=Tn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ls(e,t,n,i,s){return ba(t),n=ps(e,t,n,i,void 0,s),i=ws(),e!==null&&!tt?(bs(e,t,s),Cn(e,t,s)):(Me&&i&&$o(t),t.flags|=1,ct(e,t,n,s),t.child)}function Kd(e,t,n,i,s,u){return ba(t),t.updateQueue=null,n=$c(t,i,n,s),Jc(e),i=ws(),e!==null&&!tt?(bs(e,t,u),Cn(e,t,u)):(Me&&i&&$o(t),t.flags|=1,ct(e,t,n,u),t.child)}function Zd(e,t,n,i,s){if(ba(t),t.stateNode===null){var u=Xa,f=n.contextType;typeof f=="object"&&f!==null&&(u=ht(f)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ns,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},us(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?ht(f):Xa,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Bs(t,n,f,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ns.enqueueReplaceState(u,u.state,null),Ki(t,i,u,s),Fi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,x=Ea(n,b);u.props=x;var z=u.context,L=n.contextType;f=Xa,typeof L=="object"&&L!==null&&(f=ht(L));var W=n.getDerivedStateFromProps;L=typeof W=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,L||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||z!==f)&&Hd(t,u,i,f),Vn=!1;var D=t.memoizedState;u.state=D,Ki(t,i,u,s),Fi(),z=t.memoizedState,b||D!==z||Vn?(typeof W=="function"&&(Bs(t,n,W,i),z=t.memoizedState),(x=Vn||_d(t,n,x,i,D,z,f))?(L||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),u.props=i,u.state=z,u.context=f,i=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,hs(e,t),f=t.memoizedProps,L=Ea(n,f),u.props=L,W=t.pendingProps,D=u.context,z=n.contextType,x=Xa,typeof z=="object"&&z!==null&&(x=ht(z)),b=n.getDerivedStateFromProps,(z=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==W||D!==x)&&Hd(t,u,i,x),Vn=!1,D=t.memoizedState,u.state=D,Ki(t,i,u,s),Fi();var N=t.memoizedState;f!==W||D!==N||Vn||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof b=="function"&&(Bs(t,n,b,i),N=t.memoizedState),(L=Vn||_d(t,n,L,i,D,N,x)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,N,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,N,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),u.props=i,u.state=N,u.context=x,i=L):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Sl(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=Sa(t,e.child,null,s),t.child=Sa(t,null,n,s)):ct(e,t,n,s),t.memoizedState=u.state,e=t.child):e=Cn(e,t,s),e}function Jd(e,t,n,i){return pa(),t.flags|=256,ct(e,t,n,i),t.child}var js={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Is(e){return{baseLanes:e,cachePool:Uc()}}function Us(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_t),e}function $d(e,t,n){var i=t.pendingProps,s=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),f&&(s=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Me){if(s?Xn(t):Fn(),(e=Ve)?(e=om(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Un!==null?{id:ln,overflow:on}:null,retryLane:536870912,hydrationErrors:null},n=Rc(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Yn(t);return ku(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,s?(Fn(),s=t.mode,b=xl({mode:"hidden",children:b},s),i=ya(i,s,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Is(n),i.childLanes=Us(e,f,n),t.memoizedState=js,er(null,i)):(Xn(t),qs(t,b))}var x=e.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(u)t.flags&256?(Xn(t),t.flags&=-257,t=Ys(e,t,n)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),b=i.fallback,s=t.mode,i=xl({mode:"visible",children:i.children},s),b=ya(b,s,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Sa(t,e.child,null,n),i=t.child,i.memoizedState=Is(n),i.childLanes=Us(e,f,n),t.memoizedState=js,t=er(null,i));else if(Xn(t),ku(b)){if(f=b.nextSibling&&b.nextSibling.dataset,f)var z=f.dgst;f=z,i=Error(o(419)),i.stack="",i.digest=f,Yi({value:i,source:null,stack:null}),t=Ys(e,t,n)}else if(tt||Ja(e,t,n,!1),f=(n&e.childLanes)!==0,tt||f){if(f=qe,f!==null&&(i=jh(f,n),i!==0&&i!==x.retryLane))throw x.retryLane=i,ga(e,i),Et(f,e,i),Hs;Tu(b)||Bl(),t=Ys(e,t,n)}else Tu(b)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ve=Kt(b.nextSibling),ut=t,Me=!0,qn=null,Xt=!1,e!==null&&Nc(t,e),t=qs(t,i.children),t.flags|=4096);return t}return s?(Fn(),b=i.fallback,s=t.mode,x=e.child,z=x.sibling,i=Tn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,z!==null?b=Tn(z,b):(b=ya(b,s,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,er(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Is(n):(s=b.cachePool,s!==null?(x=Pe._currentValue,s=s.parent!==x?{parent:x,pool:x}:s):s=Uc(),b={baseLanes:b.baseLanes|n,cachePool:s}),i.memoizedState=b,i.childLanes=Us(e,f,n),t.memoizedState=js,er(e.child,i)):(Xn(t),n=e.child,e=n.sibling,n=Tn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function qs(e,t){return t=xl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xl(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Ys(e,t,n){return Sa(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),as(e.return,t,n)}function Ws(e,t,n,i,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=n,f.tailMode=s,f.treeForkCount=u)}function ef(e,t,n){var i=t.pendingProps,s=i.revealOrder,u=i.tail;i=i.children;var f=Je.current,b=(f&2)!==0;if(b?(f=f&1|2,t.flags|=128):f&=1,T(Je,f),ct(e,t,i,n),i=Me?qi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ws(t,!1,s,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&dl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ws(t,!0,n,null,u,i);break;case"together":Ws(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function Kp(e,t,n){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),Wn(t,Pe,e.memoizedState.cache),pa();break;case 27:case 5:Ut(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:Wn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gs(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Xn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?$d(e,t,n):(Xn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Xn(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return ef(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),T(Je,Je.current),i)break;return null;case 22:return t.lanes=0,Qd(e,t,n,t.pendingProps);case 24:Wn(t,Pe,e.memoizedState.cache)}return Cn(e,t,n)}function tf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!Vs(e,n)&&(t.flags&128)===0)return tt=!1,Kp(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Me&&(t.flags&1048576)!==0&&Bc(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Ko(e)?(i=Ea(e,i),t.tag=1,t=Zd(null,t,e,i,n)):(t.tag=0,t=Ls(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===re){t.tag=11,t=Wd(null,t,e,i,n);break e}else if(s===J){t.tag=14,t=Vd(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(o(306,t,""))}}return t;case 0:return Ls(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ea(i,t.pendingProps),Zd(e,t,i,s,n);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var u=t.memoizedState;s=u.element,hs(e,t),Ki(t,i,null,n);var f=t.memoizedState;if(i=f.cache,Wn(t,Pe,i),i!==u.cache&&is(t,[Pe],n,!0),Fi(),i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Jd(e,t,i,n);break e}else if(i!==s){s=Vt(Error(o(424)),t),Yi(s),t=Jd(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Kt(e.firstChild),ut=t,Me=!0,qn=null,Xt=!0,n=Qc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pa(),i===s){t=Cn(e,t,n);break e}ct(e,t,i,n)}t=t.child}return t;case 26:return Sl(e,t),e===null?(n=fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Me||(n=t.type,e=t.pendingProps,i=Ul(le.current).createElement(n),i[st]=t,i[bt]=e,dt(i,n,e),lt(i),t.stateNode=i):t.memoizedState=fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ut(t),e===null&&Me&&(i=t.stateNode=hm(t.type,t.pendingProps,le.current),ut=t,Xt=!0,s=Ve,na(t.type)?(Su=s,Ve=Kt(i.firstChild)):Ve=s),ct(e,t,t.pendingProps.children,n),Sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Me&&((s=i=Ve)&&(i=Ew(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,ut=t,Ve=Kt(i.firstChild),Xt=!1,s=!0):s=!1),s||Yn(t)),Ut(t),s=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,i=u.children,wu(s,u)?i=null:f!==null&&wu(s,f)&&(t.flags|=32),t.memoizedState!==null&&(s=ps(e,t,Up,null,null,n),gr._currentValue=s),Sl(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&Me&&((e=n=Ve)&&(n=Aw(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,ut=t,Ve=null,e=!0):e=!1),e||Yn(t)),null;case 13:return $d(e,t,n);case 4:return Qe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Sa(t,null,i,n):ct(e,t,i,n),t.child;case 11:return Wd(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Wn(t,t.type,i.value),ct(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,ba(t),s=ht(s),i=i(s),t.flags|=1,ct(e,t,i,n),t.child;case 14:return Vd(e,t,t.type,t.pendingProps,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 19:return ef(e,t,n);case 31:return Fp(e,t,n);case 22:return Qd(e,t,n,t.pendingProps);case 24:return ba(t),i=ht(Pe),e===null?(s=os(),s===null&&(s=qe,u=rs(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:i,cache:s},us(t),Wn(t,Pe,s)):((e.lanes&n)!==0&&(hs(e,t),Ki(t,null,null,n),Fi()),s=e.memoizedState,u=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Wn(t,Pe,i)):(i=u.cache,Wn(t,Pe,i),i!==s.cache&&is(t,[Pe],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Mn(e){e.flags|=4}function Gs(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(zf())e.flags|=8192;else throw ka=sl,ss}else e.flags&=-16777217}function nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wm(t))if(zf())e.flags|=8192;else throw ka=sl,ss}function El(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_h():536870912,e.lanes|=t,ui|=t)}function tr(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zp(e,t,n){var i=t.pendingProps;switch(Po(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xn(Pe),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Za(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ts())),Ge(t),null;case 26:var s=t.type,u=t.memoizedState;return e===null?(Mn(t),u!==null?(Ge(t),nf(t,u)):(Ge(t),Gs(t,s,null,i,n))):u?u!==e.memoizedState?(Mn(t),Ge(t),nf(t,u)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Mn(t),Ge(t),Gs(t,s,e,i,n)),null;case 27:if(gn(t),n=le.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ge(t),null}e=$.current,Za(t)?_c(t):(e=hm(s,i,n),t.stateNode=e,Mn(t))}return Ge(t),null;case 5:if(gn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ge(t),null}if(u=$.current,Za(t))_c(t);else{var f=Ul(le.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?f.createElement(s,{is:i.is}):f.createElement(s)}}u[st]=t,u[bt]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(dt(u,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Mn(t)}}return Ge(t),Gs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=le.current,Za(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ut,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Pf(e.nodeValue,n)),e||Yn(t,!0)}else e=Ul(e).createTextNode(i),e[st]=t,t.stateNode=e}return Ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Za(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[st]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else n=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Za(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[st]=t}else pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),s=!1}else s=ts(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),El(t,t.updateQueue),Ge(t),null);case 4:return He(),e===null&&fu(t.stateNode.containerInfo),Ge(t),null;case 10:return xn(t.type),Ge(t),null;case 19:if(U(Je),i=t.memoizedState,i===null)return Ge(t),null;if(s=(t.flags&128)!==0,u=i.rendering,u===null)if(s)tr(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=dl(e),u!==null){for(t.flags|=128,tr(i,!1),e=u.updateQueue,t.updateQueue=e,El(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Dc(n,e),n=n.sibling;return T(Je,Je.current&1|2),Me&&kn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gt()>Dl&&(t.flags|=128,s=!0,tr(i,!1),t.lanes=4194304)}else{if(!s)if(e=dl(u),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,El(t,e),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Me)return Ge(t),null}else 2*gt()-i.renderingStartTime>Dl&&n!==536870912&&(t.flags|=128,s=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,n=Je.current,T(Je,s?n&1|2:n&1),Me&&kn(t,i.treeForkCount),e):(Ge(t),null);case 22:case 23:return Bt(t),ms(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),n=t.updateQueue,n!==null&&El(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&U(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn(Pe),Ge(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Jp(e,t){switch(Po(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(Pe),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(o(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Je),null;case 4:return He(),null;case 10:return xn(t.type),null;case 22:case 23:return Bt(t),ms(),e!==null&&U(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn(Pe),null;case 25:return null;default:return null}}function af(e,t){switch(Po(t),t.tag){case 3:xn(Pe),He();break;case 26:case 27:case 5:gn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:U(Je);break;case 10:xn(t.type);break;case 22:case 23:Bt(t),ms(),e!==null&&U(va);break;case 24:xn(Pe)}}function nr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var u=n.create,f=n.inst;i=u(),f.destroy=i}n=n.next}while(n!==s)}}catch(b){_e(t,t.return,b)}}function Kn(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var u=s.next;i=u;do{if((i.tag&e)===e){var f=i.inst,b=f.destroy;if(b!==void 0){f.destroy=void 0,s=t;var x=n,z=b;try{z()}catch(L){_e(s,x,L)}}}i=i.next}while(i!==u)}}catch(L){_e(t,t.return,L)}}function rf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fc(t,n)}catch(i){_e(e,e.return,i)}}}function lf(e,t,n){n.props=Ea(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function ar(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){_e(e,t,s)}}function sn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){_e(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){_e(e,t,s)}else n.current=null}function of(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){_e(e,e.return,s)}}function Qs(e,t,n){try{var i=e.stateNode;bw(i,e.type,n,t),i[bt]=t}catch(s){_e(e,e.return,s)}}function sf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Xs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Al(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function uf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);dt(t,i,n),t[st]=e,t[bt]=n}catch(u){_e(e,e.return,u)}}var zn=!1,nt=!1,Ks=!1,hf=typeof WeakSet=="function"?WeakSet:Set,ot=null;function $p(e,t){if(e=e.containerInfo,yu=Xl,e=Tc(e),Yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,b=-1,x=-1,z=0,L=0,W=e,D=null;t:for(;;){for(var N;W!==n||s!==0&&W.nodeType!==3||(b=f+s),W!==u||i!==0&&W.nodeType!==3||(x=f+i),W.nodeType===3&&(f+=W.nodeValue.length),(N=W.firstChild)!==null;)D=W,W=N;for(;;){if(W===e)break t;if(D===n&&++z===s&&(b=f),D===u&&++L===i&&(x=f),(N=W.nextSibling)!==null)break;W=D,D=W.parentNode}W=N}n=b===-1||x===-1?null:{start:b,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:e,selectionRange:n},Xl=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var te=Ea(n.type,s);e=i.getSnapshotBeforeUpdate(te,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ue){_e(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function cf(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),i&4&&nr(5,n);break;case 1:if(Rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){_e(n,n.return,f)}else{var s=Ea(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){_e(n,n.return,f)}}i&64&&rf(n),i&512&&ar(n,n.return);break;case 3:if(Rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fc(e,t)}catch(f){_e(n,n.return,f)}}break;case 27:t===null&&i&4&&uf(n);case 26:case 5:Rn(e,n),t===null&&i&4&&of(n),i&512&&ar(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),i&4&&mf(e,n);break;case 13:Rn(e,n),i&4&&gf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ow.bind(null,n),Cw(e,n))));break;case 22:if(i=n.memoizedState!==null||zn,!i){t=t!==null&&t.memoizedState!==null||nt,s=zn;var u=nt;zn=i,(nt=t)&&!u?On(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),zn=s,nt=u}break;case 30:break;default:Rn(e,n)}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Eo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Tt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(yt,n)}catch{}switch(n.tag){case 26:nt||sn(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||sn(n,t);var i=Xe,s=Tt;na(n.type)&&(Xe=n.stateNode,Tt=!1),Dn(e,t,n),dr(n.stateNode),Xe=i,Tt=s;break;case 5:nt||sn(n,t);case 6:if(i=Xe,s=Tt,Xe=null,Dn(e,t,n),Xe=i,Tt=s,Xe!==null)if(Tt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(n.stateNode)}catch(u){_e(n,t,u)}else try{Xe.removeChild(n.stateNode)}catch(u){_e(n,t,u)}break;case 18:Xe!==null&&(Tt?(e=Xe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),pi(e)):rm(Xe,n.stateNode));break;case 4:i=Xe,s=Tt,Xe=n.stateNode.containerInfo,Tt=!0,Dn(e,t,n),Xe=i,Tt=s;break;case 0:case 11:case 14:case 15:Kn(2,n,t),nt||Kn(4,n,t),Dn(e,t,n);break;case 1:nt||(sn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lf(n,t,i)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:nt=(i=nt)||n.memoizedState!==null,Dn(e,t,n),nt=i;break;default:Dn(e,t,n)}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pi(e)}catch(n){_e(t,t.return,n)}}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pi(e)}catch(n){_e(t,t.return,n)}}function Pp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(o(435,e.tag))}}function Cl(e,t){var n=Pp(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=sw.bind(null,e,i);i.then(s,s)}})}function kt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,f=t,b=f;e:for(;b!==null;){switch(b.tag){case 27:if(na(b.type)){Xe=b.stateNode,Tt=!1;break e}break;case 5:Xe=b.stateNode,Tt=!1;break e;case 3:case 4:Xe=b.stateNode.containerInfo,Tt=!0;break e}b=b.return}if(Xe===null)throw Error(o(160));ff(u,f,s),Xe=null,Tt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var nn=null;function yf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),St(e),i&4&&(Kn(3,e,e.return),nr(3,e),Kn(5,e,e.return));break;case 1:kt(t,e),St(e),i&512&&(nt||n===null||sn(n,n.return)),i&64&&zn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=nn;if(kt(t,e),St(e),i&512&&(nt||n===null||sn(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Di]||u[st]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(i),s.head.insertBefore(u,s.querySelector("head > title"))),dt(u,i,n),u[st]=e,lt(u),i=u;break e;case"link":var f=ym("link","href",s).get(i+(n.href||""));if(f){for(var b=0;b<f.length;b++)if(u=f[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(b,1);break t}}u=s.createElement(i),dt(u,i,n),s.head.appendChild(u);break;case"meta":if(f=ym("meta","content",s).get(i+(n.content||""))){for(b=0;b<f.length;b++)if(u=f[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(b,1);break t}}u=s.createElement(i),dt(u,i,n),s.head.appendChild(u);break;default:throw Error(o(468,i))}u[st]=e,lt(u),i=u}e.stateNode=i}else pm(s,e.type,e.stateNode);else e.stateNode=gm(s,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?pm(s,e.type,e.stateNode):gm(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Qs(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),St(e),i&512&&(nt||n===null||sn(n,n.return)),n!==null&&i&4&&Qs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),St(e),i&512&&(nt||n===null||sn(n,n.return)),e.flags&32){s=e.stateNode;try{Ua(s,"")}catch(te){_e(e,e.return,te)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Qs(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Ks=!0);break;case 6:if(kt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){_e(e,e.return,te)}}break;case 3:if(Wl=null,s=nn,nn=ql(t.containerInfo),kt(t,e),nn=s,St(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(te){_e(e,e.return,te)}Ks&&(Ks=!1,pf(e));break;case 4:i=nn,nn=ql(e.stateNode.containerInfo),kt(t,e),St(e),nn=i;break;case 12:kt(t,e),St(e);break;case 31:kt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cl(e,i)));break;case 13:kt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zl=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cl(e,i)));break;case 22:s=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,z=zn,L=nt;if(zn=z||s,nt=L||x,kt(t,e),nt=L,zn=z,St(e),i&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||x||zn||nt||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(u=x.stateNode,s)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{b=x.stateNode;var W=x.memoizedProps.style,D=W!=null&&W.hasOwnProperty("display")?W.display:null;b.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(te){_e(x,x.return,te)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=s?"":x.memoizedProps}catch(te){_e(x,x.return,te)}}}else if(t.tag===18){if(n===null){x=t;try{var N=x.stateNode;s?lm(N,!0):lm(x.stateNode,!1)}catch(te){_e(x,x.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Cl(e,n))));break;case 19:kt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Cl(e,i)));break;case 30:break;case 21:break;default:kt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sf(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var s=n.stateNode,u=Xs(e);Al(e,u,s);break;case 5:var f=n.stateNode;n.flags&32&&(Ua(f,""),n.flags&=-33);var b=Xs(e);Al(e,b,f);break;case 3:case 4:var x=n.stateNode.containerInfo,z=Xs(e);Fs(e,z,x);break;default:throw Error(o(161))}}catch(L){_e(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kn(4,t,t.return),Aa(t);break;case 1:sn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lf(t,t.return,n),Aa(t);break;case 27:dr(t.stateNode);case 26:case 5:sn(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function On(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:On(s,u,n),nr(4,u);break;case 1:if(On(s,u,n),i=u,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(z){_e(i,i.return,z)}if(i=u,s=i.updateQueue,s!==null){var b=i.stateNode;try{var x=s.shared.hiddenCallbacks;if(x!==null)for(s.shared.hiddenCallbacks=null,s=0;s<x.length;s++)Xc(x[s],b)}catch(z){_e(i,i.return,z)}}n&&f&64&&rf(u),ar(u,u.return);break;case 27:uf(u);case 26:case 5:On(s,u,n),n&&i===null&&f&4&&of(u),ar(u,u.return);break;case 12:On(s,u,n);break;case 31:On(s,u,n),n&&f&4&&mf(s,u);break;case 13:On(s,u,n),n&&f&4&&gf(s,u);break;case 22:u.memoizedState===null&&On(s,u,n),ar(u,u.return);break;case 30:break;default:On(s,u,n)}t=t.sibling}}function Zs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Wi(n))}function Js(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e))}function an(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(e,t,n,i),t=t.sibling}function wf(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,i),s&2048&&nr(9,t);break;case 1:an(e,t,n,i);break;case 3:an(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wi(e)));break;case 12:if(s&2048){an(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,b=u.onPostCommit;typeof b=="function"&&b(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){_e(t,t.return,x)}}else an(e,t,n,i);break;case 31:an(e,t,n,i);break;case 13:an(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?an(e,t,n,i):ir(e,t):u._visibility&2?an(e,t,n,i):(u._visibility|=2,li(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Zs(f,t);break;case 24:an(e,t,n,i),s&2048&&Js(t.alternate,t);break;default:an(e,t,n,i)}}function li(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,b=n,x=i,z=f.flags;switch(f.tag){case 0:case 11:case 15:li(u,f,b,x,s),nr(8,f);break;case 23:break;case 22:var L=f.stateNode;f.memoizedState!==null?L._visibility&2?li(u,f,b,x,s):ir(u,f):(L._visibility|=2,li(u,f,b,x,s)),s&&z&2048&&Zs(f.alternate,f);break;case 24:li(u,f,b,x,s),s&&z&2048&&Js(f.alternate,f);break;default:li(u,f,b,x,s)}t=t.sibling}}function ir(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ir(n,i),s&2048&&Zs(i.alternate,i);break;case 24:ir(n,i),s&2048&&Js(i.alternate,i);break;default:ir(n,i)}t=t.sibling}}var rr=8192;function oi(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)bf(e,t,n),e=e.sibling}function bf(e,t,n){switch(e.tag){case 26:oi(e,t,n),e.flags&rr&&e.memoizedState!==null&&Iw(n,nn,e.memoizedState,e.memoizedProps);break;case 5:oi(e,t,n);break;case 3:case 4:var i=nn;nn=ql(e.stateNode.containerInfo),oi(e,t,n),nn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,oi(e,t,n),rr=i):oi(e,t,n));break;default:oi(e,t,n)}}function vf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function lr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ot=i,kf(i,e)}vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tf(e),e=e.sibling}function Tf(e){switch(e.tag){case 0:case 11:case 15:lr(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:lr(e);break;case 12:lr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ml(e)):lr(e);break;default:lr(e)}}function Ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ot=i,kf(i,e)}vf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kn(8,t,t.return),Ml(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ml(t));break;default:Ml(t)}e=e.sibling}}function kf(e,t){for(;ot!==null;){var n=ot;switch(n.tag){case 0:case 11:case 15:Kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Wi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ot=i;else e:for(n=e;ot!==null;){i=ot;var s=i.sibling,u=i.return;if(df(i),i===n){ot=null;break e}if(s!==null){s.return=u,ot=s;break e}ot=u}}}var ew={getCacheForType:function(e){var t=ht(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht(Pe).controller.signal}},tw=typeof WeakMap=="function"?WeakMap:Map,Re=0,qe=null,Se=null,Ae=0,Ne=0,Nt=null,Zn=!1,si=!1,$s=!1,Bn=0,Ze=0,Jn=0,Ca=0,Ps=0,_t=0,ui=0,or=null,xt=null,eu=!1,zl=0,Sf=0,Dl=1/0,Rl=null,$n=null,rt=0,Pn=null,hi=null,Nn=0,tu=0,nu=null,xf=null,sr=0,au=null;function Ht(){return(Re&2)!==0&&Ae!==0?Ae&-Ae:R.T!==null?uu():Ih()}function Ef(){if(_t===0)if((Ae&536870912)===0||Me){var e=Ir;Ir<<=1,(Ir&3932160)===0&&(Ir=262144),_t=e}else _t=536870912;return e=Ot.current,e!==null&&(e.flags|=32),_t}function Et(e,t,n){(e===qe&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ci(e,0),ea(e,Ae,_t,!1)),zi(e,n),((Re&2)===0||e!==qe)&&(e===qe&&((Re&2)===0&&(Ca|=n),Ze===4&&ea(e,Ae,_t,!1)),un(e))}function Af(e,t,n){if((Re&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mi(e,t),s=i?iw(e,t):ru(e,t,!0),u=i;do{if(s===0){si&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!nw(n)){s=ru(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var b=e;s=or;var x=b.current.memoizedState.isDehydrated;if(x&&(ci(b,f).flags|=256),f=ru(b,f,!1),f!==2){if($s&&!x){b.errorRecoveryDisabledLanes|=u,Ca|=u,s=4;break e}u=xt,xt=s,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}s=f}if(u=!1,s!==2)continue}}if(s===1){ci(e,0),ea(e,t,0,!0);break}e:{switch(i=e,u=s,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,_t,!Zn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=zl+300-gt(),10<s)){if(ea(i,t,_t,!Zn),qr(i,0,!0)!==0)break e;Nn=t,i.timeoutHandle=am(Cf.bind(null,i,n,xt,Rl,eu,t,_t,Ca,ui,Zn,u,"Throttled",-0,0),s);break e}Cf(i,n,xt,Rl,eu,t,_t,Ca,ui,Zn,u,null,-0,0)}}break}while(!0);un(e)}function Cf(e,t,n,i,s,u,f,b,x,z,L,W,D,N){if(e.timeoutHandle=-1,W=t.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},bf(t,u,W);var te=(u&62914560)===u?zl-gt():(u&4194048)===u?Sf-gt():0;if(te=Uw(W,te),te!==null){Nn=u,e.cancelPendingCommit=te(_f.bind(null,e,t,u,n,i,s,f,b,x,L,W,null,D,N)),ea(e,u,f,!z);return}}_f(e,t,u,n,i,s,f,b,x)}function nw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],u=s.getSnapshot;s=s.value;try{if(!Dt(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t&=~Ps,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var u=31-Ue(s),f=1<<u;i[u]=-1,s&=~f}n!==0&&Hh(e,n,t)}function Ol(){return(Re&6)===0?(ur(0),!1):!0}function iu(){if(Se!==null){if(Ne===0)var e=Se.return;else e=Se,Sn=wa=null,vs(e),ti=null,Gi=0,e=Se;for(;e!==null;)af(e.alternate,e),e=e.return;Se=null}}function ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,kw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Nn=0,iu(),qe=e,Se=n=Tn(e.current,null),Ae=t,Ne=0,Nt=null,Zn=!1,si=Mi(e,t),$s=!1,ui=_t=Ps=Ca=Jn=Ze=0,xt=or=null,eu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Ue(i),u=1<<s;t|=e[s],i&=~u}return Bn=t,Pr(),n}function Mf(e,t){ye=null,R.H=Pi,t===ei||t===ol?(t=Wc(),Ne=3):t===ss?(t=Wc(),Ne=4):Ne=t===Hs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,Se===null&&(Ze=1,Tl(e,Vt(t,e.current)))}function zf(){var e=Ot.current;return e===null?!0:(Ae&4194048)===Ae?Ft===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Ft:!1}function Df(){var e=R.H;return R.H=Pi,e===null?Pi:e}function Rf(){var e=R.A;return R.A=ew,e}function Bl(){Ze=4,Zn||(Ae&4194048)!==Ae&&Ot.current!==null||(si=!0),(Jn&134217727)===0&&(Ca&134217727)===0||qe===null||ea(qe,Ae,_t,!1)}function ru(e,t,n){var i=Re;Re|=2;var s=Df(),u=Rf();(qe!==e||Ae!==t)&&(Rl=null,ci(e,t)),t=!1;var f=Ze;e:do try{if(Ne!==0&&Se!==null){var b=Se,x=Nt;switch(Ne){case 8:iu(),f=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var z=Ne;if(Ne=0,Nt=null,di(e,b,x,z),n&&si){f=0;break e}break;default:z=Ne,Ne=0,Nt=null,di(e,b,x,z)}}aw(),f=Ze;break}catch(L){Mf(e,L)}while(!0);return t&&e.shellSuspendCounter++,Sn=wa=null,Re=i,R.H=s,R.A=u,Se===null&&(qe=null,Ae=0,Pr()),f}function aw(){for(;Se!==null;)Of(Se)}function iw(e,t){var n=Re;Re|=2;var i=Df(),s=Rf();qe!==e||Ae!==t?(Rl=null,Dl=gt()+500,ci(e,t)):si=Mi(e,t);e:do try{if(Ne!==0&&Se!==null){t=Se;var u=Nt;t:switch(Ne){case 1:Ne=0,Nt=null,di(e,t,u,1);break;case 2:case 9:if(qc(u)){Ne=0,Nt=null,Bf(t);break}t=function(){Ne!==2&&Ne!==9||qe!==e||(Ne=7),un(e)},u.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:qc(u)?(Ne=0,Nt=null,Bf(t)):(Ne=0,Nt=null,di(e,t,u,7));break;case 5:var f=null;switch(Se.tag){case 26:f=Se.memoizedState;case 5:case 27:var b=Se;if(f?wm(f):b.stateNode.complete){Ne=0,Nt=null;var x=b.sibling;if(x!==null)Se=x;else{var z=b.return;z!==null?(Se=z,Nl(z)):Se=null}break t}}Ne=0,Nt=null,di(e,t,u,5);break;case 6:Ne=0,Nt=null,di(e,t,u,6);break;case 8:iu(),Ze=6;break e;default:throw Error(o(462))}}rw();break}catch(L){Mf(e,L)}while(!0);return Sn=wa=null,R.H=i,R.A=s,Re=n,Se!==null?0:(qe=null,Ae=0,Pr(),Ze)}function rw(){for(;Se!==null&&!wo();)Of(Se)}function Of(e){var t=tf(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Nl(e):Se=t}function Bf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kd(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Kd(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:vs(t);default:af(n,t),t=Se=Dc(t,Bn),t=tf(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Nl(e):Se=t}function di(e,t,n,i){Sn=wa=null,vs(t),ti=null,Gi=0;var s=t.return;try{if(Xp(e,s,t,n,Ae)){Ze=1,Tl(e,Vt(n,e.current)),Se=null;return}}catch(u){if(s!==null)throw Se=s,u;Ze=1,Tl(e,Vt(n,e.current)),Se=null;return}t.flags&32768?(Me||i===1?e=!0:si||(Ae&536870912)!==0?e=!1:(Zn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ot.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nf(t,e)):Nl(t)}function Nl(e){var t=e;do{if((t.flags&32768)!==0){Nf(t,Zn);return}e=t.return;var n=Zp(t.alternate,t,Bn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ze===0&&(Ze=5)}function Nf(e,t){do{var n=Jp(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Ze=6,Se=null}function _f(e,t,n,i,s,u,f,b,x){e.cancelPendingCommit=null;do _l();while(rt!==0);if((Re&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Xo,jy(e,n,u,f,b,x),e===qe&&(Se=qe=null,Ae=0),hi=t,Pn=e,Nn=n,tu=u,nu=s,xf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uw(de,function(){return Uf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,s=G.p,G.p=2,f=Re,Re|=4;try{$p(e,t,n)}finally{Re=f,G.p=s,R.T=i}}rt=1,Hf(),Lf(),jf()}}function Hf(){if(rt===1){rt=0;var e=Pn,t=hi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=G.p;G.p=2;var s=Re;Re|=4;try{yf(t,e);var u=pu,f=Tc(e.containerInfo),b=u.focusedElem,x=u.selectionRange;if(f!==b&&b&&b.ownerDocument&&vc(b.ownerDocument.documentElement,b)){if(x!==null&&Yo(b)){var z=x.start,L=x.end;if(L===void 0&&(L=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(L,b.value.length);else{var W=b.ownerDocument||document,D=W&&W.defaultView||window;if(D.getSelection){var N=D.getSelection(),te=b.textContent.length,ue=Math.min(x.start,te),Ie=x.end===void 0?ue:Math.min(x.end,te);!N.extend&&ue>Ie&&(f=Ie,Ie=ue,ue=f);var C=bc(b,ue),A=bc(b,Ie);if(C&&A&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==A.node||N.focusOffset!==A.offset)){var M=W.createRange();M.setStart(C.node,C.offset),N.removeAllRanges(),ue>Ie?(N.addRange(M),N.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),N.addRange(M))}}}}for(W=[],N=b;N=N.parentNode;)N.nodeType===1&&W.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<W.length;b++){var Y=W[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Xl=!!yu,pu=yu=null}finally{Re=s,G.p=i,R.T=n}}e.current=t,rt=2}}function Lf(){if(rt===2){rt=0;var e=Pn,t=hi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=G.p;G.p=2;var s=Re;Re|=4;try{cf(e,t.alternate,t)}finally{Re=s,G.p=i,R.T=n}}rt=3}}function jf(){if(rt===4||rt===3){rt=0,bo();var e=Pn,t=hi,n=Nn,i=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,hi=Pn=null,If(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&($n=null),So(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(yt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,s=G.p,G.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<i.length;f++){var b=i[f];u(b.value,{componentStack:b.stack})}}finally{R.T=t,G.p=s}}(Nn&3)!==0&&_l(),un(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===au?sr++:(sr=0,au=e):sr=0,ur(0)}}function If(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wi(t)))}function _l(){return Hf(),Lf(),jf(),Uf()}function Uf(){if(rt!==5)return!1;var e=Pn,t=tu;tu=0;var n=So(Nn),i=R.T,s=G.p;try{G.p=32>n?32:n,R.T=null,n=nu,nu=null;var u=Pn,f=Nn;if(rt=0,hi=Pn=null,Nn=0,(Re&6)!==0)throw Error(o(331));var b=Re;if(Re|=4,Tf(u.current),wf(u,u.current,f,n),Re=b,ur(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(yt,u)}catch{}return!0}finally{G.p=s,R.T=i,If(e,t)}}function qf(e,t,n){t=Vt(n,t),t=_s(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(zi(e,2),un(e))}function _e(e,t,n){if(e.tag===3)qf(e,e,n);else for(;t!==null;){if(t.tag===3){qf(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($n===null||!$n.has(i))){e=Vt(n,e),n=qd(2),i=Qn(t,n,2),i!==null&&(Yd(n,i,t,e),zi(i,2),un(i));break}}t=t.return}}function lu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tw;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||($s=!0,s.add(n),e=lw.bind(null,e,t,n),t.then(e,e))}function lw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,qe===e&&(Ae&n)===n&&(Ze===4||Ze===3&&(Ae&62914560)===Ae&&300>gt()-zl?(Re&2)===0&&ci(e,0):Ps|=n,ui===Ae&&(ui=0)),un(e)}function Yf(e,t){t===0&&(t=_h()),e=ga(e,t),e!==null&&(zi(e,t),un(e))}function ow(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yf(e,n)}function sw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Yf(e,n)}function uw(e,t){return Ba(e,t)}var Hl=null,fi=null,ou=!1,Ll=!1,su=!1,ta=0;function un(e){e!==fi&&e.next===null&&(fi===null?Hl=fi=e:fi=fi.next=e),Ll=!0,ou||(ou=!0,cw())}function ur(e,t){if(!su&&Ll){su=!0;do for(var n=!1,i=Hl;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var u=0;else{var f=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-Ue(42|e)+1)-1,u&=s&~(f&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Qf(i,u))}else u=Ae,u=qr(i,i===qe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Mi(i,u)||(n=!0,Qf(i,u));i=i.next}while(n);su=!1}}function hw(){Wf()}function Wf(){Ll=ou=!1;var e=0;ta!==0&&Tw()&&(e=ta);for(var t=gt(),n=null,i=Hl;i!==null;){var s=i.next,u=Vf(i,t);u===0?(i.next=null,n===null?Hl=s:n.next=s,s===null&&(fi=n)):(n=i,(e!==0||(u&3)!==0)&&(Ll=!0)),i=s}rt!==0&&rt!==5||ur(e),ta!==0&&(ta=0)}function Vf(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-Ue(u),b=1<<f,x=s[f];x===-1?((b&n)===0||(b&i)!==0)&&(s[f]=Ly(b,t)):x<=t&&(e.expiredLanes|=b),u&=~b}if(t=qe,n=Ae,n=qr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ci(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ci(i),So(n)){case 2:case 8:n=K;break;case 32:n=de;break;case 268435456:n=Be;break;default:n=de}return i=Gf.bind(null,e),n=Ba(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ci(i),e.callbackPriority=2,e.callbackNode=null,2}function Gf(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(_l()&&e.callbackNode!==n)return null;var i=Ae;return i=qr(e,e===qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Af(e,i,t),Vf(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Gf.bind(null,e):null)}function Qf(e,t){if(_l())return null;Af(e,t,!0)}function cw(){Sw(function(){(Re&6)!==0?Ba(q,hw):Wf()})}function uu(){if(ta===0){var e=$a;e===0&&(e=jr,jr<<=1,(jr&261888)===0&&(jr=256)),ta=e}return ta}function Xf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gr(""+e)}function Ff(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var u=Xf((s[bt]||null).action),f=i.submitter;f&&(t=(t=f[bt]||null)?Xf(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var b=new Kr("action","action",null,i,s);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var x=f?Ff(s,f):new FormData(s);zs(n,{pending:!0,data:x,method:s.method,action:u},null,x)}}else typeof u=="function"&&(b.preventDefault(),x=f?Ff(s,f):new FormData(s),zs(n,{pending:!0,data:x,method:s.method,action:u},u,x))},currentTarget:s}]})}}for(var hu=0;hu<Qo.length;hu++){var cu=Qo[hu],fw=cu.toLowerCase(),mw=cu[0].toUpperCase()+cu.slice(1);tn(fw,"on"+mw)}tn(xc,"onAnimationEnd"),tn(Ec,"onAnimationIteration"),tn(Ac,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Dp,"onTransitionRun"),tn(Rp,"onTransitionStart"),tn(Op,"onTransitionCancel"),tn(Cc,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hr));function Kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var b=i[f],x=b.instance,z=b.currentTarget;if(b=b.listener,x!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=z;try{u(s)}catch(L){$r(L)}s.currentTarget=null,u=x}else for(f=0;f<i.length;f++){if(b=i[f],x=b.instance,z=b.currentTarget,b=b.listener,x!==u&&s.isPropagationStopped())break e;u=b,s.currentTarget=z;try{u(s)}catch(L){$r(L)}s.currentTarget=null,u=x}}}}function xe(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var i=e+"__bubble";n.has(i)||(Zf(t,e,2,!1),n.add(i))}function du(e,t,n){var i=0;t&&(i|=4),Zf(n,e,i,t)}var jl="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[jl]){e[jl]=!0,Yh.forEach(function(n){n!=="selectionchange"&&(gw.has(n)||du(n,!1,e),du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jl]||(t[jl]=!0,du("selectionchange",!1,t))}}function Zf(e,t,n,i){switch(Em(t)){case 2:var s=Ww;break;case 8:s=Vw;break;default:s=Mu}n=s.bind(null,t,n,e),s=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function mu(e,t,n,i,s){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var b=i.stateNode.containerInfo;if(b===s)break;if(f===4)for(f=i.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===s)return;f=f.return}for(;b!==null;){if(f=_a(b),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){i=u=f;continue e}b=b.parentNode}}i=i.return}ec(function(){var z=u,L=Ro(n),W=[];e:{var D=Mc.get(e);if(D!==void 0){var N=Kr,te=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":N=sp;break;case"focusin":te="focus",N=Lo;break;case"focusout":te="blur",N=Lo;break;case"beforeblur":case"afterblur":N=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=cp;break;case xc:case Ec:case Ac:N=Py;break;case Cc:N=fp;break;case"scroll":case"scrollend":N=Fy;break;case"wheel":N=gp;break;case"copy":case"cut":case"paste":N=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=rc;break;case"toggle":case"beforetoggle":N=pp}var ue=(t&4)!==0,Ie=!ue&&(e==="scroll"||e==="scrollend"),C=ue?D!==null?D+"Capture":null:D;ue=[];for(var A=z,M;A!==null;){var Y=A;if(M=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||M===null||C===null||(Y=Oi(A,C),Y!=null&&ue.push(cr(A,Y,M))),Ie)break;A=A.return}0<ue.length&&(D=new N(D,te,null,n,L),W.push({event:D,listeners:ue}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",D&&n!==Do&&(te=n.relatedTarget||n.fromElement)&&(_a(te)||te[Na]))break e;if((N||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,N?(te=n.relatedTarget||n.toElement,N=z,te=te?_a(te):null,te!==null&&(Ie=c(te),ue=te.tag,te!==Ie||ue!==5&&ue!==27&&ue!==6)&&(te=null)):(N=null,te=z),N!==te)){if(ue=ac,Y="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ue=rc,Y="onPointerLeave",C="onPointerEnter",A="pointer"),Ie=N==null?D:Ri(N),M=te==null?D:Ri(te),D=new ue(Y,A+"leave",N,n,L),D.target=Ie,D.relatedTarget=M,Y=null,_a(L)===z&&(ue=new ue(C,A+"enter",te,n,L),ue.target=M,ue.relatedTarget=Ie,Y=ue),Ie=Y,N&&te)t:{for(ue=yw,C=N,A=te,M=0,Y=C;Y;Y=ue(Y))M++;Y=0;for(var oe=A;oe;oe=ue(oe))Y++;for(;0<M-Y;)C=ue(C),M--;for(;0<Y-M;)A=ue(A),Y--;for(;M--;){if(C===A||A!==null&&C===A.alternate){ue=C;break t}C=ue(C),A=ue(A)}ue=null}else ue=null;N!==null&&Jf(W,D,N,ue,!1),te!==null&&Ie!==null&&Jf(W,Ie,te,ue,!0)}}e:{if(D=z?Ri(z):window,N=D.nodeName&&D.nodeName.toLowerCase(),N==="select"||N==="input"&&D.type==="file")var ze=fc;else if(cc(D))if(mc)ze=Cp;else{ze=Ep;var ae=xp}else N=D.nodeName,!N||N.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&zo(z.elementType)&&(ze=fc):ze=Ap;if(ze&&(ze=ze(e,z))){dc(W,ze,n,L);break e}ae&&ae(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&Mo(D,"number",D.value)}switch(ae=z?Ri(z):window,e){case"focusin":(cc(ae)||ae.contentEditable==="true")&&(Va=ae,Wo=z,Ui=null);break;case"focusout":Ui=Wo=Va=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":Vo=!1,kc(W,n,L);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":kc(W,n,L)}var pe;if(Io)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Wa?uc(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(lc&&n.locale!=="ko"&&(Wa||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Wa&&(pe=tc()):(In=L,No="value"in In?In.value:In.textContent,Wa=!0)),ae=Il(z,Ce),0<ae.length&&(Ce=new ic(Ce,e,null,n,L),W.push({event:Ce,listeners:ae}),pe?Ce.data=pe:(pe=hc(n),pe!==null&&(Ce.data=pe)))),(pe=bp?vp(e,n):Tp(e,n))&&(Ce=Il(z,"onBeforeInput"),0<Ce.length&&(ae=new ic("onBeforeInput","beforeinput",null,n,L),W.push({event:ae,listeners:Ce}),ae.data=pe)),dw(W,e,z,n,L)}Kf(W,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Oi(e,n),s!=null&&i.unshift(cr(e,s,u)),s=Oi(e,t),s!=null&&i.push(cr(e,s,u))),e.tag===3)return i;e=e.return}return[]}function yw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,n,i,s){for(var u=t._reactName,f=[];n!==null&&n!==i;){var b=n,x=b.alternate,z=b.stateNode;if(b=b.tag,x!==null&&x===i)break;b!==5&&b!==26&&b!==27||z===null||(x=z,s?(z=Oi(n,u),z!=null&&f.unshift(cr(n,z,x))):s||(z=Oi(n,u),z!=null&&f.push(cr(n,z,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var pw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(pw,`
`).replace(ww,"")}function Pf(e,t){return t=$f(t),$f(e)===t}function je(e,t,n,i,s,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ua(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ua(e,""+i);break;case"className":Wr(e,"class",i);break;case"tabIndex":Wr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(e,n,i);break;case"style":$h(e,i,u);break;case"data":if(t!=="object"){Wr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Gr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",s.name,s,null),je(e,t,"formEncType",s.formEncType,s,null),je(e,t,"formMethod",s.formMethod,s,null),je(e,t,"formTarget",s.formTarget,s,null)):(je(e,t,"encType",s.encType,s,null),je(e,t,"method",s.method,s,null),je(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Gr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Gr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Yr(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Qy.get(n)||n,Yr(e,n,i))}}function gu(e,t,n,i,s,u){switch(n){case"style":$h(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ua(e,i):(typeof i=="number"||typeof i=="bigint")&&Ua(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[bt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Yr(e,n,i)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,u,f,n,null)}}s&&je(e,t,"srcSet",n.srcSet,n,null),i&&je(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var b=u=f=s=null,x=null,z=null;for(i in n)if(n.hasOwnProperty(i)){var L=n[i];if(L!=null)switch(i){case"name":s=L;break;case"type":f=L;break;case"checked":x=L;break;case"defaultChecked":z=L;break;case"value":u=L;break;case"defaultValue":b=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(o(137,t));break;default:je(e,t,i,L,n,null)}}Fh(e,u,b,x,z,f,s,!1);return;case"select":xe("invalid",e),i=f=u=null;for(s in n)if(n.hasOwnProperty(s)&&(b=n[s],b!=null))switch(s){case"value":u=b;break;case"defaultValue":f=b;break;case"multiple":i=b;default:je(e,t,s,b,n,null)}t=u,n=f,e.multiple=!!i,t!=null?Ia(e,!!i,t,!1):n!=null&&Ia(e,!!i,n,!0);return;case"textarea":xe("invalid",e),u=s=i=null;for(f in n)if(n.hasOwnProperty(f)&&(b=n[f],b!=null))switch(f){case"value":i=b;break;case"defaultValue":s=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:je(e,t,f,b,n,null)}Zh(e,i,s,u);return;case"option":for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null)&&(x==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":je(e,t,x,i,n,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<hr.length;i++)xe(hr[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:je(e,t,z,i,n,null)}return;default:if(zo(t)){for(L in n)n.hasOwnProperty(L)&&(i=n[L],i!==void 0&&gu(e,t,L,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&je(e,t,b,i,n,null))}function bw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,f=null,b=null,x=null,z=null,L=null;for(N in n){var W=n[N];if(n.hasOwnProperty(N)&&W!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":x=W;default:i.hasOwnProperty(N)||je(e,t,N,null,i,W)}}for(var D in i){var N=i[D];if(W=n[D],i.hasOwnProperty(D)&&(N!=null||W!=null))switch(D){case"type":u=N;break;case"name":s=N;break;case"checked":z=N;break;case"defaultChecked":L=N;break;case"value":f=N;break;case"defaultValue":b=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==W&&je(e,t,D,N,i,W)}}Co(e,f,b,x,z,L,u,s);return;case"select":N=f=b=D=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":N=x;default:i.hasOwnProperty(u)||je(e,t,u,null,i,x)}for(s in i)if(u=i[s],x=n[s],i.hasOwnProperty(s)&&(u!=null||x!=null))switch(s){case"value":D=u;break;case"defaultValue":b=u;break;case"multiple":f=u;default:u!==x&&je(e,t,s,u,i,x)}t=b,n=f,i=N,D!=null?Ia(e,!!n,D,!1):!!i!=!!n&&(t!=null?Ia(e,!!n,t,!0):Ia(e,!!n,n?[]:"",!1));return;case"textarea":N=D=null;for(b in n)if(s=n[b],n.hasOwnProperty(b)&&s!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:je(e,t,b,null,i,s)}for(f in i)if(s=i[f],u=n[f],i.hasOwnProperty(f)&&(s!=null||u!=null))switch(f){case"value":D=s;break;case"defaultValue":N=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==u&&je(e,t,f,s,i,u)}Kh(e,D,N);return;case"option":for(var te in n)D=n[te],n.hasOwnProperty(te)&&D!=null&&!i.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:je(e,t,te,null,i,D));for(x in i)D=i[x],N=n[x],i.hasOwnProperty(x)&&D!==N&&(D!=null||N!=null)&&(x==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":je(e,t,x,D,i,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)D=n[ue],n.hasOwnProperty(ue)&&D!=null&&!i.hasOwnProperty(ue)&&je(e,t,ue,null,i,D);for(z in i)if(D=i[z],N=n[z],i.hasOwnProperty(z)&&D!==N&&(D!=null||N!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,t));break;default:je(e,t,z,D,i,N)}return;default:if(zo(t)){for(var Ie in n)D=n[Ie],n.hasOwnProperty(Ie)&&D!==void 0&&!i.hasOwnProperty(Ie)&&gu(e,t,Ie,void 0,i,D);for(L in i)D=i[L],N=n[L],!i.hasOwnProperty(L)||D===N||D===void 0&&N===void 0||gu(e,t,L,D,i,N);return}}for(var C in n)D=n[C],n.hasOwnProperty(C)&&D!=null&&!i.hasOwnProperty(C)&&je(e,t,C,null,i,D);for(W in i)D=i[W],N=n[W],!i.hasOwnProperty(W)||D===N||D==null&&N==null||je(e,t,W,D,i,N)}function em(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],u=s.transferSize,f=s.initiatorType,b=s.duration;if(u&&b&&em(f)){for(f=0,b=s.responseEnd,i+=1;i<n.length;i++){var x=n[i],z=x.startTime;if(z>b)break;var L=x.transferSize,W=x.initiatorType;L&&em(W)&&(x=x.responseEnd,f+=L*(x<b?1:(b-z)/(x-z)))}if(--i,t+=8*(u+f)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yu=null,pu=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=null;function Tw(){var e=window.event;return e&&e.type==="popstate"?e===bu?!1:(bu=e,!0):(bu=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,kw=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(xw)}:am;function xw(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function rm(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),pi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dr(n);for(var u=n.firstChild;u;){var f=u.nextSibling,b=u.nodeName;u[Di]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=f}}else n==="body"&&dr(e.ownerDocument.body);n=s}while(n);pi(t)}function lm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function vu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vu(n),Eo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ew(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function Aw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Tu(e){return e.data==="$?"||e.data==="$~"}function ku(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Su=null;function sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hm(e,t,n){switch(t=Ul(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Eo(e)}var Zt=new Map,cm=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _n=G.d;G.d={f:Mw,r:zw,D:Dw,C:Rw,L:Ow,m:Bw,X:_w,S:Nw,M:Hw};function Mw(){var e=_n.f(),t=Ol();return e||t}function zw(e){var t=Ha(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):_n.r(e)}var mi=typeof document>"u"?null:document;function dm(e,t,n){var i=mi;if(i&&typeof t=="string"&&t){var s=Yt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),cm.has(s)||(cm.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),dt(t,"link",e),lt(t),i.head.appendChild(t)))}}function Dw(e){_n.D(e),dm("dns-prefetch",e,null)}function Rw(e,t){_n.C(e,t),dm("preconnect",e,t)}function Ow(e,t,n){_n.L(e,t,n);var i=mi;if(i&&e&&t){var s='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Yt(n.imageSizes)+'"]')):s+='[href="'+Yt(e)+'"]';var u=s;switch(t){case"style":u=gi(e);break;case"script":u=yi(e)}Zt.has(u)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(u,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(fr(u))||t==="script"&&i.querySelector(mr(u))||(t=i.createElement("link"),dt(t,"link",e),lt(t),i.head.appendChild(t)))}}function Bw(e,t){_n.m(e,t);var n=mi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(e)+'"]',u=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yi(e)}if(!Zt.has(u)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(u,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mr(u)))return}i=n.createElement("link"),dt(i,"link",e),lt(i),n.head.appendChild(i)}}}function Nw(e,t,n){_n.S(e,t,n);var i=mi;if(i&&e){var s=La(i).hoistableStyles,u=gi(e);t=t||"default";var f=s.get(u);if(!f){var b={loading:0,preload:null};if(f=i.querySelector(fr(u)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(u))&&xu(e,n);var x=f=i.createElement("link");lt(x),dt(x,"link",e),x._p=new Promise(function(z,L){x.onload=z,x.onerror=L}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:b},s.set(u,f)}}}function _w(e,t){_n.X(e,t);var n=mi;if(n&&e){var i=La(n).hoistableScripts,s=yi(e),u=i.get(s);u||(u=n.querySelector(mr(s)),u||(e=w({src:e,async:!0},t),(t=Zt.get(s))&&Eu(e,t),u=n.createElement("script"),lt(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function Hw(e,t){_n.M(e,t);var n=mi;if(n&&e){var i=La(n).hoistableScripts,s=yi(e),u=i.get(s);u||(u=n.querySelector(mr(s)),u||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(s))&&Eu(e,t),u=n.createElement("script"),lt(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(s,u))}}function fm(e,t,n,i){var s=(s=le.current)?ql(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=gi(n.href),n=La(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=gi(n.href);var u=La(s).hoistableStyles,f=u.get(e);if(f||(s=s.ownerDocument||s,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=s.querySelector(fr(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),u||Lw(s,e,n,f.state))),t&&i===null)throw Error(o(528,""));return f}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yi(n),n=La(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function gi(e){return'href="'+Yt(e)+'"'}function fr(e){return'link[rel="stylesheet"]['+e+"]"}function mm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),dt(t,"link",n),lt(t),e.head.appendChild(t))}function yi(e){return'[src="'+Yt(e)+'"]'}function mr(e){return"script[async]"+e}function gm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(i)return t.instance=i,lt(i),i;var s=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),lt(i),dt(i,"style",s),Yl(i,n.precedence,e),t.instance=i;case"stylesheet":s=gi(n.href);var u=e.querySelector(fr(s));if(u)return t.state.loading|=4,t.instance=u,lt(u),u;i=mm(n),(s=Zt.get(s))&&xu(i,s),u=(e.ownerDocument||e).createElement("link"),lt(u);var f=u;return f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),t.state.loading|=4,Yl(u,n.precedence,e),t.instance=u;case"script":return u=yi(n.src),(s=e.querySelector(mr(u)))?(t.instance=s,lt(s),s):(i=n,(s=Zt.get(u))&&(i=w({},n),Eu(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),lt(s),dt(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Yl(i,n.precedence,e));return t.instance}function Yl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,u=s,f=0;f<i.length;f++){var b=i[f];if(b.dataset.precedence===t)u=b;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wl=null;function ym(e,t,n){if(Wl===null){var i=new Map,s=Wl=new Map;s.set(n,i)}else s=Wl,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[Di]||u[st]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var b=i.get(f);b?b.push(u):i.set(f,[u])}}return i}function pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function jw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Iw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=gi(i.href),u=t.querySelector(fr(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,lt(u);return}u=t.ownerDocument||t,i=mm(i),(s=Zt.get(s))&&xu(i,s),u=u.createElement("link"),lt(u);var f=u;f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Au=0;function Uw(e,t){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Au===0&&(Au=62500*vw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Au?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Ql(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,t.forEach(qw,e),Gl=null,Vl.call(e))}function qw(e,t){if(!(t.state.loading&4)){var n=Gl.get(e);if(n)var i=n.get(null);else{n=new Map,Gl.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var f=s[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}s=t.instance,f=s.getAttribute("data-precedence"),u=n.get(f)||i,u===i&&n.set(null,s),n.set(f,s),this.count++,i=Vl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var gr={$$typeof:V,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Yw(e,t,n,i,s,u,f,b,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function bm(e,t,n,i,s,u,f,b,x,z,L,W){return e=new Yw(e,t,n,f,x,z,L,W,b),t=1,u===!0&&(t|=24),u=Rt(3,null,null,t),e.current=u,u.stateNode=e,t=rs(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},us(u),e}function vm(e){return e?(e=Xa,e):Xa}function Tm(e,t,n,i,s,u){s=vm(s),i.context===null?i.context=s:i.pendingContext=s,i=Gn(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Qn(e,i,t),n!==null&&(Et(n,e,t),Xi(n,e,t))}function km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){km(e,t),(e=e.alternate)&&km(e,t)}function Sm(e){if(e.tag===13||e.tag===31){var t=ga(e,67108864);t!==null&&Et(t,e,67108864),Cu(e,67108864)}}function xm(e){if(e.tag===13||e.tag===31){var t=Ht();t=ko(t);var n=ga(e,t);n!==null&&Et(n,e,t),Cu(e,t)}}var Xl=!0;function Ww(e,t,n,i){var s=R.T;R.T=null;var u=G.p;try{G.p=2,Mu(e,t,n,i)}finally{G.p=u,R.T=s}}function Vw(e,t,n,i){var s=R.T;R.T=null;var u=G.p;try{G.p=8,Mu(e,t,n,i)}finally{G.p=u,R.T=s}}function Mu(e,t,n,i){if(Xl){var s=zu(i);if(s===null)mu(e,t,i,Fl,n),Am(e,i);else if(Qw(s,e,t,n,i))i.stopPropagation();else if(Am(e,i),t&4&&-1<Gw.indexOf(e)){for(;s!==null;){var u=Ha(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=ha(u.pendingLanes);if(f!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;f;){var x=1<<31-Ue(f);b.entanglements[1]|=x,f&=~x}un(u),(Re&6)===0&&(Dl=gt()+500,ur(0))}}break;case 31:case 13:b=ga(u,2),b!==null&&Et(b,u,2),Ol(),Cu(u,2)}if(u=zu(i),u===null&&mu(e,t,i,Fl,n),u===s)break;s=u}s!==null&&i.stopPropagation()}else mu(e,t,i,null,n)}}function zu(e){return e=Ro(e),Du(e)}var Fl=null;function Du(e){if(Fl=null,e=_a(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fl=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vo()){case q:return 2;case K:return 8;case de:case ke:return 32;case Be:return 268435456;default:return 32}default:return 32}}var Ru=!1,aa=null,ia=null,ra=null,yr=new Map,pr=new Map,la=[],Gw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function wr(e,t,n,i,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[s]},t!==null&&(t=Ha(t),t!==null&&Sm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Qw(e,t,n,i,s){switch(t){case"focusin":return aa=wr(aa,e,t,n,i,s),!0;case"dragenter":return ia=wr(ia,e,t,n,i,s),!0;case"mouseover":return ra=wr(ra,e,t,n,i,s),!0;case"pointerover":var u=s.pointerId;return yr.set(u,wr(yr.get(u)||null,e,t,n,i,s)),!0;case"gotpointercapture":return u=s.pointerId,pr.set(u,wr(pr.get(u)||null,e,t,n,i,s)),!0}return!1}function Cm(e){var t=_a(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){xm(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){xm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Do=i,n.target.dispatchEvent(i),Do=null}else return t=Ha(n),t!==null&&Sm(t),e.blockedOn=n,!1;t.shift()}return!0}function Mm(e,t,n){Kl(e)&&n.delete(t)}function Xw(){Ru=!1,aa!==null&&Kl(aa)&&(aa=null),ia!==null&&Kl(ia)&&(ia=null),ra!==null&&Kl(ra)&&(ra=null),yr.forEach(Mm),pr.forEach(Mm)}function Zl(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Xw)))}var Jl=null;function zm(e){Jl!==e&&(Jl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Du(i||n)===null)continue;break}var u=Ha(n);u!==null&&(e.splice(t,3),t-=3,zs(u,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function pi(e){function t(x){return Zl(x,e)}aa!==null&&Zl(aa,e),ia!==null&&Zl(ia,e),ra!==null&&Zl(ra,e),yr.forEach(t),pr.forEach(t);for(var n=0;n<la.length;n++){var i=la[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<la.length&&(n=la[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&la.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],f=s[bt]||null;if(typeof u=="function")f||zm(n);else if(f){var b=null;if(u&&u.hasAttribute("formAction")){if(s=u,f=u[bt]||null)b=f.formAction;else if(Du(s)!==null)continue}else b=f.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),zm(n)}}}function Dm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return s=f})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Ou(e){this._internalRoot=e}$l.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Ht();Tm(n,i,e,t,null,null)},$l.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tm(e.current,2,null,e,null,null),Ol(),t[Na]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ih();e={blockedOn:null,target:e,priority:t};for(var n=0;n<la.length&&t!==0&&t<la[n].priority;n++);la.splice(n,0,e),n===0&&Cm(e)}};var Rm=r.version;if(Rm!=="19.2.4")throw Error(o(527,Rm,"19.2.4"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Fw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{yt=Pl.inject(Fw),it=Pl}catch{}}return vr.createRoot=function(e,t){if(!h(e))throw Error(o(299));var n=!1,i="",s=Ld,u=jd,f=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=bm(e,1,!1,null,null,n,i,null,s,u,f,Dm),e[Na]=t.current,fu(e),new Ou(t)},vr.hydrateRoot=function(e,t,n){if(!h(e))throw Error(o(299));var i=!1,s="",u=Ld,f=jd,b=Id,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=bm(e,1,!0,t,n??null,i,s,x,u,f,b,Dm),t.context=vm(null),n=t.current,i=Ht(),i=ko(i),s=Gn(i),s.callback=null,Qn(n,s,i),n=i,t.current.lanes=n,zi(t,n),un(t),e[Na]=t.current,fu(e),new $l(t)},vr.version="19.2.4",vr}var qm;function ib(){if(qm)return _u.exports;qm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),_u.exports=ab(),_u.exports}var rb=ib();var Ym="popstate";function Wm(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function lb(a={}){function r(h,c){let{pathname:d="/",search:g="",hash:y=""}=Ma(h.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),th("",{pathname:d,search:g,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(h,c){let d=h.document.querySelector("base"),g="";if(d&&d.getAttribute("href")){let y=h.location.href,m=y.indexOf("#");g=m===-1?y:y.slice(0,m)}return g+"#"+(typeof c=="string"?c:zr(c))}function o(h,c){Pt(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return sb(r,l,o,a)}function Fe(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Pt(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function ob(){return Math.random().toString(36).substring(2,10)}function Vm(a,r){return{usr:a.state,key:a.key,idx:r,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function th(a,r,l=null,o,h){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Ma(r):r,state:l,key:r&&r.key||o||ob(),unstable_mask:h}}function zr({pathname:a="/",search:r="",hash:l=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function Ma(a){let r={};if(a){let l=a.indexOf("#");l>=0&&(r.hash=a.substring(l),a=a.substring(0,l));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function sb(a,r,l,o={}){let{window:h=document.defaultView,v5Compat:c=!1}=o,d=h.history,g="POP",y=null,m=p();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function p(){return(d.state||{idx:null}).idx}function w(){g="POP";let O=p(),B=O==null?null:O-m;m=O,y&&y({action:g,location:H.location,delta:B})}function k(O,B){g="PUSH";let F=Wm(O)?O:th(H.location,O,B);l&&l(F,O),m=p()+1;let V=Vm(F,m),re=H.createHref(F.unstable_mask||F);try{d.pushState(V,"",re)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;h.location.assign(re)}c&&y&&y({action:g,location:H.location,delta:1})}function v(O,B){g="REPLACE";let F=Wm(O)?O:th(H.location,O,B);l&&l(F,O),m=p();let V=Vm(F,m),re=H.createHref(F.unstable_mask||F);d.replaceState(V,"",re),c&&y&&y({action:g,location:H.location,delta:0})}function _(O){return ub(O)}let H={get action(){return g},get location(){return a(h,d)},listen(O){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(Ym,w),y=O,()=>{h.removeEventListener(Ym,w),y=null}},createHref(O){return r(h,O)},createURL:_,encodeLocation(O){let B=_(O);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:k,replace:v,go(O){return d.go(O)}};return H}function ub(a,r=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(l,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:zr(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function Ng(a,r,l="/"){return hb(a,r,l,!1)}function hb(a,r,l,o){let h=typeof r=="string"?Ma(r):r,c=Hn(h.pathname||"/",l);if(c==null)return null;let d=_g(a);cb(d);let g=null;for(let y=0;g==null&&y<d.length;++y){let m=kb(c);g=vb(d[y],m,o)}return g}function _g(a,r=[],l=[],o="",h=!1){let c=(d,g,y=h,m)=>{let p={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(o)&&y)return;Fe(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length)}let w=dn([o,p.relativePath]),k=l.concat(p);d.children&&d.children.length>0&&(Fe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),_g(d.children,r,k,w,y)),!(d.path==null&&!d.index)&&r.push({path:w,score:wb(w,d.index),routesMeta:k})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))c(d,g);else for(let y of Hg(d.path))c(d,g,!0,y)}),r}function Hg(a){let r=a.split("/");if(r.length===0)return[];let[l,...o]=r,h=l.endsWith("?"),c=l.replace(/\?$/,"");if(o.length===0)return h?[c,""]:[c];let d=Hg(o.join("/")),g=[];return g.push(...d.map(y=>y===""?c:[c,y].join("/"))),h&&g.push(...d),g.map(y=>a.startsWith("/")&&y===""?"/":y)}function cb(a){a.sort((r,l)=>r.score!==l.score?l.score-r.score:bb(r.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var db=/^:[\w-]+$/,fb=3,mb=2,gb=1,yb=10,pb=-2,Gm=a=>a==="*";function wb(a,r){let l=a.split("/"),o=l.length;return l.some(Gm)&&(o+=pb),r&&(o+=mb),l.filter(h=>!Gm(h)).reduce((h,c)=>h+(db.test(c)?fb:c===""?gb:yb),o)}function bb(a,r){return a.length===r.length&&a.slice(0,-1).every((o,h)=>o===r[h])?a[a.length-1]-r[r.length-1]:0}function vb(a,r,l=!1){let{routesMeta:o}=a,h={},c="/",d=[];for(let g=0;g<o.length;++g){let y=o[g],m=g===o.length-1,p=c==="/"?r:r.slice(c.length)||"/",w=so({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},p),k=y.route;if(!w&&m&&l&&!o[o.length-1].route.index&&(w=so({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},p)),!w)return null;Object.assign(h,w.params),d.push({params:h,pathname:dn([c,w.pathname]),pathnameBase:Ab(dn([c,w.pathnameBase])),route:k}),w.pathnameBase!=="/"&&(c=dn([c,w.pathnameBase]))}return d}function so(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,o]=Tb(a.path,a.caseSensitive,a.end),h=r.match(l);if(!h)return null;let c=h[0],d=c.replace(/(.)\/+$/,"$1"),g=h.slice(1);return{params:o.reduce((m,{paramName:p,isOptional:w},k)=>{if(p==="*"){let _=g[k]||"";d=c.slice(0,c.length-_.length).replace(/(.)\/+$/,"$1")}const v=g[k];return w&&!v?m[p]=void 0:m[p]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:a}}function Tb(a,r=!1,l=!0){Pt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],h="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,y,m,p)=>{if(o.push({paramName:g,isOptional:y!=null}),y){let w=p.charAt(m+d.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),h+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?h+="\\/*$":a!==""&&a!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,r?void 0:"i"),o]}function kb(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Pt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function Hn(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,o=a.charAt(l);return o&&o!=="/"?null:a.slice(l)||"/"}var Sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xb(a,r="/"){let{pathname:l,search:o="",hash:h=""}=typeof a=="string"?Ma(a):a,c;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?c=Qm(l.substring(1),"/"):c=Qm(l,r)):c=r,{pathname:c,search:Cb(o),hash:Mb(h)}}function Qm(a,r){let l=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(h=>{h===".."?l.length>1&&l.pop():h!=="."&&l.push(h)}),l.length>1?l.join("/"):"/"}function Iu(a,r,l,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eb(a){return a.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function mh(a){let r=Eb(a);return r.map((l,o)=>o===r.length-1?l.pathname:l.pathnameBase)}function co(a,r,l,o=!1){let h;typeof a=="string"?h=Ma(a):(h={...a},Fe(!h.pathname||!h.pathname.includes("?"),Iu("?","pathname","search",h)),Fe(!h.pathname||!h.pathname.includes("#"),Iu("#","pathname","hash",h)),Fe(!h.search||!h.search.includes("#"),Iu("#","search","hash",h)));let c=a===""||h.pathname==="",d=c?"/":h.pathname,g;if(d==null)g=l;else{let w=r.length-1;if(!o&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),w-=1;h.pathname=k.join("/")}g=w>=0?r[w]:"/"}let y=xb(h,g),m=d&&d!=="/"&&d.endsWith("/"),p=(c||d===".")&&l.endsWith("/");return!y.pathname.endsWith("/")&&(m||p)&&(y.pathname+="/"),y}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),Ab=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Cb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Mb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,zb=class{constructor(a,r,l,o=!1){this.status=a,this.statusText=r||"",this.internal=o,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Db(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Rb(a){return a.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jg(a,r){let l=a;if(typeof l!="string"||!Sb.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let o=l,h=!1;if(Lg)try{let c=new URL(window.location.href),d=l.startsWith("//")?new URL(c.protocol+l):new URL(l),g=Hn(d.pathname,r);d.origin===c.origin&&g!=null?l=g+d.search+d.hash:h=!0}catch{Pt(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:h,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ig=["POST","PUT","PATCH","DELETE"];new Set(Ig);var Ob=["GET",...Ig];new Set(Ob);var ki=j.createContext(null);ki.displayName="DataRouter";var fo=j.createContext(null);fo.displayName="DataRouterState";var Bb=j.createContext(!1),Ug=j.createContext({isTransitioning:!1});Ug.displayName="ViewTransition";var Nb=j.createContext(new Map);Nb.displayName="Fetchers";var _b=j.createContext(null);_b.displayName="Await";var It=j.createContext(null);It.displayName="Navigation";var Rr=j.createContext(null);Rr.displayName="Location";var rn=j.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var gh=j.createContext(null);gh.displayName="RouteError";var qg="REACT_ROUTER_ERROR",Hb="REDIRECT",Lb="ROUTE_ERROR_RESPONSE";function jb(a){if(a.startsWith(`${qg}:${Hb}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Ib(a){if(a.startsWith(`${qg}:${Lb}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new zb(r.status,r.statusText,r.data)}catch{}}function Ub(a,{relative:r}={}){Fe(Si(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=j.useContext(It),{hash:h,pathname:c,search:d}=Or(a,{relative:r}),g=c;return l!=="/"&&(g=c==="/"?l:dn([l,c])),o.createHref({pathname:g,search:d,hash:h})}function Si(){return j.useContext(Rr)!=null}function mn(){return Fe(Si(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Rr).location}var Yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wg(a){j.useContext(It).static||j.useLayoutEffect(a)}function Vg(){let{isDataRoute:a}=j.useContext(rn);return a?Pb():qb()}function qb(){Fe(Si(),"useNavigate() may be used only in the context of a <Router> component.");let a=j.useContext(ki),{basename:r,navigator:l}=j.useContext(It),{matches:o}=j.useContext(rn),{pathname:h}=mn(),c=JSON.stringify(mh(o)),d=j.useRef(!1);return Wg(()=>{d.current=!0}),j.useCallback((y,m={})=>{if(Pt(d.current,Yg),!d.current)return;if(typeof y=="number"){l.go(y);return}let p=co(y,JSON.parse(c),h,m.relative==="path");a==null&&r!=="/"&&(p.pathname=p.pathname==="/"?r:dn([r,p.pathname])),(m.replace?l.replace:l.push)(p,m.state,m)},[r,l,c,h,a])}j.createContext(null);function Gg(){let{matches:a}=j.useContext(rn),r=a[a.length-1];return r?r.params:{}}function Or(a,{relative:r}={}){let{matches:l}=j.useContext(rn),{pathname:o}=mn(),h=JSON.stringify(mh(l));return j.useMemo(()=>co(a,JSON.parse(h),o,r==="path"),[a,h,o,r])}function Yb(a,r){return Qg(a,r)}function Qg(a,r,l){Fe(Si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=j.useContext(It),{matches:h}=j.useContext(rn),c=h[h.length-1],d=c?c.params:{},g=c?c.pathname:"/",y=c?c.pathnameBase:"/",m=c&&c.route;{let O=m&&m.path||"";Fg(g,!m||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let p=mn(),w;if(r){let O=typeof r=="string"?Ma(r):r;Fe(y==="/"||O.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`),w=O}else w=p;let k=w.pathname||"/",v=k;if(y!=="/"){let O=y.replace(/^\//,"").split("/");v="/"+k.replace(/^\//,"").split("/").slice(O.length).join("/")}let _=Ng(a,{pathname:v});Pt(m||_!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Xb(_&&_.map(O=>Object.assign({},O,{params:Object.assign({},d,O.params),pathname:dn([y,o.encodeLocation?o.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?y:dn([y,o.encodeLocation?o.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),h,l);return r&&H?j.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},H):H}function Wb(){let a=$b(),r=Db(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},r),l?j.createElement("pre",{style:h},l):null,d)}var Vb=j.createElement(Wb,null),Xg=class extends j.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const l=Ib(a.digest);l&&(a=l)}let r=a!==void 0?j.createElement(rn.Provider,{value:this.props.routeContext},j.createElement(gh.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?j.createElement(Gb,{error:a},r):r}};Xg.contextType=Bb;var Uu=new WeakMap;function Gb({children:a,error:r}){let{basename:l}=j.useContext(It);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=jb(r.digest);if(o){let h=Uu.get(r);if(h)throw h;let c=jg(o.location,l);if(Lg&&!Uu.get(r))if(c.isExternal||o.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw Uu.set(r,d),d}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function Qb({routeContext:a,match:r,children:l}){let o=j.useContext(ki);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(rn.Provider,{value:a},l)}function Xb(a,r=[],l){let o=l?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let h=a,c=o?.errors;if(c!=null){let p=h.findIndex(w=>w.route.id&&c?.[w.route.id]!==void 0);Fe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),h=h.slice(0,Math.min(h.length,p+1))}let d=!1,g=-1;if(l&&o){d=o.renderFallback;for(let p=0;p<h.length;p++){let w=h[p];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=p),w.route.id){let{loaderData:k,errors:v}=o,_=w.route.loader&&!k.hasOwnProperty(w.route.id)&&(!v||v[w.route.id]===void 0);if(w.route.lazy||_){l.isStatic&&(d=!0),g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}}let y=l?.onError,m=o&&y?(p,w)=>{y(p,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Rb(o.matches),errorInfo:w})}:void 0;return h.reduceRight((p,w,k)=>{let v,_=!1,H=null,O=null;o&&(v=c&&w.route.id?c[w.route.id]:void 0,H=w.route.errorElement||Vb,d&&(g<0&&k===0?(Fg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,O=null):g===k&&(_=!0,O=w.route.hydrateFallbackElement||null)));let B=r.concat(h.slice(0,k+1)),F=()=>{let V;return v?V=H:_?V=O:w.route.Component?V=j.createElement(w.route.Component,null):w.route.element?V=w.route.element:V=p,j.createElement(Qb,{match:w,routeContext:{outlet:p,matches:B,isDataRoute:o!=null},children:V})};return o&&(w.route.ErrorBoundary||w.route.errorElement||k===0)?j.createElement(Xg,{location:o.location,revalidation:o.revalidation,component:H,error:v,children:F(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):F()},null)}function yh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fb(a){let r=j.useContext(ki);return Fe(r,yh(a)),r}function Kb(a){let r=j.useContext(fo);return Fe(r,yh(a)),r}function Zb(a){let r=j.useContext(rn);return Fe(r,yh(a)),r}function ph(a){let r=Zb(a),l=r.matches[r.matches.length-1];return Fe(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function Jb(){return ph("useRouteId")}function $b(){let a=j.useContext(gh),r=Kb("useRouteError"),l=ph("useRouteError");return a!==void 0?a:r.errors?.[l]}function Pb(){let{router:a}=Fb("useNavigate"),r=ph("useNavigate"),l=j.useRef(!1);return Wg(()=>{l.current=!0}),j.useCallback(async(h,c={})=>{Pt(l.current,Yg),l.current&&(typeof h=="number"?await a.navigate(h):await a.navigate(h,{fromRouteId:r,...c}))},[a,r])}var Xm={};function Fg(a,r,l){!r&&!Xm[a]&&(Xm[a]=!0,Pt(!1,l))}j.memo(ev);function ev({routes:a,future:r,state:l,isStatic:o,onError:h}){return Qg(a,void 0,{state:l,isStatic:o,onError:h})}function Kg({to:a,replace:r,state:l,relative:o}){Fe(Si(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=j.useContext(It);Pt(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(rn),{pathname:d}=mn(),g=Vg(),y=co(a,mh(c),d,o==="path"),m=JSON.stringify(y);return j.useEffect(()=>{g(JSON.parse(m),{replace:r,state:l,relative:o})},[g,m,o,r,l]),null}function io(a){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tv({basename:a="/",children:r=null,location:l,navigationType:o="POP",navigator:h,static:c=!1,unstable_useTransitions:d}){Fe(!Si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),y=j.useMemo(()=>({basename:g,navigator:h,static:c,unstable_useTransitions:d,future:{}}),[g,h,c,d]);typeof l=="string"&&(l=Ma(l));let{pathname:m="/",search:p="",hash:w="",state:k=null,key:v="default",unstable_mask:_}=l,H=j.useMemo(()=>{let O=Hn(m,g);return O==null?null:{location:{pathname:O,search:p,hash:w,state:k,key:v,unstable_mask:_},navigationType:o}},[g,m,p,w,k,v,o,_]);return Pt(H!=null,`<Router basename="${g}"> is not able to match the URL "${m}${p}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:j.createElement(It.Provider,{value:y},j.createElement(Rr.Provider,{children:r,value:H}))}function nv({children:a,location:r}){return Yb(nh(a),r)}function nh(a,r=[]){let l=[];return j.Children.forEach(a,(o,h)=>{if(!j.isValidElement(o))return;let c=[...r,h];if(o.type===j.Fragment){l.push.apply(l,nh(o.props.children,c));return}Fe(o.type===io,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=nh(o.props.children,c)),l.push(d)}),l}var ro="get",lo="application/x-www-form-urlencoded";function mo(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function av(a){return mo(a)&&a.tagName.toLowerCase()==="button"}function iv(a){return mo(a)&&a.tagName.toLowerCase()==="form"}function rv(a){return mo(a)&&a.tagName.toLowerCase()==="input"}function lv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ov(a,r){return a.button===0&&(!r||r==="_self")&&!lv(a)}var eo=null;function sv(){if(eo===null)try{new FormData(document.createElement("form"),0),eo=!1}catch{eo=!0}return eo}var uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qu(a){return a!=null&&!uv.has(a)?(Pt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lo}"`),null):a}function hv(a,r){let l,o,h,c,d;if(iv(a)){let g=a.getAttribute("action");o=g?Hn(g,r):null,l=a.getAttribute("method")||ro,h=qu(a.getAttribute("enctype"))||lo,c=new FormData(a)}else if(av(a)||rv(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=a.getAttribute("formaction")||g.getAttribute("action");if(o=y?Hn(y,r):null,l=a.getAttribute("formmethod")||g.getAttribute("method")||ro,h=qu(a.getAttribute("formenctype"))||qu(g.getAttribute("enctype"))||lo,c=new FormData(g,a),!sv()){let{name:m,type:p,value:w}=a;if(p==="image"){let k=m?`${m}.`:"";c.append(`${k}x`,"0"),c.append(`${k}y`,"0")}else m&&c.append(m,w)}}else{if(mo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=ro,o=null,h=lo,d=a}return c&&h==="text/plain"&&(d=c,c=void 0),{action:o,method:l.toLowerCase(),encType:h,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wh(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function cv(a,r,l,o){let h=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${o}`:h.pathname=`${h.pathname}.${o}`:h.pathname==="/"?h.pathname=`_root.${o}`:r&&Hn(h.pathname,r)==="/"?h.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${o}`,h}async function dv(a,r){if(a.id in r)return r[a.id];try{let l=await import(a.module);return r[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function mv(a,r,l){let o=await Promise.all(a.map(async h=>{let c=r.routes[h.route.id];if(c){let d=await dv(c,l);return d.links?d.links():[]}return[]}));return wv(o.flat(1).filter(fv).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Fm(a,r,l,o,h,c){let d=(y,m)=>l[m]?y.route.id!==l[m].route.id:!0,g=(y,m)=>l[m].pathname!==y.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==y.params["*"];return c==="assets"?r.filter((y,m)=>d(y,m)||g(y,m)):c==="data"?r.filter((y,m)=>{let p=o.routes[y.route.id];if(!p||!p.hasLoader)return!1;if(d(y,m)||g(y,m))return!0;if(y.route.shouldRevalidate){let w=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function gv(a,r,{includeHydrateFallback:l}={}){return yv(a.map(o=>{let h=r.routes[o.route.id];if(!h)return[];let c=[h.module];return h.clientActionModule&&(c=c.concat(h.clientActionModule)),h.clientLoaderModule&&(c=c.concat(h.clientLoaderModule)),l&&h.hydrateFallbackModule&&(c=c.concat(h.hydrateFallbackModule)),h.imports&&(c=c.concat(h.imports)),c}).flat(1))}function yv(a){return[...new Set(a)]}function pv(a){let r={},l=Object.keys(a).sort();for(let o of l)r[o]=a[o];return r}function wv(a,r){let l=new Set;return new Set(r),a.reduce((o,h)=>{let c=JSON.stringify(pv(h));return l.has(c)||(l.add(c),o.push({key:c,link:h})),o},[])}function Zg(){let a=j.useContext(ki);return wh(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function bv(){let a=j.useContext(fo);return wh(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var bh=j.createContext(void 0);bh.displayName="FrameworkContext";function Jg(){let a=j.useContext(bh);return wh(a,"You must render this element inside a <HydratedRouter> element"),a}function vv(a,r){let l=j.useContext(bh),[o,h]=j.useState(!1),[c,d]=j.useState(!1),{onFocus:g,onBlur:y,onMouseEnter:m,onMouseLeave:p,onTouchStart:w}=r,k=j.useRef(null);j.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let H=B=>{B.forEach(F=>{d(F.isIntersecting)})},O=new IntersectionObserver(H,{threshold:.5});return k.current&&O.observe(k.current),()=>{O.disconnect()}}},[a]),j.useEffect(()=>{if(o){let H=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(H)}}},[o]);let v=()=>{h(!0)},_=()=>{h(!1),d(!1)};return l?a!=="intent"?[c,k,{}]:[c,k,{onFocus:Tr(g,v),onBlur:Tr(y,_),onMouseEnter:Tr(m,v),onMouseLeave:Tr(p,_),onTouchStart:Tr(w,v)}]:[!1,k,{}]}function Tr(a,r){return l=>{a&&a(l),l.defaultPrevented||r(l)}}function Tv({page:a,...r}){let{router:l}=Zg(),o=j.useMemo(()=>Ng(l.routes,a,l.basename),[l.routes,a,l.basename]);return o?j.createElement(Sv,{page:a,matches:o,...r}):null}function kv(a){let{manifest:r,routeModules:l}=Jg(),[o,h]=j.useState([]);return j.useEffect(()=>{let c=!1;return mv(a,r,l).then(d=>{c||h(d)}),()=>{c=!0}},[a,r,l]),o}function Sv({page:a,matches:r,...l}){let o=mn(),{future:h,manifest:c,routeModules:d}=Jg(),{basename:g}=Zg(),{loaderData:y,matches:m}=bv(),p=j.useMemo(()=>Fm(a,r,m,c,o,"data"),[a,r,m,c,o]),w=j.useMemo(()=>Fm(a,r,m,c,o,"assets"),[a,r,m,c,o]),k=j.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let H=new Set,O=!1;if(r.forEach(F=>{let V=c.routes[F.route.id];!V||!V.hasLoader||(!p.some(re=>re.route.id===F.route.id)&&F.route.id in y&&d[F.route.id]?.shouldRevalidate||V.hasClientLoader?O=!0:H.add(F.route.id))}),H.size===0)return[];let B=cv(a,g,h.unstable_trailingSlashAwareDataRequests,"data");return O&&H.size>0&&B.searchParams.set("_routes",r.filter(F=>H.has(F.route.id)).map(F=>F.route.id).join(",")),[B.pathname+B.search]},[g,h.unstable_trailingSlashAwareDataRequests,y,o,c,p,r,a,d]),v=j.useMemo(()=>gv(w,c),[w,c]),_=kv(w);return j.createElement(j.Fragment,null,k.map(H=>j.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...l})),v.map(H=>j.createElement("link",{key:H,rel:"modulepreload",href:H,...l})),_.map(({key:H,link:O})=>j.createElement("link",{key:H,nonce:l.nonce,...O,crossOrigin:O.crossOrigin??l.crossOrigin})))}function xv(...a){return r=>{a.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ev&&(window.__reactRouterVersion="7.13.1")}catch{}function Av({basename:a,children:r,unstable_useTransitions:l,window:o}){let h=j.useRef();h.current==null&&(h.current=lb({window:o,v5Compat:!0}));let c=h.current,[d,g]=j.useState({action:c.action,location:c.location}),y=j.useCallback(m=>{l===!1?g(m):j.startTransition(()=>g(m))},[l]);return j.useLayoutEffect(()=>c.listen(y),[c,y]),j.createElement(tv,{basename:a,children:r,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:l})}var $g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=j.forwardRef(function({onClick:r,discover:l="render",prefetch:o="none",relative:h,reloadDocument:c,replace:d,unstable_mask:g,state:y,target:m,to:p,preventScrollReset:w,viewTransition:k,unstable_defaultShouldRevalidate:v,..._},H){let{basename:O,navigator:B,unstable_useTransitions:F}=j.useContext(It),V=typeof p=="string"&&$g.test(p),re=jg(p,O);p=re.to;let se=Ub(p,{relative:h}),I=mn(),J=null;if(g){let Q=co(g,[],I.unstable_mask?I.unstable_mask.pathname:"/",!0);O!=="/"&&(Q.pathname=Q.pathname==="/"?O:dn([O,Q.pathname])),J=B.createHref(Q)}let[ce,fe,be]=vv(o,_),ee=Dv(p,{replace:d,unstable_mask:g,state:y,target:m,preventScrollReset:w,relative:h,viewTransition:k,unstable_defaultShouldRevalidate:v,unstable_useTransitions:F});function P(Q){r&&r(Q),Q.defaultPrevented||ee(Q)}let Te=!(re.isExternal||c),ne=j.createElement("a",{..._,...be,href:(Te?J:void 0)||re.absoluteURL||se,onClick:Te?P:r,ref:xv(H,fe),target:m,"data-discover":!V&&l==="render"?"true":void 0});return ce&&!V?j.createElement(j.Fragment,null,ne,j.createElement(Tv,{page:se})):ne});$t.displayName="Link";var Cv=j.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:o="",end:h=!1,style:c,to:d,viewTransition:g,children:y,...m},p){let w=Or(d,{relative:m.relative}),k=mn(),v=j.useContext(fo),{navigator:_,basename:H}=j.useContext(It),O=v!=null&&_v(w)&&g===!0,B=_.encodeLocation?_.encodeLocation(w).pathname:w.pathname,F=k.pathname,V=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;l||(F=F.toLowerCase(),V=V?V.toLowerCase():null,B=B.toLowerCase()),V&&H&&(V=Hn(V,H)||V);const re=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let se=F===B||!h&&F.startsWith(B)&&F.charAt(re)==="/",I=V!=null&&(V===B||!h&&V.startsWith(B)&&V.charAt(B.length)==="/"),J={isActive:se,isPending:I,isTransitioning:O},ce=se?r:void 0,fe;typeof o=="function"?fe=o(J):fe=[o,se?"active":null,I?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let be=typeof c=="function"?c(J):c;return j.createElement($t,{...m,"aria-current":ce,className:fe,ref:p,style:be,to:d,viewTransition:g},typeof y=="function"?y(J):y)});Cv.displayName="NavLink";var Mv=j.forwardRef(({discover:a="render",fetcherKey:r,navigate:l,reloadDocument:o,replace:h,state:c,method:d=ro,action:g,onSubmit:y,relative:m,preventScrollReset:p,viewTransition:w,unstable_defaultShouldRevalidate:k,...v},_)=>{let{unstable_useTransitions:H}=j.useContext(It),O=Bv(),B=Nv(g,{relative:m}),F=d.toLowerCase()==="get"?"get":"post",V=typeof g=="string"&&$g.test(g),re=se=>{if(y&&y(se),se.defaultPrevented)return;se.preventDefault();let I=se.nativeEvent.submitter,J=I?.getAttribute("formmethod")||d,ce=()=>O(I||se.currentTarget,{fetcherKey:r,method:J,navigate:l,replace:h,state:c,relative:m,preventScrollReset:p,viewTransition:w,unstable_defaultShouldRevalidate:k});H&&l!==!1?j.startTransition(()=>ce()):ce()};return j.createElement("form",{ref:_,method:F,action:B,onSubmit:o?y:re,...v,"data-discover":!V&&a==="render"?"true":void 0})});Mv.displayName="Form";function zv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pg(a){let r=j.useContext(ki);return Fe(r,zv(a)),r}function Dv(a,{target:r,replace:l,unstable_mask:o,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:m}={}){let p=Vg(),w=mn(),k=Or(a,{relative:d});return j.useCallback(v=>{if(ov(v,r)){v.preventDefault();let _=l!==void 0?l:zr(w)===zr(k),H=()=>p(a,{replace:_,unstable_mask:o,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:y});m?j.startTransition(()=>H()):H()}},[w,p,k,l,o,h,r,a,c,d,g,y,m])}var Rv=0,Ov=()=>`__${String(++Rv)}__`;function Bv(){let{router:a}=Pg("useSubmit"),{basename:r}=j.useContext(It),l=Jb(),o=a.fetch,h=a.navigate;return j.useCallback(async(c,d={})=>{let{action:g,method:y,encType:m,formData:p,body:w}=hv(c,r);if(d.navigate===!1){let k=d.fetcherKey||Ov();await o(k,l,d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:p,body:w,formMethod:d.method||y,formEncType:d.encType||m,flushSync:d.flushSync})}else await h(d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:p,body:w,formMethod:d.method||y,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:l,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,h,r,l])}function Nv(a,{relative:r}={}){let{basename:l}=j.useContext(It),o=j.useContext(rn);Fe(o,"useFormAction must be used inside a RouteContext");let[h]=o.matches.slice(-1),c={...Or(a||".",{relative:r})},d=mn();if(a==null){c.search=d.search;let g=new URLSearchParams(c.search),y=g.getAll("index");if(y.some(p=>p==="")){g.delete("index"),y.filter(w=>w).forEach(w=>g.append("index",w));let p=g.toString();c.search=p?`?${p}`:""}}return(!a||a===".")&&h.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:dn([l,c.pathname])),zr(c)}function _v(a,{relative:r}={}){let l=j.useContext(Ug);Fe(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Pg("useViewTransitionState"),h=Or(a,{relative:r});if(!l.isTransitioning)return!1;let c=Hn(l.currentLocation.pathname,o)||l.currentLocation.pathname,d=Hn(l.nextLocation.pathname,o)||l.nextLocation.pathname;return so(h.pathname,d)!=null||so(h.pathname,c)!=null}const Hv=[{day:1,title:"What Is Interest?",date:"2026-02-27",image:"images/day-1.png",sonnet:`**🪶 Sonnet I: The Lending of Seeds**

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

❓ *Tomorrow's tale: Kael has learned to earn, to compound, and to borrow wisely. But how much of each harvest should he keep for himself — and how much should he replant?*`},{day:5,title:"Pay Yourself First — The 50/30/20 Rule",date:"2026-03-01",image:"images/financial-independence/day-5.jpg",sonnet:`**🪶 Sonnet V: The First Harvest Keeper**

Before the merchant comes, before the tax,
Before the baker takes his loaf of bread,
Before the tailor mends the coat that cracks—
The wise man sets his portion first, instead.

For he who pays the world before himself
Finds nothing left when winter's shadow falls.
His seeds are spent on every merchant's shelf,
And empty is the cellar past his walls.

But she who takes the first fruit of her toil
And plants it deep where no one else can reach,
Builds slowly on the compound-fertile soil
A fortress time and patience came to teach.

*Pay every debt, but pay yourself the first—*
*For no one guards your harvest but your thirst.*`,standard:`**💰 Day 5: Pay Yourself First — The 50/30/20 Rule**

Now that you understand earning, compounding, and the difference between good and bad debt, we answer the practical question: *how much of your income should you save versus spend?*

🧱 **The Concept**
Pay Yourself First means treating savings like your most important bill — it comes out before anything else, not after. The 50/30/20 rule gives you a simple framework: 50% for needs, 30% for wants, 20% for savings and debt payoff.

❓ **Why It Matters**
Most people save whatever's "left over" at the end of the month. Spoiler: there's never anything left over. By flipping the order — saving first, spending second — you guarantee your future self gets fed. This single habit separates people who build wealth from people who wonder where their money went.

⚙️ **How It Works**
Imagine your paycheck is a harvest of 100 seeds. Before you buy anything — before rent, groceries, entertainment — you take 20 seeds and put them in your planting jar. They're gone. Untouchable. They go straight to savings or investments.

The remaining 80 seeds split like this:
- **50 seeds (Needs)**: Rent, food, utilities, insurance, minimum debt payments — the non-negotiables
- **30 seeds (Wants)**: Dining out, streaming, hobbies, new clothes — the things you enjoy but could survive without

The 20% isn't a suggestion — it's a minimum. If you can do 30% or 40%, even better. The point is: your future self eats first.

📖 **Definitions**
• **Pay Yourself First**: Automatically setting aside savings before discretionary spending
• **50/30/20 Rule**: A budgeting framework — 50% needs, 30% wants, 20% savings/investing
• **Emergency Fund**: 3-6 months of expenses saved in cash for unexpected events
• **Automation**: Setting up auto-transfers to savings so willpower isn't required

🎯 **Buffett Wisdom**
"Do not save what is left after spending; spend what is left after saving." Buffett lived in the same modest house he bought in 1958 for $31,500 — even as a billionaire. He understood that wealth isn't about earning more; it's about keeping more of what you earn.

❓ **Tomorrow's Question:**
*You're saving 20% — but where should you put it? What's the difference between a savings account, the stock market, and other places your money can grow?*`,parable:`**🏰 The Parable of the First Harvest Keeper**

Kael had been planting diligently. His small patch of seeds was growing — slowly, but growing. Yet each harvest, the same thing happened: the baker needed payment, the toolsmith needed payment, the landlord needed payment. By the time everyone was paid, Kael's planting jar was nearly empty.

---

"I earn well enough," he told Sable one evening, frustrated. "But there's never anything left to plant."

Sable didn't look up from her tea. "That's because you're paying yourself last."

"What do you mean? I pay what I owe."

"Exactly. You pay the baker. The toolsmith. The landlord. The merchant. And whatever crumbs remain, you plant." She finally looked at him. "Tell me — if planting is the most important thing you do, why does it get the leftovers?"

---

Kael had no answer.

"Here is what I did when I was young," Sable said. "Every harvest, before I paid anyone — before the baker, before the landlord, before I even bought dinner — I took two handfuls out of every ten and put them in a jar behind a locked door."

"But what about your bills?"

"I paid them from the remaining eight handfuls. And you know what I discovered? Eight handfuls was always enough. I adjusted. I found cheaper bread. I mended my own clothes. But those two handfuls? They went into the planting jar *every single harvest*, without exception."

---

"Two out of ten," Kael repeated. "That's…"

"Twenty percent. And here's the secret — I never *decided* to save. I made it automatic. The jar behind the locked door filled itself because I never gave myself the chance to spend it. The decision was made once, and then it was done."

She tapped the table. "Most people in this village earn enough to build a grove. But they pay the world first and themselves last. So the world gets rich, and they stay poor."

---

Kael went home that night and found a jar with a heavy lid. He placed it on the highest shelf, behind a sack of flour.

The next morning, when Tobren paid him for lending seeds, Kael counted ten handfuls — and immediately put two in the jar before touching the rest.

It felt strange. Like he was stealing from himself. But by week's end, he realized Sable was right: eight handfuls covered everything he needed. And the jar on the high shelf was fuller than his planting fund had ever been.

---

**🌾 The Moral**

The world will always find ways to spend your harvest. Bakers, merchants, landlords, temptations — they line up before you can blink. The only way to guarantee your future is to pay yourself *first*, before anyone else gets a seed.

> *"The harvest keeper who waits until the end finds nothing left to keep. The one who takes her share first finds that the rest is always enough."*

❓ *Tomorrow's tale: Kael's jar is filling — but where should he plant those saved seeds? Under his mattress? In Tobren's field? Somewhere else entirely?*`},{day:6,title:"The Investment Ladder — Where to Put Your Money",date:"2026-03-01",image:"images/financial-independence/day-6.jpg",sonnet:`**🪶 Sonnet VI: The Investment Ladder**

As gardeners tend their plots with careful hand,
Some seeds for safety in the fertile loam,
Some cast toward seasons they can understand,
Some planted wild where exotic flowers roam.

The prudent soul builds ladders rung by rung,
With emergency gold secured below,
While bonds and funds, like grain when harvest-young,
Provide the steady yield that gardens know.

But at the heights where starlight meets the earth,
The boldest seeds may bloom or fade away,
Their risk rewarded with transcendent worth,
Or lost like morning mist at break of day.

*Each dollar finds its proper place and time,*
*From safety's roots to growth's celestial climb.*`,standard:`💰 Day 6: The Investment Ladder — Where to Put Your Money

Yesterday we learned to pay yourself first with the 50/30/20 rule. The answer to where your 20% should go depends on your timeline and risk tolerance — different money belongs in different places.

🧱 **The Concept**
The Investment Ladder is a hierarchy of where to put your money based on when you'll need it and how much risk you can handle. Cash for emergencies sits at the bottom, long-term investments at the top.

❓ **Why It Matters**
Putting all your money in a savings account earning 0.5% while inflation runs at 3% means you're losing purchasing power every year. But putting your emergency fund in volatile stocks is equally dangerous. The ladder ensures each dollar is in the right place for its purpose.

⚙️ **How It Works**
Think of your money like water flowing up a ladder — it fills each rung completely before moving to the next:

**Rung 1 (Foundation)**: Emergency fund in high-yield savings (3-6 months expenses)
**Rung 2 (Safety)**: CDs or bonds for money needed in 1-5 years
**Rung 3 (Growth)**: Index funds for retirement and long-term goals (5+ years)
**Rung 4 (Speculation)**: Individual stocks, crypto — only after the foundation is solid

A 25-year-old might have 10% in cash, 90% in stocks. A 60-year-old approaching retirement might reverse that ratio. The ladder adapts to your life stage and goals.

📖 **Definitions**
• **Investment Ladder**: A hierarchy of investment types ranked by risk and liquidity
• **High-Yield Savings**: Bank accounts paying 4-5% interest (vs. 0.5% for regular savings)
• **Index Funds**: Baskets of hundreds of stocks that track market averages
• **Asset Allocation**: The percentage split of your money across different investment types
• **Risk Tolerance**: How much volatility you can handle without losing sleep

🎯 **Buffett Wisdom**
"Risk comes from not knowing what you're doing." Buffett keeps billions in cash when he can't find good investments, but puts the rest in businesses he understands for decades. The ladder isn't about avoiding all risk — it's about taking the right risks with the right money.

❓ **Tomorrow's Question:**
*You've built your ladder — but how do you pick which specific investments to buy? What makes one stock or fund better than another?*`,parable:`The morning after Sable's lesson on the seed harvest, Kael found the elder tending to several different gardens behind his cottage. Some plots held sturdy root vegetables, others delicate herbs, and one contained exotic flowering plants that seemed to shimmer in the dawn light.

"Each plant requires different soil, different care," Sable observed, brushing dirt from his weathered hands. "Your saved seeds are like these plants — they need different homes to flourish."

Kael watched as Sable gestured to a sturdy wooden box filled with dark, rich earth. "Here I keep my emergency turnips — hardy, reliable, ready to harvest when winter comes unexpectedly. They grow slowly but never fail." He moved to a second plot with neat rows of grain. "These are for the seasons I can see coming — not as safe as turnips, but they yield more when tended properly."

Finally, Sable led Kael to the shimmering flowers. "And these," he smiled, "are my dreams made manifest. They might bloom into something magnificent, or they might wither. But I plant them only after my turnips and grain are secure."

Tobren approached, carrying a heavy sack. "I used to plant everything in one field," the farmer admitted. "Lost it all to a single bad storm. Now I spread my seeds like Sable taught me — some safe, some growing, some reaching for the stars."

Sable nodded approvingly. "The wise gardener plants not just for this season, but for all the seasons of his life. Young roots can weather storms that would topple old trees, while mature gardens need steady ground beneath them."

As they walked back through the different plots, Kael marveled at how each served its purpose — the emergency turnips promised security, the grain offered steady growth, and the exotic flowers held the possibility of extraordinary beauty. The garden was a ladder of hope, each rung supporting the next.

**Moral:** Like a wise gardener tends different plots for different purposes, the prudent person places their money where it can grow according to its intended use and the seasons of life.

*Tomorrow, Sable will teach Kael the ancient art of choosing the finest seeds — for not all that glitters bears fruit, and not all investments that promise riches deliver them.*`},{day:7,title:"The Quality Filter — How to Pick Winning Investments",date:"2026-03-01",image:"images/financial-independence/day-7.jpg",sonnet:`**🪶 Sonnet VII: The Quality Filter**

Among the stones that glitter in the light,
Not all possess the worth that meets the eye;
Some crystals clear will last through endless night,
While others crack when testing seasons try.

The merchant wise knows how to separate
The lasting gems from fool's gold cheaply sold;
Three questions asked will help discriminate:
What moats protect? What numbers can unfold?

What leaders guide with wisdom, skill, and care?
For companies, like stones, must pass the test
Of time and pressure—those beyond compare
Will compound wealth and serve investors best.

*Thus Buffett teaches: seek not price alone,*
*But quality that's carved in lasting stone.*`,standard:`💰 Day 7: The Quality Filter — How to Pick Winning Investments

Yesterday we built our Investment Ladder to match money with timeframes. The answer to picking specific investments lies in filtering for quality — businesses with sustainable advantages that compound wealth over time.

🧱 **The Concept**
The Quality Filter is a screening process to identify investments with durable competitive advantages, strong financials, and competent management — the hallmarks of businesses that create long-term wealth.

❓ **Why It Matters**
Not all stocks are created equal. Some companies have "moats" — competitive advantages that protect their profits from competitors. Others are commodity businesses where profits get competed away. Quality companies compound wealth; poor ones destroy it. The difference between investing in Coca-Cola versus a failing retailer can mean the difference between retirement and poverty.

⚙️ **How It Works**
Buffett's quality filter has three main screens:

**Screen 1 (The Moat)**: Does the business have sustainable competitive advantages? Strong brands (Apple), network effects (Visa), switching costs (software), or economies of scale (Walmart) create moats that protect profits.

**Screen 2 (The Numbers)**: Look for consistent profitability, growing revenues, manageable debt, and high returns on equity. A company earning 20% on shareholder equity year after year is compounding wealth faster than one earning 5%.

**Screen 3 (The People)**: Management should be competent, honest, and shareholder-friendly. Do they reinvest profits wisely or waste them on ego projects? Are they buying back shares when undervalued or issuing stock to enrich themselves?

For beginners, broad market index funds like the S&P 500 provide instant diversification across hundreds of quality companies, removing the need to pick individual winners.

📖 **Definitions**
• **Economic Moat**: Sustainable competitive advantages that protect a company's profits
• **Return on Equity (ROE)**: How much profit a company generates per dollar of shareholder investment
• **Competitive Advantage**: Unique strengths that allow a company to outperform competitors
• **Management Quality**: The competence and integrity of a company's leadership team
• **Diversification**: Spreading investments across many companies to reduce risk

🎯 **Buffett Wisdom**
"It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price." Quality businesses compound wealth through reinvestment and growth, while poor businesses destroy it regardless of how cheaply you bought them.

❓ **Tomorrow's Question:**
*You've found quality investments — but when is the right time to buy? How do you know if a stock is fairly priced or overvalued?*`,parable:`The morning sun cast long shadows across the village square as Kael found Sable examining a collection of polished stones spread across a wooden table. Each stone gleamed differently in the light — some rough and dull, others smooth and brilliant.

"What makes one stone more valuable than another, Elder?" Kael asked, drawn by the display.

Sable smiled, lifting a perfectly clear crystal. "Observe carefully, young seeker. This crystal has three qualities that make it precious: clarity, hardness, and rarity. Remove any one, and its value diminishes." He set it aside and picked up a cloudy, brittle stone. "This one may look similar to untrained eyes, but it lacks the enduring qualities."

Tobren approached, carrying a sack of grain. "Like choosing seeds for planting," he added thoughtfully. "I could buy cheap seeds that sprout quickly but produce weak crops, or invest in hardy varieties that yield abundantly year after year."

"Precisely," Sable nodded. "Whether stones, seeds, or the businesses we invest in, we must learn to recognize true quality. A business is like Tobren's seeds — we want those with deep roots, strong growth, and the ability to thrive in changing seasons."

Kael studied the stones more carefully. "How do I learn to see these qualities?"

"Three questions guide us," Sable replied, arranging three stones in a row. "First, does this business have protections that competitors cannot easily overcome — like a crystal's unique structure? Second, do the numbers show consistent strength and growth — like a stone's proven hardness? Third, are the people running it trustworthy and skilled — like a jeweler who cuts with precision rather than haste?"

Tobren chuckled. "I've learned the hard way that the cheapest seeds often cost the most in the end. Better to pay fairly for quality than chase bargains that disappoint."

As the morning lesson concluded, Sable gathered the stones carefully. "Remember, young Kael — in a world full of glittering distractions, the ability to recognize true quality is the investor's greatest skill."

**Moral**: *Quality reveals itself to those who learn to look beyond surface appearances to the enduring strengths beneath.*

*Tomorrow, Kael would discover that even the finest stones must be acquired at the right price...*`},{day:8,title:"The Price Tag — Valuing Investments Like a Business Owner",date:"2026-03-01",image:"images/financial-independence/day-8.jpg",sonnet:`**🪶 Sonnet VIII: The Price Tag**

The merchant's scale weighs gold, but not true worth,
For price is but emotion dressed as fact.
While markets swing between great joy and dearth,
The wise investor keeps his mind intact.

A tree that bears sweet fruit year after year
Holds value in its roots and fertile ground,
Not in the seller's greed or buyer's fear,
Nor in the crowd's applause or worried sound.

The patient gardener counts each future spring,
Each harvest that the seasons will bestow,
And calculates what golden years will bring
Before he pays for what he hopes to grow.

*Let others chase the market's fickle dance—*
*True wealth awaits the valuer's patient glance.*`,standard:`💰 Day 8: The Price Tag — Valuing Investments Like a Business Owner

Yesterday we learned to identify quality investments through Buffett's three-screen filter. The answer to pricing lies in thinking like a business owner — what would you pay to own this entire company?

🧱 **The Concept**
Intrinsic value is what a business is actually worth based on its ability to generate cash, not what the stock market says it's worth on any given day.

❓ **Why It Matters**
Price is what you pay, value is what you get. Even the best company becomes a poor investment if you overpay. The stock market is emotional — it swings between greed and fear, often pricing stocks far above or below their true worth. Patient investors who buy quality businesses below their intrinsic value and wait for the market to recognize that value create lasting wealth.

⚙️ **How It Works**
Buffett uses several methods to estimate intrinsic value:

**The Earnings Method**: If a company earns $1 billion annually and you expect 7% returns, it's worth roughly $14 billion ($1B ÷ 0.07). Compare this to the market capitalization.

**The Asset Method**: What could you sell the company's assets for? This works for banks, real estate companies, or asset-heavy businesses.

**The Growth Method**: A company growing earnings 10% annually is worth more than one growing 3%. Factor expected growth into your valuation.

**The Comparison Method**: How does the price compare to similar companies? If competitors trade at 15x earnings and your target trades at 25x, it might be overvalued.

For beginners, focus on the price-to-earnings ratio (P/E) — paying 15x annual earnings is generally safer than paying 50x.

📖 **Definitions**
• **Intrinsic Value**: The true worth of a business based on its fundamentals
• **Market Capitalization**: Total value of all company shares (share price × shares outstanding)
• **Price-to-Earnings Ratio (P/E)**: Stock price divided by annual earnings per share
• **Margin of Safety**: Buying below intrinsic value to protect against errors
• **Mr. Market**: Buffett's metaphor for the stock market's emotional pricing

🎯 **Buffett Wisdom**
"Price is what you pay; value is what you get." The stock market is there to serve you, not guide you — use its emotional swings to buy quality businesses when they're on sale.

❓ **Tomorrow's Question:**
*You've identified quality investments and learned to value them — but how do you know when to pull the trigger and actually buy?*`,parable:`The morning sun cast long shadows across the village square as Kael hurried to meet Sable at the old market stalls. The boy's mind buzzed with questions about the quality filter the elder had taught him, but today something different awaited.

"Today, young merchant," Sable said, gesturing toward the bustling marketplace, "we learn the art of the price tag. Tell me, what would you pay for Tobren's finest apple tree?"

Kael studied the gnarled tree heavy with crimson fruit. "I... I'm not sure, Master Sable. What does Tobren ask for it?"

The elder's eyes twinkled. "Ah, but that's where most traders stumble. They ask what the seller wants, not what the tree is truly worth. Come, let us think like orchard owners."

Together they examined the tree's yearly harvest, its health, its prime location. Sable showed Kael how to calculate the tree's intrinsic value — the sum of all future apple harvests, discounted for uncertainty.

"This tree yields fifty gold worth of apples yearly," Sable explained. "If we expect that for twenty years, accounting for risk and time, the tree is worth perhaps six hundred gold pieces. Yet see how Tobren's asking price changes with his mood?"

Indeed, the farmer had priced the tree at eight hundred gold when spirits were high after yesterday's successful market, but just last week, worried about drought, he would have sold for four hundred.

"The tree's ability to bear fruit hasn't changed," Kael observed, understanding dawning. "Only Tobren's feelings have."

"Precisely! The wise investor waits for fear to price quality below its worth, then strikes with the patience of a master gardener."

**Moral**: *Value lies not in the asking price, but in the true worth of future returns.*

*Tomorrow, Sable will teach Kael the final piece — when to act on these valuations...*`},{day:9,title:"The Shopping List — When Markets Go on Sale",date:"2026-03-01",image:"images/financial-independence/day-9.jpg",sonnet:`**🪶 Sonnet IX: The Shopping List**

When tempests rage through markets filled with fear,
And panic grips the hearts of lesser men,
The wise investor's opportunity draws near
To fill his vault with treasures sold again.

For quality lies broken on the floor,
Cast down by trembling hands that cannot hold,
While patient hunters seek what they're looking for:
Great businesses now trading cheap as gold.

The margin guards against our human flaw,
This cushion 'tween the price and what it's worth,
Let others chase momentum without law—
We wait for fear to offer bargains forth.

*When greed runs high, be cautious and take care,*
*When others flee in terror, boldly dare.*`,standard:`💰 Day 9: The Shopping List — When Markets Go on Sale

Yesterday we learned to calculate intrinsic value like a business owner. The answer to timing purchases lies in waiting for Mr. Market's emotional sales — when fear creates opportunities that greed would never offer.

🧱 **The Concept**
The margin of safety is the difference between a stock's intrinsic value and its market price — your protective cushion against valuation errors and market volatility.

❓ **Why It Matters**
Even the best analysis can be wrong, and markets are unpredictable. By only buying when there's a significant gap between price and value, you protect yourself from permanent losses while positioning for substantial gains. This disciplined approach turns market crashes from disasters into shopping opportunities.

⚙️ **How It Works**
Buffett typically wants at least a 25-50% margin of safety before buying:

**Example**: If you calculate a company's intrinsic value at $100 per share, wait until it trades below $75 (25% margin) or $50 (50% margin) before buying.

**Market Timing**: Don't try to time the bottom — buy when quality businesses trade significantly below fair value. Recessions, industry scares, and temporary problems often create these opportunities.

**Dollar-Cost Averaging**: If you find a quality business at a good price but aren't sure about timing, buy in portions over time to average your entry price.

**The Shopping List**: Keep a list of quality companies you understand, with target buy prices. When Mr. Market panics and drives prices down, you're ready to act while others are paralyzed by fear.

📖 **Definitions**
• **Margin of Safety**: The cushion between purchase price and intrinsic value
• **Bear Market**: Extended period of declining stock prices (20%+ drop)
• **Dollar-Cost Averaging**: Buying fixed dollar amounts at regular intervals
• **Target Price**: The maximum you're willing to pay for a specific investment
• **Contrarian Investing**: Buying when others are selling, selling when others are buying

🎯 **Buffett Wisdom**
"Be fearful when others are greedy, and greedy when others are fearful." The best buying opportunities come when the market is most pessimistic about quality businesses.

❓ **Tomorrow's Question:**
*You've bought quality businesses at good prices — but how do you know when to sell, and what mistakes should you avoid along the way?*`,parable:`The morning mist clung to the valley as Kael found Sable tending his small garden behind the cottage. The elder's weathered hands moved methodically among the herbs, selecting only the choicest leaves while leaving others to grow.

"Master Sable," Kael began, "I understand how to spot quality businesses and value them, but when do I actually buy? The prices change every day."

Sable smiled, holding up a handful of perfect sage leaves. "Tell me, young one, when do I harvest these herbs?"

"When they're ready?" Kael ventured.

"Precisely. But what if I told you I never harvest until they're more than ready — until there's abundance beyond what I need?" Sable gestured to the untouched sections of his garden. "This is my margin of safety. If I misjudge the herb's potency, if weather damages some leaves, if I drop a few on the way to market, I still have more than enough."

Tobren approached from the fields, sweat beading his brow. "Forgive the interruption, but I couldn't help overhearing. It's like buying grain for winter, isn't it, Sable?"

The elder nodded approvingly. "Indeed, friend Tobren. You keep a list of trusted merchants and the fair prices for quality grain. But you only buy when prices drop well below those fair values — when fear of oversupply or temporary troubles create abundance for the patient buyer."

"Exactly!" Tobren exclaimed. "Last autumn, everyone panicked about the early frost rumors. Grain prices plummeted, though the harvest was actually fine. I bought enough for two winters at half the normal price, while others waited for prices to stabilize."

Sable turned to Kael, his eyes twinkling. "The marketplace of investments works the same way. Keep a list of quality businesses you understand, with the prices you'd gladly pay for them. Then wait. When fear grips other investors — when they speak of doom and disaster — that's when you quietly make your purchases."

"But what if I'm wrong about the value?" Kael asked.

"That's why we demand our margin of safety," Sable replied, showing the extra herbs in his basket. "If I calculate a business is worth 100 gold pieces, I wait until I can buy it for 75, or better yet, 50. This cushion protects me from my own errors and the market's unpredictable moods."

Tobren chuckled. "I remember the year of the locust scare. Everyone was selling grain cheap, terrified the crops would fail. But I'd studied the patterns, knew the risk was overblown. While others sold in fear, I bought with confidence. The harvest was bountiful, and my extra stores fed us well through the following lean spring."

**Moral**: *True wealth comes not from predicting market movements, but from patiently waiting for fear to offer quality investments at prices that provide a generous margin of safety.*

*Tomorrow, Sable will teach Kael the most difficult lesson of all — knowing when to let go, and the costly mistakes that can destroy years of patient accumulation...*`}],Lv=[{day:1,title:"What Is a Calorie?",date:"2026-02-28",image:"images/nutrition-science/day-1.png",sonnet:`**🪶 Sonnet I: The Measure of Fire**

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

❓ *Tomorrow's tale: What are the three types of fuel — and why does Maren keep three separate hearths?*`},{day:2,title:"Macronutrients — The Three Fuels",date:"2026-02-28",image:"images/nutrition-science/day-2.png",sonnet:`**🪶 Sonnet II: The Three Hearths**

Three fires burn within the healer's hall,
Each fed by different wood, each serving need—
The first burns bright and answers hunger's call,
A flash of warmth from sugar, fruit, and seed.

The second smolders patient, firm, and true,
It mends the walls and fortifies the frame—
From egg and fish and bean, the body grew
Its sinew, muscle, bone — repaired the same.

The third burns slow, a deep and lasting glow,
A reservoir of heat against the cold—
From nut and oil, its embers barely show,
Yet carry twice the fire, if truth be told.

*Three fuels, three fires, three purposes they keep—*
*Know what you burn, and master what you eat.*`,standard:`**🍎 Day 2: Macronutrients — The Three Fuels**

Yesterday we learned that a calorie is a unit of energy — the fire your body burns. Today we answer: *what are the three types of fuel, and why does it matter which one you eat?*

🧱 **The Concept**
Macronutrients are the three main types of fuel in food: carbohydrates, protein, and fat. Each one provides calories, but they serve very different roles in your body.

❓ **Why It Matters**
Not all calories are created equal. 200 calories of chicken, 200 calories of bread, and 200 calories of olive oil affect your energy, hunger, and body composition in completely different ways. Understanding macros is how you go from "counting calories" to actually understanding nutrition.

⚙️ **How It Works**
Think of your body as a house with three needs: electricity (quick energy), building materials (structure), and a backup generator (long-term reserves).

**Carbohydrates** are electricity — they burn fast and give you immediate energy. Bread, rice, fruit, sugar — your body breaks them down quickly into glucose, which powers your brain and muscles right now. 1 gram = 4 calories.

**Protein** is building material — it repairs muscle, skin, hair, organs, and immune cells. Chicken, eggs, fish, beans — your body uses these to rebuild itself. You're constantly under construction. 1 gram = 4 calories.

**Fat** is the backup generator — it burns slow and steady, stores massive amounts of energy, and protects your organs. Nuts, oils, avocado, butter — fat carries more than double the energy of carbs or protein. 1 gram = 9 calories.

📖 **Definitions**
• **Macronutrients ("Macros")**: Nutrients your body needs in large amounts — carbs, protein, fat
• **Carbohydrates**: Quick-burning fuel; your body's preferred energy source
• **Protein**: The building and repair nutrient; essential for muscle and tissue
• **Fat**: Dense, slow-burning energy; vital for hormones and cell membranes
• **Micronutrients**: Vitamins and minerals — needed in tiny amounts (that's a future lesson!)

🎯 **Science Wisdom**
Your body can convert between fuel types in a pinch — it can turn extra carbs into fat for storage, or break down protein for energy in an emergency. But each macro does its primary job best. Eating the right balance isn't about restriction — it's about giving your body the right tool for each job.

❓ **Tomorrow's Question:**
*You know the three fuels now — but how does your body actually decide which one to burn first, and can you control it?*`,parable:`**🏰 The Parable of the Three Hearths**

The next morning, Lila woke to the smell of porridge and the crackle of three fires. Maren was already at work, tending each hearth with different fuel.

---

"You promised to tell me about the three types of fire," Lila said, pulling her blanket tighter.

Maren nodded and led her to the first hearth.

"This one I feed with dry straw and kindling." She tossed in a handful of straw — it caught instantly, blazing bright and hot, then quickly dimming. "This is the fire of **carbohydrates**. It lights fast, burns fast, and gives you energy *right now*. Bread, rice, fruit, honey — they are your body's kindling."

"It's warm," Lila said. "But it doesn't last."

"Exactly. Quick fuel for quick needs. Your brain, your muscles when you run — they reach for this fire first."

---

They moved to the second hearth. Here, Maren placed carefully cut blocks of hardwood — dense, solid, slow to catch.

"This is **protein**. It doesn't burn as brightly, because burning it isn't its true purpose." She ran her hand along the stone mantel. "Protein is the *builder*. It repairs the walls of this house. It mends what breaks. Every muscle, every scar, every strand of hair — built from this wood."

"So it's not really fuel?" Lila asked.

"It *can* burn for energy — but that's like tearing down your walls for firewood. You only do it when you're desperate."

---

The third hearth burned low and deep — a thick, resinous log that glowed with an almost invisible heat but radiated warmth across the entire room.

"**Fat**," Maren said simply. "The slowest fire. The deepest reserve. One log of fat holds more than twice the heat of the same size log of kindling or hardwood."

Lila's eyes widened. "Twice?"

"More. This is your body's cellar — the fuel it stores for winter, for famine, for the long journey. Nuts, oils, the marrow of bones. It also protects your organs like padding and keeps your body's messengers — your hormones — working."

---

Lila stood in the center of the three hearths, feeling their different warmths.

"So my body burns all three?"

"Every day," Maren said. "But not equally. It reaches for kindling first — quick energy. It uses hardwood to rebuild. And it keeps the deep logs in reserve, burning them slowly when needed."

She placed a hand on Lila's shoulder. "The art of eating well is not about feeding one hearth and starving the others. It's about giving each fire the right fuel, in the right amount, at the right time."

---

**🌾 The Moral**

Your body runs on three fuels: carbohydrates for quick energy, protein for building and repair, and fat for deep reserves. Each serves a purpose. The wise eater doesn't fear any of them — they learn to balance all three.

> *"A house with only kindling burns bright but collapses. A house with only stone stands cold. A house with all three endures."*

❓ *Tomorrow's tale: Lila asks — when all three fuels are available, how does the body choose which to burn? And can you change its mind?*`},{day:3,title:"Fuel Priority — How Your Body Chooses What to Burn",date:"2026-02-28",image:"images/nutrition-science/day-3.png",sonnet:`**🪶 Sonnet III: The Order of Flames**

The healer spoke of order in the burn—
Not chaos rules the body's inner fire,
But ancient laws that every cell must learn:
Which fuel to reach for first, which to retire.

The kindling catches quick — the sugar's blaze,
It lights the blood and feeds the racing mind.
But when the straw is spent in fleeting days,
The deeper logs are next the flames will find.

First carbohydrate's flash, then fat's slow glow,
And only when the cellar shelves run bare
Does protein burn — the walls begin to go,
The body eating what it built with care.

*You hold the match that chooses what will burn—*
*Feed wisely, and the order serves your turn.*`,standard:`**🍎 Day 3: Fuel Priority — How Your Body Chooses What to Burn**

Yesterday we met the three macronutrients: carbs (kindling), protein (building material), and fat (deep reserves). Today we answer: *how does your body decide which one to burn first — and can you control it?*

🧱 **The Concept**
Your body burns fuel in a specific priority order: carbohydrates first, then fat, and protein only as a last resort. This hierarchy isn't random — it's survival logic built over millions of years.

❓ **Why It Matters**
If you want to lose fat, build muscle, or just have steady energy throughout the day, you need to understand this fuel ladder. Most diets — keto, low-carb, intermittent fasting — are really just strategies for manipulating which rung your body is on.

⚙️ **How It Works**
Picture a house with three fuel sources stacked in order:

**Level 1 — Carbs (burn first).** When you eat carbs, your body converts them to glucose. Glucose is the easiest, fastest fuel to burn, so your body always reaches for it first. It's like grabbing the newspaper to start a fire — quick and effortless. Your blood sugar rises, insulin shuttles glucose to cells, and you get immediate energy.

**Level 2 — Fat (burn second).** Once available glucose runs low (a few hours after eating, or during light exercise), your body shifts to burning stored fat. This is the slow, steady backup generator. It takes more effort to convert fat into energy, but there's a LOT of it stored — even a lean person carries 50,000+ calories in fat reserves.

**Level 3 — Protein (emergency only).** Your body really doesn't want to burn protein. That's like tearing down your walls for firewood. It only happens during starvation, extreme dieting, or very prolonged exercise when carbs and fat are depleted. This is why crash diets cause muscle loss.

**Can you control it?** Yes! If you eat fewer carbs, your body shifts to fat-burning sooner. That's the entire principle behind low-carb and keto diets. Exercise also accelerates the shift — moderate activity burns through glucose faster and taps fat reserves.

📖 **Definitions**
• **Fuel Priority (Oxidative Hierarchy)**: The order in which your body prefers to burn macronutrients
• **Glycogen**: Stored glucose in your muscles and liver — your carb reserve tank (~2,000 calories worth)
• **Lipolysis**: The process of breaking down stored fat for energy
• **Gluconeogenesis**: Your body making glucose from non-carb sources (protein, glycerol) in emergencies
• **Ketosis**: When carb stores are very low and your body shifts to burning fat as its primary fuel

🎯 **Science Wisdom**
Your body is an incredibly smart machine. It always burns the most efficient fuel available before tapping deeper reserves. You don't need to "trick" it — you just need to understand what's on the shelf when it goes looking for energy.

❓ **Tomorrow's Question:**
*You know carbs burn first and fast — but not all carbs are equal. What makes some carbs give you steady energy while others spike and crash?*`,parable:`**🏰 The Parable of the Burning Order**

That evening, Lila sat by the three hearths, watching Maren cook. A question had been turning in her mind all day.

---

"Maren," she said, "if all three fuels sit in the kitchen, how does the fire know which to burn first?"

Maren set down her ladle and smiled — the smile of a teacher who has been waiting for exactly this question.

"The fire doesn't choose. The *house* chooses."

She walked to the first hearth, where dry straw sat piled high. "When there is kindling available, the house always reaches for it first. It's the easiest to light, the fastest to burn. Your body does the same — when you eat bread or fruit or rice, the glucose hits your blood within minutes. Quick fire. Immediate warmth."

"And when the kindling runs out?" Lila asked.

---

Maren moved to the third hearth — the deep, glowing one fed by dense resinous logs.

"When the straw is gone, the house opens the cellar and pulls out the heavy logs. Fat. It takes longer to catch, longer to burn, but the heat lasts for hours." She placed her hand near the embers. "Even a thin person carries enough logs in their cellar to heat this house for weeks."

"So the body burns fat second?"

"Always. It's the reserve — patient, waiting, enormous. Most people never empty their cellar because they keep restocking the kindling before it runs out."

---

Lila's eyes drifted to the second hearth — the hardwood blocks.

"And the building wood? The protein?"

Maren's face grew serious. "That is the last resort. The house will tear planks from its own walls before it lets the fires die completely. But it *hates* doing it. Burning protein means burning muscle, burning the structures that hold you together."

She gripped Lila's arm gently. "This is why people who starve themselves don't just lose fat — they lose strength. Their body, desperate for fuel, begins dismantling itself."

---

"Can I choose which hearth burns?" Lila asked.

"You already do," Maren said. "Every time you eat, you're stacking kindling on the first hearth. If you want the cellar logs to burn, you have to let the kindling run low first. And if you move your body — walk, carry, climb — you burn through the kindling faster and reach the deeper fuel sooner."

She stirred the pot once more. "Every meal is a choice: *which hearth am I feeding? Which fire do I want to burn?*"

---

Lila sat quietly, watching the three fires dance at their different speeds — one bright and fast, one deep and steady, one barely touched.

"Tomorrow," Maren said, "I'll show you why not all kindling burns the same. Some straw gives steady warmth. Other straw explodes in a flash and leaves you colder than before."

---

**🌾 The Moral**

Your body follows a strict order: burn carbs first (quick fuel), then fat (deep reserves), then protein (only in desperation). Understanding this order is the key to controlling your energy, your weight, and your health.

> *"The wise keeper of the hearth does not fear an empty kindling pile — she knows the cellar is full."*

❓ *Tomorrow's tale: Why does some kindling burn steady and warm, while other kindling flares bright and dies — leaving the house colder than before?*`},{day:4,title:"Simple vs Complex Carbs — The Glycemic Index",date:"2026-02-28",image:"images/nutrition-science/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Straw and the Braid**

Two bundles lay before the healer's door—
One loose and dry, the other tightly wound.
She lit the first: it blazed and was no more,
A flash of heat that vanished without sound.

The second caught with patience, strand by strand,
Its braided fibers slowly feeding flame—
A steady warmth that spread across the land
Of blood and bone, consistent, sure, and tame.

"The sugar burns like scattered straw," she said,
"A rush of fire, then emptiness and cold.
But complex chains release their warmth instead
In measured waves, as fiber's grip takes hold."

*Not all that's sweet gives lasting warmth within—*
*The braided burn outlasts the fastest spin.*`,standard:`**🍎 Day 4: Simple vs Complex Carbs — The Glycemic Index**

Yesterday we learned that your body burns carbs first — they're the kindling, the quick fuel. But today we answer: *what makes some carbs give you steady energy while others spike and crash?*

🧱 **The Concept**
Not all carbohydrates burn at the same speed. Simple carbs (sugar, white bread, candy) hit your bloodstream fast and leave you crashing. Complex carbs (oats, brown rice, vegetables) release energy slowly and keep you fueled for hours. The Glycemic Index measures this speed.

❓ **Why It Matters**
This is why you feel energized after oatmeal but sluggish an hour after donuts. The speed at which carbs raise your blood sugar affects your energy, hunger, mood, and over time — your risk of diabetes, obesity, and heart disease. Same calorie count, wildly different outcomes.

⚙️ **How It Works**
Imagine two piles of kindling. One is loose, dry straw — you toss it in the fire and WHOOSH, it blazes up instantly, burns hot for 30 seconds, then it's gone. You're left colder than before. That's a **simple carb** — white sugar, soda, white bread. Your blood sugar spikes, your pancreas floods you with insulin to bring it down, and you crash. You're hungry again in an hour.

The other pile is tightly braided rope. It catches slowly, burns at a steady pace, and gives off consistent heat for hours. That's a **complex carb** — oatmeal, sweet potatoes, lentils, whole grains. The fiber and structure slow down digestion, so glucose trickles into your blood instead of flooding it.

The **Glycemic Index (GI)** scores foods from 0-100 based on how fast they raise blood sugar:
- **High GI (70+)**: White bread, candy, soda, white rice — fast spike, fast crash
- **Medium GI (56-69)**: Whole wheat bread, brown rice, bananas
- **Low GI (0-55)**: Oats, lentils, most vegetables, nuts — slow, steady energy

📖 **Definitions**
• **Simple Carbohydrates**: Short sugar chains (1-2 molecules) that digest rapidly — glucose, fructose, sucrose
• **Complex Carbohydrates**: Long chains of sugar molecules that take longer to break down — starches, fiber
• **Glycemic Index (GI)**: A scale (0-100) measuring how quickly a food raises blood sugar
• **Insulin**: The hormone your pancreas releases to move glucose from blood into cells
• **Blood Sugar Crash**: The fatigue and hunger that follows a rapid spike when insulin overshoots

🎯 **Science Wisdom**
Fiber is the secret weapon. It wraps around carbohydrate molecules and forces your body to digest them slowly — turning what would be a spike into a steady burn. This is why an apple (with fiber) affects you differently than apple juice (fiber removed), even though they have similar sugar content. Always eat the whole fruit.

❓ **Tomorrow's Question:**
*We've been focused on carbs — but what about protein? How much do you actually need, and what happens if you don't get enough?*`,parable:`**🏰 The Parable of the Two Bundles**

Lila had spent the morning hauling water from the well — a task that left her arms trembling and her stomach growling. She stumbled into the kitchen and reached for a jar of honey, spooning it straight into her mouth.

---

Within minutes, warmth flooded her body. Energy surged through her limbs. "I feel amazing," she said, wiping her chin.

Maren watched from her stool but said nothing.

Twenty minutes later, Lila was slumped against the wall, more exhausted than before. "What happened?" she whispered. "I just ate..."

"You lit scattered straw," Maren said.

---

The healer took two bundles from the shelf and held them up.

The first was a loose pile of dry straw — thin, wispy, falling apart in her hands. "This is honey. White bread. Sugar. It's kindling with no structure." She tossed it into the first hearth. It erupted in a blaze — brilliant, hot, *brief*. Within seconds, it was ash. The hearth felt colder than before.

"Your body burns this instantly," Maren said. "Your blood fills with fire all at once. Your body panics — too much heat! — and sends out a flood of water to douse it." She mimed dumping a bucket. "The fire dies. You're left colder and hungrier than you started."

Lila stared at the empty hearth. "That's exactly what happened to me."

---

Maren held up the second bundle — straw that had been tightly braided into a thick, dense cord. "This is oats. Lentils. Sweet potato. The same material — but *structured*."

She placed it in the hearth. It caught slowly, one strand at a time. The flame built gradually, burned steadily, and continued giving off heat long after the loose straw had turned to ash.

"The braiding is **fiber**," Maren explained. "It wraps around the fuel and forces the fire to work for it. Your body can't burn it all at once — it has to unravel it strand by strand. So the heat comes slowly, evenly, for hours."

---

"So all kindling is not the same," Lila said.

"Not even close. The village bakers know this. When they make white bread, they strip away the braid — they remove the husk, the fiber, the structure. What's left burns fast and hot. But when they leave the grain whole?" Maren held up a rough, dark loaf. "The fire lasts all morning."

She poured Lila a bowl of porridge made from whole oats, topped with nuts and a sliced pear.

"Eat this. Watch what happens."

Lila ate. The warmth came slowly this time — no surge, no rush. Just a steady, building glow that was still burning an hour later when she went back to the well. She hauled water until sunset without flagging.

---

**🌾 The Moral**

All carbohydrates are kindling — but their structure determines whether they burn in a flash or sustain you for hours. Loose straw (simple sugars) gives a spike and a crash. Braided cord (complex carbs with fiber) gives steady, lasting energy.

> *"The wise do not ask 'how much kindling?' but 'how is it bound?' For the same straw, braided, outlasts a bonfire of loose chaff."*

❓ *Tomorrow's tale: Lila has mastered the kindling. But what about the hardwood — the building fuel? How much does the body truly need, and what crumbles when it doesn't get enough?*`},{day:5,title:"Protein — The Body's Master Builder",date:"2026-03-01",image:"images/nutrition-science/day-5.jpg",sonnet:`**🪶 Sonnet V: The Mason's Craft**

When storms have torn the roof and cracked the wall,
When muscle aches from labor long endured,
A silent mason answers every call—
With brick and mortar, damage is obscured.

He works by night when weary builders sleep,
Repairing sinew, stitching bone to bone,
His mortar made from meals the body keeps—
From egg and fish and seed, from flesh and stone.

But give him straw where he requires clay,
And watch the walls grow thin, the rafters bow.
The house still stands — but weaker every day,
A crumbling frame that time will disallow.

*Feed well the mason working through the night—*
*For protein keeps the body's structure right.*`,standard:`**🍎 Day 5: Protein — The Body's Master Builder**

Yesterday we explored how different carbs burn at different speeds. Now we turn to the second hearth: *how much protein do you actually need, and what happens if you don't get enough?*

🧱 **The Concept**
Protein is the building material of your body. It repairs muscle, builds immune cells, creates enzymes and hormones, and maintains virtually every tissue. Unlike carbs and fat, your body can't store protein — you need a steady daily supply.

❓ **Why It Matters**
Without enough protein, your body starts cannibalizing itself — breaking down muscle to get the amino acids it needs. This is why crash dieters lose muscle, why elderly people get frail, and why athletes who skip protein recover slowly. It's also the most satiating macro — protein keeps you full longer than carbs or fat.

⚙️ **How It Works**
Think of protein as Lego bricks. The foods you eat contain chains of amino acids — 20 different types. Your body breaks these chains apart during digestion, then reassembles them into whatever it needs: muscle fibers, antibodies, hair, skin, digestive enzymes.

Nine of these amino acids are "essential" — your body can't make them, so you must eat them. Animal sources (meat, eggs, dairy, fish) contain all nine. Most plant sources are missing one or two, which is why vegetarians need to combine sources (beans + rice, for example).

**How much?** A solid baseline is **0.7–1.0 grams per pound of body weight** if you're active, or about **0.36 grams per pound** at bare minimum. A 150-pound person needs at least 54g daily just to avoid deficiency — closer to 105-150g for optimal health and muscle maintenance.

📖 **Definitions**
• **Amino Acids**: The 20 building blocks that make up all proteins
• **Essential Amino Acids**: 9 amino acids your body cannot produce — must come from food
• **Complete Protein**: A food containing all 9 essential amino acids (eggs, meat, soy, quinoa)
• **Incomplete Protein**: A food missing one or more essential amino acids (most grains, most legumes)
• **Protein Synthesis**: The process of building new proteins from amino acids — happens constantly

🎯 **Science Wisdom**
Protein has the highest "thermic effect" of any macronutrient — your body burns about 20-30% of protein calories just digesting it, compared to 5-10% for carbs and 0-3% for fat. So 100 calories of chicken costs your body 25 calories to process, while 100 calories of butter costs almost nothing. Protein literally makes your metabolism work harder.

❓ **Tomorrow's Question:**
*We've covered carbs and protein — now what about fat? It's the most calorie-dense macro, but is dietary fat actually bad for you, or has the "low-fat" era been wrong all along?*`,parable:`**🏰 The Parable of the Night Mason**

Lila had been hauling water, chopping herbs, and scrubbing floors for a week now — apprentice work that left her muscles sore and her hands raw. One morning she woke to find the blisters on her palms had healed overnight, the soreness in her shoulders was gone.

---

"How?" she asked Maren, flexing her fingers in amazement.

"You have a mason," Maren said.

"A... mason?"

"A builder who works while you sleep. Every night, he inspects the damage — torn muscle, worn skin, cracked bone — and repairs it. Brick by brick, fiber by fiber."

Maren led her to the second hearth — the one fed with dense hardwood blocks.

"This is his fuel. **Protein**. Without it, the mason has no bricks. He shows up for work and finds his hands empty."

---

"What happens then?" Lila asked.

Maren's face darkened. "Then he steals from the walls. Your body begins dismantling existing muscle to get the building blocks it needs elsewhere — for your heart, your blood, your immune soldiers. You get weaker. Thinner. Not lighter — *weaker*. There is a difference."

She held up an egg. "Inside this shell are twenty different types of bricks — amino acids, the village calls them. Nine of them are rare — your body cannot make them. They must come from food. Every day."

"What if I miss a day?"

"One day, the mason manages. A week? The house starts showing cracks."

---

Maren set out a row of foods on the table: eggs, dried fish, lentils, a block of firm tofu, a handful of nuts.

"The animal foods — eggs, fish, meat — carry all nine rare bricks in one package. The plants carry most, but each is missing one or two." She placed the lentils next to a bowl of rice. "That's why the village grandmothers always pair beans with grain. Together, they complete each other."

Lila picked up the egg, turning it in her hand. "How many bricks do I need each day?"

"For a working apprentice? About a fistful of protein at every meal. Your body cannot store bricks the way it stores kindling or cellar logs. What you eat today gets used today. Tomorrow, the mason needs a fresh delivery."

---

That evening, Maren served a dinner of grilled fish over lentils with roasted vegetables. Lila noticed something: she felt full — genuinely, deeply full — in a way that porridge alone never achieved.

"The building fuel satisfies differently," Maren explained. "Your body knows when the mason has what he needs. It stops asking for more."

---

**🌾 The Moral**

Protein is not fuel to burn — it's material to build. Your body uses it every night to repair, rebuild, and maintain the house you live in. Without a steady supply, the house crumbles from within.

> *"The mason works without complaint, but he cannot build with air. Feed him daily, and the house stands strong. Starve him, and he tears down walls to patch the roof."*

❓ *Tomorrow's tale: Lila has mastered the kindling and the building wood. But what of the third hearth — the deep, slow-burning logs of fat? Is fat the enemy the village gossips claim, or has the village been wrong all along?*`},{day:6,title:"Fat — The Essential Energy Dense Nutrient",date:"2026-03-01",image:"images/nutrition-science/day-6.jpg",sonnet:`**🪶 Sonnet VI: Fat — The Essential Energy Dense Nutrient**

Behold the third hearth burning amber bright,
With logs that glow through winter's longest night,
Though elders feared these flames would bring us harm,
These vital oils possess a healing charm.

From olive groves and northern seas so deep,
Come golden gifts our bodies need to keep,
While twisted fats from factories bring disease,
Nature's own fats grant health and inner peace.

Nine calories packed in every precious gram,
Support the brain and craft each healing balm,
The moon-blood flows, the mind thinks swift and clear,
When proper fats burn steady through the year.

*Fear not the fat that nature freely gives,*
*For concentrated fuel is how life lives.*`,standard:`🍎 Day 6: Fat — The Essential Energy Dense Nutrient

Yesterday we learned that protein builds and repairs your body while burning calories just to digest. The answer to our fat question: *dietary fat isn't the villain* — the low-fat era got it backwards. Your body needs fat for hormones, brain function, and vitamin absorption.

🧱 **The Concept**
Fat is your body's most concentrated energy source and serves critical structural and regulatory functions. At 9 calories per gram (versus 4 for carbs and protein), fat provides sustained energy while building cell membranes, creating hormones, and helping absorb fat-soluble vitamins.

❓ **Why It Matters**
Without adequate fat, your hormone production crashes, your brain suffers, and you can't absorb vitamins A, D, E, and K. The "low-fat" diet craze of the 1980s-90s coincided with rising obesity and diabetes rates — partly because people replaced healthy fats with processed carbs and sugar.

⚙️ **How It Works**
Fats come in three main types, each with different effects on your body. **Saturated fats** (butter, coconut oil, meat) are stable and used for hormone production — not the heart villain once thought. **Monounsaturated fats** (olive oil, avocados, nuts) reduce inflammation and support cardiovascular health. **Polyunsaturated fats** include essential omega-3s (fish, flax, walnuts) that your brain desperately needs, and omega-6s (vegetable oils) that become inflammatory when overconsumed. The key is balance: most people get 10-20 times more omega-6 than omega-3, driving chronic inflammation. **Trans fats** (partially hydrogenated oils) are the only truly harmful fats — they're banned in many countries because they increase disease risk.

📖 **Definitions**
• **Saturated Fat**: Fat molecules with no double bonds — solid at room temperature, stable for cooking
• **Monounsaturated Fat**: Fat with one double bond — liquid at room temperature, heart-healthy
• **Polyunsaturated Fat**: Fat with multiple double bonds — includes essential omega-3 and omega-6 fatty acids
• **Essential Fatty Acids**: Omega-3 and omega-6 fats your body cannot make — must come from food
• **Trans Fat**: Artificially created fat that increases inflammation and disease risk

🎯 **Science Wisdom**
Fat doesn't make you fat — excess calories do. In fact, eating adequate healthy fats helps regulate appetite hormones and keeps you satisfied longer than low-fat meals. Your brain is 60% fat by dry weight and performs best on a steady supply of quality fats, especially omega-3s.

❓ **Tomorrow's Question:**
*Now that we understand all three macronutrients, how does your body actually turn food into usable energy? What's really happening during metabolism, and why do some people seem to have "fast" or "slow" metabolisms?*`,parable:`The next morning, Lila found Maren tending the third and final hearth — the one that burned with the steadiest, most enduring flame. Unlike the quick flare of kindling or the moderate burn of seasoned wood, this fire consumed thick logs that glowed deep amber and radiated warmth for hours.

"This is the hearth of fats," Maren said, her weathered hands steady as she adjusted a heavy log. "Notice how concentrated this fuel is — one piece burns longer and hotter than all the twigs from the first hearth combined."

Lila watched, mesmerized by the steady flame. "But the village elders always warned us about eating too much fat. They said it would make us heavy and sick."

Maren chuckled softly. "Ah, the great confusion of your grandmother's time. They blamed the logs for the size of the fire, when it was really about burning more fuel than the hearth could contain." She gestured to the glowing coals. "Your body needs these concentrated fuels, child. Without them, your inner forge cannot craft the vital essences — the moon-blood of women, the strength-humors of men, the swift-thought spirits of the mind."

She reached into her herb pouch and withdrew three different oils in small vials. "See here — this golden oil from the olive groves soothes inflammation like a healing salve. This darker oil from cold northern fish feeds the mind's lightning. But this clear oil," she held up a vial of processed liquid, "this has been twisted by artifice until it breeds fire-sickness in the blood."

Lila examined the vials in the firelight. "So not all fats are the same?"

"Indeed. The steady fats from animals and ancient trees build your body's foundation stones. The flowing fats from fruits and nuts calm the body's storms. The fish-gifts from deep waters kindle clear thinking. But the false fats born of machines..." Maren shook her head gravely. "These bring only corruption."

As they watched the third hearth burn with its patient, powerful flame, Maren added, "Remember this: your ancestors thrived on the fat of the land and sea. It was when we feared our own nourishment that sickness truly began to spread."

**Moral:** The most concentrated fuel is not to be feared, but chosen with wisdom, for true nourishment comes from nature's ancient gifts, not from the artifice of fearful minds.

**Tomorrow:** Lila will discover the great mystery — how these three hearths work together in the grand alchemy that transforms food into life itself.`},{day:7,title:"Metabolism — Your Body's Energy Engine",date:"2026-03-01",image:"images/nutrition-science/day-7.jpg",sonnet:`**🪶 Sonnet VII: Metabolism — Your Body's Energy Engine**

Within each cell there burns a sacred flame,
That turns the bread and meat to vital spark,
Four furnaces that bear metabolism's name:
The resting fire that glows both light and dark.

The muscles' blaze that feeds on every move,
The digestion forge that melts the food we eat,
The restless dance our bodies can't disprove—
All fidgets, all the tremors, all heartbeat.

Some souls burn bright like forges in the night,
With muscle-mass that stokes the inner coal,
While others bank their fires, dim their light,
Yet each can learn to tend their burning soul.

*Not genes alone decide your metabolic fate,*
*But daily choices small and truly great.*`,standard:`🍎 Day 7: Metabolism — Your Body's Energy Engine

Yesterday we explored fat as your body's most energy-dense nutrient and essential building block for hormones and brain function. The answer to metabolism: your "metabolic rate" isn't fixed destiny — it's a dynamic system influenced by muscle mass, activity, food choices, and even the energy cost of digestion itself.

🧱 **The Concept**
Metabolism is the sum of all chemical reactions that convert food into usable energy (ATP) in your cells. Your Total Daily Energy Expenditure includes four components: basal metabolic rate, physical activity, digestion, and non-exercise thermogenesis.

❓ **Why It Matters**
Understanding metabolism dispels the myth of being "stuck" with a slow metabolism. While genetics influence your baseline, you control major factors like muscle mass, meal composition, and daily movement. People with "fast metabolisms" often have more muscle tissue and higher daily activity levels — both trainable traits.

⚙️ **How It Works**
Your **Basal Metabolic Rate (BMR)** accounts for 60-70% of daily calories — the energy needed for breathing, circulation, and cellular repair while at rest. **Physical activity** burns 15-30% through exercise and daily movement. **Thermic Effect of Food (TEF)** uses 8-10% of calories just to digest, absorb, and process nutrients — protein has the highest TEF at 20-30%, while carbs burn 5-10% and fats only 0-5%. **Non-Exercise Activity Thermogenesis (NEAT)** — fidgeting, posture maintenance, and spontaneous movement — varies dramatically between people and can account for 15-50% of activity calories. Muscle tissue burns 3-5 times more calories at rest than fat tissue, which is why strength training permanently elevates metabolism. Extreme calorie restriction triggers metabolic adaptation, slowing BMR by 10-40% as your body conserves energy.

📖 **Definitions**
• **Basal Metabolic Rate (BMR)**: Calories burned at complete rest for basic physiological functions
• **Total Daily Energy Expenditure (TDEE)**: All calories burned in a day from all sources
• **Thermic Effect of Food (TEF)**: Energy cost of digesting, absorbing, and processing nutrients
• **ATP (Adenosine Triphosphate)**: The universal energy currency that powers all cellular functions
• **Metabolic Adaptation**: Body's ability to slow metabolism during prolonged calorie restriction

🎯 **Science Wisdom**
Metabolism isn't a fixed number — it's a dynamic system that responds to your choices. Building muscle, eating adequate protein, staying active, and avoiding extreme dieting keeps your metabolic engine running efficiently. The biggest metabolic differences between people often come from daily habits, not genetic destiny.

❓ **Tomorrow's Question:**
*We've covered the macronutrients and metabolism, but what about the micronutrients — vitamins and minerals? How do these tiny compounds orchestrate the complex chemical reactions that keep us alive and thriving?*`,parable:`The next morning, Lila found Maren tending all three hearths simultaneously — the bread oven glowing steady and bright, the soup kettle bubbling with gentle vigor, and the preservation smoker sending thin wisps into the dawn air. "Master Maren," Lila said, "I understand now how the three great nutrients feed our bodies, but I'm puzzled. Why do some villagers seem to burn through their daily bread like kindling, while others store every crumb?"

Maren smiled, adjusting the airflow beneath each hearth with practiced precision. "Ah, you're asking about the great furnace within — what the learned ones call metabolism. Watch closely, dear apprentice, for these three fires mirror the very processes that turn your supper into the spark of life itself."

She gestured to the bread oven, its stones radiating steady heat. "This represents your body's constant fire — the energy burned simply to keep your heart beating, lungs breathing, mind thinking. Like this oven that must stay warm even when empty, your body burns most of its fuel just staying alive. Some people have larger ovens — more muscle, bigger frames — and thus burn brighter always."

Next, she stirred the bubbling soup. "This kettle shows the fire of movement and work. Every step you take, every basket you carry, every dance at harvest festival fans these flames higher. Those who move with purpose throughout their days keep this fire well-fed, while those who sit still let it dwindle to embers."

At the smoker, Maren added a handful of apple wood chips that hissed and flared. "And this teaches the most curious lesson — your body must burn fuel simply to process fuel. Breaking down a tough root takes more fire than soft berries. Protein, like thick oak logs, demands much flame to consume, while sugars burn quick and easy like dry grass. Even the act of eating feeds the furnace."

Lila watched the interplay of flames with growing wonder. "But Master, why do the fires burn differently in different people?"

"Partly born, partly made," Maren replied, banking the coals with care. "Your grandmother's oven may run naturally hot or cool, but you tend the flames daily. Build your muscles like stoking the hearth stones — they'll burn bright even while you sleep. Move your body like feeding the active fire — it grows with use. Choose your foods like a wise fire-tender — some fuel burns clean and long, others leave only ash and smoke."

She paused, watching a young hawk circle overhead with effortless grace. "Remember this, Lila: the villagers with 'quick-burning' fires often simply carry more muscle and move more freely through their days. The ones who 'store every crumb' may have let their fires bank too low through stillness and poor tending. But here's the healer's secret — these fires can be rekindled and retrained with patience and wisdom."

**Moral:** *Metabolism is not fate but craft — the daily tending of your body's inner fires through movement, nourishment, and the building of lean strength.*

*Tomorrow, Lila would learn why the smallest seeds in Maren's medicine garden held the greatest power over the body's vast furnace...*`},{day:8,title:"Micronutrients — The Orchestrators of Life",date:"2026-03-01",image:"images/nutrition-science/day-8.jpg",sonnet:`**🪶 Sonnet VIII: The Orchestrators of Life**

In tiny vials lie the sparks of health,
Vitamins and minerals, small yet grand,
Though weightless seeming, they control all wealth
Of energy that flows through blood and gland.

The iron carries oxygen's sweet breath,
While zinc awakens enzymes by the score,
And magnesium guards against slow death
Of cells that cry for ATP and more.

Fat-soluble guardians A, D, E, and K
Store patient in the body's hidden vaults,
While water's children wash away each day,
Demanding fresh renewal without faults.

*Though macronutrients fuel the flame so bright,*
*These micro-servants orchestrate all light.*`,standard:`🍎 Day 8: Micronutrients — The Orchestrators of Life

Yesterday we explored metabolism as your body's dynamic energy engine, discovering that it responds to muscle mass, protein intake, and daily activity rather than genetic destiny. The answer to micronutrients: these vitamins and minerals don't provide calories, but they're the essential cofactors, enzymes, and catalysts that make every metabolic reaction possible — without them, your cellular machinery grinds to a halt.

🧱 **The Concept**
Micronutrients are vitamins and minerals required in small amounts that enable enzymes to catalyze biochemical reactions, support immune function, and maintain cellular structures. Unlike macronutrients, they provide no energy but are absolutely essential for converting food into usable energy and maintaining health.

❓ **Why It Matters**
Even mild micronutrient deficiencies can sabotage your metabolism, energy levels, and overall health despite adequate calorie intake. Modern processed foods provide plenty of calories but often lack the micronutrient density of whole foods. Understanding micronutrients helps you choose foods that not only fuel your body but optimize how efficiently that fuel burns.

⚙️ **How It Works**
**Fat-soluble vitamins** (A, D, E, K) are stored in body fat and liver, requiring dietary fat for absorption — vitamin D enables calcium absorption, while vitamin K activates proteins for bone health and blood clotting. **Water-soluble vitamins** (B-complex and C) aren't stored long-term and must be replenished daily — B vitamins serve as coenzymes in energy metabolism, while vitamin C supports collagen synthesis and immune function. **Minerals** like iron carry oxygen in hemoglobin, zinc activates over 300 enzymes, and magnesium participates in more than 600 biochemical reactions including ATP production. **Trace elements** like selenium and chromium are needed in tiny amounts but have outsized impacts — selenium protects against oxidative stress, while chromium helps regulate blood sugar. Nutrient synergies matter tremendously: vitamin C enhances iron absorption, while calcium can inhibit iron uptake when consumed together.

📖 **Definitions**
• **Cofactors**: Non-protein compounds that help enzymes catalyze biochemical reactions
• **Fat-soluble vitamins**: A, D, E, K — stored in fat tissue and require fat for absorption
• **Water-soluble vitamins**: B-complex and C — not stored long-term, need daily replenishment
• **Bioavailability**: The proportion of a nutrient that can be absorbed and used by the body
• **Nutrient density**: The amount of beneficial nutrients relative to calories in a food

🎯 **Science Wisdom**
Micronutrients are like a symphony orchestra — each plays a small part, but together they create the music of life. Focus on nutrient-dense whole foods rather than isolated supplements, as nutrients work synergistically and food provides them in their most bioavailable forms.

❓ **Tomorrow's Question:**
*Now that we understand both macronutrients and micronutrients, how does the timing and combination of what we eat affect our energy, performance, and health throughout the day?*`,parable:`Lila found Maren in her herb garden at dawn, examining leaves with a magnifying lens made of polished crystal. "Master, yesterday you showed me how the great hearths of metabolism burn our food for energy. But what makes the flames burn bright and steady?"

Maren plucked a single basil leaf, holding it up to catch the morning light. "Watch closely, child. Do you see the green that captures sunlight? The oils that give fragrance? The countless compounds invisible to our eyes?" She crushed the leaf between her fingers, releasing its aroma. "A leaf weighs almost nothing, yet contains hundreds of substances that could heal or harm, strengthen or weaken."

Leading Lila to her workshop, Maren opened a chest filled with tiny vials of powders, oils, and crystalline substances. "Your body's hearths burn food for warmth and energy, yes — but without these," she gestured to the collection, "the fires would sputter and die. These are the spark-makers, the flame-tenders, the invisible servants that make all reactions possible."

She picked up two vials — one containing iron-red powder, another with golden oil. "Iron carries the breath of life through your blood, but without this golden helper," she held up the oil, "the iron cannot be absorbed. They are partners in an ancient dance, each incomplete without the other."

Maren arranged the vials in groups. "Some dissolve in water and flow away quickly — they must be replenished like water in a vessel. Others dissolve in oil and hide in your body's stores, waiting patiently for their moment of need. Each has its role, its timing, its perfect partner."

"But Master," Lila asked, "if they're so small, so seemingly insignificant, how can they matter so much?"

Maren smiled, lighting a candle with a tiny spark. "Tell me, child — which is more important to this flame: the wick, the wax, or the spark that ignites them?" She paused as understanding dawned in Lila's eyes. "Without the spark, there is no fire. Without these tiny orchestrators, there is no symphony of life."

**The Moral:** The smallest elements often wield the greatest power, orchestrating the grand performances of life through invisible acts of service.

*Tomorrow, Maren would teach Lila about the sacred rhythms of nourishment — when and how the body best receives its gifts throughout the day's cycles.*`}],jv=[{day:1,title:"The Power of Tactical Empathy",date:"2026-03-01",image:"images/negotiation/day-1.jpg",sonnet:`**🪶 Sonnet I: The Mirror's Edge**

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

❓ *Tomorrow's tale: Ren learned to listen. But what is the one question that keeps people talking — and why does Vasska never ask "why"?*`},{day:2,title:"The Magic of Mirroring",date:"2026-03-01",image:"images/negotiation/day-2.jpg",sonnet:`**🪶 Sonnet II: The Magic of Mirroring**

When words flow forth like rivers from the heart,
The wise repeat what last was spoken clear,
Not judgment passed, but echo's gentle art
That draws the speaker's deeper truth to ear.

"These times are hard," the merchant does confess,
"Hard times?" returns the trader's mirrored call,
And suddenly the gates of tight-held stress
Swing wide to let the hidden story fall.

No "why" that stings like accusation's blade,
But repetition's magic pulls them near,
The last few words, like music sweetly played,
Invite the soul to make its purpose clear.

*For those who mirror words with gentle grace*
*Find treasure hidden in the speaker's space.*`,standard:`🤝 Day 2: The Magic of Mirroring

Tactical empathy opens the door, but the right question keeps it open. FBI negotiators avoid "why" because it triggers defensiveness — it sounds like an interrogation. Instead, they use the most powerful tool in conversation: **mirroring**.

🧱 **The Concept**
Mirroring is repeating the last 1-3 words someone said as a question, triggering them to elaborate and reveal more information.

❓ **Why It Matters**
People have an unconscious need to be heard and understood completely. When you mirror their words back, their brain thinks "they didn't get the full picture" and automatically provides more detail. It's like a conversational magnet that pulls out information, emotions, and motivations they hadn't planned to share.

⚙️ **How It Works**
Say someone tells you: "This project is taking forever because of all these budget constraints." Instead of asking "Why are there budget constraints?" (which sounds accusatory), you simply mirror: "Budget constraints?" with a slight upward inflection. They'll instinctively elaborate: "Yeah, corporate froze discretionary spending after the Q3 numbers came in. Now every purchase over $500 needs three approvals." You just learned the real story without seeming pushy. Chris Voss discovered that mirroring increases cooperation by up to 400% in negotiations. It works because it feels like active listening, not interrogation. The person feels heard, not judged.

📖 **Definitions**
• **Mirroring**: Repeating someone's last few words as a question to encourage elaboration
• **Inquisitive Tone**: Slightly upward inflection that makes statements sound like gentle questions
• **Information Cascade**: When mirroring triggers increasingly detailed revelations
• **Defensive Response**: What happens when "why" questions feel like challenges

🎯 **Negotiation Wisdom**
The person who talks more reveals more. Mirroring makes them want to talk. As Voss says: "Mirrors work magic because they demonstrate empathy and show that you're listening."

❓ **Tomorrow's Question:**
*How can the simple phrase "That's right" become the most dangerous words in negotiation — and why should you never settle for "Yes"?*`,parable:`The sun climbed higher over the dusty marketplace as Ren watched Vasska approach a wool merchant whose weathered face spoke of countless difficult seasons. The young apprentice expected his master to launch into practiced haggling, but instead, Vasska stood quietly, his good eye studying the merchant's expression.

"These are hard times for wool traders," the merchant muttered, more to himself than to them.

Vasska's response surprised Ren completely. Rather than agreement or argument, the master trader simply repeated: "Hard times?"

The two words, spoken with gentle curiosity, seemed to unlock something in the merchant. "Aye, the sheep sickness hit three regions this spring. Lost half my regular suppliers. Now I'm paying double for half the quality, and my customers expect the same prices as last year."

"Same prices?" Vasska mirrored again, his voice carrying no judgment.

"They don't understand the market's changed. Think I'm trying to cheat them when I explain the real costs." The merchant's voice grew more animated, his guard dropping with each word.

Ren marveled as more details spilled forth — supplier names, specific losses, even the merchant's fears about next season. All Vasska had done was echo the man's own words back to him, like a mountain reflecting a shout.

Later, as they walked away with wool purchased at a fair price that satisfied both parties, Vasska explained: "A man's words are like stones thrown in a well, young Ren. If you echo them back, he must throw more stones to hear the depth. Ask 'why' and he thinks you doubt him. Mirror his words, and he thinks you understand him."

**Moral:** *The wise listener speaks little but repeats much, for in echoing another's words, we invite their deepest thoughts to surface.*

*Tomorrow, Ren would learn why the most dangerous moment in any negotiation comes when someone says "That's right" — and why a simple "yes" might mean nothing at all.*`},{day:3,title:`The Power of "That's Right"`,date:"2026-03-01",image:"images/negotiation/day-3.jpg",sonnet:`**🪶 Sonnet III: The Power of "That's Right"**

When voices clash and understanding fails,
And "Yes" rings hollow like a broken bell,
The wise negotiator never rails,
But listens deep to truths that others tell.

He mirrors back their pain with gentle art,
Reflects their struggle in his careful phrase,
Until they feel he's captured every part
Of burdens that have shadowed all their days.

Then magic happens in that sacred space—
"That's right!" they cry, with relief and surprise,
For someone finally sees their true face,
Their story heard through understanding eyes.

*When truth acknowledged finds its rightful place,*
*Collaboration blooms where conflict dies.*`,standard:`🤝 Day 3: The Power of "That's Right"

Mirroring creates conversational flow, but there's a crucial difference between getting someone to agree and getting them to commit. When someone says "Yes," they might just be trying to end the conversation. But when they say "That's right," they've convinced themselves.

🧱 **The Concept**
Getting someone to say "That's right" means they feel completely understood and have internalized your perspective as their own truth.

❓ **Why It Matters**
"Yes" is often just compliance or politeness — a way to move forward without real commitment. "That's right" is different: it's the moment when someone's brain accepts your summary of their situation as accurate and complete. This creates genuine buy-in because they're not just agreeing with you; they're agreeing with themselves. FBI hostage negotiators know this moment often precedes breakthrough.

⚙️ **How It Works**
After using tactical empathy and mirroring to gather information, you summarize their situation back to them in their own words, capturing both facts and emotions. For example: "So you're feeling overwhelmed because the deadline moved up two weeks, your team is already stretched thin, and upper management doesn't seem to understand the technical challenges you're facing. Is that right?" When they respond with "That's right!" (often with emphasis or relief), they've just validated your understanding and committed to that reality. Chris Voss calls this the "summary method" — it's not about being right, it's about being accurate to their perspective. Once someone says "That's right," they become psychologically invested in finding solutions within that framework.

📖 **Definitions**
• **"That's Right" Moment**: When someone confirms your summary of their situation, creating psychological commitment
• **Summary Method**: Reflecting back someone's complete situation using their words and emotions
• **False Agreement**: When "yes" answers mask disagreement or lack of commitment
• **Psychological Investment**: The mental commitment that comes from validating a shared understanding

🎯 **Negotiation Wisdom**
"That's right" is the sound of a breakthrough. It means they've moved from defending their position to collaborating on solutions within the reality you've both acknowledged.

❓ **Tomorrow's Question**
*What happens when you give someone permission to say "No" — and why this counterintuitive approach often leads to better outcomes than pushing for "Yes"?*`,parable:`The marketplace hummed with its usual chaos when Ren encountered his greatest challenge yet. A wealthy spice merchant, flanked by guards, was berating a young vendor whose cart had allegedly scratched his ornate palanquin.

"You'll pay for every mark on that gold leaf!" the merchant bellowed. "Fifty silver coins, or I'll have you arrested!"

The terrified vendor stammered protests, but each "No, sir" and "Please, sir" only inflamed the situation further. Vasska observed from the shadows, his single eye gleaming with interest.

"Watch closely," he murmured to Ren. "See how agreement without understanding breeds contempt?"

Vasska approached slowly, his weathered hands open and peaceful. "Master merchant," he began, "if I understand correctly, your beautiful palanquin — likely worth more than most annual wages — was damaged by carelessness, and now you're facing costly repairs while dealing with someone who shows no respect for your property or status. Is that right?"

The merchant's rage shifted to surprise. "That's... that's exactly right! Finally, someone who understands the situation!"

"Indeed," Vasska nodded. "And young vendor, you're terrified because fifty silver coins would bankrupt your family, you never intended harm, and you feel trapped between poverty and injustice. That's right as well?"

"Yes! That's right!" the vendor gasped, tears of relief in his eyes.

With both parties feeling truly heard, Vasska facilitated a solution: the vendor would work one day each week at the merchant's warehouse until the debt was paid — preserving dignity while addressing the damage.

As they walked away, Vasska turned to his apprentice. "Ren, remember this: 'Yes' is the sound of surrender. 'That's right' is the sound of understanding. When someone says 'that's right,' they've stopped defending and started collaborating. They've made your truth their truth."

**Moral**: True agreement comes not from forcing compliance, but from complete understanding that makes collaboration inevitable.

*Tomorrow, young merchant, you'll discover why the most powerful word in negotiation might be the one everyone fears to hear...*`},{day:4,title:'The Magic of "No" - Why Permission to Refuse Creates Freedom to Agree',date:"2026-03-01",image:"images/negotiation/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Magic of "No" - Why Permission to Refuse Creates Freedom to Agree**

When cornered minds resist with fierce defense,
And pressure builds like storms upon the sea,
The wise negotiator drops pretense,
And grants the gift of choice: "You may say 'No' to me."

This paradox dissolves the walls of fear,
As threatened souls relax their guarded stance,
For when escape seems possible and clear,
They're free to give cooperation its chance.

The merchant who demands will face rejection,
But one who asks "Would this be unreasonable?"
Finds willing ears and genuine connection,
As choice transforms the hostile into reasonable.

*When "No" is truly safe to speak aloud,*
*Then "Yes" rings true and makes the heart feel proud.*`,standard:`🤝 Day 4: The Magic of "No" - Why Permission to Refuse Creates Freedom to Agree

When someone says "That's right," they've internalized your understanding of their situation, creating genuine psychological commitment rather than mere compliance. But what happens when you give someone permission to say "No"?

🧱 **The Concept**
Giving someone explicit permission to refuse your request paradoxically makes them more likely to engage authentically and find ways to say "Yes."

❓ **Why It Matters**
People instinctively resist being cornered or pressured into agreement. When you remove the pressure by making "No" a legitimate option, you eliminate their defensive reflexes and create psychological safety. This counterintuitive approach transforms the dynamic from adversarial to collaborative. FBI negotiators use this to de-escalate situations — when someone feels they have genuine choice, they're more likely to engage in good faith.

⚙️ **How It Works**
Instead of asking "Can you do this project by Friday?" try "Would it be unreasonable for me to ask if this project could be ready by Friday?" The second version gives them clear permission to decline while making your request. This works because it triggers what psychologists call "reactance theory" in reverse — when people don't feel their autonomy is threatened, they're more willing to comply. Real estate agents might say "Is there any reason why this house wouldn't work for you?" rather than "Do you love this house?" The permission to object actually encourages honest feedback. Corporate negotiators often start with "Is there anything wrong with asking..." which creates space for genuine dialogue rather than defensive positioning.

📖 **Definitions**
• **Psychological Reactance**: The instinctive resistance people feel when their choices seem limited
• **Permission-Based Questions**: Requests that explicitly acknowledge the other person's right to refuse
• **Defensive Positioning**: When people focus more on protecting their autonomy than solving problems
• **Authentic Engagement**: Genuine participation that comes from feeling psychologically safe

🎯 **Negotiation Wisdom**
When "No" is truly acceptable, "Yes" becomes genuinely meaningful. Permission to refuse creates the freedom to genuinely agree.

❓ **Tomorrow's Question**
*How do you use calibrated questions to make someone feel like they're in control while subtly guiding them toward your desired outcome?*`,parable:`The next morning brought news that would test everything Ren had learned. A rival merchant house had cornered the market on winter spices, and Ren's family business faced potential ruin. The young merchant found Vasska examining a shipment of silk, his single eye gleaming with calculation.

"Master, we must secure the Khemerian saffron contract, or we'll lose half our winter trade," Ren said urgently. "How do we force their hand?"

Vasska's scarred face creased into a knowing smile. "Force? Ah, young one, you still think like a battering ram when you should think like water." He gestured toward the harbor where the Khemerian captain was inspecting his ship's repairs.

"Watch," Vasska murmured, approaching the weathered captain. "Captain Khalil, I hear your cargo hold has damage from the storm. Would it be completely unreasonable for me to ask if you might consider our warehouses while your ship is repaired?"

The captain's shoulders relaxed visibly. "Well... I suppose there's no harm in discussing it. Though I should warn you, our usual terms are quite specific."

"Of course," Vasska nodded. "And is there any reason why those terms wouldn't work perfectly for both of us?"

Ren watched in amazement as the captain, given complete freedom to object, instead began explaining exactly what would make a deal attractive to him. By acknowledging the captain's right to refuse, Vasska had transformed a potential adversary into a collaborative partner.

"But Master," Ren whispered later, "weren't you afraid he'd simply say no?"

Vasska touched his eye patch thoughtfully. "Child, when a man feels trapped in a corner, he fights like a cornered animal. But give him an open door, and he might just choose to stay and talk."

**Moral**: *Permission to refuse creates the freedom to genuinely agree.*

*Tomorrow, Ren would learn how questions could become invisible chains of influence, more powerful than any direct command...*`}],Iv=[{day:1,title:"The Dichotomy of Control",date:"2026-03-01",image:"images/stoic-philosophy/day-1.jpg",sonnet:`**🪶 Sonnet I: The Two Circles**

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

When mortal hearts demand the world obey,
And chase rewards beyond their meager reach,
They bind their joy to Fortune's fickle way—
What outcomes grant, swift circumstance can breach.

But wise souls learn to want what comes to pass,
To prize the deed above the deed's reward,
Like gardeners who tend each blade of grass,
Not for the harvest, but for love toward

The sacred work itself. Excellence pure
Requires no crown to validate its worth;
The surgeon's skill, the scholar's truth secure
Find satisfaction in the act, not birth

*Of fame or gold. When process is the prize,*
*The soul finds peace beneath uncertain skies.*`,standard:`🏛️ Day 2: The Discipline of Desire

Yesterday we learned the dichotomy of control — distinguishing what's up to us from what isn't. Today's question was whether Stoics should stop caring about outcomes entirely. The answer: No — Stoics care deeply, but they **desire the process, not the prize**.

🧱 **The Concept**
The discipline of desire teaches us to want what happens, rather than demanding that what we want should happen.

❓ **Why It Matters**
Desiring outcomes you can't control creates a life of constant frustration and disappointment. When your happiness depends on external results — promotions, relationships, recognition — you're essentially gambling with your peace of mind. The discipline of desire breaks this cycle by redirecting your wanting toward what's actually achievable.

⚙️ **How It Works**
Instead of "I want to get the job," think "I want to interview with excellence." Instead of "I need them to like me," focus on "I want to be genuinely kind and authentic." You shift from **attachment to outcomes** to **commitment to excellence**.

Marcus Aurelius practiced this daily: "Confine yourself to the present." When leading Rome's armies, he desired to make wise decisions, show courage, and act with justice — not to guarantee victory. Seneca, one of Rome's wealthiest men, regularly practiced poverty to prove his contentment didn't depend on riches.

The discipline doesn't kill ambition — it purifies it. You work just as hard, but your satisfaction comes from effort, not results. This paradox often leads to better outcomes because you're not paralyzed by fear of failure.

📖 **Definitions**
• **Discipline of Desire**: Training yourself to want what happens rather than demanding what you want
• **Preferred Indifferents**: Things naturally preferred (health, wealth) but not essential for happiness
• **Reserve Clause**: Mental addition of "fate permitting" to all plans and hopes
• **Prosoche**: Continuous attention to living according to Stoic principles

🎯 **Stoic Wisdom**
Epictetus taught: "Don't demand that things happen as you wish — wish that they happen as they do, and you will go on well." Freedom comes from wanting what you get, not getting what you want.

❓ **Tomorrow's Question:**
*This sounds like passive resignation. How do Stoics maintain the drive to improve themselves and change the world if they're supposed to accept everything that happens?*`,parable:`The morning sun cast long shadows across the training grounds as Caius practiced sword work with mechanical precision. Each thrust, each parry — perfect form, yet his shoulders carried the weight of worry.

"Your blade is sharp," Maxima observed, approaching with measured steps, "but your mind is dull with desire."

Caius lowered his gladius. "The centurion evaluations are next week, General. I must make the cut. My family's honor depends on it."

"Ah," Maxima nodded, settling onto a stone bench worn smooth by countless conversations. "Tell me, young soldier — do you control the centurion's judgment?"

"No, but—"

"Do you control whether plague strikes the camp, or whether Caesar calls for immediate deployment?"

Caius shook his head, confusion creeping across his features.

"Then why," Maxima continued gently, "do you chain your peace to a thousand things beyond your reach? You desire the rank, not the excellence. You want the outcome, not the process."

Maxima stood and drew his own sword — not the ceremonial blade of retirement, but the battle-worn steel that had seen twenty campaigns. "Watch me fight this post," he said, beginning a fluid sequence of strikes. "I desire perfect form. Each cut, precisely placed. Each movement, executed with full attention. Whether the post falls or stands matters nothing — my satisfaction comes from the doing, not the done."

Caius watched, mesmerized. The general's blade sang through air with purposeful grace.

"This is the discipline of desire," Maxima said, sheathing his sword. "Want what happens, rather than demanding what you want. Train with excellence not to guarantee promotion, but because excellence is its own reward. Fight with courage not to ensure victory, but because courage makes you worthy regardless of outcome."

The young soldier felt something shift in his chest — a loosening of invisible chains.

**Moral:** True strength comes from desiring the process over the prize, for in seeking excellence for its own sake, we find both peace and purpose.

**Tomorrow:** Maxima will teach Caius why acceptance of fate paradoxically creates the power to change the world.`},{day:3,title:"The Discipline of Action",date:"2026-03-01",image:"images/stoic-philosophy/day-3.jpg",sonnet:`**🪶 Sonnet III: The Discipline of Action**

The warrior who fights for glory's crown
May find his blade grows heavy in his hand,
But he who serves virtue stands his ground
With strength that no defeat can countermand.

Act fully, yet with open palm release
The fruits that fate may choose to give or take,
For in such balance lies the truest peace—
To labor well for virtue's very sake.

The farmer plants with hope but not demand,
The teacher speaks though students may not hear,
The healer works with gentle, skillful hand
Whether the patient lives or death draws near.

*In action without attachment lies the art:*
*To give your all while holding nothing apart.*`,standard:`🏛️ Day 3: The Discipline of Action

Yesterday we explored the discipline of desire — wanting what happens rather than demanding outcomes. Today's question asks whether this leads to passive resignation. The answer: **Absolutely not** — Stoics are warriors of virtue who act with fierce determination on what they control.

🧱 **The Concept**
The discipline of action means engaging fully with your duties while remaining detached from results.

❓ **Why It Matters**
Accepting fate doesn't mean accepting injustice or laziness. Stoics distinguish between **cosmic acceptance** (accepting that events unfold as they do) and **moral action** (your duty to respond virtuously). Without this distinction, Stoicism becomes fatalism — a philosophy that breeds complacency rather than excellence. True Stoics are among history's most decisive actors because they're freed from the paralysis of outcome anxiety.

⚙️ **How It Works**
You act with **reserve clause thinking**: "I will work for justice, fate permitting." "I will build this business, providence willing." This isn't halfhearted effort — it's wholehearted action without attachment to specific results. Marcus Aurelius led armies and governed an empire while practicing this discipline. He wrote: "In the morning when thou risest unwillingly, let this thought be present — I am rising to the work of a human being."

Seneca exemplified this as Nero's advisor, working tirelessly for good governance while knowing he couldn't control the emperor's choices. Epictetus, though physically disabled and enslaved, maintained that everyone has the power to act virtuously within their circumstances. The discipline transforms you from a **results-driven person** into a **virtue-driven person** — often achieving better results precisely because you're not desperate for them.

📖 **Definitions**
• **Discipline of Action**: Acting excellently on what you control while accepting outcomes beyond your power
• **Reserve Clause**: Mental addition of "God willing" or "fate permitting" to all plans
• **Kathêkon**: Appropriate action based on circumstances and role
• **Virtue-driven Action**: Choosing responses based on excellence rather than desired outcomes
• **Sympatheia**: The Stoic concept that all things are interconnected in a rational universe

🎯 **Stoic Wisdom**
Marcus Aurelius taught: "You have power over your mind — not outside events. Realize this, and you will find strength." The strongest action comes from those who need nothing from their actions except the opportunity to act well.

❓ **Tomorrow's Question:**
*If Stoics don't get attached to outcomes, how do they handle genuine loss and grief? Surely some emotional responses are natural and healthy?*`,parable:`The camp stirred before dawn as Caius practiced sword forms in the pale light. His movements were sharp but tense, each strike carrying the weight of tomorrow's uncertainty.

"You fight your blade, not with it," observed Maxima, emerging from the shadows. The weathered general had been watching silently.

"I must be ready," Caius replied, breathing heavily. "The Germanic tribes are fierce. What if I fail? What if I bring shame to Rome?"

Maxima picked up a practice sword and assumed position. "Yesterday you learned to desire the process, not the prize. Today you must learn its companion truth — to act without attachment while acting with everything you have."

They began to spar, Maxima's movements fluid and purposeful. "When I was young like you, I believed victory depended on my desperation for it. I fought with clenched fists and racing heart, always imagining defeat. Then a wise centurion taught me this: 'Fight for Rome, not for glory. Fight with virtue, not for validation.'"

Caius found himself breathing easier as he matched Maxima's rhythm. "But surely you wanted to win your battles?"

"I wanted to fight them excellently," Maxima corrected, parrying smoothly. "I planned thoroughly, led courageously, adapted wisely — all while accepting that Mars decides the final outcome. This isn't resignation, young soldier. It's liberation."

As they concluded their practice, Maxima placed a firm hand on Caius's shoulder. "Tomorrow you'll face the Germanic lines. Fight with every skill you possess, every ounce of courage in your heart. But fight as a servant of virtue, not a slave to victory. That's when you become truly dangerous — and truly free."

**Moral:** True strength comes not from desperate attachment to outcomes, but from wholehearted commitment to excellent action.

**Tomorrow:** *Caius faces his first battle, where he'll discover how Stoics handle genuine loss and the full spectrum of human emotion.*`},{day:4,title:"The Discipline of Assent",date:"2026-03-01",image:"images/stoic-philosophy/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Discipline of Assent**

When sorrow's first impression strikes the mind,
Like lightning splitting through a summer sky,
We pause before our judgments fall behind
The truth that underneath these feelings lie.

Not every thought that rises need be true,
Though tears may fall like rain upon the earth;
The wise examine what they assent to—
Distinguishing between pain and its worth.

"This loss destroys me," cries the wounded heart,
Yet death is nature's way since time began;
To rage against what plays its destined part
Is to deny the order in life's plan.

*For freedom lives in this—our choice alone:*
*To govern thoughts and claim our minds as home.*`,standard:`🏛️ Day 4: The Discipline of Assent

Yesterday we explored acting with full effort while remaining detached from results. Today's question asks about handling genuine loss and grief — and the answer lies in understanding that **healthy emotional responses** come through the discipline of assent, while destructive emotions arise from false judgments about what we've "lost."

🧱 **The Concept**
The discipline of assent means examining and choosing your judgments about events rather than accepting automatic emotional reactions.

❓ **Why It Matters**
Emotions aren't inherently good or bad — they're information based on our judgments about reality. Stoics distinguish between **initial impressions** (automatic responses) and **assent** (choosing to believe those impressions). Grief over loss is natural; despair that "life is ruined" is a chosen judgment. Without this discipline, you become enslaved to every random thought and feeling that arises, living at the mercy of circumstances rather than wisdom.

⚙️ **How It Works**
When facing loss, you pause before assenting to dramatic interpretations. **Initial impression**: "My friend died — I feel sad." **Potential false assent**: "This is terrible and shouldn't have happened." **Stoic assent**: "Death is part of nature; I'm grateful for the time we shared." Epictetus taught students to say "That's just your opinion" to their own catastrophic thoughts. Marcus Aurelius practiced this daily: "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside." The goal isn't emotional numbness but **emotional accuracy** — feeling appropriate responses based on truth rather than illusion.

📖 **Definitions**
• **Discipline of Assent**: Examining and choosing beliefs rather than accepting automatic judgments
• **Initial Impression (Phantasia)**: Automatic mental response to events
• **Assent (Synkatathesis)**: Conscious agreement or disagreement with impressions
• **False Judgment**: Beliefs that conflict with nature and virtue
• **Emotional Accuracy**: Feeling proportionate responses based on wisdom rather than illusion

🎯 **Stoic Wisdom**
Epictetus declared: "It's not what happens to you, but how you react to it that matters." True freedom comes from governing your assent — the one power that remains yours in every circumstance.

❓ **Tomorrow's Question:**
*If we're supposed to control our judgments and emotions, doesn't this make Stoics cold and unfeeling toward others' suffering? How do you show compassion while maintaining philosophical detachment?*`,parable:`The morning mist clung to the training grounds as Caius stood before a wooden post, his gladius trembling in his grip. Three days had passed since news arrived that his younger brother Marcus had fallen at the Germanic frontier — cut down in his first battle, barely eighteen summers old.

"Strike," commanded Maxima from behind him.

Caius's blade met wood with a hollow thud, lacking conviction. His shoulders shook not from exertion but from the grief that had consumed him since the messenger's arrival.

"Again," Maxima said quietly.

This time Caius's swing went wide, and he stumbled forward, overcome. "How can you ask me to train when my brother is dead?" he cried. "Marcus will never see Rome again, never marry, never—"

"Stop," Maxima interrupted, his scarred hand settling on the young soldier's shoulder. "You speak as if you know what Marcus has lost. Tell me — what evidence do you have that death is evil?"

Caius stared at him in disbelief. "He's gone! How can that not be terrible?"

Maxima guided him to sit on a fallen log. "When the first impression strikes — 'My brother is dead' — you feel sadness. This is natural, like feeling heat from fire. But then you add judgments: 'This is catastrophic. He's been robbed of life. The gods are cruel.' These are not facts but opinions you choose to believe."

"You want me to pretend I don't care?" Caius's voice cracked.

The old general shook his head. "I want you to care accurately. Marcus lived as a Roman soldier and died with honor. He experienced eighteen years of sunrises, friendship, laughter. The part of him that made you love him — his virtue, his courage — death cannot touch. You can grieve the end of his body while celebrating the completeness of his character."

Caius wiped his eyes. "But the things he'll never do—"

"Are fantasies you've created," Maxima said firmly. "You mourn not what was lost but what was never promised. Marcus's story is complete, not incomplete. Your suffering comes from demanding that nature should have written a different tale."

Slowly, understanding dawned in the young soldier's eyes. "So when I think 'this is horrible,' I can choose not to believe that judgment?"

"Exactly. Examine each thought before giving it your assent. Say to catastrophic interpretations what Epictetus taught: 'That is merely your opinion.' Feel sadness for your loss, but don't compound natural grief with false beliefs about how the universe should operate."

Caius stood and raised his gladius again, this time with steady hands. The strike rang true against the post.

**Moral**: *Natural feelings arise from events, but destructive emotions come from the judgments we choose to believe about those events.*

*Tomorrow, Caius will struggle with showing compassion to a grieving comrade while maintaining his newfound philosophical equilibrium...*`}],Uv=[{day:1,title:"What Is a Note? — Sound Has a Name",date:"2026-03-01",image:"images/music-theory/day-1.jpg",sonnet:`**🪶 Sonnet I: The First Vibration**

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

❓ *Tomorrow's tale: If there are 12 notes, why do most songs only use 7? Ferro shows Wren the secret of the scale — and why some notes belong together.*`},{day:2,title:"What Is a Scale? — Notes That Belong Together",date:"2026-03-01",image:"images/music-theory/day-2.jpg",sonnet:`**🪶 Sonnet II: What Is a Scale? — Notes That Belong Together**

Among twelve notes that spiral through the air,
Seven are chosen by an ancient art,
To dance in patterns mathematically fair,
And speak directly to the human heart.

The major scale ascends like morning light,
Whole step, whole step, then half to make it sing,
While minor scales embrace the gentle night,
With shadows that a different pattern brings.

No random chaos rules this sacred game—
Each interval precisely placed to please
The ear that seeks in sound a kind of name,
A language written in harmonies.

*For scales transform mere noise to music's call,*
*Seven notes that somehow hold us all.*`,standard:`🎵 Day 2: What Is a Scale? — Notes That Belong Together

Yesterday we learned about the 12 named notes that repeat in octaves. But if composers used all 12 notes equally, music would sound chaotic and disorienting — like trying to paint with every color at once.

🧱 **The Concept**
A scale is a specific pattern of notes chosen from the 12 available, arranged in ascending order. Each scale creates a unique emotional "flavor" by following a formula of intervals (distances between notes).

❓ **Why It Matters**
Scales are the difference between random noise and recognizable music. They give songs their character — happy, sad, mysterious, triumphant. Every melody you know follows the rules of some scale. Without scales, we'd have chaos instead of "Twinkle, Twinkle, Little Star."

⚙️ **How It Works**
The most common scale is the **major scale**, which follows the pattern: whole step, whole step, half step, whole step, whole step, whole step, half step (W-W-H-W-W-W-H). Starting on C, this gives us: C-D-E-F-G-A-B-C. These 8 notes (with C repeated) form the C major scale — all the white keys on a piano.

A **whole step** means skipping one note (C to D), while a **half step** means the very next note (E to F). This pattern can start on any of the 12 notes, creating 12 different major scales. C major uses no sharps or flats, while G major includes F#, and F major includes Bb.

The **minor scale** follows a different pattern (W-H-W-W-H-W-W), creating a darker, more melancholic sound. Compare "Mary Had a Little Lamb" (major) to "Greensleeves" (minor) — same concept, different emotional color.

📖 **Definitions**
• **Scale**: A series of notes arranged in ascending order following a specific pattern of intervals
• **Major Scale**: The most common scale pattern (W-W-H-W-W-W-H), associated with bright, happy sounds
• **Minor Scale**: A scale pattern (W-H-W-W-H-W-W) associated with sad, dark, or mysterious sounds
• **Whole Step**: An interval of two half-steps (e.g., C to D)
• **Half Step**: The smallest interval in Western music (e.g., E to F)
• **Key**: The tonal center of a piece — the scale it's based on ("This song is in the key of C major")

🎯 **Musical Insight**
Your brain evolved to find patterns in sound for survival. The mathematical ratios within scales create predictable relationships that feel "right" to our ears. A major scale's pattern literally trains your ear to expect certain notes next — which is why melodies can surprise, satisfy, or disappoint you.

❓ **Tomorrow's Question:**
*If scales give us the notes to use, how do we stack them together? What happens when you play multiple notes at once, and why do some combinations sound beautiful while others sound terrible?*`,parable:`The morning mist clung to the cobblestones as Wren tuned her violin in the square, each string singing its pure note into the dawn. Her fingers danced across the fretboard, but instead of playing a melody, she scattered random notes like fallen leaves — A, then F#, then Bb, then D.

"Sounds like a cat fighting with mathematics," came a gravelly voice. Old Ferro emerged from the shadows, his weathered hands trailing along the fountain's edge. "You're playing every note except the ones that want to dance together."

Wren paused, her bow hovering. "What do you mean, want to dance?"

Ferro's blind eyes crinkled. "Child, notes are like people at a party. Some belong in the same room, sharing the same conversation. Others... well, they're speaking different languages entirely." He settled beside her, his gnarled fingers finding invisible keys in the air. "Play me C, then D, then E."

Wren obliged, and the three notes seemed to flow like water finding its course.

"Now," Ferro continued, "add F, G, A, and B. All the white keys, all the notes that know each other's secrets."

As Wren played the ascending pattern, something magical happened. The notes didn't just follow each other — they belonged together, like chapters in the same story. The sound was bright, orderly, complete.

"That, my dear, is a major scale," Ferro said, his voice soft with reverence. "Seven notes out of twelve, chosen not randomly but by an ancient pattern. Whole step, whole step, half step, whole step, whole step, whole step, half step. It's a recipe that's been feeding hungry souls for centuries."

Wren played it again, feeling the inevitable pull from one note to the next. "It sounds... happy."

"Aye, major scales tend toward joy, like sunlight through stained glass. But watch this." Ferro hummed a different pattern — the same starting note, but with a darker, more mysterious flavor. "Same C, but following a different recipe. This is minor — where shadows dance instead of light."

Wren tried to match it on her violin, and immediately felt the emotional shift. The notes seemed to lean inward, contemplative and deep.

"Why do they feel so different?" she asked.

Ferro smiled, his fingers still conducting invisible melodies. "Because patterns speak to something deeper than our ears, child. They speak to our hearts, our memories, our very bones. A scale isn't just a sequence of sounds — it's an emotional language that every human being somehow understands."

As the sun climbed higher, Wren practiced both scales, marveling at how seven simple notes could carry such weight, such meaning.

**Moral:** Order creates meaning from chaos, and patterns give emotion its voice.

But tomorrow, Wren would discover that even more magic awaited when these carefully chosen notes began to stack upon each other like stones in an ancient tower...`}],qv=[{day:1,title:"Why Real Estate Builds Wealth",date:"2026-03-01",image:"images/real-estate/day-1.jpg",sonnet:`**🪶 Sonnet I: The Land That Pays You Back**

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

❓ *Tomorrow's tale: If borrowed money is the engine of real estate wealth, what happens when it backfires? Dara learns the danger of leverage — and why even Hallam fears the word "overleveraged."*`},{day:2,title:"Understanding Leverage Risk",date:"2026-03-01",image:"images/real-estate/day-2.jpg",sonnet:`**🪶 Sonnet II: Understanding Leverage Risk**

The lever lifts the stone too great to bear,
Yet he who pulls without a steady hand
May find the weight too much for mortal care,
And crush the dreams he thought to understand.

For borrowed gold that multiplies the gain
Will just as surely multiply the loss,
When fortune turns and brings the storm and rain,
The debtor learns who truly pays the cost.

The vacant rooms that once sang rental songs
Now echo empty, rent no longer flowing,
While interest grows and compounds all the wrongs
Of those who bet without truly knowing.

*The wise respect the lever's double edge,*
*And never risk more than they can pledge.*`,standard:`🏠 Day 2: Understanding Leverage Risk

Yesterday we explored how leverage amplifies returns — a 3% property gain becomes a 15% return on your down payment. But leverage is a double-edged sword: just as it magnifies gains, it can magnify losses catastrophically.

🧱 **The Concept**
Leverage risk occurs when borrowed money amplifies losses, potentially wiping out your equity or forcing foreclosure when property values fall or cash flow disappears.

❓ **Why It Matters**
Many investors focus only on leverage's upside without understanding its downside. A 20% drop in property value can wipe out a 20% down payment entirely. Add vacancy, major repairs, or job loss to the mix, and leveraged investors can lose everything while cash buyers simply wait out the storm.

⚙️ **How It Works**
Using our $200,000 house example: if the market drops 20%, your property is now worth $160,000. You still owe roughly $160,000 on the mortgage — you're underwater with zero equity. If you can't make payments and must sell, you'll owe money at closing. Smart investors mitigate this through conservative loan-to-value ratios, cash reserves for vacancies and repairs, and buying in strong rental markets. They stress-test deals by asking: "What if rents drop 20%? What if I have three months vacancy? What if I need a new roof?" The best defense against leverage risk is conservative assumptions and adequate cash reserves.

📖 **Definitions**
• **Loan-to-Value (LTV)**: The mortgage amount divided by property value
• **Underwater/Upside Down**: Owing more on the mortgage than the property is worth
• **Cash Reserves**: Money set aside for vacancies, repairs, and unexpected expenses
• **Stress Testing**: Analyzing how a deal performs under worst-case scenarios
• **Foreclosure**: The legal process where lenders reclaim property due to missed payments

🎯 **Real Estate Wisdom**
Warren Buffett warns that leverage can turn a smart person into a poor person very quickly. The wealthy don't avoid leverage — they respect it. They use conservative ratios, maintain reserves, and never bet the farm on one property.

❓ **Tomorrow's Question:**
*How do you actually find and evaluate your first rental property? What numbers matter most when deciding if a deal makes sense?*`,parable:`The morning mist still clung to the village rooftops when Dara found old Hallam examining a ledger beneath the great oak tree, his weathered fingers tracing columns of figures with the precision of a master craftsman.

"You spoke yesterday of how borrowed gold multiplies gains," Dara said, settling beside him. "But surely there must be dangers in such magic?"

Hallam's eyes grew distant. "Aye, child. Thirty years past, young Willem thought himself clever. He borrowed against his father's mill to buy three cottages when land was dear. 'The rents will pay the debts,' he boasted, 'and I'll be rich as a merchant prince.'"

The old man closed his ledger with a soft thud. "But harvests failed that year. Tenants fled to seek work in distant towns. Willem's cottages sat empty while the moneylender's interest grew like weeds. When he tried to sell, the market had soured — men wanted bread, not property. The same lever that promised to lift him up crushed him down."

Dara watched a sparrow struggle with a twig too large for its nest. "So the borrowed gold that was to make him wealthy..."

"Made him poor instead. The cottages were seized, the mill lost, his family scattered like autumn leaves. Willem learned too late that a lever can break the one who wields it carelessly." Hallam's voice carried the weight of hard-won wisdom. "I've seen men drunk on the promise of easy wealth, borrowing against tomorrow's dreams without counting today's risks."

"Then how does one use this power safely?" Dara asked.

The old landlord smiled, pointing to his stone cottage with its solid walls and paid-for deed. "Never borrow more than you can bear to lose. Keep gold in reserve for lean seasons. Buy where people must live, not where they merely wish to. And remember — the moneylender cares not if your crops fail; he wants his due whether the sun shines or storms rage."

**Moral**: *The same force that can elevate you to great heights can cast you into deep valleys. Wisdom lies not in avoiding the lever, but in wielding it with respect and preparation.*

*Tomorrow, Dara will learn how Hallam chooses which properties deserve his silver — and which promises are merely fool's gold wrapped in pretty words.*`}],Yv=[{day:1,title:"The Hook — Why Stories Grab You",date:"2026-03-01",image:"images/storytelling/day-1.jpg",sonnet:`**🪶 Sonnet I: The Unfinished Thread**

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

❓ *Tomorrow's tale: Pip can hook them now — but how does he keep them? Osha teaches him the invisible shape that every great story follows, whether the teller knows it or not.*`},{day:2,title:"The Shape of Story — Why All Great Stories Feel the Same",date:"2026-03-01",image:"images/storytelling/day-2.jpg",sonnet:`**🪶 Sonnet II: The Shape of Story**

All tales that move the heart follow one thread:
From comfort through disturbance to the light,
Where ordinary souls are challenged, led
Through valleys dark to scale the highest height.

The pattern holds in every story told—
Setup that shows us what we stand to lose,
Then rising action, complications bold,
Until the crisis forces us to choose.

Like rivers carved by water's patient flow,
This ancient shape has worn its channel deep
In minds that yearn for stories' ebb and flow,
The rhythm that can make us laugh or weep.

*Though plots may vary, structures stay the same—*
*The skeleton on which we hang story's flame.*`,standard:`📖 Day 2: The Shape of Story — Why All Great Stories Feel the Same

Every great hook opens a curiosity gap, but structure is what transforms that initial question into an unforgettable journey. **Story structure** is the underlying architecture that guides how tension builds, peaks, and resolves.

🧱 **The Concept**
Story structure is the invisible skeleton that shapes how events unfold in time. It's the pattern that creates rising tension, emotional peaks, and satisfying resolution.

❓ **Why It Matters**
Without structure, even the most compelling characters and brilliant dialogue feel aimless. Structure creates the rhythm of tension and release that keeps audiences engaged. It's why we feel satisfied by some stories and frustrated by others, even when we can't explain why.

⚙️ **How It Works**
Nearly every memorable story follows the same basic arc: **Setup, Confrontation, Resolution**. In screenwriting, this is called the three-act structure. Act I introduces the world and character, then hits them with an **inciting incident** that launches the main story. Act II builds tension through escalating obstacles until reaching a **crisis point** where everything seems lost. Act III delivers the **climax** and resolution.

Think of *Star Wars*: Setup (Luke's ordinary life), Inciting Incident (Leia's message), Rising Action (rescue mission, Death Star plans), Crisis (trapped in garbage compactor, Obi-Wan's death), Climax (Death Star battle), Resolution (medal ceremony). This pattern works because it mirrors how we experience real challenges — initial resistance, escalating difficulty, darkest moment, breakthrough, new equilibrium.

📖 **Definitions**
• **Three-Act Structure**: The basic story framework of Setup, Confrontation, Resolution
• **Inciting Incident**: The event that kicks off the main story conflict
• **Rising Action**: The escalating series of obstacles and complications
• **Crisis**: The moment when the protagonist faces their greatest challenge and seems to fail
• **Climax**: The final confrontation where the main conflict is resolved

🎯 **Storytelling Wisdom**
Structure isn't a cage — it's a roadmap that frees you to focus on character and emotion. As Robert McKee says, "Story is about change," and structure is simply the most effective way to guide that change.

❓ **Tomorrow's Question:**
*Structure gives us the map, but who's taking the journey? How do you create characters that feel like real people rather than plot devices?*`,parable:`Pip sat cross-legged beside Osha's loom, watching her ancient fingers work threads of gold and midnight blue. "I understand the hook now," he said, "but my stories still feel... broken. Like they're all middle and no ending."

Osha's shuttle paused mid-weave. "Ah, young bard. You speak of the Tapestry's Great Secret." Her weathered hand traced the emerging pattern. "See how each thread begins here, journeys through trials there, and finds its place in the final design? This is not accident — this is the Shape."

Pip leaned closer, studying the intricate weave. "But surely each tapestry is different?"

"Different threads, same pattern," Osha murmured. "Watch." She pointed to where a silver thread began its journey at the loom's edge. "Here, the thread knows only itself — this is the Ordinary World. But here—" her finger moved to where the silver twisted with crimson, "—comes the Great Disturbance. The thread cannot remain as it was."

Her finger traced the silver thread's path through increasingly complex patterns, where it seemed to tangle and nearly break, until finally it emerged transformed, woven into the tapestry's golden heart.

"Every thread that survives the weaving follows this path: comfort, disturbance, struggle, near-breaking, transformation. Without this pattern, we have not tapestry but merely... loose ends."

Pip's eyes widened as he saw it — not just in the loom, but in every tale he'd ever loved. The hero's journey, the lover's quest, the fool's awakening — all following the same invisible architecture.

"The shape is not constraint," Osha whispered, "but liberation. When you trust the pattern, you are free to pour your heart into each thread."

**Moral:** Structure is not the enemy of creativity but its foundation — the ancient pattern that transforms scattered events into meaningful story.

*Tomorrow, Osha will teach Pip about the threads themselves — how to weave characters that breathe with life...*`}],Wv=[{day:1,title:"Bids for Connection — The Smallest Unit of Love",date:"2026-03-01",image:"images/building-relationships/day-1.jpg",sonnet:`**🪶 Sonnet I: The Turning Toward**

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

❓ *Tomorrow's tale: Ash learns to turn toward — but Lume speaks a different language of love entirely. Why does Lume feel unseen even when Ash is trying? Elder Rynn explains why some people need words, while others need something else entirely.*`},{day:2,title:"The Five Love Languages — Speaking Your Partner's Emotional Dialect",date:"2026-03-01",image:"images/building-relationships/day-2.jpg",sonnet:`**🪶 Sonnet II: The Five Love Languages**

Five kingdoms speak of love in different tongue—
Some weave their care in golden words of praise,
While others serve with hands both sure and young,
And some mark love through gifts that shine for days.

The time-rich offer presence, pure and whole,
Their undivided hearts in moments shared,
While others speak through touch to heal the soul
With gentle hands that show how much they cared.

Yet lovers oft assume their native speech
Will translate to their partner's waiting heart,
When true connection lies beyond our reach
Until we learn to play each other's part.

*Love's truest art is not what we would give,*
*But speaking how our beloved wants to live.*`,standard:`💕 Day 2: The Five Love Languages — Speaking Your Partner's Emotional Dialect

Yesterday we discovered that small moments matter more than grand gestures through bids for connection. But how do you know what kind of connection your partner actually needs? The answer lies in understanding that people experience love differently — through distinct emotional languages.

🧱 **The Concept**
Dr. Gary Chapman identified five primary ways people express and receive love: **words of affirmation, acts of service, receiving gifts, quality time, and physical touch.** Each person has a primary love language — the way they most naturally give and prefer to receive love.

❓ **Why It Matters**
You can turn toward your partner's bids consistently, but if you're speaking different love languages, your efforts might feel hollow to them. It's like speaking English to someone who only understands French — your sincerity is real, but the message gets lost. Understanding your partner's love language transforms good intentions into felt connection.

⚙️ **How It Works**
Imagine two people both trying to show love. Person A writes heartfelt notes and gives compliments (words of affirmation). Person B does the dishes and fixes things around the house (acts of service). If A's primary language is words and B's is acts of service, they might both feel unloved despite constant effort. A thinks, "They never tell me they appreciate me." B thinks, "They never help with anything practical."

**Words of Affirmation**: "I love you," "You're amazing at that," "Thank you for..." — verbal appreciation and encouragement.
**Acts of Service**: Doing helpful things — cooking, cleaning, errands, fixing problems.
**Receiving Gifts**: Thoughtful presents that show "I was thinking of you" — not about expense but intention.
**Quality Time**: Undivided attention — conversations, activities together, being fully present.
**Physical Touch**: Hugs, kisses, hand-holding, casual touches — appropriate physical connection.

📖 **Definitions**
• **Primary Love Language**: The way you most naturally prefer to receive love and affection
• **Secondary Love Language**: Your second-strongest preference for receiving love
• **Love Tank**: Chapman's metaphor — when your love language is spoken, your emotional tank fills up
• **Emotional Dialect**: The specific expressions within each love language that resonate most with an individual

🎯 **Relationship Wisdom**
The most loving thing you can do isn't necessarily what makes *you* feel loved — it's what makes *them* feel loved. Learning your partner's love language is like getting a translation guide for their heart.

❓ **Tomorrow's Question:**
*Even when you're speaking the same love language, conflicts still arise. What separates couples who fight and stay together from those who fight and break apart?*`,parable:`As Ash and Lume walked their chosen road, they came upon a marketplace where traders from five distant kingdoms had gathered. Each kingdom's people expressed friendship through different customs — some through elaborate speeches, others through gift-giving, others through shared meals, helpful labor, or ceremonial embraces.

"Watch," said Elder Rynn, appearing beside them with a knowing smile. "See how the traders struggle?"

Indeed, confusion reigned. The Word-Weavers from the Northern Kingdom offered beautiful speeches to the Gift-Bearers from the East, who responded with ornate tokens. But both groups looked puzzled and slightly hurt. The Touch-Sharers from the South kept trying to clasp hands with the Service-Givers from the West, who kept bustling away to perform helpful tasks. The Time-Keepers from the Central Kingdom sat alone, wanting only deep conversation, while chaos swirled around them.

"They all have generous hearts," Lume observed. "Why do they seem so frustrated?"

"Because," Elder Rynn replied, "they're each speaking their own dialect of love, assuming others understand. Watch what happens when they learn each other's languages."

He whispered something to a few traders. Suddenly, a Word-Weaver began complimenting a Gift-Bearer's craftsmanship in their own tongue. A Service-Giver started helping a Time-Keeper organize their thoughts. A Touch-Sharer offered a gentle pat to someone who had just completed a kind act.

The marketplace transformed. Faces lit up with understanding. Trade flourished not because the goods changed, but because the languages of connection were finally matched.

"In every relationship," Elder Rynn said softly, "love must be translated, not just felt."

**Moral**: *The most generous heart means little if it speaks in a language the recipient cannot understand.*

*Tomorrow, the travelers would discover that even fluent speakers of love's languages sometimes find themselves in conflict...*`}],vh=[{id:"financial-independence",name:"Financial Independence",theme:"Warren Buffett's teachings and mathematical principles",lessons:Hv},{id:"nutrition-science",name:"Nutrition Science",theme:"the science of how food fuels your body, from macronutrients to metabolism",lessons:Lv},{id:"negotiation",name:"Negotiation",theme:"FBI hostage negotiation tactics, persuasion psychology, and everyday deal-making",lessons:jv},{id:"stoic-philosophy",name:"Stoic Philosophy",theme:"ancient Stoic teachings — mental resilience, emotional control, and living with purpose",lessons:Iv},{id:"music-theory",name:"Music Theory",theme:"the building blocks of music — notes, scales, chords, rhythm, harmony, and why certain sounds make you feel things",lessons:Uv},{id:"real-estate",name:"Real Estate Investing",theme:"building wealth through property — from your first rental to cash flow analysis and passive income",lessons:qv},{id:"storytelling",name:"Storytelling",theme:"the craft of storytelling — narrative structure, character arcs, tension, pacing, dialogue, and what makes stories unforgettable",lessons:Yv},{id:"building-relationships",name:"Building Relationships",theme:"the science and art of building lasting romantic relationships — communication, love languages, conflict resolution, emotional intelligence, trust, and growing together",lessons:Wv}];function ey(a){return vh.find(r=>r.id===a)}function Vv({open:a,onClose:r}){const o=mn().pathname.split("/")[1]||"";return Z.jsxs(Z.Fragment,{children:[a&&Z.jsx("div",{className:"sidebar-overlay",onClick:r}),Z.jsxs("aside",{className:`sidebar ${a?"open":""}`,children:[Z.jsx("div",{className:"sidebar-header",children:Z.jsx($t,{to:"/",className:"sidebar-brand",onClick:r,children:"📜 Parable"})}),Z.jsx("nav",{className:"sidebar-nav",children:vh.map(h=>Z.jsxs($t,{to:`/${h.id}`,className:`sidebar-item ${o===h.id?"active":""}`,onClick:r,children:[Z.jsx("span",{className:"sidebar-item-name",children:h.name}),Z.jsx("span",{className:"sidebar-item-count",children:h.lessons.length})]},h.id))})]})]})}function Gv(){return Z.jsxs("div",{className:"container",children:[Z.jsxs("header",{className:"home-header",children:[Z.jsx("h1",{children:"📜 Parable"}),Z.jsx("p",{className:"subtitle",children:"Daily Lessons Through Stories"})]}),Z.jsx("div",{className:"series-grid",children:vh.map(a=>{const r=a.lessons[a.lessons.length-1];return Z.jsxs($t,{to:`/${a.id}`,className:"series-card",children:[Z.jsx("h2",{className:"series-card-name",children:a.name}),Z.jsx("p",{className:"series-card-theme",children:a.theme}),Z.jsxs("div",{className:"series-card-meta",children:[Z.jsxs("span",{children:[a.lessons.length," lesson",a.lessons.length!==1?"s":""]}),r&&Z.jsxs("span",{className:"series-card-latest",children:["Latest: ",r.title]})]})]},a.id)})})]})}function Qv(a){return new Date(a+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function Xv(){const{seriesId:a}=Gg(),r=ey(a||"");return r?Z.jsxs("div",{className:"container",children:[Z.jsxs("nav",{className:"breadcrumb",children:[Z.jsx($t,{to:"/",className:"nav-link",children:"Home"}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsx("span",{children:r.name})]}),Z.jsxs("header",{className:"home-header",children:[Z.jsx("h1",{children:r.name}),Z.jsx("p",{className:"subtitle",children:r.theme})]}),Z.jsx("div",{className:"lesson-list",children:r.lessons.map(l=>Z.jsxs($t,{to:`/${r.id}/lesson/${l.day}`,className:"lesson-card",children:[l.image&&Z.jsx("img",{src:`/parable/${l.image}`,alt:l.title,className:"lesson-card-img"}),Z.jsxs("div",{className:"lesson-card-text",children:[Z.jsxs("span",{className:"lesson-day",children:["Day ",l.day]}),Z.jsx("span",{className:"lesson-title",children:l.title}),Z.jsx("span",{className:"lesson-date",children:Qv(l.date)})]})]},l.day))})]}):Z.jsx(Kg,{to:"/",replace:!0})}function Fv(a,r){const l={};return(a[a.length-1]===""?[...a,""]:a).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const Kv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Zv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jv={};function Km(a,r){return(Jv.jsx?Zv:Kv).test(a)}const $v=/[ \t\n\f\r]/g;function Pv(a){return typeof a=="object"?a.type==="text"?Zm(a.value):!1:Zm(a)}function Zm(a){return a.replace($v,"")===""}class Br{constructor(r,l,o){this.normal=l,this.property=r,o&&(this.space=o)}}Br.prototype.normal={};Br.prototype.property={};Br.prototype.space=void 0;function ty(a,r){const l={},o={};for(const h of a)Object.assign(l,h.property),Object.assign(o,h.normal);return new Br(l,o,r)}function ah(a){return a.toLowerCase()}class Mt{constructor(r,l){this.attribute=l,this.property=r}}Mt.prototype.attribute="";Mt.prototype.booleanish=!1;Mt.prototype.boolean=!1;Mt.prototype.commaOrSpaceSeparated=!1;Mt.prototype.commaSeparated=!1;Mt.prototype.defined=!1;Mt.prototype.mustUseProperty=!1;Mt.prototype.number=!1;Mt.prototype.overloadedBoolean=!1;Mt.prototype.property="";Mt.prototype.spaceSeparated=!1;Mt.prototype.space=void 0;let e0=0;const we=za(),at=za(),ih=za(),X=za(),Ye=za(),vi=za(),Lt=za();function za(){return 2**++e0}const rh=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:at,commaOrSpaceSeparated:Lt,commaSeparated:vi,number:X,overloadedBoolean:ih,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Yu=Object.keys(rh);class Th extends Mt{constructor(r,l,o,h){let c=-1;if(super(r,l),Jm(this,"space",h),typeof o=="number")for(;++c<Yu.length;){const d=Yu[c];Jm(this,Yu[c],(o&rh[d])===rh[d])}}}Th.prototype.defined=!0;function Jm(a,r,l){l&&(a[r]=l)}function xi(a){const r={},l={};for(const[o,h]of Object.entries(a.properties)){const c=new Th(o,a.transform(a.attributes||{},o),h,a.space);a.mustUseProperty&&a.mustUseProperty.includes(o)&&(c.mustUseProperty=!0),r[o]=c,l[ah(o)]=o,l[ah(c.attribute)]=o}return new Br(r,l,a.space)}const ny=xi({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:X,ariaColIndex:X,ariaColSpan:X,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Ye,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:X,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:X,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Ye,ariaRowCount:X,ariaRowIndex:X,ariaRowSpan:X,ariaSelected:at,ariaSetSize:X,ariaSort:null,ariaValueMax:X,ariaValueMin:X,ariaValueNow:X,ariaValueText:null,role:null},transform(a,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function ay(a,r){return r in a?a[r]:r}function iy(a,r){return ay(a,r.toLowerCase())}const t0=xi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:vi,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Ye,autoFocus:we,autoPlay:we,blocking:Ye,capture:null,charSet:null,checked:we,cite:null,className:Ye,cols:X,colSpan:null,content:null,contentEditable:at,controls:we,controlsList:Ye,coords:X|vi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:ih,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Ye,height:X,hidden:ih,high:X,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:we,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:X,manifest:null,max:null,maxLength:X,media:null,method:null,min:null,minLength:X,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:X,pattern:null,ping:Ye,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Ye,required:we,reversed:we,rows:X,rowSpan:X,sandbox:Ye,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:X,sizes:null,slot:null,span:X,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:X,step:null,style:null,tabIndex:X,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:at,width:X,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:X,borderColor:null,bottomMargin:X,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:X,leftMargin:X,link:null,longDesc:null,lowSrc:null,marginHeight:X,marginWidth:X,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:X,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:X,valueType:null,version:null,vAlign:null,vLink:null,vSpace:X,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:X,security:null,unselectable:null},space:"html",transform:iy}),n0=xi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Lt,accentHeight:X,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:X,amplitude:X,arabicForm:null,ascent:X,attributeName:null,attributeType:null,azimuth:X,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:X,by:null,calcMode:null,capHeight:X,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:X,diffuseConstant:X,direction:null,display:null,dur:null,divisor:X,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:X,enableBackground:null,end:null,event:null,exponent:X,externalResourcesRequired:null,fill:null,fillOpacity:X,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vi,g2:vi,glyphName:vi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:X,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:X,horizOriginX:X,horizOriginY:X,id:null,ideographic:X,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:X,k:X,k1:X,k2:X,k3:X,k4:X,kernelMatrix:Lt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:X,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:X,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:X,overlineThickness:X,paintOrder:null,panose1:null,path:null,pathLength:X,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:X,pointsAtY:X,pointsAtZ:X,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Lt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Lt,rev:Lt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Lt,requiredFeatures:Lt,requiredFonts:Lt,requiredFormats:Lt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:X,specularExponent:X,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:X,strikethroughThickness:X,string:null,stroke:null,strokeDashArray:Lt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:X,strokeOpacity:X,strokeWidth:null,style:null,surfaceScale:X,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Lt,tabIndex:X,tableValues:null,target:null,targetX:X,targetY:X,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Lt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:X,underlineThickness:X,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:X,values:null,vAlphabetic:X,vMathematical:X,vectorEffect:null,vHanging:X,vIdeographic:X,version:null,vertAdvY:X,vertOriginX:X,vertOriginY:X,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:X,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ay}),ry=xi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,r){return"xlink:"+r.slice(5).toLowerCase()}}),ly=xi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:iy}),oy=xi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,r){return"xml:"+r.slice(3).toLowerCase()}}),a0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},i0=/[A-Z]/g,$m=/-[a-z]/g,r0=/^data[-\w.:]+$/i;function l0(a,r){const l=ah(r);let o=r,h=Mt;if(l in a.normal)return a.property[a.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&r0.test(r)){if(r.charAt(4)==="-"){const c=r.slice(5).replace($m,s0);o="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=r.slice(4);if(!$m.test(c)){let d=c.replace(i0,o0);d.charAt(0)!=="-"&&(d="-"+d),r="data"+d}}h=Th}return new h(o,r)}function o0(a){return"-"+a.toLowerCase()}function s0(a){return a.charAt(1).toUpperCase()}const u0=ty([ny,t0,ry,ly,oy],"html"),kh=ty([ny,n0,ry,ly,oy],"svg");function h0(a){return a.join(" ").trim()}var wi={},Wu,Pm;function c0(){if(Pm)return Wu;Pm=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,g=/^\s+|\s+$/g,y=`
`,m="/",p="*",w="",k="comment",v="declaration";function _(O,B){if(typeof O!="string")throw new TypeError("First argument must be a string");if(!O)return[];B=B||{};var F=1,V=1;function re(ne){var Q=ne.match(r);Q&&(F+=Q.length);var R=ne.lastIndexOf(y);V=~R?ne.length-R:V+ne.length}function se(){var ne={line:F,column:V};return function(Q){return Q.position=new I(ne),fe(),Q}}function I(ne){this.start=ne,this.end={line:F,column:V},this.source=B.source}I.prototype.content=O;function J(ne){var Q=new Error(B.source+":"+F+":"+V+": "+ne);if(Q.reason=ne,Q.filename=B.source,Q.line=F,Q.column=V,Q.source=O,!B.silent)throw Q}function ce(ne){var Q=ne.exec(O);if(Q){var R=Q[0];return re(R),O=O.slice(R.length),Q}}function fe(){ce(l)}function be(ne){var Q;for(ne=ne||[];Q=ee();)Q!==!1&&ne.push(Q);return ne}function ee(){var ne=se();if(!(m!=O.charAt(0)||p!=O.charAt(1))){for(var Q=2;w!=O.charAt(Q)&&(p!=O.charAt(Q)||m!=O.charAt(Q+1));)++Q;if(Q+=2,w===O.charAt(Q-1))return J("End of comment missing");var R=O.slice(2,Q-2);return V+=2,re(R),O=O.slice(Q),V+=2,ne({type:k,comment:R})}}function P(){var ne=se(),Q=ce(o);if(Q){if(ee(),!ce(h))return J("property missing ':'");var R=ce(c),G=ne({type:v,property:H(Q[0].replace(a,w)),value:R?H(R[0].replace(a,w)):w});return ce(d),G}}function Te(){var ne=[];be(ne);for(var Q;Q=P();)Q!==!1&&(ne.push(Q),be(ne));return ne}return fe(),Te()}function H(O){return O?O.replace(g,w):w}return Wu=_,Wu}var eg;function d0(){if(eg)return wi;eg=1;var a=wi&&wi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=l;const r=a(c0());function l(o,h){let c=null;if(!o||typeof o!="string")return c;const d=(0,r.default)(o),g=typeof h=="function";return d.forEach(y=>{if(y.type!=="declaration")return;const{property:m,value:p}=y;g?h(m,p,y):p&&(c=c||{},c[m]=p)}),c}return wi}var kr={},tg;function f0(){if(tg)return kr;tg=1,Object.defineProperty(kr,"__esModule",{value:!0}),kr.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,h=/^-(ms)-/,c=function(m){return!m||l.test(m)||a.test(m)},d=function(m,p){return p.toUpperCase()},g=function(m,p){return"".concat(p,"-")},y=function(m,p){return p===void 0&&(p={}),c(m)?m:(m=m.toLowerCase(),p.reactCompat?m=m.replace(h,g):m=m.replace(o,g),m.replace(r,d))};return kr.camelCase=y,kr}var Sr,ng;function m0(){if(ng)return Sr;ng=1;var a=Sr&&Sr.__importDefault||function(h){return h&&h.__esModule?h:{default:h}},r=a(d0()),l=f0();function o(h,c){var d={};return!h||typeof h!="string"||(0,r.default)(h,function(g,y){g&&y&&(d[(0,l.camelCase)(g,c)]=y)}),d}return o.default=o,Sr=o,Sr}var g0=m0();const y0=Bg(g0),sy=uy("end"),Sh=uy("start");function uy(a){return r;function r(l){const o=l&&l.position&&l.position[a]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function p0(a){const r=Sh(a),l=sy(a);if(r&&l)return{start:r,end:l}}function Ar(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?ag(a.position):"start"in a||"end"in a?ag(a):"line"in a||"column"in a?lh(a):""}function lh(a){return ig(a&&a.line)+":"+ig(a&&a.column)}function ag(a){return lh(a&&a.start)+"-"+lh(a&&a.end)}function ig(a){return a&&typeof a=="number"?a:1}class mt extends Error{constructor(r,l,o){super(),typeof l=="string"&&(o=l,l=void 0);let h="",c={},d=!1;if(l&&("line"in l&&"column"in l?c={place:l}:"start"in l&&"end"in l?c={place:l}:"type"in l?c={ancestors:[l],place:l.position}:c={...l}),typeof r=="string"?h=r:!c.cause&&r&&(d=!0,h=r.message,c.cause=r),!c.ruleId&&!c.source&&typeof o=="string"){const y=o.indexOf(":");y===-1?c.ruleId=o:(c.source=o.slice(0,y),c.ruleId=o.slice(y+1))}if(!c.place&&c.ancestors&&c.ancestors){const y=c.ancestors[c.ancestors.length-1];y&&(c.place=y.position)}const g=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=g?g.column:void 0,this.fatal=void 0,this.file="",this.message=h,this.line=g?g.line:void 0,this.name=Ar(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=d&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const xh={}.hasOwnProperty,w0=new Map,b0=/[A-Z]/g,v0=new Set(["table","tbody","thead","tfoot","tr"]),T0=new Set(["td","th"]),hy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function k0(a,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let o;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=D0(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=z0(l,r.jsx,r.jsxs)}const h={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:o,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?kh:u0,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},c=cy(h,a,void 0);return c&&typeof c!="string"?c:h.create(a,h.Fragment,{children:c||void 0},void 0)}function cy(a,r,l){if(r.type==="element")return S0(a,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return x0(a,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return A0(a,r,l);if(r.type==="mdxjsEsm")return E0(a,r);if(r.type==="root")return C0(a,r,l);if(r.type==="text")return M0(a,r)}function S0(a,r,l){const o=a.schema;let h=o;r.tagName.toLowerCase()==="svg"&&o.space==="html"&&(h=kh,a.schema=h),a.ancestors.push(r);const c=fy(a,r.tagName,!1),d=R0(a,r);let g=Ah(a,r);return v0.has(r.tagName)&&(g=g.filter(function(y){return typeof y=="string"?!Pv(y):!0})),dy(a,d,c,r),Eh(d,g),a.ancestors.pop(),a.schema=o,a.create(r,c,d,l)}function x0(a,r){if(r.data&&r.data.estree&&a.evaluater){const o=r.data.estree.body[0];return o.type,a.evaluater.evaluateExpression(o.expression)}Dr(a,r.position)}function E0(a,r){if(r.data&&r.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(r.data.estree);Dr(a,r.position)}function A0(a,r,l){const o=a.schema;let h=o;r.name==="svg"&&o.space==="html"&&(h=kh,a.schema=h),a.ancestors.push(r);const c=r.name===null?a.Fragment:fy(a,r.name,!0),d=O0(a,r),g=Ah(a,r);return dy(a,d,c,r),Eh(d,g),a.ancestors.pop(),a.schema=o,a.create(r,c,d,l)}function C0(a,r,l){const o={};return Eh(o,Ah(a,r)),a.create(r,a.Fragment,o,l)}function M0(a,r){return r.value}function dy(a,r,l,o){typeof l!="string"&&l!==a.Fragment&&a.passNode&&(r.node=o)}function Eh(a,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(a.children=l)}}function z0(a,r,l){return o;function o(h,c,d,g){const m=Array.isArray(d.children)?l:r;return g?m(c,d,g):m(c,d)}}function D0(a,r){return l;function l(o,h,c,d){const g=Array.isArray(c.children),y=Sh(o);return r(h,c,d,g,{columnNumber:y?y.column-1:void 0,fileName:a,lineNumber:y?y.line:void 0},void 0)}}function R0(a,r){const l={};let o,h;for(h in r.properties)if(h!=="children"&&xh.call(r.properties,h)){const c=B0(a,h,r.properties[h]);if(c){const[d,g]=c;a.tableCellAlignToStyle&&d==="align"&&typeof g=="string"&&T0.has(r.tagName)?o=g:l[d]=g}}if(o){const c=l.style||(l.style={});c[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return l}function O0(a,r){const l={};for(const o of r.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&a.evaluater){const c=o.data.estree.body[0];c.type;const d=c.expression;d.type;const g=d.properties[0];g.type,Object.assign(l,a.evaluater.evaluateExpression(g.argument))}else Dr(a,r.position);else{const h=o.name;let c;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&a.evaluater){const g=o.value.data.estree.body[0];g.type,c=a.evaluater.evaluateExpression(g.expression)}else Dr(a,r.position);else c=o.value===null?!0:o.value;l[h]=c}return l}function Ah(a,r){const l=[];let o=-1;const h=a.passKeys?new Map:w0;for(;++o<r.children.length;){const c=r.children[o];let d;if(a.passKeys){const y=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(y){const m=h.get(y)||0;d=y+"-"+m,h.set(y,m+1)}}const g=cy(a,c,d);g!==void 0&&l.push(g)}return l}function B0(a,r,l){const o=l0(a.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=o.commaSeparated?Fv(l):h0(l)),o.property==="style"){let h=typeof l=="object"?l:N0(a,String(l));return a.stylePropertyNameCase==="css"&&(h=_0(h)),["style",h]}return[a.elementAttributeNameCase==="react"&&o.space?a0[o.property]||o.property:o.attribute,l]}}function N0(a,r){try{return y0(r,{reactCompat:!0})}catch(l){if(a.ignoreInvalidStyle)return{};const o=l,h=new mt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw h.file=a.filePath||void 0,h.url=hy+"#cannot-parse-style-attribute",h}}function fy(a,r,l){let o;if(!l)o={type:"Literal",value:r};else if(r.includes(".")){const h=r.split(".");let c=-1,d;for(;++c<h.length;){const g=Km(h[c])?{type:"Identifier",name:h[c]}:{type:"Literal",value:h[c]};d=d?{type:"MemberExpression",object:d,property:g,computed:!!(c&&g.type==="Literal"),optional:!1}:g}o=d}else o=Km(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(o.type==="Literal"){const h=o.value;return xh.call(a.components,h)?a.components[h]:h}if(a.evaluater)return a.evaluater.evaluateExpression(o);Dr(a)}function Dr(a,r){const l=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=a.filePath||void 0,l.url=hy+"#cannot-handle-mdx-estrees-without-createevaluater",l}function _0(a){const r={};let l;for(l in a)xh.call(a,l)&&(r[H0(l)]=a[l]);return r}function H0(a){let r=a.replace(b0,L0);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function L0(a){return"-"+a.toLowerCase()}const Vu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},j0={};function I0(a,r){const l=j0,o=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,h=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return my(a,o,h)}function my(a,r,l){if(U0(a)){if("value"in a)return a.type==="html"&&!l?"":a.value;if(r&&"alt"in a&&a.alt)return a.alt;if("children"in a)return rg(a.children,r,l)}return Array.isArray(a)?rg(a,r,l):""}function rg(a,r,l){const o=[];let h=-1;for(;++h<a.length;)o[h]=my(a[h],r,l);return o.join("")}function U0(a){return!!(a&&typeof a=="object")}const lg=document.createElement("i");function Ch(a){const r="&"+a+";";lg.innerHTML=r;const l=lg.textContent;return l.charCodeAt(l.length-1)===59&&a!=="semi"||l===r?!1:l}function fn(a,r,l,o){const h=a.length;let c=0,d;if(r<0?r=-r>h?0:h+r:r=r>h?h:r,l=l>0?l:0,o.length<1e4)d=Array.from(o),d.unshift(r,l),a.splice(...d);else for(l&&a.splice(r,l);c<o.length;)d=o.slice(c,c+1e4),d.unshift(r,0),a.splice(...d),c+=1e4,r+=1e4}function Jt(a,r){return a.length>0?(fn(a,a.length,0,r),a):r}const og={}.hasOwnProperty;function q0(a){const r={};let l=-1;for(;++l<a.length;)Y0(r,a[l]);return r}function Y0(a,r){let l;for(l in r){const h=(og.call(a,l)?a[l]:void 0)||(a[l]={}),c=r[l];let d;if(c)for(d in c){og.call(h,d)||(h[d]=[]);const g=c[d];W0(h[d],Array.isArray(g)?g:g?[g]:[])}}}function W0(a,r){let l=-1;const o=[];for(;++l<r.length;)(r[l].add==="after"?a:o).push(r[l]);fn(a,0,0,o)}function gy(a,r){const l=Number.parseInt(a,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function Ti(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=ua(/[A-Za-z]/),jt=ua(/[\dA-Za-z]/),V0=ua(/[#-'*+\--9=?A-Z^-~]/);function oh(a){return a!==null&&(a<32||a===127)}const sh=ua(/\d/),G0=ua(/[\dA-Fa-f]/),Q0=ua(/[!-/:-@[-`{-~]/);function me(a){return a!==null&&a<-2}function Ct(a){return a!==null&&(a<0||a===32)}function Oe(a){return a===-2||a===-1||a===32}const X0=ua(new RegExp("\\p{P}|\\p{S}","u")),F0=ua(/\s/);function ua(a){return r;function r(l){return l!==null&&l>-1&&a.test(String.fromCharCode(l))}}function Ei(a){const r=[];let l=-1,o=0,h=0;for(;++l<a.length;){const c=a.charCodeAt(l);let d="";if(c===37&&jt(a.charCodeAt(l+1))&&jt(a.charCodeAt(l+2)))h=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(d=String.fromCharCode(c));else if(c>55295&&c<57344){const g=a.charCodeAt(l+1);c<56320&&g>56319&&g<57344?(d=String.fromCharCode(c,g),h=1):d="�"}else d=String.fromCharCode(c);d&&(r.push(a.slice(o,l),encodeURIComponent(d)),o=l+h+1,d=""),h&&(l+=h,h=0)}return r.join("")+a.slice(o)}function We(a,r,l,o){const h=o?o-1:Number.POSITIVE_INFINITY;let c=0;return d;function d(y){return Oe(y)?(a.enter(l),g(y)):r(y)}function g(y){return Oe(y)&&c++<h?(a.consume(y),g):(a.exit(l),r(y))}}const K0={tokenize:Z0};function Z0(a){const r=a.attempt(this.parser.constructs.contentInitial,o,h);let l;return r;function o(g){if(g===null){a.consume(g);return}return a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),We(a,r,"linePrefix")}function h(g){return a.enter("paragraph"),c(g)}function c(g){const y=a.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=y),l=y,d(g)}function d(g){if(g===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(g);return}return me(g)?(a.consume(g),a.exit("chunkText"),c):(a.consume(g),d)}}const J0={tokenize:$0},sg={tokenize:P0};function $0(a){const r=this,l=[];let o=0,h,c,d;return g;function g(V){if(o<l.length){const re=l[o];return r.containerState=re[1],a.attempt(re[0].continuation,y,m)(V)}return m(V)}function y(V){if(o++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,h&&F();const re=r.events.length;let se=re,I;for(;se--;)if(r.events[se][0]==="exit"&&r.events[se][1].type==="chunkFlow"){I=r.events[se][1].end;break}B(o);let J=re;for(;J<r.events.length;)r.events[J][1].end={...I},J++;return fn(r.events,se+1,0,r.events.slice(re)),r.events.length=J,m(V)}return g(V)}function m(V){if(o===l.length){if(!h)return k(V);if(h.currentConstruct&&h.currentConstruct.concrete)return _(V);r.interrupt=!!(h.currentConstruct&&!h._gfmTableDynamicInterruptHack)}return r.containerState={},a.check(sg,p,w)(V)}function p(V){return h&&F(),B(o),k(V)}function w(V){return r.parser.lazy[r.now().line]=o!==l.length,d=r.now().offset,_(V)}function k(V){return r.containerState={},a.attempt(sg,v,_)(V)}function v(V){return o++,l.push([r.currentConstruct,r.containerState]),k(V)}function _(V){if(V===null){h&&F(),B(0),a.consume(V);return}return h=h||r.parser.flow(r.now()),a.enter("chunkFlow",{_tokenizer:h,contentType:"flow",previous:c}),H(V)}function H(V){if(V===null){O(a.exit("chunkFlow"),!0),B(0),a.consume(V);return}return me(V)?(a.consume(V),O(a.exit("chunkFlow")),o=0,r.interrupt=void 0,g):(a.consume(V),H)}function O(V,re){const se=r.sliceStream(V);if(re&&se.push(null),V.previous=c,c&&(c.next=V),c=V,h.defineSkip(V.start),h.write(se),r.parser.lazy[V.start.line]){let I=h.events.length;for(;I--;)if(h.events[I][1].start.offset<d&&(!h.events[I][1].end||h.events[I][1].end.offset>d))return;const J=r.events.length;let ce=J,fe,be;for(;ce--;)if(r.events[ce][0]==="exit"&&r.events[ce][1].type==="chunkFlow"){if(fe){be=r.events[ce][1].end;break}fe=!0}for(B(o),I=J;I<r.events.length;)r.events[I][1].end={...be},I++;fn(r.events,ce+1,0,r.events.slice(J)),r.events.length=I}}function B(V){let re=l.length;for(;re-- >V;){const se=l[re];r.containerState=se[1],se[0].exit.call(r,a)}l.length=V}function F(){h.write([null]),c=void 0,h=void 0,r.containerState._closeFlow=void 0}}function P0(a,r,l){return We(a,a.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ug(a){if(a===null||Ct(a)||F0(a))return 1;if(X0(a))return 2}function Mh(a,r,l){const o=[];let h=-1;for(;++h<a.length;){const c=a[h].resolveAll;c&&!o.includes(c)&&(r=c(r,l),o.push(c))}return r}const uh={name:"attention",resolveAll:eT,tokenize:tT};function eT(a,r){let l=-1,o,h,c,d,g,y,m,p;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="attentionSequence"&&a[l][1]._close){for(o=l;o--;)if(a[o][0]==="exit"&&a[o][1].type==="attentionSequence"&&a[o][1]._open&&r.sliceSerialize(a[o][1]).charCodeAt(0)===r.sliceSerialize(a[l][1]).charCodeAt(0)){if((a[o][1]._close||a[l][1]._open)&&(a[l][1].end.offset-a[l][1].start.offset)%3&&!((a[o][1].end.offset-a[o][1].start.offset+a[l][1].end.offset-a[l][1].start.offset)%3))continue;y=a[o][1].end.offset-a[o][1].start.offset>1&&a[l][1].end.offset-a[l][1].start.offset>1?2:1;const w={...a[o][1].end},k={...a[l][1].start};hg(w,-y),hg(k,y),d={type:y>1?"strongSequence":"emphasisSequence",start:w,end:{...a[o][1].end}},g={type:y>1?"strongSequence":"emphasisSequence",start:{...a[l][1].start},end:k},c={type:y>1?"strongText":"emphasisText",start:{...a[o][1].end},end:{...a[l][1].start}},h={type:y>1?"strong":"emphasis",start:{...d.start},end:{...g.end}},a[o][1].end={...d.start},a[l][1].start={...g.end},m=[],a[o][1].end.offset-a[o][1].start.offset&&(m=Jt(m,[["enter",a[o][1],r],["exit",a[o][1],r]])),m=Jt(m,[["enter",h,r],["enter",d,r],["exit",d,r],["enter",c,r]]),m=Jt(m,Mh(r.parser.constructs.insideSpan.null,a.slice(o+1,l),r)),m=Jt(m,[["exit",c,r],["enter",g,r],["exit",g,r],["exit",h,r]]),a[l][1].end.offset-a[l][1].start.offset?(p=2,m=Jt(m,[["enter",a[l][1],r],["exit",a[l][1],r]])):p=0,fn(a,o-1,l-o+3,m),l=o+m.length-p-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="attentionSequence"&&(a[l][1].type="data");return a}function tT(a,r){const l=this.parser.constructs.attentionMarkers.null,o=this.previous,h=ug(o);let c;return d;function d(y){return c=y,a.enter("attentionSequence"),g(y)}function g(y){if(y===c)return a.consume(y),g;const m=a.exit("attentionSequence"),p=ug(y),w=!p||p===2&&h||l.includes(y),k=!h||h===2&&p||l.includes(o);return m._open=!!(c===42?w:w&&(h||!k)),m._close=!!(c===42?k:k&&(p||!w)),r(y)}}function hg(a,r){a.column+=r,a.offset+=r,a._bufferIndex+=r}const nT={name:"autolink",tokenize:aT};function aT(a,r,l){let o=0;return h;function h(v){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),c}function c(v){return cn(v)?(a.consume(v),d):v===64?l(v):m(v)}function d(v){return v===43||v===45||v===46||jt(v)?(o=1,g(v)):m(v)}function g(v){return v===58?(a.consume(v),o=0,y):(v===43||v===45||v===46||jt(v))&&o++<32?(a.consume(v),g):(o=0,m(v))}function y(v){return v===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),r):v===null||v===32||v===60||oh(v)?l(v):(a.consume(v),y)}function m(v){return v===64?(a.consume(v),p):V0(v)?(a.consume(v),m):l(v)}function p(v){return jt(v)?w(v):l(v)}function w(v){return v===46?(a.consume(v),o=0,p):v===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),r):k(v)}function k(v){if((v===45||jt(v))&&o++<63){const _=v===45?k:w;return a.consume(v),_}return l(v)}}const go={partial:!0,tokenize:iT};function iT(a,r,l){return o;function o(c){return Oe(c)?We(a,h,"linePrefix")(c):h(c)}function h(c){return c===null||me(c)?r(c):l(c)}}const yy={continuation:{tokenize:lT},exit:oT,name:"blockQuote",tokenize:rT};function rT(a,r,l){const o=this;return h;function h(d){if(d===62){const g=o.containerState;return g.open||(a.enter("blockQuote",{_container:!0}),g.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),c}return l(d)}function c(d){return Oe(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),r):(a.exit("blockQuotePrefix"),r(d))}}function lT(a,r,l){const o=this;return h;function h(d){return Oe(d)?We(a,c,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):c(d)}function c(d){return a.attempt(yy,r,l)(d)}}function oT(a){a.exit("blockQuote")}const py={name:"characterEscape",tokenize:sT};function sT(a,r,l){return o;function o(c){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(c),a.exit("escapeMarker"),h}function h(c){return Q0(c)?(a.enter("characterEscapeValue"),a.consume(c),a.exit("characterEscapeValue"),a.exit("characterEscape"),r):l(c)}}const wy={name:"characterReference",tokenize:uT};function uT(a,r,l){const o=this;let h=0,c,d;return g;function g(w){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),y}function y(w){return w===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(w),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),c=31,d=jt,p(w))}function m(w){return w===88||w===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(w),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),c=6,d=G0,p):(a.enter("characterReferenceValue"),c=7,d=sh,p(w))}function p(w){if(w===59&&h){const k=a.exit("characterReferenceValue");return d===jt&&!Ch(o.sliceSerialize(k))?l(w):(a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),a.exit("characterReference"),r)}return d(w)&&h++<c?(a.consume(w),p):l(w)}}const cg={partial:!0,tokenize:cT},dg={concrete:!0,name:"codeFenced",tokenize:hT};function hT(a,r,l){const o=this,h={partial:!0,tokenize:se};let c=0,d=0,g;return y;function y(I){return m(I)}function m(I){const J=o.events[o.events.length-1];return c=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,g=I,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),p(I)}function p(I){return I===g?(d++,a.consume(I),p):d<3?l(I):(a.exit("codeFencedFenceSequence"),Oe(I)?We(a,w,"whitespace")(I):w(I))}function w(I){return I===null||me(I)?(a.exit("codeFencedFence"),o.interrupt?r(I):a.check(cg,H,re)(I)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),k(I))}function k(I){return I===null||me(I)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),w(I)):Oe(I)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),We(a,v,"whitespace")(I)):I===96&&I===g?l(I):(a.consume(I),k)}function v(I){return I===null||me(I)?w(I):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),_(I))}function _(I){return I===null||me(I)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),w(I)):I===96&&I===g?l(I):(a.consume(I),_)}function H(I){return a.attempt(h,re,O)(I)}function O(I){return a.enter("lineEnding"),a.consume(I),a.exit("lineEnding"),B}function B(I){return c>0&&Oe(I)?We(a,F,"linePrefix",c+1)(I):F(I)}function F(I){return I===null||me(I)?a.check(cg,H,re)(I):(a.enter("codeFlowValue"),V(I))}function V(I){return I===null||me(I)?(a.exit("codeFlowValue"),F(I)):(a.consume(I),V)}function re(I){return a.exit("codeFenced"),r(I)}function se(I,J,ce){let fe=0;return be;function be(Q){return I.enter("lineEnding"),I.consume(Q),I.exit("lineEnding"),ee}function ee(Q){return I.enter("codeFencedFence"),Oe(Q)?We(I,P,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):P(Q)}function P(Q){return Q===g?(I.enter("codeFencedFenceSequence"),Te(Q)):ce(Q)}function Te(Q){return Q===g?(fe++,I.consume(Q),Te):fe>=d?(I.exit("codeFencedFenceSequence"),Oe(Q)?We(I,ne,"whitespace")(Q):ne(Q)):ce(Q)}function ne(Q){return Q===null||me(Q)?(I.exit("codeFencedFence"),J(Q)):ce(Q)}}}function cT(a,r,l){const o=this;return h;function h(d){return d===null?l(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c)}function c(d){return o.parser.lazy[o.now().line]?l(d):r(d)}}const Gu={name:"codeIndented",tokenize:fT},dT={partial:!0,tokenize:mT};function fT(a,r,l){const o=this;return h;function h(m){return a.enter("codeIndented"),We(a,c,"linePrefix",5)(m)}function c(m){const p=o.events[o.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?d(m):l(m)}function d(m){return m===null?y(m):me(m)?a.attempt(dT,d,y)(m):(a.enter("codeFlowValue"),g(m))}function g(m){return m===null||me(m)?(a.exit("codeFlowValue"),d(m)):(a.consume(m),g)}function y(m){return a.exit("codeIndented"),r(m)}}function mT(a,r,l){const o=this;return h;function h(d){return o.parser.lazy[o.now().line]?l(d):me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),h):We(a,c,"linePrefix",5)(d)}function c(d){const g=o.events[o.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?r(d):me(d)?h(d):l(d)}}const gT={name:"codeText",previous:pT,resolve:yT,tokenize:wT};function yT(a){let r=a.length-4,l=3,o,h;if((a[l][1].type==="lineEnding"||a[l][1].type==="space")&&(a[r][1].type==="lineEnding"||a[r][1].type==="space")){for(o=l;++o<r;)if(a[o][1].type==="codeTextData"){a[l][1].type="codeTextPadding",a[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(o=l-1,r++;++o<=r;)h===void 0?o!==r&&a[o][1].type!=="lineEnding"&&(h=o):(o===r||a[o][1].type==="lineEnding")&&(a[h][1].type="codeTextData",o!==h+2&&(a[h][1].end=a[o-1][1].end,a.splice(h+2,o-h-2),r-=o-h-2,o=h+2),h=void 0);return a}function pT(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function wT(a,r,l){let o=0,h,c;return d;function d(w){return a.enter("codeText"),a.enter("codeTextSequence"),g(w)}function g(w){return w===96?(a.consume(w),o++,g):(a.exit("codeTextSequence"),y(w))}function y(w){return w===null?l(w):w===32?(a.enter("space"),a.consume(w),a.exit("space"),y):w===96?(c=a.enter("codeTextSequence"),h=0,p(w)):me(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),y):(a.enter("codeTextData"),m(w))}function m(w){return w===null||w===32||w===96||me(w)?(a.exit("codeTextData"),y(w)):(a.consume(w),m)}function p(w){return w===96?(a.consume(w),h++,p):h===o?(a.exit("codeTextSequence"),a.exit("codeText"),r(w)):(c.type="codeTextData",m(w))}}class bT{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const o=l??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(r,o):r>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(r,l,o){const h=l||0;this.setCursor(Math.trunc(r));const c=this.right.splice(this.right.length-h,Number.POSITIVE_INFINITY);return o&&xr(this.left,o),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),xr(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),xr(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);xr(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);xr(this.left,l.reverse())}}}function xr(a,r){let l=0;if(r.length<1e4)a.push(...r);else for(;l<r.length;)a.push(...r.slice(l,l+1e4)),l+=1e4}function by(a){const r={};let l=-1,o,h,c,d,g,y,m;const p=new bT(a);for(;++l<p.length;){for(;l in r;)l=r[l];if(o=p.get(l),l&&o[1].type==="chunkFlow"&&p.get(l-1)[1].type==="listItemPrefix"&&(y=o[1]._tokenizer.events,c=0,c<y.length&&y[c][1].type==="lineEndingBlank"&&(c+=2),c<y.length&&y[c][1].type==="content"))for(;++c<y.length&&y[c][1].type!=="content";)y[c][1].type==="chunkText"&&(y[c][1]._isInFirstContentOfListItem=!0,c++);if(o[0]==="enter")o[1].contentType&&(Object.assign(r,vT(p,l)),l=r[l],m=!0);else if(o[1]._container){for(c=l,h=void 0;c--;)if(d=p.get(c),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(h&&(p.get(h)[1].type="lineEndingBlank"),d[1].type="lineEnding",h=c);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;h&&(o[1].end={...p.get(h)[1].start},g=p.slice(h,l),g.unshift(o),p.splice(h,l-h+1,g))}}return fn(a,0,Number.POSITIVE_INFINITY,p.slice(0)),!m}function vT(a,r){const l=a.get(r)[1],o=a.get(r)[2];let h=r-1;const c=[];let d=l._tokenizer;d||(d=o.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const g=d.events,y=[],m={};let p,w,k=-1,v=l,_=0,H=0;const O=[H];for(;v;){for(;a.get(++h)[1]!==v;);c.push(h),v._tokenizer||(p=o.sliceStream(v),v.next||p.push(null),w&&d.defineSkip(v.start),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(p),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),w=v,v=v.next}for(v=l;++k<g.length;)g[k][0]==="exit"&&g[k-1][0]==="enter"&&g[k][1].type===g[k-1][1].type&&g[k][1].start.line!==g[k][1].end.line&&(H=k+1,O.push(H),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(d.events=[],v?(v._tokenizer=void 0,v.previous=void 0):O.pop(),k=O.length;k--;){const B=g.slice(O[k],O[k+1]),F=c.pop();y.push([F,F+B.length-1]),a.splice(F,2,B)}for(y.reverse(),k=-1;++k<y.length;)m[_+y[k][0]]=_+y[k][1],_+=y[k][1]-y[k][0]-1;return m}const TT={resolve:ST,tokenize:xT},kT={partial:!0,tokenize:ET};function ST(a){return by(a),a}function xT(a,r){let l;return o;function o(g){return a.enter("content"),l=a.enter("chunkContent",{contentType:"content"}),h(g)}function h(g){return g===null?c(g):me(g)?a.check(kT,d,c)(g):(a.consume(g),h)}function c(g){return a.exit("chunkContent"),a.exit("content"),r(g)}function d(g){return a.consume(g),a.exit("chunkContent"),l.next=a.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,h}}function ET(a,r,l){const o=this;return h;function h(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),We(a,c,"linePrefix")}function c(d){if(d===null||me(d))return l(d);const g=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?r(d):a.interrupt(o.parser.constructs.flow,l,r)(d)}}function vy(a,r,l,o,h,c,d,g,y){const m=y||Number.POSITIVE_INFINITY;let p=0;return w;function w(B){return B===60?(a.enter(o),a.enter(h),a.enter(c),a.consume(B),a.exit(c),k):B===null||B===32||B===41||oh(B)?l(B):(a.enter(o),a.enter(d),a.enter(g),a.enter("chunkString",{contentType:"string"}),H(B))}function k(B){return B===62?(a.enter(c),a.consume(B),a.exit(c),a.exit(h),a.exit(o),r):(a.enter(g),a.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===62?(a.exit("chunkString"),a.exit(g),k(B)):B===null||B===60||me(B)?l(B):(a.consume(B),B===92?_:v)}function _(B){return B===60||B===62||B===92?(a.consume(B),v):v(B)}function H(B){return!p&&(B===null||B===41||Ct(B))?(a.exit("chunkString"),a.exit(g),a.exit(d),a.exit(o),r(B)):p<m&&B===40?(a.consume(B),p++,H):B===41?(a.consume(B),p--,H):B===null||B===32||B===40||oh(B)?l(B):(a.consume(B),B===92?O:H)}function O(B){return B===40||B===41||B===92?(a.consume(B),H):H(B)}}function Ty(a,r,l,o,h,c){const d=this;let g=0,y;return m;function m(v){return a.enter(o),a.enter(h),a.consume(v),a.exit(h),a.enter(c),p}function p(v){return g>999||v===null||v===91||v===93&&!y||v===94&&!g&&"_hiddenFootnoteSupport"in d.parser.constructs?l(v):v===93?(a.exit(c),a.enter(h),a.consume(v),a.exit(h),a.exit(o),r):me(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),p):(a.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||v===91||v===93||me(v)||g++>999?(a.exit("chunkString"),p(v)):(a.consume(v),y||(y=!Oe(v)),v===92?k:w)}function k(v){return v===91||v===92||v===93?(a.consume(v),g++,w):w(v)}}function ky(a,r,l,o,h,c){let d;return g;function g(k){return k===34||k===39||k===40?(a.enter(o),a.enter(h),a.consume(k),a.exit(h),d=k===40?41:k,y):l(k)}function y(k){return k===d?(a.enter(h),a.consume(k),a.exit(h),a.exit(o),r):(a.enter(c),m(k))}function m(k){return k===d?(a.exit(c),y(d)):k===null?l(k):me(k)?(a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),We(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===d||k===null||me(k)?(a.exit("chunkString"),m(k)):(a.consume(k),k===92?w:p)}function w(k){return k===d||k===92?(a.consume(k),p):p(k)}}function Cr(a,r){let l;return o;function o(h){return me(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),l=!0,o):Oe(h)?We(a,o,l?"linePrefix":"lineSuffix")(h):r(h)}}const AT={name:"definition",tokenize:MT},CT={partial:!0,tokenize:zT};function MT(a,r,l){const o=this;let h;return c;function c(v){return a.enter("definition"),d(v)}function d(v){return Ty.call(o,a,g,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function g(v){return h=Ti(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),v===58?(a.enter("definitionMarker"),a.consume(v),a.exit("definitionMarker"),y):l(v)}function y(v){return Ct(v)?Cr(a,m)(v):m(v)}function m(v){return vy(a,p,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function p(v){return a.attempt(CT,w,w)(v)}function w(v){return Oe(v)?We(a,k,"whitespace")(v):k(v)}function k(v){return v===null||me(v)?(a.exit("definition"),o.parser.defined.push(h),r(v)):l(v)}}function zT(a,r,l){return o;function o(g){return Ct(g)?Cr(a,h)(g):l(g)}function h(g){return ky(a,c,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(g)}function c(g){return Oe(g)?We(a,d,"whitespace")(g):d(g)}function d(g){return g===null||me(g)?r(g):l(g)}}const DT={name:"hardBreakEscape",tokenize:RT};function RT(a,r,l){return o;function o(c){return a.enter("hardBreakEscape"),a.consume(c),h}function h(c){return me(c)?(a.exit("hardBreakEscape"),r(c)):l(c)}}const OT={name:"headingAtx",resolve:BT,tokenize:NT};function BT(a,r){let l=a.length-2,o=3,h,c;return a[o][1].type==="whitespace"&&(o+=2),l-2>o&&a[l][1].type==="whitespace"&&(l-=2),a[l][1].type==="atxHeadingSequence"&&(o===l-1||l-4>o&&a[l-2][1].type==="whitespace")&&(l-=o+1===l?2:4),l>o&&(h={type:"atxHeadingText",start:a[o][1].start,end:a[l][1].end},c={type:"chunkText",start:a[o][1].start,end:a[l][1].end,contentType:"text"},fn(a,o,l-o+1,[["enter",h,r],["enter",c,r],["exit",c,r],["exit",h,r]])),a}function NT(a,r,l){let o=0;return h;function h(p){return a.enter("atxHeading"),c(p)}function c(p){return a.enter("atxHeadingSequence"),d(p)}function d(p){return p===35&&o++<6?(a.consume(p),d):p===null||Ct(p)?(a.exit("atxHeadingSequence"),g(p)):l(p)}function g(p){return p===35?(a.enter("atxHeadingSequence"),y(p)):p===null||me(p)?(a.exit("atxHeading"),r(p)):Oe(p)?We(a,g,"whitespace")(p):(a.enter("atxHeadingText"),m(p))}function y(p){return p===35?(a.consume(p),y):(a.exit("atxHeadingSequence"),g(p))}function m(p){return p===null||p===35||Ct(p)?(a.exit("atxHeadingText"),g(p)):(a.consume(p),m)}}const _T=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fg=["pre","script","style","textarea"],HT={concrete:!0,name:"htmlFlow",resolveTo:IT,tokenize:UT},LT={partial:!0,tokenize:YT},jT={partial:!0,tokenize:qT};function IT(a){let r=a.length;for(;r--&&!(a[r][0]==="enter"&&a[r][1].type==="htmlFlow"););return r>1&&a[r-2][1].type==="linePrefix"&&(a[r][1].start=a[r-2][1].start,a[r+1][1].start=a[r-2][1].start,a.splice(r-2,2)),a}function UT(a,r,l){const o=this;let h,c,d,g,y;return m;function m(T){return p(T)}function p(T){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(T),w}function w(T){return T===33?(a.consume(T),k):T===47?(a.consume(T),c=!0,H):T===63?(a.consume(T),h=3,o.interrupt?r:S):cn(T)?(a.consume(T),d=String.fromCharCode(T),O):l(T)}function k(T){return T===45?(a.consume(T),h=2,v):T===91?(a.consume(T),h=5,g=0,_):cn(T)?(a.consume(T),h=4,o.interrupt?r:S):l(T)}function v(T){return T===45?(a.consume(T),o.interrupt?r:S):l(T)}function _(T){const $="CDATA[";return T===$.charCodeAt(g++)?(a.consume(T),g===$.length?o.interrupt?r:P:_):l(T)}function H(T){return cn(T)?(a.consume(T),d=String.fromCharCode(T),O):l(T)}function O(T){if(T===null||T===47||T===62||Ct(T)){const $=T===47,he=d.toLowerCase();return!$&&!c&&fg.includes(he)?(h=1,o.interrupt?r(T):P(T)):_T.includes(d.toLowerCase())?(h=6,$?(a.consume(T),B):o.interrupt?r(T):P(T)):(h=7,o.interrupt&&!o.parser.lazy[o.now().line]?l(T):c?F(T):V(T))}return T===45||jt(T)?(a.consume(T),d+=String.fromCharCode(T),O):l(T)}function B(T){return T===62?(a.consume(T),o.interrupt?r:P):l(T)}function F(T){return Oe(T)?(a.consume(T),F):be(T)}function V(T){return T===47?(a.consume(T),be):T===58||T===95||cn(T)?(a.consume(T),re):Oe(T)?(a.consume(T),V):be(T)}function re(T){return T===45||T===46||T===58||T===95||jt(T)?(a.consume(T),re):se(T)}function se(T){return T===61?(a.consume(T),I):Oe(T)?(a.consume(T),se):V(T)}function I(T){return T===null||T===60||T===61||T===62||T===96?l(T):T===34||T===39?(a.consume(T),y=T,J):Oe(T)?(a.consume(T),I):ce(T)}function J(T){return T===y?(a.consume(T),y=null,fe):T===null||me(T)?l(T):(a.consume(T),J)}function ce(T){return T===null||T===34||T===39||T===47||T===60||T===61||T===62||T===96||Ct(T)?se(T):(a.consume(T),ce)}function fe(T){return T===47||T===62||Oe(T)?V(T):l(T)}function be(T){return T===62?(a.consume(T),ee):l(T)}function ee(T){return T===null||me(T)?P(T):Oe(T)?(a.consume(T),ee):l(T)}function P(T){return T===45&&h===2?(a.consume(T),R):T===60&&h===1?(a.consume(T),G):T===62&&h===4?(a.consume(T),E):T===63&&h===3?(a.consume(T),S):T===93&&h===5?(a.consume(T),ve):me(T)&&(h===6||h===7)?(a.exit("htmlFlowData"),a.check(LT,U,Te)(T)):T===null||me(T)?(a.exit("htmlFlowData"),Te(T)):(a.consume(T),P)}function Te(T){return a.check(jT,ne,U)(T)}function ne(T){return a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Q}function Q(T){return T===null||me(T)?Te(T):(a.enter("htmlFlowData"),P(T))}function R(T){return T===45?(a.consume(T),S):P(T)}function G(T){return T===47?(a.consume(T),d="",ie):P(T)}function ie(T){if(T===62){const $=d.toLowerCase();return fg.includes($)?(a.consume(T),E):P(T)}return cn(T)&&d.length<8?(a.consume(T),d+=String.fromCharCode(T),ie):P(T)}function ve(T){return T===93?(a.consume(T),S):P(T)}function S(T){return T===62?(a.consume(T),E):T===45&&h===2?(a.consume(T),S):P(T)}function E(T){return T===null||me(T)?(a.exit("htmlFlowData"),U(T)):(a.consume(T),E)}function U(T){return a.exit("htmlFlow"),r(T)}}function qT(a,r,l){const o=this;return h;function h(d){return me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):l(d)}function c(d){return o.parser.lazy[o.now().line]?l(d):r(d)}}function YT(a,r,l){return o;function o(h){return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),a.attempt(go,r,l)}}const WT={name:"htmlText",tokenize:VT};function VT(a,r,l){const o=this;let h,c,d;return g;function g(S){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(S),y}function y(S){return S===33?(a.consume(S),m):S===47?(a.consume(S),se):S===63?(a.consume(S),V):cn(S)?(a.consume(S),ce):l(S)}function m(S){return S===45?(a.consume(S),p):S===91?(a.consume(S),c=0,_):cn(S)?(a.consume(S),F):l(S)}function p(S){return S===45?(a.consume(S),v):l(S)}function w(S){return S===null?l(S):S===45?(a.consume(S),k):me(S)?(d=w,G(S)):(a.consume(S),w)}function k(S){return S===45?(a.consume(S),v):w(S)}function v(S){return S===62?R(S):S===45?k(S):w(S)}function _(S){const E="CDATA[";return S===E.charCodeAt(c++)?(a.consume(S),c===E.length?H:_):l(S)}function H(S){return S===null?l(S):S===93?(a.consume(S),O):me(S)?(d=H,G(S)):(a.consume(S),H)}function O(S){return S===93?(a.consume(S),B):H(S)}function B(S){return S===62?R(S):S===93?(a.consume(S),B):H(S)}function F(S){return S===null||S===62?R(S):me(S)?(d=F,G(S)):(a.consume(S),F)}function V(S){return S===null?l(S):S===63?(a.consume(S),re):me(S)?(d=V,G(S)):(a.consume(S),V)}function re(S){return S===62?R(S):V(S)}function se(S){return cn(S)?(a.consume(S),I):l(S)}function I(S){return S===45||jt(S)?(a.consume(S),I):J(S)}function J(S){return me(S)?(d=J,G(S)):Oe(S)?(a.consume(S),J):R(S)}function ce(S){return S===45||jt(S)?(a.consume(S),ce):S===47||S===62||Ct(S)?fe(S):l(S)}function fe(S){return S===47?(a.consume(S),R):S===58||S===95||cn(S)?(a.consume(S),be):me(S)?(d=fe,G(S)):Oe(S)?(a.consume(S),fe):R(S)}function be(S){return S===45||S===46||S===58||S===95||jt(S)?(a.consume(S),be):ee(S)}function ee(S){return S===61?(a.consume(S),P):me(S)?(d=ee,G(S)):Oe(S)?(a.consume(S),ee):fe(S)}function P(S){return S===null||S===60||S===61||S===62||S===96?l(S):S===34||S===39?(a.consume(S),h=S,Te):me(S)?(d=P,G(S)):Oe(S)?(a.consume(S),P):(a.consume(S),ne)}function Te(S){return S===h?(a.consume(S),h=void 0,Q):S===null?l(S):me(S)?(d=Te,G(S)):(a.consume(S),Te)}function ne(S){return S===null||S===34||S===39||S===60||S===61||S===96?l(S):S===47||S===62||Ct(S)?fe(S):(a.consume(S),ne)}function Q(S){return S===47||S===62||Ct(S)?fe(S):l(S)}function R(S){return S===62?(a.consume(S),a.exit("htmlTextData"),a.exit("htmlText"),r):l(S)}function G(S){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),ie}function ie(S){return Oe(S)?We(a,ve,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):ve(S)}function ve(S){return a.enter("htmlTextData"),d(S)}}const zh={name:"labelEnd",resolveAll:FT,resolveTo:KT,tokenize:ZT},GT={tokenize:JT},QT={tokenize:$T},XT={tokenize:PT};function FT(a){let r=-1;const l=[];for(;++r<a.length;){const o=a[r][1];if(l.push(a[r]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const h=o.type==="labelImage"?4:2;o.type="data",r+=h}}return a.length!==l.length&&fn(a,0,a.length,l),a}function KT(a,r){let l=a.length,o=0,h,c,d,g;for(;l--;)if(h=a[l][1],c){if(h.type==="link"||h.type==="labelLink"&&h._inactive)break;a[l][0]==="enter"&&h.type==="labelLink"&&(h._inactive=!0)}else if(d){if(a[l][0]==="enter"&&(h.type==="labelImage"||h.type==="labelLink")&&!h._balanced&&(c=l,h.type!=="labelLink")){o=2;break}}else h.type==="labelEnd"&&(d=l);const y={type:a[c][1].type==="labelLink"?"link":"image",start:{...a[c][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[c][1].start},end:{...a[d][1].end}},p={type:"labelText",start:{...a[c+o+2][1].end},end:{...a[d-2][1].start}};return g=[["enter",y,r],["enter",m,r]],g=Jt(g,a.slice(c+1,c+o+3)),g=Jt(g,[["enter",p,r]]),g=Jt(g,Mh(r.parser.constructs.insideSpan.null,a.slice(c+o+4,d-3),r)),g=Jt(g,[["exit",p,r],a[d-2],a[d-1],["exit",m,r]]),g=Jt(g,a.slice(d+1)),g=Jt(g,[["exit",y,r]]),fn(a,c,a.length,g),a}function ZT(a,r,l){const o=this;let h=o.events.length,c,d;for(;h--;)if((o.events[h][1].type==="labelImage"||o.events[h][1].type==="labelLink")&&!o.events[h][1]._balanced){c=o.events[h][1];break}return g;function g(k){return c?c._inactive?w(k):(d=o.parser.defined.includes(Ti(o.sliceSerialize({start:c.end,end:o.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(k),a.exit("labelMarker"),a.exit("labelEnd"),y):l(k)}function y(k){return k===40?a.attempt(GT,p,d?p:w)(k):k===91?a.attempt(QT,p,d?m:w)(k):d?p(k):w(k)}function m(k){return a.attempt(XT,p,w)(k)}function p(k){return r(k)}function w(k){return c._balanced=!0,l(k)}}function JT(a,r,l){return o;function o(w){return a.enter("resource"),a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),h}function h(w){return Ct(w)?Cr(a,c)(w):c(w)}function c(w){return w===41?p(w):vy(a,d,g,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function d(w){return Ct(w)?Cr(a,y)(w):p(w)}function g(w){return l(w)}function y(w){return w===34||w===39||w===40?ky(a,m,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):p(w)}function m(w){return Ct(w)?Cr(a,p)(w):p(w)}function p(w){return w===41?(a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),a.exit("resource"),r):l(w)}}function $T(a,r,l){const o=this;return h;function h(g){return Ty.call(o,a,c,d,"reference","referenceMarker","referenceString")(g)}function c(g){return o.parser.defined.includes(Ti(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?r(g):l(g)}function d(g){return l(g)}}function PT(a,r,l){return o;function o(c){return a.enter("reference"),a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),h}function h(c){return c===93?(a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),a.exit("reference"),r):l(c)}}const ek={name:"labelStartImage",resolveAll:zh.resolveAll,tokenize:tk};function tk(a,r,l){const o=this;return h;function h(g){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(g),a.exit("labelImageMarker"),c}function c(g){return g===91?(a.enter("labelMarker"),a.consume(g),a.exit("labelMarker"),a.exit("labelImage"),d):l(g)}function d(g){return g===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(g):r(g)}}const nk={name:"labelStartLink",resolveAll:zh.resolveAll,tokenize:ak};function ak(a,r,l){const o=this;return h;function h(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),c}function c(d){return d===94&&"_hiddenFootnoteSupport"in o.parser.constructs?l(d):r(d)}}const Qu={name:"lineEnding",tokenize:ik};function ik(a,r){return l;function l(o){return a.enter("lineEnding"),a.consume(o),a.exit("lineEnding"),We(a,r,"linePrefix")}}const oo={name:"thematicBreak",tokenize:rk};function rk(a,r,l){let o=0,h;return c;function c(m){return a.enter("thematicBreak"),d(m)}function d(m){return h=m,g(m)}function g(m){return m===h?(a.enter("thematicBreakSequence"),y(m)):o>=3&&(m===null||me(m))?(a.exit("thematicBreak"),r(m)):l(m)}function y(m){return m===h?(a.consume(m),o++,y):(a.exit("thematicBreakSequence"),Oe(m)?We(a,g,"whitespace")(m):g(m))}}const At={continuation:{tokenize:uk},exit:ck,name:"list",tokenize:sk},lk={partial:!0,tokenize:dk},ok={partial:!0,tokenize:hk};function sk(a,r,l){const o=this,h=o.events[o.events.length-1];let c=h&&h[1].type==="linePrefix"?h[2].sliceSerialize(h[1],!0).length:0,d=0;return g;function g(v){const _=o.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(_==="listUnordered"?!o.containerState.marker||v===o.containerState.marker:sh(v)){if(o.containerState.type||(o.containerState.type=_,a.enter(_,{_container:!0})),_==="listUnordered")return a.enter("listItemPrefix"),v===42||v===45?a.check(oo,l,m)(v):m(v);if(!o.interrupt||v===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),y(v)}return l(v)}function y(v){return sh(v)&&++d<10?(a.consume(v),y):(!o.interrupt||d<2)&&(o.containerState.marker?v===o.containerState.marker:v===41||v===46)?(a.exit("listItemValue"),m(v)):l(v)}function m(v){return a.enter("listItemMarker"),a.consume(v),a.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||v,a.check(go,o.interrupt?l:p,a.attempt(lk,k,w))}function p(v){return o.containerState.initialBlankLine=!0,c++,k(v)}function w(v){return Oe(v)?(a.enter("listItemPrefixWhitespace"),a.consume(v),a.exit("listItemPrefixWhitespace"),k):l(v)}function k(v){return o.containerState.size=c+o.sliceSerialize(a.exit("listItemPrefix"),!0).length,r(v)}}function uk(a,r,l){const o=this;return o.containerState._closeFlow=void 0,a.check(go,h,c);function h(g){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,We(a,r,"listItemIndent",o.containerState.size+1)(g)}function c(g){return o.containerState.furtherBlankLines||!Oe(g)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,d(g)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,a.attempt(ok,r,d)(g))}function d(g){return o.containerState._closeFlow=!0,o.interrupt=void 0,We(a,a.attempt(At,r,l),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g)}}function hk(a,r,l){const o=this;return We(a,h,"listItemIndent",o.containerState.size+1);function h(c){const d=o.events[o.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===o.containerState.size?r(c):l(c)}}function ck(a){a.exit(this.containerState.type)}function dk(a,r,l){const o=this;return We(a,h,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function h(c){const d=o.events[o.events.length-1];return!Oe(c)&&d&&d[1].type==="listItemPrefixWhitespace"?r(c):l(c)}}const mg={name:"setextUnderline",resolveTo:fk,tokenize:mk};function fk(a,r){let l=a.length,o,h,c;for(;l--;)if(a[l][0]==="enter"){if(a[l][1].type==="content"){o=l;break}a[l][1].type==="paragraph"&&(h=l)}else a[l][1].type==="content"&&a.splice(l,1),!c&&a[l][1].type==="definition"&&(c=l);const d={type:"setextHeading",start:{...a[o][1].start},end:{...a[a.length-1][1].end}};return a[h][1].type="setextHeadingText",c?(a.splice(h,0,["enter",d,r]),a.splice(c+1,0,["exit",a[o][1],r]),a[o][1].end={...a[c][1].end}):a[o][1]=d,a.push(["exit",d,r]),a}function mk(a,r,l){const o=this;let h;return c;function c(m){let p=o.events.length,w;for(;p--;)if(o.events[p][1].type!=="lineEnding"&&o.events[p][1].type!=="linePrefix"&&o.events[p][1].type!=="content"){w=o.events[p][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||w)?(a.enter("setextHeadingLine"),h=m,d(m)):l(m)}function d(m){return a.enter("setextHeadingLineSequence"),g(m)}function g(m){return m===h?(a.consume(m),g):(a.exit("setextHeadingLineSequence"),Oe(m)?We(a,y,"lineSuffix")(m):y(m))}function y(m){return m===null||me(m)?(a.exit("setextHeadingLine"),r(m)):l(m)}}const gk={tokenize:yk};function yk(a){const r=this,l=a.attempt(go,o,a.attempt(this.parser.constructs.flowInitial,h,We(a,a.attempt(this.parser.constructs.flow,h,a.attempt(TT,h)),"linePrefix")));return l;function o(c){if(c===null){a.consume(c);return}return a.enter("lineEndingBlank"),a.consume(c),a.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function h(c){if(c===null){a.consume(c);return}return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),r.currentConstruct=void 0,l}}const pk={resolveAll:xy()},wk=Sy("string"),bk=Sy("text");function Sy(a){return{resolveAll:xy(a==="text"?vk:void 0),tokenize:r};function r(l){const o=this,h=this.parser.constructs[a],c=l.attempt(h,d,g);return d;function d(p){return m(p)?c(p):g(p)}function g(p){if(p===null){l.consume(p);return}return l.enter("data"),l.consume(p),y}function y(p){return m(p)?(l.exit("data"),c(p)):(l.consume(p),y)}function m(p){if(p===null)return!0;const w=h[p];let k=-1;if(w)for(;++k<w.length;){const v=w[k];if(!v.previous||v.previous.call(o,o.previous))return!0}return!1}}}function xy(a){return r;function r(l,o){let h=-1,c;for(;++h<=l.length;)c===void 0?l[h]&&l[h][1].type==="data"&&(c=h,h++):(!l[h]||l[h][1].type!=="data")&&(h!==c+2&&(l[c][1].end=l[h-1][1].end,l.splice(c+2,h-c-2),h=c+2),c=void 0);return a?a(l,o):l}}function vk(a,r){let l=0;for(;++l<=a.length;)if((l===a.length||a[l][1].type==="lineEnding")&&a[l-1][1].type==="data"){const o=a[l-1][1],h=r.sliceStream(o);let c=h.length,d=-1,g=0,y;for(;c--;){const m=h[c];if(typeof m=="string"){for(d=m.length;m.charCodeAt(d-1)===32;)g++,d--;if(d)break;d=-1}else if(m===-2)y=!0,g++;else if(m!==-1){c++;break}}if(r._contentTypeTextTrailing&&l===a.length&&(g=0),g){const m={type:l===a.length||y||g<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?d:o.start._bufferIndex+d,_index:o.start._index+c,line:o.end.line,column:o.end.column-g,offset:o.end.offset-g},end:{...o.end}};o.end={...m.start},o.start.offset===o.end.offset?Object.assign(o,m):(a.splice(l,0,["enter",m,r],["exit",m,r]),l+=2)}l++}return a}const Tk={42:At,43:At,45:At,48:At,49:At,50:At,51:At,52:At,53:At,54:At,55:At,56:At,57:At,62:yy},kk={91:AT},Sk={[-2]:Gu,[-1]:Gu,32:Gu},xk={35:OT,42:oo,45:[mg,oo],60:HT,61:mg,95:oo,96:dg,126:dg},Ek={38:wy,92:py},Ak={[-5]:Qu,[-4]:Qu,[-3]:Qu,33:ek,38:wy,42:uh,60:[nT,WT],91:nk,92:[DT,py],93:zh,95:uh,96:gT},Ck={null:[uh,pk]},Mk={null:[42,95]},zk={null:[]},Dk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Mk,contentInitial:kk,disable:zk,document:Tk,flow:xk,flowInitial:Sk,insideSpan:Ck,string:Ek,text:Ak},Symbol.toStringTag,{value:"Module"}));function Rk(a,r,l){let o={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const h={},c=[];let d=[],g=[];const y={attempt:J(se),check:J(I),consume:F,enter:V,exit:re,interrupt:J(I,{interrupt:!0})},m={code:null,containerState:{},defineSkip:H,events:[],now:_,parser:a,previous:null,sliceSerialize:k,sliceStream:v,write:w};let p=r.tokenize.call(m,y);return r.resolveAll&&c.push(r),m;function w(ee){return d=Jt(d,ee),O(),d[d.length-1]!==null?[]:(ce(r,0),m.events=Mh(c,m.events,m),m.events)}function k(ee,P){return Bk(v(ee),P)}function v(ee){return Ok(d,ee)}function _(){const{_bufferIndex:ee,_index:P,line:Te,column:ne,offset:Q}=o;return{_bufferIndex:ee,_index:P,line:Te,column:ne,offset:Q}}function H(ee){h[ee.line]=ee.column,be()}function O(){let ee;for(;o._index<d.length;){const P=d[o._index];if(typeof P=="string")for(ee=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ee&&o._bufferIndex<P.length;)B(P.charCodeAt(o._bufferIndex));else B(P)}}function B(ee){p=p(ee)}function F(ee){me(ee)?(o.line++,o.column=1,o.offset+=ee===-3?2:1,be()):ee!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===d[o._index].length&&(o._bufferIndex=-1,o._index++)),m.previous=ee}function V(ee,P){const Te=P||{};return Te.type=ee,Te.start=_(),m.events.push(["enter",Te,m]),g.push(Te),Te}function re(ee){const P=g.pop();return P.end=_(),m.events.push(["exit",P,m]),P}function se(ee,P){ce(ee,P.from)}function I(ee,P){P.restore()}function J(ee,P){return Te;function Te(ne,Q,R){let G,ie,ve,S;return Array.isArray(ne)?U(ne):"tokenize"in ne?U([ne]):E(ne);function E(le){return Ee;function Ee(Qe){const He=Qe!==null&&le[Qe],Ut=Qe!==null&&le.null,gn=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(Ut)?Ut:Ut?[Ut]:[]];return U(gn)(Qe)}}function U(le){return G=le,ie=0,le.length===0?R:T(le[ie])}function T(le){return Ee;function Ee(Qe){return S=fe(),ve=le,le.partial||(m.currentConstruct=le),le.name&&m.parser.constructs.disable.null.includes(le.name)?he():le.tokenize.call(P?Object.assign(Object.create(m),P):m,y,$,he)(Qe)}}function $(le){return ee(ve,S),Q}function he(le){return S.restore(),++ie<G.length?T(G[ie]):R}}}function ce(ee,P){ee.resolveAll&&!c.includes(ee)&&c.push(ee),ee.resolve&&fn(m.events,P,m.events.length-P,ee.resolve(m.events.slice(P),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=_(),P=m.previous,Te=m.currentConstruct,ne=m.events.length,Q=Array.from(g);return{from:ne,restore:R};function R(){o=ee,m.previous=P,m.currentConstruct=Te,m.events.length=ne,g=Q,be()}}function be(){o.line in h&&o.column<2&&(o.column=h[o.line],o.offset+=h[o.line]-1)}}function Ok(a,r){const l=r.start._index,o=r.start._bufferIndex,h=r.end._index,c=r.end._bufferIndex;let d;if(l===h)d=[a[l].slice(o,c)];else{if(d=a.slice(l,h),o>-1){const g=d[0];typeof g=="string"?d[0]=g.slice(o):d.shift()}c>0&&d.push(a[h].slice(0,c))}return d}function Bk(a,r){let l=-1;const o=[];let h;for(;++l<a.length;){const c=a[l];let d;if(typeof c=="string")d=c;else switch(c){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=r?" ":"	";break}case-1:{if(!r&&h)continue;d=" ";break}default:d=String.fromCharCode(c)}h=c===-2,o.push(d)}return o.join("")}function Nk(a){const o={constructs:q0([Dk,...(a||{}).extensions||[]]),content:h(K0),defined:[],document:h(J0),flow:h(gk),lazy:{},string:h(wk),text:h(bk)};return o;function h(c){return d;function d(g){return Rk(o,c,g)}}}function _k(a){for(;!by(a););return a}const gg=/[\0\t\n\r]/g;function Hk(){let a=1,r="",l=!0,o;return h;function h(c,d,g){const y=[];let m,p,w,k,v;for(c=r+(typeof c=="string"?c.toString():new TextDecoder(d||void 0).decode(c)),w=0,r="",l&&(c.charCodeAt(0)===65279&&w++,l=void 0);w<c.length;){if(gg.lastIndex=w,m=gg.exec(c),k=m&&m.index!==void 0?m.index:c.length,v=c.charCodeAt(k),!m){r=c.slice(w);break}if(v===10&&w===k&&o)y.push(-3),o=void 0;else switch(o&&(y.push(-5),o=void 0),w<k&&(y.push(c.slice(w,k)),a+=k-w),v){case 0:{y.push(65533),a++;break}case 9:{for(p=Math.ceil(a/4)*4,y.push(-2);a++<p;)y.push(-1);break}case 10:{y.push(-4),a=1;break}default:o=!0,a=1}w=k+1}return g&&(o&&y.push(-5),r&&y.push(r),y.push(null)),y}}const Lk=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function jk(a){return a.replace(Lk,Ik)}function Ik(a,r,l){if(r)return r;if(l.charCodeAt(0)===35){const h=l.charCodeAt(1),c=h===120||h===88;return gy(l.slice(c?2:1),c?16:10)}return Ch(l)||a}const Ey={}.hasOwnProperty;function Uk(a,r,l){return r&&typeof r=="object"&&(l=r,r=void 0),qk(l)(_k(Nk(l).document().write(Hk()(a,r,!0))))}function qk(a){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Oa),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:c(Da),blockQuote:c(Ut),characterEscape:fe,characterReference:fe,codeFenced:c(gn),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:c(gn,d),codeText:c(Ai,d),codeTextData:fe,data:fe,codeFlowValue:fe,definition:c(_r),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:c(yn),hardBreakEscape:c(Ra),hardBreakTrailing:c(Ra),htmlFlow:c(Hr,d),htmlFlowData:fe,htmlText:c(Hr,d),htmlTextData:fe,image:c(Lr),label:d,link:c(Oa),listItem:c(Ci),listItemValue:k,listOrdered:c(Ba,w),listUnordered:c(Ba),paragraph:c(wo),reference:T,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:c(Da),strong:c(bo),thematicBreak:c(vo)},exit:{atxHeading:y(),atxHeadingSequence:se,autolink:y(),autolinkEmail:He,autolinkProtocol:Qe,blockQuote:y(),characterEscapeValue:be,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:le,characterReference:Ee,codeFenced:y(O),codeFencedFence:H,codeFencedFenceInfo:v,codeFencedFenceMeta:_,codeFlowValue:be,codeIndented:y(B),codeText:y(Q),codeTextData:be,data:be,definition:y(),definitionDestinationString:re,definitionLabelString:F,definitionTitleString:V,emphasis:y(),hardBreakEscape:y(P),hardBreakTrailing:y(P),htmlFlow:y(Te),htmlFlowData:be,htmlText:y(ne),htmlTextData:be,image:y(G),label:ve,labelText:ie,lineEnding:ee,link:y(R),listItem:y(),listOrdered:y(),listUnordered:y(),paragraph:y(),referenceString:$,resourceDestinationString:S,resourceTitleString:E,resource:U,setextHeading:y(ce),setextHeadingLineSequence:J,setextHeadingText:I,strong:y(),thematicBreak:y()}};Ay(r,(a||{}).mdastExtensions||[]);const l={};return o;function o(q){let K={type:"root",children:[]};const de={stack:[K],tokenStack:[],config:r,enter:g,exit:m,buffer:d,resume:p,data:l},ke=[];let Be=-1;for(;++Be<q.length;)if(q[Be][1].type==="listOrdered"||q[Be][1].type==="listUnordered")if(q[Be][0]==="enter")ke.push(Be);else{const zt=ke.pop();Be=h(q,zt,Be)}for(Be=-1;++Be<q.length;){const zt=r[q[Be][0]];Ey.call(zt,q[Be][1].type)&&zt[q[Be][1].type].call(Object.assign({sliceSerialize:q[Be][2].sliceSerialize},de),q[Be][1])}if(de.tokenStack.length>0){const zt=de.tokenStack[de.tokenStack.length-1];(zt[1]||yg).call(de,void 0,zt[0])}for(K.position={start:sa(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:sa(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Be=-1;++Be<r.transforms.length;)K=r.transforms[Be](K)||K;return K}function h(q,K,de){let ke=K-1,Be=-1,zt=!1,pn,yt,it,wt;for(;++ke<=de;){const Ue=q[ke];switch(Ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ue[0]==="enter"?Be++:Be--,wt=void 0;break}case"lineEndingBlank":{Ue[0]==="enter"&&(pn&&!wt&&!Be&&!it&&(it=ke),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0}if(!Be&&Ue[0]==="enter"&&Ue[1].type==="listItemPrefix"||Be===-1&&Ue[0]==="exit"&&(Ue[1].type==="listUnordered"||Ue[1].type==="listOrdered")){if(pn){let Ln=ke;for(yt=void 0;Ln--;){const en=q[Ln];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;yt&&(q[yt][1].type="lineEndingBlank",zt=!0),en[1].type="lineEnding",yt=Ln}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!yt||it<yt)&&(pn._spread=!0),pn.end=Object.assign({},yt?q[yt][1].start:Ue[1].end),q.splice(yt||ke,0,["exit",pn,Ue[2]]),ke++,de++}if(Ue[1].type==="listItemPrefix"){const Ln={type:"listItem",_spread:!1,start:Object.assign({},Ue[1].start),end:void 0};pn=Ln,q.splice(ke,0,["enter",Ln,Ue[2]]),ke++,de++,it=void 0,wt=!0}}}return q[K][1]._spread=zt,de}function c(q,K){return de;function de(ke){g.call(this,q(ke),ke),K&&K.call(this,ke)}}function d(){this.stack.push({type:"fragment",children:[]})}function g(q,K,de){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([K,de||void 0]),q.position={start:sa(K.start),end:void 0}}function y(q){return K;function K(de){q&&q.call(this,de),m.call(this,de)}}function m(q,K){const de=this.stack.pop(),ke=this.tokenStack.pop();if(ke)ke[0].type!==q.type&&(K?K.call(this,q,ke[0]):(ke[1]||yg).call(this,q,ke[0]));else throw new Error("Cannot close `"+q.type+"` ("+Ar({start:q.start,end:q.end})+"): it’s not open");de.position.end=sa(q.end)}function p(){return I0(this.stack.pop())}function w(){this.data.expectingFirstListItemValue=!0}function k(q){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function v(){const q=this.resume(),K=this.stack[this.stack.length-1];K.lang=q}function _(){const q=this.resume(),K=this.stack[this.stack.length-1];K.meta=q}function H(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function O(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function B(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q.replace(/(\r?\n|\r)$/g,"")}function F(q){const K=this.resume(),de=this.stack[this.stack.length-1];de.label=K,de.identifier=Ti(this.sliceSerialize(q)).toLowerCase()}function V(){const q=this.resume(),K=this.stack[this.stack.length-1];K.title=q}function re(){const q=this.resume(),K=this.stack[this.stack.length-1];K.url=q}function se(q){const K=this.stack[this.stack.length-1];if(!K.depth){const de=this.sliceSerialize(q).length;K.depth=de}}function I(){this.data.setextHeadingSlurpLineEnding=!0}function J(q){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(q){const de=this.stack[this.stack.length-1].children;let ke=de[de.length-1];(!ke||ke.type!=="text")&&(ke=gt(),ke.position={start:sa(q.start),end:void 0},de.push(ke)),this.stack.push(ke)}function be(q){const K=this.stack.pop();K.value+=this.sliceSerialize(q),K.position.end=sa(q.end)}function ee(q){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=K.children[K.children.length-1];de.position.end=sa(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(K.type)&&(fe.call(this,q),be.call(this,q))}function P(){this.data.atHardBreak=!0}function Te(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function ne(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function Q(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function R(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=K,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function G(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=K,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ie(q){const K=this.sliceSerialize(q),de=this.stack[this.stack.length-2];de.label=jk(K),de.identifier=Ti(K).toLowerCase()}function ve(){const q=this.stack[this.stack.length-1],K=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const ke=q.children;de.children=ke}else de.alt=K}function S(){const q=this.resume(),K=this.stack[this.stack.length-1];K.url=q}function E(){const q=this.resume(),K=this.stack[this.stack.length-1];K.title=q}function U(){this.data.inReference=void 0}function T(){this.data.referenceType="collapsed"}function $(q){const K=this.resume(),de=this.stack[this.stack.length-1];de.label=K,de.identifier=Ti(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function he(q){this.data.characterReferenceType=q.type}function le(q){const K=this.sliceSerialize(q),de=this.data.characterReferenceType;let ke;de?(ke=gy(K,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ke=Ch(K);const Be=this.stack[this.stack.length-1];Be.value+=ke}function Ee(q){const K=this.stack.pop();K.position.end=sa(q.end)}function Qe(q){be.call(this,q);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(q)}function He(q){be.call(this,q);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(q)}function Ut(){return{type:"blockquote",children:[]}}function gn(){return{type:"code",lang:null,meta:null,value:""}}function Ai(){return{type:"inlineCode",value:""}}function _r(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function yn(){return{type:"emphasis",children:[]}}function Da(){return{type:"heading",depth:0,children:[]}}function Ra(){return{type:"break"}}function Hr(){return{type:"html",value:""}}function Lr(){return{type:"image",title:null,url:"",alt:null}}function Oa(){return{type:"link",title:null,url:"",children:[]}}function Ba(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Ci(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function wo(){return{type:"paragraph",children:[]}}function bo(){return{type:"strong",children:[]}}function gt(){return{type:"text",value:""}}function vo(){return{type:"thematicBreak"}}}function sa(a){return{line:a.line,column:a.column,offset:a.offset}}function Ay(a,r){let l=-1;for(;++l<r.length;){const o=r[l];Array.isArray(o)?Ay(a,o):Yk(a,o)}}function Yk(a,r){let l;for(l in r)if(Ey.call(r,l))switch(l){case"canContainEols":{const o=r[l];o&&a[l].push(...o);break}case"transforms":{const o=r[l];o&&a[l].push(...o);break}case"enter":case"exit":{const o=r[l];o&&Object.assign(a[l],o);break}}}function yg(a,r){throw a?new Error("Cannot close `"+a.type+"` ("+Ar({start:a.start,end:a.end})+"): a different token (`"+r.type+"`, "+Ar({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Ar({start:r.start,end:r.end})+") is still open")}function Wk(a){const r=this;r.parser=l;function l(o){return Uk(o,{...r.data("settings"),...a,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function Vk(a,r){const l={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(r),!0)};return a.patch(r,l),a.applyData(r,l)}function Gk(a,r){const l={type:"element",tagName:"br",properties:{},children:[]};return a.patch(r,l),[a.applyData(r,l),{type:"text",value:`
`}]}function Qk(a,r){const l=r.value?r.value+`
`:"",o={},h=r.lang?r.lang.split(/\s+/):[];h.length>0&&(o.className=["language-"+h[0]]);let c={type:"element",tagName:"code",properties:o,children:[{type:"text",value:l}]};return r.meta&&(c.data={meta:r.meta}),a.patch(r,c),c=a.applyData(r,c),c={type:"element",tagName:"pre",properties:{},children:[c]},a.patch(r,c),c}function Xk(a,r){const l={type:"element",tagName:"del",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function Fk(a,r){const l={type:"element",tagName:"em",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function Kk(a,r){const l=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=String(r.identifier).toUpperCase(),h=Ei(o.toLowerCase()),c=a.footnoteOrder.indexOf(o);let d,g=a.footnoteCounts.get(o);g===void 0?(g=0,a.footnoteOrder.push(o),d=a.footnoteOrder.length):d=c+1,g+=1,a.footnoteCounts.set(o,g);const y={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+h,id:l+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(r,y);const m={type:"element",tagName:"sup",properties:{},children:[y]};return a.patch(r,m),a.applyData(r,m)}function Zk(a,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function Jk(a,r){if(a.options.allowDangerousHtml){const l={type:"raw",value:r.value};return a.patch(r,l),a.applyData(r,l)}}function Cy(a,r){const l=r.referenceType;let o="]";if(l==="collapsed"?o+="[]":l==="full"&&(o+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+o}];const h=a.all(r),c=h[0];c&&c.type==="text"?c.value="["+c.value:h.unshift({type:"text",value:"["});const d=h[h.length-1];return d&&d.type==="text"?d.value+=o:h.push({type:"text",value:o}),h}function $k(a,r){const l=String(r.identifier).toUpperCase(),o=a.definitionById.get(l);if(!o)return Cy(a,r);const h={src:Ei(o.url||""),alt:r.alt};o.title!==null&&o.title!==void 0&&(h.title=o.title);const c={type:"element",tagName:"img",properties:h,children:[]};return a.patch(r,c),a.applyData(r,c)}function Pk(a,r){const l={src:Ei(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"img",properties:l,children:[]};return a.patch(r,o),a.applyData(r,o)}function e1(a,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};a.patch(r,l);const o={type:"element",tagName:"code",properties:{},children:[l]};return a.patch(r,o),a.applyData(r,o)}function t1(a,r){const l=String(r.identifier).toUpperCase(),o=a.definitionById.get(l);if(!o)return Cy(a,r);const h={href:Ei(o.url||"")};o.title!==null&&o.title!==void 0&&(h.title=o.title);const c={type:"element",tagName:"a",properties:h,children:a.all(r)};return a.patch(r,c),a.applyData(r,c)}function n1(a,r){const l={href:Ei(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const o={type:"element",tagName:"a",properties:l,children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function a1(a,r,l){const o=a.all(r),h=l?i1(l):My(r),c={},d=[];if(typeof r.checked=="boolean"){const p=o[0];let w;p&&p.type==="element"&&p.tagName==="p"?w=p:(w={type:"element",tagName:"p",properties:{},children:[]},o.unshift(w)),w.children.length>0&&w.children.unshift({type:"text",value:" "}),w.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let g=-1;for(;++g<o.length;){const p=o[g];(h||g!==0||p.type!=="element"||p.tagName!=="p")&&d.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!h?d.push(...p.children):d.push(p)}const y=o[o.length-1];y&&(h||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:d};return a.patch(r,m),a.applyData(r,m)}function i1(a){let r=!1;if(a.type==="list"){r=a.spread||!1;const l=a.children;let o=-1;for(;!r&&++o<l.length;)r=My(l[o])}return r}function My(a){const r=a.spread;return r??a.children.length>1}function r1(a,r){const l={},o=a.all(r);let h=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++h<o.length;){const d=o[h];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const c={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:a.wrap(o,!0)};return a.patch(r,c),a.applyData(r,c)}function l1(a,r){const l={type:"element",tagName:"p",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function o1(a,r){const l={type:"root",children:a.wrap(a.all(r))};return a.patch(r,l),a.applyData(r,l)}function s1(a,r){const l={type:"element",tagName:"strong",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}function u1(a,r){const l=a.all(r),o=l.shift(),h=[];if(o){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([o],!0)};a.patch(r.children[0],d),h.push(d)}if(l.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(l,!0)},g=Sh(r.children[1]),y=sy(r.children[r.children.length-1]);g&&y&&(d.position={start:g,end:y}),h.push(d)}const c={type:"element",tagName:"table",properties:{},children:a.wrap(h,!0)};return a.patch(r,c),a.applyData(r,c)}function h1(a,r,l){const o=l?l.children:void 0,c=(o?o.indexOf(r):1)===0?"th":"td",d=l&&l.type==="table"?l.align:void 0,g=d?d.length:r.children.length;let y=-1;const m=[];for(;++y<g;){const w=r.children[y],k={},v=d?d[y]:void 0;v&&(k.align=v);let _={type:"element",tagName:c,properties:k,children:[]};w&&(_.children=a.all(w),a.patch(w,_),_=a.applyData(w,_)),m.push(_)}const p={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(r,p),a.applyData(r,p)}function c1(a,r){const l={type:"element",tagName:"td",properties:{},children:a.all(r)};return a.patch(r,l),a.applyData(r,l)}const pg=9,wg=32;function d1(a){const r=String(a),l=/\r?\n|\r/g;let o=l.exec(r),h=0;const c=[];for(;o;)c.push(bg(r.slice(h,o.index),h>0,!0),o[0]),h=o.index+o[0].length,o=l.exec(r);return c.push(bg(r.slice(h),h>0,!1)),c.join("")}function bg(a,r,l){let o=0,h=a.length;if(r){let c=a.codePointAt(o);for(;c===pg||c===wg;)o++,c=a.codePointAt(o)}if(l){let c=a.codePointAt(h-1);for(;c===pg||c===wg;)h--,c=a.codePointAt(h-1)}return h>o?a.slice(o,h):""}function f1(a,r){const l={type:"text",value:d1(String(r.value))};return a.patch(r,l),a.applyData(r,l)}function m1(a,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(r,l),a.applyData(r,l)}const g1={blockquote:Vk,break:Gk,code:Qk,delete:Xk,emphasis:Fk,footnoteReference:Kk,heading:Zk,html:Jk,imageReference:$k,image:Pk,inlineCode:e1,linkReference:t1,link:n1,listItem:a1,list:r1,paragraph:l1,root:o1,strong:s1,table:u1,tableCell:c1,tableRow:h1,text:f1,thematicBreak:m1,toml:to,yaml:to,definition:to,footnoteDefinition:to};function to(){}const zy=-1,yo=0,Mr=1,uo=2,Dh=3,Rh=4,Oh=5,Bh=6,Dy=7,Ry=8,vg=typeof self=="object"?self:globalThis,y1=(a,r)=>{const l=(h,c)=>(a.set(c,h),h),o=h=>{if(a.has(h))return a.get(h);const[c,d]=r[h];switch(c){case yo:case zy:return l(d,h);case Mr:{const g=l([],h);for(const y of d)g.push(o(y));return g}case uo:{const g=l({},h);for(const[y,m]of d)g[o(y)]=o(m);return g}case Dh:return l(new Date(d),h);case Rh:{const{source:g,flags:y}=d;return l(new RegExp(g,y),h)}case Oh:{const g=l(new Map,h);for(const[y,m]of d)g.set(o(y),o(m));return g}case Bh:{const g=l(new Set,h);for(const y of d)g.add(o(y));return g}case Dy:{const{name:g,message:y}=d;return l(new vg[g](y),h)}case Ry:return l(BigInt(d),h);case"BigInt":return l(Object(BigInt(d)),h);case"ArrayBuffer":return l(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:g}=new Uint8Array(d);return l(new DataView(g),d)}}return l(new vg[c](d),h)};return o},Tg=a=>y1(new Map,a)(0),bi="",{toString:p1}={},{keys:w1}=Object,Er=a=>{const r=typeof a;if(r!=="object"||!a)return[yo,r];const l=p1.call(a).slice(8,-1);switch(l){case"Array":return[Mr,bi];case"Object":return[uo,bi];case"Date":return[Dh,bi];case"RegExp":return[Rh,bi];case"Map":return[Oh,bi];case"Set":return[Bh,bi];case"DataView":return[Mr,l]}return l.includes("Array")?[Mr,l]:l.includes("Error")?[Dy,l]:[uo,l]},no=([a,r])=>a===yo&&(r==="function"||r==="symbol"),b1=(a,r,l,o)=>{const h=(d,g)=>{const y=o.push(d)-1;return l.set(g,y),y},c=d=>{if(l.has(d))return l.get(d);let[g,y]=Er(d);switch(g){case yo:{let p=d;switch(y){case"bigint":g=Ry,p=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+y);p=null;break;case"undefined":return h([zy],d)}return h([g,p],d)}case Mr:{if(y){let k=d;return y==="DataView"?k=new Uint8Array(d.buffer):y==="ArrayBuffer"&&(k=new Uint8Array(d)),h([y,[...k]],d)}const p=[],w=h([g,p],d);for(const k of d)p.push(c(k));return w}case uo:{if(y)switch(y){case"BigInt":return h([y,d.toString()],d);case"Boolean":case"Number":case"String":return h([y,d.valueOf()],d)}if(r&&"toJSON"in d)return c(d.toJSON());const p=[],w=h([g,p],d);for(const k of w1(d))(a||!no(Er(d[k])))&&p.push([c(k),c(d[k])]);return w}case Dh:return h([g,d.toISOString()],d);case Rh:{const{source:p,flags:w}=d;return h([g,{source:p,flags:w}],d)}case Oh:{const p=[],w=h([g,p],d);for(const[k,v]of d)(a||!(no(Er(k))||no(Er(v))))&&p.push([c(k),c(v)]);return w}case Bh:{const p=[],w=h([g,p],d);for(const k of d)(a||!no(Er(k)))&&p.push(c(k));return w}}const{message:m}=d;return h([g,{name:y,message:m}],d)};return c},kg=(a,{json:r,lossy:l}={})=>{const o=[];return b1(!(r||l),!!r,new Map,o)(a),o},ho=typeof structuredClone=="function"?(a,r)=>r&&("json"in r||"lossy"in r)?Tg(kg(a,r)):structuredClone(a):(a,r)=>Tg(kg(a,r));function v1(a,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function T1(a,r){return"Back to reference "+(a+1)+(r>1?"-"+r:"")}function k1(a){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",l=a.options.footnoteBackContent||v1,o=a.options.footnoteBackLabel||T1,h=a.options.footnoteLabel||"Footnotes",c=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},g=[];let y=-1;for(;++y<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[y]);if(!m)continue;const p=a.all(m),w=String(m.identifier).toUpperCase(),k=Ei(w.toLowerCase());let v=0;const _=[],H=a.footnoteCounts.get(w);for(;H!==void 0&&++v<=H;){_.length>0&&_.push({type:"text",value:" "});let F=typeof l=="string"?l:l(y,v);typeof F=="string"&&(F={type:"text",value:F}),_.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+k+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(y,v),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const O=p[p.length-1];if(O&&O.type==="element"&&O.tagName==="p"){const F=O.children[O.children.length-1];F&&F.type==="text"?F.value+=" ":O.children.push({type:"text",value:" "}),O.children.push(..._)}else p.push(..._);const B={type:"element",tagName:"li",properties:{id:r+"fn-"+k},children:a.wrap(p,!0)};a.patch(m,B),g.push(B)}if(g.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...ho(d),id:"footnote-label"},children:[{type:"text",value:h}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(g,!0)},{type:"text",value:`
`}]}}const Oy=(function(a){if(a==null)return A1;if(typeof a=="function")return po(a);if(typeof a=="object")return Array.isArray(a)?S1(a):x1(a);if(typeof a=="string")return E1(a);throw new Error("Expected function, string, or object as test")});function S1(a){const r=[];let l=-1;for(;++l<a.length;)r[l]=Oy(a[l]);return po(o);function o(...h){let c=-1;for(;++c<r.length;)if(r[c].apply(this,h))return!0;return!1}}function x1(a){const r=a;return po(l);function l(o){const h=o;let c;for(c in a)if(h[c]!==r[c])return!1;return!0}}function E1(a){return po(r);function r(l){return l&&l.type===a}}function po(a){return r;function r(l,o,h){return!!(C1(l)&&a.call(this,l,typeof o=="number"?o:void 0,h||void 0))}}function A1(){return!0}function C1(a){return a!==null&&typeof a=="object"&&"type"in a}const By=[],M1=!0,Sg=!1,z1="skip";function D1(a,r,l,o){let h;typeof r=="function"&&typeof l!="function"?(o=l,l=r):h=r;const c=Oy(h),d=o?-1:1;g(a,void 0,[])();function g(y,m,p){const w=y&&typeof y=="object"?y:{};if(typeof w.type=="string"){const v=typeof w.tagName=="string"?w.tagName:typeof w.name=="string"?w.name:void 0;Object.defineProperty(k,"name",{value:"node ("+(y.type+(v?"<"+v+">":""))+")"})}return k;function k(){let v=By,_,H,O;if((!r||c(y,m,p[p.length-1]||void 0))&&(v=R1(l(y,p)),v[0]===Sg))return v;if("children"in y&&y.children){const B=y;if(B.children&&v[0]!==z1)for(H=(o?B.children.length:-1)+d,O=p.concat(B);H>-1&&H<B.children.length;){const F=B.children[H];if(_=g(F,H,O)(),_[0]===Sg)return _;H=typeof _[1]=="number"?_[1]:H+d}}return v}}}function R1(a){return Array.isArray(a)?a:typeof a=="number"?[M1,a]:a==null?By:[a]}function Ny(a,r,l,o){let h,c,d;typeof r=="function"&&typeof l!="function"?(c=void 0,d=r,h=l):(c=r,d=l,h=o),D1(a,c,g,h);function g(y,m){const p=m[m.length-1],w=p?p.children.indexOf(y):void 0;return d(y,w,p)}}const hh={}.hasOwnProperty,O1={};function B1(a,r){const l=r||O1,o=new Map,h=new Map,c=new Map,d={...g1,...l.handlers},g={all:m,applyData:_1,definitionById:o,footnoteById:h,footnoteCounts:c,footnoteOrder:[],handlers:d,one:y,options:l,patch:N1,wrap:L1};return Ny(a,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const w=p.type==="definition"?o:h,k=String(p.identifier).toUpperCase();w.has(k)||w.set(k,p)}}),g;function y(p,w){const k=p.type,v=g.handlers[k];if(hh.call(g.handlers,k)&&v)return v(g,p,w);if(g.options.passThrough&&g.options.passThrough.includes(k)){if("children"in p){const{children:H,...O}=p,B=ho(O);return B.children=g.all(p),B}return ho(p)}return(g.options.unknownHandler||H1)(g,p,w)}function m(p){const w=[];if("children"in p){const k=p.children;let v=-1;for(;++v<k.length;){const _=g.one(k[v],p);if(_){if(v&&k[v-1].type==="break"&&(!Array.isArray(_)&&_.type==="text"&&(_.value=xg(_.value)),!Array.isArray(_)&&_.type==="element")){const H=_.children[0];H&&H.type==="text"&&(H.value=xg(H.value))}Array.isArray(_)?w.push(..._):w.push(_)}}}return w}}function N1(a,r){a.position&&(r.position=p0(a))}function _1(a,r){let l=r;if(a&&a.data){const o=a.data.hName,h=a.data.hChildren,c=a.data.hProperties;if(typeof o=="string")if(l.type==="element")l.tagName=o;else{const d="children"in l?l.children:[l];l={type:"element",tagName:o,properties:{},children:d}}l.type==="element"&&c&&Object.assign(l.properties,ho(c)),"children"in l&&l.children&&h!==null&&h!==void 0&&(l.children=h)}return l}function H1(a,r){const l=r.data||{},o="value"in r&&!(hh.call(l,"hProperties")||hh.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function L1(a,r){const l=[];let o=-1;for(r&&l.push({type:"text",value:`
`});++o<a.length;)o&&l.push({type:"text",value:`
`}),l.push(a[o]);return r&&a.length>0&&l.push({type:"text",value:`
`}),l}function xg(a){let r=0,l=a.charCodeAt(r);for(;l===9||l===32;)r++,l=a.charCodeAt(r);return a.slice(r)}function Eg(a,r){const l=B1(a,r),o=l.one(a,void 0),h=k1(l),c=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return h&&c.children.push({type:"text",value:`
`},h),c}function j1(a,r){return a&&"run"in a?async function(l,o){const h=Eg(l,{file:o,...r});await a.run(h,o)}:function(l,o){return Eg(l,{file:o,...a||r})}}function Ag(a){if(a)throw a}var Xu,Cg;function I1(){if(Cg)return Xu;Cg=1;var a=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,h=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},c=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var p=a.call(m,"constructor"),w=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!p&&!w)return!1;var k;for(k in m);return typeof k>"u"||a.call(m,k)},d=function(m,p){l&&p.name==="__proto__"?l(m,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):m[p.name]=p.newValue},g=function(m,p){if(p==="__proto__")if(a.call(m,p)){if(o)return o(m,p).value}else return;return m[p]};return Xu=function y(){var m,p,w,k,v,_,H=arguments[0],O=1,B=arguments.length,F=!1;for(typeof H=="boolean"&&(F=H,H=arguments[1]||{},O=2),(H==null||typeof H!="object"&&typeof H!="function")&&(H={});O<B;++O)if(m=arguments[O],m!=null)for(p in m)w=g(H,p),k=g(m,p),H!==k&&(F&&k&&(c(k)||(v=h(k)))?(v?(v=!1,_=w&&h(w)?w:[]):_=w&&c(w)?w:{},d(H,{name:p,newValue:y(F,_,k)})):typeof k<"u"&&d(H,{name:p,newValue:k}));return H},Xu}var U1=I1();const Fu=Bg(U1);function ch(a){if(typeof a!="object"||a===null)return!1;const r=Object.getPrototypeOf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function q1(){const a=[],r={run:l,use:o};return r;function l(...h){let c=-1;const d=h.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);g(null,...h);function g(y,...m){const p=a[++c];let w=-1;if(y){d(y);return}for(;++w<h.length;)(m[w]===null||m[w]===void 0)&&(m[w]=h[w]);h=m,p?Y1(p,g)(...m):d(null,...m)}}function o(h){if(typeof h!="function")throw new TypeError("Expected `middelware` to be a function, not "+h);return a.push(h),r}}function Y1(a,r){let l;return o;function o(...d){const g=a.length>d.length;let y;g&&d.push(h);try{y=a.apply(this,d)}catch(m){const p=m;if(g&&l)throw p;return h(p)}g||(y&&y.then&&typeof y.then=="function"?y.then(c,h):y instanceof Error?h(y):c(y))}function h(d,...g){l||(l=!0,r(d,...g))}function c(d){h(null,d)}}const hn={basename:W1,dirname:V1,extname:G1,join:Q1,sep:"/"};function W1(a,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Nr(a);let l=0,o=-1,h=a.length,c;if(r===void 0||r.length===0||r.length>a.length){for(;h--;)if(a.codePointAt(h)===47){if(c){l=h+1;break}}else o<0&&(c=!0,o=h+1);return o<0?"":a.slice(l,o)}if(r===a)return"";let d=-1,g=r.length-1;for(;h--;)if(a.codePointAt(h)===47){if(c){l=h+1;break}}else d<0&&(c=!0,d=h+1),g>-1&&(a.codePointAt(h)===r.codePointAt(g--)?g<0&&(o=h):(g=-1,o=d));return l===o?o=d:o<0&&(o=a.length),a.slice(l,o)}function V1(a){if(Nr(a),a.length===0)return".";let r=-1,l=a.length,o;for(;--l;)if(a.codePointAt(l)===47){if(o){r=l;break}}else o||(o=!0);return r<0?a.codePointAt(0)===47?"/":".":r===1&&a.codePointAt(0)===47?"//":a.slice(0,r)}function G1(a){Nr(a);let r=a.length,l=-1,o=0,h=-1,c=0,d;for(;r--;){const g=a.codePointAt(r);if(g===47){if(d){o=r+1;break}continue}l<0&&(d=!0,l=r+1),g===46?h<0?h=r:c!==1&&(c=1):h>-1&&(c=-1)}return h<0||l<0||c===0||c===1&&h===l-1&&h===o+1?"":a.slice(h,l)}function Q1(...a){let r=-1,l;for(;++r<a.length;)Nr(a[r]),a[r]&&(l=l===void 0?a[r]:l+"/"+a[r]);return l===void 0?".":X1(l)}function X1(a){Nr(a);const r=a.codePointAt(0)===47;let l=F1(a,!r);return l.length===0&&!r&&(l="."),l.length>0&&a.codePointAt(a.length-1)===47&&(l+="/"),r?"/"+l:l}function F1(a,r){let l="",o=0,h=-1,c=0,d=-1,g,y;for(;++d<=a.length;){if(d<a.length)g=a.codePointAt(d);else{if(g===47)break;g=47}if(g===47){if(!(h===d-1||c===1))if(h!==d-1&&c===2){if(l.length<2||o!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(y=l.lastIndexOf("/"),y!==l.length-1){y<0?(l="",o=0):(l=l.slice(0,y),o=l.length-1-l.lastIndexOf("/")),h=d,c=0;continue}}else if(l.length>0){l="",o=0,h=d,c=0;continue}}r&&(l=l.length>0?l+"/..":"..",o=2)}else l.length>0?l+="/"+a.slice(h+1,d):l=a.slice(h+1,d),o=d-h-1;h=d,c=0}else g===46&&c>-1?c++:c=-1}return l}function Nr(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const K1={cwd:Z1};function Z1(){return"/"}function dh(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function J1(a){if(typeof a=="string")a=new URL(a);else if(!dh(a)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(a.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return $1(a)}function $1(a){if(a.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const r=a.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const o=r.codePointAt(l+2);if(o===70||o===102){const h=new TypeError("File URL path must not include encoded / characters");throw h.code="ERR_INVALID_FILE_URL_PATH",h}}return decodeURIComponent(r)}const Ku=["history","path","basename","stem","extname","dirname"];class _y{constructor(r){let l;r?dh(r)?l={path:r}:typeof r=="string"||P1(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":K1.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Ku.length;){const c=Ku[o];c in l&&l[c]!==void 0&&l[c]!==null&&(this[c]=c==="history"?[...l[c]]:l[c])}let h;for(h in l)Ku.includes(h)||(this[h]=l[h])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(r){Ju(r,"basename"),Zu(r,"basename"),this.path=hn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(r){Mg(this.basename,"dirname"),this.path=hn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(r){if(Zu(r,"extname"),Mg(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){dh(r)&&(r=J1(r)),Ju(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(r){Ju(r,"stem"),Zu(r,"stem"),this.path=hn.join(this.dirname||"",r+(this.extname||""))}fail(r,l,o){const h=this.message(r,l,o);throw h.fatal=!0,h}info(r,l,o){const h=this.message(r,l,o);return h.fatal=void 0,h}message(r,l,o){const h=new mt(r,l,o);return this.path&&(h.name=this.path+":"+h.name,h.file=this.path),h.fatal=!1,this.messages.push(h),h}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Zu(a,r){if(a&&a.includes(hn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+hn.sep+"`")}function Ju(a,r){if(!a)throw new Error("`"+r+"` cannot be empty")}function Mg(a,r){if(!a)throw new Error("Setting `"+r+"` requires `path` to be set too")}function P1(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const eS=(function(a){const o=this.constructor.prototype,h=o[a],c=function(){return h.apply(c,arguments)};return Object.setPrototypeOf(c,o),c}),tS={}.hasOwnProperty;class Nh extends eS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=q1()}copy(){const r=new Nh;let l=-1;for(;++l<this.attachers.length;){const o=this.attachers[l];r.use(...o)}return r.data(Fu(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(eh("data",this.frozen),this.namespace[r]=l,this):tS.call(this.namespace,r)&&this.namespace[r]||void 0:r?(eh("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const h=l.call(r,...o);typeof h=="function"&&this.transformers.use(h)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=ao(r),o=this.parser||this.Parser;return $u("parse",o),o(String(l),l)}process(r,l){const o=this;return this.freeze(),$u("process",this.parser||this.Parser),Pu("process",this.compiler||this.Compiler),l?h(void 0,l):new Promise(h);function h(c,d){const g=ao(r),y=o.parse(g);o.run(y,g,function(p,w,k){if(p||!w||!k)return m(p);const v=w,_=o.stringify(v,k);iS(_)?k.value=_:k.result=_,m(p,k)});function m(p,w){p||!w?d(p):c?c(w):l(void 0,w)}}}processSync(r){let l=!1,o;return this.freeze(),$u("processSync",this.parser||this.Parser),Pu("processSync",this.compiler||this.Compiler),this.process(r,h),Dg("processSync","process",l),o;function h(c,d){l=!0,Ag(c),o=d}}run(r,l,o){zg(r),this.freeze();const h=this.transformers;return!o&&typeof l=="function"&&(o=l,l=void 0),o?c(void 0,o):new Promise(c);function c(d,g){const y=ao(l);h.run(r,y,m);function m(p,w,k){const v=w||r;p?g(p):d?d(v):o(void 0,v,k)}}}runSync(r,l){let o=!1,h;return this.run(r,l,c),Dg("runSync","run",o),h;function c(d,g){Ag(d),h=g,o=!0}}stringify(r,l){this.freeze();const o=ao(l),h=this.compiler||this.Compiler;return Pu("stringify",h),zg(r),h(r,o)}use(r,...l){const o=this.attachers,h=this.namespace;if(eh("use",this.frozen),r!=null)if(typeof r=="function")y(r,l);else if(typeof r=="object")Array.isArray(r)?g(r):d(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function c(m){if(typeof m=="function")y(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[p,...w]=m;y(p,w)}else d(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function d(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");g(m.plugins),m.settings&&(h.settings=Fu(!0,h.settings,m.settings))}function g(m){let p=-1;if(m!=null)if(Array.isArray(m))for(;++p<m.length;){const w=m[p];c(w)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function y(m,p){let w=-1,k=-1;for(;++w<o.length;)if(o[w][0]===m){k=w;break}if(k===-1)o.push([m,...p]);else if(p.length>0){let[v,..._]=p;const H=o[k][1];ch(H)&&ch(v)&&(v=Fu(!0,H,v)),o[k]=[m,v,..._]}}}}const nS=new Nh().freeze();function $u(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function Pu(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function eh(a,r){if(r)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zg(a){if(!ch(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Dg(a,r,l){if(!l)throw new Error("`"+a+"` finished async. Use `"+r+"` instead")}function ao(a){return aS(a)?a:new _y(a)}function aS(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function iS(a){return typeof a=="string"||rS(a)}function rS(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const lS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rg=[],Og={allowDangerousHtml:!0},oS=/^(https?|ircs?|mailto|xmpp)$/i,sS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function uS(a){const r=hS(a),l=cS(a);return dS(r.runSync(r.parse(l),l),a)}function hS(a){const r=a.rehypePlugins||Rg,l=a.remarkPlugins||Rg,o=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Og}:Og;return nS().use(Wk).use(l).use(j1,o).use(r)}function cS(a){const r=a.children||"",l=new _y;return typeof r=="string"&&(l.value=r),l}function dS(a,r){const l=r.allowedElements,o=r.allowElement,h=r.components,c=r.disallowedElements,d=r.skipHtml,g=r.unwrapDisallowed,y=r.urlTransform||fS;for(const p of sS)Object.hasOwn(r,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+lS+p.id,void 0);return Ny(a,m),k0(a,{Fragment:Z.Fragment,components:h,ignoreInvalidStyle:!0,jsx:Z.jsx,jsxs:Z.jsxs,passKeys:!0,passNode:!0});function m(p,w,k){if(p.type==="raw"&&k&&typeof w=="number")return d?k.children.splice(w,1):k.children[w]={type:"text",value:p.value},w;if(p.type==="element"){let v;for(v in Vu)if(Object.hasOwn(Vu,v)&&Object.hasOwn(p.properties,v)){const _=p.properties[v],H=Vu[v];(H===null||H.includes(p.tagName))&&(p.properties[v]=y(String(_||""),v,p))}}if(p.type==="element"){let v=l?!l.includes(p.tagName):c?c.includes(p.tagName):!1;if(!v&&o&&typeof w=="number"&&(v=!o(p,w,k)),v&&k&&typeof w=="number")return g&&p.children?k.children.splice(w,1,...p.children):k.children.splice(w,1),w}}}function fS(a){const r=a.indexOf(":"),l=a.indexOf("?"),o=a.indexOf("#"),h=a.indexOf("/");return r===-1||h!==-1&&r>h||l!==-1&&r>l||o!==-1&&r>o||oS.test(a.slice(0,r))?a:""}function mS(a){return new Date(a+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function gS(){const{seriesId:a,day:r}=Gg(),l=ey(a||""),o=Number(r),h=l?.lessons.find(m=>m.day===o),[c,d]=j.useState("parable");if(j.useEffect(()=>{window.scrollTo(0,0)},[a,r]),!l)return Z.jsx(Kg,{to:"/",replace:!0});if(!h)return Z.jsxs("div",{className:"container",children:[Z.jsx("p",{children:"Lesson not found."}),Z.jsxs($t,{to:`/${l.id}`,className:"nav-link",children:["← Back to ",l.name]})]});const g=l.lessons.find(m=>m.day===o-1),y=l.lessons.find(m=>m.day===o+1);return Z.jsxs("div",{className:"container",children:[Z.jsxs("nav",{className:"breadcrumb",children:[Z.jsx($t,{to:"/",className:"nav-link",children:"Home"}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsx($t,{to:`/${l.id}`,className:"nav-link",children:l.name}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsxs("span",{children:["Day ",h.day]})]}),h.image&&Z.jsx("div",{className:"lesson-hero",children:Z.jsx("img",{src:`/parable/${h.image}`,alt:h.title})}),Z.jsxs("header",{className:"lesson-header",children:[Z.jsxs("span",{className:"lesson-day-badge",children:["Day ",h.day]}),Z.jsx("h1",{children:h.title}),Z.jsx("p",{className:"lesson-date",children:mS(h.date)})]}),Z.jsxs("div",{className:"toggle-container",children:[Z.jsx("button",{className:`toggle-btn ${c==="parable"?"active":""}`,onClick:()=>d("parable"),children:"🏰 Parable"}),Z.jsx("button",{className:`toggle-btn ${c==="standard"?"active":""}`,onClick:()=>d("standard"),children:"📖 Standard"}),h.sonnet&&Z.jsx("button",{className:`toggle-btn ${c==="sonnet"?"active":""}`,onClick:()=>d("sonnet"),children:"🪶 Sonnet"})]}),Z.jsx("article",{className:`lesson-content ${c}`,children:Z.jsx(uS,{children:c==="parable"?h.parable:c==="sonnet"?h.sonnet||"":h.standard})},c),Z.jsxs("nav",{className:"bottom-nav",children:[g?Z.jsxs($t,{to:`/${l.id}/lesson/${g.day}`,className:"nav-link",children:["← Day ",g.day]}):Z.jsx("span",{}),y?Z.jsxs($t,{to:`/${l.id}/lesson/${y.day}`,className:"nav-link",children:["Day ",y.day," →"]}):Z.jsx("span",{})]})]})}function yS(){const[a,r]=j.useState(!1);return Z.jsx(Av,{children:Z.jsxs("div",{className:"app-layout",children:[Z.jsx(Vv,{open:a,onClose:()=>r(!1)}),Z.jsxs("div",{className:"main-content",children:[Z.jsx("button",{className:"hamburger",onClick:()=>r(!0),"aria-label":"Open menu",children:"☰"}),Z.jsxs(nv,{children:[Z.jsx(io,{path:"/",element:Z.jsx(Gv,{})}),Z.jsx(io,{path:"/:seriesId",element:Z.jsx(Xv,{})}),Z.jsx(io,{path:"/:seriesId/lesson/:day",element:Z.jsx(gS,{})})]})]})]})})}rb.createRoot(document.getElementById("root")).render(Z.jsx(j.StrictMode,{children:Z.jsx(yS,{})}));
