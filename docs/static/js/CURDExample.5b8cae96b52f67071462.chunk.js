(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{342:function(e,t,i){var a=i(371);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(16).default)("8e1dea4a",a,!0,{})},343:function(e,t,i){var a=i(373);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(16).default)("54967073",a,!0,{})},370:function(e,t,i){"use strict";var a=i(342);i.n(a).a},371:function(e,t,i){(e.exports=i(15)(!1)).push([e.i,".curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},372:function(e,t,i){"use strict";var a=i(343);i.n(a).a},373:function(e,t,i){(e.exports=i(15)(!1)).push([e.i,".curd-example-demo .ivu-poptip-rel {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.curd-example-demo .ivu-poptip-body-content {\n  overflow: visible;\n}\n.curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},411:function(e,t,i){"use strict";i.r(t);const a=[{title:"姓名",key:"name",width:100},{title:"年龄",key:"age",width:90},{title:"性别",key:"gender",width:90},{title:"出生日期",key:"birthday",width:150},{title:"省",slot:"province",width:230,poptip:{title:"编辑地址",displayField:{type:"Select",api:"/selectApi",model:"province",inline:!0,cache:!0,disabled:!0,width:100,size:"small"},formFields:[{type:"Select",api:"/selectApi",model:"province",inline:!0,cache:!0,width:100},{type:"Button",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},apiParams:["name","province"],inline:!0}]}},{title:"城市",slot:"city",width:230,formFields:[{type:"Select",api:"/selectApi",model:"city",inline:!0,cache:!0,width:100},{type:"Button",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},apiParams:["name","province","city"],inline:!0}]},{title:"地址",slot:"address",width:200,poptip:{title:"编辑地址",formFields:[{type:"Input",model:"address",placeholder:"请输入地址",rules:[{type:"string",required:!0}],width:250,inline:!0},{type:"Button",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},apiParams:["name","address","test"],inline:!0}]}},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"editDialog"},inline:!0},{type:"Button",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"ajax",api:"/curdToBlack"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Button",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"ajax",api:"/curdToWhite"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Button",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"ajax",api:"/curdDelete"},apiParams:["name"],inline:!0},{type:"Button",model:"detailRoute",text:"详情",subtype:"primary",size:"small",action:{type:"route"},apiParams:["name"],inline:!0}]}],l=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",province:"Beijing",city:"Beijing",address:"北京市朝阳区芍药居",status:"1",detailRoute:{path:"/home",query:{name:"王小明"}}},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",province:"Beijing",city:"Beijing",address:"北京市海淀区西二旗",status:"1",detailRoute:{path:"/home",query:{name:"张小刚"}}},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",province:"Beijing",city:"Beijing",address:"上海市浦东新区世纪大道",status:"2",detailRoute:{path:"/home",query:{name:"李小红"}}},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",province:"Beijing",city:"Beijing",address:"深圳市南山区深南大道",status:"1",detailRoute:{path:"/home",query:{name:"周小伟"}}},{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",province:"Beijing",city:"Beijing",address:"北京市朝阳区芍药居",status:"1",detailRoute:{path:"/home",query:{name:"王小明"}}},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",province:"Beijing",city:"Beijing",address:"北京市海淀区西二旗",status:"1",detailRoute:{path:"/home",query:{name:"张小刚"}}},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",province:"Beijing",city:"Beijing",address:"上海市浦东新区世纪大道",status:"2",detailRoute:{path:"/home",query:{name:"李小红"}}},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",province:"Beijing",city:"Beijing",address:"深圳市南山区深南大道",status:"1",detailRoute:{path:"/home",query:{name:"周小伟"}}}],n=[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",optionsType:"image",options:"/checkboxCardApi",required:!0},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},inline:!0}];var o={data:()=>({columns:a,data:l,editModel:{},editFormFields:n,editDialogOpeon:!1,paramsContainer:{test:"xxx"}}),methods:{handleCreateButtonClick(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent(e,t,i){this[e.name](t,i,e.type)},editDialog(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},ajaxSuccess(){this.editDialogOpeon=!1}}},s=(i(372),i(0)),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"curd-example-demo"},[i("h3",{staticClass:"curd-example-demo-header"},[i("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),i("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(a){var l=a.row,n=a.index;return[i("Form",{key:t.slot,attrs:{model:JSON.parse(JSON.stringify(l))}},[t.poptip?i("Poptip",{key:t.slot,attrs:{placement:"left-start"}},[t.poptip.displayField?[i("FieldGenerator",{attrs:{"params-container":e.paramsContainer,field:t.poptip.displayField}})]:[i("span",[e._v(e._s(l[t.slot]))])],e._v(" "),i("Icon",{attrs:{type:"ios-create-outline",size:"20"}}),e._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},e._l(t.poptip.formFields,function(t,a){return i("FieldGenerator",{key:a,attrs:{"params-container":e.paramsContainer,field:t}})}),1)],2):e._e(),e._v(" "),t.formFields?i("div",e._l(t.formFields,function(t,a){return i("FieldGenerator",{key:a,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,n)}}})}),1):e._e()],1)]}}})],null,!0)}),e._v(" "),i("Modal",{attrs:{title:"编辑","footer-hide":"",width:"900"},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[i("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel,"params-container":e.paramsContainer},on:{"on-button-event":function(t){return e.handleButtonEvent(t)}}})],1)],1)},[],!1,null,null,null);t.default=r.exports},412:function(e,t,i){"use strict";i.r(t);const a=[{title:"姓名",key:"name",width:150},{title:"年龄",key:"age",width:90},{title:"性别",key:"gender",width:90},{title:"出生日期",key:"birthday",width:150},{title:"地址",key:"address"},{title:"图片",slot:"city",width:150,formFields:[{type:"Carousel",valueAsOptions:!0,model:"city",options:[]}]},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"edit"},inline:!0},{type:"Button",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"event",name:"black"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Button",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"event",name:"white"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Button",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"event",name:"delete"},inline:!0}]}],l=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",address:"北京市朝阳区芍药居",status:"1",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",address:"北京市海淀区西二旗",status:"1",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",address:"上海市浦东新区世纪大道",status:"2",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",address:"深圳市南山区深南大道",status:"1",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]}],n=[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"Submit",subtype:"primary",text:"保存"}];var o={data:()=>({columns:a,data:l,editModel:{},editFormFields:n,editDialogOpeon:!1}),methods:{handleCreateButtonClick(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent(e,t,i){this[e.name](t,i)},edit(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},delete(e,t){this.data.splice(t,1)},handleSave(){this.$refs.FormGenerator.submit().then(()=>{if("add"===this.editModel.type)return this.editModel.type="",void this.data.unshift(this.editModel);this.data.splice(this.editModel.index,1,this.editModel),this.editModel.index=-1,this.editDialogOpeon=!1}).catch(e=>{console.log(e)})},black(e,t){console.log(e,t)},white(e,t){console.log(e,t)}}},s=(i(370),i(0)),r=Object(s.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"curd-example-demo"},[i("h3",{staticClass:"curd-example-demo-header"},[i("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),i("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(a){var l=a.row,n=a.index;return[i("Form",{key:t.slot,attrs:{model:l}},e._l(t.formFields,function(t,a){return i("FieldGenerator",{key:a,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,l,n)}}})}),1)]}}})],null,!0)}),e._v(" "),i("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[i("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}})],1)],1)},[],!1,null,null,null);t.default=r.exports}}]);