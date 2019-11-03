import Big from 'big.js';

export default function doOperation (firstNo, secondNo, operation) {
  const first = Big(firstNo || "0");
  const second = Big(secondNo || (operation === "/" || operation === "*" ? "1" : "0"));

  if (operation === "+") {
    return first.plus(second).toString();
  }
  if (operation === "-") {
    return first.minus(second).toString();
  }
  if (operation === "x") {
    return first.times(second).toString();
  }
  if (operation === "/") {
    if (second === "0") {
      alert("Dividing by 0!");
      return "0";
    } else {
      return first.div(second).toString();
    }
  }
  throw Error(`Unknown operation ${operation}`);
}