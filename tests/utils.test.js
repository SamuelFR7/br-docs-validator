import { describe, expect, it } from "vitest";
import { utils } from "../src/";

describe("strip", () => {
  it("should strip a cpf", () => {
    expect(utils.strip("562.919.840-83")).toBe("56291984083");
  });

  it("should strip a cnpj", () => {
    expect(utils.strip("79.402.591/0001-83")).toBe("79402591000183");
  });
});
