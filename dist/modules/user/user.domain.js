"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELanguages = exports.EUserStatus = exports.EGender = void 0;
var EGender;
(function (EGender) {
    EGender[EGender["MALE"] = 1] = "MALE";
    EGender[EGender["FEMALE"] = 2] = "FEMALE";
    EGender[EGender["OTHER"] = 3] = "OTHER";
})(EGender = exports.EGender || (exports.EGender = {}));
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["NEW"] = 0] = "NEW";
    EUserStatus[EUserStatus["KNOWN"] = 1] = "KNOWN";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
var ELanguages;
(function (ELanguages) {
    ELanguages["EN"] = "en";
    ELanguages["RU"] = "ru";
})(ELanguages = exports.ELanguages || (exports.ELanguages = {}));
//# sourceMappingURL=user.domain.js.map