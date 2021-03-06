"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minLength = void 0;
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function minLength(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "minLength"
    };
    const validatorOptionTypeChecker = (validatorOption) => {
        const error = new ErrorHandler_1.default();
        if (typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("minLength", "number");
        }
        return typeof validatorOption;
    };
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (stringNotNull_1.default(stringToCheck) && validatorOptionType === "number") {
        const stringToCheckConverted = stringToCheck.toString();
        if (stringToCheckConverted.length < validatorOption) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (stringToCheckConverted.length >= validatorOption) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}
exports.minLength = minLength;
