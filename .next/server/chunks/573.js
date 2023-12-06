exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 614:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(836);var _classCallCheck2=_interopRequireDefault(__webpack_require__(690));var _createClass2=_interopRequireDefault(__webpack_require__(728));var _inherits2=_interopRequireDefault(__webpack_require__(655));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(993));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(808));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "default", ({enumerable:true,get:function get(){return Error;}}));var _interop_require_default=__webpack_require__(167);var _react=_interop_require_default._(__webpack_require__(689));var _head=_interop_require_default._(__webpack_require__(273));var statusCodes={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function _getInitialProps(param){var res=param.res,err=param.err;var statusCode=res&&res.statusCode?res.statusCode:err?err.statusCode:404;return{statusCode:statusCode};}var styles={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};var Error=function(_react$default$Compon){(0,_inherits2.default)(Error,_react$default$Compon);var _super=_createSuper(Error);function Error(){(0,_classCallCheck2.default)(this,Error);return _super.apply(this,arguments);}(0,_createClass2.default)(Error,[{key:"render",value:function render(){var _this$props=this.props,statusCode=_this$props.statusCode,_this$props$withDarkM=_this$props.withDarkMode,withDarkMode=_this$props$withDarkM===void 0?true:_this$props$withDarkM;var title=this.props.title||statusCodes[statusCode]||"An unexpected error has occurred";return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode?statusCode+": "+title:"Application error: a client-side exception has occurred")),_react.default.createElement("div",{style:styles.desc},_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(withDarkMode?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),statusCode?_react.default.createElement("h1",{className:"next-error-h1",style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.wrap},_react.default.createElement("h2",{style:styles.h2},this.props.title||statusCode?title:_react.default.createElement(_react.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))));}}]);return Error;}(_react.default.Component);(function(){Error.displayName="ErrorPage";})();(function(){Error.getInitialProps=_getInitialProps;})();(function(){Error.origGetInitialProps=_getInitialProps;})();if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});Object.assign(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 273:
/***/ ((module, exports, __webpack_require__) => {

"use client";"use strict";var _interopRequireDefault=__webpack_require__(836);var _defineProperty2=_interopRequireDefault(__webpack_require__(416));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}Object.defineProperty(exports, "__esModule", ({value:true}));0&&(0);function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]});}_export(exports,{defaultHead:function defaultHead(){return _defaultHead;},default:function _default(){return _default2;}});var _interop_require_default=__webpack_require__(167);var _interop_require_wildcard=__webpack_require__(760);var _react=_interop_require_wildcard._(__webpack_require__(689));var _sideeffect=_interop_require_default._(__webpack_require__(470));var _ampcontext=__webpack_require__(918);var _headmanagercontext=__webpack_require__(796);var _ampmode=__webpack_require__(732);var _warnonce=__webpack_require__(618);function _defaultHead(inAmpMode){if(inAmpMode===void 0)inAmpMode=false;var head=[_react.default.createElement("meta",{charSet:"utf-8"})];if(!inAmpMode){head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"}));}return head;}function onlyReactElement(list,child){if(typeof child==="string"||typeof child==="number"){return list;}if(child.type===_react.default.Fragment){return list.concat(_react.default.Children.toArray(child.props.children).reduce(function(fragmentList,fragmentChild){if(typeof fragmentChild==="string"||typeof fragmentChild==="number"){return fragmentList;}return fragmentList.concat(fragmentChild);},[]));}return list.concat(child);}var METATYPES=["name","httpEquiv","charSet","itemProp"];function unique(){var keys=new Set();var tags=new Set();var metaTypes=new Set();var metaCategories={};return function(h){var isUnique=true;var hasKey=false;if(h.key&&typeof h.key!=="number"&&h.key.indexOf("$")>0){hasKey=true;var key=h.key.slice(h.key.indexOf("$")+1);if(keys.has(key)){isUnique=false;}else{keys.add(key);}}switch(h.type){case"title":case"base":if(tags.has(h.type)){isUnique=false;}else{tags.add(h.type);}break;case"meta":for(var i=0,len=METATYPES.length;i<len;i++){var metatype=METATYPES[i];if(!h.props.hasOwnProperty(metatype))continue;if(metatype==="charSet"){if(metaTypes.has(metatype)){isUnique=false;}else{metaTypes.add(metatype);}}else{var category=h.props[metatype];var categories=metaCategories[metatype]||new Set();if((metatype!=="name"||!hasKey)&&categories.has(category)){isUnique=false;}else{categories.add(category);metaCategories[metatype]=categories;}}}break;}return isUnique;};}function reduceComponents(headChildrenElements,props){var inAmpMode=props.inAmpMode;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(_defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map(function(c,i){var key=c.key||i;if( true&&!inAmpMode){if(c.type==="link"&&c.props["href"]&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(url){return c.props["href"].startsWith(url);})){var newProps=_objectSpread({},c.props||{});newProps["data-href"]=newProps["href"];newProps["href"]=undefined;newProps["data-optimized-fonts"]=true;return _react.default.cloneElement(c,newProps);}}if(false){ var srcMessage; }return _react.default.cloneElement(c,{key:key});});}function Head(param){var children=param.children;var ampState=(0,_react.useContext)(_ampcontext.AmpStateContext);var headManager=(0,_react.useContext)(_headmanagercontext.HeadManagerContext);return _react.default.createElement(_sideeffect.default,{reduceComponentsToState:reduceComponents,headManager:headManager,inAmpMode:(0,_ampmode.isInAmpMode)(ampState)},children);}var _default2=Head;if((typeof exports.default==='function'||typeof exports.default==='object'&&exports.default!==null)&&typeof exports.default.__esModule==='undefined'){Object.defineProperty(exports.default,'__esModule',{value:true});Object.assign(exports.default,exports);module.exports=exports.default;}

/***/ }),

/***/ 182:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesRouteModule: function() {
        return PagesRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(76);
const _render = __webpack_require__(100);
class PagesRouteModule extends _routemodule.RouteModule {
    constructor(options){
        super(options);
        this.components = options.components;
    }
    handle() {
        throw new Error("Method not implemented.");
    }
    render(req, res, context) {
        return (0, _render.renderToHTMLImpl)(req, res, context.page, context.query, context.renderOpts, {
            App: this.components.App,
            Document: this.components.Document
        });
    }
}
const _default = PagesRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 760:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
exports._ = exports._interop_require_wildcard = _interop_require_wildcard;
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}


/***/ })

};
;