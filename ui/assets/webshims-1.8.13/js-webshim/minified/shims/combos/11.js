(function(a){if(!Modernizr.genericDOM){var g=document,n,q,p=/<([\w:]+)/,k={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||k[(p.exec(a)||["",""])[1].toLowerCase()])return a;if(!q){n=g.body;if(!n)return a;q=g.createElement("div");q.style.display="none"}var o=q.cloneNode(!1);n.appendChild(o);o.innerHTML=a;n.removeChild(o);return o.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,g,n,q,p){var k=g.modules,r=/\s*,\s*/,o={},w={},s={},v={},t={},u=a.fn.val,b=function(i,h,f,b,c){return c?u.call(a(i)):u.call(a(i),f)};a.fn.val=function(i){var h=this[0];arguments.length&&null==i&&(i="");if(!arguments.length)return!h||1!==h.nodeType?u.call(this):a.prop(h,"value",i,"val",!0);if(a.isArray(i))return u.apply(this,arguments);var f=a.isFunction(i);return this.each(function(b){h=this;1===h.nodeType&&(f?(b=i.call(h,b,a.prop(h,"value",p,"val",
!0)),null==b&&(b=""),a.prop(h,"value",b,"val")):a.prop(h,"value",i,"val"))})};var c="_webshimsLib"+Math.round(1E3*Math.random()),d=function(i,h,f){i=i.jquery?i[0]:i;if(!i)return f||{};var b=a.data(i,c);f!==p&&(b||(b=a.data(i,c,{})),h&&(b[h]=f));return h?b&&b[h]:b};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(i){a.fn[i.name]=function(){return this.map(function(){var a=d(this,
"shadowData");return a&&a[i.prop]||this})}});["removeAttr","prop","attr"].forEach(function(i){o[i]=a[i];a[i]=function(h,f,c,x,d){var e="val"==x,l=!e?o[i]:b;if(!h||!w[f]||1!==h.nodeType||!e&&x&&"attr"==i&&a.attrFn[f])return l(h,f,c,x,d);var y=(h.nodeName||"").toLowerCase(),m=s[y],g="attr"==i&&(!1===c||null===c)?"removeAttr":i,j,k,r;m||(m=s["*"]);m&&(m=m[f]);m&&(j=m[g]);if(j){if("value"==f)k=j.isVal,j.isVal=e;if("removeAttr"===g)return j.value.call(h);if(c===p)return j.get?j.get.call(h):j.value;j.set&&
("attr"==i&&!0===c&&(c=f),r=j.set.call(h,c));if("value"==f)j.isVal=k}else r=l(h,f,c,x,d);if((c!==p||"removeAttr"===g)&&t[y]&&t[y][f]){var n;n="removeAttr"==g?!1:"prop"==g?!!c:!0;t[y][f].forEach(function(a){if(!a.only||(a.only="prop"==i)||"attr"==a.only&&"prop"!=i)a.call(h,c,n,e?"val":g,i)})}return r};v[i]=function(h,f,c){s[h]||(s[h]={});s[h][f]||(s[h][f]={});var d=s[h][f][i],e=function(a,h,d){return h&&h[a]?h[a]:d&&d[a]?d[a]:"prop"==i&&"value"==f?function(a){return c.isVal?b(this,f,a,!1,0===arguments.length):
o[i](this,f,a)}:"prop"==i&&"value"==a&&c.value.apply?function(a){var h=o[i](this,f);h&&h.apply&&(h=h.apply(this,arguments));return h}:function(a){return o[i](this,f,a)}};s[h][f][i]=c;if(c.value===p){if(!c.set)c.set=c.writeable?e("set",c,d):g.cfg.useStrict&&"prop"==f?function(){throw f+" is readonly on "+h;}:a.noop;if(!c.get)c.get=e("get",c,d)}["value","get","set"].forEach(function(a){c[a]&&(c["_sup"+a]=e(a,d))})}});var e=!a.browser.msie||8<parseInt(a.browser.version,10),m=function(){var a=g.getPrototypeOf(q.createElement("foobar")),
h=Object.prototype.hasOwnProperty;return function(f,b,c){var m=q.createElement(f),j=g.getPrototypeOf(m);if(e&&j&&a!==j&&(!m[b]||!h.call(m,b))){var k=m[b];c._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};j[b]=c.value}else c._supvalue=function(){var a=d(this,"propValue");return a&&a[b]&&a[b].apply?a[b].apply(this,arguments):a&&a[b]},l.extendValue(f,b,c.value);c.value._supvalue=c._supvalue}}(),l=function(){var b={};g.addReady(function(h,f){var c={},d=function(b){c[b]||(c[b]=a(h.getElementsByTagName(b)),
f[0]&&a.nodeName(f[0],b)&&(c[b]=c[b].add(f)))};a.each(b,function(a,b){d(a);!b||!b.forEach?g.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){c[a].each(b)})});c=null});var h,f=a([]),c=function(c,f){b[c]?b[c].push(f):b[c]=[f];a.isDOMReady&&(h||a(q.getElementsByTagName(c))).each(f)};return{createTmpCache:function(b){a.isDOMReady&&(h=h||a(q.getElementsByTagName(b)));return h||f},flushTmpCache:function(){h=null},content:function(b,h){c(b,function(){var b=a.attr(this,h);null!=b&&a.attr(this,
h,b)})},createElement:function(a,b){c(a,b)},extendValue:function(b,h,f){c(b,function(){a(this).each(function(){d(this,"propValue",{})[h]=this[h];this[h]=f})})}}}(),j=function(a,b){if(a.defaultValue===p)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(g,{getID:function(){var b=(new Date).getTime();return function(h){var h=a(h),c=h.attr("id");c||(b++,c="ID-"+b,h.attr("id",c));return c}}(),extendUNDEFProp:function(b,
h){a.each(h,function(a,h){a in b||(b[a]=h)})},createPropDefault:j,data:d,moveToFirstEvent:function(){var b=a._data?"_data":"data";return function(h,c,d){if((h=(a[b](h,"events")||{})[c])&&1<h.length)c=h.pop(),d||(d="bind"),"bind"==d&&h.delegateCount?h.splice(h.delegateCount,0,c):h.unshift(c)}}(),addShadowDom:function(b,h,f){f=f||{};b.jquery&&(b=b[0]);h.jquery&&(h=h[0]);if(!f.shadowFocusElement)f.shadowFocusElement=h;var e=a.data(b,c)||a.data(b,c,{}),m=a.data(h,c)||a.data(h,c,{});e.hasShadow=h;m.nativeElement=
b;m.shadowData=e.shadowData={nativeElement:b,shadowElement:h,shadowFocusElement:f.shadowFocusElement};f.shadowChilds&&f.shadowChilds.each(function(){d(this,"shadowData",m.shadowData)});if(f.data)e.shadowData.data=f.data,m.shadowData.data=f.data;f=null},propTypes:{standard:function(a){j(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){j(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(b,c){"string"==typeof c&&(c=c.split(r));c.forEach(function(c){g.defineNodeNamesProperty(b,c,{prop:{set:function(b){a.attr(this,c,b)},get:function(){return a.attr(this,c)||""}}})})},defineNodeNameProperty:function(b,c,f){w[c]=!0;if(f.reflect)g.propTypes[f.propType||"standard"](f);["prop","attr","removeAttr"].forEach(function(d){var e=f[d];e&&(e="prop"===d?a.extend({writeable:!0},e):a.extend({},
e,{writeable:!0}),v[d](b,c,e),"*"!=b&&g.cfg.extendNative&&"prop"==d&&e.value&&a.isFunction(e.value)&&m(b,c,e),f[d]=e)});f.initAttr&&l.content(b,c);return f},defineNodeNameProperties:function(a,b,c,d){for(var e in b)!d&&b[e].initAttr&&l.createTmpCache(a),c&&(b[e][c]?g.log("override: "+a+"["+e+"] for "+c):(b[e][c]={},["value","set","get"].forEach(function(a){a in b[e]&&(b[e][c][a]=b[e][a],delete b[e][a])}))),b[e]=g.defineNodeNameProperty(a,e,b[e]);d||l.flushTmpCache();return b},createElement:function(b,
c,f){var d;a.isFunction(c)&&(c={after:c});l.createTmpCache(b);c.before&&l.createElement(b,c.before);f&&(d=g.defineNodeNameProperties(b,f,!1,!0));c.after&&l.createElement(b,c.after);l.flushTmpCache();return d},onNodeNamesPropertyModify:function(b,c,f,d){"string"==typeof b&&(b=b.split(r));a.isFunction(f)&&(f={set:f});b.forEach(function(a){t[a]||(t[a]={});"string"==typeof c&&(c=c.split(r));f.initAttr&&l.createTmpCache(a);c.forEach(function(b){t[a][b]||(t[a][b]=[],w[b]=!0);if(f.set){if(d)f.set.only=d;
t[a][b].push(f.set)}f.initAttr&&l.content(a,b)});l.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,c,f){f||(f={});if(a.isFunction(f))f.set=f;g.defineNodeNamesProperty(b,c,{attr:{set:function(a){this.setAttribute(c,a);f.set&&f.set.call(this,!0)},get:function(){return null==this.getAttribute(c)?p:c}},removeAttr:{value:function(){this.removeAttribute(c);f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
p)return c=(a.attributes[b]||{}).value,null==c?p:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var b=[],c={},f,d,e=/:\/\/|^\.*\//,m=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,e.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,j(b,!0)):a(function(){b.langObj[c]&&j(b,!0);b.loading=!1})}),!0):!1},l=function(a){c[a]&&c[a].forEach(function(a){a.callback()})},
j=function(a,b){if(a.activeLang!=f&&a.activeLang!==d){var c=k[a.module].options;if(a.langObj[f]||d&&a.langObj[d])a.activeLang=f,a.callback(a.langObj[f]||a.langObj[d],f),l(a.module);else if(!b&&!m(a,f,c)&&!m(a,d,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],f),l(a.module)}};return function(e){if("string"==typeof e&&e!==f)f=e,d=f.split("-")[0],f==d&&(d=!1),a.each(b,function(a,b){j(b)});else if("object"==typeof e)if(e.register)c[e.register]||(c[e.register]=[]),c[e.register].push(e),
e.callback();else{if(!e.activeLang)e.activeLang="";b.push(e);j(e)}return f}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){g[a]=function(a,c,d,e){"string"==typeof a&&(a=a.split(r));var m={};a.forEach(function(a){m[a]=g[b](a,c,d,e)});return m}});g.isReady("webshimLocalization",!0)});
(function(a,g){var n=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<n)&&(!a.browser.msie||12>n&&7<n)){var q={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(a,g){a.getAttribute("role")||a.setAttribute("role",g)};a.webshims.addReady(function(k,r){a.each(q,function(g,n){for(var o=a(g,k).add(r.filter(g)),b=0,c=o.length;b<c;b++)p(o[b],n)});if(k===g){var o=g.getElementsByTagName("header")[0],n=g.getElementsByTagName("footer"),s=n.length;
o&&!a(o).closest("section, article")[0]&&p(o,"banner");s&&(o=n[s-1],a(o).closest("section, article")[0]||p(o,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,g,n,q,p){g.propTypes.element=function(k){g.createPropDefault(k,"attr");if(!k.prop)k.prop={get:function(){var g=k.attr.get.call(this);g&&(g=a("#"+g)[0])&&k.propNodeName&&!a.nodeName(g,k.propNodeName)&&(g=null);return g||null},writeable:!1}};(function(){var k=a.webshims.cfg.forms,r=Modernizr.input.list;if(!r||k.customDatalist){var o=0,w={submit:1,button:1,reset:1,hidden:1,range:1,date:1},s=a.browser.msie&&7>parseInt(a.browser.version,10),v={},t=function(a){if(!a)return[];
if(v[a])return v[a];var c;try{c=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(d){}v[a]=c||[];return c||[]},u={_create:function(b){if(!w[a.prop(b.input,"type")]){var c=b.datalist,d=a.data(b.input,"datalistWidget");if(c&&d&&d.datalist!==c)d.datalist=c,d.id=b.id,d.shadowList.prop("className","datalist-polyfill "+(d.datalist.className||"")+" "+d.datalist.id+"-shadowdom"),k.positionDatalist?d.shadowList.insertAfter(b.input):d.shadowList.appendTo("body"),a(d.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(d,"_resetListCached")),d._resetListCached();else if(c){if(!(d&&d.datalist===c)){o++;var e=this;this.hideList=a.proxy(e,"hideList");this.timedHide=function(){clearTimeout(e.hideTimer);e.hideTimer=setTimeout(e.hideList,9)};this.datalist=c;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');k.positionDatalist?
this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var d=a("li:not(.hidden-item)",e.shadowList),g="mousedown"==c.type||"click"==c.type;e.markItem(d.index(c.currentTarget),g,d);"click"==c.type&&(e.hideList(),a(b.input).trigger("datalistselect"));return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete",
"off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!e.triggeredByDatalist)e.changedValue=!1,e.showHideOptions()}).bind("keydown.datalistWidget",function(c){var d=c.keyCode,g;if(40==d&&!e.showList())return e.markItem(e.index+1,!0),!1;if(e.isListVisible){if(38==d)return e.markItem(e.index-1,!0),!1;if(!c.shiftKey&&(33==d||36==d))return e.markItem(0,!0),!1;if(!c.shiftKey&&(34==d||35==d))return c=a("li:not(.hidden-item)",e.shadowList),e.markItem(c.length-1,!0,c),
!1;if(13==d||27==d)return 13==d&&(g=a("li.active-item:not(.hidden-item)",e.shadowList),e.changeValue(a("li.active-item:not(.hidden-item)",e.shadowList))),e.hideList(),g&&g[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&e.showList()}).bind("mousedown.datalistWidget",function(){a(this).is(":focus")&&e.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",
a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&(b.input.name||b.input.id)&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){if(!a(b.input).hasClass("no-datalist-cache")){var c=a.prop(b.input,"value"),d=(b.input.name||b.input.id)+a.prop(b.input,"type");if(!e.storedOptions)e.storedOptions=t(d);if(c&&-1==e.storedOptions.indexOf(c)&&(e.storedOptions.push(c),c=e.storedOptions,d)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+d,JSON.stringify(c))}catch(g){}}}});
a(n).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){e.destroy()})}}else d&&d.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(q).unbind(".datalist"+this.id);a(n).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===p?this.input.removeAttribute("autocomplete"):
a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var c=this,d;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(n.QUnit||(d=a&&q.activeElement==c.input)?c.updateListOptions(d):g.ready("WINDOWLOAD",function(){c.updateTimer=setTimeout(function(){c.updateListOptions();c=null;o=1},200+100*o)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),
fontFamily:a.css(this.input,"fontFamily")});this.searchStart=a(this.input).hasClass("search-start");var c=[],d=[],e=[],g,l,j,i;for(l=a.prop(this.datalist,"options"),j=0,i=l.length;j<i;j++){g=l[j];if(g.disabled)return;g={value:a(g).val()||"",text:a.trim(a.attr(g,"label")||g.textContent||g.innerText||a.text([g])||""),className:g.className||"",style:a.attr(g,"style")||""};g.text?g.text!=g.value&&(g.className+=" different-label-value"):g.text=g.value;d[j]=g.value;e[j]=g}if(!this.storedOptions)this.storedOptions=
a(this.input).hasClass("no-datalist-cache")?[]:t((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==d.indexOf(a)&&e.push({value:a,text:a,className:"stored-suggest",style:""})});for(j=0,i=e.length;j<i;j++)l=e[j],c[j]='<li class="'+l.className+'" style="'+l.style+'" tabindex="-1" role="listitem"><span class="option-label">'+l.text+'</span> <span class="option-value">'+l.value+"</span></li>";this.arrayOptions=e;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+
c.join("\n")+"</ul></div></div>");a.fn.bgIframe&&s&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var c=a.prop(this.input,"value").toLowerCase();if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var d=!1,e=this.searchStart,g=a("li",this.shadowList);c?this.arrayOptions.forEach(function(b,j){var i;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.text.toLowerCase()+b.value.toLowerCase():
b.text.toLowerCase();i=b.lowerText.indexOf(c);(i=e?!i:-1!==i)?(a(g[j]).removeClass("hidden-item"),d=!0):a(g[j]).addClass("hidden-item")}):g.length&&(g.removeClass("hidden-item"),d=!0);this.hasViewableData=d;!b&&d&&this.showList();if(!d)this.lastUnfoundValue=c,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=k.positionDatalist?a(this.input).position():g.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();
b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,c;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");
a(q).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||a.contains(b.shadowList[0],c.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(n).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(c);c=setTimeout(function(){b.setPos()},9)});clearTimeout(c);return!0},hideList:function(){if(!this.isListVisible)return!1;
var b=this,c=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;g.triggerInlineForm&&g.triggerInlineForm(b.input,"input");if(a(b.input).is(":focus"))a(b.input).one("blur",c);else c();b.triggeredByDatalist=!1}a(q).unbind(".datalist"+b.id);a(n).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+
b.id,function(){b.shadowList.css({top:0,left:0});a(n).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var c=a("ul",this.shadowList),d=a("div.datalist-box",this.shadowList),e=b.position();e.top-=(parseInt(c.css("paddingTop"),10)||0)+(parseInt(c.css("marginTop"),10)||0)+(parseInt(c.css("borderTopWidth"),10)||0);0>e.top?d.scrollTop(d.scrollTop()+e.top-2):(e.top+=b.outerHeight(),b=d.height(),e.top>b&&d.scrollTop(d.scrollTop()+(e.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",
b).text(),c=a.prop(this.input,"value");if(b!=c)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,c,d){d=d||a("li:not(.hidden-item)",this.shadowList);if(d.length)0>b?b=d.length-1:b>=d.length&&(b=0),d.removeClass("active-item"),this.shadowList.addClass("list-item-active"),d=d.filter(":eq("+b+")").addClass("active-item"),c&&(this.changeValue(d),this.scrollIntoView(d)),this.index=b}};(function(){r||g.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,
get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&g.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var d=a.data(this,"datalistWidget");d?(d._autocomplete=b,"off"==b&&d.hideList()):
"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};if(!r||!1 in a("<input />")[0])b.selectedOption={prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),d=null,e;if(!b)return d;e=a.attr(this,"value");if(!e)return d;b=a.prop(b,"options");if(!b.length)return d;a.each(b,function(b,c){if(e==a.prop(c,"value"))return d=c,!1});return d}}};b.list=r?{attr:{get:function(){var b=g.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");
return null==b?p:b},set:function(b){a.data(this,"datalistListAttr",b);g.objectCreate(u,p,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=g.contentAttr(this,"list");return null==a?p:a},set:function(b){g.contentAttr(this,"list",b);g.objectCreate(u,p,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};g.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=
!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;g.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
