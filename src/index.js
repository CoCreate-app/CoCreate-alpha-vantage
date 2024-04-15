(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["./client"], function (CoCreateAlphaVantage) {
            return factory(CoCreateAlphaVantage)
        });
    } else if (typeof module === 'object' && module.exports) {
        const CoCreateAlphaVantage = require("./server.js")
        module.exports = factory(CoCreateAlphaVantage);
    } else {
        root.returnExports = factory(root["./client.js"]);
    }
}(typeof self !== 'undefined' ? self : this, function (CoCreateAlphaVantage) {
    return CoCreateAlphaVantage;
}));