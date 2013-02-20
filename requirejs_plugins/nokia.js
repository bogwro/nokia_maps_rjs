/**
 * RequireJS plugin for loading Nokia Maps API features thru `nokia.Features.load`
 * @author Bogumil Wrona
 * @license Released under the MIT license
 */


/**
 * RequireJS Plugin
 * @param {Array} nokiaLoader module which has defined path and shim
 * @example

require.config({
    waitSeconds: 15,
    paths: {
        nokiaLoader: 'http://api.maps.nokia.com/2.2.4/jsl.js?blank=true',
        domReady: 'requirejs_plugins/domReady',
        nokia: 'requirejs_plugins/nokia'
    },
    shim: {
        nokiaLoader: {
            exports: 'nokia'
        }
    }
});
require(['nokia!', 'domReady!'], function() {
    var map = new nokia.maps.map.Display(document.getElementById('map'), {
        center: [52.521542, 13.382178],
        zoomLevel: 6,
        components: [
            new nokia.maps.map.component.Behavior(),
            new nokia.maps.map.component.TypeSelector(),
            new nokia.maps.map.component.DistanceMeasurement(),
            new nokia.maps.map.component.Overview()
        ]
    });
});
 */
define(['nokiaLoader'], function(nokia) {
    var _uid = 0,
        DEFAULT_MODULES = ['all'],
        uid = function() {
            _uid +=1;
            return '__async_nokia_features_' + _uid + '__';
        },
        load = function(name, req, onLoad, config) {
            if(config.isBuild) {
                onLoad(null);
            } else {
                var id = uid(),
                    features = ('' !== name) ? name.split(',') : DEFAULT_MODULES;
                window[id] = onLoad;
                nokia.Features.load(nokia.Features.getFeaturesFromMatrix(features), function() {
                    window[id]();
                }, function() {
                    console && console.log && console.log('ERROR while loading nokia map api module(s)');
                }, document, false);
            }
        } ;

    return {
        load: load
    }

});