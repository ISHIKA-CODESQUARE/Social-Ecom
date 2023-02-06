'use strict'
var base =  module.superModule;


module.exports = function productLineItem(product, apiProduct, options) {
    base(product, apiProduct, options);
    product.SenderID = options.lineItem.custom.senderID; // update giftcard attributr for product line item

    return product
}