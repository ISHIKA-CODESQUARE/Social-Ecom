'use strict';
// var base = module.superModule;

/**
 * Creates a plain object that contains payment instrument information
 * @param {Object} userPaymentInstruments - current customer's paymentInstruments
 * @returns {Object} object that contains info about the current customer's payment instruments
 */
function getCustomerPaymentInstruments(userPaymentInstruments) {
     var paymentInstruments;
     var URLUtils = require('dw/web/URLUtils');
     paymentInstruments = userPaymentInstruments.map(function (paymentInstrument) {
         var result = {
             creditCardHolder: paymentInstrument.creditCardHolder,
             maskedCreditCardNumber: paymentInstrument.maskedCreditCardNumber,
             creditCardType: paymentInstrument.creditCardType,
             creditCardExpirationMonth: paymentInstrument.creditCardExpirationMonth,
             creditCardExpirationYear: paymentInstrument.creditCardExpirationYear,
             UUID: paymentInstrument.UUID
         };
 
         result.cardTypeImage = {
             src: URLUtils.staticURL('/images/' +
                 paymentInstrument.creditCardType.toLowerCase().replace(/\s/g, '') +
                 '-dark.svg'),
             alt: paymentInstrument.creditCardType
         };
 
         return result;
     });
 
     return paymentInstruments;
 }

/**
 * Account class that represents the current customer's profile dashboard
 * @param {Object} currentCustomer - Current customer
 * @param {Object} addressModel - The current customer's preferred address
 * @param {Object} orderModel - The current customer's order history
 * @constructor
 */

function account(currentCustomer, addressModel, orderModel) {
     // To show UserWallet on my account page
     module.superModule.call(this, currentCustomer, addressModel, orderModel);
     if (currentCustomer) {
          try {
               if (currentCustomer.raw.profile.custom.userWallet != null) {
                    this.profile.userWallet = currentCustomer.raw.profile.custom.userWallet;
               }
               else {
                    this.profile.userWallet = 0.00;
               }
          } catch (error) {
               if (this.profile) {
                    this.profile.userWallet = 0.00;
               }
          }
     }
}

account.getCustomerPaymentInstruments = getCustomerPaymentInstruments;
module.exports = account;