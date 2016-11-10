cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-twitter.TwitterPlugin",
        "file": "plugins/cordova-twitter/www/TwitterPlugin.js",
        "pluginId": "cordova-twitter",
        "clobbers": [
            "Twitter"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-gpslocation.Coordinates",
        "file": "plugins/cordova-plugin-gpslocation/www/Coordinates.js",
        "pluginId": "cordova-plugin-gpslocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "id": "cordova-plugin-gpslocation.PositionError",
        "file": "plugins/cordova-plugin-gpslocation/www/PositionError.js",
        "pluginId": "cordova-plugin-gpslocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "id": "cordova-plugin-gpslocation.Position",
        "file": "plugins/cordova-plugin-gpslocation/www/Position.js",
        "pluginId": "cordova-plugin-gpslocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "id": "cordova-plugin-gpslocation.GPSLocation",
        "file": "plugins/cordova-plugin-gpslocation/www/GPSLocation.js",
        "pluginId": "cordova-plugin-gpslocation",
        "clobbers": [
            "window.GPSLocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-twitter": "0.8.5",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-geolocation": "2.1.0",
    "cordova-plugin-gpslocation": "1.0.0"
};
// BOTTOM OF METADATA
});