import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw new Error("Expected an error");
    }
    return e.message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
