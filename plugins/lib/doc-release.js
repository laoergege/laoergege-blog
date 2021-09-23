"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docRelease = void 0;
var docRelease = function () {
    return {
        name: 'DocRelease',
        onInitialized: function (app) {
            var result = [];
            for (var _i = 0, _a = app.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (page.frontmatter.release) {
                    result.push(page);
                }
            }
            app.pages = result;
        },
    };
};
exports.docRelease = docRelease;
