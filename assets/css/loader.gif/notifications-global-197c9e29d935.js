"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-global"],{86072:(e,t,o)=>{o.d(t,{a:()=>l,n:()=>s});var i=o(97797);function s(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function l(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,i.on)("deprecatedAjaxError","[data-remote]",function(e){let{error:t,text:o}=e.detail;e.currentTarget===e.target&&"abort"!==t&&"canceled"!==t&&(/<html/.test(o)?(s(),e.stopImmediatePropagation()):setTimeout(function(){e.defaultPrevented||s()},0))}),(0,i.on)("deprecatedAjaxSend","[data-remote]",function(){l()}),(0,i.on)("click",".js-ajax-error-dismiss",function(){l()})},28061:(e,t,o)=>{var i=o(39595),s=o(86072),l=o(60481);function a(e,t,o,i){var s,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(l<3?s(a):l>3?s(t,o,a):s(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a}let n=class NotificationsListSubscriptionFormElement extends HTMLElement{async submitCustomForm(e){await this.submitForm(e),this.closeMenu()}async submitForm(e){e.preventDefault(),(0,s.a)();let t=e.currentTarget,o=new FormData(t),i=await self.fetch(t.action,{method:t.method,body:o,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}});if(!i.ok){(0,s.n)();return}let l=await i.json(),a=o.get("do");"string"==typeof a&&this.updateCheckedState(a),"string"==typeof a&&this.updateMenuButtonCopy(a),this.updateSocialCount(l.count),this.applyInputsCheckedPropertiesToAttributesForNextFormReset(),this.closeMenu()}updateMenuButtonCopy(e){this.unwatchButtonCopy.hidden=!("subscribed"===e||"custom"===e),this.stopIgnoringButtonCopy.hidden="ignore"!==e,this.watchButtonCopy.hidden=!("subscribed"!==e&&"custom"!==e&&"ignore"!==e)}applyInputsCheckedPropertiesToAttributesForNextFormReset(){for(let e of[...this.threadTypeCheckboxes])e.toggleAttribute("checked",e.checked)}updateCheckedState(e){for(let t of this.subscriptionButtons)t.setAttribute("aria-checked",t.value===e?"true":"false");if("custom"===e)this.customButton.setAttribute("aria-checked","true");else{for(let e of(this.customButton.setAttribute("aria-checked","false"),[...this.threadTypeCheckboxes]))(0,l.m$)(e,!1);if(void 0!==this.subscriptionsContainer){for(let e=0;e<this.subscriptionsLabels.length;e++)this.subscriptionsLabels[e].remove();void 0!==this.subscriptionsSubtitle&&this.subscriptionsSubtitle.toggleAttribute("hidden",!1),this.subscriptionsContainer.textContent=""}}}updateSocialCount(e){this.socialCount&&(this.socialCount.textContent=e,this.socialCount.setAttribute("aria-label",`${this.pluralizeUsers(e)} watching this repository`))}pluralizeUsers(e){return 1===parseInt(e)?"1 user is":`${e} users are`}handleDialogLabelToggle(e){let t=e.detail.wasChecked,o=e.detail.toggledLabelId,i=e.detail.templateLabelElementClone;if(t){for(let e=0;e<this.subscriptionsLabels.length;e++)if(this.subscriptionsLabels[e].getAttribute("data-label-id")===o){this.subscriptionsLabels[e].remove();break}}else i.removeAttribute("hidden"),i.setAttribute("data-targets","notifications-list-subscription-form.subscriptionsLabels"),this.subscriptionsContainer.appendChild(i)}openCustomDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.enableApplyButtonAndCheckbox(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!1),setTimeout(()=>{this.customDialog.querySelector("input[type=checkbox][autofocus]")?.focus()},0)}enableApplyButtonAndCheckbox(){this.customDialog.querySelectorAll('[data-type="label"]:not([hidden])').length>0&&(this.customSubmit.removeAttribute("disabled"),this.threadTypeCheckboxes[0].checked=!0)}closeCustomDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0),setTimeout(()=>{this.customButton.focus()},0)}resetFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation();for(let e=0;e<this.subscriptionsLabels.length;e++){let t=this.subscriptionsLabels[e].getAttribute("data-label-id");for(let e=0;e<this.dialogLabelItems.length;e++)if(this.dialogLabelItems[e].labelId===t){this.dialogLabelItems[e].setCheckedForDropdownLabel(!1);break}}for(let e=0;e<Object.keys(this.lastAppliedLabels).length;e++){let t=Object.keys(this.lastAppliedLabels)[e];for(let e=0;e<this.dialogLabelItems.length;e++)if(this.dialogLabelItems[e].labelId===t){this.dialogLabelItems[e].setCheckedForDropdownLabel(!0);break}}this.subscriptionsContainer.replaceChildren(...Object.values(this.lastAppliedLabels)),this.closeFilterLabelsDialog(e)}openFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!0),this.filterLabelsDialog.toggleAttribute("hidden",!1),setTimeout(()=>{this.filterLabelsDialog.querySelector("input[type=checkbox][autofocus]")?.focus()},0)}closeFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.customDialog.toggleAttribute("hidden",!1),this.filterLabelsDialog.toggleAttribute("hidden",!0)}applyFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.saveCurrentLabelsState(),this.hideFilterSubtitle(),this.enableIssuesCheckbox(),this.closeFilterLabelsDialog(e)}enableIssuesCheckbox(){let e=Object.keys(this.lastAppliedLabels).length>0;e&&this.threadTypeCheckboxes.length>0&&(this.threadTypeCheckboxes[0].checked=e),this.threadTypeCheckboxesUpdated()}hideFilterSubtitle(){let e=Object.keys(this.lastAppliedLabels).length>0;this.subscriptionsSubtitle.toggleAttribute("hidden",e)}saveCurrentLabelsState(){this.lastAppliedLabels={},this.labelInputs.textContent="";for(let e=0;e<this.subscriptionsLabels.length;e++){let t=this.subscriptionsLabels[e].getAttribute("data-label-id");t&&(this.lastAppliedLabels[t]=this.subscriptionsLabels[e].cloneNode(!0),this.appendLabelToFormInput(t))}}appendLabelToFormInput(e){let t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name","labels[]"),t.setAttribute("value",e),this.labelInputs.appendChild(t)}detailsToggled(){this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0)}submitCustom(e){e.preventDefault(),this.details.toggleAttribute("open",!1)}threadTypeCheckboxesUpdated(){let e=!this.threadTypeCheckboxes.some(e=>e.checked);this.customSubmit.disabled=e}closeMenu(){this.details.toggleAttribute("open",!1)}constructor(...e){super(...e),this.lastAppliedLabels={}}};function r(e,t,o,i){var s,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(l<3?s(a):l>3?s(t,o,a):s(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a}a([i.aC],n.prototype,"details",void 0),a([i.aC],n.prototype,"menu",void 0),a([i.aC],n.prototype,"customButton",void 0),a([i.aC],n.prototype,"customDialog",void 0),a([i.aC],n.prototype,"filterLabelsDialog",void 0),a([i.zV],n.prototype,"subscriptionButtons",void 0),a([i.zV],n.prototype,"subscriptionsLabels",void 0),a([i.aC],n.prototype,"labelInputs",void 0),a([i.aC],n.prototype,"subscriptionsSubtitle",void 0),a([i.aC],n.prototype,"socialCount",void 0),a([i.aC],n.prototype,"unwatchButtonCopy",void 0),a([i.aC],n.prototype,"stopIgnoringButtonCopy",void 0),a([i.aC],n.prototype,"watchButtonCopy",void 0),a([i.zV],n.prototype,"threadTypeCheckboxes",void 0),a([i.aC],n.prototype,"customSubmit",void 0),a([i.aC],n.prototype,"subscriptionsContainer",void 0),a([i.zV],n.prototype,"dialogLabelItems",void 0),n=a([i.p_],n);let u=class NotificationsTeamSubscriptionFormElement extends HTMLElement{closeMenu(){this.details.toggleAttribute("open",!1)}};function c(e,t,o,i){var s,l=arguments.length,a=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(l<3?s(a):l>3?s(t,o,a):s(t,o))||a);return l>3&&a&&Object.defineProperty(t,o,a),a}r([i.aC],u.prototype,"details",void 0),u=r([i.p_],u);let NotificationsDialogLabelItemElement=class NotificationsDialogLabelItemElement extends HTMLElement{toggleDropdownLabel(e){if(e.preventDefault(),e.stopPropagation(),this.label){let e="true"===this.label.getAttribute("aria-checked");this.setCheckedForDropdownLabel(!e),this.dispatchEvent(new CustomEvent("notifications-dialog-label-toggled",{detail:{wasChecked:e,toggledLabelId:this.labelId,templateLabelElementClone:this.hiddenLabelTemplate.cloneNode(!0)},bubbles:!0}))}}setCheckedForDropdownLabel(e){this.label.setAttribute("aria-checked",e.toString())}};NotificationsDialogLabelItemElement.attrPrefix="",c([i.aC],NotificationsDialogLabelItemElement.prototype,"label",void 0),c([i.aC],NotificationsDialogLabelItemElement.prototype,"hiddenLabelTemplate",void 0),c([i.aC],NotificationsDialogLabelItemElement.prototype,"hiddenCheckboxInput",void 0),c([i.CF],NotificationsDialogLabelItemElement.prototype,"labelId",void 0),NotificationsDialogLabelItemElement=c([i.p_],NotificationsDialogLabelItemElement)},60481:(e,t,o)=>{o.d(t,{Cy:()=>n,K3:()=>c,Z8:()=>r,k_:()=>l,lK:()=>p,m$:()=>a});var i=o(92338);function s(e,t,o){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:o}))}function l(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,i.A)(t)),s(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}s(e,"change",!1)}function n(e,t){for(let o in t){let i=t[o],s=e.elements.namedItem(o);s instanceof HTMLInputElement?s.value=i:s instanceof HTMLTextAreaElement&&(s.value=i)}}function r(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),o=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==o&&"reset"!==o||e.isContentEditable}function u(e){return new URLSearchParams(e)}function c(e,t){let o=new URLSearchParams(e.search);for(let[e,i]of u(t))o.append(e,i);return o.toString()}function p(e){return u(new FormData(e)).toString()}},92338:(e,t,o)=>{function i(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let o=s(t);if(e.name){let i=e.matches("input[type=submit]")?"Submit":"",s=e.value||i;o||((o=document.createElement("input")).type="hidden",o.classList.add("js-submit-button-value"),t.prepend(o)),o.name=e.name,o.value=s}else o&&o.remove()}function s(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}o.d(t,{A:()=>i,C:()=>s})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js"],()=>t(28061)),e.O()}]);
//# sourceMappingURL=notifications-global-d14f0d462cdb.js.map