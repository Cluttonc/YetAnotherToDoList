(function (dom, undef) {
    'use strict';
    var notifications = {

        },
        api = {
            Notify: function (message) {
                dom.AddElement('.notifications', '<li>' + message + '</li>');
            },
            ClearNotifications: function () {
                dom.ModifiyElement('.notifications', '');
            }
        };
    module.exports = api;
}(require('DomManager')));