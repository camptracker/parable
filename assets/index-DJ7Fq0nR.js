(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(h){if(h.ep)return;h.ep=!0;const c=o(h);fetch(h.href,c)}})();function Bg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Bu={exports:{}},br={};var Im;function Zw(){if(Im)return br;Im=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(s,h,c){var d=null;if(c!==void 0&&(d=""+c),h.key!==void 0&&(d=""+h.key),"key"in h){c={};for(var g in h)g!=="key"&&(c[g]=h[g])}else c=h;return h=c.ref,{$$typeof:a,type:s,key:d,ref:h!==void 0?h:null,props:c}}return br.Fragment=r,br.jsx=o,br.jsxs=o,br}var Bm;function Jw(){return Bm||(Bm=1,Bu.exports=Zw()),Bu.exports}var Z=Jw(),Ou={exports:{}},ge={};var Om;function Pw(){if(Om)return ge;Om=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,I={};function B(E,q,k){this.props=E,this.context=q,this.refs=I,this.updater=k||H}B.prototype.isReactComponent={},B.prototype.setState=function(E,q){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,q,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function X(){}X.prototype=B.prototype;function F(E,q,k){this.props=E,this.context=q,this.refs=I,this.updater=k||H}var re=F.prototype=new X;re.constructor=F,N(re,B.prototype),re.isPureReactComponent=!0;var le=Array.isArray;function _(){}var J={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(E,q,k){var P=k.ref;return{$$typeof:a,type:E,key:q,ref:P!==void 0?P:null,props:k}}function be(E,q){return fe(E.type,q,E.props)}function ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function $(E){var q={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(k){return q[k]})}var ke=/\/+/g;function ne(E,q){return typeof E=="object"&&E!==null&&E.key!=null?$(""+E.key):q.toString(36)}function G(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(_,_):(E.status="pending",E.then(function(q){E.status==="pending"&&(E.status="fulfilled",E.value=q)},function(q){E.status==="pending"&&(E.status="rejected",E.reason=q)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function R(E,q,k,P,he){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var Ee=!1;if(E===null)Ee=!0;else switch(oe){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(E.$$typeof){case a:case r:Ee=!0;break;case y:return Ee=E._init,R(Ee(E._payload),q,k,P,he)}}if(Ee)return he=he(E),Ee=P===""?"."+ne(E,0):P,le(he)?(k="",Ee!=null&&(k=Ee.replace(ke,"$&/")+"/"),R(he,q,k,"",function(qt){return qt})):he!=null&&(ee(he)&&(he=be(he,k+(he.key==null||E&&E.key===he.key?"":(""+he.key).replace(ke,"$&/")+"/")+Ee)),q.push(he)),1;Ee=0;var Ge=P===""?".":P+":";if(le(E))for(var Ne=0;Ne<E.length;Ne++)P=E[Ne],oe=Ge+ne(P,Ne),Ee+=R(P,q,k,oe,he);else if(Ne=v(E),typeof Ne=="function")for(E=Ne.call(E),Ne=0;!(P=E.next()).done;)P=P.value,oe=Ge+ne(P,Ne++),Ee+=R(P,q,k,oe,he);else if(oe==="object"){if(typeof E.then=="function")return R(G(E),q,k,P,he);throw q=String(E),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function V(E,q,k){if(E==null)return E;var P=[],he=0;return R(E,P,"","",function(oe){return q.call(k,oe,he++)}),P}function ie(E){if(E._status===-1){var q=E._result;q=q(),q.then(function(k){(E._status===0||E._status===-1)&&(E._status=1,E._result=k)},function(k){(E._status===0||E._status===-1)&&(E._status=2,E._result=k)}),E._status===-1&&(E._status=0,E._result=q)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},S={map:V,forEach:function(E,q,k){V(E,function(){q.apply(this,arguments)},k)},count:function(E){var q=0;return V(E,function(){q++}),q},toArray:function(E){return V(E,function(q){return q})||[]},only:function(E){if(!ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ge.Activity=w,ge.Children=S,ge.Component=B,ge.Fragment=o,ge.Profiler=h,ge.PureComponent=F,ge.StrictMode=s,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ge.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},ge.cache=function(E){return function(){return E.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(E,q,k){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var P=N({},E.props),he=E.key;if(q!=null)for(oe in q.key!==void 0&&(he=""+q.key),q)!ce.call(q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&q.ref===void 0||(P[oe]=q[oe]);var oe=arguments.length-2;if(oe===1)P.children=k;else if(1<oe){for(var Ee=Array(oe),Ge=0;Ge<oe;Ge++)Ee[Ge]=arguments[Ge+2];P.children=Ee}return fe(E.type,he,P)},ge.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ge.createElement=function(E,q,k){var P,he={},oe=null;if(q!=null)for(P in q.key!==void 0&&(oe=""+q.key),q)ce.call(q,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(he[P]=q[P]);var Ee=arguments.length-2;if(Ee===1)he.children=k;else if(1<Ee){for(var Ge=Array(Ee),Ne=0;Ne<Ee;Ne++)Ge[Ne]=arguments[Ne+2];he.children=Ge}if(E&&E.defaultProps)for(P in Ee=E.defaultProps,Ee)he[P]===void 0&&(he[P]=Ee[P]);return fe(E,oe,he)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(E){return{$$typeof:g,render:E}},ge.isValidElement=ee,ge.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ie}},ge.memo=function(E,q){return{$$typeof:m,type:E,compare:q===void 0?null:q}},ge.startTransition=function(E){var q=J.T,k={};J.T=k;try{var P=E(),he=J.S;he!==null&&he(k,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(_,ve)}catch(oe){ve(oe)}finally{q!==null&&k.types!==null&&(q.types=k.types),J.T=q}},ge.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ge.use=function(E){return J.H.use(E)},ge.useActionState=function(E,q,k){return J.H.useActionState(E,q,k)},ge.useCallback=function(E,q){return J.H.useCallback(E,q)},ge.useContext=function(E){return J.H.useContext(E)},ge.useDebugValue=function(){},ge.useDeferredValue=function(E,q){return J.H.useDeferredValue(E,q)},ge.useEffect=function(E,q){return J.H.useEffect(E,q)},ge.useEffectEvent=function(E){return J.H.useEffectEvent(E)},ge.useId=function(){return J.H.useId()},ge.useImperativeHandle=function(E,q,k){return J.H.useImperativeHandle(E,q,k)},ge.useInsertionEffect=function(E,q){return J.H.useInsertionEffect(E,q)},ge.useLayoutEffect=function(E,q){return J.H.useLayoutEffect(E,q)},ge.useMemo=function(E,q){return J.H.useMemo(E,q)},ge.useOptimistic=function(E,q){return J.H.useOptimistic(E,q)},ge.useReducer=function(E,q,k){return J.H.useReducer(E,q,k)},ge.useRef=function(E){return J.H.useRef(E)},ge.useState=function(E){return J.H.useState(E)},ge.useSyncExternalStore=function(E,q,k){return J.H.useSyncExternalStore(E,q,k)},ge.useTransition=function(){return J.H.useTransition()},ge.version="19.2.4",ge}var Hm;function fh(){return Hm||(Hm=1,Ou.exports=Pw()),Ou.exports}var L=fh(),Hu={exports:{}},vr={},Nu={exports:{}},ju={};var Nm;function $w(){return Nm||(Nm=1,(function(a){function r(R,V){var ie=R.length;R.push(V);e:for(;0<ie;){var ve=ie-1>>>1,S=R[ve];if(0<h(S,V))R[ve]=V,R[ie]=S,ie=ve;else break e}}function o(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var V=R[0],ie=R.pop();if(ie!==V){R[0]=ie;e:for(var ve=0,S=R.length,E=S>>>1;ve<E;){var q=2*(ve+1)-1,k=R[q],P=q+1,he=R[P];if(0>h(k,ie))P<S&&0>h(he,k)?(R[ve]=he,R[P]=ie,ve=P):(R[ve]=k,R[q]=ie,ve=q);else if(P<S&&0>h(he,ie))R[ve]=he,R[P]=ie,ve=P;else break e}}return V}function h(R,V){var ie=R.sortIndex-V.sortIndex;return ie!==0?ie:R.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var p=[],m=[],y=1,w=null,T=3,v=!1,H=!1,N=!1,I=!1,B=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function re(R){for(var V=o(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=R)s(m),V.sortIndex=V.expirationTime,r(p,V);else break;V=o(m)}}function le(R){if(N=!1,re(R),!H)if(o(p)!==null)H=!0,_||(_=!0,$());else{var V=o(m);V!==null&&G(le,V.startTime-R)}}var _=!1,J=-1,ce=5,fe=-1;function be(){return I?!0:!(a.unstable_now()-fe<ce)}function ee(){if(I=!1,_){var R=a.unstable_now();fe=R;var V=!0;try{e:{H=!1,N&&(N=!1,X(J),J=-1),v=!0;var ie=T;try{t:{for(re(R),w=o(p);w!==null&&!(w.expirationTime>R&&be());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,T=w.priorityLevel;var S=ve(w.expirationTime<=R);if(R=a.unstable_now(),typeof S=="function"){w.callback=S,re(R),V=!0;break t}w===o(p)&&s(p),re(R)}else s(p);w=o(p)}if(w!==null)V=!0;else{var E=o(m);E!==null&&G(le,E.startTime-R),V=!1}}break e}finally{w=null,T=ie,v=!1}V=void 0}}finally{V?$():_=!1}}}var $;if(typeof F=="function")$=function(){F(ee)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ne=ke.port2;ke.port1.onmessage=ee,$=function(){ne.postMessage(null)}}else $=function(){B(ee,0)};function G(R,V){J=B(function(){R(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(R){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var ie=T;T=V;try{return R()}finally{T=ie}},a.unstable_requestPaint=function(){I=!0},a.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var ie=T;T=R;try{return V()}finally{T=ie}},a.unstable_scheduleCallback=function(R,V,ie){var ve=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ie+S,R={id:y++,callback:V,priorityLevel:R,startTime:ie,expirationTime:S,sortIndex:-1},ie>ve?(R.sortIndex=ie,r(m,R),o(p)===null&&R===o(m)&&(N?(X(J),J=-1):N=!0,G(le,ie-ve))):(R.sortIndex=S,r(p,R),H||v||(H=!0,_||(_=!0,$()))),R},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(R){var V=T;return function(){var ie=T;T=V;try{return R.apply(this,arguments)}finally{T=ie}}}})(ju)),ju}var jm;function eb(){return jm||(jm=1,Nu.exports=$w()),Nu.exports}var Lu={exports:{}},ft={};var Lm;function tb(){if(Lm)return ft;Lm=1;var a=fh();function r(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},h=Symbol.for("react.portal");function c(p,m,y){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:p,containerInfo:m,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ft.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return c(p,m,null,y)},ft.flushSync=function(p){var m=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=y,s.d.f()}},ft.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},ft.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ft.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,w=g(y,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:v}):y==="script"&&s.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},ft.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,w=g(y,m.crossOrigin);s.d.L(p,y,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},ft.requestFormReset=function(p){s.d.r(p)},ft.unstable_batchedUpdates=function(p,m){return p(m)},ft.useFormState=function(p,m,y){return d.H.useFormState(p,m,y)},ft.useFormStatus=function(){return d.H.useHostTransitionStatus()},ft.version="19.2.4",ft}var _m;function nb(){if(_m)return Lu.exports;_m=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Lu.exports=tb(),Lu.exports}var qm;function ab(){if(qm)return vr;qm=1;var a=eb(),r=fh(),o=nb();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return p(l),e;if(u===i)return p(l),t;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=l,i=u;else{for(var f=!1,b=l.child;b;){if(b===n){f=!0,n=l,i=u;break}if(b===i){f=!0,i=l,n=u;break}b=b.sibling}if(!f){for(b=u.child;b;){if(b===n){f=!0,n=u,i=l;break}if(b===i){f=!0,i=u,n=l;break}b=b.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),F=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case B:return"Profiler";case I:return"StrictMode";case le:return"Suspense";case _:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case F:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var G=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ve=[],S=-1;function E(e){return{current:e}}function q(e){0>S||(e.current=ve[S],ve[S]=null,S--)}function k(e,t){S++,ve[S]=e.current,e.current=t}var P=E(null),he=E(null),oe=E(null),Ee=E(null);function Ge(e,t){switch(k(oe,t),k(he,e),k(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tm(t),e=nm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(P),k(P,e)}function Ne(){q(P),q(he),q(oe)}function qt(e){e.memoizedState!==null&&k(Ee,e);var t=P.current,n=nm(t,e.type);t!==n&&(k(he,e),k(P,n))}function gn(e){he.current===e&&(q(P),q(he)),Ee.current===e&&(q(Ee),gr._currentValue=ie)}var Ai,Hr;function pn(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||"",Hr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ai+e+Hr}var Da=!1;function Ra(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(O){var D=O}Reflect.construct(e,[],U)}else{try{U.call()}catch(O){D=O}e.call(U.prototype)}}else{try{throw Error()}catch(O){D=O}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(O){if(O&&D&&typeof O.stack=="string")return[O.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],b=u[1];if(f&&b){var x=f.split(`
`),z=b.split(`
`);for(l=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;if(i===x.length||l===z.length)for(i=x.length-1,l=z.length-1;1<=i&&0<=l&&x[i]!==z[l];)l--;for(;1<=i&&0<=l;i--,l--)if(x[i]!==z[l]){if(i!==1||l!==1)do if(i--,l--,0>l||x[i]!==z[l]){var j=`
`+x[i].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=i&&0<=l);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pn(n):""}function Nr(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ra(e.type,!1);case 11:return Ra(e.type.render,!1);case 1:return Ra(e.type,!0);case 31:return pn("Activity");default:return""}}function jr(e){try{var t="",n=null;do t+=Nr(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ia=Object.prototype.hasOwnProperty,Ba=a.unstable_scheduleCallback,Ci=a.unstable_cancelCallback,ws=a.unstable_shouldYield,bs=a.unstable_requestPaint,gt=a.unstable_now,vs=a.unstable_getCurrentPriorityLevel,W=a.unstable_ImmediatePriority,K=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,Te=a.unstable_LowPriority,Be=a.unstable_IdlePriority,zt=a.log,yn=a.unstable_setDisableYieldValue,pt=null,it=null;function wt(e){if(typeof zt=="function"&&yn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(pt,e)}catch{}}var qe=Math.clz32?Math.clz32:Np,jn=Math.log,en=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(jn(e)/en|0)|0}var Lr=256,_r=262144,qr=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?l=ha(i):(f&=b,f!==0?l=ha(f):n||(n=b&~e,n!==0&&(l=ha(n))))):(b=i&~u,b!==0?l=ha(b):f!==0?l=ha(f):n||(n=i&~e,n!==0&&(l=ha(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(){var e=qr;return qr<<=1,(qr&62914560)===0&&(qr=4194304),e}function ks(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lp(e,t,n,i,l,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,x=e.expirationTimes,z=e.hiddenUpdates;for(n=f&~n;0<n;){var j=31-qe(n),U=1<<j;b[j]=0,x[j]=-1;var D=z[j];if(D!==null)for(z[j]=null,j=0;j<D.length;j++){var O=D[j];O!==null&&(O.lane&=-536870913)}n&=~U}i!==0&&Nh(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Nh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-qe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function jh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-qe(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function Lh(e,t){var n=t&-t;return n=(n&42)!==0?1:Ts(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ss(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _h(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function qh(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var Ln=Math.random().toString(36).slice(2),lt="__reactFiber$"+Ln,bt="__reactProps$"+Ln,Oa="__reactContainer$"+Ln,xs="__reactEvents$"+Ln,_p="__reactListeners$"+Ln,qp="__reactHandles$"+Ln,Wh="__reactResources$"+Ln,Di="__reactMarker$"+Ln;function Es(e){delete e[lt],delete e[bt],delete e[xs],delete e[_p],delete e[qp]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[lt])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[lt]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ja(e){var t=e[Wh];return t||(t=e[Wh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[Di]=!0}var Yh=new Set,Uh={};function ca(e,t){La(e,t),La(e+"Capture",t)}function La(e,t){for(Uh[e]=t,e=0;e<t.length;e++)Yh.add(t[e])}var Wp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fh={},Vh={};function Yp(e){return Ia.call(Vh,e)?!0:Ia.call(Fh,e)?!1:Wp.test(e)?Vh[e]=!0:(Fh[e]=!0,!1)}function Yr(e,t,n){if(Yp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ur(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){if(!e._valueTracker){var t=Gh(e)?"checked":"value";e._valueTracker=Up(e,t,""+e[t])}}function Qh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Gh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fp=/[\n"\\]/g;function Yt(e){return e.replace(Fp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,n,i,l,u,f,b){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Ms(e,f,Wt(t)):n!=null?Ms(e,f,Wt(n)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Wt(b):e.removeAttribute("name")}function Xh(e,t,n,i,l,u,f,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){As(e);return}n=n!=null?""+Wt(n):"",t=t!=null?""+Wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),As(e)}function Ms(e,t,n){t==="number"&&Fr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _a(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Kh(e,t,n){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Wt(n):""}function Zh(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(G(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Wt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),As(e)}function qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jh(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Vp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ph(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&Jh(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&Jh(e,u,t[u])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vr(e){return Qp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Ds=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Ya=null;function $h(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[bt]||null;if(!l)throw Error(s(90));Cs(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Qh(i)}break e;case"textarea":Kh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_a(e,!!n.multiple,t,!1)}}}var Is=!1;function ec(e,t,n){if(Is)return e(t,n);Is=!0;try{var i=e(t);return i}finally{if(Is=!1,(Wa!==null||Ya!==null)&&(Bo(),Wa&&(t=Wa,e=Ya,Ya=Wa=null,$h(t),e)))for(t=0;t<e.length;t++)$h(e[t])}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=!1;if(vn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Bs=!1}var _n=null,Os=null,Gr=null;function tc(){if(Gr)return Gr;var e,t=Os,n=t.length,i,l="value"in _n?_n.value:_n.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===l[u-i];i++);return Gr=l.slice(e,1<i?1-i:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function nc(){return!1}function vt(e){function t(n,i,l,u,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xr:nc,this.isPropagationStopped=nc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kr=vt(da),Oi=w({},da,{view:0,detail:0}),Xp=vt(Oi),Hs,Ns,Hi,Zr=w({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(Hs=e.screenX-Hi.screenX,Ns=e.screenY-Hi.screenY):Ns=Hs=0,Hi=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),ac=vt(Zr),Kp=w({},Zr,{dataTransfer:0}),Zp=vt(Kp),Jp=w({},Oi,{relatedTarget:0}),js=vt(Jp),Pp=w({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),$p=vt(Pp),ey=w({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=vt(ey),ny=w({},da,{data:0}),ic=vt(ny),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ry[e])?!!t[e]:!1}function Ls(){return oy}var sy=w({},Oi,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ly=vt(sy),uy=w({},Zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=vt(uy),hy=w({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),cy=vt(hy),dy=w({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=vt(dy),my=w({},Zr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=vt(my),py=w({},da,{newState:0,oldState:0}),yy=vt(py),wy=[9,13,27,32],_s=vn&&"CompositionEvent"in window,Ni=null;vn&&"documentMode"in document&&(Ni=document.documentMode);var by=vn&&"TextEvent"in window&&!Ni,oc=vn&&(!_s||Ni&&8<Ni&&11>=Ni),sc=" ",lc=!1;function uc(e,t){switch(e){case"keyup":return wy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ua=!1;function vy(e,t){switch(e){case"compositionend":return hc(t);case"keypress":return t.which!==32?null:(lc=!0,sc);case"textInput":return e=t.data,e===sc&&lc?null:e;default:return null}}function ky(e,t){if(Ua)return e==="compositionend"||!_s&&uc(e,t)?(e=tc(),Gr=Os=_n=null,Ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var Ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ty[e.type]:t==="textarea"}function dc(e,t,n,i){Wa?Ya?Ya.push(i):Ya=[i]:Wa=i,t=qo(t,"onChange"),0<t.length&&(n=new Kr("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ji=null,Li=null;function Sy(e){Kf(e,0)}function Jr(e){var t=Ri(e);if(Qh(t))return e}function fc(e,t){if(e==="change")return t}var mc=!1;if(vn){var qs;if(vn){var Ws="oninput"in document;if(!Ws){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),Ws=typeof gc.oninput=="function"}qs=Ws}else qs=!1;mc=qs&&(!document.documentMode||9<document.documentMode)}function pc(){ji&&(ji.detachEvent("onpropertychange",yc),Li=ji=null)}function yc(e){if(e.propertyName==="value"&&Jr(Li)){var t=[];dc(t,Li,e,Rs(e)),ec(Sy,t)}}function xy(e,t,n){e==="focusin"?(pc(),ji=t,Li=n,ji.attachEvent("onpropertychange",yc)):e==="focusout"&&pc()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jr(Li)}function Ay(e,t){if(e==="click")return Jr(t)}function Cy(e,t){if(e==="input"||e==="change")return Jr(t)}function My(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:My;function _i(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Ia.call(t,l)||!Dt(e[l],t[l]))return!1}return!0}function wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=wc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wc(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zy=vn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Us=null,qi=null,Fs=!1;function Tc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Fa==null||Fa!==Fr(i)||(i=Fa,"selectionStart"in i&&Ys(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qi&&_i(qi,i)||(qi=i,i=qo(Us,"onSelect"),0<i.length&&(t=new Kr("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Vs={},Sc={};vn&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ma(e){if(Vs[e])return Vs[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return Vs[e]=t[n];return e}var xc=ma("animationend"),Ec=ma("animationiteration"),Ac=ma("animationstart"),Dy=ma("transitionrun"),Ry=ma("transitionstart"),Iy=ma("transitioncancel"),Cc=ma("transitionend"),Mc=new Map,Gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gs.push("scrollEnd");function tn(e,t){Mc.set(e,t),ca(t,[e])}var Pr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Ga=0,Qs=0;function $r(){for(var e=Ga,t=Qs=Ga=0;t<e;){var n=Ut[t];Ut[t++]=null;var i=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var u=Ut[t];if(Ut[t++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}u!==0&&zc(n,l,u)}}function eo(e,t,n,i){Ut[Ga++]=e,Ut[Ga++]=t,Ut[Ga++]=n,Ut[Ga++]=i,Qs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Xs(e,t,n,i){return eo(e,t,n,i),to(e)}function ga(e,t){return eo(e,null,null,t),to(e)}function zc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-qe(n),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),u):null}function to(e){if(50<lr)throw lr=0,au=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qa={};function By(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,i){return new By(e,t,n,i)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Dc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function no(e,t,n,i,l,u){var f=0;if(i=e,typeof e=="function")Ks(e)&&(f=1);else if(typeof e=="string")f=Lw(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Rt(31,n,t,l),e.elementType=fe,e.lanes=u,e;case N:return pa(n.children,l,u,t);case I:f=8,l|=24;break;case B:return e=Rt(12,n,t,l|2),e.elementType=B,e.lanes=u,e;case le:return e=Rt(13,n,t,l),e.elementType=le,e.lanes=u,e;case _:return e=Rt(19,n,t,l),e.elementType=_,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:f=10;break e;case X:f=9;break e;case re:f=11;break e;case J:f=14;break e;case ce:f=16,i=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Rt(f,n,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function pa(e,t,n,i){return e=Rt(7,e,i,t),e.lanes=n,e}function Zs(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function Rc(e){var t=Rt(18,null,null,0);return t.stateNode=e,t}function Js(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ic=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=Ic.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jr(t)},Ic.set(e,t),t)}return{value:e,source:t,stack:jr(t)}}var Xa=[],Ka=0,ao=null,Wi=0,Vt=[],Gt=0,qn=null,on=1,sn="";function Tn(e,t){Xa[Ka++]=Wi,Xa[Ka++]=ao,ao=e,Wi=t}function Bc(e,t,n){Vt[Gt++]=on,Vt[Gt++]=sn,Vt[Gt++]=qn,qn=e;var i=on;e=sn;var l=32-qe(i)-1;i&=~(1<<l),n+=1;var u=32-qe(t)+l;if(30<u){var f=l-l%5;u=(i&(1<<f)-1).toString(32),i>>=f,l-=f,on=1<<32-qe(t)+l|n<<l|i,sn=u+e}else on=1<<u|n<<l|i,sn=e}function Ps(e){e.return!==null&&(Tn(e,1),Bc(e,1,0))}function $s(e){for(;e===ao;)ao=Xa[--Ka],Xa[Ka]=null,Wi=Xa[--Ka],Xa[Ka]=null;for(;e===qn;)qn=Vt[--Gt],Vt[Gt]=null,sn=Vt[--Gt],Vt[Gt]=null,on=Vt[--Gt],Vt[Gt]=null}function Oc(e,t){Vt[Gt++]=on,Vt[Gt++]=sn,Vt[Gt++]=qn,on=t.id,sn=t.overflow,qn=e}var ut=null,Fe=null,Me=!1,Wn=null,Qt=!1,el=Error(s(519));function Yn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(Ft(t,e)),el}function Hc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[bt]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<hr.length;n++)xe(hr[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),Xh(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Zh(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||$f(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Yn(e,!0)}function Nc(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:ut=ut.return}}function Za(e){if(e!==ut)return!1;if(!Me)return Nc(e),Me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||wu(e.type,e.memoizedProps)),n=!n),n&&Fe&&Yn(e),Nc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Fe=lm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Fe=lm(e)}else t===27?(t=Fe,na(e.type)?(e=Su,Su=null,Fe=e):Fe=t):Fe=ut?Kt(e.stateNode.nextSibling):null;return!0}function ya(){Fe=ut=null,Me=!1}function tl(){var e=Wn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),Wn=null),e}function Yi(e){Wn===null?Wn=[e]:Wn.push(e)}var nl=E(null),wa=null,Sn=null;function Un(e,t,n){k(nl,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=nl.current,q(nl)}function al(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function il(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var f=l.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=l;for(var x=0;x<t.length;x++)if(b.context===t[x]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),al(u.return,n,e),i||(f=null);break e}u=b.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),al(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Ja(e,t,n,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var b=l.type;Dt(l.pendingProps.value,f.value)||(e!==null?e.push(b):e=[b])}}else if(l===Ee.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gr):e=[gr])}l=l.return}e!==null&&il(t,e,n,i),t.flags|=262144}function io(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){wa=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return jc(wa,e)}function ro(e,t){return wa===null&&ba(e),jc(e,t)}function jc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(s(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hy=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,$e={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rl(){return{controller:new Oy,data:new Map,refCount:0}}function Ui(e){e.refCount--,e.refCount===0&&Hy(Ny,function(){e.controller.abort()})}var Fi=null,ol=0,Pa=0,$a=null;function jy(e,t){if(Fi===null){var n=Fi=[];ol=0,Pa=uu(),$a={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ol++,t.then(Lc,Lc),t}function Lc(){if(--ol===0&&Fi!==null){$a!==null&&($a.status="fulfilled");var e=Fi;Fi=null,Pa=0,$a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ly(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var _c=R.S;R.S=function(e,t){Sf=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&jy(e,t),_c!==null&&_c(e,t)};var va=E(null);function sl(){var e=va.current;return e!==null?e:We.pooledCache}function oo(e,t){t===null?k(va,va.current):k(va,t.pool)}function qc(){var e=sl();return e===null?null:{parent:$e._currentValue,pool:e}}var ei=Error(s(460)),ll=Error(s(474)),so=Error(s(542)),lo={then:function(){}};function Wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e}throw Ta=t,ei}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,ei):n}}var Ta=null;function Uc(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Fc(e){if(e===ei||e===so)throw Error(s(483))}var ti=null,Vi=0;function uo(e){var t=Vi;return Vi+=1,ti===null&&(ti=[]),Yc(ti,e,t)}function Gi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ho(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vc(e){function t(C,A){if(e){var M=C.deletions;M===null?(C.deletions=[A],C.flags|=16):M.push(A)}}function n(C,A){if(!e)return null;for(;A!==null;)t(C,A),A=A.sibling;return null}function i(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function l(C,A){return C=kn(C,A),C.index=0,C.sibling=null,C}function u(C,A,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<A?(C.flags|=67108866,A):M):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function b(C,A,M,Y){return A===null||A.tag!==6?(A=Zs(M,C.mode,Y),A.return=C,A):(A=l(A,M),A.return=C,A)}function x(C,A,M,Y){var se=M.type;return se===N?j(C,A,M.props.children,Y,M.key):A!==null&&(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===A.type)?(A=l(A,M.props),Gi(A,M),A.return=C,A):(A=no(M.type,M.key,M.props,null,C.mode,Y),Gi(A,M),A.return=C,A)}function z(C,A,M,Y){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Js(M,C.mode,Y),A.return=C,A):(A=l(A,M.children||[]),A.return=C,A)}function j(C,A,M,Y,se){return A===null||A.tag!==7?(A=pa(M,C.mode,Y,se),A.return=C,A):(A=l(A,M),A.return=C,A)}function U(C,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Zs(""+A,C.mode,M),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case v:return M=no(A.type,A.key,A.props,null,C.mode,M),Gi(M,A),M.return=C,M;case H:return A=Js(A,C.mode,M),A.return=C,A;case ce:return A=ka(A),U(C,A,M)}if(G(A)||$(A))return A=pa(A,C.mode,M,null),A.return=C,A;if(typeof A.then=="function")return U(C,uo(A),M);if(A.$$typeof===F)return U(C,ro(C,A),M);ho(C,A)}return null}function D(C,A,M,Y){var se=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return se!==null?null:b(C,A,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case v:return M.key===se?x(C,A,M,Y):null;case H:return M.key===se?z(C,A,M,Y):null;case ce:return M=ka(M),D(C,A,M,Y)}if(G(M)||$(M))return se!==null?null:j(C,A,M,Y,null);if(typeof M.then=="function")return D(C,A,uo(M),Y);if(M.$$typeof===F)return D(C,A,ro(C,M),Y);ho(C,M)}return null}function O(C,A,M,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return C=C.get(M)||null,b(A,C,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return C=C.get(Y.key===null?M:Y.key)||null,x(A,C,Y,se);case H:return C=C.get(Y.key===null?M:Y.key)||null,z(A,C,Y,se);case ce:return Y=ka(Y),O(C,A,M,Y,se)}if(G(Y)||$(Y))return C=C.get(M)||null,j(A,C,Y,se,null);if(typeof Y.then=="function")return O(C,A,M,uo(Y),se);if(Y.$$typeof===F)return O(C,A,M,ro(A,Y),se);ho(A,Y)}return null}function te(C,A,M,Y){for(var se=null,ze=null,ae=A,ye=A=0,Ce=null;ae!==null&&ye<M.length;ye++){ae.index>ye?(Ce=ae,ae=null):Ce=ae.sibling;var De=D(C,ae,M[ye],Y);if(De===null){ae===null&&(ae=Ce);break}e&&ae&&De.alternate===null&&t(C,ae),A=u(De,A,ye),ze===null?se=De:ze.sibling=De,ze=De,ae=Ce}if(ye===M.length)return n(C,ae),Me&&Tn(C,ye),se;if(ae===null){for(;ye<M.length;ye++)ae=U(C,M[ye],Y),ae!==null&&(A=u(ae,A,ye),ze===null?se=ae:ze.sibling=ae,ze=ae);return Me&&Tn(C,ye),se}for(ae=i(ae);ye<M.length;ye++)Ce=O(ae,C,ye,M[ye],Y),Ce!==null&&(e&&Ce.alternate!==null&&ae.delete(Ce.key===null?ye:Ce.key),A=u(Ce,A,ye),ze===null?se=Ce:ze.sibling=Ce,ze=Ce);return e&&ae.forEach(function(sa){return t(C,sa)}),Me&&Tn(C,ye),se}function ue(C,A,M,Y){if(M==null)throw Error(s(151));for(var se=null,ze=null,ae=A,ye=A=0,Ce=null,De=M.next();ae!==null&&!De.done;ye++,De=M.next()){ae.index>ye?(Ce=ae,ae=null):Ce=ae.sibling;var sa=D(C,ae,De.value,Y);if(sa===null){ae===null&&(ae=Ce);break}e&&ae&&sa.alternate===null&&t(C,ae),A=u(sa,A,ye),ze===null?se=sa:ze.sibling=sa,ze=sa,ae=Ce}if(De.done)return n(C,ae),Me&&Tn(C,ye),se;if(ae===null){for(;!De.done;ye++,De=M.next())De=U(C,De.value,Y),De!==null&&(A=u(De,A,ye),ze===null?se=De:ze.sibling=De,ze=De);return Me&&Tn(C,ye),se}for(ae=i(ae);!De.done;ye++,De=M.next())De=O(ae,C,ye,De.value,Y),De!==null&&(e&&De.alternate!==null&&ae.delete(De.key===null?ye:De.key),A=u(De,A,ye),ze===null?se=De:ze.sibling=De,ze=De);return e&&ae.forEach(function(Kw){return t(C,Kw)}),Me&&Tn(C,ye),se}function _e(C,A,M,Y){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case v:e:{for(var se=M.key;A!==null;){if(A.key===se){if(se=M.type,se===N){if(A.tag===7){n(C,A.sibling),Y=l(A,M.props.children),Y.return=C,C=Y;break e}}else if(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===A.type){n(C,A.sibling),Y=l(A,M.props),Gi(Y,M),Y.return=C,C=Y;break e}n(C,A);break}else t(C,A);A=A.sibling}M.type===N?(Y=pa(M.props.children,C.mode,Y,M.key),Y.return=C,C=Y):(Y=no(M.type,M.key,M.props,null,C.mode,Y),Gi(Y,M),Y.return=C,C=Y)}return f(C);case H:e:{for(se=M.key;A!==null;){if(A.key===se)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){n(C,A.sibling),Y=l(A,M.children||[]),Y.return=C,C=Y;break e}else{n(C,A);break}else t(C,A);A=A.sibling}Y=Js(M,C.mode,Y),Y.return=C,C=Y}return f(C);case ce:return M=ka(M),_e(C,A,M,Y)}if(G(M))return te(C,A,M,Y);if($(M)){if(se=$(M),typeof se!="function")throw Error(s(150));return M=se.call(M),ue(C,A,M,Y)}if(typeof M.then=="function")return _e(C,A,uo(M),Y);if(M.$$typeof===F)return _e(C,A,ro(C,M),Y);ho(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(C,A.sibling),Y=l(A,M),Y.return=C,C=Y):(n(C,A),Y=Zs(M,C.mode,Y),Y.return=C,C=Y),f(C)):n(C,A)}return function(C,A,M,Y){try{Vi=0;var se=_e(C,A,M,Y);return ti=null,se}catch(ae){if(ae===ei||ae===so)throw ae;var ze=Rt(29,ae,null,C.mode);return ze.lanes=Y,ze.return=C,ze}}}var Sa=Vc(!0),Gc=Vc(!1),Fn=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=to(e),zc(e,null,n),t}return eo(e,i,t,n),to(e)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jh(e,n)}}function cl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var dl=!1;function Xi(){if(dl){var e=$a;if(e!==null)throw e}}function Ki(e,t,n,i){dl=!1;var l=e.updateQueue;Fn=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var x=b,z=x.next;x.next=null,f===null?u=z:f.next=z,f=x;var j=e.alternate;j!==null&&(j=j.updateQueue,b=j.lastBaseUpdate,b!==f&&(b===null?j.firstBaseUpdate=z:b.next=z,j.lastBaseUpdate=x))}if(u!==null){var U=l.baseState;f=0,j=z=x=null,b=u;do{var D=b.lane&-536870913,O=D!==b.lane;if(O?(Ae&D)===D:(i&D)===D){D!==0&&D===Pa&&(dl=!0),j!==null&&(j=j.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,ue=b;D=t;var _e=n;switch(ue.tag){case 1:if(te=ue.payload,typeof te=="function"){U=te.call(_e,U,D);break e}U=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ue.payload,D=typeof te=="function"?te.call(_e,U,D):te,D==null)break e;U=w({},U,D);break e;case 2:Fn=!0}}D=b.callback,D!==null&&(e.flags|=64,O&&(e.flags|=8192),O=l.callbacks,O===null?l.callbacks=[D]:O.push(D))}else O={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},j===null?(z=j=O,x=U):j=j.next=O,f|=D;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;O=b,b=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);j===null&&(x=U),l.baseState=x,l.firstBaseUpdate=z,l.lastBaseUpdate=j,u===null&&(l.shared.lanes=0),Jn|=f,e.lanes=f,e.memoizedState=U}}function Qc(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Xc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qc(n[e],t)}var ni=E(null),co=E(0);function Kc(e,t){e=Bn,k(co,e),k(ni,t),Bn=e|t.baseLanes}function fl(){k(co,Bn),k(ni,ni.current)}function ml(){Bn=co.current,q(ni),q(co)}var It=E(null),Xt=null;function Qn(e){var t=e.alternate;k(Je,Je.current&1),k(It,e),Xt===null&&(t===null||ni.current!==null||t.memoizedState!==null)&&(Xt=e)}function gl(e){k(Je,Je.current),k(It,e),Xt===null&&(Xt=e)}function Zc(e){e.tag===22?(k(Je,Je.current),k(It,e),Xt===null&&(Xt=e)):Xn()}function Xn(){k(Je,Je.current),k(It,It.current)}function Bt(e){q(It),Xt===e&&(Xt=null),q(Je)}var Je=E(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ku(n)||Tu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,pe=null,je=null,et=null,mo=!1,ai=!1,xa=!1,go=0,Zi=0,ii=null,_y=0;function Ke(){throw Error(s(321))}function pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function yl(e,t,n,i,l,u){return En=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Bd:Il,xa=!1,u=n(i,l),xa=!1,ai&&(u=Pc(t,n,i,l)),Jc(e),u}function Jc(e){R.H=$i;var t=je!==null&&je.next!==null;if(En=0,et=je=pe=null,mo=!1,Zi=0,ii=null,t)throw Error(s(300));e===null||tt||(e=e.dependencies,e!==null&&io(e)&&(tt=!0))}function Pc(e,t,n,i){pe=e;var l=0;do{if(ai&&(ii=null),Zi=0,ai=!1,25<=l)throw Error(s(301));if(l+=1,et=je=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}R.H=Od,u=t(n,i)}while(ai);return u}function qy(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(pe.flags|=1024),t}function wl(){var e=go!==0;return go=0,e}function bl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vl(e){if(mo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mo=!1}En=0,et=je=pe=null,ai=!1,Zi=go=0,ii=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?pe.memoizedState=et=e:et=et.next=e,et}function Pe(){if(je===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=et===null?pe.memoizedState:et.next;if(t!==null)et=t,je=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},et===null?pe.memoizedState=et=e:et=et.next=e}return et}function po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=Zi;return Zi+=1,ii===null&&(ii=[]),e=Yc(ii,e,t),t=pe,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Bd:Il),e}function yo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===F)return ht(e)}throw Error(s(438,String(e)))}function kl(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=po(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=be;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function wo(e){var t=Pe();return Tl(t,je,e)}function Tl(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var b=f=null,x=null,z=t,j=!1;do{var U=z.lane&-536870913;if(U!==z.lane?(Ae&U)===U:(En&U)===U){var D=z.revertLane;if(D===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),U===Pa&&(j=!0);else if((En&D)===D){z=z.next,D===Pa&&(j=!0);continue}else U={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=U,f=u):x=x.next=U,pe.lanes|=D,Jn|=D;U=z.action,xa&&n(u,U),u=z.hasEagerState?z.eagerState:n(u,U)}else D={lane:U,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=D,f=u):x=x.next=D,pe.lanes|=U,Jn|=U;z=z.next}while(z!==null&&z!==t);if(x===null?f=u:x.next=b,!Dt(u,e.memoizedState)&&(tt=!0,j&&(n=$a,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=x,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Sl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);Dt(u,t.memoizedState)||(tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function $c(e,t,n){var i=pe,l=Pe(),u=Me;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!Dt((je||l).memoizedState,n);if(f&&(l.memoizedState=n,tt=!0),l=l.queue,Al(nd.bind(null,i,l,e),[e]),l.getSnapshot!==t||f||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,ri(9,{destroy:void 0},td.bind(null,i,l,n,t),null),We===null)throw Error(s(349));u||(En&127)!==0||ed(i,t,n)}return n}function ed(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=po(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function td(e,t,n,i){t.value=n,t.getSnapshot=i,ad(t)&&id(e)}function nd(e,t,n){return n(function(){ad(t)&&id(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function id(e){var t=ga(e,2);t!==null&&Et(t,e,2)}function xl(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),xa){wt(!0);try{n()}finally{wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function rd(e,t,n,i){return e.baseState=n,Tl(e,je,typeof i=="function"?i:An)}function Wy(e,t,n,i,l){if(ko(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};R.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,od(t,u)):(u.next=n.next,t.pending=n.next=u)}}function od(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=R.T,f={};R.T=f;try{var b=n(l,i),x=R.S;x!==null&&x(f,b),sd(e,t,b)}catch(z){El(e,t,z)}finally{u!==null&&f.types!==null&&(u.types=f.types),R.T=u}}else try{u=n(l,i),sd(e,t,u)}catch(z){El(e,t,z)}}function sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ld(e,t,i)},function(i){return El(e,t,i)}):ld(e,t,n)}function ld(e,t,n){t.status="fulfilled",t.value=n,ud(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,od(e,n)))}function El(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ud(t),t=t.next;while(t!==i)}e.action=null}function ud(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function hd(e,t){return t}function cd(e,t){if(Me){var n=We.formState;if(n!==null){e:{var i=pe;if(Me){if(Fe){t:{for(var l=Fe,u=Qt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Kt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Fe=Kt(l.nextSibling),i=l.data==="F!";break e}}Yn(i)}i=!1}i&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hd,lastRenderedState:t},n.queue=i,n=Dd.bind(null,pe,i),i.dispatch=n,i=xl(!1),u=Rl.bind(null,pe,!1,i.queue),i=yt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Wy.bind(null,pe,l,u,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function dd(e){var t=Pe();return fd(t,je,e)}function fd(e,t,n){if(t=Tl(e,t,hd)[0],e=wo(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ji(t)}catch(f){throw f===ei?so:f}else i=t;t=Pe();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,ri(9,{destroy:void 0},Yy.bind(null,l,n),null)),[i,u,e]}function Yy(e,t){e.action=t}function md(e){var t=Pe(),n=je;if(n!==null)return fd(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ri(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=po(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gd(){return Pe().memoizedState}function bo(e,t,n,i){var l=yt();pe.flags|=e,l.memoizedState=ri(1|t,{destroy:void 0},n,i===void 0?null:i)}function vo(e,t,n,i){var l=Pe();i=i===void 0?null:i;var u=l.memoizedState.inst;je!==null&&i!==null&&pl(i,je.memoizedState.deps)?l.memoizedState=ri(t,u,n,i):(pe.flags|=e,l.memoizedState=ri(1|t,u,n,i))}function pd(e,t){bo(8390656,8,e,t)}function Al(e,t){vo(2048,8,e,t)}function Uy(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=po(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function yd(e){var t=Pe().memoizedState;return Uy({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function wd(e,t){return vo(4,2,e,t)}function bd(e,t){return vo(4,4,e,t)}function vd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kd(e,t,n){n=n!=null?n.concat([e]):null,vo(4,4,vd.bind(null,t,e),n)}function Cl(){}function Td(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&pl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&pl(t,i[1]))return i[0];if(i=e(),xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i}function Ml(e,t,n){return n===void 0||(En&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ef(),pe.lanes|=e,Jn|=e,n)}function xd(e,t,n,i){return Dt(n,t)?n:ni.current!==null?(e=Ml(e,n,i),Dt(e,t)||(tt=!0),e):(En&42)===0||(En&1073741824)!==0&&(Ae&261930)===0?(tt=!0,e.memoizedState=n):(e=Ef(),pe.lanes|=e,Jn|=e,t)}function Ed(e,t,n,i,l){var u=V.p;V.p=u!==0&&8>u?u:8;var f=R.T,b={};R.T=b,Rl(e,!1,t,n);try{var x=l(),z=R.S;if(z!==null&&z(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var j=Ly(x,i);Pi(e,t,j,Nt(e))}else Pi(e,t,i,Nt(e))}catch(U){Pi(e,t,{then:function(){},status:"rejected",reason:U},Nt())}finally{V.p=u,f!==null&&b.types!==null&&(f.types=b.types),R.T=f}}function Fy(){}function zl(e,t,n,i){if(e.tag!==5)throw Error(s(476));var l=Ad(e).queue;Ed(e,l,t,ie,n===null?Fy:function(){return Cd(e),n(i)})}function Ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=Ad(e);t.next===null&&(t=e.alternate.memoizedState),Pi(e,t.next.queue,{},Nt())}function Dl(){return ht(gr)}function Md(){return Pe().memoizedState}function zd(){return Pe().memoizedState}function Vy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=Vn(n);var i=Gn(t,e,n);i!==null&&(Et(i,t,n),Qi(i,t,n)),t={cache:rl()},e.payload=t;return}t=t.return}}function Gy(e,t,n){var i=Nt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ko(e)?Rd(t,n):(n=Xs(e,t,n,i),n!==null&&(Et(n,e,i),Id(n,t,i)))}function Dd(e,t,n){var i=Nt();Pi(e,t,n,i)}function Pi(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ko(e))Rd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,b=u(f,n);if(l.hasEagerState=!0,l.eagerState=b,Dt(b,f))return eo(e,t,l,0),We===null&&$r(),!1}catch{}if(n=Xs(e,t,l,i),n!==null)return Et(n,e,i),Id(n,t,i),!0}return!1}function Rl(e,t,n,i){if(i={lane:2,revertLane:uu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(t)throw Error(s(479))}else t=Xs(e,n,i,2),t!==null&&Et(t,e,2)}function ko(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Rd(e,t){ai=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Id(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jh(e,n)}}var $i={readContext:ht,use:yo,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};$i.useEffectEvent=Ke;var Bd={readContext:ht,use:yo,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:pd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,bo(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){bo(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var i=e();if(xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yt();if(n!==void 0){var l=n(t);if(xa){wt(!0);try{n(t)}finally{wt(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Gy.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=xl(e);var t=e.queue,n=Dd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cl,useDeferredValue:function(e,t){var n=yt();return Ml(n,e,t)},useTransition:function(){var e=xl(!1);return e=Ed.bind(null,pe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=pe,l=yt();if(Me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),We===null)throw Error(s(349));(Ae&127)!==0||ed(i,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,pd(nd.bind(null,i,u,e),[e]),i.flags|=2048,ri(9,{destroy:void 0},td.bind(null,i,u,n,t),null),n},useId:function(){var e=yt(),t=We.identifierPrefix;if(Me){var n=sn,i=on;n=(i&~(1<<32-qe(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_y++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dl,useFormState:cd,useActionState:cd,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rl.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:kl,useCacheRefresh:function(){return yt().memoizedState=Vy.bind(null,pe)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Il={readContext:ht,use:yo,useCallback:Td,useContext:ht,useEffect:Al,useImperativeHandle:kd,useInsertionEffect:wd,useLayoutEffect:bd,useMemo:Sd,useReducer:wo,useRef:gd,useState:function(){return wo(An)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Pe();return xd(n,je.memoizedState,e,t)},useTransition:function(){var e=wo(An)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:$c,useId:Md,useHostTransitionStatus:Dl,useFormState:dd,useActionState:dd,useOptimistic:function(e,t){var n=Pe();return rd(n,je,e,t)},useMemoCache:kl,useCacheRefresh:zd};Il.useEffectEvent=yd;var Od={readContext:ht,use:yo,useCallback:Td,useContext:ht,useEffect:Al,useImperativeHandle:kd,useInsertionEffect:wd,useLayoutEffect:bd,useMemo:Sd,useReducer:Sl,useRef:gd,useState:function(){return Sl(An)},useDebugValue:Cl,useDeferredValue:function(e,t){var n=Pe();return je===null?Ml(n,e,t):xd(n,je.memoizedState,e,t)},useTransition:function(){var e=Sl(An)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:$c,useId:Md,useHostTransitionStatus:Dl,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Pe();return je!==null?rd(n,je,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:kl,useCacheRefresh:zd};Od.useEffectEvent=yd;function Bl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nt(),l=Vn(i);l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(Et(t,e,i),Qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nt(),l=Vn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gn(e,l,i),t!==null&&(Et(t,e,i),Qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),i=Vn(n);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,n),t!==null&&(Et(t,e,n),Qi(t,e,n))}};function Hd(e,t,n,i,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!_i(n,i)||!_i(l,u):!0}function Nd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function jd(e){Pr(e)}function Ld(e){console.error(e)}function _d(e){Pr(e)}function To(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qd(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hl(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){To(e,t)},n}function Wd(e){return e=Vn(e),e.tag=3,e}function Yd(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){qd(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){qd(t,n,i),typeof l!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Qy(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ja(t,n,l,!0),n=It.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?Oo():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===lo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ou(e,i,l)),!1;case 22:return n.flags|=65536,i===lo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ou(e,i,l)),!1}throw Error(s(435,n.tag))}return ou(e,i,l),Oo(),!1}if(Me)return t=It.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==el&&(e=Error(s(422),{cause:i}),Yi(Ft(e,n)))):(i!==el&&(t=Error(s(423),{cause:i}),Yi(Ft(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Ft(i,n),l=Hl(e.stateNode,i,l),cl(e,l),Ze!==4&&(Ze=2)),!1;var u=Error(s(520),{cause:i});if(u=Ft(u,n),sr===null?sr=[u]:sr.push(u),Ze!==4&&(Ze=2),t===null)return!0;i=Ft(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Hl(n.stateNode,i,e),cl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Pn===null||!Pn.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Wd(l),Yd(l,e,n,i),cl(n,l),!1}n=n.return}while(n!==null);return!1}var Nl=Error(s(461)),tt=!1;function ct(e,t,n,i){t.child=e===null?Gc(t,null,n,i):Sa(t,e.child,n,i)}function Ud(e,t,n,i,l){n=n.render;var u=t.ref;if("ref"in i){var f={};for(var b in i)b!=="ref"&&(f[b]=i[b])}else f=i;return ba(t),i=yl(e,t,n,f,u,l),b=wl(),e!==null&&!tt?(bl(e,t,l),Cn(e,t,l)):(Me&&b&&Ps(t),t.flags|=1,ct(e,t,i,l),t.child)}function Fd(e,t,n,i,l){if(e===null){var u=n.type;return typeof u=="function"&&!Ks(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Vd(e,t,u,i,l)):(e=no(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Fl(e,l)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(f,i)&&e.ref===t.ref)return Cn(e,t,l)}return t.flags|=1,e=kn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,i,l){if(e!==null){var u=e.memoizedProps;if(_i(u,i)&&e.ref===t.ref)if(tt=!1,t.pendingProps=i=u,Fl(e,l))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Cn(e,t,l)}return jl(e,t,n,i,l)}function Gd(e,t,n,i){var l=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~u}else i=0,t.child=null;return Qd(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oo(t,u!==null?u.cachePool:null),u!==null?Kc(t,u):fl(),Zc(t);else return i=t.lanes=536870912,Qd(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(oo(t,u.cachePool),Kc(t,u),Xn(),t.memoizedState=null):(e!==null&&oo(t,null),fl(),Xn());return ct(e,t,l,n),t.child}function er(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Qd(e,t,n,i,l){var u=sl();return u=u===null?null:{parent:$e._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&oo(t,null),fl(),Zc(t),e!==null&&Ja(e,t,i,!0),t.childLanes=l,null}function So(e,t){return t=Eo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Xd(e,t,n){return Sa(t,e.child,null,n),e=So(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Xy(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Me){if(i.mode==="hidden")return e=So(t,i),t.lanes=536870912,er(null,e);if(gl(t),(e=Fe)?(e=sm(e,Qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:on,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Rc(e),n.return=t,t.child=n,ut=t,Fe=null)):e=null,e===null)throw Yn(t);return t.lanes=536870912,null}return So(t,i)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(gl(t),l)if(t.flags&256)t.flags&=-257,t=Xd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(tt||Ja(e,t,n,!1),l=(n&e.childLanes)!==0,tt||l){if(i=We,i!==null&&(f=Lh(i,n),f!==0&&f!==u.retryLane))throw u.retryLane=f,ga(e,f),Et(i,e,f),Nl;Oo(),t=Xd(e,t,n)}else e=u.treeContext,Fe=Kt(f.nextSibling),ut=t,Me=!0,Wn=null,Qt=!1,e!==null&&Oc(t,e),t=So(t,i),t.flags|=4096;return t}return e=kn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jl(e,t,n,i,l){return ba(t),n=yl(e,t,n,i,void 0,l),i=wl(),e!==null&&!tt?(bl(e,t,l),Cn(e,t,l)):(Me&&i&&Ps(t),t.flags|=1,ct(e,t,n,l),t.child)}function Kd(e,t,n,i,l,u){return ba(t),t.updateQueue=null,n=Pc(t,i,n,l),Jc(e),i=wl(),e!==null&&!tt?(bl(e,t,u),Cn(e,t,u)):(Me&&i&&Ps(t),t.flags|=1,ct(e,t,n,u),t.child)}function Zd(e,t,n,i,l){if(ba(t),t.stateNode===null){var u=Qa,f=n.contextType;typeof f=="object"&&f!==null&&(u=ht(f)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ol,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},ul(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?ht(f):Qa,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Bl(t,n,f,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ol.enqueueReplaceState(u,u.state,null),Ki(t,i,u,l),Xi(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,x=Ea(n,b);u.props=x;var z=u.context,j=n.contextType;f=Qa,typeof j=="object"&&j!==null&&(f=ht(j));var U=n.getDerivedStateFromProps;j=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||z!==f)&&Nd(t,u,i,f),Fn=!1;var D=t.memoizedState;u.state=D,Ki(t,i,u,l),Xi(),z=t.memoizedState,b||D!==z||Fn?(typeof U=="function"&&(Bl(t,n,U,i),z=t.memoizedState),(x=Fn||Hd(t,n,x,i,D,z,f))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),u.props=i,u.state=z,u.context=f,i=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,hl(e,t),f=t.memoizedProps,j=Ea(n,f),u.props=j,U=t.pendingProps,D=u.context,z=n.contextType,x=Qa,typeof z=="object"&&z!==null&&(x=ht(z)),b=n.getDerivedStateFromProps,(z=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==U||D!==x)&&Nd(t,u,i,x),Fn=!1,D=t.memoizedState,u.state=D,Ki(t,i,u,l),Xi();var O=t.memoizedState;f!==U||D!==O||Fn||e!==null&&e.dependencies!==null&&io(e.dependencies)?(typeof b=="function"&&(Bl(t,n,b,i),O=t.memoizedState),(j=Fn||Hd(t,n,j,i,D,O,x)||e!==null&&e.dependencies!==null&&io(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,O,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,O,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=O),u.props=i,u.state=O,u.context=x,i=j):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,xo(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=Sa(t,e.child,null,l),t.child=Sa(t,null,n,l)):ct(e,t,n,l),t.memoizedState=u.state,e=t.child):e=Cn(e,t,l),e}function Jd(e,t,n,i){return ya(),t.flags|=256,ct(e,t,n,i),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _l(e){return{baseLanes:e,cachePool:qc()}}function ql(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ht),e}function Pd(e,t,n){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Me){if(l?Qn(t):Xn(),(e=Fe)?(e=sm(e,Qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qn!==null?{id:on,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Rc(e),n.return=t,t.child=n,ut=t,Fe=null)):e=null,e===null)throw Yn(t);return Tu(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,l?(Xn(),l=t.mode,b=Eo({mode:"hidden",children:b},l),i=pa(i,l,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=_l(n),i.childLanes=ql(e,f,n),t.memoizedState=Ll,er(null,i)):(Qn(t),Wl(t,b))}var x=e.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(u)t.flags&256?(Qn(t),t.flags&=-257,t=Yl(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),b=i.fallback,l=t.mode,i=Eo({mode:"visible",children:i.children},l),b=pa(b,l,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Sa(t,e.child,null,n),i=t.child,i.memoizedState=_l(n),i.childLanes=ql(e,f,n),t.memoizedState=Ll,t=er(null,i));else if(Qn(t),Tu(b)){if(f=b.nextSibling&&b.nextSibling.dataset,f)var z=f.dgst;f=z,i=Error(s(419)),i.stack="",i.digest=f,Yi({value:i,source:null,stack:null}),t=Yl(e,t,n)}else if(tt||Ja(e,t,n,!1),f=(n&e.childLanes)!==0,tt||f){if(f=We,f!==null&&(i=Lh(f,n),i!==0&&i!==x.retryLane))throw x.retryLane=i,ga(e,i),Et(f,e,i),Nl;ku(b)||Oo(),t=Yl(e,t,n)}else ku(b)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Fe=Kt(b.nextSibling),ut=t,Me=!0,Wn=null,Qt=!1,e!==null&&Oc(t,e),t=Wl(t,i.children),t.flags|=4096);return t}return l?(Xn(),b=i.fallback,l=t.mode,x=e.child,z=x.sibling,i=kn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,z!==null?b=kn(z,b):(b=pa(b,l,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,er(null,i),i=t.child,b=e.child.memoizedState,b===null?b=_l(n):(l=b.cachePool,l!==null?(x=$e._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=qc(),b={baseLanes:b.baseLanes|n,cachePool:l}),i.memoizedState=b,i.childLanes=ql(e,f,n),t.memoizedState=Ll,er(e.child,i)):(Qn(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Wl(e,t){return t=Eo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eo(e,t){return e=Rt(22,e,null,t),e.lanes=0,e}function Yl(e,t,n){return Sa(t,e.child,null,n),e=Wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $d(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),al(e.return,t,n)}function Ul(e,t,n,i,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=n,f.tailMode=l,f.treeForkCount=u)}function ef(e,t,n){var i=t.pendingProps,l=i.revealOrder,u=i.tail;i=i.children;var f=Je.current,b=(f&2)!==0;if(b?(f=f&1|2,t.flags|=128):f&=1,k(Je,f),ct(e,t,i,n),i=Me?Wi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ul(t,!1,l,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ul(t,!0,n,null,u,i);break;case"together":Ul(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ja(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&io(e)))}function Ky(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),Un(t,$e,e.memoizedState.cache),ya();break;case 27:case 5:qt(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:Un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,gl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Pd(e,t,n):(Qn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ja(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return ef(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(Je,Je.current),i)break;return null;case 22:return t.lanes=0,Gd(e,t,n,t.pendingProps);case 24:Un(t,$e,e.memoizedState.cache)}return Cn(e,t,n)}function tf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!Fl(e,n)&&(t.flags&128)===0)return tt=!1,Ky(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Me&&(t.flags&1048576)!==0&&Bc(t,Wi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Ks(e)?(i=Ea(e,i),t.tag=1,t=Zd(null,t,e,i,n)):(t.tag=0,t=jl(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===re){t.tag=11,t=Ud(null,t,e,i,n);break e}else if(l===J){t.tag=14,t=Fd(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(s(306,t,""))}}return t;case 0:return jl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Ea(i,t.pendingProps),Zd(e,t,i,l,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,hl(e,t),Ki(t,i,null,n);var f=t.memoizedState;if(i=f.cache,Un(t,$e,i),i!==u.cache&&il(t,[$e],n,!0),Xi(),i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Jd(e,t,i,n);break e}else if(i!==l){l=Ft(Error(s(424)),t),Yi(l),t=Jd(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Fe=Kt(e.firstChild),ut=t,Me=!0,Wn=null,Qt=!0,n=Gc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),i===l){t=Cn(e,t,n);break e}ct(e,t,i,n)}t=t.child}return t;case 26:return xo(e,t),e===null?(n=fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Me||(n=t.type,e=t.pendingProps,i=Wo(oe.current).createElement(n),i[lt]=t,i[bt]=e,dt(i,n,e),ot(i),t.stateNode=i):t.memoizedState=fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qt(t),e===null&&Me&&(i=t.stateNode=hm(t.type,t.pendingProps,oe.current),ut=t,Qt=!0,l=Fe,na(t.type)?(Su=l,Fe=Kt(i.firstChild)):Fe=l),ct(e,t,t.pendingProps.children,n),xo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Me&&((l=i=Fe)&&(i=Ew(i,t.type,t.pendingProps,Qt),i!==null?(t.stateNode=i,ut=t,Fe=Kt(i.firstChild),Qt=!1,l=!0):l=!1),l||Yn(t)),qt(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,i=u.children,wu(l,u)?i=null:f!==null&&wu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=yl(e,t,qy,null,null,n),gr._currentValue=l),xo(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&Me&&((e=n=Fe)&&(n=Aw(n,t.pendingProps,Qt),n!==null?(t.stateNode=n,ut=t,Fe=null,e=!0):e=!1),e||Yn(t)),null;case 13:return Pd(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Sa(t,null,i,n):ct(e,t,i,n),t.child;case 11:return Ud(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Un(t,t.type,i.value),ct(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,ba(t),l=ht(l),i=i(l),t.flags|=1,ct(e,t,i,n),t.child;case 14:return Fd(e,t,t.type,t.pendingProps,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 19:return ef(e,t,n);case 31:return Xy(e,t,n);case 22:return Gd(e,t,n,t.pendingProps);case 24:return ba(t),i=ht($e),e===null?(l=sl(),l===null&&(l=We,u=rl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:i,cache:l},ul(t),Un(t,$e,l)):((e.lanes&n)!==0&&(hl(e,t),Ki(t,null,null,n),Xi()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Un(t,$e,i)):(i=u.cache,Un(t,$e,i),i!==l.cache&&il(t,[$e],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Mn(e){e.flags|=4}function Vl(e,t,n,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(zf())e.flags|=8192;else throw Ta=lo,ll}else e.flags&=-16777217}function nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wm(t))if(zf())e.flags|=8192;else throw Ta=lo,ll}function Ao(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hh():536870912,e.lanes|=t,ui|=t)}function tr(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zy(e,t,n){var i=t.pendingProps;switch($s(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xn($e),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Za(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tl())),Ve(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(Mn(t),u!==null?(Ve(t),nf(t,u)):(Ve(t),Vl(t,l,null,i,n))):u?u!==e.memoizedState?(Mn(t),Ve(t),nf(t,u)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Mn(t),Ve(t),Vl(t,l,e,i,n)),null;case 27:if(gn(t),n=oe.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}e=P.current,Za(t)?Hc(t):(e=hm(l,i,n),t.stateNode=e,Mn(t))}return Ve(t),null;case 5:if(gn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ve(t),null}if(u=P.current,Za(t))Hc(t);else{var f=Wo(oe.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?f.createElement(l,{is:i.is}):f.createElement(l)}}u[lt]=t,u[bt]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(dt(u,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Mn(t)}}return Ve(t),Vl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=oe.current,Za(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=ut,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$f(e.nodeValue,n)),e||Yn(t,!0)}else e=Wo(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Za(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=tl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Za(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),l=!1}else l=tl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ao(t,t.updateQueue),Ve(t),null);case 4:return Ne(),e===null&&fu(t.stateNode.containerInfo),Ve(t),null;case 10:return xn(t.type),Ve(t),null;case 19:if(q(Je),i=t.memoizedState,i===null)return Ve(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)tr(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=fo(e),u!==null){for(t.flags|=128,tr(i,!1),e=u.updateQueue,t.updateQueue=e,Ao(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Dc(n,e),n=n.sibling;return k(Je,Je.current&1|2),Me&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gt()>Ro&&(t.flags|=128,l=!0,tr(i,!1),t.lanes=4194304)}else{if(!l)if(e=fo(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ao(t,e),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Me)return Ve(t),null}else 2*gt()-i.renderingStartTime>Ro&&n!==536870912&&(t.flags|=128,l=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,n=Je.current,k(Je,l?n&1|2:n&1),Me&&Tn(t,i.treeForkCount),e):(Ve(t),null);case 22:case 23:return Bt(t),ml(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Ao(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&q(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn($e),Ve(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Jy(e,t){switch($s(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn($e),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Je),null;case 4:return Ne(),null;case 10:return xn(t.type),null;case 22:case 23:return Bt(t),ml(),e!==null&&q(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn($e),null;case 25:return null;default:return null}}function af(e,t){switch($s(t),t.tag){case 3:xn($e),Ne();break;case 26:case 27:case 5:gn(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:q(Je);break;case 10:xn(t.type);break;case 22:case 23:Bt(t),ml(),e!==null&&q(va);break;case 24:xn($e)}}function nr(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var u=n.create,f=n.inst;i=u(),f.destroy=i}n=n.next}while(n!==l)}}catch(b){He(t,t.return,b)}}function Kn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var f=i.inst,b=f.destroy;if(b!==void 0){f.destroy=void 0,l=t;var x=n,z=b;try{z()}catch(j){He(l,x,j)}}}i=i.next}while(i!==u)}}catch(j){He(t,t.return,j)}}function rf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xc(t,n)}catch(i){He(e,e.return,i)}}}function of(e,t,n){n.props=Ea(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){He(e,t,i)}}function ar(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){He(e,t,l)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){He(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){He(e,t,l)}else n.current=null}function sf(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){He(e,e.return,l)}}function Gl(e,t,n){try{var i=e.stateNode;bw(i,e.type,n,t),i[bt]=t}catch(l){He(e,e.return,l)}}function lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Ql(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Co(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Co(e,t,n),e=e.sibling;e!==null;)Co(e,t,n),e=e.sibling}function uf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);dt(t,i,n),t[lt]=e,t[bt]=n}catch(u){He(e,e.return,u)}}var zn=!1,nt=!1,Kl=!1,hf=typeof WeakSet=="function"?WeakSet:Set,st=null;function Py(e,t){if(e=e.containerInfo,pu=Xo,e=kc(e),Ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,b=-1,x=-1,z=0,j=0,U=e,D=null;t:for(;;){for(var O;U!==n||l!==0&&U.nodeType!==3||(b=f+l),U!==u||i!==0&&U.nodeType!==3||(x=f+i),U.nodeType===3&&(f+=U.nodeValue.length),(O=U.firstChild)!==null;)D=U,U=O;for(;;){if(U===e)break t;if(D===n&&++z===l&&(b=f),D===u&&++j===i&&(x=f),(O=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=O}n=b===-1||x===-1?null:{start:b,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(yu={focusedElem:e,selectionRange:n},Xo=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var te=Ea(n.type,l);e=i.getSnapshotBeforeUpdate(te,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ue){He(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function cf(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Rn(e,n),i&4&&nr(5,n);break;case 1:if(Rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){He(n,n.return,f)}else{var l=Ea(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){He(n,n.return,f)}}i&64&&rf(n),i&512&&ar(n,n.return);break;case 3:if(Rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xc(e,t)}catch(f){He(n,n.return,f)}}break;case 27:t===null&&i&4&&uf(n);case 26:case 5:Rn(e,n),t===null&&i&4&&sf(n),i&512&&ar(n,n.return);break;case 12:Rn(e,n);break;case 31:Rn(e,n),i&4&&mf(e,n);break;case 13:Rn(e,n),i&4&&gf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sw.bind(null,n),Cw(e,n))));break;case 22:if(i=n.memoizedState!==null||zn,!i){t=t!==null&&t.memoizedState!==null||nt,l=zn;var u=nt;zn=i,(nt=t)&&!u?In(e,n,(n.subtreeFlags&8772)!==0):Rn(e,n),zn=l,nt=u}break;case 30:break;default:Rn(e,n)}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Es(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,kt=!1;function Dn(e,t,n){for(n=n.child;n!==null;)ff(e,t,n),n=n.sibling}function ff(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(pt,n)}catch{}switch(n.tag){case 26:nt||ln(n,t),Dn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||ln(n,t);var i=Qe,l=kt;na(n.type)&&(Qe=n.stateNode,kt=!1),Dn(e,t,n),dr(n.stateNode),Qe=i,kt=l;break;case 5:nt||ln(n,t);case 6:if(i=Qe,l=kt,Qe=null,Dn(e,t,n),Qe=i,kt=l,Qe!==null)if(kt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(u){He(n,t,u)}else try{Qe.removeChild(n.stateNode)}catch(u){He(n,t,u)}break;case 18:Qe!==null&&(kt?(e=Qe,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yi(e)):rm(Qe,n.stateNode));break;case 4:i=Qe,l=kt,Qe=n.stateNode.containerInfo,kt=!0,Dn(e,t,n),Qe=i,kt=l;break;case 0:case 11:case 14:case 15:Kn(2,n,t),nt||Kn(4,n,t),Dn(e,t,n);break;case 1:nt||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&of(n,t,i)),Dn(e,t,n);break;case 21:Dn(e,t,n);break;case 22:nt=(i=nt)||n.memoizedState!==null,Dn(e,t,n),nt=i;break;default:Dn(e,t,n)}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yi(e)}catch(n){He(t,t.return,n)}}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yi(e)}catch(n){He(t,t.return,n)}}function $y(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hf),t;default:throw Error(s(435,e.tag))}}function Mo(e,t){var n=$y(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=lw.bind(null,e,i);i.then(l,l)}})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],u=e,f=t,b=f;e:for(;b!==null;){switch(b.tag){case 27:if(na(b.type)){Qe=b.stateNode,kt=!1;break e}break;case 5:Qe=b.stateNode,kt=!1;break e;case 3:case 4:Qe=b.stateNode.containerInfo,kt=!0;break e}b=b.return}if(Qe===null)throw Error(s(160));ff(u,f,l),Qe=null,kt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)pf(t,e),t=t.sibling}var nn=null;function pf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),St(e),i&4&&(Kn(3,e,e.return),nr(3,e),Kn(5,e,e.return));break;case 1:Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),i&64&&zn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=nn;if(Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Di]||u[lt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),dt(u,i,n),u[lt]=e,ot(u),i=u;break e;case"link":var f=pm("link","href",l).get(i+(n.href||""));if(f){for(var b=0;b<f.length;b++)if(u=f[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(b,1);break t}}u=l.createElement(i),dt(u,i,n),l.head.appendChild(u);break;case"meta":if(f=pm("meta","content",l).get(i+(n.content||""))){for(b=0;b<f.length;b++)if(u=f[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(b,1);break t}}u=l.createElement(i),dt(u,i,n),l.head.appendChild(u);break;default:throw Error(s(468,i))}u[lt]=e,ot(u),i=u}e.stateNode=i}else ym(l,e.type,e.stateNode);else e.stateNode=gm(l,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?ym(l,e.type,e.stateNode):gm(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),n!==null&&i&4&&Gl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),e.flags&32){l=e.stateNode;try{qa(l,"")}catch(te){He(e,e.return,te)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Gl(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Kl=!0);break;case 6:if(Tt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){He(e,e.return,te)}}break;case 3:if(Fo=null,l=nn,nn=Yo(t.containerInfo),Tt(t,e),nn=l,St(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(te){He(e,e.return,te)}Kl&&(Kl=!1,yf(e));break;case 4:i=nn,nn=Yo(e.stateNode.containerInfo),Tt(t,e),St(e),nn=i;break;case 12:Tt(t,e),St(e);break;case 31:Tt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 13:Tt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Do=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 22:l=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,z=zn,j=nt;if(zn=z||l,nt=j||x,Tt(t,e),nt=j,zn=z,St(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||x||zn||nt||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(u=x.stateNode,l)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{b=x.stateNode;var U=x.memoizedProps.style,D=U!=null&&U.hasOwnProperty("display")?U.display:null;b.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(te){He(x,x.return,te)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(te){He(x,x.return,te)}}}else if(t.tag===18){if(n===null){x=t;try{var O=x.stateNode;l?om(O,!0):om(x.stateNode,!1)}catch(te){He(x,x.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Mo(e,n))));break;case 19:Tt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mo(e,i)));break;case 30:break;case 21:break;default:Tt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(lf(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=Ql(e);Co(e,u,l);break;case 5:var f=n.stateNode;n.flags&32&&(qa(f,""),n.flags&=-33);var b=Ql(e);Co(e,b,f);break;case 3:case 4:var x=n.stateNode.containerInfo,z=Ql(e);Xl(e,z,x);break;default:throw Error(s(161))}}catch(j){He(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kn(4,t,t.return),Aa(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&of(t,t.return,n),Aa(t);break;case 27:dr(t.stateNode);case 26:case 5:ln(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function In(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:In(l,u,n),nr(4,u);break;case 1:if(In(l,u,n),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(z){He(i,i.return,z)}if(i=u,l=i.updateQueue,l!==null){var b=i.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Qc(x[l],b)}catch(z){He(i,i.return,z)}}n&&f&64&&rf(u),ar(u,u.return);break;case 27:uf(u);case 26:case 5:In(l,u,n),n&&i===null&&f&4&&sf(u),ar(u,u.return);break;case 12:In(l,u,n);break;case 31:In(l,u,n),n&&f&4&&mf(l,u);break;case 13:In(l,u,n),n&&f&4&&gf(l,u);break;case 22:u.memoizedState===null&&In(l,u,n),ar(u,u.return);break;case 30:break;default:In(l,u,n)}t=t.sibling}}function Zl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ui(n))}function Jl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e))}function an(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(e,t,n,i),t=t.sibling}function wf(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,i),l&2048&&nr(9,t);break;case 1:an(e,t,n,i);break;case 3:an(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ui(e)));break;case 12:if(l&2048){an(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,b=u.onPostCommit;typeof b=="function"&&b(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){He(t,t.return,x)}}else an(e,t,n,i);break;case 31:an(e,t,n,i);break;case 13:an(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?an(e,t,n,i):ir(e,t):u._visibility&2?an(e,t,n,i):(u._visibility|=2,oi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Zl(f,t);break;case 24:an(e,t,n,i),l&2048&&Jl(t.alternate,t);break;default:an(e,t,n,i)}}function oi(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,b=n,x=i,z=f.flags;switch(f.tag){case 0:case 11:case 15:oi(u,f,b,x,l),nr(8,f);break;case 23:break;case 22:var j=f.stateNode;f.memoizedState!==null?j._visibility&2?oi(u,f,b,x,l):ir(u,f):(j._visibility|=2,oi(u,f,b,x,l)),l&&z&2048&&Zl(f.alternate,f);break;case 24:oi(u,f,b,x,l),l&&z&2048&&Jl(f.alternate,f);break;default:oi(u,f,b,x,l)}t=t.sibling}}function ir(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:ir(n,i),l&2048&&Zl(i.alternate,i);break;case 24:ir(n,i),l&2048&&Jl(i.alternate,i);break;default:ir(n,i)}t=t.sibling}}var rr=8192;function si(e,t,n){if(e.subtreeFlags&rr)for(e=e.child;e!==null;)bf(e,t,n),e=e.sibling}function bf(e,t,n){switch(e.tag){case 26:si(e,t,n),e.flags&rr&&e.memoizedState!==null&&_w(n,nn,e.memoizedState,e.memoizedProps);break;case 5:si(e,t,n);break;case 3:case 4:var i=nn;nn=Yo(e.stateNode.containerInfo),si(e,t,n),nn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rr,rr=16777216,si(e,t,n),rr=i):si(e,t,n));break;default:si(e,t,n)}}function vf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function or(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,Tf(i,e)}vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kf(e),e=e.sibling}function kf(e){switch(e.tag){case 0:case 11:case 15:or(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:or(e);break;case 12:or(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zo(e)):or(e);break;default:or(e)}}function zo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,Tf(i,e)}vf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kn(8,t,t.return),zo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zo(t));break;default:zo(t)}e=e.sibling}}function Tf(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ui(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,st=i;else e:for(n=e;st!==null;){i=st;var l=i.sibling,u=i.return;if(df(i),i===n){st=null;break e}if(l!==null){l.return=u,st=l;break e}st=u}}}var ew={getCacheForType:function(e){var t=ht($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht($e).controller.signal}},tw=typeof WeakMap=="function"?WeakMap:Map,Re=0,We=null,Se=null,Ae=0,Oe=0,Ot=null,Zn=!1,li=!1,Pl=!1,Bn=0,Ze=0,Jn=0,Ca=0,$l=0,Ht=0,ui=0,sr=null,xt=null,eu=!1,Do=0,Sf=0,Ro=1/0,Io=null,Pn=null,rt=0,$n=null,hi=null,On=0,tu=0,nu=null,xf=null,lr=0,au=null;function Nt(){return(Re&2)!==0&&Ae!==0?Ae&-Ae:R.T!==null?uu():_h()}function Ef(){if(Ht===0)if((Ae&536870912)===0||Me){var e=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),Ht=e}else Ht=536870912;return e=It.current,e!==null&&(e.flags|=32),Ht}function Et(e,t,n){(e===We&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(ci(e,0),ea(e,Ae,Ht,!1)),zi(e,n),((Re&2)===0||e!==We)&&(e===We&&((Re&2)===0&&(Ca|=n),Ze===4&&ea(e,Ae,Ht,!1)),un(e))}function Af(e,t,n){if((Re&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mi(e,t),l=i?iw(e,t):ru(e,t,!0),u=i;do{if(l===0){li&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!nw(n)){l=ru(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var b=e;l=sr;var x=b.current.memoizedState.isDehydrated;if(x&&(ci(b,f).flags|=256),f=ru(b,f,!1),f!==2){if(Pl&&!x){b.errorRecoveryDisabledLanes|=u,Ca|=u,l=4;break e}u=xt,xt=l,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}l=f}if(u=!1,l!==2)continue}}if(l===1){ci(e,0),ea(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,Ht,!Zn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Do+300-gt(),10<l)){if(ea(i,t,Ht,!Zn),Wr(i,0,!0)!==0)break e;On=t,i.timeoutHandle=am(Cf.bind(null,i,n,xt,Io,eu,t,Ht,Ca,ui,Zn,u,"Throttled",-0,0),l);break e}Cf(i,n,xt,Io,eu,t,Ht,Ca,ui,Zn,u,null,-0,0)}}break}while(!0);un(e)}function Cf(e,t,n,i,l,u,f,b,x,z,j,U,D,O){if(e.timeoutHandle=-1,U=t.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},bf(t,u,U);var te=(u&62914560)===u?Do-gt():(u&4194048)===u?Sf-gt():0;if(te=qw(U,te),te!==null){On=u,e.cancelPendingCommit=te(Hf.bind(null,e,t,u,n,i,l,f,b,x,j,U,null,D,O)),ea(e,u,f,!z);return}}Hf(e,t,u,n,i,l,f,b,x)}function nw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!Dt(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t&=~$l,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-qe(l),f=1<<u;i[u]=-1,l&=~f}n!==0&&Nh(e,n,t)}function Bo(){return(Re&6)===0?(ur(0),!1):!0}function iu(){if(Se!==null){if(Oe===0)var e=Se.return;else e=Se,Sn=wa=null,vl(e),ti=null,Vi=0,e=Se;for(;e!==null;)af(e.alternate,e),e=e.return;Se=null}}function ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Tw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),On=0,iu(),We=e,Se=n=kn(e.current,null),Ae=t,Oe=0,Ot=null,Zn=!1,li=Mi(e,t),Pl=!1,ui=Ht=$l=Ca=Jn=Ze=0,xt=sr=null,eu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-qe(i),u=1<<l;t|=e[l],i&=~u}return Bn=t,$r(),n}function Mf(e,t){pe=null,R.H=$i,t===ei||t===so?(t=Uc(),Oe=3):t===ll?(t=Uc(),Oe=4):Oe=t===Nl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,Se===null&&(Ze=1,To(e,Ft(t,e.current)))}function zf(){var e=It.current;return e===null?!0:(Ae&4194048)===Ae?Xt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Xt:!1}function Df(){var e=R.H;return R.H=$i,e===null?$i:e}function Rf(){var e=R.A;return R.A=ew,e}function Oo(){Ze=4,Zn||(Ae&4194048)!==Ae&&It.current!==null||(li=!0),(Jn&134217727)===0&&(Ca&134217727)===0||We===null||ea(We,Ae,Ht,!1)}function ru(e,t,n){var i=Re;Re|=2;var l=Df(),u=Rf();(We!==e||Ae!==t)&&(Io=null,ci(e,t)),t=!1;var f=Ze;e:do try{if(Oe!==0&&Se!==null){var b=Se,x=Ot;switch(Oe){case 8:iu(),f=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(t=!0);var z=Oe;if(Oe=0,Ot=null,di(e,b,x,z),n&&li){f=0;break e}break;default:z=Oe,Oe=0,Ot=null,di(e,b,x,z)}}aw(),f=Ze;break}catch(j){Mf(e,j)}while(!0);return t&&e.shellSuspendCounter++,Sn=wa=null,Re=i,R.H=l,R.A=u,Se===null&&(We=null,Ae=0,$r()),f}function aw(){for(;Se!==null;)If(Se)}function iw(e,t){var n=Re;Re|=2;var i=Df(),l=Rf();We!==e||Ae!==t?(Io=null,Ro=gt()+500,ci(e,t)):li=Mi(e,t);e:do try{if(Oe!==0&&Se!==null){t=Se;var u=Ot;t:switch(Oe){case 1:Oe=0,Ot=null,di(e,t,u,1);break;case 2:case 9:if(Wc(u)){Oe=0,Ot=null,Bf(t);break}t=function(){Oe!==2&&Oe!==9||We!==e||(Oe=7),un(e)},u.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:Wc(u)?(Oe=0,Ot=null,Bf(t)):(Oe=0,Ot=null,di(e,t,u,7));break;case 5:var f=null;switch(Se.tag){case 26:f=Se.memoizedState;case 5:case 27:var b=Se;if(f?wm(f):b.stateNode.complete){Oe=0,Ot=null;var x=b.sibling;if(x!==null)Se=x;else{var z=b.return;z!==null?(Se=z,Ho(z)):Se=null}break t}}Oe=0,Ot=null,di(e,t,u,5);break;case 6:Oe=0,Ot=null,di(e,t,u,6);break;case 8:iu(),Ze=6;break e;default:throw Error(s(462))}}rw();break}catch(j){Mf(e,j)}while(!0);return Sn=wa=null,R.H=i,R.A=l,Re=n,Se!==null?0:(We=null,Ae=0,$r(),Ze)}function rw(){for(;Se!==null&&!ws();)If(Se)}function If(e){var t=tf(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Ho(e):Se=t}function Bf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kd(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Kd(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:vl(t);default:af(n,t),t=Se=Dc(t,Bn),t=tf(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Se=t}function di(e,t,n,i){Sn=wa=null,vl(t),ti=null,Vi=0;var l=t.return;try{if(Qy(e,l,t,n,Ae)){Ze=1,To(e,Ft(n,e.current)),Se=null;return}}catch(u){if(l!==null)throw Se=l,u;Ze=1,To(e,Ft(n,e.current)),Se=null;return}t.flags&32768?(Me||i===1?e=!0:li||(Ae&536870912)!==0?e=!1:(Zn=e=!0,(i===2||i===9||i===3||i===6)&&(i=It.current,i!==null&&i.tag===13&&(i.flags|=16384))),Of(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){Of(t,Zn);return}e=t.return;var n=Zy(t.alternate,t,Bn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ze===0&&(Ze=5)}function Of(e,t){do{var n=Jy(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Ze=6,Se=null}function Hf(e,t,n,i,l,u,f,b,x){e.cancelPendingCommit=null;do No();while(rt!==0);if((Re&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Qs,Lp(e,n,u,f,b,x),e===We&&(Se=We=null,Ae=0),hi=t,$n=e,On=n,tu=u,nu=l,xf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uw(de,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null,l=V.p,V.p=2,f=Re,Re|=4;try{Py(e,t,n)}finally{Re=f,V.p=l,R.T=i}}rt=1,Nf(),jf(),Lf()}}function Nf(){if(rt===1){rt=0;var e=$n,t=hi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var i=V.p;V.p=2;var l=Re;Re|=4;try{pf(t,e);var u=yu,f=kc(e.containerInfo),b=u.focusedElem,x=u.selectionRange;if(f!==b&&b&&b.ownerDocument&&vc(b.ownerDocument.documentElement,b)){if(x!==null&&Ys(b)){var z=x.start,j=x.end;if(j===void 0&&(j=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(j,b.value.length);else{var U=b.ownerDocument||document,D=U&&U.defaultView||window;if(D.getSelection){var O=D.getSelection(),te=b.textContent.length,ue=Math.min(x.start,te),_e=x.end===void 0?ue:Math.min(x.end,te);!O.extend&&ue>_e&&(f=_e,_e=ue,ue=f);var C=bc(b,ue),A=bc(b,_e);if(C&&A&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==A.node||O.focusOffset!==A.offset)){var M=U.createRange();M.setStart(C.node,C.offset),O.removeAllRanges(),ue>_e?(O.addRange(M),O.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),O.addRange(M))}}}}for(U=[],O=b;O=O.parentNode;)O.nodeType===1&&U.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<U.length;b++){var Y=U[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Xo=!!pu,yu=pu=null}finally{Re=l,V.p=i,R.T=n}}e.current=t,rt=2}}function jf(){if(rt===2){rt=0;var e=$n,t=hi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var i=V.p;V.p=2;var l=Re;Re|=4;try{cf(e,t.alternate,t)}finally{Re=l,V.p=i,R.T=n}}rt=3}}function Lf(){if(rt===4||rt===3){rt=0,bs();var e=$n,t=hi,n=On,i=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?rt=5:(rt=0,hi=$n=null,_f(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pn=null),Ss(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=R.T,l=V.p,V.p=2,R.T=null;try{for(var u=e.onRecoverableError,f=0;f<i.length;f++){var b=i[f];u(b.value,{componentStack:b.stack})}}finally{R.T=t,V.p=l}}(On&3)!==0&&No(),un(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===au?lr++:(lr=0,au=e):lr=0,ur(0)}}function _f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ui(t)))}function No(){return Nf(),jf(),Lf(),qf()}function qf(){if(rt!==5)return!1;var e=$n,t=tu;tu=0;var n=Ss(On),i=R.T,l=V.p;try{V.p=32>n?32:n,R.T=null,n=nu,nu=null;var u=$n,f=On;if(rt=0,hi=$n=null,On=0,(Re&6)!==0)throw Error(s(331));var b=Re;if(Re|=4,kf(u.current),wf(u,u.current,f,n),Re=b,ur(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(pt,u)}catch{}return!0}finally{V.p=l,R.T=i,_f(e,t)}}function Wf(e,t,n){t=Ft(n,t),t=Hl(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(zi(e,2),un(e))}function He(e,t,n){if(e.tag===3)Wf(e,e,n);else for(;t!==null;){if(t.tag===3){Wf(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){e=Ft(n,e),n=Wd(2),i=Gn(t,n,2),i!==null&&(Yd(n,i,t,e),zi(i,2),un(i));break}}t=t.return}}function ou(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tw;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||(Pl=!0,l.add(n),e=ow.bind(null,e,t,n),t.then(e,e))}function ow(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,We===e&&(Ae&n)===n&&(Ze===4||Ze===3&&(Ae&62914560)===Ae&&300>gt()-Do?(Re&2)===0&&ci(e,0):$l|=n,ui===Ae&&(ui=0)),un(e)}function Yf(e,t){t===0&&(t=Hh()),e=ga(e,t),e!==null&&(zi(e,t),un(e))}function sw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yf(e,n)}function lw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Yf(e,n)}function uw(e,t){return Ba(e,t)}var jo=null,fi=null,su=!1,Lo=!1,lu=!1,ta=0;function un(e){e!==fi&&e.next===null&&(fi===null?jo=fi=e:fi=fi.next=e),Lo=!0,su||(su=!0,cw())}function ur(e,t){if(!lu&&Lo){lu=!0;do for(var n=!1,i=jo;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var f=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-qe(42|e)+1)-1,u&=l&~(f&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Gf(i,u))}else u=Ae,u=Wr(i,i===We?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Mi(i,u)||(n=!0,Gf(i,u));i=i.next}while(n);lu=!1}}function hw(){Uf()}function Uf(){Lo=su=!1;var e=0;ta!==0&&kw()&&(e=ta);for(var t=gt(),n=null,i=jo;i!==null;){var l=i.next,u=Ff(i,t);u===0?(i.next=null,n===null?jo=l:n.next=l,l===null&&(fi=n)):(n=i,(e!==0||(u&3)!==0)&&(Lo=!0)),i=l}rt!==0&&rt!==5||ur(e),ta!==0&&(ta=0)}function Ff(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-qe(u),b=1<<f,x=l[f];x===-1?((b&n)===0||(b&i)!==0)&&(l[f]=jp(b,t)):x<=t&&(e.expiredLanes|=b),u&=~b}if(t=We,n=Ae,n=Wr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ci(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ci(i),Ss(n)){case 2:case 8:n=K;break;case 32:n=de;break;case 268435456:n=Be;break;default:n=de}return i=Vf.bind(null,e),n=Ba(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ci(i),e.callbackPriority=2,e.callbackNode=null,2}function Vf(e,t){if(rt!==0&&rt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(No()&&e.callbackNode!==n)return null;var i=Ae;return i=Wr(e,e===We?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Af(e,i,t),Ff(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Vf.bind(null,e):null)}function Gf(e,t){if(No())return null;Af(e,t,!0)}function cw(){Sw(function(){(Re&6)!==0?Ba(W,hw):Uf()})}function uu(){if(ta===0){var e=Pa;e===0&&(e=Lr,Lr<<=1,(Lr&261888)===0&&(Lr=256)),ta=e}return ta}function Qf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vr(""+e)}function Xf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dw(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var u=Qf((l[bt]||null).action),f=i.submitter;f&&(t=(t=f[bt]||null)?Qf(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var b=new Kr("action","action",null,i,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var x=f?Xf(l,f):new FormData(l);zl(n,{pending:!0,data:x,method:l.method,action:u},null,x)}}else typeof u=="function"&&(b.preventDefault(),x=f?Xf(l,f):new FormData(l),zl(n,{pending:!0,data:x,method:l.method,action:u},u,x))},currentTarget:l}]})}}for(var hu=0;hu<Gs.length;hu++){var cu=Gs[hu],fw=cu.toLowerCase(),mw=cu[0].toUpperCase()+cu.slice(1);tn(fw,"on"+mw)}tn(xc,"onAnimationEnd"),tn(Ec,"onAnimationIteration"),tn(Ac,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Dy,"onTransitionRun"),tn(Ry,"onTransitionStart"),tn(Iy,"onTransitionCancel"),tn(Cc,"onTransitionEnd"),La("onMouseEnter",["mouseout","mouseover"]),La("onMouseLeave",["mouseout","mouseover"]),La("onPointerEnter",["pointerout","pointerover"]),La("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hr));function Kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var b=i[f],x=b.instance,z=b.currentTarget;if(b=b.listener,x!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=z;try{u(l)}catch(j){Pr(j)}l.currentTarget=null,u=x}else for(f=0;f<i.length;f++){if(b=i[f],x=b.instance,z=b.currentTarget,b=b.listener,x!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=z;try{u(l)}catch(j){Pr(j)}l.currentTarget=null,u=x}}}}function xe(e,t){var n=t[xs];n===void 0&&(n=t[xs]=new Set);var i=e+"__bubble";n.has(i)||(Zf(t,e,2,!1),n.add(i))}function du(e,t,n){var i=0;t&&(i|=4),Zf(n,e,i,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function fu(e){if(!e[_o]){e[_o]=!0,Yh.forEach(function(n){n!=="selectionchange"&&(gw.has(n)||du(n,!1,e),du(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,du("selectionchange",!1,t))}}function Zf(e,t,n,i){switch(Em(t)){case 2:var l=Uw;break;case 8:l=Fw;break;default:l=Mu}n=l.bind(null,t,n,e),l=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function mu(e,t,n,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var b=i.stateNode.containerInfo;if(b===l)break;if(f===4)for(f=i.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;b!==null;){if(f=Ha(b),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){i=u=f;continue e}b=b.parentNode}}i=i.return}ec(function(){var z=u,j=Rs(n),U=[];e:{var D=Mc.get(e);if(D!==void 0){var O=Kr,te=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":O=ly;break;case"focusin":te="focus",O=js;break;case"focusout":te="blur",O=js;break;case"beforeblur":case"afterblur":O=js;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=cy;break;case xc:case Ec:case Ac:O=$p;break;case Cc:O=fy;break;case"scroll":case"scrollend":O=Xp;break;case"wheel":O=gy;break;case"copy":case"cut":case"paste":O=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=rc;break;case"toggle":case"beforetoggle":O=yy}var ue=(t&4)!==0,_e=!ue&&(e==="scroll"||e==="scrollend"),C=ue?D!==null?D+"Capture":null:D;ue=[];for(var A=z,M;A!==null;){var Y=A;if(M=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||M===null||C===null||(Y=Ii(A,C),Y!=null&&ue.push(cr(A,Y,M))),_e)break;A=A.return}0<ue.length&&(D=new O(D,te,null,n,j),U.push({event:D,listeners:ue}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",D&&n!==Ds&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Oa]))break e;if((O||D)&&(D=j.window===j?j:(D=j.ownerDocument)?D.defaultView||D.parentWindow:window,O?(te=n.relatedTarget||n.toElement,O=z,te=te?Ha(te):null,te!==null&&(_e=c(te),ue=te.tag,te!==_e||ue!==5&&ue!==27&&ue!==6)&&(te=null)):(O=null,te=z),O!==te)){if(ue=ac,Y="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ue=rc,Y="onPointerLeave",C="onPointerEnter",A="pointer"),_e=O==null?D:Ri(O),M=te==null?D:Ri(te),D=new ue(Y,A+"leave",O,n,j),D.target=_e,D.relatedTarget=M,Y=null,Ha(j)===z&&(ue=new ue(C,A+"enter",te,n,j),ue.target=M,ue.relatedTarget=_e,Y=ue),_e=Y,O&&te)t:{for(ue=pw,C=O,A=te,M=0,Y=C;Y;Y=ue(Y))M++;Y=0;for(var se=A;se;se=ue(se))Y++;for(;0<M-Y;)C=ue(C),M--;for(;0<Y-M;)A=ue(A),Y--;for(;M--;){if(C===A||A!==null&&C===A.alternate){ue=C;break t}C=ue(C),A=ue(A)}ue=null}else ue=null;O!==null&&Jf(U,D,O,ue,!1),te!==null&&_e!==null&&Jf(U,_e,te,ue,!0)}}e:{if(D=z?Ri(z):window,O=D.nodeName&&D.nodeName.toLowerCase(),O==="select"||O==="input"&&D.type==="file")var ze=fc;else if(cc(D))if(mc)ze=Cy;else{ze=Ey;var ae=xy}else O=D.nodeName,!O||O.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&zs(z.elementType)&&(ze=fc):ze=Ay;if(ze&&(ze=ze(e,z))){dc(U,ze,n,j);break e}ae&&ae(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&Ms(D,"number",D.value)}switch(ae=z?Ri(z):window,e){case"focusin":(cc(ae)||ae.contentEditable==="true")&&(Fa=ae,Us=z,qi=null);break;case"focusout":qi=Us=Fa=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,Tc(U,n,j);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":Tc(U,n,j)}var ye;if(_s)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Ua?uc(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(oc&&n.locale!=="ko"&&(Ua||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ua&&(ye=tc()):(_n=j,Os="value"in _n?_n.value:_n.textContent,Ua=!0)),ae=qo(z,Ce),0<ae.length&&(Ce=new ic(Ce,e,null,n,j),U.push({event:Ce,listeners:ae}),ye?Ce.data=ye:(ye=hc(n),ye!==null&&(Ce.data=ye)))),(ye=by?vy(e,n):ky(e,n))&&(Ce=qo(z,"onBeforeInput"),0<Ce.length&&(ae=new ic("onBeforeInput","beforeinput",null,n,j),U.push({event:ae,listeners:Ce}),ae.data=ye)),dw(U,e,z,n,j)}Kf(U,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Ii(e,n),l!=null&&i.unshift(cr(e,l,u)),l=Ii(e,t),l!=null&&i.push(cr(e,l,u))),e.tag===3)return i;e=e.return}return[]}function pw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jf(e,t,n,i,l){for(var u=t._reactName,f=[];n!==null&&n!==i;){var b=n,x=b.alternate,z=b.stateNode;if(b=b.tag,x!==null&&x===i)break;b!==5&&b!==26&&b!==27||z===null||(x=z,l?(z=Ii(n,u),z!=null&&f.unshift(cr(n,z,x))):l||(z=Ii(n,u),z!=null&&f.push(cr(n,z,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var yw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function Pf(e){return(typeof e=="string"?e:""+e).replace(yw,`
`).replace(ww,"")}function $f(e,t){return t=Pf(t),Pf(e)===t}function Le(e,t,n,i,l,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&qa(e,""+i);break;case"className":Ur(e,"class",i);break;case"tabIndex":Ur(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ur(e,n,i);break;case"style":Ph(e,i,u);break;case"data":if(t!=="object"){Ur(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Vr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Le(e,t,"name",l.name,l,null),Le(e,t,"formEncType",l.formEncType,l,null),Le(e,t,"formMethod",l.formMethod,l,null),Le(e,t,"formTarget",l.formTarget,l,null)):(Le(e,t,"encType",l.encType,l,null),Le(e,t,"method",l.method,l,null),Le(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Vr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Vr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Yr(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gp.get(n)||n,Yr(e,n,i))}}function gu(e,t,n,i,l,u){switch(n){case"style":Ph(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?qa(e,i):(typeof i=="number"||typeof i=="bigint")&&qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Uh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[bt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Yr(e,n,i)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Le(e,t,u,f,n,null)}}l&&Le(e,t,"srcSet",n.srcSet,n,null),i&&Le(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var b=u=f=l=null,x=null,z=null;for(i in n)if(n.hasOwnProperty(i)){var j=n[i];if(j!=null)switch(i){case"name":l=j;break;case"type":f=j;break;case"checked":x=j;break;case"defaultChecked":z=j;break;case"value":u=j;break;case"defaultValue":b=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:Le(e,t,i,j,n,null)}}Xh(e,u,b,x,z,f,l,!1);return;case"select":xe("invalid",e),i=f=u=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":f=b;break;case"multiple":i=b;default:Le(e,t,l,b,n,null)}t=u,n=f,e.multiple=!!i,t!=null?_a(e,!!i,t,!1):n!=null&&_a(e,!!i,n,!0);return;case"textarea":xe("invalid",e),u=l=i=null;for(f in n)if(n.hasOwnProperty(f)&&(b=n[f],b!=null))switch(f){case"value":i=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Le(e,t,f,b,n,null)}Zh(e,i,l,u);return;case"option":for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null)&&(x==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Le(e,t,x,i,n,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<hr.length;i++)xe(hr[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Le(e,t,z,i,n,null)}return;default:if(zs(t)){for(j in n)n.hasOwnProperty(j)&&(i=n[j],i!==void 0&&gu(e,t,j,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&Le(e,t,b,i,n,null))}function bw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,f=null,b=null,x=null,z=null,j=null;for(O in n){var U=n[O];if(n.hasOwnProperty(O)&&U!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":x=U;default:i.hasOwnProperty(O)||Le(e,t,O,null,i,U)}}for(var D in i){var O=i[D];if(U=n[D],i.hasOwnProperty(D)&&(O!=null||U!=null))switch(D){case"type":u=O;break;case"name":l=O;break;case"checked":z=O;break;case"defaultChecked":j=O;break;case"value":f=O;break;case"defaultValue":b=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:O!==U&&Le(e,t,D,O,i,U)}}Cs(e,f,b,x,z,j,u,l);return;case"select":O=f=b=D=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":O=x;default:i.hasOwnProperty(u)||Le(e,t,u,null,i,x)}for(l in i)if(u=i[l],x=n[l],i.hasOwnProperty(l)&&(u!=null||x!=null))switch(l){case"value":D=u;break;case"defaultValue":b=u;break;case"multiple":f=u;default:u!==x&&Le(e,t,l,u,i,x)}t=b,n=f,i=O,D!=null?_a(e,!!n,D,!1):!!i!=!!n&&(t!=null?_a(e,!!n,t,!0):_a(e,!!n,n?[]:"",!1));return;case"textarea":O=D=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Le(e,t,b,null,i,l)}for(f in i)if(l=i[f],u=n[f],i.hasOwnProperty(f)&&(l!=null||u!=null))switch(f){case"value":D=l;break;case"defaultValue":O=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Le(e,t,f,l,i,u)}Kh(e,D,O);return;case"option":for(var te in n)D=n[te],n.hasOwnProperty(te)&&D!=null&&!i.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:Le(e,t,te,null,i,D));for(x in i)D=i[x],O=n[x],i.hasOwnProperty(x)&&D!==O&&(D!=null||O!=null)&&(x==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Le(e,t,x,D,i,O));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)D=n[ue],n.hasOwnProperty(ue)&&D!=null&&!i.hasOwnProperty(ue)&&Le(e,t,ue,null,i,D);for(z in i)if(D=i[z],O=n[z],i.hasOwnProperty(z)&&D!==O&&(D!=null||O!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,t));break;default:Le(e,t,z,D,i,O)}return;default:if(zs(t)){for(var _e in n)D=n[_e],n.hasOwnProperty(_e)&&D!==void 0&&!i.hasOwnProperty(_e)&&gu(e,t,_e,void 0,i,D);for(j in i)D=i[j],O=n[j],!i.hasOwnProperty(j)||D===O||D===void 0&&O===void 0||gu(e,t,j,D,i,O);return}}for(var C in n)D=n[C],n.hasOwnProperty(C)&&D!=null&&!i.hasOwnProperty(C)&&Le(e,t,C,null,i,D);for(U in i)D=i[U],O=n[U],!i.hasOwnProperty(U)||D===O||D==null&&O==null||Le(e,t,U,D,i,O)}function em(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],u=l.transferSize,f=l.initiatorType,b=l.duration;if(u&&b&&em(f)){for(f=0,b=l.responseEnd,i+=1;i<n.length;i++){var x=n[i],z=x.startTime;if(z>b)break;var j=x.transferSize,U=x.initiatorType;j&&em(U)&&(x=x.responseEnd,f+=j*(x<b?1:(b-z)/(x-z)))}if(--i,t+=8*(u+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pu=null,yu=null;function Wo(e){return e.nodeType===9?e:e.ownerDocument}function tm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=null;function kw(){var e=window.event;return e&&e.type==="popstate"?e===bu?!1:(bu=e,!0):(bu=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(xw)}:am;function xw(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function rm(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),yi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dr(n);for(var u=n.firstChild;u;){var f=u.nextSibling,b=u.nodeName;u[Di]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=f}}else n==="body"&&dr(e.ownerDocument.body);n=l}while(n);yi(t)}function om(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function vu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vu(n),Es(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ew(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function Aw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function ku(e){return e.data==="$?"||e.data==="$~"}function Tu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Su=null;function lm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hm(e,t,n){switch(t=Wo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Es(e)}var Zt=new Map,cm=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hn=V.d;V.d={f:Mw,r:zw,D:Dw,C:Rw,L:Iw,m:Bw,X:Hw,S:Ow,M:Nw};function Mw(){var e=Hn.f(),t=Bo();return e||t}function zw(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):Hn.r(e)}var mi=typeof document>"u"?null:document;function dm(e,t,n){var i=mi;if(i&&typeof t=="string"&&t){var l=Yt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),cm.has(l)||(cm.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),dt(t,"link",e),ot(t),i.head.appendChild(t)))}}function Dw(e){Hn.D(e),dm("dns-prefetch",e,null)}function Rw(e,t){Hn.C(e,t),dm("preconnect",e,t)}function Iw(e,t,n){Hn.L(e,t,n);var i=mi;if(i&&e&&t){var l='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Yt(n.imageSizes)+'"]')):l+='[href="'+Yt(e)+'"]';var u=l;switch(t){case"style":u=gi(e);break;case"script":u=pi(e)}Zt.has(u)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zt.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(fr(u))||t==="script"&&i.querySelector(mr(u))||(t=i.createElement("link"),dt(t,"link",e),ot(t),i.head.appendChild(t)))}}function Bw(e,t){Hn.m(e,t);var n=mi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=pi(e)}if(!Zt.has(u)&&(e=w({rel:"modulepreload",href:e},t),Zt.set(u,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mr(u)))return}i=n.createElement("link"),dt(i,"link",e),ot(i),n.head.appendChild(i)}}}function Ow(e,t,n){Hn.S(e,t,n);var i=mi;if(i&&e){var l=ja(i).hoistableStyles,u=gi(e);t=t||"default";var f=l.get(u);if(!f){var b={loading:0,preload:null};if(f=i.querySelector(fr(u)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zt.get(u))&&xu(e,n);var x=f=i.createElement("link");ot(x),dt(x,"link",e),x._p=new Promise(function(z,j){x.onload=z,x.onerror=j}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Uo(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:b},l.set(u,f)}}}function Hw(e,t){Hn.X(e,t);var n=mi;if(n&&e){var i=ja(n).hoistableScripts,l=pi(e),u=i.get(l);u||(u=n.querySelector(mr(l)),u||(e=w({src:e,async:!0},t),(t=Zt.get(l))&&Eu(e,t),u=n.createElement("script"),ot(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Nw(e,t){Hn.M(e,t);var n=mi;if(n&&e){var i=ja(n).hoistableScripts,l=pi(e),u=i.get(l);u||(u=n.querySelector(mr(l)),u||(e=w({src:e,async:!0,type:"module"},t),(t=Zt.get(l))&&Eu(e,t),u=n.createElement("script"),ot(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function fm(e,t,n,i){var l=(l=oe.current)?Yo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=gi(n.href),n=ja(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=gi(n.href);var u=ja(l).hoistableStyles,f=u.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=l.querySelector(fr(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zt.set(e,n),u||jw(l,e,n,f.state))),t&&i===null)throw Error(s(528,""));return f}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=pi(n),n=ja(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gi(e){return'href="'+Yt(e)+'"'}function fr(e){return'link[rel="stylesheet"]['+e+"]"}function mm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function jw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),dt(t,"link",n),ot(t),e.head.appendChild(t))}function pi(e){return'[src="'+Yt(e)+'"]'}function mr(e){return"script[async]"+e}function gm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(i)return t.instance=i,ot(i),i;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ot(i),dt(i,"style",l),Uo(i,n.precedence,e),t.instance=i;case"stylesheet":l=gi(n.href);var u=e.querySelector(fr(l));if(u)return t.state.loading|=4,t.instance=u,ot(u),u;i=mm(n),(l=Zt.get(l))&&xu(i,l),u=(e.ownerDocument||e).createElement("link"),ot(u);var f=u;return f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),t.state.loading|=4,Uo(u,n.precedence,e),t.instance=u;case"script":return u=pi(n.src),(l=e.querySelector(mr(u)))?(t.instance=l,ot(l),l):(i=n,(l=Zt.get(u))&&(i=w({},n),Eu(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),ot(l),dt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Uo(i,n.precedence,e));return t.instance}function Uo(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,f=0;f<i.length;f++){var b=i[f];if(b.dataset.precedence===t)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fo=null;function pm(e,t,n){if(Fo===null){var i=new Map,l=Fo=new Map;l.set(n,i)}else l=Fo,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[Di]||u[lt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var b=i.get(f);b?b.push(u):i.set(f,[u])}}return i}function ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Lw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _w(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=gi(i.href),u=t.querySelector(fr(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,ot(u);return}u=t.ownerDocument||t,i=mm(i),(l=Zt.get(l))&&xu(i,l),u=u.createElement("link"),ot(u);var f=u;f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Au=0;function qw(e,t){return e.stylesheets&&e.count===0&&Qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Au===0&&(Au=62500*vw());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Au?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Go=null;function Qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Go=new Map,t.forEach(Ww,e),Go=null,Vo.call(e))}function Ww(e,t){if(!(t.state.loading&4)){var n=Go.get(e);if(n)var i=n.get(null);else{n=new Map,Go.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var f=l[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}l=t.instance,f=l.getAttribute("data-precedence"),u=n.get(f)||i,u===i&&n.set(null,l),n.set(f,l),this.count++,i=Vo.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gr={$$typeof:F,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Yw(e,t,n,i,l,u,f,b,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ks(0),this.hiddenUpdates=ks(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function bm(e,t,n,i,l,u,f,b,x,z,j,U){return e=new Yw(e,t,n,f,x,z,j,U,b),t=1,u===!0&&(t|=24),u=Rt(3,null,null,t),e.current=u,u.stateNode=e,t=rl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},ul(u),e}function vm(e){return e?(e=Qa,e):Qa}function km(e,t,n,i,l,u){l=vm(l),i.context===null?i.context=l:i.pendingContext=l,i=Vn(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Gn(e,i,t),n!==null&&(Et(n,e,t),Qi(n,e,t))}function Tm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){Tm(e,t),(e=e.alternate)&&Tm(e,t)}function Sm(e){if(e.tag===13||e.tag===31){var t=ga(e,67108864);t!==null&&Et(t,e,67108864),Cu(e,67108864)}}function xm(e){if(e.tag===13||e.tag===31){var t=Nt();t=Ts(t);var n=ga(e,t);n!==null&&Et(n,e,t),Cu(e,t)}}var Xo=!0;function Uw(e,t,n,i){var l=R.T;R.T=null;var u=V.p;try{V.p=2,Mu(e,t,n,i)}finally{V.p=u,R.T=l}}function Fw(e,t,n,i){var l=R.T;R.T=null;var u=V.p;try{V.p=8,Mu(e,t,n,i)}finally{V.p=u,R.T=l}}function Mu(e,t,n,i){if(Xo){var l=zu(i);if(l===null)mu(e,t,i,Ko,n),Am(e,i);else if(Gw(l,e,t,n,i))i.stopPropagation();else if(Am(e,i),t&4&&-1<Vw.indexOf(e)){for(;l!==null;){var u=Na(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=ha(u.pendingLanes);if(f!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;f;){var x=1<<31-qe(f);b.entanglements[1]|=x,f&=~x}un(u),(Re&6)===0&&(Ro=gt()+500,ur(0))}}break;case 31:case 13:b=ga(u,2),b!==null&&Et(b,u,2),Bo(),Cu(u,2)}if(u=zu(i),u===null&&mu(e,t,i,Ko,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else mu(e,t,i,null,n)}}function zu(e){return e=Rs(e),Du(e)}var Ko=null;function Du(e){if(Ko=null,e=Ha(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ko=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vs()){case W:return 2;case K:return 8;case de:case Te:return 32;case Be:return 268435456;default:return 32}default:return 32}}var Ru=!1,aa=null,ia=null,ra=null,pr=new Map,yr=new Map,oa=[],Vw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function wr(e,t,n,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Na(t),t!==null&&Sm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Gw(e,t,n,i,l){switch(t){case"focusin":return aa=wr(aa,e,t,n,i,l),!0;case"dragenter":return ia=wr(ia,e,t,n,i,l),!0;case"mouseover":return ra=wr(ra,e,t,n,i,l),!0;case"pointerover":var u=l.pointerId;return pr.set(u,wr(pr.get(u)||null,e,t,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,yr.set(u,wr(yr.get(u)||null,e,t,n,i,l)),!0}return!1}function Cm(e){var t=Ha(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,qh(e.priority,function(){xm(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,qh(e.priority,function(){xm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ds=i,n.target.dispatchEvent(i),Ds=null}else return t=Na(n),t!==null&&Sm(t),e.blockedOn=n,!1;t.shift()}return!0}function Mm(e,t,n){Zo(e)&&n.delete(t)}function Qw(){Ru=!1,aa!==null&&Zo(aa)&&(aa=null),ia!==null&&Zo(ia)&&(ia=null),ra!==null&&Zo(ra)&&(ra=null),pr.forEach(Mm),yr.forEach(Mm)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qw)))}var Po=null;function zm(e){Po!==e&&(Po=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Po===e&&(Po=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Du(i||n)===null)continue;break}var u=Na(n);u!==null&&(e.splice(t,3),t-=3,zl(u,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function yi(e){function t(x){return Jo(x,e)}aa!==null&&Jo(aa,e),ia!==null&&Jo(ia,e),ra!==null&&Jo(ra,e),pr.forEach(t),yr.forEach(t);for(var n=0;n<oa.length;n++){var i=oa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],f=l[bt]||null;if(typeof u=="function")f||zm(n);else if(f){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,f=u[bt]||null)b=f.formAction;else if(Du(l)!==null)continue}else b=f.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),zm(n)}}}function Dm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Iu(e){this._internalRoot=e}$o.prototype.render=Iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=Nt();km(n,i,e,t,null,null)},$o.prototype.unmount=Iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;km(e.current,2,null,e,null,null),Bo(),t[Oa]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=_h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&Cm(e)}};var Rm=r.version;if(Rm!=="19.2.4")throw Error(s(527,Rm,"19.2.4"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Xw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{pt=es.inject(Xw),it=es}catch{}}return vr.createRoot=function(e,t){if(!h(e))throw Error(s(299));var n=!1,i="",l=jd,u=Ld,f=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=bm(e,1,!1,null,null,n,i,null,l,u,f,Dm),e[Oa]=t.current,fu(e),new Iu(t)},vr.hydrateRoot=function(e,t,n){if(!h(e))throw Error(s(299));var i=!1,l="",u=jd,f=Ld,b=_d,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=bm(e,1,!0,t,n??null,i,l,x,u,f,b,Dm),t.context=vm(null),n=t.current,i=Nt(),i=Ts(i),l=Vn(i),l.callback=null,Gn(n,l,i),n=i,t.current.lanes=n,zi(t,n),un(t),e[Oa]=t.current,fu(e),new $o(t)},vr.version="19.2.4",vr}var Wm;function ib(){if(Wm)return Hu.exports;Wm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Hu.exports=ab(),Hu.exports}var rb=ib();var Ym="popstate";function Um(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function ob(a={}){function r(h,c){let{pathname:d="/",search:g="",hash:p=""}=Ma(h.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),th("",{pathname:d,search:g,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function o(h,c){let d=h.document.querySelector("base"),g="";if(d&&d.getAttribute("href")){let p=h.location.href,m=p.indexOf("#");g=m===-1?p:p.slice(0,m)}return g+"#"+(typeof c=="string"?c:zr(c))}function s(h,c){$t(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return lb(r,o,s,a)}function Xe(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function $t(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function sb(){return Math.random().toString(36).substring(2,10)}function Fm(a,r){return{usr:a.state,key:a.key,idx:r,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function th(a,r,o=null,s,h){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Ma(r):r,state:o,key:r&&r.key||s||sb(),unstable_mask:h}}function zr({pathname:a="/",search:r="",hash:o=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function Ma(a){let r={};if(a){let o=a.indexOf("#");o>=0&&(r.hash=a.substring(o),a=a.substring(0,o));let s=a.indexOf("?");s>=0&&(r.search=a.substring(s),a=a.substring(0,s)),a&&(r.pathname=a)}return r}function lb(a,r,o,s={}){let{window:h=document.defaultView,v5Compat:c=!1}=s,d=h.history,g="POP",p=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function w(){g="POP";let I=y(),B=I==null?null:I-m;m=I,p&&p({action:g,location:N.location,delta:B})}function T(I,B){g="PUSH";let X=Um(I)?I:th(N.location,I,B);o&&o(X,I),m=y()+1;let F=Fm(X,m),re=N.createHref(X.unstable_mask||X);try{d.pushState(F,"",re)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;h.location.assign(re)}c&&p&&p({action:g,location:N.location,delta:1})}function v(I,B){g="REPLACE";let X=Um(I)?I:th(N.location,I,B);o&&o(X,I),m=y();let F=Fm(X,m),re=N.createHref(X.unstable_mask||X);d.replaceState(F,"",re),c&&p&&p({action:g,location:N.location,delta:0})}function H(I){return ub(I)}let N={get action(){return g},get location(){return a(h,d)},listen(I){if(p)throw new Error("A history only accepts one active listener");return h.addEventListener(Ym,w),p=I,()=>{h.removeEventListener(Ym,w),p=null}},createHref(I){return r(h,I)},createURL:H,encodeLocation(I){let B=H(I);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:v,go(I){return d.go(I)}};return N}function ub(a,r=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(o,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:zr(a);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function Og(a,r,o="/"){return hb(a,r,o,!1)}function hb(a,r,o,s){let h=typeof r=="string"?Ma(r):r,c=Nn(h.pathname||"/",o);if(c==null)return null;let d=Hg(a);cb(d);let g=null;for(let p=0;g==null&&p<d.length;++p){let m=Tb(c);g=vb(d[p],m,s)}return g}function Hg(a,r=[],o=[],s="",h=!1){let c=(d,g,p=h,m)=>{let y={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&p)return;Xe(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let w=dn([s,y.relativePath]),T=o.concat(y);d.children&&d.children.length>0&&(Xe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Hg(d.children,r,T,w,p)),!(d.path==null&&!d.index)&&r.push({path:w,score:wb(w,d.index),routesMeta:T})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))c(d,g);else for(let p of Ng(d.path))c(d,g,!0,p)}),r}function Ng(a){let r=a.split("/");if(r.length===0)return[];let[o,...s]=r,h=o.endsWith("?"),c=o.replace(/\?$/,"");if(s.length===0)return h?[c,""]:[c];let d=Ng(s.join("/")),g=[];return g.push(...d.map(p=>p===""?c:[c,p].join("/"))),h&&g.push(...d),g.map(p=>a.startsWith("/")&&p===""?"/":p)}function cb(a){a.sort((r,o)=>r.score!==o.score?o.score-r.score:bb(r.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var db=/^:[\w-]+$/,fb=3,mb=2,gb=1,pb=10,yb=-2,Vm=a=>a==="*";function wb(a,r){let o=a.split("/"),s=o.length;return o.some(Vm)&&(s+=yb),r&&(s+=mb),o.filter(h=>!Vm(h)).reduce((h,c)=>h+(db.test(c)?fb:c===""?gb:pb),s)}function bb(a,r){return a.length===r.length&&a.slice(0,-1).every((s,h)=>s===r[h])?a[a.length-1]-r[r.length-1]:0}function vb(a,r,o=!1){let{routesMeta:s}=a,h={},c="/",d=[];for(let g=0;g<s.length;++g){let p=s[g],m=g===s.length-1,y=c==="/"?r:r.slice(c.length)||"/",w=us({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),T=p.route;if(!w&&m&&o&&!s[s.length-1].route.index&&(w=us({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!w)return null;Object.assign(h,w.params),d.push({params:h,pathname:dn([c,w.pathname]),pathnameBase:Ab(dn([c,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(c=dn([c,w.pathnameBase]))}return d}function us(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,s]=kb(a.path,a.caseSensitive,a.end),h=r.match(o);if(!h)return null;let c=h[0],d=c.replace(/(.)\/+$/,"$1"),g=h.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:w},T)=>{if(y==="*"){let H=g[T]||"";d=c.slice(0,c.length-H.length).replace(/(.)\/+$/,"$1")}const v=g[T];return w&&!v?m[y]=void 0:m[y]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:a}}function kb(a,r=!1,o=!0){$t(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],h="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,p,m,y)=>{if(s.push({paramName:g,isOptional:p!=null}),p){let w=y.charAt(m+d.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),h+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?h+="\\/*$":a!==""&&a!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,r?void 0:"i"),s]}function Tb(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return $t(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function Nn(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,s=a.charAt(o);return s&&s!=="/"?null:a.slice(o)||"/"}var Sb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xb(a,r="/"){let{pathname:o,search:s="",hash:h=""}=typeof a=="string"?Ma(a):a,c;return o?(o=o.replace(/\/\/+/g,"/"),o.startsWith("/")?c=Gm(o.substring(1),"/"):c=Gm(o,r)):c=r,{pathname:c,search:Cb(s),hash:Mb(h)}}function Gm(a,r){let o=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(h=>{h===".."?o.length>1&&o.pop():h!=="."&&o.push(h)}),o.length>1?o.join("/"):"/"}function _u(a,r,o,s){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Eb(a){return a.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function mh(a){let r=Eb(a);return r.map((o,s)=>s===r.length-1?o.pathname:o.pathnameBase)}function ds(a,r,o,s=!1){let h;typeof a=="string"?h=Ma(a):(h={...a},Xe(!h.pathname||!h.pathname.includes("?"),_u("?","pathname","search",h)),Xe(!h.pathname||!h.pathname.includes("#"),_u("#","pathname","hash",h)),Xe(!h.search||!h.search.includes("#"),_u("#","search","hash",h)));let c=a===""||h.pathname==="",d=c?"/":h.pathname,g;if(d==null)g=o;else{let w=r.length-1;if(!s&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),w-=1;h.pathname=T.join("/")}g=w>=0?r[w]:"/"}let p=xb(h,g),m=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),Ab=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Cb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Mb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,zb=class{constructor(a,r,o,s=!1){this.status=a,this.statusText=r||"",this.internal=s,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function Db(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Rb(a){return a.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var jg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Lg(a,r){let o=a;if(typeof o!="string"||!Sb.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let s=o,h=!1;if(jg)try{let c=new URL(window.location.href),d=o.startsWith("//")?new URL(c.protocol+o):new URL(o),g=Nn(d.pathname,r);d.origin===c.origin&&g!=null?o=g+d.search+d.hash:h=!0}catch{$t(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:h,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _g=["POST","PUT","PATCH","DELETE"];new Set(_g);var Ib=["GET",..._g];new Set(Ib);var Ti=L.createContext(null);Ti.displayName="DataRouter";var fs=L.createContext(null);fs.displayName="DataRouterState";var Bb=L.createContext(!1),qg=L.createContext({isTransitioning:!1});qg.displayName="ViewTransition";var Ob=L.createContext(new Map);Ob.displayName="Fetchers";var Hb=L.createContext(null);Hb.displayName="Await";var _t=L.createContext(null);_t.displayName="Navigation";var Rr=L.createContext(null);Rr.displayName="Location";var rn=L.createContext({outlet:null,matches:[],isDataRoute:!1});rn.displayName="Route";var gh=L.createContext(null);gh.displayName="RouteError";var Wg="REACT_ROUTER_ERROR",Nb="REDIRECT",jb="ROUTE_ERROR_RESPONSE";function Lb(a){if(a.startsWith(`${Wg}:${Nb}:{`))try{let r=JSON.parse(a.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function _b(a){if(a.startsWith(`${Wg}:${jb}:{`))try{let r=JSON.parse(a.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new zb(r.status,r.statusText,r.data)}catch{}}function qb(a,{relative:r}={}){Xe(Si(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=L.useContext(_t),{hash:h,pathname:c,search:d}=Ir(a,{relative:r}),g=c;return o!=="/"&&(g=c==="/"?o:dn([o,c])),s.createHref({pathname:g,search:d,hash:h})}function Si(){return L.useContext(Rr)!=null}function mn(){return Xe(Si(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Rr).location}var Yg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ug(a){L.useContext(_t).static||L.useLayoutEffect(a)}function Fg(){let{isDataRoute:a}=L.useContext(rn);return a?$b():Wb()}function Wb(){Xe(Si(),"useNavigate() may be used only in the context of a <Router> component.");let a=L.useContext(Ti),{basename:r,navigator:o}=L.useContext(_t),{matches:s}=L.useContext(rn),{pathname:h}=mn(),c=JSON.stringify(mh(s)),d=L.useRef(!1);return Ug(()=>{d.current=!0}),L.useCallback((p,m={})=>{if($t(d.current,Yg),!d.current)return;if(typeof p=="number"){o.go(p);return}let y=ds(p,JSON.parse(c),h,m.relative==="path");a==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:dn([r,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[r,o,c,h,a])}L.createContext(null);function Vg(){let{matches:a}=L.useContext(rn),r=a[a.length-1];return r?r.params:{}}function Ir(a,{relative:r}={}){let{matches:o}=L.useContext(rn),{pathname:s}=mn(),h=JSON.stringify(mh(o));return L.useMemo(()=>ds(a,JSON.parse(h),s,r==="path"),[a,h,s,r])}function Yb(a,r){return Gg(a,r)}function Gg(a,r,o){Xe(Si(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=L.useContext(_t),{matches:h}=L.useContext(rn),c=h[h.length-1],d=c?c.params:{},g=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let I=m&&m.path||"";Xg(g,!m||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let y=mn(),w;if(r){let I=typeof r=="string"?Ma(r):r;Xe(p==="/"||I.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${I.pathname}" was given in the \`location\` prop.`),w=I}else w=y;let T=w.pathname||"/",v=T;if(p!=="/"){let I=p.replace(/^\//,"").split("/");v="/"+T.replace(/^\//,"").split("/").slice(I.length).join("/")}let H=Og(a,{pathname:v});$t(m||H!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),$t(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Qb(H&&H.map(I=>Object.assign({},I,{params:Object.assign({},d,I.params),pathname:dn([p,s.encodeLocation?s.encodeLocation(I.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?p:dn([p,s.encodeLocation?s.encodeLocation(I.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathnameBase])})),h,o);return r&&N?L.createElement(Rr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},N):N}function Ub(){let a=Pb(),r=Db(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:c},"ErrorBoundary")," or"," ",L.createElement("code",{style:c},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},r),o?L.createElement("pre",{style:h},o):null,d)}var Fb=L.createElement(Ub,null),Qg=class extends L.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){this.props.onError?this.props.onError(a,r):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const o=_b(a.digest);o&&(a=o)}let r=a!==void 0?L.createElement(rn.Provider,{value:this.props.routeContext},L.createElement(gh.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?L.createElement(Vb,{error:a},r):r}};Qg.contextType=Bb;var qu=new WeakMap;function Vb({children:a,error:r}){let{basename:o}=L.useContext(_t);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let s=Lb(r.digest);if(s){let h=qu.get(r);if(h)throw h;let c=Lg(s.location,o);if(jg&&!qu.get(r))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw qu.set(r,d),d}return L.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function Gb({routeContext:a,match:r,children:o}){let s=L.useContext(Ti);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),L.createElement(rn.Provider,{value:a},o)}function Qb(a,r=[],o){let s=o?.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let h=a,c=s?.errors;if(c!=null){let y=h.findIndex(w=>w.route.id&&c?.[w.route.id]!==void 0);Xe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),h=h.slice(0,Math.min(h.length,y+1))}let d=!1,g=-1;if(o&&s){d=s.renderFallback;for(let y=0;y<h.length;y++){let w=h[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=y),w.route.id){let{loaderData:T,errors:v}=s,H=w.route.loader&&!T.hasOwnProperty(w.route.id)&&(!v||v[w.route.id]===void 0);if(w.route.lazy||H){o.isStatic&&(d=!0),g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}}let p=o?.onError,m=s&&p?(y,w)=>{p(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Rb(s.matches),errorInfo:w})}:void 0;return h.reduceRight((y,w,T)=>{let v,H=!1,N=null,I=null;s&&(v=c&&w.route.id?c[w.route.id]:void 0,N=w.route.errorElement||Fb,d&&(g<0&&T===0?(Xg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,I=null):g===T&&(H=!0,I=w.route.hydrateFallbackElement||null)));let B=r.concat(h.slice(0,T+1)),X=()=>{let F;return v?F=N:H?F=I:w.route.Component?F=L.createElement(w.route.Component,null):w.route.element?F=w.route.element:F=y,L.createElement(Gb,{match:w,routeContext:{outlet:y,matches:B,isDataRoute:s!=null},children:F})};return s&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?L.createElement(Qg,{location:s.location,revalidation:s.revalidation,component:N,error:v,children:X(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):X()},null)}function ph(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xb(a){let r=L.useContext(Ti);return Xe(r,ph(a)),r}function Kb(a){let r=L.useContext(fs);return Xe(r,ph(a)),r}function Zb(a){let r=L.useContext(rn);return Xe(r,ph(a)),r}function yh(a){let r=Zb(a),o=r.matches[r.matches.length-1];return Xe(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function Jb(){return yh("useRouteId")}function Pb(){let a=L.useContext(gh),r=Kb("useRouteError"),o=yh("useRouteError");return a!==void 0?a:r.errors?.[o]}function $b(){let{router:a}=Xb("useNavigate"),r=yh("useNavigate"),o=L.useRef(!1);return Ug(()=>{o.current=!0}),L.useCallback(async(h,c={})=>{$t(o.current,Yg),o.current&&(typeof h=="number"?await a.navigate(h):await a.navigate(h,{fromRouteId:r,...c}))},[a,r])}var Qm={};function Xg(a,r,o){!r&&!Qm[a]&&(Qm[a]=!0,$t(!1,o))}L.memo(ev);function ev({routes:a,future:r,state:o,isStatic:s,onError:h}){return Gg(a,void 0,{state:o,isStatic:s,onError:h})}function Kg({to:a,replace:r,state:o,relative:s}){Xe(Si(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=L.useContext(_t);$t(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=L.useContext(rn),{pathname:d}=mn(),g=Fg(),p=ds(a,mh(c),d,s==="path"),m=JSON.stringify(p);return L.useEffect(()=>{g(JSON.parse(m),{replace:r,state:o,relative:s})},[g,m,s,r,o]),null}function rs(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tv({basename:a="/",children:r=null,location:o,navigationType:s="POP",navigator:h,static:c=!1,unstable_useTransitions:d}){Xe(!Si(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),p=L.useMemo(()=>({basename:g,navigator:h,static:c,unstable_useTransitions:d,future:{}}),[g,h,c,d]);typeof o=="string"&&(o=Ma(o));let{pathname:m="/",search:y="",hash:w="",state:T=null,key:v="default",unstable_mask:H}=o,N=L.useMemo(()=>{let I=Nn(m,g);return I==null?null:{location:{pathname:I,search:y,hash:w,state:T,key:v,unstable_mask:H},navigationType:s}},[g,m,y,w,T,v,s,H]);return $t(N!=null,`<Router basename="${g}"> is not able to match the URL "${m}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:L.createElement(_t.Provider,{value:p},L.createElement(Rr.Provider,{children:r,value:N}))}function nv({children:a,location:r}){return Yb(nh(a),r)}function nh(a,r=[]){let o=[];return L.Children.forEach(a,(s,h)=>{if(!L.isValidElement(s))return;let c=[...r,h];if(s.type===L.Fragment){o.push.apply(o,nh(s.props.children,c));return}Xe(s.type===rs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=nh(s.props.children,c)),o.push(d)}),o}var os="get",ss="application/x-www-form-urlencoded";function ms(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function av(a){return ms(a)&&a.tagName.toLowerCase()==="button"}function iv(a){return ms(a)&&a.tagName.toLowerCase()==="form"}function rv(a){return ms(a)&&a.tagName.toLowerCase()==="input"}function ov(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sv(a,r){return a.button===0&&(!r||r==="_self")&&!ov(a)}var ts=null;function lv(){if(ts===null)try{new FormData(document.createElement("form"),0),ts=!1}catch{ts=!0}return ts}var uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wu(a){return a!=null&&!uv.has(a)?($t(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ss}"`),null):a}function hv(a,r){let o,s,h,c,d;if(iv(a)){let g=a.getAttribute("action");s=g?Nn(g,r):null,o=a.getAttribute("method")||os,h=Wu(a.getAttribute("enctype"))||ss,c=new FormData(a)}else if(av(a)||rv(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||g.getAttribute("action");if(s=p?Nn(p,r):null,o=a.getAttribute("formmethod")||g.getAttribute("method")||os,h=Wu(a.getAttribute("formenctype"))||Wu(g.getAttribute("enctype"))||ss,c=new FormData(g,a),!lv()){let{name:m,type:y,value:w}=a;if(y==="image"){let T=m?`${m}.`:"";c.append(`${T}x`,"0"),c.append(`${T}y`,"0")}else m&&c.append(m,w)}}else{if(ms(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=os,s=null,h=ss,d=a}return c&&h==="text/plain"&&(d=c,c=void 0),{action:s,method:o.toLowerCase(),encType:h,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wh(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function cv(a,r,o,s){let h=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return o?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${s}`:h.pathname=`${h.pathname}.${s}`:h.pathname==="/"?h.pathname=`_root.${s}`:r&&Nn(h.pathname,r)==="/"?h.pathname=`${r.replace(/\/$/,"")}/_root.${s}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${s}`,h}async function dv(a,r){if(a.id in r)return r[a.id];try{let o=await import(a.module);return r[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function mv(a,r,o){let s=await Promise.all(a.map(async h=>{let c=r.routes[h.route.id];if(c){let d=await dv(c,o);return d.links?d.links():[]}return[]}));return wv(s.flat(1).filter(fv).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Xm(a,r,o,s,h,c){let d=(p,m)=>o[m]?p.route.id!==o[m].route.id:!0,g=(p,m)=>o[m].pathname!==p.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==p.params["*"];return c==="assets"?r.filter((p,m)=>d(p,m)||g(p,m)):c==="data"?r.filter((p,m)=>{let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,m)||g(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function gv(a,r,{includeHydrateFallback:o}={}){return pv(a.map(s=>{let h=r.routes[s.route.id];if(!h)return[];let c=[h.module];return h.clientActionModule&&(c=c.concat(h.clientActionModule)),h.clientLoaderModule&&(c=c.concat(h.clientLoaderModule)),o&&h.hydrateFallbackModule&&(c=c.concat(h.hydrateFallbackModule)),h.imports&&(c=c.concat(h.imports)),c}).flat(1))}function pv(a){return[...new Set(a)]}function yv(a){let r={},o=Object.keys(a).sort();for(let s of o)r[s]=a[s];return r}function wv(a,r){let o=new Set;return new Set(r),a.reduce((s,h)=>{let c=JSON.stringify(yv(h));return o.has(c)||(o.add(c),s.push({key:c,link:h})),s},[])}function Zg(){let a=L.useContext(Ti);return wh(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function bv(){let a=L.useContext(fs);return wh(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var bh=L.createContext(void 0);bh.displayName="FrameworkContext";function Jg(){let a=L.useContext(bh);return wh(a,"You must render this element inside a <HydratedRouter> element"),a}function vv(a,r){let o=L.useContext(bh),[s,h]=L.useState(!1),[c,d]=L.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:w}=r,T=L.useRef(null);L.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let N=B=>{B.forEach(X=>{d(X.isIntersecting)})},I=new IntersectionObserver(N,{threshold:.5});return T.current&&I.observe(T.current),()=>{I.disconnect()}}},[a]),L.useEffect(()=>{if(s){let N=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(N)}}},[s]);let v=()=>{h(!0)},H=()=>{h(!1),d(!1)};return o?a!=="intent"?[c,T,{}]:[c,T,{onFocus:kr(g,v),onBlur:kr(p,H),onMouseEnter:kr(m,v),onMouseLeave:kr(y,H),onTouchStart:kr(w,v)}]:[!1,T,{}]}function kr(a,r){return o=>{a&&a(o),o.defaultPrevented||r(o)}}function kv({page:a,...r}){let{router:o}=Zg(),s=L.useMemo(()=>Og(o.routes,a,o.basename),[o.routes,a,o.basename]);return s?L.createElement(Sv,{page:a,matches:s,...r}):null}function Tv(a){let{manifest:r,routeModules:o}=Jg(),[s,h]=L.useState([]);return L.useEffect(()=>{let c=!1;return mv(a,r,o).then(d=>{c||h(d)}),()=>{c=!0}},[a,r,o]),s}function Sv({page:a,matches:r,...o}){let s=mn(),{future:h,manifest:c,routeModules:d}=Jg(),{basename:g}=Zg(),{loaderData:p,matches:m}=bv(),y=L.useMemo(()=>Xm(a,r,m,c,s,"data"),[a,r,m,c,s]),w=L.useMemo(()=>Xm(a,r,m,c,s,"assets"),[a,r,m,c,s]),T=L.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let N=new Set,I=!1;if(r.forEach(X=>{let F=c.routes[X.route.id];!F||!F.hasLoader||(!y.some(re=>re.route.id===X.route.id)&&X.route.id in p&&d[X.route.id]?.shouldRevalidate||F.hasClientLoader?I=!0:N.add(X.route.id))}),N.size===0)return[];let B=cv(a,g,h.unstable_trailingSlashAwareDataRequests,"data");return I&&N.size>0&&B.searchParams.set("_routes",r.filter(X=>N.has(X.route.id)).map(X=>X.route.id).join(",")),[B.pathname+B.search]},[g,h.unstable_trailingSlashAwareDataRequests,p,s,c,y,r,a,d]),v=L.useMemo(()=>gv(w,c),[w,c]),H=Tv(w);return L.createElement(L.Fragment,null,T.map(N=>L.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...o})),v.map(N=>L.createElement("link",{key:N,rel:"modulepreload",href:N,...o})),H.map(({key:N,link:I})=>L.createElement("link",{key:N,nonce:o.nonce,...I,crossOrigin:I.crossOrigin??o.crossOrigin})))}function xv(...a){return r=>{a.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Ev=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ev&&(window.__reactRouterVersion="7.13.1")}catch{}function Av({basename:a,children:r,unstable_useTransitions:o,window:s}){let h=L.useRef();h.current==null&&(h.current=ob({window:s,v5Compat:!0}));let c=h.current,[d,g]=L.useState({action:c.action,location:c.location}),p=L.useCallback(m=>{o===!1?g(m):L.startTransition(()=>g(m))},[o]);return L.useLayoutEffect(()=>c.listen(p),[c,p]),L.createElement(tv,{basename:a,children:r,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:o})}var Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=L.forwardRef(function({onClick:r,discover:o="render",prefetch:s="none",relative:h,reloadDocument:c,replace:d,unstable_mask:g,state:p,target:m,to:y,preventScrollReset:w,viewTransition:T,unstable_defaultShouldRevalidate:v,...H},N){let{basename:I,navigator:B,unstable_useTransitions:X}=L.useContext(_t),F=typeof y=="string"&&Pg.test(y),re=Lg(y,I);y=re.to;let le=qb(y,{relative:h}),_=mn(),J=null;if(g){let G=ds(g,[],_.unstable_mask?_.unstable_mask.pathname:"/",!0);I!=="/"&&(G.pathname=G.pathname==="/"?I:dn([I,G.pathname])),J=B.createHref(G)}let[ce,fe,be]=vv(s,H),ee=Dv(y,{replace:d,unstable_mask:g,state:p,target:m,preventScrollReset:w,relative:h,viewTransition:T,unstable_defaultShouldRevalidate:v,unstable_useTransitions:X});function $(G){r&&r(G),G.defaultPrevented||ee(G)}let ke=!(re.isExternal||c),ne=L.createElement("a",{...H,...be,href:(ke?J:void 0)||re.absoluteURL||le,onClick:ke?$:r,ref:xv(N,fe),target:m,"data-discover":!F&&o==="render"?"true":void 0});return ce&&!F?L.createElement(L.Fragment,null,ne,L.createElement(kv,{page:le})):ne});Pt.displayName="Link";var Cv=L.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:s="",end:h=!1,style:c,to:d,viewTransition:g,children:p,...m},y){let w=Ir(d,{relative:m.relative}),T=mn(),v=L.useContext(fs),{navigator:H,basename:N}=L.useContext(_t),I=v!=null&&Hv(w)&&g===!0,B=H.encodeLocation?H.encodeLocation(w).pathname:w.pathname,X=T.pathname,F=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(X=X.toLowerCase(),F=F?F.toLowerCase():null,B=B.toLowerCase()),F&&N&&(F=Nn(F,N)||F);const re=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let le=X===B||!h&&X.startsWith(B)&&X.charAt(re)==="/",_=F!=null&&(F===B||!h&&F.startsWith(B)&&F.charAt(B.length)==="/"),J={isActive:le,isPending:_,isTransitioning:I},ce=le?r:void 0,fe;typeof s=="function"?fe=s(J):fe=[s,le?"active":null,_?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let be=typeof c=="function"?c(J):c;return L.createElement(Pt,{...m,"aria-current":ce,className:fe,ref:y,style:be,to:d,viewTransition:g},typeof p=="function"?p(J):p)});Cv.displayName="NavLink";var Mv=L.forwardRef(({discover:a="render",fetcherKey:r,navigate:o,reloadDocument:s,replace:h,state:c,method:d=os,action:g,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T,...v},H)=>{let{unstable_useTransitions:N}=L.useContext(_t),I=Bv(),B=Ov(g,{relative:m}),X=d.toLowerCase()==="get"?"get":"post",F=typeof g=="string"&&Pg.test(g),re=le=>{if(p&&p(le),le.defaultPrevented)return;le.preventDefault();let _=le.nativeEvent.submitter,J=_?.getAttribute("formmethod")||d,ce=()=>I(_||le.currentTarget,{fetcherKey:r,method:J,navigate:o,replace:h,state:c,relative:m,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T});N&&o!==!1?L.startTransition(()=>ce()):ce()};return L.createElement("form",{ref:H,method:X,action:B,onSubmit:s?p:re,...v,"data-discover":!F&&a==="render"?"true":void 0})});Mv.displayName="Form";function zv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $g(a){let r=L.useContext(Ti);return Xe(r,zv(a)),r}function Dv(a,{target:r,replace:o,unstable_mask:s,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let y=Fg(),w=mn(),T=Ir(a,{relative:d});return L.useCallback(v=>{if(sv(v,r)){v.preventDefault();let H=o!==void 0?o:zr(w)===zr(T),N=()=>y(a,{replace:H,unstable_mask:s,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p});m?L.startTransition(()=>N()):N()}},[w,y,T,o,s,h,r,a,c,d,g,p,m])}var Rv=0,Iv=()=>`__${String(++Rv)}__`;function Bv(){let{router:a}=$g("useSubmit"),{basename:r}=L.useContext(_t),o=Jb(),s=a.fetch,h=a.navigate;return L.useCallback(async(c,d={})=>{let{action:g,method:p,encType:m,formData:y,body:w}=hv(c,r);if(d.navigate===!1){let T=d.fetcherKey||Iv();await s(T,o,d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await h(d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:o,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,h,r,o])}function Ov(a,{relative:r}={}){let{basename:o}=L.useContext(_t),s=L.useContext(rn);Xe(s,"useFormAction must be used inside a RouteContext");let[h]=s.matches.slice(-1),c={...Ir(a||".",{relative:r})},d=mn();if(a==null){c.search=d.search;let g=new URLSearchParams(c.search),p=g.getAll("index");if(p.some(y=>y==="")){g.delete("index"),p.filter(w=>w).forEach(w=>g.append("index",w));let y=g.toString();c.search=y?`?${y}`:""}}return(!a||a===".")&&h.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(c.pathname=c.pathname==="/"?o:dn([o,c.pathname])),zr(c)}function Hv(a,{relative:r}={}){let o=L.useContext(qg);Xe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$g("useViewTransitionState"),h=Ir(a,{relative:r});if(!o.isTransitioning)return!1;let c=Nn(o.currentLocation.pathname,s)||o.currentLocation.pathname,d=Nn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return us(h.pathname,d)!=null||us(h.pathname,c)!=null}const Nv=[{day:1,title:"What Is Interest?",date:"2026-02-27",image:"images/day-1.png",sonnet:`**🪶 Sonnet I: The Lending of Seeds**

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

*Tomorrow, Sable will teach Kael the most difficult lesson of all — knowing when to let go, and the costly mistakes that can destroy years of patient accumulation...*`},{day:10,title:"The Patient Hand — When to Hold and When to Fold",date:"2026-03-01",image:"images/financial-independence/day-10.jpg",sonnet:`**🪶 Sonnet X: The Patient Hand**

What folly drives the merchant to sell gold
When winter clouds obscure the summer sun?
The wise investor's patience does unfold
Like seasons that their measured courses run.

Though Mr. Market screams of coming doom,
And neighbors flee their holdings in their fear,
The patient hand lets compound interest bloom
Through decades long, each passing, fruitful year.

Yet wisdom knows when branches truly die,
When business models crumble into dust,
When management's corruption makes us sigh—
Then selling saves us from misplaced trust.

*But quality held firm through time's long test*
*Rewards the patient hand with interest blessed.*`,standard:`💰 Day 10: The Patient Hand — When to Hold and When to Fold

Yesterday we learned to buy quality businesses with a margin of safety during market downturns. The answer lies in understanding that selling should be even rarer than buying — hold great businesses indefinitely, but know the few clear signals when it's time to let go.

🧱 **The Concept**
Buffett's selling philosophy is simple: hold forever unless the business fundamentals deteriorate permanently, you need money for a significantly better opportunity, or you made an analytical error.

❓ **Why It Matters**
Most investors hurt their returns by trading too frequently, paying unnecessary taxes, and missing out on compound growth. Time is the friend of the wonderful business and the enemy of the mediocre one. The key is distinguishing between temporary setbacks and permanent deterioration.

⚙️ **How It Works**
**Hold Forever**: If you own shares of exceptional businesses with durable competitive advantages (like Coca-Cola), let compound interest work its magic over decades.

**When to Sell**: (1) The business model is permanently broken (newspapers facing digital disruption), (2) Management becomes corrupt or incompetent, (3) You find a significantly better opportunity, or (4) You realize you made a fundamental analysis error.

**Ignore Price Fluctuations**: Don't sell just because the stock price has risen or fallen. Focus on business performance, not stock performance. If the business is growing earnings, temporary price drops are buying opportunities, not selling signals.

**Tax Efficiency**: Selling triggers capital gains taxes. In taxable accounts, this can reduce your compound returns significantly over time.

📖 **Definitions**
• **Buy and Hold**: Investment strategy of purchasing stocks and holding them long-term
• **Capital Gains Tax**: Tax on profits from selling investments
• **Opportunity Cost**: The benefit you miss by choosing one alternative over another
• **Business Deterioration**: Permanent decline in a company's competitive position
• **Trading**: Frequent buying and selling of securities

🎯 **Buffett Wisdom**
"Our favorite holding period is forever." The stock market is a voting machine in the short run but a weighing machine in the long run.

❓ **Tomorrow's Question:**
*You understand when to buy and sell individual stocks — but how should you think about building a complete portfolio that balances risk and reward?*`,parable:`Kael found Sable tending a grove of young fruit trees, some barely saplings, others heavy with ripening fruit. "Elder," the boy asked, "when do you harvest these fruits, and when do you uproot the trees?"

Sable smiled, running his weathered hand along the bark of an ancient apple tree. "This tree has fed my family for thirty seasons, young one. Each year it grows stronger, its roots deeper, its branches wider. Would I cut it down because one harsh winter left it bare, or because the market temporarily favored pears over apples?"

Tobren approached, wiping sweat from his brow. "But surely, Elder, some trees must be removed? I've seen farmers cling to diseased orchards until the rot spread to healthy trees."

"Wisdom lies in knowing the difference," Sable replied, pointing to a withering sapling. "This young tree caught blight — its roots are dying. No amount of wishful thinking will restore it. But that apple tree?" He gestured to his prized specimen. "Last year, merchants offered me gold to cut it down and sell the wood. I refused. This year, it bore twice the fruit of any tree in the village."

Kael watched as Sable pruned dead branches but left the healthy tree untouched. "So we hold what grows stronger with time, but release what cannot recover?"

"Precisely. The impatient farmer harvests green fruit and plants new seeds every season. The wise farmer plants once, tends carefully, and lets time reveal the treasure hidden in patient roots."

**Moral**: True wealth grows through patient cultivation of quality, not frequent transplanting of mediocrity.

*Tomorrow, Sable will teach Kael how even the finest orchards need diversity to weather any storm.*`},{day:10,title:"The Long Road — Patience and Common Pitfalls",date:"2026-03-01",image:"images/financial-independence/day-10.jpg",sonnet:`**🪶 Sonnet X: The Long Road**

Through seasons of abundance and of drought,
The patient investor holds what time has blessed,
While others flee when fear casts shadow doubt,
And chase bright baubles, never finding rest.

The compound magic works its silent art
On those who plant and tend but do not reap
Too soon the harvest, letting growth depart
From portfolios that anxious owners keep.

Beware the siren song of easy gain,
The panic bell that rings at market's fall,
For wealth belongs to those who can abstain
From folly's dance that beckons one and all.

*Time in the market beats the timing game—*
*Let patience be thy fortune and thy fame.*`,standard:`💰 Day 10: The Long Road — Patience and Common Pitfalls

Yesterday we explored margin of safety and waiting for Mr. Market's sales. When to sell comes down to three scenarios: the business deteriorates permanently, you find a significantly better opportunity, or the stock becomes dramatically overvalued — but the real challenge lies in avoiding the psychological traps that destroy long-term wealth.

🧱 **The Concept**
Successful long-term investing requires holding quality businesses for decades while avoiding common behavioral mistakes that cause investors to buy high, sell low, and chase trends.

❓ **Why It Matters**
Most investment losses come not from picking bad companies, but from good investors making emotional decisions. The mathematics of compound growth only work if you stay invested — a 10% annual return becomes 17x growth over 30 years, but only if you don't interrupt the process. Understanding these pitfalls helps you build systems to avoid them.

⚙️ **How It Works**
**The Hold Forever Principle**: Buffett's favorite holding period is forever. Sell only when the business fundamentally changes for the worse, not because of temporary setbacks or market volatility.

**Common Pitfalls to Avoid**:
• **Panic Selling**: Dumping stocks during market crashes (exactly when you should be buying)
• **FOMO Buying**: Chasing hot stocks or trends without understanding the business
• **Over-Trading**: Frequent buying and selling that generates fees and taxes while destroying returns
• **Anchoring**: Holding losing investments hoping to "break even" instead of cutting losses on permanently damaged businesses
• **Recency Bias**: Making decisions based on recent events rather than long-term fundamentals

**The 10-10-10 Rule**: Before making any investment decision, ask how you'll feel about it in 10 minutes, 10 months, and 10 years.

📖 **Definitions**
• **Compound Growth**: Earning returns on your returns, creating exponential wealth over time
• **FOMO**: Fear of Missing Out — buying assets because they're rising, not because they're undervalued
• **Anchoring Bias**: Fixating on irrelevant reference points when making decisions
• **Recency Bias**: Overweighting recent events when predicting future outcomes
• **Opportunity Cost**: The value of the best alternative foregone when making a choice

🎯 **Buffett Wisdom**
"Time in the market beats timing the market." The biggest risk isn't market volatility — it's interrupting the compound growth process through emotional decisions.

❓ **Tomorrow's Question:**
*How do you build a complete investment portfolio that balances growth, safety, and your personal financial goals?*`,parable:`The morning mist clung to the valley as Kael found Sable tending to his ancient olive grove, the gnarled trees heavy with silver-green fruit that had weathered countless seasons.

"Elder," Kael began, still clutching his makeshift ledger, "I understand when to buy, but knowing when to let go troubles me. How long should one hold an investment?"

Sable smiled, running his weathered hand along the bark of the nearest tree. "These olives were planted by my grandfather's grandfather. Each season, merchants come offering to buy them — sometimes for little during poor harvests, sometimes for great sums when the crops elsewhere have failed. Yet here they remain."

"But surely you've been tempted to sell during the lean years?"

"Ah, that is where wisdom separates the patient from the poor." Sable picked a ripe olive, examining its perfect form. "Watch how others behave. When storms come and prices fall, panic spreads like wildfire. Farmers sell their best trees for firewood. When abundant harvests create plenty, greed makes men mortgage their futures for temporary luxuries."

Tobren approached, overhearing their conversation. "I confess, Elder, I once sold my entire wheat field after two bad seasons, only to watch the new owner prosper for decades after."

"The greatest enemy of wealth," Sable continued, "is not bad weather or poor soil, but the restless heart that cannot distinguish between temporary storms and permanent ruin. Young Kael, tell me — what kills more olive trees: drought or the farmer's impatience?"

Kael pondered deeply. "Impatience, Elder. A tree can survive drought, but not the axe."

"Precisely. Hold forever what grows in good soil. Sell only when the roots have rotted beyond recovery, never because of passing storms."

**Moral**: *The patient gardener reaps harvests that the restless never see.*

*Tomorrow, Sable would teach Kael how to tend an entire orchard, balancing different crops for both sustenance and prosperity...*`},{day:11,title:"The Balanced Garden — Portfolio Construction and Risk Management",date:"2026-03-01",image:"images/financial-independence/day-11.jpg",sonnet:`**🪶 Sonnet XI: The Balanced Garden**

Not all in wheat, nor scattered thin and wide,
The prudent gardener plants with careful thought.
Few chosen seeds in fertile rows reside,
Each placement planned, each purpose firmly wrought.

The apple tree claims space with rightful pride,
While herbs take smaller plots but vital ground.
No empty soil where weeds might come to hide,
Yet room for treasure when it can be found.

Through seasons harsh some plants may fail to thrive,
But others flourish in their destined place.
This wisdom keeps the harvest garden alive
When single crops would meet a swift disgrace.

*For he who tends with knowledge, not with chance,*
*Finds plenty growing in his balance dance.*`,standard:`💰 Day 11: The Balanced Garden — Portfolio Construction and Risk Management

Yesterday we mastered the patience to hold great businesses forever and the wisdom to know when to sell. The answer to building a complete portfolio lies in diversification across quality businesses while maintaining concentrated conviction in your best ideas.

🧱 **The Concept**
Buffett advocates for focused diversification: own 5-10 exceptional businesses rather than hundreds of mediocre ones, spreading risk across different industries while maintaining conviction.

❓ **Why It Matters**
Over-diversification leads to average returns, while concentration without diversification creates unnecessary risk. The goal is to own enough quality businesses to sleep well at night while maintaining enough focus to beat the market. Risk comes from not knowing what you're doing, not from concentration in quality businesses.

⚙️ **How It Works**
**Focused Portfolio**: Build around 5-10 core positions in businesses you understand deeply. This allows you to monitor each investment properly while maintaining meaningful positions. **Industry Diversification**: Don't put all holdings in one sector. Spread across consumer goods, technology, healthcare, and financials to reduce sector-specific risk. **Position Sizing**: Your largest position might be 20-25% of your portfolio, smallest around 5-10%. Size positions based on conviction and margin of safety, not arbitrary equal weighting. **Cash Management**: Keep some cash available (5-15%) for exceptional opportunities, but don't hoard cash waiting for crashes that may never come.

📖 **Definitions**
• **Diversification**: Spreading investments across different assets to reduce risk
• **Concentration Risk**: Risk from having too much money in one investment
• **Position Sizing**: Determining how much to invest in each holding
• **Sector Allocation**: Distribution of investments across different industries
• **Portfolio Turnover**: How frequently holdings are bought and sold

🎯 **Buffett Wisdom**
"Diversification is protection against ignorance. It makes little sense if you know what you are doing." Focus on quality over quantity.

❓ **Tomorrow's Question:**
*You've built a focused portfolio of quality businesses — but how do you handle the psychological challenges when markets crash and your carefully chosen stocks plummet 30-50%?*`,parable:`The morning sun cast long shadows as Kael found Sable tending to her garden behind the cottage. Unlike Tobren's vast fields of single crops, Sable's plot contained carefully arranged sections—herbs near the kitchen door, fruit trees along the southern wall, vegetables in neat rows, and flowering plants throughout.

"Your garden is different from Tobren's farm," Kael observed, watching her prune a rose bush.

Sable smiled, brushing dirt from her hands. "Tobren grows wheat because wheat feeds many. But what if blight strikes wheat alone? His whole harvest fails." She gestured to her diverse plantings. "Here I grow herbs for healing, fruits for sweetness, vegetables for sustenance, and flowers for beauty. If one fails, the others sustain me."

"But surely having many plants means each gets less attention?"

"Ah, but look closer." Sable led him through the garden. "I don't grow fifty different plants—that would be madness. I choose perhaps ten varieties, each for a purpose, each in its proper place. The roses by the wall catch morning sun, the mint by the well stays moist, the tomatoes face south for warmth. I know each plant's needs intimately."

Kael noticed how she'd grouped compatible plants together. "Like your chamomile growing beside the roses?"

"Exactly. They help each other—the chamomile keeps pests from the roses, while the roses provide afternoon shade. This is not random scattering but thoughtful arrangement." She knelt beside a struggling bean plant. "And see—I give more space to what thrives best. My apple tree takes a quarter of the garden because it feeds us all winter. The exotic flower I tried last year gets a small corner—beautiful, but unproven."

As they walked, Sable pointed to a small section left unseeded. "And this?"

"Empty ground seems wasteful."

"Wasteful? Or ready? When I find something wonderful—perhaps a neighbor offers cuttings from their prized pear tree—I have space prepared. But I don't leave half the garden empty waiting for perfect plants that may never come."

That evening, as Kael helped her harvest dinner, he understood. "You're not trying to grow everything, but you're not risking everything on one crop either."

"A gardener sleeps peacefully," Sable agreed, "knowing that nature may challenge some plants, but never all at once."

**Moral**: *True security comes not from owning everything, but from choosing few things well and arranging them wisely.*

*Tomorrow, Kael will face his greatest test yet—when winter storms threaten even the most carefully tended gardens.*`}],jv=[{day:1,title:"What Is a Calorie?",date:"2026-02-28",image:"images/nutrition-science/day-1.png",sonnet:`**🪶 Sonnet I: The Measure of Fire**

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

*Tomorrow, Maren would teach Lila about the sacred rhythms of nourishment — when and how the body best receives its gifts throughout the day's cycles.*`},{day:9,title:"Nutrient Timing — The Rhythm of Optimal Fuel",date:"2026-03-01",image:"images/nutrition-science/day-9.jpg",sonnet:`**🪶 Sonnet IX: Nutrient Timing — The Rhythm of Optimal Fuel**

As morning breaks with cortisol's bright call,
The body seeks its steady protein fire,
While afternoon demands quick fuel for all
The tasks that push performance ever higher.

Before we train, swift carbohydrates dance
To fuel the muscles' eager, burning need,
Then protein joins in post-workout romance
To heal and build from every planted seed.

When evening falls and shadows softly creep,
The gentler foods prepare us for night's rest,
Magnesium's gift and tryptophan's deep
Embrace that guides our bodies to be blessed.

*Thus wisdom knows that when we eat matters more*
*Than simple counting calories we store.*`,standard:`🍎 Day 9: Nutrient Timing — The Rhythm of Optimal Fuel

Yesterday we discovered micronutrients as the orchestrators of life, learning that these vitamins and minerals enable every metabolic reaction despite providing no calories themselves. The answer to nutrient timing: when and how you combine foods creates a rhythm that optimizes energy, performance, and health by working with your body's natural circadian cycles and metabolic needs.

🧱 **The Concept**
Nutrient timing involves strategically consuming specific macronutrients and micronutrients at optimal times to maximize energy utilization, support recovery, and align with your body's circadian rhythms. The timing and combination of nutrients can significantly impact blood sugar stability, hormone production, and cellular repair processes.

❓ **Why It Matters**
Your body's nutritional needs change throughout the day based on hormonal fluctuations, activity levels, and cellular repair cycles. Poor nutrient timing can lead to energy crashes, impaired recovery, disrupted sleep, and suboptimal metabolic health. Understanding these rhythms allows you to eat in harmony with your biology rather than against it, maximizing the benefits of every meal.

⚙️ **How It Works**
**Morning nutrition** should emphasize protein and healthy fats to support stable blood sugar and sustained energy as cortisol naturally peaks — a breakfast of eggs with vegetables provides amino acids for neurotransmitter production while avoiding the blood sugar spike of refined carbohydrates. **Pre-workout timing** benefits from easily digestible carbohydrates 30-60 minutes before exercise to fuel performance, while **post-workout nutrition** requires both protein for muscle repair and carbohydrates to replenish glycogen stores within the 30-minute anabolic window. **Evening meals** should be lighter and emphasize foods that support sleep — magnesium-rich leafy greens, tryptophan-containing proteins, and complex carbohydrates that promote serotonin production. **Intermittent fasting windows** can enhance cellular repair processes like autophagy, while **meal spacing** of 3-4 hours allows complete digestion and prevents constant insulin stimulation. Food combinations matter tremendously: pairing iron-rich foods with vitamin C enhances absorption, while consuming fiber with carbohydrates slows glucose absorption and prevents blood sugar spikes.

📖 **Definitions**
• **Circadian rhythms**: Internal biological clocks that regulate metabolism, hormone production, and cellular processes over 24-hour cycles
• **Anabolic window**: The period after exercise when muscle protein synthesis is elevated and nutrient uptake is optimized
• **Glycemic response**: The blood sugar rise and fall pattern following food consumption
• **Autophagy**: Cellular "housekeeping" process that breaks down damaged components, enhanced during fasting periods
• **Meal timing**: Strategic scheduling of food intake to optimize metabolic and physiological responses

🎯 **Science Wisdom**
Your body is not a simple calorie-counting machine but a sophisticated biological system with natural rhythms and optimal windows for different nutrients. Eating with intention and timing transforms food from mere fuel into medicine that supports your body's innate wisdom.

❓ **Tomorrow's Question:**
*We've explored macronutrients, micronutrients, and timing — but how do we navigate the overwhelming world of nutritional information to make practical, sustainable choices that fit our unique lives?*`,parable:`Lila watched in fascination as Maren tended her three hearths with precise timing, each flame serving a different purpose throughout the day. "Master," she asked, "why do you feed each fire at such specific moments? Wouldn't it be simpler to keep them all burning the same way?"

Maren smiled, stirring a pot of healing broth over the morning hearth. "Watch closely, child. See how I kindle the dawn fire with dry kindling and steady wood? This gives us the sustained warmth we need as the day awakens, just as our bodies need steady proteins and healthy fats when we rise."

As the sun climbed higher, Maren moved to the second hearth, adding quick-burning twigs before Lila's archery practice. "Before you draw your bow, we feed this fire with swift fuel — it burns bright and fast, giving you immediate energy for your training, then settles to embers."

That evening, as shadows lengthened, Maren approached the third hearth with different materials entirely — aromatic herbs, slow-burning logs, and fragrant roots. "The twilight fire requires gentle fuel," she explained, as calming scents filled the air. "We feed it with what promotes rest and healing, for this is when our bodies restore themselves."

"But Master," Lila protested, "couldn't any fuel feed any fire at any time?"

"Indeed it could," Maren replied, "but observe what happens when we work against the natural rhythm." She threw quick-burning twigs onto the evening fire — it flared violently, then died to ash, filling the room with harsh smoke. "When we force the wrong fuel at the wrong time, we create chaos instead of harmony."

The next morning, Lila noticed how each hearth had served its purpose perfectly — the dawn fire had provided steady warmth through the night, the midday embers were ready for rekindling, and the evening fire had burned to the perfect glowing coals for the night's gentle heat.

"Your body, like these hearths, has its own sacred rhythms," Maren said, banking the coals. "Feed it with wisdom, not just with volume. The right fuel at the right time creates the symphony of health."

Moral: True nourishment honors the body's natural rhythms, providing the right nutrients at the right moments to create harmony rather than chaos.

Tomorrow, Lila would learn that even the wisest principles mean nothing without the practical wisdom to apply them in daily life.`},{day:9,title:"Nutrient Timing — The Rhythm of Optimal Fuel",date:"2026-03-01",image:"images/nutrition-science/day-9.jpg",sonnet:`**🪶 Sonnet IX: The Rhythm of Optimal Fuel**

When morning light awakens sleeping earth,
The body calls for fuel to start the day,
As dawn's first fire gives metabolism birth,
Sweet carbohydrates light the working way.

Before great labors, simple energy flows,
To power muscles through their destined task,
But when the work is done, the body knows
To seek repair — protein and carbs to ask.

As evening shadows lengthen on the ground,
The wisest souls choose gentler nourishment,
While digestive rest in darkness can be found,
And growth hormones work their night's intent.

*Like seasons turn with earth's eternal dance,*
*Our meals should flow with biology's advance.*`,standard:`🍎 Day 9: Nutrient Timing — The Rhythm of Optimal Fuel

Yesterday we explored micronutrients as the orchestrators of life, learning that these vitamins and minerals enable every metabolic reaction despite providing no calories themselves. The answer to nutrient timing: when and how you combine foods creates distinct metabolic states throughout the day — strategic timing optimizes energy, performance, and recovery by aligning nutrition with your body's natural circadian rhythms and physiological needs.

🧱 **The Concept**
Nutrient timing involves strategically consuming specific macronutrients and micronutrients at optimal times to maximize energy utilization, enhance performance, support recovery, and align with your body's natural metabolic rhythms.

❓ **Why It Matters**
Your body's ability to process and utilize nutrients fluctuates throughout the day based on hormonal cycles, activity levels, and circadian biology. Poor timing can lead to energy crashes, suboptimal performance, and inefficient nutrient utilization. Understanding nutrient timing helps you work with your biology rather than against it, creating sustained energy and better health outcomes.

⚙️ **How It Works**
**Morning metabolism** favors carbohydrates as cortisol levels peak and insulin sensitivity is high — this is when your body most efficiently converts glucose to energy rather than storing it as fat. **Pre-workout nutrition** should emphasize easily digestible carbohydrates for immediate energy and some protein to prime muscle protein synthesis, consumed 30-60 minutes before exercise. **Post-workout** represents a critical "anabolic window" where muscles are primed to absorb nutrients — combining protein (20-40g) with carbohydrates within 2 hours maximizes recovery and adaptation. **Evening meals** should emphasize protein and healthy fats while minimizing simple carbohydrates, as insulin sensitivity decreases and growth hormone release increases during sleep. **Intermittent fasting** periods allow digestive systems to rest and can improve insulin sensitivity, while **meal frequency** affects metabolic rate — eating every 3-4 hours maintains steady blood sugar and prevents metabolic slowdown.

📖 **Definitions**
• **Anabolic window**: Post-exercise period when muscles are most receptive to nutrients
• **Insulin sensitivity**: How effectively cells respond to insulin and uptake glucose
• **Circadian rhythm**: Your body's internal 24-hour biological clock
• **Glycemic timing**: Strategic consumption of carbohydrates based on activity and metabolism
• **Metabolic flexibility**: The ability to efficiently switch between fuel sources

🎯 **Science Wisdom**
Nutrient timing is like conducting a metabolic symphony — the same notes played at different times create entirely different effects. Align your eating patterns with your body's natural rhythms for optimal energy and health.

❓ **Tomorrow's Question:**
*Given that nutrient timing optimizes how we fuel our bodies, how do different cooking methods and food processing affect the bioavailability and nutritional value of what we eat?*`,parable:`As dawn painted the village in golden hues, Lila found Maren at her eastern hearth, grinding fresh herbs with practiced precision. "Master," Lila began, "I understand that nutrients are like musicians in an orchestra, but when should this music play?"

Maren smiled, gesturing to her three hearths arranged in perfect harmony. "Observe, dear apprentice. This eastern hearth burns brightest at sunrise, when the village awakens hungry and ready for the day's work. Here, I prepare warming broths rich in easily-digested grains — foods that spark the body's morning fire."

She moved to the central hearth, where coals glowed steadily. "This hearth maintains constant warmth, like the body during active hours. Before great tasks, I prepare light, energizing meals. After hard work, when muscles cry out for repair, I craft hearty stews combining flesh and grain — the body welcomes such gifts most eagerly when it has labored."

Finally, Maren approached the western hearth, where flames danced low and gentle. "As twilight approaches, this hearth offers quiet nourishment. Here I prepare foods that restore without overwhelming — rich broths, tender roots, and healing herbs that work their magic while the body rests."

Lila watched in wonder as villagers arrived at different times, each drawn to the appropriate hearth. "But Master, how do they know which hearth serves their needs?"

"The wise listen to their body's ancient rhythms," Maren replied, stirring a fragrant evening tonic. "The sun guides not only plants in their growing, but also the human form in its hunger and healing. Those who eat with the sun's wisdom find their energy flows like a clear stream — never flooding, never dry."

**Moral**: *True nourishment honors the body's natural rhythms, providing the right fuel at the right time.*

*Tomorrow, Maren will reveal why the manner of preparing food can transform its very essence...*`},{day:10,title:"Nutritional Discernment — Cutting Through the Information Overload",date:"2026-03-01",image:"images/nutrition-science/day-10.jpg",sonnet:`**🪶 Sonnet X: Nutritional Discernment — Cutting Through the Information Overload**

Amidst the clamor of conflicting claims that rise,
Like merchant voices in a crowded square,
The seeker stumbles, blinded by the lies
That promise miracles beyond compare.
Yet wisdom whispers soft beneath the noise,
"Examine sources, question what you hear,
Let science guide your mind, not marketing's ploys,
And test each truth against what you hold dear."
For every body speaks a different tongue,
What heals the runner may the mother harm,
The wisdom of the ages, ever young,
Outweighs the latest trend's seductive charm.
*True discernment cuts through information's flood,*
*To find the simple truths that heal like food.*`,standard:`🍎 Day 10: Nutritional Discernment — Cutting Through the Information Overload

Yesterday we explored nutrient timing as the rhythm of optimal fuel, discovering how when and how you combine foods creates harmony with your body's natural circadian cycles and metabolic needs. The answer to navigating overwhelming nutritional information: developing discernment allows you to filter through conflicting advice, marketing claims, and trending diets to make practical, evidence-based choices that align with your unique biology and lifestyle.

🧱 **The Concept**
Nutritional discernment is the ability to critically evaluate nutritional information, distinguish between science and marketing, and apply evidence-based principles to your individual circumstances. This skill involves understanding how to assess study quality, recognize bias, and translate research into practical eating patterns that support your specific health goals and life constraints.

❓ **Why It Matters**
The modern world bombards us with contradictory nutritional advice, sensationalized headlines, and products promising miraculous results. Without discernment, people often fall victim to diet culture, expensive supplements with no proven benefit, or extreme eating patterns that harm their relationship with food. Developing this critical thinking skill protects you from misinformation while empowering you to make choices based on solid science and personal experience rather than trends or fear.

⚙️ **How It Works**
**Source evaluation** begins with checking credentials — peer-reviewed research from reputable journals carries more weight than blog posts or testimonials, while understanding that single studies rarely prove causation and systematic reviews provide stronger evidence. **Marketing red flags** include claims like "miracle cure," "ancient secret," or "doctors hate this trick," along with before-and-after photos and testimonials that exploit emotional vulnerability rather than presenting objective data. **Study quality assessment** involves examining sample sizes (larger is generally better), study duration (longer-term studies reveal more meaningful patterns), control groups (randomized controlled trials are gold standard), and funding sources (industry-funded research may have inherent bias). **Individual application** requires honest self-assessment of your lifestyle, preferences, health status, and goals — what works for an elite athlete may not suit a busy parent, and genetic variations like lactose intolerance or celiac disease override general recommendations. **Practical implementation** means starting with foundational principles (adequate protein, varied vegetables, appropriate calories) before worrying about advanced optimization, tracking how different foods make you feel rather than just following rules, and maintaining flexibility to adapt as your life circumstances change. The most sustainable approach often involves gradual changes that build upon each other rather than dramatic overhauls that prove impossible to maintain.

📖 **Definitions**
• **Systematic review**: Comprehensive analysis of multiple studies on the same topic, providing stronger evidence than individual studies
• **Randomized controlled trial (RCT)**: Gold standard research method where participants are randomly assigned to treatment or control groups
• **Confirmation bias**: Tendency to seek information that confirms existing beliefs while ignoring contradictory evidence
• **Bioindividuality**: Concept that optimal nutrition varies between individuals based on genetics, lifestyle, and health status
• **Evidence hierarchy**: Ranking system for research quality, with systematic reviews at the top and case studies at the bottom

🎯 **Science Wisdom**
True nutritional wisdom lies not in following the latest trend but in developing the discernment to separate signal from noise, applying time-tested principles while remaining open to new evidence. Your body is your best teacher when you learn to listen with both scientific understanding and intuitive awareness.

❓ **Tomorrow's Question:**
*Now that we understand how to discern quality nutritional information, how can we create sustainable eating patterns that honor both our nutritional needs and our relationship with food for lasting health and happiness?*`,parable:`The morning mist clung to the village as Lila found Maren seated before her third hearth, the one dedicated to wisdom's flame. Unlike the other two — one for healing herbs, another for nourishing broths — this hearth burned with a steady, contemplative fire that seemed to illuminate more than just the immediate space.

"Master Maren," Lila began, settling beside her teacher with a bundle of scrolls and pamphlets that rustled like autumn leaves. "The traveling merchants brought more nutrition wisdom yesterday — some claim honey cures everything, others swear by exotic berries, and this one promises that avoiding all grains will grant eternal youth. How am I to know what serves and what merely sells?"

Maren smiled, her weathered hands sorting through dried herbs with practiced precision. "Ah, child, you have discovered the greatest challenge of our time — not the lack of knowledge, but the overwhelming abundance of it, much like a river that floods its banks and muddies the very water we seek to drink."

She lifted a handful of different seeds from various pouches. "Tell me, if a stranger offered you these seeds, each claiming to grow the most magnificent tree, how would you choose?"

Lila examined them carefully. "I would ask to see the trees they came from, study how they grew in soil like ours, and learn from gardeners who had tended them through many seasons."

"Precisely," Maren nodded. "Nutritional discernment works the same way. First, we examine the source — is this wisdom born from careful observation over time, or from someone hoping to profit from our hunger for simple answers? Second, we test the soil — does this advice account for the unique ground of your life, your body, your circumstances? And third, we observe the seasons — does this guidance serve you through all of life's changes, or only in perfect conditions?"

She gestured to the scrolls Lila had brought. "Notice how the most dramatic claims always promise the most — 'Miracle! Ancient secret! Guaranteed!' — like merchants shouting loudest in the marketplace. True wisdom whispers, child. It speaks of gradual growth, patient cultivation, and the simple truth that good health, like a strong oak, grows slowly from deep roots."

Lila picked up one pamphlet promising rapid transformation. "But how do I know if the research they cite is trustworthy?"

"Ask yourself these questions," Maren replied, moving to her herb collection. "Who funded this study — those with something to sell, or those seeking only truth? How many people were observed, and for how long? A remedy tested on ten people for ten days tells us little compared to one tested on thousands across many seasons. Most importantly, were there others who received different treatments, so we can see true effects rather than wishful thinking?"

She held up two identical-looking herbs. "These appear the same, but one is bitter dock, which aids digestion, and the other is lamb's quarter, which nourishes the blood. Without discernment, one might use them interchangeably and wonder why results vary. So it is with nutritional advice — what serves the marathon runner may not serve the nursing mother, what helps in youth may harm in age."

Lila nodded slowly. "So I must learn to read not just the words, but the wisdom behind them — to ask who benefits from this knowledge being spread, and whether it accounts for the complexity of human life?"

"Now you begin to understand," Maren said, her eyes twinkling with approval. "The greatest nutrition science is not found in exotic supplements or extreme restrictions, but in the patient cultivation of discernment itself. Learn to listen to your body's responses, observe patterns over time, and remember that the most profound healing often comes from the simplest, most time-tested foods."

As the wisdom fire burned steady and true, Lila felt a new confidence growing within her — not the brittle certainty of following rules, but the supple strength of one who could navigate complexity with grace.

**Moral:** True nutritional wisdom lies not in following the loudest voices but in developing the discernment to separate timeless principles from temporary trends, honoring both scientific evidence and personal experience.

Tomorrow, Lila would learn how this discernment could be woven into sustainable patterns that honored not just nutritional needs, but the deeper relationship between food, body, and soul.`}],Lv=[{day:1,title:"The Power of Tactical Empathy",date:"2026-03-01",image:"images/negotiation/day-1.jpg",sonnet:`**🪶 Sonnet I: The Mirror's Edge**

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

*Tomorrow, Ren would learn how questions could become invisible chains of influence, more powerful than any direct command...*`},{day:5,title:"The Art of Calibrated Questions - Giving Control While Maintaining Direction",date:"2026-03-01",image:"images/negotiation/day-5.jpg",sonnet:`**🪶 Sonnet V: The Art of Calibrated Questions**

What magic lies in questions asked with care,
That guide without commanding, lead by light?
How shall we move the stubborn to prepare
Solutions that were hidden from their sight?

The "How" and "What" become our gentle blade,
That cuts through armor wrought of pride and fear.
While "Why" builds walls that cannot be unmade,
These softer words make clouded pathways clear.

The merchant thinks he architects the deal,
The client feels their wisdom guides the way.
What power in making others truly feel
They hold the reins while we direct the play!

*For those who ask the questions rule the dance—*
*Control disguised as giving others chance.*`,standard:`🤝 Day 5: The Art of Calibrated Questions - Giving Control While Maintaining Direction

When you give someone permission to say "No," you create psychological safety that transforms adversarial dynamics into collaborative ones. But how do you guide that collaboration toward your desired outcome?

🧱 **The Concept**
Calibrated questions are "How" and "What" questions that give the other person a sense of control while subtly steering them toward solutions that work for you.

❓ **Why It Matters**
People support what they help create. When someone feels like they're solving the problem themselves, they become emotionally invested in making the solution work. Traditional "Why" questions trigger defensiveness, while "Yes/No" questions create binary traps. Calibrated questions bypass these pitfalls by making the other person feel like the expert and problem-solver.

⚙️ **How It Works**
Instead of "You need to give me a better price," try "How am I supposed to do that?" or "What would you need to make this work?" These questions force the other person to see the situation from your perspective while maintaining their sense of agency. FBI negotiators use "How do I know you'll keep your word?" rather than "Will you keep your word?" because it makes the subject explain their own credibility. In business, "What would have to happen for you to recommend this to your board?" is more effective than "Will your board approve this?" The calibrated question makes them outline the path to success themselves, creating buy-in and revealing obstacles you need to address.

📖 **Definitions**
• **Calibrated Questions**: Open-ended "How" and "What" questions that guide without commanding
• **Illusion of Control**: The psychological phenomenon where people feel more committed to outcomes they believe they influenced
• **Solution Ownership**: When someone becomes invested in making something work because they helped design it
• **Perspective Flip**: Using questions to make others see situations from your viewpoint

🎯 **Negotiation Wisdom**
The person who asks the questions controls the conversation. Make them feel like the expert while you remain the architect.

❓ **Tomorrow's Question**
*How do you use tactical empathy to disarm hostility and create unexpected emotional connection with difficult counterparts?*`,parable:`The morning sun cast long shadows through the bazaar as Ren watched Vasska approach the silk merchant's stall. The merchant, known for his inflated prices and stubborn nature, sat cross-legged behind bolts of shimmering fabric, his arms folded defensively.

"Ah, Master Kharis," Vasska said warmly, his blind eye catching the light like polished stone. "I see you have the finest silks in the market." The merchant's chest puffed with pride, but his guard remained up.

Ren expected Vasska to begin haggling, but instead, the master trader tilted his head thoughtfully. "What would I need to do to earn the right to purchase your most prized bolt at a price that honors both your craftsmanship and my merchant's reality?"

The silk merchant blinked, taken aback. He had prepared for battle, not collaboration. "Well," he said slowly, "you would need to understand that this silk comes from the rarest silkworms in the eastern mountains..."

"How could I possibly convince my customers to pay what such quality deserves?" Vasska asked, examining the fabric with genuine appreciation.

Suddenly, the merchant was explaining his costs, his sourcing challenges, even suggesting ways Vasska might market the premium material. Within minutes, he was calculating a price that worked for both of them, believing it was entirely his own idea.

As they walked away with the silk at half the original price, Ren marveled at what he'd witnessed. "You made him solve your problem," he said.

Vasska's good eye twinkled. "I gave him something more precious than silk, young merchant—the feeling that he was the expert, the problem-solver, the one in control. When people architect their own solutions, they defend them like their own children."

**Moral**: The wisest negotiators lead by asking, not telling. Questions that make others feel expert create solutions they'll fight to implement.

*Tomorrow, Ren would learn how even the most hostile hearts could be softened, when Vasska faced a merchant who despised all traders from their distant homeland...*`},{day:5,title:"The Illusion of Control - Calibrated Questions That Guide Without Commanding",date:"2026-03-01",image:"images/negotiation/day-5.jpg",sonnet:`**🪶 Sonnet V: The Illusion of Control**

What sorcery lies within a question's art,
That guides the mind while seeming to retreat?
The asker yields control, yet plays the part
Of shepherd, making others' thoughts complete.

"How shall we solve this puzzle that we face?"
Transforms resistance into willing thought.
The questioned one now owns the reasoning space,
And champions solutions they have wrought.

No force required when curiosity leads,
For minds engage when challenged to explore.
The clever trader plants the questioning seeds,
Then watches as another opens doors.

*Ask not what they should do, but how they might—*
*And watch them think their way into your sight.*`,standard:`🤝 Day 5: The Illusion of Control - Calibrated Questions That Guide Without Commanding

When you give someone permission to say "No," you create psychological safety that transforms resistance into collaboration. But how do you guide that collaboration toward your desired outcome?

🧱 **The Concept**
Calibrated questions create the illusion of control by making the other person feel they're driving the conversation while you subtly steer toward your objectives.

❓ **Why It Matters**
People resist being told what to do but embrace solutions they believe they discovered themselves. Calibrated questions bypass the rational mind's defenses and engage the problem-solving instincts. When someone feels in control of the decision-making process, they become emotionally invested in the outcome. FBI negotiators use this to make suspects feel empowered while actually constraining their options to safe choices.

⚙️ **How It Works**
Calibrated questions typically start with "How" or "What" and avoid "Why" (which triggers defensiveness). Instead of "You need to lower your price," ask "How am I supposed to accept this price when my budget is X?" This makes them solve your problem. "What would you need to see happen for this to work?" puts them in the driver's seat while revealing their true constraints. A manager might ask "How do you see this project getting completed on time?" rather than dictating deadlines. The key is removing yourself as the source of pressure — you become a collaborator helping them solve a puzzle they now own.

📖 **Definitions**
• **Calibrated Questions**: Open-ended questions designed to guide thinking without triggering resistance
• **Illusion of Control**: The feeling of being in charge while actually being influenced
• **Solution Ownership**: When people feel they discovered the answer themselves
• **Indirect Influence**: Guiding behavior without direct commands or pressure

🎯 **Negotiation Wisdom**
The person asking the questions controls the conversation. Make them think, and they'll think their way to your conclusion.

❓ **Tomorrow's Question**
*How do you use strategic silence and calculated pauses to create psychological pressure that works in your favor?*`,parable:`Ren watched as Vasska faced the silk merchant's impossible demand — triple the usual price for passage through the mountain pass. The one-eyed trader didn't argue or refuse. Instead, he leaned back thoughtfully.

"How do you see us paying triple fare when our current cargo barely covers normal passage?" Vasska asked, his voice genuinely curious.

The merchant frowned, suddenly tasked with solving a puzzle. "Well... perhaps you have other goods?"

"What would need to happen for you to feel comfortable with our usual rate?" Vasska continued, making the merchant dig deeper into his own reasoning.

The merchant's expression shifted as he began calculating. "The danger has increased... but if you could guarantee safe passage for my nephew's caravan next month..."

Vasska nodded encouragingly. "How would that arrangement work exactly?"

Within minutes, the merchant had talked himself into not just the original rate, but a future partnership. Ren marveled at how Vasska had made the merchant feel brilliant while guiding him exactly where he wanted.

"Young merchant," Vasska later explained, "never tell someone what to think. Ask them how to think, and they'll think their way to your conclusion. Questions don't threaten — they invite. And people cherish solutions they believe they discovered."

Ren nodded, understanding dawning like sunrise over the trading routes.

**Moral**: The person asking questions controls the conversation without appearing to control anything at all.

*Tomorrow, Ren would learn that sometimes the most powerful word in negotiation is the one left unspoken...*`},{day:6,title:"Tactical Empathy - Mirroring Emotions to Disarm Hostility",date:"2026-03-01",image:"images/negotiation/day-6.jpg",sonnet:`**🪶 Sonnet VI: Tactical Empathy - Mirroring Emotions to Disarm Hostility**

When rage storms forth like tempest winds that blow,
And fury masks the pain that lies beneath,
The wise negotiator does not bestow
Defense, but draws the poison from its sheath.

"It sounds like you feel wounded," soft they say,
Reflecting back the anguish in their eyes,
Not to dismiss or brush their hurt away,
But honor truth that in their anger lies.

Like mirrors catching light to calm the storm,
Tactical empathy dissolves the wall
That separation builds, and keeps us warm
While others freeze in pride before the fall.

*When hearts feel heard, defenses melt away,*
*And enemies become allies in the fray.*`,standard:`🤝 Day 6: Tactical Empathy - Mirroring Emotions to Disarm Hostility

Calibrated questions give others control while you guide direction, but what happens when emotions run high and logic fails? You deploy tactical empathy to create unexpected connection.

🧱 **The Concept**
Tactical empathy means understanding someone's emotional state and reflecting it back to them, not to manipulate but to defuse tension and build trust.

❓ **Why It Matters**
People don't negotiate with logic—they negotiate with emotions and justify with logic afterward. When someone feels heard and understood at an emotional level, their defensive walls come down. Hostility melts when you accurately label what they're feeling. This isn't about agreement; it's about acknowledgment that transforms adversaries into collaborators.

⚙️ **How It Works**
Start with labeling: "It sounds like you're frustrated with how this has been handled" or "It seems like you feel overlooked in this process." The key is the tentative language—"sounds like," "seems like," "appears that"—which gives them room to correct you without feeling attacked. FBI negotiators use this to calm suicidal subjects: "It sounds like you feel like nobody understands what you're going through." In business, try "It seems like you're concerned about taking this risk without more data" instead of arguing about the data itself. Mirror their tone and pace initially, then gradually slow down to calm the interaction. When someone feels truly understood, they stop fighting and start problem-solving.

📖 **Definitions**
• **Tactical Empathy**: Understanding and reflecting emotions strategically to build trust
• **Labeling**: Verbally acknowledging someone's emotional state using tentative language
• **Emotional Mirroring**: Matching then gradually modulating tone, pace, and energy
• **Defusion**: The process of reducing emotional tension through acknowledgment

🎯 **Negotiation Wisdom**
Emotion is the hidden engine of every negotiation. Master it first, and logic will follow your lead.

❓ **Tomorrow's Question**
*How do you use the power of "No" to make people feel safe enough to eventually say "Yes"?*`,parable:`The morning sun cast long shadows across the bazaar when a red-faced merchant stormed toward Vasska's stall, his fists clenched and voice already rising. "You cheated me!" he bellowed, drawing stares from nearby vendors. "That silk you sold me yesterday—it's inferior grade dressed up as premium! I want my money back!"

Ren tensed, ready to defend his master's reputation, but Vasska remained perfectly still, his single eye studying the angry man's face with curious intensity.

"It sounds like you're feeling betrayed," Vasska said softly, his voice carrying none of the merchant's heat. "It seems like you trusted me with something important, and now you feel I've let you down."

The merchant's mouth opened to continue his tirade, but the words caught in his throat. Something in Vasska's tone—not defensive, not argumentative, but genuinely acknowledging—had stolen the wind from his anger.

"I... yes," the merchant said, his shoulders sagging slightly. "I needed that silk for my daughter's wedding dress. Premium quality silk. When I got home and examined it properly..."

"That must have been devastating," Vasska continued, leaning forward slightly. "It appears that you're not just concerned about the money—you're worried about disappointing your daughter on one of the most important days of her life."

The merchant's eyes glistened. "Exactly. She's been planning this wedding for months."

Ren watched in amazement as the transformation continued. Vasska matched the merchant's posture, then gradually relaxed his own stance. His voice, which had started at the same urgent pitch, slowly became more measured and calm.

"It seems like what you really need," Vasska said thoughtfully, "is not just your money back, but a solution that ensures your daughter gets the perfect silk for her special day."

The merchant nodded eagerly. "Yes, that's exactly what I need."

Within minutes, they had arranged not just a full refund, but Vasska had promised to personally source the finest silk from his most trusted supplier, at cost, to be delivered within the week.

As the now-grateful merchant departed, Ren shook his head in wonder. "Master, how did you turn his anger into cooperation so quickly?"

Vasska's weathered face creased into a knowing smile. "Young Ren, people don't argue with their emotions—they argue from them. When you mirror what they feel instead of fighting it, you become their ally in solving the real problem, not their enemy in defending against their anger."

*Moral: The fastest way to dissolve hostility is not to argue with it, but to understand and acknowledge it, transforming enemies into partners in finding solutions.*

*Tomorrow, Vasska will teach Ren why the most powerful word in negotiation might surprise him—and why making people comfortable with rejection can lead to unexpected acceptance.*`}],_v=[{day:1,title:"The Dichotomy of Control",date:"2026-03-01",image:"images/stoic-philosophy/day-1.jpg",sonnet:`**🪶 Sonnet I: The Two Circles**

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

*Tomorrow, Caius will struggle with showing compassion to a grieving comrade while maintaining his newfound philosophical equilibrium...*`},{day:5,title:"The Balance of Compassion and Wisdom",date:"2026-03-01",image:"images/stoic-philosophy/day-5.jpg",sonnet:`**🪶 Sonnet V: The Balance of Compassion and Wisdom**

When others weep, must I dissolve in tears?
When friends despair, shall I abandon hope?
True kindness holds a steady light that clears
The path ahead, extends a helping rope.

The doctor tends the wound with skillful hands,
Not trembling with each patient's cry of pain.
The lighthouse keeper on the rocky strands
Stays firm while guiding vessels through the rain.

Compassion flows from strength, not from collapse,
From wisdom's well, not from emotion's flood.
The heart that loves but never quite adapts
To every storm serves greater common good.

*For those who would heal others' deepest hurt*
*Must stand on philosophical, firm dirt.*`,standard:`🏛️ Day 5: The Balance of Compassion and Wisdom

Yesterday we learned to examine our judgments before assenting to them. Today's question concerns the apparent coldness of Stoic detachment — but true **compassionate action** emerges not from emotional overwhelm but from clear thinking and steady virtue.

🧱 **The Concept**
Stoic compassion means helping others through reasoned action rather than shared suffering, maintaining emotional clarity to serve effectively.

❓ **Why It Matters**
Many confuse **sympathy** (feeling others' pain) with **compassion** (acting to relieve it). A doctor overwhelmed by every patient's agony becomes useless; one who maintains professional calm can actually heal. Seneca wrote: "The mind that is anxious about future misfortunes is miserable" — and a miserable person cannot effectively help others. True service requires **rational love** — caring deeply while thinking clearly — rather than emotional contagion that multiplies suffering without solving problems.

⚙️ **How It Works**
When someone suffers, you acknowledge their pain without adopting it as your own identity. **Emotional contagion**: "My friend is devastated, so I must be devastated too." **Stoic compassion**: "My friend suffers; how can I best help them heal?" Marcus Aurelius practiced **prosocial virtue** — justice, kindness, and service — while maintaining inner equilibrium. You offer presence, practical assistance, and wisdom rather than amplifying distress. This creates **stable support** — others can lean on your strength because you're not drowning alongside them. Epictetus demonstrated this teaching former slaves with firm kindness, never cruel but never weak.

📖 **Definitions**
• **Compassionate Action**: Helping others through reasoned service rather than shared suffering
• **Sympathy**: Feeling others' emotions as your own
• **Compassion**: Acting skillfully to relieve suffering
• **Rational Love**: Caring deeply while maintaining wisdom and clarity
• **Emotional Contagion**: Automatically adopting others' emotional states
• **Prosocial Virtue**: Character traits that benefit community and relationships

🎯 **Stoic Wisdom**
Seneca taught: "Every new beginning comes from some other beginning's end." The highest compassion is helping others find their own strength, not enabling dependence on your emotional reactions.

❓ **Tomorrow's Question:**
*If Stoics focus on virtue and wisdom, how do you handle practical concerns like money, career advancement, and material security without becoming attached to outcomes?*`,parable:`General Maxima found young Caius weeping beside the barracks, his shoulders shaking with grief. Word had arrived that morning of his younger brother's death in a distant campaign — fever had claimed another promising life before his twentieth year.

"I failed him," Caius whispered through tears. "I should have been there. I should have written more letters. Now he's gone, and I'll never see him again."

Maxima settled beside the grieving soldier, her weathered hands folded calmly. "Tell me about your brother," she said softly.

For an hour, Caius spoke of shared memories — their childhood adventures, their mother's proud smile when both sons joined the legions, his brother's quick wit and generous heart. As he talked, his sobs gradually quieted.

"You speak of him with such love," Maxima observed. "Yet you call yourself a failure. Which judgment serves his memory better — your guilt, or your gratitude?"

Caius looked up, confusion replacing despair. "I don't understand."

"Watch," Maxima said, nodding toward a comrade approaching with obvious distress. Marcus stumbled toward them, face pale with worry. "General, my wife writes that our son has taken ill. I can think of nothing else — I've made three errors in drill today. My mind spins with fears."

Maxima's eyes remained steady and kind. "Marcus, your concern shows love. But drowning in worry helps neither you nor your family. What practical action can you take?"

"Request leave to return home," Marcus replied immediately.

"Then do so. Present your request with clear reasoning. While you wait for approval, fulfill your duties here with excellence — scattered thinking serves no one. Your son needs a father who acts wisely, not one consumed by panic."

As Marcus departed with renewed purpose, Maxima turned back to Caius. "Do you see? I felt concern for Marcus's situation, but I didn't adopt his terror as my own. That would have left us both helpless. Instead, I offered what he needed — clarity and direction."

Caius nodded slowly. "You showed compassion without losing yourself in his suffering."

"Precisely. Now, what does your grief for your brother tell you about how to live?"

The young soldier considered deeply. "That life is precious. That time with loved ones matters. That I should honor his memory through my actions, not waste energy on impossible regrets."

"There," Maxima smiled. "You've transformed raw pain into wisdom. Your brother's death becomes not just loss, but teaching. This is how philosophers love — deeply, but with the clarity to serve rather than simply suffer."

**Moral:** True compassion flows from wisdom and stability, not from drowning in shared suffering. The strongest support comes from those who maintain their equilibrium while offering genuine care.

*Tomorrow, Caius will discover how Stoic principles apply to the practical challenges that consume most soldiers' thoughts — advancement, wealth, and security in an uncertain world.*`},{day:5,title:"The Paradox of Stoic Compassion",date:"2026-03-01",image:"images/stoic-philosophy/day-5.jpg",sonnet:`**🪶 Sonnet V: The Paradox of Stoic Compassion**

When others weep, shall wisdom stand apart?
Does discipline make cold the feeling soul?
The untrained think that passion shows the heart,
While reason's calm suggests we've lost control.

But see the surgeon's steady, gentle hand—
No trembling mars the cut that saves a life.
The rescuer who helps the drowning stand
Shows love through action, not through inner strife.

True mercy flows from virtue's crystal spring,
Not from the muddy waters of our pain.
We serve best when our judgment's offering
Can lift another's burden, break their chain.

*For sympatheia teaches us this art:*
*To love with both a steady mind and heart.*`,standard:`🏛️ Day 5: The Paradox of Stoic Compassion

Yesterday we examined the discipline of assent — controlling our judgments about events. Today's question asks whether this makes Stoics cold and unfeeling — and the answer reveals that **true compassion** actually requires emotional discipline, as uncontrolled emotions often serve the self rather than those who suffer.

🧱 **The Concept**
Stoic compassion flows from virtue and wisdom rather than emotional overwhelm, making it more effective and sustainable.

❓ **Why It Matters**
Many confuse emotional intensity with genuine care, but **sympatheia** — the Stoic principle of universal connection — demands clear-headed action over theatrical feeling. A surgeon doesn't weep during operation; a rescuer doesn't panic during crisis. Uncontrolled emotions often make suffering about ourselves rather than those we claim to help. True compassion requires the emotional stability to act wisely when others cannot.

⚙️ **How It Works**
When someone suffers, the untrained person becomes overwhelmed: "This is terrible! I can't bear it!" — making the situation about their own distress. The Stoic maintains equilibrium: "This person is in pain. What can I actually do to help?" Marcus Aurelius wrote, "We were born to work together," emphasizing **practical service** over emotional display. Seneca distinguished between **mercy** (reasoned kindness) and **pity** (irrational emotion that clouds judgment). The disciplined mind asks: "How does my emotional state serve this person's needs?" Often, calm presence and practical action help more than shared hysteria.

📖 **Definitions**
• **Sympatheia**: Stoic principle of universal connection and mutual responsibility
• **Mercy**: Reasoned kindness based on virtue
• **Pity**: Emotional overwhelm that often serves the observer more than the sufferer
• **Practical Service**: Action-oriented help based on wisdom rather than feeling
• **Emotional Discipline**: Maintaining equilibrium to serve others effectively

🎯 **Stoic Wisdom**
Marcus Aurelius taught: "The universe is change; our life is what our thoughts make it." Compassion becomes most powerful when guided by wisdom rather than overwhelm.

❓ **Tomorrow's Question:**
*If Stoics focus on accepting what they cannot control, how do they maintain motivation to improve society and fight injustice? Doesn't acceptance lead to passivity?*`,parable:`The morning brought news that would test every principle Maxima had taught. A plague had struck the lower districts of Rome, and Caius arrived at their usual meeting place with tears streaming down his face.

"General," he gasped, "the families near the Tiber — children are dying. My friend Marcus lost his youngest daughter yesterday. How can you speak of discipline and assent when innocent blood flows in the streets? Surely wisdom means nothing in the face of such horror!"

Maxima's weathered face remained calm, though his eyes showed deep concern. "Tell me, young soldier — in your grief and rage, what have you done to help?"

"I... I wept with Marcus. I cursed the gods. I—"

"You made the tragedy about your own feelings," Maxima said gently. "Come."

He led Caius through the winding streets toward the affected district. As they walked, Maxima explained: "When I commanded legions, I learned a bitter truth. The general who weeps loudest at his soldiers' wounds often forgets to summon the physician. Emotion without wisdom is performance, not love."

They arrived at a makeshift hospital where volunteer physicians worked tirelessly among the sick. Maxima rolled up his sleeves and began helping without fanfare — holding water cups to parched lips, carrying supplies, offering quiet words of comfort to the dying.

"But General," Caius whispered, "don't you feel their pain? How can you remain so... detached?"

Maxima paused beside a fevered child, gently placing a cool cloth on her forehead. "I feel everything, Caius. But I've learned to feel with my hands as much as my heart. The child needs medicine, not my tears. Her mother needs hope, not my despair."

As evening fell, they had helped dozens. Caius marveled at how much more they had accomplished through calm action than he had through passionate grieving.

"This is sympatheia," Maxima said as they washed their hands. "We are connected to all humanity — but that connection calls us to serve, not to suffer uselessly. True compassion flows from virtue, not from the chaos of uncontrolled emotion."

**Moral:** The deepest compassion comes not from sharing others' pain, but from maintaining the wisdom and strength to ease it.

*Tomorrow, Caius will question whether Stoic acceptance makes one passive in the face of injustice...*`},{day:6,title:"The Art of Preferred Indifferents",date:"2026-03-01",image:"images/stoic-philosophy/day-6.jpg",sonnet:`**🪶 Sonnet VI: The Art of Preferred Indifferents**

Let gold and silver flow through eager hands,
Pursue advancement with unwavering might,
Yet hold these treasures like the shifting sands—
Preferred when virtue grants them natural right.

The emperor who rules with wisdom's crown
May lose his throne yet keep his soul intact,
While beggars clutching coins may still be bound
By chains that wealth and status can't contract.

Work diligently for each worldly goal,
Let effort bloom in every chosen task,
Yet never let success or failure toll
The bell that summons happiness to ask.

*For he who masters what he may desire*
*Already holds what fortune can't acquire.*`,standard:`🏛️ Day 6: The Art of Preferred Indifferents

Yesterday we learned that true compassion comes from clear thinking rather than shared suffering. Regarding tomorrow's question about practical concerns: Stoics distinguish between **virtue** (always good) and **preferred indifferents** (neither good nor bad, but naturally preferred when virtue permits).

🧱 **The Concept**
Stoics work diligently toward practical goals like financial security and career success while maintaining inner freedom by not tying their happiness to outcomes.

❓ **Why It Matters**
Many people swing between two extremes: either obsessing over money and status (making them slaves to fortune) or rejecting all worldly concerns (making them ineffective). Stoics choose a middle path: **engagement without attachment**. Marcus Aurelius ruled an empire while maintaining philosophical detachment; Seneca accumulated wealth while teaching that riches don't guarantee happiness. This approach allows maximum effort with minimum anxiety — you work toward goals because they're naturally preferable, not because your worth depends on achieving them.

⚙️ **How It Works**
You pursue **preferred indifferents** (health, wealth, reputation) with full effort while accepting that outcomes depend partly on factors beyond your control. **Attachment thinking**: "I must get this promotion or I'm a failure." **Stoic approach**: "I'll prepare thoroughly and interview well; the decision involves factors outside my control." This creates **strategic detachment** — you care about the process (which you control) more than results (which you don't). Epictetus taught students to desire what happens rather than expecting what you desire. You work for financial security because it's naturally preferable, but your peace doesn't depend on market fluctuations.

📖 **Definitions**
• **Preferred Indifferents**: Things neither good nor bad but naturally preferable (health, wealth, reputation)
• **Engagement Without Attachment**: Pursuing goals fully while maintaining emotional freedom
• **Strategic Detachment**: Caring more about effort than outcomes
• **Natural Preference**: Inclination toward things that support human flourishing
• **Fortune**: External circumstances beyond our direct control
• **Process vs. Outcome**: Focusing on actions you control rather than results you don't

🎯 **Stoic Wisdom**
Seneca wrote: "It is more fitting for a man to laugh at life than to lament over it." Work diligently for practical success, but hold outcomes lightly — your character matters more than your circumstances.

❓ **Tomorrow's Question:**
*How do Stoics handle criticism and praise from others without becoming defensive or proud?*`,parable:`The morning sun cast long shadows across the training grounds as Caius counted his meager savings — three denarii earned from extra duties, barely enough for decent boots before winter. His shoulders sagged with worry.

"You look as if those coins hold your very soul," Maxima observed, settling beside him on the stone bench.

"They might as well," Caius muttered. "Without proper equipment, I'll freeze or die in battle. And if I can't advance in rank, I'll never support a family or own land. Yet focusing on money feels... unphilosophical."

Maxima smiled, producing a small leather pouch heavy with gold. "I was once the richest general in three provinces. Lost most of it in a single bad investment. Yet here I sit, content as ever. Tell me — does this gold make me wise or virtuous?"

"No, General."

"Does lacking it make you foolish or corrupt?"

"No, but—"

"Then money is what we call a *preferred indifferent* — neither good nor bad in itself, but naturally preferable when virtue permits." Maxima pocketed the gold. "I work to maintain my modest needs not because wealth brings happiness, but because poverty can distract from wisdom. You should absolutely pursue those boots, that promotion, that farm — but as a craftsman pursues his work, for excellence itself, not as a drowning man grasps for driftwood."

Caius frowned. "But if outcomes don't matter, why try at all?"

"Because virtue expresses itself through engagement, not withdrawal. Marcus Aurelius didn't abandon his empire to meditate in a cave — he ruled it wisely. Seneca didn't take vows of poverty — he earned wealth while teaching that riches cannot buy character." Maxima stood, stretching his scarred arms toward the sun. "Work for those boots with full effort, young soldier. Plan your advancement, save your coins, train your body. But let your peace come from the quality of your effort, not the guarantee of results."

The old general began walking toward the barracks, then paused. "Besides — a man who's mastered his desires already possesses the greatest wealth."

**Moral:** True freedom comes not from avoiding worldly concerns but from pursuing them without being enslaved by outcomes.

Tomorrow, Maxima would teach Caius how even the harshest criticism could become a gift to the prepared mind...`}],qv=[{day:1,title:"What Is a Note? — Sound Has a Name",date:"2026-03-01",image:"images/music-theory/day-1.jpg",sonnet:`**🪶 Sonnet I: The First Vibration**

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

But tomorrow, Wren would discover that even more magic awaited when these carefully chosen notes began to stack upon each other like stones in an ancient tower...`},{day:3,title:"Building Chords — When Notes Stack Up",date:"2026-03-01",image:"images/music-theory/day-3.jpg",sonnet:`**🪶 Sonnet III: Building Chords — When Notes Stack Up**

Three voices rise to meet in crystal air,
C, E, and G—each pure and singular,
Yet when combined, they weave beyond compare
A golden triad, bright and angular.

The mathematics of their wave-dance speaks
In ratios that please the ancient ear,
While major thirds lift up what harmony seeks,
And perfect fifths make distant echoes clear.

But shift one note a half-step's breadth below,
And sunshine turns to shadows on the wall,
The same three voices now in minor's glow
Sing stories of the heart's more tender fall.

*From simple notes, these layered beauties grow—*
*Each chord a world where mathematical hearts flow.*`,standard:`🎵 Day 3: Building Chords — When Notes Stack Up

Yesterday we explored scales and how they create emotional flavors in music. The answer to our question: when we stack scale notes together, we create **chords** — and some combinations sound beautiful because they follow mathematical ratios our brains recognize as harmonious.

🧱 **The Concept**
A chord is three or more notes played simultaneously. The simplest chords use every other note from a scale, creating **triads** that form the harmonic foundation of most music.

❓ **Why It Matters**
Chords give music its emotional depth and color. A single melody line is like a pencil sketch — chords add the paint. They can make the same melody sound joyful, melancholy, mysterious, or triumphant. Every song you love gets its character from chord progressions.

⚙️ **How It Works**
The basic **major triad** uses the 1st, 3rd, and 5th notes of a major scale. In C major, that's C-E-G. These three notes create a stable, happy sound. A **minor triad** lowers the 3rd by a half-step (C-Eb-G), creating a sadder quality.

Why do these sound good? The frequencies create simple mathematical ratios: the perfect fifth (C to G) has a 3:2 ratio, while octaves are 2:1. Our brains recognize these patterns as consonant — pleasing and stable. **Dissonant** intervals like the tritone (C to F#) have complex ratios that sound tense and unstable, demanding resolution.

Chords can be **inverted** (rearranging which note is lowest) or extended with 7ths, 9ths, and beyond. Jazz musicians love these colorful extensions, while pop songs often stick to simple triads.

📖 **Definitions**
• **Chord**: Three or more notes played simultaneously
• **Triad**: A three-note chord using the root, third, and fifth of a scale
• **Major Triad**: Root, major third, perfect fifth (bright, stable sound)
• **Minor Triad**: Root, minor third, perfect fifth (darker, more emotional sound)
• **Consonance**: Notes that sound stable and pleasing together
• **Dissonance**: Notes that sound tense and unstable, creating musical tension
• **Inversion**: Rearranging chord tones so a different note is in the bass

🎯 **Musical Insight**
Your emotional response to chords isn't just cultural — it's mathematical. Consonant intervals create wave patterns that align and reinforce each other, while dissonant ones create beating patterns that signal conflict. This is why a major chord feels resolved while a diminished chord feels anxious.

❓ **Tomorrow's Question:**
*If individual chords create moods, what happens when we connect them in sequence? How do chord progressions create the sense of musical journey and emotional storytelling?*`,parable:`Wren had been playing the same three notes — C, E, G — when Old Ferro's weathered hand settled on her shoulder. The blind tuner tilted his head, listening to how the notes wove together in the evening air.

"Child," he murmured, "you've discovered something beautiful. Those aren't just three separate sounds anymore."

Wren frowned, still holding down the frets. "But I'm only playing three strings."

"Listen deeper." Ferro sat beside her on the park bench. "When notes embrace like that, they become something new. What do you see when you close your eyes?"

Wren shut her eyes and strummed again. The three notes seemed to shimmer and blend, creating something fuller than their individual voices. "It's like... like three colors mixing into light?"

"Exactly! You've built your first chord." Ferro's fingers moved through the air as if touching invisible keys. "C, E, G — a major triad. The mathematical children of the scale, every other note holding hands. But watch this." He reached over and pressed her finger down one fret, changing the E to E-flat.

The sound darkened immediately, like clouds passing over the sun.

"Now the same three notes tell a different story," Ferro whispered. "The major triad was sunshine on water — consonant, peaceful. This minor triad? It's moonlight through rain. Same structure, but that middle note dropped just a half-step, and everything changes."

Wren experimented, moving between the major and minor versions. "Why does the small change make such a big difference?"

"Because harmony isn't just about what sounds good — it's about mathematics wearing the mask of emotion. Those frequency ratios speak directly to something ancient in your brain. A perfect fifth, like your C to G, creates waves that align perfectly. Your mind recognizes the pattern and calls it beautiful."

As twilight deepened, Wren played chord after chord, each one a small world of stacked possibilities. Some felt like home, others like questions waiting for answers.

**Moral**: *Individual notes are letters; chords are words. When we learn to stack sounds with intention, we begin to speak the language of harmony.*

*Tomorrow, Old Ferro would show her how these chord-words could be arranged into musical sentences — progressions that tell stories of departure and return.*`},{day:3,title:"The Magic of Chords — When Notes Dance Together",date:"2026-03-01",image:"images/music-theory/day-3.jpg",sonnet:`**🪶 Sonnet III: The Magic of Chords — When Notes Dance Together**

When single notes like lonely voices cry,
Their solitude can barely touch the heart,
But stack them high like stars across the sky—
And harmony transforms the simplest art.

The thirds determine if we laugh or weep,
Major ascending bright like morning sun,
While minor thirds in darker colors seep,
Like autumn shadows when the day is done.

Consonance brings peace to restless ears,
While dissonance creates a yearning ache,
That pulls us forward through our hopes and fears
Until resolution's sweet return we make.

*In chord's embrace, alone becomes together—*
*Mathematics wed to soul, lasting forever.*`,standard:`🎵 Day 3: The Magic of Chords — When Notes Dance Together

Yesterday we discovered how scales give us sets of notes that belong together, creating emotional flavors from bright major to melancholy minor. Today we answer: when you stack multiple notes from a scale, you create **chords** — and some combinations are pure magic while others make your ears cringe.

🧱 **The Concept**
A chord is three or more notes played simultaneously, built by stacking notes at specific intervals from a scale. The spacing between these notes creates **harmony** — either consonant (pleasant) or dissonant (tense).

❓ **Why It Matters**
Chords provide the harmonic foundation that makes melodies emotionally powerful. A single note is just a pitch; a melody is movement; but chords create the emotional bed that tells you whether to feel joy, sadness, tension, or resolution. They're why a simple "Happy Birthday" can sound triumphant with major chords or haunting with minor ones.

⚙️ **How It Works**
The most basic chord is a **triad** — three notes stacked in thirds (skipping every other scale note). In C major, starting on C: C-E-G creates a **C major chord**. Starting on A: A-C-E creates an **A minor chord**. The **third** determines if a chord sounds major (happy) or minor (sad) — it's the note that gives the chord its emotional color.

**Consonant intervals** (like octaves, fifths, and major thirds) create stable, pleasant sounds because their sound waves align mathematically. **Dissonant intervals** (like seconds and sevenths) create tension because their waves clash — but this tension makes music interesting and creates the need for **resolution** back to consonance.

Every scale naturally produces different chord qualities: in C major, chords built on C, F, and G are major (bright), while chords on D, E, and A are minor (dark). The chord on B is diminished (unstable, wanting to resolve).

📖 **Definitions**
• **Chord**: Three or more notes played simultaneously
• **Triad**: A three-note chord built in thirds (root, third, fifth)
• **Harmony**: The study of how notes sound when combined
• **Consonance**: Stable, pleasant-sounding combinations
• **Dissonance**: Unstable, tense combinations that want to resolve
• **Third**: The interval that determines major (bright) vs. minor (dark) quality
• **Resolution**: Movement from dissonance to consonance

🎯 **Musical Insight**
Your emotional response to chords isn't just cultural — it's mathematical. Consonant intervals create sound waves that align in simple ratios (2:1, 3:2), while dissonant intervals create complex ratios that your brain processes as "unresolved." This tension and release is the heartbeat of all Western music.

❓ **Tomorrow's Question:**
*If chords create harmony in space, what creates the flow of music through time? How do we organize sounds into patterns that make you want to move, dance, or march?*`,parable:`The morning sun painted golden streaks across the cobblestones as Wren tuned her violin, each string singing its pure note into the crisp air. Old Ferro approached with his worn leather case, settling beside her on the weathered bench.

"Listen, child," he whispered, pressing three piano keys simultaneously. The notes bloomed together — C, E, and G — creating something greater than their sum. "Alone, each note is but a single voice crying in the wilderness. Together, they become a choir."

Wren drew her bow across multiple strings, creating her own chord. "It's like... like colors mixing on a painter's palette," she mused. "But some mixtures create beauty, while others create mud."

Ferro smiled, his sightless eyes crinkling. "Precisely. Watch — or rather, listen." He played C and E together — a sweet, stable sound that seemed to glow golden in his inner vision. "This is consonance, like sunlight through honey. The sound waves embrace each other in perfect mathematical ratios."

Then he pressed C and D together. The notes clashed, creating a harsh, restless sound that painted jagged red lines across his perception. "And this is dissonance — not ugly, mind you, but urgent. It demands resolution, like a question begging for an answer."

"Why?" Wren asked, fascination lighting her features.

"Because music mirrors life itself," Ferro replied, transitioning the dissonant notes to a peaceful chord. "We find comfort in harmony, but we need tension to make us feel alive. A song of only consonance would be as boring as perpetual sunshine. A song of only dissonance would be as unbearable as eternal storm."

As if to demonstrate, he began playing a simple progression — major chords that painted his world in warm yellows and blues, punctuated by brief moments of minor darkness that made the return to light all the sweeter.

"The third," he continued, highlighting that crucial middle note, "is the soul of any chord. Raise it slightly, and you have joy. Lower it, and you have sorrow. Such power in such a small adjustment."

Wren experimented, shifting between major and minor versions of the same chord on her violin. The major sang like morning larks; the minor wept like autumn rain. "It's as if the notes have feelings," she breathed.

"They do," Ferro nodded. "Or rather, they awaken feelings that already live within us. Our ancestors learned to read danger and safety in the sounds of the world. Music simply speaks that ancient language."

**Moral**: True beauty emerges not from perfection, but from the dance between tension and resolution, discord and harmony. Even the sweetest chord gains its power from the memory of dissonance overcome.

**Tomorrow**: But what force drives this dance forward through time, creating the very pulse that makes our hearts want to follow the music's lead?`},{day:4,title:"Chord Progressions — The Journey Between Harmonies",date:"2026-03-01",image:"images/music-theory/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Journey Between Harmonies**

From stable tonic shores we dare depart,
Through dominant seas where tension builds its might,
To minor harbors that can break the heart,
Then subdominant paths that catch the light.

Each chord a waypoint in our quest for home,
A Roman numeral upon the map,
Guiding wanderers wherever they may roam
Through progressions that close the harmonic gap.

The circle turns in fifths descending down,
As V to I resolves with perfect grace,
While ii-V-I progressions wear the crown
Of jazz's most beloved, sacred space.

*For music mirrors life's eternal way:*
*We leave our home to find it once again.*`,standard:`🎵 Day 4: Chord Progressions — The Journey Between Harmonies

Yesterday we discovered how chords create emotional colors through mathematical ratios. The answer: when we connect chords in sequence, we create **chord progressions** that tell stories by establishing tension and release, taking listeners on emotional journeys through patterns our ears recognize as satisfying.

🧱 **The Concept**
A chord progression is a sequence of chords that creates harmonic movement in music. These progressions form the backbone of songs, establishing key centers, creating tension, and providing resolution.

❓ **Why It Matters**
Chord progressions are music's storytelling engine. They create anticipation, surprise, and satisfaction by moving between stability and tension. Every hit song uses progressions that feel both familiar and fresh. Understanding progressions reveals why certain songs make you want to sing along or bring tears to your eyes.

⚙️ **How It Works**
The most famous progression is **I-V-vi-IV** (in C major: C-G-Am-F). You hear this in "Let It Be," "Don't Stop Believin'," and thousands of other songs. It works because it moves from home (I) to the dominant (V) which creates tension, then to the relative minor (vi) for emotional depth, and back through the subdominant (IV) which naturally wants to return home.

Each chord in a key has a **function**: tonic chords (I, iii, vi) feel stable, dominant chords (V, vii°) create tension that wants to resolve, and subdominant chords (II, IV) provide gentle movement away from home. The **circle of fifths** shows how chords naturally want to move in descending perfect fifths (C to F to Bb to Eb...).

Jazz musicians love **ii-V-I progressions** because they create the strongest sense of resolution. Blues uses a **12-bar progression** (I-I-I-I-IV-IV-I-I-V-IV-I-I) that's become foundational to popular music.

📖 **Definitions**
• **Chord Progression**: A sequence of chords that creates harmonic movement
• **Roman Numeral Analysis**: System using I, ii, iii, IV, V, vi, vii° to describe chord relationships
• **Tonic Function**: Chords that sound stable and at rest (I, iii, vi)
• **Dominant Function**: Chords that create tension wanting resolution (V, vii°)
• **Subdominant Function**: Chords that move away from tonic (ii, IV)
• **Circle of Fifths**: Pattern showing how chords naturally progress in descending perfect fifths
• **Cadence**: Specific chord progressions that create closure (like V-I)

🎯 **Musical Insight**
Chord progressions tap into psychological patterns of tension and release that mirror human emotional experiences. We crave the journey away from stability and the satisfying return home — this is why the same progressions work across cultures and generations.

❓ **Tomorrow's Question:**
*We've explored harmony, but what about time? How does rhythm — the heartbeat of music — organize sound in time and create the groove that makes you want to move?*`,parable:`Wren sat on the cathedral steps, her weathered guitar case open to catch the afternoon coins, when she heard Old Ferro's voice drifting from the music shop across the cobblestones.

"Come, child," the blind piano tuner called, his fingers dancing across worn keys. "I want to show you something about journeys."

She packed her guitar and crossed to where Ferro sat at an ancient upright piano, his clouded eyes focused on something only he could see.

"Play me a chord," he said. "Any chord."

Wren struck a C major on her guitar. "Ah," Ferro smiled, "bright yellow, stable as sunlight. But watch — listen — what happens when we move." His left hand found C major on the piano, then shifted to G major. "Do you hear the pull? The yellow brightens to gold, creates a tension that wants to go somewhere."

"Like a question," Wren murmured.

"Exactly." Ferro's hands moved to A minor, and the color in his mind shifted to deep blue. "Now we've introduced melancholy, complexity. The story deepens." Finally, F major — warm orange that seemed to beckon. "And here, the subdominant calls us gently home."

As his fingers returned to C major, Wren felt something complete in her chest, like a held breath released.

"This is why humans make music," Ferro said softly. "We need journeys. We need to leave home so we can return to it. Every song is a map of leaving and coming back, of tension and rest. The chords don't just make pretty sounds — they mirror our deepest emotional patterns."

Wren played the progression on her guitar, feeling how each chord pulled toward the next like a river flowing toward the sea. In the distance, church bells chimed the hour, and she realized they too followed a progression — a musical journey that had marked time for centuries.

**Moral:** Just as life is a journey of departures and returns, chord progressions create meaning through movement — taking us away from home so we can feel the joy of coming back.

**Tomorrow:** Ferro taps his foot against the piano bench, and Wren discovers that harmony isn't the only thing that moves through time...`}],Wv=[{day:1,title:"Why Real Estate Builds Wealth",date:"2026-03-01",image:"images/real-estate/day-1.jpg",sonnet:`**🪶 Sonnet I: The Land That Pays You Back**

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

*Tomorrow, Dara will learn how Hallam chooses which properties deserve his silver — and which promises are merely fool's gold wrapped in pretty words.*`},{day:3,title:"Finding and Evaluating Your First Rental",date:"2026-03-01",image:"images/real-estate/day-3.jpg",sonnet:`**🪶 Sonnet III: Finding and Evaluating Your First Rental**

Amidst the rows of houses standing tall,
How does the wise investor choose their prize?
Not beauty's face nor architecture's call,
But numbers speak where lasting profit lies.

The one percent rule serves as faithful guide,
Where monthly rents should match the purchase cost.
Cash flow reveals what ledgers cannot hide—
If monthly gains exceed what you have lost.

Seek neighborhoods where jobs and schools abound,
Where families plant roots and businesses grow.
For empty lots on economically sound
Ground yield more gold than mansions' pretty show.

*Let heart admire, but let the mind decide,*
*For wealth flows where the numbers can't lie.*`,standard:`🏠 Day 3: Finding and Evaluating Your First Rental

Yesterday we learned that leverage risk can destroy wealth as quickly as it creates it, which is why successful investors use conservative ratios and maintain cash reserves. Today we tackle the practical question: how do you find and evaluate rental properties that actually make money?

🧱 **The Concept**
Property evaluation combines market research, financial analysis, and due diligence to identify rentals that generate positive cash flow and long-term appreciation potential.

❓ **Why It Matters**
Most new investors fall in love with properties based on emotion or surface appeal, ignoring the numbers that determine profitability. A beautiful house in a declining neighborhood will lose money, while an ordinary duplex in a growing area with strong rental demand can build wealth for decades. The difference between success and failure lies in systematic evaluation.

⚙️ **How It Works**
Start with market research: identify neighborhoods with job growth, good schools, low crime, and strong rental demand. Use online tools like Rentometer, BiggerPockets calculators, and local MLS data to understand rent ranges. Calculate the 1% rule as a quick screen — monthly rent should equal at least 1% of purchase price ($2,000 rent on a $200,000 property). Then dive deeper with cash flow analysis: subtract all expenses (mortgage, taxes, insurance, maintenance, vacancy allowance, property management) from rental income. For example, a $250,000 duplex renting for $2,800/month with $2,100 in total expenses yields $700 monthly cash flow. Factor in repairs, vacancies, and capital expenditures — successful investors budget 10-15% of rent for each.

📖 **Definitions**
• **1% Rule**: Monthly rent should equal 1% of purchase price as a basic screening tool
• **Cash Flow**: Net rental income after all expenses
• **Cap Rate**: Annual net operating income divided by purchase price
• **Cash-on-Cash Return**: Annual cash flow divided by initial cash invested
• **CapEx**: Capital expenditures for major repairs and replacements

🎯 **Real Estate Wisdom**
The best deals aren't found — they're recognized. Train your eye to see value where others see problems, but never let emotion override the numbers. A deal that doesn't work on paper won't work in reality.

❓ **Tomorrow's Question:**
*Once you've found a promising property, how do you structure the financing to maximize returns while minimizing risk?*`,parable:`Dara had spent weeks watching Hallam inspect properties throughout the village, noting his careful attention to seemingly mundane details. "Master Hallam," she ventured one morning as they stood before a weathered cottage, "how do you choose which properties to purchase when so many seem similar?"

Hallam smiled, producing a worn leather ledger from his coat. "Child, every building tells two stories — one with the heart, one with the mind. The heart sees charm and possibility, but the mind sees numbers and truth." He pointed to the cottage's sagging porch. "Your heart might see character in those warped boards. My mind calculates the cost of replacement and the months of lost rent."

They walked through the village as Hallam demonstrated his method. At each property, he noted the surrounding businesses, counted foot traffic, and observed the condition of neighboring homes. "Location breathes life into property," he explained. "A humble dwelling near the new mill will outperform a mansion by the dying quarry."

Returning to his study, Hallam opened ledgers filled with columns of numbers. "Here lies the secret, Dara. Each property must pass three tests: Will tenants pay enough rent to cover all expenses? Will the property appreciate as the village grows? Can I afford the carrying costs if tenants disappear for months?" He showed her calculations for different properties — some beautiful but unprofitable, others plain but wealth-building.

"The greatest fortunes aren't built on the prettiest properties," Hallam concluded, "but on those that serve their numbers faithfully, month after month, year after year."

**Moral:** *Beauty may catch the eye, but only sound numbers catch wealth.*

*Tomorrow, Dara would learn how Hallam structured his purchases to amplify returns while protecting against disaster...*`},{day:3,title:"Finding and Evaluating Your First Rental Property",date:"2026-03-01",image:"images/real-estate/day-3.jpg",sonnet:`**🪶 Sonnet III: Finding and Evaluating Your First Rental Property**

When seeking stones to build your wealth's foundation,
Let numbers guide your eye, not beauty's gleam,
For monthly rent must match your gold's duration—
The one percent that makes a landlord's dream.

Walk through the streets where workers make their home,
Near schools and trades where steady income flows,
Avoid the grand but empty halls of Rome,
Seek humble dwellings where the profit grows.

Count every coin that leaves your monthly take—
The tax, repair, and vacancy's cruel bite,
Let fifty percent for hidden costs you make,
And what remains shall be your true delight.

*For those who buy with wisdom's careful art,*
*Find riches where the cash flows, not the heart.*`,standard:`🏠 Day 3: Finding and Evaluating Your First Rental Property

Yesterday we learned how leverage risk can destroy investors who don't maintain reserves and use conservative assumptions. Today we answer: How do you actually find and evaluate your first rental property? What numbers matter most when deciding if a deal makes sense?

🧱 **The Concept**
Successful rental property evaluation combines location research, financial analysis, and market fundamentals to identify properties that generate positive cash flow and long-term appreciation.

❓ **Why It Matters**
Most new investors either overpay for properties or buy in weak rental markets, leading to negative cash flow and poor returns. The difference between a good deal and a bad deal often comes down to running the right numbers upfront. A property that looks profitable at first glance can become a money pit when you factor in realistic vacancy rates, maintenance costs, and property management fees.

⚙️ **How It Works**
Start with the 1% rule as a screening tool: monthly rent should equal at least 1% of purchase price. A $150,000 house should rent for $1,500/month minimum. Then calculate cash flow: monthly rent minus mortgage payment, taxes, insurance, vacancy allowance (5-10%), maintenance reserve (5-10%), and property management (8-12% if using a company). Use the 50% rule for quick estimates — expect expenses to eat roughly 50% of gross rental income. Research neighborhoods by driving them, checking crime stats, school ratings, and job growth. Look for properties near employment centers, universities, or growing industries. Always verify rent estimates with comparable properties currently on the market, not outdated listings.

📖 **Definitions**
• **1% Rule**: Monthly rent should equal 1% of purchase price for initial screening
• **Cash Flow**: Monthly rental income minus all expenses including mortgage, taxes, insurance
• **50% Rule**: Estimate that expenses will consume 50% of gross rental income
• **Cap Rate**: Net operating income divided by property value (excludes mortgage)
• **Gross Rent Multiplier (GRM)**: Purchase price divided by annual rental income
• **Comparable Properties (Comps)**: Similar properties used to estimate market rent and value

🎯 **Real Estate Wisdom**
You make money when you buy, not when you sell. A great deal at the wrong price is still a bad investment. Focus on cash flow first, appreciation second — you can't eat equity.

❓ **Tomorrow's Question:**
*What financing options exist beyond traditional mortgages, and how can creative financing help you acquire properties with less money down?*`,parable:`Dara had spent weeks walking through the village, notebook in hand, studying every cottage and shop with the eye of a future landlord. Old Hallam watched her methodical approach with growing approval.

"Tell me, child, what makes a worthy investment?" he asked as they stood before a modest stone cottage near the market square.

Dara consulted her notes. "The miller's family pays twelve silver coins monthly for their cottage by the river. This one is similar but costs only one hundred and twenty gold pieces. That means the rent equals one coin per ten gold pieces invested — what you taught me to call the golden tenth rule."

Hallam nodded. "And what of the numbers beneath?"

"The rent of twelve silver becomes six after I account for repairs, vacant months, and the tax collector's share," Dara replied. "If I borrowed eighty gold pieces at standard terms, the lender would claim four silver monthly. That leaves me two silver coins each month in my purse."

"Wise calculations," Hallam said, leading her to another property. "But what of this grand house near the lord's manor?"

Dara frowned at her figures. "It costs three hundred gold pieces but rents for only twenty silver monthly. The numbers fail your rules entirely. Though it appears more impressive, it would drain my purse each month."

"Many young investors fall for such traps," Hallam warned. "They see grandeur where they should see poverty. The wealthy understand that a humble cottage paying its way surpasses a mansion that devours gold."

As sunset painted the village roofs golden, Dara realized that true wealth came not from owning the finest properties, but from owning the most profitable ones.

The moral: *Judge properties by their purse, not their appearance — for cash flow, not pride, builds lasting wealth.*

Tomorrow, Hallam would reveal the ancient arts of acquiring properties without emptying one's treasury entirely...`},{day:4,title:"Financing Strategies for Maximum Returns",date:"2026-03-01",image:"images/real-estate/day-4.jpg",sonnet:`**🪶 Sonnet IV: Financing Strategies for Maximum Returns**

When silver calls to silver, debt takes wing,
And borrowed gold births wealth beyond compare.
The cautious hoard their coins like miser's ring,
While sages stretch each piece with patient care.

A cottage bought with quarter-weight of gold
Returns but modest gains to careful soul,
Yet same dwelling, with borrowing bold,
Can multiply the investor's control.

The lever's power lies not in the stone,
But how much weight one dares to lift and place.
Each coin not spent can purchase thrones unknown,
While prudent reserves maintain steady grace.

*Thus financing's art: to borrow wide and well,*
*Where measured risk and amplified returns dwell.*`,standard:`🏠 Day 4: Financing Strategies for Maximum Returns

Yesterday we learned that finding profitable rentals requires systematic evaluation using tools like the 1% rule and cash flow analysis. Today we answer the crucial question: how do you structure financing to maximize returns while minimizing risk?

🧱 **The Concept**
Strategic financing involves choosing loan terms, down payment amounts, and debt structures that optimize cash-on-cash returns while maintaining manageable risk levels.

❓ **Why It Matters**
Financing decisions can make or break your investment returns. A 25% down payment might seem safer than 20%, but it ties up more capital and reduces your return on investment. Conversely, minimal down payments increase leverage risk and monthly payments. The key is finding the sweet spot where you maximize returns without overextending yourself financially.

⚙️ **How It Works**
Start with conventional investment property loans requiring 20-25% down, typically offering the best rates for stable borrowers. Compare cash-on-cash returns: a $200,000 property with 20% down ($40,000) generating $500 monthly cash flow yields 15% return, while 25% down ($50,000) with the same cash flow yields only 12%. Consider portfolio lenders for multiple properties, as conventional loans cap at 10 properties. House hacking with owner-occupied financing (3.5% down FHA or 5% conventional) can dramatically boost early returns. For example, a duplex purchased with 3.5% down where you live in one unit can turn a marginal deal profitable. Always maintain 6+ months of reserves and avoid interest-only or variable-rate loans that increase payment risk.

📖 **Definitions**
• **Cash-on-Cash Return**: Annual cash flow divided by total cash invested
• **House Hacking**: Living in a multi-unit property while renting out other units
• **Portfolio Lender**: Banks that keep loans in-house, avoiding conventional loan limits
• **DSCR Loan**: Debt Service Coverage Ratio loans based on property income, not personal income
• **Owner-Occupied Financing**: Lower down payment loans requiring you to live in the property

🎯 **Real Estate Wisdom**
The best financing isn't the lowest rate or payment — it's the structure that maximizes your return on invested capital while keeping you safely leveraged. Every dollar you don't put down can be deployed elsewhere for additional returns.

❓ **Tomorrow's Question:**
*How do you manage your rental properties efficiently while building systems that scale as your portfolio grows?*`,parable:`The morning mist clung to the village square as Dara approached Hallam's weathered oak table, where ledgers lay open like ancient texts. The old landlord's fingers traced columns of numbers, his eyes holding the wisdom of decades spent turning silver into gold.

"Master Hallam," Dara began, her carpenter's pouch jangling with the coins she'd saved, "I've found three properties that pass your tests. But now I'm puzzled — how much of my silver should I place down, and how much should I borrow?"

Hallam's weathered face creased into a knowing smile. "Ah, child, this is where the true artistry lies. Watch." He drew three circles in the dirt with his walking stick. "Imagine three identical cottages, each worth a thousand silver pieces. The first buyer places down two hundred and fifty pieces — cautious, like a merchant who hoards grain in his cellar. The second places two hundred. The third, clever soul, finds a way to place only fifty."

Dara leaned closer as Hallam continued his demonstration. "Each cottage brings in one hundred silver pieces yearly after all expenses. The cautious buyer earns forty pieces profit on his two hundred fifty invested — barely sixteen percent return. The moderate buyer earns forty on two hundred invested — twenty percent. But the clever buyer? Forty pieces profit on fifty invested — eighty percent return!"

"But surely the third buyer faces greater danger?" Dara asked, her carpenter's mind thinking of structures and stability.

Hallam nodded approvingly. "Wisdom speaks through you, daughter. Yes, the clever buyer must ensure the cottage's income covers its debt, with silver set aside for storms and dry seasons. The key is balance — use as little of your own silver as safely possible, for every coin not invested in one cottage can be planted elsewhere to grow."

He gestured toward his vast holdings that stretched beyond the village borders. "I own half this village not because I had the most silver to start, but because I learned to make each silver piece work thrice as hard. Your father builds with wood and nail; we build with borrowed silver and rental gold."

As the sun climbed higher, Hallam's lesson crystallized in Dara's mind like morning dew forming into clear drops. The true craft lay not in hoarding one's resources, but in leveraging them wisely — stretching each silver piece to its furthest reach while maintaining the strength to weather any storm.

Moral: *The wise investor uses leverage not as a crutch, but as a lever — amplifying returns while never forgetting the fulcrum of prudent reserves.*

Tomorrow, Dara would learn the delicate art of managing multiple properties without drowning in their daily demands.`}],Yv=[{day:1,title:"The Hook — Why Stories Grab You",date:"2026-03-01",image:"images/storytelling/day-1.jpg",sonnet:`**🪶 Sonnet I: The Unfinished Thread**

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

*Tomorrow, Osha will teach Pip about the threads themselves — how to weave characters that breathe with life...*`},{day:3,title:"Breathing Life Into Names — The Art of Character Creation",date:"2026-03-01",image:"images/storytelling/day-3.jpg",sonnet:`**🪶 Sonnet III: Breathing Life Into Names**

Upon the page lie names without a heart,
Mere words that wait for breath and blood to flow,
Till contradiction tears their souls apart
And makes them real in ways we truly know.

Not perfect heroes striding toward their fate,
But tangled souls who yearn yet fear to reach,
Who carry flaws that make them small and great,
Whose broken voices have the most to teach.

The coward's courage blooming in despair,
The wise one's blindness to their deepest need,
These warring threads make characters we care
To follow through each triumph and misdeed.

*For in their contradictions we can see*
*The beautifully broken soul in you and me.*`,standard:`📖 Day 3: Breathing Life Into Names — The Art of Character Creation

Structure provides the map for our story's journey, but without compelling characters to follow, even the most elegant plot becomes an empty exercise. **Character creation** is the alchemical process of transforming words on a page into people who feel real enough to love, hate, or root for.

🧱 **The Concept**
Character creation is the craft of building fictional people with inner lives so authentic that readers forget they're constructed from language and imagination.

❓ **Why It Matters**
Readers don't remember plots — they remember how characters made them feel. A character who feels real creates emotional investment, turning passive readers into active participants who care about the outcome. Without authentic characters, even the most thrilling plot becomes forgettable because there's no one to connect with emotionally.

⚙️ **How It Works**
Great characters emerge from the intersection of **desire, obstacle, and contradiction**. First, give them a clear want — not just plot-driven goals, but deep emotional needs. Harry Potter doesn't just want to stop Voldemort; he wants to belong somewhere. Next, create **internal contradictions** that make them human — Sherlock Holmes is brilliant yet socially awkward, Hamlet is decisive in thought but paralyzed in action. Finally, let their **voice and actions** reveal character rather than exposition. Show Scrooge's miserliness through his coal-hoarding, not through telling us he's cheap.

The most memorable characters have **fatal flaws** that drive both their greatest triumphs and devastating failures. Gatsby's romantic idealism makes him both magnificent and doomed. These contradictions create the internal tension that makes characters feel alive — they struggle against themselves as much as external forces.

📖 **Definitions**
• **Character Arc**: The internal journey of change a character undergoes
• **Fatal Flaw**: A character trait that leads to both strength and downfall
• **Internal Contradiction**: Opposing traits within a character that create complexity
• **Voice**: The unique way a character speaks and thinks
• **Motivation**: The deep emotional need driving a character's actions

🎯 **Storytelling Wisdom**
Characters aren't created — they're discovered. The best ones surprise even their creators by making choices that feel inevitable in retrospect yet unexpected in the moment.

❓ **Tomorrow's Question:**
*We have our structure and our characters, but how do we make readers care about what happens next? What transforms mere events into gripping tension that keeps pages turning?*`,parable:`Pip wandered into Osha's weaving chamber just as she held up a half-finished tapestry, its threads hanging loose and unformed. "Look," she said, pointing to empty spaces where figures should be. "See how the pattern means nothing without souls to inhabit it?"

"But how do you give thread a soul?" Pip asked, remembering his own flat characters who moved through his stories like wooden puppets.

Osha smiled and began weaving, her fingers dancing between golden and shadow threads. "Watch." As she worked, a figure began to emerge — not perfect, but beautifully flawed. The thread seemed to shimmer with wanting. "This one desires the sun," she murmured, "but fears the heat. See how the gold threads war with the silver?"

Pip leaned closer. The woven figure seemed almost to breathe, caught between reaching upward and pulling back. "The contradiction makes them... alive."

"Yes," Osha nodded. "Perfect thread makes boring tapestry. It's the snags and tangles, the places where different colors fight, that make us care what happens next." She paused her weaving. "Your characters, Pip — do they want things that frighten them? Do they fight themselves as much as their enemies?"

Pip thought of his abandoned tales, filled with heroes who never doubted, villains who never loved, characters who moved through plots without ever surprising him. "No wonder I can never finish," he whispered. "I've been weaving with perfect thread."

Osha handed him a strand that shimmered between courage and cowardice. "Try again. But this time, let them be beautifully broken."

**Moral**: Characters become real not through perfection, but through the authentic contradictions that make them beautifully, recognizably human.

*Tomorrow, Pip will discover why even the most compelling characters need something more — the invisible force that transforms peaceful scenes into edge-of-your-seat tension...*`},{day:3,title:"The Heart of Story — Creating Characters That Breathe",date:"2026-03-01",image:"images/storytelling/day-3.jpg",sonnet:`**🪶 Sonnet III: The Heart of Story — Creating Characters That Breathe**

Not gods who walk on earth without a flaw,
Nor devils carved from darkness, cold and stark,
But souls who stumble, fall, yet still press on,
With light and shadow wrestling in their heart.

The merchant wants his gold, yet needs true love,
The hero fears the very thing she'd save,
The villain weeps for innocence long lost—
These contradictions make them bold and brave.

For in the cracks where broken mirrors dwell,
We glimpse the truth that perfect glass conceals:
That want and need wage war within us all,
And wounded hearts are what the story heals.

*So craft your players flawed but fierce and true,*
*For broken mirrors best reflect me, you.*`,standard:`📖 Day 3: The Heart of Story — Creating Characters That Breathe

Structure provides the roadmap, but memorable stories live or die by their characters. A character that feels like a real person rather than a plot device has **internal logic** — desires, fears, and contradictions that drive their choices even when those choices surprise us.

🧱 **The Concept**
Great characters have both **external goals** (what they want) and **internal needs** (what they actually require for growth), creating natural conflict within themselves.

❓ **Why It Matters**
Readers don't connect with perfect heroes or pure villains — they connect with people who feel real. Characters with internal contradictions make choices that feel both surprising and inevitable. When we understand a character's deepest fear or desire, their actions carry emotional weight that transcends plot mechanics.

⚙️ **How It Works**
Start with **want versus need**. Harry Potter wants to belong somewhere, but needs to learn that love requires sacrifice. Walter White wants to provide for his family, but needs to confront his pride and fear of insignificance. This tension creates an **internal arc** that mirrors the external plot. Add **contradictory traits** — a brave character who's afraid of intimacy, a kind person with a cruel temper. These contradictions make characters unpredictable yet consistent. Finally, give them a **ghost** — a past wound that explains their behavior without excusing it. Scrooge's loneliness explains his miserliness but doesn't justify it.

📖 **Definitions**
• **External Goal**: What the character consciously wants to achieve
• **Internal Need**: What the character must learn or overcome to grow
• **Character Arc**: The internal journey from one emotional state to another
• **Ghost**: A past wound or trauma that shapes current behavior
• **Contradictory Traits**: Opposing qualities that make characters complex and unpredictable

🎯 **Storytelling Wisdom**
Characters aren't people, but they must feel like people. The best characters are walking contradictions — flawed enough to be human, compelling enough to follow anywhere.

❓ **Tomorrow's Question:**
*You have compelling characters on an emotional journey, but how do you keep readers turning pages? What creates that irresistible forward momentum that makes a story unputdownable?*`,parable:`Pip sat by Osha's loom, watching her weathered fingers work the threads. "I create characters," he said, "but they feel hollow, like puppets dancing on strings."

Osha's shuttle paused mid-weave. "Once," she began, her voice carrying the weight of centuries, "there lived a merchant who sold only mirrors. Each glass showed a perfect reflection — flawless, beautiful, empty. Customers would gaze and see exactly what they expected: themselves without blemish."

She pulled a thread loose, creating a small imperfection in the pattern. "But in the corner of his shop sat a cracked mirror, warped and scarred. This mirror showed truth — the merchant's hidden kindness, his secret shame, his desperate need to be loved despite his greed. People fled from this mirror, for it revealed not just their faces, but their souls."

"One day a child gazed into the cracked glass and laughed with delight. 'Look!' she cried. 'I can see my heart!' The merchant, watching her joy, finally understood. He shattered all his perfect mirrors and learned to love the broken one."

Pip frowned. "But surely people prefer the perfect reflection?"

Osha resumed weaving, incorporating the loose thread into a new pattern. "Your characters, dear bard, are like those perfect mirrors — they show only what the audience expects. But a true character is the cracked glass, revealing contradictions that make us human. Give them wants that war with their needs, virtues that birth their very flaws."

**Moral:** Characters who feel real are beautifully broken — their cracks catch the light and reveal the depths within.

*Tomorrow, Pip discovers why even the most compelling characters need something more to make stories truly irresistible...*`},{day:4,title:"The Invisible Hand — Mastering Tension and Suspense",date:"2026-03-01",image:"images/storytelling/day-4.jpg",sonnet:`**🪶 Sonnet IV: The Invisible Hand**

Between the known and unknown lies the space
Where hearts suspend in sweet uncertainty,
As shadows hint at truths we dare not face
And whispered secrets promise what might be.

The master weaver pulls each careful thread,
Now tight with fear, now slack with fleeting hope,
While readers hang on every word unsaid
And strain against the boundaries of scope.

Like moths drawn to a flame that burns too bright,
We chase the answers dancing just beyond,
Our hunger growing stronger in the night
For revelations we've been dreaming fond.

*In tension's web we willingly are caught,*
*By questions asked and answers never brought.*`,standard:`📖 Day 4: The Invisible Hand — Mastering Tension and Suspense

Yesterday we explored how characters surprise us by making choices that feel inevitable yet unexpected — this unpredictability is the foundation of tension. **Tension** is the invisible force that transforms a sequence of events into a gripping story that readers cannot put down.

🧱 **The Concept**
Tension is the psychological pressure created when readers desperately want to know what happens next, achieved through the strategic withholding and revelation of information.

❓ **Why It Matters**
Tension is the difference between a story someone reads and one they devour. It creates the emotional investment that turns pages into compulsive experiences. Without tension, even the most beautifully written scenes become academic exercises — technically proficient but emotionally inert. Tension transforms readers from passive observers into active participants who feel genuine anxiety about fictional outcomes.

⚙️ **How It Works**
Tension operates on the principle of **delayed gratification** — promising answers while strategically withholding them. Create **dramatic irony** where readers know something characters don't, making every innocent action feel loaded with danger. In *Romeo and Juliet*, we watch Juliet take the sleeping potion knowing Romeo doesn't know the plan. Use **ticking clocks** to create urgency — the bomb that must be defused, the confession that must be made before someone leaves forever. **Raise questions** early and answer them late, but always plant new questions before resolving old ones. The moment all questions are answered, tension dies. Most powerfully, create **moral dilemmas** where characters must choose between competing goods or accept lesser evils — Sophie's choice between her children creates unbearable tension because there's no right answer.

📖 **Definitions**
• **Dramatic Irony**: When readers know something characters don't
• **Ticking Clock**: A deadline that creates urgency and pressure
• **Cliffhanger**: Stopping at a moment of peak uncertainty
• **Foreshadowing**: Hints about future events that create anticipation
• **Red Herring**: False clues that misdirect reader expectations

🎯 **Storytelling Wisdom**
Tension isn't about constant action — it's about the threat of change. A single raised eyebrow can be more suspenseful than an explosion if the stakes are personal enough.

❓ **Tomorrow's Question:**
*We've learned to create tension, but how do we control time itself? What separates scenes that race by from those that drag, and how do master storytellers manipulate the very rhythm of reading?*`,parable:`Pip wandered into the village square where Osha sat at her great loom, threads stretched taut between the wooden frame. Each strand seemed to vibrate with invisible energy, humming like bowstrings drawn but not yet released.

"Master Osha," Pip began, "I can create characters my audience loves, but when I try to tell their stories, people drift away. Their eyes wander. Children fidget. What spell keeps listeners bound to a tale?"

Osha's fingers paused above a particularly tight thread. "Once," she said, "a spider taught a fly about patience. The spider could have caught the fly immediately, but instead it built its web with one strand loose — just loose enough for hope of escape, just tight enough to prevent it."

She pulled gently on the thread, and the entire web section quivered. "The fly struggled beautifully against this single weakness, never knowing the spider had created it deliberately. Each struggle tightened the other threads."

Pip watched as Osha continued weaving, noting how she would tension one thread while leaving another slack, creating an intricate pattern of tight and loose, promise and threat.

"Tell me about this spider's web," he said, beginning to understand.

"Every story is a web," Osha replied, "and every listener is caught between wanting to know and fearing to learn. Pull the thread of curiosity taut, but leave the strand of resolution loose. Let them struggle sweetly against uncertainty — each question they ask tightens their investment in your tale."

She gestured to a section where multiple threads converged in complex tension. "See how these threads support each other? One secret known but not revealed, one danger approaching but not arrived, one choice demanded but not made. The listener hangs suspended between threads of possibility."

Pip realized his previous stories had been all loose threads or all tight ones — either meandering without purpose or resolving too quickly to maintain interest.

**Moral**: *Tension is not the presence of action but the promise of consequence — the art lies not in what you reveal, but in what you make others desperate to discover.*

*Tomorrow, Osha will teach Pip why some threads must be pulled quickly and others slowly, revealing the secret rhythm that makes stories breathe...*`}],Uv=[{day:1,title:"Bids for Connection — The Smallest Unit of Love",date:"2026-03-01",image:"images/building-relationships/day-1.jpg",sonnet:`**🪶 Sonnet I: The Turning Toward**

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

*Tomorrow, the travelers would discover that even fluent speakers of love's languages sometimes find themselves in conflict...*`},{day:3,title:"The Art of Conflict Resolution — Fighting Fair to Grow Closer",date:"2026-03-01",image:"images/building-relationships/day-3.jpg",sonnet:`**🪶 Sonnet III: The Art of Conflict Resolution**

When storm clouds gather in the hearts we share,
And angry words like thunder shake the ground,
The wise don't flee but breathe the heated air,
And seek in conflict what can yet be found.

For disagreement need not break the bond
That joins two souls upon a common quest,
If each can look beyond what they want,
To understand what moves their lover's breast.

Let "I feel" replace "you always" in our speech,
Let curiosity outweigh the need to win,
For in the space where listening hearts can reach,
The seeds of deeper intimacy begin.

*The strongest love is not where fights don't grow,*
*But where two hearts fight fair and closer grow.*`,standard:`💕 Day 3: The Art of Conflict Resolution — Fighting Fair to Grow Closer

Yesterday we explored love languages as emotional dialects that help partners truly connect. Even when couples speak each other's love languages fluently, conflicts still arise. What separates couples who fight and grow stronger from those who fight and break apart is how they handle disagreement.

🧱 **The Concept**
Healthy conflict resolution isn't about avoiding fights — it's about **fighting fair.** This means addressing issues without attacking character, staying focused on solutions, and using conflict as a tool for deeper understanding rather than winning.

❓ **Why It Matters**
Conflict is inevitable in any meaningful relationship because two unique people will naturally have different needs, perspectives, and triggers. Couples who try to avoid conflict often build resentment that eventually explodes. Those who fight destructively erode trust and connection. But couples who learn to fight constructively use disagreements as opportunities to understand each other more deeply and strengthen their bond.

⚙️ **How It Works**
Healthy conflict follows predictable patterns. Instead of saying "You always interrupt me" (character attack), try "I feel unheard when I don't get to finish my thoughts" (feeling statement). Rather than bringing up past grievances, stay focused on the current issue. Use "I" statements instead of "you" accusations. Take breaks when emotions get too heated. For example, if discussing finances becomes heated, one partner might say, "I'm getting too emotional to think clearly. Can we pause for 20 minutes and come back to this?" The goal shifts from being right to being understood and finding solutions together.

📖 **Definitions**
• **Fighting Fair**: Addressing conflict without personal attacks, staying solution-focused
• **Character Attack**: Criticizing who someone is rather than addressing specific behavior
• **Feeling Statement**: Expressing your emotional experience without blaming ("I feel..." vs "You make me...")
• **Repair Attempt**: Small gestures during conflict to prevent escalation or reconnect
• **Emotional Flooding**: When stress hormones overwhelm your ability to think clearly during conflict

🎯 **Relationship Wisdom**
The strongest relationships aren't those without conflict — they're those where both partners feel safe to disagree and confident they'll work through it together.

❓ **Tomorrow's Question:**
*How do you stay emotionally connected to your partner when they're upset, defensive, or shutting down during difficult conversations?*`,parable:`As autumn painted the valley in shades of amber and rust, Ash and Lume found their harmonious journey tested by a fork in the road. Ash insisted the eastern path led to their destination, while Lume was certain the western route was correct. Their voices rose like competing winds, each convinced of their rightness.

Elder Rynn emerged from behind an ancient oak, her weathered hands carrying a peculiar lantern that cast light in two directions. "I have watched countless travelers reach this crossroads," she said, her voice like rustling leaves. "Some part in anger, choosing separate paths and losing each other forever. Others find a way to choose together."

"But we can't both be right," Ash protested, frustration evident in their voice.

"Can't you?" Elder Rynn smiled knowingly. "Tell me, what do you each see that makes you so certain?"

As Ash spoke of familiar landmarks to the east, and Lume described promising signs to the west, something shifted. They began to listen not to defeat each other's arguments, but to understand each other's reasoning. Elder Rynn nodded approvingly as their voices softened from competing monologues into genuine dialogue.

"The strongest bridges," Elder Rynn observed, holding up her dual-light lantern, "are built not by avoiding the chasm, but by spanning it together. Your disagreement is not a wall between you — it is an invitation to build understanding."

With newfound curiosity replacing their defensiveness, Ash and Lume examined both paths together. They discovered that while the eastern route was more familiar, the western path offered better shelter for the coming winter. By honoring both perspectives, they found a solution neither had seen alone: taking the western route but camping at the eastern landmarks Ash remembered for guidance.

As they continued their journey, Elder Rynn's words echoed in their hearts: "Love is not the absence of storms, but the skill to dance together in the rain."

**Moral:** Conflict becomes connection when we fight for understanding rather than victory.

*Tomorrow, we shall discover how Elder Rynn teaches travelers to stay close even when emotions run as wild as winter storms...*`},{day:3,title:"The Art of Fighting Well — Conflict as Connection, Not Combat",date:"2026-03-01",image:"images/building-relationships/day-3.jpg",sonnet:`**🪶 Sonnet III: The Art of Fighting Well**

When tempests rise between two loving hearts,
And words like arrows pierce the tender air,
The wise know conflict's just where healing starts—
Not weapons drawn, but wounds laid gently bare.

For those who fight as partners, not as foes,
Transform each clash to deeper understanding;
They speak their truth while still their respect shows,
And build their love on honest hearts expanding.

"I feel" replaces "You always" in their tongue,
They face the problem, not attack the soul,
And when emotions run too sharp and strong,
They pause, they breathe, they never lose control.

*The strongest bonds aren't forged in perfect peace,*
*But when two hearts make conflict love's increase.*`,standard:`💕 Day 3: The Art of Fighting Well — Conflict as Connection, Not Combat

Yesterday we learned about love languages — speaking your partner's emotional dialect. Even when couples fluently speak each other's love languages, conflicts still arise. The difference between couples who fight and grow stronger versus those who fight and break apart isn't avoiding conflict — it's how they engage with it.

🧱 **The Concept**
Healthy couples don't fight less; they fight better. **Constructive conflict** focuses on solving problems together rather than winning against each other.

❓ **Why It Matters**
Conflict is inevitable when two separate people share a life together — different backgrounds, needs, and perspectives naturally create friction. The goal isn't to eliminate disagreements but to transform them from relationship threats into relationship strengtheners. Couples who master this skill use conflict as a tool for deeper understanding and intimacy.

⚙️ **How It Works**
Destructive fighting attacks the person ("You always..." "You never..."), while constructive conflict addresses the issue ("I feel... when... because..."). Instead of "You're so messy!" try "I feel stressed when the kitchen is cluttered because I can't cook the way I want to." Use **"I" statements** to express your experience rather than attacking their character. Focus on **one specific issue** at a time rather than bringing up past grievances. Take **cooling-off breaks** when emotions run too high. Remember you're partners solving a problem together, not enemies trying to defeat each other.

📖 **Definitions**
• **Constructive Conflict**: Disagreements that strengthen relationships by addressing real issues respectfully
• **"I" Statements**: Expressing your feelings and needs without blaming ("I feel..." vs "You make me...")
• **Kitchen Sinking**: Bringing up every past issue during one argument (avoid this)
• **Cooling-Off Period**: Taking space to calm down before continuing a difficult conversation
• **Repair Attempts**: Small gestures during conflict that prevent escalation and restore connection

🎯 **Relationship Wisdom**
The strongest relationships aren't conflict-free — they're conflict-capable. When you fight for the relationship instead of against each other, every disagreement becomes an opportunity to understand each other more deeply.

❓ **Tomorrow's Question:**
*How do you rebuild trust and connection after a fight — even a good one?*`,parable:`As autumn painted the countryside in shades of gold and crimson, Ash and Lume found themselves walking through a narrow mountain pass where the path split around a massive boulder. For the first time since beginning their journey together, they disagreed about which route to take.

"The left path is clearly safer," Ash insisted, pointing to the wider trail. "Look how well-worn it is."

"But the right path is more direct," Lume countered, studying the steeper route. "We'll reach the valley before nightfall."

Their voices rose as each defended their position, until harsh words began to fly like stones. Just as the disagreement threatened to become destructive, they heard a gentle cough behind them.

Elder Rynn emerged from a grove of ancient oaks, her weathered hands carrying a staff adorned with two intertwined vines. "I have tended the Bridge of Vows for many decades," she said, "and I have seen countless travelers face this very choice. Some storm past each other in anger, taking separate paths and losing each other forever. Others..."

She paused, letting the wisdom settle. "Others remember they chose to travel together for a reason."

Ash and Lume looked at each other, then at the split in the path. Gradually, their defensive stances softened.

"I think," Ash said slowly, "I was afraid the steep path would be too much for both of us."

"And I was worried," Lume admitted, "that the long way would leave us camping in dangerous territory after dark."

Elder Rynn smiled. "Now you speak of the real issue — not which path is right, but how to keep each other safe. When we fight *for* our companion instead of *against* them, every disagreement becomes a chance to understand their heart more deeply."

Together, Ash and Lume studied both paths again, this time seeing not competing options but a shared problem to solve. They chose the middle way — a hidden trail Elder Rynn showed them that balanced safety with speed.

**Moral**: The strongest bonds are forged not in the absence of conflict, but in learning to fight for each other rather than against each other.

As they walked the middle path together, Elder Rynn called after them: "Remember, young travelers — knowing how to disagree well is only half the art. Tomorrow, you must learn how broken trust can be rewoven stronger than before..."`},{day:4,title:"Emotional Attunement — Staying Connected Through the Storm",date:"2026-03-01",image:"images/building-relationships/day-4.jpg",sonnet:`**🪶 Sonnet IV: Emotional Attunement**

When tempests rage within your lover's heart,
And words like lightning strike with fearsome might,
Do not retreat or play defensive part—
Become the beacon in their darkest night.

Their nervous system floods with ancient fear,
Their rational mind drowns beneath the tide,
Yet in this moment you can draw them near
By staying calm while storms rage deep inside.

Lower your voice when theirs begins to rise,
Step closer when they push the world away,
Reflect the pain you witness in their eyes,
And hold the space for what they cannot say.

*For those who stay when souls are tempest-tossed*
*Become the harbor where no love is lost.*`,standard:`💕 Day 4: Emotional Attunement — Staying Connected Through the Storm

Yesterday we learned about fighting fair and using conflict as a growth tool. But what happens when your partner becomes emotionally overwhelmed, defensive, or shuts down completely during these difficult conversations?

🧱 **The Concept**
Emotional attunement is the ability to **tune in** to your partner's emotional state and respond with empathy, even when they're activated or defensive. It's like being an emotional lighthouse — staying calm and connected while your partner navigates rough emotional waters.

❓ **Why It Matters**
When people feel threatened or overwhelmed, their nervous system goes into fight, flight, or freeze mode, making rational conversation nearly impossible. Partners who can recognize these states and respond with compassion rather than escalation help de-escalate conflicts and maintain emotional safety. This creates a secure base where both people can eventually return to productive dialogue.

⚙️ **How It Works**
Emotional attunement starts with recognizing the signs: raised voice, crossed arms, looking away, rapid speech, or complete silence. Instead of matching their energy or getting frustrated, you slow down your own nervous system. Soften your voice, uncross your arms, and validate their experience: "I can see you're really upset about this." You might say, "It seems like you're feeling attacked right now — that's not what I intended." Sometimes simply acknowledging their emotional state helps them feel seen and safe enough to re-engage. If they need space, honor that: "I can see you need some time. I'm here when you're ready."

📖 **Definitions**
• **Emotional Attunement**: Sensing and responding appropriately to your partner's emotional state
• **Nervous System Activation**: Fight, flight, or freeze responses that shut down rational thinking
• **Emotional Validation**: Acknowledging and accepting your partner's feelings without judgment
• **Co-regulation**: The process of helping each other return to emotional calm
• **Secure Base**: Creating safety that allows vulnerability and honest communication

🎯 **Relationship Wisdom**
The partner who can stay emotionally present when things get difficult becomes the anchor that helps both people find their way back to connection.

❓ **Tomorrow's Question:**
*What role does trust play in creating the safety needed for deep emotional intimacy, and how is it built day by day?*`,parable:`As autumn painted the mountains in fire, Ash and Lume found themselves caught in an unexpected storm. The wind howled through the canyon, and what had begun as a simple disagreement about which path to take had escalated into something much deeper.

Lume's voice rose above the wind, words sharp as hail: "You never listen to me! We should have taken the eastern route!" Her face was flushed, arms crossed tight against the cold and her own vulnerability.

Ash felt the familiar surge of defensive fire rise in his chest. Every instinct screamed to match her energy, to defend his choice, to win. But something Elder Rynn had taught them echoed in his mind: *When your companion is lost in the storm of their own emotions, become their lighthouse.*

Instead of raising his voice, Ash lowered it. Instead of stepping back, he stepped closer. "Lume," he said gently, his breath visible in the cold air, "I can see this feels really scary right now. You're worried we're lost."

Something shifted in Lume's eyes. The defensive walls didn't crumble immediately, but they cracked just enough. "I... yes. I'm terrified we'll be caught out here all night."

Ash didn't try to fix or minimize her fear. He simply nodded. "That would be frightening. I'm scared too." He waited, staying present with her storm rather than fleeing from it or fighting it.

Gradually, Lume's shoulders began to soften. Her breathing slowed. The emotional hurricane in her nervous system found its eye, and in that calm center, they could think clearly again.

"Thank you for not leaving me alone in that," she whispered.

"Never," Ash replied. "We weather all storms together."

Elder Rynn would later tell them that the strongest bridges aren't built to avoid storms, but to remain standing through them.

*Moral: True partnership means becoming an anchor of calm when your beloved is tossed by emotional storms, staying connected rather than defensive.*

*Tomorrow, Elder Rynn will reveal how the Bridge of Vows is built one stone of trust at a time...*`}],vh=[{id:"financial-independence",name:"Financial Independence",theme:"Warren Buffett's teachings and mathematical principles",lessons:Nv},{id:"nutrition-science",name:"Nutrition Science",theme:"the science of how food fuels your body, from macronutrients to metabolism",lessons:jv},{id:"negotiation",name:"Negotiation",theme:"FBI hostage negotiation tactics, persuasion psychology, and everyday deal-making",lessons:Lv},{id:"stoic-philosophy",name:"Stoic Philosophy",theme:"ancient Stoic teachings — mental resilience, emotional control, and living with purpose",lessons:_v},{id:"music-theory",name:"Music Theory",theme:"the building blocks of music — notes, scales, chords, rhythm, harmony, and why certain sounds make you feel things",lessons:qv},{id:"real-estate",name:"Real Estate Investing",theme:"building wealth through property — from your first rental to cash flow analysis and passive income",lessons:Wv},{id:"storytelling",name:"Storytelling",theme:"the craft of storytelling — narrative structure, character arcs, tension, pacing, dialogue, and what makes stories unforgettable",lessons:Yv},{id:"building-relationships",name:"Building Relationships",theme:"the science and art of building lasting romantic relationships — communication, love languages, conflict resolution, emotional intelligence, trust, and growing together",lessons:Uv}];function ep(a){return vh.find(r=>r.id===a)}function Fv({open:a,onClose:r}){const s=mn().pathname.split("/")[1]||"";return Z.jsxs(Z.Fragment,{children:[a&&Z.jsx("div",{className:"sidebar-overlay",onClick:r}),Z.jsxs("aside",{className:`sidebar ${a?"open":""}`,children:[Z.jsx("div",{className:"sidebar-header",children:Z.jsx(Pt,{to:"/",className:"sidebar-brand",onClick:r,children:"📜 Parable"})}),Z.jsx("nav",{className:"sidebar-nav",children:vh.map(h=>Z.jsxs(Pt,{to:`/${h.id}`,className:`sidebar-item ${s===h.id?"active":""}`,onClick:r,children:[Z.jsx("span",{className:"sidebar-item-name",children:h.name}),Z.jsx("span",{className:"sidebar-item-count",children:h.lessons.length})]},h.id))})]})]})}function Vv(){return Z.jsxs("div",{className:"container",children:[Z.jsxs("header",{className:"home-header",children:[Z.jsx("h1",{children:"📜 Parable"}),Z.jsx("p",{className:"subtitle",children:"Daily Lessons Through Stories"})]}),Z.jsx("div",{className:"series-grid",children:vh.map(a=>{const r=a.lessons[a.lessons.length-1];return Z.jsxs(Pt,{to:`/${a.id}`,className:"series-card",children:[Z.jsx("h2",{className:"series-card-name",children:a.name}),Z.jsx("p",{className:"series-card-theme",children:a.theme}),Z.jsxs("div",{className:"series-card-meta",children:[Z.jsxs("span",{children:[a.lessons.length," lesson",a.lessons.length!==1?"s":""]}),r&&Z.jsxs("span",{className:"series-card-latest",children:["Latest: ",r.title]})]})]},a.id)})})]})}function Gv(a){return new Date(a+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function Qv(){const{seriesId:a}=Vg(),r=ep(a||"");return r?Z.jsxs("div",{className:"container",children:[Z.jsxs("nav",{className:"breadcrumb",children:[Z.jsx(Pt,{to:"/",className:"nav-link",children:"Home"}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsx("span",{children:r.name})]}),Z.jsxs("header",{className:"home-header",children:[Z.jsx("h1",{children:r.name}),Z.jsx("p",{className:"subtitle",children:r.theme})]}),Z.jsx("div",{className:"lesson-list",children:r.lessons.map(o=>Z.jsxs(Pt,{to:`/${r.id}/lesson/${o.day}`,className:"lesson-card",children:[o.image&&Z.jsx("img",{src:`/parable/${o.image}`,alt:o.title,className:"lesson-card-img"}),Z.jsxs("div",{className:"lesson-card-text",children:[Z.jsxs("span",{className:"lesson-day",children:["Day ",o.day]}),Z.jsx("span",{className:"lesson-title",children:o.title}),Z.jsx("span",{className:"lesson-date",children:Gv(o.date)})]})]},o.day))})]}):Z.jsx(Kg,{to:"/",replace:!0})}function Xv(a,r){const o={};return(a[a.length-1]===""?[...a,""]:a).join((o.padRight?" ":"")+","+(o.padLeft===!1?"":" ")).trim()}const Kv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Zv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jv={};function Km(a,r){return(Jv.jsx?Zv:Kv).test(a)}const Pv=/[ \t\n\f\r]/g;function $v(a){return typeof a=="object"?a.type==="text"?Zm(a.value):!1:Zm(a)}function Zm(a){return a.replace(Pv,"")===""}class Br{constructor(r,o,s){this.normal=o,this.property=r,s&&(this.space=s)}}Br.prototype.normal={};Br.prototype.property={};Br.prototype.space=void 0;function tp(a,r){const o={},s={};for(const h of a)Object.assign(o,h.property),Object.assign(s,h.normal);return new Br(o,s,r)}function ah(a){return a.toLowerCase()}class Mt{constructor(r,o){this.attribute=o,this.property=r}}Mt.prototype.attribute="";Mt.prototype.booleanish=!1;Mt.prototype.boolean=!1;Mt.prototype.commaOrSpaceSeparated=!1;Mt.prototype.commaSeparated=!1;Mt.prototype.defined=!1;Mt.prototype.mustUseProperty=!1;Mt.prototype.number=!1;Mt.prototype.overloadedBoolean=!1;Mt.prototype.property="";Mt.prototype.spaceSeparated=!1;Mt.prototype.space=void 0;let ek=0;const we=za(),at=za(),ih=za(),Q=za(),Ye=za(),vi=za(),jt=za();function za(){return 2**++ek}const rh=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:at,commaOrSpaceSeparated:jt,commaSeparated:vi,number:Q,overloadedBoolean:ih,spaceSeparated:Ye},Symbol.toStringTag,{value:"Module"})),Yu=Object.keys(rh);class kh extends Mt{constructor(r,o,s,h){let c=-1;if(super(r,o),Jm(this,"space",h),typeof s=="number")for(;++c<Yu.length;){const d=Yu[c];Jm(this,Yu[c],(s&rh[d])===rh[d])}}}kh.prototype.defined=!0;function Jm(a,r,o){o&&(a[r]=o)}function xi(a){const r={},o={};for(const[s,h]of Object.entries(a.properties)){const c=new kh(s,a.transform(a.attributes||{},s),h,a.space);a.mustUseProperty&&a.mustUseProperty.includes(s)&&(c.mustUseProperty=!0),r[s]=c,o[ah(s)]=s,o[ah(c.attribute)]=s}return new Br(r,o,a.space)}const np=xi({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Ye,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:Q,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Ye,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:at,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(a,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function ap(a,r){return r in a?a[r]:r}function ip(a,r){return ap(a,r.toLowerCase())}const tk=xi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:vi,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Ye,autoFocus:we,autoPlay:we,blocking:Ye,capture:null,charSet:null,checked:we,cite:null,className:Ye,cols:Q,colSpan:null,content:null,contentEditable:at,controls:we,controlsList:Ye,coords:Q|vi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:ih,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Ye,height:Q,hidden:ih,high:Q,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:we,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:Q,pattern:null,ping:Ye,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Ye,required:we,reversed:we,rows:Q,rowSpan:Q,sandbox:Ye,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:at,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:ip}),nk=xi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:jt,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:vi,g2:vi,glyphName:vi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:jt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:jt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:jt,rev:jt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:jt,requiredFeatures:jt,requiredFonts:jt,requiredFormats:jt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:jt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:jt,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:jt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ap}),rp=xi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,r){return"xlink:"+r.slice(5).toLowerCase()}}),op=xi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ip}),sp=xi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,r){return"xml:"+r.slice(3).toLowerCase()}}),ak={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ik=/[A-Z]/g,Pm=/-[a-z]/g,rk=/^data[-\w.:]+$/i;function ok(a,r){const o=ah(r);let s=r,h=Mt;if(o in a.normal)return a.property[a.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&rk.test(r)){if(r.charAt(4)==="-"){const c=r.slice(5).replace(Pm,lk);s="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=r.slice(4);if(!Pm.test(c)){let d=c.replace(ik,sk);d.charAt(0)!=="-"&&(d="-"+d),r="data"+d}}h=kh}return new h(s,r)}function sk(a){return"-"+a.toLowerCase()}function lk(a){return a.charAt(1).toUpperCase()}const uk=tp([np,tk,rp,op,sp],"html"),Th=tp([np,nk,rp,op,sp],"svg");function hk(a){return a.join(" ").trim()}var wi={},Uu,$m;function ck(){if($m)return Uu;$m=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,o=/^\s*/,s=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,g=/^\s+|\s+$/g,p=`
`,m="/",y="*",w="",T="comment",v="declaration";function H(I,B){if(typeof I!="string")throw new TypeError("First argument must be a string");if(!I)return[];B=B||{};var X=1,F=1;function re(ne){var G=ne.match(r);G&&(X+=G.length);var R=ne.lastIndexOf(p);F=~R?ne.length-R:F+ne.length}function le(){var ne={line:X,column:F};return function(G){return G.position=new _(ne),fe(),G}}function _(ne){this.start=ne,this.end={line:X,column:F},this.source=B.source}_.prototype.content=I;function J(ne){var G=new Error(B.source+":"+X+":"+F+": "+ne);if(G.reason=ne,G.filename=B.source,G.line=X,G.column=F,G.source=I,!B.silent)throw G}function ce(ne){var G=ne.exec(I);if(G){var R=G[0];return re(R),I=I.slice(R.length),G}}function fe(){ce(o)}function be(ne){var G;for(ne=ne||[];G=ee();)G!==!1&&ne.push(G);return ne}function ee(){var ne=le();if(!(m!=I.charAt(0)||y!=I.charAt(1))){for(var G=2;w!=I.charAt(G)&&(y!=I.charAt(G)||m!=I.charAt(G+1));)++G;if(G+=2,w===I.charAt(G-1))return J("End of comment missing");var R=I.slice(2,G-2);return F+=2,re(R),I=I.slice(G),F+=2,ne({type:T,comment:R})}}function $(){var ne=le(),G=ce(s);if(G){if(ee(),!ce(h))return J("property missing ':'");var R=ce(c),V=ne({type:v,property:N(G[0].replace(a,w)),value:R?N(R[0].replace(a,w)):w});return ce(d),V}}function ke(){var ne=[];be(ne);for(var G;G=$();)G!==!1&&(ne.push(G),be(ne));return ne}return fe(),ke()}function N(I){return I?I.replace(g,w):w}return Uu=H,Uu}var eg;function dk(){if(eg)return wi;eg=1;var a=wi&&wi.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=o;const r=a(ck());function o(s,h){let c=null;if(!s||typeof s!="string")return c;const d=(0,r.default)(s),g=typeof h=="function";return d.forEach(p=>{if(p.type!=="declaration")return;const{property:m,value:y}=p;g?h(m,y,p):y&&(c=c||{},c[m]=y)}),c}return wi}var Tr={},tg;function fk(){if(tg)return Tr;tg=1,Object.defineProperty(Tr,"__esModule",{value:!0}),Tr.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,o=/^[^-]+$/,s=/^-(webkit|moz|ms|o|khtml)-/,h=/^-(ms)-/,c=function(m){return!m||o.test(m)||a.test(m)},d=function(m,y){return y.toUpperCase()},g=function(m,y){return"".concat(y,"-")},p=function(m,y){return y===void 0&&(y={}),c(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(h,g):m=m.replace(s,g),m.replace(r,d))};return Tr.camelCase=p,Tr}var Sr,ng;function mk(){if(ng)return Sr;ng=1;var a=Sr&&Sr.__importDefault||function(h){return h&&h.__esModule?h:{default:h}},r=a(dk()),o=fk();function s(h,c){var d={};return!h||typeof h!="string"||(0,r.default)(h,function(g,p){g&&p&&(d[(0,o.camelCase)(g,c)]=p)}),d}return s.default=s,Sr=s,Sr}var gk=mk();const pk=Bg(gk),lp=up("end"),Sh=up("start");function up(a){return r;function r(o){const s=o&&o.position&&o.position[a]||{};if(typeof s.line=="number"&&s.line>0&&typeof s.column=="number"&&s.column>0)return{line:s.line,column:s.column,offset:typeof s.offset=="number"&&s.offset>-1?s.offset:void 0}}}function yk(a){const r=Sh(a),o=lp(a);if(r&&o)return{start:r,end:o}}function Ar(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?ag(a.position):"start"in a||"end"in a?ag(a):"line"in a||"column"in a?oh(a):""}function oh(a){return ig(a&&a.line)+":"+ig(a&&a.column)}function ag(a){return oh(a&&a.start)+"-"+oh(a&&a.end)}function ig(a){return a&&typeof a=="number"?a:1}class mt extends Error{constructor(r,o,s){super(),typeof o=="string"&&(s=o,o=void 0);let h="",c={},d=!1;if(o&&("line"in o&&"column"in o?c={place:o}:"start"in o&&"end"in o?c={place:o}:"type"in o?c={ancestors:[o],place:o.position}:c={...o}),typeof r=="string"?h=r:!c.cause&&r&&(d=!0,h=r.message,c.cause=r),!c.ruleId&&!c.source&&typeof s=="string"){const p=s.indexOf(":");p===-1?c.ruleId=s:(c.source=s.slice(0,p),c.ruleId=s.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const g=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=g?g.column:void 0,this.fatal=void 0,this.file="",this.message=h,this.line=g?g.line:void 0,this.name=Ar(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=d&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const xh={}.hasOwnProperty,wk=new Map,bk=/[A-Z]/g,vk=new Set(["table","tbody","thead","tfoot","tr"]),kk=new Set(["td","th"]),hp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Tk(a,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const o=r.filePath||void 0;let s;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");s=Dk(o,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");s=zk(o,r.jsx,r.jsxs)}const h={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:s,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:o,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?Th:uk,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},c=cp(h,a,void 0);return c&&typeof c!="string"?c:h.create(a,h.Fragment,{children:c||void 0},void 0)}function cp(a,r,o){if(r.type==="element")return Sk(a,r,o);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return xk(a,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Ak(a,r,o);if(r.type==="mdxjsEsm")return Ek(a,r);if(r.type==="root")return Ck(a,r,o);if(r.type==="text")return Mk(a,r)}function Sk(a,r,o){const s=a.schema;let h=s;r.tagName.toLowerCase()==="svg"&&s.space==="html"&&(h=Th,a.schema=h),a.ancestors.push(r);const c=fp(a,r.tagName,!1),d=Rk(a,r);let g=Ah(a,r);return vk.has(r.tagName)&&(g=g.filter(function(p){return typeof p=="string"?!$v(p):!0})),dp(a,d,c,r),Eh(d,g),a.ancestors.pop(),a.schema=s,a.create(r,c,d,o)}function xk(a,r){if(r.data&&r.data.estree&&a.evaluater){const s=r.data.estree.body[0];return s.type,a.evaluater.evaluateExpression(s.expression)}Dr(a,r.position)}function Ek(a,r){if(r.data&&r.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(r.data.estree);Dr(a,r.position)}function Ak(a,r,o){const s=a.schema;let h=s;r.name==="svg"&&s.space==="html"&&(h=Th,a.schema=h),a.ancestors.push(r);const c=r.name===null?a.Fragment:fp(a,r.name,!0),d=Ik(a,r),g=Ah(a,r);return dp(a,d,c,r),Eh(d,g),a.ancestors.pop(),a.schema=s,a.create(r,c,d,o)}function Ck(a,r,o){const s={};return Eh(s,Ah(a,r)),a.create(r,a.Fragment,s,o)}function Mk(a,r){return r.value}function dp(a,r,o,s){typeof o!="string"&&o!==a.Fragment&&a.passNode&&(r.node=s)}function Eh(a,r){if(r.length>0){const o=r.length>1?r:r[0];o&&(a.children=o)}}function zk(a,r,o){return s;function s(h,c,d,g){const m=Array.isArray(d.children)?o:r;return g?m(c,d,g):m(c,d)}}function Dk(a,r){return o;function o(s,h,c,d){const g=Array.isArray(c.children),p=Sh(s);return r(h,c,d,g,{columnNumber:p?p.column-1:void 0,fileName:a,lineNumber:p?p.line:void 0},void 0)}}function Rk(a,r){const o={};let s,h;for(h in r.properties)if(h!=="children"&&xh.call(r.properties,h)){const c=Bk(a,h,r.properties[h]);if(c){const[d,g]=c;a.tableCellAlignToStyle&&d==="align"&&typeof g=="string"&&kk.has(r.tagName)?s=g:o[d]=g}}if(s){const c=o.style||(o.style={});c[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=s}return o}function Ik(a,r){const o={};for(const s of r.attributes)if(s.type==="mdxJsxExpressionAttribute")if(s.data&&s.data.estree&&a.evaluater){const c=s.data.estree.body[0];c.type;const d=c.expression;d.type;const g=d.properties[0];g.type,Object.assign(o,a.evaluater.evaluateExpression(g.argument))}else Dr(a,r.position);else{const h=s.name;let c;if(s.value&&typeof s.value=="object")if(s.value.data&&s.value.data.estree&&a.evaluater){const g=s.value.data.estree.body[0];g.type,c=a.evaluater.evaluateExpression(g.expression)}else Dr(a,r.position);else c=s.value===null?!0:s.value;o[h]=c}return o}function Ah(a,r){const o=[];let s=-1;const h=a.passKeys?new Map:wk;for(;++s<r.children.length;){const c=r.children[s];let d;if(a.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const m=h.get(p)||0;d=p+"-"+m,h.set(p,m+1)}}const g=cp(a,c,d);g!==void 0&&o.push(g)}return o}function Bk(a,r,o){const s=ok(a.schema,r);if(!(o==null||typeof o=="number"&&Number.isNaN(o))){if(Array.isArray(o)&&(o=s.commaSeparated?Xv(o):hk(o)),s.property==="style"){let h=typeof o=="object"?o:Ok(a,String(o));return a.stylePropertyNameCase==="css"&&(h=Hk(h)),["style",h]}return[a.elementAttributeNameCase==="react"&&s.space?ak[s.property]||s.property:s.attribute,o]}}function Ok(a,r){try{return pk(r,{reactCompat:!0})}catch(o){if(a.ignoreInvalidStyle)return{};const s=o,h=new mt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:s,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw h.file=a.filePath||void 0,h.url=hp+"#cannot-parse-style-attribute",h}}function fp(a,r,o){let s;if(!o)s={type:"Literal",value:r};else if(r.includes(".")){const h=r.split(".");let c=-1,d;for(;++c<h.length;){const g=Km(h[c])?{type:"Identifier",name:h[c]}:{type:"Literal",value:h[c]};d=d?{type:"MemberExpression",object:d,property:g,computed:!!(c&&g.type==="Literal"),optional:!1}:g}s=d}else s=Km(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(s.type==="Literal"){const h=s.value;return xh.call(a.components,h)?a.components[h]:h}if(a.evaluater)return a.evaluater.evaluateExpression(s);Dr(a)}function Dr(a,r){const o=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw o.file=a.filePath||void 0,o.url=hp+"#cannot-handle-mdx-estrees-without-createevaluater",o}function Hk(a){const r={};let o;for(o in a)xh.call(a,o)&&(r[Nk(o)]=a[o]);return r}function Nk(a){let r=a.replace(bk,jk);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function jk(a){return"-"+a.toLowerCase()}const Fu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Lk={};function _k(a,r){const o=Lk,s=typeof o.includeImageAlt=="boolean"?o.includeImageAlt:!0,h=typeof o.includeHtml=="boolean"?o.includeHtml:!0;return mp(a,s,h)}function mp(a,r,o){if(qk(a)){if("value"in a)return a.type==="html"&&!o?"":a.value;if(r&&"alt"in a&&a.alt)return a.alt;if("children"in a)return rg(a.children,r,o)}return Array.isArray(a)?rg(a,r,o):""}function rg(a,r,o){const s=[];let h=-1;for(;++h<a.length;)s[h]=mp(a[h],r,o);return s.join("")}function qk(a){return!!(a&&typeof a=="object")}const og=document.createElement("i");function Ch(a){const r="&"+a+";";og.innerHTML=r;const o=og.textContent;return o.charCodeAt(o.length-1)===59&&a!=="semi"||o===r?!1:o}function fn(a,r,o,s){const h=a.length;let c=0,d;if(r<0?r=-r>h?0:h+r:r=r>h?h:r,o=o>0?o:0,s.length<1e4)d=Array.from(s),d.unshift(r,o),a.splice(...d);else for(o&&a.splice(r,o);c<s.length;)d=s.slice(c,c+1e4),d.unshift(r,0),a.splice(...d),c+=1e4,r+=1e4}function Jt(a,r){return a.length>0?(fn(a,a.length,0,r),a):r}const sg={}.hasOwnProperty;function Wk(a){const r={};let o=-1;for(;++o<a.length;)Yk(r,a[o]);return r}function Yk(a,r){let o;for(o in r){const h=(sg.call(a,o)?a[o]:void 0)||(a[o]={}),c=r[o];let d;if(c)for(d in c){sg.call(h,d)||(h[d]=[]);const g=c[d];Uk(h[d],Array.isArray(g)?g:g?[g]:[])}}}function Uk(a,r){let o=-1;const s=[];for(;++o<r.length;)(r[o].add==="after"?a:s).push(r[o]);fn(a,0,0,s)}function gp(a,r){const o=Number.parseInt(a,r);return o<9||o===11||o>13&&o<32||o>126&&o<160||o>55295&&o<57344||o>64975&&o<65008||(o&65535)===65535||(o&65535)===65534||o>1114111?"�":String.fromCodePoint(o)}function ki(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=ua(/[A-Za-z]/),Lt=ua(/[\dA-Za-z]/),Fk=ua(/[#-'*+\--9=?A-Z^-~]/);function sh(a){return a!==null&&(a<32||a===127)}const lh=ua(/\d/),Vk=ua(/[\dA-Fa-f]/),Gk=ua(/[!-/:-@[-`{-~]/);function me(a){return a!==null&&a<-2}function Ct(a){return a!==null&&(a<0||a===32)}function Ie(a){return a===-2||a===-1||a===32}const Qk=ua(new RegExp("\\p{P}|\\p{S}","u")),Xk=ua(/\s/);function ua(a){return r;function r(o){return o!==null&&o>-1&&a.test(String.fromCharCode(o))}}function Ei(a){const r=[];let o=-1,s=0,h=0;for(;++o<a.length;){const c=a.charCodeAt(o);let d="";if(c===37&&Lt(a.charCodeAt(o+1))&&Lt(a.charCodeAt(o+2)))h=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(d=String.fromCharCode(c));else if(c>55295&&c<57344){const g=a.charCodeAt(o+1);c<56320&&g>56319&&g<57344?(d=String.fromCharCode(c,g),h=1):d="�"}else d=String.fromCharCode(c);d&&(r.push(a.slice(s,o),encodeURIComponent(d)),s=o+h+1,d=""),h&&(o+=h,h=0)}return r.join("")+a.slice(s)}function Ue(a,r,o,s){const h=s?s-1:Number.POSITIVE_INFINITY;let c=0;return d;function d(p){return Ie(p)?(a.enter(o),g(p)):r(p)}function g(p){return Ie(p)&&c++<h?(a.consume(p),g):(a.exit(o),r(p))}}const Kk={tokenize:Zk};function Zk(a){const r=a.attempt(this.parser.constructs.contentInitial,s,h);let o;return r;function s(g){if(g===null){a.consume(g);return}return a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),Ue(a,r,"linePrefix")}function h(g){return a.enter("paragraph"),c(g)}function c(g){const p=a.enter("chunkText",{contentType:"text",previous:o});return o&&(o.next=p),o=p,d(g)}function d(g){if(g===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(g);return}return me(g)?(a.consume(g),a.exit("chunkText"),c):(a.consume(g),d)}}const Jk={tokenize:Pk},lg={tokenize:$k};function Pk(a){const r=this,o=[];let s=0,h,c,d;return g;function g(F){if(s<o.length){const re=o[s];return r.containerState=re[1],a.attempt(re[0].continuation,p,m)(F)}return m(F)}function p(F){if(s++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,h&&X();const re=r.events.length;let le=re,_;for(;le--;)if(r.events[le][0]==="exit"&&r.events[le][1].type==="chunkFlow"){_=r.events[le][1].end;break}B(s);let J=re;for(;J<r.events.length;)r.events[J][1].end={..._},J++;return fn(r.events,le+1,0,r.events.slice(re)),r.events.length=J,m(F)}return g(F)}function m(F){if(s===o.length){if(!h)return T(F);if(h.currentConstruct&&h.currentConstruct.concrete)return H(F);r.interrupt=!!(h.currentConstruct&&!h._gfmTableDynamicInterruptHack)}return r.containerState={},a.check(lg,y,w)(F)}function y(F){return h&&X(),B(s),T(F)}function w(F){return r.parser.lazy[r.now().line]=s!==o.length,d=r.now().offset,H(F)}function T(F){return r.containerState={},a.attempt(lg,v,H)(F)}function v(F){return s++,o.push([r.currentConstruct,r.containerState]),T(F)}function H(F){if(F===null){h&&X(),B(0),a.consume(F);return}return h=h||r.parser.flow(r.now()),a.enter("chunkFlow",{_tokenizer:h,contentType:"flow",previous:c}),N(F)}function N(F){if(F===null){I(a.exit("chunkFlow"),!0),B(0),a.consume(F);return}return me(F)?(a.consume(F),I(a.exit("chunkFlow")),s=0,r.interrupt=void 0,g):(a.consume(F),N)}function I(F,re){const le=r.sliceStream(F);if(re&&le.push(null),F.previous=c,c&&(c.next=F),c=F,h.defineSkip(F.start),h.write(le),r.parser.lazy[F.start.line]){let _=h.events.length;for(;_--;)if(h.events[_][1].start.offset<d&&(!h.events[_][1].end||h.events[_][1].end.offset>d))return;const J=r.events.length;let ce=J,fe,be;for(;ce--;)if(r.events[ce][0]==="exit"&&r.events[ce][1].type==="chunkFlow"){if(fe){be=r.events[ce][1].end;break}fe=!0}for(B(s),_=J;_<r.events.length;)r.events[_][1].end={...be},_++;fn(r.events,ce+1,0,r.events.slice(J)),r.events.length=_}}function B(F){let re=o.length;for(;re-- >F;){const le=o[re];r.containerState=le[1],le[0].exit.call(r,a)}o.length=F}function X(){h.write([null]),c=void 0,h=void 0,r.containerState._closeFlow=void 0}}function $k(a,r,o){return Ue(a,a.attempt(this.parser.constructs.document,r,o),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ug(a){if(a===null||Ct(a)||Xk(a))return 1;if(Qk(a))return 2}function Mh(a,r,o){const s=[];let h=-1;for(;++h<a.length;){const c=a[h].resolveAll;c&&!s.includes(c)&&(r=c(r,o),s.push(c))}return r}const uh={name:"attention",resolveAll:eT,tokenize:tT};function eT(a,r){let o=-1,s,h,c,d,g,p,m,y;for(;++o<a.length;)if(a[o][0]==="enter"&&a[o][1].type==="attentionSequence"&&a[o][1]._close){for(s=o;s--;)if(a[s][0]==="exit"&&a[s][1].type==="attentionSequence"&&a[s][1]._open&&r.sliceSerialize(a[s][1]).charCodeAt(0)===r.sliceSerialize(a[o][1]).charCodeAt(0)){if((a[s][1]._close||a[o][1]._open)&&(a[o][1].end.offset-a[o][1].start.offset)%3&&!((a[s][1].end.offset-a[s][1].start.offset+a[o][1].end.offset-a[o][1].start.offset)%3))continue;p=a[s][1].end.offset-a[s][1].start.offset>1&&a[o][1].end.offset-a[o][1].start.offset>1?2:1;const w={...a[s][1].end},T={...a[o][1].start};hg(w,-p),hg(T,p),d={type:p>1?"strongSequence":"emphasisSequence",start:w,end:{...a[s][1].end}},g={type:p>1?"strongSequence":"emphasisSequence",start:{...a[o][1].start},end:T},c={type:p>1?"strongText":"emphasisText",start:{...a[s][1].end},end:{...a[o][1].start}},h={type:p>1?"strong":"emphasis",start:{...d.start},end:{...g.end}},a[s][1].end={...d.start},a[o][1].start={...g.end},m=[],a[s][1].end.offset-a[s][1].start.offset&&(m=Jt(m,[["enter",a[s][1],r],["exit",a[s][1],r]])),m=Jt(m,[["enter",h,r],["enter",d,r],["exit",d,r],["enter",c,r]]),m=Jt(m,Mh(r.parser.constructs.insideSpan.null,a.slice(s+1,o),r)),m=Jt(m,[["exit",c,r],["enter",g,r],["exit",g,r],["exit",h,r]]),a[o][1].end.offset-a[o][1].start.offset?(y=2,m=Jt(m,[["enter",a[o][1],r],["exit",a[o][1],r]])):y=0,fn(a,s-1,o-s+3,m),o=s+m.length-y-2;break}}for(o=-1;++o<a.length;)a[o][1].type==="attentionSequence"&&(a[o][1].type="data");return a}function tT(a,r){const o=this.parser.constructs.attentionMarkers.null,s=this.previous,h=ug(s);let c;return d;function d(p){return c=p,a.enter("attentionSequence"),g(p)}function g(p){if(p===c)return a.consume(p),g;const m=a.exit("attentionSequence"),y=ug(p),w=!y||y===2&&h||o.includes(p),T=!h||h===2&&y||o.includes(s);return m._open=!!(c===42?w:w&&(h||!T)),m._close=!!(c===42?T:T&&(y||!w)),r(p)}}function hg(a,r){a.column+=r,a.offset+=r,a._bufferIndex+=r}const nT={name:"autolink",tokenize:aT};function aT(a,r,o){let s=0;return h;function h(v){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),c}function c(v){return cn(v)?(a.consume(v),d):v===64?o(v):m(v)}function d(v){return v===43||v===45||v===46||Lt(v)?(s=1,g(v)):m(v)}function g(v){return v===58?(a.consume(v),s=0,p):(v===43||v===45||v===46||Lt(v))&&s++<32?(a.consume(v),g):(s=0,m(v))}function p(v){return v===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),r):v===null||v===32||v===60||sh(v)?o(v):(a.consume(v),p)}function m(v){return v===64?(a.consume(v),y):Fk(v)?(a.consume(v),m):o(v)}function y(v){return Lt(v)?w(v):o(v)}function w(v){return v===46?(a.consume(v),s=0,y):v===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),r):T(v)}function T(v){if((v===45||Lt(v))&&s++<63){const H=v===45?T:w;return a.consume(v),H}return o(v)}}const gs={partial:!0,tokenize:iT};function iT(a,r,o){return s;function s(c){return Ie(c)?Ue(a,h,"linePrefix")(c):h(c)}function h(c){return c===null||me(c)?r(c):o(c)}}const pp={continuation:{tokenize:oT},exit:sT,name:"blockQuote",tokenize:rT};function rT(a,r,o){const s=this;return h;function h(d){if(d===62){const g=s.containerState;return g.open||(a.enter("blockQuote",{_container:!0}),g.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),c}return o(d)}function c(d){return Ie(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),r):(a.exit("blockQuotePrefix"),r(d))}}function oT(a,r,o){const s=this;return h;function h(d){return Ie(d)?Ue(a,c,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):c(d)}function c(d){return a.attempt(pp,r,o)(d)}}function sT(a){a.exit("blockQuote")}const yp={name:"characterEscape",tokenize:lT};function lT(a,r,o){return s;function s(c){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(c),a.exit("escapeMarker"),h}function h(c){return Gk(c)?(a.enter("characterEscapeValue"),a.consume(c),a.exit("characterEscapeValue"),a.exit("characterEscape"),r):o(c)}}const wp={name:"characterReference",tokenize:uT};function uT(a,r,o){const s=this;let h=0,c,d;return g;function g(w){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),p}function p(w){return w===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(w),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),c=31,d=Lt,y(w))}function m(w){return w===88||w===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(w),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),c=6,d=Vk,y):(a.enter("characterReferenceValue"),c=7,d=lh,y(w))}function y(w){if(w===59&&h){const T=a.exit("characterReferenceValue");return d===Lt&&!Ch(s.sliceSerialize(T))?o(w):(a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),a.exit("characterReference"),r)}return d(w)&&h++<c?(a.consume(w),y):o(w)}}const cg={partial:!0,tokenize:cT},dg={concrete:!0,name:"codeFenced",tokenize:hT};function hT(a,r,o){const s=this,h={partial:!0,tokenize:le};let c=0,d=0,g;return p;function p(_){return m(_)}function m(_){const J=s.events[s.events.length-1];return c=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,g=_,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(_)}function y(_){return _===g?(d++,a.consume(_),y):d<3?o(_):(a.exit("codeFencedFenceSequence"),Ie(_)?Ue(a,w,"whitespace")(_):w(_))}function w(_){return _===null||me(_)?(a.exit("codeFencedFence"),s.interrupt?r(_):a.check(cg,N,re)(_)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),T(_))}function T(_){return _===null||me(_)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),w(_)):Ie(_)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ue(a,v,"whitespace")(_)):_===96&&_===g?o(_):(a.consume(_),T)}function v(_){return _===null||me(_)?w(_):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),H(_))}function H(_){return _===null||me(_)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),w(_)):_===96&&_===g?o(_):(a.consume(_),H)}function N(_){return a.attempt(h,re,I)(_)}function I(_){return a.enter("lineEnding"),a.consume(_),a.exit("lineEnding"),B}function B(_){return c>0&&Ie(_)?Ue(a,X,"linePrefix",c+1)(_):X(_)}function X(_){return _===null||me(_)?a.check(cg,N,re)(_):(a.enter("codeFlowValue"),F(_))}function F(_){return _===null||me(_)?(a.exit("codeFlowValue"),X(_)):(a.consume(_),F)}function re(_){return a.exit("codeFenced"),r(_)}function le(_,J,ce){let fe=0;return be;function be(G){return _.enter("lineEnding"),_.consume(G),_.exit("lineEnding"),ee}function ee(G){return _.enter("codeFencedFence"),Ie(G)?Ue(_,$,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(G):$(G)}function $(G){return G===g?(_.enter("codeFencedFenceSequence"),ke(G)):ce(G)}function ke(G){return G===g?(fe++,_.consume(G),ke):fe>=d?(_.exit("codeFencedFenceSequence"),Ie(G)?Ue(_,ne,"whitespace")(G):ne(G)):ce(G)}function ne(G){return G===null||me(G)?(_.exit("codeFencedFence"),J(G)):ce(G)}}}function cT(a,r,o){const s=this;return h;function h(d){return d===null?o(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c)}function c(d){return s.parser.lazy[s.now().line]?o(d):r(d)}}const Vu={name:"codeIndented",tokenize:fT},dT={partial:!0,tokenize:mT};function fT(a,r,o){const s=this;return h;function h(m){return a.enter("codeIndented"),Ue(a,c,"linePrefix",5)(m)}function c(m){const y=s.events[s.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(m):o(m)}function d(m){return m===null?p(m):me(m)?a.attempt(dT,d,p)(m):(a.enter("codeFlowValue"),g(m))}function g(m){return m===null||me(m)?(a.exit("codeFlowValue"),d(m)):(a.consume(m),g)}function p(m){return a.exit("codeIndented"),r(m)}}function mT(a,r,o){const s=this;return h;function h(d){return s.parser.lazy[s.now().line]?o(d):me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),h):Ue(a,c,"linePrefix",5)(d)}function c(d){const g=s.events[s.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?r(d):me(d)?h(d):o(d)}}const gT={name:"codeText",previous:yT,resolve:pT,tokenize:wT};function pT(a){let r=a.length-4,o=3,s,h;if((a[o][1].type==="lineEnding"||a[o][1].type==="space")&&(a[r][1].type==="lineEnding"||a[r][1].type==="space")){for(s=o;++s<r;)if(a[s][1].type==="codeTextData"){a[o][1].type="codeTextPadding",a[r][1].type="codeTextPadding",o+=2,r-=2;break}}for(s=o-1,r++;++s<=r;)h===void 0?s!==r&&a[s][1].type!=="lineEnding"&&(h=s):(s===r||a[s][1].type==="lineEnding")&&(a[h][1].type="codeTextData",s!==h+2&&(a[h][1].end=a[s-1][1].end,a.splice(h+2,s-h-2),r-=s-h-2,s=h+2),h=void 0);return a}function yT(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function wT(a,r,o){let s=0,h,c;return d;function d(w){return a.enter("codeText"),a.enter("codeTextSequence"),g(w)}function g(w){return w===96?(a.consume(w),s++,g):(a.exit("codeTextSequence"),p(w))}function p(w){return w===null?o(w):w===32?(a.enter("space"),a.consume(w),a.exit("space"),p):w===96?(c=a.enter("codeTextSequence"),h=0,y(w)):me(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),p):(a.enter("codeTextData"),m(w))}function m(w){return w===null||w===32||w===96||me(w)?(a.exit("codeTextData"),p(w)):(a.consume(w),m)}function y(w){return w===96?(a.consume(w),h++,y):h===s?(a.exit("codeTextSequence"),a.exit("codeText"),r(w)):(c.type="codeTextData",m(w))}}class bT{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,o){const s=o??Number.POSITIVE_INFINITY;return s<this.left.length?this.left.slice(r,s):r>this.left.length?this.right.slice(this.right.length-s+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-s+this.left.length).reverse())}splice(r,o,s){const h=o||0;this.setCursor(Math.trunc(r));const c=this.right.splice(this.right.length-h,Number.POSITIVE_INFINITY);return s&&xr(this.left,s),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),xr(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),xr(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const o=this.left.splice(r,Number.POSITIVE_INFINITY);xr(this.right,o.reverse())}else{const o=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);xr(this.left,o.reverse())}}}function xr(a,r){let o=0;if(r.length<1e4)a.push(...r);else for(;o<r.length;)a.push(...r.slice(o,o+1e4)),o+=1e4}function bp(a){const r={};let o=-1,s,h,c,d,g,p,m;const y=new bT(a);for(;++o<y.length;){for(;o in r;)o=r[o];if(s=y.get(o),o&&s[1].type==="chunkFlow"&&y.get(o-1)[1].type==="listItemPrefix"&&(p=s[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(s[0]==="enter")s[1].contentType&&(Object.assign(r,vT(y,o)),o=r[o],m=!0);else if(s[1]._container){for(c=o,h=void 0;c--;)if(d=y.get(c),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(h&&(y.get(h)[1].type="lineEndingBlank"),d[1].type="lineEnding",h=c);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;h&&(s[1].end={...y.get(h)[1].start},g=y.slice(h,o),g.unshift(s),y.splice(h,o-h+1,g))}}return fn(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function vT(a,r){const o=a.get(r)[1],s=a.get(r)[2];let h=r-1;const c=[];let d=o._tokenizer;d||(d=s.parser[o.contentType](o.start),o._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const g=d.events,p=[],m={};let y,w,T=-1,v=o,H=0,N=0;const I=[N];for(;v;){for(;a.get(++h)[1]!==v;);c.push(h),v._tokenizer||(y=s.sliceStream(v),v.next||y.push(null),w&&d.defineSkip(v.start),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),w=v,v=v.next}for(v=o;++T<g.length;)g[T][0]==="exit"&&g[T-1][0]==="enter"&&g[T][1].type===g[T-1][1].type&&g[T][1].start.line!==g[T][1].end.line&&(N=T+1,I.push(N),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(d.events=[],v?(v._tokenizer=void 0,v.previous=void 0):I.pop(),T=I.length;T--;){const B=g.slice(I[T],I[T+1]),X=c.pop();p.push([X,X+B.length-1]),a.splice(X,2,B)}for(p.reverse(),T=-1;++T<p.length;)m[H+p[T][0]]=H+p[T][1],H+=p[T][1]-p[T][0]-1;return m}const kT={resolve:ST,tokenize:xT},TT={partial:!0,tokenize:ET};function ST(a){return bp(a),a}function xT(a,r){let o;return s;function s(g){return a.enter("content"),o=a.enter("chunkContent",{contentType:"content"}),h(g)}function h(g){return g===null?c(g):me(g)?a.check(TT,d,c)(g):(a.consume(g),h)}function c(g){return a.exit("chunkContent"),a.exit("content"),r(g)}function d(g){return a.consume(g),a.exit("chunkContent"),o.next=a.enter("chunkContent",{contentType:"content",previous:o}),o=o.next,h}}function ET(a,r,o){const s=this;return h;function h(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ue(a,c,"linePrefix")}function c(d){if(d===null||me(d))return o(d);const g=s.events[s.events.length-1];return!s.parser.constructs.disable.null.includes("codeIndented")&&g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?r(d):a.interrupt(s.parser.constructs.flow,o,r)(d)}}function vp(a,r,o,s,h,c,d,g,p){const m=p||Number.POSITIVE_INFINITY;let y=0;return w;function w(B){return B===60?(a.enter(s),a.enter(h),a.enter(c),a.consume(B),a.exit(c),T):B===null||B===32||B===41||sh(B)?o(B):(a.enter(s),a.enter(d),a.enter(g),a.enter("chunkString",{contentType:"string"}),N(B))}function T(B){return B===62?(a.enter(c),a.consume(B),a.exit(c),a.exit(h),a.exit(s),r):(a.enter(g),a.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===62?(a.exit("chunkString"),a.exit(g),T(B)):B===null||B===60||me(B)?o(B):(a.consume(B),B===92?H:v)}function H(B){return B===60||B===62||B===92?(a.consume(B),v):v(B)}function N(B){return!y&&(B===null||B===41||Ct(B))?(a.exit("chunkString"),a.exit(g),a.exit(d),a.exit(s),r(B)):y<m&&B===40?(a.consume(B),y++,N):B===41?(a.consume(B),y--,N):B===null||B===32||B===40||sh(B)?o(B):(a.consume(B),B===92?I:N)}function I(B){return B===40||B===41||B===92?(a.consume(B),N):N(B)}}function kp(a,r,o,s,h,c){const d=this;let g=0,p;return m;function m(v){return a.enter(s),a.enter(h),a.consume(v),a.exit(h),a.enter(c),y}function y(v){return g>999||v===null||v===91||v===93&&!p||v===94&&!g&&"_hiddenFootnoteSupport"in d.parser.constructs?o(v):v===93?(a.exit(c),a.enter(h),a.consume(v),a.exit(h),a.exit(s),r):me(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||v===91||v===93||me(v)||g++>999?(a.exit("chunkString"),y(v)):(a.consume(v),p||(p=!Ie(v)),v===92?T:w)}function T(v){return v===91||v===92||v===93?(a.consume(v),g++,w):w(v)}}function Tp(a,r,o,s,h,c){let d;return g;function g(T){return T===34||T===39||T===40?(a.enter(s),a.enter(h),a.consume(T),a.exit(h),d=T===40?41:T,p):o(T)}function p(T){return T===d?(a.enter(h),a.consume(T),a.exit(h),a.exit(s),r):(a.enter(c),m(T))}function m(T){return T===d?(a.exit(c),p(d)):T===null?o(T):me(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Ue(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(T))}function y(T){return T===d||T===null||me(T)?(a.exit("chunkString"),m(T)):(a.consume(T),T===92?w:y)}function w(T){return T===d||T===92?(a.consume(T),y):y(T)}}function Cr(a,r){let o;return s;function s(h){return me(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),o=!0,s):Ie(h)?Ue(a,s,o?"linePrefix":"lineSuffix")(h):r(h)}}const AT={name:"definition",tokenize:MT},CT={partial:!0,tokenize:zT};function MT(a,r,o){const s=this;let h;return c;function c(v){return a.enter("definition"),d(v)}function d(v){return kp.call(s,a,g,o,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function g(v){return h=ki(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)),v===58?(a.enter("definitionMarker"),a.consume(v),a.exit("definitionMarker"),p):o(v)}function p(v){return Ct(v)?Cr(a,m)(v):m(v)}function m(v){return vp(a,y,o,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return a.attempt(CT,w,w)(v)}function w(v){return Ie(v)?Ue(a,T,"whitespace")(v):T(v)}function T(v){return v===null||me(v)?(a.exit("definition"),s.parser.defined.push(h),r(v)):o(v)}}function zT(a,r,o){return s;function s(g){return Ct(g)?Cr(a,h)(g):o(g)}function h(g){return Tp(a,c,o,"definitionTitle","definitionTitleMarker","definitionTitleString")(g)}function c(g){return Ie(g)?Ue(a,d,"whitespace")(g):d(g)}function d(g){return g===null||me(g)?r(g):o(g)}}const DT={name:"hardBreakEscape",tokenize:RT};function RT(a,r,o){return s;function s(c){return a.enter("hardBreakEscape"),a.consume(c),h}function h(c){return me(c)?(a.exit("hardBreakEscape"),r(c)):o(c)}}const IT={name:"headingAtx",resolve:BT,tokenize:OT};function BT(a,r){let o=a.length-2,s=3,h,c;return a[s][1].type==="whitespace"&&(s+=2),o-2>s&&a[o][1].type==="whitespace"&&(o-=2),a[o][1].type==="atxHeadingSequence"&&(s===o-1||o-4>s&&a[o-2][1].type==="whitespace")&&(o-=s+1===o?2:4),o>s&&(h={type:"atxHeadingText",start:a[s][1].start,end:a[o][1].end},c={type:"chunkText",start:a[s][1].start,end:a[o][1].end,contentType:"text"},fn(a,s,o-s+1,[["enter",h,r],["enter",c,r],["exit",c,r],["exit",h,r]])),a}function OT(a,r,o){let s=0;return h;function h(y){return a.enter("atxHeading"),c(y)}function c(y){return a.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&s++<6?(a.consume(y),d):y===null||Ct(y)?(a.exit("atxHeadingSequence"),g(y)):o(y)}function g(y){return y===35?(a.enter("atxHeadingSequence"),p(y)):y===null||me(y)?(a.exit("atxHeading"),r(y)):Ie(y)?Ue(a,g,"whitespace")(y):(a.enter("atxHeadingText"),m(y))}function p(y){return y===35?(a.consume(y),p):(a.exit("atxHeadingSequence"),g(y))}function m(y){return y===null||y===35||Ct(y)?(a.exit("atxHeadingText"),g(y)):(a.consume(y),m)}}const HT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],fg=["pre","script","style","textarea"],NT={concrete:!0,name:"htmlFlow",resolveTo:_T,tokenize:qT},jT={partial:!0,tokenize:YT},LT={partial:!0,tokenize:WT};function _T(a){let r=a.length;for(;r--&&!(a[r][0]==="enter"&&a[r][1].type==="htmlFlow"););return r>1&&a[r-2][1].type==="linePrefix"&&(a[r][1].start=a[r-2][1].start,a[r+1][1].start=a[r-2][1].start,a.splice(r-2,2)),a}function qT(a,r,o){const s=this;let h,c,d,g,p;return m;function m(k){return y(k)}function y(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),w}function w(k){return k===33?(a.consume(k),T):k===47?(a.consume(k),c=!0,N):k===63?(a.consume(k),h=3,s.interrupt?r:S):cn(k)?(a.consume(k),d=String.fromCharCode(k),I):o(k)}function T(k){return k===45?(a.consume(k),h=2,v):k===91?(a.consume(k),h=5,g=0,H):cn(k)?(a.consume(k),h=4,s.interrupt?r:S):o(k)}function v(k){return k===45?(a.consume(k),s.interrupt?r:S):o(k)}function H(k){const P="CDATA[";return k===P.charCodeAt(g++)?(a.consume(k),g===P.length?s.interrupt?r:$:H):o(k)}function N(k){return cn(k)?(a.consume(k),d=String.fromCharCode(k),I):o(k)}function I(k){if(k===null||k===47||k===62||Ct(k)){const P=k===47,he=d.toLowerCase();return!P&&!c&&fg.includes(he)?(h=1,s.interrupt?r(k):$(k)):HT.includes(d.toLowerCase())?(h=6,P?(a.consume(k),B):s.interrupt?r(k):$(k)):(h=7,s.interrupt&&!s.parser.lazy[s.now().line]?o(k):c?X(k):F(k))}return k===45||Lt(k)?(a.consume(k),d+=String.fromCharCode(k),I):o(k)}function B(k){return k===62?(a.consume(k),s.interrupt?r:$):o(k)}function X(k){return Ie(k)?(a.consume(k),X):be(k)}function F(k){return k===47?(a.consume(k),be):k===58||k===95||cn(k)?(a.consume(k),re):Ie(k)?(a.consume(k),F):be(k)}function re(k){return k===45||k===46||k===58||k===95||Lt(k)?(a.consume(k),re):le(k)}function le(k){return k===61?(a.consume(k),_):Ie(k)?(a.consume(k),le):F(k)}function _(k){return k===null||k===60||k===61||k===62||k===96?o(k):k===34||k===39?(a.consume(k),p=k,J):Ie(k)?(a.consume(k),_):ce(k)}function J(k){return k===p?(a.consume(k),p=null,fe):k===null||me(k)?o(k):(a.consume(k),J)}function ce(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ct(k)?le(k):(a.consume(k),ce)}function fe(k){return k===47||k===62||Ie(k)?F(k):o(k)}function be(k){return k===62?(a.consume(k),ee):o(k)}function ee(k){return k===null||me(k)?$(k):Ie(k)?(a.consume(k),ee):o(k)}function $(k){return k===45&&h===2?(a.consume(k),R):k===60&&h===1?(a.consume(k),V):k===62&&h===4?(a.consume(k),E):k===63&&h===3?(a.consume(k),S):k===93&&h===5?(a.consume(k),ve):me(k)&&(h===6||h===7)?(a.exit("htmlFlowData"),a.check(jT,q,ke)(k)):k===null||me(k)?(a.exit("htmlFlowData"),ke(k)):(a.consume(k),$)}function ke(k){return a.check(LT,ne,q)(k)}function ne(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),G}function G(k){return k===null||me(k)?ke(k):(a.enter("htmlFlowData"),$(k))}function R(k){return k===45?(a.consume(k),S):$(k)}function V(k){return k===47?(a.consume(k),d="",ie):$(k)}function ie(k){if(k===62){const P=d.toLowerCase();return fg.includes(P)?(a.consume(k),E):$(k)}return cn(k)&&d.length<8?(a.consume(k),d+=String.fromCharCode(k),ie):$(k)}function ve(k){return k===93?(a.consume(k),S):$(k)}function S(k){return k===62?(a.consume(k),E):k===45&&h===2?(a.consume(k),S):$(k)}function E(k){return k===null||me(k)?(a.exit("htmlFlowData"),q(k)):(a.consume(k),E)}function q(k){return a.exit("htmlFlow"),r(k)}}function WT(a,r,o){const s=this;return h;function h(d){return me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):o(d)}function c(d){return s.parser.lazy[s.now().line]?o(d):r(d)}}function YT(a,r,o){return s;function s(h){return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),a.attempt(gs,r,o)}}const UT={name:"htmlText",tokenize:FT};function FT(a,r,o){const s=this;let h,c,d;return g;function g(S){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(S),p}function p(S){return S===33?(a.consume(S),m):S===47?(a.consume(S),le):S===63?(a.consume(S),F):cn(S)?(a.consume(S),ce):o(S)}function m(S){return S===45?(a.consume(S),y):S===91?(a.consume(S),c=0,H):cn(S)?(a.consume(S),X):o(S)}function y(S){return S===45?(a.consume(S),v):o(S)}function w(S){return S===null?o(S):S===45?(a.consume(S),T):me(S)?(d=w,V(S)):(a.consume(S),w)}function T(S){return S===45?(a.consume(S),v):w(S)}function v(S){return S===62?R(S):S===45?T(S):w(S)}function H(S){const E="CDATA[";return S===E.charCodeAt(c++)?(a.consume(S),c===E.length?N:H):o(S)}function N(S){return S===null?o(S):S===93?(a.consume(S),I):me(S)?(d=N,V(S)):(a.consume(S),N)}function I(S){return S===93?(a.consume(S),B):N(S)}function B(S){return S===62?R(S):S===93?(a.consume(S),B):N(S)}function X(S){return S===null||S===62?R(S):me(S)?(d=X,V(S)):(a.consume(S),X)}function F(S){return S===null?o(S):S===63?(a.consume(S),re):me(S)?(d=F,V(S)):(a.consume(S),F)}function re(S){return S===62?R(S):F(S)}function le(S){return cn(S)?(a.consume(S),_):o(S)}function _(S){return S===45||Lt(S)?(a.consume(S),_):J(S)}function J(S){return me(S)?(d=J,V(S)):Ie(S)?(a.consume(S),J):R(S)}function ce(S){return S===45||Lt(S)?(a.consume(S),ce):S===47||S===62||Ct(S)?fe(S):o(S)}function fe(S){return S===47?(a.consume(S),R):S===58||S===95||cn(S)?(a.consume(S),be):me(S)?(d=fe,V(S)):Ie(S)?(a.consume(S),fe):R(S)}function be(S){return S===45||S===46||S===58||S===95||Lt(S)?(a.consume(S),be):ee(S)}function ee(S){return S===61?(a.consume(S),$):me(S)?(d=ee,V(S)):Ie(S)?(a.consume(S),ee):fe(S)}function $(S){return S===null||S===60||S===61||S===62||S===96?o(S):S===34||S===39?(a.consume(S),h=S,ke):me(S)?(d=$,V(S)):Ie(S)?(a.consume(S),$):(a.consume(S),ne)}function ke(S){return S===h?(a.consume(S),h=void 0,G):S===null?o(S):me(S)?(d=ke,V(S)):(a.consume(S),ke)}function ne(S){return S===null||S===34||S===39||S===60||S===61||S===96?o(S):S===47||S===62||Ct(S)?fe(S):(a.consume(S),ne)}function G(S){return S===47||S===62||Ct(S)?fe(S):o(S)}function R(S){return S===62?(a.consume(S),a.exit("htmlTextData"),a.exit("htmlText"),r):o(S)}function V(S){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),ie}function ie(S){return Ie(S)?Ue(a,ve,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):ve(S)}function ve(S){return a.enter("htmlTextData"),d(S)}}const zh={name:"labelEnd",resolveAll:XT,resolveTo:KT,tokenize:ZT},VT={tokenize:JT},GT={tokenize:PT},QT={tokenize:$T};function XT(a){let r=-1;const o=[];for(;++r<a.length;){const s=a[r][1];if(o.push(a[r]),s.type==="labelImage"||s.type==="labelLink"||s.type==="labelEnd"){const h=s.type==="labelImage"?4:2;s.type="data",r+=h}}return a.length!==o.length&&fn(a,0,a.length,o),a}function KT(a,r){let o=a.length,s=0,h,c,d,g;for(;o--;)if(h=a[o][1],c){if(h.type==="link"||h.type==="labelLink"&&h._inactive)break;a[o][0]==="enter"&&h.type==="labelLink"&&(h._inactive=!0)}else if(d){if(a[o][0]==="enter"&&(h.type==="labelImage"||h.type==="labelLink")&&!h._balanced&&(c=o,h.type!=="labelLink")){s=2;break}}else h.type==="labelEnd"&&(d=o);const p={type:a[c][1].type==="labelLink"?"link":"image",start:{...a[c][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[c][1].start},end:{...a[d][1].end}},y={type:"labelText",start:{...a[c+s+2][1].end},end:{...a[d-2][1].start}};return g=[["enter",p,r],["enter",m,r]],g=Jt(g,a.slice(c+1,c+s+3)),g=Jt(g,[["enter",y,r]]),g=Jt(g,Mh(r.parser.constructs.insideSpan.null,a.slice(c+s+4,d-3),r)),g=Jt(g,[["exit",y,r],a[d-2],a[d-1],["exit",m,r]]),g=Jt(g,a.slice(d+1)),g=Jt(g,[["exit",p,r]]),fn(a,c,a.length,g),a}function ZT(a,r,o){const s=this;let h=s.events.length,c,d;for(;h--;)if((s.events[h][1].type==="labelImage"||s.events[h][1].type==="labelLink")&&!s.events[h][1]._balanced){c=s.events[h][1];break}return g;function g(T){return c?c._inactive?w(T):(d=s.parser.defined.includes(ki(s.sliceSerialize({start:c.end,end:s.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(T),a.exit("labelMarker"),a.exit("labelEnd"),p):o(T)}function p(T){return T===40?a.attempt(VT,y,d?y:w)(T):T===91?a.attempt(GT,y,d?m:w)(T):d?y(T):w(T)}function m(T){return a.attempt(QT,y,w)(T)}function y(T){return r(T)}function w(T){return c._balanced=!0,o(T)}}function JT(a,r,o){return s;function s(w){return a.enter("resource"),a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),h}function h(w){return Ct(w)?Cr(a,c)(w):c(w)}function c(w){return w===41?y(w):vp(a,d,g,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function d(w){return Ct(w)?Cr(a,p)(w):y(w)}function g(w){return o(w)}function p(w){return w===34||w===39||w===40?Tp(a,m,o,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):y(w)}function m(w){return Ct(w)?Cr(a,y)(w):y(w)}function y(w){return w===41?(a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),a.exit("resource"),r):o(w)}}function PT(a,r,o){const s=this;return h;function h(g){return kp.call(s,a,c,d,"reference","referenceMarker","referenceString")(g)}function c(g){return s.parser.defined.includes(ki(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)))?r(g):o(g)}function d(g){return o(g)}}function $T(a,r,o){return s;function s(c){return a.enter("reference"),a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),h}function h(c){return c===93?(a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),a.exit("reference"),r):o(c)}}const e0={name:"labelStartImage",resolveAll:zh.resolveAll,tokenize:t0};function t0(a,r,o){const s=this;return h;function h(g){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(g),a.exit("labelImageMarker"),c}function c(g){return g===91?(a.enter("labelMarker"),a.consume(g),a.exit("labelMarker"),a.exit("labelImage"),d):o(g)}function d(g){return g===94&&"_hiddenFootnoteSupport"in s.parser.constructs?o(g):r(g)}}const n0={name:"labelStartLink",resolveAll:zh.resolveAll,tokenize:a0};function a0(a,r,o){const s=this;return h;function h(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),c}function c(d){return d===94&&"_hiddenFootnoteSupport"in s.parser.constructs?o(d):r(d)}}const Gu={name:"lineEnding",tokenize:i0};function i0(a,r){return o;function o(s){return a.enter("lineEnding"),a.consume(s),a.exit("lineEnding"),Ue(a,r,"linePrefix")}}const ls={name:"thematicBreak",tokenize:r0};function r0(a,r,o){let s=0,h;return c;function c(m){return a.enter("thematicBreak"),d(m)}function d(m){return h=m,g(m)}function g(m){return m===h?(a.enter("thematicBreakSequence"),p(m)):s>=3&&(m===null||me(m))?(a.exit("thematicBreak"),r(m)):o(m)}function p(m){return m===h?(a.consume(m),s++,p):(a.exit("thematicBreakSequence"),Ie(m)?Ue(a,g,"whitespace")(m):g(m))}}const At={continuation:{tokenize:u0},exit:c0,name:"list",tokenize:l0},o0={partial:!0,tokenize:d0},s0={partial:!0,tokenize:h0};function l0(a,r,o){const s=this,h=s.events[s.events.length-1];let c=h&&h[1].type==="linePrefix"?h[2].sliceSerialize(h[1],!0).length:0,d=0;return g;function g(v){const H=s.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(H==="listUnordered"?!s.containerState.marker||v===s.containerState.marker:lh(v)){if(s.containerState.type||(s.containerState.type=H,a.enter(H,{_container:!0})),H==="listUnordered")return a.enter("listItemPrefix"),v===42||v===45?a.check(ls,o,m)(v):m(v);if(!s.interrupt||v===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),p(v)}return o(v)}function p(v){return lh(v)&&++d<10?(a.consume(v),p):(!s.interrupt||d<2)&&(s.containerState.marker?v===s.containerState.marker:v===41||v===46)?(a.exit("listItemValue"),m(v)):o(v)}function m(v){return a.enter("listItemMarker"),a.consume(v),a.exit("listItemMarker"),s.containerState.marker=s.containerState.marker||v,a.check(gs,s.interrupt?o:y,a.attempt(o0,T,w))}function y(v){return s.containerState.initialBlankLine=!0,c++,T(v)}function w(v){return Ie(v)?(a.enter("listItemPrefixWhitespace"),a.consume(v),a.exit("listItemPrefixWhitespace"),T):o(v)}function T(v){return s.containerState.size=c+s.sliceSerialize(a.exit("listItemPrefix"),!0).length,r(v)}}function u0(a,r,o){const s=this;return s.containerState._closeFlow=void 0,a.check(gs,h,c);function h(g){return s.containerState.furtherBlankLines=s.containerState.furtherBlankLines||s.containerState.initialBlankLine,Ue(a,r,"listItemIndent",s.containerState.size+1)(g)}function c(g){return s.containerState.furtherBlankLines||!Ie(g)?(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,d(g)):(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,a.attempt(s0,r,d)(g))}function d(g){return s.containerState._closeFlow=!0,s.interrupt=void 0,Ue(a,a.attempt(At,r,o),"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g)}}function h0(a,r,o){const s=this;return Ue(a,h,"listItemIndent",s.containerState.size+1);function h(c){const d=s.events[s.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===s.containerState.size?r(c):o(c)}}function c0(a){a.exit(this.containerState.type)}function d0(a,r,o){const s=this;return Ue(a,h,"listItemPrefixWhitespace",s.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function h(c){const d=s.events[s.events.length-1];return!Ie(c)&&d&&d[1].type==="listItemPrefixWhitespace"?r(c):o(c)}}const mg={name:"setextUnderline",resolveTo:f0,tokenize:m0};function f0(a,r){let o=a.length,s,h,c;for(;o--;)if(a[o][0]==="enter"){if(a[o][1].type==="content"){s=o;break}a[o][1].type==="paragraph"&&(h=o)}else a[o][1].type==="content"&&a.splice(o,1),!c&&a[o][1].type==="definition"&&(c=o);const d={type:"setextHeading",start:{...a[s][1].start},end:{...a[a.length-1][1].end}};return a[h][1].type="setextHeadingText",c?(a.splice(h,0,["enter",d,r]),a.splice(c+1,0,["exit",a[s][1],r]),a[s][1].end={...a[c][1].end}):a[s][1]=d,a.push(["exit",d,r]),a}function m0(a,r,o){const s=this;let h;return c;function c(m){let y=s.events.length,w;for(;y--;)if(s.events[y][1].type!=="lineEnding"&&s.events[y][1].type!=="linePrefix"&&s.events[y][1].type!=="content"){w=s.events[y][1].type==="paragraph";break}return!s.parser.lazy[s.now().line]&&(s.interrupt||w)?(a.enter("setextHeadingLine"),h=m,d(m)):o(m)}function d(m){return a.enter("setextHeadingLineSequence"),g(m)}function g(m){return m===h?(a.consume(m),g):(a.exit("setextHeadingLineSequence"),Ie(m)?Ue(a,p,"lineSuffix")(m):p(m))}function p(m){return m===null||me(m)?(a.exit("setextHeadingLine"),r(m)):o(m)}}const g0={tokenize:p0};function p0(a){const r=this,o=a.attempt(gs,s,a.attempt(this.parser.constructs.flowInitial,h,Ue(a,a.attempt(this.parser.constructs.flow,h,a.attempt(kT,h)),"linePrefix")));return o;function s(c){if(c===null){a.consume(c);return}return a.enter("lineEndingBlank"),a.consume(c),a.exit("lineEndingBlank"),r.currentConstruct=void 0,o}function h(c){if(c===null){a.consume(c);return}return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),r.currentConstruct=void 0,o}}const y0={resolveAll:xp()},w0=Sp("string"),b0=Sp("text");function Sp(a){return{resolveAll:xp(a==="text"?v0:void 0),tokenize:r};function r(o){const s=this,h=this.parser.constructs[a],c=o.attempt(h,d,g);return d;function d(y){return m(y)?c(y):g(y)}function g(y){if(y===null){o.consume(y);return}return o.enter("data"),o.consume(y),p}function p(y){return m(y)?(o.exit("data"),c(y)):(o.consume(y),p)}function m(y){if(y===null)return!0;const w=h[y];let T=-1;if(w)for(;++T<w.length;){const v=w[T];if(!v.previous||v.previous.call(s,s.previous))return!0}return!1}}}function xp(a){return r;function r(o,s){let h=-1,c;for(;++h<=o.length;)c===void 0?o[h]&&o[h][1].type==="data"&&(c=h,h++):(!o[h]||o[h][1].type!=="data")&&(h!==c+2&&(o[c][1].end=o[h-1][1].end,o.splice(c+2,h-c-2),h=c+2),c=void 0);return a?a(o,s):o}}function v0(a,r){let o=0;for(;++o<=a.length;)if((o===a.length||a[o][1].type==="lineEnding")&&a[o-1][1].type==="data"){const s=a[o-1][1],h=r.sliceStream(s);let c=h.length,d=-1,g=0,p;for(;c--;){const m=h[c];if(typeof m=="string"){for(d=m.length;m.charCodeAt(d-1)===32;)g++,d--;if(d)break;d=-1}else if(m===-2)p=!0,g++;else if(m!==-1){c++;break}}if(r._contentTypeTextTrailing&&o===a.length&&(g=0),g){const m={type:o===a.length||p||g<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?d:s.start._bufferIndex+d,_index:s.start._index+c,line:s.end.line,column:s.end.column-g,offset:s.end.offset-g},end:{...s.end}};s.end={...m.start},s.start.offset===s.end.offset?Object.assign(s,m):(a.splice(o,0,["enter",m,r],["exit",m,r]),o+=2)}o++}return a}const k0={42:At,43:At,45:At,48:At,49:At,50:At,51:At,52:At,53:At,54:At,55:At,56:At,57:At,62:pp},T0={91:AT},S0={[-2]:Vu,[-1]:Vu,32:Vu},x0={35:IT,42:ls,45:[mg,ls],60:NT,61:mg,95:ls,96:dg,126:dg},E0={38:wp,92:yp},A0={[-5]:Gu,[-4]:Gu,[-3]:Gu,33:e0,38:wp,42:uh,60:[nT,UT],91:n0,92:[DT,yp],93:zh,95:uh,96:gT},C0={null:[uh,y0]},M0={null:[42,95]},z0={null:[]},D0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:M0,contentInitial:T0,disable:z0,document:k0,flow:x0,flowInitial:S0,insideSpan:C0,string:E0,text:A0},Symbol.toStringTag,{value:"Module"}));function R0(a,r,o){let s={_bufferIndex:-1,_index:0,line:o&&o.line||1,column:o&&o.column||1,offset:o&&o.offset||0};const h={},c=[];let d=[],g=[];const p={attempt:J(le),check:J(_),consume:X,enter:F,exit:re,interrupt:J(_,{interrupt:!0})},m={code:null,containerState:{},defineSkip:N,events:[],now:H,parser:a,previous:null,sliceSerialize:T,sliceStream:v,write:w};let y=r.tokenize.call(m,p);return r.resolveAll&&c.push(r),m;function w(ee){return d=Jt(d,ee),I(),d[d.length-1]!==null?[]:(ce(r,0),m.events=Mh(c,m.events,m),m.events)}function T(ee,$){return B0(v(ee),$)}function v(ee){return I0(d,ee)}function H(){const{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:G}=s;return{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:G}}function N(ee){h[ee.line]=ee.column,be()}function I(){let ee;for(;s._index<d.length;){const $=d[s._index];if(typeof $=="string")for(ee=s._index,s._bufferIndex<0&&(s._bufferIndex=0);s._index===ee&&s._bufferIndex<$.length;)B($.charCodeAt(s._bufferIndex));else B($)}}function B(ee){y=y(ee)}function X(ee){me(ee)?(s.line++,s.column=1,s.offset+=ee===-3?2:1,be()):ee!==-1&&(s.column++,s.offset++),s._bufferIndex<0?s._index++:(s._bufferIndex++,s._bufferIndex===d[s._index].length&&(s._bufferIndex=-1,s._index++)),m.previous=ee}function F(ee,$){const ke=$||{};return ke.type=ee,ke.start=H(),m.events.push(["enter",ke,m]),g.push(ke),ke}function re(ee){const $=g.pop();return $.end=H(),m.events.push(["exit",$,m]),$}function le(ee,$){ce(ee,$.from)}function _(ee,$){$.restore()}function J(ee,$){return ke;function ke(ne,G,R){let V,ie,ve,S;return Array.isArray(ne)?q(ne):"tokenize"in ne?q([ne]):E(ne);function E(oe){return Ee;function Ee(Ge){const Ne=Ge!==null&&oe[Ge],qt=Ge!==null&&oe.null,gn=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(qt)?qt:qt?[qt]:[]];return q(gn)(Ge)}}function q(oe){return V=oe,ie=0,oe.length===0?R:k(oe[ie])}function k(oe){return Ee;function Ee(Ge){return S=fe(),ve=oe,oe.partial||(m.currentConstruct=oe),oe.name&&m.parser.constructs.disable.null.includes(oe.name)?he():oe.tokenize.call($?Object.assign(Object.create(m),$):m,p,P,he)(Ge)}}function P(oe){return ee(ve,S),G}function he(oe){return S.restore(),++ie<V.length?k(V[ie]):R}}}function ce(ee,$){ee.resolveAll&&!c.includes(ee)&&c.push(ee),ee.resolve&&fn(m.events,$,m.events.length-$,ee.resolve(m.events.slice($),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=H(),$=m.previous,ke=m.currentConstruct,ne=m.events.length,G=Array.from(g);return{from:ne,restore:R};function R(){s=ee,m.previous=$,m.currentConstruct=ke,m.events.length=ne,g=G,be()}}function be(){s.line in h&&s.column<2&&(s.column=h[s.line],s.offset+=h[s.line]-1)}}function I0(a,r){const o=r.start._index,s=r.start._bufferIndex,h=r.end._index,c=r.end._bufferIndex;let d;if(o===h)d=[a[o].slice(s,c)];else{if(d=a.slice(o,h),s>-1){const g=d[0];typeof g=="string"?d[0]=g.slice(s):d.shift()}c>0&&d.push(a[h].slice(0,c))}return d}function B0(a,r){let o=-1;const s=[];let h;for(;++o<a.length;){const c=a[o];let d;if(typeof c=="string")d=c;else switch(c){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=r?" ":"	";break}case-1:{if(!r&&h)continue;d=" ";break}default:d=String.fromCharCode(c)}h=c===-2,s.push(d)}return s.join("")}function O0(a){const s={constructs:Wk([D0,...(a||{}).extensions||[]]),content:h(Kk),defined:[],document:h(Jk),flow:h(g0),lazy:{},string:h(w0),text:h(b0)};return s;function h(c){return d;function d(g){return R0(s,c,g)}}}function H0(a){for(;!bp(a););return a}const gg=/[\0\t\n\r]/g;function N0(){let a=1,r="",o=!0,s;return h;function h(c,d,g){const p=[];let m,y,w,T,v;for(c=r+(typeof c=="string"?c.toString():new TextDecoder(d||void 0).decode(c)),w=0,r="",o&&(c.charCodeAt(0)===65279&&w++,o=void 0);w<c.length;){if(gg.lastIndex=w,m=gg.exec(c),T=m&&m.index!==void 0?m.index:c.length,v=c.charCodeAt(T),!m){r=c.slice(w);break}if(v===10&&w===T&&s)p.push(-3),s=void 0;else switch(s&&(p.push(-5),s=void 0),w<T&&(p.push(c.slice(w,T)),a+=T-w),v){case 0:{p.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,p.push(-2);a++<y;)p.push(-1);break}case 10:{p.push(-4),a=1;break}default:s=!0,a=1}w=T+1}return g&&(s&&p.push(-5),r&&p.push(r),p.push(null)),p}}const j0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function L0(a){return a.replace(j0,_0)}function _0(a,r,o){if(r)return r;if(o.charCodeAt(0)===35){const h=o.charCodeAt(1),c=h===120||h===88;return gp(o.slice(c?2:1),c?16:10)}return Ch(o)||a}const Ep={}.hasOwnProperty;function q0(a,r,o){return r&&typeof r=="object"&&(o=r,r=void 0),W0(o)(H0(O0(o).document().write(N0()(a,r,!0))))}function W0(a){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Ia),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:c(Da),blockQuote:c(qt),characterEscape:fe,characterReference:fe,codeFenced:c(gn),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:c(gn,d),codeText:c(Ai,d),codeTextData:fe,data:fe,codeFlowValue:fe,definition:c(Hr),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:c(pn),hardBreakEscape:c(Ra),hardBreakTrailing:c(Ra),htmlFlow:c(Nr,d),htmlFlowData:fe,htmlText:c(Nr,d),htmlTextData:fe,image:c(jr),label:d,link:c(Ia),listItem:c(Ci),listItemValue:T,listOrdered:c(Ba,w),listUnordered:c(Ba),paragraph:c(ws),reference:k,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:c(Da),strong:c(bs),thematicBreak:c(vs)},exit:{atxHeading:p(),atxHeadingSequence:le,autolink:p(),autolinkEmail:Ne,autolinkProtocol:Ge,blockQuote:p(),characterEscapeValue:be,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:oe,characterReference:Ee,codeFenced:p(I),codeFencedFence:N,codeFencedFenceInfo:v,codeFencedFenceMeta:H,codeFlowValue:be,codeIndented:p(B),codeText:p(G),codeTextData:be,data:be,definition:p(),definitionDestinationString:re,definitionLabelString:X,definitionTitleString:F,emphasis:p(),hardBreakEscape:p($),hardBreakTrailing:p($),htmlFlow:p(ke),htmlFlowData:be,htmlText:p(ne),htmlTextData:be,image:p(V),label:ve,labelText:ie,lineEnding:ee,link:p(R),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:P,resourceDestinationString:S,resourceTitleString:E,resource:q,setextHeading:p(ce),setextHeadingLineSequence:J,setextHeadingText:_,strong:p(),thematicBreak:p()}};Ap(r,(a||{}).mdastExtensions||[]);const o={};return s;function s(W){let K={type:"root",children:[]};const de={stack:[K],tokenStack:[],config:r,enter:g,exit:m,buffer:d,resume:y,data:o},Te=[];let Be=-1;for(;++Be<W.length;)if(W[Be][1].type==="listOrdered"||W[Be][1].type==="listUnordered")if(W[Be][0]==="enter")Te.push(Be);else{const zt=Te.pop();Be=h(W,zt,Be)}for(Be=-1;++Be<W.length;){const zt=r[W[Be][0]];Ep.call(zt,W[Be][1].type)&&zt[W[Be][1].type].call(Object.assign({sliceSerialize:W[Be][2].sliceSerialize},de),W[Be][1])}if(de.tokenStack.length>0){const zt=de.tokenStack[de.tokenStack.length-1];(zt[1]||pg).call(de,void 0,zt[0])}for(K.position={start:la(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:la(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},Be=-1;++Be<r.transforms.length;)K=r.transforms[Be](K)||K;return K}function h(W,K,de){let Te=K-1,Be=-1,zt=!1,yn,pt,it,wt;for(;++Te<=de;){const qe=W[Te];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?Be++:Be--,wt=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(yn&&!wt&&!Be&&!it&&(it=Te),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0}if(!Be&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||Be===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(yn){let jn=Te;for(pt=void 0;jn--;){const en=W[jn];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;pt&&(W[pt][1].type="lineEndingBlank",zt=!0),en[1].type="lineEnding",pt=jn}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!pt||it<pt)&&(yn._spread=!0),yn.end=Object.assign({},pt?W[pt][1].start:qe[1].end),W.splice(pt||Te,0,["exit",yn,qe[2]]),Te++,de++}if(qe[1].type==="listItemPrefix"){const jn={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};yn=jn,W.splice(Te,0,["enter",jn,qe[2]]),Te++,de++,it=void 0,wt=!0}}}return W[K][1]._spread=zt,de}function c(W,K){return de;function de(Te){g.call(this,W(Te),Te),K&&K.call(this,Te)}}function d(){this.stack.push({type:"fragment",children:[]})}function g(W,K,de){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([K,de||void 0]),W.position={start:la(K.start),end:void 0}}function p(W){return K;function K(de){W&&W.call(this,de),m.call(this,de)}}function m(W,K){const de=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==W.type&&(K?K.call(this,W,Te[0]):(Te[1]||pg).call(this,W,Te[0]));else throw new Error("Cannot close `"+W.type+"` ("+Ar({start:W.start,end:W.end})+"): it’s not open");de.position.end=la(W.end)}function y(){return _k(this.stack.pop())}function w(){this.data.expectingFirstListItemValue=!0}function T(W){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function v(){const W=this.resume(),K=this.stack[this.stack.length-1];K.lang=W}function H(){const W=this.resume(),K=this.stack[this.stack.length-1];K.meta=W}function N(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function I(){const W=this.resume(),K=this.stack[this.stack.length-1];K.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function B(){const W=this.resume(),K=this.stack[this.stack.length-1];K.value=W.replace(/(\r?\n|\r)$/g,"")}function X(W){const K=this.resume(),de=this.stack[this.stack.length-1];de.label=K,de.identifier=ki(this.sliceSerialize(W)).toLowerCase()}function F(){const W=this.resume(),K=this.stack[this.stack.length-1];K.title=W}function re(){const W=this.resume(),K=this.stack[this.stack.length-1];K.url=W}function le(W){const K=this.stack[this.stack.length-1];if(!K.depth){const de=this.sliceSerialize(W).length;K.depth=de}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function J(W){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(W){const de=this.stack[this.stack.length-1].children;let Te=de[de.length-1];(!Te||Te.type!=="text")&&(Te=gt(),Te.position={start:la(W.start),end:void 0},de.push(Te)),this.stack.push(Te)}function be(W){const K=this.stack.pop();K.value+=this.sliceSerialize(W),K.position.end=la(W.end)}function ee(W){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=K.children[K.children.length-1];de.position.end=la(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(K.type)&&(fe.call(this,W),be.call(this,W))}function $(){this.data.atHardBreak=!0}function ke(){const W=this.resume(),K=this.stack[this.stack.length-1];K.value=W}function ne(){const W=this.resume(),K=this.stack[this.stack.length-1];K.value=W}function G(){const W=this.resume(),K=this.stack[this.stack.length-1];K.value=W}function R(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=K,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function V(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=K,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function ie(W){const K=this.sliceSerialize(W),de=this.stack[this.stack.length-2];de.label=L0(K),de.identifier=ki(K).toLowerCase()}function ve(){const W=this.stack[this.stack.length-1],K=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const Te=W.children;de.children=Te}else de.alt=K}function S(){const W=this.resume(),K=this.stack[this.stack.length-1];K.url=W}function E(){const W=this.resume(),K=this.stack[this.stack.length-1];K.title=W}function q(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function P(W){const K=this.resume(),de=this.stack[this.stack.length-1];de.label=K,de.identifier=ki(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function he(W){this.data.characterReferenceType=W.type}function oe(W){const K=this.sliceSerialize(W),de=this.data.characterReferenceType;let Te;de?(Te=gp(K,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=Ch(K);const Be=this.stack[this.stack.length-1];Be.value+=Te}function Ee(W){const K=this.stack.pop();K.position.end=la(W.end)}function Ge(W){be.call(this,W);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(W)}function Ne(W){be.call(this,W);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(W)}function qt(){return{type:"blockquote",children:[]}}function gn(){return{type:"code",lang:null,meta:null,value:""}}function Ai(){return{type:"inlineCode",value:""}}function Hr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function Da(){return{type:"heading",depth:0,children:[]}}function Ra(){return{type:"break"}}function Nr(){return{type:"html",value:""}}function jr(){return{type:"image",title:null,url:"",alt:null}}function Ia(){return{type:"link",title:null,url:"",children:[]}}function Ba(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function Ci(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function ws(){return{type:"paragraph",children:[]}}function bs(){return{type:"strong",children:[]}}function gt(){return{type:"text",value:""}}function vs(){return{type:"thematicBreak"}}}function la(a){return{line:a.line,column:a.column,offset:a.offset}}function Ap(a,r){let o=-1;for(;++o<r.length;){const s=r[o];Array.isArray(s)?Ap(a,s):Y0(a,s)}}function Y0(a,r){let o;for(o in r)if(Ep.call(r,o))switch(o){case"canContainEols":{const s=r[o];s&&a[o].push(...s);break}case"transforms":{const s=r[o];s&&a[o].push(...s);break}case"enter":case"exit":{const s=r[o];s&&Object.assign(a[o],s);break}}}function pg(a,r){throw a?new Error("Cannot close `"+a.type+"` ("+Ar({start:a.start,end:a.end})+"): a different token (`"+r.type+"`, "+Ar({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Ar({start:r.start,end:r.end})+") is still open")}function U0(a){const r=this;r.parser=o;function o(s){return q0(s,{...r.data("settings"),...a,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function F0(a,r){const o={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(r),!0)};return a.patch(r,o),a.applyData(r,o)}function V0(a,r){const o={type:"element",tagName:"br",properties:{},children:[]};return a.patch(r,o),[a.applyData(r,o),{type:"text",value:`
`}]}function G0(a,r){const o=r.value?r.value+`
`:"",s={},h=r.lang?r.lang.split(/\s+/):[];h.length>0&&(s.className=["language-"+h[0]]);let c={type:"element",tagName:"code",properties:s,children:[{type:"text",value:o}]};return r.meta&&(c.data={meta:r.meta}),a.patch(r,c),c=a.applyData(r,c),c={type:"element",tagName:"pre",properties:{},children:[c]},a.patch(r,c),c}function Q0(a,r){const o={type:"element",tagName:"del",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function X0(a,r){const o={type:"element",tagName:"em",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function K0(a,r){const o=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",s=String(r.identifier).toUpperCase(),h=Ei(s.toLowerCase()),c=a.footnoteOrder.indexOf(s);let d,g=a.footnoteCounts.get(s);g===void 0?(g=0,a.footnoteOrder.push(s),d=a.footnoteOrder.length):d=c+1,g+=1,a.footnoteCounts.set(s,g);const p={type:"element",tagName:"a",properties:{href:"#"+o+"fn-"+h,id:o+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(r,p);const m={type:"element",tagName:"sup",properties:{},children:[p]};return a.patch(r,m),a.applyData(r,m)}function Z0(a,r){const o={type:"element",tagName:"h"+r.depth,properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function J0(a,r){if(a.options.allowDangerousHtml){const o={type:"raw",value:r.value};return a.patch(r,o),a.applyData(r,o)}}function Cp(a,r){const o=r.referenceType;let s="]";if(o==="collapsed"?s+="[]":o==="full"&&(s+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+s}];const h=a.all(r),c=h[0];c&&c.type==="text"?c.value="["+c.value:h.unshift({type:"text",value:"["});const d=h[h.length-1];return d&&d.type==="text"?d.value+=s:h.push({type:"text",value:s}),h}function P0(a,r){const o=String(r.identifier).toUpperCase(),s=a.definitionById.get(o);if(!s)return Cp(a,r);const h={src:Ei(s.url||""),alt:r.alt};s.title!==null&&s.title!==void 0&&(h.title=s.title);const c={type:"element",tagName:"img",properties:h,children:[]};return a.patch(r,c),a.applyData(r,c)}function $0(a,r){const o={src:Ei(r.url)};r.alt!==null&&r.alt!==void 0&&(o.alt=r.alt),r.title!==null&&r.title!==void 0&&(o.title=r.title);const s={type:"element",tagName:"img",properties:o,children:[]};return a.patch(r,s),a.applyData(r,s)}function eS(a,r){const o={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};a.patch(r,o);const s={type:"element",tagName:"code",properties:{},children:[o]};return a.patch(r,s),a.applyData(r,s)}function tS(a,r){const o=String(r.identifier).toUpperCase(),s=a.definitionById.get(o);if(!s)return Cp(a,r);const h={href:Ei(s.url||"")};s.title!==null&&s.title!==void 0&&(h.title=s.title);const c={type:"element",tagName:"a",properties:h,children:a.all(r)};return a.patch(r,c),a.applyData(r,c)}function nS(a,r){const o={href:Ei(r.url)};r.title!==null&&r.title!==void 0&&(o.title=r.title);const s={type:"element",tagName:"a",properties:o,children:a.all(r)};return a.patch(r,s),a.applyData(r,s)}function aS(a,r,o){const s=a.all(r),h=o?iS(o):Mp(r),c={},d=[];if(typeof r.checked=="boolean"){const y=s[0];let w;y&&y.type==="element"&&y.tagName==="p"?w=y:(w={type:"element",tagName:"p",properties:{},children:[]},s.unshift(w)),w.children.length>0&&w.children.unshift({type:"text",value:" "}),w.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let g=-1;for(;++g<s.length;){const y=s[g];(h||g!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!h?d.push(...y.children):d.push(y)}const p=s[s.length-1];p&&(h||p.type!=="element"||p.tagName!=="p")&&d.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:d};return a.patch(r,m),a.applyData(r,m)}function iS(a){let r=!1;if(a.type==="list"){r=a.spread||!1;const o=a.children;let s=-1;for(;!r&&++s<o.length;)r=Mp(o[s])}return r}function Mp(a){const r=a.spread;return r??a.children.length>1}function rS(a,r){const o={},s=a.all(r);let h=-1;for(typeof r.start=="number"&&r.start!==1&&(o.start=r.start);++h<s.length;){const d=s[h];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){o.className=["contains-task-list"];break}}const c={type:"element",tagName:r.ordered?"ol":"ul",properties:o,children:a.wrap(s,!0)};return a.patch(r,c),a.applyData(r,c)}function oS(a,r){const o={type:"element",tagName:"p",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function sS(a,r){const o={type:"root",children:a.wrap(a.all(r))};return a.patch(r,o),a.applyData(r,o)}function lS(a,r){const o={type:"element",tagName:"strong",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}function uS(a,r){const o=a.all(r),s=o.shift(),h=[];if(s){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([s],!0)};a.patch(r.children[0],d),h.push(d)}if(o.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(o,!0)},g=Sh(r.children[1]),p=lp(r.children[r.children.length-1]);g&&p&&(d.position={start:g,end:p}),h.push(d)}const c={type:"element",tagName:"table",properties:{},children:a.wrap(h,!0)};return a.patch(r,c),a.applyData(r,c)}function hS(a,r,o){const s=o?o.children:void 0,c=(s?s.indexOf(r):1)===0?"th":"td",d=o&&o.type==="table"?o.align:void 0,g=d?d.length:r.children.length;let p=-1;const m=[];for(;++p<g;){const w=r.children[p],T={},v=d?d[p]:void 0;v&&(T.align=v);let H={type:"element",tagName:c,properties:T,children:[]};w&&(H.children=a.all(w),a.patch(w,H),H=a.applyData(w,H)),m.push(H)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(r,y),a.applyData(r,y)}function cS(a,r){const o={type:"element",tagName:"td",properties:{},children:a.all(r)};return a.patch(r,o),a.applyData(r,o)}const yg=9,wg=32;function dS(a){const r=String(a),o=/\r?\n|\r/g;let s=o.exec(r),h=0;const c=[];for(;s;)c.push(bg(r.slice(h,s.index),h>0,!0),s[0]),h=s.index+s[0].length,s=o.exec(r);return c.push(bg(r.slice(h),h>0,!1)),c.join("")}function bg(a,r,o){let s=0,h=a.length;if(r){let c=a.codePointAt(s);for(;c===yg||c===wg;)s++,c=a.codePointAt(s)}if(o){let c=a.codePointAt(h-1);for(;c===yg||c===wg;)h--,c=a.codePointAt(h-1)}return h>s?a.slice(s,h):""}function fS(a,r){const o={type:"text",value:dS(String(r.value))};return a.patch(r,o),a.applyData(r,o)}function mS(a,r){const o={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(r,o),a.applyData(r,o)}const gS={blockquote:F0,break:V0,code:G0,delete:Q0,emphasis:X0,footnoteReference:K0,heading:Z0,html:J0,imageReference:P0,image:$0,inlineCode:eS,linkReference:tS,link:nS,listItem:aS,list:rS,paragraph:oS,root:sS,strong:lS,table:uS,tableCell:cS,tableRow:hS,text:fS,thematicBreak:mS,toml:ns,yaml:ns,definition:ns,footnoteDefinition:ns};function ns(){}const zp=-1,ps=0,Mr=1,hs=2,Dh=3,Rh=4,Ih=5,Bh=6,Dp=7,Rp=8,vg=typeof self=="object"?self:globalThis,pS=(a,r)=>{const o=(h,c)=>(a.set(c,h),h),s=h=>{if(a.has(h))return a.get(h);const[c,d]=r[h];switch(c){case ps:case zp:return o(d,h);case Mr:{const g=o([],h);for(const p of d)g.push(s(p));return g}case hs:{const g=o({},h);for(const[p,m]of d)g[s(p)]=s(m);return g}case Dh:return o(new Date(d),h);case Rh:{const{source:g,flags:p}=d;return o(new RegExp(g,p),h)}case Ih:{const g=o(new Map,h);for(const[p,m]of d)g.set(s(p),s(m));return g}case Bh:{const g=o(new Set,h);for(const p of d)g.add(s(p));return g}case Dp:{const{name:g,message:p}=d;return o(new vg[g](p),h)}case Rp:return o(BigInt(d),h);case"BigInt":return o(Object(BigInt(d)),h);case"ArrayBuffer":return o(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:g}=new Uint8Array(d);return o(new DataView(g),d)}}return o(new vg[c](d),h)};return s},kg=a=>pS(new Map,a)(0),bi="",{toString:yS}={},{keys:wS}=Object,Er=a=>{const r=typeof a;if(r!=="object"||!a)return[ps,r];const o=yS.call(a).slice(8,-1);switch(o){case"Array":return[Mr,bi];case"Object":return[hs,bi];case"Date":return[Dh,bi];case"RegExp":return[Rh,bi];case"Map":return[Ih,bi];case"Set":return[Bh,bi];case"DataView":return[Mr,o]}return o.includes("Array")?[Mr,o]:o.includes("Error")?[Dp,o]:[hs,o]},as=([a,r])=>a===ps&&(r==="function"||r==="symbol"),bS=(a,r,o,s)=>{const h=(d,g)=>{const p=s.push(d)-1;return o.set(g,p),p},c=d=>{if(o.has(d))return o.get(d);let[g,p]=Er(d);switch(g){case ps:{let y=d;switch(p){case"bigint":g=Rp,y=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return h([zp],d)}return h([g,y],d)}case Mr:{if(p){let T=d;return p==="DataView"?T=new Uint8Array(d.buffer):p==="ArrayBuffer"&&(T=new Uint8Array(d)),h([p,[...T]],d)}const y=[],w=h([g,y],d);for(const T of d)y.push(c(T));return w}case hs:{if(p)switch(p){case"BigInt":return h([p,d.toString()],d);case"Boolean":case"Number":case"String":return h([p,d.valueOf()],d)}if(r&&"toJSON"in d)return c(d.toJSON());const y=[],w=h([g,y],d);for(const T of wS(d))(a||!as(Er(d[T])))&&y.push([c(T),c(d[T])]);return w}case Dh:return h([g,d.toISOString()],d);case Rh:{const{source:y,flags:w}=d;return h([g,{source:y,flags:w}],d)}case Ih:{const y=[],w=h([g,y],d);for(const[T,v]of d)(a||!(as(Er(T))||as(Er(v))))&&y.push([c(T),c(v)]);return w}case Bh:{const y=[],w=h([g,y],d);for(const T of d)(a||!as(Er(T)))&&y.push(c(T));return w}}const{message:m}=d;return h([g,{name:p,message:m}],d)};return c},Tg=(a,{json:r,lossy:o}={})=>{const s=[];return bS(!(r||o),!!r,new Map,s)(a),s},cs=typeof structuredClone=="function"?(a,r)=>r&&("json"in r||"lossy"in r)?kg(Tg(a,r)):structuredClone(a):(a,r)=>kg(Tg(a,r));function vS(a,r){const o=[{type:"text",value:"↩"}];return r>1&&o.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),o}function kS(a,r){return"Back to reference "+(a+1)+(r>1?"-"+r:"")}function TS(a){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",o=a.options.footnoteBackContent||vS,s=a.options.footnoteBackLabel||kS,h=a.options.footnoteLabel||"Footnotes",c=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},g=[];let p=-1;for(;++p<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[p]);if(!m)continue;const y=a.all(m),w=String(m.identifier).toUpperCase(),T=Ei(w.toLowerCase());let v=0;const H=[],N=a.footnoteCounts.get(w);for(;N!==void 0&&++v<=N;){H.length>0&&H.push({type:"text",value:" "});let X=typeof o=="string"?o:o(p,v);typeof X=="string"&&(X={type:"text",value:X}),H.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+T+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof s=="string"?s:s(p,v),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}const I=y[y.length-1];if(I&&I.type==="element"&&I.tagName==="p"){const X=I.children[I.children.length-1];X&&X.type==="text"?X.value+=" ":I.children.push({type:"text",value:" "}),I.children.push(...H)}else y.push(...H);const B={type:"element",tagName:"li",properties:{id:r+"fn-"+T},children:a.wrap(y,!0)};a.patch(m,B),g.push(B)}if(g.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...cs(d),id:"footnote-label"},children:[{type:"text",value:h}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(g,!0)},{type:"text",value:`
`}]}}const Ip=(function(a){if(a==null)return AS;if(typeof a=="function")return ys(a);if(typeof a=="object")return Array.isArray(a)?SS(a):xS(a);if(typeof a=="string")return ES(a);throw new Error("Expected function, string, or object as test")});function SS(a){const r=[];let o=-1;for(;++o<a.length;)r[o]=Ip(a[o]);return ys(s);function s(...h){let c=-1;for(;++c<r.length;)if(r[c].apply(this,h))return!0;return!1}}function xS(a){const r=a;return ys(o);function o(s){const h=s;let c;for(c in a)if(h[c]!==r[c])return!1;return!0}}function ES(a){return ys(r);function r(o){return o&&o.type===a}}function ys(a){return r;function r(o,s,h){return!!(CS(o)&&a.call(this,o,typeof s=="number"?s:void 0,h||void 0))}}function AS(){return!0}function CS(a){return a!==null&&typeof a=="object"&&"type"in a}const Bp=[],MS=!0,Sg=!1,zS="skip";function DS(a,r,o,s){let h;typeof r=="function"&&typeof o!="function"?(s=o,o=r):h=r;const c=Ip(h),d=s?-1:1;g(a,void 0,[])();function g(p,m,y){const w=p&&typeof p=="object"?p:{};if(typeof w.type=="string"){const v=typeof w.tagName=="string"?w.tagName:typeof w.name=="string"?w.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return T;function T(){let v=Bp,H,N,I;if((!r||c(p,m,y[y.length-1]||void 0))&&(v=RS(o(p,y)),v[0]===Sg))return v;if("children"in p&&p.children){const B=p;if(B.children&&v[0]!==zS)for(N=(s?B.children.length:-1)+d,I=y.concat(B);N>-1&&N<B.children.length;){const X=B.children[N];if(H=g(X,N,I)(),H[0]===Sg)return H;N=typeof H[1]=="number"?H[1]:N+d}}return v}}}function RS(a){return Array.isArray(a)?a:typeof a=="number"?[MS,a]:a==null?Bp:[a]}function Op(a,r,o,s){let h,c,d;typeof r=="function"&&typeof o!="function"?(c=void 0,d=r,h=o):(c=r,d=o,h=s),DS(a,c,g,h);function g(p,m){const y=m[m.length-1],w=y?y.children.indexOf(p):void 0;return d(p,w,y)}}const hh={}.hasOwnProperty,IS={};function BS(a,r){const o=r||IS,s=new Map,h=new Map,c=new Map,d={...gS,...o.handlers},g={all:m,applyData:HS,definitionById:s,footnoteById:h,footnoteCounts:c,footnoteOrder:[],handlers:d,one:p,options:o,patch:OS,wrap:jS};return Op(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const w=y.type==="definition"?s:h,T=String(y.identifier).toUpperCase();w.has(T)||w.set(T,y)}}),g;function p(y,w){const T=y.type,v=g.handlers[T];if(hh.call(g.handlers,T)&&v)return v(g,y,w);if(g.options.passThrough&&g.options.passThrough.includes(T)){if("children"in y){const{children:N,...I}=y,B=cs(I);return B.children=g.all(y),B}return cs(y)}return(g.options.unknownHandler||NS)(g,y,w)}function m(y){const w=[];if("children"in y){const T=y.children;let v=-1;for(;++v<T.length;){const H=g.one(T[v],y);if(H){if(v&&T[v-1].type==="break"&&(!Array.isArray(H)&&H.type==="text"&&(H.value=xg(H.value)),!Array.isArray(H)&&H.type==="element")){const N=H.children[0];N&&N.type==="text"&&(N.value=xg(N.value))}Array.isArray(H)?w.push(...H):w.push(H)}}}return w}}function OS(a,r){a.position&&(r.position=yk(a))}function HS(a,r){let o=r;if(a&&a.data){const s=a.data.hName,h=a.data.hChildren,c=a.data.hProperties;if(typeof s=="string")if(o.type==="element")o.tagName=s;else{const d="children"in o?o.children:[o];o={type:"element",tagName:s,properties:{},children:d}}o.type==="element"&&c&&Object.assign(o.properties,cs(c)),"children"in o&&o.children&&h!==null&&h!==void 0&&(o.children=h)}return o}function NS(a,r){const o=r.data||{},s="value"in r&&!(hh.call(o,"hProperties")||hh.call(o,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:a.all(r)};return a.patch(r,s),a.applyData(r,s)}function jS(a,r){const o=[];let s=-1;for(r&&o.push({type:"text",value:`
`});++s<a.length;)s&&o.push({type:"text",value:`
`}),o.push(a[s]);return r&&a.length>0&&o.push({type:"text",value:`
`}),o}function xg(a){let r=0,o=a.charCodeAt(r);for(;o===9||o===32;)r++,o=a.charCodeAt(r);return a.slice(r)}function Eg(a,r){const o=BS(a,r),s=o.one(a,void 0),h=TS(o),c=Array.isArray(s)?{type:"root",children:s}:s||{type:"root",children:[]};return h&&c.children.push({type:"text",value:`
`},h),c}function LS(a,r){return a&&"run"in a?async function(o,s){const h=Eg(o,{file:s,...r});await a.run(h,s)}:function(o,s){return Eg(o,{file:s,...a||r})}}function Ag(a){if(a)throw a}var Qu,Cg;function _S(){if(Cg)return Qu;Cg=1;var a=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,h=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},c=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var y=a.call(m,"constructor"),w=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!w)return!1;var T;for(T in m);return typeof T>"u"||a.call(m,T)},d=function(m,y){o&&y.name==="__proto__"?o(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},g=function(m,y){if(y==="__proto__")if(a.call(m,y)){if(s)return s(m,y).value}else return;return m[y]};return Qu=function p(){var m,y,w,T,v,H,N=arguments[0],I=1,B=arguments.length,X=!1;for(typeof N=="boolean"&&(X=N,N=arguments[1]||{},I=2),(N==null||typeof N!="object"&&typeof N!="function")&&(N={});I<B;++I)if(m=arguments[I],m!=null)for(y in m)w=g(N,y),T=g(m,y),N!==T&&(X&&T&&(c(T)||(v=h(T)))?(v?(v=!1,H=w&&h(w)?w:[]):H=w&&c(w)?w:{},d(N,{name:y,newValue:p(X,H,T)})):typeof T<"u"&&d(N,{name:y,newValue:T}));return N},Qu}var qS=_S();const Xu=Bg(qS);function ch(a){if(typeof a!="object"||a===null)return!1;const r=Object.getPrototypeOf(a);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function WS(){const a=[],r={run:o,use:s};return r;function o(...h){let c=-1;const d=h.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);g(null,...h);function g(p,...m){const y=a[++c];let w=-1;if(p){d(p);return}for(;++w<h.length;)(m[w]===null||m[w]===void 0)&&(m[w]=h[w]);h=m,y?YS(y,g)(...m):d(null,...m)}}function s(h){if(typeof h!="function")throw new TypeError("Expected `middelware` to be a function, not "+h);return a.push(h),r}}function YS(a,r){let o;return s;function s(...d){const g=a.length>d.length;let p;g&&d.push(h);try{p=a.apply(this,d)}catch(m){const y=m;if(g&&o)throw y;return h(y)}g||(p&&p.then&&typeof p.then=="function"?p.then(c,h):p instanceof Error?h(p):c(p))}function h(d,...g){o||(o=!0,r(d,...g))}function c(d){h(null,d)}}const hn={basename:US,dirname:FS,extname:VS,join:GS,sep:"/"};function US(a,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Or(a);let o=0,s=-1,h=a.length,c;if(r===void 0||r.length===0||r.length>a.length){for(;h--;)if(a.codePointAt(h)===47){if(c){o=h+1;break}}else s<0&&(c=!0,s=h+1);return s<0?"":a.slice(o,s)}if(r===a)return"";let d=-1,g=r.length-1;for(;h--;)if(a.codePointAt(h)===47){if(c){o=h+1;break}}else d<0&&(c=!0,d=h+1),g>-1&&(a.codePointAt(h)===r.codePointAt(g--)?g<0&&(s=h):(g=-1,s=d));return o===s?s=d:s<0&&(s=a.length),a.slice(o,s)}function FS(a){if(Or(a),a.length===0)return".";let r=-1,o=a.length,s;for(;--o;)if(a.codePointAt(o)===47){if(s){r=o;break}}else s||(s=!0);return r<0?a.codePointAt(0)===47?"/":".":r===1&&a.codePointAt(0)===47?"//":a.slice(0,r)}function VS(a){Or(a);let r=a.length,o=-1,s=0,h=-1,c=0,d;for(;r--;){const g=a.codePointAt(r);if(g===47){if(d){s=r+1;break}continue}o<0&&(d=!0,o=r+1),g===46?h<0?h=r:c!==1&&(c=1):h>-1&&(c=-1)}return h<0||o<0||c===0||c===1&&h===o-1&&h===s+1?"":a.slice(h,o)}function GS(...a){let r=-1,o;for(;++r<a.length;)Or(a[r]),a[r]&&(o=o===void 0?a[r]:o+"/"+a[r]);return o===void 0?".":QS(o)}function QS(a){Or(a);const r=a.codePointAt(0)===47;let o=XS(a,!r);return o.length===0&&!r&&(o="."),o.length>0&&a.codePointAt(a.length-1)===47&&(o+="/"),r?"/"+o:o}function XS(a,r){let o="",s=0,h=-1,c=0,d=-1,g,p;for(;++d<=a.length;){if(d<a.length)g=a.codePointAt(d);else{if(g===47)break;g=47}if(g===47){if(!(h===d-1||c===1))if(h!==d-1&&c===2){if(o.length<2||s!==2||o.codePointAt(o.length-1)!==46||o.codePointAt(o.length-2)!==46){if(o.length>2){if(p=o.lastIndexOf("/"),p!==o.length-1){p<0?(o="",s=0):(o=o.slice(0,p),s=o.length-1-o.lastIndexOf("/")),h=d,c=0;continue}}else if(o.length>0){o="",s=0,h=d,c=0;continue}}r&&(o=o.length>0?o+"/..":"..",s=2)}else o.length>0?o+="/"+a.slice(h+1,d):o=a.slice(h+1,d),s=d-h-1;h=d,c=0}else g===46&&c>-1?c++:c=-1}return o}function Or(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const KS={cwd:ZS};function ZS(){return"/"}function dh(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function JS(a){if(typeof a=="string")a=new URL(a);else if(!dh(a)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(a.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return PS(a)}function PS(a){if(a.hostname!==""){const s=new TypeError('File URL host must be "localhost" or empty on darwin');throw s.code="ERR_INVALID_FILE_URL_HOST",s}const r=a.pathname;let o=-1;for(;++o<r.length;)if(r.codePointAt(o)===37&&r.codePointAt(o+1)===50){const s=r.codePointAt(o+2);if(s===70||s===102){const h=new TypeError("File URL path must not include encoded / characters");throw h.code="ERR_INVALID_FILE_URL_PATH",h}}return decodeURIComponent(r)}const Ku=["history","path","basename","stem","extname","dirname"];class Hp{constructor(r){let o;r?dh(r)?o={path:r}:typeof r=="string"||$S(r)?o={value:r}:o=r:o={},this.cwd="cwd"in o?"":KS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let s=-1;for(;++s<Ku.length;){const c=Ku[s];c in o&&o[c]!==void 0&&o[c]!==null&&(this[c]=c==="history"?[...o[c]]:o[c])}let h;for(h in o)Ku.includes(h)||(this[h]=o[h])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(r){Ju(r,"basename"),Zu(r,"basename"),this.path=hn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(r){Mg(this.basename,"dirname"),this.path=hn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(r){if(Zu(r,"extname"),Mg(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){dh(r)&&(r=JS(r)),Ju(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(r){Ju(r,"stem"),Zu(r,"stem"),this.path=hn.join(this.dirname||"",r+(this.extname||""))}fail(r,o,s){const h=this.message(r,o,s);throw h.fatal=!0,h}info(r,o,s){const h=this.message(r,o,s);return h.fatal=void 0,h}message(r,o,s){const h=new mt(r,o,s);return this.path&&(h.name=this.path+":"+h.name,h.file=this.path),h.fatal=!1,this.messages.push(h),h}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Zu(a,r){if(a&&a.includes(hn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+hn.sep+"`")}function Ju(a,r){if(!a)throw new Error("`"+r+"` cannot be empty")}function Mg(a,r){if(!a)throw new Error("Setting `"+r+"` requires `path` to be set too")}function $S(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const e1=(function(a){const s=this.constructor.prototype,h=s[a],c=function(){return h.apply(c,arguments)};return Object.setPrototypeOf(c,s),c}),t1={}.hasOwnProperty;class Oh extends e1{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=WS()}copy(){const r=new Oh;let o=-1;for(;++o<this.attachers.length;){const s=this.attachers[o];r.use(...s)}return r.data(Xu(!0,{},this.namespace)),r}data(r,o){return typeof r=="string"?arguments.length===2?(eh("data",this.frozen),this.namespace[r]=o,this):t1.call(this.namespace,r)&&this.namespace[r]||void 0:r?(eh("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[o,...s]=this.attachers[this.freezeIndex];if(s[0]===!1)continue;s[0]===!0&&(s[0]=void 0);const h=o.call(r,...s);typeof h=="function"&&this.transformers.use(h)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const o=is(r),s=this.parser||this.Parser;return Pu("parse",s),s(String(o),o)}process(r,o){const s=this;return this.freeze(),Pu("process",this.parser||this.Parser),$u("process",this.compiler||this.Compiler),o?h(void 0,o):new Promise(h);function h(c,d){const g=is(r),p=s.parse(g);s.run(p,g,function(y,w,T){if(y||!w||!T)return m(y);const v=w,H=s.stringify(v,T);i1(H)?T.value=H:T.result=H,m(y,T)});function m(y,w){y||!w?d(y):c?c(w):o(void 0,w)}}}processSync(r){let o=!1,s;return this.freeze(),Pu("processSync",this.parser||this.Parser),$u("processSync",this.compiler||this.Compiler),this.process(r,h),Dg("processSync","process",o),s;function h(c,d){o=!0,Ag(c),s=d}}run(r,o,s){zg(r),this.freeze();const h=this.transformers;return!s&&typeof o=="function"&&(s=o,o=void 0),s?c(void 0,s):new Promise(c);function c(d,g){const p=is(o);h.run(r,p,m);function m(y,w,T){const v=w||r;y?g(y):d?d(v):s(void 0,v,T)}}}runSync(r,o){let s=!1,h;return this.run(r,o,c),Dg("runSync","run",s),h;function c(d,g){Ag(d),h=g,s=!0}}stringify(r,o){this.freeze();const s=is(o),h=this.compiler||this.Compiler;return $u("stringify",h),zg(r),h(r,s)}use(r,...o){const s=this.attachers,h=this.namespace;if(eh("use",this.frozen),r!=null)if(typeof r=="function")p(r,o);else if(typeof r=="object")Array.isArray(r)?g(r):d(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function c(m){if(typeof m=="function")p(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...w]=m;p(y,w)}else d(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function d(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");g(m.plugins),m.settings&&(h.settings=Xu(!0,h.settings,m.settings))}function g(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const w=m[y];c(w)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function p(m,y){let w=-1,T=-1;for(;++w<s.length;)if(s[w][0]===m){T=w;break}if(T===-1)s.push([m,...y]);else if(y.length>0){let[v,...H]=y;const N=s[T][1];ch(N)&&ch(v)&&(v=Xu(!0,N,v)),s[T]=[m,v,...H]}}}}const n1=new Oh().freeze();function Pu(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function $u(a,r){if(typeof r!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function eh(a,r){if(r)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function zg(a){if(!ch(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Dg(a,r,o){if(!o)throw new Error("`"+a+"` finished async. Use `"+r+"` instead")}function is(a){return a1(a)?a:new Hp(a)}function a1(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function i1(a){return typeof a=="string"||r1(a)}function r1(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const o1="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Rg=[],Ig={allowDangerousHtml:!0},s1=/^(https?|ircs?|mailto|xmpp)$/i,l1=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function u1(a){const r=h1(a),o=c1(a);return d1(r.runSync(r.parse(o),o),a)}function h1(a){const r=a.rehypePlugins||Rg,o=a.remarkPlugins||Rg,s=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Ig}:Ig;return n1().use(U0).use(o).use(LS,s).use(r)}function c1(a){const r=a.children||"",o=new Hp;return typeof r=="string"&&(o.value=r),o}function d1(a,r){const o=r.allowedElements,s=r.allowElement,h=r.components,c=r.disallowedElements,d=r.skipHtml,g=r.unwrapDisallowed,p=r.urlTransform||f1;for(const y of l1)Object.hasOwn(r,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+o1+y.id,void 0);return Op(a,m),Tk(a,{Fragment:Z.Fragment,components:h,ignoreInvalidStyle:!0,jsx:Z.jsx,jsxs:Z.jsxs,passKeys:!0,passNode:!0});function m(y,w,T){if(y.type==="raw"&&T&&typeof w=="number")return d?T.children.splice(w,1):T.children[w]={type:"text",value:y.value},w;if(y.type==="element"){let v;for(v in Fu)if(Object.hasOwn(Fu,v)&&Object.hasOwn(y.properties,v)){const H=y.properties[v],N=Fu[v];(N===null||N.includes(y.tagName))&&(y.properties[v]=p(String(H||""),v,y))}}if(y.type==="element"){let v=o?!o.includes(y.tagName):c?c.includes(y.tagName):!1;if(!v&&s&&typeof w=="number"&&(v=!s(y,w,T)),v&&T&&typeof w=="number")return g&&y.children?T.children.splice(w,1,...y.children):T.children.splice(w,1),w}}}function f1(a){const r=a.indexOf(":"),o=a.indexOf("?"),s=a.indexOf("#"),h=a.indexOf("/");return r===-1||h!==-1&&r>h||o!==-1&&r>o||s!==-1&&r>s||s1.test(a.slice(0,r))?a:""}function m1(a){return new Date(a+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function g1(){const{seriesId:a,day:r}=Vg(),o=ep(a||""),s=Number(r),h=o?.lessons.find(m=>m.day===s),[c,d]=L.useState("parable");if(L.useEffect(()=>{window.scrollTo(0,0)},[a,r]),!o)return Z.jsx(Kg,{to:"/",replace:!0});if(!h)return Z.jsxs("div",{className:"container",children:[Z.jsx("p",{children:"Lesson not found."}),Z.jsxs(Pt,{to:`/${o.id}`,className:"nav-link",children:["← Back to ",o.name]})]});const g=o.lessons.find(m=>m.day===s-1),p=o.lessons.find(m=>m.day===s+1);return Z.jsxs("div",{className:"container",children:[Z.jsxs("nav",{className:"breadcrumb",children:[Z.jsx(Pt,{to:"/",className:"nav-link",children:"Home"}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsx(Pt,{to:`/${o.id}`,className:"nav-link",children:o.name}),Z.jsx("span",{className:"breadcrumb-sep",children:"›"}),Z.jsxs("span",{children:["Day ",h.day]})]}),h.image&&Z.jsx("div",{className:"lesson-hero",children:Z.jsx("img",{src:`/parable/${h.image}`,alt:h.title})}),Z.jsxs("header",{className:"lesson-header",children:[Z.jsxs("span",{className:"lesson-day-badge",children:["Day ",h.day]}),Z.jsx("h1",{children:h.title}),Z.jsx("p",{className:"lesson-date",children:m1(h.date)})]}),Z.jsxs("div",{className:"toggle-container",children:[Z.jsx("button",{className:`toggle-btn ${c==="parable"?"active":""}`,onClick:()=>d("parable"),children:"🏰 Parable"}),Z.jsx("button",{className:`toggle-btn ${c==="standard"?"active":""}`,onClick:()=>d("standard"),children:"📖 Standard"}),h.sonnet&&Z.jsx("button",{className:`toggle-btn ${c==="sonnet"?"active":""}`,onClick:()=>d("sonnet"),children:"🪶 Sonnet"})]}),Z.jsx("article",{className:`lesson-content ${c}`,children:Z.jsx(u1,{children:c==="parable"?h.parable:c==="sonnet"?h.sonnet||"":h.standard})},c),Z.jsxs("nav",{className:"bottom-nav",children:[g?Z.jsxs(Pt,{to:`/${o.id}/lesson/${g.day}`,className:"nav-link",children:["← Day ",g.day]}):Z.jsx("span",{}),p?Z.jsxs(Pt,{to:`/${o.id}/lesson/${p.day}`,className:"nav-link",children:["Day ",p.day," →"]}):Z.jsx("span",{})]})]})}function p1(){const[a,r]=L.useState(!1);return Z.jsx(Av,{children:Z.jsxs("div",{className:"app-layout",children:[Z.jsx(Fv,{open:a,onClose:()=>r(!1)}),Z.jsxs("div",{className:"main-content",children:[Z.jsx("button",{className:"hamburger",onClick:()=>r(!0),"aria-label":"Open menu",children:"☰"}),Z.jsxs(nv,{children:[Z.jsx(rs,{path:"/",element:Z.jsx(Vv,{})}),Z.jsx(rs,{path:"/:seriesId",element:Z.jsx(Qv,{})}),Z.jsx(rs,{path:"/:seriesId/lesson/:day",element:Z.jsx(g1,{})})]})]})]})})}rb.createRoot(document.getElementById("root")).render(Z.jsx(L.StrictMode,{children:Z.jsx(p1,{})}));
