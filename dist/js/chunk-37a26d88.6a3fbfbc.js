(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a26d88"],{"1f27":function(e,t,a){"use strict";var r=a("9efd"),o="/api/admin/menus",n={listAll:function(){return Object(r["a"])({url:o,method:"get"})},listTree:function(){return Object(r["a"])({url:"".concat(o,"/tree_view"),method:"get"})},create:function(e){return Object(r["a"])({url:o,data:e,method:"post"})},delete:function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"delete"})},get:function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"get"})},update:function(e,t){return Object(r["a"])({url:"".concat(o,"/").concat(e),data:t,method:"put"})},listTeams:function(){return Object(r["a"])({url:"".concat(o,"/teams"),method:"get"})}};t["a"]=n},"7e89":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"pb-3",attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[a("a-card",{attrs:{title:e.title,bodyStyle:{padding:"16px"}}},[a("a-form-model",{ref:"categoryForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"horizontal"}},[a("a-form-model-item",{attrs:{label:"名称：",help:"* 页面上所显示的名称",prop:"name"}},[a("a-input",{model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{label:"别名：",help:"* 一般为单个分类页面的标识，最好为英文",prop:"slug"}},[a("a-input",{model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),a("a-form-model-item",{attrs:{label:"上级目录：",prop:"parentId"}},[a("category-select-tree",{attrs:{categories:e.table.data},model:{value:e.form.model.parentId,callback:function(t){e.$set(e.form.model,"parentId",t)},expression:"form.model.parentId"}})],1),a("a-form-model-item",{attrs:{label:"封面图：",help:"* 在分类页面可展示，需要主题支持",prop:"thumbnail"}},[a("a-input",{model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}},[a("a",{attrs:{slot:"addonAfter",href:"javascript:void(0);"},on:{click:function(t){e.thumbnailDrawer.visible=!0}},slot:"addonAfter"},[a("a-icon",{attrs:{type:"picture"}})],1)])],1),a("a-form-model-item",{attrs:{label:"描述：",help:"* 分类描述，需要主题支持",prop:"description"}},[a("a-input",{attrs:{type:"textarea",autoSize:{minRows:3}},model:{value:e.form.model.description,callback:function(t){e.$set(e.form.model,"description",t)},expression:"form.model.description"}})],1),a("a-form-model-item",[e.isUpdateMode?a("a-button-group",[a("ReactiveButton",{attrs:{type:"primary",loading:e.form.saving,errored:e.form.errored,text:"更新",loadedText:"更新成功",erroredText:"更新失败"},on:{click:e.handleCreateOrUpdateCategory,callback:e.handleSavedCallback}}),a("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.form.model={}}}},[e._v("返回添加")])],1):a("ReactiveButton",{attrs:{type:"primary",loading:e.form.saving,errored:e.form.errored,text:"保存",loadedText:"保存成功",erroredText:"保存失败"},on:{click:e.handleCreateOrUpdateCategory,callback:e.handleSavedCallback}})],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[a("a-card",{attrs:{title:"分类列表",bodyStyle:{padding:"16px"}}},[e.isMobile()?a("a-list",{attrs:{itemLayout:"vertical",size:"large",pagination:!1,dataSource:e.table.data,loading:e.table.loading},scopedSlots:e._u([{key:"renderItem",fn:function(t,r){return a("a-list-item",{key:r},[a("template",{slot:"actions"},[a("span",[a("a-icon",{attrs:{type:"form"}}),e._v(" "+e._s(t.postCount)+" ")],1),a("a-dropdown",{attrs:{placement:"topLeft",trigger:["click"]}},[a("span",[a("a-icon",{attrs:{type:"bars"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){e.form.model=t}}},[e._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要添加【"+t.name+"】到菜单？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return e.handleCreateMenuByCategory(t)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("添加到菜单")])])],1),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要删除【"+t.name+"】分类？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return e.handleDeleteCategory(t.id)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("删除")])])],1)],1)],1)],1),a("a-list-item-meta",[a("template",{slot:"description"},[e._v(" "+e._s(t.slug)+" ")]),a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name)+" ")])],2),a("span",[e._v(" "+e._s(t.description)+" ")])],2)}}],null,!1,825363121)}):a("a-table",{attrs:{columns:e.table.columns,dataSource:e.table.data,rowKey:function(e){return e.id},loading:e.table.loading,scrollToFirstRowOnChange:!0},scopedSlots:e._u([{key:"postCount",fn:function(t,r){return a("span",{staticClass:"cursor-pointer",on:{click:function(t){return e.handleQueryCategoryPosts(r)}}},[a("a-badge",{attrs:{count:r.postCount,numberStyle:{backgroundColor:"#00e0ff"},showZero:!0,overflowCount:9999}})],1)}},{key:"action",fn:function(t,r){return a("span",{},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.form.model=r}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:void(0);"}},[e._v("更多")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a-popconfirm",{attrs:{title:"你确定要添加【"+r.name+"】到菜单？",okText:"确定",cancelText:"取消"},on:{confirm:function(t){return e.handleCreateMenuByCategory(r)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("添加到菜单")])])],1),a("a-menu-item",{key:"2"},[a("a-popconfirm",{attrs:{title:"你确定要删除【"+r.name+"】分类？",okText:"确定",cancelText:"取消"},on:{confirm:function(t){return e.handleDeleteCategory(r.id)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[e._v("删除")])])],1)],1)],1)],1)}}])})],1)],1)],1),a("AttachmentSelectDrawer",{attrs:{title:"选择封面图"},on:{listenToSelect:e.handleSelectThumbnail},model:{value:e.thumbnailDrawer.visible,callback:function(t){e.$set(e.thumbnailDrawer,"visible",t)},expression:"thumbnailDrawer.visible"}})],1)},o=[],n=(a("7f7f"),a("ac0d")),i=a("fa25"),l=a("c405"),c=a("1f27"),s=[{title:"名称",ellipsis:!0,dataIndex:"name"},{title:"别名",ellipsis:!0,dataIndex:"slug"},{title:"描述",ellipsis:!0,dataIndex:"description"},{title:"文章数",dataIndex:"postCount",scopedSlots:{customRender:"postCount"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],d={components:{CategorySelectTree:i["a"]},mixins:[n["a"],n["b"]],data:function(){return{table:{columns:s,data:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 分类名称不能为空",trigger:["change"]},{max:255,message:"* 分类名称的字符长度不能超过 255",trigger:["change"]}],slug:[{max:255,message:"* 分类别名的字符长度不能超过 255",trigger:["change"]}],thumbnail:[{max:1023,message:"* 封面图链接的字符长度不能超过 1023",trigger:["change"]}],description:[{max:100,message:"* 分类描述的字符长度不能超过 100",trigger:["change"]}]}},thumbnailDrawer:{visible:!1}}},computed:{title:function(){return this.isUpdateMode?"修改分类":"添加分类"},isUpdateMode:function(){return!!this.form.model.id}},created:function(){this.handleListCategories()},methods:{handleListCategories:function(){var e=this;this.table.loading=!0,l["a"].listAll(!0).then((function(t){e.table.data=t.data.data})).finally((function(){setTimeout((function(){e.table.loading=!1}),200)}))},handleDeleteCategory:function(e){var t=this;l["a"].delete(e).then((function(e){t.$message.success("删除成功！"),t.form.model={}})).finally((function(){t.handleListCategories()}))},handleCreateOrUpdateCategory:function(){var e=this,t=this;t.$refs.categoryForm.validate((function(a){a&&(t.form.saving=!0,t.isUpdateMode?l["a"].update(t.form.model.id,t.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})):l["a"].create(e.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})))}))},handleSavedCallback:function(){if(this.form.errored)this.form.errored=!1;else{var e=this;e.form.model={},e.handleListCategories()}},handleCreateMenuByCategory:function(e){var t=this,a={name:e.name,url:"".concat(e.fullPath)};c["a"].create(a).then((function(e){t.$message.success("添加到菜单成功！")}))},handleSelectThumbnail:function(e){this.$set(this.form.model,"thumbnail",encodeURI(e.path)),this.thumbnailDrawer.visible=!1},handleQueryCategoryPosts:function(e){this.$router.push({name:"PostList",query:{categoryId:e.id}})}}},u=d,m=a("2877"),f=Object(m["a"])(u,r,o,!1,null,null,null);t["default"]=f.exports},c405:function(e,t,a){"use strict";a("7f7f"),a("ac6a");var r=a("9efd"),o="/api/admin/categories",n={};function i(e,t){t.forEach((function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((function(e){return i(e,t)})):e.isLeaf=!0}n.listAll=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"".concat(o),params:{more:e},method:"get"})},n.listTree=function(){return Object(r["a"])({url:"".concat(o,"/tree_view"),method:"get"})},n.create=function(e){return Object(r["a"])({url:o,data:e,method:"post"})},n.delete=function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"delete"})},n.get=function(e){return Object(r["a"])({url:"".concat(o,"/").concat(e),method:"get"})},n.update=function(e,t){return Object(r["a"])({url:"".concat(o,"/").concat(e),data:t,method:"put"})},n.concreteTree=function(e){var t={key:0,title:"top",children:[]};return i(t,e),t.children},t["a"]=n},fa25:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{attrs:{treeData:e.categoryTreeData,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:e.categoryIdString},on:{change:e.handleSelectionChange}})},o=[],n=(a("6b54"),a("7f7f"),a("c5f6"),{name:"CategorySelectTree",model:{prop:"categoryId",event:"change"},props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return this.categories.map((function(e){return{id:e.id,title:e.name,value:e.id.toString(),pId:e.parentId}}))},categoryIdString:function(){return this.categoryId.toString()}},methods:{handleSelectionChange:function(e,t,a){this.$log.debug("value: ",e),this.$log.debug("label: ",t),this.$log.debug("extra: ",a),this.$emit("change",e?parseInt(e):0)}}}),i=n,l=a("2877"),c=Object(l["a"])(i,r,o,!1,null,null,null);t["a"]=c.exports}}]);