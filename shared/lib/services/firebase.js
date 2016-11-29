"use strict";
var request = require('request');
var FirebaseHttp = (function () {
    function FirebaseHttp(_baseUrl, _authToken) {
        this._baseUrl = _baseUrl;
        this._authToken = _authToken;
    }
    FirebaseHttp.prototype.get = function (relativePath) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request(_this._baseUrl + relativePath + ".json", function (error, resp, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        });
    };
    FirebaseHttp.prototype.set = function (relativePath, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request.put(_this._baseUrl + relativePath + '.json', { body: JSON.stringify(body) }, function (error, resp, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        });
    };
    FirebaseHttp.prototype.push = function (relativePath, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request.post(_this._baseUrl + relativePath + '.json', { body: JSON.stringify(body) }, function (error, resp, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        });
    };
    FirebaseHttp.prototype.getauth = function () {
        if (this._authToken) {
            return "?auth=" + this._authToken;
        }
        else {
            return "";
        }
    };
    return FirebaseHttp;
}());
exports.FirebaseHttp = FirebaseHttp;
