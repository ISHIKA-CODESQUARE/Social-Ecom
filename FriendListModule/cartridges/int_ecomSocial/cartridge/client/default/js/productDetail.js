'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('./product/detail'));
    // processInclude(require('./product/engraveMessage'));
    processInclude(require('./product/Giftbtn'));
});