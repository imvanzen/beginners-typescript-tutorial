import { expect, it } from "vitest";

type CoerceAmountArg = number | { amount: number };

const coerceAmount = (amount: CoerceAmountArg) => {
  if (typeof amount === "number") {
    return amount;
  }

  if (typeof amount === "object" && amount !== null) {
    return amount.amount;
  }
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
