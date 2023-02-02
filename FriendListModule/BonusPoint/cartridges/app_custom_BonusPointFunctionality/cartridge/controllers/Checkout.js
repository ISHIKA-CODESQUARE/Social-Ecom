'use strict';

/**
 * @namespace Checkout
 */

var server = require('server');
var cache = require("*/cartridge/scripts/middleware/cache");
server.extend(module.superModule)
var COHelpers = require('*/cartridge/scripts/checkout/checkoutHelpers');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var URLUtils = require('dw/web/URLUtils');
/**
 * Main entry point for Checkout
 */

/**
 * Checkout-Begin : The Checkout-Begin endpoint will render the checkout shipping page for both guest shopper and returning shopper
 * @name app_custom_BonusPointFunctionality/Checkout-Begin
 * @function
 * @memberof Checkout
 * @param {serverfunction} - get
 */
server.append(
    'Begin',function (req, res, next) {
        var responseData =res.getViewData()
        var BasketMgr = require('dw/order/BasketMgr');
        var currentBasket=BasketMgr.getCurrentBasket();
        var currentWallet = 0;
        try {
            currentWallet = currentCustomer.profile.custom.userWallet
        } catch (error) {
            currentWallet = 0
        }
  
        var userBonusPointPercent = dw.system.Site.current.preferences.custom.userBonusPointPercent
        var canBeApplied=  Math.round((currentWallet) % (userBonusPointPercent)) ;
        var showLine = false;
        var appliedBonusPoint=null;
        var promotionID = currentBasket.getPriceAdjustmentByPromotionID("bonusPointUses")
        if (promotionID != null) {
            showLine = true;
            appliedBonusPoint = (-promotionID.price.value);
  
        }
        responseData.currentWallet=currentWallet;
        responseData.appliedBonusPoint=appliedBonusPoint;
        res.setViewData(responseData);
        return next();
    }
  );




/**
 * Checkout-UpdateBonus :This is the method to update Bonus via productLine Item
 * @name Checkout-UpdateBonus
 * @function
 * @memberof Checkout
 * @param {serverfunction} - post
 */

server.post("UpdateBonus", function (req, res, next) {
    var bPoint = req.form.bonusPoint;
    var currentCustomer = req.currentCustomer.raw;
    var Transaction = require('dw/system/Transaction');
    var BasketMgr = require('dw/order/BasketMgr');
    var currentBasket = BasketMgr.getCurrentBasket();

    // bonusPercentOfTotal is a custom preference which shows how many percent customer wants to give discount on base.
    var bonusPercentOfTotal = dw.system.Site.current.preferences.custom.bonusPercentOfTotal
    var LineItemCtnr = require('dw/order/LineItemCtnr');
    var totalNetPrice = currentBasket.totalNetPrice.value;
    var toPercent = totalNetPrice * (bonusPercentOfTotal / 100);

    if (currentCustomer.profile.custom.userWallet < bPoint) {
        var data = {
            appliedPoint: bPoint,
            msg: "Applied bonus cannot be greater than wallet bonus",
            success: false
        };

        res.json(data);
        return next();
    }
    if (Number(bPoint) > toPercent) {
        var data = {
            appliedPoint: bPoint,
            msg: "Applied Bonus Point cannot be greater the " + bonusPercentOfTotal + " % of total",
            success: false
        };
        res.json(data)
        return next();
    }

    try {
        Transaction.wrap(function () {
            //from the current basket creating price adjustment  with promotion ID statically passing as :bonusPointUses
            var PriceAdjustment = currentBasket.createPriceAdjustment("bonusPointUses", new dw.campaign.AmountDiscount(bPoint));
            currentCustomer.profile.custom.userWallet = currentCustomer.profile.custom.userWallet - Number(bPoint);
            //   var promotionID = currentBasket.getPriceAdjustmentByPromotionID("bonusPointUses")
            //     Transaction.wrap(function () {
            //         promotionID.taxRate-=taxRate;
            //     });

            var nowPoint = currentCustomer.profile.custom.userWallet;
            var data = {
                appliedPoint: bPoint,
                nowPoint: nowPoint,
                msg: "Bonus Point applied successfully",
                success: true
            };
            
            res.json(data)
        })

    } catch (error) {
        //for already bonus getting price adjustment bonusPointUses
        var promotionID = currentBasket.getPriceAdjustmentByPromotionID("bonusPointUses")
        var data = {
            appliedPoint: bPoint,
            promotionID: JSON.stringify(promotionID),
            msg: " Sorry, You have already applied bonus points",
            success: false
        };
        res.json(data)
        return next();
    }

    next();
});

/**
 * Checkout-removeBonus :Method to remove Bonus applied bonus, control comes via ajax here.
 * @name Checkout-removeBonus
 * @function
 * @memberof Checkout
 * @param {serverfunction} - get
 */
server.get("removeBonus", function (req, res, next) {
    var currentCustomer = req.currentCustomer.raw;
    var BasketMgr = require('dw/order/BasketMgr');
    var currentBasket = BasketMgr.getCurrentBasket();
    var ProductMgr = require('dw/catalog/ProductMgr');
    var PriceAdjustment = require('dw/order/PriceAdjustment');
    var LineItemCtnr = require('dw/order/LineItemCtnr');
    var Transaction = require('dw/system/Transaction');
    //Via price adjustment getting promotion via Statically passing PromotionID

    var promotionID = currentBasket.getPriceAdjustmentByPromotionID("bonusPointUses")

    //if promotionID exists then removing and updating its value.
    if (promotionID != null) {
        var price = promotionID.price.value;
        Transaction.wrap(function () {
            currentBasket.removePriceAdjustment(promotionID);
            currentCustomer.profile.custom.userWallet = currentCustomer.profile.custom.userWallet - price
        })
    }

    var presentBonusPoint = currentCustomer.profile.custom.userWallet;
    var data = {
        success: true,
        msg: "Bonus Point Removed Successfully",
        currentWallet: presentBonusPoint,
    }   
    res.redirect(URLUtils.url('Checkout-Begin'))

    next();

})

module.exports = server.exports();