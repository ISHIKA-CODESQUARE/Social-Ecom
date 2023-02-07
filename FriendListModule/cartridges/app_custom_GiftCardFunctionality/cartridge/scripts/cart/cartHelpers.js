'use strict'

 var base = module.superModule;

'use strict';

var ProductMgr = require('dw/catalog/ProductMgr');
var Resource = require('dw/web/Resource');
var Transaction = require('dw/system/Transaction');
var URLUtils = require('dw/web/URLUtils');

var collections = require('*/cartridge/scripts/util/collections');
var ShippingHelpers = require('*/cartridge/scripts/checkout/shippingHelpers');
var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
var arrayHelper = require('*/cartridge/scripts/util/array');
var BONUS_PRODUCTS_PAGE_SIZE = 6;





/**
 * Filter the product line item matching productId and
 * has the same bundled items or options in the cart
 * @param {dw.catalog.Product} product - Product object
 * @param {string} productId - Product ID to match
 * @param {dw.util.Collection<dw.order.ProductLineItem>} productLineItems - Collection of the Cart's
 *     product line items
 * @param {string[]} childProducts - the products' sub-products
 * @param {SelectedOption[]} options - product options
 * @return {dw.order.ProductLineItem} - get the first product line item matching productId and
 *     has the same bundled items or options
 */
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

module.exports = base;
