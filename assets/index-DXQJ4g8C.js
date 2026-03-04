(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(h){if(h.ep)return;h.ep=!0;const c=r(h);fetch(h.href,c)}})();function Hg(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ju={exports:{}},ko={};var jm;function Jw(){if(jm)return ko;jm=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(s,h,c){var d=null;if(c!==void 0&&(d=""+c),h.key!==void 0&&(d=""+h.key),"key"in h){c={};for(var g in h)g!=="key"&&(c[g]=h[g])}else c=h;return h=c.ref,{$$typeof:a,type:s,key:d,ref:h!==void 0?h:null,props:c}}return ko.Fragment=o,ko.jsx=r,ko.jsxs=r,ko}var Om;function Pw(){return Om||(Om=1,ju.exports=Jw()),ju.exports}var K=Pw(),Ou={exports:{}},ge={};var Hm;function $w(){if(Hm)return ge;Hm=1;var a=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.iterator;function v(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,R={};function B(E,_,k){this.props=E,this.context=_,this.refs=R,this.updater=k||O}B.prototype.isReactComponent={},B.prototype.setState=function(E,_){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,_,"setState")},B.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function X(){}X.prototype=B.prototype;function V(E,_,k){this.props=E,this.context=_,this.refs=R,this.updater=k||O}var oe=V.prototype=new X;oe.constructor=V,H(oe,B.prototype),oe.isPureReactComponent=!0;var le=Array.isArray;function L(){}var J={H:null,A:null,T:null,S:null},ce=Object.prototype.hasOwnProperty;function fe(E,_,k){var P=k.ref;return{$$typeof:a,type:E,key:_,ref:P!==void 0?P:null,props:k}}function be(E,_){return fe(E.type,_,E.props)}function ee(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function $(E){var _={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(k){return _[k]})}var ke=/\/+/g;function ne(E,_){return typeof E=="object"&&E!==null&&E.key!=null?$(""+E.key):_.toString(36)}function Q(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(L,L):(E.status="pending",E.then(function(_){E.status==="pending"&&(E.status="fulfilled",E.value=_)},function(_){E.status==="pending"&&(E.status="rejected",E.reason=_)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function D(E,_,k,P,he){var re=typeof E;(re==="undefined"||re==="boolean")&&(E=null);var Ee=!1;if(E===null)Ee=!0;else switch(re){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(E.$$typeof){case a:case o:Ee=!0;break;case y:return Ee=E._init,D(Ee(E._payload),_,k,P,he)}}if(Ee)return he=he(E),Ee=P===""?"."+ne(E,0):P,le(he)?(k="",Ee!=null&&(k=Ee.replace(ke,"$&/")+"/"),D(he,_,k,"",function(qt){return qt})):he!=null&&(ee(he)&&(he=be(he,k+(he.key==null||E&&E.key===he.key?"":(""+he.key).replace(ke,"$&/")+"/")+Ee)),_.push(he)),1;Ee=0;var Qe=P===""?".":P+":";if(le(E))for(var He=0;He<E.length;He++)P=E[He],re=Qe+ne(P,He),Ee+=D(P,_,k,re,he);else if(He=v(E),typeof He=="function")for(E=He.call(E),He=0;!(P=E.next()).done;)P=P.value,re=Qe+ne(P,He++),Ee+=D(P,_,k,re,he);else if(re==="object"){if(typeof E.then=="function")return D(Q(E),_,k,P,he);throw _=String(E),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function F(E,_,k){if(E==null)return E;var P=[],he=0;return D(E,P,"","",function(re){return _.call(k,re,he++)}),P}function ie(E){if(E._status===-1){var _=E._result;_=_(),_.then(function(k){(E._status===0||E._status===-1)&&(E._status=1,E._result=k)},function(k){(E._status===0||E._status===-1)&&(E._status=2,E._result=k)}),E._status===-1&&(E._status=0,E._result=_)}if(E._status===1)return E._result.default;throw E._result}var ve=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},S={map:F,forEach:function(E,_,k){F(E,function(){_.apply(this,arguments)},k)},count:function(E){var _=0;return F(E,function(){_++}),_},toArray:function(E){return F(E,function(_){return _})||[]},only:function(E){if(!ee(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ge.Activity=w,ge.Children=S,ge.Component=B,ge.Fragment=r,ge.Profiler=h,ge.PureComponent=V,ge.StrictMode=s,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ge.__COMPILER_RUNTIME={__proto__:null,c:function(E){return J.H.useMemoCache(E)}},ge.cache=function(E){return function(){return E.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(E,_,k){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var P=H({},E.props),he=E.key;if(_!=null)for(re in _.key!==void 0&&(he=""+_.key),_)!ce.call(_,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&_.ref===void 0||(P[re]=_[re]);var re=arguments.length-2;if(re===1)P.children=k;else if(1<re){for(var Ee=Array(re),Qe=0;Qe<re;Qe++)Ee[Qe]=arguments[Qe+2];P.children=Ee}return fe(E.type,he,P)},ge.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ge.createElement=function(E,_,k){var P,he={},re=null;if(_!=null)for(P in _.key!==void 0&&(re=""+_.key),_)ce.call(_,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(he[P]=_[P]);var Ee=arguments.length-2;if(Ee===1)he.children=k;else if(1<Ee){for(var Qe=Array(Ee),He=0;He<Ee;He++)Qe[He]=arguments[He+2];he.children=Qe}if(E&&E.defaultProps)for(P in Ee=E.defaultProps,Ee)he[P]===void 0&&(he[P]=Ee[P]);return fe(E,re,he)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(E){return{$$typeof:g,render:E}},ge.isValidElement=ee,ge.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ie}},ge.memo=function(E,_){return{$$typeof:m,type:E,compare:_===void 0?null:_}},ge.startTransition=function(E){var _=J.T,k={};J.T=k;try{var P=E(),he=J.S;he!==null&&he(k,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(L,ve)}catch(re){ve(re)}finally{_!==null&&k.types!==null&&(_.types=k.types),J.T=_}},ge.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ge.use=function(E){return J.H.use(E)},ge.useActionState=function(E,_,k){return J.H.useActionState(E,_,k)},ge.useCallback=function(E,_){return J.H.useCallback(E,_)},ge.useContext=function(E){return J.H.useContext(E)},ge.useDebugValue=function(){},ge.useDeferredValue=function(E,_){return J.H.useDeferredValue(E,_)},ge.useEffect=function(E,_){return J.H.useEffect(E,_)},ge.useEffectEvent=function(E){return J.H.useEffectEvent(E)},ge.useId=function(){return J.H.useId()},ge.useImperativeHandle=function(E,_,k){return J.H.useImperativeHandle(E,_,k)},ge.useInsertionEffect=function(E,_){return J.H.useInsertionEffect(E,_)},ge.useLayoutEffect=function(E,_){return J.H.useLayoutEffect(E,_)},ge.useMemo=function(E,_){return J.H.useMemo(E,_)},ge.useOptimistic=function(E,_){return J.H.useOptimistic(E,_)},ge.useReducer=function(E,_,k){return J.H.useReducer(E,_,k)},ge.useRef=function(E){return J.H.useRef(E)},ge.useState=function(E){return J.H.useState(E)},ge.useSyncExternalStore=function(E,_,k){return J.H.useSyncExternalStore(E,_,k)},ge.useTransition=function(){return J.H.useTransition()},ge.version="19.2.4",ge}var Nm;function mh(){return Nm||(Nm=1,Ou.exports=$w()),Ou.exports}var N=mh(),Hu={exports:{}},To={},Nu={exports:{}},Wu={};var Wm;function eb(){return Wm||(Wm=1,(function(a){function o(D,F){var ie=D.length;D.push(F);e:for(;0<ie;){var ve=ie-1>>>1,S=D[ve];if(0<h(S,F))D[ve]=F,D[ie]=S,ie=ve;else break e}}function r(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var F=D[0],ie=D.pop();if(ie!==F){D[0]=ie;e:for(var ve=0,S=D.length,E=S>>>1;ve<E;){var _=2*(ve+1)-1,k=D[_],P=_+1,he=D[P];if(0>h(k,ie))P<S&&0>h(he,k)?(D[ve]=he,D[P]=ie,ve=P):(D[ve]=k,D[_]=ie,ve=_);else if(P<S&&0>h(he,ie))D[ve]=he,D[P]=ie,ve=P;else break e}}return F}function h(D,F){var ie=D.sortIndex-F.sortIndex;return ie!==0?ie:D.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();a.unstable_now=function(){return d.now()-g}}var p=[],m=[],y=1,w=null,T=3,v=!1,O=!1,H=!1,R=!1,B=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function oe(D){for(var F=r(m);F!==null;){if(F.callback===null)s(m);else if(F.startTime<=D)s(m),F.sortIndex=F.expirationTime,o(p,F);else break;F=r(m)}}function le(D){if(H=!1,oe(D),!O)if(r(p)!==null)O=!0,L||(L=!0,$());else{var F=r(m);F!==null&&Q(le,F.startTime-D)}}var L=!1,J=-1,ce=5,fe=-1;function be(){return R?!0:!(a.unstable_now()-fe<ce)}function ee(){if(R=!1,L){var D=a.unstable_now();fe=D;var F=!0;try{e:{O=!1,H&&(H=!1,X(J),J=-1),v=!0;var ie=T;try{t:{for(oe(D),w=r(p);w!==null&&!(w.expirationTime>D&&be());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,T=w.priorityLevel;var S=ve(w.expirationTime<=D);if(D=a.unstable_now(),typeof S=="function"){w.callback=S,oe(D),F=!0;break t}w===r(p)&&s(p),oe(D)}else s(p);w=r(p)}if(w!==null)F=!0;else{var E=r(m);E!==null&&Q(le,E.startTime-D),F=!1}}break e}finally{w=null,T=ie,v=!1}F=void 0}}finally{F?$():L=!1}}}var $;if(typeof V=="function")$=function(){V(ee)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ne=ke.port2;ke.port1.onmessage=ee,$=function(){ne.postMessage(null)}}else $=function(){B(ee,0)};function Q(D,F){J=B(function(){D(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(D){switch(T){case 1:case 2:case 3:var F=3;break;default:F=T}var ie=T;T=F;try{return D()}finally{T=ie}},a.unstable_requestPaint=function(){R=!0},a.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ie=T;T=D;try{return F()}finally{T=ie}},a.unstable_scheduleCallback=function(D,F,ie){var ve=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,D){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ie+S,D={id:y++,callback:F,priorityLevel:D,startTime:ie,expirationTime:S,sortIndex:-1},ie>ve?(D.sortIndex=ie,o(m,D),r(p)===null&&D===r(m)&&(H?(X(J),J=-1):H=!0,Q(le,ie-ve))):(D.sortIndex=S,o(p,D),O||v||(O=!0,L||(L=!0,$()))),D},a.unstable_shouldYield=be,a.unstable_wrapCallback=function(D){var F=T;return function(){var ie=T;T=F;try{return D.apply(this,arguments)}finally{T=ie}}}})(Wu)),Wu}var Lm;function tb(){return Lm||(Lm=1,Nu.exports=eb()),Nu.exports}var Lu={exports:{}},ft={};var _m;function nb(){if(_m)return ft;_m=1;var a=mh();function o(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(o(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},h=Symbol.for("react.portal");function c(p,m,y){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:w==null?null:""+w,children:p,containerInfo:m,implementation:y}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ft.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return c(p,m,null,y)},ft.flushSync=function(p){var m=d.T,y=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=y,s.d.f()}},ft.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},ft.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ft.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,w=g(y,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,v=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:w,integrity:T,fetchPriority:v}):y==="script"&&s.d.X(p,{crossOrigin:w,integrity:T,fetchPriority:v,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ft.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},ft.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,w=g(y,m.crossOrigin);s.d.L(p,y,{crossOrigin:w,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ft.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},ft.requestFormReset=function(p){s.d.r(p)},ft.unstable_batchedUpdates=function(p,m){return p(m)},ft.useFormState=function(p,m,y){return d.H.useFormState(p,m,y)},ft.useFormStatus=function(){return d.H.useHostTransitionStatus()},ft.version="19.2.4",ft}var qm;function ab(){if(qm)return Lu.exports;qm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Lu.exports=nb(),Lu.exports}var Um;function ib(){if(Um)return To;Um=1;var a=tb(),o=mh(),r=ab();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(i=l.return,i!==null){n=i;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return p(l),e;if(u===i)return p(l),t;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=l,i=u;else{for(var f=!1,b=l.child;b;){if(b===n){f=!0,n=l,i=u;break}if(b===i){f=!0,i=l,n=u;break}b=b.sibling}if(!f){for(b=u.child;b;){if(b===n){f=!0,n=u,i=l;break}if(b===i){f=!0,i=u,n=l;break}b=b.sibling}if(!f)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,T=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),V=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case B:return"Profiler";case R:return"StrictMode";case le:return"Suspense";case L:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case V:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}var Q=Array.isArray,D=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ve=[],S=-1;function E(e){return{current:e}}function _(e){0>S||(e.current=ve[S],ve[S]=null,S--)}function k(e,t){S++,ve[S]=e.current,e.current=t}var P=E(null),he=E(null),re=E(null),Ee=E(null);function Qe(e,t){switch(k(re,t),k(he,e),k(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?am(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=am(t),e=im(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(P),k(P,e)}function He(){_(P),_(he),_(re)}function qt(e){e.memoizedState!==null&&k(Ee,e);var t=P.current,n=im(t,e.type);t!==n&&(k(he,e),k(P,n))}function gn(e){he.current===e&&(_(P),_(he)),Ee.current===e&&(_(Ee),yo._currentValue=ie)}var Ci,No;function pn(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||"",No=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ci+e+No}var Da=!1;function Ra(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(j){var z=j}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(j){z=j}e.call(Y.prototype)}}else{try{throw Error()}catch(j){z=j}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),f=u[0],b=u[1];if(f&&b){var x=f.split(`
`),M=b.split(`
`);for(l=i=0;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(i===x.length||l===M.length)for(i=x.length-1,l=M.length-1;1<=i&&0<=l&&x[i]!==M[l];)l--;for(;1<=i&&0<=l;i--,l--)if(x[i]!==M[l]){if(i!==1||l!==1)do if(i--,l--,0>l||x[i]!==M[l]){var W=`
`+x[i].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=i&&0<=l);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pn(n):""}function Wo(e,t){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return e.child!==t&&t!==null?pn("Suspense Fallback"):pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ra(e.type,!1);case 11:return Ra(e.type.render,!1);case 1:return Ra(e.type,!0);case 31:return pn("Activity");default:return""}}function Lo(e){try{var t="",n=null;do t+=Wo(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ba=Object.prototype.hasOwnProperty,ja=a.unstable_scheduleCallback,Ii=a.unstable_cancelCallback,bs=a.unstable_shouldYield,vs=a.unstable_requestPaint,gt=a.unstable_now,ks=a.unstable_getCurrentPriorityLevel,q=a.unstable_ImmediatePriority,Z=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,Te=a.unstable_LowPriority,Be=a.unstable_IdlePriority,Mt=a.log,yn=a.unstable_setDisableYieldValue,pt=null,it=null;function wt(e){if(typeof Mt=="function"&&yn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(pt,e)}catch{}}var _e=Math.clz32?Math.clz32:Np,Nn=Math.log,en=Math.LN2;function Np(e){return e>>>=0,e===0?32:31-(Nn(e)/en|0)|0}var _o=256,qo=262144,Uo=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yo(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?l=ha(i):(f&=b,f!==0?l=ha(f):n||(n=b&~e,n!==0&&(l=ha(n))))):(b=i&~u,b!==0?l=ha(b):f!==0?l=ha(f):n||(n=i&~e,n!==0&&(l=ha(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function Mi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nh(){var e=Uo;return Uo<<=1,(Uo&62914560)===0&&(Uo=4194304),e}function Ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lp(e,t,n,i,l,u){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,x=e.expirationTimes,M=e.hiddenUpdates;for(n=f&~n;0<n;){var W=31-_e(n),Y=1<<W;b[W]=0,x[W]=-1;var z=M[W];if(z!==null)for(M[W]=null,W=0;W<z.length;W++){var j=z[W];j!==null&&(j.lane&=-536870913)}n&=~Y}i!==0&&Wh(e,i,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(f&~t))}function Wh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-_e(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-_e(n),l=1<<i;l&t|e[i]&t&&(e[i]|=t),n&=~l}}function _h(e,t){var n=t&-t;return n=(n&42)!==0?1:Ss(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ss(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qh(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Cm(e.type))}function Uh(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Wn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Wn,bt="__reactProps$"+Wn,Oa="__reactContainer$"+Wn,Es="__reactEvents$"+Wn,_p="__reactListeners$"+Wn,qp="__reactHandles$"+Wn,Yh="__reactResources$"+Wn,Di="__reactMarker$"+Wn;function As(e){delete e[lt],delete e[bt],delete e[Es],delete e[_p],delete e[qp]}function Ha(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cm(e);e!==null;){if(n=e[lt])return n;e=cm(e)}return t}e=n,n=e.parentNode}return null}function Na(e){if(e=e[lt]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ri(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Wa(e){var t=e[Yh];return t||(t=e[Yh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[Di]=!0}var Vh=new Set,Fh={};function ca(e,t){La(e,t),La(e+"Capture",t)}function La(e,t){for(Fh[e]=t,e=0;e<t.length;e++)Vh.add(t[e])}var Up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qh={},Gh={};function Yp(e){return Ba.call(Gh,e)?!0:Ba.call(Qh,e)?!1:Up.test(e)?Gh[e]=!0:(Qh[e]=!0,!1)}function Vo(e,t,n){if(Yp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Fo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){if(!e._valueTracker){var t=Xh(e)?"checked":"value";e._valueTracker=Vp(e,t,""+e[t])}}function Kh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fp=/[\n"\\]/g;function Yt(e){return e.replace(Fp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Is(e,t,n,i,l,u,f,b){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Ms(e,f,Ut(t)):n!=null?Ms(e,f,Ut(n)):i!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ut(b):e.removeAttribute("name")}function Zh(e,t,n,i,l,u,f,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Cs(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f),Cs(e)}function Ms(e,t,n){t==="number"&&Qo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _a(e,t,n,i){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Jh(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function Ph(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(Q(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Cs(e)}function qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $h(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Qp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ec(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&n[l]!==i&&$h(e,l,i)}else for(var u in t)t.hasOwnProperty(u)&&$h(e,u,t[u])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Go(e){return Xp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Ds=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Ya=null;function tc(e){var t=Na(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Is(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var l=i[bt]||null;if(!l)throw Error(s(90));Is(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Kh(i)}break e;case"textarea":Jh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_a(e,!!n.multiple,t,!1)}}}var Bs=!1;function nc(e,t,n){if(Bs)return e(t,n);Bs=!0;try{var i=e(t);return i}finally{if(Bs=!1,(Ua!==null||Ya!==null)&&(jr(),Ua&&(t=Ua,e=Ya,Ya=Ua=null,tc(t),e)))for(t=0;t<e.length;t++)tc(e[t])}}function Bi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=!1;if(vn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){js=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{js=!1}var Ln=null,Os=null,Xo=null;function ac(){if(Xo)return Xo;var e,t=Os,n=t.length,i,l="value"in Ln?Ln.value:Ln.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===l[u-i];i++);return Xo=l.slice(e,1<i?1-i:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function ic(){return!1}function vt(e){function t(n,i,l,u,f){this._reactName=n,this._targetInst=l,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zo:ic,this.isPropagationStopped=ic,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=vt(da),Oi=w({},da,{view:0,detail:0}),Kp=vt(Oi),Hs,Ns,Hi,Po=w({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(Hs=e.screenX-Hi.screenX,Ns=e.screenY-Hi.screenY):Ns=Hs=0,Hi=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),oc=vt(Po),Zp=w({},Po,{dataTransfer:0}),Jp=vt(Zp),Pp=w({},Oi,{relatedTarget:0}),Ws=vt(Pp),$p=w({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=vt($p),ty=w({},da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ny=vt(ty),ay=w({},da,{data:0}),rc=vt(ay),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ry[e])?!!t[e]:!1}function Ls(){return sy}var ly=w({},Oi,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ls,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uy=vt(ly),hy=w({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=vt(hy),cy=w({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ls}),dy=vt(cy),fy=w({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=vt(fy),gy=w({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=vt(gy),yy=w({},da,{newState:0,oldState:0}),wy=vt(yy),by=[9,13,27,32],_s=vn&&"CompositionEvent"in window,Ni=null;vn&&"documentMode"in document&&(Ni=document.documentMode);var vy=vn&&"TextEvent"in window&&!Ni,lc=vn&&(!_s||Ni&&8<Ni&&11>=Ni),uc=" ",hc=!1;function cc(e,t){switch(e){case"keyup":return by.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Va=!1;function ky(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(hc=!0,uc);case"textInput":return e=t.data,e===uc&&hc?null:e;default:return null}}function Ty(e,t){if(Va)return e==="compositionend"||!_s&&cc(e,t)?(e=ac(),Xo=Os=Ln=null,Va=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function mc(e,t,n,i){Ua?Ya?Ya.push(i):Ya=[i]:Ua=i,t=qr(t,"onChange"),0<t.length&&(n=new Jo("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Wi=null,Li=null;function xy(e){Jf(e,0)}function $o(e){var t=Ri(e);if(Kh(t))return e}function gc(e,t){if(e==="change")return t}var pc=!1;if(vn){var qs;if(vn){var Us="oninput"in document;if(!Us){var yc=document.createElement("div");yc.setAttribute("oninput","return;"),Us=typeof yc.oninput=="function"}qs=Us}else qs=!1;pc=qs&&(!document.documentMode||9<document.documentMode)}function wc(){Wi&&(Wi.detachEvent("onpropertychange",bc),Li=Wi=null)}function bc(e){if(e.propertyName==="value"&&$o(Li)){var t=[];mc(t,Li,e,Rs(e)),nc(xy,t)}}function Ey(e,t,n){e==="focusin"?(wc(),Wi=t,Li=n,Wi.attachEvent("onpropertychange",bc)):e==="focusout"&&wc()}function Ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Li)}function Cy(e,t){if(e==="click")return $o(t)}function Iy(e,t){if(e==="input"||e==="change")return $o(t)}function My(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:My;function _i(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var l=n[i];if(!Ba.call(t,l)||!zt(e[l],t[l]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=vc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vc(n)}}function Tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zy=vn&&"documentMode"in document&&11>=document.documentMode,Fa=null,Vs=null,qi=null,Fs=!1;function xc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fs||Fa==null||Fa!==Qo(i)||(i=Fa,"selectionStart"in i&&Ys(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qi&&_i(qi,i)||(qi=i,i=qr(Vs,"onSelect"),0<i.length&&(t=new Jo("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fa)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qa={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Qs={},Ec={};vn&&(Ec=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function ma(e){if(Qs[e])return Qs[e];if(!Qa[e])return e;var t=Qa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ec)return Qs[e]=t[n];return e}var Ac=ma("animationend"),Cc=ma("animationiteration"),Ic=ma("animationstart"),Dy=ma("transitionrun"),Ry=ma("transitionstart"),By=ma("transitioncancel"),Mc=ma("transitionend"),zc=new Map,Gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gs.push("scrollEnd");function tn(e,t){zc.set(e,t),ca(t,[e])}var er=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],Ga=0,Xs=0;function tr(){for(var e=Ga,t=Xs=Ga=0;t<e;){var n=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var l=Vt[t];Vt[t++]=null;var u=Vt[t];if(Vt[t++]=null,i!==null&&l!==null){var f=i.pending;f===null?l.next=l:(l.next=f.next,f.next=l),i.pending=l}u!==0&&Dc(n,l,u)}}function nr(e,t,n,i){Vt[Ga++]=e,Vt[Ga++]=t,Vt[Ga++]=n,Vt[Ga++]=i,Xs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ks(e,t,n,i){return nr(e,t,n,i),ar(e)}function ga(e,t){return nr(e,null,null,t),ar(e)}function Dc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-_e(n),e=u.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=n|536870912),u):null}function ar(e){if(50<uo)throw uo=0,iu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function jy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,i){return new jy(e,t,n,i)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ir(e,t,n,i,l,u){var f=0;if(i=e,typeof e=="function")Zs(e)&&(f=1);else if(typeof e=="string")f=Lw(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Dt(31,n,t,l),e.elementType=fe,e.lanes=u,e;case H:return pa(n.children,l,u,t);case R:f=8,l|=24;break;case B:return e=Dt(12,n,t,l|2),e.elementType=B,e.lanes=u,e;case le:return e=Dt(13,n,t,l),e.elementType=le,e.lanes=u,e;case L:return e=Dt(19,n,t,l),e.elementType=L,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:f=10;break e;case X:f=9;break e;case oe:f=11;break e;case J:f=14;break e;case ce:f=16,i=null;break e}f=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=Dt(f,n,t,l),t.elementType=e,t.type=i,t.lanes=u,t}function pa(e,t,n,i){return e=Dt(7,e,i,t),e.lanes=n,e}function Js(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Bc(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function Ps(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var jc=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=jc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Lo(t)},jc.set(e,t),t)}return{value:e,source:t,stack:Lo(t)}}var Ka=[],Za=0,or=null,Ui=0,Qt=[],Gt=0,_n=null,rn=1,sn="";function Tn(e,t){Ka[Za++]=Ui,Ka[Za++]=or,or=e,Ui=t}function Oc(e,t,n){Qt[Gt++]=rn,Qt[Gt++]=sn,Qt[Gt++]=_n,_n=e;var i=rn;e=sn;var l=32-_e(i)-1;i&=~(1<<l),n+=1;var u=32-_e(t)+l;if(30<u){var f=l-l%5;u=(i&(1<<f)-1).toString(32),i>>=f,l-=f,rn=1<<32-_e(t)+l|n<<l|i,sn=u+e}else rn=1<<u|n<<l|i,sn=e}function $s(e){e.return!==null&&(Tn(e,1),Oc(e,1,0))}function el(e){for(;e===or;)or=Ka[--Za],Ka[Za]=null,Ui=Ka[--Za],Ka[Za]=null;for(;e===_n;)_n=Qt[--Gt],Qt[Gt]=null,sn=Qt[--Gt],Qt[Gt]=null,rn=Qt[--Gt],Qt[Gt]=null}function Hc(e,t){Qt[Gt++]=rn,Qt[Gt++]=sn,Qt[Gt++]=_n,rn=t.id,sn=t.overflow,_n=e}var ut=null,Ve=null,Ie=!1,qn=null,Xt=!1,tl=Error(s(519));function Un(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(Ft(t,e)),tl}function Nc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[lt]=e,t[bt]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<co.length;n++)xe(co[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),Zh(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),Ph(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||tm(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Un(e,!0)}function Wc(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ut=ut.return}}function Ja(e){if(e!==ut)return!1;if(!Ie)return Wc(e),Ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bu(e.type,e.memoizedProps)),n=!n),n&&Ve&&Un(e),Wc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ve=hm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ve=hm(e)}else t===27?(t=Ve,na(e.type)?(e=xu,xu=null,Ve=e):Ve=t):Ve=ut?Zt(e.stateNode.nextSibling):null;return!0}function ya(){Ve=ut=null,Ie=!1}function nl(){var e=qn;return e!==null&&(xt===null?xt=e:xt.push.apply(xt,e),qn=null),e}function Yi(e){qn===null?qn=[e]:qn.push(e)}var al=E(null),wa=null,Sn=null;function Yn(e,t,n){k(al,t._currentValue),t._currentValue=n}function xn(e){e._currentValue=al.current,_(al)}function il(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ol(e,t,n,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var f=l.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=l;for(var x=0;x<t.length;x++)if(b.context===t[x]){u.lanes|=n,b=u.alternate,b!==null&&(b.lanes|=n),il(u.return,n,e),i||(f=null);break e}u=b.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(s(341));f.lanes|=n,u=f.alternate,u!==null&&(u.lanes|=n),il(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Pa(e,t,n,i){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(s(387));if(f=f.memoizedProps,f!==null){var b=l.type;zt(l.pendingProps.value,f.value)||(e!==null?e.push(b):e=[b])}}else if(l===Ee.current){if(f=l.alternate,f===null)throw Error(s(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}l=l.return}e!==null&&ol(t,e,n,i),t.flags|=262144}function rr(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ba(e){wa=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Lc(wa,e)}function sr(e,t){return wa===null&&ba(e),Lc(e,t)}function Lc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Sn===null){if(e===null)throw Error(s(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return n}var Oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Hy=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,$e={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rl(){return{controller:new Oy,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&Hy(Ny,function(){e.controller.abort()})}var Fi=null,sl=0,$a=0,ei=null;function Wy(e,t){if(Fi===null){var n=Fi=[];sl=0,$a=hu(),ei={status:"pending",value:void 0,then:function(i){n.push(i)}}}return sl++,t.then(_c,_c),t}function _c(){if(--sl===0&&Fi!==null){ei!==null&&(ei.status="fulfilled");var e=Fi;Fi=null,$a=0,ei=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ly(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),i}var qc=D.S;D.S=function(e,t){Ef=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wy(e,t),qc!==null&&qc(e,t)};var va=E(null);function ll(){var e=va.current;return e!==null?e:qe.pooledCache}function lr(e,t){t===null?k(va,va.current):k(va,t.pool)}function Uc(){var e=ll();return e===null?null:{parent:$e._currentValue,pool:e}}var ti=Error(s(460)),ul=Error(s(474)),ur=Error(s(542)),hr={then:function(){}};function Yc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qc(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qc(e),e}throw Ta=t,ti}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,ti):n}}var Ta=null;function Fc(){if(Ta===null)throw Error(s(459));var e=Ta;return Ta=null,e}function Qc(e){if(e===ti||e===ur)throw Error(s(483))}var ni=null,Qi=0;function cr(e){var t=Qi;return Qi+=1,ni===null&&(ni=[]),Vc(ni,e,t)}function Gi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dr(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gc(e){function t(C,A){if(e){var I=C.deletions;I===null?(C.deletions=[A],C.flags|=16):I.push(A)}}function n(C,A){if(!e)return null;for(;A!==null;)t(C,A),A=A.sibling;return null}function i(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function l(C,A){return C=kn(C,A),C.index=0,C.sibling=null,C}function u(C,A,I){return C.index=I,e?(I=C.alternate,I!==null?(I=I.index,I<A?(C.flags|=67108866,A):I):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function f(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function b(C,A,I,U){return A===null||A.tag!==6?(A=Js(I,C.mode,U),A.return=C,A):(A=l(A,I),A.return=C,A)}function x(C,A,I,U){var se=I.type;return se===H?W(C,A,I.props.children,U,I.key):A!==null&&(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===A.type)?(A=l(A,I.props),Gi(A,I),A.return=C,A):(A=ir(I.type,I.key,I.props,null,C.mode,U),Gi(A,I),A.return=C,A)}function M(C,A,I,U){return A===null||A.tag!==4||A.stateNode.containerInfo!==I.containerInfo||A.stateNode.implementation!==I.implementation?(A=Ps(I,C.mode,U),A.return=C,A):(A=l(A,I.children||[]),A.return=C,A)}function W(C,A,I,U,se){return A===null||A.tag!==7?(A=pa(I,C.mode,U,se),A.return=C,A):(A=l(A,I),A.return=C,A)}function Y(C,A,I){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Js(""+A,C.mode,I),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case v:return I=ir(A.type,A.key,A.props,null,C.mode,I),Gi(I,A),I.return=C,I;case O:return A=Ps(A,C.mode,I),A.return=C,A;case ce:return A=ka(A),Y(C,A,I)}if(Q(A)||$(A))return A=pa(A,C.mode,I,null),A.return=C,A;if(typeof A.then=="function")return Y(C,cr(A),I);if(A.$$typeof===V)return Y(C,sr(C,A),I);dr(C,A)}return null}function z(C,A,I,U){var se=A!==null?A.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return se!==null?null:b(C,A,""+I,U);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case v:return I.key===se?x(C,A,I,U):null;case O:return I.key===se?M(C,A,I,U):null;case ce:return I=ka(I),z(C,A,I,U)}if(Q(I)||$(I))return se!==null?null:W(C,A,I,U,null);if(typeof I.then=="function")return z(C,A,cr(I),U);if(I.$$typeof===V)return z(C,A,sr(C,I),U);dr(C,I)}return null}function j(C,A,I,U,se){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return C=C.get(I)||null,b(A,C,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return C=C.get(U.key===null?I:U.key)||null,x(A,C,U,se);case O:return C=C.get(U.key===null?I:U.key)||null,M(A,C,U,se);case ce:return U=ka(U),j(C,A,I,U,se)}if(Q(U)||$(U))return C=C.get(I)||null,W(A,C,U,se,null);if(typeof U.then=="function")return j(C,A,I,cr(U),se);if(U.$$typeof===V)return j(C,A,I,sr(A,U),se);dr(A,U)}return null}function te(C,A,I,U){for(var se=null,Me=null,ae=A,ye=A=0,Ce=null;ae!==null&&ye<I.length;ye++){ae.index>ye?(Ce=ae,ae=null):Ce=ae.sibling;var ze=z(C,ae,I[ye],U);if(ze===null){ae===null&&(ae=Ce);break}e&&ae&&ze.alternate===null&&t(C,ae),A=u(ze,A,ye),Me===null?se=ze:Me.sibling=ze,Me=ze,ae=Ce}if(ye===I.length)return n(C,ae),Ie&&Tn(C,ye),se;if(ae===null){for(;ye<I.length;ye++)ae=Y(C,I[ye],U),ae!==null&&(A=u(ae,A,ye),Me===null?se=ae:Me.sibling=ae,Me=ae);return Ie&&Tn(C,ye),se}for(ae=i(ae);ye<I.length;ye++)Ce=j(ae,C,ye,I[ye],U),Ce!==null&&(e&&Ce.alternate!==null&&ae.delete(Ce.key===null?ye:Ce.key),A=u(Ce,A,ye),Me===null?se=Ce:Me.sibling=Ce,Me=Ce);return e&&ae.forEach(function(sa){return t(C,sa)}),Ie&&Tn(C,ye),se}function ue(C,A,I,U){if(I==null)throw Error(s(151));for(var se=null,Me=null,ae=A,ye=A=0,Ce=null,ze=I.next();ae!==null&&!ze.done;ye++,ze=I.next()){ae.index>ye?(Ce=ae,ae=null):Ce=ae.sibling;var sa=z(C,ae,ze.value,U);if(sa===null){ae===null&&(ae=Ce);break}e&&ae&&sa.alternate===null&&t(C,ae),A=u(sa,A,ye),Me===null?se=sa:Me.sibling=sa,Me=sa,ae=Ce}if(ze.done)return n(C,ae),Ie&&Tn(C,ye),se;if(ae===null){for(;!ze.done;ye++,ze=I.next())ze=Y(C,ze.value,U),ze!==null&&(A=u(ze,A,ye),Me===null?se=ze:Me.sibling=ze,Me=ze);return Ie&&Tn(C,ye),se}for(ae=i(ae);!ze.done;ye++,ze=I.next())ze=j(ae,C,ye,ze.value,U),ze!==null&&(e&&ze.alternate!==null&&ae.delete(ze.key===null?ye:ze.key),A=u(ze,A,ye),Me===null?se=ze:Me.sibling=ze,Me=ze);return e&&ae.forEach(function(Zw){return t(C,Zw)}),Ie&&Tn(C,ye),se}function Le(C,A,I,U){if(typeof I=="object"&&I!==null&&I.type===H&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case v:e:{for(var se=I.key;A!==null;){if(A.key===se){if(se=I.type,se===H){if(A.tag===7){n(C,A.sibling),U=l(A,I.props.children),U.return=C,C=U;break e}}else if(A.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ce&&ka(se)===A.type){n(C,A.sibling),U=l(A,I.props),Gi(U,I),U.return=C,C=U;break e}n(C,A);break}else t(C,A);A=A.sibling}I.type===H?(U=pa(I.props.children,C.mode,U,I.key),U.return=C,C=U):(U=ir(I.type,I.key,I.props,null,C.mode,U),Gi(U,I),U.return=C,C=U)}return f(C);case O:e:{for(se=I.key;A!==null;){if(A.key===se)if(A.tag===4&&A.stateNode.containerInfo===I.containerInfo&&A.stateNode.implementation===I.implementation){n(C,A.sibling),U=l(A,I.children||[]),U.return=C,C=U;break e}else{n(C,A);break}else t(C,A);A=A.sibling}U=Ps(I,C.mode,U),U.return=C,C=U}return f(C);case ce:return I=ka(I),Le(C,A,I,U)}if(Q(I))return te(C,A,I,U);if($(I)){if(se=$(I),typeof se!="function")throw Error(s(150));return I=se.call(I),ue(C,A,I,U)}if(typeof I.then=="function")return Le(C,A,cr(I),U);if(I.$$typeof===V)return Le(C,A,sr(C,I),U);dr(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,A!==null&&A.tag===6?(n(C,A.sibling),U=l(A,I),U.return=C,C=U):(n(C,A),U=Js(I,C.mode,U),U.return=C,C=U),f(C)):n(C,A)}return function(C,A,I,U){try{Qi=0;var se=Le(C,A,I,U);return ni=null,se}catch(ae){if(ae===ti||ae===ur)throw ae;var Me=Dt(29,ae,null,C.mode);return Me.lanes=U,Me.return=C,Me}}}var Sa=Gc(!0),Xc=Gc(!1),Vn=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=ar(e),Dc(e,null,n),t}return nr(e,i,t,n),ar(e)}function Xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lh(e,n)}}function dl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fl=!1;function Ki(){if(fl){var e=ei;if(e!==null)throw e}}function Zi(e,t,n,i){fl=!1;var l=e.updateQueue;Vn=!1;var u=l.firstBaseUpdate,f=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var x=b,M=x.next;x.next=null,f===null?u=M:f.next=M,f=x;var W=e.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==f&&(b===null?W.firstBaseUpdate=M:b.next=M,W.lastBaseUpdate=x))}if(u!==null){var Y=l.baseState;f=0,W=M=x=null,b=u;do{var z=b.lane&-536870913,j=z!==b.lane;if(j?(Ae&z)===z:(i&z)===z){z!==0&&z===$a&&(fl=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var te=e,ue=b;z=t;var Le=n;switch(ue.tag){case 1:if(te=ue.payload,typeof te=="function"){Y=te.call(Le,Y,z);break e}Y=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ue.payload,z=typeof te=="function"?te.call(Le,Y,z):te,z==null)break e;Y=w({},Y,z);break e;case 2:Vn=!0}}z=b.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=l.callbacks,j===null?l.callbacks=[z]:j.push(z))}else j={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(M=W=j,x=Y):W=W.next=j,f|=z;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;j=b,b=j.next,j.next=null,l.lastBaseUpdate=j,l.shared.pending=null}}while(!0);W===null&&(x=Y),l.baseState=x,l.firstBaseUpdate=M,l.lastBaseUpdate=W,u===null&&(l.shared.lanes=0),Jn|=f,e.lanes=f,e.memoizedState=Y}}function Kc(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Zc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kc(n[e],t)}var ai=E(null),fr=E(0);function Jc(e,t){e=Bn,k(fr,e),k(ai,t),Bn=e|t.baseLanes}function ml(){k(fr,Bn),k(ai,ai.current)}function gl(){Bn=fr.current,_(ai),_(fr)}var Rt=E(null),Kt=null;function Gn(e){var t=e.alternate;k(Je,Je.current&1),k(Rt,e),Kt===null&&(t===null||ai.current!==null||t.memoizedState!==null)&&(Kt=e)}function pl(e){k(Je,Je.current),k(Rt,e),Kt===null&&(Kt=e)}function Pc(e){e.tag===22?(k(Je,Je.current),k(Rt,e),Kt===null&&(Kt=e)):Xn()}function Xn(){k(Je,Je.current),k(Rt,Rt.current)}function Bt(e){_(Rt),Kt===e&&(Kt=null),_(Je)}var Je=E(0);function mr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Tu(n)||Su(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,pe=null,Ne=null,et=null,gr=!1,ii=!1,xa=!1,pr=0,Ji=0,oi=null,_y=0;function Ke(){throw Error(s(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function wl(e,t,n,i,l,u){return En=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Od:Bl,xa=!1,u=n(i,l),xa=!1,ii&&(u=ed(t,n,i,l)),$c(e),u}function $c(e){D.H=eo;var t=Ne!==null&&Ne.next!==null;if(En=0,et=Ne=pe=null,gr=!1,Ji=0,oi=null,t)throw Error(s(300));e===null||tt||(e=e.dependencies,e!==null&&rr(e)&&(tt=!0))}function ed(e,t,n,i){pe=e;var l=0;do{if(ii&&(oi=null),Ji=0,ii=!1,25<=l)throw Error(s(301));if(l+=1,et=Ne=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}D.H=Hd,u=t(n,i)}while(ii);return u}function qy(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Pi(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(pe.flags|=1024),t}function bl(){var e=pr!==0;return pr=0,e}function vl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function kl(e){if(gr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gr=!1}En=0,et=Ne=pe=null,ii=!1,Ji=pr=0,oi=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?pe.memoizedState=et=e:et=et.next=e,et}function Pe(){if(Ne===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=et===null?pe.memoizedState:et.next;if(t!==null)et=t,Ne=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},et===null?pe.memoizedState=et=e:et=et.next=e}return et}function yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pi(e){var t=Ji;return Ji+=1,oi===null&&(oi=[]),e=Vc(oi,e,t),t=pe,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Od:Bl),e}function wr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pi(e);if(e.$$typeof===V)return ht(e)}throw Error(s(438,String(e)))}function Tl(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=pe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=yr(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=be;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function br(e){var t=Pe();return Sl(t,Ne,e)}function Sl(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var l=e.baseQueue,u=i.pending;if(u!==null){if(l!==null){var f=l.next;l.next=u.next,u.next=f}t.baseQueue=l=u,i.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var b=f=null,x=null,M=t,W=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(Ae&Y)===Y:(En&Y)===Y){var z=M.revertLane;if(z===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===$a&&(W=!0);else if((En&z)===z){M=M.next,z===$a&&(W=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},x===null?(b=x=Y,f=u):x=x.next=Y,pe.lanes|=z,Jn|=z;Y=M.action,xa&&n(u,Y),u=M.hasEagerState?M.eagerState:n(u,Y)}else z={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},x===null?(b=x=z,f=u):x=x.next=z,pe.lanes|=Y,Jn|=Y;M=M.next}while(M!==null&&M!==t);if(x===null?f=u:x.next=b,!zt(u,e.memoizedState)&&(tt=!0,W&&(n=ei,n!==null)))throw n;e.memoizedState=u,e.baseState=f,e.baseQueue=x,i.lastRenderedState=u}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do u=e(u,f.action),f=f.next;while(f!==l);zt(u,t.memoizedState)||(tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function td(e,t,n){var i=pe,l=Pe(),u=Ie;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var f=!zt((Ne||l).memoizedState,n);if(f&&(l.memoizedState=n,tt=!0),l=l.queue,Cl(id.bind(null,i,l,e),[e]),l.getSnapshot!==t||f||et!==null&&et.memoizedState.tag&1){if(i.flags|=2048,ri(9,{destroy:void 0},ad.bind(null,i,l,n,t),null),qe===null)throw Error(s(349));u||(En&127)!==0||nd(i,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=yr(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,i){t.value=n,t.getSnapshot=i,od(t)&&rd(e)}function id(e,t,n){return n(function(){od(t)&&rd(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function rd(e){var t=ga(e,2);t!==null&&Et(t,e,2)}function El(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),xa){wt(!0);try{n()}finally{wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function sd(e,t,n,i){return e.baseState=n,Sl(e,Ne,typeof i=="function"?i:An)}function Uy(e,t,n,i,l){if(Tr(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};D.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,ld(t,u)):(u.next=n.next,t.pending=n.next=u)}}function ld(e,t){var n=t.action,i=t.payload,l=e.state;if(t.isTransition){var u=D.T,f={};D.T=f;try{var b=n(l,i),x=D.S;x!==null&&x(f,b),ud(e,t,b)}catch(M){Al(e,t,M)}finally{u!==null&&f.types!==null&&(u.types=f.types),D.T=u}}else try{u=n(l,i),ud(e,t,u)}catch(M){Al(e,t,M)}}function ud(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){hd(e,t,i)},function(i){return Al(e,t,i)}):hd(e,t,n)}function hd(e,t,n){t.status="fulfilled",t.value=n,cd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ld(e,n)))}function Al(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,cd(t),t=t.next;while(t!==i)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function fd(e,t){if(Ie){var n=qe.formState;if(n!==null){e:{var i=pe;if(Ie){if(Ve){t:{for(var l=Ve,u=Xt;l.nodeType!==8;){if(!u){l=null;break t}if(l=Zt(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ve=Zt(l.nextSibling),i=l.data==="F!";break e}}Un(i)}i=!1}i&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=i,n=Rd.bind(null,pe,i),i.dispatch=n,i=El(!1),u=Rl.bind(null,pe,!1,i.queue),i=yt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,n=Uy.bind(null,pe,l,u,n),l.dispatch=n,i.memoizedState=e,[t,n,!1]}function md(e){var t=Pe();return gd(t,Ne,e)}function gd(e,t,n){if(t=Sl(e,t,dd)[0],e=br(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Pi(t)}catch(f){throw f===ti?ur:f}else i=t;t=Pe();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,ri(9,{destroy:void 0},Yy.bind(null,l,n),null)),[i,u,e]}function Yy(e,t){e.action=t}function pd(e){var t=Pe(),n=Ne;if(n!==null)return gd(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ri(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=pe.updateQueue,t===null&&(t=yr(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function yd(){return Pe().memoizedState}function vr(e,t,n,i){var l=yt();pe.flags|=e,l.memoizedState=ri(1|t,{destroy:void 0},n,i===void 0?null:i)}function kr(e,t,n,i){var l=Pe();i=i===void 0?null:i;var u=l.memoizedState.inst;Ne!==null&&i!==null&&yl(i,Ne.memoizedState.deps)?l.memoizedState=ri(t,u,n,i):(pe.flags|=e,l.memoizedState=ri(1|t,u,n,i))}function wd(e,t){vr(8390656,8,e,t)}function Cl(e,t){kr(2048,8,e,t)}function Vy(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=yr(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function bd(e){var t=Pe().memoizedState;return Vy({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vd(e,t){return kr(4,2,e,t)}function kd(e,t){return kr(4,4,e,t)}function Td(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){n=n!=null?n.concat([e]):null,kr(4,4,Td.bind(null,t,e),n)}function Il(){}function xd(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ed(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yl(t,i[1]))return i[0];if(i=e(),xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i}function Ml(e,t,n){return n===void 0||(En&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Cf(),pe.lanes|=e,Jn|=e,n)}function Ad(e,t,n,i){return zt(n,t)?n:ai.current!==null?(e=Ml(e,n,i),zt(e,t)||(tt=!0),e):(En&42)===0||(En&1073741824)!==0&&(Ae&261930)===0?(tt=!0,e.memoizedState=n):(e=Cf(),pe.lanes|=e,Jn|=e,t)}function Cd(e,t,n,i,l){var u=F.p;F.p=u!==0&&8>u?u:8;var f=D.T,b={};D.T=b,Rl(e,!1,t,n);try{var x=l(),M=D.S;if(M!==null&&M(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=Ly(x,i);$i(e,t,W,Ht(e))}else $i(e,t,i,Ht(e))}catch(Y){$i(e,t,{then:function(){},status:"rejected",reason:Y},Ht())}finally{F.p=u,f!==null&&b.types!==null&&(f.types=b.types),D.T=f}}function Fy(){}function zl(e,t,n,i){if(e.tag!==5)throw Error(s(476));var l=Id(e).queue;Cd(e,l,t,ie,n===null?Fy:function(){return Md(e),n(i)})}function Id(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Md(e){var t=Id(e);t.next===null&&(t=e.alternate.memoizedState),$i(e,t.next.queue,{},Ht())}function Dl(){return ht(yo)}function zd(){return Pe().memoizedState}function Dd(){return Pe().memoizedState}function Qy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ht();e=Fn(n);var i=Qn(t,e,n);i!==null&&(Et(i,t,n),Xi(i,t,n)),t={cache:rl()},e.payload=t;return}t=t.return}}function Gy(e,t,n){var i=Ht();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tr(e)?Bd(t,n):(n=Ks(e,t,n,i),n!==null&&(Et(n,e,i),jd(n,t,i)))}function Rd(e,t,n){var i=Ht();$i(e,t,n,i)}function $i(e,t,n,i){var l={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))Bd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,b=u(f,n);if(l.hasEagerState=!0,l.eagerState=b,zt(b,f))return nr(e,t,l,0),qe===null&&tr(),!1}catch{}if(n=Ks(e,t,l,i),n!==null)return Et(n,e,i),jd(n,t,i),!0}return!1}function Rl(e,t,n,i){if(i={lane:2,revertLane:hu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(s(479))}else t=Ks(e,n,i,2),t!==null&&Et(t,e,2)}function Tr(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function Bd(e,t){ii=gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lh(e,n)}}var eo={readContext:ht,use:wr,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};eo.useEffectEvent=Ke;var Od={readContext:ht,use:wr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:wd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,vr(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vr(4194308,4,e,t)},useInsertionEffect:function(e,t){vr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var i=e();if(xa){wt(!0);try{e()}finally{wt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yt();if(n!==void 0){var l=n(t);if(xa){wt(!0);try{n(t)}finally{wt(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Gy.bind(null,pe,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=El(e);var t=e.queue,n=Rd.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Il,useDeferredValue:function(e,t){var n=yt();return Ml(n,e,t)},useTransition:function(){var e=El(!1);return e=Cd.bind(null,pe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=pe,l=yt();if(Ie){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),qe===null)throw Error(s(349));(Ae&127)!==0||nd(i,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,wd(id.bind(null,i,u,e),[e]),i.flags|=2048,ri(9,{destroy:void 0},ad.bind(null,i,u,n,t),null),n},useId:function(){var e=yt(),t=qe.identifierPrefix;if(Ie){var n=sn,i=rn;n=(i&~(1<<32-_e(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_y++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dl,useFormState:fd,useActionState:fd,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rl.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tl,useCacheRefresh:function(){return yt().memoizedState=Qy.bind(null,pe)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Bl={readContext:ht,use:wr,useCallback:xd,useContext:ht,useEffect:Cl,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:kd,useMemo:Ed,useReducer:br,useRef:yd,useState:function(){return br(An)},useDebugValue:Il,useDeferredValue:function(e,t){var n=Pe();return Ad(n,Ne.memoizedState,e,t)},useTransition:function(){var e=br(An)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:td,useId:zd,useHostTransitionStatus:Dl,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Pe();return sd(n,Ne,e,t)},useMemoCache:Tl,useCacheRefresh:Dd};Bl.useEffectEvent=bd;var Hd={readContext:ht,use:wr,useCallback:xd,useContext:ht,useEffect:Cl,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:kd,useMemo:Ed,useReducer:xl,useRef:yd,useState:function(){return xl(An)},useDebugValue:Il,useDeferredValue:function(e,t){var n=Pe();return Ne===null?Ml(n,e,t):Ad(n,Ne.memoizedState,e,t)},useTransition:function(){var e=xl(An)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:td,useId:zd,useHostTransitionStatus:Dl,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var n=Pe();return Ne!==null?sd(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tl,useCacheRefresh:Dd};Hd.useEffectEvent=bd;function jl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ht(),l=Fn(i);l.payload=t,n!=null&&(l.callback=n),t=Qn(e,l,i),t!==null&&(Et(t,e,i),Xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ht(),l=Fn(i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Qn(e,l,i),t!==null&&(Et(t,e,i),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),i=Fn(n);i.tag=2,t!=null&&(i.callback=t),t=Qn(e,i,n),t!==null&&(Et(t,e,n),Xi(t,e,n))}};function Nd(e,t,n,i,l,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!_i(n,i)||!_i(l,u):!0}function Wd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Ld(e){er(e)}function _d(e){console.error(e)}function qd(e){er(e)}function Sr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ud(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hl(e,t,n){return n=Fn(n),n.tag=3,n.payload={element:null},n.callback=function(){Sr(e,t)},n}function Yd(e){return e=Fn(e),e.tag=3,e}function Vd(e,t,n,i){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;e.payload=function(){return l(u)},e.callback=function(){Ud(t,n,i)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Ud(t,n,i),typeof l!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Xy(e,t,n,i,l){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Pa(t,n,l,!0),n=Rt.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?Or():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=l,i===hr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),su(e,i,l)),!1;case 22:return n.flags|=65536,i===hr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),su(e,i,l)),!1}throw Error(s(435,n.tag))}return su(e,i,l),Or(),!1}if(Ie)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==tl&&(e=Error(s(422),{cause:i}),Yi(Ft(e,n)))):(i!==tl&&(t=Error(s(423),{cause:i}),Yi(Ft(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Ft(i,n),l=Hl(e.stateNode,i,l),dl(e,l),Ze!==4&&(Ze=2)),!1;var u=Error(s(520),{cause:i});if(u=Ft(u,n),lo===null?lo=[u]:lo.push(u),Ze!==4&&(Ze=2),t===null)return!0;i=Ft(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Hl(n.stateNode,i,e),dl(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Pn===null||!Pn.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Yd(l),Vd(l,e,n,i),dl(n,l),!1}n=n.return}while(n!==null);return!1}var Nl=Error(s(461)),tt=!1;function ct(e,t,n,i){t.child=e===null?Xc(t,null,n,i):Sa(t,e.child,n,i)}function Fd(e,t,n,i,l){n=n.render;var u=t.ref;if("ref"in i){var f={};for(var b in i)b!=="ref"&&(f[b]=i[b])}else f=i;return ba(t),i=wl(e,t,n,f,u,l),b=bl(),e!==null&&!tt?(vl(e,t,l),Cn(e,t,l)):(Ie&&b&&$s(t),t.flags|=1,ct(e,t,i,l),t.child)}function Qd(e,t,n,i,l){if(e===null){var u=n.type;return typeof u=="function"&&!Zs(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Gd(e,t,u,i,l)):(e=ir(n.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Fl(e,l)){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(f,i)&&e.ref===t.ref)return Cn(e,t,l)}return t.flags|=1,e=kn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Gd(e,t,n,i,l){if(e!==null){var u=e.memoizedProps;if(_i(u,i)&&e.ref===t.ref)if(tt=!1,t.pendingProps=i=u,Fl(e,l))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Cn(e,t,l)}return Wl(e,t,n,i,l)}function Xd(e,t,n,i){var l=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~u}else i=0,t.child=null;return Kd(e,t,u,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lr(t,u!==null?u.cachePool:null),u!==null?Jc(t,u):ml(),Pc(t);else return i=t.lanes=536870912,Kd(e,t,u!==null?u.baseLanes|n:n,n,i)}else u!==null?(lr(t,u.cachePool),Jc(t,u),Xn(),t.memoizedState=null):(e!==null&&lr(t,null),ml(),Xn());return ct(e,t,l,n),t.child}function to(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kd(e,t,n,i,l){var u=ll();return u=u===null?null:{parent:$e._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&lr(t,null),ml(),Pc(t),e!==null&&Pa(e,t,i,!0),t.childLanes=l,null}function xr(e,t){return t=Ar({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zd(e,t,n){return Sa(t,e.child,null,n),e=xr(t,t.pendingProps),e.flags|=2,Bt(t),t.memoizedState=null,e}function Ky(e,t,n){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ie){if(i.mode==="hidden")return e=xr(t,i),t.lanes=536870912,to(null,e);if(pl(t),(e=Ve)?(e=um(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:rn,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Bc(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return xr(t,i)}var u=e.memoizedState;if(u!==null){var f=u.dehydrated;if(pl(t),l)if(t.flags&256)t.flags&=-257,t=Zd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(tt||Pa(e,t,n,!1),l=(n&e.childLanes)!==0,tt||l){if(i=qe,i!==null&&(f=_h(i,n),f!==0&&f!==u.retryLane))throw u.retryLane=f,ga(e,f),Et(i,e,f),Nl;Or(),t=Zd(e,t,n)}else e=u.treeContext,Ve=Zt(f.nextSibling),ut=t,Ie=!0,qn=null,Xt=!1,e!==null&&Hc(t,e),t=xr(t,i),t.flags|=4096;return t}return e=kn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Er(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wl(e,t,n,i,l){return ba(t),n=wl(e,t,n,i,void 0,l),i=bl(),e!==null&&!tt?(vl(e,t,l),Cn(e,t,l)):(Ie&&i&&$s(t),t.flags|=1,ct(e,t,n,l),t.child)}function Jd(e,t,n,i,l,u){return ba(t),t.updateQueue=null,n=ed(t,i,n,l),$c(e),i=bl(),e!==null&&!tt?(vl(e,t,u),Cn(e,t,u)):(Ie&&i&&$s(t),t.flags|=1,ct(e,t,n,u),t.child)}function Pd(e,t,n,i,l){if(ba(t),t.stateNode===null){var u=Xa,f=n.contextType;typeof f=="object"&&f!==null&&(u=ht(f)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ol,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},hl(t),f=n.contextType,u.context=typeof f=="object"&&f!==null?ht(f):Xa,u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(jl(t,n,f,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ol.enqueueReplaceState(u,u.state,null),Zi(t,i,u,l),Ki(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,x=Ea(n,b);u.props=x;var M=u.context,W=n.contextType;f=Xa,typeof W=="object"&&W!==null&&(f=ht(W));var Y=n.getDerivedStateFromProps;W=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,W||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||M!==f)&&Wd(t,u,i,f),Vn=!1;var z=t.memoizedState;u.state=z,Zi(t,i,u,l),Ki(),M=t.memoizedState,b||z!==M||Vn?(typeof Y=="function"&&(jl(t,n,Y,i),M=t.memoizedState),(x=Vn||Nd(t,n,x,i,z,M,f))?(W||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=M),u.props=i,u.state=M,u.context=f,i=x):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,cl(e,t),f=t.memoizedProps,W=Ea(n,f),u.props=W,Y=t.pendingProps,z=u.context,M=n.contextType,x=Xa,typeof M=="object"&&M!==null&&(x=ht(M)),b=n.getDerivedStateFromProps,(M=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==Y||z!==x)&&Wd(t,u,i,x),Vn=!1,z=t.memoizedState,u.state=z,Zi(t,i,u,l),Ki();var j=t.memoizedState;f!==Y||z!==j||Vn||e!==null&&e.dependencies!==null&&rr(e.dependencies)?(typeof b=="function"&&(jl(t,n,b,i),j=t.memoizedState),(W=Vn||Nd(t,n,W,i,z,j,x)||e!==null&&e.dependencies!==null&&rr(e.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,j,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,j,x)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=j),u.props=i,u.state=j,u.context=x,i=W):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Er(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=Sa(t,e.child,null,l),t.child=Sa(t,null,n,l)):ct(e,t,n,l),t.memoizedState=u.state,e=t.child):e=Cn(e,t,l),e}function $d(e,t,n,i){return ya(),t.flags|=256,ct(e,t,n,i),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _l(e){return{baseLanes:e,cachePool:Uc()}}function ql(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ot),e}function ef(e,t,n){var i=t.pendingProps,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ie){if(l?Gn(t):Xn(),(e=Ve)?(e=um(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:rn,overflow:sn}:null,retryLane:536870912,hydrationErrors:null},n=Bc(e),n.return=t,t.child=n,ut=t,Ve=null)):e=null,e===null)throw Un(t);return Su(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,l?(Xn(),l=t.mode,b=Ar({mode:"hidden",children:b},l),i=pa(i,l,n,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=_l(n),i.childLanes=ql(e,f,n),t.memoizedState=Ll,to(null,i)):(Gn(t),Ul(t,b))}var x=e.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=Yl(e,t,n)):t.memoizedState!==null?(Xn(),t.child=e.child,t.flags|=128,t=null):(Xn(),b=i.fallback,l=t.mode,i=Ar({mode:"visible",children:i.children},l),b=pa(b,l,n,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,Sa(t,e.child,null,n),i=t.child,i.memoizedState=_l(n),i.childLanes=ql(e,f,n),t.memoizedState=Ll,t=to(null,i));else if(Gn(t),Su(b)){if(f=b.nextSibling&&b.nextSibling.dataset,f)var M=f.dgst;f=M,i=Error(s(419)),i.stack="",i.digest=f,Yi({value:i,source:null,stack:null}),t=Yl(e,t,n)}else if(tt||Pa(e,t,n,!1),f=(n&e.childLanes)!==0,tt||f){if(f=qe,f!==null&&(i=_h(f,n),i!==0&&i!==x.retryLane))throw x.retryLane=i,ga(e,i),Et(f,e,i),Nl;Tu(b)||Or(),t=Yl(e,t,n)}else Tu(b)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Ve=Zt(b.nextSibling),ut=t,Ie=!0,qn=null,Xt=!1,e!==null&&Hc(t,e),t=Ul(t,i.children),t.flags|=4096);return t}return l?(Xn(),b=i.fallback,l=t.mode,x=e.child,M=x.sibling,i=kn(x,{mode:"hidden",children:i.children}),i.subtreeFlags=x.subtreeFlags&65011712,M!==null?b=kn(M,b):(b=pa(b,l,n,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,to(null,i),i=t.child,b=e.child.memoizedState,b===null?b=_l(n):(l=b.cachePool,l!==null?(x=$e._currentValue,l=l.parent!==x?{parent:x,pool:x}:l):l=Uc(),b={baseLanes:b.baseLanes|n,cachePool:l}),i.memoizedState=b,i.childLanes=ql(e,f,n),t.memoizedState=Ll,to(e.child,i)):(Gn(t),n=e.child,e=n.sibling,n=kn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Ul(e,t){return t=Ar({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ar(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function Yl(e,t,n){return Sa(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tf(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),il(e.return,t,n)}function Vl(e,t,n,i,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:l,treeForkCount:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=n,f.tailMode=l,f.treeForkCount=u)}function nf(e,t,n){var i=t.pendingProps,l=i.revealOrder,u=i.tail;i=i.children;var f=Je.current,b=(f&2)!==0;if(b?(f=f&1|2,t.flags|=128):f&=1,k(Je,f),ct(e,t,i,n),i=Ie?Ui:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,n,t);else if(e.tag===19)tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&mr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,u,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&mr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,u,i);break;case"together":Vl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rr(e)))}function Zy(e,t,n){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),Yn(t,$e,e.memoizedState.cache),ya();break;case 27:case 5:qt(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ef(e,t,n):(Gn(t),e=Cn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var l=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Pa(e,t,n,!1),i=(n&t.childLanes)!==0),l){if(i)return nf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),k(Je,Je.current),i)break;return null;case 22:return t.lanes=0,Xd(e,t,n,t.pendingProps);case 24:Yn(t,$e,e.memoizedState.cache)}return Cn(e,t,n)}function af(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!Fl(e,n)&&(t.flags&128)===0)return tt=!1,Zy(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ie&&(t.flags&1048576)!==0&&Oc(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Zs(e)?(i=Ea(e,i),t.tag=1,t=Pd(null,t,e,i,n)):(t.tag=0,t=Wl(null,t,e,i,n));else{if(e!=null){var l=e.$$typeof;if(l===oe){t.tag=11,t=Fd(null,t,e,i,n);break e}else if(l===J){t.tag=14,t=Qd(null,t,e,i,n);break e}}throw t=ne(e)||e,Error(s(306,t,""))}}return t;case 0:return Wl(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,l=Ea(i,t.pendingProps),Pd(e,t,i,l,n);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var u=t.memoizedState;l=u.element,cl(e,t),Zi(t,i,null,n);var f=t.memoizedState;if(i=f.cache,Yn(t,$e,i),i!==u.cache&&ol(t,[$e],n,!0),Ki(),i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=$d(e,t,i,n);break e}else if(i!==l){l=Ft(Error(s(424)),t),Yi(l),t=$d(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ve=Zt(e.firstChild),ut=t,Ie=!0,qn=null,Xt=!0,n=Xc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),i===l){t=Cn(e,t,n);break e}ct(e,t,i,n)}t=t.child}return t;case 26:return Er(e,t),e===null?(n=gm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ie||(n=t.type,e=t.pendingProps,i=Ur(re.current).createElement(n),i[lt]=t,i[bt]=e,dt(i,n,e),rt(i),t.stateNode=i):t.memoizedState=gm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qt(t),e===null&&Ie&&(i=t.stateNode=dm(t.type,t.pendingProps,re.current),ut=t,Xt=!0,l=Ve,na(t.type)?(xu=l,Ve=Zt(i.firstChild)):Ve=l),ct(e,t,t.pendingProps.children,n),Er(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ie&&((l=i=Ve)&&(i=Aw(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,ut=t,Ve=Zt(i.firstChild),Xt=!1,l=!0):l=!1),l||Un(t)),qt(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,i=u.children,bu(l,u)?i=null:f!==null&&bu(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=wl(e,t,qy,null,null,n),yo._currentValue=l),Er(e,t),ct(e,t,i,n),t.child;case 6:return e===null&&Ie&&((e=n=Ve)&&(n=Cw(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,ut=t,Ve=null,e=!0):e=!1),e||Un(t)),null;case 13:return ef(e,t,n);case 4:return Qe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Sa(t,null,i,n):ct(e,t,i,n),t.child;case 11:return Fd(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Yn(t,t.type,i.value),ct(e,t,i.children,n),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,ba(t),l=ht(l),i=i(l),t.flags|=1,ct(e,t,i,n),t.child;case 14:return Qd(e,t,t.type,t.pendingProps,n);case 15:return Gd(e,t,t.type,t.pendingProps,n);case 19:return nf(e,t,n);case 31:return Ky(e,t,n);case 22:return Xd(e,t,n,t.pendingProps);case 24:return ba(t),i=ht($e),e===null?(l=ll(),l===null&&(l=qe,u=rl(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:i,cache:l},hl(t),Yn(t,$e,l)):((e.lanes&n)!==0&&(cl(e,t),Zi(t,null,null,n),Ki()),l=e.memoizedState,u=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Yn(t,$e,i)):(i=u.cache,Yn(t,$e,i),i!==l.cache&&ol(t,[$e],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function In(e){e.flags|=4}function Ql(e,t,n,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Df())e.flags|=8192;else throw Ta=hr,ul}else e.flags&=-16777217}function of(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vm(t))if(Df())e.flags|=8192;else throw Ta=hr,ul}function Cr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Nh():536870912,e.lanes|=t,hi|=t)}function no(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Jy(e,t,n){var i=t.pendingProps;switch(el(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),xn($e),He(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?In(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nl())),Fe(t),null;case 26:var l=t.type,u=t.memoizedState;return e===null?(In(t),u!==null?(Fe(t),of(t,u)):(Fe(t),Ql(t,l,null,i,n))):u?u!==e.memoizedState?(In(t),Fe(t),of(t,u)):(Fe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&In(t),Fe(t),Ql(t,l,e,i,n)),null;case 27:if(gn(t),n=re.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&In(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}e=P.current,Ja(t)?Nc(t):(e=dm(l,i,n),t.stateNode=e,In(t))}return Fe(t),null;case 5:if(gn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&In(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Fe(t),null}if(u=P.current,Ja(t))Nc(t);else{var f=Ur(re.current);switch(u){case 1:u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=f.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?f.createElement("select",{is:i.is}):f.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?f.createElement(l,{is:i.is}):f.createElement(l)}}u[lt]=t,u[bt]=i;e:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)u.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=u;e:switch(dt(u,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&In(t)}}return Fe(t),Ql(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&In(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,Ja(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,l=ut,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||tm(e.nodeValue,n)),e||Un(t,!0)}else e=Ur(e).createTextNode(i),e[lt]=t,t.stateNode=e}return Fe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ja(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),e=!1}else n=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bt(t),t):(Bt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Fe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ja(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[lt]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),l=!1}else l=nl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Bt(t),t):(Bt(t),null)}return Bt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==l&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cr(t,t.updateQueue),Fe(t),null);case 4:return He(),e===null&&mu(t.stateNode.containerInfo),Fe(t),null;case 10:return xn(t.type),Fe(t),null;case 19:if(_(Je),i=t.memoizedState,i===null)return Fe(t),null;if(l=(t.flags&128)!==0,u=i.rendering,u===null)if(l)no(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=mr(e),u!==null){for(t.flags|=128,no(i,!1),e=u.updateQueue,t.updateQueue=e,Cr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rc(n,e),n=n.sibling;return k(Je,Je.current&1|2),Ie&&Tn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&gt()>Rr&&(t.flags|=128,l=!0,no(i,!1),t.lanes=4194304)}else{if(!l)if(e=mr(u),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Cr(t,e),no(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Ie)return Fe(t),null}else 2*gt()-i.renderingStartTime>Rr&&n!==536870912&&(t.flags|=128,l=!0,no(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,n=Je.current,k(Je,l?n&1|2:n&1),Ie&&Tn(t,i.treeForkCount),e):(Fe(t),null);case 22:case 23:return Bt(t),gl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),n=t.updateQueue,n!==null&&Cr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&_(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xn($e),Fe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Py(e,t){switch(el(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn($e),He(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gn(t),null;case 31:if(t.memoizedState!==null){if(Bt(t),t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Je),null;case 4:return He(),null;case 10:return xn(t.type),null;case 22:case 23:return Bt(t),gl(),e!==null&&_(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xn($e),null;case 25:return null;default:return null}}function rf(e,t){switch(el(t),t.tag){case 3:xn($e),He();break;case 26:case 27:case 5:gn(t);break;case 4:He();break;case 31:t.memoizedState!==null&&Bt(t);break;case 13:Bt(t);break;case 19:_(Je);break;case 10:xn(t.type);break;case 22:case 23:Bt(t),gl(),e!==null&&_(va);break;case 24:xn($e)}}function ao(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){i=void 0;var u=n.create,f=n.inst;i=u(),f.destroy=i}n=n.next}while(n!==l)}}catch(b){Oe(t,t.return,b)}}function Kn(e,t,n){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var u=l.next;i=u;do{if((i.tag&e)===e){var f=i.inst,b=f.destroy;if(b!==void 0){f.destroy=void 0,l=t;var x=n,M=b;try{M()}catch(W){Oe(l,x,W)}}}i=i.next}while(i!==u)}}catch(W){Oe(t,t.return,W)}}function sf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zc(t,n)}catch(i){Oe(e,e.return,i)}}}function lf(e,t,n){n.props=Ea(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Oe(e,t,i)}}function io(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(l){Oe(e,t,l)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(l){Oe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Oe(e,t,l)}else n.current=null}function uf(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(l){Oe(e,e.return,l)}}function Gl(e,t,n){try{var i=e.stateNode;vw(i,e.type,n,t),i[bt]=t}catch(l){Oe(e,e.return,l)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&na(e.type)||e.tag===4}function Xl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn));else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Ir(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&na(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ir(e,t,n),e=e.sibling;e!==null;)Ir(e,t,n),e=e.sibling}function cf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);dt(t,i,n),t[lt]=e,t[bt]=n}catch(u){Oe(e,e.return,u)}}var Mn=!1,nt=!1,Zl=!1,df=typeof WeakSet=="function"?WeakSet:Set,st=null;function $y(e,t){if(e=e.containerInfo,yu=Kr,e=Sc(e),Ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var l=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,b=-1,x=-1,M=0,W=0,Y=e,z=null;t:for(;;){for(var j;Y!==n||l!==0&&Y.nodeType!==3||(b=f+l),Y!==u||i!==0&&Y.nodeType!==3||(x=f+i),Y.nodeType===3&&(f+=Y.nodeValue.length),(j=Y.firstChild)!==null;)z=Y,Y=j;for(;;){if(Y===e)break t;if(z===n&&++M===l&&(b=f),z===u&&++W===i&&(x=f),(j=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=j}n=b===-1||x===-1?null:{start:b,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:e,selectionRange:n},Kr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var te=Ea(n.type,l);e=i.getSnapshotBeforeUpdate(te,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Oe(n,n.return,ue)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ku(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ku(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function ff(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Dn(e,n),i&4&&ao(5,n);break;case 1:if(Dn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Oe(n,n.return,f)}else{var l=Ea(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Oe(n,n.return,f)}}i&64&&sf(n),i&512&&io(n,n.return);break;case 3:if(Dn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zc(e,t)}catch(f){Oe(n,n.return,f)}}break;case 27:t===null&&i&4&&cf(n);case 26:case 5:Dn(e,n),t===null&&i&4&&uf(n),i&512&&io(n,n.return);break;case 12:Dn(e,n);break;case 31:Dn(e,n),i&4&&pf(e,n);break;case 13:Dn(e,n),i&4&&yf(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lw.bind(null,n),Iw(e,n))));break;case 22:if(i=n.memoizedState!==null||Mn,!i){t=t!==null&&t.memoizedState!==null||nt,l=Mn;var u=nt;Mn=i,(nt=t)&&!u?Rn(e,n,(n.subtreeFlags&8772)!==0):Dn(e,n),Mn=l,nt=u}break;case 30:break;default:Dn(e,n)}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&As(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,kt=!1;function zn(e,t,n){for(n=n.child;n!==null;)gf(e,t,n),n=n.sibling}function gf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(pt,n)}catch{}switch(n.tag){case 26:nt||ln(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nt||ln(n,t);var i=Ge,l=kt;na(n.type)&&(Ge=n.stateNode,kt=!1),zn(e,t,n),mo(n.stateNode),Ge=i,kt=l;break;case 5:nt||ln(n,t);case 6:if(i=Ge,l=kt,Ge=null,zn(e,t,n),Ge=i,kt=l,Ge!==null)if(kt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(n.stateNode)}catch(u){Oe(n,t,u)}else try{Ge.removeChild(n.stateNode)}catch(u){Oe(n,t,u)}break;case 18:Ge!==null&&(kt?(e=Ge,sm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wi(e)):sm(Ge,n.stateNode));break;case 4:i=Ge,l=kt,Ge=n.stateNode.containerInfo,kt=!0,zn(e,t,n),Ge=i,kt=l;break;case 0:case 11:case 14:case 15:Kn(2,n,t),nt||Kn(4,n,t),zn(e,t,n);break;case 1:nt||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lf(n,t,i)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:nt=(i=nt)||n.memoizedState!==null,zn(e,t,n),nt=i;break;default:zn(e,t,n)}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{wi(e)}catch(n){Oe(t,t.return,n)}}}function yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(n){Oe(t,t.return,n)}}function ew(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(s(435,e.tag))}}function Mr(e,t){var n=ew(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var l=uw.bind(null,e,i);i.then(l,l)}})}function Tt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var l=n[i],u=e,f=t,b=f;e:for(;b!==null;){switch(b.tag){case 27:if(na(b.type)){Ge=b.stateNode,kt=!1;break e}break;case 5:Ge=b.stateNode,kt=!1;break e;case 3:case 4:Ge=b.stateNode.containerInfo,kt=!0;break e}b=b.return}if(Ge===null)throw Error(s(160));gf(u,f,l),Ge=null,kt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}var nn=null;function wf(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tt(t,e),St(e),i&4&&(Kn(3,e,e.return),ao(3,e),Kn(5,e,e.return));break;case 1:Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),i&64&&Mn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var l=nn;if(Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":u=l.getElementsByTagName("title")[0],(!u||u[Di]||u[lt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(i),l.head.insertBefore(u,l.querySelector("head > title"))),dt(u,i,n),u[lt]=e,rt(u),i=u;break e;case"link":var f=wm("link","href",l).get(i+(n.href||""));if(f){for(var b=0;b<f.length;b++)if(u=f[b],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(b,1);break t}}u=l.createElement(i),dt(u,i,n),l.head.appendChild(u);break;case"meta":if(f=wm("meta","content",l).get(i+(n.content||""))){for(b=0;b<f.length;b++)if(u=f[b],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(b,1);break t}}u=l.createElement(i),dt(u,i,n),l.head.appendChild(u);break;default:throw Error(s(468,i))}u[lt]=e,rt(u),i=u}e.stateNode=i}else bm(l,e.type,e.stateNode);else e.stateNode=ym(l,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?bm(l,e.type,e.stateNode):ym(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Gl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),n!==null&&i&4&&Gl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tt(t,e),St(e),i&512&&(nt||n===null||ln(n,n.return)),e.flags&32){l=e.stateNode;try{qa(l,"")}catch(te){Oe(e,e.return,te)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Gl(e,l,n!==null?n.memoizedProps:l)),i&1024&&(Zl=!0);break;case 6:if(Tt(t,e),St(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(te){Oe(e,e.return,te)}}break;case 3:if(Fr=null,l=nn,nn=Yr(t.containerInfo),Tt(t,e),nn=l,St(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(te){Oe(e,e.return,te)}Zl&&(Zl=!1,bf(e));break;case 4:i=nn,nn=Yr(e.stateNode.containerInfo),Tt(t,e),St(e),nn=i;break;case 12:Tt(t,e),St(e);break;case 31:Tt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 13:Tt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dr=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 22:l=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,M=Mn,W=nt;if(Mn=M||l,nt=W||x,Tt(t,e),nt=W,Mn=M,St(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||x||Mn||nt||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(u=x.stateNode,l)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{b=x.stateNode;var Y=x.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(te){Oe(x,x.return,te)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(te){Oe(x,x.return,te)}}}else if(t.tag===18){if(n===null){x=t;try{var j=x.stateNode;l?lm(j,!0):lm(x.stateNode,!1)}catch(te){Oe(x,x.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Mr(e,n))));break;case 19:Tt(t,e),St(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mr(e,i)));break;case 30:break;case 21:break;default:Tt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(hf(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,u=Xl(e);Ir(e,u,l);break;case 5:var f=n.stateNode;n.flags&32&&(qa(f,""),n.flags&=-33);var b=Xl(e);Ir(e,b,f);break;case 3:case 4:var x=n.stateNode.containerInfo,M=Xl(e);Kl(e,M,x);break;default:throw Error(s(161))}}catch(W){Oe(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kn(4,t,t.return),Aa(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lf(t,t.return,n),Aa(t);break;case 27:mo(t.stateNode);case 26:case 5:ln(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function Rn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,u=t,f=u.flags;switch(u.tag){case 0:case 11:case 15:Rn(l,u,n),ao(4,u);break;case 1:if(Rn(l,u,n),i=u,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Oe(i,i.return,M)}if(i=u,l=i.updateQueue,l!==null){var b=i.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)Kc(x[l],b)}catch(M){Oe(i,i.return,M)}}n&&f&64&&sf(u),io(u,u.return);break;case 27:cf(u);case 26:case 5:Rn(l,u,n),n&&i===null&&f&4&&uf(u),io(u,u.return);break;case 12:Rn(l,u,n);break;case 31:Rn(l,u,n),n&&f&4&&pf(l,u);break;case 13:Rn(l,u,n),n&&f&4&&yf(l,u);break;case 22:u.memoizedState===null&&Rn(l,u,n),io(u,u.return);break;case 30:break;default:Rn(l,u,n)}t=t.sibling}}function Jl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vi(n))}function Pl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function an(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vf(e,t,n,i),t=t.sibling}function vf(e,t,n,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:an(e,t,n,i),l&2048&&ao(9,t);break;case 1:an(e,t,n,i);break;case 3:an(e,t,n,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(l&2048){an(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,f=u.id,b=u.onPostCommit;typeof b=="function"&&b(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Oe(t,t.return,x)}}else an(e,t,n,i);break;case 31:an(e,t,n,i);break;case 13:an(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,f=t.alternate,t.memoizedState!==null?u._visibility&2?an(e,t,n,i):oo(e,t):u._visibility&2?an(e,t,n,i):(u._visibility|=2,si(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Jl(f,t);break;case 24:an(e,t,n,i),l&2048&&Pl(t.alternate,t);break;default:an(e,t,n,i)}}function si(e,t,n,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,f=t,b=n,x=i,M=f.flags;switch(f.tag){case 0:case 11:case 15:si(u,f,b,x,l),ao(8,f);break;case 23:break;case 22:var W=f.stateNode;f.memoizedState!==null?W._visibility&2?si(u,f,b,x,l):oo(u,f):(W._visibility|=2,si(u,f,b,x,l)),l&&M&2048&&Jl(f.alternate,f);break;case 24:si(u,f,b,x,l),l&&M&2048&&Pl(f.alternate,f);break;default:si(u,f,b,x,l)}t=t.sibling}}function oo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,l=i.flags;switch(i.tag){case 22:oo(n,i),l&2048&&Jl(i.alternate,i);break;case 24:oo(n,i),l&2048&&Pl(i.alternate,i);break;default:oo(n,i)}t=t.sibling}}var ro=8192;function li(e,t,n){if(e.subtreeFlags&ro)for(e=e.child;e!==null;)kf(e,t,n),e=e.sibling}function kf(e,t,n){switch(e.tag){case 26:li(e,t,n),e.flags&ro&&e.memoizedState!==null&&_w(n,nn,e.memoizedState,e.memoizedProps);break;case 5:li(e,t,n);break;case 3:case 4:var i=nn;nn=Yr(e.stateNode.containerInfo),li(e,t,n),nn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ro,ro=16777216,li(e,t,n),ro=i):li(e,t,n));break;default:li(e,t,n)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function so(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,xf(i,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:so(e),e.flags&2048&&Kn(9,e,e.return);break;case 3:so(e);break;case 12:so(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zr(e)):so(e);break;default:so(e)}}function zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];st=i,xf(i,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kn(8,t,t.return),zr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zr(t));break;default:zr(t)}e=e.sibling}}function xf(e,t){for(;st!==null;){var n=st;switch(n.tag){case 0:case 11:case 15:Kn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,st=i;else e:for(n=e;st!==null;){i=st;var l=i.sibling,u=i.return;if(mf(i),i===n){st=null;break e}if(l!==null){l.return=u,st=l;break e}st=u}}}var tw={getCacheForType:function(e){var t=ht($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ht($e).controller.signal}},nw=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,Se=null,Ae=0,je=0,jt=null,Zn=!1,ui=!1,$l=!1,Bn=0,Ze=0,Jn=0,Ca=0,eu=0,Ot=0,hi=0,lo=null,xt=null,tu=!1,Dr=0,Ef=0,Rr=1/0,Br=null,Pn=null,ot=0,$n=null,ci=null,jn=0,nu=0,au=null,Af=null,uo=0,iu=null;function Ht(){return(De&2)!==0&&Ae!==0?Ae&-Ae:D.T!==null?hu():qh()}function Cf(){if(Ot===0)if((Ae&536870912)===0||Ie){var e=qo;qo<<=1,(qo&3932160)===0&&(qo=262144),Ot=e}else Ot=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ot}function Et(e,t,n){(e===qe&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(di(e,0),ea(e,Ae,Ot,!1)),zi(e,n),((De&2)===0||e!==qe)&&(e===qe&&((De&2)===0&&(Ca|=n),Ze===4&&ea(e,Ae,Ot,!1)),un(e))}function If(e,t,n){if((De&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Mi(e,t),l=i?ow(e,t):ru(e,t,!0),u=i;do{if(l===0){ui&&!i&&ea(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!aw(n)){l=ru(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var b=e;l=lo;var x=b.current.memoizedState.isDehydrated;if(x&&(di(b,f).flags|=256),f=ru(b,f,!1),f!==2){if($l&&!x){b.errorRecoveryDisabledLanes|=u,Ca|=u,l=4;break e}u=xt,xt=l,u!==null&&(xt===null?xt=u:xt.push.apply(xt,u))}l=f}if(u=!1,l!==2)continue}}if(l===1){di(e,0),ea(e,t,0,!0);break}e:{switch(i=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ea(i,t,Ot,!Zn);break e;case 2:xt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Dr+300-gt(),10<l)){if(ea(i,t,Ot,!Zn),Yo(i,0,!0)!==0)break e;jn=t,i.timeoutHandle=om(Mf.bind(null,i,n,xt,Br,tu,t,Ot,Ca,hi,Zn,u,"Throttled",-0,0),l);break e}Mf(i,n,xt,Br,tu,t,Ot,Ca,hi,Zn,u,null,-0,0)}}break}while(!0);un(e)}function Mf(e,t,n,i,l,u,f,b,x,M,W,Y,z,j){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},kf(t,u,Y);var te=(u&62914560)===u?Dr-gt():(u&4194048)===u?Ef-gt():0;if(te=qw(Y,te),te!==null){jn=u,e.cancelPendingCommit=te(Nf.bind(null,e,t,u,n,i,l,f,b,x,W,Y,null,z,j)),ea(e,u,f,!M);return}}Nf(e,t,u,n,i,l,f,b,x)}function aw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var l=n[i],u=l.getSnapshot;l=l.value;try{if(!zt(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ea(e,t,n,i){t&=~eu,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var u=31-_e(l),f=1<<u;i[u]=-1,l&=~f}n!==0&&Wh(e,n,t)}function jr(){return(De&6)===0?(ho(0),!1):!0}function ou(){if(Se!==null){if(je===0)var e=Se.return;else e=Se,Sn=wa=null,kl(e),ni=null,Qi=0,e=Se;for(;e!==null;)rf(e.alternate,e),e=e.return;Se=null}}function di(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Sw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,ou(),qe=e,Se=n=kn(e.current,null),Ae=t,je=0,jt=null,Zn=!1,ui=Mi(e,t),$l=!1,hi=Ot=eu=Ca=Jn=Ze=0,xt=lo=null,tu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-_e(i),u=1<<l;t|=e[l],i&=~u}return Bn=t,tr(),n}function zf(e,t){pe=null,D.H=eo,t===ti||t===ur?(t=Fc(),je=3):t===ul?(t=Fc(),je=4):je=t===Nl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,Se===null&&(Ze=1,Sr(e,Ft(t,e.current)))}function Df(){var e=Rt.current;return e===null?!0:(Ae&4194048)===Ae?Kt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Kt:!1}function Rf(){var e=D.H;return D.H=eo,e===null?eo:e}function Bf(){var e=D.A;return D.A=tw,e}function Or(){Ze=4,Zn||(Ae&4194048)!==Ae&&Rt.current!==null||(ui=!0),(Jn&134217727)===0&&(Ca&134217727)===0||qe===null||ea(qe,Ae,Ot,!1)}function ru(e,t,n){var i=De;De|=2;var l=Rf(),u=Bf();(qe!==e||Ae!==t)&&(Br=null,di(e,t)),t=!1;var f=Ze;e:do try{if(je!==0&&Se!==null){var b=Se,x=jt;switch(je){case 8:ou(),f=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var M=je;if(je=0,jt=null,fi(e,b,x,M),n&&ui){f=0;break e}break;default:M=je,je=0,jt=null,fi(e,b,x,M)}}iw(),f=Ze;break}catch(W){zf(e,W)}while(!0);return t&&e.shellSuspendCounter++,Sn=wa=null,De=i,D.H=l,D.A=u,Se===null&&(qe=null,Ae=0,tr()),f}function iw(){for(;Se!==null;)jf(Se)}function ow(e,t){var n=De;De|=2;var i=Rf(),l=Bf();qe!==e||Ae!==t?(Br=null,Rr=gt()+500,di(e,t)):ui=Mi(e,t);e:do try{if(je!==0&&Se!==null){t=Se;var u=jt;t:switch(je){case 1:je=0,jt=null,fi(e,t,u,1);break;case 2:case 9:if(Yc(u)){je=0,jt=null,Of(t);break}t=function(){je!==2&&je!==9||qe!==e||(je=7),un(e)},u.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Yc(u)?(je=0,jt=null,Of(t)):(je=0,jt=null,fi(e,t,u,7));break;case 5:var f=null;switch(Se.tag){case 26:f=Se.memoizedState;case 5:case 27:var b=Se;if(f?vm(f):b.stateNode.complete){je=0,jt=null;var x=b.sibling;if(x!==null)Se=x;else{var M=b.return;M!==null?(Se=M,Hr(M)):Se=null}break t}}je=0,jt=null,fi(e,t,u,5);break;case 6:je=0,jt=null,fi(e,t,u,6);break;case 8:ou(),Ze=6;break e;default:throw Error(s(462))}}rw();break}catch(W){zf(e,W)}while(!0);return Sn=wa=null,D.H=i,D.A=l,De=n,Se!==null?0:(qe=null,Ae=0,tr(),Ze)}function rw(){for(;Se!==null&&!bs();)jf(Se)}function jf(e){var t=af(e.alternate,e,Bn);e.memoizedProps=e.pendingProps,t===null?Hr(e):Se=t}function Of(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jd(n,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Jd(n,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:kl(t);default:rf(n,t),t=Se=Rc(t,Bn),t=af(n,t,Bn)}e.memoizedProps=e.pendingProps,t===null?Hr(e):Se=t}function fi(e,t,n,i){Sn=wa=null,kl(t),ni=null,Qi=0;var l=t.return;try{if(Xy(e,l,t,n,Ae)){Ze=1,Sr(e,Ft(n,e.current)),Se=null;return}}catch(u){if(l!==null)throw Se=l,u;Ze=1,Sr(e,Ft(n,e.current)),Se=null;return}t.flags&32768?(Ie||i===1?e=!0:ui||(Ae&536870912)!==0?e=!1:(Zn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Rt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Hf(t,e)):Hr(t)}function Hr(e){var t=e;do{if((t.flags&32768)!==0){Hf(t,Zn);return}e=t.return;var n=Jy(t.alternate,t,Bn);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ze===0&&(Ze=5)}function Hf(e,t){do{var n=Py(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);Ze=6,Se=null}function Nf(e,t,n,i,l,u,f,b,x){e.cancelPendingCommit=null;do Nr();while(ot!==0);if((De&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Xs,Lp(e,n,u,f,b,x),e===qe&&(Se=qe=null,Ae=0),ci=t,$n=e,jn=n,nu=u,au=l,Af=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hw(de,function(){return Uf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,l=F.p,F.p=2,f=De,De|=4;try{$y(e,t,n)}finally{De=f,F.p=l,D.T=i}}ot=1,Wf(),Lf(),_f()}}function Wf(){if(ot===1){ot=0;var e=$n,t=ci,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=F.p;F.p=2;var l=De;De|=4;try{wf(t,e);var u=wu,f=Sc(e.containerInfo),b=u.focusedElem,x=u.selectionRange;if(f!==b&&b&&b.ownerDocument&&Tc(b.ownerDocument.documentElement,b)){if(x!==null&&Ys(b)){var M=x.start,W=x.end;if(W===void 0&&(W=M),"selectionStart"in b)b.selectionStart=M,b.selectionEnd=Math.min(W,b.value.length);else{var Y=b.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var j=z.getSelection(),te=b.textContent.length,ue=Math.min(x.start,te),Le=x.end===void 0?ue:Math.min(x.end,te);!j.extend&&ue>Le&&(f=Le,Le=ue,ue=f);var C=kc(b,ue),A=kc(b,Le);if(C&&A&&(j.rangeCount!==1||j.anchorNode!==C.node||j.anchorOffset!==C.offset||j.focusNode!==A.node||j.focusOffset!==A.offset)){var I=Y.createRange();I.setStart(C.node,C.offset),j.removeAllRanges(),ue>Le?(j.addRange(I),j.extend(A.node,A.offset)):(I.setEnd(A.node,A.offset),j.addRange(I))}}}}for(Y=[],j=b;j=j.parentNode;)j.nodeType===1&&Y.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var U=Y[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Kr=!!yu,wu=yu=null}finally{De=l,F.p=i,D.T=n}}e.current=t,ot=2}}function Lf(){if(ot===2){ot=0;var e=$n,t=ci,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=F.p;F.p=2;var l=De;De|=4;try{ff(e,t.alternate,t)}finally{De=l,F.p=i,D.T=n}}ot=3}}function _f(){if(ot===4||ot===3){ot=0,vs();var e=$n,t=ci,n=jn,i=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,ci=$n=null,qf(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Pn=null),xs(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=D.T,l=F.p,F.p=2,D.T=null;try{for(var u=e.onRecoverableError,f=0;f<i.length;f++){var b=i[f];u(b.value,{componentStack:b.stack})}}finally{D.T=t,F.p=l}}(jn&3)!==0&&Nr(),un(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===iu?uo++:(uo=0,iu=e):uo=0,ho(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function Nr(){return Wf(),Lf(),_f(),Uf()}function Uf(){if(ot!==5)return!1;var e=$n,t=nu;nu=0;var n=xs(jn),i=D.T,l=F.p;try{F.p=32>n?32:n,D.T=null,n=au,au=null;var u=$n,f=jn;if(ot=0,ci=$n=null,jn=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,Sf(u.current),vf(u,u.current,f,n),De=b,ho(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(pt,u)}catch{}return!0}finally{F.p=l,D.T=i,qf(e,t)}}function Yf(e,t,n){t=Ft(n,t),t=Hl(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(zi(e,2),un(e))}function Oe(e,t,n){if(e.tag===3)Yf(e,e,n);else for(;t!==null;){if(t.tag===3){Yf(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pn===null||!Pn.has(i))){e=Ft(n,e),n=Yd(2),i=Qn(t,n,2),i!==null&&(Vd(n,i,t,e),zi(i,2),un(i));break}}t=t.return}}function su(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new nw;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(n)||($l=!0,l.add(n),e=sw.bind(null,e,t,n),t.then(e,e))}function sw(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,qe===e&&(Ae&n)===n&&(Ze===4||Ze===3&&(Ae&62914560)===Ae&&300>gt()-Dr?(De&2)===0&&di(e,0):eu|=n,hi===Ae&&(hi=0)),un(e)}function Vf(e,t){t===0&&(t=Nh()),e=ga(e,t),e!==null&&(zi(e,t),un(e))}function lw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vf(e,n)}function uw(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Vf(e,n)}function hw(e,t){return ja(e,t)}var Wr=null,mi=null,lu=!1,Lr=!1,uu=!1,ta=0;function un(e){e!==mi&&e.next===null&&(mi===null?Wr=mi=e:mi=mi.next=e),Lr=!0,lu||(lu=!0,dw())}function ho(e,t){if(!uu&&Lr){uu=!0;do for(var n=!1,i=Wr;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var u=0;else{var f=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-_e(42|e)+1)-1,u&=l&~(f&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Xf(i,u))}else u=Ae,u=Yo(i,i===qe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Mi(i,u)||(n=!0,Xf(i,u));i=i.next}while(n);uu=!1}}function cw(){Ff()}function Ff(){Lr=lu=!1;var e=0;ta!==0&&Tw()&&(e=ta);for(var t=gt(),n=null,i=Wr;i!==null;){var l=i.next,u=Qf(i,t);u===0?(i.next=null,n===null?Wr=l:n.next=l,l===null&&(mi=n)):(n=i,(e!==0||(u&3)!==0)&&(Lr=!0)),i=l}ot!==0&&ot!==5||ho(e),ta!==0&&(ta=0)}function Qf(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var f=31-_e(u),b=1<<f,x=l[f];x===-1?((b&n)===0||(b&i)!==0)&&(l[f]=Wp(b,t)):x<=t&&(e.expiredLanes|=b),u&=~b}if(t=qe,n=Ae,n=Yo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ii(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Mi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ii(i),xs(n)){case 2:case 8:n=Z;break;case 32:n=de;break;case 268435456:n=Be;break;default:n=de}return i=Gf.bind(null,e),n=ja(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ii(i),e.callbackPriority=2,e.callbackNode=null,2}function Gf(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var i=Ae;return i=Yo(e,e===qe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(If(e,i,t),Qf(e,gt()),e.callbackNode!=null&&e.callbackNode===n?Gf.bind(null,e):null)}function Xf(e,t){if(Nr())return null;If(e,t,!0)}function dw(){xw(function(){(De&6)!==0?ja(q,cw):Ff()})}function hu(){if(ta===0){var e=$a;e===0&&(e=_o,_o<<=1,(_o&261888)===0&&(_o=256)),ta=e}return ta}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Go(""+e)}function Zf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fw(e,t,n,i,l){if(t==="submit"&&n&&n.stateNode===l){var u=Kf((l[bt]||null).action),f=i.submitter;f&&(t=(t=f[bt]||null)?Kf(t.formAction):f.getAttribute("formAction"),t!==null&&(u=t,f=null));var b=new Jo("action","action",null,i,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ta!==0){var x=f?Zf(l,f):new FormData(l);zl(n,{pending:!0,data:x,method:l.method,action:u},null,x)}}else typeof u=="function"&&(b.preventDefault(),x=f?Zf(l,f):new FormData(l),zl(n,{pending:!0,data:x,method:l.method,action:u},u,x))},currentTarget:l}]})}}for(var cu=0;cu<Gs.length;cu++){var du=Gs[cu],mw=du.toLowerCase(),gw=du[0].toUpperCase()+du.slice(1);tn(mw,"on"+gw)}tn(Ac,"onAnimationEnd"),tn(Cc,"onAnimationIteration"),tn(Ic,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(Dy,"onTransitionRun"),tn(Ry,"onTransitionStart"),tn(By,"onTransitionCancel"),tn(Mc,"onTransitionEnd"),La("onMouseEnter",["mouseout","mouseover"]),La("onMouseLeave",["mouseout","mouseover"]),La("onPointerEnter",["pointerout","pointerover"]),La("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],l=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var b=i[f],x=b.instance,M=b.currentTarget;if(b=b.listener,x!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=M;try{u(l)}catch(W){er(W)}l.currentTarget=null,u=x}else for(f=0;f<i.length;f++){if(b=i[f],x=b.instance,M=b.currentTarget,b=b.listener,x!==u&&l.isPropagationStopped())break e;u=b,l.currentTarget=M;try{u(l)}catch(W){er(W)}l.currentTarget=null,u=x}}}}function xe(e,t){var n=t[Es];n===void 0&&(n=t[Es]=new Set);var i=e+"__bubble";n.has(i)||(Pf(t,e,2,!1),n.add(i))}function fu(e,t,n){var i=0;t&&(i|=4),Pf(n,e,i,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function mu(e){if(!e[_r]){e[_r]=!0,Vh.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||fu(n,!1,e),fu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,fu("selectionchange",!1,t))}}function Pf(e,t,n,i){switch(Cm(t)){case 2:var l=Vw;break;case 8:l=Fw;break;default:l=Mu}n=l.bind(null,t,n,e),l=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gu(e,t,n,i,l){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var b=i.stateNode.containerInfo;if(b===l)break;if(f===4)for(f=i.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;b!==null;){if(f=Ha(b),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){i=u=f;continue e}b=b.parentNode}}i=i.return}nc(function(){var M=u,W=Rs(n),Y=[];e:{var z=zc.get(e);if(z!==void 0){var j=Jo,te=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":j=uy;break;case"focusin":te="focus",j=Ws;break;case"focusout":te="blur",j=Ws;break;case"beforeblur":case"afterblur":j=Ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=dy;break;case Ac:case Cc:case Ic:j=ey;break;case Mc:j=my;break;case"scroll":case"scrollend":j=Kp;break;case"wheel":j=py;break;case"copy":case"cut":case"paste":j=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=sc;break;case"toggle":case"beforetoggle":j=wy}var ue=(t&4)!==0,Le=!ue&&(e==="scroll"||e==="scrollend"),C=ue?z!==null?z+"Capture":null:z;ue=[];for(var A=M,I;A!==null;){var U=A;if(I=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||I===null||C===null||(U=Bi(A,C),U!=null&&ue.push(fo(A,U,I))),Le)break;A=A.return}0<ue.length&&(z=new j(z,te,null,n,W),Y.push({event:z,listeners:ue}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&n!==Ds&&(te=n.relatedTarget||n.fromElement)&&(Ha(te)||te[Oa]))break e;if((j||z)&&(z=W.window===W?W:(z=W.ownerDocument)?z.defaultView||z.parentWindow:window,j?(te=n.relatedTarget||n.toElement,j=M,te=te?Ha(te):null,te!==null&&(Le=c(te),ue=te.tag,te!==Le||ue!==5&&ue!==27&&ue!==6)&&(te=null)):(j=null,te=M),j!==te)){if(ue=oc,U="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(ue=sc,U="onPointerLeave",C="onPointerEnter",A="pointer"),Le=j==null?z:Ri(j),I=te==null?z:Ri(te),z=new ue(U,A+"leave",j,n,W),z.target=Le,z.relatedTarget=I,U=null,Ha(W)===M&&(ue=new ue(C,A+"enter",te,n,W),ue.target=I,ue.relatedTarget=Le,U=ue),Le=U,j&&te)t:{for(ue=yw,C=j,A=te,I=0,U=C;U;U=ue(U))I++;U=0;for(var se=A;se;se=ue(se))U++;for(;0<I-U;)C=ue(C),I--;for(;0<U-I;)A=ue(A),U--;for(;I--;){if(C===A||A!==null&&C===A.alternate){ue=C;break t}C=ue(C),A=ue(A)}ue=null}else ue=null;j!==null&&$f(Y,z,j,ue,!1),te!==null&&Le!==null&&$f(Y,Le,te,ue,!0)}}e:{if(z=M?Ri(M):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var Me=gc;else if(fc(z))if(pc)Me=Iy;else{Me=Ay;var ae=Ey}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?M&&zs(M.elementType)&&(Me=gc):Me=Cy;if(Me&&(Me=Me(e,M))){mc(Y,Me,n,W);break e}ae&&ae(e,z,M),e==="focusout"&&M&&z.type==="number"&&M.memoizedProps.value!=null&&Ms(z,"number",z.value)}switch(ae=M?Ri(M):window,e){case"focusin":(fc(ae)||ae.contentEditable==="true")&&(Fa=ae,Vs=M,qi=null);break;case"focusout":qi=Vs=Fa=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,xc(Y,n,W);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":xc(Y,n,W)}var ye;if(_s)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else Va?cc(e,n)&&(Ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ce="onCompositionStart");Ce&&(lc&&n.locale!=="ko"&&(Va||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Va&&(ye=ac()):(Ln=W,Os="value"in Ln?Ln.value:Ln.textContent,Va=!0)),ae=qr(M,Ce),0<ae.length&&(Ce=new rc(Ce,e,null,n,W),Y.push({event:Ce,listeners:ae}),ye?Ce.data=ye:(ye=dc(n),ye!==null&&(Ce.data=ye)))),(ye=vy?ky(e,n):Ty(e,n))&&(Ce=qr(M,"onBeforeInput"),0<Ce.length&&(ae=new rc("onBeforeInput","beforeinput",null,n,W),Y.push({event:ae,listeners:Ce}),ae.data=ye)),fw(Y,e,M,n,W)}Jf(Y,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",i=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Bi(e,n),l!=null&&i.unshift(fo(e,l,u)),l=Bi(e,t),l!=null&&i.push(fo(e,l,u))),e.tag===3)return i;e=e.return}return[]}function yw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,n,i,l){for(var u=t._reactName,f=[];n!==null&&n!==i;){var b=n,x=b.alternate,M=b.stateNode;if(b=b.tag,x!==null&&x===i)break;b!==5&&b!==26&&b!==27||M===null||(x=M,l?(M=Bi(n,u),M!=null&&f.unshift(fo(n,M,x))):l||(M=Bi(n,u),M!=null&&f.push(fo(n,M,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var ww=/\r\n?/g,bw=/\u0000|\uFFFD/g;function em(e){return(typeof e=="string"?e:""+e).replace(ww,`
`).replace(bw,"")}function tm(e,t){return t=em(t),em(e)===t}function We(e,t,n,i,l,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||qa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&qa(e,""+i);break;case"className":Fo(e,"class",i);break;case"tabIndex":Fo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Fo(e,n,i);break;case"style":ec(e,i,u);break;case"data":if(t!=="object"){Fo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Go(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&We(e,t,"name",l.name,l,null),We(e,t,"formEncType",l.formEncType,l,null),We(e,t,"formMethod",l.formMethod,l,null),We(e,t,"formTarget",l.formTarget,l,null)):(We(e,t,"encType",l.encType,l,null),We(e,t,"method",l.method,l,null),We(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Go(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=bn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Go(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Vo(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vo(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Gp.get(n)||n,Vo(e,n,i))}}function pu(e,t,n,i,l,u){switch(n){case"style":ec(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?qa(e,i):(typeof i=="number"||typeof i=="bigint")&&qa(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[bt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,l);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Vo(e,n,i)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var f=n[u];if(f!=null)switch(u){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:We(e,t,u,f,n,null)}}l&&We(e,t,"srcSet",n.srcSet,n,null),i&&We(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var b=u=f=l=null,x=null,M=null;for(i in n)if(n.hasOwnProperty(i)){var W=n[i];if(W!=null)switch(i){case"name":l=W;break;case"type":f=W;break;case"checked":x=W;break;case"defaultChecked":M=W;break;case"value":u=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,t));break;default:We(e,t,i,W,n,null)}}Zh(e,u,b,x,M,f,l,!1);return;case"select":xe("invalid",e),i=f=u=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":u=b;break;case"defaultValue":f=b;break;case"multiple":i=b;default:We(e,t,l,b,n,null)}t=u,n=f,e.multiple=!!i,t!=null?_a(e,!!i,t,!1):n!=null&&_a(e,!!i,n,!0);return;case"textarea":xe("invalid",e),u=l=i=null;for(f in n)if(n.hasOwnProperty(f)&&(b=n[f],b!=null))switch(f){case"value":i=b;break;case"defaultValue":l=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:We(e,t,f,b,n,null)}Ph(e,i,l,u);return;case"option":for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null)&&(x==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":We(e,t,x,i,n,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<co.length;i++)xe(co[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(i=n[M],i!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:We(e,t,M,i,n,null)}return;default:if(zs(t)){for(W in n)n.hasOwnProperty(W)&&(i=n[W],i!==void 0&&pu(e,t,W,i,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(i=n[b],i!=null&&We(e,t,b,i,n,null))}function vw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,f=null,b=null,x=null,M=null,W=null;for(j in n){var Y=n[j];if(n.hasOwnProperty(j)&&Y!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":x=Y;default:i.hasOwnProperty(j)||We(e,t,j,null,i,Y)}}for(var z in i){var j=i[z];if(Y=n[z],i.hasOwnProperty(z)&&(j!=null||Y!=null))switch(z){case"type":u=j;break;case"name":l=j;break;case"checked":M=j;break;case"defaultChecked":W=j;break;case"value":f=j;break;case"defaultValue":b=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,t));break;default:j!==Y&&We(e,t,z,j,i,Y)}}Is(e,f,b,x,M,W,u,l);return;case"select":j=f=b=z=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":j=x;default:i.hasOwnProperty(u)||We(e,t,u,null,i,x)}for(l in i)if(u=i[l],x=n[l],i.hasOwnProperty(l)&&(u!=null||x!=null))switch(l){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":f=u;default:u!==x&&We(e,t,l,u,i,x)}t=b,n=f,i=j,z!=null?_a(e,!!n,z,!1):!!i!=!!n&&(t!=null?_a(e,!!n,t,!0):_a(e,!!n,n?[]:"",!1));return;case"textarea":j=z=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:We(e,t,b,null,i,l)}for(f in i)if(l=i[f],u=n[f],i.hasOwnProperty(f)&&(l!=null||u!=null))switch(f){case"value":z=l;break;case"defaultValue":j=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&We(e,t,f,l,i,u)}Jh(e,z,j);return;case"option":for(var te in n)z=n[te],n.hasOwnProperty(te)&&z!=null&&!i.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:We(e,t,te,null,i,z));for(x in i)z=i[x],j=n[x],i.hasOwnProperty(x)&&z!==j&&(z!=null||j!=null)&&(x==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":We(e,t,x,z,i,j));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in n)z=n[ue],n.hasOwnProperty(ue)&&z!=null&&!i.hasOwnProperty(ue)&&We(e,t,ue,null,i,z);for(M in i)if(z=i[M],j=n[M],i.hasOwnProperty(M)&&z!==j&&(z!=null||j!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:We(e,t,M,z,i,j)}return;default:if(zs(t)){for(var Le in n)z=n[Le],n.hasOwnProperty(Le)&&z!==void 0&&!i.hasOwnProperty(Le)&&pu(e,t,Le,void 0,i,z);for(W in i)z=i[W],j=n[W],!i.hasOwnProperty(W)||z===j||z===void 0&&j===void 0||pu(e,t,W,z,i,j);return}}for(var C in n)z=n[C],n.hasOwnProperty(C)&&z!=null&&!i.hasOwnProperty(C)&&We(e,t,C,null,i,z);for(Y in i)z=i[Y],j=n[Y],!i.hasOwnProperty(Y)||z===j||z==null&&j==null||We(e,t,Y,z,i,j)}function nm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var l=n[i],u=l.transferSize,f=l.initiatorType,b=l.duration;if(u&&b&&nm(f)){for(f=0,b=l.responseEnd,i+=1;i<n.length;i++){var x=n[i],M=x.startTime;if(M>b)break;var W=x.transferSize,Y=x.initiatorType;W&&nm(Y)&&(x=x.responseEnd,f+=W*(x<b?1:(b-M)/(x-M)))}if(--i,t+=8*(u+f)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yu=null,wu=null;function Ur(e){return e.nodeType===9?e:e.ownerDocument}function am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function im(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=null;function Tw(){var e=window.event;return e&&e.type==="popstate"?e===vu?!1:(vu=e,!0):(vu=null,!1)}var om=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(Ew)}:om;function Ew(e){setTimeout(function(){throw e})}function na(e){return e==="head"}function sm(e,t){var n=t,i=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(l),wi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")mo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,mo(n);for(var u=n.firstChild;u;){var f=u.nextSibling,b=u.nodeName;u[Di]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=f}}else n==="body"&&mo(e.ownerDocument.body);n=l}while(n);wi(t)}function lm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ku(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ku(n),As(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Aw(e,t,n,i){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function Cw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function um(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function Tu(e){return e.data==="$?"||e.data==="$~"}function Su(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Iw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function hm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function dm(e,t,n){switch(t=Ur(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);As(e)}var Jt=new Map,fm=new Set;function Yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var On=F.d;F.d={f:Mw,r:zw,D:Dw,C:Rw,L:Bw,m:jw,X:Hw,S:Ow,M:Nw};function Mw(){var e=On.f(),t=jr();return e||t}function zw(e){var t=Na(e);t!==null&&t.tag===5&&t.type==="form"?Md(t):On.r(e)}var gi=typeof document>"u"?null:document;function mm(e,t,n){var i=gi;if(i&&typeof t=="string"&&t){var l=Yt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),fm.has(l)||(fm.add(l),e={rel:e,crossOrigin:n,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),dt(t,"link",e),rt(t),i.head.appendChild(t)))}}function Dw(e){On.D(e),mm("dns-prefetch",e,null)}function Rw(e,t){On.C(e,t),mm("preconnect",e,t)}function Bw(e,t,n){On.L(e,t,n);var i=gi;if(i&&e&&t){var l='link[rel="preload"][as="'+Yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Yt(n.imageSizes)+'"]')):l+='[href="'+Yt(e)+'"]';var u=l;switch(t){case"style":u=pi(e);break;case"script":u=yi(e)}Jt.has(u)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Jt.set(u,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(go(u))||t==="script"&&i.querySelector(po(u))||(t=i.createElement("link"),dt(t,"link",e),rt(t),i.head.appendChild(t)))}}function jw(e,t){On.m(e,t);var n=gi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(e)+'"]',u=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=yi(e)}if(!Jt.has(u)&&(e=w({rel:"modulepreload",href:e},t),Jt.set(u,e),n.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(po(u)))return}i=n.createElement("link"),dt(i,"link",e),rt(i),n.head.appendChild(i)}}}function Ow(e,t,n){On.S(e,t,n);var i=gi;if(i&&e){var l=Wa(i).hoistableStyles,u=pi(e);t=t||"default";var f=l.get(u);if(!f){var b={loading:0,preload:null};if(f=i.querySelector(go(u)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Jt.get(u))&&Eu(e,n);var x=f=i.createElement("link");rt(x),dt(x,"link",e),x._p=new Promise(function(M,W){x.onload=M,x.onerror=W}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vr(f,t,i)}f={type:"stylesheet",instance:f,count:1,state:b},l.set(u,f)}}}function Hw(e,t){On.X(e,t);var n=gi;if(n&&e){var i=Wa(n).hoistableScripts,l=yi(e),u=i.get(l);u||(u=n.querySelector(po(l)),u||(e=w({src:e,async:!0},t),(t=Jt.get(l))&&Au(e,t),u=n.createElement("script"),rt(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function Nw(e,t){On.M(e,t);var n=gi;if(n&&e){var i=Wa(n).hoistableScripts,l=yi(e),u=i.get(l);u||(u=n.querySelector(po(l)),u||(e=w({src:e,async:!0,type:"module"},t),(t=Jt.get(l))&&Au(e,t),u=n.createElement("script"),rt(u),dt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(l,u))}}function gm(e,t,n,i){var l=(l=re.current)?Yr(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pi(n.href),n=Wa(l).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pi(n.href);var u=Wa(l).hoistableStyles,f=u.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,f),(u=l.querySelector(go(e)))&&!u._p&&(f.instance=u,f.state.loading=5),Jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jt.set(e,n),u||Ww(l,e,n,f.state))),t&&i===null)throw Error(s(528,""));return f}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=yi(n),n=Wa(l).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pi(e){return'href="'+Yt(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function pm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Ww(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),dt(t,"link",n),rt(t),e.head.appendChild(t))}function yi(e){return'[src="'+Yt(e)+'"]'}function po(e){return"script[async]"+e}function ym(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Yt(n.href)+'"]');if(i)return t.instance=i,rt(i),i;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rt(i),dt(i,"style",l),Vr(i,n.precedence,e),t.instance=i;case"stylesheet":l=pi(n.href);var u=e.querySelector(go(l));if(u)return t.state.loading|=4,t.instance=u,rt(u),u;i=pm(n),(l=Jt.get(l))&&Eu(i,l),u=(e.ownerDocument||e).createElement("link"),rt(u);var f=u;return f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),t.state.loading|=4,Vr(u,n.precedence,e),t.instance=u;case"script":return u=yi(n.src),(l=e.querySelector(po(u)))?(t.instance=l,rt(l),l):(i=n,(l=Jt.get(u))&&(i=w({},n),Au(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),rt(l),dt(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vr(i,n.precedence,e));return t.instance}function Vr(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,u=l,f=0;f<i.length;f++){var b=i[f];if(b.dataset.precedence===t)u=b;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fr=null;function wm(e,t,n){if(Fr===null){var i=new Map,l=Fr=new Map;l.set(n,i)}else l=Fr,i=l.get(n),i||(i=new Map,l.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[Di]||u[lt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(t)||"";f=e+f;var b=i.get(f);b?b.push(u):i.set(f,[u])}}return i}function bm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Lw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _w(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=pi(i.href),u=t.querySelector(go(l));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,rt(u);return}u=t.ownerDocument||t,i=pm(i),(l=Jt.get(l))&&Eu(i,l),u=u.createElement("link"),rt(u);var f=u;f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),dt(u,"link",i),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Qr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Cu=0;function qw(e,t){return e.stylesheets&&e.count===0&&Xr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Cu===0&&(Cu=62500*kw());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xr(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Cu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function Qr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gr=null;function Xr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gr=new Map,t.forEach(Uw,e),Gr=null,Qr.call(e))}function Uw(e,t){if(!(t.state.loading&4)){var n=Gr.get(e);if(n)var i=n.get(null);else{n=new Map,Gr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var f=l[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),i=f)}i&&n.set(null,i)}l=t.instance,f=l.getAttribute("data-precedence"),u=n.get(f)||i,u===i&&n.set(null,l),n.set(f,l),this.count++,i=Qr.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var yo={$$typeof:V,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Yw(e,t,n,i,l,u,f,b,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ts(0),this.hiddenUpdates=Ts(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function km(e,t,n,i,l,u,f,b,x,M,W,Y){return e=new Yw(e,t,n,f,x,M,W,Y,b),t=1,u===!0&&(t|=24),u=Dt(3,null,null,t),e.current=u,u.stateNode=e,t=rl(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},hl(u),e}function Tm(e){return e?(e=Xa,e):Xa}function Sm(e,t,n,i,l,u){l=Tm(l),i.context===null?i.context=l:i.pendingContext=l,i=Fn(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Qn(e,i,t),n!==null&&(Et(n,e,t),Xi(n,e,t))}function xm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Iu(e,t){xm(e,t),(e=e.alternate)&&xm(e,t)}function Em(e){if(e.tag===13||e.tag===31){var t=ga(e,67108864);t!==null&&Et(t,e,67108864),Iu(e,67108864)}}function Am(e){if(e.tag===13||e.tag===31){var t=Ht();t=Ss(t);var n=ga(e,t);n!==null&&Et(n,e,t),Iu(e,t)}}var Kr=!0;function Vw(e,t,n,i){var l=D.T;D.T=null;var u=F.p;try{F.p=2,Mu(e,t,n,i)}finally{F.p=u,D.T=l}}function Fw(e,t,n,i){var l=D.T;D.T=null;var u=F.p;try{F.p=8,Mu(e,t,n,i)}finally{F.p=u,D.T=l}}function Mu(e,t,n,i){if(Kr){var l=zu(i);if(l===null)gu(e,t,i,Zr,n),Im(e,i);else if(Gw(l,e,t,n,i))i.stopPropagation();else if(Im(e,i),t&4&&-1<Qw.indexOf(e)){for(;l!==null;){var u=Na(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=ha(u.pendingLanes);if(f!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;f;){var x=1<<31-_e(f);b.entanglements[1]|=x,f&=~x}un(u),(De&6)===0&&(Rr=gt()+500,ho(0))}}break;case 31:case 13:b=ga(u,2),b!==null&&Et(b,u,2),jr(),Iu(u,2)}if(u=zu(i),u===null&&gu(e,t,i,Zr,n),u===l)break;l=u}l!==null&&i.stopPropagation()}else gu(e,t,i,null,n)}}function zu(e){return e=Rs(e),Du(e)}var Zr=null;function Du(e){if(Zr=null,e=Ha(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zr=e,null}function Cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ks()){case q:return 2;case Z:return 8;case de:case Te:return 32;case Be:return 268435456;default:return 32}default:return 32}}var Ru=!1,aa=null,ia=null,oa=null,wo=new Map,bo=new Map,ra=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(e,t){switch(e){case"focusin":case"focusout":aa=null;break;case"dragenter":case"dragleave":ia=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function vo(e,t,n,i,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Na(t),t!==null&&Em(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Gw(e,t,n,i,l){switch(t){case"focusin":return aa=vo(aa,e,t,n,i,l),!0;case"dragenter":return ia=vo(ia,e,t,n,i,l),!0;case"mouseover":return oa=vo(oa,e,t,n,i,l),!0;case"pointerover":var u=l.pointerId;return wo.set(u,vo(wo.get(u)||null,e,t,n,i,l)),!0;case"gotpointercapture":return u=l.pointerId,bo.set(u,vo(bo.get(u)||null,e,t,n,i,l)),!0}return!1}function Mm(e){var t=Ha(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){Am(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Uh(e.priority,function(){Am(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ds=i,n.target.dispatchEvent(i),Ds=null}else return t=Na(n),t!==null&&Em(t),e.blockedOn=n,!1;t.shift()}return!0}function zm(e,t,n){Jr(e)&&n.delete(t)}function Xw(){Ru=!1,aa!==null&&Jr(aa)&&(aa=null),ia!==null&&Jr(ia)&&(ia=null),oa!==null&&Jr(oa)&&(oa=null),wo.forEach(zm),bo.forEach(zm)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ru||(Ru=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Xw)))}var $r=null;function Dm(e){$r!==e&&($r=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){$r===e&&($r=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Du(i||n)===null)continue;break}var u=Na(n);u!==null&&(e.splice(t,3),t-=3,zl(u,{pending:!0,data:l,method:n.method,action:i},i,l))}}))}function wi(e){function t(x){return Pr(x,e)}aa!==null&&Pr(aa,e),ia!==null&&Pr(ia,e),oa!==null&&Pr(oa,e),wo.forEach(t),bo.forEach(t);for(var n=0;n<ra.length;n++){var i=ra[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&ra.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var l=n[i],u=n[i+1],f=l[bt]||null;if(typeof u=="function")f||Dm(n);else if(f){var b=null;if(u&&u.hasAttribute("formAction")){if(l=u,f=u[bt]||null)b=f.formAction;else if(Du(l)!==null)continue}else b=f.action;typeof b=="function"?n[i+1]=b:(n.splice(i,3),i-=3),Dm(n)}}}function Rm(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(f){return l=f})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Bu(e){this._internalRoot=e}es.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=Ht();Sm(n,i,e,t,null,null)},es.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sm(e.current,2,null,e,null,null),jr(),t[Oa]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=qh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ra.length&&t!==0&&t<ra[n].priority;n++);ra.splice(n,0,e),n===0&&Mm(e)}};var Bm=o.version;if(Bm!=="19.2.4")throw Error(s(527,Bm,"19.2.4"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Kw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ts=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ts.isDisabled&&ts.supportsFiber)try{pt=ts.inject(Kw),it=ts}catch{}}return To.createRoot=function(e,t){if(!h(e))throw Error(s(299));var n=!1,i="",l=Ld,u=_d,f=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=km(e,1,!1,null,null,n,i,null,l,u,f,Rm),e[Oa]=t.current,mu(e),new Bu(t)},To.hydrateRoot=function(e,t,n){if(!h(e))throw Error(s(299));var i=!1,l="",u=Ld,f=_d,b=qd,x=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=km(e,1,!0,t,n??null,i,l,x,u,f,b,Rm),t.context=Tm(null),n=t.current,i=Ht(),i=Ss(i),l=Fn(i),l.callback=null,Qn(n,l,i),n=i,t.current.lanes=n,zi(t,n),un(t),e[Oa]=t.current,mu(e),new es(t)},To.version="19.2.4",To}var Ym;function ob(){if(Ym)return Hu.exports;Ym=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(o){console.error(o)}}return a(),Hu.exports=ib(),Hu.exports}var rb=ob();var Vm="popstate";function Fm(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function sb(a={}){function o(h,c){let{pathname:d="/",search:g="",hash:p=""}=Ma(h.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),nh("",{pathname:d,search:g,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(h,c){let d=h.document.querySelector("base"),g="";if(d&&d.getAttribute("href")){let p=h.location.href,m=p.indexOf("#");g=m===-1?p:p.slice(0,m)}return g+"#"+(typeof c=="string"?c:Do(c))}function s(h,c){$t(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return ub(o,r,s,a)}function Xe(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function $t(a,o){if(!a){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function lb(){return Math.random().toString(36).substring(2,10)}function Qm(a,o){return{usr:a.state,key:a.key,idx:o,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function nh(a,o,r=null,s,h){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof o=="string"?Ma(o):o,state:r,key:o&&o.key||s||lb(),unstable_mask:h}}function Do({pathname:a="/",search:o="",hash:r=""}){return o&&o!=="?"&&(a+=o.charAt(0)==="?"?o:"?"+o),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Ma(a){let o={};if(a){let r=a.indexOf("#");r>=0&&(o.hash=a.substring(r),a=a.substring(0,r));let s=a.indexOf("?");s>=0&&(o.search=a.substring(s),a=a.substring(0,s)),a&&(o.pathname=a)}return o}function ub(a,o,r,s={}){let{window:h=document.defaultView,v5Compat:c=!1}=s,d=h.history,g="POP",p=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function w(){g="POP";let R=y(),B=R==null?null:R-m;m=R,p&&p({action:g,location:H.location,delta:B})}function T(R,B){g="PUSH";let X=Fm(R)?R:nh(H.location,R,B);r&&r(X,R),m=y()+1;let V=Qm(X,m),oe=H.createHref(X.unstable_mask||X);try{d.pushState(V,"",oe)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;h.location.assign(oe)}c&&p&&p({action:g,location:H.location,delta:1})}function v(R,B){g="REPLACE";let X=Fm(R)?R:nh(H.location,R,B);r&&r(X,R),m=y();let V=Qm(X,m),oe=H.createHref(X.unstable_mask||X);d.replaceState(V,"",oe),c&&p&&p({action:g,location:H.location,delta:0})}function O(R){return hb(R)}let H={get action(){return g},get location(){return a(h,d)},listen(R){if(p)throw new Error("A history only accepts one active listener");return h.addEventListener(Vm,w),p=R,()=>{h.removeEventListener(Vm,w),p=null}},createHref(R){return o(h,R)},createURL:O,encodeLocation(R){let B=O(R);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:T,replace:v,go(R){return d.go(R)}};return H}function hb(a,o=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(r,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Do(a);return s=s.replace(/ $/,"%20"),!o&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Ng(a,o,r="/"){return cb(a,o,r,!1)}function cb(a,o,r,s){let h=typeof o=="string"?Ma(o):o,c=Hn(h.pathname||"/",r);if(c==null)return null;let d=Wg(a);db(d);let g=null;for(let p=0;g==null&&p<d.length;++p){let m=Sb(c);g=kb(d[p],m,s)}return g}function Wg(a,o=[],r=[],s="",h=!1){let c=(d,g,p=h,m)=>{let y={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:g,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&p)return;Xe(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let w=dn([s,y.relativePath]),T=r.concat(y);d.children&&d.children.length>0&&(Xe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Wg(d.children,o,T,w,p)),!(d.path==null&&!d.index)&&o.push({path:w,score:bb(w,d.index),routesMeta:T})};return a.forEach((d,g)=>{if(d.path===""||!d.path?.includes("?"))c(d,g);else for(let p of Lg(d.path))c(d,g,!0,p)}),o}function Lg(a){let o=a.split("/");if(o.length===0)return[];let[r,...s]=o,h=r.endsWith("?"),c=r.replace(/\?$/,"");if(s.length===0)return h?[c,""]:[c];let d=Lg(s.join("/")),g=[];return g.push(...d.map(p=>p===""?c:[c,p].join("/"))),h&&g.push(...d),g.map(p=>a.startsWith("/")&&p===""?"/":p)}function db(a){a.sort((o,r)=>o.score!==r.score?r.score-o.score:vb(o.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var fb=/^:[\w-]+$/,mb=3,gb=2,pb=1,yb=10,wb=-2,Gm=a=>a==="*";function bb(a,o){let r=a.split("/"),s=r.length;return r.some(Gm)&&(s+=wb),o&&(s+=gb),r.filter(h=>!Gm(h)).reduce((h,c)=>h+(fb.test(c)?mb:c===""?pb:yb),s)}function vb(a,o){return a.length===o.length&&a.slice(0,-1).every((s,h)=>s===o[h])?a[a.length-1]-o[o.length-1]:0}function kb(a,o,r=!1){let{routesMeta:s}=a,h={},c="/",d=[];for(let g=0;g<s.length;++g){let p=s[g],m=g===s.length-1,y=c==="/"?o:o.slice(c.length)||"/",w=hs({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),T=p.route;if(!w&&m&&r&&!s[s.length-1].route.index&&(w=hs({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!w)return null;Object.assign(h,w.params),d.push({params:h,pathname:dn([c,w.pathname]),pathnameBase:Cb(dn([c,w.pathnameBase])),route:T}),w.pathnameBase!=="/"&&(c=dn([c,w.pathnameBase]))}return d}function hs(a,o){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,s]=Tb(a.path,a.caseSensitive,a.end),h=o.match(r);if(!h)return null;let c=h[0],d=c.replace(/(.)\/+$/,"$1"),g=h.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:w},T)=>{if(y==="*"){let O=g[T]||"";d=c.slice(0,c.length-O.length).replace(/(.)\/+$/,"$1")}const v=g[T];return w&&!v?m[y]=void 0:m[y]=(v||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:a}}function Tb(a,o=!1,r=!0){$t(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],h="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,p,m,y)=>{if(s.push({paramName:g,isOptional:p!=null}),p){let w=y.charAt(m+d.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),h+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?h+="\\/*$":a!==""&&a!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),s]}function Sb(a){try{return a.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return $t(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),a}}function Hn(a,o){if(o==="/")return a;if(!a.toLowerCase().startsWith(o.toLowerCase()))return null;let r=o.endsWith("/")?o.length-1:o.length,s=a.charAt(r);return s&&s!=="/"?null:a.slice(r)||"/"}var xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Eb(a,o="/"){let{pathname:r,search:s="",hash:h=""}=typeof a=="string"?Ma(a):a,c;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?c=Xm(r.substring(1),"/"):c=Xm(r,o)):c=o,{pathname:c,search:Ib(s),hash:Mb(h)}}function Xm(a,o){let r=o.replace(/\/+$/,"").split("/");return a.split("/").forEach(h=>{h===".."?r.length>1&&r.pop():h!=="."&&r.push(h)}),r.length>1?r.join("/"):"/"}function _u(a,o,r,s){return`Cannot include a '${a}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ab(a){return a.filter((o,r)=>r===0||o.route.path&&o.route.path.length>0)}function gh(a){let o=Ab(a);return o.map((r,s)=>s===o.length-1?r.pathname:r.pathnameBase)}function fs(a,o,r,s=!1){let h;typeof a=="string"?h=Ma(a):(h={...a},Xe(!h.pathname||!h.pathname.includes("?"),_u("?","pathname","search",h)),Xe(!h.pathname||!h.pathname.includes("#"),_u("#","pathname","hash",h)),Xe(!h.search||!h.search.includes("#"),_u("#","search","hash",h)));let c=a===""||h.pathname==="",d=c?"/":h.pathname,g;if(d==null)g=r;else{let w=o.length-1;if(!s&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),w-=1;h.pathname=T.join("/")}g=w>=0?o[w]:"/"}let p=Eb(h,g),m=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),Cb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Ib=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Mb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,zb=class{constructor(a,o,r,s=!1){this.status=a,this.statusText=o||"",this.internal=s,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Db(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Rb(a){return a.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qg(a,o){let r=a;if(typeof r!="string"||!xb.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let s=r,h=!1;if(_g)try{let c=new URL(window.location.href),d=r.startsWith("//")?new URL(c.protocol+r):new URL(r),g=Hn(d.pathname,o);d.origin===c.origin&&g!=null?r=g+d.search+d.hash:h=!0}catch{$t(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:h,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var Bb=["GET",...Ug];new Set(Bb);var Si=N.createContext(null);Si.displayName="DataRouter";var ms=N.createContext(null);ms.displayName="DataRouterState";var jb=N.createContext(!1),Yg=N.createContext({isTransitioning:!1});Yg.displayName="ViewTransition";var Ob=N.createContext(new Map);Ob.displayName="Fetchers";var Hb=N.createContext(null);Hb.displayName="Await";var _t=N.createContext(null);_t.displayName="Navigation";var Bo=N.createContext(null);Bo.displayName="Location";var on=N.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var ph=N.createContext(null);ph.displayName="RouteError";var Vg="REACT_ROUTER_ERROR",Nb="REDIRECT",Wb="ROUTE_ERROR_RESPONSE";function Lb(a){if(a.startsWith(`${Vg}:${Nb}:{`))try{let o=JSON.parse(a.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function _b(a){if(a.startsWith(`${Vg}:${Wb}:{`))try{let o=JSON.parse(a.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new zb(o.status,o.statusText,o.data)}catch{}}function qb(a,{relative:o}={}){Xe(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=N.useContext(_t),{hash:h,pathname:c,search:d}=jo(a,{relative:o}),g=c;return r!=="/"&&(g=c==="/"?r:dn([r,c])),s.createHref({pathname:g,search:d,hash:h})}function xi(){return N.useContext(Bo)!=null}function mn(){return Xe(xi(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Bo).location}var Fg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qg(a){N.useContext(_t).static||N.useLayoutEffect(a)}function yh(){let{isDataRoute:a}=N.useContext(on);return a?ev():Ub()}function Ub(){Xe(xi(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(Si),{basename:o,navigator:r}=N.useContext(_t),{matches:s}=N.useContext(on),{pathname:h}=mn(),c=JSON.stringify(gh(s)),d=N.useRef(!1);return Qg(()=>{d.current=!0}),N.useCallback((p,m={})=>{if($t(d.current,Fg),!d.current)return;if(typeof p=="number"){r.go(p);return}let y=fs(p,JSON.parse(c),h,m.relative==="path");a==null&&o!=="/"&&(y.pathname=y.pathname==="/"?o:dn([o,y.pathname])),(m.replace?r.replace:r.push)(y,m.state,m)},[o,r,c,h,a])}N.createContext(null);function Gg(){let{matches:a}=N.useContext(on),o=a[a.length-1];return o?o.params:{}}function jo(a,{relative:o}={}){let{matches:r}=N.useContext(on),{pathname:s}=mn(),h=JSON.stringify(gh(r));return N.useMemo(()=>fs(a,JSON.parse(h),s,o==="path"),[a,h,s,o])}function Yb(a,o){return Xg(a,o)}function Xg(a,o,r){Xe(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=N.useContext(_t),{matches:h}=N.useContext(on),c=h[h.length-1],d=c?c.params:{},g=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let R=m&&m.path||"";Zg(g,!m||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let y=mn(),w;if(o){let R=typeof o=="string"?Ma(o):o;Xe(p==="/"||R.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${R.pathname}" was given in the \`location\` prop.`),w=R}else w=y;let T=w.pathname||"/",v=T;if(p!=="/"){let R=p.replace(/^\//,"").split("/");v="/"+T.replace(/^\//,"").split("/").slice(R.length).join("/")}let O=Ng(a,{pathname:v});$t(m||O!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),$t(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Xb(O&&O.map(R=>Object.assign({},R,{params:Object.assign({},d,R.params),pathname:dn([p,s.encodeLocation?s.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:dn([p,s.encodeLocation?s.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),h,r);return o&&H?N.createElement(Bo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...w},navigationType:"POP"}},H):H}function Vb(){let a=$b(),o=Db(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:c},"ErrorBoundary")," or"," ",N.createElement("code",{style:c},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},o),r?N.createElement("pre",{style:h},r):null,d)}var Fb=N.createElement(Vb,null),Kg=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,o){return o.location!==a.location||o.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:o.error,location:o.location,revalidation:a.revalidation||o.revalidation}}componentDidCatch(a,o){this.props.onError?this.props.onError(a,o):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=_b(a.digest);r&&(a=r)}let o=a!==void 0?N.createElement(on.Provider,{value:this.props.routeContext},N.createElement(ph.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(Qb,{error:a},o):o}};Kg.contextType=jb;var qu=new WeakMap;function Qb({children:a,error:o}){let{basename:r}=N.useContext(_t);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let s=Lb(o.digest);if(s){let h=qu.get(o);if(h)throw h;let c=qg(s.location,r);if(_g&&!qu.get(o))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw qu.set(o,d),d}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return a}function Gb({routeContext:a,match:o,children:r}){let s=N.useContext(Si);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),N.createElement(on.Provider,{value:a},r)}function Xb(a,o=[],r){let s=r?.state;if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let h=a,c=s?.errors;if(c!=null){let y=h.findIndex(w=>w.route.id&&c?.[w.route.id]!==void 0);Xe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),h=h.slice(0,Math.min(h.length,y+1))}let d=!1,g=-1;if(r&&s){d=s.renderFallback;for(let y=0;y<h.length;y++){let w=h[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=y),w.route.id){let{loaderData:T,errors:v}=s,O=w.route.loader&&!T.hasOwnProperty(w.route.id)&&(!v||v[w.route.id]===void 0);if(w.route.lazy||O){r.isStatic&&(d=!0),g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}}let p=r?.onError,m=s&&p?(y,w)=>{p(y,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Rb(s.matches),errorInfo:w})}:void 0;return h.reduceRight((y,w,T)=>{let v,O=!1,H=null,R=null;s&&(v=c&&w.route.id?c[w.route.id]:void 0,H=w.route.errorElement||Fb,d&&(g<0&&T===0?(Zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,R=null):g===T&&(O=!0,R=w.route.hydrateFallbackElement||null)));let B=o.concat(h.slice(0,T+1)),X=()=>{let V;return v?V=H:O?V=R:w.route.Component?V=N.createElement(w.route.Component,null):w.route.element?V=w.route.element:V=y,N.createElement(Gb,{match:w,routeContext:{outlet:y,matches:B,isDataRoute:s!=null},children:V})};return s&&(w.route.ErrorBoundary||w.route.errorElement||T===0)?N.createElement(Kg,{location:s.location,revalidation:s.revalidation,component:H,error:v,children:X(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):X()},null)}function wh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kb(a){let o=N.useContext(Si);return Xe(o,wh(a)),o}function Zb(a){let o=N.useContext(ms);return Xe(o,wh(a)),o}function Jb(a){let o=N.useContext(on);return Xe(o,wh(a)),o}function bh(a){let o=Jb(a),r=o.matches[o.matches.length-1];return Xe(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function Pb(){return bh("useRouteId")}function $b(){let a=N.useContext(ph),o=Zb("useRouteError"),r=bh("useRouteError");return a!==void 0?a:o.errors?.[r]}function ev(){let{router:a}=Kb("useNavigate"),o=bh("useNavigate"),r=N.useRef(!1);return Qg(()=>{r.current=!0}),N.useCallback(async(h,c={})=>{$t(r.current,Fg),r.current&&(typeof h=="number"?await a.navigate(h):await a.navigate(h,{fromRouteId:o,...c}))},[a,o])}var Km={};function Zg(a,o,r){!o&&!Km[a]&&(Km[a]=!0,$t(!1,r))}N.memo(tv);function tv({routes:a,future:o,state:r,isStatic:s,onError:h}){return Xg(a,void 0,{state:r,isStatic:s,onError:h})}function Jg({to:a,replace:o,state:r,relative:s}){Xe(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:h}=N.useContext(_t);$t(!h,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=N.useContext(on),{pathname:d}=mn(),g=yh(),p=fs(a,gh(c),d,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{g(JSON.parse(m),{replace:o,state:r,relative:s})},[g,m,s,o,r]),null}function rs(a){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nv({basename:a="/",children:o=null,location:r,navigationType:s="POP",navigator:h,static:c=!1,unstable_useTransitions:d}){Xe(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),p=N.useMemo(()=>({basename:g,navigator:h,static:c,unstable_useTransitions:d,future:{}}),[g,h,c,d]);typeof r=="string"&&(r=Ma(r));let{pathname:m="/",search:y="",hash:w="",state:T=null,key:v="default",unstable_mask:O}=r,H=N.useMemo(()=>{let R=Hn(m,g);return R==null?null:{location:{pathname:R,search:y,hash:w,state:T,key:v,unstable_mask:O},navigationType:s}},[g,m,y,w,T,v,s,O]);return $t(H!=null,`<Router basename="${g}"> is not able to match the URL "${m}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:N.createElement(_t.Provider,{value:p},N.createElement(Bo.Provider,{children:o,value:H}))}function av({children:a,location:o}){return Yb(ah(a),o)}function ah(a,o=[]){let r=[];return N.Children.forEach(a,(s,h)=>{if(!N.isValidElement(s))return;let c=[...o,h];if(s.type===N.Fragment){r.push.apply(r,ah(s.props.children,c));return}Xe(s.type===rs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=ah(s.props.children,c)),r.push(d)}),r}var ss="get",ls="application/x-www-form-urlencoded";function gs(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function iv(a){return gs(a)&&a.tagName.toLowerCase()==="button"}function ov(a){return gs(a)&&a.tagName.toLowerCase()==="form"}function rv(a){return gs(a)&&a.tagName.toLowerCase()==="input"}function sv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function lv(a,o){return a.button===0&&(!o||o==="_self")&&!sv(a)}var ns=null;function uv(){if(ns===null)try{new FormData(document.createElement("form"),0),ns=!1}catch{ns=!0}return ns}var hv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uu(a){return a!=null&&!hv.has(a)?($t(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`),null):a}function cv(a,o){let r,s,h,c,d;if(ov(a)){let g=a.getAttribute("action");s=g?Hn(g,o):null,r=a.getAttribute("method")||ss,h=Uu(a.getAttribute("enctype"))||ls,c=new FormData(a)}else if(iv(a)||rv(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||g.getAttribute("action");if(s=p?Hn(p,o):null,r=a.getAttribute("formmethod")||g.getAttribute("method")||ss,h=Uu(a.getAttribute("formenctype"))||Uu(g.getAttribute("enctype"))||ls,c=new FormData(g,a),!uv()){let{name:m,type:y,value:w}=a;if(y==="image"){let T=m?`${m}.`:"";c.append(`${T}x`,"0"),c.append(`${T}y`,"0")}else m&&c.append(m,w)}}else{if(gs(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ss,s=null,h=ls,d=a}return c&&h==="text/plain"&&(d=c,c=void 0),{action:s,method:r.toLowerCase(),encType:h,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vh(a,o){if(a===!1||a===null||typeof a>"u")throw new Error(o)}function dv(a,o,r,s){let h=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${s}`:h.pathname=`${h.pathname}.${s}`:h.pathname==="/"?h.pathname=`_root.${s}`:o&&Hn(h.pathname,o)==="/"?h.pathname=`${o.replace(/\/$/,"")}/_root.${s}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${s}`,h}async function fv(a,o){if(a.id in o)return o[a.id];try{let r=await import(a.module);return o[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mv(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function gv(a,o,r){let s=await Promise.all(a.map(async h=>{let c=o.routes[h.route.id];if(c){let d=await fv(c,r);return d.links?d.links():[]}return[]}));return bv(s.flat(1).filter(mv).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function Zm(a,o,r,s,h,c){let d=(p,m)=>r[m]?p.route.id!==r[m].route.id:!0,g=(p,m)=>r[m].pathname!==p.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==p.params["*"];return c==="assets"?o.filter((p,m)=>d(p,m)||g(p,m)):c==="data"?o.filter((p,m)=>{let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,m)||g(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function pv(a,o,{includeHydrateFallback:r}={}){return yv(a.map(s=>{let h=o.routes[s.route.id];if(!h)return[];let c=[h.module];return h.clientActionModule&&(c=c.concat(h.clientActionModule)),h.clientLoaderModule&&(c=c.concat(h.clientLoaderModule)),r&&h.hydrateFallbackModule&&(c=c.concat(h.hydrateFallbackModule)),h.imports&&(c=c.concat(h.imports)),c}).flat(1))}function yv(a){return[...new Set(a)]}function wv(a){let o={},r=Object.keys(a).sort();for(let s of r)o[s]=a[s];return o}function bv(a,o){let r=new Set;return new Set(o),a.reduce((s,h)=>{let c=JSON.stringify(wv(h));return r.has(c)||(r.add(c),s.push({key:c,link:h})),s},[])}function Pg(){let a=N.useContext(Si);return vh(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function vv(){let a=N.useContext(ms);return vh(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var kh=N.createContext(void 0);kh.displayName="FrameworkContext";function $g(){let a=N.useContext(kh);return vh(a,"You must render this element inside a <HydratedRouter> element"),a}function kv(a,o){let r=N.useContext(kh),[s,h]=N.useState(!1),[c,d]=N.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:w}=o,T=N.useRef(null);N.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let H=B=>{B.forEach(X=>{d(X.isIntersecting)})},R=new IntersectionObserver(H,{threshold:.5});return T.current&&R.observe(T.current),()=>{R.disconnect()}}},[a]),N.useEffect(()=>{if(s){let H=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(H)}}},[s]);let v=()=>{h(!0)},O=()=>{h(!1),d(!1)};return r?a!=="intent"?[c,T,{}]:[c,T,{onFocus:So(g,v),onBlur:So(p,O),onMouseEnter:So(m,v),onMouseLeave:So(y,O),onTouchStart:So(w,v)}]:[!1,T,{}]}function So(a,o){return r=>{a&&a(r),r.defaultPrevented||o(r)}}function Tv({page:a,...o}){let{router:r}=Pg(),s=N.useMemo(()=>Ng(r.routes,a,r.basename),[r.routes,a,r.basename]);return s?N.createElement(xv,{page:a,matches:s,...o}):null}function Sv(a){let{manifest:o,routeModules:r}=$g(),[s,h]=N.useState([]);return N.useEffect(()=>{let c=!1;return gv(a,o,r).then(d=>{c||h(d)}),()=>{c=!0}},[a,o,r]),s}function xv({page:a,matches:o,...r}){let s=mn(),{future:h,manifest:c,routeModules:d}=$g(),{basename:g}=Pg(),{loaderData:p,matches:m}=vv(),y=N.useMemo(()=>Zm(a,o,m,c,s,"data"),[a,o,m,c,s]),w=N.useMemo(()=>Zm(a,o,m,c,s,"assets"),[a,o,m,c,s]),T=N.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let H=new Set,R=!1;if(o.forEach(X=>{let V=c.routes[X.route.id];!V||!V.hasLoader||(!y.some(oe=>oe.route.id===X.route.id)&&X.route.id in p&&d[X.route.id]?.shouldRevalidate||V.hasClientLoader?R=!0:H.add(X.route.id))}),H.size===0)return[];let B=dv(a,g,h.unstable_trailingSlashAwareDataRequests,"data");return R&&H.size>0&&B.searchParams.set("_routes",o.filter(X=>H.has(X.route.id)).map(X=>X.route.id).join(",")),[B.pathname+B.search]},[g,h.unstable_trailingSlashAwareDataRequests,p,s,c,y,o,a,d]),v=N.useMemo(()=>pv(w,c),[w,c]),O=Sv(w);return N.createElement(N.Fragment,null,T.map(H=>N.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...r})),v.map(H=>N.createElement("link",{key:H,rel:"modulepreload",href:H,...r})),O.map(({key:H,link:R})=>N.createElement("link",{key:H,nonce:r.nonce,...R,crossOrigin:R.crossOrigin??r.crossOrigin})))}function Ev(...a){return o=>{a.forEach(r=>{typeof r=="function"?r(o):r!=null&&(r.current=o)})}}var Av=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Av&&(window.__reactRouterVersion="7.13.1")}catch{}function Cv({basename:a,children:o,unstable_useTransitions:r,window:s}){let h=N.useRef();h.current==null&&(h.current=sb({window:s,v5Compat:!0}));let c=h.current,[d,g]=N.useState({action:c.action,location:c.location}),p=N.useCallback(m=>{r===!1?g(m):N.startTransition(()=>g(m))},[r]);return N.useLayoutEffect(()=>c.listen(p),[c,p]),N.createElement(nv,{basename:a,children:o,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:r})}var ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wt=N.forwardRef(function({onClick:o,discover:r="render",prefetch:s="none",relative:h,reloadDocument:c,replace:d,unstable_mask:g,state:p,target:m,to:y,preventScrollReset:w,viewTransition:T,unstable_defaultShouldRevalidate:v,...O},H){let{basename:R,navigator:B,unstable_useTransitions:X}=N.useContext(_t),V=typeof y=="string"&&ep.test(y),oe=qg(y,R);y=oe.to;let le=qb(y,{relative:h}),L=mn(),J=null;if(g){let Q=fs(g,[],L.unstable_mask?L.unstable_mask.pathname:"/",!0);R!=="/"&&(Q.pathname=Q.pathname==="/"?R:dn([R,Q.pathname])),J=B.createHref(Q)}let[ce,fe,be]=kv(s,O),ee=Dv(y,{replace:d,unstable_mask:g,state:p,target:m,preventScrollReset:w,relative:h,viewTransition:T,unstable_defaultShouldRevalidate:v,unstable_useTransitions:X});function $(Q){o&&o(Q),Q.defaultPrevented||ee(Q)}let ke=!(oe.isExternal||c),ne=N.createElement("a",{...O,...be,href:(ke?J:void 0)||oe.absoluteURL||le,onClick:ke?$:o,ref:Ev(H,fe),target:m,"data-discover":!V&&r==="render"?"true":void 0});return ce&&!V?N.createElement(N.Fragment,null,ne,N.createElement(Tv,{page:le})):ne});Wt.displayName="Link";var Iv=N.forwardRef(function({"aria-current":o="page",caseSensitive:r=!1,className:s="",end:h=!1,style:c,to:d,viewTransition:g,children:p,...m},y){let w=jo(d,{relative:m.relative}),T=mn(),v=N.useContext(ms),{navigator:O,basename:H}=N.useContext(_t),R=v!=null&&Hv(w)&&g===!0,B=O.encodeLocation?O.encodeLocation(w).pathname:w.pathname,X=T.pathname,V=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(X=X.toLowerCase(),V=V?V.toLowerCase():null,B=B.toLowerCase()),V&&H&&(V=Hn(V,H)||V);const oe=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let le=X===B||!h&&X.startsWith(B)&&X.charAt(oe)==="/",L=V!=null&&(V===B||!h&&V.startsWith(B)&&V.charAt(B.length)==="/"),J={isActive:le,isPending:L,isTransitioning:R},ce=le?o:void 0,fe;typeof s=="function"?fe=s(J):fe=[s,le?"active":null,L?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let be=typeof c=="function"?c(J):c;return N.createElement(Wt,{...m,"aria-current":ce,className:fe,ref:y,style:be,to:d,viewTransition:g},typeof p=="function"?p(J):p)});Iv.displayName="NavLink";var Mv=N.forwardRef(({discover:a="render",fetcherKey:o,navigate:r,reloadDocument:s,replace:h,state:c,method:d=ss,action:g,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T,...v},O)=>{let{unstable_useTransitions:H}=N.useContext(_t),R=jv(),B=Ov(g,{relative:m}),X=d.toLowerCase()==="get"?"get":"post",V=typeof g=="string"&&ep.test(g),oe=le=>{if(p&&p(le),le.defaultPrevented)return;le.preventDefault();let L=le.nativeEvent.submitter,J=L?.getAttribute("formmethod")||d,ce=()=>R(L||le.currentTarget,{fetcherKey:o,method:J,navigate:r,replace:h,state:c,relative:m,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:T});H&&r!==!1?N.startTransition(()=>ce()):ce()};return N.createElement("form",{ref:O,method:X,action:B,onSubmit:s?p:oe,...v,"data-discover":!V&&a==="render"?"true":void 0})});Mv.displayName="Form";function zv(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tp(a){let o=N.useContext(Si);return Xe(o,zv(a)),o}function Dv(a,{target:o,replace:r,unstable_mask:s,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let y=yh(),w=mn(),T=jo(a,{relative:d});return N.useCallback(v=>{if(lv(v,o)){v.preventDefault();let O=r!==void 0?r:Do(w)===Do(T),H=()=>y(a,{replace:O,unstable_mask:s,state:h,preventScrollReset:c,relative:d,viewTransition:g,unstable_defaultShouldRevalidate:p});m?N.startTransition(()=>H()):H()}},[w,y,T,r,s,h,o,a,c,d,g,p,m])}var Rv=0,Bv=()=>`__${String(++Rv)}__`;function jv(){let{router:a}=tp("useSubmit"),{basename:o}=N.useContext(_t),r=Pb(),s=a.fetch,h=a.navigate;return N.useCallback(async(c,d={})=>{let{action:g,method:p,encType:m,formData:y,body:w}=cv(c,o);if(d.navigate===!1){let T=d.fetcherKey||Bv();await s(T,r,d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await h(d.action||g,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:w,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,h,o,r])}function Ov(a,{relative:o}={}){let{basename:r}=N.useContext(_t),s=N.useContext(on);Xe(s,"useFormAction must be used inside a RouteContext");let[h]=s.matches.slice(-1),c={...jo(a||".",{relative:o})},d=mn();if(a==null){c.search=d.search;let g=new URLSearchParams(c.search),p=g.getAll("index");if(p.some(y=>y==="")){g.delete("index"),p.filter(w=>w).forEach(w=>g.append("index",w));let y=g.toString();c.search=y?`?${y}`:""}}return(!a||a===".")&&h.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:dn([r,c.pathname])),Do(c)}function Hv(a,{relative:o}={}){let r=N.useContext(Yg);Xe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=tp("useViewTransitionState"),h=jo(a,{relative:o});if(!r.isTransitioning)return!1;let c=Hn(r.currentLocation.pathname,s)||r.currentLocation.pathname,d=Hn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return hs(h.pathname,d)!=null||hs(h.pathname,c)!=null}const Nv=[{day:1,title:"What Is Interest?",date:"2026-02-27",image:"images/day-1.png",sonnet:`**🪶 Sonnet I: The Lending of Seeds**

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

*Tomorrow, Sable will reveal why the human heart rebels against such simple wisdom...*`}],Wv=[{day:1,title:"What Is a Calorie?",date:"2026-02-28",image:"images/nutrition-science/day-1.png",sonnet:`**🪶 Sonnet I: The Measure of Fire**

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

Tomorrow, Maren would reveal why two people eating identical calories might experience entirely different hormonal responses...`}],Lv=[{day:1,title:"The Power of Tactical Empathy",date:"2026-03-01",image:"images/negotiation/day-1.jpg",sonnet:`**🪶 Sonnet I: The Mirror's Edge**

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

*Tomorrow, young Ren will discover why the smallest word can carry the greatest weight...*`}],_v=[{day:1,title:"The Dichotomy of Control",date:"2026-03-01",image:"images/stoic-philosophy/day-1.jpg",sonnet:`**🪶 Sonnet I: The Two Circles**

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

*Tomorrow, Caius will discover how to measure progress on the philosophical path — for even oak trees show signs of growth to those who know where to look.*`}],qv=[{day:1,title:"What Is a Note? — Sound Has a Name",date:"2026-03-01",image:"images/music-theory/day-1.jpg",sonnet:`**🪶 Sonnet I: The First Vibration**

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

Tomorrow, Wren would ask why her Irish grandmother's lullabies felt so different from the blues she'd learned on these streets — if emotions were universal, why did musical traditions sound so distinct?`}],Uv=[{day:1,title:"Why Real Estate Builds Wealth",date:"2026-03-01",image:"images/real-estate/day-1.jpg",sonnet:`**🪶 Sonnet I: The Land That Pays You Back**

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

*Tomorrow, Hallam would teach her the art of measuring which properties deserved such borrowed gold — and which would squander it...*`}],Yv=[{day:1,title:"The Hook — Why Stories Grab You",date:"2026-03-01",image:"images/storytelling/day-1.jpg",sonnet:`**🪶 Sonnet I: The Unfinished Thread**

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

*Tomorrow, Pip discovers the mysterious force that gives every story its unique voice...*`}],Vv=[{day:1,title:"Bids for Connection — The Smallest Unit of Love",date:"2026-03-01",image:"images/building-relationships/day-1.jpg",sonnet:`**🪶 Sonnet I: The Turning Toward**

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

*Tomorrow, they would discover what happens when two people begin to walk different paths even while sharing the same road...*`}],Fv=[{day:1,title:"The Foundation of All Great Cooking - Understanding Heat",date:"2026-03-01",image:"images/cooking/day-1.jpg",sonnet:`**🪶 Sonnet I: The Foundation of All Great Cooking - Understanding Heat**

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

*Tomorrow, Ember will teach Sage how these individual thermal conversations can be orchestrated into a symphony of layered complexity.*`}],Qv=[{day:1,title:"The Question That Haunts Us All",date:"2026-03-01",image:"images/meaning-of-life/day-1.jpg",audio:"audio/meaning-of-life/day-1",standard:`🌌 **Day 1: The Question That Haunts Us All**

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

*Tomorrow, Solen must learn whether being true to oneself can coexist with love for others...*`}],Gv=[{day:1,title:"The Foundation Paradox",date:"2026-03-01",image:"images/how-to-scale/day-1.jpg",audio:"audio/how-to-scale/day-1",standard:`🚀 **Day 1: The Foundation Paradox**

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

*Tomorrow, Ironmere will reveal why the greatest builders sometimes choose to tear down their finest work...*`}],Xv=[{day:1,title:"The Great Pattern Hunt",date:"2026-03-01",image:"images/machine-learning/day-1.jpg",audio:"audio/machine-learning/day-1",standard:`🤖 Day 1: The Great Pattern Hunt

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

*Tomorrow, Nyx will discover how to systematically find this balance through the ancient art of measuring error itself...*`}],Kv=[{day:1,title:"The Inner Compass - What Is Emotional Intelligence?",date:"2026-03-02",image:"images/emotional-intelligence/day-1.jpg",audio:"audio/emotional-intelligence/day-1",sonnet:`**🪶 Sonnet I: The Inner Compass**

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

**Tomorrow:** The Veil will reveal what transforms a moment of pause into lasting change—or what causes us to repeat the same patterns despite our best intentions.`}],Zv=[{day:1,title:"The Identity-First Revolution",date:"2026-03-02",image:"images/habits-and-systems/day-1.jpg",audio:"audio/habits-and-systems/day-1",sonnet:`**🪶 Sonnet I: The Identity-First Revolution**

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

Tomorrow, Cairn will reveal what happens when the votes of our actions clash with the stories we tell ourselves about who we are.`}],Jv=[{day:1,title:"The Foundation of True Leadership",date:"2026-03-02",image:"images/leadership/day-1.jpg",audio:"audio/leadership/day-1",sonnet:`**🪶 Sonnet I: The Foundation of True Leadership**

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

Tomorrow, Tova will discover what happens when formal authority is stripped away—and learn who follows the person versus the position.`}],Pv=[{day:1,title:"The Longevity Paradox",date:"2026-03-02",image:"images/health-and-longevity/day-1.jpg",audio:"audio/health-and-longevity/day-1",sonnet:`**🪶 Sonnet I: The Longevity Paradox**

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

*Tomorrow, Senna will discover why some people seem destined for disease while others appear blessed with unshakeable health—and why this assumption might be dangerously wrong.*`}],$v=[{day:1,title:"The Sacred Foundation",date:"2026-03-04",image:"images/wedding-planning/day-1.jpg",audio:"audio/wedding-planning/day-1",sonnet:`**🪶 Sonnet I: The Sacred Foundation**

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

*Tomorrow, Dove will discover that even the most beautiful traditions must pass through the filter of authenticity...*`}],Ia=[{id:"financial-independence",name:"Financial Independence",theme:"Warren Buffett's teachings and mathematical principles",lessons:Nv},{id:"nutrition-science",name:"Nutrition Science",theme:"the science of how food fuels your body, from macronutrients to metabolism",lessons:Wv},{id:"negotiation",name:"Negotiation",theme:"FBI hostage negotiation tactics, persuasion psychology, and everyday deal-making",lessons:Lv},{id:"stoic-philosophy",name:"Stoic Philosophy",theme:"ancient Stoic teachings — mental resilience, emotional control, and living with purpose",lessons:_v},{id:"music-theory",name:"Music Theory",theme:"the building blocks of music — notes, scales, chords, rhythm, harmony, and why certain sounds make you feel things",lessons:qv},{id:"real-estate",name:"Real Estate Investing",theme:"building wealth through property — from your first rental to cash flow analysis and passive income",lessons:Uv},{id:"storytelling",name:"Storytelling",theme:"the craft of storytelling — narrative structure, character arcs, tension, pacing, dialogue, and what makes stories unforgettable",lessons:Yv},{id:"building-relationships",name:"Building Relationships",theme:"the science and art of building lasting romantic relationships — communication, love languages, conflict resolution, emotional intelligence, trust, and growing together",lessons:Vv},{id:"cooking",name:"Cooking",theme:"the art and science of cooking — techniques, flavor profiles, knife skills, heat control, seasoning, and the chemistry behind why recipes work",lessons:Fv},{id:"meaning-of-life",name:"Meaning of Life",theme:"the deepest philosophical question — existentialism, religion, absurdism, purpose, consciousness, and what thinkers from Aristotle to Camus to Viktor Frankl have said about why we're here",lessons:Qv},{id:"how-to-scale",name:"How to Scale",theme:"scaling startups, teams, and systems — from 0→1 to 1→100, hiring, delegation, technical architecture, organizational design, and lessons from founders who built billion-dollar companies",lessons:Gv},{id:"machine-learning",name:"Machine Learning",theme:"the fundamentals of machine learning — from linear regression to neural networks, gradient descent, backpropagation, transformers, and the math and intuition behind how machines learn",lessons:Xv},{id:"emotional-intelligence",name:"Emotional Intelligence",theme:"understanding and managing emotions — self-awareness, empathy, social skills, emotional regulation, and reading people",lessons:Kv},{id:"habits-and-systems",name:"Habits & Systems",theme:"building identity-based habits, designing systems that compound, breaking bad loops, and becoming the person who does the things",lessons:Zv},{id:"leadership",name:"Leadership & Influence",theme:"inspiring people, building trust, servant leadership, giving feedback, mentoring, and the difference between authority and influence",lessons:Jv},{id:"health-and-longevity",name:"Health & Longevity",theme:"the science of living longer and better — sleep, exercise physiology, stress management, aging, recovery, and the habits that add decades of healthy life",lessons:Pv},{id:"wedding-planning",name:"Wedding Planning",theme:"the art and philosophy of planning a wedding — what truly matters, balancing traditions with authenticity, managing family dynamics, budgeting wisely, and creating a celebration that reflects who you are as a couple",lessons:$v}];function Th(a){return Ia.find(o=>o.id===a)}function Jm(a){const o=Th(a);return!o||o.lessons.length===0?0:Math.max(...o.lessons.map(r=>r.day))}function ek({open:a,onClose:o}){const s=mn().pathname.split("/")[1]||"";return K.jsxs(K.Fragment,{children:[a&&K.jsx("div",{className:"sidebar-overlay",onClick:o}),K.jsxs("aside",{className:`sidebar ${a?"open":""}`,children:[K.jsx("div",{className:"sidebar-header",children:K.jsx(Wt,{to:"/",className:"sidebar-brand",onClick:o,children:"📜 Parable"})}),K.jsx("nav",{className:"sidebar-nav",children:Ia.map(h=>K.jsxs(Wt,{to:`/${h.id}`,className:`sidebar-item ${s===h.id?"active":""}`,onClick:o,children:[K.jsx("span",{className:"sidebar-item-name",children:h.name}),K.jsx("span",{className:"sidebar-item-count",children:h.lessons.length})]},h.id))})]})]})}function tk(){return K.jsxs("div",{className:"container",children:[K.jsxs("header",{className:"home-header",children:[K.jsx("h1",{children:"📜 Parable"}),K.jsx("p",{className:"subtitle",children:"Daily Lessons Through Stories"})]}),K.jsx("div",{className:"series-grid",children:Ia.map(a=>K.jsxs(Wt,{to:`/${a.id}`,className:"series-card",children:[K.jsx("h2",{className:"series-card-name",children:a.name}),K.jsx("p",{className:"series-card-theme",children:a.theme}),K.jsx("div",{className:"series-card-meta",children:K.jsxs("span",{children:[a.lessons.length," lesson",a.lessons.length!==1?"s":""]})})]},a.id))})]})}function nk(){const{seriesId:a}=Gg(),o=Th(a||""),r=yh(),s=N.useRef(null),[h,c]=N.useState(0),d=o?.lessons.length||0;if(N.useEffect(()=>{if(o&&s.current){const y=o.lessons.length-1,w=s.current;requestAnimationFrame(()=>{w.scrollTo({left:y*w.offsetWidth,behavior:"instant"}),c(y)})}},[a,o?.lessons.length]),N.useEffect(()=>{const y=s.current;if(!y)return;const w=()=>{const T=Math.round(y.scrollLeft/y.offsetWidth);c(T)};return y.addEventListener("scroll",w,{passive:!0}),()=>y.removeEventListener("scroll",w)},[]),!o)return K.jsx(Jg,{to:"/",replace:!0});const g=o.lessons,p=g[h],m=y=>{y>=0&&y<d&&s.current&&s.current.scrollTo({left:y*s.current.offsetWidth,behavior:"smooth"})};return K.jsxs("div",{className:"series-page",children:[K.jsxs("div",{className:"series-topbar",children:[K.jsx(Wt,{to:"/",className:"series-back",children:"← Home"}),K.jsxs("span",{className:"series-counter",children:[h+1," / ",d]}),K.jsx("span",{className:"series-name",children:o.name})]}),K.jsx("div",{className:"carousel",ref:s,children:g.map(y=>K.jsxs("div",{className:"carousel-slide",onClick:()=>r(`/${o.id}/lesson/${y.day}`),children:[y.image&&K.jsx("img",{src:`/parable/${y.image}`,alt:y.title,className:"carousel-img"}),K.jsxs("div",{className:"carousel-overlay",children:[K.jsxs("span",{className:"carousel-day",children:["Day ",y.day]}),K.jsx("span",{className:"carousel-title",children:y.title})]})]},y.day))}),K.jsxs("div",{className:"series-bottom",children:[K.jsx("button",{className:"series-btn",disabled:h<=0,onClick:()=>m(h-1),children:"← Previous"}),K.jsx("button",{className:"series-btn primary",onClick:()=>r(`/${o.id}/lesson/${p?.day}`),children:"Read"}),K.jsx("button",{className:"series-btn",disabled:h>=d-1,onClick:()=>m(h+1),children:"Next →"})]})]})}function ak(a,o){const r={};return(a[a.length-1]===""?[...a,""]:a).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const ik=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ok=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,rk={};function Pm(a,o){return(rk.jsx?ok:ik).test(a)}const sk=/[ \t\n\f\r]/g;function lk(a){return typeof a=="object"?a.type==="text"?$m(a.value):!1:$m(a)}function $m(a){return a.replace(sk,"")===""}class Oo{constructor(o,r,s){this.normal=r,this.property=o,s&&(this.space=s)}}Oo.prototype.normal={};Oo.prototype.property={};Oo.prototype.space=void 0;function np(a,o){const r={},s={};for(const h of a)Object.assign(r,h.property),Object.assign(s,h.normal);return new Oo(r,s,o)}function ih(a){return a.toLowerCase()}class It{constructor(o,r){this.attribute=r,this.property=o}}It.prototype.attribute="";It.prototype.booleanish=!1;It.prototype.boolean=!1;It.prototype.commaOrSpaceSeparated=!1;It.prototype.commaSeparated=!1;It.prototype.defined=!1;It.prototype.mustUseProperty=!1;It.prototype.number=!1;It.prototype.overloadedBoolean=!1;It.prototype.property="";It.prototype.spaceSeparated=!1;It.prototype.space=void 0;let uk=0;const we=za(),at=za(),oh=za(),G=za(),Ue=za(),ki=za(),Nt=za();function za(){return 2**++uk}const rh=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:at,commaOrSpaceSeparated:Nt,commaSeparated:ki,number:G,overloadedBoolean:oh,spaceSeparated:Ue},Symbol.toStringTag,{value:"Module"})),Yu=Object.keys(rh);class Sh extends It{constructor(o,r,s,h){let c=-1;if(super(o,r),eg(this,"space",h),typeof s=="number")for(;++c<Yu.length;){const d=Yu[c];eg(this,Yu[c],(s&rh[d])===rh[d])}}}Sh.prototype.defined=!0;function eg(a,o,r){r&&(a[o]=r)}function Ei(a){const o={},r={};for(const[s,h]of Object.entries(a.properties)){const c=new Sh(s,a.transform(a.attributes||{},s),h,a.space);a.mustUseProperty&&a.mustUseProperty.includes(s)&&(c.mustUseProperty=!0),o[s]=c,r[ih(s)]=s,r[ih(c.attribute)]=s}return new Oo(o,r,a.space)}const ap=Ei({properties:{ariaActiveDescendant:null,ariaAtomic:at,ariaAutoComplete:null,ariaBusy:at,ariaChecked:at,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:Ue,ariaCurrent:null,ariaDescribedBy:Ue,ariaDetails:null,ariaDisabled:at,ariaDropEffect:Ue,ariaErrorMessage:null,ariaExpanded:at,ariaFlowTo:Ue,ariaGrabbed:at,ariaHasPopup:null,ariaHidden:at,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ue,ariaLevel:G,ariaLive:null,ariaModal:at,ariaMultiLine:at,ariaMultiSelectable:at,ariaOrientation:null,ariaOwns:Ue,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:at,ariaReadOnly:at,ariaRelevant:null,ariaRequired:at,ariaRoleDescription:Ue,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:at,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(a,o){return o==="role"?o:"aria-"+o.slice(4).toLowerCase()}});function ip(a,o){return o in a?a[o]:o}function op(a,o){return ip(a,o.toLowerCase())}const hk=Ei({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ki,acceptCharset:Ue,accessKey:Ue,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Ue,autoFocus:we,autoPlay:we,blocking:Ue,capture:null,charSet:null,checked:we,cite:null,className:Ue,cols:G,colSpan:null,content:null,contentEditable:at,controls:we,controlsList:Ue,coords:G|ki,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:oh,draggable:at,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Ue,height:G,hidden:oh,high:G,href:null,hrefLang:null,htmlFor:Ue,httpEquiv:Ue,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Ue,itemRef:Ue,itemScope:we,itemType:Ue,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:G,pattern:null,ping:Ue,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Ue,required:we,reversed:we,rows:G,rowSpan:G,sandbox:Ue,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:at,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:at,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ue,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:at,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:G,security:null,unselectable:null},space:"html",transform:op}),ck=Ei({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:Ue,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ki,g2:ki,glyphName:ki,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ue,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ip}),rp=Ei({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(a,o){return"xlink:"+o.slice(5).toLowerCase()}}),sp=Ei({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:op}),lp=Ei({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(a,o){return"xml:"+o.slice(3).toLowerCase()}}),dk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},fk=/[A-Z]/g,tg=/-[a-z]/g,mk=/^data[-\w.:]+$/i;function gk(a,o){const r=ih(o);let s=o,h=It;if(r in a.normal)return a.property[a.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&mk.test(o)){if(o.charAt(4)==="-"){const c=o.slice(5).replace(tg,yk);s="data"+c.charAt(0).toUpperCase()+c.slice(1)}else{const c=o.slice(4);if(!tg.test(c)){let d=c.replace(fk,pk);d.charAt(0)!=="-"&&(d="-"+d),o="data"+d}}h=Sh}return new h(s,o)}function pk(a){return"-"+a.toLowerCase()}function yk(a){return a.charAt(1).toUpperCase()}const wk=np([ap,hk,rp,sp,lp],"html"),xh=np([ap,ck,rp,sp,lp],"svg");function bk(a){return a.join(" ").trim()}var bi={},Vu,ng;function vk(){if(ng)return Vu;ng=1;var a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,o=/\n/g,r=/^\s*/,s=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,c=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,d=/^[;\s]*/,g=/^\s+|\s+$/g,p=`
`,m="/",y="*",w="",T="comment",v="declaration";function O(R,B){if(typeof R!="string")throw new TypeError("First argument must be a string");if(!R)return[];B=B||{};var X=1,V=1;function oe(ne){var Q=ne.match(o);Q&&(X+=Q.length);var D=ne.lastIndexOf(p);V=~D?ne.length-D:V+ne.length}function le(){var ne={line:X,column:V};return function(Q){return Q.position=new L(ne),fe(),Q}}function L(ne){this.start=ne,this.end={line:X,column:V},this.source=B.source}L.prototype.content=R;function J(ne){var Q=new Error(B.source+":"+X+":"+V+": "+ne);if(Q.reason=ne,Q.filename=B.source,Q.line=X,Q.column=V,Q.source=R,!B.silent)throw Q}function ce(ne){var Q=ne.exec(R);if(Q){var D=Q[0];return oe(D),R=R.slice(D.length),Q}}function fe(){ce(r)}function be(ne){var Q;for(ne=ne||[];Q=ee();)Q!==!1&&ne.push(Q);return ne}function ee(){var ne=le();if(!(m!=R.charAt(0)||y!=R.charAt(1))){for(var Q=2;w!=R.charAt(Q)&&(y!=R.charAt(Q)||m!=R.charAt(Q+1));)++Q;if(Q+=2,w===R.charAt(Q-1))return J("End of comment missing");var D=R.slice(2,Q-2);return V+=2,oe(D),R=R.slice(Q),V+=2,ne({type:T,comment:D})}}function $(){var ne=le(),Q=ce(s);if(Q){if(ee(),!ce(h))return J("property missing ':'");var D=ce(c),F=ne({type:v,property:H(Q[0].replace(a,w)),value:D?H(D[0].replace(a,w)):w});return ce(d),F}}function ke(){var ne=[];be(ne);for(var Q;Q=$();)Q!==!1&&(ne.push(Q),be(ne));return ne}return fe(),ke()}function H(R){return R?R.replace(g,w):w}return Vu=O,Vu}var ag;function kk(){if(ag)return bi;ag=1;var a=bi&&bi.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(bi,"__esModule",{value:!0}),bi.default=r;const o=a(vk());function r(s,h){let c=null;if(!s||typeof s!="string")return c;const d=(0,o.default)(s),g=typeof h=="function";return d.forEach(p=>{if(p.type!=="declaration")return;const{property:m,value:y}=p;g?h(m,y,p):y&&(c=c||{},c[m]=y)}),c}return bi}var xo={},ig;function Tk(){if(ig)return xo;ig=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.camelCase=void 0;var a=/^--[a-zA-Z0-9_-]+$/,o=/-([a-z])/g,r=/^[^-]+$/,s=/^-(webkit|moz|ms|o|khtml)-/,h=/^-(ms)-/,c=function(m){return!m||r.test(m)||a.test(m)},d=function(m,y){return y.toUpperCase()},g=function(m,y){return"".concat(y,"-")},p=function(m,y){return y===void 0&&(y={}),c(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(h,g):m=m.replace(s,g),m.replace(o,d))};return xo.camelCase=p,xo}var Eo,og;function Sk(){if(og)return Eo;og=1;var a=Eo&&Eo.__importDefault||function(h){return h&&h.__esModule?h:{default:h}},o=a(kk()),r=Tk();function s(h,c){var d={};return!h||typeof h!="string"||(0,o.default)(h,function(g,p){g&&p&&(d[(0,r.camelCase)(g,c)]=p)}),d}return s.default=s,Eo=s,Eo}var xk=Sk();const Ek=Hg(xk),up=hp("end"),Eh=hp("start");function hp(a){return o;function o(r){const s=r&&r.position&&r.position[a]||{};if(typeof s.line=="number"&&s.line>0&&typeof s.column=="number"&&s.column>0)return{line:s.line,column:s.column,offset:typeof s.offset=="number"&&s.offset>-1?s.offset:void 0}}}function Ak(a){const o=Eh(a),r=up(a);if(o&&r)return{start:o,end:r}}function Io(a){return!a||typeof a!="object"?"":"position"in a||"type"in a?rg(a.position):"start"in a||"end"in a?rg(a):"line"in a||"column"in a?sh(a):""}function sh(a){return sg(a&&a.line)+":"+sg(a&&a.column)}function rg(a){return sh(a&&a.start)+"-"+sh(a&&a.end)}function sg(a){return a&&typeof a=="number"?a:1}class mt extends Error{constructor(o,r,s){super(),typeof r=="string"&&(s=r,r=void 0);let h="",c={},d=!1;if(r&&("line"in r&&"column"in r?c={place:r}:"start"in r&&"end"in r?c={place:r}:"type"in r?c={ancestors:[r],place:r.position}:c={...r}),typeof o=="string"?h=o:!c.cause&&o&&(d=!0,h=o.message,c.cause=o),!c.ruleId&&!c.source&&typeof s=="string"){const p=s.indexOf(":");p===-1?c.ruleId=s:(c.source=s.slice(0,p),c.ruleId=s.slice(p+1))}if(!c.place&&c.ancestors&&c.ancestors){const p=c.ancestors[c.ancestors.length-1];p&&(c.place=p.position)}const g=c.place&&"start"in c.place?c.place.start:c.place;this.ancestors=c.ancestors||void 0,this.cause=c.cause||void 0,this.column=g?g.column:void 0,this.fatal=void 0,this.file="",this.message=h,this.line=g?g.line:void 0,this.name=Io(c.place)||"1:1",this.place=c.place||void 0,this.reason=this.message,this.ruleId=c.ruleId||void 0,this.source=c.source||void 0,this.stack=d&&c.cause&&typeof c.cause.stack=="string"?c.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const Ah={}.hasOwnProperty,Ck=new Map,Ik=/[A-Z]/g,Mk=new Set(["table","tbody","thead","tfoot","tr"]),zk=new Set(["td","th"]),cp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Dk(a,o){if(!o||o.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=o.filePath||void 0;let s;if(o.development){if(typeof o.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");s=Lk(r,o.jsxDEV)}else{if(typeof o.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof o.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");s=Wk(r,o.jsx,o.jsxs)}const h={Fragment:o.Fragment,ancestors:[],components:o.components||{},create:s,elementAttributeNameCase:o.elementAttributeNameCase||"react",evaluater:o.createEvaluater?o.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:o.ignoreInvalidStyle||!1,passKeys:o.passKeys!==!1,passNode:o.passNode||!1,schema:o.space==="svg"?xh:wk,stylePropertyNameCase:o.stylePropertyNameCase||"dom",tableCellAlignToStyle:o.tableCellAlignToStyle!==!1},c=dp(h,a,void 0);return c&&typeof c!="string"?c:h.create(a,h.Fragment,{children:c||void 0},void 0)}function dp(a,o,r){if(o.type==="element")return Rk(a,o,r);if(o.type==="mdxFlowExpression"||o.type==="mdxTextExpression")return Bk(a,o);if(o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement")return Ok(a,o,r);if(o.type==="mdxjsEsm")return jk(a,o);if(o.type==="root")return Hk(a,o,r);if(o.type==="text")return Nk(a,o)}function Rk(a,o,r){const s=a.schema;let h=s;o.tagName.toLowerCase()==="svg"&&s.space==="html"&&(h=xh,a.schema=h),a.ancestors.push(o);const c=mp(a,o.tagName,!1),d=_k(a,o);let g=Ih(a,o);return Mk.has(o.tagName)&&(g=g.filter(function(p){return typeof p=="string"?!lk(p):!0})),fp(a,d,c,o),Ch(d,g),a.ancestors.pop(),a.schema=s,a.create(o,c,d,r)}function Bk(a,o){if(o.data&&o.data.estree&&a.evaluater){const s=o.data.estree.body[0];return s.type,a.evaluater.evaluateExpression(s.expression)}Ro(a,o.position)}function jk(a,o){if(o.data&&o.data.estree&&a.evaluater)return a.evaluater.evaluateProgram(o.data.estree);Ro(a,o.position)}function Ok(a,o,r){const s=a.schema;let h=s;o.name==="svg"&&s.space==="html"&&(h=xh,a.schema=h),a.ancestors.push(o);const c=o.name===null?a.Fragment:mp(a,o.name,!0),d=qk(a,o),g=Ih(a,o);return fp(a,d,c,o),Ch(d,g),a.ancestors.pop(),a.schema=s,a.create(o,c,d,r)}function Hk(a,o,r){const s={};return Ch(s,Ih(a,o)),a.create(o,a.Fragment,s,r)}function Nk(a,o){return o.value}function fp(a,o,r,s){typeof r!="string"&&r!==a.Fragment&&a.passNode&&(o.node=s)}function Ch(a,o){if(o.length>0){const r=o.length>1?o:o[0];r&&(a.children=r)}}function Wk(a,o,r){return s;function s(h,c,d,g){const m=Array.isArray(d.children)?r:o;return g?m(c,d,g):m(c,d)}}function Lk(a,o){return r;function r(s,h,c,d){const g=Array.isArray(c.children),p=Eh(s);return o(h,c,d,g,{columnNumber:p?p.column-1:void 0,fileName:a,lineNumber:p?p.line:void 0},void 0)}}function _k(a,o){const r={};let s,h;for(h in o.properties)if(h!=="children"&&Ah.call(o.properties,h)){const c=Uk(a,h,o.properties[h]);if(c){const[d,g]=c;a.tableCellAlignToStyle&&d==="align"&&typeof g=="string"&&zk.has(o.tagName)?s=g:r[d]=g}}if(s){const c=r.style||(r.style={});c[a.stylePropertyNameCase==="css"?"text-align":"textAlign"]=s}return r}function qk(a,o){const r={};for(const s of o.attributes)if(s.type==="mdxJsxExpressionAttribute")if(s.data&&s.data.estree&&a.evaluater){const c=s.data.estree.body[0];c.type;const d=c.expression;d.type;const g=d.properties[0];g.type,Object.assign(r,a.evaluater.evaluateExpression(g.argument))}else Ro(a,o.position);else{const h=s.name;let c;if(s.value&&typeof s.value=="object")if(s.value.data&&s.value.data.estree&&a.evaluater){const g=s.value.data.estree.body[0];g.type,c=a.evaluater.evaluateExpression(g.expression)}else Ro(a,o.position);else c=s.value===null?!0:s.value;r[h]=c}return r}function Ih(a,o){const r=[];let s=-1;const h=a.passKeys?new Map:Ck;for(;++s<o.children.length;){const c=o.children[s];let d;if(a.passKeys){const p=c.type==="element"?c.tagName:c.type==="mdxJsxFlowElement"||c.type==="mdxJsxTextElement"?c.name:void 0;if(p){const m=h.get(p)||0;d=p+"-"+m,h.set(p,m+1)}}const g=dp(a,c,d);g!==void 0&&r.push(g)}return r}function Uk(a,o,r){const s=gk(a.schema,o);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=s.commaSeparated?ak(r):bk(r)),s.property==="style"){let h=typeof r=="object"?r:Yk(a,String(r));return a.stylePropertyNameCase==="css"&&(h=Vk(h)),["style",h]}return[a.elementAttributeNameCase==="react"&&s.space?dk[s.property]||s.property:s.attribute,r]}}function Yk(a,o){try{return Ek(o,{reactCompat:!0})}catch(r){if(a.ignoreInvalidStyle)return{};const s=r,h=new mt("Cannot parse `style` attribute",{ancestors:a.ancestors,cause:s,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw h.file=a.filePath||void 0,h.url=cp+"#cannot-parse-style-attribute",h}}function mp(a,o,r){let s;if(!r)s={type:"Literal",value:o};else if(o.includes(".")){const h=o.split(".");let c=-1,d;for(;++c<h.length;){const g=Pm(h[c])?{type:"Identifier",name:h[c]}:{type:"Literal",value:h[c]};d=d?{type:"MemberExpression",object:d,property:g,computed:!!(c&&g.type==="Literal"),optional:!1}:g}s=d}else s=Pm(o)&&!/^[a-z]/.test(o)?{type:"Identifier",name:o}:{type:"Literal",value:o};if(s.type==="Literal"){const h=s.value;return Ah.call(a.components,h)?a.components[h]:h}if(a.evaluater)return a.evaluater.evaluateExpression(s);Ro(a)}function Ro(a,o){const r=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:a.ancestors,place:o,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=a.filePath||void 0,r.url=cp+"#cannot-handle-mdx-estrees-without-createevaluater",r}function Vk(a){const o={};let r;for(r in a)Ah.call(a,r)&&(o[Fk(r)]=a[r]);return o}function Fk(a){let o=a.replace(Ik,Qk);return o.slice(0,3)==="ms-"&&(o="-"+o),o}function Qk(a){return"-"+a.toLowerCase()}const Fu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Gk={};function Xk(a,o){const r=Gk,s=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,h=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return gp(a,s,h)}function gp(a,o,r){if(Kk(a)){if("value"in a)return a.type==="html"&&!r?"":a.value;if(o&&"alt"in a&&a.alt)return a.alt;if("children"in a)return lg(a.children,o,r)}return Array.isArray(a)?lg(a,o,r):""}function lg(a,o,r){const s=[];let h=-1;for(;++h<a.length;)s[h]=gp(a[h],o,r);return s.join("")}function Kk(a){return!!(a&&typeof a=="object")}const ug=document.createElement("i");function Mh(a){const o="&"+a+";";ug.innerHTML=o;const r=ug.textContent;return r.charCodeAt(r.length-1)===59&&a!=="semi"||r===o?!1:r}function fn(a,o,r,s){const h=a.length;let c=0,d;if(o<0?o=-o>h?0:h+o:o=o>h?h:o,r=r>0?r:0,s.length<1e4)d=Array.from(s),d.unshift(o,r),a.splice(...d);else for(r&&a.splice(o,r);c<s.length;)d=s.slice(c,c+1e4),d.unshift(o,0),a.splice(...d),c+=1e4,o+=1e4}function Pt(a,o){return a.length>0?(fn(a,a.length,0,o),a):o}const hg={}.hasOwnProperty;function Zk(a){const o={};let r=-1;for(;++r<a.length;)Jk(o,a[r]);return o}function Jk(a,o){let r;for(r in o){const h=(hg.call(a,r)?a[r]:void 0)||(a[r]={}),c=o[r];let d;if(c)for(d in c){hg.call(h,d)||(h[d]=[]);const g=c[d];Pk(h[d],Array.isArray(g)?g:g?[g]:[])}}}function Pk(a,o){let r=-1;const s=[];for(;++r<o.length;)(o[r].add==="after"?a:s).push(o[r]);fn(a,0,0,s)}function pp(a,o){const r=Number.parseInt(a,o);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Ti(a){return a.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=ua(/[A-Za-z]/),Lt=ua(/[\dA-Za-z]/),$k=ua(/[#-'*+\--9=?A-Z^-~]/);function lh(a){return a!==null&&(a<32||a===127)}const uh=ua(/\d/),eT=ua(/[\dA-Fa-f]/),tT=ua(/[!-/:-@[-`{-~]/);function me(a){return a!==null&&a<-2}function Ct(a){return a!==null&&(a<0||a===32)}function Re(a){return a===-2||a===-1||a===32}const nT=ua(new RegExp("\\p{P}|\\p{S}","u")),aT=ua(/\s/);function ua(a){return o;function o(r){return r!==null&&r>-1&&a.test(String.fromCharCode(r))}}function Ai(a){const o=[];let r=-1,s=0,h=0;for(;++r<a.length;){const c=a.charCodeAt(r);let d="";if(c===37&&Lt(a.charCodeAt(r+1))&&Lt(a.charCodeAt(r+2)))h=2;else if(c<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c))||(d=String.fromCharCode(c));else if(c>55295&&c<57344){const g=a.charCodeAt(r+1);c<56320&&g>56319&&g<57344?(d=String.fromCharCode(c,g),h=1):d="�"}else d=String.fromCharCode(c);d&&(o.push(a.slice(s,r),encodeURIComponent(d)),s=r+h+1,d=""),h&&(r+=h,h=0)}return o.join("")+a.slice(s)}function Ye(a,o,r,s){const h=s?s-1:Number.POSITIVE_INFINITY;let c=0;return d;function d(p){return Re(p)?(a.enter(r),g(p)):o(p)}function g(p){return Re(p)&&c++<h?(a.consume(p),g):(a.exit(r),o(p))}}const iT={tokenize:oT};function oT(a){const o=a.attempt(this.parser.constructs.contentInitial,s,h);let r;return o;function s(g){if(g===null){a.consume(g);return}return a.enter("lineEnding"),a.consume(g),a.exit("lineEnding"),Ye(a,o,"linePrefix")}function h(g){return a.enter("paragraph"),c(g)}function c(g){const p=a.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=p),r=p,d(g)}function d(g){if(g===null){a.exit("chunkText"),a.exit("paragraph"),a.consume(g);return}return me(g)?(a.consume(g),a.exit("chunkText"),c):(a.consume(g),d)}}const rT={tokenize:sT},cg={tokenize:lT};function sT(a){const o=this,r=[];let s=0,h,c,d;return g;function g(V){if(s<r.length){const oe=r[s];return o.containerState=oe[1],a.attempt(oe[0].continuation,p,m)(V)}return m(V)}function p(V){if(s++,o.containerState._closeFlow){o.containerState._closeFlow=void 0,h&&X();const oe=o.events.length;let le=oe,L;for(;le--;)if(o.events[le][0]==="exit"&&o.events[le][1].type==="chunkFlow"){L=o.events[le][1].end;break}B(s);let J=oe;for(;J<o.events.length;)o.events[J][1].end={...L},J++;return fn(o.events,le+1,0,o.events.slice(oe)),o.events.length=J,m(V)}return g(V)}function m(V){if(s===r.length){if(!h)return T(V);if(h.currentConstruct&&h.currentConstruct.concrete)return O(V);o.interrupt=!!(h.currentConstruct&&!h._gfmTableDynamicInterruptHack)}return o.containerState={},a.check(cg,y,w)(V)}function y(V){return h&&X(),B(s),T(V)}function w(V){return o.parser.lazy[o.now().line]=s!==r.length,d=o.now().offset,O(V)}function T(V){return o.containerState={},a.attempt(cg,v,O)(V)}function v(V){return s++,r.push([o.currentConstruct,o.containerState]),T(V)}function O(V){if(V===null){h&&X(),B(0),a.consume(V);return}return h=h||o.parser.flow(o.now()),a.enter("chunkFlow",{_tokenizer:h,contentType:"flow",previous:c}),H(V)}function H(V){if(V===null){R(a.exit("chunkFlow"),!0),B(0),a.consume(V);return}return me(V)?(a.consume(V),R(a.exit("chunkFlow")),s=0,o.interrupt=void 0,g):(a.consume(V),H)}function R(V,oe){const le=o.sliceStream(V);if(oe&&le.push(null),V.previous=c,c&&(c.next=V),c=V,h.defineSkip(V.start),h.write(le),o.parser.lazy[V.start.line]){let L=h.events.length;for(;L--;)if(h.events[L][1].start.offset<d&&(!h.events[L][1].end||h.events[L][1].end.offset>d))return;const J=o.events.length;let ce=J,fe,be;for(;ce--;)if(o.events[ce][0]==="exit"&&o.events[ce][1].type==="chunkFlow"){if(fe){be=o.events[ce][1].end;break}fe=!0}for(B(s),L=J;L<o.events.length;)o.events[L][1].end={...be},L++;fn(o.events,ce+1,0,o.events.slice(J)),o.events.length=L}}function B(V){let oe=r.length;for(;oe-- >V;){const le=r[oe];o.containerState=le[1],le[0].exit.call(o,a)}r.length=V}function X(){h.write([null]),c=void 0,h=void 0,o.containerState._closeFlow=void 0}}function lT(a,o,r){return Ye(a,a.attempt(this.parser.constructs.document,o,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dg(a){if(a===null||Ct(a)||aT(a))return 1;if(nT(a))return 2}function zh(a,o,r){const s=[];let h=-1;for(;++h<a.length;){const c=a[h].resolveAll;c&&!s.includes(c)&&(o=c(o,r),s.push(c))}return o}const hh={name:"attention",resolveAll:uT,tokenize:hT};function uT(a,o){let r=-1,s,h,c,d,g,p,m,y;for(;++r<a.length;)if(a[r][0]==="enter"&&a[r][1].type==="attentionSequence"&&a[r][1]._close){for(s=r;s--;)if(a[s][0]==="exit"&&a[s][1].type==="attentionSequence"&&a[s][1]._open&&o.sliceSerialize(a[s][1]).charCodeAt(0)===o.sliceSerialize(a[r][1]).charCodeAt(0)){if((a[s][1]._close||a[r][1]._open)&&(a[r][1].end.offset-a[r][1].start.offset)%3&&!((a[s][1].end.offset-a[s][1].start.offset+a[r][1].end.offset-a[r][1].start.offset)%3))continue;p=a[s][1].end.offset-a[s][1].start.offset>1&&a[r][1].end.offset-a[r][1].start.offset>1?2:1;const w={...a[s][1].end},T={...a[r][1].start};fg(w,-p),fg(T,p),d={type:p>1?"strongSequence":"emphasisSequence",start:w,end:{...a[s][1].end}},g={type:p>1?"strongSequence":"emphasisSequence",start:{...a[r][1].start},end:T},c={type:p>1?"strongText":"emphasisText",start:{...a[s][1].end},end:{...a[r][1].start}},h={type:p>1?"strong":"emphasis",start:{...d.start},end:{...g.end}},a[s][1].end={...d.start},a[r][1].start={...g.end},m=[],a[s][1].end.offset-a[s][1].start.offset&&(m=Pt(m,[["enter",a[s][1],o],["exit",a[s][1],o]])),m=Pt(m,[["enter",h,o],["enter",d,o],["exit",d,o],["enter",c,o]]),m=Pt(m,zh(o.parser.constructs.insideSpan.null,a.slice(s+1,r),o)),m=Pt(m,[["exit",c,o],["enter",g,o],["exit",g,o],["exit",h,o]]),a[r][1].end.offset-a[r][1].start.offset?(y=2,m=Pt(m,[["enter",a[r][1],o],["exit",a[r][1],o]])):y=0,fn(a,s-1,r-s+3,m),r=s+m.length-y-2;break}}for(r=-1;++r<a.length;)a[r][1].type==="attentionSequence"&&(a[r][1].type="data");return a}function hT(a,o){const r=this.parser.constructs.attentionMarkers.null,s=this.previous,h=dg(s);let c;return d;function d(p){return c=p,a.enter("attentionSequence"),g(p)}function g(p){if(p===c)return a.consume(p),g;const m=a.exit("attentionSequence"),y=dg(p),w=!y||y===2&&h||r.includes(p),T=!h||h===2&&y||r.includes(s);return m._open=!!(c===42?w:w&&(h||!T)),m._close=!!(c===42?T:T&&(y||!w)),o(p)}}function fg(a,o){a.column+=o,a.offset+=o,a._bufferIndex+=o}const cT={name:"autolink",tokenize:dT};function dT(a,o,r){let s=0;return h;function h(v){return a.enter("autolink"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.enter("autolinkProtocol"),c}function c(v){return cn(v)?(a.consume(v),d):v===64?r(v):m(v)}function d(v){return v===43||v===45||v===46||Lt(v)?(s=1,g(v)):m(v)}function g(v){return v===58?(a.consume(v),s=0,p):(v===43||v===45||v===46||Lt(v))&&s++<32?(a.consume(v),g):(s=0,m(v))}function p(v){return v===62?(a.exit("autolinkProtocol"),a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),o):v===null||v===32||v===60||lh(v)?r(v):(a.consume(v),p)}function m(v){return v===64?(a.consume(v),y):$k(v)?(a.consume(v),m):r(v)}function y(v){return Lt(v)?w(v):r(v)}function w(v){return v===46?(a.consume(v),s=0,y):v===62?(a.exit("autolinkProtocol").type="autolinkEmail",a.enter("autolinkMarker"),a.consume(v),a.exit("autolinkMarker"),a.exit("autolink"),o):T(v)}function T(v){if((v===45||Lt(v))&&s++<63){const O=v===45?T:w;return a.consume(v),O}return r(v)}}const ps={partial:!0,tokenize:fT};function fT(a,o,r){return s;function s(c){return Re(c)?Ye(a,h,"linePrefix")(c):h(c)}function h(c){return c===null||me(c)?o(c):r(c)}}const yp={continuation:{tokenize:gT},exit:pT,name:"blockQuote",tokenize:mT};function mT(a,o,r){const s=this;return h;function h(d){if(d===62){const g=s.containerState;return g.open||(a.enter("blockQuote",{_container:!0}),g.open=!0),a.enter("blockQuotePrefix"),a.enter("blockQuoteMarker"),a.consume(d),a.exit("blockQuoteMarker"),c}return r(d)}function c(d){return Re(d)?(a.enter("blockQuotePrefixWhitespace"),a.consume(d),a.exit("blockQuotePrefixWhitespace"),a.exit("blockQuotePrefix"),o):(a.exit("blockQuotePrefix"),o(d))}}function gT(a,o,r){const s=this;return h;function h(d){return Re(d)?Ye(a,c,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d):c(d)}function c(d){return a.attempt(yp,o,r)(d)}}function pT(a){a.exit("blockQuote")}const wp={name:"characterEscape",tokenize:yT};function yT(a,o,r){return s;function s(c){return a.enter("characterEscape"),a.enter("escapeMarker"),a.consume(c),a.exit("escapeMarker"),h}function h(c){return tT(c)?(a.enter("characterEscapeValue"),a.consume(c),a.exit("characterEscapeValue"),a.exit("characterEscape"),o):r(c)}}const bp={name:"characterReference",tokenize:wT};function wT(a,o,r){const s=this;let h=0,c,d;return g;function g(w){return a.enter("characterReference"),a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),p}function p(w){return w===35?(a.enter("characterReferenceMarkerNumeric"),a.consume(w),a.exit("characterReferenceMarkerNumeric"),m):(a.enter("characterReferenceValue"),c=31,d=Lt,y(w))}function m(w){return w===88||w===120?(a.enter("characterReferenceMarkerHexadecimal"),a.consume(w),a.exit("characterReferenceMarkerHexadecimal"),a.enter("characterReferenceValue"),c=6,d=eT,y):(a.enter("characterReferenceValue"),c=7,d=uh,y(w))}function y(w){if(w===59&&h){const T=a.exit("characterReferenceValue");return d===Lt&&!Mh(s.sliceSerialize(T))?r(w):(a.enter("characterReferenceMarker"),a.consume(w),a.exit("characterReferenceMarker"),a.exit("characterReference"),o)}return d(w)&&h++<c?(a.consume(w),y):r(w)}}const mg={partial:!0,tokenize:vT},gg={concrete:!0,name:"codeFenced",tokenize:bT};function bT(a,o,r){const s=this,h={partial:!0,tokenize:le};let c=0,d=0,g;return p;function p(L){return m(L)}function m(L){const J=s.events[s.events.length-1];return c=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,g=L,a.enter("codeFenced"),a.enter("codeFencedFence"),a.enter("codeFencedFenceSequence"),y(L)}function y(L){return L===g?(d++,a.consume(L),y):d<3?r(L):(a.exit("codeFencedFenceSequence"),Re(L)?Ye(a,w,"whitespace")(L):w(L))}function w(L){return L===null||me(L)?(a.exit("codeFencedFence"),s.interrupt?o(L):a.check(mg,H,oe)(L)):(a.enter("codeFencedFenceInfo"),a.enter("chunkString",{contentType:"string"}),T(L))}function T(L){return L===null||me(L)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),w(L)):Re(L)?(a.exit("chunkString"),a.exit("codeFencedFenceInfo"),Ye(a,v,"whitespace")(L)):L===96&&L===g?r(L):(a.consume(L),T)}function v(L){return L===null||me(L)?w(L):(a.enter("codeFencedFenceMeta"),a.enter("chunkString",{contentType:"string"}),O(L))}function O(L){return L===null||me(L)?(a.exit("chunkString"),a.exit("codeFencedFenceMeta"),w(L)):L===96&&L===g?r(L):(a.consume(L),O)}function H(L){return a.attempt(h,oe,R)(L)}function R(L){return a.enter("lineEnding"),a.consume(L),a.exit("lineEnding"),B}function B(L){return c>0&&Re(L)?Ye(a,X,"linePrefix",c+1)(L):X(L)}function X(L){return L===null||me(L)?a.check(mg,H,oe)(L):(a.enter("codeFlowValue"),V(L))}function V(L){return L===null||me(L)?(a.exit("codeFlowValue"),X(L)):(a.consume(L),V)}function oe(L){return a.exit("codeFenced"),o(L)}function le(L,J,ce){let fe=0;return be;function be(Q){return L.enter("lineEnding"),L.consume(Q),L.exit("lineEnding"),ee}function ee(Q){return L.enter("codeFencedFence"),Re(Q)?Ye(L,$,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Q):$(Q)}function $(Q){return Q===g?(L.enter("codeFencedFenceSequence"),ke(Q)):ce(Q)}function ke(Q){return Q===g?(fe++,L.consume(Q),ke):fe>=d?(L.exit("codeFencedFenceSequence"),Re(Q)?Ye(L,ne,"whitespace")(Q):ne(Q)):ce(Q)}function ne(Q){return Q===null||me(Q)?(L.exit("codeFencedFence"),J(Q)):ce(Q)}}}function vT(a,o,r){const s=this;return h;function h(d){return d===null?r(d):(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c)}function c(d){return s.parser.lazy[s.now().line]?r(d):o(d)}}const Qu={name:"codeIndented",tokenize:TT},kT={partial:!0,tokenize:ST};function TT(a,o,r){const s=this;return h;function h(m){return a.enter("codeIndented"),Ye(a,c,"linePrefix",5)(m)}function c(m){const y=s.events[s.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?d(m):r(m)}function d(m){return m===null?p(m):me(m)?a.attempt(kT,d,p)(m):(a.enter("codeFlowValue"),g(m))}function g(m){return m===null||me(m)?(a.exit("codeFlowValue"),d(m)):(a.consume(m),g)}function p(m){return a.exit("codeIndented"),o(m)}}function ST(a,o,r){const s=this;return h;function h(d){return s.parser.lazy[s.now().line]?r(d):me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),h):Ye(a,c,"linePrefix",5)(d)}function c(d){const g=s.events[s.events.length-1];return g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?o(d):me(d)?h(d):r(d)}}const xT={name:"codeText",previous:AT,resolve:ET,tokenize:CT};function ET(a){let o=a.length-4,r=3,s,h;if((a[r][1].type==="lineEnding"||a[r][1].type==="space")&&(a[o][1].type==="lineEnding"||a[o][1].type==="space")){for(s=r;++s<o;)if(a[s][1].type==="codeTextData"){a[r][1].type="codeTextPadding",a[o][1].type="codeTextPadding",r+=2,o-=2;break}}for(s=r-1,o++;++s<=o;)h===void 0?s!==o&&a[s][1].type!=="lineEnding"&&(h=s):(s===o||a[s][1].type==="lineEnding")&&(a[h][1].type="codeTextData",s!==h+2&&(a[h][1].end=a[s-1][1].end,a.splice(h+2,s-h-2),o-=s-h-2,s=h+2),h=void 0);return a}function AT(a){return a!==96||this.events[this.events.length-1][1].type==="characterEscape"}function CT(a,o,r){let s=0,h,c;return d;function d(w){return a.enter("codeText"),a.enter("codeTextSequence"),g(w)}function g(w){return w===96?(a.consume(w),s++,g):(a.exit("codeTextSequence"),p(w))}function p(w){return w===null?r(w):w===32?(a.enter("space"),a.consume(w),a.exit("space"),p):w===96?(c=a.enter("codeTextSequence"),h=0,y(w)):me(w)?(a.enter("lineEnding"),a.consume(w),a.exit("lineEnding"),p):(a.enter("codeTextData"),m(w))}function m(w){return w===null||w===32||w===96||me(w)?(a.exit("codeTextData"),p(w)):(a.consume(w),m)}function y(w){return w===96?(a.consume(w),h++,y):h===s?(a.exit("codeTextSequence"),a.exit("codeText"),o(w)):(c.type="codeTextData",m(w))}}class IT{constructor(o){this.left=o?[...o]:[],this.right=[]}get(o){if(o<0||o>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+o+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return o<this.left.length?this.left[o]:this.right[this.right.length-o+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(o,r){const s=r??Number.POSITIVE_INFINITY;return s<this.left.length?this.left.slice(o,s):o>this.left.length?this.right.slice(this.right.length-s+this.left.length,this.right.length-o+this.left.length).reverse():this.left.slice(o).concat(this.right.slice(this.right.length-s+this.left.length).reverse())}splice(o,r,s){const h=r||0;this.setCursor(Math.trunc(o));const c=this.right.splice(this.right.length-h,Number.POSITIVE_INFINITY);return s&&Ao(this.left,s),c.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(o){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(o)}pushMany(o){this.setCursor(Number.POSITIVE_INFINITY),Ao(this.left,o)}unshift(o){this.setCursor(0),this.right.push(o)}unshiftMany(o){this.setCursor(0),Ao(this.right,o.reverse())}setCursor(o){if(!(o===this.left.length||o>this.left.length&&this.right.length===0||o<0&&this.left.length===0))if(o<this.left.length){const r=this.left.splice(o,Number.POSITIVE_INFINITY);Ao(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-o,Number.POSITIVE_INFINITY);Ao(this.left,r.reverse())}}}function Ao(a,o){let r=0;if(o.length<1e4)a.push(...o);else for(;r<o.length;)a.push(...o.slice(r,r+1e4)),r+=1e4}function vp(a){const o={};let r=-1,s,h,c,d,g,p,m;const y=new IT(a);for(;++r<y.length;){for(;r in o;)r=o[r];if(s=y.get(r),r&&s[1].type==="chunkFlow"&&y.get(r-1)[1].type==="listItemPrefix"&&(p=s[1]._tokenizer.events,c=0,c<p.length&&p[c][1].type==="lineEndingBlank"&&(c+=2),c<p.length&&p[c][1].type==="content"))for(;++c<p.length&&p[c][1].type!=="content";)p[c][1].type==="chunkText"&&(p[c][1]._isInFirstContentOfListItem=!0,c++);if(s[0]==="enter")s[1].contentType&&(Object.assign(o,MT(y,r)),r=o[r],m=!0);else if(s[1]._container){for(c=r,h=void 0;c--;)if(d=y.get(c),d[1].type==="lineEnding"||d[1].type==="lineEndingBlank")d[0]==="enter"&&(h&&(y.get(h)[1].type="lineEndingBlank"),d[1].type="lineEnding",h=c);else if(!(d[1].type==="linePrefix"||d[1].type==="listItemIndent"))break;h&&(s[1].end={...y.get(h)[1].start},g=y.slice(h,r),g.unshift(s),y.splice(h,r-h+1,g))}}return fn(a,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function MT(a,o){const r=a.get(o)[1],s=a.get(o)[2];let h=o-1;const c=[];let d=r._tokenizer;d||(d=s.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(d._contentTypeTextTrailing=!0));const g=d.events,p=[],m={};let y,w,T=-1,v=r,O=0,H=0;const R=[H];for(;v;){for(;a.get(++h)[1]!==v;);c.push(h),v._tokenizer||(y=s.sliceStream(v),v.next||y.push(null),w&&d.defineSkip(v.start),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=!0),d.write(y),v._isInFirstContentOfListItem&&(d._gfmTasklistFirstContentOfListItem=void 0)),w=v,v=v.next}for(v=r;++T<g.length;)g[T][0]==="exit"&&g[T-1][0]==="enter"&&g[T][1].type===g[T-1][1].type&&g[T][1].start.line!==g[T][1].end.line&&(H=T+1,R.push(H),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(d.events=[],v?(v._tokenizer=void 0,v.previous=void 0):R.pop(),T=R.length;T--;){const B=g.slice(R[T],R[T+1]),X=c.pop();p.push([X,X+B.length-1]),a.splice(X,2,B)}for(p.reverse(),T=-1;++T<p.length;)m[O+p[T][0]]=O+p[T][1],O+=p[T][1]-p[T][0]-1;return m}const zT={resolve:RT,tokenize:BT},DT={partial:!0,tokenize:jT};function RT(a){return vp(a),a}function BT(a,o){let r;return s;function s(g){return a.enter("content"),r=a.enter("chunkContent",{contentType:"content"}),h(g)}function h(g){return g===null?c(g):me(g)?a.check(DT,d,c)(g):(a.consume(g),h)}function c(g){return a.exit("chunkContent"),a.exit("content"),o(g)}function d(g){return a.consume(g),a.exit("chunkContent"),r.next=a.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,h}}function jT(a,o,r){const s=this;return h;function h(d){return a.exit("chunkContent"),a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),Ye(a,c,"linePrefix")}function c(d){if(d===null||me(d))return r(d);const g=s.events[s.events.length-1];return!s.parser.constructs.disable.null.includes("codeIndented")&&g&&g[1].type==="linePrefix"&&g[2].sliceSerialize(g[1],!0).length>=4?o(d):a.interrupt(s.parser.constructs.flow,r,o)(d)}}function kp(a,o,r,s,h,c,d,g,p){const m=p||Number.POSITIVE_INFINITY;let y=0;return w;function w(B){return B===60?(a.enter(s),a.enter(h),a.enter(c),a.consume(B),a.exit(c),T):B===null||B===32||B===41||lh(B)?r(B):(a.enter(s),a.enter(d),a.enter(g),a.enter("chunkString",{contentType:"string"}),H(B))}function T(B){return B===62?(a.enter(c),a.consume(B),a.exit(c),a.exit(h),a.exit(s),o):(a.enter(g),a.enter("chunkString",{contentType:"string"}),v(B))}function v(B){return B===62?(a.exit("chunkString"),a.exit(g),T(B)):B===null||B===60||me(B)?r(B):(a.consume(B),B===92?O:v)}function O(B){return B===60||B===62||B===92?(a.consume(B),v):v(B)}function H(B){return!y&&(B===null||B===41||Ct(B))?(a.exit("chunkString"),a.exit(g),a.exit(d),a.exit(s),o(B)):y<m&&B===40?(a.consume(B),y++,H):B===41?(a.consume(B),y--,H):B===null||B===32||B===40||lh(B)?r(B):(a.consume(B),B===92?R:H)}function R(B){return B===40||B===41||B===92?(a.consume(B),H):H(B)}}function Tp(a,o,r,s,h,c){const d=this;let g=0,p;return m;function m(v){return a.enter(s),a.enter(h),a.consume(v),a.exit(h),a.enter(c),y}function y(v){return g>999||v===null||v===91||v===93&&!p||v===94&&!g&&"_hiddenFootnoteSupport"in d.parser.constructs?r(v):v===93?(a.exit(c),a.enter(h),a.consume(v),a.exit(h),a.exit(s),o):me(v)?(a.enter("lineEnding"),a.consume(v),a.exit("lineEnding"),y):(a.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||v===91||v===93||me(v)||g++>999?(a.exit("chunkString"),y(v)):(a.consume(v),p||(p=!Re(v)),v===92?T:w)}function T(v){return v===91||v===92||v===93?(a.consume(v),g++,w):w(v)}}function Sp(a,o,r,s,h,c){let d;return g;function g(T){return T===34||T===39||T===40?(a.enter(s),a.enter(h),a.consume(T),a.exit(h),d=T===40?41:T,p):r(T)}function p(T){return T===d?(a.enter(h),a.consume(T),a.exit(h),a.exit(s),o):(a.enter(c),m(T))}function m(T){return T===d?(a.exit(c),p(d)):T===null?r(T):me(T)?(a.enter("lineEnding"),a.consume(T),a.exit("lineEnding"),Ye(a,m,"linePrefix")):(a.enter("chunkString",{contentType:"string"}),y(T))}function y(T){return T===d||T===null||me(T)?(a.exit("chunkString"),m(T)):(a.consume(T),T===92?w:y)}function w(T){return T===d||T===92?(a.consume(T),y):y(T)}}function Mo(a,o){let r;return s;function s(h){return me(h)?(a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),r=!0,s):Re(h)?Ye(a,s,r?"linePrefix":"lineSuffix")(h):o(h)}}const OT={name:"definition",tokenize:NT},HT={partial:!0,tokenize:WT};function NT(a,o,r){const s=this;let h;return c;function c(v){return a.enter("definition"),d(v)}function d(v){return Tp.call(s,a,g,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function g(v){return h=Ti(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)),v===58?(a.enter("definitionMarker"),a.consume(v),a.exit("definitionMarker"),p):r(v)}function p(v){return Ct(v)?Mo(a,m)(v):m(v)}function m(v){return kp(a,y,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return a.attempt(HT,w,w)(v)}function w(v){return Re(v)?Ye(a,T,"whitespace")(v):T(v)}function T(v){return v===null||me(v)?(a.exit("definition"),s.parser.defined.push(h),o(v)):r(v)}}function WT(a,o,r){return s;function s(g){return Ct(g)?Mo(a,h)(g):r(g)}function h(g){return Sp(a,c,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(g)}function c(g){return Re(g)?Ye(a,d,"whitespace")(g):d(g)}function d(g){return g===null||me(g)?o(g):r(g)}}const LT={name:"hardBreakEscape",tokenize:_T};function _T(a,o,r){return s;function s(c){return a.enter("hardBreakEscape"),a.consume(c),h}function h(c){return me(c)?(a.exit("hardBreakEscape"),o(c)):r(c)}}const qT={name:"headingAtx",resolve:UT,tokenize:YT};function UT(a,o){let r=a.length-2,s=3,h,c;return a[s][1].type==="whitespace"&&(s+=2),r-2>s&&a[r][1].type==="whitespace"&&(r-=2),a[r][1].type==="atxHeadingSequence"&&(s===r-1||r-4>s&&a[r-2][1].type==="whitespace")&&(r-=s+1===r?2:4),r>s&&(h={type:"atxHeadingText",start:a[s][1].start,end:a[r][1].end},c={type:"chunkText",start:a[s][1].start,end:a[r][1].end,contentType:"text"},fn(a,s,r-s+1,[["enter",h,o],["enter",c,o],["exit",c,o],["exit",h,o]])),a}function YT(a,o,r){let s=0;return h;function h(y){return a.enter("atxHeading"),c(y)}function c(y){return a.enter("atxHeadingSequence"),d(y)}function d(y){return y===35&&s++<6?(a.consume(y),d):y===null||Ct(y)?(a.exit("atxHeadingSequence"),g(y)):r(y)}function g(y){return y===35?(a.enter("atxHeadingSequence"),p(y)):y===null||me(y)?(a.exit("atxHeading"),o(y)):Re(y)?Ye(a,g,"whitespace")(y):(a.enter("atxHeadingText"),m(y))}function p(y){return y===35?(a.consume(y),p):(a.exit("atxHeadingSequence"),g(y))}function m(y){return y===null||y===35||Ct(y)?(a.exit("atxHeadingText"),g(y)):(a.consume(y),m)}}const VT=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],pg=["pre","script","style","textarea"],FT={concrete:!0,name:"htmlFlow",resolveTo:XT,tokenize:KT},QT={partial:!0,tokenize:JT},GT={partial:!0,tokenize:ZT};function XT(a){let o=a.length;for(;o--&&!(a[o][0]==="enter"&&a[o][1].type==="htmlFlow"););return o>1&&a[o-2][1].type==="linePrefix"&&(a[o][1].start=a[o-2][1].start,a[o+1][1].start=a[o-2][1].start,a.splice(o-2,2)),a}function KT(a,o,r){const s=this;let h,c,d,g,p;return m;function m(k){return y(k)}function y(k){return a.enter("htmlFlow"),a.enter("htmlFlowData"),a.consume(k),w}function w(k){return k===33?(a.consume(k),T):k===47?(a.consume(k),c=!0,H):k===63?(a.consume(k),h=3,s.interrupt?o:S):cn(k)?(a.consume(k),d=String.fromCharCode(k),R):r(k)}function T(k){return k===45?(a.consume(k),h=2,v):k===91?(a.consume(k),h=5,g=0,O):cn(k)?(a.consume(k),h=4,s.interrupt?o:S):r(k)}function v(k){return k===45?(a.consume(k),s.interrupt?o:S):r(k)}function O(k){const P="CDATA[";return k===P.charCodeAt(g++)?(a.consume(k),g===P.length?s.interrupt?o:$:O):r(k)}function H(k){return cn(k)?(a.consume(k),d=String.fromCharCode(k),R):r(k)}function R(k){if(k===null||k===47||k===62||Ct(k)){const P=k===47,he=d.toLowerCase();return!P&&!c&&pg.includes(he)?(h=1,s.interrupt?o(k):$(k)):VT.includes(d.toLowerCase())?(h=6,P?(a.consume(k),B):s.interrupt?o(k):$(k)):(h=7,s.interrupt&&!s.parser.lazy[s.now().line]?r(k):c?X(k):V(k))}return k===45||Lt(k)?(a.consume(k),d+=String.fromCharCode(k),R):r(k)}function B(k){return k===62?(a.consume(k),s.interrupt?o:$):r(k)}function X(k){return Re(k)?(a.consume(k),X):be(k)}function V(k){return k===47?(a.consume(k),be):k===58||k===95||cn(k)?(a.consume(k),oe):Re(k)?(a.consume(k),V):be(k)}function oe(k){return k===45||k===46||k===58||k===95||Lt(k)?(a.consume(k),oe):le(k)}function le(k){return k===61?(a.consume(k),L):Re(k)?(a.consume(k),le):V(k)}function L(k){return k===null||k===60||k===61||k===62||k===96?r(k):k===34||k===39?(a.consume(k),p=k,J):Re(k)?(a.consume(k),L):ce(k)}function J(k){return k===p?(a.consume(k),p=null,fe):k===null||me(k)?r(k):(a.consume(k),J)}function ce(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ct(k)?le(k):(a.consume(k),ce)}function fe(k){return k===47||k===62||Re(k)?V(k):r(k)}function be(k){return k===62?(a.consume(k),ee):r(k)}function ee(k){return k===null||me(k)?$(k):Re(k)?(a.consume(k),ee):r(k)}function $(k){return k===45&&h===2?(a.consume(k),D):k===60&&h===1?(a.consume(k),F):k===62&&h===4?(a.consume(k),E):k===63&&h===3?(a.consume(k),S):k===93&&h===5?(a.consume(k),ve):me(k)&&(h===6||h===7)?(a.exit("htmlFlowData"),a.check(QT,_,ke)(k)):k===null||me(k)?(a.exit("htmlFlowData"),ke(k)):(a.consume(k),$)}function ke(k){return a.check(GT,ne,_)(k)}function ne(k){return a.enter("lineEnding"),a.consume(k),a.exit("lineEnding"),Q}function Q(k){return k===null||me(k)?ke(k):(a.enter("htmlFlowData"),$(k))}function D(k){return k===45?(a.consume(k),S):$(k)}function F(k){return k===47?(a.consume(k),d="",ie):$(k)}function ie(k){if(k===62){const P=d.toLowerCase();return pg.includes(P)?(a.consume(k),E):$(k)}return cn(k)&&d.length<8?(a.consume(k),d+=String.fromCharCode(k),ie):$(k)}function ve(k){return k===93?(a.consume(k),S):$(k)}function S(k){return k===62?(a.consume(k),E):k===45&&h===2?(a.consume(k),S):$(k)}function E(k){return k===null||me(k)?(a.exit("htmlFlowData"),_(k)):(a.consume(k),E)}function _(k){return a.exit("htmlFlow"),o(k)}}function ZT(a,o,r){const s=this;return h;function h(d){return me(d)?(a.enter("lineEnding"),a.consume(d),a.exit("lineEnding"),c):r(d)}function c(d){return s.parser.lazy[s.now().line]?r(d):o(d)}}function JT(a,o,r){return s;function s(h){return a.enter("lineEnding"),a.consume(h),a.exit("lineEnding"),a.attempt(ps,o,r)}}const PT={name:"htmlText",tokenize:$T};function $T(a,o,r){const s=this;let h,c,d;return g;function g(S){return a.enter("htmlText"),a.enter("htmlTextData"),a.consume(S),p}function p(S){return S===33?(a.consume(S),m):S===47?(a.consume(S),le):S===63?(a.consume(S),V):cn(S)?(a.consume(S),ce):r(S)}function m(S){return S===45?(a.consume(S),y):S===91?(a.consume(S),c=0,O):cn(S)?(a.consume(S),X):r(S)}function y(S){return S===45?(a.consume(S),v):r(S)}function w(S){return S===null?r(S):S===45?(a.consume(S),T):me(S)?(d=w,F(S)):(a.consume(S),w)}function T(S){return S===45?(a.consume(S),v):w(S)}function v(S){return S===62?D(S):S===45?T(S):w(S)}function O(S){const E="CDATA[";return S===E.charCodeAt(c++)?(a.consume(S),c===E.length?H:O):r(S)}function H(S){return S===null?r(S):S===93?(a.consume(S),R):me(S)?(d=H,F(S)):(a.consume(S),H)}function R(S){return S===93?(a.consume(S),B):H(S)}function B(S){return S===62?D(S):S===93?(a.consume(S),B):H(S)}function X(S){return S===null||S===62?D(S):me(S)?(d=X,F(S)):(a.consume(S),X)}function V(S){return S===null?r(S):S===63?(a.consume(S),oe):me(S)?(d=V,F(S)):(a.consume(S),V)}function oe(S){return S===62?D(S):V(S)}function le(S){return cn(S)?(a.consume(S),L):r(S)}function L(S){return S===45||Lt(S)?(a.consume(S),L):J(S)}function J(S){return me(S)?(d=J,F(S)):Re(S)?(a.consume(S),J):D(S)}function ce(S){return S===45||Lt(S)?(a.consume(S),ce):S===47||S===62||Ct(S)?fe(S):r(S)}function fe(S){return S===47?(a.consume(S),D):S===58||S===95||cn(S)?(a.consume(S),be):me(S)?(d=fe,F(S)):Re(S)?(a.consume(S),fe):D(S)}function be(S){return S===45||S===46||S===58||S===95||Lt(S)?(a.consume(S),be):ee(S)}function ee(S){return S===61?(a.consume(S),$):me(S)?(d=ee,F(S)):Re(S)?(a.consume(S),ee):fe(S)}function $(S){return S===null||S===60||S===61||S===62||S===96?r(S):S===34||S===39?(a.consume(S),h=S,ke):me(S)?(d=$,F(S)):Re(S)?(a.consume(S),$):(a.consume(S),ne)}function ke(S){return S===h?(a.consume(S),h=void 0,Q):S===null?r(S):me(S)?(d=ke,F(S)):(a.consume(S),ke)}function ne(S){return S===null||S===34||S===39||S===60||S===61||S===96?r(S):S===47||S===62||Ct(S)?fe(S):(a.consume(S),ne)}function Q(S){return S===47||S===62||Ct(S)?fe(S):r(S)}function D(S){return S===62?(a.consume(S),a.exit("htmlTextData"),a.exit("htmlText"),o):r(S)}function F(S){return a.exit("htmlTextData"),a.enter("lineEnding"),a.consume(S),a.exit("lineEnding"),ie}function ie(S){return Re(S)?Ye(a,ve,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):ve(S)}function ve(S){return a.enter("htmlTextData"),d(S)}}const Dh={name:"labelEnd",resolveAll:a0,resolveTo:i0,tokenize:o0},e0={tokenize:r0},t0={tokenize:s0},n0={tokenize:l0};function a0(a){let o=-1;const r=[];for(;++o<a.length;){const s=a[o][1];if(r.push(a[o]),s.type==="labelImage"||s.type==="labelLink"||s.type==="labelEnd"){const h=s.type==="labelImage"?4:2;s.type="data",o+=h}}return a.length!==r.length&&fn(a,0,a.length,r),a}function i0(a,o){let r=a.length,s=0,h,c,d,g;for(;r--;)if(h=a[r][1],c){if(h.type==="link"||h.type==="labelLink"&&h._inactive)break;a[r][0]==="enter"&&h.type==="labelLink"&&(h._inactive=!0)}else if(d){if(a[r][0]==="enter"&&(h.type==="labelImage"||h.type==="labelLink")&&!h._balanced&&(c=r,h.type!=="labelLink")){s=2;break}}else h.type==="labelEnd"&&(d=r);const p={type:a[c][1].type==="labelLink"?"link":"image",start:{...a[c][1].start},end:{...a[a.length-1][1].end}},m={type:"label",start:{...a[c][1].start},end:{...a[d][1].end}},y={type:"labelText",start:{...a[c+s+2][1].end},end:{...a[d-2][1].start}};return g=[["enter",p,o],["enter",m,o]],g=Pt(g,a.slice(c+1,c+s+3)),g=Pt(g,[["enter",y,o]]),g=Pt(g,zh(o.parser.constructs.insideSpan.null,a.slice(c+s+4,d-3),o)),g=Pt(g,[["exit",y,o],a[d-2],a[d-1],["exit",m,o]]),g=Pt(g,a.slice(d+1)),g=Pt(g,[["exit",p,o]]),fn(a,c,a.length,g),a}function o0(a,o,r){const s=this;let h=s.events.length,c,d;for(;h--;)if((s.events[h][1].type==="labelImage"||s.events[h][1].type==="labelLink")&&!s.events[h][1]._balanced){c=s.events[h][1];break}return g;function g(T){return c?c._inactive?w(T):(d=s.parser.defined.includes(Ti(s.sliceSerialize({start:c.end,end:s.now()}))),a.enter("labelEnd"),a.enter("labelMarker"),a.consume(T),a.exit("labelMarker"),a.exit("labelEnd"),p):r(T)}function p(T){return T===40?a.attempt(e0,y,d?y:w)(T):T===91?a.attempt(t0,y,d?m:w)(T):d?y(T):w(T)}function m(T){return a.attempt(n0,y,w)(T)}function y(T){return o(T)}function w(T){return c._balanced=!0,r(T)}}function r0(a,o,r){return s;function s(w){return a.enter("resource"),a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),h}function h(w){return Ct(w)?Mo(a,c)(w):c(w)}function c(w){return w===41?y(w):kp(a,d,g,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(w)}function d(w){return Ct(w)?Mo(a,p)(w):y(w)}function g(w){return r(w)}function p(w){return w===34||w===39||w===40?Sp(a,m,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(w):y(w)}function m(w){return Ct(w)?Mo(a,y)(w):y(w)}function y(w){return w===41?(a.enter("resourceMarker"),a.consume(w),a.exit("resourceMarker"),a.exit("resource"),o):r(w)}}function s0(a,o,r){const s=this;return h;function h(g){return Tp.call(s,a,c,d,"reference","referenceMarker","referenceString")(g)}function c(g){return s.parser.defined.includes(Ti(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)))?o(g):r(g)}function d(g){return r(g)}}function l0(a,o,r){return s;function s(c){return a.enter("reference"),a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),h}function h(c){return c===93?(a.enter("referenceMarker"),a.consume(c),a.exit("referenceMarker"),a.exit("reference"),o):r(c)}}const u0={name:"labelStartImage",resolveAll:Dh.resolveAll,tokenize:h0};function h0(a,o,r){const s=this;return h;function h(g){return a.enter("labelImage"),a.enter("labelImageMarker"),a.consume(g),a.exit("labelImageMarker"),c}function c(g){return g===91?(a.enter("labelMarker"),a.consume(g),a.exit("labelMarker"),a.exit("labelImage"),d):r(g)}function d(g){return g===94&&"_hiddenFootnoteSupport"in s.parser.constructs?r(g):o(g)}}const c0={name:"labelStartLink",resolveAll:Dh.resolveAll,tokenize:d0};function d0(a,o,r){const s=this;return h;function h(d){return a.enter("labelLink"),a.enter("labelMarker"),a.consume(d),a.exit("labelMarker"),a.exit("labelLink"),c}function c(d){return d===94&&"_hiddenFootnoteSupport"in s.parser.constructs?r(d):o(d)}}const Gu={name:"lineEnding",tokenize:f0};function f0(a,o){return r;function r(s){return a.enter("lineEnding"),a.consume(s),a.exit("lineEnding"),Ye(a,o,"linePrefix")}}const us={name:"thematicBreak",tokenize:m0};function m0(a,o,r){let s=0,h;return c;function c(m){return a.enter("thematicBreak"),d(m)}function d(m){return h=m,g(m)}function g(m){return m===h?(a.enter("thematicBreakSequence"),p(m)):s>=3&&(m===null||me(m))?(a.exit("thematicBreak"),o(m)):r(m)}function p(m){return m===h?(a.consume(m),s++,p):(a.exit("thematicBreakSequence"),Re(m)?Ye(a,g,"whitespace")(m):g(m))}}const At={continuation:{tokenize:w0},exit:v0,name:"list",tokenize:y0},g0={partial:!0,tokenize:k0},p0={partial:!0,tokenize:b0};function y0(a,o,r){const s=this,h=s.events[s.events.length-1];let c=h&&h[1].type==="linePrefix"?h[2].sliceSerialize(h[1],!0).length:0,d=0;return g;function g(v){const O=s.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(O==="listUnordered"?!s.containerState.marker||v===s.containerState.marker:uh(v)){if(s.containerState.type||(s.containerState.type=O,a.enter(O,{_container:!0})),O==="listUnordered")return a.enter("listItemPrefix"),v===42||v===45?a.check(us,r,m)(v):m(v);if(!s.interrupt||v===49)return a.enter("listItemPrefix"),a.enter("listItemValue"),p(v)}return r(v)}function p(v){return uh(v)&&++d<10?(a.consume(v),p):(!s.interrupt||d<2)&&(s.containerState.marker?v===s.containerState.marker:v===41||v===46)?(a.exit("listItemValue"),m(v)):r(v)}function m(v){return a.enter("listItemMarker"),a.consume(v),a.exit("listItemMarker"),s.containerState.marker=s.containerState.marker||v,a.check(ps,s.interrupt?r:y,a.attempt(g0,T,w))}function y(v){return s.containerState.initialBlankLine=!0,c++,T(v)}function w(v){return Re(v)?(a.enter("listItemPrefixWhitespace"),a.consume(v),a.exit("listItemPrefixWhitespace"),T):r(v)}function T(v){return s.containerState.size=c+s.sliceSerialize(a.exit("listItemPrefix"),!0).length,o(v)}}function w0(a,o,r){const s=this;return s.containerState._closeFlow=void 0,a.check(ps,h,c);function h(g){return s.containerState.furtherBlankLines=s.containerState.furtherBlankLines||s.containerState.initialBlankLine,Ye(a,o,"listItemIndent",s.containerState.size+1)(g)}function c(g){return s.containerState.furtherBlankLines||!Re(g)?(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,d(g)):(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,a.attempt(p0,o,d)(g))}function d(g){return s.containerState._closeFlow=!0,s.interrupt=void 0,Ye(a,a.attempt(At,o,r),"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g)}}function b0(a,o,r){const s=this;return Ye(a,h,"listItemIndent",s.containerState.size+1);function h(c){const d=s.events[s.events.length-1];return d&&d[1].type==="listItemIndent"&&d[2].sliceSerialize(d[1],!0).length===s.containerState.size?o(c):r(c)}}function v0(a){a.exit(this.containerState.type)}function k0(a,o,r){const s=this;return Ye(a,h,"listItemPrefixWhitespace",s.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function h(c){const d=s.events[s.events.length-1];return!Re(c)&&d&&d[1].type==="listItemPrefixWhitespace"?o(c):r(c)}}const yg={name:"setextUnderline",resolveTo:T0,tokenize:S0};function T0(a,o){let r=a.length,s,h,c;for(;r--;)if(a[r][0]==="enter"){if(a[r][1].type==="content"){s=r;break}a[r][1].type==="paragraph"&&(h=r)}else a[r][1].type==="content"&&a.splice(r,1),!c&&a[r][1].type==="definition"&&(c=r);const d={type:"setextHeading",start:{...a[s][1].start},end:{...a[a.length-1][1].end}};return a[h][1].type="setextHeadingText",c?(a.splice(h,0,["enter",d,o]),a.splice(c+1,0,["exit",a[s][1],o]),a[s][1].end={...a[c][1].end}):a[s][1]=d,a.push(["exit",d,o]),a}function S0(a,o,r){const s=this;let h;return c;function c(m){let y=s.events.length,w;for(;y--;)if(s.events[y][1].type!=="lineEnding"&&s.events[y][1].type!=="linePrefix"&&s.events[y][1].type!=="content"){w=s.events[y][1].type==="paragraph";break}return!s.parser.lazy[s.now().line]&&(s.interrupt||w)?(a.enter("setextHeadingLine"),h=m,d(m)):r(m)}function d(m){return a.enter("setextHeadingLineSequence"),g(m)}function g(m){return m===h?(a.consume(m),g):(a.exit("setextHeadingLineSequence"),Re(m)?Ye(a,p,"lineSuffix")(m):p(m))}function p(m){return m===null||me(m)?(a.exit("setextHeadingLine"),o(m)):r(m)}}const x0={tokenize:E0};function E0(a){const o=this,r=a.attempt(ps,s,a.attempt(this.parser.constructs.flowInitial,h,Ye(a,a.attempt(this.parser.constructs.flow,h,a.attempt(zT,h)),"linePrefix")));return r;function s(c){if(c===null){a.consume(c);return}return a.enter("lineEndingBlank"),a.consume(c),a.exit("lineEndingBlank"),o.currentConstruct=void 0,r}function h(c){if(c===null){a.consume(c);return}return a.enter("lineEnding"),a.consume(c),a.exit("lineEnding"),o.currentConstruct=void 0,r}}const A0={resolveAll:Ep()},C0=xp("string"),I0=xp("text");function xp(a){return{resolveAll:Ep(a==="text"?M0:void 0),tokenize:o};function o(r){const s=this,h=this.parser.constructs[a],c=r.attempt(h,d,g);return d;function d(y){return m(y)?c(y):g(y)}function g(y){if(y===null){r.consume(y);return}return r.enter("data"),r.consume(y),p}function p(y){return m(y)?(r.exit("data"),c(y)):(r.consume(y),p)}function m(y){if(y===null)return!0;const w=h[y];let T=-1;if(w)for(;++T<w.length;){const v=w[T];if(!v.previous||v.previous.call(s,s.previous))return!0}return!1}}}function Ep(a){return o;function o(r,s){let h=-1,c;for(;++h<=r.length;)c===void 0?r[h]&&r[h][1].type==="data"&&(c=h,h++):(!r[h]||r[h][1].type!=="data")&&(h!==c+2&&(r[c][1].end=r[h-1][1].end,r.splice(c+2,h-c-2),h=c+2),c=void 0);return a?a(r,s):r}}function M0(a,o){let r=0;for(;++r<=a.length;)if((r===a.length||a[r][1].type==="lineEnding")&&a[r-1][1].type==="data"){const s=a[r-1][1],h=o.sliceStream(s);let c=h.length,d=-1,g=0,p;for(;c--;){const m=h[c];if(typeof m=="string"){for(d=m.length;m.charCodeAt(d-1)===32;)g++,d--;if(d)break;d=-1}else if(m===-2)p=!0,g++;else if(m!==-1){c++;break}}if(o._contentTypeTextTrailing&&r===a.length&&(g=0),g){const m={type:r===a.length||p||g<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:c?d:s.start._bufferIndex+d,_index:s.start._index+c,line:s.end.line,column:s.end.column-g,offset:s.end.offset-g},end:{...s.end}};s.end={...m.start},s.start.offset===s.end.offset?Object.assign(s,m):(a.splice(r,0,["enter",m,o],["exit",m,o]),r+=2)}r++}return a}const z0={42:At,43:At,45:At,48:At,49:At,50:At,51:At,52:At,53:At,54:At,55:At,56:At,57:At,62:yp},D0={91:OT},R0={[-2]:Qu,[-1]:Qu,32:Qu},B0={35:qT,42:us,45:[yg,us],60:FT,61:yg,95:us,96:gg,126:gg},j0={38:bp,92:wp},O0={[-5]:Gu,[-4]:Gu,[-3]:Gu,33:u0,38:bp,42:hh,60:[cT,PT],91:c0,92:[LT,wp],93:Dh,95:hh,96:xT},H0={null:[hh,A0]},N0={null:[42,95]},W0={null:[]},L0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:N0,contentInitial:D0,disable:W0,document:z0,flow:B0,flowInitial:R0,insideSpan:H0,string:j0,text:O0},Symbol.toStringTag,{value:"Module"}));function _0(a,o,r){let s={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const h={},c=[];let d=[],g=[];const p={attempt:J(le),check:J(L),consume:X,enter:V,exit:oe,interrupt:J(L,{interrupt:!0})},m={code:null,containerState:{},defineSkip:H,events:[],now:O,parser:a,previous:null,sliceSerialize:T,sliceStream:v,write:w};let y=o.tokenize.call(m,p);return o.resolveAll&&c.push(o),m;function w(ee){return d=Pt(d,ee),R(),d[d.length-1]!==null?[]:(ce(o,0),m.events=zh(c,m.events,m),m.events)}function T(ee,$){return U0(v(ee),$)}function v(ee){return q0(d,ee)}function O(){const{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:Q}=s;return{_bufferIndex:ee,_index:$,line:ke,column:ne,offset:Q}}function H(ee){h[ee.line]=ee.column,be()}function R(){let ee;for(;s._index<d.length;){const $=d[s._index];if(typeof $=="string")for(ee=s._index,s._bufferIndex<0&&(s._bufferIndex=0);s._index===ee&&s._bufferIndex<$.length;)B($.charCodeAt(s._bufferIndex));else B($)}}function B(ee){y=y(ee)}function X(ee){me(ee)?(s.line++,s.column=1,s.offset+=ee===-3?2:1,be()):ee!==-1&&(s.column++,s.offset++),s._bufferIndex<0?s._index++:(s._bufferIndex++,s._bufferIndex===d[s._index].length&&(s._bufferIndex=-1,s._index++)),m.previous=ee}function V(ee,$){const ke=$||{};return ke.type=ee,ke.start=O(),m.events.push(["enter",ke,m]),g.push(ke),ke}function oe(ee){const $=g.pop();return $.end=O(),m.events.push(["exit",$,m]),$}function le(ee,$){ce(ee,$.from)}function L(ee,$){$.restore()}function J(ee,$){return ke;function ke(ne,Q,D){let F,ie,ve,S;return Array.isArray(ne)?_(ne):"tokenize"in ne?_([ne]):E(ne);function E(re){return Ee;function Ee(Qe){const He=Qe!==null&&re[Qe],qt=Qe!==null&&re.null,gn=[...Array.isArray(He)?He:He?[He]:[],...Array.isArray(qt)?qt:qt?[qt]:[]];return _(gn)(Qe)}}function _(re){return F=re,ie=0,re.length===0?D:k(re[ie])}function k(re){return Ee;function Ee(Qe){return S=fe(),ve=re,re.partial||(m.currentConstruct=re),re.name&&m.parser.constructs.disable.null.includes(re.name)?he():re.tokenize.call($?Object.assign(Object.create(m),$):m,p,P,he)(Qe)}}function P(re){return ee(ve,S),Q}function he(re){return S.restore(),++ie<F.length?k(F[ie]):D}}}function ce(ee,$){ee.resolveAll&&!c.includes(ee)&&c.push(ee),ee.resolve&&fn(m.events,$,m.events.length-$,ee.resolve(m.events.slice($),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function fe(){const ee=O(),$=m.previous,ke=m.currentConstruct,ne=m.events.length,Q=Array.from(g);return{from:ne,restore:D};function D(){s=ee,m.previous=$,m.currentConstruct=ke,m.events.length=ne,g=Q,be()}}function be(){s.line in h&&s.column<2&&(s.column=h[s.line],s.offset+=h[s.line]-1)}}function q0(a,o){const r=o.start._index,s=o.start._bufferIndex,h=o.end._index,c=o.end._bufferIndex;let d;if(r===h)d=[a[r].slice(s,c)];else{if(d=a.slice(r,h),s>-1){const g=d[0];typeof g=="string"?d[0]=g.slice(s):d.shift()}c>0&&d.push(a[h].slice(0,c))}return d}function U0(a,o){let r=-1;const s=[];let h;for(;++r<a.length;){const c=a[r];let d;if(typeof c=="string")d=c;else switch(c){case-5:{d="\r";break}case-4:{d=`
`;break}case-3:{d=`\r
`;break}case-2:{d=o?" ":"	";break}case-1:{if(!o&&h)continue;d=" ";break}default:d=String.fromCharCode(c)}h=c===-2,s.push(d)}return s.join("")}function Y0(a){const s={constructs:Zk([L0,...(a||{}).extensions||[]]),content:h(iT),defined:[],document:h(rT),flow:h(x0),lazy:{},string:h(C0),text:h(I0)};return s;function h(c){return d;function d(g){return _0(s,c,g)}}}function V0(a){for(;!vp(a););return a}const wg=/[\0\t\n\r]/g;function F0(){let a=1,o="",r=!0,s;return h;function h(c,d,g){const p=[];let m,y,w,T,v;for(c=o+(typeof c=="string"?c.toString():new TextDecoder(d||void 0).decode(c)),w=0,o="",r&&(c.charCodeAt(0)===65279&&w++,r=void 0);w<c.length;){if(wg.lastIndex=w,m=wg.exec(c),T=m&&m.index!==void 0?m.index:c.length,v=c.charCodeAt(T),!m){o=c.slice(w);break}if(v===10&&w===T&&s)p.push(-3),s=void 0;else switch(s&&(p.push(-5),s=void 0),w<T&&(p.push(c.slice(w,T)),a+=T-w),v){case 0:{p.push(65533),a++;break}case 9:{for(y=Math.ceil(a/4)*4,p.push(-2);a++<y;)p.push(-1);break}case 10:{p.push(-4),a=1;break}default:s=!0,a=1}w=T+1}return g&&(s&&p.push(-5),o&&p.push(o),p.push(null)),p}}const Q0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function G0(a){return a.replace(Q0,X0)}function X0(a,o,r){if(o)return o;if(r.charCodeAt(0)===35){const h=r.charCodeAt(1),c=h===120||h===88;return pp(r.slice(c?2:1),c?16:10)}return Mh(r)||a}const Ap={}.hasOwnProperty;function K0(a,o,r){return o&&typeof o=="object"&&(r=o,o=void 0),Z0(r)(V0(Y0(r).document().write(F0()(a,o,!0))))}function Z0(a){const o={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:c(Ba),autolinkProtocol:fe,autolinkEmail:fe,atxHeading:c(Da),blockQuote:c(qt),characterEscape:fe,characterReference:fe,codeFenced:c(gn),codeFencedFenceInfo:d,codeFencedFenceMeta:d,codeIndented:c(gn,d),codeText:c(Ci,d),codeTextData:fe,data:fe,codeFlowValue:fe,definition:c(No),definitionDestinationString:d,definitionLabelString:d,definitionTitleString:d,emphasis:c(pn),hardBreakEscape:c(Ra),hardBreakTrailing:c(Ra),htmlFlow:c(Wo,d),htmlFlowData:fe,htmlText:c(Wo,d),htmlTextData:fe,image:c(Lo),label:d,link:c(Ba),listItem:c(Ii),listItemValue:T,listOrdered:c(ja,w),listUnordered:c(ja),paragraph:c(bs),reference:k,referenceString:d,resourceDestinationString:d,resourceTitleString:d,setextHeading:c(Da),strong:c(vs),thematicBreak:c(ks)},exit:{atxHeading:p(),atxHeadingSequence:le,autolink:p(),autolinkEmail:He,autolinkProtocol:Qe,blockQuote:p(),characterEscapeValue:be,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:re,characterReference:Ee,codeFenced:p(R),codeFencedFence:H,codeFencedFenceInfo:v,codeFencedFenceMeta:O,codeFlowValue:be,codeIndented:p(B),codeText:p(Q),codeTextData:be,data:be,definition:p(),definitionDestinationString:oe,definitionLabelString:X,definitionTitleString:V,emphasis:p(),hardBreakEscape:p($),hardBreakTrailing:p($),htmlFlow:p(ke),htmlFlowData:be,htmlText:p(ne),htmlTextData:be,image:p(F),label:ve,labelText:ie,lineEnding:ee,link:p(D),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:P,resourceDestinationString:S,resourceTitleString:E,resource:_,setextHeading:p(ce),setextHeadingLineSequence:J,setextHeadingText:L,strong:p(),thematicBreak:p()}};Cp(o,(a||{}).mdastExtensions||[]);const r={};return s;function s(q){let Z={type:"root",children:[]};const de={stack:[Z],tokenStack:[],config:o,enter:g,exit:m,buffer:d,resume:y,data:r},Te=[];let Be=-1;for(;++Be<q.length;)if(q[Be][1].type==="listOrdered"||q[Be][1].type==="listUnordered")if(q[Be][0]==="enter")Te.push(Be);else{const Mt=Te.pop();Be=h(q,Mt,Be)}for(Be=-1;++Be<q.length;){const Mt=o[q[Be][0]];Ap.call(Mt,q[Be][1].type)&&Mt[q[Be][1].type].call(Object.assign({sliceSerialize:q[Be][2].sliceSerialize},de),q[Be][1])}if(de.tokenStack.length>0){const Mt=de.tokenStack[de.tokenStack.length-1];(Mt[1]||bg).call(de,void 0,Mt[0])}for(Z.position={start:la(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:la(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Be=-1;++Be<o.transforms.length;)Z=o.transforms[Be](Z)||Z;return Z}function h(q,Z,de){let Te=Z-1,Be=-1,Mt=!1,yn,pt,it,wt;for(;++Te<=de;){const _e=q[Te];switch(_e[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{_e[0]==="enter"?Be++:Be--,wt=void 0;break}case"lineEndingBlank":{_e[0]==="enter"&&(yn&&!wt&&!Be&&!it&&(it=Te),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0}if(!Be&&_e[0]==="enter"&&_e[1].type==="listItemPrefix"||Be===-1&&_e[0]==="exit"&&(_e[1].type==="listUnordered"||_e[1].type==="listOrdered")){if(yn){let Nn=Te;for(pt=void 0;Nn--;){const en=q[Nn];if(en[1].type==="lineEnding"||en[1].type==="lineEndingBlank"){if(en[0]==="exit")continue;pt&&(q[pt][1].type="lineEndingBlank",Mt=!0),en[1].type="lineEnding",pt=Nn}else if(!(en[1].type==="linePrefix"||en[1].type==="blockQuotePrefix"||en[1].type==="blockQuotePrefixWhitespace"||en[1].type==="blockQuoteMarker"||en[1].type==="listItemIndent"))break}it&&(!pt||it<pt)&&(yn._spread=!0),yn.end=Object.assign({},pt?q[pt][1].start:_e[1].end),q.splice(pt||Te,0,["exit",yn,_e[2]]),Te++,de++}if(_e[1].type==="listItemPrefix"){const Nn={type:"listItem",_spread:!1,start:Object.assign({},_e[1].start),end:void 0};yn=Nn,q.splice(Te,0,["enter",Nn,_e[2]]),Te++,de++,it=void 0,wt=!0}}}return q[Z][1]._spread=Mt,de}function c(q,Z){return de;function de(Te){g.call(this,q(Te),Te),Z&&Z.call(this,Te)}}function d(){this.stack.push({type:"fragment",children:[]})}function g(q,Z,de){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([Z,de||void 0]),q.position={start:la(Z.start),end:void 0}}function p(q){return Z;function Z(de){q&&q.call(this,de),m.call(this,de)}}function m(q,Z){const de=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==q.type&&(Z?Z.call(this,q,Te[0]):(Te[1]||bg).call(this,q,Te[0]));else throw new Error("Cannot close `"+q.type+"` ("+Io({start:q.start,end:q.end})+"): it’s not open");de.position.end=la(q.end)}function y(){return Xk(this.stack.pop())}function w(){this.data.expectingFirstListItemValue=!0}function T(q){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function v(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=q}function O(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=q}function H(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function R(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function B(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.value=q.replace(/(\r?\n|\r)$/g,"")}function X(q){const Z=this.resume(),de=this.stack[this.stack.length-1];de.label=Z,de.identifier=Ti(this.sliceSerialize(q)).toLowerCase()}function V(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.title=q}function oe(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.url=q}function le(q){const Z=this.stack[this.stack.length-1];if(!Z.depth){const de=this.sliceSerialize(q).length;Z.depth=de}}function L(){this.data.setextHeadingSlurpLineEnding=!0}function J(q){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function ce(){this.data.setextHeadingSlurpLineEnding=void 0}function fe(q){const de=this.stack[this.stack.length-1].children;let Te=de[de.length-1];(!Te||Te.type!=="text")&&(Te=gt(),Te.position={start:la(q.start),end:void 0},de.push(Te)),this.stack.push(Te)}function be(q){const Z=this.stack.pop();Z.value+=this.sliceSerialize(q),Z.position.end=la(q.end)}function ee(q){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=Z.children[Z.children.length-1];de.position.end=la(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&o.canContainEols.includes(Z.type)&&(fe.call(this,q),be.call(this,q))}function $(){this.data.atHardBreak=!0}function ke(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.value=q}function ne(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.value=q}function Q(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.value=q}function D(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=Z,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function F(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=Z,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ie(q){const Z=this.sliceSerialize(q),de=this.stack[this.stack.length-2];de.label=G0(Z),de.identifier=Ti(Z).toLowerCase()}function ve(){const q=this.stack[this.stack.length-1],Z=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const Te=q.children;de.children=Te}else de.alt=Z}function S(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.url=q}function E(){const q=this.resume(),Z=this.stack[this.stack.length-1];Z.title=q}function _(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function P(q){const Z=this.resume(),de=this.stack[this.stack.length-1];de.label=Z,de.identifier=Ti(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function he(q){this.data.characterReferenceType=q.type}function re(q){const Z=this.sliceSerialize(q),de=this.data.characterReferenceType;let Te;de?(Te=pp(Z,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=Mh(Z);const Be=this.stack[this.stack.length-1];Be.value+=Te}function Ee(q){const Z=this.stack.pop();Z.position.end=la(q.end)}function Qe(q){be.call(this,q);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(q)}function He(q){be.call(this,q);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(q)}function qt(){return{type:"blockquote",children:[]}}function gn(){return{type:"code",lang:null,meta:null,value:""}}function Ci(){return{type:"inlineCode",value:""}}function No(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function pn(){return{type:"emphasis",children:[]}}function Da(){return{type:"heading",depth:0,children:[]}}function Ra(){return{type:"break"}}function Wo(){return{type:"html",value:""}}function Lo(){return{type:"image",title:null,url:"",alt:null}}function Ba(){return{type:"link",title:null,url:"",children:[]}}function ja(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Ii(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function bs(){return{type:"paragraph",children:[]}}function vs(){return{type:"strong",children:[]}}function gt(){return{type:"text",value:""}}function ks(){return{type:"thematicBreak"}}}function la(a){return{line:a.line,column:a.column,offset:a.offset}}function Cp(a,o){let r=-1;for(;++r<o.length;){const s=o[r];Array.isArray(s)?Cp(a,s):J0(a,s)}}function J0(a,o){let r;for(r in o)if(Ap.call(o,r))switch(r){case"canContainEols":{const s=o[r];s&&a[r].push(...s);break}case"transforms":{const s=o[r];s&&a[r].push(...s);break}case"enter":case"exit":{const s=o[r];s&&Object.assign(a[r],s);break}}}function bg(a,o){throw a?new Error("Cannot close `"+a.type+"` ("+Io({start:a.start,end:a.end})+"): a different token (`"+o.type+"`, "+Io({start:o.start,end:o.end})+") is open"):new Error("Cannot close document, a token (`"+o.type+"`, "+Io({start:o.start,end:o.end})+") is still open")}function P0(a){const o=this;o.parser=r;function r(s){return K0(s,{...o.data("settings"),...a,extensions:o.data("micromarkExtensions")||[],mdastExtensions:o.data("fromMarkdownExtensions")||[]})}}function $0(a,o){const r={type:"element",tagName:"blockquote",properties:{},children:a.wrap(a.all(o),!0)};return a.patch(o,r),a.applyData(o,r)}function eS(a,o){const r={type:"element",tagName:"br",properties:{},children:[]};return a.patch(o,r),[a.applyData(o,r),{type:"text",value:`
`}]}function tS(a,o){const r=o.value?o.value+`
`:"",s={},h=o.lang?o.lang.split(/\s+/):[];h.length>0&&(s.className=["language-"+h[0]]);let c={type:"element",tagName:"code",properties:s,children:[{type:"text",value:r}]};return o.meta&&(c.data={meta:o.meta}),a.patch(o,c),c=a.applyData(o,c),c={type:"element",tagName:"pre",properties:{},children:[c]},a.patch(o,c),c}function nS(a,o){const r={type:"element",tagName:"del",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function aS(a,o){const r={type:"element",tagName:"em",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function iS(a,o){const r=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",s=String(o.identifier).toUpperCase(),h=Ai(s.toLowerCase()),c=a.footnoteOrder.indexOf(s);let d,g=a.footnoteCounts.get(s);g===void 0?(g=0,a.footnoteOrder.push(s),d=a.footnoteOrder.length):d=c+1,g+=1,a.footnoteCounts.set(s,g);const p={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+h,id:r+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(d)}]};a.patch(o,p);const m={type:"element",tagName:"sup",properties:{},children:[p]};return a.patch(o,m),a.applyData(o,m)}function oS(a,o){const r={type:"element",tagName:"h"+o.depth,properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function rS(a,o){if(a.options.allowDangerousHtml){const r={type:"raw",value:o.value};return a.patch(o,r),a.applyData(o,r)}}function Ip(a,o){const r=o.referenceType;let s="]";if(r==="collapsed"?s+="[]":r==="full"&&(s+="["+(o.label||o.identifier)+"]"),o.type==="imageReference")return[{type:"text",value:"!["+o.alt+s}];const h=a.all(o),c=h[0];c&&c.type==="text"?c.value="["+c.value:h.unshift({type:"text",value:"["});const d=h[h.length-1];return d&&d.type==="text"?d.value+=s:h.push({type:"text",value:s}),h}function sS(a,o){const r=String(o.identifier).toUpperCase(),s=a.definitionById.get(r);if(!s)return Ip(a,o);const h={src:Ai(s.url||""),alt:o.alt};s.title!==null&&s.title!==void 0&&(h.title=s.title);const c={type:"element",tagName:"img",properties:h,children:[]};return a.patch(o,c),a.applyData(o,c)}function lS(a,o){const r={src:Ai(o.url)};o.alt!==null&&o.alt!==void 0&&(r.alt=o.alt),o.title!==null&&o.title!==void 0&&(r.title=o.title);const s={type:"element",tagName:"img",properties:r,children:[]};return a.patch(o,s),a.applyData(o,s)}function uS(a,o){const r={type:"text",value:o.value.replace(/\r?\n|\r/g," ")};a.patch(o,r);const s={type:"element",tagName:"code",properties:{},children:[r]};return a.patch(o,s),a.applyData(o,s)}function hS(a,o){const r=String(o.identifier).toUpperCase(),s=a.definitionById.get(r);if(!s)return Ip(a,o);const h={href:Ai(s.url||"")};s.title!==null&&s.title!==void 0&&(h.title=s.title);const c={type:"element",tagName:"a",properties:h,children:a.all(o)};return a.patch(o,c),a.applyData(o,c)}function cS(a,o){const r={href:Ai(o.url)};o.title!==null&&o.title!==void 0&&(r.title=o.title);const s={type:"element",tagName:"a",properties:r,children:a.all(o)};return a.patch(o,s),a.applyData(o,s)}function dS(a,o,r){const s=a.all(o),h=r?fS(r):Mp(o),c={},d=[];if(typeof o.checked=="boolean"){const y=s[0];let w;y&&y.type==="element"&&y.tagName==="p"?w=y:(w={type:"element",tagName:"p",properties:{},children:[]},s.unshift(w)),w.children.length>0&&w.children.unshift({type:"text",value:" "}),w.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:o.checked,disabled:!0},children:[]}),c.className=["task-list-item"]}let g=-1;for(;++g<s.length;){const y=s[g];(h||g!==0||y.type!=="element"||y.tagName!=="p")&&d.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!h?d.push(...y.children):d.push(y)}const p=s[s.length-1];p&&(h||p.type!=="element"||p.tagName!=="p")&&d.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:c,children:d};return a.patch(o,m),a.applyData(o,m)}function fS(a){let o=!1;if(a.type==="list"){o=a.spread||!1;const r=a.children;let s=-1;for(;!o&&++s<r.length;)o=Mp(r[s])}return o}function Mp(a){const o=a.spread;return o??a.children.length>1}function mS(a,o){const r={},s=a.all(o);let h=-1;for(typeof o.start=="number"&&o.start!==1&&(r.start=o.start);++h<s.length;){const d=s[h];if(d.type==="element"&&d.tagName==="li"&&d.properties&&Array.isArray(d.properties.className)&&d.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const c={type:"element",tagName:o.ordered?"ol":"ul",properties:r,children:a.wrap(s,!0)};return a.patch(o,c),a.applyData(o,c)}function gS(a,o){const r={type:"element",tagName:"p",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function pS(a,o){const r={type:"root",children:a.wrap(a.all(o))};return a.patch(o,r),a.applyData(o,r)}function yS(a,o){const r={type:"element",tagName:"strong",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}function wS(a,o){const r=a.all(o),s=r.shift(),h=[];if(s){const d={type:"element",tagName:"thead",properties:{},children:a.wrap([s],!0)};a.patch(o.children[0],d),h.push(d)}if(r.length>0){const d={type:"element",tagName:"tbody",properties:{},children:a.wrap(r,!0)},g=Eh(o.children[1]),p=up(o.children[o.children.length-1]);g&&p&&(d.position={start:g,end:p}),h.push(d)}const c={type:"element",tagName:"table",properties:{},children:a.wrap(h,!0)};return a.patch(o,c),a.applyData(o,c)}function bS(a,o,r){const s=r?r.children:void 0,c=(s?s.indexOf(o):1)===0?"th":"td",d=r&&r.type==="table"?r.align:void 0,g=d?d.length:o.children.length;let p=-1;const m=[];for(;++p<g;){const w=o.children[p],T={},v=d?d[p]:void 0;v&&(T.align=v);let O={type:"element",tagName:c,properties:T,children:[]};w&&(O.children=a.all(w),a.patch(w,O),O=a.applyData(w,O)),m.push(O)}const y={type:"element",tagName:"tr",properties:{},children:a.wrap(m,!0)};return a.patch(o,y),a.applyData(o,y)}function vS(a,o){const r={type:"element",tagName:"td",properties:{},children:a.all(o)};return a.patch(o,r),a.applyData(o,r)}const vg=9,kg=32;function kS(a){const o=String(a),r=/\r?\n|\r/g;let s=r.exec(o),h=0;const c=[];for(;s;)c.push(Tg(o.slice(h,s.index),h>0,!0),s[0]),h=s.index+s[0].length,s=r.exec(o);return c.push(Tg(o.slice(h),h>0,!1)),c.join("")}function Tg(a,o,r){let s=0,h=a.length;if(o){let c=a.codePointAt(s);for(;c===vg||c===kg;)s++,c=a.codePointAt(s)}if(r){let c=a.codePointAt(h-1);for(;c===vg||c===kg;)h--,c=a.codePointAt(h-1)}return h>s?a.slice(s,h):""}function TS(a,o){const r={type:"text",value:kS(String(o.value))};return a.patch(o,r),a.applyData(o,r)}function SS(a,o){const r={type:"element",tagName:"hr",properties:{},children:[]};return a.patch(o,r),a.applyData(o,r)}const xS={blockquote:$0,break:eS,code:tS,delete:nS,emphasis:aS,footnoteReference:iS,heading:oS,html:rS,imageReference:sS,image:lS,inlineCode:uS,linkReference:hS,link:cS,listItem:dS,list:mS,paragraph:gS,root:pS,strong:yS,table:wS,tableCell:vS,tableRow:bS,text:TS,thematicBreak:SS,toml:as,yaml:as,definition:as,footnoteDefinition:as};function as(){}const zp=-1,ys=0,zo=1,cs=2,Rh=3,Bh=4,jh=5,Oh=6,Dp=7,Rp=8,Sg=typeof self=="object"?self:globalThis,ES=(a,o)=>{const r=(h,c)=>(a.set(c,h),h),s=h=>{if(a.has(h))return a.get(h);const[c,d]=o[h];switch(c){case ys:case zp:return r(d,h);case zo:{const g=r([],h);for(const p of d)g.push(s(p));return g}case cs:{const g=r({},h);for(const[p,m]of d)g[s(p)]=s(m);return g}case Rh:return r(new Date(d),h);case Bh:{const{source:g,flags:p}=d;return r(new RegExp(g,p),h)}case jh:{const g=r(new Map,h);for(const[p,m]of d)g.set(s(p),s(m));return g}case Oh:{const g=r(new Set,h);for(const p of d)g.add(s(p));return g}case Dp:{const{name:g,message:p}=d;return r(new Sg[g](p),h)}case Rp:return r(BigInt(d),h);case"BigInt":return r(Object(BigInt(d)),h);case"ArrayBuffer":return r(new Uint8Array(d).buffer,d);case"DataView":{const{buffer:g}=new Uint8Array(d);return r(new DataView(g),d)}}return r(new Sg[c](d),h)};return s},xg=a=>ES(new Map,a)(0),vi="",{toString:AS}={},{keys:CS}=Object,Co=a=>{const o=typeof a;if(o!=="object"||!a)return[ys,o];const r=AS.call(a).slice(8,-1);switch(r){case"Array":return[zo,vi];case"Object":return[cs,vi];case"Date":return[Rh,vi];case"RegExp":return[Bh,vi];case"Map":return[jh,vi];case"Set":return[Oh,vi];case"DataView":return[zo,r]}return r.includes("Array")?[zo,r]:r.includes("Error")?[Dp,r]:[cs,r]},is=([a,o])=>a===ys&&(o==="function"||o==="symbol"),IS=(a,o,r,s)=>{const h=(d,g)=>{const p=s.push(d)-1;return r.set(g,p),p},c=d=>{if(r.has(d))return r.get(d);let[g,p]=Co(d);switch(g){case ys:{let y=d;switch(p){case"bigint":g=Rp,y=d.toString();break;case"function":case"symbol":if(a)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return h([zp],d)}return h([g,y],d)}case zo:{if(p){let T=d;return p==="DataView"?T=new Uint8Array(d.buffer):p==="ArrayBuffer"&&(T=new Uint8Array(d)),h([p,[...T]],d)}const y=[],w=h([g,y],d);for(const T of d)y.push(c(T));return w}case cs:{if(p)switch(p){case"BigInt":return h([p,d.toString()],d);case"Boolean":case"Number":case"String":return h([p,d.valueOf()],d)}if(o&&"toJSON"in d)return c(d.toJSON());const y=[],w=h([g,y],d);for(const T of CS(d))(a||!is(Co(d[T])))&&y.push([c(T),c(d[T])]);return w}case Rh:return h([g,d.toISOString()],d);case Bh:{const{source:y,flags:w}=d;return h([g,{source:y,flags:w}],d)}case jh:{const y=[],w=h([g,y],d);for(const[T,v]of d)(a||!(is(Co(T))||is(Co(v))))&&y.push([c(T),c(v)]);return w}case Oh:{const y=[],w=h([g,y],d);for(const T of d)(a||!is(Co(T)))&&y.push(c(T));return w}}const{message:m}=d;return h([g,{name:p,message:m}],d)};return c},Eg=(a,{json:o,lossy:r}={})=>{const s=[];return IS(!(o||r),!!o,new Map,s)(a),s},ds=typeof structuredClone=="function"?(a,o)=>o&&("json"in o||"lossy"in o)?xg(Eg(a,o)):structuredClone(a):(a,o)=>xg(Eg(a,o));function MS(a,o){const r=[{type:"text",value:"↩"}];return o>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(o)}]}),r}function zS(a,o){return"Back to reference "+(a+1)+(o>1?"-"+o:"")}function DS(a){const o=typeof a.options.clobberPrefix=="string"?a.options.clobberPrefix:"user-content-",r=a.options.footnoteBackContent||MS,s=a.options.footnoteBackLabel||zS,h=a.options.footnoteLabel||"Footnotes",c=a.options.footnoteLabelTagName||"h2",d=a.options.footnoteLabelProperties||{className:["sr-only"]},g=[];let p=-1;for(;++p<a.footnoteOrder.length;){const m=a.footnoteById.get(a.footnoteOrder[p]);if(!m)continue;const y=a.all(m),w=String(m.identifier).toUpperCase(),T=Ai(w.toLowerCase());let v=0;const O=[],H=a.footnoteCounts.get(w);for(;H!==void 0&&++v<=H;){O.length>0&&O.push({type:"text",value:" "});let X=typeof r=="string"?r:r(p,v);typeof X=="string"&&(X={type:"text",value:X}),O.push({type:"element",tagName:"a",properties:{href:"#"+o+"fnref-"+T+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof s=="string"?s:s(p,v),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}const R=y[y.length-1];if(R&&R.type==="element"&&R.tagName==="p"){const X=R.children[R.children.length-1];X&&X.type==="text"?X.value+=" ":R.children.push({type:"text",value:" "}),R.children.push(...O)}else y.push(...O);const B={type:"element",tagName:"li",properties:{id:o+"fn-"+T},children:a.wrap(y,!0)};a.patch(m,B),g.push(B)}if(g.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:c,properties:{...ds(d),id:"footnote-label"},children:[{type:"text",value:h}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:a.wrap(g,!0)},{type:"text",value:`
`}]}}const Bp=(function(a){if(a==null)return OS;if(typeof a=="function")return ws(a);if(typeof a=="object")return Array.isArray(a)?RS(a):BS(a);if(typeof a=="string")return jS(a);throw new Error("Expected function, string, or object as test")});function RS(a){const o=[];let r=-1;for(;++r<a.length;)o[r]=Bp(a[r]);return ws(s);function s(...h){let c=-1;for(;++c<o.length;)if(o[c].apply(this,h))return!0;return!1}}function BS(a){const o=a;return ws(r);function r(s){const h=s;let c;for(c in a)if(h[c]!==o[c])return!1;return!0}}function jS(a){return ws(o);function o(r){return r&&r.type===a}}function ws(a){return o;function o(r,s,h){return!!(HS(r)&&a.call(this,r,typeof s=="number"?s:void 0,h||void 0))}}function OS(){return!0}function HS(a){return a!==null&&typeof a=="object"&&"type"in a}const jp=[],NS=!0,Ag=!1,WS="skip";function LS(a,o,r,s){let h;typeof o=="function"&&typeof r!="function"?(s=r,r=o):h=o;const c=Bp(h),d=s?-1:1;g(a,void 0,[])();function g(p,m,y){const w=p&&typeof p=="object"?p:{};if(typeof w.type=="string"){const v=typeof w.tagName=="string"?w.tagName:typeof w.name=="string"?w.name:void 0;Object.defineProperty(T,"name",{value:"node ("+(p.type+(v?"<"+v+">":""))+")"})}return T;function T(){let v=jp,O,H,R;if((!o||c(p,m,y[y.length-1]||void 0))&&(v=_S(r(p,y)),v[0]===Ag))return v;if("children"in p&&p.children){const B=p;if(B.children&&v[0]!==WS)for(H=(s?B.children.length:-1)+d,R=y.concat(B);H>-1&&H<B.children.length;){const X=B.children[H];if(O=g(X,H,R)(),O[0]===Ag)return O;H=typeof O[1]=="number"?O[1]:H+d}}return v}}}function _S(a){return Array.isArray(a)?a:typeof a=="number"?[NS,a]:a==null?jp:[a]}function Op(a,o,r,s){let h,c,d;typeof o=="function"&&typeof r!="function"?(c=void 0,d=o,h=r):(c=o,d=r,h=s),LS(a,c,g,h);function g(p,m){const y=m[m.length-1],w=y?y.children.indexOf(p):void 0;return d(p,w,y)}}const ch={}.hasOwnProperty,qS={};function US(a,o){const r=o||qS,s=new Map,h=new Map,c=new Map,d={...xS,...r.handlers},g={all:m,applyData:VS,definitionById:s,footnoteById:h,footnoteCounts:c,footnoteOrder:[],handlers:d,one:p,options:r,patch:YS,wrap:QS};return Op(a,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const w=y.type==="definition"?s:h,T=String(y.identifier).toUpperCase();w.has(T)||w.set(T,y)}}),g;function p(y,w){const T=y.type,v=g.handlers[T];if(ch.call(g.handlers,T)&&v)return v(g,y,w);if(g.options.passThrough&&g.options.passThrough.includes(T)){if("children"in y){const{children:H,...R}=y,B=ds(R);return B.children=g.all(y),B}return ds(y)}return(g.options.unknownHandler||FS)(g,y,w)}function m(y){const w=[];if("children"in y){const T=y.children;let v=-1;for(;++v<T.length;){const O=g.one(T[v],y);if(O){if(v&&T[v-1].type==="break"&&(!Array.isArray(O)&&O.type==="text"&&(O.value=Cg(O.value)),!Array.isArray(O)&&O.type==="element")){const H=O.children[0];H&&H.type==="text"&&(H.value=Cg(H.value))}Array.isArray(O)?w.push(...O):w.push(O)}}}return w}}function YS(a,o){a.position&&(o.position=Ak(a))}function VS(a,o){let r=o;if(a&&a.data){const s=a.data.hName,h=a.data.hChildren,c=a.data.hProperties;if(typeof s=="string")if(r.type==="element")r.tagName=s;else{const d="children"in r?r.children:[r];r={type:"element",tagName:s,properties:{},children:d}}r.type==="element"&&c&&Object.assign(r.properties,ds(c)),"children"in r&&r.children&&h!==null&&h!==void 0&&(r.children=h)}return r}function FS(a,o){const r=o.data||{},s="value"in o&&!(ch.call(r,"hProperties")||ch.call(r,"hChildren"))?{type:"text",value:o.value}:{type:"element",tagName:"div",properties:{},children:a.all(o)};return a.patch(o,s),a.applyData(o,s)}function QS(a,o){const r=[];let s=-1;for(o&&r.push({type:"text",value:`
`});++s<a.length;)s&&r.push({type:"text",value:`
`}),r.push(a[s]);return o&&a.length>0&&r.push({type:"text",value:`
`}),r}function Cg(a){let o=0,r=a.charCodeAt(o);for(;r===9||r===32;)o++,r=a.charCodeAt(o);return a.slice(o)}function Ig(a,o){const r=US(a,o),s=r.one(a,void 0),h=DS(r),c=Array.isArray(s)?{type:"root",children:s}:s||{type:"root",children:[]};return h&&c.children.push({type:"text",value:`
`},h),c}function GS(a,o){return a&&"run"in a?async function(r,s){const h=Ig(r,{file:s,...o});await a.run(h,s)}:function(r,s){return Ig(r,{file:s,...a||o})}}function Mg(a){if(a)throw a}var Xu,zg;function XS(){if(zg)return Xu;zg=1;var a=Object.prototype.hasOwnProperty,o=Object.prototype.toString,r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,h=function(m){return typeof Array.isArray=="function"?Array.isArray(m):o.call(m)==="[object Array]"},c=function(m){if(!m||o.call(m)!=="[object Object]")return!1;var y=a.call(m,"constructor"),w=m.constructor&&m.constructor.prototype&&a.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!w)return!1;var T;for(T in m);return typeof T>"u"||a.call(m,T)},d=function(m,y){r&&y.name==="__proto__"?r(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},g=function(m,y){if(y==="__proto__")if(a.call(m,y)){if(s)return s(m,y).value}else return;return m[y]};return Xu=function p(){var m,y,w,T,v,O,H=arguments[0],R=1,B=arguments.length,X=!1;for(typeof H=="boolean"&&(X=H,H=arguments[1]||{},R=2),(H==null||typeof H!="object"&&typeof H!="function")&&(H={});R<B;++R)if(m=arguments[R],m!=null)for(y in m)w=g(H,y),T=g(m,y),H!==T&&(X&&T&&(c(T)||(v=h(T)))?(v?(v=!1,O=w&&h(w)?w:[]):O=w&&c(w)?w:{},d(H,{name:y,newValue:p(X,O,T)})):typeof T<"u"&&d(H,{name:y,newValue:T}));return H},Xu}var KS=XS();const Ku=Hg(KS);function dh(a){if(typeof a!="object"||a===null)return!1;const o=Object.getPrototypeOf(a);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in a)&&!(Symbol.iterator in a)}function ZS(){const a=[],o={run:r,use:s};return o;function r(...h){let c=-1;const d=h.pop();if(typeof d!="function")throw new TypeError("Expected function as last argument, not "+d);g(null,...h);function g(p,...m){const y=a[++c];let w=-1;if(p){d(p);return}for(;++w<h.length;)(m[w]===null||m[w]===void 0)&&(m[w]=h[w]);h=m,y?JS(y,g)(...m):d(null,...m)}}function s(h){if(typeof h!="function")throw new TypeError("Expected `middelware` to be a function, not "+h);return a.push(h),o}}function JS(a,o){let r;return s;function s(...d){const g=a.length>d.length;let p;g&&d.push(h);try{p=a.apply(this,d)}catch(m){const y=m;if(g&&r)throw y;return h(y)}g||(p&&p.then&&typeof p.then=="function"?p.then(c,h):p instanceof Error?h(p):c(p))}function h(d,...g){r||(r=!0,o(d,...g))}function c(d){h(null,d)}}const hn={basename:PS,dirname:$S,extname:ex,join:tx,sep:"/"};function PS(a,o){if(o!==void 0&&typeof o!="string")throw new TypeError('"ext" argument must be a string');Ho(a);let r=0,s=-1,h=a.length,c;if(o===void 0||o.length===0||o.length>a.length){for(;h--;)if(a.codePointAt(h)===47){if(c){r=h+1;break}}else s<0&&(c=!0,s=h+1);return s<0?"":a.slice(r,s)}if(o===a)return"";let d=-1,g=o.length-1;for(;h--;)if(a.codePointAt(h)===47){if(c){r=h+1;break}}else d<0&&(c=!0,d=h+1),g>-1&&(a.codePointAt(h)===o.codePointAt(g--)?g<0&&(s=h):(g=-1,s=d));return r===s?s=d:s<0&&(s=a.length),a.slice(r,s)}function $S(a){if(Ho(a),a.length===0)return".";let o=-1,r=a.length,s;for(;--r;)if(a.codePointAt(r)===47){if(s){o=r;break}}else s||(s=!0);return o<0?a.codePointAt(0)===47?"/":".":o===1&&a.codePointAt(0)===47?"//":a.slice(0,o)}function ex(a){Ho(a);let o=a.length,r=-1,s=0,h=-1,c=0,d;for(;o--;){const g=a.codePointAt(o);if(g===47){if(d){s=o+1;break}continue}r<0&&(d=!0,r=o+1),g===46?h<0?h=o:c!==1&&(c=1):h>-1&&(c=-1)}return h<0||r<0||c===0||c===1&&h===r-1&&h===s+1?"":a.slice(h,r)}function tx(...a){let o=-1,r;for(;++o<a.length;)Ho(a[o]),a[o]&&(r=r===void 0?a[o]:r+"/"+a[o]);return r===void 0?".":nx(r)}function nx(a){Ho(a);const o=a.codePointAt(0)===47;let r=ax(a,!o);return r.length===0&&!o&&(r="."),r.length>0&&a.codePointAt(a.length-1)===47&&(r+="/"),o?"/"+r:r}function ax(a,o){let r="",s=0,h=-1,c=0,d=-1,g,p;for(;++d<=a.length;){if(d<a.length)g=a.codePointAt(d);else{if(g===47)break;g=47}if(g===47){if(!(h===d-1||c===1))if(h!==d-1&&c===2){if(r.length<2||s!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(p=r.lastIndexOf("/"),p!==r.length-1){p<0?(r="",s=0):(r=r.slice(0,p),s=r.length-1-r.lastIndexOf("/")),h=d,c=0;continue}}else if(r.length>0){r="",s=0,h=d,c=0;continue}}o&&(r=r.length>0?r+"/..":"..",s=2)}else r.length>0?r+="/"+a.slice(h+1,d):r=a.slice(h+1,d),s=d-h-1;h=d,c=0}else g===46&&c>-1?c++:c=-1}return r}function Ho(a){if(typeof a!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(a))}const ix={cwd:ox};function ox(){return"/"}function fh(a){return!!(a!==null&&typeof a=="object"&&"href"in a&&a.href&&"protocol"in a&&a.protocol&&a.auth===void 0)}function rx(a){if(typeof a=="string")a=new URL(a);else if(!fh(a)){const o=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+a+"`");throw o.code="ERR_INVALID_ARG_TYPE",o}if(a.protocol!=="file:"){const o=new TypeError("The URL must be of scheme file");throw o.code="ERR_INVALID_URL_SCHEME",o}return sx(a)}function sx(a){if(a.hostname!==""){const s=new TypeError('File URL host must be "localhost" or empty on darwin');throw s.code="ERR_INVALID_FILE_URL_HOST",s}const o=a.pathname;let r=-1;for(;++r<o.length;)if(o.codePointAt(r)===37&&o.codePointAt(r+1)===50){const s=o.codePointAt(r+2);if(s===70||s===102){const h=new TypeError("File URL path must not include encoded / characters");throw h.code="ERR_INVALID_FILE_URL_PATH",h}}return decodeURIComponent(o)}const Zu=["history","path","basename","stem","extname","dirname"];class Hp{constructor(o){let r;o?fh(o)?r={path:o}:typeof o=="string"||lx(o)?r={value:o}:r=o:r={},this.cwd="cwd"in r?"":ix.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let s=-1;for(;++s<Zu.length;){const c=Zu[s];c in r&&r[c]!==void 0&&r[c]!==null&&(this[c]=c==="history"?[...r[c]]:r[c])}let h;for(h in r)Zu.includes(h)||(this[h]=r[h])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(o){Pu(o,"basename"),Ju(o,"basename"),this.path=hn.join(this.dirname||"",o)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(o){Dg(this.basename,"dirname"),this.path=hn.join(o||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(o){if(Ju(o,"extname"),Dg(this.dirname,"extname"),o){if(o.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(o.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(o||""))}get path(){return this.history[this.history.length-1]}set path(o){fh(o)&&(o=rx(o)),Pu(o,"path"),this.path!==o&&this.history.push(o)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(o){Pu(o,"stem"),Ju(o,"stem"),this.path=hn.join(this.dirname||"",o+(this.extname||""))}fail(o,r,s){const h=this.message(o,r,s);throw h.fatal=!0,h}info(o,r,s){const h=this.message(o,r,s);return h.fatal=void 0,h}message(o,r,s){const h=new mt(o,r,s);return this.path&&(h.name=this.path+":"+h.name,h.file=this.path),h.fatal=!1,this.messages.push(h),h}toString(o){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(o||void 0).decode(this.value)}}function Ju(a,o){if(a&&a.includes(hn.sep))throw new Error("`"+o+"` cannot be a path: did not expect `"+hn.sep+"`")}function Pu(a,o){if(!a)throw new Error("`"+o+"` cannot be empty")}function Dg(a,o){if(!a)throw new Error("Setting `"+o+"` requires `path` to be set too")}function lx(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const ux=(function(a){const s=this.constructor.prototype,h=s[a],c=function(){return h.apply(c,arguments)};return Object.setPrototypeOf(c,s),c}),hx={}.hasOwnProperty;class Hh extends ux{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ZS()}copy(){const o=new Hh;let r=-1;for(;++r<this.attachers.length;){const s=this.attachers[r];o.use(...s)}return o.data(Ku(!0,{},this.namespace)),o}data(o,r){return typeof o=="string"?arguments.length===2?(th("data",this.frozen),this.namespace[o]=r,this):hx.call(this.namespace,o)&&this.namespace[o]||void 0:o?(th("data",this.frozen),this.namespace=o,this):this.namespace}freeze(){if(this.frozen)return this;const o=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...s]=this.attachers[this.freezeIndex];if(s[0]===!1)continue;s[0]===!0&&(s[0]=void 0);const h=r.call(o,...s);typeof h=="function"&&this.transformers.use(h)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(o){this.freeze();const r=os(o),s=this.parser||this.Parser;return $u("parse",s),s(String(r),r)}process(o,r){const s=this;return this.freeze(),$u("process",this.parser||this.Parser),eh("process",this.compiler||this.Compiler),r?h(void 0,r):new Promise(h);function h(c,d){const g=os(o),p=s.parse(g);s.run(p,g,function(y,w,T){if(y||!w||!T)return m(y);const v=w,O=s.stringify(v,T);fx(O)?T.value=O:T.result=O,m(y,T)});function m(y,w){y||!w?d(y):c?c(w):r(void 0,w)}}}processSync(o){let r=!1,s;return this.freeze(),$u("processSync",this.parser||this.Parser),eh("processSync",this.compiler||this.Compiler),this.process(o,h),Bg("processSync","process",r),s;function h(c,d){r=!0,Mg(c),s=d}}run(o,r,s){Rg(o),this.freeze();const h=this.transformers;return!s&&typeof r=="function"&&(s=r,r=void 0),s?c(void 0,s):new Promise(c);function c(d,g){const p=os(r);h.run(o,p,m);function m(y,w,T){const v=w||o;y?g(y):d?d(v):s(void 0,v,T)}}}runSync(o,r){let s=!1,h;return this.run(o,r,c),Bg("runSync","run",s),h;function c(d,g){Mg(d),h=g,s=!0}}stringify(o,r){this.freeze();const s=os(r),h=this.compiler||this.Compiler;return eh("stringify",h),Rg(o),h(o,s)}use(o,...r){const s=this.attachers,h=this.namespace;if(th("use",this.frozen),o!=null)if(typeof o=="function")p(o,r);else if(typeof o=="object")Array.isArray(o)?g(o):d(o);else throw new TypeError("Expected usable value, not `"+o+"`");return this;function c(m){if(typeof m=="function")p(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...w]=m;p(y,w)}else d(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function d(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");g(m.plugins),m.settings&&(h.settings=Ku(!0,h.settings,m.settings))}function g(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const w=m[y];c(w)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function p(m,y){let w=-1,T=-1;for(;++w<s.length;)if(s[w][0]===m){T=w;break}if(T===-1)s.push([m,...y]);else if(y.length>0){let[v,...O]=y;const H=s[T][1];dh(H)&&dh(v)&&(v=Ku(!0,H,v)),s[T]=[m,v,...O]}}}}const cx=new Hh().freeze();function $u(a,o){if(typeof o!="function")throw new TypeError("Cannot `"+a+"` without `parser`")}function eh(a,o){if(typeof o!="function")throw new TypeError("Cannot `"+a+"` without `compiler`")}function th(a,o){if(o)throw new Error("Cannot call `"+a+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rg(a){if(!dh(a)||typeof a.type!="string")throw new TypeError("Expected node, got `"+a+"`")}function Bg(a,o,r){if(!r)throw new Error("`"+a+"` finished async. Use `"+o+"` instead")}function os(a){return dx(a)?a:new Hp(a)}function dx(a){return!!(a&&typeof a=="object"&&"message"in a&&"messages"in a)}function fx(a){return typeof a=="string"||mx(a)}function mx(a){return!!(a&&typeof a=="object"&&"byteLength"in a&&"byteOffset"in a)}const gx="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",jg=[],Og={allowDangerousHtml:!0},px=/^(https?|ircs?|mailto|xmpp)$/i,yx=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wx(a){const o=bx(a),r=vx(a);return kx(o.runSync(o.parse(r),r),a)}function bx(a){const o=a.rehypePlugins||jg,r=a.remarkPlugins||jg,s=a.remarkRehypeOptions?{...a.remarkRehypeOptions,...Og}:Og;return cx().use(P0).use(r).use(GS,s).use(o)}function vx(a){const o=a.children||"",r=new Hp;return typeof o=="string"&&(r.value=o),r}function kx(a,o){const r=o.allowedElements,s=o.allowElement,h=o.components,c=o.disallowedElements,d=o.skipHtml,g=o.unwrapDisallowed,p=o.urlTransform||Tx;for(const y of yx)Object.hasOwn(o,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+gx+y.id,void 0);return Op(a,m),Dk(a,{Fragment:K.Fragment,components:h,ignoreInvalidStyle:!0,jsx:K.jsx,jsxs:K.jsxs,passKeys:!0,passNode:!0});function m(y,w,T){if(y.type==="raw"&&T&&typeof w=="number")return d?T.children.splice(w,1):T.children[w]={type:"text",value:y.value},w;if(y.type==="element"){let v;for(v in Fu)if(Object.hasOwn(Fu,v)&&Object.hasOwn(y.properties,v)){const O=y.properties[v],H=Fu[v];(H===null||H.includes(y.tagName))&&(y.properties[v]=p(String(O||""),v,y))}}if(y.type==="element"){let v=r?!r.includes(y.tagName):c?c.includes(y.tagName):!1;if(!v&&s&&typeof w=="number"&&(v=!s(y,w,T)),v&&T&&typeof w=="number")return g&&y.children?T.children.splice(w,1,...y.children):T.children.splice(w,1),w}}}function Tx(a){const o=a.indexOf(":"),r=a.indexOf("?"),s=a.indexOf("#"),h=a.indexOf("/");return o===-1||h!==-1&&o>h||r!==-1&&o>r||s!==-1&&o>s||px.test(a.slice(0,o))?a:""}function Sx(){const{seriesId:a,day:o}=Gg(),r=Th(a||""),s=Number(o),h=r?.lessons.find(y=>y.day===s),[c,d]=N.useState("parable");if(N.useEffect(()=>{window.scrollTo(0,0)},[a,o]),!r)return K.jsx(Jg,{to:"/",replace:!0});if(!h)return K.jsxs("div",{className:"container",children:[K.jsx("p",{children:"Lesson not found."}),K.jsxs(Wt,{to:`/${r.id}`,className:"nav-link",children:["← Back to ",r.name]})]});const g=r.lessons.find(y=>y.day===s-1),p=r.lessons.find(y=>y.day===s+1),m=c==="parable"?h.parable:h.standard;return K.jsxs("div",{className:"container",children:[K.jsxs("nav",{className:"breadcrumb",children:[K.jsx(Wt,{to:"/",className:"nav-link",children:"Home"}),K.jsx("span",{className:"breadcrumb-sep",children:"›"}),K.jsx(Wt,{to:`/${r.id}`,className:"nav-link",children:r.name}),K.jsx("span",{className:"breadcrumb-sep",children:"›"}),K.jsxs("span",{children:["Day ",h.day]})]}),h.image&&K.jsx("div",{className:"lesson-hero",children:K.jsx("img",{src:`/parable/${h.image}`,alt:h.title})}),K.jsxs("header",{className:"lesson-header",children:[K.jsxs("span",{className:"lesson-day-badge",children:["Day ",h.day]}),K.jsx("h1",{children:h.title})]}),K.jsxs("div",{className:"toggle-container",children:[K.jsx("button",{className:`toggle-btn ${c==="parable"?"active":""}`,onClick:()=>d("parable"),children:"🏰 Parable"}),K.jsx("button",{className:`toggle-btn ${c==="standard"?"active":""}`,onClick:()=>d("standard"),children:"📖 Standard"})]}),K.jsx("article",{className:`lesson-content ${c}`,children:K.jsx(wx,{children:m})},c),K.jsxs("nav",{className:"bottom-nav",children:[g?K.jsxs(Wt,{to:`/${r.id}/lesson/${g.day}`,className:"nav-link",children:["← Day ",g.day]}):K.jsx("span",{}),p?K.jsxs(Wt,{to:`/${r.id}/lesson/${p.day}`,className:"nav-link",children:["Day ",p.day," →"]}):K.jsx("span",{})]}),(()=>{const y=Ia.findIndex(H=>H.id===r.id),w=y>0?Ia[y-1]:null,T=y<Ia.length-1?Ia[y+1]:null,v=w?Jm(w.id):0,O=T?Jm(T.id):0;return K.jsxs("nav",{className:"series-nav",children:[w&&v>0?K.jsxs(Wt,{to:`/${w.id}/lesson/${v}`,className:"series-nav-link prev",children:[K.jsx("span",{className:"series-nav-label",children:"Previous Series"}),K.jsx("span",{className:"series-nav-name",children:w.name})]}):K.jsx("span",{}),T&&O>0?K.jsxs(Wt,{to:`/${T.id}/lesson/${O}`,className:"series-nav-link next",children:[K.jsx("span",{className:"series-nav-label",children:"Next Series"}),K.jsx("span",{className:"series-nav-name",children:T.name})]}):K.jsx("span",{})]})})()]})}function xx(){const[a,o]=N.useState(!1);return N.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: light)"),s=()=>document.documentElement.setAttribute("data-theme",r.matches?"light":"dark");return s(),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[]),K.jsx(Cv,{children:K.jsxs("div",{className:"app-layout",children:[K.jsx(ek,{open:a,onClose:()=>o(!1)}),K.jsxs("div",{className:"main-content",children:[K.jsx("button",{className:"hamburger",onClick:()=>o(!0),"aria-label":"Open menu",children:"☰"}),K.jsxs(av,{children:[K.jsx(rs,{path:"/",element:K.jsx(tk,{})}),K.jsx(rs,{path:"/:seriesId",element:K.jsx(nk,{})}),K.jsx(rs,{path:"/:seriesId/lesson/:day",element:K.jsx(Sx,{})})]})]})]})})}rb.createRoot(document.getElementById("root")).render(K.jsx(N.StrictMode,{children:K.jsx(xx,{})}));
