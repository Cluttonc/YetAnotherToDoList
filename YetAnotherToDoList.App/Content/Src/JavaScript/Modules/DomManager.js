(function ($, undef) {
    'use strict';
    var $Dom = $('html'),
        domManager = {
            //Playing with api so not abstracting yet
        },
        api = {
            AddElement: function(selector, content) {
                $Dom.find(selector).append(content);
            },
            ModifiyElement: function(selector, content) {
                $Dom.find(selector).html(content);
            },
            RemoveElement: function(selector) {
                $Dom.find(selector).remove();
            }
        };
    module.exports = api;
}(jQuery));