"use strict";
var blankSchema = {
    emailHeaders: [],
    emailContent: [],
    testVal: "sadfsa"
};
exports.Schema = {
    userData: {
        _: 'user-data',
        user: function (id) {
            return {
                _: id
            };
        }
    }
};
var Database = (function () {
    function Database(_fb) {
        this._fb = _fb;
    }
    Database.prototype.createForNewUser = function (userId) {
        return this._fb.set(exports.Schema.userData.user(userId)._, userId);
    };
    return Database;
}());
exports.Database = Database;
