webpackJsonp([1,6],{"3UNf":function(t,e){t.exports=function(t,e,r){var a=new Blob([t],{type:r||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,e);else{var s=window.URL.createObjectURL(a),n=document.createElement("a");n.style.display="none",n.href=s,n.setAttribute("download",e),void 0===n.download&&n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(s)}}},Yd0n:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mtWM"),s=r.n(a),n=r("yL53"),u=r("3UNf"),i="http://0.0.0.0:5000",o={data:function(){return{sculptures:[],addSculptureForm:{name:"",target_frequencies:""},editForm:{id:"",name:"",target_frequencies:""},message:"",showMessage:!1}},components:{alert:n.default},methods:{getSculptures:function(){var t=this;s.a.get("http://0.0.0.0:5000/sculptures").then(function(e){t.sculptures=e.data.sculptures}).catch(function(t){console.error(t)})},getSculpturePetal:function(t){var e=i+"/sculptures/"+t+"/generate_petal";console.log("request: "+e),console.log("request-type: generate_petal"),s.a.get(e).then(function(t){console.log("contact with petal"),console.log(t),console.log("---")}).catch(function(t){console.error(t)})},getSculptureFrequencies:function(t){var e=i+"/sculptures/"+t+"/check_current_frequencies";console.log("request: "+e),console.log("request-type: check_current_frequencies"),s.a.get(e).then(function(t){console.log("contact with frequencies"),console.log(t),console.log("---")}).catch(function(t){console.error(t)})},getSculptureOptimize:function(t){var e=i+"/sculptures/"+t+"/optimize";console.log("request: "+e),console.log("request-type: optimize"),s.a.get(e).then(function(t){console.log("contact with optimize")}).catch(function(t){console.error(t)})},getSculptureDXF:function(t){var e=i+"/sculptures/"+t+"/get_dxf";s.a.get(e).then(function(t){console.log("contact with dxf"),u(t.data,"test.dxf")}).catch(function(t){console.error(t)})},getSculpturePDF:function(t){var e=i+"/sculptures/"+t+"/get_pdf";s.a.get(e).then(function(t){console.log("contact with pdf"),u(t.data,"test.pdf")}).catch(function(t){console.error(t)})},addSculpture:function(t){var e=this;s.a.post("http://0.0.0.0:5000/sculptures",t).then(function(){e.getSculptures(),e.message="sculpture added!",e.showMessage=!0}).catch(function(t){console.error(t),e.getSculptures()})},updateSculpture:function(t,e){var r=this,a=i+"/sculptures/"+e;s.a.put(a,t).then(function(){r.getSculptures(),r.message="sculpture updated!",r.showMessage=!0}).catch(function(t){console.error(t),r.getSculptures()})},removeSculpture:function(t){var e=this,r=i+"/sculptures/"+t;s.a.delete(r).then(function(){e.getSculptures(),e.message="sculpture removed!",e.showMessage=!0}).catch(function(t){console.error(t),e.getSculptures()})},initForm:function(){this.addSculptureForm.name="",this.addSculptureForm.target_frequencies="",this.editForm.id="",this.editForm.name="",this.editForm.target_frequencies=""},onSubmit:function(t){t.preventDefault(),this.$refs.addSculptureModal.hide();var e={name:this.addSculptureForm.name,target_frequencies:this.addSculptureForm.target_frequencies.split(",").map(Number).sort()};this.addSculpture(e),this.initForm()},onSubmitUpdate:function(t){t.preventDefault(),this.$refs.editSculptureModal.hide();var e={name:this.editForm.name,target_frequencies:this.editForm.target_frequencies.split(",").map(Number).sort()};this.updateSculpture(e,this.editForm.id)},onReset:function(t){t.preventDefault(),this.$refs.addSculptureModal.hide(),this.initForm()},onResetUpdate:function(t){t.preventDefault(),this.$refs.editSculptureModal.hide(),this.initForm(),this.getSculptures()},onDeleteSculpture:function(t){this.removeSculpture(t.id)},editSculpture:function(t){this.editForm=t}},created:function(){this.getSculptures()}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-10"},[r("h1",[t._v("sculptures")]),t._v(" "),r("hr"),r("br"),r("br"),t._v(" "),t.showMessage?r("alert",{attrs:{message:t.message}}):t._e(),t._v(" "),r("br"),r("br"),t._v(" "),r("div",t._l(t.sculptures,function(e,a){return r("div",{key:a,staticClass:"card text-center",staticStyle:{"margin-bottom":"2em"}},[r("div",{staticClass:"card-header"},[r("ul",{staticClass:"nav nav-pills card-header-pills justify-content-end"},[r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.sculpture-update-modal",modifiers:{"sculpture-update-modal":!0}}],staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(r){return t.editSculpture(e)}}},[t._v("\n                  Update\n              ")]),t._v(" "),r("span",{staticStyle:{width:"1em"}}),t._v(" "),r("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(r){return t.onDeleteSculpture(e)}}},[t._v("\n                  Delete\n              ")])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),r("h5",{staticClass:"card-title"},[t._v("Target Frequencies")]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("Frequencies: "+t._s(e.target_frequencies))]),t._v(" "),r("h5",{staticClass:"card-title"},[t._v("Results")]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("Fit: "+t._s(e.results_store.fit))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("Frequencies: "+t._s(e.results_store.frequencies))]),t._v(" "),r("h6",{staticClass:"card-title"},[t._v("Material")]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("Gauge "+t._s(e.material_params.gauge)+", "+t._s(e.material_params.material)+" ("+t._s(e.material_params.density)+" density)")]),t._v(" "),r("p",{staticClass:"card-text"},[t._v(" Mechanical Properties: "+t._s(e.material_params.modulus)+", "+t._s(e.material_params.ratio))]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return t.getSculpturePetal(e.id)}}},[t._v("\n                Generate Petal\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return t.getSculptureFrequencies(e.id)}}},[t._v("\n                Check Frequencies\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return t.getSculptureOptimize(e.id)}}},[t._v("\n                Optimize Petal\n            ")])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("ul",{staticClass:"nav nav-pills card-header-pills justify-content-end"},[r("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(r){return t.getSculptureDXF(e.id)}}},[t._v("\n                  Download DXF\n              ")]),t._v(" "),r("span",{staticStyle:{width:"1em"}}),t._v(" "),r("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button"},on:{click:function(r){return t.getSculpturePDF(e.id)}}},[t._v("\n                  Download PDF\n              ")])])])])}),0)],1)]),t._v(" "),r("b-modal",{ref:"addSculptureModal",attrs:{id:"sculpture-modal",name:"Add a new sculpture","hide-footer":""}},[r("b-form",{staticClass:"w-100",on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"form-name-group",label:"Name:","label-for":"form-name-input"}},[r("b-form-input",{attrs:{id:"form-name-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.addSculptureForm.name,callback:function(e){t.$set(t.addSculptureForm,"name",e)},expression:"addSculptureForm.name"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"form-target_frequencies-group",label:"Targets:","label-for":"form-target_frequencies-input"}},[r("b-form-input",{attrs:{id:"form-target_frequencies-input",type:"text",required:"",placeholder:"Enter target_frequencies"},model:{value:t.addSculptureForm.target_frequencies,callback:function(e){t.$set(t.addSculptureForm,"target_frequencies",e)},expression:"addSculptureForm.target_frequencies"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),t._v(" "),r("b-modal",{ref:"editSculptureModal",attrs:{id:"sculpture-update-modal",name:"Update","hide-footer":""}},[r("b-form",{staticClass:"w-100",on:{submit:t.onSubmitUpdate,reset:t.onResetUpdate}},[r("b-form-group",{attrs:{id:"form-name-edit-group",label:"Name:","label-for":"form-name-edit-input"}},[r("b-form-input",{attrs:{id:"form-name-edit-input",type:"text",required:"",placeholder:"Enter name"},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"form-target_frequencies-edit-group",label:"Targets:","label-for":"form-target_frequencies-edit-input"}},[r("b-form-input",{attrs:{id:"form-target_frequencies-edit-input",type:"text",required:"",placeholder:"Enter target_frequencies"},model:{value:t.editForm.target_frequencies,callback:function(e){t.$set(t.editForm,"target_frequencies",e)},expression:"editForm.target_frequencies"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")]),t._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]},l=r("VU/8")(o,c,!1,null,null,null);e.default=l.exports},yL53:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-alert",{attrs:{variant:"success",show:""}},[this._v(this._s(this.message))]),this._v(" "),e("br")],1)},staticRenderFns:[]},s=r("VU/8")({props:["message"]},a,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=1.aee7e22ab753c959c506.js.map