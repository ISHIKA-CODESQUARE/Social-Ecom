$(document).ready(function () {
  var base = require("./base");
  // Setup option for gift card - CUSTOM
  $(document).on("click", ".gift-amount", function () {
    var btnUrl = $(this).val();
    var $productContainer = $(this).closest(".set-item");
    if (!$productContainer.length) {
      $productContainer = $(this).closest(".product-detail");
    }
    $.spinner().start();
    // Ajax for setup the option selection and update price based on the selection
    $.ajax({
      url: btnUrl,
      method: "GET",
      success: function (data) {
        base.handleVariantResponse(data, $productContainer);
        base.updateOptions(data.product.optionsHtml, $productContainer);
        base.updateQuantities(data.product.quantities, $productContainer);
        $("body").trigger("product:afterAttributeSelect", {
          data: data,
          container: $productContainer,
        });
        $.spinner().stop();
      },
      error: function () {
        $.spinner().stop();
      },
    });
  });

  $(document).on("click", "#addGiftCard", function () {
    var currentURL1 = window.location.href;
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("name"));
    console.log(params.get("email"));
    document
      .getElementById("emailVerify")
      .setAttribute("value", params.get("email"));
    document.getElementById("recipientName").value = params.get("name");
  });
});
