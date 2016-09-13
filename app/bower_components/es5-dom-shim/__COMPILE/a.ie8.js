/* MIT License (c) copyright Egor Halimonenko (termi1uc1@gmail.com) */
;(function() {
var f=void 0,h=!0,i=null,j=!1,k=window;function m(a,b){for(var c in b)Object.prototype.hasOwnProperty(b,c)&&!Object.prototype.hasOwnProperty(a,c)&&(a[c]=b[c]);return a}
function n(a){var b="button"in a&&a.button;a.__isFixed=h;if("click"===a.type||"dblclick"===a.type)if(a.detail===f&&(a.detail="click"===a.type?1:2),!a.button&&n.a!==f)b=n.a;m(a,o);a.defaultPrevented||(a.defaultPrevented=j);"target"in a||(a.target=a.srcElement||document);a.relatedTarget===f&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);"clientX"in a&&a.pageX==i&&(a.pageX=a.clientX+q()-(r.clientLeft||0),a.pageY=a.clientY+t()-(r.clientTop||0));!a.which&&b&&(a.which=
b&1?1:b&2?3:b&4?2:0);"timeStamp"in a||(a.timeStamp=+new aa);"eventPhase"in a||(a.eventPhase=a.target==this?2:3);"currentTarget"in a||(a.currentTarget=this);!a.attrName&&a.propertyName&&(a.attrName=ba.call(a.propertyName,".")[0]);return a}
function u(a){if(n!==f){var b,c,d,e,g;b=this._;c=[];d=[];g="_e_8vj"+(ca?"-":"");if(!b||!b[g])if("__dom0__"in a)b||(b={}),b[g]||(b[g]={});else return;a||(a=window.event);"__isFixed"in a?a.currentTarget=this:a=n.call(this,a);if("__custom_event"in a)e=a;else{e=new Event(a.type);var l=a,s;for(s in l)if(v(l,s)&&e[s]!==l[s])try{e[s]=l[s]}catch(p){}e.__custom_event=h}b=b[g][e.type];"__dom0__"in a&&((b||(b=[]))[0]=a.__dom0__);if(b){for(var B in b)if(v(b,B)){g=b[B];var N;"object"===typeof g&&(N=g,g=g.handleEvent);
try{if((e.result=w.call(g,N||this,e))===j)e.preventDefault(),e.stopPropagation()}catch(L){c.push(L),d.push(L.message),console&&console.error(L)}if(e.__stopNow)break}a.returnValue=e.returnValue;a.cancelBubble=e.cancelBubble;if(1==c.length)throw c[0];if(1<c.length)throw a=Error("Multiple errors thrown : "+e.type+" :  : "+d.join("|")),a.b=c,a;}this===document&&(!e.cancelBubble&&3===e.eventPhase)&&(u.call(this.defaultView,e),a.cancelBubble=h)}}function x(){}
function y(a){var b=this.__orig__createElement__(a);if(da.test(a))return b;~z.indexOf("|"+a+"|")||(A.push(a),z+=a+"|",(C.__orig__createElement__||C.createElement)(a));return C.appendChild(b)}function D(a){var b=-1;if(a.createElement){for(;++b<A.length;)a.createElement(A[b]);a.createElement!==y&&!("ielt9"in a.createElement)&&(a.__orig__createElement__=a.createElement,a.createElement=y)}return a}var E;E=(E=/msie (\d+)/i.exec(navigator.userAgent))&&+E[1]||f;
k.Element||((k.Element=ActiveXObject).prototype.ie=h);k.HTMLElement||(k.HTMLElement=k.Element);k.Node||(k.Node=k.Element);var F;k.DocumentFragment||(k.DocumentFragment=k.Document||k.HTMLDocument||(F={},F.prototype={},F));k.Document||(k.Document=k.DocumentFragment);k._={ielt9shims:[],orig_:k._};
var G=k._.ielt9shims,ea={},H=document.createDocumentFragment,fa=document.createElement,ga=document.createTextNode,r=document.documentElement,ia=String.prototype.trim||(String.prototype.trim=function(){for(var a=this.replace(/^\s+/,""),b=ha,c=a.length;b.test(a.charAt(--c)););return a.slice(0,c+1)}),ba=String.prototype.split,ja=String.prototype.substr,I=Array.prototype.slice,J=Function.prototype.apply,w=Function.prototype.call,K=Function.prototype.bind||function(a,b){var c=this,d=I.call(arguments,1);
return function(){return J.call(c,a,d.concat(I.call(arguments)))}},v=K.call(Function.prototype.call,Object.prototype.hasOwnProperty);function ka(a,b,c){return J.call(a,b,I.call(arguments,2))}var M=document.createElement("p"),O=k.Node.prototype,P=k.Element.prototype,la=M.contains||O.contains,aa=Date,ma=/^\<([\w\:\-]*)[\>\ ]/i,ha=/\s/,Q,R,S="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),o,na=1;function oa(){}
var ca=j,z="abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|nav|output|progress|section|source|summary|time|video",A=z.split("|"),da=/^<|^(?:a|b|button|code|div|fieldset|form|map|h1|h2|h3|h4|h5|h6|i|object|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul|optgroup)$/i,T,C,U,pa,q,t;
"CSS1Compat"===document.compatMode?(q=function(){return r.scrollLeft},t=function(){return r.scrollTop}):(q=function(){return document.body.scrollTop},t=function(){return document.body.scrollLeft});document.head||(document.head=document.getElementsByTagName("head")[0]);"defaultView"in document||(document.defaultView=document.parentWindow);k.Event||(k.Event={});o=k.Event.prototype||(k.Event.prototype={});
m(o,{preventDefault:function(){this.returnValue=j;this.defaultPrevented=h},stopPropagation:function(){this.cancelBubble=h},stopImmediatePropagation:function(){this.__stopNow=h;this.stopPropagation()}});R=j;try{R=isNaN.apply(i,{})}catch(qa){}R||(Function.prototype.apply=function(a,b){try{return b!=f?J.call(this,a,b):J.call(this,a)}catch(c){if(c.number!=-2146823260||b.length===f||typeof b==="string")throw c;return J.call(this,a,Array.from(b))}});
"b"!=="ab".substr(-1)&&(String.prototype.substr=function(a,b){return ja.call(this,a<0?(a=this.length+a)<0?0:a:a,b)});
if("te".split(/(s)*/)[1]!=f||3!="1_1".split(/(_)/).length)Q=/()??/.exec("")[1]===f,String.prototype.split=function(a,b){var c=this;if(!(a instanceof RegExp))return a===f&&b===0?[]:ba.call(c,a,b);var d=[],e=0,g=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.d?"y":""),l=RegExp(a.source,g+"g"),s=i,p,B,c=c+"";Q||(s=RegExp("^"+l.source+"$(?!\\s)",g));if(b===f||+b<0)b=Infinity;else{b=Math.floor(+b);if(!b)return[]}for(;p=l.exec(c);){g=p.index+p[0].length;if(g>e){d.push(c.slice(e,p.index));!Q&&p.length>1&&
p[0].replace(s,function(){for(var a=1,b=arguments,c=b.length-2;a<c;a++)b[a]===f&&(p[a]=f)});p.length>1&&p.index<c.length&&d.push.apply(d,p.slice(1));B=p[0].length;e=g;if(d.length>=b)break}l.lastIndex===p.index&&l.lastIndex++}e===c.length?(B||!l.test(""))&&d.push(""):d.push(c.slice(e));return d.length>b?d.slice(0,b):d};
if(!k.DOMException){var V=(k.DOMException=function(){}).prototype=Error();V.INDEX_SIZE_ERR=1;V.HIERARCHY_REQUEST_ERR=3;V.WRONG_DOCUMENT_ERR=4;V.INVALID_CHARACTER_ERR=5;V.NO_MODIFICATION_ALLOWED_ERR=7;V.NOT_FOUND_ERR=8;V.NOT_SUPPORTED_ERR=9;V.INVALID_STATE_ERR=11;V.SYNTAX_ERR=12;V.INVALID_MODIFICATION_ERR=13;V.NAMESPACE_ERR=14;V.INVALID_ACCESS_ERR=15;V.TYPE_MISMATCH_ERR=17}"pageXOffset"in k||G.push(function(){Object.defineProperty(k,"pageXOffset",{get:q});Object.defineProperty(k,"pageYOffset",{get:t})});
document.addEventListener||(O.addEventListener=k.addEventListener=document.addEventListener=function(a,b,c){if(typeof b=="function"||typeof b==="object"&&b.handleEvent){var d=this,e=d._,g=j;d==k&&(!("_"in document)||!("_e_8vj"in document._)||!(a in document._._e_8vj))&&document.addEventListener(a,oa,c);e||(e=d._={});if(a==="DOMContentLoaded"){if(document.readyState=="complete")return;d===k&&(d=document);g=h;if(!ea[a]){ea[a]=h;var l=function(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(l,
50);return}u.call(d,{type:a})};if("createEventObject"in document&&"doScroll"in document.documentElement)try{k.frameElement||l()}catch(s){}}}else if(a==="load"&&"tagName"in d&&d.tagName.toUpperCase()==="SCRIPT"){g=h;d.onreadystatechange=function(){if(d.readyState==="loaded"){d.onreadystatechange=i;d.attachEvent("onreadystatechange",K.call(u,d,{type:a}))}};a="readystatechange"}else a==="DOMMouseScroll"&&(a="mousewheel");d.setInterval&&(d!=k&&!d.frameElement)&&(d=k);b.uuid||(b.uuid=++na);if(!(c=e._h_9e2))c=
e._h_9e2=K.call(u,d);e._e_8vj||(e._e_8vj={});if(!e._e_8vj[a]){e._e_8vj[a]={};g||d.attachEvent("on"+a,c)}e._e_8vj[a][b.uuid]=b}},O.addEventListener.__shim__=h,O.removeEventListener=k.removeEventListener=document.removeEventListener=function(a,b){var c=this._,d,e,g;if(!(typeof b!="function"||!b.uuid||!c))if(d=c._h_9e2){e=c._e_8vj&&c._e_8vj[a];delete e[b.uuid];for(g in e)if(v(e,g))return;this.detachEvent("on"+a,d);delete c._e_8vj[a];for(g in c._e_8vj)if(v(c._e_8vj,g))return;delete c._e_8vj}},O.removeEventListener.__shim__=
h,document.attachEvent("onmousedown",function(){n.a=event.button}),document.attachEvent("onclick",function(){n.a=f}));
document.dispatchEvent||(O.dispatchEvent=k.dispatchEvent=document.dispatchEvent=function(a){if(!a.type)return h;if(!a.returnValue)a.returnValue=h;if(a.cancelBubble)a.cancelBubble=j;try{return this.fireEvent("on"+a.type,a)}catch(b){if(b.number===-2147024809||this===k||b.number===-2146827850&&!(a.bubbles=j)){a.__custom_event=h;for(var c=a.target=this,d="on"+a.type;!a.cancelBubble&&c;){(d in c&&typeof c[d]=="function"&&(a.__dom0__=c[d])||"_"in c&&"_e_8vj"in c._)&&u.call(c,a);c=a.bubbles?c===document?
document.defaultView:c.parentNode:i;"__dom0__"in a&&(a.__dom0__=f)}return!a.cancelBubble}throw b;}},O.dispatchEvent.__shim__=h);
if(!document.createEvent){var ra=function(a,b,c){if(a==f||b==f||c==f)throw Error("WRONG_ARGUMENTS_ERR");this.type=a;this.bubbles=b;this.cancelable=c;this.c=j;this.target=i;if(!this.timeStamp)this.timeStamp=+new aa},sa=function(a,b,c,d){ra.call(this,a,b,c);this.detail=d},ta=function(a,b,c,d,e){sa.call(this,a,b,c,e);this.view=d},xa=function(a,b,c,d,e,g,l,s,p,B,N,L,ua,va,wa){ta.call(this,a,b,c,d,e);this.screenX=g;this.screenY=l;this.clientX=s;this.clientY=p;this.ctrlKey=B;this.altKey=N;this.shiftKey=
L;this.metaKey=ua;this.button=va;this.relatedTarget=wa};document.createEvent=function(){var a;a=document.createEventObject();a.returnValue=h;a.initEvent=ra;a.initCustomEvent=sa;a.initUIEvent=ta;a.initMouseEvent=xa;return a}}x.prototype=[];R=new x;R.push(1);R.length?k.NodeList=x:(R=document.createElement("iframe"),R.style.display="none",document.body.appendChild(R),R.contentWindow.document.write("<script>parent.NodeList=Array;<\/script>"),x=k.NodeList);x.prototype.item=function(a){return this[a]};
if(document.querySelectorAll){var W=document.querySelectorAll("#z").constructor.prototype;if(W&&W!==Array.prototype)for(var X in S)v(X,S)&&(W[X]||(W[X]=function(){return J.call(Array.prototype[X],Array.from(this),arguments)}))}document.doctype===i&&7<E&&G.push(function(){var a=document.childNodes[0];Object.defineProperty(a,"nodeType",{get:function(){return 10}});Object.defineProperty(document,"doctype",{configurable:h,enumerable:j,get:function(){return a}})});O.contains||(O.contains=la);
w.call(ga,document,"").contains||(k.Text&&k.Text.prototype?G.push(K.call(m,i,Text.prototype,O)):document.createTextNode=function(a){a=w.call(ga,this,a);a.contains=O.contains;return a});!w.call(H,document).contains&&(k.HTMLDocument&&k.HTMLDocument.prototype)&&G.push(K.call(m,i,k.HTMLDocument.prototype,O));(!("children"in M)||9>E)&&G.push(function(){Object.defineProperty(P,"children",{get:function(){for(var a=[],b=this.firstChild;b;){b.nodeType==1&&a.push(b);b=b.nextSibling}return a}})});
9>E&&G.push(function(){function a(a,c){var d;try{var e=a.getBoundingClientRect(),g=document.body;d=!r.contains(a)?c?e.left:e.top:c?e.left+q()-(r.clientLeft||g.clientLeft||0):e.top+t()-(r.clientTop||g.clientTop||0)}catch(l){d=a;e=0;for(g=c?"offsetLeft":"offsetTop";d;){e=e+parseInt(d[g],10);d=d.offsetParent}d=e}return d}Object.defineProperties(P,{offsetLeft:{get:function(){return a(this,h)}},offsetTop:{get:function(){return a(this)}}})});
M.childElementCount==f&&G.push(function(){Object.defineProperties(P,{firstElementChild:{get:function(){var a;for(a=this.firstChild;a&&a.nodeType!=1;)a=a.nextSibling;return a}},lastElementChild:{get:function(){var a;for(a=this.lastChild;a&&a.nodeType!=1;)a=a.previousSibling;return a}},nextElementSibling:{get:function(){for(var a=this;a=a.nextSibling;)if(a.nodeType==1)break;return a}},previousElementSibling:{get:function(){for(var a=this;a=a.previousSibling;)if(a.nodeType==1)break;return a}}})});
document.ELEMENT_NODE||(R={ELEMENT_NODE:1,TEXT_NODE:3,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11},m(document,R),m(O,R),m(k.Node,R));
"textContent"in M||G.push(function(){Object.defineProperty(O,"textContent",{get:function(){if("innerText"in this)return this.innerText;if("data"in this&&this.appendData)return this.data},set:function(a){"innerText"in this?this.innerText=a:"data"in this&&this.replaceData&&this.replaceData(0,this.length,a);return a}})});
"isEqualNode"in M||(document.isEqualNode=r.isEqualNode=O.isEqualNode=function(a){var b,c;if(a===i||a.nodeType!==this.nodeType||a.nodeType===10&&(this.name!==a.name||this.publicId!==a.publicId||this.systemId!==a.systemId))return j;if(a.nodeType===1){if(this.namespaceURI!=a.namespaceURI||this.prefix!=a.prefix||this.localName!=a.localName)return j;b=0;for(c=this.attributes.length;b<c;b++){var d=this.attributes[length],e=a.getAttributeNS(d.namespaceURI,d.localName);if(e===i||e.value!==d.value)return j}}if(a.nodeType===
7&&(this.target!==a.target||this.data!==a.data)||(a.nodeType===3||a.nodeType===8)&&this.data!==a.data||a.childNodes.length!==this.childNodes.length)return j;b=0;for(c=a.childNodes.length;b<c;b++)if(a.childNodes[b].isEqualNode(this.childNodes[b])===j)return j;return h});
document.importNode||(document.importNode=function(a,b){switch(a.nodeType){case 1:var c=document.createElement(a.nodeName),d=a.attributes,e,g,l;if(d&&d.length>0){g=0;for(l=d.length;g<l;){d=a.attributes[g++];c.setAttribute(d.nodeName,a.getAttribute(d.nodeName))}}if(b&&(e=a.childNodes)&&e.length>0){g=0;for(l=e.length;g<l;)c.appendChild(document.importNode(e[g++],b))}return c;case 3:case 4:case 8:return document.createTextNode(a.nodeValue)}c=Object.create(DOMException.prototype);c.code=DOMException.NOT_SUPPORTED_ERR;
c.message="NOT_SUPPORTED_ERR: DOM Exception "+c.code;throw c;},document.importNode.shim=h);R="compareDocumentPosition";
if(!(R in document)){var Y,Z=Y||"DOCUMENT_POSITION_";r[R]=document[R]=O[R]=function(a){return this.contains?(this!=a&&this.contains(a)&&16)+(this!=a&&a.contains(this)&&8)+(this.sourceIndex>=0&&a.sourceIndex>=0?(this.sourceIndex<a.sourceIndex&&4)+(this.sourceIndex>a.sourceIndex&&2):1)+0:0};Y="DISCONNECTED";r[Z+Y]=document[Z+Y]=O[Z+Y]=1;Y="PRECEDING";r[Z+Y]=document[Z+Y]=O[Z+Y]=2;Y="FOLLOWING";r[Z+Y]=document[Z+Y]=O[Z+Y]=4;Y="CONTAINS";r[Z+Y]=document[Z+Y]=O[Z+Y]=8;Y="CONTAINED_BY";r[Z+Y]=document[Z+
Y]=O[Z+Y]=16}k.getComputedStyle||(k.getComputedStyle=function(a){return a.currentStyle});9>E&&(document.createDocumentFragment=function(){var a=w.call(H,this);k.DocumentFragment===k.Document&&m(a,k.DocumentFragment.prototype);return D(a)});T=(M.innerHTML="<x-x></x-x>",1===M.childNodes.length&&1===M.childNodes[0].nodeType);z="|"+z+"|";y.ielt9=h;C=D(w.call(H,document));T||(D(document),document.head.insertAdjacentHTML("beforeend","<br><style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>"));
0===w.call(fa,document,"x-x").cloneNode().outerHTML.indexOf("<:x-x>")&&(U=C.appendChild("createElement"in C&&C.createElement("div")||C.ownerDocument.createElement("div")),pa=8===E?M.cloneNode:8>E?O.cloneNode:f,O.cloneNode=function(a){var b,c;if(da.test(this.nodeName))b=w.call(this.__nativeCloneNode__||pa,this,a);else{U.innerHTML="";c=a?this.outerHTML:this.outerHTML.replace(this.innerHTML,"");U.innerHTML=c.replace(/^\<\:/,"<").replace(/\<\/\:([\w\-]*\>)$/,"<$1");b=U.firstChild;if(!b&&!a){(c=c.match(ma))&&
(c=c[1]);if(c){C.createElement(c);U.innerHTML=c;b=U.firstChild}}}return C.appendChild(b)});R="getElementsByClassName";!P[R]&&document.querySelectorAll&&(P[R]=r[R]=document[R]=function(a){return!a||!(a=ia.call(a))?new x:ka(this.querySelectorAll||document.querySelectorAll,this,a.replace(/\s+(?=\S)|^/g,"."))});
if(!("opacity"in r.style)){var $=/alpha\(opacity=([^\)]+)\)/;Object.defineProperty(CSSStyleDeclaration.prototype,"opacity",{get:function(){var a=(this.filter||"").match($);return a?parseInt(a[1])/100+"":""},set:function(a){a="alpha(opacity="+(a>=0.9999?"100":a<0?0:~~(a*100))+")";this.filter=$.test(this.filter)?this.filter.replace($,a):this.filter+(" "+a)}})}var ya=document.querySelectorAll,za=document.querySelector,Aa=P.querySelectorAll,Ba=P.querySelector;
function Ca(a){for(var b=a.length>>>0,c=new x,d=0;d<b;d++)d in a&&c.push(a[d]);return c}document.querySelectorAll=function(){return Ca(ya.apply(this,arguments))};document.querySelector=function(){return za.apply(this,arguments)};P.querySelectorAll=function(){return Ca(Aa.apply(this,arguments))};P.querySelector=function(){return Ba.apply(this,arguments)};M=R=S=T=f;
})();