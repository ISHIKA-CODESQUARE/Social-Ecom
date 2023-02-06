'use strict';
var server = require('server');
var page = require("app_storefront_base/cartridge/controllers/Order");
server.extend(page);

server.append(
    'Confirm',
    function (req, res, next) {
        var Transaction = require('dw/system/Transaction');
        var response = res.getViewData();
        Transaction.wrap( function () {
            for (var i = 0; i < response.order.items.items.length; i++) {
                var senderID = response.order.items.items[i].SenderID;
                if (senderID != 'null') {
                var sender = CustomerMgr.getCustomerByCustomerNumber(senderID);
                sender.profile.custom.userWallet += 5;
            }};
        });
        res.setViewData(response);

        next();
    });
module.exports = server.exports();
