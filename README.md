## Info

nokia_maps_rjs is a RequireJS plugin for loading Nokia Maps API features thru `nokia.Features.load`

More about RequireJS [here](http://requirejs.org)

## Example

    require.config({
        waitSeconds: 15,
        paths: {
            nokiaLoader: 'http://api.maps.nokia.com/2.2.4/jsl.js?blank=true', // the important part here is to not load any of the API parts apart the loader itself -> blank=true
            domReady: 'requirejs_plugins/domReady',  // you need to add it on your own; download it from: http://requirejs.org/docs/download.html#domReady
            nokia: 'requirejs_plugins/nokia' // that is path to the nokia.js file on your local file system
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


## License

Released under the MIT license