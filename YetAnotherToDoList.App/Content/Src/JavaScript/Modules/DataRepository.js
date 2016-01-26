(function ($, notifications, undef) {
    'use strict';
    var repository = {
    
        },
        api = {
            AddTask: function() {
                notifications.Notify('Add Task in repository');
            },
            GetTasks: function() {
                notifications.Notify('Get Task in repository');
            },
            DeleteTask: function() {
                notifications.Notify('Delete Task in repository');
            },
            UpdateTask: function() {
                notifications.Notify('Update Task in repository');
            }
        };
    module.exports = api;
}(jQuery, require('NotificationManager')));