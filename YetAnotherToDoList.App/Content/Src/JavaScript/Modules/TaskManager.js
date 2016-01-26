(function ($, dom, html, repository, undef) {
    'use strict';
    var taskManager = {
        init: function() {
            $('.add').on('click', taskManager.events.add);
            $('.update').on('click', taskManager.events.update);
            $('.delete').on('click', taskManager.events.remove);
        },
        events: {
            add: function (evt) {
                repository.AddTask();
            },
            update: function(evt) {
                repository.UpdateTask();
            },
            remove: function (evt) {
                repository.DeleteTask();
            }
        }
    };
    taskManager.init();
}(jQuery,
    require('DomManager'),
    require('HtmlManager'),
    require('DataRepository')));