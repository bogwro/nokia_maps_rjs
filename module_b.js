define(['module_a', 'nokia!'], function(modA) {

    return new ovi.Class({
        Extends: nokia.maps.map.overlay.ObjectProvider,

        Mixins: [nokia.maps.dom.EventTarget],

        // Setup stuff from the configuration
        initialize: function (options) {
            this.customObj = modA;
        }

    });

});



