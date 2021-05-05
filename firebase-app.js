!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()}(this,function(){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function e(e,a,s,c){return new(s=s||Promise)(function(n,t){function r(e){try{o(c.next(e))}catch(e){t(e)}}function i(e){try{o(c.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,i)}o((c=c.apply(e,a||[])).next())})}function n(n,r){var i,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,(t=a?[2&t[0],a.value]:t)[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&r>=e.length?void 0:e)&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function a(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=f(e[n],t[n]));return e}var o=(t.prototype.wrapCallback=function(n){var r=this;return function(e,t){e?r.reject(e):r.resolve(t),"function"==typeof n&&(r.promise.catch(function(){}),1===n.length?n(e):n(e,t))}},t);function t(){var n=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise(function(e,t){n.resolve=e,n.reject=t})}var s,c="FirebaseError",l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(h,s=Error),h);function h(e,t,n){t=s.call(this,t)||this;return t.code=e,t.customData=n,t.name=c,Object.setPrototypeOf(t,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(t,d.prototype.create),t}var d=(v.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,i=t[0]||{},o=this.service+"/"+e,e=this.errors[e],e=e?(r=i,e.replace(y,function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"})):"Error",e=this.serviceName+": "+e+" ("+o+").";return new l(o,e,i)},v);function v(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var y=/\{\$([^}]+)}/g;function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function b(e,t){t=new g(e,t);return t.subscribe.bind(t)}var g=(I.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},I.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},I.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},I.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=w),void 0===r.error&&(r.error=w),void 0===r.complete&&(r.complete=w);n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}}),this.observers.push(r),n},I.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},I.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},I.prototype.sendOne=function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},I.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},I);function I(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(n)}).catch(function(e){n.error(e)})}function w(){}var E=(O.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},O.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},O.prototype.setServiceProps=function(e){return this.serviceProps=e,this},O.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},O);function O(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}var _="[DEFAULT]",N=(C.prototype.get=function(e){void 0===e&&(e=_);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},C.prototype.getImmediate=function(e){var t=i({identifier:_,optional:!1},e),e=t.identifier,t=t.optional,n=this.normalizeInstanceIdentifier(e);if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(t)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(t)return null;throw e}},C.prototype.getComponent=function(){return this.component},C.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:_})}catch(e){}try{for(var r=u(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=p(i.value,2),a=o[0],s=o[1],c=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:c});s.resolve(l)}catch(e){}}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},C.prototype.clearInstance=function(e){void 0===e&&(e=_),this.instancesDeferred.delete(e),this.instances.delete(e)},C.prototype.delete=function(){return e(this,void 0,void 0,function(){var t;return n(this,function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(a(a([],p(t.filter(function(e){return"INTERNAL"in e}).map(function(e){return e.INTERNAL.delete()}))),p(t.filter(function(e){return"_delete"in e}).map(function(e){return e._delete()}))))];case 1:return e.sent(),[2]}})})},C.prototype.isComponentSet=function(){return null!=this.component},C.prototype.isInitialized=function(e){return void 0===e&&(e=_),this.instances.has(e)},C.prototype.initialize=function(e){var t,n,r=(e=void 0===e?{}:e).instanceIdentifier,r=void 0===r?_:r,e=e.options,e=void 0===e?{}:e,i=this.normalizeInstanceIdentifier(r);if(this.isInitialized(i))throw Error(this.name+"("+i+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:i,options:e});try{for(var a=u(this.instancesDeferred.entries()),s=a.next();!s.done;s=a.next()){var c=p(s.value,2),l=c[0],c=c[1];i===this.normalizeInstanceIdentifier(l)&&c.resolve(o)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return this.invokeOnInitCallbacks(o,i),o},C.prototype.onInit=function(e){var t=this;return this.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},C.prototype.invokeOnInitCallbacks=function(e,t){var n,r;try{for(var i=u(this.onInitCallbacks),o=i.next();!o.done;o=i.next()){var a=o.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}},C.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,e=void 0===n?{}:n,r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t)===_?void 0:n,options:e}),this.instances.set(t,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch(e){}return r||null},C.prototype.normalizeInstanceIdentifier=function(e){return!this.component||this.component.multipleInstances?e:_},C.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},C);function C(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Set}var L=(S.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},S.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},S.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new N(e,this);return this.providers.set(e,t),t},S.prototype.getProviders=function(){return Array.from(this.providers.values())},S);function S(e){this.name=e,this.providers=new Map}var R,A=[];(z=R=R||{})[z.DEBUG=0]="DEBUG",z[z.VERBOSE=1]="VERBOSE",z[z.INFO=2]="INFO",z[z.WARN=3]="WARN",z[z.ERROR=4]="ERROR",z[z.SILENT=5]="SILENT";function P(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=j[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,a(["["+i+"]  "+e.name+":"],n))}}var k={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},D=R.INFO,j=((H={})[R.DEBUG]="log",H[R.VERBOSE]="log",H[R.INFO]="info",H[R.WARN]="warn",H[R.ERROR]="error",H),z=(Object.defineProperty(F.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in R))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),F.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?k[e]:e},Object.defineProperty(F.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(F.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),F.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,R.DEBUG],e)),this._logHandler.apply(this,a([this,R.DEBUG],e))},F.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,R.VERBOSE],e)),this._logHandler.apply(this,a([this,R.VERBOSE],e))},F.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,R.INFO],e)),this._logHandler.apply(this,a([this,R.INFO],e))},F.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,R.WARN],e)),this._logHandler.apply(this,a([this,R.WARN],e))},F.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,R.ERROR],e)),this._logHandler.apply(this,a([this,R.ERROR],e))},F);function F(e){this.name=e,this._logLevel=D,this._logHandler=P,this._userLogHandler=null,A.push(this)}function T(t){A.forEach(function(e){e.setLogLevel(t)})}function x(a,t){for(var e=0,n=A;e<n.length;e++)!function(e){var o=null;t&&t.level&&(o=k[t.level]),e.userLogHandler=null===a?null:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=n.map(function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(function(e){return e}).join(" ");t>=(null!=o?o:e.logLevel)&&a({level:R[t].toLowerCase(),message:i,args:n,type:e.name})}}(n[e])}var H=((H={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",H["bad-app-name"]="Illegal App name: '{$appName}",H["duplicate-app"]="Firebase App named '{$appName}' already exists",H["app-deleted"]="Firebase App named '{$appName}' already deleted",H["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",H["invalid-log-argument"]="First argument to `onLog` must be null or a function.",H),B=new d("app","Firebase",H),V="@firebase/app",M="[DEFAULT]",U=((H={})[V]="fire-core",H["@firebase/analytics"]="fire-analytics",H["@firebase/app-check"]="fire-app-check",H["@firebase/auth"]="fire-auth",H["@firebase/database"]="fire-rtdb",H["@firebase/functions"]="fire-fn",H["@firebase/installations"]="fire-iid",H["@firebase/messaging"]="fire-fcm",H["@firebase/performance"]="fire-perf",H["@firebase/remote-config"]="fire-rc",H["@firebase/storage"]="fire-gcs",H["@firebase/firestore"]="fire-fst",H["fire-js"]="fire-js",H["firebase-wrapper"]="fire-js-all",H),W=new z("@firebase/app"),G=(Object.defineProperty($.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty($.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),$.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){return t.firebase_.INTERNAL.removeApp(t.name_),Promise.all(t.container.getProviders().map(function(e){return e.delete()}))}).then(function(){t.isDeleted_=!0})},$.prototype._getService=function(e,t){return void 0===t&&(t=M),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},$.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=M),this.container.getProvider(e).clearInstance(t)},$.prototype._addComponent=function(t){try{this.container.addComponent(t)}catch(e){W.debug("Component "+t.name+" failed to register with FirebaseApp "+this.name,e)}},$.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},$.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},$.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw B.create("app-deleted",{appName:this.name_})},$);function $(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=f(void 0,e),this.container=new L(t.name),this._addComponent(new E("app",function(){return r},"PUBLIC")),this.firebase_.INTERNAL.components.forEach(function(e){return r._addComponent(e)})}G.prototype.name&&G.prototype.options||G.prototype.delete||console.log("dc");var Y="8.5.0";function J(a){var s={},c=new Map,l={__esModule:!0,initializeApp:function(e,t){void 0===t&&(t={});"object"==typeof t&&null!==t||(t={name:t});var n=t;void 0===n.name&&(n.name=M);t=n.name;if("string"!=typeof t||!t)throw B.create("bad-app-name",{appName:String(t)});if(m(s,t))throw B.create("duplicate-app",{appName:t});n=new a(e,n,l);return s[t]=n},app:u,registerVersion:function(e,t,n){var r=null!==(i=U[e])&&void 0!==i?i:e;n&&(r+="-"+n);var i=r.match(/\s|\//),e=t.match(/\s|\//);if(i||e){n=['Unable to register library "'+r+'" with version "'+t+'":'];return i&&n.push('library name "'+r+'" contains illegal characters (whitespace or "/")'),i&&e&&n.push("and"),e&&n.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void W.warn(n.join(" "))}o(new E(r+"-version",function(){return{library:r,version:t}},"VERSION"))},setLogLevel:T,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw B.create("invalid-log-argument");x(e,t)},apps:null,SDK_VERSION:Y,INTERNAL:{registerComponent:o,removeApp:function(e){delete s[e]},components:c,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function u(e){if(!m(s,e=e||M))throw B.create("no-app",{appName:e});return s[e]}function o(n){var e,r=n.name;if(c.has(r))return W.debug("There were multiple attempts to register component "+r+"."),"PUBLIC"===n.type?l[r]:null;c.set(r,n),"PUBLIC"===n.type&&(e=function(e){if("function"!=typeof(e=void 0===e?u():e)[r])throw B.create("invalid-app-argument",{appName:r});return e[r]()},void 0!==n.serviceProps&&f(e,n.serviceProps),l[r]=e,a.prototype[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,r).apply(this,n.multipleInstances?e:[])});for(var t=0,i=Object.keys(s);t<i.length;t++){var o=i[t];s[o]._addComponent(n)}return"PUBLIC"===n.type?l[r]:null}return l.default=l,Object.defineProperty(l,"apps",{get:function(){return Object.keys(s).map(function(e){return s[e]})}}),u.App=a,l}var H=function e(){var t=J(G);return t.INTERNAL=i(i({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){f(t,e)},createSubscribe:b,ErrorFactory:d,deepExtend:f}),t}(),K=(X.prototype.getPlatformInfoString=function(){return this.container.getProviders().map(function(e){if(function(e){e=e.getComponent();return"VERSION"===(null==e?void 0:e.type)}(e)){e=e.getImmediate();return e.library+"/"+e.version}return null}).filter(function(e){return e}).join(" ")},X);function X(e){this.container=e}"object"==typeof self&&self.self===self&&void 0!==self.firebase&&(W.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "),(z=self.firebase.SDK_VERSION)&&0<=z.indexOf("LITE")&&W.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));var Z=H.initializeApp;H.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return}}()&&W.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),Z.apply(void 0,e)};var q,Q,ee=H;(q=ee).INTERNAL.registerComponent(new E("platform-logger",function(e){return new K(e)},"PRIVATE")),q.registerVersion(V,"0.6.21",Q),q.registerVersion("fire-js","");return ee.registerVersion("firebase","8.5.0","app"),ee});
//# sourceMappingURL=firebase-app.js.map
