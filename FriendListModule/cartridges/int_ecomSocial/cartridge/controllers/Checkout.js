'use strict';

/**
 * @namespace Checkout
 */

var server = require('server');
var page = module.superModule; //inherits functionality from next Product.js found to the right on the cartridge path
server.extend(page);
var cache = require("*/cartridge/scripts/middleware/cache");
server.extend(module.superModule)
var COHelpers = require('*/cartridge/scripts/checkout/checkoutHelpers');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var URLUtils = require('dw/web/URLUtils');
var Transaction = require("dw/system/Transaction");
var Logger = require("dw/system/Logger");
var URLUtils = require("dw/web/URLUtils");
var ProductList = require('dw/customer/ProductList');
var ProductListMgr = require('dw/customer/ProductListMgr');

/**
 * Main entry point for Checkout
 */

/**
 * Checkout-Begin : The Checkout-Begin endpoint will render the checkout shipping page for both guest shopper and returning shopper
 * @name Base/Checkout-Begin
 * @function
 * @memberof Checkout
 * @param {serverfunction} - append
 */
server.append('Begin', function ( req, res, next ) {
    var dataObj = res.getViewData();

    var id = req.querystring.id;
    var productlist = [];
    var productListData = null;

    Transaction.wrap(function () {
        var productList = ProductListMgr.getProductLists(customer , 100);
        if(productList.length == 0){
            var ProductList = ProductListMgr.createProductList(customer, 100)
            productList = ProductList
        }else
        {
            productList = productList[0];
        }
        productListData = productList.getItems();

        var productList = productList.getItem(id);
        productlist.push(productList);

      });
      dataObj.id = id;
      dataObj.productList = productlist;
      dataObj.productListData = productListData;
      res.setViewData(dataObj);

    // res.render('checkout/checkout',{
    //     id:id,
    //     productList : productlist,
    //     productListData: productListData
    // });

    next();
})

/**
 * Checkout-Applygiftcard :Method to Apply giftcard,control comes via ajax here.
 * @name Checkout-Applygiftcard
 * @function
 * @memberof Checkout
 * @param {serverfunction} - get
 */
server.get("Applygiftcard", function (req, res, next) {
    var giftCertificateCode = req.querystring.GiftCardCode;
    var appliedAmount = req.querystring.redeemamount;
    var currentCustomer = req.currentCustomer.raw;
    var GiftCertificate = require("dw/order/GiftCertificate");
    var Resource = require('dw/web/Resource');
    var collections = require("*/cartridge/scripts/util/collections");
    var GiftCertificateMgr = require("dw/order/GiftCertificateMgr");
    var GiftCertificateLineItem = require("dw/order/GiftCertificateLineItem");
    var GiftCertificateStatusCodes = require("dw/order/GiftCertificateStatusCodes");
    var LineItemCtnr = require("dw/order/LineItemCtnr");
    var BasketMgr = require("dw/order/BasketMgr");
    var Order = require("dw/order/Order");
    var Money = require("dw/value/Money");
    var Basket = BasketMgr.getCurrentBasket();
    var currencyCode = req.session.currency.currencyCode;
    var giftPaymentInstrument = null;
    var redeemGiftDetail = null;
  
    if (Basket.totalGrossPrice.value < appliedAmount) {
      var data = {
        msg:Resource.msgf('error.InvalidAppliedAmount', 'giftCard', null, Basket.totalGrossPrice.value),
        success: false,
      };
      res.json(data);
      return next();
    }
    try {
      var PriceAdjustment = null;
      var realAppliedAmount = null;
      giftCertificateCode = giftCertificateCode.toString();
      var giftcertificatedetail =
        GiftCertificateMgr.getGiftCertificateByCode(giftCertificateCode);
  
      if (currentCustomer.profile.email != giftcertificatedetail.recipientEmail) {
        var data = {
          msg: Resource.msg('error.InvalidRecipient', 'giftCard', null),
          success: false,
        };
        res.json(data);
        return next();
      } else {
        if (giftcertificatedetail.balance.value >= appliedAmount) {
          var Money = Money(appliedAmount, currencyCode);
          Transaction.wrap(() => {
            Basket.removeAllPaymentInstruments();
            giftPaymentInstrument = Basket.createGiftCertificatePaymentInstrument(
              giftCertificateCode,
              Money
            );
            redeemGiftDetail = GiftCertificateMgr.redeemGiftCertificate(
              giftPaymentInstrument
            );
          });
  
          if (!redeemGiftDetail.error) {
            giftcertificatedetail =
              GiftCertificateMgr.getGiftCertificateByCode(giftCertificateCode);
  
            var data = {
              msg:Resource.msgf('success.giftRedeemSuccess', 'giftCard', null, giftcertificatedetail.balance.value) ,
              success: true,
            };
            res.json(data);
          }
        } else {
          var data = {
            msg:Resource.msgf('error.giftInsufficientbalance', 'giftCard', null, giftcertificatedetail.balance.value),
            success: false,
          };
          res.json(data);
          return next();
        }
      }
    } catch (error) {
      var data = {
        error: error,
        msg: Resource.msg('error.technicalCatch', 'giftCard', null),
        success: false,
      };
      res.json(data);
    }
    next();
  });
module.exports= server.exports()