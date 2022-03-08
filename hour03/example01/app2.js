var http = require('http');
var _ = require('underscore');
var urls = ['www.google.com','www.youtube.com','www.amazon.com']

function fetchPage(url) {
    var start = new Date();

    http.get({host: url}, function (res) {
        console.log("Response from " + url);
        console.log("Took ", new Date() - start, "ms");
    })
}

_.each(urls, function(url) {
    fetchPage(url);
})