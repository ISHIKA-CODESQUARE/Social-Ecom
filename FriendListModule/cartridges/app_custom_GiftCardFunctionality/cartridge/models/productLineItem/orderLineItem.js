'use strict'
var base =  module.superModule;


module.exports = function orderLineItem(product, apiProduct, options) {
    base(product, apiProduct, options);
    product.isGiftCard = apiProduct.custom.isGiftCard; // update attribute for order of giftcard
    // product.SenderID = options.lineItem.custom.senderID;

    return product
}

