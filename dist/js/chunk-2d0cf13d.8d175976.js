(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf13d"],{"61d0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",[a("a-row",{attrs:{gutter:12,type:"flex",align:"middle"}},[a("a-col",{staticClass:"pb-3",attrs:{span:24}},[a("a-card",{attrs:{bordered:!1,bodyStyle:{padding:"16px"}}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"关键词："}},[a("a-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery()}},model:{value:e.queryParam.keyword,callback:function(t){e.$set(e.queryParam,"keyword",t)},expression:"queryParam.keyword"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"存储位置："}},[a("a-select",{attrs:{loading:e.typesLoading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.queryParam.attachmentType,callback:function(t){e.$set(e.queryParam,"attachmentType",t)},expression:"queryParam.attachmentType"}},e._l(e.types,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(e._s(e.attachmentType[t].text))])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"文件类型："}},[a("a-select",{attrs:{loading:e.mediaTypesLoading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.queryParam.mediaType,callback:function(t){e.$set(e.queryParam,"mediaType",t)},expression:"queryParam.mediaType"}},e._l(e.mediaTypes,(function(t,n){return a("a-select-option",{key:n,attrs:{value:t}},[e._v(e._s(t))])})),1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-space",[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleQuery()}}},[e._v("查询")]),a("a-button",{on:{click:function(t){return e.handleResetParam()}}},[e._v("重置")])],1)],1)])],1)],1)],1),a("div",{staticClass:"table-operator mb-0"},[a("a-button",{attrs:{type:"primary",icon:"cloud-upload"},on:{click:function(){return e.uploadVisible=!0}}},[e._v("上传")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:!e.supportMultipleSelection,expression:"!supportMultipleSelection"}],attrs:{icon:"select"},on:{click:e.handleMultipleSelection}},[e._v(" 批量操作 ")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:e.supportMultipleSelection,expression:"supportMultipleSelection"}],attrs:{type:"danger",icon:"delete"},on:{click:e.handleDeleteAttachmentInBatch}},[e._v(" 删除 ")]),a("a-button",{directives:[{name:"show",rawName:"v-show",value:e.supportMultipleSelection,expression:"supportMultipleSelection"}],attrs:{icon:"close"},on:{click:e.handleCancelMultipleSelection}},[e._v(" 取消 ")])],1)])],1),a("a-col",{attrs:{span:24}},[a("a-list",{attrs:{grid:{gutter:12,xs:2,sm:2,md:4,lg:6,xl:6,xxl:6},dataSource:e.formattedDatas,loading:e.listLoading},scopedSlots:e._u([{key:"renderItem",fn:function(t,n){return a("a-list-item",{key:n},[a("a-card",{attrs:{bodyStyle:{padding:0},hoverable:""},on:{click:function(a){return e.handleShowDetailDrawer(t)},contextmenu:function(a){return a.preventDefault(),e.handleContextMenu(a,t)}}},[a("div",{staticClass:"attach-thumb"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.handleJudgeMediaType(t),expression:"!handleJudgeMediaType(item)"}]},[e._v("当前格式不支持预览")]),a("img",{directives:[{name:"show",rawName:"v-show",value:e.handleJudgeMediaType(t),expression:"handleJudgeMediaType(item)"}],attrs:{src:t.thumbPath,loading:"lazy"}})]),a("a-card-meta",{staticClass:"p-3"},[a("ellipsis",{attrs:{slot:"description",length:e.isMobile()?12:16,tooltip:""},slot:"description"},[e._v(e._s(t.name))])],1),a("a-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.supportMultipleSelection,expression:"supportMultipleSelection"}],staticClass:"select-attachment-checkbox",style:e.getCheckStatus(t.id)?e.selectedAttachmentStyle:"",attrs:{checked:e.getCheckStatus(t.id)},on:{click:function(a){return e.handleAttachmentSelectionChanged(a,t)}}})],1)],1)}}])})],1)],1),a("div",{staticClass:"page-wrapper"},[a("a-pagination",{staticClass:"pagination",attrs:{current:e.pagination.page,total:e.pagination.total,defaultPageSize:e.pagination.size,pageSizeOptions:["18","36","54","72","90","108"],showSizeChanger:"",showLessItems:""},on:{change:e.handlePaginationChange,showSizeChange:e.handlePaginationChange}})],1),a("a-modal",{attrs:{title:"上传附件",footer:null,afterClose:e.onUploadClose,destroyOnClose:""},model:{value:e.uploadVisible,callback:function(t){e.uploadVisible=t},expression:"uploadVisible"}},[a("FilePondUpload",{ref:"upload",attrs:{uploadHandler:e.uploadHandler}})],1),e.selectAttachment?a("AttachmentDetailDrawer",{attrs:{attachment:e.selectAttachment,addToPhoto:!0},on:{delete:function(t){return e.handleListAttachments()}},model:{value:e.drawerVisible,callback:function(t){e.drawerVisible=t},expression:"drawerVisible"}}):e._e()],1)},i=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("28a5"),a("7f7f"),a("55dd"),a("ade3")),o=a("ac0d"),l=a("680a"),c=a("5bcf"),r=a("a796"),d=a("2f62");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={components:{PageView:l["c"],AttachmentDetailDrawer:c["a"]},mixins:[o["a"],o["b"]],data:function(){return{attachmentType:r["a"].type,listLoading:!0,uploadVisible:!1,supportMultipleSelection:!1,selectedAttachmentCheckbox:{},batchSelectedAttachments:[],selectAttachment:{},attachments:[],mediaTypes:[],mediaTypesLoading:!1,types:[],typesLoading:!1,editable:!1,pagination:{page:1,size:18,sort:null,total:1},queryParam:{page:0,size:18,sort:null,keyword:null,mediaType:null,attachmentType:null},drawerVisible:!1,uploadHandler:r["a"].upload}},computed:{formattedDatas:function(){var e=this;return this.attachments.map((function(t){return t.typeProperty=e.attachmentType[t.type],t}))},selectedAttachmentStyle:function(){return{border:"2px solid ".concat(this.color())}}},created:function(){this.handleListAttachments(),this.handleListMediaTypes(),this.handleListTypes()},destroyed:function(){this.drawerVisible&&(this.drawerVisible=!1)},beforeRouteLeave:function(e,t,a){this.drawerVisible&&(this.drawerVisible=!1),a()},methods:u(u({},Object(d["c"])(["color"])),{},{handleListAttachments:function(){var e=this;this.listLoading=!0,this.queryParam.page=this.pagination.page-1,this.queryParam.size=this.pagination.size,this.queryParam.sort=this.pagination.sort,r["a"].query(this.queryParam).then((function(t){e.attachments=t.data.data.content,e.pagination.total=t.data.data.total})).finally((function(){setTimeout((function(){e.listLoading=!1}),200)}))},handleListMediaTypes:function(){var e=this;this.mediaTypesLoading=!0,r["a"].getMediaTypes().then((function(t){e.mediaTypes=t.data.data})).finally((function(){setTimeout((function(){e.mediaTypesLoading=!1}),200)}))},handleListTypes:function(){var e=this;this.typesLoading=!0,r["a"].getTypes().then((function(t){e.types=t.data.data})).finally((function(){setTimeout((function(){e.typesLoading=!1}),200)}))},handleShowDetailDrawer:function(e){this.selectAttachment=e,this.supportMultipleSelection?this.drawerVisible=!1:this.drawerVisible=!0},handleContextMenu:function(e,t){var a=this;return this.$contextmenu({items:[{label:"".concat(this.handleJudgeMediaType(t)?"复制图片链接":"复制文件链接"),onClick:function(){var e="".concat(encodeURI(t.path));a.$copyText(e).then((function(e){a.$log.debug("copy",e),a.$message.success("复制成功！")})).catch((function(e){a.$log.debug("copy.err",e),a.$message.error("复制失败！")}))},divided:!0},{disabled:!this.handleJudgeMediaType(t),label:"复制 Markdown 格式链接",onClick:function(){var e="![".concat(t.name,"](").concat(encodeURI(t.path),")");a.$copyText(e).then((function(e){a.$log.debug("copy",e),a.$message.success("复制成功！")})).catch((function(e){a.$log.debug("copy.err",e),a.$message.error("复制失败！")}))}}],event:e,minWidth:210}),!1},handlePaginationChange:function(e,t){this.$log.debug("Current: ".concat(e,", PageSize: ").concat(t)),this.pagination.page=e,this.pagination.size=t,this.handleListAttachments()},handleResetParam:function(){this.queryParam.keyword=null,this.queryParam.mediaType=null,this.queryParam.attachmentType=null,this.handlePaginationChange(1,this.pagination.size),this.handleListMediaTypes(),this.handleListTypes()},handleQuery:function(){this.handlePaginationChange(1,this.pagination.size)},onUploadClose:function(){this.$refs.upload.handleClearFileList(),this.handlePaginationChange(1,this.pagination.size),this.handleListMediaTypes(),this.handleListTypes()},handleJudgeMediaType:function(e){var t=e.mediaType;if(t){var a=t.split("/")[0];return"image"===a}return!1},getCheckStatus:function(e){return this.selectedAttachmentCheckbox[e]||!1},handleMultipleSelection:function(){var e=this;this.supportMultipleSelection=!0,this.drawerVisible=!1,this.attachments.forEach((function(t){e.$set(e.selectedAttachmentCheckbox,t.id,!1)}))},handleCancelMultipleSelection:function(){for(var e in this.supportMultipleSelection=!1,this.drawerVisible=!1,this.batchSelectedAttachments=[],this.selectedCheckbox)this.$set(this.selectedAttachmentCheckbox,e,!1)},handleAttachmentSelectionChanged:function(e,t){var a=e.target.checked||!1;if(a)this.$set(this.selectedAttachmentCheckbox,t.id,!0),this.batchSelectedAttachments.push(t.id);else{this.$set(this.selectedAttachmentCheckbox,t.id,!1);var n=this.batchSelectedAttachments.indexOf(t.id);this.batchSelectedAttachments.splice(n,1)}},handleDeleteAttachmentInBatch:function(){var e=this;this.batchSelectedAttachments.length<=0?this.$message.warn("你还未选择任何附件，请至少选择一个！"):this.$confirm({title:"确定要批量删除选中的附件吗?",content:"一旦删除不可恢复，请谨慎操作",onOk:function(){r["a"].deleteInBatch(e.batchSelectedAttachments).then((function(t){e.handleCancelMultipleSelection(),e.$message.success("删除成功")})).finally((function(){e.handleListAttachments()}))},onCancel:function(){}})}})},m=p,y=a("2877"),g=Object(y["a"])(m,n,i,!1,null,null,null);t["default"]=g.exports}}]);