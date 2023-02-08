'use strict'
var base =  module.superModule;


 function addLineItem(currentBasket,product,quantity,childProducts,optionModel,defaultShipment,options) {
    base(currentBasket,product,quantity,childProducts,optionModel,defaultShipment,options);

    productLineItem.custom.senderID = options[0].senderId;
    return productLineItem;
}
base.addLineItem = addLineItem;
module.exports =base;
