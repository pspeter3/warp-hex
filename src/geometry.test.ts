import { expect, suite, test } from "vitest";
import { Hex, Point2D, Triangle } from "./geometry";

suite("Point2D", () => {
  test("stores the provided coordinates", () => {
    const point = new Point2D(4, -2);

    expect(point.x).toBe(4);
    expect(point.y).toBe(-2);
  });
});

suite("Hex", () => {
  test("exposes axial coordinates through q and r", () => {
    const hex = new Hex(4, -1);

    expect(hex.q).toBe(4);
    expect(hex.r).toBe(-1);
  });

  test("computes the derived s coordinate on demand", () => {
    const hex = new Hex(2, 3);

    // Cube coordinates must satisfy q + r + s = 0
    expect(hex.s).toBe(-5);
    expect(hex.q + hex.r + hex.s).toBe(0);
  });
});

suite("Triangle", () => {
  test("captures each side length", () => {
    const triangle = new Triangle(3, 4, 5);

    expect(triangle.a).toBe(3);
    expect(triangle.b).toBe(4);
    expect(triangle.c).toBe(5);
  });
});
