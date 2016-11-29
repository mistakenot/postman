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
                _: 'user-data/' + id,
                inboxItems: {
                    _: 'user-data/inbox-items/',
                    item: function (id) {
                        return {
                            _: 'user-data/inbox-items/',
                            item: function (itemId) { return 'user-data/inbox-items/' + itemId; }
                        };
                    }
                }
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
