import Big from 'big.js';
import doOperation from "./doOperation";

function isNumber(item) {
    return /[0-9]+/.test(item);
}
export default function calculate(stateObj, buttonText) {
    const { total, next, operation } = stateObj;
    debugger;
    if (buttonText === "AC") {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }
    if (isNumber(buttonText)) {
        if (buttonText === "0" || next === "0") {
            return {};
        }
        if (operation) {
            return next ? { next: next + buttonText }
                : { next: buttonText };
        }
        if (next) {
            const nextConst = next === "0" ? buttonText
                : next + buttonText;
            return {
                next: nextConst,
                total: null,
            }
        }
        return {
            next: buttonText,
            total: null,
        }
    }
    if (buttonText === "%") {
        if (operation && next) {
            const result = doOperation(total, next, operation);
            return { total: Big(result).div(Big("100")).toString() };
        }
        if (next) {
            return { next: Big(next).div(Big("100")).toString() };
        }
        return {};
    }
    if (buttonText === ".") {
        if (next) {
            return next.includes(".") ? {} : { next: next + "." };
        }
        return { next: "0."};
    }
    if (buttonText === "=") {
        if (next && operation) {
            return {
                total: doOperation(total, next, operation),
                next: null,
                operation: null,
            }
        }
        return {};
    }
    if (buttonText === "+/-") {
        if (next) {
            return { next: (-1 * parseFloat(next).toString()) };
        }
        if (total) {
            return { total: (-1 * parseFloat(total).toString()) };
        }
        return {};
    }
    if (operation) {
        return {
            total: doOperation(total, next, operation),
            next: null,
            operation: buttonText,
        }
    }
    if (!next) {
        return { operation: buttonText };
    }

    return {
        total: next,
        next: null,
        operation: buttonText,
    }
}