!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function e(e,a,s,c){return new(s=s||Promise)(function(n,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function o(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,o)}i((c=c.apply(e,a||[])).next())})}function n(n,r){var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=p(e[n],t[n]));return e}var o=(t.prototype.wrapCallback=function(n){var r=this;return function(e,t){e?r.reject(e):r.resolve(t),"function"==typeof n&&(r.promise.catch(function(){}),1===n.length?n(e):n(e,t))}},t);function t(){var n=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}var a,s="FirebaseError",c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(l,a=Error),l);function l(e,t,n){t=a.call(this,t)||this;return t.code=e,t.customData=n,t.name=s,Object.setPrototypeOf(t,l.prototype),Error.captureStackTrace&&Error.captureStackTrace(t,f.prototype.create),t}var f=(h.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,o=t[0]||{},i=this.service+"/"+e,e=this.errors[e],e=e?(r=o,e.replace(d,function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"})):"Error",e=this.serviceName+": "+e+" ("+i+").";return new c(i,e,o)},h);function h(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var d=/\{\$([^}]+)}/g;function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function m(e,t){t=new y(e,t);return t.subscribe.bind(t)}var y=(g.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},g.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},g.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},g.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=b),void 0===r.error&&(r.error=b),void 0===r.complete&&(r.complete=b);n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}}),this.observers.push(r),n},g.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},g.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},g.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},g.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},g);function g(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}function b(){}var w=(E.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},E.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},E.prototype.setServiceProps=function(e){return this.serviceProps=e,this},E);function E(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var O="[DEFAULT]",_=(I.prototype.get=function(e){void 0===e&&(e=O);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o;this.instancesDeferred.set(t,n);try{var r=this.getOrInitializeService(t);r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},I.prototype.getImmediate=function(e){var t=i({identifier:O,optional:!1},e),e=t.identifier,n=t.optional,r=this.normalizeInstanceIdentifier(e);try{var o=this.getOrInitializeService(r);if(o)return o;if(n)return null;throw Error("Service "+this.name+" is not available")}catch(e){if(n)return null;throw e}},I.prototype.getComponent=function(){return this.component},I.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if("EAGER"===(this.component=e).instantiationMode)try{this.getOrInitializeService(O)}catch(e){}try{for(var r=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(this.instancesDeferred.entries()),o=r.next();!o.done;o=r.next()){var i=u(o.value,2),a=i[0],s=i[1],c=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService(c);s.resolve(l)}catch(e){}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},I.prototype.clearInstance=function(e){void 0===e&&(e=O),this.instancesDeferred.delete(e),this.instances.delete(e)},I.prototype.delete=function(){return e(this,void 0,void 0,function(){var t;return n(this,function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}(t.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}),t.filter(function(e){return"_delete"in e}).map(function(e){return e._delete()})))];case 1:return e.sent(),[2]}})})},I.prototype.isComponentSet=function(){return null!=this.component},I.prototype.isInitialized=function(e){return void 0===e&&(e=O),this.instances.has(e)},I.prototype.getOrInitializeService=function(e){var t,n=this.instances.get(e);return!n&&this.component&&(n=this.component.instanceFactory(this.container,(t=e)===O?void 0:t),this.instances.set(e,n)),n||null},I.prototype.normalizeInstanceIdentifier=function(e){return!this.component||this.component.multipleInstances?e:O},I);function I(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}var N=(L.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},L.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},L.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new _(e,this);return this.providers.set(e,t),t},L.prototype.getProviders=function(){return Array.from(this.providers.values())},L);function L(e){this.name=e,this.providers=new Map}function S(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var R,P=[];(F=R=R||{})[F.DEBUG=0]="DEBUG",F[F.VERBOSE=1]="VERBOSE",F[F.INFO=2]="INFO",F[F.WARN=3]="WARN",F[F.ERROR=4]="ERROR",F[F.SILENT=5]="SILENT";function A(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var o=(new Date).toISOString(),i=D[t];if(!i)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[i].apply(console,S(["["+o+"]  "+e.name+":"],n))}}var C={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},j=R.INFO,D=((x={})[R.DEBUG]="log",x[R.VERBOSE]="log",x[R.INFO]="info",x[R.WARN]="warn",x[R.ERROR]="error",x),F=(Object.defineProperty(k.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in R))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),k.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?C[e]:e},Object.defineProperty(k.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(k.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),k.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,R.DEBUG],e)),this._logHandler.apply(this,S([this,R.DEBUG],e))},k.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,R.VERBOSE],e)),this._logHandler.apply(this,S([this,R.VERBOSE],e))},k.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,R.INFO],e)),this._logHandler.apply(this,S([this,R.INFO],e))},k.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,R.WARN],e)),this._logHandler.apply(this,S([this,R.WARN],e))},k.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,S([this,R.ERROR],e)),this._logHandler.apply(this,S([this,R.ERROR],e))},k);function k(e){this.name=e,this._logLevel=j,this._logHandler=A,this._userLogHandler=null,P.push(this)}function T(t){P.forEach(function(e){e.setLogLevel(t)})}function H(a,t){for(var e=0,n=P;e<n.length;e++)!function(e){var i=null;t&&t.level&&(i=C[t.level]),e.userLogHandler=null===a?null:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=n.map(function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(function(e){return e}).join(" ");t>=(null!=i?i:e.logLevel)&&a({level:R[t].toLowerCase(),message:o,args:n,type:e.name})}}(n[e])}var x=((x={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",x["bad-app-name"]="Illegal App name: '{$appName}",x["duplicate-app"]="Firebase App named '{$appName}' already exists",x["app-deleted"]="Firebase App named '{$appName}' already deleted",x["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",x["invalid-log-argument"]="First argument to `onLog` must be null or a function.",x),z=new f("app","Firebase",x),B="@firebase/app",V="[DEFAULT]",U=((x={})[B]="fire-core",x["@firebase/analytics"]="fire-analytics",x["@firebase/auth"]="fire-auth",x["@firebase/database"]="fire-rtdb",x["@firebase/functions"]="fire-fn",x["@firebase/installations"]="fire-iid",x["@firebase/messaging"]="fire-fcm",x["@firebase/performance"]="fire-perf",x["@firebase/remote-config"]="fire-rc",x["@firebase/storage"]="fire-gcs",x["@firebase/firestore"]="fire-fst",x["fire-js"]="fire-js",x["firebase-wrapper"]="fire-js-all",x),M=new F("@firebase/app"),W=(Object.defineProperty(G.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(G.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),G.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(e){return e.delete()}))}).then(function(){t.isDeleted_=!0})},G.prototype._getService=function(e,t){return void 0===t&&(t=V),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},G.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=V),this.container.getProvider(e).clearInstance(t)},G.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(e){M.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,e)}},G.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},G.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},G.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw z.create("app-deleted",{appName:this.name_})},G);function G(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=p(void 0,e),this.container=new N(t.name),this._addComponent(new w("app",function(){return r},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(e){return r._addComponent(e)})}W.prototype.name&&W.prototype.options||W.prototype.delete||console.log("dc");var $="8.2.10";function Y(a){var s={},c=new Map,l={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});"object"==typeof t&&null!==t||(t={name:t});var n=t;void 0===n.name&&(n.name=V);t=n.name;if("string"!=typeof t||!t)throw z.create("bad-app-name",{appName:String(t)});if(v(s,t))throw z.create("duplicate-app",{appName:t});n=new a(e,n,l);return s[t]=n},app:u,registerVersion:function(e,t,n){var r=null!==(o=U[e])&&void 0!==o?o:e;n&&(r+="-"+n);var o=r.match(/\s|\//),e=t.match(/\s|\//);if(o||e){n=['Unable to register library "'+r+'" with version "'+t+'":'];return o&&n.push('library name "'+r+'" contains illegal characters (whitespace or "/")'),o&&e&&n.push("and"),e&&n.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void M.warn(n.join(" "))}i(new w(r+"-version",function(){return{library:r,version:t}},"VERSION"))},setLogLevel:T,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw z.create("invalid-log-argument");H(e,t)},apps:null,SDK_VERSION:$,INTERNAL:{registerComponent:i,removeApp:function(e){delete s[e]},components:c,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function u(e){if(!v(s,e=e||V))throw z.create("no-app",{appName:e});return s[e]}function i(n){var e,r=n.name;if(c.has(r))return M.debug("There were multiple attempts to register component "+r+"."),"PUBLIC"===n.type?l[r]:null;c.set(r,n),"PUBLIC"===n.type&&(e=function(e){if("function"!=typeof(e=void 0===e?u():e)[r])throw z.create("invalid-app-argument",{appName:r});return e[r]()},void 0!==n.serviceProps&&p(e,n.serviceProps),l[r]=e,a.prototype[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,r).apply(this,n.multipleInstances?e:[])});for(var t=0,o=Object.keys(s);t<o.length;t++){var i=o[t];s[i]._addComponent(n)}return"PUBLIC"===n.type?l[r]:null}return l.default=l,Object.defineProperty(l,"apps",{get:function(){return Object.keys(s).map(function(e){return s[e]})}}),u.App=a,l}var x=function e(){var t=Y(W);return t.INTERNAL=i(i({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){p(t,e)},createSubscribe:m,ErrorFactory:f,deepExtend:p}),t}(),J=(K.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(e){if(function(e){e=e.getComponent();return"VERSION"===(null==e?void 0:e.type)}(e)){e=e.getImmediate();return e.library+"/"+e.version}return null}).filter(function(e){return e}).join(" ")},K);function K(e){this.container=e}"object"==typeof self&&self.self===self&&void 0!==self.firebase&&(M.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "),(F=self.firebase.SDK_VERSION)&&0<=F.indexOf("LITE")&&M.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));var Z=x.initializeApp;x.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return}}()&&M.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),Z.apply(void 0,e)};var q,Q,X=x;(q=X).INTERNAL.registerComponent(new w("platform-logger",function(e){return new J(e)},"PRIVATE")),q.registerVersion(B,"0.6.15",Q),q.registerVersion("fire-js","");return X.registerVersion("firebase","8.2.10","app"),X});
//# sourceMappingURL=firebase-app.js.map
