import { getNanoId, getUuid } from "./index";

test("that uuid returns a value", () => {
  expect(getUuid()).not.toBe(null);
});

test("that nanoId returns a value", () => {
  expect(getNanoId()).not.toBe(null);
});
