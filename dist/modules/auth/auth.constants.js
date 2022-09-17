"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PUBLIC_KEY = exports.EExpirationTime = exports.EStrategies = void 0;
var EStrategies;
(function (EStrategies) {
    EStrategies["LOCAL"] = "local";
    EStrategies["JWT"] = "jwt";
})(EStrategies = exports.EStrategies || (exports.EStrategies = {}));
var EExpirationTime;
(function (EExpirationTime) {
    EExpirationTime[EExpirationTime["TWO_DAYS"] = 172800000] = "TWO_DAYS";
    EExpirationTime[EExpirationTime["ONE_MONTH"] = 2592000000] = "ONE_MONTH";
})(EExpirationTime = exports.EExpirationTime || (exports.EExpirationTime = {}));
exports.IS_PUBLIC_KEY = 'isPublic';
//# sourceMappingURL=auth.constants.js.map