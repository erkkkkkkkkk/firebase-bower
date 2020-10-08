!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase)}(this,function(Rt){"use strict";try{(function(){function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=e(Rt),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function t(e,a,s,u){return new(s=s||Promise)(function(r,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function o(e){try{i(u.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?r(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(n,o)}i((u=u.apply(e,a||[])).next())})}function i(r,n){var o,i,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=n.call(r,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function v(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var n,o,a,u="FirebaseError",l=(n=Error,r(o=h,a=n),o.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c),h);function c(){this.constructor=o}function h(e,t){t=n.call(this,t)||this;return t.code=e,t.name=u,Object.setPrototypeOf(t,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(t,p.prototype.create),t}var p=(f.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n,o=t[0]||{},i=this.service+"/"+e,e=this.errors[e],e=e?(n=o,e.replace(d,function(e,t){var r=n[t];return null!=r?String(r):"<"+t+"?>"})):"Error",e=this.serviceName+": "+e+" ("+i+").",a=new l(i,e),s=0,u=Object.keys(o);s<u.length;s++){var c=u[s];"_"!==c.slice(-1)&&(c in a&&console.warn('Overwriting FirebaseError base field "'+c+'" can cause unexpected behavior.'),a[c]=o[c])}return a},f);function f(e,t,r){this.service=e,this.serviceName=t,this.errors=r}var d=/\{\$([^}]+)}/g,_=(g.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},g.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},g.prototype.setServiceProps=function(e){return this.serviceProps=e,this},g);function g(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}var b="firebasestorage.googleapis.com",m=12e4,y=6e5,w=(R.prototype.codeProp=function(){return this.code},R.prototype.codeEquals=function(e){return T(e)===this.codeProp()},R.prototype.serverResponseProp=function(){return this.serverResponse_},R.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(R.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(R.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),R);function R(e,t){this.code_=T(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}var E={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function T(e){return"storage/"+e}function O(){return new w(E.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function k(){return new w(E.CANCELED,"User canceled the upload/download.")}function A(){return new w(E.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U(e,t,r){return new w(E.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function x(){return new w(E.APP_DELETED,"The Firebase app was deleted.")}function P(e,t){return new w(E.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function S(e){throw new w(E.INTERNAL_ERROR,"Internal error: "+e)}var C={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function N(e){switch(e){case C.RAW:case C.BASE64:case C.BASE64URL:case C.DATA_URL:return;default:throw"Expected one of the event types: ["+C.RAW+", "+C.BASE64+", "+C.BASE64URL+", "+C.DATA_URL+"]."}}var I=function(e,t){this.data=e,this.contentType=t||null};function L(e,t){switch(e){case C.RAW:return new I(D(t));case C.BASE64:case C.BASE64URL:return new I(M(e,t));case C.DATA_URL:return new I(function(e){e=new B(e);return e.base64?M(C.BASE64,e.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw P(C.DATA_URL,"Malformed data URL.")}return D(t)}(e.rest)}(t),new B(t).contentType)}throw O()}function D(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):55296==(64512&n)?r<e.length-1&&56320==(64512&e.charCodeAt(r+1))?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function M(t,e){switch(t){case C.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n)throw P(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case C.BASE64URL:n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r)throw P(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var o;try{o=atob(e)}catch(e){throw P(t,"Invalid character found")}for(var i=new Uint8Array(o.length),a=0;a<o.length;a++)i[a]=o.charCodeAt(a);return i}var B=function(e){var t;if(this.base64=!1,(this.contentType=null)===(t=e.match(/^data:([^,]+)?,/)))throw P(C.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r,n=t[1]||null;null!=n&&(this.base64=(r=";base64",(t=n).length>=r.length&&t.substring(t.length-r.length)===r),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)};var j,q,F={STATE_CHANGED:"state_changed"},H="running",z="pausing",G="paused",X="success",V="canceling",W="canceled",K="error",Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function J(e){switch(e){case H:case z:case V:return Z.RUNNING;case G:return Z.PAUSED;case X:return Z.SUCCESS;case W:return Z.CANCELED;case K:default:return Z.ERROR}}function $(e){return null!=e}function Q(e){return void 0!==e}function Y(e){return"function"==typeof e}function ee(e){return"object"==typeof e}function te(e){return"string"==typeof e||e instanceof String}function re(e){return"number"==typeof e||e instanceof Number}function ne(e){return oe()&&e instanceof Blob}function oe(){return"undefined"!=typeof Blob}(q=j=j||{})[q.NO_ERROR=0]="NO_ERROR",q[q.NETWORK_ERROR=1]="NETWORK_ERROR",q[q.ABORT=2]="ABORT";var ie=(ae.prototype.send=function(e,t,r,n){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),$(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return $(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},ae.prototype.getErrorCode=function(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_},ae.prototype.getStatus=function(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},ae.prototype.getResponseText=function(){if(!this.sent_)throw S("cannot .getResponseText() before sending");return this.xhr_.responseText},ae.prototype.abort=function(){this.xhr_.abort()},ae.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},ae.prototype.addUploadProgressListener=function(e){$(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},ae.prototype.removeUploadProgressListener=function(e){$(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},ae);function ae(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=j.NO_ERROR,this.sendPromise_=new Promise(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=j.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=j.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}var se=(ue.prototype.createXhrIo=function(){return new ie},ue);function ue(){}function ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(oe())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}var le=(he.prototype.size=function(){return this.size_},he.prototype.type=function(){return this.type_},he.prototype.slice=function(e,t){if(ne(this.data_)){var r=this.data_,n=(o=e,n=t,(r=r).webkitSlice?r.webkitSlice(o,n):r.mozSlice?r.mozSlice(o,n):r.slice?r.slice(o,n):null);return null===n?null:new he(n)}var o,n;return new he(new Uint8Array(this.data_.buffer,e,t-e),!0)},he.getBlob=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(oe()){var r=e.map(function(e){return e instanceof he?e.data_:e});return new he(ce.apply(null,r))}var r=e.map(function(e){return te(e)?L(C.RAW,e).data:e.data_}),n=0;r.forEach(function(e){n+=e.byteLength});var o=new Uint8Array(n),i=0;return r.forEach(function(e){for(var t=0;t<e.length;t++)o[i++]=e[t]}),new he(o,!0)},he.prototype.uploadData=function(){return this.data_},he);function he(e,t){var r=0,n="";ne(e)?(r=(this.data_=e).size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}var pe=(Object.defineProperty(fe.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(fe.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),fe.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},fe.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},fe.makeFromBucketSpec=function(t){var e,r;try{e=fe.makeFromUrl(t)}catch(e){return new fe(t,"")}if(""===e.path)return e;throw r=t,new w(E.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")},fe.makeFromUrl=function(e){var t=null,r="([A-Za-z0-9.\\-_]+)";var n=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}for(var i=b.replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/"+r+"/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/"+r+"/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],s=0;s<a.length;s++){var u=a[s],c=u.regex.exec(e);if(c){t=new fe(c[u.indices.bucket],c[u.indices.path]||"");u.postModify(t);break}}if(null==t)throw r=e,new w(E.INVALID_URL,"Invalid URL '"+r+"'.");return t},fe);function fe(e,t){this.bucket=e,this.path_=t}function de(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return ee(r=t)&&!Array.isArray(r)?t:null}function _e(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function ve(e){return"https://"+b+"/v0"+e}function ge(e){var t,r=encodeURIComponent,n="?";for(t in e){e.hasOwnProperty(t)&&(n=n+(r(t)+"="+r(e[t]))+"&")}return n=n.slice(0,-1)}function be(e,t){return t}var me=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||be},ye=null;function we(){if(ye)return ye;var e=[];e.push(new me("bucket")),e.push(new me("generation")),e.push(new me("metageneration")),e.push(new me("name","fullPath",!0));var t=new me("name");t.xform=function(e,t){return!te(t=t)||t.length<2?t:_e(t)},e.push(t);t=new me("size");return t.xform=function(e,t){return $(t)?Number(t):t},e.push(t),e.push(new me("timeCreated")),e.push(new me("updated")),e.push(new me("md5Hash",null,!0)),e.push(new me("cacheControl",null,!0)),e.push(new me("contentDisposition",null,!0)),e.push(new me("contentEncoding",null,!0)),e.push(new me("contentLanguage",null,!0)),e.push(new me("contentType",null,!0)),e.push(new me("metadata","customMetadata",!0)),ye=e}function Re(r,n){Object.defineProperty(r,"ref",{get:function(){var e=r.bucket,t=r.fullPath,t=new pe(e,t);return n.makeStorageReference(t)}})}function Ee(e,t,r){t=de(t);if(null===t)return null;return function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Re(n,e),n}(e,t,r)}function Te(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Oe(e){if(!ee(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!ee(r))throw"Expected object for 'customMetadata' mapping."}else if(ee(r=r)&&null!==r)throw"Mapping for '"+t+"' cannot be an object."}}var ke="maxResults",Ae=1e3,Ue="pageToken",xe="prefixes",Pe="items";function Se(e,t,r){r=de(r);if(null===r)return null;return function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[xe])for(var o=0,i=r[xe];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new pe(t,a));n.prefixes.push(s)}if(r[Pe])for(var u=0,c=r[Pe];u<c.length;u++){var l=c[u],s=e.makeStorageReference(new pe(t,l.name));n.items.push(s)}return n}(e,t,r)}function Ce(e){if(!ee(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===ke){if(!re(r=e[ke])||!Number.isInteger(r)||e[ke]<=0)throw"Expected maxResults to be a positive number.";if(1e3<e[ke])throw"Expected maxResults to be less than or equal to "+Ae+"."}else{if(t!==Ue)throw"Unknown option: "+t;if(e[Ue]&&!te(e[Ue]))throw"Expected pageToken to be string."}var r}var Ne=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};function Ie(e){if(!e)throw O()}function Le(r,n){return function(e,t){return Ie(null!==(t=Ee(r,t,n))),t}}function De(r,n){return function(e,t){return Ie(null!==(t=Se(r,n,t))),t}}function Me(n,o){return function(e,t){var r=Ee(n,t,o);return Ie(null!==r),function(n,e){if(null===(e=de(e)))return null;if(!te(e.downloadTokens))return null;if(0===(e=e.downloadTokens).length)return null;var o=encodeURIComponent;return e.split(",").map(function(e){var t=n.bucket,r=n.fullPath;return ve("/b/"+o(t)+"/o/"+o(r))+ge({alt:"media",token:e})})[0]}(r,t)}}function Be(o){return function(e,t){var r,n=401===e.getStatus()?new w(E.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=o.bucket,new w(E.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(n=o.path,new w(E.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")):t;return n.setServerResponseProp(t.serverResponseProp()),n}}function je(n){var o=Be(n);return function(e,t){var r=o(e,t);return 404===e.getStatus()&&(e=n.path,r=new w(E.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")),r.setServerResponseProp(t.serverResponseProp()),r}}function qe(e,t,r){var n=ve(t.fullServerUrl()),o=e.maxOperationRetryTime,o=new Ne(n,"GET",Le(e,r),o);return o.errorHandler=je(t),o}function Fe(e,t,r){r=Object.assign({},r);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=(e=t,(t=null)&&t.contentType||e&&e.type()||"application/octet-stream")),r}function He(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=Fe(t,n,o),o="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Te(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",s="\r\n--"+s+"--",n=le.getBlob(o,n,s);if(null===n)throw A();s={name:u.fullPath},u=ve(i),i=e.maxUploadRetryTime,i=new Ne(u,"POST",Le(e,r),i);return i.urlParams=s,i.headers=a,i.body=n.uploadData(),i.errorHandler=Be(t),i}var ze=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function Ge(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Ie(!1)}return Ie(!!r&&-1!==(t||["active"]).indexOf(r)),r}function Xe(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Fe(t,n,o),o={name:a.fullPath},i=ve(i),n={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},r=Te(a,r),e=e.maxUploadRetryTime;e=new Ne(i,"POST",function(e){var t;Ge(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Ie(!1)}return Ie(te(t)),t},e);return e.urlParams=o,e.headers=n,e.body=r,e.errorHandler=Be(t),e}function Ve(e,t,r,o){e=e.maxUploadRetryTime,e=new Ne(r,"POST",function(e){var t=Ge(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Ie(!1)}r||Ie(!1);var n=Number(r);return Ie(!isNaN(n)),new ze(n,o.size(),"final"===t)},e);return e.headers={"X-Goog-Upload-Command":"query"},e.errorHandler=Be(t),e}function We(e,i,t,a,r,s,n,o){var u=new ze(0,0);if(n?(u.current=n.current,u.total=n.total):(u.current=0,u.total=a.size()),a.size()!==u.total)throw new w(E.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;0<r&&(l=Math.min(l,r));n=u.current,r=n+l,c={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":u.current},n=a.slice(n,r);if(null===n)throw A();r=i.maxUploadRetryTime,r=new Ne(t,"POST",function(e,t){var r=Ge(e,["active","final"]),n=u.current+l,o=a.size(),t="final"===r?Le(i,s)(e,t):null;return new ze(n,o,"final"===r,t)},r);return r.headers=c,r.body=n.uploadData(),r.progressCallback=o||null,r.errorHandler=Be(e),r}var Ke=function(e,t,r){Y(e)||$(t)||$(r)?(this.next=e,this.error=t||null,this.complete=r||null):(e=e,this.next=e.next||null,this.error=e.error||null,this.complete=e.complete||null)},Ze=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i};function Je(t,e,r){for(var n,o,i,a,s=e.length,u=e.length,c=0;c<e.length;c++)if(e[c].optional){s=c;break}if(!(s<=r.length&&r.length<=u))throw n=s,o=u,i=t,u=r.length,o=n===o?1===(a=n)?"argument":"arguments":(a="between "+n+" and "+o,"arguments"),new w(E.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+i+"`: Expected "+a+" "+o+", received "+u+".");for(c=0;c<r.length;c++)try{e[c].validator(r[c])}catch(e){throw e instanceof Error?U(c,t,e.message):U(c,t,e)}}var $e=function(t,e){var r=this;this.validator=function(e){r.optional&&!Q(e)||t(e)},this.optional=!!e};function Qe(e,t){function r(e){if(!te(e))throw"Expected string."}var n,o,e=e?(n=r,o=e,function(e){n(e),o(e)}):r;return new $e(e,t)}function Ye(){return new $e(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||oe()&&e instanceof Blob))throw"Expected Blob or File."})}function et(e){return new $e(Oe,e)}function tt(){return new $e(function(e){if(!(re(e)&&0<=e))throw"Expected a number 0 or greater."})}function rt(t,e){return new $e(function(e){if(!(null===e||$(e)&&e instanceof Object))throw"Expected an Object.";null!=t&&t(e)},e)}function nt(e){return new $e(function(e){if(!(null===e||Y(e)))throw"Expected a Function."},e)}function ot(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Promise.resolve().then(function(){return r.apply(void 0,e)})}}var it=(at.prototype.makeProgressCallback_=function(){var t=this,r=this.transferred_;return function(e){return t.updateProgress_(r+e)}},at.prototype.shouldDoResumable_=function(e){return 262144<e.size()},at.prototype.start_=function(){this.state_===H&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},at.prototype.resolveToken_=function(t){var r=this;this.service_.getAuthToken().then(function(e){switch(r.state_){case H:t(e);break;case V:r.transition_(W);break;case z:r.transition_(G)}})},at.prototype.createResumable_=function(){var r=this;this.resolveToken_(function(e){var t=Xe(r.service_,r.location_,r.mappings_,r.blob_,r.metadata_),e=r.service_.makeRequest(t,e);(r.request_=e).getPromise().then(function(e){r.request_=null,r.uploadUrl_=e,r.needToFetchStatus_=!1,r.completeTransitions_()},r.errorHandler_)})},at.prototype.fetchStatus_=function(){var r=this,n=this.uploadUrl_;this.resolveToken_(function(e){var t=Ve(r.service_,r.location_,n,r.blob_),e=r.service_.makeRequest(t,e);(r.request_=e).getPromise().then(function(e){r.request_=null,r.updateProgress_(e.current),r.needToFetchStatus_=!1,e.finalized&&(r.needToFetchMetadata_=!0),r.completeTransitions_()},r.errorHandler_)})},at.prototype.continueUpload_=function(){var r=this,n=262144*this.chunkMultiplier_,o=new ze(this.transferred_,this.blob_.size()),i=this.uploadUrl_;this.resolveToken_(function(e){var t;try{t=We(r.location_,r.service_,i,r.blob_,n,r.mappings_,o,r.makeProgressCallback_())}catch(e){return r.error_=e,void r.transition_(K)}e=r.service_.makeRequest(t,e);(r.request_=e).getPromise().then(function(e){r.increaseMultiplier_(),r.request_=null,r.updateProgress_(e.current),e.finalized?(r.metadata_=e.metadata,r.transition_(X)):r.completeTransitions_()},r.errorHandler_)})},at.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},at.prototype.fetchMetadata_=function(){var r=this;this.resolveToken_(function(e){var t=qe(r.service_,r.location_,r.mappings_),e=r.service_.makeRequest(t,e);(r.request_=e).getPromise().then(function(e){r.request_=null,r.metadata_=e,r.transition_(X)},r.metadataErrorHandler_)})},at.prototype.oneShotUpload_=function(){var r=this;this.resolveToken_(function(e){var t=He(r.service_,r.location_,r.mappings_,r.blob_,r.metadata_),e=r.service_.makeRequest(t,e);(r.request_=e).getPromise().then(function(e){r.request_=null,r.metadata_=e,r.updateProgress_(r.blob_.size()),r.transition_(X)},r.errorHandler_)})},at.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},at.prototype.transition_=function(e){if(this.state_!==e)switch(e){case V:case z:this.state_=e,null!==this.request_&&this.request_.cancel();break;case H:var t=this.state_===G;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case G:this.state_=e,this.notifyObservers_();break;case W:this.error_=k(),this.state_=e,this.notifyObservers_();break;case K:case X:this.state_=e,this.notifyObservers_()}},at.prototype.completeTransitions_=function(){switch(this.state_){case z:this.transition_(G);break;case V:this.transition_(W);break;case H:this.start_()}},Object.defineProperty(at.prototype,"snapshot",{get:function(){var e=J(this.state_);return new Ze(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),at.prototype.on=function(e,t,r,i){var n="Expected a function or an Object with one of `next`, `error`, `complete` properties.",o=nt(!0).validator,a=rt(null,!0).validator;function s(e){try{return void o(e)}catch(e){}try{if(a(e),!(Q(e.next)||Q(e.error)||Q(e.complete)))throw"";return}catch(e){throw n}}Je("on",[Qe(function(){if(e!==F.STATE_CHANGED)throw"Expected one of the event types: ["+F.STATE_CHANGED+"]."}),rt(s,!0),nt(!0),nt(!0)],arguments);var u=this;function c(o){return function(e,t,r){null!==o&&Je("on",o,arguments);var n=new Ke(e,t,i);return u.addObserver_(n),function(){u.removeObserver_(n)}}}var l=[rt(function(e){if(null===e)throw n;s(e)}),nt(!0),nt(!0)];return!(Q(t)||Q(r)||Q(i))?c(l):c(null)(t,r,i)},at.prototype.then=function(e,t){return this.promise_.then(e,t)},at.prototype.catch=function(e){return this.then(null,e)},at.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},at.prototype.removeObserver_=function(e){e=this.observers_.indexOf(e);-1!==e&&this.observers_.splice(e,1)},at.prototype.notifyObservers_=function(){var t=this;this.finishPromise_(),this.observers_.slice().forEach(function(e){t.notifyObserver_(e)})},at.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(J(this.state_)){case Z.SUCCESS:ot(this.resolve_.bind(null,this.snapshot))();break;case Z.CANCELED:case Z.ERROR:ot(this.reject_.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},at.prototype.notifyObserver_=function(e){switch(J(this.state_)){case Z.RUNNING:case Z.PAUSED:e.next&&ot(e.next.bind(e,this.snapshot))();break;case Z.SUCCESS:e.complete&&ot(e.complete.bind(e))();break;case Z.CANCELED:case Z.ERROR:e.error&&ot(e.error.bind(e,this.error_))();break;default:e.error&&ot(e.error.bind(e,this.error_))()}},at.prototype.resume=function(){Je("resume",[],arguments);var e=this.state_===G||this.state_===z;return e&&this.transition_(H),e},at.prototype.pause=function(){Je("pause",[],arguments);var e=this.state_===H;return e&&this.transition_(z),e},at.prototype.cancel=function(){Je("cancel",[],arguments);var e=this.state_===H||this.state_===z;return e&&this.transition_(V),e},at);function at(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=H,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(E.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(K))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(E.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(K))},this.promise_=new Promise(function(e,t){a.resolve_=e,a.reject_=t,a.start_()}),this.promise_.then(null,function(){})}var st=(ut.prototype.toString=function(){return Je("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},ut.prototype.newRef=function(e,t){return new ut(e,t)},ut.prototype.mappings=we,ut.prototype.child=function(e){Je("child",[Qe()],arguments);var t,e=(t=this.location.path,e=(e=e).split("/").filter(function(e){return 0<e.length}).join("/"),0===t.length?e:t+"/"+e),e=new pe(this.location.bucket,e);return this.newRef(this.service,e)},Object.defineProperty(ut.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this.location.path);if(null===e)return null;e=new pe(this.location.bucket,e);return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"root",{get:function(){var e=new pe(this.location.bucket,"");return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"name",{get:function(){return _e(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(ut.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),ut.prototype.put=function(e,t){return void 0===t&&(t=null),Je("put",[Ye(),et(!0)],arguments),this.throwIfRoot_("put"),new it(this,this.service,this.location,this.mappings(),new le(e),t)},ut.prototype.putString=function(e,t,r){void 0===t&&(t=C.RAW),Je("putString",[Qe(),Qe(N,!0),et(!0)],arguments),this.throwIfRoot_("putString");e=L(t,e),r=Object.assign({},r);return!$(r.contentType)&&$(e.contentType)&&(r.contentType=e.contentType),new it(this,this.service,this.location,this.mappings(),new le(e.data,!0),r)},ut.prototype.delete=function(){var o=this;return Je("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then(function(e){var t,r,n,t=(t=o.service,r=o.location,n=ve(r.fullServerUrl()),t=t.maxOperationRetryTime,(t=new Ne(n,"DELETE",function(e,t){},t)).successCodes=[200,204],t.errorHandler=je(r),t);return o.service.makeRequest(t,e).getPromise()})},ut.prototype.listAll=function(){Je("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then(function(){return e})},ut.prototype.listAllHelper=function(n,o){return t(this,void 0,void 0,function(){var t,r;return i(this,function(e){switch(e.label){case 0:return r={pageToken:o},[4,this.list(r)];case 1:return t=e.sent(),(r=n.prefixes).push.apply(r,t.prefixes),(r=n.items).push.apply(r,t.items),null==t.nextPageToken?[3,3]:[4,this.listAllHelper(n,t.nextPageToken)];case 2:e.sent(),e.label=3;case 3:return[2]}})})},ut.prototype.list=function(s){Je("list",[new $e(Ce,!0)],arguments);var u=this;return this.service.getAuthToken().then(function(e){var t,r,n,o,i,a=s||{},i=(t=u.service,r=u.location,n="/",o=a.pageToken,i=a.maxResults,a={},r.isRoot?a.prefix="":a.prefix=r.path+"/",n&&0<n.length&&(a.delimiter=n),o&&(a.pageToken=o),i&&(a.maxResults=i),o=ve(r.bucketOnlyServerUrl()),i=t.maxOperationRetryTime,(i=new Ne(o,"GET",De(t,r.bucket),i)).urlParams=a,i.errorHandler=Be(r),i);return u.service.makeRequest(i,e).getPromise()})},ut.prototype.getMetadata=function(){var r=this;return Je("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then(function(e){var t=qe(r.service,r.location,r.mappings());return r.service.makeRequest(t,e).getPromise()})},ut.prototype.updateMetadata=function(s){var u=this;return Je("updateMetadata",[et()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then(function(e){var t,r,n,o,i,a,n=(t=u.service,r=u.location,n=s,o=u.mappings(),i=ve(r.fullServerUrl()),a=Te(n,o),n=t.maxOperationRetryTime,(n=new Ne(i,"PATCH",Le(t,o),n)).headers={"Content-Type":"application/json; charset=utf-8"},n.body=a,n.errorHandler=je(r),n);return u.service.makeRequest(n,e).getPromise()})},ut.prototype.getDownloadURL=function(){var a=this;return Je("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then(function(e){var t,r,n,o,i,i=(t=a.service,r=a.location,n=a.mappings(),o=ve(r.fullServerUrl()),i=t.maxOperationRetryTime,(i=new Ne(o,"GET",Me(t,n),i)).errorHandler=je(r),i);return a.service.makeRequest(i,e).getPromise().then(function(e){if(null===e)throw new w(E.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})},ut.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw e=e,new w(E.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")},ut);function ut(e,t){this.service=e,this.location=t instanceof pe?t:pe.makeFromUrl(t)}var ct=(lt.prototype.getPromise=function(){return this.promise_},lt.prototype.cancel=function(e){},lt);function lt(e){this.promise_=Promise.reject(e)}var ht=(pt.prototype.start_=function(){var t,r,e,n,o,i,a,s,u,c=this;function l(e,t){var r,n=c.resolve_,o=c.reject_,i=t.xhr;if(t.wasSuccessCode)try{var a=c.callback_(i,i.getResponseText());Q(a)?n(a):n()}catch(e){o(e)}else null!==i?((r=O()).setServerResponseProp(i.getResponseText()),c.errorCallback_?o(c.errorCallback_(i,r)):o(r)):t.canceled?o(r=(c.appDelete_?x:k)()):o(r=new w(E.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}function h(){return 2===a}function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];s||(s=!0,r.apply(null,e))}function f(e){o=setTimeout(function(){o=null,t(d,h())},e)}function d(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];s||(e||h()||i?p.call.apply(p,v([null,e],t)):(n<64&&(n*=2),f(1===a?(a=2,0):1e3*(n+Math.random()))))}function _(e){u||(u=!0,s||(null!==o?(e||(a=2),clearTimeout(o),f(0)):e||(a=1)))}this.canceled_?l(0,new ft(!1,null,!0)):this.backoffId_=(t=function(n,e){function o(e){var t=e.loaded,e=e.lengthComputable?e.total:-1;null!==c.progressCallback_&&c.progressCallback_(t,e)}e?n(!1,new ft(!1,null,!0)):(e=c.pool_.createXhrIo(),c.pendingXhr_=e,null!==c.progressCallback_&&e.addUploadProgressListener(o),e.send(c.url_,c.method_,c.body_,c.headers_).then(function(e){null!==c.progressCallback_&&e.removeUploadProgressListener(o),c.pendingXhr_=null;var t=e.getErrorCode()===j.NO_ERROR,r=e.getStatus();t&&!c.isRetryStatusCode_(r)?(r=-1!==c.successCodes_.indexOf(r),n(!0,new ft(r,e))):(e=e.getErrorCode()===j.ABORT,n(!1,new ft(!1,null,e)))}))},r=l,e=this.timeout_,o=null,u=s=i=!(n=1),f(a=0),setTimeout(function(){_(i=!0)},e),_)},pt.prototype.getPromise=function(){return this.promise_},pt.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},pt.prototype.isRetryStatusCode_=function(e){var t=500<=e&&e<600,r=-1!==[408,429].indexOf(e),e=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||e},pt);function pt(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){h.resolve_=e,h.reject_=t,h.start_()})}var ft=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r};function dt(e,t,r,n){var o=ge(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return o=a,(t=t)&&(o["X-Firebase-GMPID"]=t),t=a,null!==(r=r)&&0<r.length&&(t.Authorization="Firebase "+r),t=a,r=void 0!==s.default?s.default.SDK_VERSION:"AppManager",t["X-Firebase-Storage-Version"]="webjs/"+r,new ht(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}var _t=(vt.extractBucket_=function(e){e=null==e?void 0:e.storageBucket;return null==e?null:pe.makeFromBucketSpec(e)},vt.prototype.getAuthToken=function(){return t(this,void 0,void 0,function(){var t;return i(this,function(e){switch(e.label){case 0:return(t=this.authProvider_.getImmediate({optional:!0}))?[4,t.getToken()]:[3,2];case 1:if(null!==(t=e.sent()))return[2,t.accessToken];e.label=2;case 2:return[2,null]}})})},vt.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach(function(e){return e.cancel()}),this.requests_.clear()},vt.prototype.makeStorageReference=function(e){return new st(this,e)},vt.prototype.makeRequest=function(e,t){var r=this;if(this.deleted_)return new ct(x());var n=dt(e,this.appId_,t,this.pool_);return this.requests_.add(n),n.getPromise().then(function(){return r.requests_.delete(n)},function(){return r.requests_.delete(n)}),n},vt.prototype.ref=function(e){if(Je("ref",[Qe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var t=new st(this,this.bucket_);return null!=e?t.child(e):t},vt.prototype.refFromURL=function(e){return Je("refFromURL",[Qe(function(e){if("string"!=typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{pe.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new st(this,e)},Object.defineProperty(vt.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),vt.prototype.setMaxUploadRetryTime=function(e){Je("setMaxUploadRetryTime",[tt()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(vt.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),vt.prototype.setMaxOperationRetryTime=function(e){Je("setMaxOperationRetryTime",[tt()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(vt.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(vt.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),vt);function vt(e,t,r,n){this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=e,this.authProvider_=t,this.maxOperationRetryTime_=m,this.maxUploadRetryTime_=y,this.requests_=new Set,this.pool_=r,this.bucket_=null!=n?pe.makeFromBucketSpec(n):vt.extractBucket_(null===(n=this.app_)||void 0===n?void 0:n.options),this.internals_=new gt(this)}var gt=(bt.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},bt);function bt(e){this.service_=e}var mt,yt;function wt(e,t){var r=e.getProvider("app").getImmediate(),e=e.getProvider("auth-internal");return new _t(r,e,new se,t)}mt=s.default,yt={TaskState:Z,TaskEvent:F,StringFormat:C,Storage:_t,Reference:st},mt.INTERNAL.registerComponent(new _("storage",wt,"PUBLIC").setServiceProps(yt).setMultipleInstances(!0)),mt.registerVersion("@firebase/storage","0.3.43")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-storage.js.map
