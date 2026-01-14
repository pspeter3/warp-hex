import { expect, test } from "vitest";
import { NAME } from "./main";

test("name", () => {
  expect(NAME).toBe("warp-hex");
});
