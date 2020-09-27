(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba750a2"],{aa1e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"pb-3",attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[a("a-card",{attrs:{title:t.title,bodyStyle:{padding:"16px"}}},[a("a-form-model",{ref:"tagForm",attrs:{model:t.form.model,rules:t.form.rules,layout:"horizontal"}},[a("a-form-model-item",{attrs:{label:"名称：",help:"* 页面上所显示的名称",prop:"name"}},[a("a-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{label:"别名：",help:"* 一般为单个标签页面的标识，最好为英文",prop:"slug"}},[a("a-input",{model:{value:t.form.model.slug,callback:function(e){t.$set(t.form.model,"slug",e)},expression:"form.model.slug"}})],1),a("a-form-model-item",{attrs:{label:"封面图：",help:"* 在标签页面可展示，需要主题支持",prop:"thumbnail"}},[a("a-input",{model:{value:t.form.model.thumbnail,callback:function(e){t.$set(t.form.model,"thumbnail",e)},expression:"form.model.thumbnail"}},[a("a",{attrs:{slot:"addonAfter",href:"javascript:void(0);"},on:{click:function(e){t.thumbnailDrawer.visible=!0}},slot:"addonAfter"},[a("a-icon",{attrs:{type:"picture"}})],1)])],1),a("a-form-model-item",[t.isUpdateMode?a("a-button-group",[a("ReactiveButton",{attrs:{type:"primary",loading:t.form.saving,errored:t.form.errored,text:"更新",loadedText:"更新成功",erroredText:"更新失败"},on:{click:t.handleCreateOrUpdateTag,callback:t.handleSavedCallback}}),a("a-button",{attrs:{type:"dashed"},on:{click:function(e){t.form.model={}}}},[t._v("返回添加")])],1):a("ReactiveButton",{attrs:{type:"primary",loading:t.form.saving,errored:t.form.errored,text:"保存",loadedText:"保存成功",erroredText:"保存失败"},on:{click:t.handleCreateOrUpdateTag,callback:t.handleSavedCallback}}),t.isUpdateMode?a("a-popconfirm",{attrs:{title:"你确定要删除【"+t.form.model.name+"】标签？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleDeleteTag(t.form.model.id)}}},[a("a-button",{staticClass:"float-right",attrs:{type:"danger"}},[t._v("删除")])],1):t._e()],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[a("a-card",{attrs:{title:"所有标签",bodyStyle:{padding:"16px"}}},[a("a-spin",{attrs:{spinning:t.list.loading}},[0==t.list.data.length?a("a-empty"):t._l(t.list.data,(function(e){return a("a-tooltip",{key:e.id,attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.postCount)+" 篇文章")])]),a("a-tag",{staticStyle:{"margin-bottom":"8px",cursor:"pointer"},attrs:{color:"blue"},on:{click:function(a){t.form.model=e}}},[t._v(t._s(e.name))])],2)}))],2)],1)],1)],1),a("AttachmentSelectDrawer",{attrs:{title:"选择封面图"},on:{listenToSelect:t.handleSelectThumbnail},model:{value:t.thumbnailDrawer.visible,callback:function(e){t.$set(t.thumbnailDrawer,"visible",e)},expression:"thumbnailDrawer.visible"}})],1)},r=[],n=a("d28d"),l={data:function(){return{list:{data:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 标签名称不能为空",trigger:["change"]},{max:255,message:"* 标签名称的字符长度不能超过 255",trigger:["change"]}],slug:[{max:255,message:"* 标签别名的字符长度不能超过 255",trigger:["change"]}],thumbnail:[{max:1023,message:"* 封面图链接的字符长度不能超过 1023",trigger:["change"]}]}},thumbnailDrawer:{visible:!1}}},computed:{title:function(){return this.isUpdateMode?"修改标签":"添加标签"},isUpdateMode:function(){return!!this.form.model.id}},created:function(){this.handleListTags()},methods:{handleListTags:function(){var t=this;this.list.loading=!0,n["a"].listAll(!0).then((function(e){t.list.data=e.data.data})).finally((function(){setTimeout((function(){t.list.loading=!1}),200)}))},handleDeleteTag:function(t){var e=this;n["a"].delete(t).finally((function(){e.form.model={},e.handleListTags()}))},handleCreateOrUpdateTag:function(){var t=this,e=this;e.$refs.tagForm.validate((function(a){a&&(t.form.saving=!0,e.isUpdateMode?n["a"].update(e.form.model.id,e.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})):n["a"].create(e.form.model).catch((function(){t.form.errored=!0})).finally((function(){setTimeout((function(){e.form.saving=!1}),400)})))}))},handleSavedCallback:function(){var t=this;t.form.errored?t.form.errored=!1:(t.form.model={},t.handleListTags())},handleSelectThumbnail:function(t){this.$set(this.form.model,"thumbnail",encodeURI(t.path)),this.thumbnailDrawer.visible=!1}}},i=l,d=a("2877"),s=Object(d["a"])(i,o,r,!1,null,null,null);e["default"]=s.exports},d28d:function(t,e,a){"use strict";var o=a("9efd"),r="/api/admin/tags",n={listAll:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(o["a"])({url:r,params:{more:t},method:"get"})},createWithName:function(t){return Object(o["a"])({url:r,data:{name:t},method:"post"})},create:function(t){return Object(o["a"])({url:r,data:t,method:"post"})},update:function(t,e){return Object(o["a"])({url:"".concat(r,"/").concat(t),data:e,method:"put"})},delete:function(t){return Object(o["a"])({url:"".concat(r,"/").concat(t),method:"delete"})}};e["a"]=n}}]);