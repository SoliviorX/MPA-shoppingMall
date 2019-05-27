'use strict'; 
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    // 从url携带的参数获取到type值
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 当type为payment时，给‘订单支付成功结果页’的‘查看订单详情’链接加上orderNumber
    if(type === 'payment'){
        var orderNumber = _mm.getUrlParam('orderNumber');
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href',$orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})