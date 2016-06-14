var request = require("request"),
    _ = require("underscore"),
    phpjs = require("phpjs"),
    querystring = require("querystring"),
    Promise = require('bluebird'),
    cheerio = require('cheerio');

module.exports = function(opts) {
    opts = _.defaults(opts, {
        text: "text",
        source: "en",
        target: "es"
    });

    var url = "https://translate.google.com/";
    var data = {
        "sl": querystring.escape(opts.source),
        "tl": querystring.escape(opts.target),
        "js": querystring.escape("n"),
        "prev": querystring.escape("_t"),
        "hl": querystring.escape(opts.source),
        "ie": querystring.escape("UTF-8"),
        "text": opts.text,
        "file": querystring.escape(""),
        "edit-text": querystring.escape("")
    };

    return new Promise(function(resolve, reject) {

        request.post({
            uri: url,
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            body: querystring.stringify(data)
        }, function(error, response, body) {
            if (error) {
                return reject(error);
            }
            var $ = cheerio.load(body);
            content = $('#result_box').text();
            resolve(content);
        });
    });
};