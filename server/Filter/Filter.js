"use strict";
var Filter = (function () {
    function Filter() {
    }
    //TODO:add more filters
    Filter.prototype.passed = function (data) {
        var contentType = data.contentType;
        if (contentType.startsWith('text') || contentType.startsWith('image') || contentType == "application/javascript") {
            return false;
        }
        else {
            return true;
        }
    };
    return Filter;
}());
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map