"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[3733],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(f,o(o({ref:r},l),{},{components:t})):a.createElement(f,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3859:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=t(7462),n=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"CameraCaptureError",title:"Class: CameraCaptureError",sidebar_label:"CameraCaptureError",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"api/classes/CameraCaptureError",id:"api/classes/CameraCaptureError",isDocsHomePage:!1,title:"Class: CameraCaptureError",description:"Represents any kind of error that occured while trying to capture a video or photo.",source:"@site/docs/api/classes/CameraCaptureError.md",sourceDirName:"api/classes",slug:"/api/classes/CameraCaptureError",permalink:"/react-native-vision-camera/docs/api/classes/CameraCaptureError",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CameraCaptureError",title:"Class: CameraCaptureError",sidebar_label:"CameraCaptureError",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"Camera",permalink:"/react-native-vision-camera/docs/api/classes/Camera"},next:{title:"CameraRuntimeError",permalink:"/react-native-vision-camera/docs/api/classes/CameraRuntimeError"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Accessors",id:"accessors",children:[{value:"cause",id:"cause",children:[]},{value:"code",id:"code",children:[]},{value:"message",id:"message",children:[]}]},{value:"Methods",id:"methods",children:[{value:"toString",id:"tostring",children:[]}]}],u={toc:l};function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents any kind of error that occured while trying to capture a video or photo."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://mrousavy.github.io/react-native-vision-camera/docs/guides/errors"},'"Camera Errors" documentation')," for more information about Camera Errors."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CameraError"),"<",(0,i.kt)("a",{parentName:"p",href:"../#captureerror"},(0,i.kt)("inlineCode",{parentName:"a"},"CaptureError")),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CameraCaptureError"))))),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"cause"},"cause"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"cause"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/ErrorWithCause"},(0,i.kt)("inlineCode",{parentName:"a"},"ErrorWithCause"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/ErrorWithCause"},(0,i.kt)("inlineCode",{parentName:"a"},"ErrorWithCause"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/934de14/src/CameraError.ts#L123"},"CameraError.ts:123")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"code"},"code"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"code"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"TCode")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TCode")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/934de14/src/CameraError.ts#L117"},"CameraError.ts:117")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"message"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/934de14/src/CameraError.ts#L120"},"CameraError.ts:120")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"tostring"},"toString"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"CameraError.toString"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/934de14/src/CameraError.ts#L139"},"CameraError.ts:139")))}m.isMDXComponent=!0}}]);