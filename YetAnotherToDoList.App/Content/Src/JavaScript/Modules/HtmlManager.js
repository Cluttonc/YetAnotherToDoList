(function ($, notifications, undef) {
    'use strict';
    var html = {
            defaultParameters: {
                tag: null,
                content: null,
                validate: function() {
                    return (tag !== null);
                }
            }
        },
        api = {
            //ToDo: Attributes, void elements
            CreateElement: function (params) {
                var parameters = $.extend(params, html.defaultParameters);

                if (!parameters.validate()) {
                    notifications.Notify('Dom Element missing parameters');
                }

                if (parameters.content === null) {
                    //Void Element
                }
                return '<' + parameters.tag + '>' + parameters.content + '</' + parameters.tag + '>';
            }
        };
    module.exports = api;
}(jQuery, require('NotificationManager')));