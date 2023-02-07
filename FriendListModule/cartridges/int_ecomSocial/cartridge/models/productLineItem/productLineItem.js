'use strict'
var base =  module.superModule;


module.exports = function productLineItem(product, apiProduct, options) {
    base(product, apiProduct, options);
    product.SenderID = options.lineItem.custom.senderID; // update friendlist attributre for product line item
    product.isGiftCard = apiProduct.custom.isGiftCard; // update giftcard attribute for product line item
    return product
}