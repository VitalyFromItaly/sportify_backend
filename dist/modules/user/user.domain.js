"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELanguages = exports.EGoal = exports.EUserStatus = exports.EGender = void 0;
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
var EGoal;
(function (EGoal) {
    EGoal[EGoal["WEIGHT_REDUCTION"] = 0] = "WEIGHT_REDUCTION";
    EGoal[EGoal["MUSCLE_GAIN"] = 1] = "MUSCLE_GAIN";
    EGoal[EGoal["WEIGHT_MAINTENANCE"] = 2] = "WEIGHT_MAINTENANCE";
    EGoal[EGoal["COMPETITION_PREPARATION"] = 3] = "COMPETITION_PREPARATION";
})(EGoal = exports.EGoal || (exports.EGoal = {}));
var ELanguages;
(function (ELanguages) {
    ELanguages["EN"] = "en";
    ELanguages["RU"] = "ru";
})(ELanguages = exports.ELanguages || (exports.ELanguages = {}));
//# sourceMappingURL=user.domain.js.map