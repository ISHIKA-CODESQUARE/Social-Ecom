!function(t){var e={};function o(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=20)}({0:function(t,e,o){"use strict";t.exports=function(t){"function"==typeof t?t():"object"==typeof t&&Object.keys(t).forEach((function(e){"function"==typeof t[e]&&t[e]()}))}},1:function(t,e,o){"use strict";var a=o(2);function n(t){return $("#quickViewModal").hasClass("show")&&!$(".product-set").length?$(t).closest(".modal-content").find(".product-quickview").data("pid"):$(".product-set-detail").length||$(".product-set").length?$(t).closest(".product-detail").find(".product-id").text():$('.product-detail:not(".bundle-item")').data("pid")}function i(t){var e;if(t&&$(".set-items").length)e=$(t).closest(".product-detail").find(".quantity-select");else if(t&&$(".product-bundle").length){var o=$(t).closest(".modal-footer").find(".quantity-select"),a=$(t).closest(".bundle-footer").find(".quantity-select");e=void 0===o.val()?a:o}else e=$(".quantity-select");return e}function r(t){return i(t).val()}function d(t,e){e.find(".product-options").empty().html(t)}function s(t,e){var o,a=e.parents(".choose-bonus-product-dialog").length>0;(t.product.variationAttributes&&(!function(t,e,o){var a=["color"];t.forEach((function(t){a.indexOf(t.id)>-1?function(t,e,o){t.values.forEach((function(a){var n=e.find('[data-attr="'+t.id+'"] [data-attr-value="'+a.value+'"]'),i=n.parent();a.selected?(n.addClass("selected"),n.siblings(".selected-assistive-text").text(o.assistiveSelectedText)):(n.removeClass("selected"),n.siblings(".selected-assistive-text").empty()),a.url?i.attr("data-url",a.url):i.removeAttr("data-url"),n.removeClass("selectable unselectable"),n.addClass(a.selectable?"selectable":"unselectable")}))}(t,e,o):function(t,e){var o='[data-attr="'+t.id+'"]';e.find(o+" .select-"+t.id+" option:first").attr("value",t.resetUrl),t.values.forEach((function(t){var a=e.find(o+' [data-attr-value="'+t.value+'"]');a.attr("value",t.url).removeAttr("disabled"),t.selectable||a.attr("disabled",!0)}))}(t,e)}))}(t.product.variationAttributes,e,t.resources),o="variant"===t.product.productType,a&&o&&(e.parent(".bonus-product-item").data("pid",t.product.id),e.parent(".bonus-product-item").data("ready-to-order",t.product.readyToOrder))),function(t,e){var o=e.find(".carousel");$(o).carousel("dispose");var a=$(o).attr("id");$(o).empty().append('<ol class="carousel-indicators"></ol><div class="carousel-inner" role="listbox"></div><a class="carousel-control-prev" href="#'+a+'" role="button" data-slide="prev"><span class="fa icon-prev" aria-hidden="true"></span><span class="sr-only">'+$(o).data("prev")+'</span></a><a class="carousel-control-next" href="#'+a+'" role="button" data-slide="next"><span class="fa icon-next" aria-hidden="true"></span><span class="sr-only">'+$(o).data("next")+"</span></a>");for(var n=0;n<t.length;n++)$('<div class="carousel-item"><img src="'+t[n].url+'" class="d-block img-fluid" alt="'+t[n].alt+" image number "+parseInt(t[n].index,10)+'" title="'+t[n].title+'" itemprop="image" /></div>').appendTo($(o).find(".carousel-inner")),$('<li data-target="#'+a+'" data-slide-to="'+n+'" class=""></li>').appendTo($(o).find(".carousel-indicators"));$($(o).find(".carousel-item")).first().addClass("active"),$($(o).find(".carousel-indicators > li")).first().addClass("active"),1===t.length&&$($(o).find('.carousel-indicators, a[class^="carousel-control-"]')).detach(),$(o).carousel(),$($(o).find(".carousel-indicators")).attr("aria-hidden",!0)}(t.product.images.large,e),a)||($(".prices .price",e).length?$(".prices .price",e):$(".prices .price")).replaceWith(t.product.price.html);(e.find(".promotions").empty().html(t.product.promotionsHtml),function(t,e){var o="",a=t.product.availability.messages;t.product.readyToOrder?a.forEach((function(t){o+="<li><div>"+t+"</div></li>"})):o="<li><div>"+t.resources.info_selectforstock+"</div></li>",$(e).trigger("product:updateAvailability",{product:t.product,$productContainer:e,message:o,resources:t.resources})}(t,e),a)?e.find(".select-bonus-product").trigger("bonusproduct:updateSelectButton",{product:t.product,$productContainer:e}):$("button.add-to-cart, button.add-to-cart-global, button.update-cart-product-global").trigger("product:updateAddToCart",{product:t.product,$productContainer:e}).trigger("product:statusUpdate",t.product);e.find(".main-attributes").empty().html(function(t){if(!t)return"";var e="";return t.forEach((function(t){"mainAttributes"===t.ID&&t.attributes.forEach((function(t){e+='<div class="attribute-values">'+t.label+": "+t.value+"</div>"}))})),e}(t.product.attributes))}function l(t,e){if(e.parent(".bonus-product-item").length<=0){var o=t.map((function(t){var e=t.selected?" selected ":"";return'<option value="'+t.value+'"  data-url="'+t.url+'"'+e+">"+t.value+"</option>"})).join("");i(e).empty().html(o)}}function c(t,e){t&&($("body").trigger("product:beforeAttributeSelect",{url:t,container:e}),$.ajax({url:t,method:"GET",success:function(t){s(t,e),d(t.product.optionsHtml,e),l(t.product.quantities,e),$("body").trigger("product:afterAttributeSelect",{data:t,container:e}),$.spinner().stop()},error:function(){$.spinner().stop()}}))}function u(t){var e=$("<div>").append($.parseHTML(t));return{body:e.find(".choice-of-bonus-product"),footer:e.find(".modal-footer").children()}}function p(t){var e;$(".modal-body").spinner().start(),0!==$("#chooseBonusProductModal").length&&$("#chooseBonusProductModal").remove(),e=t.bonusChoiceRuleBased?t.showProductsUrlRuleBased:t.showProductsUrlListBased;var o='\x3c!-- Modal --\x3e<div class="modal fade" id="chooseBonusProductModal" tabindex="-1" role="dialog"><span class="enter-message sr-only" ></span><div class="modal-dialog choose-bonus-product-dialog" data-total-qty="'+t.maxBonusItems+'"data-UUID="'+t.uuid+'"data-pliUUID="'+t.pliUUID+'"data-addToCartUrl="'+t.addToCartUrl+'"data-pageStart="0"data-pageSize="'+t.pageSize+'"data-moreURL="'+t.showProductsUrlRuleBased+'"data-bonusChoiceRuleBased="'+t.bonusChoiceRuleBased+'">\x3c!-- Modal content--\x3e<div class="modal-content"><div class="modal-header">    <span class="">'+t.labels.selectprods+'</span>    <button type="button" class="close pull-right" data-dismiss="modal">        <span aria-hidden="true">&times;</span>        <span class="sr-only"> </span>    </button></div><div class="modal-body"></div><div class="modal-footer"></div></div></div></div>';$("body").append(o),$(".modal-body").spinner().start(),$.ajax({url:e,method:"GET",dataType:"json",success:function(t){var e=u(t.renderedTemplate);$("#chooseBonusProductModal .modal-body").empty(),$("#chooseBonusProductModal .enter-message").text(t.enterDialogMessage),$("#chooseBonusProductModal .modal-header .close .sr-only").text(t.closeButtonText),$("#chooseBonusProductModal .modal-body").html(e.body),$("#chooseBonusProductModal .modal-footer").html(e.footer),$("#chooseBonusProductModal").modal("show"),$.spinner().stop()},error:function(){$.spinner().stop()}})}function f(){var t=[];return $(".bundle-item").each((function(){t.push({pid:$(this).find(".product-id").text(),quantity:parseInt($(this).find("label.quantity").data("quantity"),10)})})),t.length?JSON.stringify(t):[]}function m(t){var e=window.location.href;console.log(e);var o=window.location.search;console.log(o);const a=new URLSearchParams(window.location.search);console.log(a.get("customerID")),alert("above options");var n=t.find(".product-option").map((function(){var e=$(this).find(".options-select"),o=e.val(),a=e.find('option[value="'+o+'"]');const n=new URLSearchParams(window.location.search);return console.log(n.get("customerID")),alert(1),alert("below options"),t.find(".gift-amount-div").length>0?(a=$("button.gift-amount[disabled]").attr("gift-option"),alert("giftcard"),{optionId:$(this).data("option-id"),selectedValueId:a}):n.get("customerID")?(a=e.find('option[value="'+o+'"]').data("value-id"),alert("friend"),{optionId:$(this).data("option-id"),selectedValueId:a,sendersID:n.get("customerID")}):(alert("base"),{optionId:$(this).data("option-id"),selectedValueId:a})})).toArray();return alert("after map"),$("body").find("#engraving-div").length>0&&"engravingCost"==$("button.engrave-toggle-button[disabled]").attr("engraving-option-id")&&n.push({engravingMessage:$("#engraving-message").val()?$("#engraving-message").val().trim():""}),JSON.stringify(n)}function v(t){t&&$.ajax({url:t,method:"GET",success:function(){},error:function(){}})}t.exports={attributeSelect:c,handleVariantResponse:s,updateOptions:d,updateQuantities:l,methods:{editBonusProducts:function(t){p(t)}},focusChooseBonusProductModal:function(){$("body").on("shown.bs.modal","#chooseBonusProductModal",(function(){$("#chooseBonusProductModal").siblings().attr("aria-hidden","true"),$("#chooseBonusProductModal .close").focus()}))},onClosingChooseBonusProductModal:function(){$("body").on("hidden.bs.modal","#chooseBonusProductModal",(function(){$("#chooseBonusProductModal").siblings().attr("aria-hidden","false")}))},trapChooseBonusProductModalFocus:function(){$("body").on("keydown","#chooseBonusProductModal",(function(t){var e={event:t,containerSelector:"#chooseBonusProductModal",firstElementSelector:".close",lastElementSelector:".add-bonus-products"};a.setTabNextFocus(e)}))},colorAttribute:function(){$(document).on("click",'[data-attr="color"] button',(function(t){if(t.preventDefault(),!$(this).attr("disabled")){var e=$(this).closest(".set-item");e.length||(e=$(this).closest(".product-detail")),c($(this).attr("data-url"),e)}}))},selectAttribute:function(){$(document).on("change",'select[class*="select-"], .options-select',(function(t){t.preventDefault();var e=$(this).closest(".set-item");e.length||(e=$(this).closest(".product-detail")),c(t.currentTarget.value,e)}))},availability:function(){$(document).on("change",".quantity-select",(function(t){t.preventDefault();var e=$(this).closest(".product-detail");e.length||(e=$(this).closest(".modal-content").find(".product-quickview")),0===$(".bundle-items",e).length&&c($(t.currentTarget).find("option:selected").data("url"),e)}))},addToCart:function(){$(document).on("click","button.add-to-cart, button.add-to-cart-global",(function(){var t,e,o,a;$("body").trigger("product:beforeAddToCart",this),$(".set-items").length&&$(this).hasClass("add-to-cart-global")&&(a=[],$(".product-detail").each((function(){$(this).hasClass("product-set-detail")||a.push({pid:$(this).find(".product-id").text(),qty:$(this).find(".quantity-select").val(),options:m($(this))})})),o=JSON.stringify(a)),e=n($(this));var i=$(this).closest(".product-detail");if(i.length||(i=$(this).closest(".quick-view-dialog").find(".product-detail")),t=$(".add-to-cart-url").val(),console.log("isGiftCard",$("#isGiftCard").val()),"true"==$("#isGiftCard").val()){document.getElementById("emailError").innerHTML="",document.getElementById("invalid-feedback-email1").innerHTML="",document.getElementById("senderName").innerHTML="",document.getElementById("message").innerHTML="";var d=$("#emailVerify").val(),s=/^[a-zA-Z ]{2,30}$/;if(""==d)return $("#emailError").html('<p class="text-danger">please fill out this field<p>'),!1;if(!d.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))return console.log("not correct"),$("#emailError").html('<p class="text-danger">Email is incorrect<p>'),!1;var l=$("#recipientName").val();if(""==l)return console.log("empty remail"),$("#invalid-feedback-email1").html('<p class="text-danger">please fill out this field<p>'),!1;if(!l.match(s))return console.log("Name regex is not valid"),$("#invalid-feedback-email1").html('<p class="text-danger">Name Format is incorrect<p>'),!1;var c=$("#senderName").val();if(!c.match(s))return console.log("Name regex is not valid"),$("#invalid-feedback-email1").html('<p class="text-danger">Name Format is incorrect<p>'),!1;if(""==c)return console.log("empty remail"),$(".invalid-feedback-email2").html('<p class="text-danger">please fill out this field<p>'),!1;if($(".invalid-feedback-email2").html(""),""==$("#message").val())return console.log("empty remail"),$(".invalid-feedback-email3").html('<p class="text-danger">please fill out this field<p>'),!1;$(".invalid-feedback-email3").html("");var u=$("#emailVerify").val(),h=[];h.push({recipientEmail:$("#emailVerify").val(),recipientName:$("#recipientName").val(),senderName:$("#senderName").val(),message:$("#message").val()}),console.log(u);var b={pid:e,pidsObj:o,childProducts:f(),quantity:r($(this)),giftdetail:JSON.stringify(h)};$("#exampleModalLong").modal("hide"),$("#emailVerify").val(""),$("#recipientName").val(""),$("#senderName").val(""),$("#message").val("")}else b={pid:e,pidsObj:o,childProducts:f(),quantity:r($(this))};const g=new URLSearchParams(window.location.search);alert(g.get("customerID")),g.get("customerID")&&(b.senderId=g.get("customerID"),console.log(b)),$(".bundle-item").length||(b.options=m(i)),$(this).trigger("updateAddToCartFormData",b),t&&($.spinner().start(),$.ajax({url:t,method:"POST",data:b,success:function(t){!function(t){$(".minicart").trigger("count:update",t);var e=t.error?"alert-danger":"alert-success";t.newBonusDiscountLineItem&&0!==Object.keys(t.newBonusDiscountLineItem).length?p(t.newBonusDiscountLineItem):(0===$(".add-to-cart-messages").length&&$("body").append('<div class="add-to-cart-messages" style="margin-top:6rem"></div>'),$(".add-to-cart-messages").append('<div class="alert '+e+' add-to-basket-alert text-center" role="alert">'+t.message+"</div>"),setTimeout((function(){$(".add-to-basket-alert").remove()}),5e3))}(t),$("body").trigger("product:afterAddToCart",t),$.spinner().stop(),v(t.reportingURL)},error:function(){$.spinner().stop()}}))}))},selectBonusProduct:function(){$(document).on("click",".select-bonus-product",(function(){var t=$(this).parents(".choice-of-bonus-product"),e=$(this).data("pid"),o=$(".choose-bonus-product-dialog").data("total-qty"),a=parseInt(t.find(".bonus-quantity-select").val(),10),n=0;$.each($("#chooseBonusProductModal .selected-bonus-products .selected-pid"),(function(){n+=$(this).data("qty")})),n+=a;var i=t.find(".product-option").data("option-id"),r=t.find(".options-select option:selected").data("valueId");if(n<=o){var d='<div class="selected-pid row" data-pid="'+e+'"data-qty="'+a+'"data-optionID="'+(i||"")+'"data-option-selected-value="'+(r||"")+'"><div class="col-sm-11 col-9 bonus-product-name" >'+t.find(".product-name").html()+'</div><div class="col-1"><i class="fa fa-times" aria-hidden="true"></i></div></div>';$("#chooseBonusProductModal .selected-bonus-products").append(d),$(".pre-cart-products").html(n),$(".selected-bonus-products .bonus-summary").removeClass("alert-danger")}else $(".selected-bonus-products .bonus-summary").addClass("alert-danger")}))},removeBonusProduct:function(){$(document).on("click",".selected-pid",(function(){$(this).remove();var t=$("#chooseBonusProductModal .selected-bonus-products .selected-pid"),e=0;t.length&&t.each((function(){e+=parseInt($(this).data("qty"),10)})),$(".pre-cart-products").html(e),$(".selected-bonus-products .bonus-summary").removeClass("alert-danger")}))},enableBonusProductSelection:function(){$("body").on("bonusproduct:updateSelectButton",(function(t,e){$("button.select-bonus-product",e.$productContainer).attr("disabled",!e.product.readyToOrder||!e.product.available);var o=e.product.id;$("button.select-bonus-product",e.$productContainer).data("pid",o)}))},showMoreBonusProducts:function(){$(document).on("click",".show-more-bonus-products",(function(){var t=$(this).data("url");$(".modal-content").spinner().start(),$.ajax({url:t,method:"GET",success:function(t){var e=u(t);$(".modal-body").append(e.body),$(".show-more-bonus-products:first").remove(),$(".modal-content").spinner().stop()},error:function(){$(".modal-content").spinner().stop()}})}))},addBonusProductsToCart:function(){$(document).on("click",".add-bonus-products",(function(){var t=$(".choose-bonus-product-dialog .selected-pid"),e="?pids=",o=$(".choose-bonus-product-dialog").data("addtocarturl"),a={bonusProducts:[]};$.each(t,(function(){var t=parseInt($(this).data("qty"),10),e=null;t>0&&($(this).data("optionid")&&$(this).data("option-selected-value")&&((e={}).optionId=$(this).data("optionid"),e.productId=$(this).data("pid"),e.selectedValueId=$(this).data("option-selected-value")),a.bonusProducts.push({pid:$(this).data("pid"),qty:t,options:[e]}),a.totalQty=parseInt($(".pre-cart-products").html(),10))})),e=(e=(e+=JSON.stringify(a))+"&uuid="+$(".choose-bonus-product-dialog").data("uuid"))+"&pliuuid="+$(".choose-bonus-product-dialog").data("pliuuid"),$.spinner().start(),$.ajax({url:o+e,method:"POST",success:function(t){$.spinner().stop(),t.error?($("#chooseBonusProductModal").modal("hide"),0===$(".add-to-cart-messages").length&&$("body").append('<div class="add-to-cart-messages"></div>'),$(".add-to-cart-messages").append('<div class="alert alert-danger add-to-basket-alert text-center" role="alert">'+t.errorMessage+"</div>"),setTimeout((function(){$(".add-to-basket-alert").remove()}),3e3)):($(".configure-bonus-product-attributes").html(t),$(".bonus-products-step2").removeClass("hidden-xl-down"),$("#chooseBonusProductModal").modal("hide"),0===$(".add-to-cart-messages").length&&$("body").append('<div class="add-to-cart-messages"></div>'),$(".minicart-quantity").html(t.totalQty),$(".add-to-cart-messages").append('<div style="z-index:2;" class="alert alert-success add-to-basket-alert text-center" role="alert">'+t.msgSuccess+"</div>"),setTimeout((function(){$(".add-to-basket-alert").remove(),$(".cart-page").length&&location.reload()}),1500))},error:function(){$.spinner().stop()}})}))},getPidValue:n,getQuantitySelected:r,miniCartReportingUrl:v}},2:function(t,e,o){"use strict";t.exports={setTabNextFocus:function(t){if("Tab"===t.event.key||9===t.event.keyCode){var e=$(t.containerSelector+" "+t.firstElementSelector),o=$(t.containerSelector+" "+t.lastElementSelector);if($(t.containerSelector+" "+t.lastElementSelector).is(":disabled")&&(o=$(t.containerSelector+" "+t.nextToLastElementSelector),$(".product-quickview.product-set").length>0)){var a=$(t.containerSelector+" a#fa-link.share-icons");o=a[a.length-1]}t.event.shiftKey?$(":focus").is(e)&&(o.focus(),t.event.preventDefault()):$(":focus").is(o)&&(e.focus(),t.event.preventDefault())}}}},20:function(t,e,o){"use strict";var a=o(0);$(document).ready((function(){a(o(21)),a(o(22))}))},21:function(t,e,o){"use strict";var a=o(1);t.exports={methods:{updateAddToCartEnableDisableOtherElements:function(t){$("button.add-to-cart-global").attr("disabled",t)}},availability:a.availability,addToCart:a.addToCart,updateAttributesAndDetails:function(){$("body").on("product:statusUpdate",(function(t,e){var o=$('.product-detail[data-pid="'+e.id+'"]');o.find(".description-and-detail .product-attributes").empty().html(e.attributesHtml),e.shortDescription?(o.find(".description-and-detail .description").removeClass("hidden-xl-down"),o.find(".description-and-detail .description .content").empty().html(e.shortDescription)):o.find(".description-and-detail .description").addClass("hidden-xl-down"),e.longDescription?(o.find(".description-and-detail .details").removeClass("hidden-xl-down"),o.find(".description-and-detail .details .content").empty().html(e.longDescription)):o.find(".description-and-detail .details").addClass("hidden-xl-down")}))},showSpinner:function(){$("body").on("product:beforeAddToCart product:beforeAttributeSelect",(function(){$.spinner().start()}))},updateAttribute:function(){$("body").on("product:afterAttributeSelect",(function(t,e){$(".product-detail>.bundle-items").length||$(".product-set-detail").eq(0)?(e.container.data("pid",e.data.product.id),e.container.find(".product-id").text(e.data.product.id)):($(".product-id").text(e.data.product.id),$('.product-detail:not(".bundle-item")').data("pid",e.data.product.id))}))},updateAddToCart:function(){$("body").on("product:updateAddToCart",(function(e,o){$("button.add-to-cart",o.$productContainer).attr("disabled",!o.product.readyToOrder||!o.product.available);var a=$(".product-availability").toArray().every((function(t){return $(t).data("available")&&$(t).data("ready-to-order")}));t.exports.methods.updateAddToCartEnableDisableOtherElements(!a)}))},updateAvailability:function(){$("body").on("product:updateAvailability",(function(t,e){if($("div.availability",e.$productContainer).data("ready-to-order",e.product.readyToOrder).data("available",e.product.available),$(".availability-msg",e.$productContainer).empty().html(e.message),$(".global-availability").length){var o=$(".product-availability").toArray().every((function(t){return $(t).data("available")})),a=$(".product-availability").toArray().every((function(t){return $(t).data("ready-to-order")}));$(".global-availability").data("ready-to-order",a).data("available",o),$(".global-availability .availability-msg").empty().html(a?e.message:e.resources.info_selectforstock)}}))},sizeChart:function(){$(".size-chart a").on("click",(function(t){t.preventDefault();var e=$(this).attr("href"),o=$(this).closest(".size-chart").find(".size-chart-collapsible");o.is(":empty")&&$.ajax({url:e,type:"get",dataType:"json",success:function(t){o.append(t.content)}}),o.toggleClass("active")}));var t=$(".size-chart-collapsible");$("body").on("click touchstart",(function(e){$(".size-chart").has(e.target).length<=0&&t.removeClass("active")}))},copyProductLink:function(){$("body").on("click","#fa-link",(function(){event.preventDefault();var t=$("<input>");$("body").append(t),t.val($("#shareUrl").val()).select(),document.execCommand("copy"),t.remove(),$(".copy-link-message").attr("role","alert"),$(".copy-link-message").removeClass("d-none"),setTimeout((function(){$(".copy-link-message").addClass("d-none")}),3e3)}))},focusChooseBonusProductModal:a.focusChooseBonusProductModal()}},22:function(t,e,o){$(document).ready((function(){var t=o(1);$(document).on("click",".gift-amount",(function(){var e=$(this).val(),o=$(this).closest(".set-item");o.length||(o=$(this).closest(".product-detail")),$.spinner().start(),$.ajax({url:e,method:"GET",success:function(e){t.handleVariantResponse(e,o),t.updateOptions(e.product.optionsHtml,o),t.updateQuantities(e.product.quantities,o),$("body").trigger("product:afterAttributeSelect",{data:e,container:o}),$.spinner().stop()},error:function(){$.spinner().stop()}})})),$(document).on("click","#addGiftCard",(function(){window.location.href;const t=new URLSearchParams(window.location.search);console.log(t.get("name")),console.log(t.get("email")),document.getElementById("emailVerify").setAttribute("value",t.get("email")),document.getElementById("recipientName").value=t.get("name")}))}))}});