(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demos-demo6-demo6"],{"1a60":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list-item[data-v-4f59ef4e]{padding:10px 15px;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column\n}.sub-title[data-v-4f59ef4e]{color:#999;font-size:12px}.item-title[data-v-4f59ef4e]{font-size:16px}.item-content[data-v-4f59ef4e]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.item-left[data-v-4f59ef4e]{font-size:16px;text-align:left}.item-value[data-v-4f59ef4e]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-label[data-v-4f59ef4e]{font-size:16px}.item-placeholder[data-v-4f59ef4e]{color:#999;font-size:16px}.tips[data-v-4f59ef4e]{color:#dd524d;font-size:12px;padding-left:16px;padding-right:16px}.radio-group[data-v-4f59ef4e]{padding-bottom:10px;padding-left:16px;padding-right:16px}.flex-row-center[data-v-4f59ef4e]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.grey-block[data-v-4f59ef4e]{height:10px;background-color:#f8f8f8}',""]),e.exports=t},"4c35":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{columnNum:"5",value:2,label:"",list:[],radios:["3","4","5","6","7"]}},computed:{num:function(){return+this.columnNum}},created:function(){for(var e=[],t=1;t<20;t++)e.push({label:"选项".concat(t),value:t});this.list=e},onReady:function(){var e=this;this.$nextTick((function(){var t=e.$refs.picker1.getColumnsInfo(e.value);console.log("根据value获取的信息：",t),e.label=t.item.label}))},methods:{handleTap:function(e){this.$refs[e].show()},handleChange:function(e){console.log("change::",e)},handleConfirm:function(e){console.log("confirm::",e),e&&(this.label=e.item.label)},handleCancel:function(e){console.log("cancel::",e)},radioChange:function(e){this.columnNum=+e.detail.value}}};t.default=i},"53bd":function(e,t,n){var i=n("1a60");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5ca3d1da",i,!0,{sourceMap:!1,shadowMode:!1})},"7c7d":function(e,t,n){"use strict";var i=n("53bd"),a=n.n(i);a.a},c0c4:function(e,t,n){"use strict";n.r(t);var i=n("f2f1"),a=n("ea9d");for(var l in a)"default"!==l&&function(e){n.d(t,e,(function(){return a[e]}))}(l);n("7c7d");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4f59ef4e",null,!1,i["a"],o);t["default"]=c.exports},ea9d:function(e,t,n){"use strict";n.r(t);var i=n("4c35"),a=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,(function(){return i[e]}))}(l);t["default"]=a.a},f2f1:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return i}));var i={lbPicker:n("0b5b").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"grey-block"}),n("v-uni-view",{staticClass:"radios"},[n("v-uni-radio-group",{staticClass:"radio-group flex-row-center",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.radioChange.apply(void 0,arguments)}}},e._l(e.radios,(function(t){return n("v-uni-label",{key:t,staticClass:"flex-row-center"},[n("v-uni-radio",{attrs:{value:t,checked:t===e.columnNum}}),n("v-uni-text",{staticClass:"item-label"},[e._v(e._s(t)+"个")])],1)})),1)],1),n("v-uni-view",{staticClass:"list-item"},[n("v-uni-text",{staticClass:"sub-title"},[e._v("可视区自定义滚动个数："+e._s(e.columnNum)+"（默认值为5）")]),n("v-uni-view",{staticClass:"item-content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTap("picker1")}}},[n("v-uni-text",{staticClass:"item-title"},[e._v("绑定值:"+e._s(e.value))]),n("v-uni-view",{staticClass:"item-value"},[n("v-uni-text",{staticClass:"item-label"},[e._v(e._s(e.label))]),e.label?e._e():n("v-uni-text",{staticClass:"item-placeholder"},[e._v("点我打开选择器")])],1)],1),n("lb-picker",{ref:"picker1",attrs:{mode:"selector",list:e.list,"column-num":e.num},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.handleConfirm.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleCancel.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("v-uni-view",{staticClass:"grey-block"})],1)},l=[]}}]);