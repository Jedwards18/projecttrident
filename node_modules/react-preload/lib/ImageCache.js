"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hash = {};
var cache = [];

var add = function add(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!hash[url]) {
        hash[url] = new Image();

        if (options.crossOrigin) {
            hash[url].crossOrigin = options.crossOrigin;
        }

        hash[url].src = url;

        cache.push(hash[url]);
    }
    return hash[url];
};

var get = function get(url, options) {
    return add(url, options);
};

var stuff = function stuff(urls, options) {
    if (urls.length > 0) {
        urls.map(function (url) {
            return add(url, options);
        });
    }
};

var ImageCache = {
    add: add,
    stuff: stuff,
    get: get,
    hash: hash,
    cache: cache
};

exports.default = ImageCache;