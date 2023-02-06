'use strict'
var base =  module.superModule;


module.exports = function orderLineItem(product, apiProduct, options) {
    base(product, apiProduct, options);
    product.SenderID = options.lineItem.custom.senderID; // update attribute for order of giftcard

    return product
}
