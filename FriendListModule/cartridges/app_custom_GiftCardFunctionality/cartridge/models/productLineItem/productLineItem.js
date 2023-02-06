'use strict'
var base =  module.superModule;


module.exports = function productLineItem(product, apiProduct, options) {
    base(product, apiProduct, options);
    product.isGiftCard = apiProduct.custom.isGiftCard; // update giftcard attributr for product line item
    product.SenderID = options.lineItem.custom.senderID;


    return product
}

