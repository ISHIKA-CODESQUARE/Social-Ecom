'use strict';

var base =  module.superModule;

function addLineItem(currentBasket,product,quantity,childProducts,optionModel,defaultShipment,options) {
    base(currentBasket,product,quantity,childProducts,optionModel,defaultShipment,options);

    productLineItem.custom.senderID = options[0].sendersId;
    return productLineItem;
}


function getExistingProductLineItemInCart(product, productId, productLineItems, childProducts, options) {
    var tempExisting = base.getExistingProductLineItemsInCart(product, productId, productLineItems, childProducts, options);

    // handel quantity incriment based on if product is gift card and has option gift - CUSTOM
    if (options.length > 0) {
        if (options[0].optionId == "gift") {
          return false;
        }
        else{
            return base.getExistingProductLineItemsInCart(product, productId, productLineItems, childProducts, options)[0];
        }
      }
    else {
        return base.getExistingProductLineItemsInCart(product, productId, productLineItems, childProducts, options)[0];
    }

}
base.getExistingProductLineItemInCart = getExistingProductLineItemInCart;
base.addLineItem = addLineItem;
module.exports = base;

