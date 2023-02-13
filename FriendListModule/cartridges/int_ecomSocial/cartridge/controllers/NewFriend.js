'use strict'

var server = require("server");
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var Transaction = require('dw/system/Transaction');
var URLUtils = require('dw/web/URLUtils');

// List of request sent by the sender
server.get('getRequest',function(req,res,next){
    var requests = []
    var address = false
    if(customer.addressBook.addresses.length > 0){
        address = true;
    }
    Transaction.wrap(function(){
    var a = CustomObjectMgr.getAllCustomObjects('Requests');
    while(a.hasNext()){
        var object = a.next();
        if(customer.profile.customerNo == object.custom.ReceiverAddress){
            requests.push({
                object:object,
                customer:customer
            });
        }    
        else if(customer.profile.email == object.custom.ReceiversEmail){
            object.custom.ReceiverAddress = customer.profile.customerNo;
            requests.push({
                    customer:customer,
                    object:object 
                });
        }
        else{
        }
    } 
})

    res.render('friendList/requests',{requests:requests,address:address});
    next();
})

// Accept the request then it redirect to the Accepted request sending data to the next controller and changing the status.
server.get('AcceptRequest',function(req,res,next){
    var CustomerMgr = require('dw/customer/CustomerMgr');

    var id = req.querystring.id;
    var status = null;
    var sender_customerNo = null;
    var receiver_customerNo = null;
    if(id != null){
    var customers = CustomerMgr.queryProfiles('firstName != null',null,'asc');
    while(customers.hasNext()){
        var list_of_customer = customers.next();
    Transaction.wrap(function(){
        var a = CustomObjectMgr.getCustomObject(`Requests`,id);
        if(list_of_customer.customerNo == a.custom.ReceiverAddress){
            receiver_customerNo = a.custom.ReceiverAddress;
            sender_customerNo = a.custom.SenderAddress;
        }
        a.custom.Status = true;
        status = a.custom.Status;
        })
    }
}
    res.redirect(URLUtils.url('FriendListUpdated-AcceptedRequestFriends','sender',sender_customerNo,'receiver',receiver_customerNo,'id',id));
    next()
})

// this works at the receivers side when he decline the request sent by the sender
server.get('DeclineRequest',function(req,res,next){
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var id = req.querystring.id;
    var friend_request = CustomObjectMgr.getCustomObject(`Requests`,id);
    Transaction.wrap(()=>{
        CustomObjectMgr.remove(friend_request);
    })
    res.redirect(URLUtils.url('NewFriend-getRequest'));
    next();
})

// this works when the request remains pending and now wants to remove the request 
//  Redirected from pendingRequest function of friendlistupadted controller.
server.get('DeleteRequest',function(req,res,next){
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
     
    var address = false
    if(customer.addressBook.addresses.length > 0){
        address = true;
    }

    var id = req.querystring.id;
    var friend_request = CustomObjectMgr.getCustomObject(`Requests`,id);
    Transaction.wrap(()=>{
        CustomObjectMgr.remove(friend_request);
    })
    res.render('friendList/pendingRequests',{address:address
    });
    next();
})


module.exports = server.exports();